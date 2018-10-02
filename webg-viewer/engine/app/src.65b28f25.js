process.env.HMR_PORT=0;process.env.HMR_HOSTNAME="localhost";parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"NyPj":[function(require,module,exports) {
"use strict";module.exports="logo.127d26e6.svg";
},{}],"6cnO":[function(require,module,exports) {
"use strict";module.exports="github.ca2c3f39.svg";
},{}],"pKEH":[function(require,module,exports) {
"use strict";
},{}],"rMii":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateScene=exports.toggleMenu=void 0;var e=require("babel-runtime/core-js/object/assign"),t=r(e),n=require("redux");function r(e){return e&&e.__esModule?e:{default:e}}var u={menuIsOpen:!0,project:{name:null,path:null},environment:{selectedObject:null,scene:null}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments[1];switch(n.type){case"TOGGLE_MENU":var r=!e.menuIsOpen;return(0,t.default)({},e,{menuIsOpen:r});case"UPDATE_SCENE":var s=(0,t.default)(e.environment,{scene:n.scene});return(0,t.default)({},e,{environment:s});default:return e}},o=(0,n.createStore)(s),a=exports.toggleMenu=function(){o.dispatch({type:"TOGGLE_MENU"})},c=exports.updateScene=function(e){o.dispatch({type:"UPDATE_SCENE",scene:e})};exports.default=o;
},{}],"8h4T":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("babel-runtime/core-js/object/get-prototype-of"),t=p(e),r=require("babel-runtime/helpers/classCallCheck"),l=p(r),a=require("babel-runtime/helpers/createClass"),n=p(a),u=require("babel-runtime/helpers/possibleConstructorReturn"),i=p(u),s=require("babel-runtime/helpers/inherits"),c=p(s),o=require("react"),d=p(o),m=require("@blueprintjs/core"),f=require("../store");function p(e){return e&&e.__esModule?e:{default:e}}var b=function(e){function r(){return(0,l.default)(this,r),(0,i.default)(this,(r.__proto__||(0,t.default)(r)).apply(this,arguments))}return(0,c.default)(r,e),(0,n.default)(r,[{key:"render",value:function(){var e=this.props.open?"menu":"menu-hidden";return d.default.createElement("div",null,d.default.createElement(m.Icon,{icon:"caret-right",className:this.props.open?"menu-caret-open":"menu-caret-closed",onClick:f.toggleMenu,iconSize:20}),d.default.createElement("div",{className:e},d.default.createElement(m.Card,{className:m.Classes.DARK+" content"},d.default.createElement(m.Tabs,{className:"tabs"},d.default.createElement(m.Tab,{id:"rx",title:"Objects",panel:d.default.createElement("div",null,"hiiii")}),d.default.createElement(m.Tab,{id:"ng",title:"Data",panel:d.default.createElement("div",null,"Angular")}),d.default.createElement(m.Tab,{id:"mb",title:"Project",panel:d.default.createElement("div",null,"hiiii")}),d.default.createElement(m.Tabs,null)))))}}]),r}(o.Component);exports.default=b;
},{"../store":"rMii"}],"lY9v":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("babel-runtime/core-js/object/get-prototype-of"),r=E(e),t=require("babel-runtime/helpers/classCallCheck"),u=E(t),n=require("babel-runtime/helpers/createClass"),o=E(n),l=require("babel-runtime/helpers/possibleConstructorReturn"),i=E(l),a=require("babel-runtime/helpers/inherits"),s=E(a),c=require("react"),p=E(c),f=require("react-dom"),d=E(f),q=require("react-hot-loader"),b=require("./icons/logo.svg"),h=E(b),m=require("./icons/github.svg"),g=E(m),v=require("electron");require("./app.css");var _=require("react-redux"),y=require("./store"),C=require("./components/Menu"),M=E(C);function E(e){return e&&e.__esModule?e:{default:e}}var j=function(e){function t(){var e,n,o,l;(0,u.default)(this,t);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return n=o=(0,i.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(s))),o.onClick=function(){(0,y.toggleMenu)()},l=n,(0,i.default)(o,l)}return(0,s.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return console.log("props",this.props),p.default.createElement("div",null,p.default.createElement(M.default,{open:this.props.menu}))}}]),t}(c.Component),k=function(e){return{menu:e.menuIsOpen}},x=function(e){return{toggleMenu:function(){e({type:"TOGGLE_MENU",open:null})}}};exports.default=(0,_.connect)(k,x)(j);
},{"./icons/logo.svg":"NyPj","./icons/github.svg":"6cnO","./app.css":"pKEH","./store":"rMii","./components/Menu":"8h4T"}],"J6gt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("babel-runtime/helpers/classCallCheck"),e=a(t),o=require("babel-runtime/helpers/createClass"),r=a(o),n=require("three"),i=l(n);function l(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}var u=function(){function t(){(0,e.default)(this,t)}return(0,r.default)(t,[{key:"getObject",value:function(){var t={topColor:{type:"c",value:new i.Color(6316128)},bottomColor:{type:"c",value:new i.Color(2171169)},offset:{type:"f",value:400},exponent:{type:"f",value:1}},e=new i.SphereBufferGeometry(1e3,32,15),o=new i.ShaderMaterial({uniforms:t,vertexShader:"\n        varying vec3 vWorldPosition;\n\t\t\tvoid main() {\n\t\t\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\t\t\t\tvWorldPosition = worldPosition.xyz;\n\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n            }\n            ",fragmentShader:"\n        uniform vec3 topColor;\n\t\t\tuniform vec3 bottomColor;\n\t\t\tuniform float offset;\n\t\t\tuniform float exponent;\n\t\t\tvarying vec3 vWorldPosition;\n\t\t\tvoid main() {\n\t\t\t\tfloat h = normalize( vWorldPosition + offset ).y;\n\t\t\t\tgl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max( h, 0.0 ), exponent ), 0.0 ) ), 1.0 );\n            }\n            ",side:i.BackSide});return new i.Mesh(e,o)}}]),t}();exports.default=u;
},{}],"/2Ye":[function(require,module,exports) {
"use strict";var e=require("three"),r=d(e),n=require("./sky"),t=a(n),i=require("../store"),o=a(i);function a(e){return e&&e.__esModule?e:{default:e}}function d(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r.default=e,r}var u=require("three-orbit-controls")(r),s=new r.Scene,w=new r.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.1,1e4);w.position.set(0,10,-30),w.lookAt(new r.Vector3);var l=document.getElementById("3d-env"),c=new r.WebGLRenderer({canvas:l});c.setSize(window.innerWidth,window.innerHeight),c.setClearColor(0,0);var v=new r.BoxGeometry(10,10,10),f=new r.MeshBasicMaterial({color:65535}),h=new r.Mesh(v,f);s.add(h);var m=new u(w),g=new t.default;s.add(g.getObject(r));var p=new r.GridHelper(100,10,4500223,8421504);function M(){requestAnimationFrame(M),c.render(s,w)}s.add(p),l.addEventListener("mousedown",function(){(0,i.toggleMenu)()}),M();
},{"./sky":"J6gt","../store":"rMii"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("react"),r=c(e),t=require("react-dom"),u=c(t),d=require("react-hot-loader"),a=require("react-redux"),n=require("./App.js"),i=c(n);require("./index.css");var l=require("./store"),o=c(l);function c(e){return e&&e.__esModule?e:{default:e}}require("./viewer/viewer.js");var f=function(){u.default.render(r.default.createElement(d.AppContainer,null,r.default.createElement(a.Provider,{store:o.default},r.default.createElement(i.default,null))),window.document.getElementById("app"))};"undefined"!=typeof window&&f(),module.hot&&module.hot.accept(f);
},{"./App.js":"lY9v","./index.css":"pKEH","./store":"rMii","./viewer/viewer.js":"/2Ye"}]},{},["Focm"], null)
//# sourceMappingURL=src.306e1f05.map