(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4065:function(_,l,t){"use strict";t.r(l),t.d(l,{default:function(){return f}});var i=t(266),p=t(809),u=t.n(p),e=t(3162),b=t(5817),n=t(7294),g=t(9008),h=t(6224),r=t.n(h),o=t(5893),c=function(_){var l=_.title,t=_.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g.default,{children:(0,o.jsx)("title",{children:l})}),(0,o.jsx)("div",{className:r()["markdown-body"],children:t})]})},s=t(7528),d=t(9904),m=t.n(d),a=function(){var _=(0,n.useContext)(s.ThemeContext),l=_.colorMode,t=_.setColorMode;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:m().navbar,children:(0,o.jsxs)("label",{children:["Darkmode",(0,o.jsx)("input",{type:"checkbox",checked:"dark"===l,onChange:function(){return t("dark"===l?"light":"dark")}})]})}),(0,o.jsx)("div",{style:{minHeight:"50px"}})]})},x=t(8764).Buffer,f=function(){var _=(0,n.useRef)(null);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{}),(0,o.jsxs)(c,{title:"Converter",children:[(0,o.jsx)("input",{type:"file",multiple:!0,ref:_}),(0,o.jsx)("button",{onClick:(0,i.Z)(u().mark((function l(){var t,i,p,n,g,h,r,o,c,s,d,m,a,f,v,k;return u().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,null===_||void 0===_||null===(t=_.current)||void 0===t||null===(i=t.files)||void 0===i||null===(p=i[0])||void 0===p?void 0:p.arrayBuffer();case 2:if(!(n=l.sent)){l.next=20;break}return g=x.from(n),h=g.readInt32LE(g.length-20),r=g.readInt32LE(g.length-16),console.log("Image height: ".concat(r,", width: ").concat(h)),l.next=10,new b.Z(h,r,255);case 10:for(o=l.sent,c=function(_,l,t){return 4*_+l*(16*Math.ceil(t/16))*4},s=function(_,l,t){return 4*_+l*t*4},d=function(_){var l=255&_,t=(16711680&_)>>16;return _&=4278255360,_|=l<<16,_|=t},m=0;m<r;m++)for(a=0;a<h;a++)f=g.readInt32LE(c(a,m,h)),o.bitmap.data.writeInt32LE(d(f),s(a,m,h));return l.next=17,o.getBufferAsync(b.Z.MIME_PNG);case 17:v=l.sent,k=new File([v],"out.png",{type:"image/png"}),(0,e.saveAs)(k);case 20:case"end":return l.stop()}}),l)}))),children:"Hello"})]})]})}},5301:function(_,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4065)}])},9904:function(_){_.exports={navbar:"navbar_navbar__RVszD"}},6224:function(_){_.exports={"markdown-body":"github_markdown-body__1FF9R",octicon:"github_octicon__3pv4p",anchor:"github_anchor__3lJ-v","octicon-link":"github_octicon-link__27fbw",comment:"github_comment__2qAKu","blob-num":"github_blob-num__33k_H","tab-size":"github_tab-size__Irsps","commit-tease-sha":"github_commit-tease-sha__365xK","blob-wrapper":"github_blob-wrapper__2MLfs","blob-wrapper-embedded":"github_blob-wrapper-embedded__3V45Y","blob-code":"github_blob-code__1-OUB","blob-code-inner":"github_blob-code-inner__YAHUh","pl-token":"github_pl-token__c9DzW",active:"github_active__1zbJ8","task-list-item":"github_task-list-item__2_SxK","task-list-item-checkbox":"github_task-list-item-checkbox__3VuFZ",rule:"github_rule__3ZJTb",border:"github_border__39yiO","border-0":"github_border-0__3wIhi","border-bottom":"github_border-bottom__1bXDJ","rounded-1":"github_rounded-1__1C6nc","color-text-tertiary":"github_color-text-tertiary__1eHh0","color-bg-primary":"github_color-bg-primary__3e7Yx","color-bg-secondary":"github_color-bg-secondary__1f0w2","mb-0":"github_mb-0__3Imu5","my-2":"github_my-2__1yHaC","pl-0":"github_pl-0__3JxIi","py-0":"github_py-0__2wQLv","pl-1":"github_pl-1__34JuB","pl-2":"github_pl-2__25QCb","py-2":"github_py-2__lOhov","pl-3":"github_pl-3__32IWl","px-3":"github_px-3__aii6z","pl-4":"github_pl-4__n4T7Z","pl-5":"github_pl-5__37p4-","pl-6":"github_pl-6__2m0fc","pl-7":"github_pl-7__ChTmT","pl-8":"github_pl-8__3Re3O","pl-9":"github_pl-9__kccuI","pl-10":"github_pl-10__1a_3w","pl-11":"github_pl-11__GflRQ","pl-12":"github_pl-12__2ICIx","pl-sm-0":"github_pl-sm-0__1wn37","pl-sm-1":"github_pl-sm-1__oiy73","pl-sm-2":"github_pl-sm-2__3EWX7","pl-sm-3":"github_pl-sm-3__uRVc8","pl-sm-4":"github_pl-sm-4___Klbr","pl-sm-5":"github_pl-sm-5__yZ3Ug","pl-sm-6":"github_pl-sm-6__1HqJx","pl-sm-7":"github_pl-sm-7__3VoK1","pl-sm-8":"github_pl-sm-8__1xVZW","pl-sm-9":"github_pl-sm-9__3_A_m","pl-sm-10":"github_pl-sm-10__2DrVs","pl-sm-11":"github_pl-sm-11__3UYg6","pl-sm-12":"github_pl-sm-12__31Emm","pl-md-0":"github_pl-md-0__1LSsW","pl-md-1":"github_pl-md-1__3dg1-","pl-md-2":"github_pl-md-2__DGY6Z","pl-md-3":"github_pl-md-3__1PUUE","pl-md-4":"github_pl-md-4__XqfN4","pl-md-5":"github_pl-md-5__1DjAA","pl-md-6":"github_pl-md-6__2i04j","pl-md-7":"github_pl-md-7__158hn","pl-md-8":"github_pl-md-8__2R606","pl-md-9":"github_pl-md-9__1nXoz","pl-md-10":"github_pl-md-10__2cItE","pl-md-11":"github_pl-md-11__2qI8j","pl-md-12":"github_pl-md-12__3jrZw","pl-lg-0":"github_pl-lg-0__210eV","pl-lg-1":"github_pl-lg-1__2YX2c","pl-lg-2":"github_pl-lg-2__2Qdd-","pl-lg-3":"github_pl-lg-3__14gaA","pl-lg-4":"github_pl-lg-4__SIUIS","pl-lg-5":"github_pl-lg-5__3psCL","pl-lg-6":"github_pl-lg-6__2_btk","pl-lg-7":"github_pl-lg-7__1NT3R","pl-lg-8":"github_pl-lg-8__1AxTv","pl-lg-9":"github_pl-lg-9__2KgLc","pl-lg-10":"github_pl-lg-10__1-Ce9","pl-lg-11":"github_pl-lg-11__2jFki","pl-lg-12":"github_pl-lg-12__GmK8b","pl-xl-0":"github_pl-xl-0__c00If","pl-xl-1":"github_pl-xl-1__3-THR","pl-xl-2":"github_pl-xl-2__3VX9g","pl-xl-3":"github_pl-xl-3__1Yfhf","pl-xl-4":"github_pl-xl-4__23ZpA","pl-xl-5":"github_pl-xl-5__3BuLy","pl-xl-6":"github_pl-xl-6__3M8eD","pl-xl-7":"github_pl-xl-7__1FKL8","pl-xl-8":"github_pl-xl-8__303ZZ","pl-xl-9":"github_pl-xl-9__2tgFC","pl-xl-10":"github_pl-xl-10__2rowt","pl-xl-11":"github_pl-xl-11__2k9Gu","pl-xl-12":"github_pl-xl-12__28YrZ",f6:"github_f6__xSJfg","lh-condensed":"github_lh-condensed__8vc1Z","text-bold":"github_text-bold__vjZwY",highlight:"github_highlight__a9No7"}},2987:function(){},8104:function(){},3731:function(){},2361:function(){},4616:function(){}},function(_){_.O(0,[488,774,888,179],(function(){return l=5301,_(_.s=l);var l}));var l=_.O();_N_E=l}]);