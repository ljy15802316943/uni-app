(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1342:function(e,n,t){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={onLoad:function(n){console.log(e(n.id," at pages\\index\\index.vue:24")),console.log(e(n.name," at pages\\index\\index.vue:25"))},methods:{handleLocalStorage:function(){t.getLocation({type:"wgs84",success:function(n){console.log(e("当前位置的经度："+n.longitude," at pages\\index\\index.vue:32")),console.log(e("当前位置的纬度："+n.latitude," at pages\\index\\index.vue:33"))}}),console.log(e("点击成功!"," at pages\\index\\index.vue:36"));var n=t.createInnerAudioContext();n.autoplay=!0,n.src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3",n.onPlay(function(){console.log(e("开始播放"," at pages\\index\\index.vue:41"))}),n.onError(function(n){console.log(e(n.errMsg," at pages\\index\\index.vue:44")),console.log(e(n.errCode," at pages\\index\\index.vue:45"))})}}};n.default=o}).call(this,t("0de9")["default"],t("6e42")["default"])},"220f":function(e,n,t){"use strict";t.r(n);var o=t("1342"),u=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);n["default"]=u.a},3245:function(e,n,t){"use strict";var o,u=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"b",function(){return u}),t.d(n,"c",function(){return a}),t.d(n,"a",function(){return o})},"4a85":function(e,n,t){"use strict";(function(e){t("ce93"),t("921b");o(t("66fd"));var n=o(t("b439"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},5679:function(e,n,t){"use strict";var o=t("5e71"),u=t.n(o);u.a},"5e71":function(e,n,t){},b439:function(e,n,t){"use strict";t.r(n);var o=t("3245"),u=t("220f");for(var a in u)"default"!==a&&function(e){t.d(n,e,function(){return u[e]})}(a);t("5679");var i,c=t("f0c5"),d=Object(c["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);n["default"]=d.exports}},[["4a85","common/runtime","common/vendor"]]]);