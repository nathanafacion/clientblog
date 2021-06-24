exports.id = "src_templates_OtherPagesTemplate_index_tsx";
exports.ids = ["src_templates_OtherPagesTemplate_index_tsx"];
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
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding-bottom:", ";margin-bottom:", ";border-bottom:0.1rem solid ", ";justify-content:center;", "{margin:5rem;padding-top:", ";margin-top:", ";margin-bottom:", ";justify-content:center;}"], theme.spacings.xlarge, theme.spacings.xlarge, theme.colors.mediumGray, _components_Heading_styles__WEBPACK_IMPORTED_MODULE_1__.Title, theme.spacings.xlarge, theme.spacings.xxxhuge, theme.spacings.medium));
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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3RDb250YWluZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdGVtcGxhdGVzL090aGVyUGFnZXNUZW1wbGF0ZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdGVtcGxhdGVzL090aGVyUGFnZXNUZW1wbGF0ZS9zdHlsZXMudHMiXSwibmFtZXMiOlsicG9zdENvbnRhaW5lclN0eWxlcyIsIm1heCIsInRoZW1lIiwiY3NzIiwic2l6ZXMiLCJjb250ZW50IiwiUG9zdENvbnRhaW5lciIsInN0eWxlZCIsInNpemUiLCJzcGFjaW5ncyIsImxhcmdlIiwiT3RoZXJQYWdlc1RlbXBsYXRlIiwidGl0bGUiLCJzZXR0aW5ncyIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUJhY2siLCJwdXNoIiwiV3JhcHBlciIsInhsYXJnZSIsImNvbG9ycyIsIm1lZGl1bUdyYXkiLCJIZWFkaW5nU3R5bGVzIiwieHh4aHVnZSIsIm1lZGl1bSIsIkJ1dHRvbkNvbnRhaW5lciIsIkJ1dHRvbiIsInByaW1hcnkiLCJ3aGl0ZSIsInNtYWxsIiwiZGFya2VyR3JheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BLE1BQU1BLG1CQUFtQixHQUFHO0FBQzFCQyxLQUFHLEVBQUdDLEtBQUQsSUFBeUJDLHNEQUF6QixzQkFDVUQsS0FBSyxDQUFDRSxLQUFOLENBQVlILEdBRHRCLENBRHFCO0FBSTFCSSxTQUFPLEVBQUdILEtBQUQsSUFBeUJDLHNEQUF6QixzQkFDTUQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE9BRGxCO0FBSmlCLENBQTVCO0FBU08sTUFBTUMsYUFBYSxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxhQUN4QixDQUFDO0FBQUVMLE9BQUY7QUFBU007QUFBVCxDQUFELEtBQXFCTCxzREFBckIsbURBR2NELEtBQUssQ0FBQ08sUUFBTixDQUFlQyxLQUg3QixFQUlFVixtQkFBbUIsQ0FBQ1EsSUFBRCxDQUFuQixDQUEwQk4sS0FBMUIsQ0FKRixDQUR3QixDQUFuQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZQO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFPLE1BQU1TLGtCQUFrQixHQUFHLENBQUM7QUFBRUMsT0FBRjtBQUFTUCxTQUFUO0FBQWtCUTtBQUFsQixDQUFELEtBQTJEO0FBQzNGLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBQ0EsUUFBTUMsVUFBVSxHQUFHLFlBQVc7QUFDNUJGLFVBQU0sQ0FBQ0csSUFBUCxDQUFZLEdBQVo7QUFDRCxHQUZEOztBQUlBLHNCQUNFLDhEQUFDLCtDQUFEO0FBQWMsWUFBUSxFQUFFSixRQUF4QjtBQUFBLDRCQUNFLDhEQUFDLDRDQUFEO0FBQUEsOEJBQ0UsOERBQUMsb0VBQUQ7QUFBZSxZQUFJLEVBQUMsS0FBcEI7QUFBQSwrQkFDRSw4REFBQyx3REFBRDtBQUFTLGNBQUksRUFBQyxLQUFkO0FBQUEsMEJBQXNCRCxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUUsOERBQUMsb0VBQUQ7QUFBZSxZQUFJLEVBQUMsU0FBcEI7QUFBQSwrQkFDRSw4REFBQyxrRUFBRDtBQUFlLGNBQUksRUFBRVA7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBWUUsOERBQUMsb0RBQUQ7QUFBQSw2QkFDRSw4REFBQywyQ0FBRDtBQUFlLGVBQU8sRUFBRVcsVUFBeEI7QUFBQSxrQkFDRztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBb0JELENBMUJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZFA7QUFDQTtBQUNPLE1BQU1FLE9BQU8sR0FBR1gsdUVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDakIsQ0FBQztBQUFFTDtBQUFGLENBQUQsS0FBZUMsc0RBQWYsa01BQ21CRCxLQUFLLENBQUNPLFFBQU4sQ0FBZVUsTUFEbEMsRUFFa0JqQixLQUFLLENBQUNPLFFBQU4sQ0FBZVUsTUFGakMsRUFHK0JqQixLQUFLLENBQUNrQixNQUFOLENBQWFDLFVBSDVDLEVBS0dDLDZEQUxILEVBUWVwQixLQUFLLENBQUNPLFFBQU4sQ0FBZVUsTUFSOUIsRUFTYWpCLEtBQUssQ0FBQ08sUUFBTixDQUFlYyxPQVQ1QixFQVVvQnJCLEtBQUssQ0FBQ08sUUFBTixDQUFlZSxNQVZuQyxDQURpQixDQUFiO0FBa0JBLE1BQU1DLGVBQWUsR0FBR2xCLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ3hCLENBQUM7QUFBRUw7QUFBRixDQUFELEtBQWVDLHNEQUFmLHdFQUNhRCxLQUFLLENBQUNPLFFBQU4sQ0FBZUMsS0FENUIsRUFFVVIsS0FBSyxDQUFDTyxRQUFOLENBQWVDLEtBRnpCLENBRHdCLENBQXJCO0FBU0EsTUFBTWdCLE1BQU0sR0FBR25CLDBFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ2YsQ0FBQztBQUFFTDtBQUFGLENBQUQsS0FBZUMsc0RBQWYsMkdBQ2NELEtBQUssQ0FBQ2tCLE1BQU4sQ0FBYU8sT0FEM0IsRUFFU3pCLEtBQUssQ0FBQ2tCLE1BQU4sQ0FBYVEsS0FGdEIsRUFJVzFCLEtBQUssQ0FBQ08sUUFBTixDQUFlb0IsS0FKMUIsRUFJbUMzQixLQUFLLENBQUNPLFFBQU4sQ0FBZUMsS0FKbEQsRUFPZ0JSLEtBQUssQ0FBQ2tCLE1BQU4sQ0FBYVUsVUFQN0IsQ0FEZSxDQUFaLEMiLCJmaWxlIjoic3JjX3RlbXBsYXRlc19PdGhlclBhZ2VzVGVtcGxhdGVfaW5kZXhfdHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwge2NzcyxEZWZhdWx0VGhlbWV9ICAgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IHR5cGUgUG9zdENvbnRhaW5lclByb3BzID0ge1xyXG4gIHNpemU6ICdtYXgnIHwgJ2NvbnRlbnQnO1xyXG59O1xyXG5cclxuY29uc3QgcG9zdENvbnRhaW5lclN0eWxlcyA9IHtcclxuICBtYXg6ICh0aGVtZTogRGVmYXVsdFRoZW1lKSA9PiBjc3NgXHJcbiAgICBtYXgtd2lkdGg6ICR7dGhlbWUuc2l6ZXMubWF4fTtcclxuICBgLFxyXG4gIGNvbnRlbnQ6ICh0aGVtZTogRGVmYXVsdFRoZW1lKSA9PiBjc3NgXHJcbiAgICBtYXgtd2lkdGg6ICR7dGhlbWUuc2l6ZXMuY29udGVudH07XHJcbiAgYCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0Q29udGFpbmVyID0gc3R5bGVkLmRpdjxQb3N0Q29udGFpbmVyUHJvcHM+YFxyXG4keyh7IHRoZW1lLCBzaXplIH0pID0+IGNzc2BcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICBwYWRkaW5nOiAwICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9O1xyXG4gICR7cG9zdENvbnRhaW5lclN0eWxlc1tzaXplXSh0aGVtZSl9XHJcblxyXG4gYH1cclxuYDtcclxuIiwiaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IHtTZXR0aW5nc1N0cmFwaSB9IGZyb20gJy4uLy4uL3NoYXJlZC10eXBlcy9zZXR0aW5ncy1zdHJhcGknO1xyXG5pbXBvcnQge0Jhc2VUZW1wbGF0ZSB9IGZyb20gJy4uL0Jhc2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgSHRtbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSHRtbENvbnRlbnQnO1xyXG5pbXBvcnQgeyBQb3N0Q29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0Q29udGFpbmVyJztcclxuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGluZyc7XHJcblxyXG5leHBvcnQgdHlwZSBPdGhlclBhZ2VzVGVtcGxhdGVQcm9wcyA9IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBzZXR0aW5nczogU2V0dGluZ3NTdHJhcGk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgT3RoZXJQYWdlc1RlbXBsYXRlID0gKHsgdGl0bGUsIGNvbnRlbnQsIHNldHRpbmdzIH06IE90aGVyUGFnZXNUZW1wbGF0ZVByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBoYW5kbGVCYWNrID0gYXN5bmMoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCYXNlVGVtcGxhdGUgc2V0dGluZ3M9e3NldHRpbmdzfT5cclxuICAgICAgPFN0eWxlZC5XcmFwcGVyPlxyXG4gICAgICAgIDxQb3N0Q29udGFpbmVyIHNpemU9XCJtYXhcIj5cclxuICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJiaWdcIj4ge3RpdGxlfSA8L0hlYWRpbmc+XHJcbiAgICAgICAgPC9Qb3N0Q29udGFpbmVyPlxyXG4gICAgICAgIDxQb3N0Q29udGFpbmVyIHNpemU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8SHRtbENvbXBvbmVudCBodG1sPXtjb250ZW50fSAvPlxyXG4gICAgICAgIDwvUG9zdENvbnRhaW5lcj5cclxuXHJcbiAgICA8L1N0eWxlZC5XcmFwcGVyPlxyXG5cclxuXHJcbiAgICAgIDxTdHlsZWQuQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICAgIDxTdHlsZWQuQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJhY2t9PlxyXG4gICAgICAgICAgeydWb2x0YXInfVxyXG4gICAgICAgIDwvU3R5bGVkLkJ1dHRvbj5cclxuICAgICAgPC9TdHlsZWQuQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgPC9CYXNlVGVtcGxhdGU+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7VGl0bGUgYXMgSGVhZGluZ1N0eWxlc30gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkaW5nL3N0eWxlcydcclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdCR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MueGxhcmdlfTtcclxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MueGxhcmdlfTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAke3RoZW1lLmNvbG9ycy5tZWRpdW1HcmF5fTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgJHtIZWFkaW5nU3R5bGVzfXtcclxuICAgICAgbWFyZ2luOjVyZW07XHJcblxyXG5cdFx0XHRwYWRkaW5nLXRvcDogJHt0aGVtZS5zcGFjaW5ncy54bGFyZ2V9O1xyXG5cdFx0XHRtYXJnaW4tdG9wOiR7dGhlbWUuc3BhY2luZ3MueHh4aHVnZX07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MubWVkaXVtfTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gIGB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIHBhZGRpbmc6IDAgJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcbiAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5ncy5zbWFsbH0gJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuZGFya2VyR3JheX07XHJcbiAgICB9XHJcbiAgYH1cclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==