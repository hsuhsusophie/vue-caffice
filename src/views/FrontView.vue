<template>
    <NavbarComponent/>
    <RouterView></RouterView>
    <footerComponent/>

</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '../components/footerComponent.vue'

export default{
data(){

},
components:{
    NavbarComponent,
    FooterComponent
}
}

</script>