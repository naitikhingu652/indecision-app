class CounterApp extends React.Component {

  constructor(props) {
    super(props);
    this.handlePlusOne = this.handlePlusOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleResetCount = this.handleResetCount.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('count');
      if (!isNaN(json)) {
        this.setState(() => ({ count: parseInt(json, 10) }));
      }
    } catch (e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  handlePlusOne() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleResetCount() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handlePlusOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleResetCount}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<CounterApp />, document.getElementById('app'));