webpackHotUpdate_N_E("pages/our-services",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_routes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/routes.config */ "./config/routes.config.ts");
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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Home.path,
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["StyledLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Home.displayName)), function () {
    if (footerBar !== true) {
      return __jsx("div", {
        className: "seperator",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 15
        }
      });
    }
  }(), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    passHref: true,
    href: _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Services.path,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["StyledLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Services.displayName)), function () {
    if (footerBar !== true) {
      return __jsx("div", {
        className: "seperator",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 15
        }
      });
    }
  }(), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    passHref: true,
    href: _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Contact.path,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["StyledLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Contact.displayName)), function () {
    if (footerBar !== true) {
      return __jsx("div", {
        className: "seperator",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }
      });
    }
  }(), __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["BurgerMenu"], {
    className: "is-hidden-tablet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["BurgerMenuIcon"], {
    className: "is-visible-mobile",
    icon: "bars",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    passHref: true,
    href: _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Clients.path,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["StyledLink"], {
    className: "is-hidden-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Clients.displayName)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnRzeCJdLCJuYW1lcyI6WyJNYWluTG9nbyIsIk5hdkJhciIsImZvb3RlckJhciIsIlJvdXRlc0NvbmZpZyIsIkhvbWUiLCJwYXRoIiwiZGlzcGxheU5hbWUiLCJTZXJ2aWNlcyIsIkNvbnRhY3QiLCJDbGllbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLElBQU1BLFFBQVEsR0FBRyxtQkFBakI7O0FBTUEsSUFBTUMsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0M7QUFBQSxNQUNwQ0MsU0FEb0MsUUFDcENBLFNBRG9DO0FBQUEsU0FHcEM7QUFDRSxRQUFJLEVBQUMsWUFEUDtBQUVFLGFBQVMsRUFBQyxRQUZaO0FBR0Usa0JBQVcsaUJBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUMsS0FBWDtBQUNFLE9BQUcsRUFBRUYsUUFEUDtBQUVFLE9BQUcsRUFBQyxnRUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFJRTtBQUFNLGFBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLENBREYsRUFPRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQ0UsUUFBSSxFQUFFRyxrRUFBWSxDQUFDQyxJQUFiLENBQWtCQyxJQUQxQjtBQUVFLFlBQVEsTUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFGLGtFQUFZLENBQUNDLElBQWIsQ0FBa0JFLFdBQS9CLENBSkYsQ0FERixFQU9JLFlBQU07QUFDTixRQUFJSixTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEIsYUFDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREY7QUFHRDtBQUNGLEdBTkEsRUFQSCxFQWNFLE1BQUMsZ0RBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxRQUFJLEVBQUVDLGtFQUFZLENBQUNJLFFBQWIsQ0FBc0JGLElBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBYUYsa0VBQVksQ0FBQ0ksUUFBYixDQUFzQkQsV0FBbkMsQ0FKRixDQWRGLEVBb0JJLFlBQU07QUFDTixRQUFJSixTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEIsYUFDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREY7QUFHRDtBQUNGLEdBTkEsRUFwQkgsRUEyQkUsTUFBQyxnREFBRDtBQUNFLFlBQVEsTUFEVjtBQUVFLFFBQUksRUFBRUMsa0VBQVksQ0FBQ0ssT0FBYixDQUFxQkgsSUFGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhRixrRUFBWSxDQUFDSyxPQUFiLENBQXFCRixXQUFsQyxDQUpGLENBM0JGLEVBaUNJLFlBQU07QUFBQyxRQUFJSixTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFBQyxhQUNoQztBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRGdDO0FBRWhDO0FBQUMsR0FGRixFQWpDSCxFQW9DRSxNQUFDLHdEQUFEO0FBQ0UsYUFBUyxFQUFDLGtCQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDREQUFEO0FBQ0UsYUFBUyxFQUFDLG1CQURaO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBcENGLEVBMENFLE1BQUMsZ0RBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxRQUFJLEVBQUVDLGtFQUFZLENBQUNNLE9BQWIsQ0FBcUJKLElBRjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLHdEQUFEO0FBQ0UsYUFBUyxFQUFDLGtCQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDZ0NGLGtFQUFZLENBQUNNLE9BQWIsQ0FBcUJILFdBRHJELENBSkYsQ0ExQ0YsQ0FQRixDQUxGLENBSG9DO0FBQUEsQ0FBdEM7O0tBQU1MLE07QUFxRVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL291ci1zZXJ2aWNlcy42YzY2ZjMzOGE0MmI5NmZlZDU1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgUm91dGVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3JvdXRlcy5jb25maWcnO1xyXG5cclxuaW1wb3J0IHsgU3R5bGVkTGluaywgQnVyZ2VyTWVudSwgQnVyZ2VyTWVudUljb24gfSBmcm9tICcuL25hdmJhci5zdHlsZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgTWFpbkxvZ28gPSAnL2ltZy9sb2dvLU5FVy5zdmcnO1xyXG5cclxudHlwZSBOYXZCYXJQcm9wcyA9IHtcclxuICBmb290ZXJCYXI/OiBib29sZWFuO1xyXG59O1xyXG5cclxuY29uc3QgTmF2QmFyOiBSZWFjdC5GQzxOYXZCYXJQcm9wcz4gPSAoe1xyXG4gIGZvb3RlckJhclxyXG59KSA9PiAoXHJcbiAgPG5hdlxyXG4gICAgcm9sZT0nbmF2aWdhdGlvbidcclxuICAgIGNsYXNzTmFtZT0nbmF2YmFyJ1xyXG4gICAgYXJpYS1sYWJlbD0nbWFpbiBuYXZpZ2F0aW9uJ1xyXG4gID5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItd3JhcHBlcic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdicmFuZC13cmFwcGVyIGxldmVsJz5cclxuICAgICAgICA8aW1nIHdpZHRoPScxNzAnXHJcbiAgICAgICAgICBzcmM9e01haW5Mb2dvfVxyXG4gICAgICAgICAgYWx0PSdMZWdhbCBTZXJ2ZSAtIFByb2Nlc3MgU2VydmVyIGluIEJlZGZvcmRzaGlyZSAmYW1wOyBCdWNraW5naGFtc2hpcmUnLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2xldmVsLXJpZ2h0Jz4wNzg1MyAxNjYgNjc0PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1yb3V0ZXMnPlxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBocmVmPXtSb3V0ZXNDb25maWcuSG9tZS5wYXRofVxyXG4gICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U3R5bGVkTGluaz57Um91dGVzQ29uZmlnLkhvbWUuZGlzcGxheU5hbWV9PC9TdHlsZWRMaW5rPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7KCgpID0+IHsgXHJcbiAgICAgICAgICBpZiAoZm9vdGVyQmFyICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcGVyYXRvcicgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pKCl9XHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIHBhc3NIcmVmXHJcbiAgICAgICAgICBocmVmPXtSb3V0ZXNDb25maWcuU2VydmljZXMucGF0aH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U3R5bGVkTGluaz57Um91dGVzQ29uZmlnLlNlcnZpY2VzLmRpc3BsYXlOYW1lfTwvU3R5bGVkTGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgeygoKSA9PiB7IFxyXG4gICAgICAgICAgaWYgKGZvb3RlckJhciAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXBlcmF0b3InIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSgpfVxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBwYXNzSHJlZlxyXG4gICAgICAgICAgaHJlZj17Um91dGVzQ29uZmlnLkNvbnRhY3QucGF0aH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U3R5bGVkTGluaz57Um91dGVzQ29uZmlnLkNvbnRhY3QuZGlzcGxheU5hbWV9PC9TdHlsZWRMaW5rPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7KCgpID0+IHtpZiAoZm9vdGVyQmFyICE9PSB0cnVlKSB7cmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXBlcmF0b3InIC8+XHJcbiAgICAgICAgKX19KSgpfVxyXG4gICAgICAgIDxCdXJnZXJNZW51XHJcbiAgICAgICAgICBjbGFzc05hbWU9J2lzLWhpZGRlbi10YWJsZXQnPlxyXG4gICAgICAgICAgPEJ1cmdlck1lbnVJY29uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naXMtdmlzaWJsZS1tb2JpbGUnXHJcbiAgICAgICAgICAgIGljb249J2JhcnMnPjwvQnVyZ2VyTWVudUljb24+XHJcbiAgICAgICAgPC9CdXJnZXJNZW51PlxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBwYXNzSHJlZlxyXG4gICAgICAgICAgaHJlZj17Um91dGVzQ29uZmlnLkNsaWVudHMucGF0aH1cclxuICAgICAgICA+IFxyXG4gICAgICAgICAgPFN0eWxlZExpbmtcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdpcy1oaWRkZW4tbW9iaWxlJz57Um91dGVzQ29uZmlnLkNsaWVudHMuZGlzcGxheU5hbWV9PC9TdHlsZWRMaW5rPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L25hdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==