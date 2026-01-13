/**
 * @license Highcharts Grid v2.2.0 (2026-01-13)
 * @module grid/grid-lite
 *
 * (c) 2009-2026 Highsoft AS
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
import type _Options from './es-modules/Grid/Core/Options.ts';
import AST from './es-modules/Core/Renderer/HTML/AST.js';
import Templating from './es-modules/Core/Templating.js';
import ColumnResizing from './es-modules/Grid/Core/Table/ColumnResizing/ColumnResizing.js';
import DataConnector from './es-modules/Data/Connectors/DataConnector.js';
import DataConverter from './es-modules/Data/Converters/DataConverter.js';
import DataCursor from './es-modules/Data/DataCursor.js';
import _Grid from './es-modules/Grid/Core/Grid.js';
import DataModifier from './es-modules/Data/Modifiers/DataModifier.js';
import DataPool from './es-modules/Data/DataPool.js';
import DataTable from './es-modules/Data/DataTable.js';
import Table from './es-modules/Grid/Core/Table/Table.js';
import SvgIcons from './es-modules/Grid/Core/UI/SvgIcons.js';
import Pagination from './es-modules/Grid/Core/Pagination/Pagination.js';
import './es-modules/Data/Connectors/CSVConnector.js';
import './es-modules/Data/Connectors/GoogleSheetsConnector.js';
import './es-modules/Data/Connectors/HTMLTableConnector.js';
import './es-modules/Data/Connectors/JSONConnector.js';
import './es-modules/Data/Modifiers/ChainModifier.js';
import './es-modules/Data/Modifiers/InvertModifier.js';
import './es-modules/Data/Modifiers/RangeModifier.js';
import './es-modules/Data/Modifiers/SortModifier.js';
import './es-modules/Data/Modifiers/FilterModifier.js';
declare const G: {
    AST: typeof AST;
    ColumnResizing: {
        readonly initMode: typeof import("./es-modules/Grid/Core/Table/ColumnResizing/ColumnResizing.js").initMode;
        readonly types: {
            adjacent: typeof import("./es-modules/Grid/Core/Table/ColumnResizing/AdjacentResizingMode.js").default;
            distributed: typeof import("./es-modules/Grid/Core/Table/ColumnResizing/DistributedResizingMode.js").default;
            independent: typeof import("./es-modules/Grid/Core/Table/ColumnResizing/IndependentResizingMode.js").default;
        };
        readonly AbstractStrategy: typeof import("./es-modules/Grid/Core/Table/ColumnResizing/ResizingMode.js").default;
    };
    DataConnector: typeof DataConnector;
    DataConverter: typeof DataConverter;
    DataCursor: typeof DataCursor;
    DataModifier: typeof DataModifier;
    DataPool: typeof DataPool;
    DataTable: typeof DataTable;
    defaultOptions: import("./es-modules/Shared/Types.js").DeepPartial<_Options>;
    Grid: typeof _Grid;
    grid: typeof _Grid.grid;
    grids: (_Grid | undefined)[];
    isHighContrastModeActive: () => boolean;
    merge: {
        <T = object>(extend: true, a?: T, ...n: Array<import("./es-modules/Shared/Types.js").DeepPartial<T> | undefined>): (T);
        <T1 extends object = object, T2 = unknown, T3 = unknown, T4 = unknown, T5 = unknown, T6 = unknown, T7 = unknown, T8 = unknown, T9 = unknown>(a?: T1, b?: T2, c?: T3, d?: T4, e?: T5, f?: T6, g?: T7, h?: T8, i?: T9): (T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9);
    };
    Pagination: typeof Pagination;
    product: string;
    setOptions: typeof import("./es-modules/Grid/Core/Defaults.js").setOptions;
    SvgIcons: {
        readonly createGridIcon: typeof import("./es-modules/Grid/Core/UI/SvgIcons.js").createGridIcon;
        readonly icons: Record<import("./es-modules/Grid/Core/UI/SvgIcons.js").GridIconName, import("./es-modules/Grid/Core/UI/SvgIcons.js").SVGDefinition>;
        readonly pathDefaults: Partial<import("./es-modules/Grid/Core/UI/SvgIcons.js").PathDefinition>;
    };
    Table: typeof Table;
    Templating: {
        dateFormat: (format: string, timestamp: number, upperCaseFirst?: boolean) => string;
        format: (str: string | undefined, ctx: any, owner?: Templating.Owner) => string;
        helpers: Record<string, Function>;
        numberFormat: (this: Templating.Owner | void, number: number, decimals: number, decimalPoint?: string, thousandsSep?: string) => string;
    };
    version: "2.2.0";
    win: Window & typeof globalThis;
};
export { AST, ColumnResizing, DataConnector, DataConverter, DataCursor, DataModifier, DataPool, DataTable, _Grid as Grid, _Options as Options, Pagination, SvgIcons, Table, Templating };
export declare const defaultOptions: import("./es-modules/Shared/Types.js").DeepPartial<_Options>, grid: typeof _Grid.grid, grids: (_Grid | undefined)[], isHighContrastModeActive: () => boolean, merge: {
    <T = object>(extend: true, a?: T, ...n: Array<import("./es-modules/Shared/Types.js").DeepPartial<T> | undefined>): (T);
    <T1 extends object = object, T2 = unknown, T3 = unknown, T4 = unknown, T5 = unknown, T6 = unknown, T7 = unknown, T8 = unknown, T9 = unknown>(a?: T1, b?: T2, c?: T3, d?: T4, e?: T5, f?: T6, g?: T7, h?: T8, i?: T9): (T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9);
}, product: string, setOptions: typeof import("./es-modules/Grid/Core/Defaults.js").setOptions, version: "2.2.0", win: Window & typeof globalThis;
declare namespace G {
    type Options = _Options;
}
export default G;
