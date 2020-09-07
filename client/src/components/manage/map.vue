<template>
  <div>
    <my-table :data="maps" @search="search" @ref="getMaps" @show-form="showFrom" @del="del" />
    <turnPage @current-page="turnPage" :now-page="nowPage" :total-page="totalPage" />
    <my-form v-if="showPanel" @cancal="cancal" @submit="submit">
      <div>
        <span>地名</span>
        <select name="PlaceId" v-model="item.PlaceId">
          <option :value="place.id" v-for="(place, index) of placeList" :key="index">{{place.name}}</option>
        </select>
      </div>
      <div>
        <span>图名</span>
        <input type="text" v-model="item.name" />
      </div>
      <div>
        <span>时长</span>
        <select name="duration" id v-model="item.duration">
          <option :value="(i-1)*30" v-for="i of 5" :key="i">{{(i-1)*30}}</option>
        </select>
      </div>
      <div>
        <span>图片地址</span>
        <input type="text" v-model="item.imgUrl" v-if="!isUpload" />
        <input type="file" name="img" accept="image/*" v-else />
        <button class="minbtn" @click="upload">
          <i :class="{'iconfont': true, 'icon-upload': true}"></i>
        </button>
      </div>
    </my-form>
  </div>
</template>

<script>
import api from "@/api";
import myTable from "../table.vue";
import myForm from "@/components/myForm";
import turnPage from "@/components/turnPage.vue";

export default {
  data() {
    return {
      isUpload: false,

      nowPage: 1,
      totalPage: 0,
      limit: 10,

      maps: [],
      item: {},
      showPanel: false,
    };
  },

  created() {
    api.getPlaces().then((res) => {
      this.placeList = res.data.data;
    });
    this.getMaps();
  },

  methods: {
    getMaps(limit, placeId) {
      const page = this.nowPage;
      this.maps = [];
      api.getMaps({ page, limit, placeId }).then((res) => {
        res = res.data.data;
        console.log("getmaps:", res.rows);
        this.maps = res.rows;
        this.totalPage = Math.ceil(res.count / this.limit);
      });
    },

    showFrom(e) {
      this.showPanel = true;

      // console.log("showtable", e);
      if (e.type === "edit") {
        // console.log("edit", this.maps[e.index]);

        this.item = this.maps[e.index];
      }
    },

    search(searchWorld) {
      console.log(searchWorld);
      // this.getMaps();
    },

    cancal() {
      this.showPanel = false;
      this.isUpload = false;

      const item = { ...this.item };
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          item[key] = "";
        }
      }
      this.item = item;
    },

    del(id) {
      // console.log("del:", id);
      api.deleteMap(id).then((res) => {
        // console.log(res);
        this.getMaps();
      });
    },

    async submit() {
      if (this.isUpload) {
        console.log("upload");
        await this.uploadImg();
      }
      const params = { ...this.item };
      // console.log(params.imgUrl);
      if (!params.name) {
        window.alert("图名不能为空");
        return;
      }
      // console.log(params);
      if (params.id) {
        // console.log("edit", params.id);
        api.updateMap(params.id, params);
      } else {
        // console.log('add')
        api.addMap(params);
      }
      this.cancal();
      this.getMaps();
    },

    async uploadImg() {
      const dom = document.querySelector("[name=img]");
      if (dom) {
        const file = dom.files[0];
        const formData = new FormData();
        formData.append("img", file, file.name);
        const result = await api.upload("map", formData);
        this.item.imgUrl = result.data.data;
        // console.log(this.item.imgUrl);
      }
    },

    upload() {
      this.isUpload = !this.isUpload;
    },

    turnPage(np) {
      // console.log(np)
      this.nowPage = np;
      this.getMaps(undefined, undefined);
    },
  },
  components: {
    myTable,
    myForm,
    turnPage,
  },
};
</script>

<style lang="scss" scoped>
.minbtn {
  padding: 5px 5px;
}
</style>
