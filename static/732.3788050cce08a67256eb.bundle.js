"use strict";(self.webpackChunkfulmination_web=self.webpackChunkfulmination_web||[]).push([[732],{6281:(e,n,t)=>{t.d(n,{A:()=>O});var a=t(6540),r=t(5072),s=t.n(r),l=t(7825),c=t.n(l),o=t(7659),m=t.n(o),i=t(5056),d=t.n(i),u=t(540),p=t.n(u),A=t(1113),f=t.n(A),b=t(5223),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=m().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=p(),s()(b.A,h);const E=b.A&&b.A.locals?b.A.locals:void 0;var g=t(1622),v=t(1924),N={};N.styleTagTransform=f(),N.setAttributes=d(),N.insert=m().bind(null,"head"),N.domAPI=c(),N.insertStyleElement=p(),s()(v.A,N);const T=v.A&&v.A.locals?v.A.locals:void 0;var w=t(57),x={};x.styleTagTransform=f(),x.setAttributes=d(),x.insert=m().bind(null,"head"),x.domAPI=c(),x.insertStyleElement=p(),s()(w.A,x);const S=w.A&&w.A.locals?w.A.locals:void 0;var y=t(4178),P={};P.styleTagTransform=f(),P.setAttributes=d(),P.insert=m().bind(null,"head"),P.domAPI=c(),P.insertStyleElement=p(),s()(y.A,P);const I=y.A&&y.A.locals?y.A.locals:void 0;class L extends a.Component{render(){const{format:e}=this.props;let n;return n="shell"===e?a.createElement("div",{className:E.format},function(e){const n=new g.Jl;return n.addLexer(g.pm),n.parse(e).map((e=>function(e){const{type:n,elem:t}=e;switch(n){case" ":return a.createElement("span",null," ");case"filename":return a.createElement("span",{className:S.filename},t);case"command":return a.createElement("span",{className:S.command},t)}}(e)))}(this.props.children)):"javascript"===e?a.createElement("div",{className:E.format},function(e){const n=new g.Jl;return n.addLexer(g.sd),n.parse(e).map((e=>function(e){const{type:n,elem:t}=e;switch(n){case" ":return a.createElement("span",null," ");case"module":return a.createElement("span",{className:I.module},t);case"identifer":return a.createElement("span",{className:I.identifer},t);case"quotation":return a.createElement("span",{className:I.quotation},t);case"string":return a.createElement("span",{className:I.string},t);case"function":return a.createElement("span",{className:I.function},t);case"declare":return a.createElement("span",{className:I.declare},t);case"arithmetic":return a.createElement("span",{className:I.arithmetic},t);case"class":return a.createElement("span",{className:I.class},t);case"parenthese":return a.createElement("span",{className:I.parenthese},t);case"call":return a.createElement("span",{className:I.call},t)}}(e)))}(this.props.children)):a.createElement("div",{className:E.format},function(e){const n=new g.Jl;return n.addLexer(g.aJ),n.parse(e).map((e=>function(e){const{type:n,elem:t}=e;switch(n){case" ":return a.createElement("span",null," ");case"colon":return a.createElement("span",{className:T.colon},t);case"text":return a.createElement("span",{className:T.text},t);case"format":return a.createElement("span",{className:T.format},t);case"parenthese":return a.createElement("span",{className:T.parenthese},t);case"plus":return a.createElement("span",{className:T.plus},t);case"squareParenthese":return a.createElement("span",{className:T.squareParenthese},t);case"dividing":return a.createElement("span",{className:T.dividng},t);case"and":return a.createElement("span",{className:T.and},t)}}(e)))}(this.props.children)),n}}const O=L},3419:(e,n,t)=>{t.d(n,{A:()=>v});var a=t(6540),r=t(5072),s=t.n(r),l=t(7825),c=t.n(l),o=t(7659),m=t.n(o),i=t(5056),d=t.n(i),u=t(540),p=t.n(u),A=t(1113),f=t.n(A),b=t(400),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=m().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=p(),s()(b.A,h);const E=b.A&&b.A.locals?b.A.locals:void 0;class g extends a.Component{render(){return a.createElement("div",{className:E.formats},this.props.children)}}const v=g},4146:(e,n,t)=>{t.d(n,{A:()=>v});var a=t(6540),r=t(5072),s=t.n(r),l=t(7825),c=t.n(l),o=t(7659),m=t.n(o),i=t(5056),d=t.n(i),u=t(540),p=t.n(u),A=t(1113),f=t.n(A),b=t(2071),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=m().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=p(),s()(b.A,h);const E=b.A&&b.A.locals?b.A.locals:void 0;class g extends a.Component{render(){return a.createElement("div",{className:E.text},this.props.children)}}const v=g},5732:(e,n,t)=>{t.r(n),t.d(n,{default:()=>w});var a=t(6540),r=t(5072),s=t.n(r),l=t(7825),c=t.n(l),o=t(7659),m=t.n(o),i=t(5056),d=t.n(i),u=t(540),p=t.n(u),A=t(1113),f=t.n(A),b=t(5861),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=m().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=p(),s()(b.A,h);const E=b.A&&b.A.locals?b.A.locals:void 0;var g=t(4146),v=t(3419),N=t(6281);class T extends a.Component{render(){return a.createElement("div",{className:E.applicationProgramInterface},a.createElement(g.A,null,'Fulmination provider api "CtfParser".User can this api parse ctf text.'),a.createElement(v.A,null,a.createElement(N.A,{format:"javascript"},"import CtfParser from 'fulmination';"),a.createElement(N.A,{format:"javascript"},"const ctfParser = new CtfParser();"),a.createElement(N.A,{format:"javascript"},"ctfParser.scan(text);")),a.createElement(g.A,null,"In this way user can parse their own ctf text.Output text be colored to terminal."))}}const w=T},5223:(e,n,t)=>{t.d(n,{A:()=>c});var a=t(1601),r=t.n(a),s=t(6314),l=t.n(s)()(r());l.push([e.id,".SOnRA4OMJn_zWzI4Jb9z {\n  padding: 5px;\n  font-size: 20px;\n  background-color: rgb(250, 250, 250)\n}\n",""]),l.locals={format:"SOnRA4OMJn_zWzI4Jb9z"};const c=l},400:(e,n,t)=>{t.d(n,{A:()=>c});var a=t(1601),r=t.n(a),s=t(6314),l=t.n(s)()(r());l.push([e.id,".L1VfjDXSBBKEn_UuR39X {\n  margin: 19px 0 19px 0\n}\n",""]),l.locals={formats:"L1VfjDXSBBKEn_UuR39X"};const c=l},2071:(e,n,t)=>{t.d(n,{A:()=>c});var a=t(1601),r=t.n(a),s=t(6314),l=t.n(s)()(r());l.push([e.id,".o3hKDSkzVmXyHe5lsk98 {\n  font-size: 20px;\n  color: rgb(250, 250, 250);\n  line-height: 1.6;\n  text-indent: 2em\n}\n",""]),l.locals={text:"o3hKDSkzVmXyHe5lsk98"};const c=l},1924:(e,n,t)=>{t.d(n,{A:()=>c});var a=t(1601),r=t.n(a),s=t(6314),l=t.n(s)()(r());l.push([e.id,".JS2pmQYOf1agbIsHDyMz {\n  color: rgb(240, 13, 23)\n}\n.X3ZoDMJnNu0QWru19hxQ {\n  color: rgb(33, 32, 58)\n}\n.B9l9Dw3YdSeBHj43yEoR {\n  color: rgb(24, 213, 23)\n}\n.SRK9uqr1uj4ZXFAkZcm6 {\n  color: rgb(142, 51, 132)\n}\n.x0Tj7SngwuGTJOQyLgWE {\n  color: rgb(42, 14, 42)\n}\n.OInq7SAMlMmnMleQdQ0R {\n  color: rgb(124, 14, 124)\n}\n.xTP8SuPki23bbHIWp165 {\n  color: rgb(42, 132, 142)\n}\n.FnH2Z3DOtDaKGPnjMqzT {\n  color: rgb(255, 192, 53)\n}\n",""]),l.locals={parenthese:"JS2pmQYOf1agbIsHDyMz",plus:"X3ZoDMJnNu0QWru19hxQ",squareParenthese:"B9l9Dw3YdSeBHj43yEoR",dividing:"SRK9uqr1uj4ZXFAkZcm6",text:"x0Tj7SngwuGTJOQyLgWE",format:"OInq7SAMlMmnMleQdQ0R",colon:"xTP8SuPki23bbHIWp165",and:"FnH2Z3DOtDaKGPnjMqzT"};const c=l},4178:(e,n,t)=>{t.d(n,{A:()=>c});var a=t(1601),r=t.n(a),s=t(6314),l=t.n(s)()(r());l.push([e.id,".uVHzMY3oL3A52wS0dEAZ {\n  color: rgb(164, 19, 33)\n}\n.WzIA9LZ5wbB8as6yKdtU {\n  color: rgb(122, 122, 122)\n}\n.AEqz8qfLfFZwnOmGrMVK {\n  color: rgb(242, 201, 24)\n}\n.XGoGGKOvTN65VI6C3Bc3 {\n  color: rgb(242, 121, 12)\n}\n.nBiE_bBO2NW1mb9W80p7 {\n  color: rgb(200, 24, 24)\n}\n.HRtxeA457a5lLf8LapXA {\n  color: rgb(142, 10, 152)\n}\n.DPFbLPUhAPvt78TCtFXp {\n  color: rgb(244, 23, 42)\n}\n.Sl5Md2iMAujTJt7a_82N {\n  color: rgb(245, 60, 93)\n}\n.IqwS96cfON2LT_dtszp1 {\n  color: rgb(42, 162, 42)\n}\n.Vb83cHsNK4FUawklC9n9 {\n  color: rgb(242, 42, 145)\n}\n",""]),l.locals={module:"uVHzMY3oL3A52wS0dEAZ",identifer:"WzIA9LZ5wbB8as6yKdtU",quotation:"AEqz8qfLfFZwnOmGrMVK",string:"XGoGGKOvTN65VI6C3Bc3",function:"nBiE_bBO2NW1mb9W80p7",declare:"HRtxeA457a5lLf8LapXA",arithmetic:"DPFbLPUhAPvt78TCtFXp",class:"Sl5Md2iMAujTJt7a_82N",parenthese:"IqwS96cfON2LT_dtszp1",call:"Vb83cHsNK4FUawklC9n9"};const c=l},57:(e,n,t)=>{t.d(n,{A:()=>c});var a=t(1601),r=t.n(a),s=t(6314),l=t.n(s)()(r());l.push([e.id,".A1Zfl5K4RskpHG27nviT {\n  color: rgb(142, 103, 102)\n}\n.rUneIIe3FwkLJJH8Gwb5 {\n  color: rgb(230, 121, 42)\n}\n",""]),l.locals={command:"A1Zfl5K4RskpHG27nviT",filename:"rUneIIe3FwkLJJH8Gwb5"};const c=l},5861:(e,n,t)=>{t.d(n,{A:()=>c});var a=t(1601),r=t.n(a),s=t(6314),l=t.n(s)()(r());l.push([e.id,".yjMKVB6bLOeffdctOZEY {\n  padding: 27px;\n  background-color: rgb(20, 20, 20);\n  height: 100%\n}\n",""]),l.locals={applicationProgramInterface:"yjMKVB6bLOeffdctOZEY"};const c=l}}]);