(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{366:function(e,t,r){"use strict";r.r(t);r(10),r(7),r(5),r(4),r(9),r(185),r(65);var n=r(23),o=r(2),c=r(124),h={name:"ChartComponent",components:{GChart:r(321).GChart},props:{chartData:{type:Array,required:!0}},computed:{chartOptions:function(){return this.chartsLib?this.chartsLib.charts.Bar.convertOptions({chart:{title:"Search Metrics",subtitle:"gtihub searches"},bars:"horizontal",hAxis:{format:"decimal"},height:400,colors:["#1b9e77","#d95f02","#7570b3"]}):null}},methods:{onChartReady:function(e,t){this.chartsLib=t}}},l=r(67),d=Object(l.a)(h,(function(){var e=this.$createElement;return(this._self._c||e)("GChart",{attrs:{settings:{packages:["bar"]},data:this.chartData,options:this.chartOptions,createChart:function(e,t){return new t.charts.Bar(e)}},on:{ready:this.onChartReady}})}),[],!1,null,null,null).exports;function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var m={data:function(){return{loading:!1,search:"",page:1,per_page:30,data:[["Search","Records"]],headers:[{text:"Name",value:"name"},{text:"Description",value:"short_description"}]}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)("github",["getRepos","getPageTotal"])),components:{ChartComponent:d},methods:{updatePerPage:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.per_page=-1===e?t.getPageTotal:e,r.next=3,t.submit();case 3:case"end":return r.stop()}}),r)})))()},updatePage:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.page=e,r.next=3,t.submit();case 3:case"end":return r.stop()}}),r)})))()},submit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("github/fetchRepos",{q:e.search,page:e.page,per_page:e.per_page});case 2:e.getRepos&&e.data.push([e.search,e.getPageTotal]);case 3:case"end":return t.stop()}}),t)})))()}}},v=r(105),O=r.n(v),y=r(311),w=r(313),j=r(362),P=r(365),x=r(363),C=r(364),R=r(357),_=Object(l.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("v-row",[r("v-col",{attrs:{cols:8}},[r("v-card",{attrs:{loading:e.loading}},[r("v-card-title",[e._v("\n        All Repository\n        "),r("v-spacer"),e._v(" "),r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.getRepos,"items-per-page":30,"server-items-length":e.getPageTotal},on:{"update:page":e.updatePage,"update:items-per-page":e.updatePerPage}})],1)],1),e._v(" "),r("v-col",{attrs:{cols:4}},[e.data.length>1?r("chart-component",{attrs:{"chart-data":e.data}}):e._e()],1)],1)],1)}),[],!1,null,"86939c64",null);t.default=_.exports;O()(_,{VCard:y.a,VCardTitle:w.a,VCol:j.a,VDataTable:P.a,VRow:x.a,VSpacer:C.a,VTextField:R.a})}}]);