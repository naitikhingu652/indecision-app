"use strict";

var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};

console.log(add(2, 3));

var addArrow = function addArrow(a, b) {
  // console.log(arguments);
  return a + b;
};

console.log(addArrow(20, 30));
var user1 = {
  name: 'Naitik',
  cities: ['Pune', 'Bangalore', 'Hyderabad'],
  printPlacesLived: function printPlacesLived() {
    console.log("".concat(this.name, " has lived in ").concat(this.cities));
    var that = this;
    this.cities.forEach(function (city) {
      // console.log(`${this.name} has lived in ${city}`)
      console.log("".concat(that.name, " has lived in ").concat(city));
    });
  }
};
user1.printPlacesLived();
var user2 = {
  name: 'Naitik',
  cities: ['Pune', 'Bangalore', 'Hyderabad'],
  // printPlacesLived: () => {
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    this.cities.forEach(function (city) {
      console.log("".concat(_this.name, " has lived in ").concat(city));
    });
  }
};
user2.printPlacesLived();
var user3 = {
  name: 'Naitik',
  cities: ['Pune', 'Bangalore', 'Hyderabad'],
  printPlacesLived: function printPlacesLived() {
    var _this2 = this;

    this.cities.forEach(function (city) {
      console.log("".concat(_this2.name, " has lived in ").concat(city));
    });
  }
};
user3.printPlacesLived();
var user4 = {
  name: 'Naitik',
  cities: ['Pune', 'Bangalore', 'Hyderabad'],
  printPlacesLived: function printPlacesLived() {
    var _this3 = this;

    var cityMessages = this.cities.map(function (city) {
      return "".concat(_this3.name, " has lived in ").concat(city);
    });
    return cityMessages;
  }
};
console.log(user4.printPlacesLived());
var multiplier = {
  numbers: [1, 2, 3, 4],
  multiplyBy: 10,
  multiply: function multiply() {
    var _this4 = this;

    return this.numbers.map(function (number) {
      return number * _this4.multiplyBy;
    });
  }
};
console.log(multiplier.multiply());
