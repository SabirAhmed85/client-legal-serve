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
  }), __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["BurgerMenu"], {
    className: "is-hidden-tablet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["BurgerMenuIcon"], {
    className: "is-visible-mobile",
    icon: "bars",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  })), __jsx(_navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: _config_routes_config__WEBPACK_IMPORTED_MODULE_1__["RoutesConfig"].Clients.path,
    displayName: _config_routes_config__WEBPACK_IMPORTED_MODULE_1__["RoutesConfig"].Clients.displayName,
    footerBar: footerBar,
    lastLink: true,
    isHiddenMobile: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnRzeCJdLCJuYW1lcyI6WyJNYWluTG9nbyIsIk5hdkJhciIsImZvb3RlckJhciIsIlJvdXRlc0NvbmZpZyIsIkhvbWUiLCJwYXRoIiwiZGlzcGxheU5hbWUiLCJTZXJ2aWNlcyIsIkNvbnRhY3QiLCJDbGllbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLG1CQUFqQjs7QUFNQSxJQUFNQyxNQUE2QixHQUFHLFNBQWhDQSxNQUFnQztBQUFBLE1BQ3BDQyxTQURvQyxRQUNwQ0EsU0FEb0M7QUFBQSxTQUdwQztBQUNFLFFBQUksRUFBQyxZQURQO0FBRUUsYUFBUyxFQUFDLFFBRlo7QUFHRSxrQkFBVyxpQkFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBQyxLQUFYO0FBQ0UsT0FBRyxFQUFFRixRQURQO0FBRUUsT0FBRyxFQUFDLGdFQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUlFO0FBQU0sYUFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsQ0FERixFQU9FO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFDRSxRQUFJLEVBQUVHLGtFQUFZLENBQUNDLElBQWIsQ0FBa0JDLElBRDFCO0FBRUUsZUFBVyxFQUFFRixrRUFBWSxDQUFDQyxJQUFiLENBQWtCRSxXQUZqQztBQUdFLGFBQVMsRUFBRUosU0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRSxNQUFDLGdFQUFEO0FBQ0UsUUFBSSxFQUFFQyxrRUFBWSxDQUFDSSxRQUFiLENBQXNCRixJQUQ5QjtBQUVFLGVBQVcsRUFBRUYsa0VBQVksQ0FBQ0ksUUFBYixDQUFzQkQsV0FGckM7QUFHRSxhQUFTLEVBQUVKLFNBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBV0UsTUFBQyxnRUFBRDtBQUNFLFFBQUksRUFBRUMsa0VBQVksQ0FBQ0ssT0FBYixDQUFxQkgsSUFEN0I7QUFFRSxlQUFXLEVBQUVGLGtFQUFZLENBQUNLLE9BQWIsQ0FBcUJGLFdBRnBDO0FBR0UsYUFBUyxFQUFFSixTQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQWdCRSxNQUFDLHdEQUFEO0FBQ0UsYUFBUyxFQUFDLGtCQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDREQUFEO0FBQ0UsYUFBUyxFQUFDLG1CQURaO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBaEJGLEVBc0JFLE1BQUMsZ0VBQUQ7QUFDRSxRQUFJLEVBQUVDLGtFQUFZLENBQUNNLE9BQWIsQ0FBcUJKLElBRDdCO0FBRUUsZUFBVyxFQUFFRixrRUFBWSxDQUFDTSxPQUFiLENBQXFCSCxXQUZwQztBQUdFLGFBQVMsRUFBRUosU0FIYjtBQUlFLFlBQVEsRUFBRSxJQUpaO0FBS0Usa0JBQWMsRUFBRSxJQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEJGLENBUEYsQ0FMRixDQUhvQztBQUFBLENBQXRDOztLQUFNRCxNO0FBaURTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQ1NDFkNmU1MzVhNGMxMTAwMzNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBSb3V0ZXNDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvcm91dGVzLmNvbmZpZyc7XHJcbmltcG9ydCBOYXZCYXJMaW5rIGZyb20gJy4vbmF2YmFyLWxpbmsvbmF2YmFyLWxpbmsnO1xyXG5cclxuaW1wb3J0IHsgQnVyZ2VyTWVudSwgQnVyZ2VyTWVudUljb24gfSBmcm9tICcuL25hdmJhci5zdHlsZSc7XHJcblxyXG5jb25zdCBNYWluTG9nbyA9ICcvaW1nL2xvZ28tTkVXLnN2Zyc7XHJcblxyXG50eXBlIE5hdkJhclByb3BzID0ge1xyXG4gIGZvb3RlckJhcj86IGJvb2xlYW47XHJcbn07XHJcblxyXG5jb25zdCBOYXZCYXI6IFJlYWN0LkZDPE5hdkJhclByb3BzPiA9ICh7XHJcbiAgZm9vdGVyQmFyXHJcbn0pID0+IChcclxuICA8bmF2XHJcbiAgICByb2xlPSduYXZpZ2F0aW9uJ1xyXG4gICAgY2xhc3NOYW1lPSduYXZiYXInXHJcbiAgICBhcmlhLWxhYmVsPSdtYWluIG5hdmlnYXRpb24nXHJcbiAgPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci13cmFwcGVyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JyYW5kLXdyYXBwZXIgbGV2ZWwnPlxyXG4gICAgICAgIDxpbWcgd2lkdGg9JzE3MCdcclxuICAgICAgICAgIHNyYz17TWFpbkxvZ299XHJcbiAgICAgICAgICBhbHQ9J0xlZ2FsIFNlcnZlIC0gUHJvY2VzcyBTZXJ2ZXIgaW4gQmVkZm9yZHNoaXJlICZhbXA7IEJ1Y2tpbmdoYW1zaGlyZScvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbGV2ZWwtcmlnaHQnPjA3ODUzIDE2NiA2NzQ8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLXJvdXRlcyc+XHJcbiAgICAgICAgPE5hdkJhckxpbmtcclxuICAgICAgICAgIHBhdGg9e1JvdXRlc0NvbmZpZy5Ib21lLnBhdGh9XHJcbiAgICAgICAgICBkaXNwbGF5TmFtZT17Um91dGVzQ29uZmlnLkhvbWUuZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICBmb290ZXJCYXI9e2Zvb3RlckJhcn1cclxuICAgICAgICAgID48L05hdkJhckxpbms+XHJcbiAgICAgICAgPE5hdkJhckxpbmtcclxuICAgICAgICAgIHBhdGg9e1JvdXRlc0NvbmZpZy5TZXJ2aWNlcy5wYXRofVxyXG4gICAgICAgICAgZGlzcGxheU5hbWU9e1JvdXRlc0NvbmZpZy5TZXJ2aWNlcy5kaXNwbGF5TmFtZX1cclxuICAgICAgICAgIGZvb3RlckJhcj17Zm9vdGVyQmFyfVxyXG4gICAgICAgICAgPjwvTmF2QmFyTGluaz5cclxuICAgICAgICA8TmF2QmFyTGlua1xyXG4gICAgICAgICAgcGF0aD17Um91dGVzQ29uZmlnLkNvbnRhY3QucGF0aH1cclxuICAgICAgICAgIGRpc3BsYXlOYW1lPXtSb3V0ZXNDb25maWcuQ29udGFjdC5kaXNwbGF5TmFtZX1cclxuICAgICAgICAgIGZvb3RlckJhcj17Zm9vdGVyQmFyfVxyXG4gICAgICAgICAgPjwvTmF2QmFyTGluaz5cclxuICAgICAgICA8QnVyZ2VyTWVudVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdpcy1oaWRkZW4tdGFibGV0Jz5cclxuICAgICAgICAgIDxCdXJnZXJNZW51SWNvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2lzLXZpc2libGUtbW9iaWxlJ1xyXG4gICAgICAgICAgICBpY29uPSdiYXJzJz48L0J1cmdlck1lbnVJY29uPlxyXG4gICAgICAgIDwvQnVyZ2VyTWVudT5cclxuICAgICAgICA8TmF2QmFyTGlua1xyXG4gICAgICAgICAgcGF0aD17Um91dGVzQ29uZmlnLkNsaWVudHMucGF0aH1cclxuICAgICAgICAgIGRpc3BsYXlOYW1lPXtSb3V0ZXNDb25maWcuQ2xpZW50cy5kaXNwbGF5TmFtZX1cclxuICAgICAgICAgIGZvb3RlckJhcj17Zm9vdGVyQmFyfVxyXG4gICAgICAgICAgbGFzdExpbms9e3RydWV9XHJcbiAgICAgICAgICBpc0hpZGRlbk1vYmlsZT17dHJ1ZX1cclxuICAgICAgICAgID48L05hdkJhckxpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uYXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=