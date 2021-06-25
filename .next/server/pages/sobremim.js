(function() {
var exports = {};
exports.id = 696;
exports.ids = [696];
exports.modules = {

/***/ 8575:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5030);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3624);
/* harmony import */ var _api_load_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7479);
/* harmony import */ var _templates_OtherPagesTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5297);
/* harmony import */ var _templates_OtherPagesTemplate_mock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7622);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function Index({
  settings,
  variables
}) {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
        children: ["Pesquisa: ", router.query.q, " - ", settings.blogName]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_templates_OtherPagesTemplate__WEBPACK_IMPORTED_MODULE_4__/* .OtherPagesTemplate */ .j, {
      title: _templates_OtherPagesTemplate_mock__WEBPACK_IMPORTED_MODULE_5__/* .default.about.title */ .Z.about.title,
      content: _templates_OtherPagesTemplate_mock__WEBPACK_IMPORTED_MODULE_5__/* .default.about.content */ .Z.about.content,
      settings: settings
    })]
  });
}
const getStaticProps = async () => {
  let data = null;

  try {
    data = await (0,_api_load_posts__WEBPACK_IMPORTED_MODULE_3__/* .loadPosts */ .N)();
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

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
      variables: _objectSpread({}, _api_load_posts__WEBPACK_IMPORTED_MODULE_3__/* .defaultLoadPostsVariables */ .p)
    },
    revalidate: 24 * 60 * 60
  };
};

/***/ }),

/***/ 3952:
/***/ (function(module) {

"use strict";
module.exports = require("@styled-icons/material-outlined/Close");;

/***/ }),

/***/ 8211:
/***/ (function(module) {

"use strict";
module.exports = require("@styled-icons/material-outlined/KeyboardArrowUp");;

/***/ }),

/***/ 5047:
/***/ (function(module) {

"use strict";
module.exports = require("@styled-icons/material-outlined/Menu");;

/***/ }),

/***/ 7435:
/***/ (function(module) {

"use strict";
module.exports = require("graphql-request");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9914:
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
var __webpack_exports__ = __webpack_require__.X(0, [885,54,759], function() { return __webpack_exec__(8575); });
module.exports = __webpack_exports__;

})();