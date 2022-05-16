<template>
  <div
    class="navbar fixed top-0"
    :class="{
      square: square,
      shadow: shadow,
    }"
  >
    <div class="navbar-left">
      <router-link to="/" class="navbar-brand">GNB UI</router-link>
      <button class="btn navbar-burger-icon">
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
        >Quick Start</router-link
      >
      <div
        class="dropdown hoverable navbar-item"
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
            <div class="dropdown-item">Elements</div>
            <div class="dropdown-item">Components</div>
            <div class="dropdown-item">Layout</div>
            <div class="dropdown-item">Utilities</div>
          </div>
        </div>
      </div>
      <router-link
        to="#"
        class="navbar-item"
        :class="{
          active: isActive('/examples'),
        }"
        >Examples</router-link
      >
	    <router-link
		    to="#"
		    class="navbar-item"
		    :class="{
          active: isActive('/road-map'),
        }"
	    >Road Map</router-link
	    >
    </div>
    <div class="navbar-right">
      <span class="tag primary fw-600">Latest Version: v-{{ $store.state.version }}</span>
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
  },
  methods: {
    isActive(path) {
      return this.$route.path.includes(path);
    },
  },
};
</script>
