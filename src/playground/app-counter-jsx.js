let count = 0;

const handlePlusOne = () => {
  count++;
  renderCounterApp();
};
const handleMinusOne = () => {
  count--;
  renderCounterApp();
};
const handleResetCount = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const counterAppTemplate = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handlePlusOne}>+1</button>
      <button onClick={handleMinusOne}>-1</button>
      <button onClick={handleResetCount}>Reset</button>
    </div>
  );
  ReactDOM.render(counterAppTemplate, appRoot);
};

renderCounterApp();