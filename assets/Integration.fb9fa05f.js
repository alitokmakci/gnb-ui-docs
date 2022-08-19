import{_ as c}from"./Layout.85369b4a.js";import{c as n,w as o,o as d,a as s,b as a,d as e,r as i}from"./index.5023e8b0.js";const l=s("div",{class:"card"},[s("h5",{class:"text-right pr-30 mb-10"},"On this page:"),s("ul",null,[s("li",null,[s("a",{class:"link dark",href:"#vue-example"}," VueJS Example ")]),s("li",null,[s("a",{class:"link dark",href:"#react-example"}," React Example ")])])],-1),r=s("section",{class:"section docs-title"},[s("div",{class:"container"},[s("h1",{class:"title-5 fw-500"},"Integration"),s("p",{class:"subtitle"},[e(" You can easily integrate "),s("span",{class:"fw-600"},"GNB UI"),e(" with all javascript frameworks in a few small steps. ")])])],-1),p={class:"section",id:"vue-example"},_={class:"container"},m=s("div",null,[s("h2",{class:"mb-20"},"\u2022 VueJS Integration Example")],-1),h={class:"mt-25"},u=s("p",{class:"fs-6"},[e(" Create a fresh Vue project or open a previously created Vue project and add "),s("b",null,"GNB UI"),e(" to your project: ")],-1),v={class:"mt-25"},f=s("p",{class:"fs-6"},[e(" Create a new file: "),s("code",{class:"text-secondary"},"src/assets/main.scss"),e(" and import "),s("b",null,"GNB UI"),e(". ")],-1),g={class:"mt-25"},y=s("p",{class:"fs-6"},[e(" Import "),s("code",{class:"text-secondary"},"main.scss"),e(" into your "),s("code",{class:"text-secondary"},"main.js"),e(" file. ")],-1),x={class:"mt-25"},b=s("p",{class:"fs-6"},[e(" Now you are ready to build amazing webpages! In "),s("code",{class:"text-secondary"},"App.vue"),e(" file add the following code between "),s("code",{class:"text-secondary"},"<template></template>"),e(" tags: ")],-1),I={class:"mt-25"},w=s("p",{class:"fs-6"},"Start development server:",-1),j={class:"section",id:"react-example"},N={class:"container"},B=s("div",null,[s("h2",{class:"mb-20"},"\u2022 React Integration Example")],-1),G={class:"mt-25"},U=s("p",{class:"fs-6"},[e(" Add "),s("b",null,"GNB UI"),e(" to your react project or create a new react project: ")],-1),k={class:"mt-25"},V=s("p",{class:"fs-6"},[e(" Create a new file: "),s("code",{class:"text-secondary"},"src/assets/main.scss"),e(" and import "),s("b",null,"GNB UI"),e(". ")],-1),C={class:"mt-25"},E=s("p",{class:"fs-6"},[e(" Import "),s("code",{class:"text-secondary"},"main.scss"),e(" into your "),s("code",{class:"text-secondary"},"index.js"),e(" file. ")],-1),S={class:"mt-25"},W=s("p",{class:"fs-6"},[e(" Now you are ready to build amazing webpages! In "),s("code",{class:"text-secondary"},"App.js"),e(" file add the following html code to the return statement: ")],-1),A={class:"mt-25"},z=s("p",{class:"fs-6"},"Start development server:",-1),$={__name:"Integration",setup(J){return(R,O)=>{const t=i("highlightjs");return d(),n(c,null,{navigation:o(()=>[l]),default:o(()=>[r,s("section",p,[s("div",_,[m,s("div",h,[u,a(t,{language:"bash",code:`vue create sample_project

cd sample_project

yarn add gnb-ui sass sass-loader`})]),s("div",v,[f,a(t,{autodetect:"",code:`//Import GNB UI
@import "gnb-ui";`})]),s("div",g,[y,a(t,{autodetect:"",code:'import "./assets/main.scss";'})]),s("div",x,[b,a(t,{autodetect:"",code:`<div class="hero lg">
    <div class="hero-body">
        <h1>Welcome to GNB UI</h1>
        <p>We love to create beauty</p>
    </div>
</div>`})]),s("div",I,[w,a(t,{autodetect:"",code:"yarn dev"})])])]),s("section",j,[s("div",N,[B,s("div",G,[U,a(t,{language:"javascript",code:`npx create-react-app my-app

cd my-app

yarn add gnb-ui sass sass-loader`})]),s("div",k,[V,a(t,{autodetect:"",code:`//Import GNB UI
@import "gnb-ui";`})]),s("div",C,[E,a(t,{autodetect:"",code:'import "./assets/main.scss";'})]),s("div",S,[W,a(t,{autodetect:"",code:`<div class="hero lg">
    <div class="hero-body">
        <h1>Welcome to GNB UI</h1>
        <p>We love to create beauty</p>
    </div>
</div>`})]),s("div",A,[z,a(t,{autodetect:"",code:"yarn start"})])])])]),_:1})}}};export{$ as default};
