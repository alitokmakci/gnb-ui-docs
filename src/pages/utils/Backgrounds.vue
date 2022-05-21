<template>
  <Layout>
    <template #navigation>
      <div class="card">
        <h5 class="text-right pr-30 mb-10">On this page:</h5>
        <ul>
          <li>
            <a class="link dark" href="#colors"> Colors </a>
          </li>
          <li>
            <a class="link dark" href="#flat"> Flat </a>
          </li>
        </ul>
      </div>
    </template>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Backgrounds</h1>
        <p class="subtitle">
          <b>GNB UI</b> has a set of built-in background properties.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">To Import Background Utilities Separately:</h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/utilities/backgrounds";'
        />
      </div>
    </section>

    <section class="section" id="colors">
      <div class="container">
        <h2 class="mb-20">&bull; Colors</h2>
        <p class="fs-6">
          <b>GNB UI</b> has 11 background colors. Based on background color you
          provide font colors will be change to a readable color. To use them
          just add the class <code class="text-danger">bg-{color}</code> to the
          element. For backgrounds you can use these colors: <br />
          <code class="text-danger">.bg-white</code> <br />
          <code class="text-danger">.bg-gray</code> <br />
          <code class="text-danger">.bg-gray-2</code> <br />
          <code class="text-danger">.bg-gray-3</code> <br />
          <code class="text-danger">.bg-primary</code> <br />
          <code class="text-danger">.bg-secondary</code> <br />
          <code class="text-danger">.bg-success</code> <br />
          <code class="text-danger">.bg-info</code> <br />
          <code class="text-danger">.bg-warning</code> <br />
          <code class="text-danger">.bg-danger</code> <br />
          <code class="text-danger">.bg-dark</code> <br />
        </p>
        <div class="row">
          <div
            class="column size-12 md-size-4 lg-size-3 mb-10"
            style="height: 10rem"
          >
            <div class="bg-white h-100 w-100 flex align-center justify-center">
              .bg-white
            </div>
          </div>
          <div
            class="column size-12 md-size-4 lg-size-3 mb-10"
            style="height: 10rem"
          >
            <div class="bg-gray h-100 w-100 flex align-center justify-center">
              .bg-gray
            </div>
          </div>
          <div
            class="column size-12 md-size-4 lg-size-3 mb-10"
            style="height: 10rem"
          >
            <div class="bg-gray-2 h-100 w-100 flex align-center justify-center">
              .bg-gray-2
            </div>
          </div>
          <div
            class="column size-12 md-size-4 lg-size-3 mb-10"
            style="height: 10rem"
          >
            <div class="bg-gray-3 h-100 w-100 flex align-center justify-center">
              .bg-gray-3
            </div>
          </div>
          <div
            class="column size-12 md-size-4 lg-size-3 mb-10"
            style="height: 10rem"
          >
            <div
              class="bg-primary h-100 w-100 flex align-center justify-center"
            >
              .bg-primary
            </div>
          </div>
          <div
            class="column size-12 md-size-4 lg-size-3 mb-10"
            style="height: 10rem"
          >
            <div
              class="bg-secondary h-100 w-100 flex align-center justify-center"
            >
              .bg-secondary
            </div>
          </div>
          <div
            class="column size-12 md-size-4 lg-size-3 mb-10"
            style="height: 10rem"
          >
            <div
              class="bg-success h-100 w-100 flex align-center justify-center"
            >
              .bg-success
            </div>
          </div>
          <div
            class="column size-12 md-size-4 lg-size-3 mb-10"
            style="height: 10rem"
          >
            <div class="bg-info h-100 w-100 flex align-center justify-center">
              .bg-info
            </div>
          </div>
          <div
            class="column size-12 md-size-4 lg-size-3 mb-10"
            style="height: 10rem"
          >
            <div
              class="bg-warning h-100 w-100 flex align-center justify-center"
            >
              .bg-warning
            </div>
          </div>
          <div
            class="column size-12 md-size-4 lg-size-3 mb-10"
            style="height: 10rem"
          >
            <div class="bg-danger h-100 w-100 flex align-center justify-center">
              .bg-danger
            </div>
          </div>
          <div
            class="column size-12 md-size-4 lg-size-3 mb-10"
            style="height: 10rem"
          >
            <div class="bg-dark h-100 w-100 flex align-center justify-center">
              .bg-dark
            </div>
          </div>
        </div>
        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="bg-white">.bg-white</div>
<div class="bg-gray">.bg-gray</div>
<div class="bg-gray-2">.bg-gray-2</div>
<div class="bg-gray-3">.bg-gray-3</div>
<div class="bg-primary">.bg-primary</div>
<div class="bg-secondary">.bg-secondary</div>
<div class="bg-sucess">.bg-sucess</div>
<div class="bg-info">.bg-info</div>
<div class="bg-warning">.bg-warning</div>
<div class="bg-danger">.bg-danger</div>
<div class="bg-dark">.bg-dark</div>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="colors">
      <div class="container">
        <h2 class="mb-20">&bull; Colors</h2>
        <p class="fs-6">
          <b>GNB UI</b> provides also 7 flat background colors. To use them just
          add the class <code class="text-danger">bg-{color}-flat</code> to the
          element. For flat backgrounds you can use these colors: <br />
          <code class="text-danger">.bg-primary-flat</code> <br />
          <code class="text-danger">.bg-secondary-flat</code> <br />
          <code class="text-danger">.bg-success-flat</code> <br />
          <code class="text-danger">.bg-info-flat</code> <br />
          <code class="text-danger">.bg-warning-flat</code> <br />
          <code class="text-danger">.bg-danger-flat</code> <br />
          <code class="text-danger">.bg-dark-flat</code> <br />
        </p>
        <div class="row">
          <div
            class="column size-12 md-size-4 lg-size-3 mb-10"
            style="height: 10rem"
          >
            <div
              class="bg-primary-flat h-100 w-100 flex align-center justify-center"
            >
              .bg-primary-flat
            </div>
          </div>
          <div
            class="column size-12 md-size-4 lg-size-3 mb-10"
            style="height: 10rem"
          >
            <div
              class="bg-secondary-flat h-100 w-100 flex align-center justify-center"
            >
              .bg-secondary-flat
            </div>
          </div>
          <div
            class="column size-12 md-size-4 lg-size-3 mb-10"
            style="height: 10rem"
          >
            <div
              class="bg-success-flat h-100 w-100 flex align-center justify-center"
            >
              .bg-success-flat
            </div>
          </div>
          <div
            class="column size-12 md-size-4 lg-size-3 mb-10"
            style="height: 10rem"
          >
            <div
              class="bg-info-flat h-100 w-100 flex align-center justify-center"
            >
              .bg-info-flat
            </div>
          </div>
          <div
            class="column size-12 md-size-4 lg-size-3 mb-10"
            style="height: 10rem"
          >
            <div
              class="bg-warning-flat h-100 w-100 flex align-center justify-center"
            >
              .bg-warning-flat
            </div>
          </div>
          <div
            class="column size-12 md-size-4 lg-size-3 mb-10"
            style="height: 10rem"
          >
            <div
              class="bg-danger-flat h-100 w-100 flex align-center justify-center"
            >
              .bg-danger-flat
            </div>
          </div>
          <div
            class="column size-12 md-size-4 lg-size-3 mb-10"
            style="height: 10rem"
          >
            <div
              class="bg-dark-flat h-100 w-100 flex align-center justify-center"
            >
              .bg-dark-flat
            </div>
          </div>
        </div>
        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="bg-primary-flat">.bg-primary-flat</div>
<div class="bg-secondary-flat">.bg-secondary-flat</div>
<div class="bg-sucess-flat">.bg-sucess-flat</div>
<div class="bg-info-flat">.bg-info-flat</div>
<div class="bg-warning-flat">.bg-warning-flat</div>
<div class="bg-danger-flat">.bg-danger-flat</div>
<div class="bg-dark-flat">.bg-dark-flat</div>'
          />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from "../../layout/Layout.vue";
</script>
