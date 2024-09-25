"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[151],{2181:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>r});var o=t(6070),s=t(5710);const c={sidebar_label:"Get constituencies by county",sidebar_postion:10},i="Get constituencies by county",u={id:"counties/get-constituencies-by-county",title:"Get constituencies by county",description:"This endpoint retrieves a list of constituencies within a specific county in Kenya.",source:"@site/docs/counties/get-constituencies-by-county.md",sourceDirName:"counties",slug:"/counties/get-constituencies-by-county",permalink:"/Kenya-Open-Data/docs/counties/get-constituencies-by-county",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Get constituencies by county",sidebar_postion:10},sidebar:"tutorialSidebar",previous:{title:"Get all counties",permalink:"/Kenya-Open-Data/docs/counties/get-all-counties"},next:{title:"Get county by code",permalink:"/Kenya-Open-Data/docs/counties/get-counties-by-county-code"}},a={},r=[{value:"Response Format:",id:"response-format",level:3},{value:"Example Response:",id:"example-response",level:3}];function l(n){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"get-constituencies-by-county",children:"Get constituencies by county"}),"\n",(0,o.jsx)(e.p,{children:"This endpoint retrieves a list of constituencies within a specific county in Kenya."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'    curl -X GET https://kenya-open-data.onrender.com/counties/constituencies \\\n         -H "x-api-key: your api key"\n'})}),"\n",(0,o.jsx)(e.h3,{id:"response-format",children:"Response Format:"}),"\n",(0,o.jsx)(e.p,{children:"The endpoint will typically return a list of objects, each representing a constituency. The objects may include the following fields:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"County Name: The officail name of th county."}),"\n",(0,o.jsx)(e.li,{children:"Constituencies: An array of objects with each object containing constituency code  and constituency name."}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"example-response",children:"Example Response:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:'[\n  {\n    "countyName": "Baringo",\n    "constituencies": [\n      {\n        "Constituency Code": "157",\n        "Constituency Name": "TIATY"\n      },\n      {\n        "Constituency Code": "158",\n        "Constituency Name": "BARINGO NORTH"\n      },\n      {\n        "Constituency Code": "160",\n        "Constituency Name": "BARINGO SOUTH"\n      },\n      {\n        "Constituency Code": "161",\n        "Constituency Name": "MOGOTIO"\n      },\n      {\n        "Constituency Code": "162",\n        "Constituency Name": "ELDAMA RAVINE"\n      },\n      {\n        "Constituency Code": "159",\n        "Constituency Name": "BARINGO CENTRAL"\n      }\n    ]\n  },\n  {\n    "countyName": "Bomet",\n    "constituencies": [\n      {\n        "Constituency Code": "194",\n        "Constituency Name": "SOTIK"\n      },\n      {\n        "Constituency Code": "198",\n        "Constituency Name": "KONOIN"\n      },\n      {\n        "Constituency Code": "196",\n        "Constituency Name": "BOMET EAST"\n      },\n      {\n        "Constituency Code": "197",\n        "Constituency Name": "BOMET CENTRAL"\n      },\n      {\n        "Constituency Code": "195",\n        "Constituency Name": "CHEPALUNGU"\n      }\n    ]\n  }\n]\n'})})]})}function y(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},5710:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>u});var o=t(758);const s={},c=o.createContext(s);function i(n){const e=o.useContext(c);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function u(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),o.createElement(c.Provider,{value:e},n.children)}}}]);