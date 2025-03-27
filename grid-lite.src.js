/**
 * @license Highcharts Grid v1.0.1 (2025-03-27)
 * @module grid/grid-lite
 *
 * (c) 2009-2024 Highsoft AS
 *
 * License: www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		(root["_Grid"] = factory(),module.exports = root["_Grid"]);
	else if(typeof define === 'function' && define.amd)
		define("grid/grid", [], factory);
	else if(typeof exports === 'object')
		(root["_Grid"] = factory(),exports["grid"] = root["_Grid"]);
	else
		((root["Grid"] && root["Grid"].error(16, true)), root["Grid"] = factory());
})(typeof window === 'undefined' ? this : window, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ grid_lite_src)
});

;// ./code/grid/es-modules/Core/Globals.js
/* *
 *
 *  (c) 2010-2024 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Namespace
 *
 * */
/**
 * Shared Highcharts properties.
 * @private
 */
var Globals;
(function (Globals) {
    /* *
     *
     *  Constants
     *
     * */
    Globals.SVG_NS = 'http://www.w3.org/2000/svg', Globals.product = 'Highcharts', Globals.version = '1.0.1', Globals.win = (typeof window !== 'undefined' ?
        window :
        {}), // eslint-disable-line node/no-unsupported-features/es-builtins
    Globals.doc = Globals.win.document, Globals.svg = !!Globals.doc?.createElementNS?.(Globals.SVG_NS, 'svg')?.createSVGRect, Globals.pageLang = Globals.doc?.documentElement?.closest('[lang]')?.lang, Globals.userAgent = Globals.win.navigator?.userAgent || '', Globals.isChrome = Globals.win.chrome, Globals.isFirefox = Globals.userAgent.indexOf('Firefox') !== -1, Globals.isMS = /(edge|msie|trident)/i.test(Globals.userAgent) && !Globals.win.opera, Globals.isSafari = !Globals.isChrome && Globals.userAgent.indexOf('Safari') !== -1, Globals.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(Globals.userAgent), Globals.isWebKit = Globals.userAgent.indexOf('AppleWebKit') !== -1, Globals.deg2rad = Math.PI * 2 / 360, Globals.marginNames = [
        'plotTop',
        'marginRight',
        'marginBottom',
        'plotLeft'
    ], Globals.noop = function () { }, Globals.supportsPassiveEvents = (function () {
        // Checks whether the browser supports passive events, (#11353).
        let supportsPassive = false;
        // Object.defineProperty doesn't work on IE as well as passive
        // events - instead of using polyfill, we can exclude IE totally.
        if (!Globals.isMS) {
            const opts = Object.defineProperty({}, 'passive', {
                get: function () {
                    supportsPassive = true;
                }
            });
            if (Globals.win.addEventListener && Globals.win.removeEventListener) {
                Globals.win.addEventListener('testPassive', Globals.noop, opts);
                Globals.win.removeEventListener('testPassive', Globals.noop, opts);
            }
        }
        return supportsPassive;
    }());
    /**
     * An array containing the current chart objects in the page. A chart's
     * position in the array is preserved throughout the page's lifetime. When
     * a chart is destroyed, the array item becomes `undefined`.
     *
     * @name Highcharts.charts
     * @type {Array<Highcharts.Chart|undefined>}
     */
    Globals.charts = [];
    /**
     * A shared registry between all bundles to keep track of applied
     * compositions.
     * @private
     */
    Globals.composed = [];
    /**
     * A hook for defining additional date format specifiers. New
     * specifiers are defined as key-value pairs by using the
     * specifier as key, and a function which takes the timestamp as
     * value. This function returns the formatted portion of the
     * date.
     *
     * Using `dateFormats` is also a convenient way to define new keys for
     * complex locale-aware date formats compatible with the
     * [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
     * browser API, whenever the built-in formats are not sufficient.
     *
     * @sample highcharts/global/dateformats/
     *         Adding support for week number
     * @sample highcharts/global/dateformats-object/
     *         A locale-aware date format using `Intl.DateTimeFormat`
     *
     * @name Highcharts.dateFormats
     * @type {Record<string, Highcharts.TimeFormatCallbackFunction>}
     */
    Globals.dateFormats = {};
    /**
     * @private
     * @deprecated
     * @todo Use only `Core/Series/SeriesRegistry.seriesTypes`
     */
    Globals.seriesTypes = {};
    /**
     * @private
     */
    Globals.symbolSizes = {};
    /* *
     *
     *  Properties
     *
     * */
    // eslint-disable-next-line prefer-const
    Globals.chartCount = 0;
})(Globals || (Globals = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Core_Globals = (Globals);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Theme options that should get applied to the chart. In module mode it
 * might not be possible to change this property because of read-only
 * restrictions, instead use {@link Highcharts.setOptions}.
 *
 * @deprecated
 * @name Highcharts.theme
 * @type {Highcharts.Options}
 */
(''); // Keeps doclets above in JS file

;// ./code/grid/es-modules/Core/Utilities.js
/* *
 *
 *  (c) 2010-2024 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { charts, doc, win } = Core_Globals;
/* *
 *
 *  Functions
 *
 * */
/**
 * Provide error messages for debugging, with links to online explanation. This
 * function can be overridden to provide custom error handling.
 *
 * @sample highcharts/chart/highcharts-error/
 *         Custom error handler
 *
 * @function Highcharts.error
 *
 * @param {number|string} code
 *        The error code. See
 *        [errors.xml](https://github.com/highcharts/highcharts/blob/master/errors/errors.xml)
 *        for available codes. If it is a string, the error message is printed
 *        directly in the console.
 *
 * @param {boolean} [stop=false]
 *        Whether to throw an error or just log a warning in the console.
 *
 * @param {Highcharts.Chart} [chart]
 *        Reference to the chart that causes the error. Used in 'debugger'
 *        module to display errors directly on the chart.
 *        Important note: This argument is undefined for errors that lack
 *        access to the Chart instance. In such case, the error will be
 *        displayed on the last created chart.
 *
 * @param {Highcharts.Dictionary<string>} [params]
 *        Additional parameters for the generated message.
 *
 * @return {void}
 */
function error(code, stop, chart, params) {
    const severity = stop ? 'Highcharts error' : 'Highcharts warning';
    if (code === 32) {
        code = `${severity}: Deprecated member`;
    }
    const isCode = isNumber(code);
    let message = isCode ?
        `${severity} #${code}: www.highcharts.com/errors/${code}/` :
        code.toString();
    const defaultHandler = function () {
        if (stop) {
            throw new Error(message);
        }
        // Else ...
        if (win.console &&
            error.messages.indexOf(message) === -1 // Prevent console flooting
        ) {
            console.warn(message); // eslint-disable-line no-console
        }
    };
    if (typeof params !== 'undefined') {
        let additionalMessages = '';
        if (isCode) {
            message += '?';
        }
        objectEach(params, function (value, key) {
            additionalMessages += `\n - ${key}: ${value}`;
            if (isCode) {
                message += encodeURI(key) + '=' + encodeURI(value);
            }
        });
        message += additionalMessages;
    }
    fireEvent(Core_Globals, 'displayError', { chart, code, message, params }, defaultHandler);
    error.messages.push(message);
}
(function (error) {
    error.messages = [];
})(error || (error = {}));
/**
 * Utility function to deep merge two or more objects and return a third object.
 * If the first argument is true, the contents of the second object is copied
 * into the first object. The merge function can also be used with a single
 * object argument to create a deep copy of an object.
 *
 * @function Highcharts.merge<T>
 *
 * @param {true | T} extendOrSource
 *        Whether to extend the left-side object,
 *        or the first object to merge as a deep copy.
 *
 * @param {...Array<object|undefined>} [sources]
 *        Object(s) to merge into the previous one.
 *
 * @return {T}
 *         The merged object. If the first argument is true, the return is the
 *         same as the second argument.
 */
function merge(extendOrSource, ...sources) {
    let i, args = [extendOrSource, ...sources], ret = {};
    const doCopy = function (copy, original) {
        // An object is replacing a primitive
        if (typeof copy !== 'object') {
            copy = {};
        }
        objectEach(original, function (value, key) {
            // Prototype pollution (#14883)
            if (key === '__proto__' || key === 'constructor') {
                return;
            }
            // Copy the contents of objects, but not arrays or DOM nodes
            if (isObject(value, true) &&
                !isClass(value) &&
                !isDOMElement(value)) {
                copy[key] = doCopy(copy[key] || {}, value);
                // Primitives and arrays are copied over directly
            }
            else {
                copy[key] = original[key];
            }
        });
        return copy;
    };
    // If first argument is true, copy into the existing object. Used in
    // setOptions.
    if (extendOrSource === true) {
        ret = args[1];
        args = Array.prototype.slice.call(args, 2);
    }
    // For each argument, extend the return
    const len = args.length;
    for (i = 0; i < len; i++) {
        ret = doCopy(ret, args[i]);
    }
    return ret;
}
/**
 * Constrain a value to within a lower and upper threshold.
 *
 * @private
 * @param {number} value The initial value
 * @param {number} min The lower threshold
 * @param {number} max The upper threshold
 * @return {number} Returns a number value within min and max.
 */
function clamp(value, min, max) {
    return value > min ? value < max ? value : max : min;
}
/**
 * Utility for crisping a line position to the nearest full pixel depening on
 * the line width
 * @param {number} value       The raw pixel position
 * @param {number} lineWidth   The line width
 * @param {boolean} [inverted] Whether the containing group is inverted.
 *                             Crisping round numbers on the y-scale need to go
 *                             to the other side because the coordinate system
 *                             is flipped (scaleY is -1)
 * @return {number}            The pixel position to use for a crisp display
 */
function crisp(value, lineWidth = 0, inverted) {
    const mod = lineWidth % 2 / 2, inverter = inverted ? -1 : 1;
    return (Math.round(value * inverter - mod) + mod) * inverter;
}
// eslint-disable-next-line valid-jsdoc
/**
 * Return the deep difference between two objects. It can either return the new
 * properties, or optionally return the old values of new properties.
 * @private
 */
function diffObjects(newer, older, keepOlder, collectionsWithUpdate) {
    const ret = {};
    /**
     * Recurse over a set of options and its current values, and store the
     * current values in the ret object.
     */
    function diff(newer, older, ret, depth) {
        const keeper = keepOlder ? older : newer;
        objectEach(newer, function (newerVal, key) {
            if (!depth &&
                collectionsWithUpdate &&
                collectionsWithUpdate.indexOf(key) > -1 &&
                older[key]) {
                newerVal = splat(newerVal);
                ret[key] = [];
                // Iterate over collections like series, xAxis or yAxis and map
                // the items by index.
                for (let i = 0; i < Math.max(newerVal.length, older[key].length); i++) {
                    // Item exists in current data (#6347)
                    if (older[key][i]) {
                        // If the item is missing from the new data, we need to
                        // save the whole config structure. Like when
                        // responsively updating from a dual axis layout to a
                        // single axis and back (#13544).
                        if (newerVal[i] === void 0) {
                            ret[key][i] = older[key][i];
                            // Otherwise, proceed
                        }
                        else {
                            ret[key][i] = {};
                            diff(newerVal[i], older[key][i], ret[key][i], depth + 1);
                        }
                    }
                }
            }
            else if (isObject(newerVal, true) &&
                !newerVal.nodeType // #10044
            ) {
                ret[key] = isArray(newerVal) ? [] : {};
                diff(newerVal, older[key] || {}, ret[key], depth + 1);
                // Delete empty nested objects
                if (Object.keys(ret[key]).length === 0 &&
                    // Except colorAxis which is a special case where the empty
                    // object means it is enabled. Which is unfortunate and we
                    // should try to find a better way.
                    !(key === 'colorAxis' && depth === 0)) {
                    delete ret[key];
                }
            }
            else if (newer[key] !== older[key] ||
                // If the newer key is explicitly undefined, keep it (#10525)
                (key in newer && !(key in older))) {
                if (key !== '__proto__' && key !== 'constructor') {
                    ret[key] = keeper[key];
                }
            }
        });
    }
    diff(newer, older, ret, 0);
    return ret;
}
/**
 * Shortcut for parseInt
 *
 * @private
 * @function Highcharts.pInt
 *
 * @param {*} s
 *        any
 *
 * @param {number} [mag]
 *        Magnitude
 *
 * @return {number}
 *         number
 */
function pInt(s, mag) {
    return parseInt(s, mag || 10);
}
/**
 * Utility function to check for string type.
 *
 * @function Highcharts.isString
 *
 * @param {*} s
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is a string.
 */
function isString(s) {
    return typeof s === 'string';
}
/**
 * Utility function to check if an item is an array.
 *
 * @function Highcharts.isArray
 *
 * @param {*} obj
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is an array.
 */
function isArray(obj) {
    const str = Object.prototype.toString.call(obj);
    return str === '[object Array]' || str === '[object Array Iterator]';
}
/**
 * Utility function to check if an item is of type object.
 *
 * @function Highcharts.isObject
 *
 * @param {*} obj
 *        The item to check.
 *
 * @param {boolean} [strict=false]
 *        Also checks that the object is not an array.
 *
 * @return {boolean}
 *         True if the argument is an object.
 */
function isObject(obj, strict) {
    return (!!obj &&
        typeof obj === 'object' &&
        (!strict || !isArray(obj))); // eslint-disable-line @typescript-eslint/no-explicit-any
}
/**
 * Utility function to check if an Object is a HTML Element.
 *
 * @function Highcharts.isDOMElement
 *
 * @param {*} obj
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is a HTML Element.
 */
function isDOMElement(obj) {
    return isObject(obj) && typeof obj.nodeType === 'number';
}
/**
 * Utility function to check if an Object is a class.
 *
 * @function Highcharts.isClass
 *
 * @param {object|undefined} obj
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is a class.
 */
function isClass(obj) {
    const c = obj?.constructor;
    return !!(isObject(obj, true) &&
        !isDOMElement(obj) &&
        (c?.name && c.name !== 'Object'));
}
/**
 * Utility function to check if an item is a number and it is finite (not NaN,
 * Infinity or -Infinity).
 *
 * @function Highcharts.isNumber
 *
 * @param {*} n
 *        The item to check.
 *
 * @return {boolean}
 *         True if the item is a finite number
 */
function isNumber(n) {
    return typeof n === 'number' && !isNaN(n) && n < Infinity && n > -Infinity;
}
/**
 * Remove the last occurence of an item from an array.
 *
 * @function Highcharts.erase
 *
 * @param {Array<*>} arr
 *        The array.
 *
 * @param {*} item
 *        The item to remove.
 *
 * @return {void}
 */
function erase(arr, item) {
    let i = arr.length;
    while (i--) {
        if (arr[i] === item) {
            arr.splice(i, 1);
            break;
        }
    }
}
/**
 * Insert a series or an axis in a collection with other items, either the
 * chart series or yAxis series or axis collections, in the correct order
 * according to the index option and whether it is internal. Used internally
 * when adding series and axes.
 *
 * @private
 * @function Highcharts.Chart#insertItem
 * @param  {Highcharts.Series|Highcharts.Axis} item
 *         The item to insert
 * @param  {Array<Highcharts.Series>|Array<Highcharts.Axis>} collection
 *         A collection of items, like `chart.series` or `xAxis.series`.
 * @return {number} The index of the series in the collection.
 */
function insertItem(item, collection) {
    const indexOption = item.options.index, length = collection.length;
    let i;
    for (
    // Internal item (navigator) should always be pushed to the end
    i = item.options.isInternal ? length : 0; i < length + 1; i++) {
        if (
        // No index option, reached the end of the collection,
        // equivalent to pushing
        !collection[i] ||
            // Handle index option, the element to insert has lower index
            (isNumber(indexOption) &&
                indexOption < pick(collection[i].options.index, collection[i]._i)) ||
            // Insert the new item before other internal items
            // (navigator)
            collection[i].options.isInternal) {
            collection.splice(i, 0, item);
            break;
        }
    }
    return i;
}
/**
 * Adds an item to an array, if it is not present in the array.
 *
 * @function Highcharts.pushUnique
 *
 * @param {Array<unknown>} array
 * The array to add the item to.
 *
 * @param {unknown} item
 * The item to add.
 *
 * @return {boolean}
 * Returns true, if the item was not present and has been added.
 */
function pushUnique(array, item) {
    return array.indexOf(item) < 0 && !!array.push(item);
}
/**
 * Check if an object is null or undefined.
 *
 * @function Highcharts.defined
 *
 * @param {*} obj
 *        The object to check.
 *
 * @return {boolean}
 *         False if the object is null or undefined, otherwise true.
 */
function defined(obj) {
    return typeof obj !== 'undefined' && obj !== null;
}
/**
 * Set or get an attribute or an object of attributes.
 *
 * To use as a setter, pass a key and a value, or let the second argument be a
 * collection of keys and values. When using a collection, passing a value of
 * `null` or `undefined` will remove the attribute.
 *
 * To use as a getter, pass only a string as the second argument.
 *
 * @function Highcharts.attr
 *
 * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} elem
 *        The DOM element to receive the attribute(s).
 *
 * @param {string|Highcharts.HTMLAttributes|Highcharts.SVGAttributes} [keyOrAttribs]
 *        The property or an object of key-value pairs.
 *
 * @param {number|string} [value]
 *        The value if a single property is set.
 *
 * @return {string|null|undefined}
 *         When used as a getter, return the value.
 */
function attr(elem, keyOrAttribs, value) {
    const isGetter = isString(keyOrAttribs) && !defined(value);
    let ret;
    const attrSingle = (value, key) => {
        // Set the value
        if (defined(value)) {
            elem.setAttribute(key, value);
            // Get the value
        }
        else if (isGetter) {
            ret = elem.getAttribute(key);
            // IE7 and below cannot get class through getAttribute (#7850)
            if (!ret && key === 'class') {
                ret = elem.getAttribute(key + 'Name');
            }
            // Remove the value
        }
        else {
            elem.removeAttribute(key);
        }
    };
    // If keyOrAttribs is a string
    if (isString(keyOrAttribs)) {
        attrSingle(value, keyOrAttribs);
        // Else if keyOrAttribs is defined, it is a hash of key/value pairs
    }
    else {
        objectEach(keyOrAttribs, attrSingle);
    }
    return ret;
}
/**
 * Check if an element is an array, and if not, make it into an array.
 *
 * @function Highcharts.splat
 *
 * @param {*} obj
 *        The object to splat.
 *
 * @return {Array}
 *         The produced or original array.
 */
function splat(obj) {
    return isArray(obj) ? obj : [obj];
}
/**
 * Set a timeout if the delay is given, otherwise perform the function
 * synchronously.
 *
 * @function Highcharts.syncTimeout
 *
 * @param {Function} fn
 *        The function callback.
 *
 * @param {number} delay
 *        Delay in milliseconds.
 *
 * @param {*} [context]
 *        An optional context to send to the function callback.
 *
 * @return {number}
 *         An identifier for the timeout that can later be cleared with
 *         Highcharts.clearTimeout. Returns -1 if there is no timeout.
 */
function syncTimeout(fn, delay, context) {
    if (delay > 0) {
        return setTimeout(fn, delay, context);
    }
    fn.call(0, context);
    return -1;
}
/**
 * Internal clear timeout. The function checks that the `id` was not removed
 * (e.g. by `chart.destroy()`). For the details see
 * [issue #7901](https://github.com/highcharts/highcharts/issues/7901).
 *
 * @function Highcharts.clearTimeout
 *
 * @param {number|undefined} id
 * Id of a timeout.
 */
function internalClearTimeout(id) {
    if (defined(id)) {
        clearTimeout(id);
    }
}
/* eslint-disable valid-jsdoc */
/**
 * Utility function to extend an object with the members of another.
 *
 * @function Highcharts.extend<T>
 *
 * @param {T|undefined} a
 *        The object to be extended.
 *
 * @param {Partial<T>} b
 *        The object to add to the first one.
 *
 * @return {T}
 *         Object a, the original object.
 */
function extend(a, b) {
    /* eslint-enable valid-jsdoc */
    let n;
    if (!a) {
        a = {};
    }
    for (n in b) { // eslint-disable-line guard-for-in
        a[n] = b[n];
    }
    return a;
}
/* eslint-disable valid-jsdoc */
/**
 * Return the first value that is not null or undefined.
 *
 * @function Highcharts.pick<T>
 *
 * @param {...Array<T|null|undefined>} items
 *        Variable number of arguments to inspect.
 *
 * @return {T}
 *         The value of the first argument that is not null or undefined.
 */
function pick() {
    const args = arguments;
    const length = args.length;
    for (let i = 0; i < length; i++) {
        const arg = args[i];
        if (typeof arg !== 'undefined' && arg !== null) {
            return arg;
        }
    }
}
/**
 * Set CSS on a given element.
 *
 * @function Highcharts.css
 *
 * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} el
 *        An HTML DOM element.
 *
 * @param {Highcharts.CSSObject} styles
 *        Style object with camel case property names.
 *
 * @return {void}
 */
function css(el, styles) {
    extend(el.style, styles);
}
/**
 * Utility function to create an HTML element with attributes and styles.
 *
 * @function Highcharts.createElement
 *
 * @param {string} tag
 *        The HTML tag.
 *
 * @param {Highcharts.HTMLAttributes} [attribs]
 *        Attributes as an object of key-value pairs.
 *
 * @param {Highcharts.CSSObject} [styles]
 *        Styles as an object of key-value pairs.
 *
 * @param {Highcharts.HTMLDOMElement} [parent]
 *        The parent HTML object.
 *
 * @param {boolean} [nopad=false]
 *        If true, remove all padding, border and margin.
 *
 * @return {Highcharts.HTMLDOMElement}
 *         The created DOM element.
 */
function createElement(tag, attribs, styles, parent, nopad) {
    const el = doc.createElement(tag);
    if (attribs) {
        extend(el, attribs);
    }
    if (nopad) {
        css(el, { padding: '0', border: 'none', margin: '0' });
    }
    if (styles) {
        css(el, styles);
    }
    if (parent) {
        parent.appendChild(el);
    }
    return el;
}
// eslint-disable-next-line valid-jsdoc
/**
 * Extend a prototyped class by new members.
 *
 * @deprecated
 * @function Highcharts.extendClass<T>
 *
 * @param {Highcharts.Class<T>} parent
 *        The parent prototype to inherit.
 *
 * @param {Highcharts.Dictionary<*>} members
 *        A collection of prototype members to add or override compared to the
 *        parent prototype.
 *
 * @return {Highcharts.Class<T>}
 *         A new prototype.
 */
function extendClass(parent, members) {
    const obj = (function () { });
    obj.prototype = new parent(); // eslint-disable-line new-cap
    extend(obj.prototype, members);
    return obj;
}
/**
 * Left-pad a string to a given length by adding a character repetitively.
 *
 * @function Highcharts.pad
 *
 * @param {number} number
 *        The input string or number.
 *
 * @param {number} [length]
 *        The desired string length.
 *
 * @param {string} [padder=0]
 *        The character to pad with.
 *
 * @return {string}
 *         The padded string.
 */
function pad(number, length, padder) {
    return new Array((length || 2) +
        1 -
        String(number)
            .replace('-', '')
            .length).join(padder || '0') + number;
}
/**
 * Return a length based on either the integer value, or a percentage of a base.
 *
 * @function Highcharts.relativeLength
 *
 * @param {Highcharts.RelativeSize} value
 *        A percentage string or a number.
 *
 * @param {number} base
 *        The full length that represents 100%.
 *
 * @param {number} [offset=0]
 *        A pixel offset to apply for percentage values. Used internally in
 *        axis positioning.
 *
 * @return {number}
 *         The computed length.
 */
function relativeLength(value, base, offset) {
    return (/%$/).test(value) ?
        (base * parseFloat(value) / 100) + (offset || 0) :
        parseFloat(value);
}
/**
 * Replaces text in a string with a given replacement in a loop to catch nested
 * matches after previous replacements.
 *
 * @function Highcharts.replaceNested
 *
 * @param {string} text
 * Text to search and modify.
 *
 * @param {...Array<(RegExp|string)>} replacements
 * One or multiple tuples with search pattern (`[0]: (string|RegExp)`) and
 * replacement (`[1]: string`) for matching text.
 *
 * @return {string}
 * Text with replacements.
 */
function replaceNested(text, ...replacements) {
    let previous, replacement;
    do {
        previous = text;
        for (replacement of replacements) {
            text = text.replace(replacement[0], replacement[1]);
        }
    } while (text !== previous);
    return text;
}
/**
 * Wrap a method with extended functionality, preserving the original function.
 *
 * @function Highcharts.wrap
 *
 * @param {*} obj
 *        The context object that the method belongs to. In real cases, this is
 *        often a prototype.
 *
 * @param {string} method
 *        The name of the method to extend.
 *
 * @param {Highcharts.WrapProceedFunction} func
 *        A wrapper function callback. This function is called with the same
 *        arguments as the original function, except that the original function
 *        is unshifted and passed as the first argument.
 */
function wrap(obj, method, func) {
    const proceed = obj[method];
    obj[method] = function () {
        const outerArgs = arguments, scope = this;
        return func.apply(this, [
            function () {
                return proceed.apply(scope, arguments.length ? arguments : outerArgs);
            }
        ].concat([].slice.call(arguments)));
    };
}
/**
 * Get the magnitude of a number.
 *
 * @function Highcharts.getMagnitude
 *
 * @param {number} num
 *        The number.
 *
 * @return {number}
 *         The magnitude, where 1-9 are magnitude 1, 10-99 magnitude 2 etc.
 */
function getMagnitude(num) {
    return Math.pow(10, Math.floor(Math.log(num) / Math.LN10));
}
/**
 * Take an interval and normalize it to multiples of round numbers.
 *
 * @deprecated
 * @function Highcharts.normalizeTickInterval
 *
 * @param {number} interval
 *        The raw, un-rounded interval.
 *
 * @param {Array<*>} [multiples]
 *        Allowed multiples.
 *
 * @param {number} [magnitude]
 *        The magnitude of the number.
 *
 * @param {boolean} [allowDecimals]
 *        Whether to allow decimals.
 *
 * @param {boolean} [hasTickAmount]
 *        If it has tickAmount, avoid landing on tick intervals lower than
 *        original.
 *
 * @return {number}
 *         The normalized interval.
 *
 * @todo
 * Move this function to the Axis prototype. It is here only for historical
 * reasons.
 */
function normalizeTickInterval(interval, multiples, magnitude, allowDecimals, hasTickAmount) {
    let i, retInterval = interval;
    // Round to a tenfold of 1, 2, 2.5 or 5
    magnitude = pick(magnitude, getMagnitude(interval));
    const normalized = interval / magnitude;
    // Multiples for a linear scale
    if (!multiples) {
        multiples = hasTickAmount ?
            // Finer grained ticks when the tick amount is hard set, including
            // when alignTicks is true on multiple axes (#4580).
            [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] :
            // Else, let ticks fall on rounder numbers
            [1, 2, 2.5, 5, 10];
        // The allowDecimals option
        if (allowDecimals === false) {
            if (magnitude === 1) {
                multiples = multiples.filter(function (num) {
                    return num % 1 === 0;
                });
            }
            else if (magnitude <= 0.1) {
                multiples = [1 / magnitude];
            }
        }
    }
    // Normalize the interval to the nearest multiple
    for (i = 0; i < multiples.length; i++) {
        retInterval = multiples[i];
        // Only allow tick amounts smaller than natural
        if ((hasTickAmount &&
            retInterval * magnitude >= interval) ||
            (!hasTickAmount &&
                (normalized <=
                    (multiples[i] +
                        (multiples[i + 1] || multiples[i])) / 2))) {
            break;
        }
    }
    // Multiply back to the correct magnitude. Correct floats to appropriate
    // precision (#6085).
    retInterval = correctFloat(retInterval * magnitude, -Math.round(Math.log(0.001) / Math.LN10));
    return retInterval;
}
/**
 * Sort an object array and keep the order of equal items. The ECMAScript
 * standard does not specify the behaviour when items are equal.
 *
 * @function Highcharts.stableSort
 *
 * @param {Array<*>} arr
 *        The array to sort.
 *
 * @param {Function} sortFunction
 *        The function to sort it with, like with regular Array.prototype.sort.
 */
function stableSort(arr, sortFunction) {
    // @todo It seems like Chrome since v70 sorts in a stable way internally,
    // plus all other browsers do it, so over time we may be able to remove this
    // function
    const length = arr.length;
    let sortValue, i;
    // Add index to each item
    for (i = 0; i < length; i++) {
        arr[i].safeI = i; // Stable sort index
    }
    arr.sort(function (a, b) {
        sortValue = sortFunction(a, b);
        return sortValue === 0 ? a.safeI - b.safeI : sortValue;
    });
    // Remove index from items
    for (i = 0; i < length; i++) {
        delete arr[i].safeI; // Stable sort index
    }
}
/**
 * Non-recursive method to find the lowest member of an array. `Math.min` raises
 * a maximum call stack size exceeded error in Chrome when trying to apply more
 * than 150.000 points. This method is slightly slower, but safe.
 *
 * @function Highcharts.arrayMin
 *
 * @param {Array<*>} data
 *        An array of numbers.
 *
 * @return {number}
 *         The lowest number.
 */
function arrayMin(data) {
    let i = data.length, min = data[0];
    while (i--) {
        if (data[i] < min) {
            min = data[i];
        }
    }
    return min;
}
/**
 * Non-recursive method to find the lowest member of an array. `Math.max` raises
 * a maximum call stack size exceeded error in Chrome when trying to apply more
 * than 150.000 points. This method is slightly slower, but safe.
 *
 * @function Highcharts.arrayMax
 *
 * @param {Array<*>} data
 *        An array of numbers.
 *
 * @return {number}
 *         The highest number.
 */
function arrayMax(data) {
    let i = data.length, max = data[0];
    while (i--) {
        if (data[i] > max) {
            max = data[i];
        }
    }
    return max;
}
/**
 * Utility method that destroys any SVGElement instances that are properties on
 * the given object. It loops all properties and invokes destroy if there is a
 * destroy method. The property is then delete.
 *
 * @function Highcharts.destroyObjectProperties
 *
 * @param {*} obj
 *        The object to destroy properties on.
 *
 * @param {*} [except]
 *        Exception, do not destroy this property, only delete it.
 */
function destroyObjectProperties(obj, except, destructablesOnly) {
    objectEach(obj, function (val, n) {
        // If the object is non-null and destroy is defined
        if (val !== except && val?.destroy) {
            // Invoke the destroy
            val.destroy();
        }
        // Delete the property from the object
        if (val?.destroy || !destructablesOnly) {
            delete obj[n];
        }
    });
}
/**
 * Discard a HTML element
 *
 * @function Highcharts.discardElement
 *
 * @param {Highcharts.HTMLDOMElement} element
 *        The HTML node to discard.
 */
function discardElement(element) {
    element?.parentElement?.removeChild(element);
}
/**
 * Fix JS round off float errors.
 *
 * @function Highcharts.correctFloat
 *
 * @param {number} num
 *        A float number to fix.
 *
 * @param {number} [prec=14]
 *        The precision.
 *
 * @return {number}
 *         The corrected float number.
 */
function correctFloat(num, prec) {
    // When the number is higher than 1e14 use the number (#16275)
    return num > 1e14 ? num : parseFloat(num.toPrecision(prec || 14));
}
/**
 * The time unit lookup
 *
 * @ignore
 */
const timeUnits = {
    millisecond: 1,
    second: 1000,
    minute: 60000,
    hour: 3600000,
    day: 24 * 3600000,
    week: 7 * 24 * 3600000,
    month: 28 * 24 * 3600000,
    year: 364 * 24 * 3600000
};
/**
 * Easing definition
 *
 * @private
 * @function Math.easeInOutSine
 *
 * @param {number} pos
 *        Current position, ranging from 0 to 1.
 *
 * @return {number}
 *         Ease result
 */
Math.easeInOutSine = function (pos) {
    return -0.5 * (Math.cos(Math.PI * pos) - 1);
};
/**
 * Convenience function to get the align factor, used several places for
 * computing positions
 * @private
 */
const getAlignFactor = (align = '') => ({
    center: 0.5,
    right: 1,
    middle: 0.5,
    bottom: 1
}[align] || 0);
/**
 * Find the closest distance between two values of a two-dimensional array
 * @private
 * @function Highcharts.getClosestDistance
 *
 * @param {Array<Array<number>>} arrays
 *          An array of arrays of numbers
 *
 * @return {number | undefined}
 *          The closest distance between values
 */
function getClosestDistance(arrays, onError) {
    const allowNegative = !onError;
    let closest, loopLength, distance, i;
    arrays.forEach((xData) => {
        if (xData.length > 1) {
            loopLength = xData.length - 1;
            for (i = loopLength; i > 0; i--) {
                distance = xData[i] - xData[i - 1];
                if (distance < 0 && !allowNegative) {
                    onError?.();
                    // Only one call
                    onError = void 0;
                }
                else if (distance && (typeof closest === 'undefined' || distance < closest)) {
                    closest = distance;
                }
            }
        }
    });
    return closest;
}
/**
 * Returns the value of a property path on a given object.
 *
 * @private
 * @function getNestedProperty
 *
 * @param {string} path
 * Path to the property, for example `custom.myValue`.
 *
 * @param {unknown} obj
 * Instance containing the property on the specific path.
 *
 * @return {unknown}
 * The unknown property value.
 */
function getNestedProperty(path, parent) {
    const pathElements = path.split('.');
    while (pathElements.length && defined(parent)) {
        const pathElement = pathElements.shift();
        // Filter on the key
        if (typeof pathElement === 'undefined' ||
            pathElement === '__proto__') {
            return; // Undefined
        }
        if (pathElement === 'this') {
            let thisProp;
            if (isObject(parent)) {
                thisProp = parent['@this'];
            }
            return thisProp ?? parent;
        }
        const child = parent[pathElement.replace(/[\\'"]/g, '')];
        // Filter on the child
        if (!defined(child) ||
            typeof child === 'function' ||
            typeof child.nodeType === 'number' ||
            child === win) {
            return; // Undefined
        }
        // Else, proceed
        parent = child;
    }
    return parent;
}
/**
 * Get the computed CSS value for given element and property, only for numerical
 * properties. For width and height, the dimension of the inner box (excluding
 * padding) is returned. Used for fitting the chart within the container.
 *
 * @function Highcharts.getStyle
 *
 * @param {Highcharts.HTMLDOMElement} el
 * An HTML element.
 *
 * @param {string} prop
 * The property name.
 *
 * @param {boolean} [toInt=true]
 * Parse to integer.
 *
 * @return {number|string|undefined}
 * The style value.
 */
function getStyle(el, prop, toInt) {
    let style;
    // For width and height, return the actual inner pixel size (#4913)
    if (prop === 'width') {
        let offsetWidth = Math.min(el.offsetWidth, el.scrollWidth);
        // In flex boxes, we need to use getBoundingClientRect and floor it,
        // because scrollWidth doesn't support subpixel precision (#6427) ...
        const boundingClientRectWidth = el.getBoundingClientRect?.().width;
        // ...unless if the containing div or its parents are transform-scaled
        // down, in which case the boundingClientRect can't be used as it is
        // also scaled down (#9871, #10498).
        if (boundingClientRectWidth < offsetWidth &&
            boundingClientRectWidth >= offsetWidth - 1) {
            offsetWidth = Math.floor(boundingClientRectWidth);
        }
        return Math.max(0, // #8377
        (offsetWidth -
            (getStyle(el, 'padding-left', true) || 0) -
            (getStyle(el, 'padding-right', true) || 0)));
    }
    if (prop === 'height') {
        return Math.max(0, // #8377
        (Math.min(el.offsetHeight, el.scrollHeight) -
            (getStyle(el, 'padding-top', true) || 0) -
            (getStyle(el, 'padding-bottom', true) || 0)));
    }
    // Otherwise, get the computed style
    const css = win.getComputedStyle(el, void 0); // eslint-disable-line no-undefined
    if (css) {
        style = css.getPropertyValue(prop);
        if (pick(toInt, prop !== 'opacity')) {
            style = pInt(style);
        }
    }
    return style;
}
/**
 * Return the value of the first element in the array that satisfies the
 * provided testing function.
 *
 * @function Highcharts.find<T>
 *
 * @param {Array<T>} arr
 *        The array to test.
 *
 * @param {Function} callback
 *        The callback function. The function receives the item as the first
 *        argument. Return `true` if this item satisfies the condition.
 *
 * @return {T|undefined}
 *         The value of the element.
 */
const find = Array.prototype.find ?
    function (arr, callback) {
        return arr.find(callback);
    } :
    // Legacy implementation. PhantomJS, IE <= 11 etc. #7223.
    function (arr, callback) {
        let i;
        const length = arr.length;
        for (i = 0; i < length; i++) {
            if (callback(arr[i], i)) { // eslint-disable-line node/callback-return
                return arr[i];
            }
        }
    };
/**
 * Get the element's offset position, corrected for `overflow: auto`.
 *
 * @function Highcharts.offset
 *
 * @param {global.Element} el
 *        The DOM element.
 *
 * @return {Highcharts.OffsetObject}
 *         An object containing `left` and `top` properties for the position in
 *         the page.
 */
function offset(el) {
    const docElem = doc.documentElement, box = (el.parentElement || el.parentNode) ?
        el.getBoundingClientRect() :
        { top: 0, left: 0, width: 0, height: 0 };
    return {
        top: box.top + (win.pageYOffset || docElem.scrollTop) -
            (docElem.clientTop || 0),
        left: box.left + (win.pageXOffset || docElem.scrollLeft) -
            (docElem.clientLeft || 0),
        width: box.width,
        height: box.height
    };
}
/* eslint-disable valid-jsdoc */
/**
 * Iterate over object key pairs in an object.
 *
 * @function Highcharts.objectEach<T>
 *
 * @param {*} obj
 *        The object to iterate over.
 *
 * @param {Highcharts.ObjectEachCallbackFunction<T>} fn
 *        The iterator callback. It passes three arguments:
 *        * value - The property value.
 *        * key - The property key.
 *        * obj - The object that objectEach is being applied to.
 *
 * @param {T} [ctx]
 *        The context.
 */
function objectEach(obj, fn, ctx) {
    /* eslint-enable valid-jsdoc */
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            fn.call(ctx || obj[key], obj[key], key, obj);
        }
    }
}
/* eslint-disable valid-jsdoc */
/**
 * Add an event listener.
 *
 * @function Highcharts.addEvent<T>
 *
 * @param  {Highcharts.Class<T>|T} el
 *         The element or object to add a listener to. It can be a
 *         {@link HTMLDOMElement}, an {@link SVGElement} or any other object.
 *
 * @param  {string} type
 *         The event type.
 *
 * @param  {Highcharts.EventCallbackFunction<T>|Function} fn
 *         The function callback to execute when the event is fired.
 *
 * @param  {Highcharts.EventOptionsObject} [options]
 *         Options for adding the event.
 *
 * @sample highcharts/members/addevent
 *         Use a general `render` event to draw shapes on a chart
 *
 * @return {Function}
 *         A callback function to remove the added event.
 */
function addEvent(el, type, fn, options = {}) {
    /* eslint-enable valid-jsdoc */
    // Add hcEvents to either the prototype (in case we're running addEvent on a
    // class) or the instance. If hasOwnProperty('hcEvents') is false, it is
    // inherited down the prototype chain, in which case we need to set the
    // property on this instance (which may itself be a prototype).
    const owner = typeof el === 'function' && el.prototype || el;
    if (!Object.hasOwnProperty.call(owner, 'hcEvents')) {
        owner.hcEvents = {};
    }
    const events = owner.hcEvents;
    // Allow click events added to points, otherwise they will be prevented by
    // the TouchPointer.pinch function after a pinch zoom operation (#7091).
    if (Core_Globals.Point && // Without H a dependency loop occurs
        el instanceof Core_Globals.Point &&
        el.series &&
        el.series.chart) {
        el.series.chart.runTrackerClick = true;
    }
    // Handle DOM events
    // If the browser supports passive events, add it to improve performance
    // on touch events (#11353).
    const addEventListener = el.addEventListener;
    if (addEventListener) {
        addEventListener.call(el, type, fn, Core_Globals.supportsPassiveEvents ? {
            passive: options.passive === void 0 ?
                type.indexOf('touch') !== -1 : options.passive,
            capture: false
        } : false);
    }
    if (!events[type]) {
        events[type] = [];
    }
    const eventObject = {
        fn,
        order: typeof options.order === 'number' ? options.order : Infinity
    };
    events[type].push(eventObject);
    // Order the calls
    events[type].sort((a, b) => a.order - b.order);
    // Return a function that can be called to remove this event.
    return function () {
        removeEvent(el, type, fn);
    };
}
/* eslint-disable valid-jsdoc */
/**
 * Remove an event that was added with {@link Highcharts#addEvent}.
 *
 * @function Highcharts.removeEvent<T>
 *
 * @param {Highcharts.Class<T>|T} el
 *        The element to remove events on.
 *
 * @param {string} [type]
 *        The type of events to remove. If undefined, all events are removed
 *        from the element.
 *
 * @param {Highcharts.EventCallbackFunction<T>} [fn]
 *        The specific callback to remove. If undefined, all events that match
 *        the element and optionally the type are removed.
 *
 * @return {void}
 */
function removeEvent(el, type, fn) {
    /* eslint-enable valid-jsdoc */
    /**
     * @private
     */
    function removeOneEvent(type, fn) {
        const removeEventListener = el.removeEventListener;
        if (removeEventListener) {
            removeEventListener.call(el, type, fn, false);
        }
    }
    /**
     * @private
     */
    function removeAllEvents(eventCollection) {
        let types, len;
        if (!el.nodeName) {
            return; // Break on non-DOM events
        }
        if (type) {
            types = {};
            types[type] = true;
        }
        else {
            types = eventCollection;
        }
        objectEach(types, function (_val, n) {
            if (eventCollection[n]) {
                len = eventCollection[n].length;
                while (len--) {
                    removeOneEvent(n, eventCollection[n][len].fn);
                }
            }
        });
    }
    const owner = typeof el === 'function' && el.prototype || el;
    if (Object.hasOwnProperty.call(owner, 'hcEvents')) {
        const events = owner.hcEvents;
        if (type) {
            const typeEvents = (events[type] || []);
            if (fn) {
                events[type] = typeEvents.filter(function (obj) {
                    return fn !== obj.fn;
                });
                removeOneEvent(type, fn);
            }
            else {
                removeAllEvents(events);
                events[type] = [];
            }
        }
        else {
            removeAllEvents(events);
            delete owner.hcEvents;
        }
    }
}
/* eslint-disable valid-jsdoc */
/**
 * Fire an event that was registered with {@link Highcharts#addEvent}.
 *
 * @function Highcharts.fireEvent<T>
 *
 * @param {T} el
 *        The object to fire the event on. It can be a {@link HTMLDOMElement},
 *        an {@link SVGElement} or any other object.
 *
 * @param {string} type
 *        The type of event.
 *
 * @param {Highcharts.Dictionary<*>|Event} [eventArguments]
 *        Custom event arguments that are passed on as an argument to the event
 *        handler.
 *
 * @param {Highcharts.EventCallbackFunction<T>|Function} [defaultFunction]
 *        The default function to execute if the other listeners haven't
 *        returned false.
 *
 * @return {void}
 */
function fireEvent(el, type, eventArguments, defaultFunction) {
    /* eslint-enable valid-jsdoc */
    eventArguments = eventArguments || {};
    if (doc?.createEvent &&
        (el.dispatchEvent ||
            (el.fireEvent &&
                // Enable firing events on Highcharts instance.
                el !== Core_Globals))) {
        const e = doc.createEvent('Events');
        e.initEvent(type, true, true);
        eventArguments = extend(e, eventArguments);
        if (el.dispatchEvent) {
            el.dispatchEvent(eventArguments);
        }
        else {
            el.fireEvent(type, eventArguments);
        }
    }
    else if (el.hcEvents) {
        if (!eventArguments.target) {
            // We're running a custom event
            extend(eventArguments, {
                // Attach a simple preventDefault function to skip
                // default handler if called. The built-in
                // defaultPrevented property is not overwritable (#5112)
                preventDefault: function () {
                    eventArguments.defaultPrevented = true;
                },
                // Setting target to native events fails with clicking
                // the zoom-out button in Chrome.
                target: el,
                // If the type is not set, we're running a custom event
                // (#2297). If it is set, we're running a browser event.
                type: type
            });
        }
        const events = [];
        let object = el;
        let multilevel = false;
        // Recurse up the inheritance chain and collect hcEvents set as own
        // objects on the prototypes.
        while (object.hcEvents) {
            if (Object.hasOwnProperty.call(object, 'hcEvents') &&
                object.hcEvents[type]) {
                if (events.length) {
                    multilevel = true;
                }
                events.unshift.apply(events, object.hcEvents[type]);
            }
            object = Object.getPrototypeOf(object);
        }
        // For performance reasons, only sort the event handlers in case we are
        // dealing with multiple levels in the prototype chain. Otherwise, the
        // events are already sorted in the addEvent function.
        if (multilevel) {
            // Order the calls
            events.sort((a, b) => a.order - b.order);
        }
        // Call the collected event handlers
        events.forEach((obj) => {
            // If the event handler returns false, prevent the default handler
            // from executing
            if (obj.fn.call(el, eventArguments) === false) {
                eventArguments.preventDefault();
            }
        });
    }
    // Run the default if not prevented
    if (defaultFunction && !eventArguments.defaultPrevented) {
        defaultFunction.call(el, eventArguments);
    }
}
let serialMode;
/**
 * Get a unique key for using in internal element id's and pointers. The key is
 * composed of a random hash specific to this Highcharts instance, and a
 * counter.
 *
 * @example
 * let id = uniqueKey(); // => 'highcharts-x45f6hp-0'
 *
 * @function Highcharts.uniqueKey
 *
 * @return {string}
 * A unique key.
 */
const uniqueKey = (function () {
    const hash = Math.random().toString(36).substring(2, 9) + '-';
    let id = 0;
    return function () {
        return 'highcharts-' + (serialMode ? '' : hash) + id++;
    };
}());
/**
 * Activates a serial mode for element IDs provided by
 * {@link Highcharts.uniqueKey}. This mode can be used in automated tests, where
 * a simple comparison of two rendered SVG graphics is needed.
 *
 * **Note:** This is only for testing purposes and will break functionality in
 * webpages with multiple charts.
 *
 * @example
 * if (
 *   process &&
 *   process.env.NODE_ENV === 'development'
 * ) {
 *   Highcharts.useSerialIds(true);
 * }
 *
 * @function Highcharts.useSerialIds
 *
 * @param {boolean} [mode]
 * Changes the state of serial mode.
 *
 * @return {boolean|undefined}
 * State of the serial mode.
 */
function useSerialIds(mode) {
    return (serialMode = pick(mode, serialMode));
}
function isFunction(obj) {
    return typeof obj === 'function';
}
function ucfirst(s) {
    return ((isString(s) ?
        s.substring(0, 1).toUpperCase() + s.substring(1) :
        String(s)));
}
/* *
 *
 *  External
 *
 * */
// Register Highcharts as a plugin in jQuery
if (win.jQuery) {
    /**
     * Highcharts-extended JQuery.
     *
     * @external JQuery
     */
    /**
     * Helper function to return the chart of the current JQuery selector
     * element.
     *
     * @function external:JQuery#highcharts
     *
     * @return {Highcharts.Chart}
     *         The chart that is linked to the JQuery selector element.
     */ /**
    * Factory function to create a chart in the current JQuery selector
    * element.
    *
    * @function external:JQuery#highcharts
    *
    * @param {'Chart'|'Map'|'StockChart'|string} [className]
    *        Name of the factory class in the Highcharts namespace.
    *
    * @param {Highcharts.Options} [options]
    *        The chart options structure.
    *
    * @param {Highcharts.ChartCallbackFunction} [callback]
    *        Function to run when the chart has loaded and all external
    *        images are loaded. Defining a
    *        [chart.events.load](https://api.highcharts.com/highcharts/chart.events.load)
    *        handler is equivalent.
    *
    * @return {JQuery}
    *         The current JQuery selector.
    */
    win.jQuery.fn.highcharts = function () {
        const args = [].slice.call(arguments);
        if (this[0]) { // `this[0]` is the renderTo div
            // Create the chart
            if (args[0]) {
                new Core_Globals[ // eslint-disable-line computed-property-spacing, no-new
                // Constructor defaults to Chart
                isString(args[0]) ? args.shift() : 'Chart'](this[0], args[0], args[1]);
                return this;
            }
            // When called without parameters or with the return argument,
            // return an existing chart
            return charts[attr(this[0], 'data-highcharts-chart')];
        }
    };
}
/* *
 *
 *  Default Export
 *
 * */
// TODO use named exports when supported.
const Utilities = {
    addEvent,
    arrayMax,
    arrayMin,
    attr,
    clamp,
    clearTimeout: internalClearTimeout,
    correctFloat,
    createElement,
    crisp,
    css,
    defined,
    destroyObjectProperties,
    diffObjects,
    discardElement,
    erase,
    error,
    extend,
    extendClass,
    find,
    fireEvent,
    getAlignFactor,
    getClosestDistance,
    getMagnitude,
    getNestedProperty,
    getStyle,
    insertItem,
    isArray,
    isClass,
    isDOMElement,
    isFunction,
    isNumber,
    isObject,
    isString,
    merge,
    normalizeTickInterval,
    objectEach,
    offset,
    pad,
    pick,
    pInt,
    pushUnique,
    relativeLength,
    removeEvent,
    replaceNested,
    splat,
    stableSort,
    syncTimeout,
    timeUnits,
    ucfirst,
    uniqueKey,
    useSerialIds,
    wrap
};
/* harmony default export */ const Core_Utilities = (Utilities);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * An animation configuration. Animation configurations can also be defined as
 * booleans, where `false` turns off animation and `true` defaults to a duration
 * of 500ms and defer of 0ms.
 *
 * @interface Highcharts.AnimationOptionsObject
 */ /**
* A callback function to execute when the animation finishes.
* @name Highcharts.AnimationOptionsObject#complete
* @type {Function|undefined}
*/ /**
* The animation defer in milliseconds.
* @name Highcharts.AnimationOptionsObject#defer
* @type {number|undefined}
*/ /**
* The animation duration in milliseconds.
* @name Highcharts.AnimationOptionsObject#duration
* @type {number|undefined}
*/ /**
* The name of an easing function as defined on the `Math` object.
* @name Highcharts.AnimationOptionsObject#easing
* @type {string|Function|undefined}
*/ /**
* A callback function to execute on each step of each attribute or CSS property
* that's being animated. The first argument contains information about the
* animation and progress.
* @name Highcharts.AnimationOptionsObject#step
* @type {Function|undefined}
*/
/**
 * Creates a frame for the animated SVG element.
 *
 * @callback Highcharts.AnimationStepCallbackFunction
 *
 * @param {Highcharts.SVGElement} this
 *        The SVG element to animate.
 *
 * @return {void}
 */
/**
 * Interface description for a class.
 *
 * @interface Highcharts.Class<T>
 * @extends Function
 */ /**
* Class constructor.
* @function Highcharts.Class<T>#new
* @param {...Array<*>} args
*        Constructor arguments.
* @return {T}
*         Class instance.
*/
/**
 * A style object with camel case property names to define visual appearance of
 * a SVG element or HTML element. The properties can be whatever styles are
 * supported on the given SVG or HTML element.
 *
 * @example
 * {
 *    fontFamily: 'monospace',
 *    fontSize: '1.2em'
 * }
 *
 * @interface Highcharts.CSSObject
 */ /**
* @name Highcharts.CSSObject#[key:string]
* @type {boolean|number|string|undefined}
*/ /**
* Background style for the element.
* @name Highcharts.CSSObject#background
* @type {string|undefined}
*/ /**
* Background color of the element.
* @name Highcharts.CSSObject#backgroundColor
* @type {Highcharts.ColorString|undefined}
*/ /**
* Border style for the element.
* @name Highcharts.CSSObject#border
* @type {string|undefined}
*/ /**
* Radius of the element border.
* @name Highcharts.CSSObject#borderRadius
* @type {number|undefined}
*/ /**
* Color used in the element. The 'contrast' option is a Highcharts custom
* property that results in black or white, depending on the background of the
* element.
* @name Highcharts.CSSObject#color
* @type {'contrast'|Highcharts.ColorString|undefined}
*/ /**
* Style of the mouse cursor when resting over the element.
* @name Highcharts.CSSObject#cursor
* @type {Highcharts.CursorValue|undefined}
*/ /**
* Font family of the element text. Multiple values have to be in decreasing
* preference order and separated by comma.
* @name Highcharts.CSSObject#fontFamily
* @type {string|undefined}
*/ /**
* Font size of the element text.
* @name Highcharts.CSSObject#fontSize
* @type {string|undefined}
*/ /**
* Font weight of the element text.
* @name Highcharts.CSSObject#fontWeight
* @type {string|undefined}
*/ /**
* Height of the element.
* @name Highcharts.CSSObject#height
* @type {number|undefined}
*/ /**
* The maximum number of lines. If lines are cropped away, an ellipsis will be
* added.
* @name Highcharts.CSSObject#lineClamp
* @type {number|undefined}
*/ /**
* Width of the element border.
* @name Highcharts.CSSObject#lineWidth
* @type {number|undefined}
*/ /**
* Opacity of the element.
* @name Highcharts.CSSObject#opacity
* @type {number|undefined}
*/ /**
* Space around the element content.
* @name Highcharts.CSSObject#padding
* @type {string|undefined}
*/ /**
* Behaviour of the element when the mouse cursor rests over it.
* @name Highcharts.CSSObject#pointerEvents
* @type {string|undefined}
*/ /**
* Positioning of the element.
* @name Highcharts.CSSObject#position
* @type {string|undefined}
*/ /**
* Alignment of the element text.
* @name Highcharts.CSSObject#textAlign
* @type {string|undefined}
*/ /**
* Additional decoration of the element text.
* @name Highcharts.CSSObject#textDecoration
* @type {string|undefined}
*/ /**
* Outline style of the element text.
* @name Highcharts.CSSObject#textOutline
* @type {string|undefined}
*/ /**
* Line break style of the element text. Highcharts SVG elements support
* `ellipsis` when a `width` is set.
* @name Highcharts.CSSObject#textOverflow
* @type {string|undefined}
*/ /**
* Top spacing of the element relative to the parent element.
* @name Highcharts.CSSObject#top
* @type {string|undefined}
*/ /**
* Animated transition of selected element properties.
* @name Highcharts.CSSObject#transition
* @type {string|undefined}
*/ /**
* Line break style of the element text.
* @name Highcharts.CSSObject#whiteSpace
* @type {string|undefined}
*/ /**
* Width of the element.
* @name Highcharts.CSSObject#width
* @type {number|undefined}
*/
/**
 * All possible cursor styles.
 *
 * @typedef {'alias'|'all-scroll'|'auto'|'cell'|'col-resize'|'context-menu'|'copy'|'crosshair'|'default'|'e-resize'|'ew-resize'|'grab'|'grabbing'|'help'|'move'|'n-resize'|'ne-resize'|'nesw-resize'|'no-drop'|'none'|'not-allowed'|'ns-resize'|'nw-resize'|'nwse-resize'|'pointer'|'progress'|'row-resize'|'s-resize'|'se-resize'|'sw-resize'|'text'|'vertical-text'|'w-resize'|'wait'|'zoom-in'|'zoom-out'} Highcharts.CursorValue
 */
/**
 * All possible dash styles.
 *
 * @typedef {'Dash'|'DashDot'|'Dot'|'LongDash'|'LongDashDot'|'LongDashDotDot'|'ShortDash'|'ShortDashDot'|'ShortDashDotDot'|'ShortDot'|'Solid'} Highcharts.DashStyleValue
 */
/**
 * Generic dictionary in TypeScript notation.
 * Use the native `AnyRecord` instead.
 *
 * @deprecated
 * @interface Highcharts.Dictionary<T>
 */ /**
* @name Highcharts.Dictionary<T>#[key:string]
* @type {T}
*/
/**
 * The function callback to execute when the event is fired. The `this` context
 * contains the instance, that fired the event.
 *
 * @callback Highcharts.EventCallbackFunction<T>
 *
 * @param {T} this
 *
 * @param {Highcharts.Dictionary<*>|Event} [eventArguments]
 *        Event arguments.
 *
 * @return {boolean|void}
 */
/**
 * The event options for adding function callback.
 *
 * @interface Highcharts.EventOptionsObject
 */ /**
* The order the event handler should be called. This opens for having one
* handler be called before another, independent of in which order they were
* added.
* @name Highcharts.EventOptionsObject#order
* @type {number}
*/ /**
* Whether an event should be passive or not.
* When set to `true`, the function specified by listener will never call
* `preventDefault()`.
* @name Highcharts.EventOptionsObject#passive
* @type boolean
*/
/**
 * Formats data as a string. Usually the data is accessible through the `this`
 * keyword.
 *
 * @callback Highcharts.FormatterCallbackFunction<T>
 *
 * @param {T} this
 *        Context to format
 *
 * @return {string}
 *         Formatted text
 */
/**
 * An object of key-value pairs for HTML attributes.
 *
 * @typedef {Highcharts.Dictionary<boolean|number|string|Function>} Highcharts.HTMLAttributes
 */
/**
 * An HTML DOM element. The type is a reference to the regular HTMLElement in
 * the global scope.
 *
 * @typedef {global.HTMLElement} Highcharts.HTMLDOMElement
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
 */
/**
 * The iterator callback.
 *
 * @callback Highcharts.ObjectEachCallbackFunction<T>
 *
 * @param {T} this
 *        The context.
 *
 * @param {*} value
 *        The property value.
 *
 * @param {string} key
 *        The property key.
 *
 * @param {*} obj
 *        The object that objectEach is being applied to.
 */
/**
 * An object containing `left` and `top` properties for the position in the
 * page.
 *
 * @interface Highcharts.OffsetObject
 */ /**
* Left distance to the page border.
* @name Highcharts.OffsetObject#left
* @type {number}
*/ /**
* Top distance to the page border.
* @name Highcharts.OffsetObject#top
* @type {number}
*/
/**
 * Describes a range.
 *
 * @interface Highcharts.RangeObject
 */ /**
* Maximum number of the range.
* @name Highcharts.RangeObject#max
* @type {number}
*/ /**
* Minimum number of the range.
* @name Highcharts.RangeObject#min
* @type {number}
*/
/**
 * If a number is given, it defines the pixel length. If a percentage string is
 * given, like for example `'50%'`, the setting defines a length relative to a
 * base size, for example the size of a container.
 *
 * @typedef {number|string} Highcharts.RelativeSize
 */
/**
 * Proceed function to call original (wrapped) function.
 *
 * @callback Highcharts.WrapProceedFunction
 *
 * @param {*} [arg1]
 *        Optional argument. Without any arguments defaults to first argument of
 *        the wrapping function.
 *
 * @param {*} [arg2]
 *        Optional argument. Without any arguments defaults to second argument
 *        of the wrapping function.
 *
 * @param {*} [arg3]
 *        Optional argument. Without any arguments defaults to third argument of
 *        the wrapping function.
 *
 * @return {*}
 *         Return value of the original function.
 */
/**
 * The Highcharts object is the placeholder for all other members, and various
 * utility functions. The most important member of the namespace would be the
 * chart constructor.
 *
 * @example
 * let chart = Highcharts.chart('container', { ... });
 *
 * @namespace Highcharts
 */
''; // Detach doclets above

;// ./code/grid/es-modules/Core/Renderer/HTML/AST.js
/* *
 *
 *  (c) 2010-2024 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { SVG_NS, win: AST_win } = Core_Globals;

const { attr: AST_attr, createElement: AST_createElement, css: AST_css, error: AST_error, isFunction: AST_isFunction, isString: AST_isString, objectEach: AST_objectEach, splat: AST_splat } = Core_Utilities;
const { trustedTypes } = AST_win;
/* *
 *
 *  Constants
 *
 * */
// Create the trusted type policy. This should not be exposed.
const trustedTypesPolicy = (trustedTypes &&
    AST_isFunction(trustedTypes.createPolicy) &&
    trustedTypes.createPolicy('highcharts', {
        createHTML: (s) => s
    }));
const emptyHTML = trustedTypesPolicy ?
    trustedTypesPolicy.createHTML('') :
    '';
/* *
 *
 *  Class
 *
 * */
/**
 * The AST class represents an abstract syntax tree of HTML or SVG content. It
 * can take HTML as an argument, parse it, optionally transform it to SVG, then
 * perform sanitation before inserting it into the DOM.
 *
 * @class
 * @name Highcharts.AST
 *
 * @param {string|Array<Highcharts.ASTNode>} source
 * Either an HTML string or an ASTNode list to populate the tree.
 */
class AST {
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * Filter an object of SVG or HTML attributes against the allow list.
     *
     * @static
     *
     * @function Highcharts.AST#filterUserAttributes
     *
     * @param {Highcharts.SVGAttributes} attributes The attributes to filter
     *
     * @return {Highcharts.SVGAttributes}
     * The filtered attributes
     */
    static filterUserAttributes(attributes) {
        AST_objectEach(attributes, (val, key) => {
            let valid = true;
            if (AST.allowedAttributes.indexOf(key) === -1) {
                valid = false;
            }
            if (['background', 'dynsrc', 'href', 'lowsrc', 'src']
                .indexOf(key) !== -1) {
                valid = AST_isString(val) && AST.allowedReferences.some((ref) => val.indexOf(ref) === 0);
            }
            if (!valid) {
                AST_error(33, false, void 0, {
                    'Invalid attribute in config': `${key}`
                });
                delete attributes[key];
            }
            // #17753, < is not allowed in SVG attributes
            if (AST_isString(val) && attributes[key]) {
                attributes[key] = val.replace(/</g, '&lt;');
            }
        });
        return attributes;
    }
    static parseStyle(style) {
        return style
            .split(';')
            .reduce((styles, line) => {
            const pair = line.split(':').map((s) => s.trim()), key = pair.shift();
            if (key && pair.length) {
                styles[key.replace(/-([a-z])/g, (g) => g[1].toUpperCase())] = pair.join(':'); // #17146
            }
            return styles;
        }, {});
    }
    /**
     * Utility function to set html content for an element by passing in a
     * markup string. The markup is safely parsed by the AST class to avoid
     * XSS vulnerabilities. This function should be used instead of setting
     * `innerHTML` in all cases where the content is not fully trusted.
     *
     * @static
     * @function Highcharts.AST#setElementHTML
     *
     * @param {SVGDOMElement|HTMLDOMElement} el
     * Node to set content of.
     *
     * @param {string} html
     * Markup string
     */
    static setElementHTML(el, html) {
        el.innerHTML = AST.emptyHTML; // Clear previous
        if (html) {
            const ast = new AST(html);
            ast.addToDOM(el);
        }
    }
    /* *
     *
     *  Constructor
     *
     * */
    // Construct an AST from HTML markup, or wrap an array of existing AST nodes
    constructor(source) {
        this.nodes = typeof source === 'string' ?
            this.parseMarkup(source) : source;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Add the tree defined as a hierarchical JS structure to the DOM
     *
     * @function Highcharts.AST#addToDOM
     *
     * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} parent
     * The node where it should be added
     *
     * @return {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement}
     * The inserted node.
     */
    addToDOM(parent) {
        /**
         * @private
         * @param {Highcharts.ASTNode} subtree
         * HTML/SVG definition
         * @param {Element} [subParent]
         * parent node
         * @return {Highcharts.SVGDOMElement|Highcharts.HTMLDOMElement}
         * The inserted node.
         */
        function recurse(subtree, subParent) {
            let ret;
            AST_splat(subtree).forEach(function (item) {
                const tagName = item.tagName;
                const textNode = item.textContent ?
                    Core_Globals.doc.createTextNode(item.textContent) :
                    void 0;
                // Whether to ignore the AST filtering totally, #15345
                const bypassHTMLFiltering = AST.bypassHTMLFiltering;
                let node;
                if (tagName) {
                    if (tagName === '#text') {
                        node = textNode;
                    }
                    else if (AST.allowedTags.indexOf(tagName) !== -1 ||
                        bypassHTMLFiltering) {
                        const NS = tagName === 'svg' ?
                            SVG_NS :
                            (subParent.namespaceURI || SVG_NS);
                        const element = Core_Globals.doc.createElementNS(NS, tagName);
                        const attributes = item.attributes || {};
                        // Apply attributes from root of AST node, legacy from
                        // from before TextBuilder
                        AST_objectEach(item, function (val, key) {
                            if (key !== 'tagName' &&
                                key !== 'attributes' &&
                                key !== 'children' &&
                                key !== 'style' &&
                                key !== 'textContent') {
                                attributes[key] = val;
                            }
                        });
                        AST_attr(element, bypassHTMLFiltering ?
                            attributes :
                            AST.filterUserAttributes(attributes));
                        if (item.style) {
                            AST_css(element, item.style);
                        }
                        // Add text content
                        if (textNode) {
                            element.appendChild(textNode);
                        }
                        // Recurse
                        recurse(item.children || [], element);
                        node = element;
                    }
                    else {
                        AST_error(33, false, void 0, {
                            'Invalid tagName in config': tagName
                        });
                    }
                }
                // Add to the tree
                if (node) {
                    subParent.appendChild(node);
                }
                ret = node;
            });
            // Return last node added (on top level it's the only one)
            return ret;
        }
        return recurse(this.nodes, parent);
    }
    /**
     * Parse HTML/SVG markup into AST Node objects. Used internally from the
     * constructor.
     *
     * @private
     *
     * @function Highcharts.AST#getNodesFromMarkup
     *
     * @param {string} markup The markup string.
     *
     * @return {Array<Highcharts.ASTNode>} The parsed nodes.
     */
    parseMarkup(markup) {
        const nodes = [];
        markup = markup
            .trim()
            // The style attribute throws a warning when parsing when CSP is
            // enabled (#6884), so use an alias and pick it up below
            // Make all quotation marks parse correctly to DOM (#17627)
            .replace(/ style=(["'])/g, ' data-style=$1');
        let doc;
        try {
            doc = new DOMParser().parseFromString(trustedTypesPolicy ?
                trustedTypesPolicy.createHTML(markup) :
                markup, 'text/html');
        }
        catch (e) {
            // There are two cases where this fails:
            // 1. IE9 and PhantomJS, where the DOMParser only supports parsing
            //    XML
            // 2. Due to a Chromium issue where chart redraws are triggered by
            //    a `beforeprint` event (#16931),
            //    https://issues.chromium.org/issues/40222135
        }
        if (!doc) {
            const body = AST_createElement('div');
            body.innerHTML = markup;
            doc = { body };
        }
        const appendChildNodes = (node, addTo) => {
            const tagName = node.nodeName.toLowerCase();
            // Add allowed tags
            const astNode = {
                tagName
            };
            if (tagName === '#text') {
                astNode.textContent = node.textContent || '';
            }
            const parsedAttributes = node.attributes;
            // Add attributes
            if (parsedAttributes) {
                const attributes = {};
                [].forEach.call(parsedAttributes, (attrib) => {
                    if (attrib.name === 'data-style') {
                        astNode.style = AST.parseStyle(attrib.value);
                    }
                    else {
                        attributes[attrib.name] = attrib.value;
                    }
                });
                astNode.attributes = attributes;
            }
            // Handle children
            if (node.childNodes.length) {
                const children = [];
                [].forEach.call(node.childNodes, (childNode) => {
                    appendChildNodes(childNode, children);
                });
                if (children.length) {
                    astNode.children = children;
                }
            }
            addTo.push(astNode);
        };
        [].forEach.call(doc.body.childNodes, (childNode) => appendChildNodes(childNode, nodes));
        return nodes;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * The list of allowed SVG or HTML attributes, used for sanitizing
 * potentially harmful content from the chart configuration before adding to
 * the DOM.
 *
 * @see [Source code with default values](
 * https://github.com/highcharts/highcharts/blob/master/ts/Core/Renderer/HTML/AST.ts#:~:text=public%20static%20allowedAttributes)
 *
 * @example
 * // Allow a custom, trusted attribute
 * Highcharts.AST.allowedAttributes.push('data-value');
 *
 * @name Highcharts.AST.allowedAttributes
 * @type {Array<string>}
 */
AST.allowedAttributes = [
    'alt',
    'aria-controls',
    'aria-describedby',
    'aria-expanded',
    'aria-haspopup',
    'aria-hidden',
    'aria-label',
    'aria-labelledby',
    'aria-live',
    'aria-pressed',
    'aria-readonly',
    'aria-roledescription',
    'aria-selected',
    'class',
    'clip-path',
    'color',
    'colspan',
    'cx',
    'cy',
    'd',
    'dx',
    'dy',
    'disabled',
    'fill',
    'filterUnits',
    'flood-color',
    'flood-opacity',
    'height',
    'href',
    'id',
    'in',
    'in2',
    'markerHeight',
    'markerWidth',
    'offset',
    'opacity',
    'operator',
    'orient',
    'padding',
    'paddingLeft',
    'paddingRight',
    'patternUnits',
    'r',
    'radius',
    'refX',
    'refY',
    'role',
    'scope',
    'slope',
    'src',
    'startOffset',
    'stdDeviation',
    'stroke',
    'stroke-linecap',
    'stroke-width',
    'style',
    'tableValues',
    'result',
    'rowspan',
    'summary',
    'target',
    'tabindex',
    'text-align',
    'text-anchor',
    'textAnchor',
    'textLength',
    'title',
    'type',
    'valign',
    'width',
    'x',
    'x1',
    'x2',
    'xlink:href',
    'y',
    'y1',
    'y2',
    'zIndex'
];
/**
 * The list of allowed references for referring attributes like `href` and
 * `src`. Attribute values will only be allowed if they start with one of
 * these strings.
 *
 * @see [Source code with default values](
 * https://github.com/highcharts/highcharts/blob/master/ts/Core/Renderer/HTML/AST.ts#:~:text=public%20static%20allowedReferences)
 *
 * @example
 * // Allow tel:
 * Highcharts.AST.allowedReferences.push('tel:');
 *
 * @name    Highcharts.AST.allowedReferences
 * @type    {Array<string>}
 */
AST.allowedReferences = [
    'https://',
    'http://',
    'mailto:',
    '/',
    '../',
    './',
    '#'
];
/**
 * The list of allowed SVG or HTML tags, used for sanitizing potentially
 * harmful content from the chart configuration before adding to the DOM.
 *
 * @see [Source code with default values](
 * https://github.com/highcharts/highcharts/blob/master/ts/Core/Renderer/HTML/AST.ts#:~:text=public%20static%20allowedTags)
 *
 * @example
 * // Allow a custom, trusted tag
 * Highcharts.AST.allowedTags.push('blink'); // ;)
 *
 * @name    Highcharts.AST.allowedTags
 * @type    {Array<string>}
 */
AST.allowedTags = [
    'a',
    'abbr',
    'b',
    'br',
    'button',
    'caption',
    'circle',
    'clipPath',
    'code',
    'dd',
    'defs',
    'div',
    'dl',
    'dt',
    'em',
    'feComponentTransfer',
    'feComposite',
    'feDropShadow',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feMorphology',
    'feOffset',
    'feMerge',
    'feMergeNode',
    'filter',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'hr',
    'i',
    'img',
    'li',
    'linearGradient',
    'marker',
    'ol',
    'p',
    'path',
    'pattern',
    'pre',
    'rect',
    'small',
    'span',
    'stop',
    'strong',
    'style',
    'sub',
    'sup',
    'svg',
    'table',
    'text',
    'textPath',
    'thead',
    'title',
    'tbody',
    'tspan',
    'td',
    'th',
    'tr',
    'u',
    'ul',
    '#text'
];
AST.emptyHTML = emptyHTML;
/**
 * Allow all custom SVG and HTML attributes, references and tags (together
 * with potentially harmful ones) to be added to the DOM from the chart
 * configuration. In other words, disable the allow-listing which is the
 * primary functionality of the AST.
 *
 * WARNING: Setting this property to `true` while allowing untrusted user
 * data in the chart configuration will expose your application to XSS
 * security risks!
 *
 * Note that in case you want to allow a known set of tags or attributes,
 * you should allow-list them instead of disabling the filtering totally.
 * See [allowedAttributes](Highcharts.AST#.allowedAttributes),
 * [allowedReferences](Highcharts.AST#.allowedReferences) and
 * [allowedTags](Highcharts.AST#.allowedTags). The `bypassHTMLFiltering`
 * setting is intended only for those cases where allow-listing is not
 * practical, and the chart configuration already comes from a secure
 * source.
 *
 * @example
 * // Allow all custom attributes, references and tags (disable DOM XSS
 * // filtering)
 * Highcharts.AST.bypassHTMLFiltering = true;
 *
 * @name Highcharts.AST.bypassHTMLFiltering
 * @static
 */
AST.bypassHTMLFiltering = false;
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const HTML_AST = (AST);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Serialized form of an SVG/HTML definition, including children.
 *
 * @interface Highcharts.ASTNode
 */ /**
* @name Highcharts.ASTNode#attributes
* @type {Highcharts.SVGAttributes|undefined}
*/ /**
* @name Highcharts.ASTNode#children
* @type {Array<Highcharts.ASTNode>|undefined}
*/ /**
* @name Highcharts.ASTNode#tagName
* @type {string|undefined}
*/ /**
* @name Highcharts.ASTNode#textContent
* @type {string|undefined}
*/
(''); // Keeps doclets above in file

;// ./code/grid/es-modules/Core/Chart/ChartDefaults.js
/* *
 *
 *  (c) 2010-2024 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  API Options
 *
 * */
/**
 * General options for the chart.
 *
 * @optionparent chart
 */
const ChartDefaults = {
    /**
     * Default `mapData` for all series, in terms of a GeoJSON or TopoJSON
     * object. If set to a string, it functions as an index into the
     * `Highcharts.maps` array.
     *
     * For picking out individual shapes and geometries to use for each series
     * of the map, see [series.mapData](#series.map.mapData).
     *
     * @sample    maps/demo/geojson
     *            Loading GeoJSON data
     * @sample    maps/chart/topojson
     *            Loading TopoJSON data
     *
     * @type      {string|Array<*>|Highcharts.GeoJSON|Highcharts.TopoJSON}
     * @since     5.0.0
     * @product   highmaps
     * @apioption chart.map
     */
    /**
     * Set lat/lon transformation definitions for the chart. If not defined,
     * these are extracted from the map data.
     *
     * @type      {*}
     * @since     5.0.0
     * @product   highmaps
     * @apioption chart.mapTransforms
     */
    /**
     * When using multiple axes, the ticks of two or more opposite axes
     * will automatically be aligned by adding ticks to the axis or axes
     * with the least ticks, as if `tickAmount` were specified.
     *
     * This can be prevented by setting `alignTicks` to false. If the grid
     * lines look messy, it's a good idea to hide them for the secondary
     * axis by setting `gridLineWidth` to 0.
     *
     * If `startOnTick` or `endOnTick` in the axis options are set to false,
     * then the `alignTicks ` will be disabled for the axis.
     *
     * Disabled for logarithmic axes.
     *
     * @sample {highcharts} highcharts/chart/alignticks-true/
     *         True by default
     * @sample {highcharts} highcharts/chart/alignticks-false/
     *         False
     * @sample {highstock} stock/chart/alignticks-true/
     *         True by default
     * @sample {highstock} stock/chart/alignticks-false/
     *         False
     *
     * @type      {boolean}
     * @default   true
     * @product   highcharts highstock gantt
     * @apioption chart.alignTicks
     */
    /**
     * When using multiple axes, align the thresholds. When this is true, other
     * ticks will also be aligned.
     *
     * Note that for line series and some other series types, the `threshold`
     * option is set to `null` by default. This will in turn cause their y-axis
     * to not have a threshold. In order to avoid that, set the series
     * `threshold` to 0 or another number.
     *
     * If `startOnTick` or `endOnTick` in the axis options are set to false, or
     * if the axis is logarithmic, the threshold will not be aligned.
     *
     * @sample {highcharts} highcharts/chart/alignthresholds/ Set to true
     *
     * @since 10.0.0
     * @product   highcharts highstock gantt
     * @apioption chart.alignThresholds
     */
    alignThresholds: false,
    /**
     * Set the overall animation for all chart updating. Animation can be
     * disabled throughout the chart by setting it to false here. It can
     * be overridden for each individual API method as a function parameter.
     * The only animation not affected by this option is the initial series
     * animation, see [plotOptions.series.animation](
     * #plotOptions.series.animation).
     *
     * The animation can either be set as a boolean or a configuration
     * object. If `true`, it will use the 'swing' jQuery easing and a
     * duration of 500 ms. If used as a configuration object, the following
     * properties are supported:
     *
     * - `defer`: The animation delay time in milliseconds.
     *
     * - `duration`: The duration of the animation in milliseconds.
     *
     * - `easing`: A string reference to an easing function set on the
     *   `Math` object. See
     *   [the easing demo](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-animation-easing/).
     *
     * When zooming on a series with less than 100 points, the chart redraw
     * will be done with animation, but in case of more data points, it is
     * necessary to set this option to ensure animation on zoom.
     *
     * @sample {highcharts} highcharts/chart/animation-none/
     *         Updating with no animation
     * @sample {highcharts} highcharts/chart/animation-duration/
     *         With a longer duration
     * @sample {highcharts} highcharts/chart/animation-easing/
     *         With a jQuery UI easing
     * @sample {highmaps} maps/chart/animation-none/
     *         Updating with no animation
     * @sample {highmaps} maps/chart/animation-duration/
     *         With a longer duration
     *
     * @type      {boolean|Partial<Highcharts.AnimationOptionsObject>}
     * @default   true
     * @apioption chart.animation
     */
    /**
     * A CSS class name to apply to the charts container `div`, allowing
     * unique CSS styling for each chart.
     *
     * @type      {string}
     * @apioption chart.className
     */
    /**
     * Event listeners for the chart.
     *
     * @apioption chart.events
     */
    /**
     * Fires when a series is added to the chart after load time, using the
     * `addSeries` method. One parameter, `event`, is passed to the
     * function, containing common event information. Through
     * `event.options` you can access the series options that were passed to
     * the `addSeries` method. Returning false prevents the series from
     * being added.
     *
     * @sample {highcharts} highcharts/chart/events-addseries/
     *         Alert on add series
     * @sample {highstock} stock/chart/events-addseries/
     *         Alert on add series
     *
     * @type      {Highcharts.ChartAddSeriesCallbackFunction}
     * @since     1.2.0
     * @context   Highcharts.Chart
     * @apioption chart.events.addSeries
     */
    /**
     * Fires when clicking on the plot background. One parameter, `event`,
     * is passed to the function, containing common event information.
     *
     * Information on the clicked spot can be found through `event.xAxis`
     * and `event.yAxis`, which are arrays containing the axes of each
     * dimension and each axis' value at the clicked spot. The primary axes
     * are `event.xAxis[0]` and `event.yAxis[0]`. Remember the unit of a
     * datetime axis is milliseconds since 1970-01-01 00:00:00.
     *
     * ```js
     * click: function(e) {
     *     console.log(
     *         Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', e.xAxis[0].value),
     *         e.yAxis[0].value
     *     )
     * }
     * ```
     *
     * @sample {highcharts} highcharts/chart/events-click/
     *         Alert coordinates on click
     * @sample {highcharts} highcharts/chart/events-container/
     *         Alternatively, attach event to container
     * @sample {highstock} stock/chart/events-click/
     *         Alert coordinates on click
     * @sample {highstock} highcharts/chart/events-container/
     *         Alternatively, attach event to container
     * @sample {highmaps} maps/chart/events-click/
     *         Record coordinates on click
     * @sample {highmaps} highcharts/chart/events-container/
     *         Alternatively, attach event to container
     *
     * @type      {Highcharts.ChartClickCallbackFunction}
     * @since     1.2.0
     * @context   Highcharts.Chart
     * @apioption chart.events.click
     */
    /**
     * Fires when the chart is finished loading. Since v4.2.2, it also waits
     * for images to be loaded, for example from point markers. One
     * parameter, `event`, is passed to the function, containing common
     * event information.
     *
     * There is also a second parameter to the chart constructor where a
     * callback function can be passed to be executed on chart.load.
     *
     * @sample {highcharts} highcharts/chart/events-load/
     *         Alert on chart load
     * @sample {highcharts} highcharts/chart/events-render/
     *         Load vs Redraw vs Render
     * @sample {highstock} stock/chart/events-load/
     *         Alert on chart load
     * @sample {highmaps} maps/chart/events-load/
     *         Add series on chart load
     *
     * @type      {Highcharts.ChartLoadCallbackFunction}
     * @context   Highcharts.Chart
     * @apioption chart.events.load
     */
    /**
     * Fires when the chart is redrawn, either after a call to
     * `chart.redraw()` or after an axis, series or point is modified with
     * the `redraw` option set to `true`. One parameter, `event`, is passed
     * to the function, containing common event information.
     *
     * @sample {highcharts} highcharts/chart/events-redraw/
     *         Alert on chart redraw
     * @sample {highcharts} highcharts/chart/events-render/
     *         Load vs Redraw vs Render
     * @sample {highstock} stock/chart/events-redraw/
     *         Alert on chart redraw when adding a series or moving the
     *         zoomed range
     * @sample {highmaps} maps/chart/events-redraw/
     *         Set subtitle on chart redraw
     *
     * @type      {Highcharts.ChartRedrawCallbackFunction}
     * @since     1.2.0
     * @context   Highcharts.Chart
     * @apioption chart.events.redraw
     */
    /**
     * Fires after initial load of the chart (directly after the `load`
     * event), and after each redraw (directly after the `redraw` event).
     *
     * @sample {highcharts} highcharts/chart/events-render/
     *         Load vs Redraw vs Render
     *
     * @type      {Highcharts.ChartRenderCallbackFunction}
     * @since     5.0.7
     * @context   Highcharts.Chart
     * @apioption chart.events.render
     */
    /**
     * Fires when an area of the chart has been selected. Selection is
     * enabled by setting the chart's zoomType. One parameter, `event`, is
     * passed to the function, containing common event information. The
     * default action for the selection event is to zoom the chart to the
     * selected area. It can be prevented by calling
     * `event.preventDefault()` or return false.
     *
     * Information on the selected area can be found through `event.xAxis`
     * and `event.yAxis`, which are arrays containing the axes of each
     * dimension and each axis' min and max values. The primary axes are
     * `event.xAxis[0]` and `event.yAxis[0]`. Remember the unit of a
     * datetime axis is milliseconds since 1970-01-01 00:00:00.
     *
     * ```js
     * selection: function(event) {
     *     // log the min and max of the primary, datetime x-axis
     *     console.log(
     *         Highcharts.dateFormat(
     *             '%Y-%m-%d %H:%M:%S',
     *             event.xAxis[0].min
     *         ),
     *         Highcharts.dateFormat(
     *             '%Y-%m-%d %H:%M:%S',
     *             event.xAxis[0].max
     *         )
     *     );
     *     // log the min and max of the y axis
     *     console.log(event.yAxis[0].min, event.yAxis[0].max);
     * }
     * ```
     *
     * @sample {highcharts} highcharts/chart/events-selection/
     *         Report on selection and reset
     * @sample {highcharts} highcharts/chart/events-selection-points/
     *         Select a range of points through a drag selection
     * @sample {highstock} stock/chart/events-selection/
     *         Report on selection and reset
     * @sample {highstock} highcharts/chart/events-selection-points/
     *         Select a range of points through a drag selection
     *         (Highcharts)
     *
     * @type      {Highcharts.ChartSelectionCallbackFunction}
     * @apioption chart.events.selection
     */
    /**
     * The margin between the outer edge of the chart and the plot area.
     * The numbers in the array designate top, right, bottom and left
     * respectively. Use the options `marginTop`, `marginRight`,
     * `marginBottom` and `marginLeft` for shorthand setting of one option.
     *
     * By default there is no margin. The actual space is dynamically
     * calculated from the offset of axis labels, axis title, title,
     * subtitle and legend in addition to the `spacingTop`, `spacingRight`,
     * `spacingBottom` and `spacingLeft` options.
     *
     * @sample {highcharts} highcharts/chart/margins-zero/
     *         Zero margins
     * @sample {highstock} stock/chart/margin-zero/
     *         Zero margins
     *
     * @type      {number|Array<number>}
     * @apioption chart.margin
     */
    /**
     * The margin between the bottom outer edge of the chart and the plot
     * area. Use this to set a fixed pixel value for the margin as opposed
     * to the default dynamic margin. See also `spacingBottom`.
     *
     * @sample {highcharts} highcharts/chart/marginbottom/
     *         100px bottom margin
     * @sample {highstock} stock/chart/marginbottom/
     *         100px bottom margin
     * @sample {highmaps} maps/chart/margin/
     *         100px margins
     *
     * @type      {number}
     * @since     2.0
     * @apioption chart.marginBottom
     */
    /**
     * The margin between the left outer edge of the chart and the plot
     * area. Use this to set a fixed pixel value for the margin as opposed
     * to the default dynamic margin. See also `spacingLeft`.
     *
     * @sample {highcharts} highcharts/chart/marginleft/
     *         150px left margin
     * @sample {highstock} stock/chart/marginleft/
     *         150px left margin
     * @sample {highmaps} maps/chart/margin/
     *         100px margins
     *
     * @type      {number}
     * @since     2.0
     * @apioption chart.marginLeft
     */
    /**
     * The margin between the right outer edge of the chart and the plot
     * area. Use this to set a fixed pixel value for the margin as opposed
     * to the default dynamic margin. See also `spacingRight`.
     *
     * @sample {highcharts} highcharts/chart/marginright/
     *         100px right margin
     * @sample {highstock} stock/chart/marginright/
     *         100px right margin
     * @sample {highmaps} maps/chart/margin/
     *         100px margins
     *
     * @type      {number}
     * @since     2.0
     * @apioption chart.marginRight
     */
    /**
     * The margin between the top outer edge of the chart and the plot area.
     * Use this to set a fixed pixel value for the margin as opposed to
     * the default dynamic margin. See also `spacingTop`.
     *
     * @sample {highcharts} highcharts/chart/margintop/ 100px top margin
     * @sample {highstock} stock/chart/margintop/
     *         100px top margin
     * @sample {highmaps} maps/chart/margin/
     *         100px margins
     *
     * @type      {number}
     * @since     2.0
     * @apioption chart.marginTop
     */
    /**
     * Callback function to override the default function that formats all
     * the numbers in the chart. Returns a string with the formatted number.
     *
     * @sample highcharts/members/highcharts-numberformat
     *      Arabic digits in Highcharts
     * @type {Highcharts.NumberFormatterCallbackFunction}
     * @since 8.0.0
     * @apioption chart.numberFormatter
     */
    /**
     * When a chart with an x and a y-axis is rendered, we first pre-render the
     * labels of both in order to measure them. Then, if either of the axis
     * labels take up so much space that it significantly affects the length of
     * the other axis, we repeat the process.
     *
     * By default we stop at two axis layout runs, but it may be that the second
     * run also alter the space required by either axis, for example if it
     * causes the labels to rotate. In this situation, a subsequent redraw of
     * the chart may cause the tick and label placement to change for apparently
     * no reason.
     *
     * Use the `axisLayoutRuns` option to set the maximum allowed number of
     * repetitions. But keep in mind that the default value of 2 is set because
     * every run costs performance time.
     *
     * **Note:** Changing that option to higher than the default might decrease
     * performance significantly, especially with bigger sets of data.
     *
     * @type      {number}
     * @default   2
     * @since     11.3.0
     * @apioption chart.axisLayoutRuns
     */
    /**
     * Allows setting a key to switch between zooming and panning. Can be
     * one of `alt`, `ctrl`, `meta` (the command key on Mac and Windows
     * key on Windows) or `shift`. The keys are mapped directly to the key
     * properties of the click event argument (`event.altKey`,
     * `event.ctrlKey`, `event.metaKey` and `event.shiftKey`).
     *
     * @type       {string}
     * @since      4.0.3
     * @product    highcharts gantt
     * @validvalue ["alt", "ctrl", "meta", "shift"]
     * @apioption  chart.panKey
     */
    /**
     * Allow panning in a chart. Best used with [panKey](#chart.panKey)
     * to combine zooming and panning.
     *
     * On touch devices, when the [tooltip.followTouchMove](
     * #tooltip.followTouchMove) option is `true` (default), panning
     * requires two fingers. To allow panning with one finger, set
     * `followTouchMove` to `false`.
     *
     * @sample  {highcharts} highcharts/chart/pankey/ Zooming and panning
     * @sample  {highstock} stock/chart/panning/ Zooming and xy panning
     */
    panning: {
        /**
         * Enable or disable chart panning.
         *
         * @type      {boolean}
         * @default   {highcharts} false
         * @default   {highstock|highmaps} true
         */
        enabled: false,
        /**
         * Decides in what dimensions the user can pan the chart. Can be
         * one of `x`, `y`, or `xy`.
         *
         * During panning, all axes will behave as if
         * [`startOnTick`](#yAxis.startOnTick) and
         * [`endOnTick`](#yAxis.endOnTick) were set to `false`. After the
         * panning action is finished, the axes will adjust to their actual
         * settings.
         *
         * @sample {highcharts} highcharts/chart/panning-type
         *         Zooming and xy panning
         *
         * @declare    Highcharts.OptionsChartPanningTypeValue
         * @type       {string}
         * @validvalue ["x", "y", "xy"]
         * @product    highcharts highstock gantt
         */
        type: 'x'
    },
    /**
     * Equivalent to [zoomType](#chart.zoomType), but for multitouch
     * gestures only. By default, the `pinchType` is the same as the
     * `zoomType` setting. However, pinching can be enabled separately in
     * some cases, for example in stock charts where a mouse drag pans the
     * chart, while pinching is enabled. When [tooltip.followTouchMove](
     * #tooltip.followTouchMove) is true, pinchType only applies to
     * two-finger touches.
     *
     * @type       {string}
     * @default    {highcharts} undefined
     * @default    {highstock} undefined
     * @since      3.0
     * @product    highcharts highstock gantt
     * @deprecated
     * @validvalue ["x", "y", "xy"]
     * @apioption  chart.pinchType
     */
    /**
     * Whether to apply styled mode. When in styled mode, no presentational
     * attributes or CSS are applied to the chart SVG. Instead, CSS rules
     * are required to style the chart. The default style sheet is
     * available from `https://code.highcharts.com/css/highcharts.css`.
     *
     * [Read more in the docs](https://www.highcharts.com/docs/chart-design-and-style/style-by-css)
     * on what classes and variables are available.
     *
     * @sample highcharts/css/colors
     *         Color theming with CSS
     * @sample highcharts/css/prefers-color-scheme
     *         Dynamic theme based on system settings
     * @type       {boolean}
     * @default    false
     * @since      7.0
     * @apioption  chart.styledMode
     */
    styledMode: false,
    /**
     * The corner radius of the outer chart border.
     *
     * @sample {highcharts} highcharts/chart/borderradius/
     *         20px radius
     * @sample {highstock} stock/chart/border/
     *         10px radius
     * @sample {highmaps} maps/chart/border/
     *         Border options
     *
     */
    borderRadius: 0,
    /**
     * In styled mode, this sets how many colors the class names
     * should rotate between. With ten colors, series (or points) are
     * given class names like `highcharts-color-0`, `highcharts-color-1`
     * [...] `highcharts-color-9`. The equivalent in non-styled mode
     * is to set colors using the [colors](#colors) setting.
     *
     * @since      5.0.0
     */
    colorCount: 10,
    /**
     * By default, (because of memory and performance reasons) the chart does
     * not copy the data but keeps it as a reference. In some cases, this might
     * result in mutating the original data source. In order to prevent that,
     * set that property to false. Please note that changing that might decrease
     * performance, especially with bigger sets of data.
     *
     * @type       {boolean}
     * @since 10.1.0
     */
    allowMutatingData: true,
    /**
     * If true, the axes will scale to the remaining visible series once
     * one series is hidden. If false, hiding and showing a series will
     * not affect the axes or the other series. For stacks, once one series
     * within the stack is hidden, the rest of the stack will close in
     * around it even if the axis is not affected.
     *
     * @sample {highcharts} highcharts/chart/ignorehiddenseries-true/
     *         True by default
     * @sample {highcharts} highcharts/chart/ignorehiddenseries-false/
     *         False
     * @sample {highcharts} highcharts/chart/ignorehiddenseries-true-stacked/
     *         True with stack
     * @sample {highstock} stock/chart/ignorehiddenseries-true/
     *         True by default
     * @sample {highstock} stock/chart/ignorehiddenseries-false/
     *         False
     *
     * @since   1.2.0
     * @product highcharts highstock gantt
     */
    ignoreHiddenSeries: true,
    /**
     * Whether to invert the axes so that the x axis is vertical and y axis
     * is horizontal. When `true`, the x axis is [reversed](#xAxis.reversed)
     * by default.
     *
     * @productdesc {highcharts}
     * If a bar series is present in the chart, it will be inverted
     * automatically. Inverting the chart doesn't have an effect if there
     * are no cartesian series in the chart.
     *
     * @sample {highcharts} highcharts/chart/inverted/
     *         Inverted line
     * @sample {highstock} stock/navigator/inverted/
     *         Inverted stock chart
     *
     * @type      {boolean}
     * @default   false
     * @product   highcharts highstock gantt
     * @apioption chart.inverted
     */
    /**
     * The distance between the outer edge of the chart and the content,
     * like title or legend, or axis title and labels if present. The
     * numbers in the array designate top, right, bottom and left
     * respectively. Use the options spacingTop, spacingRight, spacingBottom
     * and spacingLeft options for shorthand setting of one option.
     *
     * @type    {Array<number>}
     * @see     [chart.margin](#chart.margin)
     * @default [10, 10, 15, 10]
     * @since   3.0.6
     */
    spacing: [10, 10, 15, 10],
    /**
     * The button that appears after a selection zoom, allowing the user
     * to reset zoom. This option is deprecated in favor of
     * [zooming](#chart.zooming).
     *
     * @since      2.2
     * @deprecated 10.2.1
     */
    resetZoomButton: {
        /**
         * What frame the button placement should be related to. Can be
         * either `plotBox` or `spacingBox`.
         *
         * @sample {highcharts} highcharts/chart/resetzoombutton-relativeto/
         *         Relative to the chart
         * @sample {highstock} highcharts/chart/resetzoombutton-relativeto/
         *         Relative to the chart
         *
         * @type      {Highcharts.ButtonRelativeToValue}
         * @apioption chart.resetZoomButton.relativeTo
         */
        /**
         * A collection of attributes for the button. The object takes SVG
         * attributes like `fill`, `stroke`, `stroke-width` or `r`, the
         * border radius. The theme also supports `style`, a collection of
         * CSS properties for the text. Equivalent attributes for the hover
         * state are given in `theme.states.hover`.
         *
         * @sample {highcharts} highcharts/chart/resetzoombutton-theme/
         *         Theming the button
         * @sample {highstock} highcharts/chart/resetzoombutton-theme/
         *         Theming the button
         *
         * @type {Highcharts.SVGAttributes}
         */
        theme: {
        /**
         * The z-index of the button.
         *
         * @type {number}
         * @apioption chart.resetZoomButton.theme.zIndex
         */
        },
        /**
         * The position of the button.
         *
         * @sample {highcharts} highcharts/chart/resetzoombutton-position/
         *         Above the plot area
         * @sample {highstock} highcharts/chart/resetzoombutton-position/
         *         Above the plot area
         * @sample {highmaps} highcharts/chart/resetzoombutton-position/
         *         Above the plot area
         *
         * @type {Highcharts.AlignObject}
         */
        position: {
        /**
         * The horizontal alignment of the button.
         *
         * @type {number}
         * @apioption chart.resetZoomButton.position.align
         */
        /**
         * The horizontal offset of the button.
         *
         * @type {number}
         * @apioption chart.resetZoomButton.position.x
         */
        /**
         * The vertical alignment of the button.
         *
         * @type      {Highcharts.VerticalAlignValue}
         * @apioption chart.resetZoomButton.position.verticalAlign
         */
        /**
         * The vertical offset of the button.
         *
         * @type {number}
         * @apioption chart.resetZoomButton.position.y
         */
        }
    },
    /**
     * The pixel width of the plot area border.
     *
     * @sample {highcharts} highcharts/chart/plotborderwidth/
     *         1px border
     * @sample {highstock} stock/chart/plotborder/
     *         2px border
     * @sample {highmaps} maps/chart/plotborder/
     *         Plot border options
     *
     * @type      {number}
     * @default   0
     * @apioption chart.plotBorderWidth
     */
    /**
     * Whether to apply a drop shadow to the plot area. Requires that
     * plotBackgroundColor be set. The shadow can be an object configuration
     * containing `color`, `offsetX`, `offsetY`, `opacity` and `width`.
     *
     * @sample {highcharts} highcharts/chart/plotshadow/
     *         Plot shadow
     * @sample {highstock} stock/chart/plotshadow/
     *         Plot shadow
     * @sample {highmaps} maps/chart/plotborder/
     *         Plot border options
     *
     * @type      {boolean|Highcharts.ShadowOptionsObject}
     * @default   false
     * @apioption chart.plotShadow
     */
    /**
     * When true, cartesian charts like line, spline, area and column are
     * transformed into the polar coordinate system. This produces _polar
     * charts_, also known as _radar charts_.
     *
     * @sample {highcharts} highcharts/demo/polar/
     *         Polar chart
     * @sample {highcharts} highcharts/demo/polar-wind-rose/
     *         Wind rose, stacked polar column chart
     * @sample {highcharts} highcharts/demo/polar-spider/
     *         Spider web chart
     * @sample {highcharts} highcharts/parallel-coordinates/polar/
     *         Star plot, multivariate data in a polar chart
     *
     * @type      {boolean}
     * @default   false
     * @since     2.3.0
     * @product   highcharts
     * @requires  highcharts-more
     * @apioption chart.polar
     */
    /**
     * Whether to reflow the chart to fit the width of the container div
     * on resizing the window.
     *
     * @sample {highcharts} highcharts/chart/reflow-true/
     *         True by default
     * @sample {highcharts} highcharts/chart/reflow-false/
     *         False
     * @sample {highstock} stock/chart/reflow-true/
     *         True by default
     * @sample {highstock} stock/chart/reflow-false/
     *         False
     * @sample {highmaps} maps/chart/reflow-true/
     *         True by default
     * @sample {highmaps} maps/chart/reflow-false/
     *         False
     *
     * @since     2.1
     */
    reflow: true,
    /**
     * The HTML element where the chart will be rendered. If it is a string,
     * the element by that id is used. The HTML element can also be passed
     * by direct reference, or as the first argument of the chart
     * constructor, in which case the option is not needed.
     *
     * @sample {highcharts} highcharts/chart/reflow-true/
     *         String
     * @sample {highcharts} highcharts/chart/renderto-object/
     *         Object reference
     * @sample {highstock} stock/chart/renderto-string/
     *         String
     * @sample {highstock} stock/chart/renderto-object/
     *         Object reference
     *
     * @type      {string|Highcharts.HTMLDOMElement}
     * @apioption chart.renderTo
     */
    /**
     * The background color of the marker square when selecting (zooming
     * in on) an area of the chart.
     *
     * @see In styled mode, the selection marker fill is set with the
     *      `.highcharts-selection-marker` class.
     *
     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @default   rgba(51,92,173,0.25)
     * @since     2.1.7
     * @apioption chart.selectionMarkerFill
     */
    /**
     * Whether to apply a drop shadow to the global series group. This causes
     * all the series to have the same shadow. Contrary to the `series.shadow`
     * option, this prevents items from casting shadows on each other, like for
     * others series in a stack. The shadow can be an object configuration
     * containing `color`, `offsetX`, `offsetY`, `opacity` and `width`.
     *
     * @sample highcharts/chart/seriesgroupshadow/ Shadow
     *
     * @type      {boolean|Highcharts.ShadowOptionsObject}
     * @default   false
     * @apioption chart.shadow
     */
    /**
     * Whether to apply a drop shadow to the outer chart area. Requires
     * that backgroundColor be set. The shadow can be an object
     * configuration containing `color`, `offsetX`, `offsetY`, `opacity` and
     * `width`.
     *
     * @sample {highcharts} highcharts/chart/shadow/
     *         Shadow
     * @sample {highstock} stock/chart/shadow/
     *         Shadow
     * @sample {highmaps} maps/chart/border/
     *         Chart border and shadow
     *
     * @type      {boolean|Highcharts.ShadowOptionsObject}
     * @default   false
     * @apioption chart.shadow
     */
    /**
     * Whether to show the axes initially. This only applies to empty charts
     * where series are added dynamically, as axes are automatically added
     * to cartesian series.
     *
     * @sample {highcharts} highcharts/chart/showaxes-false/
     *         False by default
     * @sample {highcharts} highcharts/chart/showaxes-true/
     *         True
     *
     * @type      {boolean}
     * @since     1.2.5
     * @product   highcharts gantt
     * @apioption chart.showAxes
     */
    /**
     * The space between the bottom edge of the chart and the content (plot
     * area, axis title and labels, title, subtitle or legend in top
     * position).
     *
     * @sample {highcharts} highcharts/chart/spacingbottom/
     *         Spacing bottom set to 100
     * @sample {highstock} stock/chart/spacingbottom/
     *         Spacing bottom set to 100
     * @sample {highmaps} maps/chart/spacing/
     *         Spacing 100 all around
     *
     * @type      {number}
     * @default   15
     * @since     2.1
     * @apioption chart.spacingBottom
     */
    /**
     * The space between the left edge of the chart and the content (plot
     * area, axis title and labels, title, subtitle or legend in top
     * position).
     *
     * @sample {highcharts} highcharts/chart/spacingleft/
     *         Spacing left set to 100
     * @sample {highstock} stock/chart/spacingleft/
     *         Spacing left set to 100
     * @sample {highmaps} maps/chart/spacing/
     *         Spacing 100 all around
     *
     * @type      {number}
     * @default   10
     * @since     2.1
     * @apioption chart.spacingLeft
     */
    /**
     * The space between the right edge of the chart and the content (plot
     * area, axis title and labels, title, subtitle or legend in top
     * position).
     *
     * @sample {highcharts} highcharts/chart/spacingright-100/
     *         Spacing set to 100
     * @sample {highcharts} highcharts/chart/spacingright-legend/
     *         Legend in right position with default spacing
     * @sample {highstock} stock/chart/spacingright/
     *         Spacing set to 100
     * @sample {highmaps} maps/chart/spacing/
     *         Spacing 100 all around
     *
     * @type      {number}
     * @default   10
     * @since     2.1
     * @apioption chart.spacingRight
     */
    /**
     * The space between the top edge of the chart and the content (plot
     * area, axis title and labels, title, subtitle or legend in top
     * position).
     *
     * @sample {highcharts} highcharts/chart/spacingtop-100/
     *         A top spacing of 100
     * @sample {highcharts} highcharts/chart/spacingtop-10/
     *         Floating chart title makes the plot area align to the default
     *         spacingTop of 10.
     * @sample {highstock} stock/chart/spacingtop/
     *         A top spacing of 100
     * @sample {highmaps} maps/chart/spacing/
     *         Spacing 100 all around
     *
     * @type      {number}
     * @default   10
     * @since     2.1
     * @apioption chart.spacingTop
     */
    /**
     * Additional CSS styles to apply inline to the container `div` and the root
     * SVG.
     *
     * According to the CSS syntax documentation, it is recommended to quote
     * font family names that contain white space, digits, or punctuation
     * characters other than hyphens. In such cases, wrap the fontFamily
     * name as follows: `fontFamily: '"Font name"'`.
     *
     * Since v11, the root font size is 1rem by default, and all child element
     * are given a relative `em` font size by default. This allows implementers
     * to control all the chart's font sizes by only setting the root level.
     *
     * @see    In styled mode, general chart styles can be set with the
     *         `.highcharts-root` class.
     * @sample {highcharts} highcharts/chart/style-serif-font/
     *         Using a serif type font
     * @sample {highcharts} highcharts/chart/style-special-font/
     *         Using a font with special character in name
     * @sample {highcharts} highcharts/members/relative-font-size/
     *         Relative font sizes
     * @sample {highcharts} highcharts/css/em/
     *         Styled mode with relative font sizes
     * @sample {highstock} stock/chart/style/
     *         Using a serif type font
     * @sample {highmaps} maps/chart/style-serif-font/
     *         Using a serif type font
     *
     * @type      {Highcharts.CSSObject}
     * @default   {"fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif", "fontSize":"1rem"}
     * @apioption chart.style
     */
    /**
     * The default series type for the chart. Can be any of the chart types
     * listed under [plotOptions](#plotOptions) and [series](#series) or can
     * be a series provided by an additional module.
     *
     * In TypeScript this option has no effect in sense of typing and
     * instead the `type` option must always be set in the series.
     *
     * @sample {highcharts} highcharts/chart/type-bar/
     *         Bar
     * @sample {highstock} stock/chart/type/
     *         Areaspline
     * @sample {highmaps} maps/chart/type-mapline/
     *         Mapline
     *
     * @type       {string}
     * @default    {highcharts} line
     * @default    {highstock} line
     * @default    {highmaps} map
     * @since      2.1.0
     * @apioption  chart.type
     */
    type: 'line',
    /**
     * Decides in what dimensions the user can zoom by dragging the mouse.
     * Can be one of `x`, `y` or `xy`.
     *
     * @see [panKey](#chart.panKey)
     *
     * @sample {highcharts} highcharts/chart/zoomtype-none/
     *         None by default
     * @sample {highcharts} highcharts/chart/zoomtype-x/
     *         X
     * @sample {highcharts} highcharts/chart/zoomtype-y/
     *         Y
     * @sample {highcharts} highcharts/chart/zoomtype-xy/
     *         Xy
     * @sample {highcharts} highcharts/chart/zoomtype-polar/
     *         Zoom on polar chart
     * @sample {highstock} stock/demo/basic-line/
     *         None by default
     * @sample {highstock} stock/chart/zoomtype-x/
     *         X
     * @sample {highstock} stock/chart/zoomtype-y/
     *         Y
     * @sample {highstock} stock/chart/zoomtype-xy/
     *         Xy
     * @sample {highmaps} maps/chart/zoomtype-xy/
     *         Map with selection zoom
     *
     * @type       {string}
     * @validvalue ["x", "y", "xy"]
     * @deprecated
     * @apioption  chart.zoomType
     */
    /**
     * Enables zooming by a single touch, in combination with
     * [chart.zoomType](#chart.zoomType). When enabled, two-finger pinch
     * will still work as set up by [chart.pinchType](#chart.pinchType).
     * However, `zoomBySingleTouch` will interfere with touch-dragging the
     * chart to read the tooltip. And especially when vertical zooming is
     * enabled, it will make it hard to scroll vertically on the page.
     * @since      9.0.0
     * @sample     highcharts/chart/zoombysingletouch
     *             Zoom by single touch enabled, with buttons to toggle
     * @product    highcharts highstock gantt
     * @deprecated
     */
    /**
     * Chart zooming options.
     * @since 10.2.1
     */
    zooming: {
        /**
         * Equivalent to [type](#chart.zooming.type), but for multitouch
         * gestures only. By default, the `pinchType` is the same as the
         * `type` setting. However, pinching can be enabled separately in
         * some cases, for example in stock charts where a mouse drag pans the
         * chart, while pinching is enabled. When [tooltip.followTouchMove](
         * #tooltip.followTouchMove) is true, pinchType only applies to
         * two-finger touches.
         *
         * @type       {string}
         * @default    {highcharts} undefined
         * @default    {highstock} x
         * @product    highcharts highstock gantt
         * @validvalue ["x", "y", "xy"]
         * @apioption  chart.zooming.pinchType
         */
        /**
         * Decides in what dimensions the user can zoom by dragging the mouse.
         * Can be one of `x`, `y` or `xy`.
         *
         * @declare    Highcharts.OptionsChartZoomingTypeValue
         * @type       {string}
         * @default    {highcharts} undefined
         * @product    highcharts highstock gantt
         * @validvalue ["x", "y", "xy"]
         * @apioption  chart.zooming.type
         */
        /**
         * Set a key to hold when dragging to zoom the chart. This is useful to
         * avoid zooming while moving points. Should be set different than
         * [chart.panKey](#chart.panKey).
         *
         * @type       {string}
         * @default    {highcharts} undefined
         * @validvalue ["alt", "ctrl", "meta", "shift"]
         * @requires   modules/draggable-points
         * @apioption  chart.zooming.key
         */
        /**
         * Enables zooming by a single touch, in combination with
         * [chart.zooming.type](#chart.zooming.type). When enabled, two-finger
         * pinch will still work as set up by [chart.zooming.pinchType]
         * (#chart.zooming.pinchType). However, `singleTouch` will interfere
         * with touch-dragging the chart to read the tooltip. And especially
         * when vertical zooming is enabled, it will make it hard to scroll
         * vertically on the page.
         *
         * @sample  highcharts/chart/zoombysingletouch
         *          Zoom by single touch enabled, with buttons to toggle
         *
         * @product highcharts highstock gantt
         */
        singleTouch: false,
        /**
         * The button that appears after a selection zoom, allowing the user
         * to reset zoom.
         */
        resetButton: {
            /**
             * What frame the button placement should be related to. Can be
             * either `plotBox` or `spacingBox`.
             *
             * @sample {highcharts} highcharts/chart/resetzoombutton-relativeto/
             *         Relative to the chart
             * @sample {highstock} highcharts/chart/resetzoombutton-relativeto/
             *         Relative to the chart
             *
             * @type      {Highcharts.ButtonRelativeToValue}
             * @default   plot
             * @apioption chart.zooming.resetButton.relativeTo
             */
            /**
             * A collection of attributes for the button. The object takes SVG
             * attributes like `fill`, `stroke`, `stroke-width` or `r`, the
             * border radius. The theme also supports `style`, a collection of
             * CSS properties for the text. Equivalent attributes for the hover
             * state are given in `theme.states.hover`.
             *
             * @sample {highcharts} highcharts/chart/resetzoombutton-theme/
             *         Theming the button
             * @sample {highstock} highcharts/chart/resetzoombutton-theme/
             *         Theming the button
             *
             * @type  {Highcharts.SVGAttributes}
             * @since 10.2.1
             */
            theme: {
                /** @internal */
                zIndex: 6
            },
            /**
             * The position of the button.
             *
             * Note: Adjusting position values might cause overlap with chart
             * elements. Ensure coordinates do not obstruct other components or
             * data visibility.
             *
             * @sample {highcharts} highcharts/chart/resetzoombutton-position/
             *         Above the plot area
             * @sample {highstock} highcharts/chart/resetzoombutton-position/
             *         Above the plot area
             * @sample {highmaps} highcharts/chart/resetzoombutton-position/
             *         Above the plot area
             *
             * @type  {Highcharts.AlignObject}
             * @since 10.2.1
             */
            position: {
                /**
                 * The horizontal alignment of the button.
                 */
                align: 'right',
                /**
                 * The horizontal offset of the button.
                 */
                x: -10,
                /**
                 * The vertical alignment of the button.
                 *
                 * @type       {Highcharts.VerticalAlignValue}
                 * @default    top
                 * @apioption  chart.zooming.resetButton.position.verticalAlign
                 */
                /**
                 * The vertical offset of the button.
                 */
                y: 10
            }
        }
    },
    /**
     * An explicit width for the chart. By default (when `null`) the width
     * is calculated from the offset width of the containing element.
     *
     * @sample {highcharts} highcharts/chart/width/
     *         800px wide
     * @sample {highstock} stock/chart/width/
     *         800px wide
     * @sample {highmaps} maps/chart/size/
     *         Chart with explicit size
     *
     * @type {null|number|string}
     */
    width: null,
    /**
     * An explicit height for the chart. If a _number_, the height is
     * given in pixels. If given a _percentage string_ (for example
     * `'56%'`), the height is given as the percentage of the actual chart
     * width. This allows for preserving the aspect ratio across responsive
     * sizes.
     *
     * By default (when `null`) the height is calculated from the offset
     * height of the containing element, or 400 pixels if the containing
     * element's height is 0.
     *
     * @sample {highcharts} highcharts/chart/height/
     *         Forced 200px height
     * @sample {highstock} stock/chart/height/
     *         300px height
     * @sample {highmaps} maps/chart/size/
     *         Chart with explicit size
     * @sample highcharts/chart/height-percent/
     *         Highcharts with percentage height
     * @sample highcharts/chart/height-inherited/
     *         Chart with inherited height
     *
     * @type {null|number|string}
     */
    height: null,
    /**
     * The color of the outer chart border.
     *
     * @see In styled mode, the stroke is set with the
     *      `.highcharts-background` class.
     *
     * @sample {highcharts} highcharts/chart/bordercolor/
     *         Brown border
     * @sample {highstock} stock/chart/border/
     *         Brown border
     * @sample {highmaps} maps/chart/border/
     *         Border options
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    borderColor: "#334eff" /* Palette.highlightColor80 */,
    /**
     * The pixel width of the outer chart border.
     *
     * @see In styled mode, the stroke is set with the
     *      `.highcharts-background` class.
     *
     * @sample {highcharts} highcharts/chart/borderwidth/
     *         5px border
     * @sample {highstock} stock/chart/border/
     *         2px border
     * @sample {highmaps} maps/chart/border/
     *         Border options
     *
     * @type      {number}
     * @default   0
     * @apioption chart.borderWidth
     */
    /**
     * The background color or gradient for the outer chart area.
     *
     * @see In styled mode, the background is set with the
     *      `.highcharts-background` class.
     *
     * @sample {highcharts} highcharts/chart/backgroundcolor-color/
     *         Color
     * @sample {highcharts} highcharts/chart/backgroundcolor-gradient/
     *         Gradient
     * @sample {highstock} stock/chart/backgroundcolor-color/
     *         Color
     * @sample {highstock} stock/chart/backgroundcolor-gradient/
     *         Gradient
     * @sample {highmaps} maps/chart/backgroundcolor-color/
     *         Color
     * @sample {highmaps} maps/chart/backgroundcolor-gradient/
     *         Gradient
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    backgroundColor: "#ffffff" /* Palette.backgroundColor */,
    /**
     * The background color or gradient for the plot area.
     *
     * @see In styled mode, the plot background is set with the
     *      `.highcharts-plot-background` class.
     *
     * @sample {highcharts} highcharts/chart/plotbackgroundcolor-color/
     *         Color
     * @sample {highcharts} highcharts/chart/plotbackgroundcolor-gradient/
     *         Gradient
     * @sample {highstock} stock/chart/plotbackgroundcolor-color/
     *         Color
     * @sample {highstock} stock/chart/plotbackgroundcolor-gradient/
     *         Gradient
     * @sample {highmaps} maps/chart/plotbackgroundcolor-color/
     *         Color
     * @sample {highmaps} maps/chart/plotbackgroundcolor-gradient/
     *         Gradient
     *
     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @apioption chart.plotBackgroundColor
     */
    /**
     * The URL for an image to use as the plot background. To set an image
     * as the background for the entire chart, set a CSS background image
     * to the container element. Note that for the image to be applied to
     * exported charts, its URL needs to be accessible by the export server.
     *
     * @see In styled mode, a plot background image can be set with the
     *      `.highcharts-plot-background` class and a [custom pattern](
     *      https://www.highcharts.com/docs/chart-design-and-style/gradients-shadows-and-patterns).
     *
     * @sample {highcharts} highcharts/chart/plotbackgroundimage/
     *         Skies
     * @sample {highstock} stock/chart/plotbackgroundimage/
     *         Skies
     *
     * @type      {string}
     * @apioption chart.plotBackgroundImage
     */
    /**
     * The color of the inner chart or plot area border.
     *
     * @see In styled mode, a plot border stroke can be set with the
     *      `.highcharts-plot-border` class.
     *
     * @sample {highcharts} highcharts/chart/plotbordercolor/
     *         Blue border
     * @sample {highstock} stock/chart/plotborder/
     *         Blue border
     * @sample {highmaps} maps/chart/plotborder/
     *         Plot border options
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    plotBorderColor: "#cccccc" /* Palette.neutralColor20 */
};
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Chart_ChartDefaults = (ChartDefaults);

;// ./code/grid/es-modules/Core/Color/Palettes.js
/**
 * Series palettes for Highcharts. Series colors are defined in highcharts.css.
 * **Do not edit this file!** This file is generated using the 'gulp palette' task.
 * @private
 */
const SeriesPalettes = {
    /**
     * Colors for data series and points
     */
    colors: [
        '#2caffe',
        '#544fc5',
        '#00e272',
        '#fe6a35',
        '#6b8abc',
        '#d568fb',
        '#2ee0ca',
        '#fa4b42',
        '#feb56a',
        '#91e8e1'
    ],
};
/* harmony default export */ const Palettes = (SeriesPalettes);

;// ./code/grid/es-modules/Shared/TimeBase.js
/* *
 *
 *  (c) 2010-2024 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { pageLang, win: TimeBase_win } = Core_Globals;

const { defined: TimeBase_defined, error: TimeBase_error, extend: TimeBase_extend, isNumber: TimeBase_isNumber, isObject: TimeBase_isObject, isString: TimeBase_isString, merge: TimeBase_merge, objectEach: TimeBase_objectEach, pad: TimeBase_pad, splat: TimeBase_splat, timeUnits: TimeBase_timeUnits, ucfirst: TimeBase_ucfirst } = Core_Utilities;
/* *
 *
 *  Constants
 *
 * */
// To do: Remove this when we no longer need support for Safari < v14.1
const hasOldSafariBug = Core_Globals.isSafari &&
    TimeBase_win.Intl &&
    !TimeBase_win.Intl.DateTimeFormat.prototype.formatRange;
const isDateTimeFormatOptions = (obj) => obj.main === void 0;
/* *
 *
 *  Class
 *
 * */
/* eslint-disable no-invalid-this, valid-jsdoc */
/**
 * The Time class. Time settings are applied in general for each page using
 * `Highcharts.setOptions`, or individually for each Chart item through the
 * [time](https://api.highcharts.com/highcharts/time) options set.
 *
 * The Time object is available from {@link Highcharts.Chart#time}, which refers
 * to  `Highcharts.time` unless individual time settings are applied for each
 * chart.
 *
 * When configuring time settings for individual chart instances, be aware that
 * using `Highcharts.dateFormat` or `Highcharts.time.dateFormat` within
 * formatter callbacks relies on the global time object, which applies the
 * global language and time zone settings. To ensure charts with local time
 * settings function correctly, use `chart.time.dateFormat? instead. However,
 * the recommended best practice is to use `setOptions` to define global time
 * settings unless specific configurations are needed for each chart.
 *
 * @example
 * // Apply time settings globally
 * Highcharts.setOptions({
 *     time: {
 *         timezone: 'Europe/London'
 *     }
 * });
 *
 * // Apply time settings by instance
 * const chart = Highcharts.chart('container', {
 *     time: {
 *         timezone: 'America/New_York'
 *     },
 *     series: [{
 *         data: [1, 4, 3, 5]
 *     }]
 * });
 *
 * // Use the Time object of a chart instance
 * console.log(
 *        'Current time in New York',
 *        chart.time.dateFormat('%Y-%m-%d %H:%M:%S', Date.now())
 * );
 *
 * // Standalone use
 * const time = new Highcharts.Time({
 *    timezone: 'America/New_York'
 * });
 * const s = time.dateFormat('%Y-%m-%d %H:%M:%S', Date.UTC(2020, 0, 1));
 * console.log(s); // => 2019-12-31 19:00:00
 *
 * @since 6.0.5
 *
 * @class
 * @name Highcharts.Time
 *
 * @param {Highcharts.TimeOptions} [options] Time options as defined in
 * [chart.options.time](/highcharts/time).
 */
class TimeBase {
    /* *
     *
     *  Constructors
     *
     * */
    constructor(options, lang) {
        /* *
         *
         *  Properties
         *
         * */
        this.options = {
            timezone: 'UTC'
        };
        this.variableTimezone = false;
        this.Date = TimeBase_win.Date;
        this.update(options);
        this.lang = lang;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Update the Time object with current options. It is called internally on
     * initializing Highcharts, after running `Highcharts.setOptions` and on
     * `Chart.update`.
     *
     * @private
     * @function Highcharts.Time#update
     *
     * @param {Highcharts.TimeOptions} [options]
     *
     */
    update(options = {}) {
        this.dTLCache = {};
        this.options = options = TimeBase_merge(true, this.options, options);
        const { timezoneOffset, useUTC } = options;
        // Allow using a different Date class
        this.Date = options.Date || TimeBase_win.Date || Date;
        // Assign the time zone. Handle the legacy, deprecated `useUTC` option.
        let timezone = options.timezone;
        if (TimeBase_defined(useUTC)) {
            timezone = useUTC ? 'UTC' : void 0;
        }
        // The Etc/GMT time zones do not support offsets with half-hour
        // resolutions
        if (timezoneOffset && timezoneOffset % 60 === 0) {
            timezone = 'Etc/GMT' + ((timezoneOffset > 0 ? '+' : '')) + timezoneOffset / 60;
        }
        /*
         * The time object has options allowing for variable time zones, meaning
         * the axis ticks or series data needs to consider this.
         */
        this.variableTimezone = timezone !== 'UTC' &&
            timezone?.indexOf('Etc/GMT') !== 0;
        this.timezone = timezone;
        // Assign default time formats from locale strings
        ['months', 'shortMonths', 'weekdays', 'shortWeekdays'].forEach((name) => {
            const isMonth = /months/i.test(name), isShort = /short/.test(name), options = {
                timeZone: 'UTC'
            };
            options[isMonth ? 'month' : 'weekday'] = isShort ? 'short' : 'long';
            this[name] = (isMonth ?
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] :
                [3, 4, 5, 6, 7, 8, 9]).map((position) => this.dateFormat(options, (isMonth ? 31 : 1) * 24 * 36e5 * position));
        });
    }
    /**
     * Get a date in terms of numbers (year, month, day etc) for further
     * processing. Takes the current `timezone` setting into account. Inverse of
     * `makeTime` and the native `Date` constructor and `Date.UTC`.
     *
     * The date is returned in array format with the following indices:
     *
     * 0: year,
     * 1: month (zero based),
     * 2: day,
     * 3: hours,
     * 4: minutes,
     * 5: seconds,
     * 6: milliseconds,
     * 7: weekday (Sunday as 0)
     *
     * @function Highcharts.Time#toParts
     *
     * @param {number|Date} [timestamp]
     *                 The timestamp in milliseconds since January 1st 1970.
     *                 A Date object is also accepted.
     *
     * @return {Array<number>} The date parts in array format.
     */
    toParts(timestamp) {
        const [weekday, dayOfMonth, month, year, hours, minutes, seconds] = this.dateTimeFormat({
            weekday: 'narrow',
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }, timestamp, 'es')
            // The ', ' splitter is for all modern browsers:
            //      L, 6/3/2023, 14:30:00
            // The ' ' splitter is for legacy Safari with no comma between date
            // and time (#22445):
            //      L, 6/3/2023 14:30:00
            .split(/(?:, | |\/|:)/g);
        return [
            year,
            +month - 1,
            dayOfMonth,
            hours,
            minutes,
            seconds,
            // Milliseconds
            Math.floor(Number(timestamp) || 0) % 1000,
            // Spanish weekday index
            'DLMXJVS'.indexOf(weekday)
        ].map(Number);
    }
    /**
     * Shorthand to get a cached `Intl.DateTimeFormat` instance.
     */
    dateTimeFormat(options, timestamp, locale = this.options.locale || pageLang) {
        const cacheKey = JSON.stringify(options) + locale;
        if (TimeBase_isString(options)) {
            options = this.str2dtf(options);
        }
        let dTL = this.dTLCache[cacheKey];
        if (!dTL) {
            options.timeZone ?? (options.timeZone = this.timezone);
            try {
                dTL = new Intl.DateTimeFormat(locale, options);
            }
            catch (e) {
                if (/Invalid time zone/i.test(e.message)) {
                    TimeBase_error(34);
                    options.timeZone = 'UTC';
                    dTL = new Intl.DateTimeFormat(locale, options);
                }
                else {
                    TimeBase_error(e.message, false);
                }
            }
        }
        this.dTLCache[cacheKey] = dTL;
        return dTL?.format(timestamp) || '';
    }
    /**
     * Take a locale-aware string format and return a full DateTimeFormat in
     * object form.
     */
    str2dtf(s, dtf = {}) {
        const mapping = {
            L: { fractionalSecondDigits: 3 },
            S: { second: '2-digit' },
            M: { minute: 'numeric' },
            H: { hour: '2-digit' },
            k: { hour: 'numeric' },
            E: { weekday: 'narrow' },
            a: { weekday: 'short' },
            A: { weekday: 'long' },
            d: { day: '2-digit' },
            e: { day: 'numeric' },
            b: { month: 'short' },
            B: { month: 'long' },
            m: { month: '2-digit' },
            o: { month: 'numeric' },
            y: { year: '2-digit' },
            Y: { year: 'numeric' }
        };
        Object.keys(mapping).forEach((key) => {
            if (s.indexOf(key) !== -1) {
                TimeBase_extend(dtf, mapping[key]);
            }
        });
        return dtf;
    }
    /**
     * Make a time and returns milliseconds. Similar to `Date.UTC`, but takes
     * the current `timezone` setting into account.
     *
     * @function Highcharts.Time#makeTime
     *
     * @param {number} year
     *        The year
     *
     * @param {number} month
     *        The month. Zero-based, so January is 0.
     *
     * @param {number} [date=1]
     *        The day of the month
     *
     * @param {number} [hours=0]
     *        The hour of the day, 0-23.
     *
     * @param {number} [minutes=0]
     *        The minutes
     *
     * @param {number} [seconds=0]
     *        The seconds
     *
     * @return {number}
     *         The time in milliseconds since January 1st 1970.
     */
    makeTime(year, month, date = 1, hours = 0, minutes, seconds, milliseconds) {
        // eslint-disable-next-line new-cap
        let d = this.Date.UTC(year, month, date, hours, minutes || 0, seconds || 0, milliseconds || 0);
        if (this.timezone !== 'UTC') {
            const offset = this.getTimezoneOffset(d);
            d += offset;
            // Adjustments close to DST transitions
            if (
            // Optimize for speed by limiting the number of calls to
            // `getTimezoneOffset`. According to
            // https://en.wikipedia.org/wiki/Daylight_saving_time_by_country,
            // DST change may only occur in these months.
            [2, 3, 8, 9, 10, 11].indexOf(month) !== -1 &&
                // DST transitions occur only in the night-time
                (hours < 5 || hours > 20)) {
                const newOffset = this.getTimezoneOffset(d);
                if (offset !== newOffset) {
                    d += newOffset - offset;
                    // A special case for transitioning from summer time to winter
                    // time. When the clock is set back, the same time is repeated
                    // twice, i.e. 02:30 am is repeated since the clock is set back
                    // from 3 am to 2 am. We need to make the same time as local
                    // Date does.
                }
                else if (offset - 36e5 === this.getTimezoneOffset(d - 36e5) &&
                    !hasOldSafariBug) {
                    d -= 36e5;
                }
            }
        }
        return d;
    }
    /**
     * Parse a datetime string. Unless the string contains time zone
     * information, apply the current `timezone` from options. If the argument
     * is a number, return it.
     *
     * @function Highcharts.Time#parse
     * @param    {string|number|undefined} s The datetime string to parse
     * @return   {number|undefined}          Parsed JavaScript timestamp
     */
    parse(s) {
        if (!TimeBase_isString(s)) {
            return s ?? void 0;
        }
        s = s
            // Firefox fails on YYYY/MM/DD
            .replace(/\//g, '-')
            // Replace some non-standard notations
            .replace(/(GMT|UTC)/, '');
        // Extend shorthand hour timezone offset like +02
        // .replace(/([+-][0-9]{2})$/, '$1:00');
        // Check if the string has time zone information
        const hasTimezone = s.indexOf('Z') > -1 ||
            /([+-][0-9]{2}):?[0-9]{2}$/.test(s), 
        // YYYY-MM-DD and YYYY-MM are always UTC
        isYYYYMMDD = /^[0-9]{4}-[0-9]{2}(-[0-9]{2}|)$/.test(s);
        if (!hasTimezone && !isYYYYMMDD) {
            s += 'Z';
        }
        const ts = Date.parse(s);
        if (TimeBase_isNumber(ts)) {
            // Unless the string contains time zone information, convert from
            // the local time result of `Date.parse` via UTC into the current
            // timezone of the time object.
            return ts + ((!hasTimezone || isYYYYMMDD) ?
                this.getTimezoneOffset(ts) :
                0);
        }
    }
    /**
     * Get the time zone offset based on the current timezone information as
     * set in the global options.
     *
     * @function Highcharts.Time#getTimezoneOffset
     *
     * @param {number} timestamp
     *        The JavaScript timestamp to inspect.
     *
     * @return {number}
     *         The timezone offset in minutes compared to UTC.
     */
    getTimezoneOffset(timestamp) {
        if (this.timezone !== 'UTC') {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const [date, gmt, hours, colon, minutes = 0] = this.dateTimeFormat({ timeZoneName: 'shortOffset' }, timestamp, 'en')
                .split(/(GMT|:)/)
                .map(Number), offset = -(hours + minutes / 60) * 60 * 60000;
            // Possible future NaNs stop here
            if (TimeBase_isNumber(offset)) {
                return offset;
            }
        }
        return 0;
    }
    /**
     * Formats a JavaScript date timestamp (milliseconds since January 1 1970)
     * into a human readable date string.
     *
     * The `format` parameter accepts two types of values:
     * - An object containing settings that are passed directly on to
     *   [Intl.DateTimeFormat.prototype.format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format).
     * - A format string containing either individual or locale-aware format
     *   keys. **Individual keys**, for example `%Y-%m-%d`, are listed below.
     *   **Locale-aware keys** are grouped by square brackets, for example
     *   `%[Ymd]`. The order of keys within the square bracket doesn't affect
     *   the output, which is determined by the locale. See example below.
     *   Internally, the locale-aware format keys are just a shorthand for the
     *   full object formats, but are particularly practical in
     *   [templating](https://www.highcharts.com/docs/chart-concepts/templating)
     *   where full object definitions are not an option.
     *
     * The available string format keys are listed below. Additional formats can
     * be given in the {@link Highcharts.dateFormats} hook.
     *
     * Supported format keys:
     * | Key  | Description                     | Notes on locale-aware format |
     * -------|----------------------------------------------|-------|
     * | `%A` | Long weekday, like 'Monday'                  |       |
     * | `%a` | Short weekday, like 'Mon'                    |       |
     * | `%E` | Narrow weekday, single character             |       |
     * | `%d` | Two digit day of the month, 01 to 31         |       |
     * | `%e` | Day of the month, 1 through 31               |       |
     * | `%w` | Day of the week, 0 through 6                 | N/A   |
     * | `%v` | The prefix "week from", read from `lang.weekFrom` | N/A |
     * | `%b` | Short month, like 'Jan'                      |       |
     * | `%B` | Long month, like 'January'                   |       |
     * | `%m` | Two digit month number, 01 through 12        |       |
     * | `%o` | Month number, 1 through 12                   |       |
     * | `%y` | Two digits year, like 24 for 2024            |       |
     * | `%Y` | Four digits year, like 2024                  |       |
     * | `%H` | Two digits hours in 24h format, 00 through 23 | Depending on the locale, 12h format may be instered. |
     * | `%k` | Hours in 24h format, 0 through 23            | Depending on the locale, 12h format may be instered. |
     * | `%I` | Two digits hours in 12h format, 00 through 11 | N/A. The locale determines the hour format. |
     * | `%l` | Hours in 12h format, 1 through 12            | N/A. The locale determines the hour format. |
     * | `%M` | Two digits minutes, 00 through 59            |       |
     * | `%p` | Upper case AM or PM                          | N/A. The locale determines whether to add AM and PM. |
     * | `%P` | Lower case AM or PM                          | N/A. The locale determines whether to add AM and PM. |
     * | `%S` | Two digits seconds, 00 through 59            |       |
     * | `%L` | Milliseconds (naming from Ruby)              |       |
     *
     * @example
     * // Object format, US English
     * const time1 = new Highcharts.Time({ locale: 'en-US' });
     * console.log(
     *     time1.dateFormat({
     *         day: 'numeric',
     *         month: 'short',
     *         year: 'numeric',
     *         hour: 'numeric',
     *         minute: 'numeric'
     *     }, Date.UTC(2024, 11, 31))
     * ); // => Dec 31, 2024, 12:00 AM
     *
     * // Object format, British English
     * const time2 = new Highcharts.Time({ locale: 'en-GB' });
     * console.log(
     *     time2.dateFormat({
     *         day: 'numeric',
     *         month: 'short',
     *         year: 'numeric',
     *         hour: 'numeric',
     *         minute: 'numeric'
     *     }, Date.UTC(2024, 11, 31))
     * ); // => 31 Dec 2024, 00:00
     *
     * // Individual key string replacement
     * const time3 = new Highcharts.Time();
     * console.log(
     *     time3.dateFormat('%Y-%m-%d %H:%M:%S', Date.UTC(2024, 11, 31))
     * ); // => 2024-12-31 00:00:00
     *
     * // Locale-aware keys, US English
     * const time4 = new Highcharts.Time({ locale: 'en-US' });
     * console.log(
     *     time4.dateFormat('%[YebHM]', Date.UTC(2024, 11, 31))
     * ); // => Dec 31, 2024, 12:00 AM
     *
     * // Locale-aware keys, British English
     * const time5 = new Highcharts.Time({ locale: 'en-GB' });
     * console.log(
     *     time5.dateFormat('%[YebHM]', Date.UTC(2024, 11, 31))
     * ); // => 31 Dec 2024, 00:00
     *
     * // Mixed locale-aware and individual keys
     * console.log(
     *     time5.dateFormat('%[Yeb], %H:%M', Date.UTC(2024, 11, 31))
     * ); // => 31 Dec 2024, 00:00
     *
     * @function Highcharts.Time#dateFormat
     *
     * @param {string|Highcharts.DateTimeFormatOptions} format
     *        The desired string format where various time representations are
     *        prefixed with %, or an object representing the locale-aware format
     *        options.
     *
     * @param {number} [timestamp]
     *        The JavaScript timestamp.
     *
     * @param {boolean} [upperCaseFirst=false]
     *        Upper case first letter in the return.
     *
     * @return {string}
     *         The formatted date.
     */
    dateFormat(format, timestamp, upperCaseFirst) {
        const lang = this.lang;
        if (!TimeBase_defined(timestamp) || isNaN(timestamp)) {
            return lang?.invalidDate || '';
        }
        format = format ?? '%Y-%m-%d %H:%M:%S';
        // First, identify and replace locale-aware formats like %[Ymd]
        if (TimeBase_isString(format)) {
            const localeAwareRegex = /%\[([a-zA-Z]+)\]/g;
            let match;
            while ((match = localeAwareRegex.exec(format))) {
                format = format.replace(match[0], this.dateTimeFormat(match[1], timestamp, lang?.locale));
            }
        }
        // Then, replace static formats like %Y, %m, %d etc.
        if (TimeBase_isString(format) && format.indexOf('%') !== -1) {
            const time = this, [fullYear, month, dayOfMonth, hours, minutes, seconds, milliseconds, weekday] = this.toParts(timestamp), langWeekdays = lang?.weekdays || this.weekdays, shortWeekdays = lang?.shortWeekdays || this.shortWeekdays, months = lang?.months || this.months, shortMonths = lang?.shortMonths || this.shortMonths, 
            // List all format keys. Custom formats can be added from the
            // outside.
            replacements = TimeBase_extend({
                // Day
                // Short weekday, like 'Mon'
                a: shortWeekdays ?
                    shortWeekdays[weekday] :
                    langWeekdays[weekday].substr(0, 3),
                // Long weekday, like 'Monday'
                A: langWeekdays[weekday],
                // Two digit day of the month, 01 to 31
                d: TimeBase_pad(dayOfMonth),
                // Day of the month, 1 through 31
                e: TimeBase_pad(dayOfMonth, 2, ' '),
                // Day of the week, 0 through 6
                w: weekday,
                // Week (none implemented)
                // 'W': weekNumber(),
                v: lang?.weekFrom ?? '',
                // Month
                // Short month, like 'Jan'
                b: shortMonths[month],
                // Long month, like 'January'
                B: months[month],
                // Two digit month number, 01 through 12
                m: TimeBase_pad(month + 1),
                // Month number, 1 through 12 (#8150)
                o: month + 1,
                // Year
                // Two digits year, like 09 for 2009
                y: fullYear.toString().substr(2, 2),
                // Four digits year, like 2009
                Y: fullYear,
                // Time
                // Two digits hours in 24h format, 00 through 23
                H: TimeBase_pad(hours),
                // Hours in 24h format, 0 through 23
                k: hours,
                // Two digits hours in 12h format, 00 through 11
                I: TimeBase_pad((hours % 12) || 12),
                // Hours in 12h format, 1 through 12
                l: (hours % 12) || 12,
                // Two digits minutes, 00 through 59
                M: TimeBase_pad(minutes),
                // Upper case AM or PM
                p: hours < 12 ? 'AM' : 'PM',
                // Lower case AM or PM
                P: hours < 12 ? 'am' : 'pm',
                // Two digits seconds, 00 through 59
                S: TimeBase_pad(seconds),
                // Milliseconds (naming from Ruby)
                L: TimeBase_pad(milliseconds, 3)
            }, Core_Globals.dateFormats);
            // Do the replaces
            TimeBase_objectEach(replacements, function (val, key) {
                if (TimeBase_isString(format)) {
                    // Regex would do it in one line, but this is faster
                    while (format.indexOf('%' + key) !== -1) {
                        format = format.replace('%' + key, typeof val === 'function' ?
                            val.call(time, timestamp) :
                            val);
                    }
                }
            });
        }
        else if (TimeBase_isObject(format)) {
            const tzHours = (this.getTimezoneOffset(timestamp) || 0) /
                (60000 * 60), timeZone = this.timezone || ('Etc/GMT' + (tzHours >= 0 ? '+' : '') + tzHours), { prefix = '', suffix = '' } = format;
            format = prefix + this.dateTimeFormat(TimeBase_extend({ timeZone }, format), timestamp) + suffix;
        }
        // Optionally sentence-case the string and return
        return upperCaseFirst ? TimeBase_ucfirst(format) : format;
    }
    /**
     * Resolve legacy formats of dateTimeLabelFormats (strings and arrays) into
     * an object.
     * @private
     * @param {string|Array<T>|Highcharts.Dictionary<T>} f
     * General format description
     * @return {Highcharts.Dictionary<T>}
     * The object definition
     */
    resolveDTLFormat(f) {
        if (!TimeBase_isObject(f, true)) { // Check for string or array
            f = TimeBase_splat(f);
            return {
                main: f[0],
                from: f[1],
                to: f[2]
            };
        }
        // Type-check DateTimeFormatOptions against DateTimeLabelFormatObject
        if (TimeBase_isObject(f, true) && isDateTimeFormatOptions(f)) {
            return { main: f };
        }
        return f;
    }
    /**
     * Get the optimal date format for a point, based on a range.
     *
     * @private
     * @function Highcharts.Time#getDateFormat
     *
     * @param {number} range
     *        The time range
     *
     * @param {number} timestamp
     *        The timestamp of the date
     *
     * @param {number} startOfWeek
     *        An integer representing the first day of the week, where 0 is
     *        Sunday.
     *
     * @param {Highcharts.Dictionary<string>} dateTimeLabelFormats
     *        A map of time units to formats.
     *
     * @return {string}
     *         The optimal date format for a point.
     */
    getDateFormat(range, timestamp, startOfWeek, dateTimeLabelFormats) {
        const dateStr = this.dateFormat('%m-%d %H:%M:%S.%L', timestamp), blank = '01-01 00:00:00.000', strpos = {
            millisecond: 15,
            second: 12,
            minute: 9,
            hour: 6,
            day: 3
        };
        let n = 'millisecond', 
        // For sub-millisecond data, #4223
        lastN = n;
        for (n in TimeBase_timeUnits) { // eslint-disable-line guard-for-in
            // If the range is exactly one week and we're looking at a
            // Sunday/Monday, go for the week format
            if (range &&
                range === TimeBase_timeUnits.week &&
                +this.dateFormat('%w', timestamp) === startOfWeek &&
                dateStr.substr(6) === blank.substr(6)) {
                n = 'week';
                break;
            }
            // The first format that is too great for the range
            if (range && TimeBase_timeUnits[n] > range) {
                n = lastN;
                break;
            }
            // If the point is placed every day at 23:59, we need to show
            // the minutes as well. #2637.
            if (strpos[n] &&
                dateStr.substr(strpos[n]) !== blank.substr(strpos[n])) {
                break;
            }
            // Weeks are outside the hierarchy, only apply them on
            // Mondays/Sundays like in the first condition
            if (n !== 'week') {
                lastN = n;
            }
        }
        return this.resolveDTLFormat(dateTimeLabelFormats[n]).main;
    }
}
/* *
 *
 * Default export
 *
 * */
/* harmony default export */ const Shared_TimeBase = (TimeBase);
/* *
 *
 * API Declarations
 *
 * */
/**
 * Normalized interval.
 *
 * @interface Highcharts.TimeNormalizedObject
 */ /**
* The count.
*
* @name Highcharts.TimeNormalizedObject#count
* @type {number|undefined}
*/ /**
* The interval in axis values (ms).
*
* @name Highcharts.TimeNormalizedObject#unitRange
* @type {number}
*/
/**
 * Function of an additional date format specifier.
 *
 * @callback Highcharts.TimeFormatCallbackFunction
 *
 * @param {number} timestamp
 *        The time to format.
 *
 * @return {string}
 *         The formatted portion of the date.
 */
/**
 * Time ticks.
 *
 * @interface Highcharts.AxisTickPositionsArray
 * @extends global.Array<number>
 */ /**
* @name Highcharts.AxisTickPositionsArray#info
* @type {Highcharts.TimeTicksInfoObject|undefined}
*/
/**
 * A callback to return the time zone offset for a given datetime. It
 * takes the timestamp in terms of milliseconds since January 1 1970,
 * and returns the timezone offset in minutes. This provides a hook
 * for drawing time based charts in specific time zones using their
 * local DST crossover dates, with the help of external libraries.
 *
 * @callback Highcharts.TimezoneOffsetCallbackFunction
 *
 * @param {number} timestamp
 * Timestamp in terms of milliseconds since January 1 1970.
 *
 * @return {number}
 * Timezone offset in minutes.
 */
/**
 * Options for formatting dates and times using the [Intl.DateTimeFormat](
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 * ) API, and extended with some custom options for Highcharts.
 *
 * @interface Highcharts.DateTimeFormatOptions
 */ /**
* The locale matching algorithm to use.
*
* @name Highcharts.DateTimeFormatOptions#localeMatcher
* @type {string|undefined}
*/ /**
* The time zone to use. The default is the browser's default time zone.
*
* @name Highcharts.DateTimeFormatOptions#timeZone
* @type {string|undefined}
*/ /**
* Whether to use 12-hour time (as opposed to 24-hour time).
*
* @name Highcharts.DateTimeFormatOptions#hour12
* @type {'auto'|'always'|'never'|undefined}
*/ /**
* The format matching algorithm to use.
*
* @name Highcharts.DateTimeFormatOptions#formatMatcher
* @type {string|undefined}
*/ /**
* The representation of the weekday.
*
* @name Highcharts.DateTimeFormatOptions#weekday
* @type {'narrow'|'short'|'long'|undefined}
*/ /**
* The representation of the era.
*
* @name Highcharts.DateTimeFormatOptions#era
* @type {'narrow'|'short'|'long'|undefined}
*/ /**
* The representation of the year.
*
* @name Highcharts.DateTimeFormatOptions#year
* @type {'numeric'|'2-digit'|undefined}
*/ /**
* The representation of the month.
* "narrow", "short", "long".
*
* @name Highcharts.DateTimeFormatOptions#month
* @type {'numeric'|'2-digit'|'narrow'|'short'|'long'|undefined}
*/ /**
* The representation of the day.
*
* @name Highcharts.DateTimeFormatOptions#day
* @type {'numeric'|'2-digit'|undefined}
*/ /**
* The representation of the hour.
*
* @name Highcharts.DateTimeFormatOptions#hour
* @type {'numeric'|'2-digit'|undefined}
*/ /**
* The representation of the minute.
*
* @name Highcharts.DateTimeFormatOptions#minute
* @type {'numeric'|'2-digit'|undefined}
*/ /**
* The representation of the second.
*
* @name Highcharts.DateTimeFormatOptions#second
* @type {'numeric'|'2-digit'|undefined}
*/ /**
* The number of fractional digits to use. 3 means milliseconds.
*
* @name Highcharts.DateTimeFormatOptions#fractionalSecondDigits
* @type {number|undefined}
*/ /**
* The representation of the time zone name.
*
* @name Highcharts.DateTimeFormatOptions#timeZoneName
* @type {'short'|'long'|undefined}
*/ /**
* A prefix for the time string. Custom Highcharts option.
*
* @name Highcharts.DateTimeFormatOptions#prefix
* @type {'string'|undefined}
*/ /**
* A suffix for the time string. Custom Highcharts option.
*
* @name Highcharts.DateTimeFormatOptions#suffix
* @type {'string'|undefined}
*/
''; // Keeps doclets above in JS file

;// ./code/grid/es-modules/Core/Time.js
/* *
 *
 *  (c) 2010-2024 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { defined: Time_defined, extend: Time_extend, timeUnits: Time_timeUnits } = Core_Utilities;
/* *
 *
 *  Constants
 *
 * */
class Time extends Shared_TimeBase {
    /**
     * Return an array with time positions distributed on round time values
     * right and right after min and max. Used in datetime axes as well as for
     * grouping data on a datetime axis.
     *
     * @function Highcharts.Time#getTimeTicks
     *
     * @param {Highcharts.TimeNormalizedObject} normalizedInterval
     *        The interval in axis values (ms) and the count
     *
     * @param {number} [min]
     *        The minimum in axis values
     *
     * @param {number} [max]
     *        The maximum in axis values
     *
     * @param {number} [startOfWeek=1]
     *
     * @return {Highcharts.AxisTickPositionsArray}
     * Time positions
     */
    getTimeTicks(normalizedInterval, min, max, startOfWeek) {
        const time = this, tickPositions = [], higherRanks = {}, { count = 1, unitRange } = normalizedInterval;
        let [year, month, dayOfMonth, hours, minutes, seconds] = time.toParts(min), milliseconds = (min || 0) % 1000, variableDayLength;
        startOfWeek ?? (startOfWeek = 1);
        if (Time_defined(min)) { // #1300
            milliseconds = unitRange >= Time_timeUnits.second ?
                0 : // #3935
                count * Math.floor(milliseconds / count);
            if (unitRange >= Time_timeUnits.second) { // Second
                seconds = unitRange >= Time_timeUnits.minute ?
                    0 : // #3935
                    count * Math.floor(seconds / count);
            }
            if (unitRange >= Time_timeUnits.minute) { // Minute
                minutes = unitRange >= Time_timeUnits.hour ?
                    0 :
                    count * Math.floor(minutes / count);
            }
            if (unitRange >= Time_timeUnits.hour) { // Hour
                hours = unitRange >= Time_timeUnits.day ?
                    0 :
                    count * Math.floor(hours / count);
            }
            if (unitRange >= Time_timeUnits.day) { // Day
                dayOfMonth = unitRange >= Time_timeUnits.month ?
                    1 :
                    Math.max(1, count * Math.floor(dayOfMonth / count));
            }
            if (unitRange >= Time_timeUnits.month) { // Month
                month = unitRange >= Time_timeUnits.year ? 0 :
                    count * Math.floor(month / count);
            }
            if (unitRange >= Time_timeUnits.year) { // Year
                year -= year % count;
            }
            // Week is a special case that runs outside the hierarchy
            if (unitRange === Time_timeUnits.week) {
                if (count) {
                    min = time.makeTime(year, month, dayOfMonth, hours, minutes, seconds, milliseconds);
                }
                // Get start of current week, independent of count
                const weekday = this.dateTimeFormat({
                    timeZone: this.timezone,
                    weekday: 'narrow'
                }, min, 'es'), 
                // Spanish weekday index
                weekdayNo = 'DLMXJVS'.indexOf(weekday);
                dayOfMonth += -weekdayNo + startOfWeek +
                    // We don't want to skip days that are before
                    // startOfWeek (#7051)
                    (weekdayNo < startOfWeek ? -7 : 0);
            }
            min = time.makeTime(year, month, dayOfMonth, hours, minutes, seconds, milliseconds);
            // Handle local timezone offset
            if (time.variableTimezone && Time_defined(max)) {
                // Detect whether we need to take the DST crossover into
                // consideration. If we're crossing over DST, the day length may
                // be 23h or 25h and we need to compute the exact clock time for
                // each tick instead of just adding hours. This comes at a cost,
                // so first we find out if it is needed (#4951).
                variableDayLength = (
                // Long range, assume we're crossing over.
                max - min > 4 * Time_timeUnits.month ||
                    // Short range, check if min and max are in different time
                    // zones.
                    time.getTimezoneOffset(min) !==
                        time.getTimezoneOffset(max));
            }
            // Iterate and add tick positions at appropriate values
            let t = min, i = 1;
            while (t < max) {
                tickPositions.push(t);
                // Increase the years
                if (unitRange === Time_timeUnits.year) {
                    t = time.makeTime(year + i * count, 0);
                    // Increase the months
                }
                else if (unitRange === Time_timeUnits.month) {
                    t = time.makeTime(year, month + i * count);
                    // If we're using local time, the interval is not fixed as it
                    // jumps one hour at the DST crossover
                }
                else if (variableDayLength && (unitRange === Time_timeUnits.day ||
                    unitRange === Time_timeUnits.week)) {
                    t = time.makeTime(year, month, dayOfMonth +
                        i * count * (unitRange === Time_timeUnits.day ? 1 : 7));
                }
                else if (variableDayLength &&
                    unitRange === Time_timeUnits.hour &&
                    count > 1) {
                    // Make sure higher ranks are preserved across DST (#6797,
                    // #7621)
                    t = time.makeTime(year, month, dayOfMonth, hours + i * count);
                    // Else, the interval is fixed and we use simple addition
                }
                else {
                    t += unitRange * count;
                }
                i++;
            }
            // Push the last time
            tickPositions.push(t);
            // Handle higher ranks. Mark new days if the time is on midnight
            // (#950, #1649, #1760, #3349). Use a reasonable dropout threshold
            // to prevent looping over dense data grouping (#6156).
            if (unitRange <= Time_timeUnits.hour && tickPositions.length < 10000) {
                tickPositions.forEach((t) => {
                    if (
                    // Speed optimization, no need to run dateFormat unless
                    // we're on a full or half hour
                    t % 1800000 === 0 &&
                        // Check for local or global midnight
                        time.dateFormat('%H%M%S%L', t) === '000000000') {
                        higherRanks[t] = 'day';
                    }
                });
            }
        }
        // Record information on the chosen unit - for dynamic label formatter
        tickPositions.info = Time_extend(normalizedInterval, {
            higherRanks,
            totalRange: unitRange * count
        });
        return tickPositions;
    }
}
/* *
 *
 * Default export
 *
 * */
/* harmony default export */ const Core_Time = (Time);

;// ./code/grid/es-modules/Core/Defaults.js
/* *
 *
 *  (c) 2010-2024 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { isTouchDevice } = Core_Globals;



const { fireEvent: Defaults_fireEvent, merge: Defaults_merge } = Core_Utilities;
/* *
 *
 *  API Options
 *
 * */
/**
 * Global default settings.
 *
 * @name Highcharts.defaultOptions
 * @type {Highcharts.Options}
 */ /**
* @optionparent
* @private
*/
const defaultOptions = {
    /**
     * An array containing the default colors for the chart's series. When
     * all colors are used, new colors are pulled from the start again.
     *
     * Default colors can also be set on a series or series.type basis,
     * see [column.colors](#plotOptions.column.colors),
     * [pie.colors](#plotOptions.pie.colors).
     *
     * In styled mode, the colors option doesn't exist. Instead, colors
     * are defined in CSS and applied either through series or point class
     * names, or through the [chart.colorCount](#chart.colorCount) option.
     *
     * @sample {highcharts} highcharts/chart/colors/
     *         Assign a global color theme
     * @sample highcharts/members/theme-v10/
     *         Latest release styled like version 10
     *
     * @type    {Array<(Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject)>}
     * @default [
     *     "#2caffe",
     *     "#544fc5",
     *     "#00e272",
     *     "#fe6a35",
     *     "#6b8abc",
     *     "#d568fb",
     *     "#2ee0ca",
     *     "#fa4b42",
     *     "#feb56a",
     *     "#91e8e1"
     * ]
     */
    colors: Palettes.colors,
    /**
     * Styled mode only. Configuration object for adding SVG definitions for
     * reusable elements. See [gradients, shadows and
     * patterns](https://www.highcharts.com/docs/chart-design-and-style/gradients-shadows-and-patterns)
     * for more information and code examples.
     *
     * @type      {*}
     * @since     5.0.0
     * @apioption defs
     */
    /**
     * @ignore-option
     */
    symbols: ['circle', 'diamond', 'square', 'triangle', 'triangle-down'],
    /**
     * An object containing language-related strings and settings. A typical
     * setup uses `Highcharts.setOptions` to make the options apply to all
     * charts in the same page.
     *
     * ```js
     * Highcharts.setOptions({
     *     lang: {
     *         locale: 'fr'
     *     }
     * });
     * ```
     *
     * @optionparent lang
     */
    lang: {
        weekFrom: 'week from',
        /**
         * The default chart title.
         *
         * @since next
         */
        chartTitle: 'Chart title',
        /**
         * The browser locale to use for date and number formatting. The actual
         * locale used for each chart is determined in three steps:
         * 1. If this `lang.locale` option is specified, it is used.
         * 2. Else, look for the closest ancestor HTML element with a `lang`
         *    attribute, typically the `<html>` element.
         * 3. If no 'lang' attribute is found, use the default browser locale.
         *
         * Use `en-GB`, British English, for approximate consistency with
         * Highcharts v < 12.
         *
         * @sample highcharts/lang/locale/
         *         Set the locale using the `lang.locale` option
         * @sample highcharts/lang/locale-attribute/
         *         Pick up the locale from the HTML `lang` attribute
         * @sample highcharts/members/highcharts-numberformat
         *         Arabic locale with digits and dates         *
         *
         * @since 12.0.0
         * @type {string|Array<string>}
         */
        locale: void 0,
        /**
         * The loading text that appears when the chart is set into the loading
         * state following a call to `chart.showLoading`.
         */
        loading: 'Loading...',
        /**
         * An array containing the months names. Corresponds to the `%B` format
         * in `Highcharts.dateFormat()`. Defaults to 'undefined',
         * meaning the default month names are used according to the
         * `lang.locale` setting.
         *
         * @type    {Array<string>}
         */
        months: void 0,
        /**
         * [Format string](https://www.highcharts.com/docs/chart-concepts/templating) for the default series name.
         *
         * @since next
         */
        seriesName: 'Series {add index 1}',
        /**
         * An array containing the months names in abbreviated form. Corresponds
         * to the `%b` format in `Highcharts.dateFormat()`. Defaults to
         * 'undefined', meaning the default short month names are used according
         * to the `lang.locale` setting.
         *
         * @type    {Array<string>}
         */
        shortMonths: void 0,
        /**
         * An array containing the weekday names. Defaults to 'undefined',
         * meaning the default weekday names are used according to the
         * `lang.locale` setting.
         *
         * @type    {Array<string>}
         */
        weekdays: void 0,
        /**
         * Short week days, starting Sunday. Defaults to 'undefined', meaning
         * the default short weekday names are used according to the
         * `lang.locale` setting.
         *
         * @sample highcharts/lang/shortweekdays/
         *         Finnish two-letter abbreviations
         *
         * @type      {Array<string>}
         * @since     4.2.4
         * @apioption lang.shortWeekdays
         */
        /**
         * What to show in a date field for invalid dates. Defaults to an empty
         * string.
         *
         * @type      {string}
         * @since     4.1.8
         * @product   highcharts highstock
         * @apioption lang.invalidDate
         */
        /**
         * The title appearing on hovering the zoom in button. The text itself
         * defaults to "+" and can be changed in the button options.
         *
         * @type      {string}
         * @default   Zoom in
         * @product   highmaps
         * @apioption lang.zoomIn
         */
        /**
         * The title appearing on hovering the zoom out button. The text itself
         * defaults to "-" and can be changed in the button options.
         *
         * @type      {string}
         * @default   Zoom out
         * @product   highmaps
         * @apioption lang.zoomOut
         */
        /**
         * The default decimal point used in the `Highcharts.numberFormat`
         * method unless otherwise specified in the function arguments. Defaults
         * to the locale decimal point as determined by `lang.locale`.
         *
         * @type      {string}
         * @default   undefined
         * @since     1.2.2
         * @apioption lang.decimalPoint
         */
        /**
         * [Metric prefixes](https://en.wikipedia.org/wiki/Metric_prefix) used
         * to shorten high numbers in axis labels. Replacing any of the
         * positions with `null` causes the full number to be written. Setting
         * `numericSymbols` to `undefined` disables shortening altogether.
         *
         * @sample {highcharts} highcharts/lang/numericsymbols/
         *         Replacing the symbols with text
         * @sample {highstock} highcharts/lang/numericsymbols/
         *         Replacing the symbols with text
         *
         * @type    {Array<string>}
         * @default ["k", "M", "G", "T", "P", "E"]
         * @since   2.3.0
         */
        numericSymbols: ['k', 'M', 'G', 'T', 'P', 'E'],
        /**
         * The default name for a pie slice (point).
         * @since next
         */
        pieSliceName: 'Slice',
        /**
         * The magnitude of [numericSymbols](#lang.numericSymbol) replacements.
         * Use 10000 for Japanese, Korean and various Chinese locales, which
         * use symbols for 10^4, 10^8 and 10^12.
         *
         * @sample highcharts/lang/numericsymbolmagnitude/
         *         10000 magnitude for Japanese
         *
         * @type      {number}
         * @default   1000
         * @since     5.0.3
         * @apioption lang.numericSymbolMagnitude
         */
        /**
         * The default thousands separator used in the `Highcharts.numberFormat`
         * method unless otherwise specified in the function arguments. Defaults
         * to the locale thousands separator as determined by `lang.locale`.
         *
         * @type      {string}
         * @default   undefined
         * @since     1.2.2
         * @apioption lang.thousandsSep
         */
        /**
         * The text for the label appearing when a chart is zoomed.
         *
         * @since 1.2.4
         */
        resetZoom: 'Reset zoom',
        /**
         * The tooltip title for the label appearing when a chart is zoomed.
         *
         * @since 1.2.4
         */
        /**
         * The default title of the Y axis
         *
         * @since next
         */
        yAxisTitle: 'Values',
        resetZoomTitle: 'Reset zoom level 1:1'
    },
    /**
     * Global options that don't apply to each chart. These options must be set
     * using the `Highcharts.setOptions` method.
     *
     * ```js
     * Highcharts.setOptions({
     *     global: {
     *         buttonTheme: {
     *             fill: '#d0d0d0'
     *         }
     *     }
     * });
     * ```
     */
    global: {
        /**
         * General theme for buttons. This applies to the zoom button, exporting
         * context menu, map navigation, range selector buttons and custom
         * buttons generated using the `SVGRenderer.button` function. However,
         * each of these may be overridden with more specific options.
         *
         * @sample highcharts/global/buttontheme
         *         General button theme
         * @since 11.4.2
         */
        buttonTheme: {
            /**
             * The fill color for buttons
             */
            fill: "#f7f7f7" /* Palette.neutralColor3 */,
            /**
             * The padding of buttons
             */
            padding: 8,
            /**
             * The border radius for buttons
             */
            r: 2,
            /**
             * The stroke color for buttons
             */
            stroke: "#cccccc" /* Palette.neutralColor20 */,
            /**
             * The stroke width for buttons
             */
            'stroke-width': 1,
            /**
             * CSS styling for the buttons' text
             */
            style: {
                color: "#333333" /* Palette.neutralColor80 */,
                cursor: 'pointer',
                fontSize: '0.8em',
                fontWeight: 'normal'
            },
            /**
             * State overrides for the buttons
             */
            states: {
                /**
                 * Hover state overrides for the buttons are applied in addition
                 * to the normal state options
                 */
                hover: {
                    fill: "#e6e6e6" /* Palette.neutralColor10 */
                },
                /**
                 * Select state overrides for the buttons are applied in
                 * addition to the normal state options
                 */
                select: {
                    fill: "#e6e9ff" /* Palette.highlightColor10 */,
                    style: {
                        color: "#000000" /* Palette.neutralColor100 */,
                        fontWeight: 'bold'
                    }
                },
                /**
                 * Disabled state overrides for the buttons are applied in
                 * addition to the normal state options
                 */
                disabled: {
                    /**
                     * Disabled state CSS style overrides for the buttons' text
                     */
                    style: {
                        color: "#cccccc" /* Palette.neutralColor20 */
                    }
                }
            }
        }
    },
    /**
     * Time options that can apply globally or to individual charts. These
     * settings affect how `datetime` axes are laid out, how tooltips are
     * formatted, how series
     * [pointIntervalUnit](#plotOptions.series.pointIntervalUnit) works and how
     * the Highcharts Stock range selector handles time.
     *
     * The common use case is that all charts in the same Highcharts object
     * share the same time settings, in which case the global settings are set
     * using `setOptions`.
     *
     * ```js
     * // Apply time settings globally
     * Highcharts.setOptions({
     *     time: {
     *         timezone: 'Europe/London'
     *     }
     * });
     * // Apply time settings by instance
     * const chart = Highcharts.chart('container', {
     *     time: {
     *         timezone: 'America/New_York'
     *     },
     *     series: [{
     *         data: [1, 4, 3, 5]
     *     }]
     * });
     *
     * // Use the Time object
     * console.log(
     *        'Current time in New York',
     *        chart.time.dateFormat('%Y-%m-%d %H:%M:%S', Date.now())
     * );
     * ```
     *
     * Since v6.0.5, the time options were moved from the `global` object to the
     * `time` object, and time options can be set on each individual chart.
     *
     * @sample {highcharts|highstock}
     *         highcharts/time/timezone/
     *         Set the timezone globally
     * @sample {highcharts}
     *         highcharts/time/individual/
     *         Set the timezone per chart instance
     * @sample {highstock}
     *         stock/time/individual/
     *         Set the timezone per chart instance
     *
     * @since     6.0.5
     * @optionparent time
     */
    time: {
        /**
         * A custom `Date` class for advanced date handling. For example,
         * [JDate](https://github.com/tahajahangir/jdate) can be hooked in to
         * handle Jalali dates.
         *
         * @type      {*}
         * @since     4.0.4
         * @product   highcharts highstock gantt
         */
        Date: void 0,
        /**
         * A named time zone. Supported time zone names rely on the browser
         * implementations, as described in the [mdn
         * docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#timezone).
         * If the given time zone is not recognized by the browser, Highcharts
         * provides a warning and falls back to returning a 0 offset,
         * corresponding to the UTC time zone.
         *
         * The time zone affects axis scaling, tickmark placement and
         * time display in `Highcharts.dateFormat`.
         *
         * Setting `timezone` to `undefined` falls back to the default browser
         * timezone setting.
         *
         * Until v11.2.0, this option depended on moment.js.
         *
         * @sample {highcharts|highstock} highcharts/time/timezone/ Europe/Oslo
         *
         * @type      {string}
         * @since     5.0.7
         * @product   highcharts highstock gantt
         */
        timezone: 'UTC',
        /**
         * The timezone offset in minutes. Positive values are west, negative
         * values are east of UTC, as in the ECMAScript
         * [getTimezoneOffset](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)
         * method. Use this to display UTC based data in a predefined time zone.
         *
         * This option is deprecated as of v11.4.1 and will be removed in a
         * future release. Use the [time.timezone](#time.timezone) option
         * instead.
         *
         * @see [time.getTimezoneOffset](#time.getTimezoneOffset)
         *
         * @sample {highcharts|highstock} highcharts/time/timezoneoffset/
         *         Timezone offset
         *
         * @since     3.0.8
         * @deprecated 11.4.2
         * @product   highcharts highstock gantt
         */
        timezoneOffset: 0,
        /**
         * Whether to use UTC time for axis scaling, tickmark placement and
         * time display in `Highcharts.dateFormat`. Advantages of using UTC
         * is that the time displays equally regardless of the user agent's
         * time zone settings. Local time can be used when the data is loaded
         * in real time or when correct Daylight Saving Time transitions are
         * required.
         *
         * Setting `useUTC` to true is equivalent to setting `time.timezone` to
         * `"UTC"`. Setting `useUTC` to false is equivalent to setting
         * `time.timezone` to `undefined`.
         *
         * @see [time.timezone](#timezone)
         *
         * @sample {highcharts} highcharts/time/useutc-true/
         *         True by default
         * @sample {highcharts} highcharts/time/useutc-false/
         *         False
         *
         * @deprecated
         */
        useUTC: void 0
    },
    chart: Chart_ChartDefaults,
    /**
     * The chart's main title.
     *
     * @sample {highmaps} maps/title/title/
     *         Title options demonstrated
     * @sample {highcharts} highcharts/title/align-auto/
     *         Default title alignment
     */
    title: {
        /**
         * When the title is floating, the plot area will not move to make space
         * for it.
         *
         * @sample {highcharts} highcharts/chart/zoomtype-none/
         *         False by default
         * @sample {highcharts} highcharts/title/floating/
         *         True - title on top of the plot area
         * @sample {highstock} stock/chart/title-floating/
         *         True - title on top of the plot area
         *
         * @type      {boolean}
         * @default   false
         * @since     2.1
         * @apioption title.floating
         */
        /**
         * Whether to
         * [use HTML](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html)
         * to render the text.
         *
         * @type      {boolean}
         * @default   false
         * @apioption title.useHTML
         */
        /**
         * The vertical alignment of the title. Can be one of `"top"`,
         * `"middle"` and `"bottom"`. When a value is given, the title behaves
         * as if [floating](#title.floating) were `true`.
         *
         * @sample {highcharts} highcharts/title/verticalalign/
         *         Chart title in bottom right corner
         * @sample {highstock} stock/chart/title-verticalalign/
         *         Chart title in bottom right corner
         *
         * @type      {Highcharts.VerticalAlignValue}
         * @since     2.1
         * @apioption title.verticalAlign
         */
        /**
         * The x position of the title relative to the alignment within
         * `chart.spacingLeft` and `chart.spacingRight`.
         *
         * @sample {highcharts} highcharts/title/align/
         *         Aligned to the plot area (x = 70px = margin left - spacing
         *         left)
         * @sample {highstock} stock/chart/title-align/
         *         Aligned to the plot area (x = 50px = margin left - spacing
         *         left)
         *
         * @type      {number}
         * @default   0
         * @since     2.0
         * @apioption title.x
         */
        /**
         * The y position of the title relative to the alignment within
         * [chart.spacingTop](#chart.spacingTop) and [chart.spacingBottom](
         * #chart.spacingBottom). By default it depends on the font size.
         *
         * @sample {highcharts} highcharts/title/y/
         *         Title inside the plot area
         * @sample {highstock} stock/chart/title-verticalalign/
         *         Chart title in bottom right corner
         *
         * @type      {number}
         * @since     2.0
         * @apioption title.y
         */
        /**
         * CSS styles for the title. Use this for font styling, but use `align`,
         * `x` and `y` for text alignment.
         *
         * Note that the default [title.minScale](#title.minScale) option also
         * affects the rendered font size. In order to keep the font size fixed
         * regardless of title length, set `minScale` to 1.
         *
         * In styled mode, the title style is given in the `.highcharts-title`
         * class.
         *
         * @sample {highcharts} highcharts/title/style/
         *         Custom color and weight
         * @sample {highstock} stock/chart/title-style/
         *         Custom color and weight
         * @sample highcharts/css/titles/
         *         Styled mode
         *
         * @type      {Highcharts.CSSObject}
         * @default   {highcharts|highmaps} { "color": "#333333", "fontSize": "18px" }
         * @default   {highstock} { "color": "#333333", "fontSize": "16px" }
         */
        style: {
            color: "#333333" /* Palette.neutralColor80 */,
            fontWeight: 'bold'
        },
        /**
         * The title of the chart. To disable the title, set the `text` to
         * `undefined`.
         *
         * @sample {highcharts} highcharts/title/text/
         *         Custom title
         * @sample {highstock} stock/chart/title-text/
         *         Custom title
         *
         * @default {highcharts|highmaps} Chart title
         * @default {highstock} undefined
         */
        text: 'Chart title',
        /**
         * The horizontal alignment of the title. Can be one of "left", "center"
         * and "right".
         *
         * Since v12 it defaults to `undefined`, meaning the alignment is
         * computed for best fit. If the text fits in one line, it aligned to
         * the center, but if it is wrapped into multiple lines, it is aligned
         * to the left.
         *
         * @sample {highcharts} highcharts/title/align-auto/
         *         Default alignment, dynamic
         * @sample {highcharts} highcharts/title/align/
         *         Aligned to the plot area (x = 70px = margin left - spacing
         *         left)
         * @sample {highstock} stock/chart/title-align/
         *         Aligned to the plot area (x = 50px = margin left - spacing
         *         left)
         *
         * @type      {Highcharts.AlignValue}
         * @default   undefined
         * @since     2.0
         * @apioption title.align
         */
        /**
         * The margin between the title and the plot area, or if a subtitle
         * is present, the margin between the subtitle and the plot area.
         *
         * @sample {highcharts} highcharts/title/margin-50/
         *         A chart title margin of 50
         * @sample {highcharts} highcharts/title/margin-subtitle/
         *         The same margin applied with a subtitle
         * @sample {highstock} stock/chart/title-margin/
         *         A chart title margin of 50
         *
         * @since 2.1
         */
        margin: 15,
        /**
         * When the title is too wide to fit in the chart, the default behavior
         * is to scale it down to fit, or apply word wrap if it is scaled down
         * to `minScale` and still doesn't fit.
         *
         * The default value reflects the scale, when using default font sizes,
         * when the title font size matches that of the subtitle. The title
         * still stands out as it is bold by default.
         *
         * Set `minScale` to 1 to avoid downscaling.
         *
         * @sample {highcharts} highcharts/title/align-auto/
         *         Downscaling demonstrated
         *
         * @since 12.0.0
         */
        minScale: 0.67
    },
    /**
     * The chart's subtitle. This can be used both to display a subtitle below
     * the main title, and to display random text anywhere in the chart. The
     * subtitle can be updated after chart initialization through the
     * `Chart.setTitle` method.
     *
     * @sample {highcharts} highcharts/title/align-auto/
     *         Default title alignment
     * @sample {highmaps} maps/title/subtitle/
     *         Subtitle options demonstrated
     */
    subtitle: {
        /**
         * The horizontal alignment of the subtitle. Can be one of "left",
         * "center" and "right". Since v12, it defaults to `undefined`, meaning
         * the actual alignment is inherited from the alignment of the main
         * title.
         *
         * @sample {highcharts} highcharts/title/align-auto/
         *         Default title and subtitle alignment, dynamic
         * @sample {highcharts} highcharts/subtitle/align/
         *         Footnote at right of plot area
         * @sample {highstock} stock/chart/subtitle-footnote
         *         Footnote at bottom right of plot area
         *
         * @type  {Highcharts.AlignValue}
         * @default undefined
         * @since 2.0
         * @apioption subtitle.align
         */
        /**
         * When the subtitle is floating, the plot area will not move to make
         * space for it.
         *
         * @sample {highcharts} highcharts/subtitle/floating/
         *         Floating title and subtitle
         * @sample {highstock} stock/chart/subtitle-footnote
         *         Footnote floating at bottom right of plot area
         *
         * @type      {boolean}
         * @default   false
         * @since     2.1
         * @apioption subtitle.floating
         */
        /**
         * CSS styles for the title.
         *
         * In styled mode, the subtitle style is given in the
         * `.highcharts-subtitle` class.
         *
         * @sample {highcharts} highcharts/subtitle/style/
         *         Custom color and weight
         * @sample {highcharts} highcharts/css/titles/
         *         Styled mode
         * @sample {highstock} stock/chart/subtitle-style
         *         Custom color and weight
         * @sample {highstock} highcharts/css/titles/
         *         Styled mode
         * @sample {highmaps} highcharts/css/titles/
         *         Styled mode
         *
         * @type      {Highcharts.CSSObject}
         * @default   {"color": "#666666"}
         * @apioption subtitle.style
         */
        /**
         * Whether to
         * [use HTML](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html)
         * to render the text.
         *
         * @type      {boolean}
         * @default   false
         * @apioption subtitle.useHTML
         */
        /**
         * The vertical alignment of the title. Can be one of `"top"`,
         * `"middle"` and `"bottom"`. When middle, the subtitle behaves as
         * floating.
         *
         * @sample {highcharts} highcharts/subtitle/verticalalign/
         *         Footnote at the bottom right of plot area
         * @sample {highstock} stock/chart/subtitle-footnote
         *         Footnote at the bottom right of plot area
         *
         * @type      {Highcharts.VerticalAlignValue}
         * @since     2.1
         * @apioption subtitle.verticalAlign
         */
        /**
         * The x position of the subtitle relative to the alignment within
         * `chart.spacingLeft` and `chart.spacingRight`.
         *
         * @sample {highcharts} highcharts/subtitle/align/
         *         Footnote at right of plot area
         * @sample {highstock} stock/chart/subtitle-footnote
         *         Footnote at the bottom right of plot area
         *
         * @type      {number}
         * @default   0
         * @since     2.0
         * @apioption subtitle.x
         */
        /**
         * The y position of the subtitle relative to the alignment within
         * `chart.spacingTop` and `chart.spacingBottom`. By default the subtitle
         * is laid out below the title unless the title is floating.
         *
         * @sample {highcharts} highcharts/subtitle/verticalalign/
         *         Footnote at the bottom right of plot area
         * @sample {highstock} stock/chart/subtitle-footnote
         *         Footnote at the bottom right of plot area
         *
         * @type      {number}
         * @since     2.0
         * @apioption subtitle.y
         */
        /**
         * CSS styles for the title.
         *
         * In styled mode, the subtitle style is given in the
         * `.highcharts-subtitle` class.
         *
         * @sample {highcharts} highcharts/subtitle/style/
         *         Custom color and weight
         * @sample {highcharts} highcharts/css/titles/
         *         Styled mode
         * @sample {highstock} stock/chart/subtitle-style
         *         Custom color and weight
         * @sample {highstock} highcharts/css/titles/
         *         Styled mode
         * @sample {highmaps} highcharts/css/titles/
         *         Styled mode
         *
         * @type      {Highcharts.CSSObject}
         * @default   {"color": "#666666"}
         */
        style: {
            color: "#666666" /* Palette.neutralColor60 */,
            /**
             * @type {number|string}
             */
            fontSize: '0.8em'
        },
        /**
         * The subtitle of the chart.
         *
         * @sample {highcharts|highstock} highcharts/subtitle/text/
         *         Custom subtitle
         * @sample {highcharts|highstock} highcharts/subtitle/text-formatted/
         *         Formatted and linked text.
         */
        text: ''
    },
    /**
     * The chart's caption, which will render below the chart and will be part
     * of exported charts. The caption can be updated after chart initialization
     * through the `Chart.update` or `Chart.caption.update` methods.
     *
     * @sample highcharts/caption/text/
     *         A chart with a caption
     * @since  7.2.0
     */
    caption: {
        /**
         * When the caption is floating, the plot area will not move to make
         * space for it.
         *
         * @type      {boolean}
         * @default   false
         * @apioption caption.floating
         */
        /**
         * The margin between the caption and the plot area.
         */
        margin: 15,
        /**
         * Whether to
         * [use HTML](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html)
         * to render the text.
         *
         * @type      {boolean}
         * @default   false
         * @apioption caption.useHTML
         */
        /**
         * The x position of the caption relative to the alignment within
         * `chart.spacingLeft` and `chart.spacingRight`.
         *
         * @type      {number}
         * @default   0
         * @apioption caption.x
         */
        /**
         * The y position of the caption relative to the alignment within
         * `chart.spacingTop` and `chart.spacingBottom`.
         *
         * @type      {number}
         * @apioption caption.y
         */
        /**
         * CSS styles for the caption.
         *
         * In styled mode, the caption style is given in the
         * `.highcharts-caption` class.
         *
         * @sample {highcharts} highcharts/css/titles/
         *         Styled mode
         *
         * @type      {Highcharts.CSSObject}
         * @default   {"color": "#666666"}
         */
        style: {
            color: "#666666" /* Palette.neutralColor60 */,
            /**
             * @type {number|string}
             */
            fontSize: '0.8em'
        },
        /**
         * The caption text of the chart.
         *
         * @sample {highcharts} highcharts/caption/text/
         *         Custom caption
         */
        text: '',
        /**
         * The horizontal alignment of the caption. Can be one of "left",
         *  "center" and "right".
         *
         * @type  {Highcharts.AlignValue}
         */
        align: 'left',
        /**
         * The vertical alignment of the caption. Can be one of `"top"`,
         * `"middle"` and `"bottom"`. When middle, the caption behaves as
         * floating.
         *
         * @type      {Highcharts.VerticalAlignValue}
         */
        verticalAlign: 'bottom'
    },
    /**
     * The plotOptions is a wrapper object for config objects for each series
     * type. The config objects for each series can also be overridden for
     * each series item as given in the series array.
     *
     * Configuration options for the series are given in three levels. Options
     * for all series in a chart are given in the [plotOptions.series](
     * #plotOptions.series) object. Then options for all series of a specific
     * type are given in the plotOptions of that type, for example
     * `plotOptions.line`. Next, options for one single series are given in
     * [the series array](#series).
     */
    plotOptions: {},
    /**
     * The legend is a box containing a symbol and name for each series
     * item or point item in the chart. Each series (or points in case
     * of pie charts) is represented by a symbol and its name in the legend.
     *
     * It is possible to override the symbol creator function and create
     * [custom legend symbols](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/studies/legend-custom-symbol/).
     *
     * @productdesc {highmaps}
     * A Highmaps legend by default contains one legend item per series, but if
     * a `colorAxis` is defined, the axis will be displayed in the legend.
     * Either as a gradient, or as multiple legend items for `dataClasses`.
     */
    legend: {
        /**
         * The background color of the legend.
         *
         * @see In styled mode, the legend background fill can be applied with
         *      the `.highcharts-legend-box` class.
         *
         * @sample {highcharts} highcharts/legend/backgroundcolor/
         *         Yellowish background
         * @sample {highstock} stock/legend/align/
         *         Various legend options
         * @sample {highmaps} maps/legend/border-background/
         *         Border and background options
         *
         * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @apioption legend.backgroundColor
         */
        /**
         * The width of the drawn border around the legend.
         *
         * @see In styled mode, the legend border stroke width can be applied
         *      with the `.highcharts-legend-box` class.
         *
         * @sample {highcharts} highcharts/legend/borderwidth/
         *         2px border width
         * @sample {highstock} stock/legend/align/
         *         Various legend options
         * @sample {highmaps} maps/legend/border-background/
         *         Border and background options
         *
         * @type      {number}
         * @default   0
         * @apioption legend.borderWidth
         */
        /**
         * Enable or disable the legend. There is also a series-specific option,
         * [showInLegend](#plotOptions.series.showInLegend), that can hide the
         * series from the legend. In some series types this is `false` by
         * default, so it must set to `true` in order to show the legend for the
         * series.
         *
         * @sample {highcharts} highcharts/legend/enabled-false/ Legend disabled
         * @sample {highstock} stock/legend/align/ Various legend options
         * @sample {highmaps} maps/legend/enabled-false/ Legend disabled
         *
         * @default {highstock} false
         * @default {highmaps} true
         * @default {gantt} false
         */
        enabled: true,
        /**
         * The horizontal alignment of the legend box within the chart area.
         * Valid values are `left`, `center` and `right`.
         *
         * In the case that the legend is aligned in a corner position, the
         * `layout` option will determine whether to place it above/below
         * or on the side of the plot area.
         *
         * @sample {highcharts} highcharts/legend/align/
         *         Legend at the right of the chart
         * @sample {highstock} stock/legend/align/
         *         Various legend options
         * @sample {highmaps} maps/legend/alignment/
         *         Legend alignment
         *
         * @type  {Highcharts.AlignValue}
         * @since 2.0
         */
        align: 'center',
        /**
         * If the [layout](legend.layout) is `horizontal` and the legend items
         * span over two lines or more, whether to align the items into vertical
         * columns. Setting this to `false` makes room for more items, but will
         * look more messy.
         *
         * @since 6.1.0
         */
        alignColumns: true,
        /**
         * A CSS class name to apply to the legend group.
         */
        className: 'highcharts-no-tooltip',
        /**
         * General event handlers for the legend. These event hooks can
         * also be attached to the legend at run time using the
         * `Highcharts.addEvent` function.
         *
         * @declare Highcharts.LegendEventsOptionsObject
         *
         * @private
         */
        events: {},
        /**
         * Fires when the legend item belonging to the series is clicked. One
         * parameter, `event`, is passed to the function. The default action
         * is to toggle the visibility of the series, point or data class. This
         * can be prevented by returning `false` or calling
         * `event.preventDefault()`.
         *
         * @sample {highcharts} highcharts/legend/itemclick/
         *         Confirm hiding and showing
         * @sample {highcharts} highcharts/legend/pie-legend-itemclick/
         *         Confirm toggle visibility of pie slices
         *
         * @type      {Highcharts.LegendItemClickCallbackFunction}
         * @context   Highcharts.Legend
         * @apioption legend.events.itemClick
         */
        /**
         * When the legend is floating, the plot area ignores it and is allowed
         * to be placed below it.
         *
         * @sample {highcharts} highcharts/legend/floating-false/
         *         False by default
         * @sample {highcharts} highcharts/legend/floating-true/
         *         True
         * @sample {highmaps} maps/legend/alignment/
         *         Floating legend
         *
         * @type      {boolean}
         * @default   false
         * @since     2.1
         * @apioption legend.floating
         */
        /**
         * The layout of the legend items. Can be one of `horizontal` or
         * `vertical` or `proximate`. When `proximate`, the legend items will be
         * placed as close as possible to the graphs they're representing,
         * except in inverted charts or when the legend position doesn't allow
         * it.
         *
         * @sample {highcharts} highcharts/legend/layout-horizontal/
         *         Horizontal by default
         * @sample {highcharts} highcharts/legend/layout-vertical/
         *         Vertical
         * @sample highcharts/legend/layout-proximate
         *         Labels proximate to the data
         * @sample {highstock} stock/legend/layout-horizontal/
         *         Horizontal by default
         * @sample {highmaps} maps/legend/padding-itemmargin/
         *         Vertical with data classes
         * @sample {highmaps} maps/legend/layout-vertical/
         *         Vertical with color axis gradient
         *
         * @validvalue ["horizontal", "vertical", "proximate"]
         */
        layout: 'horizontal',
        /**
         * In a legend with horizontal layout, the itemDistance defines the
         * pixel distance between each item.
         *
         * @sample {highcharts} highcharts/legend/layout-horizontal/
         *         50px item distance
         * @sample {highstock} highcharts/legend/layout-horizontal/
         *         50px item distance
         *
         * @type      {number}
         * @default   {highcharts} 20
         * @default   {highstock} 20
         * @default   {highmaps} 8
         * @since     3.0.3
         * @apioption legend.itemDistance
         */
        /**
         * The pixel bottom margin for each legend item.
         *
         * @sample {highcharts|highstock} highcharts/legend/padding-itemmargin/
         *         Padding and item margins demonstrated
         * @sample {highmaps} maps/legend/padding-itemmargin/
         *         Padding and item margins demonstrated
         *
         * @since     2.2.0
         */
        itemMarginBottom: 2,
        /**
         * The pixel top margin for each legend item.
         *
         * @sample {highcharts|highstock} highcharts/legend/padding-itemmargin/
         *         Padding and item margins demonstrated
         * @sample {highmaps} maps/legend/padding-itemmargin/
         *         Padding and item margins demonstrated
         *
         * @since     2.2.0
         */
        itemMarginTop: 2,
        /**
         * The width for each legend item. By default the items are laid out
         * successively. In a [horizontal layout](legend.layout), if the items
         * are laid out across two rows or more, they will be vertically aligned
         * depending on the [legend.alignColumns](legend.alignColumns) option.
         *
         * @sample {highcharts} highcharts/legend/itemwidth-default/
         *         Undefined by default
         * @sample {highcharts} highcharts/legend/itemwidth-80/
         *         80 for aligned legend items
         *
         * @type      {number}
         * @since     2.0
         * @apioption legend.itemWidth
         */
        /**
         * A [format string](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting)
         * for each legend label. Available variables relates to properties on
         * the series, or the point in case of pies.
         *
         * @type      {string}
         * @default   {name}
         * @since     1.3
         * @apioption legend.labelFormat
         */
        /* eslint-disable valid-jsdoc */
        /**
         * Callback function to format each of the series' labels. The `this`
         * keyword refers to the series object, or the point object in case of
         * pie charts. By default the series or point name is printed.
         *
         * @productdesc {highmaps}
         * In Highmaps the context can also be a data class in case of a
         * `colorAxis`.
         *
         * @sample {highcharts} highcharts/legend/labelformatter/
         *         Add text
         * @sample {highmaps} maps/legend/labelformatter/
         *         Data classes with label formatter
         *
         * @type {Highcharts.FormatterCallbackFunction<Point|Series>}
         */
        labelFormatter: function () {
            // eslint-enable valid-jsdoc
            return this.name;
        },
        /**
         * Line height for the legend items. Deprecated as of 2.1\. Instead,
         * the line height for each item can be set using
         * `itemStyle.lineHeight`, and the padding between items using
         * `itemMarginTop` and `itemMarginBottom`.
         *
         * @sample {highcharts} highcharts/legend/lineheight/
         *         Setting padding
         *
         * @deprecated
         *
         * @type      {number}
         * @default   16
         * @since     2.0
         * @product   highcharts gantt
         * @apioption legend.lineHeight
         */
        /**
         * If the plot area sized is calculated automatically and the legend is
         * not floating, the legend margin is the space between the legend and
         * the axis labels or plot area.
         *
         * @sample {highcharts} highcharts/legend/margin-default/
         *         12 pixels by default
         * @sample {highcharts} highcharts/legend/margin-30/
         *         30 pixels
         *
         * @type      {number}
         * @default   12
         * @since     2.1
         * @apioption legend.margin
         */
        /**
         * Maximum pixel height for the legend. When the maximum height is
         * extended, navigation will show.
         *
         * @type      {number}
         * @since     2.3.0
         * @apioption legend.maxHeight
         */
        /**
         * The color of the drawn border around the legend.
         *
         * @see In styled mode, the legend border stroke can be applied with the
         *      `.highcharts-legend-box` class.
         *
         * @sample {highcharts} highcharts/legend/bordercolor/
         *         Brown border
         * @sample {highstock} stock/legend/align/
         *         Various legend options
         * @sample {highmaps} maps/legend/border-background/
         *         Border and background options
         *
         * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         */
        borderColor: "#999999" /* Palette.neutralColor40 */,
        /**
         * The border corner radius of the legend.
         *
         * @sample {highcharts} highcharts/legend/borderradius-default/
         *         Square by default
         * @sample {highcharts} highcharts/legend/borderradius-round/
         *         5px rounded
         * @sample {highmaps} maps/legend/border-background/
         *         Border and background options
         */
        borderRadius: 0,
        /**
         * Options for the paging or navigation appearing when the legend is
         * overflown. Navigation works well on screen, but not in static
         * exported images. One way of working around that is to
         * [increase the chart height in
         * export](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/legend/navigation-enabled-false/).
         *
         * @sample highcharts/legend/scrollable-vertical/
         *         Legend with vertical scrollable extension
         * @sample highcharts/legend/scrollable-horizontal/
         *         Legend with horizontal scrollable extension
         *
         */
        navigation: {
            /**
             * How to animate the pages when navigating up or down. A value of
             * `true` applies the default navigation given in the
             * `chart.animation` option. Additional options can be given as an
             * object containing values for easing and duration.
             *
             * @sample {highcharts} highcharts/legend/navigation/
             *         Legend page navigation demonstrated
             * @sample {highstock} highcharts/legend/navigation/
             *         Legend page navigation demonstrated
             *
             * @type      {boolean|Partial<Highcharts.AnimationOptionsObject>}
             * @default   true
             * @since     2.2.4
             * @apioption legend.navigation.animation
             */
            /**
             * The pixel size of the up and down arrows in the legend paging
             * navigation.
             *
             * @sample {highcharts} highcharts/legend/navigation/
             *         Legend page navigation demonstrated
             * @sample {highstock} highcharts/legend/navigation/
             *         Legend page navigation demonstrated
             *
             * @type      {number}
             * @default   12
             * @since     2.2.4
             * @apioption legend.navigation.arrowSize
             */
            /**
             * Whether to enable the legend navigation. In most cases, disabling
             * the navigation results in an unwanted overflow.
             *
             * See also the
             * [adapt chart to legend](https://github.com/highcharts/adapt-chart-to-legend)
             * plugin for a solution to extend the chart height to make room for
             * the legend, optionally in exported charts only.
             *
             * @type      {boolean}
             * @default   true
             * @since     4.2.4
             * @apioption legend.navigation.enabled
             */
            /**
             * Text styles for the legend page navigation.
             *
             * @see In styled mode, the navigation items are styled with the
             *      `.highcharts-legend-navigation` class.
             *
             * @sample {highcharts} highcharts/legend/navigation/
             *         Legend page navigation demonstrated
             * @sample {highstock} highcharts/legend/navigation/
             *         Legend page navigation demonstrated
             *
             * @type      {Highcharts.CSSObject}
             * @since     2.2.4
             * @apioption legend.navigation.style
             */
            style: {
                /**
                 * @type {number|string}
                 */
                fontSize: '0.8em'
            },
            /**
             * The color for the active up or down arrow in the legend page
             * navigation.
             *
             * @see In styled mode, the active arrow be styled with the
             *      `.highcharts-legend-nav-active` class.
             *
             * @sample  {highcharts} highcharts/legend/navigation/
             *          Legend page navigation demonstrated
             * @sample  {highstock} highcharts/legend/navigation/
             *          Legend page navigation demonstrated
             *
             * @type  {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
             * @since 2.2.4
             */
            activeColor: "#0022ff" /* Palette.highlightColor100 */,
            /**
             * The color of the inactive up or down arrow in the legend page
             * navigation. .
             *
             * @see In styled mode, the inactive arrow be styled with the
             *      `.highcharts-legend-nav-inactive` class.
             *
             * @sample {highcharts} highcharts/legend/navigation/
             *         Legend page navigation demonstrated
             * @sample {highstock} highcharts/legend/navigation/
             *         Legend page navigation demonstrated
             *
             * @type  {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
             * @since 2.2.4
             */
            inactiveColor: "#cccccc" /* Palette.neutralColor20 */
        },
        /**
         * The inner padding of the legend box.
         *
         * @sample {highcharts|highstock} highcharts/legend/padding-itemmargin/
         *         Padding and item margins demonstrated
         * @sample {highmaps} maps/legend/padding-itemmargin/
         *         Padding and item margins demonstrated
         *
         * @type      {number}
         * @default   8
         * @since     2.2.0
         * @apioption legend.padding
         */
        /**
         * Whether to reverse the order of the legend items compared to the
         * order of the series or points as defined in the configuration object.
         *
         * @see [yAxis.reversedStacks](#yAxis.reversedStacks),
         *      [series.legendIndex](#series.legendIndex)
         *
         * @sample {highcharts} highcharts/legend/reversed/
         *         Stacked bar with reversed legend
         *
         * @type      {boolean}
         * @default   false
         * @since     1.2.5
         * @apioption legend.reversed
         */
        /**
         * Whether to show the symbol on the right side of the text rather than
         * the left side. This is common in Arabic and Hebrew.
         *
         * @sample {highcharts} highcharts/legend/rtl/
         *         Symbol to the right
         *
         * @type      {boolean}
         * @default   false
         * @since     2.2
         * @apioption legend.rtl
         */
        /**
         * CSS styles for the legend area. In the 1.x versions the position
         * of the legend area was determined by CSS. In 2.x, the position is
         * determined by properties like `align`, `verticalAlign`, `x` and `y`,
         * but the styles are still parsed for backwards compatibility.
         *
         * @deprecated
         *
         * @type      {Highcharts.CSSObject}
         * @product   highcharts highstock
         * @apioption legend.style
         */
        /**
         * CSS styles for each legend item. Only a subset of CSS is supported,
         * notably those options related to text. The default `textOverflow`
         * property makes long texts truncate. Set it to `undefined` to wrap
         * text instead. A `width` property can be added to control the text
         * width.
         *
         * @see In styled mode, the legend items can be styled with the
         *      `.highcharts-legend-item` class.
         *
         * @sample {highcharts} highcharts/legend/itemstyle/
         *         Bold black text
         * @sample {highmaps} maps/legend/itemstyle/
         *         Item text styles
         *
         * @type    {Highcharts.CSSObject}
         * @default {"color": "#333333", "cursor": "pointer", "fontSize": "0.8em", "fontWeight": "bold", "textOverflow": "ellipsis"}
         */
        itemStyle: {
            /**
             * @ignore
             */
            color: "#333333" /* Palette.neutralColor80 */,
            /**
             * @ignore
             */
            cursor: 'pointer',
            /**
             * @ignore
             */
            fontSize: '0.8em',
            /**
             * @ignore
             */
            textDecoration: 'none',
            /**
             * @ignore
             */
            textOverflow: 'ellipsis'
        },
        /**
         * CSS styles for each legend item in hover mode. Only a subset of
         * CSS is supported, notably those options related to text. Properties
         * are inherited from `style` unless overridden here.
         *
         * @see In styled mode, the hovered legend items can be styled with
         *      the `.highcharts-legend-item:hover` pseudo-class.
         *
         * @sample {highcharts} highcharts/legend/itemhoverstyle/
         *         Red on hover
         * @sample {highmaps} maps/legend/itemstyle/
         *         Item text styles
         *
         * @type    {Highcharts.CSSObject}
         * @default {"color": "#000000"}
         */
        itemHoverStyle: {
            /**
             * @ignore
             */
            color: "#000000" /* Palette.neutralColor100 */
        },
        /**
         * CSS styles for each legend item when the corresponding series or
         * point is hidden. Only a subset of CSS is supported, notably those
         * options related to text. Properties are inherited from `style`
         * unless overridden here.
         *
         * @see In styled mode, the hidden legend items can be styled with
         *      the `.highcharts-legend-item-hidden` class.
         *
         * @sample {highcharts} highcharts/legend/itemhiddenstyle/
         *         Darker gray color
         *
         * @type    {Highcharts.CSSObject}
         * @default {"color": "#cccccc"}
         */
        itemHiddenStyle: {
            /**
             * @ignore
             */
            color: "#666666" /* Palette.neutralColor60 */,
            /**
             * @ignore
             */
            textDecoration: 'line-through'
        },
        /**
         * Whether to apply a drop shadow to the legend. A `backgroundColor`
         * also needs to be applied for this to take effect. The shadow can be
         * an object configuration containing `color`, `offsetX`, `offsetY`,
         * `opacity` and `width`.
         *
         * @sample {highcharts} highcharts/legend/shadow/
         *         White background and drop shadow
         * @sample {highstock} stock/legend/align/
         *         Various legend options
         * @sample {highmaps} maps/legend/border-background/
         *         Border and background options
         *
         * @type {boolean|Highcharts.CSSObject}
         */
        shadow: false,
        /**
         * Default styling for the checkbox next to a legend item when
         * `showCheckbox` is true.
         *
         * @type {Highcharts.CSSObject}
         * @default {"width": "13px", "height": "13px", "position":"absolute"}
         */
        itemCheckboxStyle: {
            /**
             * @ignore
             */
            position: 'absolute',
            /**
             * @ignore
             */
            width: '13px', // For IE precision
            /**
             * @ignore
             */
            height: '13px'
        },
        /// itemWidth: undefined,
        /**
         * When this is true, the legend symbol width will be the same as
         * the symbol height, which in turn defaults to the font size of the
         * legend items.
         *
         * @since 5.0.0
         */
        squareSymbol: true,
        /**
         * The pixel height of the symbol for series types that use a rectangle
         * in the legend. Defaults to the font size of legend items.
         *
         * Note: This option is a default source of color axis height, if the
         * [colorAxis.height](https://api.highcharts.com/highcharts/colorAxis.height)
         * option is not set.
         *
         * @productdesc {highmaps}
         * In Highmaps, when the symbol is the gradient of a vertical color
         * axis, the height defaults to 200.
         *
         * @sample {highmaps} maps/legend/layout-vertical-sized/
         *         Sized vertical gradient
         * @sample {highmaps} maps/legend/padding-itemmargin/
         *         No distance between data classes
         *
         * @type      {number}
         * @since     3.0.8
         * @apioption legend.symbolHeight
         */
        /**
         * The border radius of the symbol for series types that use a rectangle
         * in the legend. Defaults to half the `symbolHeight`, effectively
         * creating a circle.
         *
         * For color axis scales, it defaults to 3.
         *
         * @sample {highcharts} highcharts/legend/symbolradius/
         *         Round symbols
         * @sample {highstock} highcharts/legend/symbolradius/
         *         Round symbols
         * @sample {highmaps} highcharts/legend/symbolradius/
         *         Round symbols
         *
         * @type      {number}
         * @since     3.0.8
         * @apioption legend.symbolRadius
         */
        /**
         * The pixel width of the legend item symbol. When the `squareSymbol`
         * option is set, this defaults to the `symbolHeight`, otherwise 16.
         *
         * Note: This option is a default source of color axis width, if the
         * [colorAxis.width](https://api.highcharts.com/highcharts/colorAxis.width)
         * option is not set.
         *
         * @productdesc {highmaps}
         * In Highmaps, when the symbol is the gradient of a horizontal color
         * axis, the width defaults to 200.
         *
         * @sample {highcharts} highcharts/legend/symbolwidth/
         *         Greater symbol width and padding
         * @sample {highmaps} maps/legend/padding-itemmargin/
         *         Padding and item margins demonstrated
         * @sample {highmaps} maps/legend/layout-vertical-sized/
         *         Sized vertical gradient
         *
         * @type      {number}
         * @apioption legend.symbolWidth
         */
        /**
         * Whether to [use HTML](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html)
         * to render the legend item texts.
         *
         * Prior to 4.1.7, when using HTML, [legend.navigation](
         * #legend.navigation) was disabled.
         *
         * @sample highcharts/legend/scrollable-vertical/
         *         Legend with vertical scrollable extension
         * @sample highcharts/legend/scrollable-horizontal/
         *         Legend with horizontal scrollable extension
         *
         * @type      {boolean}
         * @default   false
         * @apioption legend.useHTML
         */
        /**
         * For a color axis with data classes, how many decimals to render in
         * the legend. The default preserves the decimals of the range numbers.
         *
         * @type      {number}
         * @default   -1
         * @product   highcharts highmaps
         * @apioption legend.valueDecimals
         */
        /**
         * For a color axis with data classes, a suffix for the range numbers in
         * the legend.
         *
         * @type      {string}
         * @default   ''
         * @product   highcharts highmaps
         * @apioption legend.valueSuffix
         */
        /**
         * The width of the legend box. If a number is set, it translates to
         * pixels. Since v7.0.2 it allows setting a percent string of the full
         * chart width, for example `40%`.
         *
         * Defaults to the full chart width for legends below or above the
         * chart, half the chart width for legends to the left and right.
         *
         * @sample {highcharts} highcharts/legend/width/
         *         Aligned to the plot area
         * @sample {highcharts} highcharts/legend/width-percent/
         *         A percent of the chart width
         *
         * @type      {number|string}
         * @since     2.0
         * @apioption legend.width
         */
        /**
         * The pixel padding between the legend item symbol and the legend
         * item text.
         *
         * @sample {highcharts} highcharts/legend/symbolpadding/
         *         Greater symbol width and padding
         */
        symbolPadding: 5,
        /**
         * The vertical alignment of the legend box. Can be one of `top`,
         * `middle` or `bottom`. Vertical position can be further determined
         * by the `y` option.
         *
         * In the case that the legend is aligned in a corner position, the
         * `layout` option will determine whether to place it above/below
         * or on the side of the plot area.
         *
         * When the [layout](#legend.layout) option is `proximate`, the
         * `verticalAlign` option doesn't apply.
         *
         * @sample {highcharts} highcharts/legend/verticalalign/
         *         Legend 100px from the top of the chart
         * @sample {highstock} stock/legend/align/
         *         Various legend options
         * @sample {highmaps} maps/legend/alignment/
         *         Legend alignment
         *
         * @type  {Highcharts.VerticalAlignValue}
         * @since 2.0
         */
        verticalAlign: 'bottom',
        // Width: undefined,
        /**
         * The x offset of the legend relative to its horizontal alignment
         * `align` within chart.spacingLeft and chart.spacingRight. Negative
         * x moves it to the left, positive x moves it to the right.
         *
         * @sample {highcharts} highcharts/legend/width/
         *         Aligned to the plot area
         *
         * @since 2.0
         */
        x: 0,
        /**
         * The vertical offset of the legend relative to it's vertical alignment
         * `verticalAlign` within chart.spacingTop and chart.spacingBottom.
         *  Negative y moves it up, positive y moves it down.
         *
         * @sample {highcharts} highcharts/legend/verticalalign/
         *         Legend 100px from the top of the chart
         * @sample {highstock} stock/legend/align/
         *         Various legend options
         * @sample {highmaps} maps/legend/alignment/
         *         Legend alignment
         *
         * @since 2.0
         */
        y: 0,
        /**
         * A title to be added on top of the legend.
         *
         * @sample {highcharts} highcharts/legend/title/
         *         Legend title
         * @sample {highmaps} maps/legend/alignment/
         *         Legend with title
         *
         * @since 3.0
         */
        title: {
            /**
             * A text or HTML string for the title.
             *
             * @type      {string}
             * @since     3.0
             * @apioption legend.title.text
             */
            /**
             * Generic CSS styles for the legend title.
             *
             * @see In styled mode, the legend title is styled with the
             *      `.highcharts-legend-title` class.
             *
             * @type    {Highcharts.CSSObject}
             * @default {"fontSize": "0.8em", "fontWeight": "bold"}
             * @since   3.0
             */
            style: {
                /**
                 * @ignore
                 */
                fontSize: '0.8em',
                /**
                 * @ignore
                 */
                fontWeight: 'bold'
            }
        }
    },
    /**
     * The loading options control the appearance of the loading screen
     * that covers the plot area on chart operations. This screen only
     * appears after an explicit call to `chart.showLoading()`. It is a
     * utility for developers to communicate to the end user that something
     * is going on, for example while retrieving new data via an XHR connection.
     * The "Loading..." text itself is not part of this configuration
     * object, but part of the `lang` object.
     */
    loading: {
        /**
         * The duration in milliseconds of the fade out effect.
         *
         * @sample highcharts/loading/hideduration/
         *         Fade in and out over a second
         *
         * @type      {number}
         * @default   100
         * @since     1.2.0
         * @apioption loading.hideDuration
         */
        /**
         * The duration in milliseconds of the fade in effect.
         *
         * @sample highcharts/loading/hideduration/
         *         Fade in and out over a second
         *
         * @type      {number}
         * @default   100
         * @since     1.2.0
         * @apioption loading.showDuration
         */
        /**
         * CSS styles for the loading label `span`.
         *
         * @see In styled mode, the loading label is styled with the
         *      `.highcharts-loading-inner` class.
         *
         * @sample {highcharts|highmaps} highcharts/loading/labelstyle/
         *         Vertically centered
         * @sample {highstock} stock/loading/general/
         *         Label styles
         *
         * @type    {Highcharts.CSSObject}
         * @default {"fontWeight": "bold", "position": "relative", "top": "45%"}
         * @since   1.2.0
         */
        labelStyle: {
            /**
             * @ignore
             */
            fontWeight: 'bold',
            /**
             * @ignore
             */
            position: 'relative',
            /**
             * @ignore
             */
            top: '45%'
        },
        /**
         * CSS styles for the loading screen that covers the plot area.
         *
         * In styled mode, the loading label is styled with the
         * `.highcharts-loading` class.
         *
         * @sample  {highcharts|highmaps} highcharts/loading/style/
         *          Gray plot area, white text
         * @sample  {highstock} stock/loading/general/
         *          Gray plot area, white text
         *
         * @type    {Highcharts.CSSObject}
         * @default {"position": "absolute", "backgroundColor": "#ffffff", "opacity": 0.5, "textAlign": "center"}
         * @since   1.2.0
         */
        style: {
            /**
             * @ignore
             */
            position: 'absolute',
            /**
             * @ignore
             */
            backgroundColor: "#ffffff" /* Palette.backgroundColor */,
            /**
             * @ignore
             */
            opacity: 0.5,
            /**
             * @ignore
             */
            textAlign: 'center'
        }
    },
    /**
     * Options for the tooltip that appears when the user hovers over a
     * series or point.
     *
     * @declare Highcharts.TooltipOptions
     */
    tooltip: {
        /**
         * The color of the tooltip border. When `undefined`, the border takes
         * the color of the corresponding series or point.
         *
         * Note that the [borderWidth](#tooltip.borderWidth) is usually 0 by
         * default, so the border color may not be visible until a border width
         * is set.
         *
         * @sample {highcharts} highcharts/tooltip/bordercolor-default/ Follow
         *         series by default
         * @sample {highcharts} highcharts/tooltip/bordercolor-black/ Black
         *         border
         * @sample {highstock} stock/tooltip/general/ Styled tooltip
         * @sample {highmaps} maps/tooltip/background-border/ Background and
         *         border demo
         *
         * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @apioption tooltip.borderColor
         */
        /**
         * A CSS class name to apply to the tooltip's container div,
         * allowing unique CSS styling for each chart.
         *
         * @type      {string}
         * @apioption tooltip.className
         */
        /**
         * Since 4.1, the crosshair definitions are moved to the Axis object
         * in order for a better separation from the tooltip. See
         * [xAxis.crosshair](#xAxis.crosshair).
         *
         * @sample {highcharts} highcharts/tooltip/crosshairs-x/
         *         Enable a crosshair for the x value
         *
         * @deprecated
         *
         * @type      {*}
         * @default   true
         * @apioption tooltip.crosshairs
         */
        /**
         * Distance from point to tooltip in pixels.
         *
         * @type      {number}
         * @default   16
         * @apioption tooltip.distance
         */
        /**
         * Whether the tooltip should be fixed to one position in the chart, or
         * located next to the point or mouse. When the tooltip is fixed, the
         * position can be further specified with the
         * [tooltip.position](#tooltip.position) options set.
         *
         * @sample    highcharts/tooltip/fixed/
         *            Fixed tooltip and position options
         * @sample    {highstock} stock/tooltip/fixed/
         *            Stock chart with fixed tooltip
         * @sample    {highmaps} maps/tooltip/fixed/
         *            Map with fixed tooltip
         *
         * @type      {boolean}
         * @default   false
         * @since     next
         * @apioption tooltip.fixed
         */
        /**
         * Whether the tooltip should follow the mouse as it moves across
         * columns, pie slices and other point types with an extent.
         * By default it behaves this way for pie, polygon, map, sankey
         * and wordcloud series by override in the `plotOptions`
         * for those series types.
         *
         * Does not apply if [split](#tooltip.split) is `true`.
         *
         * For touch moves to behave the same way, [followTouchMove](
         * #tooltip.followTouchMove) must be `true` also.
         *
         * @sample highcharts/tooltip/followpointer/
         *         Tooltip follow pointer comparison
         *
         * @type      {boolean}
         * @default   {highcharts} false
         * @default   {highstock} false
         * @default   {highmaps} true
         * @since     3.0
         * @apioption tooltip.followPointer
         */
        /**
         * Whether the tooltip should update as the finger moves on a touch
         * device. If this is `true` and [chart.panning](#chart.panning) is
         * set,`followTouchMove` will take over one-finger touches, so the user
         * needs to use two fingers for zooming and panning.
         *
         * Note the difference to [followPointer](#tooltip.followPointer) that
         * only defines the _position_ of the tooltip. If `followPointer` is
         * false in for example a column series, the tooltip will show above or
         * below the column, but as `followTouchMove` is true, the tooltip will
         * jump from column to column as the user swipes across the plot area.
         *
         * @type      {boolean}
         * @default   {highcharts} true
         * @default   {highstock} true
         * @default   {highmaps} false
         * @since     3.0.1
         * @apioption tooltip.followTouchMove
         */
        /**
         * A [format string](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting)
         * for the whole shared tooltip. When format strings are a requirement,
         * it is usually more convenient to use `headerFormat`, `pointFormat`
         * and `footerFormat`, but the `format` option allows combining them
         * into one setting.
         *
         * The context of the format string is the same as that of the
         * `tooltip.formatter` callback.
         *
         * @sample {highcharts} highcharts/tooltip/format-shared/
         *         Format for shared tooltip
         *
         * @type      {string}
         * @default   undefined
         * @since     11.1.0
         * @apioption tooltip.format
         */
        /**
         * Callback function to format the text of the tooltip from scratch. In
         * case of single or [shared](#tooltip.shared) tooltips, a string should
         * be returned. In case of [split](#tooltip.split) tooltips, it should
         * return an array where the first item is the header, and subsequent
         * items are mapped to the points. Return `false` to disable tooltip for
         * a specific point on series.
         *
         * A subset of HTML is supported. Unless `useHTML` is true, the HTML of
         * the tooltip is parsed and converted to SVG, therefore this isn't a
         * complete HTML renderer. The following HTML tags are supported: `b`,
         * `br`, `em`, `i`, `span`, `strong`. Spans can be styled with a `style`
         * attribute, but only text-related CSS, that is shared with SVG, is
         * handled.
         *
         * The context of the formatter (since v12) is the
         * [Point](https://api.highcharts.com/class-reference/Highcharts.Point)
         * instance. If the tooltip is shared or split, an array `this.points`
         * contains all points of the hovered x-value.
         *
         * Common properties from the Point to use in the formatter include:
         *
         * - **Point.percentage**:
         *   Stacked series and pies only. The point's percentage of the total.
         *
         * - **Point.points**:
         *   In a shared or split tooltip, this is an array containing all the
         *   hovered points.
         *
         * - **this.series**:
         *   The series object. The series name is available through
         *   `this.series.name`.
         *
         * - **this.total**:
         *   The total value at this point's x value in a stacked series, or the
         *   sum of all slices in a pie series.
         *
         * - **this.x**:
         *   The x value.
         *
         * - **this.y**:
         *   The y value.
         *
         * @sample {highcharts} highcharts/tooltip/formatter-simple/
         *         Simple string formatting
         * @sample {highcharts} highcharts/tooltip/formatter-shared/
         *         Formatting with shared tooltip
         * @sample {highcharts|highstock} highcharts/tooltip/formatter-split/
         *         Formatting with split tooltip
         * @sample highcharts/tooltip/formatter-conditional-default/
         *         Extending default formatter
         * @sample {highstock} stock/tooltip/formatter/
         *         Formatting with shared tooltip
         * @sample {highmaps} maps/tooltip/formatter/
         *         String formatting
         *
         * @type      {Highcharts.TooltipFormatterCallbackFunction}
         * @apioption tooltip.formatter
         */
        /**
         * Callback function to format the text of the tooltip for
         * visible null points.
         * Works analogously to [formatter](#tooltip.formatter).
         *
         * @sample highcharts/plotoptions/series-nullformat
         *         Format data label and tooltip for null point.
         *
         * @type      {Highcharts.TooltipFormatterCallbackFunction}
         * @apioption tooltip.nullFormatter
         */
        /**
         * Whether to allow the tooltip to render outside the chart's SVG
         * element box. By default (`false`), the tooltip is rendered within the
         * chart's SVG element, which results in the tooltip being aligned
         * inside the chart area. For small charts, this may result in clipping
         * or overlapping. When `true`, a separate SVG element is created and
         * overlaid on the page, allowing the tooltip to be aligned inside the
         * page itself. Beware that with this option active, CSS classes on the
         * chart's target container, with classnames matching the pattern
         * 'highcharts-*', will be set on the tooltip as well. This is done to
         * support theming for tooltips with this option.
         *
         * Defaults to `true` if `chart.scrollablePlotArea` is activated,
         * otherwise `false`.
         *
         * @sample highcharts/tooltip/outside
         *         Small charts with tooltips outside
         *
         * @type      {boolean|undefined}
         * @default   undefined
         * @since     6.1.1
         * @apioption tooltip.outside
         */
        /**
         * A callback function for formatting the HTML output for a single point
         * in the tooltip. Like the `pointFormat` string, but with more
         * flexibility.
         *
         * @type      {Highcharts.FormatterCallbackFunction<Highcharts.Point>}
         * @since     4.1.0
         * @context   Highcharts.Point
         * @apioption tooltip.pointFormatter
         */
        /**
         * A callback function to place the tooltip in a custom position. The
         * callback receives three parameters: `labelWidth`, `labelHeight` and
         * `point`, where point contains values for `plotX` and `plotY` telling
         * where the reference point is in the plot area. Add `chart.plotLeft`
         * and `chart.plotTop` to get the full coordinates.
         *
         * To find the actual hovered `Point` instance, use
         * `this.chart.hoverPoint`. For shared or split tooltips, all the hover
         * points are available in `this.chart.hoverPoints`.
         *
         * Since v7, when [tooltip.split](#tooltip.split) option is enabled,
         * positioner is called for each of the boxes separately, including
         * xAxis header. xAxis header is not a point, instead `point` argument
         * contains info: `{ plotX: Number, plotY: Number, isHeader: Boolean }`
         *
         * Since v12.2, the [tooltip.fixed](#tooltip.fixed) option combined with
         * [tooltip.position](#tooltip.position) covers most of the use cases
         * for custom tooltip positioning.
         *
         * The return should be an object containing x and y values, for example
         * `{ x: 100, y: 100 }`.
         *
         * @sample {highcharts} highcharts/tooltip/positioner/
         *         A fixed tooltip position
         * @sample {highstock} stock/tooltip/positioner/
         *         A fixed tooltip position on top of the chart
         * @sample {highmaps} maps/tooltip/positioner/
         *         A fixed tooltip position
         * @sample {highstock} stock/tooltip/split-positioner/
         *         Split tooltip with fixed positions
         * @sample {highstock} stock/tooltip/positioner-scrollable-plotarea/
         *         Scrollable plot area combined with tooltip positioner
         *
         * @see [position](#tooltip.position)
         *
         * @type      {Highcharts.TooltipPositionerCallbackFunction}
         * @since     2.2.4
         * @apioption tooltip.positioner
         */
        /**
         * Shows tooltip for all points with the same X value. Splits the
         * tooltip into one label per series, with the header close to the axis.
         * This is recommended over [shared](#tooltip.shared)
         * tooltips for charts with multiple line series, generally making them
         * easier to read. This option takes precedence over `tooltip.shared`.
         *
         * Not supported for [polar](#chart.polar) and [inverted](#chart.inverted) charts.
         *
         * @productdesc {highstock} In Highcharts Stock, tooltips are split
         * by default since v6.0.0. Stock charts typically contain
         * multi-dimension points and multiple panes, making split tooltips
         * the preferred layout over
         * the previous `shared` tooltip.
         *
         * @sample highcharts/tooltip/split/
         *         Split tooltip
         * @sample {highcharts|highstock} highcharts/tooltip/formatter-split/
         *         Split tooltip and custom formatter callback
         *
         * @type      {boolean}
         * @default   {highcharts} false
         * @default   {highstock} true
         * @since     5.0.0
         * @product   highcharts highstock
         * @apioption tooltip.split
         */
        /**
         * Prevents the tooltip from switching or closing, when touched or
         * pointed.
         *
         * @sample highcharts/tooltip/stickoncontact/
         *         Tooltip sticks on pointer contact
         *
         * @type      {boolean}
         * @since     8.0.1
         * @apioption tooltip.stickOnContact
         */
        /**
         * Use HTML to render the contents of the tooltip instead of SVG. Using
         * HTML allows advanced formatting like tables and images in the
         * tooltip. It is also recommended for rtl languages as it works around
         * rtl bugs in early Firefox.
         *
         * @sample {highcharts|highstock} highcharts/tooltip/footerformat/
         *         A table for value alignment
         * @sample {highcharts|highstock} highcharts/tooltip/fullhtml/
         *         Full HTML tooltip
         * @sample {highmaps} maps/tooltip/usehtml/
         *         Pure HTML tooltip
         *
         * @type      {boolean}
         * @default   false
         * @since     2.2
         * @apioption tooltip.useHTML
         */
        /**
         * How many decimals to show in each series' y value. This is
         * overridable in each series' tooltip options object. The default is to
         * preserve all decimals.
         *
         * @sample {highcharts|highstock} highcharts/tooltip/valuedecimals/
         *         Set decimals, prefix and suffix for the value
         * @sample {highmaps} maps/tooltip/valuedecimals/
         *         Set decimals, prefix and suffix for the value
         *
         * @type      {number|undefined}
         * @since     2.2
         * @apioption tooltip.valueDecimals
         */
        /**
         * A string to prepend to each series' y value. Overridable in each
         * series' tooltip options object.
         *
         * @sample {highcharts|highstock} highcharts/tooltip/valuedecimals/
         *         Set decimals, prefix and suffix for the value
         * @sample {highmaps} maps/tooltip/valuedecimals/
         *         Set decimals, prefix and suffix for the value
         *
         * @type      {string}
         * @since     2.2
         * @apioption tooltip.valuePrefix
         */
        /**
         * A string to append to each series' y value. Overridable in each
         * series' tooltip options object.
         *
         * @sample {highcharts|highstock} highcharts/tooltip/valuedecimals/
         *         Set decimals, prefix and suffix for the value
         * @sample {highmaps} maps/tooltip/valuedecimals/
         *         Set decimals, prefix and suffix for the value
         *
         * @type      {string}
         * @since     2.2
         * @apioption tooltip.valueSuffix
         */
        /**
         * The format for the date in the tooltip header if the X axis is a
         * datetime axis. The default is a best guess based on the smallest
         * distance between points in the chart.
         *
         * @sample {highcharts} highcharts/tooltip/xdateformat/
         *         A different format
         *
         * @type      {string|Highcharts.DateTimeFormatOptions}
         * @product   highcharts highstock gantt
         * @apioption tooltip.xDateFormat
         */
        /**
         * How many decimals to show for the `point.change`
         * or the `point.cumulativeSum` value when the `series.compare`
         * or the `series.cumulative` option is set.
         * This is overridable in each series' tooltip options object.
         *
         * @type      {number}
         * @default   2
         * @since     1.0.1
         * @product   highstock
         * @apioption tooltip.changeDecimals
         */
        /**
         * Enable or disable the tooltip.
         *
         * @sample {highcharts} highcharts/tooltip/enabled/
         *         Disabled
         * @sample {highcharts} highcharts/plotoptions/series-point-events-mouseover/
         *         Disable tooltip and show values on chart instead
         */
        enabled: true,
        /**
         * Enable or disable animation of the tooltip.
         *
         * @type       {boolean|Partial<Highcharts.AnimationOptionsObject>}
         * @since      2.3.0
         */
        animation: {
            duration: 300,
            // EaseOutCirc
            easing: (x) => Math.sqrt(1 - Math.pow(x - 1, 2))
        },
        /**
         * The radius of the rounded border corners.
         *
         * @sample {highcharts} highcharts/tooltip/bordercolor-default/
         *         Default border radius
         * @sample {highcharts} highcharts/tooltip/borderradius-0/
         *         Square borders
         * @sample {highmaps} maps/tooltip/background-border/
         *         Background and border demo
         */
        borderRadius: 3,
        /**
         * For series on datetime axes, the date format in the tooltip's
         * header will by default be guessed based on the closest data points.
         * This member gives the default string representations used for
         * each unit. For an overview of the string or object configuration, see
         * [dateFormat](/class-reference/Highcharts.Time#dateFormat).
         *
         * @see [xAxis.dateTimeLabelFormats](#xAxis.dateTimeLabelFormats)
         *
         * @type    {Highcharts.Dictionary<string|Highcharts.DateTimeFormatOptions>}
         * @product highcharts highstock gantt
         */
        dateTimeLabelFormats: {
            /** @internal */
            millisecond: '%[AebHMSL]',
            /** @internal */
            second: '%[AebHMS]',
            /** @internal */
            minute: '%[AebHM]',
            /** @internal */
            hour: '%[AebHM]',
            /** @internal */
            day: '%[AebY]',
            /** @internal */
            week: '%v %[AebY]',
            /** @internal */
            month: '%[BY]',
            /** @internal */
            year: '%Y'
        },
        /**
         * A string to append to the tooltip format.
         *
         * @sample {highcharts} highcharts/tooltip/footerformat/
         *         A table for value alignment
         * @sample {highmaps} maps/tooltip/format/
         *         Format demo
         *
         * @since 2.2
         */
        footerFormat: '',
        /**
         * The name of a symbol to use for the border around the tooltip
         * header. Applies only when [tooltip.split](#tooltip.split) is
         * enabled.
         *
         * Custom callbacks for symbol path generation can also be added to
         * `Highcharts.SVGRenderer.prototype.symbols` the same way as for
         * [series.marker.symbol](plotOptions.line.marker.symbol).
         *
         * @see [tooltip.shape](#tooltip.shape)
         *
         * @sample {highstock} stock/tooltip/split-positioner/
         *         Different shapes for header and split boxes
         *
         * @type       {Highcharts.TooltipShapeValue}
         * @validvalue ["callout", "rect"]
         * @since      7.0
         */
        headerShape: 'callout',
        /**
         * The number of milliseconds to wait until the tooltip is hidden when
         * mouse out from a point or chart.
         *
         * @since 3.0
         */
        hideDelay: 500,
        /**
         * Padding inside the tooltip, in pixels.
         *
         * @since 5.0.0
         */
        padding: 8,
        /**
         * Positioning options for fixed tooltip, taking effect only when
         * [tooltip.fixed](#tooltip.fixed) is `true`.
         *
         * @sample {highcharts} highcharts/tooltip/fixed/
         *         Fixed tooltip and position options
         * @sample {highstock} stock/tooltip/fixed/
         *         Stock chart with fixed tooltip
         * @sample {highmaps} maps/tooltip/fixed/
         *         Map with fixed tooltip
         *
         * @since next
         */
        position: {
            /**
             * The horizontal alignment of the fixed tooltip.
             *
             * @sample highcharts/tooltip/fixed/
             *         Fixed tooltip
             * @sample {highstock} stock/tooltip/fixed/
             *         Stock chart with fixed tooltip
             *
             * @type {Highcharts.AlignValue}
             * @default left
             * @apioption tooltip.position.align
             */
            /**
             * The vertical alignment of the fixed tooltip.
             *
             * @sample highcharts/tooltip/fixed/
             *         Fixed tooltip
             * @sample {highstock} stock/tooltip/fixed/
             *         Stock chart with fixed tooltip
             *
             * @type {Highcharts.VerticalAlignValue}
             * @default top
             * @apioption tooltip.position.verticalAlign
             */
            /**
             * What the fixed tooltip alignment should be relative to.
             *
             * The default, `pane`, means that it is aligned within the plot
             * area for that given series. If the tooltip is split (as default
             * in Stock charts), each partial tooltip is aligned within the
             * series' pane.
             *
             * @sample highcharts/tooltip/fixed/
             *         Fixed tooltip
             * @sample {highstock} stock/tooltip/fixed/
             *         Stock chart with fixed tooltip
             *
             * @type {string}
             * @default pane
             * @validvalue ["pane", "chart", "plotBox", "spacingBox"]
             * @apioption tooltip.position.relativeTo
             */
            /**
             * X pixel offset from the given position. Can be used to shy away
             * from axis lines, grid lines etc to avoid the tooltip overlapping
             * other elements.
             *
             * @sample highcharts/tooltip/fixed/
             *         Fixed tooltip
             * @sample {highstock} stock/tooltip/fixed/
             *         Stock chart with fixed tooltip
             */
            x: 0,
            /**
             * Y pixel offset from the given position. Can be used to shy away
             * from axis lines, grid lines etc to avoid the tooltip overlapping
             * other elements.
             *
             * @sample highcharts/tooltip/fixed/
             *         Fixed tooltip
             * @sample {highstock} stock/tooltip/fixed/
             *         Stock chart with fixed tooltip
             */
            y: 3
        },
        /**
         * The name of a symbol to use for the border around the tooltip. Can
         * be one of: `"callout"`, `"circle"` or `"rect"`. When
         * [tooltip.split](#tooltip.split)
         * option is enabled, shape is applied to all boxes except header, which
         * is controlled by
         * [tooltip.headerShape](#tooltip.headerShape).
         *
         * Custom callbacks for symbol path generation can also be added to
         * `Highcharts.SVGRenderer.prototype.symbols` the same way as for
         * [series.marker.symbol](plotOptions.line.marker.symbol).
         *
         * Defaults to `callout` for floating tooltip, `rect` for
         * [fixed](#tooltip.fixed) tooltip.
         *
         * @type  {Highcharts.TooltipShapeValue}
         * @since 4.0
         * @default undefined
         * @apioption tooltip.shape
         */
        /**
         * Shows information in the tooltip for all points with the same X
         * value. When the tooltip is shared, the entire plot area will capture
         * mouse movement or touch events. Tooltip texts for series types with
         * ordered data (not pie, scatter, flags etc) will be shown in a single
         * bubble. This is recommended for single series charts and for
         * tablet/mobile optimized charts.
         *
         * See also [tooltip.split](#tooltip.split), that is better suited for
         * charts with many series, especially line-type series. The
         * `tooltip.split` option takes precedence over `tooltip.shared`.
         *
         * @sample {highcharts} highcharts/tooltip/shared-false/
         *         False by default
         * @sample {highcharts} highcharts/tooltip/shared-true/
         *         True
         * @sample {highcharts} highcharts/tooltip/shared-x-crosshair/
         *         True with x axis crosshair
         * @sample {highcharts} highcharts/tooltip/shared-true-mixed-types/
         *         True with mixed series types
         *
         * @since   2.1
         * @product highcharts highstock
         */
        shared: false,
        /**
         * Proximity snap for graphs or single points. It defaults to 10 for
         * mouse-powered devices and 25 for touch devices.
         *
         * Note that in most cases the whole plot area captures the mouse
         * movement, and in these cases `tooltip.snap` doesn't make sense. This
         * applies when [stickyTracking](#plotOptions.series.stickyTracking)
         * is `true` (default) and when the tooltip is [shared](#tooltip.shared)
         * or [split](#tooltip.split).
         *
         * @sample {highcharts} highcharts/tooltip/bordercolor-default/
         *         10 px by default
         * @sample {highcharts} highcharts/tooltip/snap-50/
         *         50 px on graph
         *
         * @type    {number}
         * @default 10/25
         * @since   1.2.0
         * @product highcharts highstock
         */
        snap: isTouchDevice ? 25 : 10,
        /**
         * The HTML of the tooltip header line. The context is the
         * [Point class](https://api.highcharts.com/class-reference/Highcharts.Point).
         * Variables are enclosed in curly brackets. Examples of common
         * variables to include are `x`, `y`, `series.name` and `series.color`
         * and other properties on the same form. The `point.key` variable
         * contains the category name, x value or datetime string depending on
         * the type of axis. For datetime axes, the `point.key` date format can
         * be set using `tooltip.xDateFormat`.
         *
         * @sample {highcharts} highcharts/tooltip/footerformat/
         *         An HTML table in the tooltip
         * @sample {highstock} highcharts/tooltip/footerformat/
         *         An HTML table in the tooltip
         * @sample {highmaps} maps/tooltip/format/
         *         Format demo
         *
         * @type      {string}
         * @apioption tooltip.headerFormat
         */
        headerFormat: '<span style="font-size: 0.8em">{ucfirst point.key}</span><br/>',
        /**
         * The HTML of the null point's line in the tooltip. Works analogously
         * to [pointFormat](#tooltip.pointFormat).
         *
         * @sample {highcharts} highcharts/series/null-interaction
         *         Line chart with null interaction
         * @sample {highcharts} highcharts/plotoptions/series-nullformat
         *         Heatmap with null interaction
         *
         * @type      {string}
         * @apioption tooltip.nullFormat
         */
        /**
         * The HTML of the point's line in the tooltip. The context is the
         * [Point class](https://api.highcharts.com/class-reference/Highcharts.Point).
         * Variables are enclosed in curly brackets. Examples of common
         * variables to include are `x`, `y`, `series.name` and `series.color`
         * and other properties on the same form. Furthermore, `y` can be
         * extended by the `tooltip.valuePrefix` and `tooltip.valueSuffix`
         * variables. This can also be overridden for each series, which makes
         * it a good hook for displaying units.
         *
         * In styled mode, the dot is colored by a class name rather than the
         * point color.
         *
         * @sample {highcharts} highcharts/tooltip/pointformat/
         *         A different point format with value suffix
         * @sample {highcharts|highstock} highcharts/tooltip/pointformat-extra-information/
         *         Show extra information about points in the tooltip
         * @sample {highmaps} maps/tooltip/format/
         *         Format demo
         *
         * @type       {string}
         * @since      2.2
         * @apioption  tooltip.pointFormat
         */
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
        /**
         * The background color or gradient for the tooltip.
         *
         * In styled mode, the stroke width is set in the
         * `.highcharts-tooltip-box` class.
         *
         * @sample {highcharts} highcharts/tooltip/backgroundcolor-solid/
         *         Yellowish background
         * @sample {highcharts} highcharts/tooltip/backgroundcolor-gradient/
         *         Gradient
         * @sample {highcharts} highcharts/css/tooltip-border-background/
         *         Tooltip in styled mode
         * @sample {highstock} stock/tooltip/general/
         *         Custom tooltip
         * @sample {highstock} highcharts/css/tooltip-border-background/
         *         Tooltip in styled mode
         * @sample {highmaps} maps/tooltip/background-border/
         *         Background and border demo
         * @sample {highmaps} highcharts/css/tooltip-border-background/
         *         Tooltip in styled mode
         *
         * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         */
        backgroundColor: "#ffffff" /* Palette.backgroundColor */,
        /**
         * The pixel width of the tooltip border. Defaults to 0 for single
         * tooltips and fixed tooltips, otherwise 1 for split tooltips.
         *
         * In styled mode, the stroke width is set in the
         * `.highcharts-tooltip-box` class.
         *
         * @sample {highcharts} highcharts/tooltip/bordercolor-default/
         *         2 pixels
         * @sample {highcharts} highcharts/tooltip/borderwidth/
         *         No border (shadow only)
         * @sample {highcharts} highcharts/css/tooltip-border-background/
         *         Tooltip in styled mode
         * @sample {highstock} stock/tooltip/general/
         *         Custom tooltip
         * @sample {highstock} highcharts/css/tooltip-border-background/
         *         Tooltip in styled mode
         * @sample {highmaps} maps/tooltip/background-border/
         *         Background and border demo
         * @sample {highmaps} highcharts/css/tooltip-border-background/
         *         Tooltip in styled mode
         *
         * @type {number}
         */
        borderWidth: void 0,
        /**
         * Whether to apply a drop shadow to the tooltip. Defaults to true,
         * unless the tooltip is [fixed](#tooltip.fixed).
         *
         * @sample {highcharts} highcharts/tooltip/bordercolor-default/
         *         True by default
         * @sample {highcharts} highcharts/tooltip/shadow/
         *         False
         * @sample {highmaps} maps/tooltip/positioner/
         *         Fixed tooltip position, border and shadow disabled
         *
         * @type {boolean|Highcharts.ShadowOptionsObject}
         * @default undefined
         * @apioption tooltip.shadow
         */
        /**
         * Prevents the tooltip from switching or closing when touched or
         * pointed.
         *
         * @sample highcharts/tooltip/stickoncontact/
         *         Tooltip sticks on pointer contact
         *
         * @since 8.0.1
         */
        stickOnContact: false,
        /**
         * CSS styles for the tooltip. The tooltip can also be styled through
         * the CSS class `.highcharts-tooltip`.
         *
         * Note that the default `pointerEvents` style makes the tooltip ignore
         * mouse events, so in order to use clickable tooltips, this value must
         * be set to `auto`.
         *
         * @sample {highcharts} highcharts/tooltip/style/
         *         Greater padding, bold text
         *
         * @type {Highcharts.CSSObject}
         */
        style: {
            /** @internal */
            color: "#333333" /* Palette.neutralColor80 */,
            /** @internal */
            cursor: 'default',
            /**
             * @type {number|string}
             */
            fontSize: '0.8em'
        },
        /**
         * Use HTML to render the contents of the tooltip instead of SVG. Using
         * HTML allows advanced formatting like tables and images in the
         * tooltip. It is also recommended for rtl languages as it works around
         * rtl bugs in early Firefox.
         *
         * @sample {highcharts|highstock} highcharts/tooltip/footerformat/
         *         A table for value alignment
         * @sample {highcharts|highstock} highcharts/tooltip/fullhtml/
         *         Full HTML tooltip
         * @sample {highmaps} maps/tooltip/usehtml/
         *         Pure HTML tooltip
         *
         * @since 2.2
         */
        useHTML: false
    },
    /**
     * Highchart by default puts a credits label in the lower right corner
     * of the chart. This can be changed using these options.
     */
    credits: {
        /**
         * Credits for map source to be concatenated with conventional credit
         * text. By default this is a format string that collects copyright
         * information from the map if available.
         *
         * @see [mapTextFull](#credits.mapTextFull)
         * @see [text](#credits.text)
         *
         * @type      {string}
         * @default   \u00a9 <a href="{geojson.copyrightUrl}">{geojson.copyrightShort}</a>
         * @since     4.2.2
         * @product   highmaps
         * @apioption credits.mapText
         */
        /**
         * Detailed credits for map source to be displayed on hover of credits
         * text. By default this is a format string that collects copyright
         * information from the map if available.
         *
         * @see [mapText](#credits.mapText)
         * @see [text](#credits.text)
         *
         * @type      {string}
         * @default   {geojson.copyright}
         * @since     4.2.2
         * @product   highmaps
         * @apioption credits.mapTextFull
         */
        /**
         * Whether to show the credits text.
         *
         * @sample {highcharts} highcharts/credits/enabled-false/
         *         Credits disabled
         * @sample {highstock} stock/credits/enabled/
         *         Credits disabled
         * @sample {highmaps} maps/credits/enabled-false/
         *         Credits disabled
         */
        enabled: true,
        /**
         * The URL for the credits label.
         *
         * @sample {highcharts} highcharts/credits/href/
         *         Custom URL and text
         * @sample {highmaps} maps/credits/customized/
         *         Custom URL and text
         */
        href: 'https://www.highcharts.com?credits',
        /**
         * Position configuration for the credits label.
         *
         * @sample {highcharts} highcharts/credits/position-left/
         *         Left aligned
         * @sample {highcharts} highcharts/credits/position-left/
         *         Left aligned
         * @sample {highmaps} maps/credits/customized/
         *         Left aligned
         * @sample {highmaps} maps/credits/customized/
         *         Left aligned
         *
         * @type    {Highcharts.AlignObject}
         * @since   2.1
         */
        position: {
            /** @internal */
            align: 'right',
            /** @internal */
            x: -10,
            /** @internal */
            verticalAlign: 'bottom',
            /** @internal */
            y: -5
        },
        /**
         * CSS styles for the credits label.
         *
         * @see In styled mode, credits styles can be set with the
         *      `.highcharts-credits` class.
         *
         * @type {Highcharts.CSSObject}
         */
        style: {
            /** @internal */
            cursor: 'pointer',
            /** @internal */
            color: "#999999" /* Palette.neutralColor40 */,
            /**
             * @type {number|string}
             */
            fontSize: '0.6em'
        },
        /**
         * The text for the credits label.
         *
         * @productdesc {highmaps}
         * If a map is loaded as GeoJSON, the text defaults to
         * `Highcharts @ {map-credits}`. Otherwise, it defaults to
         * `Highcharts.com`.
         *
         * @sample {highcharts} highcharts/credits/href/
         *         Custom URL and text
         * @sample {highmaps} maps/credits/customized/
         *         Custom URL and text
         */
        text: 'Highcharts.com'
    }
};
const defaultTime = new Core_Time(defaultOptions.time, defaultOptions.lang);
/**
 * Get the updated default options. Until 3.0.7, merely exposing defaultOptions
 * for outside modules wasn't enough because the setOptions method created a new
 * object.
 *
 * @function Highcharts.getOptions
 *
 * @return {Highcharts.Options}
 * Default options.
 */
function getOptions() {
    return defaultOptions;
}
/**
 * Merge the default options with custom options and return the new options
 * structure. Commonly used for defining reusable templates.
 *
 * @sample highcharts/members/setoptions Applying a global theme
 *
 * @function Highcharts.setOptions
 *
 * @param {Highcharts.Options} options
 * The new custom chart options.
 *
 * @return {Highcharts.Options}
 * Updated options.
 */
function setOptions(options) {
    Defaults_fireEvent(Core_Globals, 'setOptions', { options });
    // Copy in the default options
    Defaults_merge(true, defaultOptions, options);
    // Update the time object
    if (options.time) {
        defaultTime.update(defaultOptions.time);
    }
    if (options.lang && 'locale' in options.lang) {
        defaultTime.update({
            locale: options.lang.locale
        });
    }
    if (options.lang?.chartTitle) {
        defaultOptions.title = {
            ...defaultOptions.title,
            text: options.lang.chartTitle
        };
    }
    return defaultOptions;
}
/* *
 *
 *  Default Export
 *
 * */
const DefaultOptions = {
    defaultOptions,
    defaultTime,
    getOptions,
    setOptions
};
/* harmony default export */ const Defaults = (DefaultOptions);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * @typedef {"plotBox"|"spacingBox"} Highcharts.ButtonRelativeToValue
 */
/**
 * Gets fired when a series is added to the chart after load time, using the
 * `addSeries` method. Returning `false` prevents the series from being added.
 *
 * @callback Highcharts.ChartAddSeriesCallbackFunction
 *
 * @param {Highcharts.Chart} this
 *        The chart on which the event occurred.
 *
 * @param {Highcharts.ChartAddSeriesEventObject} event
 *        The event that occurred.
 */
/**
 * Contains common event information. Through the `options` property you can
 * access the series options that were passed to the `addSeries` method.
 *
 * @interface Highcharts.ChartAddSeriesEventObject
 */ /**
* The series options that were passed to the `addSeries` method.
* @name Highcharts.ChartAddSeriesEventObject#options
* @type {Highcharts.SeriesOptionsType}
*/ /**
* Prevents the default behaviour of the event.
* @name Highcharts.ChartAddSeriesEventObject#preventDefault
* @type {Function}
*/ /**
* The event target.
* @name Highcharts.ChartAddSeriesEventObject#target
* @type {Highcharts.Chart}
*/ /**
* The event type.
* @name Highcharts.ChartAddSeriesEventObject#type
* @type {"addSeries"}
*/
/**
 * Gets fired when clicking on the plot background.
 *
 * @callback Highcharts.ChartClickCallbackFunction
 *
 * @param {Highcharts.Chart} this
 *        The chart on which the event occurred.
 *
 * @param {Highcharts.PointerEventObject} event
 *        The event that occurred.
 */
/**
 * Contains an axes of the clicked spot.
 *
 * @interface Highcharts.ChartClickEventAxisObject
 */ /**
* Axis at the clicked spot.
* @name Highcharts.ChartClickEventAxisObject#axis
* @type {Highcharts.Axis}
*/ /**
* Axis value at the clicked spot.
* @name Highcharts.ChartClickEventAxisObject#value
* @type {number}
*/
/**
 * Contains information about the clicked spot on the chart. Remember the unit
 * of a datetime axis is milliseconds since 1970-01-01 00:00:00.
 *
 * @interface Highcharts.ChartClickEventObject
 * @extends Highcharts.PointerEventObject
 */ /**
* Information about the x-axis on the clicked spot.
* @name Highcharts.ChartClickEventObject#xAxis
* @type {Array<Highcharts.ChartClickEventAxisObject>}
*/ /**
* Information about the y-axis on the clicked spot.
* @name Highcharts.ChartClickEventObject#yAxis
* @type {Array<Highcharts.ChartClickEventAxisObject>}
*/ /**
* Information about the z-axis on the clicked spot.
* @name Highcharts.ChartClickEventObject#zAxis
* @type {Array<Highcharts.ChartClickEventAxisObject>|undefined}
*/
/**
 * Gets fired when the chart is finished loading.
 *
 * @callback Highcharts.ChartLoadCallbackFunction
 *
 * @param {Highcharts.Chart} this
 *        The chart on which the event occurred.
 *
 * @param {global.Event} event
 *        The event that occurred.
 */
/**
 * Fires when the chart is redrawn, either after a call to `chart.redraw()` or
 * after an axis, series or point is modified with the `redraw` option set to
 * `true`.
 *
 * @callback Highcharts.ChartRedrawCallbackFunction
 *
 * @param {Highcharts.Chart} this
 *        The chart on which the event occurred.
 *
 * @param {global.Event} event
 *        The event that occurred.
 */
/**
 * Gets fired after initial load of the chart (directly after the `load` event),
 * and after each redraw (directly after the `redraw` event).
 *
 * @callback Highcharts.ChartRenderCallbackFunction
 *
 * @param {Highcharts.Chart} this
 *        The chart on which the event occurred.
 *
 * @param {global.Event} event
 *        The event that occurred.
 */
/**
 * Gets fired when an area of the chart has been selected. The default action
 * for the selection event is to zoom the chart to the selected area. It can be
 * prevented by calling `event.preventDefault()` or return false.
 *
 * @callback Highcharts.ChartSelectionCallbackFunction
 *
 * @param {Highcharts.Chart} this
 *        The chart on which the event occurred.
 *
 * @param {Highcharts.SelectEventObject} event
 *        Event informations
 *
 * @return {boolean|undefined}
 *         Return false to prevent the default action, usually zoom.
 */
(''); // Detach doclets above

;// ./code/grid/es-modules/Core/Templating.js
/* *
 *
 *  (c) 2010-2024 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { defaultOptions: Templating_defaultOptions, defaultTime: Templating_defaultTime } = Defaults;

const { pageLang: Templating_pageLang } = Core_Globals;

const { extend: Templating_extend, getNestedProperty: Templating_getNestedProperty, isArray: Templating_isArray, isNumber: Templating_isNumber, isObject: Templating_isObject, isString: Templating_isString, pick: Templating_pick, ucfirst: Templating_ucfirst } = Core_Utilities;
const helpers = {
    // Built-in helpers
    add: (a, b) => a + b,
    divide: (a, b) => (b !== 0 ? a / b : ''),
    // eslint-disable-next-line eqeqeq
    eq: (a, b) => a == b,
    each: function (arr) {
        const match = arguments[arguments.length - 1];
        return Templating_isArray(arr) ?
            arr.map((item, i) => format(match.body, Templating_extend(Templating_isObject(item) ? item : { '@this': item }, {
                '@index': i,
                '@first': i === 0,
                '@last': i === arr.length - 1
            }))).join('') :
            false;
    },
    ge: (a, b) => a >= b,
    gt: (a, b) => a > b,
    'if': (condition) => !!condition,
    le: (a, b) => a <= b,
    lt: (a, b) => a < b,
    multiply: (a, b) => a * b,
    // eslint-disable-next-line eqeqeq
    ne: (a, b) => a != b,
    subtract: (a, b) => a - b,
    ucfirst: Templating_ucfirst,
    unless: (condition) => !condition
};
const numberFormatCache = {};
/* *
 *
 *  Functions
 *
 * */
// Internal convenience function
const isQuotedString = (str) => /^["'].+["']$/.test(str);
/**
 * Formats a JavaScript date timestamp (milliseconds since Jan 1st 1970) into a
 * human readable date string. The format is a subset of the formats for PHP's
 * [strftime](https://www.php.net/manual/en/function.strftime.php) function.
 * Additional formats can be given in the {@link Highcharts.dateFormats} hook.
 *
 * Since v6.0.5, all internal dates are formatted through the
 * {@link Highcharts.Chart#time} instance to respect chart-level time settings.
 * The `Highcharts.dateFormat` function only reflects global time settings set
 * with `setOptions`.
 *
 * Supported format keys:
 * - `%a`: Short weekday, like 'Mon'
 * - `%A`: Long weekday, like 'Monday'
 * - `%d`: Two digit day of the month, 01 to 31
 * - `%e`: Day of the month, 1 through 31
 * - `%w`: Day of the week, 0 through 6
 * - `%b`: Short month, like 'Jan'
 * - `%B`: Long month, like 'January'
 * - `%m`: Two digit month number, 01 through 12
 * - `%y`: Two digits year, like 09 for 2009
 * - `%Y`: Four digits year, like 2009
 * - `%H`: Two digits hours in 24h format, 00 through 23
 * - `%k`: Hours in 24h format, 0 through 23
 * - `%I`: Two digits hours in 12h format, 00 through 11
 * - `%l`: Hours in 12h format, 1 through 12
 * - `%M`: Two digits minutes, 00 through 59
 * - `%p`: Upper case AM or PM
 * - `%P`: Lower case AM or PM
 * - `%S`: Two digits seconds, 00 through 59
 * - `%L`: Milliseconds (naming from Ruby)
 *
 * @function Highcharts.dateFormat
 *
 * @param {string} format
 *        The desired format where various time representations are prefixed
 *        with `%`.
 *
 * @param {number} timestamp
 *        The JavaScript timestamp.
 *
 * @param {boolean} [upperCaseFirst=false]
 *        Upper case first letter in the return.
 *
 * @return {string}
 *         The formatted date.
 */
function dateFormat(format, timestamp, upperCaseFirst) {
    return Templating_defaultTime.dateFormat(format, timestamp, upperCaseFirst);
}
/**
 * Format a string according to a subset of the rules of Python's String.format
 * method.
 *
 * @example
 * let s = Highcharts.format(
 *     'The {color} fox was {len:.2f} feet long',
 *     { color: 'red', len: Math.PI }
 * );
 * // => The red fox was 3.14 feet long
 *
 * @function Highcharts.format
 *
 * @param {string} str
 *        The string to format.
 *
 * @param {Record<string, *>} ctx
 *        The context, a collection of key-value pairs where each key is
 *        replaced by its value.
 *
 * @param {Highcharts.Chart} [owner]
 *        A `Chart` or `DataGrid` instance used to get numberFormatter and time.
 *
 * @return {string}
 *         The formatted string.
 */
function format(str = '', ctx, owner) {
    // Notice: using u flag will require a refactor for ES5 (#22450).
    const regex = /\{([a-zA-Z\u00C0-\u017F\d:\.,;\-\/<>\[\]%_@+"'’= #\(\)]+)\}/g, // eslint-disable-line max-len
    // The sub expression regex is the same as the top expression regex,
    // but except parens and block helpers (#), and surrounded by parens
    // instead of curly brackets.
    subRegex = /\(([a-zA-Z\u00C0-\u017F\d:\.,;\-\/<>\[\]%_@+"'= ]+)\)/g, matches = [], floatRegex = /f$/, decRegex = /\.(\d)/, lang = owner?.options?.lang || Templating_defaultOptions.lang, time = owner?.time || Templating_defaultTime, numberFormatter = owner?.numberFormatter || numberFormat;
    /*
     * Get a literal or variable value inside a template expression. May be
     * extended with other types like string or null if needed, but keep it
     * small for now.
     */
    const resolveProperty = (key = '') => {
        let n;
        // Literals
        if (key === 'true') {
            return true;
        }
        if (key === 'false') {
            return false;
        }
        if ((n = Number(key)).toString() === key) {
            return n;
        }
        if (isQuotedString(key)) {
            return key.slice(1, -1);
        }
        // Variables and constants
        return Templating_getNestedProperty(key, ctx);
    };
    let match, currentMatch, depth = 0, hasSub;
    // Parse and create tree
    while ((match = regex.exec(str)) !== null) {
        // When a sub expression is found, it is evaluated first, and the
        // results recursively evaluated until no subexpression exists.
        const mainMatch = match, subMatch = subRegex.exec(match[1]);
        if (subMatch) {
            match = subMatch;
            hasSub = true;
        }
        if (!currentMatch?.isBlock) {
            currentMatch = {
                ctx,
                expression: match[1],
                find: match[0],
                isBlock: match[1].charAt(0) === '#',
                start: match.index,
                startInner: match.index + match[0].length,
                length: match[0].length
            };
        }
        // Identify helpers
        const fn = (currentMatch.isBlock ? mainMatch : match)[1].split(' ')[0].replace('#', '');
        if (helpers[fn]) {
            // Block helper, only 0 level is handled
            if (currentMatch.isBlock && fn === currentMatch.fn) {
                depth++;
            }
            if (!currentMatch.fn) {
                currentMatch.fn = fn;
            }
        }
        // Closing a block helper
        const startingElseSection = match[1] === 'else';
        if (currentMatch.isBlock &&
            currentMatch.fn && (match[1] === `/${currentMatch.fn}` ||
            startingElseSection)) {
            if (!depth) { // === 0
                const start = currentMatch.startInner, body = str.substr(start, match.index - start);
                // Either closing without an else section, or when encountering
                // an else section
                if (currentMatch.body === void 0) {
                    currentMatch.body = body;
                    currentMatch.startInner = match.index + match[0].length;
                    // The body exists already, so this is the else section
                }
                else {
                    currentMatch.elseBody = body;
                }
                currentMatch.find += body + match[0];
                if (!startingElseSection) {
                    matches.push(currentMatch);
                    currentMatch = void 0;
                }
            }
            else if (!startingElseSection) {
                depth--;
            }
            // Common expression
        }
        else if (!currentMatch.isBlock) {
            matches.push(currentMatch);
        }
        // Evaluate sub-matches one by one to prevent orphaned block closers
        if (subMatch && !currentMatch?.isBlock) {
            break;
        }
    }
    // Execute
    matches.forEach((match) => {
        const { body, elseBody, expression, fn } = match;
        let replacement, i;
        // Helper function
        if (fn) {
            // Pass the helpers the amount of arguments defined by the function,
            // then the match as the last argument.
            const args = [match], parts = [], len = expression.length;
            let start = 0, startChar;
            for (i = 0; i <= len; i++) {
                const char = expression.charAt(i);
                // Start of string
                if (!startChar && (char === '"' || char === '\'')) {
                    startChar = char;
                    // End of string
                }
                else if (startChar === char) {
                    startChar = '';
                }
                if (!startChar &&
                    (char === ' ' || i === len)) {
                    parts.push(expression.substr(start, i - start));
                    start = i + 1;
                }
            }
            i = helpers[fn].length;
            while (i--) {
                args.unshift(resolveProperty(parts[i + 1]));
            }
            replacement = helpers[fn].apply(ctx, args);
            // Block helpers may return true or false. They may also return a
            // string, like the `each` helper.
            if (match.isBlock && typeof replacement === 'boolean') {
                replacement = format(replacement ? body : elseBody, ctx, owner);
            }
            // Simple variable replacement
        }
        else {
            const valueAndFormat = isQuotedString(expression) ?
                [expression] : expression.split(':');
            replacement = resolveProperty(valueAndFormat.shift() || '');
            // Format the replacement
            if (valueAndFormat.length && typeof replacement === 'number') {
                const segment = valueAndFormat.join(':');
                if (floatRegex.test(segment)) { // Float
                    const decimals = parseInt((segment.match(decRegex) || ['', '-1'])[1], 10);
                    if (replacement !== null) {
                        replacement = numberFormatter(replacement, decimals, lang.decimalPoint, segment.indexOf(',') > -1 ? lang.thousandsSep : '');
                    }
                }
                else {
                    replacement = time.dateFormat(segment, replacement);
                }
            }
            // Use string literal in order to be preserved in the outer
            // expression
            subRegex.lastIndex = 0;
            if (subRegex.test(match.find) && Templating_isString(replacement)) {
                replacement = `"${replacement}"`;
            }
        }
        str = str.replace(match.find, Templating_pick(replacement, ''));
    });
    return hasSub ? format(str, ctx, owner) : str;
}
/**
 * Format a number and return a string based on input settings.
 *
 * @sample highcharts/members/highcharts-numberformat/
 *         Custom number format
 *
 * @function Highcharts.numberFormat
 *
 * @param {number} number
 *        The input number to format.
 *
 * @param {number} decimals
 *        The amount of decimals. A value of -1 preserves the amount in the
 *        input number.
 *
 * @param {string} [decimalPoint]
 *        The decimal point, defaults to the one given in the lang options, or
 *        a dot.
 *
 * @param {string} [thousandsSep]
 *        The thousands separator, defaults to the one given in the lang
 *        options, or a space character.
 *
 * @return {string}
 *         The formatted number.
 */
function numberFormat(number, decimals, decimalPoint, thousandsSep) {
    number = +number || 0;
    decimals = +decimals;
    let ret, fractionDigits, [mantissa, exp] = number.toString().split('e').map(Number);
    const lang = this?.options?.lang || Templating_defaultOptions.lang, origDec = (number.toString().split('.')[1] || '').split('e')[0].length, firstDecimals = decimals, options = {};
    decimalPoint ?? (decimalPoint = lang.decimalPoint);
    thousandsSep ?? (thousandsSep = lang.thousandsSep);
    if (decimals === -1) {
        // Preserve decimals. Not huge numbers (#3793).
        decimals = Math.min(origDec, 20);
    }
    else if (!Templating_isNumber(decimals)) {
        decimals = 2;
    }
    else if (decimals && exp < 0) {
        // Expose decimals from exponential notation (#7042)
        fractionDigits = decimals + exp;
        if (fractionDigits >= 0) {
            // Remove too small part of the number while keeping the notation
            mantissa = +mantissa.toExponential(fractionDigits).split('e')[0];
            decimals = fractionDigits;
        }
        else {
            // `fractionDigits < 0`
            mantissa = Math.floor(mantissa);
            if (decimals < 20) {
                // Use number instead of exponential notation (#7405)
                number = +(mantissa * Math.pow(10, exp)).toFixed(decimals);
            }
            else {
                // Or zero
                number = 0;
            }
            exp = 0;
        }
    }
    if (exp) {
        decimals ?? (decimals = 2);
        number = mantissa;
    }
    if (Templating_isNumber(decimals) && decimals >= 0) {
        options.minimumFractionDigits = decimals;
        options.maximumFractionDigits = decimals;
    }
    if (thousandsSep === '') {
        options.useGrouping = false;
    }
    const hasSeparators = thousandsSep || decimalPoint, locale = hasSeparators ?
        'en' :
        (this?.locale || lang.locale || Templating_pageLang), cacheKey = JSON.stringify(options) + locale, nf = numberFormatCache[cacheKey] ?? (numberFormatCache[cacheKey] = new Intl.NumberFormat(locale, options));
    ret = nf.format(number);
    // If thousandsSep or decimalPoint are set, fall back to using English
    // format with string replacement for the separators.
    if (hasSeparators) {
        ret = ret
            // Preliminary step to avoid re-swapping (#22402)
            .replace(/([,\.])/g, '_$1')
            .replace(/_\,/g, thousandsSep ?? ',')
            .replace('_.', decimalPoint ?? '.');
    }
    if (
    // Remove signed zero (#20564)
    (!decimals && +ret === 0) ||
        // Small numbers, no decimals (#14023)
        (exp < 0 && !firstDecimals)) {
        ret = '0';
    }
    if (exp && +ret !== 0) {
        ret += 'e' + (exp < 0 ? '' : '+') + exp;
    }
    return ret;
}
/* *
 *
 *  Default Export
 *
 * */
const Templating = {
    dateFormat,
    format,
    helpers,
    numberFormat
};
/* harmony default export */ const Core_Templating = (Templating);

;// ./code/grid/es-modules/Data/Modifiers/DataModifier.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Gøran Slettemark
 *
 * */


const { addEvent: DataModifier_addEvent, fireEvent: DataModifier_fireEvent, merge: DataModifier_merge } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Abstract class to provide an interface for modifying a table.
 *
 */
class DataModifier {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Runs a timed execution of the modifier on the given datatable.
     * Can be configured to run multiple times.
     *
     * @param {DataTable} dataTable
     * The datatable to execute
     *
     * @param {DataModifier.BenchmarkOptions} options
     * Options. Currently supports `iterations` for number of iterations.
     *
     * @return {Array<number>}
     * An array of times in milliseconds
     *
     */
    benchmark(dataTable, options) {
        const results = [];
        const modifier = this;
        const execute = () => {
            modifier.modifyTable(dataTable);
            modifier.emit({
                type: 'afterBenchmarkIteration'
            });
        };
        const defaultOptions = {
            iterations: 1
        };
        const { iterations } = DataModifier_merge(defaultOptions, options);
        modifier.on('afterBenchmarkIteration', () => {
            if (results.length === iterations) {
                modifier.emit({
                    type: 'afterBenchmark',
                    results
                });
                return;
            }
            // Run again
            execute();
        });
        const times = {
            startTime: 0,
            endTime: 0
        };
        // Add timers
        modifier.on('modify', () => {
            times.startTime = window.performance.now();
        });
        modifier.on('afterModify', () => {
            times.endTime = window.performance.now();
            results.push(times.endTime - times.startTime);
        });
        // Initial run
        execute();
        return results;
    }
    /**
     * Emits an event on the modifier to all registered callbacks of this event.
     *
     * @param {DataModifier.Event} [e]
     * Event object containing additonal event information.
     */
    emit(e) {
        DataModifier_fireEvent(this, e.type, e);
    }
    /**
     * Returns a modified copy of the given table.
     *
     * @param {Highcharts.DataTable} table
     * Table to modify.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Promise<Highcharts.DataTable>}
     * Table with `modified` property as a reference.
     */
    modify(table, eventDetail) {
        const modifier = this;
        return new Promise((resolve, reject) => {
            if (table.modified === table) {
                table.modified = table.clone(false, eventDetail);
            }
            try {
                resolve(modifier.modifyTable(table, eventDetail));
            }
            catch (e) {
                modifier.emit({
                    type: 'error',
                    detail: eventDetail,
                    table
                });
                reject(e);
            }
        });
    }
    /**
     * Applies partial modifications of a cell change to the property `modified`
     * of the given modified table.
     *
     * @param {Highcharts.DataTable} table
     * Modified table.
     *
     * @param {string} columnName
     * Column name of changed cell.
     *
     * @param {number|undefined} rowIndex
     * Row index of changed cell.
     *
     * @param {Highcharts.DataTableCellType} cellValue
     * Changed cell value.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Table with `modified` property as a reference.
     */
    modifyCell(table, 
    /* eslint-disable @typescript-eslint/no-unused-vars */
    columnName, rowIndex, cellValue, eventDetail
    /* eslint-enable @typescript-eslint/no-unused-vars */
    ) {
        return this.modifyTable(table);
    }
    /**
     * Applies partial modifications of column changes to the property
     * `modified` of the given table.
     *
     * @param {Highcharts.DataTable} table
     * Modified table.
     *
     * @param {Highcharts.DataTableColumnCollection} columns
     * Changed columns as a collection, where the keys are the column names.
     *
     * @param {number} [rowIndex=0]
     * Index of the first changed row.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Table with `modified` property as a reference.
     */
    modifyColumns(table, 
    /* eslint-disable @typescript-eslint/no-unused-vars */
    columns, rowIndex, eventDetail
    /* eslint-enable @typescript-eslint/no-unused-vars */
    ) {
        return this.modifyTable(table);
    }
    /**
     * Applies partial modifications of row changes to the property `modified`
     * of the given table.
     *
     * @param {Highcharts.DataTable} table
     * Modified table.
     *
     * @param {Array<(Highcharts.DataTableRow|Highcharts.DataTableRowObject)>} rows
     * Changed rows.
     *
     * @param {number} [rowIndex]
     * Index of the first changed row.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Table with `modified` property as a reference.
     */
    modifyRows(table, 
    /* eslint-disable @typescript-eslint/no-unused-vars */
    rows, rowIndex, eventDetail
    /* eslint-enable @typescript-eslint/no-unused-vars */
    ) {
        return this.modifyTable(table);
    }
    /**
     * Registers a callback for a specific modifier event.
     *
     * @param {string} type
     * Event type as a string.
     *
     * @param {DataEventEmitter.Callback} callback
     * Function to register for an modifier callback.
     *
     * @return {Function}
     * Function to unregister callback from the modifier event.
     */
    on(type, callback) {
        return DataModifier_addEvent(this, type, callback);
    }
}
/* *
 *
 *  Class Namespace
 *
 * */
/**
 * Additionally provided types for modifier events and options.
 */
(function (DataModifier) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Constants
     *
     * */
    /**
     * Registry as a record object with modifier names and their class
     * constructor.
     */
    DataModifier.types = {};
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Adds a modifier class to the registry. The modifier class has to provide
     * the `DataModifier.options` property and the `DataModifier.modifyTable`
     * method to modify the table.
     *
     * @private
     *
     * @param {string} key
     * Registry key of the modifier class.
     *
     * @param {DataModifierType} DataModifierClass
     * Modifier class (aka class constructor) to register.
     *
     * @return {boolean}
     * Returns true, if the registration was successful. False is returned, if
     * their is already a modifier registered with this key.
     */
    function registerType(key, DataModifierClass) {
        return (!!key &&
            !DataModifier.types[key] &&
            !!(DataModifier.types[key] = DataModifierClass));
    }
    DataModifier.registerType = registerType;
})(DataModifier || (DataModifier = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Modifiers_DataModifier = (DataModifier);

;// ./code/grid/es-modules/Data/ColumnUtils.js
/* *
 *
 *  (c) 2020-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Dawid Dragula
 *
 * */
/**
 * Utility functions for columns that can be either arrays or typed arrays.
 * @private
 */
var ColumnUtils;
(function (ColumnUtils) {
    /* *
    *
    *  Declarations
    *
    * */
    /* *
    *
    * Functions
    *
    * */
    /**
     * Sets the length of the column array.
     *
     * @param {DataTable.Column} column
     * Column to be modified.
     *
     * @param {number} length
     * New length of the column.
     *
     * @param {boolean} asSubarray
     * If column is a typed array, return a subarray instead of a new array. It
     * is faster `O(1)`, but the entire buffer will be kept in memory until all
     * views to it are destroyed. Default is `false`.
     *
     * @return {DataTable.Column}
     * Modified column.
     *
     * @private
     */
    function setLength(column, length, asSubarray) {
        if (Array.isArray(column)) {
            column.length = length;
            return column;
        }
        return column[asSubarray ? 'subarray' : 'slice'](0, length);
    }
    ColumnUtils.setLength = setLength;
    /**
     * Splices a column array.
     *
     * @param {DataTable.Column} column
     * Column to be modified.
     *
     * @param {number} start
     * Index at which to start changing the array.
     *
     * @param {number} deleteCount
     * An integer indicating the number of old array elements to remove.
     *
     * @param {boolean} removedAsSubarray
     * If column is a typed array, return a subarray instead of a new array. It
     * is faster `O(1)`, but the entire buffer will be kept in memory until all
     * views to it are destroyed. Default is `true`.
     *
     * @param {Array<number>|TypedArray} items
     * The elements to add to the array, beginning at the start index. If you
     * don't specify any elements, `splice()` will only remove elements from the
     * array.
     *
     * @return {SpliceResult}
     * Object containing removed elements and the modified column.
     *
     * @private
     */
    function splice(column, start, deleteCount, removedAsSubarray, items = []) {
        if (Array.isArray(column)) {
            if (!Array.isArray(items)) {
                items = Array.from(items);
            }
            return {
                removed: column.splice(start, deleteCount, ...items),
                array: column
            };
        }
        const Constructor = Object.getPrototypeOf(column)
            .constructor;
        const removed = column[removedAsSubarray ? 'subarray' : 'slice'](start, start + deleteCount);
        const newLength = column.length - deleteCount + items.length;
        const result = new Constructor(newLength);
        result.set(column.subarray(0, start), 0);
        result.set(items, start);
        result.set(column.subarray(start + deleteCount), start + items.length);
        return {
            removed: removed,
            array: result
        };
    }
    ColumnUtils.splice = splice;
})(ColumnUtils || (ColumnUtils = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Data_ColumnUtils = (ColumnUtils);

;// ./code/grid/es-modules/Data/DataTableCore.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Gøran Slettemark
 *  - Torstein Hønsi
 *
 * */


const { setLength, splice } = Data_ColumnUtils;

const { fireEvent: DataTableCore_fireEvent, objectEach: DataTableCore_objectEach, uniqueKey: DataTableCore_uniqueKey } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Class to manage columns and rows in a table structure. It provides methods
 * to add, remove, and manipulate columns and rows, as well as to retrieve data
 * from specific cells.
 *
 * @class
 * @name Highcharts.DataTable
 *
 * @param {Highcharts.DataTableOptions} [options]
 * Options to initialize the new DataTable instance.
 */
class DataTableCore {
    /**
     * Constructs an instance of the DataTable class.
     *
     * @example
     * const dataTable = new Highcharts.DataTableCore({
     *   columns: {
     *     year: [2020, 2021, 2022, 2023],
     *     cost: [11, 13, 12, 14],
     *     revenue: [12, 15, 14, 18]
     *   }
     * });

     *
     * @param {Highcharts.DataTableOptions} [options]
     * Options to initialize the new DataTable instance.
     */
    constructor(options = {}) {
        /**
         * Whether the ID was automatic generated or given in the constructor.
         *
         * @name Highcharts.DataTable#autoId
         * @type {boolean}
         */
        this.autoId = !options.id;
        this.columns = {};
        /**
         * ID of the table for identification purposes.
         *
         * @name Highcharts.DataTable#id
         * @type {string}
         */
        this.id = (options.id || DataTableCore_uniqueKey());
        this.modified = this;
        this.rowCount = 0;
        this.versionTag = DataTableCore_uniqueKey();
        let rowCount = 0;
        DataTableCore_objectEach(options.columns || {}, (column, columnName) => {
            this.columns[columnName] = column.slice();
            rowCount = Math.max(rowCount, column.length);
        });
        this.applyRowCount(rowCount);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Applies a row count to the table by setting the `rowCount` property and
     * adjusting the length of all columns.
     *
     * @private
     * @param {number} rowCount The new row count.
     */
    applyRowCount(rowCount) {
        this.rowCount = rowCount;
        DataTableCore_objectEach(this.columns, (column, columnName) => {
            if (column.length !== rowCount) {
                this.columns[columnName] = setLength(column, rowCount);
            }
        });
    }
    /**
     * Delete rows. Simplified version of the full
     * `DataTable.deleteRows` method.
     *
     * @param {number} rowIndex
     * The start row index
     *
     * @param {number} [rowCount=1]
     * The number of rows to delete
     *
     * @return {void}
     *
     * @emits #afterDeleteRows
     */
    deleteRows(rowIndex, rowCount = 1) {
        if (rowCount > 0 && rowIndex < this.rowCount) {
            let length = 0;
            DataTableCore_objectEach(this.columns, (column, columnName) => {
                this.columns[columnName] =
                    splice(column, rowIndex, rowCount).array;
                length = column.length;
            });
            this.rowCount = length;
        }
        DataTableCore_fireEvent(this, 'afterDeleteRows', { rowIndex, rowCount });
        this.versionTag = DataTableCore_uniqueKey();
    }
    /**
     * Fetches the given column by the canonical column name. Simplified version
     * of the full `DataTable.getRow` method, always returning by reference.
     *
     * @param {string} columnName
     * Name of the column to get.
     *
     * @return {Highcharts.DataTableColumn|undefined}
     * A copy of the column, or `undefined` if not found.
     */
    getColumn(columnName, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asReference) {
        return this.columns[columnName];
    }
    /**
     * Retrieves all or the given columns. Simplified version of the full
     * `DataTable.getColumns` method, always returning by reference.
     *
     * @param {Array<string>} [columnNames]
     * Column names to retrieve.
     *
     * @return {Highcharts.DataTableColumnCollection}
     * Collection of columns. If a requested column was not found, it is
     * `undefined`.
     */
    getColumns(columnNames, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asReference) {
        return (columnNames || Object.keys(this.columns)).reduce((columns, columnName) => {
            columns[columnName] = this.columns[columnName];
            return columns;
        }, {});
    }
    /**
     * Retrieves the row at a given index.
     *
     * @param {number} rowIndex
     * Row index to retrieve. First row has index 0.
     *
     * @param {Array<string>} [columnNames]
     * Column names to retrieve.
     *
     * @return {Record<string, number|string|undefined>|undefined}
     * Returns the row values, or `undefined` if not found.
     */
    getRow(rowIndex, columnNames) {
        return (columnNames || Object.keys(this.columns)).map((key) => this.columns[key]?.[rowIndex]);
    }
    /**
     * Sets cell values for a column. Will insert a new column, if not found.
     *
     * @param {string} columnName
     * Column name to set.
     *
     * @param {Highcharts.DataTableColumn} [column]
     * Values to set in the column.
     *
     * @param {number} [rowIndex]
     * Index of the first row to change. (Default: 0)
     *
     * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setColumns
     * @emits #afterSetColumns
     */
    setColumn(columnName, column = [], rowIndex = 0, eventDetail) {
        this.setColumns({ [columnName]: column }, rowIndex, eventDetail);
    }
    /**
     * Sets cell values for multiple columns. Will insert new columns, if not
     * found. Simplified version of the full `DataTableCore.setColumns`, limited
     * to full replacement of the columns (undefined `rowIndex`).
     *
     * @param {Highcharts.DataTableColumnCollection} columns
     * Columns as a collection, where the keys are the column names.
     *
     * @param {number} [rowIndex]
     * Index of the first row to change. Ignored in the `DataTableCore`, as it
     * always replaces the full column.
     *
     * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setColumns
     * @emits #afterSetColumns
     */
    setColumns(columns, rowIndex, eventDetail) {
        let rowCount = this.rowCount;
        DataTableCore_objectEach(columns, (column, columnName) => {
            this.columns[columnName] = column.slice();
            rowCount = column.length;
        });
        this.applyRowCount(rowCount);
        if (!eventDetail?.silent) {
            DataTableCore_fireEvent(this, 'afterSetColumns');
            this.versionTag = DataTableCore_uniqueKey();
        }
    }
    /**
     * Sets cell values of a row. Will insert a new row if no index was
     * provided, or if the index is higher than the total number of table rows.
     * A simplified version of the full `DateTable.setRow`, limited to objects.
     *
     * @param {Record<string, number|string|undefined>} row
     * Cell values to set.
     *
     * @param {number} [rowIndex]
     * Index of the row to set. Leave `undefined` to add as a new row.
     *
     * @param {boolean} [insert]
     * Whether to insert the row at the given index, or to overwrite the row.
     *
     * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #afterSetRows
     */
    setRow(row, rowIndex = this.rowCount, insert, eventDetail) {
        const { columns } = this, indexRowCount = insert ? this.rowCount + 1 : rowIndex + 1;
        DataTableCore_objectEach(row, (cellValue, columnName) => {
            let column = columns[columnName] ||
                eventDetail?.addColumns !== false && new Array(indexRowCount);
            if (column) {
                if (insert) {
                    column = splice(column, rowIndex, 0, true, [cellValue]).array;
                }
                else {
                    column[rowIndex] = cellValue;
                }
                columns[columnName] = column;
            }
        });
        if (indexRowCount > this.rowCount) {
            this.applyRowCount(indexRowCount);
        }
        if (!eventDetail?.silent) {
            DataTableCore_fireEvent(this, 'afterSetRows');
            this.versionTag = DataTableCore_uniqueKey();
        }
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Data_DataTableCore = (DataTableCore);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * A typed array.
 * @typedef {Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} Highcharts.TypedArray
 * //**
 * A column of values in a data table.
 * @typedef {Array<boolean|null|number|string|undefined>|Highcharts.TypedArray} Highcharts.DataTableColumn
 */ /**
* A collection of data table columns defined by a object where the key is the
* column name and the value is an array of the column values.
* @typedef {Record<string, Highcharts.DataTableColumn>} Highcharts.DataTableColumnCollection
*/
/**
 * Options for the `DataTable` or `DataTableCore` classes.
 * @interface Highcharts.DataTableOptions
 */ /**
* The column options for the data table. The columns are defined by an object
* where the key is the column ID and the value is an array of the column
* values.
*
* @name Highcharts.DataTableOptions.columns
* @type {Highcharts.DataTableColumnCollection|undefined}
*/ /**
* Custom ID to identify the new DataTable instance.
*
* @name Highcharts.DataTableOptions.id
* @type {string|undefined}
*/
(''); // Keeps doclets above in JS file

;// ./code/grid/es-modules/Data/DataTable.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Gøran Slettemark
 *  - Jomar Hønsi
 *  - Dawid Dragula
 *
 * */




const { addEvent: DataTable_addEvent, defined: DataTable_defined, extend: DataTable_extend, fireEvent: DataTable_fireEvent, isNumber: DataTable_isNumber, uniqueKey: DataTable_uniqueKey } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Class to manage columns and rows in a table structure. It provides methods
 * to add, remove, and manipulate columns and rows, as well as to retrieve data
 * from specific cells.
 *
 * @class
 * @name Highcharts.DataTable
 *
 * @param {Highcharts.DataTableOptions} [options]
 * Options to initialize the new DataTable instance.
 */
class DataTable extends Data_DataTableCore {
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * Tests whether a row contains only `null` values or is equal to
     * DataTable.NULL. If all columns have `null` values, the function returns
     * `true`. Otherwise, it returns `false` to indicate that the row contains
     * at least one non-null value.
     *
     * @function Highcharts.DataTable.isNull
     *
     * @param {Highcharts.DataTableRow|Highcharts.DataTableRowObject} row
     * Row to test.
     *
     * @return {boolean}
     * Returns `true`, if the row contains only null, otherwise `false`.
     *
     * @example
     * if (DataTable.isNull(row)) {
     *   // handle null row
     * }
     */
    static isNull(row) {
        if (row === DataTable.NULL) {
            return true;
        }
        if (row instanceof Array) {
            if (!row.length) {
                return false;
            }
            for (let i = 0, iEnd = row.length; i < iEnd; ++i) {
                if (row[i] !== null) {
                    return false;
                }
            }
        }
        else {
            const columnNames = Object.keys(row);
            if (!columnNames.length) {
                return false;
            }
            for (let i = 0, iEnd = columnNames.length; i < iEnd; ++i) {
                if (row[columnNames[i]] !== null) {
                    return false;
                }
            }
        }
        return true;
    }
    /* *
     *
     *  Constructor
     *
     * */
    constructor(options = {}) {
        super(options);
        this.modified = this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Returns a clone of this table. The cloned table is completely independent
     * of the original, and any changes made to the clone will not affect
     * the original table.
     *
     * @function Highcharts.DataTable#clone
     *
     * @param {boolean} [skipColumns]
     * Whether to clone columns or not.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Clone of this data table.
     *
     * @emits #cloneTable
     * @emits #afterCloneTable
     */
    clone(skipColumns, eventDetail) {
        const table = this, tableOptions = {};
        table.emit({ type: 'cloneTable', detail: eventDetail });
        if (!skipColumns) {
            tableOptions.columns = table.columns;
        }
        if (!table.autoId) {
            tableOptions.id = table.id;
        }
        const tableClone = new DataTable(tableOptions);
        if (!skipColumns) {
            tableClone.versionTag = table.versionTag;
            tableClone.originalRowIndexes = table.originalRowIndexes;
            tableClone.localRowIndexes = table.localRowIndexes;
        }
        table.emit({
            type: 'afterCloneTable',
            detail: eventDetail,
            tableClone
        });
        return tableClone;
    }
    /**
     * Deletes columns from the table.
     *
     * @function Highcharts.DataTable#deleteColumns
     *
     * @param {Array<string>} [columnNames]
     * Names of columns to delete. If no array is provided, all
     * columns will be deleted.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTableColumnCollection|undefined}
     * Returns the deleted columns, if found.
     *
     * @emits #deleteColumns
     * @emits #afterDeleteColumns
     */
    deleteColumns(columnNames, eventDetail) {
        const table = this, columns = table.columns, deletedColumns = {}, modifiedColumns = {}, modifier = table.modifier, rowCount = table.rowCount;
        columnNames = (columnNames || Object.keys(columns));
        if (columnNames.length) {
            table.emit({
                type: 'deleteColumns',
                columnNames,
                detail: eventDetail
            });
            for (let i = 0, iEnd = columnNames.length, column, columnName; i < iEnd; ++i) {
                columnName = columnNames[i];
                column = columns[columnName];
                if (column) {
                    deletedColumns[columnName] = column;
                    modifiedColumns[columnName] = new Array(rowCount);
                }
                delete columns[columnName];
            }
            if (!Object.keys(columns).length) {
                table.rowCount = 0;
                this.deleteRowIndexReferences();
            }
            if (modifier) {
                modifier.modifyColumns(table, modifiedColumns, 0, eventDetail);
            }
            table.emit({
                type: 'afterDeleteColumns',
                columns: deletedColumns,
                columnNames,
                detail: eventDetail
            });
            return deletedColumns;
        }
    }
    /**
     * Deletes the row index references. This is useful when the original table
     * is deleted, and the references are no longer needed. This table is
     * then considered an original table or a table that has the same row's
     * order as the original table.
     */
    deleteRowIndexReferences() {
        delete this.originalRowIndexes;
        delete this.localRowIndexes;
        // Here, in case of future need, can be implemented updating of the
        // modified tables' row indexes references.
    }
    /**
     * Deletes rows in this table.
     *
     * @function Highcharts.DataTable#deleteRows
     *
     * @param {number} [rowIndex]
     * Index to start delete of rows. If not specified, all rows will be
     * deleted.
     *
     * @param {number} [rowCount=1]
     * Number of rows to delete.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Array<Highcharts.DataTableRow>}
     * Returns the deleted rows, if found.
     *
     * @emits #deleteRows
     * @emits #afterDeleteRows
     */
    deleteRows(rowIndex, rowCount = 1, eventDetail) {
        const table = this, deletedRows = [], modifiedRows = [], modifier = table.modifier;
        table.emit({
            type: 'deleteRows',
            detail: eventDetail,
            rowCount,
            rowIndex: (rowIndex || 0)
        });
        if (typeof rowIndex === 'undefined') {
            rowIndex = 0;
            rowCount = table.rowCount;
        }
        if (rowCount > 0 && rowIndex < table.rowCount) {
            const columns = table.columns, columnNames = Object.keys(columns);
            for (let i = 0, iEnd = columnNames.length, column, deletedCells, columnName; i < iEnd; ++i) {
                columnName = columnNames[i];
                column = columns[columnName];
                const result = Data_ColumnUtils.splice(column, rowIndex, rowCount);
                deletedCells = result.removed;
                columns[columnName] = column = result.array;
                if (!i) {
                    table.rowCount = column.length;
                }
                for (let j = 0, jEnd = deletedCells.length; j < jEnd; ++j) {
                    deletedRows[j] = (deletedRows[j] || []);
                    deletedRows[j][i] = deletedCells[j];
                }
                modifiedRows.push(new Array(iEnd));
            }
        }
        if (modifier) {
            modifier.modifyRows(table, modifiedRows, (rowIndex || 0), eventDetail);
        }
        table.emit({
            type: 'afterDeleteRows',
            detail: eventDetail,
            rowCount,
            rowIndex: (rowIndex || 0),
            rows: deletedRows
        });
        return deletedRows;
    }
    /**
     * Emits an event on this table to all registered callbacks of the given
     * event.
     * @private
     *
     * @param {DataTable.Event} e
     * Event object with event information.
     */
    emit(e) {
        if ([
            'afterDeleteColumns',
            'afterDeleteRows',
            'afterSetCell',
            'afterSetColumns',
            'afterSetRows'
        ].includes(e.type)) {
            this.versionTag = DataTable_uniqueKey();
        }
        DataTable_fireEvent(this, e.type, e);
    }
    /**
     * Fetches a single cell value.
     *
     * @function Highcharts.DataTable#getCell
     *
     * @param {string} columnName
     * Column name of the cell to retrieve.
     *
     * @param {number} rowIndex
     * Row index of the cell to retrieve.
     *
     * @return {Highcharts.DataTableCellType|undefined}
     * Returns the cell value or `undefined`.
     */
    getCell(columnName, rowIndex) {
        const table = this;
        const column = table.columns[columnName];
        if (column) {
            return column[rowIndex];
        }
    }
    /**
     * Fetches a cell value for the given row as a boolean.
     *
     * @function Highcharts.DataTable#getCellAsBoolean
     *
     * @param {string} columnName
     * Column name to fetch.
     *
     * @param {number} rowIndex
     * Row index to fetch.
     *
     * @return {boolean}
     * Returns the cell value of the row as a boolean.
     */
    getCellAsBoolean(columnName, rowIndex) {
        const table = this;
        const column = table.columns[columnName];
        return !!(column && column[rowIndex]);
    }
    /**
     * Fetches a cell value for the given row as a number.
     *
     * @function Highcharts.DataTable#getCellAsNumber
     *
     * @param {string} columnName
     * Column name or to fetch.
     *
     * @param {number} rowIndex
     * Row index to fetch.
     *
     * @param {boolean} [useNaN]
     * Whether to return NaN instead of `null` and `undefined`.
     *
     * @return {number|null}
     * Returns the cell value of the row as a number.
     */
    getCellAsNumber(columnName, rowIndex, useNaN) {
        const table = this;
        const column = table.columns[columnName];
        let cellValue = (column && column[rowIndex]);
        switch (typeof cellValue) {
            case 'boolean':
                return (cellValue ? 1 : 0);
            case 'number':
                return (isNaN(cellValue) && !useNaN ? null : cellValue);
        }
        cellValue = parseFloat(`${cellValue ?? ''}`);
        return (isNaN(cellValue) && !useNaN ? null : cellValue);
    }
    /**
     * Fetches a cell value for the given row as a string.
     *
     * @function Highcharts.DataTable#getCellAsString
     *
     * @param {string} columnName
     * Column name to fetch.
     *
     * @param {number} rowIndex
     * Row index to fetch.
     *
     * @return {string}
     * Returns the cell value of the row as a string.
     */
    getCellAsString(columnName, rowIndex) {
        const table = this;
        const column = table.columns[columnName];
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        return `${(column && column[rowIndex])}`;
    }
    /**
     * Fetches the given column by the canonical column name.
     * This function is a simplified wrap of {@link getColumns}.
     *
     * @function Highcharts.DataTable#getColumn
     *
     * @param {string} columnName
     * Name of the column to get.
     *
     * @param {boolean} [asReference]
     * Whether to return the column as a readonly reference.
     *
     * @return {Highcharts.DataTableColumn|undefined}
     * A copy of the column, or `undefined` if not found.
     */
    getColumn(columnName, asReference) {
        return this.getColumns([columnName], asReference)[columnName];
    }
    /**
     * Fetches the given column by the canonical column name, and
     * validates the type of the first few cells. If the first defined cell is
     * of type number, it assumes for performance reasons, that all cells are of
     * type number or `null`. Otherwise it will convert all cells to number
     * type, except `null`.
     *
     * @deprecated
     *
     * @function Highcharts.DataTable#getColumnAsNumbers
     *
     * @param {string} columnName
     * Name of the column to get.
     *
     * @param {boolean} [useNaN]
     * Whether to use NaN instead of `null` and `undefined`.
     *
     * @return {Array<(number|null)>}
     * A copy of the column, or an empty array if not found.
     */
    getColumnAsNumbers(columnName, useNaN) {
        const table = this, columns = table.columns;
        const column = columns[columnName], columnAsNumber = [];
        if (column) {
            const columnLength = column.length;
            if (useNaN) {
                for (let i = 0; i < columnLength; ++i) {
                    columnAsNumber.push(table.getCellAsNumber(columnName, i, true));
                }
            }
            else {
                for (let i = 0, cellValue; i < columnLength; ++i) {
                    cellValue = column[i];
                    if (typeof cellValue === 'number') {
                        // Assume unmixed data for performance reasons
                        return column.slice();
                    }
                    if (cellValue !== null &&
                        typeof cellValue !== 'undefined') {
                        break;
                    }
                }
                for (let i = 0; i < columnLength; ++i) {
                    columnAsNumber.push(table.getCellAsNumber(columnName, i));
                }
            }
        }
        return columnAsNumber;
    }
    /**
     * Fetches all column names.
     *
     * @function Highcharts.DataTable#getColumnNames
     *
     * @return {Array<string>}
     * Returns all column names.
     */
    getColumnNames() {
        const table = this, columnNames = Object.keys(table.columns);
        return columnNames;
    }
    /**
     * Retrieves all or the given columns.
     *
     * @function Highcharts.DataTable#getColumns
     *
     * @param {Array<string>} [columnNames]
     * Column names to retrieve.
     *
     * @param {boolean} [asReference]
     * Whether to return columns as a readonly reference.
     *
     * @param {boolean} [asBasicColumns]
     * Whether to transform all typed array columns to normal arrays.
     *
     * @return {Highcharts.DataTableColumnCollection}
     * Collection of columns. If a requested column was not found, it is
     * `undefined`.
     */
    getColumns(columnNames, asReference, asBasicColumns) {
        const table = this, tableColumns = table.columns, columns = {};
        columnNames = (columnNames || Object.keys(tableColumns));
        for (let i = 0, iEnd = columnNames.length, column, columnName; i < iEnd; ++i) {
            columnName = columnNames[i];
            column = tableColumns[columnName];
            if (column) {
                if (asReference) {
                    columns[columnName] = column;
                }
                else if (asBasicColumns && !Array.isArray(column)) {
                    columns[columnName] = Array.from(column);
                }
                else {
                    columns[columnName] = column.slice();
                }
            }
        }
        return columns;
    }
    /**
     * Takes the original row index and returns the local row index in the
     * modified table for which this function is called.
     *
     * @param {number} originalRowIndex
     * Original row index to get the local row index for.
     *
     * @return {number|undefined}
     * Returns the local row index or `undefined` if not found.
     */
    getLocalRowIndex(originalRowIndex) {
        const { localRowIndexes } = this;
        if (localRowIndexes) {
            return localRowIndexes[originalRowIndex];
        }
        return originalRowIndex;
    }
    /**
     * Retrieves the modifier for the table.
     * @private
     *
     * @return {Highcharts.DataModifier|undefined}
     * Returns the modifier or `undefined`.
     */
    getModifier() {
        return this.modifier;
    }
    /**
     * Takes the local row index and returns the index of the corresponding row
     * in the original table.
     *
     * @param {number} rowIndex
     * Local row index to get the original row index for.
     *
     * @return {number|undefined}
     * Returns the original row index or `undefined` if not found.
     */
    getOriginalRowIndex(rowIndex) {
        const { originalRowIndexes } = this;
        if (originalRowIndexes) {
            return originalRowIndexes[rowIndex];
        }
        return rowIndex;
    }
    /**
     * Retrieves the row at a given index. This function is a simplified wrap of
     * {@link getRows}.
     *
     * @function Highcharts.DataTable#getRow
     *
     * @param {number} rowIndex
     * Row index to retrieve. First row has index 0.
     *
     * @param {Array<string>} [columnNames]
     * Column names in order to retrieve.
     *
     * @return {Highcharts.DataTableRow}
     * Returns the row values, or `undefined` if not found.
     */
    getRow(rowIndex, columnNames) {
        return this.getRows(rowIndex, 1, columnNames)[0];
    }
    /**
     * Returns the number of rows in this table.
     *
     * @function Highcharts.DataTable#getRowCount
     *
     * @return {number}
     * Number of rows in this table.
     */
    getRowCount() {
        // @todo Implement via property getter `.length` browsers supported
        return this.rowCount;
    }
    /**
     * Retrieves the index of the first row matching a specific cell value.
     *
     * @function Highcharts.DataTable#getRowIndexBy
     *
     * @param {string} columnName
     * Column to search in.
     *
     * @param {Highcharts.DataTableCellType} cellValue
     * Cell value to search for. `NaN` and `undefined` are not supported.
     *
     * @param {number} [rowIndexOffset]
     * Index offset to start searching.
     *
     * @return {number|undefined}
     * Index of the first row matching the cell value.
     */
    getRowIndexBy(columnName, cellValue, rowIndexOffset) {
        const table = this;
        const column = table.columns[columnName];
        if (column) {
            let rowIndex = -1;
            if (Array.isArray(column)) {
                // Normal array
                rowIndex = column.indexOf(cellValue, rowIndexOffset);
            }
            else if (DataTable_isNumber(cellValue)) {
                // Typed array
                rowIndex = column.indexOf(cellValue, rowIndexOffset);
            }
            if (rowIndex !== -1) {
                return rowIndex;
            }
        }
    }
    /**
     * Retrieves the row at a given index. This function is a simplified wrap of
     * {@link getRowObjects}.
     *
     * @function Highcharts.DataTable#getRowObject
     *
     * @param {number} rowIndex
     * Row index.
     *
     * @param {Array<string>} [columnNames]
     * Column names and their order to retrieve.
     *
     * @return {Highcharts.DataTableRowObject}
     * Returns the row values, or `undefined` if not found.
     */
    getRowObject(rowIndex, columnNames) {
        return this.getRowObjects(rowIndex, 1, columnNames)[0];
    }
    /**
     * Fetches all or a number of rows.
     *
     * @function Highcharts.DataTable#getRowObjects
     *
     * @param {number} [rowIndex]
     * Index of the first row to fetch. Defaults to first row at index `0`.
     *
     * @param {number} [rowCount]
     * Number of rows to fetch. Defaults to maximal number of rows.
     *
     * @param {Array<string>} [columnNames]
     * Column names and their order to retrieve.
     *
     * @return {Highcharts.DataTableRowObject}
     * Returns retrieved rows.
     */
    getRowObjects(rowIndex = 0, rowCount = (this.rowCount - rowIndex), columnNames) {
        const table = this, columns = table.columns, rows = new Array(rowCount);
        columnNames = (columnNames || Object.keys(columns));
        for (let i = rowIndex, i2 = 0, iEnd = Math.min(table.rowCount, (rowIndex + rowCount)), column, row; i < iEnd; ++i, ++i2) {
            row = rows[i2] = {};
            for (const columnName of columnNames) {
                column = columns[columnName];
                row[columnName] = (column ? column[i] : void 0);
            }
        }
        return rows;
    }
    /**
     * Fetches all or a number of rows.
     *
     * @function Highcharts.DataTable#getRows
     *
     * @param {number} [rowIndex]
     * Index of the first row to fetch. Defaults to first row at index `0`.
     *
     * @param {number} [rowCount]
     * Number of rows to fetch. Defaults to maximal number of rows.
     *
     * @param {Array<string>} [columnNames]
     * Column names and their order to retrieve.
     *
     * @return {Highcharts.DataTableRow}
     * Returns retrieved rows.
     */
    getRows(rowIndex = 0, rowCount = (this.rowCount - rowIndex), columnNames) {
        const table = this, columns = table.columns, rows = new Array(rowCount);
        columnNames = (columnNames || Object.keys(columns));
        for (let i = rowIndex, i2 = 0, iEnd = Math.min(table.rowCount, (rowIndex + rowCount)), column, row; i < iEnd; ++i, ++i2) {
            row = rows[i2] = [];
            for (const columnName of columnNames) {
                column = columns[columnName];
                row.push(column ? column[i] : void 0);
            }
        }
        return rows;
    }
    /**
     * Returns the unique version tag of the current state of the table.
     *
     * @function Highcharts.DataTable#getVersionTag
     *
     * @return {string}
     * Unique version tag.
     */
    getVersionTag() {
        return this.versionTag;
    }
    /**
     * Checks for given column names.
     *
     * @function Highcharts.DataTable#hasColumns
     *
     * @param {Array<string>} columnNames
     * Column names to check.
     *
     * @return {boolean}
     * Returns `true` if all columns have been found, otherwise `false`.
     */
    hasColumns(columnNames) {
        const table = this, columns = table.columns;
        for (let i = 0, iEnd = columnNames.length, columnName; i < iEnd; ++i) {
            columnName = columnNames[i];
            if (!columns[columnName]) {
                return false;
            }
        }
        return true;
    }
    /**
     * Searches for a specific cell value.
     *
     * @function Highcharts.DataTable#hasRowWith
     *
     * @param {string} columnName
     * Column to search in.
     *
     * @param {Highcharts.DataTableCellType} cellValue
     * Cell value to search for. `NaN` and `undefined` are not supported.
     *
     * @return {boolean}
     * True, if a row has been found, otherwise false.
     */
    hasRowWith(columnName, cellValue) {
        const table = this;
        const column = table.columns[columnName];
        // Normal array
        if (Array.isArray(column)) {
            return (column.indexOf(cellValue) !== -1);
        }
        // Typed array
        if (DataTable_defined(cellValue) && Number.isFinite(cellValue)) {
            return (column.indexOf(+cellValue) !== -1);
        }
        return false;
    }
    /**
     * Registers a callback for a specific event.
     *
     * @function Highcharts.DataTable#on
     *
     * @param {string} type
     * Event type as a string.
     *
     * @param {Highcharts.EventCallbackFunction<Highcharts.DataTable>} callback
     * Function to register for an event callback.
     *
     * @return {Function}
     * Function to unregister callback from the event.
     */
    on(type, callback) {
        return DataTable_addEvent(this, type, callback);
    }
    /**
     * Renames a column of cell values.
     *
     * @function Highcharts.DataTable#renameColumn
     *
     * @param {string} columnName
     * Name of the column to be renamed.
     *
     * @param {string} newColumnName
     * New name of the column. An existing column with the same name will be
     * replaced.
     *
     * @return {boolean}
     * Returns `true` if successful, `false` if the column was not found.
     */
    renameColumn(columnName, newColumnName) {
        const table = this, columns = table.columns;
        if (columns[columnName]) {
            if (columnName !== newColumnName) {
                columns[newColumnName] = columns[columnName];
                delete columns[columnName];
            }
            return true;
        }
        return false;
    }
    /**
     * Sets a cell value based on the row index and column.  Will
     * insert a new column, if not found.
     *
     * @function Highcharts.DataTable#setCell
     *
     * @param {string} columnName
     * Column name to set.
     *
     * @param {number|undefined} rowIndex
     * Row index to set.
     *
     * @param {Highcharts.DataTableCellType} cellValue
     * Cell value to set.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setCell
     * @emits #afterSetCell
     */
    setCell(columnName, rowIndex, cellValue, eventDetail) {
        const table = this, columns = table.columns, modifier = table.modifier;
        let column = columns[columnName];
        if (column && column[rowIndex] === cellValue) {
            return;
        }
        table.emit({
            type: 'setCell',
            cellValue,
            columnName: columnName,
            detail: eventDetail,
            rowIndex
        });
        if (!column) {
            column = columns[columnName] = new Array(table.rowCount);
        }
        if (rowIndex >= table.rowCount) {
            table.rowCount = (rowIndex + 1);
        }
        column[rowIndex] = cellValue;
        if (modifier) {
            modifier.modifyCell(table, columnName, rowIndex, cellValue);
        }
        table.emit({
            type: 'afterSetCell',
            cellValue,
            columnName: columnName,
            detail: eventDetail,
            rowIndex
        });
    }
    /**
     * Sets cell values for multiple columns. Will insert new columns, if not
     * found.
     *
     * @function Highcharts.DataTable#setColumns
     *
     * @param {Highcharts.DataTableColumnCollection} columns
     * Columns as a collection, where the keys are the column names.
     *
     * @param {number} [rowIndex]
     * Index of the first row to change. Keep undefined to reset.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @param {boolean} [typeAsOriginal=false]
     * Determines whether the original column retains its type when data
     * replaced. If `true`, the original column keeps its type. If not
     * (default), the original column will adopt the type of the replacement
     * column.
     *
     * @emits #setColumns
     * @emits #afterSetColumns
     */
    setColumns(columns, rowIndex, eventDetail, typeAsOriginal) {
        const table = this, tableColumns = table.columns, tableModifier = table.modifier, columnNames = Object.keys(columns);
        let rowCount = table.rowCount;
        table.emit({
            type: 'setColumns',
            columns,
            columnNames,
            detail: eventDetail,
            rowIndex
        });
        if (!DataTable_defined(rowIndex) && !typeAsOriginal) {
            super.setColumns(columns, rowIndex, DataTable_extend(eventDetail, { silent: true }));
        }
        else {
            for (let i = 0, iEnd = columnNames.length, column, tableColumn, columnName, ArrayConstructor; i < iEnd; ++i) {
                columnName = columnNames[i];
                column = columns[columnName];
                tableColumn = tableColumns[columnName];
                ArrayConstructor = Object.getPrototypeOf((tableColumn && typeAsOriginal) ? tableColumn : column).constructor;
                if (!tableColumn) {
                    tableColumn = new ArrayConstructor(rowCount);
                }
                else if (ArrayConstructor === Array) {
                    if (!Array.isArray(tableColumn)) {
                        tableColumn = Array.from(tableColumn);
                    }
                }
                else if (tableColumn.length < rowCount) {
                    tableColumn =
                        new ArrayConstructor(rowCount);
                    tableColumn.set(tableColumns[columnName]);
                }
                tableColumns[columnName] = tableColumn;
                for (let i = (rowIndex || 0), iEnd = column.length; i < iEnd; ++i) {
                    tableColumn[i] = column[i];
                }
                rowCount = Math.max(rowCount, column.length);
            }
            this.applyRowCount(rowCount);
        }
        if (tableModifier) {
            tableModifier.modifyColumns(table, columns, rowIndex || 0);
        }
        table.emit({
            type: 'afterSetColumns',
            columns,
            columnNames,
            detail: eventDetail,
            rowIndex
        });
    }
    /**
     * Sets or unsets the modifier for the table.
     *
     * @param {Highcharts.DataModifier} [modifier]
     * Modifier to set, or `undefined` to unset.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Promise<Highcharts.DataTable>}
     * Resolves to this table if successful, or rejects on failure.
     *
     * @emits #setModifier
     * @emits #afterSetModifier
     */
    setModifier(modifier, eventDetail) {
        const table = this;
        let promise;
        table.emit({
            type: 'setModifier',
            detail: eventDetail,
            modifier,
            modified: table.modified
        });
        table.modified = table;
        table.modifier = modifier;
        if (modifier) {
            promise = modifier.modify(table);
        }
        else {
            promise = Promise.resolve(table);
        }
        return promise
            .then((table) => {
            table.emit({
                type: 'afterSetModifier',
                detail: eventDetail,
                modifier,
                modified: table.modified
            });
            return table;
        })['catch']((error) => {
            table.emit({
                type: 'setModifierError',
                error,
                modifier,
                modified: table.modified
            });
            throw error;
        });
    }
    /**
     * Sets the original row indexes for the table. It is used to keep the
     * reference to the original rows when modifying the table.
     *
     * @param {Array<number|undefined>} originalRowIndexes
     * Original row indexes array.
     *
     * @param {boolean} omitLocalRowIndexes
     * Whether to omit the local row indexes calculation. Defaults to `false`.
     */
    setOriginalRowIndexes(originalRowIndexes, omitLocalRowIndexes = false) {
        this.originalRowIndexes = originalRowIndexes;
        if (omitLocalRowIndexes) {
            return;
        }
        const modifiedIndexes = this.localRowIndexes = [];
        for (let i = 0, iEnd = originalRowIndexes.length, originalIndex; i < iEnd; ++i) {
            originalIndex = originalRowIndexes[i];
            if (DataTable_defined(originalIndex)) {
                modifiedIndexes[originalIndex] = i;
            }
        }
    }
    /**
     * Sets cell values of a row. Will insert a new row, if no index was
     * provided, or if the index is higher than the total number of table rows.
     *
     * Note: This function is just a simplified wrap of
     * {@link Highcharts.DataTable#setRows}.
     *
     * @function Highcharts.DataTable#setRow
     *
     * @param {Highcharts.DataTableRow|Highcharts.DataTableRowObject} row
     * Cell values to set.
     *
     * @param {number} [rowIndex]
     * Index of the row to set. Leave `undefind` to add as a new row.
     *
     * @param {boolean} [insert]
     * Whether to insert the row at the given index, or to overwrite the row.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setRows
     * @emits #afterSetRows
     */
    setRow(row, rowIndex, insert, eventDetail) {
        this.setRows([row], rowIndex, insert, eventDetail);
    }
    /**
     * Sets cell values for multiple rows. Will insert new rows, if no index was
     * was provided, or if the index is higher than the total number of table
     * rows.
     *
     * @function Highcharts.DataTable#setRows
     *
     * @param {Array<(Highcharts.DataTableRow|Highcharts.DataTableRowObject)>} rows
     * Row values to set.
     *
     * @param {number} [rowIndex]
     * Index of the first row to set. Leave `undefined` to add as new rows.
     *
     * @param {boolean} [insert]
     * Whether to insert the row at the given index, or to overwrite the row.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setRows
     * @emits #afterSetRows
     */
    setRows(rows, rowIndex = this.rowCount, insert, eventDetail) {
        const table = this, columns = table.columns, columnNames = Object.keys(columns), modifier = table.modifier, rowCount = rows.length;
        table.emit({
            type: 'setRows',
            detail: eventDetail,
            rowCount,
            rowIndex,
            rows
        });
        for (let i = 0, i2 = rowIndex, row; i < rowCount; ++i, ++i2) {
            row = rows[i];
            if (row === DataTable.NULL) {
                for (let j = 0, jEnd = columnNames.length; j < jEnd; ++j) {
                    const column = columns[columnNames[j]];
                    if (insert) {
                        columns[columnNames[j]] = Data_ColumnUtils.splice(column, i2, 0, true, [null]).array;
                    }
                    else {
                        column[i2] = null;
                    }
                }
            }
            else if (row instanceof Array) {
                for (let j = 0, jEnd = columnNames.length; j < jEnd; ++j) {
                    columns[columnNames[j]][i2] = row[j];
                }
            }
            else {
                super.setRow(row, i2, void 0, { silent: true });
            }
        }
        const indexRowCount = insert ?
            rowCount + rows.length :
            rowIndex + rowCount;
        if (indexRowCount > table.rowCount) {
            table.rowCount = indexRowCount;
            for (let i = 0, iEnd = columnNames.length; i < iEnd; ++i) {
                const columnName = columnNames[i];
                columns[columnName] = Data_ColumnUtils.setLength(columns[columnName], indexRowCount);
            }
        }
        if (modifier) {
            modifier.modifyRows(table, rows, rowIndex);
        }
        table.emit({
            type: 'afterSetRows',
            detail: eventDetail,
            rowCount,
            rowIndex,
            rows
        });
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Null state for a row record. In some cases, a row in a table may not
 * contain any data or may be invalid. In these cases, a null state can be
 * used to indicate that the row record is empty or invalid.
 *
 * @name Highcharts.DataTable.NULL
 * @type {Highcharts.DataTableRowObject}
 *
 * @see {@link Highcharts.DataTable.isNull} for a null test.
 *
 * @example
 * table.setRows([DataTable.NULL, DataTable.NULL], 10);
 */
DataTable.NULL = {};
/**
 * Semantic version string of the DataTable class.
 * @internal
 */
DataTable.version = '1.0.0';
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Data_DataTable = (DataTable);

;// ./code/grid/es-modules/Data/Connectors/DataConnector.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Wojciech Chmiel
 *  - Gøran Slettemark
 *
 * */




const { addEvent: DataConnector_addEvent, fireEvent: DataConnector_fireEvent, merge: DataConnector_merge, pick: DataConnector_pick } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Abstract class providing an interface for managing a DataConnector.
 *
 * @private
 */
class DataConnector {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructor for the connector class.
     *
     * @param {DataConnector.UserOptions} [options]
     * Options to use in the connector.
     */
    constructor(options = {}) {
        this.table = new Data_DataTable(options.dataTable);
        this.metadata = options.metadata || { columns: {} };
    }
    /**
     * Poll timer ID, if active.
     */
    get polling() {
        return !!this._polling;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Method for adding metadata for a single column.
     *
     * @param {string} name
     * The name of the column to be described.
     *
     * @param {DataConnector.MetaColumn} columnMeta
     * The metadata to apply to the column.
     */
    describeColumn(name, columnMeta) {
        const connector = this, columns = connector.metadata.columns;
        columns[name] = DataConnector_merge(columns[name] || {}, columnMeta);
    }
    /**
     * Method for applying columns meta information to the whole DataConnector.
     *
     * @param {Highcharts.Dictionary<DataConnector.MetaColumn>} columns
     * Pairs of column names and MetaColumn objects.
     */
    describeColumns(columns) {
        const connector = this, columnNames = Object.keys(columns);
        let columnName;
        while (typeof (columnName = columnNames.pop()) === 'string') {
            connector.describeColumn(columnName, columns[columnName]);
        }
    }
    /**
     * Emits an event on the connector to all registered callbacks of this
     * event.
     *
     * @param {DataConnector.Event} [e]
     * Event object containing additional event information.
     */
    emit(e) {
        DataConnector_fireEvent(this, e.type, e);
    }
    /**
     * Returns the order of columns.
     *
     * @param {boolean} [usePresentationState]
     * Whether to use the column order of the presentation state of the table.
     *
     * @return {Array<string>|undefined}
     * Order of columns.
     */
    getColumnOrder(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    usePresentationState) {
        const connector = this, columns = connector.metadata.columns, names = Object.keys(columns || {});
        if (names.length) {
            return names.sort((a, b) => (DataConnector_pick(columns[a].index, 0) - DataConnector_pick(columns[b].index, 0)));
        }
    }
    /**
     * Retrieves the columns of the dataTable,
     * applies column order from meta.
     *
     * @param {boolean} [usePresentationOrder]
     * Whether to use the column order of the presentation state of the table.
     *
     * @return {Highcharts.DataTableColumnCollection}
     * An object with the properties `columnNames` and `columnValues`
     */
    getSortedColumns(usePresentationOrder) {
        return this.table.getColumns(this.getColumnOrder(usePresentationOrder));
    }
    /**
     * The default load method, which fires the `afterLoad` event
     *
     * @return {Promise<DataConnector>}
     * The loaded connector.
     *
     * @emits DataConnector#afterLoad
     */
    load() {
        DataConnector_fireEvent(this, 'afterLoad', { table: this.table });
        return Promise.resolve(this);
    }
    /**
     * Registers a callback for a specific connector event.
     *
     * @param {string} type
     * Event type as a string.
     *
     * @param {DataEventEmitter.Callback} callback
     * Function to register for the connector callback.
     *
     * @return {Function}
     * Function to unregister callback from the connector event.
     */
    on(type, callback) {
        return DataConnector_addEvent(this, type, callback);
    }
    /**
     * The default save method, which fires the `afterSave` event.
     *
     * @return {Promise<DataConnector>}
     * The saved connector.
     *
     * @emits DataConnector#afterSave
     * @emits DataConnector#saveError
     */
    save() {
        DataConnector_fireEvent(this, 'saveError', { table: this.table });
        return Promise.reject(new Error('Not implemented'));
    }
    /**
     * Sets the index and order of columns.
     *
     * @param {Array<string>} columnNames
     * Order of columns.
     */
    setColumnOrder(columnNames) {
        const connector = this;
        for (let i = 0, iEnd = columnNames.length; i < iEnd; ++i) {
            connector.describeColumn(columnNames[i], { index: i });
        }
    }
    setModifierOptions(modifierOptions) {
        const ModifierClass = (modifierOptions &&
            Modifiers_DataModifier.types[modifierOptions.type]);
        return this.table
            .setModifier(ModifierClass ?
            new ModifierClass(modifierOptions) :
            void 0)
            .then(() => this);
    }
    /**
     * Starts polling new data after the specific time span in milliseconds.
     *
     * @param {number} refreshTime
     * Refresh time in milliseconds between polls.
     */
    startPolling(refreshTime = 1000) {
        const connector = this;
        window.clearTimeout(connector._polling);
        connector._polling = window.setTimeout(() => connector
            .load()['catch']((error) => connector.emit({
            type: 'loadError',
            error,
            table: connector.table
        }))
            .then(() => {
            if (connector._polling) {
                connector.startPolling(refreshTime);
            }
        }), refreshTime);
    }
    /**
     * Stops polling data.
     */
    stopPolling() {
        const connector = this;
        window.clearTimeout(connector._polling);
        delete connector._polling;
    }
    /**
     * Retrieves metadata from a single column.
     *
     * @param {string} name
     * The identifier for the column that should be described
     *
     * @return {DataConnector.MetaColumn|undefined}
     * Returns a MetaColumn object if found.
     */
    whatIs(name) {
        return this.metadata.columns[name];
    }
}
/* *
 *
 *  Class Namespace
 *
 * */
(function (DataConnector) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Constants
     *
     * */
    /**
     * Registry as a record object with connector names and their class.
     */
    DataConnector.types = {};
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Adds a connector class to the registry. The connector has to provide the
     * `DataConnector.options` property and the `DataConnector.load` method to
     * modify the table.
     *
     * @private
     *
     * @param {string} key
     * Registry key of the connector class.
     *
     * @param {DataConnectorType} DataConnectorClass
     * Connector class (aka class constructor) to register.
     *
     * @return {boolean}
     * Returns true, if the registration was successful. False is returned, if
     * their is already a connector registered with this key.
     */
    function registerType(key, DataConnectorClass) {
        return (!!key &&
            !DataConnector.types[key] &&
            !!(DataConnector.types[key] = DataConnectorClass));
    }
    DataConnector.registerType = registerType;
})(DataConnector || (DataConnector = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Connectors_DataConnector = (DataConnector);

;// ./code/grid/es-modules/Data/Converters/DataConverter.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Sebastian Bochan
 *  - Gøran Slettemark
 *  - Torstein Hønsi
 *  - Wojciech Chmiel
 *  - Jomar Hønsi
 *
 * */



const { addEvent: DataConverter_addEvent, fireEvent: DataConverter_fireEvent, isNumber: DataConverter_isNumber, merge: DataConverter_merge } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Base class providing an interface and basic methods for a DataConverter
 *
 * @private
 */
class DataConverter {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the DataConverter.
     *
     * @param {DataConverter.UserOptions} [options]
     * Options for the DataConverter.
     */
    constructor(options) {
        /* *
         *
         *  Properties
         *
         * */
        /**
         * A collection of available date formats.
         */
        this.dateFormats = {
            'YYYY/mm/dd': {
                regex: /^(\d{4})([\-\.\/])(\d{1,2})\2(\d{1,2})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[1], match[3] - 1, +match[4]) :
                        NaN);
                }
            },
            'dd/mm/YYYY': {
                regex: /^(\d{1,2})([\-\.\/])(\d{1,2})\2(\d{4})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[4], match[3] - 1, +match[1]) :
                        NaN);
                },
                alternative: 'mm/dd/YYYY' // Different format with the same regex
            },
            'mm/dd/YYYY': {
                regex: /^(\d{1,2})([\-\.\/])(\d{1,2})\2(\d{4})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[4], match[1] - 1, +match[3]) :
                        NaN);
                }
            },
            'dd/mm/YY': {
                regex: /^(\d{1,2})([\-\.\/])(\d{1,2})\2(\d{2})$/,
                parser: function (match) {
                    const d = new Date();
                    if (!match) {
                        return NaN;
                    }
                    let year = +match[4];
                    if (year > (d.getFullYear() - 2000)) {
                        year += 1900;
                    }
                    else {
                        year += 2000;
                    }
                    return Date.UTC(year, match[3] - 1, +match[1]);
                },
                alternative: 'mm/dd/YY' // Different format with the same regex
            },
            'mm/dd/YY': {
                regex: /^(\d{1,2})([\-\.\/])(\d{1,2})\2(\d{2})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[4] + 2000, match[1] - 1, +match[3]) :
                        NaN);
                }
            }
        };
        const mergedOptions = DataConverter_merge(DataConverter.defaultOptions, options);
        let regExpPoint = mergedOptions.decimalPoint;
        if (regExpPoint === '.' || regExpPoint === ',') {
            regExpPoint = regExpPoint === '.' ? '\\.' : ',';
            this.decimalRegExp =
                new RegExp('^(-?[0-9]+)' + regExpPoint + '([0-9]+)$');
        }
        this.options = mergedOptions;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Converts a value to a boolean.
     *
     * @param {DataConverter.Type} value
     * Value to convert.
     *
     * @return {boolean}
     * Converted value as a boolean.
     */
    asBoolean(value) {
        if (typeof value === 'boolean') {
            return value;
        }
        if (typeof value === 'string') {
            return value !== '' && value !== '0' && value !== 'false';
        }
        return !!this.asNumber(value);
    }
    /**
     * Converts a value to a Date.
     *
     * @param {DataConverter.Type} value
     * Value to convert.
     *
     * @return {globalThis.Date}
     * Converted value as a Date.
     */
    asDate(value) {
        let timestamp;
        if (typeof value === 'string') {
            timestamp = this.parseDate(value);
        }
        else if (typeof value === 'number') {
            timestamp = value;
        }
        else if (value instanceof Date) {
            return value;
        }
        else {
            timestamp = this.parseDate(this.asString(value));
        }
        return new Date(timestamp);
    }
    /**
     * Casts a string value to it's guessed type
     *
     * @param {*} value
     * The value to examine.
     *
     * @return {number|string|Date}
     * The converted value.
     */
    asGuessedType(value) {
        const converter = this, typeMap = {
            'number': converter.asNumber,
            'Date': converter.asDate,
            'string': converter.asString
        };
        return typeMap[converter.guessType(value)].call(converter, value);
    }
    /**
     * Converts a value to a number.
     *
     * @param {DataConverter.Type} value
     * Value to convert.
     *
     * @return {number}
     * Converted value as a number.
     */
    asNumber(value) {
        if (typeof value === 'number') {
            return value;
        }
        if (typeof value === 'boolean') {
            return value ? 1 : 0;
        }
        if (typeof value === 'string') {
            const decimalRegex = this.decimalRegExp;
            if (value.indexOf(' ') > -1) {
                value = value.replace(/\s+/g, '');
            }
            if (decimalRegex) {
                if (!decimalRegex.test(value)) {
                    return NaN;
                }
                value = value.replace(decimalRegex, '$1.$2');
            }
            return parseFloat(value);
        }
        if (value instanceof Date) {
            return value.getDate();
        }
        if (value) {
            return value.getRowCount();
        }
        return NaN;
    }
    /**
     * Converts a value to a string.
     *
     * @param {DataConverter.Type} value
     * Value to convert.
     *
     * @return {string}
     * Converted value as a string.
     */
    asString(value) {
        return '' + value;
    }
    /**
     * Tries to guess the date format
     *  - Check if either month candidate exceeds 12
     *  - Check if year is missing (use current year)
     *  - Check if a shortened year format is used (e.g. 1/1/99)
     *  - If no guess can be made, the user must be prompted
     * data is the data to deduce a format based on
     * @private
     *
     * @param {Array<string>} data
     * Data to check the format.
     *
     * @param {number} limit
     * Max data to check the format.
     *
     * @param {boolean} save
     * Whether to save the date format in the converter options.
     */
    deduceDateFormat(data, limit, save) {
        const parser = this, stable = [], max = [];
        let format = 'YYYY/mm/dd', thing, guessedFormat = [], i = 0, madeDeduction = false, 
        /// candidates = {},
        elem, j;
        if (!limit || limit > data.length) {
            limit = data.length;
        }
        for (; i < limit; i++) {
            if (typeof data[i] !== 'undefined' &&
                data[i] && data[i].length) {
                thing = data[i]
                    .trim()
                    .replace(/[\-\.\/]/g, ' ')
                    .split(' ');
                guessedFormat = [
                    '',
                    '',
                    ''
                ];
                for (j = 0; j < thing.length; j++) {
                    if (j < guessedFormat.length) {
                        elem = parseInt(thing[j], 10);
                        if (elem) {
                            max[j] = (!max[j] || max[j] < elem) ? elem : max[j];
                            if (typeof stable[j] !== 'undefined') {
                                if (stable[j] !== elem) {
                                    stable[j] = false;
                                }
                            }
                            else {
                                stable[j] = elem;
                            }
                            if (elem > 31) {
                                if (elem < 100) {
                                    guessedFormat[j] = 'YY';
                                }
                                else {
                                    guessedFormat[j] = 'YYYY';
                                }
                                /// madeDeduction = true;
                            }
                            else if (elem > 12 &&
                                elem <= 31) {
                                guessedFormat[j] = 'dd';
                                madeDeduction = true;
                            }
                            else if (!guessedFormat[j].length) {
                                guessedFormat[j] = 'mm';
                            }
                        }
                    }
                }
            }
        }
        if (madeDeduction) {
            // This handles a few edge cases with hard to guess dates
            for (j = 0; j < stable.length; j++) {
                if (stable[j] !== false) {
                    if (max[j] > 12 &&
                        guessedFormat[j] !== 'YY' &&
                        guessedFormat[j] !== 'YYYY') {
                        guessedFormat[j] = 'YY';
                    }
                }
                else if (max[j] > 12 && guessedFormat[j] === 'mm') {
                    guessedFormat[j] = 'dd';
                }
            }
            // If the middle one is dd, and the last one is dd,
            // the last should likely be year.
            if (guessedFormat.length === 3 &&
                guessedFormat[1] === 'dd' &&
                guessedFormat[2] === 'dd') {
                guessedFormat[2] = 'YY';
            }
            format = guessedFormat.join('/');
            // If the caculated format is not valid, we need to present an
            // error.
        }
        // Save the deduced format in the converter options.
        if (save) {
            parser.options.dateFormat = format;
        }
        return format;
    }
    /**
     * Emits an event on the DataConverter instance.
     *
     * @param {DataConverter.Event} [e]
     * Event object containing additional event data
     */
    emit(e) {
        DataConverter_fireEvent(this, e.type, e);
    }
    /**
     * Initiates the data exporting. Should emit `exportError` on failure.
     *
     * @param {DataConnector} connector
     * Connector to export from.
     *
     * @param {DataConverter.Options} [options]
     * Options for the export.
     */
    export(
    /* eslint-disable @typescript-eslint/no-unused-vars */
    connector, options
    /* eslint-enable @typescript-eslint/no-unused-vars */
    ) {
        this.emit({
            type: 'exportError',
            columns: [],
            headers: []
        });
        throw new Error('Not implemented');
    }
    /**
     * Getter for the data table.
     *
     * @return {DataTable}
     * Table of parsed data.
     */
    getTable() {
        throw new Error('Not implemented');
    }
    /**
     * Guesses the potential type of a string value for parsing CSV etc.
     *
     * @param {*} value
     * The value to examine.
     *
     * @return {'number'|'string'|'Date'}
     * Type string, either `string`, `Date`, or `number`.
     */
    guessType(value) {
        const converter = this;
        let result = 'string';
        if (typeof value === 'string') {
            const trimedValue = converter.trim(`${value}`), decimalRegExp = converter.decimalRegExp;
            let innerTrimedValue = converter.trim(trimedValue, true);
            if (decimalRegExp) {
                innerTrimedValue = (decimalRegExp.test(innerTrimedValue) ?
                    innerTrimedValue.replace(decimalRegExp, '$1.$2') :
                    '');
            }
            const floatValue = parseFloat(innerTrimedValue);
            if (+innerTrimedValue === floatValue) {
                // String is numeric
                value = floatValue;
            }
            else {
                // Determine if a date string
                const dateValue = converter.parseDate(value);
                result = DataConverter_isNumber(dateValue) ? 'Date' : 'string';
            }
        }
        if (typeof value === 'number') {
            // Greater than milliseconds in a year assumed timestamp
            result = value > 365 * 24 * 3600 * 1000 ? 'Date' : 'number';
        }
        return result;
    }
    /**
     * Registers a callback for a specific event.
     *
     * @param {string} type
     * Event type as a string.
     *
     * @param {DataEventEmitter.Callback} callback
     * Function to register for an modifier callback.
     *
     * @return {Function}
     * Function to unregister callback from the modifier event.
     */
    on(type, callback) {
        return DataConverter_addEvent(this, type, callback);
    }
    /**
     * Initiates the data parsing. Should emit `parseError` on failure.
     *
     * @param {DataConverter.UserOptions} options
     * Options of the DataConverter.
     */
    parse(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    options) {
        this.emit({
            type: 'parseError',
            columns: [],
            headers: []
        });
        throw new Error('Not implemented');
    }
    /**
     * Parse a date and return it as a number.
     *
     * @param {string} value
     * Value to parse.
     *
     * @param {string} dateFormatProp
     * Which of the predefined date formats
     * to use to parse date values.
     */
    parseDate(value, dateFormatProp) {
        const converter = this, options = converter.options;
        let dateFormat = dateFormatProp || options.dateFormat, result = NaN, key, format, match;
        if (options.parseDate) {
            result = options.parseDate(value);
        }
        else {
            // Auto-detect the date format the first time
            if (!dateFormat) {
                for (key in converter.dateFormats) { // eslint-disable-line guard-for-in
                    format = converter.dateFormats[key];
                    match = value.match(format.regex);
                    if (match) {
                        // `converter.options.dateFormat` = dateFormat = key;
                        dateFormat = key;
                        // `converter.options.alternativeFormat` =
                        // format.alternative || '';
                        result = format.parser(match);
                        break;
                    }
                }
                // Next time, use the one previously found
            }
            else {
                format = converter.dateFormats[dateFormat];
                if (!format) {
                    // The selected format is invalid
                    format = converter.dateFormats['YYYY/mm/dd'];
                }
                match = value.match(format.regex);
                if (match) {
                    result = format.parser(match);
                }
            }
            // Fall back to Date.parse
            if (!match) {
                match = Date.parse(value);
                // External tools like Date.js and MooTools extend Date object
                // and returns a date.
                if (typeof match === 'object' &&
                    match !== null &&
                    match.getTime) {
                    result = (match.getTime() -
                        match.getTimezoneOffset() *
                            60000);
                    // Timestamp
                }
                else if (DataConverter_isNumber(match)) {
                    result = match - (new Date(match)).getTimezoneOffset() * 60000;
                    if ( // Reset dates without year in Chrome
                    value.indexOf('2001') === -1 &&
                        (new Date(result)).getFullYear() === 2001) {
                        result = NaN;
                    }
                }
            }
        }
        return result;
    }
    /**
     * Trim a string from whitespaces.
     *
     * @param {string} str
     * String to trim.
     *
     * @param {boolean} [inside=false]
     * Remove all spaces between numbers.
     *
     * @return {string}
     * Trimed string
     */
    trim(str, inside) {
        if (typeof str === 'string') {
            str = str.replace(/^\s+|\s+$/g, '');
            // Clear white space insdie the string, like thousands separators
            if (inside && /^[\d\s]+$/.test(str)) {
                str = str.replace(/\s/g, '');
            }
        }
        return str;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options
 */
DataConverter.defaultOptions = {
    dateFormat: '',
    alternativeFormat: '',
    startColumn: 0,
    endColumn: Number.MAX_VALUE,
    startRow: 0,
    endRow: Number.MAX_VALUE,
    firstRowAsNames: true,
    switchRowsAndColumns: false
};
/* *
 *
 *  Class Namespace
 *
 * */
/**
 * Additionally provided types for events and conversion.
 */
(function (DataConverter) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Constants
     *
     * */
    /**
     * Registry as a record object with connector names and their class.
     */
    DataConverter.types = {};
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Adds a converter class to the registry.
     *
     * @private
     *
     * @param {string} key
     * Registry key of the converter class.
     *
     * @param {DataConverterTypes} DataConverterClass
     * Connector class (aka class constructor) to register.
     *
     * @return {boolean}
     * Returns true, if the registration was successful. False is returned, if
     * their is already a converter registered with this key.
     */
    function registerType(key, DataConverterClass) {
        return (!!key &&
            !DataConverter.types[key] &&
            !!(DataConverter.types[key] = DataConverterClass));
    }
    DataConverter.registerType = registerType;
    /**
     * Converts an array of columns to a table instance. Second dimension of the
     * array are the row cells.
     *
     * @param {Array<DataTable.Column>} [columns]
     * Array to convert.
     *
     * @param {Array<string>} [headers]
     * Column names to use.
     *
     * @return {DataTable}
     * Table instance from the arrays.
     */
    function getTableFromColumns(columns = [], headers = []) {
        const table = new Data_DataTable();
        for (let i = 0, iEnd = Math.max(headers.length, columns.length); i < iEnd; ++i) {
            table.setColumn(headers[i] || `${i}`, columns[i]);
        }
        return table;
    }
    DataConverter.getTableFromColumns = getTableFromColumns;
})(DataConverter || (DataConverter = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Converters_DataConverter = (DataConverter);

;// ./code/grid/es-modules/Data/DataCursor.js
/* *
 *
 *  (c) 2020-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */

/* *
 *
 *  Class
 *
 * */
/**
 * This class manages state cursors pointing on {@link Data.DataTable}. It
 * creates a relation between states of the user interface and the table cells,
 * columns, or rows.
 *
 * @class
 * @name Data.DataCursor
 */
class DataCursor {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(stateMap = {}) {
        this.emittingRegister = [];
        this.listenerMap = {};
        this.stateMap = stateMap;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * This function registers a listener for a specific state and table.
     *
     * @example
     * ```TypeScript
     * dataCursor.addListener(myTable.id, 'hover', (e: DataCursor.Event) => {
     *     if (e.cursor.type === 'position') {
     *         console.log(`Hover over row #${e.cursor.row}.`);
     *     }
     * });
     * ```
     *
     * @function #addListener
     *
     * @param {Data.DataCursor.TableId} tableId
     * The ID of the table to listen to.
     *
     * @param {Data.DataCursor.State} state
     * The state on the table to listen to.
     *
     * @param {Data.DataCursor.Listener} listener
     * The listener to register.
     *
     * @return {Data.DataCursor}
     * Returns the DataCursor instance for a call chain.
     */
    addListener(tableId, state, listener) {
        const listenerMap = this.listenerMap[tableId] = (this.listenerMap[tableId] ||
            {});
        const listeners = listenerMap[state] = (listenerMap[state] ||
            []);
        listeners.push(listener);
        return this;
    }
    /**
     * @private
     */
    buildEmittingTag(e) {
        return (e.cursor.type === 'position' ?
            [
                e.table.id,
                e.cursor.column,
                e.cursor.row,
                e.cursor.state,
                e.cursor.type
            ] :
            [
                e.table.id,
                e.cursor.columns,
                e.cursor.firstRow,
                e.cursor.lastRow,
                e.cursor.state,
                e.cursor.type
            ]).join('\0');
    }
    /**
     * This function emits a state cursor related to a table. It will provide
     * lasting state cursors of the table to listeners.
     *
     * @example
     * ```ts
     * dataCursor.emit(myTable, {
     *     type: 'position',
     *     column: 'city',
     *     row: 4,
     *     state: 'hover',
     * });
     * ```
     *
     * @param {Data.DataTable} table
     * The related table of the cursor.
     *
     * @param {Data.DataCursor.Type} cursor
     * The state cursor to emit.
     *
     * @param {Event} [event]
     * Optional event information from a related source.
     *
     * @param {boolean} [lasting]
     * Whether this state cursor should be kept until it is cleared with
     * {@link DataCursor#remitCursor}.
     *
     * @return {Data.DataCursor}
     * Returns the DataCursor instance for a call chain.
     */
    emitCursor(table, cursor, event, lasting) {
        const tableId = table.id, state = cursor.state, listeners = (this.listenerMap[tableId] &&
            this.listenerMap[tableId][state]);
        if (listeners) {
            const stateMap = this.stateMap[tableId] = (this.stateMap[tableId] ?? {});
            const cursors = stateMap[cursor.state] || [];
            if (lasting) {
                if (!cursors.length) {
                    stateMap[cursor.state] = cursors;
                }
                if (DataCursor.getIndex(cursor, cursors) === -1) {
                    cursors.push(cursor);
                }
            }
            const e = {
                cursor,
                cursors,
                table
            };
            if (event) {
                e.event = event;
            }
            const emittingRegister = this.emittingRegister, emittingTag = this.buildEmittingTag(e);
            if (emittingRegister.indexOf(emittingTag) >= 0) {
                // Break call stack loops
                return this;
            }
            try {
                this.emittingRegister.push(emittingTag);
                for (let i = 0, iEnd = listeners.length; i < iEnd; ++i) {
                    listeners[i].call(this, e);
                }
            }
            finally {
                const index = this.emittingRegister.indexOf(emittingTag);
                if (index >= 0) {
                    this.emittingRegister.splice(index, 1);
                }
            }
        }
        return this;
    }
    /**
     * Removes a lasting state cursor.
     *
     * @function #remitCursor
     *
     * @param {string} tableId
     * ID of the related cursor table.
     *
     * @param {Data.DataCursor.Type} cursor
     * Copy or reference of the cursor.
     *
     * @return {Data.DataCursor}
     * Returns the DataCursor instance for a call chain.
     */
    remitCursor(tableId, cursor) {
        const cursors = (this.stateMap[tableId] &&
            this.stateMap[tableId][cursor.state]);
        if (cursors) {
            const index = DataCursor.getIndex(cursor, cursors);
            if (index >= 0) {
                cursors.splice(index, 1);
            }
        }
        return this;
    }
    /**
     * This function removes a listener.
     *
     * @function #addListener
     *
     * @param {Data.DataCursor.TableId} tableId
     * The ID of the table the listener is connected to.
     *
     * @param {Data.DataCursor.State} state
     * The state on the table the listener is listening to.
     *
     * @param {Data.DataCursor.Listener} listener
     * The listener to deregister.
     *
     * @return {Data.DataCursor}
     * Returns the DataCursor instance for a call chain.
     */
    removeListener(tableId, state, listener) {
        const listeners = (this.listenerMap[tableId] &&
            this.listenerMap[tableId][state]);
        if (listeners) {
            const index = listeners.indexOf(listener);
            if (index >= 0) {
                listeners.splice(index, 1);
            }
        }
        return this;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Semantic version string of the DataCursor class.
 * @internal
 */
DataCursor.version = '1.0.0';
/* *
 *
 *  Class Namespace
 *
 * */
/**
 * @class Data.DataCursor
 */
(function (DataCursor) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Finds the index of an cursor in an array.
     * @private
     */
    function getIndex(needle, cursors) {
        if (needle.type === 'position') {
            for (let cursor, i = 0, iEnd = cursors.length; i < iEnd; ++i) {
                cursor = cursors[i];
                if (cursor.type === 'position' &&
                    cursor.state === needle.state &&
                    cursor.column === needle.column &&
                    cursor.row === needle.row) {
                    return i;
                }
            }
        }
        else {
            const columnNeedle = JSON.stringify(needle.columns);
            for (let cursor, i = 0, iEnd = cursors.length; i < iEnd; ++i) {
                cursor = cursors[i];
                if (cursor.type === 'range' &&
                    cursor.state === needle.state &&
                    cursor.firstRow === needle.firstRow &&
                    cursor.lastRow === needle.lastRow &&
                    JSON.stringify(cursor.columns) === columnNeedle) {
                    return i;
                }
            }
        }
        return -1;
    }
    DataCursor.getIndex = getIndex;
    /**
     * Checks whether two cursor share the same properties.
     * @private
     */
    function isEqual(cursorA, cursorB) {
        if (cursorA.type === 'position' && cursorB.type === 'position') {
            return (cursorA.column === cursorB.column &&
                cursorA.row === cursorB.row &&
                cursorA.state === cursorB.state);
        }
        if (cursorA.type === 'range' && cursorB.type === 'range') {
            return (cursorA.firstRow === cursorB.firstRow &&
                cursorA.lastRow === cursorB.lastRow &&
                (JSON.stringify(cursorA.columns) ===
                    JSON.stringify(cursorB.columns)));
        }
        return false;
    }
    DataCursor.isEqual = isEqual;
    /**
     * Checks whether a cursor is in a range.
     * @private
     */
    function isInRange(needle, range) {
        if (range.type === 'position') {
            range = toRange(range);
        }
        if (needle.type === 'position') {
            needle = toRange(needle, range);
        }
        const needleColumns = needle.columns;
        const rangeColumns = range.columns;
        return (needle.firstRow >= range.firstRow &&
            needle.lastRow <= range.lastRow &&
            (!needleColumns ||
                !rangeColumns ||
                needleColumns.every((column) => rangeColumns.indexOf(column) >= 0)));
    }
    DataCursor.isInRange = isInRange;
    /**
     * @private
     */
    function toPositions(cursor) {
        if (cursor.type === 'position') {
            return [cursor];
        }
        const columns = (cursor.columns || []);
        const positions = [];
        const state = cursor.state;
        for (let row = cursor.firstRow, rowEnd = cursor.lastRow; row < rowEnd; ++row) {
            if (!columns.length) {
                positions.push({
                    type: 'position',
                    row,
                    state
                });
                continue;
            }
            for (let column = 0, columnEnd = columns.length; column < columnEnd; ++column) {
                positions.push({
                    type: 'position',
                    column: columns[column],
                    row,
                    state
                });
            }
        }
        return positions;
    }
    DataCursor.toPositions = toPositions;
    /**
     * @private
     */
    function toRange(cursor, defaultRange) {
        if (cursor.type === 'range') {
            return cursor;
        }
        const range = {
            type: 'range',
            firstRow: (cursor.row ??
                (defaultRange && defaultRange.firstRow) ??
                0),
            lastRow: (cursor.row ??
                (defaultRange && defaultRange.lastRow) ??
                Number.MAX_VALUE),
            state: cursor.state
        };
        if (typeof cursor.column !== 'undefined') {
            range.columns = [cursor.column];
        }
        return range;
    }
    DataCursor.toRange = toRange;
})(DataCursor || (DataCursor = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Data_DataCursor = (DataCursor);

;// ./code/grid/es-modules/Accessibility/HighContrastMode.js
/* *
 *
 *  (c) 2009-2024 Øystein Moseng
 *
 *  Handling for Windows High Contrast Mode.
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { doc: HighContrastMode_doc, isMS, win: HighContrastMode_win } = Core_Globals;
/* *
 *
 *  Functions
 *
 * */
/**
 * Detect WHCM in the browser.
 *
 * @function Highcharts#isHighContrastModeActive
 * @private
 * @return {boolean} Returns true if the browser is in High Contrast mode.
 */
function isHighContrastModeActive() {
    // Use media query on Edge, but not on IE
    const isEdge = /(Edg)/.test(HighContrastMode_win.navigator.userAgent);
    if (HighContrastMode_win.matchMedia && isEdge) {
        return HighContrastMode_win.matchMedia('(-ms-high-contrast: active)').matches;
    }
    // Test BG image for IE
    if (isMS && HighContrastMode_win.getComputedStyle) {
        const testDiv = HighContrastMode_doc.createElement('div');
        const imageSrc = 'data:image/gif;base64,' +
            'R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
        testDiv.style.backgroundImage = `url(${imageSrc})`; // #13071
        HighContrastMode_doc.body.appendChild(testDiv);
        const bi = (testDiv.currentStyle ||
            HighContrastMode_win.getComputedStyle(testDiv)).backgroundImage;
        HighContrastMode_doc.body.removeChild(testDiv);
        return bi === 'none';
    }
    // Other browsers use the forced-colors standard
    return HighContrastMode_win.matchMedia && HighContrastMode_win.matchMedia('(forced-colors: active)').matches;
}
/**
 * Force high contrast theme for the chart. The default theme is defined in
 * a separate file.
 *
 * @function Highcharts#setHighContrastTheme
 * @private
 * @param {Highcharts.AccessibilityChart} chart The chart to set the theme of.
 * @return {void}
 */
function setHighContrastTheme(chart) {
    // We might want to add additional functionality here in the future for
    // storing the old state so that we can reset the theme if HC mode is
    // disabled. For now, the user will have to reload the page.
    chart.highContrastModeActive = true;
    // Apply theme to chart
    const theme = (chart.options.accessibility.highContrastTheme);
    chart.update(theme, false);
    const hasCustomColors = theme.colors?.length > 1;
    // Force series colors (plotOptions is not enough)
    chart.series.forEach(function (s) {
        const plotOpts = theme.plotOptions[s.type] || {};
        const fillColor = hasCustomColors && s.colorIndex !== void 0 ?
            theme.colors[s.colorIndex] :
            plotOpts.color || 'window';
        const seriesOptions = {
            color: plotOpts.color || 'windowText',
            colors: hasCustomColors ?
                theme.colors : [plotOpts.color || 'windowText'],
            borderColor: plotOpts.borderColor || 'window',
            fillColor
        };
        s.update(seriesOptions, false);
        if (s.points) {
            // Force point colors if existing
            s.points.forEach(function (p) {
                if (p.options && p.options.color) {
                    p.update({
                        color: plotOpts.color || 'windowText',
                        borderColor: plotOpts.borderColor || 'window'
                    }, false);
                }
            });
        }
    });
    // The redraw for each series and after is required for 3D pie
    // (workaround)
    chart.redraw();
}
/* *
 *
 *  Default Export
 *
 * */
const whcm = {
    isHighContrastModeActive,
    setHighContrastTheme
};
/* harmony default export */ const HighContrastMode = (whcm);

;// ./code/grid/es-modules/Grid/Core/Globals.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
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

/* *
 *
 *  Class
 *
 * */
/**
 * Globals Grid namespace.
 */
var Globals_Globals;
(function (Globals) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Constants
     *
     * */
    Globals.classNamePrefix = 'hcg-';
    Globals.rawClassNames = {
        container: 'container',
        tableElement: 'table',
        captionElement: 'caption',
        descriptionElement: 'description',
        theadElement: 'thead',
        tbodyElement: 'tbody',
        rowElement: 'row',
        rowEven: 'row-even',
        rowOdd: 'row-odd',
        hoveredRow: 'hovered-row',
        columnElement: 'column',
        hoveredCell: 'hovered-cell',
        hoveredColumn: 'hovered-column',
        syncedRow: 'synced-row',
        syncedCell: 'synced-cell',
        syncedColumn: 'synced-column',
        editedCell: 'edited-cell',
        mockedRow: 'mocked-row',
        rowsContentNowrap: 'rows-content-nowrap',
        virtualization: 'virtualization',
        scrollableContent: 'scrollable-content',
        headerCell: 'header-cell',
        headerCellContent: 'header-cell-content',
        headerRow: 'head-row-content',
        noData: 'no-data',
        columnFirst: 'column-first',
        columnSortable: 'column-sortable',
        columnSortableIcon: 'column-sortable-icon',
        columnSortedAsc: 'column-sorted-asc',
        columnSortedDesc: 'column-sorted-desc',
        resizerWrapper: 'resizer-content',
        resizerHandles: 'column-resizer',
        resizedColumn: 'column-resized',
        creditsContainer: 'credits-container',
        creditsText: 'credits',
        creditsPro: 'credits-pro',
        visuallyHidden: 'visually-hidden',
        lastHeaderCellInRow: 'last-header-cell-in-row',
        loadingWrapper: 'loading-wrapper',
        loadingSpinner: 'spinner',
        loadingMessage: 'loading-message'
    };
    Globals.win = window;
    Globals.composed = [];
    Globals.userAgent = (Globals.win.navigator && Globals.win.navigator.userAgent) || '';
    Globals.isChrome = Globals.userAgent.indexOf('Chrome') !== -1;
    Globals.isSafari = !Globals.isChrome && Globals.userAgent.indexOf('Safari') !== -1;
    Globals.getClassName = (classNameKey) => Globals.classNamePrefix + Globals.rawClassNames[classNameKey];
})(Globals_Globals || (Globals_Globals = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Grid_Core_Globals = (Globals_Globals);

;// ./code/grid/es-modules/Grid/Core/GridUtils.js
/* *
 *
 *  Grid utilities
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Dawid Dragula
 *
 * */

HTML_AST.allowedAttributes.push('srcset', 'media');
HTML_AST.allowedTags.push('picture', 'source');
/* *
 *
 *  Namespace
 *
 * */
var GridUtils;
(function (GridUtils) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Creates a HTML element with the provided options.
     *
     * @param tagName
     * The tag name of the element.
     *
     * @param params
     * The parameters of the element.
     *
     * @param parent
     * The parent element.
     */
    function makeHTMLElement(tagName, params, parent) {
        const element = document.createElement(tagName);
        if (params) {
            const paramsKeys = Object.keys(params);
            for (let i = 0; i < paramsKeys.length; i++) {
                const key = paramsKeys[i];
                const value = params[key];
                if (value !== void 0) {
                    if (key === 'style') {
                        Object.assign(element.style, value);
                    }
                    else {
                        element[key] = value;
                    }
                }
            }
        }
        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }
    GridUtils.makeHTMLElement = makeHTMLElement;
    /**
     * Creates a div element with the provided class name and id.
     *
     * @param className
     * The class name of the div.
     *
     * @param id
     * The id of the element.
     */
    function makeDiv(className, id) {
        return makeHTMLElement('div', { className, id });
    }
    GridUtils.makeDiv = makeDiv;
    /**
     * Check if there's a possibility that the given string is an HTML
     * (contains '<').
     *
     * @param str
     * Text to verify.
     */
    function isHTML(str) {
        return str.indexOf('<') !== -1;
    }
    GridUtils.isHTML = isHTML;
    /**
     * Returns a string containing plain text format by removing HTML tags
     *
     * @param text
     * String to be sanitized
     *
     * @returns
     * Sanitized plain text string
     */
    function sanitizeText(text) {
        try {
            return new DOMParser().parseFromString(text, 'text/html')
                .body.textContent || '';
        }
        catch (error) {
            return '';
        }
    }
    GridUtils.sanitizeText = sanitizeText;
    /**
     * Sets an element's content, checking whether it is HTML or plain text.
     * Should be used instead of element.innerText when the content can be HTML.
     *
     * @param element
     * Parent element where the content should be.
     *
     * @param content
     * Content to render.
     */
    function setHTMLContent(element, content) {
        if (isHTML(content)) {
            const formattedNodes = new HTML_AST(content);
            formattedNodes.addToDOM(element);
        }
        else {
            element.innerText = content;
        }
    }
    GridUtils.setHTMLContent = setHTMLContent;
})(GridUtils || (GridUtils = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Core_GridUtils = (GridUtils);

;// ./code/grid/es-modules/Grid/Core/Accessibility/Accessibility.js
/* *
 *
 *  Grid Accessibility class
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




const { makeHTMLElement } = Core_GridUtils;
/**
 *  Representing the accessibility functionalities for the Data Grid.
 */
class Accessibility {
    /* *
    *
    *  Constructor
    *
    * */
    /**
     * Construct the accessibility object.
     *
     * @param grid
     * The Grid Table instance which the accessibility controller belong to.
     */
    constructor(grid) {
        this.grid = grid;
        this.element = document.createElement('div');
        this.element.classList.add(Grid_Core_Globals.getClassName('visuallyHidden'));
        this.grid.container?.prepend(this.element);
        this.announcerElement = document.createElement('p');
        this.announcerElement.setAttribute('aria-atomic', 'true');
        this.announcerElement.setAttribute('aria-hidden', 'false');
    }
    /* *
    *
    *  Methods
    *
    * */
    /**
     * Add the 'sortable' hint span element for the sortable column.
     *
     * @param element
     * The element to add the description to.
     */
    addSortableColumnHint(element) {
        const sortableLang = this.grid.options?.lang?.accessibility?.sorting?.sortable;
        if (!sortableLang) {
            return;
        }
        makeHTMLElement('span', {
            className: Grid_Core_Globals.getClassName('visuallyHidden'),
            innerText: ', ' + sortableLang
        }, element);
    }
    /**
     * Add the description to the header cell.
     *
     * @param thElement
     * The header cell element to add the description to.
     *
     * @param description
     * The description to be added.
     */
    addHeaderCellDescription(thElement, description) {
        if (description) {
            thElement.setAttribute('aria-description', description);
        }
    }
    /**
     * Announce the message to the screen reader.
     *
     * @param msg
     * The message to be announced.
     *
     * @param assertive
     * Whether the message should be assertive. Default is false.
     */
    announce(msg, assertive = false) {
        if (this.announcerTimeout) {
            clearTimeout(this.announcerTimeout);
        }
        this.announcerElement.remove();
        this.announcerElement.setAttribute('aria-live', assertive ? 'assertive' : 'polite');
        this.element.appendChild(this.announcerElement);
        this.announcerElement.textContent = msg;
        this.announcerTimeout = setTimeout(() => {
            this.announcerElement.remove();
        }, 3000);
    }
    /**
     * Announce the message to the screen reader that the user sorted the
     * column.
     *
     * @param order
     * The order of the sorting.
     */
    userSortedColumn(order) {
        const { options } = this.grid;
        const announcementsLang = options?.lang
            ?.accessibility?.sorting?.announcements;
        if (!options?.accessibility?.announcements?.sorting) {
            return;
        }
        let msg;
        switch (order) {
            case 'asc':
                msg = announcementsLang?.ascending;
                break;
            case 'desc':
                msg = announcementsLang?.descending;
                break;
            default:
                msg = announcementsLang?.none;
        }
        if (!msg) {
            return;
        }
        this.announce(msg, true);
    }
    /**
     * Set the aria sort state of the column header cell element.
     *
     * @param thElement
     * The header cell element to set the `aria-sort` state to.
     *
     * @param state
     * The sort state to be set for the column header cell.
     */
    setColumnSortState(thElement, state) {
        thElement?.setAttribute('aria-sort', state);
    }
    /**
     * Adds high contrast CSS class, if the browser is in High Contrast mode.
     */
    addHighContrast() {
        const highContrastMode = this.grid.options?.accessibility?.highContrastMode;
        if (highContrastMode !== false && (HighContrastMode.isHighContrastModeActive() ||
            highContrastMode === true)) {
            this.grid.contentWrapper?.classList.add('hcg-theme-highcontrast');
        }
    }
    /**
     * Set the row index attribute for the row element.
     *
     * @param el
     * The row element to set the index to.
     *
     * @param idx
     * The index of the row in the data table.
     */
    setRowIndex(el, idx) {
        el.setAttribute('aria-rowindex', idx);
    }
    /**
     * Set a11y options for the Grid.
     */
    setA11yOptions() {
        const grid = this.grid;
        const tableEl = grid.tableElement;
        if (!tableEl) {
            return;
        }
        tableEl.setAttribute('aria-rowcount', grid.dataTable?.getRowCount() || 0);
        if (grid.captionElement) {
            tableEl.setAttribute('aria-labelledby', grid.captionElement.id);
        }
        if (grid.descriptionElement) {
            tableEl.setAttribute('aria-describedby', grid.descriptionElement.id);
        }
        this.addHighContrast();
    }
    /**
     * Destroy the accessibility controller.
     */
    destroy() {
        this.element.remove();
        this.announcerElement.remove();
        clearTimeout(this.announcerTimeout);
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Accessibility_Accessibility = (Accessibility);

;// ./code/grid/es-modules/Grid/Core/Defaults.js
/* *
 *
 *  Grid default options
 *
 *  (c) 2009-2024 Highsoft AS
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


const { merge: Core_Defaults_merge } = Core_Utilities;
/**
 * Namespace for default options.
 */
var Defaults_Defaults;
(function (Defaults) {
    /**
     * Default options for the Grid.
     * @internal
     */
    Defaults.defaultOptions = {
        accessibility: {
            enabled: true,
            highContrastMode: 'auto',
            announcements: {
                sorting: true
            }
        },
        lang: {
            accessibility: {
                sorting: {
                    sortable: 'Sortable.',
                    announcements: {
                        ascending: 'Sorted ascending.',
                        descending: 'Sorted descending.',
                        none: 'Not sorted.'
                    }
                }
            },
            loading: 'Loading...',
            noData: 'No data to display'
        },
        time: {
            timezone: 'UTC'
        },
        rendering: {
            columns: {
                distribution: 'full'
            },
            rows: {
                bufferSize: 10,
                minVisibleRows: 2,
                strictHeights: false,
                virtualizationThreshold: 50
            },
            header: {
                enabled: true
            },
            theme: 'hcg-theme-default'
        },
        columnDefaults: {
            sorting: {
                sortable: true
            },
            resizing: true
        }
    };
    /**
     * Merge the default options with custom options. Commonly used for defining
     * reusable templates.
     *
     * @param options
     * The new custom chart options.
     */
    function setOptions(options) {
        Core_Defaults_merge(true, Defaults.defaultOptions, options);
    }
    Defaults.setOptions = setOptions;
})(Defaults_Defaults || (Defaults_Defaults = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Core_Defaults = (Defaults_Defaults);

;// ./code/grid/es-modules/Grid/Core/Table/Column.js
/* *
 *
 *  Grid Column class
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





const { merge: Column_merge } = Core_Utilities;
const { makeHTMLElement: Column_makeHTMLElement } = Core_GridUtils;
/* *
 *
 *  Class
 *
 * */
/**
 * Represents a column in the data grid.
 */
class Column {
    /* *
    *
    *  Constructor
    *
    * */
    /**
     * Constructs a column in the data grid.
     *
     * @param viewport
     * The viewport (table) the column belongs to.
     *
     * @param id
     * The id of the column (`name` in the Data Table).
     *
     * @param index
     * The index of the column.
     */
    constructor(viewport, id, index) {
        /**
         * The cells of the column.
         */
        this.cells = [];
        this.options = Column_merge(viewport.grid.options?.columnDefaults ?? {}, viewport.grid.columnOptionsMap?.[id] ?? {});
        this.id = id;
        this.index = index;
        this.viewport = viewport;
        this.width = this.getInitialWidth();
        this.loadData();
    }
    /* *
    *
    *  Methods
    *
    * */
    /**
     * Loads the data of the column from the viewport's data table.
     */
    loadData() {
        this.data = this.viewport.dataTable.getColumn(this.id, true);
    }
    /**
     * Registers a cell in the column.
     *
     * @param cell
     * The cell to register.
     */
    registerCell(cell) {
        cell.htmlElement.setAttribute('data-column-id', this.id);
        if (this.options.className) {
            cell.htmlElement.classList.add(...this.options.className.split(/\s+/g));
        }
        if (this.viewport.grid.hoveredColumnId === this.id) {
            cell.htmlElement.classList.add(Grid_Core_Globals.getClassName('hoveredColumn'));
        }
        this.cells.push(cell);
    }
    /**
     * Unregister a cell from the column.
     *
     * @param cell
     * The cell to unregister.
     */
    unregisterCell(cell) {
        const index = this.cells.indexOf(cell);
        if (index > -1) {
            this.cells.splice(index, 1);
        }
    }
    /**
     * Returns the width of the column in pixels.
     */
    getWidth() {
        const vp = this.viewport;
        return vp.columnDistribution === 'full' ?
            vp.getWidthFromRatio(this.width) :
            this.width;
    }
    /**
     * Adds or removes the hovered CSS class to the column element
     * and its cells.
     *
     * @param hovered
     * Whether the column should be hovered.
     */
    setHoveredState(hovered) {
        this.header?.htmlElement?.classList[hovered ? 'add' : 'remove'](Grid_Core_Globals.getClassName('hoveredColumn'));
        for (let i = 0, iEnd = this.cells.length; i < iEnd; ++i) {
            this.cells[i].htmlElement.classList[hovered ? 'add' : 'remove'](Grid_Core_Globals.getClassName('hoveredColumn'));
        }
    }
    /**
     * Adds or removes the synced CSS class to the column element
     * and its cells.
     *
     * @param synced
     * Whether the column should have synced state.
     */
    setSyncedState(synced) {
        this.header?.htmlElement?.classList[synced ? 'add' : 'remove'](Grid_Core_Globals.getClassName('syncedColumn'));
        for (let i = 0, iEnd = this.cells.length; i < iEnd; ++i) {
            this.cells[i].htmlElement.classList[synced ? 'add' : 'remove'](Grid_Core_Globals.getClassName('syncedColumn'));
        }
    }
    /**
     * Creates a mock element to measure the width of the column from the CSS.
     * The element is appended to the viewport container and then removed.
     * It should be called only once for each column.
     *
     * @returns The initial width of the column.
     */
    getInitialWidth() {
        let result;
        const { viewport } = this;
        // Set the initial width of the column.
        const mock = Column_makeHTMLElement('div', {
            className: Grid_Core_Globals.getClassName('columnElement')
        }, viewport.grid.container);
        mock.setAttribute('data-column-id', this.id);
        if (this.options.className) {
            mock.classList.add(...this.options.className.split(/\s+/g));
        }
        if (viewport.columnDistribution === 'full') {
            result = this.getInitialFullDistWidth(mock);
        }
        else {
            result = mock.offsetWidth || 100;
        }
        mock.remove();
        return result;
    }
    /**
     * The initial width of the column in the full distribution mode. The last
     * column in the viewport will have to fill the remaining space.
     *
     * @param mock
     * The mock element to measure the width.
     */
    getInitialFullDistWidth(mock) {
        const vp = this.viewport;
        const columnsCount = vp.grid.enabledColumns?.length ?? 0;
        if (this.index < columnsCount - 1) {
            return vp.getRatioFromWidth(mock.offsetWidth) || 1 / columnsCount;
        }
        let allPreviousWidths = 0;
        for (let i = 0, iEnd = columnsCount - 1; i < iEnd; i++) {
            allPreviousWidths += vp.columns[i].width;
        }
        const result = 1 - allPreviousWidths;
        if (result < 0) {
            // eslint-disable-next-line no-console
            console.warn('The sum of the columns\' widths exceeds the ' +
                'viewport width. It may cause unexpected behavior in the ' +
                'full distribution mode. Check the CSS styles of the ' +
                'columns. Corrections may be needed.');
        }
        return result;
    }
    /**
     * Returns the formatted string where the templating context is the column.
     *
     * @param template
     * The template string.
     *
     * @return
     * The formatted string.
     */
    format(template) {
        return Core_Templating.format(template, this, this.viewport.grid);
    }
}
/* *
*
*  Static Properties
*
* */
/**
 * The minimum width of a column.
 * @internal
 */
Column.MIN_COLUMN_WIDTH = 20;
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Table_Column = (Column);

;// ./code/grid/es-modules/Grid/Core/Table/Row.js
/* *
 *
 *  Grid Row abstract class
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


const { makeHTMLElement: Row_makeHTMLElement } = Core_GridUtils;
/* *
 *
 *  Abstract Class of Row
 *
 * */
/**
 * Represents a row in the data grid.
 */
class Row {
    /* *
    *
    *  Constructor
    *
    * */
    /**
     * Constructs a row in the data grid.
     *
     * @param viewport
     * The Grid Table instance which the row belongs to.
     */
    constructor(viewport) {
        /* *
        *
        *  Properties
        *
        * */
        /**
         * The cells of the row.
         */
        this.cells = [];
        this.viewport = viewport;
        this.htmlElement = Row_makeHTMLElement('tr', {});
    }
    /**
     * Renders the row's content. It does not attach the row element to the
     * viewport nor pushes the rows to the viewport.rows array.
     */
    render() {
        const columns = this.viewport.columns;
        for (let i = 0, iEnd = columns.length; i < iEnd; i++) {
            const cell = this.createCell(columns[i]);
            cell.render();
        }
        this.rendered = true;
        if (this.viewport.grid.options?.rendering?.rows?.virtualization) {
            this.reflow();
        }
    }
    /**
     * Reflows the row's content dimensions.
     */
    reflow() {
        for (let j = 0, jEnd = this.cells.length; j < jEnd; ++j) {
            this.cells[j].reflow();
        }
        const vp = this.viewport;
        if (vp.rowsWidth) {
            this.htmlElement.style.width = vp.rowsWidth + 'px';
        }
    }
    /**
     * Destroys the row.
     */
    destroy() {
        if (!this.htmlElement) {
            return;
        }
        for (let i = this.cells.length - 1; i >= 0; --i) {
            this.cells[i].destroy();
        }
        this.htmlElement.remove();
    }
    /**
     * Returns the cell with the given column ID.
     *
     * @param columnId
     * The column ID that the cell belongs to.
     *
     * @returns
     * The cell with the given column ID or undefined if not found.
     */
    getCell(columnId) {
        return this.cells.find((cell) => cell.column?.id === columnId);
    }
    /**
     * Registers a cell in the row.
     *
     * @param cell
     * The cell to register.
     */
    registerCell(cell) {
        this.cells.push(cell);
    }
    /**
     * Unregister a cell from the row.
     *
     * @param cell
     * The cell to unregister.
     */
    unregisterCell(cell) {
        const index = this.cells.indexOf(cell);
        if (index > -1) {
            this.cells.splice(index, 1);
        }
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Table_Row = (Row);

;// ./code/grid/es-modules/Grid/Core/Table/Cell.js
/* *
 *
 *  Grid Cell abstract class
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


/* *
 *
 *  Abstract Class of Cell
 *
 * */
class Cell {
    /* *
    *
    *  Constructor
    *
    * */
    /**
     * Constructs a cell in the data grid.
     *
     * @param row
     * The row of the cell.
     *
     * @param column
     * The column of the cell.
     */
    constructor(row, column) {
        /**
         * Array of cell events to be removed when the cell is destroyed.
         */
        this.cellEvents = [];
        this.column = column;
        this.row = row;
        this.row.registerCell(this);
        this.htmlElement = this.init();
        this.htmlElement.setAttribute('tabindex', '-1');
        this.initEvents();
    }
    /* *
    *
    *  Methods
    *
    * */
    /**
     * Init element.
     * @internal
     */
    init() {
        return document.createElement('td', {});
    }
    /**
     * Initialize event listeners. Events added to the `cellEvents` array will
     * be registered now and unregistered when the cell is destroyed.
     */
    initEvents() {
        this.cellEvents.push(['blur', () => this.onBlur()]);
        this.cellEvents.push(['focus', () => this.onFocus()]);
        this.cellEvents.push(['click', (e) => {
                this.onClick(e);
            }]);
        this.cellEvents.push(['keydown', (e) => {
                this.onKeyDown(e);
            }]);
        this.cellEvents.forEach((pair) => {
            this.htmlElement.addEventListener(pair[0], pair[1]);
        });
    }
    /**
     * Handles the focus event on the cell.
     */
    onFocus() {
        const vp = this.row.viewport;
        const focusAnchor = vp.rowsVirtualizer.focusAnchorCell?.htmlElement;
        focusAnchor?.setAttribute('tabindex', '-1');
    }
    /**
     * Handles the blur event on the cell.
     */
    onBlur() {
        const vp = this.row.viewport;
        const focusAnchor = vp.rowsVirtualizer.focusAnchorCell?.htmlElement;
        focusAnchor?.setAttribute('tabindex', '0');
        delete vp.focusCursor;
    }
    /**
     * Handles user keydown on the cell.
     *
     * @param e
     * Keyboard event object.
     */
    onKeyDown(e) {
        const { row, column } = this;
        if (!column) {
            return;
        }
        const vp = row.viewport;
        const changeFocusKeys = {
            ArrowDown: [1, 0],
            ArrowUp: [-1, 0],
            ArrowLeft: [0, -1],
            ArrowRight: [0, 1]
        };
        const dir = changeFocusKeys[e.key];
        if (dir) {
            e.preventDefault();
            e.stopPropagation();
            const localRowIndex = row.index === void 0 ? -1 : (row.index - vp.rows[0].index);
            const nextVerticalDir = localRowIndex + dir[0];
            if (nextVerticalDir < 0 && vp.header) {
                vp.columns[column.index + dir[1]]?.header?.htmlElement.focus();
                return;
            }
            const nextRow = vp.rows[nextVerticalDir];
            if (nextRow) {
                nextRow.cells[column.index + dir[1]]?.htmlElement.focus();
            }
        }
    }
    /**
     * Renders the cell by appending the HTML element to the row.
     */
    render() {
        this.row.htmlElement.appendChild(this.htmlElement);
    }
    /**
     * Reflows the cell dimensions.
     */
    reflow() {
        const column = this.column;
        if (!column) {
            return;
        }
        const elementStyle = this.htmlElement.style;
        elementStyle.width = elementStyle.maxWidth = column.getWidth() + 'px';
    }
    /**
     * Returns the formatted string where the templating context is the cell.
     *
     * @param template
     * The template string.
     *
     * @return
     * The formatted string.
     */
    format(template) {
        return Core_Templating.format(template, this, this.row.viewport.grid);
    }
    /**
     * Sets the custom class name of the cell based on the template.
     *
     * @param template
     * The template string.
     */
    setCustomClassName(template) {
        const element = this.htmlElement;
        if (this.customClassName) {
            element.classList.remove(...this.customClassName.split(/\s+/g));
        }
        if (!template) {
            delete this.customClassName;
            return;
        }
        const newClassName = this.format(template);
        if (!newClassName) {
            delete this.customClassName;
            return;
        }
        element.classList.add(...newClassName.split(/\s+/g));
        this.customClassName = newClassName;
    }
    /**
     * Destroys the cell.
     */
    destroy() {
        this.cellEvents.forEach((pair) => {
            this.htmlElement.removeEventListener(pair[0], pair[1]);
        });
        this.column?.unregisterCell(this);
        this.row.unregisterCell(this);
        this.htmlElement.remove();
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Table_Cell = (Cell);

;// ./code/grid/es-modules/Grid/Core/Table/Actions/ColumnSorting.js
/* *
 *
 *  Grid ColumnSorting class
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




const { makeHTMLElement: ColumnSorting_makeHTMLElement } = Core_GridUtils;
const { fireEvent: ColumnSorting_fireEvent } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Class that manages sorting for a dedicated column.
 */
class ColumnSorting {
    /* *
    *
    *  Constructor
    *
    * */
    /**
     * Constructs sorting for a dedicated column.
     *
     * @param column
     * The column that be sorted.
     *
     * @param headerCellElement
     * The head element of the column.
     */
    constructor(column, headerCellElement) {
        /**
         * Toggle sorting order for the column in the order: asc -> desc -> none
         */
        this.toggle = () => {
            const viewport = this.column.viewport;
            const querying = viewport.grid.querying;
            const sortingController = querying.sorting;
            const currentOrder = (sortingController.currentSorting?.columnId === this.column.id ?
                sortingController.currentSorting.order : null) || 'none';
            const consequents = {
                none: 'asc',
                asc: 'desc',
                desc: null
            };
            void this.setOrder(consequents[currentOrder]);
        };
        this.column = column;
        this.headerCellElement = headerCellElement;
        this.addHeaderElementAttributes();
        if (column.options.sorting?.sortable) {
            ColumnSorting_makeHTMLElement('span', {
                className: Grid_Core_Globals.getClassName('columnSortableIcon'),
                innerText: '▲'
            }, headerCellElement).setAttribute('aria-hidden', true);
            headerCellElement.classList.add(Grid_Core_Globals.getClassName('columnSortable'));
        }
    }
    /* *
    *
    *  Methods
    *
    * */
    /**
     * Adds attributes to the column header.
     */
    addHeaderElementAttributes() {
        const col = this.column;
        const a11y = col.viewport.grid.accessibility;
        const sortingOptions = col.options.sorting;
        const { currentSorting } = col.viewport.grid.querying.sorting;
        const sortedAscClassName = Grid_Core_Globals.getClassName('columnSortedAsc');
        const sortedDescClassName = Grid_Core_Globals.getClassName('columnSortedDesc');
        const el = this.headerCellElement;
        if (currentSorting?.columnId !== col.id || !currentSorting?.order) {
            el.classList.remove(sortedAscClassName);
            el.classList.remove(sortedDescClassName);
            if (sortingOptions?.sortable) {
                a11y?.setColumnSortState(el, 'none');
            }
            return;
        }
        switch (currentSorting?.order) {
            case 'asc':
                el.classList.add(sortedAscClassName);
                el.classList.remove(sortedDescClassName);
                a11y?.setColumnSortState(el, 'ascending');
                break;
            case 'desc':
                el.classList.remove(sortedAscClassName);
                el.classList.add(sortedDescClassName);
                a11y?.setColumnSortState(el, 'descending');
                break;
        }
    }
    /**
     * Set sorting order for the column. It will modify the presentation data
     * and rerender the rows.
     *
     * @param order
     * The order of sorting. It can be `'asc'`, `'desc'` or `null` if the
     * sorting should be disabled.
     */
    async setOrder(order) {
        const viewport = this.column.viewport;
        const querying = viewport.grid.querying;
        const sortingController = querying.sorting;
        const a11y = viewport.grid.accessibility;
        sortingController.setSorting(order, this.column.id);
        await querying.proceed();
        viewport.loadPresentationData();
        for (const col of viewport.columns) {
            col.sorting?.addHeaderElementAttributes();
        }
        a11y?.userSortedColumn(order);
        ColumnSorting_fireEvent(this.column, 'afterSorting', {
            target: this.column
        });
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Actions_ColumnSorting = (ColumnSorting);

;// ./code/grid/es-modules/Grid/Core/Table/Header/HeaderCell.js
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






const { makeHTMLElement: HeaderCell_makeHTMLElement, setHTMLContent } = Core_GridUtils;
const { fireEvent: HeaderCell_fireEvent, merge: HeaderCell_merge, isString: HeaderCell_isString } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Represents a cell in the data grid header.
 */
class HeaderCell extends Table_Cell {
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
        elem.classList.add(Grid_Core_Globals.getClassName('headerCell'));
        return elem;
    }
    /**
     * Render the cell container.
     */
    render() {
        const { column } = this;
        const options = HeaderCell_merge(column?.options || {}, this.options);
        const headerCellOptions = options.header || {};
        const isSortableData = options.sorting?.sortable && column?.data;
        if (headerCellOptions.formatter) {
            this.value = headerCellOptions.formatter.call(this).toString();
        }
        else if (HeaderCell_isString(headerCellOptions.format)) {
            this.value = column ?
                column.format(headerCellOptions.format) :
                headerCellOptions.format;
        }
        else {
            this.value = column?.id || '';
        }
        // Render content of th element
        this.row.htmlElement.appendChild(this.htmlElement);
        this.headerContent = HeaderCell_makeHTMLElement('span', {
            className: Grid_Core_Globals.getClassName('headerCellContent')
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
        HeaderCell_fireEvent(this, 'click', {
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
        column.sorting = new Actions_ColumnSorting(column, this.htmlElement);
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
/* harmony default export */ const Header_HeaderCell = (HeaderCell);

;// ./code/grid/es-modules/Grid/Core/Table/Header/HeaderRow.js
/* *
 *
 *  Grid HeaderRow class
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





const { isString: HeaderRow_isString } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Represents a row in the data grid header.
 */
class HeaderRow extends Table_Row {
    /* *
    *
    *  Constructor
    *
    * */
    /**
     * Constructs a row in the data grid.
     *
     * @param viewport
     * The Grid Table instance which the row belongs to.
     *
     * @param level
     * The current level of header that is rendered.
     */
    constructor(viewport, level) {
        super(viewport);
        this.level = level;
        this.setRowAttributes();
    }
    /* *
    *
    *  Methods
    *
    * */
    createCell(column, columnsTree) {
        return new Header_HeaderCell(this, column, columnsTree);
    }
    /**
     * Renders the row's content in the header.
     *
     * @param level
     * The current level in the header tree
     */
    renderMultipleLevel(level) {
        const header = this.viewport.grid.options?.header;
        const vp = this.viewport;
        const enabledColumns = vp.grid.enabledColumns;
        // Render element
        vp.theadElement?.appendChild(this.htmlElement);
        this.htmlElement.classList.add(Grid_Core_Globals.getClassName('headerRow'));
        if (!header) {
            super.render();
        }
        else {
            const columnsOnLevel = this.getColumnsAtLevel(header, level);
            for (let i = 0, iEnd = columnsOnLevel.length; i < iEnd; i++) {
                const columnOnLevel = columnsOnLevel[i];
                const colIsString = typeof columnOnLevel === 'string';
                const colSpan = (!colIsString && columnOnLevel.columns) ?
                    vp.grid.getColumnIds(columnOnLevel.columns).length : 0;
                const columnId = colIsString ?
                    columnOnLevel : columnOnLevel.columnId;
                const dataColumn = columnId ?
                    vp.getColumn(columnId || '') : void 0;
                const headerFormat = !colIsString ?
                    columnOnLevel.format : void 0;
                const className = !colIsString ?
                    columnOnLevel.className : void 0;
                // Skip hidden column or header when all columns are hidden.
                if ((columnId && enabledColumns &&
                    enabledColumns.indexOf(columnId) < 0) || (!dataColumn && colSpan === 0)) {
                    continue;
                }
                const headerCell = this.createCell(dataColumn, !colIsString ? columnOnLevel.columns : void 0);
                if (!colIsString) {
                    vp.grid.accessibility?.addHeaderCellDescription(headerCell.htmlElement, columnOnLevel.accessibility?.description);
                }
                if (HeaderRow_isString(headerFormat)) {
                    if (!headerCell.options.header) {
                        headerCell.options.header = {};
                    }
                    headerCell.options.header.format = headerFormat;
                }
                if (className) {
                    headerCell.options.className = className;
                }
                // Add class to disable left border on first column
                if (dataColumn?.index === 0 && i === 0) {
                    headerCell.htmlElement.classList.add(Grid_Core_Globals.getClassName('columnFirst'));
                }
                headerCell.render();
                if (columnId) {
                    headerCell.htmlElement.setAttribute('rowSpan', (this.viewport.header?.levels || 1) - level);
                }
                else {
                    if (colSpan > 1) {
                        headerCell.htmlElement.setAttribute('colSpan', colSpan);
                    }
                }
            }
        }
        const lastCell = this.cells[this.cells.length - 1];
        if (lastCell.isLastColumn()) {
            lastCell.htmlElement.classList.add(Grid_Core_Globals.getClassName('lastHeaderCellInRow'));
        }
    }
    reflow() {
        const row = this;
        for (let i = 0, iEnd = row.cells.length; i < iEnd; i++) {
            const cell = row.cells[i];
            cell.reflow();
        }
    }
    /**
     * Get all headers that should be rendered in a level.
     *
     * @param scope
     * Level that we start from
     *
     * @param targetLevel
     * Max level
     *
     * @param currentLevel
     * Current level
     *
     * @return
     * Array of headers that should be rendered in a level
     */
    getColumnsAtLevel(scope, targetLevel, currentLevel = 0) {
        let result = [];
        for (const column of scope) {
            if (currentLevel === targetLevel) {
                result.push(column);
            }
            if (typeof column !== 'string' && column.columns) {
                result = result.concat(this.getColumnsAtLevel(column.columns, targetLevel, currentLevel + 1));
            }
        }
        return result;
    }
    /**
     * Sets the row HTML element attributes and additional classes.
     */
    setRowAttributes() {
        const a11y = this.viewport.grid.accessibility;
        a11y?.setRowIndex(this.htmlElement, this.level);
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Header_HeaderRow = (HeaderRow);

;// ./code/grid/es-modules/Grid/Core/Table/Header/TableHeader.js
/* *
 *
 *  Grid TableHeader class
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


/* *
 *
 *  Class
 *
 * */
/**
 * Represents a table header row containing the cells (headers) with
 * column names.
 */
class TableHeader {
    /* *
    *
    *  Constructor
    *
    * */
    /**
     * Constructs a new table head.
     *
     * @param viewport
     * The viewport (table) the table head belongs to.
     */
    constructor(viewport) {
        /* *
        *
        *  Properties
        *
        * */
        /**
         * The visible columns of the table.
         */
        this.columns = [];
        /**
         * The container of the table head.
         */
        this.rows = [];
        /**
         * Amount of levels in the header, that is used in creating correct rows.
         */
        this.levels = 1;
        this.viewport = viewport;
        this.columns = viewport.columns;
        if (viewport.grid.options?.header) {
            this.levels = this.getRowLevels(viewport.grid.options?.header);
        }
    }
    /* *
    *
    *  Methods
    *
    * */
    /**
     * Renders the table head content.
     */
    render() {
        const vp = this.viewport;
        if (!vp.grid.enabledColumns) {
            return;
        }
        for (let i = 0, iEnd = this.levels; i < iEnd; i++) {
            const row = new Header_HeaderRow(vp, i + 1); // Avoid indexing from 0
            row.renderMultipleLevel(i);
            this.rows.push(row);
        }
    }
    /**
     * Reflows the table head's content dimensions.
     */
    reflow() {
        const vp = this.viewport;
        if (!vp.theadElement) {
            return;
        }
        const { clientWidth, offsetWidth } = vp.tbodyElement;
        const header = vp.header;
        const rows = this.rows;
        const bordersWidth = offsetWidth - clientWidth;
        for (const row of rows) {
            row.reflow();
        }
        if (vp.rowsWidth) {
            vp.theadElement.style.width =
                Math.max(vp.rowsWidth, clientWidth) + bordersWidth + 'px';
        }
        if (header &&
            bordersWidth > 0 &&
            this.viewport.columnDistribution === 'full') {
            const row = this.columns[this.columns.length - 1].header?.row;
            const lastCellEl = row?.cells[row.cells.length - 1]?.htmlElement;
            if (lastCellEl) {
                lastCellEl.style.width = lastCellEl.style.maxWidth =
                    lastCellEl.offsetWidth + bordersWidth + 'px';
            }
        }
    }
    /**
     * Returns amount of rows for the current cell in header tree.
     *
     * @param scope
     * Structure of header
     *
     * @returns
     */
    getRowLevels(scope) {
        let maxDepth = 0;
        for (const item of scope) {
            if (typeof item !== 'string' && item.columns) {
                const depth = this.getRowLevels(item.columns);
                if (depth > maxDepth) {
                    maxDepth = depth;
                }
            }
        }
        return maxDepth + 1;
    }
    /**
     * Scrolls the table head horizontally, only when the virtualization
     * is enabled.
     *
     * @param scrollLeft
     * The left scroll position.
     */
    scrollHorizontally(scrollLeft) {
        const el = this.viewport.theadElement;
        if (!el) {
            return;
        }
        el.style.transform = `translateX(${-scrollLeft}px)`;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Header_TableHeader = (TableHeader);

;// ./code/grid/es-modules/Grid/Core/Table/Content/TableCell.js
/* *
 *
 *  Grid class
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




const { setHTMLContent: TableCell_setHTMLContent } = Core_GridUtils;
const { defined: TableCell_defined, fireEvent: TableCell_fireEvent } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Represents a cell in the data grid.
 */
class TableCell extends Table_Cell {
    /* *
    *
    *  Constructor
    *
    * */
    /**
     * Constructs a cell in the data grid.
     *
     * @param row
     * The row of the cell.
     *
     * @param column
     * The column of the cell.
     */
    constructor(row, column) {
        super(row, column);
        this.column = column;
        this.row = row;
        this.column.registerCell(this);
    }
    /* *
    *
    *  Methods
    *
    * */
    /**
     * Renders the cell by appending it to the row and setting its value.
     */
    render() {
        super.render();
        // It may happen that `await` will be needed here in the future.
        void this.setValue(this.column.data?.[this.row.index], false);
    }
    initEvents() {
        this.cellEvents.push(['dblclick', (e) => (this.onDblClick(e))]);
        this.cellEvents.push(['mouseout', () => this.onMouseOut()]);
        this.cellEvents.push(['mouseover', () => this.onMouseOver()]);
        this.cellEvents.push(['mousedown', (e) => {
                this.onMouseDown(e);
            }]);
        super.initEvents();
    }
    /**
     * Handles the focus event on the cell.
     */
    onFocus() {
        super.onFocus();
        const vp = this.row.viewport;
        vp.focusCursor = [
            this.row.index,
            this.column.index
        ];
    }
    /**
     * Handles the mouse down event on the cell.
     *
     * @param e
     * The mouse event object.
     *
     * @internal
     */
    onMouseDown(e) {
        if (e.target === this.htmlElement) {
            this.htmlElement.focus();
        }
        TableCell_fireEvent(this, 'mouseDown', {
            target: this,
            originalEvent: e
        });
    }
    /**
     * Handles the mouse over event on the cell.
     * @internal
     */
    onMouseOver() {
        const { grid } = this.row.viewport;
        grid.hoverRow(this.row.index);
        grid.hoverColumn(this.column.id);
        TableCell_fireEvent(this, 'mouseOver', {
            target: this
        });
    }
    /**
     * Handles the mouse out event on the cell.
     */
    onMouseOut() {
        const { grid } = this.row.viewport;
        grid.hoverRow();
        grid.hoverColumn();
        TableCell_fireEvent(this, 'mouseOut', {
            target: this
        });
    }
    /**
     * Handles the double click event on the cell.
     *
     * @param e
     * The mouse event object.
     */
    onDblClick(e) {
        TableCell_fireEvent(this, 'dblClick', {
            target: this,
            originalEvent: e
        });
    }
    onClick() {
        TableCell_fireEvent(this, 'click', {
            target: this
        });
    }
    /**
     * Handles the key down event on the cell.
     *
     * @param e
     * Keyboard event object.
     *
     * @internal
     */
    onKeyDown(e) {
        if (e.target !== this.htmlElement) {
            return;
        }
        TableCell_fireEvent(this, 'keyDown', {
            target: this,
            originalEvent: e
        });
        super.onKeyDown(e);
    }
    /**
     * Sets the value & updating content of the cell.
     *
     * @param value
     * The raw value to set.
     *
     * @param updateTable
     * Whether to update the table after setting the content.
     */
    async setValue(value, updateTable) {
        this.value = value;
        const vp = this.column.viewport;
        const element = this.htmlElement;
        const cellContent = this.formatCell();
        // Render the table cell element content.
        TableCell_setHTMLContent(element, cellContent);
        this.htmlElement.setAttribute('data-value', this.value + '');
        this.setCustomClassName(this.column.options.cells?.className);
        TableCell_fireEvent(this, 'afterSetValue', {
            target: this
        });
        if (!updateTable) {
            return;
        }
        const { dataTable: originalDataTable } = vp.grid;
        // Taken the local row index of the original grid data table, but
        // in the future it should affect the globally original data table.
        // (To be done after the DataLayer refinement)
        const rowTableIndex = this.row.id && originalDataTable?.getLocalRowIndex(this.row.id);
        if (!originalDataTable || rowTableIndex === void 0) {
            return;
        }
        this.row.data[this.column.id] = this.value;
        originalDataTable.setCell(this.column.id, rowTableIndex, this.value);
        if (vp.grid.querying.willNotModify()) {
            // If the data table does not need to be modified, skip the
            // data modification and don't update the whole table. It checks
            // if the modifiers are globally set. Can be changed in the future
            // to check if the modifiers are set for the specific columns.
            return;
        }
        let focusedRowId;
        if (vp.focusCursor) {
            focusedRowId = vp.dataTable.getOriginalRowIndex(vp.focusCursor[0]);
        }
        await vp.grid.querying.proceed(true);
        vp.loadPresentationData();
        if (focusedRowId !== void 0 && vp.focusCursor) {
            const newRowIndex = vp.dataTable.getLocalRowIndex(focusedRowId);
            if (newRowIndex !== void 0) {
                vp.rows[newRowIndex - vp.rows[0].index]
                    ?.cells[vp.focusCursor[1]].htmlElement.focus();
            }
        }
    }
    /**
     * Handle the formatting content of the cell.
     *
     * @internal
     */
    formatCell() {
        const cellsDefaults = this.row.viewport.grid.options?.columnDefaults?.cells || {};
        const options = this.column.options.cells || {};
        const { format, formatter } = options;
        const isDefaultFormat = cellsDefaults.format === format;
        const isDefaultFormatter = cellsDefaults.formatter === formatter;
        let value = this.value;
        if (!TableCell_defined(value)) {
            value = '';
        }
        let cellContent = '';
        if (isDefaultFormat && isDefaultFormatter) {
            cellContent = formatter ?
                formatter.call(this).toString() :
                (format ? this.format(format) : value + '');
        }
        else if (isDefaultFormat) {
            cellContent = formatter?.call(this).toString() || value + '';
        }
        else if (isDefaultFormatter) {
            cellContent = format ? this.format(format) : value + '';
        }
        return cellContent;
    }
    /**
     * Destroys the cell.
     */
    destroy() {
        super.destroy();
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Content_TableCell = (TableCell);

;// ./code/grid/es-modules/Grid/Core/Table/Content/TableRow.js
/* *
 *
 *  Grid TableRow class
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




/* *
 *
 *  Class
 *
 * */
/**
 * Represents a row in the data grid.
 */
class TableRow extends Table_Row {
    /* *
    *
    *  Constructor
    *
    * */
    /**
     * Constructs a row in the data grid.
     *
     * @param viewport
     * The Grid Table instance which the row belongs to.
     *
     * @param index
     * The index of the row in the data table.
     */
    constructor(viewport, index) {
        super(viewport);
        /* *
        *
        *  Properties
        *
        * */
        /**
         * The row values from the data table in the original column order.
         */
        this.data = {};
        /**
         * The vertical translation of the row.
         */
        this.translateY = 0;
        this.index = index;
        this.id = viewport.dataTable.getOriginalRowIndex(index);
        this.loadData();
        this.setRowAttributes();
    }
    /* *
    *
    *  Methods
    *
    * */
    createCell(column) {
        return new Content_TableCell(this, column);
    }
    /**
     * Loads the row data from the data table.
     */
    loadData() {
        const data = this.viewport.dataTable.getRowObject(this.index);
        if (!data) {
            return;
        }
        this.data = data;
    }
    /**
     * Adds or removes the hovered CSS class to the row element.
     *
     * @param hovered
     * Whether the row should be hovered.
     */
    setHoveredState(hovered) {
        this.htmlElement.classList[hovered ? 'add' : 'remove'](Grid_Core_Globals.getClassName('hoveredRow'));
        if (hovered) {
            this.viewport.grid.hoveredRowIndex = this.index;
        }
    }
    /**
     * Adds or removes the synced CSS class to the row element.
     *
     * @param synced
     * Whether the row should be synced.
     */
    setSyncedState(synced) {
        this.htmlElement.classList[synced ? 'add' : 'remove'](Grid_Core_Globals.getClassName('syncedRow'));
        if (synced) {
            this.viewport.grid.syncedRowIndex = this.index;
        }
    }
    /**
     * Sets the row HTML element attributes and additional classes.
     */
    setRowAttributes() {
        const idx = this.index;
        const el = this.htmlElement;
        const a11y = this.viewport.grid.accessibility;
        el.classList.add(Grid_Core_Globals.getClassName('rowElement'));
        // Index of the row in the presentation data table
        el.setAttribute('data-row-index', idx);
        // Index of the row in the original data table (ID)
        if (this.id !== void 0) {
            el.setAttribute('data-row-id', this.id);
        }
        // Calculate levels of header, 1 to avoid indexing from 0
        a11y?.setRowIndex(el, idx + (this.viewport.header?.levels ?? 1) + 1);
        // Indexing from 0, so rows with even index are odd.
        el.classList.add(Grid_Core_Globals.getClassName(idx % 2 ? 'rowEven' : 'rowOdd'));
        if (this.viewport.grid.hoveredRowIndex === idx) {
            el.classList.add(Grid_Core_Globals.getClassName('hoveredRow'));
        }
        if (this.viewport.grid.syncedRowIndex === idx) {
            el.classList.add(Grid_Core_Globals.getClassName('syncedRow'));
        }
    }
    /**
     * Sets the vertical translation of the row. Used for virtual scrolling.
     *
     * @param value
     * The vertical translation of the row.
     */
    setTranslateY(value) {
        this.translateY = value;
        this.htmlElement.style.transform = `translateY(${value}px)`;
    }
    /**
     * Returns the default top offset of the row (before adjusting row heights).
     * @internal
     */
    getDefaultTopOffset() {
        return this.index * this.viewport.rowsVirtualizer.defaultRowHeight;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Content_TableRow = (TableRow);

;// ./code/grid/es-modules/Grid/Core/Table/Actions/RowsVirtualizer.js
/* *
 *
 *  Grid Rows Renderer class.
 *
 *  (c) 2020-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Dawid Dragula
 *
 * */



/* *
 *
 *  Class
 *
 * */
/**
 * Represents a virtualized rows renderer for the data grid.
 */
class RowsVirtualizer {
    /* *
    *
    *  Constructor
    *
    * */
    /**
     * Constructs an instance of the rows virtualizer.
     *
     * @param viewport
     * The viewport of the data grid to render rows in.
     */
    constructor(viewport) {
        /**
         * The index of the first visible row.
         */
        this.rowCursor = 0;
        /**
         * Flag indicating if the scrolling handler should be prevented to avoid
         * flickering loops when scrolling to the last row.
         */
        this.preventScroll = false;
        this.rowSettings =
            viewport.grid.options?.rendering?.rows;
        this.viewport = viewport;
        this.strictRowHeights = this.rowSettings.strictHeights;
        this.buffer = Math.max(this.rowSettings.bufferSize, 0);
        this.defaultRowHeight = this.getDefaultRowHeight();
        if (this.strictRowHeights) {
            viewport.tbodyElement.classList.add(Grid_Core_Globals.getClassName('rowsContentNowrap'));
        }
    }
    /* *
    *
    *  Functions
    *
    * */
    /**
     * Renders the rows in the viewport for the first time.
     */
    initialRender() {
        // Initial reflow to set the viewport height
        if (this.rowSettings?.virtualization) {
            this.viewport.reflow();
        }
        // Load & render rows
        this.renderRows(this.rowCursor);
        if (this.rowSettings?.virtualization) {
            this.adjustRowHeights();
        }
    }
    /**
     * Renders the rows in the viewport. It is called when the rows need to be
     * re-rendered, e.g., after a sort or filter operation.
     */
    rerender() {
        const tbody = this.viewport.tbodyElement;
        let rows = this.viewport.rows;
        const oldScrollLeft = tbody.scrollLeft;
        let oldScrollTop;
        if (rows.length) {
            oldScrollTop = tbody.scrollTop;
            for (let i = 0, iEnd = rows.length; i < iEnd; ++i) {
                rows[i].destroy();
            }
            rows.length = 0;
        }
        this.renderRows(this.rowCursor);
        if (this.rowSettings?.virtualization) {
            if (oldScrollTop !== void 0) {
                tbody.scrollTop = oldScrollTop;
            }
            this.scroll();
        }
        rows = this.viewport.rows;
        // Reflow the rendered row cells widths (check redundancy)
        for (let i = 0, iEnd = rows.length; i < iEnd; ++i) {
            rows[i].reflow();
        }
        tbody.scrollLeft = oldScrollLeft;
    }
    /**
     * Method called on the viewport scroll event, only when the virtualization
     * is enabled.
     */
    scroll() {
        const target = this.viewport.tbodyElement;
        const { defaultRowHeight: rowHeight } = this;
        const lastScrollTop = target.scrollTop;
        if (this.preventScroll) {
            if (lastScrollTop <= target.scrollTop) {
                this.preventScroll = false;
            }
            this.adjustBottomRowHeights();
            return;
        }
        // Do vertical virtual scrolling
        const rowCursor = Math.floor(target.scrollTop / rowHeight);
        if (this.rowCursor !== rowCursor) {
            this.renderRows(rowCursor);
        }
        this.rowCursor = rowCursor;
        this.adjustRowHeights();
        if (!this.strictRowHeights &&
            lastScrollTop > target.scrollTop &&
            !this.preventScroll) {
            target.scrollTop = lastScrollTop;
            this.preventScroll = true;
        }
    }
    /**
     * Adjusts the visible row heights from the bottom of the viewport.
     */
    adjustBottomRowHeights() {
        const rows = this.viewport.rows;
        const rowsLn = rows.length;
        const lastRow = rows[rowsLn - 1];
        let rowTop = lastRow.translateY;
        const rowBottom = rowTop + lastRow.htmlElement.offsetHeight;
        let newHeight = lastRow.cells[0].htmlElement.offsetHeight;
        rowTop = rowBottom - newHeight;
        lastRow.htmlElement.style.height = newHeight + 'px';
        lastRow.setTranslateY(rowTop);
        for (let j = 0, jEnd = lastRow.cells.length; j < jEnd; ++j) {
            lastRow.cells[j].htmlElement.style.transform = '';
        }
        for (let i = rowsLn - 2; i >= 0; i--) {
            const row = rows[i];
            newHeight = row.cells[0].htmlElement.offsetHeight;
            rowTop -= newHeight;
            row.htmlElement.style.height = newHeight + 'px';
            row.setTranslateY(rowTop);
            for (let j = 0, jEnd = row.cells.length; j < jEnd; ++j) {
                row.cells[j].htmlElement.style.transform = '';
            }
        }
    }
    /**
     * Renders rows in the specified range. Removes rows that are out of the
     * range except the last row.
     *
     * @param rowCursor
     * The index of the first visible row.
     */
    renderRows(rowCursor) {
        const { viewport: vp, buffer } = this;
        const isVirtualization = this.rowSettings?.virtualization;
        const rowsPerPage = isVirtualization ? Math.ceil((vp.grid.tableElement?.clientHeight || 0) /
            this.defaultRowHeight) : Infinity; // Need to be refactored when add pagination
        let rows = vp.rows;
        if (!isVirtualization && rows.length > 50) {
            // eslint-disable-next-line no-console
            console.warn('Grid: a large dataset can cause performance issues.');
        }
        if (!rows.length) {
            const last = new Content_TableRow(vp, vp.dataTable.getRowCount() - 1);
            last.render();
            rows.push(last);
            vp.tbodyElement.appendChild(last.htmlElement);
            if (isVirtualization) {
                last.setTranslateY(last.getDefaultTopOffset());
            }
        }
        const from = Math.max(0, Math.min(rowCursor - buffer, vp.dataTable.getRowCount() - rowsPerPage));
        const to = Math.min(rowCursor + rowsPerPage + buffer, rows[rows.length - 1].index - 1);
        const alwaysLastRow = rows.pop();
        const tempRows = [];
        // Remove rows that are out of the range except the last row.
        for (let i = 0, iEnd = rows.length; i < iEnd; ++i) {
            const row = rows[i];
            const rowIndex = row.index;
            if (rowIndex < from || rowIndex > to) {
                row.destroy();
            }
            else {
                tempRows.push(row);
            }
        }
        rows = tempRows;
        vp.rows = rows;
        for (let i = from; i <= to; ++i) {
            const row = rows[i - (rows[0]?.index || 0)];
            // Recreate row when it is destroyed and it is in the range.
            if (!row) {
                const newRow = new Content_TableRow(vp, i);
                rows.push(newRow);
                newRow.rendered = false;
                if (isVirtualization) {
                    newRow.setTranslateY(newRow.getDefaultTopOffset());
                }
            }
        }
        rows.sort((a, b) => a.index - b.index);
        for (let i = 0, iEnd = rows.length; i < iEnd; ++i) {
            if (!rows[i].rendered) {
                rows[i].render();
                vp.tbodyElement.insertBefore(rows[i].htmlElement, vp.tbodyElement.lastChild);
            }
        }
        if (alwaysLastRow) {
            rows.push(alwaysLastRow);
        }
        // Focus the cell if the focus cursor is set
        if (vp.focusCursor) {
            const [rowIndex, columnIndex] = vp.focusCursor;
            const row = rows.find((row) => row.index === rowIndex);
            if (row) {
                row.cells[columnIndex]?.htmlElement.focus({
                    preventScroll: true
                });
            }
        }
        // Reset the focus anchor cell
        this.focusAnchorCell?.htmlElement.setAttribute('tabindex', '-1');
        const firstVisibleRow = rows[rowCursor - rows[0].index];
        this.focusAnchorCell = firstVisibleRow?.cells[0];
        this.focusAnchorCell?.htmlElement.setAttribute('tabindex', '0');
    }
    /**
     * Adjusts the heights of the rows based on the current scroll position.
     * It handles the possibility of the rows having different heights than
     * the default height.
     */
    adjustRowHeights() {
        if (this.strictRowHeights) {
            return;
        }
        const { rowCursor: cursor, defaultRowHeight: defaultH } = this;
        const { rows, tbodyElement } = this.viewport;
        const rowsLn = rows.length;
        let translateBuffer = rows[0].getDefaultTopOffset();
        for (let i = 0; i < rowsLn; ++i) {
            const row = rows[i];
            // Reset row height and cell transforms
            row.htmlElement.style.height = '';
            if (row.cells[0].htmlElement.style.transform) {
                for (let j = 0, jEnd = row.cells.length; j < jEnd; ++j) {
                    const cell = row.cells[j];
                    cell.htmlElement.style.transform = '';
                }
            }
            // Rows above the first visible row
            if (row.index < cursor) {
                row.htmlElement.style.height = defaultH + 'px';
                continue;
            }
            const cellHeight = row.cells[0].htmlElement.offsetHeight;
            row.htmlElement.style.height = cellHeight + 'px';
            // Rows below the first visible row
            if (row.index > cursor) {
                continue;
            }
            // First visible row
            if (row.htmlElement.offsetHeight > defaultH) {
                const newHeight = Math.floor(cellHeight - (cellHeight - defaultH) * (tbodyElement.scrollTop / defaultH - cursor));
                row.htmlElement.style.height = newHeight + 'px';
                for (let j = 0, jEnd = row.cells.length; j < jEnd; ++j) {
                    const cell = row.cells[j];
                    cell.htmlElement.style.transform = `translateY(${newHeight - cellHeight}px)`;
                }
            }
        }
        rows[0].setTranslateY(translateBuffer);
        for (let i = 1, iEnd = rowsLn - 1; i < iEnd; ++i) {
            translateBuffer += rows[i - 1].htmlElement.offsetHeight;
            rows[i].setTranslateY(translateBuffer);
        }
        // Set the proper offset for the last row
        const lastRow = rows[rowsLn - 1];
        const preLastRow = rows[rowsLn - 2];
        if (preLastRow && preLastRow.index === lastRow.index - 1) {
            lastRow.setTranslateY(preLastRow.htmlElement.offsetHeight + translateBuffer);
        }
    }
    /**
     * Reflow the rendered rows content dimensions.
     */
    reflowRows() {
        const rows = this.viewport.rows;
        if (rows.length < 1) {
            return;
        }
        for (let i = 0, iEnd = rows.length; i < iEnd; ++i) {
            rows[i].reflow();
        }
        if (this.rowSettings?.virtualization) {
            this.adjustRowHeights();
        }
    }
    /**
     * Returns the default height of a row. This method should be called only
     * once on initialization.
     */
    getDefaultRowHeight() {
        const vp = this.viewport;
        const mockRow = new Content_TableRow(vp, 0);
        mockRow.htmlElement.style.position = 'absolute';
        mockRow.htmlElement.classList.add(Grid_Core_Globals.getClassName('mockedRow'));
        mockRow.render();
        this.viewport.tbodyElement.appendChild(mockRow.htmlElement);
        const defaultRowHeight = mockRow.htmlElement.offsetHeight;
        mockRow.destroy();
        return defaultRowHeight;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Actions_RowsVirtualizer = (RowsVirtualizer);

;// ./code/grid/es-modules/Grid/Core/Table/Actions/ColumnsResizer.js
/* *
 *
 *  Grid Columns Resizer class.
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





const { makeHTMLElement: ColumnsResizer_makeHTMLElement } = Core_GridUtils;
const { fireEvent: ColumnsResizer_fireEvent, getStyle: ColumnsResizer_getStyle } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * The class that handles the resizing of columns in the data grid.
 */
class ColumnsResizer {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(viewport) {
        /**
         * The handles and their mouse down event listeners.
         */
        this.handles = [];
        /**
         * Handles the mouse move event on the document.
         *
         * @param e
         * The mouse event.
         *
         * @internal
         */
        this.onDocumentMouseMove = (e) => {
            if (!this.draggedResizeHandle || !this.draggedColumn) {
                return;
            }
            const diff = e.pageX - (this.dragStartX || 0);
            const vp = this.viewport;
            if (vp.columnDistribution === 'full') {
                this.fullDistributionResize(diff);
            }
            else {
                this.fixedDistributionResize(diff);
            }
            vp.reflow(true);
            if (vp.grid.options?.rendering?.rows?.virtualization) {
                vp.rowsVirtualizer.adjustRowHeights();
            }
            ColumnsResizer_fireEvent(this.draggedColumn, 'afterResize', {
                target: this.draggedColumn,
                originalEvent: e
            });
        };
        /**
         * Handles the mouse up event on the document.
         */
        this.onDocumentMouseUp = () => {
            this.draggedColumn?.header?.htmlElement?.classList.remove(Grid_Core_Globals.getClassName('resizedColumn'));
            this.dragStartX = void 0;
            this.draggedColumn = void 0;
            this.draggedResizeHandle = void 0;
            this.columnStartWidth = void 0;
            this.nextColumnStartWidth = void 0;
        };
        this.viewport = viewport;
        document.addEventListener('mousemove', this.onDocumentMouseMove);
        document.addEventListener('mouseup', this.onDocumentMouseUp);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Render the drag handle for resizing columns.
     *
     * @param column
     * The reference to rendered column
     *
     * @param cell
     * The reference to rendered cell, where hadles should be added
     */
    renderColumnDragHandles(column, cell) {
        const vp = column.viewport;
        if (vp.columnsResizer && (vp.columnDistribution !== 'full' ||
            (vp.grid.enabledColumns &&
                column.index < vp.grid.enabledColumns.length - 1))) {
            const handle = ColumnsResizer_makeHTMLElement('div', {
                className: Grid_Core_Globals.getClassName('resizerHandles')
            }, cell.htmlElement);
            handle.setAttribute('aria-hidden', true);
            vp.columnsResizer?.addHandleListeners(handle, column);
        }
    }
    /**
     * Resizes the columns in the full distribution mode.
     *
     * @param diff
     * The X position difference in pixels.
     */
    fullDistributionResize(diff) {
        const vp = this.viewport;
        const column = this.draggedColumn;
        if (!column) {
            return;
        }
        const nextColumn = vp.columns[column.index + 1];
        if (!nextColumn) {
            return;
        }
        const leftColW = this.columnStartWidth ?? 0;
        const rightColW = this.nextColumnStartWidth ?? 0;
        const minWidth = ColumnsResizer.getMinWidth(column);
        let newLeftW = leftColW + diff;
        let newRightW = rightColW - diff;
        if (newLeftW < minWidth) {
            newLeftW = minWidth;
            newRightW = leftColW + rightColW - minWidth;
        }
        if (newRightW < minWidth) {
            newRightW = minWidth;
            newLeftW = leftColW + rightColW - minWidth;
        }
        column.width = vp.getRatioFromWidth(newLeftW);
        nextColumn.width = vp.getRatioFromWidth(newRightW);
    }
    /**
     * Resizes the columns in the fixed distribution mode.
     *
     * @param diff
     * The X position difference in pixels.
     */
    fixedDistributionResize(diff) {
        const column = this.draggedColumn;
        if (!column) {
            return;
        }
        const colW = this.columnStartWidth ?? 0;
        const minWidth = ColumnsResizer.getMinWidth(column);
        let newW = colW + diff;
        if (newW < minWidth) {
            newW = minWidth;
        }
        column.width = newW;
    }
    /**
     * Adds event listeners to the handle.
     *
     * @param handle
     * The handle element.
     *
     * @param column
     * The column the handle belongs to.
     */
    addHandleListeners(handle, column) {
        const onHandleMouseDown = (e) => {
            const vp = column.viewport;
            const { grid } = vp;
            if (!grid.options?.rendering?.rows?.virtualization) {
                grid.contentWrapper?.classList.add(Grid_Core_Globals.getClassName('resizerWrapper'));
                // Apply widths before resizing
                vp.reflow(true);
            }
            this.dragStartX = e.pageX;
            this.draggedColumn = column;
            this.draggedResizeHandle = handle;
            this.columnStartWidth = column.getWidth();
            this.nextColumnStartWidth =
                vp.columns[column.index + 1]?.getWidth();
            column.header?.htmlElement.classList.add(Grid_Core_Globals.getClassName('resizedColumn'));
        };
        this.handles.push([handle, onHandleMouseDown]);
        handle.addEventListener('mousedown', onHandleMouseDown);
    }
    /**
     * Removes all added event listeners from the document and handles. This
     * should be called on the destroy of the data grid.
     */
    removeEventListeners() {
        document.removeEventListener('mousemove', this.onDocumentMouseMove);
        document.removeEventListener('mouseup', this.onDocumentMouseUp);
        for (let i = 0, iEnd = this.handles.length; i < iEnd; i++) {
            const [handle, listener] = this.handles[i];
            handle.removeEventListener('mousedown', listener);
        }
    }
    /**
     * Returns the minimum width of the column.
     *
     * @param column
     * The column to get the minimum width for.
     *
     * @returns
     * The minimum width in pixels.
     */
    static getMinWidth(column) {
        const tableColumnEl = column.cells[1].htmlElement;
        const headerColumnEl = column.header?.htmlElement;
        const getElPaddings = (el) => ((ColumnsResizer_getStyle(el, 'padding-left', true) || 0) +
            (ColumnsResizer_getStyle(el, 'padding-right', true) || 0) +
            (ColumnsResizer_getStyle(el, 'border-left', true) || 0) +
            (ColumnsResizer_getStyle(el, 'border-right', true) || 0));
        let result = Table_Column.MIN_COLUMN_WIDTH;
        if (tableColumnEl) {
            result = Math.max(result, getElPaddings(tableColumnEl));
        }
        if (headerColumnEl) {
            result = Math.max(result, getElPaddings(headerColumnEl));
        }
        return result;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Actions_ColumnsResizer = (ColumnsResizer);

;// ./code/grid/es-modules/Grid/Core/Table/Table.js
/* *
 *
 *  Grid Table Viewport class
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









const { makeHTMLElement: Table_makeHTMLElement } = Core_GridUtils;
const { fireEvent: Table_fireEvent, getStyle: Table_getStyle, defined: Table_defined } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Represents a table viewport of the data grid.
 */
class Table {
    /* *
    *
    *  Constructor
    *
    * */
    /**
     * Constructs a new data grid table.
     *
     * @param grid
     * The data grid instance which the table (viewport) belongs to.
     *
     * @param tableElement
     * The HTML table element of the data grid.
     */
    constructor(grid, tableElement) {
        /**
         * The visible columns of the table.
         */
        this.columns = [];
        /**
         * The visible rows of the table.
         */
        this.rows = [];
        /**
         * Handles the focus event on the table body.
         *
         * @param e
         * The focus event.
         */
        this.onTBodyFocus = (e) => {
            e.preventDefault();
            this.rows[this.rowsVirtualizer.rowCursor - this.rows[0].index]
                ?.cells[0]?.htmlElement.focus();
        };
        /**
         * Handles the resize event.
         */
        this.onResize = () => {
            this.reflow(this.scrollable);
        };
        /**
         * Handles the scroll event.
         */
        this.onScroll = () => {
            if (this.virtualRows) {
                this.rowsVirtualizer.scroll();
            }
            this.header?.scrollHorizontally(this.tbodyElement.scrollLeft);
        };
        this.grid = grid;
        this.dataTable = this.grid.presentationTable;
        const dgOptions = grid.options;
        const customClassName = dgOptions?.rendering?.table?.className;
        this.columnDistribution =
            dgOptions?.rendering?.columns?.distribution;
        this.virtualRows = !!dgOptions?.rendering?.rows?.virtualization;
        this.scrollable = !!(this.grid.initialContainerHeight || this.virtualRows);
        if (dgOptions?.rendering?.header?.enabled) {
            this.theadElement = Table_makeHTMLElement('thead', {}, tableElement);
        }
        this.tbodyElement = Table_makeHTMLElement('tbody', {}, tableElement);
        if (this.virtualRows) {
            tableElement.classList.add(Grid_Core_Globals.getClassName('virtualization'));
        }
        if (dgOptions?.columnDefaults?.resizing) {
            this.columnsResizer = new Actions_ColumnsResizer(this);
        }
        if (customClassName) {
            tableElement.classList.add(...customClassName.split(/\s+/g));
        }
        // Load columns
        this.loadColumns();
        // Virtualization
        this.rowsVirtualizer = new Actions_RowsVirtualizer(this);
        // Init Table
        this.init();
        // Add event listeners
        this.resizeObserver = new ResizeObserver(this.onResize);
        this.resizeObserver.observe(tableElement);
        this.tbodyElement.addEventListener('scroll', this.onScroll);
        if (this.scrollable) {
            tableElement.classList.add(Grid_Core_Globals.getClassName('scrollableContent'));
        }
        this.tbodyElement.addEventListener('focus', this.onTBodyFocus);
    }
    /* *
    *
    *  Methods
    *
    * */
    /**
     * Initializes the data grid table.
     */
    init() {
        Table_fireEvent(this, 'beforeInit');
        this.setTbodyMinHeight();
        // Load & render head
        if (this.grid.options?.rendering?.header?.enabled) {
            this.header = new Header_TableHeader(this);
            this.header.render();
        }
        // TODO: Load & render footer
        // this.footer = new TableFooter(this);
        // this.footer.render();
        this.rowsVirtualizer.initialRender();
    }
    /**
     * Sets the minimum height of the table body.
     */
    setTbodyMinHeight() {
        const { options } = this.grid;
        const minVisibleRows = options?.rendering?.rows?.minVisibleRows;
        const tbody = this.tbodyElement;
        if (Table_defined(minVisibleRows) &&
            !Table_getStyle(tbody, 'min-height', true)) {
            tbody.style.minHeight = (minVisibleRows * this.rowsVirtualizer.defaultRowHeight) + 'px';
        }
    }
    /**
     * Loads the columns of the table.
     */
    loadColumns() {
        const { enabledColumns } = this.grid;
        if (!enabledColumns) {
            return;
        }
        let columnId;
        for (let i = 0, iEnd = enabledColumns.length; i < iEnd; ++i) {
            columnId = enabledColumns[i];
            this.columns.push(new Table_Column(this, columnId, i));
        }
    }
    /**
     * Fires an empty update to properly load the virtualization, only if
     * there's a row count compared to the threshold change detected (due to
     * performance reasons).
     */
    updateVirtualization() {
        const rows = this.grid.options?.rendering?.rows;
        const threshold = Number(rows?.virtualizationThreshold ||
            Core_Defaults.defaultOptions.rendering?.rows?.virtualizationThreshold);
        const rowCount = Number(this.dataTable?.rowCount);
        if (rows?.virtualization !== (rowCount >= threshold)) {
            this.grid.update();
        }
    }
    /**
     * Loads the modified data from the data table and renders the rows.
     */
    loadPresentationData() {
        this.dataTable = this.grid.presentationTable;
        for (const column of this.columns) {
            column.loadData();
        }
        this.updateVirtualization();
        this.rowsVirtualizer.rerender();
    }
    /**
     * Reflows the table's content dimensions.
     *
     * @param reflowColumns
     * Force reflow columns and recalculate widths.
     *
     */
    reflow(reflowColumns = false) {
        const isVirtualization = this.grid.options?.rendering?.rows?.virtualization;
        // Get the width of the rows.
        if (this.columnDistribution === 'fixed') {
            let rowsWidth = 0;
            for (let i = 0, iEnd = this.columns.length; i < iEnd; ++i) {
                rowsWidth += this.columns[i].width;
            }
            this.rowsWidth = rowsWidth;
        }
        if (isVirtualization || reflowColumns) {
            // Reflow the head
            this.header?.reflow();
            // Reflow rows content dimensions
            this.rowsVirtualizer.reflowRows();
        }
    }
    /**
     * Scrolls the table to the specified row.
     *
     * @param index
     * The index of the row to scroll to.
     *
     * Try it: {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/grid-lite/basic/scroll-to-row | Scroll to row}
     */
    scrollToRow(index) {
        if (this.grid.options?.rendering?.rows?.virtualization) {
            this.tbodyElement.scrollTop =
                index * this.rowsVirtualizer.defaultRowHeight;
            return;
        }
        const rowClass = '.' + Grid_Core_Globals.getClassName('rowElement');
        const firstRowTop = this.tbodyElement
            .querySelectorAll(rowClass)[0]
            .getBoundingClientRect().top;
        this.tbodyElement.scrollTop = (this.tbodyElement
            .querySelectorAll(rowClass)[index]
            .getBoundingClientRect().top) - firstRowTop;
    }
    /**
     * Get the widthRatio value from the width in pixels. The widthRatio is
     * calculated based on the width of the viewport.
     *
     * @param width
     * The width in pixels.
     *
     * @return The width ratio.
     *
     * @internal
     */
    getRatioFromWidth(width) {
        return width / this.tbodyElement.clientWidth;
    }
    /**
     * Get the width in pixels from the widthRatio value. The width is
     * calculated based on the width of the viewport.
     *
     * @param ratio
     * The width ratio.
     *
     * @returns The width in pixels.
     *
     * @internal
     */
    getWidthFromRatio(ratio) {
        return this.tbodyElement.clientWidth * ratio;
    }
    /**
     * Destroys the data grid table.
     */
    destroy() {
        this.tbodyElement.removeEventListener('focus', this.onTBodyFocus);
        this.tbodyElement.removeEventListener('scroll', this.onScroll);
        this.resizeObserver.disconnect();
        this.columnsResizer?.removeEventListeners();
        for (let i = 0, iEnd = this.rows.length; i < iEnd; ++i) {
            this.rows[i].destroy();
        }
        Table_fireEvent(this, 'afterDestroy');
    }
    /**
     * Get the viewport state metadata. It is used to save the state of the
     * viewport and restore it when the data grid is re-rendered.
     *
     * @returns
     * The viewport state metadata.
     */
    getStateMeta() {
        return {
            scrollTop: this.tbodyElement.scrollTop,
            scrollLeft: this.tbodyElement.scrollLeft,
            columnDistribution: this.columnDistribution,
            columnWidths: this.columns.map((column) => column.width),
            focusCursor: this.focusCursor
        };
    }
    /**
     * Apply the metadata to the viewport state. It is used to restore the state
     * of the viewport when the data grid is re-rendered.
     *
     * @param meta
     * The viewport state metadata.
     */
    applyStateMeta(meta) {
        this.tbodyElement.scrollTop = meta.scrollTop;
        this.tbodyElement.scrollLeft = meta.scrollLeft;
        if (this.columnDistribution === meta.columnDistribution &&
            this.columns.length === meta.columnWidths.length) {
            const widths = meta.columnWidths;
            for (let i = 0, iEnd = widths.length; i < iEnd; ++i) {
                this.columns[i].width = widths[i];
            }
            this.reflow();
            if (meta.focusCursor) {
                const [rowIndex, columnIndex] = meta.focusCursor;
                const row = this.rows[rowIndex - this.rows[0].index];
                row?.cells[columnIndex]?.htmlElement.focus();
            }
        }
    }
    /**
     * Returns the column with the provided ID.
     *
     * @param id
     * The ID of the column.
     */
    getColumn(id) {
        const columns = this.grid.enabledColumns;
        if (!columns) {
            return;
        }
        const columnIndex = columns.indexOf(id);
        if (columnIndex < 0) {
            return;
        }
        return this.columns[columnIndex];
    }
    /**
     * Returns the row with the provided ID.
     *
     * @param id
     * The ID of the row.
     */
    getRow(id) {
        return this.rows.find((row) => row.id === id);
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Table_Table = (Table);

;// ./code/grid/es-modules/Data/Modifiers/ChainModifier.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Dawid Dragula
 *
 * */



const { merge: ChainModifier_merge } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Modifies a table with the help of modifiers in an ordered chain.
 *
 */
class ChainModifier extends Modifiers_DataModifier {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the modifier chain.
     *
     * @param {Partial<ChainModifier.Options>} [options]
     * Options to configure the modifier chain.
     *
     * @param {...DataModifier} [chain]
     * Ordered chain of modifiers.
     */
    constructor(options, ...chain) {
        super();
        this.chain = chain;
        this.options = ChainModifier_merge(ChainModifier.defaultOptions, options);
        const optionsChain = this.options.chain || [];
        for (let i = 0, iEnd = optionsChain.length, modifierOptions, ModifierClass; i < iEnd; ++i) {
            modifierOptions = optionsChain[i];
            if (!modifierOptions.type) {
                continue;
            }
            ModifierClass = Modifiers_DataModifier.types[modifierOptions.type];
            if (ModifierClass) {
                chain.push(new ModifierClass(modifierOptions));
            }
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Adds a configured modifier to the end of the modifier chain. Please note,
     * that the modifier can be added multiple times.
     *
     * @param {DataModifier} modifier
     * Configured modifier to add.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     */
    add(modifier, eventDetail) {
        this.emit({
            type: 'addModifier',
            detail: eventDetail,
            modifier
        });
        this.chain.push(modifier);
        this.emit({
            type: 'addModifier',
            detail: eventDetail,
            modifier
        });
    }
    /**
     * Clears all modifiers from the chain.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     */
    clear(eventDetail) {
        this.emit({
            type: 'clearChain',
            detail: eventDetail
        });
        this.chain.length = 0;
        this.emit({
            type: 'afterClearChain',
            detail: eventDetail
        });
    }
    /**
     * Applies several modifications to the table and returns a modified copy of
     * the given table.
     *
     * @param {Highcharts.DataTable} table
     * Table to modify.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Promise<Highcharts.DataTable>}
     * Table with `modified` property as a reference.
     */
    async modify(table, eventDetail) {
        const modifiers = (this.options.reverse ?
            this.chain.slice().reverse() :
            this.chain.slice());
        if (table.modified === table) {
            table.modified = table.clone(false, eventDetail);
        }
        let modified = table;
        for (let i = 0, iEnd = modifiers.length; i < iEnd; ++i) {
            try {
                await modifiers[i].modify(modified, eventDetail);
            }
            catch (error) {
                this.emit({
                    type: 'error',
                    detail: eventDetail,
                    table
                });
                throw error;
            }
            modified = modified.modified;
        }
        table.modified = modified;
        return table;
    }
    /**
     * Applies partial modifications of a cell change to the property `modified`
     * of the given modified table.
     *
     * *Note:* The `modified` property of the table gets replaced.
     *
     * @param {Highcharts.DataTable} table
     * Modified table.
     *
     * @param {string} columnName
     * Column name of changed cell.
     *
     * @param {number|undefined} rowIndex
     * Row index of changed cell.
     *
     * @param {Highcharts.DataTableCellType} cellValue
     * Changed cell value.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Table with `modified` property as a reference.
     */
    modifyCell(table, columnName, rowIndex, cellValue, eventDetail) {
        const modifiers = (this.options.reverse ?
            this.chain.reverse() :
            this.chain);
        if (modifiers.length) {
            let clone = table.clone();
            for (let i = 0, iEnd = modifiers.length; i < iEnd; ++i) {
                modifiers[i].modifyCell(clone, columnName, rowIndex, cellValue, eventDetail);
                clone = clone.modified;
            }
            table.modified = clone;
        }
        return table;
    }
    /**
     * Applies partial modifications of column changes to the property
     * `modified` of the given table.
     *
     * *Note:* The `modified` property of the table gets replaced.
     *
     * @param {Highcharts.DataTable} table
     * Modified table.
     *
     * @param {Highcharts.DataTableColumnCollection} columns
     * Changed columns as a collection, where the keys are the column names.
     *
     * @param {number} [rowIndex=0]
     * Index of the first changed row.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Table with `modified` property as a reference.
     */
    modifyColumns(table, columns, rowIndex, eventDetail) {
        const modifiers = (this.options.reverse ?
            this.chain.reverse() :
            this.chain.slice());
        if (modifiers.length) {
            let clone = table.clone();
            for (let i = 0, iEnd = modifiers.length; i < iEnd; ++i) {
                modifiers[i].modifyColumns(clone, columns, rowIndex, eventDetail);
                clone = clone.modified;
            }
            table.modified = clone;
        }
        return table;
    }
    /**
     * Applies partial modifications of row changes to the property `modified`
     * of the given table.
     *
     * *Note:* The `modified` property of the table gets replaced.
     *
     * @param {Highcharts.DataTable} table
     * Modified table.
     *
     * @param {Array<(Highcharts.DataTableRow|Highcharts.DataTableRowObject)>} rows
     * Changed rows.
     *
     * @param {number} [rowIndex]
     * Index of the first changed row.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Table with `modified` property as a reference.
     */
    modifyRows(table, rows, rowIndex, eventDetail) {
        const modifiers = (this.options.reverse ?
            this.chain.reverse() :
            this.chain.slice());
        if (modifiers.length) {
            let clone = table.clone();
            for (let i = 0, iEnd = modifiers.length; i < iEnd; ++i) {
                modifiers[i].modifyRows(clone, rows, rowIndex, eventDetail);
                clone = clone.modified;
            }
            table.modified = clone;
        }
        return table;
    }
    /**
     * Applies several modifications to the table.
     *
     * *Note:* The `modified` property of the table gets replaced.
     *
     * @param {DataTable} table
     * Table to modify.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table as a reference.
     *
     * @emits ChainDataModifier#execute
     * @emits ChainDataModifier#afterExecute
     */
    modifyTable(table, eventDetail) {
        const chain = this;
        chain.emit({
            type: 'modify',
            detail: eventDetail,
            table
        });
        const modifiers = (chain.options.reverse ?
            chain.chain.reverse() :
            chain.chain.slice());
        let modified = table.modified;
        for (let i = 0, iEnd = modifiers.length, modifier; i < iEnd; ++i) {
            modifier = modifiers[i];
            modified = modifier.modifyTable(modified, eventDetail).modified;
        }
        table.modified = modified;
        chain.emit({
            type: 'afterModify',
            detail: eventDetail,
            table
        });
        return table;
    }
    /**
     * Removes a configured modifier from all positions in the modifier chain.
     *
     * @param {DataModifier} modifier
     * Configured modifier to remove.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     */
    remove(modifier, eventDetail) {
        const modifiers = this.chain;
        this.emit({
            type: 'removeModifier',
            detail: eventDetail,
            modifier
        });
        modifiers.splice(modifiers.indexOf(modifier), 1);
        this.emit({
            type: 'afterRemoveModifier',
            detail: eventDetail,
            modifier
        });
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default option for the ordered modifier chain.
 */
ChainModifier.defaultOptions = {
    type: 'Chain'
};
Modifiers_DataModifier.registerType('Chain', ChainModifier);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Modifiers_ChainModifier = (ChainModifier);

;// ./code/grid/es-modules/Data/Modifiers/SortModifier.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Dawid Dragula
 *
 * */




const { merge: SortModifier_merge } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Sort table rows according to values of a column.
 *
 */
class SortModifier extends Modifiers_DataModifier {
    /* *
     *
     *  Static Functions
     *
     * */
    static ascending(a, b) {
        return ((a || 0) < (b || 0) ? -1 :
            (a || 0) > (b || 0) ? 1 :
                0);
    }
    static descending(a, b) {
        return ((b || 0) < (a || 0) ? -1 :
            (b || 0) > (a || 0) ? 1 :
                0);
    }
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the range modifier.
     *
     * @param {Partial<RangeDataModifier.Options>} [options]
     * Options to configure the range modifier.
     */
    constructor(options) {
        super();
        this.options = SortModifier_merge(SortModifier.defaultOptions, options);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Returns index and row for sort reference.
     *
     * @private
     *
     * @param {Highcharts.DataTable} table
     * Table with rows to reference.
     *
     * @return {Array<SortModifier.RowReference>}
     * Array of row references.
     */
    getRowReferences(table) {
        const rows = table.getRows(), rowReferences = [];
        for (let i = 0, iEnd = rows.length; i < iEnd; ++i) {
            rowReferences.push({
                index: i,
                row: rows[i]
            });
        }
        return rowReferences;
    }
    /**
     * Applies partial modifications of a cell change to the property `modified`
     * of the given modified table.
     *
     * @param {Highcharts.DataTable} table
     * Modified table.
     *
     * @param {string} columnName
     * Column name of changed cell.
     *
     * @param {number|undefined} rowIndex
     * Row index of changed cell.
     *
     * @param {Highcharts.DataTableCellType} cellValue
     * Changed cell value.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Table with `modified` property as a reference.
     */
    modifyCell(table, columnName, rowIndex, cellValue, eventDetail) {
        const modifier = this, { orderByColumn, orderInColumn } = modifier.options;
        if (columnName === orderByColumn) {
            if (orderInColumn) {
                table.modified.setCell(columnName, rowIndex, cellValue);
                table.modified.setColumn(orderInColumn, modifier
                    .modifyTable(new Data_DataTable({
                    columns: table
                        .getColumns([orderByColumn, orderInColumn])
                }))
                    .modified
                    .getColumn(orderInColumn));
            }
            else {
                modifier.modifyTable(table, eventDetail);
            }
        }
        return table;
    }
    /**
     * Applies partial modifications of column changes to the property
     * `modified` of the given table.
     *
     * @param {Highcharts.DataTable} table
     * Modified table.
     *
     * @param {Highcharts.DataTableColumnCollection} columns
     * Changed columns as a collection, where the keys are the column names.
     *
     * @param {number} [rowIndex=0]
     * Index of the first changed row.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Table with `modified` property as a reference.
     */
    modifyColumns(table, columns, rowIndex, eventDetail) {
        const modifier = this, { orderByColumn, orderInColumn } = modifier.options, columnNames = Object.keys(columns);
        if (columnNames.indexOf(orderByColumn) > -1) {
            if (orderInColumn &&
                columns[columnNames[0]].length) {
                table.modified.setColumns(columns, rowIndex);
                table.modified.setColumn(orderInColumn, modifier
                    .modifyTable(new Data_DataTable({
                    columns: table
                        .getColumns([orderByColumn, orderInColumn])
                }))
                    .modified
                    .getColumn(orderInColumn));
            }
            else {
                modifier.modifyTable(table, eventDetail);
            }
        }
        return table;
    }
    /**
     * Applies partial modifications of row changes to the property `modified`
     * of the given table.
     *
     * @param {Highcharts.DataTable} table
     * Modified table.
     *
     * @param {Array<(Highcharts.DataTableRow|Highcharts.DataTableRowObject)>} rows
     * Changed rows.
     *
     * @param {number} [rowIndex]
     * Index of the first changed row.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Table with `modified` property as a reference.
     */
    modifyRows(table, rows, rowIndex, eventDetail) {
        const modifier = this, { orderByColumn, orderInColumn } = modifier.options;
        if (orderInColumn &&
            rows.length) {
            table.modified.setRows(rows, rowIndex);
            table.modified.setColumn(orderInColumn, modifier
                .modifyTable(new Data_DataTable({
                columns: table
                    .getColumns([orderByColumn, orderInColumn])
            }))
                .modified
                .getColumn(orderInColumn));
        }
        else {
            modifier.modifyTable(table, eventDetail);
        }
        return table;
    }
    /**
     * Sorts rows in the table.
     *
     * @param {DataTable} table
     * Table to sort in.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table with `modified` property as a reference.
     */
    modifyTable(table, eventDetail) {
        const modifier = this;
        modifier.emit({ type: 'modify', detail: eventDetail, table });
        const columnNames = table.getColumnNames(), rowCount = table.getRowCount(), rowReferences = this.getRowReferences(table), { direction, orderByColumn, orderInColumn } = modifier.options, compare = (direction === 'asc' ?
            SortModifier.ascending :
            SortModifier.descending), orderByColumnIndex = columnNames.indexOf(orderByColumn), modified = table.modified;
        if (orderByColumnIndex !== -1) {
            rowReferences.sort((a, b) => compare(a.row[orderByColumnIndex], b.row[orderByColumnIndex]));
        }
        if (orderInColumn) {
            const column = [];
            for (let i = 0; i < rowCount; ++i) {
                column[rowReferences[i].index] = i;
            }
            modified.setColumns({ [orderInColumn]: column });
        }
        else {
            const originalIndexes = [];
            const rows = [];
            let rowReference;
            for (let i = 0; i < rowCount; ++i) {
                rowReference = rowReferences[i];
                originalIndexes.push(modified.getOriginalRowIndex(rowReference.index));
                rows.push(rowReference.row);
            }
            modified.setRows(rows, 0);
            modified.setOriginalRowIndexes(originalIndexes);
        }
        modifier.emit({ type: 'afterModify', detail: eventDetail, table });
        return table;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options to group table rows.
 */
SortModifier.defaultOptions = {
    type: 'Sort',
    direction: 'desc',
    orderByColumn: 'y'
};
Modifiers_DataModifier.registerType('Sort', SortModifier);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Modifiers_SortModifier = (SortModifier);

;// ./code/grid/es-modules/Grid/Core/Querying/SortingController.js
/* *
 *
 *  Grid Sorting Controller class
 *
 *  (c) 2020-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Dawid Dragula
 *
 * */


/* *
 *
 *  Class
 *
 * */
/**
 * Class that manages one of the data grid querying types - sorting.
 */
class SortingController {
    /* *
    *
    *  Constructor
    *
    * */
    /**
     * Constructs the SortingController instance.
     *
     * @param grid
     * The data grid instance.
     */
    constructor(grid) {
        /**
         * The flag that indicates if the data should be updated because of the
         * change in the sorting options.
         */
        this.shouldBeUpdated = false;
        this.grid = grid;
    }
    /* *
    *
    *  Functions
    *
    * */
    /**
     * Sets the sorting state. If the new sorting state is different than the
     * current one, the `shouldBeUpdated` flag is set to `true`. If the
     * same, the flag is set to `false`.
     *
     * @param order
     * The sorting order.
     *
     * @param columnId
     * The column ID to sort by.
     */
    setSorting(order, columnId) {
        if (this.currentSorting?.columnId !== columnId ||
            this.currentSorting?.order !== order) {
            this.shouldBeUpdated = true;
            this.currentSorting = {
                columnId,
                order
            };
        }
        this.modifier = this.createModifier();
    }
    /**
     * Returns the sorting options from the data grid options.
     */
    getSortingOptions() {
        const grid = this.grid, { columnOptionsMap } = grid;
        if (!columnOptionsMap) {
            return { order: null };
        }
        const columnIDs = Object.keys(columnOptionsMap);
        let foundOrder = null;
        let foundColumnId;
        for (let i = columnIDs.length - 1; i > -1; --i) {
            const columnId = columnIDs[i];
            const columnOptions = columnOptionsMap[columnId];
            const order = columnOptions.sorting?.order;
            if (order) {
                if (foundColumnId) {
                    // eslint-disable-next-line no-console
                    console.warn('Grid: Only one column can be sorted at a time. ' +
                        'Data will be sorted only by the last found column ' +
                        `with the sorting order defined in the options: "${foundColumnId}".`);
                    break;
                }
                foundOrder = order;
                foundColumnId = columnId;
            }
        }
        return {
            columnId: foundColumnId,
            order: foundOrder
        };
    }
    /**
     * Loads sorting options from the data grid options.
     */
    loadOptions() {
        const stateFromOptions = this.getSortingOptions();
        if (stateFromOptions.columnId !== this.initialSorting?.columnId ||
            stateFromOptions.order !== this.initialSorting?.order) {
            this.initialSorting = stateFromOptions;
            this.setSorting(stateFromOptions.order, stateFromOptions.columnId);
        }
    }
    /**
     * Returns the sorting modifier based on the loaded sorting options.
     */
    createModifier() {
        if (!this.currentSorting) {
            return;
        }
        const { columnId, order } = this.currentSorting;
        if (!order) {
            return;
        }
        return new Modifiers_SortModifier({
            orderByColumn: columnId,
            direction: order
        });
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Querying_SortingController = (SortingController);

;// ./code/grid/es-modules/Grid/Core/Querying/QueryingController.js
/* *
 *
 *  Grid Querying Controller class
 *
 *  (c) 2020-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Dawid Dragula
 *
 * */

/* *
 *
 *  Imports
 *
 * */


/* *
 *
 *  Class
 *
 * */
/**
 * Class that manage data modification of the visible data in the data grid.
 * It manages the modifiers that are applied to the data table.
 */
class QueryingController {
    /* *
    *
    *  Constructor
    *
    * */
    constructor(grid) {
        this.grid = grid;
        this.sorting = new Querying_SortingController(grid);
        /// this.filtering = new FilteringController(grid);
    }
    /* *
    *
    *  Functions
    *
    * */
    /**
     * Proceeds with the data modification if needed.
     *
     * @param force
     * If the data should be modified even if the significant options are not
     * changed.
     */
    async proceed(force = false) {
        if (force ||
            this.sorting.shouldBeUpdated // ||
        // this.filtering.shouldBeUpdated
        ) {
            await this.modifyData();
        }
    }
    /**
     * Load all options needed to generate the modifiers.
     */
    loadOptions() {
        this.sorting.loadOptions();
    }
    /**
     * Check if the data table does not need to be modified.
     */
    willNotModify() {
        return (!this.sorting.modifier
        // && !this.filtering.modifier
        );
    }
    /**
     * Apply all modifiers to the data table.
     */
    async modifyData() {
        const originalDataTable = this.grid.dataTable;
        if (!originalDataTable) {
            return;
        }
        const modifiers = [];
        // TODO: Implement filtering
        // if (this.filtering.modifier) {
        //     modifiers.push(this.filtering.modifier);
        // }
        if (this.sorting.modifier) {
            modifiers.push(this.sorting.modifier);
        }
        if (modifiers.length > 0) {
            const chainModifier = new Modifiers_ChainModifier({}, ...modifiers);
            const dataTableCopy = originalDataTable.clone();
            await chainModifier.modify(dataTableCopy.modified);
            this.grid.presentationTable = dataTableCopy.modified;
        }
        else {
            this.grid.presentationTable = originalDataTable.modified;
        }
        this.sorting.shouldBeUpdated = false;
        /// this.filtering.shouldBeUpdated = false;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Querying_QueryingController = (QueryingController);

;// ./code/grid/es-modules/Grid/Core/Grid.js
/* *
 *
 *  Highcharts Grid class
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











const { makeHTMLElement: Grid_makeHTMLElement, setHTMLContent: Grid_setHTMLContent } = Core_GridUtils;
const { fireEvent: Grid_fireEvent, extend: Grid_extend, getStyle: Grid_getStyle, merge: Grid_merge, pick: Grid_pick, defined: Grid_defined } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * A base class for the Grid.
 */
class Grid {
    // Implementation
    static grid(renderTo, options, async) {
        if (async) {
            return new Promise((resolve) => {
                void new Grid(renderTo, options, (grid) => {
                    resolve(grid);
                });
            });
        }
        return new Grid(renderTo, options);
    }
    /* *
    *
    *  Constructor
    *
    * */
    /**
     * Constructs a new Grid.
     *
     * @param renderTo
     * The render target (container) of the Grid.
     *
     * @param options
     * The options of the Grid.
     *
     * @param afterLoadCallback
     * The callback that is called after the Grid is loaded.
     */
    constructor(renderTo, options, afterLoadCallback) {
        /**
         * The user options declared for the columns as an object of column ID to
         * column options.
         * @internal
         */
        this.columnOptionsMap = {};
        /**
         * The options that were declared by the user when creating the Grid
         * or when updating it.
         */
        this.userOptions = {};
        /**
         * The initial height of the container. Can be 0 also if not set.
         * @internal
         */
        this.initialContainerHeight = 0;
        this.loadUserOptions(options);
        this.querying = new Querying_QueryingController(this);
        this.id = this.options?.id || Core_Utilities.uniqueKey();
        this.initContainers(renderTo);
        this.initAccessibility();
        this.loadDataTable(this.options?.dataTable);
        this.initVirtualization();
        this.locale = this.options?.lang?.locale || (this.container?.closest('[lang]')?.lang);
        this.time = new Shared_TimeBase(Grid_extend(this.options?.time, { locale: this.locale }), this.options?.lang);
        this.querying.loadOptions();
        void this.querying.proceed().then(() => {
            this.renderViewport();
            afterLoadCallback?.(this);
        });
        Grid.grids.push(this);
    }
    /* *
     *
     *  Methods
     *
     * */
    /*
     * Initializes the accessibility controller.
     */
    initAccessibility() {
        this.accessibility?.destroy();
        delete this.accessibility;
        if (this.options?.accessibility?.enabled) {
            this.accessibility = new Accessibility_Accessibility(this);
        }
    }
    /**
     * Initializes the container of the Grid.
     *
     * @param renderTo
     * The render target (html element or id) of the Grid.
     *
     */
    initContainers(renderTo) {
        const container = (typeof renderTo === 'string') ?
            Grid_Core_Globals.win.document.getElementById(renderTo) : renderTo;
        // Display an error if the renderTo is wrong
        if (!container) {
            // eslint-disable-next-line no-console
            console.error(`
                Rendering div not found. It is unable to find the HTML element
                to render the Grid in.
            `);
            return;
        }
        this.initialContainerHeight = Grid_getStyle(container, 'height', true) || 0;
        this.container = container;
        this.container.innerHTML = HTML_AST.emptyHTML;
        this.contentWrapper = Grid_makeHTMLElement('div', {
            className: Grid_Core_Globals.getClassName('container')
        }, this.container);
    }
    /**
     * Loads the new user options to all the important fields (`userOptions`,
     * `options` and `columnOptionsMap`).
     *
     * @param newOptions
     * The options that were declared by the user.
     *
     * @param oneToOne
     * When `false` (default), the existing column options will be merged with
     * the ones that are currently defined in the user options. When `true`,
     * the columns not defined in the new options will be removed.
     */
    loadUserOptions(newOptions, oneToOne = false) {
        // Operate on a copy of the options argument
        newOptions = Grid_merge(newOptions);
        if (newOptions.columns) {
            if (oneToOne) {
                this.loadColumnOptionsOneToOne(newOptions.columns);
            }
            else {
                this.loadColumnOptions(newOptions.columns);
            }
            delete newOptions.columns;
        }
        this.userOptions = Grid_merge(this.userOptions, newOptions);
        this.options = Grid_merge(this.options ?? Core_Defaults.defaultOptions, this.userOptions);
        // Generate column options map
        const columnOptionsArray = this.options?.columns;
        if (!columnOptionsArray) {
            return;
        }
        const columnOptionsObj = {};
        for (let i = 0, iEnd = columnOptionsArray?.length ?? 0; i < iEnd; ++i) {
            columnOptionsObj[columnOptionsArray[i].id] = columnOptionsArray[i];
        }
        this.columnOptionsMap = columnOptionsObj;
    }
    /**
     * Loads the new column options to the userOptions field.
     *
     * @param newColumnOptions
     * The new column options that should be loaded.
     *
     * @param overwrite
     * Whether to overwrite the existing column options with the new ones.
     * Default is `false`.
     */
    loadColumnOptions(newColumnOptions, overwrite = false) {
        if (!this.userOptions.columns) {
            this.userOptions.columns = [];
        }
        const columnOptions = this.userOptions.columns;
        for (let i = 0, iEnd = newColumnOptions.length; i < iEnd; ++i) {
            const newOptions = newColumnOptions[i];
            const indexInPrevOptions = columnOptions.findIndex((prev) => prev.id === newOptions.id);
            // If the new column options contain only the id.
            if (Object.keys(newOptions).length < 2) {
                if (overwrite && indexInPrevOptions !== -1) {
                    columnOptions.splice(indexInPrevOptions, 1);
                }
                continue;
            }
            if (indexInPrevOptions === -1) {
                columnOptions.push(newOptions);
            }
            else if (overwrite) {
                columnOptions[indexInPrevOptions] = newOptions;
            }
            else {
                columnOptions[indexInPrevOptions] = Grid_merge(columnOptions[indexInPrevOptions], newOptions);
            }
        }
        if (columnOptions.length < 1) {
            delete this.userOptions.columns;
        }
    }
    /**
     * Loads the new column options to the userOptions field in a one-to-one
     * manner. It means that all the columns that are not defined in the new
     * options will be removed.
     *
     * @param newColumnOptions
     * The new column options that should be loaded.
     */
    loadColumnOptionsOneToOne(newColumnOptions) {
        const prevColumnOptions = this.userOptions.columns;
        const columnOptions = [];
        let prevOptions;
        for (let i = 0, iEnd = newColumnOptions.length; i < iEnd; ++i) {
            const newOptions = newColumnOptions[i];
            const indexInPrevOptions = prevColumnOptions?.findIndex((prev) => prev.id === newOptions.id);
            if (indexInPrevOptions !== void 0 && indexInPrevOptions !== -1) {
                prevOptions = prevColumnOptions?.[indexInPrevOptions];
            }
            const resultOptions = Grid_merge(prevOptions ?? {}, newOptions);
            if (Object.keys(resultOptions).length > 1) {
                columnOptions.push(resultOptions);
            }
        }
        this.userOptions.columns = columnOptions;
    }
    /**
     * Updates the Grid with new options.
     *
     * @param options
     * The options of the Grid that should be updated. If not provided,
     * the update will be proceeded based on the `this.userOptions` property.
     * The `column` options are merged using the `id` property as a key.
     *
     * @param render
     * Whether to re-render the Grid after updating the options.
     *
     * @param oneToOne
     * When `false` (default), the existing column options will be merged with
     * the ones that are currently defined in the user options. When `true`,
     * the columns not defined in the new options will be removed.
     */
    async update(options = {}, render = true, oneToOne = false) {
        this.loadUserOptions(options, oneToOne);
        this.initAccessibility();
        let newDataTable = false;
        if (!this.dataTable || options.dataTable) {
            this.userOptions.dataTable = options.dataTable;
            (this.options ?? {}).dataTable = options.dataTable;
            this.loadDataTable(this.options?.dataTable);
            newDataTable = true;
            this.initVirtualization();
        }
        this.querying.loadOptions();
        if (render) {
            await this.querying.proceed(newDataTable);
            this.renderViewport();
        }
    }
    /**
     * Updates the column of the Grid with new options.
     *
     * @param columnId
     * The ID of the column that should be updated.
     *
     * @param options
     * The options of the columns that should be updated. If null,
     * column options for this column ID will be removed.
     *
     * @param render
     * Whether to re-render the Grid after updating the columns.
     *
     * @param overwrite
     * If true, the column options will be updated by replacing the existing
     * options with the new ones instead of merging them.
     */
    async updateColumn(columnId, options, render = true, overwrite = false) {
        this.loadColumnOptions([{
                id: columnId,
                ...options
            }], overwrite);
        await this.update(void 0, render);
    }
    /**
     * Hovers the row with the provided index. It removes the hover effect from
     * the previously hovered row.
     *
     * @param rowIndex
     * The index of the row.
     */
    hoverRow(rowIndex) {
        const rows = this.viewport?.rows;
        if (!rows) {
            return;
        }
        const firstRowIndex = this.viewport?.rows[0]?.index ?? 0;
        if (this.hoveredRowIndex !== void 0) {
            rows[this.hoveredRowIndex - firstRowIndex]?.setHoveredState(false);
        }
        if (rowIndex !== void 0) {
            rows[rowIndex - firstRowIndex]?.setHoveredState(true);
        }
        this.hoveredRowIndex = rowIndex;
    }
    /**
     * Hovers the column with the provided ID. It removes the hover effect from
     * the previously hovered column.
     *
     * @param columnId
     * The ID of the column.
     */
    hoverColumn(columnId) {
        const vp = this.viewport;
        if (!vp) {
            return;
        }
        if (this.hoveredColumnId) {
            vp.getColumn(this.hoveredColumnId)?.setHoveredState(false);
        }
        if (columnId) {
            vp.getColumn(columnId)?.setHoveredState(true);
        }
        this.hoveredColumnId = columnId;
    }
    /**
     * Sets the sync state to the row with the provided index. It removes the
     * synced effect from the previously synced row.
     *
     * @param rowIndex
     * The index of the row.
     */
    syncRow(rowIndex) {
        const rows = this.viewport?.rows;
        if (!rows) {
            return;
        }
        const firstRowIndex = this.viewport?.rows[0]?.index ?? 0;
        if (this.syncedRowIndex !== void 0) {
            rows[this.syncedRowIndex - firstRowIndex]?.setSyncedState(false);
        }
        if (rowIndex !== void 0) {
            rows[rowIndex - firstRowIndex]?.setSyncedState(true);
        }
        this.syncedRowIndex = rowIndex;
    }
    /**
     * Sets the sync state to the column with the provided ID. It removes the
     * synced effect from the previously synced column.
     *
     * @param columnId
     * The ID of the column.
     */
    syncColumn(columnId) {
        const vp = this.viewport;
        if (!vp) {
            return;
        }
        if (this.syncedColumnId) {
            vp.getColumn(this.syncedColumnId)?.setSyncedState(false);
        }
        if (columnId) {
            vp.getColumn(columnId)?.setSyncedState(true);
        }
        this.syncedColumnId = columnId;
    }
    /**
     * Render caption above the grid.
     * @internal
     */
    renderCaption() {
        const captionOptions = this.options?.caption;
        const captionText = captionOptions?.text;
        if (!captionText) {
            return;
        }
        // Create a caption element.
        this.captionElement = Grid_makeHTMLElement('div', {
            className: Grid_Core_Globals.getClassName('captionElement'),
            id: this.id + '-caption'
        }, this.contentWrapper);
        // Render the caption element content.
        Grid_setHTMLContent(this.captionElement, captionText);
        if (captionOptions.className) {
            this.captionElement.classList.add(...captionOptions.className.split(/\s+/g));
        }
    }
    /**
     * Render description under the grid.
     *
     * @internal
     */
    renderDescription() {
        const descriptionOptions = this.options?.description;
        const descriptionText = descriptionOptions?.text;
        if (!descriptionText) {
            return;
        }
        // Create a description element.
        this.descriptionElement = Grid_makeHTMLElement('div', {
            className: Grid_Core_Globals.getClassName('descriptionElement'),
            id: this.id + '-description'
        }, this.contentWrapper);
        // Render the description element content.
        Grid_setHTMLContent(this.descriptionElement, descriptionText);
        if (descriptionOptions.className) {
            this.descriptionElement.classList.add(...descriptionOptions.className.split(/\s+/g));
        }
    }
    /**
     * Resets the content wrapper of the Grid. It clears the content and
     * resets the class names.
     * @internal
     */
    resetContentWrapper() {
        if (!this.contentWrapper) {
            return;
        }
        this.contentWrapper.innerHTML = HTML_AST.emptyHTML;
        this.contentWrapper.className =
            Grid_Core_Globals.getClassName('container') + ' ' +
                this.options?.rendering?.theme || '';
    }
    /**
     * Renders the viewport of the Grid. If the Grid is already
     * rendered, it will be destroyed and re-rendered with the new data.
     * @internal
     */
    renderViewport() {
        const viewportMeta = this.viewport?.getStateMeta();
        this.enabledColumns = this.getEnabledColumnIDs();
        this.credits?.destroy();
        this.viewport?.destroy();
        delete this.viewport;
        this.resetContentWrapper();
        this.renderCaption();
        if (this.enabledColumns.length > 0) {
            this.viewport = this.renderTable();
            if (viewportMeta && this.viewport) {
                this.viewport.applyStateMeta(viewportMeta);
            }
        }
        else {
            this.renderNoData();
        }
        this.renderDescription();
        this.accessibility?.setA11yOptions();
        if (this.viewport?.virtualRows) {
            this.viewport.reflow();
        }
        Grid_fireEvent(this, 'afterRenderViewport');
    }
    /**
     * Renders the table (viewport) of the Grid.
     *
     * @returns
     * The newly rendered table (viewport) of the Grid.
     */
    renderTable() {
        this.tableElement = Grid_makeHTMLElement('table', {
            className: Grid_Core_Globals.getClassName('tableElement')
        }, this.contentWrapper);
        return new Table_Table(this, this.tableElement);
    }
    /**
     * Renders a message that there is no data to display.
     */
    renderNoData() {
        Grid_makeHTMLElement('div', {
            className: Grid_Core_Globals.getClassName('noData'),
            innerText: this.options?.lang?.noData
        }, this.contentWrapper);
    }
    /**
     * Returns the array of IDs of columns that should be displayed in the data
     * grid, in the correct order.
     */
    getEnabledColumnIDs() {
        const { columnOptionsMap } = this;
        const header = this.options?.header;
        const headerColumns = this.getColumnIds(header || [], false);
        const columnsIncluded = this.options?.rendering?.columns?.included || (headerColumns && headerColumns.length > 0 ?
            headerColumns : this.dataTable?.getColumnNames());
        if (!columnsIncluded?.length) {
            return [];
        }
        if (!columnOptionsMap) {
            return columnsIncluded;
        }
        let columnName;
        const result = [];
        for (let i = 0, iEnd = columnsIncluded.length; i < iEnd; ++i) {
            columnName = columnsIncluded[i];
            if (columnOptionsMap?.[columnName]?.enabled !== false) {
                result.push(columnName);
            }
        }
        return result;
    }
    loadDataTable(tableOptions) {
        // If the table is passed as a reference, it should be used instead of
        // creating a new one.
        if (tableOptions?.id) {
            this.dataTable = tableOptions;
            this.presentationTable = this.dataTable.modified;
            return;
        }
        this.dataTable = this.presentationTable =
            new Data_DataTable(tableOptions);
    }
    /**
     * Extracts all references to columnIds on all levels below defined level
     * in the settings.header structure.
     *
     * @param columnsTree
     * Structure that we start calculation
     *
     * @param [onlyEnabledColumns=true]
     * Extract all columns from header or columns filtered by enabled param
     * @returns
     */
    getColumnIds(columnsTree, onlyEnabledColumns = true) {
        let columnIds = [];
        const { enabledColumns } = this;
        for (const column of columnsTree) {
            const columnId = typeof column === 'string' ? column : column.columnId;
            if (columnId &&
                (!onlyEnabledColumns || (enabledColumns?.includes(columnId)))) {
                columnIds.push(columnId);
            }
            if (typeof column !== 'string' && column.columns) {
                columnIds = columnIds.concat(this.getColumnIds(column.columns, onlyEnabledColumns));
            }
        }
        return columnIds;
    }
    /**
     * Destroys the Grid.
     */
    destroy() {
        const dgIndex = Grid.grids.findIndex((dg) => dg === this);
        this.viewport?.destroy();
        if (this.container) {
            this.container.innerHTML = HTML_AST.emptyHTML;
            this.container.classList.remove(Grid_Core_Globals.getClassName('container'));
        }
        // Clear all properties
        Object.keys(this).forEach((key) => {
            delete this[key];
        });
        Grid.grids.splice(dgIndex, 1);
    }
    /**
     * Grey out the Grid and show a loading indicator.
     *
     * @param message
     * The message to display in the loading indicator.
     */
    showLoading(message) {
        if (this.loadingWrapper) {
            return;
        }
        // Create loading wrapper.
        this.loadingWrapper = Grid_makeHTMLElement('div', {
            className: Grid_Core_Globals.getClassName('loadingWrapper')
        }, this.contentWrapper);
        // Create spinner element.
        Grid_makeHTMLElement('div', {
            className: Grid_Core_Globals.getClassName('loadingSpinner')
        }, this.loadingWrapper);
        // Create loading message span element.
        const loadingSpan = Grid_makeHTMLElement('span', {
            className: Grid_Core_Globals.getClassName('loadingMessage')
        }, this.loadingWrapper);
        Grid_setHTMLContent(loadingSpan, Grid_pick(message, this.options?.lang?.loading, ''));
    }
    /**
     * Removes the loading indicator.
     */
    hideLoading() {
        this.loadingWrapper?.remove();
        delete this.loadingWrapper;
    }
    /**
     * Returns the current grid data as a JSON string.
     *
     * @return
     * JSON representation of the data
     */
    getData() {
        const json = this.viewport?.dataTable.modified.columns;
        if (!this.enabledColumns || !json) {
            return '{}';
        }
        for (const key of Object.keys(json)) {
            if (this.enabledColumns.indexOf(key) === -1) {
                delete json[key];
            }
        }
        return JSON.stringify(json);
    }
    /**
     * Returns the current grid data as a JSON string.
     *
     * @return
     * JSON representation of the data
     *
     * @deprecated
     */
    getJSON() {
        return this.getData();
    }
    /**
     * Returns the current Grid options.
     *
     * @param onlyUserOptions
     * Whether to return only the user options or all options (user options
     * merged with the default ones). Default is `true`.
     *
     * @returns
     * Grid options.
     */
    getOptions(onlyUserOptions = true) {
        const options = onlyUserOptions ? Grid_merge(this.userOptions) : Grid_merge(this.options);
        if (options.dataTable?.id) {
            options.dataTable = {
                columns: options.dataTable.columns
            };
        }
        return options;
    }
    /**
     * Returns the current Grid options.
     *
     * @param onlyUserOptions
     * Whether to return only the user options or all options (user options
     * merged with the default ones). Default is `true`.
     *
     * @returns
     * Options as a JSON string
     *
     * @deprecated
     */
    getOptionsJSON(onlyUserOptions = true) {
        return JSON.stringify(this.getOptions(onlyUserOptions));
    }
    /**
     * Enables virtualization if the row count is greater than or equal to the
     * threshold or virtualization is enabled externally. Should be fired after
     * the data table is loaded.
     */
    initVirtualization() {
        var _a,
            _b;
        const rows = this.userOptions.rendering?.rows;
        const virtualization = rows?.virtualization;
        const threshold = Number(rows?.virtualizationThreshold ||
            Core_Defaults.defaultOptions.rendering?.rows?.virtualizationThreshold);
        const rowCount = Number(this.dataTable?.rowCount);
        // Makes sure all nested options are defined.
        (_b = ((_a = (this.options ?? (this.options = {}))).rendering ?? (_a.rendering = {}))).rows ?? (_b.rows = {});
        this.options.rendering.rows.virtualization =
            Grid_defined(virtualization) ? virtualization : rowCount >= threshold;
    }
}
/* *
*
*  Properties
*
* */
/**
 * An array containing the current Grid objects in the page.
 * @internal
 */
Grid.grids = [];
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Core_Grid = (Grid);

;// ./code/grid/es-modules/Data/DataPoolDefaults.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */

/* *
 *
 *  API Options
 *
 * */
const DataPoolDefaults = {
    connectors: []
};
/* *
 *
 *  Export Defaults
 *
 * */
/* harmony default export */ const Data_DataPoolDefaults = (DataPoolDefaults);

;// ./code/grid/es-modules/Data/DataPool.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */




/* *
 *
 *  Class
 *
 * */
/**
 * Data pool to load connectors on-demand.
 *
 * @class
 * @name Data.DataPool
 *
 * @param {Data.DataPoolOptions} options
 * Pool options with all connectors.
 */
class DataPool {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(options = Data_DataPoolDefaults) {
        options.connectors = (options.connectors || []);
        this.connectors = {};
        this.options = options;
        this.waiting = {};
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Emits an event on this data pool to all registered callbacks of the given
     * event.
     * @private
     *
     * @param {DataTable.Event} e
     * Event object with event information.
     */
    emit(e) {
        Core_Utilities.fireEvent(this, e.type, e);
    }
    /**
     * Loads the connector.
     *
     * @function Data.DataPool#getConnector
     *
     * @param {string} connectorId
     * ID of the connector.
     *
     * @return {Promise<Data.DataConnectorType>}
     * Returns the connector.
     */
    getConnector(connectorId) {
        const connector = this.connectors[connectorId];
        // Already loaded
        if (connector) {
            return Promise.resolve(connector);
        }
        let waitingList = this.waiting[connectorId];
        // Start loading
        if (!waitingList) {
            waitingList = this.waiting[connectorId] = [];
            const connectorOptions = this.getConnectorOptions(connectorId);
            if (!connectorOptions) {
                throw new Error(`Connector '${connectorId}' not found.`);
            }
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this
                .loadConnector(connectorOptions)
                .then((connector) => {
                delete this.waiting[connectorId];
                for (let i = 0, iEnd = waitingList.length; i < iEnd; ++i) {
                    waitingList[i][0](connector);
                }
            })['catch']((error) => {
                delete this.waiting[connectorId];
                for (let i = 0, iEnd = waitingList.length; i < iEnd; ++i) {
                    waitingList[i][1](error);
                }
            });
        }
        // Add request to waiting list
        return new Promise((resolve, reject) => {
            waitingList.push([resolve, reject]);
        });
    }
    /**
     * Returns the IDs of all connectors.
     *
     * @private
     *
     * @return {Array<string>}
     * Names of all connectors.
     */
    getConnectorIds() {
        const connectors = this.options.connectors, connectorIds = [];
        for (let i = 0, iEnd = connectors.length; i < iEnd; ++i) {
            connectorIds.push(connectors[i].id);
        }
        return connectorIds;
    }
    /**
     * Loads the options of the connector.
     *
     * @private
     *
     * @param {string} connectorId
     * ID of the connector.
     *
     * @return {DataPoolConnectorOptions|undefined}
     * Returns the options of the connector, or `undefined` if not found.
     */
    getConnectorOptions(connectorId) {
        const connectors = this.options.connectors;
        for (let i = 0, iEnd = connectors.length; i < iEnd; ++i) {
            if (connectors[i].id === connectorId) {
                return connectors[i];
            }
        }
    }
    /**
     * Loads the connector table.
     *
     * @function Data.DataPool#getConnectorTable
     *
     * @param {string} connectorId
     * ID of the connector.
     *
     * @return {Promise<Data.DataTable>}
     * Returns the connector table.
     */
    getConnectorTable(connectorId) {
        return this
            .getConnector(connectorId)
            .then((connector) => connector.table);
    }
    /**
     * Tests whether the connector has never been requested.
     *
     * @param {string} connectorId
     * Name of the connector.
     *
     * @return {boolean}
     * Returns `true`, if the connector has never been requested, otherwise
     * `false`.
     */
    isNewConnector(connectorId) {
        return !this.connectors[connectorId];
    }
    /**
     * Creates and loads the connector.
     *
     * @private
     *
     * @param {Data.DataPoolConnectorOptions} options
     * Options of connector.
     *
     * @return {Promise<Data.DataConnectorType>}
     * Returns the connector.
     */
    loadConnector(options) {
        return new Promise((resolve, reject) => {
            this.emit({
                type: 'load',
                options
            });
            const ConnectorClass = Connectors_DataConnector.types[options.type];
            if (!ConnectorClass) {
                throw new Error(`Connector type not found. (${options.type})`);
            }
            const connector = new ConnectorClass(options.options);
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            connector
                .load()
                .then((connector) => {
                this.connectors[options.id] = connector;
                this.emit({
                    type: 'afterLoad',
                    options
                });
                resolve(connector);
            })['catch'](reject);
        });
    }
    /**
     * Registers a callback for a specific event.
     *
     * @function Highcharts.DataPool#on
     *
     * @param {string} type
     * Event type as a string.
     *
     * @param {Highcharts.EventCallbackFunction<Highcharts.DataPool>} callback
     * Function to register for an event callback.
     *
     * @return {Function}
     * Function to unregister callback from the event.
     */
    on(type, callback) {
        return Core_Utilities.addEvent(this, type, callback);
    }
    /**
     * Sets connector options under the specified `options.id`.
     *
     * @param {Data.DataPoolConnectorOptions} options
     * Connector options to set.
     */
    setConnectorOptions(options) {
        const connectors = this.options.connectors, instances = this.connectors;
        this.emit({
            type: 'setConnectorOptions',
            options
        });
        for (let i = 0, iEnd = connectors.length; i < iEnd; ++i) {
            if (connectors[i].id === options.id) {
                connectors.splice(i, 1);
                break;
            }
        }
        if (instances[options.id]) {
            instances[options.id].stopPolling();
            delete instances[options.id];
        }
        connectors.push(options);
        this.emit({
            type: 'afterSetConnectorOptions',
            options
        });
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Semantic version string of the DataPool class.
 * @internal
 */
DataPool.version = '1.0.0';
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Data_DataPool = (DataPool);

;// ./code/grid/es-modules/Grid/Core/Credits.js
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
 *  - Dawid Dragula
 *  - Sebastian Bochan
 *
 * */



const { makeHTMLElement: Credits_makeHTMLElement, setHTMLContent: Credits_setHTMLContent } = Core_GridUtils;
/* *
 *
 *  Class
 *
 * */
/**
 * Represents a credits in the data grid.
 */
class Credits {
    /* *
    *
    *  Constructor
    *
    * */
    /**
     * Construct the credits.
     *
     * @param grid
     * The Grid instance which the credits belong to.
     *
     * @param options
     * Options for the credits label. Predefined if not provided.
     *
     */
    constructor(grid, options) {
        this.grid = grid;
        this.containerElement = Credits_makeHTMLElement('div', {
            className: Grid_Core_Globals.getClassName('creditsContainer')
        });
        this.textElement = this.renderAnchor();
        this.options = options ?? Credits.defaultOptions;
        this.render();
    }
    /* *
    *
    *  Methods
    *
    * */
    /**
     * Render the credits. If the credits are disabled, they will be removed
     * from the container. If also reflows the viewport dimensions.
     */
    render() {
        const grid = this.grid;
        const contentWrapper = grid.contentWrapper;
        const { text, href } = this.options;
        this.containerElement.remove();
        if (!this.textElement) {
            this.textElement = this.renderAnchor();
        }
        if (text && href) {
            Credits_setHTMLContent(this.textElement, text);
            this.textElement.setAttribute('href', href || '');
        }
        if (grid.descriptionElement) {
            contentWrapper?.insertBefore(this.containerElement, grid.descriptionElement);
        }
        else {
            contentWrapper?.appendChild(this.containerElement);
        }
        this.grid.viewport?.reflow();
    }
    renderAnchor() {
        const anchorElement = Credits_makeHTMLElement('a', {
            className: Grid_Core_Globals.getClassName('creditsText')
        }, this.containerElement);
        anchorElement.setAttribute('target', '_blank');
        return anchorElement;
    }
    /**
     * Get the height of the credits container.
     */
    getHeight() {
        return this.containerElement.offsetHeight;
    }
    /**
     * Destroy the credits. The credits will be removed from the container and
     * the reference to the credits will be deleted from the Grid instance
     * it belongs to.
     */
    destroy() {
        this.containerElement.remove();
    }
}
/* *
*
*  Static Properties
*
* */
/**
 * Default options of the credits.
 */
Credits.defaultOptions = {
    enabled: true,
    // eslint-disable-next-line no-console
    text: `<picture class="hcg-logo-wrapper">
            <source srcset="https://assets.highcharts.com/grid/logo_darkx2.png 2x, https://assets.highcharts.com/grid/logo_dark.png 1x" media="(prefers-color-scheme: dark)">
            <img src="https://assets.highcharts.com/grid/logo_light.png" srcset="https://assets.highcharts.com/grid/logo_lightx2.png 2x, https://assets.highcharts.com/grid/logo_light.png 1x" alt="Highcharts logo" style="height: 20px !important; width: auto !important; display: inline-block !important;">
        </picture>`,
    href: 'https://www.highcharts.com',
    position: 'bottom'
};
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Core_Credits = (Credits);

;// ./code/grid/es-modules/Grid/Lite/Credits/CreditsLiteComposition.js
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



const { addEvent: CreditsLiteComposition_addEvent, pushUnique: CreditsLiteComposition_pushUnique } = Core_Utilities;
var CreditsLiteComposition;
(function (CreditsLiteComposition) {
    let creditsObserver;
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
    function compose(GridClass, TableClass) {
        if (!CreditsLiteComposition_pushUnique(Core_Globals.composed, 'CreditsLite')) {
            return;
        }
        CreditsLiteComposition_addEvent(GridClass, 'afterRenderViewport', initCredits);
        CreditsLiteComposition_addEvent(TableClass, 'afterDestroy', destroyCredits);
    }
    CreditsLiteComposition.compose = compose;
    /**
     * Callback function called before table initialization.
     */
    function initCredits() {
        const credits = new Core_Credits(this);
        const containerStyle = credits.containerElement.style;
        // Apply static styles
        containerStyle.setProperty('display', 'inline-block', 'important');
        containerStyle.setProperty('padding', '5px 5px 0px 5px', 'important');
        containerStyle.setProperty('text-align', 'right', 'important');
        // Create an observer that check credits modifications
        creditsObserver = new MutationObserver(() => {
            if (!credits.containerElement.querySelector('.hcg-logo-wrapper')) {
                credits.render();
            }
        });
        // Start observing the credits
        creditsObserver.observe(credits.containerElement, {
            attributes: true,
            childList: true,
            subtree: true
        });
        return credits;
    }
    /**
     * Callback function called after credits destroy.
     */
    function destroyCredits() {
        creditsObserver.disconnect();
    }
})(CreditsLiteComposition || (CreditsLiteComposition = {}));
/* harmony default export */ const Credits_CreditsLiteComposition = (CreditsLiteComposition);

;// ./code/grid/es-modules/Data/Converters/CSVConverter.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Torstein Hønsi
 *  - Christer Vasseng
 *  - Gøran Slettemark
 *  - Sophie Bremer
 *
 * */



const { merge: CSVConverter_merge } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Handles parsing and transforming CSV to a table.
 *
 * @private
 */
class CSVConverter extends Converters_DataConverter {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the CSV parser.
     *
     * @param {CSVConverter.UserOptions} [options]
     * Options for the CSV parser.
     */
    constructor(options) {
        const mergedOptions = CSVConverter_merge(CSVConverter.defaultOptions, options);
        super(mergedOptions);
        /* *
         *
         *  Properties
         *
         * */
        this.columns = [];
        this.headers = [];
        this.dataTypes = [];
        this.options = mergedOptions;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Creates a CSV string from the datatable on the connector instance.
     *
     * @param {DataConnector} connector
     * Connector instance to export from.
     *
     * @param {CSVConverter.Options} [options]
     * Options used for the export.
     *
     * @return {string}
     * CSV string from the connector table.
     */
    export(connector, options = this.options) {
        const { useLocalDecimalPoint, lineDelimiter } = options, exportNames = (this.options.firstRowAsNames !== false);
        let { decimalPoint, itemDelimiter } = options;
        if (!decimalPoint) {
            decimalPoint = (itemDelimiter !== ',' && useLocalDecimalPoint ?
                (1.1).toLocaleString()[1] :
                '.');
        }
        if (!itemDelimiter) {
            itemDelimiter = (decimalPoint === ',' ? ';' : ',');
        }
        const columns = connector.getSortedColumns(options.usePresentationOrder), columnNames = Object.keys(columns), csvRows = [], columnsCount = columnNames.length;
        const rowArray = [];
        // Add the names as the first row if they should be exported
        if (exportNames) {
            csvRows.push(columnNames.map((columnName) => `"${columnName}"`).join(itemDelimiter));
        }
        for (let columnIndex = 0; columnIndex < columnsCount; columnIndex++) {
            const columnName = columnNames[columnIndex], column = columns[columnName], columnLength = column.length;
            const columnMeta = connector.whatIs(columnName);
            let columnDataType;
            if (columnMeta) {
                columnDataType = columnMeta.dataType;
            }
            for (let rowIndex = 0; rowIndex < columnLength; rowIndex++) {
                let cellValue = column[rowIndex];
                if (!rowArray[rowIndex]) {
                    rowArray[rowIndex] = [];
                }
                // Prefer datatype from metadata
                if (columnDataType === 'string') {
                    cellValue = '"' + cellValue + '"';
                }
                else if (typeof cellValue === 'number') {
                    cellValue = String(cellValue).replace('.', decimalPoint);
                }
                else if (typeof cellValue === 'string') {
                    cellValue = `"${cellValue}"`;
                }
                rowArray[rowIndex][columnIndex] = cellValue;
                // On the final column, push the row to the CSV
                if (columnIndex === columnsCount - 1) {
                    // Trim repeated undefined values starting at the end
                    // Currently, we export the first "comma" even if the
                    // second value is undefined
                    let i = columnIndex;
                    while (rowArray[rowIndex].length > 2) {
                        const cellVal = rowArray[rowIndex][i];
                        if (cellVal !== void 0) {
                            break;
                        }
                        rowArray[rowIndex].pop();
                        i--;
                    }
                    csvRows.push(rowArray[rowIndex].join(itemDelimiter));
                }
            }
        }
        return csvRows.join(lineDelimiter);
    }
    /**
     * Initiates parsing of CSV
     *
     * @param {CSVConverter.UserOptions}[options]
     * Options for the parser
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits CSVDataParser#parse
     * @emits CSVDataParser#afterParse
     */
    parse(options, eventDetail) {
        const converter = this, dataTypes = converter.dataTypes, parserOptions = CSVConverter_merge(this.options, options), { beforeParse, lineDelimiter, firstRowAsNames, itemDelimiter } = parserOptions;
        let lines, rowIt = 0, { csv, startRow, endRow } = parserOptions, column;
        converter.columns = [];
        converter.emit({
            type: 'parse',
            columns: converter.columns,
            detail: eventDetail,
            headers: converter.headers
        });
        if (csv && beforeParse) {
            csv = beforeParse(csv);
        }
        if (csv) {
            lines = csv
                .replace(/\r\n|\r/g, '\n') // Windows | Mac
                .split(lineDelimiter || '\n');
            if (!startRow || startRow < 0) {
                startRow = 0;
            }
            if (!endRow || endRow >= lines.length) {
                endRow = lines.length - 1;
            }
            if (!itemDelimiter) {
                converter.guessedItemDelimiter =
                    converter.guessDelimiter(lines);
            }
            // If the first row contain names, add them to the
            // headers array and skip the row.
            if (firstRowAsNames) {
                const headers = lines[0].split(itemDelimiter || converter.guessedItemDelimiter || ',');
                // Remove ""s from the headers
                for (let i = 0; i < headers.length; i++) {
                    headers[i] = headers[i].trim().replace(/^["']|["']$/g, '');
                }
                converter.headers = headers;
                startRow++;
            }
            let offset = 0;
            for (rowIt = startRow; rowIt <= endRow; rowIt++) {
                if (lines[rowIt][0] === '#') {
                    offset++;
                }
                else {
                    converter
                        .parseCSVRow(lines[rowIt], rowIt - startRow - offset);
                }
            }
            if (dataTypes.length &&
                dataTypes[0].length &&
                dataTypes[0][1] === 'date' && // Format is a string date
                !converter.options.dateFormat) {
                converter.deduceDateFormat(converter.columns[0], null, true);
            }
            // Guess types.
            for (let i = 0, iEnd = converter.columns.length; i < iEnd; ++i) {
                column = converter.columns[i];
                for (let j = 0, jEnd = column.length; j < jEnd; ++j) {
                    if (column[j] && typeof column[j] === 'string') {
                        let cellValue = converter.asGuessedType(column[j]);
                        if (cellValue instanceof Date) {
                            cellValue = cellValue.getTime();
                        }
                        converter.columns[i][j] = cellValue;
                    }
                }
            }
        }
        converter.emit({
            type: 'afterParse',
            columns: converter.columns,
            detail: eventDetail,
            headers: converter.headers
        });
    }
    /**
     * Internal method that parses a single CSV row
     */
    parseCSVRow(columnStr, rowNumber) {
        const converter = this, columns = converter.columns || [], dataTypes = converter.dataTypes, { startColumn, endColumn } = converter.options, itemDelimiter = (converter.options.itemDelimiter ||
            converter.guessedItemDelimiter);
        let { decimalPoint } = converter.options;
        if (!decimalPoint || decimalPoint === itemDelimiter) {
            decimalPoint = converter.guessedDecimalPoint || '.';
        }
        let i = 0, c = '', token = '', actualColumn = 0, column = 0;
        const read = (j) => {
            c = columnStr[j];
        };
        const pushType = (type) => {
            if (dataTypes.length < column + 1) {
                dataTypes.push([type]);
            }
            if (dataTypes[column][dataTypes[column].length - 1] !== type) {
                dataTypes[column].push(type);
            }
        };
        const push = () => {
            if (startColumn > actualColumn || actualColumn > endColumn) {
                // Skip this column, but increment the column count (#7272)
                ++actualColumn;
                token = '';
                return;
            }
            // Save the type of the token.
            if (typeof token === 'string') {
                if (!isNaN(parseFloat(token)) && isFinite(token)) {
                    token = parseFloat(token);
                    pushType('number');
                }
                else if (!isNaN(Date.parse(token))) {
                    token = token.replace(/\//g, '-');
                    pushType('date');
                }
                else {
                    pushType('string');
                }
            }
            else {
                pushType('number');
            }
            if (columns.length < column + 1) {
                columns.push([]);
            }
            // Try to apply the decimal point, and check if the token then is a
            // number. If not, reapply the initial value
            if (typeof token !== 'number' &&
                converter.guessType(token) !== 'number' &&
                decimalPoint) {
                const initialValue = token;
                token = token.replace(decimalPoint, '.');
                if (converter.guessType(token) !== 'number') {
                    token = initialValue;
                }
            }
            columns[column][rowNumber] = token;
            token = '';
            ++column;
            ++actualColumn;
        };
        if (!columnStr.trim().length) {
            return;
        }
        if (columnStr.trim()[0] === '#') {
            return;
        }
        for (; i < columnStr.length; i++) {
            read(i);
            if (c === '#') {
                // If there are hexvalues remaining (#13283)
                if (!/^#[A-F\d]{3,3}|[A-F\d]{6,6}/i.test(columnStr.substring(i))) {
                    // The rest of the row is a comment
                    push();
                    return;
                }
            }
            // Quoted string
            if (c === '"') {
                read(++i);
                while (i < columnStr.length) {
                    if (c === '"') {
                        break;
                    }
                    token += c;
                    read(++i);
                }
            }
            else if (c === itemDelimiter) {
                push();
                // Actual column data
            }
            else {
                token += c;
            }
        }
        push();
    }
    /**
     * Internal method that guesses the delimiter from the first
     * 13 lines of the CSV
     * @param {Array<string>} lines
     * The CSV, split into lines
     */
    guessDelimiter(lines) {
        let points = 0, commas = 0, guessed;
        const potDelimiters = {
            ',': 0,
            ';': 0,
            '\t': 0
        }, linesCount = lines.length;
        for (let i = 0; i < linesCount; i++) {
            let inStr = false, c, cn, cl, token = '';
            // We should be able to detect dateformats within 13 rows
            if (i > 13) {
                break;
            }
            const columnStr = lines[i];
            for (let j = 0; j < columnStr.length; j++) {
                c = columnStr[j];
                cn = columnStr[j + 1];
                cl = columnStr[j - 1];
                if (c === '#') {
                    // Skip the rest of the line - it's a comment
                    break;
                }
                if (c === '"') {
                    if (inStr) {
                        if (cl !== '"' && cn !== '"') {
                            while (cn === ' ' && j < columnStr.length) {
                                cn = columnStr[++j];
                            }
                            // After parsing a string, the next non-blank
                            // should be a delimiter if the CSV is properly
                            // formed.
                            if (typeof potDelimiters[cn] !== 'undefined') {
                                potDelimiters[cn]++;
                            }
                            inStr = false;
                        }
                    }
                    else {
                        inStr = true;
                    }
                }
                else if (typeof potDelimiters[c] !== 'undefined') {
                    token = token.trim();
                    if (!isNaN(Date.parse(token))) {
                        potDelimiters[c]++;
                    }
                    else if (isNaN(Number(token)) ||
                        !isFinite(Number(token))) {
                        potDelimiters[c]++;
                    }
                    token = '';
                }
                else {
                    token += c;
                }
                if (c === ',') {
                    commas++;
                }
                if (c === '.') {
                    points++;
                }
            }
        }
        // Count the potential delimiters.
        // This could be improved by checking if the number of delimiters
        // equals the number of columns - 1
        if (potDelimiters[';'] > potDelimiters[',']) {
            guessed = ';';
        }
        else if (potDelimiters[','] > potDelimiters[';']) {
            guessed = ',';
        }
        else {
            // No good guess could be made..
            guessed = ',';
        }
        // Try to deduce the decimal point if it's not explicitly set.
        // If both commas or points is > 0 there is likely an issue
        if (points > commas) {
            this.guessedDecimalPoint = '.';
        }
        else {
            this.guessedDecimalPoint = ',';
        }
        return guessed;
    }
    /**
     * Handles converting the parsed data to a table.
     *
     * @return {DataTable}
     * Table from the parsed CSV.
     */
    getTable() {
        return Converters_DataConverter.getTableFromColumns(this.columns, this.headers);
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options
 */
CSVConverter.defaultOptions = {
    ...Converters_DataConverter.defaultOptions,
    lineDelimiter: '\n'
};
Converters_DataConverter.registerType('CSV', CSVConverter);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Converters_CSVConverter = (CSVConverter);

;// ./code/grid/es-modules/Data/Connectors/CSVConnector.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Torstein Hønsi
 *  - Christer Vasseng
 *  - Gøran Slettemark
 *  - Sophie Bremer
 *
 * */




const { merge: CSVConnector_merge } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Class that handles creating a DataConnector from CSV
 *
 * @private
 */
class CSVConnector extends Connectors_DataConnector {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of CSVConnector.
     *
     * @param {CSVConnector.UserOptions} [options]
     * Options for the connector and converter.
     */
    constructor(options) {
        const mergedOptions = CSVConnector_merge(CSVConnector.defaultOptions, options);
        super(mergedOptions);
        this.converter = new Converters_CSVConverter(mergedOptions);
        this.options = mergedOptions;
        if (mergedOptions.enablePolling) {
            this.startPolling(Math.max(mergedOptions.dataRefreshRate || 0, 1) * 1000);
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initiates the loading of the CSV source to the connector
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits CSVConnector#load
     * @emits CSVConnector#afterLoad
     */
    load(eventDetail) {
        const connector = this, converter = connector.converter, table = connector.table, { csv, csvURL, dataModifier } = connector.options;
        connector.emit({
            type: 'load',
            csv,
            detail: eventDetail,
            table
        });
        return Promise
            .resolve(csvURL ?
            fetch(csvURL).then((response) => response.text()) :
            csv || '')
            .then((csv) => {
            if (csv) {
                // If already loaded, clear the current rows
                table.deleteColumns();
                converter.parse({ csv });
                table.setColumns(converter.getTable().getColumns());
            }
            return connector
                .setModifierOptions(dataModifier)
                .then(() => csv);
        })
            .then((csv) => {
            connector.emit({
                type: 'afterLoad',
                csv,
                detail: eventDetail,
                table
            });
            return connector;
        })['catch']((error) => {
            connector.emit({
                type: 'loadError',
                detail: eventDetail,
                error,
                table
            });
            throw error;
        });
    }
}
/* *
 *
 *  Static Properties
 *
 * */
CSVConnector.defaultOptions = {
    csv: '',
    csvURL: '',
    enablePolling: false,
    dataRefreshRate: 1,
    firstRowAsNames: true
};
Connectors_DataConnector.registerType('CSV', CSVConnector);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Connectors_CSVConnector = ((/* unused pure expression or super */ null && (CSVConnector)));

;// ./code/grid/es-modules/Data/Converters/GoogleSheetsConverter.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Torstein Hønsi
 *  - Gøran Slettemark
 *  - Wojciech Chmiel
 *  - Sophie Bremer
 *
 * */



const { merge: GoogleSheetsConverter_merge, uniqueKey: GoogleSheetsConverter_uniqueKey } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Handles parsing and transformation of an Google Sheets to a table.
 *
 * @private
 */
class GoogleSheetsConverter extends Converters_DataConverter {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the GoogleSheetsConverter.
     *
     * @param {GoogleSheetsConverter.UserOptions} [options]
     * Options for the GoogleSheetsConverter.
     */
    constructor(options) {
        const mergedOptions = GoogleSheetsConverter_merge(GoogleSheetsConverter.defaultOptions, options);
        super(mergedOptions);
        this.columns = [];
        this.header = [];
        this.options = mergedOptions;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initiates the parsing of the Google Sheet
     *
     * @param {GoogleSheetsConverter.UserOptions}[options]
     * Options for the parser
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits GoogleSheetsParser#parse
     * @emits GoogleSheetsParser#afterParse
     */
    parse(options, eventDetail) {
        const converter = this, parseOptions = GoogleSheetsConverter_merge(converter.options, options);
        let columns = ((parseOptions.json?.values) || []).map((column) => column.slice());
        if (columns.length === 0) {
            return false;
        }
        converter.header = [];
        converter.columns = [];
        converter.emit({
            type: 'parse',
            columns: converter.columns,
            detail: eventDetail,
            headers: converter.header
        });
        // If beforeParse is defined, use it to modify the data
        const { beforeParse, json } = parseOptions;
        if (beforeParse && json) {
            columns = beforeParse(json.values);
        }
        let column;
        converter.columns = columns;
        for (let i = 0, iEnd = columns.length; i < iEnd; i++) {
            column = columns[i];
            converter.header[i] = (parseOptions.firstRowAsNames ?
                `${column.shift()}` :
                GoogleSheetsConverter_uniqueKey());
            for (let j = 0, jEnd = column.length; j < jEnd; ++j) {
                if (column[j] && typeof column[j] === 'string') {
                    let cellValue = converter.asGuessedType(column[j]);
                    if (cellValue instanceof Date) {
                        cellValue = cellValue.getTime();
                    }
                    converter.columns[i][j] = cellValue;
                }
            }
        }
        converter.emit({
            type: 'afterParse',
            columns: converter.columns,
            detail: eventDetail,
            headers: converter.header
        });
    }
    /**
     * Handles converting the parsed data to a table.
     *
     * @return {DataTable}
     * Table from the parsed Google Sheet
     */
    getTable() {
        return Converters_DataConverter.getTableFromColumns(this.columns, this.header);
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options
 */
GoogleSheetsConverter.defaultOptions = {
    ...Converters_DataConverter.defaultOptions
};
Converters_DataConverter.registerType('GoogleSheets', GoogleSheetsConverter);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Converters_GoogleSheetsConverter = (GoogleSheetsConverter);

;// ./code/grid/es-modules/Data/Connectors/GoogleSheetsConnector.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Torstein Hønsi
 *  - Gøran Slettemark
 *  - Wojciech Chmiel
 *  - Sophie Bremer
 *  - Jomar Hønsi
 *
 * */




const { merge: GoogleSheetsConnector_merge, pick: GoogleSheetsConnector_pick } = Core_Utilities;
/* *
 *
 *  Functions
 *
 * */
/**
 * Tests Google's response for error.
 * @private
 */
function isGoogleError(json) {
    return (typeof json === 'object' && json &&
        typeof json.error === 'object' && json.error &&
        typeof json.error.code === 'number' &&
        typeof json.error.message === 'string' &&
        typeof json.error.status === 'string');
}
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @todo implement save, requires oauth2
 */
class GoogleSheetsConnector extends Connectors_DataConnector {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of GoogleSheetsConnector
     *
     * @param {GoogleSheetsConnector.UserOptions} [options]
     * Options for the connector and converter.
     */
    constructor(options) {
        const mergedOptions = GoogleSheetsConnector_merge(GoogleSheetsConnector.defaultOptions, options);
        super(mergedOptions);
        this.converter = new Converters_GoogleSheetsConverter(mergedOptions);
        this.options = mergedOptions;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Loads data from a Google Spreadsheet.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Promise<this>}
     * Same connector instance with modified table.
     */
    load(eventDetail) {
        const connector = this, converter = connector.converter, table = connector.table, { dataModifier, dataRefreshRate, enablePolling, firstRowAsNames, googleAPIKey, googleSpreadsheetKey } = connector.options, url = GoogleSheetsConnector.buildFetchURL(googleAPIKey, googleSpreadsheetKey, connector.options);
        connector.emit({
            type: 'load',
            detail: eventDetail,
            table,
            url
        });
        if (!URL.canParse(url)) {
            throw new Error('Invalid URL: ' + url);
        }
        return fetch(url)
            .then((response) => (response.json()))
            .then((json) => {
            if (isGoogleError(json)) {
                throw new Error(json.error.message);
            }
            converter.parse({
                firstRowAsNames,
                json
            });
            // If already loaded, clear the current table
            table.deleteColumns();
            table.setColumns(converter.getTable().getColumns());
            return connector.setModifierOptions(dataModifier);
        })
            .then(() => {
            connector.emit({
                type: 'afterLoad',
                detail: eventDetail,
                table,
                url
            });
            // Polling
            if (enablePolling) {
                setTimeout(() => connector.load(), Math.max(dataRefreshRate || 0, 1) * 1000);
            }
            return connector;
        })['catch']((error) => {
            connector.emit({
                type: 'loadError',
                detail: eventDetail,
                error,
                table
            });
            throw error;
        });
    }
}
/* *
 *
 *  Static Properties
 *
 * */
GoogleSheetsConnector.defaultOptions = {
    googleAPIKey: '',
    googleSpreadsheetKey: '',
    enablePolling: false,
    dataRefreshRate: 2,
    firstRowAsNames: true
};
/* *
 *
 *  Class Namespace
 *
 * */
(function (GoogleSheetsConnector) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Constants
     *
     * */
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Creates GoogleSheets API v4 URL.
     * @private
     */
    function buildFetchURL(apiKey, sheetKey, options = {}) {
        const url = new URL(`https://sheets.googleapis.com/v4/spreadsheets/${sheetKey}/values/`);
        const range = options.onlyColumnNames ?
            'A1:Z1' : buildQueryRange(options);
        url.pathname += range;
        const searchParams = url.searchParams;
        searchParams.set('alt', 'json');
        if (!options.onlyColumnNames) {
            searchParams.set('dateTimeRenderOption', 'FORMATTED_STRING');
            searchParams.set('majorDimension', 'COLUMNS');
            searchParams.set('valueRenderOption', 'UNFORMATTED_VALUE');
        }
        searchParams.set('prettyPrint', 'false');
        searchParams.set('key', apiKey);
        return url.href;
    }
    GoogleSheetsConnector.buildFetchURL = buildFetchURL;
    /**
     * Creates sheets range.
     * @private
     */
    function buildQueryRange(options = {}) {
        const { endColumn, endRow, googleSpreadsheetRange, startColumn, startRow } = options;
        return googleSpreadsheetRange || ((alphabet[startColumn || 0] || 'A') +
            (Math.max((startRow || 0), 0) + 1) +
            ':' +
            (alphabet[GoogleSheetsConnector_pick(endColumn, 25)] || 'Z') +
            (endRow ?
                Math.max(endRow, 0) :
                'Z'));
    }
    GoogleSheetsConnector.buildQueryRange = buildQueryRange;
})(GoogleSheetsConnector || (GoogleSheetsConnector = {}));
Connectors_DataConnector.registerType('GoogleSheets', GoogleSheetsConnector);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Connectors_GoogleSheetsConnector = ((/* unused pure expression or super */ null && (GoogleSheetsConnector)));

;// ./code/grid/es-modules/Data/Converters/HTMLTableConverter.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Torstein Hønsi
 *  - Gøran Slettemark
 *  - Wojciech Chmiel
 *  - Sophie Bremer
 *
 * */



const { merge: HTMLTableConverter_merge } = Core_Utilities;
/* *
 *
 *  Functions
 *
 * */
/**
 * Row equal
 */
function isRowEqual(row1, row2) {
    let i = row1.length;
    if (row2.length === i) {
        while (--i) {
            if (row1[i] !== row2[i]) {
                return false;
            }
        }
    }
    else {
        return false;
    }
    return true;
}
/* *
 *
 *  Class
 *
 * */
/**
 * Handles parsing and transformation of an HTML table to a table.
 *
 * @private
 */
class HTMLTableConverter extends Converters_DataConverter {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the HTMLTableConverter.
     *
     * @param {HTMLTableConverter.UserOptions} [options]
     * Options for the HTMLTableConverter.
     */
    constructor(options) {
        const mergedOptions = HTMLTableConverter_merge(HTMLTableConverter.defaultOptions, options);
        super(mergedOptions);
        this.columns = [];
        this.headers = [];
        this.options = mergedOptions;
        if (mergedOptions.tableElement) {
            this.tableElement = mergedOptions.tableElement;
            this.tableElementID = mergedOptions.tableElement.id;
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Exports the dataconnector as an HTML string, using the options
     * provided on import unless other options are provided.
     *
     * @param {DataConnector} connector
     * Connector instance to export from.
     *
     * @param {HTMLTableConnector.ExportOptions} [options]
     * Options that override default or existing export options.
     *
     * @return {string}
     * HTML from the current dataTable.
     */
    export(connector, options = this.options) {
        const exportNames = (options.firstRowAsNames !== false), useMultiLevelHeaders = options.useMultiLevelHeaders;
        const columns = connector.getSortedColumns(options.usePresentationOrder), columnNames = Object.keys(columns), htmlRows = [], columnsCount = columnNames.length;
        const rowArray = [];
        let tableHead = '';
        // Add the names as the first row if they should be exported
        if (exportNames) {
            const subcategories = [];
            // If using multilevel headers, the first value
            // of each column is a subcategory
            if (useMultiLevelHeaders) {
                for (const name of columnNames) {
                    let column = columns[name];
                    if (!Array.isArray(column)) {
                        // Convert to conventional array from typed array
                        // if needed
                        column = Array.from(column);
                    }
                    const subhead = (column.shift() || '').toString();
                    columns[name] = column;
                    subcategories.push(subhead);
                }
                tableHead = this.getTableHeaderHTML(columnNames, subcategories, options);
            }
            else {
                tableHead = this.getTableHeaderHTML(void 0, columnNames, options);
            }
        }
        for (let columnIndex = 0; columnIndex < columnsCount; columnIndex++) {
            const columnName = columnNames[columnIndex], column = columns[columnName], columnLength = column.length;
            for (let rowIndex = 0; rowIndex < columnLength; rowIndex++) {
                let cellValue = column[rowIndex];
                if (!rowArray[rowIndex]) {
                    rowArray[rowIndex] = [];
                }
                // Alternative: Datatype from HTML attribute with
                // connector.whatIs(columnName)
                if (!(typeof cellValue === 'string' ||
                    typeof cellValue === 'number' ||
                    typeof cellValue === 'undefined')) {
                    cellValue = (cellValue || '').toString();
                }
                rowArray[rowIndex][columnIndex] = this.getCellHTMLFromValue(columnIndex ? 'td' : 'th', null, columnIndex ? '' : 'scope="row"', cellValue);
                // On the final column, push the row to the array
                if (columnIndex === columnsCount - 1) {
                    htmlRows.push('<tr>' +
                        rowArray[rowIndex].join('') +
                        '</tr>');
                }
            }
        }
        let caption = '';
        // Add table caption
        // Current exportdata falls back to chart title
        // but that should probably be handled elsewhere?
        if (options.tableCaption) {
            caption = '<caption class="highcharts-table-caption">' +
                options.tableCaption +
                '</caption>';
        }
        return ('<table>' +
            caption +
            tableHead +
            '<tbody>' +
            htmlRows.join('') +
            '</tbody>' +
            '</table>');
    }
    /**
     * Get table cell markup from row data.
     */
    getCellHTMLFromValue(tag, classes, attrs, value, decimalPoint) {
        let val = value, className = 'text' + (classes ? ' ' + classes : '');
        // Convert to string if number
        if (typeof val === 'number') {
            val = val.toString();
            if (decimalPoint === ',') {
                val = val.replace('.', decimalPoint);
            }
            className = 'number';
        }
        else if (!value) {
            val = '';
            className = 'empty';
        }
        return '<' + tag + (attrs ? ' ' + attrs : '') +
            ' class="' + className + '">' +
            val + '</' + tag + '>';
    }
    /**
     * Get table header markup from row data.
     */
    getTableHeaderHTML(topheaders = [], subheaders = [], options = this.options) {
        const { useMultiLevelHeaders, useRowspanHeaders } = options;
        let html = '<thead>', i = 0, len = subheaders && subheaders.length, next, cur, curColspan = 0, rowspan;
        // Clean up multiple table headers. Chart.getDataRows() returns two
        // levels of headers when using multilevel, not merged. We need to
        // merge identical headers, remove redundant headers, and keep it
        // all marked up nicely.
        if (useMultiLevelHeaders &&
            topheaders &&
            subheaders &&
            !isRowEqual(topheaders, subheaders)) {
            html += '<tr>';
            for (; i < len; ++i) {
                cur = topheaders[i];
                next = topheaders[i + 1];
                if (cur === next) {
                    ++curColspan;
                }
                else if (curColspan) {
                    // Ended colspan
                    // Add cur to HTML with colspan.
                    html += this.getCellHTMLFromValue('th', 'highcharts-table-topheading', 'scope="col" ' +
                        'colspan="' + (curColspan + 1) + '"', cur);
                    curColspan = 0;
                }
                else {
                    // Cur is standalone. If it is same as sublevel,
                    // remove sublevel and add just toplevel.
                    if (cur === subheaders[i]) {
                        if (useRowspanHeaders) {
                            rowspan = 2;
                            delete subheaders[i];
                        }
                        else {
                            rowspan = 1;
                            subheaders[i] = '';
                        }
                    }
                    else {
                        rowspan = 1;
                    }
                    html += this.getCellHTMLFromValue('th', 'highcharts-table-topheading', 'scope="col"' +
                        (rowspan > 1 ?
                            ' valign="top" rowspan="' + rowspan + '"' :
                            ''), cur);
                }
            }
            html += '</tr>';
        }
        // Add the subheaders (the only headers if not using multilevels)
        if (subheaders) {
            html += '<tr>';
            for (i = 0, len = subheaders.length; i < len; ++i) {
                if (typeof subheaders[i] !== 'undefined') {
                    html += this.getCellHTMLFromValue('th', null, 'scope="col"', subheaders[i]);
                }
            }
            html += '</tr>';
        }
        html += '</thead>';
        return html;
    }
    /**
     * Initiates the parsing of the HTML table
     *
     * @param {HTMLTableConverter.UserOptions}[options]
     * Options for the parser
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits CSVDataParser#parse
     * @emits CSVDataParser#afterParse
     * @emits HTMLTableParser#parseError
     */
    parse(options, eventDetail) {
        const converter = this, columns = [], headers = [], parseOptions = HTMLTableConverter_merge(converter.options, options), { endRow, startColumn, endColumn, firstRowAsNames } = parseOptions, tableHTML = parseOptions.tableElement || this.tableElement;
        if (!(tableHTML instanceof HTMLElement)) {
            converter.emit({
                type: 'parseError',
                columns,
                detail: eventDetail,
                headers,
                error: 'Not a valid HTML Table'
            });
            return;
        }
        converter.tableElement = tableHTML;
        converter.tableElementID = tableHTML.id;
        this.emit({
            type: 'parse',
            columns: converter.columns,
            detail: eventDetail,
            headers: converter.headers
        });
        const rows = tableHTML.getElementsByTagName('tr'), rowsCount = rows.length;
        let rowIndex = 0, item, { startRow } = parseOptions;
        // Insert headers from the first row
        if (firstRowAsNames && rowsCount) {
            const items = rows[0].children, itemsLength = items.length;
            for (let i = startColumn; i < itemsLength; i++) {
                if (i > endColumn) {
                    break;
                }
                item = items[i];
                if (item.tagName === 'TD' ||
                    item.tagName === 'TH') {
                    headers.push(item.innerHTML);
                }
            }
            startRow++;
        }
        while (rowIndex < rowsCount) {
            if (rowIndex >= startRow && rowIndex <= endRow) {
                const columnsInRow = rows[rowIndex].children, columnsInRowLength = columnsInRow.length;
                let columnIndex = 0;
                while (columnIndex < columnsInRowLength) {
                    const relativeColumnIndex = columnIndex - startColumn, row = columns[relativeColumnIndex];
                    item = columnsInRow[columnIndex];
                    if ((item.tagName === 'TD' ||
                        item.tagName === 'TH') &&
                        (columnIndex >= startColumn &&
                            columnIndex <= endColumn)) {
                        if (!columns[relativeColumnIndex]) {
                            columns[relativeColumnIndex] = [];
                        }
                        let cellValue = converter.asGuessedType(item.innerHTML);
                        if (cellValue instanceof Date) {
                            cellValue = cellValue.getTime();
                        }
                        columns[relativeColumnIndex][rowIndex - startRow] = cellValue;
                        // Loop over all previous indices and make sure
                        // they are nulls, not undefined.
                        let i = 1;
                        while (rowIndex - startRow >= i &&
                            row[rowIndex - startRow - i] === void 0) {
                            row[rowIndex - startRow - i] = null;
                            i++;
                        }
                    }
                    columnIndex++;
                }
            }
            rowIndex++;
        }
        this.columns = columns;
        this.headers = headers;
        this.emit({
            type: 'afterParse',
            columns,
            detail: eventDetail,
            headers
        });
    }
    /**
     * Handles converting the parsed data to a table.
     *
     * @return {DataTable}
     * Table from the parsed HTML table
     */
    getTable() {
        return Converters_DataConverter.getTableFromColumns(this.columns, this.headers);
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options
 */
HTMLTableConverter.defaultOptions = {
    ...Converters_DataConverter.defaultOptions,
    useRowspanHeaders: true,
    useMultiLevelHeaders: true
};
Converters_DataConverter.registerType('HTMLTable', HTMLTableConverter);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Converters_HTMLTableConverter = (HTMLTableConverter);

;// ./code/grid/es-modules/Data/Connectors/HTMLTableConnector.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Torstein Hønsi
 *  - Gøran Slettemark
 *  - Wojciech Chmiel
 *  - Sophie Bremer
 *
 * */



const { win: HTMLTableConnector_win } = Core_Globals;


const { merge: HTMLTableConnector_merge } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Class that handles creating a data connector from an HTML table.
 *
 * @private
 */
class HTMLTableConnector extends Connectors_DataConnector {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of HTMLTableConnector.
     *
     * @param {HTMLTableConnector.UserOptions} [options]
     * Options for the connector and converter.
     */
    constructor(options) {
        const mergedOptions = HTMLTableConnector_merge(HTMLTableConnector.defaultOptions, options);
        super(mergedOptions);
        this.converter = new Converters_HTMLTableConverter(mergedOptions);
        this.options = mergedOptions;
    }
    /**
     * Initiates creating the dataconnector from the HTML table
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits HTMLTableConnector#load
     * @emits HTMLTableConnector#afterLoad
     * @emits HTMLTableConnector#loadError
     */
    load(eventDetail) {
        const connector = this, converter = connector.converter, table = connector.table, { dataModifier, table: tableHTML } = connector.options;
        connector.emit({
            type: 'load',
            detail: eventDetail,
            table,
            tableElement: connector.tableElement
        });
        let tableElement;
        if (typeof tableHTML === 'string') {
            connector.tableID = tableHTML;
            tableElement = HTMLTableConnector_win.document.getElementById(tableHTML);
        }
        else {
            tableElement = tableHTML;
            connector.tableID = tableElement.id;
        }
        connector.tableElement = tableElement || void 0;
        if (!connector.tableElement) {
            const error = 'HTML table not provided, or element with ID not found';
            connector.emit({
                type: 'loadError',
                detail: eventDetail,
                error,
                table
            });
            return Promise.reject(new Error(error));
        }
        converter.parse(HTMLTableConnector_merge({ tableElement: connector.tableElement }, connector.options), eventDetail);
        // If already loaded, clear the current rows
        table.deleteColumns();
        table.setColumns(converter.getTable().getColumns());
        return connector
            .setModifierOptions(dataModifier)
            .then(() => {
            connector.emit({
                type: 'afterLoad',
                detail: eventDetail,
                table,
                tableElement: connector.tableElement
            });
            return connector;
        });
    }
}
/* *
 *
 *  Static Properties
 *
 * */
HTMLTableConnector.defaultOptions = {
    table: ''
};
Connectors_DataConnector.registerType('HTMLTable', HTMLTableConnector);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Connectors_HTMLTableConnector = ((/* unused pure expression or super */ null && (HTMLTableConnector)));

;// ./code/grid/es-modules/Data/Converters/JSONConverter.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Pawel Lysy
 *
 * */




const { error: JSONConverter_error, isArray: JSONConverter_isArray, merge: JSONConverter_merge, objectEach: JSONConverter_objectEach } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Handles parsing and transforming JSON to a table.
 *
 * @private
 */
class JSONConverter extends Converters_DataConverter {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the JSON parser.
     *
     * @param {JSONConverter.UserOptions} [options]
     * Options for the JSON parser.
     */
    constructor(options) {
        const mergedOptions = JSONConverter_merge(JSONConverter.defaultOptions, options);
        super(mergedOptions);
        /* *
         *
         *  Properties
         *
         * */
        this.columns = [];
        this.headers = [];
        this.options = mergedOptions;
        this.table = new Data_DataTable();
    }
    /* *
     *
     *  Functions
     *
     * */
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
    parse(options, eventDetail) {
        const converter = this;
        options = JSONConverter_merge(converter.options, options);
        const { beforeParse, orientation, firstRowAsNames, columnNames } = options;
        let data = options.data;
        if (!data) {
            return;
        }
        converter.columns = [];
        converter.emit({
            type: 'parse',
            columns: converter.columns,
            detail: eventDetail,
            headers: converter.headers
        });
        if (beforeParse) {
            data = beforeParse(data);
        }
        data = data.slice();
        if (orientation === 'columns') {
            for (let i = 0, iEnd = data.length; i < iEnd; i++) {
                const item = data[i];
                if (!(item instanceof Array)) {
                    return;
                }
                if (converter.headers instanceof Array) {
                    if (firstRowAsNames) {
                        converter.headers.push(`${item.shift()}`);
                    }
                    else if (columnNames && columnNames instanceof Array) {
                        converter.headers.push(columnNames[i]);
                    }
                    converter.table.setColumn(converter.headers[i] || i.toString(), item);
                }
                else {
                    JSONConverter_error('JSONConverter: Invalid `columnNames` option.', false);
                }
            }
        }
        else if (orientation === 'rows') {
            if (firstRowAsNames) {
                converter.headers = data.shift();
            }
            else if (columnNames) {
                converter.headers = columnNames;
            }
            for (let rowIndex = 0, iEnd = data.length; rowIndex < iEnd; rowIndex++) {
                let row = data[rowIndex];
                if (JSONConverter_isArray(row)) {
                    for (let columnIndex = 0, jEnd = row.length; columnIndex < jEnd; columnIndex++) {
                        if (converter.columns.length < columnIndex + 1) {
                            converter.columns.push([]);
                        }
                        converter.columns[columnIndex].push(row[columnIndex]);
                        if (converter.headers instanceof Array) {
                            this.table.setColumn(converter.headers[columnIndex] ||
                                columnIndex.toString(), converter.columns[columnIndex]);
                        }
                        else {
                            JSONConverter_error('JSONConverter: Invalid `columnNames` option.', false);
                        }
                    }
                }
                else {
                    const columnNames = converter.headers;
                    if (columnNames && !(columnNames instanceof Array)) {
                        const newRow = {};
                        JSONConverter_objectEach(columnNames, (arrayWithPath, name) => {
                            newRow[name] = arrayWithPath.reduce((acc, key) => acc[key], row);
                        });
                        row = newRow;
                    }
                    this.table.setRows([row], rowIndex);
                }
            }
        }
        converter.emit({
            type: 'afterParse',
            columns: converter.columns,
            detail: eventDetail,
            headers: converter.headers
        });
    }
    /**
     * Handles converting the parsed data to a table.
     *
     * @return {DataTable}
     * Table from the parsed CSV.
     */
    getTable() {
        return this.table;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options
 */
JSONConverter.defaultOptions = {
    ...Converters_DataConverter.defaultOptions,
    data: [],
    orientation: 'rows'
};
Converters_DataConverter.registerType('JSON', JSONConverter);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Converters_JSONConverter = (JSONConverter);

;// ./code/grid/es-modules/Data/Connectors/JSONConnector.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Pawel Lysy
 *
 * */




const { merge: JSONConnector_merge } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Class that handles creating a DataConnector from JSON structure
 *
 * @private
 */
class JSONConnector extends Connectors_DataConnector {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of JSONConnector.
     *
     * @param {JSONConnector.UserOptions} [options]
     * Options for the connector and converter.
     */
    constructor(options) {
        const mergedOptions = JSONConnector_merge(JSONConnector.defaultOptions, options);
        super(mergedOptions);
        this.converter = new Converters_JSONConverter(mergedOptions);
        this.options = mergedOptions;
        if (mergedOptions.enablePolling) {
            this.startPolling(Math.max(mergedOptions.dataRefreshRate || 0, 1) * 1000);
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initiates the loading of the JSON source to the connector
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits JSONConnector#load
     * @emits JSONConnector#afterLoad
     */
    load(eventDetail) {
        const connector = this, converter = connector.converter, table = connector.table, { data, dataUrl, dataModifier } = connector.options;
        connector.emit({
            type: 'load',
            data,
            detail: eventDetail,
            table
        });
        return Promise
            .resolve(dataUrl ?
            fetch(dataUrl).then((response) => response.json())['catch']((error) => {
                connector.emit({
                    type: 'loadError',
                    detail: eventDetail,
                    error,
                    table
                });
                console.warn(`Unable to fetch data from ${dataUrl}.`); // eslint-disable-line no-console
            }) :
            data || [])
            .then((data) => {
            if (data) {
                // If already loaded, clear the current rows
                table.deleteColumns();
                converter.parse({ data });
                table.setColumns(converter.getTable().getColumns());
            }
            return connector.setModifierOptions(dataModifier).then(() => data);
        })
            .then((data) => {
            connector.emit({
                type: 'afterLoad',
                data,
                detail: eventDetail,
                table
            });
            return connector;
        })['catch']((error) => {
            connector.emit({
                type: 'loadError',
                detail: eventDetail,
                error,
                table
            });
            throw error;
        });
    }
}
/* *
 *
 *  Static Properties
 *
 * */
JSONConnector.defaultOptions = {
    data: [],
    enablePolling: false,
    dataRefreshRate: 0,
    firstRowAsNames: true,
    orientation: 'rows'
};
Connectors_DataConnector.registerType('JSON', JSONConnector);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Connectors_JSONConnector = ((/* unused pure expression or super */ null && (JSONConnector)));

;// ./code/grid/es-modules/Data/Modifiers/InvertModifier.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Wojciech Chmiel
 *  - Sophie Bremer
 *
 * */



const { merge: InvertModifier_merge } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Inverts columns and rows in a table.
 *
 * @private
 */
class InvertModifier extends Modifiers_DataModifier {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the invert modifier.
     *
     * @param {Partial<InvertModifier.Options>} [options]
     * Options to configure the invert modifier.
     */
    constructor(options) {
        super();
        this.options = InvertModifier_merge(InvertModifier.defaultOptions, options);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Applies partial modifications of a cell change to the property `modified`
     * of the given modified table.
     *
     * @param {Highcharts.DataTable} table
     * Modified table.
     *
     * @param {string} columnName
     * Column name of changed cell.
     *
     * @param {number|undefined} rowIndex
     * Row index of changed cell.
     *
     * @param {Highcharts.DataTableCellType} cellValue
     * Changed cell value.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Table with `modified` property as a reference.
     */
    modifyCell(table, columnName, rowIndex, cellValue, eventDetail) {
        const modified = table.modified, modifiedRowIndex = modified.getRowIndexBy('columnNames', columnName);
        if (typeof modifiedRowIndex === 'undefined') {
            modified.setColumns(this.modifyTable(table.clone()).getColumns(), void 0, eventDetail);
        }
        else {
            modified.setCell(`${rowIndex}`, modifiedRowIndex, cellValue, eventDetail);
        }
        return table;
    }
    /**
     * Applies partial modifications of column changes to the property
     * `modified` of the given table.
     *
     * @param {Highcharts.DataTable} table
     * Modified table.
     *
     * @param {Highcharts.DataTableColumnCollection} columns
     * Changed columns as a collection, where the keys are the column names.
     *
     * @param {number} [rowIndex=0]
     * Index of the first changed row.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Table with `modified` property as a reference.
     */
    modifyColumns(table, columns, rowIndex, eventDetail) {
        const modified = table.modified, modifiedColumnNames = (modified.getColumn('columnNames') || []);
        let columnNames = table.getColumnNames(), reset = (table.getRowCount() !== modifiedColumnNames.length);
        if (!reset) {
            for (let i = 0, iEnd = columnNames.length; i < iEnd; ++i) {
                if (columnNames[i] !== modifiedColumnNames[i]) {
                    reset = true;
                    break;
                }
            }
        }
        if (reset) {
            return this.modifyTable(table, eventDetail);
        }
        columnNames = Object.keys(columns);
        for (let i = 0, iEnd = columnNames.length, column, columnName, modifiedRowIndex; i < iEnd; ++i) {
            columnName = columnNames[i];
            column = columns[columnName];
            modifiedRowIndex = (modified.getRowIndexBy('columnNames', columnName) ||
                modified.getRowCount());
            for (let j = 0, j2 = rowIndex, jEnd = column.length; j < jEnd; ++j, ++j2) {
                modified.setCell(`${j2}`, modifiedRowIndex, column[j], eventDetail);
            }
        }
        return table;
    }
    /**
     * Applies partial modifications of row changes to the property `modified`
     * of the given table.
     *
     * @param {Highcharts.DataTable} table
     * Modified table.
     *
     * @param {Array<(Highcharts.DataTableRow|Highcharts.DataTableRowObject)>} rows
     * Changed rows.
     *
     * @param {number} [rowIndex]
     * Index of the first changed row.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Table with `modified` property as a reference.
     */
    modifyRows(table, rows, rowIndex, eventDetail) {
        const columnNames = table.getColumnNames(), modified = table.modified, modifiedColumnNames = (modified.getColumn('columnNames') || []);
        let reset = (table.getRowCount() !== modifiedColumnNames.length);
        if (!reset) {
            for (let i = 0, iEnd = columnNames.length; i < iEnd; ++i) {
                if (columnNames[i] !== modifiedColumnNames[i]) {
                    reset = true;
                    break;
                }
            }
        }
        if (reset) {
            return this.modifyTable(table, eventDetail);
        }
        for (let i = 0, i2 = rowIndex, iEnd = rows.length, row; i < iEnd; ++i, ++i2) {
            row = rows[i];
            if (row instanceof Array) {
                modified.setColumn(`${i2}`, row);
            }
            else {
                for (let j = 0, jEnd = columnNames.length; j < jEnd; ++j) {
                    modified.setCell(`${i2}`, j, row[columnNames[j]], eventDetail);
                }
            }
        }
        return table;
    }
    /**
     * Inverts rows and columns in the table.
     *
     * @param {DataTable} table
     * Table to invert.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table with inverted `modified` property as a reference.
     */
    modifyTable(table, eventDetail) {
        const modifier = this;
        modifier.emit({ type: 'modify', detail: eventDetail, table });
        const modified = table.modified;
        if (table.hasColumns(['columnNames'])) { // Inverted table
            const columnNamesColumn = ((table.deleteColumns(['columnNames']) || {})
                .columnNames || []), columns = {}, columnNames = [];
            for (let i = 0, iEnd = columnNamesColumn.length; i < iEnd; ++i) {
                columnNames.push('' + columnNamesColumn[i]);
            }
            for (let i = 0, iEnd = table.getRowCount(), row; i < iEnd; ++i) {
                row = table.getRow(i);
                if (row) {
                    columns[columnNames[i]] = row;
                }
            }
            modified.deleteColumns();
            modified.setColumns(columns);
        }
        else { // Regular table
            const columns = {};
            for (let i = 0, iEnd = table.getRowCount(), row; i < iEnd; ++i) {
                row = table.getRow(i);
                if (row) {
                    columns[`${i}`] = row;
                }
            }
            columns.columnNames = table.getColumnNames();
            modified.deleteColumns();
            modified.setColumns(columns);
        }
        modifier.emit({ type: 'afterModify', detail: eventDetail, table });
        return table;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options for the invert modifier.
 */
InvertModifier.defaultOptions = {
    type: 'Invert'
};
Modifiers_DataModifier.registerType('Invert', InvertModifier);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Modifiers_InvertModifier = ((/* unused pure expression or super */ null && (InvertModifier)));

;// ./code/grid/es-modules/Data/Modifiers/RangeModifier.js
/* *
 *
 *  (c) 2009-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Dawid Dragula
 *
 * */



const { merge: RangeModifier_merge } = Core_Utilities;
/* *
 *
 *  Class
 *
 * */
/**
 * Filters out table rows with a specific value range.
 *
 */
class RangeModifier extends Modifiers_DataModifier {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the range modifier.
     *
     * @param {Partial<RangeModifier.Options>} [options]
     * Options to configure the range modifier.
     */
    constructor(options) {
        super();
        this.options = RangeModifier_merge(RangeModifier.defaultOptions, options);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Replaces table rows with filtered rows.
     *
     * @param {DataTable} table
     * Table to modify.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table with `modified` property as a reference.
     */
    modifyTable(table, eventDetail) {
        const modifier = this;
        modifier.emit({ type: 'modify', detail: eventDetail, table });
        let indexes = [];
        const { additive, ranges, strict } = modifier.options;
        if (ranges.length) {
            const modified = table.modified;
            let columns = table.getColumns(), rows = [];
            for (let i = 0, iEnd = ranges.length, range, rangeColumn; i < iEnd; ++i) {
                range = ranges[i];
                if (strict &&
                    typeof range.minValue !== typeof range.maxValue) {
                    continue;
                }
                if (i > 0 && !additive) {
                    modified.deleteRows();
                    modified.setRows(rows);
                    modified.setOriginalRowIndexes(indexes, true);
                    columns = modified.getColumns();
                    rows = [];
                    indexes = [];
                }
                rangeColumn = (columns[range.column] || []);
                for (let j = 0, jEnd = rangeColumn.length, cell, row, originalRowIndex; j < jEnd; ++j) {
                    cell = rangeColumn[j];
                    switch (typeof cell) {
                        default:
                            continue;
                        case 'boolean':
                        case 'number':
                        case 'string':
                            break;
                    }
                    if (strict &&
                        typeof cell !== typeof range.minValue) {
                        continue;
                    }
                    if (cell >= range.minValue &&
                        cell <= range.maxValue) {
                        if (additive) {
                            row = table.getRow(j);
                            originalRowIndex = table.getOriginalRowIndex(j);
                        }
                        else {
                            row = modified.getRow(j);
                            originalRowIndex = modified.getOriginalRowIndex(j);
                        }
                        if (row) {
                            rows.push(row);
                            indexes.push(originalRowIndex);
                        }
                    }
                }
            }
            modified.deleteRows();
            modified.setRows(rows);
            modified.setOriginalRowIndexes(indexes);
        }
        modifier.emit({ type: 'afterModify', detail: eventDetail, table });
        return table;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options for the range modifier.
 */
RangeModifier.defaultOptions = {
    type: 'Range',
    ranges: []
};
Modifiers_DataModifier.registerType('Range', RangeModifier);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Modifiers_RangeModifier = ((/* unused pure expression or super */ null && (RangeModifier)));

;// ./code/grid/es-modules/masters/grid-lite.src.js

















// Fill registries








/* *
 *
 *  Namespace
 *
 * */
const G = Grid_Core_Globals;
G.AST = HTML_AST;
G.DataConnector = Connectors_DataConnector;
G.DataCursor = Data_DataCursor;
G.DataConverter = Converters_DataConverter;
G.Grid = Core_Grid;
G.grid = Core_Grid.grid;
G.grids = Core_Grid.grids;
G.DataModifier = Modifiers_DataModifier;
G.DataPool = Data_DataPool;
G.DataTable = Data_DataTable;
G.defaultOptions = Core_Defaults.defaultOptions;
G.isHighContrastModeActive = HighContrastMode.isHighContrastModeActive;
G.Templating = Core_Templating;
G.product = 'Grid Lite';
G.setOptions = Core_Defaults.setOptions;
G.merge = Core_Utilities.merge;
G.Table = G.Table || Table_Table;
Credits_CreditsLiteComposition.compose(G.Grid, G.Table);
/* *
 *
 *  Classic Export
 *
 * */
if (!G.win.Grid) {
    G.win.Grid = G;
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const grid_lite_src = (G);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});