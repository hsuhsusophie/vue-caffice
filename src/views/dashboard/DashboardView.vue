<template>
    <h1>後台</h1>
    <nav>
        <RouterLink to="/login">Login</RouterLink>/
        <RouterLink to="/admin/products">產品列表</RouterLink>/
        <RouterLink to="/admin/order">訂單列表</RouterLink>/
        <RouterLink to="/">回到前台</RouterLink>


    </nav>
    <RouterView></RouterView>
</template>

<script>
    import axios from 'axios';
    const { VITE_APP_URL } = import.meta.env;


export default{
  
  methods: {
    checkAdmin() {
      const api = `${VITE_APP_URL}/v2/api/user/check`;
      axios.post(api)
        .then(() => {
          this.getData();
        })
        .catch(() => {
          alert('請重新登入，將轉回登入頁面');
          window.location = 'login.html';
        })
    },
    getData() {
      const api = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
      axios.get(api)
        .then((res) => {
          console.log(res);
          this.products = res.data.products;
        })
    },
    openProduct(item) {
      this.tempProduct = item;
    }
  },
  created() {
    // 取出 Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;

    this.checkAdmin()
  }
}
</script>