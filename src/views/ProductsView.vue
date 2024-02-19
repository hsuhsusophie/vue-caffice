<template>
    <LoadingOverlay :active="isLoading" />

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-4 p-4 g-4">
        <div class="col" v-for="product in products" :key="product.id">
            <div class="card">
                <RouterLink :to="`/products/${product.id}`">
                <img :src="product.imageUrl" class="card-img-top w-100" alt="">
                </RouterLink>
                <div class="card-body">
                    <h6 class="card-title">{{ product.title }}
                        <span class="float-end">$ {{ product.price }}</span>
                    </h6>
                    <a href="#" class="btn btn-outline-secondary w-100" @click.prevent="addToCart(product.id)">加入購物車</a>
                </div>
            </div>
        </div>

        <!-- <table class="table">
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td> {{ product.title }}</td>
                    <td> <img class="card-img-top" :src="product.imageUrl" alt=""></td>
                    <td> {{ product.price }}</td>
                    <td>
                        <RouterLink :to="`/products/${product.id}`">產品介紹</RouterLink>
                    </td>
                </tr>
            </tbody>
        </table> -->

    </div>
</template>


<script>
// console.log(import.meta.env);
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
    data() {
        return {
            isLoading: true,
            products: [],
        }
    },
    mounted() {
        this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/all`)
            .then(res => {
                console.log(res);
                this.isLoading = false
                this.products = res.data.products
            })
    }
}
</script>

<style>
.card-img-top {
    object-fit: cover;
    width: 300px;
    height: 300px;

}

/* .table-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
} */


</style>