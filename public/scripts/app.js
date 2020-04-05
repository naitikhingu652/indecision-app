"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var IndecisionApp = /*#__PURE__*/function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    var _this;

    _classCallCheck(this, IndecisionApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndecisionApp).call(this, props));
    _this.handleDeleteAllOptions = _this.handleDeleteAllOptions.bind(_assertThisInitialized(_this));
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_assertThisInitialized(_this));
    _this.handlePickOption = _this.handlePickOption.bind(_assertThisInitialized(_this));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('fetching data before component mount');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log('Saving data on component update');
    }
  }, {
    key: "handleDeleteAllOptions",
    value: function handleDeleteAllOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return option !== optionToRemove;
          })
        };
      });
    }
  }, {
    key: "handlePickOption",
    value: function handlePickOption() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      console.log(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item!';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists!';
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var subtitle = 'Put your life in the hands of a computer!';
      return React.createElement("div", null, React.createElement(Header, {
        subtitle: subtitle
      }), React.createElement(Action, {
        hasOptions: this.state.options && this.state.options.length > 0,
        handlePickOption: this.handlePickOption
      }), React.createElement(Options, {
        options: this.state.options,
        handleDeleteAllOptions: this.handleDeleteAllOptions,
        handleDeleteOption: this.handleDeleteOption
      }), React.createElement(AddOption, {
        handleAddOption: this.handleAddOption
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return React.createElement("div", null, React.createElement("h1", null, props.title), props.subtitle && React.createElement("h2", null, props.subtitle));
};

Header.defaultProps = {
  title: 'Indecision'
};

var Action = function Action(props) {
  return React.createElement("div", null, React.createElement("button", {
    onClick: props.handlePickOption,
    disabled: !props.hasOptions
  }, "What should I do?"));
};

var Options = function Options(props) {
  return React.createElement("div", null, React.createElement("button", {
    onClick: props.handleDeleteAllOptions
  }, "Remove All"), props.options.map(function (option) {
    return React.createElement(Option, {
      key: option,
      optionText: option,
      handleDeleteOption: props.handleDeleteOption
    });
  }));
};

var Option = function Option(props) {
  return React.createElement("div", null, props.optionText, React.createElement("button", {
    onClick: function onClick(e) {
      props.handleDeleteOption(props.optionText);
    }
  }, "Remove"));
};

var AddOption = /*#__PURE__*/function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    var _this2;

    _classCallCheck(this, AddOption);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AddOption).call(this, props));
    _this2.handleAddOption = _this2.handleAddOption.bind(_assertThisInitialized(_this2));
    _this2.state = {
      errorMessage: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var errorMessage = this.props.handleAddOption(option);
      this.setState(function () {
        return {
          errorMessage: errorMessage
        };
      });
      e.target.elements.option.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.state.errorMessage && React.createElement("p", null, this.state.errorMessage), React.createElement("form", {
        onSubmit: this.handleAddOption
      }, React.createElement("input", {
        type: "text",
        name: "option",
        autoComplete: "off"
      }), React.createElement("button", null, "Add Option")));
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
