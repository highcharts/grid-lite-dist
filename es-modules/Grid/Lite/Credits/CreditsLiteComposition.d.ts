import type Grid from '../../Core/Grid';
declare namespace CreditsLiteComposition {
    /**
     * Extends the grid classes with credits.
     *
     * @param GridClass
     * The class to extend.
     *
     */
    function compose(GridClass: typeof Grid): void;
}
export default CreditsLiteComposition;
