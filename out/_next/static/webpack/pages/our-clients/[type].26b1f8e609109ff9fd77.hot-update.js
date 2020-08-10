webpackHotUpdate_N_E("pages/our-clients/[type]",{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\components\\navbar\\navbar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var MainLogo = '/img/logo-NEW.svg';
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].a.withConfig({
  displayName: "navbar__StyledLink",
  componentId: "sc-1bi7dq5-0"
})(["user-select:none;color:white;letter-spacing:0.01em;background-color:transparent;border-top:2px solid transparent;border-bottom:2px solid transparent;transition:color 0.2s ease-out,border-bottom-color 0.2s ease-out;display:flex;overflow-x:auto;overflow-y:hidden;align-items:center;height:100%;padding:0.5rem 0.75rem;position:relative;flex-grow:0;flex-shrink:0;:hover{cursor:pointer;color:#61dafb;background-color:transparent;}"]);
_c = StyledLink;

var NavBar = function NavBar(_ref) {
  var footerBar = _ref.footerBar;
  return __jsx("nav", {
    role: "navigation",
    className: "navbar",
    "aria-label": "main navigation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "navbar-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "brand-wrapper level",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("img", {
    width: "170",
    src: MainLogo,
    alt: "Legal Serve - Process Server in Bedfordshire & Buckinghamshire",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "level-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "07853 166 674")), __jsx("div", {
    className: "navbar-routes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Home.path,
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(StyledLink, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Home.displayName)), function () {
    if (footerBar !== true) {
      return __jsx("div", {
        className: "seperator",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
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
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(StyledLink, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Services.displayName)), function () {
    if (footerBar !== true) {
      return __jsx("div", {
        className: "seperator",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
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
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(StyledLink, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Contact.displayName)), function () {
    if (footerBar !== true) {
      return __jsx("div", {
        className: "seperator",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }
      });
    }
  }(), __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["BurgerMenu"], {
    className: "is-hidden-tablet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["BurgerMenuIcon"], {
    className: "is-visible-mobile",
    icon: "bars",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    passHref: true,
    href: _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Clients.path,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx(StyledLink, {
    className: "is-hidden-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Clients.displayName)))));
};

_c2 = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c, _c2;

$RefreshReg$(_c, "StyledLink");
$RefreshReg$(_c2, "NavBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnRzeCJdLCJuYW1lcyI6WyJNYWluTG9nbyIsIlN0eWxlZExpbmsiLCJzdHlsZWQiLCJhIiwiTmF2QmFyIiwiZm9vdGVyQmFyIiwiUm91dGVzQ29uZmlnIiwiSG9tZSIsInBhdGgiLCJkaXNwbGF5TmFtZSIsIlNlcnZpY2VzIiwiQ29udGFjdCIsIkNsaWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLG1CQUFqQjtBQU1BLElBQU1DLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsQ0FBVjtBQUFBO0FBQUE7QUFBQSxpYkFBaEI7S0FBTUYsVTs7QUF5Qk4sSUFBTUcsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0M7QUFBQSxNQUNwQ0MsU0FEb0MsUUFDcENBLFNBRG9DO0FBQUEsU0FHcEM7QUFDRSxRQUFJLEVBQUMsWUFEUDtBQUVFLGFBQVMsRUFBQyxRQUZaO0FBR0Usa0JBQVcsaUJBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUMsS0FBWDtBQUNFLE9BQUcsRUFBRUwsUUFEUDtBQUVFLE9BQUcsRUFBQyxnRUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFJRTtBQUFNLGFBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLENBREYsRUFPRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQ0UsUUFBSSxFQUFFTSxrRUFBWSxDQUFDQyxJQUFiLENBQWtCQyxJQUQxQjtBQUVFLFlBQVEsTUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBYUYsa0VBQVksQ0FBQ0MsSUFBYixDQUFrQkUsV0FBL0IsQ0FKRixDQURGLEVBT0ksWUFBTTtBQUNOLFFBQUlKLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QixhQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQUdEO0FBQ0YsR0FOQSxFQVBILEVBY0UsTUFBQyxnREFBRDtBQUNFLFlBQVEsTUFEVjtBQUVFLFFBQUksRUFBRUMsa0VBQVksQ0FBQ0ksUUFBYixDQUFzQkYsSUFGOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFGLGtFQUFZLENBQUNJLFFBQWIsQ0FBc0JELFdBQW5DLENBSkYsQ0FkRixFQW9CSSxZQUFNO0FBQ04sUUFBSUosU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGO0FBR0Q7QUFDRixHQU5BLEVBcEJILEVBMkJFLE1BQUMsZ0RBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxRQUFJLEVBQUVDLGtFQUFZLENBQUNLLE9BQWIsQ0FBcUJILElBRjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhRixrRUFBWSxDQUFDSyxPQUFiLENBQXFCRixXQUFsQyxDQUpGLENBM0JGLEVBaUNJLFlBQU07QUFBQyxRQUFJSixTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFBQyxhQUNoQztBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRGdDO0FBRWhDO0FBQUMsR0FGRixFQWpDSCxFQW9DRSxNQUFDLHdEQUFEO0FBQ0UsYUFBUyxFQUFDLGtCQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDREQUFEO0FBQ0UsYUFBUyxFQUFDLG1CQURaO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBcENGLEVBMENFLE1BQUMsZ0RBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxRQUFJLEVBQUVDLGtFQUFZLENBQUNNLE9BQWIsQ0FBcUJKLElBRjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLFVBQUQ7QUFDRSxhQUFTLEVBQUMsa0JBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNnQ0Ysa0VBQVksQ0FBQ00sT0FBYixDQUFxQkgsV0FEckQsQ0FKRixDQTFDRixDQVBGLENBTEYsQ0FIb0M7QUFBQSxDQUF0Qzs7TUFBTUwsTTtBQXFFU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3VyLWNsaWVudHMvW3R5cGVdLjI2YjFmOGU2MDkxMDlmZjlmZDc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBSb3V0ZXNDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvcm91dGVzLmNvbmZpZyc7XHJcblxyXG5pbXBvcnQgeyBCdXJnZXJNZW51LCBCdXJnZXJNZW51SWNvbiB9IGZyb20gJy4vbmF2YmFyLnN0eWxlJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBNYWluTG9nbyA9ICcvaW1nL2xvZ28tTkVXLnN2Zyc7XHJcblxyXG50eXBlIE5hdkJhclByb3BzID0ge1xyXG4gIGZvb3RlckJhcjogYm9vbGVhbjtcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYWBcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1vdXQsIGJvcmRlci1ib3R0b20tY29sb3IgMC4ycyBlYXNlLW91dDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzYxZGFmYjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE5hdkJhcjogUmVhY3QuRkM8TmF2QmFyUHJvcHM+ID0gKHtcclxuICBmb290ZXJCYXJcclxufSkgPT4gKFxyXG4gIDxuYXZcclxuICAgIHJvbGU9J25hdmlnYXRpb24nXHJcbiAgICBjbGFzc05hbWU9J25hdmJhcidcclxuICAgIGFyaWEtbGFiZWw9J21haW4gbmF2aWdhdGlvbidcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLXdyYXBwZXInPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYnJhbmQtd3JhcHBlciBsZXZlbCc+XHJcbiAgICAgICAgPGltZyB3aWR0aD0nMTcwJ1xyXG4gICAgICAgICAgc3JjPXtNYWluTG9nb31cclxuICAgICAgICAgIGFsdD0nTGVnYWwgU2VydmUgLSBQcm9jZXNzIFNlcnZlciBpbiBCZWRmb3Jkc2hpcmUgJmFtcDsgQnVja2luZ2hhbXNoaXJlJy8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsZXZlbC1yaWdodCc+MDc4NTMgMTY2IDY3NDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItcm91dGVzJz5cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgaHJlZj17Um91dGVzQ29uZmlnLkhvbWUucGF0aH1cclxuICAgICAgICAgIHBhc3NIcmVmXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFN0eWxlZExpbms+e1JvdXRlc0NvbmZpZy5Ib21lLmRpc3BsYXlOYW1lfTwvU3R5bGVkTGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgeygoKSA9PiB7IFxyXG4gICAgICAgICAgaWYgKGZvb3RlckJhciAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXBlcmF0b3InIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSgpfVxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBwYXNzSHJlZlxyXG4gICAgICAgICAgaHJlZj17Um91dGVzQ29uZmlnLlNlcnZpY2VzLnBhdGh9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFN0eWxlZExpbms+e1JvdXRlc0NvbmZpZy5TZXJ2aWNlcy5kaXNwbGF5TmFtZX08L1N0eWxlZExpbms+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIHsoKCkgPT4geyBcclxuICAgICAgICAgIGlmIChmb290ZXJCYXIgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VwZXJhdG9yJyAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkoKX1cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgIGhyZWY9e1JvdXRlc0NvbmZpZy5Db250YWN0LnBhdGh9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFN0eWxlZExpbms+e1JvdXRlc0NvbmZpZy5Db250YWN0LmRpc3BsYXlOYW1lfTwvU3R5bGVkTGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgeygoKSA9PiB7aWYgKGZvb3RlckJhciAhPT0gdHJ1ZSkge3JldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VwZXJhdG9yJyAvPlxyXG4gICAgICAgICl9fSkoKX1cclxuICAgICAgICA8QnVyZ2VyTWVudVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdpcy1oaWRkZW4tdGFibGV0Jz5cclxuICAgICAgICAgIDxCdXJnZXJNZW51SWNvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2lzLXZpc2libGUtbW9iaWxlJ1xyXG4gICAgICAgICAgICBpY29uPSdiYXJzJz48L0J1cmdlck1lbnVJY29uPlxyXG4gICAgICAgIDwvQnVyZ2VyTWVudT5cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgIGhyZWY9e1JvdXRlc0NvbmZpZy5DbGllbnRzLnBhdGh9XHJcbiAgICAgICAgPiBcclxuICAgICAgICAgIDxTdHlsZWRMaW5rXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naXMtaGlkZGVuLW1vYmlsZSc+e1JvdXRlc0NvbmZpZy5DbGllbnRzLmRpc3BsYXlOYW1lfTwvU3R5bGVkTGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uYXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=