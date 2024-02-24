import{_ as m,c as n,b as v,a as t,g as a,h as l,F as k,i as A,r as _,o as d,w as x,d as P,t as g}from"./index-AqpN4ZGk.js";var y={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"sophie",BASE_URL:"/vue-caffice/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:p,VITE_APP_PATH:u}=y,C={data(){return{isLoading:!0,products:[],isActive:"All"}},methods:{getProducts(c){this.isLoading=!0;let e=`${p}v2/api/${u}/products/all`;c&&c!=="All"&&(e=`${p}v2/api/${u}/products?category=${c}`),this.$http.get(e).then(o=>{this.products=o.data.products,this.isLoading=!1}).catch(o=>{console.error("Error fetching products:",o),this.isLoading=!1})},addToCart(c){const e={product_id:c.id,qty:1};this.$http.post(`${p}v2/api/${u}/cart`,{data:e}).then(o=>{console.log(o),this.product=o.data.product})}},mounted(){console.log(this.$route),this.getProducts(this.isActive)}},L={class:"products"},w=t("div",{class:"section"},[t("div",{class:"background-image w-100"})],-1),E={class:"row"},T={class:"col-md-3"},V={class:"category list-group text-center my-4 p-4"},B={class:"col-md-9"},R={class:"row row-cols-1 row-cols-md-2 row-cols-lg-3 my-4 g-4"},b={class:"card"},N=["src"],$={class:"card-body"},D={class:"card-title"},I={class:"float-end"},O=["onClick"];function S(c,e,o,U,s,r){const h=_("LoadingOverlay"),f=_("RouterLink");return d(),n("div",L,[v(h,{active:s.isLoading},null,8,["active"]),w,t("div",E,[t("div",T,[t("ul",V,[t("li",{class:a(["list-group-item list-group-item-action bg-light",{active:s.isActive==="All",clicked:s.isActive==="All"}])},[t("a",{class:"px-3 px-md-4 py-1 text-dark",href:"#",onClick:e[0]||(e[0]=l(i=>r.getProducts("All"),["prevent"]))}," 全部商品 ")],2),t("li",{class:a(["list-group-item list-group-item-action",{active:s.isActive==="Coffee",clicked:s.isActive==="Coffee"}])},[t("a",{class:"px-3 px-md-4 py-1 text-dark",href:"#",onClick:e[1]||(e[1]=l(i=>r.getProducts("Coffee"),["prevent"]))}," 咖啡 ")],2),t("li",{class:a(["list-group-item list-group-item-action text-dark",{active:s.isActive==="Non-coffee",clicked:s.isActive==="Non-coffee"}])},[t("a",{class:"px-3 px-md-4 py-1 text-dark",href:"#",onClick:e[2]||(e[2]=l(i=>r.getProducts("Non-coffee"),["prevent"]))}," 其他飲品 ")],2),t("li",{class:a(["list-group-item list-group-item-action text-dark",{active:s.isActive==="Bakery",clicked:s.isActive==="Bakery"}])},[t("a",{class:"px-3 px-md-4 py-1 text-dark",href:"#",onClick:e[3]||(e[3]=l(i=>r.getProducts("Bakery"),["prevent"]))}," 點心 ")],2)])]),t("div",B,[t("div",R,[(d(!0),n(k,null,A(s.products,i=>(d(),n("div",{class:"col",key:i.id},[t("div",b,[v(f,{to:`/products/${i.id}`},{default:x(()=>[t("img",{src:i.imageUrl,class:"card-img-top w-100",alt:""},null,8,N)]),_:2},1032,["to"]),t("div",$,[t("h6",D,[P(g(i.title)+" ",1),t("span",I,"$ "+g(i.price),1)]),t("a",{href:"#",class:"btn btn-outline-secondary w-100",onClick:l(F=>r.addToCart(i),["prevent"])}," 加入購物車 ",8,O)])])]))),128))])])])])}const M=m(C,[["render",S]]);export{M as default};