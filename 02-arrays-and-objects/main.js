//array-basics
{
    let x;

    // array literal
    const numbers = [12, 45, 23, 23, 45, 345];
    const mixed = [12, 'Hello', true, null, ' '];

    // array contructor
    const fruits = new Array('apple', 'grape', 'orange');
    console.log(fruits);

    //get value by index
    x = numbers[0];
    console.log(x);
    x = numbers[0] + numbers[4];  // cộng giá trị của phần tử
    console.log(x);
    x = ` Xin chào số báo danh: ${numbers[4]}`;
    console.log(x);

    // độ dài của mảng
    x = numbers.length
    console.log(x);

    fruits[3] = 'ổi';
    console.log(fruits[3]);

    fruits[fruits.length] = 'cherry'; // thêm vào cuối mảng mảng
    fruits[fruits.length] = 'mít'; // thêm vào mảng
    x = fruits;
    console.log(x);

}
//array-methods
{
    let x;
    const arr = [28, 23, 45, 234, 546];
    // push(): thêm phần tử vào cuối mảng
    arr.push(100);
    console.log(arr);

    // pop(): cắt bỏ giá trị cuối cùng của mảng và trả về mảng chứa các phần tử còn lại
    arr.pop();
    console.log(arr);

    // unshift(): thêm phần tử vào đầu mảng
    arr.unshift(99);
    console.log(arr);

    // reverse(): đảo ngược thứ tự phần tử trong mảng
    arr.reverse();
    console.log(arr);

    // includes(): kiểm tra xem giá trị cần tìm có trong mảng không: trả về true false
    x = arr.includes(445);
    console.log(x);

    // indexOf('value'): trả về vị trí index tìm thấy đầu tiên nếu mảng đó có 2 hay nhiều giá trị đang tìm
    x = arr.indexOf(28);
    console.log(x);

    // trả về mảng dưới dạng chuỗi 
    x = arr.toString();
    console.log(x);
    x = arr.join();
    console.log(x);

    //slice(x,y): trả về 1 mảng gồm các phần tử thứ x đến phần tử thứ y -1
    x = arr.slice(1, 4);
    console.log(x);

    // splice(x,y): trả về 1 mảng gồm các phần tử thứ x đến phần tử thứ y 
    x = arr.splice(1, 4);
    console.log(x);

    // Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
    // => Xóa một phần tử/giá trị - Phần sau đây sẽ thay đổi mảng ban đầu bằng cách loại bỏ phần tử có chỉ số là 4. x sẽ bằng một mảng mới có giá trị được lấy ra đó.
    x = arr.splice(4, 1);
    console.log(x);

    // Chaining methods - Some methods can be chained depending on the return value.
    x = arr.slice(1, 4).reverse().toString().charAt(0);
    console.log(x);

}
//array-nesting-concat-spread
{
    let x;
    const fruits = ['apple', 'pear', 'orange'];
    const berries = ['strawberry', 'blueberry', 'rasberry'];

    fruits.push(berries);  // thêm mảng berries vào mảng fruits
    console.log(fruits);
    x = fruits[3][1];

    const allFruits = [fruits, berries];
    x = allFruits[1][2];
    console.log(x);

    x = fruits.concat(berries); // nối 2 mảng
    console.log(x);

    x = [...fruits, ...berries];
    console.log(...x);
    console.log(x);

    // flat(): giải nén các phần tử của mảng con trong mảng cha thành các phần tử của mảng cha
    const arr = [1, 2, [3, 4, 5,], 6, [7, 8]];
    x = arr.flat();
    console.log(x);

    // isArray(): check is is an array và trả về true false
    x = Array.isArray(fruits);
    console.log(x);

    // from(): biến chuỗi thành 1 mảng các phần tử , mỗi phần tử là 1 kí tự.
    x = Array.from('12345');
    console.log(x);  // x= ['1','2','3','4','5'];

    // of(): gom giá trị các biến tạo thành các phần tử của mảng mới
    const a = 1;
    const b = 2;
    const c = 3;

    x = Array.of(a, b, c);
    console.log(x);

}
//array-challenge
{
    const arr = [1, 2, 3, 4, 5];
    // push , reverce, unshift. 

    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [5, 6, 7, 8, 9, 10];
    const arr3 = arr1.slice(0, 4).concat(arr2);
    console.log(arr3);
    const arr4 = [...arr1, ...arr2];
    console.log(...arr4);
    arr4.splice(4, 1);
    console.log(...arr4);
}
//object-literal

{
    let x;
    const person = {
        name: 'John Doe',
        age: 30,
        isAdmin: true,
        address: {
            street: '123 Main st',
            city: 'Boston',
            state: 'MA',
        },
        hobbies: ['music', 'sports'],
    };
    console.log(person);
    x = person.name;
    x = person['age'];
    x = person.address.state;
    x = person.hobbies;

    person.name = 'Jane Done';
    person['isAdmin'] = false;

    // delete properties: xóa thuộc tính trong object
    delete person.age;
    console.log(person);

    // tạo thêm thuộc tính mới của object
    person.hasChildren = true;
    // tạo thêm function trong object
    person.greet = function () {
        console.log(`Hello, my name is ${this.name}`);
    };
    console.log(person);

    // gọi riêng function trong object bằng cú pháp sau: 
    person.greet();

    // Keys with multiple words
    const person2 = {
        'first name': 'Brad',
        'last name': 'Traversy',
    };
    x = person2['first name'];
    console.log(x);

}
//object-spread-methods-
{
    let x;
    const todo = new Object();
    todo.id = 1;
    todo.name = "Kim Hue";
    todo.marred = false;
    x = todo;
    console.log(x);

    // object nesting
    const person = {
        address: {
            coords: {
                lat: 42.9384,
                lng: -71.3232,
            },
        },
    };

    x = person.address.coords.lat;
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const obj3 = { ...obj1, ...obj2 };
    const obj4 = Object.assign({}, obj1, obj2);

    // Array of objects
    const todos = [
        { id: 1, name: 'Buy Milk' },
        { id: 2, name: 'Pickup kids from school' },
        { id: 3, name: 'Take out trash' },
    ];
    x = todos[0].name;

    // Get array of object keys
    x = Object.keys(todo);  // lấy key của mảng ( tên thuộc tính)
    console.log(x);

    // Get length of an object : lấy độ dài của key
    x = Object.keys(todo).length;
    console.log(x); // x= 3

    // Get array of object values: lấy value mảng trong object
    x = Object.values(todo);
    console.log(x);

    // Get array of object key/value pairs
    x = Object.entries(todo);
    console.log(x);

    // Kiểm tra đối tượng có thuộc tính cần tìm không và trả về true false
    x = todo.hasOwnProperty('age');

}
