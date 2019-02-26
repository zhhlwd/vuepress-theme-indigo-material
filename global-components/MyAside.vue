<template>
  <el-aside
    class="menu"
    width="auto"
    :class="{ menuHide: isHide }"
  >
    <el-menu
      @select="select"
      :default-active="$route.path.slice(0, 7)"
      active-text-color="#3f51b5"
      class="menu-wrap"
    >
      <li>
        <div
          class="brand-wrap"
          :style="{backgroundImage : `url(${$withBase($themeConfig.brand || '')})`}"
        >
          <div class="brand">
            <router-link
              to="/"
              class="avatar waves-effect waves-circle waves-light"
            >
              <img :src="$withBase($themeConfig.avatar || '')">
            </router-link>
            <hgroup class="introduce">
              <div class="nickname">{{$themeConfig.author || '欢迎光临'}}</div>
              <a
                :title="$themeConfig.email || '没有email'"
                class="mail"
              >{{$themeConfig.email || '没有email'}}</a>
            </hgroup>
          </div>
        </div>
      </li>
      <el-menu-item index="/">
        <i class="iconfont icon-home"></i>
        <span
          class="item-title"
          slot="title"
        >{{$themeConfig.menus.home || '主页'}}</span>
      </el-menu-item>
      <el-menu-item index="/tags/">
        <i class="iconfont icon-biaoqian"></i>
        <span
          class="item-title"
          slot="title"
        >{{$themeConfig.menus.tags || '标签分类'}}</span>
      </el-menu-item>
      <el-menu-item index="/all/">
        <i class="iconfont icon-wenzhang"></i>
        <span
          class="item-title"
          slot="title"
        >{{$themeConfig.menus.all || '时间归档'}}</span>
      </el-menu-item>
      <el-menu-item
        index="/github/"
        v-if="$themeConfig.github"
      >
        <i class="iconfont icon-github"></i>
        <span
          class="item-title"
          slot="title"
        >{{$themeConfig.menus.github || 'GitHub'}}</span>
      </el-menu-item>
      <el-menu-item index="/about/">
        <i class="iconfont icon-aboutme"></i>
        <span
          class="item-title"
          slot="title"
        >{{$themeConfig.menus.about || '自我介绍'}}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  name: "Aside",
  props: {
    isHide: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    select (key) {
      if (key === "/github/") {
        window.open(this.$themeConfig.github);
      } else {
        this.$router.push(key);
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.el-menu {
  border-right: none;
}

.el-menu-item.is-active {
  background-color: #ECEEF8;
}

.el-menu-item:hover {
  color: #3f51b5;

  i {
    color: #3f51b5;
  }
}

.iconfont {
  color: #909399;
  margin-right: 19px;
  margin-left: 4px;
  width: 24px;
  text-align: center;
  font-size: 28px;
  vertical-align: middle;
  display: inline-block;
}

.menuHide .iconfont {
  margin-left: -5px;
  transition: 0.5s ease-in-out;
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 66;
  min-height: 100%;
  background: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  will-change: transform, -webkit-transform;
  transition: 0.2s ease-in-out;
}

.menuHide .menu-wrap {
  width: 60px;
}

.menu-wrap {
  width: 240px;
  transition: 0.2s ease-in-out;
}

.menu .brand-wrap {
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.menu .brand {
  padding: 41px 24px 24px;
  background: rgba(63, 81, 181, 0.5);
  transition: 0.2s ease-in-out;
}

.menuHide .brand {
  padding: 8px 4px;
  background: #fff;
}

.menu .avatar {
  transition: 0.2s ease-in-out;
  display: block;
  width: 80px;
  height: 80px;
  border: 2px solid #fff;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.menuHide .avatar {
  width: 48px;
  height: 48px;
}

.menu .avatar img {
  width: 100%;
  height: 100%;
}

.menu .introduce {
  margin: 1em 0 0;
  color: #fff;
  transition: 0.2s ease-in-out;
}

.menu .mail {
  display: inline-block;
  padding-top: 4px;
  color: #c5cae9;
  font-size: 13px;
}

.menuHide .introduce, .menuHide .item-title {
  display: none;
}

.item-title {
  font-size: 16px;
}

@media (max-width: 1190px) {
  .menu {
    transform: translate(-100%, 0px);
  }

  .menuHide.menu {
    transform: translate(0, 0px);
  }

  .menuHide .menu-wrap {
    width: 240px;
  }

  .menuHide .introduce, .menuHide .item-title {
    display: inline-block;
  }

  .menuHide .avatar {
    width: 80px;
    height: 80px;
  }

  .menuHide .brand {
    padding: 41px 24px 24px;
    background: rgba(63, 81, 181, 0.5);
  }

  .menuHide .iconfont {
    margin-left: 4px;
  }
}
</style>