<template>
  <div class="manage">
    <div class="nav">
      <ul>
        <li v-for="(item, index) of navList" :key="index">
          <router-link :to="`/manage/${item.url}`">{{item.name}}</router-link>
        </li>
      </ul>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { url: "event", name: "赛事" },
        { url: "map", name: "地图" },
        { url: "car", name: "车辆" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.manage {
  padding: 20px;
  .nav {
    > ul {
      display: flex;
      > li {
        margin-right: 10px;
        a {
          background-color: #fff;
          color: rgb(14, 40, 124);
          border: 1px solid rgb(14, 40, 124);
          box-sizing: border-box;
          display: block;
          padding: 10px;
          border-radius: 5px;
          text-decoration: none;
          &.router-link-exact-active {
            background-color: rgb(12, 45, 117);
            color: #fff;
          }
        }
      }
    }
  }
}
</style>