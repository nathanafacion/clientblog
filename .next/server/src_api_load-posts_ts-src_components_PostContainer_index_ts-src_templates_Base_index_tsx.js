exports.id = "src_api_load-posts_ts-src_components_PostContainer_index_ts-src_templates_Base_index_tsx";
exports.ids = ["src_api_load-posts_ts-src_components_PostContainer_index_ts-src_templates_Base_index_tsx"];
exports.modules = {

/***/ "./src/api/load-categories.ts":
/*!************************************!*\
  !*** ./src/api/load-categories.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadCategories": function() { return /* binding */ loadCategories; }
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config/index.ts");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/queries */ "./src/graphql/queries.ts");



const loadCategories = async () => {
  const data = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(_config__WEBPACK_IMPORTED_MODULE_1__.default.graphlURL, _graphql_queries__WEBPACK_IMPORTED_MODULE_2__.GRAPHQL_QUERY_CATEGORY);
  console.log(data.categories);
  return data.categories;
};

/***/ }),

/***/ "./src/api/load-posts.ts":
/*!*******************************!*\
  !*** ./src/api/load-posts.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultLoadPostsVariables": function() { return /* binding */ defaultLoadPostsVariables; },
/* harmony export */   "loadPosts": function() { return /* binding */ loadPosts; }
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config/index.ts");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/queries */ "./src/graphql/queries.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const defaultLoadPostsVariables = {
  sort: 'createdAt:desc',
  start: 0,
  limit: 9
};
const loadPosts = async (variables = {}) => {
  const data = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(_config__WEBPACK_IMPORTED_MODULE_1__.default.graphlURL, _graphql_queries__WEBPACK_IMPORTED_MODULE_2__.GRAPHQL_QUERY, _objectSpread(_objectSpread({}, defaultLoadPostsVariables), variables));
  return data;
};

/***/ }),

/***/ "./src/components/Footer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Footer/styles.ts");
/* harmony import */ var _HtmlContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HtmlContent */ "./src/components/HtmlContent/index.tsx");

var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\components\\Footer\\index.tsx";


const Footer = ({
  html
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HtmlContent__WEBPACK_IMPORTED_MODULE_2__.HtmlComponent, {
      html: html
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/Footer/styles.ts":
/*!*****************************************!*\
  !*** ./src/components/Footer/styles.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().footer.withConfig({
  displayName: "styles__Container",
  componentId: "sc-78s9li-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["text-align:center;border-top:0.1rem solid ", ";a{color:inherit;text-decoration:none;}"], theme.colors.mediumGray));

/***/ }),

/***/ "./src/components/GoTop/index.tsx":
/*!****************************************!*\
  !*** ./src/components/GoTop/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoTop": function() { return /* binding */ GoTop; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/GoTop/styles.ts");
/* harmony import */ var _styled_icons_material_outlined_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-icons/material-outlined/KeyboardArrowUp */ "@styled-icons/material-outlined/KeyboardArrowUp");
/* harmony import */ var _styled_icons_material_outlined_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_outlined_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\components\\GoTop\\index.tsx";


const GoTop = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {
    href: "#",
    "aria-label": "Go to top",
    title: "Go to top",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_icons_material_outlined_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_2__.KeyboardArrowUp, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/GoTop/styles.ts":
/*!****************************************!*\
  !*** ./src/components/GoTop/styles.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "styles__Container",
  componentId: "cly9w8-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["position:fixed;background:", ";color:", ";display:flex;align-items:center;justify-content:center;width:4rem;height:4rem;bottom:2rem;right:2rem;z-index:6;"], theme.colors.primary, theme.colors.white));

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Header/styles.ts");
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Heading */ "./src/components/Heading/index.tsx");

var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\components\\Header\\index.tsx";


const Header = ({
  blogName,
  description,
  logo,
  showText = false
}) => {
  const valueDescription = description.toUpperCase();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {
    children: showText && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Content, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_2__.Heading, {
        size: "huge",
        as: "h2",
        colorDark: true,
        children: blogName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        align: "right",
        children: valueDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/Header/styles.ts":
/*!*****************************************!*\
  !*** ./src/components/Header/styles.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": function() { return /* binding */ Wrapper; },
/* harmony export */   "Content": function() { return /* binding */ Content; }
/* harmony export */ });
/* harmony import */ var _Heading_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Heading/styles */ "./src/components/Heading/styles.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().header.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1m2khfk-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["display:flex;align-items:center;justify-content:center;padding-bottom:", ";width:100%;max-width:", ";color:", ";font-size:", ";margin:0 auto;", "{margin:0;padding:0;}@media ", "{display:flex;flex-flow:column wrap;& > $ ", "{margin:0 0 calc(", " -1rem);}}"], theme.spacings.xhuge, theme.sizes.max, theme.font.sizes.small, theme.font.sizes.small, _Heading_styles__WEBPACK_IMPORTED_MODULE_0__.Title, theme.media.lteSmall, _Heading_styles__WEBPACK_IMPORTED_MODULE_0__.Title, theme.spacings.small));
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-1m2khfk-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["display:flex;flex-flow:column wrap;margin-left:", ";max-width:48rem;@media ", "{margin-left:0;}"], theme.spacings.large, theme.media.lteSmall));

/***/ }),

/***/ "./src/components/Heading/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Heading/index.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Heading": function() { return /* binding */ Heading; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Heading/styles.ts");

var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\components\\Heading\\index.tsx";

const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Title, {
    colorDark: colorDark,
    as: as,
    size: size,
    uppercase: uppercase,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/Heading/styles.ts":
/*!******************************************!*\
  !*** ./src/components/Heading/styles.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Title": function() { return /* binding */ Title; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const titleSize = {
  small: theme => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-size:", ";"], theme.font.sizes.medium),
  medium: theme => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-size:", ";"], theme.font.sizes.large),
  big: theme => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-size:", ";"], theme.font.sizes.xlarge),
  huge: theme => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-size:", ";", ";"], theme.font.sizes.xhuge, mediaFont(theme))
};

const mediaFont = theme => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["@media ", "{font-size:", ";}"], theme.media.lteMedium, theme.font.sizes.xlarge);

const titleCase = uppercase => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["text-transform:", ";"], uppercase ? 'uppercase' : 'none');

const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
  displayName: "styles__Title",
  componentId: "sc-1jdj0yd-0"
})(["", ""], ({
  theme,
  colorDark,
  size,
  uppercase
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["color:", ";", ";", ";"], colorDark ? theme.colors.primaryColor : theme.colors.white, titleSize[size](theme), titleCase(uppercase)));

/***/ }),

/***/ "./src/components/HtmlContent/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/HtmlContent/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlComponent": function() { return /* binding */ HtmlComponent; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/HtmlContent/styles.ts");

var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\components\\HtmlContent\\index.tsx";

const HtmlComponent = ({
  html
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {
    dangerouslySetInnerHTML: {
      __html: html
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./src/components/HtmlContent/styles.ts":
/*!**********************************************!*\
  !*** ./src/components/HtmlContent/styles.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1x3q7rz-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-size:", ";p{margin:", " 0;}a,a:visited,a:linked{color:", ";text-decoration:none;transition:all 300ms esse-in-out;}a:hover{filter:brightness(50%);}pre{background:", ";padding:", ";font-family:monospace;color:", ";margin:", " 0;width:100%;overflow-x:auto;font-size:", ";}.image{background:", ";line-height:0;margin:", "0;}.image figcaption{font-size:", ";padding:", ";text-align:center;line-height:1.3;}.image-style-side{max-width:50%;float:right;margin:", ";}hr{border:none;border-bottom:0.1rem solid ", ";}ul,ol{margin:$theme.spacings.xlarge);}.table{width:100%;border-collapse:collapse;}table td,table th{padding:", ";border:0.1rem solid ", ";}@media ", "{font-size:2rem;.image-style-side{max-width:100%;float:none;margin:0;}}"], theme.font.sizes.small, theme.spacings.medium, theme.colors.secondary, theme.colors.darkerGray, theme.spacings.medium, theme.colors.white, theme.spacings.xlarge, theme.font.sizes.small, theme.colors.mediumGray, theme.spacings.xlarge, theme.font.sizes.small, theme.spacings.small, theme.spacings.medium, theme.colors.mediumGray, theme.spacings.small, theme.colors.mediumGray, theme.media.lteMedium));

/***/ }),

/***/ "./src/components/LogoLink/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/LogoLink/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoLink": function() { return /* binding */ LogoLink; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/LogoLink/styles.ts");
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Heading */ "./src/components/Heading/index.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\components\\LogoLink\\index.tsx";



const LogoLink = ({
  text,
  srcImg = '',
  link,
  newTab = false
}) => {
  const nextLink = link.match(/^\//) ? true : false;
  const target = newTab ? '_blank' : '_self';

  if (nextLink) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_2__.Heading, {
      size: "small",
      uppercase: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: link,
        passHref: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {
          target: target,
          children: [!!srcImg && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: srcImg,
            alt: text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 26
          }, undefined), !srcImg && text]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_2__.Heading, {
    size: "small",
    uppercase: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {
      href: link,
      target: target,
      children: [!!srcImg && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: srcImg,
        alt: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 22
      }, undefined), !srcImg && text]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/LogoLink/styles.ts":
/*!*******************************************!*\
  !*** ./src/components/LogoLink/styles.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1bxx75b-0"
})(["display:flex;align-items:center;text-decoration:none;color:inherit;margin-left:10%;> img{height:15rem;width:15rem;border-radius:50%;}"]);

/***/ }),

/***/ "./src/components/MenuLink/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/MenuLink/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuLink": function() { return /* binding */ MenuLink; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/MenuLink/styles.ts");

var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\components\\MenuLink\\index.tsx";


const MenuLink = ({
  children,
  link,
  newTab = false
}) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink = link.match(/^\//) ? true : false;

  if (nextLink) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: link,
      passHref: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, {
        target: target,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, {
    href: link,
    target: target,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/MenuLink/styles.ts":
/*!*******************************************!*\
  !*** ./src/components/MenuLink/styles.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "styles__Container",
  componentId: "vkf2ag-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:block;text-decoration:none;font-size:", ";padding:", ";color:", ";position:relative;&::after{content:'';position:absolute;bottom:0.76rem;left:50%;width:0;height:0.2rem;background:", ";transition:all 300ms ease-in-out;}&:hover::after{left:0%;width:100%;}"], theme.font.sizes.small, theme.spacings.small, theme.colors.white, theme.colors.secondary));

/***/ }),

/***/ "./src/components/Menu/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Menu/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": function() { return /* binding */ Menu; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Menu/styles.ts");
/* harmony import */ var _LogoLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LogoLink */ "./src/components/LogoLink/index.tsx");
/* harmony import */ var _MenuLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MenuLink */ "./src/components/MenuLink/index.tsx");
/* harmony import */ var _styled_icons_material_outlined_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styled-icons/material-outlined/Menu */ "@styled-icons/material-outlined/Menu");
/* harmony import */ var _styled_icons_material_outlined_Menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_outlined_Menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_material_outlined_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styled-icons/material-outlined/Close */ "@styled-icons/material-outlined/Close");
/* harmony import */ var _styled_icons_material_outlined_Close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_outlined_Close__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Heading */ "./src/components/Heading/index.tsx");


var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\components\\Menu\\index.tsx";








const Menu = ({
  links = [],
  blogName,
  logo
}) => {
  const {
    0: menuVisible,
    1: setMenuVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);

  const handleOpenCloseMenu = event => {
    event.preventDefault();
    setMenuVisible(v => !v);
  };

  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.OpenClose, {
      menuVisible: menuVisible,
      onClick: handleOpenCloseMenu,
      href: "#",
      "aria-label": "Open or close menu",
      title: "Open or close menu",
      children: [menuVisible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_icons_material_outlined_Close__WEBPACK_IMPORTED_MODULE_5__.Close, {
        "aria-label": "Close menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }, undefined), !menuVisible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_icons_material_outlined_Menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {
        "aria-label": "Open menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 26
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {
      menuVisible: menuVisible,
      "aria-hidden": !menuVisible,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Nav, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Logo, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LogoLink__WEBPACK_IMPORTED_MODULE_2__.LogoLink, {
            link: "/",
            text: blogName,
            srcImg: logo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_8__.Heading, {
          size: "small",
          as: "h2",
          colorDark: false,
          children: 'Menu'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined), links.map(link => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuLink__WEBPACK_IMPORTED_MODULE_3__.MenuLink, {
          link: link.link,
          newTab: link.newTab,
          children: link.text
        }, link.id, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ "./src/components/Menu/styles.ts":
/*!***************************************!*\
  !*** ./src/components/Menu/styles.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": function() { return /* binding */ Wrapper; },
/* harmony export */   "Nav": function() { return /* binding */ Nav; },
/* harmony export */   "Logo": function() { return /* binding */ Logo; },
/* harmony export */   "OpenClose": function() { return /* binding */ OpenClose; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Heading_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Heading/styles */ "./src/components/Heading/styles.ts");



const wrapperChanger = (menuVisible, theme) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["left:", ";overflow-y:", ";@media ", "{left:", ";}"], menuVisible ? '0' : '-30rem', menuVisible ? 'auto' : 'hidden', theme.media.lteMedium, menuVisible ? '0' : '-32rem');

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "felnei-0"
})(["", ""], ({
  theme,
  menuVisible
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background:", ";padding:", ";display:flex;position:fixed;z-index:1;width:100%;max-width:32rem;height:100vh;top:0;left:0;justify-content:center;transition:all 300ms ease-in-out;overflow-y:auto;", ""], theme.colors.primary, theme.spacings.large, wrapperChanger(menuVisible, theme)));
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default().nav.withConfig({
  displayName: "styles__Nav",
  componentId: "felnei-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["margin:0;", "{display:flex;padding-left:5%;margin-bottom:", ";}"], _Heading_styles__WEBPACK_IMPORTED_MODULE_1__.Title, theme.spacings.large));

const buttonChanger = (menuVisible, theme) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["left:", ";color:", ";@media ", "{left:", ";}"], menuVisible ? '26rem' : '1rem', menuVisible ? theme.colors.secondary : theme.colors.white, theme.media.lteMedium, menuVisible ? '26rem' : '-0.5rem');

const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Logo",
  componentId: "felnei-2"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", "{display:flex;justify-content:center;margin:0;margin-bottom:", ";img{border:0.5rem solid ", ";}}"], _Heading_styles__WEBPACK_IMPORTED_MODULE_1__.Title, theme.spacings.xxlarge, theme.colors.secondary));
const OpenClose = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "styles__OpenClose",
  componentId: "felnei-3"
})(["", ""], ({
  theme,
  menuVisible
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["position:fixed;top:", ";color:", ";background:", ";z-index:2;width:3rem;height:3rem;left:26rem;transition:all 300ms ease-in-out;", ""], theme.spacings.medium, theme.colors.white, theme.colors.primary, buttonChanger(menuVisible, theme)));

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

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  url: 'https://strapi-landing-pages-project-2.herokuapp.com',
  siteName: 'Nanaverso',
  defaultSlug: 'landing-page',
  graphlURL: 'http://127.0.0.1:1337/graphql'
});

/***/ }),

/***/ "./src/graphql/fragments.ts":
/*!**********************************!*\
  !*** ./src/graphql/fragments.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GRAPHQL_FRAGMENTS": function() { return /* binding */ GRAPHQL_FRAGMENTS; }
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);

const GRAPHQL_FRAGMENTS = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment image on UploadFile {
    id
    alternativeText
    url
  }
  fragment cover on Post {
    cover {
      ...image
    }
  }
  fragment tag on Tag {
    id
    displayName
    slug
  }
  fragment author on Author {
    id
    displayName
    slug
  }
  fragment category on Category {
    id
    displayName
    slug
  }
  fragment tags on Post {
    tags {
      ...tag
    }
  }
  fragment authorPost on Post {
    author {
      ...author
    }
  }
  fragment categories on Post {
    categories {
      ...category
    }
  }
  fragment menuLink on ComponentMenuMenuLink {
    id
    link
    text
    newTab
  }
  fragment post on Post {
    id
    slug
    title
    excerpt
    content
    createdAt
    allowComments
    ...cover
    ...categories
    ...tags
    ...authorPost
  }
  fragment settings on Settings {
    id
    blogName
    description
    logo {
      ...image
    }
    menuLink {
      ...menuLink
    }
    text
  }
`;

/***/ }),

/***/ "./src/graphql/queries.ts":
/*!********************************!*\
  !*** ./src/graphql/queries.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GRAPHQL_QUERY": function() { return /* binding */ GRAPHQL_QUERY; },
/* harmony export */   "GRAPHQL_QUERY_CATEGORY": function() { return /* binding */ GRAPHQL_QUERY_CATEGORY; }
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fragments */ "./src/graphql/fragments.ts");


const GRAPHQL_QUERY = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.GRAPHQL_FRAGMENTS}
  query GET_POSTS(
    $categorySlug: String
    $postSlug: String
    $postSearch: String
    $authorSlug: String
    $tagSlug: String
    $sort: String = "createdAt:desc"
    $start: Int = 0
    $limit: Int = 10
  ) {
    setting {
      ...settings
    }
    posts(
      start: $start
      limit: $limit
      sort: $sort
      where: {
        slug: $postSlug
        title_contains: $postSearch
        categories: { slug: $categorySlug }
        author: { slug: $authorSlug }
        tags: { slug: $tagSlug }
      }
    ) {
      ...post
    }
  }
`;
const GRAPHQL_QUERY_CATEGORY = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GET_CATEGORIES{
    categories {
      _id
      displayName
      slug
    }
  }
`;

/***/ }),

/***/ "./src/templates/Base/index.tsx":
/*!**************************************!*\
  !*** ./src/templates/Base/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTemplate": function() { return /* binding */ BaseTemplate; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Footer */ "./src/components/Footer/index.tsx");
/* harmony import */ var _components_GoTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/GoTop */ "./src/components/GoTop/index.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Header */ "./src/components/Header/index.tsx");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Menu */ "./src/components/Menu/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./src/templates/Base/styles.ts");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _api_load_categories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api/load-categories */ "./src/api/load-categories.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\templates\\Base\\index.tsx";









const BaseTemplate = ({
  settings,
  children
}) => {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const {
    0: stateCategories,
    1: setStateCategories
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const site = router.pathname;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_api_load_categories__WEBPACK_IMPORTED_MODULE_8__.loadCategories)().then(val => {
      setStateCategories(val);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_5__.Menu, {
      links: settings.menuLink,
      blogName: settings.blogName,
      logo: settings.logo[0].url
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.HeaderContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.Header, {
        blogName: settings.blogName,
        description: settings.description,
        logo: settings.logo[0].url,
        showText: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.MenuSearch, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.SearchContainer, {
          children: [stateCategories.length > 0 && stateCategories.map(category => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
              href: {
                pathname: "/category",
                query: {
                  slug: category.slug
                }
              },
              as: `/category/${category.slug}`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.LinkMenuCategory, {
                children: [" ", category.displayName, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 19
            }, undefined)
          }, `article-meta-cat-${category._id}`, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 17
          }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            action: "/search/",
            method: "GET",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.SearchInput, {
              type: "search",
              placeholder: "Buscar por posts...",
              name: "q",
              defaultValue: router.query.q
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.ContentContainer, {
      children: [children, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.FooterContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__.Footer, {
        html: settings.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GoTop__WEBPACK_IMPORTED_MODULE_3__.GoTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Base/styles.ts":
/*!**************************************!*\
  !*** ./src/templates/Base/styles.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": function() { return /* binding */ Wrapper; },
/* harmony export */   "HeaderContainer": function() { return /* binding */ HeaderContainer; },
/* harmony export */   "ContentContainer": function() { return /* binding */ ContentContainer; },
/* harmony export */   "FooterContainer": function() { return /* binding */ FooterContainer; },
/* harmony export */   "SearchContainer": function() { return /* binding */ SearchContainer; },
/* harmony export */   "MenuSearch": function() { return /* binding */ MenuSearch; },
/* harmony export */   "SearchInput": function() { return /* binding */ SearchInput; },
/* harmony export */   "LinkMenuCategory": function() { return /* binding */ LinkMenuCategory; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "n1ae26-0"
})([""]);
const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__HeaderContainer",
  componentId: "n1ae26-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["margin-top:", ";"], theme.spacings.large));
const ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__ContentContainer",
  componentId: "n1ae26-2"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["max-width:120rem;width:100%;margin:0 auto;margin-bottom:", ";"], theme.spacings.xhuge));
const FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__FooterContainer",
  componentId: "n1ae26-3"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["max-width:120rem;width:100%;margin:0 auto;margin-bottom:", ";"], theme.spacings.large));
const SearchContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__SearchContainer",
  componentId: "n1ae26-4"
})(["max-width:120rem;width:100%;margin:0 auto;position:relative;"]);
const MenuSearch = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__MenuSearch",
  componentId: "n1ae26-5"
})(["float:left;display:block;width:100%;overflow:hidden;background-color:#e9e9e9;"]);
const SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "styles__SearchInput",
  componentId: "n1ae26-6"
})(["", "}"], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["float:right;display:bock;padding:1rem;position:relative;margin-top:1rem;margin-bottom:1rem;border:none;margin-right:1rem;border-radius:1rem;width:20em;outline:none;@media ", "{.input[type=text]{float:none;display:block;text-align:left;width:100%;margin-bottom:1rem;padding:14px;padding-bottom:20px;}.input[type=text]{border:1px solid #ccc;}}"], theme.media.lteMedium));
const LinkMenuCategory = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "styles__LinkMenuCategory",
  componentId: "n1ae26-7"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["float:left;text-decoration:none;font-size:", ";padding:", ";color:", ";position:relative;&::after{content:'';position:absolute;bottom:0.76rem;left:50%;width:0;height:0.2rem;background:", ";transition:all 300ms ease-in-out;}&:hover::after{left:25%;width:50%;}"], theme.font.sizes.small, theme.spacings.small, theme.colors.primary, theme.colors.secondary));

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9hcGkvbG9hZC1jYXRlZ29yaWVzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2FwaS9sb2FkLXBvc3RzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Hb1RvcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Hb1RvcC9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0hlYWRpbmcvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvSGVhZGluZy9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9IdG1sQ29udGVudC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9IdG1sQ29udGVudC9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Mb2dvTGluay9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Mb2dvTGluay9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9NZW51TGluay9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9NZW51TGluay9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9NZW51L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL01lbnUvc3R5bGVzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvUG9zdENvbnRhaW5lci9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb25maWcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvZ3JhcGhxbC9mcmFnbWVudHMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvZ3JhcGhxbC9xdWVyaWVzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3RlbXBsYXRlcy9CYXNlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy90ZW1wbGF0ZXMvQmFzZS9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvaWdub3JlZHxDOlxcVXNlcnNcXEFjZXJcXERlc2t0b3BcXFJlYWN0UHJvamV0b3NcXG5ld0Jsb2dcXFBlcXVlbm8tQmxvZy1SZWFjdFxcZnJvbnRlbmRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJsb2FkQ2F0ZWdvcmllcyIsImRhdGEiLCJyZXF1ZXN0IiwiY29uZmlnIiwiR1JBUEhRTF9RVUVSWV9DQVRFR09SWSIsImNvbnNvbGUiLCJsb2ciLCJjYXRlZ29yaWVzIiwiZGVmYXVsdExvYWRQb3N0c1ZhcmlhYmxlcyIsInNvcnQiLCJzdGFydCIsImxpbWl0IiwibG9hZFBvc3RzIiwidmFyaWFibGVzIiwiR1JBUEhRTF9RVUVSWSIsIkZvb3RlciIsImh0bWwiLCJDb250YWluZXIiLCJzdHlsZWQiLCJ0aGVtZSIsImNzcyIsImNvbG9ycyIsIm1lZGl1bUdyYXkiLCJHb1RvcCIsInByaW1hcnkiLCJ3aGl0ZSIsIkhlYWRlciIsImJsb2dOYW1lIiwiZGVzY3JpcHRpb24iLCJsb2dvIiwic2hvd1RleHQiLCJ2YWx1ZURlc2NyaXB0aW9uIiwidG9VcHBlckNhc2UiLCJXcmFwcGVyIiwic3BhY2luZ3MiLCJ4aHVnZSIsInNpemVzIiwibWF4IiwiZm9udCIsInNtYWxsIiwiSGVhZGluZ1N0eWxlcyIsIm1lZGlhIiwibHRlU21hbGwiLCJDb250ZW50IiwibGFyZ2UiLCJIZWFkaW5nIiwiY2hpbGRyZW4iLCJjb2xvckRhcmsiLCJhcyIsInNpemUiLCJ1cHBlcmNhc2UiLCJ0aXRsZVNpemUiLCJtZWRpdW0iLCJiaWciLCJ4bGFyZ2UiLCJodWdlIiwibWVkaWFGb250IiwibHRlTWVkaXVtIiwidGl0bGVDYXNlIiwiVGl0bGUiLCJwcmltYXJ5Q29sb3IiLCJIdG1sQ29tcG9uZW50IiwiX19odG1sIiwic2Vjb25kYXJ5IiwiZGFya2VyR3JheSIsIkxvZ29MaW5rIiwidGV4dCIsInNyY0ltZyIsImxpbmsiLCJuZXdUYWIiLCJuZXh0TGluayIsIm1hdGNoIiwidGFyZ2V0IiwiTWVudUxpbmsiLCJNZW51IiwibGlua3MiLCJtZW51VmlzaWJsZSIsInNldE1lbnVWaXNpYmxlIiwidXNlU3RhdGUiLCJoYW5kbGVPcGVuQ2xvc2VNZW51IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtYXAiLCJpZCIsIndyYXBwZXJDaGFuZ2VyIiwiTmF2IiwiYnV0dG9uQ2hhbmdlciIsIkxvZ28iLCJ4eGxhcmdlIiwiT3BlbkNsb3NlIiwicG9zdENvbnRhaW5lclN0eWxlcyIsImNvbnRlbnQiLCJQb3N0Q29udGFpbmVyIiwidXJsIiwic2l0ZU5hbWUiLCJkZWZhdWx0U2x1ZyIsImdyYXBobFVSTCIsIkdSQVBIUUxfRlJBR01FTlRTIiwiZ3FsIiwiQmFzZVRlbXBsYXRlIiwic2V0dGluZ3MiLCJzdGF0ZUNhdGVnb3JpZXMiLCJzZXRTdGF0ZUNhdGVnb3JpZXMiLCJzaXRlIiwicGF0aG5hbWUiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwidmFsIiwibWVudUxpbmsiLCJsZW5ndGgiLCJjYXRlZ29yeSIsInF1ZXJ5Iiwic2x1ZyIsImRpc3BsYXlOYW1lIiwiX2lkIiwicSIsIkhlYWRlckNvbnRhaW5lciIsIkNvbnRlbnRDb250YWluZXIiLCJGb290ZXJDb250YWluZXIiLCJTZWFyY2hDb250YWluZXIiLCJNZW51U2VhcmNoIiwiU2VhcmNoSW5wdXQiLCJMaW5rTWVudUNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBU08sTUFBTUEsY0FBYyxHQUFHLFlBQTJDO0FBRXZFLFFBQU1DLElBQUksR0FBRyxNQUFNQyx3REFBTyxDQUFDQyxzREFBRCxFQUFtQkMsb0VBQW5CLENBQTFCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFJLENBQUNNLFVBQWpCO0FBQ0EsU0FBT04sSUFBSSxDQUFDTSxVQUFaO0FBQ0QsQ0FMTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hQO0FBRUE7QUFDQTtBQXNCTyxNQUFNQyx5QkFBNkMsR0FBRztBQUN6REMsTUFBSSxFQUFFLGdCQURtRDtBQUV6REMsT0FBSyxFQUFDLENBRm1EO0FBR3pEQyxPQUFLLEVBQUM7QUFIbUQsQ0FBdEQ7QUFNQSxNQUFNQyxTQUFTLEdBQUcsT0FDdkJDLFNBQTZCLEdBQUUsRUFEUixLQUVXO0FBQ2hDLFFBQU1aLElBQUksR0FBRyxNQUFNQyx3REFBTyxDQUFDQyxzREFBRCxFQUFtQlcsMkRBQW5CLGtDQUNuQk4seUJBRG1CLEdBRW5CSyxTQUZtQixFQUExQjtBQUtBLFNBQU9aLElBQVA7QUFDSCxDQVRNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CUDtBQUNBO0FBTU8sTUFBTWMsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQTJCO0FBQy9DLHNCQUNFLDhEQUFDLDhDQUFEO0FBQUEsMkJBQ0ksOERBQUMsdURBQUQ7QUFBZSxVQUFJLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtB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QUssQ0FBQ0UsTUFBTixDQUFhMEMsU0FmN0IsQ0FEeUIsQ0FBdEIsQzs7Ozs7Ozs7OztBQzVFUCxlIiwiZmlsZSI6InNyY19hcGlfbG9hZC1wb3N0c190cy1zcmNfY29tcG9uZW50c19Qb3N0Q29udGFpbmVyX2luZGV4X3RzLXNyY190ZW1wbGF0ZXNfQmFzZV9pbmRleF90c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JlcXVlc3R9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgR1JBUEhRTF9RVUVSWV9DQVRFR09SWSB9IGZyb20gJy4uL2dyYXBocWwvcXVlcmllcyc7XHJcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSAnLi4vc2hhcmVkLXR5cGVzL2NhdGVnb3J5JztcclxuXHJcblxyXG5leHBvcnQgdHlwZSBMb2FkQ2F0ZWdvcnlWYXJpYWJsZXMgPSB7XHJcbiAgYWxsQ2F0ZWdvcmllczogQ2F0ZWdvcnlbXTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZENhdGVnb3JpZXMgPSBhc3luYyAoKTogUHJvbWlzZTxMb2FkQ2F0ZWdvcnlWYXJpYWJsZXM+ID0+e1xyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdChjb25maWcuZ3JhcGhsVVJMLCBHUkFQSFFMX1FVRVJZX0NBVEVHT1JZKTtcclxuICBjb25zb2xlLmxvZyhkYXRhLmNhdGVnb3JpZXMpO1xyXG4gIHJldHVybiBkYXRhLmNhdGVnb3JpZXM7XHJcbn07XHJcbiIsImltcG9ydCB7cmVxdWVzdH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcclxuaW1wb3J0IHtTZXR0aW5nc1N0cmFwaX0gZnJvbSAnLi4vc2hhcmVkLXR5cGVzL3NldHRpbmdzLXN0cmFwaSc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgR1JBUEhRTF9RVUVSWSB9IGZyb20gJy4uL2dyYXBocWwvcXVlcmllcyc7XHJcbmltcG9ydCB7IFBvc3RTdHJhcGkgfSBmcm9tICcuLi9zaGFyZWQtdHlwZXMvcG9zdC1zdHJhcGknO1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIExvYWRQb3N0c1ZhcmlhYmxlcyA9IHtcclxuICBjYXRlZ29yeVNsdWc/OiBzdHJpbmc7XHJcbiAgcG9zdFNsdWc/OiBzdHJpbmc7XHJcbiAgcG9zdFNlYXJjaD86IHN0cmluZztcclxuICBhdXRob3JTbHVnPzogc3RyaW5nO1xyXG4gIHRhZ1NsdWc/OiBzdHJpbmc7XHJcbiAgc29ydD86IHN0cmluZztcclxuICBzdGFydD86IG51bWJlcjtcclxuICBsaW1pdD86IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFN0cmFwaVBvc3RBbmRTZXR0aW5ncyA9IHtcclxuICBzZXR0aW5nczogU2V0dGluZ3NTdHJhcGk7XHJcbiAgcG9zdHM6IFBvc3RTdHJhcGlbXTtcclxuICB2YXJpYWJsZXM/OkxvYWRQb3N0c1ZhcmlhYmxlcztcclxuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdExvYWRQb3N0c1ZhcmlhYmxlczogTG9hZFBvc3RzVmFyaWFibGVzID0ge1xyXG4gICAgc29ydDogJ2NyZWF0ZWRBdDpkZXNjJyxcclxuICAgIHN0YXJ0OjAsXHJcbiAgICBsaW1pdDo5LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZFBvc3RzID0gYXN5bmMgKFxyXG4gIHZhcmlhYmxlczogTG9hZFBvc3RzVmFyaWFibGVzID17fSxcclxuKTogUHJvbWlzZTxTdHJhcGlQb3N0QW5kU2V0dGluZ3M+ID0+e1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QoY29uZmlnLmdyYXBobFVSTCwgR1JBUEhRTF9RVUVSWSwge1xyXG4gICAgICAgIC4uLmRlZmF1bHRMb2FkUG9zdHNWYXJpYWJsZXMsXHJcbiAgICAgICAgLi4udmFyaWFibGVzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn07XHJcbiIsImltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgeyBIdG1sQ29tcG9uZW50IH0gZnJvbSAnLi4vSHRtbENvbnRlbnQnO1xuXG5leHBvcnQgdHlwZSBGb290ZXJQcm9wcyA9IHtcbiAgaHRtbDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICh7IGh0bWwgfTogRm9vdGVyUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkLkNvbnRhaW5lcj5cbiAgICAgICAgPEh0bWxDb21wb25lbnQgaHRtbD17aHRtbH0gLz5cbiAgICA8L1N0eWxlZC5Db250YWluZXI+XG4gICk7XG59O1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb250YWluZXIgYXMgVGV4dENvbXBvbmVudCB9IGZyb20gJy4uL1RleHRDb21wb25lbnQvc3R5bGVzJztcblxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmZvb3RlcmBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci10b3A6IDAuMXJlbSBzb2xpZCAke3RoZW1lLmNvbG9ycy5tZWRpdW1HcmF5fTtcblxuICAgIGEge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuXG4gIGB9XG5gO1xuIiwiaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IEtleWJvYXJkQXJyb3dVcCB9IGZyb20gJ0BzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvS2V5Ym9hcmRBcnJvd1VwJztcblxuZXhwb3J0IGNvbnN0IEdvVG9wID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWQuQ29udGFpbmVyIGhyZWY9XCIjXCIgYXJpYS1sYWJlbD1cIkdvIHRvIHRvcFwiIHRpdGxlPVwiR28gdG8gdG9wXCI+XG4gICAgICA8S2V5Ym9hcmRBcnJvd1VwIC8+XG4gICAgPC9TdHlsZWQuQ29udGFpbmVyPlxuICApO1xufTtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmFgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNHJlbTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgYm90dG9tOiAycmVtO1xuICAgIHJpZ2h0OiAycmVtO1xuICAgIHotaW5kZXg6IDY7XG4gIGB9XG5gO1xuIiwiXHJcbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICcuLi9IZWFkaW5nJztcclxuaW1wb3J0IHtMb2dvTGlua30gZnJvbSAnLi4vTG9nb0xpbmsnO1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIEhlYWRlclByb3BzID0ge1xyXG4gIGJsb2dOYW1lOnN0cmluZztcclxuICBkZXNjcmlwdGlvbjpzdHJpbmc7XHJcbiAgbG9nbz86c3RyaW5nO1xyXG4gIHNob3dUZXh0Pzpib29sZWFuO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICh7XHJcbiAgYmxvZ05hbWUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgbG9nbyxcclxuICBzaG93VGV4dCA9IGZhbHNlLFxyXG5cclxufTogSGVhZGVyUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi50b1VwcGVyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkLldyYXBwZXI+XHJcblxyXG4gICAgICAgICAge3Nob3dUZXh0ICYmIChcclxuICAgICAgICAgICAgPFN0eWxlZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJodWdlXCIgYXM9XCJoMlwiIGNvbG9yRGFyaz17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICB7YmxvZ05hbWV9XHJcbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgIDxkaXYgYWxpZ249J3JpZ2h0Jz5cclxuICAgICAgICAgICAgICAgIHt2YWx1ZURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N0eWxlZC5Db250ZW50PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1N0eWxlZC5XcmFwcGVyPlxyXG4gICAgKTtcclxuICB9O1xyXG4iLCJpbXBvcnQge1RpdGxlIGFzIEhlYWRpbmdTdHlsZXN9IGZyb20gJy4uL0hlYWRpbmcvc3R5bGVzJztcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgJHsoe3RoZW1lfSk9PiBjc3NgXHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5ncy54aHVnZX07XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6ICR7dGhlbWUuc2l6ZXMubWF4fTtcclxuICAgICAgY29sb3I6ICR7dGhlbWUuZm9udC5zaXplcy5zbWFsbH07XHJcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250LnNpemVzLnNtYWxsfTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAke0hlYWRpbmdTdHlsZXN9e1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAke3RoZW1lLm1lZGlhLmx0ZVNtYWxsfSB7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcblxyXG4gICAgICAgICYgPiAkICR7SGVhZGluZ1N0eWxlc317XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIGNhbGMoJHt0aGVtZS5zcGFjaW5ncy5zbWFsbH0gLTFyZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICBgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcbiAgICBtYXgtd2lkdGg6IDQ4cmVtO1xyXG5cclxuICAgIEBtZWRpYSAke3RoZW1lLm1lZGlhLmx0ZVNtYWxsfXtcclxuICAgICAgbWFyZ2luLWxlZnQ6MDtcclxuICAgIH1cclxuICBgfVxyXG5gO1xyXG4iLCJpbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xuXG5leHBvcnQgdHlwZSBIZWFkaW5nUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGNvbG9yRGFyaz86IGJvb2xlYW47XG4gIGFzPzogJ2gxJyB8ICdoMicgfCAnaDMnIHwgJ2g0JyB8ICdoNScgfCAnaDYnO1xuICBzaXplPzogJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2JpZycgfCAnaHVnZSc7XG4gIHVwcGVyY2FzZT86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgSGVhZGluZyA9ICh7XG4gIGNoaWxkcmVuLFxuICBjb2xvckRhcmsgPSB0cnVlLFxuICBhcyA9ICdoMScsXG4gIHNpemUgPSAnaHVnZScsXG4gIHVwcGVyY2FzZSA9IGZhbHNlLFxufTogSGVhZGluZ1Byb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZC5UaXRsZVxuICAgICAgY29sb3JEYXJrPXtjb2xvckRhcmt9XG4gICAgICBhcz17YXN9XG4gICAgICBzaXplPXtzaXplfVxuICAgICAgdXBwZXJjYXNlPXt1cHBlcmNhc2V9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU3R5bGVkLlRpdGxlPlxuICApO1xufTtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzLCBEZWZhdWx0VGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBIZWFkaW5nUHJvcHMgfSBmcm9tICcuJztcblxuY29uc3QgdGl0bGVTaXplID0ge1xuICBzbWFsbDogKHRoZW1lOiBEZWZhdWx0VGhlbWUpID0+IGNzc2BcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udC5zaXplcy5tZWRpdW19O1xuICBgLFxuICBtZWRpdW06ICh0aGVtZTogRGVmYXVsdFRoZW1lKSA9PiBjc3NgXG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnQuc2l6ZXMubGFyZ2V9O1xuICBgLFxuICBiaWc6ICh0aGVtZTogRGVmYXVsdFRoZW1lKSA9PiBjc3NgXG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnQuc2l6ZXMueGxhcmdlfTtcbiAgYCxcbiAgaHVnZTogKHRoZW1lOiBEZWZhdWx0VGhlbWUpID0+IGNzc2BcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udC5zaXplcy54aHVnZX07XG4gICAgJHttZWRpYUZvbnQodGhlbWUpfTtcbiAgYCxcbn07XG5cbmNvbnN0IG1lZGlhRm9udCA9ICh0aGVtZTogRGVmYXVsdFRoZW1lKSA9PiBjc3NgXG4gIEBtZWRpYSAke3RoZW1lLm1lZGlhLmx0ZU1lZGl1bX0ge1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250LnNpemVzLnhsYXJnZX07XG4gIH1cbmA7XG5cbmNvbnN0IHRpdGxlQ2FzZSA9ICh1cHBlcmNhc2U6IGJvb2xlYW4pID0+IGNzc2BcbiAgdGV4dC10cmFuc2Zvcm06ICR7dXBwZXJjYXNlID8gJ3VwcGVyY2FzZScgOiAnbm9uZSd9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxPEhlYWRpbmdQcm9wcz5gXG4gICR7KHsgdGhlbWUsIGNvbG9yRGFyaywgc2l6ZSwgdXBwZXJjYXNlIH0pID0+IGNzc2BcbiAgICBjb2xvcjogJHtjb2xvckRhcmsgPyB0aGVtZS5jb2xvcnMucHJpbWFyeUNvbG9yIDogdGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICAke3RpdGxlU2l6ZVtzaXplXSh0aGVtZSl9O1xuICAgICR7dGl0bGVDYXNlKHVwcGVyY2FzZSl9O1xuICBgfVxuYDtcbiIsImltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCB0eXBlIEh0bWxDb21wb25lbnRQcm9wcyA9IHtcbiAgaHRtbDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0ICBIdG1sQ29tcG9uZW50ID0gKHsgaHRtbCB9OiBIdG1sQ29tcG9uZW50UHJvcHMpID0+IHtcbiAgcmV0dXJuIDxTdHlsZWQuQ29udGFpbmVyIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fSAvPjtcbn07XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250LnNpemVzLnNtYWxsfTtcblxuICAgIHAge1xuICAgICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZ3MubWVkaXVtfSAwO1xuICAgIH1cblxuICAgIGEsXG4gICAgYTp2aXNpdGVkLFxuICAgIGE6bGlua2VkIHtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVzc2UtaW4tb3V0O1xuICAgIH1cbiAgICBhOmhvdmVyIHtcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xuICAgIH1cblxuICAgIHByZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5kYXJrZXJHcmF5fTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZ3MubWVkaXVtfTtcbiAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmdzLnhsYXJnZX0gMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250LnNpemVzLnNtYWxsfTtcblxuICAgIH1cblxuICAgIC5pbWFnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5tZWRpdW1HcmF5fTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmdzLnhsYXJnZX0wO1xuXG4gICAgfVxuXG4gICAgLmltYWdlIGZpZ2NhcHRpb257XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udC5zaXplcy5zbWFsbH07XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmdzLnNtYWxsfTtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICB9XG5cbiAgICAuaW1hZ2Utc3R5bGUtc2lkZSB7XG4gICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5ncy5tZWRpdW19O1xuICAgIH1cblxuICAgIGhyIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAke3RoZW1lLmNvbG9ycy5tZWRpdW1HcmF5fTtcbiAgICB9XG5cbiAgICB1bCxvbCB7XG4gICAgICBtYXJnaW46ICR0aGVtZS5zcGFjaW5ncy54bGFyZ2UpO1xuICAgIH1cblxuICAgIC50YWJsZSB7XG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICB9XG5cbiAgICB0YWJsZSB0ZCxcbiAgICB0YWJsZSB0aCB7XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmdzLnNtYWxsfTtcbiAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICR7dGhlbWUuY29sb3JzLm1lZGl1bUdyYXl9O1xuICAgIH1cblxuICAgIEBtZWRpYSAke3RoZW1lLm1lZGlhLmx0ZU1lZGl1bX17XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAuaW1hZ2Utc3R5bGUtc2lkZXtcbiAgICAgICAgbWF4LXdpZHRoOjEwMCU7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBtYXJnaW46MDtcbiAgICAgIH1cbiAgICB9XG4gIGB9XG5gO1xuIiwiaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICcuLi9IZWFkaW5nJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCB0eXBlIExvZ29MaW5rUHJvcHMgPSB7XG4gIHRleHQ6IHN0cmluZztcbiAgc3JjSW1nPzogc3RyaW5nO1xuICBsaW5rOiBzdHJpbmc7XG4gIG5ld1RhYj86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgTG9nb0xpbmsgPSAoe1xuICB0ZXh0LFxuICBzcmNJbWcgPSAnJyxcbiAgbGluayxcbiAgbmV3VGFiID0gZmFsc2UsXG59OiBMb2dvTGlua1Byb3BzKSA9PiB7XG4gIGNvbnN0IG5leHRMaW5rID0gbGluay5tYXRjaCgvXlxcLy8pID8gdHJ1ZSA6IGZhbHNlO1xuICBjb25zdCB0YXJnZXQgPSBuZXdUYWIgPyAnX2JsYW5rJyA6ICdfc2VsZic7XG5cbiAgaWYgKG5leHRMaW5rKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkaW5nIHNpemU9XCJzbWFsbFwiIHVwcGVyY2FzZT5cbiAgICAgICAgPExpbmsgaHJlZj17bGlua30gcGFzc0hyZWY+XG4gICAgICAgICAgPFN0eWxlZC5Db250YWluZXIgdGFyZ2V0PXt0YXJnZXR9PlxuICAgICAgICAgICAgeyEhc3JjSW1nICYmIDxpbWcgc3JjPXtzcmNJbWd9IGFsdD17dGV4dH0gLz59XG4gICAgICAgICAgICB7IXNyY0ltZyAmJiB0ZXh0fVxuICAgICAgICAgIDwvU3R5bGVkLkNvbnRhaW5lcj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9IZWFkaW5nPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxIZWFkaW5nIHNpemU9XCJzbWFsbFwiIHVwcGVyY2FzZT5cbiAgICAgIDxTdHlsZWQuQ29udGFpbmVyIGhyZWY9e2xpbmt9IHRhcmdldD17dGFyZ2V0fT5cbiAgICAgICAgeyEhc3JjSW1nICYmIDxpbWcgc3JjPXtzcmNJbWd9IGFsdD17dGV4dH0gLz59XG4gICAgICAgIHshc3JjSW1nICYmIHRleHR9XG4gICAgICA8L1N0eWxlZC5Db250YWluZXI+XG4gICAgPC9IZWFkaW5nPlxuICApO1xufTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmFgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIG1hcmdpbi1sZWZ0OjEwJTtcblxuICA+IGltZyB7XG4gICAgaGVpZ2h0OiAxNXJlbTtcbiAgICB3aWR0aDogMTVyZW07XG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gIH1cbmA7XG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcblxuZXhwb3J0IHR5cGUgTWVudUxpbmtQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgbGluazogc3RyaW5nO1xuICBuZXdUYWI/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IE1lbnVMaW5rID0gKHsgY2hpbGRyZW4sIGxpbmssIG5ld1RhYiA9IGZhbHNlIH06IE1lbnVMaW5rUHJvcHMpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gbmV3VGFiID8gJ19ibGFuaycgOiAnX3NlbGYnO1xuICBjb25zdCBuZXh0TGluayA9IGxpbmsubWF0Y2goL15cXC8vKSA/IHRydWUgOiBmYWxzZTtcblxuICBpZiAobmV4dExpbmspIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgaHJlZj17bGlua30gcGFzc0hyZWY+XG4gICAgICAgIDxTdHlsZWQuQ29udGFpbmVyIHRhcmdldD17dGFyZ2V0fT57Y2hpbGRyZW59PC9TdHlsZWQuQ29udGFpbmVyPlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWQuQ29udGFpbmVyIGhyZWY9e2xpbmt9IHRhcmdldD17dGFyZ2V0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0eWxlZC5Db250YWluZXI+XG4gICk7XG59O1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuYWBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250LnNpemVzLnNtYWxsfTtcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmdzLnNtYWxsfTtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwLjc2cmVtO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDAuMnJlbTtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnNlY29uZGFyeX07XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgJjpob3Zlcjo6YWZ0ZXIge1xuICAgICAgbGVmdDogMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIGB9XG5gO1xuIiwiaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IHtMb2dvTGlua30gZnJvbSAnLi4vTG9nb0xpbmsnO1xyXG5pbXBvcnQge01lbnVMaW5rfSBmcm9tICcuLi9NZW51TGluayc7XHJcbmltcG9ydCB7IE1lbnUgYXMgTWVudUljb24gfSBmcm9tICdAc3R5bGVkLWljb25zL21hdGVyaWFsLW91dGxpbmVkL01lbnUnO1xyXG5pbXBvcnQgeyBDbG9zZSBhcyBDbG9zZUljb24gfSBmcm9tICdAc3R5bGVkLWljb25zL21hdGVyaWFsLW91dGxpbmVkL0Nsb3NlJztcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnLi4vSGVhZGluZyc7XHJcblxyXG5leHBvcnQgdHlwZSBNZW51UHJvcHNMaW5rcyA9e1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbGluazogc3RyaW5nO1xyXG4gIG5ld1RhYjogYm9vbGVhbjtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE1lbnVQcm9wcyA9IHtcclxuICBsaW5rczogTWVudVByb3BzTGlua3NbXTtcclxuICBibG9nTmFtZTogU3RyaW5nO1xyXG4gIGxvZ286IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51ID0gKHsgbGlua3M9W10sIGJsb2dOYW1lLCBsb2dvIH06IE1lbnVQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFttZW51VmlzaWJsZSwgc2V0TWVudVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZU9wZW5DbG9zZU1lbnU9IChldmVudDogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldE1lbnVWaXNpYmxlKCh2KT0+IXYpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U3R5bGVkLk9wZW5DbG9zZSAgbWVudVZpc2libGU9e21lbnVWaXNpYmxlfSBvbkNsaWNrPXtoYW5kbGVPcGVuQ2xvc2VNZW51fSBocmVmPVwiI1wiIGFyaWEtbGFiZWw9XCJPcGVuIG9yIGNsb3NlIG1lbnVcIiB0aXRsZT1cIk9wZW4gb3IgY2xvc2UgbWVudVwiPlxyXG5cclxuICAgICAgICB7bWVudVZpc2libGUgJiYgPENsb3NlSWNvbiBhcmlhLWxhYmVsPVwiQ2xvc2UgbWVudVwiIC8+fVxyXG4gICAgICAgIHshbWVudVZpc2libGUgJiYgPE1lbnVJY29uIGFyaWEtbGFiZWw9XCJPcGVuIG1lbnVcIi8+fVxyXG4gICAgICA8L1N0eWxlZC5PcGVuQ2xvc2U+XHJcbiAgICAgIDxTdHlsZWQuV3JhcHBlciBtZW51VmlzaWJsZT17bWVudVZpc2libGV9IGFyaWEtaGlkZGVuPXshbWVudVZpc2libGV9PlxyXG4gICAgICAgIDxTdHlsZWQuTmF2PlxyXG4gICAgICAgICAgPFN0eWxlZC5Mb2dvPlxyXG4gICAgICAgICAgICA8TG9nb0xpbmsgbGluaz1cIi9cIiB0ZXh0PXtibG9nTmFtZX0gc3JjSW1nPXtsb2dvfS8+XHJcbiAgICAgICAgICA8L1N0eWxlZC5Mb2dvPlxyXG5cclxuICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJzbWFsbFwiIGFzPVwiaDJcIiBjb2xvckRhcms9e2ZhbHNlfT5cclxuICAgICAgICAgICAgIHsnTWVudSd9XHJcbiAgICAgICAgICAgPC9IZWFkaW5nPlxyXG5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGlua3MubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVMaW5rIGtleT17bGluay5pZH0gbGluaz17bGluay5saW5rfSBuZXdUYWI9e2xpbmsubmV3VGFifT5cclxuICAgICAgICAgICAgICAgIHtsaW5rLnRleHR9XHJcbiAgICAgICAgICAgICAgPC9NZW51TGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU3R5bGVkLk5hdj5cclxuICAgICAgPC9TdHlsZWQuV3JhcHBlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzLCBEZWZhdWx0VGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7VGl0bGUgYXMgSGVhZGluZ1N0eWxlc30gZnJvbSAnLi4vSGVhZGluZy9zdHlsZXMnO1xyXG5cclxuXHJcbnR5cGUgTWVudUJlaGF2aW9yUHJvcHMgPSB7XHJcbiAgbWVudVZpc2libGU6IGJvb2xlYW47XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyQ2hhbmdlciA9IChcclxuICBtZW51VmlzaWJsZTogTWVudUJlaGF2aW9yUHJvcHNbJ21lbnVWaXNpYmxlJ10sXHJcbiAgdGhlbWU6IERlZmF1bHRUaGVtZSxcclxuICApPT4gY3NzYFxyXG4gICAgbGVmdDogJHttZW51VmlzaWJsZSA/ICcwJzonLTMwcmVtJ307XHJcbiAgICBvdmVyZmxvdy15OiAke21lbnVWaXNpYmxlPyAnYXV0byc6ICdoaWRkZW4nfTtcclxuXHJcbiAgICBAbWVkaWEgJHt0aGVtZS5tZWRpYS5sdGVNZWRpdW19e1xyXG4gICAgICBsZWZ0OiAke21lbnVWaXNpYmxlID8gJzAnOiAnLTMycmVtJ307XHJcbiAgICB9XHJcbiAgYDtcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHQkeyh7IHRoZW1lLG1lbnVWaXNpYmxlIH0pID0+IGNzc2BcclxuICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAzMnJlbTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICR7d3JhcHBlckNoYW5nZXIobWVudVZpc2libGUsIHRoZW1lKX1cclxuXHJcbiAgYH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXYgPSBzdHlsZWQubmF2YFxyXG5cdCR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICR7SGVhZGluZ1N0eWxlc317XHJcbiAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcbiAgICB9XHJcblxyXG4gIGB9XHJcbmA7XHJcblxyXG5jb25zdCBidXR0b25DaGFuZ2VyID0gKFxyXG4gIG1lbnVWaXNpYmxlOiBNZW51QmVoYXZpb3JQcm9wc1snbWVudVZpc2libGUnXSxcclxudGhlbWU6RGVmYXVsdFRoZW1lLFxyXG4pID0+IGNzc2BcclxuICBsZWZ0OiAke21lbnVWaXNpYmxlID8gJzI2cmVtJyA6ICcxcmVtJ307XHJcbiAgY29sb3I6ICR7bWVudVZpc2libGUgPyB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5IDogdGhlbWUuY29sb3JzLndoaXRlfTtcclxuXHJcbiAgQG1lZGlhICR7dGhlbWUubWVkaWEubHRlTWVkaXVtfXtcclxuICAgIGxlZnQ6ICR7bWVudVZpc2libGUgPyAnMjZyZW0nIDogJy0wLjVyZW0nfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXHJcblx0JHsoeyB0aGVtZSB9KSA9PiBjc3NgXHJcbiAgICAke0hlYWRpbmdTdHlsZXN9e1xyXG4gICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW46MDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5ncy54eGxhcmdlfTtcclxuXHJcbiAgICAgIGltZ3tcclxuICAgICAgICBib3JkZXI6MC41cmVtIHNvbGlkICR7dGhlbWUuY29sb3JzLnNlY29uZGFyeX07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9wZW5DbG9zZSA9IHN0eWxlZC5hPE1lbnVCZWhhdmlvclByb3BzPmBcclxuXHQkeyh7IHRoZW1lLCBtZW51VmlzaWJsZSB9KSA9PiBjc3NgXHJcbiAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICB0b3A6ICR7dGhlbWUuc3BhY2luZ3MubWVkaXVtfTtcclxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcclxuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICBoZWlnaHQ6M3JlbTtcclxuICAgICAgbGVmdDoyNnJlbTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICAke2J1dHRvbkNoYW5nZXIobWVudVZpc2libGUsdGhlbWUpfVxyXG4gIGB9XHJcbmA7XHJcbiIsImltcG9ydCBzdHlsZWQsIHtjc3MsRGVmYXVsdFRoZW1lfSAgIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCB0eXBlIFBvc3RDb250YWluZXJQcm9wcyA9IHtcclxuICBzaXplOiAnbWF4JyB8ICdjb250ZW50JztcclxufTtcclxuXHJcbmNvbnN0IHBvc3RDb250YWluZXJTdHlsZXMgPSB7XHJcbiAgbWF4OiAodGhlbWU6IERlZmF1bHRUaGVtZSkgPT4gY3NzYFxyXG4gICAgbWF4LXdpZHRoOiAke3RoZW1lLnNpemVzLm1heH07XHJcbiAgYCxcclxuICBjb250ZW50OiAodGhlbWU6IERlZmF1bHRUaGVtZSkgPT4gY3NzYFxyXG4gICAgbWF4LXdpZHRoOiAke3RoZW1lLnNpemVzLmNvbnRlbnR9O1xyXG4gIGAsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdENvbnRhaW5lciA9IHN0eWxlZC5kaXY8UG9zdENvbnRhaW5lclByb3BzPmBcclxuJHsoeyB0aGVtZSwgc2l6ZSB9KSA9PiBjc3NgXHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBtYXJnaW46IDAgYXV0bztcclxuICAgcGFkZGluZzogMCAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfTtcclxuICAke3Bvc3RDb250YWluZXJTdHlsZXNbc2l6ZV0odGhlbWUpfVxyXG5cclxuIGB9XHJcbmA7XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdXJsOiAnaHR0cHM6Ly9zdHJhcGktbGFuZGluZy1wYWdlcy1wcm9qZWN0LTIuaGVyb2t1YXBwLmNvbScsXG4gIHNpdGVOYW1lOiAnTmFuYXZlcnNvJyxcbiAgZGVmYXVsdFNsdWc6ICdsYW5kaW5nLXBhZ2UnLFxuICBncmFwaGxVUkw6J2h0dHA6Ly8xMjcuMC4wLjE6MTMzNy9ncmFwaHFsJyxcbn07XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdSQVBIUUxfRlJBR01FTlRTID0gZ3FsYFxyXG4gIGZyYWdtZW50IGltYWdlIG9uIFVwbG9hZEZpbGUge1xyXG4gICAgaWRcclxuICAgIGFsdGVybmF0aXZlVGV4dFxyXG4gICAgdXJsXHJcbiAgfVxyXG4gIGZyYWdtZW50IGNvdmVyIG9uIFBvc3Qge1xyXG4gICAgY292ZXIge1xyXG4gICAgICAuLi5pbWFnZVxyXG4gICAgfVxyXG4gIH1cclxuICBmcmFnbWVudCB0YWcgb24gVGFnIHtcclxuICAgIGlkXHJcbiAgICBkaXNwbGF5TmFtZVxyXG4gICAgc2x1Z1xyXG4gIH1cclxuICBmcmFnbWVudCBhdXRob3Igb24gQXV0aG9yIHtcclxuICAgIGlkXHJcbiAgICBkaXNwbGF5TmFtZVxyXG4gICAgc2x1Z1xyXG4gIH1cclxuICBmcmFnbWVudCBjYXRlZ29yeSBvbiBDYXRlZ29yeSB7XHJcbiAgICBpZFxyXG4gICAgZGlzcGxheU5hbWVcclxuICAgIHNsdWdcclxuICB9XHJcbiAgZnJhZ21lbnQgdGFncyBvbiBQb3N0IHtcclxuICAgIHRhZ3Mge1xyXG4gICAgICAuLi50YWdcclxuICAgIH1cclxuICB9XHJcbiAgZnJhZ21lbnQgYXV0aG9yUG9zdCBvbiBQb3N0IHtcclxuICAgIGF1dGhvciB7XHJcbiAgICAgIC4uLmF1dGhvclxyXG4gICAgfVxyXG4gIH1cclxuICBmcmFnbWVudCBjYXRlZ29yaWVzIG9uIFBvc3Qge1xyXG4gICAgY2F0ZWdvcmllcyB7XHJcbiAgICAgIC4uLmNhdGVnb3J5XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZyYWdtZW50IG1lbnVMaW5rIG9uIENvbXBvbmVudE1lbnVNZW51TGluayB7XHJcbiAgICBpZFxyXG4gICAgbGlua1xyXG4gICAgdGV4dFxyXG4gICAgbmV3VGFiXHJcbiAgfVxyXG4gIGZyYWdtZW50IHBvc3Qgb24gUG9zdCB7XHJcbiAgICBpZFxyXG4gICAgc2x1Z1xyXG4gICAgdGl0bGVcclxuICAgIGV4Y2VycHRcclxuICAgIGNvbnRlbnRcclxuICAgIGNyZWF0ZWRBdFxyXG4gICAgYWxsb3dDb21tZW50c1xyXG4gICAgLi4uY292ZXJcclxuICAgIC4uLmNhdGVnb3JpZXNcclxuICAgIC4uLnRhZ3NcclxuICAgIC4uLmF1dGhvclBvc3RcclxuICB9XHJcbiAgZnJhZ21lbnQgc2V0dGluZ3Mgb24gU2V0dGluZ3Mge1xyXG4gICAgaWRcclxuICAgIGJsb2dOYW1lXHJcbiAgICBkZXNjcmlwdGlvblxyXG4gICAgbG9nbyB7XHJcbiAgICAgIC4uLmltYWdlXHJcbiAgICB9XHJcbiAgICBtZW51TGluayB7XHJcbiAgICAgIC4uLm1lbnVMaW5rXHJcbiAgICB9XHJcbiAgICB0ZXh0XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBHUkFQSFFMX0ZSQUdNRU5UUyB9IGZyb20gJy4vZnJhZ21lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBHUkFQSFFMX1FVRVJZID0gZ3FsYFxyXG4gICR7R1JBUEhRTF9GUkFHTUVOVFN9XHJcbiAgcXVlcnkgR0VUX1BPU1RTKFxyXG4gICAgJGNhdGVnb3J5U2x1ZzogU3RyaW5nXHJcbiAgICAkcG9zdFNsdWc6IFN0cmluZ1xyXG4gICAgJHBvc3RTZWFyY2g6IFN0cmluZ1xyXG4gICAgJGF1dGhvclNsdWc6IFN0cmluZ1xyXG4gICAgJHRhZ1NsdWc6IFN0cmluZ1xyXG4gICAgJHNvcnQ6IFN0cmluZyA9IFwiY3JlYXRlZEF0OmRlc2NcIlxyXG4gICAgJHN0YXJ0OiBJbnQgPSAwXHJcbiAgICAkbGltaXQ6IEludCA9IDEwXHJcbiAgKSB7XHJcbiAgICBzZXR0aW5nIHtcclxuICAgICAgLi4uc2V0dGluZ3NcclxuICAgIH1cclxuICAgIHBvc3RzKFxyXG4gICAgICBzdGFydDogJHN0YXJ0XHJcbiAgICAgIGxpbWl0OiAkbGltaXRcclxuICAgICAgc29ydDogJHNvcnRcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBzbHVnOiAkcG9zdFNsdWdcclxuICAgICAgICB0aXRsZV9jb250YWluczogJHBvc3RTZWFyY2hcclxuICAgICAgICBjYXRlZ29yaWVzOiB7IHNsdWc6ICRjYXRlZ29yeVNsdWcgfVxyXG4gICAgICAgIGF1dGhvcjogeyBzbHVnOiAkYXV0aG9yU2x1ZyB9XHJcbiAgICAgICAgdGFnczogeyBzbHVnOiAkdGFnU2x1ZyB9XHJcbiAgICAgIH1cclxuICAgICkge1xyXG4gICAgICAuLi5wb3N0XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdSQVBIUUxfUVVFUllfQ0FURUdPUlkgPSBncWxgXHJcbiAgcXVlcnkgR0VUX0NBVEVHT1JJRVN7XHJcbiAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgX2lkXHJcbiAgICAgIGRpc3BsYXlOYW1lXHJcbiAgICAgIHNsdWdcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCB7dXNlRWZmZWN0LHVzZVN0YXRlLFJlYWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IHsgR29Ub3AgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0dvVG9wJztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NZW51JztcclxuaW1wb3J0IHsgU2V0dGluZ3NTdHJhcGkgfSBmcm9tICcuLi8uLi9zaGFyZWQtdHlwZXMvc2V0dGluZ3Mtc3RyYXBpJztcclxuaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbmltcG9ydCB7bG9hZENhdGVnb3JpZXN9IGZyb20gJy4uLy4uL2FwaS9sb2FkLWNhdGVnb3JpZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IHR5cGUgQmFzZVRlbXBsYXRlUHJvcHMgPSB7XHJcbiAgc2V0dGluZ3M6IFNldHRpbmdzU3RyYXBpO1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQmFzZVRlbXBsYXRlID0gKCB7IHNldHRpbmdzLCBjaGlsZHJlbiB9IDogQmFzZVRlbXBsYXRlUHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbc3RhdGVDYXRlZ29yaWVzLCBzZXRTdGF0ZUNhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHNpdGUgPSByb3V0ZXIucGF0aG5hbWU7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxvYWRDYXRlZ29yaWVzKCkudGhlbih2YWwgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlQ2F0ZWdvcmllcyh2YWwpO1xyXG4gICAgICB9KTtcclxuICB9LFtdKTtcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZC5XcmFwcGVyPlxyXG4gICAgICA8TWVudSBsaW5rcz17c2V0dGluZ3MubWVudUxpbmt9XHJcbiAgICAgICAgICBibG9nTmFtZT17c2V0dGluZ3MuYmxvZ05hbWV9XHJcbiAgICAgICAgICBsb2dvPXtzZXR0aW5ncy5sb2dvWzBdLnVybH1cclxuICAgICAgLz5cclxuICAgICA8U3R5bGVkLkhlYWRlckNvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgYmxvZ05hbWUgPSB7c2V0dGluZ3MuYmxvZ05hbWV9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e3NldHRpbmdzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIGxvZ28gPXtzZXR0aW5ncy5sb2dvWzBdLnVybH1cclxuICAgICAgICBzaG93VGV4dD17dHJ1ZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8U3R5bGVkLk1lbnVTZWFyY2g+XHJcbiAgICAgICAgICA8U3R5bGVkLlNlYXJjaENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICB7c3RhdGVDYXRlZ29yaWVzLmxlbmd0aD4gMCAmJiBzdGF0ZUNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BhcnRpY2xlLW1ldGEtY2F0LSR7Y2F0ZWdvcnkuX2lkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7cGF0aG5hbWU6IFwiL2NhdGVnb3J5XCIsIHF1ZXJ5OiB7IHNsdWc6IGNhdGVnb3J5LnNsdWd9fX0gYXM9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuTGlua01lbnVDYXRlZ29yeT4ge2NhdGVnb3J5LmRpc3BsYXlOYW1lfSA8L1N0eWxlZC5MaW5rTWVudUNhdGVnb3J5PlxyXG4gICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL3NlYXJjaC9cIiBtZXRob2Q9XCJHRVRcIj5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWQuU2VhcmNoSW5wdXQgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiQnVzY2FyIHBvciBwb3N0cy4uLlwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJxXCJcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyb3V0ZXIucXVlcnkucX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgIDwvU3R5bGVkLlNlYXJjaENvbnRhaW5lcj5cclxuICAgICAgICA8L1N0eWxlZC5NZW51U2VhcmNoPlxyXG4gICAgIDwvU3R5bGVkLkhlYWRlckNvbnRhaW5lcj5cclxuXHJcbiAgICAgPFN0eWxlZC5Db250ZW50Q29udGFpbmVyPlxyXG5cclxuICAgICB7Y2hpbGRyZW59IDwvU3R5bGVkLkNvbnRlbnRDb250YWluZXI+XHJcblxyXG4gICAgIDxTdHlsZWQuRm9vdGVyQ29udGFpbmVyPlxyXG4gICAgICAgIDxGb290ZXIgaHRtbD17c2V0dGluZ3MudGV4dH0vPlxyXG4gICAgIDwvU3R5bGVkLkZvb3RlckNvbnRhaW5lcj5cclxuXHJcbiAgICA8R29Ub3AgLz5cclxuICAgIDwvU3R5bGVkLldyYXBwZXI+XHJcblxyXG4gICk7XHJcblxyXG59XHJcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YGBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9O1xyXG4gIGB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgbWF4LXdpZHRoOjEyMHJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmdzLnhodWdlfTtcclxuICBgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgbWF4LXdpZHRoOjEyMHJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfTtcclxuICBgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOjEyMHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmBcclxuZXhwb3J0IGNvbnN0IE1lbnVTZWFyY2ggPSBzdHlsZWQuZGl2YFxyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6Ym9jaztcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICB3aWR0aDogMjBlbTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgQG1lZGlhICR7dGhlbWUubWVkaWEubHRlTWVkaXVtfXtcclxuICAgICAgLmlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206MjBweDtcclxuICAgICAgfVxyXG4gICAgICAuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGB9XHJcblxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtNZW51Q2F0ZWdvcnkgPSBzdHlsZWQuYWBcclxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnQuc2l6ZXMuc21hbGx9O1xyXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5ncy5zbWFsbH07XHJcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDAuNzZyZW07XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMC4ycmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICBsZWZ0OiAyNSU7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgYH1cclxuYDtcclxuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==