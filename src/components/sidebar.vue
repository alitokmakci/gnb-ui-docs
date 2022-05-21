<template>
  <div class="sidebar absolute square active-font-primary" ref="sidebar">
    <div class="sidebar-menu">
      <router-link
        to="/get-started"
        class="sidebar-item"
        :class="{
          active: isActive('/get-started'),
        }"
      >
        <span class="sidebar-item-label">Get Started</span>
      </router-link>
      <router-link
        class="sidebar-item"
        to="/integration"
        :class="{
          active: isActive('/integration'),
        }"
      >
        <span class="sidebar-item-label">Integration</span>
      </router-link>
      <router-link
        class="sidebar-item"
        to="/customization"
        :class="{
          active: isActive('/customization'),
        }"
      >
        <span class="sidebar-item-label">Customization & Modularity</span>
      </router-link>
      <router-link
        class="sidebar-item"
        to="/variables"
        :class="{
          active: isActive('/variables'),
        }"
      >
        <span class="sidebar-item-label">Variables</span>
      </router-link>
      <div
        class="sidebar-group"
        ref="elements"
        :class="{
          active: isActiveForGroup('/elements'),
          open: isActiveForGroup('/elements'),
        }"
      >
        <div class="group-content" @click="openGroup('elements')">
          <a class="group-title" href="#">Elements</a>
        </div>
        <ul class="group-menu">
          <li
            class="menu-item"
            :class="{
              active: isActive('/elements/button'),
            }"
            @click="$router.push('/elements/button')"
          >
            <router-link to="/elements/button">Button</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/elements/image'),
            }"
            @click="$router.push('/elements/image')"
          >
            <router-link to="/elements/image">Image</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/elements/progressbar'),
            }"
            @click="$router.push('/elements/progressbar')"
          >
            <router-link to="/elements/progressbar">Progressbar</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/elements/table'),
            }"
            @click="$router.push('/elements/table')"
          >
            <router-link to="/elements/table">Table</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/elements/tag'),
            }"
            @click="$router.push('/elements/tag')"
          >
            <router-link to="/elements/tag">Tag</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/elements/tooltip'),
            }"
            @click="$router.push('/elements/tooltip')"
          >
            <router-link to="/elements/tooltip">Tooltip</router-link>
          </li>
        </ul>
      </div>
      <div
        class="sidebar-group"
        :class="{
          active: isActiveForGroup('/form-elements'),
          open: isActiveForGroup('/form-elements'),
        }"
        ref="form"
      >
        <div class="group-content" @click="openGroup('form')">
          <a class="group-title blink-dot" href="#">Form Elements</a>
        </div>
        <ul class="group-menu">
          <li
            class="menu-item"
            :class="{
              active: isActive('/form-elements/general'),
            }"
            @click="$router.push('/form-elements/general')"
          >
            <router-link to="/form-elements/general"
              >General <span class="tag success">New</span></router-link
            >
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/form-elements/input'),
            }"
            @click="$router.push('/form-elements/input')"
          >
            <router-link to="/form-elements/input"
              >Input <span class="tag success">New</span></router-link
            >
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/form-elements/select'),
            }"
            @click="$router.push('/form-elements/select')"
          >
            <router-link to="/form-elements/select"
              >Select <span class="tag success">New</span></router-link
            >
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/form-elements/checkbox'),
            }"
            @click="$router.push('/form-elements/checkbox')"
          >
            <router-link to="/form-elements/checkbox">Checkbox</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/form-elements/radio'),
            }"
            @click="$router.push('/form-elements/radio')"
          >
            <router-link to="/form-elements/radio">Radio</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/form-elements/switch'),
            }"
            @click="$router.push('/form-elements/switch')"
          >
            <router-link to="/form-elements/switch">Switch</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/form-elements/textarea'),
            }"
            @click="$router.push('/form-elements/textarea')"
          >
            <router-link to="/form-elements/textarea">Textarea</router-link>
          </li>
        </ul>
      </div>
      <div
        class="sidebar-group"
        :class="{
          active: isActiveForGroup('/components'),
          open: isActiveForGroup('/components'),
        }"
        ref="components"
      >
        <div class="group-content" @click="openGroup('components')">
          <a class="group-title blink-dot" href="#">Components</a>
        </div>
        <ul class="group-menu">
          <li
            class="menu-item"
            :class="{
              active: isActive('/components/alert'),
            }"
            @click="$router.push('/components/alert')"
          >
            <router-link to="/components/alert">Alert</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/components/avatar'),
            }"
            @click="$router.push('/components/avatar')"
          >
            <router-link to="/components/avatar"
              >Avatar <span class="tag success">New</span></router-link
            >
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/components/card'),
            }"
            @click="$router.push('/components/card')"
          >
            <router-link to="/components/card">Card</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/components/dropdown'),
            }"
            @click="$router.push('/components/dropdown')"
          >
            <router-link to="/components/dropdown">Dropdown</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/components/modal'),
            }"
            @click="$router.push('/components/modal')"
          >
            <router-link to="/components/modal">Modal</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/components/navbar'),
            }"
            @click="$router.push('/components/navbar')"
          >
            <router-link to="/components/navbar">Navbar</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/components/pagination'),
            }"
            @click="$router.push('/components/pagination')"
          >
            <router-link to="/components/pagination">Pagination</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/components/sidebar'),
            }"
            @click="$router.push('/components/sidebar')"
          >
            <router-link to="/components/sidebar">Sidebar</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/components/spinner'),
            }"
            @click="$router.push('/components/spinner')"
          >
            <router-link to="/components/spinner">Spinner</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/components/toast'),
            }"
            @click="$router.push('/components/toast')"
          >
            <router-link to="/components/toast">Toast</router-link>
          </li>
        </ul>
      </div>
      <div
        class="sidebar-group"
        :class="{
          active: isActiveForGroup('/layout'),
          open: isActiveForGroup('/layout'),
        }"
        ref="layout"
      >
        <div class="group-content" @click="openGroup('layout')">
          <a class="group-title" href="#">Layout</a>
        </div>
        <ul class="group-menu">
          <li
            class="menu-item"
            :class="{
              active: isActive('/layout/container'),
            }"
            @click="$router.push('/layout/container')"
          >
            <router-link to="/layout/container">Container</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/layout/grid'),
            }"
            @click="$router.push('/layout/grid')"
          >
            <router-link to="/layout/grid">Grid</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/layout/hero'),
            }"
            @click="$router.push('/layout/hero')"
          >
            <router-link to="/layout/hero">Hero</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/layout/section'),
            }"
            @click="$router.push('/layout/section')"
          >
            <router-link to="/layout/section">Section</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/layout/footer'),
            }"
            @click="$router.push('/layout/footer')"
          >
            <router-link to="/layout/footer">Footer</router-link>
          </li>
        </ul>
      </div>
      <div
        class="sidebar-group"
        :class="{
          active: isActiveForGroup('/utilities'),
          open: isActiveForGroup('/utilities'),
        }"
        ref="utilities"
      >
        <div class="group-content" @click="openGroup('utilities')">
          <a class="group-title" href="#">Utilities</a>
        </div>
        <ul class="group-menu">
          <li
            class="menu-item"
            :class="{
              active: isActive('/utilities/backgrounds'),
            }"
            @click="$router.push('/utilities/backgrounds')"
          >
            <router-link to="/utilities/backgrounds">Backgrounds</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/utilities/borders'),
            }"
            @click="$router.push('/utilities/borders')"
          >
            <router-link to="/utilities/borders">Borders</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/utilities/display'),
            }"
            @click="$router.push('/utilities/display')"
          >
            <router-link to="/utilities/display">Display</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/utilities/flexbox'),
            }"
            @click="$router.push('/utilities/flexbox')"
          >
            <router-link to="/utilities/flexbox">Flexbox</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/utilities/headings'),
            }"
            @click="$router.push('/utilities/headings')"
          >
            <router-link to="/utilities/headings">Headings</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/utilities/interactions'),
            }"
            @click="$router.push('/utilities/interactions')"
          >
            <router-link to="/utilities/interactions">Interactions</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/utilities/opacities'),
            }"
            @click="$router.push('/utilities/opacities')"
          >
            <router-link to="/utilities/opacities">Opacities</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/utilities/overflows'),
            }"
            @click="$router.push('/utilities/overflows')"
          >
            <router-link to="/utilities/overflows">Overflows</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/utilities/positions'),
            }"
            @click="$router.push('/utilities/positions')"
          >
            <router-link to="/utilities/positions">Positions</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/utilities/shadows'),
            }"
            @click="$router.push('/utilities/shadows')"
          >
            <router-link to="/utilities/shadows">Shadows</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/utilities/sizing'),
            }"
            @click="$router.push('/utilities/sizing')"
          >
            <router-link to="/utilities/sizing">Sizing</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/utilities/spacing'),
            }"
            @click="$router.push('/utilities/spacing')"
          >
            <router-link to="/utilities/spacing">Spacing</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/utilities/typography'),
            }"
            @click="$router.push('/utilities/typography')"
          >
            <router-link to="/utilities/typography">Typography</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/utilities/visibility'),
            }"
            @click="$router.push('/utilities/visibility')"
          >
            <router-link to="/utilities/visibility">Visibility</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/utilities/alignment'),
            }"
            @click="$router.push('/utilities/alignment')"
          >
            <router-link to="/utilities/alignment">Alignment</router-link>
          </li>
          <li
            class="menu-item"
            :class="{
              active: isActive('/utilities/font-colors'),
            }"
            @click="$router.push('/utilities/font-colors')"
          >
            <router-link to="/utilities/font-colors">Font Colors</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="sidebar-footer">
      <div class="flex justify-between w-100">
        <div></div>
        <div>
          <span class="tag primary">
            This documentation for v-{{ $store.state.version }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  methods: {
    openGroup(ref) {
      this.$refs[ref].classList.toggle("open");
    },
    isActive(path) {
      return this.$route.path === path;
    },
    isActiveForGroup(path) {
      return this.$route.path.includes(path);
    },
    hoverSidebar() {
      this.$refs.sidebar.style.paddingLeft = "0px";
    },
    checkWindowSize() {
      if (window.innerWidth > 991) {
        this.$refs.sidebar.classList.remove("closed");
      } else {
        this.$refs.sidebar.classList.add("closed");
      }
    },
  },
  mounted() {
    this.checkWindowSize();
    window.addEventListener("resize", this.checkWindowSize);
  },
};
</script>

<style scoped>
@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.blink {
  animation: blink 1s linear infinite;
}

.blink-dot {
  position: relative;
}

.blink-dot::before {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgb(255, 71, 87);
  position: absolute;
  top: 0px;
  left: -10px;
  animation: blink 0.8s infinite;
}

.tag {
  font-size: 0.5rem;
  padding: 3px 6px 2px;
  line-height: 1;
  position: absolute;
  top: 38%;
  transform: translate(-50%);
  right: 50%;
}
</style>
