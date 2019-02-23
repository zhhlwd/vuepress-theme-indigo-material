<script>
import "imStyles/vssue.styl";
export default {
  name: "MyVssue",
  render (h) {
    if (process.env.NODE_ENV === "development") {
      var name = "development";
    } else {
      var name = "production";
    }
    return h("Vssue", {
      props: {
        title: this.$page.title,
        options: this.$themeConfig.vssue[name]
      },
      class: {
        "vssue-warp": "vssue-warp"
      }
    });
  }
};
</script>
<style lang="stylus">
.vssue-warp {
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
  background: white;
  border-radius: 10px;
  margin: 20px 0;
}
</style>
