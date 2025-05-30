import type DataEvent from '../DataEvent';
import type { JSONBeforeParseCallbackFunction, ColumnNamesOptions } from '../Connectors/JSONConnectorOptions';
import DataConverter from './DataConverter.js';
import DataTable from '../DataTable.js';
/**
 * Handles parsing and transforming JSON to a table.
 *
 * @private
 */
declare class JSONConverter extends DataConverter {
    /**
     * Default options
     */
    protected static readonly defaultOptions: JSONConverter.Options;
    /**
     * Constructs an instance of the JSON parser.
     *
     * @param {JSONConverter.UserOptions} [options]
     * Options for the JSON parser.
     */
    constructor(options?: JSONConverter.UserOptions);
    private columns;
    private headers;
    /**
     * Options for the DataConverter.
     */
    readonly options: JSONConverter.Options;
    private table;
    /**
     * Initiates parsing of JSON structure.
     *
     * @param {JSONConverter.UserOptions}[options]
     * Options for the parser
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits JSONConverter#parse
     * @emits JSONConverter#afterParse
     */
    parse(options: JSONConverter.UserOptions, eventDetail?: DataEvent.Detail): void;
    /**
     * Handles converting the parsed data to a table.
     *
     * @return {DataTable}
     * Table from the parsed CSV.
     */
    getTable(): DataTable;
}
declare namespace JSONConverter {
    /**
     * Options for the JSON parser that are compatible with ClassJSON
     */
    interface Options extends DataConverter.Options {
        columnNames?: Array<string> | ColumnNamesOptions;
        data: Data;
        orientation: 'columns' | 'rows';
    }
    type Data = Array<Array<number | string> | Record<string, number | string>>;
    /**
     * Options that are not compatible with ClassJSON
     */
    interface SpecialOptions {
        beforeParse?: JSONBeforeParseCallbackFunction;
    }
    /**
     * Available options of the JSONConverter.
     */
    type UserOptions = Partial<(Options & SpecialOptions)>;
}
declare module './DataConverterType' {
    interface DataConverterTypes {
        JSON: typeof JSONConverter;
    }
}
export default JSONConverter;
