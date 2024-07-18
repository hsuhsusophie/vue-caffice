// import { defineStore } from "pinia";
// import axios from "axios";

// const { VITE_URL, VITE_PATH } = import.meta.env;

// export const useProductsStore = defineStore('productsStore',{
//   state: () => ({
//     products: [],
//   }),
//   actions: {
//     async getAllProducts() {
//       try {
//         const res = await axios.get(`${VITE_URL}v2/api/${VITE_PATH}/products/all`);
//         console.log(res);
//         this.products = res.data.products;
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     },
//   },
// });

// export default useProductsStore;
