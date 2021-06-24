(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./src/styles/theme.ts");
/* harmony import */ var _styles_global_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global-styles */ "./src/styles/global-styles.ts");

var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.theme,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global_styles__WEBPACK_IMPORTED_MODULE_3__.GlobalStyles, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/styles/global-styles.ts":
/*!*************************************!*\
  !*** ./src/styles/global-styles.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalStyles": function() { return /* binding */ GlobalStyles; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({
  theme
}) => theme.font.family.default};
    color: ${({
  theme
}) => theme.colors.darkText}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({
  theme
}) => theme.font.family.default};
    margin: ${({
  theme
}) => theme.spacings.large} 0;
    font-weight:800;
    color: ${({
  theme
}) => theme.colors.primary}
  }

  p {
    margin: ${({
  theme
}) => theme.spacings.medium} 0;
  }

  ul, ol {
    margin: ${({
  theme
}) => theme.spacings.medium};
    padding: ${({
  theme
}) => theme.spacings.medium};
  }

  a {
    color: ${({
  theme
}) => theme.colors.secondary};
  }

  .table {
    width: 100%;
    overflow-y: auto;
  }
`;

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "theme": function() { return /* binding */ theme; }
/* harmony export */ });
const theme = {
  colors: {
    primary: '#ff2e6f',
    secondary: '#FFFFFF',
    darkText: '#333333',
    white: '#FFFFFF',
    mediumGray: '#DDDDDD',
    darkerGray: '#AAAAAA'
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif"
    },
    sizes: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
      xxhuge: '7.2rem',
      xxxhuge: '8.0rem'
    }
  },
  media: {
    lteMedium: '(max-width: 768px)',
    lteSmall: '(max-width: 360px)'
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
    xxhuge: '7.2rem',
    xxxhuge: '8.0rem'
  },
  sizes: {
    max: '96rem',
    content: '80rem'
  }
};

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zdHlsZXMvZ2xvYmFsLXN0eWxlcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zdHlsZXMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiZm9udCIsImZhbWlseSIsImRlZmF1bHQiLCJjb2xvcnMiLCJkYXJrVGV4dCIsInNwYWNpbmdzIiwibGFyZ2UiLCJwcmltYXJ5IiwibWVkaXVtIiwic2Vjb25kYXJ5Iiwid2hpdGUiLCJtZWRpdW1HcmF5IiwiZGFya2VyR3JheSIsInNpemVzIiwieHNtYWxsIiwic21hbGwiLCJ4bGFyZ2UiLCJ4eGxhcmdlIiwiaHVnZSIsInhodWdlIiwieHhodWdlIiwieHh4aHVnZSIsIm1lZGlhIiwibHRlTWVkaXVtIiwibHRlU21hbGwiLCJtYXgiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBbUQ7QUFDakQsc0JBQ0UsOERBQUMsNERBQUQ7QUFBZSxTQUFLLEVBQUVDLGdEQUF0QjtBQUFBLDRCQUNFLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FB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IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcblxuaW1wb3J0IHsgR2xvYmFsU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL2dsb2JhbC1zdHlsZXMnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxHbG9iYWxTdHlsZXMgLz5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogNjIuNSU7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIH1cblxuICBib2R5IHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250LmZhbWlseS5kZWZhdWx0fTtcbiAgICBjb2xvcjogJHsoe3RoZW1lfSkgPT4gdGhlbWUuY29sb3JzLmRhcmtUZXh0fVxuICB9XG5cbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgZm9udC1mYW1pbHk6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udC5mYW1pbHkuZGVmYXVsdH07XG4gICAgbWFyZ2luOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmdzLmxhcmdlfSAwO1xuICAgIGZvbnQtd2VpZ2h0OjgwMDtcbiAgICBjb2xvcjogJHsoe3RoZW1lfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZ3MubWVkaXVtfSAwO1xuICB9XG5cbiAgdWwsIG9sIHtcbiAgICBtYXJnaW46ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZ3MubWVkaXVtfTtcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmdzLm1lZGl1bX07XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcbiAgfVxuXG4gIC50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuYDtcbiIsImV4cG9ydCBjb25zdCB0aGVtZSA9IHtcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogJyNmZjJlNmYnLFxuICAgIHNlY29uZGFyeTogJyNGRkZGRkYnLFxuICAgIGRhcmtUZXh0OiAnIzMzMzMzMycsXG4gICAgd2hpdGU6ICcjRkZGRkZGJyxcbiAgICBtZWRpdW1HcmF5OiAnI0RERERERCcsXG4gICAgZGFya2VyR3JheTogJyNBQUFBQUEnLFxuICB9LFxuICBmb250OiB7XG4gICAgZmFtaWx5OiB7XG4gICAgICBkZWZhdWx0OiBcIidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXCIsXG4gICAgfSxcbiAgICBzaXplczoge1xuICAgICAgeHNtYWxsOiAnOHJlbScsXG4gICAgICBzbWFsbDogJzEuNnJlbScsXG4gICAgICBtZWRpdW06ICcyLjRyZW0nLFxuICAgICAgbGFyZ2U6ICczLjJyZW0nLFxuICAgICAgeGxhcmdlOiAnNC4wcmVtJyxcbiAgICAgIHh4bGFyZ2U6ICc0LjhyZW0nLFxuICAgICAgaHVnZTogJzUuNnJlbScsXG4gICAgICB4aHVnZTogJzYuNHJlbScsXG4gICAgICB4eGh1Z2U6ICc3LjJyZW0nLFxuICAgICAgeHh4aHVnZTogJzguMHJlbScsXG4gICAgfSxcbiAgfSxcbiAgbWVkaWE6IHtcbiAgICBsdGVNZWRpdW06ICcobWF4LXdpZHRoOiA3NjhweCknLFxuICAgIGx0ZVNtYWxsOiAnKG1heC13aWR0aDogMzYwcHgpJyxcbiAgfSxcbiAgc3BhY2luZ3M6IHtcbiAgICB4c21hbGw6ICc4cmVtJyxcbiAgICBzbWFsbDogJzEuNnJlbScsXG4gICAgbWVkaXVtOiAnMi40cmVtJyxcbiAgICBsYXJnZTogJzMuMnJlbScsXG4gICAgeGxhcmdlOiAnNC4wcmVtJyxcbiAgICB4eGxhcmdlOiAnNC44cmVtJyxcbiAgICBodWdlOiAnNS42cmVtJyxcbiAgICB4aHVnZTogJzYuNHJlbScsXG4gICAgeHhodWdlOiAnNy4ycmVtJyxcbiAgICB4eHhodWdlOiAnOC4wcmVtJyxcbiAgfSxcbiAgc2l6ZXM6IHtcbiAgICBtYXg6Jzk2cmVtJyxcbiAgICBjb250ZW50Oic4MHJlbScsXG4gIH1cbn0gYXMgY29uc3Q7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9