<template>
  <div class="footer_container">
    <div class="footer_mountain"></div>
    <div class="footer bg_blue">
      <div class="footer_middle_bg"></div>
      <div class="footer_bottom_bg"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  position: relative;
  min-height: 186px;
}
.footer_container {
  position: relative;
}
.footer_mountain {
  min-height: 157px;
  background-image: url("~@/assets/footer_mountain_1.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
.footer_bottom_bg {
  position: absolute;
  min-width: 860px;
  min-height: 159px;
  min-height: 176px;
  background-image: url("~@/assets/footer_mountain_2.svg");
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
  opacity: 0.055;
  background-repeat: no-repeat;
  background-size: contain;
  top: 0;
}
</style>