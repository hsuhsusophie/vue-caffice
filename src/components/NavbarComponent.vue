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
              <router-link class="nav-link fs-5" to="/cart"><i class="bi bi-cart-fill"></i></router-link>
            </li>
            <li>
              <span
                  class="position-absolute translate-middle bg-theme badge bg-danger text-white rounded-pill cart-number"
                  v-if="cartNum"
                  >{{ cartNum }}</span
                >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data(){
      return{
        cart : [],

      }
    },
    methods: {
      toggleNavbar() {
        this.$el.querySelector('.navbar-toggler').click();
      }
    },
    computed : {
      cartNum() {
      let num = 0;
      if (this.cart.carts) {
        this.cart.carts.forEach((cart) => {
          num += cart.qty;
        });
    }
    return num;
  },
    },
  }

  </script>
  

<style>
/* .navbar{
    max-width: 100%;
} */
</style>



