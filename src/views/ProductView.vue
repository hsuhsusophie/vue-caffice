<template>
    <!-- {{ product.title }}
    <img :src="product.imageUrl" alt=""> -->
    <div>
      <LoadingOverlay :active="isLoading" />
        <div class="row align-items-center px-5 my-4 p-4">
        <div class="col-md-7">
            <div class="carousel-item active">
                <img
                    :src="product.imageUrl"
                    class="product-img"
                    alt=""
                  />                    
          </div>
        
        </div>
        <div class="col-md-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white px-0 mb-0 py-3">
              <li class="breadcrumb-item"><a class="text-muted" href="./index.html">Home</a></li>
              <li class="breadcrumb-item"><a class="text-muted" href="./product.html">Product</a></li>
              <li class="breadcrumb-item active" aria-current="page">Detail</li>
            </ol>
          </nav>
          <h2 class="fw-bold h1 mb-2">{{product.title}}</h2>
          <p class="h4 fw-bold text-end mb-2">NT${{ product.price }}</p>
          <div class="row align-items-center">
         
            <div class="col-6">
              <a href="./checkout.html" class="text-nowrap btn btn-dark w-100 py-2 mt-2"  @click.prevent="addToCart(product)">加入購物車

              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-5 px-5">
        <div class="col-md-4">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
        </div>
        <div class="col-md-3">
          <p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
      </div>
    
      </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
    data() {
        return {
            product: {},
            isLoading: true,
            cartProduct: null,  
        }
    },
    methods: {
      getProduct(){
        const { id } = this.$route.params
        this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/product/${id}`)
        .then((response) => {
          this.product = response.data.product;
          this.isLoading = false;
          });
      },
    addToCart() {
      // console.log(`Adding product with ID ${productId} to cart`);
      const order = {
        product_id : this.product.id,
        qty:1,
      }
      this.$http
      .post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`, {data : order})
      .then((res) => {
        console.log(res);
        this.product = res.data.product;
      });
    },
  },
    mounted() {
      this.getProduct();
    }
}

</script>