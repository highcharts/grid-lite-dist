import type Grid from '../../Core/Grid';
import Table from '../../Core/Table/Table';
/**
 * Extends the grid classes with credits.
 *
 * @param GridClass
 * The class to extend.
 *
 * @param TableClass
 * The class to extend.
 *
 */
export declare function compose(GridClass: typeof Grid, TableClass: typeof Table): void;
declare const _default: {
    compose: typeof compose;
};
export default _default;
