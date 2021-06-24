(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/PostCard/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/PostCard/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostCard": function() { return /* binding */ PostCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/PostCard/styles.ts");
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Heading */ "./src/components/Heading/index.tsx");

var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\components\\PostCard\\index.tsx";



const PostCard = ({
  id,
  title,
  cover,
  excerpt,
  slug
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: `/post/${slug}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Cover, {
          src: cover[0].url || cover.url,
          alt: `${title}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_3__.Heading, {
      as: "h2",
      size: "small",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/post/${slug}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Excerpt, {
      children: excerpt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/PostCard/styles.ts":
/*!*******************************************!*\
  !*** ./src/components/PostCard/styles.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": function() { return /* binding */ Wrapper; },
/* harmony export */   "Cover": function() { return /* binding */ Cover; },
/* harmony export */   "Excerpt": function() { return /* binding */ Excerpt; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Heading_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Heading/styles */ "./src/components/Heading/styles.ts");


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-149wod8-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", "{margin:0;margin-top:calc(", " - 0.6rem);margin-bottom:", ";}a{text-decoration:none;color:inherit;transition:all 300ms ease-in-out;}&:hover a{color:", ";}&:hover img{opacity:0.8;}"], _Heading_styles__WEBPACK_IMPORTED_MODULE_1__.Title, theme.spacings.small, theme.spacings.small, theme.colors.darkerGray));
const Cover = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "styles__Cover",
  componentId: "sc-149wod8-1"
})(["max-width:100%;transition:opacity 300ms ease-in-out;"]);
const Excerpt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "styles__Excerpt",
  componentId: "sc-149wod8-2"
})([""]);

/***/ }),

/***/ "./src/components/PostGrid/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/PostGrid/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostGrid": function() { return /* binding */ PostGrid; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/PostGrid/styles.ts");
/* harmony import */ var _PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PostCard */ "./src/components/PostCard/index.tsx");

var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\components\\PostGrid\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const PostGrid = ({
  posts = []
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {
    children: [posts.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.NotFound, {
      children: " Nenhum post encontrado aqui "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Grid, {
      children: posts.length > 0 && posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostCard__WEBPACK_IMPORTED_MODULE_2__.PostCard, _objectSpread({}, post), `post-card-${post.id}`, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/PostGrid/styles.ts":
/*!*******************************************!*\
  !*** ./src/components/PostGrid/styles.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": function() { return /* binding */ Wrapper; },
/* harmony export */   "NotFound": function() { return /* binding */ NotFound; },
/* harmony export */   "Grid": function() { return /* binding */ Grid; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1q59b1d-0"
})(["width:100%;"]);
const NotFound = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "styles__NotFound",
  componentId: "sc-1q59b1d-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding:", ";text-align:center;font-size ", ";"], theme.spacings.large, theme.font.sizes.small));
const Grid = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Grid",
  componentId: "sc-1q59b1d-2"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["max-width:120rem;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(28rem,1fr));gap:", ";padding:", ";@media ", "{grid-template-columns:1fr;}"], theme.spacings.large, theme.spacings.large, theme.media.lteSmall));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_load_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/load-posts */ "./src/api/load-posts.ts");
/* harmony import */ var _templates_PostsTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/PostsTemplate */ "./src/templates/PostsTemplate/index.tsx");


var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\pages\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Index({
  posts,
  setting,
  variables
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: [setting.blogName, " - ", setting.description]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: setting.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates_PostsTemplate__WEBPACK_IMPORTED_MODULE_3__.PostsTemplate, {
      posts: posts,
      settings: setting,
      variables: variables
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
const getStaticProps = async () => {
  let data = null;

  try {
    data = await (0,_api_load_posts__WEBPACK_IMPORTED_MODULE_2__.loadPosts)();
  } catch (e) {
    data = null;
  }

  console.log('teste');
  console.log(data);

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true
    };
  }

  console.log(data.posts[0].cover);
  return {
    props: {
      posts: data.posts,
      setting: data.setting,
      variables: _objectSpread({}, _api_load_posts__WEBPACK_IMPORTED_MODULE_2__.defaultLoadPostsVariables)
    },
    revalidate: 24 * 60 * 60
  };
};

/***/ }),

/***/ "./src/templates/PostsTemplate/index.tsx":
/*!***********************************************!*\
  !*** ./src/templates/PostsTemplate/index.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsTemplate": function() { return /* binding */ PostsTemplate; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/templates/PostsTemplate/styles.ts");
/* harmony import */ var _components_PostGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PostGrid */ "./src/components/PostGrid/index.tsx");
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Base */ "./src/templates/Base/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_load_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/load-posts */ "./src/api/load-posts.ts");

var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\templates\\PostsTemplate\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const PostsTemplate = ({
  settings,
  posts = [],
  variables
}) => {
  const {
    0: statePosts,
    1: setStatePosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(posts);
  const {
    0: stateVariables,
    1: setStateVariables
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(variables);
  const {
    0: buttonDisabled,
    1: setButtonDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: noMorePosts,
    1: setNoMorePosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (statePosts.length < variables.limit) {
      setNoMorePosts(true);
    }
  }, []);

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true);

    const newVariables = _objectSpread(_objectSpread({}, stateVariables), {}, {
      start: stateVariables.start + stateVariables.limit,
      limit: stateVariables.limit
    });

    const morePosts = await (0,_api_load_posts__WEBPACK_IMPORTED_MODULE_5__.loadPosts)(newVariables);

    if (!morePosts || !morePosts.posts || !morePosts.posts.length) {
      setNoMorePosts(true);
      return;
    }

    setButtonDisabled(false);
    setStateVariables(newVariables);
    setStatePosts(p => [...p, ...morePosts.posts]);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Base__WEBPACK_IMPORTED_MODULE_3__.BaseTemplate, {
    settings: settings,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostGrid__WEBPACK_IMPORTED_MODULE_2__.PostGrid, {
      posts: statePosts
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined), statePosts && statePosts.length ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.ButtonContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: handleLoadMorePosts,
        disabled: buttonDisabled,
        children: noMorePosts ? 'Sem mais posts' : 'Carregar mais'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/PostsTemplate/styles.ts":
/*!***********************************************!*\
  !*** ./src/templates/PostsTemplate/styles.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonContainer": function() { return /* binding */ ButtonContainer; },
/* harmony export */   "Button": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__ButtonContainer",
  componentId: "sc-15ft0yj-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding:0 ", ";margin:", " 0;display:flex;justify-content:center;"], theme.spacings.large, theme.spacings.large));
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "styles__Button",
  componentId: "sc-15ft0yj-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background:", ";color:", ";border:none;padding:", " ", ";cursor:pointer;&:disabled{background:", ";}"], theme.colors.primary, theme.colors.white, theme.spacings.small, theme.spacings.large, theme.colors.darkerGray));

/***/ }),

/***/ "@styled-icons/material-outlined/Close":
/*!********************************************************!*\
  !*** external "@styled-icons/material-outlined/Close" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@styled-icons/material-outlined/Close");;

/***/ }),

/***/ "@styled-icons/material-outlined/KeyboardArrowUp":
/*!******************************************************************!*\
  !*** external "@styled-icons/material-outlined/KeyboardArrowUp" ***!
  \******************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@styled-icons/material-outlined/KeyboardArrowUp");;

/***/ }),

/***/ "@styled-icons/material-outlined/Menu":
/*!*******************************************************!*\
  !*** external "@styled-icons/material-outlined/Menu" ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@styled-icons/material-outlined/Menu");;

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-request");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","src_api_load-posts_ts-src_templates_Base_index_tsx"], function() { return __webpack_exec__("./src/pages/index.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3RDYXJkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3RDYXJkL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3RHcmlkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3RHcmlkL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdGVtcGxhdGVzL1Bvc3RzVGVtcGxhdGUvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3RlbXBsYXRlcy9Qb3N0c1RlbXBsYXRlL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIkBzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvQ2xvc2VcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIkBzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvS2V5Ym9hcmRBcnJvd1VwXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc3R5bGVkLWljb25zL21hdGVyaWFsLW91dGxpbmVkL01lbnVcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcImdyYXBocWwtcmVxdWVzdFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsImlkIiwidGl0bGUiLCJjb3ZlciIsImV4Y2VycHQiLCJzbHVnIiwidXJsIiwiV3JhcHBlciIsInN0eWxlZCIsInRoZW1lIiwiY3NzIiwiSGVhZGluZ1N0eWxlcyIsInNwYWNpbmdzIiwic21hbGwiLCJjb2xvcnMiLCJkYXJrZXJHcmF5IiwiQ292ZXIiLCJFeGNlcnB0IiwiUG9zdEdyaWQiLCJwb3N0cyIsImxlbmd0aCIsIm1hcCIsInBvc3QiLCJOb3RGb3VuZCIsImxhcmdlIiwiZm9udCIsInNpemVzIiwiR3JpZCIsIm1lZGlhIiwibHRlU21hbGwiLCJJbmRleCIsInNldHRpbmciLCJ2YXJpYWJsZXMiLCJibG9nTmFtZSIsImRlc2NyaXB0aW9uIiwiZ2V0U3RhdGljUHJvcHMiLCJkYXRhIiwibG9hZFBvc3RzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJub3RGb3VuZCIsInByb3BzIiwiZGVmYXVsdExvYWRQb3N0c1ZhcmlhYmxlcyIsInJldmFsaWRhdGUiLCJQb3N0c1RlbXBsYXRlIiwic2V0dGluZ3MiLCJzdGF0ZVBvc3RzIiwic2V0U3RhdGVQb3N0cyIsInVzZVN0YXRlIiwic3RhdGVWYXJpYWJsZXMiLCJzZXRTdGF0ZVZhcmlhYmxlcyIsImJ1dHRvbkRpc2FibGVkIiwic2V0QnV0dG9uRGlzYWJsZWQiLCJub01vcmVQb3N0cyIsInNldE5vTW9yZVBvc3RzIiwidXNlRWZmZWN0IiwibGltaXQiLCJoYW5kbGVMb2FkTW9yZVBvc3RzIiwibmV3VmFyaWFibGVzIiwic3RhcnQiLCJtb3JlUG9zdHMi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O0FBQTZDLGdCQUFRLEVBQUVOLGNBQXZEO0FBQUEsa0JBQ0dFLFdBQVcsR0FBSSxnQkFBSixHQUF1QjtBQURyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxHQUs4QixJQVQvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWFELENBOUNNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCUDtBQUVPLE1BQU1TLGVBQWUsR0FBR3ZELHVFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ3hCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVDLHNEQUFmLHdFQUNhRCxLQUFLLENBQUNHLFFBQU4sQ0FBZVksS0FENUIsRUFFVWYsS0FBSyxDQUFDRyxRQUFOLENBQWVZLEtBRnpCLENBRHdCLENBQXJCO0FBU0EsTUFBTXdDLE1BQU0sR0FBR3hELDBFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ2YsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUMsc0RBQWYsMkdBQ2NELEtBQUssQ0FBQ0ssTUFBTixDQUFhbUQsT0FEM0IsRUFFU3hELEtBQUssQ0FBQ0ssTUFBTixDQUFhb0QsS0FGdEIsRUFJV3pELEtBQUssQ0FBQ0csUUFBTixDQUFlQyxLQUoxQixFQUltQ0osS0FBSyxDQUFDRyxRQUFOLENBQWVZLEtBSmxELEVBT2dCZixLQUFLLENBQUNLLE1BQU4sQ0FBYUMsVUFQN0IsQ0FEZSxDQUFaLEM7Ozs7Ozs7Ozs7O0FDWFAsbUU7Ozs7Ozs7Ozs7O0FDQUEsNkU7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQge0hlYWRpbmd9IGZyb20gJy4uL0hlYWRpbmcnO1xyXG5pbXBvcnQge1Bvc3RQcm9wc30gZnJvbSAnLi4vUG9zdCc7XHJcbmltcG9ydCB7U3RyYXBpSW1hZ2V9IGZyb20gJy4uLy4uL3NoYXJlZC10eXBlcy9zdHJhcGlpbWFnZSc7XHJcblxyXG5leHBvcnQgdHlwZSBQb3N0Q2FyZFByb3BzID0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjb3ZlcjogU3RyYXBpSW1hZ2U7XHJcbiAgZXhjZXJwdDpzdHJpbmc7XHJcbiAgc2x1ZzpzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdENhcmQgPSAoe1xyXG4gIGlkLFxyXG4gIHRpdGxlLFxyXG4gIGNvdmVyLFxyXG4gIGV4Y2VycHQsXHJcbiAgc2x1Z1xyXG4gICB9OiBQb3N0Q2FyZFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8U3R5bGVkLldyYXBwZXI+XHJcblxyXG4gICAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtzbHVnfWB9PlxyXG5cclxuICAgICAgICA8YT5cclxuXHJcbiAgICAgICAgICA8U3R5bGVkLkNvdmVyIHNyYz17Y292ZXJbMF0udXJsIHx8IGNvdmVyLnVybH0gYWx0PXtgJHt0aXRsZX1gfS8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0LyR7c2x1Z31gfT5cclxuICAgICAgICAgIDxhPnt0aXRsZX08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0hlYWRpbmc+XHJcblxyXG4gICAgICA8U3R5bGVkLkV4Y2VycHQ+XHJcbiAgICAgICAge2V4Y2VycHR9XHJcbiAgICAgIDwvU3R5bGVkLkV4Y2VycHQ+XHJcbiAgICA8L1N0eWxlZC5XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBUaXRsZSBhcyBIZWFkaW5nU3R5bGVzIH0gZnJvbSAnLi4vSGVhZGluZy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4keyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgICR7SGVhZGluZ1N0eWxlc30ge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IGNhbGMoJHt0aGVtZS5zcGFjaW5ncy5zbWFsbH0gLSAwLjZyZW0pO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmdzLnNtYWxsfTtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIGEge1xyXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya2VyR3JheX07XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIGltZyB7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxuICBgfVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb3ZlciA9IHN0eWxlZC5pbWdgXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRXhjZXJwdCA9IHN0eWxlZC5wYGA7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCB7SGVhZGluZ30gZnJvbSAnLi4vSGVhZGluZyc7XHJcbmltcG9ydCB7UG9zdENhcmQsIFBvc3RDYXJkUHJvcHN9IGZyb20gJy4uL1Bvc3RDYXJkJztcclxuaW1wb3J0IHtTdHJhcGlJbWFnZX0gZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVkL3N0cmFwaWltYWdlJztcclxuXHJcbmV4cG9ydCB0eXBlIFBvc3RHcmlkUHJvcHMgPSB7XHJcbiAgcG9zdHM/OiBQb3N0Q2FyZFByb3BzW107XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdEdyaWQgPSAoe1xyXG4gIHBvc3RzID0gW11cclxuICAgfTogUG9zdEdyaWRQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPFN0eWxlZC5XcmFwcGVyPlxyXG4gICAge3Bvc3RzLmxlbmd0aCA9PT0wICYmIChcclxuICAgICAgPFN0eWxlZC5Ob3RGb3VuZD4gTmVuaHVtIHBvc3QgZW5jb250cmFkbyBhcXVpIDwvU3R5bGVkLk5vdEZvdW5kPlxyXG5cclxuICAgICl9XHJcbiAgICAgIDxTdHlsZWQuR3JpZD5cclxuICAgICAgICB7cG9zdHMubGVuZ3RoPiAwICYmIHBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgPFBvc3RDYXJkIGtleT17YHBvc3QtY2FyZC0ke3Bvc3QuaWR9YH0gey4uLnBvc3R9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU3R5bGVkLkdyaWQ+XHJcbiAgICA8L1N0eWxlZC5XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBUaXRsZSBhcyBIZWFkaW5nU3R5bGVzIH0gZnJvbSAnLi4vSGVhZGluZy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOjEwMCU7XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdEZvdW5kID0gc3R5bGVkLnBgXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXHJcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZSAke3RoZW1lLmZvbnQuc2l6ZXMuc21hbGx9O1xyXG4gIGB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgR3JpZCA9IHN0eWxlZC5kaXZgXHJcbiAgJHsoe3RoZW1lfSkgPT4gY3NzYFxyXG4gICAgbWF4LXdpZHRoOiAxMjByZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyOHJlbSwgMWZyKSk7XHJcbiAgICBnYXA6ICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9O1xyXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcblxyXG4gICAgQG1lZGlhICR7dGhlbWUubWVkaWEubHRlU21hbGx9e1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuIGB9XHJcbmA7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wc30gZnJvbSAnbmV4dCc7XG5pbXBvcnQge2RlZmF1bHRMb2FkUG9zdHNWYXJpYWJsZXMsbG9hZFBvc3RzLCBTdHJhcGlQb3N0QW5kU2V0dGluZ3N9IGZyb20gICcuLi9hcGkvbG9hZC1wb3N0cydcbmltcG9ydCB7UG9zdHNUZW1wbGF0ZX0gZnJvbSAgICcuLi90ZW1wbGF0ZXMvUG9zdHNUZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHsgcG9zdHMsIHNldHRpbmcsIHZhcmlhYmxlc306IFN0cmFwaVBvc3RBbmRTZXR0aW5ncyl7XG4gIHJldHVybihcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5cbiAgICAgICAgICB7c2V0dGluZy5ibG9nTmFtZX0gLSB7c2V0dGluZy5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17c2V0dGluZy5kZXNjcmlwdGlvbn0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxQb3N0c1RlbXBsYXRlIHBvc3RzPXtwb3N0c30gc2V0dGluZ3M9e3NldHRpbmd9IHZhcmlhYmxlcz17dmFyaWFibGVzfS8+XG4gICAgPC8+XG4gIClcblxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPFN0cmFwaVBvc3RBbmRTZXR0aW5ncz4gPSBhc3luYygpID0+e1xuICBsZXQgZGF0YSA9bnVsbDtcblxuICB0cnkge1xuICAgIGRhdGEgPSBhd2FpdCBsb2FkUG9zdHMoKTtcblxuICB9IGNhdGNoIChlKSB7XG4gICAgZGF0YSA9IG51bGw7XG4gIH1cbiAgY29uc29sZS5sb2coJ3Rlc3RlJylcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGlmKCFkYXRhIHx8ICFkYXRhLnBvc3RzIHx8ICFkYXRhLnBvc3RzLmxlbmd0aCl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICAgIH07XG4gIH1cblxuICAgIGNvbnNvbGUubG9nKGRhdGEucG9zdHNbMF0uY292ZXIpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHBvc3RzOmRhdGEucG9zdHMsXG4gICAgICAgIHNldHRpbmc6IGRhdGEuc2V0dGluZyxcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgLi4uZGVmYXVsdExvYWRQb3N0c1ZhcmlhYmxlcyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByZXZhbGlkYXRlOiAyNCo2MCo2MCxcbiAgICB9O1xuXG59O1xuIiwiaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IHtQb3N0R3JpZH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0R3JpZCc7XHJcbmltcG9ydCB7UG9zdFN0cmFwaX0gZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVzL3Bvc3Qtc3RyYXBpJztcclxuaW1wb3J0IHtTZXR0aW5nc1N0cmFwaX0gZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVzL3NldHRpbmdzLXN0cmFwaSdcclxuaW1wb3J0IHtCYXNlVGVtcGxhdGUgfSBmcm9tICcuLi9CYXNlJztcclxuaW1wb3J0IHt1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtMb2FkUG9zdHNWYXJpYWJsZXMsbG9hZFBvc3RzfSBmcm9tICcuLi8uLi9hcGkvbG9hZC1wb3N0cyc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIFBvc3RzVGVtcGxhdGVQcm9wcyA9IHtcclxuICBzZXR0aW5nczogU2V0dGluZ3NTdHJhcGk7XHJcbiAgcG9zdHM/OlBvc3RTdHJhcGlbXTtcclxuICB2YXJpYWJsZXM/OiBMb2FkUG9zdHNWYXJpYWJsZXM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdHNUZW1wbGF0ZSA9ICh7IHNldHRpbmdzLCBwb3N0cyA9W10sIHZhcmlhYmxlcyB9OiBQb3N0c1RlbXBsYXRlUHJvcHMpID0+IHtcclxuICBjb25zdCBbc3RhdGVQb3N0cywgc2V0U3RhdGVQb3N0c10gPSB1c2VTdGF0ZShwb3N0cyk7XHJcbiAgY29uc3QgW3N0YXRlVmFyaWFibGVzLCBzZXRTdGF0ZVZhcmlhYmxlc10gPSB1c2VTdGF0ZSh2YXJpYWJsZXMpO1xyXG4gIGNvbnN0IFtidXR0b25EaXNhYmxlZCwgc2V0QnV0dG9uRGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtub01vcmVQb3N0cywgc2V0Tm9Nb3JlUG9zdHNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoc3RhdGVQb3N0cy5sZW5ndGggPCB2YXJpYWJsZXMubGltaXQpe1xyXG4gICAgICAgICAgc2V0Tm9Nb3JlUG9zdHModHJ1ZSk7XHJcbiAgICAgIH1cclxuICB9LFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9hZE1vcmVQb3N0cyA9IGFzeW5jKCkgPT4ge1xyXG4gICAgc2V0QnV0dG9uRGlzYWJsZWQodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgbmV3VmFyaWFibGVzID0ge1xyXG4gICAgICAuLi5zdGF0ZVZhcmlhYmxlcyxcclxuICAgICAgc3RhcnQ6IHN0YXRlVmFyaWFibGVzLnN0YXJ0ICsgc3RhdGVWYXJpYWJsZXMubGltaXQsXHJcbiAgICAgIGxpbWl0OiBzdGF0ZVZhcmlhYmxlcy5saW1pdCxcclxuICAgIH07XHJcblxyXG4gICAgICBjb25zdCBtb3JlUG9zdHMgPSBhd2FpdCBsb2FkUG9zdHMobmV3VmFyaWFibGVzKTtcclxuXHJcbiAgICAgIGlmICghbW9yZVBvc3RzIHx8ICFtb3JlUG9zdHMucG9zdHMgfHwgIW1vcmVQb3N0cy5wb3N0cy5sZW5ndGgpe1xyXG4gICAgICAgIHNldE5vTW9yZVBvc3RzKHRydWUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0QnV0dG9uRGlzYWJsZWQoZmFsc2UpO1xyXG4gICAgICBzZXRTdGF0ZVZhcmlhYmxlcyhuZXdWYXJpYWJsZXMpO1xyXG4gICAgICBzZXRTdGF0ZVBvc3RzKChwKSA9PiBbLi4ucCwgLi4ubW9yZVBvc3RzLnBvc3RzXSk7XHJcbiAgICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJhc2VUZW1wbGF0ZSBzZXR0aW5ncz17c2V0dGluZ3N9PlxyXG5cclxuICAgICAgPFBvc3RHcmlkIHBvc3RzPXtzdGF0ZVBvc3RzfS8+XHJcbiAgICAgIFxyXG4gICAge3N0YXRlUG9zdHMgJiYgc3RhdGVQb3N0cy5sZW5ndGggPyhcclxuICAgICAgPFN0eWxlZC5CdXR0b25Db250YWluZXI+XHJcbiAgICAgICAgPFN0eWxlZC5CdXR0b24gb25DbGljaz17aGFuZGxlTG9hZE1vcmVQb3N0c30gZGlzYWJsZWQ9e2J1dHRvbkRpc2FibGVkfT5cclxuICAgICAgICAgIHtub01vcmVQb3N0cyA/ICAnU2VtIG1haXMgcG9zdHMnIDogJ0NhcnJlZ2FyIG1haXMnfVxyXG4gICAgICAgIDwvU3R5bGVkLkJ1dHRvbj5cclxuICAgICAgPC9TdHlsZWQuQnV0dG9uQ29udGFpbmVyPikgOiBudWxsfVxyXG4gICAgPC9CYXNlVGVtcGxhdGU+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIHBhZGRpbmc6IDAgJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcbiAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5ncy5zbWFsbH0gJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuZGFya2VyR3JheX07XHJcbiAgICB9XHJcbiAgYH1cclxuYDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0eWxlZC1pY29ucy9tYXRlcmlhbC1vdXRsaW5lZC9DbG9zZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0eWxlZC1pY29ucy9tYXRlcmlhbC1vdXRsaW5lZC9LZXlib2FyZEFycm93VXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvTWVudVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC1yZXF1ZXN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==