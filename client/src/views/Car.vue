<template>
  <div class="car">
    <my-nav :navList="classList" @change-index="changeIndex"></my-nav>
    <div class="content">
      <ul>
        <li v-for="car of carList" :key="car.id" class="container">
          <img :src="'http://localhost/img/car/BENTLEY CONTINENTAL GT3.png'" alt />
          <div class="info">
            <div class="title">
              {{car.name}}
              <span>
                <i :class="{'iconfont': true, 'icon-gas': true}"></i>
                {{car.gas}}
              </span>
            </div>
            <div class="rank">
              <span class="rank">
                <span>{{car.rank}}</span>
                <span>{{car.point}}</span>
              </span>
              <span>
                <span class="star" v-for="i of car.star" :key="i">
                  <i :class="{'iconfont': true, 'icon-star': true}"></i>
                </span>
              </span>
            </div>
            <div class="top">
              <span>极速</span>
              <span>{{car.topSpeed}}</span>
            </div>
            <div class="acc">
              <span>加速</span>
              <span>{{car.acceleration}}</span>
            </div>
            <div class="hand">
              <span>操控</span>
              <span>{{car.handling}}</span>
            </div>
            <div class="nitro">
              <span>氮气</span>
              <span>{{car.nitro}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import myNav from "@/components/nav.vue";

export default {
  name: "car",
  data() {
    return {
      cars: [],
      carList: [],
      classList: [
        { id: 0, name: "全部" },
        { id: 1, name: "D" },
        { id: 2, name: "C" },
        { id: 3, name: "B" },
        { id: 4, name: "A" },
        { id: 5, name: "S" },
      ],
    };
  },

  components: {
    myNav,
  },

  created() {
    this.getCars();
  },

  methods: {
    getCars() {
      api.getCars().then((res) => {
        res = res.data.data;
        // console.log("getCars:", res.rows);
        this.carList = this.cars = res.rows;
      });
    },

    changeIndex(index) {
      // console.log(index, this.classList[index].name);
      if (index !== 0) {
        this.carList = this.cars.filter(
          (item) => item.rank === this.classList[index].name
        );
      } else {
        this.carList = this.cars;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.car {
  padding: 20px;
  height: 560px;
  box-sizing: border-box;

  .content {
    overflow-y: scroll;
    height: 480px;
    margin-top: 20px;
    > ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      > li {
        position: relative;
        &:hover .info {
          bottom: 0;
        }
        img {
          display: block;
          width: 400px;
          height: 200px;
          background-color: rgb(124, 90, 90);
        }
        .info {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -85px;
          padding: 50px 10px 10px;
          background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
          color: #eee;
          line-height: 1.2em;

          div {
            display: flex;
            justify-content: space-between;
            &.title {
              font-size: 1.2em;
              line-height: 1.2em;
            }
            .star {
              padding: 0 2px;
              color: rgb(255, 222, 50);
            }
          }
        }
      }
    }
  }
}
</style>