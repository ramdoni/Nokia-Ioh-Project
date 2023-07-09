'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = require('../const');

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


exports.default = function (dataOperator) {
  var SelectionContext = _react2.default.createContext();

  var SelectionProvider = function (_React$Component) {
    _inherits(SelectionProvider, _React$Component);

    function SelectionProvider() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SelectionProvider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectionProvider.__proto__ || Object.getPrototypeOf(SelectionProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = { selected: _this.props.selectRow && _this.props.selectRow.selected || [] }, _this.handleRowSelect = function (rowKey, checked, rowIndex, e) {
        var _this$props = _this.props,
            data = _this$props.data,
            keyField = _this$props.keyField,
            _this$props$selectRow = _this$props.selectRow,
            mode = _this$props$selectRow.mode,
            onSelect = _this$props$selectRow.onSelect;
        var ROW_SELECT_SINGLE = _const2.default.ROW_SELECT_SINGLE;


        var currSelected = [].concat(_toConsumableArray(_this.state.selected));

        if (mode === ROW_SELECT_SINGLE) {
          // when select mode is radio
          currSelected = [rowKey];
        } else if (checked) {
          // when select mode is checkbox
          currSelected.push(rowKey);
        } else {
          currSelected = currSelected.filter(function (value) {
            return value !== rowKey;
          });
        }

        if (onSelect) {
          var row = dataOperator.getRowByRowId(data, keyField, rowKey);
          onSelect(row, checked, rowIndex, e);
        }

        _this.setState(function () {
          return { selected: currSelected };
        });
      }, _this.handleAllRowsSelect = function (e, isUnSelect) {
        var _this$props2 = _this.props,
            data = _this$props2.data,
            keyField = _this$props2.keyField,
            _this$props2$selectRo = _this$props2.selectRow,
            onSelectAll = _this$props2$selectRo.onSelectAll,
            nonSelectable = _this$props2$selectRo.nonSelectable;
        var selected = _this.state.selected;


        var currSelected = void 0;

        if (!isUnSelect) {
          currSelected = selected.concat(dataOperator.selectableKeys(data, keyField, nonSelectable));
        } else {
          currSelected = selected.filter(function (s) {
            return typeof data.find(function (d) {
              return d[keyField] === s;
            }) === 'undefined';
          });
        }

        if (onSelectAll) {
          onSelectAll(!isUnSelect, dataOperator.getSelectedRows(data, keyField, currSelected), e);
        }

        _this.setState(function () {
          return { selected: currSelected };
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SelectionProvider, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (nextProps.selectRow) {
          this.setState(function () {
            return {
              selected: nextProps.selectRow.selected || _this2.state.selected
            };
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          SelectionContext.Provider,
          {
            value: {
              selected: this.state.selected,
              onRowSelect: this.handleRowSelect,
              onAllRowsSelect: this.handleAllRowsSelect
            }
          },
          this.props.children
        );
      }
    }]);

    return SelectionProvider;
  }(_react2.default.Component);

  SelectionProvider.propTypes = {
    children: _propTypes2.default.node.isRequired,
    data: _propTypes2.default.array.isRequired,
    keyField: _propTypes2.default.string.isRequired
  };

  return {
    Provider: SelectionProvider,
    Consumer: SelectionContext.Consumer
  };
};