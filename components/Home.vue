<template>
  <div class="marginTop">
    <el-row
      type="flex"
      justify="center"
      align="middle"
      v-for="item in posts"
      :key="item.id"
    >
      <el-col
        :span="20"
        :xs="{span: 23}"
        :sm="{span: 23}"
        :md="{span: 23}"
        :lg="{span: 20}"
        class="post-card"
      >
        <el-card class="box-card">
          <div slot="header">
            <p class="post-title-time">{{item.lastUpdated}}</p>
            <router-link
              :to="item.path"
              class="post-title-link"
            >{{item.title}}</router-link>
          </div>
          <div v-if="(item.excerpt && item.tags.length)">
            <div v-if="item.excerpt">
              <div class="post-excerpt">{{"摘要~~~：" + item.excerpt}}</div>
            </div>
            <div
              class="post-footer"
              v-if="item.tags.length"
            >
              <el-tag
                @click="toTaglist"
                v-for="(tag, index) in item.tags"
                :key="index"
                size="medium"
                :hit="true"
              >{{tag}}</el-tag>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row
      class="pagination-wrap"
      type="flex"
      justify="center"
      align="middle"
      v-show="content.length"
    >
      <el-col
        :span="16"
        :xs="{span: 24}"
        :sm="{span: 20}"
        :md="{span: 18}"
        :lg="{span: 16}"
      >
        <el-pagination
          :current-page="currentPage"
          class="pagination"
          background
          @current-change="changePage"
          layout="prev, pager, next"
          :page-size="pagination"
          :total="content.length"
          key="fenyei"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Home",
  data () {
    return {
      currentPage: 1
    };
  },
  props: {
    content: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    pagination () {
      return +this.$themeConfig.pagination || 5;
    },
    posts () {
      return this.content.slice(
        this.pagination * this.currentPage - this.pagination,
        this.pagination * this.currentPage
      );
    }
  },
  methods: {
    changePage (index) {
      this.currentPage = index;
      window.scrollTo({ top: 0 });
    },
    toTaglist (e) {
      this.$router.push("/tags/" + e.target.innerText);
    }
  }
};
</script>

<style lang="stylus" scoped>
.box-card {
  margin-top: 11px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:first-child {
    margin-top: 20px;
  }

  &:last-child {
    margin-bottom: 10px;
  }
}

.pagination >>> .el-pager li {
  width: 34px;
  height: 34px;
  margin: 0 5px;
  background-color: #f4f4f5;
  color: #606266;
  background: #fff;
  border-radius: 4px;
  font-weight: 500;
  color: #000;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.pagination >>> .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #3f51b5;
  color: #fff;
}

.pagination >>> .el-pagination.is-background .btn-prev, .el-pagination.is-background .btn-next {
  padding: 0;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 30px;
  border-radius: 4px;
  width: 30px;
  margin: 0.3rem 10px;
  background: #fff;
}

.pagination-wrap {
  margin-bottom: 24px;
  margin-top: 7px;

  >>> .el-pager {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      margin: 5px;
    }
  }
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1190px) {
  .post-card {
    width: 83.33333%;
  }
}

@media (max-width: 1190px) {
  .box-card:first-child {
    margin-top: 5px;
  }
}
</style>