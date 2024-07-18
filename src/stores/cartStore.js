import { defineStore } from 'pinia';
import axios from 'axios';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default defineStore('cartStore', {
state: () =>({
carts: [],
final_total: 0,
total: 0,
status: {
    cartQtyLoading: false, 
}
}), 
  actions: {
    getCart(){
        axios.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then((response) => {
            this.carts = response.data.data.carts;
            this.final_total = response.data.data.final_total;
            this.total = response.data.data.total;
            console.log('pinia cart', this.carts);
        });
    }, 
    addToCart(id) {
        const order = {
          product_id : id,
          qty:1,
        };
        axios.post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`, { data: order })
        .then((response) => {
          console.log(response);
          this.getCart();
        });
      },
   },
});