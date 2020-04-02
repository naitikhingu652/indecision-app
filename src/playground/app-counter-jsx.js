let count = 0;

const plusOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const resetCount = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const counterAppTemplate = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={plusOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
  ReactDOM.render(counterAppTemplate, appRoot);
};

renderCounterApp();