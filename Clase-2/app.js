/*let fs = require('fs');

let datos = fs.readFileSync(__dirname + '/prueba.txt', 'utf-8');

let momento = require('moment');

console.log(datos); 
console.log(momento().format('MMM DD YY'));*moment().format('YYYY/MM/DD')*/


/*let heroes = require('../superheroes');
console.log(heroes);*/

const myNumber = [1,2,3,4,5,6,7]
const myFunction = arr => {
    return arr.map(x => x + 3).filter(x => x < 7);
}