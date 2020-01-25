(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97e1aa48"],{"309b":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Detail",{attrs:{"is-edit":!1,namespace:"Certificate"}})},o=[],n=i("4817"),a={name:"CreateForm",components:{Detail:n["a"]}},r=a,l=i("2877"),c=Object(l["a"])(r,s,o,!1,null,null,null);t["default"]=c.exports},"407f":function(e,t,i){"use strict";var s={data:function(){return{loading:!1,searching:!1}},methods:{loadingFullPage:function(){return this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})}}},o=s,n=i("532b"),a=void 0,r={props:{namespace:{type:String,default:""},isEdit:{type:Boolean,default:!1}},mixins:[o],created:function(){this.$store.commit("app/SET_STEPS",n["a"])},methods:{validateRequire:function(e,t,i){""===t?(a.$message({message:e.field+" is required",type:"error"}),i(new Error("Required field"))):i()},handleSave:function(e){this.$notify({title:" ".concat(this.isEdit?"Updated":"Created"),dangerouslyUseHTMLString:!0,message:e,type:"success",duration:2e3})},handleError:function(){this.$message({message:"Something went wrong:( Try again",type:"error"})},handleDelete:function(){this.$message({dangerouslyUseHTMLString:!0,message:"".concat(this.namespace," was sucessfully deleted"),type:"success",showClose:!0,duration:2e3})},validateUrl:function(e,t,i){t?validURL(t)?i():(a.$message({message:"Invalid URL format",type:"error"}),i(new Error("Invalid URL"))):i()}}};t["a"]=r},4817:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"createPost-container"},[i("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:e.postForm,rules:e.rules},on:{submit:function(e){return e.preventDefault(),(!1)(e)}}},[i("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+e.postForm.active}},[e.isEdit?i("Status",{attrs:{labels:["Published","Draft"]},model:{value:e.postForm.published,callback:function(t){e.$set(e.postForm,"published",t)},expression:"postForm.published"}}):e._e(),e._v(" "),e.isEdit?i("QR",{model:{value:e.postForm.QR,callback:function(t){e.$set(e.postForm,"QR",t)},expression:"postForm.QR"}}):e._e(),e._v(" "),i("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},domProps:{textContent:e._s(e.isEdit?"Save changes":"Save")},on:{click:e.submitForm}}),e._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Send certificate by email",placement:"top"}},[e.isEdit?i("el-button",{attrs:{type:"secondary",icon:"people"},on:{click:function(t){return e.sendEmail(e.postForm)}}},[i("svg-icon",{attrs:{"icon-class":"guide"}})],1):e._e()],1)],1),e._v(" "),i("div",{staticClass:"createPost-main-container"},[i("el-row",[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"postInfo-container"},[i("el-row",[i("el-col",{attrs:{span:12,xs:24}},[i("Upload",{directives:[{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}],model:{value:e.photo,callback:function(t){e.photo=t},expression:"photo"}})],1),e._v(" "),i("el-col",{attrs:{span:12,xs:24}},[e.isEdit?i("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"ID:",prop:"uuid"}},[i("el-input",{attrs:{value:e.postForm.uuid,disabled:"",type:"text"}},[i("el-button",{attrs:{slot:"append",type:"success",icon:"el-icon-document"},on:{click:function(t){return e.handleCopy(e.postForm.uuid,t,"ID")}},slot:"append"},[e._v("Copy")])],1)],1):e._e(),e._v(" "),i("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Facilitator:",prop:"to"}},[i("el-input",{attrs:{placeholder:"NOMBRE(S) APPELLIDO(S)",type:"text"},model:{value:e.postForm.to,callback:function(t){e.$set(e.postForm,"to",t)},expression:"postForm.to"}})],1),e._v(" "),i("el-form-item",{attrs:{prop:"description"}},[i("el-input",{attrs:{type:"textarea",rows:5,placeholder:"Description"},model:{value:e.postForm.description,callback:function(t){e.$set(e.postForm,"description",t)},expression:"postForm.description"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12,xs:24}},[i("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Type:",prop:"type"}},[i("br"),e._v(" "),i("el-select",{attrs:{filterable:"","allow-create":"",placeholder:"Select type"},model:{value:e.postForm.type,callback:function(t){e.$set(e.postForm,"type",t)},expression:"postForm.type"}},e._l(e.types,(function(e){return i("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),e._v(" "),i("el-col",{directives:[{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}],attrs:{span:12,xs:24}},[i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.postForm.file,expression:"postForm.file"}],staticClass:"postInfo-container-item",attrs:{label:"Currently:"}},[i("a",{staticClass:"link-type",attrs:{target:"_blank",href:e.postForm.file}},[i("svg-icon",{attrs:{"icon-class":"link"}})],1)]),e._v(" "),i("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Change:",prop:"file"}},[i("input",{ref:"file",attrs:{type:"file",accept:"image/png, image/jpeg",id:"file"}})])],1)],1)],1)])],1)],1)],1)],1)},o=[],n=i("db72"),a=i("2f62"),r=i("616f"),l=i("6d70"),c={to:[{required:!0,message:"Please enter facilitator",trigger:"blur"}],type:[{required:!0,message:"Please input type",trigger:["blur","change"]}]},p=i("407f"),u=i("f168"),d=i("8eff"),m={type:"RECOGNITION",description:"",published:!1,to:"",QR:"",file:""},f={name:"CertificateDetail",mixins:[p["a"],d["a"],u["a"]],components:{Status:function(){return i.e("chunk-2d0aeb74").then(i.bind(null,"0af3"))},QR:function(){return i.e("chunk-2d0c1b28").then(i.bind(null,"46c3"))},Upload:function(){return i.e("chunk-5d0f1156").then(i.bind(null,"e955"))},MDinput:function(){return i.e("chunk-6790f463").then(i.bind(null,"1aba"))},Sticky:function(){return i.e("chunk-2d210590").then(i.bind(null,"b804"))}},data:function(){return{loading:!1,rules:c,tempRoute:{},photo:"",id:null}},computed:Object(n["a"])({},Object(a["c"])("certificates",["postForm","types"])),created:function(){this.isEdit?(this.id=this.$route.params&&this.$route.params.id,this.fetchData(this.id)):this.$store.commit("certificates/SET_CERT",m),this.tempRoute=Object.assign({},this.$route)},methods:{submitUpload:function(e){this.$refs.upload.submit()},getPhoto:function(e){return Object(l["a"])(e)},fetchData:function(e){var t=this,i=this.loadingFullPage();Object(r["b"])(e).then((function(e){i.close(),t.photo=t.getPhoto(e.file),t.$store.commit("certificates/SET_CERT",e)})).catch((function(e){i.close()}))},submitForm:function(){var e=this;this.$refs.postForm.validate((function(t){if(!t)return!1;var i;e.loading=!0;var s=new FormData;for(var o in e.$refs.file.files.length?s.append("file",e.$refs.file.files[0]):delete e.postForm.file,e.postForm)s.append(o,e.postForm[o]);i=e.isEdit?Object(r["f"])(e.id,s):Object(r["a"])(s),i.then((function(t){e.handleSave("".concat(e.namespace," <b>").concat(e.postForm.type,": ").concat(e.postForm.to,"</b> was sucessfully saved")),e.loading=!1,e.isEdit?e.fetchData(e.id):e.photo=e.getPhoto(t.file),e.$refs.file.value="",e.$router.push("/certificates/"+t.uuid)})).catch((function(t){e.loading=!1,e.handleError()}))}))},deleteCert:function(){this.handleDelete(),this.postForm.active=!1}}},h=f,b=i("2877"),v=Object(b["a"])(h,s,o,!1,null,null,null);t["a"]=v.exports},"532b":function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"a",(function(){return o}));var s=[{element:".filter-container",popover:{title:"Table filters",description:"Filter by name, title, status or some important field. Also navigate to <b>Create page</b> to register new item.",position:"bottom"}},{element:".el-table",popover:{title:"Table",description:"Resources, items, list, result of filters applied.",position:"top"}},{element:".el-select--mini",popover:{title:"Quick actions",description:"Actions to alter selected rows. Such us delete multiple items or change some field. First select rows, then choose an option & click <b>Go</b> button.",position:"top"}},{element:".pagination-container",popover:{title:"Pagination",description:"Choose items quantity or page will be listed.",position:"top"}}],o=[{element:".postInfo-container",popover:{title:"Create/Update Form",description:'Edit or enter each field and click <b>Save/Save changes</b>. <br>\n        <span style="color: red;">*</span> Indicates required field and can not be empty.\n        ',position:"top"}},{element:".el-button--success",popover:{title:"Save button",description:'Click this button when all required fields or changes are ready and wait to save into database. <br>\n      Input errors will be displayed in <span style="color: red;">red</span>.\n      \n      ',position:"left"}}]},"6d70":function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));i("28a5");function s(e){try{var t=e.split("https://drive.google.com/file/d/");return t=t[1],t=t.split("/view?usp=drivesdk"),"https://drive.google.com/uc?id="+t[0]}catch(i){return""}}},"8eff":function(e,t,i){"use strict";var s=i("db72"),o=i("6d70"),n=i("bc3a"),a=i.n(n),r=i("4360"),l=i("5f87"),c=i("b444"),p=a.a.create({baseURL:"https://aaaimx-email.herokuapp.com/api",mode:"cors",credentials:"same-origin",timeout:4e4,headers:{"Content-Type":"application/json;"}});p.interceptors.request.use((function(e){return r["a"].getters.token&&(e.headers.Authorization="Bearer "+Object(l["c"])()),e}),(function(e){return Promise.reject(e)})),p.interceptors.response.use((function(e){return 200!==e.status&&201!==e.status&&204!==e.status?(401!==e.status&&403!==e.status||Object(c["b"])(),Promise.reject(new Error(e.message||"Error"))):e.data}),(function(e){var t=e.response,i=e.message;return Object(c["a"])(i),401!==t.status&&403!==t.status||Object(c["b"])(),Promise.reject(t)}));var u=p;function d(e){return u({url:"/emails/",method:"POST",data:e})}var m={methods:{sendEmail:function(e){var t=this;this.$prompt("Please input an e-mail","Send by email",{confirmButtonText:"OK",cancelButtonText:"Cancel",inputValue:"rnovelo.cruz98@gmail.com",inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:"Invalid Email"}).then((function(i){var n=i.value;d({subject:"CERTIFICATE OF "+e.type,message:"CERTIFICATE OF ".concat(e.type,": ").concat(e.to),sent:1,context:Object(s["a"])({},e,{email:n,thumbnail:Object(o["a"])(e.file)}),recipients:[n],template:"CERTIFICATE"}).then((function(e){t.$notify({title:"Success",message:"Certificate send",type:"success",duration:2e3})}),(function(e){}))})).catch((function(){t.$message({type:"info",message:"Email canceled"})}))}}};t["a"]=m}}]);