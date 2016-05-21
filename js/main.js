/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const tagrize   = __webpack_require__(1),
	      requester = __webpack_require__(2);

	var tags = document.querySelectorAll('.tagrize');
	for (var i = 0; i < tags.length; i++) tagrize(tags.item(i));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function tagrize(el)
	{
	    var tag = el.tagName.toLowerCase(),
	        currentInner = el.innerHTML;

	    // Just do <tagname>{content}</tagname>
	    el.innerHTML = `&lt;${tag}&gt;<span class="tagged">${currentInner}</span>&lt;/${tag}&gt;`;
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	    request: new XMLHttpRequest(),
	    headers: [],

	    get: function(url, data) {
	        this.request.open('GET', url, true);
	    },

	    post: function(url, data) {
	        this.request.open('POST', url, true);
	    }
	};


/***/ }
/******/ ]);