<template>
  <div>
    <my-table :data="events" @ref="getEvents" @show-form="showForm" @del="del" />
    <turnPage
      v-if="totalPage > 1"
      @current-page="turnPage"
      :now-page="nowPage"
      :total-page="totalPage"
    />
    <my-form v-if="isShow" @cancal="cancal" @submit="submit">
      <div>
        <span>赛事名称</span>
        <input type="text" v-model="name" />
      </div>
      <div>
        <span>结束时间</span>
        <input type="datetime-local" v-model="endTime" />
      </div>
      <div>
        <span>赛事类型</span>
        <select name="eventClass" v-model="eventClass">
          <option :value="i" v-for="i of 3" :key="i">{{i}}</option>
        </select>
      </div>
    </my-form>
  </div>
</template>

<script>
import api from "@/api";
import myTable from "../table.vue";
import myForm from "@/components/myForm.vue";
import turnPage from "@/components/turnPage.vue";

export default {
  data() {
    return {
      name: "",
      endTime: "",
      eventClass: 0,

      nowPage: 1,
      limit: 10,
      totalPage: 1,

      events: [],
      item: null,

      isShow: false,
    };
  },
  created() {
    this.getEvents();
  },
  methods: {
    getEvents() {
      const { nowPage, limit } = this;
      this.events = [];
      api.getEvents({ nowPage, limit }).then((res) => {
        res = res.data.data;
        console.log("getEvents:", res.rows);
        this.events = res.rows;
        res.rows.map((item) => {
          item.endTime = item.endTime.replace(
            /T[\d]{2}/,
            `T${(+item.endTime.slice(11, 13) + 8).toString().padStart(2, "0")}`
          ).slice(0, 16);
          return item;
        });
        this.totalPage = Math.ceil(res.count / this.limit);
      });
    },

    showForm(e) {
      this.isShow = true;
      // console.log("showForm", e);
      if (e.type === "edit") {
        // console.log("edit", this.events[e.index]);
        const item = this.events[e.index];
        // console.log(item.id);
        this.item = item;
        this.name = item.name;
        this.eventClass = item.eventClass;
        console.log(item.endTime);
        this.endTime = item.endTime
      }
    },

    cancal() {
      this.isShow = false;
      this.name = "";
      this.endTime = "";
      this.item = null;
    },

    submit() {
      const { name, endTime, eventClass } = this;
      if (name === "" || endTime === "") {
        window.alert("请填写完整信息");
        return;
      }
      const params = {
        name,
        endTime,
        eventClass,
      };
      // console.log(params);
      if (this.item) {
        console.log("u", this.item.id, params);
        api.updateEvent(this.item.id, params);
      } else {
        console.log("a");
        api.addEvent(params);
      }
      this.isShow = false;
      this.name = "";
      this.endTime = "";
      this.eventClass = 0;
      this.item = null;
      this.getEvents();
    },

    del(id) {
      // console.log("del:", id);
      api.deleteEvent(id).then((res) => {
        console.log(res);
        this.getEvents();
      });
    },

    turnPage(np) {
      // console.log(np)
      this.nowPage = np;
      this.getEvents(undefined, undefined);
    },
  },
  components: {
    myTable,
    myForm,
    turnPage,
  },
};
</script>

<style>
</style>