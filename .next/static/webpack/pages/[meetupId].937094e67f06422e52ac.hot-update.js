webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/cjs/react.production.min */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ "./components/meetups/MeetupDetail.js");
/* harmony import */ var next_dist_next_server_lib_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_dist_next_server_lib_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_head__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Korisnik\\Desktop\\06-onwards-to-a-bigger-project-starting-project\\pages\\[meetupId]\\index.js";




function MeetupDetails(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_dist_next_server_lib_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: props.meetupData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: props.meetupData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__["default"], {
      image: props.meetupData.image,
      title: props.meetupData.title,
      address: props.meetupData.address,
      description: props.meetupData.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

_c = MeetupDetails;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetails);

var _c;

$RefreshReg$(_c, "MeetupDetails");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzIiwicHJvcHMiLCJtZWV0dXBEYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQzVCLHNCQUNFLHFFQUFDLHVFQUFEO0FBQUEsNEJBQ0UscUVBQUMscUVBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFRQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFFRixLQUFLLENBQUNDLFVBQU4sQ0FBaUJFO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLHFFQUFDLHdFQUFEO0FBQ0UsV0FBSyxFQUFFSCxLQUFLLENBQUNDLFVBQU4sQ0FBaUJHLEtBRDFCO0FBRUUsV0FBSyxFQUFFSixLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLEtBRjFCO0FBR0UsYUFBTyxFQUFFRixLQUFLLENBQUNDLFVBQU4sQ0FBaUJJLE9BSDVCO0FBSUUsaUJBQVcsRUFBRUwsS0FBSyxDQUFDQyxVQUFOLENBQWlCRTtBQUpoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDs7S0FmUUosYTs7QUFvRU1BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1ttZWV0dXBJZF0uOTM3MDk0ZTY3ZjA2NDIyZTUyYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pblwiO1xyXG5pbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWRcIjtcclxuXHJcbmZ1bmN0aW9uIE1lZXR1cERldGFpbHMocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3Byb3BzLm1lZXR1cERhdGEudGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwcm9wcy5tZWV0dXBEYXRhLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNZWV0dXBEZXRhaWxcclxuICAgICAgICBpbWFnZT17cHJvcHMubWVldHVwRGF0YS5pbWFnZX1cclxuICAgICAgICB0aXRsZT17cHJvcHMubWVldHVwRGF0YS50aXRsZX1cclxuICAgICAgICBhZGRyZXNzPXtwcm9wcy5tZWV0dXBEYXRhLmFkZHJlc3N9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e3Byb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgIC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL3ppdmFub3ZpYzEzOnppdmFub3ZpYzEzQGNsdXN0ZXIwLm10YmFzLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG5cclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG5cclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpO1xyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIHBhdGhzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHsgbWVldHVwSWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSB9LFxyXG4gICAgfSkpLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgbWVldHVwSWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBJZDtcclxuXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly96aXZhbm92aWMxMzp6aXZhbm92aWMxM0BjbHVzdGVyMC5tdGJhcy5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRNZWV0dXAgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kT25lKHtcclxuICAgIF9pZDogT2JqZWN0SWQobWVldHVwSWQpLFxyXG4gIH0pO1xyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cERhdGE6IHtcclxuICAgICAgICBpZDogc2VsZWN0ZWRNZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgdGl0bGU6IHNlbGVjdGVkTWVldHVwLnRpdGxlLFxyXG4gICAgICAgIGFkZHJlc3M6IHNlbGVjdGVkTWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6IHNlbGVjdGVkTWVldHVwLmltYWdlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzZWxlY3RlZE1lZXR1cC5kZXNjcmlwdGlvbixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlscztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==