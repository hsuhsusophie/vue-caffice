<template>
    <div>
      <LoadingOverlay :active="isLoading" />
  
      <div class="section">
        <div class="background-image background-image--products"></div>
      </div>
  
      <div class="row">
        <div class="col-md-3">
          <ul class="category list-group text-center my-4 p-4 g-4">
            <li
              class="list-group-item list-group-item-action bg-light"
              :class="{ active: isActive === 'All' }"
            >
              <a
                class="px-3 px-md-4 py-1 text-dark"
                href="#"
                @click.prevent="getProducts('All')"
              >
                全部商品
              </a>
            </li>
            <li
              class="list-group-item list-group-item-action"
              :class="{ active: isActive === 'Coffee' }"
            >
              <a
                class="px-3 px-md-4 py-1 text-dark"
                href="#"
                @click.prevent="getProducts('Coffee')"
              >
                咖啡
              </a>
            </li>
            <li
              class="list-group-item list-group-item-action text-dark"
              :class="{ active: isActive === 'Non-coffee' }"
            >
              <a
                class="px-3 px-md-4 py-1 text-dark"
                href="#"
                @click.prevent="getProducts('Non-coffee')"
              >
                其他飲品
              </a>
            </li>
            <li
              class="list-group-item list-group-item-action text-dark"
              :class="{ active: isActive === 'Bakery' }"
            >
              <a
                class="px-3 px-md-4 py-1 text-dark"
                href="#"
                @click.prevent="getProducts('Bakery')"
              >
                點心
              </a>
            </li>
          </ul>
        </div>
  
        <div class="col-md-9">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-4 g-4">
            <div class="col" v-for="product in products" :key="product.id">
              <div class="card">
                <RouterLink :to="`/products/${product.id}`">
                  <img
                    :src="product.imageUrl"
                    class="card-img-top w-100"
                    alt=""
                  />
                </RouterLink>
                <div class="card-body">
                  <h6 class="card-title">
                    {{ product.title }}
                    <span class="float-end">$ {{ product.price }}</span>
                  </h6>
                  <a
                    href="#"
                    class="btn btn-outline-secondary w-100"
                    @click.prevent="addToCart(product.id)"
                  >
                    加入購物車
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
  
  export default {
    data() {
      return {
        isLoading: true,
        products: [],
        isActive: 'All',
      };
    },
    methods: {
      getProducts(category) {
        this.isLoading = true;
        let url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/all`;
  
        if (category && category !== 'All') {
          url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products?category=${category}`;
        }
  
        this.$http
          .get(url)
          .then((response) => {
            this.products = response.data.products;
            this.isLoading = false;
          })
          .catch((error) => {
            console.error('Error fetching products:', error);
            this.isLoading = false;
          });
      },
      addToCart(productId) {
        console.log(`Adding product with ID ${productId} to cart`);
      },
    },
    mounted() {
      this.getProducts(this.isActive);
    },
  };
  </script>
  