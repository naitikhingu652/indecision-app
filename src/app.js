console.log('app.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No options"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0;

const plusOne = () => {
  console.log('plusOne');
};
const minusOne = () => {
  console.log('minusOne');
};
const resetCount = () => {
  console.log('resetCount');
};

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={plusOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={resetCount}>Reset</button>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);