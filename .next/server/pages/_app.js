(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 639:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
;// CONCATENATED MODULE: ./src/styles/theme.ts
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
;// CONCATENATED MODULE: ./src/styles/global-styles.ts

const GlobalStyles = external_styled_components_.createGlobalStyle`
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
;// CONCATENATED MODULE: ./src/pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
    theme: theme,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(GlobalStyles, {})]
  });
}

/* harmony default export */ var _app = (MyApp);

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
var __webpack_exports__ = (__webpack_exec__(639));
module.exports = __webpack_exports__;

})();