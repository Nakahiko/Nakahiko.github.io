(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{151:function(t,e,n){"use strict";var o=n(13),component=Object(o.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero is-primary"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[e("span",{staticClass:"fill-in"},[this._t("default")],2)])])])])},[],!1,null,null,null);e.a=component.exports},153:function(t,e,n){"use strict";n.r(e);var o=n(151),l={props:{title:{type:String,required:!0},image:{type:String,required:!0},tags:{type:Array,required:!0},url:{type:String,required:!0}}},r=n(13),c={name:"Works",components:{Card2:Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column is-one-third"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-image"},[n("a",{attrs:{href:t.url}},[n("figure",{staticClass:"image is-4by3"},[n("img",{attrs:{src:t.image,alt:"Placeholder image"}})])])]),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4"},[t._v("\n            "+t._s(t.title)+"\n          ")])])]),t._v(" "),n("div",{staticClass:"content"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"content"},t._l(t.tags,function(e){return n("span",{key:e},[t._v(" #"+t._s(e))])}),0)])])])},[],!1,null,null,null).exports,PageHead:o.a},asyncData:function(){return{workInfos:[{title:"google/clasp",image:"/images/clasp.png",tags:["oss-contribution","typescript"],comment:"I contribute to Clasp of Google OSS",url:"https://github.com/google/clasp/commits?author=takanakahiko"},{title:"slack emoji meister",image:"https://lh3.googleusercontent.com/BRD3N_8nPTM3OGKPoJ1haKyHo8KvCnAJImAT9h7Q7CfeIQg8QkMc5URj-aouYImlMIhmxqcPMVI=w640-h400-e365",tags:["oss-maintenance","typescript","chrome-extention"],comment:"It is a Chrome extension that you can register as slack emoji by right clicking on the image in the browser",url:"https://github.com/google/clasp/commits?author=takanakahiko"},{title:"PrismDB",image:"/images/prismdb.png",tags:["oss-maintenance","typescript","nuxt.js","open-data","docker-compose","aws","express.js"],comment:"PrismDB is a platform to organize information of Pretty series. It is conducted as part of coterie activities.",url:"https://github.com/prickathon/prismdb"},{title:"sao-clasp",image:"https://user-images.githubusercontent.com/8784712/47992262-650b1780-e127-11e8-9e58-6c75e22ad99f.png",tags:["saojs","scaffolding"],comment:"It is a tool for interactively setting up a project when developing with clasp",url:"https://github.com/takanakahiko/sao-clasp"},{title:"Movie On Wallpaper",image:"/images/mow.gif",tags:["c-sharp","windows"],comment:"It is an application that can setting video to Windows wallpaper",url:"https://takanakahiko.me/MovieOnWallpaper/"},{title:"SocialityFilter API",image:"/images/sfa.gif",tags:["google-apps-script","web-api"],comment:"It is a sociality filter API",url:"https://takanakahiko.me/SocialityFilter/"}]}}},m=Object(r.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("pageHead",[t._v("Works")]),t._v(" "),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-multiline"},t._l(t.workInfos,function(e){return n("card2",{key:e.title,attrs:{title:e.title,image:e.image,tags:e.tags,url:e.url}},[t._v("\n          "+t._s(e.comment)+"\n        ")])}),1)])])],1)},[],!1,null,null,null);e.default=m.exports}}]);