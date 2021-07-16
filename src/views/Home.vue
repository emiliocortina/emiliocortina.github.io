<template>
  <div class="home">
    <div class="content">
      <div class="cardContainer">
        <HomeCard text="eeee"></HomeCard>
      </div>
      <div class="cardContainer">
        <HomeCard
          :image="require('@/assets/images/room1.jpeg')"
          alt-text="Una image"
        ></HomeCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HomeCard from "@/components/home-card/home-card.vue";

@Options({
  components: {
    HomeCard,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: flex-start;
  align-content: center;
  align-items: center;
}
.content {
  margin-top: 50rem;
  font-family: "Kano";
  background-color: #f8f8f8;
  color: #333333;
  font-size: 1.2em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
  width: 100%;
  max-width: 80rem;
}

.cardContainer {
  width: 50%;
}

@media (max-width: 786px) {
  .cardContainer {
    width: 100%;
  }
}
</style>
