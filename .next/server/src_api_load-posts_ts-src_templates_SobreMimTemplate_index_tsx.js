exports.id = "src_api_load-posts_ts-src_templates_SobreMimTemplate_index_tsx";
exports.ids = ["src_api_load-posts_ts-src_templates_SobreMimTemplate_index_tsx"];
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
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["float:right;padding:1rem;position:relative;margin-top:1rem;border:none;margin-right:1rem;border-radius:1rem;width:20em;outline:none;@media ", "{.input[type=text]{float:none;display:block;text-align:left;width:100%;margin:0;padding:14px;}.input[type=text]{border:1px solid #ccc;}}"], theme.media.lteMedium));
const LinkMenuCategory = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "styles__LinkMenuCategory",
  componentId: "n1ae26-7"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["float:left;text-decoration:none;font-size:", ";padding:", ";color:", ";position:relative;&::after{content:'';position:absolute;bottom:0.76rem;left:50%;width:0;height:0.2rem;background:", ";transition:all 300ms ease-in-out;}&:hover::after{left:25%;width:50%;}"], theme.font.sizes.small, theme.spacings.small, theme.colors.primary, theme.colors.secondary));

/***/ }),

/***/ "./src/templates/SobreMimTemplate/index.tsx":
/*!**************************************************!*\
  !*** ./src/templates/SobreMimTemplate/index.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SobreMimTemplate": function() { return /* binding */ SobreMimTemplate; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/templates/SobreMimTemplate/styles.ts");
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Base */ "./src/templates/Base/index.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_HtmlContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/HtmlContent */ "./src/components/HtmlContent/index.tsx");
/* harmony import */ var _components_PostContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PostContainer */ "./src/components/PostContainer/index.ts");
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Heading */ "./src/components/Heading/index.tsx");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock */ "./src/templates/SobreMimTemplate/mock.ts");

var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\templates\\SobreMimTemplate\\index.tsx";







const SobreMimTemplate = ({
  settings
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const handleBack = async () => {
    router.push("/");
  };

  console.log("Mock");
  console.log(_mock__WEBPACK_IMPORTED_MODULE_7__.default);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Base__WEBPACK_IMPORTED_MODULE_2__.BaseTemplate, {
    settings: settings,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostContainer__WEBPACK_IMPORTED_MODULE_5__.PostContainer, {
        size: "max",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Heading__WEBPACK_IMPORTED_MODULE_6__.Heading, {
          size: "big",
          children: [" ", _mock__WEBPACK_IMPORTED_MODULE_7__.default.title, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostContainer__WEBPACK_IMPORTED_MODULE_5__.PostContainer, {
        size: "content",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HtmlContent__WEBPACK_IMPORTED_MODULE_4__.HtmlComponent, {
          html: _mock__WEBPACK_IMPORTED_MODULE_7__.default.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.ButtonContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: handleBack,
        children: 'Voltar'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/SobreMimTemplate/mock.ts":
/*!************************************************!*\
  !*** ./src/templates/SobreMimTemplate/mock.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Sobre Mim',
  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br><br> Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
});

/***/ }),

/***/ "./src/templates/SobreMimTemplate/styles.ts":
/*!**************************************************!*\
  !*** ./src/templates/SobreMimTemplate/styles.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": function() { return /* binding */ Wrapper; },
/* harmony export */   "ButtonContainer": function() { return /* binding */ ButtonContainer; },
/* harmony export */   "Button": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Heading_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Heading/styles */ "./src/components/Heading/styles.ts");


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "s976u9-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding-bottom:", ";margin-bottom:", ";border-bottom:0.1rem solid ", ";justify-content:center;", "{margin:5rem;padding-top:", ";margin-top:", ";margin-bottom:", ";justify-content:center;}"], theme.spacings.xlarge, theme.spacings.xlarge, theme.colors.mediumGray, _components_Heading_styles__WEBPACK_IMPORTED_MODULE_1__.Title, theme.spacings.xlarge, theme.spacings.xxxhuge, theme.spacings.medium));
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__ButtonContainer",
  componentId: "s976u9-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding:0 ", ";margin:", " 0;display:flex;justify-content:center;"], theme.spacings.large, theme.spacings.large));
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "styles__Button",
  componentId: "s976u9-2"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background:", ";color:", ";border:none;padding:", " ", ";cursor:pointer;&:disabled{background:", ";}"], theme.colors.primary, theme.colors.white, theme.spacings.small, theme.spacings.large, theme.colors.darkerGray));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9hcGkvbG9hZC1jYXRlZ29yaWVzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2FwaS9sb2FkLXBvc3RzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Hb1RvcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Hb1RvcC9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0hlYWRpbmcvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvSGVhZGluZy9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9IdG1sQ29udGVudC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9IdG1sQ29udGVudC9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Mb2dvTGluay9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Mb2dvTGluay9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9NZW51TGluay9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9NZW51TGluay9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9NZW51L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL01lbnUvc3R5bGVzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvUG9zdENvbnRhaW5lci9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb25maWcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvZ3JhcGhxbC9mcmFnbWVudHMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvZ3JhcGhxbC9xdWVyaWVzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3RlbXBsYXRlcy9CYXNlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy90ZW1wbGF0ZXMvQmFzZS9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdGVtcGxhdGVzL1NvYnJlTWltVGVtcGxhdGUvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3RlbXBsYXRlcy9Tb2JyZU1pbVRlbXBsYXRlL21vY2sudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdGVtcGxhdGVzL1NvYnJlTWltVGVtcGxhdGUvc3R5bGVzLnRzIiwid2VicGFjazovL2Zyb250ZW5kL2lnbm9yZWR8QzpcXFVzZXJzXFxBY2VyXFxEZXNrdG9wXFxSZWFjdFByb2pldG9zXFxuZXdCbG9nXFxQZXF1ZW5vLUJsb2ctUmVhY3RcXGZyb250ZW5kXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsibG9hZENhdGVnb3JpZXMiLCJkYXRhIiwicmVxdWVzdCIsImNvbmZpZyIsIkdSQVBIUUxfUVVFUllfQ0FURUdPUlkiLCJjb25zb2xlIiwibG9nIiwiY2F0ZWdvcmllcyIsImRlZmF1bHRMb2FkUG9zdHNWYXJpYWJsZXMiLCJzb3J0Iiwic3RhcnQiLCJsaW1pdCIsImxvYWRQb3N0cyIsInZhcmlhYmxlcyIsIkdSQVBIUUxfUVVFUlkiLCJGb290ZXIiLCJodG1sIiwiQ29udGFpbmVyIiwic3R5bGVkIiwidGhlbWUiLCJjc3MiLCJjb2xvcnMiLCJtZWRpdW1HcmF5IiwiR29Ub3AiLCJwcmltYXJ5Iiwid2hpdGUiLCJIZWFkZXIiLCJibG9nTmFtZSIsImRlc2NyaXB0aW9uIiwibG9nbyIsInNob3dUZXh0IiwidmFsdWVEZXNjcmlwdGlvbiIsInRvVXBwZXJDYXNlIiwiV3JhcHBlciIsInNwYWNpbmdzIiwieGh1Z2UiLCJzaXplcyIsIm1heCIsImZvbnQiLCJzbWFsbCIsIkhlYWRpbmdTdHlsZXMiLCJtZWRpYSIsImx0ZVNtYWxsIiwiQ29udGVudCIsImxhcmdlIiwiSGVhZGluZyIsImNoaWxkcmVuIiwiY29sb3JEYXJrIiwiYXMiLCJzaXplIiwidXBwZXJjYXNlIiwidGl0bGVTaXplIiwibWVkaXVtIiwiYmlnIiwieGxhcmdlIiwiaHVnZSIsIm1lZGlhRm9udCIsImx0ZU1lZGl1bSIsInRpdGxlQ2FzZSIsIlRpdGxlIiwicHJpbWFyeUNvbG9yIiwiSHRtbENvbXBvbmVudCIsIl9faHRtbCIsInNlY29uZGFyeSIsImRhcmtlckdyYXkiLCJMb2dvTGluayIsInRleHQiLCJzcmNJbWciLCJsaW5rIiwibmV3VGFiIiwibmV4dExpbmsiLCJtYXRjaCIsInRhcmdldCIsIk1lbnVMaW5rIiwiTWVudSIsImxpbmtzIiwibWVudVZpc2libGUiLCJzZXRNZW51VmlzaWJsZSIsInVzZVN0YXRlIiwiaGFuZGxlT3BlbkNsb3NlTWVudSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2Iiwicm91dGVyIiwidXNlUm91dGVyIiwibWFwIiwiaWQiLCJ3cmFwcGVyQ2hhbmdlciIsIk5hdiIsImJ1dHRvbkNoYW5nZXIiLCJMb2dvIiwieHhsYXJnZSIsIk9wZW5DbG9zZSIsInBvc3RDb250YWluZXJTdHlsZXMiLCJjb250ZW50IiwiUG9zdENvbnRhaW5lciIsInVybCIsInNpdGVOYW1lIiwiZGVmYXVsdFNsdWciLCJncmFwaGxVUkwiLCJHUkFQSFFMX0ZSQUdNRU5UUyIsImdxbCIsIkJhc2VUZW1wbGF0ZSIsInNldHRpbmdzIiwic3RhdGVDYXRlZ29yaWVzIiwic2V0U3RhdGVDYXRlZ29yaWVzIiwic2l0ZSIsInBhdGhuYW1lIiwidXNlRWZmZWN0IiwidGhlbiIsInZhbCIsIm1lbnVMaW5rIiwibGVuZ3RoIiwiY2F0ZWdvcnkiLCJxdWVyeSIsInNsdWciLCJkaXNwbGF5TmFtZSIsIl9pZCIsInEiLCJIZWFkZXJDb250YWluZXIiLCJDb250ZW50Q29udGFpbmVyIiwiRm9vdGVyQ29udGFpbmVyIiwiU2VhcmNoQ29udGFpbmVyIiwiTWVudVNlYXJjaCIsIlNlYXJjaElucHV0IiwiTGlua01lbnVDYXRlZ29yeSIsIlNvYnJlTWltVGVtcGxhdGUiLCJoYW5kbGVCYWNrIiwicHVzaCIsIk1vY2siLCJ0aXRsZSIsInh4eGh1Z2UiLCJCdXR0b25Db250YWluZXIiLCJCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTTyxNQUFNQSxjQUFjLEdBQUcsWUFBMkM7QUFFdkUsUUFBTUMsSUFBSSxHQUFHLE1BQU1DLHdEQUFPLENBQUNDLHNEQUFELEVBQW1CQyxvRUFBbkIsQ0FBMUI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQUksQ0FBQ00sVUFBakI7QUFDQSxTQUFPTixJQUFJLENBQUNNLFVBQVo7QUFDRCxDQUxNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWFA7QUFFQTtBQUNBO0FBc0JPLE1BQU1DLHlCQUE2QyxHQUFHO0FBQ3pEQyxNQUFJLEVBQUUsZ0JBRG1EO0FBRXpEQyxPQUFLLEVBQUMsQ0FGbUQ7QUFHekRDLE9BQUssRUFBQztBQUhtRCxDQUF0RDtBQU1BLE1BQU1DLFNBQVMsR0FBRyxPQUN2QkMsU0FBNkIsR0FBRSxFQURSLEtBRVc7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LE1BQU0sR0FBR25ILDBFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ2YsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUMsc0RBQWYsMkdBQ2NELEtBQUssQ0FBQ0UsTUFBTixDQUFhRyxPQUQzQixFQUVTTCxLQUFLLENBQUNFLE1BQU4sQ0FBYUksS0FGdEIsRUFJV04sS0FBSyxDQUFDZSxRQUFOLENBQWVLLEtBSjFCLEVBSW1DcEIsS0FBSyxDQUFDZSxRQUFOLENBQWVVLEtBSmxELEVBT2dCekIsS0FBSyxDQUFDRSxNQUFOLENBQWEyQyxVQVA3QixDQURlLENBQVosQzs7Ozs7Ozs7OztBQzdCUCxlIiwiZmlsZSI6InNyY19hcGlfbG9hZC1wb3N0c190cy1zcmNfdGVtcGxhdGVzX1NvYnJlTWltVGVtcGxhdGVfaW5kZXhfdHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXF1ZXN0fSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IEdSQVBIUUxfUVVFUllfQ0FURUdPUlkgfSBmcm9tICcuLi9ncmFwaHFsL3F1ZXJpZXMnO1xyXG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gJy4uL3NoYXJlZC10eXBlcy9jYXRlZ29yeSc7XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgTG9hZENhdGVnb3J5VmFyaWFibGVzID0ge1xyXG4gIGFsbENhdGVnb3JpZXM6IENhdGVnb3J5W107XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRDYXRlZ29yaWVzID0gYXN5bmMgKCk6IFByb21pc2U8TG9hZENhdGVnb3J5VmFyaWFibGVzPiA9PntcclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QoY29uZmlnLmdyYXBobFVSTCwgR1JBUEhRTF9RVUVSWV9DQVRFR09SWSk7XHJcbiAgY29uc29sZS5sb2coZGF0YS5jYXRlZ29yaWVzKTtcclxuICByZXR1cm4gZGF0YS5jYXRlZ29yaWVzO1xyXG59O1xyXG4iLCJpbXBvcnQge3JlcXVlc3R9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XHJcbmltcG9ydCB7U2V0dGluZ3NTdHJhcGl9IGZyb20gJy4uL3NoYXJlZC10eXBlcy9zZXR0aW5ncy1zdHJhcGknO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IEdSQVBIUUxfUVVFUlkgfSBmcm9tICcuLi9ncmFwaHFsL3F1ZXJpZXMnO1xyXG5pbXBvcnQgeyBQb3N0U3RyYXBpIH0gZnJvbSAnLi4vc2hhcmVkLXR5cGVzL3Bvc3Qtc3RyYXBpJztcclxuXHJcblxyXG5leHBvcnQgdHlwZSBMb2FkUG9zdHNWYXJpYWJsZXMgPSB7XHJcbiAgY2F0ZWdvcnlTbHVnPzogc3RyaW5nO1xyXG4gIHBvc3RTbHVnPzogc3RyaW5nO1xyXG4gIHBvc3RTZWFyY2g/OiBzdHJpbmc7XHJcbiAgYXV0aG9yU2x1Zz86IHN0cmluZztcclxuICB0YWdTbHVnPzogc3RyaW5nO1xyXG4gIHNvcnQ/OiBzdHJpbmc7XHJcbiAgc3RhcnQ/OiBudW1iZXI7XHJcbiAgbGltaXQ/OiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBTdHJhcGlQb3N0QW5kU2V0dGluZ3MgPSB7XHJcbiAgc2V0dGluZ3M6IFNldHRpbmdzU3RyYXBpO1xyXG4gIHBvc3RzOiBQb3N0U3RyYXBpW107XHJcbiAgdmFyaWFibGVzPzpMb2FkUG9zdHNWYXJpYWJsZXM7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2FkUG9zdHNWYXJpYWJsZXM6IExvYWRQb3N0c1ZhcmlhYmxlcyA9IHtcclxuICAgIHNvcnQ6ICdjcmVhdGVkQXQ6ZGVzYycsXHJcbiAgICBzdGFydDowLFxyXG4gICAgbGltaXQ6OSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRQb3N0cyA9IGFzeW5jIChcclxuICB2YXJpYWJsZXM6IExvYWRQb3N0c1ZhcmlhYmxlcyA9e30sXHJcbik6IFByb21pc2U8U3RyYXBpUG9zdEFuZFNldHRpbmdzPiA9PntcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0KGNvbmZpZy5ncmFwaGxVUkwsIEdSQVBIUUxfUVVFUlksIHtcclxuICAgICAgICAuLi5kZWZhdWx0TG9hZFBvc3RzVmFyaWFibGVzLFxyXG4gICAgICAgIC4uLnZhcmlhYmxlcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHsgSHRtbENvbXBvbmVudCB9IGZyb20gJy4uL0h0bWxDb250ZW50JztcblxuZXhwb3J0IHR5cGUgRm9vdGVyUHJvcHMgPSB7XG4gIGh0bWw6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoeyBodG1sIH06IEZvb3RlclByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZC5Db250YWluZXI+XG4gICAgICAgIDxIdG1sQ29tcG9uZW50IGh0bWw9e2h0bWx9IC8+XG4gICAgPC9TdHlsZWQuQ29udGFpbmVyPlxuICApO1xufTtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIGFzIFRleHRDb21wb25lbnQgfSBmcm9tICcuLi9UZXh0Q29tcG9uZW50L3N0eWxlcyc7XG5cblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5mb290ZXJgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wOiAwLjFyZW0gc29saWQgJHt0aGVtZS5jb2xvcnMubWVkaXVtR3JheX07XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cblxuICBgfVxuYDtcbiIsImltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgeyBLZXlib2FyZEFycm93VXAgfSBmcm9tICdAc3R5bGVkLWljb25zL21hdGVyaWFsLW91dGxpbmVkL0tleWJvYXJkQXJyb3dVcCc7XG5cbmV4cG9ydCBjb25zdCBHb1RvcCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkLkNvbnRhaW5lciBocmVmPVwiI1wiIGFyaWEtbGFiZWw9XCJHbyB0byB0b3BcIiB0aXRsZT1cIkdvIHRvIHRvcFwiPlxuICAgICAgPEtleWJvYXJkQXJyb3dVcCAvPlxuICAgIDwvU3R5bGVkLkNvbnRhaW5lcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5hYFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDRyZW07XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGJvdHRvbTogMnJlbTtcbiAgICByaWdodDogMnJlbTtcbiAgICB6LWluZGV4OiA2O1xuICBgfVxuYDtcbiIsIlxyXG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnLi4vSGVhZGluZyc7XHJcbmltcG9ydCB7TG9nb0xpbmt9IGZyb20gJy4uL0xvZ29MaW5rJztcclxuXHJcblxyXG5leHBvcnQgdHlwZSBIZWFkZXJQcm9wcyA9IHtcclxuICBibG9nTmFtZTpzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246c3RyaW5nO1xyXG4gIGxvZ28/OnN0cmluZztcclxuICBzaG93VGV4dD86Ym9vbGVhbjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoe1xyXG4gIGJsb2dOYW1lLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGxvZ28sXHJcbiAgc2hvd1RleHQgPSBmYWxzZSxcclxuXHJcbn06IEhlYWRlclByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZURlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24udG9VcHBlckNhc2UoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZC5XcmFwcGVyPlxyXG5cclxuICAgICAgICAgIHtzaG93VGV4dCAmJiAoXHJcbiAgICAgICAgICAgIDxTdHlsZWQuQ29udGVudD5cclxuICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPVwiaHVnZVwiIGFzPVwiaDJcIiBjb2xvckRhcms9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAge2Jsb2dOYW1lfVxyXG4gICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICA8ZGl2IGFsaWduPSdyaWdodCc+XHJcbiAgICAgICAgICAgICAgICB7dmFsdWVEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9TdHlsZWQuQ29udGVudD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9TdHlsZWQuV3JhcHBlcj5cclxuICAgICk7XHJcbiAgfTtcclxuIiwiaW1wb3J0IHtUaXRsZSBhcyBIZWFkaW5nU3R5bGVzfSBmcm9tICcuLi9IZWFkaW5nL3N0eWxlcyc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gICR7KHt0aGVtZX0pPT4gY3NzYFxyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MueGh1Z2V9O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAke3RoZW1lLnNpemVzLm1heH07XHJcbiAgICAgIGNvbG9yOiAke3RoZW1lLmZvbnQuc2l6ZXMuc21hbGx9O1xyXG4gICAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udC5zaXplcy5zbWFsbH07XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgICAgJHtIZWFkaW5nU3R5bGVzfXtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgJHt0aGVtZS5tZWRpYS5sdGVTbWFsbH0ge1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG5cclxuICAgICAgICAmID4gJCAke0hlYWRpbmdTdHlsZXN9e1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCBjYWxjKCR7dGhlbWUuc3BhY2luZ3Muc21hbGx9IC0xcmVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgYH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9O1xyXG4gICAgbWF4LXdpZHRoOiA0OHJlbTtcclxuXHJcbiAgICBAbWVkaWEgJHt0aGVtZS5tZWRpYS5sdGVTbWFsbH17XHJcbiAgICAgIG1hcmdpbi1sZWZ0OjA7XHJcbiAgICB9XHJcbiAgYH1cclxuYDtcclxuIiwiaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcblxuZXhwb3J0IHR5cGUgSGVhZGluZ1Byb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBjb2xvckRhcms/OiBib29sZWFuO1xuICBhcz86ICdoMScgfCAnaDInIHwgJ2gzJyB8ICdoNCcgfCAnaDUnIHwgJ2g2JztcbiAgc2l6ZT86ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdiaWcnIHwgJ2h1Z2UnO1xuICB1cHBlcmNhc2U/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSAoe1xuICBjaGlsZHJlbixcbiAgY29sb3JEYXJrID0gdHJ1ZSxcbiAgYXMgPSAnaDEnLFxuICBzaXplID0gJ2h1Z2UnLFxuICB1cHBlcmNhc2UgPSBmYWxzZSxcbn06IEhlYWRpbmdQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWQuVGl0bGVcbiAgICAgIGNvbG9yRGFyaz17Y29sb3JEYXJrfVxuICAgICAgYXM9e2FzfVxuICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgIHVwcGVyY2FzZT17dXBwZXJjYXNlfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0eWxlZC5UaXRsZT5cbiAgKTtcbn07XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcywgRGVmYXVsdFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgSGVhZGluZ1Byb3BzIH0gZnJvbSAnLic7XG5cbmNvbnN0IHRpdGxlU2l6ZSA9IHtcbiAgc21hbGw6ICh0aGVtZTogRGVmYXVsdFRoZW1lKSA9PiBjc3NgXG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnQuc2l6ZXMubWVkaXVtfTtcbiAgYCxcbiAgbWVkaXVtOiAodGhlbWU6IERlZmF1bHRUaGVtZSkgPT4gY3NzYFxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250LnNpemVzLmxhcmdlfTtcbiAgYCxcbiAgYmlnOiAodGhlbWU6IERlZmF1bHRUaGVtZSkgPT4gY3NzYFxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250LnNpemVzLnhsYXJnZX07XG4gIGAsXG4gIGh1Z2U6ICh0aGVtZTogRGVmYXVsdFRoZW1lKSA9PiBjc3NgXG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnQuc2l6ZXMueGh1Z2V9O1xuICAgICR7bWVkaWFGb250KHRoZW1lKX07XG4gIGAsXG59O1xuXG5jb25zdCBtZWRpYUZvbnQgPSAodGhlbWU6IERlZmF1bHRUaGVtZSkgPT4gY3NzYFxuICBAbWVkaWEgJHt0aGVtZS5tZWRpYS5sdGVNZWRpdW19IHtcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udC5zaXplcy54bGFyZ2V9O1xuICB9XG5gO1xuXG5jb25zdCB0aXRsZUNhc2UgPSAodXBwZXJjYXNlOiBib29sZWFuKSA9PiBjc3NgXG4gIHRleHQtdHJhbnNmb3JtOiAke3VwcGVyY2FzZSA/ICd1cHBlcmNhc2UnIDogJ25vbmUnfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMTxIZWFkaW5nUHJvcHM+YFxuICAkeyh7IHRoZW1lLCBjb2xvckRhcmssIHNpemUsIHVwcGVyY2FzZSB9KSA9PiBjc3NgXG4gICAgY29sb3I6ICR7Y29sb3JEYXJrID8gdGhlbWUuY29sb3JzLnByaW1hcnlDb2xvciA6IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgJHt0aXRsZVNpemVbc2l6ZV0odGhlbWUpfTtcbiAgICAke3RpdGxlQ2FzZSh1cHBlcmNhc2UpfTtcbiAgYH1cbmA7XG4iLCJpbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xuXG5leHBvcnQgdHlwZSBIdG1sQ29tcG9uZW50UHJvcHMgPSB7XG4gIGh0bWw6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCAgSHRtbENvbXBvbmVudCA9ICh7IGh0bWwgfTogSHRtbENvbXBvbmVudFByb3BzKSA9PiB7XG4gIHJldHVybiA8U3R5bGVkLkNvbnRhaW5lciBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX0gLz47XG59O1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udC5zaXplcy5zbWFsbH07XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmdzLm1lZGl1bX0gMDtcbiAgICB9XG5cbiAgICBhLFxuICAgIGE6dmlzaXRlZCxcbiAgICBhOmxpbmtlZCB7XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlc3NlLWluLW91dDtcbiAgICB9XG4gICAgYTpob3ZlciB7XG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcbiAgICB9XG5cbiAgICBwcmUge1xuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuZGFya2VyR3JheX07XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmdzLm1lZGl1bX07XG4gICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5ncy54bGFyZ2V9IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udC5zaXplcy5zbWFsbH07XG5cbiAgICB9XG5cbiAgICAuaW1hZ2Uge1xuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMubWVkaXVtR3JheX07XG4gICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5ncy54bGFyZ2V9MDtcblxuICAgIH1cblxuICAgIC5pbWFnZSBmaWdjYXB0aW9ue1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnQuc2l6ZXMuc21hbGx9O1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5ncy5zbWFsbH07XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgfVxuXG4gICAgLmltYWdlLXN0eWxlLXNpZGUge1xuICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZ3MubWVkaXVtfTtcbiAgICB9XG5cbiAgICBociB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgJHt0aGVtZS5jb2xvcnMubWVkaXVtR3JheX07XG4gICAgfVxuXG4gICAgdWwsb2wge1xuICAgICAgbWFyZ2luOiAkdGhlbWUuc3BhY2luZ3MueGxhcmdlKTtcbiAgICB9XG5cbiAgICAudGFibGUge1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgfVxuXG4gICAgdGFibGUgdGQsXG4gICAgdGFibGUgdGgge1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5ncy5zbWFsbH07XG4gICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAke3RoZW1lLmNvbG9ycy5tZWRpdW1HcmF5fTtcbiAgICB9XG5cbiAgICBAbWVkaWEgJHt0aGVtZS5tZWRpYS5sdGVNZWRpdW19e1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgLmltYWdlLXN0eWxlLXNpZGV7XG4gICAgICAgIG1heC13aWR0aDoxMDAlO1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgbWFyZ2luOjA7XG4gICAgICB9XG4gICAgfVxuICBgfVxuYDtcbiIsImltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnLi4vSGVhZGluZyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgdHlwZSBMb2dvTGlua1Byb3BzID0ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHNyY0ltZz86IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xuICBuZXdUYWI/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IExvZ29MaW5rID0gKHtcbiAgdGV4dCxcbiAgc3JjSW1nID0gJycsXG4gIGxpbmssXG4gIG5ld1RhYiA9IGZhbHNlLFxufTogTG9nb0xpbmtQcm9wcykgPT4ge1xuICBjb25zdCBuZXh0TGluayA9IGxpbmsubWF0Y2goL15cXC8vKSA/IHRydWUgOiBmYWxzZTtcbiAgY29uc3QgdGFyZ2V0ID0gbmV3VGFiID8gJ19ibGFuaycgOiAnX3NlbGYnO1xuXG4gIGlmIChuZXh0TGluaykge1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGluZyBzaXplPVwic21hbGxcIiB1cHBlcmNhc2U+XG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9IHBhc3NIcmVmPlxuICAgICAgICAgIDxTdHlsZWQuQ29udGFpbmVyIHRhcmdldD17dGFyZ2V0fT5cbiAgICAgICAgICAgIHshIXNyY0ltZyAmJiA8aW1nIHNyYz17c3JjSW1nfSBhbHQ9e3RleHR9IC8+fVxuICAgICAgICAgICAgeyFzcmNJbWcgJiYgdGV4dH1cbiAgICAgICAgICA8L1N0eWxlZC5Db250YWluZXI+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvSGVhZGluZz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SGVhZGluZyBzaXplPVwic21hbGxcIiB1cHBlcmNhc2U+XG4gICAgICA8U3R5bGVkLkNvbnRhaW5lciBocmVmPXtsaW5rfSB0YXJnZXQ9e3RhcmdldH0+XG4gICAgICAgIHshIXNyY0ltZyAmJiA8aW1nIHNyYz17c3JjSW1nfSBhbHQ9e3RleHR9IC8+fVxuICAgICAgICB7IXNyY0ltZyAmJiB0ZXh0fVxuICAgICAgPC9TdHlsZWQuQ29udGFpbmVyPlxuICAgIDwvSGVhZGluZz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5hYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBtYXJnaW4tbGVmdDoxMCU7XG5cbiAgPiBpbWcge1xuICAgIGhlaWdodDogMTVyZW07XG4gICAgd2lkdGg6IDE1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICB9XG5gO1xuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCB0eXBlIE1lbnVMaW5rUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGxpbms6IHN0cmluZztcbiAgbmV3VGFiPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBNZW51TGluayA9ICh7IGNoaWxkcmVuLCBsaW5rLCBuZXdUYWIgPSBmYWxzZSB9OiBNZW51TGlua1Byb3BzKSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IG5ld1RhYiA/ICdfYmxhbmsnIDogJ19zZWxmJztcbiAgY29uc3QgbmV4dExpbmsgPSBsaW5rLm1hdGNoKC9eXFwvLykgPyB0cnVlIDogZmFsc2U7XG5cbiAgaWYgKG5leHRMaW5rKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGhyZWY9e2xpbmt9IHBhc3NIcmVmPlxuICAgICAgICA8U3R5bGVkLkNvbnRhaW5lciB0YXJnZXQ9e3RhcmdldH0+e2NoaWxkcmVufTwvU3R5bGVkLkNvbnRhaW5lcj5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkLkNvbnRhaW5lciBocmVmPXtsaW5rfSB0YXJnZXQ9e3RhcmdldH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TdHlsZWQuQ29udGFpbmVyPlxuICApO1xufTtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmFgXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udC5zaXplcy5zbWFsbH07XG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5ncy5zbWFsbH07XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMC43NnJlbTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgaGVpZ2h0OiAwLjJyZW07XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgICY6aG92ZXI6OmFmdGVyIHtcbiAgICAgIGxlZnQ6IDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICBgfVxuYDtcbiIsImltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCB7TG9nb0xpbmt9IGZyb20gJy4uL0xvZ29MaW5rJztcclxuaW1wb3J0IHtNZW51TGlua30gZnJvbSAnLi4vTWVudUxpbmsnO1xyXG5pbXBvcnQgeyBNZW51IGFzIE1lbnVJY29uIH0gZnJvbSAnQHN0eWxlZC1pY29ucy9tYXRlcmlhbC1vdXRsaW5lZC9NZW51JztcclxuaW1wb3J0IHsgQ2xvc2UgYXMgQ2xvc2VJY29uIH0gZnJvbSAnQHN0eWxlZC1pY29ucy9tYXRlcmlhbC1vdXRsaW5lZC9DbG9zZSc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJy4uL0hlYWRpbmcnO1xyXG5cclxuZXhwb3J0IHR5cGUgTWVudVByb3BzTGlua3MgPXtcclxuICBpZDogc3RyaW5nO1xyXG4gIGxpbms6IHN0cmluZztcclxuICBuZXdUYWI6IGJvb2xlYW47XHJcbiAgdGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBNZW51UHJvcHMgPSB7XHJcbiAgbGlua3M6IE1lbnVQcm9wc0xpbmtzW107XHJcbiAgYmxvZ05hbWU6IFN0cmluZztcclxuICBsb2dvOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTWVudSA9ICh7IGxpbmtzPVtdLCBibG9nTmFtZSwgbG9nbyB9OiBNZW51UHJvcHMpID0+IHtcclxuICBjb25zdCBbbWVudVZpc2libGUsIHNldE1lbnVWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVPcGVuQ2xvc2VNZW51PSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRNZW51VmlzaWJsZSgodik9PiF2KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFN0eWxlZC5PcGVuQ2xvc2UgIG1lbnVWaXNpYmxlPXttZW51VmlzaWJsZX0gb25DbGljaz17aGFuZGxlT3BlbkNsb3NlTWVudX0gaHJlZj1cIiNcIiBhcmlhLWxhYmVsPVwiT3BlbiBvciBjbG9zZSBtZW51XCIgdGl0bGU9XCJPcGVuIG9yIGNsb3NlIG1lbnVcIj5cclxuXHJcbiAgICAgICAge21lbnVWaXNpYmxlICYmIDxDbG9zZUljb24gYXJpYS1sYWJlbD1cIkNsb3NlIG1lbnVcIiAvPn1cclxuICAgICAgICB7IW1lbnVWaXNpYmxlICYmIDxNZW51SWNvbiBhcmlhLWxhYmVsPVwiT3BlbiBtZW51XCIvPn1cclxuICAgICAgPC9TdHlsZWQuT3BlbkNsb3NlPlxyXG4gICAgICA8U3R5bGVkLldyYXBwZXIgbWVudVZpc2libGU9e21lbnVWaXNpYmxlfSBhcmlhLWhpZGRlbj17IW1lbnVWaXNpYmxlfT5cclxuICAgICAgICA8U3R5bGVkLk5hdj5cclxuICAgICAgICAgIDxTdHlsZWQuTG9nbz5cclxuICAgICAgICAgICAgPExvZ29MaW5rIGxpbms9XCIvXCIgdGV4dD17YmxvZ05hbWV9IHNyY0ltZz17bG9nb30vPlxyXG4gICAgICAgICAgPC9TdHlsZWQuTG9nbz5cclxuXHJcbiAgICAgICAgICA8SGVhZGluZyBzaXplPVwic21hbGxcIiBhcz1cImgyXCIgY29sb3JEYXJrPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICB7J01lbnUnfVxyXG4gICAgICAgICAgIDwvSGVhZGluZz5cclxuXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpbmtzLm1hcCgobGluaykgPT4gKFxyXG4gICAgICAgICAgICAgIDxNZW51TGluayBrZXk9e2xpbmsuaWR9IGxpbms9e2xpbmsubGlua30gbmV3VGFiPXtsaW5rLm5ld1RhYn0+XHJcbiAgICAgICAgICAgICAgICB7bGluay50ZXh0fVxyXG4gICAgICAgICAgICAgIDwvTWVudUxpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1N0eWxlZC5OYXY+XHJcbiAgICAgIDwvU3R5bGVkLldyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcywgRGVmYXVsdFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1RpdGxlIGFzIEhlYWRpbmdTdHlsZXN9IGZyb20gJy4uL0hlYWRpbmcvc3R5bGVzJztcclxuXHJcblxyXG50eXBlIE1lbnVCZWhhdmlvclByb3BzID0ge1xyXG4gIG1lbnVWaXNpYmxlOiBib29sZWFuO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlckNoYW5nZXIgPSAoXHJcbiAgbWVudVZpc2libGU6IE1lbnVCZWhhdmlvclByb3BzWydtZW51VmlzaWJsZSddLFxyXG4gIHRoZW1lOiBEZWZhdWx0VGhlbWUsXHJcbiAgKT0+IGNzc2BcclxuICAgIGxlZnQ6ICR7bWVudVZpc2libGUgPyAnMCc6Jy0zMHJlbSd9O1xyXG4gICAgb3ZlcmZsb3cteTogJHttZW51VmlzaWJsZT8gJ2F1dG8nOiAnaGlkZGVuJ307XHJcblxyXG4gICAgQG1lZGlhICR7dGhlbWUubWVkaWEubHRlTWVkaXVtfXtcclxuICAgICAgbGVmdDogJHttZW51VmlzaWJsZSA/ICcwJzogJy0zMnJlbSd9O1xyXG4gICAgfVxyXG4gIGA7XHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcblx0JHsoeyB0aGVtZSxtZW51VmlzaWJsZSB9KSA9PiBjc3NgXHJcbiAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fTtcclxuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzJyZW07XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAke3dyYXBwZXJDaGFuZ2VyKG1lbnVWaXNpYmxlLCB0aGVtZSl9XHJcblxyXG4gIGB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2ID0gc3R5bGVkLm5hdmBcclxuXHQkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAke0hlYWRpbmdTdHlsZXN9e1xyXG4gICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9O1xyXG4gICAgfVxyXG5cclxuICBgfVxyXG5gO1xyXG5cclxuY29uc3QgYnV0dG9uQ2hhbmdlciA9IChcclxuICBtZW51VmlzaWJsZTogTWVudUJlaGF2aW9yUHJvcHNbJ21lbnVWaXNpYmxlJ10sXHJcbnRoZW1lOkRlZmF1bHRUaGVtZSxcclxuKSA9PiBjc3NgXHJcbiAgbGVmdDogJHttZW51VmlzaWJsZSA/ICcyNnJlbScgOiAnMXJlbSd9O1xyXG4gIGNvbG9yOiAke21lbnVWaXNpYmxlID8gdGhlbWUuY29sb3JzLnNlY29uZGFyeSA6IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcblxyXG4gIEBtZWRpYSAke3RoZW1lLm1lZGlhLmx0ZU1lZGl1bX17XHJcbiAgICBsZWZ0OiAke21lbnVWaXNpYmxlID8gJzI2cmVtJyA6ICctMC41cmVtJ307XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxyXG5cdCR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgJHtIZWFkaW5nU3R5bGVzfXtcclxuICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOjA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MueHhsYXJnZX07XHJcblxyXG4gICAgICBpbWd7XHJcbiAgICAgICAgYm9yZGVyOjAuNXJlbSBzb2xpZCAke3RoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBPcGVuQ2xvc2UgPSBzdHlsZWQuYTxNZW51QmVoYXZpb3JQcm9wcz5gXHJcblx0JHsoeyB0aGVtZSwgbWVudVZpc2libGUgfSkgPT4gY3NzYFxyXG4gICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgdG9wOiAke3RoZW1lLnNwYWNpbmdzLm1lZGl1bX07XHJcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgaGVpZ2h0OjNyZW07XHJcbiAgICAgIGxlZnQ6MjZyZW07XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcclxuICAgICAgJHtidXR0b25DaGFuZ2VyKG1lbnVWaXNpYmxlLHRoZW1lKX1cclxuICBgfVxyXG5gO1xyXG4iLCJpbXBvcnQgc3R5bGVkLCB7Y3NzLERlZmF1bHRUaGVtZX0gICBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgdHlwZSBQb3N0Q29udGFpbmVyUHJvcHMgPSB7XHJcbiAgc2l6ZTogJ21heCcgfCAnY29udGVudCc7XHJcbn07XHJcblxyXG5jb25zdCBwb3N0Q29udGFpbmVyU3R5bGVzID0ge1xyXG4gIG1heDogKHRoZW1lOiBEZWZhdWx0VGhlbWUpID0+IGNzc2BcclxuICAgIG1heC13aWR0aDogJHt0aGVtZS5zaXplcy5tYXh9O1xyXG4gIGAsXHJcbiAgY29udGVudDogKHRoZW1lOiBEZWZhdWx0VGhlbWUpID0+IGNzc2BcclxuICAgIG1heC13aWR0aDogJHt0aGVtZS5zaXplcy5jb250ZW50fTtcclxuICBgLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBvc3RDb250YWluZXIgPSBzdHlsZWQuZGl2PFBvc3RDb250YWluZXJQcm9wcz5gXHJcbiR7KHsgdGhlbWUsIHNpemUgfSkgPT4gY3NzYFxyXG4gICB3aWR0aDogMTAwJTtcclxuICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgIHBhZGRpbmc6IDAgJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcbiAgJHtwb3N0Q29udGFpbmVyU3R5bGVzW3NpemVdKHRoZW1lKX1cclxuXHJcbiBgfVxyXG5gO1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHVybDogJ2h0dHBzOi8vc3RyYXBpLWxhbmRpbmctcGFnZXMtcHJvamVjdC0yLmhlcm9rdWFwcC5jb20nLFxuICBzaXRlTmFtZTogJ05hbmF2ZXJzbycsXG4gIGRlZmF1bHRTbHVnOiAnbGFuZGluZy1wYWdlJyxcbiAgZ3JhcGhsVVJMOidodHRwOi8vMTI3LjAuMC4xOjEzMzcvZ3JhcGhxbCcsXG59O1xuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBHUkFQSFFMX0ZSQUdNRU5UUyA9IGdxbGBcclxuICBmcmFnbWVudCBpbWFnZSBvbiBVcGxvYWRGaWxlIHtcclxuICAgIGlkXHJcbiAgICBhbHRlcm5hdGl2ZVRleHRcclxuICAgIHVybFxyXG4gIH1cclxuICBmcmFnbWVudCBjb3ZlciBvbiBQb3N0IHtcclxuICAgIGNvdmVyIHtcclxuICAgICAgLi4uaW1hZ2VcclxuICAgIH1cclxuICB9XHJcbiAgZnJhZ21lbnQgdGFnIG9uIFRhZyB7XHJcbiAgICBpZFxyXG4gICAgZGlzcGxheU5hbWVcclxuICAgIHNsdWdcclxuICB9XHJcbiAgZnJhZ21lbnQgYXV0aG9yIG9uIEF1dGhvciB7XHJcbiAgICBpZFxyXG4gICAgZGlzcGxheU5hbWVcclxuICAgIHNsdWdcclxuICB9XHJcbiAgZnJhZ21lbnQgY2F0ZWdvcnkgb24gQ2F0ZWdvcnkge1xyXG4gICAgaWRcclxuICAgIGRpc3BsYXlOYW1lXHJcbiAgICBzbHVnXHJcbiAgfVxyXG4gIGZyYWdtZW50IHRhZ3Mgb24gUG9zdCB7XHJcbiAgICB0YWdzIHtcclxuICAgICAgLi4udGFnXHJcbiAgICB9XHJcbiAgfVxyXG4gIGZyYWdtZW50IGF1dGhvclBvc3Qgb24gUG9zdCB7XHJcbiAgICBhdXRob3Ige1xyXG4gICAgICAuLi5hdXRob3JcclxuICAgIH1cclxuICB9XHJcbiAgZnJhZ21lbnQgY2F0ZWdvcmllcyBvbiBQb3N0IHtcclxuICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAuLi5jYXRlZ29yeVxyXG4gICAgfVxyXG4gIH1cclxuICBmcmFnbWVudCBtZW51TGluayBvbiBDb21wb25lbnRNZW51TWVudUxpbmsge1xyXG4gICAgaWRcclxuICAgIGxpbmtcclxuICAgIHRleHRcclxuICAgIG5ld1RhYlxyXG4gIH1cclxuICBmcmFnbWVudCBwb3N0IG9uIFBvc3Qge1xyXG4gICAgaWRcclxuICAgIHNsdWdcclxuICAgIHRpdGxlXHJcbiAgICBleGNlcnB0XHJcbiAgICBjb250ZW50XHJcbiAgICBjcmVhdGVkQXRcclxuICAgIGFsbG93Q29tbWVudHNcclxuICAgIC4uLmNvdmVyXHJcbiAgICAuLi5jYXRlZ29yaWVzXHJcbiAgICAuLi50YWdzXHJcbiAgICAuLi5hdXRob3JQb3N0XHJcbiAgfVxyXG4gIGZyYWdtZW50IHNldHRpbmdzIG9uIFNldHRpbmdzIHtcclxuICAgIGlkXHJcbiAgICBibG9nTmFtZVxyXG4gICAgZGVzY3JpcHRpb25cclxuICAgIGxvZ28ge1xyXG4gICAgICAuLi5pbWFnZVxyXG4gICAgfVxyXG4gICAgbWVudUxpbmsge1xyXG4gICAgICAuLi5tZW51TGlua1xyXG4gICAgfVxyXG4gICAgdGV4dFxyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcclxuaW1wb3J0IHsgR1JBUEhRTF9GUkFHTUVOVFMgfSBmcm9tICcuL2ZyYWdtZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgR1JBUEhRTF9RVUVSWSA9IGdxbGBcclxuICAke0dSQVBIUUxfRlJBR01FTlRTfVxyXG4gIHF1ZXJ5IEdFVF9QT1NUUyhcclxuICAgICRjYXRlZ29yeVNsdWc6IFN0cmluZ1xyXG4gICAgJHBvc3RTbHVnOiBTdHJpbmdcclxuICAgICRwb3N0U2VhcmNoOiBTdHJpbmdcclxuICAgICRhdXRob3JTbHVnOiBTdHJpbmdcclxuICAgICR0YWdTbHVnOiBTdHJpbmdcclxuICAgICRzb3J0OiBTdHJpbmcgPSBcImNyZWF0ZWRBdDpkZXNjXCJcclxuICAgICRzdGFydDogSW50ID0gMFxyXG4gICAgJGxpbWl0OiBJbnQgPSAxMFxyXG4gICkge1xyXG4gICAgc2V0dGluZyB7XHJcbiAgICAgIC4uLnNldHRpbmdzXHJcbiAgICB9XHJcbiAgICBwb3N0cyhcclxuICAgICAgc3RhcnQ6ICRzdGFydFxyXG4gICAgICBsaW1pdDogJGxpbWl0XHJcbiAgICAgIHNvcnQ6ICRzb3J0XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgc2x1ZzogJHBvc3RTbHVnXHJcbiAgICAgICAgdGl0bGVfY29udGFpbnM6ICRwb3N0U2VhcmNoXHJcbiAgICAgICAgY2F0ZWdvcmllczogeyBzbHVnOiAkY2F0ZWdvcnlTbHVnIH1cclxuICAgICAgICBhdXRob3I6IHsgc2x1ZzogJGF1dGhvclNsdWcgfVxyXG4gICAgICAgIHRhZ3M6IHsgc2x1ZzogJHRhZ1NsdWcgfVxyXG4gICAgICB9XHJcbiAgICApIHtcclxuICAgICAgLi4ucG9zdFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBHUkFQSFFMX1FVRVJZX0NBVEVHT1JZID0gZ3FsYFxyXG4gIHF1ZXJ5IEdFVF9DQVRFR09SSUVTe1xyXG4gICAgY2F0ZWdvcmllcyB7XHJcbiAgICAgIF9pZFxyXG4gICAgICBkaXNwbGF5TmFtZVxyXG4gICAgICBzbHVnXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQge3VzZUVmZmVjdCx1c2VTdGF0ZSxSZWFjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCB7IEdvVG9wIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Hb1RvcCc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWVudSc7XHJcbmltcG9ydCB7IFNldHRpbmdzU3RyYXBpIH0gZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVzL3NldHRpbmdzLXN0cmFwaSc7XHJcbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlcn0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5pbXBvcnQge2xvYWRDYXRlZ29yaWVzfSBmcm9tICcuLi8uLi9hcGkvbG9hZC1jYXRlZ29yaWVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCB0eXBlIEJhc2VUZW1wbGF0ZVByb3BzID0ge1xyXG4gIHNldHRpbmdzOiBTZXR0aW5nc1N0cmFwaTtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEJhc2VUZW1wbGF0ZSA9ICggeyBzZXR0aW5ncywgY2hpbGRyZW4gfSA6IEJhc2VUZW1wbGF0ZVByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3N0YXRlQ2F0ZWdvcmllcywgc2V0U3RhdGVDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBzaXRlID0gcm91dGVyLnBhdGhuYW1lO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBsb2FkQ2F0ZWdvcmllcygpLnRoZW4odmFsID0+IHtcclxuICAgICAgICBzZXRTdGF0ZUNhdGVnb3JpZXModmFsKTtcclxuICAgICAgfSk7XHJcbiAgfSxbXSk7XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWQuV3JhcHBlcj5cclxuICAgICAgPE1lbnUgbGlua3M9e3NldHRpbmdzLm1lbnVMaW5rfVxyXG4gICAgICAgICAgYmxvZ05hbWU9e3NldHRpbmdzLmJsb2dOYW1lfVxyXG4gICAgICAgICAgbG9nbz17c2V0dGluZ3MubG9nb1swXS51cmx9XHJcbiAgICAgIC8+XHJcbiAgICAgPFN0eWxlZC5IZWFkZXJDb250YWluZXI+XHJcbiAgICAgICAgPEhlYWRlclxyXG4gICAgICAgIGJsb2dOYW1lID0ge3NldHRpbmdzLmJsb2dOYW1lfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtzZXR0aW5ncy5kZXNjcmlwdGlvbn1cclxuICAgICAgICBsb2dvID17c2V0dGluZ3MubG9nb1swXS51cmx9XHJcbiAgICAgICAgc2hvd1RleHQ9e3RydWV9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPFN0eWxlZC5NZW51U2VhcmNoPlxyXG4gICAgICAgICAgPFN0eWxlZC5TZWFyY2hDb250YWluZXI+XHJcbiAgICAgICAgICAgICAge3N0YXRlQ2F0ZWdvcmllcy5sZW5ndGg+IDAgJiYgc3RhdGVDYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgYXJ0aWNsZS1tZXRhLWNhdC0ke2NhdGVnb3J5Ll9pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17e3BhdGhuYW1lOiBcIi9jYXRlZ29yeVwiLCBxdWVyeTogeyBzbHVnOiBjYXRlZ29yeS5zbHVnfX19IGFzPXtgL2NhdGVnb3J5LyR7Y2F0ZWdvcnkuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkxpbmtNZW51Q2F0ZWdvcnk+IHtjYXRlZ29yeS5kaXNwbGF5TmFtZX0gPC9TdHlsZWQuTGlua01lbnVDYXRlZ29yeT5cclxuICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9zZWFyY2gvXCIgbWV0aG9kPVwiR0VUXCI+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkLlNlYXJjaElucHV0IHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIkJ1c2NhciBwb3IgcG9zdHMuLi5cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicVwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cm91dGVyLnF1ZXJ5LnF9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICA8L1N0eWxlZC5TZWFyY2hDb250YWluZXI+XHJcbiAgICAgICAgPC9TdHlsZWQuTWVudVNlYXJjaD5cclxuICAgICA8L1N0eWxlZC5IZWFkZXJDb250YWluZXI+XHJcblxyXG4gICAgIDxTdHlsZWQuQ29udGVudENvbnRhaW5lcj5cclxuXHJcbiAgICAge2NoaWxkcmVufSA8L1N0eWxlZC5Db250ZW50Q29udGFpbmVyPlxyXG5cclxuICAgICA8U3R5bGVkLkZvb3RlckNvbnRhaW5lcj5cclxuICAgICAgICA8Rm9vdGVyIGh0bWw9e3NldHRpbmdzLnRleHR9Lz5cclxuICAgICA8L1N0eWxlZC5Gb290ZXJDb250YWluZXI+XHJcblxyXG4gICAgPEdvVG9wIC8+XHJcbiAgICA8L1N0eWxlZC5XcmFwcGVyPlxyXG5cclxuICApO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBgXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXHJcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfTtcclxuICBgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4keyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIG1heC13aWR0aDoxMjByZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5ncy54aHVnZX07XHJcbiAgYH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4keyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIG1heC13aWR0aDoxMjByZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcbiAgYH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDoxMjByZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBNZW51U2VhcmNoID0gc3R5bGVkLmRpdmBcclxuICBmbG9hdDogbGVmdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICB3aWR0aDogMjBlbTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgQG1lZGlhICR7dGhlbWUubWVkaWEubHRlTWVkaXVtfXtcclxuICAgICAgLmlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgfVxyXG5cclxufWBcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rTWVudUNhdGVnb3J5ID0gc3R5bGVkLmFgXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250LnNpemVzLnNtYWxsfTtcclxuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZ3Muc21hbGx9O1xyXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwLjc2cmVtO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDAuMnJlbTtcclxuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgbGVmdDogMjUlO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIGB9XHJcbmA7XHJcbiIsImltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCB7U2V0dGluZ3NTdHJhcGkgfSBmcm9tICcuLi8uLi9zaGFyZWQtdHlwZXMvc2V0dGluZ3Mtc3RyYXBpJztcclxuaW1wb3J0IHtCYXNlVGVtcGxhdGUgfSBmcm9tICcuLi9CYXNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IEh0bWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0h0bWxDb250ZW50JztcclxuaW1wb3J0IHsgUG9zdENvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdENvbnRhaW5lcic7XHJcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRpbmcnO1xyXG5cclxuXHJcbmltcG9ydCAqIGFzIE1vY2sgZnJvbSAnLi9tb2NrJztcclxuXHJcbmV4cG9ydCB0eXBlIFNvYnJlTWltVGVtcGxhdGVQcm9wcyA9IHtcclxuICBzZXR0aW5nczogU2V0dGluZ3NTdHJhcGk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU29icmVNaW1UZW1wbGF0ZSA9ICh7IHNldHRpbmdzIH06IFBvc3RUZW1wbGF0ZVByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBoYW5kbGVCYWNrID0gYXN5bmMoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJNb2NrXCIpO1xyXG4gIGNvbnNvbGUubG9nKE1vY2suZGVmYXVsdCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QmFzZVRlbXBsYXRlIHNldHRpbmdzPXtzZXR0aW5nc30+XHJcbiAgICAgIDxTdHlsZWQuV3JhcHBlcj5cclxuICAgICAgICA8UG9zdENvbnRhaW5lciBzaXplPVwibWF4XCI+XHJcbiAgICAgICAgICA8SGVhZGluZyBzaXplPVwiYmlnXCI+IHtNb2NrLmRlZmF1bHQudGl0bGV9IDwvSGVhZGluZz5cclxuICAgICAgICA8L1Bvc3RDb250YWluZXI+XHJcbiAgICAgICAgPFBvc3RDb250YWluZXIgc2l6ZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgIDxIdG1sQ29tcG9uZW50IGh0bWw9e01vY2suZGVmYXVsdC5jb250ZW50fSAvPlxyXG4gICAgICAgIDwvUG9zdENvbnRhaW5lcj5cclxuXHJcbiAgICA8L1N0eWxlZC5XcmFwcGVyPlxyXG5cclxuXHJcbiAgICAgIDxTdHlsZWQuQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICAgIDxTdHlsZWQuQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJhY2t9PlxyXG4gICAgICAgICAgeydWb2x0YXInfVxyXG4gICAgICAgIDwvU3R5bGVkLkJ1dHRvbj5cclxuICAgICAgPC9TdHlsZWQuQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgPC9CYXNlVGVtcGxhdGU+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHRcclxuICAgIHtcclxuXHJcbiAgICAgIHRpdGxlOiAnU29icmUgTWltJyxcclxuICAgICAgY29udGVudDogJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIDxicj48YnI+IExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeXMgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLidcclxuICAgIH0gYXMgQWJvdXRNZTtcclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7VGl0bGUgYXMgSGVhZGluZ1N0eWxlc30gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkaW5nL3N0eWxlcydcclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdCR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MueGxhcmdlfTtcclxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MueGxhcmdlfTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAke3RoZW1lLmNvbG9ycy5tZWRpdW1HcmF5fTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgJHtIZWFkaW5nU3R5bGVzfXtcclxuICAgICAgbWFyZ2luOjVyZW07XHJcblxyXG5cdFx0XHRwYWRkaW5nLXRvcDogJHt0aGVtZS5zcGFjaW5ncy54bGFyZ2V9O1xyXG5cdFx0XHRtYXJnaW4tdG9wOiR7dGhlbWUuc3BhY2luZ3MueHh4aHVnZX07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MubWVkaXVtfTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gIGB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIHBhZGRpbmc6IDAgJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcbiAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5ncy5zbWFsbH0gJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuZGFya2VyR3JheX07XHJcbiAgICB9XHJcbiAgYH1cclxuYDtcclxuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==