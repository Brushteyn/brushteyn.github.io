(window.webpackJsonp=window.webpackJsonp||[]).push([[37,62],{343:function(t,n,e){"use strict";e(12),e(22);n.a=function(param){var t={};return param&&(Array.isArray(param)?param.forEach((function(n){t["_".concat(n)]=!0})):t["_".concat(param)]=!0),t}},377:function(t,n,e){"use strict";var r=e(2),o=e(379);r({target:"String",proto:!0,forced:e(380)("link")},{link:function(t){return o(this,"a","href",t)}})},379:function(t,n,e){var r=e(4),o=e(29),c=e(17),f=/"/g,l=r("".replace);t.exports=function(t,n,e,r){var m=c(o(t)),_="<"+n;return""!==e&&(_+=" "+e+'="'+l(c(r),f,"&quot;")+'"'),_+">"+m+"</"+n+">"}},380:function(t,n,e){var r=e(3);t.exports=function(t){return r((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},425:function(t,n,e){},487:function(t,n,e){"use strict";e(425)},509:function(t,n,e){"use strict";e.r(n);e(377);var r=e(348),o=e(347),c=e.n(o),f=e(343);r.a.registerPlugin(c.a);var l={name:"TNextPages",components:{},props:{data:{type:Array,default:function(){return[]}},mod:{type:[Array,String],default:""},type:{type:String,default:""}},computed:{modClass:function(){return Object(f.a)(this.mod)},classList:function(){return Object.assign({},this.modClass,this.disableClass,this.errorClass)},container:function(){return this.$refs.container},item_1:function(){return this.$refs.item[0]},item_2:function(){return this.$refs.item[1]},item_3:function(){return this.$refs.item[2]}},mounted:function(){var t=this;this.$nextTick((function(){window.matchMedia("(max-width: 767px)").matches||(t.setAnimation(),t.runAnimation())}))},methods:{setAnimation:function(){r.a.set(this.item_1,{y:"20%"}),r.a.set(this.item_2,{y:"30%"}),r.a.set(this.item_3,{y:"50%"})},runAnimation:function(){var t={trigger:this.container,scrub:1,start:"-=100%",end:"+=100%"};r.a.to([this.item_1,this.item_2,this.item_3],{y:0,scrollTrigger:t})}}},m=(e(487),e(51)),component=Object(m.a)(l,(function(){var t=this,n=t._self._c;return n("div",{ref:"container",staticClass:"next-pages container",class:t.classList},[n("div",{staticClass:"next-pages__title"},[t._v("продолжить путешествие по сказке")]),t._v(" "),n("div",{staticClass:"next-pages__block"},[t._l(t.data,(function(e){return n("div",{key:e.id,ref:"item",refInFor:!0,staticClass:"next-pages__item"},[n("nuxt-link",{staticClass:"next-pages__img",attrs:{to:e.link||e.url}},[n("img",{attrs:{src:e.src||e.image,alt:""}})]),t._v(" "),n("div",{staticClass:"next-pages__text"},[t._v(t._s(e.title))])],1)})),t._v(" "),n("div",{staticClass:"next-pages__link"},[n("nuxt-link",{attrs:{to:"/choose"}},[t._v("выберите свою квартиру")])],1)],2)])}),[],!1,null,"003170f2",null);n.default=component.exports}}]);