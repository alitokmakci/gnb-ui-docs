<template>
  <navbar :left-burger="false"></navbar>
  <div class="hero half-screen">
    <div class="hero-body relative">
      <div class="w-100 md-w-50 flex flex-column justify-center">
        <h1 class="title-4">GNB UI</h1>
        <p class="subtitle mb-30 text-gray-3 line-height-base fs-5">
          Free, open source and modular
          <span class="text-dark fw-500">ui framework</span> that has built-in
          <span class="text-dark fw-500">responsive</span> components.
        </p>
        <div class="flex items-center">
          <button
            @click="$router.push('/get-started')"
            class="btn primary lg mr-10"
          >
            Get Started
          </button>
          <a
            :href="$store.state.download_link"
            download
            class="btn primary flat lg mr-10"
          >
            Download
          </a>
          <a target="_blank" href="https://github.com/alitokmakci/gnb-ui">
            <button class="btn dark bordered border-radius-4 fs-2">
              <i class="ri-github-fill"></i>
            </button>
          </a>
        </div>
      </div>
      <div id="samples_container">
        <div class="relative md-block hidden" id="samples">
          <div id="sample-1" class="card type-3" style="max-width: 400px">
            <div class="card-img">
              <figure class="figure size-1by1" style="width: 25rem">
                <img src="./../assets/photo2.jpg" alt="" />
              </figure>
              <div class="card-interactions">
                <button class="btn danger icon">
                  <i class="ri-heart-line"></i>
                </button>
                <button class="btn icon ml-5">
                  <i class="ri-message-3-line"></i>
                  <span class="ml-5">60</span>
                </button>
              </div>
            </div>
            <div class="card-content">
              <h5 class="card-title">Default Card Design</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, ducimus?
              </p>
            </div>
          </div>
          <button id="sample-2" class="btn primary">Primary Button</button>
          <div id="sample-3" class="form-element has-icon-before">
            <input
              type="text"
              class="input primary shadow"
              placeholder="Name"
            />
            <div class="input-icon">
              <i class="ri-user-follow-line"></i>
            </div>
          </div>
          <div id="sample-4" class="dropdown hoverable">
            <button class="btn shadow has-carret">Hoverable Dropdown</button>
            <div class="dropdown-content">
              <div class="dropdown-menu">
                <h5 class="dropdown-title">Dropdown title</h5>
                <div class="dropdown-item">Dropdown Item</div>
                <div class="dropdown-item">Dropdown Item</div>
              </div>
            </div>
          </div>
          <div
            id="sample-5"
            class="shadow border-radius-3 p-10"
            style="width: 70px"
          >
            <span class="spinner xl primary border-radius-2"></span>
          </div>

          <div id="sample-6" class="avatar primary xl shadow-lg">
            <span class="avatar-content">G</span>
            <span class="avatar-badge danger"></span>
          </div>

          <div id="sample-7" class="card type-5" style="max-width: 350px">
            <div class="card-img">
              <img src="./../assets/photo1.jpg" alt="" />
              <div class="card-interactions top-left">
                <button class="btn danger icon">
                  <i class="ri-heart-line"></i>
                </button>
                <button class="btn icon ml-5">
                  <i class="ri-message-3-line"></i>
                  <span class="ml-5">60</span>
                </button>
              </div>
            </div>
            <div class="card-content">
              <h5 class="card-title">Default Card Design</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, ducimus?
              </p>
            </div>
          </div>
          <div class="form-element" id="sample-8">
            <span class="label ml-0">On/Off</span>
            <input
              type="checkbox"
              id="switch-primary-square"
              class="switch primary square"
              checked
            />
            <label for="switch-primary-square"></label>
          </div>
          <div
            class="progress infinite primary"
            id="sample-9"
            style="width: 200px"
          >
            <div class="progressbar"></div>
          </div>
          <div class="form-element horizontal" id="sample-10">
            <div class="checkbox-group">
              <input
                id="check_2"
                type="checkbox"
                class="checkbox primary"
                placeholder="Name"
                checked
              />
              <label class="label" for="check_2">Checkbox</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="section lg-flex lg-align-center" id="intro">
    <div class="container">
      <div class="row pt-75">
        <div class="column size-12 lg-size-4">
          <div class="card shadow-lg p-15 flex mb-10 lg-m-0">
            <figure class="figure size-64 mr-10 card-img">
              <img src="../assets/mobile.png" alt="" />
            </figure>
            <div class="inline-block">
              <h4 class="mb-10">Fully Responsive</h4>
              <p class="fs-6 line-height- fw-300">
                Mobile first designed components
              </p>
            </div>
          </div>
        </div>
        <div class="column size-12 lg-size-4">
          <div class="card shadow-lg p-15 flex mb-10 lg-m-0">
            <figure class="figure size-64 mr-10 card-img">
              <img src="../assets/js.png" alt="" />
            </figure>
            <div class="inline-block">
              <h4 class="mb-10">No Javascript Included</h4>
              <p class="fs-6 line-height-1 fw-300">
                Easily entegrate with any javascript framework
              </p>
            </div>
          </div>
        </div>
        <div class="column size-12 lg-size-4">
          <div class="card shadow-lg p-15 flex">
            <figure class="figure size-64 mr-15 card-img">
              <img src="../assets/modular.jpg" alt="" />
            </figure>
            <div class="inline-block">
              <h4 class="mb-10">Modular</h4>
              <p class="fs-6 line-height-1 fw-300">
                Import only needed components
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section mt-20 flex align-center min-h-70">
    <div class="container flex">
      <div class="p-20 description">
        <div class="row">
          <div class="column size-12 lg-size-6">
            <figure class="figure size-4by3">
              <img src="../assets/components.jpg" alt="" />
            </figure>
          </div>
          <div class="column size-12 lg-size-6 align-center flex-column">
            <h1 class="fw-200 mb-25 xl-mt-100">
              <span class="fw-500">Beautifully designed</span> and
              <span class="fw-500">highly customizable</span> components.
            </h1>
            <p class="fs-5 fw-200">
              With <b>GNB UI</b> you can create your own designes easliy with
              ready to go components. You can customize the components to your
              needs. You can create your own template colors, typography, and
              more. The best thing is that you can use every elements and
              components in <b>any javascript framework</b>.
            </p>
            <router-link
              to="/components"
              class="btn primary lg self-start mt-20"
            >
              Get Started with Components
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section flex align-center min-h-70">
    <div class="container flex w-100 align-center">
      <div class="p-20 description">
        <div class="row flex-column-reverse lg-flex-row">
          <div class="column size-12 lg-size-6 align-center flex-column">
            <h1 class="fw-200 mb-25 xl-mt-100">
              <span class="fw-500">Mobile first</span> designed
              <span class="fw-500">elements</span> and
              <span class="fw-500">utilities</span> for all devices.
            </h1>
            <p class="fs-5 fw-200">
              We designed the elements, components and utilities to be
              <b>mobile first</b>. You can use them for any device without
              trouble. Besides, you can make it compatible with the screen size
              you want with a few lines of code.
            </p>
            <router-link to="/elements" class="btn primary lg self-start mt-20">
              Get Started with Elements
            </router-link>
          </div>
          <div class="column size-12 lg-size-6">
            <figure class="figure size-4by3">
              <img src="../assets/responsive.jpg" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section mt-20 flex align-center min-h-70">
    <div class="container flex w-100 align-center">
      <div class="p-20 description">
        <div class="row">
          <div class="column size-12 lg-size-6">
            <figure class="figure size-4by3 card-img">
              <img src="../assets/grid_design.jpg" alt="" />
            </figure>
          </div>
          <div class="column size-12 lg-size-6 align-center flex-column">
            <h1 class="fw-200 mb-25 xl-mt-100">
              <span class="fw-500">Grid Layout</span> for easy cross platform
              design with modern <span class="fw-500">Flexbox</span> technology.
            </h1>
            <p class="fs-5 fw-200">
              <b>GNB UI</b> provides you with great convenience in design thanks
              to the resizable grid system according to the screen dimensions.
              In this way, instead of writing separate pieces of code for each
              platform, you can get neat views on all screen sizes with the
              classes you add to a single code base.
            </p>
            <router-link
              to="/layout/grid"
              class="btn primary lg self-start mt-20"
            >
              Get Started with Grid System
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <base-footer></base-footer>
</template>

<script setup>
import Navbar from "../components/navbar.vue";
import BaseFooter from "../components/baseFooter.vue";
</script>

<style>
#intro {
  height: calc(50vh - 50px);
}

.subtitle {
  margin-top: -5px;
}

.inspiration {
  margin-top: -5px;
}

#samples_container {
  width: 50%;
  position: absolute;
  right: 0;
  top: 0;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.25s ease;
}

#samples {
  width: 1100px;
  height: 100%;
}

#samples_container {
  transform: scale(0.85);
}

@media (max-width: 1500px) {
  #samples_container {
    transform: scale(0.7);
  }
}

@media (min-width: 1024px) and (max-width: 1305px) {
  #samples_container {
    width: 60%;
    transform: scale(0.65);
  }
}

@media (max-width: 1024px) {
  #samples_container {
    width: 60%;
    transform: scale(0.5);
  }
}

#sample-1,
#sample-2,
#sample-3,
#sample-4,
#sample-5,
#sample-6,
#sample-7,
#sample-8,
#sample-9,
#sample-10 {
  position: absolute;
}

#sample-1 {
  top: 50px;
  left: 10px;
  animation: bounce 12s ease-in-out infinite;
}

#sample-2 {
  top: 150px;
  left: 640px;
  animation: bounce 10s ease-in-out infinite;
}

#sample-3 {
  top: 70px;
  left: 480px;
  animation: bounce 11s ease-in-out infinite;
}

#sample-4 {
  top: 280px;
  left: 20px;
  animation: bounce 13s ease-in-out infinite;
}

#sample-5 {
  top: 305px;
  left: 220px;
  animation: bounce 10s ease-in-out infinite;
}

#sample-6 {
  top: 275px;
  left: 330px;
  animation: bounce 10.5s ease-in-out infinite 0.25s;
}

#sample-7 {
  top: 240px;
  left: 440px;
  animation: bounce 11.5s ease-in-out infinite;
}

#sample-8 {
  top: 175px;
  left: 475px;
  animation: bounce 12s ease-in-out infinite;
}

#sample-9 {
  top: 425px;
  left: 200px;
  animation: bounce 13.5s ease-in-out infinite;
}

#sample-10 {
  top: 385px;
  left: 60px;
  animation: bounce 12.5s ease-in-out infinite;
}

@keyframes bounce {
  0% {
    transform: translate(0);
  }
  30% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(4px);
  }
  70% {
    transform: translateY(-15px);
  }

  100% {
    transform: translate(0);
  }
}

.description {
  transition: all 0.25s ease;
}

.description:hover {
  transform: translateY(10px);
}

.hero {
  padding-top: 50px;
}

.min-h-70 {
  min-height: 70vh;
}

.footer {
  background-color: #fafafa !important;
}
</style>
