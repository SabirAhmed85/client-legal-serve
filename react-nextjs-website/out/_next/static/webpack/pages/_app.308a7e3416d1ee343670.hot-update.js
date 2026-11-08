webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar/navbar.tsx":
/*!**************************************!*\
  !*** ./components/navbar/navbar.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_routes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/routes.config */ "./config/routes.config.ts");
/* harmony import */ var _navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar-link/navbar-link */ "./components/navbar/navbar-link/navbar-link.tsx");
/* harmony import */ var _navbar_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.style */ "./components/navbar/navbar.style.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\components\\navbar\\navbar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




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
      lineNumber: 17,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "navbar-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "brand-wrapper level",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("img", {
    width: "170",
    src: MainLogo,
    alt: "Legal Serve - Process Server in Bedfordshire & Buckinghamshire",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "level-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "07853 166 674")), __jsx("div", {
    className: "navbar-routes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: _config_routes_config__WEBPACK_IMPORTED_MODULE_1__["RoutesConfig"].Home.path,
    displayName: _config_routes_config__WEBPACK_IMPORTED_MODULE_1__["RoutesConfig"].Home.displayName,
    footerBar: footerBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx(_navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: _config_routes_config__WEBPACK_IMPORTED_MODULE_1__["RoutesConfig"].Services.path,
    displayName: _config_routes_config__WEBPACK_IMPORTED_MODULE_1__["RoutesConfig"].Services.displayName,
    footerBar: footerBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx(_navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: _config_routes_config__WEBPACK_IMPORTED_MODULE_1__["RoutesConfig"].Contact.path,
    displayName: _config_routes_config__WEBPACK_IMPORTED_MODULE_1__["RoutesConfig"].Contact.displayName,
    footerBar: footerBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), function () {
    if (!footerBar) {
      return __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["BurgerMenu"], {
        className: "is-hidden-tablet",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }
      }, __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["BurgerMenuIcon"], {
        className: "is-visible-mobile",
        icon: "bars",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }
      }));
    }
  }(), __jsx(_navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: _config_routes_config__WEBPACK_IMPORTED_MODULE_1__["RoutesConfig"].Clients.path,
    displayName: _config_routes_config__WEBPACK_IMPORTED_MODULE_1__["RoutesConfig"].Clients.displayName,
    footerBar: footerBar,
    lastLink: true,
    isHiddenMobile: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnRzeCJdLCJuYW1lcyI6WyJNYWluTG9nbyIsIk5hdkJhciIsImZvb3RlckJhciIsIlJvdXRlc0NvbmZpZyIsIkhvbWUiLCJwYXRoIiwiZGlzcGxheU5hbWUiLCJTZXJ2aWNlcyIsIkNvbnRhY3QiLCJDbGllbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLG1CQUFqQjs7QUFNQSxJQUFNQyxNQUE2QixHQUFHLFNBQWhDQSxNQUFnQztBQUFBLE1BQ3BDQyxTQURvQyxRQUNwQ0EsU0FEb0M7QUFBQSxTQUdwQztBQUNFLFFBQUksRUFBQyxZQURQO0FBRUUsYUFBUyxFQUFDLFFBRlo7QUFHRSxrQkFBVyxpQkFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBQyxLQUFYO0FBQ0UsT0FBRyxFQUFFRixRQURQO0FBRUUsT0FBRyxFQUFDLGdFQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUlFO0FBQU0sYUFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsQ0FERixFQU9FO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFDRSxRQUFJLEVBQUVHLGtFQUFZLENBQUNDLElBQWIsQ0FBa0JDLElBRDFCO0FBRUUsZUFBVyxFQUFFRixrRUFBWSxDQUFDQyxJQUFiLENBQWtCRSxXQUZqQztBQUdFLGFBQVMsRUFBRUosU0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRSxNQUFDLGdFQUFEO0FBQ0UsUUFBSSxFQUFFQyxrRUFBWSxDQUFDSSxRQUFiLENBQXNCRixJQUQ5QjtBQUVFLGVBQVcsRUFBRUYsa0VBQVksQ0FBQ0ksUUFBYixDQUFzQkQsV0FGckM7QUFHRSxhQUFTLEVBQUVKLFNBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBV0UsTUFBQyxnRUFBRDtBQUNFLFFBQUksRUFBRUMsa0VBQVksQ0FBQ0ssT0FBYixDQUFxQkgsSUFEN0I7QUFFRSxlQUFXLEVBQUVGLGtFQUFZLENBQUNLLE9BQWIsQ0FBcUJGLFdBRnBDO0FBR0UsYUFBUyxFQUFFSixTQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQWdCSSxZQUFNO0FBQUUsUUFBSSxDQUFDQSxTQUFMLEVBQWdCO0FBQ3hCLGFBQ0UsTUFBQyx3REFBRDtBQUNFLGlCQUFTLEVBQUMsa0JBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVFLE1BQUMsNERBQUQ7QUFDRSxpQkFBUyxFQUFDLG1CQURaO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBREY7QUFRRDtBQUFDLEdBVEQsRUFoQkgsRUEwQkUsTUFBQyxnRUFBRDtBQUNFLFFBQUksRUFBRUMsa0VBQVksQ0FBQ00sT0FBYixDQUFxQkosSUFEN0I7QUFFRSxlQUFXLEVBQUVGLGtFQUFZLENBQUNNLE9BQWIsQ0FBcUJILFdBRnBDO0FBR0UsYUFBUyxFQUFFSixTQUhiO0FBSUUsWUFBUSxFQUFFLElBSlo7QUFLRSxrQkFBYyxFQUFFLElBTGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQkYsQ0FQRixDQUxGLENBSG9DO0FBQUEsQ0FBdEM7O0tBQU1ELE07QUFxRFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzA4YTdlMzQxNmQxZWUzNDM2NzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IFJvdXRlc0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9yb3V0ZXMuY29uZmlnJztcclxuaW1wb3J0IE5hdkJhckxpbmsgZnJvbSAnLi9uYXZiYXItbGluay9uYXZiYXItbGluayc7XHJcblxyXG5pbXBvcnQgeyBCdXJnZXJNZW51LCBCdXJnZXJNZW51SWNvbiB9IGZyb20gJy4vbmF2YmFyLnN0eWxlJztcclxuXHJcbmNvbnN0IE1haW5Mb2dvID0gJy9pbWcvbG9nby1ORVcuc3ZnJztcclxuXHJcbnR5cGUgTmF2QmFyUHJvcHMgPSB7XHJcbiAgZm9vdGVyQmFyPzogYm9vbGVhbjtcclxufTtcclxuXHJcbmNvbnN0IE5hdkJhcjogUmVhY3QuRkM8TmF2QmFyUHJvcHM+ID0gKHtcclxuICBmb290ZXJCYXJcclxufSkgPT4gKFxyXG4gIDxuYXZcclxuICAgIHJvbGU9J25hdmlnYXRpb24nXHJcbiAgICBjbGFzc05hbWU9J25hdmJhcidcclxuICAgIGFyaWEtbGFiZWw9J21haW4gbmF2aWdhdGlvbidcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLXdyYXBwZXInPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYnJhbmQtd3JhcHBlciBsZXZlbCc+XHJcbiAgICAgICAgPGltZyB3aWR0aD0nMTcwJ1xyXG4gICAgICAgICAgc3JjPXtNYWluTG9nb31cclxuICAgICAgICAgIGFsdD0nTGVnYWwgU2VydmUgLSBQcm9jZXNzIFNlcnZlciBpbiBCZWRmb3Jkc2hpcmUgJmFtcDsgQnVja2luZ2hhbXNoaXJlJy8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsZXZlbC1yaWdodCc+MDc4NTMgMTY2IDY3NDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItcm91dGVzJz5cclxuICAgICAgICA8TmF2QmFyTGlua1xyXG4gICAgICAgICAgcGF0aD17Um91dGVzQ29uZmlnLkhvbWUucGF0aH1cclxuICAgICAgICAgIGRpc3BsYXlOYW1lPXtSb3V0ZXNDb25maWcuSG9tZS5kaXNwbGF5TmFtZX1cclxuICAgICAgICAgIGZvb3RlckJhcj17Zm9vdGVyQmFyfVxyXG4gICAgICAgICAgPjwvTmF2QmFyTGluaz5cclxuICAgICAgICA8TmF2QmFyTGlua1xyXG4gICAgICAgICAgcGF0aD17Um91dGVzQ29uZmlnLlNlcnZpY2VzLnBhdGh9XHJcbiAgICAgICAgICBkaXNwbGF5TmFtZT17Um91dGVzQ29uZmlnLlNlcnZpY2VzLmRpc3BsYXlOYW1lfVxyXG4gICAgICAgICAgZm9vdGVyQmFyPXtmb290ZXJCYXJ9XHJcbiAgICAgICAgICA+PC9OYXZCYXJMaW5rPlxyXG4gICAgICAgIDxOYXZCYXJMaW5rXHJcbiAgICAgICAgICBwYXRoPXtSb3V0ZXNDb25maWcuQ29udGFjdC5wYXRofVxyXG4gICAgICAgICAgZGlzcGxheU5hbWU9e1JvdXRlc0NvbmZpZy5Db250YWN0LmRpc3BsYXlOYW1lfVxyXG4gICAgICAgICAgZm9vdGVyQmFyPXtmb290ZXJCYXJ9XHJcbiAgICAgICAgICA+PC9OYXZCYXJMaW5rPlxyXG4gICAgICAgIHsoKCkgPT4geyBpZiAoIWZvb3RlckJhcikge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJ1cmdlck1lbnVcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2lzLWhpZGRlbi10YWJsZXQnPlxyXG4gICAgICAgICAgICAgIDxCdXJnZXJNZW51SWNvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpcy12aXNpYmxlLW1vYmlsZSdcclxuICAgICAgICAgICAgICAgIGljb249J2JhcnMnPjwvQnVyZ2VyTWVudUljb24+XHJcbiAgICAgICAgICAgIDwvQnVyZ2VyTWVudT5cclxuICAgICAgICAgIClcclxuICAgICAgICB9fSkoKX1cclxuICAgICAgICA8TmF2QmFyTGlua1xyXG4gICAgICAgICAgcGF0aD17Um91dGVzQ29uZmlnLkNsaWVudHMucGF0aH1cclxuICAgICAgICAgIGRpc3BsYXlOYW1lPXtSb3V0ZXNDb25maWcuQ2xpZW50cy5kaXNwbGF5TmFtZX1cclxuICAgICAgICAgIGZvb3RlckJhcj17Zm9vdGVyQmFyfVxyXG4gICAgICAgICAgbGFzdExpbms9e3RydWV9XHJcbiAgICAgICAgICBpc0hpZGRlbk1vYmlsZT17dHJ1ZX1cclxuICAgICAgICAgID48L05hdkJhckxpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uYXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=