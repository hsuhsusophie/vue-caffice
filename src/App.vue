<script>
import AOS from 'Aos'
import 'aos/dist/aos.css'

// import { RouterLink, RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue';


export default{
  components:{
    // RouterLink,
    // RouterView,
    NavbarComponent
  },
  mounted(){
    AOS.init({
      duration: 1000, 
    })
  }
}


</script>

<template>
  <header>
    <div class="wrapper">
      <NavbarComponent></NavbarComponent>

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/cart">Cart</RouterLink> |
        <RouterLink to="/products">Products</RouterLink>
      </nav> -->
      <nav>
        <!-- <RouterLink to="/admin/products">後台</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>


