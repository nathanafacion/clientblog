exports.id = "src_templates_PostsTemplate_index_tsx";
exports.ids = ["src_templates_PostsTemplate_index_tsx"];
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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3RDYXJkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3RDYXJkL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3RHcmlkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3RHcmlkL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy90ZW1wbGF0ZXMvUG9zdHNUZW1wbGF0ZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdGVtcGxhdGVzL1Bvc3RzVGVtcGxhdGUvc3R5bGVzLnRzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwiaWQiLCJ0aXRsZSIsImNvdmVyIiwiZXhjZXJwdCIsInNsdWciLCJ1cmwiLCJXcmFwcGVyIiwic3R5bGVkIiwidGhlbWUiLCJjc3MiLCJIZWFkaW5nU3R5bGVzIiwic3BhY2luZ3MiLCJzbWFsbCIsImNvbG9ycyIsImRhcmtlckdyYXkiLCJDb3ZlciIsIkV4Y2VycHQiLCJQb3N0R3JpZCIsInBvc3RzIiwibGVuZ3RoIiwibWFwIiwicG9zdCIsIk5vdEZvdW5kIiwibGFyZ2UiLCJmb250Iiwic2l6ZXMiLCJHcmlkIiwibWVkaWEiLCJsdGVTbWFsbCIsIlBvc3RzVGVtcGxhdGUiLCJzZXR0aW5ncyIsInZhcmlhYmxlcyIsInN0YXRlUG9zdHMiLCJzZXRTdGF0ZVBvc3RzIiwidXNlU3RhdGUiLCJzdGF0ZVZhcmlhYmxlcyIsInNldFN0YXRlVmFyaWFibGVzIiwiYnV0dG9uRGlzYWJsZWQiLCJzZXRCdXR0b25EaXNhYmxlZCIsIm5vTW9yZVBvc3RzIiwic2V0Tm9Nb3JlUG9zdHMiLCJ1c2VFZmZlY3QiLCJsaW1pdCIsImhhbmRsZUxvYWRNb3JlUG9zdHMiLCJuZXdWYXJpYWJsZXMiLCJzdGFydCIsIm1vcmVQb3N0cyIsImxvYWRQb3N0cyIsInAiLCJCdXR0b25Db250YWluZXIiLCJCdXR0b24iLCJwcmltYXJ5Iiwid2hpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBWU8sTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFDdkJDLElBRHVCO0FBRXZCQyxPQUZ1QjtBQUd2QkMsT0FIdUI7QUFJdkJDLFNBSnVCO0FBS3ZCQztBQUx1QixDQUFELEtBTUE7QUFDdEIsc0JBRUUsOERBQUMsNENBQUQ7QUFBQSw0QkFFRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRyxTQUFRQSxJQUFLLEVBQTFCO0FBQUEsNkJBRUU7QUFBQSwrQkFFRSw4REFBQywwQ0FBRDtBQUFjLGFBQUcsRUFBRUYsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRyxHQUFULElBQWdCSCxLQUFLLENBQUNHLEdBQXpDO0FBQThDLGFBQUcsRUFBRyxHQUFFSixLQUFNO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQVVFLDhEQUFDLDZDQUFEO0FBQVMsUUFBRSxFQUFDLElBQVo7QUFBaUIsVUFBSSxFQUFDLE9BQXRCO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUcsU0FBUUcsSUFBSyxFQUExQjtBQUFBLCtCQUNFO0FBQUEsb0JBQUlIO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGLGVBZ0JFLDhEQUFDLDRDQUFEO0FBQUEsZ0JBQ0dFO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUF1QkQsQ0E5Qk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkUDtBQUNBO0FBRU8sTUFBTUcsT0FBTyxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNsQixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQyxzREFBZiw4TEFDSUMsa0RBREosRUFHdUJGLEtBQUssQ0FBQ0csUUFBTixDQUFlQyxLQUh0QyxFQUlxQkosS0FBSyxDQUFDRyxRQUFOLENBQWVDLEtBSnBDLEVBWWFKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxVQVoxQixDQURrQixDQUFiO0FBc0JBLE1BQU1DLEtBQUssR0FBR1IsdUVBQUg7QUFBQTtBQUFBO0FBQUEsNERBQVg7QUFLQSxNQUFNUyxPQUFPLEdBQUdULHFFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQWIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCUDtBQUVBO0FBT08sTUFBTVUsUUFBUSxHQUFHLENBQUM7QUFDdkJDLE9BQUssR0FBRztBQURlLENBQUQsS0FFQTtBQUN0QixzQkFFRSw4REFBQyw0Q0FBRDtBQUFBLGVBQ0NBLEtBQUssQ0FBQ0MsTUFBTixLQUFnQixDQUFoQixpQkFDQyw4REFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUtFLDhEQUFDLHlDQUFEO0FBQUEsZ0JBQ0dELEtBQUssQ0FBQ0MsTUFBTixHQUFjLENBQWQsSUFBbUJELEtBQUssQ0FBQ0UsR0FBTixDQUFXQyxJQUFELGlCQUM1Qiw4REFBQywrQ0FBRCxvQkFBMkNBLElBQTNDLEdBQWdCLGFBQVlBLElBQUksQ0FBQ3JCLEVBQUcsRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEa0I7QUFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQWNELENBakJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWUDtBQUdPLE1BQU1NLE9BQU8sR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsbUJBQWI7QUFLQSxNQUFNZSxRQUFRLEdBQUdmLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ2pCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVDLHNEQUFmLHFEQUNXRCxLQUFLLENBQUNHLFFBQU4sQ0FBZVksS0FEMUIsRUFHWWYsS0FBSyxDQUFDZ0IsSUFBTixDQUFXQyxLQUFYLENBQWlCYixLQUg3QixDQURpQixDQUFkO0FBUUEsTUFBTWMsSUFBSSxHQUFHbkIsdUVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDYixDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFhQyxzREFBYiwwS0FLT0QsS0FBSyxDQUFDRyxRQUFOLENBQWVZLEtBTHRCLEVBTVdmLEtBQUssQ0FBQ0csUUFBTixDQUFlWSxLQU4xQixFQVFTZixLQUFLLENBQUNtQixLQUFOLENBQVlDLFFBUnJCLENBRGEsQ0FBVixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCUDtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBVU8sTUFBTUMsYUFBYSxHQUFHLENBQUM7QUFBRUMsVUFBRjtBQUFZWixPQUFLLEdBQUUsRUFBbkI7QUFBdUJhO0FBQXZCLENBQUQsS0FBNEQ7QUFDdkYsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCQywrQ0FBUSxDQUFDaEIsS0FBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDaUIsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0YsK0NBQVEsQ0FBQ0gsU0FBRCxDQUFwRDtBQUNBLFFBQU07QUFBQSxPQUFDTSxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDSiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NOLCtDQUFRLENBQUMsS0FBRCxDQUE5QztBQUVBTyxrREFBUyxDQUFDLE1BQU07QUFDWixRQUFJVCxVQUFVLENBQUNiLE1BQVgsR0FBb0JZLFNBQVMsQ0FBQ1csS0FBbEMsRUFBd0M7QUFDcENGLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0g7QUFDSixHQUpRLEVBSVAsRUFKTyxDQUFUOztBQU1BLFFBQU1HLG1CQUFtQixHQUFHLFlBQVc7QUFDckNMLHFCQUFpQixDQUFDLElBQUQsQ0FBakI7O0FBRUEsVUFBTU0sWUFBWSxtQ0FDYlQsY0FEYTtBQUVoQlUsV0FBSyxFQUFFVixjQUFjLENBQUNVLEtBQWYsR0FBdUJWLGNBQWMsQ0FBQ08sS0FGN0I7QUFHaEJBLFdBQUssRUFBRVAsY0FBYyxDQUFDTztBQUhOLE1BQWxCOztBQU1FLFVBQU1JLFNBQVMsR0FBRyxNQUFNQywwREFBUyxDQUFDSCxZQUFELENBQWpDOztBQUVBLFFBQUksQ0FBQ0UsU0FBRCxJQUFjLENBQUNBLFNBQVMsQ0FBQzVCLEtBQXpCLElBQWtDLENBQUM0QixTQUFTLENBQUM1QixLQUFWLENBQWdCQyxNQUF2RCxFQUE4RDtBQUM1RHFCLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0E7QUFDRDs7QUFFREYscUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNBRixxQkFBaUIsQ0FBQ1EsWUFBRCxDQUFqQjtBQUNBWCxpQkFBYSxDQUFFZSxDQUFELElBQU8sQ0FBQyxHQUFHQSxDQUFKLEVBQU8sR0FBR0YsU0FBUyxDQUFDNUIsS0FBcEIsQ0FBUixDQUFiO0FBQ0QsR0FuQkg7O0FBcUJBLHNCQUNFLDhEQUFDLCtDQUFEO0FBQWMsWUFBUSxFQUFFWSxRQUF4QjtBQUFBLDRCQUVFLDhEQUFDLDBEQUFEO0FBQVUsV0FBSyxFQUFFRTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLEVBSUNBLFVBQVUsSUFBSUEsVUFBVSxDQUFDYixNQUF6QixnQkFDQyw4REFBQyxvREFBRDtBQUFBLDZCQUNFLDhEQUFDLDJDQUFEO0FBQWUsZUFBTyxFQUFFd0IsbUJBQXhCO0FBQTZDLGdCQUFRLEVBQUVOLGNBQXZEO0FBQUEsa0JBQ0dFLFdBQVcsR0FBSSxnQkFBSixHQUF1QjtBQURyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxHQUs4QixJQVQvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWFELENBOUNNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCUDtBQUVPLE1BQU1VLGVBQWUsR0FBRzFDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ3hCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVDLHNEQUFmLHdFQUNhRCxLQUFLLENBQUNHLFFBQU4sQ0FBZVksS0FENUIsRUFFVWYsS0FBSyxDQUFDRyxRQUFOLENBQWVZLEtBRnpCLENBRHdCLENBQXJCO0FBU0EsTUFBTTJCLE1BQU0sR0FBRzNDLDBFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ2YsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUMsc0RBQWYsMkdBQ2NELEtBQUssQ0FBQ0ssTUFBTixDQUFhc0MsT0FEM0IsRUFFUzNDLEtBQUssQ0FBQ0ssTUFBTixDQUFhdUMsS0FGdEIsRUFJVzVDLEtBQUssQ0FBQ0csUUFBTixDQUFlQyxLQUoxQixFQUltQ0osS0FBSyxDQUFDRyxRQUFOLENBQWVZLEtBSmxELEVBT2dCZixLQUFLLENBQUNLLE1BQU4sQ0FBYUMsVUFQN0IsQ0FEZSxDQUFaLEMiLCJmaWxlIjoic3JjX3RlbXBsYXRlc19Qb3N0c1RlbXBsYXRlX2luZGV4X3RzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCB7SGVhZGluZ30gZnJvbSAnLi4vSGVhZGluZyc7XHJcbmltcG9ydCB7UG9zdFByb3BzfSBmcm9tICcuLi9Qb3N0JztcclxuaW1wb3J0IHtTdHJhcGlJbWFnZX0gZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVzL3N0cmFwaWltYWdlJztcclxuXHJcbmV4cG9ydCB0eXBlIFBvc3RDYXJkUHJvcHMgPSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNvdmVyOiBTdHJhcGlJbWFnZTtcclxuICBleGNlcnB0OnN0cmluZztcclxuICBzbHVnOnN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0Q2FyZCA9ICh7XHJcbiAgaWQsXHJcbiAgdGl0bGUsXHJcbiAgY292ZXIsXHJcbiAgZXhjZXJwdCxcclxuICBzbHVnXHJcbiAgIH06IFBvc3RDYXJkUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxTdHlsZWQuV3JhcHBlcj5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke3NsdWd9YH0+XHJcblxyXG4gICAgICAgIDxhPlxyXG5cclxuICAgICAgICAgIDxTdHlsZWQuQ292ZXIgc3JjPXtjb3ZlclswXS51cmwgfHwgY292ZXIudXJsfSBhbHQ9e2Ake3RpdGxlfWB9Lz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtzbHVnfWB9PlxyXG4gICAgICAgICAgPGE+e3RpdGxlfTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvSGVhZGluZz5cclxuXHJcbiAgICAgIDxTdHlsZWQuRXhjZXJwdD5cclxuICAgICAgICB7ZXhjZXJwdH1cclxuICAgICAgPC9TdHlsZWQuRXhjZXJwdD5cclxuICAgIDwvU3R5bGVkLldyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFRpdGxlIGFzIEhlYWRpbmdTdHlsZXMgfSBmcm9tICcuLi9IZWFkaW5nL3N0eWxlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgJHtIZWFkaW5nU3R5bGVzfSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgbWFyZ2luLXRvcDogY2FsYygke3RoZW1lLnNwYWNpbmdzLnNtYWxsfSAtIDAuNnJlbSk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3Muc21hbGx9O1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgICY6aG92ZXIgYSB7XHJcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrZXJHcmF5fTtcclxuICAgIH1cclxuICAgICY6aG92ZXIgaW1nIHtcclxuICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfVxyXG4gIGB9XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvdmVyID0gc3R5bGVkLmltZ2BcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFeGNlcnB0ID0gc3R5bGVkLnBgYDtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IHtIZWFkaW5nfSBmcm9tICcuLi9IZWFkaW5nJztcclxuaW1wb3J0IHtQb3N0Q2FyZCwgUG9zdENhcmRQcm9wc30gZnJvbSAnLi4vUG9zdENhcmQnO1xyXG5pbXBvcnQge1N0cmFwaUltYWdlfSBmcm9tICcuLi8uLi9zaGFyZWQtdHlwZWQvc3RyYXBpaW1hZ2UnO1xyXG5cclxuZXhwb3J0IHR5cGUgUG9zdEdyaWRQcm9wcyA9IHtcclxuICBwb3N0cz86IFBvc3RDYXJkUHJvcHNbXTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0R3JpZCA9ICh7XHJcbiAgcG9zdHMgPSBbXVxyXG4gICB9OiBQb3N0R3JpZFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8U3R5bGVkLldyYXBwZXI+XHJcbiAgICB7cG9zdHMubGVuZ3RoID09PTAgJiYgKFxyXG4gICAgICA8U3R5bGVkLk5vdEZvdW5kPiBOZW5odW0gcG9zdCBlbmNvbnRyYWRvIGFxdWkgPC9TdHlsZWQuTm90Rm91bmQ+XHJcblxyXG4gICAgKX1cclxuICAgICAgPFN0eWxlZC5HcmlkPlxyXG4gICAgICAgIHtwb3N0cy5sZW5ndGg+IDAgJiYgcG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICA8UG9zdENhcmQga2V5PXtgcG9zdC1jYXJkLSR7cG9zdC5pZH1gfSB7Li4ucG9zdH0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9TdHlsZWQuR3JpZD5cclxuICAgIDwvU3R5bGVkLldyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFRpdGxlIGFzIEhlYWRpbmdTdHlsZXMgfSBmcm9tICcuLi9IZWFkaW5nL3N0eWxlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6MTAwJTtcclxuYDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTm90Rm91bmQgPSBzdHlsZWQucGBcclxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplICR7dGhlbWUuZm9udC5zaXplcy5zbWFsbH07XHJcbiAgYH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcclxuICAkeyh7dGhlbWV9KSA9PiBjc3NgXHJcbiAgICBtYXgtd2lkdGg6IDEyMHJlbTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI4cmVtLCAxZnIpKTtcclxuICAgIGdhcDogJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfTtcclxuXHJcbiAgICBAbWVkaWEgJHt0aGVtZS5tZWRpYS5sdGVTbWFsbH17XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG4gYH1cclxuYDtcclxuIiwiaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IHtQb3N0R3JpZH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0R3JpZCc7XHJcbmltcG9ydCB7UG9zdFN0cmFwaX0gZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVzL3Bvc3Qtc3RyYXBpJztcclxuaW1wb3J0IHtTZXR0aW5nc1N0cmFwaX0gZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVzL3NldHRpbmdzLXN0cmFwaSdcclxuaW1wb3J0IHtCYXNlVGVtcGxhdGUgfSBmcm9tICcuLi9CYXNlJztcclxuaW1wb3J0IHt1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtMb2FkUG9zdHNWYXJpYWJsZXMsbG9hZFBvc3RzfSBmcm9tICcuLi8uLi9hcGkvbG9hZC1wb3N0cyc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIFBvc3RzVGVtcGxhdGVQcm9wcyA9IHtcclxuICBzZXR0aW5nczogU2V0dGluZ3NTdHJhcGk7XHJcbiAgcG9zdHM/OlBvc3RTdHJhcGlbXTtcclxuICB2YXJpYWJsZXM/OiBMb2FkUG9zdHNWYXJpYWJsZXM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdHNUZW1wbGF0ZSA9ICh7IHNldHRpbmdzLCBwb3N0cyA9W10sIHZhcmlhYmxlcyB9OiBQb3N0c1RlbXBsYXRlUHJvcHMpID0+IHtcclxuICBjb25zdCBbc3RhdGVQb3N0cywgc2V0U3RhdGVQb3N0c10gPSB1c2VTdGF0ZShwb3N0cyk7XHJcbiAgY29uc3QgW3N0YXRlVmFyaWFibGVzLCBzZXRTdGF0ZVZhcmlhYmxlc10gPSB1c2VTdGF0ZSh2YXJpYWJsZXMpO1xyXG4gIGNvbnN0IFtidXR0b25EaXNhYmxlZCwgc2V0QnV0dG9uRGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtub01vcmVQb3N0cywgc2V0Tm9Nb3JlUG9zdHNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoc3RhdGVQb3N0cy5sZW5ndGggPCB2YXJpYWJsZXMubGltaXQpe1xyXG4gICAgICAgICAgc2V0Tm9Nb3JlUG9zdHModHJ1ZSk7XHJcbiAgICAgIH1cclxuICB9LFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9hZE1vcmVQb3N0cyA9IGFzeW5jKCkgPT4ge1xyXG4gICAgc2V0QnV0dG9uRGlzYWJsZWQodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgbmV3VmFyaWFibGVzID0ge1xyXG4gICAgICAuLi5zdGF0ZVZhcmlhYmxlcyxcclxuICAgICAgc3RhcnQ6IHN0YXRlVmFyaWFibGVzLnN0YXJ0ICsgc3RhdGVWYXJpYWJsZXMubGltaXQsXHJcbiAgICAgIGxpbWl0OiBzdGF0ZVZhcmlhYmxlcy5saW1pdCxcclxuICAgIH07XHJcblxyXG4gICAgICBjb25zdCBtb3JlUG9zdHMgPSBhd2FpdCBsb2FkUG9zdHMobmV3VmFyaWFibGVzKTtcclxuXHJcbiAgICAgIGlmICghbW9yZVBvc3RzIHx8ICFtb3JlUG9zdHMucG9zdHMgfHwgIW1vcmVQb3N0cy5wb3N0cy5sZW5ndGgpe1xyXG4gICAgICAgIHNldE5vTW9yZVBvc3RzKHRydWUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0QnV0dG9uRGlzYWJsZWQoZmFsc2UpO1xyXG4gICAgICBzZXRTdGF0ZVZhcmlhYmxlcyhuZXdWYXJpYWJsZXMpO1xyXG4gICAgICBzZXRTdGF0ZVBvc3RzKChwKSA9PiBbLi4ucCwgLi4ubW9yZVBvc3RzLnBvc3RzXSk7XHJcbiAgICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJhc2VUZW1wbGF0ZSBzZXR0aW5ncz17c2V0dGluZ3N9PlxyXG5cclxuICAgICAgPFBvc3RHcmlkIHBvc3RzPXtzdGF0ZVBvc3RzfS8+XHJcbiAgICAgIFxyXG4gICAge3N0YXRlUG9zdHMgJiYgc3RhdGVQb3N0cy5sZW5ndGggPyhcclxuICAgICAgPFN0eWxlZC5CdXR0b25Db250YWluZXI+XHJcbiAgICAgICAgPFN0eWxlZC5CdXR0b24gb25DbGljaz17aGFuZGxlTG9hZE1vcmVQb3N0c30gZGlzYWJsZWQ9e2J1dHRvbkRpc2FibGVkfT5cclxuICAgICAgICAgIHtub01vcmVQb3N0cyA/ICAnU2VtIG1haXMgcG9zdHMnIDogJ0NhcnJlZ2FyIG1haXMnfVxyXG4gICAgICAgIDwvU3R5bGVkLkJ1dHRvbj5cclxuICAgICAgPC9TdHlsZWQuQnV0dG9uQ29udGFpbmVyPikgOiBudWxsfVxyXG4gICAgPC9CYXNlVGVtcGxhdGU+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIHBhZGRpbmc6IDAgJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcbiAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5ncy5zbWFsbH0gJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuZGFya2VyR3JheX07XHJcbiAgICB9XHJcbiAgYH1cclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==