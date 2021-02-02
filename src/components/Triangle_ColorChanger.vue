<template>
  <div>
    <blueTriangle />
    <skyblueTriangle />

    <greenTriangle />
    <redTriangle />
  </div>
</template>

<script>
import redTriangle from "@/assets/triangles_svg/red";
import blueTriangle from "@/assets/triangles_svg/blue";
import greenTriangle from "@/assets/triangles_svg/green";
import skyblueTriangle from "@/assets/triangles_svg/skyblue";
export default {
  components: {
    redTriangle,
    blueTriangle,
    greenTriangle,
    skyblueTriangle,
  },
};
</script>

<style>
</style>