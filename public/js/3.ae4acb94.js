(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{529:function(t,n,e){"use strict";e.r(n);var r=e(562),a=e(549);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e(584);var o=e(11),u=Object(o.a)(a.default,r.a,r.b,!1,null,null,null);u.options.__file="userInfoPage.vue",n.default=u.exports},547:function(t,n,e){},548:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e(137),a=u(e(524)),i=e(525),o=u(e(198));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,n,e,r,a,i,o){try{var u=t[i](o),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,a)}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){f(t,n,e[n])})}return t}function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var l={data:function(){return{title:"填写用户信息",nickname:""}},components:{HeadTop:a.default},created:function(){this.initData()},computed:s({},(0,r.mapState)(["userInfo"])),methods:s({},(0,r.mapMutations)(["SET_USER_INFO"]),{initData:function(){this.nickname=this.userInfo.nickname},confirmEdit:function(){var t=function(t){return function(){var n=this,e=arguments;return new Promise(function(r,a){var i=t.apply(n,e);function o(t){c(i,r,a,o,u,"next",t)}function u(t){c(i,r,a,o,u,"throw",t)}o(void 0)})}}(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._.isEmpty(this.nickname)){t.next=3;break}return o.default.toast({title:"",msg:"请填写昵称"}),t.abrupt("return");case 3:return t.next=5,(0,i.addNickName)({nickname:this.nickname});case 5:n=t.sent,this._.nicknameResult||(this.SET_USER_INFO(s({},n)),this.$router.push({path:"/userAvatarUploadPage"}));case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()})};n.default=l},549:function(t,n,e){"use strict";e.r(n);var r=e(548),a=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);n.default=a.a},562:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"container"},[e("head-top",{attrs:{goBack:!0,"head-title":t.title}}),t._v(" "),e("section",{staticClass:"addressContent"},[e("div",{staticClass:"addressContentView"},[e("section",{staticClass:"addressInfoView"},[e("section",{staticClass:"labelInput"},[e("p",[t._v("昵称")]),t._v(" "),e("el-input",{attrs:{placeholder:"请输入您的昵称",clearable:""},model:{value:t.nickname,callback:function(n){t.nickname=n},expression:"nickname"}})],1)]),t._v(" "),e("section",{staticClass:"confirmButton"},[e("div",{on:{click:function(n){return n.stopPropagation(),t.confirmEdit(n)}}},[e("span",[t._v("确定")])])])])])],1)},a=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return a})},584:function(t,n,e){"use strict";var r=e(547);e.n(r).a}}]);