(window.webpackJsonp=window.webpackJsonp||[]).push([[89,14,33,62],{274:function(t,c,e){"use strict";c.a=param=>{var t={};return param&&(Array.isArray(param)?param.forEach((c=>{t["_".concat(c)]=!0})):t["_".concat(param)]=!0),t}},297:function(t,c,e){},301:function(t,c,e){"use strict";e.r(c);e(32);var o=e(274),n={name:"TButton",props:{mod:{type:[Array,String],default:""},type:{type:String,default:""}},computed:{modClass(){return Object(o.a)(this.mod)},classList(){return Object.assign({},this.modClass,this.disableClass,this.errorClass)}}},r=(e(310),e(31)),component=Object(r.a)(n,(function(){var t=this;return(0,t._self._c)("button",{staticClass:"button",class:t.classList},[t._t("default")],2)}),[],!1,null,"68eac052",null);c.default=component.exports},310:function(t,c,e){"use strict";e(297)},360:function(t,c,e){},450:function(t,c,e){"use strict";e(360)},495:function(t,c,e){"use strict";e.r(c);var o={name:"TYandexMap",props:{coordinates:{type:Array,default:()=>[]}},data:()=>({map:void 0}),mounted(){window.ymaps&&this.$nextTick((()=>{window.ymaps.ready(this.initMap)}))},methods:{initMap(){this.map=new window.ymaps.Map(this.$refs.mapEl,{center:this.coordinates,zoom:15,controls:[]},{suppressMapOpenBlock:!0}),this.map.geoObjects.add(this.placemark(this.coordinates))},placemark:t=>new window.ymaps.Placemark(t,{},{iconLayout:"default#image",iconImageHref:"/svg/map_logo.svg",iconImageSize:[100,108],iconImageOffset:[-50,-108]})}},n=(e(450),e(31)),component=Object(n.a)(o,(function(){return(0,this._self._c)("div",{ref:"mapEl",staticClass:"map"},[this._t("default")],2)}),[],!1,null,null,null);c.default=component.exports},553:function(t,c,e){},604:function(t,c,e){"use strict";e(553)},677:function(t,c,e){"use strict";e.r(c);var o=e(2),n=(e(109),e(495)),r=e(301),l={name:"ContactsPage",components:{TYandexMap:n.default,TButton:r.default},asyncData:t=>Object(o.a)((function*(){var{store:c,route:e}=t,o=yield c.dispatch("contacts/getContactsPage");return{seo:o.page.seo,form:o.page.form,contacts:o.page.contacts,link:o.page.link,mark:o.page.mark}}))(),data:()=>({isMapLocked:!0}),head(){return{title:this.seo.title,meta:[{hid:"title",name:"title",content:this.seo.title},{hid:"description",name:"description",content:this.seo.description}]}},mounted(){window.ymaps&&(this.ymapsLoaded=!0)},methods:{lockToggle(){this.isMapLocked=!this.isMapLocked}}},_=(e(604),e(31)),component=Object(_.a)(l,(function(){var t=this,c=t._self._c;return c("div",{staticClass:"contacts"},[c("div",{staticClass:"contacts__wrapper container"},[c("div",{staticClass:"contacts__block"},[c("div",{staticClass:"contacts__info"},[c("div",{staticClass:"contacts__title"},[t._v(t._s(t.form.title))]),t._v(" "),c("div",{staticClass:"contacts__list"},[c("div",{staticClass:"contacts__item"},[c("div",{staticClass:"contacts__subtitle"},[t._v("адрес объекта")]),t._v(" "),c("div",{staticClass:"contacts__text",domProps:{innerHTML:t._s(t.contacts.address_object_html)}})]),t._v(" "),c("div",{staticClass:"contacts__item"},[c("div",{staticClass:"contacts__subtitle"},[t._v("адрес офиса продаж")]),t._v(" "),c("div",{staticClass:"contacts__text",domProps:{innerHTML:t._s(t.contacts.address_office_html)}}),t._v(" "),c("div",{staticClass:"contacts__work",domProps:{innerHTML:t._s(t.contacts.office_time_html)}})]),t._v(" "),c("div",{staticClass:"contacts__item"},[c("div",{staticClass:"contacts__subtitle"},[t._v("координаты")]),t._v(" "),c("div",{staticClass:"contacts__text"},[t._v(t._s(t.mark.coordinates[0])+", "+t._s(t.mark.coordinates[1]))])]),t._v(" "),c("div",{staticClass:"contacts__item"},[c("div",{staticClass:"contacts__subtitle"},[t._v("контакты")]),t._v(" "),c("a",{staticClass:"contacts__phone",attrs:{href:"tel:"+t.contacts.phones.number}},[t._v(t._s(t.contacts.phones.number))]),t._v(" "),c("a",{staticClass:"contacts__text _mail",attrs:{href:"mailto:"+t.contacts.emails.address}},[t._v(t._s(t.contacts.emails.address))])]),t._v(" "),c("div",{staticClass:"contacts__item"},[c("t-button",{staticClass:"contact__btn",attrs:{mod:"contacts"}},[c("a",{attrs:{href:t.link.url,target:"_blank"}},[t._v("Построить маршрут")])])],1)])]),t._v(" "),c("div",{staticClass:"contacts__map"},[c("t-yandex-map",{staticClass:"contacts__map-item route",class:{_locked:t.isMapLocked},attrs:{coordinates:t.mark.coordinates}},[c("div",{staticClass:"contacts__map-lock",class:{_locked:t.isMapLocked},on:{click:t.lockToggle}},[c("span",[t._v("Нажмите для взаимодействия с картой")])])])],1)])])])}),[],!1,null,"95f39d1c",null);c.default=component.exports}}]);