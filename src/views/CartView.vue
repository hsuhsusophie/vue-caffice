<template>
      <LoadingOverlay :active="isLoading" />
//購物車列表
<div class="cart mt-3">

  <div class="section">
      <div class="background-image w-100"></div>
  </div>

  <div class="container mx-auto"> 
    <div class="text-end">
          <button class="btn btn-outline-danger mt-2" type="button" @click="deleteAllCarts">清空購物車</button>
  </div>
    <div class="justify-content-center">
        <table class="table align-middle">
          <thead>
            <tr>
              <th style="width: 150px"></th>
              <th>品名</th>
              <th style="width: 150px">數量/單位</th>
              <th>單價</th>
            </tr>
          </thead>
        <tbody>
                <tr v-for="cart in carts" :key="cart.id">
                  <td style="width: 200px;">
                    <button type="button" class="btn btn-outline-danger btn-sm" 
                      @click="removeCartItem(cart.id)"
                      :disabled="status.cartQtyLoading === cart.id">
                      <span class="spinner-border spinner-border-sm" aria-hidden="true"
                        v-if="status.cartQtyLoading === cart.id"></span>
                      x
                    </button>
                  </td>
                  <td>
                    {{ cart.product.title }}
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <div class="input-group mb-3">
                        <button type="button" class="btn btn-outline-primary"
                          :disabled="cart.qty === 1"
                          v-if="cart.qty > 1"
                          @click="cart.qty--;changeCartQty(cart, cart.qty)"> - </button>
                        <!-- 當數量為1時顯示刪除icon -->
                        <button type="button" class="btn btn-outline-danger" 
                          v-else
                          @click="removeCartItem(cart.id)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                          </svg>
                        </button>
                        <input min="1" type="number" class="form-control" readonly
                        v-model="cart.qty" @change="changeCartQty(cart, cart.qty)" :disabled="cart.id === status.cartQtyLoading">
                        <button type="button" class="btn btn-outline-primary"
                          @click="cart.qty++;changeCartQty(cart, cart.qty)"> + </button>
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    {{ cart.total }}
                  </td>
                </tr>
        </tbody>
        <tfoot>
          <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ final_total }}</td>
            </tr>
        </tfoot>
        </table>
      </div>           
</div>

<button class="btn btn-outline-success checkOut" type="button" >結帳</button>
</div>


          <!-- <v-form ref="form" class="col-md-6"  @submit="onSubmit">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <v-field id="email" name="email" type="email" class="form-control"
                :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email"
                rules="email|required">
              </v-field>
              <error-message name="email" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <v-field id="name" name="name" type="text" class="form-control" :class="{ 'is-invalid': errors['name'] }"
                placeholder="請輸入姓名" rules="required"></v-field>
              <error-message name="name" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <v-field id="tel" name="tel" type="text" class="form-control" :class="{ 'is-invalid': errors['tel'] }"
                placeholder="請輸入電話" rules="required|min:9"></v-field>
              <error-message name="tel" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <v-field id="address" name="address" type="text" class="form-control" :class="{ 'is-invalid': errors['address'] }"
                placeholder="請輸入地址" rules="required" ></v-field>
              <error-message name="address" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea id="message" class="form-control" cols="30" rows="10" v-model="formMessage"></textarea>
            </div>
            <div class="text-end">
              <button type="submit" class="btn btn-danger"
                      >送出訂單</button>
            </div>
          </v-form> -->


  </template>

  <script>
import axios from 'axios';
import { mapState,mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';
 
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

 export default{
  data(){
    return{
      // isLoading: true,
    };
  },
  computed:{
    ...mapState(cartStore,['status'] ),
    ...mapState(cartStore,['final_total'] ),
    ...mapState(cartStore, ['carts']),


    },
    methods:{
      ...mapActions(cartStore, ['getCart']),
      deleteAllCarts(){
        axios.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/carts`)
        .then((response) => {
          alert(response.data.message);
          this.getCart();
        })
      },
      removeCartItem(id){
        axios.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${id}`)
        .then((response) => {
          alert(response.data.message);
          this.getCart();
      })
    },
  mounted(){
    setTimeout(() =>{
      this.isLoading = false;
    },1000);
    }
  }
}
 </script>

