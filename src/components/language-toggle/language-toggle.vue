<template>
  <div class="localeChanger">
    <div
      id="es"
      :class="['localeButton', { active: activeLang === SPANISH_LANG }]"
      @click="changeLang(SPANISH_LANG)"
    >
      ES
    </div>
    <div class="separator">|</div>
    <div
      id="en"
      class="localeButton"
      :class="['localeButton', { active: activeLang === ENGLISH_LANG }]"
      @click="changeLang(ENGLISH_LANG)"
    >
      EN
    </div>
  </div>
</template>
<script lang="ts" src="./language-toggle.ts"></script>
<style lang="scss" scoped src="./language-toggle.scss"></style>
