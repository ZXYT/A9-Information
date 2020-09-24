<template>
  <div class="home">
    <my-nav :navList="classList" @change-index="changeIndex"></my-nav>
    <div class="content">
      <ul>
        <li v-for="(event, index) of eventList" :key="event.id" class="container">
          <h2>{{event.name}}</h2>
          <p>
            <i :class="{'iconfont': true, 'icon-countdown': true}"></i>
            {{leftList[index] ? leftList[index] : '00M 00S' }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import api from "@/api";
import { ms2Time } from "@/util";
import myNav from "@/components/Nav.vue";

export default {
  name: "Home",
  data() {
    return {
      events: [],
      eventList: [],
      classList: [
        { id: 0, name: "全部赛事" },
        { id: 1, name: "特殊赛事" },
        { id: 2, name: "多人赛事" },
        { id: 3, name: "日常赛事" },
      ],
      leftList: [],
    };
  },

  components: {
    myNav,
  },

  created() {
    this.getEvents();
    this.countdown();
  },

  beforeDestroy() {
    clearTimeout(this.timer);
  },

  methods: {
    getEvents() {
      api.getEvents().then((res) => {
        res = res.data.data;
        // console.log("getEvents:", res.rows);
        this.eventList = this.events = res.rows;
      });
    },

    changeIndex(index) {
      // console.log(index, this.classList[index].name);
      if (index !== 0) {
        this.eventList = this.events.filter((item) => item.eventClass == index);
      } else {
        this.eventList = this.events;
      }
    },

    getLeftTime() {
      this.leftList = this.events.map((ele) => {
        const res = ms2Time(new Date(ele.endTime) - Date.now());
        let leftTime = "";
        if (res.days > 0) {
          leftTime = `${res.days}D ${res.hours}H`;
        } else if (res.hours > 0) {
          leftTime = `${res.hours}H ${res.mins}M`;
        } else {
          leftTime = `${res.mins}M ${res.secs}S`;
        }
        return leftTime;
      });
    },

    countdown() {
      this.getLeftTime();
      this.timer = setTimeout(() => {
        this.countdown();
      }, 1000);
      // console.log(this.timer)
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 560px;
  overflow: auto;
  // padding: 20px;
  .nav {
    margin: 20px;
  }

  .content {
    > ul {
      display: flex;
      flex-wrap: wrap;
      > li {
        margin-left: 20px;
        padding: 20px;
        width: 170px;
        h2 {
          font-size: 1.2em;
          line-height: 1.5em;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        p {
          display: inline-block;
          padding: 5px;
          font-weight: 600;
          background-color: rgb(206, 98, 98);
          color: #fff;
        }
      }
    }
  }
}
</style>