<template>
  <div class="wrapper">
  <!-- banner -->
  <header class="home-header my-4 p-4 w-100 " :style="{ 'background-image': `url(${imageUrl})` }" data-aos="fade-down">
    <div class="d-flex container justify-content-end align-items-end h-100 w-100 ">
      <div class="ml-auto text-start banner-text" data-aos="fade-down">
        <h3 class="fw-bold text-light">Caffice</h3>
        <h1 class="text-white mb-2">品味生活，從一杯Caffice開始。</h1>
        <RouterLink to="/products" class="btn btn-outline-light py-2">查看產品</RouterLink>
      </div>
    </div>
  </header>

  <!--Caffice介紹-->
  <div class="intro mt-md-5 mt-3 mb-5">
    <div class="row mb-5">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <h3 class="intro-heading" data-aos="fade-down">關於 Caffice Coffee</h3>
      </div>
      <div class="col-md-6 ">
        <div class="intro-pic" data-aos="fade-left">
          <img
            src="../assets/pics/caffice.jpg"
            alt="group" class="img-fluid">
        </div>
      </div>
      <div class="col-md-5 m-auto">
        <p class="text-left mt-4 mt-md-0" data-aos="fade-left">"與 Caffice Coffee 一同啟程，這裡不僅有對卓越咖啡的熱愛，更結合了你充滿活力的工作日能量。"</p>
      </div>
    </div>

    <div class="row mb-5">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <h3 class="intro-heading" data-aos="fade-down">我們的招牌咖啡混合</h3>
      </div>
      <div class="col-md-5 m-auto">
        <p class="text-left mt-4 mt-md-0" data-aos="fade-right">"感受濃郁風味和香氣的完美融合 - 每一款 Caffice 混合都精心製作，激發生產力，為您的味蕾帶來愉悅。"</p>
      </div>
      <div class="col-md-6 ">
        <div class="intro-pic" data-aos="fade-right">
          <img
            src="../assets/pics/coffebean.jpg"
            alt="group" class="img-fluid">
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <h3 class="intro-heading" data-aos="fade-down">為什麼選擇 Caffice</h3>
      </div>
      <div class="col-md-6 ">
        <div class="intro-pic" data-aos="fade-left">
          <img
            src="../assets/pics/caffice2.jpg"
            alt="group" class="img-fluid">
        </div>
      </div>
      <div class="col-md-5 m-auto">
        <p class="text-left mt-4 mt-md-0" data-aos="fade-left">"在 Caffice，我們不僅僅提供咖啡 - 我們為那些追求工作和放鬆完美平衡的人提供了一個避風港。與我們一同提升您的每日奮鬥！"
        </p>
        <RouterLink to="/products" class="btn btn-light py-2" data-aos="fade-left">查看產品</RouterLink>
      </div>
    </div>


  </div>


 <!--Service-->
<div class="service bg-light ">
  <div class="d-flex  service justify-content-center align-items-center ">
    <h2 class="section-title  align-items-center  mt-4 mb-2" data-aos="fade-down">Our Service</h2>
  </div>
  <div class="row text-center">
    <div class="col-md-4 mb-4">
      <div class="service-item">
        <img src="../assets/pics/service.jpg" data-aos="fade-down" alt="Cozy Environment Image">
        <p class="text-center mt-4" data-aos="fade-up">舒適的環境</p>
        <p class="text-center" data-aos="fade-up">我們提供溫馨舒適的用餐環境，讓您放鬆身心，享受美好時光。</p>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="service-item">
        <img src="../assets/pics/service1.jpg" data-aos="fade-down" alt="Cozy Environment Image">
        <p class="text-center mt-4" data-aos="fade-up">專業咖啡師</p>
        <p class="text-center" data-aos="fade-up">由我們經驗豐富的咖啡師精心製作，確保每一杯都充滿品味與獨特風味。</p>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="service-item">
        <img src="../assets/pics/service2.jpg" data-aos="fade-down" alt="Cozy Environment Image">
        <p class="text-center mt-4" data-aos="fade-up">免費 Wi-Fi</p>
        <p class="text-center" data-aos="fade-up">我們提供免費高速 Wi-Fi，讓您隨時保持聯繫，輕鬆享受咖啡時間。</p>
      </div>
    </div>
  </div>
</div>


<!--checkporduct-->
<div class="checkproduct  w-100" data-aos="fade-down">
    <div class=" d-flex justify-content-end align-items-end h-100 w-100 check-banner-text">
      <div class="ml-auto text-start  mb-4" data-aos="fade-down">
        <h3 class="fw-bold text-light">Caffice</h3>
        <h1 class="text-white mb-2">品味生活，從一杯Caffice開始。</h1>
        <RouterLink to="/products" class="btn btn-outline-light py-2">查看產品</RouterLink>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import imageUrl from '../assets/pics/banner.jpg';
import AOS from 'Aos';
import '@/assets/all.scss';
import 'aos/dist/aos.css'
export default {
  data() {
    return {
      imageUrl: imageUrl,
    }
  },
  mounted(){
    AOS.init({
      offset: 120
    })
  }
}
</script>

