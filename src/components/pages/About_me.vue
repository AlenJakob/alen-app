<template>
  <div>
    <div class="about_me">
      <div class="about_content ml-2 mt-2">
        <p>Hello there,</p>
        <p>I'm <a class="underline">Alen Jakob</a></p>
        <p class="desc">a designer, coder and front-end passionate</p>
      </div>
      <div class="about_arrow bg_arrow"><Arrow /></div>
    </div>
  </div>
</template>

<script>
import Arrow from "@/components/Arrow";
export default {
  components: {
    Arrow,
  },
};
</script>

<style lang="scss">
.about_me {
  display: flex;
  text-align: left;
  font-size: 50px;
  color: #fff;
  position: relative;
  height: calc(100vh - 100px - 2rem);
  height: 350px;
  background: #020b36;

  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    background: url("https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png")
      no-repeat center;
    opacity: 0.4;
    background-size: cover;
    z-index: -1;
    width: 100%;
    height: 100%;
    left: 0;
  }
}
.desc {
  font-weight: 400;
  margin-top: 0.5rem;
  font-size: 14px;
  text-transform: uppercase;
  text-shadow: 0 0 3px darkgrey;
}
.underline {
  border-bottom: 2px solid #fff;
  display: inline-block;
}
.about_arrow {
  margin-bottom: 1.5rem;
  transition: 0.2s;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  &:hover {
    background-color: #d4eaff;
    opacity: 0.3;
  }
}
</style>