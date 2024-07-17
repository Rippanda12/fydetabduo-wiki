"use strict";(self.webpackChunkfydetab_wiki=self.webpackChunkfydetab_wiki||[]).push([[676],{9880:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=o(4848),i=o(8453);const r={id:"u-boot",title:"Quick Guide to Boot Modes & Bootloader Guide"},t=void 0,d={id:"Hacking your Fydetab Duo/u-boot",title:"Quick Guide to Boot Modes & Bootloader Guide",description:"Entering Loader / Recovery Mode",source:"@site/docs/Hacking your Fydetab Duo/1.Fydetab Duo Boot Modes & Bootloader Guide.md",sourceDirName:"Hacking your Fydetab Duo",slug:"/Hacking your Fydetab Duo/u-boot",permalink:"/Hacking your Fydetab Duo/u-boot",draft:!1,unlisted:!1,editUrl:"https://github.com/FydeOS/fydetabduo-wiki/tree/main/docs/Hacking your Fydetab Duo/1.Fydetab Duo Boot Modes & Bootloader Guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"u-boot",title:"Quick Guide to Boot Modes & Bootloader Guide"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udee0\ufe0f Hacking your Fydetab Duo",permalink:"/category/\ufe0f-hacking-your-fydetab-duo"},next:{title:"\ud83d\udd29 Key hardware components",permalink:"/key_hardware_components"}},l={},c=[{value:"Entering Loader / Recovery Mode",id:"entering-loader--recovery-mode",level:2},{value:"Entering USB Mass Storage(UMS) Mode",id:"entering-usb-mass-storageums-mode",level:2},{value:"Low Power Charge Mode",id:"low-power-charge-mode",level:2},{value:"Compiling and Replacing U-Boot",id:"compiling-and-replacing-u-boot",level:2},{value:"Customising U-Boot Display Images",id:"customising-u-boot-display-images",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"entering-loader--recovery-mode",children:"Entering Loader / Recovery Mode"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Loader Mode Image",src:o(9576).A+"",width:"2560",height:"1440"})}),"\n",(0,s.jsx)(n.p,{children:"To access the Loader Mode on your Fydetab Duo, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Shut down the Device"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure your Fydetab Duo is completely powered off."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Connect USB Cable"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Insert a USB cable into the Fydetab Duo and the host device."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Activate Loader Mode"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Press and hold both the Volume Up button and the Power button simultaneously."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Confirm Loader Mode"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The Fydetab Duo will boot into Loader Mode, allowing firmware updates and other maintenance tasks."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"entering-usb-mass-storageums-mode",children:"Entering USB Mass Storage(UMS) Mode"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"UMS Image",src:o(3623).A+"",width:"2560",height:"1440"})}),"\n",(0,s.jsx)(n.p,{children:"To put your Fydetab Duo into UMS Mode, proceed with the following:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Shut down the Device"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure the Fydetab Duo is turned off."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Prepare for UMS Mode"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Press and hold the Volume Down button and the Power button simultaneously."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Connect USB Cable"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Plug in a USB cable to the Fydetab Duo and the host device."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Confirm UMS Mode"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The device will enter UMS Mode, acting as a USB disk that can be accessed by the host computer."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"low-power-charge-mode",children:"Low Power Charge Mode"}),"\n",(0,s.jsx)(n.p,{children:"Understanding the low power charging behaviour in U-Boot:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Critical Battery Level ",(0,s.jsx)(n.code,{children:"<3%"})]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the battery capacity falls below 3% and the device is not connected to a charger, U-Boot will automatically shut down the system to protect the battery and your data."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["Low Battery Level ",(0,s.jsx)(n.code,{children:"<8%"})]}),"\n",(0,s.jsx)(n.img,{alt:"Low Battery Image",src:o(8570).A+"",width:"2560",height:"1440"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the battery capacity is below 8%, U-Boot will remain on the charging screen until the battery charges to at least 8%, preventing the device from booting until it reaches a safer charge level."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"compiling-and-replacing-u-boot",children:"Compiling and Replacing U-Boot"}),"\n",(0,s.jsx)(n.p,{children:"Follow these instructions to compile U-Boot and replace the original firmware on your Fydetab Duo:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Update Overlay"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ensure you have the ",(0,s.jsx)(n.a,{href:"https://github.com/openFyde/overlay-fydetab_duo-openfyde/commit/42dd10c82cd0fdbb8880dd1e00cc7dfd7b32f4cd#diff-93ad86d362c5df27f11a47c79972d465f70f322c92b4ae25798364bd1ce8614e",children:"latest version"})," of ",(0,s.jsx)(n.a,{href:"https://github.com/openFyde/overlay-fydetab_duo-openfyde",children:"overlay-fydetab_duo-openfyde"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Compile U-Boot"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Enter the ",(0,s.jsx)(n.code,{children:"cros_sdk"})," environment."]}),"\n",(0,s.jsxs)(n.li,{children:["Execute the following command:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"emerge-${your_board} virtual/u-boot\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Locate Compiled Files"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If the compilation is successful, uboot.img and resource.img will be created in ",(0,s.jsx)(n.code,{children:"/build/${your_board}/boot"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Transfer Files to Device"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Copy the uboot.img and resource.img files to your Fydetab Duo."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Flash Images to eMMC"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use the following commands to flash the images:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"dd if=uboot.img of=/dev/mmcblk0p11 conv=fsync\ndd if=resource.img of=/dev/mmcblk0p10 conv=fsync\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"customising-u-boot-display-images",children:"Customising U-Boot Display Images"}),"\n",(0,s.jsx)(n.p,{children:"To personalise the splash images (they are exported as bitmap images in the file system) used in U-Boot, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Replace BMP Files"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.a,{href:"https://github.com/openFyde/overlay-fydetab_duo-openfyde/tree/main/sys-boot/rk-uboot-resource/files",children:"overlay-fydetab_duo-openfyde/sys-boot/rk-uboot-resource/files/"})," directory, replace the existing BMP files with your own (ensure the filenames remain unchanged)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Rebuild U-Boot Resource"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Enter the ",(0,s.jsx)(n.code,{children:"cros_sdk"})," environment."]}),"\n",(0,s.jsxs)(n.li,{children:["Run the following command:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"emerge-${your_board} rk-uboot-resource\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Transfer New Resource Image"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Copy the newly created resource.img from ",(0,s.jsx)(n.code,{children:"/build/${your_board}/boot"})," to your Fydetab Duo."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Flash New Resource Image"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use the following command to replace the original resource image on partition 10:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"dd if=resource.img of=/dev/mmcblk0p10 conv=fsync\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The following is our ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:o(1125).A+"",children:"design file"})," for the BMP images. Please note that there is a 90-degree rotation in the design file to fit the screen."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1125:(e,n,o)=>{o.d(n,{A:()=>s});const s=o.p+"assets/files/fydetab_batt-3a0f955474714e1b4564506d6ff97b0f.psd"},8570:(e,n,o)=>{o.d(n,{A:()=>s});const s=o.p+"assets/images/fydetab_batt-7e81bdf1ac030fcb79a07eef318263cb.jpeg"},9576:(e,n,o)=>{o.d(n,{A:()=>s});const s=o.p+"assets/images/fydetab_recovery-d828913255b718b8d603e3a46f0b1295.jpeg"},3623:(e,n,o)=>{o.d(n,{A:()=>s});const s=o.p+"assets/images/fydetab_usb-b6881d957bfeb8fe7565141a4e56627f.jpeg"},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>d});var s=o(6540);const i={},r=s.createContext(i);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);