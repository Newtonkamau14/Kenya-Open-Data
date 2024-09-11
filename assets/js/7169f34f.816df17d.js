"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[371],{6498:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>r});var i=t(4848),a=t(8453);const o={sidebar_label:"Get counties capital",sidebar_postion:9},c="Get counties capital",s={id:"counties/get-counties-capital",title:"Get counties capital",description:"This endpoint retrieves a list of counties in Kenya, along with their respective capital cities.",source:"@site/docs/counties/get-counties-capital.md",sourceDirName:"counties",slug:"/counties/get-counties-capital",permalink:"/Kenya-Open-Data/docs/counties/get-counties-capital",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Get counties capital",sidebar_postion:9},sidebar:"tutorialSidebar",previous:{title:"Get county by size",permalink:"/Kenya-Open-Data/docs/counties/get-counties-by-size"},next:{title:"Get counties household",permalink:"/Kenya-Open-Data/docs/counties/get-counties-household"}},l={},r=[{value:"Response Format:",id:"response-format",level:3},{value:"Example Response:",id:"example-response",level:3}];function u(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"get-counties-capital",children:"Get counties capital"}),"\n",(0,i.jsx)(n.p,{children:"This endpoint retrieves a list of counties in Kenya, along with their respective capital cities."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'    curl -X GET http://localhost:3000/counties/capital \\\n         -H "x-api-key: your api key"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"response-format",children:"Response Format:"}),"\n",(0,i.jsx)(n.p,{children:"The endpoint will typically return a list of objects, each representing a county. The objects may include the following fields:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"County Code: A unique identifier for the county."}),"\n",(0,i.jsx)(n.li,{children:"County Name: The official name of the county."}),"\n",(0,i.jsx)(n.li,{children:"Capital City: The name of the county's capital city."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example-response",children:"Example Response:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "countyCode": "022",\n    "countyName": "Kiambu",\n    "capital": "Kiambu"\n  },\n  {\n    "countyCode": "002",\n    "countyName": "Kwale",\n    "capital": "Kwale"\n  },\n  {\n    "countyCode": "046",\n    "countyName": "Nyamira",\n    "capital": "Nyamira"\n  },\n  {\n    "countyCode": "029",\n    "countyName": "Nandi",\n    "capital": "Kapsabet"\n  },\n  {\n    "countyCode": "031",\n    "countyName": "Laikipia",\n    "capital": "Nanyuki"\n  },\n  {\n    "countyCode": "041",\n    "countyName": "Siaya",\n    "capital": "Siaya"\n  },\n  {\n    "countyCode": "010",\n    "countyName": "Marsabit",\n    "capital": "Marsabit"\n  }\n]\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var i=t(6540);const a={},o=i.createContext(a);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);