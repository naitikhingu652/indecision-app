import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
  };
  handleDeleteAllOptions = () => {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }));
  }
  handlePickOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum]
    this.setState(() => ({ selectedOption: option }));
  }
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item!';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists!';
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer!';

    return (
      <div>
        <Header
          subtitle={subtitle}
        />
        <div className="container">
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
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
