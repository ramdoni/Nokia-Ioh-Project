(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable2"] = factory(require("react"), require("react-dom"));
	else
		root["ReactBootstrapTable2"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_20__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var ReactIs = require('react-is');

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(28)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = __webpack_require__(34);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function splitNested(str) {
  return [str].join('.').replace(/\[/g, '.').replace(/\]/g, '').split('.');
} /* eslint no-empty: 0 */
/* eslint no-param-reassign: 0 */
/* eslint prefer-rest-params: 0 */


function contains(list, value) {
  if (_underscore2.default.includes) {
    return _underscore2.default.includes(list, value);
  }

  return list.indexOf(value) > -1;
}

function get(target, field) {
  var directGet = target[field];
  if (directGet !== undefined && directGet !== null) {
    return directGet;
  }

  var pathArray = splitNested(field);
  var result = void 0;
  try {
    result = pathArray.reduce(function (curr, path) {
      return curr[path];
    }, target);
  } catch (e) {}
  return result;
}

function set(target, field, value) {
  var safe = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var pathArray = splitNested(field);
  var level = 0;
  pathArray.reduce(function (a, b) {
    level += 1;
    if (typeof a[b] === 'undefined') {
      if (!safe) throw new Error(a + '.' + b + ' is undefined');
      a[b] = {};
      return a[b];
    }

    if (level === pathArray.length) {
      a[b] = value;
      return value;
    }
    return a[b];
  }, target);
}

function isEmptyObject(obj) {
  if (!_underscore2.default.isObject(obj)) return false;

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i += 1) {
    if (hasOwnProperty.call(obj, keys[i])) return false;
  }

  return true;
}

function isDefined(value) {
  return typeof value !== 'undefined' && value !== null;
}

function sleep(fn, ms) {
  return setTimeout(function () {
    return fn();
  }, ms);
}

function debounce(func, wait, immediate) {
  var _this = this,
      _arguments = arguments;

  var timeout = void 0;

  return function () {
    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(_this, _arguments);
      }
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait || 0);

    if (callNow) {
      func.apply(_this, _arguments);
    }
  };
}

exports.default = Object.assign(_underscore2.default, {
  get: get,
  set: set,
  isDefined: isDefined,
  isEmptyObject: isEmptyObject,
  sleep: sleep,
  debounce: debounce,
  contains: contains
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  SORT_ASC: 'asc',
  SORT_DESC: 'desc',
  ROW_SELECT_SINGLE: 'radio',
  ROW_SELECT_MULTIPLE: 'checkbox',
  ROW_SELECT_DISABLED: 'ROW_SELECT_DISABLED',
  CHECKBOX_STATUS_CHECKED: 'checked',
  CHECKBOX_STATUS_INDETERMINATE: 'indeterminate',
  CHECKBOX_STATUS_UNCHECKED: 'unchecked',
  INDICATOR_POSITION_LEFT: 'left',
  INDICATOR_POSITION_RIGHT: 'right',
  TYPE_STRING: 'string',
  TYPE_NUMBER: 'number',
  TYPE_BOOLEAN: 'bool',
  TYPE_DATE: 'date',
  FILTERS_POSITION_INLINE: 'inline',
  FILTERS_POSITION_TOP: 'top',
  FILTERS_POSITION_BOTTOM: 'bottom'
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BootstrapContext = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BootstrapContext = exports.BootstrapContext = _react2.default.createContext({
  bootstrap4: false
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRowByRowId = exports.matchRow = undefined;

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matchRow = exports.matchRow = function matchRow(keyField, id) {
  return function (row) {
    return _utils2.default.get(row, keyField) === id;
  };
};

var getRowByRowId = exports.getRowByRowId = function getRowByRowId(data, keyField, id) {
  return data.find(matchRow(keyField, id));
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectWithoutPropertiesLoose;
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _inheritsLoose;
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = ['onClick', 'onDoubleClick', 'onMouseEnter', 'onMouseLeave', 'onContextMenu', 'onAuxClick'];

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(CellEventDelegater, _ExtendBase);

    function CellEventDelegater(props) {
      _classCallCheck(this, CellEventDelegater);

      var _this = _possibleConstructorReturn(this, (CellEventDelegater.__proto__ || Object.getPrototypeOf(CellEventDelegater)).call(this, props));

      _this.createDefaultEventHandler = _this.createDefaultEventHandler.bind(_this);
      return _this;
    }

    _createClass(CellEventDelegater, [{
      key: 'createDefaultEventHandler',
      value: function createDefaultEventHandler(cb) {
        var _this2 = this;

        return function (e) {
          var _props = _this2.props,
              column = _props.column,
              columnIndex = _props.columnIndex,
              index = _props.index;

          cb(e, column, typeof columnIndex !== 'undefined' ? columnIndex : index);
        };
      }
    }, {
      key: 'delegate',
      value: function delegate() {
        var _this3 = this;

        var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newAttrs = _extends({}, attrs);
        Object.keys(attrs).forEach(function (attr) {
          if (_utils2.default.contains(events, attr)) {
            newAttrs[attr] = _this3.createDefaultEventHandler(attrs[attr]);
          }
        });
        return newAttrs;
      }
    }]);

    return CellEventDelegater;
  }(ExtendBase);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _operators = __webpack_require__(11);

var _operators2 = _interopRequireDefault(_operators);

var _selection = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint react/prop-types: 0 */


var SelectionContext = _react2.default.createContext();

var SelectionProvider = function (_React$Component) {
  _inherits(SelectionProvider, _React$Component);

  function SelectionProvider(props) {
    _classCallCheck(this, SelectionProvider);

    var _this = _possibleConstructorReturn(this, (SelectionProvider.__proto__ || Object.getPrototypeOf(SelectionProvider)).call(this, props));

    _this.handleRowSelect = function (rowKey, checked, rowIndex, e) {
      var _this$props = _this.props,
          data = _this$props.data,
          keyField = _this$props.keyField,
          _this$props$selectRow = _this$props.selectRow,
          mode = _this$props$selectRow.mode,
          onSelect = _this$props$selectRow.onSelect;
      var ROW_SELECT_SINGLE = _const2.default.ROW_SELECT_SINGLE;


      var currSelected = [].concat(_toConsumableArray(_this.selected));

      var result = true;
      if (onSelect) {
        var row = _operators2.default.getRowByRowId(data, keyField, rowKey);
        result = onSelect(row, checked, rowIndex, e);
      }

      if (result === true || result === undefined) {
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
      }
      _this.selected = currSelected;
      _this.forceUpdate();
    };

    _this.handleAllRowsSelect = function (e, isUnSelect) {
      var _this$props2 = _this.props,
          data = _this$props2.data,
          keyField = _this$props2.keyField,
          _this$props2$selectRo = _this$props2.selectRow,
          onSelectAll = _this$props2$selectRo.onSelectAll,
          nonSelectable = _this$props2$selectRo.nonSelectable;
      var selected = _this.selected;


      var currSelected = void 0;

      if (!isUnSelect) {
        currSelected = selected.concat(_operators2.default.selectableKeys(data, keyField, nonSelectable));
      } else {
        currSelected = selected.filter(function (s) {
          return typeof data.find(function (d) {
            return _utils2.default.get(d, keyField) === s;
          }) === 'undefined';
        });
      }

      var result = void 0;
      if (onSelectAll) {
        result = onSelectAll(!isUnSelect, _operators2.default.getSelectedRows(data, keyField, isUnSelect ? selected : currSelected), e);
        if (Array.isArray(result)) {
          currSelected = result;
        }
      }
      _this.selected = currSelected;
      _this.forceUpdate();
    };

    _this.selected = props.selectRow.selected || [];
    return _this;
  }

  // exposed API


  _createClass(SelectionProvider, [{
    key: 'getSelected',
    value: function getSelected() {
      return this.selected;
    }
  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.selectRow) {
        this.selected = nextProps.selectRow.selected || this.selected;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _getSelectionSummary = (0, _selection.getSelectionSummary)(this.props.data, this.props.keyField, this.selected),
          allRowsSelected = _getSelectionSummary.allRowsSelected,
          allRowsNotSelected = _getSelectionSummary.allRowsNotSelected;

      var checkedStatus = void 0;

      // checkbox status depending on selected rows counts
      if (allRowsSelected) checkedStatus = _const2.default.CHECKBOX_STATUS_CHECKED;else if (allRowsNotSelected) checkedStatus = _const2.default.CHECKBOX_STATUS_UNCHECKED;else checkedStatus = _const2.default.CHECKBOX_STATUS_INDETERMINATE;

      return _react2.default.createElement(
        SelectionContext.Provider,
        {
          value: _extends({}, this.props.selectRow, {
            selected: this.selected,
            onRowSelect: this.handleRowSelect,
            onAllRowsSelect: this.handleAllRowsSelect,
            allRowsSelected: allRowsSelected,
            allRowsNotSelected: allRowsNotSelected,
            checkedStatus: checkedStatus
          })
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
exports.default = {
  Provider: SelectionProvider,
  Consumer: SelectionContext.Consumer
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _rows = __webpack_require__(6);

var rows = _interopRequireWildcard(_rows);

var _selection = __webpack_require__(13);

var selection = _interopRequireWildcard(_selection);

var _expand = __webpack_require__(40);

var expand = _interopRequireWildcard(_expand);

var _mutate = __webpack_require__(41);

var mutate = _interopRequireWildcard(_mutate);

var _sort = __webpack_require__(42);

var sort = _interopRequireWildcard(_sort);

var _type = __webpack_require__(43);

var type = _interopRequireWildcard(_type);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = _extends({}, rows, selection, expand, mutate, sort, type);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _operators = __webpack_require__(11);

var _operators2 = _interopRequireDefault(_operators);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint react/prop-types: 0 */


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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RowExpandProvider.__proto__ || Object.getPrototypeOf(RowExpandProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = { expanded: _this.props.expandRow.expanded || [],
      isClosing: _this.props.expandRow.isClosing || [] }, _this.onClosed = function (closedRow) {
      _this.setState({ isClosing: _this.state.isClosing.filter(function (value) {
          return value !== closedRow;
        }) });
    }, _this.handleRowExpand = function (rowKey, expanded, rowIndex, e) {
      var _this$props = _this.props,
          data = _this$props.data,
          keyField = _this$props.keyField,
          _this$props$expandRow = _this$props.expandRow,
          onExpand = _this$props$expandRow.onExpand,
          onlyOneExpanding = _this$props$expandRow.onlyOneExpanding,
          nonExpandable = _this$props$expandRow.nonExpandable;

      if (nonExpandable && _utils2.default.contains(nonExpandable, rowKey)) {
        return;
      }

      var currExpanded = [].concat(_toConsumableArray(_this.state.expanded));
      var isClosing = [].concat(_toConsumableArray(_this.state.isClosing));

      if (expanded) {
        if (onlyOneExpanding) {
          isClosing = isClosing.concat(currExpanded);
          currExpanded = [rowKey];
        } else currExpanded.push(rowKey);
      } else {
        isClosing.push(rowKey);
        currExpanded = currExpanded.filter(function (value) {
          return value !== rowKey;
        });
      }

      if (onExpand) {
        var row = _operators2.default.getRowByRowId(data, keyField, rowKey);
        onExpand(row, expanded, rowIndex, e);
      }
      _this.setState(function () {
        return { expanded: currExpanded, isClosing: isClosing };
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
        currExpanded = expanded.concat(_operators2.default.expandableKeys(data, keyField, nonExpandable));
      } else {
        currExpanded = expanded.filter(function (s) {
          return typeof data.find(function (d) {
            return _utils2.default.get(d, keyField) === s;
          }) === 'undefined';
        });
      }

      if (onExpandAll) {
        onExpandAll(expandAll, _operators2.default.getExpandedRows(data, keyField, currExpanded), e);
      }

      _this.setState(function () {
        return { expanded: currExpanded };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RowExpandProvider, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.expandRow) {
        var nextExpanded = [].concat(_toConsumableArray(nextProps.expandRow.expanded || this.state.expanded));
        var _nextProps$expandRow$ = nextProps.expandRow.nonExpandable,
            nonExpandable = _nextProps$expandRow$ === undefined ? [] : _nextProps$expandRow$;

        nextExpanded = nextExpanded.filter(function (rowId) {
          return !_utils2.default.contains(nonExpandable, rowId);
        });
        var isClosing = this.state.expanded.reduce(function (acc, cur) {
          if (!_utils2.default.contains(nextExpanded, cur)) {
            acc.push(cur);
          }
          return acc;
        }, []);

        this.setState(function () {
          return {
            expanded: nextExpanded,
            isClosing: isClosing
          };
        });
      } else {
        this.setState(function () {
          return {
            expanded: _this2.state.expanded
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
          value: _extends({}, this.props.expandRow, {
            nonExpandable: this.props.expandRow.nonExpandable,
            expanded: this.state.expanded,
            isClosing: this.state.isClosing,
            onClosed: this.onClosed,
            isAnyExpands: _operators2.default.isAnyExpands(data, keyField, this.state.expanded),
            onRowExpand: this.handleRowExpand,
            onAllRowExpand: this.handleAllRowExpand
          })
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
exports.default = {
  Provider: RowExpandProvider,
  Consumer: RowExpandContext.Consumer
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedRows = exports.unSelectableKeys = exports.selectableKeys = exports.getSelectionSummary = undefined;

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _rows = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getSelectionSummary = exports.getSelectionSummary = function getSelectionSummary() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keyField = arguments[1];
  var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var allRowsSelected = data.length > 0;
  var allRowsNotSelected = true;

  var rowKeys = data.map(function (d) {
    return _utils2.default.get(d, keyField);
  });

  var _loop = function _loop(i) {
    var curr = rowKeys[i];
    if (typeof selected.find(function (x) {
      return x === curr;
    }) === 'undefined') {
      allRowsSelected = false;
    } else {
      allRowsNotSelected = false;
    }
  };

  for (var i = 0; i < rowKeys.length; i += 1) {
    _loop(i);
  }
  return {
    allRowsSelected: allRowsSelected,
    allRowsNotSelected: allRowsNotSelected
  };
};

var selectableKeys = exports.selectableKeys = function selectableKeys() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keyField = arguments[1];
  var skips = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (skips.length === 0) {
    return data.map(function (row) {
      return _utils2.default.get(row, keyField);
    });
  }
  return data.filter(function (row) {
    return !_utils2.default.contains(skips, _utils2.default.get(row, keyField));
  }).map(function (row) {
    return _utils2.default.get(row, keyField);
  });
};

var unSelectableKeys = exports.unSelectableKeys = function unSelectableKeys(selected) {
  var skips = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (skips.length === 0) {
    return [];
  }
  return selected.filter(function (x) {
    return _utils2.default.contains(skips, x);
  });
};

var getSelectedRows = exports.getSelectedRows = function getSelectedRows() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keyField = arguments[1];
  var selected = arguments[2];
  return selected.map(function (k) {
    return (0, _rows.getRowByRowId)(data, keyField, k);
  }).filter(function (x) {
    return !!x;
  });
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint react/require-default-props: 0 */


var RowTemplate = function RowTemplate(props) {
  var renderContent = props.renderContent,
      selectRow = props.selectRow,
      expandRow = props.expandRow,
      cellEl = props.cellEl,
      rest = _objectWithoutProperties(props, ['renderContent', 'selectRow', 'expandRow', 'cellEl']);

  var isRenderFunctionColumnInLeft = function isRenderFunctionColumnInLeft() {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _const2.default.INDICATOR_POSITION_LEFT;
    return position === _const2.default.INDICATOR_POSITION_LEFT;
  };

  var childrens = renderContent() || [];

  if (selectRow && selectRow.hideSelectColumn !== true) {
    if (isRenderFunctionColumnInLeft(selectRow.selectColumnPosition)) {
      childrens.unshift(_react2.default.createElement(cellEl, { key: 'selection' }));
    } else {
      childrens.push(_react2.default.createElement(cellEl, { key: 'selection' }));
    }
  }

  if (expandRow.showExpandColumn) {
    if (isRenderFunctionColumnInLeft(expandRow.expandColumnPosition)) {
      childrens.unshift(_react2.default.createElement(cellEl, { key: 'expansion' }));
    } else {
      childrens.push(_react2.default.createElement(cellEl, { key: 'expansion' }));
    }
  }

  return _react2.default.createElement(
    'tr',
    rest,
    childrens
  );
};

RowTemplate.propTypes = {
  renderContent: _propTypes2.default.func.isRequired,
  cellEl: _propTypes2.default.string.isRequired,
  selectRow: _propTypes2.default.object,
  expandRow: _propTypes2.default.object
};

exports.default = RowTemplate;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _cell = __webpack_require__(50);

var _cell2 = _interopRequireDefault(_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/no-array-index-key: 0 */
/* eslint no-plusplus: 0 */


var RowPureContent = function (_React$Component) {
  _inherits(RowPureContent, _React$Component);

  function RowPureContent() {
    _classCallCheck(this, RowPureContent);

    return _possibleConstructorReturn(this, (RowPureContent.__proto__ || Object.getPrototypeOf(RowPureContent)).apply(this, arguments));
  }

  _createClass(RowPureContent, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (typeof nextProps.shouldUpdate !== 'undefined') {
        return nextProps.shouldUpdate;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          row = _props.row,
          keyField = _props.keyField,
          columns = _props.columns,
          rowIndex = _props.rowIndex,
          editable = _props.editable,
          editingRowIdx = _props.editingRowIdx,
          editingColIdx = _props.editingColIdx,
          onStart = _props.onStart,
          clickToEdit = _props.clickToEdit,
          dbclickToEdit = _props.dbclickToEdit,
          EditingCellComponent = _props.EditingCellComponent,
          tabIndexStart = _props.tabIndexStart;


      var tabIndex = tabIndexStart;

      return columns.map(function (column, index) {
        var dataField = column.dataField;

        var content = _utils2.default.get(row, dataField);
        if (rowIndex === editingRowIdx && index === editingColIdx) {
          return _react2.default.createElement(EditingCellComponent, {
            key: content + '-' + index + '-editing',
            row: row,
            rowIndex: rowIndex,
            column: column,
            columnIndex: index
          });
        }
        // render cell
        var cellTitle = void 0;
        var cellStyle = {};
        var cellAttrs = _extends({}, _utils2.default.isFunction(column.attrs) ? column.attrs(content, row, rowIndex, index) : column.attrs);

        if (column.events) {
          var events = Object.assign({}, column.events);
          Object.keys(Object.assign({}, column.events)).forEach(function (key) {
            var originFn = events[key];
            events[key] = function () {
              for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
                rest[_key] = arguments[_key];
              }

              return originFn.apply(undefined, rest.concat([row, rowIndex]));
            };
          });
          cellAttrs = _extends({}, cellAttrs, events);
        }

        var cellClasses = _utils2.default.isFunction(column.classes) ? column.classes(content, row, rowIndex, index) : column.classes;

        if (column.style) {
          cellStyle = _utils2.default.isFunction(column.style) ? column.style(content, row, rowIndex, index) : column.style;
          cellStyle = Object.assign({}, cellStyle) || {};
        }

        if (column.title) {
          cellTitle = _utils2.default.isFunction(column.title) ? column.title(content, row, rowIndex, index) : content;
          cellAttrs.title = cellTitle;
        }

        if (column.align) {
          cellStyle.textAlign = _utils2.default.isFunction(column.align) ? column.align(content, row, rowIndex, index) : column.align;
        }

        if (cellClasses) cellAttrs.className = cellClasses;
        if (!_utils2.default.isEmptyObject(cellStyle)) cellAttrs.style = cellStyle;

        var editableCell = _utils2.default.isDefined(column.editable) ? column.editable : true;
        if (column.dataField === keyField || !editable) editableCell = false;
        if (_utils2.default.isFunction(column.editable)) {
          editableCell = column.editable(content, row, rowIndex, index);
        }

        if (tabIndexStart !== -1) {
          cellAttrs.tabIndex = tabIndex++;
        }

        return _react2.default.createElement(_cell2.default, _extends({
          key: content + '-' + index,
          row: row,
          editable: editableCell,
          rowIndex: rowIndex,
          columnIndex: index,
          column: column,
          onStart: onStart,
          clickToEdit: clickToEdit,
          dbclickToEdit: dbclickToEdit
        }, cellAttrs));
      });
    }
  }]);

  return RowPureContent;
}(_react2.default.Component);

exports.default = RowPureContent;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = ['onClick', 'onDoubleClick', 'onMouseEnter', 'onMouseLeave', 'onContextMenu', 'onAuxClick'];

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(RowEventDelegater, _ExtendBase);

    function RowEventDelegater(props) {
      _classCallCheck(this, RowEventDelegater);

      var _this = _possibleConstructorReturn(this, (RowEventDelegater.__proto__ || Object.getPrototypeOf(RowEventDelegater)).call(this, props));

      _this.clickNum = 0;
      _this.createDefaultEventHandler = _this.createDefaultEventHandler.bind(_this);
      _this.createClickEventHandler = _this.createClickEventHandler.bind(_this);
      return _this;
    }

    _createClass(RowEventDelegater, [{
      key: 'createClickEventHandler',
      value: function createClickEventHandler(cb) {
        var _this2 = this;

        return function (e) {
          var _props = _this2.props,
              row = _props.row,
              selected = _props.selected,
              keyField = _props.keyField,
              selectable = _props.selectable,
              expandable = _props.expandable,
              rowIndex = _props.rowIndex,
              expanded = _props.expanded,
              expandRow = _props.expandRow,
              selectRow = _props.selectRow,
              DELAY_FOR_DBCLICK = _props.DELAY_FOR_DBCLICK;

          var clickFn = function clickFn() {
            if (cb) {
              cb(e, row, rowIndex);
            }
            var key = _utils2.default.get(row, keyField);
            if (expandRow && expandable && !expandRow.expandByColumnOnly) {
              if (selectRow.mode !== _const2.default.ROW_SELECT_DISABLED && selectRow.clickToExpand || selectRow.mode === _const2.default.ROW_SELECT_DISABLED) {
                expandRow.onRowExpand(key, !expanded, rowIndex, e);
              }
            }
            if (selectRow.clickToSelect && selectable) {
              selectRow.onRowSelect(key, !selected, rowIndex, e);
            }
          };

          if (DELAY_FOR_DBCLICK) {
            _this2.clickNum += 1;
            _utils2.default.debounce(function () {
              if (_this2.clickNum === 1) {
                clickFn();
              }
              _this2.clickNum = 0;
            }, DELAY_FOR_DBCLICK)();
          } else {
            clickFn();
          }
        };
      }
    }, {
      key: 'createDefaultEventHandler',
      value: function createDefaultEventHandler(cb) {
        var _this3 = this;

        return function (e) {
          var _props2 = _this3.props,
              row = _props2.row,
              rowIndex = _props2.rowIndex;

          cb(e, row, rowIndex);
        };
      }
    }, {
      key: 'delegate',
      value: function delegate() {
        var _this4 = this;

        var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newAttrs = _extends({}, attrs);
        Object.keys(attrs).forEach(function (attr) {
          if (_utils2.default.contains(events, attr)) {
            newAttrs[attr] = _this4.createDefaultEventHandler(attrs[attr]);
          }
        });
        return newAttrs;
      }
    }]);

    return RowEventDelegater;
  }(ExtendBase);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(RowShouldUpdater, _ExtendBase);

    function RowShouldUpdater() {
      _classCallCheck(this, RowShouldUpdater);

      return _possibleConstructorReturn(this, (RowShouldUpdater.__proto__ || Object.getPrototypeOf(RowShouldUpdater)).apply(this, arguments));
    }

    _createClass(RowShouldUpdater, [{
      key: 'shouldUpdateByCellEditing',
      value: function shouldUpdateByCellEditing(nextProps) {
        if (!(this.props.clickToEdit || this.props.dbclickToEdit)) return false;
        return nextProps.editingRowIdx === nextProps.rowIndex || this.props.editingRowIdx === nextProps.rowIndex && nextProps.editingRowIdx === null || this.props.editingRowIdx === nextProps.rowIndex;
      }
    }, {
      key: 'shouldUpdatedBySelfProps',
      value: function shouldUpdatedBySelfProps(nextProps) {
        return this.props.className !== nextProps.className || !_utils2.default.isEqual(this.props.style, nextProps.style) || !_utils2.default.isEqual(this.props.attrs, nextProps.attrs);
      }

      // Only use for simple-row

    }, {
      key: 'shouldUpdateByColumnsForSimpleCheck',
      value: function shouldUpdateByColumnsForSimpleCheck(nextProps) {
        if (this.props.columns.length !== nextProps.columns.length) {
          return true;
        }
        for (var i = 0; i < this.props.columns.length; i += 1) {
          if (!_utils2.default.isEqual(this.props.columns[i], nextProps.columns[i])) {
            return true;
          }
        }
        return false;
      }
    }, {
      key: 'shouldUpdatedByNormalProps',
      value: function shouldUpdatedByNormalProps(nextProps) {
        var shouldUpdate = this.props.rowIndex !== nextProps.rowIndex || this.props.editable !== nextProps.editable || !_utils2.default.isEqual(this.props.row, nextProps.row) || this.props.columns.length !== nextProps.columns.length;

        return shouldUpdate;
      }
    }, {
      key: 'shouldUpdateChild',
      value: function shouldUpdateChild(nextProps) {
        return this.shouldUpdateByCellEditing(nextProps) || this.shouldUpdatedByNormalProps(nextProps);
      }
    }, {
      key: 'shouldRowContentUpdate',
      value: function shouldRowContentUpdate(nextProps) {
        return this.shouldUpdateChild(nextProps) || this.shouldUpdateByColumnsForSimpleCheck(nextProps);
      }
    }]);

    return RowShouldUpdater;
  }(ExtendBase);
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _extends;
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UNMOUNTED */
/* unused harmony export EXITED */
/* unused harmony export ENTERING */
/* unused harmony export ENTERED */
/* unused harmony export EXITING */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_PropTypes__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TransitionGroupContext__ = __webpack_require__(23);








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      var node = __WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit || __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      // allows for nested Transitions
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__TransitionGroupContext__["a" /* default */].Provider, {
        value: null
      }, children(status, childProps));
    }

    var child = __WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.only(children);
    return (// allows for nested Transitions
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__TransitionGroupContext__["a" /* default */].Provider, {
        value: null
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(child, childProps))
    );
  };

  return Transition;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

Transition.contextType = __WEBPACK_IMPORTED_MODULE_7__TransitionGroupContext__["a" /* default */];
Transition.propTypes =  false ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func // Name the function so it is clearer in the documentation

} : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;
/* harmony default export */ __webpack_exports__["a"] = (Transition);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  disabled: false
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export timeoutsShape */
/* unused harmony export classNamesShape */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);

var timeoutsShape =  false ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : null;
var classNamesShape =  false ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : null;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext(null));

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_assertThisInitialized__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TransitionGroupContext__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_ChildMapping__ = __webpack_require__(66);









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? Object(__WEBPACK_IMPORTED_MODULE_7__utils_ChildMapping__["b" /* getInitialChildMapping */])(nextProps, handleExited) : Object(__WEBPACK_IMPORTED_MODULE_7__utils_ChildMapping__["c" /* getNextChildMapping */])(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = Object(__WEBPACK_IMPORTED_MODULE_7__utils_ChildMapping__["a" /* getChildMapping */])(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__TransitionGroupContext__["a" /* default */].Provider, {
        value: contextValue
      }, children);
    }

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__TransitionGroupContext__["a" /* default */].Provider, {
      value: contextValue
    }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

TransitionGroup.propTypes =  false ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: PropTypes.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: PropTypes.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: PropTypes.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: PropTypes.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: PropTypes.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: PropTypes.func
} : {};
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (TransitionGroup);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bootstrapTable = __webpack_require__(27);

var _bootstrapTable2 = _interopRequireDefault(_bootstrapTable);

var _contexts = __webpack_require__(71);

var _contexts2 = _interopRequireDefault(_contexts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _contexts2.default)(_bootstrapTable2.default);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _header = __webpack_require__(30);

var _header2 = _interopRequireDefault(_header);

var _filters = __webpack_require__(45);

var _filters2 = _interopRequireDefault(_filters);

var _caption = __webpack_require__(47);

var _caption2 = _interopRequireDefault(_caption);

var _body = __webpack_require__(48);

var _body2 = _interopRequireDefault(_body);

var _footer = __webpack_require__(67);

var _footer2 = _interopRequireDefault(_footer);

var _propsResolver = __webpack_require__(69);

var _propsResolver2 = _interopRequireDefault(_propsResolver);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint arrow-body-style: 0 */

var BootstrapTable = function (_PropsBaseResolver) {
  _inherits(BootstrapTable, _PropsBaseResolver);

  function BootstrapTable(props) {
    _classCallCheck(this, BootstrapTable);

    var _this = _possibleConstructorReturn(this, (BootstrapTable.__proto__ || Object.getPrototypeOf(BootstrapTable)).call(this, props));

    _this.getData = function () {
      return _this.visibleRows();
    };

    _this.validateProps();
    return _this;
  }

  _createClass(BootstrapTable, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.onDataSizeChange && !nextProps.pagination) {
        if (nextProps.data.length !== this.props.data.length) {
          nextProps.onDataSizeChange({ dataSize: nextProps.data.length });
        }
      }
    }

    // Exposed APIs

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          loading = _props.loading,
          overlay = _props.overlay;

      if (overlay) {
        var LoadingOverlay = overlay(loading);
        return _react2.default.createElement(
          LoadingOverlay,
          null,
          this.renderTable()
        );
      }
      return this.renderTable();
    }
  }, {
    key: 'renderTable',
    value: function renderTable() {
      var _props2 = this.props,
          columns = _props2.columns,
          keyField = _props2.keyField,
          tabIndexCell = _props2.tabIndexCell,
          id = _props2.id,
          classes = _props2.classes,
          bootstrap4 = _props2.bootstrap4,
          striped = _props2.striped,
          hover = _props2.hover,
          bordered = _props2.bordered,
          condensed = _props2.condensed,
          noDataIndication = _props2.noDataIndication,
          caption = _props2.caption,
          rowStyle = _props2.rowStyle,
          rowClasses = _props2.rowClasses,
          wrapperClasses = _props2.wrapperClasses,
          rowEvents = _props2.rowEvents,
          selectRow = _props2.selectRow,
          expandRow = _props2.expandRow,
          cellEdit = _props2.cellEdit,
          filterPosition = _props2.filterPosition;


      var tableWrapperClass = (0, _classnames2.default)('react-bootstrap-table', wrapperClasses);

      var tableClass = (0, _classnames2.default)('table', _defineProperty({
        'table-striped': striped,
        'table-hover': hover,
        'table-bordered': bordered
      }, bootstrap4 ? 'table-sm' : 'table-condensed', condensed), classes);

      var hasFilters = columns.some(function (col) {
        return col.filter || col.filterRenderer;
      });

      var hasFooter = _utils2.default.filter(columns, function (col) {
        return _utils2.default.has(col, 'footer');
      }).length > 0;

      var tableCaption = caption && _react2.default.createElement(
        _caption2.default,
        { bootstrap4: bootstrap4 },
        caption
      );

      return _react2.default.createElement(
        'div',
        { className: tableWrapperClass },
        _react2.default.createElement(
          'table',
          { id: id, className: tableClass },
          tableCaption,
          _react2.default.createElement(_header2.default, {
            columns: columns,
            className: this.props.headerClasses,
            wrapperClasses: this.props.headerWrapperClasses,
            sortField: this.props.sortField,
            sortOrder: this.props.sortOrder,
            onSort: this.props.onSort,
            globalSortCaret: this.props.sort && this.props.sort.sortCaret,
            onFilter: this.props.onFilter,
            currFilters: this.props.currFilters,
            onExternalFilter: this.props.onExternalFilter,
            selectRow: selectRow,
            expandRow: expandRow,
            filterPosition: filterPosition
          }),
          hasFilters && filterPosition !== _const2.default.FILTERS_POSITION_INLINE && _react2.default.createElement(_filters2.default, {
            columns: columns,
            className: this.props.filtersClasses,
            onSort: this.props.onSort,
            onFilter: this.props.onFilter,
            currFilters: this.props.currFilters,
            filterPosition: this.props.filterPosition,
            onExternalFilter: this.props.onExternalFilter,
            selectRow: selectRow,
            expandRow: expandRow
          }),
          _react2.default.createElement(_body2.default, {
            className: this.props.bodyClasses,
            data: this.getData(),
            keyField: keyField,
            tabIndexCell: tabIndexCell,
            columns: columns,
            isEmpty: this.isEmpty(),
            visibleColumnSize: this.visibleColumnSize(),
            noDataIndication: noDataIndication,
            cellEdit: cellEdit,
            selectRow: selectRow,
            expandRow: expandRow,
            rowStyle: rowStyle,
            rowClasses: rowClasses,
            rowEvents: rowEvents
          }),
          hasFooter && _react2.default.createElement(_footer2.default, {
            data: this.getData(),
            columns: columns,
            selectRow: selectRow,
            expandRow: expandRow,
            className: this.props.footerClasses
          })
        )
      );
    }
  }]);

  return BootstrapTable;
}((0, _propsResolver2.default)(_react.Component));

BootstrapTable.propTypes = {
  keyField: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.array.isRequired,
  columns: _propTypes2.default.array.isRequired,
  bootstrap4: _propTypes2.default.bool,
  remote: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    pagination: _propTypes2.default.bool
  })]),
  noDataIndication: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  striped: _propTypes2.default.bool,
  bordered: _propTypes2.default.bool,
  hover: _propTypes2.default.bool,
  tabIndexCell: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  classes: _propTypes2.default.string,
  headerClasses: _propTypes2.default.string,
  bodyClasses: _propTypes2.default.string,
  wrapperClasses: _propTypes2.default.string,
  headerWrapperClasses: _propTypes2.default.string,
  condensed: _propTypes2.default.bool,
  caption: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
  pagination: _propTypes2.default.object,
  filter: _propTypes2.default.object,
  cellEdit: _propTypes2.default.object,
  selectRow: _propTypes2.default.shape({
    mode: _propTypes2.default.oneOf([_const2.default.ROW_SELECT_SINGLE, _const2.default.ROW_SELECT_MULTIPLE, _const2.default.ROW_SELECT_DISABLED]).isRequired,
    clickToSelect: _propTypes2.default.bool,
    clickToExpand: _propTypes2.default.bool,
    clickToEdit: _propTypes2.default.bool,
    hideSelectAll: _propTypes2.default.bool,
    onSelect: _propTypes2.default.func,
    onSelectAll: _propTypes2.default.func,
    style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    nonSelectable: _propTypes2.default.array,
    nonSelectableStyle: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    nonSelectableClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    bgColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    hideSelectColumn: _propTypes2.default.bool,
    selectionRenderer: _propTypes2.default.func,
    selectionHeaderRenderer: _propTypes2.default.func,
    headerColumnStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    selectColumnStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    selectColumnPosition: _propTypes2.default.oneOf([_const2.default.INDICATOR_POSITION_LEFT, _const2.default.INDICATOR_POSITION_RIGHT])
  }),
  expandRow: _propTypes2.default.shape({
    renderer: _propTypes2.default.func,
    expanded: _propTypes2.default.array,
    onExpand: _propTypes2.default.func,
    onExpandAll: _propTypes2.default.func,
    nonExpandable: _propTypes2.default.array,
    showExpandColumn: _propTypes2.default.bool,
    onlyOneExpanding: _propTypes2.default.bool,
    expandByColumnOnly: _propTypes2.default.bool,
    expandColumnRenderer: _propTypes2.default.func,
    expandHeaderColumnRenderer: _propTypes2.default.func,
    expandColumnPosition: _propTypes2.default.oneOf([_const2.default.INDICATOR_POSITION_LEFT, _const2.default.INDICATOR_POSITION_RIGHT]),
    className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    parentClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
  }),
  rowStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  rowEvents: _propTypes2.default.object,
  rowClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  filtersClasses: _propTypes2.default.string,
  filterPosition: _propTypes2.default.oneOf([_const2.default.FILTERS_POSITION_TOP, _const2.default.FILTERS_POSITION_INLINE, _const2.default.FILTERS_POSITION_BOTTOM]),
  footerClasses: _propTypes2.default.string,
  defaultSorted: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    dataField: _propTypes2.default.string.isRequired,
    order: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]).isRequired
  })),
  sort: _propTypes2.default.shape({
    dataField: _propTypes2.default.string,
    order: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]),
    sortFunc: _propTypes2.default.func,
    sortCaret: _propTypes2.default.func
  }),
  defaultSortDirection: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]),
  overlay: _propTypes2.default.func,
  onTableChange: _propTypes2.default.func,
  onSort: _propTypes2.default.func,
  onFilter: _propTypes2.default.func,
  onExternalFilter: _propTypes2.default.func,
  onDataSizeChange: _propTypes2.default.func,
  // Inject from toolkit
  search: _propTypes2.default.shape({
    searchText: _propTypes2.default.string,
    searchContext: _propTypes2.default.func
  }),
  setDependencyModules: _propTypes2.default.func
};

BootstrapTable.defaultProps = {
  bootstrap4: false,
  remote: false,
  striped: false,
  bordered: true,
  hover: false,
  condensed: false,
  noDataIndication: null,
  selectRow: {
    mode: _const2.default.ROW_SELECT_DISABLED,
    selected: [],
    hideSelectColumn: true
  },
  expandRow: {
    renderer: undefined,
    expanded: [],
    nonExpandable: []
  },
  cellEdit: {
    mode: null,
    nonEditableRows: []
  },
  filterPosition: _const2.default.FILTERS_POSITION_INLINE
};

exports.default = BootstrapTable;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(29);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _headerCell = __webpack_require__(31);

var _headerCell2 = _interopRequireDefault(_headerCell);

var _selectionHeaderCell = __webpack_require__(37);

var _selectionHeaderCell2 = _interopRequireDefault(_selectionHeaderCell);

var _expandHeaderCell = __webpack_require__(38);

var _expandHeaderCell2 = _interopRequireDefault(_expandHeaderCell);

var _selectionHeaderCellConsumer = __webpack_require__(39);

var _selectionHeaderCellConsumer2 = _interopRequireDefault(_selectionHeaderCellConsumer);

var _expandHeaderCellConsumer = __webpack_require__(44);

var _expandHeaderCellConsumer2 = _interopRequireDefault(_expandHeaderCellConsumer);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/require-default-props: 0 */
var Header = function Header(props) {
  var className = props.className,
      columns = props.columns,
      onSort = props.onSort,
      onFilter = props.onFilter,
      sortField = props.sortField,
      sortOrder = props.sortOrder,
      selectRow = props.selectRow,
      expandRow = props.expandRow,
      currFilters = props.currFilters,
      onExternalFilter = props.onExternalFilter,
      filterPosition = props.filterPosition,
      globalSortCaret = props.globalSortCaret,
      wrapperClasses = props.wrapperClasses;


  var SelectionHeaderCellComp = function SelectionHeaderCellComp() {
    return null;
  };
  var ExpansionHeaderCellComp = function ExpansionHeaderCellComp() {
    return null;
  };

  if (expandRow.showExpandColumn) {
    ExpansionHeaderCellComp = (0, _expandHeaderCellConsumer2.default)(_expandHeaderCell2.default);
  }

  if (selectRow) {
    SelectionHeaderCellComp = (0, _selectionHeaderCellConsumer2.default)(_selectionHeaderCell2.default);
  }

  var isRenderFunctionColumnInLeft = function isRenderFunctionColumnInLeft() {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _const2.default.INDICATOR_POSITION_LEFT;
    return position === _const2.default.INDICATOR_POSITION_LEFT;
  };

  var childrens = [columns.map(function (column, i) {
    var currSort = column.dataField === sortField;
    var isLastSorting = column.dataField === sortField;

    return _react2.default.createElement(_headerCell2.default, {
      index: i,
      key: column.dataField,
      column: column,
      onSort: onSort,
      sorting: currSort,
      sortOrder: sortOrder,
      globalSortCaret: globalSortCaret,
      isLastSorting: isLastSorting,
      onFilter: onFilter,
      currFilters: currFilters,
      onExternalFilter: onExternalFilter,
      filterPosition: filterPosition
    });
  })];

  if (!selectRow.hideSelectColumn) {
    if (isRenderFunctionColumnInLeft(selectRow.selectColumnPosition)) {
      childrens.unshift(_react2.default.createElement(SelectionHeaderCellComp, { key: 'selection' }));
    } else {
      childrens.push(_react2.default.createElement(SelectionHeaderCellComp, { key: 'selection' }));
    }
  }

  if (expandRow.showExpandColumn) {
    if (isRenderFunctionColumnInLeft(expandRow.expandColumnPosition)) {
      childrens.unshift(_react2.default.createElement(ExpansionHeaderCellComp, { key: 'expansion' }));
    } else {
      childrens.push(_react2.default.createElement(ExpansionHeaderCellComp, { key: 'expansion' }));
    }
  }

  return _react2.default.createElement(
    'thead',
    { className: wrapperClasses },
    _react2.default.createElement(
      'tr',
      { className: className },
      childrens
    )
  );
};

Header.propTypes = {
  columns: _propTypes2.default.array.isRequired,
  onSort: _propTypes2.default.func,
  onFilter: _propTypes2.default.func,
  sortField: _propTypes2.default.string,
  sortOrder: _propTypes2.default.string,
  selectRow: _propTypes2.default.object,
  currFilters: _propTypes2.default.object,
  onExternalFilter: _propTypes2.default.func,
  globalSortCaret: _propTypes2.default.func,
  className: _propTypes2.default.string,
  wrapperClasses: _propTypes2.default.string,
  expandRow: _propTypes2.default.object,
  filterPosition: _propTypes2.default.oneOf([_const2.default.FILTERS_POSITION_TOP, _const2.default.FILTERS_POSITION_INLINE, _const2.default.FILTERS_POSITION_BOTTOM])
};

exports.default = Header;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _symbol = __webpack_require__(32);

var _symbol2 = _interopRequireDefault(_symbol);

var _caret = __webpack_require__(33);

var _caret2 = _interopRequireDefault(_caret);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _cellEventDelegater = __webpack_require__(9);

var _cellEventDelegater2 = _interopRequireDefault(_cellEventDelegater);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */


var HeaderCell = function (_eventDelegater) {
  _inherits(HeaderCell, _eventDelegater);

  function HeaderCell() {
    _classCallCheck(this, HeaderCell);

    return _possibleConstructorReturn(this, (HeaderCell.__proto__ || Object.getPrototypeOf(HeaderCell)).apply(this, arguments));
  }

  _createClass(HeaderCell, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          column = _props.column,
          index = _props.index,
          onSort = _props.onSort,
          sorting = _props.sorting,
          sortOrder = _props.sortOrder,
          isLastSorting = _props.isLastSorting,
          onFilter = _props.onFilter,
          currFilters = _props.currFilters,
          filterPosition = _props.filterPosition,
          onExternalFilter = _props.onExternalFilter,
          globalSortCaret = _props.globalSortCaret;
      var text = column.text,
          sort = column.sort,
          sortCaret = column.sortCaret,
          filter = column.filter,
          filterRenderer = column.filterRenderer,
          headerTitle = column.headerTitle,
          headerAlign = column.headerAlign,
          headerFormatter = column.headerFormatter,
          headerEvents = column.headerEvents,
          headerClasses = column.headerClasses,
          headerStyle = column.headerStyle,
          headerAttrs = column.headerAttrs,
          headerSortingClasses = column.headerSortingClasses,
          headerSortingStyle = column.headerSortingStyle;


      var sortCaretfunc = sortCaret || globalSortCaret;

      var delegateEvents = this.delegate(headerEvents);

      var customAttrs = _utils2.default.isFunction(headerAttrs) ? headerAttrs(column, index) : headerAttrs || {};

      var cellAttrs = _extends({}, customAttrs, delegateEvents, {
        tabIndex: _utils2.default.isDefined(customAttrs.tabIndex) ? customAttrs.tabIndex : 0
      });

      var sortSymbol = void 0;
      var filterElm = void 0;
      var cellStyle = {};
      var cellClasses = _utils2.default.isFunction(headerClasses) ? headerClasses(column, index) : headerClasses;

      if (headerStyle) {
        cellStyle = _utils2.default.isFunction(headerStyle) ? headerStyle(column, index) : headerStyle;
        cellStyle = cellStyle ? _extends({}, cellStyle) : cellStyle;
      }

      if (headerTitle) {
        cellAttrs.title = _utils2.default.isFunction(headerTitle) ? headerTitle(column, index) : text;
      }

      if (headerAlign) {
        cellStyle.textAlign = _utils2.default.isFunction(headerAlign) ? headerAlign(column, index) : headerAlign;
      }

      if (sort) {
        var customClick = cellAttrs.onClick;
        cellAttrs['aria-label'] = sorting ? text + ' sort ' + sortOrder : text + ' sortable';
        cellAttrs.onKeyUp = function (e) {
          if (e.key === 'Enter') {
            onSort(column);
            if (_utils2.default.isFunction(customClick)) customClick(e);
          }
        };
        cellAttrs.onClick = function (e) {
          onSort(column);
          if (_utils2.default.isFunction(customClick)) customClick(e);
        };
        cellAttrs.className = (0, _classnames2.default)(cellAttrs.className, 'sortable');

        if (sorting) {
          sortSymbol = sortCaretfunc ? sortCaretfunc(sortOrder, column) : _react2.default.createElement(_caret2.default, { order: sortOrder });

          // append customized classes or style if table was sorting based on the current column.
          cellClasses = (0, _classnames2.default)(cellClasses, _utils2.default.isFunction(headerSortingClasses) ? headerSortingClasses(column, sortOrder, isLastSorting, index) : headerSortingClasses);

          cellStyle = _extends({}, cellStyle, _utils2.default.isFunction(headerSortingStyle) ? headerSortingStyle(column, sortOrder, isLastSorting, index) : headerSortingStyle);
        } else {
          sortSymbol = sortCaretfunc ? sortCaretfunc(undefined, column) : _react2.default.createElement(_symbol2.default, null);
        }
      }

      if (cellClasses) cellAttrs.className = (0, _classnames2.default)(cellAttrs.className, cellClasses);
      if (!_utils2.default.isEmptyObject(cellStyle)) cellAttrs.style = cellStyle;

      if (filterPosition === _const2.default.FILTERS_POSITION_INLINE) {
        if (filterRenderer) {
          var onCustomFilter = onExternalFilter(column, filter.props.type);
          filterElm = filterRenderer(onCustomFilter, column);
        } else if (filter) {
          filterElm = _react2.default.createElement(filter.Filter, _extends({}, filter.props, {
            filterState: currFilters[column.dataField],
            onFilter: onFilter,
            column: column
          }));
        }
      }

      var children = headerFormatter ? headerFormatter(column, index, { sortElement: sortSymbol, filterElement: filterElm }) : text;

      if (headerFormatter) {
        return _react2.default.createElement('th', cellAttrs, children);
      }

      return _react2.default.createElement('th', cellAttrs, children, sortSymbol, filterElm);
    }
  }]);

  return HeaderCell;
}((0, _cellEventDelegater2.default)(_react2.default.Component));

HeaderCell.propTypes = {
  column: _propTypes2.default.shape({
    dataField: _propTypes2.default.string.isRequired,
    text: _propTypes2.default.string.isRequired,
    type: _propTypes2.default.oneOf([_const2.default.TYPE_STRING, _const2.default.TYPE_NUMBER, _const2.default.TYPE_BOOLEAN, _const2.default.TYPE_DATE]),
    isDummyField: _propTypes2.default.bool,
    hidden: _propTypes2.default.bool,
    headerFormatter: _propTypes2.default.func,
    formatter: _propTypes2.default.func,
    formatExtraData: _propTypes2.default.any,
    headerClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    headerStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    headerTitle: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    title: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    headerEvents: _propTypes2.default.object,
    events: _propTypes2.default.object,
    headerAlign: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    align: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    headerAttrs: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    attrs: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    sort: _propTypes2.default.bool,
    sortFunc: _propTypes2.default.func,
    onSort: _propTypes2.default.func,
    editor: _propTypes2.default.object,
    editable: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    editCellStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    editCellClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    editorStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    editorClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    editorRenderer: _propTypes2.default.func,
    validator: _propTypes2.default.func,
    filter: _propTypes2.default.object,
    filterRenderer: _propTypes2.default.func,
    filterValue: _propTypes2.default.func,
    searchable: _propTypes2.default.bool
  }).isRequired,
  index: _propTypes2.default.number.isRequired,
  onSort: _propTypes2.default.func,
  sorting: _propTypes2.default.bool,
  sortOrder: _propTypes2.default.oneOf([_const2.default.SORT_ASC, _const2.default.SORT_DESC]),
  sortCaret: _propTypes2.default.func,
  isLastSorting: _propTypes2.default.bool,
  onFilter: _propTypes2.default.func,
  filterPosition: _propTypes2.default.oneOf([_const2.default.FILTERS_POSITION_INLINE, _const2.default.FILTERS_POSITION_BOTTOM, _const2.default.FILTERS_POSITION_TOP]),
  currFilters: _propTypes2.default.object,
  onExternalFilter: _propTypes2.default.func
};

exports.default = HeaderCell;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bootstrap = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortSymbol = function SortSymbol() {
  return _react2.default.createElement(
    _bootstrap.BootstrapContext.Consumer,
    null,
    function (_ref) {
      var bootstrap4 = _ref.bootstrap4;
      return bootstrap4 ? _react2.default.createElement('span', { className: 'order-4' }) : _react2.default.createElement(
        'span',
        { className: 'order' },
        _react2.default.createElement(
          'span',
          { className: 'dropdown' },
          _react2.default.createElement('span', { className: 'caret' })
        ),
        _react2.default.createElement(
          'span',
          { className: 'dropup' },
          _react2.default.createElement('span', { className: 'caret' })
        )
      );
    }
  );
};

exports.default = SortSymbol;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _bootstrap = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortCaret = function SortCaret(_ref) {
  var order = _ref.order;

  var orderClass = (0, _classnames2.default)('react-bootstrap-table-sort-order', {
    dropup: order === _const2.default.SORT_ASC
  });

  return _react2.default.createElement(
    _bootstrap.BootstrapContext.Consumer,
    null,
    function (_ref2) {
      var bootstrap4 = _ref2.bootstrap4;
      return bootstrap4 ? _react2.default.createElement('span', { className: 'caret-4-' + order }) : _react2.default.createElement(
        'span',
        { className: orderClass },
        _react2.default.createElement('span', { className: 'caret' })
      );
    }
  );
};

SortCaret.propTypes = {
  order: _propTypes2.default.oneOf([_const2.default.SORT_ASC, _const2.default.SORT_DESC]).isRequired
};

exports.default = SortCaret;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` (`self`) in the browser, `global`
  // on the server, or `this` in some virtual machines. We use `self`
  // instead of `window` for `WebWorker` support.
  var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this ||
            {};

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype;
  var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

  // Create quick reference variables for speed access to core prototypes.
  var push = ArrayProto.push,
      slice = ArrayProto.slice,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeCreate = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for their old module API. If we're in
  // the browser, add `_` as a global object.
  // (`nodeType` is checked to ensure that `module`
  // and `exports` are not HTML elements.)
  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.9.1';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      // The 2-argument case is omitted because we’re not using it.
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  var builtinIteratee;

  // An internal function to generate callbacks that can be applied to each
  // element in a collection, returning the desired result — either `identity`,
  // an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value) && !_.isArray(value)) return _.matcher(value);
    return _.property(value);
  };

  // External wrapper for our callback generator. Users may customize
  // `_.iteratee` if they want additional predicate/iteratee shorthand styles.
  // This abstraction hides the internal-only argCount argument.
  _.iteratee = builtinIteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // Some functions take a variable number of arguments, or a few expected
  // arguments at the beginning and then a variable number of values to operate
  // on. This helper accumulates all remaining arguments past the function’s
  // argument length (or an explicit `startIndex`), into an array that becomes
  // the last argument. Similar to ES6’s "rest parameter".
  var restArguments = function(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
      var length = Math.max(arguments.length - startIndex, 0),
          rest = Array(length),
          index = 0;
      for (; index < length; index++) {
        rest[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0: return func.call(this, rest);
        case 1: return func.call(this, arguments[0], rest);
        case 2: return func.call(this, arguments[0], arguments[1], rest);
      }
      var args = Array(startIndex + 1);
      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }
      args[startIndex] = rest;
      return func.apply(this, args);
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var shallowProperty = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  var has = function(obj, path) {
    return obj != null && hasOwnProperty.call(obj, path);
  }

  var deepGet = function(obj, path) {
    var length = path.length;
    for (var i = 0; i < length; i++) {
      if (obj == null) return void 0;
      obj = obj[path[i]];
    }
    return length ? obj : void 0;
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object.
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = shallowProperty('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  var createReduce = function(dir) {
    // Wrap code that reassigns argument variables in a separate function than
    // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
    var reducer = function(obj, iteratee, memo, initial) {
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      if (!initial) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    };

    return function(obj, iteratee, memo, context) {
      var initial = arguments.length >= 3;
      return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
    };
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
    var key = keyFinder(obj, predicate, context);
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = restArguments(function(obj, path, args) {
    var contextPath, func;
    if (_.isFunction(path)) {
      func = path;
    } else if (_.isArray(path)) {
      contextPath = path.slice(0, -1);
      path = path[path.length - 1];
    }
    return _.map(obj, function(context) {
      var method = func;
      if (!method) {
        if (contextPath && contextPath.length) {
          context = deepGet(context, contextPath);
        }
        if (context == null) return void 0;
        method = context[path];
      }
      return method == null ? method : method.apply(context, args);
    });
  });

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection.
  _.shuffle = function(obj) {
    return _.sample(obj, Infinity);
  };

  // Sample **n** random values from a collection using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
    var length = getLength(sample);
    n = Math.max(Math.min(n, length), 0);
    var last = length - 1;
    for (var index = 0; index < n; index++) {
      var rand = _.random(index, last);
      var temp = sample[index];
      sample[index] = sample[rand];
      sample[rand] = temp;
    }
    return sample.slice(0, n);
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    var index = 0;
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, key, list) {
      return {
        value: value,
        index: index++,
        criteria: iteratee(value, key, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior, partition) {
    return function(obj, iteratee, context) {
      var result = partition ? [[], []] : {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (has(result, key)) result[key]++; else result[key] = 1;
  });

  var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (_.isString(obj)) {
      // Keep surrogate pair characters together
      return obj.match(reStrSymbol);
    }
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = group(function(result, value, pass) {
    result[pass ? 0 : 1].push(value);
  }, true);

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, Boolean);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    output = output || [];
    var idx = output.length;
    for (var i = 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        // Flatten current level of array or arguments object.
        if (shallow) {
          var j = 0, len = value.length;
          while (j < len) output[idx++] = value[j++];
        } else {
          flatten(value, shallow, strict, output);
          idx = output.length;
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = restArguments(function(array, otherArrays) {
    return _.difference(array, otherArrays);
  });

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // The faster algorithm will not work with an iteratee if the iteratee
  // is not a one-to-one function, so providing an iteratee will disable
  // the faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted && !iteratee) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = restArguments(function(arrays) {
    return _.uniq(flatten(arrays, true, true));
  });

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      var j;
      for (j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = restArguments(function(array, rest) {
    rest = flatten(rest, true, true);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  });

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices.
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = restArguments(_.unzip);

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values. Passing by pairs is the reverse of _.pairs.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions.
  var createPredicateIndexFinder = function(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  };

  // Returns the first index on an array-like that passes a predicate test.
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions.
  var createIndexFinder = function(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
          i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Chunk a single array into multiple arrays, each containing `count` or fewer
  // items.
  _.chunk = function(array, count) {
    if (count == null || count < 1) return [];
    var result = [];
    var i = 0, length = array.length;
    while (i < length) {
      result.push(slice.call(array, i, i += count));
    }
    return result;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments.
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = restArguments(function(func, context, args) {
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var bound = restArguments(function(callArgs) {
      return executeBound(func, bound, context, this, args.concat(callArgs));
    });
    return bound;
  });

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder by default, allowing any combination of arguments to be
  // pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
  _.partial = restArguments(function(func, boundArgs) {
    var placeholder = _.partial.placeholder;
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  });

  _.partial.placeholder = _;

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = restArguments(function(obj, keys) {
    keys = flatten(keys, false, false);
    var index = keys.length;
    if (index < 1) throw new Error('bindAll must be passed function names');
    while (index--) {
      var key = keys[index];
      obj[key] = _.bind(obj[key], obj);
    }
  });

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = restArguments(function(func, wait, args) {
    return setTimeout(function() {
      return func.apply(null, args);
    }, wait);
  });

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };

    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;

    var later = function(context, args) {
      timeout = null;
      if (args) result = func.apply(context, args);
    };

    var debounced = restArguments(function(args) {
      if (timeout) clearTimeout(timeout);
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(this, args);
      } else {
        timeout = _.delay(later, wait, this, args);
      }

      return result;
    });

    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  _.restArguments = restArguments;

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  var collectNonEnumProps = function(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  };

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`.
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object.
  // In contrast to _.map it returns an object.
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = _.keys(obj),
        length = keys.length,
        results = {};
    for (var index = 0; index < length; index++) {
      var currentKey = keys[index];
      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  // The opposite of _.object.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`.
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, defaults) {
    return function(obj) {
      var length = arguments.length;
      if (defaults) obj = Object(obj);
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!defaults || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s).
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test.
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Internal pick helper function to determine if `obj` has key `key`.
  var keyInObj = function(value, key, obj) {
    return key in obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = restArguments(function(obj, keys) {
    var result = {}, iteratee = keys[0];
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
      keys = _.allKeys(obj);
    } else {
      iteratee = keyInObj;
      keys = flatten(keys, false, false);
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  });

  // Return a copy of the object without the blacklisted properties.
  _.omit = restArguments(function(obj, keys) {
    var iteratee = keys[0], context;
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
      if (keys.length > 1) context = keys[1];
    } else {
      keys = _.map(flatten(keys, false, false), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  });

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq, deepEq;
  eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null) return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
    return deepEq(a, b, aStack, bStack);
  };

  // Internal recursive comparison function for `isEqual`.
  deepEq = function(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN.
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
      case '[object Symbol]':
        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
  var nodelist = root.document && root.document.childNodes;
  if (typeof /./ != 'function' && typeof Int8Array != 'object' && typeof nodelist != 'function') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`?
  _.isNaN = function(obj) {
    return _.isNumber(obj) && isNaN(obj);
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, path) {
    if (!_.isArray(path)) {
      return has(obj, path);
    }
    var length = path.length;
    for (var i = 0; i < length; i++) {
      var key = path[i];
      if (obj == null || !hasOwnProperty.call(obj, key)) {
        return false;
      }
      obj = obj[key];
    }
    return !!length;
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  // Creates a function that, when passed an object, will traverse that object’s
  // properties down the given `path`, specified as an array of keys or indexes.
  _.property = function(path) {
    if (!_.isArray(path)) {
      return shallowProperty(path);
    }
    return function(obj) {
      return deepGet(obj, path);
    };
  };

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    if (obj == null) {
      return function(){};
    }
    return function(path) {
      return !_.isArray(path) ? obj[path] : deepGet(obj, path);
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

  // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped.
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // Traverses the children of `obj` along `path`. If a child is a function, it
  // is invoked with its parent as context. Returns the value of the final
  // child, or `fallback` if any child is undefined.
  _.result = function(obj, path, fallback) {
    if (!_.isArray(path)) path = [path];
    var length = path.length;
    if (!length) {
      return _.isFunction(fallback) ? fallback.call(obj) : fallback;
    }
    for (var i = 0; i < length; i++) {
      var prop = obj == null ? void 0 : obj[path[i]];
      if (prop === void 0) {
        prop = fallback;
        i = length; // Ensure we don't continue iterating.
      }
      obj = _.isFunction(prop) ? prop.call(obj) : prop;
    }
    return obj;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offset.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    var render;
    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var chainResult = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_, args));
      };
    });
    return _;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return chainResult(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return chainResult(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return String(this._wrapped);
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35), __webpack_require__(36)(module)))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBox = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _bootstrap = __webpack_require__(5);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */


var CheckBox = exports.CheckBox = function CheckBox(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      indeterminate = _ref.indeterminate;
  return _react2.default.createElement('input', {
    type: 'checkbox',
    checked: checked,
    className: className,
    ref: function ref(input) {
      if (input) input.indeterminate = indeterminate; // eslint-disable-line no-param-reassign
    },
    onChange: function onChange() {}
  });
};

CheckBox.propTypes = {
  checked: _propTypes2.default.bool.isRequired,
  indeterminate: _propTypes2.default.bool.isRequired,
  className: _propTypes2.default.string
};

var SelectionHeaderCell = function (_Component) {
  _inherits(SelectionHeaderCell, _Component);

  function SelectionHeaderCell() {
    _classCallCheck(this, SelectionHeaderCell);

    var _this = _possibleConstructorReturn(this, (SelectionHeaderCell.__proto__ || Object.getPrototypeOf(SelectionHeaderCell)).call(this));

    _this.handleCheckBoxClick = _this.handleCheckBoxClick.bind(_this);
    return _this;
  }

  /**
   * avoid updating if button is
   * 1. radio
   * 2. status was not changed.
   */


  _createClass(SelectionHeaderCell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var ROW_SELECT_SINGLE = _const2.default.ROW_SELECT_SINGLE;
      var _props = this.props,
          mode = _props.mode,
          checkedStatus = _props.checkedStatus;


      if (mode === ROW_SELECT_SINGLE) return false;

      return nextProps.checkedStatus !== checkedStatus;
    }
  }, {
    key: 'handleCheckBoxClick',
    value: function handleCheckBoxClick(e) {
      var _props2 = this.props,
          onAllRowsSelect = _props2.onAllRowsSelect,
          checkedStatus = _props2.checkedStatus;

      var isUnSelect = checkedStatus === _const2.default.CHECKBOX_STATUS_CHECKED || checkedStatus === _const2.default.CHECKBOX_STATUS_INDETERMINATE;

      onAllRowsSelect(e, isUnSelect);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var CHECKBOX_STATUS_CHECKED = _const2.default.CHECKBOX_STATUS_CHECKED,
          CHECKBOX_STATUS_INDETERMINATE = _const2.default.CHECKBOX_STATUS_INDETERMINATE,
          ROW_SELECT_MULTIPLE = _const2.default.ROW_SELECT_MULTIPLE;
      var _props3 = this.props,
          mode = _props3.mode,
          checkedStatus = _props3.checkedStatus,
          selectionHeaderRenderer = _props3.selectionHeaderRenderer,
          hideSelectAll = _props3.hideSelectAll,
          headerColumnStyle = _props3.headerColumnStyle;

      if (hideSelectAll) {
        return _react2.default.createElement('th', { 'data-row-selection': true });
      }

      var checked = checkedStatus === CHECKBOX_STATUS_CHECKED;

      var indeterminate = checkedStatus === CHECKBOX_STATUS_INDETERMINATE;

      var attrs = {};
      var content = void 0;
      if (selectionHeaderRenderer || mode === ROW_SELECT_MULTIPLE) {
        attrs.onClick = this.handleCheckBoxClick;
      }

      attrs.style = _utils2.default.isFunction(headerColumnStyle) ? headerColumnStyle(checkedStatus) : headerColumnStyle;

      return _react2.default.createElement(
        _bootstrap.BootstrapContext.Consumer,
        null,
        function (_ref2) {
          var bootstrap4 = _ref2.bootstrap4;

          if (selectionHeaderRenderer) {
            content = selectionHeaderRenderer({
              mode: mode,
              checked: checked,
              indeterminate: indeterminate
            });
          } else if (mode === ROW_SELECT_MULTIPLE) {
            content = _react2.default.createElement(CheckBox, _extends({}, _this2.props, {
              checked: checked,
              className: bootstrap4 ? 'selection-input-4' : '',
              indeterminate: indeterminate
            }));
          }
          return _react2.default.createElement(
            'th',
            _extends({ className: 'selection-cell-header', 'data-row-selection': true }, attrs),
            content
          );
        }
      );
    }
  }]);

  return SelectionHeaderCell;
}(_react.Component);

SelectionHeaderCell.propTypes = {
  mode: _propTypes2.default.string.isRequired,
  checkedStatus: _propTypes2.default.string,
  onAllRowsSelect: _propTypes2.default.func,
  hideSelectAll: _propTypes2.default.bool,
  selectionHeaderRenderer: _propTypes2.default.func,
  headerColumnStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func])
};
exports.default = SelectionHeaderCell;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint no-nested-ternary: 0 */


var ExpansionHeaderCell = function (_Component) {
  _inherits(ExpansionHeaderCell, _Component);

  function ExpansionHeaderCell() {
    _classCallCheck(this, ExpansionHeaderCell);

    var _this = _possibleConstructorReturn(this, (ExpansionHeaderCell.__proto__ || Object.getPrototypeOf(ExpansionHeaderCell)).call(this));

    _this.handleCheckBoxClick = _this.handleCheckBoxClick.bind(_this);
    return _this;
  }

  _createClass(ExpansionHeaderCell, [{
    key: 'handleCheckBoxClick',
    value: function handleCheckBoxClick(e) {
      var _props = this.props,
          isAnyExpands = _props.isAnyExpands,
          onAllRowExpand = _props.onAllRowExpand;


      onAllRowExpand(e, !isAnyExpands);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          isAnyExpands = _props2.isAnyExpands,
          expandHeaderColumnRenderer = _props2.expandHeaderColumnRenderer;

      var attrs = {
        onClick: this.handleCheckBoxClick
      };

      return _react2.default.createElement(
        'th',
        _extends({ className: 'expand-cell-header', 'data-row-selection': true }, attrs),
        expandHeaderColumnRenderer ? expandHeaderColumnRenderer({ isAnyExpands: isAnyExpands }) : isAnyExpands ? '(-)' : '(+)'
      );
    }
  }]);

  return ExpansionHeaderCell;
}(_react.Component);

ExpansionHeaderCell.propTypes = {
  isAnyExpands: _propTypes2.default.bool.isRequired,
  onAllRowExpand: _propTypes2.default.func.isRequired,
  expandHeaderColumnRenderer: _propTypes2.default.func
};
exports.default = ExpansionHeaderCell;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _selectionContext = __webpack_require__(10);

var _selectionContext2 = _interopRequireDefault(_selectionContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {
  return function () {
    return _react2.default.createElement(
      _selectionContext2.default.Consumer,
      null,
      function (selectRow) {
        return _react2.default.createElement(Component, selectRow);
      }
    );
  };
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExpandedRows = exports.expandableKeys = exports.isAnyExpands = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _rows = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isAnyExpands = exports.isAnyExpands = function isAnyExpands(data, keyField) {
  var expanded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var _loop = function _loop(i) {
    var rowKey = _utils2.default.get(data[i], keyField);
    if (typeof expanded.find(function (x) {
      return x === rowKey;
    }) !== 'undefined') {
      return {
        v: true
      };
    }
  };

  for (var i = 0; i < data.length; i += 1) {
    var _ret = _loop(i);

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
  return false;
};

var expandableKeys = exports.expandableKeys = function expandableKeys(data, keyField) {
  var skips = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (skips.length === 0) {
    return data.map(function (row) {
      return _utils2.default.get(row, keyField);
    });
  }
  return data.filter(function (row) {
    return !_utils2.default.contains(skips, _utils2.default.get(row, keyField));
  }).map(function (row) {
    return _utils2.default.get(row, keyField);
  });
};

var getExpandedRows = exports.getExpandedRows = function getExpandedRows(data, keyField, expanded) {
  return expanded.map(function (k) {
    return (0, _rows.getRowByRowId)(data, keyField, k);
  });
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editCell = undefined;

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _rows = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var editCell = exports.editCell = function editCell(data, keyField, rowId, dataField, newValue) {
  var row = (0, _rows.getRowByRowId)(data, keyField, rowId);
  if (row) _utils2.default.set(row, dataField, newValue);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextOrder = exports.sort = undefined;

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint no-nested-ternary: 0 */
/* eslint no-lonely-if: 0 */
/* eslint no-underscore-dangle: 0 */


function comparator(a, b) {
  var result = void 0;
  if (typeof b === 'string') {
    result = b.localeCompare(a);
  } else {
    result = a > b ? -1 : a < b ? 1 : 0;
  }
  return result;
}

var sort = exports.sort = function sort(data, sortOrder, _ref) {
  var dataField = _ref.dataField,
      sortFunc = _ref.sortFunc,
      sortValue = _ref.sortValue;

  var _data = [].concat(_toConsumableArray(data));
  _data.sort(function (a, b) {
    var result = void 0;
    var valueA = _utils2.default.get(a, dataField);
    var valueB = _utils2.default.get(b, dataField);
    if (sortValue) {
      valueA = sortValue(valueA, a);
      valueB = sortValue(valueB, b);
    } else {
      valueA = _utils2.default.isDefined(valueA) ? valueA : '';
      valueB = _utils2.default.isDefined(valueB) ? valueB : '';
    }

    if (sortFunc) {
      result = sortFunc(valueA, valueB, sortOrder, dataField, a, b);
    } else {
      if (sortOrder === _const2.default.SORT_DESC) {
        result = comparator(valueA, valueB);
      } else {
        result = comparator(valueB, valueA);
      }
    }
    return result;
  });
  return _data;
};

var nextOrder = exports.nextOrder = function nextOrder(currentSortColumn, _ref2) {
  var sortOrder = _ref2.sortOrder,
      sortColumn = _ref2.sortColumn;
  var defaultOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _const2.default.SORT_DESC;

  if (!sortColumn || currentSortColumn.dataField !== sortColumn.dataField) return defaultOrder;
  return sortOrder === _const2.default.SORT_DESC ? _const2.default.SORT_ASC : _const2.default.SORT_DESC;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeConvert = undefined;

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeConvert = exports.typeConvert = function typeConvert(type, value) {
  if (type === _const2.default.TYPE_STRING) {
    return String(value);
  } else if (type === _const2.default.TYPE_NUMBER) {
    return Number(value);
  } else if (type === _const2.default.TYPE_BOOLEAN) {
    if (typeof value === 'boolean') {
      return value;
    }
    return value === 'true';
  } else if (type === _const2.default.TYPE_DATE) {
    return new Date(value);
  }
  return value;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rowExpandContext = __webpack_require__(12);

var _rowExpandContext2 = _interopRequireDefault(_rowExpandContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {
  return function () {
    return _react2.default.createElement(
      _rowExpandContext2.default.Consumer,
      null,
      function (expandRow) {
        return _react2.default.createElement(Component, expandRow);
      }
    );
  };
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _filtersCell = __webpack_require__(46);

var _filtersCell2 = _interopRequireDefault(_filtersCell);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _rowTemplate = __webpack_require__(14);

var _rowTemplate2 = _interopRequireDefault(_rowTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filters = function Filters(props) {
  var columns = props.columns,
      onFilter = props.onFilter,
      currFilters = props.currFilters,
      filterPosition = props.filterPosition,
      onExternalFilter = props.onExternalFilter,
      className = props.className,
      selectRow = props.selectRow,
      expandRow = props.expandRow;


  function renderContent() {
    var filterColumns = [];
    var showFiltersRow = false;

    columns.forEach(function (column, i) {
      filterColumns.push(_react2.default.createElement(_filtersCell2.default, {
        index: i,
        key: column.dataField,
        column: column,
        currFilters: currFilters,
        onExternalFilter: onExternalFilter,
        onFilter: onFilter
      }));

      if (column.filterRenderer || column.filter) {
        if (!showFiltersRow) {
          showFiltersRow = true;
        }
      }
    });
    return filterColumns;
  }

  return _react2.default.createElement(
    'tbody',
    {
      className: className,
      style: {
        display: filterPosition === _const2.default.FILTERS_POSITION_TOP ? 'table-header-group' : 'table-footer-group'
      }
    },
    _react2.default.createElement(_rowTemplate2.default, {
      renderContent: renderContent,
      selectRow: selectRow,
      expandRow: expandRow,
      cellEl: 'td'
    })
  );
}; /* eslint react/require-default-props: 0 */


Filters.propTypes = {
  columns: _propTypes2.default.array.isRequired,
  onFilter: _propTypes2.default.func,
  filterPosition: _propTypes2.default.oneOf([_const2.default.FILTERS_POSITION_TOP, _const2.default.FILTERS_POSITION_INLINE, _const2.default.FILTERS_POSITION_BOTTOM]),
  currFilters: _propTypes2.default.object,
  onExternalFilter: _propTypes2.default.func,
  className: _propTypes2.default.string,
  selectRow: _propTypes2.default.object,
  expandRow: _propTypes2.default.object
};

Filters.defaultProps = {
  position: _const2.default.FILTERS_POSITION_TOP
};

exports.default = Filters;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FiltersCell = function FiltersCell(props) {
  var index = props.index,
      column = props.column,
      onExternalFilter = props.onExternalFilter,
      currFilters = props.currFilters,
      onFilter = props.onFilter;
  var filterRenderer = column.filterRenderer,
      filter = column.filter;

  var filterElm = void 0;
  var cellAttrs = {};
  var cellStyle = {};
  cellAttrs.style = cellStyle;
  if (column.headerAlign) {
    cellStyle.textAlign = _utils2.default.isFunction(column.headerAlign) ? column.headerAlign(column, index) : column.headerAlign;
  }
  if (column.filterRenderer) {
    var onCustomFilter = onExternalFilter(column, filter.props.type);
    filterElm = filterRenderer(onCustomFilter, column);
  } else if (filter) {
    filterElm = _react2.default.createElement(filter.Filter, _extends({}, filter.props, {
      filterState: currFilters[column.dataField],
      onFilter: onFilter,
      column: column
    }));
  }
  return _react2.default.createElement('th', cellAttrs, filterElm);
};

FiltersCell.propTypes = {
  index: _propTypes2.default.number.isRequired,
  column: _propTypes2.default.object.isRequired,
  currFilters: _propTypes2.default.object.isRequired,
  onFilter: _propTypes2.default.func,
  onExternalFilter: _propTypes2.default.func
};

FiltersCell.defaultProps = {
  onFilter: function onFilter() {},
  onExternalFilter: function onExternalFilter() {}
};

exports.default = FiltersCell;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/require-default-props: 0 */
var Caption = function Caption(props) {
  if (!props.children) return null;

  var caption = props.bootstrap4 ? _react2.default.createElement(
    'caption',
    { style: { captionSide: 'top' } },
    props.children
  ) : _react2.default.createElement(
    'caption',
    null,
    props.children
  );

  return caption;
};

Caption.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
  bootstrap4: _propTypes2.default.bool
};

exports.default = Caption;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _simpleRow = __webpack_require__(49);

var _simpleRow2 = _interopRequireDefault(_simpleRow);

var _aggregateRow = __webpack_require__(51);

var _aggregateRow2 = _interopRequireDefault(_aggregateRow);

var _rowSection = __webpack_require__(54);

var _rowSection2 = _interopRequireDefault(_rowSection);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _rowConsumer = __webpack_require__(55);

var _rowConsumer2 = _interopRequireDefault(_rowConsumer);

var _rowConsumer3 = __webpack_require__(56);

var _rowConsumer4 = _interopRequireDefault(_rowConsumer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/require-default-props: 0 */

var Body = function (_React$Component) {
  _inherits(Body, _React$Component);

  function Body(props) {
    _classCallCheck(this, Body);

    var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));

    var keyField = props.keyField,
        cellEdit = props.cellEdit,
        selectRow = props.selectRow,
        expandRow = props.expandRow;

    // Construct Editing Cell Component

    if (cellEdit.createContext) {
      _this.EditingCell = cellEdit.createEditingCell(_utils2.default, cellEdit.options.onStartEdit);
    }

    // Construct Row Component
    var RowComponent = _simpleRow2.default;
    var selectRowEnabled = selectRow.mode !== _const2.default.ROW_SELECT_DISABLED;
    var expandRowEnabled = !!expandRow.renderer;

    if (expandRowEnabled) {
      RowComponent = (0, _rowConsumer4.default)(_aggregateRow2.default);
    }

    if (selectRowEnabled) {
      RowComponent = (0, _rowConsumer2.default)(expandRowEnabled ? RowComponent : _aggregateRow2.default);
    }

    if (cellEdit.createContext) {
      RowComponent = cellEdit.withRowLevelCellEdit(RowComponent, selectRowEnabled, keyField, _utils2.default);
    }
    _this.RowComponent = RowComponent;
    return _this;
  }

  _createClass(Body, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          columns = _props.columns,
          data = _props.data,
          tabIndexCell = _props.tabIndexCell,
          keyField = _props.keyField,
          isEmpty = _props.isEmpty,
          noDataIndication = _props.noDataIndication,
          visibleColumnSize = _props.visibleColumnSize,
          cellEdit = _props.cellEdit,
          selectRow = _props.selectRow,
          rowStyle = _props.rowStyle,
          rowClasses = _props.rowClasses,
          rowEvents = _props.rowEvents,
          expandRow = _props.expandRow,
          className = _props.className;


      var content = void 0;

      if (isEmpty) {
        var indication = _utils2.default.isFunction(noDataIndication) ? noDataIndication() : noDataIndication;
        if (!indication) {
          return null;
        }
        content = _react2.default.createElement(_rowSection2.default, { content: indication, colSpan: visibleColumnSize });
      } else {
        var selectRowEnabled = selectRow.mode !== _const2.default.ROW_SELECT_DISABLED;
        var expandRowEnabled = !!expandRow.renderer;

        var additionalRowProps = {};

        if (cellEdit.createContext) {
          additionalRowProps.EditingCellComponent = this.EditingCell;
        }

        if (selectRowEnabled || expandRowEnabled) {
          additionalRowProps.expandRow = expandRow;
          additionalRowProps.selectRow = selectRow;
        }

        content = data.map(function (row, index) {
          var key = _utils2.default.get(row, keyField);
          var baseRowProps = _extends({
            key: key,
            row: row,
            tabIndexCell: tabIndexCell,
            columns: columns,
            keyField: keyField,
            cellEdit: cellEdit,
            value: key,
            rowIndex: index,
            visibleColumnSize: visibleColumnSize,
            attrs: rowEvents || {}
          }, additionalRowProps);

          baseRowProps.style = _utils2.default.isFunction(rowStyle) ? rowStyle(row, index) : rowStyle;
          baseRowProps.className = _utils2.default.isFunction(rowClasses) ? rowClasses(row, index) : rowClasses;

          return _react2.default.createElement(_this2.RowComponent, baseRowProps);
        });
      }

      return _react2.default.createElement(
        'tbody',
        { className: className },
        content
      );
    }
  }]);

  return Body;
}(_react2.default.Component);

Body.propTypes = {
  keyField: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.array.isRequired,
  columns: _propTypes2.default.array.isRequired,
  selectRow: _propTypes2.default.object
};

exports.default = Body;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rowPureContent = __webpack_require__(15);

var _rowPureContent2 = _interopRequireDefault(_rowPureContent);

var _eventDelegater = __webpack_require__(16);

var _eventDelegater2 = _interopRequireDefault(_eventDelegater);

var _shouldUpdater2 = __webpack_require__(17);

var _shouldUpdater3 = _interopRequireDefault(_shouldUpdater2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/no-array-index-key: 0 */


var SimpleRow = function (_shouldUpdater) {
  _inherits(SimpleRow, _shouldUpdater);

  function SimpleRow(props) {
    _classCallCheck(this, SimpleRow);

    var _this = _possibleConstructorReturn(this, (SimpleRow.__proto__ || Object.getPrototypeOf(SimpleRow)).call(this, props));

    _this.shouldUpdateRowContent = false;
    return _this;
  }

  _createClass(SimpleRow, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      this.shouldUpdateRowContent = false;
      this.shouldUpdateRowContent = this.shouldRowContentUpdate(nextProps);
      if (this.shouldUpdateRowContent) return true;

      return this.shouldUpdatedBySelfProps(nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          attrs = _props.attrs,
          visibleColumnSize = _props.visibleColumnSize,
          tabIndexCell = _props.tabIndexCell,
          rest = _objectWithoutProperties(_props, ['className', 'style', 'attrs', 'visibleColumnSize', 'tabIndexCell']);

      var trAttrs = this.delegate(attrs);
      var tabIndexStart = this.props.rowIndex * visibleColumnSize + 1;

      return _react2.default.createElement(
        'tr',
        _extends({ style: style, className: className }, trAttrs),
        _react2.default.createElement(_rowPureContent2.default, _extends({
          shouldUpdate: this.shouldUpdateRowContent,
          tabIndexStart: tabIndexCell ? tabIndexStart : -1
        }, rest))
      );
    }
  }]);

  return SimpleRow;
}((0, _shouldUpdater3.default)((0, _eventDelegater2.default)(_react.Component)));

SimpleRow.propTypes = {
  row: _propTypes2.default.object.isRequired,
  rowIndex: _propTypes2.default.number.isRequired,
  columns: _propTypes2.default.array.isRequired,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  attrs: _propTypes2.default.object
};

SimpleRow.defaultProps = {
  editable: true,
  style: {},
  className: null,
  attrs: {}
};

exports.default = SimpleRow;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cellEventDelegater = __webpack_require__(9);

var _cellEventDelegater2 = _interopRequireDefault(_cellEventDelegater);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


var Cell = function (_eventDelegater) {
  _inherits(Cell, _eventDelegater);

  function Cell(props) {
    _classCallCheck(this, Cell);

    var _this = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this, props));

    _this.createHandleEditingCell = function (originFunc) {
      return function (e) {
        var _this$props = _this.props,
            onStart = _this$props.onStart,
            rowIndex = _this$props.rowIndex,
            columnIndex = _this$props.columnIndex,
            clickToEdit = _this$props.clickToEdit,
            dbclickToEdit = _this$props.dbclickToEdit;

        if ((clickToEdit || dbclickToEdit) && _utils2.default.isFunction(originFunc)) {
          originFunc(e);
        }
        if (onStart) {
          onStart(rowIndex, columnIndex);
        }
      };
    };

    _this.createHandleEditingCell = _this.createHandleEditingCell.bind(_this);
    return _this;
  }

  _createClass(Cell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var shouldUpdate = false;
      if (nextProps.column.isDummyField) {
        shouldUpdate = !_utils2.default.isEqual(this.props.row, nextProps.row);
      } else {
        shouldUpdate = _utils2.default.get(this.props.row, this.props.column.dataField) !== _utils2.default.get(nextProps.row, nextProps.column.dataField);
      }

      if (shouldUpdate) return true;

      // if (nextProps.formatter)

      shouldUpdate = (nextProps.column.formatter ? !_utils2.default.isEqual(this.props.row, nextProps.row) : false) || this.props.column.hidden !== nextProps.column.hidden || this.props.column.isDummyField !== nextProps.column.isDummyField || this.props.rowIndex !== nextProps.rowIndex || this.props.columnIndex !== nextProps.columnIndex || this.props.className !== nextProps.className || this.props.title !== nextProps.title || this.props.editable !== nextProps.editable || this.props.clickToEdit !== nextProps.clickToEdit || this.props.dbclickToEdit !== nextProps.dbclickToEdit || !_utils2.default.isEqual(this.props.style, nextProps.style) || !_utils2.default.isEqual(this.props.column.formatExtraData, nextProps.column.formatExtraData) || !_utils2.default.isEqual(this.props.column.events, nextProps.column.events) || !_utils2.default.isEqual(this.props.column.attrs, nextProps.column.attrs) || this.props.tabIndex !== nextProps.tabIndex;
      return shouldUpdate;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          row = _props.row,
          rowIndex = _props.rowIndex,
          column = _props.column,
          columnIndex = _props.columnIndex,
          onStart = _props.onStart,
          editable = _props.editable,
          clickToEdit = _props.clickToEdit,
          dbclickToEdit = _props.dbclickToEdit,
          rest = _objectWithoutProperties(_props, ['row', 'rowIndex', 'column', 'columnIndex', 'onStart', 'editable', 'clickToEdit', 'dbclickToEdit']);

      var dataField = column.dataField,
          formatter = column.formatter,
          formatExtraData = column.formatExtraData;

      var attrs = this.delegate(_extends({}, rest));
      var content = column.isDummyField ? null : _utils2.default.get(row, dataField);

      if (formatter) {
        content = column.formatter(content, row, rowIndex, formatExtraData);
      }

      if (clickToEdit && editable) {
        attrs.onClick = this.createHandleEditingCell(attrs.onClick);
      } else if (dbclickToEdit && editable) {
        attrs.onDoubleClick = this.createHandleEditingCell(attrs.onDoubleClick);
      }

      return _react2.default.createElement(
        'td',
        attrs,
        typeof content === 'boolean' ? '' + content : content
      );
    }
  }]);

  return Cell;
}((0, _cellEventDelegater2.default)(_react.Component));

Cell.propTypes = {
  row: _propTypes2.default.object.isRequired,
  rowIndex: _propTypes2.default.number.isRequired,
  column: _propTypes2.default.object.isRequired,
  columnIndex: _propTypes2.default.number.isRequired
};

exports.default = Cell;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _expandCell = __webpack_require__(52);

var _expandCell2 = _interopRequireDefault(_expandCell);

var _selectionCell = __webpack_require__(53);

var _selectionCell2 = _interopRequireDefault(_selectionCell);

var _shouldUpdater2 = __webpack_require__(17);

var _shouldUpdater3 = _interopRequireDefault(_shouldUpdater2);

var _eventDelegater = __webpack_require__(16);

var _eventDelegater2 = _interopRequireDefault(_eventDelegater);

var _rowPureContent = __webpack_require__(15);

var _rowPureContent2 = _interopRequireDefault(_rowPureContent);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint class-methods-use-this: 0 */
/* eslint react/prop-types: 0 */
/* eslint no-plusplus: 0 */


var RowAggregator = function (_shouldUpdater) {
  _inherits(RowAggregator, _shouldUpdater);

  function RowAggregator(props) {
    _classCallCheck(this, RowAggregator);

    var _this = _possibleConstructorReturn(this, (RowAggregator.__proto__ || Object.getPrototypeOf(RowAggregator)).call(this, props));

    _this.clickNum = 0;
    _this.shouldUpdateRowContent = false;
    _this.createClickEventHandler = _this.createClickEventHandler.bind(_this);
    return _this;
  }

  _createClass(RowAggregator, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.selected !== nextProps.selected || this.props.expanded !== nextProps.expanded || this.props.expandable !== nextProps.expandable || this.props.selectable !== nextProps.selectable || this.props.selectRow.hideSelectColumn !== nextProps.selectRow.hideSelectColumn || this.shouldUpdatedBySelfProps(nextProps)) {
        this.shouldUpdateRowContent = this.shouldRowContentUpdate(nextProps);
        return true;
      }
      this.shouldUpdateRowContent = this.shouldRowContentUpdate(nextProps);

      return this.shouldUpdateRowContent;
    }
  }, {
    key: 'isRenderFunctionColumnInLeft',
    value: function isRenderFunctionColumnInLeft() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _const2.default.INDICATOR_POSITION_LEFT;

      return position === _const2.default.INDICATOR_POSITION_LEFT;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          row = _props.row,
          columns = _props.columns,
          keyField = _props.keyField,
          rowIndex = _props.rowIndex,
          style = _props.style,
          className = _props.className,
          attrs = _props.attrs,
          selectRow = _props.selectRow,
          expandRow = _props.expandRow,
          expanded = _props.expanded,
          expandable = _props.expandable,
          selected = _props.selected,
          selectable = _props.selectable,
          visibleColumnSize = _props.visibleColumnSize,
          tabIndexCell = _props.tabIndexCell,
          rest = _objectWithoutProperties(_props, ['row', 'columns', 'keyField', 'rowIndex', 'style', 'className', 'attrs', 'selectRow', 'expandRow', 'expanded', 'expandable', 'selected', 'selectable', 'visibleColumnSize', 'tabIndexCell']);

      var key = _utils2.default.get(row, keyField);
      var hideSelectColumn = selectRow.hideSelectColumn,
          selectColumnPosition = selectRow.selectColumnPosition,
          clickToSelect = selectRow.clickToSelect;
      var showExpandColumn = expandRow.showExpandColumn,
          expandColumnPosition = expandRow.expandColumnPosition;


      var newAttrs = this.delegate(_extends({}, attrs));
      if (clickToSelect || !!expandRow.renderer) {
        newAttrs.onClick = this.createClickEventHandler(newAttrs.onClick);
      }

      var tabIndexStart = rowIndex * visibleColumnSize + 1;

      var childrens = [_react2.default.createElement(_rowPureContent2.default, _extends({
        key: 'row',
        row: row,
        columns: columns,
        keyField: keyField,
        rowIndex: rowIndex,
        shouldUpdate: this.shouldUpdateRowContent,
        tabIndexStart: tabIndexCell ? tabIndexStart : -1
      }, rest))];

      if (!hideSelectColumn) {
        var selectCell = _react2.default.createElement(_selectionCell2.default, _extends({}, selectRow, {
          key: 'selection-cell',
          rowKey: key,
          rowIndex: rowIndex,
          selected: selected,
          disabled: !selectable,
          tabIndex: tabIndexCell ? tabIndexStart++ : -1
        }));
        if (this.isRenderFunctionColumnInLeft(selectColumnPosition)) {
          childrens.unshift(selectCell);
        } else {
          childrens.push(selectCell);
        }
      }

      if (showExpandColumn) {
        var expandCell = _react2.default.createElement(_expandCell2.default, _extends({}, expandRow, {
          key: 'expand-cell',
          rowKey: key,
          rowIndex: rowIndex,
          expanded: expanded,
          expandable: expandable,
          tabIndex: tabIndexCell ? tabIndexStart++ : -1
        }));
        if (this.isRenderFunctionColumnInLeft(expandColumnPosition)) {
          childrens.unshift(expandCell);
        } else {
          childrens.push(expandCell);
        }
      }

      return _react2.default.createElement(
        'tr',
        _extends({
          style: style,
          className: className
        }, newAttrs),
        childrens
      );
    }
  }]);

  return RowAggregator;
}((0, _shouldUpdater3.default)((0, _eventDelegater2.default)(_react2.default.Component)));

RowAggregator.propTypes = {
  attrs: _propTypes2.default.object,
  style: _propTypes2.default.object
};
RowAggregator.defaultProps = {
  attrs: {},
  style: {}
};
exports.default = RowAggregator;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 react/require-default-props: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 jsx-a11y/no-noninteractive-element-interactions: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
/* eslint no-nested-ternary: 0 */


var ExpandCell = function (_Component) {
  _inherits(ExpandCell, _Component);

  function ExpandCell() {
    _classCallCheck(this, ExpandCell);

    var _this = _possibleConstructorReturn(this, (ExpandCell.__proto__ || Object.getPrototypeOf(ExpandCell)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(ExpandCell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var shouldUpdate = this.props.rowIndex !== nextProps.rowIndex || this.props.expanded !== nextProps.expanded || this.props.rowKey !== nextProps.rowKey || this.props.tabIndex !== nextProps.tabIndex;

      return shouldUpdate;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _props = this.props,
          rowKey = _props.rowKey,
          expanded = _props.expanded,
          onRowExpand = _props.onRowExpand,
          rowIndex = _props.rowIndex;

      e.stopPropagation();
      onRowExpand(rowKey, !expanded, rowIndex, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          expanded = _props2.expanded,
          expandable = _props2.expandable,
          expandColumnRenderer = _props2.expandColumnRenderer,
          tabIndex = _props2.tabIndex,
          rowKey = _props2.rowKey;

      var attrs = {};
      if (tabIndex !== -1) attrs.tabIndex = tabIndex;

      return _react2.default.createElement(
        'td',
        _extends({ className: 'expand-cell', onClick: this.handleClick }, attrs),
        expandColumnRenderer ? expandColumnRenderer({
          expandable: expandable,
          expanded: expanded,
          rowKey: rowKey
        }) : expandable ? expanded ? '(-)' : '(+)' : ''
      );
    }
  }]);

  return ExpandCell;
}(_react.Component);

ExpandCell.propTypes = {
  rowKey: _propTypes2.default.any,
  expanded: _propTypes2.default.bool.isRequired,
  expandable: _propTypes2.default.bool.isRequired,
  onRowExpand: _propTypes2.default.func.isRequired,
  expandColumnRenderer: _propTypes2.default.func,
  rowIndex: _propTypes2.default.number,
  tabIndex: _propTypes2.default.number
};
exports.default = ExpandCell;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _bootstrap = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 react/require-default-props: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 jsx-a11y/no-noninteractive-element-interactions: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var SelectionCell = function (_Component) {
  _inherits(SelectionCell, _Component);

  function SelectionCell() {
    _classCallCheck(this, SelectionCell);

    var _this = _possibleConstructorReturn(this, (SelectionCell.__proto__ || Object.getPrototypeOf(SelectionCell)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(SelectionCell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var shouldUpdate = this.props.rowIndex !== nextProps.rowIndex || this.props.selected !== nextProps.selected || this.props.disabled !== nextProps.disabled || this.props.rowKey !== nextProps.rowKey || this.props.tabIndex !== nextProps.tabIndex || this.props.selectColumnStyle !== nextProps.selectColumnStyle;

      return shouldUpdate;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _props = this.props,
          inputType = _props.mode,
          rowKey = _props.rowKey,
          selected = _props.selected,
          onRowSelect = _props.onRowSelect,
          disabled = _props.disabled,
          rowIndex = _props.rowIndex;

      e.stopPropagation();
      if (disabled) return;

      var checked = inputType === _const2.default.ROW_SELECT_SINGLE ? true : !selected;

      onRowSelect(rowKey, checked, rowIndex, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          rowKey = _props2.rowKey,
          inputType = _props2.mode,
          selected = _props2.selected,
          disabled = _props2.disabled,
          tabIndex = _props2.tabIndex,
          rowIndex = _props2.rowIndex,
          selectionRenderer = _props2.selectionRenderer,
          selectColumnStyle = _props2.selectColumnStyle;


      var attrs = {};
      if (tabIndex !== -1) attrs.tabIndex = tabIndex;

      attrs.style = _utils2.default.isFunction(selectColumnStyle) ? selectColumnStyle({
        checked: selected,
        disabled: disabled,
        rowIndex: rowIndex,
        rowKey: rowKey
      }) : selectColumnStyle;

      return _react2.default.createElement(
        _bootstrap.BootstrapContext.Consumer,
        null,
        function (_ref) {
          var bootstrap4 = _ref.bootstrap4;
          return _react2.default.createElement(
            'td',
            _extends({ className: 'selection-cell', onClick: _this2.handleClick }, attrs),
            selectionRenderer ? selectionRenderer({
              mode: inputType,
              checked: selected,
              disabled: disabled,
              rowIndex: rowIndex,
              rowKey: rowKey
            }) : _react2.default.createElement('input', {
              type: inputType,
              checked: selected,
              disabled: disabled,
              className: bootstrap4 ? 'selection-input-4' : '',
              onChange: function onChange() {}
            })
          );
        }
      );
    }
  }]);

  return SelectionCell;
}(_react.Component);

SelectionCell.propTypes = {
  mode: _propTypes2.default.string.isRequired,
  rowKey: _propTypes2.default.any,
  selected: _propTypes2.default.bool,
  onRowSelect: _propTypes2.default.func,
  disabled: _propTypes2.default.bool,
  rowIndex: _propTypes2.default.number,
  tabIndex: _propTypes2.default.number,
  clickToSelect: _propTypes2.default.bool,
  selectionRenderer: _propTypes2.default.func,
  selectColumnStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func])
};
exports.default = SelectionCell;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RowSection = function RowSection(_ref) {
  var content = _ref.content,
      colSpan = _ref.colSpan;
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      {
        'data-toggle': 'collapse',
        colSpan: colSpan,
        className: 'react-bs-table-no-data'
      },
      content
    )
  );
};

RowSection.propTypes = {
  content: _propTypes2.default.any,
  colSpan: _propTypes2.default.number
};

RowSection.defaultProps = {
  content: null,
  colSpan: 1
};

exports.default = RowSection;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/prop-types: 0 */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _selectionContext = __webpack_require__(10);

var _selectionContext2 = _interopRequireDefault(_selectionContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {
  var renderWithSelection = function renderWithSelection(props, selectRow) {
    var key = props.value;
    var selected = _utils2.default.contains(selectRow.selected, key);
    var selectable = !selectRow.nonSelectable || !_utils2.default.contains(selectRow.nonSelectable, key);
    var notSelectable = _utils2.default.contains(selectRow.nonSelectable, key);

    var style = props.style,
        className = props.className;


    if (selected) {
      var selectedStyle = _utils2.default.isFunction(selectRow.style) ? selectRow.style(props.row, props.rowIndex) : selectRow.style;

      var selectedClasses = _utils2.default.isFunction(selectRow.classes) ? selectRow.classes(props.row, props.rowIndex) : selectRow.classes;

      style = _extends({}, style, selectedStyle);
      className = (0, _classnames2.default)(className, selectedClasses) || undefined;

      if (selectRow.bgColor) {
        style = style || {};
        style.backgroundColor = _utils2.default.isFunction(selectRow.bgColor) ? selectRow.bgColor(props.row, props.rowIndex) : selectRow.bgColor;
      }
    }

    if (notSelectable) {
      var notSelectableStyle = _utils2.default.isFunction(selectRow.nonSelectableStyle) ? selectRow.nonSelectableStyle(props.row, props.rowIndex) : selectRow.nonSelectableStyle;

      var notSelectableClasses = _utils2.default.isFunction(selectRow.nonSelectableClasses) ? selectRow.nonSelectableClasses(props.row, props.rowIndex) : selectRow.nonSelectableClasses;

      style = _extends({}, style, notSelectableStyle);
      className = (0, _classnames2.default)(className, notSelectableClasses) || undefined;
    }

    return _react2.default.createElement(Component, _extends({}, props, {
      style: style,
      className: className,
      selectRow: selectRow,
      selected: selected,
      selectable: selectable
    }));
  };

  function withConsumer(props) {
    return _react2.default.createElement(
      _selectionContext2.default.Consumer,
      null,
      function (selectRow) {
        return renderWithSelection(props, selectRow);
      }
    );
  }

  withConsumer.displayName = 'WithSelectionRowConsumer';
  return withConsumer;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/prop-types: 0 */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _expandRow = __webpack_require__(57);

var _expandRow2 = _interopRequireDefault(_expandRow);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _rowExpandContext = __webpack_require__(12);

var _rowExpandContext2 = _interopRequireDefault(_rowExpandContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {
  var renderWithExpansion = function renderWithExpansion(props, expandRow) {
    var parentClassName = '';
    var className = '';
    var key = props.value;

    var expanded = _utils2.default.contains(expandRow.expanded, key);
    var isClosing = _utils2.default.contains(expandRow.isClosing, key);
    var expandable = !expandRow.nonExpandable || !_utils2.default.contains(expandRow.nonExpandable, key);
    if (expanded) {
      parentClassName = _utils2.default.isFunction(expandRow.parentClassName) ? expandRow.parentClassName(expanded, props.row, props.rowIndex) : expandRow.parentClassName || '';

      className = _utils2.default.isFunction(expandRow.className) ? expandRow.className(expanded, props.row, props.rowIndex) : expandRow.className || '';
    }

    return [_react2.default.createElement(Component, _extends({}, props, {
      key: key,
      expanded: expanded,
      expandable: expandable,
      expandRow: _extends({}, expandRow),
      className: (0, _classnames2.default)(props.className, parentClassName)
    })), expanded || isClosing ? _react2.default.createElement(
      _expandRow2.default,
      {
        key: key + '-expanding',
        colSpan: props.visibleColumnSize,
        expanded: expanded,
        onClosed: function onClosed() {
          return expandRow.onClosed(key);
        },
        className: className
      },
      expandRow.renderer(props.row, props.rowIndex)
    ) : null];
  };
  return function (props) {
    return _react2.default.createElement(
      _rowExpandContext2.default.Consumer,
      null,
      function (expandRow) {
        return renderWithExpansion(props, expandRow);
      }
    );
  };
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = __webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ExpandRow = function ExpandRow(_ref) {
  var children = _ref.children,
      expanded = _ref.expanded,
      onClosed = _ref.onClosed,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['children', 'expanded', 'onClosed', 'className']);

  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      _extends({ className: (0, _classnames2.default)('reset-expansion-style', className) }, rest),
      _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        {
          appear: true,
          'in': expanded,
          timeout: 400,
          classNames: 'row-expand-slide',
          onExited: onClosed
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row-expansion-style' },
            children
          )
        )
      )
    )
  );
};

ExpandRow.propTypes = {
  children: _propTypes2.default.node,
  expanded: _propTypes2.default.bool,
  onClosed: _propTypes2.default.func,
  className: _propTypes2.default.string
};

ExpandRow.defaultProps = {
  children: null,
  expanded: false,
  onClosed: null,
  className: ''
};

exports.default = ExpandRow;

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CSSTransition__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CSSTransition", function() { return __WEBPACK_IMPORTED_MODULE_0__CSSTransition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ReplaceTransition__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceTransition", function() { return __WEBPACK_IMPORTED_MODULE_1__ReplaceTransition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TransitionGroup__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return __WEBPACK_IMPORTED_MODULE_2__TransitionGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Transition__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return __WEBPACK_IMPORTED_MODULE_3__Transition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return __WEBPACK_IMPORTED_MODULE_4__config__["a"]; });






/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_dom_helpers_class_addClass__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_dom_helpers_class_addClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_dom_helpers_class_addClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dom_helpers_class_removeClass__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dom_helpers_class_removeClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_dom_helpers_class_removeClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Transition__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_PropTypes__ = __webpack_require__(22);










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return __WEBPACK_IMPORTED_MODULE_4_dom_helpers_class_addClass___default()(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return __WEBPACK_IMPORTED_MODULE_5_dom_helpers_class_removeClass___default()(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (node, appearing) {
      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    if (type === 'appear' && phase === 'done') {
      className += " " + this.getClassNames('enter').doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    this.appliedClasses[type][phase] = className;

    _addClass(node, className);
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["classNames"]);

    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Transition__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  false ? _extends({}, Transition.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or
   * has finished the transition. A single name can be provided and it will be
   * suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`,
   * `fade-enter-done`, `fade-exit`, `fade-exit-active`, `fade-exit-done`,
   * `fade-appear`, `fade-appear-active`, and `fade-appear-done`.
   *
   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
   * This allows you to define different behavior for when appearing is done and
   * when regular entering is done, using selectors like
   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
   * epic entrance animation when element first appears in the DOM using
   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   * simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : {};
/* harmony default export */ __webpack_exports__["a"] = (CSSTransition);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(61);

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(62));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),
/* 61 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TransitionGroup__ = __webpack_require__(24);






/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = __WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler](Object(__WEBPACK_IMPORTED_MODULE_4_react_dom__["findDOMNode"])(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["children", "in"]);

    var _React$Children$toArr = __WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__TransitionGroup__["a" /* default */], props, inProp ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

ReplaceTransition.propTypes =  false ? {
  in: PropTypes.bool.isRequired,
  children: function children(props, propName) {
    if (React.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : {};
/* harmony default export */ __webpack_exports__["a"] = (ReplaceTransition);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _assertThisInitialized;
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getChildMapping;
/* unused harmony export mergeChildMappings */
/* harmony export (immutable) */ __webpack_exports__["b"] = getInitialChildMapping;
/* harmony export (immutable) */ __webpack_exports__["c"] = getNextChildMapping;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) __WEBPACK_IMPORTED_MODULE_0_react__["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rowTemplate = __webpack_require__(14);

var _rowTemplate2 = _interopRequireDefault(_rowTemplate);

var _footerCell = __webpack_require__(68);

var _footerCell2 = _interopRequireDefault(_footerCell);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  var data = props.data,
      className = props.className,
      columns = props.columns,
      selectRow = props.selectRow,
      expandRow = props.expandRow;


  function renderContent() {
    return columns.map(function (column, i) {
      if (column.footer === undefined || column.footer === null) {
        return false;
      }

      var columnData = _utils2.default.pluck(data, column.dataField);

      return _react2.default.createElement(_footerCell2.default, {
        index: i,
        key: column.dataField,
        column: column,
        columnData: columnData
      });
    });
  }

  return _react2.default.createElement(
    'tfoot',
    null,
    _react2.default.createElement(_rowTemplate2.default, {
      renderContent: renderContent,
      selectRow: selectRow,
      expandRow: expandRow,
      className: className,
      cellEl: 'th'
    })
  );
}; /* eslint react/require-default-props: 0 */


Footer.propTypes = {
  data: _propTypes2.default.array,
  className: _propTypes2.default.string,
  columns: _propTypes2.default.array,
  selectRow: _propTypes2.default.object,
  expandRow: _propTypes2.default.object
};

exports.default = Footer;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _cellEventDelegater = __webpack_require__(9);

var _cellEventDelegater2 = _interopRequireDefault(_cellEventDelegater);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */


var FooterCell = function (_eventDelegater) {
  _inherits(FooterCell, _eventDelegater);

  function FooterCell() {
    _classCallCheck(this, FooterCell);

    return _possibleConstructorReturn(this, (FooterCell.__proto__ || Object.getPrototypeOf(FooterCell)).apply(this, arguments));
  }

  _createClass(FooterCell, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          index = _props.index,
          column = _props.column,
          columnData = _props.columnData;
      var footer = column.footer,
          footerTitle = column.footerTitle,
          footerAlign = column.footerAlign,
          footerFormatter = column.footerFormatter,
          footerEvents = column.footerEvents,
          footerClasses = column.footerClasses,
          footerStyle = column.footerStyle,
          footerAttrs = column.footerAttrs;


      var delegateEvents = this.delegate(footerEvents);
      var cellAttrs = _extends({}, _utils2.default.isFunction(footerAttrs) ? footerAttrs(column, index) : footerAttrs, delegateEvents);

      var text = '';
      if (_utils2.default.isString(footer)) {
        text = footer;
      } else if (_utils2.default.isFunction(footer)) {
        text = footer(columnData, column, index);
      }

      var cellStyle = {};
      var cellClasses = _utils2.default.isFunction(footerClasses) ? footerClasses(column, index) : footerClasses;

      if (footerStyle) {
        cellStyle = _utils2.default.isFunction(footerStyle) ? footerStyle(column, index) : footerStyle;
        cellStyle = cellStyle ? _extends({}, cellStyle) : cellStyle;
      }

      if (footerTitle) {
        cellAttrs.title = _utils2.default.isFunction(footerTitle) ? footerTitle(column, index) : text;
      }

      if (footerAlign) {
        cellStyle.textAlign = _utils2.default.isFunction(footerAlign) ? footerAlign(column, index) : footerAlign;
      }

      if (cellClasses) cellAttrs.className = (0, _classnames2.default)(cellAttrs.className, cellClasses);
      if (!_utils2.default.isEmptyObject(cellStyle)) cellAttrs.style = cellStyle;

      var children = footerFormatter ? footerFormatter(column, index, { text: text }) : text;

      return _react2.default.createElement('th', cellAttrs, children);
    }
  }]);

  return FooterCell;
}((0, _cellEventDelegater2.default)(_react2.default.Component));

FooterCell.propTypes = {
  columnData: _propTypes2.default.array,
  index: _propTypes2.default.number,
  column: _propTypes2.default.object
};

exports.default = FooterCell;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _columnResolver = __webpack_require__(70);

var _columnResolver2 = _interopRequireDefault(_columnResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ColumnResolver) {
    _inherits(TableResolver, _ColumnResolver);

    function TableResolver() {
      _classCallCheck(this, TableResolver);

      return _possibleConstructorReturn(this, (TableResolver.__proto__ || Object.getPrototypeOf(TableResolver)).apply(this, arguments));
    }

    _createClass(TableResolver, [{
      key: 'validateProps',
      value: function validateProps() {
        var keyField = this.props.keyField;

        if (!keyField) {
          throw new Error('Please specify a field as key via keyField');
        }
        if (this.visibleColumnSize(false) <= 0) {
          throw new Error('No visible columns detected');
        }
      }
    }, {
      key: 'isEmpty',
      value: function isEmpty() {
        return this.props.data.length === 0;
      }
    }, {
      key: 'visibleRows',
      value: function visibleRows() {
        var _props = this.props,
            data = _props.data,
            hiddenRows = _props.hiddenRows,
            keyField = _props.keyField;

        if (!hiddenRows || hiddenRows.length === 0) return data;
        return data.filter(function (row) {
          var key = _utils2.default.get(row, keyField);
          return !_utils2.default.contains(hiddenRows, key);
        });
      }
    }]);

    return TableResolver;
  }((0, _columnResolver2.default)(ExtendBase));
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(ColumnResolver, _ExtendBase);

    function ColumnResolver() {
      _classCallCheck(this, ColumnResolver);

      return _possibleConstructorReturn(this, (ColumnResolver.__proto__ || Object.getPrototypeOf(ColumnResolver)).apply(this, arguments));
    }

    _createClass(ColumnResolver, [{
      key: "visibleColumnSize",
      value: function visibleColumnSize() {
        var includeSelectColumn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        var columnLen = void 0;
        if (this.props.columnToggle && this.props.columnToggle.toggles) {
          var columns = this.props.columnToggle.toggles;
          columnLen = Object.keys(columns).filter(function (name) {
            return columns[name];
          }).length;
        } else {
          columnLen = this.props.columns.filter(function (c) {
            return !c.hidden;
          }).length;
        }
        if (!includeSelectColumn) return columnLen;
        if (this.props.selectRow && !this.props.selectRow.hideSelectColumn) {
          columnLen += 1;
        }
        if (this.props.expandRow && this.props.expandRow.showExpandColumn) {
          columnLen += 1;
        }
        return columnLen;
      }
    }]);

    return ColumnResolver;
  }(ExtendBase);
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _events = __webpack_require__(25);

var _events2 = _interopRequireDefault(_events);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _dataContext = __webpack_require__(72);

var _dataContext2 = _interopRequireDefault(_dataContext);

var _columnContext = __webpack_require__(73);

var _columnContext2 = _interopRequireDefault(_columnContext);

var _sortContext = __webpack_require__(74);

var _sortContext2 = _interopRequireDefault(_sortContext);

var _selectionContext = __webpack_require__(10);

var _selectionContext2 = _interopRequireDefault(_selectionContext);

var _rowExpandContext = __webpack_require__(12);

var _rowExpandContext2 = _interopRequireDefault(_rowExpandContext);

var _remoteResolver2 = __webpack_require__(75);

var _remoteResolver3 = _interopRequireDefault(_remoteResolver2);

var _bootstrap = __webpack_require__(5);

var _operators = __webpack_require__(11);

var _operators2 = _interopRequireDefault(_operators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint no-return-assign: 0 */
/* eslint no-param-reassign: 0 */
/* eslint class-methods-use-this: 0 */


var withContext = function withContext(Base) {
  return function (_remoteResolver) {
    _inherits(BootstrapTableContainer, _remoteResolver);

    function BootstrapTableContainer(props) {
      _classCallCheck(this, BootstrapTableContainer);

      var _this = _possibleConstructorReturn(this, (BootstrapTableContainer.__proto__ || Object.getPrototypeOf(BootstrapTableContainer)).call(this, props));

      _this.DataContext = (0, _dataContext2.default)();

      if (props.registerExposedAPI) {
        var exposedAPIEmitter = new _events2.default();
        exposedAPIEmitter.on('get.table.data', function (payload) {
          return payload.result = _this.table.getData();
        });
        exposedAPIEmitter.on('get.selected.rows', function (payload) {
          return payload.result = _this.selectionContext.getSelected();
        });
        exposedAPIEmitter.on('get.filtered.rows', function (payload) {
          if (_this.searchContext) {
            payload.result = _this.searchContext.getSearched();
          } else if (_this.filterContext) {
            payload.result = _this.filterContext.getFiltered();
          } else {
            payload.result = _this.table.getData();
          }
        });
        props.registerExposedAPI(exposedAPIEmitter);
      }

      if (props.columns.filter(function (col) {
        return col.sort;
      }).length > 0) {
        _this.SortContext = (0, _sortContext2.default)(_operators2.default, _this.isRemoteSort, _this.handleRemoteSortChange);
      }

      if (props.columnToggle || props.columns.filter(function (col) {
        return col.hidden;
      }).length > 0) {
        _this.ColumnManagementContext = (0, _columnContext2.default)();
      }

      if (props.selectRow) {
        _this.SelectionContext = _selectionContext2.default;
      }

      if (props.expandRow) {
        _this.RowExpandContext = _rowExpandContext2.default;
      }

      if (props.cellEdit && props.cellEdit.createContext) {
        _this.CellEditContext = props.cellEdit.createContext(_utils2.default, _operators2.default, _this.isRemoteCellEdit, _this.handleRemoteCellChange);
      }

      if (props.filter) {
        _this.FilterContext = props.filter.createContext(_utils2.default, _this.isRemoteFiltering, _this.handleRemoteFilterChange);
      }

      if (props.pagination) {
        _this.PaginationContext = props.pagination.createContext();
      }

      if (props.search && props.search.searchContext) {
        _this.SearchContext = props.search.searchContext(_utils2.default, _this.isRemoteSearch, _this.handleRemoteSearchChange);
      }

      if (props.setDependencyModules) {
        props.setDependencyModules(_utils2.default);
      }

      if (props.setPaginationRemoteEmitter) {
        props.setPaginationRemoteEmitter(_this.remoteEmitter);
      }
      return _this;
    }

    _createClass(BootstrapTableContainer, [{
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.columns.filter(function (col) {
          return col.sort;
        }).length <= 0) {
          this.SortContext = null;
        } else if (!this.SortContext) {
          this.SortContext = (0, _sortContext2.default)(_operators2.default, this.isRemoteSort, this.handleRemoteSortChange);
        }
        if (!nextProps.pagination && this.props.pagination) {
          this.PaginationContext = null;
        }
        if (nextProps.pagination && !this.props.pagination) {
          this.PaginationContext = nextProps.pagination.createContext(this.isRemotePagination, this.handleRemotePageChange);
        }
        if (!nextProps.cellEdit && this.props.cellEdit) {
          this.CellEditContext = null;
        }
        if (nextProps.cellEdit && !this.props.cellEdit) {
          this.CellEditContext = nextProps.cellEdit.createContext(_utils2.default, _operators2.default, this.isRemoteCellEdit, this.handleRemoteCellChange);
        }
      }
    }, {
      key: 'renderBase',
      value: function renderBase() {
        var _this2 = this;

        return function (rootProps, filterProps, searchProps, sortProps, paginationProps, columnToggleProps) {
          return _react2.default.createElement(Base, _extends({
            ref: function ref(n) {
              return _this2.table = n;
            }
          }, _this2.props, sortProps, filterProps, searchProps, paginationProps, columnToggleProps, {
            data: rootProps.getData(filterProps, searchProps, sortProps, paginationProps)
          }));
        };
      }
    }, {
      key: 'renderWithColumnManagementCtx',
      value: function renderWithColumnManagementCtx(base, baseProps) {
        var _this3 = this;

        return function (rootProps, filterProps, searchProps, sortProps, paginationProps) {
          return _react2.default.createElement(
            _this3.ColumnManagementContext.Provider,
            _extends({}, baseProps, {
              toggles: _this3.props.columnToggle ? _this3.props.columnToggle.toggles : null
            }),
            _react2.default.createElement(
              _this3.ColumnManagementContext.Consumer,
              null,
              function (columnToggleProps) {
                return base(rootProps, filterProps, searchProps, sortProps, paginationProps, columnToggleProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithSelectionCtx',
      value: function renderWithSelectionCtx(base, baseProps) {
        var _this4 = this;

        return function (rootProps, filterProps, searchProps, sortProps, paginationProps) {
          return _react2.default.createElement(
            _this4.SelectionContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this4.selectionContext = n;
              },
              selectRow: _this4.props.selectRow,
              data: rootProps.getData(filterProps, searchProps, sortProps, paginationProps)
            }),
            base(rootProps, filterProps, searchProps, sortProps, paginationProps)
          );
        };
      }
    }, {
      key: 'renderWithRowExpandCtx',
      value: function renderWithRowExpandCtx(base, baseProps) {
        var _this5 = this;

        return function (rootProps, filterProps, searchProps, sortProps, paginationProps) {
          return _react2.default.createElement(
            _this5.RowExpandContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this5.rowExpandContext = n;
              },
              expandRow: _this5.props.expandRow,
              data: rootProps.getData(filterProps, searchProps, sortProps, paginationProps)
            }),
            base(rootProps, filterProps, searchProps, sortProps, paginationProps)
          );
        };
      }
    }, {
      key: 'renderWithPaginationCtx',
      value: function renderWithPaginationCtx(base) {
        var _this6 = this;

        return function (rootProps, filterProps, searchProps, sortProps) {
          return _react2.default.createElement(
            _this6.PaginationContext.Provider,
            {
              ref: function ref(n) {
                return _this6.paginationContext = n;
              },
              pagination: _this6.props.pagination,
              data: rootProps.getData(filterProps, searchProps, sortProps),
              bootstrap4: _this6.props.bootstrap4,
              isRemotePagination: _this6.isRemotePagination,
              remoteEmitter: _this6.remoteEmitter,
              onDataSizeChange: _this6.props.onDataSizeChange,
              tableId: _this6.props.id
            },
            _react2.default.createElement(
              _this6.PaginationContext.Consumer,
              null,
              function (paginationProps) {
                return base(rootProps, filterProps, searchProps, sortProps, paginationProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithSortCtx',
      value: function renderWithSortCtx(base, baseProps) {
        var _this7 = this;

        return function (rootProps, filterProps, searchProps) {
          return _react2.default.createElement(
            _this7.SortContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this7.sortContext = n;
              },
              defaultSorted: _this7.props.defaultSorted,
              defaultSortDirection: _this7.props.defaultSortDirection,
              sort: _this7.props.sort,
              data: rootProps.getData(filterProps, searchProps)
            }),
            _react2.default.createElement(
              _this7.SortContext.Consumer,
              null,
              function (sortProps) {
                return base(rootProps, filterProps, searchProps, sortProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithSearchCtx',
      value: function renderWithSearchCtx(base, baseProps) {
        var _this8 = this;

        return function (rootProps, filterProps) {
          return _react2.default.createElement(
            _this8.SearchContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this8.searchContext = n;
              },
              data: rootProps.getData(filterProps),
              searchText: _this8.props.search.searchText,
              dataChangeListener: _this8.props.dataChangeListener
            }),
            _react2.default.createElement(
              _this8.SearchContext.Consumer,
              null,
              function (searchProps) {
                return base(rootProps, filterProps, searchProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithFilterCtx',
      value: function renderWithFilterCtx(base, baseProps) {
        var _this9 = this;

        return function (rootProps) {
          return _react2.default.createElement(
            _this9.FilterContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this9.filterContext = n;
              },
              data: rootProps.getData(),
              filter: _this9.props.filter.options || {},
              dataChangeListener: _this9.props.dataChangeListener
            }),
            _react2.default.createElement(
              _this9.FilterContext.Consumer,
              null,
              function (filterProps) {
                return base(rootProps, filterProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithCellEditCtx',
      value: function renderWithCellEditCtx(base, baseProps) {
        var _this10 = this;

        return function (rootProps) {
          return _react2.default.createElement(
            _this10.CellEditContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this10.cellEditContext = n;
              },
              selectRow: _this10.props.selectRow,
              cellEdit: _this10.props.cellEdit,
              data: rootProps.getData()
            }),
            base(rootProps)
          );
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            keyField = _props.keyField,
            columns = _props.columns,
            bootstrap4 = _props.bootstrap4;

        var baseProps = { keyField: keyField, columns: columns };

        var base = this.renderBase();

        if (this.ColumnManagementContext) {
          base = this.renderWithColumnManagementCtx(base, baseProps);
        }

        if (this.SelectionContext) {
          base = this.renderWithSelectionCtx(base, baseProps);
        }

        if (this.RowExpandContext) {
          base = this.renderWithRowExpandCtx(base, baseProps);
        }

        if (this.PaginationContext) {
          base = this.renderWithPaginationCtx(base, baseProps);
        }

        if (this.SortContext) {
          base = this.renderWithSortCtx(base, baseProps);
        }

        if (this.SearchContext) {
          base = this.renderWithSearchCtx(base, baseProps);
        }

        if (this.FilterContext) {
          base = this.renderWithFilterCtx(base, baseProps);
        }

        if (this.CellEditContext) {
          base = this.renderWithCellEditCtx(base, baseProps);
        }

        return _react2.default.createElement(
          _bootstrap.BootstrapContext.Provider,
          { value: { bootstrap4: bootstrap4 } },
          _react2.default.createElement(
            this.DataContext.Provider,
            _extends({}, baseProps, {
              data: this.props.data
            }),
            _react2.default.createElement(
              this.DataContext.Consumer,
              null,
              base
            )
          )
        );
      }
    }]);

    return BootstrapTableContainer;
  }((0, _remoteResolver3.default)(_react.Component));
};

exports.default = withContext;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */


exports.default = function () {
  var DataContext = _react2.default.createContext();

  var DataProvider = function (_Component) {
    _inherits(DataProvider, _Component);

    function DataProvider() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, DataProvider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DataProvider.__proto__ || Object.getPrototypeOf(DataProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = { data: _this.props.data }, _this.getData = function (filterProps, searchProps, sortProps, paginationProps) {
        if (paginationProps) return paginationProps.data;else if (sortProps) return sortProps.data;else if (searchProps) return searchProps.data;else if (filterProps) return filterProps.data;
        return _this.props.data;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DataProvider, [{
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState(function () {
          return { data: nextProps.data };
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          DataContext.Provider,
          {
            value: {
              data: this.state.data,
              getData: this.getData
            }
          },
          this.props.children
        );
      }
    }]);

    return DataProvider;
  }(_react.Component);

  DataProvider.propTypes = {
    data: _propTypes2.default.array.isRequired,
    children: _propTypes2.default.node.isRequired
  };

  return {
    Provider: DataProvider,
    Consumer: DataContext.Consumer
  };
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/prefer-stateless-function: 0 */


exports.default = function () {
  var ColumnManagementContext = _react2.default.createContext();

  var ColumnManagementProvider = function (_React$Component) {
    _inherits(ColumnManagementProvider, _React$Component);

    function ColumnManagementProvider() {
      _classCallCheck(this, ColumnManagementProvider);

      return _possibleConstructorReturn(this, (ColumnManagementProvider.__proto__ || Object.getPrototypeOf(ColumnManagementProvider)).apply(this, arguments));
    }

    _createClass(ColumnManagementProvider, [{
      key: 'render',
      value: function render() {
        var toggleColumn = void 0;
        var _props = this.props,
            columns = _props.columns,
            toggles = _props.toggles;

        if (toggles) {
          toggleColumn = columns.filter(function (column) {
            return toggles[column.dataField];
          });
        } else {
          toggleColumn = columns.filter(function (column) {
            return !column.hidden;
          });
        }
        return _react2.default.createElement(
          ColumnManagementContext.Provider,
          { value: { columns: toggleColumn } },
          this.props.children
        );
      }
    }]);

    return ColumnManagementProvider;
  }(_react2.default.Component);

  ColumnManagementProvider.propTypes = {
    columns: _propTypes2.default.array.isRequired,
    toggles: _propTypes2.default.object
  };
  ColumnManagementProvider.defaultProps = {
    toggles: null
  };


  return {
    Provider: ColumnManagementProvider,
    Consumer: ColumnManagementContext.Consumer
  };
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint react/require-default-props: 0 */


exports.default = function (dataOperator, isRemoteSort, handleSortChange) {
  var SortContext = _react2.default.createContext();

  var SortProvider = function (_React$Component) {
    _inherits(SortProvider, _React$Component);

    function SortProvider(props) {
      _classCallCheck(this, SortProvider);

      var _this = _possibleConstructorReturn(this, (SortProvider.__proto__ || Object.getPrototypeOf(SortProvider)).call(this, props));

      _initialiseProps.call(_this);

      var sortOrder = void 0;
      var sortColumn = void 0;
      var defaultSorted = props.defaultSorted,
          defaultSortDirection = props.defaultSortDirection,
          sort = props.sort;


      if (defaultSorted && defaultSorted.length > 0) {
        sortOrder = defaultSorted[0].order || defaultSortDirection;
        sortColumn = _this.initSort(defaultSorted[0].dataField, sortOrder);
      } else if (sort && sort.dataField && sort.order) {
        sortOrder = sort.order;
        sortColumn = _this.initSort(sort.dataField, sortOrder);
      }
      _this.state = { sortOrder: sortOrder, sortColumn: sortColumn };
      return _this;
    }

    _createClass(SortProvider, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _state = this.state,
            sortOrder = _state.sortOrder,
            sortColumn = _state.sortColumn;

        if (isRemoteSort() && sortOrder && sortColumn) {
          handleSortChange(sortColumn.dataField, sortOrder);
        }
      }
    }, {
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        var sort = nextProps.sort,
            columns = nextProps.columns;

        if (sort && sort.dataField && sort.order) {
          this.setState({
            sortOrder: sort.order,
            sortColumn: columns.find(function (col) {
              return col.dataField === sort.dataField;
            })
          });
        }
      }
    }, {
      key: 'initSort',
      value: function initSort(sortField, sortOrder) {
        var sortColumn = void 0;
        var columns = this.props.columns;

        var sortColumns = columns.filter(function (col) {
          return col.dataField === sortField;
        });
        if (sortColumns.length > 0) {
          sortColumn = sortColumns[0];

          if (sortColumn.onSort) {
            sortColumn.onSort(sortField, sortOrder);
          }
        }
        return sortColumn;
      }
    }, {
      key: 'render',
      value: function render() {
        var data = this.props.data;
        var sort = this.props.sort;
        var _state2 = this.state,
            sortOrder = _state2.sortOrder,
            sortColumn = _state2.sortColumn;

        if (!isRemoteSort() && sortColumn) {
          var sortFunc = sortColumn.sortFunc ? sortColumn.sortFunc : sort && sort.sortFunc;
          data = dataOperator.sort(data, sortOrder, _extends({}, sortColumn, { sortFunc: sortFunc }));
        }

        return _react2.default.createElement(
          SortContext.Provider,
          {
            value: {
              data: data,
              sortOrder: sortOrder,
              onSort: this.handleSort,
              sortField: sortColumn ? sortColumn.dataField : null
            }
          },
          this.props.children
        );
      }
    }]);

    return SortProvider;
  }(_react2.default.Component);

  SortProvider.propTypes = {
    data: _propTypes2.default.array.isRequired,
    columns: _propTypes2.default.array.isRequired,
    children: _propTypes2.default.node.isRequired,
    defaultSorted: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      dataField: _propTypes2.default.string.isRequired,
      order: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]).isRequired
    })),
    sort: _propTypes2.default.shape({
      dataField: _propTypes2.default.string,
      order: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]),
      sortFunc: _propTypes2.default.func
    }),
    defaultSortDirection: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC])
  };

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.handleSort = function (column) {
      var sortOrder = dataOperator.nextOrder(column, _this2.state, _this2.props.defaultSortDirection);

      if (column.onSort) {
        column.onSort(column.dataField, sortOrder);
      }

      if (isRemoteSort()) {
        handleSortChange(column.dataField, sortOrder);
      }
      _this2.setState(function () {
        return {
          sortOrder: sortOrder,
          sortColumn: column
        };
      });
    };
  };

  return {
    Provider: SortProvider,
    Consumer: SortContext.Consumer
  };
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _events = __webpack_require__(25);

var _events2 = _interopRequireDefault(_events);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(RemoteResolver, _ExtendBase);

    function RemoteResolver(props) {
      _classCallCheck(this, RemoteResolver);

      var _this = _possibleConstructorReturn(this, (RemoteResolver.__proto__ || Object.getPrototypeOf(RemoteResolver)).call(this, props));

      _this.getNewestState = function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var sortOrder = void 0;
        var sortField = void 0;
        var page = void 0;
        var sizePerPage = void 0;
        var searchText = void 0;
        var filters = {};

        if (_this.sortContext) {
          sortOrder = _this.sortContext.state.sortOrder;
          sortField = _this.sortContext.state.sortColumn ? _this.sortContext.state.sortColumn.dataField : null;
        }

        if (_this.filterContext) {
          filters = _this.filterContext.currFilters;
        }

        if (_this.paginationContext) {
          page = _this.paginationContext.currPage;
          sizePerPage = _this.paginationContext.currSizePerPage;
        }

        if (_this.searchContext) {
          searchText = _this.props.search.searchText;
        }

        return _extends({
          sortOrder: sortOrder,
          sortField: sortField,
          filters: filters,
          page: page,
          sizePerPage: sizePerPage,
          searchText: searchText
        }, state, {
          data: _this.props.data
        });
      };

      _this.isRemoteSearch = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.search || _this.isRemotePagination();
      };

      _this.isRemotePagination = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var remote = _this.props.remote;

        e.result = remote === true || _utils2.default.isObject(remote) && remote.pagination;
        return e.result;
      };

      _this.isRemoteFiltering = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.filter || _this.isRemotePagination();
      };

      _this.isRemoteSort = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.sort || _this.isRemotePagination();
      };

      _this.isRemoteCellEdit = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.cellEdit;
      };

      _this.handleRemotePageChange = function (page, sizePerPage) {
        _this.props.onTableChange('pagination', _this.getNewestState({ page: page, sizePerPage: sizePerPage }));
      };

      _this.handleRemoteFilterChange = function (filters) {
        var newState = { filters: filters };
        if (_this.isRemotePagination()) {
          var options = _this.props.pagination.options || {};
          newState.page = _utils2.default.isDefined(options.pageStartIndex) ? options.pageStartIndex : 1;
        }
        _this.props.onTableChange('filter', _this.getNewestState(newState));
      };

      _this.handleRemoteSortChange = function (sortField, sortOrder) {
        _this.props.onTableChange('sort', _this.getNewestState({ sortField: sortField, sortOrder: sortOrder }));
      };

      _this.handleRemoteCellChange = function (rowId, dataField, newValue) {
        var cellEdit = { rowId: rowId, dataField: dataField, newValue: newValue };
        _this.props.onTableChange('cellEdit', _this.getNewestState({ cellEdit: cellEdit }));
      };

      _this.handleRemoteSearchChange = function (searchText) {
        _this.props.onTableChange('search', _this.getNewestState({ searchText: searchText }));
      };

      _this.remoteEmitter = new _events2.default();
      _this.remoteEmitter.on('paginationChange', _this.handleRemotePageChange);
      _this.remoteEmitter.on('isRemotePagination', _this.isRemotePagination);
      return _this;
    }

    return RemoteResolver;
  }(ExtendBase);
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiMmQ1MTE5NGY5YjA0OTZiYjQ4NiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnN0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3Jvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NlbGwtZXZlbnQtZGVsZWdhdGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL3NlbGVjdGlvbi1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL29wZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9yb3ctZXhwYW5kLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy9yb3ctdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L3Jvdy1wdXJlLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L2V2ZW50LWRlbGVnYXRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvc2hvdWxkLXVwZGF0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9UcmFuc2l0aW9uLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdERPTVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCJ9Iiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS91dGlscy9Qcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vVHJhbnNpdGlvbkdyb3VwQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9UcmFuc2l0aW9uR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9ib290c3RyYXAtdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2hlYWRlci1jZWxsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3NvcnQvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3NvcnQvY2FyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS91bmRlcnNjb3JlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1oZWFkZXItY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1oZWFkZXItY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1oZWFkZXItY2VsbC1jb25zdW1lci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9leHBhbmQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvbXV0YXRlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3NvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1oZWFkZXItY2VsbC1jb25zdW1lci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9maWx0ZXJzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2ZpbHRlcnMtY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jYXB0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L3NpbXBsZS1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvYWdncmVnYXRlLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1jZWxsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWNlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L3Jvdy1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vcm93LWNvbnN1bWVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1leHBhbmQvcm93LWNvbnN1bWVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1leHBhbmQvZXhwYW5kLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9DU1NUcmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL2FkZENsYXNzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL2hhc0NsYXNzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL3JlbW92ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL1JlcGxhY2VUcmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS91dGlscy9DaGlsZE1hcHBpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2Zvb3Rlci1jZWxsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL2NvbHVtbi1yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9kYXRhLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvY29sdW1uLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvc29ydC1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL3JlbW90ZS1yZXNvbHZlci5qcyJdLCJuYW1lcyI6WyJzcGxpdE5lc3RlZCIsInN0ciIsImpvaW4iLCJyZXBsYWNlIiwic3BsaXQiLCJjb250YWlucyIsImxpc3QiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiaW5kZXhPZiIsImdldCIsInRhcmdldCIsImZpZWxkIiwiZGlyZWN0R2V0IiwidW5kZWZpbmVkIiwicGF0aEFycmF5IiwicmVzdWx0IiwicmVkdWNlIiwiY3VyciIsInBhdGgiLCJlIiwic2V0Iiwic2FmZSIsImxldmVsIiwiYSIsImIiLCJFcnJvciIsImxlbmd0aCIsImlzRW1wdHlPYmplY3QiLCJvYmoiLCJpc09iamVjdCIsImhhc093blByb3BlcnR5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwia2V5cyIsImkiLCJjYWxsIiwiaXNEZWZpbmVkIiwic2xlZXAiLCJmbiIsIm1zIiwic2V0VGltZW91dCIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJhc3NpZ24iLCJTT1JUX0FTQyIsIlNPUlRfREVTQyIsIlJPV19TRUxFQ1RfU0lOR0xFIiwiUk9XX1NFTEVDVF9NVUxUSVBMRSIsIlJPV19TRUxFQ1RfRElTQUJMRUQiLCJDSEVDS0JPWF9TVEFUVVNfQ0hFQ0tFRCIsIkNIRUNLQk9YX1NUQVRVU19JTkRFVEVSTUlOQVRFIiwiQ0hFQ0tCT1hfU1RBVFVTX1VOQ0hFQ0tFRCIsIklORElDQVRPUl9QT1NJVElPTl9MRUZUIiwiSU5ESUNBVE9SX1BPU0lUSU9OX1JJR0hUIiwiVFlQRV9TVFJJTkciLCJUWVBFX05VTUJFUiIsIlRZUEVfQk9PTEVBTiIsIlRZUEVfREFURSIsIkZJTFRFUlNfUE9TSVRJT05fSU5MSU5FIiwiRklMVEVSU19QT1NJVElPTl9UT1AiLCJGSUxURVJTX1BPU0lUSU9OX0JPVFRPTSIsIkJvb3RzdHJhcENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiYm9vdHN0cmFwNCIsIm1hdGNoUm93Iiwia2V5RmllbGQiLCJpZCIsInJvdyIsImdldFJvd0J5Um93SWQiLCJkYXRhIiwiZmluZCIsImV2ZW50cyIsInByb3BzIiwiY3JlYXRlRGVmYXVsdEV2ZW50SGFuZGxlciIsImJpbmQiLCJjYiIsImNvbHVtbiIsImNvbHVtbkluZGV4IiwiaW5kZXgiLCJhdHRycyIsIm5ld0F0dHJzIiwiZm9yRWFjaCIsImF0dHIiLCJFeHRlbmRCYXNlIiwiU2VsZWN0aW9uQ29udGV4dCIsIlNlbGVjdGlvblByb3ZpZGVyIiwiaGFuZGxlUm93U2VsZWN0Iiwicm93S2V5IiwiY2hlY2tlZCIsInJvd0luZGV4Iiwic2VsZWN0Um93IiwibW9kZSIsIm9uU2VsZWN0IiwiY3VyclNlbGVjdGVkIiwic2VsZWN0ZWQiLCJwdXNoIiwiZmlsdGVyIiwiZm9yY2VVcGRhdGUiLCJoYW5kbGVBbGxSb3dzU2VsZWN0IiwiaXNVblNlbGVjdCIsIm9uU2VsZWN0QWxsIiwibm9uU2VsZWN0YWJsZSIsImNvbmNhdCIsInNlbGVjdGFibGVLZXlzIiwiZCIsInMiLCJnZXRTZWxlY3RlZFJvd3MiLCJBcnJheSIsImlzQXJyYXkiLCJuZXh0UHJvcHMiLCJhbGxSb3dzU2VsZWN0ZWQiLCJhbGxSb3dzTm90U2VsZWN0ZWQiLCJjaGVja2VkU3RhdHVzIiwib25Sb3dTZWxlY3QiLCJvbkFsbFJvd3NTZWxlY3QiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJzdHJpbmciLCJQcm92aWRlciIsIkNvbnN1bWVyIiwicm93cyIsInNlbGVjdGlvbiIsImV4cGFuZCIsIm11dGF0ZSIsInNvcnQiLCJ0eXBlIiwiUm93RXhwYW5kQ29udGV4dCIsIlJvd0V4cGFuZFByb3ZpZGVyIiwic3RhdGUiLCJleHBhbmRlZCIsImV4cGFuZFJvdyIsImlzQ2xvc2luZyIsIm9uQ2xvc2VkIiwiY2xvc2VkUm93Iiwic2V0U3RhdGUiLCJoYW5kbGVSb3dFeHBhbmQiLCJvbkV4cGFuZCIsIm9ubHlPbmVFeHBhbmRpbmciLCJub25FeHBhbmRhYmxlIiwiY3VyckV4cGFuZGVkIiwiaGFuZGxlQWxsUm93RXhwYW5kIiwiZXhwYW5kQWxsIiwib25FeHBhbmRBbGwiLCJleHBhbmRhYmxlS2V5cyIsImdldEV4cGFuZGVkUm93cyIsIm5leHRFeHBhbmRlZCIsInJvd0lkIiwiYWNjIiwiY3VyIiwiaXNBbnlFeHBhbmRzIiwib25Sb3dFeHBhbmQiLCJvbkFsbFJvd0V4cGFuZCIsImdldFNlbGVjdGlvblN1bW1hcnkiLCJyb3dLZXlzIiwibWFwIiwieCIsInNraXBzIiwidW5TZWxlY3RhYmxlS2V5cyIsImsiLCJSb3dUZW1wbGF0ZSIsInJlbmRlckNvbnRlbnQiLCJjZWxsRWwiLCJyZXN0IiwiaXNSZW5kZXJGdW5jdGlvbkNvbHVtbkluTGVmdCIsInBvc2l0aW9uIiwiY2hpbGRyZW5zIiwiaGlkZVNlbGVjdENvbHVtbiIsInNlbGVjdENvbHVtblBvc2l0aW9uIiwidW5zaGlmdCIsImNyZWF0ZUVsZW1lbnQiLCJrZXkiLCJzaG93RXhwYW5kQ29sdW1uIiwiZXhwYW5kQ29sdW1uUG9zaXRpb24iLCJvYmplY3QiLCJSb3dQdXJlQ29udGVudCIsInNob3VsZFVwZGF0ZSIsImNvbHVtbnMiLCJlZGl0YWJsZSIsImVkaXRpbmdSb3dJZHgiLCJlZGl0aW5nQ29sSWR4Iiwib25TdGFydCIsImNsaWNrVG9FZGl0IiwiZGJjbGlja1RvRWRpdCIsIkVkaXRpbmdDZWxsQ29tcG9uZW50IiwidGFiSW5kZXhTdGFydCIsInRhYkluZGV4IiwiZGF0YUZpZWxkIiwiY29udGVudCIsImNlbGxUaXRsZSIsImNlbGxTdHlsZSIsImNlbGxBdHRycyIsImlzRnVuY3Rpb24iLCJvcmlnaW5GbiIsImNlbGxDbGFzc2VzIiwiY2xhc3NlcyIsInN0eWxlIiwidGl0bGUiLCJhbGlnbiIsInRleHRBbGlnbiIsImNsYXNzTmFtZSIsImVkaXRhYmxlQ2VsbCIsImNsaWNrTnVtIiwiY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIiLCJzZWxlY3RhYmxlIiwiZXhwYW5kYWJsZSIsIkRFTEFZX0ZPUl9EQkNMSUNLIiwiY2xpY2tGbiIsImV4cGFuZEJ5Q29sdW1uT25seSIsImNsaWNrVG9FeHBhbmQiLCJjbGlja1RvU2VsZWN0IiwiaXNFcXVhbCIsInNob3VsZFVwZGF0ZUJ5Q2VsbEVkaXRpbmciLCJzaG91bGRVcGRhdGVkQnlOb3JtYWxQcm9wcyIsInNob3VsZFVwZGF0ZUNoaWxkIiwic2hvdWxkVXBkYXRlQnlDb2x1bW5zRm9yU2ltcGxlQ2hlY2siLCJCb290c3RyYXBUYWJsZSIsImdldERhdGEiLCJ2aXNpYmxlUm93cyIsInZhbGlkYXRlUHJvcHMiLCJvbkRhdGFTaXplQ2hhbmdlIiwicGFnaW5hdGlvbiIsImRhdGFTaXplIiwibG9hZGluZyIsIm92ZXJsYXkiLCJMb2FkaW5nT3ZlcmxheSIsInJlbmRlclRhYmxlIiwidGFiSW5kZXhDZWxsIiwic3RyaXBlZCIsImhvdmVyIiwiYm9yZGVyZWQiLCJjb25kZW5zZWQiLCJub0RhdGFJbmRpY2F0aW9uIiwiY2FwdGlvbiIsInJvd1N0eWxlIiwicm93Q2xhc3NlcyIsIndyYXBwZXJDbGFzc2VzIiwicm93RXZlbnRzIiwiY2VsbEVkaXQiLCJmaWx0ZXJQb3NpdGlvbiIsInRhYmxlV3JhcHBlckNsYXNzIiwidGFibGVDbGFzcyIsImhhc0ZpbHRlcnMiLCJzb21lIiwiY29sIiwiZmlsdGVyUmVuZGVyZXIiLCJoYXNGb290ZXIiLCJoYXMiLCJ0YWJsZUNhcHRpb24iLCJoZWFkZXJDbGFzc2VzIiwiaGVhZGVyV3JhcHBlckNsYXNzZXMiLCJzb3J0RmllbGQiLCJzb3J0T3JkZXIiLCJvblNvcnQiLCJzb3J0Q2FyZXQiLCJvbkZpbHRlciIsImN1cnJGaWx0ZXJzIiwib25FeHRlcm5hbEZpbHRlciIsImZpbHRlcnNDbGFzc2VzIiwiYm9keUNsYXNzZXMiLCJpc0VtcHR5IiwidmlzaWJsZUNvbHVtblNpemUiLCJmb290ZXJDbGFzc2VzIiwiYm9vbCIsInJlbW90ZSIsIm9uZU9mVHlwZSIsInNoYXBlIiwib25lT2YiLCJoaWRlU2VsZWN0QWxsIiwibm9uU2VsZWN0YWJsZVN0eWxlIiwibm9uU2VsZWN0YWJsZUNsYXNzZXMiLCJiZ0NvbG9yIiwic2VsZWN0aW9uUmVuZGVyZXIiLCJzZWxlY3Rpb25IZWFkZXJSZW5kZXJlciIsImhlYWRlckNvbHVtblN0eWxlIiwic2VsZWN0Q29sdW1uU3R5bGUiLCJyZW5kZXJlciIsImV4cGFuZENvbHVtblJlbmRlcmVyIiwiZXhwYW5kSGVhZGVyQ29sdW1uUmVuZGVyZXIiLCJwYXJlbnRDbGFzc05hbWUiLCJkZWZhdWx0U29ydGVkIiwiYXJyYXlPZiIsIm9yZGVyIiwic29ydEZ1bmMiLCJkZWZhdWx0U29ydERpcmVjdGlvbiIsIm9uVGFibGVDaGFuZ2UiLCJzZWFyY2giLCJzZWFyY2hUZXh0Iiwic2VhcmNoQ29udGV4dCIsInNldERlcGVuZGVuY3lNb2R1bGVzIiwiZGVmYXVsdFByb3BzIiwibm9uRWRpdGFibGVSb3dzIiwiSGVhZGVyIiwiZ2xvYmFsU29ydENhcmV0IiwiU2VsZWN0aW9uSGVhZGVyQ2VsbENvbXAiLCJFeHBhbnNpb25IZWFkZXJDZWxsQ29tcCIsImN1cnJTb3J0IiwiaXNMYXN0U29ydGluZyIsIkhlYWRlckNlbGwiLCJzb3J0aW5nIiwidGV4dCIsImhlYWRlclRpdGxlIiwiaGVhZGVyQWxpZ24iLCJoZWFkZXJGb3JtYXR0ZXIiLCJoZWFkZXJFdmVudHMiLCJoZWFkZXJTdHlsZSIsImhlYWRlckF0dHJzIiwiaGVhZGVyU29ydGluZ0NsYXNzZXMiLCJoZWFkZXJTb3J0aW5nU3R5bGUiLCJzb3J0Q2FyZXRmdW5jIiwiZGVsZWdhdGVFdmVudHMiLCJkZWxlZ2F0ZSIsImN1c3RvbUF0dHJzIiwic29ydFN5bWJvbCIsImZpbHRlckVsbSIsImN1c3RvbUNsaWNrIiwib25DbGljayIsIm9uS2V5VXAiLCJvbkN1c3RvbUZpbHRlciIsInNvcnRFbGVtZW50IiwiZmlsdGVyRWxlbWVudCIsImlzRHVtbXlGaWVsZCIsImhpZGRlbiIsImZvcm1hdHRlciIsImZvcm1hdEV4dHJhRGF0YSIsImFueSIsImVkaXRvciIsImVkaXRDZWxsU3R5bGUiLCJlZGl0Q2VsbENsYXNzZXMiLCJlZGl0b3JTdHlsZSIsImVkaXRvckNsYXNzZXMiLCJlZGl0b3JSZW5kZXJlciIsInZhbGlkYXRvciIsImZpbHRlclZhbHVlIiwic2VhcmNoYWJsZSIsIm51bWJlciIsIlNvcnRTeW1ib2wiLCJTb3J0Q2FyZXQiLCJvcmRlckNsYXNzIiwiZHJvcHVwIiwiQ2hlY2tCb3giLCJpbmRldGVybWluYXRlIiwiaW5wdXQiLCJTZWxlY3Rpb25IZWFkZXJDZWxsIiwiaGFuZGxlQ2hlY2tCb3hDbGljayIsIkV4cGFuc2lvbkhlYWRlckNlbGwiLCJlZGl0Q2VsbCIsIm5ld1ZhbHVlIiwiY29tcGFyYXRvciIsImxvY2FsZUNvbXBhcmUiLCJzb3J0VmFsdWUiLCJfZGF0YSIsInZhbHVlQSIsInZhbHVlQiIsIm5leHRPcmRlciIsImN1cnJlbnRTb3J0Q29sdW1uIiwic29ydENvbHVtbiIsImRlZmF1bHRPcmRlciIsInR5cGVDb252ZXJ0IiwiU3RyaW5nIiwiTnVtYmVyIiwiRGF0ZSIsIkZpbHRlcnMiLCJmaWx0ZXJDb2x1bW5zIiwic2hvd0ZpbHRlcnNSb3ciLCJkaXNwbGF5IiwiRmlsdGVyc0NlbGwiLCJDYXB0aW9uIiwiY2FwdGlvblNpZGUiLCJCb2R5IiwiRWRpdGluZ0NlbGwiLCJjcmVhdGVFZGl0aW5nQ2VsbCIsIm9wdGlvbnMiLCJvblN0YXJ0RWRpdCIsIlJvd0NvbXBvbmVudCIsInNlbGVjdFJvd0VuYWJsZWQiLCJleHBhbmRSb3dFbmFibGVkIiwid2l0aFJvd0xldmVsQ2VsbEVkaXQiLCJpbmRpY2F0aW9uIiwiYWRkaXRpb25hbFJvd1Byb3BzIiwiYmFzZVJvd1Byb3BzIiwiU2ltcGxlUm93Iiwic2hvdWxkVXBkYXRlUm93Q29udGVudCIsInNob3VsZFJvd0NvbnRlbnRVcGRhdGUiLCJzaG91bGRVcGRhdGVkQnlTZWxmUHJvcHMiLCJ0ckF0dHJzIiwiQ2VsbCIsImNyZWF0ZUhhbmRsZUVkaXRpbmdDZWxsIiwib3JpZ2luRnVuYyIsIm9uRG91YmxlQ2xpY2siLCJSb3dBZ2dyZWdhdG9yIiwic2VsZWN0Q2VsbCIsImV4cGFuZENlbGwiLCJFeHBhbmRDZWxsIiwiaGFuZGxlQ2xpY2siLCJzdG9wUHJvcGFnYXRpb24iLCJTZWxlY3Rpb25DZWxsIiwiZGlzYWJsZWQiLCJpbnB1dFR5cGUiLCJSb3dTZWN0aW9uIiwiY29sU3BhbiIsInJlbmRlcldpdGhTZWxlY3Rpb24iLCJub3RTZWxlY3RhYmxlIiwic2VsZWN0ZWRTdHlsZSIsInNlbGVjdGVkQ2xhc3NlcyIsImJhY2tncm91bmRDb2xvciIsIm5vdFNlbGVjdGFibGVTdHlsZSIsIm5vdFNlbGVjdGFibGVDbGFzc2VzIiwid2l0aENvbnN1bWVyIiwiZGlzcGxheU5hbWUiLCJyZW5kZXJXaXRoRXhwYW5zaW9uIiwiRXhwYW5kUm93IiwiRm9vdGVyIiwiZm9vdGVyIiwiY29sdW1uRGF0YSIsInBsdWNrIiwiRm9vdGVyQ2VsbCIsImZvb3RlclRpdGxlIiwiZm9vdGVyQWxpZ24iLCJmb290ZXJGb3JtYXR0ZXIiLCJmb290ZXJFdmVudHMiLCJmb290ZXJTdHlsZSIsImZvb3RlckF0dHJzIiwiaXNTdHJpbmciLCJoaWRkZW5Sb3dzIiwiaW5jbHVkZVNlbGVjdENvbHVtbiIsImNvbHVtbkxlbiIsImNvbHVtblRvZ2dsZSIsInRvZ2dsZXMiLCJuYW1lIiwiYyIsIndpdGhDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJyZWdpc3RlckV4cG9zZWRBUEkiLCJleHBvc2VkQVBJRW1pdHRlciIsIm9uIiwicGF5bG9hZCIsInRhYmxlIiwic2VsZWN0aW9uQ29udGV4dCIsImdldFNlbGVjdGVkIiwiZ2V0U2VhcmNoZWQiLCJmaWx0ZXJDb250ZXh0IiwiZ2V0RmlsdGVyZWQiLCJTb3J0Q29udGV4dCIsImlzUmVtb3RlU29ydCIsImhhbmRsZVJlbW90ZVNvcnRDaGFuZ2UiLCJDb2x1bW5NYW5hZ2VtZW50Q29udGV4dCIsIkNlbGxFZGl0Q29udGV4dCIsImlzUmVtb3RlQ2VsbEVkaXQiLCJoYW5kbGVSZW1vdGVDZWxsQ2hhbmdlIiwiRmlsdGVyQ29udGV4dCIsImlzUmVtb3RlRmlsdGVyaW5nIiwiaGFuZGxlUmVtb3RlRmlsdGVyQ2hhbmdlIiwiUGFnaW5hdGlvbkNvbnRleHQiLCJTZWFyY2hDb250ZXh0IiwiaXNSZW1vdGVTZWFyY2giLCJoYW5kbGVSZW1vdGVTZWFyY2hDaGFuZ2UiLCJzZXRQYWdpbmF0aW9uUmVtb3RlRW1pdHRlciIsInJlbW90ZUVtaXR0ZXIiLCJpc1JlbW90ZVBhZ2luYXRpb24iLCJoYW5kbGVSZW1vdGVQYWdlQ2hhbmdlIiwicm9vdFByb3BzIiwiZmlsdGVyUHJvcHMiLCJzZWFyY2hQcm9wcyIsInNvcnRQcm9wcyIsInBhZ2luYXRpb25Qcm9wcyIsImNvbHVtblRvZ2dsZVByb3BzIiwibiIsImJhc2UiLCJiYXNlUHJvcHMiLCJyb3dFeHBhbmRDb250ZXh0IiwicGFnaW5hdGlvbkNvbnRleHQiLCJzb3J0Q29udGV4dCIsImRhdGFDaGFuZ2VMaXN0ZW5lciIsImNlbGxFZGl0Q29udGV4dCIsInJlbmRlckJhc2UiLCJyZW5kZXJXaXRoQ29sdW1uTWFuYWdlbWVudEN0eCIsInJlbmRlcldpdGhTZWxlY3Rpb25DdHgiLCJyZW5kZXJXaXRoUm93RXhwYW5kQ3R4IiwicmVuZGVyV2l0aFBhZ2luYXRpb25DdHgiLCJyZW5kZXJXaXRoU29ydEN0eCIsInJlbmRlcldpdGhTZWFyY2hDdHgiLCJyZW5kZXJXaXRoRmlsdGVyQ3R4IiwicmVuZGVyV2l0aENlbGxFZGl0Q3R4IiwiRGF0YVByb3ZpZGVyIiwiQ29sdW1uTWFuYWdlbWVudFByb3ZpZGVyIiwidG9nZ2xlQ29sdW1uIiwiZGF0YU9wZXJhdG9yIiwiaGFuZGxlU29ydENoYW5nZSIsIlNvcnRQcm92aWRlciIsImluaXRTb3J0Iiwic29ydENvbHVtbnMiLCJoYW5kbGVTb3J0IiwiZ2V0TmV3ZXN0U3RhdGUiLCJwYWdlIiwic2l6ZVBlclBhZ2UiLCJmaWx0ZXJzIiwiY3VyclBhZ2UiLCJjdXJyU2l6ZVBlclBhZ2UiLCJuZXdTdGF0ZSIsInBhZ2VTdGFydEluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpS0FBOEU7OztBQUc5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLEtBQUs7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBFOzs7Ozs7QUM5TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0gsb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN1NBOzs7O0FBQ0E7Ozs7OztrQkFFZSxpRDs7Ozs7Ozs7Ozs7Ozs7O0FDQWY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOEJBQThCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsMEJBQTBCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsY0FBYztBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFlBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGVBQWU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsWUFBWTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxZQUFZO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsWUFBWTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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SzJLLGFBQUwsR0FBcUIsc0JBQXJCO0FBQ0EsWUFBS0EsYUFBTCxDQUFtQnZCLEVBQW5CLENBQXNCLGtCQUF0QixFQUEwQyxNQUFLeUIsc0JBQS9DO0FBQ0EsWUFBS0YsYUFBTCxDQUFtQnZCLEVBQW5CLENBQXNCLG9CQUF0QixFQUE0QyxNQUFLd0Isa0JBQWpEO0FBSmlCO0FBS2xCOztBQVBVO0FBQUEsSUFDZ0IzWCxVQURoQjtBQUFBLEMiLCJmaWxlIjoicmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9kaXN0L3JlYWN0LWJvb3RzdHJhcC10YWJsZS1uZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3RCb290c3RyYXBUYWJsZTJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RCb290c3RyYXBUYWJsZTJcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIlJlYWN0RE9NXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIwX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGIyZDUxMTk0ZjliMDQ5NmJiNDg2IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyogZXNsaW50IG5vLWVtcHR5OiAwICovXG4vKiBlc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246IDAgKi9cbi8qIGVzbGludCBwcmVmZXItcmVzdC1wYXJhbXM6IDAgKi9cbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5mdW5jdGlvbiBzcGxpdE5lc3RlZChzdHIpIHtcbiAgcmV0dXJuIFtzdHJdXG4gICAgLmpvaW4oJy4nKVxuICAgIC5yZXBsYWNlKC9cXFsvZywgJy4nKVxuICAgIC5yZXBsYWNlKC9cXF0vZywgJycpXG4gICAgLnNwbGl0KCcuJyk7XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zKGxpc3QsIHZhbHVlKSB7XG4gIGlmIChfLmluY2x1ZGVzKSB7XG4gICAgcmV0dXJuIF8uaW5jbHVkZXMobGlzdCwgdmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIGxpc3QuaW5kZXhPZih2YWx1ZSkgPiAtMTtcbn1cblxuZnVuY3Rpb24gZ2V0KHRhcmdldCwgZmllbGQpIHtcbiAgY29uc3QgZGlyZWN0R2V0ID0gdGFyZ2V0W2ZpZWxkXTtcbiAgaWYgKGRpcmVjdEdldCAhPT0gdW5kZWZpbmVkICYmIGRpcmVjdEdldCAhPT0gbnVsbCkge1xuICAgIHJldHVybiBkaXJlY3RHZXQ7XG4gIH1cblxuICBjb25zdCBwYXRoQXJyYXkgPSBzcGxpdE5lc3RlZChmaWVsZCk7XG4gIGxldCByZXN1bHQ7XG4gIHRyeSB7XG4gICAgcmVzdWx0ID0gcGF0aEFycmF5LnJlZHVjZSgoY3VyciwgcGF0aCkgPT4gY3VycltwYXRoXSwgdGFyZ2V0KTtcbiAgfSBjYXRjaCAoZSkge31cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc2V0KHRhcmdldCwgZmllbGQsIHZhbHVlLCBzYWZlID0gZmFsc2UpIHtcbiAgY29uc3QgcGF0aEFycmF5ID0gc3BsaXROZXN0ZWQoZmllbGQpO1xuICBsZXQgbGV2ZWwgPSAwO1xuICBwYXRoQXJyYXkucmVkdWNlKChhLCBiKSA9PiB7XG4gICAgbGV2ZWwgKz0gMTtcbiAgICBpZiAodHlwZW9mIGFbYl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoIXNhZmUpIHRocm93IG5ldyBFcnJvcihgJHthfS4ke2J9IGlzIHVuZGVmaW5lZGApO1xuICAgICAgYVtiXSA9IHt9O1xuICAgICAgcmV0dXJuIGFbYl07XG4gICAgfVxuXG4gICAgaWYgKGxldmVsID09PSBwYXRoQXJyYXkubGVuZ3RoKSB7XG4gICAgICBhW2JdID0gdmFsdWU7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBhW2JdO1xuICB9LCB0YXJnZXQpO1xufVxuXG5mdW5jdGlvbiBpc0VtcHR5T2JqZWN0KG9iaikge1xuICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIGZhbHNlO1xuXG4gIGNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXlzW2ldKSkgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gc2xlZXAoZm4sIG1zKSB7XG4gIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGZuKCksIG1zKTtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0O1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcblxuICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IHx8IDApO1xuXG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdC5hc3NpZ24oXywge1xuICBnZXQsXG4gIHNldCxcbiAgaXNEZWZpbmVkLFxuICBpc0VtcHR5T2JqZWN0LFxuICBzbGVlcCxcbiAgZGVib3VuY2UsXG4gIGNvbnRhaW5zXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3V0aWxzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBTT1JUX0FTQzogJ2FzYycsXG4gIFNPUlRfREVTQzogJ2Rlc2MnLFxuICBST1dfU0VMRUNUX1NJTkdMRTogJ3JhZGlvJyxcbiAgUk9XX1NFTEVDVF9NVUxUSVBMRTogJ2NoZWNrYm94JyxcbiAgUk9XX1NFTEVDVF9ESVNBQkxFRDogJ1JPV19TRUxFQ1RfRElTQUJMRUQnLFxuICBDSEVDS0JPWF9TVEFUVVNfQ0hFQ0tFRDogJ2NoZWNrZWQnLFxuICBDSEVDS0JPWF9TVEFUVVNfSU5ERVRFUk1JTkFURTogJ2luZGV0ZXJtaW5hdGUnLFxuICBDSEVDS0JPWF9TVEFUVVNfVU5DSEVDS0VEOiAndW5jaGVja2VkJyxcbiAgSU5ESUNBVE9SX1BPU0lUSU9OX0xFRlQ6ICdsZWZ0JyxcbiAgSU5ESUNBVE9SX1BPU0lUSU9OX1JJR0hUOiAncmlnaHQnLFxuICBUWVBFX1NUUklORzogJ3N0cmluZycsXG4gIFRZUEVfTlVNQkVSOiAnbnVtYmVyJyxcbiAgVFlQRV9CT09MRUFOOiAnYm9vbCcsXG4gIFRZUEVfREFURTogJ2RhdGUnLFxuICBGSUxURVJTX1BPU0lUSU9OX0lOTElORTogJ2lubGluZScsXG4gIEZJTFRFUlNfUE9TSVRJT05fVE9QOiAndG9wJyxcbiAgRklMVEVSU19QT1NJVElPTl9CT1RUT006ICdib3R0b20nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29uc3QuanMiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBCb290c3RyYXBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIGJvb3RzdHJhcDQ6IGZhbHNlXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL2Jvb3RzdHJhcC5qcyIsImltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IG1hdGNoUm93ID0gKGtleUZpZWxkLCBpZCkgPT4gcm93ID0+IF8uZ2V0KHJvdywga2V5RmllbGQpID09PSBpZDtcblxuZXhwb3J0IGNvbnN0IGdldFJvd0J5Um93SWQgPSAoZGF0YSwga2V5RmllbGQsIGlkKSA9PiBkYXRhLmZpbmQobWF0Y2hSb3coa2V5RmllbGQsIGlkKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9yb3dzLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBfIGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBldmVudHMgPSBbXG4gICdvbkNsaWNrJyxcbiAgJ29uRG91YmxlQ2xpY2snLFxuICAnb25Nb3VzZUVudGVyJyxcbiAgJ29uTW91c2VMZWF2ZScsXG4gICdvbkNvbnRleHRNZW51JyxcbiAgJ29uQXV4Q2xpY2snXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBFeHRlbmRCYXNlID0+XG4gIGNsYXNzIENlbGxFdmVudERlbGVnYXRlciBleHRlbmRzIEV4dGVuZEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLmNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIgPSB0aGlzLmNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyKGNiKSB7XG4gICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBjb2x1bW4sIGNvbHVtbkluZGV4LCBpbmRleCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY2IoZSwgY29sdW1uLCB0eXBlb2YgY29sdW1uSW5kZXggIT09ICd1bmRlZmluZWQnID8gY29sdW1uSW5kZXggOiBpbmRleCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlbGVnYXRlKGF0dHJzID0ge30pIHtcbiAgICAgIGNvbnN0IG5ld0F0dHJzID0geyAuLi5hdHRycyB9O1xuICAgICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgaWYgKF8uY29udGFpbnMoZXZlbnRzLCBhdHRyKSkge1xuICAgICAgICAgIG5ld0F0dHJzW2F0dHJdID0gdGhpcy5jcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyKGF0dHJzW2F0dHJdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3QXR0cnM7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY2VsbC1ldmVudC1kZWxlZ2F0ZXIuanMiLCIvKiBlc2xpbnQgY2FtZWxjYXNlOiAwICovXG4vKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vY29uc3QnO1xuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuXG5pbXBvcnQgZGF0YU9wZXJhdG9yIGZyb20gJy4uL3N0b3JlL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBnZXRTZWxlY3Rpb25TdW1tYXJ5IH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0aW9uJztcblxuY29uc3QgU2VsZWN0aW9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcbmNsYXNzIFNlbGVjdGlvblByb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBrZXlGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNlbGVjdGVkID0gcHJvcHMuc2VsZWN0Um93LnNlbGVjdGVkIHx8IFtdO1xuICB9XG5cbiAgLy8gZXhwb3NlZCBBUElcbiAgZ2V0U2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQ7XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLnNlbGVjdFJvdykge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IG5leHRQcm9wcy5zZWxlY3RSb3cuc2VsZWN0ZWQgfHwgdGhpcy5zZWxlY3RlZDtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSb3dTZWxlY3QgPSAocm93S2V5LCBjaGVja2VkLCByb3dJbmRleCwgZSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwga2V5RmllbGQsIHNlbGVjdFJvdzogeyBtb2RlLCBvblNlbGVjdCB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgUk9XX1NFTEVDVF9TSU5HTEUgfSA9IENvbnN0O1xuXG4gICAgbGV0IGN1cnJTZWxlY3RlZCA9IFsuLi50aGlzLnNlbGVjdGVkXTtcblxuICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgIGlmIChvblNlbGVjdCkge1xuICAgICAgY29uc3Qgcm93ID0gZGF0YU9wZXJhdG9yLmdldFJvd0J5Um93SWQoZGF0YSwga2V5RmllbGQsIHJvd0tleSk7XG4gICAgICByZXN1bHQgPSBvblNlbGVjdChyb3csIGNoZWNrZWQsIHJvd0luZGV4LCBlKTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ID09PSB0cnVlIHx8IHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAobW9kZSA9PT0gUk9XX1NFTEVDVF9TSU5HTEUpIHsgLy8gd2hlbiBzZWxlY3QgbW9kZSBpcyByYWRpb1xuICAgICAgICBjdXJyU2VsZWN0ZWQgPSBbcm93S2V5XTtcbiAgICAgIH0gZWxzZSBpZiAoY2hlY2tlZCkgeyAvLyB3aGVuIHNlbGVjdCBtb2RlIGlzIGNoZWNrYm94XG4gICAgICAgIGN1cnJTZWxlY3RlZC5wdXNoKHJvd0tleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyU2VsZWN0ZWQgPSBjdXJyU2VsZWN0ZWQuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSByb3dLZXkpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkID0gY3VyclNlbGVjdGVkO1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGhhbmRsZUFsbFJvd3NTZWxlY3QgPSAoZSwgaXNVblNlbGVjdCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGEsXG4gICAgICBrZXlGaWVsZCxcbiAgICAgIHNlbGVjdFJvdzoge1xuICAgICAgICBvblNlbGVjdEFsbCxcbiAgICAgICAgbm9uU2VsZWN0YWJsZVxuICAgICAgfVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXM7XG5cbiAgICBsZXQgY3VyclNlbGVjdGVkO1xuXG4gICAgaWYgKCFpc1VuU2VsZWN0KSB7XG4gICAgICBjdXJyU2VsZWN0ZWQgPSBzZWxlY3RlZC5jb25jYXQoZGF0YU9wZXJhdG9yLnNlbGVjdGFibGVLZXlzKGRhdGEsIGtleUZpZWxkLCBub25TZWxlY3RhYmxlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJTZWxlY3RlZCA9IHNlbGVjdGVkLmZpbHRlcihzID0+IHR5cGVvZiBkYXRhLmZpbmQoZCA9PiBfLmdldChkLCBrZXlGaWVsZCkgPT09IHMpID09PSAndW5kZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAob25TZWxlY3RBbGwpIHtcbiAgICAgIHJlc3VsdCA9IG9uU2VsZWN0QWxsKFxuICAgICAgICAhaXNVblNlbGVjdCxcbiAgICAgICAgZGF0YU9wZXJhdG9yLmdldFNlbGVjdGVkUm93cyhcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGtleUZpZWxkLFxuICAgICAgICAgIGlzVW5TZWxlY3QgPyBzZWxlY3RlZCA6IGN1cnJTZWxlY3RlZFxuICAgICAgICApLFxuICAgICAgICBlXG4gICAgICApO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICBjdXJyU2VsZWN0ZWQgPSByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWQgPSBjdXJyU2VsZWN0ZWQ7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFsbFJvd3NTZWxlY3RlZCxcbiAgICAgIGFsbFJvd3NOb3RTZWxlY3RlZFxuICAgIH0gPSBnZXRTZWxlY3Rpb25TdW1tYXJ5KFxuICAgICAgdGhpcy5wcm9wcy5kYXRhLFxuICAgICAgdGhpcy5wcm9wcy5rZXlGaWVsZCxcbiAgICAgIHRoaXMuc2VsZWN0ZWRcbiAgICApO1xuXG4gICAgbGV0IGNoZWNrZWRTdGF0dXM7XG5cbiAgICAvLyBjaGVja2JveCBzdGF0dXMgZGVwZW5kaW5nIG9uIHNlbGVjdGVkIHJvd3MgY291bnRzXG4gICAgaWYgKGFsbFJvd3NTZWxlY3RlZCkgY2hlY2tlZFN0YXR1cyA9IENvbnN0LkNIRUNLQk9YX1NUQVRVU19DSEVDS0VEO1xuICAgIGVsc2UgaWYgKGFsbFJvd3NOb3RTZWxlY3RlZCkgY2hlY2tlZFN0YXR1cyA9IENvbnN0LkNIRUNLQk9YX1NUQVRVU19VTkNIRUNLRUQ7XG4gICAgZWxzZSBjaGVja2VkU3RhdHVzID0gQ29uc3QuQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdGlvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgdmFsdWU9eyB7XG4gICAgICAgICAgLi4udGhpcy5wcm9wcy5zZWxlY3RSb3csXG4gICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICAgICAgb25Sb3dTZWxlY3Q6IHRoaXMuaGFuZGxlUm93U2VsZWN0LFxuICAgICAgICAgIG9uQWxsUm93c1NlbGVjdDogdGhpcy5oYW5kbGVBbGxSb3dzU2VsZWN0LFxuICAgICAgICAgIGFsbFJvd3NTZWxlY3RlZCxcbiAgICAgICAgICBhbGxSb3dzTm90U2VsZWN0ZWQsXG4gICAgICAgICAgY2hlY2tlZFN0YXR1c1xuICAgICAgICB9IH1cbiAgICAgID5cbiAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvU2VsZWN0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUHJvdmlkZXI6IFNlbGVjdGlvblByb3ZpZGVyLFxuICBDb25zdW1lcjogU2VsZWN0aW9uQ29udGV4dC5Db25zdW1lclxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL3NlbGVjdGlvbi1jb250ZXh0LmpzIiwiaW1wb3J0ICogYXMgcm93cyBmcm9tICcuL3Jvd3MnO1xuaW1wb3J0ICogYXMgc2VsZWN0aW9uIGZyb20gJy4vc2VsZWN0aW9uJztcbmltcG9ydCAqIGFzIGV4cGFuZCBmcm9tICcuL2V4cGFuZCc7XG5pbXBvcnQgKiBhcyBtdXRhdGUgZnJvbSAnLi9tdXRhdGUnO1xuaW1wb3J0ICogYXMgc29ydCBmcm9tICcuL3NvcnQnO1xuaW1wb3J0ICogYXMgdHlwZSBmcm9tICcuL3R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC4uLnJvd3MsXG4gIC4uLnNlbGVjdGlvbixcbiAgLi4uZXhwYW5kLFxuICAuLi5tdXRhdGUsXG4gIC4uLnNvcnQsXG4gIC4uLnR5cGVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9vcGVyYXRvcnMuanMiLCIvKiBlc2xpbnQgY2FtZWxjYXNlOiAwICovXG4vKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZGF0YU9wZXJhdG9yIGZyb20gJy4uL3N0b3JlL29wZXJhdG9ycyc7XG5pbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5cbmNvbnN0IFJvd0V4cGFuZENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmNsYXNzIFJvd0V4cGFuZFByb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBrZXlGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgc3RhdGUgPSB7IGV4cGFuZGVkOiB0aGlzLnByb3BzLmV4cGFuZFJvdy5leHBhbmRlZCB8fCBbXSxcbiAgICBpc0Nsb3Npbmc6IHRoaXMucHJvcHMuZXhwYW5kUm93LmlzQ2xvc2luZyB8fCBbXSB9O1xuXG4gIG9uQ2xvc2VkID0gKGNsb3NlZFJvdykgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0Nsb3Npbmc6IHRoaXMuc3RhdGUuaXNDbG9zaW5nLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gY2xvc2VkUm93KSB9KTtcbiAgfTtcblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmV4cGFuZFJvdykge1xuICAgICAgbGV0IG5leHRFeHBhbmRlZCA9IFsuLi4obmV4dFByb3BzLmV4cGFuZFJvdy5leHBhbmRlZCB8fCB0aGlzLnN0YXRlLmV4cGFuZGVkKV07XG4gICAgICBjb25zdCB7IG5vbkV4cGFuZGFibGUgPSBbXSB9ID0gbmV4dFByb3BzLmV4cGFuZFJvdztcbiAgICAgIG5leHRFeHBhbmRlZCA9IG5leHRFeHBhbmRlZC5maWx0ZXIocm93SWQgPT4gIV8uY29udGFpbnMobm9uRXhwYW5kYWJsZSwgcm93SWQpKTtcbiAgICAgIGNvbnN0IGlzQ2xvc2luZyA9IHRoaXMuc3RhdGUuZXhwYW5kZWQucmVkdWNlKChhY2MsIGN1cikgPT4ge1xuICAgICAgICBpZiAoIV8uY29udGFpbnMobmV4dEV4cGFuZGVkLCBjdXIpKSB7XG4gICAgICAgICAgYWNjLnB1c2goY3VyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwgW10pO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgIGV4cGFuZGVkOiBuZXh0RXhwYW5kZWQsXG4gICAgICAgIGlzQ2xvc2luZ1xuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgIGV4cGFuZGVkOiB0aGlzLnN0YXRlLmV4cGFuZGVkXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUm93RXhwYW5kID0gKHJvd0tleSwgZXhwYW5kZWQsIHJvd0luZGV4LCBlKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBrZXlGaWVsZCwgZXhwYW5kUm93OiB7IG9uRXhwYW5kLCBvbmx5T25lRXhwYW5kaW5nLCBub25FeHBhbmRhYmxlIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG5vbkV4cGFuZGFibGUgJiYgXy5jb250YWlucyhub25FeHBhbmRhYmxlLCByb3dLZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGN1cnJFeHBhbmRlZCA9IFsuLi50aGlzLnN0YXRlLmV4cGFuZGVkXTtcbiAgICBsZXQgaXNDbG9zaW5nID0gWy4uLnRoaXMuc3RhdGUuaXNDbG9zaW5nXTtcblxuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgaWYgKG9ubHlPbmVFeHBhbmRpbmcpIHtcbiAgICAgICAgaXNDbG9zaW5nID0gaXNDbG9zaW5nLmNvbmNhdChjdXJyRXhwYW5kZWQpO1xuICAgICAgICBjdXJyRXhwYW5kZWQgPSBbcm93S2V5XTtcbiAgICAgIH0gZWxzZSBjdXJyRXhwYW5kZWQucHVzaChyb3dLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc0Nsb3NpbmcucHVzaChyb3dLZXkpO1xuICAgICAgY3VyckV4cGFuZGVkID0gY3VyckV4cGFuZGVkLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gcm93S2V5KTtcbiAgICB9XG5cbiAgICBpZiAob25FeHBhbmQpIHtcbiAgICAgIGNvbnN0IHJvdyA9IGRhdGFPcGVyYXRvci5nZXRSb3dCeVJvd0lkKGRhdGEsIGtleUZpZWxkLCByb3dLZXkpO1xuICAgICAgb25FeHBhbmQocm93LCBleHBhbmRlZCwgcm93SW5kZXgsIGUpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGV4cGFuZGVkOiBjdXJyRXhwYW5kZWQsIGlzQ2xvc2luZyB9KSk7XG4gIH07XG5cbiAgaGFuZGxlQWxsUm93RXhwYW5kID0gKGUsIGV4cGFuZEFsbCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGEsXG4gICAgICBrZXlGaWVsZCxcbiAgICAgIGV4cGFuZFJvdzoge1xuICAgICAgICBvbkV4cGFuZEFsbCxcbiAgICAgICAgbm9uRXhwYW5kYWJsZVxuICAgICAgfVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZXhwYW5kZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBsZXQgY3VyckV4cGFuZGVkO1xuXG4gICAgaWYgKGV4cGFuZEFsbCkge1xuICAgICAgY3VyckV4cGFuZGVkID0gZXhwYW5kZWQuY29uY2F0KGRhdGFPcGVyYXRvci5leHBhbmRhYmxlS2V5cyhkYXRhLCBrZXlGaWVsZCwgbm9uRXhwYW5kYWJsZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyRXhwYW5kZWQgPSBleHBhbmRlZC5maWx0ZXIocyA9PiB0eXBlb2YgZGF0YS5maW5kKGQgPT4gXy5nZXQoZCwga2V5RmllbGQpID09PSBzKSA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIGlmIChvbkV4cGFuZEFsbCkge1xuICAgICAgb25FeHBhbmRBbGwoZXhwYW5kQWxsLCBkYXRhT3BlcmF0b3IuZ2V0RXhwYW5kZWRSb3dzKGRhdGEsIGtleUZpZWxkLCBjdXJyRXhwYW5kZWQpLCBlKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGV4cGFuZGVkOiBjdXJyRXhwYW5kZWQgfSkpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEsIGtleUZpZWxkIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Um93RXhwYW5kQ29udGV4dC5Qcm92aWRlclxuICAgICAgICB2YWx1ZT17IHtcbiAgICAgICAgICAuLi50aGlzLnByb3BzLmV4cGFuZFJvdyxcbiAgICAgICAgICBub25FeHBhbmRhYmxlOiB0aGlzLnByb3BzLmV4cGFuZFJvdy5ub25FeHBhbmRhYmxlLFxuICAgICAgICAgIGV4cGFuZGVkOiB0aGlzLnN0YXRlLmV4cGFuZGVkLFxuICAgICAgICAgIGlzQ2xvc2luZzogdGhpcy5zdGF0ZS5pc0Nsb3NpbmcsXG4gICAgICAgICAgb25DbG9zZWQ6IHRoaXMub25DbG9zZWQsXG4gICAgICAgICAgaXNBbnlFeHBhbmRzOiBkYXRhT3BlcmF0b3IuaXNBbnlFeHBhbmRzKGRhdGEsIGtleUZpZWxkLCB0aGlzLnN0YXRlLmV4cGFuZGVkKSxcbiAgICAgICAgICBvblJvd0V4cGFuZDogdGhpcy5oYW5kbGVSb3dFeHBhbmQsXG4gICAgICAgICAgb25BbGxSb3dFeHBhbmQ6IHRoaXMuaGFuZGxlQWxsUm93RXhwYW5kXG4gICAgICAgIH0gfVxuICAgICAgPlxuICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgPC9Sb3dFeHBhbmRDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBQcm92aWRlcjogUm93RXhwYW5kUHJvdmlkZXIsXG4gIENvbnN1bWVyOiBSb3dFeHBhbmRDb250ZXh0LkNvbnN1bWVyXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvcm93LWV4cGFuZC1jb250ZXh0LmpzIiwiaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgZ2V0Um93QnlSb3dJZCB9IGZyb20gJy4vcm93cyc7XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3Rpb25TdW1tYXJ5ID0gKFxuICBkYXRhID0gW10sXG4gIGtleUZpZWxkLFxuICBzZWxlY3RlZCA9IFtdXG4pID0+IHtcbiAgbGV0IGFsbFJvd3NTZWxlY3RlZCA9IGRhdGEubGVuZ3RoID4gMDtcbiAgbGV0IGFsbFJvd3NOb3RTZWxlY3RlZCA9IHRydWU7XG5cbiAgY29uc3Qgcm93S2V5cyA9IGRhdGEubWFwKGQgPT4gXy5nZXQoZCwga2V5RmllbGQpKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dLZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgY3VyciA9IHJvd0tleXNbaV07XG4gICAgaWYgKHR5cGVvZiBzZWxlY3RlZC5maW5kKHggPT4geCA9PT0gY3VycikgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhbGxSb3dzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxsUm93c05vdFNlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgYWxsUm93c1NlbGVjdGVkLFxuICAgIGFsbFJvd3NOb3RTZWxlY3RlZFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGFibGVLZXlzID0gKGRhdGEgPSBbXSwga2V5RmllbGQsIHNraXBzID0gW10pID0+IHtcbiAgaWYgKHNraXBzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBkYXRhLm1hcChyb3cgPT4gXy5nZXQocm93LCBrZXlGaWVsZCkpO1xuICB9XG4gIHJldHVybiBkYXRhXG4gICAgLmZpbHRlcihyb3cgPT4gIV8uY29udGFpbnMoc2tpcHMsIF8uZ2V0KHJvdywga2V5RmllbGQpKSlcbiAgICAubWFwKHJvdyA9PiBfLmdldChyb3csIGtleUZpZWxkKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdW5TZWxlY3RhYmxlS2V5cyA9IChzZWxlY3RlZCwgc2tpcHMgPSBbXSkgPT4ge1xuICBpZiAoc2tpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBzZWxlY3RlZC5maWx0ZXIoeCA9PiBfLmNvbnRhaW5zKHNraXBzLCB4KSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRSb3dzID0gKGRhdGEgPSBbXSwga2V5RmllbGQsIHNlbGVjdGVkKSA9PlxuICBzZWxlY3RlZC5tYXAoayA9PiBnZXRSb3dCeVJvd0lkKGRhdGEsIGtleUZpZWxkLCBrKSkuZmlsdGVyKHggPT4gISF4KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvc2VsZWN0aW9uLmpzIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5cbmNvbnN0IFJvd1RlbXBsYXRlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICByZW5kZXJDb250ZW50LFxuICAgIHNlbGVjdFJvdyxcbiAgICBleHBhbmRSb3csXG4gICAgY2VsbEVsLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGlzUmVuZGVyRnVuY3Rpb25Db2x1bW5JbkxlZnQgPSAoXG4gICAgcG9zaXRpb24gPSBDb25zdC5JTkRJQ0FUT1JfUE9TSVRJT05fTEVGVFxuICApID0+IHBvc2l0aW9uID09PSBDb25zdC5JTkRJQ0FUT1JfUE9TSVRJT05fTEVGVDtcblxuICBjb25zdCBjaGlsZHJlbnMgPSByZW5kZXJDb250ZW50KCkgfHwgW107XG5cbiAgaWYgKHNlbGVjdFJvdyAmJiBzZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbiAhPT0gdHJ1ZSkge1xuICAgIGlmIChpc1JlbmRlckZ1bmN0aW9uQ29sdW1uSW5MZWZ0KHNlbGVjdFJvdy5zZWxlY3RDb2x1bW5Qb3NpdGlvbikpIHtcbiAgICAgIGNoaWxkcmVucy51bnNoaWZ0KFJlYWN0LmNyZWF0ZUVsZW1lbnQoY2VsbEVsLCB7IGtleTogJ3NlbGVjdGlvbicgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZHJlbnMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KGNlbGxFbCwgeyBrZXk6ICdzZWxlY3Rpb24nIH0pKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZXhwYW5kUm93LnNob3dFeHBhbmRDb2x1bW4pIHtcbiAgICBpZiAoaXNSZW5kZXJGdW5jdGlvbkNvbHVtbkluTGVmdChleHBhbmRSb3cuZXhwYW5kQ29sdW1uUG9zaXRpb24pKSB7XG4gICAgICBjaGlsZHJlbnMudW5zaGlmdChSZWFjdC5jcmVhdGVFbGVtZW50KGNlbGxFbCwgeyBrZXk6ICdleHBhbnNpb24nIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRyZW5zLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChjZWxsRWwsIHsga2V5OiAnZXhwYW5zaW9uJyB9KSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDx0ciB7IC4uLnJlc3QgfT57IGNoaWxkcmVucyB9PC90cj47XG59O1xuXG5Sb3dUZW1wbGF0ZS5wcm9wVHlwZXMgPSB7XG4gIHJlbmRlckNvbnRlbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNlbGxFbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzZWxlY3RSb3c6IFByb3BUeXBlcy5vYmplY3QsXG4gIGV4cGFuZFJvdzogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm93VGVtcGxhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvcm93LXRlbXBsYXRlLmpzIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbi8qIGVzbGludCByZWFjdC9uby1hcnJheS1pbmRleC1rZXk6IDAgKi9cbi8qIGVzbGludCBuby1wbHVzcGx1czogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IENlbGwgZnJvbSAnLi4vY2VsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvd1B1cmVDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIGlmICh0eXBlb2YgbmV4dFByb3BzLnNob3VsZFVwZGF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBuZXh0UHJvcHMuc2hvdWxkVXBkYXRlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICByb3csXG4gICAgICBrZXlGaWVsZCxcbiAgICAgIGNvbHVtbnMsXG4gICAgICByb3dJbmRleCxcbiAgICAgIGVkaXRhYmxlLFxuICAgICAgZWRpdGluZ1Jvd0lkeCxcbiAgICAgIGVkaXRpbmdDb2xJZHgsXG4gICAgICBvblN0YXJ0LFxuICAgICAgY2xpY2tUb0VkaXQsXG4gICAgICBkYmNsaWNrVG9FZGl0LFxuICAgICAgRWRpdGluZ0NlbGxDb21wb25lbnQsXG4gICAgICB0YWJJbmRleFN0YXJ0XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgdGFiSW5kZXggPSB0YWJJbmRleFN0YXJ0O1xuXG4gICAgcmV0dXJuIGNvbHVtbnMubWFwKChjb2x1bW4sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB7IGRhdGFGaWVsZCB9ID0gY29sdW1uO1xuICAgICAgY29uc3QgY29udGVudCA9IF8uZ2V0KHJvdywgZGF0YUZpZWxkKTtcbiAgICAgIGlmIChyb3dJbmRleCA9PT0gZWRpdGluZ1Jvd0lkeCAmJiBpbmRleCA9PT0gZWRpdGluZ0NvbElkeCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxFZGl0aW5nQ2VsbENvbXBvbmVudFxuICAgICAgICAgICAga2V5PXsgYCR7Y29udGVudH0tJHtpbmRleH0tZWRpdGluZ2AgfVxuICAgICAgICAgICAgcm93PXsgcm93IH1cbiAgICAgICAgICAgIHJvd0luZGV4PXsgcm93SW5kZXggfVxuICAgICAgICAgICAgY29sdW1uPXsgY29sdW1uIH1cbiAgICAgICAgICAgIGNvbHVtbkluZGV4PXsgaW5kZXggfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICAvLyByZW5kZXIgY2VsbFxuICAgICAgbGV0IGNlbGxUaXRsZTtcbiAgICAgIGxldCBjZWxsU3R5bGUgPSB7fTtcbiAgICAgIGxldCBjZWxsQXR0cnMgPSB7XG4gICAgICAgIC4uLl8uaXNGdW5jdGlvbihjb2x1bW4uYXR0cnMpXG4gICAgICAgICAgPyBjb2x1bW4uYXR0cnMoY29udGVudCwgcm93LCByb3dJbmRleCwgaW5kZXgpXG4gICAgICAgICAgOiBjb2x1bW4uYXR0cnNcbiAgICAgIH07XG5cbiAgICAgIGlmIChjb2x1bW4uZXZlbnRzKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbHVtbi5ldmVudHMpO1xuICAgICAgICBPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCBjb2x1bW4uZXZlbnRzKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb3JpZ2luRm4gPSBldmVudHNba2V5XTtcbiAgICAgICAgICBldmVudHNba2V5XSA9ICguLi5yZXN0KSA9PiBvcmlnaW5GbiguLi5yZXN0LCByb3csIHJvd0luZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNlbGxBdHRycyA9IHsgLi4uY2VsbEF0dHJzLCAuLi5ldmVudHMgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2VsbENsYXNzZXMgPSBfLmlzRnVuY3Rpb24oY29sdW1uLmNsYXNzZXMpXG4gICAgICAgID8gY29sdW1uLmNsYXNzZXMoY29udGVudCwgcm93LCByb3dJbmRleCwgaW5kZXgpXG4gICAgICAgIDogY29sdW1uLmNsYXNzZXM7XG5cbiAgICAgIGlmIChjb2x1bW4uc3R5bGUpIHtcbiAgICAgICAgY2VsbFN0eWxlID0gXy5pc0Z1bmN0aW9uKGNvbHVtbi5zdHlsZSlcbiAgICAgICAgICA/IGNvbHVtbi5zdHlsZShjb250ZW50LCByb3csIHJvd0luZGV4LCBpbmRleClcbiAgICAgICAgICA6IGNvbHVtbi5zdHlsZTtcbiAgICAgICAgY2VsbFN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgY2VsbFN0eWxlKSB8fCB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbHVtbi50aXRsZSkge1xuICAgICAgICBjZWxsVGl0bGUgPSBfLmlzRnVuY3Rpb24oY29sdW1uLnRpdGxlKVxuICAgICAgICAgID8gY29sdW1uLnRpdGxlKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGluZGV4KVxuICAgICAgICAgIDogY29udGVudDtcbiAgICAgICAgY2VsbEF0dHJzLnRpdGxlID0gY2VsbFRpdGxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29sdW1uLmFsaWduKSB7XG4gICAgICAgIGNlbGxTdHlsZS50ZXh0QWxpZ24gPVxuICAgICAgICAgIF8uaXNGdW5jdGlvbihjb2x1bW4uYWxpZ24pXG4gICAgICAgICAgICA/IGNvbHVtbi5hbGlnbihjb250ZW50LCByb3csIHJvd0luZGV4LCBpbmRleClcbiAgICAgICAgICAgIDogY29sdW1uLmFsaWduO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2VsbENsYXNzZXMpIGNlbGxBdHRycy5jbGFzc05hbWUgPSBjZWxsQ2xhc3NlcztcbiAgICAgIGlmICghXy5pc0VtcHR5T2JqZWN0KGNlbGxTdHlsZSkpIGNlbGxBdHRycy5zdHlsZSA9IGNlbGxTdHlsZTtcblxuICAgICAgbGV0IGVkaXRhYmxlQ2VsbCA9IF8uaXNEZWZpbmVkKGNvbHVtbi5lZGl0YWJsZSkgPyBjb2x1bW4uZWRpdGFibGUgOiB0cnVlO1xuICAgICAgaWYgKGNvbHVtbi5kYXRhRmllbGQgPT09IGtleUZpZWxkIHx8ICFlZGl0YWJsZSkgZWRpdGFibGVDZWxsID0gZmFsc2U7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKGNvbHVtbi5lZGl0YWJsZSkpIHtcbiAgICAgICAgZWRpdGFibGVDZWxsID0gY29sdW1uLmVkaXRhYmxlKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGluZGV4KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhYkluZGV4U3RhcnQgIT09IC0xKSB7XG4gICAgICAgIGNlbGxBdHRycy50YWJJbmRleCA9IHRhYkluZGV4Kys7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDZWxsXG4gICAgICAgICAga2V5PXsgYCR7Y29udGVudH0tJHtpbmRleH1gIH1cbiAgICAgICAgICByb3c9eyByb3cgfVxuICAgICAgICAgIGVkaXRhYmxlPXsgZWRpdGFibGVDZWxsIH1cbiAgICAgICAgICByb3dJbmRleD17IHJvd0luZGV4IH1cbiAgICAgICAgICBjb2x1bW5JbmRleD17IGluZGV4IH1cbiAgICAgICAgICBjb2x1bW49eyBjb2x1bW4gfVxuICAgICAgICAgIG9uU3RhcnQ9eyBvblN0YXJ0IH1cbiAgICAgICAgICBjbGlja1RvRWRpdD17IGNsaWNrVG9FZGl0IH1cbiAgICAgICAgICBkYmNsaWNrVG9FZGl0PXsgZGJjbGlja1RvRWRpdCB9XG4gICAgICAgICAgeyAuLi5jZWxsQXR0cnMgfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L3Jvdy1wdXJlLWNvbnRlbnQuanMiLCJpbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vY29uc3QnO1xuXG5jb25zdCBldmVudHMgPSBbXG4gICdvbkNsaWNrJyxcbiAgJ29uRG91YmxlQ2xpY2snLFxuICAnb25Nb3VzZUVudGVyJyxcbiAgJ29uTW91c2VMZWF2ZScsXG4gICdvbkNvbnRleHRNZW51JyxcbiAgJ29uQXV4Q2xpY2snXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBFeHRlbmRCYXNlID0+XG4gIGNsYXNzIFJvd0V2ZW50RGVsZWdhdGVyIGV4dGVuZHMgRXh0ZW5kQmFzZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuY2xpY2tOdW0gPSAwO1xuICAgICAgdGhpcy5jcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyID0gdGhpcy5jcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmNyZWF0ZUNsaWNrRXZlbnRIYW5kbGVyID0gdGhpcy5jcmVhdGVDbGlja0V2ZW50SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsaWNrRXZlbnRIYW5kbGVyKGNiKSB7XG4gICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHJvdyxcbiAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICBrZXlGaWVsZCxcbiAgICAgICAgICBzZWxlY3RhYmxlLFxuICAgICAgICAgIGV4cGFuZGFibGUsXG4gICAgICAgICAgcm93SW5kZXgsXG4gICAgICAgICAgZXhwYW5kZWQsXG4gICAgICAgICAgZXhwYW5kUm93LFxuICAgICAgICAgIHNlbGVjdFJvdyxcbiAgICAgICAgICBERUxBWV9GT1JfREJDTElDS1xuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY2xpY2tGbiA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgIGNiKGUsIHJvdywgcm93SW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBrZXkgPSBfLmdldChyb3csIGtleUZpZWxkKTtcbiAgICAgICAgICBpZiAoZXhwYW5kUm93ICYmIGV4cGFuZGFibGUgJiYgIWV4cGFuZFJvdy5leHBhbmRCeUNvbHVtbk9ubHkpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgKHNlbGVjdFJvdy5tb2RlICE9PSBDb25zdC5ST1dfU0VMRUNUX0RJU0FCTEVEICYmIHNlbGVjdFJvdy5jbGlja1RvRXhwYW5kKSB8fFxuICAgICAgICAgICAgICBzZWxlY3RSb3cubW9kZSA9PT0gQ29uc3QuUk9XX1NFTEVDVF9ESVNBQkxFRFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGV4cGFuZFJvdy5vblJvd0V4cGFuZChrZXksICFleHBhbmRlZCwgcm93SW5kZXgsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2VsZWN0Um93LmNsaWNrVG9TZWxlY3QgJiYgc2VsZWN0YWJsZSkge1xuICAgICAgICAgICAgc2VsZWN0Um93Lm9uUm93U2VsZWN0KGtleSwgIXNlbGVjdGVkLCByb3dJbmRleCwgZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChERUxBWV9GT1JfREJDTElDSykge1xuICAgICAgICAgIHRoaXMuY2xpY2tOdW0gKz0gMTtcbiAgICAgICAgICBfLmRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsaWNrTnVtID09PSAxKSB7XG4gICAgICAgICAgICAgIGNsaWNrRm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xpY2tOdW0gPSAwO1xuICAgICAgICAgIH0sIERFTEFZX0ZPUl9EQkNMSUNLKSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsaWNrRm4oKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyKGNiKSB7XG4gICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyByb3csIHJvd0luZGV4IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjYihlLCByb3csIHJvd0luZGV4KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZGVsZWdhdGUoYXR0cnMgPSB7fSkge1xuICAgICAgY29uc3QgbmV3QXR0cnMgPSB7IC4uLmF0dHJzIH07XG4gICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBpZiAoXy5jb250YWlucyhldmVudHMsIGF0dHIpKSB7XG4gICAgICAgICAgbmV3QXR0cnNbYXR0cl0gPSB0aGlzLmNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIoYXR0cnNbYXR0cl0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXdBdHRycztcbiAgICB9XG4gIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvZXZlbnQtZGVsZWdhdGVyLmpzIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBSb3dTaG91bGRVcGRhdGVyIGV4dGVuZHMgRXh0ZW5kQmFzZSB7XG4gICAgc2hvdWxkVXBkYXRlQnlDZWxsRWRpdGluZyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmICghKHRoaXMucHJvcHMuY2xpY2tUb0VkaXQgfHwgdGhpcy5wcm9wcy5kYmNsaWNrVG9FZGl0KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgbmV4dFByb3BzLmVkaXRpbmdSb3dJZHggPT09IG5leHRQcm9wcy5yb3dJbmRleCB8fFxuICAgICAgICAodGhpcy5wcm9wcy5lZGl0aW5nUm93SWR4ID09PSBuZXh0UHJvcHMucm93SW5kZXggJiZcbiAgICAgICAgbmV4dFByb3BzLmVkaXRpbmdSb3dJZHggPT09IG51bGwpIHx8XG4gICAgICAgIHRoaXMucHJvcHMuZWRpdGluZ1Jvd0lkeCA9PT0gbmV4dFByb3BzLnJvd0luZGV4XG4gICAgICApO1xuICAgIH1cblxuICAgIHNob3VsZFVwZGF0ZWRCeVNlbGZQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lICE9PSBuZXh0UHJvcHMuY2xhc3NOYW1lIHx8XG4gICAgICAgICFfLmlzRXF1YWwodGhpcy5wcm9wcy5zdHlsZSwgbmV4dFByb3BzLnN0eWxlKSB8fFxuICAgICAgICAhXy5pc0VxdWFsKHRoaXMucHJvcHMuYXR0cnMsIG5leHRQcm9wcy5hdHRycylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gT25seSB1c2UgZm9yIHNpbXBsZS1yb3dcbiAgICBzaG91bGRVcGRhdGVCeUNvbHVtbnNGb3JTaW1wbGVDaGVjayhuZXh0UHJvcHMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNvbHVtbnMubGVuZ3RoICE9PSBuZXh0UHJvcHMuY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuY29sdW1ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoIV8uaXNFcXVhbCh0aGlzLnByb3BzLmNvbHVtbnNbaV0sIG5leHRQcm9wcy5jb2x1bW5zW2ldKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc2hvdWxkVXBkYXRlZEJ5Tm9ybWFsUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBjb25zdCBzaG91bGRVcGRhdGUgPVxuICAgICAgICB0aGlzLnByb3BzLnJvd0luZGV4ICE9PSBuZXh0UHJvcHMucm93SW5kZXggfHxcbiAgICAgICAgdGhpcy5wcm9wcy5lZGl0YWJsZSAhPT0gbmV4dFByb3BzLmVkaXRhYmxlIHx8XG4gICAgICAgICFfLmlzRXF1YWwodGhpcy5wcm9wcy5yb3csIG5leHRQcm9wcy5yb3cpIHx8XG4gICAgICAgIHRoaXMucHJvcHMuY29sdW1ucy5sZW5ndGggIT09IG5leHRQcm9wcy5jb2x1bW5zLmxlbmd0aDtcblxuICAgICAgcmV0dXJuIHNob3VsZFVwZGF0ZTtcbiAgICB9XG5cbiAgICBzaG91bGRVcGRhdGVDaGlsZChuZXh0UHJvcHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnNob3VsZFVwZGF0ZUJ5Q2VsbEVkaXRpbmcobmV4dFByb3BzKSB8fFxuICAgICAgICB0aGlzLnNob3VsZFVwZGF0ZWRCeU5vcm1hbFByb3BzKG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgc2hvdWxkUm93Q29udGVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnNob3VsZFVwZGF0ZUNoaWxkKG5leHRQcm9wcykgfHxcbiAgICAgICAgdGhpcy5zaG91bGRVcGRhdGVCeUNvbHVtbnNGb3JTaW1wbGVDaGVjayhuZXh0UHJvcHMpO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy9zaG91bGQtdXBkYXRlci5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgKiBhcyBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IHRpbWVvdXRzU2hhcGUgfSBmcm9tICcuL3V0aWxzL1Byb3BUeXBlcyc7XG5pbXBvcnQgVHJhbnNpdGlvbkdyb3VwQ29udGV4dCBmcm9tICcuL1RyYW5zaXRpb25Hcm91cENvbnRleHQnO1xuZXhwb3J0IHZhciBVTk1PVU5URUQgPSAndW5tb3VudGVkJztcbmV4cG9ydCB2YXIgRVhJVEVEID0gJ2V4aXRlZCc7XG5leHBvcnQgdmFyIEVOVEVSSU5HID0gJ2VudGVyaW5nJztcbmV4cG9ydCB2YXIgRU5URVJFRCA9ICdlbnRlcmVkJztcbmV4cG9ydCB2YXIgRVhJVElORyA9ICdleGl0aW5nJztcbi8qKlxuICogVGhlIFRyYW5zaXRpb24gY29tcG9uZW50IGxldHMgeW91IGRlc2NyaWJlIGEgdHJhbnNpdGlvbiBmcm9tIG9uZSBjb21wb25lbnRcbiAqIHN0YXRlIHRvIGFub3RoZXIgX292ZXIgdGltZV8gd2l0aCBhIHNpbXBsZSBkZWNsYXJhdGl2ZSBBUEkuIE1vc3QgY29tbW9ubHlcbiAqIGl0J3MgdXNlZCB0byBhbmltYXRlIHRoZSBtb3VudGluZyBhbmQgdW5tb3VudGluZyBvZiBhIGNvbXBvbmVudCwgYnV0IGNhbiBhbHNvXG4gKiBiZSB1c2VkIHRvIGRlc2NyaWJlIGluLXBsYWNlIHRyYW5zaXRpb24gc3RhdGVzIGFzIHdlbGwuXG4gKlxuICogLS0tXG4gKlxuICogKipOb3RlKio6IGBUcmFuc2l0aW9uYCBpcyBhIHBsYXRmb3JtLWFnbm9zdGljIGJhc2UgY29tcG9uZW50LiBJZiB5b3UncmUgdXNpbmdcbiAqIHRyYW5zaXRpb25zIGluIENTUywgeW91J2xsIHByb2JhYmx5IHdhbnQgdG8gdXNlXG4gKiBbYENTU1RyYW5zaXRpb25gXShodHRwczovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2Nzcy10cmFuc2l0aW9uKVxuICogaW5zdGVhZC4gSXQgaW5oZXJpdHMgYWxsIHRoZSBmZWF0dXJlcyBvZiBgVHJhbnNpdGlvbmAsIGJ1dCBjb250YWluc1xuICogYWRkaXRpb25hbCBmZWF0dXJlcyBuZWNlc3NhcnkgdG8gcGxheSBuaWNlIHdpdGggQ1NTIHRyYW5zaXRpb25zIChoZW5jZSB0aGVcbiAqIG5hbWUgb2YgdGhlIGNvbXBvbmVudCkuXG4gKlxuICogLS0tXG4gKlxuICogQnkgZGVmYXVsdCB0aGUgYFRyYW5zaXRpb25gIGNvbXBvbmVudCBkb2VzIG5vdCBhbHRlciB0aGUgYmVoYXZpb3Igb2YgdGhlXG4gKiBjb21wb25lbnQgaXQgcmVuZGVycywgaXQgb25seSB0cmFja3MgXCJlbnRlclwiIGFuZCBcImV4aXRcIiBzdGF0ZXMgZm9yIHRoZVxuICogY29tcG9uZW50cy4gSXQncyB1cCB0byB5b3UgdG8gZ2l2ZSBtZWFuaW5nIGFuZCBlZmZlY3QgdG8gdGhvc2Ugc3RhdGVzLiBGb3JcbiAqIGV4YW1wbGUgd2UgY2FuIGFkZCBzdHlsZXMgdG8gYSBjb21wb25lbnQgd2hlbiBpdCBlbnRlcnMgb3IgZXhpdHM6XG4gKlxuICogYGBganN4XG4gKiBpbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG4gKlxuICogY29uc3QgZHVyYXRpb24gPSAzMDA7XG4gKlxuICogY29uc3QgZGVmYXVsdFN0eWxlID0ge1xuICogICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke2R1cmF0aW9ufW1zIGVhc2UtaW4tb3V0YCxcbiAqICAgb3BhY2l0eTogMCxcbiAqIH1cbiAqXG4gKiBjb25zdCB0cmFuc2l0aW9uU3R5bGVzID0ge1xuICogICBlbnRlcmluZzogeyBvcGFjaXR5OiAxIH0sXG4gKiAgIGVudGVyZWQ6ICB7IG9wYWNpdHk6IDEgfSxcbiAqICAgZXhpdGluZzogIHsgb3BhY2l0eTogMCB9LFxuICogICBleGl0ZWQ6ICB7IG9wYWNpdHk6IDAgfSxcbiAqIH07XG4gKlxuICogY29uc3QgRmFkZSA9ICh7IGluOiBpblByb3AgfSkgPT4gKFxuICogICA8VHJhbnNpdGlvbiBpbj17aW5Qcm9wfSB0aW1lb3V0PXtkdXJhdGlvbn0+XG4gKiAgICAge3N0YXRlID0+IChcbiAqICAgICAgIDxkaXYgc3R5bGU9e3tcbiAqICAgICAgICAgLi4uZGVmYXVsdFN0eWxlLFxuICogICAgICAgICAuLi50cmFuc2l0aW9uU3R5bGVzW3N0YXRlXVxuICogICAgICAgfX0+XG4gKiAgICAgICAgIEknbSBhIGZhZGUgVHJhbnNpdGlvbiFcbiAqICAgICAgIDwvZGl2PlxuICogICAgICl9XG4gKiAgIDwvVHJhbnNpdGlvbj5cbiAqICk7XG4gKiBgYGBcbiAqXG4gKiBUaGVyZSBhcmUgNCBtYWluIHN0YXRlcyBhIFRyYW5zaXRpb24gY2FuIGJlIGluOlxuICogIC0gYCdlbnRlcmluZydgXG4gKiAgLSBgJ2VudGVyZWQnYFxuICogIC0gYCdleGl0aW5nJ2BcbiAqICAtIGAnZXhpdGVkJ2BcbiAqXG4gKiBUcmFuc2l0aW9uIHN0YXRlIGlzIHRvZ2dsZWQgdmlhIHRoZSBgaW5gIHByb3AuIFdoZW4gYHRydWVgIHRoZSBjb21wb25lbnRcbiAqIGJlZ2lucyB0aGUgXCJFbnRlclwiIHN0YWdlLiBEdXJpbmcgdGhpcyBzdGFnZSwgdGhlIGNvbXBvbmVudCB3aWxsIHNoaWZ0IGZyb21cbiAqIGl0cyBjdXJyZW50IHRyYW5zaXRpb24gc3RhdGUsIHRvIGAnZW50ZXJpbmcnYCBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZVxuICogdHJhbnNpdGlvbiBhbmQgdGhlbiB0byB0aGUgYCdlbnRlcmVkJ2Agc3RhZ2Ugb25jZSBpdCdzIGNvbXBsZXRlLiBMZXQncyB0YWtlXG4gKiB0aGUgZm9sbG93aW5nIGV4YW1wbGUgKHdlJ2xsIHVzZSB0aGVcbiAqIFt1c2VTdGF0ZV0oaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2hvb2tzLXJlZmVyZW5jZS5odG1sI3VzZXN0YXRlKSBob29rKTpcbiAqXG4gKiBgYGBqc3hcbiAqIGZ1bmN0aW9uIEFwcCgpIHtcbiAqICAgY29uc3QgW2luUHJvcCwgc2V0SW5Qcm9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAqICAgcmV0dXJuIChcbiAqICAgICA8ZGl2PlxuICogICAgICAgPFRyYW5zaXRpb24gaW49e2luUHJvcH0gdGltZW91dD17NTAwfT5cbiAqICAgICAgICAge3N0YXRlID0+IChcbiAqICAgICAgICAgICAvLyAuLi5cbiAqICAgICAgICAgKX1cbiAqICAgICAgIDwvVHJhbnNpdGlvbj5cbiAqICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SW5Qcm9wKHRydWUpfT5cbiAqICAgICAgICAgQ2xpY2sgdG8gRW50ZXJcbiAqICAgICAgIDwvYnV0dG9uPlxuICogICAgIDwvZGl2PlxuICogICApO1xuICogfVxuICogYGBgXG4gKlxuICogV2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgdGhlIGNvbXBvbmVudCB3aWxsIHNoaWZ0IHRvIHRoZSBgJ2VudGVyaW5nJ2Agc3RhdGVcbiAqIGFuZCBzdGF5IHRoZXJlIGZvciA1MDBtcyAodGhlIHZhbHVlIG9mIGB0aW1lb3V0YCkgYmVmb3JlIGl0IGZpbmFsbHkgc3dpdGNoZXNcbiAqIHRvIGAnZW50ZXJlZCdgLlxuICpcbiAqIFdoZW4gYGluYCBpcyBgZmFsc2VgIHRoZSBzYW1lIHRoaW5nIGhhcHBlbnMgZXhjZXB0IHRoZSBzdGF0ZSBtb3ZlcyBmcm9tXG4gKiBgJ2V4aXRpbmcnYCB0byBgJ2V4aXRlZCdgLlxuICovXG5cbnZhciBUcmFuc2l0aW9uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zaXRpb24ocHJvcHMsIGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkgfHwgdGhpcztcbiAgICB2YXIgcGFyZW50R3JvdXAgPSBjb250ZXh0OyAvLyBJbiB0aGUgY29udGV4dCBvZiBhIFRyYW5zaXRpb25Hcm91cCBhbGwgZW50ZXJzIGFyZSByZWFsbHkgYXBwZWFyc1xuXG4gICAgdmFyIGFwcGVhciA9IHBhcmVudEdyb3VwICYmICFwYXJlbnRHcm91cC5pc01vdW50aW5nID8gcHJvcHMuZW50ZXIgOiBwcm9wcy5hcHBlYXI7XG4gICAgdmFyIGluaXRpYWxTdGF0dXM7XG4gICAgX3RoaXMuYXBwZWFyU3RhdHVzID0gbnVsbDtcblxuICAgIGlmIChwcm9wcy5pbikge1xuICAgICAgaWYgKGFwcGVhcikge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRVhJVEVEO1xuICAgICAgICBfdGhpcy5hcHBlYXJTdGF0dXMgPSBFTlRFUklORztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFTlRFUkVEO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvcHMudW5tb3VudE9uRXhpdCB8fCBwcm9wcy5tb3VudE9uRW50ZXIpIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IFVOTU9VTlRFRDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFWElURUQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzdGF0dXM6IGluaXRpYWxTdGF0dXNcbiAgICB9O1xuICAgIF90aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgVHJhbnNpdGlvbi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoX3JlZiwgcHJldlN0YXRlKSB7XG4gICAgdmFyIG5leHRJbiA9IF9yZWYuaW47XG5cbiAgICBpZiAobmV4dEluICYmIHByZXZTdGF0ZS5zdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiBFWElURURcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07IC8vIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHByZXZQcm9wcykge1xuICAvLyAgIGxldCBuZXh0U3RhdHVzID0gbnVsbFxuICAvLyAgIGlmIChwcmV2UHJvcHMgIT09IHRoaXMucHJvcHMpIHtcbiAgLy8gICAgIGNvbnN0IHsgc3RhdHVzIH0gPSB0aGlzLnN0YXRlXG4gIC8vICAgICBpZiAodGhpcy5wcm9wcy5pbikge1xuICAvLyAgICAgICBpZiAoc3RhdHVzICE9PSBFTlRFUklORyAmJiBzdGF0dXMgIT09IEVOVEVSRUQpIHtcbiAgLy8gICAgICAgICBuZXh0U3RhdHVzID0gRU5URVJJTkdcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgaWYgKHN0YXR1cyA9PT0gRU5URVJJTkcgfHwgc3RhdHVzID09PSBFTlRFUkVEKSB7XG4gIC8vICAgICAgICAgbmV4dFN0YXR1cyA9IEVYSVRJTkdcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICByZXR1cm4geyBuZXh0U3RhdHVzIH1cbiAgLy8gfVxuXG5cbiAgdmFyIF9wcm90byA9IFRyYW5zaXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlU3RhdHVzKHRydWUsIHRoaXMuYXBwZWFyU3RhdHVzKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHZhciBuZXh0U3RhdHVzID0gbnVsbDtcblxuICAgIGlmIChwcmV2UHJvcHMgIT09IHRoaXMucHJvcHMpIHtcbiAgICAgIHZhciBzdGF0dXMgPSB0aGlzLnN0YXRlLnN0YXR1cztcblxuICAgICAgaWYgKHRoaXMucHJvcHMuaW4pIHtcbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gRU5URVJJTkcgJiYgc3RhdHVzICE9PSBFTlRFUkVEKSB7XG4gICAgICAgICAgbmV4dFN0YXR1cyA9IEVOVEVSSU5HO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBFTlRFUklORyB8fCBzdGF0dXMgPT09IEVOVEVSRUQpIHtcbiAgICAgICAgICBuZXh0U3RhdHVzID0gRVhJVElORztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlU3RhdHVzKGZhbHNlLCBuZXh0U3RhdHVzKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNhbmNlbE5leHRDYWxsYmFjaygpO1xuICB9O1xuXG4gIF9wcm90by5nZXRUaW1lb3V0cyA9IGZ1bmN0aW9uIGdldFRpbWVvdXRzKCkge1xuICAgIHZhciB0aW1lb3V0ID0gdGhpcy5wcm9wcy50aW1lb3V0O1xuICAgIHZhciBleGl0LCBlbnRlciwgYXBwZWFyO1xuICAgIGV4aXQgPSBlbnRlciA9IGFwcGVhciA9IHRpbWVvdXQ7XG5cbiAgICBpZiAodGltZW91dCAhPSBudWxsICYmIHR5cGVvZiB0aW1lb3V0ICE9PSAnbnVtYmVyJykge1xuICAgICAgZXhpdCA9IHRpbWVvdXQuZXhpdDtcbiAgICAgIGVudGVyID0gdGltZW91dC5lbnRlcjsgLy8gVE9ETzogcmVtb3ZlIGZhbGxiYWNrIGZvciBuZXh0IG1ham9yXG5cbiAgICAgIGFwcGVhciA9IHRpbWVvdXQuYXBwZWFyICE9PSB1bmRlZmluZWQgPyB0aW1lb3V0LmFwcGVhciA6IGVudGVyO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBleGl0OiBleGl0LFxuICAgICAgZW50ZXI6IGVudGVyLFxuICAgICAgYXBwZWFyOiBhcHBlYXJcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVTdGF0dXMgPSBmdW5jdGlvbiB1cGRhdGVTdGF0dXMobW91bnRpbmcsIG5leHRTdGF0dXMpIHtcbiAgICBpZiAobW91bnRpbmcgPT09IHZvaWQgMCkge1xuICAgICAgbW91bnRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobmV4dFN0YXR1cyAhPT0gbnVsbCkge1xuICAgICAgLy8gbmV4dFN0YXR1cyB3aWxsIGFsd2F5cyBiZSBFTlRFUklORyBvciBFWElUSU5HLlxuICAgICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcbiAgICAgIHZhciBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICAgIGlmIChuZXh0U3RhdHVzID09PSBFTlRFUklORykge1xuICAgICAgICB0aGlzLnBlcmZvcm1FbnRlcihub2RlLCBtb3VudGluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBlcmZvcm1FeGl0KG5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy51bm1vdW50T25FeGl0ICYmIHRoaXMuc3RhdGUuc3RhdHVzID09PSBFWElURUQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IFVOTU9VTlRFRFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5wZXJmb3JtRW50ZXIgPSBmdW5jdGlvbiBwZXJmb3JtRW50ZXIobm9kZSwgbW91bnRpbmcpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBlbnRlciA9IHRoaXMucHJvcHMuZW50ZXI7XG4gICAgdmFyIGFwcGVhcmluZyA9IHRoaXMuY29udGV4dCA/IHRoaXMuY29udGV4dC5pc01vdW50aW5nIDogbW91bnRpbmc7XG4gICAgdmFyIHRpbWVvdXRzID0gdGhpcy5nZXRUaW1lb3V0cygpO1xuICAgIHZhciBlbnRlclRpbWVvdXQgPSBhcHBlYXJpbmcgPyB0aW1lb3V0cy5hcHBlYXIgOiB0aW1lb3V0cy5lbnRlcjsgLy8gbm8gZW50ZXIgYW5pbWF0aW9uIHNraXAgcmlnaHQgdG8gRU5URVJFRFxuICAgIC8vIGlmIHdlIGFyZSBtb3VudGluZyBhbmQgcnVubmluZyB0aGlzIGl0IG1lYW5zIGFwcGVhciBfbXVzdF8gYmUgc2V0XG5cbiAgICBpZiAoIW1vdW50aW5nICYmICFlbnRlciB8fCBjb25maWcuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBFTlRFUkVEXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyZWQobm9kZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uRW50ZXIobm9kZSwgYXBwZWFyaW5nKTtcbiAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICBzdGF0dXM6IEVOVEVSSU5HXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJpbmcobm9kZSwgYXBwZWFyaW5nKTtcblxuICAgICAgX3RoaXMyLm9uVHJhbnNpdGlvbkVuZChub2RlLCBlbnRlclRpbWVvdXQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgICAgc3RhdHVzOiBFTlRFUkVEXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIucHJvcHMub25FbnRlcmVkKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnBlcmZvcm1FeGl0ID0gZnVuY3Rpb24gcGVyZm9ybUV4aXQobm9kZSkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGV4aXQgPSB0aGlzLnByb3BzLmV4aXQ7XG4gICAgdmFyIHRpbWVvdXRzID0gdGhpcy5nZXRUaW1lb3V0cygpOyAvLyBubyBleGl0IGFuaW1hdGlvbiBza2lwIHJpZ2h0IHRvIEVYSVRFRFxuXG4gICAgaWYgKCFleGl0IHx8IGNvbmZpZy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IEVYSVRFRFxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uRXhpdChub2RlKTtcbiAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICBzdGF0dXM6IEVYSVRJTkdcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMucHJvcHMub25FeGl0aW5nKG5vZGUpO1xuXG4gICAgICBfdGhpczMub25UcmFuc2l0aW9uRW5kKG5vZGUsIHRpbWVvdXRzLmV4aXQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgICAgc3RhdHVzOiBFWElURURcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY2FuY2VsTmV4dENhbGxiYWNrID0gZnVuY3Rpb24gY2FuY2VsTmV4dENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLm5leHRDYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsKCk7XG4gICAgICB0aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zYWZlU2V0U3RhdGUgPSBmdW5jdGlvbiBzYWZlU2V0U3RhdGUobmV4dFN0YXRlLCBjYWxsYmFjaykge1xuICAgIC8vIFRoaXMgc2hvdWxkbid0IGJlIG5lY2Vzc2FyeSwgYnV0IHRoZXJlIGFyZSB3ZWlyZCByYWNlIGNvbmRpdGlvbnMgd2l0aFxuICAgIC8vIHNldFN0YXRlIGNhbGxiYWNrcyBhbmQgdW5tb3VudGluZyBpbiB0ZXN0aW5nLCBzbyBhbHdheXMgbWFrZSBzdXJlIHRoYXRcbiAgICAvLyB3ZSBjYW4gY2FuY2VsIGFueSBwZW5kaW5nIHNldFN0YXRlIGNhbGxiYWNrcyBhZnRlciB3ZSB1bm1vdW50LlxuICAgIGNhbGxiYWNrID0gdGhpcy5zZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spO1xuICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgX3Byb3RvLnNldE5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIHNldE5leHRDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIGFjdGl2ZSA9IHRydWU7XG5cbiAgICB0aGlzLm5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXM0Lm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLm5leHRDYWxsYmFjaztcbiAgfTtcblxuICBfcHJvdG8ub25UcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKG5vZGUsIHRpbWVvdXQsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnNldE5leHRDYWxsYmFjayhoYW5kbGVyKTtcbiAgICB2YXIgZG9lc05vdEhhdmVUaW1lb3V0T3JMaXN0ZW5lciA9IHRpbWVvdXQgPT0gbnVsbCAmJiAhdGhpcy5wcm9wcy5hZGRFbmRMaXN0ZW5lcjtcblxuICAgIGlmICghbm9kZSB8fCBkb2VzTm90SGF2ZVRpbWVvdXRPckxpc3RlbmVyKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dENhbGxiYWNrLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5hZGRFbmRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5wcm9wcy5hZGRFbmRMaXN0ZW5lcihub2RlLCB0aGlzLm5leHRDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVvdXQgIT0gbnVsbCkge1xuICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgdGltZW91dCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuXG4gICAgaWYgKHN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBjaGlsZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNoaWxkcmVuXCJdKTsgLy8gZmlsdGVyIHByb3BzIGZvciBUcmFuc3RpdGlvblxuXG5cbiAgICBkZWxldGUgY2hpbGRQcm9wcy5pbjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5tb3VudE9uRW50ZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMudW5tb3VudE9uRXhpdDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5hcHBlYXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuZW50ZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuZXhpdDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy50aW1lb3V0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmFkZEVuZExpc3RlbmVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRW50ZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FbnRlcmluZztcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkVudGVyZWQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FeGl0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRXhpdGluZztcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkV4aXRlZDtcblxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIGFsbG93cyBmb3IgbmVzdGVkIFRyYW5zaXRpb25zXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uR3JvdXBDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9LCBjaGlsZHJlbihzdGF0dXMsIGNoaWxkUHJvcHMpKTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICByZXR1cm4gKC8vIGFsbG93cyBmb3IgbmVzdGVkIFRyYW5zaXRpb25zXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Hcm91cENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0sIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuVHJhbnNpdGlvbi5jb250ZXh0VHlwZSA9IFRyYW5zaXRpb25Hcm91cENvbnRleHQ7XG5UcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIEEgYGZ1bmN0aW9uYCBjaGlsZCBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIGEgUmVhY3QgZWxlbWVudC4gVGhpcyBmdW5jdGlvbiBpc1xuICAgKiBjYWxsZWQgd2l0aCB0aGUgY3VycmVudCB0cmFuc2l0aW9uIHN0YXR1cyAoYCdlbnRlcmluZydgLCBgJ2VudGVyZWQnYCxcbiAgICogYCdleGl0aW5nJ2AsIGAnZXhpdGVkJ2ApLCB3aGljaCBjYW4gYmUgdXNlZCB0byBhcHBseSBjb250ZXh0XG4gICAqIHNwZWNpZmljIHByb3BzIHRvIGEgY29tcG9uZW50LlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogPFRyYW5zaXRpb24gaW49e3RoaXMuc3RhdGUuaW59IHRpbWVvdXQ9ezE1MH0+XG4gICAqICAge3N0YXRlID0+IChcbiAgICogICAgIDxNeUNvbXBvbmVudCBjbGFzc05hbWU9e2BmYWRlIGZhZGUtJHtzdGF0ZX1gfSAvPlxuICAgKiAgICl9XG4gICAqIDwvVHJhbnNpdGlvbj5cbiAgICogYGBgXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZF0pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIGNvbXBvbmVudDsgdHJpZ2dlcnMgdGhlIGVudGVyIG9yIGV4aXQgc3RhdGVzXG4gICAqL1xuICBpbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGNoaWxkIGNvbXBvbmVudCBpcyBtb3VudGVkIGltbWVkaWF0ZWx5IGFsb25nIHdpdGhcbiAgICogdGhlIHBhcmVudCBgVHJhbnNpdGlvbmAgY29tcG9uZW50LiBJZiB5b3Ugd2FudCB0byBcImxhenkgbW91bnRcIiB0aGUgY29tcG9uZW50IG9uIHRoZVxuICAgKiBmaXJzdCBgaW49e3RydWV9YCB5b3UgY2FuIHNldCBgbW91bnRPbkVudGVyYC4gQWZ0ZXIgdGhlIGZpcnN0IGVudGVyIHRyYW5zaXRpb24gdGhlIGNvbXBvbmVudCB3aWxsIHN0YXlcbiAgICogbW91bnRlZCwgZXZlbiBvbiBcImV4aXRlZFwiLCB1bmxlc3MgeW91IGFsc28gc3BlY2lmeSBgdW5tb3VudE9uRXhpdGAuXG4gICAqL1xuICBtb3VudE9uRW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0IHRoZSBjaGlsZCBjb21wb25lbnQgc3RheXMgbW91bnRlZCBhZnRlciBpdCByZWFjaGVzIHRoZSBgJ2V4aXRlZCdgIHN0YXRlLlxuICAgKiBTZXQgYHVubW91bnRPbkV4aXRgIGlmIHlvdSdkIHByZWZlciB0byB1bm1vdW50IHRoZSBjb21wb25lbnQgYWZ0ZXIgaXQgZmluaXNoZXMgZXhpdGluZy5cbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOb3JtYWxseSBhIGNvbXBvbmVudCBpcyBub3QgdHJhbnNpdGlvbmVkIGlmIGl0IGlzIHNob3duIHdoZW4gdGhlIGA8VHJhbnNpdGlvbj5gIGNvbXBvbmVudCBtb3VudHMuXG4gICAqIElmIHlvdSB3YW50IHRvIHRyYW5zaXRpb24gb24gdGhlIGZpcnN0IG1vdW50IHNldCBgYXBwZWFyYCB0byBgdHJ1ZWAsIGFuZCB0aGVcbiAgICogY29tcG9uZW50IHdpbGwgdHJhbnNpdGlvbiBpbiBhcyBzb29uIGFzIHRoZSBgPFRyYW5zaXRpb24+YCBtb3VudHMuXG4gICAqXG4gICAqID4gTm90ZTogdGhlcmUgYXJlIG5vIHNwZWNpZmljIFwiYXBwZWFyXCIgc3RhdGVzLiBgYXBwZWFyYCBvbmx5IGFkZHMgYW4gYWRkaXRpb25hbCBgZW50ZXJgIHRyYW5zaXRpb24uXG4gICAqL1xuICBhcHBlYXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBlbnRlciB0cmFuc2l0aW9ucy5cbiAgICovXG4gIGVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgZXhpdCB0cmFuc2l0aW9ucy5cbiAgICovXG4gIGV4aXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gb2YgdGhlIHRyYW5zaXRpb24sIGluIG1pbGxpc2Vjb25kcy5cbiAgICogUmVxdWlyZWQgdW5sZXNzIGBhZGRFbmRMaXN0ZW5lcmAgaXMgcHJvdmlkZWQuXG4gICAqXG4gICAqIFlvdSBtYXkgc3BlY2lmeSBhIHNpbmdsZSB0aW1lb3V0IGZvciBhbGwgdHJhbnNpdGlvbnM6XG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiB0aW1lb3V0PXs1MDB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBvciBpbmRpdmlkdWFsbHk6XG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiB0aW1lb3V0PXt7XG4gICAqICBhcHBlYXI6IDUwMCxcbiAgICogIGVudGVyOiAzMDAsXG4gICAqICBleGl0OiA1MDAsXG4gICAqIH19XG4gICAqIGBgYFxuICAgKlxuICAgKiAtIGBhcHBlYXJgIGRlZmF1bHRzIHRvIHRoZSB2YWx1ZSBvZiBgZW50ZXJgXG4gICAqIC0gYGVudGVyYCBkZWZhdWx0cyB0byBgMGBcbiAgICogLSBgZXhpdGAgZGVmYXVsdHMgdG8gYDBgXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXIgfCB7IGVudGVyPzogbnVtYmVyLCBleGl0PzogbnVtYmVyLCBhcHBlYXI/OiBudW1iZXIgfX1cbiAgICovXG4gIHRpbWVvdXQ6IGZ1bmN0aW9uIHRpbWVvdXQocHJvcHMpIHtcbiAgICB2YXIgcHQgPSB0aW1lb3V0c1NoYXBlO1xuICAgIGlmICghcHJvcHMuYWRkRW5kTGlzdGVuZXIpIHB0ID0gcHQuaXNSZXF1aXJlZDtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBwdC5hcHBseSh2b2lkIDAsIFtwcm9wc10uY29uY2F0KGFyZ3MpKTtcbiAgfSxcblxuICAvKipcbiAgICogQWRkIGEgY3VzdG9tIHRyYW5zaXRpb24gZW5kIHRyaWdnZXIuIENhbGxlZCB3aXRoIHRoZSB0cmFuc2l0aW9uaW5nXG4gICAqIERPTSBub2RlIGFuZCBhIGBkb25lYCBjYWxsYmFjay4gQWxsb3dzIGZvciBtb3JlIGZpbmUgZ3JhaW5lZCB0cmFuc2l0aW9uIGVuZFxuICAgKiBsb2dpYy4gKipOb3RlOioqIFRpbWVvdXRzIGFyZSBzdGlsbCB1c2VkIGFzIGEgZmFsbGJhY2sgaWYgcHJvdmlkZWQuXG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiBhZGRFbmRMaXN0ZW5lcj17KG5vZGUsIGRvbmUpID0+IHtcbiAgICogICAvLyB1c2UgdGhlIGNzcyB0cmFuc2l0aW9uZW5kIGV2ZW50IHRvIG1hcmsgdGhlIGZpbmlzaCBvZiBhIHRyYW5zaXRpb25cbiAgICogICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBkb25lLCBmYWxzZSk7XG4gICAqIH19XG4gICAqIGBgYFxuICAgKi9cbiAgYWRkRW5kTGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZW50ZXJpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMgLy8gTmFtZSB0aGUgZnVuY3Rpb24gc28gaXQgaXMgY2xlYXJlciBpbiB0aGUgZG9jdW1lbnRhdGlvblxuXG59IDoge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5UcmFuc2l0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW46IGZhbHNlLFxuICBtb3VudE9uRW50ZXI6IGZhbHNlLFxuICB1bm1vdW50T25FeGl0OiBmYWxzZSxcbiAgYXBwZWFyOiBmYWxzZSxcbiAgZW50ZXI6IHRydWUsXG4gIGV4aXQ6IHRydWUsXG4gIG9uRW50ZXI6IG5vb3AsXG4gIG9uRW50ZXJpbmc6IG5vb3AsXG4gIG9uRW50ZXJlZDogbm9vcCxcbiAgb25FeGl0OiBub29wLFxuICBvbkV4aXRpbmc6IG5vb3AsXG4gIG9uRXhpdGVkOiBub29wXG59O1xuVHJhbnNpdGlvbi5VTk1PVU5URUQgPSAwO1xuVHJhbnNpdGlvbi5FWElURUQgPSAxO1xuVHJhbnNpdGlvbi5FTlRFUklORyA9IDI7XG5UcmFuc2l0aW9uLkVOVEVSRUQgPSAzO1xuVHJhbnNpdGlvbi5FWElUSU5HID0gNDtcbmV4cG9ydCBkZWZhdWx0IFRyYW5zaXRpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9UcmFuc2l0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIn1cbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQge1xuICBkaXNhYmxlZDogZmFsc2Vcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9jb25maWcuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmV4cG9ydCB2YXIgdGltZW91dHNTaGFwZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc2hhcGUoe1xuICBlbnRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgZXhpdDogUHJvcFR5cGVzLm51bWJlcixcbiAgYXBwZWFyOiBQcm9wVHlwZXMubnVtYmVyXG59KS5pc1JlcXVpcmVkXSkgOiBudWxsO1xuZXhwb3J0IHZhciBjbGFzc05hbWVzU2hhcGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLnNoYXBlKHtcbiAgZW50ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV4aXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFjdGl2ZTogUHJvcFR5cGVzLnN0cmluZ1xufSksIFByb3BUeXBlcy5zaGFwZSh7XG4gIGVudGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlbnRlckRvbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVudGVyQWN0aXZlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleGl0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleGl0RG9uZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXhpdEFjdGl2ZTogUHJvcFR5cGVzLnN0cmluZ1xufSldKSA6IG51bGw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS91dGlscy9Qcm9wVHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9UcmFuc2l0aW9uR3JvdXBDb250ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyYW5zaXRpb25Hcm91cENvbnRleHQgZnJvbSAnLi9UcmFuc2l0aW9uR3JvdXBDb250ZXh0JztcbmltcG9ydCB7IGdldENoaWxkTWFwcGluZywgZ2V0SW5pdGlhbENoaWxkTWFwcGluZywgZ2V0TmV4dENoaWxkTWFwcGluZyB9IGZyb20gJy4vdXRpbHMvQ2hpbGRNYXBwaW5nJztcblxudmFyIHZhbHVlcyA9IE9iamVjdC52YWx1ZXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gb2JqW2tdO1xuICB9KTtcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ2RpdicsXG4gIGNoaWxkRmFjdG9yeTogZnVuY3Rpb24gY2hpbGRGYWN0b3J5KGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG4gIC8qKlxuICAgKiBUaGUgYDxUcmFuc2l0aW9uR3JvdXA+YCBjb21wb25lbnQgbWFuYWdlcyBhIHNldCBvZiB0cmFuc2l0aW9uIGNvbXBvbmVudHNcbiAgICogKGA8VHJhbnNpdGlvbj5gIGFuZCBgPENTU1RyYW5zaXRpb24+YCkgaW4gYSBsaXN0LiBMaWtlIHdpdGggdGhlIHRyYW5zaXRpb25cbiAgICogY29tcG9uZW50cywgYDxUcmFuc2l0aW9uR3JvdXA+YCBpcyBhIHN0YXRlIG1hY2hpbmUgZm9yIG1hbmFnaW5nIHRoZSBtb3VudGluZ1xuICAgKiBhbmQgdW5tb3VudGluZyBvZiBjb21wb25lbnRzIG92ZXIgdGltZS5cbiAgICpcbiAgICogQ29uc2lkZXIgdGhlIGV4YW1wbGUgYmVsb3cuIEFzIGl0ZW1zIGFyZSByZW1vdmVkIG9yIGFkZGVkIHRvIHRoZSBUb2RvTGlzdCB0aGVcbiAgICogYGluYCBwcm9wIGlzIHRvZ2dsZWQgYXV0b21hdGljYWxseSBieSB0aGUgYDxUcmFuc2l0aW9uR3JvdXA+YC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGA8VHJhbnNpdGlvbkdyb3VwPmAgIGRvZXMgbm90IGRlZmluZSBhbnkgYW5pbWF0aW9uIGJlaGF2aW9yIVxuICAgKiBFeGFjdGx5IF9ob3dfIGEgbGlzdCBpdGVtIGFuaW1hdGVzIGlzIHVwIHRvIHRoZSBpbmRpdmlkdWFsIHRyYW5zaXRpb25cbiAgICogY29tcG9uZW50LiBUaGlzIG1lYW5zIHlvdSBjYW4gbWl4IGFuZCBtYXRjaCBhbmltYXRpb25zIGFjcm9zcyBkaWZmZXJlbnQgbGlzdFxuICAgKiBpdGVtcy5cbiAgICovXG5cbn07XG5cbnZhciBUcmFuc2l0aW9uR3JvdXAgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHJhbnNpdGlvbkdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uR3JvdXAocHJvcHMsIGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkgfHwgdGhpcztcblxuICAgIHZhciBoYW5kbGVFeGl0ZWQgPSBfdGhpcy5oYW5kbGVFeGl0ZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7IC8vIEluaXRpYWwgY2hpbGRyZW4gc2hvdWxkIGFsbCBiZSBlbnRlcmluZywgZGVwZW5kZW50IG9uIGFwcGVhclxuXG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbnRleHRWYWx1ZToge1xuICAgICAgICBpc01vdW50aW5nOiB0cnVlXG4gICAgICB9LFxuICAgICAgaGFuZGxlRXhpdGVkOiBoYW5kbGVFeGl0ZWQsXG4gICAgICBmaXJzdFJlbmRlcjogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbnRleHRWYWx1ZToge1xuICAgICAgICBpc01vdW50aW5nOiBmYWxzZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBfcmVmKSB7XG4gICAgdmFyIHByZXZDaGlsZE1hcHBpbmcgPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgICBoYW5kbGVFeGl0ZWQgPSBfcmVmLmhhbmRsZUV4aXRlZCxcbiAgICAgICAgZmlyc3RSZW5kZXIgPSBfcmVmLmZpcnN0UmVuZGVyO1xuICAgIHJldHVybiB7XG4gICAgICBjaGlsZHJlbjogZmlyc3RSZW5kZXIgPyBnZXRJbml0aWFsQ2hpbGRNYXBwaW5nKG5leHRQcm9wcywgaGFuZGxlRXhpdGVkKSA6IGdldE5leHRDaGlsZE1hcHBpbmcobmV4dFByb3BzLCBwcmV2Q2hpbGRNYXBwaW5nLCBoYW5kbGVFeGl0ZWQpLFxuICAgICAgZmlyc3RSZW5kZXI6IGZhbHNlXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlRXhpdGVkID0gZnVuY3Rpb24gaGFuZGxlRXhpdGVkKGNoaWxkLCBub2RlKSB7XG4gICAgdmFyIGN1cnJlbnRDaGlsZE1hcHBpbmcgPSBnZXRDaGlsZE1hcHBpbmcodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgaWYgKGNoaWxkLmtleSBpbiBjdXJyZW50Q2hpbGRNYXBwaW5nKSByZXR1cm47XG5cbiAgICBpZiAoY2hpbGQucHJvcHMub25FeGl0ZWQpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IF9leHRlbmRzKHt9LCBzdGF0ZS5jaGlsZHJlbik7XG5cbiAgICAgICAgZGVsZXRlIGNoaWxkcmVuW2NoaWxkLmtleV07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBDb21wb25lbnQgPSBfdGhpcyRwcm9wcy5jb21wb25lbnQsXG4gICAgICAgIGNoaWxkRmFjdG9yeSA9IF90aGlzJHByb3BzLmNoaWxkRmFjdG9yeSxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY29tcG9uZW50XCIsIFwiY2hpbGRGYWN0b3J5XCJdKTtcblxuICAgIHZhciBjb250ZXh0VmFsdWUgPSB0aGlzLnN0YXRlLmNvbnRleHRWYWx1ZTtcbiAgICB2YXIgY2hpbGRyZW4gPSB2YWx1ZXModGhpcy5zdGF0ZS5jaGlsZHJlbikubWFwKGNoaWxkRmFjdG9yeSk7XG4gICAgZGVsZXRlIHByb3BzLmFwcGVhcjtcbiAgICBkZWxldGUgcHJvcHMuZW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLmV4aXQ7XG5cbiAgICBpZiAoQ29tcG9uZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uR3JvdXBDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiBjb250ZXh0VmFsdWVcbiAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uR3JvdXBDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogY29udGV4dFZhbHVlXG4gICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIHByb3BzLCBjaGlsZHJlbikpO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uR3JvdXA7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblRyYW5zaXRpb25Hcm91cC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBgPFRyYW5zaXRpb25Hcm91cD5gIHJlbmRlcnMgYSBgPGRpdj5gIGJ5IGRlZmF1bHQuIFlvdSBjYW4gY2hhbmdlIHRoaXNcbiAgICogYmVoYXZpb3IgYnkgcHJvdmlkaW5nIGEgYGNvbXBvbmVudGAgcHJvcC5cbiAgICogSWYgeW91IHVzZSBSZWFjdCB2MTYrIGFuZCB3b3VsZCBsaWtlIHRvIGF2b2lkIGEgd3JhcHBpbmcgYDxkaXY+YCBlbGVtZW50XG4gICAqIHlvdSBjYW4gcGFzcyBpbiBgY29tcG9uZW50PXtudWxsfWAuIFRoaXMgaXMgdXNlZnVsIGlmIHRoZSB3cmFwcGluZyBkaXZcbiAgICogYm9ya3MgeW91ciBjc3Mgc3R5bGVzLlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBBIHNldCBvZiBgPFRyYW5zaXRpb24+YCBjb21wb25lbnRzLCB0aGF0IGFyZSB0b2dnbGVkIGBpbmAgYW5kIG91dCBhcyB0aGV5XG4gICAqIGxlYXZlLiB0aGUgYDxUcmFuc2l0aW9uR3JvdXA+YCB3aWxsIGluamVjdCBzcGVjaWZpYyB0cmFuc2l0aW9uIHByb3BzLCBzb1xuICAgKiByZW1lbWJlciB0byBzcHJlYWQgdGhlbSB0aHJvdWdoIGlmIHlvdSBhcmUgd3JhcHBpbmcgdGhlIGA8VHJhbnNpdGlvbj5gIGFzXG4gICAqIHdpdGggb3VyIGA8RmFkZT5gIGV4YW1wbGUuXG4gICAqXG4gICAqIFdoaWxlIHRoaXMgY29tcG9uZW50IGlzIG1lYW50IGZvciBtdWx0aXBsZSBgVHJhbnNpdGlvbmAgb3IgYENTU1RyYW5zaXRpb25gXG4gICAqIGNoaWxkcmVuLCBzb21ldGltZXMgeW91IG1heSB3YW50IHRvIGhhdmUgYSBzaW5nbGUgdHJhbnNpdGlvbiBjaGlsZCB3aXRoXG4gICAqIGNvbnRlbnQgdGhhdCB5b3Ugd2FudCB0byBiZSB0cmFuc2l0aW9uZWQgb3V0IGFuZCBpbiB3aGVuIHlvdSBjaGFuZ2UgaXRcbiAgICogKGUuZy4gcm91dGVzLCBpbWFnZXMgZXRjLikgSW4gdGhhdCBjYXNlIHlvdSBjYW4gY2hhbmdlIHRoZSBga2V5YCBwcm9wIG9mXG4gICAqIHRoZSB0cmFuc2l0aW9uIGNoaWxkIGFzIHlvdSBjaGFuZ2UgaXRzIGNvbnRlbnQsIHRoaXMgd2lsbCBjYXVzZVxuICAgKiBgVHJhbnNpdGlvbkdyb3VwYCB0byB0cmFuc2l0aW9uIHRoZSBjaGlsZCBvdXQgYW5kIGJhY2sgaW4uXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgcHJvcCB0aGF0IGVuYWJsZXMgb3IgZGlzYWJsZXMgYXBwZWFyIGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGFwcGVhcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgcHJvcCB0aGF0IGVuYWJsZXMgb3IgZGlzYWJsZXMgZW50ZXIgYW5pbWF0aW9uc1xuICAgKiBmb3IgYWxsIGNoaWxkcmVuLiBOb3RlIHRoYXQgc3BlY2lmeWluZyB0aGlzIHdpbGwgb3ZlcnJpZGUgYW55IGRlZmF1bHRzIHNldFxuICAgKiBvbiBpbmRpdmlkdWFsIGNoaWxkcmVuIFRyYW5zaXRpb25zLlxuICAgKi9cbiAgZW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGV4aXQgYW5pbWF0aW9uc1xuICAgKiBmb3IgYWxsIGNoaWxkcmVuLiBOb3RlIHRoYXQgc3BlY2lmeWluZyB0aGlzIHdpbGwgb3ZlcnJpZGUgYW55IGRlZmF1bHRzIHNldFxuICAgKiBvbiBpbmRpdmlkdWFsIGNoaWxkcmVuIFRyYW5zaXRpb25zLlxuICAgKi9cbiAgZXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFlvdSBtYXkgbmVlZCB0byBhcHBseSByZWFjdGl2ZSB1cGRhdGVzIHRvIGEgY2hpbGQgYXMgaXQgaXMgZXhpdGluZy5cbiAgICogVGhpcyBpcyBnZW5lcmFsbHkgZG9uZSBieSB1c2luZyBgY2xvbmVFbGVtZW50YCBob3dldmVyIGluIHRoZSBjYXNlIG9mIGFuIGV4aXRpbmdcbiAgICogY2hpbGQgdGhlIGVsZW1lbnQgaGFzIGFscmVhZHkgYmVlbiByZW1vdmVkIGFuZCBub3QgYWNjZXNzaWJsZSB0byB0aGUgY29uc3VtZXIuXG4gICAqXG4gICAqIElmIHlvdSBkbyBuZWVkIHRvIHVwZGF0ZSBhIGNoaWxkIGFzIGl0IGxlYXZlcyB5b3UgY2FuIHByb3ZpZGUgYSBgY2hpbGRGYWN0b3J5YFxuICAgKiB0byB3cmFwIGV2ZXJ5IGNoaWxkLCBldmVuIHRoZSBvbmVzIHRoYXQgYXJlIGxlYXZpbmcuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKGNoaWxkOiBSZWFjdEVsZW1lbnQpIC0+IFJlYWN0RWxlbWVudFxuICAgKi9cbiAgY2hpbGRGYWN0b3J5OiBQcm9wVHlwZXMuZnVuY1xufSA6IHt9O1xuVHJhbnNpdGlvbkdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbmV4cG9ydCBkZWZhdWx0IFRyYW5zaXRpb25Hcm91cDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL1RyYW5zaXRpb25Hcm91cC5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LiAoJyArIGVyICsgJyknKTtcbiAgICAgICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2UgaWYgKGxpc3RlbmVycykge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgaWYgKHRoaXMuX2V2ZW50cykge1xuICAgIHZhciBldmxpc3RlbmVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oZXZsaXN0ZW5lcikpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChldmxpc3RlbmVyKVxuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBCb290c3RyYXBUYWJsZSBmcm9tICcuL3NyYy9ib290c3RyYXAtdGFibGUnO1xuaW1wb3J0IHdpdGhDb250ZXh0IGZyb20gJy4vc3JjL2NvbnRleHRzJztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbnRleHQoQm9vdHN0cmFwVGFibGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9pbmRleC5qcyIsIi8qIGVzbGludCBjYW1lbGNhc2U6IDAgKi9cbi8qIGVzbGludCBhcnJvdy1ib2R5LXN0eWxlOiAwICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBGaWx0ZXJzIGZyb20gJy4vZmlsdGVycyc7XG5pbXBvcnQgQ2FwdGlvbiBmcm9tICcuL2NhcHRpb24nO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi9ib2R5JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xuaW1wb3J0IFByb3BzQmFzZVJlc29sdmVyIGZyb20gJy4vcHJvcHMtcmVzb2x2ZXInO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vY29uc3QnO1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5cbmNsYXNzIEJvb3RzdHJhcFRhYmxlIGV4dGVuZHMgUHJvcHNCYXNlUmVzb2x2ZXIoQ29tcG9uZW50KSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMudmFsaWRhdGVQcm9wcygpO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5vbkRhdGFTaXplQ2hhbmdlICYmICFuZXh0UHJvcHMucGFnaW5hdGlvbikge1xuICAgICAgaWYgKG5leHRQcm9wcy5kYXRhLmxlbmd0aCAhPT0gdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCkge1xuICAgICAgICBuZXh0UHJvcHMub25EYXRhU2l6ZUNoYW5nZSh7IGRhdGFTaXplOiBuZXh0UHJvcHMuZGF0YS5sZW5ndGggfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRXhwb3NlZCBBUElzXG4gIGdldERhdGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZVJvd3MoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxvYWRpbmcsIG92ZXJsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG92ZXJsYXkpIHtcbiAgICAgIGNvbnN0IExvYWRpbmdPdmVybGF5ID0gb3ZlcmxheShsb2FkaW5nKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMb2FkaW5nT3ZlcmxheT5cbiAgICAgICAgICB7IHRoaXMucmVuZGVyVGFibGUoKSB9XG4gICAgICAgIDwvTG9hZGluZ092ZXJsYXk+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJUYWJsZSgpO1xuICB9XG5cbiAgcmVuZGVyVGFibGUoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29sdW1ucyxcbiAgICAgIGtleUZpZWxkLFxuICAgICAgdGFiSW5kZXhDZWxsLFxuICAgICAgaWQsXG4gICAgICBjbGFzc2VzLFxuICAgICAgYm9vdHN0cmFwNCxcbiAgICAgIHN0cmlwZWQsXG4gICAgICBob3ZlcixcbiAgICAgIGJvcmRlcmVkLFxuICAgICAgY29uZGVuc2VkLFxuICAgICAgbm9EYXRhSW5kaWNhdGlvbixcbiAgICAgIGNhcHRpb24sXG4gICAgICByb3dTdHlsZSxcbiAgICAgIHJvd0NsYXNzZXMsXG4gICAgICB3cmFwcGVyQ2xhc3NlcyxcbiAgICAgIHJvd0V2ZW50cyxcbiAgICAgIHNlbGVjdFJvdyxcbiAgICAgIGV4cGFuZFJvdyxcbiAgICAgIGNlbGxFZGl0LFxuICAgICAgZmlsdGVyUG9zaXRpb25cbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHRhYmxlV3JhcHBlckNsYXNzID0gY3MoJ3JlYWN0LWJvb3RzdHJhcC10YWJsZScsIHdyYXBwZXJDbGFzc2VzKTtcblxuICAgIGNvbnN0IHRhYmxlQ2xhc3MgPSBjcygndGFibGUnLCB7XG4gICAgICAndGFibGUtc3RyaXBlZCc6IHN0cmlwZWQsXG4gICAgICAndGFibGUtaG92ZXInOiBob3ZlcixcbiAgICAgICd0YWJsZS1ib3JkZXJlZCc6IGJvcmRlcmVkLFxuICAgICAgW2Jvb3RzdHJhcDQgPyAndGFibGUtc20nIDogJ3RhYmxlLWNvbmRlbnNlZCddOiBjb25kZW5zZWRcbiAgICB9LCBjbGFzc2VzKTtcblxuICAgIGNvbnN0IGhhc0ZpbHRlcnMgPSBjb2x1bW5zLnNvbWUoY29sID0+IGNvbC5maWx0ZXIgfHwgY29sLmZpbHRlclJlbmRlcmVyKTtcblxuICAgIGNvbnN0IGhhc0Zvb3RlciA9IF8uZmlsdGVyKGNvbHVtbnMsIGNvbCA9PiBfLmhhcyhjb2wsICdmb290ZXInKSkubGVuZ3RoID4gMDtcblxuICAgIGNvbnN0IHRhYmxlQ2FwdGlvbiA9IChcbiAgICAgIGNhcHRpb24gJiYgPENhcHRpb24gYm9vdHN0cmFwND17IGJvb3RzdHJhcDQgfT57IGNhcHRpb24gfTwvQ2FwdGlvbj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgdGFibGVXcmFwcGVyQ2xhc3MgfT5cbiAgICAgICAgPHRhYmxlIGlkPXsgaWQgfSBjbGFzc05hbWU9eyB0YWJsZUNsYXNzIH0+XG4gICAgICAgICAgeyB0YWJsZUNhcHRpb24gfVxuICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgIGNvbHVtbnM9eyBjb2x1bW5zIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17IHRoaXMucHJvcHMuaGVhZGVyQ2xhc3NlcyB9XG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3Nlcz17IHRoaXMucHJvcHMuaGVhZGVyV3JhcHBlckNsYXNzZXMgfVxuICAgICAgICAgICAgc29ydEZpZWxkPXsgdGhpcy5wcm9wcy5zb3J0RmllbGQgfVxuICAgICAgICAgICAgc29ydE9yZGVyPXsgdGhpcy5wcm9wcy5zb3J0T3JkZXIgfVxuICAgICAgICAgICAgb25Tb3J0PXsgdGhpcy5wcm9wcy5vblNvcnQgfVxuICAgICAgICAgICAgZ2xvYmFsU29ydENhcmV0PXsgdGhpcy5wcm9wcy5zb3J0ICYmIHRoaXMucHJvcHMuc29ydC5zb3J0Q2FyZXQgfVxuICAgICAgICAgICAgb25GaWx0ZXI9eyB0aGlzLnByb3BzLm9uRmlsdGVyIH1cbiAgICAgICAgICAgIGN1cnJGaWx0ZXJzPXsgdGhpcy5wcm9wcy5jdXJyRmlsdGVycyB9XG4gICAgICAgICAgICBvbkV4dGVybmFsRmlsdGVyPXsgdGhpcy5wcm9wcy5vbkV4dGVybmFsRmlsdGVyIH1cbiAgICAgICAgICAgIHNlbGVjdFJvdz17IHNlbGVjdFJvdyB9XG4gICAgICAgICAgICBleHBhbmRSb3c9eyBleHBhbmRSb3cgfVxuICAgICAgICAgICAgZmlsdGVyUG9zaXRpb249eyBmaWx0ZXJQb3NpdGlvbiB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7aGFzRmlsdGVycyAmJiBmaWx0ZXJQb3NpdGlvbiAhPT0gQ29uc3QuRklMVEVSU19QT1NJVElPTl9JTkxJTkUgJiYgKFxuICAgICAgICAgICAgPEZpbHRlcnNcbiAgICAgICAgICAgICAgY29sdW1ucz17IGNvbHVtbnMgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9eyB0aGlzLnByb3BzLmZpbHRlcnNDbGFzc2VzIH1cbiAgICAgICAgICAgICAgb25Tb3J0PXsgdGhpcy5wcm9wcy5vblNvcnQgfVxuICAgICAgICAgICAgICBvbkZpbHRlcj17IHRoaXMucHJvcHMub25GaWx0ZXIgfVxuICAgICAgICAgICAgICBjdXJyRmlsdGVycz17IHRoaXMucHJvcHMuY3VyckZpbHRlcnMgfVxuICAgICAgICAgICAgICBmaWx0ZXJQb3NpdGlvbj17IHRoaXMucHJvcHMuZmlsdGVyUG9zaXRpb24gfVxuICAgICAgICAgICAgICBvbkV4dGVybmFsRmlsdGVyPXsgdGhpcy5wcm9wcy5vbkV4dGVybmFsRmlsdGVyIH1cbiAgICAgICAgICAgICAgc2VsZWN0Um93PXsgc2VsZWN0Um93IH1cbiAgICAgICAgICAgICAgZXhwYW5kUm93PXsgZXhwYW5kUm93IH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Qm9keVxuICAgICAgICAgICAgY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5ib2R5Q2xhc3NlcyB9XG4gICAgICAgICAgICBkYXRhPXsgdGhpcy5nZXREYXRhKCkgfVxuICAgICAgICAgICAga2V5RmllbGQ9eyBrZXlGaWVsZCB9XG4gICAgICAgICAgICB0YWJJbmRleENlbGw9eyB0YWJJbmRleENlbGwgfVxuICAgICAgICAgICAgY29sdW1ucz17IGNvbHVtbnMgfVxuICAgICAgICAgICAgaXNFbXB0eT17IHRoaXMuaXNFbXB0eSgpIH1cbiAgICAgICAgICAgIHZpc2libGVDb2x1bW5TaXplPXsgdGhpcy52aXNpYmxlQ29sdW1uU2l6ZSgpIH1cbiAgICAgICAgICAgIG5vRGF0YUluZGljYXRpb249eyBub0RhdGFJbmRpY2F0aW9uIH1cbiAgICAgICAgICAgIGNlbGxFZGl0PXsgY2VsbEVkaXQgfVxuICAgICAgICAgICAgc2VsZWN0Um93PXsgc2VsZWN0Um93IH1cbiAgICAgICAgICAgIGV4cGFuZFJvdz17IGV4cGFuZFJvdyB9XG4gICAgICAgICAgICByb3dTdHlsZT17IHJvd1N0eWxlIH1cbiAgICAgICAgICAgIHJvd0NsYXNzZXM9eyByb3dDbGFzc2VzIH1cbiAgICAgICAgICAgIHJvd0V2ZW50cz17IHJvd0V2ZW50cyB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7aGFzRm9vdGVyICYmIChcbiAgICAgICAgICAgIDxGb290ZXJcbiAgICAgICAgICAgICAgZGF0YT17IHRoaXMuZ2V0RGF0YSgpIH1cbiAgICAgICAgICAgICAgY29sdW1ucz17IGNvbHVtbnMgfVxuICAgICAgICAgICAgICBzZWxlY3RSb3c9eyBzZWxlY3RSb3cgfVxuICAgICAgICAgICAgICBleHBhbmRSb3c9eyBleHBhbmRSb3cgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9eyB0aGlzLnByb3BzLmZvb3RlckNsYXNzZXMgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Cb290c3RyYXBUYWJsZS5wcm9wVHlwZXMgPSB7XG4gIGtleUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgYm9vdHN0cmFwNDogUHJvcFR5cGVzLmJvb2wsXG4gIHJlbW90ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcGFnaW5hdGlvbjogUHJvcFR5cGVzLmJvb2xcbiAgfSldKSxcbiAgbm9EYXRhSW5kaWNhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5mdW5jXSksXG4gIHN0cmlwZWQ6IFByb3BUeXBlcy5ib29sLFxuICBib3JkZXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGhvdmVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgdGFiSW5kZXhDZWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlYWRlckNsYXNzZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGJvZHlDbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3cmFwcGVyQ2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVhZGVyV3JhcHBlckNsYXNzZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbmRlbnNlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNhcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ub2RlLFxuICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgXSksXG4gIHBhZ2luYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gIGZpbHRlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgY2VsbEVkaXQ6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNlbGVjdFJvdzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBtb2RlOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEUsXG4gICAgICBDb25zdC5ST1dfU0VMRUNUX01VTFRJUExFLFxuICAgICAgQ29uc3QuUk9XX1NFTEVDVF9ESVNBQkxFRFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gICAgY2xpY2tUb1NlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xpY2tUb0V4cGFuZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xpY2tUb0VkaXQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGhpZGVTZWxlY3RBbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdEFsbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgY2xhc3NlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBub25TZWxlY3RhYmxlOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgbm9uU2VsZWN0YWJsZVN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIG5vblNlbGVjdGFibGVDbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGJnQ29sb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgaGlkZVNlbGVjdENvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VsZWN0aW9uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNlbGVjdGlvbkhlYWRlclJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoZWFkZXJDb2x1bW5TdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBzZWxlY3RDb2x1bW5TdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBzZWxlY3RDb2x1bW5Qb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIENvbnN0LklORElDQVRPUl9QT1NJVElPTl9MRUZULFxuICAgICAgQ29uc3QuSU5ESUNBVE9SX1BPU0lUSU9OX1JJR0hUXG4gICAgXSlcbiAgfSksXG4gIGV4cGFuZFJvdzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICByZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZXhwYW5kZWQ6IFByb3BUeXBlcy5hcnJheSxcbiAgICBvbkV4cGFuZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25FeHBhbmRBbGw6IFByb3BUeXBlcy5mdW5jLFxuICAgIG5vbkV4cGFuZGFibGU6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzaG93RXhwYW5kQ29sdW1uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbmx5T25lRXhwYW5kaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBleHBhbmRCeUNvbHVtbk9ubHk6IFByb3BUeXBlcy5ib29sLFxuICAgIGV4cGFuZENvbHVtblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBleHBhbmRIZWFkZXJDb2x1bW5SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZXhwYW5kQ29sdW1uUG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBDb25zdC5JTkRJQ0FUT1JfUE9TSVRJT05fTEVGVCxcbiAgICAgIENvbnN0LklORElDQVRPUl9QT1NJVElPTl9SSUdIVFxuICAgIF0pLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBwYXJlbnRDbGFzc05hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSlcbiAgfSksXG4gIHJvd1N0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICByb3dFdmVudHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIHJvd0NsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gIGZpbHRlcnNDbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWx0ZXJQb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX1RPUCxcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX0lOTElORSxcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX0JPVFRPTVxuICBdKSxcbiAgZm9vdGVyQ2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFNvcnRlZDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBkYXRhRmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0RFU0MsIENvbnN0LlNPUlRfQVNDXSkuaXNSZXF1aXJlZFxuICB9KSksXG4gIHNvcnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgZGF0YUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9yZGVyOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LlNPUlRfREVTQywgQ29uc3QuU09SVF9BU0NdKSxcbiAgICBzb3J0RnVuYzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc29ydENhcmV0OiBQcm9wVHlwZXMuZnVuY1xuICB9KSxcbiAgZGVmYXVsdFNvcnREaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbQ29uc3QuU09SVF9ERVNDLCBDb25zdC5TT1JUX0FTQ10pLFxuICBvdmVybGF5OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25UYWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU29ydDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25FeHRlcm5hbEZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRGF0YVNpemVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvLyBJbmplY3QgZnJvbSB0b29sa2l0XG4gIHNlYXJjaDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlYXJjaENvbnRleHQ6IFByb3BUeXBlcy5mdW5jXG4gIH0pLFxuICBzZXREZXBlbmRlbmN5TW9kdWxlczogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbkJvb3RzdHJhcFRhYmxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgYm9vdHN0cmFwNDogZmFsc2UsXG4gIHJlbW90ZTogZmFsc2UsXG4gIHN0cmlwZWQ6IGZhbHNlLFxuICBib3JkZXJlZDogdHJ1ZSxcbiAgaG92ZXI6IGZhbHNlLFxuICBjb25kZW5zZWQ6IGZhbHNlLFxuICBub0RhdGFJbmRpY2F0aW9uOiBudWxsLFxuICBzZWxlY3RSb3c6IHtcbiAgICBtb2RlOiBDb25zdC5ST1dfU0VMRUNUX0RJU0FCTEVELFxuICAgIHNlbGVjdGVkOiBbXSxcbiAgICBoaWRlU2VsZWN0Q29sdW1uOiB0cnVlXG4gIH0sXG4gIGV4cGFuZFJvdzoge1xuICAgIHJlbmRlcmVyOiB1bmRlZmluZWQsXG4gICAgZXhwYW5kZWQ6IFtdLFxuICAgIG5vbkV4cGFuZGFibGU6IFtdXG4gIH0sXG4gIGNlbGxFZGl0OiB7XG4gICAgbW9kZTogbnVsbCxcbiAgICBub25FZGl0YWJsZVJvd3M6IFtdXG4gIH0sXG4gIGZpbHRlclBvc2l0aW9uOiBDb25zdC5GSUxURVJTX1BPU0lUSU9OX0lOTElORVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9vdHN0cmFwVGFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9ib290c3RyYXAtdGFibGUuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0KCkge31cbmVtcHR5RnVuY3Rpb25XaXRoUmVzZXQucmVzZXRXYXJuaW5nQ2FjaGUgPSBlbXB0eUZ1bmN0aW9uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgZWxlbWVudFR5cGU6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbSxcblxuICAgIGNoZWNrUHJvcFR5cGVzOiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LFxuICAgIHJlc2V0V2FybmluZ0NhY2hlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgSGVhZGVyQ2VsbCBmcm9tICcuL2hlYWRlci1jZWxsJztcbmltcG9ydCBTZWxlY3Rpb25IZWFkZXJDZWxsIGZyb20gJy4vcm93LXNlbGVjdGlvbi9zZWxlY3Rpb24taGVhZGVyLWNlbGwnO1xuaW1wb3J0IEV4cGFuZEhlYWRlckNlbGwgZnJvbSAnLi9yb3ctZXhwYW5kL2V4cGFuZC1oZWFkZXItY2VsbCc7XG5pbXBvcnQgd2l0aEhlYWRlclNlbGVjdGlvbiBmcm9tICcuL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWhlYWRlci1jZWxsLWNvbnN1bWVyJztcbmltcG9ydCB3aXRoSGVhZGVyRXhwYW5zaW9uIGZyb20gJy4vcm93LWV4cGFuZC9leHBhbmQtaGVhZGVyLWNlbGwtY29uc3VtZXInO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vY29uc3QnO1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSxcbiAgICBjb2x1bW5zLFxuICAgIG9uU29ydCxcbiAgICBvbkZpbHRlcixcbiAgICBzb3J0RmllbGQsXG4gICAgc29ydE9yZGVyLFxuICAgIHNlbGVjdFJvdyxcbiAgICBleHBhbmRSb3csXG4gICAgY3VyckZpbHRlcnMsXG4gICAgb25FeHRlcm5hbEZpbHRlcixcbiAgICBmaWx0ZXJQb3NpdGlvbixcbiAgICBnbG9iYWxTb3J0Q2FyZXQsXG4gICAgd3JhcHBlckNsYXNzZXNcbiAgfSA9IHByb3BzO1xuXG4gIGxldCBTZWxlY3Rpb25IZWFkZXJDZWxsQ29tcCA9ICgpID0+IG51bGw7XG4gIGxldCBFeHBhbnNpb25IZWFkZXJDZWxsQ29tcCA9ICgpID0+IG51bGw7XG5cbiAgaWYgKGV4cGFuZFJvdy5zaG93RXhwYW5kQ29sdW1uKSB7XG4gICAgRXhwYW5zaW9uSGVhZGVyQ2VsbENvbXAgPSB3aXRoSGVhZGVyRXhwYW5zaW9uKEV4cGFuZEhlYWRlckNlbGwpO1xuICB9XG5cbiAgaWYgKHNlbGVjdFJvdykge1xuICAgIFNlbGVjdGlvbkhlYWRlckNlbGxDb21wID0gd2l0aEhlYWRlclNlbGVjdGlvbihTZWxlY3Rpb25IZWFkZXJDZWxsKTtcbiAgfVxuXG4gIGNvbnN0IGlzUmVuZGVyRnVuY3Rpb25Db2x1bW5JbkxlZnQgPSAoXG4gICAgcG9zaXRpb24gPSBDb25zdC5JTkRJQ0FUT1JfUE9TSVRJT05fTEVGVFxuICApID0+IHBvc2l0aW9uID09PSBDb25zdC5JTkRJQ0FUT1JfUE9TSVRJT05fTEVGVDtcblxuICBjb25zdCBjaGlsZHJlbnMgPSBbXG4gICAgY29sdW1ucy5tYXAoKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgY3VyclNvcnQgPSBjb2x1bW4uZGF0YUZpZWxkID09PSBzb3J0RmllbGQ7XG4gICAgICBjb25zdCBpc0xhc3RTb3J0aW5nID0gY29sdW1uLmRhdGFGaWVsZCA9PT0gc29ydEZpZWxkO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8SGVhZGVyQ2VsbFxuICAgICAgICAgIGluZGV4PXsgaSB9XG4gICAgICAgICAga2V5PXsgY29sdW1uLmRhdGFGaWVsZCB9XG4gICAgICAgICAgY29sdW1uPXsgY29sdW1uIH1cbiAgICAgICAgICBvblNvcnQ9eyBvblNvcnQgfVxuICAgICAgICAgIHNvcnRpbmc9eyBjdXJyU29ydCB9XG4gICAgICAgICAgc29ydE9yZGVyPXsgc29ydE9yZGVyIH1cbiAgICAgICAgICBnbG9iYWxTb3J0Q2FyZXQ9eyBnbG9iYWxTb3J0Q2FyZXQgfVxuICAgICAgICAgIGlzTGFzdFNvcnRpbmc9eyBpc0xhc3RTb3J0aW5nIH1cbiAgICAgICAgICBvbkZpbHRlcj17IG9uRmlsdGVyIH1cbiAgICAgICAgICBjdXJyRmlsdGVycz17IGN1cnJGaWx0ZXJzIH1cbiAgICAgICAgICBvbkV4dGVybmFsRmlsdGVyPXsgb25FeHRlcm5hbEZpbHRlciB9XG4gICAgICAgICAgZmlsdGVyUG9zaXRpb249eyBmaWx0ZXJQb3NpdGlvbiB9XG4gICAgICAgIC8+KTtcbiAgICB9KVxuICBdO1xuXG4gIGlmICghc2VsZWN0Um93LmhpZGVTZWxlY3RDb2x1bW4pIHtcbiAgICBpZiAoaXNSZW5kZXJGdW5jdGlvbkNvbHVtbkluTGVmdChzZWxlY3RSb3cuc2VsZWN0Q29sdW1uUG9zaXRpb24pKSB7XG4gICAgICBjaGlsZHJlbnMudW5zaGlmdCg8U2VsZWN0aW9uSGVhZGVyQ2VsbENvbXAga2V5PVwic2VsZWN0aW9uXCIgLz4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZHJlbnMucHVzaCg8U2VsZWN0aW9uSGVhZGVyQ2VsbENvbXAga2V5PVwic2VsZWN0aW9uXCIgLz4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChleHBhbmRSb3cuc2hvd0V4cGFuZENvbHVtbikge1xuICAgIGlmIChpc1JlbmRlckZ1bmN0aW9uQ29sdW1uSW5MZWZ0KGV4cGFuZFJvdy5leHBhbmRDb2x1bW5Qb3NpdGlvbikpIHtcbiAgICAgIGNoaWxkcmVucy51bnNoaWZ0KDxFeHBhbnNpb25IZWFkZXJDZWxsQ29tcCBrZXk9XCJleHBhbnNpb25cIiAvPik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkcmVucy5wdXNoKDxFeHBhbnNpb25IZWFkZXJDZWxsQ29tcCBrZXk9XCJleHBhbnNpb25cIiAvPik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dGhlYWQgY2xhc3NOYW1lPXsgd3JhcHBlckNsYXNzZXMgfT5cbiAgICAgIDx0ciBjbGFzc05hbWU9eyBjbGFzc05hbWUgfT5cbiAgICAgICAgeyBjaGlsZHJlbnMgfVxuICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICApO1xufTtcblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIG9uU29ydDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgc29ydEZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzb3J0T3JkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdFJvdzogUHJvcFR5cGVzLm9iamVjdCxcbiAgY3VyckZpbHRlcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIG9uRXh0ZXJuYWxGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBnbG9iYWxTb3J0Q2FyZXQ6IFByb3BUeXBlcy5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBwZXJDbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleHBhbmRSb3c6IFByb3BUeXBlcy5vYmplY3QsXG4gIGZpbHRlclBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIENvbnN0LkZJTFRFUlNfUE9TSVRJT05fVE9QLFxuICAgIENvbnN0LkZJTFRFUlNfUE9TSVRJT05fSU5MSU5FLFxuICAgIENvbnN0LkZJTFRFUlNfUE9TSVRJT05fQk9UVE9NXG4gIF0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9oZWFkZXIuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IENvbnN0IGZyb20gJy4vY29uc3QnO1xuaW1wb3J0IFNvcnRTeW1ib2wgZnJvbSAnLi9zb3J0L3N5bWJvbCc7XG5pbXBvcnQgU29ydENhcmV0IGZyb20gJy4vc29ydC9jYXJldCc7XG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBldmVudERlbGVnYXRlciBmcm9tICcuL2NlbGwtZXZlbnQtZGVsZWdhdGVyJztcblxuXG5jbGFzcyBIZWFkZXJDZWxsIGV4dGVuZHMgZXZlbnREZWxlZ2F0ZXIoUmVhY3QuQ29tcG9uZW50KSB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjb2x1bW4sXG4gICAgICBpbmRleCxcbiAgICAgIG9uU29ydCxcbiAgICAgIHNvcnRpbmcsXG4gICAgICBzb3J0T3JkZXIsXG4gICAgICBpc0xhc3RTb3J0aW5nLFxuICAgICAgb25GaWx0ZXIsXG4gICAgICBjdXJyRmlsdGVycyxcbiAgICAgIGZpbHRlclBvc2l0aW9uLFxuICAgICAgb25FeHRlcm5hbEZpbHRlcixcbiAgICAgIGdsb2JhbFNvcnRDYXJldFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qge1xuICAgICAgdGV4dCxcbiAgICAgIHNvcnQsXG4gICAgICBzb3J0Q2FyZXQsXG4gICAgICBmaWx0ZXIsXG4gICAgICBmaWx0ZXJSZW5kZXJlcixcbiAgICAgIGhlYWRlclRpdGxlLFxuICAgICAgaGVhZGVyQWxpZ24sXG4gICAgICBoZWFkZXJGb3JtYXR0ZXIsXG4gICAgICBoZWFkZXJFdmVudHMsXG4gICAgICBoZWFkZXJDbGFzc2VzLFxuICAgICAgaGVhZGVyU3R5bGUsXG4gICAgICBoZWFkZXJBdHRycyxcbiAgICAgIGhlYWRlclNvcnRpbmdDbGFzc2VzLFxuICAgICAgaGVhZGVyU29ydGluZ1N0eWxlXG4gICAgfSA9IGNvbHVtbjtcblxuICAgIGNvbnN0IHNvcnRDYXJldGZ1bmMgPSBzb3J0Q2FyZXQgfHwgZ2xvYmFsU29ydENhcmV0O1xuXG4gICAgY29uc3QgZGVsZWdhdGVFdmVudHMgPSB0aGlzLmRlbGVnYXRlKGhlYWRlckV2ZW50cyk7XG5cbiAgICBjb25zdCBjdXN0b21BdHRycyA9IF8uaXNGdW5jdGlvbihoZWFkZXJBdHRycylcbiAgICAgID8gaGVhZGVyQXR0cnMoY29sdW1uLCBpbmRleClcbiAgICAgIDogKGhlYWRlckF0dHJzIHx8IHt9KTtcblxuICAgIGNvbnN0IGNlbGxBdHRycyA9IHtcbiAgICAgIC4uLmN1c3RvbUF0dHJzLFxuICAgICAgLi4uZGVsZWdhdGVFdmVudHMsXG4gICAgICB0YWJJbmRleDogXy5pc0RlZmluZWQoY3VzdG9tQXR0cnMudGFiSW5kZXgpID8gY3VzdG9tQXR0cnMudGFiSW5kZXggOiAwXG4gICAgfTtcblxuICAgIGxldCBzb3J0U3ltYm9sO1xuICAgIGxldCBmaWx0ZXJFbG07XG4gICAgbGV0IGNlbGxTdHlsZSA9IHt9O1xuICAgIGxldCBjZWxsQ2xhc3NlcyA9IF8uaXNGdW5jdGlvbihoZWFkZXJDbGFzc2VzKSA/IGhlYWRlckNsYXNzZXMoY29sdW1uLCBpbmRleCkgOiBoZWFkZXJDbGFzc2VzO1xuXG4gICAgaWYgKGhlYWRlclN0eWxlKSB7XG4gICAgICBjZWxsU3R5bGUgPSBfLmlzRnVuY3Rpb24oaGVhZGVyU3R5bGUpID8gaGVhZGVyU3R5bGUoY29sdW1uLCBpbmRleCkgOiBoZWFkZXJTdHlsZTtcbiAgICAgIGNlbGxTdHlsZSA9IGNlbGxTdHlsZSA/IHsgLi4uY2VsbFN0eWxlIH0gOiBjZWxsU3R5bGU7XG4gICAgfVxuXG4gICAgaWYgKGhlYWRlclRpdGxlKSB7XG4gICAgICBjZWxsQXR0cnMudGl0bGUgPSBfLmlzRnVuY3Rpb24oaGVhZGVyVGl0bGUpID8gaGVhZGVyVGl0bGUoY29sdW1uLCBpbmRleCkgOiB0ZXh0O1xuICAgIH1cblxuICAgIGlmIChoZWFkZXJBbGlnbikge1xuICAgICAgY2VsbFN0eWxlLnRleHRBbGlnbiA9IF8uaXNGdW5jdGlvbihoZWFkZXJBbGlnbikgPyBoZWFkZXJBbGlnbihjb2x1bW4sIGluZGV4KSA6IGhlYWRlckFsaWduO1xuICAgIH1cblxuICAgIGlmIChzb3J0KSB7XG4gICAgICBjb25zdCBjdXN0b21DbGljayA9IGNlbGxBdHRycy5vbkNsaWNrO1xuICAgICAgY2VsbEF0dHJzWydhcmlhLWxhYmVsJ10gPSBzb3J0aW5nID8gYCR7dGV4dH0gc29ydCAke3NvcnRPcmRlcn1gIDogYCR7dGV4dH0gc29ydGFibGVgO1xuICAgICAgY2VsbEF0dHJzLm9uS2V5VXAgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICBvblNvcnQoY29sdW1uKTtcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGN1c3RvbUNsaWNrKSkgY3VzdG9tQ2xpY2soZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjZWxsQXR0cnMub25DbGljayA9IChlKSA9PiB7XG4gICAgICAgIG9uU29ydChjb2x1bW4pO1xuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGN1c3RvbUNsaWNrKSkgY3VzdG9tQ2xpY2soZSk7XG4gICAgICB9O1xuICAgICAgY2VsbEF0dHJzLmNsYXNzTmFtZSA9IGNzKGNlbGxBdHRycy5jbGFzc05hbWUsICdzb3J0YWJsZScpO1xuXG4gICAgICBpZiAoc29ydGluZykge1xuICAgICAgICBzb3J0U3ltYm9sID0gc29ydENhcmV0ZnVuYyA/XG4gICAgICAgICAgc29ydENhcmV0ZnVuYyhzb3J0T3JkZXIsIGNvbHVtbikgOlxuICAgICAgICAgIDxTb3J0Q2FyZXQgb3JkZXI9eyBzb3J0T3JkZXIgfSAvPjtcblxuICAgICAgICAvLyBhcHBlbmQgY3VzdG9taXplZCBjbGFzc2VzIG9yIHN0eWxlIGlmIHRhYmxlIHdhcyBzb3J0aW5nIGJhc2VkIG9uIHRoZSBjdXJyZW50IGNvbHVtbi5cbiAgICAgICAgY2VsbENsYXNzZXMgPSBjcyhcbiAgICAgICAgICBjZWxsQ2xhc3NlcyxcbiAgICAgICAgICBfLmlzRnVuY3Rpb24oaGVhZGVyU29ydGluZ0NsYXNzZXMpXG4gICAgICAgICAgICA/IGhlYWRlclNvcnRpbmdDbGFzc2VzKGNvbHVtbiwgc29ydE9yZGVyLCBpc0xhc3RTb3J0aW5nLCBpbmRleClcbiAgICAgICAgICAgIDogaGVhZGVyU29ydGluZ0NsYXNzZXNcbiAgICAgICAgKTtcblxuICAgICAgICBjZWxsU3R5bGUgPSB7XG4gICAgICAgICAgLi4uY2VsbFN0eWxlLFxuICAgICAgICAgIC4uLl8uaXNGdW5jdGlvbihoZWFkZXJTb3J0aW5nU3R5bGUpXG4gICAgICAgICAgICA/IGhlYWRlclNvcnRpbmdTdHlsZShjb2x1bW4sIHNvcnRPcmRlciwgaXNMYXN0U29ydGluZywgaW5kZXgpXG4gICAgICAgICAgICA6IGhlYWRlclNvcnRpbmdTdHlsZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc29ydFN5bWJvbCA9IHNvcnRDYXJldGZ1bmMgPyBzb3J0Q2FyZXRmdW5jKHVuZGVmaW5lZCwgY29sdW1uKSA6IDxTb3J0U3ltYm9sIC8+O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjZWxsQ2xhc3NlcykgY2VsbEF0dHJzLmNsYXNzTmFtZSA9IGNzKGNlbGxBdHRycy5jbGFzc05hbWUsIGNlbGxDbGFzc2VzKTtcbiAgICBpZiAoIV8uaXNFbXB0eU9iamVjdChjZWxsU3R5bGUpKSBjZWxsQXR0cnMuc3R5bGUgPSBjZWxsU3R5bGU7XG5cbiAgICBpZiAoZmlsdGVyUG9zaXRpb24gPT09IENvbnN0LkZJTFRFUlNfUE9TSVRJT05fSU5MSU5FKSB7XG4gICAgICBpZiAoZmlsdGVyUmVuZGVyZXIpIHtcbiAgICAgICAgY29uc3Qgb25DdXN0b21GaWx0ZXIgPSBvbkV4dGVybmFsRmlsdGVyKGNvbHVtbiwgZmlsdGVyLnByb3BzLnR5cGUpO1xuICAgICAgICBmaWx0ZXJFbG0gPSBmaWx0ZXJSZW5kZXJlcihvbkN1c3RvbUZpbHRlciwgY29sdW1uKTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyKSB7XG4gICAgICAgIGZpbHRlckVsbSA9IChcbiAgICAgICAgICA8ZmlsdGVyLkZpbHRlclxuICAgICAgICAgICAgeyAuLi5maWx0ZXIucHJvcHMgfVxuICAgICAgICAgICAgZmlsdGVyU3RhdGU9eyBjdXJyRmlsdGVyc1tjb2x1bW4uZGF0YUZpZWxkXSB9XG4gICAgICAgICAgICBvbkZpbHRlcj17IG9uRmlsdGVyIH1cbiAgICAgICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IGhlYWRlckZvcm1hdHRlciA/XG4gICAgICBoZWFkZXJGb3JtYXR0ZXIoY29sdW1uLCBpbmRleCwgeyBzb3J0RWxlbWVudDogc29ydFN5bWJvbCwgZmlsdGVyRWxlbWVudDogZmlsdGVyRWxtIH0pIDpcbiAgICAgIHRleHQ7XG5cbiAgICBpZiAoaGVhZGVyRm9ybWF0dGVyKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCBjZWxsQXR0cnMsIGNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCBjZWxsQXR0cnMsIGNoaWxkcmVuLCBzb3J0U3ltYm9sLCBmaWx0ZXJFbG0pO1xuICB9XG59XG5cbkhlYWRlckNlbGwucHJvcFR5cGVzID0ge1xuICBjb2x1bW46IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgZGF0YUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBDb25zdC5UWVBFX1NUUklORyxcbiAgICAgIENvbnN0LlRZUEVfTlVNQkVSLFxuICAgICAgQ29uc3QuVFlQRV9CT09MRUFOLFxuICAgICAgQ29uc3QuVFlQRV9EQVRFXG4gICAgXSksXG4gICAgaXNEdW1teUZpZWxkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICAgIGhlYWRlckZvcm1hdHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmb3JtYXRFeHRyYURhdGE6IFByb3BUeXBlcy5hbnksXG4gICAgaGVhZGVyQ2xhc3NlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhlYWRlclN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhlYWRlclRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgaGVhZGVyRXZlbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGV2ZW50czogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBoZWFkZXJBbGlnbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBoZWFkZXJBdHRyczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBhdHRyczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBzb3J0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzb3J0RnVuYzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Tb3J0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBlZGl0b3I6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZWRpdGFibGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGVkaXRDZWxsU3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgZWRpdENlbGxDbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGVkaXRvclN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGVkaXRvckNsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgZWRpdG9yUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHZhbGlkYXRvcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZmlsdGVyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGZpbHRlclJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmaWx0ZXJWYWx1ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2VhcmNoYWJsZTogUHJvcFR5cGVzLmJvb2xcbiAgfSkuaXNSZXF1aXJlZCxcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgb25Tb3J0OiBQcm9wVHlwZXMuZnVuYyxcbiAgc29ydGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIHNvcnRPcmRlcjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0FTQywgQ29uc3QuU09SVF9ERVNDXSksXG4gIHNvcnRDYXJldDogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzTGFzdFNvcnRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBvbkZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGZpbHRlclBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LkZJTFRFUlNfUE9TSVRJT05fSU5MSU5FLFxuICAgIENvbnN0LkZJTFRFUlNfUE9TSVRJT05fQk9UVE9NLCBDb25zdC5GSUxURVJTX1BPU0lUSU9OX1RPUF0pLFxuICBjdXJyRmlsdGVyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgb25FeHRlcm5hbEZpbHRlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckNlbGw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9oZWFkZXItY2VsbC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb290c3RyYXBDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvYm9vdHN0cmFwJztcblxuY29uc3QgU29ydFN5bWJvbCA9ICgpID0+IChcbiAgPEJvb3RzdHJhcENvbnRleHQuQ29uc3VtZXI+XG4gICAge1xuICAgICAgKHsgYm9vdHN0cmFwNCB9KSA9PiAoYm9vdHN0cmFwNCA/IChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3JkZXItNFwiIC8+XG4gICAgICApIDogKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcmRlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRyb3B1cFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKSlcbiAgICB9XG4gIDwvQm9vdHN0cmFwQ29udGV4dC5Db25zdW1lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRTeW1ib2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zb3J0L3N5bWJvbC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vY29uc3QnO1xuaW1wb3J0IHsgQm9vdHN0cmFwQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL2Jvb3RzdHJhcCc7XG5cblxuY29uc3QgU29ydENhcmV0ID0gKHsgb3JkZXIgfSkgPT4ge1xuICBjb25zdCBvcmRlckNsYXNzID0gY3MoJ3JlYWN0LWJvb3RzdHJhcC10YWJsZS1zb3J0LW9yZGVyJywge1xuICAgIGRyb3B1cDogb3JkZXIgPT09IENvbnN0LlNPUlRfQVNDXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEJvb3RzdHJhcENvbnRleHQuQ29uc3VtZXI+XG4gICAgICB7XG4gICAgICAgICh7IGJvb3RzdHJhcDQgfSkgPT4gKGJvb3RzdHJhcDQgPyAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsgYGNhcmV0LTQtJHtvcmRlcn1gIH0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyBvcmRlckNsYXNzIH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApKVxuICAgICAgfVxuICAgIDwvQm9vdHN0cmFwQ29udGV4dC5Db25zdW1lcj5cbiAgKTtcbn07XG5cblNvcnRDYXJldC5wcm9wVHlwZXMgPSB7XG4gIG9yZGVyOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LlNPUlRfQVNDLCBDb25zdC5TT1JUX0RFU0NdKS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0Q2FyZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zb3J0L2NhcmV0LmpzIiwiLy8gICAgIFVuZGVyc2NvcmUuanMgMS45LjFcbi8vICAgICBodHRwOi8vdW5kZXJzY29yZWpzLm9yZ1xuLy8gICAgIChjKSAyMDA5LTIwMTggSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbi8vICAgICBVbmRlcnNjb3JlIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG4oZnVuY3Rpb24oKSB7XG5cbiAgLy8gQmFzZWxpbmUgc2V0dXBcbiAgLy8gLS0tLS0tLS0tLS0tLS1cblxuICAvLyBFc3RhYmxpc2ggdGhlIHJvb3Qgb2JqZWN0LCBgd2luZG93YCAoYHNlbGZgKSBpbiB0aGUgYnJvd3NlciwgYGdsb2JhbGBcbiAgLy8gb24gdGhlIHNlcnZlciwgb3IgYHRoaXNgIGluIHNvbWUgdmlydHVhbCBtYWNoaW5lcy4gV2UgdXNlIGBzZWxmYFxuICAvLyBpbnN0ZWFkIG9mIGB3aW5kb3dgIGZvciBgV2ViV29ya2VyYCBzdXBwb3J0LlxuICB2YXIgcm9vdCA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYuc2VsZiA9PT0gc2VsZiAmJiBzZWxmIHx8XG4gICAgICAgICAgICB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbC5nbG9iYWwgPT09IGdsb2JhbCAmJiBnbG9iYWwgfHxcbiAgICAgICAgICAgIHRoaXMgfHxcbiAgICAgICAgICAgIHt9O1xuXG4gIC8vIFNhdmUgdGhlIHByZXZpb3VzIHZhbHVlIG9mIHRoZSBgX2AgdmFyaWFibGUuXG4gIHZhciBwcmV2aW91c1VuZGVyc2NvcmUgPSByb290Ll87XG5cbiAgLy8gU2F2ZSBieXRlcyBpbiB0aGUgbWluaWZpZWQgKGJ1dCBub3QgZ3ppcHBlZCkgdmVyc2lvbjpcbiAgdmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsIE9ialByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIFN5bWJvbFByb3RvID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2wucHJvdG90eXBlIDogbnVsbDtcblxuICAvLyBDcmVhdGUgcXVpY2sgcmVmZXJlbmNlIHZhcmlhYmxlcyBmb3Igc3BlZWQgYWNjZXNzIHRvIGNvcmUgcHJvdG90eXBlcy5cbiAgdmFyIHB1c2ggPSBBcnJheVByb3RvLnB1c2gsXG4gICAgICBzbGljZSA9IEFycmF5UHJvdG8uc2xpY2UsXG4gICAgICB0b1N0cmluZyA9IE9ialByb3RvLnRvU3RyaW5nLFxuICAgICAgaGFzT3duUHJvcGVydHkgPSBPYmpQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuICAvLyBBbGwgKipFQ01BU2NyaXB0IDUqKiBuYXRpdmUgZnVuY3Rpb24gaW1wbGVtZW50YXRpb25zIHRoYXQgd2UgaG9wZSB0byB1c2VcbiAgLy8gYXJlIGRlY2xhcmVkIGhlcmUuXG4gIHZhciBuYXRpdmVJc0FycmF5ID0gQXJyYXkuaXNBcnJheSxcbiAgICAgIG5hdGl2ZUtleXMgPSBPYmplY3Qua2V5cyxcbiAgICAgIG5hdGl2ZUNyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbiAgLy8gTmFrZWQgZnVuY3Rpb24gcmVmZXJlbmNlIGZvciBzdXJyb2dhdGUtcHJvdG90eXBlLXN3YXBwaW5nLlxuICB2YXIgQ3RvciA9IGZ1bmN0aW9uKCl7fTtcblxuICAvLyBDcmVhdGUgYSBzYWZlIHJlZmVyZW5jZSB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QgZm9yIHVzZSBiZWxvdy5cbiAgdmFyIF8gPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgXykgcmV0dXJuIG9iajtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgXykpIHJldHVybiBuZXcgXyhvYmopO1xuICAgIHRoaXMuX3dyYXBwZWQgPSBvYmo7XG4gIH07XG5cbiAgLy8gRXhwb3J0IHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgKipOb2RlLmpzKiosIHdpdGhcbiAgLy8gYmFja3dhcmRzLWNvbXBhdGliaWxpdHkgZm9yIHRoZWlyIG9sZCBtb2R1bGUgQVBJLiBJZiB3ZSdyZSBpblxuICAvLyB0aGUgYnJvd3NlciwgYWRkIGBfYCBhcyBhIGdsb2JhbCBvYmplY3QuXG4gIC8vIChgbm9kZVR5cGVgIGlzIGNoZWNrZWQgdG8gZW5zdXJlIHRoYXQgYG1vZHVsZWBcbiAgLy8gYW5kIGBleHBvcnRzYCBhcmUgbm90IEhUTUwgZWxlbWVudHMuKVxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgJiYgIWV4cG9ydHMubm9kZVR5cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBfO1xuICAgIH1cbiAgICBleHBvcnRzLl8gPSBfO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuXyA9IF87XG4gIH1cblxuICAvLyBDdXJyZW50IHZlcnNpb24uXG4gIF8uVkVSU0lPTiA9ICcxLjkuMSc7XG5cbiAgLy8gSW50ZXJuYWwgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGVmZmljaWVudCAoZm9yIGN1cnJlbnQgZW5naW5lcykgdmVyc2lvblxuICAvLyBvZiB0aGUgcGFzc2VkLWluIGNhbGxiYWNrLCB0byBiZSByZXBlYXRlZGx5IGFwcGxpZWQgaW4gb3RoZXIgVW5kZXJzY29yZVxuICAvLyBmdW5jdGlvbnMuXG4gIHZhciBvcHRpbWl6ZUNiID0gZnVuY3Rpb24oZnVuYywgY29udGV4dCwgYXJnQ291bnQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSByZXR1cm4gZnVuYztcbiAgICBzd2l0Y2ggKGFyZ0NvdW50ID09IG51bGwgPyAzIDogYXJnQ291bnQpIHtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgdmFsdWUpO1xuICAgICAgfTtcbiAgICAgIC8vIFRoZSAyLWFyZ3VtZW50IGNhc2UgaXMgb21pdHRlZCBiZWNhdXNlIHdl4oCZcmUgbm90IHVzaW5nIGl0LlxuICAgICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICAgIH07XG4gICAgICBjYXNlIDQ6IHJldHVybiBmdW5jdGlvbihhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGJ1aWx0aW5JdGVyYXRlZTtcblxuICAvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiB0byBnZW5lcmF0ZSBjYWxsYmFja3MgdGhhdCBjYW4gYmUgYXBwbGllZCB0byBlYWNoXG4gIC8vIGVsZW1lbnQgaW4gYSBjb2xsZWN0aW9uLCByZXR1cm5pbmcgdGhlIGRlc2lyZWQgcmVzdWx0IOKAlCBlaXRoZXIgYGlkZW50aXR5YCxcbiAgLy8gYW4gYXJiaXRyYXJ5IGNhbGxiYWNrLCBhIHByb3BlcnR5IG1hdGNoZXIsIG9yIGEgcHJvcGVydHkgYWNjZXNzb3IuXG4gIHZhciBjYiA9IGZ1bmN0aW9uKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCkge1xuICAgIGlmIChfLml0ZXJhdGVlICE9PSBidWlsdGluSXRlcmF0ZWUpIHJldHVybiBfLml0ZXJhdGVlKHZhbHVlLCBjb250ZXh0KTtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIF8uaWRlbnRpdHk7XG4gICAgaWYgKF8uaXNGdW5jdGlvbih2YWx1ZSkpIHJldHVybiBvcHRpbWl6ZUNiKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCk7XG4gICAgaWYgKF8uaXNPYmplY3QodmFsdWUpICYmICFfLmlzQXJyYXkodmFsdWUpKSByZXR1cm4gXy5tYXRjaGVyKHZhbHVlKTtcbiAgICByZXR1cm4gXy5wcm9wZXJ0eSh2YWx1ZSk7XG4gIH07XG5cbiAgLy8gRXh0ZXJuYWwgd3JhcHBlciBmb3Igb3VyIGNhbGxiYWNrIGdlbmVyYXRvci4gVXNlcnMgbWF5IGN1c3RvbWl6ZVxuICAvLyBgXy5pdGVyYXRlZWAgaWYgdGhleSB3YW50IGFkZGl0aW9uYWwgcHJlZGljYXRlL2l0ZXJhdGVlIHNob3J0aGFuZCBzdHlsZXMuXG4gIC8vIFRoaXMgYWJzdHJhY3Rpb24gaGlkZXMgdGhlIGludGVybmFsLW9ubHkgYXJnQ291bnQgYXJndW1lbnQuXG4gIF8uaXRlcmF0ZWUgPSBidWlsdGluSXRlcmF0ZWUgPSBmdW5jdGlvbih2YWx1ZSwgY29udGV4dCkge1xuICAgIHJldHVybiBjYih2YWx1ZSwgY29udGV4dCwgSW5maW5pdHkpO1xuICB9O1xuXG4gIC8vIFNvbWUgZnVuY3Rpb25zIHRha2UgYSB2YXJpYWJsZSBudW1iZXIgb2YgYXJndW1lbnRzLCBvciBhIGZldyBleHBlY3RlZFxuICAvLyBhcmd1bWVudHMgYXQgdGhlIGJlZ2lubmluZyBhbmQgdGhlbiBhIHZhcmlhYmxlIG51bWJlciBvZiB2YWx1ZXMgdG8gb3BlcmF0ZVxuICAvLyBvbi4gVGhpcyBoZWxwZXIgYWNjdW11bGF0ZXMgYWxsIHJlbWFpbmluZyBhcmd1bWVudHMgcGFzdCB0aGUgZnVuY3Rpb27igJlzXG4gIC8vIGFyZ3VtZW50IGxlbmd0aCAob3IgYW4gZXhwbGljaXQgYHN0YXJ0SW5kZXhgKSwgaW50byBhbiBhcnJheSB0aGF0IGJlY29tZXNcbiAgLy8gdGhlIGxhc3QgYXJndW1lbnQuIFNpbWlsYXIgdG8gRVM24oCZcyBcInJlc3QgcGFyYW1ldGVyXCIuXG4gIHZhciByZXN0QXJndW1lbnRzID0gZnVuY3Rpb24oZnVuYywgc3RhcnRJbmRleCkge1xuICAgIHN0YXJ0SW5kZXggPSBzdGFydEluZGV4ID09IG51bGwgPyBmdW5jLmxlbmd0aCAtIDEgOiArc3RhcnRJbmRleDtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoYXJndW1lbnRzLmxlbmd0aCAtIHN0YXJ0SW5kZXgsIDApLFxuICAgICAgICAgIHJlc3QgPSBBcnJheShsZW5ndGgpLFxuICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgIGZvciAoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICByZXN0W2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleCArIHN0YXJ0SW5kZXhdO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChzdGFydEluZGV4KSB7XG4gICAgICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCByZXN0KTtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3VtZW50c1swXSwgcmVzdCk7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgcmVzdCk7XG4gICAgICB9XG4gICAgICB2YXIgYXJncyA9IEFycmF5KHN0YXJ0SW5kZXggKyAxKTtcbiAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHN0YXJ0SW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgYXJnc1tpbmRleF0gPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgfVxuICAgICAgYXJnc1tzdGFydEluZGV4XSA9IHJlc3Q7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhIG5ldyBvYmplY3QgdGhhdCBpbmhlcml0cyBmcm9tIGFub3RoZXIuXG4gIHZhciBiYXNlQ3JlYXRlID0gZnVuY3Rpb24ocHJvdG90eXBlKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KHByb3RvdHlwZSkpIHJldHVybiB7fTtcbiAgICBpZiAobmF0aXZlQ3JlYXRlKSByZXR1cm4gbmF0aXZlQ3JlYXRlKHByb3RvdHlwZSk7XG4gICAgQ3Rvci5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBDdG9yO1xuICAgIEN0b3IucHJvdG90eXBlID0gbnVsbDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBzaGFsbG93UHJvcGVydHkgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqID09IG51bGwgPyB2b2lkIDAgOiBvYmpba2V5XTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBoYXMgPSBmdW5jdGlvbihvYmosIHBhdGgpIHtcbiAgICByZXR1cm4gb2JqICE9IG51bGwgJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHBhdGgpO1xuICB9XG5cbiAgdmFyIGRlZXBHZXQgPSBmdW5jdGlvbihvYmosIHBhdGgpIHtcbiAgICB2YXIgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgICAgb2JqID0gb2JqW3BhdGhbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gbGVuZ3RoID8gb2JqIDogdm9pZCAwO1xuICB9O1xuXG4gIC8vIEhlbHBlciBmb3IgY29sbGVjdGlvbiBtZXRob2RzIHRvIGRldGVybWluZSB3aGV0aGVyIGEgY29sbGVjdGlvblxuICAvLyBzaG91bGQgYmUgaXRlcmF0ZWQgYXMgYW4gYXJyYXkgb3IgYXMgYW4gb2JqZWN0LlxuICAvLyBSZWxhdGVkOiBodHRwOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2xlbmd0aFxuICAvLyBBdm9pZHMgYSB2ZXJ5IG5hc3R5IGlPUyA4IEpJVCBidWcgb24gQVJNLTY0LiAjMjA5NFxuICB2YXIgTUFYX0FSUkFZX0lOREVYID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcbiAgdmFyIGdldExlbmd0aCA9IHNoYWxsb3dQcm9wZXJ0eSgnbGVuZ3RoJyk7XG4gIHZhciBpc0FycmF5TGlrZSA9IGZ1bmN0aW9uKGNvbGxlY3Rpb24pIHtcbiAgICB2YXIgbGVuZ3RoID0gZ2V0TGVuZ3RoKGNvbGxlY3Rpb24pO1xuICAgIHJldHVybiB0eXBlb2YgbGVuZ3RoID09ICdudW1iZXInICYmIGxlbmd0aCA+PSAwICYmIGxlbmd0aCA8PSBNQVhfQVJSQVlfSU5ERVg7XG4gIH07XG5cbiAgLy8gQ29sbGVjdGlvbiBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBUaGUgY29ybmVyc3RvbmUsIGFuIGBlYWNoYCBpbXBsZW1lbnRhdGlvbiwgYWthIGBmb3JFYWNoYC5cbiAgLy8gSGFuZGxlcyByYXcgb2JqZWN0cyBpbiBhZGRpdGlvbiB0byBhcnJheS1saWtlcy4gVHJlYXRzIGFsbFxuICAvLyBzcGFyc2UgYXJyYXktbGlrZXMgYXMgaWYgdGhleSB3ZXJlIGRlbnNlLlxuICBfLmVhY2ggPSBfLmZvckVhY2ggPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBvcHRpbWl6ZUNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB2YXIgaSwgbGVuZ3RoO1xuICAgIGlmIChpc0FycmF5TGlrZShvYmopKSB7XG4gICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlcmF0ZWUob2JqW2ldLCBpLCBvYmopO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVyYXRlZShvYmpba2V5c1tpXV0sIGtleXNbaV0sIG9iaik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSByZXN1bHRzIG9mIGFwcGx5aW5nIHRoZSBpdGVyYXRlZSB0byBlYWNoIGVsZW1lbnQuXG4gIF8ubWFwID0gXy5jb2xsZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgIGxlbmd0aCA9IChrZXlzIHx8IG9iaikubGVuZ3RoLFxuICAgICAgICByZXN1bHRzID0gQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY3VycmVudEtleSA9IGtleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgcmVzdWx0c1tpbmRleF0gPSBpdGVyYXRlZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIHJlZHVjaW5nIGZ1bmN0aW9uIGl0ZXJhdGluZyBsZWZ0IG9yIHJpZ2h0LlxuICB2YXIgY3JlYXRlUmVkdWNlID0gZnVuY3Rpb24oZGlyKSB7XG4gICAgLy8gV3JhcCBjb2RlIHRoYXQgcmVhc3NpZ25zIGFyZ3VtZW50IHZhcmlhYmxlcyBpbiBhIHNlcGFyYXRlIGZ1bmN0aW9uIHRoYW5cbiAgICAvLyB0aGUgb25lIHRoYXQgYWNjZXNzZXMgYGFyZ3VtZW50cy5sZW5ndGhgIHRvIGF2b2lkIGEgcGVyZiBoaXQuICgjMTk5MSlcbiAgICB2YXIgcmVkdWNlciA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIG1lbW8sIGluaXRpYWwpIHtcbiAgICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBkaXIgPiAwID8gMCA6IGxlbmd0aCAtIDE7XG4gICAgICBpZiAoIWluaXRpYWwpIHtcbiAgICAgICAgbWVtbyA9IG9ialtrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleF07XG4gICAgICAgIGluZGV4ICs9IGRpcjtcbiAgICAgIH1cbiAgICAgIGZvciAoOyBpbmRleCA+PSAwICYmIGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSBkaXIpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICAgICAgbWVtbyA9IGl0ZXJhdGVlKG1lbW8sIG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH07XG5cbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgbWVtbywgY29udGV4dCkge1xuICAgICAgdmFyIGluaXRpYWwgPSBhcmd1bWVudHMubGVuZ3RoID49IDM7XG4gICAgICByZXR1cm4gcmVkdWNlcihvYmosIG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQsIDQpLCBtZW1vLCBpbml0aWFsKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vICoqUmVkdWNlKiogYnVpbGRzIHVwIGEgc2luZ2xlIHJlc3VsdCBmcm9tIGEgbGlzdCBvZiB2YWx1ZXMsIGFrYSBgaW5qZWN0YCxcbiAgLy8gb3IgYGZvbGRsYC5cbiAgXy5yZWR1Y2UgPSBfLmZvbGRsID0gXy5pbmplY3QgPSBjcmVhdGVSZWR1Y2UoMSk7XG5cbiAgLy8gVGhlIHJpZ2h0LWFzc29jaWF0aXZlIHZlcnNpb24gb2YgcmVkdWNlLCBhbHNvIGtub3duIGFzIGBmb2xkcmAuXG4gIF8ucmVkdWNlUmlnaHQgPSBfLmZvbGRyID0gY3JlYXRlUmVkdWNlKC0xKTtcblxuICAvLyBSZXR1cm4gdGhlIGZpcnN0IHZhbHVlIHdoaWNoIHBhc3NlcyBhIHRydXRoIHRlc3QuIEFsaWFzZWQgYXMgYGRldGVjdGAuXG4gIF8uZmluZCA9IF8uZGV0ZWN0ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIga2V5RmluZGVyID0gaXNBcnJheUxpa2Uob2JqKSA/IF8uZmluZEluZGV4IDogXy5maW5kS2V5O1xuICAgIHZhciBrZXkgPSBrZXlGaW5kZXIob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIGlmIChrZXkgIT09IHZvaWQgMCAmJiBrZXkgIT09IC0xKSByZXR1cm4gb2JqW2tleV07XG4gIH07XG5cbiAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBwYXNzIGEgdHJ1dGggdGVzdC5cbiAgLy8gQWxpYXNlZCBhcyBgc2VsZWN0YC5cbiAgXy5maWx0ZXIgPSBfLnNlbGVjdCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGxpc3QpKSByZXN1bHRzLnB1c2godmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIGZvciB3aGljaCBhIHRydXRoIHRlc3QgZmFpbHMuXG4gIF8ucmVqZWN0ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIob2JqLCBfLm5lZ2F0ZShjYihwcmVkaWNhdGUpKSwgY29udGV4dCk7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgYWxsIG9mIHRoZSBlbGVtZW50cyBtYXRjaCBhIHRydXRoIHRlc3QuXG4gIC8vIEFsaWFzZWQgYXMgYGFsbGAuXG4gIF8uZXZlcnkgPSBfLmFsbCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICB2YXIga2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIF8ua2V5cyhvYmopLFxuICAgICAgICBsZW5ndGggPSAoa2V5cyB8fCBvYmopLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY3VycmVudEtleSA9IGtleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgaWYgKCFwcmVkaWNhdGUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiBhdCBsZWFzdCBvbmUgZWxlbWVudCBpbiB0aGUgb2JqZWN0IG1hdGNoZXMgYSB0cnV0aCB0ZXN0LlxuICAvLyBBbGlhc2VkIGFzIGBhbnlgLlxuICBfLnNvbWUgPSBfLmFueSA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICB2YXIga2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIF8ua2V5cyhvYmopLFxuICAgICAgICBsZW5ndGggPSAoa2V5cyB8fCBvYmopLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY3VycmVudEtleSA9IGtleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgaWYgKHByZWRpY2F0ZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaikpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBhcnJheSBvciBvYmplY3QgY29udGFpbnMgYSBnaXZlbiBpdGVtICh1c2luZyBgPT09YCkuXG4gIC8vIEFsaWFzZWQgYXMgYGluY2x1ZGVzYCBhbmQgYGluY2x1ZGVgLlxuICBfLmNvbnRhaW5zID0gXy5pbmNsdWRlcyA9IF8uaW5jbHVkZSA9IGZ1bmN0aW9uKG9iaiwgaXRlbSwgZnJvbUluZGV4LCBndWFyZCkge1xuICAgIGlmICghaXNBcnJheUxpa2Uob2JqKSkgb2JqID0gXy52YWx1ZXMob2JqKTtcbiAgICBpZiAodHlwZW9mIGZyb21JbmRleCAhPSAnbnVtYmVyJyB8fCBndWFyZCkgZnJvbUluZGV4ID0gMDtcbiAgICByZXR1cm4gXy5pbmRleE9mKG9iaiwgaXRlbSwgZnJvbUluZGV4KSA+PSAwO1xuICB9O1xuXG4gIC8vIEludm9rZSBhIG1ldGhvZCAod2l0aCBhcmd1bWVudHMpIG9uIGV2ZXJ5IGl0ZW0gaW4gYSBjb2xsZWN0aW9uLlxuICBfLmludm9rZSA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24ob2JqLCBwYXRoLCBhcmdzKSB7XG4gICAgdmFyIGNvbnRleHRQYXRoLCBmdW5jO1xuICAgIGlmIChfLmlzRnVuY3Rpb24ocGF0aCkpIHtcbiAgICAgIGZ1bmMgPSBwYXRoO1xuICAgIH0gZWxzZSBpZiAoXy5pc0FycmF5KHBhdGgpKSB7XG4gICAgICBjb250ZXh0UGF0aCA9IHBhdGguc2xpY2UoMCwgLTEpO1xuICAgICAgcGF0aCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgdmFyIG1ldGhvZCA9IGZ1bmM7XG4gICAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgICBpZiAoY29udGV4dFBhdGggJiYgY29udGV4dFBhdGgubGVuZ3RoKSB7XG4gICAgICAgICAgY29udGV4dCA9IGRlZXBHZXQoY29udGV4dCwgY29udGV4dFBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZXh0ID09IG51bGwpIHJldHVybiB2b2lkIDA7XG4gICAgICAgIG1ldGhvZCA9IGNvbnRleHRbcGF0aF07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWV0aG9kID09IG51bGwgPyBtZXRob2QgOiBtZXRob2QuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYG1hcGA6IGZldGNoaW5nIGEgcHJvcGVydHkuXG4gIF8ucGx1Y2sgPSBmdW5jdGlvbihvYmosIGtleSkge1xuICAgIHJldHVybiBfLm1hcChvYmosIF8ucHJvcGVydHkoa2V5KSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgZmlsdGVyYDogc2VsZWN0aW5nIG9ubHkgb2JqZWN0c1xuICAvLyBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLndoZXJlID0gZnVuY3Rpb24ob2JqLCBhdHRycykge1xuICAgIHJldHVybiBfLmZpbHRlcihvYmosIF8ubWF0Y2hlcihhdHRycykpO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYGZpbmRgOiBnZXR0aW5nIHRoZSBmaXJzdCBvYmplY3RcbiAgLy8gY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy5maW5kV2hlcmUgPSBmdW5jdGlvbihvYmosIGF0dHJzKSB7XG4gICAgcmV0dXJuIF8uZmluZChvYmosIF8ubWF0Y2hlcihhdHRycykpO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbWF4aW11bSBlbGVtZW50IChvciBlbGVtZW50LWJhc2VkIGNvbXB1dGF0aW9uKS5cbiAgXy5tYXggPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdCA9IC1JbmZpbml0eSwgbGFzdENvbXB1dGVkID0gLUluZmluaXR5LFxuICAgICAgICB2YWx1ZSwgY29tcHV0ZWQ7XG4gICAgaWYgKGl0ZXJhdGVlID09IG51bGwgfHwgdHlwZW9mIGl0ZXJhdGVlID09ICdudW1iZXInICYmIHR5cGVvZiBvYmpbMF0gIT0gJ29iamVjdCcgJiYgb2JqICE9IG51bGwpIHtcbiAgICAgIG9iaiA9IGlzQXJyYXlMaWtlKG9iaikgPyBvYmogOiBfLnZhbHVlcyhvYmopO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IG9ialtpXTtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgPiByZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHYsIGluZGV4LCBsaXN0KSB7XG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUodiwgaW5kZXgsIGxpc3QpO1xuICAgICAgICBpZiAoY29tcHV0ZWQgPiBsYXN0Q29tcHV0ZWQgfHwgY29tcHV0ZWQgPT09IC1JbmZpbml0eSAmJiByZXN1bHQgPT09IC1JbmZpbml0eSkge1xuICAgICAgICAgIHJlc3VsdCA9IHY7XG4gICAgICAgICAgbGFzdENvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbWluaW11bSBlbGVtZW50IChvciBlbGVtZW50LWJhc2VkIGNvbXB1dGF0aW9uKS5cbiAgXy5taW4gPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdCA9IEluZmluaXR5LCBsYXN0Q29tcHV0ZWQgPSBJbmZpbml0eSxcbiAgICAgICAgdmFsdWUsIGNvbXB1dGVkO1xuICAgIGlmIChpdGVyYXRlZSA9PSBudWxsIHx8IHR5cGVvZiBpdGVyYXRlZSA9PSAnbnVtYmVyJyAmJiB0eXBlb2Ygb2JqWzBdICE9ICdvYmplY3QnICYmIG9iaiAhPSBudWxsKSB7XG4gICAgICBvYmogPSBpc0FycmF5TGlrZShvYmopID8gb2JqIDogXy52YWx1ZXMob2JqKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSBvYmpbaV07XG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlIDwgcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2LCBpbmRleCwgbGlzdCkge1xuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlKHYsIGluZGV4LCBsaXN0KTtcbiAgICAgICAgaWYgKGNvbXB1dGVkIDwgbGFzdENvbXB1dGVkIHx8IGNvbXB1dGVkID09PSBJbmZpbml0eSAmJiByZXN1bHQgPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdjtcbiAgICAgICAgICBsYXN0Q29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gU2h1ZmZsZSBhIGNvbGxlY3Rpb24uXG4gIF8uc2h1ZmZsZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBfLnNhbXBsZShvYmosIEluZmluaXR5KTtcbiAgfTtcblxuICAvLyBTYW1wbGUgKipuKiogcmFuZG9tIHZhbHVlcyBmcm9tIGEgY29sbGVjdGlvbiB1c2luZyB0aGUgbW9kZXJuIHZlcnNpb24gb2YgdGhlXG4gIC8vIFtGaXNoZXItWWF0ZXMgc2h1ZmZsZV0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GaXNoZXLigJNZYXRlc19zaHVmZmxlKS5cbiAgLy8gSWYgKipuKiogaXMgbm90IHNwZWNpZmllZCwgcmV0dXJucyBhIHNpbmdsZSByYW5kb20gZWxlbWVudC5cbiAgLy8gVGhlIGludGVybmFsIGBndWFyZGAgYXJndW1lbnQgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgbWFwYC5cbiAgXy5zYW1wbGUgPSBmdW5jdGlvbihvYmosIG4sIGd1YXJkKSB7XG4gICAgaWYgKG4gPT0gbnVsbCB8fCBndWFyZCkge1xuICAgICAgaWYgKCFpc0FycmF5TGlrZShvYmopKSBvYmogPSBfLnZhbHVlcyhvYmopO1xuICAgICAgcmV0dXJuIG9ialtfLnJhbmRvbShvYmoubGVuZ3RoIC0gMSldO1xuICAgIH1cbiAgICB2YXIgc2FtcGxlID0gaXNBcnJheUxpa2Uob2JqKSA/IF8uY2xvbmUob2JqKSA6IF8udmFsdWVzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGdldExlbmd0aChzYW1wbGUpO1xuICAgIG4gPSBNYXRoLm1heChNYXRoLm1pbihuLCBsZW5ndGgpLCAwKTtcbiAgICB2YXIgbGFzdCA9IGxlbmd0aCAtIDE7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG47IGluZGV4KyspIHtcbiAgICAgIHZhciByYW5kID0gXy5yYW5kb20oaW5kZXgsIGxhc3QpO1xuICAgICAgdmFyIHRlbXAgPSBzYW1wbGVbaW5kZXhdO1xuICAgICAgc2FtcGxlW2luZGV4XSA9IHNhbXBsZVtyYW5kXTtcbiAgICAgIHNhbXBsZVtyYW5kXSA9IHRlbXA7XG4gICAgfVxuICAgIHJldHVybiBzYW1wbGUuc2xpY2UoMCwgbik7XG4gIH07XG5cbiAgLy8gU29ydCB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uIHByb2R1Y2VkIGJ5IGFuIGl0ZXJhdGVlLlxuICBfLnNvcnRCeSA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHJldHVybiBfLnBsdWNrKF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUsIGtleSwgbGlzdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpbmRleDogaW5kZXgrKyxcbiAgICAgICAgY3JpdGVyaWE6IGl0ZXJhdGVlKHZhbHVlLCBrZXksIGxpc3QpXG4gICAgICB9O1xuICAgIH0pLnNvcnQoZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICAgIHZhciBhID0gbGVmdC5jcml0ZXJpYTtcbiAgICAgIHZhciBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgICBpZiAoYSAhPT0gYikge1xuICAgICAgICBpZiAoYSA+IGIgfHwgYSA9PT0gdm9pZCAwKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKGEgPCBiIHx8IGIgPT09IHZvaWQgMCkgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxlZnQuaW5kZXggLSByaWdodC5pbmRleDtcbiAgICB9KSwgJ3ZhbHVlJyk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdXNlZCBmb3IgYWdncmVnYXRlIFwiZ3JvdXAgYnlcIiBvcGVyYXRpb25zLlxuICB2YXIgZ3JvdXAgPSBmdW5jdGlvbihiZWhhdmlvciwgcGFydGl0aW9uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICAgIHZhciByZXN1bHQgPSBwYXJ0aXRpb24gPyBbW10sIFtdXSA6IHt9O1xuICAgICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGtleSA9IGl0ZXJhdGVlKHZhbHVlLCBpbmRleCwgb2JqKTtcbiAgICAgICAgYmVoYXZpb3IocmVzdWx0LCB2YWx1ZSwga2V5KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEdyb3VwcyB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uLiBQYXNzIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGVcbiAgLy8gdG8gZ3JvdXAgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjcml0ZXJpb24uXG4gIF8uZ3JvdXBCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICAgIGlmIChoYXMocmVzdWx0LCBrZXkpKSByZXN1bHRba2V5XS5wdXNoKHZhbHVlKTsgZWxzZSByZXN1bHRba2V5XSA9IFt2YWx1ZV07XG4gIH0pO1xuXG4gIC8vIEluZGV4ZXMgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiwgc2ltaWxhciB0byBgZ3JvdXBCeWAsIGJ1dCBmb3JcbiAgLy8gd2hlbiB5b3Uga25vdyB0aGF0IHlvdXIgaW5kZXggdmFsdWVzIHdpbGwgYmUgdW5pcXVlLlxuICBfLmluZGV4QnkgPSBncm91cChmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICB9KTtcblxuICAvLyBDb3VudHMgaW5zdGFuY2VzIG9mIGFuIG9iamVjdCB0aGF0IGdyb3VwIGJ5IGEgY2VydGFpbiBjcml0ZXJpb24uIFBhc3NcbiAgLy8gZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZSB0byBjb3VudCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gIC8vIGNyaXRlcmlvbi5cbiAgXy5jb3VudEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gICAgaWYgKGhhcyhyZXN1bHQsIGtleSkpIHJlc3VsdFtrZXldKys7IGVsc2UgcmVzdWx0W2tleV0gPSAxO1xuICB9KTtcblxuICB2YXIgcmVTdHJTeW1ib2wgPSAvW15cXHVkODAwLVxcdWRmZmZdfFtcXHVkODAwLVxcdWRiZmZdW1xcdWRjMDAtXFx1ZGZmZl18W1xcdWQ4MDAtXFx1ZGZmZl0vZztcbiAgLy8gU2FmZWx5IGNyZWF0ZSBhIHJlYWwsIGxpdmUgYXJyYXkgZnJvbSBhbnl0aGluZyBpdGVyYWJsZS5cbiAgXy50b0FycmF5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFvYmopIHJldHVybiBbXTtcbiAgICBpZiAoXy5pc0FycmF5KG9iaikpIHJldHVybiBzbGljZS5jYWxsKG9iaik7XG4gICAgaWYgKF8uaXNTdHJpbmcob2JqKSkge1xuICAgICAgLy8gS2VlcCBzdXJyb2dhdGUgcGFpciBjaGFyYWN0ZXJzIHRvZ2V0aGVyXG4gICAgICByZXR1cm4gb2JqLm1hdGNoKHJlU3RyU3ltYm9sKTtcbiAgICB9XG4gICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHJldHVybiBfLm1hcChvYmosIF8uaWRlbnRpdHkpO1xuICAgIHJldHVybiBfLnZhbHVlcyhvYmopO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIGFuIG9iamVjdC5cbiAgXy5zaXplID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gMDtcbiAgICByZXR1cm4gaXNBcnJheUxpa2Uob2JqKSA/IG9iai5sZW5ndGggOiBfLmtleXMob2JqKS5sZW5ndGg7XG4gIH07XG5cbiAgLy8gU3BsaXQgYSBjb2xsZWN0aW9uIGludG8gdHdvIGFycmF5czogb25lIHdob3NlIGVsZW1lbnRzIGFsbCBzYXRpc2Z5IHRoZSBnaXZlblxuICAvLyBwcmVkaWNhdGUsIGFuZCBvbmUgd2hvc2UgZWxlbWVudHMgYWxsIGRvIG5vdCBzYXRpc2Z5IHRoZSBwcmVkaWNhdGUuXG4gIF8ucGFydGl0aW9uID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwgcGFzcykge1xuICAgIHJlc3VsdFtwYXNzID8gMCA6IDFdLnB1c2godmFsdWUpO1xuICB9LCB0cnVlKTtcblxuICAvLyBBcnJheSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gR2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGFuIGFycmF5LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuIEFsaWFzZWQgYXMgYGhlYWRgIGFuZCBgdGFrZWAuIFRoZSAqKmd1YXJkKiogY2hlY2tcbiAgLy8gYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgXy5tYXBgLlxuICBfLmZpcnN0ID0gXy5oZWFkID0gXy50YWtlID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwgfHwgYXJyYXkubGVuZ3RoIDwgMSkgcmV0dXJuIG4gPT0gbnVsbCA/IHZvaWQgMCA6IFtdO1xuICAgIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHJldHVybiBhcnJheVswXTtcbiAgICByZXR1cm4gXy5pbml0aWFsKGFycmF5LCBhcnJheS5sZW5ndGggLSBuKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBsYXN0IGVudHJ5IG9mIHRoZSBhcnJheS4gRXNwZWNpYWxseSB1c2VmdWwgb25cbiAgLy8gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gYWxsIHRoZSB2YWx1ZXMgaW5cbiAgLy8gdGhlIGFycmF5LCBleGNsdWRpbmcgdGhlIGxhc3QgTi5cbiAgXy5pbml0aWFsID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIDAsIE1hdGgubWF4KDAsIGFycmF5Lmxlbmd0aCAtIChuID09IG51bGwgfHwgZ3VhcmQgPyAxIDogbikpKTtcbiAgfTtcblxuICAvLyBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgbGFzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuXG4gIF8ubGFzdCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsIHx8IGFycmF5Lmxlbmd0aCA8IDEpIHJldHVybiBuID09IG51bGwgPyB2b2lkIDAgOiBbXTtcbiAgICBpZiAobiA9PSBudWxsIHx8IGd1YXJkKSByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIF8ucmVzdChhcnJheSwgTWF0aC5tYXgoMCwgYXJyYXkubGVuZ3RoIC0gbikpO1xuICB9O1xuXG4gIC8vIFJldHVybnMgZXZlcnl0aGluZyBidXQgdGhlIGZpcnN0IGVudHJ5IG9mIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgdGFpbGAgYW5kIGBkcm9wYC5cbiAgLy8gRXNwZWNpYWxseSB1c2VmdWwgb24gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgYW4gKipuKiogd2lsbCByZXR1cm5cbiAgLy8gdGhlIHJlc3QgTiB2YWx1ZXMgaW4gdGhlIGFycmF5LlxuICBfLnJlc3QgPSBfLnRhaWwgPSBfLmRyb3AgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgbiA9PSBudWxsIHx8IGd1YXJkID8gMSA6IG4pO1xuICB9O1xuXG4gIC8vIFRyaW0gb3V0IGFsbCBmYWxzeSB2YWx1ZXMgZnJvbSBhbiBhcnJheS5cbiAgXy5jb21wYWN0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIoYXJyYXksIEJvb2xlYW4pO1xuICB9O1xuXG4gIC8vIEludGVybmFsIGltcGxlbWVudGF0aW9uIG9mIGEgcmVjdXJzaXZlIGBmbGF0dGVuYCBmdW5jdGlvbi5cbiAgdmFyIGZsYXR0ZW4gPSBmdW5jdGlvbihpbnB1dCwgc2hhbGxvdywgc3RyaWN0LCBvdXRwdXQpIHtcbiAgICBvdXRwdXQgPSBvdXRwdXQgfHwgW107XG4gICAgdmFyIGlkeCA9IG91dHB1dC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChpbnB1dCk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZhbHVlID0gaW5wdXRbaV07XG4gICAgICBpZiAoaXNBcnJheUxpa2UodmFsdWUpICYmIChfLmlzQXJyYXkodmFsdWUpIHx8IF8uaXNBcmd1bWVudHModmFsdWUpKSkge1xuICAgICAgICAvLyBGbGF0dGVuIGN1cnJlbnQgbGV2ZWwgb2YgYXJyYXkgb3IgYXJndW1lbnRzIG9iamVjdC5cbiAgICAgICAgaWYgKHNoYWxsb3cpIHtcbiAgICAgICAgICB2YXIgaiA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICB3aGlsZSAoaiA8IGxlbikgb3V0cHV0W2lkeCsrXSA9IHZhbHVlW2orK107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmxhdHRlbih2YWx1ZSwgc2hhbGxvdywgc3RyaWN0LCBvdXRwdXQpO1xuICAgICAgICAgIGlkeCA9IG91dHB1dC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCkge1xuICAgICAgICBvdXRwdXRbaWR4KytdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgLy8gRmxhdHRlbiBvdXQgYW4gYXJyYXksIGVpdGhlciByZWN1cnNpdmVseSAoYnkgZGVmYXVsdCksIG9yIGp1c3Qgb25lIGxldmVsLlxuICBfLmZsYXR0ZW4gPSBmdW5jdGlvbihhcnJheSwgc2hhbGxvdykge1xuICAgIHJldHVybiBmbGF0dGVuKGFycmF5LCBzaGFsbG93LCBmYWxzZSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgdmVyc2lvbiBvZiB0aGUgYXJyYXkgdGhhdCBkb2VzIG5vdCBjb250YWluIHRoZSBzcGVjaWZpZWQgdmFsdWUocykuXG4gIF8ud2l0aG91dCA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oYXJyYXksIG90aGVyQXJyYXlzKSB7XG4gICAgcmV0dXJuIF8uZGlmZmVyZW5jZShhcnJheSwgb3RoZXJBcnJheXMpO1xuICB9KTtcblxuICAvLyBQcm9kdWNlIGEgZHVwbGljYXRlLWZyZWUgdmVyc2lvbiBvZiB0aGUgYXJyYXkuIElmIHRoZSBhcnJheSBoYXMgYWxyZWFkeVxuICAvLyBiZWVuIHNvcnRlZCwgeW91IGhhdmUgdGhlIG9wdGlvbiBvZiB1c2luZyBhIGZhc3RlciBhbGdvcml0aG0uXG4gIC8vIFRoZSBmYXN0ZXIgYWxnb3JpdGhtIHdpbGwgbm90IHdvcmsgd2l0aCBhbiBpdGVyYXRlZSBpZiB0aGUgaXRlcmF0ZWVcbiAgLy8gaXMgbm90IGEgb25lLXRvLW9uZSBmdW5jdGlvbiwgc28gcHJvdmlkaW5nIGFuIGl0ZXJhdGVlIHdpbGwgZGlzYWJsZVxuICAvLyB0aGUgZmFzdGVyIGFsZ29yaXRobS5cbiAgLy8gQWxpYXNlZCBhcyBgdW5pcXVlYC5cbiAgXy51bmlxID0gXy51bmlxdWUgPSBmdW5jdGlvbihhcnJheSwgaXNTb3J0ZWQsIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaWYgKCFfLmlzQm9vbGVhbihpc1NvcnRlZCkpIHtcbiAgICAgIGNvbnRleHQgPSBpdGVyYXRlZTtcbiAgICAgIGl0ZXJhdGVlID0gaXNTb3J0ZWQ7XG4gICAgICBpc1NvcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXRlcmF0ZWUgIT0gbnVsbCkgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBzZWVuID0gW107XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZhbHVlID0gYXJyYXlbaV0sXG4gICAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlLCBpLCBhcnJheSkgOiB2YWx1ZTtcbiAgICAgIGlmIChpc1NvcnRlZCAmJiAhaXRlcmF0ZWUpIHtcbiAgICAgICAgaWYgKCFpIHx8IHNlZW4gIT09IGNvbXB1dGVkKSByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICAgIHNlZW4gPSBjb21wdXRlZDtcbiAgICAgIH0gZWxzZSBpZiAoaXRlcmF0ZWUpIHtcbiAgICAgICAgaWYgKCFfLmNvbnRhaW5zKHNlZW4sIGNvbXB1dGVkKSkge1xuICAgICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFfLmNvbnRhaW5zKHJlc3VsdCwgdmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIHVuaW9uOiBlYWNoIGRpc3RpbmN0IGVsZW1lbnQgZnJvbSBhbGwgb2ZcbiAgLy8gdGhlIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8udW5pb24gPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGFycmF5cykge1xuICAgIHJldHVybiBfLnVuaXEoZmxhdHRlbihhcnJheXMsIHRydWUsIHRydWUpKTtcbiAgfSk7XG5cbiAgLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGV2ZXJ5IGl0ZW0gc2hhcmVkIGJldHdlZW4gYWxsIHRoZVxuICAvLyBwYXNzZWQtaW4gYXJyYXlzLlxuICBfLmludGVyc2VjdGlvbiA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBhcmdzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IGFycmF5W2ldO1xuICAgICAgaWYgKF8uY29udGFpbnMocmVzdWx0LCBpdGVtKSkgY29udGludWU7XG4gICAgICB2YXIgajtcbiAgICAgIGZvciAoaiA9IDE7IGogPCBhcmdzTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKCFfLmNvbnRhaW5zKGFyZ3VtZW50c1tqXSwgaXRlbSkpIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKGogPT09IGFyZ3NMZW5ndGgpIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFRha2UgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBvbmUgYXJyYXkgYW5kIGEgbnVtYmVyIG9mIG90aGVyIGFycmF5cy5cbiAgLy8gT25seSB0aGUgZWxlbWVudHMgcHJlc2VudCBpbiBqdXN0IHRoZSBmaXJzdCBhcnJheSB3aWxsIHJlbWFpbi5cbiAgXy5kaWZmZXJlbmNlID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihhcnJheSwgcmVzdCkge1xuICAgIHJlc3QgPSBmbGF0dGVuKHJlc3QsIHRydWUsIHRydWUpO1xuICAgIHJldHVybiBfLmZpbHRlcihhcnJheSwgZnVuY3Rpb24odmFsdWUpe1xuICAgICAgcmV0dXJuICFfLmNvbnRhaW5zKHJlc3QsIHZhbHVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gQ29tcGxlbWVudCBvZiBfLnppcC4gVW56aXAgYWNjZXB0cyBhbiBhcnJheSBvZiBhcnJheXMgYW5kIGdyb3Vwc1xuICAvLyBlYWNoIGFycmF5J3MgZWxlbWVudHMgb24gc2hhcmVkIGluZGljZXMuXG4gIF8udW56aXAgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciBsZW5ndGggPSBhcnJheSAmJiBfLm1heChhcnJheSwgZ2V0TGVuZ3RoKS5sZW5ndGggfHwgMDtcbiAgICB2YXIgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHJlc3VsdFtpbmRleF0gPSBfLnBsdWNrKGFycmF5LCBpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gWmlwIHRvZ2V0aGVyIG11bHRpcGxlIGxpc3RzIGludG8gYSBzaW5nbGUgYXJyYXkgLS0gZWxlbWVudHMgdGhhdCBzaGFyZVxuICAvLyBhbiBpbmRleCBnbyB0b2dldGhlci5cbiAgXy56aXAgPSByZXN0QXJndW1lbnRzKF8udW56aXApO1xuXG4gIC8vIENvbnZlcnRzIGxpc3RzIGludG8gb2JqZWN0cy4gUGFzcyBlaXRoZXIgYSBzaW5nbGUgYXJyYXkgb2YgYFtrZXksIHZhbHVlXWBcbiAgLy8gcGFpcnMsIG9yIHR3byBwYXJhbGxlbCBhcnJheXMgb2YgdGhlIHNhbWUgbGVuZ3RoIC0tIG9uZSBvZiBrZXlzLCBhbmQgb25lIG9mXG4gIC8vIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlcy4gUGFzc2luZyBieSBwYWlycyBpcyB0aGUgcmV2ZXJzZSBvZiBfLnBhaXJzLlxuICBfLm9iamVjdCA9IGZ1bmN0aW9uKGxpc3QsIHZhbHVlcykge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGxpc3QpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgcmVzdWx0W2xpc3RbaV1dID0gdmFsdWVzW2ldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2xpc3RbaV1bMF1dID0gbGlzdFtpXVsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBHZW5lcmF0b3IgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBmaW5kSW5kZXggYW5kIGZpbmRMYXN0SW5kZXggZnVuY3Rpb25zLlxuICB2YXIgY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIgPSBmdW5jdGlvbihkaXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oYXJyYXksIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICAgIHZhciBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpO1xuICAgICAgdmFyIGluZGV4ID0gZGlyID4gMCA/IDAgOiBsZW5ndGggLSAxO1xuICAgICAgZm9yICg7IGluZGV4ID49IDAgJiYgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IGRpcikge1xuICAgICAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3QgaW5kZXggb24gYW4gYXJyYXktbGlrZSB0aGF0IHBhc3NlcyBhIHByZWRpY2F0ZSB0ZXN0LlxuICBfLmZpbmRJbmRleCA9IGNyZWF0ZVByZWRpY2F0ZUluZGV4RmluZGVyKDEpO1xuICBfLmZpbmRMYXN0SW5kZXggPSBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlcigtMSk7XG5cbiAgLy8gVXNlIGEgY29tcGFyYXRvciBmdW5jdGlvbiB0byBmaWd1cmUgb3V0IHRoZSBzbWFsbGVzdCBpbmRleCBhdCB3aGljaFxuICAvLyBhbiBvYmplY3Qgc2hvdWxkIGJlIGluc2VydGVkIHNvIGFzIHRvIG1haW50YWluIG9yZGVyLiBVc2VzIGJpbmFyeSBzZWFyY2guXG4gIF8uc29ydGVkSW5kZXggPSBmdW5jdGlvbihhcnJheSwgb2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQsIDEpO1xuICAgIHZhciB2YWx1ZSA9IGl0ZXJhdGVlKG9iaik7XG4gICAgdmFyIGxvdyA9IDAsIGhpZ2ggPSBnZXRMZW5ndGgoYXJyYXkpO1xuICAgIHdoaWxlIChsb3cgPCBoaWdoKSB7XG4gICAgICB2YXIgbWlkID0gTWF0aC5mbG9vcigobG93ICsgaGlnaCkgLyAyKTtcbiAgICAgIGlmIChpdGVyYXRlZShhcnJheVttaWRdKSA8IHZhbHVlKSBsb3cgPSBtaWQgKyAxOyBlbHNlIGhpZ2ggPSBtaWQ7XG4gICAgfVxuICAgIHJldHVybiBsb3c7XG4gIH07XG5cbiAgLy8gR2VuZXJhdG9yIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgaW5kZXhPZiBhbmQgbGFzdEluZGV4T2YgZnVuY3Rpb25zLlxuICB2YXIgY3JlYXRlSW5kZXhGaW5kZXIgPSBmdW5jdGlvbihkaXIsIHByZWRpY2F0ZUZpbmQsIHNvcnRlZEluZGV4KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBpZHgpIHtcbiAgICAgIHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICAgIGlmICh0eXBlb2YgaWR4ID09ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChkaXIgPiAwKSB7XG4gICAgICAgICAgaSA9IGlkeCA+PSAwID8gaWR4IDogTWF0aC5tYXgoaWR4ICsgbGVuZ3RoLCBpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZW5ndGggPSBpZHggPj0gMCA/IE1hdGgubWluKGlkeCArIDEsIGxlbmd0aCkgOiBpZHggKyBsZW5ndGggKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNvcnRlZEluZGV4ICYmIGlkeCAmJiBsZW5ndGgpIHtcbiAgICAgICAgaWR4ID0gc29ydGVkSW5kZXgoYXJyYXksIGl0ZW0pO1xuICAgICAgICByZXR1cm4gYXJyYXlbaWR4XSA9PT0gaXRlbSA/IGlkeCA6IC0xO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0gIT09IGl0ZW0pIHtcbiAgICAgICAgaWR4ID0gcHJlZGljYXRlRmluZChzbGljZS5jYWxsKGFycmF5LCBpLCBsZW5ndGgpLCBfLmlzTmFOKTtcbiAgICAgICAgcmV0dXJuIGlkeCA+PSAwID8gaWR4ICsgaSA6IC0xO1xuICAgICAgfVxuICAgICAgZm9yIChpZHggPSBkaXIgPiAwID8gaSA6IGxlbmd0aCAtIDE7IGlkeCA+PSAwICYmIGlkeCA8IGxlbmd0aDsgaWR4ICs9IGRpcikge1xuICAgICAgICBpZiAoYXJyYXlbaWR4XSA9PT0gaXRlbSkgcmV0dXJuIGlkeDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYW4gaXRlbSBpbiBhbiBhcnJheSxcbiAgLy8gb3IgLTEgaWYgdGhlIGl0ZW0gaXMgbm90IGluY2x1ZGVkIGluIHRoZSBhcnJheS5cbiAgLy8gSWYgdGhlIGFycmF5IGlzIGxhcmdlIGFuZCBhbHJlYWR5IGluIHNvcnQgb3JkZXIsIHBhc3MgYHRydWVgXG4gIC8vIGZvciAqKmlzU29ydGVkKiogdG8gdXNlIGJpbmFyeSBzZWFyY2guXG4gIF8uaW5kZXhPZiA9IGNyZWF0ZUluZGV4RmluZGVyKDEsIF8uZmluZEluZGV4LCBfLnNvcnRlZEluZGV4KTtcbiAgXy5sYXN0SW5kZXhPZiA9IGNyZWF0ZUluZGV4RmluZGVyKC0xLCBfLmZpbmRMYXN0SW5kZXgpO1xuXG4gIC8vIEdlbmVyYXRlIGFuIGludGVnZXIgQXJyYXkgY29udGFpbmluZyBhbiBhcml0aG1ldGljIHByb2dyZXNzaW9uLiBBIHBvcnQgb2ZcbiAgLy8gdGhlIG5hdGl2ZSBQeXRob24gYHJhbmdlKClgIGZ1bmN0aW9uLiBTZWVcbiAgLy8gW3RoZSBQeXRob24gZG9jdW1lbnRhdGlvbl0oaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L2Z1bmN0aW9ucy5odG1sI3JhbmdlKS5cbiAgXy5yYW5nZSA9IGZ1bmN0aW9uKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgaWYgKHN0b3AgPT0gbnVsbCkge1xuICAgICAgc3RvcCA9IHN0YXJ0IHx8IDA7XG4gICAgICBzdGFydCA9IDA7XG4gICAgfVxuICAgIGlmICghc3RlcCkge1xuICAgICAgc3RlcCA9IHN0b3AgPCBzdGFydCA/IC0xIDogMTtcbiAgICB9XG5cbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoTWF0aC5jZWlsKChzdG9wIC0gc3RhcnQpIC8gc3RlcCksIDApO1xuICAgIHZhciByYW5nZSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBsZW5ndGg7IGlkeCsrLCBzdGFydCArPSBzdGVwKSB7XG4gICAgICByYW5nZVtpZHhdID0gc3RhcnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuXG4gIC8vIENodW5rIGEgc2luZ2xlIGFycmF5IGludG8gbXVsdGlwbGUgYXJyYXlzLCBlYWNoIGNvbnRhaW5pbmcgYGNvdW50YCBvciBmZXdlclxuICAvLyBpdGVtcy5cbiAgXy5jaHVuayA9IGZ1bmN0aW9uKGFycmF5LCBjb3VudCkge1xuICAgIGlmIChjb3VudCA9PSBudWxsIHx8IGNvdW50IDwgMSkgcmV0dXJuIFtdO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgICAgcmVzdWx0LnB1c2goc2xpY2UuY2FsbChhcnJheSwgaSwgaSArPSBjb3VudCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIChhaGVtKSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGV4ZWN1dGUgYSBmdW5jdGlvbiBhcyBhIGNvbnN0cnVjdG9yXG4gIC8vIG9yIGEgbm9ybWFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3ZpZGVkIGFyZ3VtZW50cy5cbiAgdmFyIGV4ZWN1dGVCb3VuZCA9IGZ1bmN0aW9uKHNvdXJjZUZ1bmMsIGJvdW5kRnVuYywgY29udGV4dCwgY2FsbGluZ0NvbnRleHQsIGFyZ3MpIHtcbiAgICBpZiAoIShjYWxsaW5nQ29udGV4dCBpbnN0YW5jZW9mIGJvdW5kRnVuYykpIHJldHVybiBzb3VyY2VGdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIHZhciBzZWxmID0gYmFzZUNyZWF0ZShzb3VyY2VGdW5jLnByb3RvdHlwZSk7XG4gICAgdmFyIHJlc3VsdCA9IHNvdXJjZUZ1bmMuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgaWYgKF8uaXNPYmplY3QocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSBmdW5jdGlvbiBib3VuZCB0byBhIGdpdmVuIG9iamVjdCAoYXNzaWduaW5nIGB0aGlzYCwgYW5kIGFyZ3VtZW50cyxcbiAgLy8gb3B0aW9uYWxseSkuIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBGdW5jdGlvbi5iaW5kYCBpZlxuICAvLyBhdmFpbGFibGUuXG4gIF8uYmluZCA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oZnVuYywgY29udGV4dCwgYXJncykge1xuICAgIGlmICghXy5pc0Z1bmN0aW9uKGZ1bmMpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdCaW5kIG11c3QgYmUgY2FsbGVkIG9uIGEgZnVuY3Rpb24nKTtcbiAgICB2YXIgYm91bmQgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGNhbGxBcmdzKSB7XG4gICAgICByZXR1cm4gZXhlY3V0ZUJvdW5kKGZ1bmMsIGJvdW5kLCBjb250ZXh0LCB0aGlzLCBhcmdzLmNvbmNhdChjYWxsQXJncykpO1xuICAgIH0pO1xuICAgIHJldHVybiBib3VuZDtcbiAgfSk7XG5cbiAgLy8gUGFydGlhbGx5IGFwcGx5IGEgZnVuY3Rpb24gYnkgY3JlYXRpbmcgYSB2ZXJzaW9uIHRoYXQgaGFzIGhhZCBzb21lIG9mIGl0c1xuICAvLyBhcmd1bWVudHMgcHJlLWZpbGxlZCwgd2l0aG91dCBjaGFuZ2luZyBpdHMgZHluYW1pYyBgdGhpc2AgY29udGV4dC4gXyBhY3RzXG4gIC8vIGFzIGEgcGxhY2Vob2xkZXIgYnkgZGVmYXVsdCwgYWxsb3dpbmcgYW55IGNvbWJpbmF0aW9uIG9mIGFyZ3VtZW50cyB0byBiZVxuICAvLyBwcmUtZmlsbGVkLiBTZXQgYF8ucGFydGlhbC5wbGFjZWhvbGRlcmAgZm9yIGEgY3VzdG9tIHBsYWNlaG9sZGVyIGFyZ3VtZW50LlxuICBfLnBhcnRpYWwgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGZ1bmMsIGJvdW5kQXJncykge1xuICAgIHZhciBwbGFjZWhvbGRlciA9IF8ucGFydGlhbC5wbGFjZWhvbGRlcjtcbiAgICB2YXIgYm91bmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IDAsIGxlbmd0aCA9IGJvdW5kQXJncy5sZW5ndGg7XG4gICAgICB2YXIgYXJncyA9IEFycmF5KGxlbmd0aCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFyZ3NbaV0gPSBib3VuZEFyZ3NbaV0gPT09IHBsYWNlaG9sZGVyID8gYXJndW1lbnRzW3Bvc2l0aW9uKytdIDogYm91bmRBcmdzW2ldO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHBvc2l0aW9uIDwgYXJndW1lbnRzLmxlbmd0aCkgYXJncy5wdXNoKGFyZ3VtZW50c1twb3NpdGlvbisrXSk7XG4gICAgICByZXR1cm4gZXhlY3V0ZUJvdW5kKGZ1bmMsIGJvdW5kLCB0aGlzLCB0aGlzLCBhcmdzKTtcbiAgICB9O1xuICAgIHJldHVybiBib3VuZDtcbiAgfSk7XG5cbiAgXy5wYXJ0aWFsLnBsYWNlaG9sZGVyID0gXztcblxuICAvLyBCaW5kIGEgbnVtYmVyIG9mIGFuIG9iamVjdCdzIG1ldGhvZHMgdG8gdGhhdCBvYmplY3QuIFJlbWFpbmluZyBhcmd1bWVudHNcbiAgLy8gYXJlIHRoZSBtZXRob2QgbmFtZXMgdG8gYmUgYm91bmQuIFVzZWZ1bCBmb3IgZW5zdXJpbmcgdGhhdCBhbGwgY2FsbGJhY2tzXG4gIC8vIGRlZmluZWQgb24gYW4gb2JqZWN0IGJlbG9uZyB0byBpdC5cbiAgXy5iaW5kQWxsID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgICBrZXlzID0gZmxhdHRlbihrZXlzLCBmYWxzZSwgZmFsc2UpO1xuICAgIHZhciBpbmRleCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChpbmRleCA8IDEpIHRocm93IG5ldyBFcnJvcignYmluZEFsbCBtdXN0IGJlIHBhc3NlZCBmdW5jdGlvbiBuYW1lcycpO1xuICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpbmRleF07XG4gICAgICBvYmpba2V5XSA9IF8uYmluZChvYmpba2V5XSwgb2JqKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIE1lbW9pemUgYW4gZXhwZW5zaXZlIGZ1bmN0aW9uIGJ5IHN0b3JpbmcgaXRzIHJlc3VsdHMuXG4gIF8ubWVtb2l6ZSA9IGZ1bmN0aW9uKGZ1bmMsIGhhc2hlcikge1xuICAgIHZhciBtZW1vaXplID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgY2FjaGUgPSBtZW1vaXplLmNhY2hlO1xuICAgICAgdmFyIGFkZHJlc3MgPSAnJyArIChoYXNoZXIgPyBoYXNoZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IGtleSk7XG4gICAgICBpZiAoIWhhcyhjYWNoZSwgYWRkcmVzcykpIGNhY2hlW2FkZHJlc3NdID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIGNhY2hlW2FkZHJlc3NdO1xuICAgIH07XG4gICAgbWVtb2l6ZS5jYWNoZSA9IHt9O1xuICAgIHJldHVybiBtZW1vaXplO1xuICB9O1xuXG4gIC8vIERlbGF5cyBhIGZ1bmN0aW9uIGZvciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgYW5kIHRoZW4gY2FsbHNcbiAgLy8gaXQgd2l0aCB0aGUgYXJndW1lbnRzIHN1cHBsaWVkLlxuICBfLmRlbGF5ID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihmdW5jLCB3YWl0LCBhcmdzKSB7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9LCB3YWl0KTtcbiAgfSk7XG5cbiAgLy8gRGVmZXJzIGEgZnVuY3Rpb24sIHNjaGVkdWxpbmcgaXQgdG8gcnVuIGFmdGVyIHRoZSBjdXJyZW50IGNhbGwgc3RhY2sgaGFzXG4gIC8vIGNsZWFyZWQuXG4gIF8uZGVmZXIgPSBfLnBhcnRpYWwoXy5kZWxheSwgXywgMSk7XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCB3aGVuIGludm9rZWQsIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgYXQgbW9zdCBvbmNlXG4gIC8vIGR1cmluZyBhIGdpdmVuIHdpbmRvdyBvZiB0aW1lLiBOb3JtYWxseSwgdGhlIHRocm90dGxlZCBmdW5jdGlvbiB3aWxsIHJ1blxuICAvLyBhcyBtdWNoIGFzIGl0IGNhbiwgd2l0aG91dCBldmVyIGdvaW5nIG1vcmUgdGhhbiBvbmNlIHBlciBgd2FpdGAgZHVyYXRpb247XG4gIC8vIGJ1dCBpZiB5b3UnZCBsaWtlIHRvIGRpc2FibGUgdGhlIGV4ZWN1dGlvbiBvbiB0aGUgbGVhZGluZyBlZGdlLCBwYXNzXG4gIC8vIGB7bGVhZGluZzogZmFsc2V9YC4gVG8gZGlzYWJsZSBleGVjdXRpb24gb24gdGhlIHRyYWlsaW5nIGVkZ2UsIGRpdHRvLlxuICBfLnRocm90dGxlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICAgIHZhciB0aW1lb3V0LCBjb250ZXh0LCBhcmdzLCByZXN1bHQ7XG4gICAgdmFyIHByZXZpb3VzID0gMDtcbiAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcblxuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcHJldmlvdXMgPSBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlID8gMCA6IF8ubm93KCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9O1xuXG4gICAgdmFyIHRocm90dGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5vdyA9IF8ubm93KCk7XG4gICAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHByZXZpb3VzID0gbm93O1xuICAgICAgdmFyIHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgICAgY29udGV4dCA9IHRoaXM7XG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgaWYgKHJlbWFpbmluZyA8PSAwIHx8IHJlbWFpbmluZyA+IHdhaXQpIHtcbiAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHRocm90dGxlZC5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHByZXZpb3VzID0gMDtcbiAgICAgIHRpbWVvdXQgPSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfTtcblxuICAgIHJldHVybiB0aHJvdHRsZWQ7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuICAvLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4gIC8vIE4gbWlsbGlzZWNvbmRzLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRyaWdnZXIgdGhlIGZ1bmN0aW9uIG9uIHRoZVxuICAvLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuICBfLmRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gICAgdmFyIHRpbWVvdXQsIHJlc3VsdDtcblxuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKGNvbnRleHQsIGFyZ3MpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKGFyZ3MpIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcblxuICAgIHZhciBkZWJvdW5jZWQgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgIGlmICh0aW1lb3V0KSBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICBpZiAoaW1tZWRpYXRlKSB7XG4gICAgICAgIHZhciBjYWxsTm93ID0gIXRpbWVvdXQ7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgICAgaWYgKGNhbGxOb3cpIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lb3V0ID0gXy5kZWxheShsYXRlciwgd2FpdCwgdGhpcywgYXJncyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG5cbiAgICBkZWJvdW5jZWQuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRlYm91bmNlZDtcbiAgfTtcblxuICAvLyBSZXR1cm5zIHRoZSBmaXJzdCBmdW5jdGlvbiBwYXNzZWQgYXMgYW4gYXJndW1lbnQgdG8gdGhlIHNlY29uZCxcbiAgLy8gYWxsb3dpbmcgeW91IHRvIGFkanVzdCBhcmd1bWVudHMsIHJ1biBjb2RlIGJlZm9yZSBhbmQgYWZ0ZXIsIGFuZFxuICAvLyBjb25kaXRpb25hbGx5IGV4ZWN1dGUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxuICBfLndyYXAgPSBmdW5jdGlvbihmdW5jLCB3cmFwcGVyKSB7XG4gICAgcmV0dXJuIF8ucGFydGlhbCh3cmFwcGVyLCBmdW5jKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgbmVnYXRlZCB2ZXJzaW9uIG9mIHRoZSBwYXNzZWQtaW4gcHJlZGljYXRlLlxuICBfLm5lZ2F0ZSA9IGZ1bmN0aW9uKHByZWRpY2F0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhcHJlZGljYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBpcyB0aGUgY29tcG9zaXRpb24gb2YgYSBsaXN0IG9mIGZ1bmN0aW9ucywgZWFjaFxuICAvLyBjb25zdW1pbmcgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gdGhhdCBmb2xsb3dzLlxuICBfLmNvbXBvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgc3RhcnQgPSBhcmdzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGkgPSBzdGFydDtcbiAgICAgIHZhciByZXN1bHQgPSBhcmdzW3N0YXJ0XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgd2hpbGUgKGktLSkgcmVzdWx0ID0gYXJnc1tpXS5jYWxsKHRoaXMsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIG9uIGFuZCBhZnRlciB0aGUgTnRoIGNhbGwuXG4gIF8uYWZ0ZXIgPSBmdW5jdGlvbih0aW1lcywgZnVuYykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgtLXRpbWVzIDwgMSkge1xuICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIHVwIHRvIChidXQgbm90IGluY2x1ZGluZykgdGhlIE50aCBjYWxsLlxuICBfLmJlZm9yZSA9IGZ1bmN0aW9uKHRpbWVzLCBmdW5jKSB7XG4gICAgdmFyIG1lbW87XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKC0tdGltZXMgPiAwKSB7XG4gICAgICAgIG1lbW8gPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICBpZiAodGltZXMgPD0gMSkgZnVuYyA9IG51bGw7XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYXQgbW9zdCBvbmUgdGltZSwgbm8gbWF0dGVyIGhvd1xuICAvLyBvZnRlbiB5b3UgY2FsbCBpdC4gVXNlZnVsIGZvciBsYXp5IGluaXRpYWxpemF0aW9uLlxuICBfLm9uY2UgPSBfLnBhcnRpYWwoXy5iZWZvcmUsIDIpO1xuXG4gIF8ucmVzdEFyZ3VtZW50cyA9IHJlc3RBcmd1bWVudHM7XG5cbiAgLy8gT2JqZWN0IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gS2V5cyBpbiBJRSA8IDkgdGhhdCB3b24ndCBiZSBpdGVyYXRlZCBieSBgZm9yIGtleSBpbiAuLi5gIGFuZCB0aHVzIG1pc3NlZC5cbiAgdmFyIGhhc0VudW1CdWcgPSAhe3RvU3RyaW5nOiBudWxsfS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgndG9TdHJpbmcnKTtcbiAgdmFyIG5vbkVudW1lcmFibGVQcm9wcyA9IFsndmFsdWVPZicsICdpc1Byb3RvdHlwZU9mJywgJ3RvU3RyaW5nJyxcbiAgICAncHJvcGVydHlJc0VudW1lcmFibGUnLCAnaGFzT3duUHJvcGVydHknLCAndG9Mb2NhbGVTdHJpbmcnXTtcblxuICB2YXIgY29sbGVjdE5vbkVudW1Qcm9wcyA9IGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICAgIHZhciBub25FbnVtSWR4ID0gbm9uRW51bWVyYWJsZVByb3BzLmxlbmd0aDtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBvYmouY29uc3RydWN0b3I7XG4gICAgdmFyIHByb3RvID0gXy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yKSAmJiBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgfHwgT2JqUHJvdG87XG5cbiAgICAvLyBDb25zdHJ1Y3RvciBpcyBhIHNwZWNpYWwgY2FzZS5cbiAgICB2YXIgcHJvcCA9ICdjb25zdHJ1Y3Rvcic7XG4gICAgaWYgKGhhcyhvYmosIHByb3ApICYmICFfLmNvbnRhaW5zKGtleXMsIHByb3ApKSBrZXlzLnB1c2gocHJvcCk7XG5cbiAgICB3aGlsZSAobm9uRW51bUlkeC0tKSB7XG4gICAgICBwcm9wID0gbm9uRW51bWVyYWJsZVByb3BzW25vbkVudW1JZHhdO1xuICAgICAgaWYgKHByb3AgaW4gb2JqICYmIG9ialtwcm9wXSAhPT0gcHJvdG9bcHJvcF0gJiYgIV8uY29udGFpbnMoa2V5cywgcHJvcCkpIHtcbiAgICAgICAga2V5cy5wdXNoKHByb3ApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBSZXRyaWV2ZSB0aGUgbmFtZXMgb2YgYW4gb2JqZWN0J3Mgb3duIHByb3BlcnRpZXMuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBPYmplY3Qua2V5c2AuXG4gIF8ua2V5cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gW107XG4gICAgaWYgKG5hdGl2ZUtleXMpIHJldHVybiBuYXRpdmVLZXlzKG9iaik7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoaGFzKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gICAgLy8gQWhlbSwgSUUgPCA5LlxuICAgIGlmIChoYXNFbnVtQnVnKSBjb2xsZWN0Tm9uRW51bVByb3BzKG9iaiwga2V5cyk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH07XG5cbiAgLy8gUmV0cmlldmUgYWxsIHRoZSBwcm9wZXJ0eSBuYW1lcyBvZiBhbiBvYmplY3QuXG4gIF8uYWxsS2V5cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gW107XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBrZXlzLnB1c2goa2V5KTtcbiAgICAvLyBBaGVtLCBJRSA8IDkuXG4gICAgaWYgKGhhc0VudW1CdWcpIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKTtcbiAgICByZXR1cm4ga2V5cztcbiAgfTtcblxuICAvLyBSZXRyaWV2ZSB0aGUgdmFsdWVzIG9mIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIF8udmFsdWVzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIHZhbHVlcyA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVzW2ldID0gb2JqW2tleXNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xuXG4gIC8vIFJldHVybnMgdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGl0ZXJhdGVlIHRvIGVhY2ggZWxlbWVudCBvZiB0aGUgb2JqZWN0LlxuICAvLyBJbiBjb250cmFzdCB0byBfLm1hcCBpdCByZXR1cm5zIGFuIG9iamVjdC5cbiAgXy5tYXBPYmplY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICAgIHJlc3VsdHMgPSB7fTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY3VycmVudEtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgcmVzdWx0c1tjdXJyZW50S2V5XSA9IGl0ZXJhdGVlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gQ29udmVydCBhbiBvYmplY3QgaW50byBhIGxpc3Qgb2YgYFtrZXksIHZhbHVlXWAgcGFpcnMuXG4gIC8vIFRoZSBvcHBvc2l0ZSBvZiBfLm9iamVjdC5cbiAgXy5wYWlycyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBwYWlycyA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcGFpcnNbaV0gPSBba2V5c1tpXSwgb2JqW2tleXNbaV1dXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhaXJzO1xuICB9O1xuXG4gIC8vIEludmVydCB0aGUga2V5cyBhbmQgdmFsdWVzIG9mIGFuIG9iamVjdC4gVGhlIHZhbHVlcyBtdXN0IGJlIHNlcmlhbGl6YWJsZS5cbiAgXy5pbnZlcnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0W29ialtrZXlzW2ldXV0gPSBrZXlzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHNvcnRlZCBsaXN0IG9mIHRoZSBmdW5jdGlvbiBuYW1lcyBhdmFpbGFibGUgb24gdGhlIG9iamVjdC5cbiAgLy8gQWxpYXNlZCBhcyBgbWV0aG9kc2AuXG4gIF8uZnVuY3Rpb25zID0gXy5tZXRob2RzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIG5hbWVzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbihvYmpba2V5XSkpIG5hbWVzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVzLnNvcnQoKTtcbiAgfTtcblxuICAvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYXNzaWduZXIgZnVuY3Rpb25zLlxuICB2YXIgY3JlYXRlQXNzaWduZXIgPSBmdW5jdGlvbihrZXlzRnVuYywgZGVmYXVsdHMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIGlmIChkZWZhdWx0cykgb2JqID0gT2JqZWN0KG9iaik7XG4gICAgICBpZiAobGVuZ3RoIDwgMiB8fCBvYmogPT0gbnVsbCkgcmV0dXJuIG9iajtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF0sXG4gICAgICAgICAgICBrZXlzID0ga2V5c0Z1bmMoc291cmNlKSxcbiAgICAgICAgICAgIGwgPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoIWRlZmF1bHRzIHx8IG9ialtrZXldID09PSB2b2lkIDApIG9ialtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcbiAgfTtcblxuICAvLyBFeHRlbmQgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIHByb3BlcnRpZXMgaW4gcGFzc2VkLWluIG9iamVjdChzKS5cbiAgXy5leHRlbmQgPSBjcmVhdGVBc3NpZ25lcihfLmFsbEtleXMpO1xuXG4gIC8vIEFzc2lnbnMgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIG93biBwcm9wZXJ0aWVzIGluIHRoZSBwYXNzZWQtaW4gb2JqZWN0KHMpLlxuICAvLyAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2Fzc2lnbilcbiAgXy5leHRlbmRPd24gPSBfLmFzc2lnbiA9IGNyZWF0ZUFzc2lnbmVyKF8ua2V5cyk7XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3Qga2V5IG9uIGFuIG9iamVjdCB0aGF0IHBhc3NlcyBhIHByZWRpY2F0ZSB0ZXN0LlxuICBfLmZpbmRLZXkgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKSwga2V5O1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKHByZWRpY2F0ZShvYmpba2V5XSwga2V5LCBvYmopKSByZXR1cm4ga2V5O1xuICAgIH1cbiAgfTtcblxuICAvLyBJbnRlcm5hbCBwaWNrIGhlbHBlciBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgYG9iamAgaGFzIGtleSBga2V5YC5cbiAgdmFyIGtleUluT2JqID0gZnVuY3Rpb24odmFsdWUsIGtleSwgb2JqKSB7XG4gICAgcmV0dXJuIGtleSBpbiBvYmo7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IG9ubHkgY29udGFpbmluZyB0aGUgd2hpdGVsaXN0ZWQgcHJvcGVydGllcy5cbiAgXy5waWNrID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgICB2YXIgcmVzdWx0ID0ge30sIGl0ZXJhdGVlID0ga2V5c1swXTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihpdGVyYXRlZSkpIHtcbiAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwga2V5c1sxXSk7XG4gICAgICBrZXlzID0gXy5hbGxLZXlzKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZXJhdGVlID0ga2V5SW5PYmo7XG4gICAgICBrZXlzID0gZmxhdHRlbihrZXlzLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgb2JqID0gT2JqZWN0KG9iaik7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIHZhciB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgaWYgKGl0ZXJhdGVlKHZhbHVlLCBrZXksIG9iaikpIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xuXG4gIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCB3aXRob3V0IHRoZSBibGFja2xpc3RlZCBwcm9wZXJ0aWVzLlxuICBfLm9taXQgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICAgIHZhciBpdGVyYXRlZSA9IGtleXNbMF0sIGNvbnRleHQ7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihpdGVyYXRlZSkpIHtcbiAgICAgIGl0ZXJhdGVlID0gXy5uZWdhdGUoaXRlcmF0ZWUpO1xuICAgICAgaWYgKGtleXMubGVuZ3RoID4gMSkgY29udGV4dCA9IGtleXNbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBfLm1hcChmbGF0dGVuKGtleXMsIGZhbHNlLCBmYWxzZSksIFN0cmluZyk7XG4gICAgICBpdGVyYXRlZSA9IGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuICFfLmNvbnRhaW5zKGtleXMsIGtleSk7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gXy5waWNrKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpO1xuICB9KTtcblxuICAvLyBGaWxsIGluIGEgZ2l2ZW4gb2JqZWN0IHdpdGggZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICBfLmRlZmF1bHRzID0gY3JlYXRlQXNzaWduZXIoXy5hbGxLZXlzLCB0cnVlKTtcblxuICAvLyBDcmVhdGVzIGFuIG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gdGhlIGdpdmVuIHByb3RvdHlwZSBvYmplY3QuXG4gIC8vIElmIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhcmUgcHJvdmlkZWQgdGhlbiB0aGV5IHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4gIC8vIGNyZWF0ZWQgb2JqZWN0LlxuICBfLmNyZWF0ZSA9IGZ1bmN0aW9uKHByb3RvdHlwZSwgcHJvcHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUNyZWF0ZShwcm90b3R5cGUpO1xuICAgIGlmIChwcm9wcykgXy5leHRlbmRPd24ocmVzdWx0LCBwcm9wcyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSAoc2hhbGxvdy1jbG9uZWQpIGR1cGxpY2F0ZSBvZiBhbiBvYmplY3QuXG4gIF8uY2xvbmUgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgICByZXR1cm4gXy5pc0FycmF5KG9iaikgPyBvYmouc2xpY2UoKSA6IF8uZXh0ZW5kKHt9LCBvYmopO1xuICB9O1xuXG4gIC8vIEludm9rZXMgaW50ZXJjZXB0b3Igd2l0aCB0aGUgb2JqLCBhbmQgdGhlbiByZXR1cm5zIG9iai5cbiAgLy8gVGhlIHByaW1hcnkgcHVycG9zZSBvZiB0aGlzIG1ldGhvZCBpcyB0byBcInRhcCBpbnRvXCIgYSBtZXRob2QgY2hhaW4sIGluXG4gIC8vIG9yZGVyIHRvIHBlcmZvcm0gb3BlcmF0aW9ucyBvbiBpbnRlcm1lZGlhdGUgcmVzdWx0cyB3aXRoaW4gdGhlIGNoYWluLlxuICBfLnRhcCA9IGZ1bmN0aW9uKG9iaiwgaW50ZXJjZXB0b3IpIHtcbiAgICBpbnRlcmNlcHRvcihvYmopO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gUmV0dXJucyB3aGV0aGVyIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBzZXQgb2YgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8uaXNNYXRjaCA9IGZ1bmN0aW9uKG9iamVjdCwgYXR0cnMpIHtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhhdHRycyksIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkgcmV0dXJuICFsZW5ndGg7XG4gICAgdmFyIG9iaiA9IE9iamVjdChvYmplY3QpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKGF0dHJzW2tleV0gIT09IG9ialtrZXldIHx8ICEoa2V5IGluIG9iaikpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cblxuICAvLyBJbnRlcm5hbCByZWN1cnNpdmUgY29tcGFyaXNvbiBmdW5jdGlvbiBmb3IgYGlzRXF1YWxgLlxuICB2YXIgZXEsIGRlZXBFcTtcbiAgZXEgPSBmdW5jdGlvbihhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAgIC8vIElkZW50aWNhbCBvYmplY3RzIGFyZSBlcXVhbC4gYDAgPT09IC0wYCwgYnV0IHRoZXkgYXJlbid0IGlkZW50aWNhbC5cbiAgICAvLyBTZWUgdGhlIFtIYXJtb255IGBlZ2FsYCBwcm9wb3NhbF0oaHR0cDovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9aGFybW9ueTplZ2FsKS5cbiAgICBpZiAoYSA9PT0gYikgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT09IDEgLyBiO1xuICAgIC8vIGBudWxsYCBvciBgdW5kZWZpbmVkYCBvbmx5IGVxdWFsIHRvIGl0c2VsZiAoc3RyaWN0IGNvbXBhcmlzb24pLlxuICAgIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS5cbiAgICBpZiAoYSAhPT0gYSkgcmV0dXJuIGIgIT09IGI7XG4gICAgLy8gRXhoYXVzdCBwcmltaXRpdmUgY2hlY2tzXG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgYTtcbiAgICBpZiAodHlwZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBkZWVwRXEoYSwgYiwgYVN0YWNrLCBiU3RhY2spO1xuICB9O1xuXG4gIC8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG4gIGRlZXBFcSA9IGZ1bmN0aW9uKGEsIGIsIGFTdGFjaywgYlN0YWNrKSB7XG4gICAgLy8gVW53cmFwIGFueSB3cmFwcGVkIG9iamVjdHMuXG4gICAgaWYgKGEgaW5zdGFuY2VvZiBfKSBhID0gYS5fd3JhcHBlZDtcbiAgICBpZiAoYiBpbnN0YW5jZW9mIF8pIGIgPSBiLl93cmFwcGVkO1xuICAgIC8vIENvbXBhcmUgYFtbQ2xhc3NdXWAgbmFtZXMuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHRvU3RyaW5nLmNhbGwoYSk7XG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gdG9TdHJpbmcuY2FsbChiKSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICAvLyBTdHJpbmdzLCBudW1iZXJzLCByZWd1bGFyIGV4cHJlc3Npb25zLCBkYXRlcywgYW5kIGJvb2xlYW5zIGFyZSBjb21wYXJlZCBieSB2YWx1ZS5cbiAgICAgIGNhc2UgJ1tvYmplY3QgUmVnRXhwXSc6XG4gICAgICAvLyBSZWdFeHBzIGFyZSBjb2VyY2VkIHRvIHN0cmluZ3MgZm9yIGNvbXBhcmlzb24gKE5vdGU6ICcnICsgL2EvaSA9PT0gJy9hL2knKVxuICAgICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcbiAgICAgICAgLy8gUHJpbWl0aXZlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvYmplY3Qgd3JhcHBlcnMgYXJlIGVxdWl2YWxlbnQ7IHRodXMsIGBcIjVcImAgaXNcbiAgICAgICAgLy8gZXF1aXZhbGVudCB0byBgbmV3IFN0cmluZyhcIjVcIilgLlxuICAgICAgICByZXR1cm4gJycgKyBhID09PSAnJyArIGI7XG4gICAgICBjYXNlICdbb2JqZWN0IE51bWJlcl0nOlxuICAgICAgICAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLlxuICAgICAgICAvLyBPYmplY3QoTmFOKSBpcyBlcXVpdmFsZW50IHRvIE5hTi5cbiAgICAgICAgaWYgKCthICE9PSArYSkgcmV0dXJuICtiICE9PSArYjtcbiAgICAgICAgLy8gQW4gYGVnYWxgIGNvbXBhcmlzb24gaXMgcGVyZm9ybWVkIGZvciBvdGhlciBudW1lcmljIHZhbHVlcy5cbiAgICAgICAgcmV0dXJuICthID09PSAwID8gMSAvICthID09PSAxIC8gYiA6ICthID09PSArYjtcbiAgICAgIGNhc2UgJ1tvYmplY3QgRGF0ZV0nOlxuICAgICAgY2FzZSAnW29iamVjdCBCb29sZWFuXSc6XG4gICAgICAgIC8vIENvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtZXJpYyBwcmltaXRpdmUgdmFsdWVzLiBEYXRlcyBhcmUgY29tcGFyZWQgYnkgdGhlaXJcbiAgICAgICAgLy8gbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zLiBOb3RlIHRoYXQgaW52YWxpZCBkYXRlcyB3aXRoIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9uc1xuICAgICAgICAvLyBvZiBgTmFOYCBhcmUgbm90IGVxdWl2YWxlbnQuXG4gICAgICAgIHJldHVybiArYSA9PT0gK2I7XG4gICAgICBjYXNlICdbb2JqZWN0IFN5bWJvbF0nOlxuICAgICAgICByZXR1cm4gU3ltYm9sUHJvdG8udmFsdWVPZi5jYWxsKGEpID09PSBTeW1ib2xQcm90by52YWx1ZU9mLmNhbGwoYik7XG4gICAgfVxuXG4gICAgdmFyIGFyZUFycmF5cyA9IGNsYXNzTmFtZSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICBpZiAoIWFyZUFycmF5cykge1xuICAgICAgaWYgKHR5cGVvZiBhICE9ICdvYmplY3QnIHx8IHR5cGVvZiBiICE9ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIC8vIE9iamVjdHMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1aXZhbGVudCwgYnV0IGBPYmplY3RgcyBvciBgQXJyYXlgc1xuICAgICAgLy8gZnJvbSBkaWZmZXJlbnQgZnJhbWVzIGFyZS5cbiAgICAgIHZhciBhQ3RvciA9IGEuY29uc3RydWN0b3IsIGJDdG9yID0gYi5jb25zdHJ1Y3RvcjtcbiAgICAgIGlmIChhQ3RvciAhPT0gYkN0b3IgJiYgIShfLmlzRnVuY3Rpb24oYUN0b3IpICYmIGFDdG9yIGluc3RhbmNlb2YgYUN0b3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmlzRnVuY3Rpb24oYkN0b3IpICYmIGJDdG9yIGluc3RhbmNlb2YgYkN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICYmICgnY29uc3RydWN0b3InIGluIGEgJiYgJ2NvbnN0cnVjdG9yJyBpbiBiKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEFzc3VtZSBlcXVhbGl0eSBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWNcbiAgICAvLyBzdHJ1Y3R1cmVzIGlzIGFkYXB0ZWQgZnJvbSBFUyA1LjEgc2VjdGlvbiAxNS4xMi4zLCBhYnN0cmFjdCBvcGVyYXRpb24gYEpPYC5cblxuICAgIC8vIEluaXRpYWxpemluZyBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICAvLyBJdCdzIGRvbmUgaGVyZSBzaW5jZSB3ZSBvbmx5IG5lZWQgdGhlbSBmb3Igb2JqZWN0cyBhbmQgYXJyYXlzIGNvbXBhcmlzb24uXG4gICAgYVN0YWNrID0gYVN0YWNrIHx8IFtdO1xuICAgIGJTdGFjayA9IGJTdGFjayB8fCBbXTtcbiAgICB2YXIgbGVuZ3RoID0gYVN0YWNrLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIC8vIExpbmVhciBzZWFyY2guIFBlcmZvcm1hbmNlIGlzIGludmVyc2VseSBwcm9wb3J0aW9uYWwgdG8gdGhlIG51bWJlciBvZlxuICAgICAgLy8gdW5pcXVlIG5lc3RlZCBzdHJ1Y3R1cmVzLlxuICAgICAgaWYgKGFTdGFja1tsZW5ndGhdID09PSBhKSByZXR1cm4gYlN0YWNrW2xlbmd0aF0gPT09IGI7XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBmaXJzdCBvYmplY3QgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIGFTdGFjay5wdXNoKGEpO1xuICAgIGJTdGFjay5wdXNoKGIpO1xuXG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIGFuZCBhcnJheXMuXG4gICAgaWYgKGFyZUFycmF5cykge1xuICAgICAgLy8gQ29tcGFyZSBhcnJheSBsZW5ndGhzIHRvIGRldGVybWluZSBpZiBhIGRlZXAgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkuXG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICAvLyBEZWVwIGNvbXBhcmUgdGhlIGNvbnRlbnRzLCBpZ25vcmluZyBub24tbnVtZXJpYyBwcm9wZXJ0aWVzLlxuICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgIGlmICghZXEoYVtsZW5ndGhdLCBiW2xlbmd0aF0sIGFTdGFjaywgYlN0YWNrKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEZWVwIGNvbXBhcmUgb2JqZWN0cy5cbiAgICAgIHZhciBrZXlzID0gXy5rZXlzKGEpLCBrZXk7XG4gICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICAgIC8vIEVuc3VyZSB0aGF0IGJvdGggb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIG51bWJlciBvZiBwcm9wZXJ0aWVzIGJlZm9yZSBjb21wYXJpbmcgZGVlcCBlcXVhbGl0eS5cbiAgICAgIGlmIChfLmtleXMoYikubGVuZ3RoICE9PSBsZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICAvLyBEZWVwIGNvbXBhcmUgZWFjaCBtZW1iZXJcbiAgICAgICAga2V5ID0ga2V5c1tsZW5ndGhdO1xuICAgICAgICBpZiAoIShoYXMoYiwga2V5KSAmJiBlcShhW2tleV0sIGJba2V5XSwgYVN0YWNrLCBiU3RhY2spKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucG9wKCk7XG4gICAgYlN0YWNrLnBvcCgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIFBlcmZvcm0gYSBkZWVwIGNvbXBhcmlzb24gdG8gY2hlY2sgaWYgdHdvIG9iamVjdHMgYXJlIGVxdWFsLlxuICBfLmlzRXF1YWwgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGVxKGEsIGIpO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gYXJyYXksIHN0cmluZywgb3Igb2JqZWN0IGVtcHR5P1xuICAvLyBBbiBcImVtcHR5XCIgb2JqZWN0IGhhcyBubyBlbnVtZXJhYmxlIG93bi1wcm9wZXJ0aWVzLlxuICBfLmlzRW1wdHkgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgIGlmIChpc0FycmF5TGlrZShvYmopICYmIChfLmlzQXJyYXkob2JqKSB8fCBfLmlzU3RyaW5nKG9iaikgfHwgXy5pc0FyZ3VtZW50cyhvYmopKSkgcmV0dXJuIG9iai5sZW5ndGggPT09IDA7XG4gICAgcmV0dXJuIF8ua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGEgRE9NIGVsZW1lbnQ/XG4gIF8uaXNFbGVtZW50ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuICEhKG9iaiAmJiBvYmoubm9kZVR5cGUgPT09IDEpO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYW4gYXJyYXk/XG4gIC8vIERlbGVnYXRlcyB0byBFQ01BNSdzIG5hdGl2ZSBBcnJheS5pc0FycmF5XG4gIF8uaXNBcnJheSA9IG5hdGl2ZUlzQXJyYXkgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIGFuIG9iamVjdD9cbiAgXy5pc09iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIG9iajtcbiAgICByZXR1cm4gdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlID09PSAnb2JqZWN0JyAmJiAhIW9iajtcbiAgfTtcblxuICAvLyBBZGQgc29tZSBpc1R5cGUgbWV0aG9kczogaXNBcmd1bWVudHMsIGlzRnVuY3Rpb24sIGlzU3RyaW5nLCBpc051bWJlciwgaXNEYXRlLCBpc1JlZ0V4cCwgaXNFcnJvciwgaXNNYXAsIGlzV2Vha01hcCwgaXNTZXQsIGlzV2Vha1NldC5cbiAgXy5lYWNoKFsnQXJndW1lbnRzJywgJ0Z1bmN0aW9uJywgJ1N0cmluZycsICdOdW1iZXInLCAnRGF0ZScsICdSZWdFeHAnLCAnRXJyb3InLCAnU3ltYm9sJywgJ01hcCcsICdXZWFrTWFwJywgJ1NldCcsICdXZWFrU2V0J10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBfWydpcycgKyBuYW1lXSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgJyArIG5hbWUgKyAnXSc7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gRGVmaW5lIGEgZmFsbGJhY2sgdmVyc2lvbiBvZiB0aGUgbWV0aG9kIGluIGJyb3dzZXJzIChhaGVtLCBJRSA8IDkpLCB3aGVyZVxuICAvLyB0aGVyZSBpc24ndCBhbnkgaW5zcGVjdGFibGUgXCJBcmd1bWVudHNcIiB0eXBlLlxuICBpZiAoIV8uaXNBcmd1bWVudHMoYXJndW1lbnRzKSkge1xuICAgIF8uaXNBcmd1bWVudHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBoYXMob2JqLCAnY2FsbGVlJyk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIE9wdGltaXplIGBpc0Z1bmN0aW9uYCBpZiBhcHByb3ByaWF0ZS4gV29yayBhcm91bmQgc29tZSB0eXBlb2YgYnVncyBpbiBvbGQgdjgsXG4gIC8vIElFIDExICgjMTYyMSksIFNhZmFyaSA4ICgjMTkyOSksIGFuZCBQaGFudG9tSlMgKCMyMjM2KS5cbiAgdmFyIG5vZGVsaXN0ID0gcm9vdC5kb2N1bWVudCAmJiByb290LmRvY3VtZW50LmNoaWxkTm9kZXM7XG4gIGlmICh0eXBlb2YgLy4vICE9ICdmdW5jdGlvbicgJiYgdHlwZW9mIEludDhBcnJheSAhPSAnb2JqZWN0JyAmJiB0eXBlb2Ygbm9kZWxpc3QgIT0gJ2Z1bmN0aW9uJykge1xuICAgIF8uaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJyB8fCBmYWxzZTtcbiAgICB9O1xuICB9XG5cbiAgLy8gSXMgYSBnaXZlbiBvYmplY3QgYSBmaW5pdGUgbnVtYmVyP1xuICBfLmlzRmluaXRlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuICFfLmlzU3ltYm9sKG9iaikgJiYgaXNGaW5pdGUob2JqKSAmJiAhaXNOYU4ocGFyc2VGbG9hdChvYmopKTtcbiAgfTtcblxuICAvLyBJcyB0aGUgZ2l2ZW4gdmFsdWUgYE5hTmA/XG4gIF8uaXNOYU4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXy5pc051bWJlcihvYmopICYmIGlzTmFOKG9iaik7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIGJvb2xlYW4/XG4gIF8uaXNCb29sZWFuID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZSB8fCBvYmogPT09IGZhbHNlIHx8IHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgZXF1YWwgdG8gbnVsbD9cbiAgXy5pc051bGwgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgdW5kZWZpbmVkP1xuICBfLmlzVW5kZWZpbmVkID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdm9pZCAwO1xuICB9O1xuXG4gIC8vIFNob3J0Y3V0IGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gcHJvcGVydHkgZGlyZWN0bHlcbiAgLy8gb24gaXRzZWxmIChpbiBvdGhlciB3b3Jkcywgbm90IG9uIGEgcHJvdG90eXBlKS5cbiAgXy5oYXMgPSBmdW5jdGlvbihvYmosIHBhdGgpIHtcbiAgICBpZiAoIV8uaXNBcnJheShwYXRoKSkge1xuICAgICAgcmV0dXJuIGhhcyhvYmosIHBhdGgpO1xuICAgIH1cbiAgICB2YXIgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IHBhdGhbaV07XG4gICAgICBpZiAob2JqID09IG51bGwgfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iaiA9IG9ialtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gISFsZW5ndGg7XG4gIH07XG5cbiAgLy8gVXRpbGl0eSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBSdW4gVW5kZXJzY29yZS5qcyBpbiAqbm9Db25mbGljdCogbW9kZSwgcmV0dXJuaW5nIHRoZSBgX2AgdmFyaWFibGUgdG8gaXRzXG4gIC8vIHByZXZpb3VzIG93bmVyLiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgcm9vdC5fID0gcHJldmlvdXNVbmRlcnNjb3JlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIEtlZXAgdGhlIGlkZW50aXR5IGZ1bmN0aW9uIGFyb3VuZCBmb3IgZGVmYXVsdCBpdGVyYXRlZXMuXG4gIF8uaWRlbnRpdHkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICAvLyBQcmVkaWNhdGUtZ2VuZXJhdGluZyBmdW5jdGlvbnMuIE9mdGVuIHVzZWZ1bCBvdXRzaWRlIG9mIFVuZGVyc2NvcmUuXG4gIF8uY29uc3RhbnQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICB9O1xuXG4gIF8ubm9vcCA9IGZ1bmN0aW9uKCl7fTtcblxuICAvLyBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBwYXNzZWQgYW4gb2JqZWN0LCB3aWxsIHRyYXZlcnNlIHRoYXQgb2JqZWN04oCZc1xuICAvLyBwcm9wZXJ0aWVzIGRvd24gdGhlIGdpdmVuIGBwYXRoYCwgc3BlY2lmaWVkIGFzIGFuIGFycmF5IG9mIGtleXMgb3IgaW5kZXhlcy5cbiAgXy5wcm9wZXJ0eSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICBpZiAoIV8uaXNBcnJheShwYXRoKSkge1xuICAgICAgcmV0dXJuIHNoYWxsb3dQcm9wZXJ0eShwYXRoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIGRlZXBHZXQob2JqLCBwYXRoKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlcyBhIGZ1bmN0aW9uIGZvciBhIGdpdmVuIG9iamVjdCB0aGF0IHJldHVybnMgYSBnaXZlbiBwcm9wZXJ0eS5cbiAgXy5wcm9wZXJ0eU9mID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24ocGF0aCkge1xuICAgICAgcmV0dXJuICFfLmlzQXJyYXkocGF0aCkgPyBvYmpbcGF0aF0gOiBkZWVwR2V0KG9iaiwgcGF0aCk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgcHJlZGljYXRlIGZvciBjaGVja2luZyB3aGV0aGVyIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBzZXQgb2ZcbiAgLy8gYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8ubWF0Y2hlciA9IF8ubWF0Y2hlcyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgYXR0cnMgPSBfLmV4dGVuZE93bih7fSwgYXR0cnMpO1xuICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBfLmlzTWF0Y2gob2JqLCBhdHRycyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSdW4gYSBmdW5jdGlvbiAqKm4qKiB0aW1lcy5cbiAgXy50aW1lcyA9IGZ1bmN0aW9uKG4sIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIGFjY3VtID0gQXJyYXkoTWF0aC5tYXgoMCwgbikpO1xuICAgIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwgY29udGV4dCwgMSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIGFjY3VtW2ldID0gaXRlcmF0ZWUoaSk7XG4gICAgcmV0dXJuIGFjY3VtO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIGFuZCBtYXggKGluY2x1c2l2ZSkuXG4gIF8ucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICBpZiAobWF4ID09IG51bGwpIHtcbiAgICAgIG1heCA9IG1pbjtcbiAgICAgIG1pbiA9IDA7XG4gICAgfVxuICAgIHJldHVybiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xuICB9O1xuXG4gIC8vIEEgKHBvc3NpYmx5IGZhc3Rlcikgd2F5IHRvIGdldCB0aGUgY3VycmVudCB0aW1lc3RhbXAgYXMgYW4gaW50ZWdlci5cbiAgXy5ub3cgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH07XG5cbiAgLy8gTGlzdCBvZiBIVE1MIGVudGl0aWVzIGZvciBlc2NhcGluZy5cbiAgdmFyIGVzY2FwZU1hcCA9IHtcbiAgICAnJic6ICcmYW1wOycsXG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0OycsXG4gICAgJ1wiJzogJyZxdW90OycsXG4gICAgXCInXCI6ICcmI3gyNzsnLFxuICAgICdgJzogJyYjeDYwOydcbiAgfTtcbiAgdmFyIHVuZXNjYXBlTWFwID0gXy5pbnZlcnQoZXNjYXBlTWFwKTtcblxuICAvLyBGdW5jdGlvbnMgZm9yIGVzY2FwaW5nIGFuZCB1bmVzY2FwaW5nIHN0cmluZ3MgdG8vZnJvbSBIVE1MIGludGVycG9sYXRpb24uXG4gIHZhciBjcmVhdGVFc2NhcGVyID0gZnVuY3Rpb24obWFwKSB7XG4gICAgdmFyIGVzY2FwZXIgPSBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgcmV0dXJuIG1hcFttYXRjaF07XG4gICAgfTtcbiAgICAvLyBSZWdleGVzIGZvciBpZGVudGlmeWluZyBhIGtleSB0aGF0IG5lZWRzIHRvIGJlIGVzY2FwZWQuXG4gICAgdmFyIHNvdXJjZSA9ICcoPzonICsgXy5rZXlzKG1hcCkuam9pbignfCcpICsgJyknO1xuICAgIHZhciB0ZXN0UmVnZXhwID0gUmVnRXhwKHNvdXJjZSk7XG4gICAgdmFyIHJlcGxhY2VSZWdleHAgPSBSZWdFeHAoc291cmNlLCAnZycpO1xuICAgIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgIHN0cmluZyA9IHN0cmluZyA9PSBudWxsID8gJycgOiAnJyArIHN0cmluZztcbiAgICAgIHJldHVybiB0ZXN0UmVnZXhwLnRlc3Qoc3RyaW5nKSA/IHN0cmluZy5yZXBsYWNlKHJlcGxhY2VSZWdleHAsIGVzY2FwZXIpIDogc3RyaW5nO1xuICAgIH07XG4gIH07XG4gIF8uZXNjYXBlID0gY3JlYXRlRXNjYXBlcihlc2NhcGVNYXApO1xuICBfLnVuZXNjYXBlID0gY3JlYXRlRXNjYXBlcih1bmVzY2FwZU1hcCk7XG5cbiAgLy8gVHJhdmVyc2VzIHRoZSBjaGlsZHJlbiBvZiBgb2JqYCBhbG9uZyBgcGF0aGAuIElmIGEgY2hpbGQgaXMgYSBmdW5jdGlvbiwgaXRcbiAgLy8gaXMgaW52b2tlZCB3aXRoIGl0cyBwYXJlbnQgYXMgY29udGV4dC4gUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGZpbmFsXG4gIC8vIGNoaWxkLCBvciBgZmFsbGJhY2tgIGlmIGFueSBjaGlsZCBpcyB1bmRlZmluZWQuXG4gIF8ucmVzdWx0ID0gZnVuY3Rpb24ob2JqLCBwYXRoLCBmYWxsYmFjaykge1xuICAgIGlmICghXy5pc0FycmF5KHBhdGgpKSBwYXRoID0gW3BhdGhdO1xuICAgIHZhciBsZW5ndGggPSBwYXRoLmxlbmd0aDtcbiAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgcmV0dXJuIF8uaXNGdW5jdGlvbihmYWxsYmFjaykgPyBmYWxsYmFjay5jYWxsKG9iaikgOiBmYWxsYmFjaztcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHByb3AgPSBvYmogPT0gbnVsbCA/IHZvaWQgMCA6IG9ialtwYXRoW2ldXTtcbiAgICAgIGlmIChwcm9wID09PSB2b2lkIDApIHtcbiAgICAgICAgcHJvcCA9IGZhbGxiYWNrO1xuICAgICAgICBpID0gbGVuZ3RoOyAvLyBFbnN1cmUgd2UgZG9uJ3QgY29udGludWUgaXRlcmF0aW5nLlxuICAgICAgfVxuICAgICAgb2JqID0gXy5pc0Z1bmN0aW9uKHByb3ApID8gcHJvcC5jYWxsKG9iaikgOiBwcm9wO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlIGEgdW5pcXVlIGludGVnZXIgaWQgKHVuaXF1ZSB3aXRoaW4gdGhlIGVudGlyZSBjbGllbnQgc2Vzc2lvbikuXG4gIC8vIFVzZWZ1bCBmb3IgdGVtcG9yYXJ5IERPTSBpZHMuXG4gIHZhciBpZENvdW50ZXIgPSAwO1xuICBfLnVuaXF1ZUlkID0gZnVuY3Rpb24ocHJlZml4KSB7XG4gICAgdmFyIGlkID0gKytpZENvdW50ZXIgKyAnJztcbiAgICByZXR1cm4gcHJlZml4ID8gcHJlZml4ICsgaWQgOiBpZDtcbiAgfTtcblxuICAvLyBCeSBkZWZhdWx0LCBVbmRlcnNjb3JlIHVzZXMgRVJCLXN0eWxlIHRlbXBsYXRlIGRlbGltaXRlcnMsIGNoYW5nZSB0aGVcbiAgLy8gZm9sbG93aW5nIHRlbXBsYXRlIHNldHRpbmdzIHRvIHVzZSBhbHRlcm5hdGl2ZSBkZWxpbWl0ZXJzLlxuICBfLnRlbXBsYXRlU2V0dGluZ3MgPSB7XG4gICAgZXZhbHVhdGU6IC88JShbXFxzXFxTXSs/KSU+L2csXG4gICAgaW50ZXJwb2xhdGU6IC88JT0oW1xcc1xcU10rPyklPi9nLFxuICAgIGVzY2FwZTogLzwlLShbXFxzXFxTXSs/KSU+L2dcbiAgfTtcblxuICAvLyBXaGVuIGN1c3RvbWl6aW5nIGB0ZW1wbGF0ZVNldHRpbmdzYCwgaWYgeW91IGRvbid0IHdhbnQgdG8gZGVmaW5lIGFuXG4gIC8vIGludGVycG9sYXRpb24sIGV2YWx1YXRpb24gb3IgZXNjYXBpbmcgcmVnZXgsIHdlIG5lZWQgb25lIHRoYXQgaXNcbiAgLy8gZ3VhcmFudGVlZCBub3QgdG8gbWF0Y2guXG4gIHZhciBub01hdGNoID0gLyguKV4vO1xuXG4gIC8vIENlcnRhaW4gY2hhcmFjdGVycyBuZWVkIHRvIGJlIGVzY2FwZWQgc28gdGhhdCB0aGV5IGNhbiBiZSBwdXQgaW50byBhXG4gIC8vIHN0cmluZyBsaXRlcmFsLlxuICB2YXIgZXNjYXBlcyA9IHtcbiAgICBcIidcIjogXCInXCIsXG4gICAgJ1xcXFwnOiAnXFxcXCcsXG4gICAgJ1xccic6ICdyJyxcbiAgICAnXFxuJzogJ24nLFxuICAgICdcXHUyMDI4JzogJ3UyMDI4JyxcbiAgICAnXFx1MjAyOSc6ICd1MjAyOSdcbiAgfTtcblxuICB2YXIgZXNjYXBlUmVnRXhwID0gL1xcXFx8J3xcXHJ8XFxufFxcdTIwMjh8XFx1MjAyOS9nO1xuXG4gIHZhciBlc2NhcGVDaGFyID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgICByZXR1cm4gJ1xcXFwnICsgZXNjYXBlc1ttYXRjaF07XG4gIH07XG5cbiAgLy8gSmF2YVNjcmlwdCBtaWNyby10ZW1wbGF0aW5nLCBzaW1pbGFyIHRvIEpvaG4gUmVzaWcncyBpbXBsZW1lbnRhdGlvbi5cbiAgLy8gVW5kZXJzY29yZSB0ZW1wbGF0aW5nIGhhbmRsZXMgYXJiaXRyYXJ5IGRlbGltaXRlcnMsIHByZXNlcnZlcyB3aGl0ZXNwYWNlLFxuICAvLyBhbmQgY29ycmVjdGx5IGVzY2FwZXMgcXVvdGVzIHdpdGhpbiBpbnRlcnBvbGF0ZWQgY29kZS5cbiAgLy8gTkI6IGBvbGRTZXR0aW5nc2Agb25seSBleGlzdHMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICBfLnRlbXBsYXRlID0gZnVuY3Rpb24odGV4dCwgc2V0dGluZ3MsIG9sZFNldHRpbmdzKSB7XG4gICAgaWYgKCFzZXR0aW5ncyAmJiBvbGRTZXR0aW5ncykgc2V0dGluZ3MgPSBvbGRTZXR0aW5ncztcbiAgICBzZXR0aW5ncyA9IF8uZGVmYXVsdHMoe30sIHNldHRpbmdzLCBfLnRlbXBsYXRlU2V0dGluZ3MpO1xuXG4gICAgLy8gQ29tYmluZSBkZWxpbWl0ZXJzIGludG8gb25lIHJlZ3VsYXIgZXhwcmVzc2lvbiB2aWEgYWx0ZXJuYXRpb24uXG4gICAgdmFyIG1hdGNoZXIgPSBSZWdFeHAoW1xuICAgICAgKHNldHRpbmdzLmVzY2FwZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAoc2V0dGluZ3MuaW50ZXJwb2xhdGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICAgKHNldHRpbmdzLmV2YWx1YXRlIHx8IG5vTWF0Y2gpLnNvdXJjZVxuICAgIF0uam9pbignfCcpICsgJ3wkJywgJ2cnKTtcblxuICAgIC8vIENvbXBpbGUgdGhlIHRlbXBsYXRlIHNvdXJjZSwgZXNjYXBpbmcgc3RyaW5nIGxpdGVyYWxzIGFwcHJvcHJpYXRlbHkuXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgc291cmNlID0gXCJfX3ArPSdcIjtcbiAgICB0ZXh0LnJlcGxhY2UobWF0Y2hlciwgZnVuY3Rpb24obWF0Y2gsIGVzY2FwZSwgaW50ZXJwb2xhdGUsIGV2YWx1YXRlLCBvZmZzZXQpIHtcbiAgICAgIHNvdXJjZSArPSB0ZXh0LnNsaWNlKGluZGV4LCBvZmZzZXQpLnJlcGxhY2UoZXNjYXBlUmVnRXhwLCBlc2NhcGVDaGFyKTtcbiAgICAgIGluZGV4ID0gb2Zmc2V0ICsgbWF0Y2gubGVuZ3RoO1xuXG4gICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgZXNjYXBlICsgXCIpKT09bnVsbD8nJzpfLmVzY2FwZShfX3QpKStcXG4nXCI7XG4gICAgICB9IGVsc2UgaWYgKGludGVycG9sYXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgaW50ZXJwb2xhdGUgKyBcIikpPT1udWxsPycnOl9fdCkrXFxuJ1wiO1xuICAgICAgfSBlbHNlIGlmIChldmFsdWF0ZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInO1xcblwiICsgZXZhbHVhdGUgKyBcIlxcbl9fcCs9J1wiO1xuICAgICAgfVxuXG4gICAgICAvLyBBZG9iZSBWTXMgbmVlZCB0aGUgbWF0Y2ggcmV0dXJuZWQgdG8gcHJvZHVjZSB0aGUgY29ycmVjdCBvZmZzZXQuXG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG4gICAgc291cmNlICs9IFwiJztcXG5cIjtcblxuICAgIC8vIElmIGEgdmFyaWFibGUgaXMgbm90IHNwZWNpZmllZCwgcGxhY2UgZGF0YSB2YWx1ZXMgaW4gbG9jYWwgc2NvcGUuXG4gICAgaWYgKCFzZXR0aW5ncy52YXJpYWJsZSkgc291cmNlID0gJ3dpdGgob2JqfHx7fSl7XFxuJyArIHNvdXJjZSArICd9XFxuJztcblxuICAgIHNvdXJjZSA9IFwidmFyIF9fdCxfX3A9JycsX19qPUFycmF5LnByb3RvdHlwZS5qb2luLFwiICtcbiAgICAgIFwicHJpbnQ9ZnVuY3Rpb24oKXtfX3ArPV9fai5jYWxsKGFyZ3VtZW50cywnJyk7fTtcXG5cIiArXG4gICAgICBzb3VyY2UgKyAncmV0dXJuIF9fcDtcXG4nO1xuXG4gICAgdmFyIHJlbmRlcjtcbiAgICB0cnkge1xuICAgICAgcmVuZGVyID0gbmV3IEZ1bmN0aW9uKHNldHRpbmdzLnZhcmlhYmxlIHx8ICdvYmonLCAnXycsIHNvdXJjZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZS5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cblxuICAgIHZhciB0ZW1wbGF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHJldHVybiByZW5kZXIuY2FsbCh0aGlzLCBkYXRhLCBfKTtcbiAgICB9O1xuXG4gICAgLy8gUHJvdmlkZSB0aGUgY29tcGlsZWQgc291cmNlIGFzIGEgY29udmVuaWVuY2UgZm9yIHByZWNvbXBpbGF0aW9uLlxuICAgIHZhciBhcmd1bWVudCA9IHNldHRpbmdzLnZhcmlhYmxlIHx8ICdvYmonO1xuICAgIHRlbXBsYXRlLnNvdXJjZSA9ICdmdW5jdGlvbignICsgYXJndW1lbnQgKyAnKXtcXG4nICsgc291cmNlICsgJ30nO1xuXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9O1xuXG4gIC8vIEFkZCBhIFwiY2hhaW5cIiBmdW5jdGlvbi4gU3RhcnQgY2hhaW5pbmcgYSB3cmFwcGVkIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLmNoYWluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGluc3RhbmNlID0gXyhvYmopO1xuICAgIGluc3RhbmNlLl9jaGFpbiA9IHRydWU7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xuXG4gIC8vIE9PUFxuICAvLyAtLS0tLS0tLS0tLS0tLS1cbiAgLy8gSWYgVW5kZXJzY29yZSBpcyBjYWxsZWQgYXMgYSBmdW5jdGlvbiwgaXQgcmV0dXJucyBhIHdyYXBwZWQgb2JqZWN0IHRoYXRcbiAgLy8gY2FuIGJlIHVzZWQgT08tc3R5bGUuIFRoaXMgd3JhcHBlciBob2xkcyBhbHRlcmVkIHZlcnNpb25zIG9mIGFsbCB0aGVcbiAgLy8gdW5kZXJzY29yZSBmdW5jdGlvbnMuIFdyYXBwZWQgb2JqZWN0cyBtYXkgYmUgY2hhaW5lZC5cblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udGludWUgY2hhaW5pbmcgaW50ZXJtZWRpYXRlIHJlc3VsdHMuXG4gIHZhciBjaGFpblJlc3VsdCA9IGZ1bmN0aW9uKGluc3RhbmNlLCBvYmopIHtcbiAgICByZXR1cm4gaW5zdGFuY2UuX2NoYWluID8gXyhvYmopLmNoYWluKCkgOiBvYmo7XG4gIH07XG5cbiAgLy8gQWRkIHlvdXIgb3duIGN1c3RvbSBmdW5jdGlvbnMgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm1peGluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgXy5lYWNoKF8uZnVuY3Rpb25zKG9iaiksIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHZhciBmdW5jID0gX1tuYW1lXSA9IG9ialtuYW1lXTtcbiAgICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gW3RoaXMuX3dyYXBwZWRdO1xuICAgICAgICBwdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiBjaGFpblJlc3VsdCh0aGlzLCBmdW5jLmFwcGx5KF8sIGFyZ3MpKTtcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIF87XG4gIH07XG5cbiAgLy8gQWRkIGFsbCBvZiB0aGUgVW5kZXJzY29yZSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIgb2JqZWN0LlxuICBfLm1peGluKF8pO1xuXG4gIC8vIEFkZCBhbGwgbXV0YXRvciBBcnJheSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG4gIF8uZWFjaChbJ3BvcCcsICdwdXNoJywgJ3JldmVyc2UnLCAnc2hpZnQnLCAnc29ydCcsICdzcGxpY2UnLCAndW5zaGlmdCddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvYmogPSB0aGlzLl93cmFwcGVkO1xuICAgICAgbWV0aG9kLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICAgIGlmICgobmFtZSA9PT0gJ3NoaWZ0JyB8fCBuYW1lID09PSAnc3BsaWNlJykgJiYgb2JqLmxlbmd0aCA9PT0gMCkgZGVsZXRlIG9ialswXTtcbiAgICAgIHJldHVybiBjaGFpblJlc3VsdCh0aGlzLCBvYmopO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIEFkZCBhbGwgYWNjZXNzb3IgQXJyYXkgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuICBfLmVhY2goWydjb25jYXQnLCAnam9pbicsICdzbGljZSddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBjaGFpblJlc3VsdCh0aGlzLCBtZXRob2QuYXBwbHkodGhpcy5fd3JhcHBlZCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gRXh0cmFjdHMgdGhlIHJlc3VsdCBmcm9tIGEgd3JhcHBlZCBhbmQgY2hhaW5lZCBvYmplY3QuXG4gIF8ucHJvdG90eXBlLnZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dyYXBwZWQ7XG4gIH07XG5cbiAgLy8gUHJvdmlkZSB1bndyYXBwaW5nIHByb3h5IGZvciBzb21lIG1ldGhvZHMgdXNlZCBpbiBlbmdpbmUgb3BlcmF0aW9uc1xuICAvLyBzdWNoIGFzIGFyaXRobWV0aWMgYW5kIEpTT04gc3RyaW5naWZpY2F0aW9uLlxuICBfLnByb3RvdHlwZS52YWx1ZU9mID0gXy5wcm90b3R5cGUudG9KU09OID0gXy5wcm90b3R5cGUudmFsdWU7XG5cbiAgXy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gU3RyaW5nKHRoaXMuX3dyYXBwZWQpO1xuICB9O1xuXG4gIC8vIEFNRCByZWdpc3RyYXRpb24gaGFwcGVucyBhdCB0aGUgZW5kIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQU1EIGxvYWRlcnNcbiAgLy8gdGhhdCBtYXkgbm90IGVuZm9yY2UgbmV4dC10dXJuIHNlbWFudGljcyBvbiBtb2R1bGVzLiBFdmVuIHRob3VnaCBnZW5lcmFsXG4gIC8vIHByYWN0aWNlIGZvciBBTUQgcmVnaXN0cmF0aW9uIGlzIHRvIGJlIGFub255bW91cywgdW5kZXJzY29yZSByZWdpc3RlcnNcbiAgLy8gYXMgYSBuYW1lZCBtb2R1bGUgYmVjYXVzZSwgbGlrZSBqUXVlcnksIGl0IGlzIGEgYmFzZSBsaWJyYXJ5IHRoYXQgaXNcbiAgLy8gcG9wdWxhciBlbm91Z2ggdG8gYmUgYnVuZGxlZCBpbiBhIHRoaXJkIHBhcnR5IGxpYiwgYnV0IG5vdCBiZSBwYXJ0IG9mXG4gIC8vIGFuIEFNRCBsb2FkIHJlcXVlc3QuIFRob3NlIGNhc2VzIGNvdWxkIGdlbmVyYXRlIGFuIGVycm9yIHdoZW4gYW5cbiAgLy8gYW5vbnltb3VzIGRlZmluZSgpIGlzIGNhbGxlZCBvdXRzaWRlIG9mIGEgbG9hZGVyIHJlcXVlc3QuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZSgndW5kZXJzY29yZScsIFtdLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfO1xuICAgIH0pO1xuICB9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL3VuZGVyc2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5pbXBvcnQgeyBCb290c3RyYXBDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvYm9vdHN0cmFwJztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IENoZWNrQm94ID0gKHsgY2xhc3NOYW1lLCBjaGVja2VkLCBpbmRldGVybWluYXRlIH0pID0+IChcbiAgPGlucHV0XG4gICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICBjaGVja2VkPXsgY2hlY2tlZCB9XG4gICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cbiAgICByZWY9eyAoaW5wdXQpID0+IHtcbiAgICAgIGlmIChpbnB1dCkgaW5wdXQuaW5kZXRlcm1pbmF0ZSA9IGluZGV0ZXJtaW5hdGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB9IH1cbiAgICBvbkNoYW5nZT17ICgpID0+IHt9IH1cbiAgLz5cbik7XG5cbkNoZWNrQm94LnByb3BUeXBlcyA9IHtcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaW5kZXRlcm1pbmF0ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3Rpb25IZWFkZXJDZWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtb2RlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY2hlY2tlZFN0YXR1czogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkFsbFJvd3NTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIGhpZGVTZWxlY3RBbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdGlvbkhlYWRlclJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoZWFkZXJDb2x1bW5TdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZUNoZWNrQm94Q2xpY2sgPSB0aGlzLmhhbmRsZUNoZWNrQm94Q2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhdm9pZCB1cGRhdGluZyBpZiBidXR0b24gaXNcbiAgICogMS4gcmFkaW9cbiAgICogMi4gc3RhdHVzIHdhcyBub3QgY2hhbmdlZC5cbiAgICovXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7IFJPV19TRUxFQ1RfU0lOR0xFIH0gPSBDb25zdDtcbiAgICBjb25zdCB7IG1vZGUsIGNoZWNrZWRTdGF0dXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAobW9kZSA9PT0gUk9XX1NFTEVDVF9TSU5HTEUpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBuZXh0UHJvcHMuY2hlY2tlZFN0YXR1cyAhPT0gY2hlY2tlZFN0YXR1cztcbiAgfVxuXG4gIGhhbmRsZUNoZWNrQm94Q2xpY2soZSkge1xuICAgIGNvbnN0IHsgb25BbGxSb3dzU2VsZWN0LCBjaGVja2VkU3RhdHVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlzVW5TZWxlY3QgPVxuICAgICAgY2hlY2tlZFN0YXR1cyA9PT0gQ29uc3QuQ0hFQ0tCT1hfU1RBVFVTX0NIRUNLRUQgfHxcbiAgICAgIGNoZWNrZWRTdGF0dXMgPT09IENvbnN0LkNIRUNLQk9YX1NUQVRVU19JTkRFVEVSTUlOQVRFO1xuXG4gICAgb25BbGxSb3dzU2VsZWN0KGUsIGlzVW5TZWxlY3QpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIENIRUNLQk9YX1NUQVRVU19DSEVDS0VELCBDSEVDS0JPWF9TVEFUVVNfSU5ERVRFUk1JTkFURSwgUk9XX1NFTEVDVF9NVUxUSVBMRVxuICAgIH0gPSBDb25zdDtcblxuICAgIGNvbnN0IHtcbiAgICAgIG1vZGUsXG4gICAgICBjaGVja2VkU3RhdHVzLFxuICAgICAgc2VsZWN0aW9uSGVhZGVyUmVuZGVyZXIsXG4gICAgICBoaWRlU2VsZWN0QWxsLFxuICAgICAgaGVhZGVyQ29sdW1uU3R5bGVcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaGlkZVNlbGVjdEFsbCkge1xuICAgICAgcmV0dXJuIDx0aCBkYXRhLXJvdy1zZWxlY3Rpb24gLz47XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tlZCA9IGNoZWNrZWRTdGF0dXMgPT09IENIRUNLQk9YX1NUQVRVU19DSEVDS0VEO1xuXG4gICAgY29uc3QgaW5kZXRlcm1pbmF0ZSA9IGNoZWNrZWRTdGF0dXMgPT09IENIRUNLQk9YX1NUQVRVU19JTkRFVEVSTUlOQVRFO1xuXG4gICAgY29uc3QgYXR0cnMgPSB7fTtcbiAgICBsZXQgY29udGVudDtcbiAgICBpZiAoc2VsZWN0aW9uSGVhZGVyUmVuZGVyZXIgfHwgbW9kZSA9PT0gUk9XX1NFTEVDVF9NVUxUSVBMRSkge1xuICAgICAgYXR0cnMub25DbGljayA9IHRoaXMuaGFuZGxlQ2hlY2tCb3hDbGljaztcbiAgICB9XG5cbiAgICBhdHRycy5zdHlsZSA9IF8uaXNGdW5jdGlvbihoZWFkZXJDb2x1bW5TdHlsZSkgP1xuICAgICAgaGVhZGVyQ29sdW1uU3R5bGUoY2hlY2tlZFN0YXR1cykgOlxuICAgICAgaGVhZGVyQ29sdW1uU3R5bGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJvb3RzdHJhcENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHtcbiAgICAgICAgICAoeyBib290c3RyYXA0IH0pID0+IHtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb25IZWFkZXJSZW5kZXJlcikge1xuICAgICAgICAgICAgICBjb250ZW50ID0gc2VsZWN0aW9uSGVhZGVyUmVuZGVyZXIoe1xuICAgICAgICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgICAgICAgY2hlY2tlZCxcbiAgICAgICAgICAgICAgICBpbmRldGVybWluYXRlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSBST1dfU0VMRUNUX01VTFRJUExFKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSAoXG4gICAgICAgICAgICAgICAgPENoZWNrQm94XG4gICAgICAgICAgICAgICAgICB7IC4uLnRoaXMucHJvcHMgfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IGNoZWNrZWQgfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYm9vdHN0cmFwNCA/ICdzZWxlY3Rpb24taW5wdXQtNCcgOiAnJyB9XG4gICAgICAgICAgICAgICAgICBpbmRldGVybWluYXRlPXsgaW5kZXRlcm1pbmF0ZSB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzZWxlY3Rpb24tY2VsbC1oZWFkZXJcIiBkYXRhLXJvdy1zZWxlY3Rpb24geyAuLi5hdHRycyB9PnsgY29udGVudCB9PC90aD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA8L0Jvb3RzdHJhcENvbnRleHQuQ29uc3VtZXI+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LXNlbGVjdGlvbi9zZWxlY3Rpb24taGVhZGVyLWNlbGwuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG4vKiBlc2xpbnQgbm8tbmVzdGVkLXRlcm5hcnk6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBhbnNpb25IZWFkZXJDZWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpc0FueUV4cGFuZHM6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgb25BbGxSb3dFeHBhbmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZXhwYW5kSGVhZGVyQ29sdW1uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFuZGxlQ2hlY2tCb3hDbGljayA9IHRoaXMuaGFuZGxlQ2hlY2tCb3hDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hlY2tCb3hDbGljayhlKSB7XG4gICAgY29uc3QgeyBpc0FueUV4cGFuZHMsIG9uQWxsUm93RXhwYW5kIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgb25BbGxSb3dFeHBhbmQoZSwgIWlzQW55RXhwYW5kcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0FueUV4cGFuZHMsIGV4cGFuZEhlYWRlckNvbHVtblJlbmRlcmVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDaGVja0JveENsaWNrXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8dGggY2xhc3NOYW1lPVwiZXhwYW5kLWNlbGwtaGVhZGVyXCIgZGF0YS1yb3ctc2VsZWN0aW9uIHsgLi4uYXR0cnMgfT5cbiAgICAgICAge1xuICAgICAgICAgIGV4cGFuZEhlYWRlckNvbHVtblJlbmRlcmVyID9cbiAgICAgICAgICAgIGV4cGFuZEhlYWRlckNvbHVtblJlbmRlcmVyKHsgaXNBbnlFeHBhbmRzIH0pIDpcbiAgICAgICAgICAgIChpc0FueUV4cGFuZHMgPyAnKC0pJyA6ICcoKyknKVxuICAgICAgICB9XG4gICAgICA8L3RoPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1leHBhbmQvZXhwYW5kLWhlYWRlci1jZWxsLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWxlY3Rpb25Db250ZXh0IGZyb20gJy4uL2NvbnRleHRzL3NlbGVjdGlvbi1jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50ID0+ICgpID0+IChcbiAgPFNlbGVjdGlvbkNvbnRleHQuQ29uc3VtZXI+XG4gICAgeyBzZWxlY3RSb3cgPT4gPENvbXBvbmVudCB7IC4uLnNlbGVjdFJvdyB9IC8+IH1cbiAgPC9TZWxlY3Rpb25Db250ZXh0LkNvbnN1bWVyPlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWhlYWRlci1jZWxsLWNvbnN1bWVyLmpzIiwiaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgZ2V0Um93QnlSb3dJZCB9IGZyb20gJy4vcm93cyc7XG5cbmV4cG9ydCBjb25zdCBpc0FueUV4cGFuZHMgPSAoXG4gIGRhdGEsXG4gIGtleUZpZWxkLFxuICBleHBhbmRlZCA9IFtdXG4pID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgcm93S2V5ID0gXy5nZXQoZGF0YVtpXSwga2V5RmllbGQpO1xuICAgIGlmICh0eXBlb2YgZXhwYW5kZWQuZmluZCh4ID0+IHggPT09IHJvd0tleSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4cGFuZGFibGVLZXlzID0gKGRhdGEsIGtleUZpZWxkLCBza2lwcyA9IFtdKSA9PiB7XG4gIGlmIChza2lwcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZGF0YS5tYXAocm93ID0+IF8uZ2V0KHJvdywga2V5RmllbGQpKTtcbiAgfVxuICByZXR1cm4gZGF0YVxuICAgIC5maWx0ZXIocm93ID0+ICFfLmNvbnRhaW5zKHNraXBzLCBfLmdldChyb3csIGtleUZpZWxkKSkpXG4gICAgLm1hcChyb3cgPT4gXy5nZXQocm93LCBrZXlGaWVsZCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEV4cGFuZGVkUm93cyA9IChkYXRhLCBrZXlGaWVsZCwgZXhwYW5kZWQpID0+XG4gIGV4cGFuZGVkLm1hcChrID0+IGdldFJvd0J5Um93SWQoZGF0YSwga2V5RmllbGQsIGspKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL2V4cGFuZC5qcyIsImltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGdldFJvd0J5Um93SWQgfSBmcm9tICcuL3Jvd3MnO1xuXG5leHBvcnQgY29uc3QgZWRpdENlbGwgPSAoZGF0YSwga2V5RmllbGQsIHJvd0lkLCBkYXRhRmllbGQsIG5ld1ZhbHVlKSA9PiB7XG4gIGNvbnN0IHJvdyA9IGdldFJvd0J5Um93SWQoZGF0YSwga2V5RmllbGQsIHJvd0lkKTtcbiAgaWYgKHJvdykgXy5zZXQocm93LCBkYXRhRmllbGQsIG5ld1ZhbHVlKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9tdXRhdGUuanMiLCIvKiBlc2xpbnQgbm8tbmVzdGVkLXRlcm5hcnk6IDAgKi9cbi8qIGVzbGludCBuby1sb25lbHktaWY6IDAgKi9cbi8qIGVzbGludCBuby11bmRlcnNjb3JlLWRhbmdsZTogMCAqL1xuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcblxuZnVuY3Rpb24gY29tcGFyYXRvcihhLCBiKSB7XG4gIGxldCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgYiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSBiLmxvY2FsZUNvbXBhcmUoYSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gYSA+IGIgPyAtMSA6ICgoYSA8IGIpID8gMSA6IDApO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBjb25zdCBzb3J0ID0gKGRhdGEsIHNvcnRPcmRlciwgeyBkYXRhRmllbGQsIHNvcnRGdW5jLCBzb3J0VmFsdWUgfSkgPT4ge1xuICBjb25zdCBfZGF0YSA9IFsuLi5kYXRhXTtcbiAgX2RhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IHZhbHVlQSA9IF8uZ2V0KGEsIGRhdGFGaWVsZCk7XG4gICAgbGV0IHZhbHVlQiA9IF8uZ2V0KGIsIGRhdGFGaWVsZCk7XG4gICAgaWYgKHNvcnRWYWx1ZSkge1xuICAgICAgdmFsdWVBID0gc29ydFZhbHVlKHZhbHVlQSwgYSk7XG4gICAgICB2YWx1ZUIgPSBzb3J0VmFsdWUodmFsdWVCLCBiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWVBID0gXy5pc0RlZmluZWQodmFsdWVBKSA/IHZhbHVlQSA6ICcnO1xuICAgICAgdmFsdWVCID0gXy5pc0RlZmluZWQodmFsdWVCKSA/IHZhbHVlQiA6ICcnO1xuICAgIH1cblxuICAgIGlmIChzb3J0RnVuYykge1xuICAgICAgcmVzdWx0ID0gc29ydEZ1bmModmFsdWVBLCB2YWx1ZUIsIHNvcnRPcmRlciwgZGF0YUZpZWxkLCBhLCBiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNvcnRPcmRlciA9PT0gQ29uc3QuU09SVF9ERVNDKSB7XG4gICAgICAgIHJlc3VsdCA9IGNvbXBhcmF0b3IodmFsdWVBLCB2YWx1ZUIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gY29tcGFyYXRvcih2YWx1ZUIsIHZhbHVlQSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xuICByZXR1cm4gX2RhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgbmV4dE9yZGVyID0gKFxuICBjdXJyZW50U29ydENvbHVtbixcbiAgeyBzb3J0T3JkZXIsIHNvcnRDb2x1bW4gfSxcbiAgZGVmYXVsdE9yZGVyID0gQ29uc3QuU09SVF9ERVNDXG4pID0+IHtcbiAgaWYgKCFzb3J0Q29sdW1uIHx8IGN1cnJlbnRTb3J0Q29sdW1uLmRhdGFGaWVsZCAhPT0gc29ydENvbHVtbi5kYXRhRmllbGQpIHJldHVybiBkZWZhdWx0T3JkZXI7XG4gIHJldHVybiBzb3J0T3JkZXIgPT09IENvbnN0LlNPUlRfREVTQyA/IENvbnN0LlNPUlRfQVNDIDogQ29uc3QuU09SVF9ERVNDO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3NvcnQuanMiLCJpbXBvcnQgQ29uc3QgZnJvbSAnLi4vY29uc3QnO1xuXG5leHBvcnQgY29uc3QgdHlwZUNvbnZlcnQgPSAodHlwZSwgdmFsdWUpID0+IHtcbiAgaWYgKHR5cGUgPT09IENvbnN0LlRZUEVfU1RSSU5HKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gQ29uc3QuVFlQRV9OVU1CRVIpIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBDb25zdC5UWVBFX0JPT0xFQU4pIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlID09PSAndHJ1ZSc7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gQ29uc3QuVFlQRV9EQVRFKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS90eXBlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFeHBhbnNpb25Db250ZXh0IGZyb20gJy4uL2NvbnRleHRzL3Jvdy1leHBhbmQtY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudCA9PiAoKSA9PiAoXG4gIDxFeHBhbnNpb25Db250ZXh0LkNvbnN1bWVyPlxuICAgIHsgZXhwYW5kUm93ID0+IDxDb21wb25lbnQgeyAuLi5leHBhbmRSb3cgfSAvPiB9XG4gIDwvRXhwYW5zaW9uQ29udGV4dC5Db25zdW1lcj5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1oZWFkZXItY2VsbC1jb25zdW1lci5qcyIsIi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgRmlsdGVyc0NlbGwgZnJvbSAnLi9maWx0ZXJzLWNlbGwnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vY29uc3QnO1xuaW1wb3J0IFJvd1RlbXBsYXRlIGZyb20gJy4vcm93L3Jvdy10ZW1wbGF0ZSc7XG5cbmNvbnN0IEZpbHRlcnMgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbHVtbnMsXG4gICAgb25GaWx0ZXIsXG4gICAgY3VyckZpbHRlcnMsXG4gICAgZmlsdGVyUG9zaXRpb24sXG4gICAgb25FeHRlcm5hbEZpbHRlcixcbiAgICBjbGFzc05hbWUsXG4gICAgc2VsZWN0Um93LFxuICAgIGV4cGFuZFJvd1xuICB9ID0gcHJvcHM7XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBmaWx0ZXJDb2x1bW5zID0gW107XG4gICAgbGV0IHNob3dGaWx0ZXJzUm93ID0gZmFsc2U7XG5cbiAgICBjb2x1bW5zLmZvckVhY2goKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgZmlsdGVyQ29sdW1ucy5wdXNoKDxGaWx0ZXJzQ2VsbFxuICAgICAgICBpbmRleD17IGkgfVxuICAgICAgICBrZXk9eyBjb2x1bW4uZGF0YUZpZWxkIH1cbiAgICAgICAgY29sdW1uPXsgY29sdW1uIH1cbiAgICAgICAgY3VyckZpbHRlcnM9eyBjdXJyRmlsdGVycyB9XG4gICAgICAgIG9uRXh0ZXJuYWxGaWx0ZXI9eyBvbkV4dGVybmFsRmlsdGVyIH1cbiAgICAgICAgb25GaWx0ZXI9eyBvbkZpbHRlciB9XG4gICAgICAvPik7XG5cbiAgICAgIGlmIChjb2x1bW4uZmlsdGVyUmVuZGVyZXIgfHwgY29sdW1uLmZpbHRlcikge1xuICAgICAgICBpZiAoIXNob3dGaWx0ZXJzUm93KSB7XG4gICAgICAgICAgc2hvd0ZpbHRlcnNSb3cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlckNvbHVtbnM7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx0Ym9keVxuICAgICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cbiAgICAgIHN0eWxlPXsge1xuICAgICAgICBkaXNwbGF5OlxuICAgICAgICBmaWx0ZXJQb3NpdGlvbiA9PT0gQ29uc3QuRklMVEVSU19QT1NJVElPTl9UT1BcbiAgICAgICAgICA/ICd0YWJsZS1oZWFkZXItZ3JvdXAnXG4gICAgICAgICAgOiAndGFibGUtZm9vdGVyLWdyb3VwJ1xuICAgICAgfSB9XG4gICAgPlxuICAgICAgPFJvd1RlbXBsYXRlXG4gICAgICAgIHJlbmRlckNvbnRlbnQ9eyByZW5kZXJDb250ZW50IH1cbiAgICAgICAgc2VsZWN0Um93PXsgc2VsZWN0Um93IH1cbiAgICAgICAgZXhwYW5kUm93PXsgZXhwYW5kUm93IH1cbiAgICAgICAgY2VsbEVsPVwidGRcIlxuICAgICAgLz5cbiAgICA8L3Rib2R5PlxuICApO1xufTtcblxuRmlsdGVycy5wcm9wVHlwZXMgPSB7XG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBvbkZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGZpbHRlclBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIENvbnN0LkZJTFRFUlNfUE9TSVRJT05fVE9QLFxuICAgIENvbnN0LkZJTFRFUlNfUE9TSVRJT05fSU5MSU5FLFxuICAgIENvbnN0LkZJTFRFUlNfUE9TSVRJT05fQk9UVE9NXG4gIF0pLFxuICBjdXJyRmlsdGVyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgb25FeHRlcm5hbEZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0Um93OiBQcm9wVHlwZXMub2JqZWN0LFxuICBleHBhbmRSb3c6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbkZpbHRlcnMuZGVmYXVsdFByb3BzID0ge1xuICBwb3NpdGlvbjogQ29uc3QuRklMVEVSU19QT1NJVElPTl9UT1Bcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9maWx0ZXJzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgRmlsdGVyc0NlbGwgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGluZGV4LCBjb2x1bW4sIG9uRXh0ZXJuYWxGaWx0ZXIsXG4gICAgY3VyckZpbHRlcnMsIG9uRmlsdGVyXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgeyBmaWx0ZXJSZW5kZXJlciwgZmlsdGVyIH0gPSBjb2x1bW47XG4gIGxldCBmaWx0ZXJFbG07XG4gIGNvbnN0IGNlbGxBdHRycyA9IHt9O1xuICBjb25zdCBjZWxsU3R5bGUgPSB7fTtcbiAgY2VsbEF0dHJzLnN0eWxlID0gY2VsbFN0eWxlO1xuICBpZiAoY29sdW1uLmhlYWRlckFsaWduKSB7XG4gICAgY2VsbFN0eWxlLnRleHRBbGlnbiA9IF8uaXNGdW5jdGlvbihjb2x1bW4uaGVhZGVyQWxpZ24pXG4gICAgICA/IGNvbHVtbi5oZWFkZXJBbGlnbihjb2x1bW4sIGluZGV4KVxuICAgICAgOiBjb2x1bW4uaGVhZGVyQWxpZ247XG4gIH1cbiAgaWYgKGNvbHVtbi5maWx0ZXJSZW5kZXJlcikge1xuICAgIGNvbnN0IG9uQ3VzdG9tRmlsdGVyID0gb25FeHRlcm5hbEZpbHRlcihjb2x1bW4sIGZpbHRlci5wcm9wcy50eXBlKTtcbiAgICBmaWx0ZXJFbG0gPSBmaWx0ZXJSZW5kZXJlcihvbkN1c3RvbUZpbHRlciwgY29sdW1uKTtcbiAgfSBlbHNlIGlmIChmaWx0ZXIpIHtcbiAgICBmaWx0ZXJFbG0gPSAoXG4gICAgICA8ZmlsdGVyLkZpbHRlclxuICAgICAgICB7IC4uLmZpbHRlci5wcm9wcyB9XG4gICAgICAgIGZpbHRlclN0YXRlPXsgY3VyckZpbHRlcnNbY29sdW1uLmRhdGFGaWVsZF0gfVxuICAgICAgICBvbkZpbHRlcj17IG9uRmlsdGVyIH1cbiAgICAgICAgY29sdW1uPXsgY29sdW1uIH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCBjZWxsQXR0cnMsIGZpbHRlckVsbSk7XG59O1xuXG5GaWx0ZXJzQ2VsbC5wcm9wVHlwZXMgPSB7XG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGNvbHVtbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjdXJyRmlsdGVyczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBvbkZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRXh0ZXJuYWxGaWx0ZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5GaWx0ZXJzQ2VsbC5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uRmlsdGVyOiAoKSA9PiB7IH0sXG4gIG9uRXh0ZXJuYWxGaWx0ZXI6ICgpID0+IHsgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyc0NlbGw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9maWx0ZXJzLWNlbGwuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgQ2FwdGlvbiA9IChwcm9wcykgPT4ge1xuICBpZiAoIXByb3BzLmNoaWxkcmVuKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBjYXB0aW9uID0gcHJvcHMuYm9vdHN0cmFwNCA/IChcbiAgICA8Y2FwdGlvbiBzdHlsZT17IHsgY2FwdGlvblNpZGU6ICd0b3AnIH0gfT57cHJvcHMuY2hpbGRyZW59PC9jYXB0aW9uPlxuICApIDogKFxuICAgIDxjYXB0aW9uPntwcm9wcy5jaGlsZHJlbn08L2NhcHRpb24+XG4gICk7XG5cbiAgcmV0dXJuIGNhcHRpb247XG59O1xuXG5DYXB0aW9uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ub2RlLFxuICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgXSksXG4gIGJvb3RzdHJhcDQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXB0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY2FwdGlvbi5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG4vKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBTaW1wbGVSb3cgZnJvbSAnLi9yb3cvc2ltcGxlLXJvdyc7XG5pbXBvcnQgUm93QWdncmVnYXRvciBmcm9tICcuL3Jvdy9hZ2dyZWdhdGUtcm93JztcbmltcG9ydCBSb3dTZWN0aW9uIGZyb20gJy4vcm93L3Jvdy1zZWN0aW9uJztcbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcbmltcG9ydCB3aXRoUm93U2VsZWN0aW9uIGZyb20gJy4vcm93LXNlbGVjdGlvbi9yb3ctY29uc3VtZXInO1xuaW1wb3J0IHdpdGhSb3dFeHBhbnNpb24gZnJvbSAnLi9yb3ctZXhwYW5kL3Jvdy1jb25zdW1lcic7XG5cbmNsYXNzIEJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7XG4gICAgICBrZXlGaWVsZCxcbiAgICAgIGNlbGxFZGl0LFxuICAgICAgc2VsZWN0Um93LFxuICAgICAgZXhwYW5kUm93XG4gICAgfSA9IHByb3BzO1xuXG4gICAgLy8gQ29uc3RydWN0IEVkaXRpbmcgQ2VsbCBDb21wb25lbnRcbiAgICBpZiAoY2VsbEVkaXQuY3JlYXRlQ29udGV4dCkge1xuICAgICAgdGhpcy5FZGl0aW5nQ2VsbCA9IGNlbGxFZGl0LmNyZWF0ZUVkaXRpbmdDZWxsKF8sIGNlbGxFZGl0Lm9wdGlvbnMub25TdGFydEVkaXQpO1xuICAgIH1cblxuICAgIC8vIENvbnN0cnVjdCBSb3cgQ29tcG9uZW50XG4gICAgbGV0IFJvd0NvbXBvbmVudCA9IFNpbXBsZVJvdztcbiAgICBjb25zdCBzZWxlY3RSb3dFbmFibGVkID0gc2VsZWN0Um93Lm1vZGUgIT09IENvbnN0LlJPV19TRUxFQ1RfRElTQUJMRUQ7XG4gICAgY29uc3QgZXhwYW5kUm93RW5hYmxlZCA9ICEhZXhwYW5kUm93LnJlbmRlcmVyO1xuXG4gICAgaWYgKGV4cGFuZFJvd0VuYWJsZWQpIHtcbiAgICAgIFJvd0NvbXBvbmVudCA9IHdpdGhSb3dFeHBhbnNpb24oUm93QWdncmVnYXRvcik7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdFJvd0VuYWJsZWQpIHtcbiAgICAgIFJvd0NvbXBvbmVudCA9IHdpdGhSb3dTZWxlY3Rpb24oZXhwYW5kUm93RW5hYmxlZCA/IFJvd0NvbXBvbmVudCA6IFJvd0FnZ3JlZ2F0b3IpO1xuICAgIH1cblxuICAgIGlmIChjZWxsRWRpdC5jcmVhdGVDb250ZXh0KSB7XG4gICAgICBSb3dDb21wb25lbnQgPSBjZWxsRWRpdC53aXRoUm93TGV2ZWxDZWxsRWRpdChSb3dDb21wb25lbnQsIHNlbGVjdFJvd0VuYWJsZWQsIGtleUZpZWxkLCBfKTtcbiAgICB9XG4gICAgdGhpcy5Sb3dDb21wb25lbnQgPSBSb3dDb21wb25lbnQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29sdW1ucyxcbiAgICAgIGRhdGEsXG4gICAgICB0YWJJbmRleENlbGwsXG4gICAgICBrZXlGaWVsZCxcbiAgICAgIGlzRW1wdHksXG4gICAgICBub0RhdGFJbmRpY2F0aW9uLFxuICAgICAgdmlzaWJsZUNvbHVtblNpemUsXG4gICAgICBjZWxsRWRpdCxcbiAgICAgIHNlbGVjdFJvdyxcbiAgICAgIHJvd1N0eWxlLFxuICAgICAgcm93Q2xhc3NlcyxcbiAgICAgIHJvd0V2ZW50cyxcbiAgICAgIGV4cGFuZFJvdyxcbiAgICAgIGNsYXNzTmFtZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGNvbnRlbnQ7XG5cbiAgICBpZiAoaXNFbXB0eSkge1xuICAgICAgY29uc3QgaW5kaWNhdGlvbiA9IF8uaXNGdW5jdGlvbihub0RhdGFJbmRpY2F0aW9uKSA/IG5vRGF0YUluZGljYXRpb24oKSA6IG5vRGF0YUluZGljYXRpb247XG4gICAgICBpZiAoIWluZGljYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBjb250ZW50ID0gPFJvd1NlY3Rpb24gY29udGVudD17IGluZGljYXRpb24gfSBjb2xTcGFuPXsgdmlzaWJsZUNvbHVtblNpemUgfSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2VsZWN0Um93RW5hYmxlZCA9IHNlbGVjdFJvdy5tb2RlICE9PSBDb25zdC5ST1dfU0VMRUNUX0RJU0FCTEVEO1xuICAgICAgY29uc3QgZXhwYW5kUm93RW5hYmxlZCA9ICEhZXhwYW5kUm93LnJlbmRlcmVyO1xuXG4gICAgICBjb25zdCBhZGRpdGlvbmFsUm93UHJvcHMgPSB7fTtcblxuICAgICAgaWYgKGNlbGxFZGl0LmNyZWF0ZUNvbnRleHQpIHtcbiAgICAgICAgYWRkaXRpb25hbFJvd1Byb3BzLkVkaXRpbmdDZWxsQ29tcG9uZW50ID0gdGhpcy5FZGl0aW5nQ2VsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdFJvd0VuYWJsZWQgfHwgZXhwYW5kUm93RW5hYmxlZCkge1xuICAgICAgICBhZGRpdGlvbmFsUm93UHJvcHMuZXhwYW5kUm93ID0gZXhwYW5kUm93O1xuICAgICAgICBhZGRpdGlvbmFsUm93UHJvcHMuc2VsZWN0Um93ID0gc2VsZWN0Um93O1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ID0gZGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gXy5nZXQocm93LCBrZXlGaWVsZCk7XG4gICAgICAgIGNvbnN0IGJhc2VSb3dQcm9wcyA9IHtcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgcm93LFxuICAgICAgICAgIHRhYkluZGV4Q2VsbCxcbiAgICAgICAgICBjb2x1bW5zLFxuICAgICAgICAgIGtleUZpZWxkLFxuICAgICAgICAgIGNlbGxFZGl0LFxuICAgICAgICAgIHZhbHVlOiBrZXksXG4gICAgICAgICAgcm93SW5kZXg6IGluZGV4LFxuICAgICAgICAgIHZpc2libGVDb2x1bW5TaXplLFxuICAgICAgICAgIGF0dHJzOiByb3dFdmVudHMgfHwge30sXG4gICAgICAgICAgLi4uYWRkaXRpb25hbFJvd1Byb3BzXG4gICAgICAgIH07XG5cbiAgICAgICAgYmFzZVJvd1Byb3BzLnN0eWxlID0gXy5pc0Z1bmN0aW9uKHJvd1N0eWxlKSA/IHJvd1N0eWxlKHJvdywgaW5kZXgpIDogcm93U3R5bGU7XG4gICAgICAgIGJhc2VSb3dQcm9wcy5jbGFzc05hbWUgPSAoXy5pc0Z1bmN0aW9uKHJvd0NsYXNzZXMpID8gcm93Q2xhc3Nlcyhyb3csIGluZGV4KSA6IHJvd0NsYXNzZXMpO1xuXG4gICAgICAgIHJldHVybiA8dGhpcy5Sb3dDb21wb25lbnQgeyAuLi5iYXNlUm93UHJvcHMgfSAvPjtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8dGJvZHkgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0+eyBjb250ZW50IH08L3Rib2R5PlxuICAgICk7XG4gIH1cbn1cblxuQm9keS5wcm9wVHlwZXMgPSB7XG4gIGtleUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgc2VsZWN0Um93OiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvYm9keS5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG4vKiBlc2xpbnQgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5OiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFJvd1B1cmVDb250ZW50IGZyb20gJy4vcm93LXB1cmUtY29udGVudCc7XG5pbXBvcnQgZXZlbnREZWxlZ2F0ZXIgZnJvbSAnLi9ldmVudC1kZWxlZ2F0ZXInO1xuaW1wb3J0IHNob3VsZFVwZGF0ZXIgZnJvbSAnLi9zaG91bGQtdXBkYXRlcic7XG5cbmNsYXNzIFNpbXBsZVJvdyBleHRlbmRzIHNob3VsZFVwZGF0ZXIoZXZlbnREZWxlZ2F0ZXIoQ29tcG9uZW50KSkge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNob3VsZFVwZGF0ZVJvd0NvbnRlbnQgPSBmYWxzZTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICB0aGlzLnNob3VsZFVwZGF0ZVJvd0NvbnRlbnQgPSBmYWxzZTtcbiAgICB0aGlzLnNob3VsZFVwZGF0ZVJvd0NvbnRlbnQgPSB0aGlzLnNob3VsZFJvd0NvbnRlbnRVcGRhdGUobmV4dFByb3BzKTtcbiAgICBpZiAodGhpcy5zaG91bGRVcGRhdGVSb3dDb250ZW50KSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiB0aGlzLnNob3VsZFVwZGF0ZWRCeVNlbGZQcm9wcyhuZXh0UHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHN0eWxlLFxuICAgICAgYXR0cnMsXG4gICAgICB2aXNpYmxlQ29sdW1uU2l6ZSxcbiAgICAgIHRhYkluZGV4Q2VsbCxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0ckF0dHJzID0gdGhpcy5kZWxlZ2F0ZShhdHRycyk7XG4gICAgY29uc3QgdGFiSW5kZXhTdGFydCA9ICh0aGlzLnByb3BzLnJvd0luZGV4ICogdmlzaWJsZUNvbHVtblNpemUpICsgMTtcblxuICAgIHJldHVybiAoXG4gICAgICA8dHIgc3R5bGU9eyBzdHlsZSB9IGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9IHsgLi4udHJBdHRycyB9PlxuICAgICAgICA8Um93UHVyZUNvbnRlbnRcbiAgICAgICAgICBzaG91bGRVcGRhdGU9eyB0aGlzLnNob3VsZFVwZGF0ZVJvd0NvbnRlbnQgfVxuICAgICAgICAgIHRhYkluZGV4U3RhcnQ9eyB0YWJJbmRleENlbGwgPyB0YWJJbmRleFN0YXJ0IDogLTEgfVxuICAgICAgICAgIHsgLi4ucmVzdCB9XG4gICAgICAgIC8+XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH1cbn1cblxuU2ltcGxlUm93LnByb3BUeXBlcyA9IHtcbiAgcm93OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhdHRyczogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuU2ltcGxlUm93LmRlZmF1bHRQcm9wcyA9IHtcbiAgZWRpdGFibGU6IHRydWUsXG4gIHN0eWxlOiB7fSxcbiAgY2xhc3NOYW1lOiBudWxsLFxuICBhdHRyczoge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZVJvdztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy9zaW1wbGUtcm93LmpzIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgZXZlbnREZWxlZ2F0ZXIgZnJvbSAnLi9jZWxsLWV2ZW50LWRlbGVnYXRlcic7XG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcblxuY2xhc3MgQ2VsbCBleHRlbmRzIGV2ZW50RGVsZWdhdGVyKENvbXBvbmVudCkge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmNyZWF0ZUhhbmRsZUVkaXRpbmdDZWxsID0gdGhpcy5jcmVhdGVIYW5kbGVFZGl0aW5nQ2VsbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIGxldCBzaG91bGRVcGRhdGUgPSBmYWxzZTtcbiAgICBpZiAobmV4dFByb3BzLmNvbHVtbi5pc0R1bW15RmllbGQpIHtcbiAgICAgIHNob3VsZFVwZGF0ZSA9ICFfLmlzRXF1YWwodGhpcy5wcm9wcy5yb3csIG5leHRQcm9wcy5yb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG91bGRVcGRhdGUgPVxuICAgICAgICBfLmdldCh0aGlzLnByb3BzLnJvdywgdGhpcy5wcm9wcy5jb2x1bW4uZGF0YUZpZWxkKVxuICAgICAgICAgICE9PSBfLmdldChuZXh0UHJvcHMucm93LCBuZXh0UHJvcHMuY29sdW1uLmRhdGFGaWVsZCk7XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFVwZGF0ZSkgcmV0dXJuIHRydWU7XG5cbiAgICAvLyBpZiAobmV4dFByb3BzLmZvcm1hdHRlcilcblxuICAgIHNob3VsZFVwZGF0ZSA9XG4gICAgICAobmV4dFByb3BzLmNvbHVtbi5mb3JtYXR0ZXIgPyAhXy5pc0VxdWFsKHRoaXMucHJvcHMucm93LCBuZXh0UHJvcHMucm93KSA6IGZhbHNlKSB8fFxuICAgICAgdGhpcy5wcm9wcy5jb2x1bW4uaGlkZGVuICE9PSBuZXh0UHJvcHMuY29sdW1uLmhpZGRlbiB8fFxuICAgICAgdGhpcy5wcm9wcy5jb2x1bW4uaXNEdW1teUZpZWxkICE9PSBuZXh0UHJvcHMuY29sdW1uLmlzRHVtbXlGaWVsZCB8fFxuICAgICAgdGhpcy5wcm9wcy5yb3dJbmRleCAhPT0gbmV4dFByb3BzLnJvd0luZGV4IHx8XG4gICAgICB0aGlzLnByb3BzLmNvbHVtbkluZGV4ICE9PSBuZXh0UHJvcHMuY29sdW1uSW5kZXggfHxcbiAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lICE9PSBuZXh0UHJvcHMuY2xhc3NOYW1lIHx8XG4gICAgICB0aGlzLnByb3BzLnRpdGxlICE9PSBuZXh0UHJvcHMudGl0bGUgfHxcbiAgICAgIHRoaXMucHJvcHMuZWRpdGFibGUgIT09IG5leHRQcm9wcy5lZGl0YWJsZSB8fFxuICAgICAgdGhpcy5wcm9wcy5jbGlja1RvRWRpdCAhPT0gbmV4dFByb3BzLmNsaWNrVG9FZGl0IHx8XG4gICAgICB0aGlzLnByb3BzLmRiY2xpY2tUb0VkaXQgIT09IG5leHRQcm9wcy5kYmNsaWNrVG9FZGl0IHx8XG4gICAgICAhXy5pc0VxdWFsKHRoaXMucHJvcHMuc3R5bGUsIG5leHRQcm9wcy5zdHlsZSkgfHxcbiAgICAgICFfLmlzRXF1YWwodGhpcy5wcm9wcy5jb2x1bW4uZm9ybWF0RXh0cmFEYXRhLCBuZXh0UHJvcHMuY29sdW1uLmZvcm1hdEV4dHJhRGF0YSkgfHxcbiAgICAgICFfLmlzRXF1YWwodGhpcy5wcm9wcy5jb2x1bW4uZXZlbnRzLCBuZXh0UHJvcHMuY29sdW1uLmV2ZW50cykgfHxcbiAgICAgICFfLmlzRXF1YWwodGhpcy5wcm9wcy5jb2x1bW4uYXR0cnMsIG5leHRQcm9wcy5jb2x1bW4uYXR0cnMpIHx8XG4gICAgICB0aGlzLnByb3BzLnRhYkluZGV4ICE9PSBuZXh0UHJvcHMudGFiSW5kZXg7XG4gICAgcmV0dXJuIHNob3VsZFVwZGF0ZTtcbiAgfVxuXG4gIGNyZWF0ZUhhbmRsZUVkaXRpbmdDZWxsID0gb3JpZ2luRnVuYyA9PiAoZSkgPT4ge1xuICAgIGNvbnN0IHsgb25TdGFydCwgcm93SW5kZXgsIGNvbHVtbkluZGV4LCBjbGlja1RvRWRpdCwgZGJjbGlja1RvRWRpdCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoKGNsaWNrVG9FZGl0IHx8IGRiY2xpY2tUb0VkaXQpICYmIF8uaXNGdW5jdGlvbihvcmlnaW5GdW5jKSkge1xuICAgICAgb3JpZ2luRnVuYyhlKTtcbiAgICB9XG4gICAgaWYgKG9uU3RhcnQpIHtcbiAgICAgIG9uU3RhcnQocm93SW5kZXgsIGNvbHVtbkluZGV4KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcm93LFxuICAgICAgcm93SW5kZXgsXG4gICAgICBjb2x1bW4sXG4gICAgICBjb2x1bW5JbmRleCxcbiAgICAgIG9uU3RhcnQsXG4gICAgICBlZGl0YWJsZSxcbiAgICAgIGNsaWNrVG9FZGl0LFxuICAgICAgZGJjbGlja1RvRWRpdCxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBkYXRhRmllbGQsXG4gICAgICBmb3JtYXR0ZXIsXG4gICAgICBmb3JtYXRFeHRyYURhdGFcbiAgICB9ID0gY29sdW1uO1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5kZWxlZ2F0ZSh7IC4uLnJlc3QgfSk7XG4gICAgbGV0IGNvbnRlbnQgPSBjb2x1bW4uaXNEdW1teUZpZWxkID8gbnVsbCA6IF8uZ2V0KHJvdywgZGF0YUZpZWxkKTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGNvbnRlbnQgPSBjb2x1bW4uZm9ybWF0dGVyKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGZvcm1hdEV4dHJhRGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKGNsaWNrVG9FZGl0ICYmIGVkaXRhYmxlKSB7XG4gICAgICBhdHRycy5vbkNsaWNrID0gdGhpcy5jcmVhdGVIYW5kbGVFZGl0aW5nQ2VsbChhdHRycy5vbkNsaWNrKTtcbiAgICB9IGVsc2UgaWYgKGRiY2xpY2tUb0VkaXQgJiYgZWRpdGFibGUpIHtcbiAgICAgIGF0dHJzLm9uRG91YmxlQ2xpY2sgPSB0aGlzLmNyZWF0ZUhhbmRsZUVkaXRpbmdDZWxsKGF0dHJzLm9uRG91YmxlQ2xpY2spO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8dGQgeyAuLi5hdHRycyB9PlxuICAgICAgICB7IHR5cGVvZiBjb250ZW50ID09PSAnYm9vbGVhbicgPyBgJHtjb250ZW50fWAgOiBjb250ZW50IH1cbiAgICAgIDwvdGQ+XG4gICAgKTtcbiAgfVxufVxuXG5DZWxsLnByb3BUeXBlcyA9IHtcbiAgcm93OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGNvbHVtbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjb2x1bW5JbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDZWxsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY2VsbC5qcyIsIi8qIGVzbGludCBjbGFzcy1tZXRob2RzLXVzZS10aGlzOiAwICovXG4vKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IG5vLXBsdXNwbHVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBFeHBhbmRDZWxsIGZyb20gJy4uL3Jvdy1leHBhbmQvZXhwYW5kLWNlbGwnO1xuaW1wb3J0IFNlbGVjdGlvbkNlbGwgZnJvbSAnLi4vcm93LXNlbGVjdGlvbi9zZWxlY3Rpb24tY2VsbCc7XG5pbXBvcnQgc2hvdWxkVXBkYXRlciBmcm9tICcuL3Nob3VsZC11cGRhdGVyJztcbmltcG9ydCBldmVudERlbGVnYXRlciBmcm9tICcuL2V2ZW50LWRlbGVnYXRlcic7XG5pbXBvcnQgUm93UHVyZUNvbnRlbnQgZnJvbSAnLi9yb3ctcHVyZS1jb250ZW50JztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvd0FnZ3JlZ2F0b3IgZXh0ZW5kcyBzaG91bGRVcGRhdGVyKGV2ZW50RGVsZWdhdGVyKFJlYWN0LkNvbXBvbmVudCkpIHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhdHRyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhdHRyczoge30sXG4gICAgc3R5bGU6IHt9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmNsaWNrTnVtID0gMDtcbiAgICB0aGlzLnNob3VsZFVwZGF0ZVJvd0NvbnRlbnQgPSBmYWxzZTtcbiAgICB0aGlzLmNyZWF0ZUNsaWNrRXZlbnRIYW5kbGVyID0gdGhpcy5jcmVhdGVDbGlja0V2ZW50SGFuZGxlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWQgIT09IG5leHRQcm9wcy5zZWxlY3RlZCB8fFxuICAgICAgdGhpcy5wcm9wcy5leHBhbmRlZCAhPT0gbmV4dFByb3BzLmV4cGFuZGVkIHx8XG4gICAgICB0aGlzLnByb3BzLmV4cGFuZGFibGUgIT09IG5leHRQcm9wcy5leHBhbmRhYmxlIHx8XG4gICAgICB0aGlzLnByb3BzLnNlbGVjdGFibGUgIT09IG5leHRQcm9wcy5zZWxlY3RhYmxlIHx8XG4gICAgICB0aGlzLnByb3BzLnNlbGVjdFJvdy5oaWRlU2VsZWN0Q29sdW1uICE9PSBuZXh0UHJvcHMuc2VsZWN0Um93LmhpZGVTZWxlY3RDb2x1bW4gfHxcbiAgICAgIHRoaXMuc2hvdWxkVXBkYXRlZEJ5U2VsZlByb3BzKG5leHRQcm9wcylcbiAgICApIHtcbiAgICAgIHRoaXMuc2hvdWxkVXBkYXRlUm93Q29udGVudCA9IHRoaXMuc2hvdWxkUm93Q29udGVudFVwZGF0ZShuZXh0UHJvcHMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRoaXMuc2hvdWxkVXBkYXRlUm93Q29udGVudCA9IHRoaXMuc2hvdWxkUm93Q29udGVudFVwZGF0ZShuZXh0UHJvcHMpO1xuXG4gICAgcmV0dXJuIHRoaXMuc2hvdWxkVXBkYXRlUm93Q29udGVudDtcbiAgfVxuXG4gIGlzUmVuZGVyRnVuY3Rpb25Db2x1bW5JbkxlZnQoXG4gICAgcG9zaXRpb24gPSBDb25zdC5JTkRJQ0FUT1JfUE9TSVRJT05fTEVGVFxuICApIHtcbiAgICByZXR1cm4gcG9zaXRpb24gPT09IENvbnN0LklORElDQVRPUl9QT1NJVElPTl9MRUZUO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHJvdyxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBrZXlGaWVsZCxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBhdHRycyxcbiAgICAgIHNlbGVjdFJvdyxcbiAgICAgIGV4cGFuZFJvdyxcbiAgICAgIGV4cGFuZGVkLFxuICAgICAgZXhwYW5kYWJsZSxcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgc2VsZWN0YWJsZSxcbiAgICAgIHZpc2libGVDb2x1bW5TaXplLFxuICAgICAgdGFiSW5kZXhDZWxsLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGtleSA9IF8uZ2V0KHJvdywga2V5RmllbGQpO1xuICAgIGNvbnN0IHsgaGlkZVNlbGVjdENvbHVtbiwgc2VsZWN0Q29sdW1uUG9zaXRpb24sIGNsaWNrVG9TZWxlY3QgfSA9IHNlbGVjdFJvdztcbiAgICBjb25zdCB7IHNob3dFeHBhbmRDb2x1bW4sIGV4cGFuZENvbHVtblBvc2l0aW9uIH0gPSBleHBhbmRSb3c7XG5cbiAgICBjb25zdCBuZXdBdHRycyA9IHRoaXMuZGVsZWdhdGUoeyAuLi5hdHRycyB9KTtcbiAgICBpZiAoY2xpY2tUb1NlbGVjdCB8fCAhIWV4cGFuZFJvdy5yZW5kZXJlcikge1xuICAgICAgbmV3QXR0cnMub25DbGljayA9IHRoaXMuY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIobmV3QXR0cnMub25DbGljayk7XG4gICAgfVxuXG4gICAgbGV0IHRhYkluZGV4U3RhcnQgPSAocm93SW5kZXggKiB2aXNpYmxlQ29sdW1uU2l6ZSkgKyAxO1xuXG4gICAgY29uc3QgY2hpbGRyZW5zID0gWyhcbiAgICAgIDxSb3dQdXJlQ29udGVudFxuICAgICAgICBrZXk9XCJyb3dcIlxuICAgICAgICByb3c9eyByb3cgfVxuICAgICAgICBjb2x1bW5zPXsgY29sdW1ucyB9XG4gICAgICAgIGtleUZpZWxkPXsga2V5RmllbGQgfVxuICAgICAgICByb3dJbmRleD17IHJvd0luZGV4IH1cbiAgICAgICAgc2hvdWxkVXBkYXRlPXsgdGhpcy5zaG91bGRVcGRhdGVSb3dDb250ZW50IH1cbiAgICAgICAgdGFiSW5kZXhTdGFydD17IHRhYkluZGV4Q2VsbCA/IHRhYkluZGV4U3RhcnQgOiAtMSB9XG4gICAgICAgIHsgLi4ucmVzdCB9XG4gICAgICAvPlxuICAgICldO1xuXG4gICAgaWYgKCFoaWRlU2VsZWN0Q29sdW1uKSB7XG4gICAgICBjb25zdCBzZWxlY3RDZWxsID0gKFxuICAgICAgICA8U2VsZWN0aW9uQ2VsbFxuICAgICAgICAgIHsgLi4uc2VsZWN0Um93IH1cbiAgICAgICAgICBrZXk9XCJzZWxlY3Rpb24tY2VsbFwiXG4gICAgICAgICAgcm93S2V5PXsga2V5IH1cbiAgICAgICAgICByb3dJbmRleD17IHJvd0luZGV4IH1cbiAgICAgICAgICBzZWxlY3RlZD17IHNlbGVjdGVkIH1cbiAgICAgICAgICBkaXNhYmxlZD17ICFzZWxlY3RhYmxlIH1cbiAgICAgICAgICB0YWJJbmRleD17IHRhYkluZGV4Q2VsbCA/IHRhYkluZGV4U3RhcnQrKyA6IC0xIH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgICBpZiAodGhpcy5pc1JlbmRlckZ1bmN0aW9uQ29sdW1uSW5MZWZ0KHNlbGVjdENvbHVtblBvc2l0aW9uKSkge1xuICAgICAgICBjaGlsZHJlbnMudW5zaGlmdChzZWxlY3RDZWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkcmVucy5wdXNoKHNlbGVjdENlbGwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaG93RXhwYW5kQ29sdW1uKSB7XG4gICAgICBjb25zdCBleHBhbmRDZWxsID0gKFxuICAgICAgICA8RXhwYW5kQ2VsbFxuICAgICAgICAgIHsgLi4uZXhwYW5kUm93IH1cbiAgICAgICAgICBrZXk9XCJleHBhbmQtY2VsbFwiXG4gICAgICAgICAgcm93S2V5PXsga2V5IH1cbiAgICAgICAgICByb3dJbmRleD17IHJvd0luZGV4IH1cbiAgICAgICAgICBleHBhbmRlZD17IGV4cGFuZGVkIH1cbiAgICAgICAgICBleHBhbmRhYmxlPXsgZXhwYW5kYWJsZSB9XG4gICAgICAgICAgdGFiSW5kZXg9eyB0YWJJbmRleENlbGwgPyB0YWJJbmRleFN0YXJ0KysgOiAtMSB9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgICAgaWYgKHRoaXMuaXNSZW5kZXJGdW5jdGlvbkNvbHVtbkluTGVmdChleHBhbmRDb2x1bW5Qb3NpdGlvbikpIHtcbiAgICAgICAgY2hpbGRyZW5zLnVuc2hpZnQoZXhwYW5kQ2VsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZHJlbnMucHVzaChleHBhbmRDZWxsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRyXG4gICAgICAgIHN0eWxlPXsgc3R5bGUgfVxuICAgICAgICBjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuICAgICAgICB7IC4uLm5ld0F0dHJzIH1cbiAgICAgID5cbiAgICAgICAgeyBjaGlsZHJlbnMgfVxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvYWdncmVnYXRlLXJvdy5qcyIsIi8qIGVzbGludFxuICByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDBcbiAganN4LWExMXkvbm8tbm9uaW50ZXJhY3RpdmUtZWxlbWVudC1pbnRlcmFjdGlvbnM6IDBcbiovXG4vKiBlc2xpbnQgbm8tbmVzdGVkLXRlcm5hcnk6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBhbmRDZWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICByb3dLZXk6IFByb3BUeXBlcy5hbnksXG4gICAgZXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgZXhwYW5kYWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBvblJvd0V4cGFuZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBleHBhbmRDb2x1bW5SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcm93SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXJcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBjb25zdCBzaG91bGRVcGRhdGUgPVxuICAgICAgdGhpcy5wcm9wcy5yb3dJbmRleCAhPT0gbmV4dFByb3BzLnJvd0luZGV4IHx8XG4gICAgICB0aGlzLnByb3BzLmV4cGFuZGVkICE9PSBuZXh0UHJvcHMuZXhwYW5kZWQgfHxcbiAgICAgIHRoaXMucHJvcHMucm93S2V5ICE9PSBuZXh0UHJvcHMucm93S2V5IHx8XG4gICAgICB0aGlzLnByb3BzLnRhYkluZGV4ICE9PSBuZXh0UHJvcHMudGFiSW5kZXg7XG5cbiAgICByZXR1cm4gc2hvdWxkVXBkYXRlO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIGNvbnN0IHsgcm93S2V5LCBleHBhbmRlZCwgb25Sb3dFeHBhbmQsIHJvd0luZGV4IH0gPSB0aGlzLnByb3BzO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgb25Sb3dFeHBhbmQocm93S2V5LCAhZXhwYW5kZWQsIHJvd0luZGV4LCBlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGV4cGFuZGVkLCBleHBhbmRhYmxlLCBleHBhbmRDb2x1bW5SZW5kZXJlciwgdGFiSW5kZXgsIHJvd0tleSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhdHRycyA9IHt9O1xuICAgIGlmICh0YWJJbmRleCAhPT0gLTEpIGF0dHJzLnRhYkluZGV4ID0gdGFiSW5kZXg7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRkIGNsYXNzTmFtZT1cImV4cGFuZC1jZWxsXCIgb25DbGljaz17IHRoaXMuaGFuZGxlQ2xpY2sgfSB7IC4uLmF0dHJzIH0+XG4gICAgICAgIHtcbiAgICAgICAgICBleHBhbmRDb2x1bW5SZW5kZXJlciA/IGV4cGFuZENvbHVtblJlbmRlcmVyKHtcbiAgICAgICAgICAgIGV4cGFuZGFibGUsXG4gICAgICAgICAgICBleHBhbmRlZCxcbiAgICAgICAgICAgIHJvd0tleVxuICAgICAgICAgIH0pIDogKGV4cGFuZGFibGUgPyAoZXhwYW5kZWQgPyAnKC0pJyA6ICcoKyknKSA6ICcnKVxuICAgICAgICB9XG4gICAgICA8L3RkPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1leHBhbmQvZXhwYW5kLWNlbGwuanMiLCIvKiBlc2xpbnRcbiAgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwXG4gIGpzeC1hMTF5L25vLW5vbmludGVyYWN0aXZlLWVsZW1lbnQtaW50ZXJhY3Rpb25zOiAwXG4qL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vY29uc3QnO1xuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQm9vdHN0cmFwQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL2Jvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdGlvbkNlbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1vZGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICByb3dLZXk6IFByb3BUeXBlcy5hbnksXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uUm93U2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcm93SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY2xpY2tUb1NlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VsZWN0aW9uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNlbGVjdENvbHVtblN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgY29uc3Qgc2hvdWxkVXBkYXRlID1cbiAgICAgIHRoaXMucHJvcHMucm93SW5kZXggIT09IG5leHRQcm9wcy5yb3dJbmRleCB8fFxuICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZCAhPT0gbmV4dFByb3BzLnNlbGVjdGVkIHx8XG4gICAgICB0aGlzLnByb3BzLmRpc2FibGVkICE9PSBuZXh0UHJvcHMuZGlzYWJsZWQgfHxcbiAgICAgIHRoaXMucHJvcHMucm93S2V5ICE9PSBuZXh0UHJvcHMucm93S2V5IHx8XG4gICAgICB0aGlzLnByb3BzLnRhYkluZGV4ICE9PSBuZXh0UHJvcHMudGFiSW5kZXggfHxcbiAgICAgIHRoaXMucHJvcHMuc2VsZWN0Q29sdW1uU3R5bGUgIT09IG5leHRQcm9wcy5zZWxlY3RDb2x1bW5TdHlsZTtcblxuICAgIHJldHVybiBzaG91bGRVcGRhdGU7XG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgY29uc3Qge1xuICAgICAgbW9kZTogaW5wdXRUeXBlLFxuICAgICAgcm93S2V5LFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBvblJvd1NlbGVjdCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcm93SW5kZXhcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgY2hlY2tlZCA9IGlucHV0VHlwZSA9PT0gQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEVcbiAgICAgID8gdHJ1ZVxuICAgICAgOiAhc2VsZWN0ZWQ7XG5cbiAgICBvblJvd1NlbGVjdChyb3dLZXksIGNoZWNrZWQsIHJvd0luZGV4LCBlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICByb3dLZXksXG4gICAgICBtb2RlOiBpbnB1dFR5cGUsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgdGFiSW5kZXgsXG4gICAgICByb3dJbmRleCxcbiAgICAgIHNlbGVjdGlvblJlbmRlcmVyLFxuICAgICAgc2VsZWN0Q29sdW1uU3R5bGVcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGF0dHJzID0ge307XG4gICAgaWYgKHRhYkluZGV4ICE9PSAtMSkgYXR0cnMudGFiSW5kZXggPSB0YWJJbmRleDtcblxuICAgIGF0dHJzLnN0eWxlID0gXy5pc0Z1bmN0aW9uKHNlbGVjdENvbHVtblN0eWxlKSA/XG4gICAgICBzZWxlY3RDb2x1bW5TdHlsZSh7XG4gICAgICAgIGNoZWNrZWQ6IHNlbGVjdGVkLFxuICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgcm93SW5kZXgsXG4gICAgICAgIHJvd0tleVxuICAgICAgfSkgOlxuICAgICAgc2VsZWN0Q29sdW1uU3R5bGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJvb3RzdHJhcENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHtcbiAgICAgICAgICAoeyBib290c3RyYXA0IH0pID0+IChcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzZWxlY3Rpb24tY2VsbFwiIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNsaWNrIH0geyAuLi5hdHRycyB9PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uUmVuZGVyZXIgPyBzZWxlY3Rpb25SZW5kZXJlcih7XG4gICAgICAgICAgICAgICAgICBtb2RlOiBpbnB1dFR5cGUsXG4gICAgICAgICAgICAgICAgICBjaGVja2VkOiBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgcm93SW5kZXgsXG4gICAgICAgICAgICAgICAgICByb3dLZXlcbiAgICAgICAgICAgICAgICB9KSA6IChcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPXsgaW5wdXRUeXBlIH1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IHNlbGVjdGVkIH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyBkaXNhYmxlZCB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGJvb3RzdHJhcDQgPyAnc2VsZWN0aW9uLWlucHV0LTQnIDogJycgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICgpID0+IHt9IH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9Cb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWNlbGwuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgUm93U2VjdGlvbiA9ICh7IGNvbnRlbnQsIGNvbFNwYW4gfSkgPT4gKFxuICA8dHI+XG4gICAgPHRkXG4gICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgIGNvbFNwYW49eyBjb2xTcGFuIH1cbiAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWJzLXRhYmxlLW5vLWRhdGFcIlxuICAgID5cbiAgICAgIHsgY29udGVudCB9XG4gICAgPC90ZD5cbiAgPC90cj5cbik7XG5cblJvd1NlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBjb250ZW50OiBQcm9wVHlwZXMuYW55LFxuICBjb2xTcGFuOiBQcm9wVHlwZXMubnVtYmVyXG59O1xuXG5Sb3dTZWN0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udGVudDogbnVsbCxcbiAgY29sU3BhbjogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm93U2VjdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy9yb3ctc2VjdGlvbi5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IFNlbGVjdGlvbkNvbnRleHQgZnJvbSAnLi4vY29udGV4dHMvc2VsZWN0aW9uLWNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCAoQ29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IHJlbmRlcldpdGhTZWxlY3Rpb24gPSAocHJvcHMsIHNlbGVjdFJvdykgPT4ge1xuICAgIGNvbnN0IGtleSA9IHByb3BzLnZhbHVlO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gXy5jb250YWlucyhzZWxlY3RSb3cuc2VsZWN0ZWQsIGtleSk7XG4gICAgY29uc3Qgc2VsZWN0YWJsZSA9ICFzZWxlY3RSb3cubm9uU2VsZWN0YWJsZSB8fCAhXy5jb250YWlucyhzZWxlY3RSb3cubm9uU2VsZWN0YWJsZSwga2V5KTtcbiAgICBjb25zdCBub3RTZWxlY3RhYmxlID0gXy5jb250YWlucyhzZWxlY3RSb3cubm9uU2VsZWN0YWJsZSwga2V5KTtcblxuICAgIGxldCB7XG4gICAgICBzdHlsZSxcbiAgICAgIGNsYXNzTmFtZVxuICAgIH0gPSBwcm9wcztcblxuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRTdHlsZSA9IF8uaXNGdW5jdGlvbihzZWxlY3RSb3cuc3R5bGUpXG4gICAgICAgID8gc2VsZWN0Um93LnN0eWxlKHByb3BzLnJvdywgcHJvcHMucm93SW5kZXgpXG4gICAgICAgIDogc2VsZWN0Um93LnN0eWxlO1xuXG4gICAgICBjb25zdCBzZWxlY3RlZENsYXNzZXMgPSBfLmlzRnVuY3Rpb24oc2VsZWN0Um93LmNsYXNzZXMpXG4gICAgICAgID8gc2VsZWN0Um93LmNsYXNzZXMocHJvcHMucm93LCBwcm9wcy5yb3dJbmRleClcbiAgICAgICAgOiBzZWxlY3RSb3cuY2xhc3NlcztcblxuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAuLi5zZWxlY3RlZFN0eWxlXG4gICAgICB9O1xuICAgICAgY2xhc3NOYW1lID0gY3MoY2xhc3NOYW1lLCBzZWxlY3RlZENsYXNzZXMpIHx8IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHNlbGVjdFJvdy5iZ0NvbG9yKSB7XG4gICAgICAgIHN0eWxlID0gc3R5bGUgfHwge307XG4gICAgICAgIHN0eWxlLmJhY2tncm91bmRDb2xvciA9IF8uaXNGdW5jdGlvbihzZWxlY3RSb3cuYmdDb2xvcilcbiAgICAgICAgICA/IHNlbGVjdFJvdy5iZ0NvbG9yKHByb3BzLnJvdywgcHJvcHMucm93SW5kZXgpXG4gICAgICAgICAgOiBzZWxlY3RSb3cuYmdDb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm90U2VsZWN0YWJsZSkge1xuICAgICAgY29uc3Qgbm90U2VsZWN0YWJsZVN0eWxlID0gXy5pc0Z1bmN0aW9uKHNlbGVjdFJvdy5ub25TZWxlY3RhYmxlU3R5bGUpXG4gICAgICAgID8gc2VsZWN0Um93Lm5vblNlbGVjdGFibGVTdHlsZShwcm9wcy5yb3csIHByb3BzLnJvd0luZGV4KVxuICAgICAgICA6IHNlbGVjdFJvdy5ub25TZWxlY3RhYmxlU3R5bGU7XG5cbiAgICAgIGNvbnN0IG5vdFNlbGVjdGFibGVDbGFzc2VzID0gXy5pc0Z1bmN0aW9uKHNlbGVjdFJvdy5ub25TZWxlY3RhYmxlQ2xhc3NlcylcbiAgICAgICAgPyBzZWxlY3RSb3cubm9uU2VsZWN0YWJsZUNsYXNzZXMocHJvcHMucm93LCBwcm9wcy5yb3dJbmRleClcbiAgICAgICAgOiBzZWxlY3RSb3cubm9uU2VsZWN0YWJsZUNsYXNzZXM7XG5cbiAgICAgIHN0eWxlID0ge1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgLi4ubm90U2VsZWN0YWJsZVN0eWxlXG4gICAgICB9O1xuICAgICAgY2xhc3NOYW1lID0gY3MoY2xhc3NOYW1lLCBub3RTZWxlY3RhYmxlQ2xhc3NlcykgfHwgdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgICBzdHlsZT17IHN0eWxlIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cbiAgICAgICAgc2VsZWN0Um93PXsgc2VsZWN0Um93IH1cbiAgICAgICAgc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9XG4gICAgICAgIHNlbGVjdGFibGU9eyBzZWxlY3RhYmxlIH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICBmdW5jdGlvbiB3aXRoQ29uc3VtZXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdGlvbkNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHsgc2VsZWN0Um93ID0+IHJlbmRlcldpdGhTZWxlY3Rpb24ocHJvcHMsIHNlbGVjdFJvdykgfVxuICAgICAgPC9TZWxlY3Rpb25Db250ZXh0LkNvbnN1bWVyPlxuICAgICk7XG4gIH1cblxuICB3aXRoQ29uc3VtZXIuZGlzcGxheU5hbWUgPSAnV2l0aFNlbGVjdGlvblJvd0NvbnN1bWVyJztcbiAgcmV0dXJuIHdpdGhDb25zdW1lcjtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3Jvdy1jb25zdW1lci5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEV4cGFuZFJvdyBmcm9tICcuL2V4cGFuZC1yb3cnO1xuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEV4cGFuc2lvbkNvbnRleHQgZnJvbSAnLi4vY29udGV4dHMvcm93LWV4cGFuZC1jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgKENvbXBvbmVudCkgPT4ge1xuICBjb25zdCByZW5kZXJXaXRoRXhwYW5zaW9uID0gKHByb3BzLCBleHBhbmRSb3cpID0+IHtcbiAgICBsZXQgcGFyZW50Q2xhc3NOYW1lID0gJyc7XG4gICAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICAgIGNvbnN0IGtleSA9IHByb3BzLnZhbHVlO1xuXG4gICAgY29uc3QgZXhwYW5kZWQgPSBfLmNvbnRhaW5zKGV4cGFuZFJvdy5leHBhbmRlZCwga2V5KTtcbiAgICBjb25zdCBpc0Nsb3NpbmcgPSBfLmNvbnRhaW5zKGV4cGFuZFJvdy5pc0Nsb3NpbmcsIGtleSk7XG4gICAgY29uc3QgZXhwYW5kYWJsZSA9ICFleHBhbmRSb3cubm9uRXhwYW5kYWJsZSB8fCAhXy5jb250YWlucyhleHBhbmRSb3cubm9uRXhwYW5kYWJsZSwga2V5KTtcbiAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgIHBhcmVudENsYXNzTmFtZSA9IF8uaXNGdW5jdGlvbihleHBhbmRSb3cucGFyZW50Q2xhc3NOYW1lKSA/XG4gICAgICAgIGV4cGFuZFJvdy5wYXJlbnRDbGFzc05hbWUoZXhwYW5kZWQsIHByb3BzLnJvdywgcHJvcHMucm93SW5kZXgpIDpcbiAgICAgICAgKGV4cGFuZFJvdy5wYXJlbnRDbGFzc05hbWUgfHwgJycpO1xuXG4gICAgICBjbGFzc05hbWUgPSBfLmlzRnVuY3Rpb24oZXhwYW5kUm93LmNsYXNzTmFtZSkgP1xuICAgICAgICBleHBhbmRSb3cuY2xhc3NOYW1lKGV4cGFuZGVkLCBwcm9wcy5yb3csIHByb3BzLnJvd0luZGV4KSA6XG4gICAgICAgIChleHBhbmRSb3cuY2xhc3NOYW1lIHx8ICcnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7IC4uLnByb3BzIH1cbiAgICAgICAga2V5PXsga2V5IH1cbiAgICAgICAgZXhwYW5kZWQ9eyBleHBhbmRlZCB9XG4gICAgICAgIGV4cGFuZGFibGU9eyBleHBhbmRhYmxlIH1cbiAgICAgICAgZXhwYW5kUm93PXsgeyAuLi5leHBhbmRSb3cgfSB9XG4gICAgICAgIGNsYXNzTmFtZT17IGNzKHByb3BzLmNsYXNzTmFtZSwgcGFyZW50Q2xhc3NOYW1lKSB9XG4gICAgICAvPixcbiAgICAgIGV4cGFuZGVkIHx8IGlzQ2xvc2luZyA/IDxFeHBhbmRSb3dcbiAgICAgICAga2V5PXsgYCR7a2V5fS1leHBhbmRpbmdgIH1cbiAgICAgICAgY29sU3Bhbj17IHByb3BzLnZpc2libGVDb2x1bW5TaXplIH1cbiAgICAgICAgZXhwYW5kZWQ9eyBleHBhbmRlZCB9XG4gICAgICAgIG9uQ2xvc2VkPXsgKCkgPT4gZXhwYW5kUm93Lm9uQ2xvc2VkKGtleSkgfVxuICAgICAgICBjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuICAgICAgPlxuICAgICAgICB7IGV4cGFuZFJvdy5yZW5kZXJlcihwcm9wcy5yb3csIHByb3BzLnJvd0luZGV4KSB9XG4gICAgICA8L0V4cGFuZFJvdz4gOiBudWxsXG4gICAgXTtcbiAgfTtcbiAgcmV0dXJuIHByb3BzID0+IChcbiAgICA8RXhwYW5zaW9uQ29udGV4dC5Db25zdW1lcj5cbiAgICAgIHsgZXhwYW5kUm93ID0+IHJlbmRlcldpdGhFeHBhbnNpb24ocHJvcHMsIGV4cGFuZFJvdykgfVxuICAgIDwvRXhwYW5zaW9uQ29udGV4dC5Db25zdW1lcj5cbiAgKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL3Jvdy1jb25zdW1lci5qcyIsImltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuXG5jb25zdCBFeHBhbmRSb3cgPSAoeyBjaGlsZHJlbiwgZXhwYW5kZWQsIG9uQ2xvc2VkLCBjbGFzc05hbWUsIC4uLnJlc3QgfSkgPT4gKFxuICA8dHI+XG4gICAgPHRkIGNsYXNzTmFtZT17IGNzKCdyZXNldC1leHBhbnNpb24tc3R5bGUnLCBjbGFzc05hbWUpIH0geyAuLi5yZXN0IH0+XG4gICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICBhcHBlYXJcbiAgICAgICAgaW49eyBleHBhbmRlZCB9XG4gICAgICAgIHRpbWVvdXQ9eyA0MDAgfVxuICAgICAgICBjbGFzc05hbWVzPVwicm93LWV4cGFuZC1zbGlkZVwiXG4gICAgICAgIG9uRXhpdGVkPXsgb25DbG9zZWQgfVxuICAgICAgPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWV4cGFuc2lvbi1zdHlsZVwiPlxuICAgICAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgIDwvdGQ+XG4gIDwvdHI+XG4pO1xuXG5FeHBhbmRSb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGV4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DbG9zZWQ6IFByb3BUeXBlcy5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbkV4cGFuZFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBleHBhbmRlZDogZmFsc2UsXG4gIG9uQ2xvc2VkOiBudWxsLFxuICBjbGFzc05hbWU6ICcnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRSb3c7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1yb3cuanMiLCJleHBvcnQgeyBkZWZhdWx0IGFzIENTU1RyYW5zaXRpb24gfSBmcm9tICcuL0NTU1RyYW5zaXRpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXBsYWNlVHJhbnNpdGlvbiB9IGZyb20gJy4vUmVwbGFjZVRyYW5zaXRpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tICcuL1RyYW5zaXRpb25Hcm91cCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRyYW5zaXRpb24gfSBmcm9tICcuL1RyYW5zaXRpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgKiBhcyBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgYWRkT25lQ2xhc3MgZnJvbSAnZG9tLWhlbHBlcnMvY2xhc3MvYWRkQ2xhc3MnO1xuaW1wb3J0IHJlbW92ZU9uZUNsYXNzIGZyb20gJ2RvbS1oZWxwZXJzL2NsYXNzL3JlbW92ZUNsYXNzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICcuL1RyYW5zaXRpb24nO1xuaW1wb3J0IHsgY2xhc3NOYW1lc1NoYXBlIH0gZnJvbSAnLi91dGlscy9Qcm9wVHlwZXMnO1xuXG52YXIgX2FkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3Mobm9kZSwgY2xhc3Nlcykge1xuICByZXR1cm4gbm9kZSAmJiBjbGFzc2VzICYmIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGFkZE9uZUNsYXNzKG5vZGUsIGMpO1xuICB9KTtcbn07XG5cbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKG5vZGUsIGNsYXNzZXMpIHtcbiAgcmV0dXJuIG5vZGUgJiYgY2xhc3NlcyAmJiBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiByZW1vdmVPbmVDbGFzcyhub2RlLCBjKTtcbiAgfSk7XG59O1xuLyoqXG4gKiBBIHRyYW5zaXRpb24gY29tcG9uZW50IGluc3BpcmVkIGJ5IHRoZSBleGNlbGxlbnRcbiAqIFtuZy1hbmltYXRlXShodHRwOi8vd3d3Lm5nYW5pbWF0ZS5vcmcvKSBsaWJyYXJ5LCB5b3Ugc2hvdWxkIHVzZSBpdCBpZiB5b3UncmVcbiAqIHVzaW5nIENTUyB0cmFuc2l0aW9ucyBvciBhbmltYXRpb25zLiBJdCdzIGJ1aWx0IHVwb24gdGhlXG4gKiBbYFRyYW5zaXRpb25gXShodHRwczovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3RyYW5zaXRpb24pXG4gKiBjb21wb25lbnQsIHNvIGl0IGluaGVyaXRzIGFsbCBvZiBpdHMgcHJvcHMuXG4gKlxuICogYENTU1RyYW5zaXRpb25gIGFwcGxpZXMgYSBwYWlyIG9mIGNsYXNzIG5hbWVzIGR1cmluZyB0aGUgYGFwcGVhcmAsIGBlbnRlcmAsXG4gKiBhbmQgYGV4aXRgIHN0YXRlcyBvZiB0aGUgdHJhbnNpdGlvbi4gVGhlIGZpcnN0IGNsYXNzIGlzIGFwcGxpZWQgYW5kIHRoZW4gYVxuICogc2Vjb25kIGAqLWFjdGl2ZWAgY2xhc3MgaW4gb3JkZXIgdG8gYWN0aXZhdGUgdGhlIENTUyB0cmFuc2l0aW9uLiBBZnRlciB0aGVcbiAqIHRyYW5zaXRpb24sIG1hdGNoaW5nIGAqLWRvbmVgIGNsYXNzIG5hbWVzIGFyZSBhcHBsaWVkIHRvIHBlcnNpc3QgdGhlXG4gKiB0cmFuc2l0aW9uIHN0YXRlLlxuICpcbiAqIGBgYGpzeFxuICogZnVuY3Rpb24gQXBwKCkge1xuICogICBjb25zdCBbaW5Qcm9wLCBzZXRJblByb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICogICByZXR1cm4gKFxuICogICAgIDxkaXY+XG4gKiAgICAgICA8Q1NTVHJhbnNpdGlvbiBpbj17aW5Qcm9wfSB0aW1lb3V0PXsyMDB9IGNsYXNzTmFtZXM9XCJteS1ub2RlXCI+XG4gKiAgICAgICAgIDxkaXY+XG4gKiAgICAgICAgICAge1wiSSdsbCByZWNlaXZlIG15LW5vZGUtKiBjbGFzc2VzXCJ9XG4gKiAgICAgICAgIDwvZGl2PlxuICogICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICogICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0SW5Qcm9wKHRydWUpfT5cbiAqICAgICAgICAgQ2xpY2sgdG8gRW50ZXJcbiAqICAgICAgIDwvYnV0dG9uPlxuICogICAgIDwvZGl2PlxuICogICApO1xuICogfVxuICogYGBgXG4gKlxuICogV2hlbiB0aGUgYGluYCBwcm9wIGlzIHNldCB0byBgdHJ1ZWAsIHRoZSBjaGlsZCBjb21wb25lbnQgd2lsbCBmaXJzdCByZWNlaXZlXG4gKiB0aGUgY2xhc3MgYGV4YW1wbGUtZW50ZXJgLCB0aGVuIHRoZSBgZXhhbXBsZS1lbnRlci1hY3RpdmVgIHdpbGwgYmUgYWRkZWQgaW5cbiAqIHRoZSBuZXh0IHRpY2suIGBDU1NUcmFuc2l0aW9uYCBbZm9yY2VzIGFcbiAqIHJlZmxvd10oaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ibG9iLzUwMDczMDNlNzI5YTc0YmU2NmEyMWMzZTIyMDVlNDkxNjgyMTUyNGIvc3JjL0NTU1RyYW5zaXRpb24uanMjTDIwOC1MMjE1KVxuICogYmV0d2VlbiBiZWZvcmUgYWRkaW5nIHRoZSBgZXhhbXBsZS1lbnRlci1hY3RpdmVgLiBUaGlzIGlzIGFuIGltcG9ydGFudCB0cmlja1xuICogYmVjYXVzZSBpdCBhbGxvd3MgdXMgdG8gdHJhbnNpdGlvbiBiZXR3ZWVuIGBleGFtcGxlLWVudGVyYCBhbmRcbiAqIGBleGFtcGxlLWVudGVyLWFjdGl2ZWAgZXZlbiB0aG91Z2ggdGhleSB3ZXJlIGFkZGVkIGltbWVkaWF0ZWx5IG9uZSBhZnRlclxuICogYW5vdGhlci4gTW9zdCBub3RhYmx5LCB0aGlzIGlzIHdoYXQgbWFrZXMgaXQgcG9zc2libGUgZm9yIHVzIHRvIGFuaW1hdGVcbiAqIF9hcHBlYXJhbmNlXy5cbiAqXG4gKiBgYGBjc3NcbiAqIC5teS1ub2RlLWVudGVyIHtcbiAqICAgb3BhY2l0eTogMDtcbiAqIH1cbiAqIC5teS1ub2RlLWVudGVyLWFjdGl2ZSB7XG4gKiAgIG9wYWNpdHk6IDE7XG4gKiAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG4gKiB9XG4gKiAubXktbm9kZS1leGl0IHtcbiAqICAgb3BhY2l0eTogMTtcbiAqIH1cbiAqIC5teS1ub2RlLWV4aXQtYWN0aXZlIHtcbiAqICAgb3BhY2l0eTogMDtcbiAqICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbiAqIH1cbiAqIGBgYFxuICpcbiAqIGAqLWFjdGl2ZWAgY2xhc3NlcyByZXByZXNlbnQgd2hpY2ggc3R5bGVzIHlvdSB3YW50IHRvIGFuaW1hdGUgKip0byoqLlxuICovXG5cblxudmFyIENTU1RyYW5zaXRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQ1NTVHJhbnNpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ1NTVHJhbnNpdGlvbigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5hcHBsaWVkQ2xhc3NlcyA9IHtcbiAgICAgIGFwcGVhcjoge30sXG4gICAgICBlbnRlcjoge30sXG4gICAgICBleGl0OiB7fVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkVudGVyID0gZnVuY3Rpb24gKG5vZGUsIGFwcGVhcmluZykge1xuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnZXhpdCcpO1xuXG4gICAgICBfdGhpcy5hZGRDbGFzcyhub2RlLCBhcHBlYXJpbmcgPyAnYXBwZWFyJyA6ICdlbnRlcicsICdiYXNlJyk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXIobm9kZSwgYXBwZWFyaW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FbnRlcmluZyA9IGZ1bmN0aW9uIChub2RlLCBhcHBlYXJpbmcpIHtcbiAgICAgIHZhciB0eXBlID0gYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInO1xuXG4gICAgICBfdGhpcy5hZGRDbGFzcyhub2RlLCB0eXBlLCAnYWN0aXZlJyk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyaW5nKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXJpbmcobm9kZSwgYXBwZWFyaW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FbnRlcmVkID0gZnVuY3Rpb24gKG5vZGUsIGFwcGVhcmluZykge1xuICAgICAgdmFyIHR5cGUgPSBhcHBlYXJpbmcgPyAnYXBwZWFyJyA6ICdlbnRlcic7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgdHlwZSk7XG5cbiAgICAgIF90aGlzLmFkZENsYXNzKG5vZGUsIHR5cGUsICdkb25lJyk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyZWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FbnRlcmVkKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRXhpdCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdhcHBlYXInKTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnZW50ZXInKTtcblxuICAgICAgX3RoaXMuYWRkQ2xhc3Mobm9kZSwgJ2V4aXQnLCAnYmFzZScpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0KSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRXhpdChub2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FeGl0aW5nID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLmFkZENsYXNzKG5vZGUsICdleGl0JywgJ2FjdGl2ZScpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0aW5nKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRXhpdGluZyhub2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FeGl0ZWQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnZXhpdCcpO1xuXG4gICAgICBfdGhpcy5hZGRDbGFzcyhub2RlLCAnZXhpdCcsICdkb25lJyk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXRlZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0Q2xhc3NOYW1lcyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lcyA9IF90aGlzLnByb3BzLmNsYXNzTmFtZXM7XG4gICAgICB2YXIgaXNTdHJpbmdDbGFzc05hbWVzID0gdHlwZW9mIGNsYXNzTmFtZXMgPT09ICdzdHJpbmcnO1xuICAgICAgdmFyIHByZWZpeCA9IGlzU3RyaW5nQ2xhc3NOYW1lcyAmJiBjbGFzc05hbWVzID8gY2xhc3NOYW1lcyArIFwiLVwiIDogJyc7XG4gICAgICB2YXIgYmFzZUNsYXNzTmFtZSA9IGlzU3RyaW5nQ2xhc3NOYW1lcyA/IFwiXCIgKyBwcmVmaXggKyB0eXBlIDogY2xhc3NOYW1lc1t0eXBlXTtcbiAgICAgIHZhciBhY3RpdmVDbGFzc05hbWUgPSBpc1N0cmluZ0NsYXNzTmFtZXMgPyBiYXNlQ2xhc3NOYW1lICsgXCItYWN0aXZlXCIgOiBjbGFzc05hbWVzW3R5cGUgKyBcIkFjdGl2ZVwiXTtcbiAgICAgIHZhciBkb25lQ2xhc3NOYW1lID0gaXNTdHJpbmdDbGFzc05hbWVzID8gYmFzZUNsYXNzTmFtZSArIFwiLWRvbmVcIiA6IGNsYXNzTmFtZXNbdHlwZSArIFwiRG9uZVwiXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJhc2VDbGFzc05hbWU6IGJhc2VDbGFzc05hbWUsXG4gICAgICAgIGFjdGl2ZUNsYXNzTmFtZTogYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICBkb25lQ2xhc3NOYW1lOiBkb25lQ2xhc3NOYW1lXG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ1NTVHJhbnNpdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3Mobm9kZSwgdHlwZSwgcGhhc2UpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5nZXRDbGFzc05hbWVzKHR5cGUpW3BoYXNlICsgXCJDbGFzc05hbWVcIl07XG5cbiAgICBpZiAodHlwZSA9PT0gJ2FwcGVhcicgJiYgcGhhc2UgPT09ICdkb25lJykge1xuICAgICAgY2xhc3NOYW1lICs9IFwiIFwiICsgdGhpcy5nZXRDbGFzc05hbWVzKCdlbnRlcicpLmRvbmVDbGFzc05hbWU7XG4gICAgfSAvLyBUaGlzIGlzIGZvciB0byBmb3JjZSBhIHJlcGFpbnQsXG4gICAgLy8gd2hpY2ggaXMgbmVjZXNzYXJ5IGluIG9yZGVyIHRvIHRyYW5zaXRpb24gc3R5bGVzIHdoZW4gYWRkaW5nIGEgY2xhc3MgbmFtZS5cblxuXG4gICAgaWYgKHBoYXNlID09PSAnYWN0aXZlJykge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4gICAgICBub2RlICYmIG5vZGUuc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIHRoaXMuYXBwbGllZENsYXNzZXNbdHlwZV1bcGhhc2VdID0gY2xhc3NOYW1lO1xuXG4gICAgX2FkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUNsYXNzZXMgPSBmdW5jdGlvbiByZW1vdmVDbGFzc2VzKG5vZGUsIHR5cGUpIHtcbiAgICB2YXIgX3RoaXMkYXBwbGllZENsYXNzZXMkID0gdGhpcy5hcHBsaWVkQ2xhc3Nlc1t0eXBlXSxcbiAgICAgICAgYmFzZUNsYXNzTmFtZSA9IF90aGlzJGFwcGxpZWRDbGFzc2VzJC5iYXNlLFxuICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfdGhpcyRhcHBsaWVkQ2xhc3NlcyQuYWN0aXZlLFxuICAgICAgICBkb25lQ2xhc3NOYW1lID0gX3RoaXMkYXBwbGllZENsYXNzZXMkLmRvbmU7XG4gICAgdGhpcy5hcHBsaWVkQ2xhc3Nlc1t0eXBlXSA9IHt9O1xuXG4gICAgaWYgKGJhc2VDbGFzc05hbWUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKG5vZGUsIGJhc2VDbGFzc05hbWUpO1xuICAgIH1cblxuICAgIGlmIChhY3RpdmVDbGFzc05hbWUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKGRvbmVDbGFzc05hbWUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKG5vZGUsIGRvbmVDbGFzc05hbWUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIF8gPSBfdGhpcyRwcm9wcy5jbGFzc05hbWVzLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjbGFzc05hbWVzXCJdKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb24sIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgb25FbnRlcjogdGhpcy5vbkVudGVyLFxuICAgICAgb25FbnRlcmVkOiB0aGlzLm9uRW50ZXJlZCxcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMub25FbnRlcmluZyxcbiAgICAgIG9uRXhpdDogdGhpcy5vbkV4aXQsXG4gICAgICBvbkV4aXRpbmc6IHRoaXMub25FeGl0aW5nLFxuICAgICAgb25FeGl0ZWQ6IHRoaXMub25FeGl0ZWRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIENTU1RyYW5zaXRpb247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkNTU1RyYW5zaXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWVzOiAnJ1xufTtcbkNTU1RyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gX2V4dGVuZHMoe30sIFRyYW5zaXRpb24ucHJvcFR5cGVzLCB7XG4gIC8qKlxuICAgKiBUaGUgYW5pbWF0aW9uIGNsYXNzTmFtZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50IGFzIGl0IGVudGVycywgZXhpdHMgb3JcbiAgICogaGFzIGZpbmlzaGVkIHRoZSB0cmFuc2l0aW9uLiBBIHNpbmdsZSBuYW1lIGNhbiBiZSBwcm92aWRlZCBhbmQgaXQgd2lsbCBiZVxuICAgKiBzdWZmaXhlZCBmb3IgZWFjaCBzdGFnZTogZS5nLlxuICAgKlxuICAgKiBgY2xhc3NOYW1lcz1cImZhZGVcImAgYXBwbGllcyBgZmFkZS1lbnRlcmAsIGBmYWRlLWVudGVyLWFjdGl2ZWAsXG4gICAqIGBmYWRlLWVudGVyLWRvbmVgLCBgZmFkZS1leGl0YCwgYGZhZGUtZXhpdC1hY3RpdmVgLCBgZmFkZS1leGl0LWRvbmVgLFxuICAgKiBgZmFkZS1hcHBlYXJgLCBgZmFkZS1hcHBlYXItYWN0aXZlYCwgYW5kIGBmYWRlLWFwcGVhci1kb25lYC5cbiAgICpcbiAgICogKipOb3RlKio6IGBmYWRlLWFwcGVhci1kb25lYCBhbmQgYGZhZGUtZW50ZXItZG9uZWAgd2lsbCBfYm90aF8gYmUgYXBwbGllZC5cbiAgICogVGhpcyBhbGxvd3MgeW91IHRvIGRlZmluZSBkaWZmZXJlbnQgYmVoYXZpb3IgZm9yIHdoZW4gYXBwZWFyaW5nIGlzIGRvbmUgYW5kXG4gICAqIHdoZW4gcmVndWxhciBlbnRlcmluZyBpcyBkb25lLCB1c2luZyBzZWxlY3RvcnMgbGlrZVxuICAgKiBgLmZhZGUtZW50ZXItZG9uZTpub3QoLmZhZGUtYXBwZWFyLWRvbmUpYC4gRm9yIGV4YW1wbGUsIHlvdSBjb3VsZCBhcHBseSBhblxuICAgKiBlcGljIGVudHJhbmNlIGFuaW1hdGlvbiB3aGVuIGVsZW1lbnQgZmlyc3QgYXBwZWFycyBpbiB0aGUgRE9NIHVzaW5nXG4gICAqIFtBbmltYXRlLmNzc10oaHR0cHM6Ly9kYW5lZGVuLmdpdGh1Yi5pby9hbmltYXRlLmNzcy8pLiBPdGhlcndpc2UgeW91IGNhblxuICAgKiBzaW1wbHkgdXNlIGBmYWRlLWVudGVyLWRvbmVgIGZvciBkZWZpbmluZyBib3RoIGNhc2VzLlxuICAgKlxuICAgKiBFYWNoIGluZGl2aWR1YWwgY2xhc3NOYW1lcyBjYW4gYWxzbyBiZSBzcGVjaWZpZWQgaW5kZXBlbmRlbnRseSBsaWtlOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjbGFzc05hbWVzPXt7XG4gICAqICBhcHBlYXI6ICdteS1hcHBlYXInLFxuICAgKiAgYXBwZWFyQWN0aXZlOiAnbXktYWN0aXZlLWFwcGVhcicsXG4gICAqICBhcHBlYXJEb25lOiAnbXktZG9uZS1hcHBlYXInLFxuICAgKiAgZW50ZXI6ICdteS1lbnRlcicsXG4gICAqICBlbnRlckFjdGl2ZTogJ215LWFjdGl2ZS1lbnRlcicsXG4gICAqICBlbnRlckRvbmU6ICdteS1kb25lLWVudGVyJyxcbiAgICogIGV4aXQ6ICdteS1leGl0JyxcbiAgICogIGV4aXRBY3RpdmU6ICdteS1hY3RpdmUtZXhpdCcsXG4gICAqICBleGl0RG9uZTogJ215LWRvbmUtZXhpdCcsXG4gICAqIH19XG4gICAqIGBgYFxuICAgKlxuICAgKiBJZiB5b3Ugd2FudCB0byBzZXQgdGhlc2UgY2xhc3NlcyB1c2luZyBDU1MgTW9kdWxlczpcbiAgICpcbiAgICogYGBganNcbiAgICogaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5jc3MnO1xuICAgKiBgYGBcbiAgICpcbiAgICogeW91IG1pZ2h0IHdhbnQgdG8gdXNlIGNhbWVsQ2FzZSBpbiB5b3VyIENTUyBmaWxlLCB0aGF0IHdheSBjb3VsZCBzaW1wbHlcbiAgICogc3ByZWFkIHRoZW0gaW5zdGVhZCBvZiBsaXN0aW5nIHRoZW0gb25lIGJ5IG9uZTpcbiAgICpcbiAgICogYGBganNcbiAgICogY2xhc3NOYW1lcz17eyAuLi5zdHlsZXMgfX1cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmcgfCB7XG4gICAqICBhcHBlYXI/OiBzdHJpbmcsXG4gICAqICBhcHBlYXJBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBhcHBlYXJEb25lPzogc3RyaW5nLFxuICAgKiAgZW50ZXI/OiBzdHJpbmcsXG4gICAqICBlbnRlckFjdGl2ZT86IHN0cmluZyxcbiAgICogIGVudGVyRG9uZT86IHN0cmluZyxcbiAgICogIGV4aXQ/OiBzdHJpbmcsXG4gICAqICBleGl0QWN0aXZlPzogc3RyaW5nLFxuICAgKiAgZXhpdERvbmU/OiBzdHJpbmcsXG4gICAqIH19XG4gICAqL1xuICBjbGFzc05hbWVzOiBjbGFzc05hbWVzU2hhcGUsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlcicgb3IgJ2FwcGVhcicgY2xhc3MgaXNcbiAgICogYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlci1hY3RpdmUnIG9yXG4gICAqICdhcHBlYXItYWN0aXZlJyBjbGFzcyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyJyBvclxuICAgKiAnYXBwZWFyJyBjbGFzc2VzIGFyZSAqKnJlbW92ZWQqKiBhbmQgdGhlIGBkb25lYCBjbGFzcyBpcyBhZGRlZCB0byB0aGUgRE9NIG5vZGUuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0JyBjbGFzcyBpc1xuICAgKiBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudClcbiAgICovXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0LWFjdGl2ZScgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdCcgY2xhc3Nlc1xuICAgKiBhcmUgKipyZW1vdmVkKiogYW5kIHRoZSBgZXhpdC1kb25lYCBjbGFzcyBpcyBhZGRlZCB0byB0aGUgRE9NIG5vZGUuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jXG59KSA6IHt9O1xuZXhwb3J0IGRlZmF1bHQgQ1NTVHJhbnNpdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL0NTU1RyYW5zaXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkQ2xhc3M7XG5cbnZhciBfaGFzQ2xhc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hhc0NsYXNzXCIpKTtcblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7ZWxzZSBpZiAoISgwLCBfaGFzQ2xhc3MuZGVmYXVsdCkoZWxlbWVudCwgY2xhc3NOYW1lKSkgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjbGFzc05hbWU7ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJykgKyAnICcgKyBjbGFzc05hbWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvYWRkQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gaGFzQ2xhc3M7XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHJldHVybiAhIWNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO2Vsc2UgcmV0dXJuIChcIiBcIiArIChlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8IGVsZW1lbnQuY2xhc3NOYW1lKSArIFwiIFwiKS5pbmRleE9mKFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCIpICE9PSAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL2hhc0NsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gcmVwbGFjZUNsYXNzTmFtZShvcmlnQ2xhc3MsIGNsYXNzVG9SZW1vdmUpIHtcbiAgcmV0dXJuIG9yaWdDbGFzcy5yZXBsYWNlKG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjbGFzc1RvUmVtb3ZlICsgJyg/OlxcXFxzfCQpJywgJ2cnKSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtlbHNlIGlmICh0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSBlbGVtZW50LmNsYXNzTmFtZSA9IHJlcGxhY2VDbGFzc05hbWUoZWxlbWVudC5jbGFzc05hbWUsIGNsYXNzTmFtZSk7ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCByZXBsYWNlQ2xhc3NOYW1lKGVsZW1lbnQuY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwgfHwgJycsIGNsYXNzTmFtZSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL3JlbW92ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBUcmFuc2l0aW9uR3JvdXAgZnJvbSAnLi9UcmFuc2l0aW9uR3JvdXAnO1xuLyoqXG4gKiBUaGUgYDxSZXBsYWNlVHJhbnNpdGlvbj5gIGNvbXBvbmVudCBpcyBhIHNwZWNpYWxpemVkIGBUcmFuc2l0aW9uYCBjb21wb25lbnRcbiAqIHRoYXQgYW5pbWF0ZXMgYmV0d2VlbiB0d28gY2hpbGRyZW4uXG4gKlxuICogYGBganN4XG4gKiA8UmVwbGFjZVRyYW5zaXRpb24gaW4+XG4gKiAgIDxGYWRlPjxkaXY+SSBhcHBlYXIgZmlyc3Q8L2Rpdj48L0ZhZGU+XG4gKiAgIDxGYWRlPjxkaXY+SSByZXBsYWNlIHRoZSBhYm92ZTwvZGl2PjwvRmFkZT5cbiAqIDwvUmVwbGFjZVRyYW5zaXRpb24+XG4gKiBgYGBcbiAqL1xuXG52YXIgUmVwbGFjZVRyYW5zaXRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoUmVwbGFjZVRyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJlcGxhY2VUcmFuc2l0aW9uKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBfYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIF9hcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoX2FyZ3MpKSB8fCB0aGlzO1xuXG4gICAgX3RoaXMuaGFuZGxlRW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkVudGVyJywgMCwgYXJncyk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUVudGVyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FbnRlcmluZycsIDAsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFbnRlcmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FbnRlcmVkJywgMCwgYXJncyk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUV4aXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjUpLCBfa2V5NSA9IDA7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICAgICAgYXJnc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkV4aXQnLCAxLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRXhpdGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNiksIF9rZXk2ID0gMDsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykge1xuICAgICAgICBhcmdzW19rZXk2XSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVMaWZlY3ljbGUoJ29uRXhpdGluZycsIDEsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFeGl0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjcpLCBfa2V5NyA9IDA7IF9rZXk3IDwgX2xlbjc7IF9rZXk3KyspIHtcbiAgICAgICAgYXJnc1tfa2V5N10gPSBhcmd1bWVudHNbX2tleTddO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkV4aXRlZCcsIDEsIGFyZ3MpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUmVwbGFjZVRyYW5zaXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5oYW5kbGVMaWZlY3ljbGUgPSBmdW5jdGlvbiBoYW5kbGVMaWZlY3ljbGUoaGFuZGxlciwgaWR4LCBvcmlnaW5hbEFyZ3MpIHtcbiAgICB2YXIgX2NoaWxkJHByb3BzO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKVtpZHhdO1xuICAgIGlmIChjaGlsZC5wcm9wc1toYW5kbGVyXSkgKF9jaGlsZCRwcm9wcyA9IGNoaWxkLnByb3BzKVtoYW5kbGVyXS5hcHBseShfY2hpbGQkcHJvcHMsIG9yaWdpbmFsQXJncyk7XG4gICAgaWYgKHRoaXMucHJvcHNbaGFuZGxlcl0pIHRoaXMucHJvcHNbaGFuZGxlcl0oZmluZERPTU5vZGUodGhpcykpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgaW5Qcm9wID0gX3RoaXMkcHJvcHMuaW4sXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiaW5cIl0pO1xuXG4gICAgdmFyIF9SZWFjdCRDaGlsZHJlbiR0b0FyciA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLFxuICAgICAgICBmaXJzdCA9IF9SZWFjdCRDaGlsZHJlbiR0b0FyclswXSxcbiAgICAgICAgc2Vjb25kID0gX1JlYWN0JENoaWxkcmVuJHRvQXJyWzFdO1xuXG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXJpbmc7XG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXJlZDtcbiAgICBkZWxldGUgcHJvcHMub25FeGl0O1xuICAgIGRlbGV0ZSBwcm9wcy5vbkV4aXRpbmc7XG4gICAgZGVsZXRlIHByb3BzLm9uRXhpdGVkO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Hcm91cCwgcHJvcHMsIGluUHJvcCA/IFJlYWN0LmNsb25lRWxlbWVudChmaXJzdCwge1xuICAgICAga2V5OiAnZmlyc3QnLFxuICAgICAgb25FbnRlcjogdGhpcy5oYW5kbGVFbnRlcixcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMuaGFuZGxlRW50ZXJpbmcsXG4gICAgICBvbkVudGVyZWQ6IHRoaXMuaGFuZGxlRW50ZXJlZFxuICAgIH0pIDogUmVhY3QuY2xvbmVFbGVtZW50KHNlY29uZCwge1xuICAgICAga2V5OiAnc2Vjb25kJyxcbiAgICAgIG9uRW50ZXI6IHRoaXMuaGFuZGxlRXhpdCxcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMuaGFuZGxlRXhpdGluZyxcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5oYW5kbGVFeGl0ZWRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIFJlcGxhY2VUcmFuc2l0aW9uO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5SZXBsYWNlVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGluOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogZnVuY3Rpb24gY2hpbGRyZW4ocHJvcHMsIHByb3BOYW1lKSB7XG4gICAgaWYgKFJlYWN0LkNoaWxkcmVuLmNvdW50KHByb3BzW3Byb3BOYW1lXSkgIT09IDIpIHJldHVybiBuZXcgRXJyb3IoXCJcXFwiXCIgKyBwcm9wTmFtZSArIFwiXFxcIiBtdXN0IGJlIGV4YWN0bHkgdHdvIHRyYW5zaXRpb24gY29tcG9uZW50cy5cIik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0gOiB7fTtcbmV4cG9ydCBkZWZhdWx0IFJlcGxhY2VUcmFuc2l0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vUmVwbGFjZVRyYW5zaXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgeyBDaGlsZHJlbiwgY2xvbmVFbGVtZW50LCBpc1ZhbGlkRWxlbWVudCB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogR2l2ZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gLCByZXR1cm4gYW4gb2JqZWN0IG1hcHBpbmcga2V5IHRvIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY2hpbGRyZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gXG4gKiBAcmV0dXJuIHtvYmplY3R9IE1hcHBpbmcgb2Yga2V5IHRvIGNoaWxkXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoaWxkTWFwcGluZyhjaGlsZHJlbiwgbWFwRm4pIHtcbiAgdmFyIG1hcHBlciA9IGZ1bmN0aW9uIG1hcHBlcihjaGlsZCkge1xuICAgIHJldHVybiBtYXBGbiAmJiBpc1ZhbGlkRWxlbWVudChjaGlsZCkgPyBtYXBGbihjaGlsZCkgOiBjaGlsZDtcbiAgfTtcblxuICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKGNoaWxkcmVuKSBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGM7XG4gIH0pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgLy8gcnVuIHRoZSBtYXAgZnVuY3Rpb24gaGVyZSBpbnN0ZWFkIHNvIHRoYXQgdGhlIGtleSBpcyB0aGUgY29tcHV0ZWQgb25lXG4gICAgcmVzdWx0W2NoaWxkLmtleV0gPSBtYXBwZXIoY2hpbGQpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogV2hlbiB5b3UncmUgYWRkaW5nIG9yIHJlbW92aW5nIGNoaWxkcmVuIHNvbWUgbWF5IGJlIGFkZGVkIG9yIHJlbW92ZWQgaW4gdGhlXG4gKiBzYW1lIHJlbmRlciBwYXNzLiBXZSB3YW50IHRvIHNob3cgKmJvdGgqIHNpbmNlIHdlIHdhbnQgdG8gc2ltdWx0YW5lb3VzbHlcbiAqIGFuaW1hdGUgZWxlbWVudHMgaW4gYW5kIG91dC4gVGhpcyBmdW5jdGlvbiB0YWtlcyBhIHByZXZpb3VzIHNldCBvZiBrZXlzXG4gKiBhbmQgYSBuZXcgc2V0IG9mIGtleXMgYW5kIG1lcmdlcyB0aGVtIHdpdGggaXRzIGJlc3QgZ3Vlc3Mgb2YgdGhlIGNvcnJlY3RcbiAqIG9yZGVyaW5nLiBJbiB0aGUgZnV0dXJlIHdlIG1heSBleHBvc2Ugc29tZSBvZiB0aGUgdXRpbGl0aWVzIGluXG4gKiBSZWFjdE11bHRpQ2hpbGQgdG8gbWFrZSB0aGlzIGVhc3ksIGJ1dCBmb3Igbm93IFJlYWN0IGl0c2VsZiBkb2VzIG5vdFxuICogZGlyZWN0bHkgaGF2ZSB0aGlzIGNvbmNlcHQgb2YgdGhlIHVuaW9uIG9mIHByZXZDaGlsZHJlbiBhbmQgbmV4dENoaWxkcmVuXG4gKiBzbyB3ZSBpbXBsZW1lbnQgaXQgaGVyZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJldiBwcmV2IGNoaWxkcmVuIGFzIHJldHVybmVkIGZyb21cbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICogQHBhcmFtIHtvYmplY3R9IG5leHQgbmV4dCBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEByZXR1cm4ge29iamVjdH0gYSBrZXkgc2V0IHRoYXQgY29udGFpbnMgYWxsIGtleXMgaW4gYHByZXZgIGFuZCBhbGwga2V5c1xuICogaW4gYG5leHRgIGluIGEgcmVhc29uYWJsZSBvcmRlci5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXYsIG5leHQpIHtcbiAgcHJldiA9IHByZXYgfHwge307XG4gIG5leHQgPSBuZXh0IHx8IHt9O1xuXG4gIGZ1bmN0aW9uIGdldFZhbHVlRm9yS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkgaW4gbmV4dCA/IG5leHRba2V5XSA6IHByZXZba2V5XTtcbiAgfSAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cbiAgLy8gdGhlIGNvbWJpbmVkIGxpc3RcblxuXG4gIHZhciBuZXh0S2V5c1BlbmRpbmcgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgcGVuZGluZ0tleXMgPSBbXTtcblxuICBmb3IgKHZhciBwcmV2S2V5IGluIHByZXYpIHtcbiAgICBpZiAocHJldktleSBpbiBuZXh0KSB7XG4gICAgICBpZiAocGVuZGluZ0tleXMubGVuZ3RoKSB7XG4gICAgICAgIG5leHRLZXlzUGVuZGluZ1twcmV2S2V5XSA9IHBlbmRpbmdLZXlzO1xuICAgICAgICBwZW5kaW5nS2V5cyA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nS2V5cy5wdXNoKHByZXZLZXkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpO1xuICB2YXIgY2hpbGRNYXBwaW5nID0ge307XG5cbiAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0KSB7XG4gICAgaWYgKG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGVuZGluZ05leHRLZXkgPSBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV07XG4gICAgICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ05leHRLZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5XSA9IGdldFZhbHVlRm9yS2V5KG5leHRLZXkpO1xuICB9IC8vIEZpbmFsbHksIGFkZCB0aGUga2V5cyB3aGljaCBkaWRuJ3QgYXBwZWFyIGJlZm9yZSBhbnkga2V5IGluIGBuZXh0YFxuXG5cbiAgZm9yIChpID0gMDsgaSA8IHBlbmRpbmdLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hpbGRNYXBwaW5nW3BlbmRpbmdLZXlzW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdLZXlzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZE1hcHBpbmc7XG59XG5cbmZ1bmN0aW9uIGdldFByb3AoY2hpbGQsIHByb3AsIHByb3BzKSB7XG4gIHJldHVybiBwcm9wc1twcm9wXSAhPSBudWxsID8gcHJvcHNbcHJvcF0gOiBjaGlsZC5wcm9wc1twcm9wXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxDaGlsZE1hcHBpbmcocHJvcHMsIG9uRXhpdGVkKSB7XG4gIHJldHVybiBnZXRDaGlsZE1hcHBpbmcocHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgIG9uRXhpdGVkOiBvbkV4aXRlZC5iaW5kKG51bGwsIGNoaWxkKSxcbiAgICAgIGluOiB0cnVlLFxuICAgICAgYXBwZWFyOiBnZXRQcm9wKGNoaWxkLCAnYXBwZWFyJywgcHJvcHMpLFxuICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIHByb3BzKSxcbiAgICAgIGV4aXQ6IGdldFByb3AoY2hpbGQsICdleGl0JywgcHJvcHMpXG4gICAgfSk7XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRDaGlsZE1hcHBpbmcobmV4dFByb3BzLCBwcmV2Q2hpbGRNYXBwaW5nLCBvbkV4aXRlZCkge1xuICB2YXIgbmV4dENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZyhuZXh0UHJvcHMuY2hpbGRyZW4pO1xuICB2YXIgY2hpbGRyZW4gPSBtZXJnZUNoaWxkTWFwcGluZ3MocHJldkNoaWxkTWFwcGluZywgbmV4dENoaWxkTWFwcGluZyk7XG4gIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltrZXldO1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSByZXR1cm47XG4gICAgdmFyIGhhc1ByZXYgPSBrZXkgaW4gcHJldkNoaWxkTWFwcGluZztcbiAgICB2YXIgaGFzTmV4dCA9IGtleSBpbiBuZXh0Q2hpbGRNYXBwaW5nO1xuICAgIHZhciBwcmV2Q2hpbGQgPSBwcmV2Q2hpbGRNYXBwaW5nW2tleV07XG4gICAgdmFyIGlzTGVhdmluZyA9IGlzVmFsaWRFbGVtZW50KHByZXZDaGlsZCkgJiYgIXByZXZDaGlsZC5wcm9wcy5pbjsgLy8gaXRlbSBpcyBuZXcgKGVudGVyaW5nKVxuXG4gICAgaWYgKGhhc05leHQgJiYgKCFoYXNQcmV2IHx8IGlzTGVhdmluZykpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRlcmluZycsIGtleSlcbiAgICAgIGNoaWxkcmVuW2tleV0gPSBjbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgb25FeGl0ZWQ6IG9uRXhpdGVkLmJpbmQobnVsbCwgY2hpbGQpLFxuICAgICAgICBpbjogdHJ1ZSxcbiAgICAgICAgZXhpdDogZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBuZXh0UHJvcHMpLFxuICAgICAgICBlbnRlcjogZ2V0UHJvcChjaGlsZCwgJ2VudGVyJywgbmV4dFByb3BzKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghaGFzTmV4dCAmJiBoYXNQcmV2ICYmICFpc0xlYXZpbmcpIHtcbiAgICAgIC8vIGl0ZW0gaXMgb2xkIChleGl0aW5nKVxuICAgICAgLy8gY29uc29sZS5sb2coJ2xlYXZpbmcnLCBrZXkpXG4gICAgICBjaGlsZHJlbltrZXldID0gY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIGluOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChoYXNOZXh0ICYmIGhhc1ByZXYgJiYgaXNWYWxpZEVsZW1lbnQocHJldkNoaWxkKSkge1xuICAgICAgLy8gaXRlbSBoYXNuJ3QgY2hhbmdlZCB0cmFuc2l0aW9uIHN0YXRlc1xuICAgICAgLy8gY29weSBvdmVyIHRoZSBsYXN0IHRyYW5zaXRpb24gcHJvcHM7XG4gICAgICAvLyBjb25zb2xlLmxvZygndW5jaGFuZ2VkJywga2V5KVxuICAgICAgY2hpbGRyZW5ba2V5XSA9IGNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBvbkV4aXRlZDogb25FeGl0ZWQuYmluZChudWxsLCBjaGlsZCksXG4gICAgICAgIGluOiBwcmV2Q2hpbGQucHJvcHMuaW4sXG4gICAgICAgIGV4aXQ6IGdldFByb3AoY2hpbGQsICdleGl0JywgbmV4dFByb3BzKSxcbiAgICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIG5leHRQcm9wcylcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL3V0aWxzL0NoaWxkTWFwcGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFJvd1RlbXBsYXRlIGZyb20gJy4vcm93L3Jvdy10ZW1wbGF0ZSc7XG5pbXBvcnQgRm9vdGVyQ2VsbCBmcm9tICcuL2Zvb3Rlci1jZWxsJztcbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBGb290ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBjbGFzc05hbWUsIGNvbHVtbnMsIHNlbGVjdFJvdywgZXhwYW5kUm93IH0gPSBwcm9wcztcblxuICBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIHJldHVybiBjb2x1bW5zLm1hcCgoY29sdW1uLCBpKSA9PiB7XG4gICAgICBpZiAoY29sdW1uLmZvb3RlciA9PT0gdW5kZWZpbmVkIHx8IGNvbHVtbi5mb290ZXIgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb2x1bW5EYXRhID0gXy5wbHVjayhkYXRhLCBjb2x1bW4uZGF0YUZpZWxkKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvb3RlckNlbGxcbiAgICAgICAgICBpbmRleD17IGkgfVxuICAgICAgICAgIGtleT17IGNvbHVtbi5kYXRhRmllbGQgfVxuICAgICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAgICAgY29sdW1uRGF0YT17IGNvbHVtbkRhdGEgfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHRmb290PlxuICAgICAgPFJvd1RlbXBsYXRlXG4gICAgICAgIHJlbmRlckNvbnRlbnQ9eyByZW5kZXJDb250ZW50IH1cbiAgICAgICAgc2VsZWN0Um93PXsgc2VsZWN0Um93IH1cbiAgICAgICAgZXhwYW5kUm93PXsgZXhwYW5kUm93IH1cbiAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cbiAgICAgICAgY2VsbEVsPVwidGhcIlxuICAgICAgLz5cbiAgICA8L3Rmb290PlxuICApO1xufTtcblxuRm9vdGVyLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgc2VsZWN0Um93OiBQcm9wVHlwZXMub2JqZWN0LFxuICBleHBhbmRSb3c6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2Zvb3Rlci5qcyIsIi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBldmVudERlbGVnYXRlciBmcm9tICcuL2NlbGwtZXZlbnQtZGVsZWdhdGVyJztcblxuY2xhc3MgRm9vdGVyQ2VsbCBleHRlbmRzIGV2ZW50RGVsZWdhdGVyKFJlYWN0LkNvbXBvbmVudCkge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbmRleCwgY29sdW1uLCBjb2x1bW5EYXRhIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qge1xuICAgICAgZm9vdGVyLFxuICAgICAgZm9vdGVyVGl0bGUsXG4gICAgICBmb290ZXJBbGlnbixcbiAgICAgIGZvb3RlckZvcm1hdHRlcixcbiAgICAgIGZvb3RlckV2ZW50cyxcbiAgICAgIGZvb3RlckNsYXNzZXMsXG4gICAgICBmb290ZXJTdHlsZSxcbiAgICAgIGZvb3RlckF0dHJzXG4gICAgfSA9IGNvbHVtbjtcblxuICAgIGNvbnN0IGRlbGVnYXRlRXZlbnRzID0gdGhpcy5kZWxlZ2F0ZShmb290ZXJFdmVudHMpO1xuICAgIGNvbnN0IGNlbGxBdHRycyA9IHtcbiAgICAgIC4uLihfLmlzRnVuY3Rpb24oZm9vdGVyQXR0cnMpID8gZm9vdGVyQXR0cnMoY29sdW1uLCBpbmRleCkgOiBmb290ZXJBdHRycyksXG4gICAgICAuLi5kZWxlZ2F0ZUV2ZW50c1xuICAgIH07XG5cblxuICAgIGxldCB0ZXh0ID0gJyc7XG4gICAgaWYgKF8uaXNTdHJpbmcoZm9vdGVyKSkge1xuICAgICAgdGV4dCA9IGZvb3RlcjtcbiAgICB9IGVsc2UgaWYgKF8uaXNGdW5jdGlvbihmb290ZXIpKSB7XG4gICAgICB0ZXh0ID0gZm9vdGVyKGNvbHVtbkRhdGEsIGNvbHVtbiwgaW5kZXgpO1xuICAgIH1cblxuICAgIGxldCBjZWxsU3R5bGUgPSB7fTtcbiAgICBjb25zdCBjZWxsQ2xhc3NlcyA9IF8uaXNGdW5jdGlvbihmb290ZXJDbGFzc2VzKSA/IGZvb3RlckNsYXNzZXMoY29sdW1uLCBpbmRleCkgOiBmb290ZXJDbGFzc2VzO1xuXG4gICAgaWYgKGZvb3RlclN0eWxlKSB7XG4gICAgICBjZWxsU3R5bGUgPSBfLmlzRnVuY3Rpb24oZm9vdGVyU3R5bGUpID8gZm9vdGVyU3R5bGUoY29sdW1uLCBpbmRleCkgOiBmb290ZXJTdHlsZTtcbiAgICAgIGNlbGxTdHlsZSA9IGNlbGxTdHlsZSA/IHsgLi4uY2VsbFN0eWxlIH0gOiBjZWxsU3R5bGU7XG4gICAgfVxuXG4gICAgaWYgKGZvb3RlclRpdGxlKSB7XG4gICAgICBjZWxsQXR0cnMudGl0bGUgPSBfLmlzRnVuY3Rpb24oZm9vdGVyVGl0bGUpID8gZm9vdGVyVGl0bGUoY29sdW1uLCBpbmRleCkgOiB0ZXh0O1xuICAgIH1cblxuICAgIGlmIChmb290ZXJBbGlnbikge1xuICAgICAgY2VsbFN0eWxlLnRleHRBbGlnbiA9IF8uaXNGdW5jdGlvbihmb290ZXJBbGlnbikgPyBmb290ZXJBbGlnbihjb2x1bW4sIGluZGV4KSA6IGZvb3RlckFsaWduO1xuICAgIH1cblxuICAgIGlmIChjZWxsQ2xhc3NlcykgY2VsbEF0dHJzLmNsYXNzTmFtZSA9IGNzKGNlbGxBdHRycy5jbGFzc05hbWUsIGNlbGxDbGFzc2VzKTtcbiAgICBpZiAoIV8uaXNFbXB0eU9iamVjdChjZWxsU3R5bGUpKSBjZWxsQXR0cnMuc3R5bGUgPSBjZWxsU3R5bGU7XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IGZvb3RlckZvcm1hdHRlciA/IGZvb3RlckZvcm1hdHRlcihjb2x1bW4sIGluZGV4LCB7IHRleHQgfSkgOiB0ZXh0O1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywgY2VsbEF0dHJzLCBjaGlsZHJlbik7XG4gIH1cbn1cblxuRm9vdGVyQ2VsbC5wcm9wVHlwZXMgPSB7XG4gIGNvbHVtbkRhdGE6IFByb3BUeXBlcy5hcnJheSxcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHVtbjogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyQ2VsbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2Zvb3Rlci1jZWxsLmpzIiwiaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IENvbHVtblJlc29sdmVyIGZyb20gJy4vY29sdW1uLXJlc29sdmVyJztcblxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBUYWJsZVJlc29sdmVyIGV4dGVuZHMgQ29sdW1uUmVzb2x2ZXIoRXh0ZW5kQmFzZSkge1xuICAgIHZhbGlkYXRlUHJvcHMoKSB7XG4gICAgICBjb25zdCB7IGtleUZpZWxkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKCFrZXlGaWVsZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBzcGVjaWZ5IGEgZmllbGQgYXMga2V5IHZpYSBrZXlGaWVsZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudmlzaWJsZUNvbHVtblNpemUoZmFsc2UpIDw9IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB2aXNpYmxlIGNvbHVtbnMgZGV0ZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc0VtcHR5KCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YS5sZW5ndGggPT09IDA7XG4gICAgfVxuXG4gICAgdmlzaWJsZVJvd3MoKSB7XG4gICAgICBjb25zdCB7IGRhdGEsIGhpZGRlblJvd3MsIGtleUZpZWxkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKCFoaWRkZW5Sb3dzIHx8IGhpZGRlblJvd3MubGVuZ3RoID09PSAwKSByZXR1cm4gZGF0YTtcbiAgICAgIHJldHVybiBkYXRhLmZpbHRlcigocm93KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IF8uZ2V0KHJvdywga2V5RmllbGQpO1xuICAgICAgICByZXR1cm4gIV8uY29udGFpbnMoaGlkZGVuUm93cywga2V5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBDb2x1bW5SZXNvbHZlciBleHRlbmRzIEV4dGVuZEJhc2Uge1xuICAgIHZpc2libGVDb2x1bW5TaXplKGluY2x1ZGVTZWxlY3RDb2x1bW4gPSB0cnVlKSB7XG4gICAgICBsZXQgY29sdW1uTGVuO1xuICAgICAgaWYgKHRoaXMucHJvcHMuY29sdW1uVG9nZ2xlICYmIHRoaXMucHJvcHMuY29sdW1uVG9nZ2xlLnRvZ2dsZXMpIHtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IHRoaXMucHJvcHMuY29sdW1uVG9nZ2xlLnRvZ2dsZXM7XG4gICAgICAgIGNvbHVtbkxlbiA9IE9iamVjdC5rZXlzKGNvbHVtbnMpLmZpbHRlcihuYW1lID0+IGNvbHVtbnNbbmFtZV0pLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbkxlbiA9IHRoaXMucHJvcHMuY29sdW1ucy5maWx0ZXIoYyA9PiAhYy5oaWRkZW4pLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIGlmICghaW5jbHVkZVNlbGVjdENvbHVtbikgcmV0dXJuIGNvbHVtbkxlbjtcbiAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdyAmJiAhdGhpcy5wcm9wcy5zZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbikge1xuICAgICAgICBjb2x1bW5MZW4gKz0gMTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLmV4cGFuZFJvdyAmJiB0aGlzLnByb3BzLmV4cGFuZFJvdy5zaG93RXhwYW5kQ29sdW1uKSB7XG4gICAgICAgIGNvbHVtbkxlbiArPSAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbHVtbkxlbjtcbiAgICB9XG4gIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9wcm9wcy1yZXNvbHZlci9jb2x1bW4tcmVzb2x2ZXIuanMiLCIvKiBlc2xpbnQgY2FtZWxjYXNlOiAwICovXG4vKiBlc2xpbnQgbm8tcmV0dXJuLWFzc2lnbjogMCAqL1xuLyogZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOiAwICovXG4vKiBlc2xpbnQgY2xhc3MtbWV0aG9kcy11c2UtdGhpczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRzJztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBjcmVhdGVEYXRhQ29udGV4dCBmcm9tICcuL2RhdGEtY29udGV4dCc7XG5pbXBvcnQgY3JlYXRlQ29sdW1uTWd0Q29udGV4dCBmcm9tICcuL2NvbHVtbi1jb250ZXh0JztcbmltcG9ydCBjcmVhdGVTb3J0Q29udGV4dCBmcm9tICcuL3NvcnQtY29udGV4dCc7XG5pbXBvcnQgU2VsZWN0aW9uQ29udGV4dCBmcm9tICcuL3NlbGVjdGlvbi1jb250ZXh0JztcbmltcG9ydCBSb3dFeHBhbmRDb250ZXh0IGZyb20gJy4vcm93LWV4cGFuZC1jb250ZXh0JztcbmltcG9ydCByZW1vdGVSZXNvbHZlciBmcm9tICcuLi9wcm9wcy1yZXNvbHZlci9yZW1vdGUtcmVzb2x2ZXInO1xuaW1wb3J0IHsgQm9vdHN0cmFwQ29udGV4dCB9IGZyb20gJy4vYm9vdHN0cmFwJztcbmltcG9ydCBkYXRhT3BlcmF0b3IgZnJvbSAnLi4vc3RvcmUvb3BlcmF0b3JzJztcblxuY29uc3Qgd2l0aENvbnRleHQgPSBCYXNlID0+XG4gIGNsYXNzIEJvb3RzdHJhcFRhYmxlQ29udGFpbmVyIGV4dGVuZHMgcmVtb3RlUmVzb2x2ZXIoQ29tcG9uZW50KSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuRGF0YUNvbnRleHQgPSBjcmVhdGVEYXRhQ29udGV4dCgpO1xuXG4gICAgICBpZiAocHJvcHMucmVnaXN0ZXJFeHBvc2VkQVBJKSB7XG4gICAgICAgIGNvbnN0IGV4cG9zZWRBUElFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICBleHBvc2VkQVBJRW1pdHRlci5vbignZ2V0LnRhYmxlLmRhdGEnLCBwYXlsb2FkID0+IHBheWxvYWQucmVzdWx0ID0gdGhpcy50YWJsZS5nZXREYXRhKCkpO1xuICAgICAgICBleHBvc2VkQVBJRW1pdHRlci5vbignZ2V0LnNlbGVjdGVkLnJvd3MnLCBwYXlsb2FkID0+IHBheWxvYWQucmVzdWx0ID0gdGhpcy5zZWxlY3Rpb25Db250ZXh0LmdldFNlbGVjdGVkKCkpO1xuICAgICAgICBleHBvc2VkQVBJRW1pdHRlci5vbignZ2V0LmZpbHRlcmVkLnJvd3MnLCAocGF5bG9hZCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnNlYXJjaENvbnRleHQpIHtcbiAgICAgICAgICAgIHBheWxvYWQucmVzdWx0ID0gdGhpcy5zZWFyY2hDb250ZXh0LmdldFNlYXJjaGVkKCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlckNvbnRleHQpIHtcbiAgICAgICAgICAgIHBheWxvYWQucmVzdWx0ID0gdGhpcy5maWx0ZXJDb250ZXh0LmdldEZpbHRlcmVkKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBheWxvYWQucmVzdWx0ID0gdGhpcy50YWJsZS5nZXREYXRhKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcHJvcHMucmVnaXN0ZXJFeHBvc2VkQVBJKGV4cG9zZWRBUElFbWl0dGVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmNvbHVtbnMuZmlsdGVyKGNvbCA9PiBjb2wuc29ydCkubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLlNvcnRDb250ZXh0ID0gY3JlYXRlU29ydENvbnRleHQoXG4gICAgICAgICAgZGF0YU9wZXJhdG9yLCB0aGlzLmlzUmVtb3RlU29ydCwgdGhpcy5oYW5kbGVSZW1vdGVTb3J0Q2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5jb2x1bW5Ub2dnbGUgfHxcbiAgICAgICAgcHJvcHMuY29sdW1ucy5maWx0ZXIoY29sID0+IGNvbC5oaWRkZW4pLmxlbmd0aCA+IDBcbiAgICAgICkge1xuICAgICAgICB0aGlzLkNvbHVtbk1hbmFnZW1lbnRDb250ZXh0ID0gY3JlYXRlQ29sdW1uTWd0Q29udGV4dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuc2VsZWN0Um93KSB7XG4gICAgICAgIHRoaXMuU2VsZWN0aW9uQ29udGV4dCA9IFNlbGVjdGlvbkNvbnRleHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5leHBhbmRSb3cpIHtcbiAgICAgICAgdGhpcy5Sb3dFeHBhbmRDb250ZXh0ID0gUm93RXhwYW5kQ29udGV4dDtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmNlbGxFZGl0ICYmIHByb3BzLmNlbGxFZGl0LmNyZWF0ZUNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5DZWxsRWRpdENvbnRleHQgPSBwcm9wcy5jZWxsRWRpdC5jcmVhdGVDb250ZXh0KFxuICAgICAgICAgIF8sIGRhdGFPcGVyYXRvciwgdGhpcy5pc1JlbW90ZUNlbGxFZGl0LCB0aGlzLmhhbmRsZVJlbW90ZUNlbGxDaGFuZ2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuZmlsdGVyKSB7XG4gICAgICAgIHRoaXMuRmlsdGVyQ29udGV4dCA9IHByb3BzLmZpbHRlci5jcmVhdGVDb250ZXh0KFxuICAgICAgICAgIF8sIHRoaXMuaXNSZW1vdGVGaWx0ZXJpbmcsIHRoaXMuaGFuZGxlUmVtb3RlRmlsdGVyQ2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgICAgdGhpcy5QYWdpbmF0aW9uQ29udGV4dCA9IHByb3BzLnBhZ2luYXRpb24uY3JlYXRlQ29udGV4dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuc2VhcmNoICYmIHByb3BzLnNlYXJjaC5zZWFyY2hDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuU2VhcmNoQ29udGV4dCA9IHByb3BzLnNlYXJjaC5zZWFyY2hDb250ZXh0KFxuICAgICAgICAgIF8sIHRoaXMuaXNSZW1vdGVTZWFyY2gsIHRoaXMuaGFuZGxlUmVtb3RlU2VhcmNoQ2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnNldERlcGVuZGVuY3lNb2R1bGVzKSB7XG4gICAgICAgIHByb3BzLnNldERlcGVuZGVuY3lNb2R1bGVzKF8pO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuc2V0UGFnaW5hdGlvblJlbW90ZUVtaXR0ZXIpIHtcbiAgICAgICAgcHJvcHMuc2V0UGFnaW5hdGlvblJlbW90ZUVtaXR0ZXIodGhpcy5yZW1vdGVFbWl0dGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuY29sdW1ucy5maWx0ZXIoY29sID0+IGNvbC5zb3J0KS5sZW5ndGggPD0gMCkge1xuICAgICAgICB0aGlzLlNvcnRDb250ZXh0ID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuU29ydENvbnRleHQpIHtcbiAgICAgICAgdGhpcy5Tb3J0Q29udGV4dCA9IGNyZWF0ZVNvcnRDb250ZXh0KFxuICAgICAgICAgIGRhdGFPcGVyYXRvciwgdGhpcy5pc1JlbW90ZVNvcnQsIHRoaXMuaGFuZGxlUmVtb3RlU29ydENoYW5nZSk7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRQcm9wcy5wYWdpbmF0aW9uICYmIHRoaXMucHJvcHMucGFnaW5hdGlvbikge1xuICAgICAgICB0aGlzLlBhZ2luYXRpb25Db250ZXh0ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0UHJvcHMucGFnaW5hdGlvbiAmJiAhdGhpcy5wcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICAgIHRoaXMuUGFnaW5hdGlvbkNvbnRleHQgPSBuZXh0UHJvcHMucGFnaW5hdGlvbi5jcmVhdGVDb250ZXh0KFxuICAgICAgICAgIHRoaXMuaXNSZW1vdGVQYWdpbmF0aW9uLCB0aGlzLmhhbmRsZVJlbW90ZVBhZ2VDaGFuZ2UpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0UHJvcHMuY2VsbEVkaXQgJiYgdGhpcy5wcm9wcy5jZWxsRWRpdCkge1xuICAgICAgICB0aGlzLkNlbGxFZGl0Q29udGV4dCA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAobmV4dFByb3BzLmNlbGxFZGl0ICYmICF0aGlzLnByb3BzLmNlbGxFZGl0KSB7XG4gICAgICAgIHRoaXMuQ2VsbEVkaXRDb250ZXh0ID0gbmV4dFByb3BzLmNlbGxFZGl0LmNyZWF0ZUNvbnRleHQoXG4gICAgICAgICAgXywgZGF0YU9wZXJhdG9yLCB0aGlzLmlzUmVtb3RlQ2VsbEVkaXQsIHRoaXMuaGFuZGxlUmVtb3RlQ2VsbENoYW5nZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyQmFzZSgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgIHNlYXJjaFByb3BzLFxuICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgIHBhZ2luYXRpb25Qcm9wcyxcbiAgICAgICAgY29sdW1uVG9nZ2xlUHJvcHNcbiAgICAgICkgPT4gKFxuICAgICAgICA8QmFzZVxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy50YWJsZSA9IG4gfVxuICAgICAgICAgIHsgLi4udGhpcy5wcm9wcyB9XG4gICAgICAgICAgeyAuLi5zb3J0UHJvcHMgfVxuICAgICAgICAgIHsgLi4uZmlsdGVyUHJvcHMgfVxuICAgICAgICAgIHsgLi4uc2VhcmNoUHJvcHMgfVxuICAgICAgICAgIHsgLi4ucGFnaW5hdGlvblByb3BzIH1cbiAgICAgICAgICB7IC4uLmNvbHVtblRvZ2dsZVByb3BzIH1cbiAgICAgICAgICBkYXRhPXsgcm9vdFByb3BzLmdldERhdGEoZmlsdGVyUHJvcHMsIHNlYXJjaFByb3BzLCBzb3J0UHJvcHMsIHBhZ2luYXRpb25Qcm9wcykgfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJXaXRoQ29sdW1uTWFuYWdlbWVudEN0eChiYXNlLCBiYXNlUHJvcHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgIHNlYXJjaFByb3BzLFxuICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgIHBhZ2luYXRpb25Qcm9wc1xuICAgICAgKSA9PiAoXG4gICAgICAgIDx0aGlzLkNvbHVtbk1hbmFnZW1lbnRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHRvZ2dsZXM9eyB0aGlzLnByb3BzLmNvbHVtblRvZ2dsZSA/IHRoaXMucHJvcHMuY29sdW1uVG9nZ2xlLnRvZ2dsZXMgOiBudWxsIH1cbiAgICAgICAgPlxuICAgICAgICAgIDx0aGlzLkNvbHVtbk1hbmFnZW1lbnRDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2x1bW5Ub2dnbGVQcm9wcyA9PiBiYXNlKFxuICAgICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJQcm9wcyxcbiAgICAgICAgICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvblByb3BzLFxuICAgICAgICAgICAgICAgIGNvbHVtblRvZ2dsZVByb3BzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RoaXMuQ29sdW1uTWFuYWdlbWVudENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIDwvdGhpcy5Db2x1bW5NYW5hZ2VtZW50Q29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyV2l0aFNlbGVjdGlvbkN0eChiYXNlLCBiYXNlUHJvcHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgIHNlYXJjaFByb3BzLFxuICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgIHBhZ2luYXRpb25Qcm9wc1xuICAgICAgKSA9PiAoXG4gICAgICAgIDx0aGlzLlNlbGVjdGlvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICB7IC4uLmJhc2VQcm9wcyB9XG4gICAgICAgICAgcmVmPXsgbiA9PiB0aGlzLnNlbGVjdGlvbkNvbnRleHQgPSBuIH1cbiAgICAgICAgICBzZWxlY3RSb3c9eyB0aGlzLnByb3BzLnNlbGVjdFJvdyB9XG4gICAgICAgICAgZGF0YT17IHJvb3RQcm9wcy5nZXREYXRhKGZpbHRlclByb3BzLCBzZWFyY2hQcm9wcywgc29ydFByb3BzLCBwYWdpbmF0aW9uUHJvcHMpIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJhc2UoXG4gICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgICAgICAgIHNlYXJjaFByb3BzLFxuICAgICAgICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgICAgICAgIHBhZ2luYXRpb25Qcm9wc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC90aGlzLlNlbGVjdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcldpdGhSb3dFeHBhbmRDdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgc29ydFByb3BzLFxuICAgICAgICBwYWdpbmF0aW9uUHJvcHNcbiAgICAgICkgPT4gKFxuICAgICAgICA8dGhpcy5Sb3dFeHBhbmRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5yb3dFeHBhbmRDb250ZXh0ID0gbiB9XG4gICAgICAgICAgZXhwYW5kUm93PXsgdGhpcy5wcm9wcy5leHBhbmRSb3cgfVxuICAgICAgICAgIGRhdGE9eyByb290UHJvcHMuZ2V0RGF0YShmaWx0ZXJQcm9wcywgc2VhcmNoUHJvcHMsIHNvcnRQcm9wcywgcGFnaW5hdGlvblByb3BzKSB9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBiYXNlKFxuICAgICAgICAgICAgICByb290UHJvcHMsXG4gICAgICAgICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgICAgICAgc29ydFByb3BzLFxuICAgICAgICAgICAgICBwYWdpbmF0aW9uUHJvcHNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIDwvdGhpcy5Sb3dFeHBhbmRDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJXaXRoUGFnaW5hdGlvbkN0eChiYXNlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgc29ydFByb3BzXG4gICAgICApID0+IChcbiAgICAgICAgPHRoaXMuUGFnaW5hdGlvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICByZWY9eyBuID0+IHRoaXMucGFnaW5hdGlvbkNvbnRleHQgPSBuIH1cbiAgICAgICAgICBwYWdpbmF0aW9uPXsgdGhpcy5wcm9wcy5wYWdpbmF0aW9uIH1cbiAgICAgICAgICBkYXRhPXsgcm9vdFByb3BzLmdldERhdGEoZmlsdGVyUHJvcHMsIHNlYXJjaFByb3BzLCBzb3J0UHJvcHMpIH1cbiAgICAgICAgICBib290c3RyYXA0PXsgdGhpcy5wcm9wcy5ib290c3RyYXA0IH1cbiAgICAgICAgICBpc1JlbW90ZVBhZ2luYXRpb249eyB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbiB9XG4gICAgICAgICAgcmVtb3RlRW1pdHRlcj17IHRoaXMucmVtb3RlRW1pdHRlciB9XG4gICAgICAgICAgb25EYXRhU2l6ZUNoYW5nZT17IHRoaXMucHJvcHMub25EYXRhU2l6ZUNoYW5nZSB9XG4gICAgICAgICAgdGFibGVJZD17IHRoaXMucHJvcHMuaWQgfVxuICAgICAgICA+XG4gICAgICAgICAgPHRoaXMuUGFnaW5hdGlvbkNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhZ2luYXRpb25Qcm9wcyA9PiBiYXNlKFxuICAgICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJQcm9wcyxcbiAgICAgICAgICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvblByb3BzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RoaXMuUGFnaW5hdGlvbkNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIDwvdGhpcy5QYWdpbmF0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyV2l0aFNvcnRDdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICBzZWFyY2hQcm9wc1xuICAgICAgKSA9PiAoXG4gICAgICAgIDx0aGlzLlNvcnRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5zb3J0Q29udGV4dCA9IG4gfVxuICAgICAgICAgIGRlZmF1bHRTb3J0ZWQ9eyB0aGlzLnByb3BzLmRlZmF1bHRTb3J0ZWQgfVxuICAgICAgICAgIGRlZmF1bHRTb3J0RGlyZWN0aW9uPXsgdGhpcy5wcm9wcy5kZWZhdWx0U29ydERpcmVjdGlvbiB9XG4gICAgICAgICAgc29ydD17IHRoaXMucHJvcHMuc29ydCB9XG4gICAgICAgICAgZGF0YT17IHJvb3RQcm9wcy5nZXREYXRhKGZpbHRlclByb3BzLCBzZWFyY2hQcm9wcykgfVxuICAgICAgICA+XG4gICAgICAgICAgPHRoaXMuU29ydENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNvcnRQcm9wcyA9PiBiYXNlKFxuICAgICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJQcm9wcyxcbiAgICAgICAgICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RoaXMuU29ydENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIDwvdGhpcy5Tb3J0Q29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyV2l0aFNlYXJjaEN0eChiYXNlLCBiYXNlUHJvcHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgZmlsdGVyUHJvcHNcbiAgICAgICkgPT4gKFxuICAgICAgICA8dGhpcy5TZWFyY2hDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5zZWFyY2hDb250ZXh0ID0gbiB9XG4gICAgICAgICAgZGF0YT17IHJvb3RQcm9wcy5nZXREYXRhKGZpbHRlclByb3BzKSB9XG4gICAgICAgICAgc2VhcmNoVGV4dD17IHRoaXMucHJvcHMuc2VhcmNoLnNlYXJjaFRleHQgfVxuICAgICAgICAgIGRhdGFDaGFuZ2VMaXN0ZW5lcj17IHRoaXMucHJvcHMuZGF0YUNoYW5nZUxpc3RlbmVyIH1cbiAgICAgICAgPlxuICAgICAgICAgIDx0aGlzLlNlYXJjaENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlYXJjaFByb3BzID0+IGJhc2UoXG4gICAgICAgICAgICAgICAgcm9vdFByb3BzLFxuICAgICAgICAgICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICAgICAgICAgIHNlYXJjaFByb3BzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RoaXMuU2VhcmNoQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgPC90aGlzLlNlYXJjaENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcldpdGhGaWx0ZXJDdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gcm9vdFByb3BzID0+IChcbiAgICAgICAgPHRoaXMuRmlsdGVyQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgIHsgLi4uYmFzZVByb3BzIH1cbiAgICAgICAgICByZWY9eyBuID0+IHRoaXMuZmlsdGVyQ29udGV4dCA9IG4gfVxuICAgICAgICAgIGRhdGE9eyByb290UHJvcHMuZ2V0RGF0YSgpIH1cbiAgICAgICAgICBmaWx0ZXI9eyB0aGlzLnByb3BzLmZpbHRlci5vcHRpb25zIHx8IHt9IH1cbiAgICAgICAgICBkYXRhQ2hhbmdlTGlzdGVuZXI9eyB0aGlzLnByb3BzLmRhdGFDaGFuZ2VMaXN0ZW5lciB9XG4gICAgICAgID5cbiAgICAgICAgICA8dGhpcy5GaWx0ZXJDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmaWx0ZXJQcm9wcyA9PiBiYXNlKFxuICAgICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJQcm9wc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90aGlzLkZpbHRlckNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIDwvdGhpcy5GaWx0ZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJXaXRoQ2VsbEVkaXRDdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gcm9vdFByb3BzID0+IChcbiAgICAgICAgPHRoaXMuQ2VsbEVkaXRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5jZWxsRWRpdENvbnRleHQgPSBuIH1cbiAgICAgICAgICBzZWxlY3RSb3c9eyB0aGlzLnByb3BzLnNlbGVjdFJvdyB9XG4gICAgICAgICAgY2VsbEVkaXQ9eyB0aGlzLnByb3BzLmNlbGxFZGl0IH1cbiAgICAgICAgICBkYXRhPXsgcm9vdFByb3BzLmdldERhdGEoKSB9XG4gICAgICAgID5cbiAgICAgICAgICB7IGJhc2Uocm9vdFByb3BzKSB9XG4gICAgICAgIDwvdGhpcy5DZWxsRWRpdENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsga2V5RmllbGQsIGNvbHVtbnMsIGJvb3RzdHJhcDQgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBiYXNlUHJvcHMgPSB7IGtleUZpZWxkLCBjb2x1bW5zIH07XG5cbiAgICAgIGxldCBiYXNlID0gdGhpcy5yZW5kZXJCYXNlKCk7XG5cbiAgICAgIGlmICh0aGlzLkNvbHVtbk1hbmFnZW1lbnRDb250ZXh0KSB7XG4gICAgICAgIGJhc2UgPSB0aGlzLnJlbmRlcldpdGhDb2x1bW5NYW5hZ2VtZW50Q3R4KGJhc2UsIGJhc2VQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLlNlbGVjdGlvbkNvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aFNlbGVjdGlvbkN0eChiYXNlLCBiYXNlUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5Sb3dFeHBhbmRDb250ZXh0KSB7XG4gICAgICAgIGJhc2UgPSB0aGlzLnJlbmRlcldpdGhSb3dFeHBhbmRDdHgoYmFzZSwgYmFzZVByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuUGFnaW5hdGlvbkNvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aFBhZ2luYXRpb25DdHgoYmFzZSwgYmFzZVByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuU29ydENvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aFNvcnRDdHgoYmFzZSwgYmFzZVByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuU2VhcmNoQ29udGV4dCkge1xuICAgICAgICBiYXNlID0gdGhpcy5yZW5kZXJXaXRoU2VhcmNoQ3R4KGJhc2UsIGJhc2VQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLkZpbHRlckNvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aEZpbHRlckN0eChiYXNlLCBiYXNlUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5DZWxsRWRpdENvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aENlbGxFZGl0Q3R4KGJhc2UsIGJhc2VQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCb290c3RyYXBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsgeyBib290c3RyYXA0IH0gfT5cbiAgICAgICAgICA8dGhpcy5EYXRhQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgICAgZGF0YT17IHRoaXMucHJvcHMuZGF0YSB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRoaXMuRGF0YUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiYXNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGhpcy5EYXRhQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICA8L3RoaXMuRGF0YUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgIDwvQm9vdHN0cmFwQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29udGV4dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL2luZGV4LmpzIiwiLyogZXNsaW50IGNhbWVsY2FzZTogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgRGF0YUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbiAgY2xhc3MgRGF0YVByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxuICAgIH1cblxuICAgIHN0YXRlID0geyBkYXRhOiB0aGlzLnByb3BzLmRhdGEgfTtcblxuICAgIGdldERhdGEgPSAoZmlsdGVyUHJvcHMsIHNlYXJjaFByb3BzLCBzb3J0UHJvcHMsIHBhZ2luYXRpb25Qcm9wcykgPT4ge1xuICAgICAgaWYgKHBhZ2luYXRpb25Qcm9wcykgcmV0dXJuIHBhZ2luYXRpb25Qcm9wcy5kYXRhO1xuICAgICAgZWxzZSBpZiAoc29ydFByb3BzKSByZXR1cm4gc29ydFByb3BzLmRhdGE7XG4gICAgICBlbHNlIGlmIChzZWFyY2hQcm9wcykgcmV0dXJuIHNlYXJjaFByb3BzLmRhdGE7XG4gICAgICBlbHNlIGlmIChmaWx0ZXJQcm9wcykgcmV0dXJuIGZpbHRlclByb3BzLmRhdGE7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBkYXRhOiBuZXh0UHJvcHMuZGF0YSB9KSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERhdGFDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgdmFsdWU9eyB7XG4gICAgICAgICAgICBkYXRhOiB0aGlzLnN0YXRlLmRhdGEsXG4gICAgICAgICAgICBnZXREYXRhOiB0aGlzLmdldERhdGFcbiAgICAgICAgICB9IH1cbiAgICAgICAgPlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIFByb3ZpZGVyOiBEYXRhUHJvdmlkZXIsXG4gICAgQ29uc3VtZXI6IERhdGFDb250ZXh0LkNvbnN1bWVyXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvZGF0YS1jb250ZXh0LmpzIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbi8qIGVzbGludCByZWFjdC9wcmVmZXItc3RhdGVsZXNzLWZ1bmN0aW9uOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBDb2x1bW5NYW5hZ2VtZW50Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuICBjbGFzcyBDb2x1bW5NYW5hZ2VtZW50UHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgIHRvZ2dsZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgdG9nZ2xlczogbnVsbFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGxldCB0b2dnbGVDb2x1bW47XG4gICAgICBjb25zdCB7IGNvbHVtbnMsIHRvZ2dsZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAodG9nZ2xlcykge1xuICAgICAgICB0b2dnbGVDb2x1bW4gPSBjb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gdG9nZ2xlc1tjb2x1bW4uZGF0YUZpZWxkXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2dnbGVDb2x1bW4gPSBjb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gIWNvbHVtbi5oaWRkZW4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENvbHVtbk1hbmFnZW1lbnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsgeyBjb2x1bW5zOiB0b2dnbGVDb2x1bW4gfSB9PlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgIDwvQ29sdW1uTWFuYWdlbWVudENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgUHJvdmlkZXI6IENvbHVtbk1hbmFnZW1lbnRQcm92aWRlcixcbiAgICBDb25zdW1lcjogQ29sdW1uTWFuYWdlbWVudENvbnRleHQuQ29uc3VtZXJcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9jb2x1bW4tY29udGV4dC5qcyIsIi8qIGVzbGludCBjYW1lbGNhc2U6IDAgKi9cbi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcblxuZXhwb3J0IGRlZmF1bHQgKFxuICBkYXRhT3BlcmF0b3IsXG4gIGlzUmVtb3RlU29ydCxcbiAgaGFuZGxlU29ydENoYW5nZVxuKSA9PiB7XG4gIGNvbnN0IFNvcnRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG4gIGNsYXNzIFNvcnRQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICAgIGRlZmF1bHRTb3J0ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGRhdGFGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0RFU0MsIENvbnN0LlNPUlRfQVNDXSkuaXNSZXF1aXJlZFxuICAgICAgfSkpLFxuICAgICAgc29ydDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgZGF0YUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0RFU0MsIENvbnN0LlNPUlRfQVNDXSksXG4gICAgICAgIHNvcnRGdW5jOiBQcm9wVHlwZXMuZnVuY1xuICAgICAgfSksXG4gICAgICBkZWZhdWx0U29ydERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0RFU0MsIENvbnN0LlNPUlRfQVNDXSlcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgbGV0IHNvcnRPcmRlcjtcbiAgICAgIGxldCBzb3J0Q29sdW1uO1xuICAgICAgY29uc3QgeyBkZWZhdWx0U29ydGVkLCBkZWZhdWx0U29ydERpcmVjdGlvbiwgc29ydCB9ID0gcHJvcHM7XG5cbiAgICAgIGlmIChkZWZhdWx0U29ydGVkICYmIGRlZmF1bHRTb3J0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICBzb3J0T3JkZXIgPSBkZWZhdWx0U29ydGVkWzBdLm9yZGVyIHx8IGRlZmF1bHRTb3J0RGlyZWN0aW9uO1xuICAgICAgICBzb3J0Q29sdW1uID0gdGhpcy5pbml0U29ydChkZWZhdWx0U29ydGVkWzBdLmRhdGFGaWVsZCwgc29ydE9yZGVyKTtcbiAgICAgIH0gZWxzZSBpZiAoc29ydCAmJiBzb3J0LmRhdGFGaWVsZCAmJiBzb3J0Lm9yZGVyKSB7XG4gICAgICAgIHNvcnRPcmRlciA9IHNvcnQub3JkZXI7XG4gICAgICAgIHNvcnRDb2x1bW4gPSB0aGlzLmluaXRTb3J0KHNvcnQuZGF0YUZpZWxkLCBzb3J0T3JkZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZSA9IHsgc29ydE9yZGVyLCBzb3J0Q29sdW1uIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCB7IHNvcnRPcmRlciwgc29ydENvbHVtbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGlmIChpc1JlbW90ZVNvcnQoKSAmJiBzb3J0T3JkZXIgJiYgc29ydENvbHVtbikge1xuICAgICAgICBoYW5kbGVTb3J0Q2hhbmdlKHNvcnRDb2x1bW4uZGF0YUZpZWxkLCBzb3J0T3JkZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgY29uc3QgeyBzb3J0LCBjb2x1bW5zIH0gPSBuZXh0UHJvcHM7XG4gICAgICBpZiAoc29ydCAmJiBzb3J0LmRhdGFGaWVsZCAmJiBzb3J0Lm9yZGVyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNvcnRPcmRlcjogc29ydC5vcmRlcixcbiAgICAgICAgICBzb3J0Q29sdW1uOiBjb2x1bW5zLmZpbmQoY29sID0+IGNvbC5kYXRhRmllbGQgPT09IHNvcnQuZGF0YUZpZWxkKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0U29ydChzb3J0RmllbGQsIHNvcnRPcmRlcikge1xuICAgICAgbGV0IHNvcnRDb2x1bW47XG4gICAgICBjb25zdCB7IGNvbHVtbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBzb3J0Q29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKGNvbCA9PiBjb2wuZGF0YUZpZWxkID09PSBzb3J0RmllbGQpO1xuICAgICAgaWYgKHNvcnRDb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc29ydENvbHVtbiA9IHNvcnRDb2x1bW5zWzBdO1xuXG4gICAgICAgIGlmIChzb3J0Q29sdW1uLm9uU29ydCkge1xuICAgICAgICAgIHNvcnRDb2x1bW4ub25Tb3J0KHNvcnRGaWVsZCwgc29ydE9yZGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNvcnRDb2x1bW47XG4gICAgfVxuXG4gICAgaGFuZGxlU29ydCA9IChjb2x1bW4pID0+IHtcbiAgICAgIGNvbnN0IHNvcnRPcmRlciA9IGRhdGFPcGVyYXRvci5uZXh0T3JkZXIoY29sdW1uLCB0aGlzLnN0YXRlLCB0aGlzLnByb3BzLmRlZmF1bHRTb3J0RGlyZWN0aW9uKTtcblxuICAgICAgaWYgKGNvbHVtbi5vblNvcnQpIHtcbiAgICAgICAgY29sdW1uLm9uU29ydChjb2x1bW4uZGF0YUZpZWxkLCBzb3J0T3JkZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNSZW1vdGVTb3J0KCkpIHtcbiAgICAgICAgaGFuZGxlU29ydENoYW5nZShjb2x1bW4uZGF0YUZpZWxkLCBzb3J0T3JkZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICBzb3J0T3JkZXIsXG4gICAgICAgIHNvcnRDb2x1bW46IGNvbHVtblxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGxldCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IHNvcnQgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IHNvcnRPcmRlciwgc29ydENvbHVtbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGlmICghaXNSZW1vdGVTb3J0KCkgJiYgc29ydENvbHVtbikge1xuICAgICAgICBjb25zdCBzb3J0RnVuYyA9IHNvcnRDb2x1bW4uc29ydEZ1bmMgPyBzb3J0Q29sdW1uLnNvcnRGdW5jIDogKHNvcnQgJiYgc29ydC5zb3J0RnVuYyk7XG4gICAgICAgIGRhdGEgPSBkYXRhT3BlcmF0b3Iuc29ydChkYXRhLCBzb3J0T3JkZXIsIHsgLi4uc29ydENvbHVtbiwgc29ydEZ1bmMgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTb3J0Q29udGV4dC5Qcm92aWRlclxuICAgICAgICAgIHZhbHVlPXsge1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHNvcnRPcmRlcixcbiAgICAgICAgICAgIG9uU29ydDogdGhpcy5oYW5kbGVTb3J0LFxuICAgICAgICAgICAgc29ydEZpZWxkOiBzb3J0Q29sdW1uID8gc29ydENvbHVtbi5kYXRhRmllbGQgOiBudWxsXG4gICAgICAgICAgfSB9XG4gICAgICAgID5cbiAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L1NvcnRDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBQcm92aWRlcjogU29ydFByb3ZpZGVyLFxuICAgIENvbnN1bWVyOiBTb3J0Q29udGV4dC5Db25zdW1lclxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL3NvcnQtY29udGV4dC5qcyIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRzJztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBSZW1vdGVSZXNvbHZlciBleHRlbmRzIEV4dGVuZEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnJlbW90ZUVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICB0aGlzLnJlbW90ZUVtaXR0ZXIub24oJ3BhZ2luYXRpb25DaGFuZ2UnLCB0aGlzLmhhbmRsZVJlbW90ZVBhZ2VDaGFuZ2UpO1xuICAgICAgdGhpcy5yZW1vdGVFbWl0dGVyLm9uKCdpc1JlbW90ZVBhZ2luYXRpb24nLCB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbik7XG4gICAgfVxuXG4gICAgZ2V0TmV3ZXN0U3RhdGUgPSAoc3RhdGUgPSB7fSkgPT4ge1xuICAgICAgbGV0IHNvcnRPcmRlcjtcbiAgICAgIGxldCBzb3J0RmllbGQ7XG4gICAgICBsZXQgcGFnZTtcbiAgICAgIGxldCBzaXplUGVyUGFnZTtcbiAgICAgIGxldCBzZWFyY2hUZXh0O1xuICAgICAgbGV0IGZpbHRlcnMgPSB7fTtcblxuICAgICAgaWYgKHRoaXMuc29ydENvbnRleHQpIHtcbiAgICAgICAgc29ydE9yZGVyID0gdGhpcy5zb3J0Q29udGV4dC5zdGF0ZS5zb3J0T3JkZXI7XG4gICAgICAgIHNvcnRGaWVsZCA9IHRoaXMuc29ydENvbnRleHQuc3RhdGUuc29ydENvbHVtbiA/XG4gICAgICAgICAgdGhpcy5zb3J0Q29udGV4dC5zdGF0ZS5zb3J0Q29sdW1uLmRhdGFGaWVsZCA6XG4gICAgICAgICAgbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZmlsdGVyQ29udGV4dCkge1xuICAgICAgICBmaWx0ZXJzID0gdGhpcy5maWx0ZXJDb250ZXh0LmN1cnJGaWx0ZXJzO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wYWdpbmF0aW9uQ29udGV4dCkge1xuICAgICAgICBwYWdlID0gdGhpcy5wYWdpbmF0aW9uQ29udGV4dC5jdXJyUGFnZTtcbiAgICAgICAgc2l6ZVBlclBhZ2UgPSB0aGlzLnBhZ2luYXRpb25Db250ZXh0LmN1cnJTaXplUGVyUGFnZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2VhcmNoQ29udGV4dCkge1xuICAgICAgICBzZWFyY2hUZXh0ID0gdGhpcy5wcm9wcy5zZWFyY2guc2VhcmNoVGV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc29ydE9yZGVyLFxuICAgICAgICBzb3J0RmllbGQsXG4gICAgICAgIGZpbHRlcnMsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIHNpemVQZXJQYWdlLFxuICAgICAgICBzZWFyY2hUZXh0LFxuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5kYXRhXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlzUmVtb3RlU2VhcmNoID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyByZW1vdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gcmVtb3RlID09PSB0cnVlIHx8IChfLmlzT2JqZWN0KHJlbW90ZSkgJiYgcmVtb3RlLnNlYXJjaCkgfHwgdGhpcy5pc1JlbW90ZVBhZ2luYXRpb24oKTtcbiAgICB9XG5cbiAgICBpc1JlbW90ZVBhZ2luYXRpb24gPSAoZSA9IHt9KSA9PiB7XG4gICAgICBjb25zdCB7IHJlbW90ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGUucmVzdWx0ID0gKHJlbW90ZSA9PT0gdHJ1ZSB8fCAoXy5pc09iamVjdChyZW1vdGUpICYmIHJlbW90ZS5wYWdpbmF0aW9uKSk7XG4gICAgICByZXR1cm4gZS5yZXN1bHQ7XG4gICAgfVxuXG4gICAgaXNSZW1vdGVGaWx0ZXJpbmcgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHJlbW90ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiByZW1vdGUgPT09IHRydWUgfHwgKF8uaXNPYmplY3QocmVtb3RlKSAmJiByZW1vdGUuZmlsdGVyKSB8fCB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbigpO1xuICAgIH1cblxuICAgIGlzUmVtb3RlU29ydCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgcmVtb3RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIHJlbW90ZSA9PT0gdHJ1ZSB8fCAoXy5pc09iamVjdChyZW1vdGUpICYmIHJlbW90ZS5zb3J0KSB8fCB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbigpO1xuICAgIH1cblxuICAgIGlzUmVtb3RlQ2VsbEVkaXQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHJlbW90ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiByZW1vdGUgPT09IHRydWUgfHwgKF8uaXNPYmplY3QocmVtb3RlKSAmJiByZW1vdGUuY2VsbEVkaXQpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlbW90ZVBhZ2VDaGFuZ2UgPSAocGFnZSwgc2l6ZVBlclBhZ2UpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25UYWJsZUNoYW5nZSgncGFnaW5hdGlvbicsIHRoaXMuZ2V0TmV3ZXN0U3RhdGUoeyBwYWdlLCBzaXplUGVyUGFnZSB9KSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVtb3RlRmlsdGVyQ2hhbmdlID0gKGZpbHRlcnMpID0+IHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0geyBmaWx0ZXJzIH07XG4gICAgICBpZiAodGhpcy5pc1JlbW90ZVBhZ2luYXRpb24oKSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5wcm9wcy5wYWdpbmF0aW9uLm9wdGlvbnMgfHwge307XG4gICAgICAgIG5ld1N0YXRlLnBhZ2UgPSBfLmlzRGVmaW5lZChvcHRpb25zLnBhZ2VTdGFydEluZGV4KSA/IG9wdGlvbnMucGFnZVN0YXJ0SW5kZXggOiAxO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5vblRhYmxlQ2hhbmdlKCdmaWx0ZXInLCB0aGlzLmdldE5ld2VzdFN0YXRlKG5ld1N0YXRlKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVtb3RlU29ydENoYW5nZSA9IChzb3J0RmllbGQsIHNvcnRPcmRlcikgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vblRhYmxlQ2hhbmdlKCdzb3J0JywgdGhpcy5nZXROZXdlc3RTdGF0ZSh7IHNvcnRGaWVsZCwgc29ydE9yZGVyIH0pKTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZW1vdGVDZWxsQ2hhbmdlID0gKHJvd0lkLCBkYXRhRmllbGQsIG5ld1ZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBjZWxsRWRpdCA9IHsgcm93SWQsIGRhdGFGaWVsZCwgbmV3VmFsdWUgfTtcbiAgICAgIHRoaXMucHJvcHMub25UYWJsZUNoYW5nZSgnY2VsbEVkaXQnLCB0aGlzLmdldE5ld2VzdFN0YXRlKHsgY2VsbEVkaXQgfSkpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlbW90ZVNlYXJjaENoYW5nZSA9IChzZWFyY2hUZXh0KSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uVGFibGVDaGFuZ2UoJ3NlYXJjaCcsIHRoaXMuZ2V0TmV3ZXN0U3RhdGUoeyBzZWFyY2hUZXh0IH0pKTtcbiAgICB9XG4gIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9wcm9wcy1yZXNvbHZlci9yZW1vdGUtcmVzb2x2ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=react-bootstrap-table-next.js.map