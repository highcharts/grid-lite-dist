/**
 * @license Highcharts Grid v2.1.0 (2025-12-09)
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
import Table from '../Grid/Core/Table/Table.js';
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
declare const G: {
    AST: typeof AST;
    ColumnResizing: {
        readonly initMode: typeof import("../Grid/Core/Table/ColumnResizing/ColumnResizing.js").initMode;
        readonly types: {
            adjacent: typeof import("../Grid/Core/Table/ColumnResizing/AdjacentResizingMode.js").default;
            distributed: typeof import("../Grid/Core/Table/ColumnResizing/DistributedResizingMode.js").default;
            independent: typeof import("../Grid/Core/Table/ColumnResizing/IndependentResizingMode.js").default;
        };
        readonly AbstractStrategy: typeof import("../Grid/Core/Table/ColumnResizing/ResizingMode.js").default;
    };
    DataConnector: typeof DataConnector;
    DataConverter: typeof DataConverter;
    DataCursor: typeof DataCursor;
    DataModifier: typeof DataModifier;
    DataPool: typeof DataPool;
    DataTable: typeof DataTable;
    defaultOptions: import("../Shared/Types.js").DeepPartial<_Options>;
    Grid: typeof _Grid;
    grid: typeof _Grid.grid;
    grids: (_Grid | undefined)[];
    isHighContrastModeActive: () => boolean;
    merge: {
        <T = object>(extend: true, a?: T, ...n: Array<import("../Shared/Types.js").DeepPartial<T> | undefined>): (T);
        <T1 extends object = object, T2 = unknown, T3 = unknown, T4 = unknown, T5 = unknown, T6 = unknown, T7 = unknown, T8 = unknown, T9 = unknown>(a?: T1, b?: T2, c?: T3, d?: T4, e?: T5, f?: T6, g?: T7, h?: T8, i?: T9): (T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9);
    };
    Pagination: typeof Pagination;
    product: string;
    setOptions: typeof import("../Grid/Core/Defaults.js").setOptions;
    SvgIcons: {
        readonly createGridIcon: typeof import("../Grid/Core/UI/SvgIcons.js").createGridIcon;
        readonly icons: Record<import("../Grid/Core/UI/SvgIcons.js").GridIconName, import("../Grid/Core/UI/SvgIcons.js").SVGDefinition>;
        readonly pathDefaults: Partial<import("../Grid/Core/UI/SvgIcons.js").PathDefinition>;
    };
    Table: typeof Table;
    Templating: {
        dateFormat: (format: string, timestamp: number, upperCaseFirst?: boolean) => string;
        format: (str: string | undefined, ctx: any, owner?: Templating.Owner) => string;
        helpers: Record<string, Function>;
        numberFormat: (this: Templating.Owner | void, number: number, decimals: number, decimalPoint?: string, thousandsSep?: string) => string;
    };
    version: "2.1.0";
    win: Window & typeof globalThis;
};
export { AST, ColumnResizing, DataConnector, DataConverter, DataCursor, DataModifier, DataPool, DataTable, Pagination, SvgIcons, Table, Templating };
export declare const defaultOptions: import("../Shared/Types.js").DeepPartial<_Options>, Grid: typeof _Grid, grid: typeof _Grid.grid, grids: (_Grid | undefined)[], isHighContrastModeActive: () => boolean, merge: {
    <T = object>(extend: true, a?: T, ...n: Array<import("../Shared/Types.js").DeepPartial<T> | undefined>): (T);
    <T1 extends object = object, T2 = unknown, T3 = unknown, T4 = unknown, T5 = unknown, T6 = unknown, T7 = unknown, T8 = unknown, T9 = unknown>(a?: T1, b?: T2, c?: T3, d?: T4, e?: T5, f?: T6, g?: T7, h?: T8, i?: T9): (T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9);
}, product: string, setOptions: typeof import("../Grid/Core/Defaults.js").setOptions, version: "2.1.0", win: Window & typeof globalThis;
declare namespace G {
    type Options = _Options;
}
export default G;
