<template>
  <el-main
    class="my-main"
    :style="{marginLeft: mainLeft + 'px'}"
  >
    <content-header :content="content"></content-header>
    <keep-alive>
      <component
        :is="whichComponent"
        :content="content"
      ></component>
    </keep-alive>
  </el-main>
</template>
<script>
export default {
  name: "Main",
  props: {
    isHide: {
      type: Boolean,
      default: false
    },
    content: {
      type: Array,
      default: () => []
    }
  },
  components: {
    All: () => import("imComponents/All"),
    Posts: () => import("imComponents/Posts"),
    Tags: () => import("imComponents/Tags"),
    About: () => import("imComponents/About"),
    Home: () => import("imComponents/Home")
  },
  computed: {
    whichComponent() {
      let w = "";
      if (typeof window === "undefined") {
        switch (this.$page.path.slice(1, 6)) {
          case "posts":
            w = "Posts";
            break;
          case "all/":
            +"||" + this.$site.title;
            w = "All";
            break;
          case "tags/":
            w = "Tags";
            break;
          case "about":
            w = "About";
            break;
          default:
            w = "Home";
        }
        return w
      }

      switch (this.$route.path.slice(1, 6)) {
        case "posts":
          w = "Posts";
          break;
        case "all/":
          +"||" + this.$site.title;
          w = "All";
          document.title =
            this.$themeConfig.menus.all + " · " + this.$site.title;
          break;
        case "tags/":
          w = "Tags";
          document.title =
            this.$themeConfig.menus.tags + "  ·  " + this.$site.title;
          break;
        case "about":
          w = "About";
          document.title =
            this.$themeConfig.menus.about + " · " + this.$site.title;
          break;
        default:
          w = "Home";
          document.title =
            this.$themeConfig.menus.home + " · " + this.$site.title;
      }
      if (this.$route.path.indexOf("/tags/") > -1 && !w) {
        w = "Tags";
        document.title =
          this.$themeConfig.menus.tags +
          " · " +
          this.$route.params.tag +
          " · " +
          this.$site.title;
      }
      return w;
    },
    mainLeft () {
      let l = 240;
      if (this.isHide) {
        l = 60;
      } else {
        l = 240;
      }
      return l;
    }
  }
};
</script>
<style lang="stylus" scoped>
.my-main {
  margin: 56px 0 0 240px;
  transition: 0.2s ease-in-out;
  padding: 0;
  overflow: hidden;
  padding-bottom: 113px;
  width: 100%;
}

@media (max-width: 1190px) {
  .my-main {
    margin-left: 0 !important;
  }
}
</style>