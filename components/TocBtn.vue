<template>
  <el-button type="primary" @click="OpenToc" :circle="true" class="gotop-btn">
    <i class="iconfont icon-service-directory"></i>
  </el-button>
</template>
<script>
export default {
  name: "GoTop",
  methods: {
    OpenToc() {
      this.$emit("toc");
    }
  }
};
</script>
<style lang="scss" scoped>
.gotop-btn {
  position: fixed;
  right: 70px;
  bottom: 10px;
  z-index: 69;
  display: none;
  color: #fff;
  background-color: #3f51b5;
  border-color: #3f51b5;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);

  i {
    font-size: 1.5em;
    font-weight: 600;
  }
}
@media (max-width: 1200px) {
  .gotop-btn {
    display: inline-block;
  }
}
</style>