<template>
  <div class="summary">
    <div class="summary_content">
      <div class="summary_info">About me</div>
      <div class="summary_avatar"></div>
      <h2 class="summary_header mt-2 ml-2">My Name Is Alen Jakob</h2>
      <div class="summary_article mt-2 ml-2">
        Front-end and web graphics passionate, I have made a career shift
        towards creating websites and applications with the use of HTML5, CSS3,
        Javascript, and Vue. I dedicated last 3 years to prepare myself for the
        new profession by taking over 20 onli ne courses and creating websites
        for my portfolio. With over 8 years of international work experience. I
        am convinced that my skills are enough to apply for this position.
      </div>
      <div class="summary_image" alt="background mountain summary" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.summary {
  max-width: 860px;
  margin: 8rem auto;
  display: flex;
  align-items: center;
  justify-items: center;
}

.summary_avatar {
  background-image: url("~@/assets/avatar.png");
  background-size: cover;
  width: 125px;
  height: 144px;
  position: absolute;
  right: calc(2rem + 12px);
  top: -72px;
  border: 6px solid #d6d6d6;
  border-radius: 16px;
}
.summary_info {
  color: rgba(160, 160, 160, 0.7);
  font-size: 1.6em;
  font-weight: 300;
  position: absolute;
  right: 200px;
  top: -50px;
}
.summary_content {
  height: 320px;
  border-radius: 15px;
  position: relative;
  background: rgba(61, 61, 61, 0.1);
  padding: 1rem;
  text-align: justify;
}
.summary_header {
  color: #191d25;
  font-weight: 600;
  font-size: 1.4em;
}
.summary_article {
  color: rgb(70, 70, 70);
  font-size: 1em;
  text-shadow: 0 0 2px rgb(236, 236, 236);
  margin-right: 13em;
  min-height: 300px;
  overflow: hidden;
  line-height: 22px;
}
.summary_image {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 513px;
  height: 268px;
  background-image: url("~@/assets/bg_mountain.svg");
  background-size: cover;
}
</style>
