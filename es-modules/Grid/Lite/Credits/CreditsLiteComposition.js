/* *
 *
 *  Grid Credits class
 *
 *  (c) 2020-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sebastian Bochan
 *
 * */
import Globals from '../../../Core/Globals.js';
import Credits from '../../Core/Credits.js';
import U from '../../../Core/Utilities.js';
const { addEvent, pushUnique } = U;
var CreditsLiteComposition;
(function (CreditsLiteComposition) {
    /**
     * Extends the grid classes with credits.
     *
     * @param GridClass
     * The class to extend.
     *
     */
    function compose(GridClass) {
        if (!pushUnique(Globals.composed, 'CreditsLite')) {
            return;
        }
        addEvent(GridClass, 'afterRenderViewport', initCredits);
    }
    CreditsLiteComposition.compose = compose;
    /**
     * Callback function called before table initialization.
     */
    function initCredits() {
        return new Credits(this);
    }
})(CreditsLiteComposition || (CreditsLiteComposition = {}));
export default CreditsLiteComposition;
