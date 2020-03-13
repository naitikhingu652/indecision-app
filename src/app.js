console.log("app.js is running!");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer"
}

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: "Naitik Hingu",
  age: 24,
  location: "Sydney"
};
var assignmentTemplate = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);