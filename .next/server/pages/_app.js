module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./assets/style/main.scss":
/*!********************************!*\
  !*** ./assets/style/main.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/back-to-top/back-to-top.style.tsx":
/*!******************************************************!*\
  !*** ./components/back-to-top/back-to-top.style.tsx ***!
  \******************************************************/
/*! exports provided: BackToTopLink, AngleDoubleUpIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackToTopLink", function() { return BackToTopLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngleDoubleUpIcon", function() { return AngleDoubleUpIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);


const BackToTopLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.attrs(() => ({
  role: 'button',
  'aria-label': 'BackToTop'
})).withConfig({
  displayName: "back-to-topstyle__BackToTopLink",
  componentId: "k1m7qy-0"
})(["width:3.5rem;z-index:9999;display:block;height:3.5rem;right:6.25rem;cursor:pointer;position:fixed;user-select:none;border-radius:50%;-webkit-touch-callout:none;background:rgb(37,40,47);-webkit-tap-highlight-color:transparent;border:1px solid rgba(255,255,255,0.1);box-shadow:rgba(0,0,0,0.3) 0px 0px 20px;transition:opacity 0.4s ease,bottom 0.4s ease;bottom:", ";opacity:", ";"], props => props.show ? '24px' : '-3.5rem', props => props.show ? 1 : 0);
const AngleDoubleUpIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"]).withConfig({
  displayName: "back-to-topstyle__AngleDoubleUpIcon",
  componentId: "k1m7qy-1"
})(["display:block;color:#61dafb;font-size:1.75em;padding-left:0.1rem;margin:0.75rem auto auto auto;"]);


/***/ }),

/***/ "./components/back-to-top/back-to-top.tsx":
/*!************************************************!*\
  !*** ./components/back-to-top/back-to-top.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _back_to_top_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./back-to-top.style */ "./components/back-to-top/back-to-top.style.tsx");
var _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\components\\back-to-top\\back-to-top.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // 'react-scroll' configuration

const scroll = react_scroll__WEBPACK_IMPORTED_MODULE_1___default.a.animateScroll;
const scrollOptions = {
  delay: 5,
  duration: 500,
  smooth: 'easeInOutCubic'
}; // Write the show state value to a ref so we can use it as a check to prevent
// ...re-renders on every scroll down that triggers a show for the button

const BackToTop = () => {
  const showRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handleScroll = () => {
      if (!showRef.current && (window.scrollY || window.pageYOffset) > 100) {
        showRef.current = true;
        setShow(true);
      } else if ((window.scrollY || window.pageYOffset) === 0) {
        showRef.current = false;
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return __jsx(_back_to_top_style__WEBPACK_IMPORTED_MODULE_2__["BackToTopLink"], {
    show: show,
    onClick: () => scroll.scrollToTop(scrollOptions),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(_back_to_top_style__WEBPACK_IMPORTED_MODULE_2__["AngleDoubleUpIcon"], {
    icon: "angle-double-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BackToTop);

/***/ }),

/***/ "./components/card/card.style.tsx":
/*!****************************************!*\
  !*** ./components/card/card.style.tsx ***!
  \****************************************/
/*! exports provided: StyledCard, StyledCardImage, StyledCardContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledCard", function() { return StyledCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledCardImage", function() { return StyledCardImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledCardContent", function() { return StyledCardContent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.attrs(props => ({
  dark: props.dark,
  horizontal: props.horizontal,
  className: ''
})).withConfig({
  displayName: "cardstyle__StyledCard",
  componentId: "sc-1n5xuqv-0"
})(["background-color:#fcfcfc;border:1px solid #eae8e8;height:100%;", " ", ""], props => props.dark && `
    background-color: ${props.theme.colors.colorHeroIsDark};
    color: #ccc;
    .title,
    .subtitle {
        color: #fff;
    }
    a {
        color: #fff;
        &:hover {
            color: #61dafb;
        }
    }
  `, props => props.horizontal && `
    flex-direction: row !important;
    display: flex;
    flex-basis: 50ex;
    flex-grow: 0;
    flex-shrink: 1;
    box-shadow: none;
    .card-image {
        align-self: center;
        width: 40%;
    }
    .image {
        min-height: 100%;
    }
    .card-content {
        flex: 1;
        padding: 2em;
        font-size: 0.8em;
    }
    ul {
        list-style: none;
        margin: 0;
    }
    .is-divider {
        margin-top: 1.5rem;
        margin-bottom: 1rem;
    }
  `);
const StyledCardImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.attrs(() => ({
  className: 'card-image'
})).withConfig({
  displayName: "cardstyle__StyledCardImage",
  componentId: "sc-1n5xuqv-1"
})([""]);
const StyledCardContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.attrs(() => ({
  className: 'card-content'
})).withConfig({
  displayName: "cardstyle__StyledCardContent",
  componentId: "sc-1n5xuqv-2"
})(["background-color:transparent;padding:1.5rem;"]);


/***/ }),

/***/ "./components/card/card.tsx":
/*!**********************************!*\
  !*** ./components/card/card.tsx ***!
  \**********************************/
/*! exports provided: Card, CardImage, CardContent, CardTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImage", function() { return CardImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContent", function() { return CardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitle", function() { return CardTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.style */ "./components/card/card.style.tsx");
var _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\components\\card\\card.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Card = props => {
  return __jsx(_card_style__WEBPACK_IMPORTED_MODULE_1__["StyledCard"], {
    dark: props.dark,
    horizontal: props.horizontal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, (() => {
    if (props.image) {
      return __jsx(CardImage, {
        src: props.image.src,
        alt: props.image.alt,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }
      });
    }
  })(), __jsx(CardContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(CardTitle, {
    size: props.title.size,
    content: props.title.content,
    className: props.title.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, props.children)));
};
const CardImage = props => {
  return __jsx(_card_style__WEBPACK_IMPORTED_MODULE_1__["StyledCardImage"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("figure", {
    className: "image is4by3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: props.src,
    alt: props.alt,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  })));
};
const CardContent = props => {
  return __jsx(_card_style__WEBPACK_IMPORTED_MODULE_1__["StyledCardContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, props.children);
};
const CardTitle = props => {
  return props.size === 'large' ? __jsx("h3", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, props.content) : __jsx("h4", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, props.content);
};
CardTitle.defaultProps = {
  size: 'large',
  content: null,
  className: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/footer/footer.tsx":
/*!**************************************!*\
  !*** ./components/footer/footer.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar */ "./components/navbar/navbar.tsx");
var _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\components\\footer\\footer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MainLogo = '/img/logo-NEW.svg';

const Footer = () => __jsx("footer", {
  className: "footer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, __jsx(_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
  footerBar: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}), __jsx("div", {
  className: "content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, "Created by ", __jsx("a", {
  target: "_blank",
  rel: "noopener noreferrer",
  href: "http://www.mydayapp.co.uk/business/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 41
  }
}, __jsx("strong", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 129
  }
}, "MyDay in Business")), " \xA9 2020"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/hero/hero.tsx":
/*!**********************************!*\
  !*** ./components/hero/hero.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_list_service_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service-list/service-list */ "./components/service-list/service-list.tsx");
/* harmony import */ var _config_services_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/services.config */ "./config/services.config.ts");
var _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\components\\hero\\hero.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



;

const Hero = props => {
  const HeroProps = {
    Home: {
      title: 'Welcome to Legal Serve, local Process Servers and Legal Couriers in Bedfordshire, Buckinghamshire & Cambridgeshire.'
    },
    Services: {
      title: 'Our Services in Legal Support',
      summary: 'Read more about the services we offer around process and court-order serving and legal couriering'
    },
    ProcessServerBedford: {
      title: 'Process Serving in Beds, Bucks & surrounding areas',
      summary: 'Find out more about the services we offer in the Bedfordshire and Buckinghamshire counties.'
    },
    LegalCourierBedford: {
      title: 'Legal Courier Bedford, Buckinghamshire & Cambridgeshire.',
      summary: 'Our legal couriers are very familiar with the Bedfordshire and Buckinghamshire counties, as well as data-compliance regulations and guidelines.'
    },
    Contact: {
      title: 'Contact Legal Serve Bedford to arrange your next Serving or Delivery',
      summary: 'Contact Legal Serve to discuss your legal support needs or to better understand our delivery'
    },
    Clients: {
      title: 'Our Clients',
      summary: 'Ranging from Bedfordshire & Buckinghamshire to Cambridgeshire, our clients trust us to deliver'
    },
    ClientType: {
      'bedfordshire-clients': {
        title: 'Bedfordshire Clients',
        summary: 'Read about some of our Bedfordshire clients'
      },
      'buckinghamshire-clients': {
        title: 'Buckinghamshire Clients',
        summary: 'Read about some of our Milton Keynes & Buckinghamshire-based clients'
      },
      'cambridgeshire-clients': {
        title: 'Cambridgeshire Clients',
        summary: 'Read about some of our Cambridgeshire-based clients'
      },
      'clients-in-surrounding-areas': {
        title: 'Clients in Surrounding Areas',
        summary: 'Read about some of our clients in surrounding areas'
      },
      'local-authority-clients': {
        title: 'Local Authority Clients',
        summary: 'Read about some of our Local Authority clients'
      },
      'legal-practise-clients': {
        title: 'Legal Practise Clients',
        summary: 'Read about some of our Legal Practise clients'
      }
    }
  };
  const serviceList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return Object.keys(_config_services_config__WEBPACK_IMPORTED_MODULE_2__["ServiceInfoConfig"]).map(key => _config_services_config__WEBPACK_IMPORTED_MODULE_2__["ServiceInfoConfig"][key]);
  }, []);

  function renderHeroContent(item) {
    switch (item) {
      case 'Home':
        return __jsx("div", {
          className: "columns",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "column",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }
        }, __jsx("div", {
          className: "is-flex is-horizontal-center",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 15
          }
        }, __jsx("iframe", {
          title: "Process Serving Information Video",
          width: "650",
          height: "400",
          src: "https://www.youtube.com/embed/vHvd6HaPq_s",
          frameBorder: "0",
          allowFullScreen: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 17
          }
        }))), __jsx("div", {
          className: "column",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }
        }, __jsx(_service_list_service_list__WEBPACK_IMPORTED_MODULE_1__["default"], {
          serviceList: serviceList,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 15
          }
        })));

      case 'ClientType':
        return __jsx("p", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 11
          }
        }, HeroProps[props.item][props.clientType].summary);

      default:
        return __jsx("p", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 11
          }
        }, HeroProps[props.item].summary);
    }

    ;
  }

  const heroContent = renderHeroContent(props.item);
  return __jsx("section", {
    className: "hero is-dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hero-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container has-text-centered",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "title blog-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, props.item !== 'ClientType' ? HeroProps[props.item].title : HeroProps[props.item][props.clientType].title, __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  })), heroContent)));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/*! exports provided: Footer, NavBar, MetaInfo, NotFound, BackToTop, Hero, OurPromise, OurClients, MainContactForm, InlineContactPanel, SilverBanner, Card, SEO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer */ "./components/footer/footer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer_footer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar */ "./components/navbar/navbar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return _navbar_navbar__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _meta_info_meta_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meta-info/meta-info */ "./components/meta-info/meta-info.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetaInfo", function() { return _meta_info_meta_info__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _not_found_not_found__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found */ "./components/not-found/not-found.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFound", function() { return _not_found_not_found__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _back_to_top_back_to_top__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./back-to-top/back-to-top */ "./components/back-to-top/back-to-top.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackToTop", function() { return _back_to_top_back_to_top__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _hero_hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero/hero */ "./components/hero/hero.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _hero_hero__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _our_promise_banner_our_promise_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./our-promise-banner/our-promise-banner */ "./components/our-promise-banner/our-promise-banner.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OurPromise", function() { return _our_promise_banner_our_promise_banner__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _our_clients_our_clients__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./our-clients/our-clients */ "./components/our-clients/our-clients.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OurClients", function() { return _our_clients_our_clients__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _main_contact_form_main_contact_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-contact-form/main-contact-form */ "./components/main-contact-form/main-contact-form.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainContactForm", function() { return _main_contact_form_main_contact_form__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _inline_contact_panel_inline_contact_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inline-contact-panel/inline-contact-panel */ "./components/inline-contact-panel/inline-contact-panel.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineContactPanel", function() { return _inline_contact_panel_inline_contact_panel__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _silver_banner_silver_banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./silver-banner/silver-banner */ "./components/silver-banner/silver-banner.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SilverBanner", function() { return _silver_banner_silver_banner__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./card/card */ "./components/card/card.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _card_card__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _seo_seo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./seo/seo */ "./components/seo/seo.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SEO", function() { return _seo_seo__WEBPACK_IMPORTED_MODULE_12__["SEO"]; });
















/***/ }),

/***/ "./components/inline-contact-panel/inline-contact-panel.tsx":
/*!******************************************************************!*\
  !*** ./components/inline-contact-panel/inline-contact-panel.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_contact_form_main_contact_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-contact-form/main-contact-form */ "./components/main-contact-form/main-contact-form.tsx");
var _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\components\\inline-contact-panel\\inline-contact-panel.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const InlineContactPanel = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, __jsx("h3", {
  className: "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, "Contact Us Today"), __jsx("div", {
  className: "columns",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "column",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}, __jsx(_main_contact_form_main_contact_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
})), __jsx("div", {
  className: "column",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "card",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "card-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 11
  }
}, __jsx("h5", {
  className: "small-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }
}, __jsx("strong", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 41
  }
}, "Or alternatively, you can contact us directly using any of the below methods:")), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 13
  }
}), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 13
  }
}, __jsx("strong", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 16
  }
}, "Phone"), ": (01234) 92 48 47"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 13
  }
}), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 13
  }
}, __jsx("strong", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 16
  }
}, "Mobile"), ": 07853 166 674"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 13
  }
}), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 13
  }
}, __jsx("strong", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 16
  }
}, "Email"), ": info@legalservebedford.co.uk"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 13
  }
}))))));

/* harmony default export */ __webpack_exports__["default"] = (InlineContactPanel);

/***/ }),

/***/ "./components/main-contact-form/main-contact-form.tsx":
/*!************************************************************!*\
  !*** ./components/main-contact-form/main-contact-form.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\components\\main-contact-form\\main-contact-form.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i); // const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i);

const validPhoneRegex = RegExp(/^[0-9 ]{11,}$/i);
const contactFormValidationSchema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]({
  Name: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(5).required('Please provide your Full Name.'),
  Company: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(2),
  Email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email().matches(validEmailRegex, 'Please enter a valid E-mail Address').required('Please provide your E-mail Address.'),
  Phone: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().matches(validPhoneRegex, 'Please enter a valid Phone Number'),
  Message: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required('Please fill in a Message.')
});

const getSubmitCallback = () => values => {
  axios__WEBPACK_IMPORTED_MODULE_3___default()({
    method: 'POST',
    url: 'http://legalservebedford.co.uk/contact-process.php?action=processContact',
    data: JSON.stringify(values)
  }).then(response => {
    console.log(response.data);

    if (response.data.status === '\"Success\"') {
      alert("Message Sent.");
    } else {
      console.log(response);
      alert("Message failed to send.");
    }
  });
};

const MainContactForm = () => {
  const FormikError = error => __jsx("p", {
    className: "help is-danger",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, error.children);

  const contactFormInitialValues = {
    Name: '',
    Company: '',
    Email: '',
    Phone: '',
    Message: ''
  };
  const onSubmit = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(getSubmitCallback(), []);
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: contactFormInitialValues,
    validationSchema: contactFormValidationSchema,
    onSubmit: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, ({
    handleSubmit,
    values,
    errors,
    touched
  }) => __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    id: "contact-form",
    onSubmit: handleSubmit,
    method: "GET",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "control has-icons-left has-icons-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    className: `input ${touched.Name && errors.Name ? 'is-danger' : ''} ${touched.Name && !errors.Name ? 'is-success' : ''}`,
    placeholder: "Your Name",
    name: "Name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "icon is-small is-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: "user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }))), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    component: FormikError,
    name: "Name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "control has-icons-left has-icons-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    className: `input ${touched.Company && errors.Company ? 'is-danger' : ''} ${touched.Company && !errors.Company ? 'is-success' : ''}`,
    placeholder: "Company / Organisation",
    name: "Company",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "icon is-small is-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: "at",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }))), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    component: FormikError,
    name: "Company",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "control has-icons-left has-icons-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "email",
    className: `input ${touched.Email && errors.Email ? 'is-danger' : ''} ${touched.Email && !errors.Email ? 'is-success' : ''}`,
    placeholder: "E-mail Address",
    "aria-describedby": "emailHelp",
    name: "Email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "icon is-small is-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: "at",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }))), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    component: FormikError,
    name: "Email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "control has-icons-left has-icons-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "Phone",
    className: `input ${touched.Phone && errors.Phone ? 'is-danger' : ''} ${touched.Phone && !errors.Phone ? 'is-success' : ''}`,
    placeholder: "Phone Number",
    "aria-describedby": "phoneHelp",
    name: "Phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "icon is-small is-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: "phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }))), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    component: FormikError,
    name: "Phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "control has-icons-left has-icons-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    component: "textarea",
    className: `textarea ${touched.Message && errors.Message ? 'is-danger' : ''} ${touched.Message && !errors.Message ? 'is-success' : ''}`,
    placeholder: "Your Message",
    name: "Message",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  })), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    component: FormikError,
    name: "Message",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "field buttons is-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "control",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, __jsx("button", {
    type: "submit",
    className: "button is-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, "Submit")))));
};

/* harmony default export */ __webpack_exports__["default"] = (MainContactForm);

/***/ }),

/***/ "./components/meta-info/meta-info.tsx":
/*!********************************************!*\
  !*** ./components/meta-info/meta-info.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\components\\meta-info\\meta-info.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MetaInfo = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  title,
  description
}) => __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, title), __jsx("meta", {
  name: "og:title",
  content: title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "description",
  content: description,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "og:description",
  content: description,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
})));
MetaInfo.displayName = 'MetaInfo';
/* harmony default export */ __webpack_exports__["default"] = (MetaInfo);

/***/ }),

/***/ "./components/navbar/navbar-link/navbar-link.style.tsx":
/*!*************************************************************!*\
  !*** ./components/navbar/navbar-link/navbar-link.style.tsx ***!
  \*************************************************************/
/*! exports provided: StyledLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "navbar-linkstyle__StyledLink",
  componentId: "sc-1jzd7hs-0"
})(["user-select:none;color:white;letter-spacing:0.01em;background-color:transparent;border-top:2px solid transparent;border-bottom:2px solid transparent;transition:color 0.2s ease-out,border-bottom-color 0.2s ease-out;display:flex;overflow-x:auto;overflow-y:hidden;align-items:center;height:100%;padding:0.5rem 0.75rem;position:relative;flex-grow:0;flex-shrink:0;:hover{cursor:pointer;color:#61dafb;background-color:transparent;}"]);


/***/ }),

/***/ "./components/navbar/navbar-link/navbar-link.tsx":
/*!*******************************************************!*\
  !*** ./components/navbar/navbar-link/navbar-link.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar_link_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar-link.style */ "./components/navbar/navbar-link/navbar-link.style.tsx");
var _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\components\\navbar\\navbar-link\\navbar-link.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const NavBarLink = ({
  path,
  displayName,
  footerBar,
  lastLink,
  isHiddenMobile
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: path,
  passHref: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}, __jsx(_navbar_link_style__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], {
  className: `${isHiddenMobile ? 'is-hidden-mobile' : ''}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }
}, displayName)), (() => {
  if (!footerBar && !lastLink) {
    return __jsx("div", {
      className: "seperator",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    });
  }
})());

/* harmony default export */ __webpack_exports__["default"] = (NavBarLink);

/***/ }),

/***/ "./components/navbar/navbar.style.tsx":
/*!********************************************!*\
  !*** ./components/navbar/navbar.style.tsx ***!
  \********************************************/
/*! exports provided: BurgerMenu, BurgerMenuIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurgerMenu", function() { return BurgerMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurgerMenuIcon", function() { return BurgerMenuIcon; });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const BurgerMenu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.attrs(() => ({
  role: 'button',
  'aria-label': 'Menu'
})).withConfig({
  displayName: "navbarstyle__BurgerMenu",
  componentId: "sc-1iywcax-0"
})(["border:none;background:none;width:3.5rem;height:3.5rem;margin-left:-1rem;cursor:pointer;user-select:none;border-radius:50%;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;transition:opacity 0.4s ease,bottom 0.4s ease;"]);
const BurgerMenuIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeIcon"]).withConfig({
  displayName: "navbarstyle__BurgerMenuIcon",
  componentId: "sc-1iywcax-1"
})(["color:#fff;font-size:1.75em;"]);


/***/ }),

/***/ "./components/navbar/navbar.tsx":
/*!**************************************!*\
  !*** ./components/navbar/navbar.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_routes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/routes.config */ "./config/routes.config.ts");
/* harmony import */ var _navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar-link/navbar-link */ "./components/navbar/navbar-link/navbar-link.tsx");
/* harmony import */ var _navbar_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.style */ "./components/navbar/navbar.style.tsx");
var _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\components\\navbar\\navbar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const MainLogo = '/img/logo-NEW.svg';

const NavBar = ({
  footerBar
}) => __jsx("nav", {
  role: "navigation",
  className: "navbar",
  "aria-label": "main navigation",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "navbar-wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "brand-wrapper level",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }
}, __jsx("img", {
  width: "170",
  src: MainLogo,
  alt: "Legal Serve - Process Server in Bedfordshire & Buckinghamshire",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }
}), __jsx("span", {
  className: "level-right",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }
}, "07853 166 674")), __jsx("div", {
  className: "navbar-routes",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }
}, __jsx(_navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, _config_routes_config__WEBPACK_IMPORTED_MODULE_1__["RoutesConfig"].Home, {
  footerBar: footerBar,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }
})), __jsx(_navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, _config_routes_config__WEBPACK_IMPORTED_MODULE_1__["RoutesConfig"].Services, {
  footerBar: footerBar,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }
})), __jsx(_navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, _config_routes_config__WEBPACK_IMPORTED_MODULE_1__["RoutesConfig"].Contact, {
  footerBar: footerBar,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }
})), (() => {
  if (!footerBar) {
    return __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["BurgerMenu"], {
      className: "is-hidden-tablet",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_3__["BurgerMenuIcon"], {
      className: "is-visible-mobile",
      icon: "bars",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    }));
  }
})(), __jsx(_navbar_link_navbar_link__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, _config_routes_config__WEBPACK_IMPORTED_MODULE_1__["RoutesConfig"].Clients, {
  footerBar: footerBar,
  lastLink: true,
  isHiddenMobile: !footerBar && true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }
})))));

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/not-found/not-found.tsx":
/*!********************************************!*\
  !*** ./components/not-found/not-found.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\components\\not-found\\not-found.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NotFound = () => {
  const isLocation404 = window && window.location.pathname === '/404';
  const className = `notification tile is-child is-danger ${isLocation404 ? 'rubberBand-animation' : 'hide'}`;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    if (window.location.pathname !== '/404') {
      window.location.href = '/404';
    }
  }, []);
  return __jsx("section", {
    className: "container view-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "tile is-parent is-8 is-vertical is-notification-tile is-not-found-tile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "exclamation-circle",
    size: "2x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "404 Not Found")), __jsx("p", {
    className: "subtitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "The requested page could not be found."))));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./components/our-clients/our-clients.style.tsx":
/*!******************************************************!*\
  !*** ./components/our-clients/our-clients.style.tsx ***!
  \******************************************************/
/*! exports provided: StyledColumn, NextSlideLink, AngleRightIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledColumn", function() { return StyledColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextSlideLink", function() { return NextSlideLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngleRightIcon", function() { return AngleRightIcon; });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_device_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/device.config */ "./config/device.config.ts");


 // types

const StyledColumn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "our-clientsstyle__StyledColumn",
  componentId: "sc-1ngcxfj-0"
})(["padding:0 2em;"]);
const NextSlideLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.attrs(() => ({
  role: 'button',
  'aria-label': 'Next'
})).withConfig({
  displayName: "our-clientsstyle__NextSlideLink",
  componentId: "sc-1ngcxfj-1"
})(["width:3.5rem;display:block;height:3.5rem;right:1.25rem;cursor:pointer;position:absolute;user-select:none;border-radius:50%;-webkit-touch-callout:none;background:rgb(37,40,47);-webkit-tap-highlight-color:transparent;border:1px solid rgba(255,255,255,0.1);box-shadow:rgba(0,0,0,0.3) 0px 0px 20px;transition:opacity 0.4s ease,bottom 0.4s ease;top:", ";opacity:0.5;@media ", "{top:", ";}"], props => props.minimal ? '10%' : '18%', _config_device_config__WEBPACK_IMPORTED_MODULE_2__["default"].tablet, props => props.minimal ? '28%' : '52%');
const AngleRightIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeIcon"]).withConfig({
  displayName: "our-clientsstyle__AngleRightIcon",
  componentId: "sc-1ngcxfj-2"
})(["display:block;color:#fff;font-size:1.75em;padding-left:0.1rem;margin:0.75rem auto auto auto;"]);


/***/ }),

/***/ "./components/our-clients/our-clients.tsx":
/*!************************************************!*\
  !*** ./components/our-clients/our-clients.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_clients_banner_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/clients-banner.config */ "./config/clients-banner.config.ts");
/* harmony import */ var _our_clients_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./our-clients.style */ "./components/our-clients/our-clients.style.tsx");
var _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\components\\our-clients\\our-clients.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const OurServicesImg = '/img/court-order-serving-bedford.png'; // types

const clientsSlidesContent = (props, showLocalAuth, showLawPractises) => {
  const clientType = props.clientType;
  let html = [];

  const clientsLogosContent = panel => {
    let clientsLogosHtml = [];
    Object.keys(_config_clients_banner_config__WEBPACK_IMPORTED_MODULE_2__["ClientsLogos"]).forEach((val, index) => {
      const ClientLogo = _config_clients_banner_config__WEBPACK_IMPORTED_MODULE_2__["ClientsLogos"][val];

      if ((panel.clientType && ClientLogo.type === panel.clientType || panel.region && ClientLogo.region.includes(panel.region)) && (clientType === 'default' && ClientLogo.default || clientType !== 'default') && clientsLogosHtml.length < 5) {
        clientsLogosHtml.push(__jsx(_our_clients_style__WEBPACK_IMPORTED_MODULE_3__["StyledColumn"], {
          key: ClientLogo.imageUrl,
          className: "column has-text-centered",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 11
          }
        }, __jsx("img", {
          src: `/img/client-logos/${ClientLogo.imageUrl}`,
          alt: ClientLogo.altTag,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }
        })));
      }
    });
    return clientsLogosHtml;
  };

  _config_clients_banner_config__WEBPACK_IMPORTED_MODULE_2__["ClientsBannerConfig"][clientType].panels.forEach((panel, index) => {
    html.push(__jsx("div", {
      key: panel.clientType || panel.region,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'fadeIn-animation': _config_clients_banner_config__WEBPACK_IMPORTED_MODULE_2__["ClientsBannerConfig"][clientType].panels.length > 1,
        'show': _config_clients_banner_config__WEBPACK_IMPORTED_MODULE_2__["ClientsBannerConfig"][clientType].panels.length > 1 && index === 0 ? showLocalAuth.current === 'show' : showLawPractises.current === 'show',
        'hide': _config_clients_banner_config__WEBPACK_IMPORTED_MODULE_2__["ClientsBannerConfig"][clientType].panels.length > 1 && index === 1 ? showLawPractises.current === 'hide' : showLocalAuth.current === 'hide'
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }
    }, (() => {
      if (props.minimal !== true) {
        return __jsx("h4", {
          className: "title small-title",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 11
          }
        }, panel.clientType === 'local-authority' ? 'Local Authorities' : 'Law Practises & Solicitors');
      }
    })(), __jsx("div", {
      className: "columns is-tablet",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    }, clientsLogosContent(panel))));
  });
  return html;
};

const OurClients = props => {
  const showLocalAuth = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])('show');
  const showLawPractises = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])('hide');
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const nextSlide = () => {
    if (showLocalAuth.current === 'show') {
      showLocalAuth.current = 'hide';
      showLawPractises.current = 'show';
    } else if (showLocalAuth.current === 'hide') {
      showLocalAuth.current = 'show';
      showLawPractises.current = 'hide';
    }

    setShow(!show);
  };

  return __jsx("div", {
    className: "columns",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "column",
    style: {
      position: 'relative'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, props.minimal ? '' : __jsx("h3", {
    className: "title large-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 31
    }
  }, "Our Clients"), __jsx("div", {
    className: "content clients-slides",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, clientsSlidesContent(props, showLocalAuth, showLawPractises)), (() => {
    if (_config_clients_banner_config__WEBPACK_IMPORTED_MODULE_2__["ClientsBannerConfig"][props.clientType].panels.length > 1) {
      return __jsx(_our_clients_style__WEBPACK_IMPORTED_MODULE_3__["NextSlideLink"], {
        minimal: props.minimal,
        onClick: () => nextSlide(),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 15
        }
      }, __jsx(_our_clients_style__WEBPACK_IMPORTED_MODULE_3__["AngleRightIcon"], {
        icon: "angle-right",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 17
        }
      }));
    }
  })()));
};

OurClients.defaultProps = {
  minimal: false,
  clientType: 'default'
};
/* harmony default export */ __webpack_exports__["default"] = (OurClients);

/***/ }),

/***/ "./components/our-promise-banner/our-promise-banner.style.tsx":
/*!********************************************************************!*\
  !*** ./components/our-promise-banner/our-promise-banner.style.tsx ***!
  \********************************************************************/
/*! exports provided: StyledPromiseTickIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledPromiseTickIcon", function() { return StyledPromiseTickIcon; });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const StyledPromiseTickIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeIcon"]).withConfig({
  displayName: "our-promise-bannerstyle__StyledPromiseTickIcon",
  componentId: "sc-1c0iim0-0"
})(["color:#3273dc;margin-right:10px;"]);


/***/ }),

/***/ "./components/our-promise-banner/our-promise-banner.tsx":
/*!**************************************************************!*\
  !*** ./components/our-promise-banner/our-promise-banner.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _our_promise_banner_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./our-promise-banner.style */ "./components/our-promise-banner/our-promise-banner.style.tsx");
var _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\components\\our-promise-banner\\our-promise-banner.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const OurPromise = () => __jsx("div", {
  className: "columns",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "column",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "card our-promise",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "card-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}, __jsx("h2", {
  className: "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 11
  }
}, "Our Promise to Our Clients"), __jsx("div", {
  className: "content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "columns",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "column",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 15
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 17
  }
}, __jsx(_our_promise_banner_style__WEBPACK_IMPORTED_MODULE_1__["StyledPromiseTickIcon"], {
  icon: "check",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 20
  }
}), "To serve your documents promptly and in accordance with all CPR rules.")), __jsx("div", {
  className: "column",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 15
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 17
  }
}, __jsx(_our_promise_banner_style__WEBPACK_IMPORTED_MODULE_1__["StyledPromiseTickIcon"], {
  icon: "check",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 20
  }
}), "To serve the papers in according with your special instructions."))), __jsx("div", {
  className: "columns",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "column",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 15
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 17
  }
}, __jsx(_our_promise_banner_style__WEBPACK_IMPORTED_MODULE_1__["StyledPromiseTickIcon"], {
  icon: "check",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 20
  }
}), "To ensure all Data Protection and Human Rights legislation is adhered to.")), __jsx("div", {
  className: "column",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 15
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 17
  }
}, __jsx(_our_promise_banner_style__WEBPACK_IMPORTED_MODULE_1__["StyledPromiseTickIcon"], {
  icon: "check",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 20
  }
}), "To keep you updated and advise you when service has been completed."))), __jsx("div", {
  className: "columns",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "column",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 15
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 17
  }
}, __jsx(_our_promise_banner_style__WEBPACK_IMPORTED_MODULE_1__["StyledPromiseTickIcon"], {
  icon: "check",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 20
  }
}), "To monitor all cases we are dealing with and ensure they are returned to you on time.")), __jsx("div", {
  className: "column",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 15
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 17
  }
}, __jsx(_our_promise_banner_style__WEBPACK_IMPORTED_MODULE_1__["StyledPromiseTickIcon"], {
  icon: "check",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 20
  }
}), "To ensure that all statements or affadavits are completed correctly."))))))));

/* harmony default export */ __webpack_exports__["default"] = (OurPromise);

/***/ }),

/***/ "./components/seo/seo.tsx":
/*!********************************!*\
  !*** ./components/seo/seo.tsx ***!
  \********************************/
/*! exports provided: SEO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEO", function() { return SEO; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\components\\seo\\seo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SEO = ({
  title,
  description,
  canonical,
  css,
  js,
  image
}) => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}, title), __jsx("meta", {
  name: "description",
  content: description,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width,minimum-scale=1,initial-scale=1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:type",
  content: "website",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "og:title",
  property: "og:title",
  content: title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "og:description",
  property: "og:description",
  content: description,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:site_name",
  content: "Proper Noun",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:url",
  content: `${canonical}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:title",
  content: title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:description",
  content: description,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:site",
  content: "@propernounco",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:creator",
  content: "@propernounco",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }
}), css && __jsx("link", {
  rel: "stylesheet",
  href: `${css}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 13
  }
}), image ? __jsx("meta", {
  property: "og:image",
  content: `${image}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 7
  }
}) : __jsx("meta", {
  property: "og:image",
  content: "https://www.propernoun.co/static/images/proper-noun-social.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 7
  }
}), image && __jsx("meta", {
  name: "twitter:image",
  content: `${image}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 15
  }
}), canonical && __jsx("link", {
  rel: "canonical",
  href: `${canonical}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 19
  }
}), js && __jsx("script", {
  type: "text/javascript",
  src: `${js}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 12
  }
}));

/***/ }),

/***/ "./components/service-list/service-list.tsx":
/*!**************************************************!*\
  !*** ./components/service-list/service-list.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\components\\service-list\\service-list.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ServiceList = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  serviceList
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }
}, serviceList.map(({
  description
}, index) => __jsx("h2", {
  key: index,
  className: "subtitle",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
  icon: "check",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 11
  }
}), ` ${description} `))));
ServiceList.displayName = 'ServiceList';
/* harmony default export */ __webpack_exports__["default"] = (ServiceList);

/***/ }),

/***/ "./components/silver-banner/silver-banner.style.tsx":
/*!**********************************************************!*\
  !*** ./components/silver-banner/silver-banner.style.tsx ***!
  \**********************************************************/
/*! exports provided: SilverBannerOuter, SilverBannerInner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SilverBannerOuter", function() { return SilverBannerOuter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SilverBannerInner", function() { return SilverBannerInner; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_device_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/device.config */ "./config/device.config.ts");


const SilverBannerOuter = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "silver-bannerstyle__SilverBannerOuter",
  componentId: "sc-1k91ury-0"
})(["background:#F9F9F9;border-bottom:1px solid #f3f3f3;padding:25px 0 0;"]);
const SilverBannerInner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "silver-bannerstyle__SilverBannerInner",
  componentId: "sc-1k91ury-1"
})(["margin:0 auto;@media ", "{max-width:960px;}@media ", "{max-width:1152px;}@media ", "{max-width:1344px;}"], _config_device_config__WEBPACK_IMPORTED_MODULE_1__["default"].laptop, _config_device_config__WEBPACK_IMPORTED_MODULE_1__["default"].laptopL, _config_device_config__WEBPACK_IMPORTED_MODULE_1__["default"].laptopXL);


/***/ }),

/***/ "./components/silver-banner/silver-banner.tsx":
/*!****************************************************!*\
  !*** ./components/silver-banner/silver-banner.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _silver_banner_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./silver-banner.style */ "./components/silver-banner/silver-banner.style.tsx");
var _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\components\\silver-banner\\silver-banner.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SilverBanner = props => {
  return __jsx(_silver_banner_style__WEBPACK_IMPORTED_MODULE_1__["SilverBannerOuter"], {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_silver_banner_style__WEBPACK_IMPORTED_MODULE_1__["SilverBannerInner"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (SilverBanner);

/***/ }),

/***/ "./config/clients-banner.config.ts":
/*!*****************************************!*\
  !*** ./config/clients-banner.config.ts ***!
  \*****************************************/
/*! exports provided: ClientsLogos, ClientsBannerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsLogos", function() { return ClientsLogos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsBannerConfig", function() { return ClientsBannerConfig; });
const ClientsLogos = Object.freeze({
  bedfordCouncil: {
    imageUrl: 'bedford-borough-council-client-logo.png',
    altTag: 'Bedford Borough Council Logo',
    region: ['bedfordshire'],
    type: 'local-authority',
    default: true
  },
  boltonCouncil: {
    imageUrl: 'bolton-council-client-logo.png',
    altTag: 'Bolton Council Logo',
    region: ['surrounding'],
    type: 'local-authority',
    default: true
  },
  powysCouncil: {
    imageUrl: 'powys-county-council-wales-client-logo.png',
    altTag: 'Powys County Council (in Wales) Logo',
    region: ['surrounding'],
    type: 'local-authority',
    default: true
  },
  miltonKeynesCouncil: {
    imageUrl: 'milton-keynes-council-client-logo.png',
    altTag: 'Milton Keynes Council',
    region: ['buckinghamshire'],
    type: 'local-authority',
    default: true
  },
  cambridgeLawPractise: {
    imageUrl: 'cambridge-family-law-practise-client-logo.png',
    altTag: 'Cambridge Family Law Practise Logo',
    region: ['cambridgeshire'],
    type: 'legal-practise',
    default: true
  },
  fullers: {
    imageUrl: 'fullers-solicitors-bedford-client-logo.png',
    altTag: 'Fullers Solicitors (in Bedford) Logo',
    region: ['bedfordshire'],
    type: 'legal-practise',
    default: true
  },
  kennedys: {
    imageUrl: 'Kennedys-law-solicitors-cambridge-and-london-client-logo.png',
    altTag: 'Kennedys Law (servicing Cambridge &amp; London) Logo',
    region: ['cambridgeshire', 'surrounding'],
    type: 'legal-practise',
    default: true
  },
  watsons: {
    imageUrl: 'watsons-solicitors-warrington-client-logo.png',
    altTag: 'Watsons Solicitors (in Warrington) Logo',
    region: ['cambridgeshire'],
    type: 'legal-practise',
    default: true
  },
  rayBorley: {
    imageUrl: 'ray-borley-dunkley-llp-milton-keynes-client-logo.png',
    altTag: 'Ray Borley Dunkley LLP Client (Milton Keynes) Logo',
    region: ['buckinghamshire'],
    type: 'legal-practise'
  },
  davidsonSmith: {
    imageUrl: 'davidson-smith-client-logo.png',
    altTag: 'Davidson Smith & Co Client (Milton Keynes) Logo',
    region: ['bedfordshire'],
    type: 'legal-practise'
  }
});
const ClientsBannerConfig = Object.freeze({
  'default': {
    panels: [{
      clientType: 'local-authority'
    }, {
      clientType: 'legal-practise'
    }]
  },
  'bedfordshire-clients': {
    panels: [{
      region: 'bedfordshire'
    }]
  },
  'buckinghamshire-clients': {
    panels: [{
      region: 'buckinghamshire'
    }]
  },
  'cambridgeshire-clients': {
    panels: [{
      region: 'cambridgeshire'
    }]
  },
  'clients-in-surrounding-areas': {
    panels: [{
      region: 'surrounding'
    }]
  },
  'local-authority-clients': {
    panels: [{
      clientType: 'local-authority'
    }]
  },
  'legal-practise-clients': {
    panels: [{
      clientType: 'legal-practise'
    }]
  }
});

/***/ }),

/***/ "./config/device.config.ts":
/*!*********************************!*\
  !*** ./config/device.config.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1216px',
  laptopXL: '1408px',
  desktop: '2560px'
};
const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  laptopXL: `(min-width: ${size.laptopXL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
/* harmony default export */ __webpack_exports__["default"] = (device);

/***/ }),

/***/ "./config/fa.config.ts":
/*!*****************************!*\
  !*** ./config/fa.config.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__);



_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheck"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPhone"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMobile"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAddressBook"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBars"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUser"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faReact"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMediumM"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTwitter"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInfoCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleDoubleUp"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleRight"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faExternalLinkAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faExclamationCircle"]);

/***/ }),

/***/ "./config/routes.config.ts":
/*!*********************************!*\
  !*** ./config/routes.config.ts ***!
  \*********************************/
/*! exports provided: RoutesConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesConfig", function() { return RoutesConfig; });
const RoutesConfig = Object.freeze({
  Home: {
    path: '/',
    exact: true,
    displayName: 'Home',
    activeClassName: 'is-active',
    icon: 'home',
    metaInfo: {
      title: 'Process Server Bedford &amp; London | Legal Serve',
      description: 'Bedfordshire, Buckinghamshire &amp; London-based process server, legal courier &amp; legal document server.'
    }
  },
  Services: {
    path: '/our-services',
    exact: true,
    displayName: 'Services',
    activeClassName: 'is-active',
    icon: 'info',
    metaInfo: {
      title: 'Our Services | Process Serving, Legal Courier Services',
      description: 'Process Serving &amp; Legal Courier Services in London, Bedfordshire &amp; Buckinghamshire'
    }
  },
  ProcessServerBedford: {
    path: '/our-services/process-server-bedford',
    exact: true,
    displayName: 'Process Server Bedford',
    activeClassName: 'is-active',
    icon: 'info',
    metaInfo: {
      title: 'Our Services | Process Serving, Legal Courier Services',
      description: 'Process Serving &amp; Legal Courier Services in London, Bedfordshire &amp; Buckinghamshire'
    }
  },
  LegalCourierBedford: {
    path: '/our-services/legal-courier-bedford',
    exact: true,
    displayName: 'Legal Courier Bedford',
    activeClassName: 'is-active',
    icon: 'info',
    metaInfo: {
      title: 'Our Services | Process Serving, Legal Courier Services',
      description: 'Process Serving &amp; Legal Courier Services in London, Bedfordshire &amp; Buckinghamshire'
    }
  },
  Contact: {
    path: '/contact-legal-serve',
    exact: true,
    displayName: 'Contact',
    activeClassName: 'is-active',
    icon: 'info',
    metaInfo: {
      title: 'Process Serving Enquiries | Contact Legal Serve Bedford',
      description: 'Enquire about your next Process Server.'
    }
  },
  Clients: {
    path: '/our-clients',
    exact: true,
    displayName: 'Our Clients',
    activeClassName: 'is-active',
    icon: 'info',
    metaInfo: {
      title: 'Our Clients across Bedfordshire, Buckinghamshire & Cambridgeshire | Process Serving, Legal Courier Services',
      description: 'See our clients, Local Authorities and Legal Practises ranging across Bedfordshire, Buckinghamshire, Cambridgeshire & London'
    }
  },
  ClientType: {
    path: '/our-clients/:clientType',
    exact: true,
    displayName: 'Our Clients',
    activeClassName: 'is-active',
    icon: 'info',
    metaInfo: {
      title: 'Our Clients across Bedfordshire, Buckinghamshire & Cambridgeshire | Process Serving, Legal Courier Services',
      description: 'See our clients, Local Authorities and Legal Practises ranging across Bedfordshire, Buckinghamshire, Cambridgeshire & London'
    }
  }
});

/***/ }),

/***/ "./config/services.config.ts":
/*!***********************************!*\
  !*** ./config/services.config.ts ***!
  \***********************************/
/*! exports provided: ServiceInfoConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInfoConfig", function() { return ServiceInfoConfig; });
const ServiceInfoConfig = Object.freeze({
  processServing: {
    description: 'Professionaly handled and timely Process Serving'
  },
  legalCourier: {
    description: 'Legal courier services that are flexible & accommodating'
  },
  privacy: {
    description: 'Guaranteed privacy and confidentiality'
  }
});

/***/ }),

/***/ "./layouts/app-layout.tsx":
/*!********************************!*\
  !*** ./layouts/app-layout.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./components/index.ts");
var _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\layouts\\app-layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = ({
  children // deviceType: { mobile, tablet, desktop },

}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["NavBar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), children, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["BackToTop"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Footer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
/**
* Detects whether a given url is from the same origin as the current page (browser only).
*/


function isLocal(url) {
  const locationOrigin = (0, _utils.getLocationOrigin)();
  const resolved = new URL(url, locationOrigin);
  return resolved.origin === locationOrigin;
}

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName,
    target
  } = e.currentTarget;

  if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
    // ignore click for new tab / new window behavior
    return;
  }

  if (!isLocal(href)) {
    // ignore click if it's outside our scope (e.g. https://google.com)
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router2.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router2.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router2.addBasePath)(as);
  } // Add the ending slash to the paths. So, we can serve the
  // "<page>/index.html" directly.


  if (false) {}

  return _react.default.cloneElement(child, childProps);
}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _searchParamsToUrlQuery = __webpack_require__(/*! ./utils/search-params-to-url-query */ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addBasePath(path) {
  return basePath ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  const finalUrl = new URL(urlAsString, base);
  finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

  return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (true) {
      throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
    }

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      const {
        url,
        as,
        options,
        __N
      } = e.state;

      if (!__N) {
        // this history state wasn't created by next.js so it can be ignored
        return;
      }

      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly for the SSR page.


    if (false) {}

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = delBasePath(as);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _searchParamsToUrlQuery.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var _querystring = __webpack_require__(/*! querystring */ "querystring"); // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    // query = '' + new URLSearchParams(query);
    query = (0, _querystring.encode)(query);
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
const DUMMY_BASE = new URL('http://n');
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected.
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./theme/index.ts");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/app-layout */ "./layouts/app-layout.tsx");
/* harmony import */ var _assets_style_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/style/main.scss */ "./assets/style/main.scss");
/* harmony import */ var _assets_style_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_style_main_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_fa_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/fa.config */ "./config/fa.config.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_driftjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-driftjs */ "react-driftjs");
/* harmony import */ var react_driftjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_driftjs__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\pages\\_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_3___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    })), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
      theme: _theme__WEBPACK_IMPORTED_MODULE_2__["theme"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, __jsx(react_driftjs__WEBPACK_IMPORTED_MODULE_8___default.a, {
      appId: "gibbpt6fi6r5",
      style: {
        bottom: '8px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }), __jsx(_layouts_app_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./theme/colors.ts":
/*!*************************!*\
  !*** ./theme/colors.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const colors = {
  colorHeroIsDark: '#282c34',
  colorNavBar: '#20232a',
  colorBlueHighlight: '#61dafb'
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "./theme/index.ts":
/*!************************!*\
  !*** ./theme/index.ts ***!
  \************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./theme/colors.ts");

const theme = {
  colors: _colors__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-driftjs":
/*!********************************!*\
  !*** external "react-driftjs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-driftjs");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JhY2stdG8tdG9wL2JhY2stdG8tdG9wLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JhY2stdG8tdG9wL2JhY2stdG8tdG9wLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmQvY2FyZC5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkL2NhcmQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZXJvL2hlcm8udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmxpbmUtY29udGFjdC1wYW5lbC9pbmxpbmUtY29udGFjdC1wYW5lbC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYWluLWNvbnRhY3QtZm9ybS9tYWluLWNvbnRhY3QtZm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZXRhLWluZm8vbWV0YS1pbmZvLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXItbGluay9uYXZiYXItbGluay5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLWxpbmsvbmF2YmFyLWxpbmsudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3VyLWNsaWVudHMvb3VyLWNsaWVudHMuc3R5bGUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3VyLWNsaWVudHMvb3VyLWNsaWVudHMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3VyLXByb21pc2UtYmFubmVyL291ci1wcm9taXNlLWJhbm5lci5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vdXItcHJvbWlzZS1iYW5uZXIvb3VyLXByb21pc2UtYmFubmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Nlby9zZW8udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VydmljZS1saXN0L3NlcnZpY2UtbGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWx2ZXItYmFubmVyL3NpbHZlci1iYW5uZXIuc3R5bGUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2lsdmVyLWJhbm5lci9zaWx2ZXItYmFubmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb25maWcvY2xpZW50cy1iYW5uZXIuY29uZmlnLnRzIiwid2VicGFjazovLy8uL2NvbmZpZy9kZXZpY2UuY29uZmlnLnRzIiwid2VicGFjazovLy8uL2NvbmZpZy9mYS5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL3JvdXRlcy5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL3NlcnZpY2VzLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9sYXlvdXRzL2FwcC1sYXlvdXQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9zZWFyY2gtcGFyYW1zLXRvLXVybC1xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3RoZW1lL2NvbG9ycy50cyIsIndlYnBhY2s6Ly8vLi90aGVtZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZHJpZnRqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ5dXBcIiJdLCJuYW1lcyI6WyJCYWNrVG9Ub3BMaW5rIiwic3R5bGVkIiwiYSIsImF0dHJzIiwicm9sZSIsInByb3BzIiwic2hvdyIsIkFuZ2xlRG91YmxlVXBJY29uIiwiRm9udEF3ZXNvbWVJY29uIiwic2Nyb2xsIiwiU2Nyb2xsIiwiYW5pbWF0ZVNjcm9sbCIsInNjcm9sbE9wdGlvbnMiLCJkZWxheSIsImR1cmF0aW9uIiwic21vb3RoIiwiQmFja1RvVG9wIiwic2hvd1JlZiIsInVzZVJlZiIsInNldFNob3ciLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbFRvVG9wIiwiU3R5bGVkQ2FyZCIsImRpdiIsImRhcmsiLCJob3Jpem9udGFsIiwiY2xhc3NOYW1lIiwidGhlbWUiLCJjb2xvcnMiLCJjb2xvckhlcm9Jc0RhcmsiLCJTdHlsZWRDYXJkSW1hZ2UiLCJTdHlsZWRDYXJkQ29udGVudCIsIkNhcmQiLCJpbWFnZSIsInNyYyIsImFsdCIsInRpdGxlIiwic2l6ZSIsImNvbnRlbnQiLCJjaGlsZHJlbiIsIkNhcmRJbWFnZSIsIkNhcmRDb250ZW50IiwiQ2FyZFRpdGxlIiwiZGVmYXVsdFByb3BzIiwiTWFpbkxvZ28iLCJGb290ZXIiLCJIZXJvIiwiSGVyb1Byb3BzIiwiSG9tZSIsIlNlcnZpY2VzIiwic3VtbWFyeSIsIlByb2Nlc3NTZXJ2ZXJCZWRmb3JkIiwiTGVnYWxDb3VyaWVyQmVkZm9yZCIsIkNvbnRhY3QiLCJDbGllbnRzIiwiQ2xpZW50VHlwZSIsInNlcnZpY2VMaXN0IiwidXNlTWVtbyIsIk9iamVjdCIsImtleXMiLCJTZXJ2aWNlSW5mb0NvbmZpZyIsIm1hcCIsImtleSIsInJlbmRlckhlcm9Db250ZW50IiwiaXRlbSIsImNsaWVudFR5cGUiLCJoZXJvQ29udGVudCIsIklubGluZUNvbnRhY3RQYW5lbCIsInZhbGlkRW1haWxSZWdleCIsIlJlZ0V4cCIsInZhbGlkUGhvbmVSZWdleCIsImNvbnRhY3RGb3JtVmFsaWRhdGlvblNjaGVtYSIsIll1cCIsIk5hbWUiLCJtaW4iLCJyZXF1aXJlZCIsIkNvbXBhbnkiLCJFbWFpbCIsImVtYWlsIiwibWF0Y2hlcyIsIlBob25lIiwiTWVzc2FnZSIsImdldFN1Ym1pdENhbGxiYWNrIiwidmFsdWVzIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJhbGVydCIsIk1haW5Db250YWN0Rm9ybSIsIkZvcm1pa0Vycm9yIiwiZXJyb3IiLCJjb250YWN0Rm9ybUluaXRpYWxWYWx1ZXMiLCJvblN1Ym1pdCIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJ0b3VjaGVkIiwiTWV0YUluZm8iLCJtZW1vIiwiZGVzY3JpcHRpb24iLCJkaXNwbGF5TmFtZSIsIlN0eWxlZExpbmsiLCJOYXZCYXJMaW5rIiwicGF0aCIsImZvb3RlckJhciIsImxhc3RMaW5rIiwiaXNIaWRkZW5Nb2JpbGUiLCJCdXJnZXJNZW51IiwiYnV0dG9uIiwiQnVyZ2VyTWVudUljb24iLCJOYXZCYXIiLCJSb3V0ZXNDb25maWciLCJOb3RGb3VuZCIsImlzTG9jYXRpb240MDQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidXNlTGF5b3V0RWZmZWN0IiwiaHJlZiIsIlN0eWxlZENvbHVtbiIsIk5leHRTbGlkZUxpbmsiLCJtaW5pbWFsIiwiZGV2aWNlIiwidGFibGV0IiwiQW5nbGVSaWdodEljb24iLCJPdXJTZXJ2aWNlc0ltZyIsImNsaWVudHNTbGlkZXNDb250ZW50Iiwic2hvd0xvY2FsQXV0aCIsInNob3dMYXdQcmFjdGlzZXMiLCJodG1sIiwiY2xpZW50c0xvZ29zQ29udGVudCIsInBhbmVsIiwiY2xpZW50c0xvZ29zSHRtbCIsIkNsaWVudHNMb2dvcyIsImZvckVhY2giLCJ2YWwiLCJpbmRleCIsIkNsaWVudExvZ28iLCJ0eXBlIiwicmVnaW9uIiwiaW5jbHVkZXMiLCJkZWZhdWx0IiwibGVuZ3RoIiwicHVzaCIsImltYWdlVXJsIiwiYWx0VGFnIiwiQ2xpZW50c0Jhbm5lckNvbmZpZyIsInBhbmVscyIsImNsYXNzTmFtZXMiLCJPdXJDbGllbnRzIiwibmV4dFNsaWRlIiwicG9zaXRpb24iLCJTdHlsZWRQcm9taXNlVGlja0ljb24iLCJPdXJQcm9taXNlIiwiU0VPIiwiY2Fub25pY2FsIiwiY3NzIiwianMiLCJTZXJ2aWNlTGlzdCIsIlNpbHZlckJhbm5lck91dGVyIiwiU2lsdmVyQmFubmVySW5uZXIiLCJsYXB0b3AiLCJsYXB0b3BMIiwibGFwdG9wWEwiLCJTaWx2ZXJCYW5uZXIiLCJmcmVlemUiLCJiZWRmb3JkQ291bmNpbCIsImJvbHRvbkNvdW5jaWwiLCJwb3d5c0NvdW5jaWwiLCJtaWx0b25LZXluZXNDb3VuY2lsIiwiY2FtYnJpZGdlTGF3UHJhY3Rpc2UiLCJmdWxsZXJzIiwia2VubmVkeXMiLCJ3YXRzb25zIiwicmF5Qm9ybGV5IiwiZGF2aWRzb25TbWl0aCIsIm1vYmlsZVMiLCJtb2JpbGVNIiwibW9iaWxlTCIsImRlc2t0b3AiLCJkZXNrdG9wTCIsImxpYnJhcnkiLCJhZGQiLCJmYUNoZWNrIiwiZmFBdCIsImZhUGhvbmUiLCJmYU1vYmlsZSIsImZhRW52ZWxvcGUiLCJmYUFkZHJlc3NCb29rIiwiZmFCYXJzIiwiZmFVc2VyIiwiZmFSZWFjdCIsImZhR2l0aHViIiwiZmFNZWRpdW1NIiwiZmFUd2l0dGVyIiwiZmFJbmZvQ2lyY2xlIiwiZmFBbmdsZURvdWJsZVVwIiwiZmFBbmdsZVJpZ2h0IiwiZmFFeHRlcm5hbExpbmtBbHQiLCJmYUV4Y2xhbWF0aW9uQ2lyY2xlIiwiZXhhY3QiLCJhY3RpdmVDbGFzc05hbWUiLCJpY29uIiwibWV0YUluZm8iLCJwcm9jZXNzU2VydmluZyIsImxlZ2FsQ291cmllciIsInByaXZhY3kiLCJMYXlvdXQiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwicm91dGVyIiwiZXJyIiwiZSIsIm5vZGVOYW1lIiwidGFyZ2V0IiwiaXNMb2NhbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImhhc1dhcm5lZCIsInAiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJwcm9jZXNzIiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJMaW5rIiwic2hhbGxvdyIsInBhc3NIcmVmIiwidmFsdWUiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwidXBkYXRlIiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJvcHRpb25zIiwicHJlcGFyZVVybEFzIiwiU1QiLCJwZXJmb3JtYW5jZSIsImNsZWFuZWRBcyIsImRlbEJhc2VQYXRoIiwicGFyc2VkIiwidHJ5UGFyc2VSZWxhdGl2ZVVybCIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0bmFtZSIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJTdHJpbmciLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJzZWFyY2hQYXJhbXMiLCJBcnJheSIsInVzZWQiLCJyZXN1bHQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJjb21wb25lbnREaWRDYXRjaCIsInJlbmRlciIsImNyZWF0ZVVybCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwid2FyblVybCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsInB1c2hVcmwiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiTXlBcHAiLCJib3R0b20iLCJjb2xvck5hdkJhciIsImNvbG9yQmx1ZUhpZ2hsaWdodCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLGFBQWEsR0FBR0Msd0RBQU0sQ0FBQ0MsQ0FBUCxDQUFTQyxLQUFULENBQWUsT0FBTztBQUMxQ0MsTUFBSSxFQUFFLFFBRG9DO0FBRTFDLGdCQUFjO0FBRjRCLENBQVAsQ0FBZixDQUFIO0FBQUE7QUFBQTtBQUFBLGdZQW1CTkMsS0FBRCxJQUE0QkEsS0FBSyxDQUFDQyxJQUFOLEdBQWEsTUFBYixHQUFzQixT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O0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQ7QUFDRSxXQUFLLEVBQUMsY0FEUjtBQUVFLFdBQUssRUFBRTtBQUNMa2EsY0FBTSxFQUFFO0FBREgsT0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFNRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLFNBQUQsZUFBZW5CLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGLENBTkYsQ0FORixDQURGO0FBbUJEOztBQXRCcUI7O0FBeUJUa0Isb0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUEsTUFBTWhhLE1BQU0sR0FBRztBQUNiQyxpQkFBZSxFQUFFLFNBREo7QUFFYmlhLGFBQVcsRUFBRSxTQUZBO0FBR2JDLG9CQUFrQixFQUFFO0FBSFAsQ0FBZjtBQU1lbmEscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNRCxLQUFLLEdBQUc7QUFDbkJDLHlEQUFNQTtBQURhLENBQWQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUCw4RDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5cclxuY29uc3QgQmFja1RvVG9wTGluayA9IHN0eWxlZC5hLmF0dHJzKCgpID0+ICh7XHJcbiAgcm9sZTogJ2J1dHRvbicsXHJcbiAgJ2FyaWEtbGFiZWwnOiAnQmFja1RvVG9wJ1xyXG59KSlgXHJcbiAgd2lkdGg6IDMuNXJlbTtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIHJpZ2h0OiA2LjI1cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMzcsIDQwLCA0Nyk7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAwcHggMjBweDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZSwgYm90dG9tIDAuNHMgZWFzZTtcclxuICBib3R0b206ICR7KHByb3BzOiB7c2hvdzogYm9vbGVhbn0pID0+IHByb3BzLnNob3cgPyAnMjRweCcgOiAnLTMuNXJlbSd9O1xyXG4gIG9wYWNpdHk6ICR7KHByb3BzOiB7c2hvdzogYm9vbGVhbn0pID0+IHByb3BzLnNob3cgPyAxIDogMH07XHJcbmA7XHJcblxyXG5jb25zdCBBbmdsZURvdWJsZVVwSWNvbiA9IHN0eWxlZChGb250QXdlc29tZUljb24pYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjNjFkYWZiO1xyXG4gIGZvbnQtc2l6ZTogMS43NWVtO1xyXG4gIHBhZGRpbmctbGVmdDogMC4xcmVtO1xyXG4gIG1hcmdpbjogMC43NXJlbSBhdXRvIGF1dG8gYXV0bztcclxuYDtcclxuXHJcbmV4cG9ydCB7IEJhY2tUb1RvcExpbmssIEFuZ2xlRG91YmxlVXBJY29uIH07IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNjcm9sbCBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5cclxuaW1wb3J0IHsgQmFja1RvVG9wTGluaywgQW5nbGVEb3VibGVVcEljb24gfSBmcm9tICcuL2JhY2stdG8tdG9wLnN0eWxlJztcclxuXHJcbi8vICdyZWFjdC1zY3JvbGwnIGNvbmZpZ3VyYXRpb25cclxuY29uc3Qgc2Nyb2xsID0gU2Nyb2xsLmFuaW1hdGVTY3JvbGw7XHJcblxyXG5jb25zdCBzY3JvbGxPcHRpb25zID0ge1xyXG4gIGRlbGF5OiA1LFxyXG4gIGR1cmF0aW9uOiA1MDAsXHJcbiAgc21vb3RoOiAnZWFzZUluT3V0Q3ViaWMnXHJcbn07XHJcblxyXG4vLyBXcml0ZSB0aGUgc2hvdyBzdGF0ZSB2YWx1ZSB0byBhIHJlZiBzbyB3ZSBjYW4gdXNlIGl0IGFzIGEgY2hlY2sgdG8gcHJldmVudFxyXG4vLyAuLi5yZS1yZW5kZXJzIG9uIGV2ZXJ5IHNjcm9sbCBkb3duIHRoYXQgdHJpZ2dlcnMgYSBzaG93IGZvciB0aGUgYnV0dG9uXHJcbmNvbnN0IEJhY2tUb1RvcDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2hvd1JlZiA9IHVzZVJlZjxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBpZiAoIXNob3dSZWYuY3VycmVudCAmJiAod2luZG93LnNjcm9sbFkgfHwgd2luZG93LnBhZ2VZT2Zmc2V0KSA+IDEwMCkge1xyXG4gICAgICAgIHNob3dSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgc2V0U2hvdyh0cnVlKTtcclxuICAgICAgfSBlbHNlIGlmICgod2luZG93LnNjcm9sbFkgfHwgd2luZG93LnBhZ2VZT2Zmc2V0KSA9PT0gMCkge1xyXG4gICAgICAgIHNob3dSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIHNldFNob3coZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QmFja1RvVG9wTGlua1xyXG4gICAgICBzaG93PXtzaG93fVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGwuc2Nyb2xsVG9Ub3Aoc2Nyb2xsT3B0aW9ucyl9XHJcbiAgICA+XHJcbiAgICAgIDxBbmdsZURvdWJsZVVwSWNvbiBpY29uPSdhbmdsZS1kb3VibGUtdXAnIC8+XHJcbiAgICA8L0JhY2tUb1RvcExpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhY2tUb1RvcDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBTdHlsZWRDYXJkID0gc3R5bGVkLmRpdi5hdHRycygocHJvcHM6IHtkYXJrPzogYm9vbGVhbiwgaG9yaXpvbnRhbD86IGJvb2xlYW59KSA9PiAoe1xyXG4gIGRhcms6IHByb3BzLmRhcmssXHJcbiAgaG9yaXpvbnRhbDogcHJvcHMuaG9yaXpvbnRhbCxcclxuICBjbGFzc05hbWU6ICcnXHJcbn0pKWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYWU4ZTg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAkeyhwcm9wcykgPT4gcHJvcHMuZGFyayAmJiBgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzLnRoZW1lLmNvbG9ycy5jb2xvckhlcm9Jc0Rhcmt9O1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgICAudGl0bGUsXHJcbiAgICAuc3VidGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjFkYWZiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBgfVxyXG5cclxuICAkeyhwcm9wcykgPT4gcHJvcHMuaG9yaXpvbnRhbCAmJiBgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1iYXNpczogNTBleDtcclxuICAgIGZsZXgtZ3JvdzogMDtcclxuICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC5jYXJkLWltYWdlIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgcGFkZGluZzogMmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAuaXMtZGl2aWRlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgYH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZENhcmRJbWFnZSA9IHN0eWxlZC5kaXYuYXR0cnMoKCkgPT4gKHtcclxuICBjbGFzc05hbWU6ICdjYXJkLWltYWdlJ1xyXG59KSlgXHJcbiAgXHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRDYXJkQ29udGVudCA9IHN0eWxlZC5kaXYuYXR0cnMoKCkgPT4gKHtcclxuICBjbGFzc05hbWU6ICdjYXJkLWNvbnRlbnQnXHJcbn0pKWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgeyBTdHlsZWRDYXJkLCBTdHlsZWRDYXJkSW1hZ2UsIFN0eWxlZENhcmRDb250ZW50IH07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IFN0eWxlZENhcmQsIFN0eWxlZENhcmRJbWFnZSwgU3R5bGVkQ2FyZENvbnRlbnQgfSBmcm9tICcuL2NhcmQuc3R5bGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZENhcmRcclxuICAgICAgZGFyaz17cHJvcHMuZGFya31cclxuICAgICAgaG9yaXpvbnRhbD17cHJvcHMuaG9yaXpvbnRhbH0+XHJcbiAgICAgIHsoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5pbWFnZSkgeyBcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDYXJkSW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e3Byb3BzLmltYWdlLnNyY31cclxuICAgICAgICAgICAgICBhbHQ9e3Byb3BzLmltYWdlLmFsdH0gLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSgpfVxyXG4gICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPENhcmRUaXRsZVxyXG4gICAgICAgICAgc2l6ZT17cHJvcHMudGl0bGUuc2l6ZX1cclxuICAgICAgICAgIGNvbnRlbnQ9e3Byb3BzLnRpdGxlLmNvbnRlbnR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLnRpdGxlLmNsYXNzTmFtZX0vPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgIDwvU3R5bGVkQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmRJbWFnZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQ2FyZEltYWdlPlxyXG4gICAgICA8ZmlndXJlIGNsYXNzTmFtZT0naW1hZ2UgaXM0YnkzJz5cclxuICAgICAgICA8aW1nIHNyYz17cHJvcHMuc3JjfSBhbHQ9e3Byb3BzLmFsdH0vPlxyXG4gICAgICA8L2ZpZ3VyZT5cclxuICAgIDwvU3R5bGVkQ2FyZEltYWdlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZENvbnRlbnQgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZENhcmRDb250ZW50PlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L1N0eWxlZENhcmRDb250ZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG50eXBlIENhcmRUaXRsZVByb3BzID0ge1xyXG4gIHNpemU/OiBzdHJpbmc7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxufTtcclxuZXhwb3J0IGNvbnN0IENhcmRUaXRsZSA9IChwcm9wczogQ2FyZFRpdGxlUHJvcHMpID0+IHtcclxuICByZXR1cm4gKHByb3BzLnNpemUgPT09ICdsYXJnZScpID9cclxuICAgIChcclxuICAgICAgPGgzIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfT57cHJvcHMuY29udGVudH08L2gzPlxyXG4gICAgKSA6XHJcbiAgICAoXHJcbiAgICAgIDxoNCBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+e3Byb3BzLmNvbnRlbnR9PC9oND5cclxuICAgIClcclxufTtcclxuQ2FyZFRpdGxlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzaXplOiAnbGFyZ2UnLFxyXG4gIGNvbnRlbnQ6IG51bGwsXHJcbiAgY2xhc3NOYW1lOiAnJ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgUm91dGVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3JvdXRlcy5jb25maWcnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL25hdmJhci9uYXZiYXInO1xyXG5cclxuY29uc3QgTWFpbkxvZ28gPSAnL2ltZy9sb2dvLU5FVy5zdmcnO1xyXG5cclxuY29uc3QgRm9vdGVyOiBSZWFjdC5GQyA9ICgpID0+IChcclxuICA8Zm9vdGVyIGNsYXNzTmFtZT0nZm9vdGVyJz5cclxuICAgIDxOYXZCYXIgZm9vdGVyQmFyPXt0cnVlfT48L05hdkJhcj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5DcmVhdGVkIGJ5IDxhIHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInIGhyZWY9J2h0dHA6Ly93d3cubXlkYXlhcHAuY28udWsvYnVzaW5lc3MvJz48c3Ryb25nPk15RGF5IGluIEJ1c2luZXNzPC9zdHJvbmc+PC9hPiAmY29weTsgMjAyMDwvZGl2PlxyXG4gIDwvZm9vdGVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNlcnZpY2VMaXN0IGZyb20gJy4uL3NlcnZpY2UtbGlzdC9zZXJ2aWNlLWxpc3QnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlSW5mbywgU2VydmljZUluZm9Db25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvc2VydmljZXMuY29uZmlnJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGVyb1Byb3BzIHtcclxuICBpdGVtOiBzdHJpbmc7XHJcbiAgY2xpZW50VHlwZT86IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IEhlcm8gPSAocHJvcHM6IEhlcm9Qcm9wcykgPT4ge1xyXG4gIGNvbnN0IEhlcm9Qcm9wcyA9IHtcclxuICAgIEhvbWU6IHtcclxuICAgICAgdGl0bGU6ICdXZWxjb21lIHRvIExlZ2FsIFNlcnZlLCBsb2NhbCBQcm9jZXNzIFNlcnZlcnMgYW5kIExlZ2FsIENvdXJpZXJzIGluIEJlZGZvcmRzaGlyZSwgQnVja2luZ2hhbXNoaXJlICYgQ2FtYnJpZGdlc2hpcmUuJ1xyXG4gICAgfSxcclxuICAgIFNlcnZpY2VzOiB7XHJcbiAgICAgIHRpdGxlOiAnT3VyIFNlcnZpY2VzIGluIExlZ2FsIFN1cHBvcnQnLFxyXG4gICAgICBzdW1tYXJ5OiAnUmVhZCBtb3JlIGFib3V0IHRoZSBzZXJ2aWNlcyB3ZSBvZmZlciBhcm91bmQgcHJvY2VzcyBhbmQgY291cnQtb3JkZXIgc2VydmluZyBhbmQgbGVnYWwgY291cmllcmluZydcclxuICAgIH0sXHJcbiAgICAgIFByb2Nlc3NTZXJ2ZXJCZWRmb3JkOiB7XHJcbiAgICAgICAgdGl0bGU6ICdQcm9jZXNzIFNlcnZpbmcgaW4gQmVkcywgQnVja3MgJiBzdXJyb3VuZGluZyBhcmVhcycsXHJcbiAgICAgICAgc3VtbWFyeTogJ0ZpbmQgb3V0IG1vcmUgYWJvdXQgdGhlIHNlcnZpY2VzIHdlIG9mZmVyIGluIHRoZSBCZWRmb3Jkc2hpcmUgYW5kIEJ1Y2tpbmdoYW1zaGlyZSBjb3VudGllcy4nXHJcbiAgICAgIH0sXHJcbiAgICAgIExlZ2FsQ291cmllckJlZGZvcmQ6IHtcclxuICAgICAgICB0aXRsZTogJ0xlZ2FsIENvdXJpZXIgQmVkZm9yZCwgQnVja2luZ2hhbXNoaXJlICYgQ2FtYnJpZGdlc2hpcmUuJyxcclxuICAgICAgICBzdW1tYXJ5OiAnT3VyIGxlZ2FsIGNvdXJpZXJzIGFyZSB2ZXJ5IGZhbWlsaWFyIHdpdGggdGhlIEJlZGZvcmRzaGlyZSBhbmQgQnVja2luZ2hhbXNoaXJlIGNvdW50aWVzLCBhcyB3ZWxsIGFzIGRhdGEtY29tcGxpYW5jZSByZWd1bGF0aW9ucyBhbmQgZ3VpZGVsaW5lcy4nXHJcbiAgICAgIH0sXHJcbiAgICBDb250YWN0OiB7XHJcbiAgICAgIHRpdGxlOiAnQ29udGFjdCBMZWdhbCBTZXJ2ZSBCZWRmb3JkIHRvIGFycmFuZ2UgeW91ciBuZXh0IFNlcnZpbmcgb3IgRGVsaXZlcnknLFxyXG4gICAgICBzdW1tYXJ5OiAnQ29udGFjdCBMZWdhbCBTZXJ2ZSB0byBkaXNjdXNzIHlvdXIgbGVnYWwgc3VwcG9ydCBuZWVkcyBvciB0byBiZXR0ZXIgdW5kZXJzdGFuZCBvdXIgZGVsaXZlcnknXHJcbiAgICB9LFxyXG4gICAgQ2xpZW50czoge1xyXG4gICAgICB0aXRsZTogJ091ciBDbGllbnRzJyxcclxuICAgICAgc3VtbWFyeTogJ1JhbmdpbmcgZnJvbSBCZWRmb3Jkc2hpcmUgJiBCdWNraW5naGFtc2hpcmUgdG8gQ2FtYnJpZGdlc2hpcmUsIG91ciBjbGllbnRzIHRydXN0IHVzIHRvIGRlbGl2ZXInXHJcbiAgICB9LFxyXG4gICAgQ2xpZW50VHlwZToge1xyXG4gICAgICAnYmVkZm9yZHNoaXJlLWNsaWVudHMnOiB7XHJcbiAgICAgICAgdGl0bGU6ICdCZWRmb3Jkc2hpcmUgQ2xpZW50cycsXHJcbiAgICAgICAgc3VtbWFyeTogJ1JlYWQgYWJvdXQgc29tZSBvZiBvdXIgQmVkZm9yZHNoaXJlIGNsaWVudHMnXHJcbiAgICAgIH0sXHJcbiAgICAgICdidWNraW5naGFtc2hpcmUtY2xpZW50cyc6IHtcclxuICAgICAgICB0aXRsZTogJ0J1Y2tpbmdoYW1zaGlyZSBDbGllbnRzJyxcclxuICAgICAgICBzdW1tYXJ5OiAnUmVhZCBhYm91dCBzb21lIG9mIG91ciBNaWx0b24gS2V5bmVzICYgQnVja2luZ2hhbXNoaXJlLWJhc2VkIGNsaWVudHMnXHJcbiAgICAgIH0sXHJcbiAgICAgICdjYW1icmlkZ2VzaGlyZS1jbGllbnRzJzoge1xyXG4gICAgICAgIHRpdGxlOiAnQ2FtYnJpZGdlc2hpcmUgQ2xpZW50cycsXHJcbiAgICAgICAgc3VtbWFyeTogJ1JlYWQgYWJvdXQgc29tZSBvZiBvdXIgQ2FtYnJpZGdlc2hpcmUtYmFzZWQgY2xpZW50cydcclxuICAgICAgfSxcclxuICAgICAgJ2NsaWVudHMtaW4tc3Vycm91bmRpbmctYXJlYXMnOiB7XHJcbiAgICAgICAgdGl0bGU6ICdDbGllbnRzIGluIFN1cnJvdW5kaW5nIEFyZWFzJyxcclxuICAgICAgICBzdW1tYXJ5OiAnUmVhZCBhYm91dCBzb21lIG9mIG91ciBjbGllbnRzIGluIHN1cnJvdW5kaW5nIGFyZWFzJ1xyXG4gICAgICB9LFxyXG4gICAgICAnbG9jYWwtYXV0aG9yaXR5LWNsaWVudHMnOiB7XHJcbiAgICAgICAgdGl0bGU6ICdMb2NhbCBBdXRob3JpdHkgQ2xpZW50cycsXHJcbiAgICAgICAgc3VtbWFyeTogJ1JlYWQgYWJvdXQgc29tZSBvZiBvdXIgTG9jYWwgQXV0aG9yaXR5IGNsaWVudHMnXHJcbiAgICAgIH0sXHJcbiAgICAgICdsZWdhbC1wcmFjdGlzZS1jbGllbnRzJzoge1xyXG4gICAgICAgIHRpdGxlOiAnTGVnYWwgUHJhY3Rpc2UgQ2xpZW50cycsXHJcbiAgICAgICAgc3VtbWFyeTogJ1JlYWQgYWJvdXQgc29tZSBvZiBvdXIgTGVnYWwgUHJhY3Rpc2UgY2xpZW50cydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgc2VydmljZUxpc3QgPSB1c2VNZW1vPFNlcnZpY2VJbmZvW10+KCgpID0+IHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhTZXJ2aWNlSW5mb0NvbmZpZykubWFwKChrZXkpID0+IFNlcnZpY2VJbmZvQ29uZmlnW2tleV0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVySGVyb0NvbnRlbnQoaXRlbSkge1xyXG4gICAgc3dpdGNoKGl0ZW0pIHtcclxuICAgICAgY2FzZSAnSG9tZSc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW5zJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbic+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lzLWZsZXggaXMtaG9yaXpvbnRhbC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPGlmcmFtZSB0aXRsZT0nUHJvY2VzcyBTZXJ2aW5nIEluZm9ybWF0aW9uIFZpZGVvJyB3aWR0aD0nNjUwJyBoZWlnaHQ9JzQwMCcgc3JjPSdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC92SHZkNkhhUHFfcycgZnJhbWVCb3JkZXI9JzAnIGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4nPlxyXG4gICAgICAgICAgICAgIDxTZXJ2aWNlTGlzdCBzZXJ2aWNlTGlzdD17c2VydmljZUxpc3R9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSAnQ2xpZW50VHlwZSc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxwPntIZXJvUHJvcHNbcHJvcHMuaXRlbV1bcHJvcHMuY2xpZW50VHlwZV0uc3VtbWFyeX08L3A+XHJcbiAgICAgICAgKVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8cD57SGVyb1Byb3BzW3Byb3BzLml0ZW1dLnN1bW1hcnl9PC9wPlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdCBoZXJvQ29udGVudCA9IHJlbmRlckhlcm9Db250ZW50KHByb3BzLml0ZW0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdoZXJvIGlzLWRhcmsnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naGVyby1ib2R5Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGhhcy10ZXh0LWNlbnRlcmVkJz5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RpdGxlIGJsb2ctdGl0bGUnPlxyXG4gICAgICAgICAge3Byb3BzLml0ZW0gIT09ICdDbGllbnRUeXBlJyA/XHJcbiAgICAgICAgICAgIEhlcm9Qcm9wc1twcm9wcy5pdGVtXS50aXRsZSA6XHJcbiAgICAgICAgICAgIEhlcm9Qcm9wc1twcm9wcy5pdGVtXVtwcm9wcy5jbGllbnRUeXBlXS50aXRsZX1cclxuICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIHtoZXJvQ29udGVudH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm87XHJcbiIsImltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXIvZm9vdGVyJztcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuL25hdmJhci9uYXZiYXInO1xyXG5pbXBvcnQgTWV0YUluZm8gZnJvbSAnLi9tZXRhLWluZm8vbWV0YS1pbmZvJztcclxuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vbm90LWZvdW5kL25vdC1mb3VuZCc7XHJcbmltcG9ydCBCYWNrVG9Ub3AgZnJvbSAnLi9iYWNrLXRvLXRvcC9iYWNrLXRvLXRvcCc7XHJcbmltcG9ydCBIZXJvIGZyb20gJy4vaGVyby9oZXJvJztcclxuaW1wb3J0IE91clByb21pc2UgZnJvbSAnLi9vdXItcHJvbWlzZS1iYW5uZXIvb3VyLXByb21pc2UtYmFubmVyJztcclxuaW1wb3J0IE91ckNsaWVudHMgZnJvbSAnLi9vdXItY2xpZW50cy9vdXItY2xpZW50cyc7XHJcbmltcG9ydCBNYWluQ29udGFjdEZvcm0gZnJvbSAnLi9tYWluLWNvbnRhY3QtZm9ybS9tYWluLWNvbnRhY3QtZm9ybSc7XHJcbmltcG9ydCBJbmxpbmVDb250YWN0UGFuZWwgZnJvbSAnLi9pbmxpbmUtY29udGFjdC1wYW5lbC9pbmxpbmUtY29udGFjdC1wYW5lbCc7XHJcbmltcG9ydCBTaWx2ZXJCYW5uZXIgZnJvbSAnLi9zaWx2ZXItYmFubmVyL3NpbHZlci1iYW5uZXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQvY2FyZCc7XHJcbmltcG9ydCB7IFNFTyB9ICBmcm9tICcuL3Nlby9zZW8nO1xyXG5cclxuZXhwb3J0IHtcclxuICBGb290ZXIsXHJcbiAgTmF2QmFyLFxyXG4gIE1ldGFJbmZvLFxyXG4gIE5vdEZvdW5kLFxyXG4gIEJhY2tUb1RvcCxcclxuICBIZXJvLFxyXG4gIE91clByb21pc2UsXHJcbiAgT3VyQ2xpZW50cyxcclxuICBNYWluQ29udGFjdEZvcm0sXHJcbiAgSW5saW5lQ29udGFjdFBhbmVsLFxyXG4gIFNpbHZlckJhbm5lcixcclxuICBDYXJkLFxyXG4gIFNFT1xyXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluQ29udGFjdEZvcm0gZnJvbSAnLi4vbWFpbi1jb250YWN0LWZvcm0vbWFpbi1jb250YWN0LWZvcm0nO1xyXG5cclxuY29uc3QgSW5saW5lQ29udGFjdFBhbmVsID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+Q29udGFjdCBVcyBUb2RheTwvaDM+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucyc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4nPlxyXG4gICAgICAgIDxNYWluQ29udGFjdEZvcm0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWNvbnRlbnQnPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPSdzbWFsbC10aXRsZSc+PHN0cm9uZz5PciBhbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIGNvbnRhY3QgdXMgZGlyZWN0bHkgdXNpbmcgYW55IG9mIHRoZSBiZWxvdyBtZXRob2RzOjwvc3Ryb25nPjwvaDU+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8cD48c3Ryb25nPlBob25lPC9zdHJvbmc+OiAoMDEyMzQpIDkyIDQ4IDQ3PC9wPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPHA+PHN0cm9uZz5Nb2JpbGU8L3N0cm9uZz46IDA3ODUzIDE2NiA2NzQ8L3A+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8cD48c3Ryb25nPkVtYWlsPC9zdHJvbmc+OiBpbmZvQGxlZ2Fsc2VydmViZWRmb3JkLmNvLnVrPC9wPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5saW5lQ29udGFjdFBhbmVsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkLCBFcnJvck1lc3NhZ2UgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcblxyXG5jb25zdCB2YWxpZEVtYWlsUmVnZXggPSBcclxuICBSZWdFeHAoL14oKFtePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpXFxbXFxdXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXStcXC4pK1tePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl17Mix9KSQvaSk7XHJcbi8vIGNvbnN0IHZhbGlkRW1haWxSZWdleCA9IFJlZ0V4cCgvXigoW148PigpW1xcXS4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFtePD4oKVtcXF0uLDs6XFxzQFwiXSsuKStbXjw+KClbXFxdLiw7Olxcc0BcIl17Mix9KSQvaSk7XHJcbmNvbnN0IHZhbGlkUGhvbmVSZWdleCA9IFJlZ0V4cCgvXlswLTkgXXsxMSx9JC9pKTtcclxuXHJcbmNvbnN0IGNvbnRhY3RGb3JtVmFsaWRhdGlvblNjaGVtYSA9IFl1cC5vYmplY3Qoe1xyXG4gIE5hbWU6IFl1cC5zdHJpbmcoKS5taW4oNSkucmVxdWlyZWQoJ1BsZWFzZSBwcm92aWRlIHlvdXIgRnVsbCBOYW1lLicpLFxyXG4gIENvbXBhbnk6IFl1cC5zdHJpbmcoKS5taW4oMiksXHJcbiAgRW1haWw6IFl1cC5zdHJpbmcoKS5lbWFpbCgpLm1hdGNoZXModmFsaWRFbWFpbFJlZ2V4LCAnUGxlYXNlIGVudGVyIGEgdmFsaWQgRS1tYWlsIEFkZHJlc3MnKS5yZXF1aXJlZCgnUGxlYXNlIHByb3ZpZGUgeW91ciBFLW1haWwgQWRkcmVzcy4nKSxcclxuICBQaG9uZTogWXVwLnN0cmluZygpLm1hdGNoZXModmFsaWRQaG9uZVJlZ2V4LCAnUGxlYXNlIGVudGVyIGEgdmFsaWQgUGhvbmUgTnVtYmVyJyksXHJcbiAgTWVzc2FnZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdQbGVhc2UgZmlsbCBpbiBhIE1lc3NhZ2UuJylcclxufSk7XHJcblxyXG5jb25zdCBnZXRTdWJtaXRDYWxsYmFjayA9ICgpID0+XHJcbiAgdmFsdWVzID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogJ2h0dHA6Ly9sZWdhbHNlcnZlYmVkZm9yZC5jby51ay9jb250YWN0LXByb2Nlc3MucGhwP2FjdGlvbj1wcm9jZXNzQ29udGFjdCcsXHJcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHZhbHVlcylcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdcXFwiU3VjY2Vzc1xcXCInKXtcclxuICAgICAgICBhbGVydChcIk1lc3NhZ2UgU2VudC5cIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIGFsZXJ0KFwiTWVzc2FnZSBmYWlsZWQgdG8gc2VuZC5cIilcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbmNvbnN0IE1haW5Db250YWN0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBGb3JtaWtFcnJvciA9IGVycm9yID0+IChcclxuICAgIDxwIGNsYXNzTmFtZT0naGVscCBpcy1kYW5nZXInPntlcnJvci5jaGlsZHJlbn08L3A+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY29udGFjdEZvcm1Jbml0aWFsVmFsdWVzID0ge1xyXG4gICAgTmFtZTogJycsXHJcbiAgICBDb21wYW55OiAnJyxcclxuICAgIEVtYWlsOiAnJyxcclxuICAgIFBob25lOiAnJyxcclxuICAgIE1lc3NhZ2U6ICcnXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBSZWFjdC51c2VDYWxsYmFjayhnZXRTdWJtaXRDYWxsYmFjaygpLCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybWlrXHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e2NvbnRhY3RGb3JtSW5pdGlhbFZhbHVlc31cclxuICAgICAgdmFsaWRhdGlvblNjaGVtYT17Y29udGFjdEZvcm1WYWxpZGF0aW9uU2NoZW1hfVxyXG4gICAgICBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICB7KHsgaGFuZGxlU3VibWl0LCB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCB9KSA9PiAoXHJcbiAgICAgIDxGb3JtIGlkPSdjb250YWN0LWZvcm0nIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG1ldGhvZD0nR0VUJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmllbGQnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wgaGFzLWljb25zLWxlZnQgaGFzLWljb25zLXJpZ2h0Jz5cclxuICAgICAgICAgICAgPEZpZWxkIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQgJHtcclxuICAgICAgICAgICAgICAgIHRvdWNoZWQuTmFtZSAmJiBlcnJvcnMuTmFtZSA/ICdpcy1kYW5nZXInIDogJycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0gJHtcclxuICAgICAgICAgICAgICAgIHRvdWNoZWQuTmFtZSAmJiAhZXJyb3JzLk5hbWUgPyAnaXMtc3VjY2VzcycgOiAnJ1xyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdZb3VyIE5hbWUnXHJcbiAgICAgICAgICAgICAgbmFtZT0nTmFtZSdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249J3VzZXInIC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEVycm9yTWVzc2FnZSBjb21wb25lbnQ9e0Zvcm1pa0Vycm9yfVxyXG4gICAgICAgICAgICBuYW1lPSdOYW1lJyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWVsZCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbCBoYXMtaWNvbnMtbGVmdCBoYXMtaWNvbnMtcmlnaHQnPlxyXG4gICAgICAgICAgICA8RmllbGQgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dCAke1xyXG4gICAgICAgICAgICAgICAgdG91Y2hlZC5Db21wYW55ICYmIGVycm9ycy5Db21wYW55ID8gJ2lzLWRhbmdlcicgOiAnJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfSAke1xyXG4gICAgICAgICAgICAgICAgdG91Y2hlZC5Db21wYW55ICYmICFlcnJvcnMuQ29tcGFueSA/ICdpcy1zdWNjZXNzJyA6ICcnXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0NvbXBhbnkgLyBPcmdhbmlzYXRpb24nXHJcbiAgICAgICAgICAgICAgbmFtZT0nQ29tcGFueScgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPSdhdCcgLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8RXJyb3JNZXNzYWdlIGNvbXBvbmVudD17Rm9ybWlrRXJyb3J9XHJcbiAgICAgICAgICAgIG5hbWU9J0NvbXBhbnknIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sIGhhcy1pY29ucy1sZWZ0IGhhcy1pY29ucy1yaWdodCc+XHJcbiAgICAgICAgICAgIDxGaWVsZCB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dCAke1xyXG4gICAgICAgICAgICAgICAgdG91Y2hlZC5FbWFpbCAmJiBlcnJvcnMuRW1haWwgPyAnaXMtZGFuZ2VyJyA6ICcnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9ICR7XHJcbiAgICAgICAgICAgICAgICB0b3VjaGVkLkVtYWlsICYmICFlcnJvcnMuRW1haWwgPyAnaXMtc3VjY2VzcycgOiAnJ1xyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFLW1haWwgQWRkcmVzcydcclxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PSdlbWFpbEhlbHAnXHJcbiAgICAgICAgICAgICAgbmFtZT0nRW1haWwnIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgaXMtbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj0nYXQnIC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEVycm9yTWVzc2FnZSBjb21wb25lbnQ9e0Zvcm1pa0Vycm9yfVxyXG4gICAgICAgICAgICBuYW1lPSdFbWFpbCcgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmllbGQnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wgaGFzLWljb25zLWxlZnQgaGFzLWljb25zLXJpZ2h0Jz5cclxuICAgICAgICAgICAgPEZpZWxkIHR5cGU9J1Bob25lJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0ICR7XHJcbiAgICAgICAgICAgICAgICB0b3VjaGVkLlBob25lICYmIGVycm9ycy5QaG9uZSA/ICdpcy1kYW5nZXInIDogJycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0gJHtcclxuICAgICAgICAgICAgICAgIHRvdWNoZWQuUGhvbmUgJiYgIWVycm9ycy5QaG9uZSA/ICdpcy1zdWNjZXNzJyA6ICcnXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Bob25lIE51bWJlcidcclxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PSdwaG9uZUhlbHAnXHJcbiAgICAgICAgICAgICAgbmFtZT0nUGhvbmUnIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgaXMtbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj0ncGhvbmUnIC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEVycm9yTWVzc2FnZSBjb21wb25lbnQ9e0Zvcm1pa0Vycm9yfVxyXG4gICAgICAgICAgICBuYW1lPSdQaG9uZScgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmllbGQnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wgaGFzLWljb25zLWxlZnQgaGFzLWljb25zLXJpZ2h0Jz5cclxuICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PSd0ZXh0YXJlYSdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0YXJlYSAke1xyXG4gICAgICAgICAgICAgICAgdG91Y2hlZC5NZXNzYWdlICYmIGVycm9ycy5NZXNzYWdlID8gJ2lzLWRhbmdlcicgOiAnJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfSAke1xyXG4gICAgICAgICAgICAgICAgdG91Y2hlZC5NZXNzYWdlICYmICFlcnJvcnMuTWVzc2FnZSA/ICdpcy1zdWNjZXNzJyA6ICcnXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1lvdXIgTWVzc2FnZSdcclxuICAgICAgICAgICAgICBuYW1lPSdNZXNzYWdlJyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8RXJyb3JNZXNzYWdlIGNvbXBvbmVudD17Rm9ybWlrRXJyb3J9XHJcbiAgICAgICAgICAgIG5hbWU9J01lc3NhZ2UnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkIGJ1dHRvbnMgaXMtcmlnaHQnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wnPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidXR0b24gaXMtcHJpbWFyeSc+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICApfVxyXG4gICAgPC9Gb3JtaWs+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5Db250YWN0Rm9ybTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcclxuXHJcbnR5cGUgTWV0YUluZm9Qcm9wcyA9IHtcclxuICByZWFkb25seSB0aXRsZT86IHN0cmluZztcclxuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IE1ldGFJbmZvOiBSZWFjdC5GQzxNZXRhSW5mb1Byb3BzPiA9IFJlYWN0Lm1lbW8oKHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+IChcclxuICA8SGVsbWV0PlxyXG4gICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgPG1ldGEgbmFtZT0nb2c6dGl0bGUnIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgPG1ldGEgbmFtZT0nb2c6ZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gIDwvSGVsbWV0PlxyXG4pKTtcclxuXHJcbk1ldGFJbmZvLmRpc3BsYXlOYW1lID0gJ01ldGFJbmZvJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ldGFJbmZvO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYWBcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1vdXQsIGJvcmRlci1ib3R0b20tY29sb3IgMC4ycyBlYXNlLW91dDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzYxZGFmYjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCB7IFN0eWxlZExpbmsgfTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCB7IFN0eWxlZExpbmsgfSBmcm9tICcuL25hdmJhci1saW5rLnN0eWxlJztcclxuXHJcbnR5cGUgTmF2QmFyTGlua1Byb3BzID0ge1xyXG4gIHBhdGg6IHN0cmluZztcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gIGZvb3RlckJhcj86IGJvb2xlYW47XHJcbiAgbGFzdExpbms/OiBib29sZWFuO1xyXG4gIGlzSGlkZGVuTW9iaWxlPzogYm9vbGVhbjtcclxufTtcclxuXHJcbmNvbnN0IE5hdkJhckxpbms6IFJlYWN0LkZDPE5hdkJhckxpbmtQcm9wcz4gPSAoe1xyXG4gIHBhdGgsXHJcbiAgZGlzcGxheU5hbWUsXHJcbiAgZm9vdGVyQmFyLFxyXG4gIGxhc3RMaW5rLFxyXG4gIGlzSGlkZGVuTW9iaWxlXHJcbn0pID0+IChcclxuICA8PlxyXG4gICAgPExpbmtcclxuICAgICAgaHJlZj17cGF0aH1cclxuICAgICAgcGFzc0hyZWZcclxuICAgID5cclxuICAgICAgPFN0eWxlZExpbmtcclxuICAgICAgICBjbGFzc05hbWU9e2Akeyhpc0hpZGRlbk1vYmlsZSkgPyAnaXMtaGlkZGVuLW1vYmlsZScgOiAnJ31gfT5cclxuICAgICAgICB7ZGlzcGxheU5hbWV9XHJcbiAgICAgIDwvU3R5bGVkTGluaz5cclxuICAgIDwvTGluaz5cclxuICAgIHsoKCkgPT4geyBcclxuICAgICAgaWYgKCFmb290ZXJCYXIgJiYgIWxhc3RMaW5rKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXBlcmF0b3InIC8+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9KSgpfVxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyTGluaztcclxuIiwiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBCdXJnZXJNZW51ID0gc3R5bGVkLmJ1dHRvbi5hdHRycygoKSA9PiAoe1xyXG4gIHJvbGU6ICdidXR0b24nLFxyXG4gICdhcmlhLWxhYmVsJzogJ01lbnUnXHJcbn0pKWBcclxuICBib3JkZXI6bm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHdpZHRoOiAzLjVyZW07XHJcbiAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UsIGJvdHRvbSAwLjRzIGVhc2U7XHJcbmA7XHJcblxyXG5jb25zdCBCdXJnZXJNZW51SWNvbiA9IHN0eWxlZChGb250QXdlc29tZUljb24pYFxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMS43NWVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IHsgQnVyZ2VyTWVudSwgQnVyZ2VyTWVudUljb24gfTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3JvdXRlcy5jb25maWcnO1xyXG5pbXBvcnQgTmF2QmFyTGluayBmcm9tICcuL25hdmJhci1saW5rL25hdmJhci1saW5rJztcclxuXHJcbmltcG9ydCB7IEJ1cmdlck1lbnUsIEJ1cmdlck1lbnVJY29uIH0gZnJvbSAnLi9uYXZiYXIuc3R5bGUnO1xyXG5cclxuY29uc3QgTWFpbkxvZ28gPSAnL2ltZy9sb2dvLU5FVy5zdmcnO1xyXG5cclxudHlwZSBOYXZCYXJQcm9wcyA9IHtcclxuICBmb290ZXJCYXI/OiBib29sZWFuO1xyXG59O1xyXG5cclxuY29uc3QgTmF2QmFyOiBSZWFjdC5GQzxOYXZCYXJQcm9wcz4gPSAoe1xyXG4gIGZvb3RlckJhclxyXG59KSA9PiAoXHJcbiAgPG5hdlxyXG4gICAgcm9sZT0nbmF2aWdhdGlvbidcclxuICAgIGNsYXNzTmFtZT0nbmF2YmFyJ1xyXG4gICAgYXJpYS1sYWJlbD0nbWFpbiBuYXZpZ2F0aW9uJ1xyXG4gID5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItd3JhcHBlcic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdicmFuZC13cmFwcGVyIGxldmVsJz5cclxuICAgICAgICA8aW1nIHdpZHRoPScxNzAnXHJcbiAgICAgICAgICBzcmM9e01haW5Mb2dvfVxyXG4gICAgICAgICAgYWx0PSdMZWdhbCBTZXJ2ZSAtIFByb2Nlc3MgU2VydmVyIGluIEJlZGZvcmRzaGlyZSAmYW1wOyBCdWNraW5naGFtc2hpcmUnLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2xldmVsLXJpZ2h0Jz4wNzg1MyAxNjYgNjc0PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1yb3V0ZXMnPlxyXG4gICAgICAgIDxOYXZCYXJMaW5rXHJcbiAgICAgICAgICB7Li4uUm91dGVzQ29uZmlnLkhvbWV9XHJcbiAgICAgICAgICBmb290ZXJCYXI9e2Zvb3RlckJhcn1cclxuICAgICAgICAgID48L05hdkJhckxpbms+XHJcbiAgICAgICAgPE5hdkJhckxpbmtcclxuICAgICAgICAgIHsuLi5Sb3V0ZXNDb25maWcuU2VydmljZXN9XHJcbiAgICAgICAgICBmb290ZXJCYXI9e2Zvb3RlckJhcn1cclxuICAgICAgICAgID48L05hdkJhckxpbms+XHJcbiAgICAgICAgPE5hdkJhckxpbmtcclxuICAgICAgICAgIHsuLi5Sb3V0ZXNDb25maWcuQ29udGFjdH1cclxuICAgICAgICAgIGZvb3RlckJhcj17Zm9vdGVyQmFyfVxyXG4gICAgICAgICAgPjwvTmF2QmFyTGluaz5cclxuICAgICAgICB7KCgpID0+IHsgaWYgKCFmb290ZXJCYXIpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCdXJnZXJNZW51XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpcy1oaWRkZW4tdGFibGV0Jz5cclxuICAgICAgICAgICAgICA8QnVyZ2VyTWVudUljb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naXMtdmlzaWJsZS1tb2JpbGUnXHJcbiAgICAgICAgICAgICAgICBpY29uPSdiYXJzJz48L0J1cmdlck1lbnVJY29uPlxyXG4gICAgICAgICAgICA8L0J1cmdlck1lbnU+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfX0pKCl9XHJcbiAgICAgICAgPE5hdkJhckxpbmtcclxuICAgICAgICAgIHsuLi5Sb3V0ZXNDb25maWcuQ2xpZW50c31cclxuICAgICAgICAgIGZvb3RlckJhcj17Zm9vdGVyQmFyfVxyXG4gICAgICAgICAgbGFzdExpbms9e3RydWV9XHJcbiAgICAgICAgICBpc0hpZGRlbk1vYmlsZT17IWZvb3RlckJhciAmJiB0cnVlfVxyXG4gICAgICAgICAgPjwvTmF2QmFyTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L25hdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuXHJcbmNvbnN0IE5vdEZvdW5kOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBpc0xvY2F0aW9uNDA0ID0gKHdpbmRvdyAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09ICcvNDA0Jyk7XHJcbiAgY29uc3QgY2xhc3NOYW1lID0gYG5vdGlmaWNhdGlvbiB0aWxlIGlzLWNoaWxkIGlzLWRhbmdlciAke2lzTG9jYXRpb240MDQgPyAncnViYmVyQmFuZC1hbmltYXRpb24nIDogJ2hpZGUnfWA7XHJcblxyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSAnLzQwNCcpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLzQwNCc7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXIgdmlldy13cmFwcGVyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RpbGUgaXMtcGFyZW50IGlzLTggaXMtdmVydGljYWwgaXMtbm90aWZpY2F0aW9uLXRpbGUgaXMtbm90LWZvdW5kLXRpbGUnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPSdleGNsYW1hdGlvbi1jaXJjbGUnIHNpemU9JzJ4JyAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RpdGxlJz40MDQgTm90IEZvdW5kPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3N1YnRpdGxlJz5UaGUgcmVxdWVzdGVkIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xyXG4iLCJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGRldmljZSBmcm9tICcuLi8uLi9jb25maWcvZGV2aWNlLmNvbmZpZyc7XHJcblxyXG4vLyB0eXBlc1xyXG50eXBlIE91ckNsaWVudHNQcm9wcyA9IHtcclxuICBtaW5pbWFsPzogYm9vbGVhbjtcclxuICBjbGllbnRUeXBlPzogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkQ29sdW1uID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAwIDJlbTtcclxuYDtcclxuXHJcbmNvbnN0IE5leHRTbGlkZUxpbmsgPSBzdHlsZWQuYS5hdHRycygoKSA9PiAoe1xyXG4gIHJvbGU6ICdidXR0b24nLFxyXG4gICdhcmlhLWxhYmVsJzogJ05leHQnXHJcbn0pKWBcclxuICB3aWR0aDogMy41cmVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIHJpZ2h0OiAxLjI1cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMzcsIDQwLCA0Nyk7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAwcHggMjBweDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZSwgYm90dG9tIDAuNHMgZWFzZTtcclxuICB0b3A6ICR7KHByb3BzOiBPdXJDbGllbnRzUHJvcHMpID0+IHByb3BzLm1pbmltYWwgPyAnMTAlJyA6ICcxOCUnfTtcclxuICBvcGFjaXR5OiAwLjU7XHJcblxyXG4gIEBtZWRpYSAke2RldmljZS50YWJsZXR9IHtcclxuICAgIHRvcDogJHsocHJvcHM6IE91ckNsaWVudHNQcm9wcykgPT4gcHJvcHMubWluaW1hbCA/ICcyOCUnIDogJzUyJSd9O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEFuZ2xlUmlnaHRJY29uID0gc3R5bGVkKEZvbnRBd2Vzb21lSWNvbilgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxLjc1ZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjFyZW07XHJcbiAgbWFyZ2luOiAwLjc1cmVtIGF1dG8gYXV0byBhdXRvO1xyXG5gO1xyXG5cclxuZXhwb3J0IHsgU3R5bGVkQ29sdW1uLCBOZXh0U2xpZGVMaW5rLCBBbmdsZVJpZ2h0SWNvbiB9O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IENsaWVudHNCYW5uZXJDb25maWcsIENsaWVudHNCYW5uZXJQYW5lbENvbmZpZywgQ2xpZW50c0xvZ29zIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NsaWVudHMtYmFubmVyLmNvbmZpZyc7XHJcbmltcG9ydCB7IFN0eWxlZENvbHVtbiwgTmV4dFNsaWRlTGluaywgQW5nbGVSaWdodEljb24gfSBmcm9tICcuL291ci1jbGllbnRzLnN0eWxlJztcclxuXHJcbmNvbnN0IE91clNlcnZpY2VzSW1nID0gJy9pbWcvY291cnQtb3JkZXItc2VydmluZy1iZWRmb3JkLnBuZyc7XHJcblxyXG4vLyB0eXBlc1xyXG50eXBlIE91ckNsaWVudHNQcm9wcyA9IHtcclxuICBtaW5pbWFsPzogYm9vbGVhbjtcclxuICBjbGllbnRUeXBlPzogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgY2xpZW50c1NsaWRlc0NvbnRlbnQgPSAocHJvcHMsIHNob3dMb2NhbEF1dGg/LCBzaG93TGF3UHJhY3Rpc2VzPykgPT4ge1xyXG4gIGNvbnN0IGNsaWVudFR5cGUgPSBwcm9wcy5jbGllbnRUeXBlO1xyXG4gIGxldCBodG1sID0gW107XHJcblxyXG4gIGNvbnN0IGNsaWVudHNMb2dvc0NvbnRlbnQgPSAocGFuZWw6IENsaWVudHNCYW5uZXJQYW5lbENvbmZpZykgPT4ge1xyXG4gICAgbGV0IGNsaWVudHNMb2dvc0h0bWwgPSBbXTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhDbGllbnRzTG9nb3MpLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgQ2xpZW50TG9nbyA9IENsaWVudHNMb2dvc1t2YWxdO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgICgocGFuZWwuY2xpZW50VHlwZSAmJiBDbGllbnRMb2dvLnR5cGUgPT09IHBhbmVsLmNsaWVudFR5cGUpXHJcbiAgICAgICAgfHwgKHBhbmVsLnJlZ2lvbiAmJiBDbGllbnRMb2dvLnJlZ2lvbi5pbmNsdWRlcyhwYW5lbC5yZWdpb24pKSlcclxuICAgICAgICAmJiAoKGNsaWVudFR5cGUgPT09ICdkZWZhdWx0JyAmJiBDbGllbnRMb2dvLmRlZmF1bHQpXHJcbiAgICAgICAgICB8fCBjbGllbnRUeXBlICE9PSAnZGVmYXVsdCcpXHJcbiAgICAgICAgJiYgY2xpZW50c0xvZ29zSHRtbC5sZW5ndGggPCA1XHJcbiAgICAgICkge1xyXG4gICAgICAgIGNsaWVudHNMb2dvc0h0bWwucHVzaChcclxuICAgICAgICAgIDxTdHlsZWRDb2x1bW4ga2V5PXtDbGllbnRMb2dvLmltYWdlVXJsfSBjbGFzc05hbWU9J2NvbHVtbiBoYXMtdGV4dC1jZW50ZXJlZCc+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgL2ltZy9jbGllbnQtbG9nb3MvJHtDbGllbnRMb2dvLmltYWdlVXJsfWB9IGFsdD17Q2xpZW50TG9nby5hbHRUYWd9Lz5cclxuICAgICAgICAgIDwvU3R5bGVkQ29sdW1uPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjbGllbnRzTG9nb3NIdG1sO1xyXG4gIH07XHJcblxyXG4gIENsaWVudHNCYW5uZXJDb25maWdbY2xpZW50VHlwZV0ucGFuZWxzLmZvckVhY2goKHBhbmVsLCBpbmRleCkgPT4ge1xyXG4gICAgaHRtbC5wdXNoKFxyXG4gICAgPGRpdiBrZXk9e3BhbmVsLmNsaWVudFR5cGUgfHwgcGFuZWwucmVnaW9ufVxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xyXG4gICAgICAgICdmYWRlSW4tYW5pbWF0aW9uJzogQ2xpZW50c0Jhbm5lckNvbmZpZ1tjbGllbnRUeXBlXS5wYW5lbHMubGVuZ3RoID4gMSxcclxuICAgICAgICAnc2hvdyc6IChDbGllbnRzQmFubmVyQ29uZmlnW2NsaWVudFR5cGVdLnBhbmVscy5sZW5ndGggPiAxICYmIGluZGV4ID09PSAwKSA/IHNob3dMb2NhbEF1dGguY3VycmVudCA9PT0gJ3Nob3cnIDogc2hvd0xhd1ByYWN0aXNlcy5jdXJyZW50ID09PSAnc2hvdycsXHJcbiAgICAgICAgJ2hpZGUnOiAoQ2xpZW50c0Jhbm5lckNvbmZpZ1tjbGllbnRUeXBlXS5wYW5lbHMubGVuZ3RoID4gMSAmJiBpbmRleCA9PT0gMSkgPyBzaG93TGF3UHJhY3Rpc2VzLmN1cnJlbnQgPT09ICdoaWRlJyA6IHNob3dMb2NhbEF1dGguY3VycmVudCA9PT0gJ2hpZGUnLFxyXG4gICAgICB9KX1cclxuICAgID5cclxuICAgICAgeygoKSA9PiB7IFxyXG4gICAgICAgIGlmIChwcm9wcy5taW5pbWFsICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndGl0bGUgc21hbGwtdGl0bGUnPlxyXG4gICAgICAgICAgICB7cGFuZWwuY2xpZW50VHlwZSA9PT0gJ2xvY2FsLWF1dGhvcml0eScgPyAnTG9jYWwgQXV0aG9yaXRpZXMnIDogJ0xhdyBQcmFjdGlzZXMgJiBTb2xpY2l0b3JzJ31cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSgpfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucyBpcy10YWJsZXQnPlxyXG4gICAgICAgIHtjbGllbnRzTG9nb3NDb250ZW50KHBhbmVsKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBodG1sO1xyXG59O1xyXG5cclxuY29uc3QgT3VyQ2xpZW50cyA9IChwcm9wczogT3VyQ2xpZW50c1Byb3BzKSA9PiB7XHJcbiAgY29uc3Qgc2hvd0xvY2FsQXV0aCA9IHVzZVJlZjxzdHJpbmc+KCdzaG93Jyk7XHJcbiAgY29uc3Qgc2hvd0xhd1ByYWN0aXNlcyA9IHVzZVJlZjxzdHJpbmc+KCdoaWRlJyk7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoc2hvd0xvY2FsQXV0aC5jdXJyZW50ID09PSAnc2hvdycpIHtcclxuICAgICAgc2hvd0xvY2FsQXV0aC5jdXJyZW50ID0gJ2hpZGUnO1xyXG4gICAgICBzaG93TGF3UHJhY3Rpc2VzLmN1cnJlbnQgPSAnc2hvdyc7XHJcbiAgICB9IGVsc2UgaWYgKHNob3dMb2NhbEF1dGguY3VycmVudCA9PT0gJ2hpZGUnKSB7XHJcbiAgICAgIHNob3dMb2NhbEF1dGguY3VycmVudCA9ICdzaG93JztcclxuICAgICAgc2hvd0xhd1ByYWN0aXNlcy5jdXJyZW50ID0gJ2hpZGUnO1xyXG4gICAgfVxyXG4gICAgc2V0U2hvdyghc2hvdyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW5zJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbicgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxyXG4gICAgICAgIHtwcm9wcy5taW5pbWFsID8gJycgOiA8aDMgY2xhc3NOYW1lPSd0aXRsZSBsYXJnZS10aXRsZSc+T3VyIENsaWVudHM8L2gzPn1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCBjbGllbnRzLXNsaWRlcyc+XHJcbiAgICAgICAgICB7Y2xpZW50c1NsaWRlc0NvbnRlbnQocHJvcHMsIHNob3dMb2NhbEF1dGgsIHNob3dMYXdQcmFjdGlzZXMpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsoKCkgPT4geyBcclxuICAgICAgICAgIGlmIChDbGllbnRzQmFubmVyQ29uZmlnW3Byb3BzLmNsaWVudFR5cGVdLnBhbmVscy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPE5leHRTbGlkZUxpbmtcclxuICAgICAgICAgICAgICAgIG1pbmltYWw9e3Byb3BzLm1pbmltYWx9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuZXh0U2xpZGUoKX0+XHJcbiAgICAgICAgICAgICAgICA8QW5nbGVSaWdodEljb24gaWNvbj0nYW5nbGUtcmlnaHQnIC8+XHJcbiAgICAgICAgICAgICAgPC9OZXh0U2xpZGVMaW5rPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkoKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuT3VyQ2xpZW50cy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbWluaW1hbDogZmFsc2UsXHJcbiAgY2xpZW50VHlwZTogJ2RlZmF1bHQnXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdXJDbGllbnRzO1xyXG4iLCJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFN0eWxlZFByb21pc2VUaWNrSWNvbiA9IHN0eWxlZChGb250QXdlc29tZUljb24pYFxyXG4gIGNvbG9yOiAjMzI3M2RjO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuYDtcclxuXHJcbmV4cG9ydCB7IFN0eWxlZFByb21pc2VUaWNrSWNvbiB9O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgU3R5bGVkUHJvbWlzZVRpY2tJY29uIH0gZnJvbSAnLi9vdXItcHJvbWlzZS1iYW5uZXIuc3R5bGUnO1xyXG5cclxuY29uc3QgT3VyUHJvbWlzZSA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucyc+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgb3VyLXByb21pc2UnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWNvbnRlbnQnPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGl0bGUnPk91ciBQcm9taXNlIHRvIE91ciBDbGllbnRzPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbnMnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgPHA+PFN0eWxlZFByb21pc2VUaWNrSWNvbiBpY29uPSdjaGVjaycgLz5UbyBzZXJ2ZSB5b3VyIGRvY3VtZW50cyBwcm9tcHRseSBhbmQgaW4gYWNjb3JkYW5jZSB3aXRoIGFsbCBDUFIgcnVsZXMuPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgPHA+PFN0eWxlZFByb21pc2VUaWNrSWNvbiBpY29uPSdjaGVjaycgLz5UbyBzZXJ2ZSB0aGUgcGFwZXJzIGluIGFjY29yZGluZyB3aXRoIHlvdXIgc3BlY2lhbCBpbnN0cnVjdGlvbnMuPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbnMnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgPHA+PFN0eWxlZFByb21pc2VUaWNrSWNvbiBpY29uPSdjaGVjaycgLz5UbyBlbnN1cmUgYWxsIERhdGEgUHJvdGVjdGlvbiBhbmQgSHVtYW4gUmlnaHRzIGxlZ2lzbGF0aW9uIGlzIGFkaGVyZWQgdG8uPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgPHA+PFN0eWxlZFByb21pc2VUaWNrSWNvbiBpY29uPSdjaGVjaycgLz5UbyBrZWVwIHlvdSB1cGRhdGVkIGFuZCBhZHZpc2UgeW91IHdoZW4gc2VydmljZSBoYXMgYmVlbiBjb21wbGV0ZWQuPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbnMnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgPHA+PFN0eWxlZFByb21pc2VUaWNrSWNvbiBpY29uPSdjaGVjaycgLz5UbyBtb25pdG9yIGFsbCBjYXNlcyB3ZSBhcmUgZGVhbGluZyB3aXRoIGFuZCBlbnN1cmUgdGhleSBhcmUgcmV0dXJuZWQgdG8geW91IG9uIHRpbWUuPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgPHA+PFN0eWxlZFByb21pc2VUaWNrSWNvbiBpY29uPSdjaGVjaycgLz5UbyBlbnN1cmUgdGhhdCBhbGwgc3RhdGVtZW50cyBvciBhZmZhZGF2aXRzIGFyZSBjb21wbGV0ZWQgY29ycmVjdGx5LjwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE91clByb21pc2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG50eXBlIFNlb1Byb3BzID0ge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBjYW5vbmljYWw/OiBzdHJpbmc7XHJcbiAgY3NzPzogc3RyaW5nO1xyXG4gIGpzPzogc3RyaW5nO1xyXG4gIGltYWdlPzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFTzogUmVhY3QuRkM8U2VvUHJvcHM+ID0gKHtcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBjYW5vbmljYWwsXHJcbiAgY3NzLFxyXG4gIGpzLFxyXG4gIGltYWdlLFxyXG59KSA9PiAoXHJcbiAgPEhlYWQ+XHJcbiAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICAgIDxtZXRhXHJcbiAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsbWluaW11bS1zY2FsZT0xLGluaXRpYWwtc2NhbGU9MVwiXHJcbiAgICAvPlxyXG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgPG1ldGFcclxuICAgICAgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufVxyXG4gICAgLz5cclxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIlByb3BlciBOb3VuXCIgLz5cclxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17YCR7Y2Fub25pY2FsfWB9IC8+XHJcbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxyXG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBwcm9wZXJub3VuY29cIiAvPlxyXG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJAcHJvcGVybm91bmNvXCIgLz5cclxuICAgIHtjc3MgJiYgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e2Ake2Nzc31gfSAvPn1cclxuICAgIHtpbWFnZSA/IChcclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Ake2ltYWdlfWB9IC8+XHJcbiAgICApIDogKFxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgIGNvbnRlbnQ9XCJodHRwczovL3d3dy5wcm9wZXJub3VuLmNvL3N0YXRpYy9pbWFnZXMvcHJvcGVyLW5vdW4tc29jaWFsLnBuZ1wiXHJcbiAgICAgIC8+XHJcbiAgICApfVxyXG4gICAge2ltYWdlICYmIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17YCR7aW1hZ2V9YH0gLz59XHJcbiAgICB7Y2Fub25pY2FsICYmIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Ake2Nhbm9uaWNhbH1gfSAvPn1cclxuICAgIHtqcyAmJiA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9e2Ake2pzfWB9Pjwvc2NyaXB0Pn1cclxuICA8L0hlYWQ+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU2VydmljZUluZm8gfSBmcm9tICcuLi8uLi9jb25maWcvc2VydmljZXMuY29uZmlnJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuXHJcbnR5cGUgU2VydmljZUxpc3RQcm9wcyA9IHtcclxuICByZWFkb25seSBzZXJ2aWNlTGlzdDogU2VydmljZUluZm9bXTtcclxufTtcclxuXHJcbmNvbnN0IFNlcnZpY2VMaXN0ID0gUmVhY3QubWVtbzxTZXJ2aWNlTGlzdFByb3BzPigoeyBzZXJ2aWNlTGlzdCB9KSA9PiAoXHJcbiAgPEZyYWdtZW50PlxyXG4gICAge3NlcnZpY2VMaXN0Lm1hcCgoeyBkZXNjcmlwdGlvbiB9OiBTZXJ2aWNlSW5mbywgaW5kZXg6IG51bWJlcikgPT4gKFxyXG4gICAgICAgIDxoMiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J3N1YnRpdGxlJz5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj0nY2hlY2snIC8+XHJcbiAgICAgICAgICB7YCAke2Rlc2NyaXB0aW9ufSBgfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgIClcclxuICAgICl9XHJcbiAgPC9GcmFnbWVudD5cclxuKSk7XHJcblxyXG5TZXJ2aWNlTGlzdC5kaXNwbGF5TmFtZSA9ICdTZXJ2aWNlTGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlTGlzdDsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGRldmljZSBmcm9tICcuLi8uLi9jb25maWcvZGV2aWNlLmNvbmZpZyc7XHJcblxyXG5jb25zdCBTaWx2ZXJCYW5uZXJPdXRlciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogI0Y5RjlGOTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YzZjNmMztcclxuICBwYWRkaW5nOiAyNXB4IDAgMDtcclxuYDtcclxuXHJcbmNvbnN0IFNpbHZlckJhbm5lcklubmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgQG1lZGlhICR7ZGV2aWNlLmxhcHRvcH0ge1xyXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke2RldmljZS5sYXB0b3BMfSB7XHJcbiAgICBtYXgtd2lkdGg6IDExNTJweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke2RldmljZS5sYXB0b3BYTH0ge1xyXG4gICAgbWF4LXdpZHRoOiAxMzQ0cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IHsgU2lsdmVyQmFubmVyT3V0ZXIsIFNpbHZlckJhbm5lcklubmVyIH07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBTaWx2ZXJCYW5uZXJPdXRlciwgU2lsdmVyQmFubmVySW5uZXIgfSBmcm9tICcuL3NpbHZlci1iYW5uZXIuc3R5bGUnO1xyXG5cclxuY29uc3QgU2lsdmVyQmFubmVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2lsdmVyQmFubmVyT3V0ZXIgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9PlxyXG4gICAgICA8U2lsdmVyQmFubmVySW5uZXI+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L1NpbHZlckJhbm5lcklubmVyPlxyXG4gICAgPC9TaWx2ZXJCYW5uZXJPdXRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lsdmVyQmFubmVyO1xyXG4iLCJleHBvcnQgdHlwZSBDbGllbnRMb2dvSW5mbyA9IHtcclxuICByZWFkb25seSBpbWFnZVVybDogc3RyaW5nO1xyXG4gIHJlYWRvbmx5IGFsdFRhZzogc3RyaW5nO1xyXG4gIHJlYWRvbmx5IHJlZ2lvbjogc3RyaW5nW107XHJcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xyXG4gIHJlYWRvbmx5IGRlZmF1bHQ/OiBib29sZWFuO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgQ2xpZW50c0Jhbm5lclBhbmVsQ29uZmlnID0ge1xyXG4gIHJlYWRvbmx5IGNsaWVudFR5cGU/OiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgcmVnaW9uPzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgQ2xpZW50c0Jhbm5lckNvbmZpZyA9IHtcclxuICBwYW5lbHM6IENsaWVudHNCYW5uZXJQYW5lbENvbmZpZ1tdO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaWVudHNMb2dvcyA9IE9iamVjdC5mcmVlemU8UmVjb3JkPHN0cmluZywgQ2xpZW50TG9nb0luZm8+Pih7XHJcbiAgYmVkZm9yZENvdW5jaWw6IHtcclxuICAgIGltYWdlVXJsOiAnYmVkZm9yZC1ib3JvdWdoLWNvdW5jaWwtY2xpZW50LWxvZ28ucG5nJyxcclxuICAgIGFsdFRhZzogJ0JlZGZvcmQgQm9yb3VnaCBDb3VuY2lsIExvZ28nLFxyXG4gICAgcmVnaW9uOiBbJ2JlZGZvcmRzaGlyZSddLFxyXG4gICAgdHlwZTogJ2xvY2FsLWF1dGhvcml0eScsXHJcbiAgICBkZWZhdWx0OiB0cnVlXHJcbiAgfSxcclxuICBib2x0b25Db3VuY2lsOiB7XHJcbiAgICBpbWFnZVVybDogJ2JvbHRvbi1jb3VuY2lsLWNsaWVudC1sb2dvLnBuZycsXHJcbiAgICBhbHRUYWc6ICdCb2x0b24gQ291bmNpbCBMb2dvJyxcclxuICAgIHJlZ2lvbjogWydzdXJyb3VuZGluZyddLFxyXG4gICAgdHlwZTogJ2xvY2FsLWF1dGhvcml0eScsXHJcbiAgICBkZWZhdWx0OiB0cnVlXHJcbiAgfSxcclxuICBwb3d5c0NvdW5jaWw6IHtcclxuICAgIGltYWdlVXJsOiAncG93eXMtY291bnR5LWNvdW5jaWwtd2FsZXMtY2xpZW50LWxvZ28ucG5nJyxcclxuICAgIGFsdFRhZzogJ1Bvd3lzIENvdW50eSBDb3VuY2lsIChpbiBXYWxlcykgTG9nbycsXHJcbiAgICByZWdpb246IFsnc3Vycm91bmRpbmcnXSxcclxuICAgIHR5cGU6ICdsb2NhbC1hdXRob3JpdHknLFxyXG4gICAgZGVmYXVsdDogdHJ1ZVxyXG4gIH0sXHJcbiAgbWlsdG9uS2V5bmVzQ291bmNpbDoge1xyXG4gICAgaW1hZ2VVcmw6ICdtaWx0b24ta2V5bmVzLWNvdW5jaWwtY2xpZW50LWxvZ28ucG5nJyxcclxuICAgIGFsdFRhZzogJ01pbHRvbiBLZXluZXMgQ291bmNpbCcsXHJcbiAgICByZWdpb246IFsnYnVja2luZ2hhbXNoaXJlJ10sXHJcbiAgICB0eXBlOiAnbG9jYWwtYXV0aG9yaXR5JyxcclxuICAgIGRlZmF1bHQ6IHRydWVcclxuICB9LFxyXG4gIGNhbWJyaWRnZUxhd1ByYWN0aXNlOiB7XHJcbiAgICBpbWFnZVVybDogJ2NhbWJyaWRnZS1mYW1pbHktbGF3LXByYWN0aXNlLWNsaWVudC1sb2dvLnBuZycsXHJcbiAgICBhbHRUYWc6ICdDYW1icmlkZ2UgRmFtaWx5IExhdyBQcmFjdGlzZSBMb2dvJyxcclxuICAgIHJlZ2lvbjogWydjYW1icmlkZ2VzaGlyZSddLFxyXG4gICAgdHlwZTogJ2xlZ2FsLXByYWN0aXNlJyxcclxuICAgIGRlZmF1bHQ6IHRydWVcclxuICB9LFxyXG4gIGZ1bGxlcnM6IHtcclxuICAgIGltYWdlVXJsOiAnZnVsbGVycy1zb2xpY2l0b3JzLWJlZGZvcmQtY2xpZW50LWxvZ28ucG5nJyxcclxuICAgIGFsdFRhZzogJ0Z1bGxlcnMgU29saWNpdG9ycyAoaW4gQmVkZm9yZCkgTG9nbycsXHJcbiAgICByZWdpb246IFsnYmVkZm9yZHNoaXJlJ10sXHJcbiAgICB0eXBlOiAnbGVnYWwtcHJhY3Rpc2UnLFxyXG4gICAgZGVmYXVsdDogdHJ1ZVxyXG4gIH0sXHJcbiAga2VubmVkeXM6IHtcclxuICAgIGltYWdlVXJsOiAnS2VubmVkeXMtbGF3LXNvbGljaXRvcnMtY2FtYnJpZGdlLWFuZC1sb25kb24tY2xpZW50LWxvZ28ucG5nJyxcclxuICAgIGFsdFRhZzogJ0tlbm5lZHlzIExhdyAoc2VydmljaW5nIENhbWJyaWRnZSAmYW1wOyBMb25kb24pIExvZ28nLFxyXG4gICAgcmVnaW9uOiBbJ2NhbWJyaWRnZXNoaXJlJywgJ3N1cnJvdW5kaW5nJ10sXHJcbiAgICB0eXBlOiAnbGVnYWwtcHJhY3Rpc2UnLFxyXG4gICAgZGVmYXVsdDogdHJ1ZVxyXG4gIH0sXHJcbiAgd2F0c29uczoge1xyXG4gICAgaW1hZ2VVcmw6ICd3YXRzb25zLXNvbGljaXRvcnMtd2FycmluZ3Rvbi1jbGllbnQtbG9nby5wbmcnLFxyXG4gICAgYWx0VGFnOiAnV2F0c29ucyBTb2xpY2l0b3JzIChpbiBXYXJyaW5ndG9uKSBMb2dvJyxcclxuICAgIHJlZ2lvbjogWydjYW1icmlkZ2VzaGlyZSddLFxyXG4gICAgdHlwZTogJ2xlZ2FsLXByYWN0aXNlJyxcclxuICAgIGRlZmF1bHQ6IHRydWVcclxuICB9LFxyXG4gIHJheUJvcmxleToge1xyXG4gICAgaW1hZ2VVcmw6ICdyYXktYm9ybGV5LWR1bmtsZXktbGxwLW1pbHRvbi1rZXluZXMtY2xpZW50LWxvZ28ucG5nJyxcclxuICAgIGFsdFRhZzogJ1JheSBCb3JsZXkgRHVua2xleSBMTFAgQ2xpZW50IChNaWx0b24gS2V5bmVzKSBMb2dvJyxcclxuICAgIHJlZ2lvbjogWydidWNraW5naGFtc2hpcmUnXSxcclxuICAgIHR5cGU6ICdsZWdhbC1wcmFjdGlzZSdcclxuICB9LFxyXG4gIGRhdmlkc29uU21pdGg6IHtcclxuICAgIGltYWdlVXJsOiAnZGF2aWRzb24tc21pdGgtY2xpZW50LWxvZ28ucG5nJyxcclxuICAgIGFsdFRhZzogJ0Rhdmlkc29uIFNtaXRoICYgQ28gQ2xpZW50IChNaWx0b24gS2V5bmVzKSBMb2dvJyxcclxuICAgIHJlZ2lvbjogWydiZWRmb3Jkc2hpcmUnXSxcclxuICAgIHR5cGU6ICdsZWdhbC1wcmFjdGlzZSdcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaWVudHNCYW5uZXJDb25maWcgPSBPYmplY3QuZnJlZXplPFJlY29yZDxzdHJpbmcsIENsaWVudHNCYW5uZXJDb25maWc+Pih7XHJcbiAgJ2RlZmF1bHQnOiB7XHJcbiAgICBwYW5lbHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNsaWVudFR5cGU6ICdsb2NhbC1hdXRob3JpdHknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbGllbnRUeXBlOiAnbGVnYWwtcHJhY3Rpc2UnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gICdiZWRmb3Jkc2hpcmUtY2xpZW50cyc6IHtcclxuICAgIHBhbmVsczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcmVnaW9uOiAnYmVkZm9yZHNoaXJlJ1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICAnYnVja2luZ2hhbXNoaXJlLWNsaWVudHMnOiB7XHJcbiAgICBwYW5lbHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHJlZ2lvbjogJ2J1Y2tpbmdoYW1zaGlyZSdcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgJ2NhbWJyaWRnZXNoaXJlLWNsaWVudHMnOiB7XHJcbiAgICBwYW5lbHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHJlZ2lvbjogJ2NhbWJyaWRnZXNoaXJlJ1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICAnY2xpZW50cy1pbi1zdXJyb3VuZGluZy1hcmVhcyc6IHtcclxuICAgIHBhbmVsczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcmVnaW9uOiAnc3Vycm91bmRpbmcnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gICdsb2NhbC1hdXRob3JpdHktY2xpZW50cyc6IHtcclxuICAgIHBhbmVsczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY2xpZW50VHlwZTogJ2xvY2FsLWF1dGhvcml0eSdcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgJ2xlZ2FsLXByYWN0aXNlLWNsaWVudHMnOiB7XHJcbiAgICBwYW5lbHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNsaWVudFR5cGU6ICdsZWdhbC1wcmFjdGlzZSdcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxufSk7IiwiY29uc3Qgc2l6ZSA9IHtcclxuICAgIG1vYmlsZVM6ICczMjBweCcsXHJcbiAgICBtb2JpbGVNOiAnMzc1cHgnLFxyXG4gICAgbW9iaWxlTDogJzQyNXB4JyxcclxuICAgIHRhYmxldDogJzc2OHB4JyxcclxuICAgIGxhcHRvcDogJzEwMjRweCcsXHJcbiAgICBsYXB0b3BMOiAnMTIxNnB4JyxcclxuICAgIGxhcHRvcFhMOiAnMTQwOHB4JyxcclxuICAgIGRlc2t0b3A6ICcyNTYwcHgnXHJcbn07XHJcblxyXG5jb25zdCBkZXZpY2UgPSB7XHJcbiAgICBtb2JpbGVTOiBgKG1pbi13aWR0aDogJHtzaXplLm1vYmlsZVN9KWAsXHJcbiAgICBtb2JpbGVNOiBgKG1pbi13aWR0aDogJHtzaXplLm1vYmlsZU19KWAsXHJcbiAgICBtb2JpbGVMOiBgKG1pbi13aWR0aDogJHtzaXplLm1vYmlsZUx9KWAsXHJcbiAgICB0YWJsZXQ6IGAobWluLXdpZHRoOiAke3NpemUudGFibGV0fSlgLFxyXG4gICAgbGFwdG9wOiBgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcH0pYCxcclxuICAgIGxhcHRvcEw6IGAobWluLXdpZHRoOiAke3NpemUubGFwdG9wTH0pYCxcclxuICAgIGxhcHRvcFhMOiBgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcFhMfSlgLFxyXG4gICAgZGVza3RvcDogYChtaW4td2lkdGg6ICR7c2l6ZS5kZXNrdG9wfSlgLFxyXG4gICAgZGVza3RvcEw6IGAobWluLXdpZHRoOiAke3NpemUuZGVza3RvcH0pYFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGV2aWNlOyIsImltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBmYUNoZWNrLFxyXG4gIGZhQXQsXHJcbiAgZmFQaG9uZSxcclxuICBmYU1vYmlsZSxcclxuICBmYUVudmVsb3BlLFxyXG4gIGZhQWRkcmVzc0Jvb2ssXHJcbiAgZmFCYXJzLFxyXG4gIGZhVXNlcixcclxuICBmYUluZm9DaXJjbGUsXHJcbiAgZmFBbmdsZURvdWJsZVVwLFxyXG4gIGZhQW5nbGVSaWdodCxcclxuICBmYUV4dGVybmFsTGlua0FsdCxcclxuICBmYUV4Y2xhbWF0aW9uQ2lyY2xlLFxyXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGZhUmVhY3QsXHJcbiAgZmFHaXRodWIsXHJcbiAgZmFNZWRpdW1NLFxyXG4gIGZhVHdpdHRlcixcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuXHJcbmxpYnJhcnkuYWRkKFxyXG4gIGZhQ2hlY2ssXHJcbiAgZmFBdCxcclxuICBmYVBob25lLFxyXG4gIGZhTW9iaWxlLFxyXG4gIGZhRW52ZWxvcGUsXHJcbiAgZmFBZGRyZXNzQm9vayxcclxuICBmYUJhcnMsXHJcbiAgZmFVc2VyLFxyXG4gIGZhUmVhY3QsXHJcbiAgZmFHaXRodWIsXHJcbiAgZmFNZWRpdW1NLFxyXG4gIGZhVHdpdHRlcixcclxuICBmYUluZm9DaXJjbGUsXHJcbiAgZmFBbmdsZURvdWJsZVVwLFxyXG4gIGZhQW5nbGVSaWdodCxcclxuICBmYUV4dGVybmFsTGlua0FsdCxcclxuICBmYUV4Y2xhbWF0aW9uQ2lyY2xlLFxyXG4pO1xyXG4iLCJpbXBvcnQgeyBJY29uUHJvcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XHJcblxyXG5leHBvcnQgdHlwZSBSb3V0ZSA9IHtcclxuICByZWFkb25seSBwYXRoOiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgaWNvbjogSWNvblByb3A7XHJcbiAgcmVhZG9ubHkgZXhhY3Q/OiBib29sZWFuO1xyXG4gIHJlYWRvbmx5IGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgYWN0aXZlQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgbWV0YUluZm86IHtcclxuICAgIHJlYWRvbmx5IHRpdGxlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUm91dGVzQ29uZmlnID0gT2JqZWN0LmZyZWV6ZTxSZWNvcmQ8c3RyaW5nLCBSb3V0ZT4+KHtcclxuICBIb21lOiB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBleGFjdDogdHJ1ZSxcclxuICAgIGRpc3BsYXlOYW1lOiAnSG9tZScsXHJcbiAgICBhY3RpdmVDbGFzc05hbWU6ICdpcy1hY3RpdmUnLFxyXG4gICAgaWNvbjogJ2hvbWUnLFxyXG4gICAgbWV0YUluZm86IHtcclxuICAgICAgdGl0bGU6ICdQcm9jZXNzIFNlcnZlciBCZWRmb3JkICZhbXA7IExvbmRvbiB8IExlZ2FsIFNlcnZlJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdCZWRmb3Jkc2hpcmUsIEJ1Y2tpbmdoYW1zaGlyZSAmYW1wOyBMb25kb24tYmFzZWQgcHJvY2VzcyBzZXJ2ZXIsIGxlZ2FsIGNvdXJpZXIgJmFtcDsgbGVnYWwgZG9jdW1lbnQgc2VydmVyLidcclxuICAgIH1cclxuICB9LFxyXG4gIFNlcnZpY2VzOiB7XHJcbiAgICBwYXRoOiAnL291ci1zZXJ2aWNlcycsXHJcbiAgICBleGFjdDogdHJ1ZSxcclxuICAgIGRpc3BsYXlOYW1lOiAnU2VydmljZXMnLFxyXG4gICAgYWN0aXZlQ2xhc3NOYW1lOiAnaXMtYWN0aXZlJyxcclxuICAgIGljb246ICdpbmZvJyxcclxuICAgIG1ldGFJbmZvOiB7XHJcbiAgICAgIHRpdGxlOiAnT3VyIFNlcnZpY2VzIHwgUHJvY2VzcyBTZXJ2aW5nLCBMZWdhbCBDb3VyaWVyIFNlcnZpY2VzJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdQcm9jZXNzIFNlcnZpbmcgJmFtcDsgTGVnYWwgQ291cmllciBTZXJ2aWNlcyBpbiBMb25kb24sIEJlZGZvcmRzaGlyZSAmYW1wOyBCdWNraW5naGFtc2hpcmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICAgIFByb2Nlc3NTZXJ2ZXJCZWRmb3JkOiB7XHJcbiAgICAgIHBhdGg6ICcvb3VyLXNlcnZpY2VzL3Byb2Nlc3Mtc2VydmVyLWJlZGZvcmQnLFxyXG4gICAgICBleGFjdDogdHJ1ZSxcclxuICAgICAgZGlzcGxheU5hbWU6ICdQcm9jZXNzIFNlcnZlciBCZWRmb3JkJyxcclxuICAgICAgYWN0aXZlQ2xhc3NOYW1lOiAnaXMtYWN0aXZlJyxcclxuICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICBtZXRhSW5mbzoge1xyXG4gICAgICAgIHRpdGxlOiAnT3VyIFNlcnZpY2VzIHwgUHJvY2VzcyBTZXJ2aW5nLCBMZWdhbCBDb3VyaWVyIFNlcnZpY2VzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2Nlc3MgU2VydmluZyAmYW1wOyBMZWdhbCBDb3VyaWVyIFNlcnZpY2VzIGluIExvbmRvbiwgQmVkZm9yZHNoaXJlICZhbXA7IEJ1Y2tpbmdoYW1zaGlyZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIExlZ2FsQ291cmllckJlZGZvcmQ6IHtcclxuICAgICAgcGF0aDogJy9vdXItc2VydmljZXMvbGVnYWwtY291cmllci1iZWRmb3JkJyxcclxuICAgICAgZXhhY3Q6IHRydWUsXHJcbiAgICAgIGRpc3BsYXlOYW1lOiAnTGVnYWwgQ291cmllciBCZWRmb3JkJyxcclxuICAgICAgYWN0aXZlQ2xhc3NOYW1lOiAnaXMtYWN0aXZlJyxcclxuICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICBtZXRhSW5mbzoge1xyXG4gICAgICAgIHRpdGxlOiAnT3VyIFNlcnZpY2VzIHwgUHJvY2VzcyBTZXJ2aW5nLCBMZWdhbCBDb3VyaWVyIFNlcnZpY2VzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2Nlc3MgU2VydmluZyAmYW1wOyBMZWdhbCBDb3VyaWVyIFNlcnZpY2VzIGluIExvbmRvbiwgQmVkZm9yZHNoaXJlICZhbXA7IEJ1Y2tpbmdoYW1zaGlyZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICBDb250YWN0OiB7XHJcbiAgICBwYXRoOiAnL2NvbnRhY3QtbGVnYWwtc2VydmUnLFxyXG4gICAgZXhhY3Q6IHRydWUsXHJcbiAgICBkaXNwbGF5TmFtZTogJ0NvbnRhY3QnLFxyXG4gICAgYWN0aXZlQ2xhc3NOYW1lOiAnaXMtYWN0aXZlJyxcclxuICAgIGljb246ICdpbmZvJyxcclxuICAgIG1ldGFJbmZvOiB7XHJcbiAgICAgIHRpdGxlOiAnUHJvY2VzcyBTZXJ2aW5nIEVucXVpcmllcyB8IENvbnRhY3QgTGVnYWwgU2VydmUgQmVkZm9yZCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRW5xdWlyZSBhYm91dCB5b3VyIG5leHQgUHJvY2VzcyBTZXJ2ZXIuJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgQ2xpZW50czoge1xyXG4gICAgcGF0aDogJy9vdXItY2xpZW50cycsXHJcbiAgICBleGFjdDogdHJ1ZSxcclxuICAgIGRpc3BsYXlOYW1lOiAnT3VyIENsaWVudHMnLFxyXG4gICAgYWN0aXZlQ2xhc3NOYW1lOiAnaXMtYWN0aXZlJyxcclxuICAgIGljb246ICdpbmZvJyxcclxuICAgIG1ldGFJbmZvOiB7XHJcbiAgICAgIHRpdGxlOiAnT3VyIENsaWVudHMgYWNyb3NzIEJlZGZvcmRzaGlyZSwgQnVja2luZ2hhbXNoaXJlICYgQ2FtYnJpZGdlc2hpcmUgfCBQcm9jZXNzIFNlcnZpbmcsIExlZ2FsIENvdXJpZXIgU2VydmljZXMnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1NlZSBvdXIgY2xpZW50cywgTG9jYWwgQXV0aG9yaXRpZXMgYW5kIExlZ2FsIFByYWN0aXNlcyByYW5naW5nIGFjcm9zcyBCZWRmb3Jkc2hpcmUsIEJ1Y2tpbmdoYW1zaGlyZSwgQ2FtYnJpZGdlc2hpcmUgJiBMb25kb24nXHJcbiAgICB9XHJcbiAgfSxcclxuICAgIENsaWVudFR5cGU6IHtcclxuICAgICAgcGF0aDogJy9vdXItY2xpZW50cy86Y2xpZW50VHlwZScsXHJcbiAgICAgIGV4YWN0OiB0cnVlLFxyXG4gICAgICBkaXNwbGF5TmFtZTogJ091ciBDbGllbnRzJyxcclxuICAgICAgYWN0aXZlQ2xhc3NOYW1lOiAnaXMtYWN0aXZlJyxcclxuICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICBtZXRhSW5mbzoge1xyXG4gICAgICAgIHRpdGxlOiAnT3VyIENsaWVudHMgYWNyb3NzIEJlZGZvcmRzaGlyZSwgQnVja2luZ2hhbXNoaXJlICYgQ2FtYnJpZGdlc2hpcmUgfCBQcm9jZXNzIFNlcnZpbmcsIExlZ2FsIENvdXJpZXIgU2VydmljZXMnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2VlIG91ciBjbGllbnRzLCBMb2NhbCBBdXRob3JpdGllcyBhbmQgTGVnYWwgUHJhY3Rpc2VzIHJhbmdpbmcgYWNyb3NzIEJlZGZvcmRzaGlyZSwgQnVja2luZ2hhbXNoaXJlLCBDYW1icmlkZ2VzaGlyZSAmIExvbmRvbidcclxuICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIiwiZXhwb3J0IHR5cGUgU2VydmljZUluZm8gPSB7XHJcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb246IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXJ2aWNlSW5mb0NvbmZpZyA9IE9iamVjdC5mcmVlemU8UmVjb3JkPHN0cmluZywgU2VydmljZUluZm8+Pih7XHJcbiAgcHJvY2Vzc1NlcnZpbmc6IHtcclxuICAgIGRlc2NyaXB0aW9uOiAnUHJvZmVzc2lvbmFseSBoYW5kbGVkIGFuZCB0aW1lbHkgUHJvY2VzcyBTZXJ2aW5nJ1xyXG4gIH0sXHJcbiAgbGVnYWxDb3VyaWVyOiB7XHJcbiAgICBkZXNjcmlwdGlvbjogJ0xlZ2FsIGNvdXJpZXIgc2VydmljZXMgdGhhdCBhcmUgZmxleGlibGUgJiBhY2NvbW1vZGF0aW5nJ1xyXG4gIH0sXHJcbiAgcHJpdmFjeToge1xyXG4gICAgZGVzY3JpcHRpb246ICdHdWFyYW50ZWVkIHByaXZhY3kgYW5kIGNvbmZpZGVudGlhbGl0eSdcclxuICB9XHJcbn0pOyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2QmFyLCBCYWNrVG9Ub3AsIEZvb3RlciB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgTGF5b3V0OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgLy8gZGV2aWNlVHlwZTogeyBtb2JpbGUsIHRhYmxldCwgZGVza3RvcCB9LFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDxCYWNrVG9Ub3AgLz5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMsIE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IGV4ZWNPbmNlLCBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGgsIHJlc29sdmVIcmVmIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIGZyb20gdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IHBhZ2UgKGJyb3dzZXIgb25seSkuXG4gKi9cbmZ1bmN0aW9uIGlzTG9jYWwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpblxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIGlmIChcbiAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICBlLmN0cmxLZXkgfHxcbiAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICApIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZilcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgY2hpbGRFbG0gJiYgY2hpbGRFbG0udGFnTmFtZSkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgIGlmIChcbiAgICAgIGNoaWxkUHJvcHMuaHJlZiAmJlxuICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICApIHtcbiAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGNoaWxkUHJvcHMuaHJlZilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9zZWFyY2gtcGFyYW1zLXRvLXVybC1xdWVyeSdcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7XG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYmFzZVBhdGhcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgIDogZmluYWxVcmwuaHJlZlxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5UGFyc2VSZWxhdGl2ZVVybChcbiAgdXJsOiBzdHJpbmdcbik6IG51bGwgfCBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgX19OIH0gPSBlLnN0YXRlXG4gICAgaWYgKCFfX04pIHtcbiAgICAgIC8vIHRoaXMgaGlzdG9yeSBzdGF0ZSB3YXNuJ3QgY3JlYXRlZCBieSBuZXh0LmpzIHNvIGl0IGNhbiBiZSBpZ25vcmVkXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbEJhc2VQYXRoKGFzKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkID0gdHJ5UGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuIGZhbHNlXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChjbGVhbmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbylcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyhvcHRpb25zLl9OX1gsIG9wdGlvbnMuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyLCBlcnJvcjogZXJyIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICAgICAgKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICAgIH0gYXMgUm91dGVJbmZvKVxuICAgICAgICAgIClcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVyblxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZW5jb2RlIGFzIGVuY29kZVF1ZXJ5c3RyaW5nIH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gcXVlcnkgPSAnJyArIG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnkpO1xuICAgIHF1ZXJ5ID0gZW5jb2RlUXVlcnlzdHJpbmcocXVlcnkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJjb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTCgnaHR0cDovL24nKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG4gIE5leHRXZWJWaXRhbHNNZXRyaWMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB7IE5leHRXZWJWaXRhbHNNZXRyaWMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi90aGVtZSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2xheW91dHMvYXBwLWxheW91dCc7XHJcbmltcG9ydCAnLi4vYXNzZXRzL3N0eWxlL21haW4uc2Nzcyc7XHJcbmltcG9ydCAnLi4vY29uZmlnL2ZhLmNvbmZpZyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBEcmlmdCBmcm9tICdyZWFjdC1kcmlmdGpzJztcclxuIFxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMFwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICA8RHJpZnRcclxuICAgICAgICAgICAgYXBwSWQ9XCJnaWJicHQ2Zmk2cjVcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogJzhweCdcclxuICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiIsImNvbnN0IGNvbG9ycyA9IHtcclxuICBjb2xvckhlcm9Jc0Rhcms6ICcjMjgyYzM0JyxcclxuICBjb2xvck5hdkJhcjogJyMyMDIzMmEnLFxyXG4gIGNvbG9yQmx1ZUhpZ2hsaWdodDogJyM2MWRhZmInXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb2xvcnM7XHJcbiIsImltcG9ydCBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRoZW1lID0ge1xyXG4gIGNvbG9yc1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnlzdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZHJpZnRqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2Nyb2xsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9