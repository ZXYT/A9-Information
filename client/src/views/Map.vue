<template>
  <div class="map">
    <div class="head">
      <my-search @search="search"></my-search>
    </div>
    <div class="body">
      <div class="nav">
        <ul>
          <li v-for="(place) of placeList" :key="place.id">
            <div class="place" @click="changePlace(place)">
              <span>{{place.name}}</span>
              <i :class="{'iconfont': true, 'icon-down': true}"></i>
            </div>

            <ul v-show="showPanel && place.id === currentPlace.id">
              <li
                :class="{active: map.id === currentMap.id}"
                v-for="(map) of mapList"
                :key="map.id"
                @click="changeMap(map)"
              >{{map.name}}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="content">
        <img :src="getImgUrl" alt />
        <div class="text">
          <h2>{{currentPlace.name}}</h2>
          <div>{{currentMap.name}}</div>
          <div>{{currentMap.duration}}''</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import mySearch from "@/components/search.vue";

export default {
  data() {
    return {
      showPanel: true,
      placeList: [],
      mapList: [],

      currentPlace: {},
      currentMap: {},

      page: 1,
      limit: 1000,
    };
  },

  components: {
    mySearch,
  },

  created() {
    this.getPlaces()
    this.getMaps();
  },

  methods: {
    getPlaces() {
      api.getPlaces().then((res) => {
        res = res.data.data;
        // console.log(res);
        this.placeList = res;
        this.currentPlace = res[0];
      });
    },
    
    getMaps(placeId, name) {
      const { page, limit } = this;
      api.getMaps({ page, limit, placeId, name }).then((res) => {
        res = res.data.data.rows;
        // console.log(res);
        this.mapList = res;
        this.currentMap = res[0];
      });
    },

    changePlace(place) {
      if (place.id === this.currentPlace.id) {
        this.showPanel = !this.showPanel;
        return;
      } else {
        this.showPanel = true;
      }
      this.currentPlace = place;
      this.mapList = [];
      this.getMaps(place.id);
    },

    changeMap(map) {
      this.currentMap = map;
    },

    search(sw) {
      if (sw) {
        console.log(
          sw,
          this.mapList.filter((item) => item.name.includes(sw))
        );
        // const item =
        //  this.changeMap()
      }
    },
  },

  computed: {
    getImgUrl() {
      const url = this.currentMap.imgUrl;
      if (url) {
        return `http://localhost/img/map/${url}`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.map {
  .head {
    padding: 5px;
  }

  .body {
    display: flex;
    .nav {
      height: 500px;
      overflow: hidden;
      overflow-y: scroll;
      width: 180px;
      > ul {
        > li {
          cursor: pointer;
          .place {
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
            height: 40px;
            line-height: 40px;
            &:hover {
              background-color: #e5e9f2;
            }
          }
          > ul {
            li {
              padding: 0 30px;
              height: 40px;
              line-height: 40px;
              &:hover {
                background-color: #e5e9f2;
              }
              &.active {
                background-color: #1e5df1;
                color: #fff;
              }
            }
          }
        }
      }
    }

    .content {
      height: 500px;
      flex: 1;
      // background-color: #333;
      color: #222;
      display: flex;
      img {
        // height: 400px;
        height: 100%;
        width: 600px;
        background-color: #333;
      }
      .text {
        margin-top: 400px;
        padding-right: 20px;
        flex: 1;
        text-align: right;
        line-height: 2rem;

        h2 {
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>