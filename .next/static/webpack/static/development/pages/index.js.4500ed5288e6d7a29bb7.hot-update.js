webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web/dist/exports/StyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/index.js");
/* harmony import */ var react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web/dist/exports/Text */ "./node_modules/react-native-web/dist/exports/Text/index.js");
/* harmony import */ var react_native_web_dist_exports_TextInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web/dist/exports/TextInput */ "./node_modules/react-native-web/dist/exports/TextInput/index.js");
/* harmony import */ var react_native_web_dist_exports_TouchableOpacity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web/dist/exports/TouchableOpacity */ "./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js");
/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web/dist/exports/View */ "./node_modules/react-native-web/dist/exports/View/index.js");
/* harmony import */ var _utils_sse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/sse */ "./utils/sse.js");
/* harmony import */ var _utils_sse__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_sse__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName="/home/andrii/Addspire/Kepp alive/test_keepalive_web/pages/index.js";var __jsx=react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;var sourceWith;var sourceWithout;var timerWith;function App(){var _this=this;var _useState=Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),withChecks=_useState[0],setWithChecks=_useState[1];var _useState2=Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),withoutChecks=_useState2[0],setWithoutChecks=_useState2[1];var _useState3=Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),withChecksRunning=_useState3[0],setWithChecksRunning=_useState3[1];var _useState4=Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("https://quantum.sh"),url=_useState4[0],setUrl=_useState4[1];var addLog=function addLog(text,without){if(without)setWithoutChecks([{time:Date().toString(),text:text}].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(withoutChecks)));else setWithChecks([{time:Date().toString(),text:text}].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(withChecks)));};Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function(){if(!withChecksRunning){addLog("closed");if(timerWith)clearTimeout(timerWith);}},[withChecksRunning]);var startPoll=function startPoll(){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function startPoll$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;if(!withChecksRunning){_context.next=4;break;}addLog("already running");return _context.abrupt("return");case 4:addLog("starting");setWithChecksRunning(true);if(sourceWith)sourceWith.close();if(timerWith)clearTimeout(timerWith);sourceWith=new _utils_sse__WEBPACK_IMPORTED_MODULE_9__["SSE"](url+"/api/document/poll",{headers:{"Content-Type":"application/json"},payload:JSON.stringify({timeOnClient:Date().toString()})});timerWith=setTimeout(function(){addLog("closed because no ping");setWithChecksRunning(false);},20000);sourceWith.addEventListener("message",function(e){setData({serverDown:false});var news=JSON.parse(e.data);switch(news.messageCode){case"time":addLog("time on server is ".concat(news.time));break;case"ping":if(timerWith)clearTimeout(timerWith);timerWith=setTimeout(function(){addLog("closed because no ping");setWithChecksRunning(false);},20000);break;}});sourceWith.addEventListener("error",function(){setWithChecksRunning(false);});sourceWith.stream();_context.next=18;break;case 15:_context.prev=15;_context.t0=_context["catch"](0);setWithChecksRunning(false);case 18:case"end":return _context.stop();}}},null,null,[[0,15]],Promise);};var sendOneReq=function sendOneReq(){var _res$data,res;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function sendOneReq$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.next=3;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(url,"/api/utils/time")));case 3:res=_context2.sent;if(res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.time)addLog("time on server from one time req: ".concat(res.data.time));_context2.next=11;break;case 7:_context2.prev=7;_context2.t0=_context2["catch"](0);addLog("one time req error");console.log(_context2.t0);case 11:case"end":return _context2.stop();}}},null,null,[[0,7]],Promise);};return __jsx(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_8__["default"],{style:styles.container,__self:this,__source:{fileName:_jsxFileName,lineNumber:101,columnNumber:9}},__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:102,columnNumber:13}},"Url:"),__jsx(react_native_web_dist_exports_TouchableOpacity__WEBPACK_IMPORTED_MODULE_7__["default"],{onPress:function onPress(){return setUrl("http://localhost:5000");},__self:this,__source:{fileName:_jsxFileName,lineNumber:103,columnNumber:13}},__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:104,columnNumber:17}},"localhost:5000")),__jsx(react_native_web_dist_exports_TouchableOpacity__WEBPACK_IMPORTED_MODULE_7__["default"],{onPress:function onPress(){return setUrl("https://quantum.sh");},__self:this,__source:{fileName:_jsxFileName,lineNumber:106,columnNumber:13}},__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:107,columnNumber:17}},"https://quantum.sh")),__jsx(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_8__["default"],{style:{padding:10,margin:10,backgroundColor:"#ddd"},__self:this,__source:{fileName:_jsxFileName,lineNumber:109,columnNumber:13}},__jsx(react_native_web_dist_exports_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"],{value:url,onChangeText:setUrl,__self:this,__source:{fileName:_jsxFileName,lineNumber:110,columnNumber:17}})),__jsx(react_native_web_dist_exports_TouchableOpacity__WEBPACK_IMPORTED_MODULE_7__["default"],{style:{margin:10,padding:10,backgroundColor:"green",color:"white"},onPress:startPoll,__self:this,__source:{fileName:_jsxFileName,lineNumber:113,columnNumber:13}},__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:122,columnNumber:17}},"Start poll (checks every 20 sec)")),__jsx(react_native_web_dist_exports_TouchableOpacity__WEBPACK_IMPORTED_MODULE_7__["default"],{style:{margin:10,padding:10,backgroundColor:"red",color:"white"},onPress:function onPress(){return setWithChecksRunning(false);},__self:this,__source:{fileName:_jsxFileName,lineNumber:124,columnNumber:13}},__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:133,columnNumber:17}},"Stop poll")),__jsx(react_native_web_dist_exports_TouchableOpacity__WEBPACK_IMPORTED_MODULE_7__["default"],{style:{margin:10,padding:10,backgroundColor:"red",color:"white"},onPress:sendOneReq,__self:this,__source:{fileName:_jsxFileName,lineNumber:135,columnNumber:13}},__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:144,columnNumber:17}},"One time req")),__jsx(react_native_web_dist_exports_TouchableOpacity__WEBPACK_IMPORTED_MODULE_7__["default"],{onPress:function onPress(){return setWithChecks([]);},style:{margin:10,padding:10,backgroundColor:"grey",color:"white"},__self:this,__source:{fileName:_jsxFileName,lineNumber:146,columnNumber:13}},__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:155,columnNumber:17}},"Clear log")),__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:157,columnNumber:13}},"Log"),withChecks.map(function(item){return __jsx(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_8__["default"],{style:{flexDirection:"row"},__self:_this,__source:{fileName:_jsxFileName,lineNumber:159,columnNumber:17}},__jsx(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_8__["default"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:160,columnNumber:21}},__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:161,columnNumber:25}},item.time)),__jsx(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_8__["default"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:163,columnNumber:21}},__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{style:{color:"blue"},__self:_this,__source:{fileName:_jsxFileName,lineNumber:164,columnNumber:25}},item.text)));}));}var styles=react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].create({container:{flex:1},text:{fontSize:16}});

/***/ })

})
//# sourceMappingURL=index.js.4500ed5288e6d7a29bb7.hot-update.js.map