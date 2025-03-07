/* *
 *
 *  Grid HeaderCell class
 *
 *  (c) 2020-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Dawid Dragula
 *  - Sebastian Bochan
 *
 * */
'use strict';
import Cell from '../Cell.js';
import GridUtils from '../../GridUtils.js';
import ColumnSorting from '../Actions/ColumnSorting.js';
import Globals from '../../Globals.js';
import Utilities from '../../../../Core/Utilities.js';
const { makeHTMLElement, setHTMLContent } = GridUtils;
const { fireEvent, merge, isString } = Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Represents a cell in the data grid header.
 */
class HeaderCell extends Cell {
    /* *
    *
    *  Constructor
    *
    * */
    /**
     * Constructs a cell in the data grid header.
     *
     * @param row
     * The row of the cell.
     *
     * @param column
     * The column of the cell.
     *
     * @param columnsTree
     * If the cell is a wider than one column, this property contains the
     * structure of the columns that are subordinated to the header cell.
     */
    constructor(row, column, columnsTree) {
        super(row, column);
        /**
         * Reference to options in settings header.
         */
        this.options = {};
        /**
         * List of columns that are subordinated to the header cell.
         */
        this.columns = [];
        /**
         * Content value of the header cell.
         */
        this.value = '';
        if (column) {
            column.header = this;
            this.columns.push(column);
        }
        else if (columnsTree) {
            const vp = this.row.viewport;
            const columnIds = vp.grid.getColumnIds(columnsTree, true);
            for (const columnId of columnIds) {
                const column = vp.getColumn(columnId);
                if (column) {
                    this.columns.push(column);
                }
            }
        }
    }
    /* *
    *
    *  Methods
    *
    * */
    /**
     * Init element.
     */
    init() {
        const elem = document.createElement('th', {});
        elem.classList.add(Globals.getClassName('headerCell'));
        return elem;
    }
    /**
     * Render the cell container.
     */
    render() {
        const { column } = this;
        const options = merge(column?.options || {}, this.options);
        const headerCellOptions = options.header || {};
        const isSortableData = options.sorting?.sortable && column?.data;
        if (headerCellOptions.formatter) {
            this.value = headerCellOptions.formatter.call(this).toString();
        }
        else if (isString(headerCellOptions.format)) {
            this.value = column ?
                column.format(headerCellOptions.format) :
                headerCellOptions.format;
        }
        else {
            this.value = column?.id || '';
        }
        // Render content of th element
        this.row.htmlElement.appendChild(this.htmlElement);
        this.headerContent = makeHTMLElement('span', {
            className: Globals.getClassName('headerCellContent')
        }, this.htmlElement);
        // Render the header cell element content.
        setHTMLContent(this.headerContent, this.value);
        this.htmlElement.setAttribute('scope', 'col');
        if (this.options.className) {
            this.htmlElement.classList.add(...this.options.className.split(/\s+/g));
        }
        if (column) {
            this.htmlElement.setAttribute('data-column-id', column.id);
            if (isSortableData) {
                column.viewport.grid.accessibility?.addSortableColumnHint(this.headerContent);
            }
            // Add user column classname
            if (column.options.className) {
                this.htmlElement.classList.add(...column.options.className.split(/\s+/g));
            }
            // Add resizing
            column.viewport.columnsResizer?.renderColumnDragHandles(column, this);
            // Add sorting
            this.initColumnSorting();
        }
        this.setCustomClassName(options.header?.className);
    }
    reflow() {
        const th = this.htmlElement;
        if (!th) {
            return;
        }
        let width = 0;
        for (const column of this.columns) {
            width += column.getWidth() || 0;
        }
        // Set the width of the column. Max width is needed for the
        // overflow: hidden to work.
        th.style.width = th.style.maxWidth = width + 'px';
    }
    onKeyDown(e) {
        if (!this.column || e.target !== this.htmlElement) {
            return;
        }
        if (e.key === 'Enter') {
            if (this.column.options.sorting?.sortable) {
                this.column.sorting?.toggle();
            }
            return;
        }
        super.onKeyDown(e);
    }
    onClick(e) {
        const column = this.column;
        if (!column || (e.target !== this.htmlElement &&
            e.target !== column.header?.headerContent)) {
            return;
        }
        if (column.options.sorting?.sortable) {
            column.sorting?.toggle();
        }
        fireEvent(this, 'click', {
            originalEvent: e,
            target: this.column
        });
    }
    /**
     * Add sorting option to the column.
     */
    initColumnSorting() {
        const { column } = this;
        if (!column) {
            return;
        }
        column.sorting = new ColumnSorting(column, this.htmlElement);
    }
    /**
     * Check if the cell is part of the last cell in the header.
     */
    isLastColumn() {
        const vp = this.row.viewport;
        const lastViewportColumn = vp.columns[vp.columns.length - 1];
        const lastCellColumn = this.columns?.[this.columns.length - 1];
        return lastViewportColumn === lastCellColumn;
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default HeaderCell;
