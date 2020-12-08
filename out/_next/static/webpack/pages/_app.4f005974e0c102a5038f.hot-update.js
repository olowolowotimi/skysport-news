webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/Layout/Header/index.js":
/*!************************************!*\
  !*** ./src/Layout/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchAppBar; });
/* harmony import */ var C_Users_Olowolowo_Bolanle_skysport_news_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_Icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/Icons */ "./node_modules/@material-ui/Icons/esm/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");



var _jsxFileName = "C:\\Users\\Olowolowo Bolanle\\skysport-news\\src\\Layout\\Header\\index.js",
    _s = $RefreshSig$();











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: "1"
    },
    header: {
      backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.1) 0, rgba(0,0,0,0) 76%),linear-gradient(to right, #002672 0%, #002672 77px, #e10000 77px, #e10000 100%)",
      backgroundOrigin: "content-box",
      backgroundRepeat: "no-repeat",
      // maxWidth: "1024px",
      margin: "0 auto",
      display: "table",
      width: "100%",
      tableLayout: "fixed",
      borderCollapse: "separate",
      // padding: "0 14px",
      boxSizing: "border-box"
    },
    title: Object(C_Users_Olowolowo_Bolanle_skysport_news_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      flexGrow: 1,
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
    search: Object(C_Users_Olowolowo_Bolanle_skysport_news_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["fade"])(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["fade"])(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }),
    img: {
      height: "100px",
      width: "150px" // display: "flex",
      // position: "relative",
      // zIndex: "2",
      // justifyContent: "flex-start",

    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: Object(C_Users_Olowolowo_Bolanle_skysport_news_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "calc(1em + ".concat(theme.spacing(4), "px)"),
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    })
  };
});
function SearchAppBar() {
  _s();

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.header,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
        maxWidth: "md",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            src: "/static/img/skysporttrans.svg",
            alt: "",
            className: classes.img
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: classes.search,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: classes.searchIcon,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_Icons__WEBPACK_IMPORTED_MODULE_9__["Search"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_7__["default"], {
              placeholder: "Search\u2026",
              classes: {
                root: classes.inputRoot,
                input: classes.inputInput
              },
              inputProps: {
                'aria-label': 'search'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

_s(SearchAppBar, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = SearchAppBar;

var _c;

$RefreshReg$(_c, "SearchAppBar");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0xheW91dC9IZWFkZXIvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwiaGVhZGVyIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZE9yaWdpbiIsImJhY2tncm91bmRSZXBlYXQiLCJtYXJnaW4iLCJkaXNwbGF5Iiwid2lkdGgiLCJ0YWJsZUxheW91dCIsImJvcmRlckNvbGxhcHNlIiwiYm94U2l6aW5nIiwidGl0bGUiLCJicmVha3BvaW50cyIsInVwIiwic2VhcmNoIiwicG9zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJzaGFwZSIsImJhY2tncm91bmRDb2xvciIsImZhZGUiLCJwYWxldHRlIiwiY29tbW9uIiwid2hpdGUiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsImltZyIsImhlaWdodCIsInNlYXJjaEljb24iLCJwYWRkaW5nIiwicG9pbnRlckV2ZW50cyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImlucHV0Um9vdCIsImNvbG9yIiwiaW5wdXRJbnB1dCIsInBhZGRpbmdMZWZ0IiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiU2VhcmNoQXBwQmFyIiwiY2xhc3NlcyIsImlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFO0FBRE4sS0FEaUM7QUFJdkNDLFVBQU0sRUFBRTtBQUNOQyxxQkFBZSxFQUFFLDZJQURYO0FBRU5DLHNCQUFnQixFQUFFLGFBRlo7QUFHTkMsc0JBQWdCLEVBQUUsV0FIWjtBQUlOO0FBQ0FD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O0FBQXlDLGVBQUcsRUFBQyxFQUE3QztBQUFnRCxxQkFBUyxFQUFFdUMsT0FBTyxDQUFDZjtBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZNLGVBS047QUFBSyxxQkFBUyxFQUFFZSxPQUFPLENBQUMxQixNQUF4QjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBRTBCLE9BQU8sQ0FBQ2IsVUFBeEI7QUFBQSxxQ0FDRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUlFLHFFQUFDLG1FQUFEO0FBQ0UseUJBQVcsRUFBQyxjQURkO0FBRUUscUJBQU8sRUFBRTtBQUNQNUIsb0JBQUksRUFBRXlDLE9BQU8sQ0FBQ1IsU0FEUDtBQUVQUyxxQkFBSyxFQUFFRCxPQUFPLENBQUNOO0FBRlIsZUFGWDtBQU1FLHdCQUFVLEVBQUU7QUFBRSw4QkFBYztBQUFoQjtBQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEJEOztHQS9CdUJLLFk7VUFDTjNDLFM7OztLQURNMkMsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjRmMDA1OTc0ZTBjMTAyYTUwMzhmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlJztcclxuaW1wb3J0IHsgZmFkZSwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IE1lbnUsIFNlYXJjaCB9IGZyb20gJ0BtYXRlcmlhbC11aS9JY29ucyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJ1xyXG5pbXBvcnQgeyBSaVVzZXJGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvcmknO1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiBcIjFcIixcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgYmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsMCwwLDAuMSkgMCwgcmdiYSgwLDAsMCwwKSA3NiUpLGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMjY3MiAwJSwgIzAwMjY3MiA3N3B4LCAjZTEwMDAwIDc3cHgsICNlMTAwMDAgMTAwJSlcIixcclxuICAgIGJhY2tncm91bmRPcmlnaW46IFwiY29udGVudC1ib3hcIixcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAvLyBtYXhXaWR0aDogXCIxMDI0cHhcIixcclxuICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgIGRpc3BsYXk6IFwidGFibGVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIHRhYmxlTGF5b3V0OiBcImZpeGVkXCIsXHJcbiAgICBib3JkZXJDb2xsYXBzZTogXCJzZXBhcmF0ZVwiLFxyXG4gICAgLy8gcGFkZGluZzogXCIwIDE0cHhcIixcclxuICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcblxyXG4gIH0sXHJcbiAgXHJcbiAgdGl0bGU6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlYXJjaDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgMC4xNSksXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjI1KSxcclxuICAgIH0sXHJcbiAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWc6IHtcclxuICAgIGhlaWdodDogXCIxMDBweFwiLFxyXG4gICAgd2lkdGg6IFwiMTUwcHhcIixcclxuICAgIC8vIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgLy8gcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIC8vIHpJbmRleDogXCIyXCIsXHJcbiAgICAvLyBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgfSxcclxuICBzZWFyY2hJY29uOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDIpLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgaW5wdXRSb290OiB7XHJcbiAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gIH0sXHJcbiAgaW5wdXRJbnB1dDoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAxLCAxLCAwKSxcclxuICAgIC8vIHZlcnRpY2FsIHBhZGRpbmcgKyBmb250IHNpemUgZnJvbSBzZWFyY2hJY29uXHJcbiAgICBwYWRkaW5nTGVmdDogYGNhbGMoMWVtICsgJHt0aGVtZS5zcGFjaW5nKDQpfXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJyksXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICB3aWR0aDogJzEyY2gnLFxyXG4gICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICB3aWR0aDogJzIwY2gnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hBcHBCYXIoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxBcHBCYXIgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxyXG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL3NreXNwb3J0dHJhbnMuc3ZnXCIgYWx0PVwiXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30vPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEljb259PlxyXG4gICAgICAgICAgICAgIDxTZWFyY2ggLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxJbnB1dEJhc2VcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaOKAplwiXHJcbiAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDogY2xhc3Nlcy5pbnB1dElucHV0LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbCc6ICdzZWFyY2gnIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9