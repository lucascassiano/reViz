process.env.HMR_PORT=0;process.env.HMR_HOSTNAME="localhost";parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"NyPj":[function(require,module,exports) {
"use strict";module.exports="logo.127d26e6.svg";
},{}],"6cnO":[function(require,module,exports) {
"use strict";module.exports="github.ca2c3f39.svg";
},{}],"pKEH":[function(require,module,exports) {
"use strict";
},{}],"lY9v":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("babel-runtime/core-js/object/get-prototype-of"),r=C(e),t=require("babel-runtime/helpers/classCallCheck"),l=C(t),a=require("babel-runtime/helpers/createClass"),u=C(a),n=require("babel-runtime/helpers/possibleConstructorReturn"),o=C(n),c=require("babel-runtime/helpers/inherits"),i=C(c),s=require("react"),f=C(s),d=require("react-dom"),h=C(d),p=require("react-hot-loader"),m=require("./icons/logo.svg"),b=C(m),q=require("./icons/github.svg"),g=C(q),v=require("electron");function C(e){return e&&e.__esModule?e:{default:e}}require("./app.css");var _=function(e){function t(){var e,a,u,n;(0,l.default)(this,t);for(var c=arguments.length,i=Array(c),s=0;s<c;s++)i[s]=arguments[s];return a=u=(0,o.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(i))),u.onClick=function(){alert("hey"),v.shell.openExternal("https://github.com/lucascassiano/react-electron-parcel")},n=a,(0,o.default)(u,n)}return(0,i.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return f.default.createElement("div",{className:"content"},f.default.createElement("img",{className:"logo",src:b.default}),f.default.createElement("h1",null,"React + Electron"),f.default.createElement("button",{onClick:this.onClick},f.default.createElement("img",{src:g.default})," Fork me on Github"))}}]),t}(s.Component);exports.default=_;
},{"./icons/logo.svg":"NyPj","./icons/github.svg":"6cnO","./app.css":"pKEH"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("react"),r=w(e),n=require("react-dom"),t=w(n),i=require("react-hot-loader"),o=require("./App.js"),d=w(o);require("./index.css");var a=require("three"),u=c(a);function c(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r.default=e,r}function w(e){return e&&e.__esModule?e:{default:e}}var l=new u.Scene,s=new u.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3);s.position.z=100;var h=new u.WebGLRenderer;h.setSize(window.innerWidth,window.innerHeight);var f=new u.BoxGeometry(100,100,1),m=new u.MeshBasicMaterial({color:65535}),p=new u.Mesh(f,m);function v(){requestAnimationFrame(v),h.render(l,s)}l.add(p),v();var q=function(){};"undefined"!=typeof window&&q(),module.hot&&module.hot.accept(q),document.getElementById("3d-env").appendChild(h.domElement);
},{"./App.js":"lY9v","./index.css":"pKEH"}]},{},["Focm"], null)
//# sourceMappingURL=src.d3ac7e45.map