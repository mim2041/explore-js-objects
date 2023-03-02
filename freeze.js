const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
// console.log(keys);

const values = Object.values(bottle);
// console.log(values);

const pair = Object.entries(bottle);
// console.log(pair);

const twoDimension = [[ 'color', 'yellow' ],[ 'price', 50 ], [ 'isCleaned', true ], [ 'capacity', 1 ]];

console.log(bottle);
Object.seal(bottle);
delete bottle.isCleaned;
console.log(bottle);
bottle.isFull = true;
console.log(bottle);
Object.freeze(bottle);
delete bottle.isCleaned;
bottle.name = 'waterbottle';
console.log(bottle);