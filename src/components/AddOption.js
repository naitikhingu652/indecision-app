import React from 'react';

export default class AddOption extends React.Component {

  state = {
    errorMessage: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const errorMessage = this.props.handleAddOption(option);

    this.setState(() => ({ errorMessage }));

    if (!errorMessage) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" autoComplete="off" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
