"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[976],{619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(4848),r=n(8453);const a={sidebar_position:1},o="Introduction",s={id:"intro",title:"Introduction",description:"Getting Started",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/Kenya-Open-Data/docs/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Constituencies",permalink:"/Kenya-Open-Data/docs/category/constituencies"}},c={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Header Authentication",id:"header-authentication",level:3},{value:"Rate Limiting",id:"rate-limiting",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(t.p,{children:"Get started by creating an account to get and receive the API key."}),"\n",(0,i.jsx)(t.h2,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsx)(t.p,{children:"The API requires an API key for authentication. You can pass the API key either through the request headers or as a query parameter."}),"\n",(0,i.jsx)(t.h3,{id:"header-authentication",children:"Header Authentication"}),"\n",(0,i.jsxs)(t.p,{children:["Place the API key in the ",(0,i.jsx)(t.code,{children:"x-api-key"})," header:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'    curl -X GET http://localhost:3000/counties \\\n         -H "x-api-key: your api key"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Alternatively, you can pass the API key as a query parameter:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"    curl -X GET http://localhost:3000/counties?API_KEY=your api key \n"})}),"\n",(0,i.jsxs)(t.p,{children:["When there is other query parameters the ",(0,i.jsx)(t.code,{children:"API_KEY"})," paramter should come first."]}),"\n",(0,i.jsx)(t.h2,{id:"rate-limiting",children:"Rate Limiting"}),"\n",(0,i.jsxs)(t.p,{children:["The API enforces rate limiting to prevent abuse. The default rate limit is 10 requests per minute. If you exceed this limit, you will receive a ",(0,i.jsx)(t.code,{children:"429 Too Many Requests"})," response."]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var i=n(6540);const r={},a=i.createContext(r);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);