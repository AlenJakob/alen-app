<template>
  <div class="hobbies">
    <div class="hobbies_header mt-3 mb-3">HOBBIES</div>
    <div class="hobbies_container">
      <div class="hobbies_item bg_blue">
        <i class="fas fa-biking fa-2x"></i>
      </div>
      <div class="hobbies_item bg_red">
        <i class="fas fa-dumbbell fa-2x"></i>
      </div>
      <div class="hobbies_item bg_skyblue">
        <i class="fas fa-laptop-code fa-2x"></i>
      </div>
      <div class="hobbies_item bg_green">
        <i class="fas fa-walking fa-2x"></i>
      </div>
      <div class="hobbies_item bg_dark">
        <i class="fas fa-swatchbook fa-2x"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.hobbies_header {
  font-size: 2em;
}
.hobbies {
  min-height: 300px;
}
.hobbies_container {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
}
.hobbies_item {
  margin: 1rem;
  border-radius: 50%;
  width: 76px;
  height: 76px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}
</style>