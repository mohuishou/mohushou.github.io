(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{378:function(t,s,n){"use strict";n.r(s);var a=n(22),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#序"}},[t._v("#")]),t._v(" 序")]),t._v(" "),n("ul",[n("li",[t._v("Go 设计模式实现，包含常见的设计模式实现，同时这也是 "),n("a",{attrs:{href:"https://time.geekbang.org/column/intro/250",target:"_blank",rel:"noopener noreferrer"}},[t._v("极客时间-设计模式之美"),n("OutboundLink")],1),t._v(" 的笔记，源课程采用 Java 实现，本系列会采用 Go 实现")]),t._v(" "),n("li",[n("strong",[t._v("课程:")]),t._v(" "),n("a",{attrs:{href:"https://time.geekbang.org/column/article/202786",target:"_blank",rel:"noopener noreferrer"}},[t._v("49 | 桥接模式：如何实现支持不同类型和渠道的消息推送系统？"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("**本文代码仓库: "),n("a",{attrs:{href:"https://github.com/mohuishou/go-design-pattern",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/mohuishou/go-design-pattern"),n("OutboundLink")],1),t._v(" **🌟🌟🌟🌟🌟")]),t._v(" "),n("li",[t._v("**RoadMap: 07/22 **持续更新中，预计一周更新 2 ~ 3 种设计模式，预计到 202010 月底前更新完成")]),t._v(" "),n("li",[n("strong",[t._v("获取更新: "),n("strong",[n("a",{attrs:{href:"https://github.com/mohuishou/go-design-pattern",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("Github")]),n("OutboundLink")],1)]),t._v("、")]),n("a",{attrs:{href:"https://zhuanlan.zhihu.com/mohuishou",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("知乎")]),n("OutboundLink")],1),n("strong",[t._v("、")]),n("a",{attrs:{href:"https://lailin.xyz/atom.xml",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("RSS")]),n("OutboundLink")],1),n("strong",[t._v("、")]),n("a",{attrs:{href:"https://toutiao.io/subjects/387401?f=new",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("开发者头条")]),n("OutboundLink")],1),t._v("**")])]),t._v(" "),n("h2",{attrs:{id:"笔记"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#笔记"}},[t._v("#")]),t._v(" 笔记")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://lailin.xyz/images/1599580037511-2ca9ca33-6990-417a-8a3d-735d16c4b284.png",alt:""}})]),t._v(" "),n("h2",{attrs:{id:"代码实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),n("h3",{attrs:{id:"code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" Code")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" bridge\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IMsgSender IMsgSender")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" IMsgSender "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// EmailMsgSender 发送邮件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可能还有 电话、短信等各种实现")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" EmailMsgSender "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\temails "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NewEmailMsgSender NewEmailMsgSender")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewEmailMsgSender")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("emails "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("EmailMsgSender "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("EmailMsgSender"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("emails"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" emails"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Send Send")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("EmailMsgSender"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里去发送消息")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// INotification 通知接口")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" INotification "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Notify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ErrorNotification 错误通知")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后面可能还有 warning 各种级别")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ErrorNotification "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tsender IMsgSender\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NewErrorNotification NewErrorNotification")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewErrorNotification")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sender IMsgSender"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ErrorNotification "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("ErrorNotification"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sender"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sender"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Notify 发送通知")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ErrorNotification"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Notify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sender"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"单元测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单元测试"}},[t._v("#")]),t._v(" 单元测试")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("TestErrorNotification_Notify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("testing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tsender "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewEmailMsgSender")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test@test.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewErrorNotification")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sender"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\terr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Notify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test msg"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tassert"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Nil")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);