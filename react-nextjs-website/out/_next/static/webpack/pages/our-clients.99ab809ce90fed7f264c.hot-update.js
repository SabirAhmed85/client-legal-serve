webpackHotUpdate_N_E("pages/our-clients",{

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
  }, __jsx(_navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Home, {
    footerBar: footerBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })), __jsx(_navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Services, {
    footerBar: footerBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx(_navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Contact, {
    footerBar: footerBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })), function () {
    if (!footerBar) {
      return __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_4__["BurgerMenu"], {
        className: "is-hidden-tablet",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }, __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_4__["BurgerMenuIcon"], {
        className: "is-visible-mobile",
        icon: "bars",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
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
      lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnRzeCJdLCJuYW1lcyI6WyJNYWluTG9nbyIsIk5hdkJhciIsImZvb3RlckJhciIsIlJvdXRlc0NvbmZpZyIsIkhvbWUiLCJTZXJ2aWNlcyIsIkNvbnRhY3QiLCJDbGllbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLG1CQUFqQjs7QUFNQSxJQUFNQyxNQUE2QixHQUFHLFNBQWhDQSxNQUFnQztBQUFBLE1BQ3BDQyxTQURvQyxRQUNwQ0EsU0FEb0M7QUFBQSxTQUdwQztBQUNFLFFBQUksRUFBQyxZQURQO0FBRUUsYUFBUyxFQUFDLFFBRlo7QUFHRSxrQkFBVyxpQkFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBQyxLQUFYO0FBQ0UsT0FBRyxFQUFFRixRQURQO0FBRUUsT0FBRyxFQUFDLGdFQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUlFO0FBQU0sYUFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsQ0FERixFQU9FO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQseUZBQ01HLGtFQUFZLENBQUNDLElBRG5CO0FBRUUsYUFBUyxFQUFFRixTQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixFQUtFLE1BQUMsZ0VBQUQseUZBQ01DLGtFQUFZLENBQUNFLFFBRG5CO0FBRUUsYUFBUyxFQUFFSCxTQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMRixFQVNFLE1BQUMsZ0VBQUQseUZBQ01DLGtFQUFZLENBQUNHLE9BRG5CO0FBRUUsYUFBUyxFQUFFSixTQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FURixFQWFJLFlBQU07QUFBRSxRQUFJLENBQUNBLFNBQUwsRUFBZ0I7QUFDeEIsYUFDRSxNQUFDLHdEQUFEO0FBQ0UsaUJBQVMsRUFBQyxrQkFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUUsTUFBQyw0REFBRDtBQUNFLGlCQUFTLEVBQUMsbUJBRFo7QUFFRSxZQUFJLEVBQUMsTUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FERjtBQVFEO0FBQUMsR0FURCxFQWJILEVBdUJFLE1BQUMsZ0VBQUQseUZBQ01DLGtFQUFZLENBQUNJLE9BRG5CO0FBRUUsYUFBUyxFQUFFTCxTQUZiO0FBR0UsWUFBUSxFQUFFLElBSFo7QUFJRSxrQkFBYyxFQUFFLENBQUNBLFNBQUQsSUFBYyxJQUpoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBdkJGLENBUEYsQ0FMRixDQUhvQztBQUFBLENBQXRDOztLQUFNRCxNO0FBaURTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vdXItY2xpZW50cy45OWFiODA5Y2U5MGZlZDdmMjY0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgUm91dGVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3JvdXRlcy5jb25maWcnO1xyXG5pbXBvcnQgTmF2QmFyTGluayBmcm9tICcuL25hdmJhci1saW5rL25hdmJhci1saW5rJztcclxuXHJcbmltcG9ydCB7IEJ1cmdlck1lbnUsIEJ1cmdlck1lbnVJY29uIH0gZnJvbSAnLi9uYXZiYXIuc3R5bGUnO1xyXG5cclxuY29uc3QgTWFpbkxvZ28gPSAnL2ltZy9sb2dvLU5FVy5zdmcnO1xyXG5cclxudHlwZSBOYXZCYXJQcm9wcyA9IHtcclxuICBmb290ZXJCYXI/OiBib29sZWFuO1xyXG59O1xyXG5cclxuY29uc3QgTmF2QmFyOiBSZWFjdC5GQzxOYXZCYXJQcm9wcz4gPSAoe1xyXG4gIGZvb3RlckJhclxyXG59KSA9PiAoXHJcbiAgPG5hdlxyXG4gICAgcm9sZT0nbmF2aWdhdGlvbidcclxuICAgIGNsYXNzTmFtZT0nbmF2YmFyJ1xyXG4gICAgYXJpYS1sYWJlbD0nbWFpbiBuYXZpZ2F0aW9uJ1xyXG4gID5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItd3JhcHBlcic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdicmFuZC13cmFwcGVyIGxldmVsJz5cclxuICAgICAgICA8aW1nIHdpZHRoPScxNzAnXHJcbiAgICAgICAgICBzcmM9e01haW5Mb2dvfVxyXG4gICAgICAgICAgYWx0PSdMZWdhbCBTZXJ2ZSAtIFByb2Nlc3MgU2VydmVyIGluIEJlZGZvcmRzaGlyZSAmYW1wOyBCdWNraW5naGFtc2hpcmUnLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2xldmVsLXJpZ2h0Jz4wNzg1MyAxNjYgNjc0PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1yb3V0ZXMnPlxyXG4gICAgICAgIDxOYXZCYXJMaW5rXHJcbiAgICAgICAgICB7Li4uUm91dGVzQ29uZmlnLkhvbWV9XHJcbiAgICAgICAgICBmb290ZXJCYXI9e2Zvb3RlckJhcn1cclxuICAgICAgICAgID48L05hdkJhckxpbms+XHJcbiAgICAgICAgPE5hdkJhckxpbmtcclxuICAgICAgICAgIHsuLi5Sb3V0ZXNDb25maWcuU2VydmljZXN9XHJcbiAgICAgICAgICBmb290ZXJCYXI9e2Zvb3RlckJhcn1cclxuICAgICAgICAgID48L05hdkJhckxpbms+XHJcbiAgICAgICAgPE5hdkJhckxpbmtcclxuICAgICAgICAgIHsuLi5Sb3V0ZXNDb25maWcuQ29udGFjdH1cclxuICAgICAgICAgIGZvb3RlckJhcj17Zm9vdGVyQmFyfVxyXG4gICAgICAgICAgPjwvTmF2QmFyTGluaz5cclxuICAgICAgICB7KCgpID0+IHsgaWYgKCFmb290ZXJCYXIpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCdXJnZXJNZW51XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpcy1oaWRkZW4tdGFibGV0Jz5cclxuICAgICAgICAgICAgICA8QnVyZ2VyTWVudUljb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naXMtdmlzaWJsZS1tb2JpbGUnXHJcbiAgICAgICAgICAgICAgICBpY29uPSdiYXJzJz48L0J1cmdlck1lbnVJY29uPlxyXG4gICAgICAgICAgICA8L0J1cmdlck1lbnU+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfX0pKCl9XHJcbiAgICAgICAgPE5hdkJhckxpbmtcclxuICAgICAgICAgIHsuLi5Sb3V0ZXNDb25maWcuQ2xpZW50c31cclxuICAgICAgICAgIGZvb3RlckJhcj17Zm9vdGVyQmFyfVxyXG4gICAgICAgICAgbGFzdExpbms9e3RydWV9XHJcbiAgICAgICAgICBpc0hpZGRlbk1vYmlsZT17IWZvb3RlckJhciAmJiB0cnVlfVxyXG4gICAgICAgICAgPjwvTmF2QmFyTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L25hdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==