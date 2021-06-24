self["webpackHotUpdate_N_E"]("pages/vimlivenci",{

/***/ "./src/pages/vimlivenci.tsx":
/*!**********************************!*\
  !*** ./src/pages/vimlivenci.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _templates_OtherPagesTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/OtherPagesTemplate */ "./src/templates/OtherPagesTemplate/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\pages\\vimlivenci.tsx",
    _s = $RefreshSig$();




var __N_SSG = true;
function Index(_ref) {
  _s();

  var post = _ref.post,
      setting = _ref.setting,
      variables = _ref.variables;
  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Pesquisa: ", router.query.q, " - ", setting.blogName]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates_OtherPagesTemplate__WEBPACK_IMPORTED_MODULE_3__.OtherPagesTemplate, {
      settings: setting
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(Index, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Index;

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/templates/OtherPagesTemplate/index.tsx":
/*!****************************************************!*\
  !*** ./src/templates/OtherPagesTemplate/index.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherPagesTemplate": function() { return /* binding */ OtherPagesTemplate; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Acer_Desktop_ReactProjetos_newBlog_Pequeno_Blog_React_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Acer_Desktop_ReactProjetos_newBlog_Pequeno_Blog_React_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Acer_Desktop_ReactProjetos_newBlog_Pequeno_Blog_React_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Acer_Desktop_ReactProjetos_newBlog_Pequeno_Blog_React_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/templates/OtherPagesTemplate/styles.ts");
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Base */ "./src/templates/Base/index.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_HtmlContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/HtmlContent */ "./src/components/HtmlContent/index.tsx");
/* harmony import */ var _components_PostContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PostContainer */ "./src/components/PostContainer/index.ts");
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Heading */ "./src/components/Heading/index.tsx");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mock */ "./src/templates/OtherPagesTemplate/mock.ts");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\templates\\OtherPagesTemplate\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var OtherPagesTemplate = function OtherPagesTemplate(_ref) {
  _s();

  var settings = _ref.settings;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  var handleBack = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Acer_Desktop_ReactProjetos_newBlog_Pequeno_Blog_React_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Acer_Desktop_ReactProjetos_newBlog_Pequeno_Blog_React_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return C_Users_Acer_Desktop_ReactProjetos_newBlog_Pequeno_Blog_React_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              router.push("/");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleBack() {
      return _ref2.apply(this, arguments);
    };
  }();

  console.log("Mock");
  console.log(_mock__WEBPACK_IMPORTED_MODULE_9__.default);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Base__WEBPACK_IMPORTED_MODULE_4__.BaseTemplate, {
    settings: settings,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostContainer__WEBPACK_IMPORTED_MODULE_7__.PostContainer, {
        size: "max",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Heading__WEBPACK_IMPORTED_MODULE_8__.Heading, {
          size: "big",
          children: [" ", _mock__WEBPACK_IMPORTED_MODULE_9__.default.title, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostContainer__WEBPACK_IMPORTED_MODULE_7__.PostContainer, {
        size: "content",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HtmlContent__WEBPACK_IMPORTED_MODULE_6__.HtmlComponent, {
          html: _mock__WEBPACK_IMPORTED_MODULE_9__.default.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.ButtonContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: handleBack,
        children: 'Voltar'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, _this);
};

_s(OtherPagesTemplate, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = OtherPagesTemplate;

var _c;

$RefreshReg$(_c, "OtherPagesTemplate");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/templates/OtherPagesTemplate/mock.ts":
/*!**************************************************!*\
  !*** ./src/templates/OtherPagesTemplate/mock.ts ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Sobre Mim',
  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br><br> Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/templates/OtherPagesTemplate/styles.ts":
/*!****************************************************!*\
  !*** ./src/templates/OtherPagesTemplate/styles.ts ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": function() { return /* binding */ Wrapper; },
/* harmony export */   "ButtonContainer": function() { return /* binding */ ButtonContainer; },
/* harmony export */   "Button": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Heading_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Heading/styles */ "./src/components/Heading/styles.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1s5ciit-0"
})(["", ""], function (_ref) {
  var theme = _ref.theme;
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["padding-bottom:", ";margin-bottom:", ";border-bottom:0.1rem solid ", ";justify-content:center;", "{margin:5rem;padding-top:", ";margin-top:", ";margin-bottom:", ";justify-content:center;}"], theme.spacings.xlarge, theme.spacings.xlarge, theme.colors.mediumGray, _components_Heading_styles__WEBPACK_IMPORTED_MODULE_0__.Title, theme.spacings.xlarge, theme.spacings.xxxhuge, theme.spacings.medium);
});
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.withConfig({
  displayName: "styles__ButtonContainer",
  componentId: "sc-1s5ciit-1"
})(["", ""], function (_ref2) {
  var theme = _ref2.theme;
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["padding:0 ", ";margin:", " 0;display:flex;justify-content:center;"], theme.spacings.large, theme.spacings.large);
});
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.button.withConfig({
  displayName: "styles__Button",
  componentId: "sc-1s5ciit-2"
})(["", ""], function (_ref3) {
  var theme = _ref3.theme;
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background:", ";color:", ";border:none;padding:", " ", ";cursor:pointer;&:disabled{background:", ";}"], theme.colors.primary, theme.colors.white, theme.spacings.small, theme.spacings.large, theme.colors.darkerGray);
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ZpbWxpdmVuY2kudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvdGVtcGxhdGVzL090aGVyUGFnZXNUZW1wbGF0ZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90ZW1wbGF0ZXMvT3RoZXJQYWdlc1RlbXBsYXRlL21vY2sudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90ZW1wbGF0ZXMvT3RoZXJQYWdlc1RlbXBsYXRlL3N0eWxlcy50cyJdLCJuYW1lcyI6WyJJbmRleCIsInBvc3QiLCJzZXR0aW5nIiwidmFyaWFibGVzIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJxIiwiYmxvZ05hbWUiLCJPdGhlclBhZ2VzVGVtcGxhdGUiLCJzZXR0aW5ncyIsImhhbmRsZUJhY2siLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIk1vY2siLCJjb250ZW50IiwidGl0bGUiLCJXcmFwcGVyIiwic3R5bGVkIiwidGhlbWUiLCJjc3MiLCJzcGFjaW5ncyIsInhsYXJnZSIsImNvbG9ycyIsIm1lZGl1bUdyYXkiLCJIZWFkaW5nU3R5bGVzIiwieHh4aHVnZSIsIm1lZGl1bSIsIkJ1dHRvbkNvbnRhaW5lciIsImxhcmdlIiwiQnV0dG9uIiwicHJpbWFyeSIsIndoaXRlIiwic21hbGwiLCJkYXJrZXJHcmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBOztBQUVlLFNBQVNBLEtBQVQsT0FBa0U7QUFBQTs7QUFBQSxNQUFqREMsSUFBaUQsUUFBakRBLElBQWlEO0FBQUEsTUFBM0NDLE9BQTJDLFFBQTNDQSxPQUEyQztBQUFBLE1BQWxDQyxTQUFrQyxRQUFsQ0EsU0FBa0M7QUFDOUUsTUFBTUMsTUFBTSxHQUFHQyxrRUFBUyxFQUF4QjtBQUNFLHNCQUNBO0FBQUEsNEJBQ0MsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBLGlDQUNhRCxNQUFNLENBQUNF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TixDQUFlTSxNQVZuQztBQUFBLENBRGlCLENBQWI7QUFrQkEsSUFBTUMsZUFBZSxHQUFHVixxRUFBSDtBQUFBO0FBQUE7QUFBQSxhQUN4QjtBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVDLHNEQUFmLHdFQUNhRCxLQUFLLENBQUNFLFFBQU4sQ0FBZVEsS0FENUIsRUFFVVYsS0FBSyxDQUFDRSxRQUFOLENBQWVRLEtBRnpCO0FBQUEsQ0FEd0IsQ0FBckI7QUFTQSxJQUFNQyxNQUFNLEdBQUdaLHdFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ2Y7QUFBQSxNQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQyxzREFBZiwyR0FDY0QsS0FBSyxDQUFDSSxNQUFOLENBQWFRLE9BRDNCLEVBRVNaLEtBQUssQ0FBQ0ksTUFBTixDQUFhUyxLQUZ0QixFQUlXYixLQUFLLENBQUNFLFFBQU4sQ0FBZVksS0FKMUIsRUFJbUNkLEtBQUssQ0FBQ0UsUUFBTixDQUFlUSxLQUpsRCxFQU9nQlYsS0FBSyxDQUFDSSxNQUFOLENBQWFXLFVBUDdCO0FBQUEsQ0FEZSxDQUFaIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZpbWxpdmVuY2kuNzU3NjQ2MTVmMDg2Y2E2ZDI0OGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7R2V0U3RhdGljUHJvcHN9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5pbXBvcnQge2RlZmF1bHRMb2FkUG9zdHNWYXJpYWJsZXMsIGxvYWRQb3N0cywgU3RyYXBpUG9zdEFuZFNldHRpbmdzfSBmcm9tICcuLi9hcGkvbG9hZC1wb3N0cyc7XHJcbmltcG9ydCB7IE90aGVyUGFnZXNUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlcy9PdGhlclBhZ2VzVGVtcGxhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoeyBwb3N0LCBzZXR0aW5nLCB2YXJpYWJsZXN9OiBTdHJhcGlQb3N0QW5kU2V0dGluZ3Mpe1xyXG4gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgICByZXR1cm4gKFxyXG4gICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgIFBlc3F1aXNhOiB7cm91dGVyLnF1ZXJ5LnF9IC0ge3NldHRpbmcuYmxvZ05hbWV9XHJcbiAgICAgICAgPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxPdGhlclBhZ2VzVGVtcGxhdGUgc2V0dGluZ3M9e3NldHRpbmd9IC8+XHJcbiAgICAgPC8+XHJcbiAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPFN0cmFwaVBvc3RBbmRTZXR0aW5ncz4gPSBhc3luYygpID0+e1xyXG4gIGxldCBkYXRhID1udWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgZGF0YSA9IGF3YWl0IGxvYWRQb3N0cygpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBkYXRhID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGlmKCFkYXRhIHx8ICFkYXRhLnBvc3RzIHx8ICFkYXRhLnBvc3RzLmxlbmd0aCl7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEucG9zdHNbMF0uY292ZXIpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgcG9zdHM6ZGF0YS5wb3N0cyxcclxuICAgICAgICBzZXR0aW5nOiBkYXRhLnNldHRpbmcsXHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAuLi5kZWZhdWx0TG9hZFBvc3RzVmFyaWFibGVzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJldmFsaWRhdGU6IDI0KjYwKjYwLFxyXG4gICAgfTtcclxuXHJcbn07XHJcbiIsImltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCB7U2V0dGluZ3NTdHJhcGkgfSBmcm9tICcuLi8uLi9zaGFyZWQtdHlwZXMvc2V0dGluZ3Mtc3RyYXBpJztcclxuaW1wb3J0IHtCYXNlVGVtcGxhdGUgfSBmcm9tICcuLi9CYXNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IEh0bWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0h0bWxDb250ZW50JztcclxuaW1wb3J0IHsgUG9zdENvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdENvbnRhaW5lcic7XHJcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRpbmcnO1xyXG5cclxuXHJcbmltcG9ydCAqIGFzIE1vY2sgZnJvbSAnLi9tb2NrJztcclxuXHJcbmV4cG9ydCB0eXBlIE90aGVyUGFnZXNUZW1wbGF0ZVByb3BzID0ge1xyXG4gIHNldHRpbmdzOiBTZXR0aW5nc1N0cmFwaTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBPdGhlclBhZ2VzVGVtcGxhdGUgPSAoeyBzZXR0aW5ncyB9OiBPdGhlclBhZ2VzVGVtcGxhdGVQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgaGFuZGxlQmFjayA9IGFzeW5jKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiTW9ja1wiKTtcclxuICBjb25zb2xlLmxvZyhNb2NrLmRlZmF1bHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJhc2VUZW1wbGF0ZSBzZXR0aW5ncz17c2V0dGluZ3N9PlxyXG4gICAgICA8U3R5bGVkLldyYXBwZXI+XHJcbiAgICAgICAgPFBvc3RDb250YWluZXIgc2l6ZT1cIm1heFwiPlxyXG4gICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cImJpZ1wiPiB7TW9jay5kZWZhdWx0LnRpdGxlfSA8L0hlYWRpbmc+XHJcbiAgICAgICAgPC9Qb3N0Q29udGFpbmVyPlxyXG4gICAgICAgIDxQb3N0Q29udGFpbmVyIHNpemU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8SHRtbENvbXBvbmVudCBodG1sPXtNb2NrLmRlZmF1bHQuY29udGVudH0gLz5cclxuICAgICAgICA8L1Bvc3RDb250YWluZXI+XHJcblxyXG4gICAgPC9TdHlsZWQuV3JhcHBlcj5cclxuXHJcblxyXG4gICAgICA8U3R5bGVkLkJ1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgICA8U3R5bGVkLkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCYWNrfT5cclxuICAgICAgICAgIHsnVm9sdGFyJ31cclxuICAgICAgICA8L1N0eWxlZC5CdXR0b24+XHJcbiAgICAgIDwvU3R5bGVkLkJ1dHRvbkNvbnRhaW5lcj5cclxuICAgIDwvQmFzZVRlbXBsYXRlPlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0XHJcbiAgICB7XHJcblxyXG4gICAgICB0aXRsZTogJ1NvYnJlIE1pbScsXHJcbiAgICAgIGNvbnRlbnQ6ICdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiA8YnI+PGJyPiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS4nXHJcbiAgICB9IGFzIEFib3V0TWU7XHJcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1RpdGxlIGFzIEhlYWRpbmdTdHlsZXN9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGluZy9zdHlsZXMnXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHQkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIHBhZGRpbmctYm90dG9tOiAke3RoZW1lLnNwYWNpbmdzLnhsYXJnZX07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmdzLnhsYXJnZX07XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgJHt0aGVtZS5jb2xvcnMubWVkaXVtR3JheX07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICR7SGVhZGluZ1N0eWxlc317XHJcbiAgICAgIG1hcmdpbjo1cmVtO1xyXG5cclxuXHRcdFx0cGFkZGluZy10b3A6ICR7dGhlbWUuc3BhY2luZ3MueGxhcmdlfTtcclxuXHRcdFx0bWFyZ2luLXRvcDoke3RoZW1lLnNwYWNpbmdzLnh4eGh1Z2V9O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmdzLm1lZGl1bX07XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICBgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXHJcbiAgICBwYWRkaW5nOiAwICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9O1xyXG4gICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfSAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZ3Muc21hbGx9ICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmRhcmtlckdyYXl9O1xyXG4gICAgfVxyXG4gIGB9XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=