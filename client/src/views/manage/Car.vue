<template>
  <div>
    <my-table :data="cars" @ref="getCars" @show-form="showForm" @del="del" />
    <turnPage @current-page="turnPage" :now-page="nowPage" :total-page="totalPage" />
    <my-form v-if="isShow" @cancal="cancal" @submit="submit">
      <div>
        <span>车辆名称</span>
        <input type="text" v-model="item.name" />
      </div>
      <div>
        <span>极速</span>
        <input type="number" v-model="item.topSpeed" />
      </div>
      <div>
        <span>加速</span>
        <input type="number" v-model="item.acceleration" />
      </div>
      <div>
        <span>操控</span>
        <input type="number" v-model="item.handling" />
      </div>
      <div>
        <span>氮气</span>
        <input type="number" v-model="item.nitro" />
      </div>
      <div>
        <span>星级</span>
        <select name="star" id="star" v-model="item.star">
          <option :value="i+2" v-for="i of 4" :key="i">{{i+2}}</option>
        </select>
      </div>
      <div>
        <span>等级</span>
        <select name="rank" id="rank" v-model="item.rank">
          <option :value="index" v-for="index of 'DCBAS'" :key="index">{{index}}</option>
        </select>
      </div>
      <div>
        <span>性能分</span>
        <input type="number" v-model="item.point" />
      </div>
      <div>
        <span>油量</span>
        <select name="gas" id="gas" v-model="item.gas">
          <option :value="i+2" v-for="i of 4" :key="i">{{i+2}}</option>
        </select>
      </div>
      <div>
        <span>图片地址</span>
        <input type="text" v-model="item.imgUrl" />
      </div>
    </my-form>
  </div>
</template>

<script>
import api from "@/api";
import myTable from "@/components/Table.vue";
import myForm from "@/components/Form";
import turnPage from "@/components/TurnPage.vue";

export default {
  data() {
    return {
      nowPage: 1,
      limit: 10,

      cars: [],
      item: {},

      isShow: false,
      totalPage: 1,
    };
  },
  created() {
    this.getCars();
  },
  methods: {
    getCars() {
      const { nowPage, limit } = this;
      this.cars = [];
      api.getCars({ nowPage, limit }).then((res) => {
        res = res.data.data;
        console.log("getCars:", res.rows);
        this.cars = res.rows;
        this.totalPage = Math.ceil(res.count / this.limit);
      });
    },

    showForm(e) {
      this.isShow = true;
      if (e.type === "edit") {
        this.item = this.cars[e.index];
      }
    },

    cancal() {
      this.isShow = false;
      const item = { ...this.item };
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          item[key] = "";
        }
      }
      this.item = item;
    },

    submit() {
      const params = { ...this.item };
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          const element = params[key];
          if (key !== "id" && element === "") {
            window.alert(`请填写${key}`);
            return;
          }
        }
      }
      console.log(params);
      if (params.id) {
        console.log("u", params.id);
        // api.updateCar(params.id, params);
      } else {
        console.log("a");
        // api.addCar(params);
      }
      this.cancal();
      this.getCars();
    },

    del(id) {
      api.deleteCar(id).then((res) => {
        // console.log(res);
        this.getCars();
      });
    },

    turnPage(np) {
      this.nowPage = np;
      this.getCars(np, undefined);
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