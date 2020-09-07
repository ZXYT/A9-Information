<template>
  <div class="nav">
    <ul>
      <li
        @click="changeIndex(index)"
        :class="{active: index === curIndex}"
        v-for="(navClass, index) of navList"
        :key="navClass.id"
      >{{navClass.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    navList: Array,
  },

  data() {
    return {
      curIndex: 0,
    };
  },

  methods: {
    changeIndex(index) {
      // console.log(index);
      this.curIndex = index;
      this.$emit("change-index", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  > ul {
    display: flex;
    > li {
      cursor: pointer;
      margin-right: 10px;
      background-color: #fff;
      color: rgb(14, 40, 124);
      border: 1px solid rgb(14, 40, 124);
      box-sizing: border-box;
      padding: 10px;
      border-radius: 5px;
      &.active {
        background-color: rgb(12, 45, 117);
        color: #fff;
      }
    }
  }
}
</style>