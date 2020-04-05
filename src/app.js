class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    };
  }

  handleDeleteAllOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }));
  }

  handlePickOption() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum]
    console.log(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item!';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists!';
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer!';

    return (
      <div>
        <Header
          subtitle={subtitle}
        />
        <Action
          hasOptions={this.state.options && this.state.options.length > 0}
          handlePickOption={this.handlePickOption}
        />
        <Options
          options={this.state.options}
          handleDeleteAllOptions={this.handleDeleteAllOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePickOption}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteAllOptions}>Remove All</button>
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {

  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      errorMessage: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const errorMessage = this.props.handleAddOption(option);

    this.setState(() => ({ errorMessage }));

    e.target.elements.option.value = '';
  }

  render() {
    return (
      <div>
        {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" autoComplete="off" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));