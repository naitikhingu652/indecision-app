const appRoot = document.getElementById("app");

const app = {
  title: 'Visibility Toggle',
  visibility: false
};

const handleToggleVisibility = () => {
  app.visibility = !app.visibility;
  renderVisibilityToggleApp();
};

const renderVisibilityToggleApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={handleToggleVisibility}>
        {app.visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {app.visibility &&
        <div>
          <p>Hey. Here are some details you can now see!</p>
        </div>
      }
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderVisibilityToggleApp();