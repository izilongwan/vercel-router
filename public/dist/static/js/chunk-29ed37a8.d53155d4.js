(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-29ed37a8"],{"0246":function(t,e,s){"use strict";s("a4d9")},"0320":function(t,e,s){},3713:function(t,e,s){"use strict";s("accb")},3782:function(t,e,s){"use strict";var n={name:"RecomTitle",props:{title:String}},i=(s("3713"),s("2877")),a=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h2",[e("van-icon",{staticClass:"icon",attrs:{name:"fire-o"}}),this._v("\n    "+this._s(this.title)+"\n  ")],1)])}),[],!1,null,"4e285a42",null);e.a=a.exports},"912d":function(t,e,s){"use strict";s("e8a5")},"91b4":function(t,e,s){"use strict";var n=s("b893"),i={name:"ComListSub",props:{item:Object}},a=(s("0246"),s("2877")),r=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"item",attrs:{"data-id":this.item.id}},[e("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"img-wrap br-10"},[e("div",{staticClass:"count"}),e("img",{attrs:{"data-src":this.item.picUrl||this.item.coverImgUrl,alt:"封面"}})]),e("p",{staticClass:"text"},[this._v(this._s(this.item.name))])])}),[],!1,null,"0ec3463e",null).exports,c={name:"ComList",props:{list:Array,type:String},components:{Sub:r},methods:{onListItemClick:function(t){var e=t.target,s=n.a.findItem(e).dataset.id,i=this.type,a=this.$router,r=this.$bus;"play"===i?a.push({name:"list",params:{type:i,id:s}}):r.$emit("handleMusic",{id:s})}}},l=(s("912d"),Object(a.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list-wrap"},[e("ul",{staticClass:"list",on:{click:this.onListItemClick}},this._l(this.list,(function(t,s){return e("Sub",{key:s,attrs:{item:t}})})),1)])}),[],!1,null,"f46dc784",null));e.a=l.exports},a4d9:function(t,e,s){},a89a:function(t,e,s){"use strict";s("f5c4")},accb:function(t,e,s){},c625:function(t,e,s){"use strict";s.r(e);var n=s("3835"),i=s("1da1"),a=(s("96cf"),s("e7bd")),r={name:"RecomBanner",props:{banners:Array}},c=(s("e751"),s("2877")),l=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("van-swipe",{attrs:{autoplay:3e3}},this._l(this.banners,(function(t,s){return e("van-swipe-item",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],key:s},[e("img",{attrs:{"data-src":t.pic}})])})),1)],1)}),[],!1,null,"4545105d",null).exports,o={name:"RecomField",data:function(){return{list:[{name:"fire-o",text:"私人FM",path:"/"},{name:"todo-list-o",text:"每日推荐",path:"/"},{name:"music-o",text:"歌手",path:"singer"},{name:"bar-chart-o",text:"排行榜",path:"toplist"}]}}},u=(s("a89a"),Object(c.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("ul",{staticClass:"list"},t._l(t.list,(function(e,n){var i=e.name,a=e.text,r=e.path;return s("router-link",{key:n,staticClass:"item",attrs:{tag:"li",to:r}},[s("div",{staticClass:"icon-wrap"},[s("van-icon",{attrs:{name:i}})],1),s("p",{staticClass:"text"},[t._v(t._s(a))])])})),1)])}),[],!1,null,"1fe98caf",null).exports),m=s("3782"),h=s("91b4"),p={name:"Recom",components:{RecomTitle:m.a,RecomList:h.a},props:{list:Array,newsong:Array}},d=Object(c.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("RecomTitle",{attrs:{title:"精选歌单"}}),e("RecomList",{attrs:{type:"play",list:this.list}}),e("RecomTitle",{attrs:{title:"新歌上映"}}),e("RecomList",{attrs:{type:"song",list:this.newsong}})],1)}),[],!1,null,null,null).exports,f=s("ee87"),b=s("b775"),v=s("da71"),g=s("bc3a"),_=s.n(g),w={name:"Recom",components:{Scroll:a.a,RecomBanner:l,RecomField:u,RecomContent:d,Loading:f.a},data:function(){return{banners:[],list:[],newsong:[],isLoadingShow:!0}},mounted:function(){this.getDatas()},methods:{getDatas:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var s,i,a,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoadingShow=!0,e.next=3,_.a.all([Object(b.a)({url:v.a.RECOMM_BANENR_GET,method:"get"}),Object(b.a)({url:v.a.RECOMM_LIST_GET,method:"get"}),Object(b.a)({url:v.a.RECOMM_NEWSONG_GET,method:"get"})]);case 3:s=e.sent,i=Object(n.a)(s,3),a=i[0].data.banners,r=i[1].data.result,c=i[2].data.result,t.banners=a,t.list=r,t.newsong=c,t.isLoadingShow=!1;case 12:case"end":return e.stop()}}),e)})))()}}},C=Object(c.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return this.isLoadingShow?e("Loading"):e("Scroll",{staticClass:"top-hd bt-5"},[e("RecomBanner",{attrs:{banners:this.banners}}),e("RecomField"),e("RecomContent",{attrs:{list:this.list,newsong:this.newsong}})],1)}),[],!1,null,null,null);e.default=C.exports},e751:function(t,e,s){"use strict";s("0320")},e7bd:function(t,e,s){"use strict";var n=s("1fba"),i=(s("b893"),{name:"Scroll",props:{scrollAction:Function,isScrollToTop:Boolean},mounted:function(){this.initBS()},methods:{initBS:function(){var t=this;this.$nextTick((function(){t.scroll=new n.a(t.$refs.wrap,{probeType:3,click:!0}),t.scroll.refresh(),t.scrollAction&&t.scroll.on("scroll",t.scrollAction)}))}},deactivated:function(){this.isScrollToTop&&this.scroll.scrollTo(0,0)}}),a=s("2877"),r=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"wrap",staticClass:"scroll-wrap pos-abs"},[e("div",{staticClass:"scroll-content"},[this._t("default")],2)])}),[],!1,null,null,null);e.a=r.exports},e8a5:function(t,e,s){},f5c4:function(t,e,s){}}]);
//# sourceMappingURL=chunk-29ed37a8.d53155d4.js.map