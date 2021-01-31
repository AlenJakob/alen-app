<template>
  <div class="nav_container bg_dark dp_flex">
    <nav class="navigation dp_flex">
      <div class="logo dp_flex ml-2"><Logo /></div>

      <ul class="nav_links dp_flex">
        <li>About me</li>
        <li>Projects</li>
        <li>Contact</li>
        <li class="color_changer mr-2 ml-1"><Triangle /></li>
      </ul>
    </nav>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
}
.logo {
}
.nav_links {
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  & li {
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 105px;
    height: 38px;
    line-height: 2px;
    &:hover {
      transition: 0.2s;
      background: #82c032;
    }
    &:last-child {
      width: 30px;
      height: 30px;
      border: 1px solid transparent;

      &:hover {
        background: none;
        border: 1px solid #82c032;
      }
    }
  }
}
</style>
