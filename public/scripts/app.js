"use strict";

console.log("app.js is running!");
var template = React.createElement("div", null, React.createElement("h1", null, "Indecision App"), React.createElement("p", null, "This is some info"), React.createElement("ol", null, React.createElement("li", null, "Item one"), React.createElement("li", null, "Item two")));
var assignmentTemplate = React.createElement("div", null, React.createElement("h1", null, "Naitik Hingu"), React.createElement("p", null, "Age: 24"), React.createElement("p", null, "Location: Sydney"));
var appRoot = document.getElementById("app");
ReactDOM.render(assignmentTemplate, appRoot);
