<template>
    <h2>單一產品頁面</h2>
    {{ product.title }}
    <img :src="product.imageUrl" alt="">
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
    data() {
        return {
            product: {}
        }
    },
    mounted() {
        const { id } = this.$route.params;
        console.log(this.$route);
        console.log(this.$router);

        this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/product/${id}`)
            .then(res => {
                console.log(res);
                this.isLoading = false
                this.product = res.data.product
            })
    }
}

</script>