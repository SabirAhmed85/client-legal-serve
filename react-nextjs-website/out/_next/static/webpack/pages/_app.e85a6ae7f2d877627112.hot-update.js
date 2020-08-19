webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar/navbar-link/navbar-link.style.tsx":
/*!*************************************************************!*\
  !*** ./components/navbar/navbar-link/navbar-link.style.tsx ***!
  \*************************************************************/
/*! exports provided: StyledLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "navbar-linkstyle__StyledLink",
  componentId: "sc-1jzd7hs-0"
})(["user-select:none;color:white;letter-spacing:0.01em;background-color:transparent;border-top:2px solid transparent;border-bottom:2px solid transparent;transition:color 0.2s ease-out,border-bottom-color 0.2s ease-out;display:flex;overflow-x:auto;overflow-y:hidden;align-items:center;height:100%;padding:0.5rem 0.75rem;position:relative;flex-grow:0;flex-shrink:0;:hover{cursor:pointer;color:#61dafb;background-color:transparent;}"]);


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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/navbar/navbar-link/navbar-link.tsx":
/*!*******************************************************!*\
  !*** ./components/navbar/navbar-link/navbar-link.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar_link_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar-link.style */ "./components/navbar/navbar-link/navbar-link.style.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\components\\navbar\\navbar-link\\navbar-link.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var NavBarLink = function NavBarLink(_ref) {
  var path = _ref.path,
      displayName = _ref.displayName,
      footerBar = _ref.footerBar,
      lastLink = _ref.lastLink;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: path,
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_navbar_link_style__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, displayName)), function () {
    if (!footerBar || lastLink) {
      return __jsx("div", {
        className: "seperator",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }
      });
    }
  }());
};

_c = NavBarLink;
/* harmony default export */ __webpack_exports__["default"] = (NavBarLink);

var _c;

$RefreshReg$(_c, "NavBarLink");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/navbar/navbar.style.tsx":
/*!********************************************!*\
  !*** ./components/navbar/navbar.style.tsx ***!
  \********************************************/
/*! exports provided: BurgerMenu, BurgerMenuIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurgerMenu", function() { return BurgerMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurgerMenuIcon", function() { return BurgerMenuIcon; });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var BurgerMenu = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.attrs(function () {
  return {
    role: 'button',
    'aria-label': 'Menu'
  };
}).withConfig({
  displayName: "navbarstyle__BurgerMenu",
  componentId: "sc-1iywcax-0"
})(["border:none;background:none;width:3.5rem;height:3.5rem;margin-left:-1rem;cursor:pointer;user-select:none;border-radius:50%;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;transition:opacity 0.4s ease,bottom 0.4s ease;"]);
var BurgerMenuIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeIcon"]).withConfig({
  displayName: "navbarstyle__BurgerMenuIcon",
  componentId: "sc-1iywcax-1"
})(["color:#fff;font-size:1.75em;"]);


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

/***/ }),

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
/* harmony import */ var _navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar-link/navbar-link */ "./components/navbar/navbar-link/navbar-link.tsx");
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
  }, __jsx(_navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }, __jsx(StyledLink, {
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
  }, __jsx(StyledLink, {
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
  }, __jsx(StyledLink, {
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
  }(), __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["BurgerMenu"], {
    className: "is-hidden-tablet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["BurgerMenuIcon"], {
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
  }, __jsx(StyledLink, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLWxpbmsvbmF2YmFyLWxpbmsuc3R5bGUudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXItbGluay9uYXZiYXItbGluay50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci50c3giXSwibmFtZXMiOlsiU3R5bGVkTGluayIsInN0eWxlZCIsImEiLCJOYXZCYXJMaW5rIiwicGF0aCIsImRpc3BsYXlOYW1lIiwiZm9vdGVyQmFyIiwibGFzdExpbmsiLCJCdXJnZXJNZW51IiwiYnV0dG9uIiwiYXR0cnMiLCJyb2xlIiwiQnVyZ2VyTWVudUljb24iLCJGb250QXdlc29tZUljb24iLCJNYWluTG9nbyIsIk5hdkJhciIsIlJvdXRlc0NvbmZpZyIsIkhvbWUiLCJTZXJ2aWNlcyIsIkNvbnRhY3QiLCJDbGllbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLENBQVY7QUFBQTtBQUFBO0FBQUEsaWJBQWhCO0FBeUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFFQTs7QUFTQSxJQUFNQyxVQUFxQyxHQUFHLFNBQXhDQSxVQUF3QztBQUFBLE1BQzVDQyxJQUQ0QyxRQUM1Q0EsSUFENEM7QUFBQSxNQUU1Q0MsV0FGNEMsUUFFNUNBLFdBRjRDO0FBQUEsTUFHNUNDLFNBSDRDLFFBRzVDQSxTQUg0QztBQUFBLE1BSTVDQyxRQUo0QyxRQUk1Q0EsUUFKNEM7QUFBQSxTQU01QyxtRUFDRSxNQUFDLGdEQUFEO0FBQ0UsUUFB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LE1BQUMsZ0RBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxRQUFJLEVBQUVVLGtFQUFZLENBQUNJLE9BQWIsQ0FBcUJoQixJQUY3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyxVQUFEO0FBQ0UsYUFBUyxFQUFDLGtCQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDZ0NZLGtFQUFZLENBQUNJLE9BQWIsQ0FBcUJmLFdBRHJELENBSkYsQ0EvQ0YsQ0FQRixDQUxGLENBSG9DO0FBQUEsQ0FBdEM7O0tBQU1VLE07QUEwRVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZTg1YTZhZTdmMmQ4Nzc2MjcxMTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZC5hYFxyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLW91dCwgYm9yZGVyLWJvdHRvbS1jb2xvciAwLjJzIGVhc2Utb3V0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjNjFkYWZiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IHsgU3R5bGVkTGluayB9O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHsgU3R5bGVkTGluayB9IGZyb20gJy4vbmF2YmFyLWxpbmsuc3R5bGUnO1xyXG5cclxudHlwZSBOYXZCYXJMaW5rUHJvcHMgPSB7XHJcbiAgcGF0aDogc3RyaW5nO1xyXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgZm9vdGVyQmFyPzogYm9vbGVhbjtcclxuICBsYXN0TGluaz86IGJvb2xlYW47XHJcbn07XHJcblxyXG5jb25zdCBOYXZCYXJMaW5rOiBSZWFjdC5GQzxOYXZCYXJMaW5rUHJvcHM+ID0gKHtcclxuICBwYXRoLFxyXG4gIGRpc3BsYXlOYW1lLFxyXG4gIGZvb3RlckJhcixcclxuICBsYXN0TGlua1xyXG59KSA9PiAoXHJcbiAgPD5cclxuICAgIDxMaW5rXHJcbiAgICAgIGhyZWY9e3BhdGh9XHJcbiAgICAgIHBhc3NIcmVmXHJcbiAgICA+XHJcbiAgICAgIDxTdHlsZWRMaW5rPntkaXNwbGF5TmFtZX08L1N0eWxlZExpbms+XHJcbiAgICA8L0xpbms+XHJcbiAgICB7KCgpID0+IHsgXHJcbiAgICAgIGlmICghZm9vdGVyQmFyIHx8IGxhc3RMaW5rKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXBlcmF0b3InIC8+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9KSgpfVxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyTGluaztcclxuIiwiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBCdXJnZXJNZW51ID0gc3R5bGVkLmJ1dHRvbi5hdHRycygoKSA9PiAoe1xyXG4gIHJvbGU6ICdidXR0b24nLFxyXG4gICdhcmlhLWxhYmVsJzogJ01lbnUnXHJcbn0pKWBcclxuICBib3JkZXI6bm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHdpZHRoOiAzLjVyZW07XHJcbiAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UsIGJvdHRvbSAwLjRzIGVhc2U7XHJcbmA7XHJcblxyXG5jb25zdCBCdXJnZXJNZW51SWNvbiA9IHN0eWxlZChGb250QXdlc29tZUljb24pYFxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMS43NWVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IHsgQnVyZ2VyTWVudSwgQnVyZ2VyTWVudUljb24gfTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgUm91dGVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3JvdXRlcy5jb25maWcnO1xyXG5cclxuaW1wb3J0IHsgQnVyZ2VyTWVudSwgQnVyZ2VyTWVudUljb24gfSBmcm9tICcuL25hdmJhci5zdHlsZSc7XHJcbmltcG9ydCBOYXZCYXJMaW5rIGZyb20gJy4vbmF2YmFyLWxpbmsvbmF2YmFyLWxpbmsnO1xyXG5cclxuY29uc3QgTWFpbkxvZ28gPSAnL2ltZy9sb2dvLU5FVy5zdmcnO1xyXG5cclxudHlwZSBOYXZCYXJQcm9wcyA9IHtcclxuICBmb290ZXJCYXI/OiBib29sZWFuO1xyXG59O1xyXG5cclxuY29uc3QgTmF2QmFyOiBSZWFjdC5GQzxOYXZCYXJQcm9wcz4gPSAoe1xyXG4gIGZvb3RlckJhclxyXG59KSA9PiAoXHJcbiAgPG5hdlxyXG4gICAgcm9sZT0nbmF2aWdhdGlvbidcclxuICAgIGNsYXNzTmFtZT0nbmF2YmFyJ1xyXG4gICAgYXJpYS1sYWJlbD0nbWFpbiBuYXZpZ2F0aW9uJ1xyXG4gID5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItd3JhcHBlcic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdicmFuZC13cmFwcGVyIGxldmVsJz5cclxuICAgICAgICA8aW1nIHdpZHRoPScxNzAnXHJcbiAgICAgICAgICBzcmM9e01haW5Mb2dvfVxyXG4gICAgICAgICAgYWx0PSdMZWdhbCBTZXJ2ZSAtIFByb2Nlc3MgU2VydmVyIGluIEJlZGZvcmRzaGlyZSAmYW1wOyBCdWNraW5naGFtc2hpcmUnLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2xldmVsLXJpZ2h0Jz4wNzg1MyAxNjYgNjc0PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1yb3V0ZXMnPlxyXG4gICAgICAgIDxOYXZCYXJMaW5rXHJcbiAgICAgICAgICBwYXRoPXtSb3V0ZXNDb25maWcuSG9tZS5wYXRofVxyXG4gICAgICAgICAgZGlzcGxheU5hbWU9e1JvdXRlc0NvbmZpZy5Ib21lLmRpc3BsYXlOYW1lfVxyXG4gICAgICAgICAgZm9vdGVyQmFyPXtmb290ZXJCYXJ9XHJcbiAgICAgICAgPjwvTmF2QmFyTGluaz5cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgaHJlZj17Um91dGVzQ29uZmlnLkhvbWUucGF0aH1cclxuICAgICAgICAgIHBhc3NIcmVmXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFN0eWxlZExpbms+e1JvdXRlc0NvbmZpZy5Ib21lLmRpc3BsYXlOYW1lfTwvU3R5bGVkTGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgeygoKSA9PiB7IFxyXG4gICAgICAgICAgaWYgKGZvb3RlckJhciAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXBlcmF0b3InIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSgpfVxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBwYXNzSHJlZlxyXG4gICAgICAgICAgaHJlZj17Um91dGVzQ29uZmlnLlNlcnZpY2VzLnBhdGh9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFN0eWxlZExpbms+e1JvdXRlc0NvbmZpZy5TZXJ2aWNlcy5kaXNwbGF5TmFtZX08L1N0eWxlZExpbms+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIHsoKCkgPT4geyBcclxuICAgICAgICAgIGlmIChmb290ZXJCYXIgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VwZXJhdG9yJyAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkoKX1cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgIGhyZWY9e1JvdXRlc0NvbmZpZy5Db250YWN0LnBhdGh9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFN0eWxlZExpbms+e1JvdXRlc0NvbmZpZy5Db250YWN0LmRpc3BsYXlOYW1lfTwvU3R5bGVkTGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgeygoKSA9PiB7aWYgKGZvb3RlckJhciAhPT0gdHJ1ZSkge3JldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VwZXJhdG9yJyAvPlxyXG4gICAgICAgICl9fSkoKX1cclxuICAgICAgICA8QnVyZ2VyTWVudVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdpcy1oaWRkZW4tdGFibGV0Jz5cclxuICAgICAgICAgIDxCdXJnZXJNZW51SWNvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2lzLXZpc2libGUtbW9iaWxlJ1xyXG4gICAgICAgICAgICBpY29uPSdiYXJzJz48L0J1cmdlck1lbnVJY29uPlxyXG4gICAgICAgIDwvQnVyZ2VyTWVudT5cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgIGhyZWY9e1JvdXRlc0NvbmZpZy5DbGllbnRzLnBhdGh9XHJcbiAgICAgICAgPiBcclxuICAgICAgICAgIDxTdHlsZWRMaW5rXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naXMtaGlkZGVuLW1vYmlsZSc+e1JvdXRlc0NvbmZpZy5DbGllbnRzLmRpc3BsYXlOYW1lfTwvU3R5bGVkTGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uYXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=