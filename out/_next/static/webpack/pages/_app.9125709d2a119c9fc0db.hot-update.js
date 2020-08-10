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
/* harmony import */ var _navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar-link/navbar-link */ "./components/navbar/navbar-link/navbar-link.tsx");
/* harmony import */ var _navbar_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.style */ "./components/navbar/navbar.style.tsx");
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
  }, __jsx(_navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    path: _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Home.path,
    displayName: _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Home.displayName,
    footerBar: footerBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Home.path,
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Home.displayName)), function () {
    if (footerBar !== true) {
      return __jsx("div", {
        className: "seperator",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
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
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Services.displayName)), function () {
    if (footerBar !== true) {
      return __jsx("div", {
        className: "seperator",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
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
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Contact.displayName)), function () {
    if (footerBar !== true) {
      return __jsx("div", {
        className: "seperator",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      });
    }
  }(), __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_4__["BurgerMenu"], {
    className: "is-hidden-tablet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_4__["BurgerMenuIcon"], {
    className: "is-visible-mobile",
    icon: "bars",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    passHref: true,
    href: _config_routes_config__WEBPACK_IMPORTED_MODULE_2__["RoutesConfig"].Clients.path,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "is-hidden-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnRzeCJdLCJuYW1lcyI6WyJNYWluTG9nbyIsIk5hdkJhciIsImZvb3RlckJhciIsIlJvdXRlc0NvbmZpZyIsIkhvbWUiLCJwYXRoIiwiZGlzcGxheU5hbWUiLCJTZXJ2aWNlcyIsIkNvbnRhY3QiLCJDbGllbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxtQkFBakI7O0FBTUEsSUFBTUMsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0M7QUFBQSxNQUNwQ0MsU0FEb0MsUUFDcENBLFNBRG9DO0FBQUEsU0FHcEM7QUFDRSxRQUFJLEVBQUMsWUFEUDtBQUVFLGFBQVMsRUFBQyxRQUZaO0FBR0Usa0JBQVcsaUJBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUMsS0FBWDtBQUNFLE9BQUcsRUFBRUYsUUFEUDtBQUVFLE9BQUcsRUFBQyxnRUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFJRTtBQUFNLGFBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLENBREYsRUFPRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQ0UsUUFBSSxFQUFFRyxrRUFBWSxDQUFDQyxJQUFiLENBQWtCQyxJQUQxQjtBQUVFLGVBQVcsRUFBRUYsa0VBQVksQ0FBQ0MsSUFBYixDQUFrQkUsV0FGakM7QUFHRSxhQUFTLEVBQUVKLFNBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUUsTUFBQyxnREFBRDtBQUNFLFFBQUksRUFBRUMsa0VBQVksQ0FBQ0MsSUFBYixDQUFrQkMsSUFEMUI7QUFFRSxZQUFRLE1BRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0Ysa0VBQVksQ0FBQ0MsSUFBYixDQUFrQkUsV0FBekIsQ0FKRixDQU5GLEVBWUksWUFBTTtBQUNOLFFBQUlKLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QixhQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQUdEO0FBQ0YsR0FOQSxFQVpILEVBbUJFLE1BQUMsZ0RBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxRQUFJLEVBQUVDLGtFQUFZLENBQUNJLFFBQWIsQ0FBc0JGLElBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9GLGtFQUFZLENBQUNJLFFBQWIsQ0FBc0JELFdBQTdCLENBSkYsQ0FuQkYsRUF5QkksWUFBTTtBQUNOLFFBQUlKLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QixhQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQUdEO0FBQ0YsR0FOQSxFQXpCSCxFQWdDRSxNQUFDLGdEQUFEO0FBQ0UsWUFBUSxNQURWO0FBRUUsUUFBSSxFQUFFQyxrRUFBWSxDQUFDSyxPQUFiLENBQXFCSCxJQUY3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPRixrRUFBWSxDQUFDSyxPQUFiLENBQXFCRixXQUE1QixDQUpGLENBaENGLEVBc0NJLFlBQU07QUFBQyxRQUFJSixTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFBQyxhQUNoQztBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRGdDO0FBRWhDO0FBQUMsR0FGRixFQXRDSCxFQXlDRSxNQUFDLHdEQUFEO0FBQ0UsYUFBUyxFQUFDLGtCQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDREQUFEO0FBQ0UsYUFBUyxFQUFDLG1CQURaO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBekNGLEVBK0NFLE1BQUMsZ0RBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxRQUFJLEVBQUVDLGtFQUFZLENBQUNNLE9BQWIsQ0FBcUJKLElBRjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUNFLGFBQVMsRUFBQyxrQkFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ2dDRixrRUFBWSxDQUFDTSxPQUFiLENBQXFCSCxXQURyRCxDQUpGLENBL0NGLENBUEYsQ0FMRixDQUhvQztBQUFBLENBQXRDOztLQUFNTCxNO0FBMEVTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjkxMjU3MDlkMmExMTljOWZjMGRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBSb3V0ZXNDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvcm91dGVzLmNvbmZpZyc7XHJcbmltcG9ydCBOYXZCYXJMaW5rIGZyb20gJy4vbmF2YmFyLWxpbmsvbmF2YmFyLWxpbmsnO1xyXG5cclxuaW1wb3J0IHsgQnVyZ2VyTWVudSwgQnVyZ2VyTWVudUljb24gfSBmcm9tICcuL25hdmJhci5zdHlsZSc7XHJcblxyXG5jb25zdCBNYWluTG9nbyA9ICcvaW1nL2xvZ28tTkVXLnN2Zyc7XHJcblxyXG50eXBlIE5hdkJhclByb3BzID0ge1xyXG4gIGZvb3RlckJhcj86IGJvb2xlYW47XHJcbn07XHJcblxyXG5jb25zdCBOYXZCYXI6IFJlYWN0LkZDPE5hdkJhclByb3BzPiA9ICh7XHJcbiAgZm9vdGVyQmFyXHJcbn0pID0+IChcclxuICA8bmF2XHJcbiAgICByb2xlPSduYXZpZ2F0aW9uJ1xyXG4gICAgY2xhc3NOYW1lPSduYXZiYXInXHJcbiAgICBhcmlhLWxhYmVsPSdtYWluIG5hdmlnYXRpb24nXHJcbiAgPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci13cmFwcGVyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JyYW5kLXdyYXBwZXIgbGV2ZWwnPlxyXG4gICAgICAgIDxpbWcgd2lkdGg9JzE3MCdcclxuICAgICAgICAgIHNyYz17TWFpbkxvZ299XHJcbiAgICAgICAgICBhbHQ9J0xlZ2FsIFNlcnZlIC0gUHJvY2VzcyBTZXJ2ZXIgaW4gQmVkZm9yZHNoaXJlICZhbXA7IEJ1Y2tpbmdoYW1zaGlyZScvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbGV2ZWwtcmlnaHQnPjA3ODUzIDE2NiA2NzQ8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLXJvdXRlcyc+XHJcbiAgICAgICAgPE5hdkJhckxpbmtcclxuICAgICAgICAgIHBhdGg9e1JvdXRlc0NvbmZpZy5Ib21lLnBhdGh9XHJcbiAgICAgICAgICBkaXNwbGF5TmFtZT17Um91dGVzQ29uZmlnLkhvbWUuZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICBmb290ZXJCYXI9e2Zvb3RlckJhcn1cclxuICAgICAgICA+PC9OYXZCYXJMaW5rPlxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBocmVmPXtSb3V0ZXNDb25maWcuSG9tZS5wYXRofVxyXG4gICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3Bhbj57Um91dGVzQ29uZmlnLkhvbWUuZGlzcGxheU5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7KCgpID0+IHsgXHJcbiAgICAgICAgICBpZiAoZm9vdGVyQmFyICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcGVyYXRvcicgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pKCl9XHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIHBhc3NIcmVmXHJcbiAgICAgICAgICBocmVmPXtSb3V0ZXNDb25maWcuU2VydmljZXMucGF0aH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3Bhbj57Um91dGVzQ29uZmlnLlNlcnZpY2VzLmRpc3BsYXlOYW1lfTwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgeygoKSA9PiB7IFxyXG4gICAgICAgICAgaWYgKGZvb3RlckJhciAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXBlcmF0b3InIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSgpfVxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBwYXNzSHJlZlxyXG4gICAgICAgICAgaHJlZj17Um91dGVzQ29uZmlnLkNvbnRhY3QucGF0aH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3Bhbj57Um91dGVzQ29uZmlnLkNvbnRhY3QuZGlzcGxheU5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7KCgpID0+IHtpZiAoZm9vdGVyQmFyICE9PSB0cnVlKSB7cmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXBlcmF0b3InIC8+XHJcbiAgICAgICAgKX19KSgpfVxyXG4gICAgICAgIDxCdXJnZXJNZW51XHJcbiAgICAgICAgICBjbGFzc05hbWU9J2lzLWhpZGRlbi10YWJsZXQnPlxyXG4gICAgICAgICAgPEJ1cmdlck1lbnVJY29uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naXMtdmlzaWJsZS1tb2JpbGUnXHJcbiAgICAgICAgICAgIGljb249J2JhcnMnPjwvQnVyZ2VyTWVudUljb24+XHJcbiAgICAgICAgPC9CdXJnZXJNZW51PlxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBwYXNzSHJlZlxyXG4gICAgICAgICAgaHJlZj17Um91dGVzQ29uZmlnLkNsaWVudHMucGF0aH1cclxuICAgICAgICA+IFxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdpcy1oaWRkZW4tbW9iaWxlJz57Um91dGVzQ29uZmlnLkNsaWVudHMuZGlzcGxheU5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L25hdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==