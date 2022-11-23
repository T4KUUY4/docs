"use strict";(self.webpackChunkdatenschmutz_docs=self.webpackChunkdatenschmutz_docs||[]).push([[312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1,sidebar_label:"Voron S3 Backup",id:"S3-auto-backup",description:"Auto-Backup your printer config files with rClone to S3.",slug:"/S3-Auto-backup"},i="Backup your printer using S3 Storage",l={unversionedId:"scripts/voron-auto-backup/S3-auto-backup",id:"scripts/voron-auto-backup/S3-auto-backup",title:"Backup your printer using S3 Storage",description:"Auto-Backup your printer config files with rClone to S3.",source:"@site/docs/scripts/voron-auto-backup/voron-auto-backup-s3.md",sourceDirName:"scripts/voron-auto-backup",slug:"/S3-Auto-backup",permalink:"/docs/S3-Auto-backup",draft:!1,editUrl:"https://github.com/Datenschmutz/docs/tree/main/docs/scripts/voron-auto-backup/voron-auto-backup-s3.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Voron S3 Backup",id:"S3-auto-backup",description:"Auto-Backup your printer config files with rClone to S3.",slug:"/S3-Auto-backup"},sidebar:"tutorialSidebar",previous:{title:"Voron Backup Automation",permalink:"/docs/category/voron-backup-automation"},next:{title:"Voron Network Share Backup",permalink:"/docs/NAS-Auto-backup"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"rClone Setup for S3 Storage",id:"rclone-setup-for-s3-storage",level:3},{value:"Additional configuration options",id:"additional-configuration-options",level:3},{value:"Mentions, Credits and Sources",id:"mentions-credits-and-sources",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backup-your-printer-using-s3-storage"},"Backup your printer using S3 Storage"),(0,r.kt)("admonition",{title:"Disclaimer",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This script is WORK IN PROGRESS. BACKUP YOUR FILES MANUALLY!!!! I\xb4m not responsible for any not functioning printers or lost files!")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"S3 Storage"),(0,r.kt)("li",{parentName:"ul"},"Basic knowlage of rClone")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Download the installation script"',title:'"Download',the:!0,installation:!0,'script"':!0},"wget https://raw.githubusercontent.com/Datenschmutz/VORON/main/backup-script/install.sh\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Be aware that ",(0,r.kt)("strong",{parentName:"p"},"after executing the following command"),", the rClone ",(0,r.kt)("strong",{parentName:"p"},"Configuration will start automatically"),".\nCheck ",(0,r.kt)("a",{parentName:"p",href:"#Configuration"},(0,r.kt)("strong",{parentName:"a"},"Configuration"))," for instructions.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run installation script"',title:'"Run',installation:!0,'script"':!0},"bash install.sh\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Follow the instructions given in the script"),(0,r.kt)("h3",{id:"rclone-setup-for-s3-storage"},"rClone Setup for S3 Storage"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"I use S3 storage from ",(0,r.kt)("a",{parentName:"p",href:"https://contabo.com/object-storage/"},"Contabo")," based on Cleph for my tutorial, the configuration may differ for other providers.",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," for new remote storage"),(0,r.kt)("li",{parentName:"ul"},"Specify a rClone Destination ",(0,r.kt)("em",{parentName:"li"},"name"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"MyS3-Storage")),(0,r.kt)("li",{parentName:"ul"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"4")," for ",(0,r.kt)("em",{parentName:"li"},"Amazon S3 Compliant Storage Providers including AWS, Alibaba, Ceph, Digital Ocean, Dreamhost, IBM COS, Minio, SeaweedFS, and Tencent COS")),(0,r.kt)("li",{parentName:"ul"},"Select the S3 storage solution e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"3")," ",(0,r.kt)("em",{parentName:"li"},"for Ceph Object Storage")),(0,r.kt)("li",{parentName:"ul"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," for Enter AWS credentials in the next step."),(0,r.kt)("li",{parentName:"ul"},"Specify your ",(0,r.kt)("inlineCode",{parentName:"li"},"access_key"),", ",(0,r.kt)("em",{parentName:"li"},"e.g. 82046e8110804a43bf29c1ae426a724d")," for ",(0,r.kt)("em",{parentName:"li"},"access_key_id")),(0,r.kt)("li",{parentName:"ul"},"Specify your ",(0,r.kt)("inlineCode",{parentName:"li"},"secret_key"),", ",(0,r.kt)("em",{parentName:"li"},"e.g. 82e69bd7a52076c527154297a76c2233")," for ",(0,r.kt)("em",{parentName:"li"},"secret_access_key")),(0,r.kt)("li",{parentName:"ul"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"return")," to skip ",(0,r.kt)("em",{parentName:"li"},"region")),(0,r.kt)("li",{parentName:"ul"},"Specifiy the S3 URL, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"https://eu2.contabostorage.com")," for ",(0,r.kt)("em",{parentName:"li"},"endpoint")),(0,r.kt)("li",{parentName:"ul"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"return")," to skip ",(0,r.kt)("em",{parentName:"li"},"location_constraint")),(0,r.kt)("li",{parentName:"ul"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"return")," to skip ",(0,r.kt)("em",{parentName:"li"},"acl")),(0,r.kt)("li",{parentName:"ul"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"return")," to skip ",(0,r.kt)("em",{parentName:"li"},"server_side_encryption")),(0,r.kt)("li",{parentName:"ul"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"return")," to skip ",(0,r.kt)("em",{parentName:"li"},"sse_kms_key_id")),(0,r.kt)("li",{parentName:"ul"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," for ",(0,r.kt)("em",{parentName:"li"},"Edit advanced config")),(0,r.kt)("li",{parentName:"ul"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"y")," for ",(0,r.kt)("em",{parentName:"li"},"Yes this is OK (default)")),(0,r.kt)("li",{parentName:"ul"},"Optionally specify ",(0,r.kt)("inlineCode",{parentName:"li"},"q")," to ",(0,r.kt)("em",{parentName:"li"},"quit configuration mode"))),(0,r.kt)("h3",{id:"additional-configuration-options"},"Additional configuration options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The backup script has some additional configuration options. Open it with the following command.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /home/$USER/backup.sh\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"mentions-credits-and-sources"},"Mentions, Credits and Sources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Thanks to @T4KUUY4 for the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/T4KUUY4/Voron-Stuff/tree/main/Automatic%20Backup"},"foundation")," of this script!")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Variation of the rCLone setup manual from Contabo - ",(0,r.kt)("a",{parentName:"li",href:"https://docs.contabo.com/docs/products/Object-Storage/Tools/rclone"},"Link"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);