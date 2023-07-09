'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

var _dataContext = require('./data-context');

var _dataContext2 = _interopRequireDefault(_dataContext);

var _sortContext = require('./sort-context');

var _sortContext2 = _interopRequireDefault(_sortContext);

var _selectionContext = require('./selection-context');

var _selectionContext2 = _interopRequireDefault(_selectionContext);

var _rowExpandContext = require('./row-expand-context');

var _rowExpandContext2 = _interopRequireDefault(_rowExpandContext);

var _remoteResolver2 = require('../props-resolver/remote-resolver');

var _remoteResolver3 = _interopRequireDefault(_remoteResolver2);

var _bootstrap = require('./bootstrap');

var _operators = require('../store/operators');

var _operators2 = _interopRequireDefault(_operators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-return-assign: 0 */
/* eslint class-methods-use-this: 0 */


var withContext = function withContext(Base) {
  return function (_remoteResolver) {
    _inherits(BootstrapTableContainer, _remoteResolver);

    function BootstrapTableContainer(props) {
      _classCallCheck(this, BootstrapTableContainer);

      var _this = _possibleConstructorReturn(this, (BootstrapTableContainer.__proto__ || Object.getPrototypeOf(BootstrapTableContainer)).call(this, props));

      _this.DataContext = (0, _dataContext2.default)();

      if (props.columns.filter(function (col) {
        return col.sort;
      }).length > 0) {
        _this.SortContext = (0, _sortContext2.default)(_operators2.default, _this.isRemoteSort, _this.handleRemoteSortChange);
      }

      if (props.selectRow) {
        _this.SelectionContext = (0, _selectionContext2.default)(_operators2.default);
      }

      if (props.expandRow) {
        _this.RowExpandContext = (0, _rowExpandContext2.default)(_operators2.default);
      }

      if (props.cellEdit && props.cellEdit.createContext) {
        _this.CellEditContext = props.cellEdit.createContext(_utils2.default, _operators2.default, _this.isRemoteCellEdit, _this.handleRemoteCellChange);
      }

      if (props.filter) {
        _this.FilterContext = props.filter.createContext(_utils2.default, _this.isRemoteFiltering, _this.handleRemoteFilterChange);
      }

      if (props.pagination) {
        _this.PaginationContext = props.pagination.createContext(_this.isRemotePagination, _this.handleRemotePageChange);
      }

      if (props.search && props.search.searchContext) {
        _this.SearchContext = props.search.searchContext(_utils2.default, _this.isRemoteSearch, _this.handleRemoteSearchChange);
      }

      if (props.setDependencyModules) {
        props.setDependencyModules(_utils2.default);
      }
      return _this;
    }

    _createClass(BootstrapTableContainer, [{
      key: 'renderBase',
      value: function renderBase() {
        var _this2 = this;

        return function (rootProps, cellEditProps, filterProps, searchProps, sortProps, paginationProps, expandProps, selectionProps) {
          return _react2.default.createElement(Base, _extends({}, _this2.props, selectionProps, sortProps, cellEditProps, filterProps, searchProps, paginationProps, expandProps, {
            data: rootProps.getData(filterProps, searchProps, sortProps, paginationProps)
          }));
        };
      }
    }, {
      key: 'renderWithSelectionCtx',
      value: function renderWithSelectionCtx(base, baseProps) {
        var _this3 = this;

        return function (rootProps, cellEditProps, filterProps, searchProps, sortProps, paginationProps, expandProps) {
          return _react2.default.createElement(
            _this3.SelectionContext.Provider,
            _extends({}, baseProps, {
              selectRow: _this3.props.selectRow,
              data: rootProps.getData(filterProps, searchProps, sortProps, paginationProps)
            }),
            _react2.default.createElement(
              _this3.SelectionContext.Consumer,
              null,
              function (selectionProps) {
                return base(rootProps, cellEditProps, filterProps, searchProps, sortProps, paginationProps, expandProps, selectionProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithRowExpandCtx',
      value: function renderWithRowExpandCtx(base, baseProps) {
        var _this4 = this;

        return function (rootProps, cellEditProps, filterProps, searchProps, sortProps, paginationProps) {
          return _react2.default.createElement(
            _this4.RowExpandContext.Provider,
            _extends({}, baseProps, {
              expandRow: _this4.props.expandRow,
              data: rootProps.getData(filterProps, searchProps, sortProps, paginationProps)
            }),
            _react2.default.createElement(
              _this4.RowExpandContext.Consumer,
              null,
              function (expandProps) {
                return base(rootProps, cellEditProps, filterProps, searchProps, sortProps, paginationProps, expandProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithPaginationCtx',
      value: function renderWithPaginationCtx(base) {
        var _this5 = this;

        return function (rootProps, cellEditProps, filterProps, searchProps, sortProps) {
          return _react2.default.createElement(
            _this5.PaginationContext.Provider,
            {
              ref: function ref(n) {
                return _this5.paginationContext = n;
              },
              pagination: _this5.props.pagination,
              data: rootProps.getData(filterProps, searchProps, sortProps),
              bootstrap4: _this5.props.bootstrap4
            },
            _react2.default.createElement(
              _this5.PaginationContext.Consumer,
              null,
              function (paginationProps) {
                return base(rootProps, cellEditProps, filterProps, searchProps, sortProps, paginationProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithSortCtx',
      value: function renderWithSortCtx(base, baseProps) {
        var _this6 = this;

        return function (rootProps, cellEditProps, filterProps, searchProps) {
          return _react2.default.createElement(
            _this6.SortContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this6.sortContext = n;
              },
              defaultSorted: _this6.props.defaultSorted,
              defaultSortDirection: _this6.props.defaultSortDirection,
              data: rootProps.getData(filterProps, searchProps)
            }),
            _react2.default.createElement(
              _this6.SortContext.Consumer,
              null,
              function (sortProps) {
                return base(rootProps, cellEditProps, filterProps, searchProps, sortProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithSearchCtx',
      value: function renderWithSearchCtx(base, baseProps) {
        var _this7 = this;

        return function (rootProps, cellEditProps, filterProps) {
          return _react2.default.createElement(
            _this7.SearchContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this7.searchContext = n;
              },
              data: rootProps.getData(filterProps),
              searchText: _this7.props.search.searchText
            }),
            _react2.default.createElement(
              _this7.SearchContext.Consumer,
              null,
              function (searchProps) {
                return base(rootProps, cellEditProps, filterProps, searchProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithFilterCtx',
      value: function renderWithFilterCtx(base, baseProps) {
        var _this8 = this;

        return function (rootProps, cellEditProps) {
          return _react2.default.createElement(
            _this8.FilterContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this8.filterContext = n;
              },
              data: rootProps.getData()
            }),
            _react2.default.createElement(
              _this8.FilterContext.Consumer,
              null,
              function (filterProps) {
                return base(rootProps, cellEditProps, filterProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithCellEditCtx',
      value: function renderWithCellEditCtx(base, baseProps) {
        var _this9 = this;

        return function (rootProps) {
          return _react2.default.createElement(
            _this9.CellEditContext.Provider,
            _extends({}, baseProps, {
              selectRow: _this9.props.selectRow,
              cellEdit: _this9.props.cellEdit,
              data: rootProps.getData()
            }),
            _react2.default.createElement(
              _this9.CellEditContext.Consumer,
              null,
              function (cellEditProps) {
                return base(rootProps, cellEditProps);
              }
            )
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