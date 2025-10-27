/**
 * @license Highcharts Grid v@product.version@ (@product.date@)
 * @module grid/grid-lite
 *
 * (c) 2009-2025 Highsoft AS
 *
 * License: www.highcharts.com/license
 */
import type _Options from '../Grid/Core/Options.ts';
import AST from '../Core/Renderer/HTML/AST.js';
import Templating from '../Core/Templating.js';
import ColumnResizing from '../Grid/Core/Table/ColumnResizing/ColumnResizing.js';
import DataConnector from '../Data/Connectors/DataConnector.js';
import DataConverter from '../Data/Converters/DataConverter.js';
import DataCursor from '../Data/DataCursor.js';
import _Grid from '../Grid/Core/Grid.js';
import DataModifier from '../Data/Modifiers/DataModifier.js';
import DataPool from '../Data/DataPool.js';
import DataTable from '../Data/DataTable.js';
import Defaults from '../Grid/Core/Defaults.js';
import Globals from '../Grid/Core/Globals.js';
import whcm from '../Accessibility/HighContrastMode.js';
import Table from '../Grid/Core/Table/Table.js';
import Utilities from '../Core/Utilities.js';
import SvgIcons from '../Grid/Core/UI/SvgIcons.js';
import Pagination from '../Grid/Core/Pagination/Pagination.js';
import '../Data/Connectors/CSVConnector.js';
import '../Data/Connectors/GoogleSheetsConnector.js';
import '../Data/Connectors/HTMLTableConnector.js';
import '../Data/Connectors/JSONConnector.js';
import '../Data/Modifiers/ChainModifier.js';
import '../Data/Modifiers/InvertModifier.js';
import '../Data/Modifiers/RangeModifier.js';
import '../Data/Modifiers/SortModifier.js';
import '../Data/Modifiers/FilterModifier.js';
declare global {
    interface GridNamespace {
        win: typeof Globals.win;
        product: 'Grid Lite' | 'Grid Pro';
        AST: typeof AST;
        Grid: typeof _Grid;
        grid: typeof _Grid.grid;
        grids: Array<(_Grid | undefined)>;
        ColumnResizing: typeof ColumnResizing;
        DataConverter: typeof DataConverter;
        DataCursor: typeof DataCursor;
        DataModifier: typeof DataModifier;
        DataConnector: typeof DataConnector;
        DataPool: typeof DataPool;
        DataTable: typeof DataTable;
        Table: typeof Table;
        Pagination: typeof Pagination;
        isHighContrastModeActive: typeof whcm.isHighContrastModeActive;
        defaultOptions: typeof Defaults.defaultOptions;
        setOptions: typeof Defaults.setOptions;
        Templating: typeof Templating;
        merge: typeof Utilities.merge;
        SvgIcons: typeof SvgIcons;
    }
    interface Window {
        Grid: GridNamespace;
    }
}
declare const G: GridNamespace;
declare namespace G {
    type Options = _Options;
}
export default G;
