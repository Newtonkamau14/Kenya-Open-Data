"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[954],{9847:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(4848),i=t(8453);const o={sidebar_label:"Get all constituencies",sidebar_postion:1},c="Get all constituencies",r={id:"constituencies/get-constituencies",title:"Get all constituencies",description:"This endpoint retrieves a comprehensive list of all constituencies in Kenya, providing essential information about each one.",source:"@site/docs/constituencies/get-constituencies.md",sourceDirName:"constituencies",slug:"/constituencies/get-constituencies",permalink:"/Kenya-Open-Data/docs/constituencies/get-constituencies",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Get all constituencies",sidebar_postion:1},sidebar:"tutorialSidebar",previous:{title:"Get constituency by code",permalink:"/Kenya-Open-Data/docs/constituencies/get-constituency-by-code"},next:{title:"Counties",permalink:"/Kenya-Open-Data/docs/category/counties"}},a={},l=[{value:"Response Format:",id:"response-format",level:3},{value:"Example Response:",id:"example-response",level:3}];function u(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"get-all-constituencies",children:"Get all constituencies"}),"\n",(0,s.jsx)(n.p,{children:"This endpoint retrieves a comprehensive list of all constituencies in Kenya, providing essential information about each one."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'    curl -X GET http://localhost:3000/constituencies \\\n         -H "x-api-key: your api key"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"response-format",children:"Response Format:"}),"\n",(0,s.jsx)(n.p,{children:"The endpoint will typically return a list of objects, each representing a constituencies. The objects may include the following fields:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Constituency Code: The unique code for the constituency"}),"\n",(0,s.jsx)(n.li,{children:"Constituency Name: The official name of the constituency.\nCounty: The county to which the constituency belongs."}),"\n",(0,s.jsx)(n.li,{children:"Registered Voters: The total number of registered voters within the constituency."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-response",children:"Example Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "constituencyCode": "001",\n    "constituencyName": "CHANGAMWE",\n    "registeredVoters": 93561\n  },\n  {\n    "constituencyCode": "002",\n    "constituencyName": "JOMVU",\n    "registeredVoters": 75085\n  },\n  {\n    "constituencyCode": "003",\n    "constituencyName": "KISAUNI",\n    "registeredVoters": 135276\n  },\n  {\n    "constituencyCode": "004",\n    "constituencyName": "NYALI",\n    "registeredVoters": 124253\n  },\n  {\n    "constituencyCode": "005",\n    "constituencyName": "LIKONI",\n    "registeredVoters": 94764\n  },\n  {\n    "constituencyCode": "006",\n    "constituencyName": "MVITA",\n    "registeredVoters": 118974\n  },\n  {\n    "constituencyCode": "007",\n    "constituencyName": "MSAMBWENI",\n    "registeredVoters": 82261\n  }\n]\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(6540);const i={},o=s.createContext(i);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);