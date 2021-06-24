exports.id = "src_templates_OtherPagesTemplate_index_tsx-src_templates_OtherPagesTemplate_mock_ts";
exports.ids = ["src_templates_OtherPagesTemplate_index_tsx-src_templates_OtherPagesTemplate_mock_ts"];
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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3RDb250YWluZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdGVtcGxhdGVzL090aGVyUGFnZXNUZW1wbGF0ZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdGVtcGxhdGVzL090aGVyUGFnZXNUZW1wbGF0ZS9tb2NrLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3RlbXBsYXRlcy9PdGhlclBhZ2VzVGVtcGxhdGUvc3R5bGVzLnRzIl0sIm5hbWVzIjpbInBvc3RDb250YWluZXJTdHlsZXMiLCJtYXgiLCJ0aGVtZSIsImNzcyIsInNpemVzIiwiY29udGVudCIsIlBvc3RDb250YWluZXIiLCJzdHlsZWQiLCJzaXplIiwic3BhY2luZ3MiLCJsYXJnZSIsIk90aGVyUGFnZXNUZW1wbGF0ZSIsInRpdGxlIiwic2V0dGluZ3MiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVCYWNrIiwicHVzaCIsImFib3V0IiwiY29udGFjdCIsImdhcm90YU5vQ29udHJvbGUiLCJ2aW1MaVZlbmNpIiwiV3JhcHBlciIsInhsYXJnZSIsImNvbG9ycyIsIm1lZGl1bUdyYXkiLCJIZWFkaW5nU3R5bGVzIiwieHh4aHVnZSIsIm1lZGl1bSIsImRhcmtlckdyYXkiLCJCdXR0b25Db250YWluZXIiLCJCdXR0b24iLCJwcmltYXJ5Iiwid2hpdGUiLCJzbWFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BLE1BQU1BLG1CQUFtQixHQUFHO0FBQzFCQyxLQUFHLEVBQUdDLEtBQUQsSUFBeUJDLHNEQUF6QixzQkFDVUQsS0FBSyxDQUFDRSxLQUFOLENBQVlILEdBRHRCLENBRHFCO0FBSTFCSSxTQUFPLEVBQUdILEtBQUQsSUFBeUJDLHNEQUF6QixzQkFDTUQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE9BRGxCO0FBSmlCLENBQTVCO0FBU08s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Q08sUUFBTixDQUFlQyxLQUZ6QixDQUR3QixDQUFyQjtBQVNBLE1BQU1xQixNQUFNLEdBQUd4QiwwRUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNmLENBQUM7QUFBRUw7QUFBRixDQUFELEtBQWVDLHNEQUFmLDJHQUNjRCxLQUFLLENBQUNzQixNQUFOLENBQWFRLE9BRDNCLEVBRVM5QixLQUFLLENBQUNzQixNQUFOLENBQWFTLEtBRnRCLEVBSVcvQixLQUFLLENBQUNPLFFBQU4sQ0FBZXlCLEtBSjFCLEVBSW1DaEMsS0FBSyxDQUFDTyxRQUFOLENBQWVDLEtBSmxELEVBT2dCUixLQUFLLENBQUNzQixNQUFOLENBQWFLLFVBUDdCLENBRGUsQ0FBWixDIiwiZmlsZSI6InNyY190ZW1wbGF0ZXNfT3RoZXJQYWdlc1RlbXBsYXRlX2luZGV4X3RzeC1zcmNfdGVtcGxhdGVzX090aGVyUGFnZXNUZW1wbGF0ZV9tb2NrX3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwge2NzcyxEZWZhdWx0VGhlbWV9ICAgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IHR5cGUgUG9zdENvbnRhaW5lclByb3BzID0ge1xyXG4gIHNpemU6ICdtYXgnIHwgJ2NvbnRlbnQnO1xyXG59O1xyXG5cclxuY29uc3QgcG9zdENvbnRhaW5lclN0eWxlcyA9IHtcclxuICBtYXg6ICh0aGVtZTogRGVmYXVsdFRoZW1lKSA9PiBjc3NgXHJcbiAgICBtYXgtd2lkdGg6ICR7dGhlbWUuc2l6ZXMubWF4fTtcclxuICBgLFxyXG4gIGNvbnRlbnQ6ICh0aGVtZTogRGVmYXVsdFRoZW1lKSA9PiBjc3NgXHJcbiAgICBtYXgtd2lkdGg6ICR7dGhlbWUuc2l6ZXMuY29udGVudH07XHJcbiAgYCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0Q29udGFpbmVyID0gc3R5bGVkLmRpdjxQb3N0Q29udGFpbmVyUHJvcHM+YFxyXG4keyh7IHRoZW1lLCBzaXplIH0pID0+IGNzc2BcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICBwYWRkaW5nOiAwICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9O1xyXG4gICR7cG9zdENvbnRhaW5lclN0eWxlc1tzaXplXSh0aGVtZSl9XHJcblxyXG4gYH1cclxuYDtcclxuIiwiaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IHtTZXR0aW5nc1N0cmFwaSB9IGZyb20gJy4uLy4uL3NoYXJlZC10eXBlcy9zZXR0aW5ncy1zdHJhcGknO1xyXG5pbXBvcnQge0Jhc2VUZW1wbGF0ZSB9IGZyb20gJy4uL0Jhc2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgSHRtbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSHRtbENvbnRlbnQnO1xyXG5pbXBvcnQgeyBQb3N0Q29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0Q29udGFpbmVyJztcclxuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGluZyc7XHJcblxyXG5leHBvcnQgdHlwZSBPdGhlclBhZ2VzVGVtcGxhdGVQcm9wcyA9IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBzZXR0aW5nczogU2V0dGluZ3NTdHJhcGk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgT3RoZXJQYWdlc1RlbXBsYXRlID0gKHsgdGl0bGUsIGNvbnRlbnQsIHNldHRpbmdzIH06IE90aGVyUGFnZXNUZW1wbGF0ZVByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBoYW5kbGVCYWNrID0gYXN5bmMoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCYXNlVGVtcGxhdGUgc2V0dGluZ3M9e3NldHRpbmdzfT5cclxuICAgICAgPFN0eWxlZC5XcmFwcGVyPlxyXG4gICAgICAgIDxQb3N0Q29udGFpbmVyIHNpemU9XCJtYXhcIj5cclxuICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJiaWdcIj4ge3RpdGxlfSA8L0hlYWRpbmc+XHJcbiAgICAgICAgPC9Qb3N0Q29udGFpbmVyPlxyXG4gICAgICAgIDxQb3N0Q29udGFpbmVyIHNpemU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8SHRtbENvbXBvbmVudCBodG1sPXtjb250ZW50fSAvPlxyXG4gICAgICAgIDwvUG9zdENvbnRhaW5lcj5cclxuXHJcbiAgICA8L1N0eWxlZC5XcmFwcGVyPlxyXG5cclxuXHJcbiAgICAgIDxTdHlsZWQuQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICAgIDxTdHlsZWQuQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJhY2t9PlxyXG4gICAgICAgICAgeydWb2x0YXInfVxyXG4gICAgICAgIDwvU3R5bGVkLkJ1dHRvbj5cclxuICAgICAgPC9TdHlsZWQuQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgPC9CYXNlVGVtcGxhdGU+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHRcclxuICAgIHtcclxuXHJcbiAgICAgIGFib3V0OiB7XHJcbiAgICAgICAgdGl0bGU6ICdTb2JyZSBNaW0nLFxyXG4gICAgICAgIGNvbnRlbnQ6ICc8cD5NZSBjaGFtbyBOYXRoYW5hLiZuYnNwOzwvcD4gPHA+U291IHVtYSBwZXNzb2EgY3VyaW9zYSBlIHF1ZSBhZG9yYSBub3ZhcyBpZGVpYXMuIEFvIG1lc21vIHRlbXBvLCBtZSBwcmVvY3VwbyBtdWl0byBjb20gcGVzc29hcy4gQWNyZWRpdG8gcXVlIHRvZG8gbXVuZG8gdGVtIHN1YSBmb3JtYSBkZSBmYXplciBhIGRpZmVyZW4mY2NlZGlsO2EgbmEgdmlkYSBkYXMgcGVzc29hcywgZW50JmF0aWxkZTtvIGNvbSBtZXVzIHByb2pldG9zIHRlbnRvIGZhemVyIG8gbSZhYWN1dGU7eGltbyBkaXNzby48L3A+IDxwPkVtYm9yYSBib2EgcGFydGUgZG9zIG1ldXMgcHJvamV0b3MgZXN0JmF0aWxkZTtvIHJlbGFjaW9uYWRvcyBjb20gZXNjcmV2ZXIsIGEgbWluaGEgZm9ybWEmY2NlZGlsOyZhdGlsZGU7byAmZWFjdXRlOyBDaSZlY2lyYztuY2lhcyBkYSBDb21wdXRhJmNjZWRpbDsmYXRpbGRlO28uIE4mYXRpbGRlO28gbWUgaW1wb3J0byBlbSBtZSBhdmVudHVyYXIgZW0gJmFhY3V0ZTtyZWEgZGlmZXJlbnRlIGRlc3NhLCBtYXMgdGVuaG8gdW1hIHBhaXgmYXRpbGRlO28gcG9yIG4mdWFjdXRlO21lcm9zIGUgcHJvZ3JhbWFyIHRhbWImZWFjdXRlO20uPC9wPiA8cD5GaXogZXNwZWNpYWxpemEmY2NlZGlsOyZhdGlsZGU7byBlIG1lc3RyYWRvIG5hICZhYWN1dGU7cmVhLiBUdWRvIGlzc28gZW0gdW5pdmVyc2lkYWRlIHAmdWFjdXRlO2JsaWNhLCBvIHF1ZSBzaWduaWZpY2EgcXVlIGV1IHNlbXByZSBtZSBlc2ZvcmNlaSBtdWl0byBwYXJhIGFsY2FuJmNjZWRpbDthciBvcyBtZXVzIHNvbmhvcy4mbmJzcDs8L3A+IDxwPjxicj48L3A+IDxwPjxzdHJvbmc+QmxvZyBkYSBOYW5hPC9zdHJvbmc+PC9wPiA8cD5Fc3Blcm8gcXVlIGVzc2UgcGVxdWVubyBibG9nIHBvc3NhIGFqdWRhciBvdXRyYXMgcGVzc29hcyBlbmNvbnRyYXIgY29udGUmdWFjdXRlO2RvIHF1ZSBhZ3JlZ3VlIGFsZ28gYSBlbGFzLiBQZW5zZWkgZW0gZm9jYXIgcyZvYWN1dGU7IGVtIHByb2dyYW1hJmNjZWRpbDsmYXRpbGRlO28sIG1hcyBkYSZpYWN1dGU7IHBlbnNlaSB1bSBwb3VjbyBtYWlzIGUgcmVzb2x2aSBmb2NhciBlbSB0dWRvIHF1ZSBhY2hhciBubyBjYW1pbmhvIHF1ZSBldSBwZXJjb3JyZXIuIEFmaW5hbCBhIHZpZGEgJmVhY3V0ZTsgZmVpdG8gZGUgdGFudGFzIGNvaXNhcywgcG9ycXVlIGxpbWl0YXIgcXVhbmRvIHBvZGVtb3MgZXhwYW5kaXI/PC9wPiA8cD48YnI+PC9wPiA8cD48c3Ryb25nPkNvbnRhdG88L3N0cm9uZz48L3A+IDxwPkNhc28gcHJlY2lzZSBlbnRyYXIgZW0gY29udGF0bywgbWUgbWFuZGUgdW0gZS1tYWlsOiBuYXRoYW5hZmFjaW9uQGdtYWlsLmNvbTwvcD4gPHA+PGJyPjwvcD4nXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRhY3Q6IHtcclxuICAgICAgICB0aXRsZTogJ0NvbnRhdG8nLFxyXG4gICAgICAgIGNvbnRlbnQ6ICdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiA8YnI+PGJyPiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS4nXHJcbiAgICAgIH0sXHJcbiAgICAgIGdhcm90YU5vQ29udHJvbGU6IHtcclxuICAgICAgICB0aXRsZTogJ1Byb2pldG86IEdhcm90YSBubyBDb250cm9sZScsXHJcbiAgICAgICAgY29udGVudDogJzxwIHN0eWxlPVwidGV4dC1hbGlnbjoganVzdGlmeTtcIj5PIHNpdGUgPGEgaHJlZj1cImh0dHBzOi8vZ2Fyb3Rhbm9jb250cm9sZS5jb20uYnIvXCI+R2Fyb3RhIG5vIENvbnRyb2xlPC9hPiAmZWFjdXRlOyB1bSBzaXRlIGluZGVwZW5kZW50ZSBxdWUgc3VyZ2l1IGVtIDIwMjAgY29tIG8gb2JqZXRpdm8gZGUgYXByZXNlbnRhciBhIHZpcyZhdGlsZGU7byBkZSB1bWEgZ2Fyb3RhIGdhbWVyIHNvYnJlIG8gbXVuZG8gZG9zIGpvZ29zLjwvcD4gPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPkEgbWFpb3JpYSBkbyBwJnVhY3V0ZTtibGljbyBnYW1lciBob2plICZlYWN1dGU7IGNvbnN0aXR1JmlhY3V0ZTtkbyBkZSBob21lbnMsIGVudCZhdGlsZGU7bywgZW1ib3JhIG8gc2l0ZSB0ZW5oYSBzaWRvIGZlaXRvIHBhcmEgdG9kYXMgYXMgcGVzc29hcywgdW0gZG9zIHByaW5jaXBhaXMgb2JqZXRpdm9zICZlYWN1dGU7IGZhemVyIGNvbSBxdWUgbWFpcyBtdWxoZXJlcyBwb3NzYW0gdmlyIGEgZ29zdGFyIGRvIGFzc3VudG8sIG91IGF0JmVhY3V0ZTsgbWVzbW8gcXVlIHRlbmhhbSBtYWlzIGNvcmFnZW0gcGFyYSBleHBvciBzdWFzIG9waW5pJm90aWxkZTtlcyBzb2JyZS48L3A+IDxwIHN0eWxlPVwidGV4dC1hbGlnbjoganVzdGlmeTtcIj5Db20gYXBlbmFzIHVtIGFubywgbm9zc2EgZXF1aXBlIGomYWFjdXRlOyB0ZW0xNCBwZXNzb2FzIGUgcmVjZWJlbW9zIGFwb2lvIGRlIGVtcHJlc2FzIGdyYW5kZXMgZSBwZXF1ZW5hcyBwYXJhIGNvbnNlZ3VpciBqb2dvcyBwYXJhIGFuJmFhY3V0ZTtsaXNlcyBlIGFzc2ltIG1hbnRlciBvIHNpdGUuPC9wPiA8cCBzdHlsZT1cInRleHQtYWxpZ246IGp1c3RpZnk7XCI+Vm9jJmVjaXJjOyBlbmNvbnRyYXImYWFjdXRlOyBvcyBzZWd1aW50ZXMgY29udGUmdWFjdXRlO2RvcyBubyBzaXRlOjwvcD4gPHVsPiA8bGkgc3R5bGU9XCJ0ZXh0LWFsaWduOmp1c3RpZnk7XCI+QW4mYWFjdXRlO2xpc2VzOiBwYXJhIGFqdWRhciBvIGxlaXRvciBhIGNvbmhlY2VyIG5vdm9zIGpvZ29zLCBvdSBzYWJlciBzZSB1bSBqb2dvIHBvZGUgc2VyIGRvIHNldSBhZ3JhZG8sIG91IG4mYXRpbGRlO28uIEUgcGFyYSBhanVkYXIgcHJpbmNpcGFsbWVudGUgbmEgdmlzaWJpbGlkYWRlIGRlIGpvZ29zIGluZGllcy48L2xpPiA8bGkgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPkxpc3RhczogdW1hIGFuJmFhY3V0ZTtsaXNlIHNvYnJlIGFsZ3VtIGFzc3VudG8sIHF1ZSBnZXJhIHVtYSBsaXN0YSBjb20gbyBvYmpldGl2byBkZSBjbGFzc2lmaWNhciBiYXNlYWRvIGVtIGFsZ3VtIGNyaXQmZWFjdXRlO3Jpby4gQ29tIGlzc28sIHF1ZXJvIGluY2VudGl2YXIgbyBsZWl0b3IgYSBwZW5zYXIgcXVhbCBhIGNsYXNzaWZpY2EmY2NlZGlsOyZhdGlsZGU7byBxdWUgZWxlIG1lc21vIGZhcmlhIGUgZ2VyYXIgdW1hIHJlZmxleCZhdGlsZGU7bywgb3UgZGlzY3VzcyZhdGlsZGU7byBzb2JyZSBvIGFzc3VudG88L2xpPiA8bGkgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPkN1cmlvc2lkYWRlczogcyZhdGlsZGU7byBlc2NvbGhpZG9zIGFzc3VudG9zIGluY29tdW5zIHBhcmEgc2VyZW0gYWJvcmRhZG9zIGUgaW5zdGlnYXIgYSBjdXJpb3NpZGFkZSBkbyBsZWl0b3IuIEVtIG11aXRvcyBjYXNvcywgb3MgYXJ0aWdvcyBzZWxlY2lvbmFkb3MgcyZhdGlsZGU7byBjaWVudCZpYWN1dGU7Zmljb3MsIHBhcmEgbyBsZWl0b3IgcGVyY2ViZXIgcXVlIGEgaW1wb3J0JmFjaXJjO25jaWEgZG9zIGpvZ29zIGVzdCZhdGlsZGU7byBlbSB0b2RvcyBvcyBsdWdhcmVzLjwvbGk+IDxsaSBzdHlsZT1cInRleHQtYWxpZ246IGp1c3RpZnk7XCI+RW50cmV2aXN0YTogcyZhdGlsZGU7byBmZWl0YXMgY29tIHByb2Zpc3Npb25haXMgZGEgJmFhY3V0ZTtyZWEgZGUgam9nb3MgcGFyYSBkaXZ1bGdhciB0cmFiYWxob3MgbWVub3MgY29uaGVjaWRvcy4gJkVhY3V0ZTsgdW1hIG9wb3J0dW5pZGFkZSBkZSBmYXplciBvcyB1c3UmYWFjdXRlO3Jpb3Mgc2UgaW50ZXJlc3NhcmVtIHBvciBqb2dvcyBkZSBtZW5vciBvciZjY2VkaWw7YW1lbnRvLiBFc3NlIHNpdGUgcXVlciBhcG9pYXIgb3Mgam9nb3MgaW5kaWVzLCBwcmluY2lwYWxtZW50ZSBvcyBicmFzaWxlaXJvcy48L2xpPiA8L3VsPidcclxuICAgICAgfSxcclxuICAgICAgdmltTGlWZW5jaToge1xyXG4gICAgICAgIHRpdGxlOiAnUHJvamV0bzogVmltIExpIFZlbmNpJyxcclxuICAgICAgICBjb250ZW50OiAnPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPkVzdGUgcHJvamV0byBhaW5kYSBlc3QmYWFjdXRlOyBlbSBkZXNlbnZvbHZpbWVudG8sIG91IHNlamEsIGVzdCZhYWN1dGU7IG5hcyBmYXNlcyBvbmRlIGVzdG91IGRldGVybWluYW5kbyBxdWFpcyBvYmpldGl2b3MgcXVlcm8gYWxjYW4mY2NlZGlsO2FyIGNvbSBlbGUuPC9wPiA8cCBzdHlsZT1cInRleHQtYWxpZ246IGp1c3RpZnk7XCI+Q29tbyBzZW1wcmUgZ29zdGVpIGRlIGxlciwgcXVlcmlhIGNvbnNlZ3VpciB1bWEgZm9ybWEgZGUgYWp1ZGFyIG91dHJhcyBwZXNzb2FzIGEgdGVyZW0gbyBnb3N0byBwZWxhIGxlaXR1cmEgZSBtYWlzIGFjZXNzbyBhIGxpdnJvcy48L3A+IDxwIHN0eWxlPVwidGV4dC1hbGlnbjoganVzdGlmeTtcIj5QYXJhIGlzc28sIG8gcXVlIHRlbmhvIGRlIGlkZWlhcyBpbmljaWFpcyBzZXJpYTo8L3A+IDx1bD4gPGxpIHN0eWxlPVwidGV4dC1hbGlnbjoganVzdGlmeTtcIj5FbnRyZXZpc3RhcyBjb20gYXV0b3JlcyBuYWNpb25haXMgcGFyYSBlbnRlbmRlciBjb21vIGZ1bmNpb25hIG8gbWVyY2FkbyBhdHVhbCBlIGFqdWRhciBub3ZvcyBlc2NyaXRvcmVzIGEgYWxjYW4mY2NlZGlsO2FyIHNldXMgc29uaG9zLjwvbGk+ICA8bGkgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPkRpdnVsZ2EmY2NlZGlsOyZhdGlsZGU7byBkZSB2JmFhY3V0ZTtyaW9zIHRpcG9zIGRlIGxpdnJvcywgaW5jbHVzaXZlIG9zIGluZGVwZW5kZW50ZXMuPC9saT4gPGxpIHN0eWxlPVwidGV4dC1hbGlnbjoganVzdGlmeTtcIj5UcmF6ZXIgYXMgcHJpbmNpcGFpcyBub3ZpZGFkZXMgbGl0ZXImYWFjdXRlO3JpYXMsIGluY2x1c2l2ZSBpbmRlcGVuZGVudGVzLjwvbGk+ICA8bGkgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPlJlc2VuaGFzIGRlIGxpdnJvcyBsaWRvcyBwZWxvcyBpbnRlZ3JhbnRlcy48L2xpPiAgPGxpIHN0eWxlPVwidGV4dC1hbGlnbjoganVzdGlmeTtcIj5BcnJlY2FkYXIgbGl2cm9zIHBhcmEgZGlzdHJpYnVpciBlbnRyZSBjb211bmlkYWRlIGRlIGJhaXhhIHJlbmRhLiBDYXNvIGV1IHJlY2ViYSBsaXZyb3MgZGUgZWRpdG9yYXMgcGFyYSBkaXZ1bGdhciBlIGZhemVyIHJlc2VuaGFzLCBtZSBjb21wcm9tZXRvIGEgZG9hLWxvcyBhcCZvYWN1dGU7cyBhIGxlaXR1cmEgZSBkaXZ1bGdhJmNjZWRpbDsmYXRpbGRlO28uPC9saT4gPC91bD4nXHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGFzIERhdGE7XHJcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1RpdGxlIGFzIEhlYWRpbmdTdHlsZXN9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGluZy9zdHlsZXMnXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHQkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIHBhZGRpbmctYm90dG9tOiAke3RoZW1lLnNwYWNpbmdzLnhsYXJnZX07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmdzLnhsYXJnZX07XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgJHt0aGVtZS5jb2xvcnMubWVkaXVtR3JheX07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICR7SGVhZGluZ1N0eWxlc317XHJcbiAgICAgIG1hcmdpbjo1cmVtO1xyXG5cclxuXHRcdFx0cGFkZGluZy10b3A6ICR7dGhlbWUuc3BhY2luZ3MueGxhcmdlfTtcclxuXHRcdFx0bWFyZ2luLXRvcDoke3RoZW1lLnNwYWNpbmdzLnh4eGh1Z2V9O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmdzLm1lZGl1bX07XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuXHRcdGF7XHJcbiAgXHRcdGNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrZXJHcmF5fTtcclxuXHRcdH1cclxuXHJcbiAgYH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgcGFkZGluZzogMCAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfTtcclxuICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX0gMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXHJcbiAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fTtcclxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmdzLnNtYWxsfSAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5kYXJrZXJHcmF5fTtcclxuICAgIH1cclxuICBgfVxyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9