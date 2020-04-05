const square = function(x) {
  return x * x;
};
console.log(square(5));

const squareArrow = (x) => {
  return x * x;
};
console.log(squareArrow(10));

const squareArrowMini = (x) => x * x;
console.log(squareArrowMini(15));


const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
};
console.log(getFirstName('Naitik Hingu'));

const getLastNameMini = (fullName) => fullName.split(' ')[1];
console.log(getLastNameMini('Naitik Hingu'));