(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4eeb066c"],{"368b":function(t,e,n){},"6e96":function(t,e,n){"use strict";n("7997")},"77be":function(t,e,n){"use strict";n.r(e);var c=n("d07a"),o=n("5530"),r=n("2f62"),s={name:"AccountContent",computed:Object(o.a)({},Object(r.c)("user",["user"]))},u=n("2877"),i=Object(u.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return this.user?e("van-cell-group",[e("van-cell",{attrs:{title:"昵称",icon:"fire-o",value:this.user.nickname}}),e("van-cell",{attrs:{title:"手机号",icon:"phone-o",value:this.user.phone}})],1):this._e()}),[],!1,null,null,null).exports,l=n("f121"),a={name:"AccountLogout",methods:Object(o.a)(Object(o.a)(Object(o.a)({},Object(r.b)("user",["SetUser"])),Object(r.b)("music",["SetMusicList"])),{},{logout:function(){var t=this.$router,e=this.$bus;localStorage.removeItem(l.TOKEN_NAME),this.SetUser(null),this.SetMusicList({clear:!0}),t.push("/recom"),e.$emit("handleShowSidebar",!1)}})},b=(n("7b59"),Object(u.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("van-button",{staticClass:"btn",attrs:{round:"",color:"linear-gradient(to right, #4bb0ff, #6149f6)",type:"primary"},on:{click:this.logout}},[this._v("退出登录")])}),[],!1,null,"6df5bf67",null).exports),f={name:"Account",components:{AccountHeader:c.a,AccountContent:i,AccountLogout:b}},h=Object(u.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("AccountHeader",{attrs:{title:"我的信息"}}),e("AccountContent"),e("AccountLogout")],1)}),[],!1,null,null,null);e.default=h.exports},7997:function(t,e,n){},"7b59":function(t,e,n){"use strict";n("368b")},d07a:function(t,e,n){"use strict";var c={name:"Toplist",props:{title:String}},o=(n("6e96"),n("2877")),r=Object(o.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("van-nav-bar",{staticClass:"header",attrs:{title:t.title,"left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}},[t._t("default",null,{slot:"title"})],2)}),[],!1,null,"575dd905",null);e.a=r.exports}}]);
//# sourceMappingURL=chunk-4eeb066c.4d9e455a.js.map