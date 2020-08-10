module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/our-clients/[type].tsx");
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

/***/ "./config/client-type.config.ts":
/*!**************************************!*\
  !*** ./config/client-type.config.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ClientTypesConfig = {
  'bedfordshire-clients': {
    subtitle: 'Our Clients in Bedfordshire',
    content: `
      <p>Being that Legal Serve is based in Bedfordshire, we have always shared a strong relationship with our Bedford clients.</p>
      <p>Having worked closely with the Bedford Borough Council, as well as private legal practises such as Fullers Solicitors, we are well in tune with the various ways of working adopted by local authorities and private firms.</p>
    `
  },
  'buckinghamshire-clients': {
    subtitle: 'Our Clients in Buckinghamshire',
    content: `
      <p>Our clients in Buckinghamshire are primarily centered around Milton Keynes itself.</p>
      <p>The expansion of our services into Buckinghamshire was always a natural one, being the Buckinghamshire is a neighbouring region of our native Bedfordshire.</p>
      <p>We now offer a range of services to our Milton Keynes & Buckinghamshire-based clients, which range from Local Authorities to private legal practises.</p>
    `
  },
  'cambridgeshire-clients': {
    subtitle: 'Our Clients in Cambridgeshire',
    content: `
      <p>Our Cambridgeshire clients are predominantly based in the city of Cambridge itself, with the majority being private legal practises.</p>
      <p>Our existing local knowledge of the geography of Cambridgeshire has been a vital part of our success in the region, and is part of the reason our clients here choose us for their process serving and legal couriering needs.</p>
    `
  },
  'clients-in-surrounding-areas': {
    subtitle: 'Our Clients in surrounding areas',
    content: `
      <p>Legal Serve is proud to be able to say that it has provided services to clients from areas as far apart as Bolton, Warrington and Manchester.</p>
      <p>our flexibility has always made us a well-prepared and agile provider of Process Serving and Legal Courier services, in many parts of the country.</p>
    `
  },
  'local-authority-clients': {
    subtitle: 'Our Local Authority clients',
    content: `
      <p>Legal Serve have worked with Local Authorities that range from Bedford to as far as Wales (Powys) and Bolton.</p>
      <p>As a reputable process server and legal courier, we have always made it a priority to work to the most diligent of standards when performing our duties, particularly when it comes to data protection and confidentiality.</p>
      <p>In the past, our Local Authority clients have trusted us to facilitate and cater to a wide range of needs and requirements, including Court Orders.</p>
    `
  },
  'legal-practise-clients': {
    subtitle: 'Our Law Practise clients',
    content: `
      <p>We offer effective process server and legal support services to our clients, which include solicitors, lawyers, government departments &amp; many others in London, Bedfordshire, Buckinghamshire &amp; surrounding regions.</p>
      <p>Areas we Cover:</p>
      <ul>
        <li>London</li>
        <li>Bedfordshire</li>
        <li>Buckinghamshire</li>
        <li>Surrounding Boroughs / Regions</li>
      </ul>
    `
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ClientTypesConfig);

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

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/our-clients/[type].tsx":
/*!**************************************!*\
  !*** ./pages/our-clients/[type].tsx ***!
  \**************************************/
/*! exports provided: default, getStaticPaths, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./components/index.ts");
/* harmony import */ var _config_routes_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/routes.config */ "./config/routes.config.ts");
/* harmony import */ var _config_client_type_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/client-type.config */ "./config/client-type.config.ts");
var _jsxFileName = "C:\\Users\\Sabir\\Documents\\MyNyte Central\\Clients\\Client-Dev\\client-legal-serve\\pages\\our-clients\\[type].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const ProcessServerImg = '/img/process-serving-in-bedford.jpg';

function Client({
  clientType
}) {
  return __jsx("section", {
    className: "view-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["MetaInfo"], _extends({}, _config_routes_config__WEBPACK_IMPORTED_MODULE_3__["RoutesConfig"].Clients.metaInfo, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Hero"], {
    item: "ClientType",
    clientType: clientType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["SilverBanner"], {
    className: "is-hidden-mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["OurClients"], {
    minimal: true,
    clientType: clientType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx("section", {
    className: "container dashboard-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "columns",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, _config_client_type_config__WEBPACK_IMPORTED_MODULE_4__["default"][clientType].subtitle), __jsx("div", {
    className: "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "columns",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "column is-three-quarters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_1___default()(_config_client_type_config__WEBPACK_IMPORTED_MODULE_4__["default"][clientType].content)), __jsx("div", {
    className: "column is-one-quarter has-text-centered",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: ProcessServerImg,
    className: "float-right",
    alt: "Legal Support Services, including Court Order serving",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 19
    }
  })))))), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["OurPromise"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["InlineContactPanel"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Client);
async function getStaticPaths() {
  return {
    paths: Object.keys(_config_client_type_config__WEBPACK_IMPORTED_MODULE_4__["default"]).map(key => {
      return {
        params: {
          type: key
        }
      };
    }),
    fallback: false
  };
}
;
async function getStaticProps({
  params
}) {
  const clientType = params.type;
  return {
    props: {
      clientType
    }
  };
}
;

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

/***/ "html-react-parser":
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JhY2stdG8tdG9wL2JhY2stdG8tdG9wLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JhY2stdG8tdG9wL2JhY2stdG8tdG9wLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmQvY2FyZC5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkL2NhcmQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZXJvL2hlcm8udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmxpbmUtY29udGFjdC1wYW5lbC9pbmxpbmUtY29udGFjdC1wYW5lbC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYWluLWNvbnRhY3QtZm9ybS9tYWluLWNvbnRhY3QtZm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZXRhLWluZm8vbWV0YS1pbmZvLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXItbGluay9uYXZiYXItbGluay5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLWxpbmsvbmF2YmFyLWxpbmsudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3VyLWNsaWVudHMvb3VyLWNsaWVudHMuc3R5bGUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3VyLWNsaWVudHMvb3VyLWNsaWVudHMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3VyLXByb21pc2UtYmFubmVyL291ci1wcm9taXNlLWJhbm5lci5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vdXItcHJvbWlzZS1iYW5uZXIvb3VyLXByb21pc2UtYmFubmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Nlby9zZW8udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VydmljZS1saXN0L3NlcnZpY2UtbGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWx2ZXItYmFubmVyL3NpbHZlci1iYW5uZXIuc3R5bGUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2lsdmVyLWJhbm5lci9zaWx2ZXItYmFubmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb25maWcvY2xpZW50LXR5cGUuY29uZmlnLnRzIiwid2VicGFjazovLy8uL2NvbmZpZy9jbGllbnRzLWJhbm5lci5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2RldmljZS5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL3JvdXRlcy5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL3NlcnZpY2VzLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9zZWFyY2gtcGFyYW1zLXRvLXVybC1xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvb3VyLWNsaWVudHMvW3R5cGVdLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodG1sLXJlYWN0LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXVlcnlzdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ5dXBcIiJdLCJuYW1lcyI6WyJCYWNrVG9Ub3BMaW5rIiwic3R5bGVkIiwiYSIsImF0dHJzIiwicm9sZSIsInByb3BzIiwic2hvdyIsIkFuZ2xlRG91YmxlVXBJY29uIiwiRm9udEF3ZXNvbWVJY29uIiwic2Nyb2xsIiwiU2Nyb2xsIiwiYW5pbWF0ZVNjcm9sbCIsInNjcm9sbE9wdGlvbnMiLCJkZWxheSIsImR1cmF0aW9uIiwic21vb3RoIiwiQmFja1RvVG9wIiwic2hvd1JlZiIsInVzZVJlZiIsInNldFNob3ciLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbFRvVG9wIiwiU3R5bGVkQ2FyZCIsImRpdiIsImRhcmsiLCJob3Jpem9udGFsIiwiY2xhc3NOYW1lIiwidGhlbWUiLCJjb2xvcnMiLCJjb2xvckhlcm9Jc0RhcmsiLCJTdHlsZWRDYXJkSW1hZ2UiLCJTdHlsZWRDYXJkQ29udGVudCIsIkNhcmQiLCJpbWFnZSIsInNyYyIsImFsdCIsInRpdGxlIiwic2l6ZSIsImNvbnRlbnQiLCJjaGlsZHJlbiIsIkNhcmRJbWFnZSIsIkNhcmRDb250ZW50IiwiQ2FyZFRpdGxlIiwiZGVmYXVsdFByb3BzIiwiTWFpbkxvZ28iLCJGb290ZXIiLCJIZXJvIiwiSGVyb1Byb3BzIiwiSG9tZSIsIlNlcnZpY2VzIiwic3VtbWFyeSIsIlByb2Nlc3NTZXJ2ZXJCZWRmb3JkIiwiTGVnYWxDb3VyaWVyQmVkZm9yZCIsIkNvbnRhY3QiLCJDbGllbnRzIiwiQ2xpZW50VHlwZSIsInNlcnZpY2VMaXN0IiwidXNlTWVtbyIsIk9iamVjdCIsImtleXMiLCJTZXJ2aWNlSW5mb0NvbmZpZyIsIm1hcCIsImtleSIsInJlbmRlckhlcm9Db250ZW50IiwiaXRlbSIsImNsaWVudFR5cGUiLCJoZXJvQ29udGVudCIsIklubGluZUNvbnRhY3RQYW5lbCIsInZhbGlkRW1haWxSZWdleCIsIlJlZ0V4cCIsInZhbGlkUGhvbmVSZWdleCIsImNvbnRhY3RGb3JtVmFsaWRhdGlvblNjaGVtYSIsIll1cCIsIk5hbWUiLCJtaW4iLCJyZXF1aXJlZCIsIkNvbXBhbnkiLCJFbWFpbCIsImVtYWlsIiwibWF0Y2hlcyIsIlBob25lIiwiTWVzc2FnZSIsImdldFN1Ym1pdENhbGxiYWNrIiwidmFsdWVzIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJhbGVydCIsIk1haW5Db250YWN0Rm9ybSIsIkZvcm1pa0Vycm9yIiwiZXJyb3IiLCJjb250YWN0Rm9ybUluaXRpYWxWYWx1ZXMiLCJvblN1Ym1pdCIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJ0b3VjaGVkIiwiTWV0YUluZm8iLCJtZW1vIiwiZGVzY3JpcHRpb24iLCJkaXNwbGF5TmFtZSIsIlN0eWxlZExpbmsiLCJOYXZCYXJMaW5rIiwicGF0aCIsImZvb3RlckJhciIsImxhc3RMaW5rIiwiaXNIaWRkZW5Nb2JpbGUiLCJCdXJnZXJNZW51IiwiYnV0dG9uIiwiQnVyZ2VyTWVudUljb24iLCJOYXZCYXIiLCJSb3V0ZXNDb25maWciLCJOb3RGb3VuZCIsImlzTG9jYXRpb240MDQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidXNlTGF5b3V0RWZmZWN0IiwiaHJlZiIsIlN0eWxlZENvbHVtbiIsIk5leHRTbGlkZUxpbmsiLCJtaW5pbWFsIiwiZGV2aWNlIiwidGFibGV0IiwiQW5nbGVSaWdodEljb24iLCJPdXJTZXJ2aWNlc0ltZyIsImNsaWVudHNTbGlkZXNDb250ZW50Iiwic2hvd0xvY2FsQXV0aCIsInNob3dMYXdQcmFjdGlzZXMiLCJodG1sIiwiY2xpZW50c0xvZ29zQ29udGVudCIsInBhbmVsIiwiY2xpZW50c0xvZ29zSHRtbCIsIkNsaWVudHNMb2dvcyIsImZvckVhY2giLCJ2YWwiLCJpbmRleCIsIkNsaWVudExvZ28iLCJ0eXBlIiwicmVnaW9uIiwiaW5jbHVkZXMiLCJkZWZhdWx0IiwibGVuZ3RoIiwicHVzaCIsImltYWdlVXJsIiwiYWx0VGFnIiwiQ2xpZW50c0Jhbm5lckNvbmZpZyIsInBhbmVscyIsImNsYXNzTmFtZXMiLCJPdXJDbGllbnRzIiwibmV4dFNsaWRlIiwicG9zaXRpb24iLCJTdHlsZWRQcm9taXNlVGlja0ljb24iLCJPdXJQcm9taXNlIiwiU0VPIiwiY2Fub25pY2FsIiwiY3NzIiwianMiLCJTZXJ2aWNlTGlzdCIsIlNpbHZlckJhbm5lck91dGVyIiwiU2lsdmVyQmFubmVySW5uZXIiLCJsYXB0b3AiLCJsYXB0b3BMIiwibGFwdG9wWEwiLCJTaWx2ZXJCYW5uZXIiLCJDbGllbnRUeXBlc0NvbmZpZyIsInN1YnRpdGxlIiwiZnJlZXplIiwiYmVkZm9yZENvdW5jaWwiLCJib2x0b25Db3VuY2lsIiwicG93eXNDb3VuY2lsIiwibWlsdG9uS2V5bmVzQ291bmNpbCIsImNhbWJyaWRnZUxhd1ByYWN0aXNlIiwiZnVsbGVycyIsImtlbm5lZHlzIiwid2F0c29ucyIsInJheUJvcmxleSIsImRhdmlkc29uU21pdGgiLCJtb2JpbGVTIiwibW9iaWxlTSIsIm1vYmlsZUwiLCJkZXNrdG9wIiwiZGVza3RvcEwiLCJleGFjdCIsImFjdGl2ZUNsYXNzTmFtZSIsImljb24iLCJtZXRhSW5mbyIsInByb2Nlc3NTZXJ2aW5nIiwibGVnYWxDb3VyaWVyIiwicHJpdmFjeSIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJyb3V0ZXIiLCJlcnIiLCJlIiwibm9kZU5hbWUiLCJ0YXJnZXQiLCJpc0xvY2FsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiaGFzV2FybmVkIiwicCIsInJlc29sdmVkSHJlZiIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsInByb2Nlc3MiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsIkxpbmsiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJ2YWx1ZSIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsIm9wdGlvbnMiLCJwcmVwYXJlVXJsQXMiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYXJzZWQiLCJ0cnlQYXJzZVJlbGF0aXZlVXJsIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJjYWNoZWRSb3V0ZUluZm8iLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiUHJvbWlzZSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhvc3RuYW1lIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJvcHRpb25hbCIsInJlcGVhdCIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInNlZ21lbnQiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsIlN0cmluZyIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInNlYXJjaFBhcmFtcyIsIkFycmF5IiwidXNlZCIsInJlc3VsdCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIlByb2Nlc3NTZXJ2ZXJJbWciLCJDbGllbnQiLCJQYXJzZXIiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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Q0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InBhZ2VzL291ci1jbGllbnRzL1t0eXBlXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvb3VyLWNsaWVudHMvW3R5cGVdLnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuXHJcbmNvbnN0IEJhY2tUb1RvcExpbmsgPSBzdHlsZWQuYS5hdHRycygoKSA9PiAoe1xyXG4gIHJvbGU6ICdidXR0b24nLFxyXG4gICdhcmlhLWxhYmVsJzogJ0JhY2tUb1RvcCdcclxufSkpYFxyXG4gIHdpZHRoOiAzLjVyZW07XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICByaWdodDogNi4yNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDM3LCA0MCwgNDcpO1xyXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMHB4IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UsIGJvdHRvbSAwLjRzIGVhc2U7XHJcbiAgYm90dG9tOiAkeyhwcm9wczoge3Nob3c6IGJvb2xlYW59KSA9PiBwcm9wcy5zaG93ID8gJzI0cHgnIDogJy0zLjVyZW0nfTtcclxuICBvcGFjaXR5OiAkeyhwcm9wczoge3Nob3c6IGJvb2xlYW59KSA9PiBwcm9wcy5zaG93ID8gMSA6IDB9O1xyXG5gO1xyXG5cclxuY29uc3QgQW5nbGVEb3VibGVVcEljb24gPSBzdHlsZWQoRm9udEF3ZXNvbWVJY29uKWBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogIzYxZGFmYjtcclxuICBmb250LXNpemU6IDEuNzVlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDAuMXJlbTtcclxuICBtYXJnaW46IDAuNzVyZW0gYXV0byBhdXRvIGF1dG87XHJcbmA7XHJcblxyXG5leHBvcnQgeyBCYWNrVG9Ub3BMaW5rLCBBbmdsZURvdWJsZVVwSWNvbiB9OyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTY3JvbGwgZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuXHJcbmltcG9ydCB7IEJhY2tUb1RvcExpbmssIEFuZ2xlRG91YmxlVXBJY29uIH0gZnJvbSAnLi9iYWNrLXRvLXRvcC5zdHlsZSc7XHJcblxyXG4vLyAncmVhY3Qtc2Nyb2xsJyBjb25maWd1cmF0aW9uXHJcbmNvbnN0IHNjcm9sbCA9IFNjcm9sbC5hbmltYXRlU2Nyb2xsO1xyXG5cclxuY29uc3Qgc2Nyb2xsT3B0aW9ucyA9IHtcclxuICBkZWxheTogNSxcclxuICBkdXJhdGlvbjogNTAwLFxyXG4gIHNtb290aDogJ2Vhc2VJbk91dEN1YmljJ1xyXG59O1xyXG5cclxuLy8gV3JpdGUgdGhlIHNob3cgc3RhdGUgdmFsdWUgdG8gYSByZWYgc28gd2UgY2FuIHVzZSBpdCBhcyBhIGNoZWNrIHRvIHByZXZlbnRcclxuLy8gLi4ucmUtcmVuZGVycyBvbiBldmVyeSBzY3JvbGwgZG93biB0aGF0IHRyaWdnZXJzIGEgc2hvdyBmb3IgdGhlIGJ1dHRvblxyXG5jb25zdCBCYWNrVG9Ub3A6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNob3dSZWYgPSB1c2VSZWY8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgaWYgKCFzaG93UmVmLmN1cnJlbnQgJiYgKHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5wYWdlWU9mZnNldCkgPiAxMDApIHtcclxuICAgICAgICBzaG93UmVmLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgIHNldFNob3codHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoKHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5wYWdlWU9mZnNldCkgPT09IDApIHtcclxuICAgICAgICBzaG93UmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICBzZXRTaG93KGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJhY2tUb1RvcExpbmtcclxuICAgICAgc2hvdz17c2hvd31cclxuICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsLnNjcm9sbFRvVG9wKHNjcm9sbE9wdGlvbnMpfVxyXG4gICAgPlxyXG4gICAgICA8QW5nbGVEb3VibGVVcEljb24gaWNvbj0nYW5nbGUtZG91YmxlLXVwJyAvPlxyXG4gICAgPC9CYWNrVG9Ub3BMaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWNrVG9Ub3A7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgU3R5bGVkQ2FyZCA9IHN0eWxlZC5kaXYuYXR0cnMoKHByb3BzOiB7ZGFyaz86IGJvb2xlYW4sIGhvcml6b250YWw/OiBib29sZWFufSkgPT4gKHtcclxuICBkYXJrOiBwcm9wcy5kYXJrLFxyXG4gIGhvcml6b250YWw6IHByb3BzLmhvcml6b250YWwsXHJcbiAgY2xhc3NOYW1lOiAnJ1xyXG59KSlgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWFlOGU4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgJHsocHJvcHMpID0+IHByb3BzLmRhcmsgJiYgYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcy50aGVtZS5jb2xvcnMuY29sb3JIZXJvSXNEYXJrfTtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgLnRpdGxlLFxyXG4gICAgLnN1YnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzYxZGFmYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgYH1cclxuXHJcbiAgJHsocHJvcHMpID0+IHByb3BzLmhvcml6b250YWwgJiYgYFxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtYmFzaXM6IDUwZXg7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICBmbGV4LXNocmluazogMTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAuY2FyZC1pbWFnZSB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1jb250ZW50IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHBhZGRpbmc6IDJlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLmlzLWRpdmlkZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gIGB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRDYXJkSW1hZ2UgPSBzdHlsZWQuZGl2LmF0dHJzKCgpID0+ICh7XHJcbiAgY2xhc3NOYW1lOiAnY2FyZC1pbWFnZSdcclxufSkpYFxyXG4gIFxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkQ2FyZENvbnRlbnQgPSBzdHlsZWQuZGl2LmF0dHJzKCgpID0+ICh7XHJcbiAgY2xhc3NOYW1lOiAnY2FyZC1jb250ZW50J1xyXG59KSlgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IHsgU3R5bGVkQ2FyZCwgU3R5bGVkQ2FyZEltYWdlLCBTdHlsZWRDYXJkQ29udGVudCB9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBTdHlsZWRDYXJkLCBTdHlsZWRDYXJkSW1hZ2UsIFN0eWxlZENhcmRDb250ZW50IH0gZnJvbSAnLi9jYXJkLnN0eWxlJztcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRDYXJkXHJcbiAgICAgIGRhcms9e3Byb3BzLmRhcmt9XHJcbiAgICAgIGhvcml6b250YWw9e3Byb3BzLmhvcml6b250YWx9PlxyXG4gICAgICB7KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMuaW1hZ2UpIHsgXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q2FyZEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtwcm9wcy5pbWFnZS5zcmN9XHJcbiAgICAgICAgICAgICAgYWx0PXtwcm9wcy5pbWFnZS5hbHR9IC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkoKX1cclxuICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgIDxDYXJkVGl0bGVcclxuICAgICAgICAgIHNpemU9e3Byb3BzLnRpdGxlLnNpemV9XHJcbiAgICAgICAgICBjb250ZW50PXtwcm9wcy50aXRsZS5jb250ZW50fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy50aXRsZS5jbGFzc05hbWV9Lz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICA8L1N0eWxlZENhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkSW1hZ2UgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZENhcmRJbWFnZT5cclxuICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9J2ltYWdlIGlzNGJ5Myc+XHJcbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLnNyY30gYWx0PXtwcm9wcy5hbHR9Lz5cclxuICAgICAgPC9maWd1cmU+XHJcbiAgICA8L1N0eWxlZENhcmRJbWFnZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmRDb250ZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRDYXJkQ29udGVudD5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9TdHlsZWRDYXJkQ29udGVudD5cclxuICApO1xyXG59O1xyXG5cclxudHlwZSBDYXJkVGl0bGVQcm9wcyA9IHtcclxuICBzaXplPzogc3RyaW5nO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBDYXJkVGl0bGUgPSAocHJvcHM6IENhcmRUaXRsZVByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChwcm9wcy5zaXplID09PSAnbGFyZ2UnKSA/XHJcbiAgICAoXHJcbiAgICAgIDxoMyBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+e3Byb3BzLmNvbnRlbnR9PC9oMz5cclxuICAgICkgOlxyXG4gICAgKFxyXG4gICAgICA8aDQgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9Pntwcm9wcy5jb250ZW50fTwvaDQ+XHJcbiAgICApXHJcbn07XHJcbkNhcmRUaXRsZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc2l6ZTogJ2xhcmdlJyxcclxuICBjb250ZW50OiBudWxsLFxyXG4gIGNsYXNzTmFtZTogJydcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IFJvdXRlc0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9yb3V0ZXMuY29uZmlnJztcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9uYXZiYXIvbmF2YmFyJztcclxuXHJcbmNvbnN0IE1haW5Mb2dvID0gJy9pbWcvbG9nby1ORVcuc3ZnJztcclxuXHJcbmNvbnN0IEZvb3RlcjogUmVhY3QuRkMgPSAoKSA9PiAoXHJcbiAgPGZvb3RlciBjbGFzc05hbWU9J2Zvb3Rlcic+XHJcbiAgICA8TmF2QmFyIGZvb3RlckJhcj17dHJ1ZX0+PC9OYXZCYXI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+Q3JlYXRlZCBieSA8YSB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJyBocmVmPSdodHRwOi8vd3d3Lm15ZGF5YXBwLmNvLnVrL2J1c2luZXNzLyc+PHN0cm9uZz5NeURheSBpbiBCdXNpbmVzczwvc3Ryb25nPjwvYT4gJmNvcHk7IDIwMjA8L2Rpdj5cclxuICA8L2Zvb3Rlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZXJ2aWNlTGlzdCBmcm9tICcuLi9zZXJ2aWNlLWxpc3Qvc2VydmljZS1saXN0JztcclxuaW1wb3J0IHsgU2VydmljZUluZm8sIFNlcnZpY2VJbmZvQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3NlcnZpY2VzLmNvbmZpZyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhlcm9Qcm9wcyB7XHJcbiAgaXRlbTogc3RyaW5nO1xyXG4gIGNsaWVudFR5cGU/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBIZXJvID0gKHByb3BzOiBIZXJvUHJvcHMpID0+IHtcclxuICBjb25zdCBIZXJvUHJvcHMgPSB7XHJcbiAgICBIb21lOiB7XHJcbiAgICAgIHRpdGxlOiAnV2VsY29tZSB0byBMZWdhbCBTZXJ2ZSwgbG9jYWwgUHJvY2VzcyBTZXJ2ZXJzIGFuZCBMZWdhbCBDb3VyaWVycyBpbiBCZWRmb3Jkc2hpcmUsIEJ1Y2tpbmdoYW1zaGlyZSAmIENhbWJyaWRnZXNoaXJlLidcclxuICAgIH0sXHJcbiAgICBTZXJ2aWNlczoge1xyXG4gICAgICB0aXRsZTogJ091ciBTZXJ2aWNlcyBpbiBMZWdhbCBTdXBwb3J0JyxcclxuICAgICAgc3VtbWFyeTogJ1JlYWQgbW9yZSBhYm91dCB0aGUgc2VydmljZXMgd2Ugb2ZmZXIgYXJvdW5kIHByb2Nlc3MgYW5kIGNvdXJ0LW9yZGVyIHNlcnZpbmcgYW5kIGxlZ2FsIGNvdXJpZXJpbmcnXHJcbiAgICB9LFxyXG4gICAgICBQcm9jZXNzU2VydmVyQmVkZm9yZDoge1xyXG4gICAgICAgIHRpdGxlOiAnUHJvY2VzcyBTZXJ2aW5nIGluIEJlZHMsIEJ1Y2tzICYgc3Vycm91bmRpbmcgYXJlYXMnLFxyXG4gICAgICAgIHN1bW1hcnk6ICdGaW5kIG91dCBtb3JlIGFib3V0IHRoZSBzZXJ2aWNlcyB3ZSBvZmZlciBpbiB0aGUgQmVkZm9yZHNoaXJlIGFuZCBCdWNraW5naGFtc2hpcmUgY291bnRpZXMuJ1xyXG4gICAgICB9LFxyXG4gICAgICBMZWdhbENvdXJpZXJCZWRmb3JkOiB7XHJcbiAgICAgICAgdGl0bGU6ICdMZWdhbCBDb3VyaWVyIEJlZGZvcmQsIEJ1Y2tpbmdoYW1zaGlyZSAmIENhbWJyaWRnZXNoaXJlLicsXHJcbiAgICAgICAgc3VtbWFyeTogJ091ciBsZWdhbCBjb3VyaWVycyBhcmUgdmVyeSBmYW1pbGlhciB3aXRoIHRoZSBCZWRmb3Jkc2hpcmUgYW5kIEJ1Y2tpbmdoYW1zaGlyZSBjb3VudGllcywgYXMgd2VsbCBhcyBkYXRhLWNvbXBsaWFuY2UgcmVndWxhdGlvbnMgYW5kIGd1aWRlbGluZXMuJ1xyXG4gICAgICB9LFxyXG4gICAgQ29udGFjdDoge1xyXG4gICAgICB0aXRsZTogJ0NvbnRhY3QgTGVnYWwgU2VydmUgQmVkZm9yZCB0byBhcnJhbmdlIHlvdXIgbmV4dCBTZXJ2aW5nIG9yIERlbGl2ZXJ5JyxcclxuICAgICAgc3VtbWFyeTogJ0NvbnRhY3QgTGVnYWwgU2VydmUgdG8gZGlzY3VzcyB5b3VyIGxlZ2FsIHN1cHBvcnQgbmVlZHMgb3IgdG8gYmV0dGVyIHVuZGVyc3RhbmQgb3VyIGRlbGl2ZXJ5J1xyXG4gICAgfSxcclxuICAgIENsaWVudHM6IHtcclxuICAgICAgdGl0bGU6ICdPdXIgQ2xpZW50cycsXHJcbiAgICAgIHN1bW1hcnk6ICdSYW5naW5nIGZyb20gQmVkZm9yZHNoaXJlICYgQnVja2luZ2hhbXNoaXJlIHRvIENhbWJyaWRnZXNoaXJlLCBvdXIgY2xpZW50cyB0cnVzdCB1cyB0byBkZWxpdmVyJ1xyXG4gICAgfSxcclxuICAgIENsaWVudFR5cGU6IHtcclxuICAgICAgJ2JlZGZvcmRzaGlyZS1jbGllbnRzJzoge1xyXG4gICAgICAgIHRpdGxlOiAnQmVkZm9yZHNoaXJlIENsaWVudHMnLFxyXG4gICAgICAgIHN1bW1hcnk6ICdSZWFkIGFib3V0IHNvbWUgb2Ygb3VyIEJlZGZvcmRzaGlyZSBjbGllbnRzJ1xyXG4gICAgICB9LFxyXG4gICAgICAnYnVja2luZ2hhbXNoaXJlLWNsaWVudHMnOiB7XHJcbiAgICAgICAgdGl0bGU6ICdCdWNraW5naGFtc2hpcmUgQ2xpZW50cycsXHJcbiAgICAgICAgc3VtbWFyeTogJ1JlYWQgYWJvdXQgc29tZSBvZiBvdXIgTWlsdG9uIEtleW5lcyAmIEJ1Y2tpbmdoYW1zaGlyZS1iYXNlZCBjbGllbnRzJ1xyXG4gICAgICB9LFxyXG4gICAgICAnY2FtYnJpZGdlc2hpcmUtY2xpZW50cyc6IHtcclxuICAgICAgICB0aXRsZTogJ0NhbWJyaWRnZXNoaXJlIENsaWVudHMnLFxyXG4gICAgICAgIHN1bW1hcnk6ICdSZWFkIGFib3V0IHNvbWUgb2Ygb3VyIENhbWJyaWRnZXNoaXJlLWJhc2VkIGNsaWVudHMnXHJcbiAgICAgIH0sXHJcbiAgICAgICdjbGllbnRzLWluLXN1cnJvdW5kaW5nLWFyZWFzJzoge1xyXG4gICAgICAgIHRpdGxlOiAnQ2xpZW50cyBpbiBTdXJyb3VuZGluZyBBcmVhcycsXHJcbiAgICAgICAgc3VtbWFyeTogJ1JlYWQgYWJvdXQgc29tZSBvZiBvdXIgY2xpZW50cyBpbiBzdXJyb3VuZGluZyBhcmVhcydcclxuICAgICAgfSxcclxuICAgICAgJ2xvY2FsLWF1dGhvcml0eS1jbGllbnRzJzoge1xyXG4gICAgICAgIHRpdGxlOiAnTG9jYWwgQXV0aG9yaXR5IENsaWVudHMnLFxyXG4gICAgICAgIHN1bW1hcnk6ICdSZWFkIGFib3V0IHNvbWUgb2Ygb3VyIExvY2FsIEF1dGhvcml0eSBjbGllbnRzJ1xyXG4gICAgICB9LFxyXG4gICAgICAnbGVnYWwtcHJhY3Rpc2UtY2xpZW50cyc6IHtcclxuICAgICAgICB0aXRsZTogJ0xlZ2FsIFByYWN0aXNlIENsaWVudHMnLFxyXG4gICAgICAgIHN1bW1hcnk6ICdSZWFkIGFib3V0IHNvbWUgb2Ygb3VyIExlZ2FsIFByYWN0aXNlIGNsaWVudHMnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHNlcnZpY2VMaXN0ID0gdXNlTWVtbzxTZXJ2aWNlSW5mb1tdPigoKSA9PiB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoU2VydmljZUluZm9Db25maWcpLm1hcCgoa2V5KSA9PiBTZXJ2aWNlSW5mb0NvbmZpZ1trZXldKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlckhlcm9Db250ZW50KGl0ZW0pIHtcclxuICAgIHN3aXRjaChpdGVtKSB7XHJcbiAgICAgIGNhc2UgJ0hvbWUnOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4nPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpcy1mbGV4IGlzLWhvcml6b250YWwtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxpZnJhbWUgdGl0bGU9J1Byb2Nlc3MgU2VydmluZyBJbmZvcm1hdGlvbiBWaWRlbycgd2lkdGg9JzY1MCcgaGVpZ2h0PSc0MDAnIHNyYz0naHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvdkh2ZDZIYVBxX3MnIGZyYW1lQm9yZGVyPScwJyBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uJz5cclxuICAgICAgICAgICAgICA8U2VydmljZUxpc3Qgc2VydmljZUxpc3Q9e3NlcnZpY2VMaXN0fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgJ0NsaWVudFR5cGUnOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8cD57SGVyb1Byb3BzW3Byb3BzLml0ZW1dW3Byb3BzLmNsaWVudFR5cGVdLnN1bW1hcnl9PC9wPlxyXG4gICAgICAgIClcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHA+e0hlcm9Qcm9wc1twcm9wcy5pdGVtXS5zdW1tYXJ5fTwvcD5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuICB9XHJcbiAgY29uc3QgaGVyb0NvbnRlbnQgPSByZW5kZXJIZXJvQ29udGVudChwcm9wcy5pdGVtKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0naGVybyBpcy1kYXJrJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlcm8tYm9keSc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBoYXMtdGV4dC1jZW50ZXJlZCc+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZSBibG9nLXRpdGxlJz5cclxuICAgICAgICAgIHtwcm9wcy5pdGVtICE9PSAnQ2xpZW50VHlwZScgP1xyXG4gICAgICAgICAgICBIZXJvUHJvcHNbcHJvcHMuaXRlbV0udGl0bGUgOlxyXG4gICAgICAgICAgICBIZXJvUHJvcHNbcHJvcHMuaXRlbV1bcHJvcHMuY2xpZW50VHlwZV0udGl0bGV9XHJcbiAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICB7aGVyb0NvbnRlbnR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iLCJpbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyL2Zvb3Rlcic7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9uYXZiYXIvbmF2YmFyJztcclxuaW1wb3J0IE1ldGFJbmZvIGZyb20gJy4vbWV0YS1pbmZvL21ldGEtaW5mbyc7XHJcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL25vdC1mb3VuZC9ub3QtZm91bmQnO1xyXG5pbXBvcnQgQmFja1RvVG9wIGZyb20gJy4vYmFjay10by10b3AvYmFjay10by10b3AnO1xyXG5pbXBvcnQgSGVybyBmcm9tICcuL2hlcm8vaGVybyc7XHJcbmltcG9ydCBPdXJQcm9taXNlIGZyb20gJy4vb3VyLXByb21pc2UtYmFubmVyL291ci1wcm9taXNlLWJhbm5lcic7XHJcbmltcG9ydCBPdXJDbGllbnRzIGZyb20gJy4vb3VyLWNsaWVudHMvb3VyLWNsaWVudHMnO1xyXG5pbXBvcnQgTWFpbkNvbnRhY3RGb3JtIGZyb20gJy4vbWFpbi1jb250YWN0LWZvcm0vbWFpbi1jb250YWN0LWZvcm0nO1xyXG5pbXBvcnQgSW5saW5lQ29udGFjdFBhbmVsIGZyb20gJy4vaW5saW5lLWNvbnRhY3QtcGFuZWwvaW5saW5lLWNvbnRhY3QtcGFuZWwnO1xyXG5pbXBvcnQgU2lsdmVyQmFubmVyIGZyb20gJy4vc2lsdmVyLWJhbm5lci9zaWx2ZXItYmFubmVyJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkL2NhcmQnO1xyXG5pbXBvcnQgeyBTRU8gfSAgZnJvbSAnLi9zZW8vc2VvJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgRm9vdGVyLFxyXG4gIE5hdkJhcixcclxuICBNZXRhSW5mbyxcclxuICBOb3RGb3VuZCxcclxuICBCYWNrVG9Ub3AsXHJcbiAgSGVybyxcclxuICBPdXJQcm9taXNlLFxyXG4gIE91ckNsaWVudHMsXHJcbiAgTWFpbkNvbnRhY3RGb3JtLFxyXG4gIElubGluZUNvbnRhY3RQYW5lbCxcclxuICBTaWx2ZXJCYW5uZXIsXHJcbiAgQ2FyZCxcclxuICBTRU9cclxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFpbkNvbnRhY3RGb3JtIGZyb20gJy4uL21haW4tY29udGFjdC1mb3JtL21haW4tY29udGFjdC1mb3JtJztcclxuXHJcbmNvbnN0IElubGluZUNvbnRhY3RQYW5lbCA9ICgpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGgzIGNsYXNzTmFtZT0ndGl0bGUnPkNvbnRhY3QgVXMgVG9kYXk8L2gzPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbnMnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uJz5cclxuICAgICAgICA8TWFpbkNvbnRhY3RGb3JtIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1jb250ZW50Jz5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT0nc21hbGwtdGl0bGUnPjxzdHJvbmc+T3IgYWx0ZXJuYXRpdmVseSwgeW91IGNhbiBjb250YWN0IHVzIGRpcmVjdGx5IHVzaW5nIGFueSBvZiB0aGUgYmVsb3cgbWV0aG9kczo8L3N0cm9uZz48L2g1PlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPHA+PHN0cm9uZz5QaG9uZTwvc3Ryb25nPjogKDAxMjM0KSA5MiA0OCA0NzwvcD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxwPjxzdHJvbmc+TW9iaWxlPC9zdHJvbmc+OiAwNzg1MyAxNjYgNjc0PC9wPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPHA+PHN0cm9uZz5FbWFpbDwvc3Ryb25nPjogaW5mb0BsZWdhbHNlcnZlYmVkZm9yZC5jby51azwvcD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElubGluZUNvbnRhY3RQYW5lbDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCwgRXJyb3JNZXNzYWdlIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5cclxuY29uc3QgdmFsaWRFbWFpbFJlZ2V4ID0gXHJcbiAgUmVnRXhwKC9eKChbXjw+KClcXFtcXF1cXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFtePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl0rXFwuKStbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdezIsfSkkL2kpO1xyXG4vLyBjb25zdCB2YWxpZEVtYWlsUmVnZXggPSBSZWdFeHAoL14oKFtePD4oKVtcXF0uLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXS4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChbXjw+KClbXFxdLiw7Olxcc0BcIl0rLikrW148PigpW1xcXS4sOzpcXHNAXCJdezIsfSkkL2kpO1xyXG5jb25zdCB2YWxpZFBob25lUmVnZXggPSBSZWdFeHAoL15bMC05IF17MTEsfSQvaSk7XHJcblxyXG5jb25zdCBjb250YWN0Rm9ybVZhbGlkYXRpb25TY2hlbWEgPSBZdXAub2JqZWN0KHtcclxuICBOYW1lOiBZdXAuc3RyaW5nKCkubWluKDUpLnJlcXVpcmVkKCdQbGVhc2UgcHJvdmlkZSB5b3VyIEZ1bGwgTmFtZS4nKSxcclxuICBDb21wYW55OiBZdXAuc3RyaW5nKCkubWluKDIpLFxyXG4gIEVtYWlsOiBZdXAuc3RyaW5nKCkuZW1haWwoKS5tYXRjaGVzKHZhbGlkRW1haWxSZWdleCwgJ1BsZWFzZSBlbnRlciBhIHZhbGlkIEUtbWFpbCBBZGRyZXNzJykucmVxdWlyZWQoJ1BsZWFzZSBwcm92aWRlIHlvdXIgRS1tYWlsIEFkZHJlc3MuJyksXHJcbiAgUGhvbmU6IFl1cC5zdHJpbmcoKS5tYXRjaGVzKHZhbGlkUGhvbmVSZWdleCwgJ1BsZWFzZSBlbnRlciBhIHZhbGlkIFBob25lIE51bWJlcicpLFxyXG4gIE1lc3NhZ2U6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnUGxlYXNlIGZpbGwgaW4gYSBNZXNzYWdlLicpXHJcbn0pO1xyXG5cclxuY29uc3QgZ2V0U3VibWl0Q2FsbGJhY2sgPSAoKSA9PlxyXG4gIHZhbHVlcyA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICB1cmw6ICdodHRwOi8vbGVnYWxzZXJ2ZWJlZGZvcmQuY28udWsvY29udGFjdC1wcm9jZXNzLnBocD9hY3Rpb249cHJvY2Vzc0NvbnRhY3QnLFxyXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnXFxcIlN1Y2Nlc3NcXFwiJyl7XHJcbiAgICAgICAgYWxlcnQoXCJNZXNzYWdlIFNlbnQuXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBhbGVydChcIk1lc3NhZ2UgZmFpbGVkIHRvIHNlbmQuXCIpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG5jb25zdCBNYWluQ29udGFjdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgRm9ybWlrRXJyb3IgPSBlcnJvciA9PiAoXHJcbiAgICA8cCBjbGFzc05hbWU9J2hlbHAgaXMtZGFuZ2VyJz57ZXJyb3IuY2hpbGRyZW59PC9wPlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RGb3JtSW5pdGlhbFZhbHVlcyA9IHtcclxuICAgIE5hbWU6ICcnLFxyXG4gICAgQ29tcGFueTogJycsXHJcbiAgICBFbWFpbDogJycsXHJcbiAgICBQaG9uZTogJycsXHJcbiAgICBNZXNzYWdlOiAnJ1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gUmVhY3QudXNlQ2FsbGJhY2soZ2V0U3VibWl0Q2FsbGJhY2soKSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1pa1xyXG4gICAgICBpbml0aWFsVmFsdWVzPXtjb250YWN0Rm9ybUluaXRpYWxWYWx1ZXN9XHJcbiAgICAgIHZhbGlkYXRpb25TY2hlbWE9e2NvbnRhY3RGb3JtVmFsaWRhdGlvblNjaGVtYX1cclxuICAgICAgb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgeyh7IGhhbmRsZVN1Ym1pdCwgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQgfSkgPT4gKFxyXG4gICAgICA8Rm9ybSBpZD0nY29udGFjdC1mb3JtJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBtZXRob2Q9J0dFVCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sIGhhcy1pY29ucy1sZWZ0IGhhcy1pY29ucy1yaWdodCc+XHJcbiAgICAgICAgICAgIDxGaWVsZCB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0ICR7XHJcbiAgICAgICAgICAgICAgICB0b3VjaGVkLk5hbWUgJiYgZXJyb3JzLk5hbWUgPyAnaXMtZGFuZ2VyJyA6ICcnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9ICR7XHJcbiAgICAgICAgICAgICAgICB0b3VjaGVkLk5hbWUgJiYgIWVycm9ycy5OYW1lID8gJ2lzLXN1Y2Nlc3MnIDogJydcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nWW91ciBOYW1lJ1xyXG4gICAgICAgICAgICAgIG5hbWU9J05hbWUnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPSd1c2VyJyAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxFcnJvck1lc3NhZ2UgY29tcG9uZW50PXtGb3JtaWtFcnJvcn1cclxuICAgICAgICAgICAgbmFtZT0nTmFtZScgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmllbGQnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wgaGFzLWljb25zLWxlZnQgaGFzLWljb25zLXJpZ2h0Jz5cclxuICAgICAgICAgICAgPEZpZWxkIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQgJHtcclxuICAgICAgICAgICAgICAgIHRvdWNoZWQuQ29tcGFueSAmJiBlcnJvcnMuQ29tcGFueSA/ICdpcy1kYW5nZXInIDogJycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0gJHtcclxuICAgICAgICAgICAgICAgIHRvdWNoZWQuQ29tcGFueSAmJiAhZXJyb3JzLkNvbXBhbnkgPyAnaXMtc3VjY2VzcycgOiAnJ1xyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdDb21wYW55IC8gT3JnYW5pc2F0aW9uJ1xyXG4gICAgICAgICAgICAgIG5hbWU9J0NvbXBhbnknIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgaXMtbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj0nYXQnIC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEVycm9yTWVzc2FnZSBjb21wb25lbnQ9e0Zvcm1pa0Vycm9yfVxyXG4gICAgICAgICAgICBuYW1lPSdDb21wYW55JyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWVsZCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbCBoYXMtaWNvbnMtbGVmdCBoYXMtaWNvbnMtcmlnaHQnPlxyXG4gICAgICAgICAgICA8RmllbGQgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQgJHtcclxuICAgICAgICAgICAgICAgIHRvdWNoZWQuRW1haWwgJiYgZXJyb3JzLkVtYWlsID8gJ2lzLWRhbmdlcicgOiAnJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfSAke1xyXG4gICAgICAgICAgICAgICAgdG91Y2hlZC5FbWFpbCAmJiAhZXJyb3JzLkVtYWlsID8gJ2lzLXN1Y2Nlc3MnIDogJydcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRS1tYWlsIEFkZHJlc3MnXHJcbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT0nZW1haWxIZWxwJ1xyXG4gICAgICAgICAgICAgIG5hbWU9J0VtYWlsJyAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249J2F0JyAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxFcnJvck1lc3NhZ2UgY29tcG9uZW50PXtGb3JtaWtFcnJvcn1cclxuICAgICAgICAgICAgbmFtZT0nRW1haWwnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sIGhhcy1pY29ucy1sZWZ0IGhhcy1pY29ucy1yaWdodCc+XHJcbiAgICAgICAgICAgIDxGaWVsZCB0eXBlPSdQaG9uZSdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dCAke1xyXG4gICAgICAgICAgICAgICAgdG91Y2hlZC5QaG9uZSAmJiBlcnJvcnMuUGhvbmUgPyAnaXMtZGFuZ2VyJyA6ICcnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9ICR7XHJcbiAgICAgICAgICAgICAgICB0b3VjaGVkLlBob25lICYmICFlcnJvcnMuUGhvbmUgPyAnaXMtc3VjY2VzcycgOiAnJ1xyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQaG9uZSBOdW1iZXInXHJcbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT0ncGhvbmVIZWxwJ1xyXG4gICAgICAgICAgICAgIG5hbWU9J1Bob25lJyAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249J3Bob25lJyAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxFcnJvck1lc3NhZ2UgY29tcG9uZW50PXtGb3JtaWtFcnJvcn1cclxuICAgICAgICAgICAgbmFtZT0nUGhvbmUnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sIGhhcy1pY29ucy1sZWZ0IGhhcy1pY29ucy1yaWdodCc+XHJcbiAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD0ndGV4dGFyZWEnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dGFyZWEgJHtcclxuICAgICAgICAgICAgICAgIHRvdWNoZWQuTWVzc2FnZSAmJiBlcnJvcnMuTWVzc2FnZSA/ICdpcy1kYW5nZXInIDogJycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0gJHtcclxuICAgICAgICAgICAgICAgIHRvdWNoZWQuTWVzc2FnZSAmJiAhZXJyb3JzLk1lc3NhZ2UgPyAnaXMtc3VjY2VzcycgOiAnJ1xyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdZb3VyIE1lc3NhZ2UnXHJcbiAgICAgICAgICAgICAgbmFtZT0nTWVzc2FnZScgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEVycm9yTWVzc2FnZSBjb21wb25lbnQ9e0Zvcm1pa0Vycm9yfVxyXG4gICAgICAgICAgICBuYW1lPSdNZXNzYWdlJyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWVsZCBidXR0b25zIGlzLXJpZ2h0Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sJz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnV0dG9uIGlzLXByaW1hcnknPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybWlrPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGFjdEZvcm07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcblxyXG50eXBlIE1ldGFJbmZvUHJvcHMgPSB7XHJcbiAgcmVhZG9ubHkgdGl0bGU/OiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBNZXRhSW5mbzogUmVhY3QuRkM8TWV0YUluZm9Qcm9wcz4gPSBSZWFjdC5tZW1vKCh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiAoXHJcbiAgPEhlbG1ldD5cclxuICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgIDxtZXRhIG5hbWU9J29nOnRpdGxlJyBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICAgIDxtZXRhIG5hbWU9J29nOmRlc2NyaXB0aW9uJyBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICA8L0hlbG1ldD5cclxuKSk7XHJcblxyXG5NZXRhSW5mby5kaXNwbGF5TmFtZSA9ICdNZXRhSW5mbyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXRhSW5mbztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkLmFgXHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0LCBib3JkZXItYm90dG9tLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICM2MWRhZmI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgeyBTdHlsZWRMaW5rIH07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgeyBTdHlsZWRMaW5rIH0gZnJvbSAnLi9uYXZiYXItbGluay5zdHlsZSc7XHJcblxyXG50eXBlIE5hdkJhckxpbmtQcm9wcyA9IHtcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICBmb290ZXJCYXI/OiBib29sZWFuO1xyXG4gIGxhc3RMaW5rPzogYm9vbGVhbjtcclxuICBpc0hpZGRlbk1vYmlsZT86IGJvb2xlYW47XHJcbn07XHJcblxyXG5jb25zdCBOYXZCYXJMaW5rOiBSZWFjdC5GQzxOYXZCYXJMaW5rUHJvcHM+ID0gKHtcclxuICBwYXRoLFxyXG4gIGRpc3BsYXlOYW1lLFxyXG4gIGZvb3RlckJhcixcclxuICBsYXN0TGluayxcclxuICBpc0hpZGRlbk1vYmlsZVxyXG59KSA9PiAoXHJcbiAgPD5cclxuICAgIDxMaW5rXHJcbiAgICAgIGhyZWY9e3BhdGh9XHJcbiAgICAgIHBhc3NIcmVmXHJcbiAgICA+XHJcbiAgICAgIDxTdHlsZWRMaW5rXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHsoaXNIaWRkZW5Nb2JpbGUpID8gJ2lzLWhpZGRlbi1tb2JpbGUnIDogJyd9YH0+XHJcbiAgICAgICAge2Rpc3BsYXlOYW1lfVxyXG4gICAgICA8L1N0eWxlZExpbms+XHJcbiAgICA8L0xpbms+XHJcbiAgICB7KCgpID0+IHsgXHJcbiAgICAgIGlmICghZm9vdGVyQmFyICYmICFsYXN0TGluaykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VwZXJhdG9yJyAvPlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfSkoKX1cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhckxpbms7XHJcbiIsImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQnVyZ2VyTWVudSA9IHN0eWxlZC5idXR0b24uYXR0cnMoKCkgPT4gKHtcclxuICByb2xlOiAnYnV0dG9uJyxcclxuICAnYXJpYS1sYWJlbCc6ICdNZW51J1xyXG59KSlgXHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICB3aWR0aDogMy41cmVtO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLCBib3R0b20gMC40cyBlYXNlO1xyXG5gO1xyXG5cclxuY29uc3QgQnVyZ2VyTWVudUljb24gPSBzdHlsZWQoRm9udEF3ZXNvbWVJY29uKWBcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEuNzVlbTtcclxuYDtcclxuXHJcbmV4cG9ydCB7IEJ1cmdlck1lbnUsIEJ1cmdlck1lbnVJY29uIH07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlc0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9yb3V0ZXMuY29uZmlnJztcclxuaW1wb3J0IE5hdkJhckxpbmsgZnJvbSAnLi9uYXZiYXItbGluay9uYXZiYXItbGluayc7XHJcblxyXG5pbXBvcnQgeyBCdXJnZXJNZW51LCBCdXJnZXJNZW51SWNvbiB9IGZyb20gJy4vbmF2YmFyLnN0eWxlJztcclxuXHJcbmNvbnN0IE1haW5Mb2dvID0gJy9pbWcvbG9nby1ORVcuc3ZnJztcclxuXHJcbnR5cGUgTmF2QmFyUHJvcHMgPSB7XHJcbiAgZm9vdGVyQmFyPzogYm9vbGVhbjtcclxufTtcclxuXHJcbmNvbnN0IE5hdkJhcjogUmVhY3QuRkM8TmF2QmFyUHJvcHM+ID0gKHtcclxuICBmb290ZXJCYXJcclxufSkgPT4gKFxyXG4gIDxuYXZcclxuICAgIHJvbGU9J25hdmlnYXRpb24nXHJcbiAgICBjbGFzc05hbWU9J25hdmJhcidcclxuICAgIGFyaWEtbGFiZWw9J21haW4gbmF2aWdhdGlvbidcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLXdyYXBwZXInPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYnJhbmQtd3JhcHBlciBsZXZlbCc+XHJcbiAgICAgICAgPGltZyB3aWR0aD0nMTcwJ1xyXG4gICAgICAgICAgc3JjPXtNYWluTG9nb31cclxuICAgICAgICAgIGFsdD0nTGVnYWwgU2VydmUgLSBQcm9jZXNzIFNlcnZlciBpbiBCZWRmb3Jkc2hpcmUgJmFtcDsgQnVja2luZ2hhbXNoaXJlJy8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsZXZlbC1yaWdodCc+MDc4NTMgMTY2IDY3NDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItcm91dGVzJz5cclxuICAgICAgICA8TmF2QmFyTGlua1xyXG4gICAgICAgICAgey4uLlJvdXRlc0NvbmZpZy5Ib21lfVxyXG4gICAgICAgICAgZm9vdGVyQmFyPXtmb290ZXJCYXJ9XHJcbiAgICAgICAgICA+PC9OYXZCYXJMaW5rPlxyXG4gICAgICAgIDxOYXZCYXJMaW5rXHJcbiAgICAgICAgICB7Li4uUm91dGVzQ29uZmlnLlNlcnZpY2VzfVxyXG4gICAgICAgICAgZm9vdGVyQmFyPXtmb290ZXJCYXJ9XHJcbiAgICAgICAgICA+PC9OYXZCYXJMaW5rPlxyXG4gICAgICAgIDxOYXZCYXJMaW5rXHJcbiAgICAgICAgICB7Li4uUm91dGVzQ29uZmlnLkNvbnRhY3R9XHJcbiAgICAgICAgICBmb290ZXJCYXI9e2Zvb3RlckJhcn1cclxuICAgICAgICAgID48L05hdkJhckxpbms+XHJcbiAgICAgICAgeygoKSA9PiB7IGlmICghZm9vdGVyQmFyKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QnVyZ2VyTWVudVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0naXMtaGlkZGVuLXRhYmxldCc+XHJcbiAgICAgICAgICAgICAgPEJ1cmdlck1lbnVJY29uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lzLXZpc2libGUtbW9iaWxlJ1xyXG4gICAgICAgICAgICAgICAgaWNvbj0nYmFycyc+PC9CdXJnZXJNZW51SWNvbj5cclxuICAgICAgICAgICAgPC9CdXJnZXJNZW51PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH19KSgpfVxyXG4gICAgICAgIDxOYXZCYXJMaW5rXHJcbiAgICAgICAgICB7Li4uUm91dGVzQ29uZmlnLkNsaWVudHN9XHJcbiAgICAgICAgICBmb290ZXJCYXI9e2Zvb3RlckJhcn1cclxuICAgICAgICAgIGxhc3RMaW5rPXt0cnVlfVxyXG4gICAgICAgICAgaXNIaWRkZW5Nb2JpbGU9eyFmb290ZXJCYXIgJiYgdHJ1ZX1cclxuICAgICAgICAgID48L05hdkJhckxpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uYXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcblxyXG5jb25zdCBOb3RGb3VuZDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgaXNMb2NhdGlvbjQwNCA9ICh3aW5kb3cgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSAnLzQwNCcpO1xyXG4gIGNvbnN0IGNsYXNzTmFtZSA9IGBub3RpZmljYXRpb24gdGlsZSBpcy1jaGlsZCBpcy1kYW5nZXIgJHtpc0xvY2F0aW9uNDA0ID8gJ3J1YmJlckJhbmQtYW5pbWF0aW9uJyA6ICdoaWRlJ31gO1xyXG5cclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gJy80MDQnKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy80MDQnO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHZpZXctd3JhcHBlcic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aWxlIGlzLXBhcmVudCBpcy04IGlzLXZlcnRpY2FsIGlzLW5vdGlmaWNhdGlvbi10aWxlIGlzLW5vdC1mb3VuZC10aWxlJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj0nZXhjbGFtYXRpb24tY2lyY2xlJyBzaXplPScyeCcgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0aXRsZSc+NDA0IE5vdCBGb3VuZDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJ0aXRsZSc+VGhlIHJlcXVlc3RlZCBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZC48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZDtcclxuIiwiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBkZXZpY2UgZnJvbSAnLi4vLi4vY29uZmlnL2RldmljZS5jb25maWcnO1xyXG5cclxuLy8gdHlwZXNcclxudHlwZSBPdXJDbGllbnRzUHJvcHMgPSB7XHJcbiAgbWluaW1hbD86IGJvb2xlYW47XHJcbiAgY2xpZW50VHlwZT86IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlZENvbHVtbiA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMCAyZW07XHJcbmA7XHJcblxyXG5jb25zdCBOZXh0U2xpZGVMaW5rID0gc3R5bGVkLmEuYXR0cnMoKCkgPT4gKHtcclxuICByb2xlOiAnYnV0dG9uJyxcclxuICAnYXJpYS1sYWJlbCc6ICdOZXh0J1xyXG59KSlgXHJcbiAgd2lkdGg6IDMuNXJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICByaWdodDogMS4yNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDM3LCA0MCwgNDcpO1xyXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMHB4IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UsIGJvdHRvbSAwLjRzIGVhc2U7XHJcbiAgdG9wOiAkeyhwcm9wczogT3VyQ2xpZW50c1Byb3BzKSA9PiBwcm9wcy5taW5pbWFsID8gJzEwJScgOiAnMTglJ307XHJcbiAgb3BhY2l0eTogMC41O1xyXG5cclxuICBAbWVkaWEgJHtkZXZpY2UudGFibGV0fSB7XHJcbiAgICB0b3A6ICR7KHByb3BzOiBPdXJDbGllbnRzUHJvcHMpID0+IHByb3BzLm1pbmltYWwgPyAnMjglJyA6ICc1MiUnfTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBBbmdsZVJpZ2h0SWNvbiA9IHN0eWxlZChGb250QXdlc29tZUljb24pYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMS43NWVtO1xyXG4gIHBhZGRpbmctbGVmdDogMC4xcmVtO1xyXG4gIG1hcmdpbjogMC43NXJlbSBhdXRvIGF1dG8gYXV0bztcclxuYDtcclxuXHJcbmV4cG9ydCB7IFN0eWxlZENvbHVtbiwgTmV4dFNsaWRlTGluaywgQW5nbGVSaWdodEljb24gfTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBDbGllbnRzQmFubmVyQ29uZmlnLCBDbGllbnRzQmFubmVyUGFuZWxDb25maWcsIENsaWVudHNMb2dvcyB9IGZyb20gJy4uLy4uL2NvbmZpZy9jbGllbnRzLWJhbm5lci5jb25maWcnO1xyXG5pbXBvcnQgeyBTdHlsZWRDb2x1bW4sIE5leHRTbGlkZUxpbmssIEFuZ2xlUmlnaHRJY29uIH0gZnJvbSAnLi9vdXItY2xpZW50cy5zdHlsZSc7XHJcblxyXG5jb25zdCBPdXJTZXJ2aWNlc0ltZyA9ICcvaW1nL2NvdXJ0LW9yZGVyLXNlcnZpbmctYmVkZm9yZC5wbmcnO1xyXG5cclxuLy8gdHlwZXNcclxudHlwZSBPdXJDbGllbnRzUHJvcHMgPSB7XHJcbiAgbWluaW1hbD86IGJvb2xlYW47XHJcbiAgY2xpZW50VHlwZT86IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IGNsaWVudHNTbGlkZXNDb250ZW50ID0gKHByb3BzLCBzaG93TG9jYWxBdXRoPywgc2hvd0xhd1ByYWN0aXNlcz8pID0+IHtcclxuICBjb25zdCBjbGllbnRUeXBlID0gcHJvcHMuY2xpZW50VHlwZTtcclxuICBsZXQgaHRtbCA9IFtdO1xyXG5cclxuICBjb25zdCBjbGllbnRzTG9nb3NDb250ZW50ID0gKHBhbmVsOiBDbGllbnRzQmFubmVyUGFuZWxDb25maWcpID0+IHtcclxuICAgIGxldCBjbGllbnRzTG9nb3NIdG1sID0gW107XHJcblxyXG4gICAgT2JqZWN0LmtleXMoQ2xpZW50c0xvZ29zKS5mb3JFYWNoKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IENsaWVudExvZ28gPSBDbGllbnRzTG9nb3NbdmFsXTtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICAoKHBhbmVsLmNsaWVudFR5cGUgJiYgQ2xpZW50TG9nby50eXBlID09PSBwYW5lbC5jbGllbnRUeXBlKVxyXG4gICAgICAgIHx8IChwYW5lbC5yZWdpb24gJiYgQ2xpZW50TG9nby5yZWdpb24uaW5jbHVkZXMocGFuZWwucmVnaW9uKSkpXHJcbiAgICAgICAgJiYgKChjbGllbnRUeXBlID09PSAnZGVmYXVsdCcgJiYgQ2xpZW50TG9nby5kZWZhdWx0KVxyXG4gICAgICAgICAgfHwgY2xpZW50VHlwZSAhPT0gJ2RlZmF1bHQnKVxyXG4gICAgICAgICYmIGNsaWVudHNMb2dvc0h0bWwubGVuZ3RoIDwgNVxyXG4gICAgICApIHtcclxuICAgICAgICBjbGllbnRzTG9nb3NIdG1sLnB1c2goXHJcbiAgICAgICAgICA8U3R5bGVkQ29sdW1uIGtleT17Q2xpZW50TG9nby5pbWFnZVVybH0gY2xhc3NOYW1lPSdjb2x1bW4gaGFzLXRleHQtY2VudGVyZWQnPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YC9pbWcvY2xpZW50LWxvZ29zLyR7Q2xpZW50TG9nby5pbWFnZVVybH1gfSBhbHQ9e0NsaWVudExvZ28uYWx0VGFnfS8+XHJcbiAgICAgICAgICA8L1N0eWxlZENvbHVtbj5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY2xpZW50c0xvZ29zSHRtbDtcclxuICB9O1xyXG5cclxuICBDbGllbnRzQmFubmVyQ29uZmlnW2NsaWVudFR5cGVdLnBhbmVscy5mb3JFYWNoKChwYW5lbCwgaW5kZXgpID0+IHtcclxuICAgIGh0bWwucHVzaChcclxuICAgIDxkaXYga2V5PXtwYW5lbC5jbGllbnRUeXBlIHx8IHBhbmVsLnJlZ2lvbn1cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcclxuICAgICAgICAnZmFkZUluLWFuaW1hdGlvbic6IENsaWVudHNCYW5uZXJDb25maWdbY2xpZW50VHlwZV0ucGFuZWxzLmxlbmd0aCA+IDEsXHJcbiAgICAgICAgJ3Nob3cnOiAoQ2xpZW50c0Jhbm5lckNvbmZpZ1tjbGllbnRUeXBlXS5wYW5lbHMubGVuZ3RoID4gMSAmJiBpbmRleCA9PT0gMCkgPyBzaG93TG9jYWxBdXRoLmN1cnJlbnQgPT09ICdzaG93JyA6IHNob3dMYXdQcmFjdGlzZXMuY3VycmVudCA9PT0gJ3Nob3cnLFxyXG4gICAgICAgICdoaWRlJzogKENsaWVudHNCYW5uZXJDb25maWdbY2xpZW50VHlwZV0ucGFuZWxzLmxlbmd0aCA+IDEgJiYgaW5kZXggPT09IDEpID8gc2hvd0xhd1ByYWN0aXNlcy5jdXJyZW50ID09PSAnaGlkZScgOiBzaG93TG9jYWxBdXRoLmN1cnJlbnQgPT09ICdoaWRlJyxcclxuICAgICAgfSl9XHJcbiAgICA+XHJcbiAgICAgIHsoKCkgPT4geyBcclxuICAgICAgICBpZiAocHJvcHMubWluaW1hbCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3RpdGxlIHNtYWxsLXRpdGxlJz5cclxuICAgICAgICAgICAge3BhbmVsLmNsaWVudFR5cGUgPT09ICdsb2NhbC1hdXRob3JpdHknID8gJ0xvY2FsIEF1dGhvcml0aWVzJyA6ICdMYXcgUHJhY3Rpc2VzICYgU29saWNpdG9ycyd9XHJcbiAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgfSkoKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbnMgaXMtdGFibGV0Jz5cclxuICAgICAgICB7Y2xpZW50c0xvZ29zQ29udGVudChwYW5lbCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gaHRtbDtcclxufTtcclxuXHJcbmNvbnN0IE91ckNsaWVudHMgPSAocHJvcHM6IE91ckNsaWVudHNQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHNob3dMb2NhbEF1dGggPSB1c2VSZWY8c3RyaW5nPignc2hvdycpO1xyXG4gIGNvbnN0IHNob3dMYXdQcmFjdGlzZXMgPSB1c2VSZWY8c3RyaW5nPignaGlkZScpO1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xyXG4gICAgaWYgKHNob3dMb2NhbEF1dGguY3VycmVudCA9PT0gJ3Nob3cnKSB7XHJcbiAgICAgIHNob3dMb2NhbEF1dGguY3VycmVudCA9ICdoaWRlJztcclxuICAgICAgc2hvd0xhd1ByYWN0aXNlcy5jdXJyZW50ID0gJ3Nob3cnO1xyXG4gICAgfSBlbHNlIGlmIChzaG93TG9jYWxBdXRoLmN1cnJlbnQgPT09ICdoaWRlJykge1xyXG4gICAgICBzaG93TG9jYWxBdXRoLmN1cnJlbnQgPSAnc2hvdyc7XHJcbiAgICAgIHNob3dMYXdQcmFjdGlzZXMuY3VycmVudCA9ICdoaWRlJztcclxuICAgIH1cclxuICAgIHNldFNob3coIXNob3cpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucyc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4nIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cclxuICAgICAgICB7cHJvcHMubWluaW1hbCA/ICcnIDogPGgzIGNsYXNzTmFtZT0ndGl0bGUgbGFyZ2UtdGl0bGUnPk91ciBDbGllbnRzPC9oMz59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQgY2xpZW50cy1zbGlkZXMnPlxyXG4gICAgICAgICAge2NsaWVudHNTbGlkZXNDb250ZW50KHByb3BzLCBzaG93TG9jYWxBdXRoLCBzaG93TGF3UHJhY3Rpc2VzKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7KCgpID0+IHsgXHJcbiAgICAgICAgICBpZiAoQ2xpZW50c0Jhbm5lckNvbmZpZ1twcm9wcy5jbGllbnRUeXBlXS5wYW5lbHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxOZXh0U2xpZGVMaW5rXHJcbiAgICAgICAgICAgICAgICBtaW5pbWFsPXtwcm9wcy5taW5pbWFsfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmV4dFNsaWRlKCl9PlxyXG4gICAgICAgICAgICAgICAgPEFuZ2xlUmlnaHRJY29uIGljb249J2FuZ2xlLXJpZ2h0JyAvPlxyXG4gICAgICAgICAgICAgIDwvTmV4dFNsaWRlTGluaz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbk91ckNsaWVudHMuZGVmYXVsdFByb3BzID0ge1xyXG4gIG1pbmltYWw6IGZhbHNlLFxyXG4gIGNsaWVudFR5cGU6ICdkZWZhdWx0J1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3VyQ2xpZW50cztcclxuIiwiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBTdHlsZWRQcm9taXNlVGlja0ljb24gPSBzdHlsZWQoRm9udEF3ZXNvbWVJY29uKWBcclxuICBjb2xvcjogIzMyNzNkYztcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgeyBTdHlsZWRQcm9taXNlVGlja0ljb24gfTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IFN0eWxlZFByb21pc2VUaWNrSWNvbiB9IGZyb20gJy4vb3VyLXByb21pc2UtYmFubmVyLnN0eWxlJztcclxuXHJcbmNvbnN0IE91clByb21pc2UgPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbnMnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIG91ci1wcm9taXNlJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1jb250ZW50Jz5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RpdGxlJz5PdXIgUHJvbWlzZSB0byBPdXIgQ2xpZW50czwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW5zJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uJz5cclxuICAgICAgICAgICAgICAgIDxwPjxTdHlsZWRQcm9taXNlVGlja0ljb24gaWNvbj0nY2hlY2snIC8+VG8gc2VydmUgeW91ciBkb2N1bWVudHMgcHJvbXB0bHkgYW5kIGluIGFjY29yZGFuY2Ugd2l0aCBhbGwgQ1BSIHJ1bGVzLjwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uJz5cclxuICAgICAgICAgICAgICAgIDxwPjxTdHlsZWRQcm9taXNlVGlja0ljb24gaWNvbj0nY2hlY2snIC8+VG8gc2VydmUgdGhlIHBhcGVycyBpbiBhY2NvcmRpbmcgd2l0aCB5b3VyIHNwZWNpYWwgaW5zdHJ1Y3Rpb25zLjwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW5zJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uJz5cclxuICAgICAgICAgICAgICAgIDxwPjxTdHlsZWRQcm9taXNlVGlja0ljb24gaWNvbj0nY2hlY2snIC8+VG8gZW5zdXJlIGFsbCBEYXRhIFByb3RlY3Rpb24gYW5kIEh1bWFuIFJpZ2h0cyBsZWdpc2xhdGlvbiBpcyBhZGhlcmVkIHRvLjwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uJz5cclxuICAgICAgICAgICAgICAgIDxwPjxTdHlsZWRQcm9taXNlVGlja0ljb24gaWNvbj0nY2hlY2snIC8+VG8ga2VlcCB5b3UgdXBkYXRlZCBhbmQgYWR2aXNlIHlvdSB3aGVuIHNlcnZpY2UgaGFzIGJlZW4gY29tcGxldGVkLjwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW5zJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uJz5cclxuICAgICAgICAgICAgICAgIDxwPjxTdHlsZWRQcm9taXNlVGlja0ljb24gaWNvbj0nY2hlY2snIC8+VG8gbW9uaXRvciBhbGwgY2FzZXMgd2UgYXJlIGRlYWxpbmcgd2l0aCBhbmQgZW5zdXJlIHRoZXkgYXJlIHJldHVybmVkIHRvIHlvdSBvbiB0aW1lLjwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uJz5cclxuICAgICAgICAgICAgICAgIDxwPjxTdHlsZWRQcm9taXNlVGlja0ljb24gaWNvbj0nY2hlY2snIC8+VG8gZW5zdXJlIHRoYXQgYWxsIHN0YXRlbWVudHMgb3IgYWZmYWRhdml0cyBhcmUgY29tcGxldGVkIGNvcnJlY3RseS48L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdXJQcm9taXNlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxudHlwZSBTZW9Qcm9wcyA9IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgY2Fub25pY2FsPzogc3RyaW5nO1xyXG4gIGNzcz86IHN0cmluZztcclxuICBqcz86IHN0cmluZztcclxuICBpbWFnZT86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTRU86IFJlYWN0LkZDPFNlb1Byb3BzPiA9ICh7XHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgY2Fub25pY2FsLFxyXG4gIGNzcyxcclxuICBqcyxcclxuICBpbWFnZSxcclxufSkgPT4gKFxyXG4gIDxIZWFkPlxyXG4gICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICA8bWV0YVxyXG4gICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIlxyXG4gICAgLz5cclxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgIDxtZXRhXHJcbiAgICAgIG5hbWU9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICBjb250ZW50PXtkZXNjcmlwdGlvbn1cclxuICAgIC8+XHJcbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJQcm9wZXIgTm91blwiIC8+XHJcbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2Ake2Nhbm9uaWNhbH1gfSAvPlxyXG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgLz5cclxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XHJcbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJAcHJvcGVybm91bmNvXCIgLz5cclxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQHByb3Blcm5vdW5jb1wiIC8+XHJcbiAgICB7Y3NzICYmIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgJHtjc3N9YH0gLz59XHJcbiAgICB7aW1hZ2UgPyAoXHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtgJHtpbWFnZX1gfSAvPlxyXG4gICAgKSA6IChcclxuICAgICAgPG1ldGFcclxuICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly93d3cucHJvcGVybm91bi5jby9zdGF0aWMvaW1hZ2VzL3Byb3Blci1ub3VuLXNvY2lhbC5wbmdcIlxyXG4gICAgICAvPlxyXG4gICAgKX1cclxuICAgIHtpbWFnZSAmJiA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e2Ake2ltYWdlfWB9IC8+fVxyXG4gICAge2Nhbm9uaWNhbCAmJiA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtgJHtjYW5vbmljYWx9YH0gLz59XHJcbiAgICB7anMgJiYgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPXtgJHtqc31gfT48L3NjcmlwdD59XHJcbiAgPC9IZWFkPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNlcnZpY2VJbmZvIH0gZnJvbSAnLi4vLi4vY29uZmlnL3NlcnZpY2VzLmNvbmZpZyc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcblxyXG50eXBlIFNlcnZpY2VMaXN0UHJvcHMgPSB7XHJcbiAgcmVhZG9ubHkgc2VydmljZUxpc3Q6IFNlcnZpY2VJbmZvW107XHJcbn07XHJcblxyXG5jb25zdCBTZXJ2aWNlTGlzdCA9IFJlYWN0Lm1lbW88U2VydmljZUxpc3RQcm9wcz4oKHsgc2VydmljZUxpc3QgfSkgPT4gKFxyXG4gIDxGcmFnbWVudD5cclxuICAgIHtzZXJ2aWNlTGlzdC5tYXAoKHsgZGVzY3JpcHRpb24gfTogU2VydmljZUluZm8sIGluZGV4OiBudW1iZXIpID0+IChcclxuICAgICAgICA8aDIga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdzdWJ0aXRsZSc+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249J2NoZWNrJyAvPlxyXG4gICAgICAgICAge2AgJHtkZXNjcmlwdGlvbn0gYH1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICApXHJcbiAgICApfVxyXG4gIDwvRnJhZ21lbnQ+XHJcbikpO1xyXG5cclxuU2VydmljZUxpc3QuZGlzcGxheU5hbWUgPSAnU2VydmljZUxpc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZUxpc3Q7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBkZXZpY2UgZnJvbSAnLi4vLi4vY29uZmlnL2RldmljZS5jb25maWcnO1xyXG5cclxuY29uc3QgU2lsdmVyQmFubmVyT3V0ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICNGOUY5Rjk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2YzZjM7XHJcbiAgcGFkZGluZzogMjVweCAwIDA7XHJcbmA7XHJcblxyXG5jb25zdCBTaWx2ZXJCYW5uZXJJbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHtcclxuICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtkZXZpY2UubGFwdG9wTH0ge1xyXG4gICAgbWF4LXdpZHRoOiAxMTUycHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtkZXZpY2UubGFwdG9wWEx9IHtcclxuICAgIG1heC13aWR0aDogMTM0NHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCB7IFNpbHZlckJhbm5lck91dGVyLCBTaWx2ZXJCYW5uZXJJbm5lciB9O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgU2lsdmVyQmFubmVyT3V0ZXIsIFNpbHZlckJhbm5lcklubmVyIH0gZnJvbSAnLi9zaWx2ZXItYmFubmVyLnN0eWxlJztcclxuXHJcbmNvbnN0IFNpbHZlckJhbm5lciA9IChwcm9wcykgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNpbHZlckJhbm5lck91dGVyIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfT5cclxuICAgICAgPFNpbHZlckJhbm5lcklubmVyPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9TaWx2ZXJCYW5uZXJJbm5lcj5cclxuICAgIDwvU2lsdmVyQmFubmVyT3V0ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbHZlckJhbm5lcjtcclxuIiwiY29uc3QgQ2xpZW50VHlwZXNDb25maWcgPSB7XHJcbiAgJ2JlZGZvcmRzaGlyZS1jbGllbnRzJzoge1xyXG4gICAgc3VidGl0bGU6ICdPdXIgQ2xpZW50cyBpbiBCZWRmb3Jkc2hpcmUnLFxyXG4gICAgY29udGVudDogYFxyXG4gICAgICA8cD5CZWluZyB0aGF0IExlZ2FsIFNlcnZlIGlzIGJhc2VkIGluIEJlZGZvcmRzaGlyZSwgd2UgaGF2ZSBhbHdheXMgc2hhcmVkIGEgc3Ryb25nIHJlbGF0aW9uc2hpcCB3aXRoIG91ciBCZWRmb3JkIGNsaWVudHMuPC9wPlxyXG4gICAgICA8cD5IYXZpbmcgd29ya2VkIGNsb3NlbHkgd2l0aCB0aGUgQmVkZm9yZCBCb3JvdWdoIENvdW5jaWwsIGFzIHdlbGwgYXMgcHJpdmF0ZSBsZWdhbCBwcmFjdGlzZXMgc3VjaCBhcyBGdWxsZXJzIFNvbGljaXRvcnMsIHdlIGFyZSB3ZWxsIGluIHR1bmUgd2l0aCB0aGUgdmFyaW91cyB3YXlzIG9mIHdvcmtpbmcgYWRvcHRlZCBieSBsb2NhbCBhdXRob3JpdGllcyBhbmQgcHJpdmF0ZSBmaXJtcy48L3A+XHJcbiAgICBgXHJcbiAgfSxcclxuICAnYnVja2luZ2hhbXNoaXJlLWNsaWVudHMnOiB7XHJcbiAgICBzdWJ0aXRsZTogJ091ciBDbGllbnRzIGluIEJ1Y2tpbmdoYW1zaGlyZScsXHJcbiAgICBjb250ZW50OiBgXHJcbiAgICAgIDxwPk91ciBjbGllbnRzIGluIEJ1Y2tpbmdoYW1zaGlyZSBhcmUgcHJpbWFyaWx5IGNlbnRlcmVkIGFyb3VuZCBNaWx0b24gS2V5bmVzIGl0c2VsZi48L3A+XHJcbiAgICAgIDxwPlRoZSBleHBhbnNpb24gb2Ygb3VyIHNlcnZpY2VzIGludG8gQnVja2luZ2hhbXNoaXJlIHdhcyBhbHdheXMgYSBuYXR1cmFsIG9uZSwgYmVpbmcgdGhlIEJ1Y2tpbmdoYW1zaGlyZSBpcyBhIG5laWdoYm91cmluZyByZWdpb24gb2Ygb3VyIG5hdGl2ZSBCZWRmb3Jkc2hpcmUuPC9wPlxyXG4gICAgICA8cD5XZSBub3cgb2ZmZXIgYSByYW5nZSBvZiBzZXJ2aWNlcyB0byBvdXIgTWlsdG9uIEtleW5lcyAmIEJ1Y2tpbmdoYW1zaGlyZS1iYXNlZCBjbGllbnRzLCB3aGljaCByYW5nZSBmcm9tIExvY2FsIEF1dGhvcml0aWVzIHRvIHByaXZhdGUgbGVnYWwgcHJhY3Rpc2VzLjwvcD5cclxuICAgIGBcclxuICB9LFxyXG4gICdjYW1icmlkZ2VzaGlyZS1jbGllbnRzJzoge1xyXG4gICAgc3VidGl0bGU6ICdPdXIgQ2xpZW50cyBpbiBDYW1icmlkZ2VzaGlyZScsXHJcbiAgICBjb250ZW50OiBgXHJcbiAgICAgIDxwPk91ciBDYW1icmlkZ2VzaGlyZSBjbGllbnRzIGFyZSBwcmVkb21pbmFudGx5IGJhc2VkIGluIHRoZSBjaXR5IG9mIENhbWJyaWRnZSBpdHNlbGYsIHdpdGggdGhlIG1ham9yaXR5IGJlaW5nIHByaXZhdGUgbGVnYWwgcHJhY3Rpc2VzLjwvcD5cclxuICAgICAgPHA+T3VyIGV4aXN0aW5nIGxvY2FsIGtub3dsZWRnZSBvZiB0aGUgZ2VvZ3JhcGh5IG9mIENhbWJyaWRnZXNoaXJlIGhhcyBiZWVuIGEgdml0YWwgcGFydCBvZiBvdXIgc3VjY2VzcyBpbiB0aGUgcmVnaW9uLCBhbmQgaXMgcGFydCBvZiB0aGUgcmVhc29uIG91ciBjbGllbnRzIGhlcmUgY2hvb3NlIHVzIGZvciB0aGVpciBwcm9jZXNzIHNlcnZpbmcgYW5kIGxlZ2FsIGNvdXJpZXJpbmcgbmVlZHMuPC9wPlxyXG4gICAgYFxyXG4gIH0sXHJcbiAgJ2NsaWVudHMtaW4tc3Vycm91bmRpbmctYXJlYXMnOiB7XHJcbiAgICBzdWJ0aXRsZTogJ091ciBDbGllbnRzIGluIHN1cnJvdW5kaW5nIGFyZWFzJyxcclxuICAgIGNvbnRlbnQ6IGBcclxuICAgICAgPHA+TGVnYWwgU2VydmUgaXMgcHJvdWQgdG8gYmUgYWJsZSB0byBzYXkgdGhhdCBpdCBoYXMgcHJvdmlkZWQgc2VydmljZXMgdG8gY2xpZW50cyBmcm9tIGFyZWFzIGFzIGZhciBhcGFydCBhcyBCb2x0b24sIFdhcnJpbmd0b24gYW5kIE1hbmNoZXN0ZXIuPC9wPlxyXG4gICAgICA8cD5vdXIgZmxleGliaWxpdHkgaGFzIGFsd2F5cyBtYWRlIHVzIGEgd2VsbC1wcmVwYXJlZCBhbmQgYWdpbGUgcHJvdmlkZXIgb2YgUHJvY2VzcyBTZXJ2aW5nIGFuZCBMZWdhbCBDb3VyaWVyIHNlcnZpY2VzLCBpbiBtYW55IHBhcnRzIG9mIHRoZSBjb3VudHJ5LjwvcD5cclxuICAgIGBcclxuICB9LFxyXG4gICdsb2NhbC1hdXRob3JpdHktY2xpZW50cyc6IHtcclxuICAgIHN1YnRpdGxlOiAnT3VyIExvY2FsIEF1dGhvcml0eSBjbGllbnRzJyxcclxuICAgIGNvbnRlbnQ6IGBcclxuICAgICAgPHA+TGVnYWwgU2VydmUgaGF2ZSB3b3JrZWQgd2l0aCBMb2NhbCBBdXRob3JpdGllcyB0aGF0IHJhbmdlIGZyb20gQmVkZm9yZCB0byBhcyBmYXIgYXMgV2FsZXMgKFBvd3lzKSBhbmQgQm9sdG9uLjwvcD5cclxuICAgICAgPHA+QXMgYSByZXB1dGFibGUgcHJvY2VzcyBzZXJ2ZXIgYW5kIGxlZ2FsIGNvdXJpZXIsIHdlIGhhdmUgYWx3YXlzIG1hZGUgaXQgYSBwcmlvcml0eSB0byB3b3JrIHRvIHRoZSBtb3N0IGRpbGlnZW50IG9mIHN0YW5kYXJkcyB3aGVuIHBlcmZvcm1pbmcgb3VyIGR1dGllcywgcGFydGljdWxhcmx5IHdoZW4gaXQgY29tZXMgdG8gZGF0YSBwcm90ZWN0aW9uIGFuZCBjb25maWRlbnRpYWxpdHkuPC9wPlxyXG4gICAgICA8cD5JbiB0aGUgcGFzdCwgb3VyIExvY2FsIEF1dGhvcml0eSBjbGllbnRzIGhhdmUgdHJ1c3RlZCB1cyB0byBmYWNpbGl0YXRlIGFuZCBjYXRlciB0byBhIHdpZGUgcmFuZ2Ugb2YgbmVlZHMgYW5kIHJlcXVpcmVtZW50cywgaW5jbHVkaW5nIENvdXJ0IE9yZGVycy48L3A+XHJcbiAgICBgXHJcbiAgfSxcclxuICAnbGVnYWwtcHJhY3Rpc2UtY2xpZW50cyc6IHtcclxuICAgIHN1YnRpdGxlOiAnT3VyIExhdyBQcmFjdGlzZSBjbGllbnRzJyxcclxuICAgIGNvbnRlbnQ6IGBcclxuICAgICAgPHA+V2Ugb2ZmZXIgZWZmZWN0aXZlIHByb2Nlc3Mgc2VydmVyIGFuZCBsZWdhbCBzdXBwb3J0IHNlcnZpY2VzIHRvIG91ciBjbGllbnRzLCB3aGljaCBpbmNsdWRlIHNvbGljaXRvcnMsIGxhd3llcnMsIGdvdmVybm1lbnQgZGVwYXJ0bWVudHMgJmFtcDsgbWFueSBvdGhlcnMgaW4gTG9uZG9uLCBCZWRmb3Jkc2hpcmUsIEJ1Y2tpbmdoYW1zaGlyZSAmYW1wOyBzdXJyb3VuZGluZyByZWdpb25zLjwvcD5cclxuICAgICAgPHA+QXJlYXMgd2UgQ292ZXI6PC9wPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPkxvbmRvbjwvbGk+XHJcbiAgICAgICAgPGxpPkJlZGZvcmRzaGlyZTwvbGk+XHJcbiAgICAgICAgPGxpPkJ1Y2tpbmdoYW1zaGlyZTwvbGk+XHJcbiAgICAgICAgPGxpPlN1cnJvdW5kaW5nIEJvcm91Z2hzIC8gUmVnaW9uczwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICBgXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50VHlwZXNDb25maWc7IiwiZXhwb3J0IHR5cGUgQ2xpZW50TG9nb0luZm8gPSB7XHJcbiAgcmVhZG9ubHkgaW1hZ2VVcmw6IHN0cmluZztcclxuICByZWFkb25seSBhbHRUYWc6IHN0cmluZztcclxuICByZWFkb25seSByZWdpb246IHN0cmluZ1tdO1xyXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcclxuICByZWFkb25seSBkZWZhdWx0PzogYm9vbGVhbjtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIENsaWVudHNCYW5uZXJQYW5lbENvbmZpZyA9IHtcclxuICByZWFkb25seSBjbGllbnRUeXBlPzogc3RyaW5nO1xyXG4gIHJlYWRvbmx5IHJlZ2lvbj86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIENsaWVudHNCYW5uZXJDb25maWcgPSB7XHJcbiAgcGFuZWxzOiBDbGllbnRzQmFubmVyUGFuZWxDb25maWdbXTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDbGllbnRzTG9nb3MgPSBPYmplY3QuZnJlZXplPFJlY29yZDxzdHJpbmcsIENsaWVudExvZ29JbmZvPj4oe1xyXG4gIGJlZGZvcmRDb3VuY2lsOiB7XHJcbiAgICBpbWFnZVVybDogJ2JlZGZvcmQtYm9yb3VnaC1jb3VuY2lsLWNsaWVudC1sb2dvLnBuZycsXHJcbiAgICBhbHRUYWc6ICdCZWRmb3JkIEJvcm91Z2ggQ291bmNpbCBMb2dvJyxcclxuICAgIHJlZ2lvbjogWydiZWRmb3Jkc2hpcmUnXSxcclxuICAgIHR5cGU6ICdsb2NhbC1hdXRob3JpdHknLFxyXG4gICAgZGVmYXVsdDogdHJ1ZVxyXG4gIH0sXHJcbiAgYm9sdG9uQ291bmNpbDoge1xyXG4gICAgaW1hZ2VVcmw6ICdib2x0b24tY291bmNpbC1jbGllbnQtbG9nby5wbmcnLFxyXG4gICAgYWx0VGFnOiAnQm9sdG9uIENvdW5jaWwgTG9nbycsXHJcbiAgICByZWdpb246IFsnc3Vycm91bmRpbmcnXSxcclxuICAgIHR5cGU6ICdsb2NhbC1hdXRob3JpdHknLFxyXG4gICAgZGVmYXVsdDogdHJ1ZVxyXG4gIH0sXHJcbiAgcG93eXNDb3VuY2lsOiB7XHJcbiAgICBpbWFnZVVybDogJ3Bvd3lzLWNvdW50eS1jb3VuY2lsLXdhbGVzLWNsaWVudC1sb2dvLnBuZycsXHJcbiAgICBhbHRUYWc6ICdQb3d5cyBDb3VudHkgQ291bmNpbCAoaW4gV2FsZXMpIExvZ28nLFxyXG4gICAgcmVnaW9uOiBbJ3N1cnJvdW5kaW5nJ10sXHJcbiAgICB0eXBlOiAnbG9jYWwtYXV0aG9yaXR5JyxcclxuICAgIGRlZmF1bHQ6IHRydWVcclxuICB9LFxyXG4gIG1pbHRvbktleW5lc0NvdW5jaWw6IHtcclxuICAgIGltYWdlVXJsOiAnbWlsdG9uLWtleW5lcy1jb3VuY2lsLWNsaWVudC1sb2dvLnBuZycsXHJcbiAgICBhbHRUYWc6ICdNaWx0b24gS2V5bmVzIENvdW5jaWwnLFxyXG4gICAgcmVnaW9uOiBbJ2J1Y2tpbmdoYW1zaGlyZSddLFxyXG4gICAgdHlwZTogJ2xvY2FsLWF1dGhvcml0eScsXHJcbiAgICBkZWZhdWx0OiB0cnVlXHJcbiAgfSxcclxuICBjYW1icmlkZ2VMYXdQcmFjdGlzZToge1xyXG4gICAgaW1hZ2VVcmw6ICdjYW1icmlkZ2UtZmFtaWx5LWxhdy1wcmFjdGlzZS1jbGllbnQtbG9nby5wbmcnLFxyXG4gICAgYWx0VGFnOiAnQ2FtYnJpZGdlIEZhbWlseSBMYXcgUHJhY3Rpc2UgTG9nbycsXHJcbiAgICByZWdpb246IFsnY2FtYnJpZGdlc2hpcmUnXSxcclxuICAgIHR5cGU6ICdsZWdhbC1wcmFjdGlzZScsXHJcbiAgICBkZWZhdWx0OiB0cnVlXHJcbiAgfSxcclxuICBmdWxsZXJzOiB7XHJcbiAgICBpbWFnZVVybDogJ2Z1bGxlcnMtc29saWNpdG9ycy1iZWRmb3JkLWNsaWVudC1sb2dvLnBuZycsXHJcbiAgICBhbHRUYWc6ICdGdWxsZXJzIFNvbGljaXRvcnMgKGluIEJlZGZvcmQpIExvZ28nLFxyXG4gICAgcmVnaW9uOiBbJ2JlZGZvcmRzaGlyZSddLFxyXG4gICAgdHlwZTogJ2xlZ2FsLXByYWN0aXNlJyxcclxuICAgIGRlZmF1bHQ6IHRydWVcclxuICB9LFxyXG4gIGtlbm5lZHlzOiB7XHJcbiAgICBpbWFnZVVybDogJ0tlbm5lZHlzLWxhdy1zb2xpY2l0b3JzLWNhbWJyaWRnZS1hbmQtbG9uZG9uLWNsaWVudC1sb2dvLnBuZycsXHJcbiAgICBhbHRUYWc6ICdLZW5uZWR5cyBMYXcgKHNlcnZpY2luZyBDYW1icmlkZ2UgJmFtcDsgTG9uZG9uKSBMb2dvJyxcclxuICAgIHJlZ2lvbjogWydjYW1icmlkZ2VzaGlyZScsICdzdXJyb3VuZGluZyddLFxyXG4gICAgdHlwZTogJ2xlZ2FsLXByYWN0aXNlJyxcclxuICAgIGRlZmF1bHQ6IHRydWVcclxuICB9LFxyXG4gIHdhdHNvbnM6IHtcclxuICAgIGltYWdlVXJsOiAnd2F0c29ucy1zb2xpY2l0b3JzLXdhcnJpbmd0b24tY2xpZW50LWxvZ28ucG5nJyxcclxuICAgIGFsdFRhZzogJ1dhdHNvbnMgU29saWNpdG9ycyAoaW4gV2FycmluZ3RvbikgTG9nbycsXHJcbiAgICByZWdpb246IFsnY2FtYnJpZGdlc2hpcmUnXSxcclxuICAgIHR5cGU6ICdsZWdhbC1wcmFjdGlzZScsXHJcbiAgICBkZWZhdWx0OiB0cnVlXHJcbiAgfSxcclxuICByYXlCb3JsZXk6IHtcclxuICAgIGltYWdlVXJsOiAncmF5LWJvcmxleS1kdW5rbGV5LWxscC1taWx0b24ta2V5bmVzLWNsaWVudC1sb2dvLnBuZycsXHJcbiAgICBhbHRUYWc6ICdSYXkgQm9ybGV5IER1bmtsZXkgTExQIENsaWVudCAoTWlsdG9uIEtleW5lcykgTG9nbycsXHJcbiAgICByZWdpb246IFsnYnVja2luZ2hhbXNoaXJlJ10sXHJcbiAgICB0eXBlOiAnbGVnYWwtcHJhY3Rpc2UnXHJcbiAgfSxcclxuICBkYXZpZHNvblNtaXRoOiB7XHJcbiAgICBpbWFnZVVybDogJ2Rhdmlkc29uLXNtaXRoLWNsaWVudC1sb2dvLnBuZycsXHJcbiAgICBhbHRUYWc6ICdEYXZpZHNvbiBTbWl0aCAmIENvIENsaWVudCAoTWlsdG9uIEtleW5lcykgTG9nbycsXHJcbiAgICByZWdpb246IFsnYmVkZm9yZHNoaXJlJ10sXHJcbiAgICB0eXBlOiAnbGVnYWwtcHJhY3Rpc2UnXHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBDbGllbnRzQmFubmVyQ29uZmlnID0gT2JqZWN0LmZyZWV6ZTxSZWNvcmQ8c3RyaW5nLCBDbGllbnRzQmFubmVyQ29uZmlnPj4oe1xyXG4gICdkZWZhdWx0Jzoge1xyXG4gICAgcGFuZWxzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjbGllbnRUeXBlOiAnbG9jYWwtYXV0aG9yaXR5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2xpZW50VHlwZTogJ2xlZ2FsLXByYWN0aXNlJ1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICAnYmVkZm9yZHNoaXJlLWNsaWVudHMnOiB7XHJcbiAgICBwYW5lbHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHJlZ2lvbjogJ2JlZGZvcmRzaGlyZSdcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgJ2J1Y2tpbmdoYW1zaGlyZS1jbGllbnRzJzoge1xyXG4gICAgcGFuZWxzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICByZWdpb246ICdidWNraW5naGFtc2hpcmUnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gICdjYW1icmlkZ2VzaGlyZS1jbGllbnRzJzoge1xyXG4gICAgcGFuZWxzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICByZWdpb246ICdjYW1icmlkZ2VzaGlyZSdcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgJ2NsaWVudHMtaW4tc3Vycm91bmRpbmctYXJlYXMnOiB7XHJcbiAgICBwYW5lbHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHJlZ2lvbjogJ3N1cnJvdW5kaW5nJ1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICAnbG9jYWwtYXV0aG9yaXR5LWNsaWVudHMnOiB7XHJcbiAgICBwYW5lbHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNsaWVudFR5cGU6ICdsb2NhbC1hdXRob3JpdHknXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gICdsZWdhbC1wcmFjdGlzZS1jbGllbnRzJzoge1xyXG4gICAgcGFuZWxzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjbGllbnRUeXBlOiAnbGVnYWwtcHJhY3Rpc2UnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbn0pOyIsImNvbnN0IHNpemUgPSB7XHJcbiAgICBtb2JpbGVTOiAnMzIwcHgnLFxyXG4gICAgbW9iaWxlTTogJzM3NXB4JyxcclxuICAgIG1vYmlsZUw6ICc0MjVweCcsXHJcbiAgICB0YWJsZXQ6ICc3NjhweCcsXHJcbiAgICBsYXB0b3A6ICcxMDI0cHgnLFxyXG4gICAgbGFwdG9wTDogJzEyMTZweCcsXHJcbiAgICBsYXB0b3BYTDogJzE0MDhweCcsXHJcbiAgICBkZXNrdG9wOiAnMjU2MHB4J1xyXG59O1xyXG5cclxuY29uc3QgZGV2aWNlID0ge1xyXG4gICAgbW9iaWxlUzogYChtaW4td2lkdGg6ICR7c2l6ZS5tb2JpbGVTfSlgLFxyXG4gICAgbW9iaWxlTTogYChtaW4td2lkdGg6ICR7c2l6ZS5tb2JpbGVNfSlgLFxyXG4gICAgbW9iaWxlTDogYChtaW4td2lkdGg6ICR7c2l6ZS5tb2JpbGVMfSlgLFxyXG4gICAgdGFibGV0OiBgKG1pbi13aWR0aDogJHtzaXplLnRhYmxldH0pYCxcclxuICAgIGxhcHRvcDogYChtaW4td2lkdGg6ICR7c2l6ZS5sYXB0b3B9KWAsXHJcbiAgICBsYXB0b3BMOiBgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcEx9KWAsXHJcbiAgICBsYXB0b3BYTDogYChtaW4td2lkdGg6ICR7c2l6ZS5sYXB0b3BYTH0pYCxcclxuICAgIGRlc2t0b3A6IGAobWluLXdpZHRoOiAke3NpemUuZGVza3RvcH0pYCxcclxuICAgIGRlc2t0b3BMOiBgKG1pbi13aWR0aDogJHtzaXplLmRlc2t0b3B9KWBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRldmljZTsiLCJpbXBvcnQgeyBJY29uUHJvcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XHJcblxyXG5leHBvcnQgdHlwZSBSb3V0ZSA9IHtcclxuICByZWFkb25seSBwYXRoOiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgaWNvbjogSWNvblByb3A7XHJcbiAgcmVhZG9ubHkgZXhhY3Q/OiBib29sZWFuO1xyXG4gIHJlYWRvbmx5IGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgYWN0aXZlQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgbWV0YUluZm86IHtcclxuICAgIHJlYWRvbmx5IHRpdGxlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUm91dGVzQ29uZmlnID0gT2JqZWN0LmZyZWV6ZTxSZWNvcmQ8c3RyaW5nLCBSb3V0ZT4+KHtcclxuICBIb21lOiB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBleGFjdDogdHJ1ZSxcclxuICAgIGRpc3BsYXlOYW1lOiAnSG9tZScsXHJcbiAgICBhY3RpdmVDbGFzc05hbWU6ICdpcy1hY3RpdmUnLFxyXG4gICAgaWNvbjogJ2hvbWUnLFxyXG4gICAgbWV0YUluZm86IHtcclxuICAgICAgdGl0bGU6ICdQcm9jZXNzIFNlcnZlciBCZWRmb3JkICZhbXA7IExvbmRvbiB8IExlZ2FsIFNlcnZlJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdCZWRmb3Jkc2hpcmUsIEJ1Y2tpbmdoYW1zaGlyZSAmYW1wOyBMb25kb24tYmFzZWQgcHJvY2VzcyBzZXJ2ZXIsIGxlZ2FsIGNvdXJpZXIgJmFtcDsgbGVnYWwgZG9jdW1lbnQgc2VydmVyLidcclxuICAgIH1cclxuICB9LFxyXG4gIFNlcnZpY2VzOiB7XHJcbiAgICBwYXRoOiAnL291ci1zZXJ2aWNlcycsXHJcbiAgICBleGFjdDogdHJ1ZSxcclxuICAgIGRpc3BsYXlOYW1lOiAnU2VydmljZXMnLFxyXG4gICAgYWN0aXZlQ2xhc3NOYW1lOiAnaXMtYWN0aXZlJyxcclxuICAgIGljb246ICdpbmZvJyxcclxuICAgIG1ldGFJbmZvOiB7XHJcbiAgICAgIHRpdGxlOiAnT3VyIFNlcnZpY2VzIHwgUHJvY2VzcyBTZXJ2aW5nLCBMZWdhbCBDb3VyaWVyIFNlcnZpY2VzJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdQcm9jZXNzIFNlcnZpbmcgJmFtcDsgTGVnYWwgQ291cmllciBTZXJ2aWNlcyBpbiBMb25kb24sIEJlZGZvcmRzaGlyZSAmYW1wOyBCdWNraW5naGFtc2hpcmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICAgIFByb2Nlc3NTZXJ2ZXJCZWRmb3JkOiB7XHJcbiAgICAgIHBhdGg6ICcvb3VyLXNlcnZpY2VzL3Byb2Nlc3Mtc2VydmVyLWJlZGZvcmQnLFxyXG4gICAgICBleGFjdDogdHJ1ZSxcclxuICAgICAgZGlzcGxheU5hbWU6ICdQcm9jZXNzIFNlcnZlciBCZWRmb3JkJyxcclxuICAgICAgYWN0aXZlQ2xhc3NOYW1lOiAnaXMtYWN0aXZlJyxcclxuICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICBtZXRhSW5mbzoge1xyXG4gICAgICAgIHRpdGxlOiAnT3VyIFNlcnZpY2VzIHwgUHJvY2VzcyBTZXJ2aW5nLCBMZWdhbCBDb3VyaWVyIFNlcnZpY2VzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2Nlc3MgU2VydmluZyAmYW1wOyBMZWdhbCBDb3VyaWVyIFNlcnZpY2VzIGluIExvbmRvbiwgQmVkZm9yZHNoaXJlICZhbXA7IEJ1Y2tpbmdoYW1zaGlyZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIExlZ2FsQ291cmllckJlZGZvcmQ6IHtcclxuICAgICAgcGF0aDogJy9vdXItc2VydmljZXMvbGVnYWwtY291cmllci1iZWRmb3JkJyxcclxuICAgICAgZXhhY3Q6IHRydWUsXHJcbiAgICAgIGRpc3BsYXlOYW1lOiAnTGVnYWwgQ291cmllciBCZWRmb3JkJyxcclxuICAgICAgYWN0aXZlQ2xhc3NOYW1lOiAnaXMtYWN0aXZlJyxcclxuICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICBtZXRhSW5mbzoge1xyXG4gICAgICAgIHRpdGxlOiAnT3VyIFNlcnZpY2VzIHwgUHJvY2VzcyBTZXJ2aW5nLCBMZWdhbCBDb3VyaWVyIFNlcnZpY2VzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2Nlc3MgU2VydmluZyAmYW1wOyBMZWdhbCBDb3VyaWVyIFNlcnZpY2VzIGluIExvbmRvbiwgQmVkZm9yZHNoaXJlICZhbXA7IEJ1Y2tpbmdoYW1zaGlyZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICBDb250YWN0OiB7XHJcbiAgICBwYXRoOiAnL2NvbnRhY3QtbGVnYWwtc2VydmUnLFxyXG4gICAgZXhhY3Q6IHRydWUsXHJcbiAgICBkaXNwbGF5TmFtZTogJ0NvbnRhY3QnLFxyXG4gICAgYWN0aXZlQ2xhc3NOYW1lOiAnaXMtYWN0aXZlJyxcclxuICAgIGljb246ICdpbmZvJyxcclxuICAgIG1ldGFJbmZvOiB7XHJcbiAgICAgIHRpdGxlOiAnUHJvY2VzcyBTZXJ2aW5nIEVucXVpcmllcyB8IENvbnRhY3QgTGVnYWwgU2VydmUgQmVkZm9yZCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRW5xdWlyZSBhYm91dCB5b3VyIG5leHQgUHJvY2VzcyBTZXJ2ZXIuJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgQ2xpZW50czoge1xyXG4gICAgcGF0aDogJy9vdXItY2xpZW50cycsXHJcbiAgICBleGFjdDogdHJ1ZSxcclxuICAgIGRpc3BsYXlOYW1lOiAnT3VyIENsaWVudHMnLFxyXG4gICAgYWN0aXZlQ2xhc3NOYW1lOiAnaXMtYWN0aXZlJyxcclxuICAgIGljb246ICdpbmZvJyxcclxuICAgIG1ldGFJbmZvOiB7XHJcbiAgICAgIHRpdGxlOiAnT3VyIENsaWVudHMgYWNyb3NzIEJlZGZvcmRzaGlyZSwgQnVja2luZ2hhbXNoaXJlICYgQ2FtYnJpZGdlc2hpcmUgfCBQcm9jZXNzIFNlcnZpbmcsIExlZ2FsIENvdXJpZXIgU2VydmljZXMnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1NlZSBvdXIgY2xpZW50cywgTG9jYWwgQXV0aG9yaXRpZXMgYW5kIExlZ2FsIFByYWN0aXNlcyByYW5naW5nIGFjcm9zcyBCZWRmb3Jkc2hpcmUsIEJ1Y2tpbmdoYW1zaGlyZSwgQ2FtYnJpZGdlc2hpcmUgJiBMb25kb24nXHJcbiAgICB9XHJcbiAgfSxcclxuICAgIENsaWVudFR5cGU6IHtcclxuICAgICAgcGF0aDogJy9vdXItY2xpZW50cy86Y2xpZW50VHlwZScsXHJcbiAgICAgIGV4YWN0OiB0cnVlLFxyXG4gICAgICBkaXNwbGF5TmFtZTogJ091ciBDbGllbnRzJyxcclxuICAgICAgYWN0aXZlQ2xhc3NOYW1lOiAnaXMtYWN0aXZlJyxcclxuICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICBtZXRhSW5mbzoge1xyXG4gICAgICAgIHRpdGxlOiAnT3VyIENsaWVudHMgYWNyb3NzIEJlZGZvcmRzaGlyZSwgQnVja2luZ2hhbXNoaXJlICYgQ2FtYnJpZGdlc2hpcmUgfCBQcm9jZXNzIFNlcnZpbmcsIExlZ2FsIENvdXJpZXIgU2VydmljZXMnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2VlIG91ciBjbGllbnRzLCBMb2NhbCBBdXRob3JpdGllcyBhbmQgTGVnYWwgUHJhY3Rpc2VzIHJhbmdpbmcgYWNyb3NzIEJlZGZvcmRzaGlyZSwgQnVja2luZ2hhbXNoaXJlLCBDYW1icmlkZ2VzaGlyZSAmIExvbmRvbidcclxuICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIiwiZXhwb3J0IHR5cGUgU2VydmljZUluZm8gPSB7XHJcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb246IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXJ2aWNlSW5mb0NvbmZpZyA9IE9iamVjdC5mcmVlemU8UmVjb3JkPHN0cmluZywgU2VydmljZUluZm8+Pih7XHJcbiAgcHJvY2Vzc1NlcnZpbmc6IHtcclxuICAgIGRlc2NyaXB0aW9uOiAnUHJvZmVzc2lvbmFseSBoYW5kbGVkIGFuZCB0aW1lbHkgUHJvY2VzcyBTZXJ2aW5nJ1xyXG4gIH0sXHJcbiAgbGVnYWxDb3VyaWVyOiB7XHJcbiAgICBkZXNjcmlwdGlvbjogJ0xlZ2FsIGNvdXJpZXIgc2VydmljZXMgdGhhdCBhcmUgZmxleGlibGUgJiBhY2NvbW1vZGF0aW5nJ1xyXG4gIH0sXHJcbiAgcHJpdmFjeToge1xyXG4gICAgZGVzY3JpcHRpb246ICdHdWFyYW50ZWVkIHByaXZhY3kgYW5kIGNvbmZpZGVudGlhbGl0eSdcclxuICB9XHJcbn0pOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zLCBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBleGVjT25jZSwgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoLCByZXNvbHZlSHJlZiB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyBmcm9tIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBwYWdlIChicm93c2VyIG9ubHkpLlxuICovXG5mdW5jdGlvbiBpc0xvY2FsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW5cbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICBpZiAoXG4gICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgIGUubWV0YUtleSB8fFxuICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIGNoaWxkRWxtICYmIGNoaWxkRWxtLnRhZ05hbWUpIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICBpZiAoXG4gICAgICBjaGlsZFByb3BzLmhyZWYgJiZcbiAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgKSB7XG4gICAgICBjaGlsZFByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChjaGlsZFByb3BzLmhyZWYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvc2VhcmNoLXBhcmFtcy10by11cmwtcXVlcnknXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQge1xuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGJhc2VQYXRoXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICA6IGZpbmFsVXJsLmhyZWZcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRyeVBhcnNlUmVsYXRpdmVVcmwoXG4gIHVybDogc3RyaW5nXG4pOiBudWxsIHwgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4ge1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIF9fTiB9ID0gZS5zdGF0ZVxuICAgIGlmICghX19OKSB7XG4gICAgICAvLyB0aGlzIGhpc3Rvcnkgc3RhdGUgd2Fzbid0IGNyZWF0ZWQgYnkgbmV4dC5qcyBzbyBpdCBjYW4gYmUgaWdub3JlZFxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxCYXNlUGF0aChhcylcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVybiBmYWxzZVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwoY2xlYW5lZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8ob3B0aW9ucy5fTl9YLCBvcHRpb25zLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciwgZXJyb3I6IGVyciB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgICAgIChyZXMpID0+XG4gICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgICB9IGFzIFJvdXRlSW5mbylcbiAgICAgICAgICApXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm5cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGVuY29kZSBhcyBlbmNvZGVRdWVyeXN0cmluZyB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIC8vIHF1ZXJ5ID0gJycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5KTtcbiAgICBxdWVyeSA9IGVuY29kZVF1ZXJ5c3RyaW5nKHF1ZXJ5KVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoJ2h0dHA6Ly9uJylcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBmaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFyc2VyIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJztcclxuaW1wb3J0IHsgTWV0YUluZm8sIE91clByb21pc2UsIEhlcm8sIFNpbHZlckJhbm5lciwgSW5saW5lQ29udGFjdFBhbmVsLCBPdXJDbGllbnRzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFJvdXRlc0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9yb3V0ZXMuY29uZmlnJztcclxuaW1wb3J0IENsaWVudFR5cGVzQ29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy9jbGllbnQtdHlwZS5jb25maWcnO1xyXG5cclxuY29uc3QgUHJvY2Vzc1NlcnZlckltZyA9ICcvaW1nL3Byb2Nlc3Mtc2VydmluZy1pbi1iZWRmb3JkLmpwZyc7XHJcblxyXG5mdW5jdGlvbiBDbGllbnQoe2NsaWVudFR5cGV9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndmlldy13cmFwcGVyJz5cclxuICAgICAgPE1ldGFJbmZvIHsuLi5Sb3V0ZXNDb25maWcuQ2xpZW50cy5tZXRhSW5mb30gLz5cclxuICAgICAgPEhlcm8gaXRlbT0nQ2xpZW50VHlwZScgY2xpZW50VHlwZT17Y2xpZW50VHlwZX0gLz5cclxuICAgICAgPFNpbHZlckJhbm5lciBjbGFzc05hbWU9J2lzLWhpZGRlbi1tb2JpbGUnPlxyXG4gICAgICAgIDxPdXJDbGllbnRzIG1pbmltYWw9e3RydWV9IGNsaWVudFR5cGU9e2NsaWVudFR5cGV9IC8+XHJcbiAgICAgIDwvU2lsdmVyQmFubmVyPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lciBkYXNoYm9hcmQtY29udGVudCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbnMnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbic+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RpdGxlJz57Q2xpZW50VHlwZXNDb25maWdbY2xpZW50VHlwZV0uc3VidGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW5zJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gaXMtdGhyZWUtcXVhcnRlcnMnPlxyXG4gICAgICAgICAgICAgICAgICB7UGFyc2VyKENsaWVudFR5cGVzQ29uZmlnW2NsaWVudFR5cGVdLmNvbnRlbnQpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGlzLW9uZS1xdWFydGVyIGhhcy10ZXh0LWNlbnRlcmVkJz5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1Byb2Nlc3NTZXJ2ZXJJbWd9IGNsYXNzTmFtZT0nZmxvYXQtcmlnaHQnIGFsdD0nTGVnYWwgU3VwcG9ydCBTZXJ2aWNlcywgaW5jbHVkaW5nIENvdXJ0IE9yZGVyIHNlcnZpbmcnLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxPdXJQcm9taXNlIC8+XHJcbiAgICAgICAgPElubGluZUNvbnRhY3RQYW5lbCAvPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IE9iamVjdC5rZXlzKENsaWVudFR5cGVzQ29uZmlnKS5tYXAoa2V5ID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHR5cGU6IGtleVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBmYWxsYmFjazogZmFsc2VcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBjbGllbnRUeXBlID0gcGFyYW1zLnR5cGU7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNsaWVudFR5cGVcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodG1sLXJlYWN0LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5c3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhlbG1ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieXVwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=