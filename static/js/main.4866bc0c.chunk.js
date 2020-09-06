(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},13:function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},14:function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},15:function(e,n,t){e.exports=t(22)},22:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(8),i=t.n(c),l=t(1),o=t(2);function u(){var e=Object(l.a)(["\n  width: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100px;\n  text-align: center;\n  padding: 15px;\n"]);return u=function(){return e},e}function d(){var e=Object(l.a)(["\n  background-color: #7fa2ec;\n  list-style: none;\n  display: flex;\n  height: auto;\n  justify-content: space-between;\n  flex-direction: row;\n  margin: 0;\n  padding: 0;\n"]);return d=function(){return e},e}function p(){var e=Object(l.a)(["\n  padding-top: 15px;\n  background-color: #b8dae1;\n  width: 300px;\n  height: auto;\n  font: sans-serif;\n  font-size: 16px;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  flex-direction: column;\n  box-shadow: 10px 20px 13px 3px rgba(217, 208, 217, 0.88);\n  margin: 40px;\n"]);return p=function(){return e},e}var s=o.a.div(p()),m=o.a.ul(d()),f=o.a.li(u());function b(e){var n=e.name,t=e.avatar,a=e.tag,c=e.location,i=e.stats;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null,r.a.createElement("div",null,r.a.createElement("img",{src:t,alt:"user avatar"}),r.a.createElement("p",null,n),r.a.createElement("p",null,"@",a),r.a.createElement("p",null,c)),r.a.createElement(m,null,r.a.createElement(f,null,r.a.createElement("span",null,"Followers"),r.a.createElement("span",null,i.followers)),r.a.createElement(f,null,r.a.createElement("span",null,"Views"),r.a.createElement("span",null,i.views)),r.a.createElement(f,null,r.a.createElement("span",null,"Likes"),r.a.createElement("span",null,i.likes)))))}function x(){var e=Object(l.a)(["\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 50px;\n  border: 2px #e395a4;\n  border-left-style: dotted;\n"]);return x=function(){return e},e}function y(){var e=Object(l.a)(["\n  width: auto;\n  list-style: none;\n  display: flex;\n  height: auto;\n  justify-content: space-around;\n  flex-direction: row;\n  margin: 0;\n  padding: 15px;\n  flex-wrap: wrap;\n"]);return y=function(){return e},e}function g(){var e=Object(l.a)(["\n  padding-top: 15px;\n  background-color: #b8dae1;\n  width: 300px;\n  height: auto;\n  font: sans-serif;\n  font-size: 16px;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  flex-direction: column;\n  box-shadow: 10px 20px 13px 3px rgba(217, 208, 217, 0.88);\n  margin: 40px;\n"]);return g=function(){return e},e}b.defaultProps={name:"User Name",tag:"some_tag",avatar:"https://picsum.photos/200",location:"Somwhere on Earth",stats:0};var h=o.a.section(g()),w=o.a.ul(y()),E=o.a.li(x());function v(e){var n=e.title,t=e.stats;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null,null!==n&&r.a.createElement("h2",null,n),r.a.createElement(w,null,t.map((function(e){return r.a.createElement(E,{key:e.id},r.a.createElement("span",null,e.label),r.a.createElement("span",null,e.percentage))})))))}v.defaultProps={stats:[0]};var j=t(3),O=t(12);function k(){var e=Object(l.a)(["\n  background: ",";\n  display: block;\n  width: 10px;\n  height: 10px;\n  border: 1px solid transparent;\n  box-shadow: 2px 2px 2px 2px rgba(217, 208, 217, 0.88);\n  border-radius: 50%;\n  margin: 10px;\n"]);return k=function(){return e},e}function U(){var e=Object(l.a)(["\n  padding-left: 15px;\n"]);return U=function(){return e},e}function z(){var e=Object(l.a)(["\n  width: 300px;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  height: 50px;\n  box-shadow: 10px 5px 13px 3px rgba(217, 208, 217, 0.88);\n  margin-bottom: 20px;\n"]);return z=function(){return e},e}function J(){var e=Object(l.a)(["\n  width: 300px;\n  list-style: none;\n  display: flex;\n  height: auto;\n  flex-direction: column;\n  align-items: center;\n  margin: 15;\n"]);return J=function(){return e},e}var P=o.a.ul(J()),F=o.a.li(z()),N=o.a.p(U()),S=o.a.input(k(),(function(e){return e.isOnline?"green":"red"}));function G(e){var n=e.friends;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null,n.map((function(e){return r.a.createElement(F,{key:e.id},!0===e.isOnline?r.a.createElement(S,{isOnline:!0}):r.a.createElement(S,null),r.a.createElement("img",{src:e.avatar,alt:"",width:"48"}),r.a.createElement(N,null,e.name))}))))}G.defaultProps={avatar:"https://picsum.photos/200",name:"Friend Name"};var L=t(13);function A(){var e=Object(l.a)(["\n  width: 100px;\n"]);return A=function(){return e},e}function C(){var e=Object(l.a)(["\n  width: 100px;\n  height: 30px;\n"]);return C=function(){return e},e}function D(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  width: 500px;\n\n  margin: 0 auto;\n  border-bottom: 2px solid white;\n"]);return D=function(){return e},e}function M(){var e=Object(l.a)(["\n  padding: 15px;\n  background-color: #9de1af;\n  width: 600px;\n  height: auto;\n  font: sans-serif;\n  font-size: 16px;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  flex-direction: column;\n  box-shadow: 10px 20px 13px 3px rgba(217, 208, 217, 0.88);\n  margin: 40px;\n"]);return M=function(){return e},e}var R=o.a.section(M()),T=o.a.tr(D()),K=o.a.td(C()),W=o.a.th(A());function Y(e){var n=e.items;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement(T,null,r.a.createElement(W,null,"Type"),r.a.createElement(W,null,"Amount"),r.a.createElement(W,null,"Currency"))),r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement(T,{key:e.id},r.a.createElement(K,null,e.type),r.a.createElement(K,null,e.amount),r.a.createElement(K,null,e.currency))}))))))}Y.defaultProps={type:"some transaction",amount:0,currency:"units"};var _=t(14);function B(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{name:j.name,tag:j.tag,location:j.location,avatar:j.avatar,stats:j.stats}),r.a.createElement(v,{title:"Upload stats",stats:O}),r.a.createElement(G,{friends:L}),r.a.createElement(Y,{items:_}))}i.a.render(r.a.createElement(B,null),document.getElementById("root"))},3:function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')}},[[15,1,2]]]);
//# sourceMappingURL=main.4866bc0c.chunk.js.map