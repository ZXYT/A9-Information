<template>
  <my-form @cancal="cancal" @submit="submit">
    <div>
      <span>用户名</span>
      <input type="text" v-model="user.id" />
    </div>
    <div>
      <span>密码</span>
      <input type="text" v-model="user.pwd" />
    </div>
  </my-form>
</template>

<script>
import myForm from "@/components/myForm.vue";

export default {
  data() {
    return {
      user: {},
    };
  },

  components: {
    myForm,
  },

  methods: {
    cancal() {
      this.$router.push("/");
    },

    async submit() {
      // console.log(this.user)
      const { id: loginId, pwd: loginPwd } = this.user;
      if(!loginId || !loginPwd) {
        return
      }
      const user = await this.$store.dispatch("loginUser/login", {
        loginId,
        loginPwd,
      });
      if (user) {
        this.$router.push("/");
      } else {
        alert("err");
      }
    },
  },
};
</script>

<style>
</style>