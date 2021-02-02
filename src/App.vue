<template>
  <div id="app">
    <Navbar />
    <AboutMe />
    <Summary />
    <Carousel />
    <Hobbies />
    <Footer />
  </div>
</template>

<style lang="scss">
@import "./assets/styles/rwd.css";
@import "./assets/styles/reset.css";
@import "./assets/styles/main.css";
@import "./assets/styles/colorBackgrounds.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,400&display=swap");
body {
  padding: 2rem;
  letter-spacing: 0.2px;
}
#app {
  font-family: "Segoe UI", "Roboto", Tahoma, Verdana, sans-serif;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/pages/About_me";
import Summary from "@/components/pages/Summary";
import Carousel from "@/components/Carousel";
import Hobbies from "@/components/Hobbies";
import Footer from "@/components/Footer";
export default {
  components: {
    Navbar,
    AboutMe,
    Summary,
    Carousel,
    Hobbies,
    Footer,
  },
};
</script>