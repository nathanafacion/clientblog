exports.id = "src_templates_SobreMimTemplate_index_tsx";
exports.ids = ["src_templates_SobreMimTemplate_index_tsx"];
exports.modules = {

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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3RDb250YWluZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdGVtcGxhdGVzL1NvYnJlTWltVGVtcGxhdGUvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3RlbXBsYXRlcy9Tb2JyZU1pbVRlbXBsYXRlL21vY2sudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdGVtcGxhdGVzL1NvYnJlTWltVGVtcGxhdGUvc3R5bGVzLnRzIl0sIm5hbWVzIjpbInBvc3RDb250YWluZXJTdHlsZXMiLCJtYXgiLCJ0aGVtZSIsImNzcyIsInNpemVzIiwiY29udGVudCIsIlBvc3RDb250YWluZXIiLCJzdHlsZWQiLCJzaXplIiwic3BhY2luZ3MiLCJsYXJnZSIsIlNvYnJlTWltVGVtcGxhdGUiLCJzZXR0aW5ncyIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUJhY2siLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIk1vY2siLCJ0aXRsZSIsIldyYXBwZXIiLCJ4bGFyZ2UiLCJjb2xvcnMiLCJtZWRpdW1HcmF5IiwiSGVhZGluZ1N0eWxlcyIsInh4eGh1Z2UiLCJtZWRpdW0iLCJCdXR0b25Db250YWluZXIiLCJCdXR0b24iLCJwcmltYXJ5Iiwid2hpdGUiLCJzbWFsbCIsImRhcmtlckdyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQSxNQUFNQSxtQkFBbUIsR0FBRztBQUMxQkMsS0FBRyxFQUFHQyxLQUFELElBQXlCQyxzREFBekIsc0JBQ1VELEtBQUssQ0FBQ0UsS0FBTixDQUFZSCxHQUR0QixDQURxQjtBQUkxQkksU0FBTyxFQUFHSCxLQUFELElBQXlCQyxzREFBekIsc0JBQ01ELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxPQURsQjtBQUppQixDQUE1QjtBQVNPLE1BQU1DLGFBQWEsR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FB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QUFLLENBQUNPLFFBQU4sQ0FBZUMsS0FKbEQsRUFPZ0JSLEtBQUssQ0FBQ3FCLE1BQU4sQ0FBYVUsVUFQN0IsQ0FEZSxDQUFaLEMiLCJmaWxlIjoic3JjX3RlbXBsYXRlc19Tb2JyZU1pbVRlbXBsYXRlX2luZGV4X3RzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHtjc3MsRGVmYXVsdFRoZW1lfSAgIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCB0eXBlIFBvc3RDb250YWluZXJQcm9wcyA9IHtcclxuICBzaXplOiAnbWF4JyB8ICdjb250ZW50JztcclxufTtcclxuXHJcbmNvbnN0IHBvc3RDb250YWluZXJTdHlsZXMgPSB7XHJcbiAgbWF4OiAodGhlbWU6IERlZmF1bHRUaGVtZSkgPT4gY3NzYFxyXG4gICAgbWF4LXdpZHRoOiAke3RoZW1lLnNpemVzLm1heH07XHJcbiAgYCxcclxuICBjb250ZW50OiAodGhlbWU6IERlZmF1bHRUaGVtZSkgPT4gY3NzYFxyXG4gICAgbWF4LXdpZHRoOiAke3RoZW1lLnNpemVzLmNvbnRlbnR9O1xyXG4gIGAsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdENvbnRhaW5lciA9IHN0eWxlZC5kaXY8UG9zdENvbnRhaW5lclByb3BzPmBcclxuJHsoeyB0aGVtZSwgc2l6ZSB9KSA9PiBjc3NgXHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBtYXJnaW46IDAgYXV0bztcclxuICAgcGFkZGluZzogMCAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfTtcclxuICAke3Bvc3RDb250YWluZXJTdHlsZXNbc2l6ZV0odGhlbWUpfVxyXG5cclxuIGB9XHJcbmA7XHJcbiIsImltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCB7U2V0dGluZ3NTdHJhcGkgfSBmcm9tICcuLi8uLi9zaGFyZWQtdHlwZXMvc2V0dGluZ3Mtc3RyYXBpJztcclxuaW1wb3J0IHtCYXNlVGVtcGxhdGUgfSBmcm9tICcuLi9CYXNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IEh0bWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0h0bWxDb250ZW50JztcclxuaW1wb3J0IHsgUG9zdENvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdENvbnRhaW5lcic7XHJcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRpbmcnO1xyXG5cclxuXHJcbmltcG9ydCAqIGFzIE1vY2sgZnJvbSAnLi9tb2NrJztcclxuXHJcbmV4cG9ydCB0eXBlIFNvYnJlTWltVGVtcGxhdGVQcm9wcyA9IHtcclxuICBzZXR0aW5nczogU2V0dGluZ3NTdHJhcGk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU29icmVNaW1UZW1wbGF0ZSA9ICh7IHNldHRpbmdzIH06IFBvc3RUZW1wbGF0ZVByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBoYW5kbGVCYWNrID0gYXN5bmMoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJNb2NrXCIpO1xyXG4gIGNvbnNvbGUubG9nKE1vY2suZGVmYXVsdCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QmFzZVRlbXBsYXRlIHNldHRpbmdzPXtzZXR0aW5nc30+XHJcbiAgICAgIDxTdHlsZWQuV3JhcHBlcj5cclxuICAgICAgICA8UG9zdENvbnRhaW5lciBzaXplPVwibWF4XCI+XHJcbiAgICAgICAgICA8SGVhZGluZyBzaXplPVwiYmlnXCI+IHtNb2NrLmRlZmF1bHQudGl0bGV9IDwvSGVhZGluZz5cclxuICAgICAgICA8L1Bvc3RDb250YWluZXI+XHJcbiAgICAgICAgPFBvc3RDb250YWluZXIgc2l6ZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgIDxIdG1sQ29tcG9uZW50IGh0bWw9e01vY2suZGVmYXVsdC5jb250ZW50fSAvPlxyXG4gICAgICAgIDwvUG9zdENvbnRhaW5lcj5cclxuXHJcbiAgICA8L1N0eWxlZC5XcmFwcGVyPlxyXG5cclxuXHJcbiAgICAgIDxTdHlsZWQuQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICAgIDxTdHlsZWQuQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJhY2t9PlxyXG4gICAgICAgICAgeydWb2x0YXInfVxyXG4gICAgICAgIDwvU3R5bGVkLkJ1dHRvbj5cclxuICAgICAgPC9TdHlsZWQuQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgPC9CYXNlVGVtcGxhdGU+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHRcclxuICAgIHtcclxuXHJcbiAgICAgIHRpdGxlOiAnU29icmUgTWltJyxcclxuICAgICAgY29udGVudDogJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIDxicj48YnI+IExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeXMgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLidcclxuICAgIH0gYXMgQWJvdXRNZTtcclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7VGl0bGUgYXMgSGVhZGluZ1N0eWxlc30gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkaW5nL3N0eWxlcydcclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdCR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MueGxhcmdlfTtcclxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MueGxhcmdlfTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAke3RoZW1lLmNvbG9ycy5tZWRpdW1HcmF5fTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgJHtIZWFkaW5nU3R5bGVzfXtcclxuICAgICAgbWFyZ2luOjVyZW07XHJcblxyXG5cdFx0XHRwYWRkaW5nLXRvcDogJHt0aGVtZS5zcGFjaW5ncy54bGFyZ2V9O1xyXG5cdFx0XHRtYXJnaW4tdG9wOiR7dGhlbWUuc3BhY2luZ3MueHh4aHVnZX07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MubWVkaXVtfTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gIGB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIHBhZGRpbmc6IDAgJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcbiAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5ncy5zbWFsbH0gJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuZGFya2VyR3JheX07XHJcbiAgICB9XHJcbiAgYH1cclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==