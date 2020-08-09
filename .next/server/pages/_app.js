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

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "120r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./config/device.config.ts
var device_config = __webpack_require__("AhWa");

// CONCATENATED MODULE: ./components/silver-banner/silver-banner.style.tsx


const SilverBannerOuter = external_styled_components_default.a.div.withConfig({
  displayName: "silver-bannerstyle__SilverBannerOuter",
  componentId: "sc-1k91ury-0"
})(["background:#F9F9F9;border-bottom:1px solid #f3f3f3;padding:25px 0 0;"]);
const SilverBannerInner = external_styled_components_default.a.div.withConfig({
  displayName: "silver-bannerstyle__SilverBannerInner",
  componentId: "sc-1k91ury-1"
})(["margin:0 auto;@media ", "{max-width:960px;}@media ", "{max-width:1152px;}@media ", "{max-width:1344px;}"], device_config["a" /* default */].laptop, device_config["a" /* default */].laptopL, device_config["a" /* default */].laptopXL);

// CONCATENATED MODULE: ./components/silver-banner/silver-banner.tsx
var __jsx = external_react_default.a.createElement;



const SilverBanner = props => {
  return __jsx(SilverBannerOuter, {
    className: props.className
  }, __jsx(SilverBannerInner, null, props.children));
};

/* harmony default export */ var silver_banner = __webpack_exports__["a"] = (SilverBanner);

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

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

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var _querystring = __webpack_require__("8xkj"); // Format function modified from nodejs
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

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "AhWa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (device);

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

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

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
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
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "I/1N":
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "M5QN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/our-promise-banner/our-promise-banner.style.tsx


const StyledPromiseTickIcon = external_styled_components_default()(react_fontawesome_["FontAwesomeIcon"]).withConfig({
  displayName: "our-promise-bannerstyle__StyledPromiseTickIcon",
  componentId: "sc-1c0iim0-0"
})(["color:#3273dc;margin-right:10px;"]);

// CONCATENATED MODULE: ./components/our-promise-banner/our-promise-banner.tsx
var __jsx = external_react_default.a.createElement;



const OurPromise = () => __jsx("div", {
  className: "columns"
}, __jsx("div", {
  className: "column"
}, __jsx("div", {
  className: "card our-promise"
}, __jsx("div", {
  className: "card-content"
}, __jsx("h2", {
  className: "title"
}, "Our Promise to Our Clients"), __jsx("div", {
  className: "content"
}, __jsx("div", {
  className: "columns"
}, __jsx("div", {
  className: "column"
}, __jsx("p", null, __jsx(StyledPromiseTickIcon, {
  icon: "check"
}), "To serve your documents promptly and in accordance with all CPR rules.")), __jsx("div", {
  className: "column"
}, __jsx("p", null, __jsx(StyledPromiseTickIcon, {
  icon: "check"
}), "To serve the papers in according with your special instructions."))), __jsx("div", {
  className: "columns"
}, __jsx("div", {
  className: "column"
}, __jsx("p", null, __jsx(StyledPromiseTickIcon, {
  icon: "check"
}), "To ensure all Data Protection and Human Rights legislation is adhered to.")), __jsx("div", {
  className: "column"
}, __jsx("p", null, __jsx(StyledPromiseTickIcon, {
  icon: "check"
}), "To keep you updated and advise you when service has been completed."))), __jsx("div", {
  className: "columns"
}, __jsx("div", {
  className: "column"
}, __jsx("p", null, __jsx(StyledPromiseTickIcon, {
  icon: "check"
}), "To monitor all cases we are dealing with and ensure they are returned to you on time.")), __jsx("div", {
  className: "column"
}, __jsx("p", null, __jsx(StyledPromiseTickIcon, {
  icon: "check"
}), "To ensure that all statements or affadavits are completed correctly."))))))));

/* harmony default export */ var our_promise_banner = __webpack_exports__["a"] = (OurPromise);

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "OMey":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// CONCATENATED MODULE: ./components/service-list/service-list.tsx
var __jsx = external_react_default.a.createElement;


const ServiceList = external_react_default.a.memo(({
  serviceList
}) => __jsx(external_react_["Fragment"], null, serviceList.map(({
  description
}, index) => __jsx("h2", {
  key: index,
  className: "subtitle"
}, __jsx(react_fontawesome_["FontAwesomeIcon"], {
  icon: "check"
}), ` ${description} `))));
ServiceList.displayName = 'ServiceList';
/* harmony default export */ var service_list = (ServiceList);
// CONCATENATED MODULE: ./config/services.config.ts
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
// CONCATENATED MODULE: ./components/hero/hero.tsx
var hero_jsx = external_react_default.a.createElement;



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
  const serviceList = Object(external_react_["useMemo"])(() => {
    return Object.keys(ServiceInfoConfig).map(key => ServiceInfoConfig[key]);
  }, []);

  function renderHeroContent(item) {
    switch (item) {
      case 'Home':
        return hero_jsx("div", {
          className: "columns"
        }, hero_jsx("div", {
          className: "column"
        }, hero_jsx("div", {
          className: "is-flex is-horizontal-center"
        }, hero_jsx("iframe", {
          title: "Process Serving Information Video",
          width: "650",
          height: "400",
          src: "https://www.youtube.com/embed/vHvd6HaPq_s",
          frameBorder: "0",
          allowFullScreen: true
        }))), hero_jsx("div", {
          className: "column"
        }, hero_jsx(service_list, {
          serviceList: serviceList
        })));

      case 'ClientType':
        return hero_jsx("p", null, HeroProps[props.item][props.clientType].summary);

      default:
        return hero_jsx("p", null, HeroProps[props.item].summary);
    }

    ;
  }

  const heroContent = renderHeroContent(props.item);
  return hero_jsx("section", {
    className: "hero is-dark"
  }, hero_jsx("div", {
    className: "hero-body"
  }, hero_jsx("div", {
    className: "container has-text-centered"
  }, hero_jsx("h1", {
    className: "title blog-title"
  }, props.item !== 'ClientType' ? HeroProps[props.item].title : HeroProps[props.item][props.clientType].title, hero_jsx("hr", null)), heroContent)));
};

/* harmony default export */ var hero = __webpack_exports__["a"] = (Hero);

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "X24+":
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

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
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

/***/ "YYKV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesConfig; });
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

/***/ "YkNe":
/***/ (function(module, exports) {



/***/ }),

/***/ "bgFo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ footer; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ navbar; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ meta_info; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ back_to_top; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ hero["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ our_promise_banner["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ our_clients["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ inline_contact_panel; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ silver_banner["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ card; });

// UNUSED EXPORTS: NotFound, MainContactForm

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./config/routes.config.ts
var routes_config = __webpack_require__("YYKV");

// CONCATENATED MODULE: ./components/footer/footer.tsx
var __jsx = external_react_default.a.createElement;



const MainLogo = '/img/logo-NEW.svg';

const Footer = () => __jsx("footer", {
  className: "footer"
}, __jsx("nav", {
  role: "navigation",
  className: "navbar",
  "aria-label": "main navigation"
}, __jsx("div", {
  className: "navbar-wrapper"
}, __jsx("div", {
  className: "brand-wrapper level"
}, __jsx("img", {
  width: "170",
  src: MainLogo,
  alt: "Legal Serve - Process Server in Bedfordshire & Buckinghamshire"
}), __jsx("span", {
  className: "level-right"
}, "07853 166 674")), __jsx("div", {
  className: "navbar-routes"
}, __jsx(link_default.a, {
  href: routes_config["a" /* RoutesConfig */].Home.path
}, __jsx("span", {
  className: "navbar-item"
}, routes_config["a" /* RoutesConfig */].Home.displayName)), __jsx(link_default.a, {
  href: routes_config["a" /* RoutesConfig */].Services.path
}, __jsx("span", {
  className: "navbar-item"
}, routes_config["a" /* RoutesConfig */].Services.displayName)), __jsx(link_default.a, {
  href: routes_config["a" /* RoutesConfig */].Contact.path
}, __jsx("span", {
  className: "navbar-item"
}, routes_config["a" /* RoutesConfig */].Contact.displayName)), __jsx(link_default.a, {
  href: routes_config["a" /* RoutesConfig */].Clients.path
}, __jsx("span", {
  className: "navbar-item"
}, routes_config["a" /* RoutesConfig */].Clients.displayName))))), __jsx("div", {
  className: "content"
}, "Created by ", __jsx("a", {
  target: "_blank",
  rel: "noopener noreferrer",
  href: "http://www.mydayapp.co.uk/business/"
}, __jsx("strong", null, "MyDay in Business")), " \xA9 2020"));

/* harmony default export */ var footer = (Footer);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/navbar/navbar.style.tsx


const BurgerMenu = external_styled_components_default.a.button.attrs(() => ({
  role: 'button',
  'aria-label': 'Menu'
})).withConfig({
  displayName: "navbarstyle__BurgerMenu",
  componentId: "sc-1iywcax-0"
})(["border:none;background:none;width:3.5rem;height:3.5rem;margin-left:-1rem;cursor:pointer;user-select:none;border-radius:50%;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;transition:opacity 0.4s ease,bottom 0.4s ease;"]);
const BurgerMenuIcon = external_styled_components_default()(react_fontawesome_["FontAwesomeIcon"]).withConfig({
  displayName: "navbarstyle__BurgerMenuIcon",
  componentId: "sc-1iywcax-1"
})(["color:#fff;font-size:1.75em;"]);

// CONCATENATED MODULE: ./components/navbar/navbar.tsx
var navbar_jsx = external_react_default.a.createElement;




const navbar_MainLogo = '/img/logo-NEW.svg';

const NavBar = () => navbar_jsx("nav", {
  role: "navigation",
  className: "navbar",
  "aria-label": "main navigation"
}, navbar_jsx("div", {
  className: "navbar-wrapper"
}, navbar_jsx("div", {
  className: "brand-wrapper level"
}, navbar_jsx("img", {
  width: "170",
  src: navbar_MainLogo,
  alt: "Legal Serve - Process Server in Bedfordshire & Buckinghamshire"
}), navbar_jsx("span", {
  className: "level-right"
}, "07853 166 674")), navbar_jsx("div", {
  className: "navbar-routes"
}, navbar_jsx(link_default.a, {
  href: routes_config["a" /* RoutesConfig */].Home.path
}, navbar_jsx("span", {
  className: "navbar-item"
}, routes_config["a" /* RoutesConfig */].Home.displayName)), navbar_jsx("div", {
  className: "seperator"
}), navbar_jsx(link_default.a, {
  href: routes_config["a" /* RoutesConfig */].Services.path
}, navbar_jsx("span", {
  className: "navbar-item"
}, routes_config["a" /* RoutesConfig */].Services.displayName)), navbar_jsx("div", {
  className: "seperator"
}), navbar_jsx(link_default.a, {
  href: routes_config["a" /* RoutesConfig */].Contact.path
}, navbar_jsx("span", {
  className: "navbar-item"
}, routes_config["a" /* RoutesConfig */].Contact.displayName)), navbar_jsx("div", {
  className: "seperator"
}), navbar_jsx(BurgerMenu, {
  className: "is-hidden-tablet"
}, navbar_jsx(BurgerMenuIcon, {
  className: "is-visible-mobile",
  icon: "bars"
})), navbar_jsx(link_default.a, {
  href: routes_config["a" /* RoutesConfig */].Clients.path
}, navbar_jsx("span", {
  className: "navbar-item is-hidden-mobile"
}, routes_config["a" /* RoutesConfig */].Clients.displayName)))));

/* harmony default export */ var navbar = (NavBar);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__("zIXN");

// CONCATENATED MODULE: ./components/meta-info/meta-info.tsx
var meta_info_jsx = external_react_default.a.createElement;


const MetaInfo = external_react_default.a.memo(({
  title,
  description
}) => meta_info_jsx(external_react_helmet_["Helmet"], null, meta_info_jsx("title", null, title), meta_info_jsx("meta", {
  name: "og:title",
  content: title
}), meta_info_jsx("meta", {
  name: "description",
  content: description
}), meta_info_jsx("meta", {
  name: "og:description",
  content: description
})));
MetaInfo.displayName = 'MetaInfo';
/* harmony default export */ var meta_info = (MetaInfo);
// CONCATENATED MODULE: ./components/not-found/not-found.tsx
var not_found_jsx = external_react_default.a.createElement;



const NotFound = () => {
  const isLocation404 = window && window.location.pathname === '/404';
  const className = `notification tile is-child is-danger ${isLocation404 ? 'rubberBand-animation' : 'hide'}`;
  Object(external_react_["useLayoutEffect"])(() => {
    if (window.location.pathname !== '/404') {
      window.location.href = '/404';
    }
  }, []);
  return not_found_jsx("section", {
    className: "container view-wrapper"
  }, not_found_jsx("div", {
    className: "tile is-parent is-8 is-vertical is-notification-tile is-not-found-tile"
  }, not_found_jsx("div", {
    className: className
  }, not_found_jsx("div", null, not_found_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: "exclamation-circle",
    size: "2x"
  }), not_found_jsx("span", {
    className: "title"
  }, "404 Not Found")), not_found_jsx("p", {
    className: "subtitle"
  }, "The requested page could not be found."))));
};

/* harmony default export */ var not_found = (NotFound);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__("I/1N");
var external_react_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_);

// CONCATENATED MODULE: ./components/back-to-top/back-to-top.style.tsx


const BackToTopLink = external_styled_components_default.a.a.attrs(() => ({
  role: 'button',
  'aria-label': 'BackToTop'
})).withConfig({
  displayName: "back-to-topstyle__BackToTopLink",
  componentId: "k1m7qy-0"
})(["width:3.5rem;z-index:9999;display:block;height:3.5rem;right:6.25rem;cursor:pointer;position:fixed;user-select:none;border-radius:50%;-webkit-touch-callout:none;background:rgb(37,40,47);-webkit-tap-highlight-color:transparent;border:1px solid rgba(255,255,255,0.1);box-shadow:rgba(0,0,0,0.3) 0px 0px 20px;transition:opacity 0.4s ease,bottom 0.4s ease;bottom:", ";opacity:", ";"], props => props.show ? '24px' : '-3.5rem', props => props.show ? 1 : 0);
const AngleDoubleUpIcon = external_styled_components_default()(react_fontawesome_["FontAwesomeIcon"]).withConfig({
  displayName: "back-to-topstyle__AngleDoubleUpIcon",
  componentId: "k1m7qy-1"
})(["display:block;color:#61dafb;font-size:1.75em;padding-left:0.1rem;margin:0.75rem auto auto auto;"]);

// CONCATENATED MODULE: ./components/back-to-top/back-to-top.tsx
var back_to_top_jsx = external_react_default.a.createElement;


 // 'react-scroll' configuration

const back_to_top_scroll = external_react_scroll_default.a.animateScroll;
const scrollOptions = {
  delay: 5,
  duration: 500,
  smooth: 'easeInOutCubic'
}; // Write the show state value to a ref so we can use it as a check to prevent
// ...re-renders on every scroll down that triggers a show for the button

const BackToTop = () => {
  const showRef = Object(external_react_["useRef"])(false);
  const {
    0: show,
    1: setShow
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
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
  return back_to_top_jsx(BackToTopLink, {
    show: show,
    onClick: () => back_to_top_scroll.scrollToTop(scrollOptions)
  }, back_to_top_jsx(AngleDoubleUpIcon, {
    icon: "angle-double-up"
  }));
};

/* harmony default export */ var back_to_top = (BackToTop);
// EXTERNAL MODULE: ./components/hero/hero.tsx + 2 modules
var hero = __webpack_require__("OMey");

// EXTERNAL MODULE: ./components/our-promise-banner/our-promise-banner.tsx + 1 modules
var our_promise_banner = __webpack_require__("M5QN");

// EXTERNAL MODULE: ./components/our-clients/our-clients.tsx + 2 modules
var our_clients = __webpack_require__("xs06");

// EXTERNAL MODULE: ./components/main-contact-form/main-contact-form.tsx
var main_contact_form = __webpack_require__("zFrY");

// CONCATENATED MODULE: ./components/inline-contact-panel/inline-contact-panel.tsx
var inline_contact_panel_jsx = external_react_default.a.createElement;



const InlineContactPanel = () => inline_contact_panel_jsx("div", null, inline_contact_panel_jsx("h3", {
  className: "title"
}, "Contact Us Today"), inline_contact_panel_jsx("div", {
  className: "columns"
}, inline_contact_panel_jsx("div", {
  className: "column"
}, inline_contact_panel_jsx(main_contact_form["a" /* default */], null)), inline_contact_panel_jsx("div", {
  className: "column"
}, inline_contact_panel_jsx("div", {
  className: "card"
}, inline_contact_panel_jsx("div", {
  className: "card-content"
}, inline_contact_panel_jsx("h5", {
  className: "small-title"
}, inline_contact_panel_jsx("strong", null, "Or alternatively, you can contact us directly using any of the below methods:")), inline_contact_panel_jsx("hr", null), inline_contact_panel_jsx("p", null, inline_contact_panel_jsx("strong", null, "Phone"), ": (01234) 92 48 47"), inline_contact_panel_jsx("br", null), inline_contact_panel_jsx("p", null, inline_contact_panel_jsx("strong", null, "Mobile"), ": 07853 166 674"), inline_contact_panel_jsx("br", null), inline_contact_panel_jsx("p", null, inline_contact_panel_jsx("strong", null, "Email"), ": info@legalservebedford.co.uk"), inline_contact_panel_jsx("br", null))))));

/* harmony default export */ var inline_contact_panel = (InlineContactPanel);
// EXTERNAL MODULE: ./components/silver-banner/silver-banner.tsx + 1 modules
var silver_banner = __webpack_require__("120r");

// CONCATENATED MODULE: ./components/card/card.style.tsx

const StyledCard = external_styled_components_default.a.div.attrs(props => ({
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
const StyledCardImage = external_styled_components_default.a.div.attrs(() => ({
  className: 'card-image'
})).withConfig({
  displayName: "cardstyle__StyledCardImage",
  componentId: "sc-1n5xuqv-1"
})([""]);
const StyledCardContent = external_styled_components_default.a.div.attrs(() => ({
  className: 'card-content'
})).withConfig({
  displayName: "cardstyle__StyledCardContent",
  componentId: "sc-1n5xuqv-2"
})(["background-color:transparent;padding:1.5rem;"]);

// CONCATENATED MODULE: ./components/card/card.tsx
var card_jsx = external_react_default.a.createElement;


const Card = props => {
  return card_jsx(StyledCard, {
    dark: props.dark,
    horizontal: props.horizontal
  }, (() => {
    if (props.image) {
      return card_jsx(CardImage, {
        src: props.image.src,
        alt: props.image.alt
      });
    }
  })(), card_jsx(CardContent, null, card_jsx(CardTitle, {
    size: props.title.size,
    content: props.title.content,
    className: props.title.className
  }), card_jsx("div", {
    className: "content"
  }, props.children)));
};
const CardImage = props => {
  return card_jsx(StyledCardImage, null, card_jsx("figure", {
    className: "image is4by3"
  }, card_jsx("img", {
    src: props.src,
    alt: props.alt
  })));
};
const CardContent = props => {
  return card_jsx(StyledCardContent, null, props.children);
};
const CardTitle = props => {
  return props.size === 'large' ? card_jsx("h3", {
    className: props.className
  }, props.content) : card_jsx("h4", {
    className: props.className
  }, props.content);
};
CardTitle.defaultProps = {
  size: 'large',
  content: null,
  className: ''
};
/* harmony default export */ var card = (Card);
// CONCATENATED MODULE: ./components/index.ts














/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
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

/***/ "cE6r":
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

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

var _router = __webpack_require__("nOHt");

var _router2 = __webpack_require__("elyg");
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
    if (false) {}
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
  if (false) {}

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

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// CONCATENATED MODULE: ./theme/colors.ts
const colors = {
  colorHeroIsDark: '#282c34',
  colorNavBar: '#20232a',
  colorBlueHighlight: '#61dafb'
};
/* harmony default export */ var theme_colors = (colors);
// CONCATENATED MODULE: ./theme/index.ts

const theme = {
  colors: theme_colors
};
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: ./components/index.ts + 10 modules
var components = __webpack_require__("bgFo");

// CONCATENATED MODULE: ./layouts/app-layout.tsx
var __jsx = external_react_default.a.createElement;



const Layout = ({
  children // deviceType: { mobile, tablet, desktop },

}) => {
  return __jsx(external_react_["Fragment"], null, __jsx(components["g" /* NavBar */], null), children, __jsx(components["a" /* BackToTop */], null), __jsx(components["c" /* Footer */], null));
};

/* harmony default export */ var app_layout = (Layout);
// EXTERNAL MODULE: ./assets/style/main.scss
var main = __webpack_require__("YkNe");

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__("sLJp");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// CONCATENATED MODULE: ./config/fa.config.ts



fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faCheck"], free_solid_svg_icons_["faAt"], free_solid_svg_icons_["faPhone"], free_solid_svg_icons_["faMobile"], free_solid_svg_icons_["faEnvelope"], free_solid_svg_icons_["faAddressBook"], free_solid_svg_icons_["faBars"], free_solid_svg_icons_["faUser"], free_brands_svg_icons_["faReact"], free_brands_svg_icons_["faGithub"], free_brands_svg_icons_["faMediumM"], free_brands_svg_icons_["faTwitter"], free_solid_svg_icons_["faInfoCircle"], free_solid_svg_icons_["faAngleDoubleUp"], free_solid_svg_icons_["faAngleRight"], free_solid_svg_icons_["faExternalLinkAlt"], free_solid_svg_icons_["faExclamationCircle"]);
// CONCATENATED MODULE: ./pages/_app.tsx
var _app_jsx = external_react_default.a.createElement;








class _app_MyApp extends app_default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return _app_jsx(external_styled_components_["ThemeProvider"], {
      theme: theme
    }, _app_jsx(app_layout, null, _app_jsx(Component, pageProps)));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_MyApp);

/***/ }),

/***/ "dZ6Y":
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

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _searchParamsToUrlQuery = __webpack_require__("cE6r");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _normalizeTrailingSlash = __webpack_require__("X24+");

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
    if (false) {}

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

      if (false) {}

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
          if (false) {}

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

      if (false) {}

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
    if (false) {}

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

      if (false) {}

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

    if (false) {}

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

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

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

/***/ "g/15":
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

var _formatUrl = __webpack_require__("6D7l");
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
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
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

/***/ "hS4m":
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

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "sLJp":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "xs06":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./config/clients-banner.config.ts
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
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./config/device.config.ts
var device_config = __webpack_require__("AhWa");

// CONCATENATED MODULE: ./components/our-clients/our-clients.style.tsx


 // types

const StyledColumn = external_styled_components_default.a.div.withConfig({
  displayName: "our-clientsstyle__StyledColumn",
  componentId: "sc-1ngcxfj-0"
})(["padding:0 2em;"]);
const NextSlideLink = external_styled_components_default.a.a.attrs(() => ({
  role: 'button',
  'aria-label': 'Next'
})).withConfig({
  displayName: "our-clientsstyle__NextSlideLink",
  componentId: "sc-1ngcxfj-1"
})(["width:3.5rem;display:block;height:3.5rem;right:1.25rem;cursor:pointer;position:absolute;user-select:none;border-radius:50%;-webkit-touch-callout:none;background:rgb(37,40,47);-webkit-tap-highlight-color:transparent;border:1px solid rgba(255,255,255,0.1);box-shadow:rgba(0,0,0,0.3) 0px 0px 20px;transition:opacity 0.4s ease,bottom 0.4s ease;top:", ";opacity:0.5;@media ", "{top:", ";}"], props => props.minimal ? '10%' : '18%', device_config["a" /* default */].tablet, props => props.minimal ? '28%' : '52%');
const AngleRightIcon = external_styled_components_default()(react_fontawesome_["FontAwesomeIcon"]).withConfig({
  displayName: "our-clientsstyle__AngleRightIcon",
  componentId: "sc-1ngcxfj-2"
})(["display:block;color:#fff;font-size:1.75em;padding-left:0.1rem;margin:0.75rem auto auto auto;"]);

// CONCATENATED MODULE: ./components/our-clients/our-clients.tsx
var __jsx = external_react_default.a.createElement;




const OurServicesImg = '/img/court-order-serving-bedford.png'; // types

const clientsSlidesContent = (props, showLocalAuth, showLawPractises) => {
  const clientType = props.clientType;
  let html = [];

  const clientsLogosContent = panel => {
    let clientsLogosHtml = [];
    Object.keys(ClientsLogos).forEach((val, index) => {
      const ClientLogo = ClientsLogos[val];

      if ((panel.clientType && ClientLogo.type === panel.clientType || panel.region && ClientLogo.region.includes(panel.region)) && (clientType === 'default' && ClientLogo.default || clientType !== 'default') && clientsLogosHtml.length < 5) {
        clientsLogosHtml.push(__jsx(StyledColumn, {
          key: ClientLogo.imageUrl,
          className: "column has-text-centered"
        }, __jsx("img", {
          src: `/img/client-logos/${ClientLogo.imageUrl}`,
          alt: ClientLogo.altTag
        })));
      }
    });
    return clientsLogosHtml;
  };

  ClientsBannerConfig[clientType].panels.forEach((panel, index) => {
    html.push(__jsx("div", {
      key: panel.clientType || panel.region,
      className: external_classnames_default()({
        'fadeIn-animation': ClientsBannerConfig[clientType].panels.length > 1,
        'show': ClientsBannerConfig[clientType].panels.length > 1 && index === 0 ? showLocalAuth.current === 'show' : showLawPractises.current === 'show',
        'hide': ClientsBannerConfig[clientType].panels.length > 1 && index === 1 ? showLawPractises.current === 'hide' : showLocalAuth.current === 'hide'
      })
    }, (() => {
      if (props.minimal !== true) {
        return __jsx("h4", {
          className: "title small-title"
        }, panel.clientType === 'local-authority' ? 'Local Authorities' : 'Law Practises & Solicitors');
      }
    })(), __jsx("div", {
      className: "columns is-tablet"
    }, clientsLogosContent(panel))));
  });
  return html;
};

const OurClients = props => {
  const showLocalAuth = Object(external_react_["useRef"])('show');
  const showLawPractises = Object(external_react_["useRef"])('hide');
  const {
    0: show,
    1: setShow
  } = Object(external_react_["useState"])(false);

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
    className: "columns"
  }, __jsx("div", {
    className: "column",
    style: {
      position: 'relative'
    }
  }, props.minimal ? '' : __jsx("h3", {
    className: "title large-title"
  }, "Our Clients"), __jsx("div", {
    className: "content clients-slides"
  }, clientsSlidesContent(props, showLocalAuth, showLawPractises)), (() => {
    if (ClientsBannerConfig[props.clientType].panels.length > 1) {
      return __jsx(NextSlideLink, {
        minimal: props.minimal,
        onClick: () => nextSlide()
      }, __jsx(AngleRightIcon, {
        icon: "angle-right"
      }));
    }
  })()));
};

OurClients.defaultProps = {
  minimal: false,
  clientType: 'default'
};
/* harmony default export */ var our_clients = __webpack_exports__["a"] = (OurClients);

/***/ }),

/***/ "zFrY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("C8TP");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
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
    className: "help is-danger"
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
    onSubmit: onSubmit
  }, ({
    handleSubmit,
    values,
    errors,
    touched
  }) => __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    id: "contact-form",
    onSubmit: handleSubmit,
    method: "GET"
  }, __jsx("div", {
    className: "field"
  }, __jsx("div", {
    className: "control has-icons-left has-icons-right"
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    className: `input ${touched.Name && errors.Name ? 'is-danger' : ''} ${touched.Name && !errors.Name ? 'is-success' : ''}`,
    placeholder: "Your Name",
    name: "Name"
  }), __jsx("span", {
    className: "icon is-small is-left"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: "user"
  }))), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    component: FormikError,
    name: "Name"
  })), __jsx("div", {
    className: "field"
  }, __jsx("div", {
    className: "control has-icons-left has-icons-right"
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    className: `input ${touched.Company && errors.Company ? 'is-danger' : ''} ${touched.Company && !errors.Company ? 'is-success' : ''}`,
    placeholder: "Company / Organisation",
    name: "Company"
  }), __jsx("span", {
    className: "icon is-small is-left"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: "at"
  }))), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    component: FormikError,
    name: "Company"
  })), __jsx("div", {
    className: "field"
  }, __jsx("div", {
    className: "control has-icons-left has-icons-right"
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "email",
    className: `input ${touched.Email && errors.Email ? 'is-danger' : ''} ${touched.Email && !errors.Email ? 'is-success' : ''}`,
    placeholder: "E-mail Address",
    "aria-describedby": "emailHelp",
    name: "Email"
  }), __jsx("span", {
    className: "icon is-small is-left"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: "at"
  }))), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    component: FormikError,
    name: "Email"
  })), __jsx("div", {
    className: "field"
  }, __jsx("div", {
    className: "control has-icons-left has-icons-right"
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "Phone",
    className: `input ${touched.Phone && errors.Phone ? 'is-danger' : ''} ${touched.Phone && !errors.Phone ? 'is-success' : ''}`,
    placeholder: "Phone Number",
    "aria-describedby": "phoneHelp",
    name: "Phone"
  }), __jsx("span", {
    className: "icon is-small is-left"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: "phone"
  }))), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    component: FormikError,
    name: "Phone"
  })), __jsx("div", {
    className: "field"
  }, __jsx("div", {
    className: "control has-icons-left has-icons-right"
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    component: "textarea",
    className: `textarea ${touched.Message && errors.Message ? 'is-danger' : ''} ${touched.Message && !errors.Message ? 'is-success' : ''}`,
    placeholder: "Your Message",
    name: "Message"
  })), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    component: FormikError,
    name: "Message"
  })), __jsx("div", {
    className: "field buttons is-right"
  }, __jsx("div", {
    className: "control"
  }, __jsx("button", {
    type: "submit",
    className: "button is-primary"
  }, "Submit")))));
};

/* harmony default export */ __webpack_exports__["a"] = (MainContactForm);

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });