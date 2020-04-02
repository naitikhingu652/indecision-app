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

var CounterApp = /*#__PURE__*/function (_React$Component) {
  _inherits(CounterApp, _React$Component);

  function CounterApp(props) {
    var _this;

    _classCallCheck(this, CounterApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CounterApp).call(this, props));
    _this.handlePlusOne = _this.handlePlusOne.bind(_assertThisInitialized(_this));
    _this.handleMinusOne = _this.handleMinusOne.bind(_assertThisInitialized(_this));
    _this.handleResetCount = _this.handleResetCount.bind(_assertThisInitialized(_this));
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(CounterApp, [{
    key: "handlePlusOne",
    value: function handlePlusOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: "handleMinusOne",
    value: function handleMinusOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: "handleResetCount",
    value: function handleResetCount() {
      this.setState(function () {
        return {
          count: 0
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h1", null, "Count: ", this.state.count), React.createElement("button", {
        onClick: this.handlePlusOne
      }, "+1"), React.createElement("button", {
        onClick: this.handleMinusOne
      }, "-1"), React.createElement("button", {
        onClick: this.handleResetCount
      }, "Reset"));
    }
  }]);

  return CounterApp;
}(React.Component);

ReactDOM.render(React.createElement(CounterApp, null), document.getElementById('app'));
