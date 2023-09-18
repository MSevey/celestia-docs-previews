"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4837],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4035:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(7462),o=(a(7294),a(4137));const l={sidebar_label:"Build modular",description:"Advantages of building on modular blockchains like Celestia."},r="Build modular",i={unversionedId:"developers/build-modular",id:"developers/build-modular",title:"Build modular",description:"Advantages of building on modular blockchains like Celestia.",source:"@site/docs/developers/build-modular.md",sourceDirName:"developers",slug:"/developers/build-modular",permalink:"/pr-preview/pr-1/developers/build-modular",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/build-modular.md",tags:[],version:"current",frontMatter:{sidebar_label:"Build modular",description:"Advantages of building on modular blockchains like Celestia."},sidebar:"developers",previous:{title:"Overview",permalink:"/pr-preview/pr-1/developers/overview"},next:{title:"Wallets on Celestia",permalink:"/pr-preview/pr-1/developers/wallets"}},s={},u=[{value:"What is a modular blockchain?",id:"what-is-a-modular-blockchain",level:2},{value:"Ease of deploying a chain",id:"ease-of-deploying-a-chain",level:2},{value:"Scaling",id:"scaling",level:2},{value:"Customizability",id:"customizability",level:2},{value:"Building on Celestia",id:"building-on-celestia",level:2},{value:"Smart contracts",id:"smart-contracts",level:3},{value:"Sovereign rollups",id:"sovereign-rollups",level:3},{value:"Rollups",id:"rollups",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...l}=e;return(0,o.kt)(p,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-modular"},"Build modular"),(0,o.kt)("p",null,"\u201cI\u2019m a developer, and I want to know what the benefits of modular blockchains\nare for me!\u201d"),(0,o.kt)("p",null,"You\u2019ve come to the right place. This page will give you the rundown on modular\nblockchains and their benefits for developers like you."),(0,o.kt)("p",null,"If you already know all this, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/developers/build-modular/#building-on-celestia"},"skip to the end"),"\nto get straight into building."),(0,o.kt)("h2",{id:"what-is-a-modular-blockchain"},"What is a modular blockchain?"),(0,o.kt)("p",null,"With blockchains there are more or less four core functions that they do."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Execution"),": transaction execution and state update."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Settlement"),": finality and dispute resolution."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Consensus"),": agreement on transaction ordering."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data availability"),": prove data was published to the network.")),(0,o.kt)("p",null,"Modular blockchains specialize in one or two of these functions rather\nthan doing all of them like a monolithic blockchain. You probably know\nabout layer 1s and layer 2s. That\u2019s the general idea."),(0,o.kt)("p",null,"A typical example of a modular blockchain you might\u2019ve heard of is a\nrollup. Rollups host smart contracts and execute transactions, much like\nany monolithic chain. But, the data of those transactions get sent to a\nlayer 1 blockchain to carry out the remaining functions."),(0,o.kt)("p",null,"If you want to brush up on your understanding of modular blockchains,\nhead over to ",(0,o.kt)("a",{parentName:"p",href:"https://celestia.org/learn/"},"Learn Modular"),"."),(0,o.kt)("h2",{id:"ease-of-deploying-a-chain"},"Ease of deploying a chain"),(0,o.kt)("p",null,"One of the goals of modular blockchains is to make it as easy to deploy\na blockchain as a smart contract. There are a few unique ways that\nmodular blockchains can significantly reduce the cost of deploying a\nnew blockchain."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"No validator set is required"),". Rollups can deploy without sourcing\ntheir own set of validators or sequencers."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Inherit security from the start"),". Rollups don\u2019t need to build all\ntheir security from scratch."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Any part of the stack can be delegated"),". Development time can be\nreduced by outsourcing functions of the rollup to external providers.")),(0,o.kt)("p",null,"All in all, builders will be able to outsource as much of the stackas\nthey need. Deploying a new blockchain will be as simple as clicking a\nfew options to initialize a production-ready rollup."),(0,o.kt)("h2",{id:"scaling"},"Scaling"),(0,o.kt)("p",null,"Of course, a much higher scale is necessary if we want to support\nmany more users. And modular blockchains use some new innovative\ntechnologies that can help us get there."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://celestia.org/glossary/data-availability-sampling/"},"Data availability sampling"),"\nenables modular blockchains like Celestia to scale data availability with the\nnumber of light nodes - that means more capacity for rollups."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fraud and validity proofs")," make rollups vastly more efficient\nto verify. Nodes only need to verify a small proof of transaction\nvalidity (",(0,o.kt)("a",{parentName:"li",href:"https://celestia.org/glossary/validity-proof/"},"validity proof"),")\nor assume transactions are valid by default\n(",(0,o.kt)("a",{parentName:"li",href:"https://celestia.org/glossary/state-transition-fraud-proof/"},"fraud proof"),").\nThis means rollups don\u2019t require every node in the network to re-execute\nevery transaction.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(7227).Z,width:"1499",height:"1265"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Decoupling execution from consensus")," lets developers define the VM\nthat best fits the scaling needs of their application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Separating applications")," across multiple rollups isolates congestion.\nIf an application congests the execution capacity of one rollup, all\nother rollups remain unaffected in their execution capacity.")),(0,o.kt)("p",null,"All these scaling properties combined make new types of applications\nand features possible, like onchain gaming, dynamic metadata, and\nephemeral rollups, to name a few."),(0,o.kt)("h2",{id:"customizability"},"Customizability"),(0,o.kt)("p",null,"By design, modular blockchains don\u2019t lock in any feature set.\nThey promote experimentation and customization."),(0,o.kt)("p",null,"Remember how decoupling execution from consensus enables VM\ncustomizability? Well, rollups are the execution component. Applications\ncan run on their own rollup and adjust the VM to maximize their\napplication's performance. Developers have that flexibility because\nCelestia's execution logic doesn't restrict rollups."),(0,o.kt)("p",null,"Basically, rollups can be customized to integrate any new or existing\nVM stack."),(0,o.kt)("p",null,"With existing rollup frameworks, developers can run rollup testnets\nusing the EVM or Cosmos SDK. In the future, one can imagine a variety\nof VMs that rollup frameworks support, providing developers with more\nout-of-the-box options for their applications."),(0,o.kt)("p",null,"Some customizations that could be made to a rollup's VM include\ncustom precompiles, changing transaction processing from sequential\nto parallel, or adding support for private smart contracts."),(0,o.kt)("p",null,"All of this only scratches the surface."),(0,o.kt)("h2",{id:"building-on-celestia"},"Building on Celestia"),(0,o.kt)("p",null,"So, you\u2019re ready to start experimenting and building on Celestia?\nHere are a few options that are currently available for developers."),(0,o.kt)("h3",{id:"smart-contracts"},"Smart contracts"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://bubstestnet.com/"},"Bubs testnet")," is a dedicated EVM-compatible\nrollup that developerscan use to test and deploy smart contract\napplications."),(0,o.kt)("h3",{id:"sovereign-rollups"},"Sovereign rollups"),(0,o.kt)("p",null,"Developers can build applications on a sovereign rollup testnet\non Celestia. ",(0,o.kt)("a",{parentName:"p",href:"https://rollkit.dev/"},"Rollkit")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Sovereign-Labs/sovereign-sdk/tree/main/examples/demo-rollup"},"Sovereign SDK"),"\nprovide frameworks for deploying sovereign rollup testnets\non Celestia."),(0,o.kt)("h3",{id:"rollups"},"Rollups"),(0,o.kt)("p",null,"Developers can also build rollup testnets for their applications\nusing ",(0,o.kt)("a",{parentName:"p",href:"https://docs.dymension.xyz/"},"Dymension\u2019s Rollapps")," or\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/developers/optimism-devnet/"},"Optimism\u2019s OP Stack"),"."))}d.isMDXComponent=!0},7227:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/da-and-validity-b2f114ce8f3f149f3e1ac2d616ba4200.png"}}]);