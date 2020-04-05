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

var VisibilityToggleApp = /*#__PURE__*/function (_React$Component) {
  _inherits(VisibilityToggleApp, _React$Component);

  function VisibilityToggleApp(props) {
    var _this;

    _classCallCheck(this, VisibilityToggleApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VisibilityToggleApp).call(this, props));
    _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_assertThisInitialized(_this));
    _this.state = {
      visibility: false
    };
    return _this;
  }

  _createClass(VisibilityToggleApp, [{
    key: "handleToggleVisibility",
    value: function handleToggleVisibility() {
      this.setState(function (prevState) {
        return {
          visibility: !prevState.visibility
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h1", null, "Visibility Toggle"), React.createElement("button", {
        onClick: this.handleToggleVisibility
      }, this.state.visibility ? 'Hide Details' : 'Show Details'), this.state.visibility && React.createElement("div", null, React.createElement("p", null, "Hey. Here are some details you can now see!")));
    }
  }]);

  return VisibilityToggleApp;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggleApp, null), document.getElementById('app'));
