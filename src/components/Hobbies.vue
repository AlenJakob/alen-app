<template>
  <div class="hobbies">
    <div class="hobbies_header mt-3 mb-3">HOBBIES</div>
    <div class="hobbies_container ">
      <div class="hobbies_item bg_blue tooltip " title="I love ride a bike in a summer time">
        <i class="fas fa-biking fa-2x "></i>
      </div>
      <div class="hobbies_item bg_red tooltip" title="I love bodyworkout exercises">
        <i class="fas fa-dumbbell fa-2x"></i>
      </div>
      <div class="hobbies_item bg_skyblue tooltip" title="I'm interesting about computer since mostly Coding & graphic design">
        <i class="fas fa-laptop-code fa-2x"></i>
      </div>
      <div class="hobbies_item bg_green tooltip" title="I like long walks">
        <i class="fas fa-walking fa-2x"></i>
      </div>
      <div class="hobbies_item bg_dark tooltip" title="Music is something what make me motivate or rest ;)">
        <i class="fas fa-headphones-alt fa-2x"></i>
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
.tooltip {

  &::before {
    position: absolute;
    transform:translateY(-50px);
    width:auto;
    z-index: 2;
    display: none;
    padding: 10px;
    font-size: 0.8em;
    line-height: 1.4em;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    content: attr(title);

  }
}
.tooltip:hover::before {
  display:inline-block;
}
</style>