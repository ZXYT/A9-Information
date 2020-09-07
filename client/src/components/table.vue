<template>
  <div class="table">
    <div class="head">
      <my-search class="search" @search="search" />
      <span class="btns">
        <button @click="$emit('show-form', '')">
          <i :class="{'iconfont': true, 'icon-add': true}"></i>
        </button>
        <button @click="$emit('ref')">
          <i :class="{'iconfont': true, 'icon-refresh': true}"></i>
        </button>
      </span>
    </div>

    <table>
      <thead>
        <tr>
          <th v-for="(name, index) of th" :key="index">{{name}}</th>
          <th>operate</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) of list" :key="index">
          <td v-for="(thName, thIndex) of th" :key="thIndex">{{item[thName]}}</td>
          <td class="operate">
            <button @click="$emit('show-form', { type: 'edit', index })">编辑</button>
            <button @click="del(item.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import mySearch from "@/components/search.vue";

export default {
  props: {
    data: Array,
  },

  data() {
    return {
      isShow: false,
      // list: [],
      item: null,
      type: "",
    };
  },

  components: {
    mySearch,
  },

  computed: {
    list() {
      return this.data;
    },
    th() {
      if (this.list && this.list[0]) {
        return Object.keys(this.list[0]).filter((ele) => ele !== "deletedAt");
      }
    },
  },

  watch: {
    data() {
      console.log(data)
    }
  },

  methods: {
    del(index) {
      const flag = window.confirm("是否确认删除");
      if (flag) {
        // console.log("del:", index);
        this.$emit("del", index);
      }
    },
    search(sw) {
      // const { searchWorld } = this;
      // if (searchWorld) {
      //   this.$emit("search", searchWorld);
      //   this.searchWorld = "";
      // }
      console.log(sw);
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  height: 550px;
  .head {
    display: flex;
    .search {
      padding: 5px 0;
    }
  }
  table {
    width: 100%;
    text-align: center;
    line-height: 2em;
    thead {
      background-color: rgba(173, 162, 162, 0.205);
    }
    th,
    td {
      max-width: 40px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &.operate {
        width: 200px;
      }
    }
  }
}
</style>