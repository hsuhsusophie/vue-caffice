<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top p-2 navbar-transparent">
      <div class="container ">
        <RouterLink class="navbar-brand" to="/">©Caffice</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link fs-5" to="/">關於我們</RouterLink>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fs-5" to="/products">產品列表</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fs-5 btn btn position-relative" to="/cart"><i class="bi bi-cart"></i>
                <span class="position-absolute 
                 badge rounded-pill bg-dark">
                {{ carts?.length}}
                <span class="visually-hidden">unread messages</span>
                </span>
              </router-link>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
 import { mapActions, mapState } from 'pinia';
 import cartStore from '../stores/cartStore';

  export default {
   computed:{
    ...mapState(cartStore,['carts'] ),
   
    },
    methods: {
      toggleNavbar() {
        this.$el.querySelector('.navbar-toggler').click();
      },
      ...mapActions(cartStore, ['getCart']),
    },
    mounted(){
      console.log(this.$route);
      this.getCart();
    }
    }
  
    

  </script>
  

<style>
/* .navbar{
    max-width: 100%;
} */
</style>



