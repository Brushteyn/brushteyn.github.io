(window.webpackJsonp=window.webpackJsonp||[]).push([[25,62],{343:function(t,n,o){"use strict";o(12),o(22);n.a=function(param){var t={};return param&&(Array.isArray(param)?param.forEach((function(n){t["_".concat(n)]=!0})):t["_".concat(param)]=!0),t}},558:function(t,n,o){},619:function(t,n,o){"use strict";o(558)},668:function(t,n,o){"use strict";o.r(n);o(27);var e=o(343),c={name:"TPopup",props:{mod:{type:[String,Array],default:""},name:{type:String,default:""}},data:function(){return{scrollOptions:{handlers:["keyboard","wheel","touch"],suppressScrollX:!0}}},computed:{modClass:function(){return Object(e.a)(this.mod)},classList:function(){return Object.assign({},this.modClass)}},methods:{closed:function(){this.$emit("closed")}}},l=(o(619),o(51)),component=Object(l.a)(c,(function(){var t=this,n=t._self._c;return n("client-only",[n("vue-final-modal",t._g(t._b({attrs:{name:t.name,"esc-to-close":!0,"click-to-close":!0,classes:["popup",t.classList],"overlay-class":["popup-overlay",t.classList],"content-class":"popup-content","z-index-base":1e4},on:{closed:t.closed},scopedSlots:t._u([{key:"default",fn:function(o){var e=o.close,c=o.params;return[n("div",{staticClass:"popup-wrapper"},[n("div",{staticClass:"popup"},[n("button",{staticClass:"popup__close",on:{click:e}},[n("svg-icon",{attrs:{name:"close"}})],1),t._v(" "),t._t("default",null,{params:c})],2)])]}}],null,!0)},"vue-final-modal",t.$attrs,!1),t.$listeners))],1)}),[],!1,null,"08f93827",null);n.default=component.exports}}]);