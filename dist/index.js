(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src */ \"./src/index.js\");\n\r\nObject(_src__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/db/comment.js":
/*!***************************!*\
  !*** ./src/db/comment.js ***!
  \***************************/
/*! exports provided: commentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"commentModel\", function() { return commentModel; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst commentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\r\n    date: Date,\r\n    title: String,\r\n    text: String,\r\n    food_code: String,\r\n});\r\n\r\nconst commentModel = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('comment',\r\n    commentSchema, 'comments');\n\n//# sourceURL=webpack:///./src/db/comment.js?");

/***/ }),

/***/ "./src/db/index.js":
/*!*************************!*\
  !*** ./src/db/index.js ***!
  \*************************/
/*! exports provided: db, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"db\", function() { return db; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst connect = () => {\r\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect('mongodb://localhost:27017/nodeMiw',\r\n        { autoReconnect: true, useNewUrlParser: true })\r\n};\r\n\r\nlet db;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n    return new Promise((resolve, reject) => {\r\n        db = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection;\r\n\r\n        db.on('connecting', () => {\r\n            console.log('Connexion à Mongo ...');\r\n        });\r\n\r\n        db.on('error', (err) => {\r\n            mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.disconnect();\r\n            reject(err);\r\n            throw new Error('Erreur de connexion à Mongo ...');\r\n        });\r\n\r\n        db.once('open', () => {\r\n            console.log('Connexion à Mongo réussie ...');\r\n            resolve();\r\n        });\r\n\r\n        db.on('disconnected', () => {\r\n            setTimeout(() => {\r\n                try {\r\n                    connect();\r\n                }catch (err) {\r\n                    throw new Error('Reconnexion impossible');\r\n                }\r\n            }, 5000);\r\n        });\r\n\r\n        connect();\r\n    });\r\n});\n\n//# sourceURL=webpack:///./src/db/index.js?");

/***/ }),

/***/ "./src/db/product.js":
/*!***************************!*\
  !*** ./src/db/product.js ***!
  \***************************/
/*! exports provided: productModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productModel\", function() { return productModel; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst productSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\r\n    name: String,\r\n    brand: String,\r\n    bar_code: Number,\r\n    grade: Number,\r\n    pictures: [Array],\r\n    quantity: [String],\r\n    ingredients: [Object],\r\n});\r\n\r\nconst productModel = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('product',\r\n    productSchema, 'products');\n\n//# sourceURL=webpack:///./src/db/product.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"./src/db/index.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (async() => {\r\n    try {\r\n        const app =  express__WEBPACK_IMPORTED_MODULE_0___default()();\r\n\r\n        await Object(_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n        app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({ extended: true}));\r\n        Object(_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(app);\r\n\r\n        app.listen(3000, ()=> {\r\n            console.log(\"development\")\r\n        });\r\n    }\r\n    catch (e) {\r\n        console.log(e);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _db_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/product */ \"./src/db/product.js\");\n/* harmony import */ var _db_comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/comment */ \"./src/db/comment.js\");\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((app) => {\r\n    app.get('/', async(req, res) => {\r\n        try {\r\n            const products = await _db_product__WEBPACK_IMPORTED_MODULE_0__[\"productModel\"].find();\r\n            res.status(200).json(products);\r\n        }\r\n        catch (err) {\r\n            return res.status(500).json({\r\n                'error': err,\r\n                'message': 'Error lors de la requête'\r\n            });\r\n        }\r\n    });\r\n\r\n    /**\r\n     * Get one product\r\n     */\r\n    app.get('/product/:bar_code', async(req, res) => {\r\n        const barCode = req.params.bar_code;\r\n\r\n        try {\r\n            const product = await _db_product__WEBPACK_IMPORTED_MODULE_0__[\"productModel\"].findOne({ bar_code: barCode });\r\n            res.status(200).json(product);\r\n        }\r\n        catch (err) {\r\n            return res.status(500).json({\r\n                'error': true,\r\n                'message': 'Error lors de la requête'\r\n            });\r\n        }\r\n    });\r\n\r\n    /**\r\n     * Create one product\r\n     */\r\n    app.post('/product', async(req, res) => {\r\n        try {\r\n            const {\r\n                name,\r\n                brand,\r\n                bar_code,\r\n                grade,\r\n                quantity,\r\n                pictures,\r\n                ingredients\r\n            } = req.body;\r\n\r\n            const request = new _db_product__WEBPACK_IMPORTED_MODULE_0__[\"productModel\"]({\r\n                name,\r\n                brand,\r\n                bar_code,\r\n                grade,\r\n                quantity,\r\n                pictures,\r\n                ingredients\r\n            });\r\n\r\n            const inserted = await request.save();\r\n\r\n            if(inserted && inserted._id){\r\n                return await res.json(inserted);\r\n            }else{\r\n                return res.status(500).json({\r\n                    status: 'fail',\r\n                    message: 'Le produit n\\'a pas pu être inséré'\r\n                });\r\n            }\r\n        }\r\n        catch (err) {\r\n            console.log(err.message);\r\n            return res.status(500).json({\r\n                'error': true,\r\n                'message': 'Error lors de la requête'\r\n            });\r\n        }\r\n    });\r\n\r\n    app.post('/comment/:food_code', async(req, res) => {\r\n        try {\r\n            const food_code = req.params.food_code;\r\n            const produitExiste = await _db_product__WEBPACK_IMPORTED_MODULE_0__[\"productModel\"].findOne({bar_code: food_code });\r\n            if(produitExiste == null){\r\n                return res.status(404).json({\r\n                    status: 'fail',\r\n                    message: 'Le produit concerné n\\'a pas été trouvé'\r\n                });\r\n            }\r\n\r\n            const {\r\n                date,\r\n                title,\r\n                text,\r\n\r\n            } = req.body;\r\n\r\n            const request = new _db_comment__WEBPACK_IMPORTED_MODULE_1__[\"commentModel\"]({\r\n                date,\r\n                title,\r\n                text,\r\n                food_code\r\n            });\r\n            console.log(request);\r\n\r\n            const inserted = await request.save();\r\n\r\n            if(inserted && inserted._id){\r\n                return await res.json(inserted);\r\n            }else{\r\n                return res.status(500).json({\r\n                    status: 'fail',\r\n                    message: 'Le commentaire n\\'a pas pu être inséré'\r\n                });\r\n            }\r\n        }\r\n        catch (err) {\r\n            console.log(err.message);\r\n            return res.status(500).json({\r\n                'error': true,\r\n                'message': 'Error lors de la requête'\r\n            });\r\n        }\r\n    });\r\n\r\n    app.get('/comment/:_id', async(req, res) => {\r\n        const comment_id = req.params._id;\r\n\r\n        try {\r\n            const comment = await _db_comment__WEBPACK_IMPORTED_MODULE_1__[\"commentModel\"].findOne({ _id: comment_id });\r\n            res.status(200).json(comment);\r\n        }\r\n        catch (err) {\r\n            return res.status(500).json({\r\n                'error': true,\r\n                'message': 'Error lors de la requête'\r\n            });\r\n        }\r\n    });\r\n\r\n    app.get('/comments/:food_code', async(req, res) => {\r\n        const bar_code = req.params.food_code;\r\n\r\n        try {\r\n            const comments = await _db_comment__WEBPACK_IMPORTED_MODULE_1__[\"commentModel\"].find({ food_code: bar_code });\r\n            res.status(200).json(comments);\r\n        }\r\n        catch (err) {\r\n            return res.status(500).json({\r\n                'error': true,\r\n                'message': 'Error lors de la requête'\r\n            });\r\n        }\r\n    });\r\n});\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ })));