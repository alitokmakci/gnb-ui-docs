<template>
  <Layout>
    <template #navigation>
      <div class="card">
        <h5 class="text-right pr-30 mb-10">On this page:</h5>
        <ul>
          <li>
            <a class="link dark" href="#customization"> Customization </a>
          </li>
          <li>
            <a class="link dark" href="#modularity"> Modularity </a>
          </li>
        </ul>
      </div>
    </template>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Customization & Modularity</h1>
        <p class="subtitle">
          Customization <b>GNB UI</b> colors, font types, etc, is very easy.
        </p>
      </div>
    </section>

    <section class="section" id="customization">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Customization</h2>
          <p class="fs-6">
            <b>GNB UI</b> is built with customization in mind. You can easily
            change nearly every aspect of the UI. You can change the colors,
            font types and more. In every components or elements page in the
            documentation you can find a list of all the available variables.
            Changing the variables will let you change the look and feel of the
            UI.
          </p>
        </div>

        <div class="mt-25">
          <p class="fs-6">
            To customize <b>GNB UI</b>, we suggest that create a new files
            called <code class="text-secondary">_variables.scss</code> and
            <code class="text-secondary">main.scss</code> in your assets
            directory and import
            <code class="text-secondary">_variables.scss</code> file in your
            main.scss file. Write your own values for <b>GNB UI</b> variables.
            This will override the default variables and make your file
            structure more organized. <br /><br />
            <i class="fs-5 text-primary"
              >You can find general variables on <b>Variables</b> section in the
              left sidebar. And for all elements and components variables will
              be documented at their documentation pages.</i
            >
          </p>
          <highlightjs
            autodetect
            code="/* _variables.scss */
$font-color: rgba(0,0,0,1); // Change Font color"
          />
          <highlightjs
            autodetect
            code='/* main.scss */
@import "./_variables.scss"; // Import Your Custom Variables
@import "../../node_modules/gnb-ui/src/index.scss"; //Import GNB UI'
          />
        </div>
      </div>
    </section>

    <section class="section" id="modularity">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Modularity</h2>
          <p class="fs-6">
            <b>GNB UI</b> has lots of components and elements. If you want to
            use only a few components or elements, you can only import
            components or elements you need. This modular approach will make
            your css file size smaller. If you want to import a component or
            element, you can find how to import it in the documentation page of
            the component or element.
          </p>
        </div>

        <div class="mt-25">
          <p class="fs-6">
            First of all you have to import
            <code class="text-secondary">base.scss</code> file to
            <b>GNB UI</b> works correctly.
          </p>
          <highlightjs
            autodetect
            code='@import "../../node_modules/gnb-ui/src/base.scss"; // Required
@import "../../node_modules/gnb-ui/src/elements/button.scss"; // Import Buttons
@import "../../node_modules/gnb-ui/src/components/modal.scss"; // Import Modal
...'
          />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from "../layout/Layout.vue";
</script>
