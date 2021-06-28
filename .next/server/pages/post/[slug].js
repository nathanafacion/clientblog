(function() {
var exports = {};
exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 4608:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": function() { return /* binding */ PostContainer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const postContainerStyles = {
  max: theme => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["max-width:", ";"], theme.sizes.max),
  content: theme => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["max-width:", ";"], theme.sizes.content)
};
const PostContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "PostContainer",
  componentId: "sc-1hb37un-0"
})(["", ""], ({
  theme,
  size
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["width:100%;margin:0 auto;padding:0 ", ";", ""], theme.spacings.large, postContainerStyles[size](theme)));

/***/ }),

/***/ 5310:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ PostPage; },
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
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/templates/PostTemplate/styles.ts

const TagsContainer = external_styled_components_default().div.withConfig({
  displayName: "styles__TagsContainer",
  componentId: "sc-1oj0r48-0"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["margin:0 auto;width:100%;max-width:", ";"], theme.sizes.content));
const ButtonContainer = external_styled_components_default().div.withConfig({
  displayName: "styles__ButtonContainer",
  componentId: "sc-1oj0r48-1"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["padding:0 ", ";margin:", " 0;display:flex;justify-content:center;"], theme.spacings.large, theme.spacings.large));
const Button = external_styled_components_default().button.withConfig({
  displayName: "styles__Button",
  componentId: "sc-1oj0r48-2"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["background:", ";color:", ";border:none;padding:", " ", ";cursor:pointer;&:disabled{background:", ";}"], theme.colors.primary, theme.colors.white, theme.spacings.small, theme.spacings.large, theme.colors.darkerGray));
// EXTERNAL MODULE: ../../../AppData/Roaming/npm/node_modules/next/link.js
var next_link = __webpack_require__(11);
;// CONCATENATED MODULE: ./src/utils/format-date.ts
const formatDate = dateString => {
  const date = new Date(dateString);
  return date.toLocaleString('pt-BR', {
    dateStyle: 'medium'
  });
};
;// CONCATENATED MODULE: ./src/components/ArticleMeta/styles.ts

const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "hivvqi-0"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["font-size:", ";color:", ";font-style:italic;.categories span::after{content:', ';}.categories span:last-child::after{content:'';}a{color:", ";text-decoration:none;transition:all 300ms ease-in-out;&:hover{filter:brightness(50%);}}"], theme.font.sizes.small, theme.colors.darkText, theme.colors.darkerGray));
;// CONCATENATED MODULE: ./src/components/ArticleMeta/index.tsx






const ArticleMeta = ({
  createdAt,
  author,
  categories
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: [author && typeof author !== 'undefined' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Por "
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/author/${author.slug}`,
          children: author.displayName
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "separator",
          children: " | "
        }), /*#__PURE__*/jsx_runtime_.jsx("time", {
          dateTime: createdAt,
          children: formatDate(createdAt)
        })]
      }), categories && typeof categories !== 'undefined' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "separator",
          children: " | "
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "categories",
          children: categories.map(category => {
            return /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: `/category/${category.slug}`,
                children: category.displayName
              })
            }, `article-meta-cat-${category.id}`);
          })
        })]
      })]
    })
  });
};
// EXTERNAL MODULE: ./src/components/Heading/index.tsx
var Heading = __webpack_require__(8197);
// EXTERNAL MODULE: ./src/components/Heading/styles.ts
var styles = __webpack_require__(2355);
;// CONCATENATED MODULE: ./src/components/ArticleHeader/styles.ts


const styles_Wrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "nz0o9z-0"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["padding-bottom:", ";margin-bottom:", ";border-bottom:0.1rem solid ", ";", "{margin:0;padding-top:", ";margin-top:", ";margin-bottom:", ";}"], theme.spacings.xlarge, theme.spacings.xlarge, theme.colors.mediumGray, styles/* Title */.D, theme.spacings.xlarge, theme.spacings.xxxhuge, theme.spacings.medium));
const Excerpt = external_styled_components_default().p.withConfig({
  displayName: "styles__Excerpt",
  componentId: "nz0o9z-1"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["margin:", " 0;}"], theme.spacings.medium));
const Cover = external_styled_components_default().img.withConfig({
  displayName: "styles__Cover",
  componentId: "nz0o9z-2"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["max-width:100%;display:block;margin-bottom:", ";"], theme.spacings.medium));
;// CONCATENATED MODULE: ./src/components/ArticleHeader/index.tsx





const ArticleHeader = ({
  id,
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_Wrapper, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Heading/* Heading */.X, {
      size: "big",
      children: [" ", title, " "]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Excerpt, {
      children: [excerpt, " "]
    }), /*#__PURE__*/jsx_runtime_.jsx(Cover, {
      src: cover.url,
      alt: title
    }), /*#__PURE__*/jsx_runtime_.jsx(ArticleMeta, {
      categories: categories,
      author: author,
      createdAt: createdAt
    })]
  });
};
// EXTERNAL MODULE: ./src/components/HtmlContent/index.tsx + 1 modules
var HtmlContent = __webpack_require__(2482);
// EXTERNAL MODULE: ./src/components/PostContainer/index.ts
var PostContainer = __webpack_require__(4608);
;// CONCATENATED MODULE: ./src/components/Post/styles.ts

const Post_styles_Wrapper = external_styled_components_default().article.withConfig({
  displayName: "styles__Wrapper",
  componentId: "yu01lu-0"
})([""]);
const Content = external_styled_components_default().div.withConfig({
  displayName: "styles__Content",
  componentId: "yu01lu-1"
})([""]);
;// CONCATENATED MODULE: ./src/components/Post/index.tsx







const Post = ({
  id,
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
  content
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Post_styles_Wrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(PostContainer/* PostContainer */.b, {
        size: "max",
        children: /*#__PURE__*/jsx_runtime_.jsx(ArticleHeader, {
          author: author,
          categories: categories,
          title: title,
          excerpt: excerpt,
          id: id,
          cover: cover[0],
          createdAt: createdAt
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(PostContainer/* PostContainer */.b, {
        size: "content",
        children: /*#__PURE__*/jsx_runtime_.jsx(HtmlContent/* HtmlComponent */.X, {
          html: content
        })
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/components/PostTags/styles.ts

const PostTags_styles_Wrapper = external_styled_components_default().p.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1t6o2d7-0"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["margin:", " 0;max-width:", " auto;padding:0 ", " 0;color:", ";span{margin:0 0 0 0.5rem;}span::before{content:' ';}span:after{content:', ';}span:last-child::after{content:'.';}a{color:", ";text-decoration:none;transition:all 300ms ease-in-out;&:hover{filter:brightness(50%);}}"], theme.spacings.medium, theme.sizes.content, theme.spacings.medium, theme.colors.darkText, theme.colors.darkerGray));
;// CONCATENATED MODULE: ./src/components/PostTags/index.tsx




const PostTags = ({
  tags = []
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(PostTags_styles_Wrapper, {
    children: ["tag:", tags.map(tag => {
      return /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/tag/${tag.slug}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: tag.displayName
          })
        })
      }, tag.id);
    })]
  });
};
// EXTERNAL MODULE: ./src/templates/Base/index.tsx + 13 modules
var Base = __webpack_require__(3065);
// EXTERNAL MODULE: ../../../AppData/Roaming/npm/node_modules/next/router.js
var next_router = __webpack_require__(2232);
;// CONCATENATED MODULE: ./src/templates/PostTemplate/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const PostTemplate = ({
  settings,
  post
}) => {
  const router = (0,next_router.useRouter)();

  const handleBack = async () => {
    router.push("/");
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Base/* BaseTemplate */.Z, {
    settings: settings,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Post, _objectSpread({}, post)), /*#__PURE__*/jsx_runtime_.jsx(TagsContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(PostTags, {
        tags: post.tags
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(ButtonContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Button, {
        onClick: () => handleBack(),
        children: 'Voltar'
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/pages/post/[slug].tsx







function PostPage({
  posts,
  settings
}) {
  const router = (0,client_router.useRouter)();
  const post = posts[0];

  if (router.isFallback) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
          children: [post.title, " - ", settings.blogName]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: " Aguarde... "
      })]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: [post.title, " - ", settings.blogName]
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: post.excerpt
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(PostTemplate, {
      post: post,
      settings: settings
    })]
  });
}
const getStaticPaths = async () => {
  let data = null;
  let paths = [];

  try {
    data = await (0,load_posts/* loadPosts */.N)();
    paths = data.posts.map(post => ({
      params: {
        slug: post.slug
      }
    }));
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    paths = [];
  }

  console.log(data.posts[0].cover);
  return {
    paths,
    fallback: true
  };
};
const getStaticProps = async ctx => {
  let data = null;

  try {
    data = await (0,load_posts/* loadPosts */.N)({
      postSlug: ctx.params.slug
    });
  } catch (e) {
    data = null;
  }

  console.log('slug');
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
      settings: data.setting
    },
    revalidate: 24 * 60 * 60
  };
};

/***/ }),

/***/ 2232:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(3624)


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
var __webpack_exports__ = __webpack_require__.X(0, [885,173], function() { return __webpack_exec__(5310); });
module.exports = __webpack_exports__;

})();