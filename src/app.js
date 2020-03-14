const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    rendedIndecisionApp();
  }
};

const onRemoveAll = () => {
  app.options = [];
  rendedIndecisionApp();
}

const appRoot = document.getElementById('app');

const rendedIndecisionApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
      <button onClick={onRemoveAll}>Remove All</button>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

rendedIndecisionApp();