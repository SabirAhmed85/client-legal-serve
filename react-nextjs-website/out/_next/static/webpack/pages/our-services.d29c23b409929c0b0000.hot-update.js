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
  }, __jsx(StyledLink, {
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
  }, __jsx(StyledLink, {
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
  }, __jsx(StyledLink, {
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
  }, __jsx(StyledLink, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnRzeCJdLCJuYW1lcyI6WyJNYWluTG9nbyIsIk5hdkJhciIsImZvb3RlckJhciIsIlJvdXRlc0NvbmZpZyIsIkhvbWUiLCJwYXRoIiwiZGlzcGxheU5hbWUiLCJTZXJ2aWNlcyIsIkNvbnRhY3QiLCJDbGllbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLElBQU1BLFFBQVEsR0FBRyxtQkFBakI7O0FBTUEsSUFBTUMsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0M7QUFBQSxNQUNwQ0MsU0FEb0MsUUFDcENBLFNBRG9DO0FBQUEsU0FHcEM7QUFDRSxRQUFJLEVBQUMsWUFEUDtBQUVFLGFBQVMsRUFBQyxRQUZaO0FBR0Usa0JBQVcsaUJBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUMsS0FBWDtBQUNFLE9BQUcsRUFBRUYsUUFEUDtBQUVFLE9BQUcsRUFBQyxnRUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFJRTtBQUFNLGFBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLENBREYsRUFPRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQ0UsUUFBSSxFQUFFRyxrRUFBWSxDQUFDQyxJQUFiLENBQWtCQyxJQUQxQjtBQUVFLFlBQVEsTUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBYUYsa0VBQVksQ0FBQ0MsSUFBYixDQUFrQkUsV0FBL0IsQ0FKRixDQURGLEVBT0ksWUFBTTtBQUNOLFFBQUlKLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QixhQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQUdEO0FBQ0YsR0FOQSxFQVBILEVBY0UsTUFBQyxnREFBRDtBQUNFLFlBQVEsTUFEVjtBQUVFLFFBQUksRUFBRUMsa0VBQVksQ0FBQ0ksUUFBYixDQUFzQkYsSUFGOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFGLGtFQUFZLENBQUNJLFFBQWIsQ0FBc0JELFdBQW5DLENBSkYsQ0FkRixFQW9CSSxZQUFNO0FBQ04sUUFBSUosU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGO0FBR0Q7QUFDRixHQU5BLEVBcEJILEVBMkJFLE1BQUMsZ0RBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxRQUFJLEVBQUVDLGtFQUFZLENBQUNLLE9BQWIsQ0FBcUJILElBRjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhRixrRUFBWSxDQUFDSyxPQUFiLENBQXFCRixXQUFsQyxDQUpGLENBM0JGLEVBaUNJLFlBQU07QUFBQyxRQUFJSixTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFBQyxhQUNoQztBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRGdDO0FBRWhDO0FBQUMsR0FGRixFQWpDSCxFQW9DRSxNQUFDLHdEQUFEO0FBQ0UsYUFBUyxFQUFDLGtCQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDREQUFEO0FBQ0UsYUFBUyxFQUFDLG1CQURaO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBcENGLEVBMENFLE1BQUMsZ0RBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxRQUFJLEVBQUVDLGtFQUFZLENBQUNNLE9BQWIsQ0FBcUJKLElBRjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLFVBQUQ7QUFDRSxhQUFTLEVBQUMsa0JBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNnQ0Ysa0VBQVksQ0FBQ00sT0FBYixDQUFxQkgsV0FEckQsQ0FKRixDQTFDRixDQVBGLENBTEYsQ0FIb0M7QUFBQSxDQUF0Qzs7S0FBTUwsTTtBQXFFU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3VyLXNlcnZpY2VzLmQyOWMyM2I0MDk5MjljMGIwMDAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBSb3V0ZXNDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvcm91dGVzLmNvbmZpZyc7XHJcblxyXG5pbXBvcnQgeyBCdXJnZXJNZW51LCBCdXJnZXJNZW51SWNvbiB9IGZyb20gJy4vbmF2YmFyLnN0eWxlJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBNYWluTG9nbyA9ICcvaW1nL2xvZ28tTkVXLnN2Zyc7XHJcblxyXG50eXBlIE5hdkJhclByb3BzID0ge1xyXG4gIGZvb3RlckJhcj86IGJvb2xlYW47XHJcbn07XHJcblxyXG5jb25zdCBOYXZCYXI6IFJlYWN0LkZDPE5hdkJhclByb3BzPiA9ICh7XHJcbiAgZm9vdGVyQmFyXHJcbn0pID0+IChcclxuICA8bmF2XHJcbiAgICByb2xlPSduYXZpZ2F0aW9uJ1xyXG4gICAgY2xhc3NOYW1lPSduYXZiYXInXHJcbiAgICBhcmlhLWxhYmVsPSdtYWluIG5hdmlnYXRpb24nXHJcbiAgPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci13cmFwcGVyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JyYW5kLXdyYXBwZXIgbGV2ZWwnPlxyXG4gICAgICAgIDxpbWcgd2lkdGg9JzE3MCdcclxuICAgICAgICAgIHNyYz17TWFpbkxvZ299XHJcbiAgICAgICAgICBhbHQ9J0xlZ2FsIFNlcnZlIC0gUHJvY2VzcyBTZXJ2ZXIgaW4gQmVkZm9yZHNoaXJlICZhbXA7IEJ1Y2tpbmdoYW1zaGlyZScvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbGV2ZWwtcmlnaHQnPjA3ODUzIDE2NiA2NzQ8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLXJvdXRlcyc+XHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIGhyZWY9e1JvdXRlc0NvbmZpZy5Ib21lLnBhdGh9XHJcbiAgICAgICAgICBwYXNzSHJlZlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTdHlsZWRMaW5rPntSb3V0ZXNDb25maWcuSG9tZS5kaXNwbGF5TmFtZX08L1N0eWxlZExpbms+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIHsoKCkgPT4geyBcclxuICAgICAgICAgIGlmIChmb290ZXJCYXIgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VwZXJhdG9yJyAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkoKX1cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgIGhyZWY9e1JvdXRlc0NvbmZpZy5TZXJ2aWNlcy5wYXRofVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTdHlsZWRMaW5rPntSb3V0ZXNDb25maWcuU2VydmljZXMuZGlzcGxheU5hbWV9PC9TdHlsZWRMaW5rPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7KCgpID0+IHsgXHJcbiAgICAgICAgICBpZiAoZm9vdGVyQmFyICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcGVyYXRvcicgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pKCl9XHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIHBhc3NIcmVmXHJcbiAgICAgICAgICBocmVmPXtSb3V0ZXNDb25maWcuQ29udGFjdC5wYXRofVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTdHlsZWRMaW5rPntSb3V0ZXNDb25maWcuQ29udGFjdC5kaXNwbGF5TmFtZX08L1N0eWxlZExpbms+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIHsoKCkgPT4ge2lmIChmb290ZXJCYXIgIT09IHRydWUpIHtyZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcGVyYXRvcicgLz5cclxuICAgICAgICApfX0pKCl9XHJcbiAgICAgICAgPEJ1cmdlck1lbnVcclxuICAgICAgICAgIGNsYXNzTmFtZT0naXMtaGlkZGVuLXRhYmxldCc+XHJcbiAgICAgICAgICA8QnVyZ2VyTWVudUljb25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdpcy12aXNpYmxlLW1vYmlsZSdcclxuICAgICAgICAgICAgaWNvbj0nYmFycyc+PC9CdXJnZXJNZW51SWNvbj5cclxuICAgICAgICA8L0J1cmdlck1lbnU+XHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIHBhc3NIcmVmXHJcbiAgICAgICAgICBocmVmPXtSb3V0ZXNDb25maWcuQ2xpZW50cy5wYXRofVxyXG4gICAgICAgID4gXHJcbiAgICAgICAgICA8U3R5bGVkTGlua1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2lzLWhpZGRlbi1tb2JpbGUnPntSb3V0ZXNDb25maWcuQ2xpZW50cy5kaXNwbGF5TmFtZX08L1N0eWxlZExpbms+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmF2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9