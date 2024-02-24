import{_ as h,c as m,a as t,b as d,w as r,t as c,h as v,r as a,o as b,d as n}from"./index-9BME-Atk.js";var f={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"sophie",BASE_URL:"/vue-caffice/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:_,VITE_APP_PATH:l}=f,g={data(){return{product:{},isLoading:!0,cartProduct:null}},methods:{getProduct(){const{id:e}=this.$route.params;this.$http.get(`${_}api/${l}/product/${e}`).then(o=>{this.product=o.data.product,this.isLoading=!1})},addToCart(){const e={product_id:this.product.id,qty:1};this.$http.post(`${_}v2/api/${l}/cart`,{data:e}).then(o=>{this.product=o.data.product})}},mounted(){this.getProduct()}},P={class:"product"},x={class:"container"},w={class:"row product align-items-center"},L={class:"col-md-7"},T={class:"carousel-item active"},k=["src"],V={class:"col-md-5"},y={"aria-label":"breadcrumb"},E={class:"breadcrumb bg-white px-0 mb-0 py-3"},A={class:"breadcrumb-item"},R={class:"breadcrumb-item"},$=t("li",{class:"breadcrumb-item active","aria-current":"page"},"Detail",-1),C={class:"fw-bold h1 mb-2"},D={class:"h4 fw-bold text-end mb-2"},B={class:"row align-items-center"},I={class:"col-6"},N={class:"row my-5 px-5 mx-0"},O={class:"col-md-7"},S={class:"productcontent"},U={class:"col-md-5"},H={class:"productcontent text-dark fs-6"};function M(e,o,q,j,s,p){const u=a("LoadingOverlay"),i=a("RouterLink");return b(),m("div",P,[t("div",x,[d(u,{active:s.isLoading},null,8,["active"]),t("div",w,[t("div",L,[t("div",T,[t("img",{src:s.product.imageUrl,class:"product-img py-2 w-100",alt:""},null,8,k)])]),t("div",V,[t("nav",y,[t("ol",E,[t("li",A,[d(i,{class:"text-dark",to:"/"},{default:r(()=>[n(" Home ")]),_:1})]),t("li",R,[d(i,{class:"text-dark",to:"/products"},{default:r(()=>[n(" Products ")]),_:1})]),$])]),t("h2",C,c(s.product.title),1),t("p",D,"NT$"+c(s.product.price),1),t("div",B,[t("div",I,[t("a",{href:"#",class:"text-nowrap btn btn-dark w-100 py-2 mt-2",onClick:o[0]||(o[0]=v(z=>p.addToCart(s.product),["prevent"]))}," 加入購物車 ")])])])])]),t("div",null,[t("div",N,[t("div",O,[t("p",S,c(s.product.description),1)]),t("div",U,[t("p",H,c(s.product.content),1)])])])])}const G=h(g,[["render",M]]);export{G as default};
