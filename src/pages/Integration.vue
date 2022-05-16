<template>
  <Layout>
    <template #navigation>
      <div class="card">
        <h5 class="text-right pr-30 mb-10">On this page:</h5>
        <ul>
          <li>
            <a class="link dark" href="#vue-example"> VueJS Example </a>
          </li>
          <li>
            <a class="link dark" href="#react-example"> React Example </a>
          </li>
        </ul>
      </div>
    </template>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Integration</h1>
        <p class="subtitle">
          You can easily integrate <span class="fw-600">GNB UI</span> with all
          javascript frameworks in a few small steps.
        </p>
      </div>
    </section>

    <section class="section" id="vue-example">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; VueJS Integration Example</h2>
        </div>

        <div class="mt-25">
          <p class="fs-6">
            Create a fresh Vue project or open a previously created Vue project
            and add <b>GNB UI</b> to your project:
          </p>
          <highlightjs
            language="bash"
            code="vue create sample_project

cd sample_project

yarn add gnb-ui sass sass-loader"
          />
        </div>

        <div class="mt-25">
          <p class="fs-6">
            Create a new file:
            <code class="text-secondary">src/assets/main.scss</code> and import
            <b>GNB UI</b>.
          </p>
          <highlightjs
            autodetect
            code='//Import GNB UI
@import "gnb-ui";'
          />
        </div>

        <div class="mt-25">
          <p class="fs-6">
            Import <code class="text-secondary">main.scss</code> into your
            <code class="text-secondary">main.js</code> file.
          </p>
          <highlightjs autodetect code='import "./assets/main.scss";' />
        </div>

        <div class="mt-25">
          <p class="fs-6">
            Now you are ready to build amazing webpages! In
            <code class="text-secondary">App.vue</code> file add the following
            code between
            <code class="text-secondary"
              >&lt;template&gt;&lt;/template&gt;</code
            >
            tags:
          </p>
          <highlightjs
            autodetect
            code='<div class="hero lg">
    <div class="hero-body">
        <h1>Welcome to GNB UI</h1>
        <p>We love to create beauty</p>
    </div>
</div>'
          />
        </div>

        <div class="mt-25">
          <p class="fs-6">Start development server:</p>
          <highlightjs autodetect code="yarn dev" />
        </div>
      </div>
    </section>

    <section class="section" id="react-example">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; React Integration Example</h2>
        </div>

        <div class="mt-25">
          <p class="fs-6">
            Add <b>GNB UI</b> to your react project or create a new react
            project:
          </p>
          <highlightjs
            language="javascript"
            code="npx create-react-app my-app

cd my-app

yarn add gnb-ui sass sass-loader"
          />
        </div>

        <div class="mt-25">
          <p class="fs-6">
            Create a new file:
            <code class="text-secondary">src/assets/main.scss</code> and import
            <b>GNB UI</b>.
          </p>
          <highlightjs
            autodetect
            code='//Import GNB UI
@import "gnb-ui";'
          />
        </div>

        <div class="mt-25">
          <p class="fs-6">
            Import <code class="text-secondary">main.scss</code> into your
            <code class="text-secondary">index.js</code> file.
          </p>
          <highlightjs autodetect code='import "./assets/main.scss";' />
        </div>

        <div class="mt-25">
          <p class="fs-6">
            Now you are ready to build amazing webpages! In
            <code class="text-secondary">App.js</code> file add the following
            html code to the return statement:
          </p>
          <highlightjs
            autodetect
            code='<div class="hero lg">
    <div class="hero-body">
        <h1>Welcome to GNB UI</h1>
        <p>We love to create beauty</p>
    </div>
</div>'
          />
        </div>

        <div class="mt-25">
          <p class="fs-6">Start development server:</p>
          <highlightjs autodetect code="yarn start" />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from "../layout/Layout.vue";
</script>
