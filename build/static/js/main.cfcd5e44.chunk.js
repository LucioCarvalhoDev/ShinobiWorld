(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(5),o=n.n(i),c=n(1);n(11);var s=function(e){var t="",n=new Function;return e.activeReturn&&(n=e.action,t=r.a.createElement("div",{className:"Header_return",onClick:function(){return n()}},r.a.createElement("i",{className:"fas fa-arrow-left"}))),e.action&&(n=e.action),r.a.createElement("section",{className:"Header"},t,r.a.createElement("h2",{className:"Header_title"},e.title))},u=n(2),l=n(3),f=function(){function e(){Object(u.a)(this,e)}return Object(l.a)(e,null,[{key:"create",value:function(){return new Promise((function(e,t){var n=window.indexedDB.open("ShinobiWorld",2);n.onupgradeneeded=function(e){var t=e.target.result;t.objectStoreNames.contains("shinobis")||t.createObjectStore("shinobis",{keyPath:"id"})},n.onsuccess=function(t){var n=t.target.result;e(n)}}))}}]),e}(),h=function(){function e(t){Object(u.a)(this,e),this.db=t}return Object(l.a)(e,[{key:"add",value:function(e){var t=this,n=new m({_name:e});return new Promise((function(e,a){var r=t.db.transaction(["shinobis"],"readwrite").objectStore("shinobis").add(n);r.oncomplete=function(t){e("shinobi registrado com sucesso")},r.onerror=function(e){a("erro ao registrar o shinobi")}}))}},{key:"put",value:function(e){var t=this;return new Promise((function(n,a){var r=t.db.transaction(["shinobis"],"readwrite").objectStore("shinobis").put(e);r.onsuccess=function(e){n("registro atualizado com sucesso")},r.onerror=function(e){a("erro ao efetua put")}}))}},{key:"get",value:function(e){var t=this;return new Promise((function(n,a){var r=t.db.transaction(["shinobis"],"readwrite").objectStore("shinobis").get(e);r.onsuccess=function(e){n(new m(r.result))}}))}},{key:"load",value:function(){var e=this;return new Promise((function(t,n){var a=[],r=e.db.transaction(["shinobis"],"readonly").objectStore("shinobis").openCursor();r.onsuccess=function(e){var n=e.target.result;n?(a.push(n.value),n.continue()):t(a)},r.onerror=function(e){t("erro ao carregar dados")}}))}},{key:"del",value:function(e){var t=this;return new Promise((function(n,a){var r=t.db.transaction(["shinobis"],"readwrite").objectStore("shinobis").delete(e);r.onsuccess=function(e){n(t.load())},r.onerror=function(e){a("N\xe3o foi possivel apagar o registro")}}))}}],[{key:"example",value:function(){return new m({_name:"Tanzan",_cla:"Haruno"})}},{key:"new",value:function(e){return new m({_name:e})}}]),e}(),m=function(){function e(t){Object(u.a)(this,e),this._name=t._name||" ",this._cla=t._cla||" ",this._position=t._position||" ",this._title=t._title,this._bio=t._bio||"",this._FOR=t._FOR||5,this._RES=t._RES||5,this._AGL=t._AGL||5,this._DEX=t._DEX||5,this._PER=t._PER||5,this._INT=t._INT||5,this._CAR=t._CAR||5,this._FOC=t._FOC||5,this._maxHP=void 0,this._actHP=void 0,this._maxCK=void 0,this._actCK=void 0,this._ckType=[],this.id=t.id||Date.now()}return Object(l.a)(e,[{key:"updateMaxHP",value:function(){this._maxHP=Math.round(10*this.RES+5*this.FOR)}},{key:"updateMaxCK",value:function(){this._maxCK=Math.round(5*this._INT+this.PER)}},{key:"fullName",get:function(){return"".concat(this._name," ").concat(this._cla)}},{key:"FOR",get:function(){return this._FOR}},{key:"RES",get:function(){return this._RES}},{key:"AGL",get:function(){return this._AGL}},{key:"PER",get:function(){return this._PER}},{key:"DEX",get:function(){return this._DEX}},{key:"INT",get:function(){return this._INT}},{key:"CAR",get:function(){return this._CAR}},{key:"FOC",get:function(){return this._FOC}},{key:"rank",get:function(){return this.FOR+this.RES+this.AGL+this.DEX+this.INT+this.PER+this.CAR+this.FOC}}]),e}(),d=h,b=new(function(){function e(){Object(u.a)(this,e)}return Object(l.a)(e,[{key:"add",value:function(e){return f.create().then((function(e){return new d(e)})).then((function(t){return t.add(e)})).then((function(e){return console.log(e)}))}},{key:"load",value:function(){return f.create().then((function(e){return new d(e)})).then((function(e){return e.load()}))}},{key:"get",value:function(e){return f.create().then((function(e){return new d(e)})).then((function(t){return t.get(e)}))}},{key:"del",value:function(e){return f.create().then((function(e){return new d(e)})).then((function(t){return t.del(e)}))}},{key:"put",value:function(e){return f.create().then((function(e){return new d(e)})).then((function(t){return t.put(e)}))}}]),e}());n(12);var v=function(e){var t=e.style?e.style:{},n=e.action?e.action:function(){};return r.a.createElement("div",{className:"FixedButton",onClick:function(){n()},style:t},e.children)};n(13);var E=function(e){var t=e.shinobi;return r.a.createElement("article",{className:"CharacterCard"},r.a.createElement("div",null,r.a.createElement("h3",{className:"CharacterCard_name"},t._name),r.a.createElement("p",{className:"CharacterCard_summary"},t._bio)),r.a.createElement("i",{className:"fas fa-trash"}))};n(14);var _=function(e){return r.a.createElement("div",{className:"TextInput"},r.a.createElement("label",{htmlFor:"ipt-name"},e.title),r.a.createElement("input",{id:"ipt-name",type:"text",onChange:function(t){e.text(t.target.value)}}))};n(15);var p=function(e){var t=e.style?"dark":"light",n=e.action?e.action:function(){};return r.a.createElement("button",{className:"Button "+t,onClick:function(e){e.preventDefault(),e.stopPropagation(),n()}},e.title)};n(16);var g=function(e){e.action&&e.action;var t=Object(a.useState)(""),n=Object(c.a)(t,2),i=n[0],o=n[1];return r.a.createElement("section",{className:"ModalAdd",onClick:function(t){"ModalAdd"==t.target.className&&e.close()}},r.a.createElement("form",{className:"ModalAdd_modal"},r.a.createElement(_,{title:"Primeiro Nome",text:o}),r.a.createElement(p,{title:"Criar",style:"dark",action:function(){e.addShinobi(i),e.close()}})))};var y=function(e){var t=Object(a.useState)([]),n=Object(c.a)(t,2),i=n[0],o=n[1],u=Object(a.useState)(!1),l=Object(c.a)(u,2),f=l[0],h=l[1];function m(){h(!f)}return Object(a.useEffect)((function(){b.load().then((function(e){JSON.stringify(i)!==JSON.stringify(e)&&o(e)}))})),r.a.createElement("div",{className:"CharacterList"},r.a.createElement(s,{title:"Personagens"}),r.a.createElement("ul",{className:"CharacterList_list"},i.map((function(t,n){return r.a.createElement("li",{onClick:function(n){n.target.classList.contains("fas")?b.del(t.id).then((function(e){return o(e)})):e.goToShinobiProfile(t.id)},key:n},r.a.createElement(E,{shinobi:t}))})),f&&r.a.createElement(g,{addShinobi:e.addShinobi,close:m})),r.a.createElement(v,{action:m},r.a.createElement("i",{className:"fas fa-plus"})))},k=s;n(17);var N=function(e){var t=Object(a.useState)(0),n=Object(c.a)(t,2),i=n[0],o=n[1],s={width:i},u=e.setData?e.setData:function(){};return Object(a.useEffect)((function(){o(document.querySelector("label[for=".concat(e.id,"]")).offsetWidth)})),r.a.createElement("div",{className:"TextArea"},r.a.createElement("div",{className:"TextArea_background",style:s}),r.a.createElement("label",{htmlFor:e.id},e.title),r.a.createElement("textarea",{defaultValue:e.data,id:e.id,type:"text",placeholder:e.placeholder,rows:e.rows,onChange:function(t){var n={};n[e.name]=t.target.value,u(n)}}))};n(18);var O=function(e){var t=e.title?r.a.createElement("h3",{className:"SectionBox_title"},e.title):"";return r.a.createElement("section",{className:"SectionBox"},t,e.children)};n(19);var C=function(e){var t=e.shinobi;return r.a.createElement("section",{className:"General"},r.a.createElement(O,null,r.a.createElement(N,{title:"Apelido/titulo",id:"General_ipt-name",placeholder:"Relampago de Konoha",rows:"3",data:t._title,name:"_title",setData:e.handlerChangeProps})),r.a.createElement(O,null,r.a.createElement(N,{title:"Cl\xe3",id:"General_ipt-cla",data:t._cla,name:"_cla",setData:e.handlerChangeProps})),r.a.createElement(O,{className:"card"},r.a.createElement(N,{title:"Descri\xe7\xe3o",id:"General_ipt-bio",rows:"5",data:t._bio,name:"_bio",setData:e.handlerChangeProps})))};n(20);var S=function(e){return r.a.createElement("nav",{className:"Nav"},r.a.createElement("ul",null,e.pages.map((function(t,n){return r.a.createElement("li",{key:n,onClick:function(){e.setter(n)}},t)}))))};n(21);var j=function(e){var t=Object(a.useState)(0),n=Object(c.a)(t,2),i=n[0],o=n[1],s=Object(a.useState)(e.shinobi),u=Object(c.a)(s,2),l=u[0],f=u[1],h=[r.a.createElement(C,{shinobi:l,handlerChangeProps:function(e){var t=l;for(var n in e)void 0!==e[n]&&(t[n]=e[n]);f(t)}}),r.a.createElement("p",null,"example")];return r.a.createElement("div",{className:"ShinobiProfile"},r.a.createElement(k,{title:e.shinobi.fullName,activeReturn:"true",action:e.goToCharacterList}),h[i],r.a.createElement(S,{pages:["General","Status","Techniques","Inventory"],setter:o}),r.a.createElement(v,{style:{bottom:"4.5rem"},action:function(){return b.put(l)}},r.a.createElement("i",{className:"far fa-save"})))};n(22);function w(){var e=Object(a.useState)(d.example()),t=Object(c.a)(e,2),n=t[0],i=t[1];var o=[r.a.createElement(y,{goToShinobiProfile:function(e){b.get(e).then((function(e){i(e),f(1)}))},addShinobi:b.add.bind(b)}),r.a.createElement(j,{shinobi:n,goToCharacterList:function(){f(0)}})],s=Object(a.useState)(0),u=Object(c.a)(s,2),l=u[0],f=u[1];return o[l]}var P=document.getElementById("root");o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),P)}],[[6,1,2]]]);
//# sourceMappingURL=main.cfcd5e44.chunk.js.map