<template>
   <div id="app">
    <div class="container">
      <div class="row justify-content-center ">
        <h1 class="h3 mb-3 font-weight-normal text-center">
          請先登入
        </h1>
        <div class="col-8">
          <form class="form-signin" @submit.prevent="login">
            <div class="form-floating mb-3">
              <input type="email" class="form-control" v-model="user.username" id="floatingInput"
                placeholder="name@example.com" required autofocus>
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" v-model="user.password" id="floatingPassword"
                placeholder="Password" required >
              <label for="floatingPassword">Password</label>
            </div>
            <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
              登入
            </button>
          </form>
        </div>
      </div>
    </div>
  </div> 
</template>

<style>

  #app {
    height: 100vh; 
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form-signin {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .form-floating {
    margin-bottom: 20px;
  }

  .form-control {
    height: 50px; 
  }
</style>

<script>
    import axios from 'axios';
    const { VITE_APP_URL } = import.meta.env;


export default{
    data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const api = `${VITE_APP_URL}/v2/admin/signin`;
      axios.post(api, this.user).then((res) => {
        const { token, expired } = res.data;
        console.log(token);
        // 寫入 cookie token
        // expires 設置有效時間
        document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;
        // window.location = 'products.html';
        this.$router.push('/admin/products');
      }).catch(() => {
        alert('登入資料有誤，請確認帳號密碼');
      });
    },
  },
  mounted(){
    console.log(this.$router, this.$route);
  }
}

</script>

