(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=jQuery;var r=e.n(t);function o(e,t,r,o,s,n,a,i){var d,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=r,l._compiled=!0),o&&(l.functional=!0),n&&(l._scopeId="data-v-"+n),a?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=d):s&&(d=i?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),d)if(l.functional){l._injectStyles=d;var u=l.render;l.render=function(e,t){return d.call(t),u(e,t)}}else{var _=l.beforeCreate;l.beforeCreate=_?[].concat(_,d):[d]}return{exports:e,options:l}}var s=o({name:"AbuseReasonsDropdown",props:{value:{type:String,required:!0},placeholder:{type:String,required:!1,default:""}},data:()=>({abuseReasons:[]}),computed:{selectedReason:{get(){const e=this.abuseReasons.filter((e=>this.value===e.value));return e.length?e[0].value:""},set(e){this.$emit("input",e||"")}},noneText(){return this.placeholder||this.__("Select a reason","dokan")}},created(){this.fetchAbuseReasons()},methods:{fetchAbuseReasons(){const e=this;dokan.api.get("/abuse-reports/abuse-reasons").done((t=>{e.abuseReasons=t}))}}},(function(){var e=this,t=e._self._c;return t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedReason,expression:"selectedReason"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedReason=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:""}},[e._v(e._s(e.noneText))]),e._v(" "),e._l(e.abuseReasons,(function(r){return t("option",{key:r.id,domProps:{textContent:e._s(r.value)}})}))],2)}),[],!1,null,null,null);const n=o({name:"AbuseReports",components:{AbuseReasonsDropdown:s.exports,ListTable:dokan_get_lib("ListTable"),Modal:dokan_get_lib("Modal"),Multiselect:dokan_get_lib("Multiselect"),AdminNotice:dokan_get_lib("AdminNotice")},data(){return{columns:{reason:{label:this.__("Reason","dokan")},product:{label:this.__("Product","dokan")},vendor:{label:this.__("Vendor","dokan")},reported_by:{label:this.__("Reported by","dokan")},reported_at:{label:this.__("Reported at","dokan")}},loading:!1,reports:[],actions:[],bulkActions:[{key:"delete",label:this.__("Delete","dokan")}],totalItems:0,totalPages:1,perPage:10,showModal:!1,report:{},query:{},filter:{reason:"",vendor_id:0,product_id:0}}},computed:{currentPage(){const e=this.$route.query.page||1;return parseInt(e)},queryFilterReason(){return this.$route.query.reason||""}},created(){this.queryFilterReason&&(this.filter.reason=this.queryFilterReason,this.query.reason=this.queryFilterReason),this.fetchReports()},mounted(){const e=this;r()("#filter-products").selectWoo({ajax:{url:`${dokan.rest.root}wc/v3/products`,dataType:"json",headers:{"X-WP-Nonce":dokan.rest.nonce},data:e=>({search:e.term}),processResults:e=>({results:e.map((e=>({id:e.id,text:e.name})))})}}),r()("#filter-products").on("select2:select",(t=>{e.filter.product_id=t.params.data.id})),r()("#filter-vendors").selectWoo({ajax:{url:`${dokan.rest.root}dokan/v1/stores`,dataType:"json",headers:{"X-WP-Nonce":dokan.rest.nonce},data:e=>({search:e.term}),processResults:e=>({results:e.map((e=>({id:e.id,text:e.store_name})))})}}),r()("#filter-vendors").on("select2:select",(t=>{e.filter.vendor_id=t.params.data.id}))},watch:{"$route.query.page"(){this.fetchReports()},"$route.query.reason"(){this.fetchReports()},"$route.query.product_id"(){this.fetchReports()},"$route.query.vendor_id"(){this.fetchReports()},"filter.reason"(e){this.query={},e&&(this.query={reason:e}),this.goTo(this.query)},"filter.product_id"(e){e?this.query.product_id=e:this.query.product_id&&(delete this.query.product_id,this.clearSelection("#filter-products")),this.goTo(this.query)},"filter.vendor_id"(e){e?this.query.vendor_id=e:this.query.vendor_id&&(delete this.query.vendor_id,this.clearSelection("#filter-vendors")),this.goTo(this.query)}},methods:{fetchReports(){const e=this;e.loading=!0,e.currentPage>1&&(e.query.page=e.currentPage),dokan.api.get("/abuse-reports",e.query).done(((t,r,o)=>{e.reports=t,e.loading=!1,e.updatePagination(o)}))},updatePagination(e){this.totalPages=parseInt(e.getResponseHeader("X-Dokan-AbuseReports-TotalPages")),this.totalItems=parseInt(e.getResponseHeader("X-Dokan-AbuseReports-Total"))},moment:e=>moment(e),goToPage(e){this.query.page=e,this.goTo(this.query)},goTo(e){this.$router.push({name:"AbuseReports",query:e})},showReport(e){this.report=e,this.showModal=!0},hideReport(){this.report={},this.showModal=!1},clearSelection(e){r()(e).val(null).trigger("change")},onBulkAction(e,t){const r=this;confirm(this.__("Are you sure you want to delete this report","dokan"))&&dokan.api.delete("/abuse-reports/batch",{items:t}).done((e=>{r.fetchReports()}))}}},(function(){var e=this,t=e._self._c;return t("div",[t("h1",{staticClass:"wp-heading-inline"},[e._v(e._s(e.__("Abuse Reports","dokan")))]),e._v(" "),t("AdminNotice"),e._v(" "),t("hr",{staticClass:"wp-header-end"}),e._v(" "),t("list-table",{attrs:{columns:e.columns,loading:e.loading,rows:e.reports,actions:e.actions,"bulk-actions":e.bulkActions,"total-items":e.totalItems,"total-pages":e.totalPages,"per-page":e.perPage,"current-page":e.currentPage,text:e.$root.listTableTexts()},on:{pagination:e.goToPage,"bulk:click":e.onBulkAction},scopedSlots:e._u([{key:"reason",fn:function({row:r}){return[t("strong",[t("a",{attrs:{href:"#view-report"},on:{click:function(t){return t.preventDefault(),e.showReport(r)}}},[e._v(e._s(r.reason))])])]}},{key:"product",fn:function({row:r}){return[t("a",{attrs:{href:r.product.admin_url}},[e._v(e._s(r.product.title))])]}},{key:"vendor",fn:function({row:r}){return[t("router-link",{attrs:{to:"/vendors/"+r.vendor.id}},[e._v("\n                "+e._s(r.vendor.name?r.vendor.name:e.__("(no name)","dokan"))+"\n            ")])]}},{key:"reported_by",fn:function({row:r}){return[r.reported_by.admin_url?t("a",{attrs:{href:r.reported_by.admin_url,target:"_blank"},domProps:{textContent:e._s(r.reported_by.name)}}):[e._v("\n                "+e._s(r.reported_by.name)+" <"+e._s(r.reported_by.email)+">\n            ")]]}},{key:"reported_at",fn:function({row:t}){return[e._v("\n            "+e._s(e.moment(t.reported_at).format("MMM D, YYYY h:mm:ss a"))+"\n        ")]}}])},[e._v(" "),e._v(" "),e._v(" "),e._v(" "),e._v(" "),t("template",{slot:"filters"},[t("abuse-reasons-dropdown",{attrs:{placeholder:e.__("Filter by abuse reason","dokan")},model:{value:e.filter.reason,callback:function(t){e.$set(e.filter,"reason",t)},expression:"filter.reason"}}),e._v(" "),e.filter.reason?t("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){e.filter.reason=""}}},[e._v("×")]):e._e(),e._v(" "),t("select",{staticStyle:{width:"190px"},attrs:{id:"filter-products","data-placeholder":e.__("Filter by product","dokan")}}),e._v(" "),e.filter.product_id?t("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){e.filter.product_id=0}}},[e._v("×")]):e._e(),e._v(" "),t("select",{staticStyle:{width:"190px"},attrs:{id:"filter-vendors","data-placeholder":e.__("Filter by vendor","dokan")}}),e._v(" "),e.filter.vendor_id?t("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){e.filter.vendor_id=0}}},[e._v("×")]):e._e()],1)],2),e._v(" "),e.showModal?t("modal",{attrs:{title:e.__("Product Abuse Report","dokan"),footer:!1},on:{close:e.hideReport}},[t("template",{slot:"body"},[t("p",{staticStyle:{"margin-top":"0"}},[t("strong",[e._v(e._s(e.__("Reported Product","dokan"))+":")]),e._v(" "),t("a",{attrs:{href:e.report.product.admin_url}},[e._v(e._s(e.report.product.title))])]),e._v(" "),t("p",[t("strong",[e._v(e._s(e.__("Reason","dokan"))+":")]),e._v(" "+e._s(e.report.reason))]),e._v(" "),t("p",[t("strong",[e._v(e._s(e.__("Description","dokan"))+":")]),e._v(" "+e._s(e.report.description||"―"))]),e._v(" "),t("p",[t("strong",[e._v(e._s(e.__("Reported by","dokan"))+":")]),e._v(" "),e.report.reported_by.admin_url?t("a",{attrs:{href:e.report.reported_by.admin_url,target:"_blank"},domProps:{textContent:e._s(e.report.reported_by.name)}}):[e._v("\n                    "+e._s(e.report.reported_by.name)+" <"+e._s(e.report.reported_by.email)+">\n                ")]],2),e._v(" "),t("p",[t("strong",[e._v(e._s(e.__("Reported At","dokan"))+":")]),e._v(" "+e._s(e.moment(e.report.reported_at).format("MMM D, YYYY h:mm:ss a")))]),e._v(" "),t("p",[t("strong",[e._v(e._s(e.__("Product Vendor","dokan"))+":")]),e._v(" "),e.report.vendor.admin_url?t("a",{attrs:{href:e.report.vendor.admin_url},domProps:{textContent:e._s(e.report.vendor.name)}}):[e._v("\n                    "+e._s(e.report.reported_by.name)+" <"+e._s(e.report.reported_by.email)+">\n                ")]],2)])],2):e._e()],1)}),[],!1,null,null,null).exports;dokan_add_route(n)})();