self["webpackHotUpdate_N_E"]("pages/garotanocontrole",{

/***/ "./src/templates/Base/styles.ts":
/*!**************************************!*\
  !*** ./src/templates/Base/styles.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "n1ae26-0"
})([""]);
var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "styles__HeaderContainer",
  componentId: "n1ae26-1"
})(["", ""], function (_ref) {
  var theme = _ref.theme;
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["margin-top:", ";"], theme.spacings.large);
});
var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "styles__ContentContainer",
  componentId: "n1ae26-2"
})(["", ""], function (_ref2) {
  var theme = _ref2.theme;
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["max-width:120rem;width:100%;margin:0 auto;margin-bottom:", ";"], theme.spacings.xhuge);
});
var FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "styles__FooterContainer",
  componentId: "n1ae26-3"
})(["", ""], function (_ref3) {
  var theme = _ref3.theme;
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["max-width:120rem;width:100%;margin:0 auto;margin-bottom:", ";"], theme.spacings.large);
});
var SearchContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "styles__SearchContainer",
  componentId: "n1ae26-4"
})(["max-width:120rem;width:100%;margin:0 auto;position:relative;"]);
var MenuSearch = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "styles__MenuSearch",
  componentId: "n1ae26-5"
})(["float:left;display:block;width:100%;overflow:hidden;background-color:#e9e9e9;"]);
var SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.input.withConfig({
  displayName: "styles__SearchInput",
  componentId: "n1ae26-6"
})(["", "}"], function (_ref4) {
  var theme = _ref4.theme;
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["float:right;padding:1rem;position:relative;margin-top:1rem;border:none;margin-right:1rem;border-radius:1rem;width:20em;outline:none;@media ", "{.input[type=text]{float:none;display:block;text-align:left;width:100%;margin-bottom:1rem;padding:14px;padding-bottom:20px;}.input[type=text]{border:1px solid #ccc;}}"], theme.media.lteMedium);
});
var LinkMenuCategory = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "styles__LinkMenuCategory",
  componentId: "n1ae26-7"
})(["", ""], function (_ref5) {
  var theme = _ref5.theme;
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["float:left;text-decoration:none;font-size:", ";padding:", ";color:", ";position:relative;&::after{content:'';position:absolute;bottom:0.76rem;left:50%;width:0;height:0.2rem;background:", ";transition:all 300ms ease-in-out;}&:hover::after{left:25%;width:50%;}"], theme.font.sizes.small, theme.spacings.small, theme.colors.primary, theme.colors.secondary);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RlbXBsYXRlcy9CYXNlL3N0eWxlcy50cyJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiSGVhZGVyQ29udGFpbmVyIiwidGhlbWUiLCJjc3MiLCJzcGFjaW5ncyIsImxhcmdlIiwiQ29udGVudENvbnRhaW5lciIsInhodWdlIiwiRm9vdGVyQ29udGFpbmVyIiwiU2VhcmNoQ29udGFpbmVyIiwiTWVudVNlYXJjaCIsIlNlYXJjaElucHV0IiwibWVkaWEiLCJsdGVNZWRpdW0iLCJMaW5rTWVudUNhdGVnb3J5IiwiZm9udCIsInNpemVzIiwic21hbGwiLCJjb2xvcnMiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxPQUFPLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQWI7QUFHQSxJQUFNQyxlQUFlLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ3hCO0FBQUEsTUFBR0UsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUMsc0RBQWYsdUJBQ2NELEtBQUssQ0FBQ0UsUUFBTixDQUFlQyxLQUQ3QjtBQUFBLENBRHdCLENBQXJCO0FBTUEsSUFBTUMsZ0JBQWdCLEdBQUdOLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQzNCO0FBQUEsTUFBR0UsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUMsc0RBQWYsb0VBSW1CRCxLQUFLLENBQUNFLFFBQU4sQ0FBZUcsS0FKbEM7QUFBQSxDQUQyQixDQUF0QjtBQVNBLElBQU1DLGVBQWUsR0FBR1IscUVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDMUI7QUFBQSxNQUFHRSxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQyxzREFBZixvRUFJbUJELEtBQUssQ0FBQ0UsUUFBTixDQUFlQyxLQUpsQztBQUFBLENBRDBCLENBQXJCO0FBU0EsSUFBTUksZUFBZSxHQUFHVCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxvRUFBckI7QUFNQSxJQUFNVSxVQUFVLEdBQUdWLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHFGQUFoQjtBQVNBLElBQU1XLFdBQVcsR0FBR1gsdUVBQUg7QUFBQTtBQUFBO0FBQUEsY0FDcEI7QUFBQSxNQUFHRSxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQyxzREFBZiw0VEFXU0QsS0FBSyxDQUFDVSxLQUFOLENBQVlDLFNBWHJCO0FBQUEsQ0FEb0IsQ0FBakI7QUE4QkEsSUFBTUMsZ0JBQWdCLEdBQUdkLG1FQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ3pCO0FBQUEsTUFBR0UsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUMsc0RBQWYseVFBR2FELEtBQUssQ0FBQ2EsSUFBTixDQUFXQyxLQUFYLENBQWlCQyxLQUg5QixFQUlXZixLQUFLLENBQUNFLFFBQU4sQ0FBZWEsS0FKMUIsRUFLU2YsS0FBSyxDQUFDZ0IsTUFBTixDQUFhQyxPQUx0QixFQWVnQmpCLEtBQUssQ0FBQ2dCLE1BQU4sQ0FBYUUsU0FmN0I7QUFBQSxDQUR5QixDQUF0QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYXJvdGFub2NvbnRyb2xlLjhlMjRlNmJhODY0ODQxMDNjYzgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBgXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXHJcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfTtcclxuICBgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4keyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIG1heC13aWR0aDoxMjByZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5ncy54aHVnZX07XHJcbiAgYH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4keyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIG1heC13aWR0aDoxMjByZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcbiAgYH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDoxMjByZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBNZW51U2VhcmNoID0gc3R5bGVkLmRpdmBcclxuICBmbG9hdDogbGVmdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICB3aWR0aDogMjBlbTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgQG1lZGlhICR7dGhlbWUubWVkaWEubHRlTWVkaXVtfXtcclxuICAgICAgLmlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206MjBweDtcclxuICAgICAgfVxyXG4gICAgICAuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGB9XHJcblxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtNZW51Q2F0ZWdvcnkgPSBzdHlsZWQuYWBcclxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnQuc2l6ZXMuc21hbGx9O1xyXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5ncy5zbWFsbH07XHJcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDAuNzZyZW07XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMC4ycmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICBsZWZ0OiAyNSU7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgYH1cclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==