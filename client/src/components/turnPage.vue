<template>
  <ul id="turn-page">
    <li class="prev-page" @click="turnPage('prev')">上一页</li>
    <template v-if="totalPage < 8">
      <li
        v-for="i in totalPage"
        :key="i"
        :class="{active: i === nowPage }"
        @click="turnPage(i)"
      >{{ i }}</li>
    </template>
    <template v-else>
      <!-- nowPage <= 4 -->
      <template v-if="nowPage <= 4">
        <li v-for="i in 7" :key="i" :class="{active: i == nowPage}" @click="turnPage(i)">{{ i }}</li>
      </template>
      <!-- nowPage > 4 -->
      <template v-if="nowPage > 4">
        <li @click="turnPage(1)">1</li>
        <li @click="turnPage(nowPage - 5)">...</li>
      </template>
      <!--  nowPage > 4 && nowPage <= totalPage - 4 -->
      <template v-if="nowPage > 4 && nowPage <= totalPage - 4">
        <li
          v-for="i in 5"
          :key="nowPage-3+i"
          :class="{active:   i == 3 }"
          @click="turnPage(nowPage-3+i)"
        >{{ nowPage - 3 + i }}</li>
        <!-- n-2,n-1,n,n+1, n+2 -->
        <!-- n-3 +1, n-3+2, n-3+3, n-3+4, n-3+5 -->
      </template>

      <!-- nowPage <= totalPage - 4 -->
      <template v-if="nowPage <= totalPage - 4">
        <li @click="turnPage(nowPage + 5)">...</li>
        <li @click="turnPage(totalPage)">{{ totalPage }}</li>
      </template>
      <!-- nowPage > totalPage - 4 97 > 96 -->
      <template v-if="nowPage > totalPage - 4">
        <li
          v-for="i in 7"
          :key="totalPage - 7 + i"
          :class="{active: totalPage - 7 + i == nowPage}"
          @click="turnPage(totalPage - 7 + i)"
        >{{ totalPage - 7 + i }}</li>
        <!-- t-5, t-4, t-3, t-2, t-1, t -->
        <!-- t-6+1, t-6+2 -->
      </template>
    </template>
    <li class="next-page" @click="turnPage('next')">下一页</li>
  </ul>
</template>

<script>
export default {
  props: {
    nowPage: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      np: null,
    };
  },
  methods: {
    turnPage(page) {
      if (page === "prev") {
        if (this.nowPage <= 1) {
          return;
        }
        this.np = this.nowPage - 1;
      } else if (page === "next") {
        if (this.nowPage >= this.totalPage) {
          return;
        }
        this.np = this.nowPage + 1;
      } else {
        if (page <= 1) {
          this.np = 1;
        } else if (page >= this.totalPage) {
          this.np = this.totalPage;
        } else {
          this.np = page;
        }
      }
      this.$emit("current-page", this.np);
    },
  },
};
</script>

<style lang="scss" scoped>
#turn-page {
  margin: 20px auto 0;
  display: flex;
  justify-content: center;
  li {
    text-align: center;
    width: 40px;
    padding: 10px 0;
    margin: 0 5px;
    background-color: #fff;
    color: rgb(14, 40, 124);
    border: 1px solid rgb(14, 40, 124);
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    &.prev-page,
    &.next-page {
      width: 80px;
    }
    &.active {
      background-color: rgb(14, 40, 124);
      color: #fff;
    }
  }
}
</style>