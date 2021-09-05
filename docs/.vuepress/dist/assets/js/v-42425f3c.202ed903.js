"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9736],{3393:(t,e,l)=>{l.r(e),l.d(e,{data:()=>n});const n={key:"v-42425f3c",path:"/zh/varietystore/erp/yonyou/apis/unit-doc.html",title:"交易单位档案",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"zh/varietystore/erp/yonyou/apis/unit-doc.md",git:{updatedTime:null,contributors:[]}}},4288:(t,e,l)=>{l.r(e),l.d(e,{default:()=>W});var n=l(6252);const s=(0,n._)("h1",{id:"交易单位档案",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#交易单位档案","aria-hidden":"true"},"#"),(0,n.Uk)(" 交易单位档案")],-1),a=(0,n._)("li",null,[(0,n._)("p",null,"资源符"),(0,n._)("p",null,[(0,n._)("strong",null,"unitdoc")])],-1),r=(0,n._)("p",null,"操作符",-1),i=(0,n._)("strong",null,"create",-1),d=(0,n.Uk)(),p=(0,n._)("strong",null,"load",-1),o=(0,n.Uk)(),c=(0,n._)("strong",null,"edit",-1),_=(0,n.Uk)(),g=(0,n._)("strong",null,"delete",-1),u=(0,n.Uk)(),k=(0,n._)("li",null,[(0,n._)("p",null,"请求参数说明")],-1),y=(0,n.uE)('<table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">参数路径</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">cunitid</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">交易方编号</td></tr><tr><td style="text-align:left;">cunitname</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">交易方名称</td></tr><tr><td style="text-align:left;">cunitsname</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">交易方简称</td></tr><tr><td style="text-align:left;">cclass</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">交易方分类编号</td></tr><tr><td style="text-align:left;">ccusid</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">客户编码</td></tr><tr><td style="text-align:left;">csupid</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">供应商编码</td></tr><tr><td style="text-align:left;">caddress</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">联系地址</td></tr><tr><td style="text-align:left;">cpostcode</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">邮政编码</td></tr><tr><td style="text-align:left;">ctelephone</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">电话</td></tr><tr><td style="text-align:left;">ctelefax</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">传真</td></tr><tr><td style="text-align:left;">cbp</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">呼机</td></tr><tr><td style="text-align:left;">cmobiletele</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">手机</td></tr><tr><td style="text-align:left;">cemail</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">Email地址</td></tr><tr><td style="text-align:left;">clinkman</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">联系人</td></tr><tr><td style="text-align:left;">cremark</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">备注</td></tr><tr><td style="text-align:left;">cbankcode</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">对应科目编码</td></tr><tr><td style="text-align:left;">cdepid</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">对应部门编码</td></tr><tr><td style="text-align:left;">cpersonid</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">对应人员编码</td></tr></tbody></table><ul><li>返回参数说明</li></ul><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">errcode</td><td style="text-align:left;">string</td><td style="text-align:left;">状态码(0:成功)</td></tr><tr><td style="text-align:left;">errmsg</td><td style="text-align:left;">string</td><td style="text-align:left;">错误描述</td></tr><tr><td style="text-align:left;">id</td><td style="text-align:left;">string</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">tradeid</td><td style="text-align:left;">string</td><td style="text-align:left;"></td></tr></tbody></table><ul><li>示例</li></ul>',4),f=(0,n._)("div",{class:"language-json ext-json line-numbers-mode"},[(0,n._)("pre",{class:"language-json"},[(0,n._)("code",null,[(0,n._)("span",{class:"token punctuation"},"{"),(0,n.Uk)("\n    "),(0,n._)("span",{class:"token property"},'"unitdoc"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token punctuation"},"{"),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"cunitid"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"0001"'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"cunitname"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"个人"'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"cunitsname"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"个人"'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"cclass"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"00"'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"ccusid"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'""'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"csupid"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'""'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"caddress"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'""'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"cpostcode"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'""'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"ctelephone"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'""'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"ctelefax"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'""'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"cbp"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'""'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"cmobiletele"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'""'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"cemail"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'""'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"clinkman"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'""'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"cremark"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'""'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"cdepid"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'""'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n        "),(0,n._)("span",{class:"token property"},'"cpersonid"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'""'),(0,n.Uk)("\n    "),(0,n._)("span",{class:"token punctuation"},"}"),(0,n.Uk)("\n"),(0,n._)("span",{class:"token punctuation"},"}"),(0,n.Uk)("\n")])]),(0,n._)("div",{class:"line-numbers"},[(0,n._)("span",{class:"line-number"},"1"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"2"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"3"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"4"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"5"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"6"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"7"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"8"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"9"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"10"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"11"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"12"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"13"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"14"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"15"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"16"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"17"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"18"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"19"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"20"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"21"),(0,n._)("br")])],-1),x=(0,n._)("div",{class:"language-json ext-json line-numbers-mode"},[(0,n._)("pre",{class:"language-json"},[(0,n._)("code",null,[(0,n._)("span",{class:"token punctuation"},"{"),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token property"},'"errcode"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"0"'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token property"},'"errmsg"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'""'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token property"},'"id"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'""'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)("\n  "),(0,n._)("span",{class:"token property"},'"tradeid"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"3eb76146-c94b-4b4b-87ef-40ac1087f9ba"'),(0,n.Uk)("\n"),(0,n._)("span",{class:"token punctuation"},"}"),(0,n.Uk)("\n")])]),(0,n._)("div",{class:"line-numbers"},[(0,n._)("span",{class:"line-number"},"1"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"2"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"3"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"4"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"5"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"6"),(0,n._)("br")])],-1),b=(0,n._)("p",null,":::",-1),m={class:"custom-container details"},U=(0,n._)("summary",null,"查看演示",-1),h={href:"http://47.117.141.19/gif/unitdoc.gif",target:"_blank",rel:"noopener noreferrer"},v=(0,n.Uk)("进入传送门"),W={render:function(t,e){const l=(0,n.up)("Badge"),W=(0,n.up)("CodeGroupItem"),j=(0,n.up)("CodeGroup"),w=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[s,(0,n._)("ul",null,[a,(0,n._)("li",null,[r,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("p",null,[i,d,(0,n.Wm)(l,{type:"tip",text:"v1",vertical:"top"})])]),(0,n._)("li",null,[(0,n._)("p",null,[p,o,(0,n.Wm)(l,{type:"tip",text:"v2",vertical:"top"})])]),(0,n._)("li",null,[(0,n._)("p",null,[c,_,(0,n.Wm)(l,{type:"tip",text:"v2",vertical:"top"})])]),(0,n._)("li",null,[(0,n._)("p",null,[g,u,(0,n.Wm)(l,{type:"tip",text:"v2",vertical:"top"})])])])]),k]),y,(0,n.Wm)(j,null,{default:(0,n.w5)((()=>[(0,n.Wm)(W,{title:"请求"},{default:(0,n.w5)((()=>[f])),_:1}),(0,n.Wm)(W,{title:"响应"},{default:(0,n.w5)((()=>[x])),_:1}),b])),_:1}),(0,n._)("details",m,[U,(0,n._)("p",null,[(0,n._)("a",h,[v,(0,n.Wm)(w)])])])],64)}}}}]);