console.log("app.js is running!");

var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var assignmentTemplate = (
  <div>
    <h1>Naitik Hingu</h1>
    <p>Age: 24</p>
    <p>Location: Sydney</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(assignmentTemplate, appRoot);