//console



    // console.log
    console.log(100);
    // Log string
    console.log('Hello mọi người');
    // log multiple values
    console.log(20, 'Hello', true);

    const x = 100;
    console.log(x);

    console.error('Alert');
    console.warn('Warning');

    console.table({ name: 'Brad', email: 'brand@gagmil.com' });

    // group console commands
    console.group('simple');

    const styles = 'padding: 10px; background-color: white; color: green';
    console.log('%cHello World', styles); // %c + string : nhận css từ 1 biến khác riêng biệt




//variables

    let firstName = 'John';
    const lastName = 'Doe';
    let age = 30;

    const arr = [1, 2, 3, 4];

    arr.push(5);  // push: thêm phần tử vào cuối mảng
    console.log(arr);

    const person = {
        name: 'Brad',
    };
    // có thể thay đổi giá trị của từng thuộc tính trong object và thêm thuộc tính mới bằng cú pháp sau
    person.name = 'John';
    person.email = 'phue@gmail.com';
    console.log(person);


    // khai báo nhiều biến 1 lúc
    const d = 10, e = 20, f = 30;
    console.log(d);

//data-types
{

    // các kiểu data type: string, boolean, number, underfined,null, symbol, bigInt,reference Types

    // symbol
    const id = Symbol('id');
    console.log(id);

    // bigInt
    const n = 23784856234758634257n;
    console.log(n);

    // reference Types
    const test = [1, 2, 3, 4];
    const person1 = { name: 'Brad' };
    function sayHello() {
        console.log('Hello');
    }
    const output = sayHello;  // tạo biến mới có giá trị bằng 1 function.
    console.log(output, typeof output);
}

//stack-heap
{
    const name = 'Brad';
    const age = 20;
    const person = {
        name: 'Pit Brad',
        age: 20,
    };

    let newName = name;
    newName = "John Cena";

    let newPerson = person;
    newPerson.name = "John Smith";

    console.log(name, newName);
    console.log(person, newPerson);

}
//type-conversion



    let amount = 'hello';

    // convert string to number
    amount = parseInt(amount);
    console.log(typeof amount); // type number

    // amount = +amount;
    console.log(amount);
    amount = Number(amount);
    console.log(typeof amount); // type number

    // convert number to string
    amount = amount.toString();
    console.log(typeof amount); // type string

    //convert string to decimal: 
    amount = parseFloat(amount);
    console.log(typeof amount); // type number

    // convert number to boolean
    amount = Boolean(amount);
    console.log(typeof amount); // type boolean

    //way to get NaN: not a number
    console.log(Math.sqrt(-1));  // giá trị tuyệt đối
    console.log(1 + NaN);
    console.log(undefined + undefined);
    console.log('foo' / 3);


