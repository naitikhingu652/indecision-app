const add = function (a, b) {
  console.log(arguments);
  return a + b;
};
console.log(add(2, 3));

const addArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(addArrow(20, 30));


const user1 = {
  name: 'Naitik',
  cities: ['Pune', 'Bangalore', 'Hyderabad'],
  printPlacesLived: function() {
    console.log(`${this.name} has lived in ${this.cities}`)

    const that  = this;
    this.cities.forEach(function(city) {
      // console.log(`${this.name} has lived in ${city}`)
      console.log(`${that.name} has lived in ${city}`)
    });
  }
};
user1.printPlacesLived();

const user2 = {
  name: 'Naitik',
  cities: ['Pune', 'Bangalore', 'Hyderabad'],
  // printPlacesLived: () => {
  printPlacesLived: function() {
    this.cities.forEach((city) => {
      console.log(`${this.name} has lived in ${city}`)
    });
  }
};
user2.printPlacesLived()

const user3 = {
  name: 'Naitik',
  cities: ['Pune', 'Bangalore', 'Hyderabad'],
  printPlacesLived() {
    this.cities.forEach((city) => {
      console.log(`${this.name} has lived in ${city}`)
    });
  }
};
user3.printPlacesLived()

const user4 = {
  name: 'Naitik',
  cities: ['Pune', 'Bangalore', 'Hyderabad'],
  printPlacesLived() {
    const cityMessages = this.cities.map((city) => `${this.name} has lived in ${city}`);
    return cityMessages;
  }
};
console.log(user4.printPlacesLived());


const multiplier = {
  numbers: [1, 2, 3, 4],
  multiplyBy: 10,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}
console.log(multiplier.multiply())