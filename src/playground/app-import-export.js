import substract, { square, add } from './import-export-utils';
import isSenior, { isAdult, canDrink } from './import-export-person';

console.log(square(4));
console.log(add(2, 3));
console.log(substract(20, 3));

console.log(isAdult(17));
console.log(canDrink(22));
console.log(isSenior(65));