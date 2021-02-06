<template>
  <div class="nav_container bg_dark dp_flex">
    <nav class="navigation dp_flex">
      <div class="logo dp_flex ml-2"><Logo /></div>

      <ul class="nav_links dp_flex">
        <li :class="setClass" @click="scrollToAbout">About me</li>
        <li :class="setClass" @click="scrollToProjects">Projects</li>
        <li :class="setClass" @click="scrollToContact">Contact</li>
        <li @click.prevent="colorHandler()" class="color_changer mr-2 ml-1">
          <Triangle />
        </li>
      </ul>
    </nav>
    <ul class="nav_link_mobile dp_flex">
      <li :class="setClass" @click="scrollToAbout">About me</li>
      <li :class="setClass" @click="scrollToProjects">Projects</li>
      <li :class="setClass" @click="scrollToContact">Contact</li>
    </ul>
  </div>
</template>

<script>
import Triangle from "@/components/Triangle_ColorChanger";
import Logo from "@/components/Logo";
export default {
  components: {
    Logo,
    Triangle,
  },
  data() {
    return {
      colorCounter: 0,
      setColor: "red",
      colorList: ["red", "skyblue", "green", "blue"],
    };
  },
  methods: {
    colorHandler() {
      this.colorCounter === 3 ? (this.colorCounter = 0) : this.colorCounter++;
      this.$store.dispatch("updateColor", this.colorList[this.colorCounter]);
      this.updateState();
      console.log("this set color", this.setColor);
    },
    updateState() {
      this.setColor = this.$store.state.colorState;
    },

    scrollToAbout() {
      window.scroll({
        top: 500,
        left: 0,
        behavior: "smooth",
      });
    },
    scrollToProjects() {
      window.scroll({
        top: 1080,
        left: 0,
        behavior: "smooth",
      });
    },
    scrollToContact() {
      window.scroll({
        top: 2200,
        left: 0,
        behavior: "smooth",
      });
    },
  },
  computed: {
    setClass() {
      return this.setColor;
    },
  },
  mounted() {
    console.log(this.setColor, "setColor");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav_link_mobile {
  width: 100%;
  background-color: white;
  position: absolute;
  left: 0;
  top: 100px;
  display: none;
  z-index: 100;
  & li {
    border: 1px solid white;
    color: #000;
    cursor: pointer;
    padding: 15px;
    border-radius: 5px;
    &:hover {
      border-radius: 0;
      color: #fff;
    }
  }
}
.nav_container {
  font-size: 16px !important;
  min-height: 100px;
  color: #fff;
  align-items: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.navigation {
  width: 100%;
  justify-content: space-around;
  position: relative;
}
.nav_links {
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  & li {
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 105px;
    height: 38px;
    line-height: 2px;

    &:last-child {
      transition: 0.3s;
      width: 30px;
      height: 30px;
      border: 1px solid transparent;
      display: flex;
      padding: 2px 3px 5px 3px;
      border-top: 1px solid white;
      border-bottom: 1px solid white;

      &:hover {
        transition: 0.3s;
        background: none;
        border-right: 1px solid white;
        border-left: 1px solid white;
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
      }
    }
  }
}
.blue:hover {
  transition: 0.2s;
  background: #20338f;
}
.skyblue:hover {
  transition: 0.2s;
  background: #3794b5;
}
.green:hover {
  transition: 0.2s;
  background: #82c032;
}
.red:hover {
  transition: 0.2s;
  background: #c03b32;
}
</style>
