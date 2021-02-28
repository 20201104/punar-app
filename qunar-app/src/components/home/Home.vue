<template>
 <div>
   <home-Header></home-Header>
   <home-Swiper></home-Swiper>
 </div>
</template>

<script>
import HomeHeader from "./pages/Header"
import HomeSwiper from "./pages/Swiper"
export default {
  name:'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>

</style>