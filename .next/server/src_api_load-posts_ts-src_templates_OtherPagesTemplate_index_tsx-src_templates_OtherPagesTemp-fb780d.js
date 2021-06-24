exports.id = "src_api_load-posts_ts-src_templates_OtherPagesTemplate_index_tsx-src_templates_OtherPagesTemp-fb780d";
exports.ids = ["src_api_load-posts_ts-src_templates_OtherPagesTemplate_index_tsx-src_templates_OtherPagesTemp-fb780d"];
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

/***/ "./src/templates/OtherPagesTemplate/index.tsx":
/*!****************************************************!*\
  !*** ./src/templates/OtherPagesTemplate/index.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherPagesTemplate": function() { return /* binding */ OtherPagesTemplate; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/templates/OtherPagesTemplate/styles.ts");
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Base */ "./src/templates/Base/index.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_HtmlContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/HtmlContent */ "./src/components/HtmlContent/index.tsx");
/* harmony import */ var _components_PostContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PostContainer */ "./src/components/PostContainer/index.ts");
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Heading */ "./src/components/Heading/index.tsx");

var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\templates\\OtherPagesTemplate\\index.tsx";






const OtherPagesTemplate = ({
  title,
  content,
  settings
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const handleBack = async () => {
    router.push("/");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Base__WEBPACK_IMPORTED_MODULE_2__.BaseTemplate, {
    settings: settings,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostContainer__WEBPACK_IMPORTED_MODULE_5__.PostContainer, {
        size: "max",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Heading__WEBPACK_IMPORTED_MODULE_6__.Heading, {
          size: "big",
          children: [" ", title, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostContainer__WEBPACK_IMPORTED_MODULE_5__.PostContainer, {
        size: "content",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HtmlContent__WEBPACK_IMPORTED_MODULE_4__.HtmlComponent, {
          html: content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.ButtonContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: handleBack,
        children: 'Voltar'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/OtherPagesTemplate/mock.ts":
/*!**************************************************!*\
  !*** ./src/templates/OtherPagesTemplate/mock.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  about: {
    title: 'Sobre Mim',
    content: '<p>Me chamo Nathana.&nbsp;</p> <p>Sou uma pessoa curiosa e que adora novas ideias. Ao mesmo tempo, me preocupo muito com pessoas. Acredito que todo mundo tem sua forma de fazer a diferen&ccedil;a na vida das pessoas, ent&atilde;o com meus projetos tento fazer o m&aacute;ximo disso.</p> <p>Embora boa parte dos meus projetos est&atilde;o relacionados com escrever, a minha forma&ccedil;&atilde;o &eacute; Ci&ecirc;ncias da Computa&ccedil;&atilde;o. N&atilde;o me importo em me aventurar em &aacute;rea diferente dessa, mas tenho uma paix&atilde;o por n&uacute;meros e programar tamb&eacute;m.</p> <p>Fiz especializa&ccedil;&atilde;o e mestrado na &aacute;rea. Tudo isso em universidade p&uacute;blica, o que significa que eu sempre me esforcei muito para alcan&ccedil;ar os meus sonhos.&nbsp;</p> <p><br></p> <p><strong>Blog da Nana</strong></p> <p>Espero que esse pequeno blog possa ajudar outras pessoas encontrar conte&uacute;do que agregue algo a elas. Pensei em focar s&oacute; em programa&ccedil;&atilde;o, mas da&iacute; pensei um pouco mais e resolvi focar em tudo que achar no caminho que eu percorrer. Afinal a vida &eacute; feito de tantas coisas, porque limitar quando podemos expandir?</p> <p><br></p> <p><strong>Contato</strong></p> <p>Caso precise entrar em contato, me mande um e-mail: nathanafacion@gmail.com</p> <p><br></p>'
  },
  contact: {
    title: 'Contato',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br><br> Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  garotaNoControle: {
    title: 'Projeto: Garota no Controle',
    content: '<p style="text-align: justify;">O site <a href="https://garotanocontrole.com.br/">Garota no Controle</a> &eacute; um site independente que surgiu em 2020 com o objetivo de apresentar a vis&atilde;o de uma garota gamer sobre o mundo dos jogos.</p> <p style="text-align: justify;">A maioria do p&uacute;blico gamer hoje &eacute; constitu&iacute;do de homens, ent&atilde;o, embora o site tenha sido feito para todas as pessoas, um dos principais objetivos &eacute; fazer com que mais mulheres possam vir a gostar do assunto, ou at&eacute; mesmo que tenham mais coragem para expor suas opini&otilde;es sobre.</p> <p style="text-align: justify;">Com apenas um ano, nossa equipe j&aacute; tem14 pessoas e recebemos apoio de empresas grandes e pequenas para conseguir jogos para an&aacute;lises e assim manter o site.</p> <p style="text-align: justify;">Voc&ecirc; encontrar&aacute; os seguintes conte&uacute;dos no site:</p> <ul> <li style="text-align:justify;">An&aacute;lises: para ajudar o leitor a conhecer novos jogos, ou saber se um jogo pode ser do seu agrado, ou n&atilde;o. E para ajudar principalmente na visibilidade de jogos indies.</li> <li style="text-align: justify;">Listas: uma an&aacute;lise sobre algum assunto, que gera uma lista com o objetivo de classificar baseado em algum crit&eacute;rio. Com isso, quero incentivar o leitor a pensar qual a classifica&ccedil;&atilde;o que ele mesmo faria e gerar uma reflex&atilde;o, ou discuss&atilde;o sobre o assunto</li> <li style="text-align: justify;">Curiosidades: s&atilde;o escolhidos assuntos incomuns para serem abordados e instigar a curiosidade do leitor. Em muitos casos, os artigos selecionados s&atilde;o cient&iacute;ficos, para o leitor perceber que a import&acirc;ncia dos jogos est&atilde;o em todos os lugares.</li> <li style="text-align: justify;">Entrevista: s&atilde;o feitas com profissionais da &aacute;rea de jogos para divulgar trabalhos menos conhecidos. &Eacute; uma oportunidade de fazer os usu&aacute;rios se interessarem por jogos de menor or&ccedil;amento. Esse site quer apoiar os jogos indies, principalmente os brasileiros.</li> </ul>'
  },
  vimLiVenci: {
    title: 'Projeto: Vim Li Venci',
    content: '<p style="text-align: justify;">Este projeto ainda est&aacute; em desenvolvimento, ou seja, est&aacute; nas fases onde estou determinando quais objetivos quero alcan&ccedil;ar com ele.</p> <p style="text-align: justify;">Como sempre gostei de ler, queria conseguir uma forma de ajudar outras pessoas a terem o gosto pela leitura e mais acesso a livros.</p> <p style="text-align: justify;">Para isso, o que tenho de ideias iniciais seria:</p> <ul> <li style="text-align: justify;">Entrevistas com autores nacionais para entender como funciona o mercado atual e ajudar novos escritores a alcan&ccedil;ar seus sonhos.</li>  <li style="text-align: justify;">Divulga&ccedil;&atilde;o de v&aacute;rios tipos de livros, inclusive os independentes.</li> <li style="text-align: justify;">Trazer as principais novidades liter&aacute;rias, inclusive independentes.</li>  <li style="text-align: justify;">Resenhas de livros lidos pelos integrantes.</li>  <li style="text-align: justify;">Arrecadar livros para distribuir entre comunidade de baixa renda. Caso eu receba livros de editoras para divulgar e fazer resenhas, me comprometo a doa-los ap&oacute;s a leitura e divulga&ccedil;&atilde;o.</li> </ul>'
  }
});

/***/ }),

/***/ "./src/templates/OtherPagesTemplate/styles.ts":
/*!****************************************************!*\
  !*** ./src/templates/OtherPagesTemplate/styles.ts ***!
  \****************************************************/
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
  componentId: "sc-1s5ciit-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding-bottom:", ";margin-bottom:", ";border-bottom:0.1rem solid ", ";justify-content:center;", "{margin:5rem;padding-top:", ";margin-top:", ";margin-bottom:", ";justify-content:center;}a{color:", ";}"], theme.spacings.xlarge, theme.spacings.xlarge, theme.colors.mediumGray, _components_Heading_styles__WEBPACK_IMPORTED_MODULE_1__.Title, theme.spacings.xlarge, theme.spacings.xxxhuge, theme.spacings.medium, theme.colors.darkerGray));
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__ButtonContainer",
  componentId: "sc-1s5ciit-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding:0 ", ";margin:", " 0;display:flex;justify-content:center;"], theme.spacings.large, theme.spacings.large));
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "styles__Button",
  componentId: "sc-1s5ciit-2"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9hcGkvbG9hZC1jYXRlZ29yaWVzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2FwaS9sb2FkLXBvc3RzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Hb1RvcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Hb1RvcC9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0hlYWRpbmcvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvSGVhZGluZy9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9IdG1sQ29udGVudC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9IdG1sQ29udGVudC9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Mb2dvTGluay9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Mb2dvTGluay9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9NZW51TGluay9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9NZW51TGluay9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9NZW51L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL01lbnUvc3R5bGVzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvUG9zdENvbnRhaW5lci9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb25maWcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvZ3JhcGhxbC9mcmFnbWVudHMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvZ3JhcGhxbC9xdWVyaWVzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3RlbXBsYXRlcy9CYXNlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy90ZW1wbGF0ZXMvQmFzZS9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdGVtcGxhdGVzL090aGVyUGFnZXNUZW1wbGF0ZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdGVtcGxhdGVzL090aGVyUGFnZXNUZW1wbGF0ZS9tb2NrLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3RlbXBsYXRlcy9PdGhlclBhZ2VzVGVtcGxhdGUvc3R5bGVzLnRzIiwid2VicGFjazovL2Zyb250ZW5kL2lnbm9yZWR8QzpcXFVzZXJzXFxBY2VyXFxEZXNrdG9wXFxSZWFjdFByb2pldG9zXFxuZXdCbG9nXFxQZXF1ZW5vLUJsb2ctUmVhY3RcXGZyb250ZW5kXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsibG9hZENhdGVnb3JpZXMiLCJkYXRhIiwicmVxdWVzdCIsImNvbmZpZyIsIkdSQVBIUUxfUVVFUllfQ0FURUdPUlkiLCJjb25zb2xlIiwibG9nIiwiY2F0ZWdvcmllcyIsImRlZmF1bHRMb2FkUG9zdHNWYXJpYWJsZXMiLCJzb3J0Iiwic3RhcnQiLCJsaW1pdCIsImxvYWRQb3N0cyIsInZhcmlhYmxlcyIsIkdSQVBIUUxfUVVFUlkiLCJGb290ZXIiLCJodG1sIiwiQ29udGFpbmVyIiwic3R5bGVkIiwidGhlbWUiLCJjc3MiLCJjb2xvcnMiLCJtZWRpdW1HcmF5IiwiR29Ub3AiLCJwcmltYXJ5Iiwid2hpdGUiLCJIZWFkZXIiLCJibG9nTmFtZSIsImRlc2NyaXB0aW9uIiwibG9nbyIsInNob3dUZXh0IiwidmFsdWVEZXNjcmlwdGlvbiIsInRvVXBwZXJDYXNlIiwiV3JhcHBlciIsInNwYWNpbmdzIiwieGh1Z2UiLCJzaXplcyIsIm1heCIsImZvbnQiLCJzbWFsbCIsIkhlYWRpbmdTdHlsZXMiLCJtZWRpYSIsImx0ZVNtYWxsIiwiQ29udGVudCIsImxhcmdlIiwiSGVhZGluZyIsImNoaWxkcmVuIiwiY29sb3JEYXJrIiwiYXMiLCJzaXplIiwidXBwZXJjYXNlIiwidGl0bGVTaXplIiwibWVkaXVtIiwiYmlnIiwieGxhcmdlIiwiaHVnZSIsIm1lZGlhRm9udCIsImx0ZU1lZGl1bSIsInRpdGxlQ2FzZSIsIlRpdGxlIiwicHJpbWFyeUNvbG9yIiwiSHRtbENvbXBvbmVudCIsIl9faHRtbCIsInNlY29uZGFyeSIsImRhcmtlckdyYXkiLCJMb2dvTGluayIsInRleHQiLCJzcmNJbWciLCJsaW5rIiwibmV3VGFiIiwibmV4dExpbmsiLCJtYXRjaCIsInRhcmdldCIsIk1lbnVMaW5rIiwiTWVudSIsImxpbmtzIiwibWVudVZpc2libGUiLCJzZXRNZW51VmlzaWJsZSIsInVzZVN0YXRlIiwiaGFuZGxlT3BlbkNsb3NlTWVudSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2Iiwicm91dGVyIiwidXNlUm91dGVyIiwibWFwIiwiaWQiLCJ3cmFwcGVyQ2hhbmdlciIsIk5hdiIsImJ1dHRvbkNoYW5nZXIiLCJMb2dvIiwieHhsYXJnZSIsIk9wZW5DbG9zZSIsInBvc3RDb250YWluZXJTdHlsZXMiLCJjb250ZW50IiwiUG9zdENvbnRhaW5lciIsInVybCIsInNpdGVOYW1lIiwiZGVmYXVsdFNsdWciLCJncmFwaGxVUkwiLCJHUkFQSFFMX0ZSQUdNRU5UUyIsImdxbCIsIkJhc2VUZW1wbGF0ZSIsInNldHRpbmdzIiwic3RhdGVDYXRlZ29yaWVzIiwic2V0U3RhdGVDYXRlZ29yaWVzIiwic2l0ZSIsInBhdGhuYW1lIiwidXNlRWZmZWN0IiwidGhlbiIsInZhbCIsIm1lbnVMaW5rIiwibGVuZ3RoIiwiY2F0ZWdvcnkiLCJxdWVyeSIsInNsdWciLCJkaXNwbGF5TmFtZSIsIl9pZCIsInEiLCJIZWFkZXJDb250YWluZXIiLCJDb250ZW50Q29udGFpbmVyIiwiRm9vdGVyQ29udGFpbmVyIiwiU2VhcmNoQ29udGFpbmVyIiwiTWVudVNlYXJjaCIsIlNlYXJjaElucHV0IiwiTGlua01lbnVDYXRlZ29yeSIsIk90aGVyUGFnZXNUZW1wbGF0ZSIsInRpdGxlIiwiaGFuZGxlQmFjayIsInB1c2giLCJhYm91dCIsImNvbnRhY3QiLCJnYXJvdGFOb0NvbnRyb2xlIiwidmltTGlWZW5jaSIsInh4eGh1Z2UiLCJCdXR0b25Db250YWluZXIiLCJCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTTyxNQUFNQSxjQUFjLEdBQUcsWUFBMkM7QUFFdkUsUUFBTUMsSUFBSSxHQUFHLE1BQU1DLHdEQUFPLENBQUNDLHNEQUFELEVBQW1CQyxvRUFBbkIsQ0FBMUI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQUksQ0FBQ00sVUFBakI7QUFDQSxTQUFPTixJQUFJLENBQUNNLFVBQVo7QUFDRCxDQUxNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWFA7QUFFQTtBQUNBO0FBc0JPLE1BQU1DLHlCQUE2QyxHQUFHO0FBQ3pEQyxNQUFJLEVBQUUsZ0JBRG1EO0FBRXpEQyxPQUFLLEVBQUMsQ0FGbUQ7QUFHekRDLE9BQUssRUFBQztBQUhtRCxDQUF0RDtBQU1BLE1BQU1DLFNBQVMsR0FBRyxPQUN2QkMsU0FBNkIsR0FBRSxFQURSLEtBRVc7QUFDaEMsUUFBTVosSUFBSSxHQUFHLE1BQU1DLHdEQUFPLENBQUNDLHNEQUFELEVBQW1CVywyREFBbkIsa0NBQ25CTix5QkFEbUIsR0FFbkJLLFNBRm1CLEVBQTFCO0FBS0EsU0FBT1osSUFBUDtBQUNILENBVE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JQO0FBQ0E7QUFNTyxNQUFNYyxNQUFNLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBMkI7QUFDL0Msc0JBQ0UsOERBQUMsOENBQUQ7QUFBQSwyQkFDSSw4REFBQyx1REFBRDtBQUFlLFVBQUksRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBTk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQUDtBQUlPLE1BQU1DLFNBQVMsR0FBR0MsMEVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDbEIsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUMsc0RBQWYsNEZBRTJCRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsVUFGeEMsQ0FEa0IsQ0FBZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSlA7QUFDQTtBQUVPLE1BQU1DLEtBQUssR0FBRyxNQUFNO0FBQ3pCLHNCQUNFLDhEQUFDLDhDQUFEO0FBQWtCLFFBQUksRUFBQyxHQUF2QjtBQUEyQixrQkFBVyxXQUF0QztBQUFrRCxTQUFLLEVBQUMsV0FBeEQ7QUFBQSwyQkFDRSw4REFBQyw0RkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FOTSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBRU8sTUFBTU4sU0FBUyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNsQixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQyxzREFBZixnS0FFY0QsS0FBSyxDQUFDRSxNQUFOLENBQWFHLE9BRjNCLEVBR1NMLEtBQUssQ0FBQ0UsTUFBTixDQUFhSSxLQUh0QixDQURrQixDQUFmLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RQO0FBQ0E7QUFXTyxNQUFNQyxNQUFNLEdBQUcsQ0FBQztBQUNyQkMsVUFEcUI7QUFFckJDLGFBRnFCO0FBR3JCQyxNQUhxQjtBQUlyQkMsVUFBUSxHQUFHO0FBSlUsQ0FBRCxLQU1IO0FBQ2YsUUFBTUMsZ0JBQWdCLEdBQUdILFdBQVcsQ0FBQ0ksV0FBWixFQUF6QjtBQUNBLHNCQUNJLDhEQUFDLDRDQUFEO0FBQUEsY0FFR0YsUUFBUSxpQkFDUCw4REFBQyw0Q0FBRDtBQUFBLDhCQUNFLDhEQUFDLDZDQUFEO0FBQVMsWUFBSSxFQUFDLE1BQWQ7QUFBcUIsVUFBRSxFQUFDLElBQXhCO0FBQTZCLGlCQUFTLEVBQUUsSUFBeEM7QUFBQSxrQkFDR0g7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBSyxhQUFLLEVBQUMsT0FBWDtBQUFBLGtCQUNHSTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBZUQsQ0F2QkksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JQO0FBQ0E7QUFFTyxNQUFNRSxPQUFPLEdBQUdmLDBFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ2hCLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQVlDLHNEQUFaLHFRQUlvQkQsS0FBSyxDQUFDZSxRQUFOLENBQWVDLEtBSm5DLEVBTWVoQixLQUFLLENBQUNpQixLQUFOLENBQVlDLEdBTjNCLEVBT1dsQixLQUFLLENBQUNtQixJQUFOLENBQVdGLEtBQVgsQ0FBaUJHLEtBUDVCLEVBUWVwQixLQUFLLENBQUNtQixJQUFOLENBQVdGLEtBQVgsQ0FBaUJHLEtBUmhDLEVBV0lDLGtEQVhKLEVBZ0JXckIsS0FBSyxDQUFDc0IsS0FBTixDQUFZQyxRQWhCdkIsRUFvQllGLGtEQXBCWixFQXFCMkJyQixLQUFLLENBQUNlLFFBQU4sQ0FBZUssS0FyQjFDLENBRGdCLENBQWI7QUE2QkEsTUFBTUksT0FBTyxHQUFHekIsdUVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDaEIsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUMsc0RBQWYsc0dBR2VELEtBQUssQ0FBQ2UsUUFBTixDQUFlVSxLQUg5QixFQU1TekIsS0FBSyxDQUFDc0IsS0FBTixDQUFZQyxRQU5yQixDQURnQixDQUFiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENQO0FBVU8sTUFBTUcsT0FBTyxHQUFHLENBQUM7QUFDdEJDLFVBRHNCO0FBRXRCQyxXQUFTLEdBQUcsSUFGVTtBQUd0QkMsSUFBRSxHQUFHLElBSGlCO0FBSXRCQyxNQUFJLEdBQUcsTUFKZTtBQUt0QkMsV0FBUyxHQUFHO0FBTFUsQ0FBRCxLQU1IO0FBQ2xCLHNCQUNFLDhEQUFDLDBDQUFEO0FBQ0UsYUFBUyxFQUFFSCxTQURiO0FBRUUsTUFBRSxFQUFFQyxFQUZOO0FBR0UsUUFBSSxFQUFFQyxJQUhSO0FBSUUsYUFBUyxFQUFFQyxTQUpiO0FBQUEsY0FNR0o7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFVRCxDQWpCTSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZQO0FBR0EsTUFBTUssU0FBUyxHQUFHO0FBQ2hCWixPQUFLLEVBQUdwQixLQUFELElBQXlCQyxzREFBekIsc0JBQ1FELEtBQUssQ0FBQ21CLElBQU4sQ0FBV0YsS0FBWCxDQUFpQmdCLE1BRHpCLENBRFM7QUFJaEJBLFFBQU0sRUFBR2pDLEtBQUQsSUFBeUJDLHNEQUF6QixzQkFDT0QsS0FBSyxDQUFDbUIsSUFBTixDQUFXRixLQUFYLENBQWlCUSxLQUR4QixDQUpRO0FBT2hCUyxLQUFHLEVBQUdsQyxLQUFELElBQXlCQyxzREFBekIsc0JBQ1VELEtBQUssQ0FBQ21CLElBQU4sQ0FBV0YsS0FBWCxDQUFpQmtCLE1BRDNCLENBUFc7QUFVaEJDLE1BQUksRUFBR3BDLEtBQUQsSUFBeUJDLHNEQUF6QiwyQkFDU0QsS0FBSyxDQUFDbUIsSUFBTixDQUFXRixLQUFYLENBQWlCRCxLQUQxQixFQUVGcUIsU0FBUyxDQUFDckMsS0FBRCxDQUZQO0FBVlUsQ0FBbEI7O0FBZ0JBLE1BQU1xQyxTQUFTLEdBQUlyQyxLQUFELElBQXlCQyxzREFBekIsbUNBQ1BELEtBQUssQ0FBQ3NCLEtBQU4sQ0FBWWdCLFNBREwsRUFFRHRDLEtBQUssQ0FBQ21CLElBQU4sQ0FBV0YsS0FBWCxDQUFpQmtCLE1BRmhCLENBQWxCOztBQU1BLE1BQU1JLFNBQVMsR0FBSVIsU0FBRCxJQUF3QjlCLHNEQUF4QiwyQkFDRThCLFNBQVMsR0FBRyxXQUFILEdBQWlCLE1BRDVCLENBQWxCOztBQUlPLE1BQU1TLEtBQUssR0FBR3pDLHNFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ2QsQ0FBQztBQUFFQyxPQUFGO0FBQVM0QixXQUFUO0FBQW9CRSxNQUFwQjtBQUEwQkM7QUFBMUIsQ0FBRCxLQUEyQzlCLHNEQUEzQyw0QkFDUzJCLFNBQVMsR0FBRzVCLEtBQUssQ0FBQ0UsTUFBTixDQUFhdUMsWUFBaEIsR0FBK0J6QyxLQUFLLENBQUNFLE1BQU4sQ0FBYUksS0FEOUQsRUFFRTBCLFNBQVMsQ0FBQ0YsSUFBRCxDQUFULENBQWdCOUIsS0FBaEIsQ0FGRixFQUdFdUMsU0FBUyxDQUFDUixTQUFELENBSFgsQ0FEYyxDQUFYLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JQO0FBTU8sTUFBT1csYUFBYSxHQUFHLENBQUM7QUFBRTdDO0FBQUYsQ0FBRCxLQUFrQztBQUM5RCxzQkFBTyw4REFBQyw4Q0FBRDtBQUFrQiwyQkFBdUIsRUFBRTtBQUFFOEMsWUFBTSxFQUFFOUM7QUFBVjtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlA7QUFFTyxNQUFNQyxTQUFTLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ2xCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVDLHNEQUFmLG11QkFDYUQsS0FBSyxDQUFDbUIsSUFBTixDQUFXRixLQUFYLENBQWlCRyxLQUQ5QixFQUljcEIsS0FBSyxDQUFDZSxRQUFOLENBQWVrQixNQUo3QixFQVVXakMsS0FBSyxDQUFDRSxNQUFOLENBQWEwQyxTQVZ4QixFQW1CZ0I1QyxLQUFLLENBQUNFLE1BQU4sQ0FBYTJDLFVBbkI3QixFQW9CYTdDLEtBQUssQ0FBQ2UsUUFBTixDQUFla0IsTUFwQjVCLEVBc0JXakMsS0FBSyxDQUFDRSxNQUFOLENBQWFJLEtBdEJ4QixFQXVCWU4sS0FBSyxDQUFDZSxRQUFOLENBQWVvQixNQXZCM0IsRUEwQmVuQyxLQUFLLENBQUNtQixJQUFOLENBQVdGLEtBQVgsQ0FBaUJHLEtBMUJoQyxFQStCZ0JwQixLQUFLLENBQUNFLE1BQU4sQ0FBYUMsVUEvQjdCLEVBaUNZSCxLQUFLLENBQUNlLFFBQU4sQ0FBZW9CLE1BakMzQixFQXNDZW5DLEtBQUssQ0FBQ21CLElBQU4sQ0FBV0YsS0FBWCxDQUFpQkcsS0F0Q2hDLEVBdUNhcEIsS0FBSyxDQUFDZSxRQUFOLENBQWVLLEtBdkM1QixFQStDWXBCLEtBQUssQ0FBQ2UsUUFBTixDQUFla0IsTUEvQzNCLEVBb0RnQ2pDLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxVQXBEN0MsRUFrRWFILEtBQUssQ0FBQ2UsUUFBTixDQUFlSyxLQWxFNUIsRUFtRXlCcEIsS0FBSyxDQUFDRSxNQUFOLENBQWFDLFVBbkV0QyxFQXNFU0gsS0FBSyxDQUFDc0IsS0FBTixDQUFZZ0IsU0F0RXJCLENBRGtCLENBQWYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBO0FBQ0E7QUFTTyxNQUFNUSxRQUFRLEdBQUcsQ0FBQztBQUN2QkMsTUFEdUI7QUFFdkJDLFFBQU0sR0FBRyxFQUZjO0FBR3ZCQyxNQUh1QjtBQUl2QkMsUUFBTSxHQUFHO0FBSmMsQ0FBRCxLQUtIO0FBQ25CLFFBQU1DLFFBQVEsR0FBR0YsSUFBSSxDQUFDRyxLQUFMLENBQVcsS0FBWCxJQUFvQixJQUFwQixHQUEyQixLQUE1QztBQUNBLFFBQU1DLE1BQU0sR0FBR0gsTUFBTSxHQUFHLFFBQUgsR0FBYyxPQUFuQzs7QUFFQSxNQUFJQyxRQUFKLEVBQWM7QUFDWix3QkFDRSw4REFBQyw2Q0FBRDtBQUFTLFVBQUksRUFBQyxPQUFkO0FBQXNCLGVBQVMsTUFBL0I7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRUYsSUFBWjtBQUFrQixnQkFBUSxNQUExQjtBQUFBLCtCQUNFLDhEQUFDLDhDQUFEO0FBQWtCLGdCQUFNLEVBQUVJLE1BQTFCO0FBQUEscUJBQ0csQ0FBQyxDQUFDTCxNQUFGLGlCQUFZO0FBQUssZUFBRyxFQUFFQSxNQUFWO0FBQWtCLGVBQUcsRUFBRUQ7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEZixFQUVHLENBQUNDLE1BQUQsSUFBV0QsSUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVVEOztBQUVELHNCQUNFLDhEQUFDLDZDQUFEO0FBQVMsUUFBSSxFQUFDLE9BQWQ7QUFBc0IsYUFBUyxNQUEvQjtBQUFBLDJCQUNFLDhEQUFDLDhDQUFEO0FBQWtCLFVBQUksRUFBRUUsSUFBeEI7QUFBOEIsWUFBTSxFQUFFSSxNQUF0QztBQUFBLGlCQUNHLENBQUMsQ0FBQ0wsTUFBRixpQkFBWTtBQUFLLFdBQUcsRUFBRUEsTUFBVjtBQUFrQixXQUFHLEVBQUVEO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGYsRUFFRyxDQUFDQyxNQUFELElBQVdELElBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBUUQsQ0E5Qk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYUDtBQUVPLE1BQU1qRCxTQUFTLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZJQUFmLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBO0FBUU8sTUFBTXVELFFBQVEsR0FBRyxDQUFDO0FBQUUzQixVQUFGO0FBQVlzQixNQUFaO0FBQWtCQyxRQUFNLEdBQUc7QUFBM0IsQ0FBRCxLQUF1RDtBQUM3RSxRQUFNRyxNQUFNLEdBQUdILE1BQU0sR0FBRyxRQUFILEdBQWMsT0FBbkM7QUFDQSxRQUFNQyxRQUFRLEdBQUdGLElBQUksQ0FBQ0csS0FBTCxDQUFXLEtBQVgsSUFBb0IsSUFBcEIsR0FBMkIsS0FBNUM7O0FBRUEsTUFBSUQsUUFBSixFQUFjO0FBQ1osd0JBQ0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUVGLElBQVo7QUFBa0IsY0FBUSxNQUExQjtBQUFBLDZCQUNFLDhEQUFDLDhDQUFEO0FBQWtCLGNBQU0sRUFBRUksTUFBMUI7QUFBQSxrQkFBbUMxQjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUtEOztBQUVELHNCQUNFLDhEQUFDLDhDQUFEO0FBQWtCLFFBQUksRUFBRXNCLElBQXhCO0FBQThCLFVBQU0sRUFBRUksTUFBdEM7QUFBQSxjQUNHMUI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQWpCTSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RQO0FBRU8sTUFBTTdCLFNBQVMsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDbEIsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUMsc0RBQWYsNFFBR2FELEtBQUssQ0FBQ21CLElBQU4sQ0FBV0YsS0FBWCxDQUFpQkcsS0FIOUIsRUFJV3BCLEtBQUssQ0FBQ2UsUUFBTixDQUFlSyxLQUoxQixFQUtTcEIsS0FBSyxDQUFDRSxNQUFOLENBQWFJLEtBTHRCLEVBZWdCTixLQUFLLENBQUNFLE1BQU4sQ0FBYTBDLFNBZjdCLENBRGtCLENBQWYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlTyxNQUFNVyxJQUFJLEdBQUcsQ0FBQztBQUFFQyxPQUFLLEdBQUMsRUFBUjtBQUFZaEQsVUFBWjtBQUFzQkU7QUFBdEIsQ0FBRCxLQUE2QztBQUMvRCxRQUFNO0FBQUEsT0FBQytDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQywrQ0FBUSxDQUFDLEtBQUQsQ0FBOUM7O0FBQ0EsUUFBTUMsbUJBQW1CLEdBQUdDLEtBQUQsSUFBNkI7QUFDdERBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBSixrQkFBYyxDQUFFSyxDQUFELElBQUssQ0FBQ0EsQ0FBUCxDQUFkO0FBQ0QsR0FIRDs7QUFLQSxRQUFNQyxNQUFNLEdBQUdDLGtFQUFTLEVBQXhCO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyw4Q0FBRDtBQUFtQixpQkFBVyxFQUFFUixXQUFoQztBQUE2QyxhQUFPLEVBQUVHLG1CQUF0RDtBQUEyRSxVQUFJLEVBQUMsR0FBaEY7QUFBb0Ysb0JBQVcsb0JBQS9GO0FBQW9ILFdBQUssRUFBQyxvQkFBMUg7QUFBQSxpQkFFR0gsV0FBVyxpQkFBSSw4REFBQyx3RUFBRDtBQUFXLHNCQUFXO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRmxCLEVBR0csQ0FBQ0EsV0FBRCxpQkFBZ0IsOERBQUMsc0VBQUQ7QUFBVSxzQkFBVztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFNRSw4REFBQyw0Q0FBRDtBQUFnQixpQkFBVyxFQUFFQSxXQUE3QjtBQUEwQyxxQkFBYSxDQUFDQSxXQUF4RDtBQUFBLDZCQUNFLDhEQUFDLHdDQUFEO0FBQUEsZ0NBQ0UsOERBQUMseUNBQUQ7QUFBQSxpQ0FDRSw4REFBQywrQ0FBRDtBQUFVLGdCQUFJLEVBQUMsR0FBZjtBQUFtQixnQkFBSSxFQUFFakQsUUFBekI7QUFBbUMsa0JBQU0sRUFBRUU7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFLRSw4REFBQyw2Q0FBRDtBQUFTLGNBQUksRUFBQyxPQUFkO0FBQXNCLFlBQUUsRUFBQyxJQUF6QjtBQUE4QixtQkFBUyxFQUFFLEtBQXpDO0FBQUEsb0JBQ0k7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGLEVBVUk4QyxLQUFLLENBQUNVLEdBQU4sQ0FBV2pCLElBQUQsaUJBQ1IsOERBQUMsK0NBQUQ7QUFBd0IsY0FBSSxFQUFFQSxJQUFJLENBQUNBLElBQW5DO0FBQXlDLGdCQUFNLEVBQUVBLElBQUksQ0FBQ0MsTUFBdEQ7QUFBQSxvQkFDR0QsSUFBSSxDQUFDRjtBQURSLFdBQWVFLElBQUksQ0FBQ2tCLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsQ0FWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUEsa0JBREY7QUEyQkQsQ0FuQ00sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJQO0FBQ0E7O0FBT0EsTUFBTUMsY0FBYyxHQUFHLENBQ3JCWCxXQURxQixFQUVyQnpELEtBRnFCLEtBR2pCQyxzREFIaUIsd0RBSVh3RCxXQUFXLEdBQUcsR0FBSCxHQUFPLFFBSlAsRUFLTEEsV0FBVyxHQUFFLE1BQUYsR0FBVSxRQUxoQixFQU9WekQsS0FBSyxDQUFDc0IsS0FBTixDQUFZZ0IsU0FQRixFQVFUbUIsV0FBVyxHQUFHLEdBQUgsR0FBUSxRQVJWLENBQXZCOztBQVlPLE1BQU0zQyxPQUFPLEdBQUdmLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ2pCLENBQUM7QUFBRUMsT0FBRjtBQUFReUQ7QUFBUixDQUFELEtBQTJCeEQsc0RBQTNCLDJNQUNlRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUcsT0FENUIsRUFFWUwsS0FBSyxDQUFDZSxRQUFOLENBQWVVLEtBRjNCLEVBY0cyQyxjQUFjLENBQUNYLFdBQUQsRUFBY3pELEtBQWQsQ0FkakIsQ0FEaUIsQ0FBYjtBQW9CQSxNQUFNcUUsR0FBRyxHQUFHdEUsdUVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDYixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQyxzREFBZixzRUFHR29CLGtEQUhILEVBTW9CckIsS0FBSyxDQUFDZSxRQUFOLENBQWVVLEtBTm5DLENBRGEsQ0FBVDs7QUFhUCxNQUFNNkMsYUFBYSxHQUFHLENBQ3BCYixXQURvQixFQUV0QnpELEtBRnNCLEtBR2pCQyxzREFIaUIsbURBSVp3RCxXQUFXLEdBQUcsT0FBSCxHQUFhLE1BSlosRUFLWEEsV0FBVyxHQUFHekQsS0FBSyxDQUFDRSxNQUFOLENBQWEwQyxTQUFoQixHQUE0QjVDLEtBQUssQ0FBQ0UsTUFBTixDQUFhSSxLQUx6QyxFQU9YTixLQUFLLENBQUNzQixLQUFOLENBQVlnQixTQVBELEVBUVZtQixXQUFXLEdBQUcsT0FBSCxHQUFhLFNBUmQsQ0FBdEI7O0FBWU8sTUFBTWMsSUFBSSxHQUFHeEUsdUVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDZCxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQyxzREFBZiwyR0FDR29CLGtEQURILEVBS29CckIsS0FBSyxDQUFDZSxRQUFOLENBQWV5RCxPQUxuQyxFQVEyQnhFLEtBQUssQ0FBQ0UsTUFBTixDQUFhMEMsU0FSeEMsQ0FEYyxDQUFWO0FBZUEsTUFBTTZCLFNBQVMsR0FBRzFFLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ25CLENBQUM7QUFBRUMsT0FBRjtBQUFTeUQ7QUFBVCxDQUFELEtBQTRCeEQsc0RBQTVCLDJJQUVVRCxLQUFLLENBQUNlLFFBQU4sQ0FBZWtCLE1BRnpCLEVBR1lqQyxLQUFLLENBQUNFLE1BQU4sQ0FBYUksS0FIekIsRUFJaUJOLEtBQUssQ0FBQ0UsTUFBTixDQUFhRyxPQUo5QixFQVVLaUUsYUFBYSxDQUFDYixXQUFELEVBQWF6RCxLQUFiLENBVmxCLENBRG1CLENBQWYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRlA7QUFNQSxNQUFNMEUsbUJBQW1CLEdBQUc7QUFDMUJ4RCxLQUFHLEVBQUdsQixLQUFELElBQXlCQyxzREFBekIsc0JBQ1VELEtBQUssQ0FBQ2lCLEtBQU4sQ0FBWUMsR0FEdEIsQ0FEcUI7QUFJMUJ5RCxTQUFPLEVBQUczRSxLQUFELElBQXlCQyxzREFBekIsc0JBQ01ELEtBQUssQ0FBQ2lCLEtBQU4sQ0FBWTBELE9BRGxCO0FBSmlCLENBQTVCO0FBU08sTUFBTUMsYUFBYSxHQUFHN0UsdUVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDeEIsQ0FBQztBQUFFQyxPQUFGO0FBQVM4QjtBQUFULENBQUQsS0FBcUI3QixzREFBckIsbURBR2NELEtBQUssQ0FBQ2UsUUFBTixDQUFlVSxLQUg3QixFQUlFaUQsbUJBQW1CLENBQUM1QyxJQUFELENBQW5CLENBQTBCOUIsS0FBMUIsQ0FKRixDQUR3QixDQUFuQixDOzs7Ozs7Ozs7Ozs7QUNmUCwrREFBZTtBQUNiNkUsS0FBRyxFQUFFLHNEQURRO0FBRWJDLFVBQVEsRUFBRSxXQUZHO0FBR2JDLGFBQVcsRUFBRSxjQUhBO0FBSWJDLFdBQVMsRUFBQztBQUpHLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVPLE1BQU1DLGlCQUFpQixHQUFHQyxnREFBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F4RU8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQ0E7QUFFTyxNQUFNdkYsYUFBYSxHQUFHdUYsZ0RBQUk7QUFDakMsSUFBSUQseURBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0E5Qk87QUFnQ0EsTUFBTWhHLHNCQUFzQixHQUFHaUcsZ0RBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVJPLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFPTyxNQUFNQyxZQUFZLEdBQUcsQ0FBRTtBQUFFQyxVQUFGO0FBQVl6RDtBQUFaLENBQUYsS0FBaUQ7QUFDM0UsUUFBTXFDLE1BQU0sR0FBR0Msa0VBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ29CLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0MzQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFDQSxRQUFNNEIsSUFBSSxHQUFHdkIsTUFBTSxDQUFDd0IsUUFBcEI7QUFFQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ1o1Ryx3RUFBYyxHQUFHNkcsSUFBakIsQ0FBc0JDLEdBQUcsSUFBSTtBQUMzQkwsd0JBQWtCLENBQUNLLEdBQUQsQ0FBbEI7QUFDRCxLQUZEO0FBR0gsR0FKUSxFQUlQLEVBSk8sQ0FBVDtBQVFBLHNCQUNFLDhEQUFDLDRDQUFEO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxXQUFLLEVBQUVQLFFBQVEsQ0FBQ1EsUUFBdEI7QUFDSSxjQUFRLEVBQUVSLFFBQVEsQ0FBQzVFLFFBRHZCO0FBRUksVUFBSSxFQUFFNEUsUUFBUSxDQUFDMUUsSUFBVCxDQUFjLENBQWQsRUFBaUJtRTtBQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBS0MsOERBQUMsb0RBQUQ7QUFBQSw4QkFDRyw4REFBQyxzREFBRDtBQUNBLGdCQUFRLEVBQUlPLFFBQVEsQ0FBQzVFLFFBRHJCO0FBRUEsbUJBQVcsRUFBRTRFLFFBQVEsQ0FBQzNFLFdBRnRCO0FBR0EsWUFBSSxFQUFHMkUsUUFBUSxDQUFDMUUsSUFBVCxDQUFjLENBQWQsRUFBaUJtRSxHQUh4QjtBQUlBLGdCQUFRLEVBQUU7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURILGVBUUcsOERBQUMsK0NBQUQ7QUFBQSwrQkFDRSw4REFBQyxvREFBRDtBQUFBLHFCQUNLUSxlQUFlLENBQUNRLE1BQWhCLEdBQXdCLENBQXhCLElBQTZCUixlQUFlLENBQUNuQixHQUFoQixDQUFxQjRCLFFBQUQsaUJBQ2hEO0FBQUEsbUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFFO0FBQUNOLHdCQUFRLEVBQUUsV0FBWDtBQUF3Qk8scUJBQUssRUFBRTtBQUFFQyxzQkFBSSxFQUFFRixRQUFRLENBQUNFO0FBQWpCO0FBQS9CLGVBQVo7QUFBb0UsZ0JBQUUsRUFBRyxhQUFZRixRQUFRLENBQUNFLElBQUssRUFBbkc7QUFBQSxxQ0FDRSw4REFBQyxxREFBRDtBQUFBLGdDQUEyQkYsUUFBUSxDQUFDRyxXQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBVyxvQkFBbUJILFFBQVEsQ0FBQ0ksR0FBSSxFQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUQ0QixDQURsQyxlQVFJO0FBQU0sa0JBQU0sRUFBQyxVQUFiO0FBQXdCLGtCQUFNLEVBQUMsS0FBL0I7QUFBQSxtQ0FDRSw4REFBQyxnREFBRDtBQUFvQixrQkFBSSxFQUFDLFFBQXpCO0FBQWtDLHlCQUFXLEVBQUMscUJBQTlDO0FBQ0Usa0JBQUksRUFBQyxHQURQO0FBRUUsMEJBQVksRUFBRWxDLE1BQU0sQ0FBQytCLEtBQVAsQ0FBYUk7QUFGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEQsZUFnQ0MsOERBQUMscURBQUQ7QUFBQSxpQkFFQ3hFLFFBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhDRCxlQW9DQyw4REFBQyxvREFBRDtBQUFBLDZCQUNHLDhEQUFDLHNEQUFEO0FBQVEsWUFBSSxFQUFFeUQsUUFBUSxDQUFDckM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcENELGVBd0NBLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBOENELENBM0RNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCUDtBQUVPLE1BQU1qQyxPQUFPLEdBQUdmLHVFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQWI7QUFHQSxNQUFNcUcsZUFBZSxHQUFHckcsdUVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDeEIsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUMsc0RBQWYsdUJBQ2NELEtBQUssQ0FBQ2UsUUFBTixDQUFlVSxLQUQ3QixDQUR3QixDQUFyQjtBQU1BLE1BQU00RSxnQkFBZ0IsR0FBR3RHLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQzNCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVDLHNEQUFmLG9FQUltQkQsS0FBSyxDQUFDZSxRQUFOLENBQWVDLEtBSmxDLENBRDJCLENBQXRCO0FBU0EsTUFBTXNGLGVBQWUsR0FBR3ZHLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQzFCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVDLHNEQUFmLG9FQUltQkQsS0FBSyxDQUFDZSxRQUFOLENBQWVVLEtBSmxDLENBRDBCLENBQXJCO0FBU0EsTUFBTThFLGVBQWUsR0FBR3hHLHVFQUFIO0FBQUE7QUFBQTtBQUFBLG9FQUFyQjtBQU1BLE1BQU15RyxVQUFVLEdBQUd6Ryx1RUFBSDtBQUFBO0FBQUE7QUFBQSxxRkFBaEI7QUFTQSxNQUFNMEcsV0FBVyxHQUFHMUcseUVBQUg7QUFBQTtBQUFBO0FBQUEsY0FDcEIsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUMsc0RBQWYsNFZBYVNELEtBQUssQ0FBQ3NCLEtBQU4sQ0FBWWdCLFNBYnJCLENBRG9CLENBQWpCO0FBZ0NBLE1BQU1vRSxnQkFBZ0IsR0FBRzNHLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ3pCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVDLHNEQUFmLHlRQUdhRCxLQUFLLENBQUNtQixJQUFOLENBQVdGLEtBQVgsQ0FBaUJHLEtBSDlCLEVBSVdwQixLQUFLLENBQUNlLFFBQU4sQ0FBZUssS0FKMUIsRUFLU3BCLEtBQUssQ0FBQ0UsTUFBTixDQUFhRyxPQUx0QixFQWVnQkwsS0FBSyxDQUFDRSxNQUFOLENBQWEwQyxTQWY3QixDQUR5QixDQUF0QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFUDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRTyxNQUFNK0Qsa0JBQWtCLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNqQyxTQUFUO0FBQWtCUztBQUFsQixDQUFELEtBQTJEO0FBQzNGLFFBQU1wQixNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUNBLFFBQU00QyxVQUFVLEdBQUcsWUFBVztBQUM1QjdDLFVBQU0sQ0FBQzhDLElBQVAsQ0FBWSxHQUFaO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSw4REFBQywrQ0FBRDtBQUFjLFlBQVEsRUFBRTFCLFFBQXhCO0FBQUEsNEJBQ0UsOERBQUMsNENBQUQ7QUFBQSw4QkFDRSw4REFBQyxvRUFBRDtBQUFlLFlBQUksRUFBQyxLQUFwQjtBQUFBLCtCQUNFLDhEQUFDLHdEQUFEO0FBQVMsY0FBSSxFQUFDLEtBQWQ7QUFBQSwwQkFBc0J3QixLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUUsOERBQUMsb0VBQUQ7QUFBZSxZQUFJLEVBQUMsU0FBcEI7QUFBQSwrQkFDRSw4REFBQyxrRUFBRDtBQUFlLGNBQUksRUFBRWpDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVlFLDhEQUFDLG9EQUFEO0FBQUEsNkJBQ0UsOERBQUMsMkNBQUQ7QUFBZSxlQUFPLEVBQUVrQyxVQUF4QjtBQUFBLGtCQUNHO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFvQkQsQ0ExQk0sQzs7Ozs7Ozs7Ozs7O0FDZFAsK0RBQ0k7QUFFRUUsT0FBSyxFQUFFO0FBQ0xILFNBQUssRUFBRSxXQURGO0FBRUxqQyxXQUFPLEVBQUU7QUFGSixHQUZUO0FBTUVxQyxTQUFPLEVBQUU7QUFDUEosU0FBSyxFQUFFLFNBREE7QUFFUGpDLFdBQU8sRUFBRTtBQUZGLEdBTlg7QUFVRXNDLGtCQUFnQixFQUFFO0FBQ2hCTCxTQUFLLEVBQUUsNkJBRFM7QUFFaEJqQyxXQUFPLEVBQUU7QUFGTyxHQVZwQjtBQWNFdUMsWUFBVSxFQUFFO0FBQ1ZOLFNBQUssRUFBRSx1QkFERztBQUVWakMsV0FBTyxFQUFFO0FBRkM7QUFkZCxDQURKLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNPLE1BQU03RCxPQUFPLEdBQUdmLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ2pCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVDLHNEQUFmLGdOQUNtQkQsS0FBSyxDQUFDZSxRQUFOLENBQWVvQixNQURsQyxFQUVrQm5DLEtBQUssQ0FBQ2UsUUFBTixDQUFlb0IsTUFGakMsRUFHK0JuQyxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsVUFINUMsRUFLR2tCLDZEQUxILEVBUWVyQixLQUFLLENBQUNlLFFBQU4sQ0FBZW9CLE1BUjlCLEVBU2FuQyxLQUFLLENBQUNlLFFBQU4sQ0FBZW9HLE9BVDVCLEVBVW9CbkgsS0FBSyxDQUFDZSxRQUFOLENBQWVrQixNQVZuQyxFQWVVakMsS0FBSyxDQUFDRSxNQUFOLENBQWEyQyxVQWZ2QixDQURpQixDQUFiO0FBc0JBLE1BQU11RSxlQUFlLEdBQUdySCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxhQUN4QixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQyxzREFBZix3RUFDYUQsS0FBSyxDQUFDZSxRQUFOLENBQWVVLEtBRDVCLEVBRVV6QixLQUFLLENBQUNlLFFBQU4sQ0FBZVUsS0FGekIsQ0FEd0IsQ0FBckI7QUFTQSxNQUFNNEYsTUFBTSxHQUFHdEgsMEVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDZixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQyxzREFBZiwyR0FDY0QsS0FBSyxDQUFDRSxNQUFOLENBQWFHLE9BRDNCLEVBRVNMLEtBQUssQ0FBQ0UsTUFBTixDQUFhSSxLQUZ0QixFQUlXTixLQUFLLENBQUNlLFFBQU4sQ0FBZUssS0FKMUIsRUFJbUNwQixLQUFLLENBQUNlLFFBQU4sQ0FBZVUsS0FKbEQsRUFPZ0J6QixLQUFLLENBQUNFLE1BQU4sQ0FBYTJDLFVBUDdCLENBRGUsQ0FBWixDOzs7Ozs7Ozs7O0FDakNQLGUiLCJmaWxlIjoic3JjX2FwaV9sb2FkLXBvc3RzX3RzLXNyY190ZW1wbGF0ZXNfT3RoZXJQYWdlc1RlbXBsYXRlX2luZGV4X3RzeC1zcmNfdGVtcGxhdGVzX090aGVyUGFnZXNUZW1wLWZiNzgwZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVxdWVzdH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBHUkFQSFFMX1FVRVJZX0NBVEVHT1JZIH0gZnJvbSAnLi4vZ3JhcGhxbC9xdWVyaWVzJztcclxuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICcuLi9zaGFyZWQtdHlwZXMvY2F0ZWdvcnknO1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIExvYWRDYXRlZ29yeVZhcmlhYmxlcyA9IHtcclxuICBhbGxDYXRlZ29yaWVzOiBDYXRlZ29yeVtdO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkQ2F0ZWdvcmllcyA9IGFzeW5jICgpOiBQcm9taXNlPExvYWRDYXRlZ29yeVZhcmlhYmxlcz4gPT57XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0KGNvbmZpZy5ncmFwaGxVUkwsIEdSQVBIUUxfUVVFUllfQ0FURUdPUlkpO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEuY2F0ZWdvcmllcyk7XHJcbiAgcmV0dXJuIGRhdGEuY2F0ZWdvcmllcztcclxufTtcclxuIiwiaW1wb3J0IHtyZXF1ZXN0fSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xyXG5pbXBvcnQge1NldHRpbmdzU3RyYXBpfSBmcm9tICcuLi9zaGFyZWQtdHlwZXMvc2V0dGluZ3Mtc3RyYXBpJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBHUkFQSFFMX1FVRVJZIH0gZnJvbSAnLi4vZ3JhcGhxbC9xdWVyaWVzJztcclxuaW1wb3J0IHsgUG9zdFN0cmFwaSB9IGZyb20gJy4uL3NoYXJlZC10eXBlcy9wb3N0LXN0cmFwaSc7XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgTG9hZFBvc3RzVmFyaWFibGVzID0ge1xyXG4gIGNhdGVnb3J5U2x1Zz86IHN0cmluZztcclxuICBwb3N0U2x1Zz86IHN0cmluZztcclxuICBwb3N0U2VhcmNoPzogc3RyaW5nO1xyXG4gIGF1dGhvclNsdWc/OiBzdHJpbmc7XHJcbiAgdGFnU2x1Zz86IHN0cmluZztcclxuICBzb3J0Pzogc3RyaW5nO1xyXG4gIHN0YXJ0PzogbnVtYmVyO1xyXG4gIGxpbWl0PzogbnVtYmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgU3RyYXBpUG9zdEFuZFNldHRpbmdzID0ge1xyXG4gIHNldHRpbmdzOiBTZXR0aW5nc1N0cmFwaTtcclxuICBwb3N0czogUG9zdFN0cmFwaVtdO1xyXG4gIHZhcmlhYmxlcz86TG9hZFBvc3RzVmFyaWFibGVzO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9hZFBvc3RzVmFyaWFibGVzOiBMb2FkUG9zdHNWYXJpYWJsZXMgPSB7XHJcbiAgICBzb3J0OiAnY3JlYXRlZEF0OmRlc2MnLFxyXG4gICAgc3RhcnQ6MCxcclxuICAgIGxpbWl0OjksXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkUG9zdHMgPSBhc3luYyAoXHJcbiAgdmFyaWFibGVzOiBMb2FkUG9zdHNWYXJpYWJsZXMgPXt9LFxyXG4pOiBQcm9taXNlPFN0cmFwaVBvc3RBbmRTZXR0aW5ncz4gPT57XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdChjb25maWcuZ3JhcGhsVVJMLCBHUkFQSFFMX1FVRVJZLCB7XHJcbiAgICAgICAgLi4uZGVmYXVsdExvYWRQb3N0c1ZhcmlhYmxlcyxcclxuICAgICAgICAuLi52YXJpYWJsZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxufTtcclxuIiwiaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IEh0bWxDb21wb25lbnQgfSBmcm9tICcuLi9IdG1sQ29udGVudCc7XG5cbmV4cG9ydCB0eXBlIEZvb3RlclByb3BzID0ge1xuICBodG1sOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKHsgaHRtbCB9OiBGb290ZXJQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWQuQ29udGFpbmVyPlxuICAgICAgICA8SHRtbENvbXBvbmVudCBodG1sPXtodG1sfSAvPlxuICAgIDwvU3R5bGVkLkNvbnRhaW5lcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENvbnRhaW5lciBhcyBUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi4vVGV4dENvbXBvbmVudC9zdHlsZXMnO1xuXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZm9vdGVyYFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkICR7dGhlbWUuY29sb3JzLm1lZGl1bUdyYXl9O1xuXG4gICAgYSB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG5cbiAgYH1cbmA7XG4iLCJpbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHsgS2V5Ym9hcmRBcnJvd1VwIH0gZnJvbSAnQHN0eWxlZC1pY29ucy9tYXRlcmlhbC1vdXRsaW5lZC9LZXlib2FyZEFycm93VXAnO1xuXG5leHBvcnQgY29uc3QgR29Ub3AgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZC5Db250YWluZXIgaHJlZj1cIiNcIiBhcmlhLWxhYmVsPVwiR28gdG8gdG9wXCIgdGl0bGU9XCJHbyB0byB0b3BcIj5cbiAgICAgIDxLZXlib2FyZEFycm93VXAgLz5cbiAgICA8L1N0eWxlZC5Db250YWluZXI+XG4gICk7XG59O1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuYWBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBib3R0b206IDJyZW07XG4gICAgcmlnaHQ6IDJyZW07XG4gICAgei1pbmRleDogNjtcbiAgYH1cbmA7XG4iLCJcclxuaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJy4uL0hlYWRpbmcnO1xyXG5pbXBvcnQge0xvZ29MaW5rfSBmcm9tICcuLi9Mb2dvTGluayc7XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgSGVhZGVyUHJvcHMgPSB7XHJcbiAgYmxvZ05hbWU6c3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOnN0cmluZztcclxuICBsb2dvPzpzdHJpbmc7XHJcbiAgc2hvd1RleHQ/OmJvb2xlYW47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKHtcclxuICBibG9nTmFtZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBsb2dvLFxyXG4gIHNob3dUZXh0ID0gZmFsc2UsXHJcblxyXG59OiBIZWFkZXJQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgdmFsdWVEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnRvVXBwZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWQuV3JhcHBlcj5cclxuXHJcbiAgICAgICAgICB7c2hvd1RleHQgJiYgKFxyXG4gICAgICAgICAgICA8U3R5bGVkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cImh1Z2VcIiBhcz1cImgyXCIgY29sb3JEYXJrPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIHtibG9nTmFtZX1cclxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgPGRpdiBhbGlnbj0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAge3ZhbHVlRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkLkNvbnRlbnQ+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvU3R5bGVkLldyYXBwZXI+XHJcbiAgICApO1xyXG4gIH07XHJcbiIsImltcG9ydCB7VGl0bGUgYXMgSGVhZGluZ1N0eWxlc30gZnJvbSAnLi4vSGVhZGluZy9zdHlsZXMnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICAkeyh7dGhlbWV9KT0+IGNzc2BcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAke3RoZW1lLnNwYWNpbmdzLnhodWdlfTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogJHt0aGVtZS5zaXplcy5tYXh9O1xyXG4gICAgICBjb2xvcjogJHt0aGVtZS5mb250LnNpemVzLnNtYWxsfTtcclxuICAgICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnQuc2l6ZXMuc21hbGx9O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAgICR7SGVhZGluZ1N0eWxlc317XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhICR7dGhlbWUubWVkaWEubHRlU21hbGx9IHtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuXHJcbiAgICAgICAgJiA+ICQgJHtIZWFkaW5nU3R5bGVzfXtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgY2FsYygke3RoZW1lLnNwYWNpbmdzLnNtYWxsfSAtMXJlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gIGB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfTtcclxuICAgIG1heC13aWR0aDogNDhyZW07XHJcblxyXG4gICAgQG1lZGlhICR7dGhlbWUubWVkaWEubHRlU21hbGx9e1xyXG4gICAgICBtYXJnaW4tbGVmdDowO1xyXG4gICAgfVxyXG4gIGB9XHJcbmA7XHJcbiIsImltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCB0eXBlIEhlYWRpbmdQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgY29sb3JEYXJrPzogYm9vbGVhbjtcbiAgYXM/OiAnaDEnIHwgJ2gyJyB8ICdoMycgfCAnaDQnIHwgJ2g1JyB8ICdoNic7XG4gIHNpemU/OiAnc21hbGwnIHwgJ21lZGl1bScgfCAnYmlnJyB8ICdodWdlJztcbiAgdXBwZXJjYXNlPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBIZWFkaW5nID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNvbG9yRGFyayA9IHRydWUsXG4gIGFzID0gJ2gxJyxcbiAgc2l6ZSA9ICdodWdlJyxcbiAgdXBwZXJjYXNlID0gZmFsc2UsXG59OiBIZWFkaW5nUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkLlRpdGxlXG4gICAgICBjb2xvckRhcms9e2NvbG9yRGFya31cbiAgICAgIGFzPXthc31cbiAgICAgIHNpemU9e3NpemV9XG4gICAgICB1cHBlcmNhc2U9e3VwcGVyY2FzZX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TdHlsZWQuVGl0bGU+XG4gICk7XG59O1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MsIERlZmF1bHRUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEhlYWRpbmdQcm9wcyB9IGZyb20gJy4nO1xuXG5jb25zdCB0aXRsZVNpemUgPSB7XG4gIHNtYWxsOiAodGhlbWU6IERlZmF1bHRUaGVtZSkgPT4gY3NzYFxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250LnNpemVzLm1lZGl1bX07XG4gIGAsXG4gIG1lZGl1bTogKHRoZW1lOiBEZWZhdWx0VGhlbWUpID0+IGNzc2BcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udC5zaXplcy5sYXJnZX07XG4gIGAsXG4gIGJpZzogKHRoZW1lOiBEZWZhdWx0VGhlbWUpID0+IGNzc2BcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udC5zaXplcy54bGFyZ2V9O1xuICBgLFxuICBodWdlOiAodGhlbWU6IERlZmF1bHRUaGVtZSkgPT4gY3NzYFxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250LnNpemVzLnhodWdlfTtcbiAgICAke21lZGlhRm9udCh0aGVtZSl9O1xuICBgLFxufTtcblxuY29uc3QgbWVkaWFGb250ID0gKHRoZW1lOiBEZWZhdWx0VGhlbWUpID0+IGNzc2BcbiAgQG1lZGlhICR7dGhlbWUubWVkaWEubHRlTWVkaXVtfSB7XG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnQuc2l6ZXMueGxhcmdlfTtcbiAgfVxuYDtcblxuY29uc3QgdGl0bGVDYXNlID0gKHVwcGVyY2FzZTogYm9vbGVhbikgPT4gY3NzYFxuICB0ZXh0LXRyYW5zZm9ybTogJHt1cHBlcmNhc2UgPyAndXBwZXJjYXNlJyA6ICdub25lJ307XG5gO1xuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDE8SGVhZGluZ1Byb3BzPmBcbiAgJHsoeyB0aGVtZSwgY29sb3JEYXJrLCBzaXplLCB1cHBlcmNhc2UgfSkgPT4gY3NzYFxuICAgIGNvbG9yOiAke2NvbG9yRGFyayA/IHRoZW1lLmNvbG9ycy5wcmltYXJ5Q29sb3IgOiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgICR7dGl0bGVTaXplW3NpemVdKHRoZW1lKX07XG4gICAgJHt0aXRsZUNhc2UodXBwZXJjYXNlKX07XG4gIGB9XG5gO1xuIiwiaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcblxuZXhwb3J0IHR5cGUgSHRtbENvbXBvbmVudFByb3BzID0ge1xuICBodG1sOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgIEh0bWxDb21wb25lbnQgPSAoeyBodG1sIH06IEh0bWxDb21wb25lbnRQcm9wcykgPT4ge1xuICByZXR1cm4gPFN0eWxlZC5Db250YWluZXIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+O1xufTtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnQuc2l6ZXMuc21hbGx9O1xuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5ncy5tZWRpdW19IDA7XG4gICAgfVxuXG4gICAgYSxcbiAgICBhOnZpc2l0ZWQsXG4gICAgYTpsaW5rZWQge1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnNlY29uZGFyeX07XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZXNzZS1pbi1vdXQ7XG4gICAgfVxuICAgIGE6aG92ZXIge1xuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDUwJSk7XG4gICAgfVxuXG4gICAgcHJlIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmRhcmtlckdyYXl9O1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5ncy5tZWRpdW19O1xuICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZ3MueGxhcmdlfSAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnQuc2l6ZXMuc21hbGx9O1xuXG4gICAgfVxuXG4gICAgLmltYWdlIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLm1lZGl1bUdyYXl9O1xuICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZ3MueGxhcmdlfTA7XG5cbiAgICB9XG5cbiAgICAuaW1hZ2UgZmlnY2FwdGlvbntcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250LnNpemVzLnNtYWxsfTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZ3Muc21hbGx9O1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIH1cblxuICAgIC5pbWFnZS1zdHlsZS1zaWRlIHtcbiAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmdzLm1lZGl1bX07XG4gICAgfVxuXG4gICAgaHIge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkICR7dGhlbWUuY29sb3JzLm1lZGl1bUdyYXl9O1xuICAgIH1cblxuICAgIHVsLG9sIHtcbiAgICAgIG1hcmdpbjogJHRoZW1lLnNwYWNpbmdzLnhsYXJnZSk7XG4gICAgfVxuXG4gICAgLnRhYmxlIHtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIH1cblxuICAgIHRhYmxlIHRkLFxuICAgIHRhYmxlIHRoIHtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZ3Muc21hbGx9O1xuICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJHt0aGVtZS5jb2xvcnMubWVkaXVtR3JheX07XG4gICAgfVxuXG4gICAgQG1lZGlhICR7dGhlbWUubWVkaWEubHRlTWVkaXVtfXtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIC5pbWFnZS1zdHlsZS1zaWRle1xuICAgICAgICBtYXgtd2lkdGg6MTAwJTtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIG1hcmdpbjowO1xuICAgICAgfVxuICAgIH1cbiAgYH1cbmA7XG4iLCJpbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJy4uL0hlYWRpbmcnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IHR5cGUgTG9nb0xpbmtQcm9wcyA9IHtcbiAgdGV4dDogc3RyaW5nO1xuICBzcmNJbWc/OiBzdHJpbmc7XG4gIGxpbms6IHN0cmluZztcbiAgbmV3VGFiPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBMb2dvTGluayA9ICh7XG4gIHRleHQsXG4gIHNyY0ltZyA9ICcnLFxuICBsaW5rLFxuICBuZXdUYWIgPSBmYWxzZSxcbn06IExvZ29MaW5rUHJvcHMpID0+IHtcbiAgY29uc3QgbmV4dExpbmsgPSBsaW5rLm1hdGNoKC9eXFwvLykgPyB0cnVlIDogZmFsc2U7XG4gIGNvbnN0IHRhcmdldCA9IG5ld1RhYiA/ICdfYmxhbmsnIDogJ19zZWxmJztcblxuICBpZiAobmV4dExpbmspIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhlYWRpbmcgc2l6ZT1cInNtYWxsXCIgdXBwZXJjYXNlPlxuICAgICAgICA8TGluayBocmVmPXtsaW5rfSBwYXNzSHJlZj5cbiAgICAgICAgICA8U3R5bGVkLkNvbnRhaW5lciB0YXJnZXQ9e3RhcmdldH0+XG4gICAgICAgICAgICB7ISFzcmNJbWcgJiYgPGltZyBzcmM9e3NyY0ltZ30gYWx0PXt0ZXh0fSAvPn1cbiAgICAgICAgICAgIHshc3JjSW1nICYmIHRleHR9XG4gICAgICAgICAgPC9TdHlsZWQuQ29udGFpbmVyPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0hlYWRpbmc+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEhlYWRpbmcgc2l6ZT1cInNtYWxsXCIgdXBwZXJjYXNlPlxuICAgICAgPFN0eWxlZC5Db250YWluZXIgaHJlZj17bGlua30gdGFyZ2V0PXt0YXJnZXR9PlxuICAgICAgICB7ISFzcmNJbWcgJiYgPGltZyBzcmM9e3NyY0ltZ30gYWx0PXt0ZXh0fSAvPn1cbiAgICAgICAgeyFzcmNJbWcgJiYgdGV4dH1cbiAgICAgIDwvU3R5bGVkLkNvbnRhaW5lcj5cbiAgICA8L0hlYWRpbmc+XG4gICk7XG59O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuYWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgbWFyZ2luLWxlZnQ6MTAlO1xuXG4gID4gaW1nIHtcbiAgICBoZWlnaHQ6IDE1cmVtO1xuICAgIHdpZHRoOiAxNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgfVxuYDtcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xuXG5leHBvcnQgdHlwZSBNZW51TGlua1Byb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBsaW5rOiBzdHJpbmc7XG4gIG5ld1RhYj86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgTWVudUxpbmsgPSAoeyBjaGlsZHJlbiwgbGluaywgbmV3VGFiID0gZmFsc2UgfTogTWVudUxpbmtQcm9wcykgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBuZXdUYWIgPyAnX2JsYW5rJyA6ICdfc2VsZic7XG4gIGNvbnN0IG5leHRMaW5rID0gbGluay5tYXRjaCgvXlxcLy8pID8gdHJ1ZSA6IGZhbHNlO1xuXG4gIGlmIChuZXh0TGluaykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBocmVmPXtsaW5rfSBwYXNzSHJlZj5cbiAgICAgICAgPFN0eWxlZC5Db250YWluZXIgdGFyZ2V0PXt0YXJnZXR9PntjaGlsZHJlbn08L1N0eWxlZC5Db250YWluZXI+XG4gICAgICA8L0xpbms+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZC5Db250YWluZXIgaHJlZj17bGlua30gdGFyZ2V0PXt0YXJnZXR9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU3R5bGVkLkNvbnRhaW5lcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5hYFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnQuc2l6ZXMuc21hbGx9O1xuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZ3Muc21hbGx9O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDAuNzZyZW07XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogMC4ycmVtO1xuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcbiAgICB9XG5cbiAgICAmOmhvdmVyOjphZnRlciB7XG4gICAgICBsZWZ0OiAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgYH1cbmA7XG4iLCJpbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQge0xvZ29MaW5rfSBmcm9tICcuLi9Mb2dvTGluayc7XHJcbmltcG9ydCB7TWVudUxpbmt9IGZyb20gJy4uL01lbnVMaW5rJztcclxuaW1wb3J0IHsgTWVudSBhcyBNZW51SWNvbiB9IGZyb20gJ0BzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvTWVudSc7XHJcbmltcG9ydCB7IENsb3NlIGFzIENsb3NlSWNvbiB9IGZyb20gJ0BzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvQ2xvc2UnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICcuLi9IZWFkaW5nJztcclxuXHJcbmV4cG9ydCB0eXBlIE1lbnVQcm9wc0xpbmtzID17XHJcbiAgaWQ6IHN0cmluZztcclxuICBsaW5rOiBzdHJpbmc7XHJcbiAgbmV3VGFiOiBib29sZWFuO1xyXG4gIHRleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTWVudVByb3BzID0ge1xyXG4gIGxpbmtzOiBNZW51UHJvcHNMaW5rc1tdO1xyXG4gIGJsb2dOYW1lOiBTdHJpbmc7XHJcbiAgbG9nbzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnUgPSAoeyBsaW5rcz1bXSwgYmxvZ05hbWUsIGxvZ28gfTogTWVudVByb3BzKSA9PiB7XHJcbiAgY29uc3QgW21lbnVWaXNpYmxlLCBzZXRNZW51VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlT3BlbkNsb3NlTWVudT0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0TWVudVZpc2libGUoKHYpPT4hdik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTdHlsZWQuT3BlbkNsb3NlICBtZW51VmlzaWJsZT17bWVudVZpc2libGV9IG9uQ2xpY2s9e2hhbmRsZU9wZW5DbG9zZU1lbnV9IGhyZWY9XCIjXCIgYXJpYS1sYWJlbD1cIk9wZW4gb3IgY2xvc2UgbWVudVwiIHRpdGxlPVwiT3BlbiBvciBjbG9zZSBtZW51XCI+XHJcblxyXG4gICAgICAgIHttZW51VmlzaWJsZSAmJiA8Q2xvc2VJY29uIGFyaWEtbGFiZWw9XCJDbG9zZSBtZW51XCIgLz59XHJcbiAgICAgICAgeyFtZW51VmlzaWJsZSAmJiA8TWVudUljb24gYXJpYS1sYWJlbD1cIk9wZW4gbWVudVwiLz59XHJcbiAgICAgIDwvU3R5bGVkLk9wZW5DbG9zZT5cclxuICAgICAgPFN0eWxlZC5XcmFwcGVyIG1lbnVWaXNpYmxlPXttZW51VmlzaWJsZX0gYXJpYS1oaWRkZW49eyFtZW51VmlzaWJsZX0+XHJcbiAgICAgICAgPFN0eWxlZC5OYXY+XHJcbiAgICAgICAgICA8U3R5bGVkLkxvZ28+XHJcbiAgICAgICAgICAgIDxMb2dvTGluayBsaW5rPVwiL1wiIHRleHQ9e2Jsb2dOYW1lfSBzcmNJbWc9e2xvZ299Lz5cclxuICAgICAgICAgIDwvU3R5bGVkLkxvZ28+XHJcblxyXG4gICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInNtYWxsXCIgYXM9XCJoMlwiIGNvbG9yRGFyaz17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgeydNZW51J31cclxuICAgICAgICAgICA8L0hlYWRpbmc+XHJcblxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rcy5tYXAoKGxpbmspID0+IChcclxuICAgICAgICAgICAgICA8TWVudUxpbmsga2V5PXtsaW5rLmlkfSBsaW5rPXtsaW5rLmxpbmt9IG5ld1RhYj17bGluay5uZXdUYWJ9PlxyXG4gICAgICAgICAgICAgICAge2xpbmsudGV4dH1cclxuICAgICAgICAgICAgICA8L01lbnVMaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TdHlsZWQuTmF2PlxyXG4gICAgICA8L1N0eWxlZC5XcmFwcGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MsIERlZmF1bHRUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtUaXRsZSBhcyBIZWFkaW5nU3R5bGVzfSBmcm9tICcuLi9IZWFkaW5nL3N0eWxlcyc7XHJcblxyXG5cclxudHlwZSBNZW51QmVoYXZpb3JQcm9wcyA9IHtcclxuICBtZW51VmlzaWJsZTogYm9vbGVhbjtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXJDaGFuZ2VyID0gKFxyXG4gIG1lbnVWaXNpYmxlOiBNZW51QmVoYXZpb3JQcm9wc1snbWVudVZpc2libGUnXSxcclxuICB0aGVtZTogRGVmYXVsdFRoZW1lLFxyXG4gICk9PiBjc3NgXHJcbiAgICBsZWZ0OiAke21lbnVWaXNpYmxlID8gJzAnOictMzByZW0nfTtcclxuICAgIG92ZXJmbG93LXk6ICR7bWVudVZpc2libGU/ICdhdXRvJzogJ2hpZGRlbid9O1xyXG5cclxuICAgIEBtZWRpYSAke3RoZW1lLm1lZGlhLmx0ZU1lZGl1bX17XHJcbiAgICAgIGxlZnQ6ICR7bWVudVZpc2libGUgPyAnMCc6ICctMzJyZW0nfTtcclxuICAgIH1cclxuICBgO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdCR7KHsgdGhlbWUsbWVudVZpc2libGUgfSkgPT4gY3NzYFxyXG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMycmVtO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgJHt3cmFwcGVyQ2hhbmdlcihtZW51VmlzaWJsZSwgdGhlbWUpfVxyXG5cclxuICBgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdiA9IHN0eWxlZC5uYXZgXHJcblx0JHsoeyB0aGVtZSB9KSA9PiBjc3NgXHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgJHtIZWFkaW5nU3R5bGVzfXtcclxuICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfTtcclxuICAgIH1cclxuXHJcbiAgYH1cclxuYDtcclxuXHJcbmNvbnN0IGJ1dHRvbkNoYW5nZXIgPSAoXHJcbiAgbWVudVZpc2libGU6IE1lbnVCZWhhdmlvclByb3BzWydtZW51VmlzaWJsZSddLFxyXG50aGVtZTpEZWZhdWx0VGhlbWUsXHJcbikgPT4gY3NzYFxyXG4gIGxlZnQ6ICR7bWVudVZpc2libGUgPyAnMjZyZW0nIDogJzFyZW0nfTtcclxuICBjb2xvcjogJHttZW51VmlzaWJsZSA/IHRoZW1lLmNvbG9ycy5zZWNvbmRhcnkgOiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG5cclxuICBAbWVkaWEgJHt0aGVtZS5tZWRpYS5sdGVNZWRpdW19e1xyXG4gICAgbGVmdDogJHttZW51VmlzaWJsZSA/ICcyNnJlbScgOiAnLTAuNXJlbSd9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcclxuXHQkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgICR7SGVhZGluZ1N0eWxlc317XHJcbiAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjowO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmdzLnh4bGFyZ2V9O1xyXG5cclxuICAgICAgaW1ne1xyXG4gICAgICAgIGJvcmRlcjowLjVyZW0gc29saWQgJHt0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgT3BlbkNsb3NlID0gc3R5bGVkLmE8TWVudUJlaGF2aW9yUHJvcHM+YFxyXG5cdCR7KHsgdGhlbWUsIG1lbnVWaXNpYmxlIH0pID0+IGNzc2BcclxuICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgIHRvcDogJHt0aGVtZS5zcGFjaW5ncy5tZWRpdW19O1xyXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgIGhlaWdodDozcmVtO1xyXG4gICAgICBsZWZ0OjI2cmVtO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICR7YnV0dG9uQ2hhbmdlcihtZW51VmlzaWJsZSx0aGVtZSl9XHJcbiAgYH1cclxuYDtcclxuIiwiaW1wb3J0IHN0eWxlZCwge2NzcyxEZWZhdWx0VGhlbWV9ICAgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IHR5cGUgUG9zdENvbnRhaW5lclByb3BzID0ge1xyXG4gIHNpemU6ICdtYXgnIHwgJ2NvbnRlbnQnO1xyXG59O1xyXG5cclxuY29uc3QgcG9zdENvbnRhaW5lclN0eWxlcyA9IHtcclxuICBtYXg6ICh0aGVtZTogRGVmYXVsdFRoZW1lKSA9PiBjc3NgXHJcbiAgICBtYXgtd2lkdGg6ICR7dGhlbWUuc2l6ZXMubWF4fTtcclxuICBgLFxyXG4gIGNvbnRlbnQ6ICh0aGVtZTogRGVmYXVsdFRoZW1lKSA9PiBjc3NgXHJcbiAgICBtYXgtd2lkdGg6ICR7dGhlbWUuc2l6ZXMuY29udGVudH07XHJcbiAgYCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0Q29udGFpbmVyID0gc3R5bGVkLmRpdjxQb3N0Q29udGFpbmVyUHJvcHM+YFxyXG4keyh7IHRoZW1lLCBzaXplIH0pID0+IGNzc2BcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICBwYWRkaW5nOiAwICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9O1xyXG4gICR7cG9zdENvbnRhaW5lclN0eWxlc1tzaXplXSh0aGVtZSl9XHJcblxyXG4gYH1cclxuYDtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICB1cmw6ICdodHRwczovL3N0cmFwaS1sYW5kaW5nLXBhZ2VzLXByb2plY3QtMi5oZXJva3VhcHAuY29tJyxcbiAgc2l0ZU5hbWU6ICdOYW5hdmVyc28nLFxuICBkZWZhdWx0U2x1ZzogJ2xhbmRpbmctcGFnZScsXG4gIGdyYXBobFVSTDonaHR0cDovLzEyNy4wLjAuMToxMzM3L2dyYXBocWwnLFxufTtcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XHJcblxyXG5leHBvcnQgY29uc3QgR1JBUEhRTF9GUkFHTUVOVFMgPSBncWxgXHJcbiAgZnJhZ21lbnQgaW1hZ2Ugb24gVXBsb2FkRmlsZSB7XHJcbiAgICBpZFxyXG4gICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICB1cmxcclxuICB9XHJcbiAgZnJhZ21lbnQgY292ZXIgb24gUG9zdCB7XHJcbiAgICBjb3ZlciB7XHJcbiAgICAgIC4uLmltYWdlXHJcbiAgICB9XHJcbiAgfVxyXG4gIGZyYWdtZW50IHRhZyBvbiBUYWcge1xyXG4gICAgaWRcclxuICAgIGRpc3BsYXlOYW1lXHJcbiAgICBzbHVnXHJcbiAgfVxyXG4gIGZyYWdtZW50IGF1dGhvciBvbiBBdXRob3Ige1xyXG4gICAgaWRcclxuICAgIGRpc3BsYXlOYW1lXHJcbiAgICBzbHVnXHJcbiAgfVxyXG4gIGZyYWdtZW50IGNhdGVnb3J5IG9uIENhdGVnb3J5IHtcclxuICAgIGlkXHJcbiAgICBkaXNwbGF5TmFtZVxyXG4gICAgc2x1Z1xyXG4gIH1cclxuICBmcmFnbWVudCB0YWdzIG9uIFBvc3Qge1xyXG4gICAgdGFncyB7XHJcbiAgICAgIC4uLnRhZ1xyXG4gICAgfVxyXG4gIH1cclxuICBmcmFnbWVudCBhdXRob3JQb3N0IG9uIFBvc3Qge1xyXG4gICAgYXV0aG9yIHtcclxuICAgICAgLi4uYXV0aG9yXHJcbiAgICB9XHJcbiAgfVxyXG4gIGZyYWdtZW50IGNhdGVnb3JpZXMgb24gUG9zdCB7XHJcbiAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgLi4uY2F0ZWdvcnlcclxuICAgIH1cclxuICB9XHJcbiAgZnJhZ21lbnQgbWVudUxpbmsgb24gQ29tcG9uZW50TWVudU1lbnVMaW5rIHtcclxuICAgIGlkXHJcbiAgICBsaW5rXHJcbiAgICB0ZXh0XHJcbiAgICBuZXdUYWJcclxuICB9XHJcbiAgZnJhZ21lbnQgcG9zdCBvbiBQb3N0IHtcclxuICAgIGlkXHJcbiAgICBzbHVnXHJcbiAgICB0aXRsZVxyXG4gICAgZXhjZXJwdFxyXG4gICAgY29udGVudFxyXG4gICAgY3JlYXRlZEF0XHJcbiAgICBhbGxvd0NvbW1lbnRzXHJcbiAgICAuLi5jb3ZlclxyXG4gICAgLi4uY2F0ZWdvcmllc1xyXG4gICAgLi4udGFnc1xyXG4gICAgLi4uYXV0aG9yUG9zdFxyXG4gIH1cclxuICBmcmFnbWVudCBzZXR0aW5ncyBvbiBTZXR0aW5ncyB7XHJcbiAgICBpZFxyXG4gICAgYmxvZ05hbWVcclxuICAgIGRlc2NyaXB0aW9uXHJcbiAgICBsb2dvIHtcclxuICAgICAgLi4uaW1hZ2VcclxuICAgIH1cclxuICAgIG1lbnVMaW5rIHtcclxuICAgICAgLi4ubWVudUxpbmtcclxuICAgIH1cclxuICAgIHRleHRcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XHJcbmltcG9ydCB7IEdSQVBIUUxfRlJBR01FTlRTIH0gZnJvbSAnLi9mcmFnbWVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdSQVBIUUxfUVVFUlkgPSBncWxgXHJcbiAgJHtHUkFQSFFMX0ZSQUdNRU5UU31cclxuICBxdWVyeSBHRVRfUE9TVFMoXHJcbiAgICAkY2F0ZWdvcnlTbHVnOiBTdHJpbmdcclxuICAgICRwb3N0U2x1ZzogU3RyaW5nXHJcbiAgICAkcG9zdFNlYXJjaDogU3RyaW5nXHJcbiAgICAkYXV0aG9yU2x1ZzogU3RyaW5nXHJcbiAgICAkdGFnU2x1ZzogU3RyaW5nXHJcbiAgICAkc29ydDogU3RyaW5nID0gXCJjcmVhdGVkQXQ6ZGVzY1wiXHJcbiAgICAkc3RhcnQ6IEludCA9IDBcclxuICAgICRsaW1pdDogSW50ID0gMTBcclxuICApIHtcclxuICAgIHNldHRpbmcge1xyXG4gICAgICAuLi5zZXR0aW5nc1xyXG4gICAgfVxyXG4gICAgcG9zdHMoXHJcbiAgICAgIHN0YXJ0OiAkc3RhcnRcclxuICAgICAgbGltaXQ6ICRsaW1pdFxyXG4gICAgICBzb3J0OiAkc29ydFxyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIHNsdWc6ICRwb3N0U2x1Z1xyXG4gICAgICAgIHRpdGxlX2NvbnRhaW5zOiAkcG9zdFNlYXJjaFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IHsgc2x1ZzogJGNhdGVnb3J5U2x1ZyB9XHJcbiAgICAgICAgYXV0aG9yOiB7IHNsdWc6ICRhdXRob3JTbHVnIH1cclxuICAgICAgICB0YWdzOiB7IHNsdWc6ICR0YWdTbHVnIH1cclxuICAgICAgfVxyXG4gICAgKSB7XHJcbiAgICAgIC4uLnBvc3RcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgR1JBUEhRTF9RVUVSWV9DQVRFR09SWSA9IGdxbGBcclxuICBxdWVyeSBHRVRfQ0FURUdPUklFU3tcclxuICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICBfaWRcclxuICAgICAgZGlzcGxheU5hbWVcclxuICAgICAgc2x1Z1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IHt1c2VFZmZlY3QsdXNlU3RhdGUsUmVhY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgeyBHb1RvcCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR29Ub3AnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL01lbnUnO1xyXG5pbXBvcnQgeyBTZXR0aW5nc1N0cmFwaSB9IGZyb20gJy4uLy4uL3NoYXJlZC10eXBlcy9zZXR0aW5ncy1zdHJhcGknO1xyXG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXJ9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuaW1wb3J0IHtsb2FkQ2F0ZWdvcmllc30gZnJvbSAnLi4vLi4vYXBpL2xvYWQtY2F0ZWdvcmllcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgdHlwZSBCYXNlVGVtcGxhdGVQcm9wcyA9IHtcclxuICBzZXR0aW5nczogU2V0dGluZ3NTdHJhcGk7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBCYXNlVGVtcGxhdGUgPSAoIHsgc2V0dGluZ3MsIGNoaWxkcmVuIH0gOiBCYXNlVGVtcGxhdGVQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtzdGF0ZUNhdGVnb3JpZXMsIHNldFN0YXRlQ2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgc2l0ZSA9IHJvdXRlci5wYXRobmFtZTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbG9hZENhdGVnb3JpZXMoKS50aGVuKHZhbCA9PiB7XHJcbiAgICAgICAgc2V0U3RhdGVDYXRlZ29yaWVzKHZhbCk7XHJcbiAgICAgIH0pO1xyXG4gIH0sW10pO1xyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkLldyYXBwZXI+XHJcbiAgICAgIDxNZW51IGxpbmtzPXtzZXR0aW5ncy5tZW51TGlua31cclxuICAgICAgICAgIGJsb2dOYW1lPXtzZXR0aW5ncy5ibG9nTmFtZX1cclxuICAgICAgICAgIGxvZ289e3NldHRpbmdzLmxvZ29bMF0udXJsfVxyXG4gICAgICAvPlxyXG4gICAgIDxTdHlsZWQuSGVhZGVyQ29udGFpbmVyPlxyXG4gICAgICAgIDxIZWFkZXJcclxuICAgICAgICBibG9nTmFtZSA9IHtzZXR0aW5ncy5ibG9nTmFtZX1cclxuICAgICAgICBkZXNjcmlwdGlvbj17c2V0dGluZ3MuZGVzY3JpcHRpb259XHJcbiAgICAgICAgbG9nbyA9e3NldHRpbmdzLmxvZ29bMF0udXJsfVxyXG4gICAgICAgIHNob3dUZXh0PXt0cnVlfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxTdHlsZWQuTWVudVNlYXJjaD5cclxuICAgICAgICAgIDxTdHlsZWQuU2VhcmNoQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIHtzdGF0ZUNhdGVnb3JpZXMubGVuZ3RoPiAwICYmIHN0YXRlQ2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17YGFydGljbGUtbWV0YS1jYXQtJHtjYXRlZ29yeS5faWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3twYXRobmFtZTogXCIvY2F0ZWdvcnlcIiwgcXVlcnk6IHsgc2x1ZzogY2F0ZWdvcnkuc2x1Z319fSBhcz17YC9jYXRlZ29yeS8ke2NhdGVnb3J5LnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5MaW5rTWVudUNhdGVnb3J5PiB7Y2F0ZWdvcnkuZGlzcGxheU5hbWV9IDwvU3R5bGVkLkxpbmtNZW51Q2F0ZWdvcnk+XHJcbiAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvc2VhcmNoL1wiIG1ldGhvZD1cIkdFVFwiPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZC5TZWFyY2hJbnB1dCB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJCdXNjYXIgcG9yIHBvc3RzLi4uXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInFcIlxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JvdXRlci5xdWVyeS5xfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgPC9TdHlsZWQuU2VhcmNoQ29udGFpbmVyPlxyXG4gICAgICAgIDwvU3R5bGVkLk1lbnVTZWFyY2g+XHJcbiAgICAgPC9TdHlsZWQuSGVhZGVyQ29udGFpbmVyPlxyXG5cclxuICAgICA8U3R5bGVkLkNvbnRlbnRDb250YWluZXI+XHJcblxyXG4gICAgIHtjaGlsZHJlbn0gPC9TdHlsZWQuQ29udGVudENvbnRhaW5lcj5cclxuXHJcbiAgICAgPFN0eWxlZC5Gb290ZXJDb250YWluZXI+XHJcbiAgICAgICAgPEZvb3RlciBodG1sPXtzZXR0aW5ncy50ZXh0fS8+XHJcbiAgICAgPC9TdHlsZWQuRm9vdGVyQ29udGFpbmVyPlxyXG5cclxuICAgIDxHb1RvcCAvPlxyXG4gICAgPC9TdHlsZWQuV3JhcHBlcj5cclxuXHJcbiAgKTtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcbiAgYH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuJHsoeyB0aGVtZSB9KSA9PiBjc3NgXHJcbiAgICBtYXgtd2lkdGg6MTIwcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MueGh1Z2V9O1xyXG4gIGB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuJHsoeyB0aGVtZSB9KSA9PiBjc3NgXHJcbiAgICBtYXgtd2lkdGg6MTIwcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9O1xyXG4gIGB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6MTIwcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYFxyXG5leHBvcnQgY29uc3QgTWVudVNlYXJjaCA9IHN0eWxlZC5kaXZgXHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xyXG5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZGlzcGxheTpib2NrO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHdpZHRoOiAyMGVtO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICBAbWVkaWEgJHt0aGVtZS5tZWRpYS5sdGVNZWRpdW19e1xyXG4gICAgICAuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMTRweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbToyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pbnB1dFt0eXBlPXRleHRdIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYH1cclxuXHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3QgTGlua01lbnVDYXRlZ29yeSA9IHN0eWxlZC5hYFxyXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udC5zaXplcy5zbWFsbH07XHJcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmdzLnNtYWxsfTtcclxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMC43NnJlbTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgaGVpZ2h0OiAwLjJyZW07XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnNlY29uZGFyeX07XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyOjphZnRlciB7XHJcbiAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICBgfVxyXG5gO1xyXG4iLCJpbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQge1NldHRpbmdzU3RyYXBpIH0gZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVzL3NldHRpbmdzLXN0cmFwaSc7XHJcbmltcG9ydCB7QmFzZVRlbXBsYXRlIH0gZnJvbSAnLi4vQmFzZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBIdG1sQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IdG1sQ29udGVudCc7XHJcbmltcG9ydCB7IFBvc3RDb250YWluZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3RDb250YWluZXInO1xyXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkaW5nJztcclxuXHJcbmV4cG9ydCB0eXBlIE90aGVyUGFnZXNUZW1wbGF0ZVByb3BzID0ge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIHNldHRpbmdzOiBTZXR0aW5nc1N0cmFwaTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBPdGhlclBhZ2VzVGVtcGxhdGUgPSAoeyB0aXRsZSwgY29udGVudCwgc2V0dGluZ3MgfTogT3RoZXJQYWdlc1RlbXBsYXRlUHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGhhbmRsZUJhY2sgPSBhc3luYygpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJhc2VUZW1wbGF0ZSBzZXR0aW5ncz17c2V0dGluZ3N9PlxyXG4gICAgICA8U3R5bGVkLldyYXBwZXI+XHJcbiAgICAgICAgPFBvc3RDb250YWluZXIgc2l6ZT1cIm1heFwiPlxyXG4gICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cImJpZ1wiPiB7dGl0bGV9IDwvSGVhZGluZz5cclxuICAgICAgICA8L1Bvc3RDb250YWluZXI+XHJcbiAgICAgICAgPFBvc3RDb250YWluZXIgc2l6ZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgIDxIdG1sQ29tcG9uZW50IGh0bWw9e2NvbnRlbnR9IC8+XHJcbiAgICAgICAgPC9Qb3N0Q29udGFpbmVyPlxyXG5cclxuICAgIDwvU3R5bGVkLldyYXBwZXI+XHJcblxyXG5cclxuICAgICAgPFN0eWxlZC5CdXR0b25Db250YWluZXI+XHJcbiAgICAgICAgPFN0eWxlZC5CdXR0b24gb25DbGljaz17aGFuZGxlQmFja30+XHJcbiAgICAgICAgICB7J1ZvbHRhcid9XHJcbiAgICAgICAgPC9TdHlsZWQuQnV0dG9uPlxyXG4gICAgICA8L1N0eWxlZC5CdXR0b25Db250YWluZXI+XHJcbiAgICA8L0Jhc2VUZW1wbGF0ZT5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdFxyXG4gICAge1xyXG5cclxuICAgICAgYWJvdXQ6IHtcclxuICAgICAgICB0aXRsZTogJ1NvYnJlIE1pbScsXHJcbiAgICAgICAgY29udGVudDogJzxwPk1lIGNoYW1vIE5hdGhhbmEuJm5ic3A7PC9wPiA8cD5Tb3UgdW1hIHBlc3NvYSBjdXJpb3NhIGUgcXVlIGFkb3JhIG5vdmFzIGlkZWlhcy4gQW8gbWVzbW8gdGVtcG8sIG1lIHByZW9jdXBvIG11aXRvIGNvbSBwZXNzb2FzLiBBY3JlZGl0byBxdWUgdG9kbyBtdW5kbyB0ZW0gc3VhIGZvcm1hIGRlIGZhemVyIGEgZGlmZXJlbiZjY2VkaWw7YSBuYSB2aWRhIGRhcyBwZXNzb2FzLCBlbnQmYXRpbGRlO28gY29tIG1ldXMgcHJvamV0b3MgdGVudG8gZmF6ZXIgbyBtJmFhY3V0ZTt4aW1vIGRpc3NvLjwvcD4gPHA+RW1ib3JhIGJvYSBwYXJ0ZSBkb3MgbWV1cyBwcm9qZXRvcyBlc3QmYXRpbGRlO28gcmVsYWNpb25hZG9zIGNvbSBlc2NyZXZlciwgYSBtaW5oYSBmb3JtYSZjY2VkaWw7JmF0aWxkZTtvICZlYWN1dGU7IENpJmVjaXJjO25jaWFzIGRhIENvbXB1dGEmY2NlZGlsOyZhdGlsZGU7by4gTiZhdGlsZGU7byBtZSBpbXBvcnRvIGVtIG1lIGF2ZW50dXJhciBlbSAmYWFjdXRlO3JlYSBkaWZlcmVudGUgZGVzc2EsIG1hcyB0ZW5obyB1bWEgcGFpeCZhdGlsZGU7byBwb3IgbiZ1YWN1dGU7bWVyb3MgZSBwcm9ncmFtYXIgdGFtYiZlYWN1dGU7bS48L3A+IDxwPkZpeiBlc3BlY2lhbGl6YSZjY2VkaWw7JmF0aWxkZTtvIGUgbWVzdHJhZG8gbmEgJmFhY3V0ZTtyZWEuIFR1ZG8gaXNzbyBlbSB1bml2ZXJzaWRhZGUgcCZ1YWN1dGU7YmxpY2EsIG8gcXVlIHNpZ25pZmljYSBxdWUgZXUgc2VtcHJlIG1lIGVzZm9yY2VpIG11aXRvIHBhcmEgYWxjYW4mY2NlZGlsO2FyIG9zIG1ldXMgc29uaG9zLiZuYnNwOzwvcD4gPHA+PGJyPjwvcD4gPHA+PHN0cm9uZz5CbG9nIGRhIE5hbmE8L3N0cm9uZz48L3A+IDxwPkVzcGVybyBxdWUgZXNzZSBwZXF1ZW5vIGJsb2cgcG9zc2EgYWp1ZGFyIG91dHJhcyBwZXNzb2FzIGVuY29udHJhciBjb250ZSZ1YWN1dGU7ZG8gcXVlIGFncmVndWUgYWxnbyBhIGVsYXMuIFBlbnNlaSBlbSBmb2NhciBzJm9hY3V0ZTsgZW0gcHJvZ3JhbWEmY2NlZGlsOyZhdGlsZGU7bywgbWFzIGRhJmlhY3V0ZTsgcGVuc2VpIHVtIHBvdWNvIG1haXMgZSByZXNvbHZpIGZvY2FyIGVtIHR1ZG8gcXVlIGFjaGFyIG5vIGNhbWluaG8gcXVlIGV1IHBlcmNvcnJlci4gQWZpbmFsIGEgdmlkYSAmZWFjdXRlOyBmZWl0byBkZSB0YW50YXMgY29pc2FzLCBwb3JxdWUgbGltaXRhciBxdWFuZG8gcG9kZW1vcyBleHBhbmRpcj88L3A+IDxwPjxicj48L3A+IDxwPjxzdHJvbmc+Q29udGF0bzwvc3Ryb25nPjwvcD4gPHA+Q2FzbyBwcmVjaXNlIGVudHJhciBlbSBjb250YXRvLCBtZSBtYW5kZSB1bSBlLW1haWw6IG5hdGhhbmFmYWNpb25AZ21haWwuY29tPC9wPiA8cD48YnI+PC9wPidcclxuICAgICAgfSxcclxuICAgICAgY29udGFjdDoge1xyXG4gICAgICAgIHRpdGxlOiAnQ29udGF0bycsXHJcbiAgICAgICAgY29udGVudDogJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIDxicj48YnI+IExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeXMgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLidcclxuICAgICAgfSxcclxuICAgICAgZ2Fyb3RhTm9Db250cm9sZToge1xyXG4gICAgICAgIHRpdGxlOiAnUHJvamV0bzogR2Fyb3RhIG5vIENvbnRyb2xlJyxcclxuICAgICAgICBjb250ZW50OiAnPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPk8gc2l0ZSA8YSBocmVmPVwiaHR0cHM6Ly9nYXJvdGFub2NvbnRyb2xlLmNvbS5ici9cIj5HYXJvdGEgbm8gQ29udHJvbGU8L2E+ICZlYWN1dGU7IHVtIHNpdGUgaW5kZXBlbmRlbnRlIHF1ZSBzdXJnaXUgZW0gMjAyMCBjb20gbyBvYmpldGl2byBkZSBhcHJlc2VudGFyIGEgdmlzJmF0aWxkZTtvIGRlIHVtYSBnYXJvdGEgZ2FtZXIgc29icmUgbyBtdW5kbyBkb3Mgam9nb3MuPC9wPiA8cCBzdHlsZT1cInRleHQtYWxpZ246IGp1c3RpZnk7XCI+QSBtYWlvcmlhIGRvIHAmdWFjdXRlO2JsaWNvIGdhbWVyIGhvamUgJmVhY3V0ZTsgY29uc3RpdHUmaWFjdXRlO2RvIGRlIGhvbWVucywgZW50JmF0aWxkZTtvLCBlbWJvcmEgbyBzaXRlIHRlbmhhIHNpZG8gZmVpdG8gcGFyYSB0b2RhcyBhcyBwZXNzb2FzLCB1bSBkb3MgcHJpbmNpcGFpcyBvYmpldGl2b3MgJmVhY3V0ZTsgZmF6ZXIgY29tIHF1ZSBtYWlzIG11bGhlcmVzIHBvc3NhbSB2aXIgYSBnb3N0YXIgZG8gYXNzdW50bywgb3UgYXQmZWFjdXRlOyBtZXNtbyBxdWUgdGVuaGFtIG1haXMgY29yYWdlbSBwYXJhIGV4cG9yIHN1YXMgb3Bpbmkmb3RpbGRlO2VzIHNvYnJlLjwvcD4gPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPkNvbSBhcGVuYXMgdW0gYW5vLCBub3NzYSBlcXVpcGUgaiZhYWN1dGU7IHRlbTE0IHBlc3NvYXMgZSByZWNlYmVtb3MgYXBvaW8gZGUgZW1wcmVzYXMgZ3JhbmRlcyBlIHBlcXVlbmFzIHBhcmEgY29uc2VndWlyIGpvZ29zIHBhcmEgYW4mYWFjdXRlO2xpc2VzIGUgYXNzaW0gbWFudGVyIG8gc2l0ZS48L3A+IDxwIHN0eWxlPVwidGV4dC1hbGlnbjoganVzdGlmeTtcIj5Wb2MmZWNpcmM7IGVuY29udHJhciZhYWN1dGU7IG9zIHNlZ3VpbnRlcyBjb250ZSZ1YWN1dGU7ZG9zIG5vIHNpdGU6PC9wPiA8dWw+IDxsaSBzdHlsZT1cInRleHQtYWxpZ246anVzdGlmeTtcIj5BbiZhYWN1dGU7bGlzZXM6IHBhcmEgYWp1ZGFyIG8gbGVpdG9yIGEgY29uaGVjZXIgbm92b3Mgam9nb3MsIG91IHNhYmVyIHNlIHVtIGpvZ28gcG9kZSBzZXIgZG8gc2V1IGFncmFkbywgb3UgbiZhdGlsZGU7by4gRSBwYXJhIGFqdWRhciBwcmluY2lwYWxtZW50ZSBuYSB2aXNpYmlsaWRhZGUgZGUgam9nb3MgaW5kaWVzLjwvbGk+IDxsaSBzdHlsZT1cInRleHQtYWxpZ246IGp1c3RpZnk7XCI+TGlzdGFzOiB1bWEgYW4mYWFjdXRlO2xpc2Ugc29icmUgYWxndW0gYXNzdW50bywgcXVlIGdlcmEgdW1hIGxpc3RhIGNvbSBvIG9iamV0aXZvIGRlIGNsYXNzaWZpY2FyIGJhc2VhZG8gZW0gYWxndW0gY3JpdCZlYWN1dGU7cmlvLiBDb20gaXNzbywgcXVlcm8gaW5jZW50aXZhciBvIGxlaXRvciBhIHBlbnNhciBxdWFsIGEgY2xhc3NpZmljYSZjY2VkaWw7JmF0aWxkZTtvIHF1ZSBlbGUgbWVzbW8gZmFyaWEgZSBnZXJhciB1bWEgcmVmbGV4JmF0aWxkZTtvLCBvdSBkaXNjdXNzJmF0aWxkZTtvIHNvYnJlIG8gYXNzdW50bzwvbGk+IDxsaSBzdHlsZT1cInRleHQtYWxpZ246IGp1c3RpZnk7XCI+Q3VyaW9zaWRhZGVzOiBzJmF0aWxkZTtvIGVzY29saGlkb3MgYXNzdW50b3MgaW5jb211bnMgcGFyYSBzZXJlbSBhYm9yZGFkb3MgZSBpbnN0aWdhciBhIGN1cmlvc2lkYWRlIGRvIGxlaXRvci4gRW0gbXVpdG9zIGNhc29zLCBvcyBhcnRpZ29zIHNlbGVjaW9uYWRvcyBzJmF0aWxkZTtvIGNpZW50JmlhY3V0ZTtmaWNvcywgcGFyYSBvIGxlaXRvciBwZXJjZWJlciBxdWUgYSBpbXBvcnQmYWNpcmM7bmNpYSBkb3Mgam9nb3MgZXN0JmF0aWxkZTtvIGVtIHRvZG9zIG9zIGx1Z2FyZXMuPC9saT4gPGxpIHN0eWxlPVwidGV4dC1hbGlnbjoganVzdGlmeTtcIj5FbnRyZXZpc3RhOiBzJmF0aWxkZTtvIGZlaXRhcyBjb20gcHJvZmlzc2lvbmFpcyBkYSAmYWFjdXRlO3JlYSBkZSBqb2dvcyBwYXJhIGRpdnVsZ2FyIHRyYWJhbGhvcyBtZW5vcyBjb25oZWNpZG9zLiAmRWFjdXRlOyB1bWEgb3BvcnR1bmlkYWRlIGRlIGZhemVyIG9zIHVzdSZhYWN1dGU7cmlvcyBzZSBpbnRlcmVzc2FyZW0gcG9yIGpvZ29zIGRlIG1lbm9yIG9yJmNjZWRpbDthbWVudG8uIEVzc2Ugc2l0ZSBxdWVyIGFwb2lhciBvcyBqb2dvcyBpbmRpZXMsIHByaW5jaXBhbG1lbnRlIG9zIGJyYXNpbGVpcm9zLjwvbGk+IDwvdWw+J1xyXG4gICAgICB9LFxyXG4gICAgICB2aW1MaVZlbmNpOiB7XHJcbiAgICAgICAgdGl0bGU6ICdQcm9qZXRvOiBWaW0gTGkgVmVuY2knLFxyXG4gICAgICAgIGNvbnRlbnQ6ICc8cCBzdHlsZT1cInRleHQtYWxpZ246IGp1c3RpZnk7XCI+RXN0ZSBwcm9qZXRvIGFpbmRhIGVzdCZhYWN1dGU7IGVtIGRlc2Vudm9sdmltZW50bywgb3Ugc2VqYSwgZXN0JmFhY3V0ZTsgbmFzIGZhc2VzIG9uZGUgZXN0b3UgZGV0ZXJtaW5hbmRvIHF1YWlzIG9iamV0aXZvcyBxdWVybyBhbGNhbiZjY2VkaWw7YXIgY29tIGVsZS48L3A+IDxwIHN0eWxlPVwidGV4dC1hbGlnbjoganVzdGlmeTtcIj5Db21vIHNlbXByZSBnb3N0ZWkgZGUgbGVyLCBxdWVyaWEgY29uc2VndWlyIHVtYSBmb3JtYSBkZSBhanVkYXIgb3V0cmFzIHBlc3NvYXMgYSB0ZXJlbSBvIGdvc3RvIHBlbGEgbGVpdHVyYSBlIG1haXMgYWNlc3NvIGEgbGl2cm9zLjwvcD4gPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPlBhcmEgaXNzbywgbyBxdWUgdGVuaG8gZGUgaWRlaWFzIGluaWNpYWlzIHNlcmlhOjwvcD4gPHVsPiA8bGkgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPkVudHJldmlzdGFzIGNvbSBhdXRvcmVzIG5hY2lvbmFpcyBwYXJhIGVudGVuZGVyIGNvbW8gZnVuY2lvbmEgbyBtZXJjYWRvIGF0dWFsIGUgYWp1ZGFyIG5vdm9zIGVzY3JpdG9yZXMgYSBhbGNhbiZjY2VkaWw7YXIgc2V1cyBzb25ob3MuPC9saT4gIDxsaSBzdHlsZT1cInRleHQtYWxpZ246IGp1c3RpZnk7XCI+RGl2dWxnYSZjY2VkaWw7JmF0aWxkZTtvIGRlIHYmYWFjdXRlO3Jpb3MgdGlwb3MgZGUgbGl2cm9zLCBpbmNsdXNpdmUgb3MgaW5kZXBlbmRlbnRlcy48L2xpPiA8bGkgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPlRyYXplciBhcyBwcmluY2lwYWlzIG5vdmlkYWRlcyBsaXRlciZhYWN1dGU7cmlhcywgaW5jbHVzaXZlIGluZGVwZW5kZW50ZXMuPC9saT4gIDxsaSBzdHlsZT1cInRleHQtYWxpZ246IGp1c3RpZnk7XCI+UmVzZW5oYXMgZGUgbGl2cm9zIGxpZG9zIHBlbG9zIGludGVncmFudGVzLjwvbGk+ICA8bGkgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPkFycmVjYWRhciBsaXZyb3MgcGFyYSBkaXN0cmlidWlyIGVudHJlIGNvbXVuaWRhZGUgZGUgYmFpeGEgcmVuZGEuIENhc28gZXUgcmVjZWJhIGxpdnJvcyBkZSBlZGl0b3JhcyBwYXJhIGRpdnVsZ2FyIGUgZmF6ZXIgcmVzZW5oYXMsIG1lIGNvbXByb21ldG8gYSBkb2EtbG9zIGFwJm9hY3V0ZTtzIGEgbGVpdHVyYSBlIGRpdnVsZ2EmY2NlZGlsOyZhdGlsZGU7by48L2xpPiA8L3VsPidcclxuICAgICAgfVxyXG5cclxuICAgIH0gYXMgRGF0YTtcclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7VGl0bGUgYXMgSGVhZGluZ1N0eWxlc30gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkaW5nL3N0eWxlcydcclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdCR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MueGxhcmdlfTtcclxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MueGxhcmdlfTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAke3RoZW1lLmNvbG9ycy5tZWRpdW1HcmF5fTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgJHtIZWFkaW5nU3R5bGVzfXtcclxuICAgICAgbWFyZ2luOjVyZW07XHJcblxyXG5cdFx0XHRwYWRkaW5nLXRvcDogJHt0aGVtZS5zcGFjaW5ncy54bGFyZ2V9O1xyXG5cdFx0XHRtYXJnaW4tdG9wOiR7dGhlbWUuc3BhY2luZ3MueHh4aHVnZX07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MubWVkaXVtfTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG5cdFx0YXtcclxuICBcdFx0Y29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmtlckdyYXl9O1xyXG5cdFx0fVxyXG5cclxuICBgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXHJcbiAgICBwYWRkaW5nOiAwICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9O1xyXG4gICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfSAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZ3Muc21hbGx9ICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmRhcmtlckdyYXl9O1xyXG4gICAgfVxyXG4gIGB9XHJcbmA7XHJcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=