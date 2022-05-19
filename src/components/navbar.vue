<template>
  <div
    class="navbar fixed top-0"
    :class="{
      square: square,
      shadow: shadow,
    }"
    ref="navbar"
    style="z-index: 99999"
  >
    <div class="navbar-left">
      <button
        v-if="leftBurger"
        class="btn navbar-burger-icon ml-0 mr-auto"
        @click="toggleSidebar()"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <router-link to="/" class="navbar-brand">GNB UI</router-link>
      <button class="btn navbar-burger-icon" @click="toggleNavbar()">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="navbar-center">
      <router-link
        to="/get-started"
        class="navbar-item"
        :class="{
          active: isActive('/get-started'),
        }"
        >Quick Start
      </router-link>
      <div
        @click="openDropdown"
        ref="documentation"
        class="dropdown navbar-item"
        :class="{
          active:
            isActive('/elements') ||
            isActive('/components') ||
            isActive('/layout') ||
            isActive('/utilities'),
        }"
      >
        <a href="#">Documentation</a>
        <div class="dropdown-content">
          <div class="dropdown-menu">
            <router-link to="/elements">
              <div class="dropdown-item">Elements</div>
            </router-link>
            <router-link to="/components">
              <div class="dropdown-item">Components</div>
            </router-link>
            <router-link to="/layout">
              <div class="dropdown-item">Layout</div>
            </router-link>
            <router-link to="/utilities">
              <div class="dropdown-item">Utilities</div>
            </router-link>
          </div>
        </div>
      </div>
      <router-link
        to="#"
        class="navbar-item"
        :class="{
          active: isActive('/examples'),
        }"
        >Examples
      </router-link>
      <router-link
        to="#"
        class="navbar-item"
        :class="{
          active: isActive('/road-map'),
        }"
        >Road Map
      </router-link>
    </div>
    <div class="navbar-right">
      <a
        class="navbar-item mb-5"
        target="_blank"
        href="https://github.com/alitokmakci/gnb-ui"
        ><i class="ri-github-fill fs-3"></i
      ></a>
      <span class="tag primary fw-600"
        >Latest Version: v-{{ $store.state.version }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    square: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: true,
    },
    leftBurger: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    isActive(path) {
      return this.$route.path.includes(path);
    },
    toggleNavbar() {
      this.$refs.navbar.classList.toggle("active");
    },
    openDropdown() {
      this.$refs.documentation.classList.toggle("open");
    },
    toggleSidebar() {
      document.querySelector(".sidebar").classList.toggle("closed");
    },
  },
};
</script>
