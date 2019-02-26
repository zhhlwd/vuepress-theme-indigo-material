<template>
  <el-footer class="container-footer">
    <el-row
      :class="{footerMargin: !isHide}"
      type="flex"
      justify="center"
      align="center"
      class="footer-warp"
    >
      <el-col
        :span="24"
        class="footer-top"
      >
        <p class="ellipsis">
          <span>
            博客内容遵循
            <a
              rel="license"
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
            >知识共享 署名 - 非商业性 - 相同方式共享 4.0 国际协议</a>
          </span>
        </p>
      </el-col>
      <el-col
        :span="24"
        class="footer-bottom"
      >
        <p class="ellipsis">
          <span v-if="content.length !== 0">
            <span>
              {{($site.title || "")
              + ' © '
              +content[content.length - 1].lastUpdated.slice(0, 7)
              +" ~ "
              +content[0].lastUpdated.slice(0, 7)}}
            </span>
          </span>
          <span>
            Power by
            <a
              href="https://vuepress.vuejs.org/zh/"
              target="_blank"
            >VuePress</a> Theme
            <a
              href="https://github.com/zhhlwd/vuepress-theme-indigo-material"
              target="_blank"
            >indigo material</a>
          </span>
        </p>
      </el-col>
    </el-row>
  </el-footer>
</template>
<script>
export default {
  name: "MyFooter",
  props: {
    isHide: {
      type: Boolean,
      default: false
    },
    content: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="stylus" scoped>
.el-footer {
  padding: 0;
  margin-top: -113px;
}

.container-footer {
  overflow: hidden;
  height: 113px !important;
  text-align: center;
  width: 100%;
  line-height: 1.6;
  font-size: 13px;

  .footerMargin .footer-top, .footerMargin .footer-bottom {
    margin-left: 122px;
  }

  a {
    color: rgba(255, 255, 255, 0.88);
    border-bottom: 1px dotted rgba(255, 255, 255, 0.5);
  }

  .footer-warp {
    flex-direction: column;
    color: rgba(255, 255, 255, 0.6);
    background: #303f9f;

    .footer-top, .footer-bottom {
      line-height: 56.5px;
      height: 56.5px;
      transition: 0.2s ease-in-out;

      p {
        line-height: 56.5px;
        margin: 0;
      }
    }

    .footer-top {
      background: #3f51b5;
    }
  }
}

@media (max-width: 1190px) {
  .footerMargin .footer-top, .footerMargin .footer-bottom {
    margin-left: 0 !important;
  }
}
</style>