self["webpackHotUpdate_N_E"]("pages/garotanocontrole",{

/***/ "./src/pages/garotanocontrole.tsx":
/*!****************************************!*\
  !*** ./src/pages/garotanocontrole.tsx ***!
  \****************************************/
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
/* harmony import */ var _templates_OtherPagesTemplate_mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/OtherPagesTemplate/mock */ "./src/templates/OtherPagesTemplate/mock.ts");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\pages\\garotanocontrole.tsx",
    _s = $RefreshSig$();





var __N_SSG = true;
function Index(_ref) {
  _s();

  var post = _ref.post,
      setting = _ref.setting,
      variables = _ref.variables;
  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  console.log(_templates_OtherPagesTemplate_mock__WEBPACK_IMPORTED_MODULE_4__.default.title);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Pesquisa: ", router.query.q, " - ", setting.blogName]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates_OtherPagesTemplate__WEBPACK_IMPORTED_MODULE_3__.OtherPagesTemplate, {
      title: _templates_OtherPagesTemplate_mock__WEBPACK_IMPORTED_MODULE_4__.title,
      content: _templates_OtherPagesTemplate_mock__WEBPACK_IMPORTED_MODULE_4__.content,
      settings: setting
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dhcm90YW5vY29udHJvbGUudHN4Il0sIm5hbWVzIjpbIkluZGV4IiwicG9zdCIsInNldHRpbmciLCJ2YXJpYWJsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiTW9jayIsInF1ZXJ5IiwicSIsImJsb2dOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBOztBQUVlLFNBQVNBLEtBQVQsT0FBa0U7QUFBQTs7QUFBQSxNQUFqREMsSUFBaUQsUUFBakRBLElBQWlEO0FBQUEsTUFBM0NDLE9BQTJDLFFBQTNDQSxPQUEyQztBQUFBLE1BQWxDQyxTQUFrQyxRQUFsQ0EsU0FBa0M7QUFDOUUsTUFBTUMsTUFBTSxHQUFHQyxrRUFBUyxFQUF4QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsNkVBQVo7QUFDRSxzQkFDQTtBQUFBLDRCQUNDLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQSxpQ0FDYUosTUFBTSxDQUFDSyxLQUFQLENBQWFDLENBRDFCLFNBQ2dDUixPQUFPLENBQUNTLFFBRHhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQU1HLDhEQUFDLDZFQUFEO0FBQW9CLFdBQUssRUFBRUgscUVBQTNCO0FBQXVDLGFBQU8sRUFBRUEsdUVBQWhEO0FBQThELGNBQVEsRUFBRU47QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5IO0FBQUEsa0JBREE7QUFVSjs7R0FidUJGLEs7VUFDTkssOEQ7OztLQURNTCxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dhcm90YW5vY29udHJvbGUuNTkzYWU3ZGQxZGYwZjBlMmIzZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7R2V0U3RhdGljUHJvcHN9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5pbXBvcnQge2RlZmF1bHRMb2FkUG9zdHNWYXJpYWJsZXMsIGxvYWRQb3N0cywgU3RyYXBpUG9zdEFuZFNldHRpbmdzfSBmcm9tICcuLi9hcGkvbG9hZC1wb3N0cyc7XHJcbmltcG9ydCB7IE90aGVyUGFnZXNUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlcy9PdGhlclBhZ2VzVGVtcGxhdGUnO1xyXG5pbXBvcnQgKiBhcyBNb2NrIGZyb20gJy4uL3RlbXBsYXRlcy9PdGhlclBhZ2VzVGVtcGxhdGUvbW9jayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7IHBvc3QsIHNldHRpbmcsIHZhcmlhYmxlc306IFN0cmFwaVBvc3RBbmRTZXR0aW5ncyl7XHJcbiAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICBjb25zb2xlLmxvZyhNb2NrLmRlZmF1bHQudGl0bGUpXHJcbiAgICAgcmV0dXJuIChcclxuICAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICBQZXNxdWlzYToge3JvdXRlci5xdWVyeS5xfSAtIHtzZXR0aW5nLmJsb2dOYW1lfVxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgICA8T3RoZXJQYWdlc1RlbXBsYXRlIHRpdGxlPXtNb2NrLnRpdGxlfSBjb250ZW50PXtNb2NrLmNvbnRlbnR9IHNldHRpbmdzPXtzZXR0aW5nfSAvPlxyXG4gICAgIDwvPlxyXG4gICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wczxTdHJhcGlQb3N0QW5kU2V0dGluZ3M+ID0gYXN5bmMoKSA9PntcclxuICBsZXQgZGF0YSA9bnVsbDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGRhdGEgPSBhd2FpdCBsb2FkUG9zdHMoKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgZGF0YSA9IG51bGw7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKCd0ZXN0ZScpXHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgaWYoIWRhdGEgfHwgIWRhdGEucG9zdHMgfHwgIWRhdGEucG9zdHMubGVuZ3RoKXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgICAgfTtcclxuICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YS5wb3N0c1swXS5jb3Zlcik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBwb3N0czpkYXRhLnBvc3RzLFxyXG4gICAgICAgIHNldHRpbmc6IGRhdGEuc2V0dGluZyxcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIC4uLmRlZmF1bHRMb2FkUG9zdHNWYXJpYWJsZXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgcmV2YWxpZGF0ZTogMjQqNjAqNjAsXHJcbiAgICB9O1xyXG5cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==