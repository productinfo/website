webpackJsonp([2],{"7Otq":function(e,t,r){e.exports=r.p+"static/img/logo.7523747.png"},EtSU:function(e,t){},Hfem:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7+uW"),o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[n("router-link",{attrs:{to:{path:"/"}}},[n("img",{attrs:{src:r("7Otq")}})]),e._v(" "),n("router-link",{attrs:{to:{path:"/category/backend"}}},[n("v-btn",{attrs:{outline:"",color:"deep-purple"}},[e._v("🤖 Backend")])],1),e._v(" "),n("router-link",{attrs:{to:{path:"/category/frontend"}}},[n("v-btn",{attrs:{outline:"",color:"deep-purple"}},[e._v("🖥 Frontend")])],1),e._v(" "),n("router-link",{attrs:{to:{path:"/category/marketing"}}},[n("v-btn",{attrs:{outline:"",color:"deep-purple"}},[e._v("🎰 Marketing")])],1),e._v(" "),n("router-link",{attrs:{to:{path:"/category/mobile"}}},[n("v-btn",{attrs:{outline:"",color:"deep-purple"}},[e._v("📱 Mobile")])],1),e._v(" "),n("router-link",{attrs:{to:{path:"/category/ui"}}},[n("v-btn",{attrs:{outline:"",color:"deep-purple"}},[e._v("🎨 UI")])],1),e._v(" "),n("router-link",{attrs:{to:{path:"/category/ux"}}},[n("v-btn",{attrs:{outline:"",color:"deep-purple"}},[e._v("🥤 UX")])],1),e._v(" "),n("router-view",[n("v-container",{attrs:{fluid:""}})],1)],1),e._v(" "),n("v-footer",{attrs:{app:""}},[n("v-spacer"),e._v(" "),n("div",[e._v("© Awesome Conferences "+e._s((new Date).getFullYear())+" - "),n("a",{attrs:{href:"https://www.iubenda.com/privacy-policy/7904617"}},[e._v("Privacy")]),e._v(" - "),n("a",{attrs:{href:"https://www.iubenda.com/privacy-policy/7904617/cookie-policy"}},[e._v("Cookie")]),e._v(" Policy")])],1)],1)},staticRenderFns:[]};var a=r("VU/8")({name:"App"},o,!1,function(e){r("Hfem")},null,null).exports,c=r("3EgV"),s=r.n(c),i=r("/ocq"),l=r("J2Tt"),u=r.n(l),v=r("mtWM"),d=r.n(v),p={name:"Home",data:function(){return{welcomeMsg:"Find the 👍 conferences around the 🌍!",introMsg:"Awesome Conference is a fully open sourced and collaborative project about conference listings.",instructionMsg1:"Navigate conferences by category.",instructionMsg2:"Or have a quick look at the last conference added so far.",instructionMsg3:"And... if you know any interesting conference not listed yet, use the button that you can find in all the pages on the bottom.",latestMsg:"Discover the last conferences added:",conferences:[],showSpinner:!0,firstRun:!1}},created:function(){this.fetchData(),this.firstRun="1"!==this.$cookie.get("firstrun"),"1"!==this.$cookie.get("firstrun")&&this.$cookie.set("firstrun",1,0)},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;d.a.get("https://raw.githubusercontent.com/aweconf/awesome-mobile-conferences/master/contents.json").then(function(t){e.conferences=t.data.conferences.reverse().slice(0,10),e.showSpinner=!1}).catch(function(e){console.log(e)})}}},h={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v(e._s(e.welcomeMsg))]),e._v(" "),r("br"),e._v(" "),r("p",[e._v(e._s(e.introMsg))]),e._v(" "),e.firstRun?[r("em",[e._v(e._s(e.instructionMsg1)),r("br"),r("br")]),e._v(" "),r("router-link",{attrs:{to:{path:"/category/backend"}}},[r("v-btn",{attrs:{outline:"",color:"deep-purple"}},[e._v("🤖 Backend")])],1),e._v(" "),r("router-link",{attrs:{to:{path:"/category/frontend"}}},[r("v-btn",{attrs:{outline:"",color:"deep-purple"}},[e._v("🖥 Frontend")])],1),e._v(" "),r("router-link",{attrs:{to:{path:"/category/marketing"}}},[r("v-btn",{attrs:{outline:"",color:"deep-purple"}},[e._v("🎰 Marketing")])],1),e._v(" "),r("router-link",{attrs:{to:{path:"/category/mobile"}}},[r("v-btn",{attrs:{outline:"",color:"deep-purple"}},[e._v("📱 Mobile")])],1),e._v(" "),r("router-link",{attrs:{to:{path:"/category/ui"}}},[r("v-btn",{attrs:{outline:"",color:"deep-purple"}},[e._v("🎨 UI")])],1),e._v(" "),r("router-link",{attrs:{to:{path:"/category/ux"}}},[r("v-btn",{attrs:{outline:"",color:"deep-purple"}},[e._v("🥤 UX")])],1),e._v(" "),r("br"),e._v(" "),r("br")]:e._e(),e._v(" "),e.firstRun?r("em",[e._v(e._s(e.instructionMsg2)),r("br")]):e._e(),e._v(" "),r("h3",[e._v(e._s(e.latestMsg))]),e._v(" "),e.showSpinner?r("v-progress-circular",{attrs:{indeterminate:"",color:"deep-purple"}}):e._e(),e._v(" "),r("ul",e._l(e.conferences,function(t){return r("li",{key:t.id},[e._l(t.category,function(t){return r("span",{key:t},[r("router-link",{attrs:{to:"/category/"+t}},[r("v-chip",{attrs:{color:"deep-purple","text-color":"white"}},[e._v(e._s(t))])],1)],1)}),e._v(" "),r("router-link",{attrs:{to:"/conference/"+t.id}},[e._v(e._s(t.title))])],2)})),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),e.firstRun?r("em",[e._v(e._s(e.instructionMsg3)),r("br")]):e._e(),e._v(" "),r("router-link",{attrs:{to:"/submit"}},[r("v-btn",{attrs:{round:"",color:"deep-purple",dark:""}},[e._v("📩 Submit a new Conference")])],1),e._v(" "),r("br"),r("br")],2)},staticRenderFns:[]};var f=r("VU/8")(p,h,!1,function(e){r("EtSU")},"data-v-56480c27",null).exports,m={name:"Category",data:function(){return{conferences:[],showSpinner:!0,tmp:"",search:"",headers:[{text:"Name",align:"left",sortable:!1,value:"title"},{text:"City",sortable:!1,align:"left",value:"city"},{text:"Country",sortable:!1,align:"left",value:"country"},{text:"Start",value:"startdate",align:"left"},{text:"End",value:"enddate",align:"left"}]}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;d.a.get("https://raw.githubusercontent.com/aweconf/awesome-mobile-conferences/master/contents.json").then(function(t){e.conferences=t.data.conferences,e.showSpinner=!1}).catch(function(e){console.log(e)})},sortAndFilter:function(e,t){return e.filter(function(e){return new Date(e.startdate)>new Date}).filter(function(e){return-1!==e.category.indexOf(t)}).sort(function(e,t){return new Date(e.startdate)>new Date(t.startdate)})}}},_={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"category"},[e.showSpinner?r("v-progress-circular",{attrs:{indeterminate:"",color:"deep-purple"}}):e._e(),e._v(" "),r("v-container",{attrs:{"grid-list-xl":"","text-xs-left":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs10:"","offset-xs1":""}},[r("v-card-title",[r("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":"",color:"deep-purple"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,search:e.search,items:e.sortAndFilter(e.conferences,e.$route.params.category),"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[r("td",[r("router-link",{attrs:{to:"/conference/"+t.item.id}},[e._v(e._s(t.item.title))])],1),e._v(" "),r("td",[e._v(e._s(t.item.city))]),e._v(" "),r("td",[e._v(e._s(t.item.emojiflag)+" "+e._s(t.item.country))]),e._v(" "),r("td",[e._v(e._s(t.item.startdate))]),e._v(" "),r("td",[e._v(e._s(t.item.enddate))])]}}])})],1)],1)],1),e._v(" "),r("br"),e._v(" "),r("router-link",{attrs:{to:"/submit/"+e.$route.params.category}},[r("v-btn",{attrs:{round:"",color:"deep-purple",dark:""}},[e._v("📩 Submit a new Conference in "+e._s(e.$route.params.category)+" category")])],1)],1)},staticRenderFns:[]};var b=r("VU/8")(m,_,!1,function(e){r("X4YO")},"data-v-63df64b8",null).exports,g={name:"Conference",data:function(){return{conferences:[],showSpinner:!0}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;d.a.get("https://raw.githubusercontent.com/aweconf/awesome-mobile-conferences/master/contents.json").then(function(t){e.conferences=t.data.conferences,e.showSpinner=!1}).catch(function(e){console.log(e)})},sortAndFilter:function(e,t){return e.filter(function(e){return e.id===t})},sortForCountry:function(e,t){return e.filter(function(e){return new Date(e.startdate)>new Date}).filter(function(e){return e.country===t}).sort(function(e,t){return new Date(e.startdate)>new Date(t.startdate)})},gmapsUrl:function(e){return"https://www.google.com/maps/search/?api=1&query="+e}}},k={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"conference"},[r("v-container",{attrs:{"grid-list-xl":"","text-xs-left":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs10:"","offset-xs1":""}},[e.showSpinner?r("v-progress-circular",{attrs:{indeterminate:"",color:"deep-purple"}}):e._e(),e._v(" "),e._l(e.sortAndFilter(e.conferences,e.$route.params.id),function(t){return r("v-card",{key:t.id},[r("v-card-text",[r("h1",[e._v(e._s(t.title)+" "+e._s(t.emojiflag))])]),e._v(" "),r("v-card-text",[e._v("\n                                is a conference about "),e._l(t.category,function(t){return r("b",{key:t},[e._v(e._s(t)+", ")])})],2),e._v(" "),r("v-card-text",[e._v("\n                                It will be between 🗓 "),r("em",[e._v(e._s(t.startdate))]),e._v(" and "),r("em",[e._v(e._s(t.enddate))]),e._v(" in "+e._s(t.emojiflag)+" "),r("a",{attrs:{href:e.gmapsUrl(t.where),target:"_blank"}},[e._v(e._s(t.city)+" - "+e._s(t.country))])]),e._v(" "),r("v-card-text",[e._v("For further details: 🔗 "),r("a",{attrs:{href:t.homepage,target:"_blank"}},[e._v(e._s(t.homepage))])]),e._v(" "),t.callforpaper?[r("v-card-text",[e._v("At this very moment 🎤 call for paper is open.")])]:[r("v-card-text",[e._v("Sadly call for paper 🎤 is closed.")])]],2)}),e._v(" "),r("br"),e._v(" "),e._l(e.sortAndFilter(e.conferences,e.$route.params.id),function(t){return r("div",{key:t.id},[r("p",[e._v("Discover other conferences in "+e._s(t.emojiflag)+" "+e._s(t.country)+":")]),e._v(" "),r("ul",e._l(e.sortForCountry(e.conferences,t.country),function(t){return r("li",{key:t.id},[e._l(t.category,function(t){return r("span",{key:t},[r("router-link",{attrs:{to:"/category/"+t}},[r("v-chip",{attrs:{color:"deep-purple","text-color":"white"}},[e._v(e._s(t))])],1)],1)}),e._v(" "),r("router-link",{attrs:{to:"/conference/"+t.id}},[e._v(e._s(t.title))])],2)}))])})],2)],1)],1)],1)},staticRenderFns:[]};var w=r("VU/8")(g,k,!1,function(e){r("qLb1")},"data-v-1446f197",null).exports,x=r("mvHQ"),y=r.n(x),$=r("ESwS"),q=r("+cKO"),S={mixins:[$.validationMixin],validations:{name:{required:q.required,maxLength:Object(q.maxLength)(80)},url:{required:q.required,maxLength:Object(q.maxLength)(100)},twitter:{maxLength:Object(q.maxLength)(50)},where:{required:q.required,maxLength:Object(q.maxLength)(150)}},data:function(){return{startdate:null,enddate:null,menustart:!1,menuend:!1,modal:!1,ux:!1,frontend:!1,backend:!1,marketing:!1,mobile:!1,ui:!1,where:"",twitter:"",url:"",name:"",submitsuccess:!1,submitfail:!1}},mounted:function(){this.backend="backend"===this.$route.params.category,this.frontend="frontend"===this.$route.params.category,this.marketing="marketing"===this.$route.params.category,this.mobile="mobile"===this.$route.params.category,this.ui="ui"===this.$route.params.category,this.ux="ux"===this.$route.params.category},methods:{submit:function(){var e=[];this.backend&&e.push("backend"),this.frontend&&e.push("frontend"),this.marketing&&e.push("marketing"),this.mobile&&e.push("mobile"),this.ui&&e.push("ui"),this.ux&&e.push("ux");var t={name:this.name,url:this.url,twitter:this.twitter,where:this.where,startdate:this.startdate,enddate:this.enddate,category:e};d()({method:"post",url:"https://formspree.io/awc@boostco.de",responseType:"json",data:{title:"A new conference "+this.name,message:y()(t)}}).then(function(e){console.log(e),this.submitsuccess=!0}).catch(function(e){console.log(e)})}},computed:{whereErrors:function(){var e=[];return this.$v.where.$dirty?(!this.$v.where.maxLength&&e.push("Where must be at most 10 characters long"),!this.$v.where.required&&e.push("Where is required."),e):e},nameErrors:function(){var e=[];return this.$v.name.$dirty?(!this.$v.name.maxLength&&e.push("Name must be at most 10 characters long"),!this.$v.name.required&&e.push("Name is required."),e):e},urlErrors:function(){var e=[];return this.$v.url.$dirty?(!this.$v.url.maxLength&&e.push("Url must be at most 10 characters long"),!this.$v.url.required&&e.push("Url is required."),e):e},twitterErrors:function(){var e=[];return this.$v.twitter.$dirty?(!this.$v.twitter.maxLength&&e.push("Twitter must be at most 10 characters long"),!this.$v.twitter.required&&e.push("Twitter is required."),e):e}}},C={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"submit"},[r("v-container",{attrs:{"grid-list-xl":"","text-xs-left":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs10:"","offset-xs1":""}},[r("v-card",[r("v-card-text",[r("form",[r("p",[e._v("Complete the form below to ask a new conference to be published:")]),e._v(" "),r("v-text-field",{attrs:{label:"Name","error-messages":e.nameErrors,counter:80,required:"",color:"deep-purple"},on:{input:function(t){e.$v.name.$touch()},blur:function(t){e.$v.name.$touch()}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),r("v-text-field",{attrs:{label:"Url","error-messages":e.urlErrors,counter:100,required:"",color:"deep-purple"},on:{input:function(t){e.$v.url.$touch()},blur:function(t){e.$v.url.$touch()}},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}}),e._v(" "),r("v-menu",{attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"max-width":"290px","min-width":"290px"},model:{value:e.menustart,callback:function(t){e.menustart=t},expression:"menustart"}},[r("v-text-field",{attrs:{slot:"activator",label:"Start date","prepend-icon":"event",required:"",color:"deep-purple",readonly:""},slot:"activator",model:{value:e.startdate,callback:function(t){e.startdate=t},expression:"startdate"}}),e._v(" "),r("v-date-picker",{attrs:{"no-title":"",scrollable:"",actions:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.save,o=t.cancel;return[r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:o}},[e._v("Cancel")]),e._v(" "),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:n}},[e._v("OK")])],1)]}}]),model:{value:e.startdate,callback:function(t){e.startdate=t},expression:"startdate"}})],1),e._v(" "),r("v-menu",{attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"max-width":"290px","min-width":"290px"},model:{value:e.menuend,callback:function(t){e.menuend=t},expression:"menuend"}},[r("v-text-field",{attrs:{slot:"activator",label:"End date","prepend-icon":"event",required:"",color:"deep-purple",readonly:""},slot:"activator",model:{value:e.enddate,callback:function(t){e.enddate=t},expression:"enddate"}}),e._v(" "),r("v-date-picker",{attrs:{"no-title":"",scrollable:"",actions:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.save,o=t.cancel;return[r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:o}},[e._v("Cancel")]),e._v(" "),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:n}},[e._v("OK")])],1)]}}]),model:{value:e.enddate,callback:function(t){e.enddate=t},expression:"enddate"}})],1),e._v(" "),r("v-text-field",{attrs:{label:"Twitter handler","error-messages":e.twitterErrors,counter:50,color:"deep-purple"},on:{input:function(t){e.$v.twitter.$touch()},blur:function(t){e.$v.twitter.$touch()}},model:{value:e.twitter,callback:function(t){e.twitter=t},expression:"twitter"}}),e._v(" "),r("v-text-field",{attrs:{label:"Where","error-messages":e.whereErrors,counter:150,required:"",color:"deep-purple"},on:{input:function(t){e.$v.where.$touch()},blur:function(t){e.$v.where.$touch()}},model:{value:e.where,callback:function(t){e.where=t},expression:"where"}}),e._v(" "),r("p",[e._v("Categories")]),e._v(" "),r("v-checkbox",{attrs:{label:"Backend",color:"deep-purple"},on:{change:function(t){e.$v.backend.$touch()},blur:function(t){e.$v.backend.$touch()}},model:{value:e.backend,callback:function(t){e.backend=t},expression:"backend"}}),e._v(" "),r("v-checkbox",{attrs:{label:"Frontend",color:"deep-purple"},on:{change:function(t){e.$v.frontend.$touch()},blur:function(t){e.$v.frontend.$touch()}},model:{value:e.frontend,callback:function(t){e.frontend=t},expression:"frontend"}}),e._v(" "),r("v-checkbox",{attrs:{label:"Marketing",color:"deep-purple"},on:{change:function(t){e.$v.marketing.$touch()},blur:function(t){e.$v.marketing.$touch()}},model:{value:e.marketing,callback:function(t){e.marketing=t},expression:"marketing"}}),e._v(" "),r("v-checkbox",{attrs:{label:"Mobile",color:"deep-purple"},on:{change:function(t){e.$v.mobile.$touch()},blur:function(t){e.$v.mobile.$touch()}},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),e._v(" "),r("v-checkbox",{attrs:{label:"UI",color:"deep-purple"},on:{change:function(t){e.$v.ui.$touch()},blur:function(t){e.$v.ui.$touch()}},model:{value:e.ui,callback:function(t){e.ui=t},expression:"ui"}}),e._v(" "),r("v-checkbox",{attrs:{label:"UX",color:"deep-purple"},on:{change:function(t){e.$v.ux.$touch()},blur:function(t){e.$v.ux.$touch()}},model:{value:e.ux,callback:function(t){e.ux=t},expression:"ux"}})],1)])],1),e._v(" "),r("br"),e._v(" "),r("v-btn",{attrs:{color:"deep-purple",dark:""},on:{click:e.submit}},[e._v("submit")]),e._v(" "),e.submitsuccess?r("v-alert",{attrs:{outline:"",color:"success",icon:"check_circle",value:!0}},[e._v("\n                Conference submitted.\n            ")]):e._e(),e._v(" "),e.submitfail?r("v-alert",{attrs:{outline:"",color:"error",icon:"warning",value:!0}},[e._v("\n                There was an error, try again or contact using "),r("a",{attrs:{href:"https://github.com/aweconf/awesome-conferences-database"}},[e._v("Github")]),e._v(".\n            ")]):e._e()],1)],1)],1)],1)},staticRenderFns:[]},M=r("VU/8")(S,C,!1,null,null,null).exports;n.a.use(i.a),n.a.use(s.a),n.a.use(u.a);var D=new i.a({routes:[{path:"/",name:"Home",component:f},{path:"/category/:category",name:"Category",component:b},{path:"/conference/:id",name:"Conference",component:w},{path:"/submit/:category",name:"Submit",component:M},{path:"/submit",name:"Submit",component:M}]});r.e(0).then(r.bind(null,"7zck")),n.a.config.productionTip=!1,new n.a({el:"#app",router:D,components:{App:a},template:"<App/>"})},X4YO:function(e,t){},qLb1:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.a2b61d22e34a001fac58.js.map