"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30],{6281:(e,n,t)=>{t.d(n,{A:()=>K});var a=t(6540),s=t(5072),l=t.n(s),r=t(7825),c=t.n(r),o=t(7659),i=t.n(o),m=t(5056),d=t.n(m),u=t(540),p=t.n(u),A=t(1113),f=t.n(A),h=t(5223),b={};b.styleTagTransform=f(),b.setAttributes=d(),b.insert=i().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=p(),l()(h.A,b);const E=h.A&&h.A.locals?h.A.locals:void 0;var g=t(1622),x=t(1924),y={};y.styleTagTransform=f(),y.setAttributes=d(),y.insert=i().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=p(),l()(x.A,y);const T=x.A&&x.A.locals?x.A.locals:void 0;var N=t(57),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=i().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=p(),l()(N.A,v);const w=N.A&&N.A.locals?N.A.locals:void 0;var S=t(4178),k={};k.styleTagTransform=f(),k.setAttributes=d(),k.insert=i().bind(null,"head"),k.domAPI=c(),k.insertStyleElement=p(),l()(S.A,k);const z=S.A&&S.A.locals?S.A.locals:void 0;class P extends a.Component{render(){const{format:e}=this.props;let n;return n="shell"===e?a.createElement("div",{className:E.format},function(e){const n=new g.Jl;return n.addLexer(g.pm),n.parse(e).map((e=>function(e){const{type:n,elem:t}=e;switch(n){case" ":return a.createElement("span",null," ");case"command":return a.createElement("span",{className:w.command},t);case"dot":return a.createElement("span",{className:w.dot},t)}}(e)))}(this.props.children)):"javascript"===e?a.createElement("div",{className:E.format},function(e){const n=new g.Jl;return n.addLexer(g.sd),n.parse(e).map((e=>function(e){console.log(e);const{type:n,elem:t}=e;switch(n){case" ":return a.createElement("span",null," ");case"module":return a.createElement("span",{className:z.module},t);case"identifer":return a.createElement("span",{className:z.identifer},t);case"quotation":return a.createElement("span",{className:z.quotation},t);case"string":return a.createElement("span",{className:z.string},t);case"function":return a.createElement("span",{className:z.function},t);case"declare":return a.createElement("span",{className:z.declare},t);case"arithmetic":return a.createElement("span",{className:z.arithmetic},t);case"class":return a.createElement("span",{className:z.class},t);case"parenthese":return a.createElement("span",{className:z.parenthese},t);case"call":return a.createElement("span",{className:z.call},t)}}(e)))}(this.props.children)):a.createElement("div",{className:E.format},function(e){const n=new g.Jl;return n.addLexer(g.aJ),n.parse(e).map((e=>function(e){const{type:n,elem:t}=e;switch(n){case" ":return a.createElement("span",null," ");case"colon":return a.createElement("span",{className:T.colon},t);case"text":return a.createElement("span",{className:T.text},t);case"format":return a.createElement("span",{className:T.format},t);case"parenthese":return a.createElement("span",{className:T.parenthese},t);case"plus":return a.createElement("span",{className:T.plus},t);case"squareParenthese":return a.createElement("span",{className:T.squareParenthese},t);case"dividing":return a.createElement("span",{className:T.dividng},t);case"and":return a.createElement("span",{className:T.and},t)}}(e)))}(this.props.children)),n}}const K=P},3419:(e,n,t)=>{t.d(n,{A:()=>x});var a=t(6540),s=t(5072),l=t.n(s),r=t(7825),c=t.n(r),o=t(7659),i=t.n(o),m=t(5056),d=t.n(m),u=t(540),p=t.n(u),A=t(1113),f=t.n(A),h=t(400),b={};b.styleTagTransform=f(),b.setAttributes=d(),b.insert=i().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=p(),l()(h.A,b);const E=h.A&&h.A.locals?h.A.locals:void 0;class g extends a.Component{render(){return a.createElement("div",{className:E.formats},this.props.children)}}const x=g},4146:(e,n,t)=>{t.d(n,{A:()=>x});var a=t(6540),s=t(5072),l=t.n(s),r=t(7825),c=t.n(r),o=t(7659),i=t.n(o),m=t(5056),d=t.n(m),u=t(540),p=t.n(u),A=t(1113),f=t.n(A),h=t(2071),b={};b.styleTagTransform=f(),b.setAttributes=d(),b.insert=i().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=p(),l()(h.A,b);const E=h.A&&h.A.locals?h.A.locals:void 0;class g extends a.Component{render(){return a.createElement("div",{className:E.text},this.props.children)}}const x=g},4030:(e,n,t)=>{t.r(n),t.d(n,{default:()=>N});var a=t(6540),s=t(4146),l=t(6281),r=t(3419),c=t(5072),o=t.n(c),i=t(7825),m=t.n(i),d=t(7659),u=t.n(d),p=t(5056),A=t.n(p),f=t(540),h=t.n(f),b=t(1113),E=t.n(b),g=t(6307),x={};x.styleTagTransform=E(),x.setAttributes=A(),x.insert=u().bind(null,"head"),x.domAPI=m(),x.insertStyleElement=h(),o()(g.A,x);const y=g.A&&g.A.locals?g.A.locals:void 0;class T extends a.Component{render(){return a.createElement("div",{className:y.quickstart},a.createElement(s.A,null,'Fulmination is a pure text color project.Parse input file format as "ctf" output pure text with color."ctf" mean color text format.ctf file format has own syntax,user can color text by their own special need.ctf syntax is semantic and beatiful syntax.User will enjoy when they write ctf file.ctf use by chalk project to color pure text.User can also watch and learn chalk.That\'s will be helpful for you use ctf file.'),a.createElement(s.A,null,'Text below is use ctf syntax.ctf format text with "format" and "text" and so on concept.'),a.createElement(r.A,null,a.createElement(l.A,null,"(+) bold; red: This is ctf text syntax (+) dim; underline: ctf text will be in same line."),a.createElement(l.A,null," "),a.createElement(l.A,null,"[+] bold; green:"),a.createElement(l.A,null,"| This is ctf passage syntax."),a.createElement(l.A,null,"| Each passage will in different line."),a.createElement(l.A,null,"| Each passage is start with delimiter.")),a.createElement(s.A,null,"And ctf also has chalk syntax section."),a.createElement(r.A,null,a.createElement(l.A,null,"(+) bold: bold, underline and so on is chalk style. (+) underline: You can get this section document in chalk. &"),a.createElement(l.A,null,"(+) bold: text and passage use same chalk style."),a.createElement(l.A,null," "),a.createElement(l.A,null,"[+] bold:"),a.createElement(l.A,null,'| style use ";" as delimiter, passage use "|" as delimiter.'),a.createElement(l.A,null,"| Passage apply style to all passage.Text apply style only to one text.")))}}const N=T},5223:(e,n,t)=>{t.d(n,{A:()=>c});var a=t(1601),s=t.n(a),l=t(6314),r=t.n(l)()(s());r.push([e.id,".SOnRA4OMJn_zWzI4Jb9z {\n  padding: 5px;\n  font-size: 20px;\n  background-color: rgb(250, 250, 250)\n}\n",""]),r.locals={format:"SOnRA4OMJn_zWzI4Jb9z"};const c=r},400:(e,n,t)=>{t.d(n,{A:()=>c});var a=t(1601),s=t.n(a),l=t(6314),r=t.n(l)()(s());r.push([e.id,".L1VfjDXSBBKEn_UuR39X {\n  margin: 19px 0 19px 0\n}\n",""]),r.locals={formats:"L1VfjDXSBBKEn_UuR39X"};const c=r},2071:(e,n,t)=>{t.d(n,{A:()=>c});var a=t(1601),s=t.n(a),l=t(6314),r=t.n(l)()(s());r.push([e.id,".o3hKDSkzVmXyHe5lsk98 {\n  font-size: 20px;\n  color: rgb(250, 250, 250);\n  line-height: 1.6;\n  text-indent: 2em\n}\n",""]),r.locals={text:"o3hKDSkzVmXyHe5lsk98"};const c=r},1924:(e,n,t)=>{t.d(n,{A:()=>c});var a=t(1601),s=t.n(a),l=t(6314),r=t.n(l)()(s());r.push([e.id,".JS2pmQYOf1agbIsHDyMz {\n  color: rgb(240, 13, 23)\n}\n.X3ZoDMJnNu0QWru19hxQ {\n  color: rgb(33, 32, 58)\n}\n.B9l9Dw3YdSeBHj43yEoR {\n  color: rgb(24, 213, 23)\n}\n.SRK9uqr1uj4ZXFAkZcm6 {\n  color: rgb(142, 51, 132)\n}\n.x0Tj7SngwuGTJOQyLgWE {\n  color: rgb(42, 14, 42)\n}\n.OInq7SAMlMmnMleQdQ0R {\n  color: rgb(124, 14, 124)\n}\n.xTP8SuPki23bbHIWp165 {\n  color: rgb(42, 132, 142)\n}\n.FnH2Z3DOtDaKGPnjMqzT {\n  color: rgb(255, 192, 53)\n}\n",""]),r.locals={parenthese:"JS2pmQYOf1agbIsHDyMz",plus:"X3ZoDMJnNu0QWru19hxQ",squareParenthese:"B9l9Dw3YdSeBHj43yEoR",dividing:"SRK9uqr1uj4ZXFAkZcm6",text:"x0Tj7SngwuGTJOQyLgWE",format:"OInq7SAMlMmnMleQdQ0R",colon:"xTP8SuPki23bbHIWp165",and:"FnH2Z3DOtDaKGPnjMqzT"};const c=r},4178:(e,n,t)=>{t.d(n,{A:()=>c});var a=t(1601),s=t.n(a),l=t(6314),r=t.n(l)()(s());r.push([e.id,".uVHzMY3oL3A52wS0dEAZ {\n  color: rgb(164, 19, 33)\n}\n.WzIA9LZ5wbB8as6yKdtU {\n  color: rgb(122, 122, 122)\n}\n.AEqz8qfLfFZwnOmGrMVK {\n  color: rgb(242, 201, 24)\n}\n.XGoGGKOvTN65VI6C3Bc3 {\n  color: rgb(242, 121, 12)\n}\n.nBiE_bBO2NW1mb9W80p7 {\n  color: rgb(200, 24, 24)\n}\n.HRtxeA457a5lLf8LapXA {\n  color: rgb(142, 10, 152)\n}\n.DPFbLPUhAPvt78TCtFXp {\n  color: rgb(244, 23, 42)\n}\n.Sl5Md2iMAujTJt7a_82N {\n  color: rgb(245, 60, 93)\n}\n.IqwS96cfON2LT_dtszp1 {\n  color: rgb(42, 162, 42)\n}\n.Vb83cHsNK4FUawklC9n9 {\n  color: rgb(242, 42, 145)\n}\n",""]),r.locals={module:"uVHzMY3oL3A52wS0dEAZ",identifer:"WzIA9LZ5wbB8as6yKdtU",quotation:"AEqz8qfLfFZwnOmGrMVK",string:"XGoGGKOvTN65VI6C3Bc3",function:"nBiE_bBO2NW1mb9W80p7",declare:"HRtxeA457a5lLf8LapXA",arithmetic:"DPFbLPUhAPvt78TCtFXp",class:"Sl5Md2iMAujTJt7a_82N",parenthese:"IqwS96cfON2LT_dtszp1",call:"Vb83cHsNK4FUawklC9n9"};const c=r},57:(e,n,t)=>{t.d(n,{A:()=>c});var a=t(1601),s=t.n(a),l=t(6314),r=t.n(l)()(s());r.push([e.id,".A1Zfl5K4RskpHG27nviT {\n  color: rgb(142, 103, 102)\n}\n.HtR5sKisGBEFcwrzWXtS {\n  color: rgb(234, 24, 23)\n}\n",""]),r.locals={command:"A1Zfl5K4RskpHG27nviT",dot:"HtR5sKisGBEFcwrzWXtS"};const c=r},6307:(e,n,t)=>{t.d(n,{A:()=>c});var a=t(1601),s=t.n(a),l=t(6314),r=t.n(l)()(s());r.push([e.id,".VCKa7y75xTo6dUeRf1A7 {\n  padding: 27px;\n  background-color: rgb(20, 20, 20);\n  height: 100%\n}\n",""]),r.locals={quickstart:"VCKa7y75xTo6dUeRf1A7"};const c=r}}]);