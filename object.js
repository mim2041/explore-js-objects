// create object using objects literal
const player = {};
player.name = 'smal nirob';
player.specialty = 'batsman';
player.bat = function(){
    console.log('swing your bat');
}
// console.log(player);
player.bat();


const student = {
    name: 'panday',
    job: 'khali andey',
    ball: function(){
        // console.log('throw the ball')
    },
    salary: 10000
}

// 2. object constructor
const person = new Object();
console.log(person);

// 3. object create method
// const item = Object.create(null);
const atel = Object.create(student);
console.log(atel.name);

// 4. class
class Person{
    name = 'abul';
    address = 'sodor ghat';
    constructor(age){
        this.age = age;
    }
}
const person1 = new Person(56);
console.log(person1);

// 5. function
function Car(model, price){
    this.model = model;
    this.price = price;
}
const newCar = ('elon',10000);
console.log(newCar);