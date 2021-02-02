<template>
  <div>
    <skyblueTriangle v-if="getColor == 'skyblue'" />
    <greenTriangle v-if="getColor == 'green'" />
    <redTriangle v-if="getColor == 'red'" />
    <blueTriangle v-if="getColor == 'blue'" />
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
  data() {
    return {};
  },
  computed: {
    getColor() {
      return this.$store.state.colorState;
    },
  },
  methods: {},
  mounted() {
    console.log(this.$store.state.colorState);
  },
};
</script>

<style>
</style>