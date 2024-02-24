import{_ as h,c as m,a as t,b as i,w as r,t as c,h as v,r as a,o as b,d as n}from"./index-CfmhqwVH.js";var f={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"sophie",BASE_URL:"/vue-caffice/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:l,VITE_APP_PATH:_}=f,g={data(){return{product:{},isLoading:!0,cartProduct:null}},methods:{getProduct(){const{id:e}=this.$route.params;this.$http.get(`${l}api/${_}/product/${e}`).then(o=>{this.product=o.data.product,this.isLoading=!1})},addToCart(){const e={product_id:this.product.id,qty:1};this.$http.post(`${l}v2/api/${_}/cart`,{data:e}).then(o=>{this.product=o.data.product})}},mounted(){this.getProduct()}},P={class:"product px-3"},x={class:"container"},w={class:"row product align-items-center"},L={class:"col-md-7 col-12 mb-3"},T={class:"carousel-item active"},k=["src"],V={class:"col-md-5 col-12 mb-3"},y={"aria-label":"breadcrumb"},E={class:"breadcrumb bg-white px-0 mb-0 py-3"},A={class:"breadcrumb-item"},R={class:"breadcrumb-item"},$=t("li",{class:"breadcrumb-item active","aria-current":"page"},"Detail",-1),C={class:"fw-bold h1 mb-2"},D={class:"h4 fw-bold text-end mb-2"},B={class:"row align-items-center"},I={class:"col-6"},N={class:"container"},O={class:"row my-3 px-3"},S={class:"col-md-7 col-12 mb-3"},U={class:"productcontent"},H={class:"col-md-5"},M={class:"productcontent text-dark fs-6"},q=t("div",{class:"bottom"},null,-1);function j(e,o,z,F,s,p){const u=a("LoadingOverlay"),d=a("RouterLink");return b(),m("div",P,[t("div",x,[i(u,{active:s.isLoading},null,8,["active"]),t("div",w,[t("div",L,[t("div",T,[t("img",{src:s.product.imageUrl,class:"product-img py-2 w-100",alt:""},null,8,k)])]),t("div",V,[t("nav",y,[t("ol",E,[t("li",A,[i(d,{class:"text-dark",to:"/"},{default:r(()=>[n(" Home ")]),_:1})]),t("li",R,[i(d,{class:"text-dark",to:"/products"},{default:r(()=>[n(" Products ")]),_:1})]),$])]),t("h2",C,c(s.product.title),1),t("p",D,"NT$"+c(s.product.price),1),t("div",B,[t("div",I,[t("a",{href:"#",class:"text-nowrap btn btn-dark w-100 py-2 mt-2",onClick:o[0]||(o[0]=v(G=>p.addToCart(s.product),["prevent"]))}," 加入購物車 ")])])])])]),t("div",null,[t("div",N,[t("div",O,[t("div",S,[t("p",U,c(s.product.description),1)]),t("div",H,[t("p",M,c(s.product.content),1)])])])]),q])}const K=h(g,[["render",j]]);export{K as default};