(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{161:function(t,e,n){var content=n(167);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("096cf56f",content,!0,{sourceMap:!1})},162:function(t,e,n){var content=n(173);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("046d49e1",content,!0,{sourceMap:!1})},164:function(t,e,n){"use strict";var r=n(13),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero is-primary"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[e("span",{staticClass:"fill-in"},[this._t("default")],2)])])])])}),[],!1,null,null,null);e.a=component.exports},166:function(t,e,n){"use strict";var r=n(161);n.n(r).a},167:function(t,e,n){(e=n(17)(!1)).push([t.i,".timeline-content{opacity:0}.test{-webkit-animation-name:fade-in;animation-name:fade-in;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-delay:0;animation-delay:0;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes fade-in{0%{opacity:0;transform:translate3d(0,30px,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fade-in{0%{opacity:0;transform:translate3d(0,30px,0)}to{opacity:1;transform:translateZ(0)}}",""]),t.exports=e},171:function(t,e,n){t.exports=n.p+"img/icon.76c5cac.jpg"},172:function(t,e,n){"use strict";var r=n(162);n.n(r).a},173:function(t,e,n){(e=n(17)(!1)).push([t.i,"canvas{width:100%}",""]),t.exports=e},176:function(t,e,n){"use strict";n.r(e);var r=n(164),o={props:{title:{type:String,required:!0},icon:{type:String,required:!0},url:{type:String,required:!0}}},l=n(13),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column"},[n("div",{staticClass:"card"},[n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title has-text-grey"},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"content has-text-centered"},[n("a",{attrs:{href:t.url}},[n("b-icon",{attrs:{icon:t.icon,size:"is-large",type:"is-primary"}})],1)])]),t._v(" "),n("footer",{staticClass:"card-footer"},[n("div",{staticClass:"card-footer-item"},[n("span",[t._t("default")],2)])])])])}),[],!1,null,null,null).exports,m={props:{timelineContent:{type:Array,required:!0}},methods:{visibilityChanged:function(t,e){var n=e.target.classList;t?n.add("test"):n.remove("test")}}},d=(n(166),Object(l.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timeline"},[t._m(0),t._v(" "),t._l(t.timelineContent,(function(content,i){return n("div",{key:i,staticClass:"timeline-item"},[n("div",{staticClass:"timeline-marker"}),t._v(" "),n("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.visibilityChanged,expression:"visibilityChanged"}],staticClass:"timeline-content"},[n("p",{staticClass:"heading"},[t._v("\n        "+t._s(content.title)+"\n      ")]),t._v(" "),n("p",[t._v(t._s(content.content))]),t._v(" "),n("p",[t._v("-")]),t._v(" "),n("p",[t._v(t._s(content.role))])])])})),t._v(" "),t._m(1)],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"timeline-header"},[e("span",{staticClass:"tag is-medium is-primary"},[this._v("Present")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"timeline-header"},[e("span",{staticClass:"tag is-medium is-primary"},[this._v("Birth :tada:")])])}],!1,null,null,null).exports),h=n(165),v=n(168),_=n(171),f=n.n(_),k={name:"RotateBox",data:function(){return{scene:null,renderer:null,camera:null,light:null,geometry:null,material:null,cube:null,controls:null}},mounted:function(){this.init();var t=document.getElementById("canvas");this.renderer=new h.o({antialias:!0,canvas:t}),this.controls=new v.a(this.camera,t),this.camera.position.set(0,0,2),this.light.position.set(0,0,10),this.scene.add(this.cube),this.scene.add(this.light),this.animate()},methods:{init:function(){var t=new h.i,e=new h.g(75,3,.1,1e3),n=new h.b(16777215),r=new h.a(1,1,1),o=(new h.l).load(f.a),l=new h.f({map:o}),c=new h.e(r,l);this.scene=t,this.renderer=null,this.camera=e,this.light=n,this.geometry=r,this.material=l,this.cube=c},animate:function(){requestAnimationFrame(this.animate),this.cube.rotation.x+=.02,this.cube.rotation.y+=.02,this.renderer.render(this.scene,this.camera)}}},y=(n(172),Object(l.a)(k,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{attrs:{id:"canvas",width:"600",height:"200"}})}),[],!1,null,null,null).exports),C={name:"AboutMe",components:{Card:c,PageHead:r.a,TimeLine:d,RotateBox:y},asyncData:function(){return{likes:[{icon:"laptop",title:"Programming",comment:"I like coding.",body:"Python / TypeScript / Elixir / ..."},{icon:"earth",title:"OSS",comment:"I like those cultures.",body:"Clasp / Nuxt / saojs / ..."},{icon:"television-classic",title:"Animes",comment:"I like girls who strive hard.",body:"Pripara / Aikatsu! / Vividred Operation / ..."}],links:[{title:"GitHub",icon:"github",comment:"Various developments",url:"https://github.com/takanakahiko"},{title:"Twitter",icon:"twitter",comment:"Various tweets",url:"https://twitter.com/takanakahiko"},{title:"Blog",icon:"blogger",comment:"Various poems",url:"https://takanakahiko.hatenablog.com"},{title:"Pixiv sketch",icon:"pencil-circle",comment:"Various illustrations",url:"https://sketch.pixiv.net/@takanakahiko"},{title:"Facebook",icon:"facebook",comment:"Private relationships",url:"https://facebook.com/takanakahiko"}],timelineContent:[{title:"April 2020 - Present",content:"Akatsuki Inc.",role:"Engineer"},{title:"February 2019 - March 2020",content:"Japan Digital Design",role:"Data and Prototyping Engineer(internship)"},{title:"February 2019 - March 2020",content:"Gaiax",role:"OSS promoter(internship)"},{title:"April 2018 - March 2020",content:"Takushoku University",role:"Information and Design Science Course(Master of Engineering)"},{title:"February 2018 - January 2019",content:"Air Closet",role:"Data scientist(internship)"},{title:"April 2014 - December 2018",content:"Non-disclosure (Embedded system development company)",role:"Fullstack engineer(part-time job)"},{title:"April 2014 - March 2018",content:"Takushoku University",role:"Undergraduate"}]}}},w=Object(l.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("pageHead",[t._v("About me")]),t._v(" "),n("section",{staticClass:"section has-text-centered"},[n("div",{staticClass:"container"},[n("rotate-box")],1),t._v(" "),t._m(0)]),t._v(" "),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("h3",{staticClass:"title is-3"},[t._v("\n        I like...\n      ")]),t._v(" "),n("div",{staticClass:"columns is-variable"},t._l(t.likes,(function(e){return n("div",{key:e.title,staticClass:"column has-text-centered bd-notification"},[n("p",[n("b-icon",{attrs:{icon:e.icon,size:"is-large"}})],1),t._v(" "),n("p",{staticClass:"title is-4"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("p",{staticClass:"subtitle is-5"},[t._v("\n            "+t._s(e.comment)+"\n          ")]),t._v(" "),n("p",{staticClass:"content"},[t._v("\n            "+t._s(e.body)+"\n          ")])])})),0)])]),t._v(" "),n("section",{staticClass:"hero is-primary is-bold"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("\n          History\n        ")]),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("timeLine",{attrs:{"timeline-content":t.timelineContent}})],1)])])])]),t._v(" "),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("h3",{staticClass:"title is-3"},[t._v("\n        Links\n      ")]),t._v(" "),n("div",{staticClass:"columns"},t._l(t.links,(function(e){return n("card",{key:e.title,attrs:{title:e.title,icon:e.icon,url:e.url}},[t._v("\n          "+t._s(e.comment)+"\n        ")])})),1)])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("p",[this._v("Hi! please call me Takanakahiko.")]),this._v(" "),e("p",[this._v("I'd like to create a creative work that makes someone's heart move.")]),this._v(" "),e("p",[this._v("My dream is to credits my name on the endrol of my loving content.")]),this._v(" "),e("p",[this._v("I guess that sometimes the dreams come true.")])])}],!1,null,null,null);e.default=w.exports}}]);