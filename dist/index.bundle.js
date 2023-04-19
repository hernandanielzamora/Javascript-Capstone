"use strict";
(self["webpackChunkjavascript_capstone"] = self["webpackChunkjavascript_capstone"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_fetchingData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);



(0,_modules_fetchingData_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Normalize */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n  list-style-type: none;\r\n  font-family: \"Kanit\", sans-serif;\r\n}\r\n\r\n/* Header - NavBar */\r\nbody {\r\n  background-color: #263238;\r\n}\r\n\r\n.title {\r\n  color: yellow;\r\n  font-size: 4em;\r\n  text-align: center;\r\n}\r\n\r\nheader {\r\n  background-color: #ef5350;\r\n}\r\n\r\n.nav-bar {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  margin-left: 30%;\r\n}\r\n\r\n.navbar-list {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  width: 30%;\r\n  gap: 1.5em;\r\n}\r\n\r\n.navbar-img {\r\n  height: 5em;\r\n  padding-top: 0.5em;\r\n}\r\n\r\n.navbar-item a {\r\n  text-decoration: none;\r\n  color: yellow;\r\n}\r\n\r\n/* Cards Section */\r\n.cards-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  margin-top: 2em;\r\n  gap: 10%;\r\n}\r\n\r\n.card {\r\n  width: 17em;\r\n  height: auto;\r\n  margin: 2em;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 1rem 0.5rem;\r\n  border-radius: 25px;\r\n  background: #ef5350;\r\n  box-shadow: 0 0 0.5em #ff3c00;\r\n}\r\n\r\n.card-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.card-img {\r\n  width: 12em;\r\n  height: auto;\r\n  background-color: rgb(255, 255, 255);\r\n  border-radius: 20px;\r\n  margin-bottom: 3%;\r\n}\r\n\r\n.card-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 20px;\r\n}\r\n\r\n.like-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 3%;\r\n}\r\n\r\n.like-btn {\r\n  background: none;\r\n  border: none;\r\n  font-size: 1.7em;\r\n  cursor: pointer;\r\n}\r\n\r\n.like-count {\r\n  font-size: 1.7em;\r\n  text-align: center;\r\n  margin-top: -15px;\r\n}\r\n\r\n.card-content p {\r\n  font-size: 1.5em;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.button-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.button-container button {\r\n  width: 120%;\r\n  margin-bottom: 5%;\r\n  padding: 3%;\r\n  font-size: 1.2em;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Comments Popup */\r\n.no-scroll {\r\n  overflow: hidden;\r\n  position: sticky;\r\n}\r\n\r\n#closeDialoge {\r\n  color: #000;\r\n  background-color: transparent;\r\n  height: 40px;\r\n  width: 40px;\r\n  align-self: flex-end;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.dialog-container {\r\n  position: fixed;\r\n  border-color: transparent;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #ef5350;\r\n  width: 70vw;\r\n  height: auto;\r\n  border-radius: 2%;\r\n  padding: 8% 4% 8% 4%;\r\n  gap: 5%;\r\n  margin: auto;\r\n}\r\n\r\n.dialog-container::backdrop {\r\n  background-color: #263238;\r\n}\r\n\r\n.specs {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  width: 80%;\r\n}\r\n\r\n.modal-card-img {\r\n  width: 25%;\r\n  height: auto;\r\n  background-color: rgb(255, 255, 255);\r\n  border-radius: 20px;\r\n}\r\n\r\n/* Footer */\r\nfooter {\r\n  background-color: #ef5350;\r\n  padding: 1em;\r\n}\r\n\r\nfooter h2 {\r\n  font-size: 1em;\r\n}\r\n\r\n.footer-link {\r\n  text-decoration: none;\r\n  color: yellow;\r\n}\r\n\r\n/* QueryMedia */\r\n@media (min-width: 768px) {\r\n  /* NavBar */\r\n  .nav-bar {\r\n    margin-left: 7%;\r\n    font-size: 1.25em;\r\n  }\r\n\r\n  /* Footer */\r\n  footer h2 {\r\n    font-size: 1.5em;\r\n  }\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _numbOfLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _listCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _commentsPopup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _reservationsModal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);





const pokeCount = document.getElementById('poke-count');
const cardsContainer = document.getElementById('cards-container');

/* Fetching and Displaying Pokemon Cards */
const fetchPokemons = async () => {
  /* Fetching primary API */
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await res.json();
    const newArray = data.results;
    /* Creating Cards */
    const promises = newArray.map(async (i) => {
      const res = await fetch(i.url);
      const data = await res.json();
      const card = document.createElement('div');
      card.classList = 'card';
      card.id = `${data.id}`;
      card.innerHTML = ` <img src="${data.sprites.front_default}" alt="${data.name}" class="card-img">
                         <div class="card-header">
                           <h2>${data.name.toUpperCase()}</h2>
                         </div>
                         <div class="like-container">
                           <button class="like-btn" id="like-btn${data.id}"><i class="fa-regular fa-heart"></i></button></li>
                           <span class="like-count">0</span>
                         </div>
                         <div class="button-container">
                           <button  data-modal-target="#popup${data.id}" class="comment-btn" id="comment-btn">Comments</button>
                           <button data-modal-target="#modal${data.id}" class="reservation-btn" id="reservation-btn">Reservation</button>
                         </div>
                         <dialog id='popup${data.id}' class=''>
                          <button data-close-button id='closeDialoge' class='absolute btn-noBg' type='button' title='closing button'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' fill='black' class='bi bi-x' viewBox='0 0 16 16'>
                              <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'/>
                            </svg>
                          </button>
                          <img src="${data.sprites.front_default}" alt="${data.name}" class="card-img">
                          <div class="card-header">
                            <h2>${data.name.toUpperCase()}</h2>
                          </div>
                          <div class="specs">
                            <div class=>
                              <p>Weight: ${data.weight}</p>
                              <p>Height: ${data.height}</p>
                            </div>
                            <div>
                              <p>Base experience: ${data.base_experience}</p>
                              <p>Order: ${data.order}</p>
                            </div>
                          </div>
                        </dialog>
                         <dialog id='modal${data.id}' class='reservation-modal'>
                          <button data-close-button id='closeDialoge' class='absolute btn-noBg' type='button' title='closing button'>
                           <i class="fa-solid fa-xmark fa-2xl"></i>
                          </button>
                          <img src="${data.sprites.front_default}" alt="${data.name}" class="modal-card-img">
                          <div class="card-header">
                            <h2>${data.name.toUpperCase()}</h2>
                          </div>
                          <div class="specs">
                            <div class="specs-top" >
                              <p>Weight: ${data.weight}</p>
                              <p>Height: ${data.height}</p>
                            </div>
                            <div class="specs-bottom">
                              <p>Base experience: ${data.base_experience}</p>
                              <p>Order: ${data.order}</p>
                            </div>
                          </div>
                        </dialog>
         `;
      cardsContainer.appendChild(card);
    });
    /* Waiting for the promises to fullfill */
    await Promise.all(promises);
    /* Executing Functions */
    (0,_numbOfLikes_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();
    (0,_numbOfLikes_js__WEBPACK_IMPORTED_MODULE_0__.interactionLike)();
    (0,_commentsPopup_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_reservationsModal_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_listCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(newArray.length, pokeCount);
  } catch (error) {
    const errorMessage = 'Error, try again later.';
    const errorElement = document.createElement('div');
    errorElement.innerText = errorMessage;
    document.body.appendChild(errorElement);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchPokemons);

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "interactionLike": () => (/* binding */ interactionLike)
/* harmony export */ });
/* App Api */
const urlApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tngK8NfXluNWvAs7EHbF/likes';

/* Getting likes from the App API */
const getLikes = async () => {
  const cards = document.querySelectorAll('.card');
  const likeCount = document.querySelectorAll('.like-count');
  await fetch(urlApi)
    .then((response) => response.json())
    .then((json) => {
      const cardsArray = Array.from(cards);
      cardsArray.forEach((card, index) => {
        json.forEach((item) => {
          if (item.item_id === card.id) {
            likeCount[index].innerHTML = item.likes;
          }
        });
      });
    });
};

/* Interacting with the like from the App Api */
const interactionLike = async () => {
  const likeBtns = document.querySelectorAll('.like-btn');
  const likeBtnIcon = document.querySelectorAll('.fa-heart');
  const likeBtnCount = document.querySelectorAll('.like-count');
  const cards = document.querySelectorAll('.card');
  likeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      likeBtnIcon[index].classList.remove('fa-regular');
      likeBtnIcon[index].classList.add('fa-solid');
      likeBtnCount[index].innerHTML = Number(likeBtnCount[index].innerHTML) + 1;
      fetch(urlApi, {
        method: 'POST',
        body: JSON.stringify({
          item_id: cards[index].id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    });
  });
};



/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* NavBar counter */
const pokemonCount = (counter, link) => {
  link.innerHTML = `Pokemons (${counter})`;
  return counter;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pokemonCount);

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* Detail Popup Window */

const popGenrato = () => {
  // Open comments popup
  const opnPopBtn = document.querySelectorAll('[data-modal-target]');
  opnPopBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const dialogContainer = document.querySelector(btn.dataset.modalTarget);
      document.body.classList.add('no-scroll');
      dialogContainer.classList.add('dialog-container');
      dialogContainer.showModal();
    });
  });
  // Close comments popup
  const closeButton = document.querySelectorAll('[data-close-button]');
  closeButton.forEach((btnC) => {
    btnC.addEventListener('click', () => {
      const popup = btnC.closest('.dialog-container');
      const dialogContainer = document.querySelector('.dialog-container');
      popup.close();
      dialogContainer.classList.remove('dialog-container');
      document.body.classList.remove('no-scroll');
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popGenrato);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* Detailed Reservation Modal */

const ReservationModal = () => {
  // Open reservation modal
  const opnPopBtn = document.querySelectorAll('[data-modal-target]');
  opnPopBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const dialogContainer = document.querySelector(btn.dataset.modalTarget);
      document.body.classList.add('no-scroll');
      dialogContainer.classList.add('dialog-container');
      dialogContainer.showModal();
    });
  });
  // Close reservation modal
  const closeButton = document.querySelectorAll('[data-close-button]');
  closeButton.forEach((btnC) => {
    btnC.addEventListener('click', () => {
      const popup = btnC.closest('.dialog-container');
      const dialogContainer = document.querySelector('.dialog-container');
      popup.close();
      dialogContainer.classList.remove('dialog-container');
      document.body.classList.remove('no-scroll');
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReservationModal);


/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ }
]);