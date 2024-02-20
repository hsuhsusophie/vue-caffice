<script>
import AOS from 'Aos'
import 'aos/dist/aos.css'

export default{
 
  mounted(){
    AOS.init({
      duration: 1000, 
    })
  }
}


</script>

<template>
  <RouterView />
</template>


