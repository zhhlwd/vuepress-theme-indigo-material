<template>
  <div style="height:100%">
    <el-container class="main-container">
      <my-aside :isHide="isHide"></my-aside>
      <el-container class="container-warp">
        <my-header :restaurants="search" :showIcon="isHide" @clickMenu="clickMenu"></my-header>
        <my-main :isHide="isHide" :content="content"></my-main>
      </el-container>
      <go-top></go-top>
    </el-container>
    <my-footer :content="content" :isHide="isHide"></my-footer>
    <div @click="close" class="overlay" :class="{'overlay--active':needOverlay}"></div>
  </div>
</template>
<script>
export default {
  name: "Layout",
  data: function() {
    return {
      isHide: false,
      needOverlay: false,
      content: [],
      search: []
    };
  },
  created() {
    import(/* webpackChunkName: "content" */ "imData/content.js").then(
      content => {
        this.content = content.default;
      }
    );

    import(/* webpackChunkName: "search" */ "imData/search.js").then(search => {
      this.search = search.default;
    });
  },
  methods: {
    clickMenu() {
      this.isHide = !this.isHide;
      if (typeof window === "undefined") return;
      if (document.body.clientWidth <= 1200) {
        this.needOverlay = !this.needOverlay;
      }
    },
    close() {
      this.needOverlay = !this.needOverlay;
      this.isHide = !this.isHide;
    }
  }
};
</script>
<style lang="stylus" scoped>
.main-container {
  min-height: 100%;
}

.container-warp {
  position: relative;
  overflow: hidden;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  transition: 0.5s cubic-bezier(0.25, 0.8, 0.5, 1);
  z-index: 35;
}

.overlay:before {
  position: absolute;
}

.overlay:before {
  background-color: #212121;
  bottom: 0;
  content: '';
  height: 100%;
  left: 0;
  opacity: 0;
  right: 0;
  top: 0;
  transition: inherit;
  transition-delay: 0.15s;
  width: 100%;
}

.overlay--active {
  pointer-events: auto;
  touch-action: none;
}

.overlay--active:before {
  opacity: 0.46;
}

.go-next {
  transform: rotateY(180deg) !important;
  right: 10px !important;
}
</style>