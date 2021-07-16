<template>
  <div v-if="text" class="home-card text">{{ text }}</div>
  <div v-else-if="image" class="home-card image">
    <img :src="image" :alt="altText" />
  </div>
</template>
<script lang="ts" src="./home-card.ts"></script>
<style lang="scss" scoped src="./home-card.scss"></style>
