<template>
  <div class="header-swiper">
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img
          src="https://imgs.qunarzz.com/vs_ceph_b2c_001/209e8804-5512-48c3-bee4-5337e8286c6e.jpg_r_390x260x95_2dd4e51f.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide
        ><img
          src="https://imgs.qunarzz.com/vs_ceph_vs_tts/7d5d7a98-37f7-4a53-ac26-e004a4397b83.jpg_r_390x260x95_0864fdd3.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://imgs.qunarzz.com/vs_ceph_b2c_001/974278ff-2176-4e7b-a08e-5070b694b1c5.jpg_r_390x260x95_3893afee.jpg"
          alt=""
      /></swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {},
    };
  },
};
</script>

<style scoped>

.swiper-slide {
  width: 100%;
  height: 2rem;
}
.swiper-slide img{
  width: 100%;
  height: 100%;
}

</style>