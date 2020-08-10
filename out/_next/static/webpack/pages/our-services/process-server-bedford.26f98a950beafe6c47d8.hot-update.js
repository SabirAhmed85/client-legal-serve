webpackHotUpdate_N_E("pages/our-services/process-server-bedford",{

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

var NavBar = function NavBar() {
  return __jsx("nav", {
    role: "navigation",
    className: "navbar",
    "aria-label": "main navigation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "navbar-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "brand-wrapper level",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("img", {
    width: "170",
    src: MainLogo,
    alt: "Legal Serve - Process Server in Bedfordshire & Buckinghamshire",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "level-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "07853 166 674")), __jsx("div", {
    className: "navbar-routes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    prefetch: true,
    href: _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Home.path,
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(StyledLink, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Home.displayName)), __jsx("div", {
    className: "seperator",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    prefetch: true,
    passHref: true,
    href: _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Services.path,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(StyledLink, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Services.displayName)), __jsx("div", {
    className: "seperator",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    prefetch: true,
    passHref: true,
    href: _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Contact.path,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(StyledLink, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Contact.displayName)), __jsx("div", {
    className: "seperator",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["BurgerMenu"], {
    className: "is-hidden-tablet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["BurgerMenuIcon"], {
    className: "is-visible-mobile",
    icon: "bars",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    prefetch: true,
    passHref: true,
    href: _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Clients.path,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx(StyledLink, {
    className: "is-hidden-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnRzeCJdLCJuYW1lcyI6WyJNYWluTG9nbyIsIlN0eWxlZExpbmsiLCJzdHlsZWQiLCJhIiwiTmF2QmFyIiwiUm91dGVzQ29uZmlnIiwiSG9tZSIsInBhdGgiLCJkaXNwbGF5TmFtZSIsIlNlcnZpY2VzIiwiQ29udGFjdCIsIkNsaWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLG1CQUFqQjtBQUVBLElBQU1DLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsQ0FBVjtBQUFBO0FBQUE7QUFBQSxpYkFBaEI7S0FBTUYsVTs7QUF5Qk4sSUFBTUcsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUI7QUFBQSxTQUN2QjtBQUNFLFFBQUksRUFBQyxZQURQO0FBRUUsYUFBUyxFQUFDLFFBRlo7QUFHRSxrQkFBVyxpQkFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBQyxLQUFYO0FBQ0UsT0FBRyxFQUFFSixRQURQO0FBRUUsT0FBRyxFQUFDLGdFQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUlFO0FBQU0sYUFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsQ0FERixFQU9FO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxRQUFJLEVBQUVLLGtFQUFZLENBQUNDLElBQWIsQ0FBa0JDLElBRjFCO0FBR0UsWUFBUSxNQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhRixrRUFBWSxDQUFDQyxJQUFiLENBQWtCRSxXQUEvQixDQUxGLENBREYsRUFRRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFLE1BQUMsZ0RBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxZQUFRLE1BRlY7QUFHRSxRQUFJLEVBQUVILGtFQUFZLENBQUNJLFFBQWIsQ0FBc0JGLElBSDlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhRixrRUFBWSxDQUFDSSxRQUFiLENBQXNCRCxXQUFuQyxDQUxGLENBVEYsRUFnQkU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLEVBaUJFLE1BQUMsZ0RBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxZQUFRLE1BRlY7QUFHRSxRQUFJLEVBQUVILGtFQUFZLENBQUNLLE9BQWIsQ0FBcUJILElBSDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhRixrRUFBWSxDQUFDSyxPQUFiLENBQXFCRixXQUFsQyxDQUxGLENBakJGLEVBd0JFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhCRixFQXlCRSxNQUFDLHdEQUFEO0FBQ0UsYUFBUyxFQUFDLGtCQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDREQUFEO0FBQ0UsYUFBUyxFQUFDLG1CQURaO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBekJGLEVBK0JFLE1BQUMsZ0RBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxZQUFRLE1BRlY7QUFHRSxRQUFJLEVBQUVILGtFQUFZLENBQUNNLE9BQWIsQ0FBcUJKLElBSDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLFVBQUQ7QUFDRSxhQUFTLEVBQUMsa0JBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNnQ0Ysa0VBQVksQ0FBQ00sT0FBYixDQUFxQkgsV0FEckQsQ0FMRixDQS9CRixDQVBGLENBTEYsQ0FEdUI7QUFBQSxDQUF6Qjs7TUFBTUosTTtBQXlEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3VyLXNlcnZpY2VzL3Byb2Nlc3Mtc2VydmVyLWJlZGZvcmQuMjZmOThhOTUwYmVhZmU2YzQ3ZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IFJvdXRlc0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9yb3V0ZXMuY29uZmlnJztcclxuXHJcbmltcG9ydCB7IEJ1cmdlck1lbnUsIEJ1cmdlck1lbnVJY29uIH0gZnJvbSAnLi9uYXZiYXIuc3R5bGUnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IE1haW5Mb2dvID0gJy9pbWcvbG9nby1ORVcuc3ZnJztcclxuXHJcbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYWBcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1vdXQsIGJvcmRlci1ib3R0b20tY29sb3IgMC4ycyBlYXNlLW91dDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzYxZGFmYjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE5hdkJhcjogUmVhY3QuRkMgPSAoKSA9PiAoXHJcbiAgPG5hdlxyXG4gICAgcm9sZT0nbmF2aWdhdGlvbidcclxuICAgIGNsYXNzTmFtZT0nbmF2YmFyJ1xyXG4gICAgYXJpYS1sYWJlbD0nbWFpbiBuYXZpZ2F0aW9uJ1xyXG4gID5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItd3JhcHBlcic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdicmFuZC13cmFwcGVyIGxldmVsJz5cclxuICAgICAgICA8aW1nIHdpZHRoPScxNzAnXHJcbiAgICAgICAgICBzcmM9e01haW5Mb2dvfVxyXG4gICAgICAgICAgYWx0PSdMZWdhbCBTZXJ2ZSAtIFByb2Nlc3MgU2VydmVyIGluIEJlZGZvcmRzaGlyZSAmYW1wOyBCdWNraW5naGFtc2hpcmUnLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2xldmVsLXJpZ2h0Jz4wNzg1MyAxNjYgNjc0PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1yb3V0ZXMnPlxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBwcmVmZXRjaFxyXG4gICAgICAgICAgaHJlZj17Um91dGVzQ29uZmlnLkhvbWUucGF0aH1cclxuICAgICAgICAgIHBhc3NIcmVmXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFN0eWxlZExpbms+e1JvdXRlc0NvbmZpZy5Ib21lLmRpc3BsYXlOYW1lfTwvU3R5bGVkTGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcGVyYXRvcicgLz5cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgcHJlZmV0Y2hcclxuICAgICAgICAgIHBhc3NIcmVmXHJcbiAgICAgICAgICBocmVmPXtSb3V0ZXNDb25maWcuU2VydmljZXMucGF0aH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U3R5bGVkTGluaz57Um91dGVzQ29uZmlnLlNlcnZpY2VzLmRpc3BsYXlOYW1lfTwvU3R5bGVkTGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcGVyYXRvcicgLz5cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgcHJlZmV0Y2hcclxuICAgICAgICAgIHBhc3NIcmVmXHJcbiAgICAgICAgICBocmVmPXtSb3V0ZXNDb25maWcuQ29udGFjdC5wYXRofVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTdHlsZWRMaW5rPntSb3V0ZXNDb25maWcuQ29udGFjdC5kaXNwbGF5TmFtZX08L1N0eWxlZExpbms+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXBlcmF0b3InIC8+XHJcbiAgICAgICAgPEJ1cmdlck1lbnVcclxuICAgICAgICAgIGNsYXNzTmFtZT0naXMtaGlkZGVuLXRhYmxldCc+XHJcbiAgICAgICAgICA8QnVyZ2VyTWVudUljb25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdpcy12aXNpYmxlLW1vYmlsZSdcclxuICAgICAgICAgICAgaWNvbj0nYmFycyc+PC9CdXJnZXJNZW51SWNvbj5cclxuICAgICAgICA8L0J1cmdlck1lbnU+XHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIHByZWZldGNoXHJcbiAgICAgICAgICBwYXNzSHJlZlxyXG4gICAgICAgICAgaHJlZj17Um91dGVzQ29uZmlnLkNsaWVudHMucGF0aH1cclxuICAgICAgICA+IFxyXG4gICAgICAgICAgPFN0eWxlZExpbmtcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdpcy1oaWRkZW4tbW9iaWxlJz57Um91dGVzQ29uZmlnLkNsaWVudHMuZGlzcGxheU5hbWV9PC9TdHlsZWRMaW5rPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L25hdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==