(function() {
var exports = {};
exports.id = "pages/tag/[slug]";
exports.ids = ["pages/tag/[slug]"];
exports.modules = {

/***/ "./src/pages/tag/[slug].tsx":
/*!**********************************!*\
  !*** ./src/pages/tag/[slug].tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TagPage; },
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


var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\pages\\tag\\[slug].tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function TagPage({
  posts,
  setting,
  variables
}) {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  if (router.isFallback) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Loading.."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this);
  }

  const tagName = posts[0].tags.filter(tag => tag.slug === router.query.slug)[0].displayName;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Tag: ", tagName, " - ", setting.blogName]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates_PostsTemplate__WEBPACK_IMPORTED_MODULE_4__.PostsTemplate, {
      posts: posts,
      settings: setting,
      variables: variables
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  };
};
const getStaticProps = async ctx => {
  let data = null;
  const variables = {
    tagSlug: ctx.params.slug
  };

  try {
    data = await (0,_api_load_posts__WEBPACK_IMPORTED_MODULE_3__.loadPosts)(variables);
  } catch (e) {
    data = null;
  }

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","src_api_load-posts_ts-src_templates_Base_index_tsx","src_templates_PostsTemplate_index_tsx"], function() { return __webpack_exec__("./src/pages/tag/[slug].tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy90YWcvW3NsdWddLnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIkBzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvQ2xvc2VcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIkBzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvS2V5Ym9hcmRBcnJvd1VwXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc3R5bGVkLWljb25zL21hdGVyaWFsLW91dGxpbmVkL01lbnVcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcImdyYXBocWwtcmVxdWVzdFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJUYWdQYWdlIiwicG9zdHMiLCJzZXR0aW5nIiwidmFyaWFibGVzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNGYWxsYmFjayIsInRhZ05hbWUiLCJ0YWdzIiwiZmlsdGVyIiwidGFnIiwic2x1ZyIsInF1ZXJ5IiwiZGlzcGxheU5hbWUiLCJibG9nTmFtZSIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY3R4IiwiZGF0YSIsInRhZ1NsdWciLCJwYXJhbXMiLCJsb2FkUG9zdHMiLCJlIiwibGVuZ3RoIiwibm90Rm91ZCIsInByb3BzIiwiZGVmYXVsdExvYWRQb3N0c1ZhcmlhYmxlcyIsInJldmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxDQUFpQjtBQUFFQyxPQUFGO0FBQVNDLFNBQVQ7QUFBa0JDO0FBQWxCLENBQWpCLEVBQXFFO0FBQ2pGLFFBQU1DLE1BQU0sR0FBR0Msa0VBQVMsRUFBeEI7O0FBRUEsTUFBR0QsTUFBTSxDQUFDRSxVQUFWLEVBQXFCO0FBQ25CLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxRQUFNQyxPQUFPLEdBQUdOLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU08sSUFBVCxDQUFjQyxNQUFkLENBQ2JDLEdBQUQsSUFBU0EsR0FBRyxDQUFDQyxJQUFKLEtBQWFQLE1BQU0sQ0FBQ1EsS0FBUCxDQUFhRCxJQURyQixFQUVkLENBRmMsRUFFWEUsV0FGTDtBQUlBLHNCQUNFO0FBQUEsNEJBQ0MsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBLDRCQUNRTixPQURSLFNBQ29CTCxPQUFPLENBQUNZLFFBRDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQU1DLDhEQUFDLG1FQUFEO0FBQWUsV0FBSyxFQUFJYixLQUF4QjtBQUErQixjQUFRLEVBQUVDLE9BQXpDO0FBQW1ELGVBQVMsRUFBRUM7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5EO0FBQUEsa0JBREY7QUFVRjtBQUVNLE1BQU1ZLGNBQXFELEdBQUcsWUFBVTtBQUUzRSxTQUFPO0FBQ0xDLFNBQUssRUFBRSxFQURGO0FBRUxDLFlBQVEsRUFBRTtBQUZMLEdBQVA7QUFLSCxDQVBNO0FBVUEsTUFBTUMsY0FBcUQsR0FBRyxNQUFNQyxHQUFOLElBQWE7QUFDaEYsTUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQSxRQUFNakIsU0FBUyxHQUFHO0FBQUNrQixXQUFPLEVBQUVGLEdBQUcsQ0FBQ0csTUFBSixDQUFXWDtBQUFyQixHQUFsQjs7QUFFQSxNQUFJO0FBRUZTLFFBQUksR0FBRyxNQUFNRywwREFBUyxDQUFDcEIsU0FBRCxDQUF0QjtBQUNELEdBSEQsQ0FHRSxPQUFPcUIsQ0FBUCxFQUFVO0FBQ1ZKLFFBQUksR0FBRyxJQUFQO0FBQ0Q7O0FBRUQsTUFBRyxDQUFDQSxJQUFELElBQVMsQ0FBQ0EsSUFBSSxDQUFDbkIsS0FBZixJQUF3QixDQUFDbUIsSUFBSSxDQUFDbkIsS0FBTCxDQUFXd0IsTUFBdkMsRUFBOEM7QUFDNUMsV0FBTztBQUNMQyxhQUFPLEVBQUU7QUFESixLQUFQO0FBR0Q7O0FBRUMsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTDFCLFdBQUssRUFBQ21CLElBQUksQ0FBQ25CLEtBRE47QUFFTEMsYUFBTyxFQUFFa0IsSUFBSSxDQUFDbEIsT0FGVDtBQUdMQyxlQUFTLGtDQUNKeUIsc0VBREksR0FFSnpCLFNBRkk7QUFISixLQURGO0FBU0wwQixjQUFVLEVBQUUsS0FBRyxFQUFILEdBQU07QUFUYixHQUFQO0FBV0gsQ0E1Qk0sQzs7Ozs7Ozs7Ozs7QUN2Q1AsbUU7Ozs7Ozs7Ozs7O0FDQUEsNkU7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvdGFnL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7R2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuaW1wb3J0IHtkZWZhdWx0TG9hZFBvc3RzVmFyaWFibGVzLCBsb2FkUG9zdHMsIFN0cmFwaVBvc3RBbmRTZXR0aW5nc30gZnJvbSAnLi4vLi4vYXBpL2xvYWQtcG9zdHMnO1xyXG5pbXBvcnQge1Bvc3RzVGVtcGxhdGV9IGZyb20gJy4uLy4uL3RlbXBsYXRlcy9Qb3N0c1RlbXBsYXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhZ1BhZ2UoeyBwb3N0cywgc2V0dGluZywgdmFyaWFibGVzfTogU3RyYXBpUG9zdEFuZFNldHRpbmdzKXtcclxuICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICBpZihyb3V0ZXIuaXNGYWxsYmFjayl7XHJcbiAgICAgcmV0dXJuIDxoMT5Mb2FkaW5nLi48L2gxPjtcclxuICAgfVxyXG5cclxuICAgY29uc3QgdGFnTmFtZSA9IHBvc3RzWzBdLnRhZ3MuZmlsdGVyKFxyXG4gICAgICh0YWcpID0+IHRhZy5zbHVnID09PSByb3V0ZXIucXVlcnkuc2x1ZyxcclxuICAgKVswXS5kaXNwbGF5TmFtZTtcclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgVGFnOiB7dGFnTmFtZX0gLSB7c2V0dGluZy5ibG9nTmFtZX1cclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxQb3N0c1RlbXBsYXRlIHBvc3RzID0ge3Bvc3RzfSBzZXR0aW5ncz17c2V0dGluZ30gIHZhcmlhYmxlcz17dmFyaWFibGVzfS8+XHJcbiAgICAgPC8+XHJcbiAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUHJvcHM8U3RyYXBpUG9zdEFuZFNldHRpbmdzPiA9IGFzeW5jKCkgPT57XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGF0aHM6IFtdLFxyXG4gICAgICBmYWxsYmFjazogdHJ1ZSxcclxuICAgIH07XHJcblxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHM8U3RyYXBpUG9zdEFuZFNldHRpbmdzPiA9IGFzeW5jKGN0eCkgPT57XHJcbiAgbGV0IGRhdGEgPSBudWxsO1xyXG4gIGNvbnN0IHZhcmlhYmxlcyA9IHt0YWdTbHVnOiBjdHgucGFyYW1zLnNsdWcgYXMgc3RyaW5nfTtcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBkYXRhID0gYXdhaXQgbG9hZFBvc3RzKHZhcmlhYmxlcyk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgZGF0YSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBpZighZGF0YSB8fCAhZGF0YS5wb3N0cyB8fCAhZGF0YS5wb3N0cy5sZW5ndGgpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90Rm91ZDogdHJ1ZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgcG9zdHM6ZGF0YS5wb3N0cyxcclxuICAgICAgICBzZXR0aW5nOiBkYXRhLnNldHRpbmcsXHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAuLi5kZWZhdWx0TG9hZFBvc3RzVmFyaWFibGVzLFxyXG4gICAgICAgICAgLi4udmFyaWFibGVzXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICByZXZhbGlkYXRlOiAyNCo2MCo2MCxcclxuICAgIH07XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvQ2xvc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvS2V5Ym9hcmRBcnJvd1VwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3R5bGVkLWljb25zL21hdGVyaWFsLW91dGxpbmVkL01lbnVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtcmVxdWVzdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=