(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],[,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_carva_Desktop_repo_ShinobiWorld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_style_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(21),_style_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);function AttrTable(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.shinobi._attr.FOR),_useState2=Object(C_Users_carva_Desktop_repo_ShinobiWorld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),FOR=_useState2[0],setFOR=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.shinobi._attr.RES),_useState4=Object(C_Users_carva_Desktop_repo_ShinobiWorld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),RES=_useState4[0],setRES=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.shinobi._attr.DEX),_useState6=Object(C_Users_carva_Desktop_repo_ShinobiWorld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),DEX=_useState6[0],setDEX=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.shinobi._attr.AGL),_useState8=Object(C_Users_carva_Desktop_repo_ShinobiWorld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState7,2),AGL=_useState8[0],setAGL=_useState8[1],_useState9=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.shinobi._attr.INT),_useState10=Object(C_Users_carva_Desktop_repo_ShinobiWorld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState9,2),INT=_useState10[0],setINT=_useState10[1],_useState11=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.shinobi._attr.PER),_useState12=Object(C_Users_carva_Desktop_repo_ShinobiWorld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState11,2),PER=_useState12[0],setPER=_useState12[1],_useState13=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.shinobi._attr.CAR),_useState14=Object(C_Users_carva_Desktop_repo_ShinobiWorld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState13,2),CAR=_useState14[0],setCAR=_useState14[1],_useState15=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.shinobi._attr.FOC),_useState16=Object(C_Users_carva_Desktop_repo_ShinobiWorld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState15,2),FOC=_useState16[0],setFOC=_useState16[1];function handlerIncrementAttr(target,sinal){eval("set".concat(target,"(").concat(target,"+").concat(5*sinal,")"))}return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){var changes={_attr:{}};Object.keys(props.shinobi._attr).forEach((function(str){changes._attr[str]=eval(str)})),props.setData(changes)})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section",{className:"AttrTable"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"physical"},Object.keys(props.shinobi._attr).map((function(str,id){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{key:id},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,str,": ",eval("".concat(str))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return handlerIncrementAttr(str,-1)}},"-"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return handlerIncrementAttr(str,1)}},"+")))}))))}__webpack_exports__.a=AttrTable},function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),_=a(5),o=a.n(_),s=a(1);a(12);var i=function(e){var t="",a=Function;return e.activeReturn&&(a=e.action,t=r.a.createElement("div",{className:"Header_return",onClick:function(){return a()}},r.a.createElement("i",{className:"fas fa-arrow-left"}))),e.action&&(a=e.action),r.a.createElement("section",{className:"Header"},t,r.a.createElement("h2",{className:"Header_title"},e.title))},c=a(2),u=a(3),l=function(){function e(){Object(c.a)(this,e)}return Object(u.a)(e,null,[{key:"create",value:function(){return new Promise((function(e,t){var a=window.indexedDB.open("ShinobiWorld",2);a.onupgradeneeded=function(e){var t=e.target.result;t.objectStoreNames.contains("shinobis")||t.createObjectStore("shinobis",{keyPath:"id"})},a.onsuccess=function(t){var a=t.target.result;e(a)}}))}}]),e}(),d=function(){function e(t){Object(c.a)(this,e),this.db=t}return Object(u.a)(e,[{key:"add",value:function(e){var t=this,a=new m({_name:e});return new Promise((function(e,n){var r=t.db.transaction(["shinobis"],"readwrite").objectStore("shinobis").add(a);r.oncomplete=function(t){e("shinobi registrado com sucesso")},r.onerror=function(e){n("erro ao registrar o shinobi")}}))}},{key:"put",value:function(e){var t=this;return new Promise((function(a,n){var r=t.db.transaction(["shinobis"],"readwrite").objectStore("shinobis").put(e);r.onsuccess=function(e){a("registro atualizado com sucesso")},r.onerror=function(e){n("erro ao efetua put")}}))}},{key:"get",value:function(e){var t=this;return new Promise((function(a,n){var r=t.db.transaction(["shinobis"],"readwrite").objectStore("shinobis").get(e);r.onsuccess=function(e){var t=new m(r.result);a(t)}}))}},{key:"load",value:function(){var e=this;return new Promise((function(t,a){var n=[],r=e.db.transaction(["shinobis"],"readonly").objectStore("shinobis").openCursor();r.onsuccess=function(e){var a=e.target.result;a?(n.push(a.value),a.continue()):t(n)},r.onerror=function(e){t("erro ao carregar dados")}}))}},{key:"del",value:function(e){var t=this;return new Promise((function(a,n){var r=t.db.transaction(["shinobis"],"readwrite").objectStore("shinobis").delete(e);r.onsuccess=function(e){a(t.load())},r.onerror=function(e){n("N\xe3o foi possivel apagar o registro")}}))}}],[{key:"example",value:function(){return new m({_name:"Tanzan",_cla:"Haruno"})}},{key:"new",value:function(e){return new m({_name:e})}}]),e}(),m=function(){function e(t){Object(c.a)(this,e),void 0===t._attr&&(t._attr={}),this._name=t._name||" ",this._cla=t._cla||" ",this._position=t._position||" ",this._title=t._title,this._bio=t._bio||"",this._attr={FOR:t._attr.FOR||5,RES:t._attr.RES||5,AGL:t._attr.AGL||5,DEX:t._attr.DEX||5,PER:t._attr.PER||5,INT:t._attr.INT||5,CAR:t._attr.CAR||5,FOC:t._attr.FOC||5},this._maxHP=void 0,this._actHP=void 0,this._maxCK=void 0,this._actCK=void 0,this._ckType=[],this.id=t.id||Date.now(),this.init()}return Object(u.a)(e,[{key:"updateMaxHP",value:function(){this._maxHP=Math.round(10*this.RES+5*this.FOR)}},{key:"updateMaxCK",value:function(){this._maxCK=Math.round(5*this._INT+this.PER)}},{key:"init",value:function(){this.updateMaxCK(),this.updateMaxHP()}},{key:"fullName",get:function(){return"".concat(this._name," ").concat(this._cla)}},{key:"rank",get:function(){return this.FOR+this.RES+this.AGL+this.DEX+this.INT+this.PER+this.CAR+this.FOC}}]),e}(),E=d,b=new(function(){function e(){Object(c.a)(this,e)}return Object(u.a)(e,[{key:"add",value:function(e){return l.create().then((function(e){return new E(e)})).then((function(t){return t.add(e)})).then((function(e){return console.log(e)}))}},{key:"load",value:function(){return l.create().then((function(e){return new E(e)})).then((function(e){return e.load()}))}},{key:"get",value:function(e){return l.create().then((function(e){return new E(e)})).then((function(t){return t.get(e)}))}},{key:"del",value:function(e){return l.create().then((function(e){return new E(e)})).then((function(t){return t.del(e)}))}},{key:"put",value:function(e){return l.create().then((function(e){return new E(e)})).then((function(t){return t.put(e)}))}}]),e}());a(13);var h=function(e){var t=e.style?e.style:{},a=e.action?e.action:function(){};return r.a.createElement("div",{className:"FixedButton",onClick:function(){a()},style:t},e.children)};a(14);var f=function(e){var t=e.shinobi;return r.a.createElement("article",{className:"CharacterCard"},r.a.createElement("div",null,r.a.createElement("h3",{className:"CharacterCard_name"},t._name),r.a.createElement("i",{className:"fas fa-trash"})),r.a.createElement("p",{className:"CharacterCard_summary"},t._bio))};a(15);var p=function(e){return r.a.createElement("div",{className:"TextInput"},r.a.createElement("label",{htmlFor:"ipt-name"},e.title),r.a.createElement("input",{id:"ipt-name",type:"text",onChange:function(t){e.text(t.target.value)}}))};a(16);var O=function(e){var t=e.styleMode?"dark":"light",a=e.action?e.action:function(){};return r.a.createElement("button",{className:"Button "+t,onClick:function(e){e.preventDefault(),e.stopPropagation(),a()}},e.title)};a(17);var v=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),_=a[0],o=a[1];return r.a.createElement("section",{className:"ModalAdd",onClick:function(t){"ModalAdd"===t.target.className&&e.close()}},r.a.createElement("form",{className:"ModalAdd_modal"},r.a.createElement(p,{title:"Primeiro Nome",text:o}),r.a.createElement(O,{title:"Criar",styleMode:"dark",action:function(){e.addShinobi(_),e.close()}})))};var S=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),_=a[0],o=a[1],c=Object(n.useState)(!1),u=Object(s.a)(c,2),l=u[0],d=u[1];function m(){d(!l)}return Object(n.useEffect)((function(){b.load().then((function(e){JSON.stringify(_)!==JSON.stringify(e)&&o(e)}))})),r.a.createElement("div",{className:"CharacterList"},r.a.createElement(i,{title:"Personagens"}),r.a.createElement("ul",{className:"CharacterList_list"},_.map((function(t,a){return r.a.createElement("li",{onClick:function(a){a.target.classList.contains("fas")?b.del(t.id).then((function(e){return o(e)})):e.goToShinobiProfile(t.id)},key:a},r.a.createElement(f,{shinobi:t}))})),l&&r.a.createElement(v,{addShinobi:e.addShinobi,close:m})),r.a.createElement(h,{action:m},r.a.createElement("i",{className:"fas fa-plus"})))},P=i;a(18);var D=function(e){var t=Object(n.useState)(0),a=Object(s.a)(t,2),_=a[0],o=a[1],i={width:_},c=e.setData?e.setData:function(){};return Object(n.useEffect)((function(){o(document.querySelector("label[for=".concat(e.id,"]")).offsetWidth)})),r.a.createElement("div",{className:"TextArea"},r.a.createElement("div",{className:"TextArea_background",style:i}),r.a.createElement("label",{htmlFor:e.id},e.title),r.a.createElement("textarea",{defaultValue:e.data,id:e.id,type:"text",placeholder:e.placeholder,rows:e.rows,onChange:function(t){var a={};a[e.name]=t.target.value,c(a)}}))};a(19);var C=function(e){var t=e.title?r.a.createElement("h3",{className:"SectionBox_title"},e.title):"";return r.a.createElement("section",{className:"SectionBox"},t,e.children)};a(20);var M=function(e){var t=e.shinobi;return r.a.createElement("section",{className:"General"},r.a.createElement(C,null,r.a.createElement(D,{title:"Apelido/titulo",id:"General_ipt-name",placeholder:"Relampago de Konoha",rows:"1",data:t._title,name:"_title",setData:e.handlerChangeProps})),r.a.createElement(C,null,r.a.createElement(D,{title:"Cl\xe3",id:"General_ipt-cla",data:t._cla,name:"_cla",setData:e.handlerChangeProps,rows:"1"})),r.a.createElement(C,{className:"card"},r.a.createElement(D,{title:"Descri\xe7\xe3o",id:"General_ipt-bio",rows:"5",data:t._bio,name:"_bio",setData:e.handlerChangeProps})))},A=a(6);a(22);var R=function(e){var t=e.shinobi;return r.a.createElement("section",{className:"Status"},r.a.createElement(C,null,r.a.createElement(A.a,{shinobi:t,setData:e.handlerChangeProps})))};a(23);var T=function(e){return r.a.createElement("nav",{className:"Nav"},r.a.createElement("ul",null,e.pages.map((function(t,a){return r.a.createElement("li",{key:a,onClick:function(){e.setter(a)}},t)}))))};a(24);var k=function(e){var t=Object(n.useState)(0),a=Object(s.a)(t,2),_=a[0],o=a[1],i=Object(n.useState)(e.shinobi),c=Object(s.a)(i,2),u=c[0],l=c[1];function d(e){var t=u;for(var a in e)void 0!==e[a]&&(t[a]=e[a]);l(t)}var m=[r.a.createElement(M,{shinobi:u,handlerChangeProps:d}),r.a.createElement(R,{shinobi:u,handlerChangeProps:d})];return r.a.createElement("div",{className:"ShinobiProfile"},r.a.createElement(P,{title:e.shinobi.fullName,activeReturn:"true",action:e.goToCharacterList}),m[_],r.a.createElement(T,{pages:["General","Status","Techniques","Inventory"],setter:o}),r.a.createElement(h,{style:{bottom:"4.5rem"},action:function(){b.put(u).catch((function(e){console.log(e)}))}},r.a.createElement("i",{className:"far fa-save"})))};a(25);function y(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],_=t[1];var o=[r.a.createElement(S,{goToShinobiProfile:function(e){b.get(e).then((function(e){_(e),console.log("res",e._attr.FOR),l(1)}))},addShinobi:b.add.bind(b)}),r.a.createElement(k,{shinobi:a,goToCharacterList:function(){l(0)}})],i=Object(n.useState)(0),c=Object(s.a)(i,2),u=c[0],l=c[1];return o[u]}var g=document.getElementById("root");o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),g)}],[[7,1,2]]]);
//# sourceMappingURL=main.764fb696.chunk.js.map