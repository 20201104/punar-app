<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe600;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe622;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">北京<span class="iconfont">&#xe601;</span></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
@import '../../../assets/css/var.styl';
.header {
  width: 100%;
  line-height: 0.88rem;
  background-color: $bgColor;
  color: $textColor;
  font-size: 0.36rem;
  display: flex;
}

.header-left {
  width: 0.4rem;
  padding: 0 0.2rem;
  text-align: center;
  font-weight: bold;
}

.header-left .iconfont {
  font-size: 0.4rem;
}

.header-search {
  flex: 1;
  width: 0.6rem;
  background: #fff;
  height: 0.6rem;
  margin: 0.14rem 0;
  color: #e4e7ea;
  line-height: 0.6rem;
  border-radius: 0.1rem;
  font-size: 0.28rem;
  padding-left: 0.2rem;
}

.header-right {
  padding: 0 0.2rem;
}
</style>>

