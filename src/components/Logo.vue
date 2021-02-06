<template>
  <div class="dp_flex">
    <i id="hamburger" @click="navMenu" class="fas fa-hamburger fa-3x"></i>
    <svg
      class="logo_mountain"
      width="60"
      height="57"
      viewBox="0 0 80 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M46.3645 0L80 57H12.5373L46.3645 0Z" fill="white" />
      <path d="M17.3746 27.8372L34.6269 57H0L17.3746 27.8372Z" fill="white" />
      <path d="M67.3841 57L59 30L75 57L67.3841 57Z" fill="#000912" />
      <path d="M6.5423 57L16 35L3 57L6.5423 57Z" fill="#000912" />
      <path d="M26.05 57L42 19L20 57L26.05 57Z" fill="#000912" />
    </svg>
  </div>
</template>

<script>
export default {
  methods: {
    navMenu() {
      document.querySelector(".nav_link_mobile").classList.toggle("show_menu");
    },
  },
};
</script>

<style lang="scss">
.show_menu {
  display: flex !important;
}
.fa-hamburger {
  display: none;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
    transform: scale(0.9);
  }
  &:active {
    opacity: 1;
    transform: scale(1);
  }
}
</style>