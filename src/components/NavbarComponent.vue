<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top p-2 navbar-transparent">
        <div class="container-fluid ">
            <RouterLink class="navbar-brand" to="/">©Caffice</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink class="nav-link fs-5"  to="/">關於我們</RouterLink>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link fs-5" to="/products">產品列表</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link fs-5" to="/cart">購物車</router-link>
                    </li>
                    <li> <span class="badge bg-danger text-white"> 0</span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
    
    
<script>
// import { mapState } from "pinia";
// import cartStore from "../stores/cartStore.js";

export default {
    //     template: `<nav class="navbar navbar-expand-md navbar-light bg-light fixed-top p-2 navbar-transparent">
    //     <div class="container-fluid">
    //         <a class="navbar-brand" href="#">©Caffice</a>
    //         <button type="button" class="btn btn-lighter">購物車
    //             <span class="badge bg-danger text-white"> {{ cart.length }} </span>
    //         </button>
    //     </div>
    // </nav>`,
    //     computed: {
    //         ...mapState(cartStore, ['cart'])
    //     }
}
</script>

