<template>
  <div class="headerWrapper">
    <div class="navbarWrapper">
      <nav :class="['navbar', { black: isOpaque }]">
        <div class="navbar-left">
          <div class="logo">
            <router-link to="/"
              ><img id="logo-img" :src="logoImage" alt="Signature logo."
            /></router-link>
          </div>
          <div class="logo-text">
            <router-link to="/">{{ $t("navBar.navBarTitle") }}</router-link>
          </div>
          <div class="burger-menu" @click="toggleMenu">
            <img id="burger-button" :src="logoImage" alt="Display menu icon." />
          </div>
        </div>
        <transition name="fade">
          <div class="menu" v-show="showMenu">
            <ul>
              <li v-for="route in navRoutes" :key="route">
                <router-link :to="'/' + route">{{
                  $t("routeNames." + route)
                }}</router-link>
              </li>
              <li>
                <LanguageToggle />
              </li>
            </ul>
          </div>
        </transition>
      </nav>
    </div>
  </div>
  <transition name="close-overlay">
    <div
      class="close-menu-overlay"
      v-show="!wide && showMenu"
      @click="toggleMenu"
    ></div>
  </transition>
</template>
<script lang="ts" src="./nav-bar.ts"></script>
<style lang="scss" scoped src="./nav-bar.scss"></style>
