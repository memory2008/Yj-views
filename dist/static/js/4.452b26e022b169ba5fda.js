webpackJsonp([4],{"SU/S":function(s,t,a){s.exports=a("a7w1")},a7w1:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={data:function(){return{show:!1}},methods:{handlerActionSheet:function(){this.show=!0}}},r=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h3",[s._v("基本用法")]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"demon-block"},[a("yj-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return s.handlerActionSheet(t)}}},[s._v("弹出菜单")]),s._v(" "),a("action-sheet",{model:{value:s.show,callback:function(t){s.show=t},expression:"show"}})],1),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("基础用法\n通过v-model控制显示和隐藏")]),s._v(" "),a("demo-block",[a("div",{attrs:{slot:"desc"},slot:"desc"},[a("div",{staticClass:"demon-block"},[a("yj-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return s.handlerActionSheet(t)}}},[s._v("弹出菜单")]),s._v(" "),a("action-sheet",{model:{value:s.show,callback:function(t){s.show=t},expression:"show"}})],1)]),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demon-block"')]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("yj-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handlerActionSheet"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("弹出菜单"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("yj-button")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("action-sheet")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"show"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("action-sheet")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n   data(){\n     "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("{\n       "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("show")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n     }\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(":{\n    handlerActionSheet(){\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".show = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n    }\n  }\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n")])])])]),s._v(" "),a("h3",[s._v("prop")]),s._v(" "),s._m(0),s._v(" "),a("h3",[s._v("Event")]),s._v(" "),s._m(1)],1)},n=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("type")]),s._v(" "),a("td",[s._v("类型，可选值为 primary info warning danger")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("default")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("事件名称")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("回调参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("onclick")]),s._v(" "),a("td",[s._v("点击按钮时触发")]),s._v(" "),a("td",[s._v("—")])])])])}],v={render:r,staticRenderFns:n},l=v,_=a("VU/8"),c=_(e,l,!1,null,null,null);t.default=c.exports}});
//# sourceMappingURL=4.452b26e022b169ba5fda.js.map