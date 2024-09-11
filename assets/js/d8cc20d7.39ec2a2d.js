"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[996],{5183:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=o(4848),s=o(8453);const i={sidebar_label:"Get counties household",sidebar_postion:7},u="Get counties household",a={id:"counties/get-counties-household",title:"Get counties household",description:"This endpoint retrieves information about the number of households in each county of Kenya.",source:"@site/docs/counties/get-counties-household.md",sourceDirName:"counties",slug:"/counties/get-counties-household",permalink:"/Kenya-Open-Data/docs/counties/get-counties-household",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Get counties household",sidebar_postion:7},sidebar:"tutorialSidebar",previous:{title:"Get counties capital",permalink:"/Kenya-Open-Data/docs/counties/get-counties-capital"},next:{title:"Get counties population density",permalink:"/Kenya-Open-Data/docs/counties/get-counties-population-density"}},c={},l=[{value:"Response Format:",id:"response-format",level:3},{value:"Example Response:",id:"example-response",level:3}];function r(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"get-counties-household",children:"Get counties household"}),"\n",(0,t.jsx)(n.p,{children:"This endpoint retrieves information about the number of households in each county of Kenya."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'    curl -X GET http://localhost:3000/counties/households \\\n         -H "x-api-key: your api key"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"response-format",children:"Response Format:"}),"\n",(0,t.jsx)(n.p,{children:"The endpoint will typically return a list of objects, each representing a county. The objects may include the following fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"County Code: A unique identifier for the county."}),"\n",(0,t.jsx)(n.li,{children:"County Name: The official name of the county."}),"\n",(0,t.jsx)(n.li,{children:"NumberOfHouseholds: The total number of households within the county."}),"\n",(0,t.jsx)(n.li,{children:"AverageHouseholdSize: The average number of people per household in the county."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-response",children:"Example Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "countyCode": "022",\n    "countyName": "Kiambu",\n    "numberOfHouseholds": 795241,\n    "averageHouseholdSize": 3\n  },\n  {\n    "countyCode": "002",\n    "countyName": "Kwale",\n    "numberOfHouseholds": 173176,\n    "averageHouseholdSize": 5\n  },\n  {\n    "countyCode": "046",\n    "countyName": "Nyamira",\n    "numberOfHouseholds": 150669,\n    "averageHouseholdSize": 4\n  },\n  {\n    "countyCode": "029",\n    "countyName": "Nandi",\n    "numberOfHouseholds": 199426,\n    "averageHouseholdSize": 4\n  },\n  {\n    "countyCode": "031",\n    "countyName": "Laikipia",\n    "numberOfHouseholds": 149271,\n    "averageHouseholdSize": 3\n  },\n  {\n    "countyCode": "041",\n    "countyName": "Siaya",\n    "numberOfHouseholds": 250698,\n    "averageHouseholdSize": 4\n  },\n  {\n    "countyCode": "010",\n    "countyName": "Marsabit",\n    "numberOfHouseholds": 77495,\n    "averageHouseholdSize": 6\n  }\n]\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>u,x:()=>a});var t=o(6540);const s={},i=t.createContext(s);function u(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:u(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);