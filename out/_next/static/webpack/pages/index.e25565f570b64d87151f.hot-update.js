webpackHotUpdate_N_E("pages/index",{

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
      // display: "table",
      width: "100%",
      // tableLayout: "fixed",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0xheW91dC9IZWFkZXIvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwiaGVhZGVyIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZE9yaWdpbiIsImJhY2tncm91bmRSZXBlYXQiLCJtYXJnaW4iLCJ3aWR0aCIsImJvcmRlckNvbGxhcHNlIiwiYm94U2l6aW5nIiwidGl0bGUiLCJkaXNwbGF5IiwiYnJlYWtwb2ludHMiLCJ1cCIsInNlYXJjaCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmYWRlIiwicGFsZXR0ZSIsImNvbW1vbiIsIndoaXRlIiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJpbWciLCJoZWlnaHQiLCJzZWFyY2hJY29uIiwicGFkZGluZyIsInBvaW50ZXJFdmVudHMiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJpbnB1dFJvb3QiLCJjb2xvciIsImlucHV0SW5wdXQiLCJwYWRkaW5nTGVmdCIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsIlNlYXJjaEFwcEJhciIsImNsYXNzZXMiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEtBRGlDO0FBSXZDQyxVQUFNLEVBQUU7QUFDTkMscUJBQWUsRUFBRSw2SUFEWDtBQUVOQyxzQkFBZ0IsRUFBRSxhQUZaO0FBR05DLHNCQUFnQixFQUFFLFdBSFo7QUFJTjtBQUNBQyxZQUFNLEVBQUUsUUFM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Q0FBQ2Y7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGTSxlQUtOO0FBQUsscUJBQVMsRUFBRWUsT0FBTyxDQUFDMUIsTUFBeEI7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUUwQixPQUFPLENBQUNiLFVBQXhCO0FBQUEscUNBQ0UscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFJRSxxRUFBQyxtRUFBRDtBQUNFLHlCQUFXLEVBQUMsY0FEZDtBQUVFLHFCQUFPLEVBQUU7QUFDUDNCLG9CQUFJLEVBQUV3QyxPQUFPLENBQUNSLFNBRFA7QUFFUFMscUJBQUssRUFBRUQsT0FBTyxDQUFDTjtBQUZSLGVBRlg7QUFNRSx3QkFBVSxFQUFFO0FBQUUsOEJBQWM7QUFBaEI7QUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRCRDs7R0EvQnVCSyxZO1VBQ04xQyxTOzs7S0FETTBDLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTI1NTY1ZjU3MGI2NGQ4NzE1MWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IElucHV0QmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEJhc2UnO1xyXG5pbXBvcnQgeyBmYWRlLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgTWVudSwgU2VhcmNoIH0gZnJvbSAnQG1hdGVyaWFsLXVpL0ljb25zJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInXHJcbmltcG9ydCB7IFJpVXNlckZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9yaSc7XHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IFwiMVwiLFxyXG4gIH0sXHJcbiAgaGVhZGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwwLDAsMC4xKSAwLCByZ2JhKDAsMCwwLDApIDc2JSksbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAyNjcyIDAlLCAjMDAyNjcyIDc3cHgsICNlMTAwMDAgNzdweCwgI2UxMDAwMCAxMDAlKVwiLFxyXG4gICAgYmFja2dyb3VuZE9yaWdpbjogXCJjb250ZW50LWJveFwiLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgIC8vIG1heFdpZHRoOiBcIjEwMjRweFwiLFxyXG4gICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgLy8gZGlzcGxheTogXCJ0YWJsZVwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgLy8gdGFibGVMYXlvdXQ6IFwiZml4ZWRcIixcclxuICAgIGJvcmRlckNvbGxhcHNlOiBcInNlcGFyYXRlXCIsXHJcbiAgICAvLyBwYWRkaW5nOiBcIjAgMTRweFwiLFxyXG4gICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuXHJcbiAgfSxcclxuICBcclxuICB0aXRsZToge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjE1KSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsIDAuMjUpLFxyXG4gICAgfSxcclxuICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltZzoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMHB4XCIsXHJcbiAgICB3aWR0aDogXCIxNTBweFwiLFxyXG4gICAgLy8gZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAvLyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgLy8gekluZGV4OiBcIjJcIixcclxuICAgIC8vIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICB9LFxyXG4gIHNlYXJjaEljb246IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBpbnB1dFJvb3Q6IHtcclxuICAgIGNvbG9yOiAnaW5oZXJpdCcsXHJcbiAgfSxcclxuICBpbnB1dElucHV0OiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDEsIDEsIDApLFxyXG4gICAgLy8gdmVydGljYWwgcGFkZGluZyArIGZvbnQgc2l6ZSBmcm9tIHNlYXJjaEljb25cclxuICAgIHBhZGRpbmdMZWZ0OiBgY2FsYygxZW0gKyAke3RoZW1lLnNwYWNpbmcoNCl9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnKSxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHdpZHRoOiAnMTJjaCcsXHJcbiAgICAgICcmOmZvY3VzJzoge1xyXG4gICAgICAgIHdpZHRoOiAnMjBjaCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEFwcEJhcigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEFwcEJhciAgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XHJcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvc2t5c3BvcnR0cmFucy5zdmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfS8+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPElucHV0QmFzZVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNo4oCmXCJcclxuICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLmlucHV0Um9vdCxcclxuICAgICAgICAgICAgICAgIGlucHV0OiBjbGFzc2VzLmlucHV0SW5wdXQsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ3NlYXJjaCcgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=