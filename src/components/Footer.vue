<template>
  <div class="footer_container">
    <div class="footer_mountain">
      <div class="footer_icons ml-2">
        <div class="ico ico-linkedin">
          <i class="fab fa-linkedin fa-2x"></i>
          <h2>Linkedin</h2>
        </div>
        <div class="ico ico-github">
          <i class="fab fa-github-alt fa-2x"></i>
          <h2>Github</h2>
        </div>
      </div>
    </div>
    <div class="footer bg_blue">
      <div class="footer_email">
        <a class="footer_email_link" href="mailto:alenjakob@gmail.com">
          <i class="ico fas fa-at fa-2x"></i>alenjakob@gmail.com</a
        >
      </div>
      <div class="footer_middle_bg"></div>
      <div class="footer_bottom_bg"></div>
    </div>
    <div class="footer_bottom">
      <h2>Created By</h2>
      <h2>XYZ</h2>
      <h2>2021</h2>
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
  position: relative;
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
.footer_icons {
  bottom: 2rem;
  position: absolute;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 15;
  color: rgb(170, 170, 170);
  &.ico {
    margin-right: 0.5rem;
  }
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
}
.footer_email_link {
  text-decoration: none;
}
.footer_bottom {
  display: flex;
  justify-content: center;
  padding: 2rem;
  background: #fafafa;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0 0 3px rgb(199, 199, 199);
  & h2 {
    margin: 10px;
  }
}
</style>