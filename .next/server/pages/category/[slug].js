(function() {
var exports = {};
exports.id = 24;
exports.ids = [24];
exports.modules = {

/***/ 6957:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ CategoryPage; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ../../../AppData/Roaming/npm/node_modules/next/head.js
var head = __webpack_require__(5030);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ../../../AppData/Roaming/npm/node_modules/next/dist/client/router.js
var client_router = __webpack_require__(3624);
// EXTERNAL MODULE: ./src/api/load-posts.ts + 3 modules
var load_posts = __webpack_require__(7374);
// EXTERNAL MODULE: ./src/templates/PostsTemplate/index.tsx + 5 modules
var PostsTemplate = __webpack_require__(6760);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/templates/AguardeTemplate/styles.ts

const ContentContainer = external_styled_components_default().div.withConfig({
  displayName: "styles__ContentContainer",
  componentId: "zxnfoz-0"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["padding:0;margin:0;text-align:center;background-color:", ";display:flex;justify-content:center;align-items:center;width:100%;height:100vh;"], theme.colors.mediumGray));
;// CONCATENATED MODULE: ./src/templates/AguardeTemplate/index.tsx


const AguardeTemplate = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(ContentContainer, {
    children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Aguarde...."
    })
  });
};
;// CONCATENATED MODULE: ./src/pages/category/[slug].tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function CategoryPage({
  posts,
  settings,
  variables
}) {
  const router = (0,client_router.useRouter)();

  if (router.isFallback) {
    return /*#__PURE__*/jsx_runtime_.jsx(AguardeTemplate, {});
  } //const categoryName = posts[0].categories.filter(
  //   (category) => category.slug === router.query.slug,
  //)[0].displayName;


  const categoryName = "teste";
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: ["Category: ", categoryName, " - ", settings.blogName]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(PostsTemplate/* PostsTemplate */.p, {
      posts: posts,
      settings: settings,
      variables: variables
    })]
  });
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

  try {
    data = await (0,load_posts/* loadPosts */.N)(variables);
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      posts: data.posts,
      settings: data.setting,
      variables: _objectSpread(_objectSpread({}, load_posts/* defaultLoadPostsVariables */.p), variables)
    },
    revalidate: 60
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [885,173,760], function() { return __webpack_exec__(6957); });
module.exports = __webpack_exports__;

})();