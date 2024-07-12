"use strict";(self.webpackChunkfydetab_wiki=self.webpackChunkfydetab_wiki||[]).push([[547],{780:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=t(4848),s=t(8453);const r={id:"unbrick_the_fydetab_duo",title:"\ud83e\uddf1 Unbrick the Fydetab Duo"},o="\ud83e\uddf1 Unbricking the Fydetab Duo",d={id:"unbrick_the_fydetab_duo",title:"\ud83e\uddf1 Unbrick the Fydetab Duo",description:'Has your Fydetab Duo fallen victim to the dreaded "brick" during a custom firmware adventure? Fear not! This guide will walk you through the resurrection process.',source:"@site/docs/6. Unbrick your Fydetab Duo.md",sourceDirName:".",slug:"/unbrick_the_fydetab_duo",permalink:"/zh-Hans/unbrick_the_fydetab_duo",draft:!1,unlisted:!1,editUrl:"https://github.com/FydeOS/fydetabduo-wiki/tree/main/docs/6. Unbrick your Fydetab Duo.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"unbrick_the_fydetab_duo",title:"\ud83e\uddf1 Unbrick the Fydetab Duo"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd29 \u5173\u952e\u786c\u4ef6\u7ec4\u4ef6",permalink:"/zh-Hans/key_hardware_components"},next:{title:"\ud83d\udccb OS Release Board",permalink:"/zh-Hans/category/-os-release-board"}},c={},l=[{value:"Method 1: Reflashing the Official Image",id:"method-1-reflashing-the-official-image",level:2},{value:"Method 2: PCB-Level Intervention",id:"method-2-pcb-level-intervention",level:2},{value:"Step-by-Step PCB Access",id:"step-by-step-pcb-access",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"-unbricking-the-fydetab-duo",children:"\ud83e\uddf1 Unbricking the Fydetab Duo"}),"\n",(0,i.jsx)(n.p,{children:'Has your Fydetab Duo fallen victim to the dreaded "brick" during a custom firmware adventure? Fear not! This guide will walk you through the resurrection process.'}),"\n",(0,i.jsx)(n.h2,{id:"method-1-reflashing-the-official-image",children:"Method 1: Reflashing the Official Image"}),"\n",(0,i.jsx)(n.p,{children:"For most cases, this straightforward approach should do the trick:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Enter Loader mode:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Press and hold both the ",(0,i.jsx)(n.code,{children:"Volume Up"})," and ",(0,i.jsx)(n.code,{children:"Power"})," buttons simultaneously."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Flash the official FydeOS image following our ",(0,i.jsx)(n.a,{href:"/flashing_the_fydetab_duo",children:"standard flashing procedure"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"method-2-pcb-level-intervention",children:"Method 2: PCB-Level Intervention"}),"\n",(0,i.jsx)(n.p,{children:"When all else fails, we'll need to go deeper. This requires some hands-on work."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,i.jsx)(n.strong,{children:"Warning:"})," This process involves disassembling your device. Proceed with caution, as there's a risk of hardware damage."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-by-step-pcb-access",children:"Step-by-Step PCB Access"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Force shutdown:"})," Hold the power button for a full 10 seconds."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Screen removal:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Gently pry the edge of the screen using a plastic card or specialized tool."}),"\n",(0,i.jsx)(n.li,{children:"Exercise extreme caution: The screen connects to the motherboard via a delicate ribbon cable."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Safety first:"})," Immediately disconnect the battery to prevent potential shorts."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Disconnecting the power cable",src:t(2844).A+"",width:"960",height:"1280"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Entering Maskrom mode:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Locate the ",(0,i.jsx)(n.code,{children:"MASKROM"})," button on the PCB (see image below)."]}),"\n",(0,i.jsx)(n.li,{children:"Press and hold the button while connecting the tablet to your PC via USB."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Fydetab Maskrom button location",src:t(2408).A+"",width:"1280",height:"721"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Reflash:"})," Now that you're in Maskrom mode, follow our ",(0,i.jsx)(n.a,{href:"/flashing_the_fydetab_duo",children:"detailed flashing guide"})," to restore your device."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},2844:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/disconnect-power-cable-9dcafec0c549ad0734b30698ce9ce1e3.jpeg"},2408:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/fydetab_maskrom_button_pcb-6859a59f6d57c611a9b2c81868a44778.jpg"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);