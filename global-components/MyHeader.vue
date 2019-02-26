<template>
  <el-header
    id="topHeader"
    :style="{paddingLeft: headerLeft + 'px'}"
    class="top-header"
    :class="{headerShadow: hasShadow}"
  >
    <el-row
      type="flex"
      align="middle"
      class="header-warp"
    >
      <el-col
        :span="12"
        :xs="{span: 7}"
      >
        <el-row
          type="flex"
          align="middle"
        >
          <el-col :span="2">
            <el-button
              @click="clickMenu"
              type="primary"
              circle
              key="menusBtn"
            >
              <i
                class="iconfont"
                :class="[iconName]"
              ></i>
            </el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col
        :span="20"
        :xs="{span: 24}"
      >
        <div class="grid-content bg-purple-light">
          <el-row
            type="flex"
            align="middle"
            justify="end"
          >
            <el-col
              :span="13"
              :xs="{span: 24}"
              :sm="{span: 21}"
              :md="{span: 17}"
              :lg="{span: 13}"
            >
              <el-autocomplete
                v-model="searchVal"
                @select="handleSelect"
                class="search-input"
                popper-class="search-popper"
                :fetch-suggestions="querySearch"
                :placeholder="placeholder"
                size="small"
                :trigger-on-focus="false"
                clearable
              >
                <i
                  slot="suffix"
                  class="el-input__icon el-icon-search search-ico"
                ></i>
                <template slot-scope="{ item }">
                  <div class="name">{{item.title}}</div>
                  <span
                    class="addr addr-active"
                    v-if="hasResults"
                  >{{ item.strippedContent.slice(item.searchIndex, item.searchIndex + queryStrlen) }}</span>
                  <span
                    class="addr addr-last"
                    v-if="hasResults"
                  >{{ item.strippedContent.slice(item.searchIndex + queryStrlen) }}</span>
                </template>
              </el-autocomplete>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>
<script>
export default {
  name: "Header",
  props: {
    showIcon: {
      type: Boolean,
      default: false
    },
    restaurants: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      headerLeft: 260,
      searchVal: "",
      hasShadow: false,
      queryStrlen: 1,
      hasResults: true
    };
  },
  computed: {
    placeholder () {
      return this.$themeConfig.placeholder || "";
    },
    searchReply () {
      return this.$themeConfig.searchReply || "什么都没搜到，试一下其它搜索词~";
    },
    iconName () {
      if (typeof window === "undefined") return "icon-caidan";
      if (window.innerWidth <= 1190) {
        return this.showIcon ? "icon-guanbi" : "icon-caidan";
      }
      return this.showIcon ? "icon-caidan" : "icon-guanbi";
    }
  },
  methods: {
    clickMenu () {
      this.$emit("clickMenu");
      if (typeof window === "undefined") return;
      if (window.innerWidth <= 1190) {
        return;
      }
      if (this.headerLeft == 65) {
        this.headerLeft = 260;
      } else {
        this.headerLeft = 65;
      }
    },
    querySearch (queryString, cb) {
      this.hasResults = true;
      this.queryStrlen = queryString.length;
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      if (results.length === 0) {
        this.hasResults = false;
        results.push({
          title: this.searchReply,
          has: false
        });
      }
      cb(results);
    },
    createFilter (queryString) {
      return restaurant => {
        let searchIndex = restaurant.strippedContent
          .toLowerCase()
          .indexOf(queryString.toLowerCase());
        if (searchIndex > -1) {
          restaurant.searchIndex = searchIndex;
          return true;
        } else {
          return false;
        }
        return searchIndex > -1;
      };
    },
    handleSelect (item) {
      if (item.title === this.searchReply) return;
      this.$router.push(item.path);
    },
    getScrollTop () {
      var scrollPos;
      if (typeof window === "undefined") return;
      if (window.pageYOffset) {
        scrollPos = window.pageYOffset;
      } else if (document.compatMode && document.compatMode != "BackCompat") {
        scrollPos = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollPos = document.body.scrollTop;
      }
      return scrollPos;
    },
    bindScrl () {
      const _this = this;
      let topScroll = _this.getScrollTop();
      if (topScroll > 190) {
        this.hasShadow = true;
      } else {
        this.hasShadow = false;
      }
      window.onscroll = function () {
        let topScroll = _this.getScrollTop();
        if (topScroll > 190) {
          _this.hasShadow = true;
        } else {
          _this.hasShadow = false;
        }
      };
    }
  },
  mounted () {
    this.bindScrl();
  },
  activated () {
    this.bindScrl();
  }
};
</script>
<style>
.header-warp {
  width: 100%;
  height: 100%;
}
@media (max-width: 1190px) {
  #topHeader {
    padding-left: 0 !important;
  }
}
.headerShadow {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
}
.el-autocomplete-suggestion li:hover {
  background-color: #d5dfee;
}
.el-autocomplete-suggestion li.highlighted {
  background-color: #d5dfee;
}
</style>

<style lang="stylus" scoped>
.top-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  color: #fff;
  height: 56px;
  background: #3f51b5;
  padding-left: 260px;
  transition: padding-left 0.2s ease-in-out, background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s linear;
  z-index: 30;
  height: 56px !important;
  padding-top: 3px;
}

.iconfont {
  font-size: 32px;
}

.icon-caidan, .icon-guanbi {
  font-size: 24px;
}

.search-ico {
  font-size: 24px;
  padding-right: 11px;
}

.search-input >>> input {
  border-radius: 2rem;
}

.search-input {
  width: 100%;
}

.search-popper {
  .el-autocomplete-suggestion__wrap {
    margin-bottom: 0px !important;

    li:not(lastChild) {
      border-bottom: 1px solid;
      margin-bottom: 5px;
    }
  }

  .name {
    border-radius: 5px;
    padding: 0 11px;
    background-color: #3f51b5;
    white-space: nowrap;
    overflow: hidden;
    color: white;
    text-overflow: ellipsis;
  }

  .addr {
    border-radius: 5px;
    padding: 0 11px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .addr-active {
    background-color: #6973a8;
    border-radius: 3px;
    color: #fff;
    padding: 0 3px 0 2px;
    margin-left: 11px;
  }

  .addr-last {
    padding-left: 0;
  }
}
</style>