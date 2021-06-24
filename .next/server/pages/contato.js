(function() {
var exports = {};
exports.id = "pages/contato";
exports.ids = ["pages/contato"];
exports.modules = {

/***/ "./src/pages/contato.tsx":
/*!*******************************!*\
  !*** ./src/pages/contato.tsx ***!
  \*******************************/
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
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _api_load_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/load-posts */ "./src/api/load-posts.ts");
/* harmony import */ var _templates_OtherPagesTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/OtherPagesTemplate */ "./src/templates/OtherPagesTemplate/index.tsx");
/* harmony import */ var _templates_OtherPagesTemplate_mock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/OtherPagesTemplate/mock */ "./src/templates/OtherPagesTemplate/mock.ts");


var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\pages\\contato.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function Index({
  post,
  setting,
  variables
}) {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Pesquisa: ", router.query.q, " - ", setting.blogName]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates_OtherPagesTemplate__WEBPACK_IMPORTED_MODULE_4__.OtherPagesTemplate, {
      title: _templates_OtherPagesTemplate_mock__WEBPACK_IMPORTED_MODULE_5__.default.contact.title,
      content: _templates_OtherPagesTemplate_mock__WEBPACK_IMPORTED_MODULE_5__.default.contact.content,
      settings: setting
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
const getStaticProps = async () => {
  let data = null;

  try {
    data = await (0,_api_load_posts__WEBPACK_IMPORTED_MODULE_3__.loadPosts)();
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
      variables: _objectSpread({}, _api_load_posts__WEBPACK_IMPORTED_MODULE_3__.defaultLoadPostsVariables)
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","src_api_load-posts_ts-src_templates_Base_index_tsx","src_templates_OtherPagesTemplate_index_tsx-src_templates_OtherPagesTemplate_mock_ts"], function() { return __webpack_exec__("./src/pages/contato.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9jb250YXRvLnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIkBzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvQ2xvc2VcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIkBzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvS2V5Ym9hcmRBcnJvd1VwXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc3R5bGVkLWljb25zL21hdGVyaWFsLW91dGxpbmVkL01lbnVcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcImdyYXBocWwtcmVxdWVzdFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiSW5kZXgiLCJwb3N0Iiwic2V0dGluZyIsInZhcmlhYmxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwicSIsImJsb2dOYW1lIiwiTW9jayIsImdldFN0YXRpY1Byb3BzIiwiZGF0YSIsImxvYWRQb3N0cyIsImUiLCJjb25zb2xlIiwibG9nIiwicG9zdHMiLCJsZW5ndGgiLCJub3RGb3VuZCIsImNvdmVyIiwicHJvcHMiLCJkZWZhdWx0TG9hZFBvc3RzVmFyaWFibGVzIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxNQUFGO0FBQVFDLFNBQVI7QUFBaUJDO0FBQWpCLENBQWYsRUFBa0U7QUFDOUUsUUFBTUMsTUFBTSxHQUFHQyxrRUFBUyxFQUF4QjtBQUNFLHNCQUNBO0FBQUEsNEJBQ0MsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBLGlDQUNhRCxNQUFNLENBQUNFLEtBQVAsQ0FBYUMsQ0FEMUIsU0FDZ0NMLE9BQU8sQ0FBQ00sUUFEeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBTUMsOERBQUMsNkVBQUQ7QUFBb0IsV0FBSyxFQUFFQyxxRkFBM0I7QUFBdUQsYUFBTyxFQUFFQSx1RkFBaEU7QUFBOEYsY0FBUSxFQUFFUDtBQUF4RztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkQ7QUFBQSxrQkFEQTtBQVVKO0FBR00sTUFBTVEsY0FBcUQsR0FBRyxZQUFVO0FBQzdFLE1BQUlDLElBQUksR0FBRSxJQUFWOztBQUVBLE1BQUk7QUFDRkEsUUFBSSxHQUFHLE1BQU1DLDBEQUFTLEVBQXRCO0FBRUQsR0FIRCxDQUdFLE9BQU9DLENBQVAsRUFBVTtBQUNWRixRQUFJLEdBQUcsSUFBUDtBQUNEOztBQUNERyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaOztBQUNBLE1BQUcsQ0FBQ0EsSUFBRCxJQUFTLENBQUNBLElBQUksQ0FBQ0ssS0FBZixJQUF3QixDQUFDTCxJQUFJLENBQUNLLEtBQUwsQ0FBV0MsTUFBdkMsRUFBOEM7QUFDMUMsV0FBTztBQUNMQyxjQUFRLEVBQUU7QUFETCxLQUFQO0FBR0g7O0FBRUNKLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFJLENBQUNLLEtBQUwsQ0FBVyxDQUFYLEVBQWNHLEtBQTFCO0FBRUEsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTEosV0FBSyxFQUFDTCxJQUFJLENBQUNLLEtBRE47QUFFTGQsYUFBTyxFQUFFUyxJQUFJLENBQUNULE9BRlQ7QUFHTEMsZUFBUyxvQkFDSmtCLHNFQURJO0FBSEosS0FERjtBQVFMQyxjQUFVLEVBQUUsS0FBRyxFQUFILEdBQU07QUFSYixHQUFQO0FBV0gsQ0E5Qk0sQzs7Ozs7Ozs7Ozs7QUN0QlAsbUU7Ozs7Ozs7Ozs7O0FDQUEsNkU7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvY29udGF0by5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7R2V0U3RhdGljUHJvcHN9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5pbXBvcnQge2RlZmF1bHRMb2FkUG9zdHNWYXJpYWJsZXMsIGxvYWRQb3N0cywgU3RyYXBpUG9zdEFuZFNldHRpbmdzfSBmcm9tICcuLi9hcGkvbG9hZC1wb3N0cyc7XHJcbmltcG9ydCB7IE90aGVyUGFnZXNUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlcy9PdGhlclBhZ2VzVGVtcGxhdGUnO1xyXG5pbXBvcnQgKiBhcyBNb2NrIGZyb20gJy4uL3RlbXBsYXRlcy9PdGhlclBhZ2VzVGVtcGxhdGUvbW9jayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7IHBvc3QsIHNldHRpbmcsIHZhcmlhYmxlc306IFN0cmFwaVBvc3RBbmRTZXR0aW5ncyl7XHJcbiAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgIHJldHVybiAoXHJcbiAgICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgUGVzcXVpc2E6IHtyb3V0ZXIucXVlcnkucX0gLSB7c2V0dGluZy5ibG9nTmFtZX1cclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxPdGhlclBhZ2VzVGVtcGxhdGUgdGl0bGU9e01vY2suZGVmYXVsdC5jb250YWN0LnRpdGxlfSBjb250ZW50PXtNb2NrLmRlZmF1bHQuY29udGFjdC5jb250ZW50fSBzZXR0aW5ncz17c2V0dGluZ30gLz5cclxuICAgICA8Lz5cclxuICAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHM8U3RyYXBpUG9zdEFuZFNldHRpbmdzPiA9IGFzeW5jKCkgPT57XHJcbiAgbGV0IGRhdGEgPW51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBkYXRhID0gYXdhaXQgbG9hZFBvc3RzKCk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGRhdGEgPSBudWxsO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZygndGVzdGUnKVxyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIGlmKCFkYXRhIHx8ICFkYXRhLnBvc3RzIHx8ICFkYXRhLnBvc3RzLmxlbmd0aCl7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEucG9zdHNbMF0uY292ZXIpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgcG9zdHM6ZGF0YS5wb3N0cyxcclxuICAgICAgICBzZXR0aW5nOiBkYXRhLnNldHRpbmcsXHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAuLi5kZWZhdWx0TG9hZFBvc3RzVmFyaWFibGVzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJldmFsaWRhdGU6IDI0KjYwKjYwLFxyXG4gICAgfTtcclxuXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvQ2xvc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvS2V5Ym9hcmRBcnJvd1VwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3R5bGVkLWljb25zL21hdGVyaWFsLW91dGxpbmVkL01lbnVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtcmVxdWVzdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9