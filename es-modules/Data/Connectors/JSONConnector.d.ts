import type DataEvent from '../DataEvent';
import type Types from '../../Shared/Types';
import type JSONConnectorOptions from './JSONConnectorOptions';
import type DataTableOptions from '../DataTableOptions';
import DataConnector from './DataConnector.js';
import JSONConverter from '../Converters/JSONConverter.js';
/**
 * Class that handles creating a DataConnector from JSON structure
 *
 * @private
 */
declare class JSONConnector extends DataConnector {
    protected static readonly defaultOptions: JSONConnectorOptions;
    /**
     * Constructs an instance of JSONConnector.
     *
     * @param {JSONConnector.UserOptions} [options]
     * Options for the connector and converter.
     *
     * @param {Array<DataTableOptions>} [dataTables]
     * Multiple connector data tables options.
     */
    constructor(options?: JSONConnector.UserOptions, dataTables?: Array<DataTableOptions>);
    /**
     * Options related to the handling of the JSON DataConnector,
     * i.e. source, fetching, polling
     */
    readonly options: JSONConnectorOptions;
    /**
     * The attached parser that converts the data format to the table.
     */
    converter?: JSONConverter;
    /**
     * Initiates the loading of the JSON source to the connector
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits JSONConnector#load
     * @emits JSONConnector#afterLoad
     */
    load(eventDetail?: DataEvent.Detail): Promise<this>;
}
/**
 * Types for class-specific options and events.
 */
declare namespace JSONConnector {
    /**
     * Event objects fired from JSONConnector events.
     */
    type Event = (ErrorEvent | LoadEvent);
    /**
     * The event object that is provided on errors within JSONConnector.
     */
    interface ErrorEvent extends DataConnector.ErrorEvent {
        data?: JSONConverter.Data;
    }
    /**
     * The event object that is provided on load events within JSONConnector.
     */
    interface LoadEvent extends DataConnector.LoadEvent {
        data?: JSONConverter.Data;
    }
    /**
     * Available options for constructor of the JSONConnector.
     */
    type UserOptions = Types.DeepPartial<JSONConnectorOptions>;
}
declare module './DataConnectorType' {
    interface DataConnectorTypes {
        JSON: typeof JSONConnector;
    }
}
export default JSONConnector;
