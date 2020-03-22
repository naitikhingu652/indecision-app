var nameVar = 'Naitik';
var nameVar = 'Hingu';
console.log('nameVar:', nameVar);

let nameLet = 'Naitik';
nameLet = 'Hingu';
console.log('nameLet:', nameLet);

const nameConst = 'Naitik';
console.log('nameConst:', nameConst);

function getPetName() {
  var petName = 'Hal';
  return petName;
}

const petName = getPetName();
console.log(petName);

const fullName = 'Naitik Hingu';
let lastName;
if (fullName) {
  var firstName = fullName.split(' ')[0];
  lastName = fullName.split(' ')[1]
  console.log(firstName);
  console.log(lastName);
}

console.log(firstName);
console.log(lastName);