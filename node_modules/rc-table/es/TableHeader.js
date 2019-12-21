import * as React from 'react';
import * as PropTypes from 'prop-types';
import TableHeaderRow from './TableHeaderRow';

function getHeaderRows(_ref) {
  var _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? [] : _ref$columns,
      _ref$currentRow = _ref.currentRow,
      currentRow = _ref$currentRow === void 0 ? 0 : _ref$currentRow,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? [] : _ref$rows,
      _ref$isLast = _ref.isLast,
      isLast = _ref$isLast === void 0 ? true : _ref$isLast;
  // eslint-disable-next-line no-param-reassign
  rows[currentRow] = rows[currentRow] || [];
  columns.forEach(function (column, i) {
    if (column.rowSpan && rows.length < column.rowSpan) {
      while (rows.length < column.rowSpan) {
        rows.push([]);
      }
    }

    var cellIsLast = isLast && i === columns.length - 1;
    var cell = {
      key: column.key,
      className: column.className || '',
      children: column.title,
      isLast: cellIsLast,
      column: column
    };

    if (column.children) {
      getHeaderRows({
        columns: column.children,
        currentRow: currentRow + 1,
        rows: rows,
        isLast: cellIsLast
      });
    }

    if ('colSpan' in column) {
      cell.colSpan = column.colSpan;
    }

    if ('rowSpan' in column) {
      cell.rowSpan = column.rowSpan;
    }

    if (cell.colSpan !== 0) {
      rows[currentRow].push(cell);
    }
  });
  return rows.filter(function (row) {
    return row.length > 0;
  });
}

var TableHeader = function TableHeader(props, _ref2) {
  var table = _ref2.table;
  var components = table.components;
  var _table$props = table.props,
      prefixCls = _table$props.prefixCls,
      showHeader = _table$props.showHeader,
      onHeaderRow = _table$props.onHeaderRow;
  var expander = props.expander,
      columns = props.columns,
      fixed = props.fixed;

  if (!showHeader) {
    return null;
  }

  var rows = getHeaderRows({
    columns: columns
  });
  expander.renderExpandIndentCell(rows, fixed);
  var HeaderWrapper = components.header.wrapper;
  return React.createElement(HeaderWrapper, {
    className: "".concat(prefixCls, "-thead")
  }, rows.map(function (row, index) {
    return React.createElement(TableHeaderRow, {
      prefixCls: prefixCls,
      key: index,
      index: index,
      fixed: fixed,
      columns: columns,
      rows: rows,
      row: row,
      components: components,
      onHeaderRow: onHeaderRow
    });
  }));
};

TableHeader.contextTypes = {
  table: PropTypes.any
};
export default TableHeader;