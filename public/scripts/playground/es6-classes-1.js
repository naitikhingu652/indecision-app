"use strict";

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    rendedIndecisionApp();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  rendedIndecisionApp();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var appRoot = document.getElementById('app');

var rendedIndecisionApp = function rendedIndecisionApp() {
  var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), React.createElement("p", null, app.options && app.options.length > 0 ? "Here are your options" : "No options"), React.createElement("button", {
    disabled: app.options && app.options.length === 0,
    onClick: onMakeDecision
  }, "What should I do?"), React.createElement("button", {
    onClick: onRemoveAll
  }, "Remove All"), React.createElement("ol", null, app.options.map(function (option) {
    return React.createElement("li", {
      key: option
    }, option);
  })), React.createElement("form", {
    onSubmit: onFormSubmit
  }, React.createElement("input", {
    type: "text",
    name: "option",
    autoComplete: "off"
  }), React.createElement("button", null, "Add Option")));
  ReactDOM.render(template, appRoot);
};

rendedIndecisionApp();
