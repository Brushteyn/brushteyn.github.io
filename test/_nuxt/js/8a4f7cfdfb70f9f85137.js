(window.webpackJsonp=window.webpackJsonp||[]).push([[94,15,17,19,30,62],{274:function(e,t,r){"use strict";t.a=param=>{var e={};return param&&(Array.isArray(param)?param.forEach((t=>{e["_".concat(t)]=!0})):e["_".concat(param)]=!0),e}},298:function(e,t,r){},302:function(e,t,r){},306:function(e,t,r){"use strict";r.r(t);r(32),r(25),r(33);var n=r(308),o=(r(309),r(274)),l=e=>{var path=e.composedPath&&e.composedPath()||e.path,t=e.target;if(null!=path)return path.includes(window)?path:path.concat(window);if(t===window)return[window];return[t].concat(function e(t,r){r=r||[];var n=t.parentNode;return n?e(n,r.concat(n)):r}(t),window)},c={name:"TSelect",components:{PerfectScrollbar:n.PerfectScrollbar},props:{options:{type:Array,required:!0},values:{type:[String,Object],default:()=>{}},type:{type:String,default:""},mod:{type:[Array,String],default:""},sort:{type:String,default:"asc"},disable:{type:Boolean,default:!1}},data:()=>({selected:{},open:!1}),computed:{openClass(){return Object(o.a)(this.open,"open")},modClass(){return Object(o.a)(this.mod)},typeClass(){return Object(o.a)(this.type)},disableClass(){return Object(o.a)(this.disable,"disabled")},classList(){return Object.assign({},this.modClass,this.typeClass,this.openClass,this.disableClass)}},created(){this.selected=this.options[0]},mounted(){this.setSelected(this.selected)},methods:{setSelected(option){this.selected=option,this.open=!1,this.$emit("change",option)},dropdownClose(e){var t=this.$refs.dropdown;l(e).includes(t)||(this.open=!1)}}},d=(r(311),r(31)),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"select",class:e.classList,on:{blur:function(t){e.open=!1}}},[t("div",{staticClass:"selected",class:{open:e.open},on:{click:function(t){e.open=!e.open}}},[e._v("\n    "+e._s(e.selected.name)+"\n  ")]),e._v(" "),t("div",{staticClass:"items-wrap",class:{selectHide:!e.open}},[t("perfect-scrollbar",[t("div",{staticClass:"items"},e._l(e.options,(function(option,i){return t("div",{key:i,on:{click:function(t){return e.setSelected(option)}}},[e._v("\n          "+e._s(option.name)+"\n        ")])})),0)])],1)])}),[],!1,null,"353d0345",null);t.default=component.exports},311:function(e,t,r){"use strict";r(298)},324:function(e,t,r){"use strict";r(302)},326:function(e,t,r){},346:function(e,t,r){"use strict";r.r(t);r(32);var n=r(274),o={name:"TImageDecor",props:{mod:{type:[Array,String],default:""}},computed:{modClass(){return Object(n.a)(this.mod)},classList(){return Object.assign({},this.modClass)}}},l=(r(324),r(31)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"img-decor",class:e.classList},[t("svg-icon",{attrs:{name:"cut-form"}}),e._v(" "),t("svg-icon",{attrs:{name:"cut-form"}}),e._v(" "),t("svg-icon",{attrs:{name:"cut-form"}}),e._v(" "),t("svg-icon",{attrs:{name:"cut-form"}})],1)}),[],!1,null,"455756d0",null);t.default=component.exports},388:function(e,t,r){"use strict";r(326)},435:function(e,t,r){"use strict";r.r(t);r(32);var n=r(274),o={name:"TCloseButton",props:{mod:{type:[Array,String],default:""}},computed:{modClass(){return Object(n.a)(this.mod)},classList(){return Object.assign({},this.modClass)}}},l=(r(388),r(31)),component=Object(l.a)(o,(function(){var e=this._self._c;return e("button",{staticClass:"close-button",class:this.classList},[e("svg-icon",{attrs:{name:"close"}})],1)}),[],!1,null,null,null);t.default=component.exports},451:function(e,t,r){"use strict";(function(e){r(109),r(37),r(10),r(12),r(512),r(179);t.a={head(){var t,r,n,o,l,c;return{title:(null===(t=this.seo)||void 0===t?void 0:t.title)||this.title,meta:[{hid:"keywords",name:"keywords",content:null===(r=this.seo)||void 0===r?void 0:r.keywords},{hid:"og:title",property:"og:title",content:null===(n=this.seo)||void 0===n?void 0:n.title},{hid:"og:site_name",property:"og:site_name",content:null===(o=this.seo)||void 0===o?void 0:o.title},{hid:"description",name:"description",content:null===(l=this.seo)||void 0===l?void 0:l.description},{hid:"og:description",property:"og:description",content:null===(c=this.seo)||void 0===c?void 0:c.description},{hid:"og:locale",property:"og:locale",content:"ru_RU"},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:url",property:"og:url",content:new URL(this.$route.fullPath,"".concat(e.env.NUXT_SEO_URL||"http://example.com")).toString()}]}}}}).call(this,r(110))},452:function(e,t,r){},513:function(e,t,r){"use strict";r(452)},556:function(e,t,r){},557:function(e,t,r){},585:function(e,t,r){"use strict";r.r(t);r(32);var n=r(274),o={name:"TCameraOnline",components:{TCloseButton:r(435).default},props:{data:{type:[String,Array],default:()=>[]},mod:{type:[Array,String],default:""}},data:()=>({cameraOpen:!1,currentTab:"",hidden:!1}),computed:{top(){return this.$refs.top},modClass(){return Object(n.a)(this.mod)},classList(){return Object.assign({},this.modClass)}},beforeMount(){this.currentTab=this.data[0].id},methods:{selectTab(e){this.currentTab=e},videoPlay(){this.hidden=!this.hidden}}},l=(r(513),r(31)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"cam-online"},[t("t-close-button",{staticClass:"cam-online__close",nativeOn:{click:function(t){return e.$emit("close-modal")}}}),e._v(" "),t("div",{staticClass:"cam-online__wrap"},[t("div",{staticClass:"cam-online__list"},e._l(e.data,(function(r){return t("div",{key:r.id,staticClass:"cam-online__item",class:{_active:r.id===e.currentTab},on:{click:function(t){return e.selectTab(r.id)}}},[e._v("\n        "+e._s(r.name)+"\n      ")])})),0),e._v(" "),e._l(e.data,(function(r){return t("div",{key:r.id,staticClass:"cam-online__video-block",class:{_active:r.id===e.currentTab}},[t("iframe",{staticClass:"cam-online__video",attrs:{allowfullscreen:"",autoplay:"",muted:"",loop:"",src:r.url},on:{click:e.videoPlay}})])}))],2)],1)}),[],!1,null,null,null);t.default=component.exports},612:function(e,t,r){"use strict";r(556)},613:function(e,t,r){"use strict";r(557)},680:function(e,t,r){"use strict";r.r(t);var n=r(16),o=r(2),l=r(451),c=r(585),d=r(346),m=r(306);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var h={name:"Progress",components:{TCameraOnline:c.default,TImageDecor:d.default,TSelect:m.default},mixins:[l.a],asyncData:e=>Object(o.a)((function*(){var{store:t}=e;return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},yield t.dispatch("progress/getPage"))}))(),data(){return{page:{seo:{title:"Ход строительства",description:"Ход строительства",keywords:null},title:"Ход строительства",objects:{gallery:[{id:1,title:"Корпус 1",items:[{id:1,url:"/all/2022/12",img:"/img/gallery_1.png",count:"1",year:"2022",mouth:"декабрь"},{id:2,url:"/all/2022/11",img:"/img/gallery_2.png",count:"2",year:"2022",mouth:"декабрь"},{id:3,url:"/all/2022/12",img:"/img/gallery_1.png",count:"3",year:"2022",mouth:"декабрь"},{id:4,url:"/all/2022/11",img:"/img/gallery_2.png",count:"4",year:"2022",mouth:"декабрь"},{id:5,url:"/all/2022/12",img:"/img/gallery_1.png",count:"5",year:"2022",mouth:"декабрь"},{id:6,url:"/all/2022/11",img:"/img/gallery_2.png",count:"6",year:"2022",mouth:"декабрь"}]},{id:2,title:"Корпус 2",items:[{id:1,url:"/all/2022/12",img:"/img/gallery_1.png",count:"1",date:"декабрь 2022"},{id:2,url:"/all/2022/11",img:"/img/gallery_2.png",count:"2",date:"ноябрь 2022"}]},{id:3,title:"Корпус 3",items:[{id:1,url:"/all/2022/12",img:"/img/gallery_1.png",count:"1",date:"декабрь 2022"}]}],cams:[{id:"5",name:"корпус 1",type:"url",url:"https://ipeye.ru/ipeye_service/api/iframe.php?iframe_player=1&dev=87d4010f38b9496fba6fe57226022042&autoplay=0&archive=1",ifram:""},{id:"4",name:"корпус 2",type:"url",url:"https://ipeye.ru/ipeye_service/api/iframe.php?iframe_player=1&dev=87d4010f38b9496fba6fe57226022042&autoplay=0&archive=1",ifram:""},{id:"6",name:"корпус 6",type:"url",url:"https://ipeye.ru/ipeye_service/api/iframe.php?iframe_player=1&dev=87d4010f38b9496fba6fe57226022042&autoplay=0&archive=1",ifram:""},{id:"7",name:"корпус 7",type:"url",url:"https://ipeye.ru/ipeye_service/api/iframe.php?iframe_player=1&dev=87d4010f38b9496fba6fe57226022042&autoplay=0&archive=1",ifram:""}],corp:[{id:1,name:"Корпус 1",count:0},{id:2,name:"Корпус 2",count:1},{id:3,name:"Корпус 3",count:2}]}},sliderProgress:{speed:700,slidesPerView:"auto",spaceBetween:2,lazy:{enabled:!0,loadOnTransitionStart:!0,loadPrevNext:!0,loadPrevNextAmount:3},scrollbar:{el:".swiper-scrollbar",draggable:!0},on:{slidesLengthChange(){this.slidesGrid.slice(-1)[0]>=this.size&&"0"!==this.breakpoints&&(this.params.slidesOffsetAfter=20,this.update())},setTranslate:()=>{var e=this.$refs.swiper;if(e&&e.$swiper&&!e.$swiper.isLocked){var{snapGrid:t,slidesGrid:r}=e.$swiper;t!==r&&(e.$swiper.slidesGrid=e.$swiper.snapGrid)}}}},popupOpen:!1,currentTab:0}},computed:{cameras(){return this.page.objects.cams},gallery(){return this.page.objects.gallery},getGroupItems(){return this.gallery[this.currentTab].items},swiper(){return this.$refs.swiper.$swiper}},created(){this.currentTab=0},methods:{togglePopup(){this.popupOpen=!this.popupOpen,document.querySelector("body").classList.toggle("_noScroll",this.popupOpen),document.querySelector(".header_wrapper").classList.toggle("hidden_header",this.popupOpen)},currentTabs(e){console.log(e),this.currentTab=e.count}}},v=h,_=(r(612),r(613),r(31)),component=Object(_.a)(v,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"progress-page"},[t("transition",{attrs:{name:"ProgressAllPopup"}},[e.popupOpen?t("t-camera-online",{attrs:{data:e.cameras},on:{"close-modal":e.togglePopup}}):e._e()],1),e._v(" "),t("div",{staticClass:"progress container"},[t("div",{staticClass:"progress__top"},[t("div",{staticClass:"progress__title"},[e._v(e._s(e.page.title))]),e._v(" "),t("div",{staticClass:"progress__block"},[t("div",{staticClass:"progress__video",on:{click:e.togglePopup}},[t("svg-icon",{attrs:{name:"camera"}})],1),e._v(" "),t("t-select",{attrs:{type:"progress",options:e.page.objects.corp,mod:"progress"},on:{change:e.currentTabs},model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}})],1)]),e._v(" "),t("div",{staticClass:"progress__wrapper"},[t("div",{staticClass:"progress__slider"},[t("swiper",{ref:"swiper",attrs:{options:e.sliderProgress,"auto-destroy":!1}},e._l(e.page.objects.gallery[e.currentTab].items,(function(r){return t("swiper-slide",{key:r.id,staticClass:"progress__slide"},[t("nuxt-link",{staticClass:"slide",attrs:{to:"/progress"+r.url}},[t("div",{staticClass:"slide__image"},[t("img",{ref:"slideImage",refInFor:!0,attrs:{src:r.img,alt:""}}),e._v(" "),t("t-image-decor",{attrs:{mod:"progress"}}),e._v(" "),t("div",{staticClass:"slide__text"},[t("div",{staticClass:"slide__mouth"},[e._v(e._s(r.mouth))]),e._v(" "),t("div",{staticClass:"slide__mouth"},[e._v(e._s(r.year))])])],1)])],1)})),1),e._v(" "),t("div",{staticClass:"swiper-scrollbar"})],1)])])],1)}),[],!1,null,"b16497dc",null);t.default=component.exports}}]);