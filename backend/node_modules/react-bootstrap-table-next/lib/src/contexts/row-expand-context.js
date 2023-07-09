'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


exports.default = function (dataOperator) {
  var RowExpandContext = _react2.default.createContext();

  var RowExpandProvider = function (_React$Component) {
    _inherits(RowExpandProvider, _React$Component);

    function RowExpandProvider() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, RowExpandProvider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RowExpandProvider.__proto__ || Object.getPrototypeOf(RowExpandProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = { expanded: _this.props.expandRow.expanded || [] }, _this.handleRowExpand = function (rowKey, expanded, rowIndex, e) {
        var _this$props = _this.props,
            data = _this$props.data,
            keyField = _this$props.keyField,
            onExpand = _this$props.expandRow.onExpand;


        var currExpanded = [].concat(_toConsumableArray(_this.state.expanded));

        if (expanded) {
          currExpanded.push(rowKey);
        } else {
          currExpanded = currExpanded.filter(function (value) {
            return value !== rowKey;
          });
        }

        if (onExpand) {
          var row = dataOperator.getRowByRowId(data, keyField, rowKey);
          onExpand(row, expanded, rowIndex, e);
        }
        _this.setState(function () {
          return { expanded: currExpanded };
        });
      }, _this.handleAllRowExpand = function (e, expandAll) {
        var _this$props2 = _this.props,
            data = _this$props2.data,
            keyField = _this$props2.keyField,
            _this$props2$expandRo = _this$props2.expandRow,
            onExpandAll = _this$props2$expandRo.onExpandAll,
            nonExpandable = _this$props2$expandRo.nonExpandable;
        var expanded = _this.state.expanded;


        var currExpanded = void 0;

        if (expandAll) {
          currExpanded = expanded.concat(dataOperator.expandableKeys(data, keyField, nonExpandable));
        } else {
          currExpanded = expanded.filter(function (s) {
            return typeof data.find(function (d) {
              return d[keyField] === s;
            }) === 'undefined';
          });
        }

        if (onExpandAll) {
          onExpandAll(expandAll, dataOperator.getExpandedRows(data, keyField, currExpanded), e);
        }

        _this.setState(function () {
          return { expanded: currExpanded };
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RowExpandProvider, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (nextProps.expandRow) {
          this.setState(function () {
            return {
              expanded: nextProps.expandRow.expanded || _this2.state.expanded
            };
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            data = _props.data,
            keyField = _props.keyField;

        return _react2.default.createElement(
          RowExpandContext.Provider,
          {
            value: {
              isAnyExpands: dataOperator.isAnyExpands(data, keyField, this.state.expanded),
              expanded: this.state.expanded,
              onRowExpand: this.handleRowExpand,
              onAllRowExpand: this.handleAllRowExpand
            }
          },
          this.props.children
        );
      }
    }]);

    return RowExpandProvider;
  }(_react2.default.Component);

  RowExpandProvider.propTypes = {
    children: _propTypes2.default.node.isRequired,
    data: _propTypes2.default.array.isRequired,
    keyField: _propTypes2.default.string.isRequired
  };

  return {
    Provider: RowExpandProvider,
    Consumer: RowExpandContext.Consumer
  };
};