'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = require('./const');

var _const2 = _interopRequireDefault(_const);

var _headerCell = require('./header-cell');

var _headerCell2 = _interopRequireDefault(_headerCell);

var _selectionHeaderCell = require('./row-selection/selection-header-cell');

var _selectionHeaderCell2 = _interopRequireDefault(_selectionHeaderCell);

var _expandHeaderCell = require('./row-expand/expand-header-cell');

var _expandHeaderCell2 = _interopRequireDefault(_expandHeaderCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/require-default-props: 0 */
var Header = function Header(props) {
  var ROW_SELECT_DISABLED = _const2.default.ROW_SELECT_DISABLED;
  var className = props.className,
      columns = props.columns,
      onSort = props.onSort,
      onFilter = props.onFilter,
      sortField = props.sortField,
      sortOrder = props.sortOrder,
      selectRow = props.selectRow,
      onExternalFilter = props.onExternalFilter,
      expandRow = props.expandRow,
      bootstrap4 = props.bootstrap4;


  return _react2.default.createElement(
    'thead',
    null,
    _react2.default.createElement(
      'tr',
      { className: className },
      expandRow && expandRow.showExpandColumn ? _react2.default.createElement(_expandHeaderCell2.default, {
        onAllRowExpand: expandRow.onAllRowExpand,
        anyExpands: expandRow.isAnyExpands,
        renderer: expandRow.expandHeaderColumnRenderer
      }) : null,
      selectRow.mode !== ROW_SELECT_DISABLED && !selectRow.hideSelectColumn ? _react2.default.createElement(_selectionHeaderCell2.default, selectRow) : null,
      columns.map(function (column, i) {
        if (!column.hidden) {
          var currSort = column.dataField === sortField;
          var isLastSorting = column.dataField === sortField;

          return _react2.default.createElement(_headerCell2.default, {
            index: i,
            bootstrap4: bootstrap4,
            key: column.dataField,
            column: column,
            onSort: onSort,
            sorting: currSort,
            onFilter: onFilter,
            onExternalFilter: onExternalFilter,
            sortOrder: sortOrder,
            isLastSorting: isLastSorting
          });
        }
        return false;
      })
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
  onExternalFilter: _propTypes2.default.func,
  className: _propTypes2.default.string,
  expandRow: _propTypes2.default.object,
  bootstrap4: _propTypes2.default.bool
};

exports.default = Header;