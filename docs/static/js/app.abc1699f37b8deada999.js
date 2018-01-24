webpackJsonp([2],{DlaP:function(e,t){},I97r:function(e,t){},JwT4:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("7+uW"),n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-content",[r("ul",[r("li",{staticClass:"inline"},[r("router-link",{attrs:{to:{path:"/"}}},[r("img",{attrs:{src:a("Xecm")}})])],1),e._v(" "),e._l(e.categories,function(t){return r("li",{key:t.tag,staticClass:"inline"},[r("router-link",{attrs:{to:"/category/"+t.tag}},[r("v-btn",{attrs:{outline:"",color:"deep-purple"}},[e._v(e._s(t.emoji)+" "+e._s(t.tag))])],1)],1)})],2),e._v(" "),r("router-view",[r("v-container",{attrs:{fluid:""}})],1)],1),e._v(" "),r("v-footer",{attrs:{app:""}},[r("v-spacer"),e._v(" "),r("div",[e._v("© Awesome Conferences "+e._s((new Date).getFullYear())+" - "),r("a",{attrs:{href:"https://twitter.com/aweconf",target:"_blank"}},[e._v("Twitter")]),e._v(" - "),r("router-link",{attrs:{to:{path:"/about"},"active-class":"noneclass"}},[e._v("About")]),e._v(" - "),r("a",{attrs:{href:"https://www.iubenda.com/privacy-policy/7904617",target:"_blank"}},[e._v("Privacy")]),e._v(" - "),r("a",{attrs:{href:"https://www.iubenda.com/privacy-policy/7904617/cookie-policy",target:"_blank"}},[e._v("Cookie")]),e._v(" Policy")],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App",data:function(){return{categories:[{emoji:"🤖",tag:"backend"},{emoji:"🔨",tag:"devops"},{emoji:"🖥",tag:"frontend"},{emoji:"🎰",tag:"marketing"},{emoji:"📱",tag:"mobile"},{emoji:"🎨",tag:"ui"},{emoji:"🥤",tag:"ux"}]}}},n,!1,function(e){a("DlaP")},null,null).exports,i=a("3EgV"),s=a.n(i),c=a("/ocq"),l=a("J2Tt"),u=a.n(l),d=a("mtWM"),p=a.n(d),v={name:"Home",data:function(){return{welcomeMsg:"🔎 more than",welcomeMsg2:"conferences around the 🌍",introMsg:"Awesome Conference is a fully open sourced and collaborative project about conference listings, available for mobile too.",instructionMsg1:"You can navigate conferences by category tapping just above ⬆️.",instructionMsg2:"Or have a quick look at the last ⏰ conference added so far.",mobileMsg:"Stay always updated using our 📱 dedicated application:",submitMsg:"Support the project sending interesting conference:",quickLook:"Have a ⚡️👀 to the latest 🔟 conferences published:",discoverMore:"or 🧐 discover more...",conferences:[],showSpinner:!0,firstRun:!1,total:""}},created:function(){this.fetchData();var e=parseInt(this.$cookie.get("firstrun"))||0;if(this.firstRun=e<3,this.firstRun){var t=e+1;this.$cookie.set("firstrun",t,0)}},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;p.a.get("https://aweconf.herokuapp.com/api/conference/last/10").then(function(t){e.conferences=t.data.conferences,e.total=5*Math.round(t.data.total/5),e.showSpinner=!1}).catch(function(e){console.log(e)})}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[e.firstRun?a("p",{staticClass:"hint"},[e._v(e._s(e.instructionMsg1)),a("br")]):e._e(),e._v(" "),a("div",{staticClass:"intro"},[a("h1",[e._v(e._s(e.welcomeMsg)+" "),a("b",[e._v(e._s(e.total))]),e._v(" "+e._s(e.welcomeMsg2))])]),e._v(" "),e.firstRun?a("p",{staticClass:"hint"},[e._v(e._s(e.instructionMsg2)),a("br")]):e._e(),e._v(" "),a("p",[e._v(e._s(e.quickLook))]),e._v(" "),e.showSpinner?a("v-progress-circular",{attrs:{indeterminate:"",color:"deep-purple"}}):e._e(),e._v(" "),a("ul",e._l(e.conferences,function(t){return a("li",{key:t.id},[e._l(t.category,function(t){return a("span",{key:t},[a("router-link",{attrs:{to:"/category/"+t}},[a("v-chip",{attrs:{color:"deep-purple","text-color":"white"}},[e._v(e._s(t))])],1)],1)}),e._v(" "),a("router-link",{attrs:{to:"/conference/"+t._id}},[e._v(e._s(t.title))])],2)})),e._v(" "),a("br"),e._v(" "),a("router-link",{attrs:{to:{path:"/category/all"}}},[e._v(e._s(e.discoverMore))]),e._v(" "),a("div",{staticClass:"submit"},[e.firstRun?a("p",{staticClass:"hint"},[e._v(e._s(e.submitMsg))]):e._e(),e._v(" "),a("router-link",{attrs:{to:"/submit"}},[a("v-btn",{attrs:{block:"",color:"deep-purple",dark:""}},[e._v("📩 Submit a new Conference")])],1)],1)],1)},staticRenderFns:[]};var m=a("VU/8")(v,f,!1,function(e){a("qBTJ")},"data-v-ed713350",null).exports,h={name:"Category",data:function(){return{conferences:[],showSpinner:!0,tmp:"",search:"",headers:[{text:"Name",align:"left",sortable:!1,value:"title"},{text:"City",sortable:!1,align:"left",value:"city"},{text:"Country",sortable:!1,align:"left",value:"country"},{text:"Start",value:"startdate",align:"left"},{text:"End",value:"enddate",align:"left"}]}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;p.a.get("https://aweconf.herokuapp.com/api/conference").then(function(t){e.conferences=t.data.conferences,e.showSpinner=!1}).catch(function(e){console.log(e)})},formatDate:function(e){return new Date(e).toLocaleDateString()},sortAndFilter:function(e,t){return"all"!==t?e.filter(function(e){return-1!==e.category.indexOf(t)}):e}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"category"},[e.showSpinner?a("v-progress-circular",{attrs:{indeterminate:"",color:"deep-purple"}}):e._e(),e._v(" "),a("v-container",{attrs:{"grid-list-xl":"","text-xs-left":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("v-card-title",[a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":"",color:"deep-purple"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,search:e.search,items:e.sortAndFilter(e.conferences,e.$route.params.category),"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[a("router-link",{attrs:{to:"/conference/"+t.item._id}},[e._v(e._s(t.item.title))])],1),e._v(" "),a("td",[e._v(e._s(t.item.city))]),e._v(" "),a("td",[e._v(e._s(t.item.emojiflag)+" "+e._s(t.item.country))]),e._v(" "),a("td",[e._v(e._s(e.formatDate(t.item.startdate)))]),e._v(" "),a("td",[e._v(e._s(e.formatDate(t.item.enddate)))])]}}])})],1)],1)],1),e._v(" "),a("br"),e._v(" "),a("router-link",{attrs:{to:"/submit/"+e.$route.params.category}},[a("v-btn",{attrs:{block:"",color:"deep-purple",dark:""}},[e._v("📩 Submit a new Conference in "+e._s(e.$route.params.category)+" category")])],1)],1)},staticRenderFns:[]};var b=a("VU/8")(h,_,!1,function(e){a("I97r")},"data-v-39788fdd",null).exports,g={name:"City",data:function(){return{conferences:[],showSpinner:!0,title:"",tmp:"",search:"",headers:[{text:"Name",align:"left",sortable:!1,value:"title"},{text:"Category",sortable:!1,align:"center"},{text:"City",sortable:!1,align:"left",value:"city"},{text:"Country",sortable:!1,align:"left",value:"country"},{text:"Start",value:"startdate",align:"left"},{text:"End",value:"enddate",align:"left"}]}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;p.a.post("https://aweconf.herokuapp.com/api/conference/city",{city:this.$route.params.city}).then(function(t){e.conferences=t.data.conferences,e.showSpinner=!1}).catch(function(e){console.log(e)})},formatDate:function(e){return new Date(e).toLocaleDateString()}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"city"},[e.showSpinner?a("v-progress-circular",{attrs:{indeterminate:"",color:"deep-purple"}}):e._e(),e._v(" "),a("v-container",{attrs:{"grid-list-xl":"","text-xs-left":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("h1",[e._v(e._s(e.$route.params.city))]),e._v(" "),a("v-card-title",[a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":"",color:"deep-purple"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,search:e.search,items:e.conferences,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[a("router-link",{attrs:{to:"/conference/"+t.item._id}},[e._v(e._s(t.item.title))])],1),e._v(" "),a("td",[a("ul",e._l(t.item.category,function(t){return a("li",{key:t,staticClass:"inline"},[a("router-link",{attrs:{to:"/category/"+t}},[e._v(e._s(t))])],1)}))]),e._v(" "),a("td",[e._v(e._s(t.item.city))]),e._v(" "),a("td",[e._v(e._s(t.item.emojiflag)+" "+e._s(t.item.country))]),e._v(" "),a("td",[e._v(e._s(e.formatDate(t.item.startdate)))]),e._v(" "),a("td",[e._v(e._s(e.formatDate(t.item.enddate)))])]}}])})],1)],1)],1),e._v(" "),a("br"),e._v(" "),a("router-link",{attrs:{to:"/submit"}},[a("v-btn",{attrs:{block:"",color:"deep-purple",dark:""}},[e._v("📩 Submit a new Conference in "+e._s(e.$route.params.city))])],1)],1)},staticRenderFns:[]};var w=a("VU/8")(g,y,!1,function(e){a("R/2V")},"data-v-a0a9c29e",null).exports,k={name:"Conference",data:function(){return{conferences:[],googleMapsApiKey:"AIzaSyAYEeB9GkE0xjCE_Km3RU_qJQfwGUsK8_Y",showSpinner:!0}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;p.a.get("https://aweconf.herokuapp.com/api/conference").then(function(t){e.conferences=t.data.conferences,e.showSpinner=!1}).catch(function(e){console.log(e)})},formatDate:function(e){return new Date(e).toLocaleDateString()},sortAndFilter:function(e,t){return e.filter(function(e){return e._id===t}).splice(0,1)},sortForCountry:function(e,t,a){return e.filter(function(e){return e.country===t}).filter(function(e){return e._id!==a}).splice(0,5)},commaSeparated:function(e){var t="";return e.forEach(function(e){t+=e+", "}),t.substr(0,t.length-2)},gmapsImage:function(e,t){return e||(e=""),"https://maps.googleapis.com/maps/api/staticmap?center="+e.replace(" ","+").replace("%20","+")+"&key="+t+"&zoom=15&scale=2&size=400x200&maptype=roadmap&format=jpg&visual_refresh=true&markers=size:small%7Ccolor:0x5719B8%7Clabel:1%7C"+e.replace(" ","+").replace("%20","+")},gmapsUrl:function(e){return e||(e=""),"https://www.google.com/maps/search/?api=1&query="+e.replace(" ","+")}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"conference"},[a("v-container",{attrs:{"grid-list-xl":"","text-xs-left":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[e.showSpinner?a("v-progress-circular",{attrs:{indeterminate:"",color:"deep-purple"}}):e._e(),e._v(" "),e._l(e.sortAndFilter(e.conferences,e.$route.params.id),function(t){return a("v-card",{key:t._id},[a("v-card-text",[a("h1",[e._v(e._s(t.title)+" "+e._s(t.emojiflag))])]),e._v(" "),a("v-card-text",[e._v("\n                                is a conference about "),a("b",[e._v(e._s(e.commaSeparated(t.category)))]),e._v(".\n                            ")]),e._v(" "),e.formatDate(t.startdate)!==e.formatDate(t.enddate)?a("v-card-text",[e._v("\n                                It will be between 🗓 "),a("em",[e._v(e._s(e.formatDate(t.startdate)))]),e._v(" and "),a("em",[e._v(e._s(e.formatDate(t.enddate)))]),e._v(" in "),a("router-link",{attrs:{to:"/city/"+t.city}},[e._v(e._s(t.city))]),e._v(", "+e._s(t.emojiflag)+" "),a("router-link",{attrs:{to:"/country/"+t.country}},[e._v(e._s(t.country))])],1):a("v-card-text",[e._v("\n                                It will be on 🗓 "),a("em",[e._v(e._s(e.formatDate(t.startdate)))]),e._v(" in "+e._s(t.emojiflag)+" "),a("a",{attrs:{href:e.gmapsUrl(t.where),target:"_blank"}},[e._v(e._s(t.city)+" - "+e._s(t.country))])]),e._v(" "),a("v-card-text",[a("a",{attrs:{href:e.gmapsUrl(t.where)}},[a("img",{attrs:{src:e.gmapsImage(t.where,e.googleMapsApiKey)}})])]),e._v(" "),a("v-card-text",[e._v("For further details: 🔗 "),a("a",{attrs:{href:t.homepage,target:"_blank"}},[e._v(e._s(t.homepage))])]),e._v(" "),t.callforpaper?[a("v-card-text",[e._v("At this very moment 🎤 call for paper is open.")])]:[a("v-card-text",[e._v("Sadly call for paper 🎤 is closed.")])]],2)}),e._v(" "),a("br"),e._v(" "),e._l(e.sortAndFilter(e.conferences,e.$route.params.id),function(t){return a("div",{key:t.id},[a("p",[e._v("Discover other conferences in "),a("router-link",{attrs:{to:"/country/"+t.country}},[e._v(e._s(t.emojiflag)+" "+e._s(t.country))]),e._v(":")],1),e._v(" "),a("ul",e._l(e.sortForCountry(e.conferences,t.country,e.$route.params.id),function(t){return a("li",{key:t.id},[e._l(t.category,function(t){return a("span",{key:t},[a("router-link",{attrs:{to:"/category/"+t}},[a("v-chip",{attrs:{color:"deep-purple","text-color":"white"}},[e._v(e._s(t))])],1)],1)}),e._v(" "),a("router-link",{attrs:{to:"/conference/"+t._id}},[e._v(e._s(t.title))])],2)}))])})],2)],1)],1)],1)},staticRenderFns:[]};var S=a("VU/8")(k,x,!1,function(e){a("QecU")},"data-v-7f0caad9",null).exports,A={name:"Country",data:function(){return{conferences:[],showSpinner:!0,title:"",tmp:"",search:"",headers:[{text:"Name",align:"left",sortable:!1,value:"title"},{text:"Category",sortable:!1,align:"center"},{text:"City",sortable:!1,align:"left",value:"city"},{text:"Country",sortable:!1,align:"left",value:"country"},{text:"Start",value:"startdate",align:"left"},{text:"End",value:"enddate",align:"left"}]}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;p.a.get("https://aweconf.herokuapp.com/api/conference/country/"+this.$route.params.country).then(function(t){e.conferences=t.data.conferences,e.showSpinner=!1,e.conferences.length>0&&(e.title=e.conferences[0].emojiflag+" "+e.conferences[0].country)}).catch(function(e){console.log(e)})},formatDate:function(e){return new Date(e).toLocaleDateString()}}},C={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"country"},[a("v-container",{attrs:{"grid-list-xl":"","text-xs-left":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[e.showSpinner?a("v-progress-circular",{attrs:{indeterminate:"",color:"deep-purple"}}):e._e(),e._v(" "),a("h1",[e._v(e._s(e.title))]),e._v(" "),a("v-card-title",[a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":"",color:"deep-purple"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,search:e.search,items:e.conferences,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[a("router-link",{attrs:{to:"/conference/"+t.item._id}},[e._v(e._s(t.item.title))])],1),e._v(" "),a("td",[a("ul",e._l(t.item.category,function(t){return a("li",{key:t,staticClass:"inline"},[a("router-link",{attrs:{to:"/category/"+t}},[e._v(e._s(t))])],1)}))]),e._v(" "),a("td",[e._v(e._s(t.item.city))]),e._v(" "),a("td",[e._v(e._s(t.item.emojiflag)+" "+e._s(t.item.country))]),e._v(" "),a("td",[e._v(e._s(e.formatDate(t.item.startdate)))]),e._v(" "),a("td",[e._v(e._s(e.formatDate(t.item.enddate)))])]}}])})],1)],1)],1),e._v(" "),a("br"),e._v(" "),a("router-link",{attrs:{to:"/submit"}},[a("v-btn",{attrs:{block:"",color:"deep-purple",dark:""}},[e._v("📩 Submit a new Conference in "+e._s(e.$route.params.country))])],1)],1)},staticRenderFns:[]};var D=a("VU/8")(A,C,!1,function(e){a("oc+O")},"data-v-4808c6c4",null).exports,R={data:function(){return{showSpinner:!1,startdate:null,enddate:null,menustart:!1,menuend:!1,modal:!1,ux:!1,frontend:!1,backend:!1,marketing:!1,mobile:!1,ui:!1,callforpaper:!1,where:"",city:"",twitter:"",url:"",name:"",country:"",submitSuccess:!1,submitFail:!1,valid:!1,countries:["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],nameRules:[function(e){return!!e||"Name is required"}],urlRules:[function(e){return!!e||"Url is required"}],cityRules:[function(e){return!!e||"City is required"}],countryRules:[function(e){return!!e||"Country is required"}],dateRules:[function(e){return!!e||"Start date is required"},function(e){return new Date(e)>=(new Date).setHours(0,0,0)||"Start date must be today or in the future"}],enddateRules:[function(e){return!!e||"End date is required"},function(e){return new Date(e)>=(new Date).setHours(0,0,0)||"End date must be in the future"}]}},mounted:function(){this.backend="backend"===this.$route.params.category,this.frontend="frontend"===this.$route.params.category,this.marketing="marketing"===this.$route.params.category,this.mobile="mobile"===this.$route.params.category,this.ui="ui"===this.$route.params.category,this.ux="ux"===this.$route.params.category},methods:{submit:function(){var e=this;if(this.$refs.form.validate(),this.valid){this.showSpinner=!0,this.submitSuccess=!1,this.submitFail=!1;var t=[];this.backend&&t.push("backend"),this.frontend&&t.push("frontend"),this.marketing&&t.push("marketing"),this.mobile&&t.push("mobile"),this.ui&&t.push("ui"),this.ux&&t.push("ux");var a={title:this.name,homepage:this.url,twitter:this.twitter,where:this.where,city:this.city,country:this.country,startdate:this.startdate,enddate:this.enddate,callforpaper:this.callforpaper,category:t};p.a.post("https://formspree.io/awc@boostco.de",{title:"A new conference "+this.name}).then(function(t){p.a.post("https://aweconf.herokuapp.com/api/conference/submit",a).then(function(t){e.submitSuccess=!0,e.showSpinner=!1,e.$refs.form.reset()}).catch(function(t){e.submitFail=!0,e.showSpinner=!1,console.log(t)})}).catch(function(t){e.submitFail=!0,e.showSpinner=!1,console.log(t)})}else alert("Check all required fields before submitting")}}},E={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"submit"},[a("v-container",{attrs:{"grid-list-xl":"","text-xs-left":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("v-card",[a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("p",[e._v("Complete the form below to ask a new conference to be published:")]),e._v(" "),a("v-text-field",{attrs:{label:"Name",counter:80,required:"",rules:e.nameRules,color:"deep-purple"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),a("v-text-field",{attrs:{label:"Url",counter:100,required:"",rules:e.urlRules,color:"deep-purple"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}}),e._v(" "),a("v-menu",{attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"max-width":"290px","min-width":"290px"},model:{value:e.menustart,callback:function(t){e.menustart=t},expression:"menustart"}},[a("v-text-field",{attrs:{slot:"activator",label:"Start date","prepend-icon":"event",required:"",color:"deep-purple",rules:e.dateRules,readonly:""},slot:"activator",model:{value:e.startdate,callback:function(t){e.startdate=t},expression:"startdate"}}),e._v(" "),a("v-date-picker",{attrs:{"no-title":"",scrollable:"",actions:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.save,n=t.cancel;return[a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{flat:"",color:"deep-purple"},on:{click:n}},[e._v("Cancel")]),e._v(" "),a("v-btn",{attrs:{flat:"",color:"deep-purple"},on:{click:r}},[e._v("OK")])],1)]}}]),model:{value:e.startdate,callback:function(t){e.startdate=t},expression:"startdate"}})],1),e._v(" "),a("v-menu",{attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"max-width":"290px","min-width":"290px"},model:{value:e.menuend,callback:function(t){e.menuend=t},expression:"menuend"}},[a("v-text-field",{attrs:{slot:"activator",label:"End date","prepend-icon":"event",required:"",color:"deep-purple",rules:e.enddateRules,readonly:""},slot:"activator",model:{value:e.enddate,callback:function(t){e.enddate=t},expression:"enddate"}}),e._v(" "),a("v-date-picker",{attrs:{"no-title":"",scrollable:"",actions:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.save,n=t.cancel;return[a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{flat:"",color:"deep-purple"},on:{click:n}},[e._v("Cancel")]),e._v(" "),a("v-btn",{attrs:{flat:"",color:"deep-purple"},on:{click:r}},[e._v("OK")])],1)]}}]),model:{value:e.enddate,callback:function(t){e.enddate=t},expression:"enddate"}})],1),e._v(" "),a("v-text-field",{attrs:{label:"Address",counter:200,color:"deep-purple"},model:{value:e.where,callback:function(t){e.where=t},expression:"where"}}),e._v(" "),a("v-text-field",{attrs:{label:"City",counter:100,required:"",color:"deep-purple",rules:e.cityRules},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}}),e._v(" "),a("v-select",{attrs:{color:"deep-purple",label:"Country",items:e.countries,rules:[function(e){return!!e||"Country is required"}],required:"",autocomplete:""},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}}),e._v(" "),a("v-checkbox",{attrs:{label:"Is Call for Paper open?",color:"deep-purple"},model:{value:e.callforpaper,callback:function(t){e.callforpaper=t},expression:"callforpaper"}}),e._v(" "),a("v-text-field",{attrs:{label:"Twitter handler",counter:50,color:"deep-purple"},model:{value:e.twitter,callback:function(t){e.twitter=t},expression:"twitter"}}),e._v(" "),a("p",[e._v("Categories")]),e._v(" "),a("v-checkbox",{attrs:{label:"Backend",color:"deep-purple"},model:{value:e.backend,callback:function(t){e.backend=t},expression:"backend"}}),e._v(" "),a("v-checkbox",{attrs:{label:"Frontend",color:"deep-purple"},model:{value:e.frontend,callback:function(t){e.frontend=t},expression:"frontend"}}),e._v(" "),a("v-checkbox",{attrs:{label:"DevOps",color:"deep-purple"},model:{value:e.devops,callback:function(t){e.devops=t},expression:"devops"}}),e._v(" "),a("v-checkbox",{attrs:{label:"Marketing",color:"deep-purple"},model:{value:e.marketing,callback:function(t){e.marketing=t},expression:"marketing"}}),e._v(" "),a("v-checkbox",{attrs:{label:"Mobile",color:"deep-purple"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),e._v(" "),a("v-checkbox",{attrs:{label:"UI",color:"deep-purple"},model:{value:e.ui,callback:function(t){e.ui=t},expression:"ui"}}),e._v(" "),a("v-checkbox",{attrs:{label:"UX",color:"deep-purple"},model:{value:e.ux,callback:function(t){e.ux=t},expression:"ux"}})],1)],1)],1),e._v(" "),a("br"),e._v(" "),a("v-btn",{attrs:{color:"deep-purple",dark:""},on:{click:e.submit}},[e._v("submit")]),e._v(" "),e.showSpinner?a("v-progress-circular",{attrs:{indeterminate:"",color:"deep-purple"}}):e._e(),e._v(" "),e.submitSuccess?a("v-alert",{attrs:{outline:"",color:"success",icon:"check_circle",value:!0}},[e._v("\n                Conference submitted.\n            ")]):e._e(),e._v(" "),e.submitFail?a("v-alert",{attrs:{outline:"",color:"error",icon:"warning",value:!0}},[e._v("\n                There was an error, try again or contact using twitter "),a("a",{attrs:{href:"https://twitter.com/aweconf"}},[e._v("@aweconf")]),e._v(".\n            ")]):e._e()],1)],1)],1)],1)},staticRenderFns:[]},M=a("VU/8")(R,E,!1,null,null,null).exports,F={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("h1",[e._v("About Awesome Conferences")]),e._v(" "),e._m(0),e._v(" "),a("h2",[e._v("How to partecipate")]),e._v(" "),a("p",[e._v("Partecipation is pretty easy, you can:")]),e._v(" "),a("ul",[a("li",[e._v("- Submit a "),a("router-link",{attrs:{to:"/submit"}},[e._v("new conference")])],1),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3)]),e._v(" "),e._m(4)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Awesome Conferences is a free, 👫👭👬 collaborative and 🤲 open source project about the best "),a("em",[e._v("(developer|designer|markerter|devop)")]),e._v(" conferences around the world 🌍.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[e._v("- Propose a PR on github "),a("a",{attrs:{href:"https://github.com/aweconf/website",target:"_blank"}},[e._v("web")]),e._v(" repository")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[e._v("- Propose a PR on github "),a("a",{attrs:{href:"https://github.com/aweconf/awesome-conferences-ios",target:"_blank"}},[e._v("ios")]),e._v(" mobile repository")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[e._v("- Propose a PR on github "),a("a",{attrs:{href:"https://github.com/aweconf/awesome-conferences-android",target:"_blank"}},[e._v("android")]),e._v(" mobile repository")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"developer"},[a("h2",[e._v("About the developer")]),e._v(" "),a("p",[e._v("It has been developed using "),a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Vue.js")]),e._v(", "),a("a",{attrs:{href:"http://expressjs.com",target:"_blank"}},[e._v("Expressjs")]),e._v(", "),a("a",{attrs:{href:"https://swift.org",target:"_blank"}},[e._v("Swift")]),e._v(" and "),a("a",{attrs:{href:"https://kotlinlang.org",target:"_blank"}},[e._v("Kotlin")]),e._v(" by "),a("a",{attrs:{href:"https://matteocrippa.it",target:"_blank"}},[e._v("Matteo Crippa")]),e._v(".")])])}]};var N=a("VU/8")(null,F,!1,function(e){a("JwT4")},"data-v-22cf24dc",null).exports,z={name:"Unapproved",data:function(){return{conferences:[],showSpinner:!0,dialog:!1,password:"",e1:!1,tmp:"",search:"",headers:[{text:"Name",align:"left",sortable:!1,value:"title"},{text:"City",sortable:!1,align:"left",value:"city"},{text:"Country",sortable:!1,align:"left",value:"country"},{text:"Start",value:"startdate",align:"left"},{text:"End",value:"enddate",align:"left"},{text:"Approve",sortable:!1,align:"left"}]}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;this.showSpinner=!0,p.a.get("https://aweconf.herokuapp.com/api/conference/not-approved").then(function(t){!0===t.data.success&&(e.conferences=t.data.conferences),e.showSpinner=!1}).catch(function(e){console.log(e)})},formatDate:function(e){return new Date(e).toLocaleDateString()},sortAndFilter:function(e){return e.sort(function(e,t){return new Date(e.startdate)>new Date(t.startdate)})},approveConf:function(e){var t=this;p.a.put("https://aweconf.herokuapp.com/api/conference/approve/",{id:e,password:this.$data.password}).then(function(e){!0===e.data.success?(t.fetchData(),t.dialog=!1):alert("An error occured")}).catch(function(e){console.log(e)})}}},B={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"unapproved"},[e.showSpinner?a("v-progress-circular",{attrs:{indeterminate:"",color:"deep-purple"}}):e._e(),e._v(" "),a("v-container",{attrs:{"grid-list-xl":"","text-xs-left":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("v-card-title",[a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":"",color:"deep-purple"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,search:e.search,items:e.conferences,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[e._v(e._s(t.item.title))]),e._v(" "),a("td",[e._v(e._s(t.item.city))]),e._v(" "),a("td",[e._v(e._s(t.item.emojiflag)+" "+e._s(t.item.country))]),e._v(" "),a("td",[e._v(e._s(e.formatDate(t.item.startdate)))]),e._v(" "),a("td",[e._v(e._s(e.formatDate(t.item.enddate)))]),e._v(" "),a("td",[a("v-btn",{attrs:{color:"deep-purple",dark:""},nativeOn:{click:function(a){e.approveConf(t.item._id)}}},[e._v("Approve")])],1)]}}])})],1),e._v(" "),a("v-flex",{attrs:{xs6:"","offset-xs1":""}},[a("v-text-field",{attrs:{name:"input-10-1",label:"Enter your password",min:"8","append-icon":e.e1?"visibility":"visibility_off","append-icon-cb":function(){return e.e1=!e.e1},type:e.e1?"password":"text",counter:"",required:"",color:"deep-purple"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1)],1)],1)},staticRenderFns:[]};var j=a("VU/8")(z,B,!1,function(e){a("dp2C")},"data-v-09c9dec4",null).exports;r.a.use(c.a),r.a.use(s.a),r.a.use(u.a);var I=new c.a({routes:[{path:"/",name:"Home",component:m},{path:"/category/:category",name:"Category",component:b},{path:"/conference/:id",name:"Conference",component:S},{path:"/submit/:category",name:"Submit",component:M},{path:"/submit",name:"Submit",component:M},{path:"/about",name:"About",component:N},{path:"/unapproved",name:"Unapproved",component:j},{path:"/country/:country",name:"Country",component:D},{path:"/city/:city",name:"City",component:w}]});a.e(0).then(a.bind(null,"7zck")),r.a.config.productionTip=!1,new r.a({el:"#app",router:I,components:{App:o},template:"<App/>"})},QecU:function(e,t){},"R/2V":function(e,t){},Xecm:function(e,t){e.exports="data:image/png;base64,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"},dp2C:function(e,t){},"oc+O":function(e,t){},qBTJ:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.abc1699f37b8deada999.js.map