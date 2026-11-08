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
})([":hover{cursor:pointer;}"]);
_c = StyledLink;

var NavBar = function NavBar() {
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
    prefetch: true,
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
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "navbar-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 23
    }
  }, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Home.displayName))), __jsx("div", {
    className: "seperator",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Services.path,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "navbar-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Services.displayName)), __jsx("div", {
    className: "seperator",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Contact.path,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "navbar-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Contact.displayName)), __jsx("div", {
    className: "seperator",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["BurgerMenu"], {
    className: "is-hidden-tablet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["BurgerMenuIcon"], {
    className: "is-visible-mobile",
    icon: "bars",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Clients.path,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "navbar-item is-hidden-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnRzeCJdLCJuYW1lcyI6WyJNYWluTG9nbyIsIlN0eWxlZExpbmsiLCJzdHlsZWQiLCJhIiwiTmF2QmFyIiwiUm91dGVzQ29uZmlnIiwiSG9tZSIsInBhdGgiLCJkaXNwbGF5TmFtZSIsIlNlcnZpY2VzIiwiQ29udGFjdCIsIkNsaWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLG1CQUFqQjtBQUVBLElBQU1DLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsQ0FBVjtBQUFBO0FBQUE7QUFBQSwrQkFBaEI7S0FBTUYsVTs7QUFNTixJQUFNRyxNQUFnQixHQUFHLFNBQW5CQSxNQUFtQjtBQUFBLFNBQ3ZCO0FBQ0UsUUFBSSxFQUFDLFlBRFA7QUFFRSxhQUFTLEVBQUMsUUFGWjtBQUdFLGtCQUFXLGlCQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFDLEtBQVg7QUFDRSxPQUFHLEVBQUVKLFFBRFA7QUFFRSxPQUFHLEVBQUMsZ0VBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBSUU7QUFBTSxhQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixDQURGLEVBT0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUNFLFlBQVEsTUFEVjtBQUVFLFFBQUksRUFBRUssa0VBQVksQ0FBQ0MsSUFBYixDQUFrQkMsSUFGMUI7QUFHRSxZQUFRLE1BSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVk7QUFBTSxhQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQkYsa0VBQVksQ0FBQ0MsSUFBYixDQUFrQkUsV0FBakQsQ0FBWixDQUxGLENBREYsRUFRRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFLE1BQUMsZ0RBQUQ7QUFDRSxRQUFJLEVBQUVILGtFQUFZLENBQUNJLFFBQWIsQ0FBc0JGLElBRDlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRTtBQUFNLGFBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCRixrRUFBWSxDQUFDSSxRQUFiLENBQXNCRCxXQUFyRCxDQUhGLENBVEYsRUFjRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixFQWVFLE1BQUMsZ0RBQUQ7QUFDRSxRQUFJLEVBQUVILGtFQUFZLENBQUNLLE9BQWIsQ0FBcUJILElBRDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRTtBQUFNLGFBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCRixrRUFBWSxDQUFDSyxPQUFiLENBQXFCRixXQUFwRCxDQUhGLENBZkYsRUFvQkU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJGLEVBcUJFLE1BQUMsd0RBQUQ7QUFDRSxhQUFTLEVBQUMsa0JBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsNERBQUQ7QUFDRSxhQUFTLEVBQUMsbUJBRFo7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FyQkYsRUEyQkUsTUFBQyxnREFBRDtBQUNFLFFBQUksRUFBRUgsa0VBQVksQ0FBQ00sT0FBYixDQUFxQkosSUFEN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFO0FBQU0sYUFBUyxFQUFDLDhCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdERixrRUFBWSxDQUFDTSxPQUFiLENBQXFCSCxXQUFyRSxDQUhGLENBM0JGLENBUEYsQ0FMRixDQUR1QjtBQUFBLENBQXpCOztNQUFNSixNO0FBa0RTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmFkNmNiNzgyOTIwZDlkMDU1YmM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBSb3V0ZXNDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvcm91dGVzLmNvbmZpZyc7XHJcblxyXG5pbXBvcnQgeyBCdXJnZXJNZW51LCBCdXJnZXJNZW51SWNvbiB9IGZyb20gJy4vbmF2YmFyLnN0eWxlJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBNYWluTG9nbyA9ICcvaW1nL2xvZ28tTkVXLnN2Zyc7XHJcblxyXG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkLmFgXHJcbiAgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBOYXZCYXI6IFJlYWN0LkZDID0gKCkgPT4gKFxyXG4gIDxuYXZcclxuICAgIHJvbGU9J25hdmlnYXRpb24nXHJcbiAgICBjbGFzc05hbWU9J25hdmJhcidcclxuICAgIGFyaWEtbGFiZWw9J21haW4gbmF2aWdhdGlvbidcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLXdyYXBwZXInPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYnJhbmQtd3JhcHBlciBsZXZlbCc+XHJcbiAgICAgICAgPGltZyB3aWR0aD0nMTcwJ1xyXG4gICAgICAgICAgc3JjPXtNYWluTG9nb31cclxuICAgICAgICAgIGFsdD0nTGVnYWwgU2VydmUgLSBQcm9jZXNzIFNlcnZlciBpbiBCZWRmb3Jkc2hpcmUgJmFtcDsgQnVja2luZ2hhbXNoaXJlJy8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsZXZlbC1yaWdodCc+MDc4NTMgMTY2IDY3NDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItcm91dGVzJz5cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgcHJlZmV0Y2hcclxuICAgICAgICAgIGhyZWY9e1JvdXRlc0NvbmZpZy5Ib21lLnBhdGh9XHJcbiAgICAgICAgICBwYXNzSHJlZlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTdHlsZWRMaW5rPjxzcGFuIGNsYXNzTmFtZT0nbmF2YmFyLWl0ZW0nPntSb3V0ZXNDb25maWcuSG9tZS5kaXNwbGF5TmFtZX08L3NwYW4+PC9TdHlsZWRMaW5rPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VwZXJhdG9yJyAvPlxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBocmVmPXtSb3V0ZXNDb25maWcuU2VydmljZXMucGF0aH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J25hdmJhci1pdGVtJz57Um91dGVzQ29uZmlnLlNlcnZpY2VzLmRpc3BsYXlOYW1lfTwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcGVyYXRvcicgLz5cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgaHJlZj17Um91dGVzQ29uZmlnLkNvbnRhY3QucGF0aH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J25hdmJhci1pdGVtJz57Um91dGVzQ29uZmlnLkNvbnRhY3QuZGlzcGxheU5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VwZXJhdG9yJyAvPlxyXG4gICAgICAgIDxCdXJnZXJNZW51XHJcbiAgICAgICAgICBjbGFzc05hbWU9J2lzLWhpZGRlbi10YWJsZXQnPlxyXG4gICAgICAgICAgPEJ1cmdlck1lbnVJY29uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naXMtdmlzaWJsZS1tb2JpbGUnXHJcbiAgICAgICAgICAgIGljb249J2JhcnMnPjwvQnVyZ2VyTWVudUljb24+XHJcbiAgICAgICAgPC9CdXJnZXJNZW51PlxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBocmVmPXtSb3V0ZXNDb25maWcuQ2xpZW50cy5wYXRofVxyXG4gICAgICAgID4gXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J25hdmJhci1pdGVtIGlzLWhpZGRlbi1tb2JpbGUnPntSb3V0ZXNDb25maWcuQ2xpZW50cy5kaXNwbGF5TmFtZX08L3NwYW4+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmF2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9