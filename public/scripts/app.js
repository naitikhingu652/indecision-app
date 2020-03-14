"use strict";

console.log('app.js is running!');
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), React.createElement("p", null, app.options && app.options.length > 0 ? "Here are your options" : "No options"), React.createElement("ol", null, React.createElement("li", null, "Item one"), React.createElement("li", null, "Item two")));
var count = 0;

var plusOne = function plusOne() {
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};

var resetCount = function resetCount() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var counterAppTemplate = React.createElement("div", null, React.createElement("h1", null, "Count: ", count), React.createElement("button", {
    onClick: plusOne
  }, "+1"), React.createElement("button", {
    onClick: minusOne
  }, "-1"), React.createElement("button", {
    onClick: resetCount
  }, "Reset"));
  ReactDOM.render(counterAppTemplate, appRoot);
};

renderCounterApp();
