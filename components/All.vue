<template>
  <div class="all-warp">
    <el-row
      type="flex"
      justify="center"
      align="middle"
      v-if="!poList.length"
    >
      <el-col
        :span="20"
        :xs="{span: 23}"
        :sm="{span: 23}"
        :md="{span: 23}"
        :lg="{span: 20}"
      >
        <el-card
          class="box-card"
          key="noHasPostAll"
        >
          <div slot="header">
            <p class="post-title-time">现在什么都没有,快点开始你的第一篇文章吧~~</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div
      v-for="(item,index) in poList"
      :key="index"
    >
      <h3>{{item[0]}}</h3>
      <el-row
        type="flex"
        justify="center"
        align="middle"
        class="post-warp"
      >
        <template v-for="(post,i) in item">
          <el-col
            :span="20"
            :xs="{span:23}"
            :sm="{span:23}"
            :md="{span:23}"
            :lg="{span:20}"
            :key="i"
            v-if="i !== 0"
            class="post"
          >
            <el-card class="box-card">
              <div slot="header">
                <p class="post-title-time">{{post.lastUpdated}}</p>
                <router-link
                  :to="post.path"
                  class="post-title-link"
                >{{post.title}}</router-link>
              </div>
              <div v-if="(post.excerpt || post.tags.length)">
                <div v-if="post.excerpt">
                  <div class="post-excerpt">{{post.excerpt}}</div>
                </div>
                <div
                  class="post-footer"
                  v-if="post.tags.length"
                >
                  <el-tag
                    @click="toTaglist"
                    v-for="(tag, index) in post.tags"
                    :key="index"
                    size="medium"
                    :hit="true"
                  >{{tag}}</el-tag>
                </div>
              </div>
            </el-card>
          </el-col>
        </template>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "All",
  data () {
    return {
      poList: []
    };
  },
  props: {
    content: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    toTaglist (e) {
      this.$router.push("/tags/" + e.target.innerText);
    }
  },
  created () {
    import(/* webpackChunkName: "poList" */ "imData/poList.js").then(poList => {
      this.poList = poList.default;
    });
  }
};
</script>
<style lang="stylus" scoped>
.all-warp {
  margin-top: 15px;

  h3 {
    color: #3f51b5;
    font-size: 20px;
    text-align: center;
  }
}

.post-warp {
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.post {
  margin: 10px;
}
</style>