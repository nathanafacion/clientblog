(function() {
var exports = {};
exports.id = "pages/category/[slug]";
exports.ids = ["pages/category/[slug]"];
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

/***/ "./src/pages/category/[slug].tsx":
/*!***************************************!*\
  !*** ./src/pages/category/[slug].tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CategoryPage; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _api_load_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/load-posts */ "./src/api/load-posts.ts");
/* harmony import */ var _templates_PostsTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../templates/PostsTemplate */ "./src/templates/PostsTemplate/index.tsx");
/* harmony import */ var _templates_AguardeTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../templates/AguardeTemplate */ "./src/templates/AguardeTemplate/index.tsx");


var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\pages\\category\\[slug].tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function CategoryPage({
  posts,
  setting,
  variables
}) {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  if (router.isFallback) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates_AguardeTemplate__WEBPACK_IMPORTED_MODULE_5__.AguardeTemplate, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this);
  } //const categoryName = posts[0].categories.filter(
  //   (category) => category.slug === router.query.slug,
  //)[0].displayName;


  const categoryName = "teste";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Category: ", categoryName, " - ", setting.blogName]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates_PostsTemplate__WEBPACK_IMPORTED_MODULE_4__.PostsTemplate, {
      posts: posts,
      settings: setting,
      variables: variables
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
const getStaticPaths = async () => {
  console.log("getStaticPaths");
  return {
    paths: [],
    fallback: true
  };
};
const getStaticProps = async ctx => {
  let data = null;
  const variables = {
    categorySlug: ctx.params.slug
  };
  console.log("getStaticProps");

  try {
    data = await (0,_api_load_posts__WEBPACK_IMPORTED_MODULE_3__.loadPosts)(variables);
  } catch (e) {
    data = null;
  }

  console.log(data.posts);
  console.log(data.posts[0].categories);

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFoud: true
    };
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
      variables: _objectSpread(_objectSpread({}, _api_load_posts__WEBPACK_IMPORTED_MODULE_3__.defaultLoadPostsVariables), variables)
    },
    revalidate: 24 * 60 * 60
  };
};

/***/ }),

/***/ "./src/templates/AguardeTemplate/index.tsx":
/*!*************************************************!*\
  !*** ./src/templates/AguardeTemplate/index.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AguardeTemplate": function() { return /* binding */ AguardeTemplate; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/templates/AguardeTemplate/styles.ts");

var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\templates\\AguardeTemplate\\index.tsx";

const AguardeTemplate = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.ContentContainer, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Aguarde...."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./src/templates/AguardeTemplate/styles.ts":
/*!*************************************************!*\
  !*** ./src/templates/AguardeTemplate/styles.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentContainer": function() { return /* binding */ ContentContainer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__ContentContainer",
  componentId: "zxnfoz-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding:0;margin:0;text-align:center;background-color:", ";display:flex;justify-content:center;align-items:center;width:100%;height:100vh;"], theme.colors.mediumGray));

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","src_api_load-posts_ts-src_templates_Base_index_tsx"], function() { return __webpack_exec__("./src/pages/category/[slug].tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3RDYXJkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3RDYXJkL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3RHcmlkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3RHcmlkL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9jYXRlZ29yeS9bc2x1Z10udHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3RlbXBsYXRlcy9BZ3VhcmRlVGVtcGxhdGUvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3RlbXBsYXRlcy9BZ3VhcmRlVGVtcGxhdGUvc3R5bGVzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3RlbXBsYXRlcy9Qb3N0c1RlbXBsYXRlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy90ZW1wbGF0ZXMvUG9zdHNUZW1wbGF0ZS9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc3R5bGVkLWljb25zL21hdGVyaWFsLW91dGxpbmVkL0Nsb3NlXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc3R5bGVkLWljb25zL21hdGVyaWFsLW91dGxpbmVkL0tleWJvYXJkQXJyb3dVcFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQHN0eWxlZC1pY29ucy9tYXRlcmlhbC1vdXRsaW5lZC9NZW51XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJncmFwaHFsLXJlcXVlc3RcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiUG9zdENhcmQiLCJpZCIsInRpdGxlIiwiY292ZXIiLCJleGNlcnB0Iiwic2x1ZyIsInVybCIsIldyYXBwZXIiLCJzdHlsZWQiLCJ0aGVtZSIsImNzcyIsIkhlYWRpbmdTdHlsZXMiLCJzcGFjaW5ncyIsInNtYWxsIiwiY29sb3JzIiwiZGFya2VyR3JheSIsIkNvdmVyIiwiRXhjZXJwdCIsIlBvc3RHcmlkIiwicG9zdHMiLCJsZW5ndGgiLCJtYXAiLCJwb3N0IiwiTm90Rm91bmQiLCJsYXJnZSIsImZvbnQiLCJzaXplcyIsIkdyaWQiLCJtZWRpYSIsImx0ZVNtYWxsIiwiQ2F0ZWdvcnlQYWdlIiwic2V0dGluZyIsInZhcmlhYmxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJjYXRlZ29yeU5hbWUiLCJibG9nTmFtZSIsImdldFN0YXRpY1BhdGhzIiwiY29uc29sZSIsImxvZyIsInBhdGhzIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImN0eCIsImRhdGEiLCJjYXRlZ29yeVNsdWciLCJwYXJhbXMiLCJsb2FkUG9zdHMiLCJlIiwiY2F0ZWdvcmllcyIsIm5vdEZvdWQiLCJwcm9wcyIsImRlZmF1bHRMb2FkUG9zdHNWYXJpYWJsZXMiLCJyZXZhbGlkYXRlIiwiQWd1YXJkZVRlbXBsYXRlIiwiQ29udGVudENvbnRhaW5lciIsIm1lZGl1bUdyYXkiLCJQb3N0c1RlbXBsYXRlIiwic2V0dGluZ3MiLCJzdGF0ZVBvc3RzIiwic2V0U3RhdGVQb3N0cyIsInVzZVN0YXRlIiwic3RhdGVWYXJpYWJsZXMiLCJzZXRTdGF0ZVZhcmlhYmxlcyIsImJ1dHRvbkRpc2FibGVkIiwic2V0QnV0dG9uRGlzYWJsZWQiLCJub01vcmVQb3N0cyIsInNldE5vTW9yZVBvc3RzIiwidXNlRWZmZWN0IiwibGltaXQiLCJoYW5kbGVMb2FkTW9yZVBvc3RzIiwibmV3VmFyaWFibGVzIiwic3RhcnQiLCJtb3JlUG9zdHMiLCJwIiwiQnV0dG9uQ29udGFpbmVyIiwiQnV0dG9uIiwicHJpbWFyeSIsIndoaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBWU8sTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFDdkJDLElBRHVCO0FBRXZCQyxPQUZ1QjtBQUd2QkMsT0FIdUI7QUFJdkJDLFNBSnVCO0FBS3ZCQztBQUx1QixDQUFELEtBTUE7QUFDdEIsc0JBRUUsOERBQUMsNENBQUQ7QUFBQSw0QkFFRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRyxTQUFRQSxJQUFLLEVBQTFCO0FBQUEsNkJBRUU7QUFBQSwrQkFFRSw4REFBQywwQ0FBRDtBQUFjLGFBQUcsRUFBRUYsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRyxHQUFULElBQWdCSCxLQUFLLENBQUNHLEdBQXpDO0FBQThDLGFBQUcsRUFBRyxHQUFFSixLQUFNO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQVVFLDhEQUFDLDZDQUFEO0FBQVMsUUFBRSxFQUFDLElBQVo7QUFBaUIsVUFBSSxFQUFDLE9BQXRCO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUcsU0FBUUcsSUFBSyxFQUExQjtBQUFBLCtCQUNFO0FBQUEsb0JBQUlIO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGLGVBZ0JFLDhEQUFDLDRDQUFEO0FBQUEsZ0JBQ0dFO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUF1QkQsQ0E5Qk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkUDtBQUNBO0FBRU8sTUFBTUcsT0FBTyxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNsQixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQyxzREFBZiw4TEFDSUMsa0RBREosRUFHdUJGLEtBQUssQ0FBQ0csUUFBTixDQUFlQyxLQUh0QyxFQUlxQkosS0FBSyxDQUFDRyxRQUFOLENBQWVDLEtBSnBDLEVBWWFKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxVQVoxQixDQURrQixDQUFiO0FBc0JBLE1BQU1DLEtBQUssR0FBR1IsdUVBQUg7QUFBQTtBQUFBO0FBQUEsNERBQVg7QUFLQSxNQUFNUyxPQUFPLEdBQUdULHFFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQWIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCUDtBQUVBO0FBT08sTUFBTVUsUUFBUSxHQUFHLENBQUM7QUFDdkJDLE9BQUssR0FBRztBQURlLENBQUQsS0FFQTtBQUN0QixzQkFFRSw4REFBQyw0Q0FBRDtBQUFBLGVBQ0NBLEtBQUssQ0FBQ0MsTUFBTixLQUFnQixDQUFoQixpQkFDQyw4REFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUtFLDhEQUFDLHlDQUFEO0FBQUEsZ0JBQ0dELEtBQUssQ0FBQ0MsTUFBTixHQUFjLENBQWQsSUFBbUJELEtBQUssQ0FBQ0UsR0FBTixDQUFXQyxJQUFELGlCQUM1Qiw4REFBQywrQ0FBRCxvQkFBMkNBLElBQTNDLEdBQWdCLGFBQVlBLElBQUksQ0FBQ3JCLEVBQUcsRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEa0I7QUFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQWNELENBakJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWUDtBQUdPLE1BQU1NLE9BQU8sR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsbUJBQWI7QUFLQSxNQUFNZSxRQUFRLEdBQUdmLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ2pCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVDLHNEQUFmLHFEQUNXRCxLQUFLLENBQUNHLFFBQU4sQ0FBZVksS0FEMUIsRUFHWWYsS0FBSyxDQUFDZ0IsSUFBTixDQUFXQyxLQUFYLENBQWlCYixLQUg3QixDQURpQixDQUFkO0FBUUEsTUFBTWMsSUFBSSxHQUFHbkIsdUVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDYixDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFhQyxzREFBYiwwS0FLT0QsS0FBSyxDQUFDRyxRQUFOLENBQWVZLEtBTHRCLEVBTVdmLEtBQUssQ0FBQ0csUUFBTixDQUFlWSxLQU4xQixFQVFTZixLQUFLLENBQUNtQixLQUFOLENBQVlDLFFBUnJCLENBRGEsQ0FBVixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCUDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0MsWUFBVCxDQUFzQjtBQUFFWCxPQUFGO0FBQVNZLFNBQVQ7QUFBa0JDO0FBQWxCLENBQXRCLEVBQTBFO0FBQ3RGLFFBQU1DLE1BQU0sR0FBR0Msa0VBQVMsRUFBeEI7O0FBRUEsTUFBR0QsTUFBTSxDQUFDRSxVQUFWLEVBQXFCO0FBQ25CLHdCQUFPLDhEQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNELEdBTHFGLENBT3RGO0FBQ0Q7QUFDQzs7O0FBQ0EsUUFBTUMsWUFBWSxHQUFDLE9BQW5CO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDQyw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUEsaUNBQ2FBLFlBRGIsU0FDOEJMLE9BQU8sQ0FBQ00sUUFEdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBTUMsOERBQUMsbUVBQUQ7QUFBZSxXQUFLLEVBQUlsQixLQUF4QjtBQUErQixjQUFRLEVBQUVZLE9BQXpDO0FBQWtELGVBQVMsRUFBRUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5EO0FBQUEsa0JBREY7QUFVRjtBQUVNLE1BQU1NLGNBQXFELEdBQUcsWUFBVTtBQUMzRUMsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDQSxTQUFPO0FBQ0xDLFNBQUssRUFBRSxFQURGO0FBRUxDLFlBQVEsRUFBRTtBQUZMLEdBQVA7QUFLSCxDQVBNO0FBVUEsTUFBTUMsY0FBcUQsR0FBRyxNQUFNQyxHQUFOLElBQWE7QUFDaEYsTUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQSxRQUFNYixTQUFTLEdBQUU7QUFBQ2MsZ0JBQVksRUFBRUYsR0FBRyxDQUFDRyxNQUFKLENBQVcxQztBQUExQixHQUFqQjtBQUNBa0MsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7O0FBQ0EsTUFBSTtBQUVGSyxRQUFJLEdBQUcsTUFBTUcsMERBQVMsQ0FBQ2hCLFNBQUQsQ0FBdEI7QUFDRCxHQUhELENBR0UsT0FBT2lCLENBQVAsRUFBVTtBQUNWSixRQUFJLEdBQUcsSUFBUDtBQUNEOztBQUVETixTQUFPLENBQUNDLEdBQVIsQ0FBWUssSUFBSSxDQUFDMUIsS0FBakI7QUFDQW9CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSyxJQUFJLENBQUMxQixLQUFMLENBQVcsQ0FBWCxFQUFjK0IsVUFBMUI7O0FBRUEsTUFBRyxDQUFDTCxJQUFELElBQVMsQ0FBQ0EsSUFBSSxDQUFDMUIsS0FBZixJQUF3QixDQUFDMEIsSUFBSSxDQUFDMUIsS0FBTCxDQUFXQyxNQUF2QyxFQUE4QztBQUM1QyxXQUFPO0FBQ0wrQixhQUFPLEVBQUU7QUFESixLQUFQO0FBR0Q7O0FBRUMsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTGpDLFdBQUssRUFBQzBCLElBQUksQ0FBQzFCLEtBRE47QUFFTFksYUFBTyxFQUFFYyxJQUFJLENBQUNkLE9BRlQ7QUFHTEMsZUFBUyxrQ0FDSnFCLHNFQURJLEdBRUpyQixTQUZJO0FBSEosS0FERjtBQVNMc0IsY0FBVSxFQUFFLEtBQUcsRUFBSCxHQUFNO0FBVGIsR0FBUDtBQVdILENBL0JNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENQO0FBS08sTUFBTUMsZUFBZSxHQUFHLE1BQU07QUFDbkMsc0JBQ0ksOERBQUMscURBQUQ7QUFBQSwyQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtELENBTk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMUDtBQUdPLE1BQU1DLGdCQUFnQixHQUFHaEQsdUVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDM0IsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUMsc0RBQWYsaUpBSXNCRCxLQUFLLENBQUNLLE1BQU4sQ0FBYTJDLFVBSm5DLENBRDJCLENBQXRCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFA7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVVPLE1BQU1DLGFBQWEsR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWXhDLE9BQUssR0FBRSxFQUFuQjtBQUF1QmE7QUFBdkIsQ0FBRCxLQUE0RDtBQUN2RixRQUFNO0FBQUEsT0FBQzRCLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCQywrQ0FBUSxDQUFDM0MsS0FBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDNEMsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0YsK0NBQVEsQ0FBQzlCLFNBQUQsQ0FBcEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ2lDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0NKLCtDQUFRLENBQUMsS0FBRCxDQUFwRDtBQUNBLFFBQU07QUFBQSxPQUFDSyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ04sK0NBQVEsQ0FBQyxLQUFELENBQTlDO0FBRUFPLGtEQUFTLENBQUMsTUFBTTtBQUNaLFFBQUlULFVBQVUsQ0FBQ3hDLE1BQVgsR0FBb0JZLFNBQVMsQ0FBQ3NDLEtBQWxDLEVBQXdDO0FBQ3BDRixvQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNIO0FBQ0osR0FKUSxFQUlQLEVBSk8sQ0FBVDs7QUFNQSxRQUFNRyxtQkFBbUIsR0FBRyxZQUFXO0FBQ3JDTCxxQkFBaUIsQ0FBQyxJQUFELENBQWpCOztBQUVBLFVBQU1NLFlBQVksbUNBQ2JULGNBRGE7QUFFaEJVLFdBQUssRUFBRVYsY0FBYyxDQUFDVSxLQUFmLEdBQXVCVixjQUFjLENBQUNPLEtBRjdCO0FBR2hCQSxXQUFLLEVBQUVQLGNBQWMsQ0FBQ087QUFITixNQUFsQjs7QUFNRSxVQUFNSSxTQUFTLEdBQUcsTUFBTTFCLDBEQUFTLENBQUN3QixZQUFELENBQWpDOztBQUVBLFFBQUksQ0FBQ0UsU0FBRCxJQUFjLENBQUNBLFNBQVMsQ0FBQ3ZELEtBQXpCLElBQWtDLENBQUN1RCxTQUFTLENBQUN2RCxLQUFWLENBQWdCQyxNQUF2RCxFQUE4RDtBQUM1RGdELG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0E7QUFDRDs7QUFFREYscUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNBRixxQkFBaUIsQ0FBQ1EsWUFBRCxDQUFqQjtBQUNBWCxpQkFBYSxDQUFFYyxDQUFELElBQU8sQ0FBQyxHQUFHQSxDQUFKLEVBQU8sR0FBR0QsU0FBUyxDQUFDdkQsS0FBcEIsQ0FBUixDQUFiO0FBQ0QsR0FuQkg7O0FBcUJBLHNCQUNFLDhEQUFDLCtDQUFEO0FBQWMsWUFBUSxFQUFFd0MsUUFBeEI7QUFBQSw0QkFFRSw4REFBQywwREFBRDtBQUFVLFdBQUssRUFBRUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQUlDQSxVQUFVLElBQUlBLFVBQVUsQ0FBQ3hDLE1BQXpCLGdCQUNDLDhEQUFDLG9EQUFEO0FBQUEsNkJBQ0UsOERBQUMsMkNBQUQ7QUFBZSxlQUFPLEVBQUVtRCxtQkFBeEI7QUFBNkMsZ0JBQVEsRUFBRU4sY0FBdkQ7QUFBQSxrQkFDR0UsV0FBVyxHQUFJLGdCQUFKLEdBQXVCO0FBRHJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELEdBSzhCLElBVC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBYUQsQ0E5Q00sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJQO0FBRU8sTUFBTVMsZUFBZSxHQUFHcEUsdUVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDeEIsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUMsc0RBQWYsd0VBQ2FELEtBQUssQ0FBQ0csUUFBTixDQUFlWSxLQUQ1QixFQUVVZixLQUFLLENBQUNHLFFBQU4sQ0FBZVksS0FGekIsQ0FEd0IsQ0FBckI7QUFTQSxNQUFNcUQsTUFBTSxHQUFHckUsMEVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDZixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQyxzREFBZiwyR0FDY0QsS0FBSyxDQUFDSyxNQUFOLENBQWFnRSxPQUQzQixFQUVTckUsS0FBSyxDQUFDSyxNQUFOLENBQWFpRSxLQUZ0QixFQUlXdEUsS0FBSyxDQUFDRyxRQUFOLENBQWVDLEtBSjFCLEVBSW1DSixLQUFLLENBQUNHLFFBQU4sQ0FBZVksS0FKbEQsRUFPZ0JmLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxVQVA3QixDQURlLENBQVosQzs7Ozs7Ozs7Ozs7QUNYUCxtRTs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9jYXRlZ29yeS9bc2x1Z10uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQge0hlYWRpbmd9IGZyb20gJy4uL0hlYWRpbmcnO1xyXG5pbXBvcnQge1Bvc3RQcm9wc30gZnJvbSAnLi4vUG9zdCc7XHJcbmltcG9ydCB7U3RyYXBpSW1hZ2V9IGZyb20gJy4uLy4uL3NoYXJlZC10eXBlcy9zdHJhcGlpbWFnZSc7XHJcblxyXG5leHBvcnQgdHlwZSBQb3N0Q2FyZFByb3BzID0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjb3ZlcjogU3RyYXBpSW1hZ2U7XHJcbiAgZXhjZXJwdDpzdHJpbmc7XHJcbiAgc2x1ZzpzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdENhcmQgPSAoe1xyXG4gIGlkLFxyXG4gIHRpdGxlLFxyXG4gIGNvdmVyLFxyXG4gIGV4Y2VycHQsXHJcbiAgc2x1Z1xyXG4gICB9OiBQb3N0Q2FyZFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8U3R5bGVkLldyYXBwZXI+XHJcblxyXG4gICAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtzbHVnfWB9PlxyXG5cclxuICAgICAgICA8YT5cclxuXHJcbiAgICAgICAgICA8U3R5bGVkLkNvdmVyIHNyYz17Y292ZXJbMF0udXJsIHx8IGNvdmVyLnVybH0gYWx0PXtgJHt0aXRsZX1gfS8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0LyR7c2x1Z31gfT5cclxuICAgICAgICAgIDxhPnt0aXRsZX08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0hlYWRpbmc+XHJcblxyXG4gICAgICA8U3R5bGVkLkV4Y2VycHQ+XHJcbiAgICAgICAge2V4Y2VycHR9XHJcbiAgICAgIDwvU3R5bGVkLkV4Y2VycHQ+XHJcbiAgICA8L1N0eWxlZC5XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBUaXRsZSBhcyBIZWFkaW5nU3R5bGVzIH0gZnJvbSAnLi4vSGVhZGluZy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4keyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgICR7SGVhZGluZ1N0eWxlc30ge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IGNhbGMoJHt0aGVtZS5zcGFjaW5ncy5zbWFsbH0gLSAwLjZyZW0pO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmdzLnNtYWxsfTtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIGEge1xyXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya2VyR3JheX07XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIGltZyB7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxuICBgfVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb3ZlciA9IHN0eWxlZC5pbWdgXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRXhjZXJwdCA9IHN0eWxlZC5wYGA7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCB7SGVhZGluZ30gZnJvbSAnLi4vSGVhZGluZyc7XHJcbmltcG9ydCB7UG9zdENhcmQsIFBvc3RDYXJkUHJvcHN9IGZyb20gJy4uL1Bvc3RDYXJkJztcclxuaW1wb3J0IHtTdHJhcGlJbWFnZX0gZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVkL3N0cmFwaWltYWdlJztcclxuXHJcbmV4cG9ydCB0eXBlIFBvc3RHcmlkUHJvcHMgPSB7XHJcbiAgcG9zdHM/OiBQb3N0Q2FyZFByb3BzW107XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdEdyaWQgPSAoe1xyXG4gIHBvc3RzID0gW11cclxuICAgfTogUG9zdEdyaWRQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPFN0eWxlZC5XcmFwcGVyPlxyXG4gICAge3Bvc3RzLmxlbmd0aCA9PT0wICYmIChcclxuICAgICAgPFN0eWxlZC5Ob3RGb3VuZD4gTmVuaHVtIHBvc3QgZW5jb250cmFkbyBhcXVpIDwvU3R5bGVkLk5vdEZvdW5kPlxyXG5cclxuICAgICl9XHJcbiAgICAgIDxTdHlsZWQuR3JpZD5cclxuICAgICAgICB7cG9zdHMubGVuZ3RoPiAwICYmIHBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgPFBvc3RDYXJkIGtleT17YHBvc3QtY2FyZC0ke3Bvc3QuaWR9YH0gey4uLnBvc3R9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU3R5bGVkLkdyaWQ+XHJcbiAgICA8L1N0eWxlZC5XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBUaXRsZSBhcyBIZWFkaW5nU3R5bGVzIH0gZnJvbSAnLi4vSGVhZGluZy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOjEwMCU7XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdEZvdW5kID0gc3R5bGVkLnBgXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXHJcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZSAke3RoZW1lLmZvbnQuc2l6ZXMuc21hbGx9O1xyXG4gIGB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgR3JpZCA9IHN0eWxlZC5kaXZgXHJcbiAgJHsoe3RoZW1lfSkgPT4gY3NzYFxyXG4gICAgbWF4LXdpZHRoOiAxMjByZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyOHJlbSwgMWZyKSk7XHJcbiAgICBnYXA6ICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9O1xyXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcblxyXG4gICAgQG1lZGlhICR7dGhlbWUubWVkaWEubHRlU21hbGx9e1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuIGB9XHJcbmA7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7R2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuaW1wb3J0IHtkZWZhdWx0TG9hZFBvc3RzVmFyaWFibGVzLCBsb2FkUG9zdHMsIFN0cmFwaVBvc3RBbmRTZXR0aW5nc30gZnJvbSAnLi4vLi4vYXBpL2xvYWQtcG9zdHMnO1xyXG5pbXBvcnQge1Bvc3RzVGVtcGxhdGV9IGZyb20gJy4uLy4uL3RlbXBsYXRlcy9Qb3N0c1RlbXBsYXRlJztcclxuaW1wb3J0IHtBZ3VhcmRlVGVtcGxhdGV9IGZyb20gJy4uLy4uL3RlbXBsYXRlcy9BZ3VhcmRlVGVtcGxhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlQYWdlKHsgcG9zdHMsIHNldHRpbmcsIHZhcmlhYmxlc306IFN0cmFwaVBvc3RBbmRTZXR0aW5ncyl7XHJcbiAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgaWYocm91dGVyLmlzRmFsbGJhY2spe1xyXG4gICAgIHJldHVybiA8QWd1YXJkZVRlbXBsYXRlLz5cclxuICAgfVxyXG5cclxuICAgLy9jb25zdCBjYXRlZ29yeU5hbWUgPSBwb3N0c1swXS5jYXRlZ29yaWVzLmZpbHRlcihcclxuICAvLyAgIChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkuc2x1ZyA9PT0gcm91dGVyLnF1ZXJ5LnNsdWcsXHJcbiAgIC8vKVswXS5kaXNwbGF5TmFtZTtcclxuICAgY29uc3QgY2F0ZWdvcnlOYW1lPVwidGVzdGVcIjtcclxuICAgcmV0dXJuIChcclxuICAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICBDYXRlZ29yeToge2NhdGVnb3J5TmFtZX0gLSB7c2V0dGluZy5ibG9nTmFtZX1cclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxQb3N0c1RlbXBsYXRlIHBvc3RzID0ge3Bvc3RzfSBzZXR0aW5ncz17c2V0dGluZ30gdmFyaWFibGVzPXt2YXJpYWJsZXN9IC8+XHJcbiAgICAgPC8+XHJcbiAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUHJvcHM8U3RyYXBpUG9zdEFuZFNldHRpbmdzPiA9IGFzeW5jKCkgPT57XHJcbiAgICBjb25zb2xlLmxvZyhcImdldFN0YXRpY1BhdGhzXCIpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGF0aHM6IFtdLFxyXG4gICAgICBmYWxsYmFjazogdHJ1ZSxcclxuICAgIH07XHJcblxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHM8U3RyYXBpUG9zdEFuZFNldHRpbmdzPiA9IGFzeW5jKGN0eCkgPT57XHJcbiAgbGV0IGRhdGEgPSBudWxsO1xyXG4gIGNvbnN0IHZhcmlhYmxlcz0ge2NhdGVnb3J5U2x1ZzogY3R4LnBhcmFtcy5zbHVnIGFzIHN0cmluZ31cclxuICBjb25zb2xlLmxvZyhcImdldFN0YXRpY1Byb3BzXCIpO1xyXG4gIHRyeSB7XHJcblxyXG4gICAgZGF0YSA9IGF3YWl0IGxvYWRQb3N0cyh2YXJpYWJsZXMpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGRhdGEgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coZGF0YS5wb3N0cyk7XHJcbiAgY29uc29sZS5sb2coZGF0YS5wb3N0c1swXS5jYXRlZ29yaWVzKTtcclxuXHJcbiAgaWYoIWRhdGEgfHwgIWRhdGEucG9zdHMgfHwgIWRhdGEucG9zdHMubGVuZ3RoKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdEZvdWQ6IHRydWUsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHBvc3RzOmRhdGEucG9zdHMsXHJcbiAgICAgICAgc2V0dGluZzogZGF0YS5zZXR0aW5nLFxyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgLi4uZGVmYXVsdExvYWRQb3N0c1ZhcmlhYmxlcyxcclxuICAgICAgICAgIC4uLnZhcmlhYmxlcyxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHJldmFsaWRhdGU6IDI0KjYwKjYwLFxyXG4gICAgfTtcclxufTtcclxuIiwiaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IHtCYXNlVGVtcGxhdGUgfSBmcm9tICcuLi9CYXNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFndWFyZGVUZW1wbGF0ZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgICA8U3R5bGVkLkNvbnRlbnRDb250YWluZXI+XHJcbiAgICAgICAgPGgxPkFndWFyZGUuLi4uPC9oMT5cclxuICAgICAgPC9TdHlsZWQuQ29udGVudENvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgcGFkZGluZzowO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5tZWRpdW1HcmF5fTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICBgfVxyXG5gO1xyXG4iLCJpbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQge1Bvc3RHcmlkfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3RHcmlkJztcclxuaW1wb3J0IHtQb3N0U3RyYXBpfSBmcm9tICcuLi8uLi9zaGFyZWQtdHlwZXMvcG9zdC1zdHJhcGknO1xyXG5pbXBvcnQge1NldHRpbmdzU3RyYXBpfSBmcm9tICcuLi8uLi9zaGFyZWQtdHlwZXMvc2V0dGluZ3Mtc3RyYXBpJ1xyXG5pbXBvcnQge0Jhc2VUZW1wbGF0ZSB9IGZyb20gJy4uL0Jhc2UnO1xyXG5pbXBvcnQge3VzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0xvYWRQb3N0c1ZhcmlhYmxlcyxsb2FkUG9zdHN9IGZyb20gJy4uLy4uL2FwaS9sb2FkLXBvc3RzJztcclxuXHJcblxyXG5cclxuZXhwb3J0IHR5cGUgUG9zdHNUZW1wbGF0ZVByb3BzID0ge1xyXG4gIHNldHRpbmdzOiBTZXR0aW5nc1N0cmFwaTtcclxuICBwb3N0cz86UG9zdFN0cmFwaVtdO1xyXG4gIHZhcmlhYmxlcz86IExvYWRQb3N0c1ZhcmlhYmxlcztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0c1RlbXBsYXRlID0gKHsgc2V0dGluZ3MsIHBvc3RzID1bXSwgdmFyaWFibGVzIH06IFBvc3RzVGVtcGxhdGVQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZVBvc3RzLCBzZXRTdGF0ZVBvc3RzXSA9IHVzZVN0YXRlKHBvc3RzKTtcclxuICBjb25zdCBbc3RhdGVWYXJpYWJsZXMsIHNldFN0YXRlVmFyaWFibGVzXSA9IHVzZVN0YXRlKHZhcmlhYmxlcyk7XHJcbiAgY29uc3QgW2J1dHRvbkRpc2FibGVkLCBzZXRCdXR0b25EaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW25vTW9yZVBvc3RzLCBzZXROb01vcmVQb3N0c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmIChzdGF0ZVBvc3RzLmxlbmd0aCA8IHZhcmlhYmxlcy5saW1pdCl7XHJcbiAgICAgICAgICBzZXROb01vcmVQb3N0cyh0cnVlKTtcclxuICAgICAgfVxyXG4gIH0sW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2FkTW9yZVBvc3RzID0gYXN5bmMoKSA9PiB7XHJcbiAgICBzZXRCdXR0b25EaXNhYmxlZCh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBuZXdWYXJpYWJsZXMgPSB7XHJcbiAgICAgIC4uLnN0YXRlVmFyaWFibGVzLFxyXG4gICAgICBzdGFydDogc3RhdGVWYXJpYWJsZXMuc3RhcnQgKyBzdGF0ZVZhcmlhYmxlcy5saW1pdCxcclxuICAgICAgbGltaXQ6IHN0YXRlVmFyaWFibGVzLmxpbWl0LFxyXG4gICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IG1vcmVQb3N0cyA9IGF3YWl0IGxvYWRQb3N0cyhuZXdWYXJpYWJsZXMpO1xyXG5cclxuICAgICAgaWYgKCFtb3JlUG9zdHMgfHwgIW1vcmVQb3N0cy5wb3N0cyB8fCAhbW9yZVBvc3RzLnBvc3RzLmxlbmd0aCl7XHJcbiAgICAgICAgc2V0Tm9Nb3JlUG9zdHModHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRCdXR0b25EaXNhYmxlZChmYWxzZSk7XHJcbiAgICAgIHNldFN0YXRlVmFyaWFibGVzKG5ld1ZhcmlhYmxlcyk7XHJcbiAgICAgIHNldFN0YXRlUG9zdHMoKHApID0+IFsuLi5wLCAuLi5tb3JlUG9zdHMucG9zdHNdKTtcclxuICAgIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QmFzZVRlbXBsYXRlIHNldHRpbmdzPXtzZXR0aW5nc30+XHJcblxyXG4gICAgICA8UG9zdEdyaWQgcG9zdHM9e3N0YXRlUG9zdHN9Lz5cclxuICAgICAgXHJcbiAgICB7c3RhdGVQb3N0cyAmJiBzdGF0ZVBvc3RzLmxlbmd0aCA/KFxyXG4gICAgICA8U3R5bGVkLkJ1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgICA8U3R5bGVkLkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2FkTW9yZVBvc3RzfSBkaXNhYmxlZD17YnV0dG9uRGlzYWJsZWR9PlxyXG4gICAgICAgICAge25vTW9yZVBvc3RzID8gICdTZW0gbWFpcyBwb3N0cycgOiAnQ2FycmVnYXIgbWFpcyd9XHJcbiAgICAgICAgPC9TdHlsZWQuQnV0dG9uPlxyXG4gICAgICA8L1N0eWxlZC5CdXR0b25Db250YWluZXI+KSA6IG51bGx9XHJcbiAgICA8L0Jhc2VUZW1wbGF0ZT5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgcGFkZGluZzogMCAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfTtcclxuICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX0gMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXHJcbiAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fTtcclxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmdzLnNtYWxsfSAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5kYXJrZXJHcmF5fTtcclxuICAgIH1cclxuICBgfVxyXG5gO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3R5bGVkLWljb25zL21hdGVyaWFsLW91dGxpbmVkL0Nsb3NlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3R5bGVkLWljb25zL21hdGVyaWFsLW91dGxpbmVkL0tleWJvYXJkQXJyb3dVcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0eWxlZC1pY29ucy9tYXRlcmlhbC1vdXRsaW5lZC9NZW51XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXJlcXVlc3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9