(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-40406c4a"],{"0a83":function(t,e,s){"use strict";s("d003")},"0c34":function(t,e,s){"use strict";s("75d1")},"0efc":function(t,e,s){},1369:function(t,e,s){},"150d":function(t,e,s){"use strict";var i={name:"NoDataTip",props:{tip:{type:String,default:"-- 没有找到任何数据 --"},icon:{type:String,default:"flower-o"}}},n=(s("ccac"),s("2877")),a=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"no-data-tip"},[e("div",{staticClass:"content"},[e("van-icon",{staticClass:"icon",attrs:{name:this.icon}}),e("p",{staticClass:"text"},[this._v(this._s(this.tip))])],1)])}),[],!1,null,"35933fe3",null);e.a=a.exports},2741:function(t,e,s){"use strict";s("1369")},"2d3b":function(t,e,s){"use strict";s.r(e);s("498a");var i=s("b893"),n={name:"SearchHeader",data:function(){return{value:""}},deactivated:function(){this.setSearchValue()},watch:{value:{handler:i.a.debounce((function(){var t=this.$bus,e=this.value;t.$emit("handleSearchValue",e.trim())}))}},mounted:function(){var t=this;this.$bus.$on("handleSetSearchValue",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.setSearchValue(e)}))},methods:{onGoBack:function(){this.$router.go(-1),this.setSearchValue()},setSearchValue:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.value=t}}},a=(s("2741"),s("2877")),c=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("van-search",{staticClass:"search",attrs:{shape:"round","show-action":"",placeholder:"请输入歌名、歌手搜索"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[s("div",{attrs:{slot:"action"},on:{click:t.onGoBack},slot:"action"},[t._v("返 回")])])}),[],!1,null,"1c07fa02",null).exports,r=s("3835"),o=s("1da1"),l=(s("96cf"),s("e7bd")),u=s("ee87"),h={name:"HotTitle",data:function(){return{title:"热门搜索"}}},d=(s("0a83"),Object(a.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h2",[this._v(this._s(this.title))])])}),[],!1,null,"5643f17a",null).exports),f={name:"HotItem",props:{item:String}},m=(s("0c34"),{name:"SearchHot",components:{HotTitle:d,HotItem:Object(a.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"item",on:{click:function(e){return t.$bus.$emit("handleSetSearchValue",t.item)}}},[t._v(t._s(t.item))])}),[],!1,null,"4a122b9c",null).exports},props:{hots:Array}}),p=(s("4258"),Object(a.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return this.hots.length>0?e("div",{staticClass:"hot-wrap"},[e("HotTitle"),e("div",{staticClass:"list-wrap"},this._l(this.hots,(function(t,s){return e("HotItem",{key:s,attrs:{item:t.first}})})),1)],1):this._e()}),[],!1,null,"474e8d0e",null).exports),b=(s("d81d"),s("b0c0"),s("a15b"),s("bd00")),v=s("150d"),S=s("b775"),_=s("da71"),C=function(){return Object(S.a)({url:_.a.SEARCH_HOT_GET,method:"get"})},g=function(t){return Object(S.a)({url:_.a.SEARCH_KEYWORDS,method:"get",params:{keywords:t}})},y=s("f121"),w={name:"SearchReult",components:{SongList:b.a,Loading:u.a,NoDataTip:v.a},mounted:function(){this.busEvent()},data:function(){return{songs:[],songCount:0,isResultShow:!1,isLoadingShow:!0}},methods:{onResultClick:function(){this.$bus.$emit("handleSetSearchValue"),this.isResultShow=!1},busEvent:function(){var t=this;this.$bus.$on("handleSearchValue",(function(e){return t.getSearchValue(e)}))},getSearchValue:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function s(){var n,a,c,o,l,u,h;return regeneratorRuntime.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!t){s.next=17;break}return e.isResultShow=!0,e.isLoadingShow=!0,s.next=5,i.a.asyncFunc((function(){return g(t)}));case 5:if(n=s.sent,a=Object(r.a)(n,2),c=a[0],o=a[1],!c){s.next=12;break}return e.$toast.fail(y.SERVER_ERROR),s.abrupt("return");case 12:return l=o.result,u=l.songs,h=l.songCount,e.songs=u.map((function(t){return{name:t.name,id:t.id,player:t.artists.map((function(t){return t.name})).join("、")}})),e.songCount=h,e.isLoadingShow=!1,s.abrupt("return");case 17:e.isResultShow=!1,e.isLoadingShow=!1,e.songs=[],e.songCount=0;case 21:case"end":return s.stop()}}),s)})))()}}},$=(s("80ec"),Object(a.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return this.isResultShow?e("div",{staticClass:"result-wrap top-hd",on:{click:this.onResultClick}},[this.isLoadingShow?e("Loading"):!this.isLoadingShow&&this.songCount>0?e("SongList",{attrs:{list:this.songs,field:"historys"}}):e("NoDataTip")],1):this._e()}),[],!1,null,"5d8f383b",null).exports),O=s("5530"),j=s("2f62"),k={name:"HotTitle"},H=(s("a21a"),Object(a.a)(k,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("h2",[t._v("历史搜索")]),s("van-icon",{staticClass:"icon del",attrs:{name:"delete"},on:{click:function(e){return t.$bus.$emit("handleMusicCollectData",{music:{id:0},type:"historys"})}}})],1)}),[],!1,null,"6aeeaee9",null).exports),x={name:"HistoryItem",props:{item:Object}},E=(s("b7b9"),{name:"SearchHistory",components:{HistoryItem:Object(a.a)(x,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item",attrs:{"data-id":t.item.id}},[s("div",{staticClass:"info"},[s("p",{staticClass:"name",attrs:{"data-field":"history"}},[t._v(t._s(t.item.name))]),s("span",{staticClass:"line"},[t._v("-")]),s("p",{staticClass:"player",attrs:{"data-field":"history"}},[t._v(t._s(t.item.player))])]),s("van-icon",{staticClass:"icon",attrs:{name:"cross","data-field":"del"}})],1)}),[],!1,null,"32c4263e",null).exports},props:{historys:Array},methods:{onMusicHostoryClick:function(t){var e=t.target,s=e.dataset.field,n=i.a.findItem(e).dataset.id,a=this.$bus;switch(s){case"history":a.$emit("handleMusic",{id:n,type:"historys"});break;case"del":a.$emit("handleMusicCollectData",{music:{id:n},type:"historys"})}}}}),R=(s("dcf0"),{name:"SearchHistory",components:{HistoryTitle:H,HistoryList:Object(a.a)(E,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list-wrap"},[e("ul",{staticClass:"list",on:{click:this.onMusicHostoryClick}},this._l(this.historys,(function(t){return e("HistoryItem",{key:t.id,attrs:{item:t}})})),1)])}),[],!1,null,"7de29d77",null).exports},computed:Object(O.a)(Object(O.a)({},Object(j.c)("user",["user"])),Object(j.c)("music",["music","musicList"]))}),L=(s("4371"),Object(a.a)(R,(function(){var t=this.$createElement,e=this._self._c||t;return this.user&&this.musicList.historys.length>0?e("div",{staticClass:"history-wrap"},[e("HistoryTitle"),e("HistoryList",{attrs:{historys:this.musicList.historys,id:this.music.id}})],1):this._e()}),[],!1,null,"36481e12",null).exports),T={name:"SearchContent",components:{Scroll:l.a,SearchHot:p,SearchResult:$,SearchHistory:L,Loading:u.a},data:function(){return{hots:[],isLoadingShow:!0}},mounted:function(){this.getSearchHot()},methods:{getSearchHot:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var s,n,a,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.asyncFunc(C);case 2:if(s=e.sent,n=Object(r.a)(s,2),a=n[0],c=n[1],!a){e.next=9;break}return t.$toast.fail(y.SERVER_ERROR),e.abrupt("return");case 9:o=c.result.hots,t.hots=o,t.isLoadingShow=!1;case 12:case"end":return e.stop()}}),e)})))()}}},V={name:"Search",components:{SearchHeader:c,SearchContent:Object(a.a)(T,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"history-wrap"},[e("SearchResult"),this.isLoadingShow?e("Loading"):e("Scroll",{staticClass:"top-hd bg bt-5"},[e("SearchHot",{attrs:{hots:this.hots}}),e("SearchHistory")],1)],1)}),[],!1,null,null,null).exports}},I=Object(a.a)(V,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("SearchHeader"),e("SearchContent")],1)}),[],!1,null,null,null);e.default=I.exports},"3ffc":function(t,e,s){},4258:function(t,e,s){"use strict";s("7316")},4371:function(t,e,s){"use strict";s("86b1")},"629a":function(t,e,s){"use strict";s("c43f")},7316:function(t,e,s){},"75d1":function(t,e,s){},"7aee":function(t,e,s){},"80ec":function(t,e,s){"use strict";s("96d3")},"81c9":function(t,e,s){},"86b1":function(t,e,s){},"96d3":function(t,e,s){},a21a:function(t,e,s){"use strict";s("81c9")},b7b9:function(t,e,s){"use strict";s("7aee")},bd00:function(t,e,s){"use strict";var i=s("5530"),n=s("2f62"),a=(s("a9e3"),{name:"SongListSub",props:{item:Object,idx:Number,id:Number}}),c=(s("629a"),s("2877")),r=Object(c.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"item bd-t",class:{current:t.item.id==t.id},attrs:{"data-id":t.item.id}},[s("div",{staticClass:"cell"},[s("span",{staticClass:"num"},[t._v(t._s(t.idx+1))]),s("van-icon",{attrs:{"class-prefix":"icon music iconfont icon-music",name:"extra"}})],1),s("div",{staticClass:"info"},[s("span",{staticClass:"name"},[t._v(t._s(t.item.name))]),s("span",{staticClass:"player"},[t._v(t._s(t.item.player))])]),s("span",{staticClass:"like-o"})])}),[],!1,null,"62dbbf7a",null).exports,o=s("b893"),l={name:"SongList",components:{Sub:r},props:{field:{type:String,default:""},list:Array,artist:Object},computed:Object(i.a)({},Object(n.c)("music",["music"])),methods:{onSongListItemClick:function(t){var e=this.field,s=this.artist,i=this.list,n=this.$bus,a=t.target,c=o.a.findItem(a).dataset.id;n.$emit("handleMusic",{id:c,artist:s,type:e,playings:"historys"===e?"":i})}}},u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-wrap",class:[t.field]},[s("ul",{staticClass:"list",on:{click:t.onSongListItemClick}},t._l(t.list,(function(e,i){return s("Sub",{key:i,attrs:{item:e,idx:i,id:t.music.id}})})),1)])}),[],!1,null,null,null);e.a=u.exports},c43f:function(t,e,s){},ccac:function(t,e,s){"use strict";s("3ffc")},d003:function(t,e,s){},dcf0:function(t,e,s){"use strict";s("0efc")},e7bd:function(t,e,s){"use strict";var i=s("1fba"),n=(s("b893"),{name:"Scroll",props:{scrollAction:Function,isScrollToTop:Boolean},mounted:function(){this.initBS()},methods:{initBS:function(){var t=this;this.$nextTick((function(){t.scroll=new i.a(t.$refs.wrap,{probeType:3,click:!0}),t.scroll.refresh(),t.scrollAction&&t.scroll.on("scroll",t.scrollAction)}))}},deactivated:function(){this.isScrollToTop&&this.scroll.scrollTo(0,0)}}),a=s("2877"),c=Object(a.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"wrap",staticClass:"scroll-wrap pos-abs"},[e("div",{staticClass:"scroll-content"},[this._t("default")],2)])}),[],!1,null,null,null);e.a=c.exports}}]);
//# sourceMappingURL=chunk-40406c4a.4e22e648.js.map