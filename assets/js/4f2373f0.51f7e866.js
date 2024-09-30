"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[632],{2175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var o=t(6070),i=t(5710);const s={sidebar_label:"Get county by code",sidebar_postion:2},c="Get county by code",a={id:"counties/get-counties-by-county-code",title:"Get county by code",description:"This endpoint retrieves detailed information about a specific county in Kenya based on its county code as a query parameter.",source:"@site/docs/counties/get-counties-by-county-code.md",sourceDirName:"counties",slug:"/counties/get-counties-by-county-code",permalink:"/Kenya-Open-Data/docs/counties/get-counties-by-county-code",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Get county by code",sidebar_postion:2},sidebar:"tutorialSidebar",previous:{title:"Get constituencies by county",permalink:"/Kenya-Open-Data/docs/counties/get-constituencies-by-county"},next:{title:"Get county by size",permalink:"/Kenya-Open-Data/docs/counties/get-counties-by-size"}},r={},u=[{value:"Response Format:",id:"response-format",level:3},{value:"Example Response:",id:"example-response",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"get-county-by-code",children:"Get county by code"}),"\n",(0,o.jsx)(n.p,{children:"This endpoint retrieves detailed information about a specific county in Kenya based on its county code as a query parameter."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'    curl -X GET https://kenya-open-data.onrender.com/api/v1/counties/:countyCode  \\\n         -H "x-api-key: your api key"\n'})}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'    curl -X GET https://kenya-open-data.onrender.com/api/v1/counties/001  \\\n         -H "x-api-key: your api key"\n'})}),"\n",(0,o.jsx)(n.h3,{id:"response-format",children:"Response Format:"}),"\n",(0,o.jsx)(n.p,{children:"The endpoint will typically return an object representing the county, including the following fields:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"County Code: A unique identifier for the county."}),"\n",(0,o.jsx)(n.li,{children:"County Name: The official name of the county."}),"\n",(0,o.jsx)(n.li,{children:"Size: The size of the county in square kilomtetres"}),"\n",(0,o.jsx)(n.li,{children:"Population: The estimated population of the county."}),"\n",(0,o.jsx)(n.li,{children:"Other relevant data: Additional information such as area, capital city, governor,deputy governor, women representative and constituencies which contain an array of objects."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"example-response",children:"Example Response:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'\n{\n  "countyCode": "001",\n  "countyName": "Mombasa (County)",\n  "size": 220,\n  "population": 1208333,\n  "populationDensity": 5495,\n  "numberOfHouseholds": 378422,\n  "averageHouseholdSize": 3,\n  "sexRatio": 102,\n  "capital": "Mombasa (City)",\n  "governor": "Abdullswammad\xa0 Sherif Nassir",\n  "deputyGovernor": "Francis Thoya",\n  "womenRepresentative": "Zamzam Mohamed",\n  "constituencies": [\n    {\n      "Constituency Code": "005",\n      "Constituency Name": "LIKONI"\n    },\n    {\n      "Constituency Code": "002",\n      "Constituency Name": "JOMVU"\n    },\n    {\n      "Constituency Code": "001",\n      "Constituency Name": "CHANGAMWE"\n    },\n    {\n      "Constituency Code": "004",\n      "Constituency Name": "NYALI"\n    },\n    {\n      "Constituency Code": "003",\n      "Constituency Name": "KISAUNI"\n    },\n    {\n      "Constituency Code": "006",\n      "Constituency Name": "MVITA"\n    }\n  ]\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},5710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var o=t(758);const i={},s=o.createContext(i);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);