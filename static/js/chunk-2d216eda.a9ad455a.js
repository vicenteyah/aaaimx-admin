(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216eda"],{c50b:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dropdown",{attrs:{"show-timeout":100,trigger:"click"}},[n("el-button",{attrs:{plain:""}},[t._v("\n    "+t._s(t.status?"Status: Active":"Status: Inactive")+"\n    "),n("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{staticClass:"no-padding",attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("el-radio-group",{staticStyle:{padding:"10px"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[n("el-radio",{attrs:{label:!0}},[t._v("\n          Active\n        ")]),t._v(" "),n("el-radio",{attrs:{label:!1}},[t._v("\n          Inactive\n        ")])],1)],1)],1)],1)},s=[],o={props:{value:{default:0}},computed:{status:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},l=o,i=n("2877"),u=Object(i["a"])(l,a,s,!1,null,null,null);e["default"]=u.exports}}]);