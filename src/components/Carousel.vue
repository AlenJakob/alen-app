<template>
  <hooper
    class="carousel bg_blue mb-8"
    style="height: 400px"
    :itemsToShow="1"
    :centerMode="true"
  >
    <slide class="slide" v-for="(img, id) in images" :key="id">
      <div class="bg" :style="{ backgroundImage: 'url(' + img + ')' }"></div>
      <div class="txt">
        <h2 class="txt_header">Title project</h2>
        <div class="divider"></div>
        <div class="tech_list">
          <ul class="list">
            <li class="list_btn bg_red">JavaScript</li>
            <li class="list_btn bg_skyblue">JavaScript</li>
            <li class="list_btn bg_dark">JavaScript</li>
            <li class="list_btn bg_green">JavaScript</li>
          </ul>
        </div>
        <p class="txt_content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vel at
          culpa...
        </p>
        <ul class="project_buttons">
          <li class="">View project</li>
          <li class="bg_dark">Source code</li>
          <li class="">View</li>
        </ul>
      </div>
    </slide>

    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  data() {
    return {
      images: [
        "https://cdn.pixabay.com/photo/2021/01/27/13/47/cliff-5954980_960_720.jpg",
        "https://cdn.pixabay.com/photo/2020/09/29/23/38/team-5614157_1280.png",
        "https://cdn.pixabay.com/photo/2020/12/16/18/57/road-5837403_960_720.jpg",
      ],
    };
  },
};
</script>

<style lang="scss">
.project_buttons {
  display: flex;
  margin-top: 2rem;
  & li {
    transition: 0.1s;
    cursor: pointer;
    border-radius: 3px;
    padding: 0.3rem 0.4rem;
    &:hover {
      background: black;
      color: white;
    }
  }
  & li:nth-child(1) {
    margin-right: 8px;
    border: 1px solid rgb(35, 12, 119);
  }
  & li:nth-child(2) {
    margin-right: 8px;
    color: #fff;
    border: 1px solid transparent;
    &:hover {
      background: white;
      color: black;
      border: 1px solid rgb(35, 12, 119);
    }
  }
  & li:nth-child(3) {
    margin-right: 15px;
    border: 1px solid rgb(35, 12, 119);
  }
}
.list {
  display: flex;
  justify-content: flex-start;
  margin: 1rem 0;
  & .list_btn {
    padding: 5px;
    color: #fff;
    font-size: 10px;
    margin-right: 10px;
    border-radius: 2px;
  }
}
.carousel {
  height: 860px;
}
.txt {
  width: calc(100% - 1rem);
  padding: 1rem;
  margin-left: 2rem;
  text-align: left;
  &_header {
    font-size: 2rem;
  }
  &_content {
    margin: 1rem 0;
    margin-right: 1rem;
    font-size: 1.2em;
  }
}

.slide {
  display: flex;
  flex-direction: row;
  position: relative;
  background: #fff;
  border: 3rem solid #020b36;
}

.bg {
  margin-right: 1rem;
  box-shadow: 2px 0px 5px rgba(53, 53, 53, 0.562);
  transform: translate(30px, -30px);
  width: 100%;
  max-width: 50%;
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.hooper {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 200px;
}
.hooper * {
  box-sizing: border-box;
}
.hooper-list {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.hooper-track {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.hooper.is-vertical .hooper-track {
  flex-direction: column;
  height: 200px;
}

.hooper.is-rtl {
  direction: rtl;
}

.hooper-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

/* ss */

.hooper-next,
.hooper-prev {
  background-color: transparent;
  border: none;
  padding: 1em;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.hooper-next.is-disabled,
.hooper-prev.is-disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.hooper-next {
  right: 0;
}
.hooper-prev {
  left: 0;
}
.hooper-navigation.is-vertical .hooper-next {
  top: auto;
  bottom: 0;
  transform: initial;
}
.hooper-navigation.is-vertical .hooper-prev {
  top: 0;
  bottom: auto;
  right: 0;
  left: auto;
  transform: initial;
}
.hooper-navigation.is-rtl .hooper-prev {
  left: auto;
  right: 0;
}
.hooper-navigation.is-rtl .hooper-next {
  right: auto;
  left: 0;
}
.hooper-pagination {
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  padding: 5px 10px;
}
.hooper-indicators {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.hooper-indicator:hover,
.hooper-indicator.is-active {
  background-color: #fff;
}
.hooper-indicator {
  margin: 15px 5px;
  width: 40px;
  height: 8px;
  border-radius: 1px;
  border: none;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.hooper-pagination.is-vertical {
  bottom: auto;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.hooper-pagination.is-vertical .hooper-indicators {
  flex-direction: column;
}
.hooper-pagination.is-vertical .hooper-indicator {
  width: 6px;
}
.hooper-progress {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 4px;
  background-color: #efefef;
}
.hooper-progress-inner {
  height: 100%;
  background-color: #4285f4;
  transition: 300ms;
}
.hooper-slide {
  flex-shrink: 0;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}
.hooper {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 200px;
}
.hooper * {
  box-sizing: border-box;
}
.hooper-list {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.hooper-track {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.hooper.is-vertical .hooper-track {
  flex-direction: column;
  height: 200px;
}

.hooper.is-rtl {
  direction: rtl;
}

.hooper-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>


