/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\nhtml body {\n  background: linear-gradient(to bottom, #56ccf2, #2f80ed);\n  font-family: sans-serif;\n  display: flex;\n  justify-content: flex-end;\n  font-family: \"Roboto\", sans-serif; }\n\n.bg-video {\n  position: absolute;\n  top: -10%;\n  left: -10%;\n  width: 120%;\n  height: 120%;\n  object-fit: cover;\n  z-index: -1;\n  filter: blur(15px); }\n\nmain {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: flex-start;\n  box-sizing: border-box;\n  padding: 40px; }\n  main .current {\n    width: 100%;\n    padding: 16px;\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 10px; }\n  main .main {\n    width: 100%;\n    display: none;\n    align-items: flex-start;\n    color: white;\n    flex-direction: column; }\n    main .main--visible {\n      display: flex; }\n    main .main-icon {\n      position: absolute;\n      width: 320px;\n      filter: blur(3px);\n      z-index: -1;\n      top: 0;\n      left: 0;\n      opacity: 0.5; }\n    main .main-temp > div {\n      display: flex;\n      gap: 24px; }\n      main .main-temp > div .main-temp-time {\n        font-size: 18px; }\n      main .main-temp > div .main-temp-label {\n        font-size: 12px;\n        margin-top: 14px;\n        display: block; }\n    main .main-temp-current {\n      font-size: 130px;\n      letter-spacing: -12px; }\n    main .main-info {\n      display: flex;\n      gap: 40px;\n      align-items: flex-end; }\n      main .main-info-city {\n        font-size: 60px;\n        margin-left: 30px; }\n      main .main-info-weather {\n        font-size: 20px;\n        margin-bottom: 6px; }\n    main .main-wind {\n      display: flex;\n      align-items: center;\n      position: relative; }\n      main .main-wind img {\n        width: 16px;\n        margin-left: 10px;\n        top: 0;\n        right: -24px; }\n      main .main-wind span {\n        font-size: 18px; }\n  main .forecast {\n    margin-top: 40px;\n    display: flex;\n    gap: 10px; }\n    main .forecast-item {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      border-radius: 8px;\n      background: rgba(0, 0, 0, 0.1);\n      padding: 10px; }\n\naside {\n  flex-shrink: 0;\n  width: 400px;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 20px;\n  color: rgba(255, 255, 255, 0.7);\n  margin: 10px;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column; }\n\n.toast {\n  position: absolute;\n  top: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #d83232;\n  color: #ffffff;\n  border-radius: 4px;\n  padding: 5px 30px;\n  opacity: 0; }\n  .toast p {\n    margin: 0; }\n  .toast.visible {\n    animation: showToast 2.5s forwards; }\n\n.inputWrapper {\n  width: 100%;\n  display: flex;\n  gap: 16px; }\n  .inputWrapper .input {\n    border: 0;\n    padding: 4px 8px;\n    background: transparent;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n    width: 100%;\n    color: white; }\n    .inputWrapper .input::placeholder {\n      color: rgba(255, 255, 255, 0.8); }\n  .inputWrapper .button {\n    border: 0;\n    padding: 4px 8px;\n    border-radius: 15px;\n    background: rgba(255, 255, 255, 0.1);\n    position: relative;\n    width: 30px;\n    height: 30px;\n    padding: 0;\n    flex-shrink: 0; }\n    .inputWrapper .button:after, .inputWrapper .button:before {\n      content: \"\";\n      display: block;\n      background-color: white;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%); }\n    .inputWrapper .button:before {\n      height: 14px;\n      width: 2px; }\n    .inputWrapper .button:after {\n      height: 2px;\n      width: 14px; }\n    .inputWrapper .button:disabled {\n      background: none; }\n      .inputWrapper .button:disabled:after, .inputWrapper .button:disabled:before {\n        background: rgba(255, 255, 255, 0.5); }\n\n.city-list {\n  list-style: none;\n  margin-top: 20px;\n  overflow: auto;\n  height: 100%; }\n  .city-list > li {\n    display: flex;\n    align-items: center;\n    gap: 4px; }\n  .city-list-item {\n    padding: 10px 8px;\n    background: none;\n    border: 0;\n    width: 100%;\n    color: inherit;\n    text-align: left;\n    cursor: pointer;\n    border-radius: 5px;\n    transition: background-color 0.2s; }\n    .city-list-item:hover {\n      background-color: rgba(255, 255, 255, 0.1); }\n    .city-list-item:focus {\n      outline: 0;\n      box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.3); }\n    .city-list-item > div {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n      .city-list-item > div > div {\n        display: flex;\n        flex-direction: column;\n        gap: 5px; }\n        .city-list-item > div > div > p {\n          font-size: 2em; }\n    .city-list-item-removeBtn {\n      border: 0;\n      padding: 4px 8px;\n      border-radius: 15px;\n      position: relative;\n      width: 20px;\n      height: 20px;\n      padding: 0;\n      flex-shrink: 0;\n      cursor: pointer;\n      background: transparent;\n      transition: background 0.2s; }\n      .city-list-item-removeBtn:hover {\n        background-color: rgba(216, 50, 50, 0.8); }\n      .city-list-item-removeBtn:after, .city-list-item-removeBtn:before {\n        content: \"\";\n        display: block;\n        background-color: white;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%) rotate(45deg); }\n      .city-list-item-removeBtn:before {\n        height: 10px;\n        width: 2px; }\n      .city-list-item-removeBtn:after {\n        height: 2px;\n        width: 10px; }\n\n@keyframes showToast {\n  0% {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-100%); }\n  20% {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0); }\n  80% {\n    opacity: 1; }\n  99% {\n    opacity: 0;\n    display: block; }\n  100% {\n    display: none; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/UI.ts":
/*!*******************!*\
  !*** ./src/UI.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./style.scss */ "./src/style.scss");
const apiCaller_1 = __webpack_require__(/*! ./apiCaller */ "./src/apiCaller.ts");
const date_utils_1 = __webpack_require__(/*! ./date-utils */ "./src/date-utils.ts");
var LIST_ELEMTNS;
(function (LIST_ELEMTNS) {
    LIST_ELEMTNS["name"] = "name";
    LIST_ELEMTNS["temp"] = "temp";
    LIST_ELEMTNS["pressure"] = "press";
    LIST_ELEMTNS["icon"] = "icon";
})(LIST_ELEMTNS || (LIST_ELEMTNS = {}));
var WEATHER_TYPES;
(function (WEATHER_TYPES) {
    WEATHER_TYPES["thunderstorm"] = "2";
    WEATHER_TYPES["drizzle"] = "3";
    WEATHER_TYPES["rain"] = "5";
    WEATHER_TYPES["snow"] = "6";
    WEATHER_TYPES["atmosphere"] = "7";
    WEATHER_TYPES["clear"] = "8";
})(WEATHER_TYPES || (WEATHER_TYPES = {}));
class UI {
    constructor(main) {
        this.mainContext = main;
    }
    showApiError() {
        const toastEl = document.getElementById('errorToast');
        toastEl.classList.add('visible');
        toastEl.addEventListener("animationend", function handler(e) {
            toastEl.classList.remove('visible');
            e.currentTarget.removeEventListener(e.type, handler);
        });
    }
    renderMainView(forecastData, activeCity) {
        if (forecastData) {
            document.getElementById('main').classList.add('main--visible');
            this.switchTheme(activeCity.weather[0].id);
            this.renderForecast(forecastData);
            document.getElementById('mainCity').innerHTML = activeCity.name;
            document.getElementById('mainWeather').innerHTML = activeCity.weather[0].description;
            document.getElementById('mainTime').innerHTML = date_utils_1.getDay(activeCity.dt, activeCity.timezone);
            const iconEl = document.getElementById("mainIcon");
            iconEl.src = `http://openweathermap.org/img/wn/${activeCity.weather[0].icon}@2x.png`;
            iconEl.alt = activeCity.weather[0].description;
            iconEl.title = activeCity.weather[0].description;
            document.getElementById('mainTemp').innerHTML = `${activeCity.main.temp.toFixed(1)}°C`;
            document.getElementById('mainTempFeels').innerHTML = `${activeCity.main.feels_like}°C`;
            document.getElementById('mainWindSpeed').innerHTML = `${activeCity.wind.speed}m/s`;
            document.getElementById('mainWindIcon').style.transform = `rotate(${activeCity.wind.deg}deg)`;
        }
    }
    renderForecast(forecastData) {
        const dailyData = forecastData.daily.slice(1);
        const wrapper = document.getElementById('forecast');
        wrapper.innerHTML = null;
        dailyData.forEach((data, index) => {
            const item = document.createElement('li');
            item.className = "forecast-item";
            const itemDate = document.createElement('p');
            itemDate.innerText = index === 0 ? 'tomorrow' : date_utils_1.getDay(data.dt, forecastData.timezone_offset);
            const itemIcon = document.createElement('img');
            itemIcon.innerText = date_utils_1.getDay(data.dt, forecastData.timezone_offset);
            itemIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            itemIcon.alt = data.weather[0].description;
            itemIcon.title = data.weather[0].description;
            const itemTemp = document.createElement('p');
            itemTemp.innerText = `${data.temp.min.toFixed(1)}°C / ${data.temp.max.toFixed(1)}°C`;
            item.appendChild(itemDate);
            item.appendChild(itemIcon);
            item.appendChild(itemTemp);
            wrapper.appendChild(item);
        });
    }
    switchTheme(weatherId) {
        const firstNumber = String(weatherId)[0];
        const video = document.getElementById('bgVideo');
        let videoSrc;
        switch (firstNumber) {
            case WEATHER_TYPES.thunderstorm:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/044/582/original/dark-forest.mp4';
                break;
            case WEATHER_TYPES.drizzle:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/044/767/original/P1140828.mp4';
                break;
            case WEATHER_TYPES.rain:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/049/047/original/panning-and-close-up-to-rain-drop-on-the-glass-of-window.mp4';
                break;
            case WEATHER_TYPES.snow:
                videoSrc = 'https://cdn.videvo.net/videvo_files/video/free/2015-09/small_watermarked/Slow_Snow_Seg_Comp_Flakes_preview.webm';
                break;
            case WEATHER_TYPES.atmosphere:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/034/069/original/Mountain-rain5.mp4';
                break;
            case WEATHER_TYPES.clear:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/039/466/original/58_28_08_19.mp4';
                break;
            default:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/039/466/original/58_28_08_19.mp4';
                break;
        }
        if (weatherId > 800)
            videoSrc = 'https://cdn.videvo.net/videvo_files/video/free/2020-07/small_watermarked/06_1596083776_preview.webm';
        video.src = videoSrc;
    }
    removeCity(id) {
        const allCities = JSON.parse(localStorage.getItem(apiCaller_1.DATA_KEY));
        if (allCities && id) {
            const filterdCities = allCities.filter((v) => v.id !== id);
            localStorage.setItem(apiCaller_1.DATA_KEY, JSON.stringify(filterdCities));
            this.renderWeatherList(filterdCities, true);
        }
    }
    populateListElement(element, weatherData) {
        const parentId = element.id;
        const iconEl = document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.icon}`);
        iconEl.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        iconEl.alt = weatherData.weather[0].description;
        iconEl.title = weatherData.weather[0].description;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.name}`).innerHTML = weatherData.name;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.pressure}`).innerHTML = `${weatherData.main.pressure} hPA`;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.temp}`).innerHTML = `${weatherData.main.temp.toFixed(1)}°C`;
        return element;
    }
    renderWeatherElement(weatherData, elementId) {
        const wrapper = document.getElementById('cityList');
        const element = document.createElement('li');
        element.id = elementId;
        const elementBtn = document.createElement('button');
        const elementBtnContainer = document.createElement('div');
        const elementBtnContainerChild = document.createElement('div');
        elementBtn.className = "city-list-item";
        const nameEl = document.createElement('p');
        nameEl.id = `${elementId}_${LIST_ELEMTNS.name}`;
        elementBtnContainerChild.appendChild(nameEl);
        const tempEl = document.createElement('span');
        tempEl.id = `${elementId}_${LIST_ELEMTNS.temp}`;
        elementBtnContainerChild.appendChild(tempEl);
        const pressEl = document.createElement('span');
        pressEl.id = `${elementId}_${LIST_ELEMTNS.pressure}`;
        elementBtnContainerChild.appendChild(pressEl);
        const iconEl = document.createElement('img');
        iconEl.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        iconEl.id = `${elementId}_${LIST_ELEMTNS.icon}`;
        const removeBtnEl = document.createElement('button');
        removeBtnEl.className = "city-list-item-removeBtn";
        removeBtnEl.addEventListener('click', (e) => this.removeCity(weatherData.id));
        elementBtn.addEventListener('click', () => {
            this.mainContext.changeActiveCity(weatherData.id);
        });
        elementBtnContainer.appendChild(elementBtnContainerChild);
        elementBtnContainer.appendChild(iconEl);
        elementBtn.appendChild(elementBtnContainer);
        element.appendChild(elementBtn);
        element.appendChild(removeBtnEl);
        wrapper.appendChild(element);
        this.populateListElement(element, weatherData);
    }
    renderWeatherList(weatherData, force = false) {
        if (force) {
            const wrapper = document.getElementById('cityList');
            wrapper.innerHTML = null;
        }
        weatherData.forEach((data) => {
            const elementId = `listEl_${data.id}`;
            const element = document.getElementById(elementId);
            if (element)
                this.populateListElement(element, data);
            else
                this.renderWeatherElement(data, elementId);
        });
    }
}
exports.UI = UI;


/***/ }),

/***/ "./src/apiCaller.ts":
/*!**************************!*\
  !*** ./src/apiCaller.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATA_KEY = "weather_data";
const API_KEY = "cbeeb4917456a9dc5bef570967628521";
class ApiCaller {
    constructor() {
        this.callData();
    }
    callData(city) {
        return __awaiter(this, void 0, void 0, function* () {
            if (city) {
                const weather = yield this.getWeatherData(city);
                if (weather && weather.cod === 200) {
                    this.saveData(weather);
                }
                return weather.cod;
            }
        });
    }
    refreshData() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const currentCities = ((_a = JSON.parse(localStorage.getItem(exports.DATA_KEY))) === null || _a === void 0 ? void 0 : _a.map(v => v.name)) || [];
            const newCities = Promise.all(currentCities.map((city) => __awaiter(this, void 0, void 0, function* () {
                const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
                const weatherResp = yield fetch(apiURL);
                const weatherData = yield weatherResp.json();
                this.saveData(weatherData);
                return weatherData;
            })));
            return newCities;
        });
    }
    getWeatherData(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
            const weatherResp = yield fetch(apiURL);
            const weatherData = yield weatherResp.json();
            return weatherData;
        });
    }
    getForecastData(lat, long) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=${API_KEY}&units=metric`;
            const forecastResp = yield fetch(apiURL);
            const forecastData = yield forecastResp.json();
            forecastData.daily = forecastData.daily.slice(0, 6);
            return forecastData;
        });
    }
    saveData(data) {
        const currentData = this.getData();
        const indexInLS = currentData.findIndex((val) => val.id === data.id);
        if (indexInLS !== -1) {
            currentData[indexInLS] = data;
            localStorage.setItem(exports.DATA_KEY, JSON.stringify(currentData));
            return;
        }
        localStorage.setItem(exports.DATA_KEY, JSON.stringify([...currentData, data]));
    }
    getData() {
        const data = localStorage.getItem(exports.DATA_KEY);
        if (data)
            return JSON.parse(data);
        return [];
    }
}
exports.ApiCaller = ApiCaller;


/***/ }),

/***/ "./src/date-utils.ts":
/*!***************************!*\
  !*** ./src/date-utils.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getDay(dt, timezoneOffset) {
    const date = new Date((dt + timezoneOffset) * 1000);
    const stringDate = date.toLocaleDateString();
    return stringDate;
}
exports.getDay = getDay;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./style.scss */ "./src/style.scss");
const apiCaller_1 = __webpack_require__(/*! ./apiCaller */ "./src/apiCaller.ts");
const UI_1 = __webpack_require__(/*! ./UI */ "./src/UI.ts");
const ACTIVE_CITY_KEY = "active_city";
class Main {
    constructor() {
        this.activeCity = Number(localStorage.getItem(ACTIVE_CITY_KEY));
        this.apiCaller = new apiCaller_1.ApiCaller();
        this.UI = new UI_1.UI(this);
        this.weatherData = this.apiCaller.getData();
        this.setActiveCity();
        this.initRefresher();
        this.bindInputEvents();
        this.UI.renderWeatherList(this.weatherData);
    }
    initRefresher() {
        setInterval(() => {
            this.apiCaller.refreshData().then(currentData => {
                this.weatherData = currentData;
                this.UI.renderWeatherList(this.weatherData);
            });
            if (this.activeCity) {
                this.setActiveCity();
            }
        }, 60000);
    }
    bindInputEvents() {
        const weatherForm = document.getElementById('weatherForm');
        const cityButton = document.getElementById('cityButton');
        const cityInput = document.getElementById('cityInput');
        weatherForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.apiCaller.callData(cityInput.value).then((code) => {
                if (Number(code) !== 200) {
                    this.UI.showApiError();
                }
                this.weatherData = this.apiCaller.getData();
                this.UI.renderWeatherList(this.weatherData);
            });
            cityInput.value = '';
            cityButton.disabled = true;
        });
        cityInput.addEventListener('input', (event) => {
            if (event.target.value.length > 0)
                cityButton.disabled = false;
            else
                cityButton.disabled = true;
        });
    }
    setActiveCity() {
        const activeCity = this.weatherData.find(city => city.id === this.activeCity);
        if (activeCity) {
            this.apiCaller.getForecastData(activeCity.coord.lat, activeCity.coord.lon).then(activeForecast => {
                this.activeCityData = activeForecast;
                this.UI.renderMainView(this.activeCityData, activeCity);
            });
        }
    }
    changeActiveCity(index) {
        this.activeCity = index;
        localStorage.setItem(ACTIVE_CITY_KEY, String(index));
        this.setActiveCity();
    }
}
exports.Main = Main;
new Main();


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VJLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlDYWxsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGUtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FB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LENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGFBQWE7UUFDVCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlFLElBQUcsVUFBVSxFQUFFO1lBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQzdGLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQzVELENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBeUI7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FFSjtBQW5FRCxvQkFtRUM7QUFHRCxJQUFJLElBQUksRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7QUMvRVgsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxtTUFBK0Y7O0FBRWpJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7IH1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lOyB9XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuaHRtbCBib2R5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM1NmNjZjIsICMyZjgwZWQpO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbi5iZy12aWRlbyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMCU7XFxuICBsZWZ0OiAtMTAlO1xcbiAgd2lkdGg6IDEyMCU7XFxuICBoZWlnaHQ6IDEyMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHotaW5kZXg6IC0xO1xcbiAgZmlsdGVyOiBibHVyKDE1cHgpOyB9XFxuXFxubWFpbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA0MHB4OyB9XFxuICBtYWluIC5jdXJyZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxcbiAgbWFpbiAubWFpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgIG1haW4gLm1haW4tLXZpc2libGUge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgbWFpbiAubWFpbi1pY29uIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDMyMHB4O1xcbiAgICAgIGZpbHRlcjogYmx1cigzcHgpO1xcbiAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIG9wYWNpdHk6IDAuNTsgfVxcbiAgICBtYWluIC5tYWluLXRlbXAgPiBkaXYge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZ2FwOiAyNHB4OyB9XFxuICAgICAgbWFpbiAubWFpbi10ZW1wID4gZGl2IC5tYWluLXRlbXAtdGltZSB7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7IH1cXG4gICAgICBtYWluIC5tYWluLXRlbXAgPiBkaXYgLm1haW4tdGVtcC1sYWJlbCB7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gICAgbWFpbiAubWFpbi10ZW1wLWN1cnJlbnQge1xcbiAgICAgIGZvbnQtc2l6ZTogMTMwcHg7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xMnB4OyB9XFxuICAgIG1haW4gLm1haW4taW5mbyB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IDQwcHg7XFxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyB9XFxuICAgICAgbWFpbiAubWFpbi1pbmZvLWNpdHkge1xcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7IH1cXG4gICAgICBtYWluIC5tYWluLWluZm8td2VhdGhlciB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7IH1cXG4gICAgbWFpbiAubWFpbi13aW5kIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgICAgbWFpbiAubWFpbi13aW5kIGltZyB7XFxuICAgICAgICB3aWR0aDogMTZweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgcmlnaHQ6IC0yNHB4OyB9XFxuICAgICAgbWFpbiAubWFpbi13aW5kIHNwYW4ge1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4OyB9XFxuICBtYWluIC5mb3JlY2FzdCB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDsgfVxcbiAgICBtYWluIC5mb3JlY2FzdC1pdGVtIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7IH1cXG5cXG5hc2lkZSB7XFxuICBmbGV4LXNocmluazogMDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuLnRvYXN0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGJhY2tncm91bmQ6ICNkODMyMzI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDVweCAzMHB4O1xcbiAgb3BhY2l0eTogMDsgfVxcbiAgLnRvYXN0IHAge1xcbiAgICBtYXJnaW46IDA7IH1cXG4gIC50b2FzdC52aXNpYmxlIHtcXG4gICAgYW5pbWF0aW9uOiBzaG93VG9hc3QgMi41cyBmb3J3YXJkczsgfVxcblxcbi5pbnB1dFdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4OyB9XFxuICAuaW5wdXRXcmFwcGVyIC5pbnB1dCB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogd2hpdGU7IH1cXG4gICAgLmlucHV0V3JhcHBlciAuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyB9XFxuICAuaW5wdXRXcmFwcGVyIC5idXR0b24ge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmbGV4LXNocmluazogMDsgfVxcbiAgICAuaW5wdXRXcmFwcGVyIC5idXR0b246YWZ0ZXIsIC5pbnB1dFdyYXBwZXIgLmJ1dHRvbjpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cXG4gICAgLmlucHV0V3JhcHBlciAuYnV0dG9uOmJlZm9yZSB7XFxuICAgICAgaGVpZ2h0OiAxNHB4O1xcbiAgICAgIHdpZHRoOiAycHg7IH1cXG4gICAgLmlucHV0V3JhcHBlciAuYnV0dG9uOmFmdGVyIHtcXG4gICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICB3aWR0aDogMTRweDsgfVxcbiAgICAuaW5wdXRXcmFwcGVyIC5idXR0b246ZGlzYWJsZWQge1xcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7IH1cXG4gICAgICAuaW5wdXRXcmFwcGVyIC5idXR0b246ZGlzYWJsZWQ6YWZ0ZXIsIC5pbnB1dFdyYXBwZXIgLmJ1dHRvbjpkaXNhYmxlZDpiZWZvcmUge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLmNpdHktbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuICAuY2l0eS1saXN0ID4gbGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDsgfVxcbiAgLmNpdHktbGlzdC1pdGVtIHtcXG4gICAgcGFkZGluZzogMTBweCA4cHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzOyB9XFxuICAgIC5jaXR5LWxpc3QtaXRlbTpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9XFxuICAgIC5jaXR5LWxpc3QtaXRlbTpmb2N1cyB7XFxuICAgICAgb3V0bGluZTogMDtcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7IH1cXG4gICAgLmNpdHktbGlzdC1pdGVtID4gZGl2IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAgICAgLmNpdHktbGlzdC1pdGVtID4gZGl2ID4gZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiA1cHg7IH1cXG4gICAgICAgIC5jaXR5LWxpc3QtaXRlbSA+IGRpdiA+IGRpdiA+IHAge1xcbiAgICAgICAgICBmb250LXNpemU6IDJlbTsgfVxcbiAgICAuY2l0eS1saXN0LWl0ZW0tcmVtb3ZlQnRuIHtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogMjBweDtcXG4gICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBmbGV4LXNocmluazogMDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzOyB9XFxuICAgICAgLmNpdHktbGlzdC1pdGVtLXJlbW92ZUJ0bjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNiwgNTAsIDUwLCAwLjgpOyB9XFxuICAgICAgLmNpdHktbGlzdC1pdGVtLXJlbW92ZUJ0bjphZnRlciwgLmNpdHktbGlzdC1pdGVtLXJlbW92ZUJ0bjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpOyB9XFxuICAgICAgLmNpdHktbGlzdC1pdGVtLXJlbW92ZUJ0bjpiZWZvcmUge1xcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IDJweDsgfVxcbiAgICAgIC5jaXR5LWxpc3QtaXRlbS1yZW1vdmVCdG46YWZ0ZXIge1xcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICB3aWR0aDogMTBweDsgfVxcblxcbkBrZXlmcmFtZXMgc2hvd1RvYXN0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTEwMCUpOyB9XFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgwKTsgfVxcbiAgODAlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgOTklIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIDEwMCUge1xcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5cclxuaW1wb3J0IHsgSUZvcmVjYXN0RGF0YSwgSVdlYXRoZXJEYXRhIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuaW1wb3J0IHsgREFUQV9LRVkgfSBmcm9tICcuL2FwaUNhbGxlcic7XHJcbmltcG9ydCB7IE1haW4gfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHsgZ2V0RGF5IH0gZnJvbSAnLi9kYXRlLXV0aWxzJztcclxuXHJcbmVudW0gTElTVF9FTEVNVE5TIHtcclxuICAgIG5hbWUgPSAnbmFtZScsXHJcbiAgICB0ZW1wID0gJ3RlbXAnLFxyXG4gICAgcHJlc3N1cmUgPSAncHJlc3MnLFxyXG4gICAgaWNvbiA9ICdpY29uJ1xyXG59XHJcblxyXG5lbnVtIFdFQVRIRVJfVFlQRVMge1xyXG4gICAgdGh1bmRlcnN0b3JtID0gJzInLFxyXG4gICAgZHJpenpsZSA9ICczJyxcclxuICAgIHJhaW4gPSAnNScsXHJcbiAgICBzbm93ID0gJzYnLFxyXG4gICAgYXRtb3NwaGVyZSA9ICc3JyxcclxuICAgIGNsZWFyID0gJzgnXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVSSB7XHJcbiAgICBtYWluQ29udGV4dDogTWFpbjtcclxuICAgIGNvbnN0cnVjdG9yKG1haW46IE1haW4pIHtcclxuICAgICAgICB0aGlzLm1haW5Db250ZXh0ID0gbWFpbjtcclxuICAgIH1cclxuICAgIHNob3dBcGlFcnJvcigpIHtcclxuICAgICAgICBjb25zdCB0b2FzdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yVG9hc3QnKTtcclxuICAgICAgICAvLyBhZGQgY2xhc3MgdGhhdCBhbmltYXRlcyB0aGUgdG9hc3RcclxuICAgICAgICB0b2FzdEVsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgICAgICB0b2FzdEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gaGFuZGxlcihlKSB7XHJcbiAgICAgICAgICAgIHRvYXN0RWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgYGFuaW1hdGlvbmVuZGAgZXZlbnQgYWZ0ZXIgZXhlY3V0aW9uIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXHJcbiAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGUudHlwZSwgaGFuZGxlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIG1haW4gVUlcclxuICAgIHJlbmRlck1haW5WaWV3KGZvcmVjYXN0RGF0YTogSUZvcmVjYXN0RGF0YSwgYWN0aXZlQ2l0eTogSVdlYXRoZXJEYXRhKSB7XHJcbiAgICAgICAgaWYgKGZvcmVjYXN0RGF0YSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLmNsYXNzTGlzdC5hZGQoJ21haW4tLXZpc2libGUnKTtcclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUaGVtZShhY3RpdmVDaXR5LndlYXRoZXJbMF0uaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckZvcmVjYXN0KGZvcmVjYXN0RGF0YSk7XHJcbiAgICAgICAgICAgIC8vIGdlbmVyYWxcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5DaXR5JykuaW5uZXJIVE1MID0gYWN0aXZlQ2l0eS5uYW1lO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbldlYXRoZXInKS5pbm5lckhUTUwgPSBhY3RpdmVDaXR5LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluVGltZScpLmlubmVySFRNTCA9IGdldERheShhY3RpdmVDaXR5LmR0LCBhY3RpdmVDaXR5LnRpbWV6b25lKTtcclxuICAgICAgICAgICAgLy8gaWNvblxyXG4gICAgICAgICAgICBjb25zdCBpY29uRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5JY29uXCIpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGljb25FbC5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHthY3RpdmVDaXR5LndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcclxuICAgICAgICAgICAgaWNvbkVsLmFsdCA9IGFjdGl2ZUNpdHkud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgaWNvbkVsLnRpdGxlID0gYWN0aXZlQ2l0eS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAvLyB0ZW1wXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluVGVtcCcpLmlubmVySFRNTCA9IGAke2FjdGl2ZUNpdHkubWFpbi50ZW1wLnRvRml4ZWQoMSl9wrBDYDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5UZW1wRmVlbHMnKS5pbm5lckhUTUwgPSBgJHthY3RpdmVDaXR5Lm1haW4uZmVlbHNfbGlrZX3CsENgO1xyXG4gICAgICAgICAgICAvLyB3aW5kXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluV2luZFNwZWVkJykuaW5uZXJIVE1MID0gYCR7YWN0aXZlQ2l0eS53aW5kLnNwZWVkfW0vc2A7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluV2luZEljb24nKS5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7YWN0aXZlQ2l0eS53aW5kLmRlZ31kZWcpYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRm9yZWNhc3QoZm9yZWNhc3REYXRhOiBJRm9yZWNhc3REYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZGFpbHlEYXRhID0gZm9yZWNhc3REYXRhLmRhaWx5LnNsaWNlKDEpO1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yZWNhc3QnKTtcclxuICAgICAgICB3cmFwcGVyLmlubmVySFRNTCA9IG51bGw7XHJcbiAgICAgICAgZGFpbHlEYXRhLmZvckVhY2goKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTmFtZSA9IFwiZm9yZWNhc3QtaXRlbVwiO1xyXG4gICAgICAgICAgICAvLyBjaGlsZCBpdGVtc1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgaXRlbURhdGUuaW5uZXJUZXh0ID0gaW5kZXggPT09IDAgPyAndG9tb3Jyb3cnIDogZ2V0RGF5KGRhdGEuZHQsIGZvcmVjYXN0RGF0YS50aW1lem9uZV9vZmZzZXQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXRlbUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaXRlbUljb24uaW5uZXJUZXh0ID0gZ2V0RGF5KGRhdGEuZHQsIGZvcmVjYXN0RGF0YS50aW1lem9uZV9vZmZzZXQpO1xyXG4gICAgICAgICAgICBpdGVtSWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcclxuICAgICAgICAgICAgaXRlbUljb24uYWx0ID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBpdGVtSWNvbi50aXRsZSA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBpdGVtVGVtcC5pbm5lclRleHQgPSBgJHtkYXRhLnRlbXAubWluLnRvRml4ZWQoMSl9wrBDIC8gJHtkYXRhLnRlbXAubWF4LnRvRml4ZWQoMSl9wrBDYFxyXG5cclxuICAgICAgICAgICAgLy8gYXBwZW5kaW5nXHJcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbURhdGUpO1xyXG4gICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1JY29uKTtcclxuICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtVGVtcCk7XHJcblxyXG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFRoZW1lKHdlYXRoZXJJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZmlyc3ROdW1iZXIgPSBTdHJpbmcod2VhdGhlcklkKVswXTtcclxuICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZ1ZpZGVvJykgYXMgSFRNTFZpZGVvRWxlbWVudDtcclxuICAgICAgICBsZXQgdmlkZW9TcmM7XHJcbiAgICAgICAgc3dpdGNoIChmaXJzdE51bWJlcikge1xyXG4gICAgICAgICAgICBjYXNlIFdFQVRIRVJfVFlQRVMudGh1bmRlcnN0b3JtOiB2aWRlb1NyYyA9ICdodHRwczovL3N0YXRpYy52aWRlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3ByZXZpZXdzLzAwMC8wNDQvNTgyL29yaWdpbmFsL2RhcmstZm9yZXN0Lm1wNCc7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFdFQVRIRVJfVFlQRVMuZHJpenpsZTogdmlkZW9TcmMgPSAnaHR0cHM6Ly9zdGF0aWMudmlkZWV6eS5jb20vc3lzdGVtL3Jlc291cmNlcy9wcmV2aWV3cy8wMDAvMDQ0Lzc2Ny9vcmlnaW5hbC9QMTE0MDgyOC5tcDQnOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBXRUFUSEVSX1RZUEVTLnJhaW46IHZpZGVvU3JjID0gJ2h0dHBzOi8vc3RhdGljLnZpZGVlenkuY29tL3N5c3RlbS9yZXNvdXJjZXMvcHJldmlld3MvMDAwLzA0OS8wNDcvb3JpZ2luYWwvcGFubmluZy1hbmQtY2xvc2UtdXAtdG8tcmFpbi1kcm9wLW9uLXRoZS1nbGFzcy1vZi13aW5kb3cubXA0JzsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgV0VBVEhFUl9UWVBFUy5zbm93OiB2aWRlb1NyYyA9ICdodHRwczovL2Nkbi52aWRldm8ubmV0L3ZpZGV2b19maWxlcy92aWRlby9mcmVlLzIwMTUtMDkvc21hbGxfd2F0ZXJtYXJrZWQvU2xvd19Tbm93X1NlZ19Db21wX0ZsYWtlc19wcmV2aWV3LndlYm0nOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBXRUFUSEVSX1RZUEVTLmF0bW9zcGhlcmU6IHZpZGVvU3JjID0gJ2h0dHBzOi8vc3RhdGljLnZpZGVlenkuY29tL3N5c3RlbS9yZXNvdXJjZXMvcHJldmlld3MvMDAwLzAzNC8wNjkvb3JpZ2luYWwvTW91bnRhaW4tcmFpbjUubXA0JzsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgV0VBVEhFUl9UWVBFUy5jbGVhcjogdmlkZW9TcmMgPSAnaHR0cHM6Ly9zdGF0aWMudmlkZWV6eS5jb20vc3lzdGVtL3Jlc291cmNlcy9wcmV2aWV3cy8wMDAvMDM5LzQ2Ni9vcmlnaW5hbC81OF8yOF8wOF8xOS5tcDQnOyBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogIHZpZGVvU3JjID0gJ2h0dHBzOi8vc3RhdGljLnZpZGVlenkuY29tL3N5c3RlbS9yZXNvdXJjZXMvcHJldmlld3MvMDAwLzAzOS80NjYvb3JpZ2luYWwvNThfMjhfMDhfMTkubXA0JzsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHdoeSB0d28gZ3JvdXBzIGhhdmUgdGhlIHNhbWUga2V5IGNvZGUgZ3JvdXAgd3RmIC8vIGNsb3VkeVxyXG4gICAgICAgIGlmKHdlYXRoZXJJZCA+IDgwMCkgdmlkZW9TcmMgPSAnaHR0cHM6Ly9jZG4udmlkZXZvLm5ldC92aWRldm9fZmlsZXMvdmlkZW8vZnJlZS8yMDIwLTA3L3NtYWxsX3dhdGVybWFya2VkLzA2XzE1OTYwODM3NzZfcHJldmlldy53ZWJtJztcclxuICAgICAgICB2aWRlby5zcmMgPSB2aWRlb1NyYztcclxuICAgIH1cclxuXHJcbiAgICAvLyBhc2lkZSBVSVxyXG4gICAgcmVtb3ZlQ2l0eShpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgYWxsQ2l0aWVzOiBJV2VhdGhlckRhdGFbXSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oREFUQV9LRVkpKTtcclxuICAgICAgICBpZiAoYWxsQ2l0aWVzICYmIGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmRDaXRpZXMgPSBhbGxDaXRpZXMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBpZCk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKERBVEFfS0VZLCBKU09OLnN0cmluZ2lmeShmaWx0ZXJkQ2l0aWVzKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyV2VhdGhlckxpc3QoZmlsdGVyZENpdGllcywgdHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcG9wdWxhdGVMaXN0RWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCwgd2VhdGhlckRhdGE6IElXZWF0aGVyRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudElkID0gZWxlbWVudC5pZDtcclxuICAgICAgICBjb25zdCBpY29uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwYXJlbnRJZH0gIyR7cGFyZW50SWR9XyR7TElTVF9FTEVNVE5TLmljb259YCkgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICBpY29uRWwuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGEud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xyXG4gICAgICAgIGljb25FbC5hbHQgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIGljb25FbC50aXRsZSA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cGFyZW50SWR9ICMke3BhcmVudElkfV8ke0xJU1RfRUxFTVROUy5uYW1lfWApLmlubmVySFRNTCA9IHdlYXRoZXJEYXRhLm5hbWU7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cGFyZW50SWR9ICMke3BhcmVudElkfV8ke0xJU1RfRUxFTVROUy5wcmVzc3VyZX1gKS5pbm5lckhUTUwgPSBgJHt3ZWF0aGVyRGF0YS5tYWluLnByZXNzdXJlfSBoUEFgO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3BhcmVudElkfSAjJHtwYXJlbnRJZH1fJHtMSVNUX0VMRU1UTlMudGVtcH1gKS5pbm5lckhUTUwgPSBgJHt3ZWF0aGVyRGF0YS5tYWluLnRlbXAudG9GaXhlZCgxKX3CsENgO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcldlYXRoZXJFbGVtZW50KHdlYXRoZXJEYXRhOiBJV2VhdGhlckRhdGEsIGVsZW1lbnRJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5TGlzdCcpO1xyXG4gICAgICAgIC8vIG1haW4gZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGVsZW1lbnQuaWQgPSBlbGVtZW50SWQ7XHJcbiAgICAgICAgLy8gb3RoZXIgZWxlbWVudHNcclxuICAgICAgICBjb25zdCBlbGVtZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudEJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRCdG5Db250YWluZXJDaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGVsZW1lbnRCdG4uY2xhc3NOYW1lID0gXCJjaXR5LWxpc3QtaXRlbVwiO1xyXG4gICAgICAgIC8vIG5hbWVcclxuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbmFtZUVsLmlkID0gYCR7ZWxlbWVudElkfV8ke0xJU1RfRUxFTVROUy5uYW1lfWA7XHJcbiAgICAgICAgZWxlbWVudEJ0bkNvbnRhaW5lckNoaWxkLmFwcGVuZENoaWxkKG5hbWVFbCk7XHJcbiAgICAgICAgLy8gdGVtcGVyYXR1cmVcclxuICAgICAgICBjb25zdCB0ZW1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdGVtcEVsLmlkID0gYCR7ZWxlbWVudElkfV8ke0xJU1RfRUxFTVROUy50ZW1wfWA7XHJcbiAgICAgICAgZWxlbWVudEJ0bkNvbnRhaW5lckNoaWxkLmFwcGVuZENoaWxkKHRlbXBFbCk7XHJcbiAgICAgICAgLy8gcHJlc3N1cmVcclxuICAgICAgICBjb25zdCBwcmVzc0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHByZXNzRWwuaWQgPSBgJHtlbGVtZW50SWR9XyR7TElTVF9FTEVNVE5TLnByZXNzdXJlfWA7XHJcbiAgICAgICAgZWxlbWVudEJ0bkNvbnRhaW5lckNoaWxkLmFwcGVuZENoaWxkKHByZXNzRWwpO1xyXG4gICAgICAgIC8vaWNvbiBcclxuICAgICAgICBjb25zdCBpY29uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBpY29uRWwuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGEud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xyXG4gICAgICAgIGljb25FbC5pZCA9IGAke2VsZW1lbnRJZH1fJHtMSVNUX0VMRU1UTlMuaWNvbn1gO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgYnV0dG9uXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICByZW1vdmVCdG5FbC5jbGFzc05hbWUgPSBcImNpdHktbGlzdC1pdGVtLXJlbW92ZUJ0blwiO1xyXG4gICAgICAgIHJlbW92ZUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMucmVtb3ZlQ2l0eSh3ZWF0aGVyRGF0YS5pZCkpO1xyXG5cclxuICAgICAgICAvLyBhY3RpdmF0aW9uXHJcbiAgICAgICAgZWxlbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tYWluQ29udGV4dC5jaGFuZ2VBY3RpdmVDaXR5KHdlYXRoZXJEYXRhLmlkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gYXBwZW5kaW5nXHJcbiAgICAgICAgZWxlbWVudEJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50QnRuQ29udGFpbmVyQ2hpbGQpO1xyXG4gICAgICAgIGVsZW1lbnRCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbkVsKTtcclxuICAgICAgICBlbGVtZW50QnRuLmFwcGVuZENoaWxkKGVsZW1lbnRCdG5Db250YWluZXIpO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudEJ0bik7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChyZW1vdmVCdG5FbCk7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUxpc3RFbGVtZW50KGVsZW1lbnQsIHdlYXRoZXJEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJXZWF0aGVyTGlzdCh3ZWF0aGVyRGF0YTogSVdlYXRoZXJEYXRhW10sIGZvcmNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAoZm9yY2UpIHtcclxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5TGlzdCcpO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmlubmVySFRNTCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdlYXRoZXJEYXRhLmZvckVhY2goKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudElkID0gYGxpc3RFbF8ke2RhdGEuaWR9YDtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIC8vIHRvIGF2b2lkIHVubmVjZXNzYWFyeSByZS1yZW5kZXJpbmcgb2YgYWxsIGxpc3QsIGp1c3QgcmVmcmVzaCBuZXcgY29udGVudFxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCkgdGhpcy5wb3B1bGF0ZUxpc3RFbGVtZW50KGVsZW1lbnQsIGRhdGEpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMucmVuZGVyV2VhdGhlckVsZW1lbnQoZGF0YSwgZWxlbWVudElkKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJRm9yZWNhc3REYXRhLCBJV2VhdGhlckRhdGEgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgREFUQV9LRVkgPSBcIndlYXRoZXJfZGF0YVwiXHJcbmNvbnN0IEFQSV9LRVkgPSBcImNiZWViNDkxNzQ1NmE5ZGM1YmVmNTcwOTY3NjI4NTIxXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBpQ2FsbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FsbERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjYWxsRGF0YShjaXR5Pzogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYoY2l0eSkge1xyXG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgdGhpcy5nZXRXZWF0aGVyRGF0YShjaXR5KTtcclxuICAgICAgICAgICAgaWYod2VhdGhlciAmJiB3ZWF0aGVyLmNvZCA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVEYXRhKHdlYXRoZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gd2VhdGhlci5jb2Q7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZWZyZXNoRGF0YSgpOiBQcm9taXNlPElXZWF0aGVyRGF0YVtdPiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENpdGllcyA9IChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKERBVEFfS0VZKSkgYXMgSVdlYXRoZXJEYXRhW10pXHJcbiAgICAgICAgICAgID8ubWFwKHYgPT4gdi5uYW1lKSB8fCBbXTtcclxuICAgICAgICBjb25zdCBuZXdDaXRpZXMgPSBQcm9taXNlLmFsbChjdXJyZW50Q2l0aWVzLm1hcChhc3luYyAoY2l0eSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhcGlVUkwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPSR7QVBJX0tFWX0mdW5pdHM9bWV0cmljYDtcclxuICAgICAgICAgICAgY29uc3Qgd2VhdGhlclJlc3AgPSBhd2FpdCBmZXRjaChhcGlVUkwpO1xyXG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YTogSVdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlclJlc3AuanNvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVEYXRhKHdlYXRoZXJEYXRhKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0NpdGllcztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRXZWF0aGVyRGF0YShjaXR5OiBzdHJpbmcpOiBQcm9taXNlPElXZWF0aGVyRGF0YT4ge1xyXG4gICAgICAgIGNvbnN0IGFwaVVSTCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHtBUElfS0VZfSZ1bml0cz1tZXRyaWNgO1xyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJSZXNwID0gYXdhaXQgZmV0Y2goYXBpVVJMKTtcclxuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YTogSVdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlclJlc3AuanNvbigpO1xyXG5cclxuICAgICAgICByZXR1cm4gd2VhdGhlckRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0Rm9yZWNhc3REYXRhKGxhdDogbnVtYmVyLCBsb25nOiBudW1iZXIpOiBQcm9taXNlPElGb3JlY2FzdERhdGE+IHtcclxuICAgICAgICBjb25zdCBhcGlVUkwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb25nfSZleGNsdWRlPW1pbnV0ZWx5LGhvdXJseSZhcHBpZD0ke0FQSV9LRVl9JnVuaXRzPW1ldHJpY2A7XHJcbiAgICAgICAgY29uc3QgZm9yZWNhc3RSZXNwID0gYXdhaXQgZmV0Y2goYXBpVVJMKTtcclxuICAgICAgICBjb25zdCBmb3JlY2FzdERhdGE6IElGb3JlY2FzdERhdGEgPSBhd2FpdCBmb3JlY2FzdFJlc3AuanNvbigpO1xyXG4gICAgICAgIC8vIHdlIGRvbid0IG5lZWQgbW9yZSBkYWlseSBkYXRhXHJcbiAgICAgICAgZm9yZWNhc3REYXRhLmRhaWx5ID0gZm9yZWNhc3REYXRhLmRhaWx5LnNsaWNlKDAsIDYpO1xyXG5cclxuICAgICAgICByZXR1cm4gZm9yZWNhc3REYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVEYXRhKGRhdGE6IElXZWF0aGVyRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXhJbkxTID0gY3VycmVudERhdGEuZmluZEluZGV4KCh2YWwpID0+IHZhbC5pZCA9PT0gZGF0YS5pZCk7XHJcbiAgICAgICAgaWYoaW5kZXhJbkxTICE9PSAtMSkge1xyXG4gICAgICAgICAgICAvLyBkYXRhIGFscmVhZHkgc2F2ZWQsIHJlZnJlc2ggb25lIGl0ZW1cclxuICAgICAgICAgICAgY3VycmVudERhdGFbaW5kZXhJbkxTXSA9IGRhdGE7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKERBVEFfS0VZLCBKU09OLnN0cmluZ2lmeShjdXJyZW50RGF0YSkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShEQVRBX0tFWSwgSlNPTi5zdHJpbmdpZnkoWy4uLmN1cnJlbnREYXRhLCBkYXRhXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGEoKTogSVdlYXRoZXJEYXRhW10ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShEQVRBX0tFWSk7XHJcbiAgICAgICAgaWYgKGRhdGEpXHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG4iLCJmdW5jdGlvbiBnZXREYXkoZHQ6IG51bWJlciwgdGltZXpvbmVPZmZzZXQ6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKGR0ICsgdGltZXpvbmVPZmZzZXQpICogMTAwMCk7XHJcbiAgICBjb25zdCBzdHJpbmdEYXRlID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcclxuICAgIHJldHVybiBzdHJpbmdEYXRlO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIGdldERheVxyXG59OyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuaW1wb3J0IHsgSUZvcmVjYXN0RGF0YSwgSVdlYXRoZXJEYXRhIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBBcGlDYWxsZXIgfSBmcm9tICcuL2FwaUNhbGxlcic7XG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vVUknO1xuXG5jb25zdCBBQ1RJVkVfQ0lUWV9LRVkgPSBcImFjdGl2ZV9jaXR5XCJcblxuZXhwb3J0IGNsYXNzIE1haW4ge1xuICAgIGFwaUNhbGxlcjogQXBpQ2FsbGVyO1xuICAgIFVJOiBVSTtcbiAgICB3ZWF0aGVyRGF0YTogSVdlYXRoZXJEYXRhW107XG4gICAgYWN0aXZlQ2l0eTogSVdlYXRoZXJEYXRhWydpZCddID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKEFDVElWRV9DSVRZX0tFWSkpO1xuICAgIGFjdGl2ZUNpdHlEYXRhOiBJRm9yZWNhc3REYXRhO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFwaUNhbGxlciA9IG5ldyBBcGlDYWxsZXIoKTtcbiAgICAgICAgdGhpcy5VSSA9IG5ldyBVSSh0aGlzKTtcbiAgICAgICAgdGhpcy53ZWF0aGVyRGF0YSA9IHRoaXMuYXBpQ2FsbGVyLmdldERhdGEoKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVDaXR5KCk7XG4gICAgICAgIHRoaXMuaW5pdFJlZnJlc2hlcigpO1xuICAgICAgICB0aGlzLmJpbmRJbnB1dEV2ZW50cygpO1xuICAgICAgICB0aGlzLlVJLnJlbmRlcldlYXRoZXJMaXN0KHRoaXMud2VhdGhlckRhdGEpO1xuICAgIH1cbiAgICBcbiAgICBpbml0UmVmcmVzaGVyKCl7XG4gICAgICAgIC8vIHJlZnJlc2ggZGF0YSBldmVyeSBtaW51dGVcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcGlDYWxsZXIucmVmcmVzaERhdGEoKS50aGVuKGN1cnJlbnREYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXJEYXRhID0gY3VycmVudERhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5VSS5yZW5kZXJXZWF0aGVyTGlzdCh0aGlzLndlYXRoZXJEYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYodGhpcy5hY3RpdmVDaXR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVDaXR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDYwMDAwKTtcbiAgICB9XG5cbiAgICBiaW5kSW5wdXRFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJGb3JtJyk7XG4gICAgICAgIGNvbnN0IGNpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eUJ1dHRvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgICBjb25zdCBjaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eUlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgd2VhdGhlckZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5hcGlDYWxsZXIuY2FsbERhdGEoY2l0eUlucHV0LnZhbHVlKS50aGVuKChjb2RlOiBJV2VhdGhlckRhdGFbJ2NvZCddKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcihjb2RlKSAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVUkuc2hvd0FwaUVycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlckRhdGEgPSB0aGlzLmFwaUNhbGxlci5nZXREYXRhKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5VSS5yZW5kZXJXZWF0aGVyTGlzdCh0aGlzLndlYXRoZXJEYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2l0eUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBjaXR5QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUubGVuZ3RoID4gMCkgY2l0eUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWxzZSBjaXR5QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlQ2l0eSgpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlQ2l0eSA9IHRoaXMud2VhdGhlckRhdGEuZmluZChjaXR5ID0+IGNpdHkuaWQgPT09IHRoaXMuYWN0aXZlQ2l0eSk7XG4gICAgICAgIGlmKGFjdGl2ZUNpdHkpIHtcbiAgICAgICAgICAgIHRoaXMuYXBpQ2FsbGVyLmdldEZvcmVjYXN0RGF0YShhY3RpdmVDaXR5LmNvb3JkLmxhdCwgYWN0aXZlQ2l0eS5jb29yZC5sb24pLnRoZW4oYWN0aXZlRm9yZWNhc3QgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ2l0eURhdGEgPSBhY3RpdmVGb3JlY2FzdDtcbiAgICAgICAgICAgICAgICB0aGlzLlVJLnJlbmRlck1haW5WaWV3KHRoaXMuYWN0aXZlQ2l0eURhdGEsIGFjdGl2ZUNpdHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VBY3RpdmVDaXR5KGluZGV4OiBJV2VhdGhlckRhdGFbJ2lkJ10pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVDaXR5ID0gaW5kZXg7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEFDVElWRV9DSVRZX0tFWSwgU3RyaW5nKGluZGV4KSk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlQ2l0eSgpO1xuICAgIH1cblxufVxuXG5cbm5ldyBNYWluKCk7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=
