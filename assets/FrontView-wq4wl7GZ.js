import{_,o as d,c as p,a as t,b as a,w as c,r as n,d as e,F as u}from"./index-Kw9HiXsa.js";const m={methods:{toggleNavbar(){this.$el.querySelector(".navbar-toggler").click()}}},h={class:"navbar navbar-expand-md navbar-light bg-light fixed-top p-2 navbar-transparent"},$={class:"container"},x=t("span",{class:"navbar-toggler-icon"},null,-1),N=[x],k={class:"collapse navbar-collapse justify-content-end",id:"navbarNav"},C={class:"navbar-nav"},w={class:"nav-item"},V={class:"nav-item"},y={class:"nav-item"},F=t("li",null,[t("span",{class:"badge bg-danger text-white"}," 0")],-1);function R(v,o,b,f,g,l){const s=n("RouterLink"),r=n("router-link");return d(),p("nav",h,[t("div",$,[a(s,{class:"navbar-brand",to:"/"},{default:c(()=>[e("©Caffice")]),_:1}),t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",onClick:o[0]||(o[0]=(...i)=>l.toggleNavbar&&l.toggleNavbar(...i))},N),t("div",k,[t("ul",C,[t("li",w,[a(s,{class:"nav-link fs-5",to:"/"},{default:c(()=>[e("關於我們")]),_:1})]),t("li",V,[a(r,{class:"nav-link fs-5",to:"/products"},{default:c(()=>[e("產品列表")]),_:1})]),t("li",y,[a(r,{class:"nav-link fs-5",to:"/cart"},{default:c(()=>[e("購物車")]),_:1})]),F])])])])}const B=_(m,[["render",R]]),L={},T={class:"py-4 text-center bg-light"},j=t("p",{class:"mb-0"},[e(" © 2024 Caffice All rights reserved. "),t("br"),e(" 僅作個人練習，無商業用途 ")],-1),q=[j];function A(v,o){return d(),p("footer",T,q)}const E=_(L,[["render",A]]),S={data(){},components:{NavbarComponent:B,FooterComponent:E}};function z(v,o,b,f,g,l){const s=n("NavbarComponent"),r=n("RouterView"),i=n("footerComponent");return d(),p(u,null,[a(s),a(r),a(i)],64)}const G=_(S,[["render",z]]);export{G as default};
