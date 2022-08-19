import{_ as a}from"./Layout.85369b4a.js";import{c as i,w as r,o,a as s,b as l,d as e,r as n}from"./index.5023e8b0.js";const d=s("div",{class:"card"},[s("h5",{class:"text-right pr-30 mb-10"},"On this page:"),s("ul",null,[s("li",null,[s("a",{class:"link dark",href:"#default"}," Default Progressbar ")]),s("li",null,[s("a",{class:"link dark",href:"#colors"}," Colors ")]),s("li",null,[s("a",{class:"link dark",href:"#infinite"}," Infinite ")]),s("li",null,[s("a",{class:"link dark",href:"#label"}," Label & Height ")]),s("li",null,[s("a",{href:"#variables",class:"link dark"},"Variables")])])],-1),c=s("section",{class:"section docs-title"},[s("div",{class:"container"},[s("h1",{class:"title-5 fw-500"},"Progressbar"),s("p",{class:"subtitle"},[s("b",null,"GNB UI"),e(" has a beautifull progressbar element. ")])])],-1),h={class:"section"},g={class:"container"},u=s("h5",{class:"mb-20"},"To Import Progressbar Separately:",-1),p={class:"section",id:"default"},v={class:"container"},_=s("div",null,[s("h2",{class:"mb-20"},"\u2022 Default Progressbar"),s("p",{class:"fs-6"}," When sending a form or pending for a long request, you can use the progressbar to show the user that the request is in progress. ")],-1),b=s("div",{class:"text-center mt-25"},[s("div",{class:"progress"},[s("div",{class:"progressbar",style:{width:"85%"}})])],-1),f={class:"mt-25"},m=s("p",null,"HTML:",-1),y={class:"section",id:"colors"},w={class:"container"},x=s("div",null,[s("h2",{class:"mb-20"},"\u2022 Colors"),s("p",{class:"fs-6"},[e(" If you want to use the progressbar with different colors, you can add one of the color classes to the "),s("code",{class:"text-danger"},".progress"),e(" element. ")])],-1),k=s("div",{class:"text-center mt-25"},[s("div",{class:"progress primary"},[s("div",{class:"progressbar",style:{width:"85%"}})]),s("div",{class:"progress secondary"},[s("div",{class:"progressbar",style:{width:"60%"}})]),s("div",{class:"progress success"},[s("div",{class:"progressbar",style:{width:"95%"}})]),s("div",{class:"progress info"},[s("div",{class:"progressbar",style:{width:"40%"}})]),s("div",{class:"progress warning"},[s("div",{class:"progressbar",style:{width:"15%"}})]),s("div",{class:"progress danger"},[s("div",{class:"progressbar",style:{width:"80%"}})]),s("div",{class:"progress dark"},[s("div",{class:"progressbar",style:{width:"55%"}})])],-1),$={class:"mt-25"},L=s("p",null,"HTML:",-1),I={class:"section",id:"infinite"},T={class:"container"},V=s("div",null,[s("h2",{class:"mb-20"},"\u2022 Infinite"),s("p",{class:"fs-6"},[e(" If you want your progressbar has infinite loading aimation, you can add the "),s("code",{class:"text-danger"},".infinite"),e(" class to "),s("code",{class:"text-danger"},".progress"),e(" element. ")])],-1),H=s("div",{class:"text-center mt-25"},[s("div",{class:"progress primary infinite"},[s("div",{class:"progressbar",style:{width:"85%"}})])],-1),C={class:"mt-25"},N=s("p",null,"HTML:",-1),P={class:"section",id:"label"},B={class:"container"},M=s("div",null,[s("h2",{class:"mb-20"},"\u2022 Label & Height"),s("p",{class:"fs-6"},[e(" If you want to add label to the progressbar, you should change the height of the "),s("code",{class:"text-danger"},".progress"),e(" element. Just add style attribute to the element and write your label inside the "),s("code",{class:"text-danger"},".progressbar"),e(" element. ")])],-1),D=s("div",{class:"text-center mt-25"},[s("div",{class:"progress primary",style:{height:"20px"}},[s("div",{class:"progressbar",style:{width:"55%"}},"Loading")])],-1),j={class:"mt-25"},q=s("p",null,"HTML:",-1),z=s("section",{class:"section",id:"variables"},[s("div",{class:"container"},[s("div",null,[s("h2",{class:"mb-20"},"\u2022 Variables"),s("p",{class:"fs-6"}," To add different size and ratios you can change the value of the variables. ")]),s("div",{class:"has-file"},[s("table",{class:"table dark bordered striped"},[s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Default Value"),s("th",null,"Computed Value")])]),s("tbody",{class:"bg-white"},[s("tr",null,[s("td",null,"$progress-height"),s("td",null,"5px"),s("td")]),s("tr",null,[s("td",null,"$progress-border-radius"),s("td",null,"18px"),s("td")]),s("tr",null,[s("td",null,"$progress-background"),s("td",null,"$gray-1"),s("td",null,"rgb(230, 233, 234)")]),s("tr",null,[s("td",null,"$progressbar-background"),s("td",null,"$white"),s("td",null,"rgb(255, 255, 255)")]),s("tr",null,[s("td",null,"$progressbar-font-size"),s("td",null,"0.75rem"),s("td")]),s("tr",null,[s("td",null,"$progressbar-font-weight"),s("td",null,"500"),s("td")]),s("tr",null,[s("td",null,"$progressbar-font-line-height"),s("td",null,"1"),s("td")]),s("tr",null,[s("td",null,"$infinite-animation-duration"),s("td",null,"1.5s"),s("td")])])])])])],-1),W={__name:"Progressbar",setup(G){return(J,O)=>{const t=n("highlightjs");return o(),i(a,null,{navigation:r(()=>[d]),default:r(()=>[c,s("section",h,[s("div",g,[u,l(t,{autodetect:"",code:'@import "../../node_modules/gnb-ui/src/elements/progressbar";'})])]),s("section",p,[s("div",v,[_,b,s("div",f,[m,l(t,{autodetect:"",code:`<div class="progress">
  <div class="progressbar" style="width: 85%"></div>
</div>`})])])]),s("section",y,[s("div",w,[x,k,s("div",$,[L,l(t,{autodetect:"",code:`<div class="progress primary">
  <div class="progressbar" style="width: 85%"></div>
</div>

<div class="progress secondary">
  <div class="progressbar" style="width: 60%"></div>
</div>

<div class="progress success">
  <div class="progressbar" style="width: 95%"></div>
</div>

<div class="progress info">
  <div class="progressbar" style="width: 40%"></div>
</div>

<div class="progress warning">
  <div class="progressbar" style="width: 15%"></div>
</div>

<div class="progress danger">
  <div class="progressbar" style="width: 80%"></div>
</div>

<div class="progress dark">
  <div class="progressbar" style="width: 55%"></div>
</div>`})])])]),s("section",I,[s("div",T,[V,H,s("div",C,[N,l(t,{autodetect:"",code:`<div class="progress primary infinite">
  <div class="progressbar" style="width: 85%"></div>
</div>`})])])]),s("section",P,[s("div",B,[M,D,s("div",j,[q,l(t,{autodetect:"",code:`<div class="progress primary" style="height: 20px">
  <div class="progressbar" style="width: 55%">Loading</div>
</div>`})])])]),z]),_:1})}}};export{W as default};
