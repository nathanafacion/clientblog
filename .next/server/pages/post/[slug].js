(function() {
var exports = {};
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./src/components/ArticleHeader/index.tsx":
/*!************************************************!*\
  !*** ./src/components/ArticleHeader/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleHeader": function() { return /* binding */ ArticleHeader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/ArticleHeader/styles.ts");
/* harmony import */ var _ArticleMeta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ArticleMeta */ "./src/components/ArticleMeta/index.tsx");
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Heading */ "./src/components/Heading/index.tsx");

var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\components\\ArticleHeader\\index.tsx";



const ArticleHeader = ({
  id,
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_3__.Heading, {
      size: "big",
      children: [" ", title, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Excerpt, {
      children: [excerpt, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Cover, {
      src: cover.url,
      alt: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticleMeta__WEBPACK_IMPORTED_MODULE_2__.ArticleMeta, {
      categories: categories,
      author: author,
      createdAt: createdAt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/ArticleHeader/styles.ts":
/*!************************************************!*\
  !*** ./src/components/ArticleHeader/styles.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": function() { return /* binding */ Wrapper; },
/* harmony export */   "Excerpt": function() { return /* binding */ Excerpt; },
/* harmony export */   "Cover": function() { return /* binding */ Cover; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Heading_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Heading/styles */ "./src/components/Heading/styles.ts");


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "nz0o9z-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding-bottom:", ";margin-bottom:", ";border-bottom:0.1rem solid ", ";", "{margin:0;padding-top:", ";margin-top:", ";margin-bottom:", ";}"], theme.spacings.xlarge, theme.spacings.xlarge, theme.colors.mediumGray, _Heading_styles__WEBPACK_IMPORTED_MODULE_1__.Title, theme.spacings.xlarge, theme.spacings.xxxhuge, theme.spacings.medium));
const Excerpt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "styles__Excerpt",
  componentId: "nz0o9z-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["margin:", " 0;}"], theme.spacings.medium));
const Cover = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "styles__Cover",
  componentId: "nz0o9z-2"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["max-width:100%;display:block;margin-bottom:", ";"], theme.spacings.medium));

/***/ }),

/***/ "./src/components/ArticleMeta/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ArticleMeta/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleMeta": function() { return /* binding */ ArticleMeta; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_format_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/format-date */ "./src/utils/format-date.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/ArticleMeta/styles.ts");


var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\components\\ArticleMeta\\index.tsx";



const ArticleMeta = ({
  createdAt,
  author,
  categories
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [author && typeof author !== 'undefined' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Por "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: `/author/${author.slug}`,
          children: author.displayName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "separator",
          children: " | "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("time", {
          dateTime: createdAt,
          children: (0,_utils_format_date__WEBPACK_IMPORTED_MODULE_2__.formatDate)(createdAt)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, undefined)]
      }, void 0, true), categories && typeof categories !== 'undefined' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "separator",
          children: " | "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "categories",
          children: categories.map(category => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: `/category/${category.slug}`,
                children: category.displayName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 21
              }, undefined)
            }, `article-meta-cat-${category.id}`, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 19
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, undefined)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/ArticleMeta/styles.ts":
/*!**********************************************!*\
  !*** ./src/components/ArticleMeta/styles.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": function() { return /* binding */ Wrapper; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "hivvqi-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-size:", ";color:", ";font-style:italic;.categories span::after{content:', ';}.categories span:last-child::after{content:'';}a{color:", ";text-decoration:none;transition:all 300ms ease-in-out;&:hover{filter:brightness(50%);}}"], theme.font.sizes.small, theme.colors.darkText, theme.colors.darkerGray));

/***/ }),

/***/ "./src/components/PostContainer/index.ts":
/*!***********************************************!*\
  !*** ./src/components/PostContainer/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostContainer": function() { return /* binding */ PostContainer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
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

/***/ "./src/components/PostTags/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/PostTags/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostTags": function() { return /* binding */ PostTags; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/PostTags/styles.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\components\\PostTags\\index.tsx";


const PostTags = ({
  tags = []
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {
    children: ["tag:", tags.map(tag => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: `/tag/${tag.slug}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: tag.displayName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 15
        }, undefined)
      }, tag.id, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, undefined);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/PostTags/styles.ts":
/*!*******************************************!*\
  !*** ./src/components/PostTags/styles.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": function() { return /* binding */ Wrapper; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1t6o2d7-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["margin:", " 0;max-width:", " auto;padding:0 ", " 0;color:", ";span{margin:0 0 0 0.5rem;}span::before{content:' ';}span:after{content:', ';}span:last-child::after{content:'.';}a{color:", ";text-decoration:none;transition:all 300ms ease-in-out;&:hover{filter:brightness(50%);}}"], theme.spacings.medium, theme.sizes.content, theme.spacings.medium, theme.colors.darkText, theme.colors.darkerGray));

/***/ }),

/***/ "./src/components/Post/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Post/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Post": function() { return /* binding */ Post; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ArticleHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ArticleHeader */ "./src/components/ArticleHeader/index.tsx");
/* harmony import */ var _HtmlContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HtmlContent */ "./src/components/HtmlContent/index.tsx");
/* harmony import */ var _PostContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PostContainer */ "./src/components/PostContainer/index.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/components/Post/styles.ts");


var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\components\\Post\\index.tsx";




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
  console.log("cover teste");
  console.log(cover);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostContainer__WEBPACK_IMPORTED_MODULE_3__.PostContainer, {
        size: "max",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticleHeader__WEBPACK_IMPORTED_MODULE_1__.ArticleHeader, {
          author: author,
          categories: categories,
          title: title,
          excerpt: excerpt,
          id: id,
          cover: cover[0],
          createdAt: createdAt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostContainer__WEBPACK_IMPORTED_MODULE_3__.PostContainer, {
        size: "content",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HtmlContent__WEBPACK_IMPORTED_MODULE_2__.HtmlComponent, {
          html: content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }, undefined)
  }, void 0, false);
};

/***/ }),

/***/ "./src/components/Post/styles.ts":
/*!***************************************!*\
  !*** ./src/components/Post/styles.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": function() { return /* binding */ Wrapper; },
/* harmony export */   "Content": function() { return /* binding */ Content; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().article.withConfig({
  displayName: "styles__Wrapper",
  componentId: "yu01lu-0"
})([""]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Content",
  componentId: "yu01lu-1"
})([""]);

/***/ }),

/***/ "./src/pages/post/[slug].tsx":
/*!***********************************!*\
  !*** ./src/pages/post/[slug].tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostPage; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _api_load_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/load-posts */ "./src/api/load-posts.ts");
/* harmony import */ var _templates_PostTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../templates/PostTemplate */ "./src/templates/PostTemplate/index.tsx");


var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\pages\\post\\[slug].tsx";




function PostPage({
  posts,
  setting
}) {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  if (router.isFallback) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
          children: [post.title, " - ", setting.blogName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: " Aguarde... "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }

  const post = posts[0];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: [post.title, " - ", setting.blogName]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: post.excerpt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates_PostTemplate__WEBPACK_IMPORTED_MODULE_4__.PostTemplate, {
      post: post,
      settings: setting
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
const getStaticPaths = async () => {
  let data = null;
  let paths = [];

  try {
    data = await (0,_api_load_posts__WEBPACK_IMPORTED_MODULE_3__.loadPosts)();
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
    data = await (0,_api_load_posts__WEBPACK_IMPORTED_MODULE_3__.loadPosts)({
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
      setting: data.setting
    },
    revalidate: 24 * 60 * 60
  };
};

/***/ }),

/***/ "./src/templates/PostTemplate/index.tsx":
/*!**********************************************!*\
  !*** ./src/templates/PostTemplate/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostTemplate": function() { return /* binding */ PostTemplate; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/templates/PostTemplate/styles.ts");
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Post */ "./src/components/Post/index.tsx");
/* harmony import */ var _components_PostTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PostTags */ "./src/components/PostTags/index.tsx");
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Base */ "./src/templates/Base/index.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\templates\\PostTemplate\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const PostTemplate = ({
  settings,
  post
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  const handleBack = async () => {
    router.push("/");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Base__WEBPACK_IMPORTED_MODULE_4__.BaseTemplate, {
    settings: settings,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post__WEBPACK_IMPORTED_MODULE_2__.Post, _objectSpread({}, post), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.TagsContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostTags__WEBPACK_IMPORTED_MODULE_3__.PostTags, {
        tags: post.tags
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.ButtonContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: handleBack,
        children: 'Voltar'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/PostTemplate/styles.ts":
/*!**********************************************!*\
  !*** ./src/templates/PostTemplate/styles.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsContainer": function() { return /* binding */ TagsContainer; },
/* harmony export */   "ButtonContainer": function() { return /* binding */ ButtonContainer; },
/* harmony export */   "Button": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const TagsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__TagsContainer",
  componentId: "sc-1oj0r48-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["margin:0 auto;width:100%;max-width:", ";"], theme.sizes.content));
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__ButtonContainer",
  componentId: "sc-1oj0r48-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding:0 ", ";margin:", " 0;display:flex;justify-content:center;"], theme.spacings.large, theme.spacings.large));
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "styles__Button",
  componentId: "sc-1oj0r48-2"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background:", ";color:", ";border:none;padding:", " ", ";cursor:pointer;&:disabled{background:", ";}"], theme.colors.primary, theme.colors.white, theme.spacings.small, theme.spacings.large, theme.colors.darkerGray));

/***/ }),

/***/ "./src/utils/format-date.ts":
/*!**********************************!*\
  !*** ./src/utils/format-date.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDate": function() { return /* binding */ formatDate; }
/* harmony export */ });
const formatDate = dateString => {
  const date = new Date(dateString);
  return date.toLocaleString('pt-BR', {
    dateStyle: 'medium'
  });
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","src_api_load-posts_ts-src_templates_Base_index_tsx"], function() { return __webpack_exec__("./src/pages/post/[slug].tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FydGljbGVIZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZUhlYWRlci9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcnRpY2xlTWV0YS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcnRpY2xlTWV0YS9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Qb3N0Q29udGFpbmVyL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvUG9zdFRhZ3MvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvUG9zdFRhZ3Mvc3R5bGVzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvUG9zdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Qb3N0L3N0eWxlcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9wb3N0L1tzbHVnXS50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdGVtcGxhdGVzL1Bvc3RUZW1wbGF0ZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdGVtcGxhdGVzL1Bvc3RUZW1wbGF0ZS9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdXRpbHMvZm9ybWF0LWRhdGUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc3R5bGVkLWljb25zL21hdGVyaWFsLW91dGxpbmVkL0Nsb3NlXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc3R5bGVkLWljb25zL21hdGVyaWFsLW91dGxpbmVkL0tleWJvYXJkQXJyb3dVcFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQHN0eWxlZC1pY29ucy9tYXRlcmlhbC1vdXRsaW5lZC9NZW51XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJncmFwaHFsLXJlcXVlc3RcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkFydGljbGVIZWFkZXIiLCJpZCIsInRpdGxlIiwiZXhjZXJwdCIsImNvdmVyIiwiYXV0aG9yIiwiY2F0ZWdvcmllcyIsImNyZWF0ZWRBdCIsInVybCIsIldyYXBwZXIiLCJzdHlsZWQiLCJ0aGVtZSIsImNzcyIsInNwYWNpbmdzIiwieGxhcmdlIiwiY29sb3JzIiwibWVkaXVtR3JheSIsIkhlYWRpbmdTdHlsZXMiLCJ4eHhodWdlIiwibWVkaXVtIiwiRXhjZXJwdCIsIkNvdmVyIiwiQXJ0aWNsZU1ldGEiLCJzbHVnIiwiZGlzcGxheU5hbWUiLCJmb3JtYXREYXRlIiwibWFwIiwiY2F0ZWdvcnkiLCJmb250Iiwic2l6ZXMiLCJzbWFsbCIsImRhcmtUZXh0IiwiZGFya2VyR3JheSIsInBvc3RDb250YWluZXJTdHlsZXMiLCJtYXgiLCJjb250ZW50IiwiUG9zdENvbnRhaW5lciIsInNpemUiLCJsYXJnZSIsIlBvc3RUYWdzIiwidGFncyIsInRhZyIsIlBvc3QiLCJjb25zb2xlIiwibG9nIiwiQ29udGVudCIsIlBvc3RQYWdlIiwicG9zdHMiLCJzZXR0aW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNGYWxsYmFjayIsInBvc3QiLCJibG9nTmFtZSIsImdldFN0YXRpY1BhdGhzIiwiZGF0YSIsInBhdGhzIiwibG9hZFBvc3RzIiwicGFyYW1zIiwiZSIsImxlbmd0aCIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjdHgiLCJwb3N0U2x1ZyIsIm5vdEZvdW5kIiwicHJvcHMiLCJyZXZhbGlkYXRlIiwiUG9zdFRlbXBsYXRlIiwic2V0dGluZ3MiLCJoYW5kbGVCYWNrIiwicHVzaCIsIlRhZ3NDb250YWluZXIiLCJCdXR0b25Db250YWluZXIiLCJCdXR0b24iLCJwcmltYXJ5Iiwid2hpdGUiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImRhdGVTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBYU8sTUFBTUEsYUFBYSxHQUFHLENBQUM7QUFDNUJDLElBRDRCO0FBRTVCQyxPQUY0QjtBQUc1QkMsU0FINEI7QUFJNUJDLE9BSjRCO0FBSzVCQyxRQUw0QjtBQU01QkMsWUFONEI7QUFPNUJDO0FBUDRCLENBQUQsS0FRSDtBQUN4QixzQkFDRSw4REFBQyw0Q0FBRDtBQUFBLDRCQUNFLDhEQUFDLDZDQUFEO0FBQVMsVUFBSSxFQUFDLEtBQWQ7QUFBQSxzQkFBc0JMLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLDRDQUFEO0FBQUEsaUJBQWlCQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtB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RCxLQUFLLENBQUNJLE1BQU4sQ0FBYTRELE9BRDNCLEVBRVNoRSxLQUFLLENBQUNJLE1BQU4sQ0FBYTZELEtBRnRCLEVBSVdqRSxLQUFLLENBQUNFLFFBQU4sQ0FBZWlCLEtBSjFCLEVBSW1DbkIsS0FBSyxDQUFDRSxRQUFOLENBQWV5QixLQUpsRCxFQU9nQjNCLEtBQUssQ0FBQ0ksTUFBTixDQUFhaUIsVUFQN0IsQ0FEZSxDQUFaLEM7Ozs7Ozs7Ozs7Ozs7OztBQ25CQSxNQUFNUCxVQUFVLEdBQUlvRCxVQUFELElBQWdDO0FBQ3RELFFBQU1DLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVNGLFVBQVQsQ0FBYjtBQUNBLFNBQU9DLElBQUksQ0FBQ0UsY0FBTCxDQUFvQixPQUFwQixFQUE0QjtBQUFDQyxhQUFTLEVBQUU7QUFBWixHQUE1QixDQUFQO0FBQ0gsQ0FITSxDOzs7Ozs7Ozs7OztBQ0FQLG1FOzs7Ozs7Ozs7OztBQ0FBLDZFOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL3Bvc3QvW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IHtBcnRpY2xlTWV0YX0gZnJvbSAnLi4vQXJ0aWNsZU1ldGEnO1xyXG5pbXBvcnQge0F1dGhvcn0gZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVzL2F1dGhvcic7XHJcbmltcG9ydCB7Q2F0ZWdvcnl9IGZyb20gJy4uLy4uL3NoYXJlZC10eXBlcy9jYXRlZ29yeSc7XHJcbmltcG9ydCB7SGVhZGluZ30gZnJvbSAnLi4vSGVhZGluZyc7XHJcbmltcG9ydCB7U3RyYXBpSW1hZ2V9IGZyb20gJy4uLy4uL3NoYXJlZC10eXBlcy9zdHJhcGlpbWFnZSc7XHJcblxyXG5leHBvcnQgdHlwZSBBcnRpY2xlSGVhZGVyUHJvcHMgPSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGV4Y2VycHQ6IHN0cmluZztcclxuICBjb3ZlcjogU3RyYXBpSW1hZ2U7XHJcbiAgYXV0aG9yOiBBdXRob3I7XHJcbiAgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXTtcclxuICBjcmVhdGVkQXQ6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBcnRpY2xlSGVhZGVyID0gKHtcclxuICBpZCxcclxuICB0aXRsZSxcclxuICBleGNlcnB0LFxyXG4gIGNvdmVyLFxyXG4gIGF1dGhvcixcclxuICBjYXRlZ29yaWVzLFxyXG4gIGNyZWF0ZWRBdFxyXG59OiBBcnRpY2xlSGVhZGVyUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZC5XcmFwcGVyPlxyXG4gICAgICA8SGVhZGluZyBzaXplPVwiYmlnXCI+IHt0aXRsZX0gPC9IZWFkaW5nPlxyXG4gICAgICA8U3R5bGVkLkV4Y2VycHQ+e2V4Y2VycHR9IDwvU3R5bGVkLkV4Y2VycHQ+XHJcbiAgICAgIDxTdHlsZWQuQ292ZXIgc3JjPXtjb3Zlci51cmx9IGFsdD17dGl0bGV9Lz5cclxuICAgICAgPEFydGljbGVNZXRhIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IGF1dGhvcj17YXV0aG9yfSBjcmVhdGVkQXQ9e2NyZWF0ZWRBdH0vPlxyXG4gICAgPC9TdHlsZWQuV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtUaXRsZSBhcyBIZWFkaW5nU3R5bGVzfSBmcm9tICcuLi9IZWFkaW5nL3N0eWxlcydcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHQkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIHBhZGRpbmctYm90dG9tOiAke3RoZW1lLnNwYWNpbmdzLnhsYXJnZX07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmdzLnhsYXJnZX07XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgJHt0aGVtZS5jb2xvcnMubWVkaXVtR3JheX07XHJcblxyXG4gICAgJHtIZWFkaW5nU3R5bGVzfXtcclxuICAgICAgbWFyZ2luOjA7XHJcblx0XHRcdHBhZGRpbmctdG9wOiAke3RoZW1lLnNwYWNpbmdzLnhsYXJnZX07XHJcblx0XHRcdG1hcmdpbi10b3A6JHt0aGVtZS5zcGFjaW5ncy54eHhodWdlfTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5ncy5tZWRpdW19O1xyXG4gICAgfVxyXG5cclxuICBgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEV4Y2VycHQgPSBzdHlsZWQucGBcclxuICAgICR7KHt0aGVtZX0pID0+IGNzc2BcclxuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmdzLm1lZGl1bX0gMDtcclxuICAgIH1cclxuYH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb3ZlciA9IHN0eWxlZC5pbWdgXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXHJcbiAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmdzLm1lZGl1bX07XHJcbiAgYH1cclxuYDtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQXV0aG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVzL2F1dGhvcic7XHJcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVzL2NhdGVnb3J5JztcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC1kYXRlJztcclxuaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmV4cG9ydCB0eXBlIEFydGljbGVNZXRhUHJvcHMgPSB7XHJcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XHJcbiAgYXV0aG9yOiBBdXRob3I7XHJcbiAgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBcnRpY2xlTWV0YSA9ICh7XHJcbiAgY3JlYXRlZEF0LFxyXG4gIGF1dGhvcixcclxuICBjYXRlZ29yaWVzLFxyXG59OiBBcnRpY2xlTWV0YVByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWQuV3JhcHBlcj5cclxuICAgICAgPHA+XHJcbiAgICAgICAge2F1dGhvciAmJiB0eXBlb2YgYXV0aG9yICE9PSAndW5kZWZpbmVkJyAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c3Bhbj5Qb3IgPC9zcGFuPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2F1dGhvci8ke2F1dGhvci5zbHVnfWB9PnthdXRob3IuZGlzcGxheU5hbWV9PC9MaW5rPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj4gfCA8L3NwYW4+XHJcbiAgICAgICAgICAgIDx0aW1lIGRhdGVUaW1lPXtjcmVhdGVkQXR9Pntmb3JtYXREYXRlKGNyZWF0ZWRBdCl9PC90aW1lPlxyXG5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2NhdGVnb3JpZXMgJiYgdHlwZW9mIGNhdGVnb3JpZXMgIT09ICd1bmRlZmluZWQnICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPiB8IDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YGFydGljbGUtbWV0YS1jYXQtJHtjYXRlZ29yeS5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NhdGVnb3J5LyR7Y2F0ZWdvcnkuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5kaXNwbGF5TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICA8L3A+XHJcbiAgICA8L1N0eWxlZC5XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQsIHtjc3N9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250LnNpemVzLnNtYWxsfTtcclxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrVGV4dH07XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcblxyXG4gICAgLmNhdGVnb3JpZXMgc3Bhbjo6YWZ0ZXJ7XHJcbiAgICAgIGNvbnRlbnQ6JywgJztcclxuICAgIH1cclxuXHJcbiAgICAuY2F0ZWdvcmllcyBzcGFuOmxhc3QtY2hpbGQ6OmFmdGVyIHtcclxuICAgICAgY29udGVudDonJztcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmtlckdyYXl9O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcblxyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xyXG4gICAgICB9XHJcbiAgICAgfVxyXG4gIGB9XHJcbmA7XHJcbiIsImltcG9ydCBzdHlsZWQsIHtjc3MsRGVmYXVsdFRoZW1lfSAgIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCB0eXBlIFBvc3RDb250YWluZXJQcm9wcyA9IHtcclxuICBzaXplOiAnbWF4JyB8ICdjb250ZW50JztcclxufTtcclxuXHJcbmNvbnN0IHBvc3RDb250YWluZXJTdHlsZXMgPSB7XHJcbiAgbWF4OiAodGhlbWU6IERlZmF1bHRUaGVtZSkgPT4gY3NzYFxyXG4gICAgbWF4LXdpZHRoOiAke3RoZW1lLnNpemVzLm1heH07XHJcbiAgYCxcclxuICBjb250ZW50OiAodGhlbWU6IERlZmF1bHRUaGVtZSkgPT4gY3NzYFxyXG4gICAgbWF4LXdpZHRoOiAke3RoZW1lLnNpemVzLmNvbnRlbnR9O1xyXG4gIGAsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdENvbnRhaW5lciA9IHN0eWxlZC5kaXY8UG9zdENvbnRhaW5lclByb3BzPmBcclxuJHsoeyB0aGVtZSwgc2l6ZSB9KSA9PiBjc3NgXHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBtYXJnaW46IDAgYXV0bztcclxuICAgcGFkZGluZzogMCAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfTtcclxuICAke3Bvc3RDb250YWluZXJTdHlsZXNbc2l6ZV0odGhlbWUpfVxyXG5cclxuIGB9XHJcbmA7XHJcbiIsImltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCB7UG9zdFRhZ30gZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVzL3RhZyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgdHlwZSBQb3N0VGFnc1Byb3BzID0ge1xyXG4gIHRhZ3M/OiBQb3N0VGFnW107XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdFRhZ3MgPSAoeyB0YWdzPVtdIH06IFBvc3RUYWdzUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZC5XcmFwcGVyPlxyXG4gICAgICB0YWc6XHJcbiAgICAgIHt0YWdzLm1hcCgodGFnKSA9PntcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxzcGFuIGtleT17dGFnLmlkfT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3RhZy8ke3RhZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+e3RhZy5kaXNwbGF5TmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L1N0eWxlZC5XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQucGBcclxuXHQkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuXHRcdFx0bWFyZ2luOiAke3RoZW1lLnNwYWNpbmdzLm1lZGl1bX0gMDtcclxuXHRcdFx0bWF4LXdpZHRoOiAke3RoZW1lLnNpemVzLmNvbnRlbnR9IGF1dG87XHJcblx0XHRcdHBhZGRpbmc6IDAgJHt0aGVtZS5zcGFjaW5ncy5tZWRpdW19IDA7XHJcblx0XHRcdGNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrVGV4dH07XHJcblxyXG5cdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRtYXJnaW46IDAgMCAwIDAuNXJlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3Bhbjo6YmVmb3Jle1xyXG5cdFx0XHRcdGNvbnRlbnQ6ICcgJztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3BhbjphZnRlcntcclxuXHRcdFx0XHRjb250ZW50OicsICc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNwYW46bGFzdC1jaGlsZDo6YWZ0ZXJ7XHJcblx0XHRcdFx0Y29udGVudDonLic7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGF7XHJcblx0XHRcdFx0XHRjb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya2VyR3JheX07XHJcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcblxyXG5cdFx0XHRcdFx0Jjpob3ZlciB7XHJcblx0XHRcdFx0XHRcdGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdGB9XHJcbmA7XHJcbiIsIlxyXG5pbXBvcnQgeyBBcnRpY2xlSGVhZGVyLCBBcnRpY2xlSGVhZGVyUHJvcHMgfSBmcm9tICcuLi9BcnRpY2xlSGVhZGVyJztcclxuaW1wb3J0IHsgSHRtbENvbXBvbmVudCB9IGZyb20gJy4uL0h0bWxDb250ZW50JztcclxuaW1wb3J0IHsgUG9zdENvbnRhaW5lciB9IGZyb20gJy4uL1Bvc3RDb250YWluZXInO1xyXG5pbXBvcnQge1N0cmFwaUltYWdlfSBmcm9tICcuLi8uLi9zaGFyZWQtdHlwZWQvc3RyYXBpaW1hZ2UnO1xyXG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gJy4uL0NhdGVnb3J5JztcclxuaW1wb3J0IHsgQXV0aG9yIH0gZnJvbSAnLi4vQXV0aG9yJztcclxuaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmV4cG9ydCB0eXBlIFBvc3RQcm9wcyA9ICB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGV4Y2VycHQ6IHN0cmluZztcclxuICBjb3ZlcjogU3RyYXBpSW1hZ2U7XHJcbiAgYXV0aG9yOiBBdXRob3I7XHJcbiAgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXTtcclxuICBjcmVhdGVkQXQ6IHN0cmluZztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdCA9ICh7XHJcbiAgICBpZCxcclxuICAgIHRpdGxlLFxyXG4gICAgZXhjZXJwdCxcclxuICAgIGNvdmVyLFxyXG4gICAgYXV0aG9yLFxyXG4gICAgY2F0ZWdvcmllcyxcclxuICAgIGNyZWF0ZWRBdCxcclxuICAgIGNvbnRlbnQsXHJcbiAgICB9OiBQb3N0UHJvcHMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJjb3ZlciB0ZXN0ZVwiKTtcclxuICAgICAgY29uc29sZS5sb2coY292ZXIpXHJcbnJldHVybiAoXHJcbiAgPD5cclxuICA8U3R5bGVkLldyYXBwZXI+XHJcbiAgICAgIDxQb3N0Q29udGFpbmVyIHNpemU9XCJtYXhcIj5cclxuICAgICAgICA8QXJ0aWNsZUhlYWRlciBhdXRob3I9e2F1dGhvcn0gY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgZXhjZXJwdD17ZXhjZXJwdH0gaWQ9e2lkfSBjb3Zlcj17Y292ZXJbMF19IGNyZWF0ZWRBdD17Y3JlYXRlZEF0fS8+XHJcbiAgICAgIDwvUG9zdENvbnRhaW5lcj5cclxuICAgICAgPFBvc3RDb250YWluZXIgc2l6ZT1cImNvbnRlbnRcIj5cclxuICAgICAgICA8SHRtbENvbXBvbmVudCBodG1sPXtjb250ZW50fSAvPlxyXG4gICAgICA8L1Bvc3RDb250YWluZXI+XHJcblxyXG4gIDwvU3R5bGVkLldyYXBwZXI+XHJcblxyXG5cclxuICA8Lz5cclxuKTtcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5hcnRpY2xlYGA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgYFxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQge0dldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wc30gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbmltcG9ydCB7bG9hZFBvc3RzLCBTdHJhcGlQb3N0QW5kU2V0dGluZ3N9IGZyb20gJy4uLy4uL2FwaS9sb2FkLXBvc3RzJztcclxuaW1wb3J0IHtQb3N0VGVtcGxhdGV9IGZyb20gJy4uLy4uL3RlbXBsYXRlcy9Qb3N0VGVtcGxhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFBhZ2UoeyBwb3N0cywgc2V0dGluZ306IFN0cmFwaVBvc3RBbmRTZXR0aW5ncyl7XHJcbiAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgaWYocm91dGVyLmlzRmFsbGJhY2spe1xyXG4gICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgICAge3Bvc3QudGl0bGV9IC0ge3NldHRpbmcuYmxvZ05hbWV9XHJcbiAgICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8aDE+IEFndWFyZGUuLi4gPC9oMT5cclxuICAgICAgIDwvPlxyXG5cclxuICAgICApXHJcbiAgIH1cclxuXHJcbiAgIGNvbnN0IHBvc3QgPSBwb3N0c1swXTtcclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAge3Bvc3QudGl0bGV9IC0ge3NldHRpbmcuYmxvZ05hbWV9XHJcbiAgICAgICAgPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwb3N0LmV4Y2VycHR9IC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFBvc3RUZW1wbGF0ZSBwb3N0ID0ge3Bvc3R9IHNldHRpbmdzPXtzZXR0aW5nfSAvPlxyXG4gICAgIDwvPlxyXG4gICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1Byb3BzPFN0cmFwaVBvc3RBbmRTZXR0aW5ncz4gPSBhc3luYygpID0+e1xyXG4gIGxldCBkYXRhIDogU3RyYXBpUG9zdEFuZFNldHRpbmdzIHwgbnVsbCA9IG51bGw7XHJcbiAgbGV0IHBhdGhzID0gW107XHJcblxyXG4gIHRyeSB7XHJcbiAgICBkYXRhID0gYXdhaXQgbG9hZFBvc3RzKCk7XHJcbiAgICBwYXRocyA9IGRhdGEucG9zdHMubWFwKChwb3N0KSA9PiAoe3BhcmFtczoge3NsdWc6IHBvc3Quc2x1Z319KSk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGRhdGEgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgaWYoIWRhdGEgfHwgIWRhdGEucG9zdHMgfHwgIWRhdGEucG9zdHMubGVuZ3RoKXtcclxuICAgIHBhdGhzPVtdO1xyXG4gIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLnBvc3RzWzBdLmNvdmVyKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXRocyxcclxuICAgICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgICB9O1xyXG5cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPFN0cmFwaVBvc3RBbmRTZXR0aW5ncz4gPSBhc3luYyhjdHgpID0+e1xyXG4gIGxldCBkYXRhID1udWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgZGF0YSA9IGF3YWl0IGxvYWRQb3N0cyh7cG9zdFNsdWc6IGN0eC5wYXJhbXMuc2x1ZyBhcyBzdHJpbmd9KTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgZGF0YSA9IG51bGw7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKCdzbHVnJylcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBpZighZGF0YSB8fCAhZGF0YS5wb3N0cyB8fCAhZGF0YS5wb3N0cy5sZW5ndGgpe1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLnBvc3RzWzBdLmNvdmVyKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHBvc3RzOmRhdGEucG9zdHMsXHJcbiAgICAgICAgc2V0dGluZzogZGF0YS5zZXR0aW5nLFxyXG4gICAgICB9LFxyXG4gICAgICByZXZhbGlkYXRlOiAyNCo2MCo2MCxcclxuICAgIH07XHJcblxyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0JztcclxuaW1wb3J0IHsgUG9zdFRhZ3MgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3RUYWdzJztcclxuaW1wb3J0IHtTZXR0aW5nc1N0cmFwaSB9IGZyb20gJy4uLy4uL3NoYXJlZC10eXBlcy9zZXR0aW5ncy1zdHJhcGknO1xyXG5pbXBvcnQge0Jhc2VUZW1wbGF0ZSB9IGZyb20gJy4uL0Jhc2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCB0eXBlIFBvc3RUZW1wbGF0ZVByb3BzID0ge1xyXG4gIHNldHRpbmdzOiBTZXR0aW5nc1N0cmFwaTtcclxuICBwb3N0OiBQb3N0U3RyYXBpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBvc3RUZW1wbGF0ZSA9ICh7IHNldHRpbmdzLCBwb3N0IH06IFBvc3RUZW1wbGF0ZVByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBoYW5kbGVCYWNrID0gYXN5bmMoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCYXNlVGVtcGxhdGUgc2V0dGluZ3M9e3NldHRpbmdzfT5cclxuICAgICAgPFBvc3Qgey4uLnBvc3R9IC8+XHJcblxyXG4gICAgICA8U3R5bGVkLlRhZ3NDb250YWluZXI+XHJcbiAgICAgICAgPFBvc3RUYWdzIHRhZ3M9e3Bvc3QudGFnc30vPlxyXG4gICAgICA8L1N0eWxlZC5UYWdzQ29udGFpbmVyPlxyXG4gICAgICA8U3R5bGVkLkJ1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgICA8U3R5bGVkLkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCYWNrfT5cclxuICAgICAgICAgIHsnVm9sdGFyJ31cclxuICAgICAgICA8L1N0eWxlZC5CdXR0b24+XHJcbiAgICAgIDwvU3R5bGVkLkJ1dHRvbkNvbnRhaW5lcj5cclxuICAgIDwvQmFzZVRlbXBsYXRlPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ3NDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cdCR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG5cdCAgICBtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdG1heC13aWR0aDogJHt0aGVtZS5zaXplcy5jb250ZW50fTtcclxuICBgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXHJcbiAgICBwYWRkaW5nOiAwICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9O1xyXG4gICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfSAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZ3Muc21hbGx9ICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmRhcmtlckdyYXl9O1xyXG4gICAgfVxyXG4gIGB9XHJcbmA7XHJcbiIsImV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKGRhdGVTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XHJcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZygncHQtQlInLHtkYXRlU3R5bGU6ICdtZWRpdW0nfSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvQ2xvc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvS2V5Ym9hcmRBcnJvd1VwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3R5bGVkLWljb25zL21hdGVyaWFsLW91dGxpbmVkL01lbnVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtcmVxdWVzdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9