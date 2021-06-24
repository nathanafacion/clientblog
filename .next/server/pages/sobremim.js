(function() {
var exports = {};
exports.id = "pages/sobremim";
exports.ids = ["pages/sobremim"];
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

/***/ "./src/pages/sobremim.tsx":
/*!********************************!*\
  !*** ./src/pages/sobremim.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _api_load_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/load-posts */ "./src/api/load-posts.ts");
/* harmony import */ var _templates_OtherPagesTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/OtherPagesTemplate */ "./src/templates/OtherPagesTemplate/index.tsx");
/* harmony import */ var _templates_OtherPagesTemplate_mock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/OtherPagesTemplate/mock */ "./src/templates/OtherPagesTemplate/mock.ts");


var _jsxFileName = "C:\\Users\\Acer\\Desktop\\ReactProjetos\\newBlog\\Pequeno-Blog-React\\frontend\\src\\pages\\sobremim.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function Index({
  post,
  setting,
  variables
}) {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates_OtherPagesTemplate__WEBPACK_IMPORTED_MODULE_4__.OtherPagesTemplate, {
      title: _templates_OtherPagesTemplate_mock__WEBPACK_IMPORTED_MODULE_5__.default.about.title,
      content: _templates_OtherPagesTemplate_mock__WEBPACK_IMPORTED_MODULE_5__.default.about.content,
      settings: setting
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
const getStaticProps = async () => {
  let data = null;

  try {
    data = await (0,_api_load_posts__WEBPACK_IMPORTED_MODULE_3__.loadPosts)();
  } catch (e) {
    data = null;
  }

  console.log('teste');
  console.log(data);

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true
    };
  }

  console.log(data.posts[0].cover);
  return {
    props: {
      posts: data.posts,
      setting: data.setting,
      variables: _objectSpread({}, _api_load_posts__WEBPACK_IMPORTED_MODULE_3__.defaultLoadPostsVariables)
    },
    revalidate: 24 * 60 * 60
  };
};

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

/***/ "@styled-icons/material-outlined/Close":
/*!********************************************************!*\
  !*** external "@styled-icons/material-outlined/Close" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@styled-icons/material-outlined/Close");;

/***/ }),

/***/ "@styled-icons/material-outlined/KeyboardArrowUp":
/*!******************************************************************!*\
  !*** external "@styled-icons/material-outlined/KeyboardArrowUp" ***!
  \******************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@styled-icons/material-outlined/KeyboardArrowUp");;

/***/ }),

/***/ "@styled-icons/material-outlined/Menu":
/*!*******************************************************!*\
  !*** external "@styled-icons/material-outlined/Menu" ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@styled-icons/material-outlined/Menu");;

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-request");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","src_api_load-posts_ts-src_templates_Base_index_tsx"], function() { return __webpack_exec__("./src/pages/sobremim.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3RDb250YWluZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvc29icmVtaW0udHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3RlbXBsYXRlcy9PdGhlclBhZ2VzVGVtcGxhdGUvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3RlbXBsYXRlcy9PdGhlclBhZ2VzVGVtcGxhdGUvbW9jay50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy90ZW1wbGF0ZXMvT3RoZXJQYWdlc1RlbXBsYXRlL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIkBzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvQ2xvc2VcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIkBzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvS2V5Ym9hcmRBcnJvd1VwXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc3R5bGVkLWljb25zL21hdGVyaWFsLW91dGxpbmVkL01lbnVcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcImdyYXBocWwtcmVxdWVzdFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsicG9zdENvbnRhaW5lclN0eWxlcyIsIm1heCIsInRoZW1lIiwiY3NzIiwic2l6ZXMiLCJjb250ZW50IiwiUG9zdENvbnRhaW5lciIsInN0eWxlZCIsInNpemUiLCJzcGFjaW5ncyIsImxhcmdlIiwiSW5kZXgiLCJwb3N0Iiwic2V0dGluZyIsInZhcmlhYmxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwicSIsImJsb2dOYW1lIiwiTW9jayIsImdldFN0YXRpY1Byb3BzIiwiZGF0YSIsImxvYWRQb3N0cyIsImUiLCJjb25zb2xlIiwibG9nIiwicG9zdHMiLCJsZW5ndGgiLCJub3RGb3VuZCIsImNvdmVyIiwicHJvcHMiLCJkZWZhdWx0TG9hZFBvc3RzVmFyaWFibGVzIiwicmV2YWxpZGF0ZSIsIk90aGVyUGFnZXNUZW1wbGF0ZSIsInRpdGxlIiwic2V0dGluZ3MiLCJoYW5kbGVCYWNrIiwicHVzaCIsImFib3V0IiwiY29udGFjdCIsImdhcm90YU5vQ29udHJvbGUiLCJ2aW1MaVZlbmNpIiwiV3JhcHBlciIsInhsYXJnZSIsImNvbG9ycyIsIm1lZGl1bUdyYXkiLCJIZWFkaW5nU3R5bGVzIiwieHh4aHVnZSIsIm1lZGl1bSIsImRhcmtlckdyYXkiLCJCdXR0b25Db250YWluZXIiLCJCdXR0b24iLCJwcmltYXJ5Iiwid2hpdGUiLCJzbWFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUEsTUFBTUEsbUJBQW1CLEdBQUc7QUFDMUJDLEtBQUcsRUFBR0MsS0FBRCxJQUF5QkMsc0RBQXpCLHNCQUNVRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUgsR0FEdEIsQ0FE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UUFBTixDQUFlbUMsTUFSOUIsRUFTYTFDLEtBQUssQ0FBQ08sUUFBTixDQUFldUMsT0FUNUIsRUFVb0I5QyxLQUFLLENBQUNPLFFBQU4sQ0FBZXdDLE1BVm5DLEVBZVUvQyxLQUFLLENBQUMyQyxNQUFOLENBQWFLLFVBZnZCLENBRGlCLENBQWI7QUFzQkEsTUFBTUMsZUFBZSxHQUFHNUMsdUVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDeEIsQ0FBQztBQUFFTDtBQUFGLENBQUQsS0FBZUMsc0RBQWYsd0VBQ2FELEtBQUssQ0FBQ08sUUFBTixDQUFlQyxLQUQ1QixFQUVVUixLQUFLLENBQUNPLFFBQU4sQ0FBZUMsS0FGekIsQ0FEd0IsQ0FBckI7QUFTQSxNQUFNMEMsTUFBTSxHQUFHN0MsMEVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDZixDQUFDO0FBQUVMO0FBQUYsQ0FBRCxLQUFlQyxzREFBZiwyR0FDY0QsS0FBSyxDQUFDMkMsTUFBTixDQUFhUSxPQUQzQixFQUVTbkQsS0FBSyxDQUFDMkMsTUFBTixDQUFhUyxLQUZ0QixFQUlXcEQsS0FBSyxDQUFDTyxRQUFOLENBQWU4QyxLQUoxQixFQUltQ3JELEtBQUssQ0FBQ08sUUFBTixDQUFlQyxLQUpsRCxFQU9nQlIsS0FBSyxDQUFDMkMsTUFBTixDQUFhSyxVQVA3QixDQURlLENBQVosQzs7Ozs7Ozs7Ozs7QUNqQ1AsbUU7Ozs7Ozs7Ozs7O0FDQUEsNkU7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvc29icmVtaW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7Y3NzLERlZmF1bHRUaGVtZX0gICBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgdHlwZSBQb3N0Q29udGFpbmVyUHJvcHMgPSB7XHJcbiAgc2l6ZTogJ21heCcgfCAnY29udGVudCc7XHJcbn07XHJcblxyXG5jb25zdCBwb3N0Q29udGFpbmVyU3R5bGVzID0ge1xyXG4gIG1heDogKHRoZW1lOiBEZWZhdWx0VGhlbWUpID0+IGNzc2BcclxuICAgIG1heC13aWR0aDogJHt0aGVtZS5zaXplcy5tYXh9O1xyXG4gIGAsXHJcbiAgY29udGVudDogKHRoZW1lOiBEZWZhdWx0VGhlbWUpID0+IGNzc2BcclxuICAgIG1heC13aWR0aDogJHt0aGVtZS5zaXplcy5jb250ZW50fTtcclxuICBgLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBvc3RDb250YWluZXIgPSBzdHlsZWQuZGl2PFBvc3RDb250YWluZXJQcm9wcz5gXHJcbiR7KHsgdGhlbWUsIHNpemUgfSkgPT4gY3NzYFxyXG4gICB3aWR0aDogMTAwJTtcclxuICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgIHBhZGRpbmc6IDAgJHt0aGVtZS5zcGFjaW5ncy5sYXJnZX07XHJcbiAgJHtwb3N0Q29udGFpbmVyU3R5bGVzW3NpemVdKHRoZW1lKX1cclxuXHJcbiBgfVxyXG5gO1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQge0dldFN0YXRpY1Byb3BzfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuaW1wb3J0IHtkZWZhdWx0TG9hZFBvc3RzVmFyaWFibGVzLCBsb2FkUG9zdHMsIFN0cmFwaVBvc3RBbmRTZXR0aW5nc30gZnJvbSAnLi4vYXBpL2xvYWQtcG9zdHMnO1xyXG5pbXBvcnQgeyBPdGhlclBhZ2VzVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMvT3RoZXJQYWdlc1RlbXBsYXRlJztcclxuaW1wb3J0ICogYXMgTW9jayBmcm9tICcuLi90ZW1wbGF0ZXMvT3RoZXJQYWdlc1RlbXBsYXRlL21vY2snO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHsgcG9zdCwgc2V0dGluZywgdmFyaWFibGVzfTogU3RyYXBpUG9zdEFuZFNldHRpbmdzKXtcclxuICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICAgcmV0dXJuIChcclxuICAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICBQZXNxdWlzYToge3JvdXRlci5xdWVyeS5xfSAtIHtzZXR0aW5nLmJsb2dOYW1lfVxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE90aGVyUGFnZXNUZW1wbGF0ZSB0aXRsZT17TW9jay5kZWZhdWx0LmFib3V0LnRpdGxlfSBjb250ZW50PXtNb2NrLmRlZmF1bHQuYWJvdXQuY29udGVudH0gc2V0dGluZ3M9e3NldHRpbmd9IC8+XHJcbiAgICAgPC8+XHJcbiAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPFN0cmFwaVBvc3RBbmRTZXR0aW5ncz4gPSBhc3luYygpID0+e1xyXG4gIGxldCBkYXRhID1udWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgZGF0YSA9IGF3YWl0IGxvYWRQb3N0cygpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBkYXRhID0gbnVsbDtcclxuICB9XHJcbiAgY29uc29sZS5sb2coJ3Rlc3RlJylcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBpZighZGF0YSB8fCAhZGF0YS5wb3N0cyB8fCAhZGF0YS5wb3N0cy5sZW5ndGgpe1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLnBvc3RzWzBdLmNvdmVyKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHBvc3RzOmRhdGEucG9zdHMsXHJcbiAgICAgICAgc2V0dGluZzogZGF0YS5zZXR0aW5nLFxyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgLi4uZGVmYXVsdExvYWRQb3N0c1ZhcmlhYmxlcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICByZXZhbGlkYXRlOiAyNCo2MCo2MCxcclxuICAgIH07XHJcblxyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQge1NldHRpbmdzU3RyYXBpIH0gZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVzL3NldHRpbmdzLXN0cmFwaSc7XHJcbmltcG9ydCB7QmFzZVRlbXBsYXRlIH0gZnJvbSAnLi4vQmFzZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBIdG1sQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IdG1sQ29udGVudCc7XHJcbmltcG9ydCB7IFBvc3RDb250YWluZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3RDb250YWluZXInO1xyXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkaW5nJztcclxuXHJcbmV4cG9ydCB0eXBlIE90aGVyUGFnZXNUZW1wbGF0ZVByb3BzID0ge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIHNldHRpbmdzOiBTZXR0aW5nc1N0cmFwaTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBPdGhlclBhZ2VzVGVtcGxhdGUgPSAoeyB0aXRsZSwgY29udGVudCwgc2V0dGluZ3MgfTogT3RoZXJQYWdlc1RlbXBsYXRlUHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGhhbmRsZUJhY2sgPSBhc3luYygpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJhc2VUZW1wbGF0ZSBzZXR0aW5ncz17c2V0dGluZ3N9PlxyXG4gICAgICA8U3R5bGVkLldyYXBwZXI+XHJcbiAgICAgICAgPFBvc3RDb250YWluZXIgc2l6ZT1cIm1heFwiPlxyXG4gICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cImJpZ1wiPiB7dGl0bGV9IDwvSGVhZGluZz5cclxuICAgICAgICA8L1Bvc3RDb250YWluZXI+XHJcbiAgICAgICAgPFBvc3RDb250YWluZXIgc2l6ZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgIDxIdG1sQ29tcG9uZW50IGh0bWw9e2NvbnRlbnR9IC8+XHJcbiAgICAgICAgPC9Qb3N0Q29udGFpbmVyPlxyXG5cclxuICAgIDwvU3R5bGVkLldyYXBwZXI+XHJcblxyXG5cclxuICAgICAgPFN0eWxlZC5CdXR0b25Db250YWluZXI+XHJcbiAgICAgICAgPFN0eWxlZC5CdXR0b24gb25DbGljaz17aGFuZGxlQmFja30+XHJcbiAgICAgICAgICB7J1ZvbHRhcid9XHJcbiAgICAgICAgPC9TdHlsZWQuQnV0dG9uPlxyXG4gICAgICA8L1N0eWxlZC5CdXR0b25Db250YWluZXI+XHJcbiAgICA8L0Jhc2VUZW1wbGF0ZT5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdFxyXG4gICAge1xyXG5cclxuICAgICAgYWJvdXQ6IHtcclxuICAgICAgICB0aXRsZTogJ1NvYnJlIE1pbScsXHJcbiAgICAgICAgY29udGVudDogJzxwPk1lIGNoYW1vIE5hdGhhbmEuJm5ic3A7PC9wPiA8cD5Tb3UgdW1hIHBlc3NvYSBjdXJpb3NhIGUgcXVlIGFkb3JhIG5vdmFzIGlkZWlhcy4gQW8gbWVzbW8gdGVtcG8sIG1lIHByZW9jdXBvIG11aXRvIGNvbSBwZXNzb2FzLiBBY3JlZGl0byBxdWUgdG9kbyBtdW5kbyB0ZW0gc3VhIGZvcm1hIGRlIGZhemVyIGEgZGlmZXJlbiZjY2VkaWw7YSBuYSB2aWRhIGRhcyBwZXNzb2FzLCBlbnQmYXRpbGRlO28gY29tIG1ldXMgcHJvamV0b3MgdGVudG8gZmF6ZXIgbyBtJmFhY3V0ZTt4aW1vIGRpc3NvLjwvcD4gPHA+RW1ib3JhIGJvYSBwYXJ0ZSBkb3MgbWV1cyBwcm9qZXRvcyBlc3QmYXRpbGRlO28gcmVsYWNpb25hZG9zIGNvbSBlc2NyZXZlciwgYSBtaW5oYSBmb3JtYSZjY2VkaWw7JmF0aWxkZTtvICZlYWN1dGU7IENpJmVjaXJjO25jaWFzIGRhIENvbXB1dGEmY2NlZGlsOyZhdGlsZGU7by4gTiZhdGlsZGU7byBtZSBpbXBvcnRvIGVtIG1lIGF2ZW50dXJhciBlbSAmYWFjdXRlO3JlYSBkaWZlcmVudGUgZGVzc2EsIG1hcyB0ZW5obyB1bWEgcGFpeCZhdGlsZGU7byBwb3IgbiZ1YWN1dGU7bWVyb3MgZSBwcm9ncmFtYXIgdGFtYiZlYWN1dGU7bS48L3A+IDxwPkZpeiBlc3BlY2lhbGl6YSZjY2VkaWw7JmF0aWxkZTtvIGUgbWVzdHJhZG8gbmEgJmFhY3V0ZTtyZWEuIFR1ZG8gaXNzbyBlbSB1bml2ZXJzaWRhZGUgcCZ1YWN1dGU7YmxpY2EsIG8gcXVlIHNpZ25pZmljYSBxdWUgZXUgc2VtcHJlIG1lIGVzZm9yY2VpIG11aXRvIHBhcmEgYWxjYW4mY2NlZGlsO2FyIG9zIG1ldXMgc29uaG9zLiZuYnNwOzwvcD4gPHA+PGJyPjwvcD4gPHA+PHN0cm9uZz5CbG9nIGRhIE5hbmE8L3N0cm9uZz48L3A+IDxwPkVzcGVybyBxdWUgZXNzZSBwZXF1ZW5vIGJsb2cgcG9zc2EgYWp1ZGFyIG91dHJhcyBwZXNzb2FzIGVuY29udHJhciBjb250ZSZ1YWN1dGU7ZG8gcXVlIGFncmVndWUgYWxnbyBhIGVsYXMuIFBlbnNlaSBlbSBmb2NhciBzJm9hY3V0ZTsgZW0gcHJvZ3JhbWEmY2NlZGlsOyZhdGlsZGU7bywgbWFzIGRhJmlhY3V0ZTsgcGVuc2VpIHVtIHBvdWNvIG1haXMgZSByZXNvbHZpIGZvY2FyIGVtIHR1ZG8gcXVlIGFjaGFyIG5vIGNhbWluaG8gcXVlIGV1IHBlcmNvcnJlci4gQWZpbmFsIGEgdmlkYSAmZWFjdXRlOyBmZWl0byBkZSB0YW50YXMgY29pc2FzLCBwb3JxdWUgbGltaXRhciBxdWFuZG8gcG9kZW1vcyBleHBhbmRpcj88L3A+IDxwPjxicj48L3A+IDxwPjxzdHJvbmc+Q29udGF0bzwvc3Ryb25nPjwvcD4gPHA+Q2FzbyBwcmVjaXNlIGVudHJhciBlbSBjb250YXRvLCBtZSBtYW5kZSB1bSBlLW1haWw6IG5hdGhhbmFmYWNpb25AZ21haWwuY29tPC9wPiA8cD48YnI+PC9wPidcclxuICAgICAgfSxcclxuICAgICAgY29udGFjdDoge1xyXG4gICAgICAgIHRpdGxlOiAnQ29udGF0bycsXHJcbiAgICAgICAgY29udGVudDogJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIDxicj48YnI+IExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeXMgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLidcclxuICAgICAgfSxcclxuICAgICAgZ2Fyb3RhTm9Db250cm9sZToge1xyXG4gICAgICAgIHRpdGxlOiAnUHJvamV0bzogR2Fyb3RhIG5vIENvbnRyb2xlJyxcclxuICAgICAgICBjb250ZW50OiAnPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPk8gc2l0ZSA8YSBocmVmPVwiaHR0cHM6Ly9nYXJvdGFub2NvbnRyb2xlLmNvbS5ici9cIj5HYXJvdGEgbm8gQ29udHJvbGU8L2E+ICZlYWN1dGU7IHVtIHNpdGUgaW5kZXBlbmRlbnRlIHF1ZSBzdXJnaXUgZW0gMjAyMCBjb20gbyBvYmpldGl2byBkZSBhcHJlc2VudGFyIGEgdmlzJmF0aWxkZTtvIGRlIHVtYSBnYXJvdGEgZ2FtZXIgc29icmUgbyBtdW5kbyBkb3Mgam9nb3MuPC9wPiA8cCBzdHlsZT1cInRleHQtYWxpZ246IGp1c3RpZnk7XCI+QSBtYWlvcmlhIGRvIHAmdWFjdXRlO2JsaWNvIGdhbWVyIGhvamUgJmVhY3V0ZTsgY29uc3RpdHUmaWFjdXRlO2RvIGRlIGhvbWVucywgZW50JmF0aWxkZTtvLCBlbWJvcmEgbyBzaXRlIHRlbmhhIHNpZG8gZmVpdG8gcGFyYSB0b2RhcyBhcyBwZXNzb2FzLCB1bSBkb3MgcHJpbmNpcGFpcyBvYmpldGl2b3MgJmVhY3V0ZTsgZmF6ZXIgY29tIHF1ZSBtYWlzIG11bGhlcmVzIHBvc3NhbSB2aXIgYSBnb3N0YXIgZG8gYXNzdW50bywgb3UgYXQmZWFjdXRlOyBtZXNtbyBxdWUgdGVuaGFtIG1haXMgY29yYWdlbSBwYXJhIGV4cG9yIHN1YXMgb3Bpbmkmb3RpbGRlO2VzIHNvYnJlLjwvcD4gPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPkNvbSBhcGVuYXMgdW0gYW5vLCBub3NzYSBlcXVpcGUgaiZhYWN1dGU7IHRlbTE0IHBlc3NvYXMgZSByZWNlYmVtb3MgYXBvaW8gZGUgZW1wcmVzYXMgZ3JhbmRlcyBlIHBlcXVlbmFzIHBhcmEgY29uc2VndWlyIGpvZ29zIHBhcmEgYW4mYWFjdXRlO2xpc2VzIGUgYXNzaW0gbWFudGVyIG8gc2l0ZS48L3A+IDxwIHN0eWxlPVwidGV4dC1hbGlnbjoganVzdGlmeTtcIj5Wb2MmZWNpcmM7IGVuY29udHJhciZhYWN1dGU7IG9zIHNlZ3VpbnRlcyBjb250ZSZ1YWN1dGU7ZG9zIG5vIHNpdGU6PC9wPiA8dWw+IDxsaSBzdHlsZT1cInRleHQtYWxpZ246anVzdGlmeTtcIj5BbiZhYWN1dGU7bGlzZXM6IHBhcmEgYWp1ZGFyIG8gbGVpdG9yIGEgY29uaGVjZXIgbm92b3Mgam9nb3MsIG91IHNhYmVyIHNlIHVtIGpvZ28gcG9kZSBzZXIgZG8gc2V1IGFncmFkbywgb3UgbiZhdGlsZGU7by4gRSBwYXJhIGFqdWRhciBwcmluY2lwYWxtZW50ZSBuYSB2aXNpYmlsaWRhZGUgZGUgam9nb3MgaW5kaWVzLjwvbGk+IDxsaSBzdHlsZT1cInRleHQtYWxpZ246IGp1c3RpZnk7XCI+TGlzdGFzOiB1bWEgYW4mYWFjdXRlO2xpc2Ugc29icmUgYWxndW0gYXNzdW50bywgcXVlIGdlcmEgdW1hIGxpc3RhIGNvbSBvIG9iamV0aXZvIGRlIGNsYXNzaWZpY2FyIGJhc2VhZG8gZW0gYWxndW0gY3JpdCZlYWN1dGU7cmlvLiBDb20gaXNzbywgcXVlcm8gaW5jZW50aXZhciBvIGxlaXRvciBhIHBlbnNhciBxdWFsIGEgY2xhc3NpZmljYSZjY2VkaWw7JmF0aWxkZTtvIHF1ZSBlbGUgbWVzbW8gZmFyaWEgZSBnZXJhciB1bWEgcmVmbGV4JmF0aWxkZTtvLCBvdSBkaXNjdXNzJmF0aWxkZTtvIHNvYnJlIG8gYXNzdW50bzwvbGk+IDxsaSBzdHlsZT1cInRleHQtYWxpZ246IGp1c3RpZnk7XCI+Q3VyaW9zaWRhZGVzOiBzJmF0aWxkZTtvIGVzY29saGlkb3MgYXNzdW50b3MgaW5jb211bnMgcGFyYSBzZXJlbSBhYm9yZGFkb3MgZSBpbnN0aWdhciBhIGN1cmlvc2lkYWRlIGRvIGxlaXRvci4gRW0gbXVpdG9zIGNhc29zLCBvcyBhcnRpZ29zIHNlbGVjaW9uYWRvcyBzJmF0aWxkZTtvIGNpZW50JmlhY3V0ZTtmaWNvcywgcGFyYSBvIGxlaXRvciBwZXJjZWJlciBxdWUgYSBpbXBvcnQmYWNpcmM7bmNpYSBkb3Mgam9nb3MgZXN0JmF0aWxkZTtvIGVtIHRvZG9zIG9zIGx1Z2FyZXMuPC9saT4gPGxpIHN0eWxlPVwidGV4dC1hbGlnbjoganVzdGlmeTtcIj5FbnRyZXZpc3RhOiBzJmF0aWxkZTtvIGZlaXRhcyBjb20gcHJvZmlzc2lvbmFpcyBkYSAmYWFjdXRlO3JlYSBkZSBqb2dvcyBwYXJhIGRpdnVsZ2FyIHRyYWJhbGhvcyBtZW5vcyBjb25oZWNpZG9zLiAmRWFjdXRlOyB1bWEgb3BvcnR1bmlkYWRlIGRlIGZhemVyIG9zIHVzdSZhYWN1dGU7cmlvcyBzZSBpbnRlcmVzc2FyZW0gcG9yIGpvZ29zIGRlIG1lbm9yIG9yJmNjZWRpbDthbWVudG8uIEVzc2Ugc2l0ZSBxdWVyIGFwb2lhciBvcyBqb2dvcyBpbmRpZXMsIHByaW5jaXBhbG1lbnRlIG9zIGJyYXNpbGVpcm9zLjwvbGk+IDwvdWw+J1xyXG4gICAgICB9LFxyXG4gICAgICB2aW1MaVZlbmNpOiB7XHJcbiAgICAgICAgdGl0bGU6ICdQcm9qZXRvOiBWaW0gTGkgVmVuY2knLFxyXG4gICAgICAgIGNvbnRlbnQ6ICc8cCBzdHlsZT1cInRleHQtYWxpZ246IGp1c3RpZnk7XCI+RXN0ZSBwcm9qZXRvIGFpbmRhIGVzdCZhYWN1dGU7IGVtIGRlc2Vudm9sdmltZW50bywgb3Ugc2VqYSwgZXN0JmFhY3V0ZTsgbmFzIGZhc2VzIG9uZGUgZXN0b3UgZGV0ZXJtaW5hbmRvIHF1YWlzIG9iamV0aXZvcyBxdWVybyBhbGNhbiZjY2VkaWw7YXIgY29tIGVsZS48L3A+IDxwIHN0eWxlPVwidGV4dC1hbGlnbjoganVzdGlmeTtcIj5Db21vIHNlbXByZSBnb3N0ZWkgZGUgbGVyLCBxdWVyaWEgY29uc2VndWlyIHVtYSBmb3JtYSBkZSBhanVkYXIgb3V0cmFzIHBlc3NvYXMgYSB0ZXJlbSBvIGdvc3RvIHBlbGEgbGVpdHVyYSBlIG1haXMgYWNlc3NvIGEgbGl2cm9zLjwvcD4gPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPlBhcmEgaXNzbywgbyBxdWUgdGVuaG8gZGUgaWRlaWFzIGluaWNpYWlzIHNlcmlhOjwvcD4gPHVsPiA8bGkgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPkVudHJldmlzdGFzIGNvbSBhdXRvcmVzIG5hY2lvbmFpcyBwYXJhIGVudGVuZGVyIGNvbW8gZnVuY2lvbmEgbyBtZXJjYWRvIGF0dWFsIGUgYWp1ZGFyIG5vdm9zIGVzY3JpdG9yZXMgYSBhbGNhbiZjY2VkaWw7YXIgc2V1cyBzb25ob3MuPC9saT4gIDxsaSBzdHlsZT1cInRleHQtYWxpZ246IGp1c3RpZnk7XCI+RGl2dWxnYSZjY2VkaWw7JmF0aWxkZTtvIGRlIHYmYWFjdXRlO3Jpb3MgdGlwb3MgZGUgbGl2cm9zLCBpbmNsdXNpdmUgb3MgaW5kZXBlbmRlbnRlcy48L2xpPiA8bGkgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPlRyYXplciBhcyBwcmluY2lwYWlzIG5vdmlkYWRlcyBsaXRlciZhYWN1dGU7cmlhcywgaW5jbHVzaXZlIGluZGVwZW5kZW50ZXMuPC9saT4gIDxsaSBzdHlsZT1cInRleHQtYWxpZ246IGp1c3RpZnk7XCI+UmVzZW5oYXMgZGUgbGl2cm9zIGxpZG9zIHBlbG9zIGludGVncmFudGVzLjwvbGk+ICA8bGkgc3R5bGU9XCJ0ZXh0LWFsaWduOiBqdXN0aWZ5O1wiPkFycmVjYWRhciBsaXZyb3MgcGFyYSBkaXN0cmlidWlyIGVudHJlIGNvbXVuaWRhZGUgZGUgYmFpeGEgcmVuZGEuIENhc28gZXUgcmVjZWJhIGxpdnJvcyBkZSBlZGl0b3JhcyBwYXJhIGRpdnVsZ2FyIGUgZmF6ZXIgcmVzZW5oYXMsIG1lIGNvbXByb21ldG8gYSBkb2EtbG9zIGFwJm9hY3V0ZTtzIGEgbGVpdHVyYSBlIGRpdnVsZ2EmY2NlZGlsOyZhdGlsZGU7by48L2xpPiA8L3VsPidcclxuICAgICAgfVxyXG5cclxuICAgIH0gYXMgRGF0YTtcclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7VGl0bGUgYXMgSGVhZGluZ1N0eWxlc30gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkaW5nL3N0eWxlcydcclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdCR7KHsgdGhlbWUgfSkgPT4gY3NzYFxyXG4gICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MueGxhcmdlfTtcclxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MueGxhcmdlfTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAke3RoZW1lLmNvbG9ycy5tZWRpdW1HcmF5fTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgJHtIZWFkaW5nU3R5bGVzfXtcclxuICAgICAgbWFyZ2luOjVyZW07XHJcblxyXG5cdFx0XHRwYWRkaW5nLXRvcDogJHt0aGVtZS5zcGFjaW5ncy54bGFyZ2V9O1xyXG5cdFx0XHRtYXJnaW4tdG9wOiR7dGhlbWUuc3BhY2luZ3MueHh4aHVnZX07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZ3MubWVkaXVtfTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG5cdFx0YXtcclxuICBcdFx0Y29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmtlckdyYXl9O1xyXG5cdFx0fVxyXG5cclxuICBgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXHJcbiAgICBwYWRkaW5nOiAwICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9O1xyXG4gICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmdzLmxhcmdlfSAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZ3Muc21hbGx9ICR7dGhlbWUuc3BhY2luZ3MubGFyZ2V9O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmRhcmtlckdyYXl9O1xyXG4gICAgfVxyXG4gIGB9XHJcbmA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvQ2xvc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtaWNvbnMvbWF0ZXJpYWwtb3V0bGluZWQvS2V5Ym9hcmRBcnJvd1VwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3R5bGVkLWljb25zL21hdGVyaWFsLW91dGxpbmVkL01lbnVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtcmVxdWVzdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9