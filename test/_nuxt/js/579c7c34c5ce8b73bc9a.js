(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{461:function(n,t,e){},526:function(n,t,e){"use strict";e(461)},570:function(n,t,e){"use strict";e.r(t);e(54);var o={name:"TYandexMap",props:{coordinates:{type:Array,default:function(){return[]}}},data:function(){return{map:void 0}},mounted:function(){var n=this;window.ymaps&&this.$nextTick((function(){window.ymaps.ready(n.initMap)}))},methods:{initMap:function(){this.map=new window.ymaps.Map(this.$refs.mapEl,{center:this.coordinates,zoom:15,controls:[]},{suppressMapOpenBlock:!0}),this.map.geoObjects.add(this.placemark(this.coordinates))},placemark:function(n){return new window.ymaps.Placemark(n,{},{iconLayout:"default#image",iconImageHref:"/svg/map_logo.svg",iconImageSize:[100,108],iconImageOffset:[-50,-108]})}}},c=(e(526),e(51)),component=Object(c.a)(o,(function(){return(0,this._self._c)("div",{ref:"mapEl",staticClass:"map"},[this._t("default")],2)}),[],!1,null,null,null);t.default=component.exports}}]);