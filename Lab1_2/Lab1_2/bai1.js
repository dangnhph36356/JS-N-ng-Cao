const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: {
    team1: ['Neuer', 'Sule', 'Davies', 'Kimmich', 'Goretzka', 'Muller', 'Sané', 'Gnabry', 'Lewandowski', 'Coman'],
    team2: ['Burki', 'Meunier', 'Hummels', 'Akanji', 'Hakimi', 'Delaney', 'Bellingham', 'Reus', 'Brandt', 'Hazard']
  },
  scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich'],
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5
  },
  events: [
    { minute: 5, event: 'Ghi bàn: Muller' },
    { minute: 23, event: 'Thay người: Coutinho In, Sané Out' },
    { minute: 64, event: 'Thẻ vàng: Davies' },
    { minute: 75, event: 'Thay người: Thiago In, Goretzka Out' },
    { minute: 82, event: 'Ghi bàn: Kimmich' },
    { minute: 88, event: 'Thay người: Perisic In, Coman Out' }
  ]
};

const players1 = [...game.players.team1];
const players2 = [...game.players.team2];

const gk = players1.shift(); // Lấy thủ môn ra khỏi mảng
const fieldPlayers = [...players1];

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1, draw, team2 } = game.odds;

function printGoals(...scorers) {
  scorers.forEach((scorer, index) => console.log(`Goal ${index + 1}: ${scorer}`));
}

printGoals(...game.scored);

console.log(team1 > team2 ? `Chiến thắng của ${game.team1}` : team2 > team1 ? `Chiến thắng của ${game.team2}` : 'Hòa');

const scorers = {};
game.scored.forEach(scorer => (scorers[scorer] = (scorers[scorer] || 0) + 1));
console.log(scorers);

const uniqueEvents = [...new Set(game.events.map(event => event.event))];
console.log(uniqueEvents);

game.events = game.events.filter(event => !(event.minute === 64 && event.event.includes('Yellow Card')));

const totalEvents = game.events.length;
const averageEvents = totalEvents / 90;
console.log(`${totalEvents} sự kiện xảy ra, trung bình mỗi ${Math.round(90 / averageEvents)} phút`);

game.events.forEach(event => {
  const half = event.minute <= 45 ? 'Hiệp 1' : 'Hiệp 2';
  console.log(`${half}: ${event.event}`);
});
