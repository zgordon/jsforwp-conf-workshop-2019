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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


 // Get the post containers

var postContainers = document.querySelectorAll("#react-template .entry-content"); // Setup an empty array for posts

var posts = []; // Create a post in memory for each post on the page

postContainers.forEach(function (post) {
  var title = post.querySelector("h3");
  var link = post.querySelector("h3 a");
  var image = post.querySelector("img");
  var excerpt = post.querySelector(".excerpt");
  posts.push({
    id: post.id,
    title: title.innerText,
    url: link.href,
    imageSrc: image.src,
    imageAlt: image.alt,
    excerpt: excerpt.innerText
  });
});

var Posts = function Posts() {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    imageSrc: ""
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      currentPost = _useState2[0],
      updateCurrentPost = _useState2[1];

  function openModal(event) {
    event.preventDefault();
    updateCurrentPost(this);
    document.addEventListener("keyup", listenForClose);
  }

  function closeModal() {
    updateCurrentPost({
      imageSrc: ""
    });
    document.removeEventListener("keyup", listenForClose);
  }

  function listenForClose(event) {
    if (event.target.id === "react-template-overlay") {
      closeModal();
    }

    if (event.key === "Escape") {
      closeModal();
    }
  }

  var postsMarkup = posts.map(function (post) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      id: post.id,
      key: post.id,
      className: "entry-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: post.url,
      onClick: openModal.bind(post)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: post.imageSrc,
      alt: post.imageAlt,
      className: "wp-post-image"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: post.url
    }, post.title)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "excerpt"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, post.excerpt)));
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, postsMarkup, currentPost.imageSrc !== "" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    id: "react-template-overlay",
    onClick: listenForClose
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "modal"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
    src: currentPost.imageSrc,
    alt: currentPost.imageAlt
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", null, currentPost.title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "excerpt"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, currentPost.excerpt)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
    href: currentPost.url,
    className: "button"
  }, "Read More")))));
};

wp.element.render(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Posts, null), document.querySelector("#react-template .posts"));

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map