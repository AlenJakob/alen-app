<template>
  <div class="footer_container">
    <div class="footer_mountain" :class="getColorBg">
      <div class="footer_icons">
        <a href="https://www.linkedin.com/in/alen-jakob">
          <div class="ico ico-linkedin">
            <i class="fab fa-linkedin fa-2x"></i>
            <h2>Linkedin</h2>
          </div></a
        >
        <a href="https://github.com/AlenJakob"
          ><div class="ico ico-github">
            <i class="fab fa-github-alt fa-2x"></i>
            <h2>Github</h2>
          </div></a
        >
      </div>
    </div>
    <div class="footer" :class="getColorBg">
      <div class="footer_middle_bg"></div>
      <div class="footer_bottom_bg"></div>
    </div>
    <div class="footer_bottom">
      <h2>2021</h2>
      <h2>Created By</h2>
      <h2><a href="">Alen Jakob</a></h2>
      <h2 class="footer_email">
        <a class="footer_email_link" href="mailto:alenjakob@gmail.com">
          alenjakob@gmail.com</a
        >
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorStatus: "blue",
      colorStatusList: ["bg_blue", "bg_green", "bg_skyblue", "bg_red"],
    };
  },

  computed: {
    getColorBg() {
      //  this.$store.state.bgColor
      switch (this.$store.state.colorState) {
        case "red":
          return "bg_darkred";
          break;
        case "skyblue":
          return "bg_darkskyblue";
          break;
        case "green":
          return "bg_darkgreen";
          break;
        case "blue":
          return "bg_blue";
          break;
        default:
          return "bg_dark";
        // fall-through
      }
    },
  },
};
</script>

<style  lang="scss" >
.footer {
  position: relative;
  min-height: 186px;
}
.footer_container {
  position: relative;
}
.footer_mountain {
  position: relative;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-image: url("~@/assets/footer_mountain_1.svg");
  // background-repeat: no-repeat;
  // background-size: cover;
}
.footer_bottom_bg {
  position: absolute;
  min-width: 860px;
  min-height: 159px;
  min-height: 176px;
  background-image: url("~@/assets/footer_mountain_bottom.svg");
  background-repeat: no-repeat;
  background-size: contain;
  bottom: 0;
}
.footer_middle_bg {
  position: absolute;
  min-width: 860px;
  min-height: 159px;
  min-height: 176px;
  background-image: url("~@/assets/Group 140.svg");
  opacity: 0.053;
  background-repeat: no-repeat;
  background-size: contain;
  top: 0;
}
.footer_icons {
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & a {
    text-decoration: none;
  }
}
.ico {
  margin: 10px;
  cursor: pointer;
  color: #fff;
  &:hover {
    opacity: 0.8;
  }
  & .fab {
    margin-bottom: 0.2rem;
  }
}

.footer_email {
  transition: 0.2s;
  z-index: 15;
  color: #4a4a4a;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b4b5ff;
  }
}

.footer_bottom {
  line-height: 1.5;
  font-size: 12px;
  display: flex;
  justify-content: center;
  padding: 2rem;
  background: #fafafa;
  background-color: #000912;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0 0 3px rgb(199, 199, 199);
  & h2:nth-child(1) {
    color: rgb(49, 49, 49);
    color: #fff;
  }
  & h2:nth-child(2) {
    color: rgb(128, 128, 128);
  }
  & h2:nth-child(3) {
    box-sizing: inherit;
    font-weight: bold;
    & a {
      color: #b4b5ff;
    }
    &:after {
      content: " ↝ ";
    }
  }
  & h2 {
    margin: 2px;
    color: #b9b9b9;
  }
}
</style>