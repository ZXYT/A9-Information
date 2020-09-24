<template>
  <div id="app">
    <div id="head">
      <div class="content">
        <router-link to="/">狂野飙车9游戏资讯</router-link>
        <div>
          <span class="nav">
            <router-link to="/home">首页</router-link>
            <router-link to="/map">地图</router-link>
            <router-link to="/car">车辆</router-link>
            <router-link to="/manage">管理</router-link>
          </span>
          <span class="login">
            <a v-if="data" @click="loginOut">
              {{data.loginId}}
              <i :class="{'iconfont': true, 'icon-loginOut': true}"></i>
            </a>
            <router-link v-else to="/Login">登录</router-link>
          </span>
        </div>
      </div>
    </div>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState("loginUser", ["data", "isLoading"]),

  methods: {
    loginOut() {
      const flag = window.confirm("是否要退出登录");
      if (!flag) return;
      this.$store.dispatch("loginUser/loginOut");
      if (this.$route.path !== "/home") {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#head {
  z-index: 1000;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 10px;
  background-color: rgb(55, 9, 97);
  color: #fff;
  box-shadow: 0 6px 6px rgba($color: #000000, $alpha: 0.16);

  .content {
    width: 940px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    justify-content: space-between;

    a {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }

    .nav {
      a {
        padding: 10px 20px;
        text-align: center;
        display: inline-block;
        // width: 80px;
        &.router-link-active {
          // font-weight: bold;
          background-color: #fff;
          color: rgb(55, 9, 97);
        }
      }
    }

    .login {
      display: inline-block;
      text-align: center;
      width: 72px;
    }
  }
}

.container {
  // display: flex;
  margin: 20px auto;
  margin-top: 80px;
  width: 940px;
  user-select: none;
  background-color: #fff;
}
</style>
