import{_ as r,o as e,e as a,a as t,F as d,k as c,t as l}from"./index.5023e8b0.js";const _={name:"variableTable",props:{variables:{type:Array,default:()=>[]}}},i={class:"has-table"},u={class:"table dark bordered striped"},h=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Default Value"),t("th",null,"Computed Value")])],-1),b={key:0,class:"bg-white"},p=["innerHTML"],v=["textContent"],y=["textContent"],m={key:1,class:"bg-white"},x=t("tr",null,[t("td"),t("h5",{class:"p-20 text-center"},"No variables added yet."),t("td")],-1),f=[x];function k(g,C,n,T,B,L){return e(),a("div",i,[t("table",u,[h,n.variables.length>0?(e(),a("tbody",b,[(e(!0),a(d,null,c(n.variables,(s,o)=>(e(),a("tr",{key:o},[t("td",{innerHTML:s.name},null,8,p),t("td",{textContent:l(s.value)},null,8,v),t("td",{textContent:l(s.computed)},null,8,y)]))),128))])):(e(),a("tbody",m,f))])])}var V=r(_,[["render",k]]);export{V as v};
