"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[227],{5143:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>r,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var t=o(4848),i=o(8453);const a={sidebar_label:"Get counties population",sidebar_postion:5},s="Get counties population",u={id:"counties/get-counties-population",title:"Get counties population",description:"This endpoint retrieves information about the population of each county in Kenya.",source:"@site/docs/counties/get-counties-population.md",sourceDirName:"counties",slug:"/counties/get-counties-population",permalink:"/Kenya-Open-Data/docs/counties/get-counties-population",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Get counties population",sidebar_postion:5},sidebar:"tutorialSidebar",previous:{title:"Get counties population density",permalink:"/Kenya-Open-Data/docs/counties/get-counties-population-density"},next:{title:"Get counties registered voters",permalink:"/Kenya-Open-Data/docs/counties/get-counties-registered-voters"}},c={},p=[{value:"Response Format:",id:"response-format",level:3},{value:"Example Response:",id:"example-response",level:3}];function l(n){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"get-counties-population",children:"Get counties population"}),"\n",(0,t.jsx)(e.p,{children:"This endpoint retrieves information about the population of each county in Kenya."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'    curl -X GET http://localhost:3000/counties/population \\\n         -H "x-api-key: your api key"\n'})}),"\n",(0,t.jsx)(e.h3,{id:"response-format",children:"Response Format:"}),"\n",(0,t.jsx)(e.p,{children:"The endpoint will typically return a list of objects, each representing a county. The objects may include the following fields:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"County Code: A unique identifier for the county."}),"\n",(0,t.jsx)(e.li,{children:"County Name: The official name of the county."}),"\n",(0,t.jsx)(e.li,{children:"Population: The total population of the county."}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"example-response",children:"Example Response:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'[\n  {\n    "countyCode": "022",\n    "countyName": "Kiambu",\n    "population": 2417735\n  },\n  {\n    "countyCode": "002",\n    "countyName": "Kwale",\n    "population": 866820\n  },\n  {\n    "countyCode": "046",\n    "countyName": "Nyamira",\n    "population": 605576\n  },\n  {\n    "countyCode": "029",\n    "countyName": "Nandi",\n    "population": 885711\n  },\n  {\n    "countyCode": "031",\n    "countyName": "Laikipia",\n    "population": 518560\n  },\n  {\n    "countyCode": "041",\n    "countyName": "Siaya",\n    "population": 993183\n  },\n  {\n    "countyCode": "010",\n    "countyName": "Marsabit",\n    "population": 459785\n  }\n]\n'})})]})}function r(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>s,x:()=>u});var t=o(6540);const i={},a=t.createContext(i);function s(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function u(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);