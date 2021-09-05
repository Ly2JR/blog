"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2006],{1483:(t,e,l)=>{l.r(e),l.d(e,{data:()=>n});const n={key:"v-0a7693ac",path:"/zh/varietystore/erp/yonyou/apis/capital-asset-types.html",title:"资产类别",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"zh/varietystore/erp/yonyou/apis/capital-asset-types.md",git:{updatedTime:null,contributors:[]}}},9817:(t,e,l)=>{l.r(e),l.d(e,{default:()=>j});var n=l(6252);const s=(0,n._)("h1",{id:"资产类别",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#资产类别","aria-hidden":"true"},"#"),(0,n.Uk)(" 资产类别")],-1),a=(0,n._)("li",null,[(0,n._)("p",null,"资源符"),(0,n._)("p",null,[(0,n._)("strong",null,"capitalassettypes")])],-1),d=(0,n._)("p",null,"操作符",-1),r=(0,n._)("strong",null,"create",-1),i=(0,n.Uk)(),p=(0,n._)("strong",null,"load",-1),o=(0,n.Uk)(),g=(0,n._)("strong",null,"edit",-1),y=(0,n.Uk)(),c=(0,n._)("strong",null,"delete",-1),u=(0,n.Uk)(),_=(0,n._)("li",null,[(0,n._)("p",null,"请求参数说明")],-1),f=(0,n.uE)('<table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">参数路径</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">assettypeno</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">资产类别编码</td></tr><tr><td style="text-align:left;">assettypename</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">资产类别名称</td></tr><tr><td style="text-align:left;">deprmethodnum</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">折旧方法编码</td></tr><tr><td style="text-align:left;">deprtype</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">计提属性编码</td></tr><tr><td style="text-align:left;">dblbvrate</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">净残值率</td></tr><tr><td style="text-align:left;">unit</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">计量单位</td></tr><tr><td style="text-align:left;">life</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">使用年限</td></tr><tr><td style="text-align:left;">modelid</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">卡片样式</td></tr><tr><td style="text-align:left;">assetsubjectnum</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">固定资产入账科目</td></tr><tr><td style="text-align:left;">deprtotalsubjectnum</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">累计折旧入账科目</td></tr><tr><td style="text-align:left;">decpresubjectnum</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">减值准备入账科目</td></tr><tr><td style="text-align:left;">bnotcanretdecvalue</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">不允许转回减值准备</td></tr><tr><td style="text-align:left;">cleanupsubjectnum</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">资产清理入账科目</td></tr><tr><td style="text-align:left;">bnewassetdepr</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">新增当月计提折旧</td></tr><tr><td style="text-align:left;">deprsubjectbytype</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">按资产类别默认折旧科目</td></tr></tbody></table><ul><li>返回参数说明</li></ul><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">errcode</td><td style="text-align:left;">string</td><td style="text-align:left;">状态码(0:成功)</td></tr><tr><td style="text-align:left;">errmsg</td><td style="text-align:left;">string</td><td style="text-align:left;">错误描述</td></tr><tr><td style="text-align:left;">id</td><td style="text-align:left;">string</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">tradeid</td><td style="text-align:left;">string</td><td style="text-align:left;"></td></tr></tbody></table><ul><li>示例</li></ul>',4),x=(0,n._)("div",{class:"language-json ext-json line-numbers-mode"},[(0,n._)("pre",{class:"language-json"},[(0,n._)("code",null,[(0,n._)("span",{class:"token punctuation"},"{"),(0,n.Uk)("\n    "),(0,n._)("span",{class:"token property"},'"capitalassettypes"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token punctuation"},"{"),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"assettypeno"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"014"'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"assettypename"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"电脑"'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"deprmethodnum"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"3"'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"deprtype"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"0"'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"life"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"99"'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"modelid"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"0"'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"bnotcanretdecvalue"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"1"'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"bnewassetdepr"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"0"'),(0,n.Uk)("\n    "),(0,n._)("span",{class:"token punctuation"},"}"),(0,n.Uk)("\n"),(0,n._)("span",{class:"token punctuation"},"}"),(0,n.Uk)("\n")])]),(0,n._)("div",{class:"line-numbers"},[(0,n._)("span",{class:"line-number"},"1"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"2"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"3"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"4"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"5"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"6"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"7"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"8"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"9"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"10"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"11"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"12"),(0,n._)("br")])],-1),k=(0,n._)("div",{class:"language-json ext-json line-numbers-mode"},[(0,n._)("pre",{class:"language-json"},[(0,n._)("code",null,[(0,n._)("span",{class:"token punctuation"},"{"),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token property"},'"errcode"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"0"'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token property"},'"errmsg"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'""'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token property"},'"id"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'""'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token property"},'"tradeid"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"3eb76146-c94b-4b4b-87ef-40ac1087f9ba"'),(0,n.Uk)("\n"),(0,n._)("span",{class:"token punctuation"},"}"),(0,n.Uk)("\n")])]),(0,n._)("div",{class:"line-numbers"},[(0,n._)("span",{class:"line-number"},"1"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"2"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"3"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"4"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"5"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"6"),(0,n._)("br")])],-1),b=(0,n._)("p",null,":::",-1),m={class:"custom-container details"},h=(0,n._)("summary",null,"查看演示",-1),U={href:"http://47.117.141.19/gif/assets/capitalassettypes.gif",target:"_blank",rel:"noopener noreferrer"},v=(0,n.Uk)("进入传送门"),j={render:function(t,e){const l=(0,n.up)("Badge"),j=(0,n.up)("CodeGroupItem"),w=(0,n.up)("CodeGroup"),W=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[s,(0,n._)("ul",null,[a,(0,n._)("li",null,[d,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("p",null,[r,i,(0,n.Wm)(l,{type:"tip",text:"v1",vertical:"top"})])]),(0,n._)("li",null,[(0,n._)("p",null,[p,o,(0,n.Wm)(l,{type:"tip",text:"v2",vertical:"top"})])]),(0,n._)("li",null,[(0,n._)("p",null,[g,y,(0,n.Wm)(l,{type:"tip",text:"v2",vertical:"top"})])]),(0,n._)("li",null,[(0,n._)("p",null,[c,u,(0,n.Wm)(l,{type:"tip",text:"v2",vertical:"top"})])])])]),_]),f,(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Wm)(j,{title:"请求"},{default:(0,n.w5)((()=>[x])),_:1}),(0,n.Wm)(j,{title:"响应"},{default:(0,n.w5)((()=>[k])),_:1}),b])),_:1}),(0,n._)("details",m,[h,(0,n._)("p",null,[(0,n._)("a",U,[v,(0,n.Wm)(W)])])])],64)}}}}]);