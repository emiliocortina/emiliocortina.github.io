<template>
  <NavBar />
  <router-view />
</template>

<script lang="ts">
import NavBar from "@/components/nav-bar/nav-bar.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    NavBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" src="./global.scss"></style>
