"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5256],{6351:(t,e,l)=>{l.r(e),l.d(e,{data:()=>n});const n={key:"v-4ce86f92",path:"/zh/varietystore/erp/yonyou/apis/inventory-position.html",title:"存货货位对照表",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"zh/varietystore/erp/yonyou/apis/inventory-position.md",git:{updatedTime:null,contributors:[]}}},698:(t,e,l)=>{l.r(e),l.d(e,{default:()=>W});var n=l(6252);const s=(0,n._)("h1",{id:"存货货位对照表",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#存货货位对照表","aria-hidden":"true"},"#"),(0,n.Uk)(" 存货货位对照表")],-1),a=(0,n._)("li",null,[(0,n._)("p",null,"资源符"),(0,n._)("p",null,[(0,n._)("strong",null,"invandpos")])],-1),r=(0,n._)("p",null,"操作符",-1),i=(0,n._)("strong",null,"create",-1),o=(0,n.Uk)(),p=(0,n._)("strong",null,"load",-1),d=(0,n.Uk)(),u=(0,n._)("strong",null,"edit",-1),_=(0,n.Uk)(),c=(0,n._)("strong",null,"delete",-1),g=(0,n.Uk)(),k=(0,n._)("li",null,[(0,n._)("p",null,"请求参数说明")],-1),y=(0,n.uE)('<table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">参数路径</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">cinvcode</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">存货编码</td></tr><tr><td style="text-align:left;">cposcode</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">货位编码</td></tr><tr><td style="text-align:left;">iprior</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">优先顺序</td></tr></tbody></table><ul><li>返回参数说明</li></ul><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">errcode</td><td style="text-align:left;">string</td><td style="text-align:left;">状态码(0:成功)</td></tr><tr><td style="text-align:left;">errmsg</td><td style="text-align:left;">string</td><td style="text-align:left;">错误描述</td></tr><tr><td style="text-align:left;">id</td><td style="text-align:left;">string</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">tradeid</td><td style="text-align:left;">string</td><td style="text-align:left;"></td></tr></tbody></table><ul><li>示例</li></ul>',4),f=(0,n._)("div",{class:"language-json ext-json line-numbers-mode"},[(0,n._)("pre",{class:"language-json"},[(0,n._)("code",null,[(0,n._)("span",{class:"token punctuation"},"{"),(0,n.Uk)("\n    "),(0,n._)("span",{class:"token property"},'"invandpos"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token punctuation"},"{"),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"cinvcode"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"01019002063"'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"cposcode"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"40-G-0-0-0"'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"iprior"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"1"'),(0,n.Uk)("\n    "),(0,n._)("span",{class:"token punctuation"},"}"),(0,n.Uk)("\n"),(0,n._)("span",{class:"token punctuation"},"}"),(0,n.Uk)("\n")])]),(0,n._)("div",{class:"line-numbers"},[(0,n._)("span",{class:"line-number"},"1"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"2"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"3"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"4"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"5"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"6"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"7"),(0,n._)("br")])],-1),b=(0,n._)("div",{class:"language-json ext-json line-numbers-mode"},[(0,n._)("pre",{class:"language-json"},[(0,n._)("code",null,[(0,n._)("span",{class:"token punctuation"},"{"),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token property"},'"errcode"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"0"'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token property"},'"errmsg"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'""'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token property"},'"id"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'""'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token property"},'"tradeid"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"3eb76146-c94b-4b4b-87ef-40ac1087f9ba"'),(0,n.Uk)("\n"),(0,n._)("span",{class:"token punctuation"},"}"),(0,n.Uk)("\n")])]),(0,n._)("div",{class:"line-numbers"},[(0,n._)("span",{class:"line-number"},"1"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"2"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"3"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"4"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"5"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"6"),(0,n._)("br")])],-1),x=(0,n._)("p",null,":::",-1),h={class:"custom-container details"},m=(0,n._)("summary",null,"查看演示",-1),U={href:"http://47.117.141.19/gif/invandpos.gif",target:"_blank",rel:"noopener noreferrer"},v=(0,n.Uk)("进入传送门"),W={render:function(t,e){const l=(0,n.up)("Badge"),W=(0,n.up)("CodeGroupItem"),j=(0,n.up)("CodeGroup"),w=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[s,(0,n._)("ul",null,[a,(0,n._)("li",null,[r,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("p",null,[i,o,(0,n.Wm)(l,{type:"tip",text:"v1",vertical:"top"})])]),(0,n._)("li",null,[(0,n._)("p",null,[p,d,(0,n.Wm)(l,{type:"tip",text:"v2",vertical:"top"})])]),(0,n._)("li",null,[(0,n._)("p",null,[u,_,(0,n.Wm)(l,{type:"tip",text:"v2",vertical:"top"})])]),(0,n._)("li",null,[(0,n._)("p",null,[c,g,(0,n.Wm)(l,{type:"tip",text:"v2",vertical:"top"})])])])]),k]),y,(0,n.Wm)(j,null,{default:(0,n.w5)((()=>[(0,n.Wm)(W,{title:"请求"},{default:(0,n.w5)((()=>[f])),_:1}),(0,n.Wm)(W,{title:"响应"},{default:(0,n.w5)((()=>[b])),_:1}),x])),_:1}),(0,n._)("details",h,[m,(0,n._)("p",null,[(0,n._)("a",U,[v,(0,n.Wm)(w)])])])],64)}}}}]);