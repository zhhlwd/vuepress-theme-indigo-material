<template>
  <div :key="$page.title">
    <el-row
      type="flex"
      justify="center"
      class="post-content"
    >
      <el-col
        :span="16"
        :xs="{span: 24}"
        :sm="{span: 23}"
        :md="{span: 23}"
        :lg="{span: 16}"
        class="post-card"
        id="post-card"
      >
        <Content></Content>
        <span id="footerPost"></span>
      </el-col>
      <el-col
        :span="6"
        class="post-toc"
        id="post-toc"
        :class="{'open-toc': hasToc}"
      >
        <h4 class="catalog-title">TOC</h4>
        <div class="catalog-body">
          <ul
            id="catalog-list"
            class="catalog-list"
          >
            <li
              v-for="(item,index) in catalogList"
              :key="index"
              class="toc-li"
              :class="{active:currentIndex === index}"
            >
              <a
                class="toc-link ellipsis"
                :href="'#' + item"
                :style="{marginLeft: offsetList[index] * 12 + 'px'}"
              >{{'H' + (offsetList[index] + 1) + ' . ' + item}}</a>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-row
      type="flex"
      justify="space-around"
      class="post-nav"
    >
      <el-col
        :span="7"
        class="post-prev"
      >
        <div v-if="!isNaN(prevPost)">
          <router-link :to="content[prevPost].path || '/'">
            <i class="el-icon-arrow-left"></i> Prev
          </router-link>
          <router-link
            tag="p"
            :to="content[prevPost].path || '/'"
            class="nav-title"
          >{{content[prevPost].title}}</router-link>
        </div>
      </el-col>
      <el-col
        class="post-next"
        :lg="{pull: 5}"
        :span="7"
      >
        <div v-if="!isNaN(nextPost)">
          <router-link :to="content[nextPost].path || '/'">
            Next
            <i class="el-icon-arrow-right"></i>
          </router-link>
          <router-link
            tag="p"
            :to="content[nextPost].path || '/'"
            class="nav-title"
          >{{content[nextPost].title}}</router-link>
        </div>
      </el-col>
    </el-row>
    <el-row
      type="flex"
      justify="center"
    >
      <el-col
        :span="23"
        v-if="$themeConfig.vssue.need && $page.title"
      >
        <my-vssue />
      </el-col>
    </el-row>
    <toc-btn @toc="changeToc"></toc-btn>
  </div>
</template>
<script>
import TocBtn from "imComponents/TocBtn";
export default {
  name: "Posts",
  components: {
    TocBtn,
    MyVssue: () => import("imComponents/MyVssue")
  },
  data () {
    return {
      nextPost: 0,
      prevPost: 3,
      allH: [],
      catalogList: [],
      currentIndex: 0,
      offsetList: [],
      hasToc: false
    };
  },
  props: {
    content: {
      type: Array,
      default: () => []
    }
  },
  created () {
    this.getPageIndex();
    setTimeout(() => {
      this.getPageIndex();
    }, 100);
  },
  mounted () {
    setTimeout(() => {
      this.getH();
      this.changeIndex();
    }, 20);
  },
  methods: {
    throttle (fn, wait, maxTimelong) {
      var timeout = null,
        startTime = Date.parse(new Date());

      return function () {
        if (timeout !== null) clearTimeout(timeout);
        var curTime = Date.parse(new Date());
        if (curTime - startTime >= maxTimelong) {
          fn();
          startTime = curTime;
        } else {
          timeout = setTimeout(fn, wait);
        }
      };
    },
    changeToc () {
      this.hasToc = !this.hasToc;
    },
    getH () {
      this.catalogList.splice(0, this.catalogList.length);
      this.offsetList.splice(0, this.offsetList.length);
      this.allH.splice(0, this.allH.length);
      if (typeof window === "undefined") return;
      if (!document.querySelector(".content,default")) {
        return;
      }
      let a = [];
      let allH = document
        .querySelector(".content,default")
        .querySelectorAll("h1,h2,h3,h4,h5,h6");
      if (allH.length === 0) {
        return;
      }
      let nodeArr = [].slice.call(allH);
      nodeArr.forEach((val, i) => {
        this.allH.push(val.offsetTop);
        this.catalogList.push(val.id);
        if (i === 0) {
          a.push(0);
        } else {
          let hNow = Number(val.tagName.slice(1));
          let hPrev = Number(nodeArr[i - 1].tagName.slice(1));
          if (hNow > hPrev) {
            a.push(a[i - 1] + (hNow - hPrev));
          } else if (hNow < hPrev) {
            a.push(a[i - 1] - (hPrev - hNow));
          } else {
            a.push(a[i - 1]);
          }
        }
      });
      let min = a.reduce((x, y) => {
        return x > y ? y : x;
      });
      let offset = Math.abs(min);
      a.forEach(val => {
        if (min < 0) {
          val += offset;
        }
        if (min > 0) {
          val -= offset;
        }
        this.offsetList.push(val);
      });
    },
    getPageIndex () {
      if (this.content.length === 0 || this.content.length === 1) {
        this.nextPost = NaN;
        this.prevPost = NaN;
        return;
      }
      for (var i = 0, len = this.content.length; i < len; i++) {
        if (this.content[i].path === this.$page.path) {
          if (i + 1 === this.content.length) {
            this.nextPost = NaN;
            this.prevPost = i - 1;
          } else if (i - 1 < 0) {
            this.nextPost = i + 1;
            this.prevPost = NaN;
          } else {
            this.nextPost = i + 1;
            this.prevPost = i - 1;
          }
        }
      }
    },
    getScrollTop () {
      if (typeof window === "undefined") return;
      var scrollPos;
      if (window.pageYOffset) {
        scrollPos = window.pageYOffset;
      } else if (document.compatMode && document.compatMode != "BackCompat") {
        scrollPos = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollPos = document.body.scrollTop;
      }
      return scrollPos;
    },
    changeIndex () {
      if (typeof window === "undefined") return;
      const _this = this;
      window.addEventListener(
        "scroll",
        _this.throttle(
          function (e) {
            if (_this.$route.path.slice(0, 7) !== "/posts/") return;
            let h = _this.getScrollTop();
            const postCard = document.getElementById("post-card");
            for (let i = 0, len = _this.allH.length; i < len; i++) {
              if (i + 1 === _this.allH.length || h < _this.allH[i]) {
                return (_this.currentIndex = i);
              }
              if (h >= _this.allH[i] && h < _this.allH[i + 1]) {
                return (_this.currentIndex = i);
              }
            }
          },
          60,
          110
        )
      );
      window.addEventListener("scroll", function () {
        if (_this.$route.path.slice(0, 7) !== "/posts/") return;
        const toc = document.getElementById("post-toc");
        let h = _this.getScrollTop();
        if (h >= 240) {
          toc.classList.add("fixed");
        } else {
          toc.classList.remove("fixed");
        }
        const navH = document.getElementById("footerPost").offsetTop;
        if (h >= navH - 20) {
          toc.classList.remove("fixed");
        }
        if (h < navH && h >= navH - 500) {
          toc.classList.add("fixed");
        }
      });
    }
  },
  watch: {
    $route (to, from) {
      if (to.path.slice(0, 7) === "/posts/") {
        this.getPageIndex();
        setTimeout(() => {
          this.getH();
          this.changeIndex();
        }, 20);
      }
    },
    deep: true
  }
};
</script>
<style lang="scss" scoped>
.post-content {
  position: relative;
  margin-top: -34px;
  padding-bottom: 40px;
}
.post-card {
  margin-right: 20%;
  padding: 35px;
  background: #fff;
  transition: 0.2s all ease-in-out;
  border-radius: 9px;
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
    0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
}
@media (max-width: 1190px) {
  .post-card {
    margin-right: 0;
  }
}
.post-prev,
.post-next {
  display: flex;
  flex-direction: column;
  font-size: 18px;
  vertical-align: middle;
  i {
    vertical-align: bottom;
  }
  a:hover,
  p:hover {
    background-color: #e8e8e8;
    cursor: pointer;
  }
}
.post-prev {
  text-align: left;
}
.post-next {
  text-align: right;
}
.nav-title {
  color: #3f51b5;
}

.el-col-6 {
  width: 22%;
}
.catalog-title {
  margin-bottom: -10px;
  text-align: center;
  transition: all 0.2s ease-in-out;
}
.post-toc {
  position: absolute;
  margin-left: 45px;
  height: 60vh;
  overflow-y: auto;
  width: 18vw;
  top: 69px;
  right: 24px;
  border-radius: 16px;
  background: #f6f6f6;
}
.fixed {
  position: fixed;
  top: 69px;
}

@media (min-width: 1190px) {
  .post-card {
    width: 66.66667%;
  }
}

@media (max-width: 1190px) {
  .post-toc {
    position: fixed;
    top: auto;
    bottom: 70px;
    right: 20px;
    width: 88%;
    transform: translateX(125%);
    z-index: 77;
  }
  .open-toc {
    transform: translateX(0);
  }
  .post-card {
    padding: 13px;
  }
}

@media (max-width: 766px) {
  .post-card {
    border-radius: 0;
    box-shadow: none;
  }
}
.toc-link:before,
.toc-link:after {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  left: 3px;
  height: 100%;
}
.toc-li.active > .toc-link:after {
  border-left: 3px solid #3f51b5;
  left: 3px;
}
.toc-li.active > .toc-link:before {
  background: rgba(0, 0, 0, 0.06);
}
.catalog-body {
  .catalog-list {
    font-size: 13px;
    list-style: none;
    cursor: pointer;

    .toc-li {
      height: 26px;
    }
    a {
      display: block;
      padding: 3px 5px 3px 9px;
      margin: 4px 0;
      position: relative;
      font-weight: 600;
      font-size: 14px;
      color: inherit;
    }

    .active a {
      color: #3f51b5;
    }
  }
}
</style>