exports.id = "src_api_load-posts_ts";
exports.ids = ["src_api_load-posts_ts"];
exports.modules = {

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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9hcGkvbG9hZC1wb3N0cy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb25maWcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvZ3JhcGhxbC9mcmFnbWVudHMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvZ3JhcGhxbC9xdWVyaWVzLnRzIiwid2VicGFjazovL2Zyb250ZW5kL2lnbm9yZWR8QzpcXFVzZXJzXFxBY2VyXFxEZXNrdG9wXFxSZWFjdFByb2pldG9zXFxuZXdCbG9nXFxQZXF1ZW5vLUJsb2ctUmVhY3RcXGZyb250ZW5kXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiZGVmYXVsdExvYWRQb3N0c1ZhcmlhYmxlcyIsInNvcnQiLCJzdGFydCIsImxpbWl0IiwibG9hZFBvc3RzIiwidmFyaWFibGVzIiwiZGF0YSIsInJlcXVlc3QiLCJjb25maWciLCJHUkFQSFFMX1FVRVJZIiwidXJsIiwic2l0ZU5hbWUiLCJkZWZhdWx0U2x1ZyIsImdyYXBobFVSTCIsIkdSQVBIUUxfRlJBR01FTlRTIiwiZ3FsIiwiR1JBUEhRTF9RVUVSWV9DQVRFR09SWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFzQk8sTUFBTUEseUJBQTZDLEdBQUc7QUFDekRDLE1BQUksRUFBRSxnQkFEbUQ7QUFFekRDLE9BQUssRUFBQyxDQUZtRDtBQUd6REMsT0FBSyxFQUFDO0FBSG1ELENBQXREO0FBTUEsTUFBTUMsU0FBUyxHQUFHLE9BQ3ZCQyxTQUE2QixHQUFFLEVBRFIsS0FFVztBQUNoQyxRQUFNQyxJQUFJLEdBQUcsTUFBTUMsd0RBQU8sQ0FBQ0Msc0RBQUQsRUFBbUJDLDJEQUFuQixrQ0FDbkJULHlCQURtQixHQUVuQkssU0FGbUIsRUFBMUI7QUFLQSxTQUFPQyxJQUFQO0FBQ0gsQ0FUTSxDOzs7Ozs7Ozs7Ozs7QUMvQlAsK0RBQWU7QUFDYkksS0FBRyxFQUFFLHNEQURRO0FBRWJDLFVBQVEsRUFBRSxXQUZHO0FBR2JDLGFBQVcsRUFBRSxjQUhBO0FBSWJDLFdBQVMsRUFBQztBQUpHLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVPLE1BQU1DLGlCQUFpQixHQUFHQyxnREFBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F4RU8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQ0E7QUFFTyxNQUFNTixhQUFhLEdBQUdNLGdEQUFJO0FBQ2pDLElBQUlELHlEQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBOUJPO0FBZ0NBLE1BQU1FLHNCQUFzQixHQUFHRCxnREFBSTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUk8sQzs7Ozs7Ozs7OztBQ25DUCxlIiwiZmlsZSI6InNyY19hcGlfbG9hZC1wb3N0c190cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVxdWVzdH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcclxuaW1wb3J0IHtTZXR0aW5nc1N0cmFwaX0gZnJvbSAnLi4vc2hhcmVkLXR5cGVzL3NldHRpbmdzLXN0cmFwaSc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgR1JBUEhRTF9RVUVSWSB9IGZyb20gJy4uL2dyYXBocWwvcXVlcmllcyc7XHJcbmltcG9ydCB7IFBvc3RTdHJhcGkgfSBmcm9tICcuLi9zaGFyZWQtdHlwZXMvcG9zdC1zdHJhcGknO1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIExvYWRQb3N0c1ZhcmlhYmxlcyA9IHtcclxuICBjYXRlZ29yeVNsdWc/OiBzdHJpbmc7XHJcbiAgcG9zdFNsdWc/OiBzdHJpbmc7XHJcbiAgcG9zdFNlYXJjaD86IHN0cmluZztcclxuICBhdXRob3JTbHVnPzogc3RyaW5nO1xyXG4gIHRhZ1NsdWc/OiBzdHJpbmc7XHJcbiAgc29ydD86IHN0cmluZztcclxuICBzdGFydD86IG51bWJlcjtcclxuICBsaW1pdD86IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFN0cmFwaVBvc3RBbmRTZXR0aW5ncyA9IHtcclxuICBzZXR0aW5nczogU2V0dGluZ3NTdHJhcGk7XHJcbiAgcG9zdHM6IFBvc3RTdHJhcGlbXTtcclxuICB2YXJpYWJsZXM/OkxvYWRQb3N0c1ZhcmlhYmxlcztcclxuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdExvYWRQb3N0c1ZhcmlhYmxlczogTG9hZFBvc3RzVmFyaWFibGVzID0ge1xyXG4gICAgc29ydDogJ2NyZWF0ZWRBdDpkZXNjJyxcclxuICAgIHN0YXJ0OjAsXHJcbiAgICBsaW1pdDo5LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZFBvc3RzID0gYXN5bmMgKFxyXG4gIHZhcmlhYmxlczogTG9hZFBvc3RzVmFyaWFibGVzID17fSxcclxuKTogUHJvbWlzZTxTdHJhcGlQb3N0QW5kU2V0dGluZ3M+ID0+e1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QoY29uZmlnLmdyYXBobFVSTCwgR1JBUEhRTF9RVUVSWSwge1xyXG4gICAgICAgIC4uLmRlZmF1bHRMb2FkUG9zdHNWYXJpYWJsZXMsXHJcbiAgICAgICAgLi4udmFyaWFibGVzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdXJsOiAnaHR0cHM6Ly9zdHJhcGktbGFuZGluZy1wYWdlcy1wcm9qZWN0LTIuaGVyb2t1YXBwLmNvbScsXG4gIHNpdGVOYW1lOiAnTmFuYXZlcnNvJyxcbiAgZGVmYXVsdFNsdWc6ICdsYW5kaW5nLXBhZ2UnLFxuICBncmFwaGxVUkw6J2h0dHA6Ly8xMjcuMC4wLjE6MTMzNy9ncmFwaHFsJyxcbn07XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdSQVBIUUxfRlJBR01FTlRTID0gZ3FsYFxyXG4gIGZyYWdtZW50IGltYWdlIG9uIFVwbG9hZEZpbGUge1xyXG4gICAgaWRcclxuICAgIGFsdGVybmF0aXZlVGV4dFxyXG4gICAgdXJsXHJcbiAgfVxyXG4gIGZyYWdtZW50IGNvdmVyIG9uIFBvc3Qge1xyXG4gICAgY292ZXIge1xyXG4gICAgICAuLi5pbWFnZVxyXG4gICAgfVxyXG4gIH1cclxuICBmcmFnbWVudCB0YWcgb24gVGFnIHtcclxuICAgIGlkXHJcbiAgICBkaXNwbGF5TmFtZVxyXG4gICAgc2x1Z1xyXG4gIH1cclxuICBmcmFnbWVudCBhdXRob3Igb24gQXV0aG9yIHtcclxuICAgIGlkXHJcbiAgICBkaXNwbGF5TmFtZVxyXG4gICAgc2x1Z1xyXG4gIH1cclxuICBmcmFnbWVudCBjYXRlZ29yeSBvbiBDYXRlZ29yeSB7XHJcbiAgICBpZFxyXG4gICAgZGlzcGxheU5hbWVcclxuICAgIHNsdWdcclxuICB9XHJcbiAgZnJhZ21lbnQgdGFncyBvbiBQb3N0IHtcclxuICAgIHRhZ3Mge1xyXG4gICAgICAuLi50YWdcclxuICAgIH1cclxuICB9XHJcbiAgZnJhZ21lbnQgYXV0aG9yUG9zdCBvbiBQb3N0IHtcclxuICAgIGF1dGhvciB7XHJcbiAgICAgIC4uLmF1dGhvclxyXG4gICAgfVxyXG4gIH1cclxuICBmcmFnbWVudCBjYXRlZ29yaWVzIG9uIFBvc3Qge1xyXG4gICAgY2F0ZWdvcmllcyB7XHJcbiAgICAgIC4uLmNhdGVnb3J5XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZyYWdtZW50IG1lbnVMaW5rIG9uIENvbXBvbmVudE1lbnVNZW51TGluayB7XHJcbiAgICBpZFxyXG4gICAgbGlua1xyXG4gICAgdGV4dFxyXG4gICAgbmV3VGFiXHJcbiAgfVxyXG4gIGZyYWdtZW50IHBvc3Qgb24gUG9zdCB7XHJcbiAgICBpZFxyXG4gICAgc2x1Z1xyXG4gICAgdGl0bGVcclxuICAgIGV4Y2VycHRcclxuICAgIGNvbnRlbnRcclxuICAgIGNyZWF0ZWRBdFxyXG4gICAgYWxsb3dDb21tZW50c1xyXG4gICAgLi4uY292ZXJcclxuICAgIC4uLmNhdGVnb3JpZXNcclxuICAgIC4uLnRhZ3NcclxuICAgIC4uLmF1dGhvclBvc3RcclxuICB9XHJcbiAgZnJhZ21lbnQgc2V0dGluZ3Mgb24gU2V0dGluZ3Mge1xyXG4gICAgaWRcclxuICAgIGJsb2dOYW1lXHJcbiAgICBkZXNjcmlwdGlvblxyXG4gICAgbG9nbyB7XHJcbiAgICAgIC4uLmltYWdlXHJcbiAgICB9XHJcbiAgICBtZW51TGluayB7XHJcbiAgICAgIC4uLm1lbnVMaW5rXHJcbiAgICB9XHJcbiAgICB0ZXh0XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBHUkFQSFFMX0ZSQUdNRU5UUyB9IGZyb20gJy4vZnJhZ21lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBHUkFQSFFMX1FVRVJZID0gZ3FsYFxyXG4gICR7R1JBUEhRTF9GUkFHTUVOVFN9XHJcbiAgcXVlcnkgR0VUX1BPU1RTKFxyXG4gICAgJGNhdGVnb3J5U2x1ZzogU3RyaW5nXHJcbiAgICAkcG9zdFNsdWc6IFN0cmluZ1xyXG4gICAgJHBvc3RTZWFyY2g6IFN0cmluZ1xyXG4gICAgJGF1dGhvclNsdWc6IFN0cmluZ1xyXG4gICAgJHRhZ1NsdWc6IFN0cmluZ1xyXG4gICAgJHNvcnQ6IFN0cmluZyA9IFwiY3JlYXRlZEF0OmRlc2NcIlxyXG4gICAgJHN0YXJ0OiBJbnQgPSAwXHJcbiAgICAkbGltaXQ6IEludCA9IDEwXHJcbiAgKSB7XHJcbiAgICBzZXR0aW5nIHtcclxuICAgICAgLi4uc2V0dGluZ3NcclxuICAgIH1cclxuICAgIHBvc3RzKFxyXG4gICAgICBzdGFydDogJHN0YXJ0XHJcbiAgICAgIGxpbWl0OiAkbGltaXRcclxuICAgICAgc29ydDogJHNvcnRcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBzbHVnOiAkcG9zdFNsdWdcclxuICAgICAgICB0aXRsZV9jb250YWluczogJHBvc3RTZWFyY2hcclxuICAgICAgICBjYXRlZ29yaWVzOiB7IHNsdWc6ICRjYXRlZ29yeVNsdWcgfVxyXG4gICAgICAgIGF1dGhvcjogeyBzbHVnOiAkYXV0aG9yU2x1ZyB9XHJcbiAgICAgICAgdGFnczogeyBzbHVnOiAkdGFnU2x1ZyB9XHJcbiAgICAgIH1cclxuICAgICkge1xyXG4gICAgICAuLi5wb3N0XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdSQVBIUUxfUVVFUllfQ0FURUdPUlkgPSBncWxgXHJcbiAgcXVlcnkgR0VUX0NBVEVHT1JJRVN7XHJcbiAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgX2lkXHJcbiAgICAgIGRpc3BsYXlOYW1lXHJcbiAgICAgIHNsdWdcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=