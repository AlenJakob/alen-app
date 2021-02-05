<template>
  <hooper
    class="carousel bg_blue mb-8"
    style="height: 100vh"
    :itemsToShow="1"
    :centerMode="true"
    :autoPlay="true"
    :playSpeed="6000"
    :infiniteScroll="true"
    :wheelControl="false"
  >
    <slide class="slide" v-for="(project, id) in projects" :key="id">
      <div
        class="bg"
        :style="{ backgroundImage: 'url(' + project.image + ')' }"
      ></div>
      <div class="txt">
        <h2 class="txt_header">{{ project.title }}</h2>
        <div class="divider"></div>
        <div class="tech_list">
          <ul class="list">
            <li
              class="list_btn bg_red"
              v-for="tech in project.technologies"
              :key="tech.id"
              :class="getClass(tech)"
            >
              {{ tech }}
            </li>
          </ul>
        </div>
        <p class="txt_content">
          {{ project.content }}
        </p>
        <ul class="project_buttons">
          <li class=""><a :href="project.projectLink">View project</a></li>
          <li class="bg_dark"><a :href="project.sourceLink">Source code</a></li>
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
      colorTechStatus: [],
      images: [
        "https://cdn.pixabay.com/photo/2021/01/27/13/47/cliff-5954980_960_720.jpg",
        "https://cdn.pixabay.com/photo/2020/09/29/23/38/team-5614157_1280.png",
        "https://cdn.pixabay.com/photo/2020/12/16/18/57/road-5837403_960_720.jpg",
      ],
      projects: [
        {
          id: 1,
          title: "Landing Page Polygon Images",
          content:
            "Simple Landing Page builded from scratch using vanilla JavaScript",
          image: "https://i.ibb.co/qyNmqTg/landing-pagepolygon-1.png",
          creator: "Alen Jakob",
          technologies: ["JavaScript", "Jquery", "HTML5", "CSS3"],
          sourceLink: "https://github.com/AlenJakob/landing-page",
          projectLink: "https://landing-pagepolygon.web.app",
          date: "2018-04-18",
        },
        {
          id: 2,
          title: "Music Website",
          content:
            "Website created from scratch, Color changer mode & full responsive design.",
          image: "https://i.ibb.co/Wybgvxx/music-web.png",
          creator: "Alen Jakob",
          technologies: ["JavaScript", "HTML5", "CSS3", "SASS", "Rwd"],
          sourceLink: "https://github.com/AlenJakob/Music-web",
          projectLink: "https://music-web-c59b4.web.app",
          date: "2018-09-11",
        },
        {
          id: 3,
          title: "Web Service Development",
          content:
            "Website offer a full service for creating a website's, Landing page, business website.",
          image: "https://i.ibb.co/wgBwhbq/web-services.png",
          creator: "Alen Jakob",
          technologies: ["HTML5", "CSS3", "Bulma", "VueJs", "JavaScript"],
          sourceLink: "https://github.com/AlenJakob/frelance-web",
          projectLink: "https://web-services-802a4.web.app",
          date: "2020-09-05",
        },
        {
          id: 4,
          title: "Vanilla JavaScript Bicycle Cards",
          content:
            "Website offers & displays Bicycles. The Bicycles can be sorted by price lowest to highest and highest to lowest or between to given value's.",
          image: "https://i.ibb.co/0BbJ7gJ/bicycle-product.png",
          creator: "Alen Jakob",
          technologies: ["HTML5", "CSS3", "Bulma", "Rwd", "JavaScript"],
          sourceLink: "https://github.com/AlenJakob/vanilla-js-cards",
          projectLink: "https://bicycle-product.web.app",
          date: "2020-10-25",
        },
        {
          id: 5,
          title: "Serial - Number checker",
          content:
            "The warranty software which help customer to check the period of warranty('full information'), how many months had passed from the production date to the current date.",
          image: "https://i.ibb.co/xYkP2Cr/bafang-warranty-web-app.png",
          creator: "Alen Jakob",
          technologies: ["HTML5", "CSS3", "Bulma", "Rwd", "JavaScript"],
          sourceLink: "https://github.com/AlenJakob/serialno-checker",
          projectLink: "https://bafang-warranty.web.app",
          date: "2020-07-21",
        },
        {
          id: 6,
          title: "Contact Form",
          content:
            "The contact form is working with firebase, last time added an option to read all messages after login the user the messages will be displayed bottom of the website that we are able to delete, the option is set for testing purpose.",
          image: "https://i.ibb.co/vXrdv5m/contact-form.png",
          creator: "Alen Jakob",
          technologies: ["HTML5", "CSS3", "Bulma", "JavaScript", "Firebase"],
          sourceLink: "https://github.com/AlenJakob/form-snippet",
          projectLink: "https://contact-form-ef310.web.app",
          date: "2020-11-07",
        },
      ],
    };
  },
  methods: {
    getClass(property) {
      switch (property) {
        case "JavaScript":
          return "bg_green";
          break;
        case "Bulma":
          return "bg_blue";
          break;
        case "Jquery":
          return "bg_blue";
          break;
        case "CSS3":
          return "bg_skyblue";
          break;
        case "HTML5":
          return "bg_red";
          break;
        case "Firebase":
          return "bg_orange";
          break;
        case "SASS":
          return "bg_purple";
          break;
        default:
          return "bg_red";
          break;
      }
    },
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
    & a {
      color: #000;
    }
    &:hover {
      background: black;
      color: white;
      & a {
        color: #fff;
      }
    }
  }
  & li:nth-child(1) {
    margin-right: 8px;
    border: 1px solid rgb(35, 12, 119);
  }
  & li:nth-child(2) {
    margin-right: 8px;

    border: 1px solid transparent;
    & a {
      color: #fff;
    }
    &:hover {
      background: white;
      color: black;
      border: 1px solid rgb(35, 12, 119);
      & a {
        color: #000;
      }
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
  flex-direction: column;
  position: relative;
  background: #fff;
  border: 3rem solid #020b36;
  &:hover {
    cursor: pointer;
  }
  &:active {
    cursor: grabbing;
  }
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
.txt_content {
  line-height: 1.3em;
  text-align: justify;
}
</style>


