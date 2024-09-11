"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[526],{5770:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>r,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var o=t(4848),i=t(8453);const s={sidebar_label:"Get counties population density",sidebar_postion:6},a="Get counties population density",u={id:"counties/get-counties-population-density",title:"Get counties population density",description:"This endpoint retrieves information about the population density of each county in Kenya.",source:"@site/docs/counties/get-counties-population-density.md",sourceDirName:"counties",slug:"/counties/get-counties-population-density",permalink:"/Kenya-Open-Data/docs/counties/get-counties-population-density",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Get counties population density",sidebar_postion:6},sidebar:"tutorialSidebar",previous:{title:"Get counties household",permalink:"/Kenya-Open-Data/docs/counties/get-counties-household"},next:{title:"Get counties population",permalink:"/Kenya-Open-Data/docs/counties/get-counties-population"}},c={},l=[{value:"Response Format:",id:"response-format",level:3},{value:"Example Response:",id:"example-response",level:3}];function p(n){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"get-counties-population-density",children:"Get counties population density"}),"\n",(0,o.jsx)(e.p,{children:"This endpoint retrieves information about the population density of each county in Kenya."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'    curl -X GET http://localhost:3000/counties/populationdensity \\\n         -H "x-api-key: your api key"\n'})}),"\n",(0,o.jsx)(e.h3,{id:"response-format",children:"Response Format:"}),"\n",(0,o.jsx)(e.p,{children:"The endpoint will typically return a list of objects, each representing a county. The objects may include the following fields:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"County Code: A unique identifier for the county."}),"\n",(0,o.jsx)(e.li,{children:"County Name: The official name of the county."}),"\n",(0,o.jsx)(e.li,{children:"PopulationDensity: The population density of the county, calculated as the population divided by the area."}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"example-response",children:"Example Response:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:'\n[\n  {\n    "countyCode": "022",\n    "countyName": "Kiambu",\n    "populationDensity": 952\n  },\n  {\n    "countyCode": "002",\n    "countyName": "Kwale",\n    "populationDensity": 105\n  },\n  {\n    "countyCode": "046",\n    "countyName": "Nyamira",\n    "populationDensity": 675\n  },\n  {\n    "countyCode": "029",\n    "countyName": "Nandi",\n    "populationDensity": 310\n  },\n  {\n    "countyCode": "031",\n    "countyName": "Laikipia",\n    "populationDensity": 54\n  },\n  {\n    "countyCode": "041",\n    "countyName": "Siaya",\n    "populationDensity": 393\n  },\n  {\n    "countyCode": "010",\n    "countyName": "Marsabit",\n    "populationDensity": 6\n  }\n]\n'})})]})}function r(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>u});var o=t(6540);const i={},s=o.createContext(i);function a(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function u(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);