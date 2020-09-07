<template>
  <div class="search">
    <input type="text" v-model="searchWorld" :placeholder="placeholder" />
    <button class="search-btn" @click="search">
      <i :class="{'iconfont': true, 'icon-search': true}"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "请输入关键词",
    },
  },

  data() {
    return {
      searchWorld: "",
    };
  },

  methods: {
    search() {
      const { searchWorld: sw } = this;
      if (sw) {
        this.$emit("search", sw);
        this.searchWorld = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: inline-block;
  position: relative;
  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid;
  }
  .search-btn {
    position: absolute;
    margin: 0;
    right: 0;
    padding: 10px 15px;
    outline: none;
    border-radius: 0 5px 5px 0;
  }
}
</style>