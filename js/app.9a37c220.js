(function(t){function e(e){for(var a,n,l=e[0],o=e[1],c=e[2],d=0,m=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&m.push(s[n][0]),s[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);p&&p(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],a=!0,l=1;l<i.length;l++){var o=i[l];0!==s[o]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=i[0]))}return t}var a={},s={app:0},r=[];function n(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=a,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=o;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0e21":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},r=[],n=i("2877"),l={},o=Object(n["a"])(l,s,r,!1,null,null,null),c=o.exports,p=i("8c4f"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("q-header",{attrs:{elevated:""}},[i("q-toolbar",{staticClass:"bg-white text-black"},[i("q-avatar",[i("i",{staticClass:"iconfont icon-dianying icon-logo"})]),i("q-btn",{attrs:{stretch:"",flat:"",label:"What's Great Movie"}}),i("q-btn",{attrs:{stretch:"",flat:"",label:"电影馆"}}),i("q-btn",{attrs:{stretch:"",flat:"",label:"我的电影"}}),i("q-btn",{attrs:{stretch:"",flat:"",label:"市民广场"}}),i("q-space"),i("q-btn",{attrs:{stretch:"",flat:"",label:"登录"}}),i("q-btn",{attrs:{stretch:"",flat:"",label:"注册"}})],1)],1),i("q-page-container",{staticStyle:{"min-width":"1200px",margin:"auto"}},[i("router-view")],1),i("div",{staticClass:"footer"},[i("q-avatar",[i("i",{staticClass:"iconfont icon-dianying icon-logo-footer"})]),i("div",{staticClass:"text-h5  text-weight-light text-white"},[t._v("What is great movie")]),i("div",{staticClass:"text-body1 text-weight-light text-white"},[t._v("我们只为告诉你   这样的电影与至纯的感动   别无其他")]),i("div",{staticClass:"text-body1 text-weight-light text-white"},[t._v("Copyright ©2020 What'sGreatMovie")])],1)],1)},m=[],u={name:"LayoutDefault",data:function(){return{}}},g=u,v=(i("789f"),i("fe09")),b=Object(n["a"])(g,d,m,!1,null,"e7246d1c",null),h=b.exports;b.options.components=Object.assign({QLayout:v["j"],QHeader:v["f"],QToolbar:v["n"],QAvatar:v["a"],QBtn:v["b"],QSpace:v["m"],QPageContainer:v["l"]},b.options.components||{});var f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",[i("div",{staticClass:"mod-bg mod-slide"},[i("div",{staticClass:"title text-h5"},[t._v("每周推荐")]),i("div",{staticClass:"swiper-container"},[i("div",{staticClass:"swiper-wrapper"},t._l(t.homeData,(function(t,e){return i("div",{key:e,staticClass:"swiper-slide"},[i("img",{attrs:{src:t.imgUrl}})])})),0),i("div",{staticClass:"swiper-pagination"}),i("div",{staticClass:"swiper-button-prev"}),i("div",{staticClass:"swiper-button-next"})])]),i("div",{staticClass:"mod-bg mod-slide"},[i("div",{staticClass:"title text-h5"},[t._v("影单推荐")]),i("div",{staticClass:"row q-gutter-md",staticStyle:{padding:"0 60px"}},t._l(t.collectionsList,(function(e,a){return i("div",{key:a,staticClass:"col"},[i("q-card",{staticClass:"collection-card",attrs:{flat:"",bordered:""}},[i("q-img",{staticClass:"img",staticStyle:{height:"250px"},attrs:{src:e.imgUrl}},[i("div",{staticClass:"absolute-bottom text-subtitle2 text-center"},[t._v("\n              "+t._s(e.title)+"\n            ")])]),i("i",{staticClass:"mod_cover__mask"})],1)],1)})),0)]),i("div",{staticClass:"mod-bg mod-slide"},[i("div",{staticClass:"title text-h5"},[t._v("影奖榜")]),i("div",{staticClass:"list-country"},t._l(t.listCountry,(function(e,a){return i("span",{key:a,staticClass:"text-subtitle1",class:t.currentListCountry===e.value?"text-purple-14":null,on:{click:function(i){return t.changeListCountry(e.value)}}},[t._v(t._s(e.label))])})),0),i("div",{staticClass:"list-card-row"},t._l(t.listData,(function(e,a){return i("div",{key:a,staticClass:"awards-card"},[i("q-card",{staticClass:"text-white",style:{"background-color":e.bgColor},attrs:{flat:"",bordered:""}},[i("q-card-section",[i("div",{staticClass:"text-h5 "},[t._v(t._s(e.title))])]),i("q-card-section",{staticClass:"text-caption "},[t._v("\n            "+t._s(e.desc)+"\n          ")]),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[i("q-item-section",{attrs:{avatar:""}},[i("q-avatar",{attrs:{rounded:"","text-color":"white"}},[i("img",{attrs:{src:"http://img31.mtime.cn/pi/2014/03/07/093949.17156161_220X220.jpg"}})])],1),i("q-item-section",[t._v("《霸王别姬》")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[i("q-item-section",{attrs:{avatar:""}},[i("q-avatar",{attrs:{rounded:"","text-color":"white"}},[i("img",{attrs:{src:"http://img31.mtime.cn/pi/2014/03/06/092807.29533181_220X220.jpg"}})])],1),i("q-item-section",[t._v("《英雄本色》")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[i("q-item-section",{attrs:{avatar:""}},[i("q-avatar",{attrs:{rounded:"","text-color":"white"}},[i("img",{attrs:{src:"http://img31.mtime.cn/mg/2015/01/20/154028.66013953.jpg"}})])],1),i("q-item-section",[t._v("《甜蜜蜜》")])],1),i("q-card-actions",[i("q-btn",{attrs:{flat:"",label:"更多获奖影片 >"}})],1)],1)],1)})),0)]),i("div",{staticClass:"mod-bg mod-slide"},[i("h5",{staticClass:"title text-h5"},[t._v("评分排行")]),i("div",{staticClass:"list-country"},[t._l(t.pointsSite,(function(e,a){return i("span",{key:a,staticClass:"text-subtitle1",class:t.currentPointSites===e.value?"text-purple-14":null,on:{click:function(i){t.currentPointSites=e.value}}},[t._v(t._s(e.label))])})),i("q-btn",{staticClass:"more",attrs:{flat:"",color:"primary",label:"更多 >"}})],2),i("div",{staticClass:"row q-gutter-md ",staticStyle:{padding:"0 60px"}},t._l(t.pointsList.slice(0,5),(function(e,a){return i("div",{key:a,staticClass:"col"},[i("q-card",{staticClass:"collection-card points-card",attrs:{flat:"",bordered:""}},[i("q-img",{staticClass:"img",staticStyle:{height:"224px"},attrs:{src:e.imgUrl}},[i("i",{staticClass:"mod_cover__mask"})]),i("q-card-section",[i("div",{staticClass:"text-h6 q-mt-sm q-mb-xs"},[t._v(t._s(e.title))]),i("div",{staticClass:"text-caption text-grey"},[t._v("\n              导演："+t._s(e.director)+"\n            ")])])],1)],1)})),0),i("div",{staticClass:"row q-gutter-md ",staticStyle:{padding:"0 60px","margin-top":"20px"}},t._l(t.pointsList.slice(5,10),(function(e,a){return i("div",{key:a,staticClass:"col"},[i("q-card",{staticClass:"collection-card points-card",attrs:{flat:"",bordered:""}},[i("q-img",{staticClass:"img",staticStyle:{height:"250px"},attrs:{src:e.imgUrl}},[i("i",{staticClass:"mod_cover__mask"})]),i("q-card-section",[i("div",{staticClass:"text-h6 q-mt-sm q-mb-xs"},[t._v(t._s(e.title))]),i("div",{staticClass:"text-caption text-grey"},[t._v("\n              导演："+t._s(e.director)+"\n            ")])])],1)],1)})),0)])])},C=[],_=i("b619"),x=(i("f4bd"),{components:{},name:"PageHome",data:function(){return{homeData:[{imgUrl:"http://img5.mtime.cn/pi/2019/12/05/151116.35103774_1000X1000.jpg"},{imgUrl:"http://img5.mtime.cn/pi/2019/12/10/164925.83015162_1000X1000.jpg"},{imgUrl:"http://img5.mtime.cn/pi/2019/12/18/101608.68616529_1000X1000.jpg"}],listData:[],chinaListData:[{bgColor:"#CB6F8A",title:"中国电影金鸡奖",desc:"中国电影金鸡奖（Golden Rooster Award）是由中国电影家协会和中国文学艺术界联合会联合主办的电影奖项。创办于1981年，是中国大陆电影界权威、专业的电影奖。"},{bgColor:"#6E97B3",title:"中国电影华表奖",desc:"中国电影华表奖简称华表奖，创办于1994年，由国家新闻出版广播电影电视总局主办，是中国（内地）电影界的政府奖，体现党和国家对电影事业的热情鼓励和大力扶持"},{bgColor:"#6DBBB5",title:"香港电影金像奖",desc:"香港电影金像奖（Hong Kong Film Awards，HKFA）是香港及大中华电影界最重要的奖项之一，旨在鼓励优秀香港电影的创作与发展的奖项，是香港电影业界年度最重要的活动。"},{bgColor:"#4F8C90",title:"台湾电影金马奖",desc:"台湾电影金马奖（Golden Horse Award）是台湾地区主办的电影奖项，创办于1962年，当年主要是为了促进台湾地区电影制作事业和表扬对华语电影文化有杰出贡献的电影人。"}],americaListData:[{bgColor:"#518E93",title:"奥斯卡金像奖",desc:" 奥斯卡金像奖是美国一项表彰电影业成就的年度奖项，有20多个不同的奖项，也是世界历史最悠久的媒体奖项，已成为全世界最具影响力的电影奖项。"},{bgColor:"#6DC2BA",title:"金球奖",desc:"金球奖（Golden Globe Awards），是美国的一个电影与电视奖项，以正式晚宴的方式举行，举办方是好莱坞外国记者协会。"}],koreanListData:[{bgColor:"#3B78E7",title:"韩国青龙电影奖",desc:"为韩国电影的振兴和大众文化的发展于1963年创立了青龙电影节，青龙电影节继承了过去的辉煌传统，今日已经成为名副其实的银幕大盛典 。"},{bgColor:"#F9AB02",title:"韩国电影大钟奖",desc:"韩国电影大钟奖在韩国电影历史上具有最权威的地位，是为促进韩国电影不断发展而设立的韩国电影艺术大奖。，与韩国青龙电影奖和韩国百想艺术大赏并称韩国三大电影奖。"},{bgColor:"#5AB974",title:"百想艺术大赏",desc:"该奖项是韩国代表性、历史最为悠久的综合艺术奖项，被誉为“韩国金球奖”，该奖项颁奖典礼是韩国最具影响力和权威的电视电影颁奖典礼之一。"}],europeListData:[{bgColor:"#E37400",title:"戛纳国际电影节",desc:"戛纳国际电影（亦译作坎城国际电影节），最高奖为“金棕榈奖”。他们致力于发现电影行业新人并且为电影节创造一个交流与创造的平台。"},{bgColor:"#659DF6",title:"柏林国际电影节",desc:"柏林国际电影节，世界三大电影节之一。50年代初由[[阿尔弗雷德·鲍尔]]发起筹划，得到了当时的联邦德国政府和电影界的支持和帮助。最高奖项为“金熊奖”。"},{bgColor:"#B366F5",title:"威尼斯电影节",desc:"威尼斯国际电影节，创办于1932年，是世界上历史最悠久的电影节，即世界上第一个国际电影节，被誉为“国际电影节之父”。最高奖项为“金狮奖”。"}],japanListData:[{bgColor:"#4285F4",title:"日本电影旬报奖",desc:"《电影旬报》是1919年7月创刊的日本电影杂志，也是日本最古老的电影杂志，电影旬报奖就是该杂志主办的一个电影奖项，设立于1924年。"}],listCountry:[{label:"中国",value:"china"},{label:"美国",value:"america"},{label:"欧洲",value:"europe"},{label:"韩国",value:"korean"},{label:"日本",value:"japan"}],pointsSite:[{label:"豆瓣",value:"douban"},{label:"时光网",value:"time"},{label:"烂番茄",value:"tomatoes"},{label:"IMDb",value:"imdb"}],collectionsList:[{imgUrl:"http://img5.mtime.cn/pi/2019/08/08/104847.11059369_235X235.jpg",title:"2019年美国上映影片50佳 "},{imgUrl:"http://img5.mtime.cn/pi/2018/01/02/110320.96180299_235X235.jpg",title:"2019年十佳恐怖片"},{imgUrl:"http://img31.mtime.cn/pi/2014/02/27/213602.15649791_220X220.jpg",title:"热血竞技电影时光网评分TOP100"},{imgUrl:"http://img31.mtime.cn/pi/2013/09/17/184520.25650180_220X220.jpg",title:"动画电影全球票房Top25 "},{imgUrl:"http://img31.mtime.cn/pi/2014/03/06/095257.23224743_220X220.jpg",title:"追忆香港'四大恶人'李兆基"}],pointsList:[{imgUrl:"http://img31.mtime.cn/pi/2014/03/06/094935.20275866_220X220.jpg",title:"肖申克的救赎",point:9.2,director:"弗兰克·德拉邦特"},{imgUrl:"http://img21.mtime.cn/pi/2010/05/13/115058.54701524_220X220.jpg",title:"盗梦空间 ",point:9.1,director:" 克里斯托弗·诺兰"},{imgUrl:"http://img31.mtime.cn/pi/2014/03/07/094848.71679415_220X220.jpg",title:"阿甘正传 ",point:9.1,director:"罗伯特·泽米吉斯"},{imgUrl:"http://img31.mtime.cn/pi/2014/03/06/094436.10925961_220X220.jpg",title:"辛德勒的名单 ",point:9.1,director:"史蒂文·斯皮尔伯格"},{imgUrl:"http://img21.mtime.cn/pi/2010/12/20/003714.41452094_220X220.jpg",title:"海豚湾 ",point:9.1,director:"路易·西霍尤斯"},{imgUrl:"http://img31.mtime.cn/pi/2014/03/01/131631.49260328_220X220.jpg",title:"机器人总动员 WALL·E ",point:9,director:"安德鲁·斯坦顿"},{imgUrl:"http://img31.mtime.cn/pi/2014/03/06/091842.99828746_220X220.jpg",title:"这个杀手不太冷",point:9,director:" 吕克·贝松"},{imgUrl:"http://img31.mtime.cn/pi/2014/03/01/141110.56563867_220X220.jpg",title:"蝙蝠侠：黑暗骑士",point:9,director:"克里斯托弗·诺兰"},{imgUrl:"http://img5.mtime.cn/pi/2017/03/16/175837.28903962_220X220.jpg",title:"霸王别姬",point:9,director:"陈凯歌"},{imgUrl:"http://img31.mtime.cn/pi/2014/03/07/082035.28707800_220X220.jpg",title:"教父",point:9,director:"弗朗西斯·福特·科波拉"}],currentListCountry:"china",currentPointSites:"douban"}},mounted:function(){new _["a"](".swiper-container",{slidesPerView:3,spaceBetween:30,centeredSlides:!0,autoplay:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});this.changeListCountry(this.currentListCountry)},methods:{changeListCountry:function(t){this.currentListCountry=t,this.listData=this["".concat(t,"ListData")]}}}),y=x,w=(i("c3ca"),Object(n["a"])(y,f,C,!1,null,"add17558",null)),q=w.exports;w.options.components=Object.assign({QPage:v["k"],QCard:v["c"],QImg:v["g"],QCardSection:v["e"],QItem:v["h"],QItemSection:v["i"],QAvatar:v["a"],QCardActions:v["d"],QBtn:v["b"]},w.options.components||{}),w.options.directives=Object.assign({Ripple:v["o"]},w.options.directives||{});var j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{attrs:{padding:""}},[i("p",[t._v("This is an about page")])])},k=[],L={name:"PageAbout"},S=L,U=Object(n["a"])(S,j,k,!1,null,null,null),O=U.exports;U.options.components=Object.assign({QPage:v["k"]},U.options.components||{}),a["a"].use(p["a"]);var X=new p["a"]({routes:[{path:"/",component:h,children:[{path:"",name:"home",component:q},{path:"/about",name:"about",component:O}]}]}),P=i("2f62");a["a"].use(P["a"]);var Q=new P["a"].Store({state:{},mutations:{},actions:{}}),D=(i("0e21"),i("e54f"),i("a4b7"),i("b05d"));a["a"].use(D["a"],{config:{},components:{},directives:{},plugins:{}}),a["a"].config.productionTip=!1,new a["a"]({router:X,store:Q,render:function(t){return t(c)}}).$mount("#app")},"613d":function(t,e,i){},"789f":function(t,e,i){"use strict";var a=i("8721"),s=i.n(a);s.a},8721:function(t,e,i){},c3ca:function(t,e,i){"use strict";var a=i("613d"),s=i.n(a);s.a}});
//# sourceMappingURL=app.9a37c220.js.map