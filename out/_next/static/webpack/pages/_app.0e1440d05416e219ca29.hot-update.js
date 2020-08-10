webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar/navbar.tsx":
/*!**************************************!*\
  !*** ./components/navbar/navbar.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_routes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/routes.config */ "./config/routes.config.ts");
/* harmony import */ var _navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar-link/navbar-link */ "./components/navbar/navbar-link/navbar-link.tsx");
/* harmony import */ var _navbar_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.style */ "./components/navbar/navbar.style.tsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\components\\navbar\\navbar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var MainLogo = '/img/logo-NEW.svg';

var NavBar = function NavBar(_ref) {
  var footerBar = _ref.footerBar;
  return __jsx("nav", {
    role: "navigation",
    className: "navbar",
    "aria-label": "main navigation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "navbar-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "brand-wrapper level",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("img", {
    width: "170",
    src: MainLogo,
    alt: "Legal Serve - Process Server in Bedfordshire & Buckinghamshire",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "level-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "07853 166 674")), __jsx("div", {
    className: "navbar-routes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Home, {
    footerBar: footerBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx(_navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Services, {
    footerBar: footerBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })), __jsx(_navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Contact, {
    footerBar: footerBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })), function () {
    if (!footerBar) {
      return __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_4__["BurgerMenu"], {
        className: "is-hidden-tablet",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }
      }, __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_4__["BurgerMenuIcon"], {
        className: "is-visible-mobile",
        icon: "bars",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 15
        }
      }));
    }
  }(), __jsx(_navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Clients, {
    footerBar: footerBar,
    lastLink: true,
    isHiddenMobile: !footerBar && true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  })))));
};

_c = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c;

$RefreshReg$(_c, "NavBar");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnRzeCJdLCJuYW1lcyI6WyJNYWluTG9nbyIsIk5hdkJhciIsImZvb3RlckJhciIsIlJvdXRlc0NvbmZpZyIsIkhvbWUiLCJTZXJ2aWNlcyIsIkNvbnRhY3QiLCJDbGllbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLG1CQUFqQjs7QUFNQSxJQUFNQyxNQUE2QixHQUFHLFNBQWhDQSxNQUFnQztBQUFBLE1BQ3BDQyxTQURvQyxRQUNwQ0EsU0FEb0M7QUFBQSxTQUdwQztBQUNFLFFBQUksRUFBQyxZQURQO0FBRUUsYUFBUyxFQUFDLFFBRlo7QUFHRSxrQkFBVyxpQkFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBQyxLQUFYO0FBQ0UsT0FBRyxFQUFFRixRQURQO0FBRUUsT0FBRyxFQUFDLGdFQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUlFO0FBQU0sYUFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsQ0FERixFQU9FO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQseUZBQ01HLGtFQUFZLENBQUNDLElBRG5CO0FBRUUsYUFBUyxFQUFFRixTQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixFQUtFLE1BQUMsZ0VBQUQseUZBQ01DLGtFQUFZLENBQUNFLFFBRG5CO0FBRUUsYUFBUyxFQUFFSCxTQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMRixFQVNFLE1BQUMsZ0VBQUQseUZBQ01DLGtFQUFZLENBQUNHLE9BRG5CO0FBRUUsYUFBUyxFQUFFSixTQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FURixFQWFJLFlBQU07QUFBRSxRQUFJLENBQUNBLFNBQUwsRUFBZ0I7QUFDeEIsYUFDRSxNQUFDLHdEQUFEO0FBQ0UsaUJBQVMsRUFBQyxrQkFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUUsTUFBQyw0REFBRDtBQUNFLGlCQUFTLEVBQUMsbUJBRFo7QUFFRSxZQUFJLEVBQUMsTUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FERjtBQVFEO0FBQUMsR0FURCxFQWJILEVBdUJFLE1BQUMsZ0VBQUQseUZBQ01DLGtFQUFZLENBQUNJLE9BRG5CO0FBRUUsYUFBUyxFQUFFTCxTQUZiO0FBR0UsWUFBUSxFQUFFLElBSFo7QUFJRSxrQkFBYyxFQUFFLENBQUNBLFNBQUQsSUFBYyxJQUpoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBdkJGLENBUEYsQ0FMRixDQUhvQztBQUFBLENBQXRDOztLQUFNRCxNO0FBaURTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjBlMTQ0MGQwNTQxNmUyMTljYTI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZXNDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvcm91dGVzLmNvbmZpZyc7XHJcbmltcG9ydCBOYXZCYXJMaW5rIGZyb20gJy4vbmF2YmFyLWxpbmsvbmF2YmFyLWxpbmsnO1xyXG5cclxuaW1wb3J0IHsgQnVyZ2VyTWVudSwgQnVyZ2VyTWVudUljb24gfSBmcm9tICcuL25hdmJhci5zdHlsZSc7XHJcblxyXG5jb25zdCBNYWluTG9nbyA9ICcvaW1nL2xvZ28tTkVXLnN2Zyc7XHJcblxyXG50eXBlIE5hdkJhclByb3BzID0ge1xyXG4gIGZvb3RlckJhcj86IGJvb2xlYW47XHJcbn07XHJcblxyXG5jb25zdCBOYXZCYXI6IFJlYWN0LkZDPE5hdkJhclByb3BzPiA9ICh7XHJcbiAgZm9vdGVyQmFyXHJcbn0pID0+IChcclxuICA8bmF2XHJcbiAgICByb2xlPSduYXZpZ2F0aW9uJ1xyXG4gICAgY2xhc3NOYW1lPSduYXZiYXInXHJcbiAgICBhcmlhLWxhYmVsPSdtYWluIG5hdmlnYXRpb24nXHJcbiAgPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci13cmFwcGVyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JyYW5kLXdyYXBwZXIgbGV2ZWwnPlxyXG4gICAgICAgIDxpbWcgd2lkdGg9JzE3MCdcclxuICAgICAgICAgIHNyYz17TWFpbkxvZ299XHJcbiAgICAgICAgICBhbHQ9J0xlZ2FsIFNlcnZlIC0gUHJvY2VzcyBTZXJ2ZXIgaW4gQmVkZm9yZHNoaXJlICZhbXA7IEJ1Y2tpbmdoYW1zaGlyZScvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbGV2ZWwtcmlnaHQnPjA3ODUzIDE2NiA2NzQ8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLXJvdXRlcyc+XHJcbiAgICAgICAgPE5hdkJhckxpbmtcclxuICAgICAgICAgIHsuLi5Sb3V0ZXNDb25maWcuSG9tZX1cclxuICAgICAgICAgIGZvb3RlckJhcj17Zm9vdGVyQmFyfVxyXG4gICAgICAgICAgPjwvTmF2QmFyTGluaz5cclxuICAgICAgICA8TmF2QmFyTGlua1xyXG4gICAgICAgICAgey4uLlJvdXRlc0NvbmZpZy5TZXJ2aWNlc31cclxuICAgICAgICAgIGZvb3RlckJhcj17Zm9vdGVyQmFyfVxyXG4gICAgICAgICAgPjwvTmF2QmFyTGluaz5cclxuICAgICAgICA8TmF2QmFyTGlua1xyXG4gICAgICAgICAgey4uLlJvdXRlc0NvbmZpZy5Db250YWN0fVxyXG4gICAgICAgICAgZm9vdGVyQmFyPXtmb290ZXJCYXJ9XHJcbiAgICAgICAgICA+PC9OYXZCYXJMaW5rPlxyXG4gICAgICAgIHsoKCkgPT4geyBpZiAoIWZvb3RlckJhcikge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJ1cmdlck1lbnVcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2lzLWhpZGRlbi10YWJsZXQnPlxyXG4gICAgICAgICAgICAgIDxCdXJnZXJNZW51SWNvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpcy12aXNpYmxlLW1vYmlsZSdcclxuICAgICAgICAgICAgICAgIGljb249J2JhcnMnPjwvQnVyZ2VyTWVudUljb24+XHJcbiAgICAgICAgICAgIDwvQnVyZ2VyTWVudT5cclxuICAgICAgICAgIClcclxuICAgICAgICB9fSkoKX1cclxuICAgICAgICA8TmF2QmFyTGlua1xyXG4gICAgICAgICAgey4uLlJvdXRlc0NvbmZpZy5DbGllbnRzfVxyXG4gICAgICAgICAgZm9vdGVyQmFyPXtmb290ZXJCYXJ9XHJcbiAgICAgICAgICBsYXN0TGluaz17dHJ1ZX1cclxuICAgICAgICAgIGlzSGlkZGVuTW9iaWxlPXshZm9vdGVyQmFyICYmIHRydWV9XHJcbiAgICAgICAgICA+PC9OYXZCYXJMaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmF2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9