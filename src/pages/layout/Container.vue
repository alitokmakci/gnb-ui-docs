<template>
  <Layout>
    <template #navigation>
      <div class="card">
        <h5 class="text-right pr-30 mb-10">On this page:</h5>
        <ul>
          <li>
            <a class="link dark" href="#default"> Default </a>
          </li>
          <li>
            <a class="link dark" href="#colors"> Fluid </a>
          </li>
        </ul>
      </div>
    </template>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Container</h1>
        <p class="subtitle">
          Container is the one of the most important element of <b>GNB UI</b>.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">To Import Container Separately:</h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/layout/container";'
        />
      </div>
    </section>

    <section class="section">
      <div class="container" style="height: 5rem">
        <div class="bg-primary text-center p-20">Default Container</div>
      </div>
    </section>

    <section class="section" id="default">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Default Container</h2>
          <p class="fs-6">
            Default container is responsive and has a fixed width.
          </p>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="container"></div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <div class="container fluid" style="height: 5rem">
      <div class="bg-primary text-center p-20">Fluid Container</div>
    </div>

    <section class="section" id="fluid">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Fluid</h2>
          <p class="fs-6">
            Fluid container is also responsive and it has full width.
          </p>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="container fluid"></div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="variables">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Variables</h2>
          <p class="fs-6">
            To customize the container component you can change the variables
            listed below.
          </p>
        </div>

        <variableTable :variables="variables" />
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from "../../layout/Layout.vue";
import variableTable from "../../components/variableTable.vue";

const variables = [
  { name: "$container-gutter-x", value: "$gutter-x", computed: "24px" },
  { name: "$container-gutter-y", value: "$gutter-y", computed: "0" },
  {
    name: "$container-sm-width <span class='tag success'>since 0.2.1</span>",
    value: "540px",
    computed: "",
  },
  {
    name: "$container-md-width <span class='tag success'>since 0.2.1</span>",
    value: "720px",
    computed: "",
  },
  {
    name: "$container-lg-width <span class='tag success'>since 0.2.1</span>",
    value: "960px",
    computed: "",
  },
  {
    name: "$container-xl-width <span class='tag success'>since 0.2.1</span>",
    value: "1140px",
    computed: "",
  },
  {
    name: "$container-xxl-width <span class='tag success'>since 0.2.1</span>",
    value: "1320px",
    computed: "",
  },
  {
    name: "$sm-width <span class='tag danger'>removed in 0.2.1</span>",
    value: "540px",
    computed: "",
  },
  {
    name: "$md-width <span class='tag danger'>removed in 0.2.1</span>",
    value: "720px",
    computed: "",
  },
  {
    name: "$lg-width <span class='tag danger'>removed in 0.2.1</span>",
    value: "960px",
    computed: "",
  },
  {
    name: "$xl-width <span class='tag danger'>removed in 0.2.1</span>",
    value: "1140px",
    computed: "",
  },
  {
    name: "$xxl-width <span class='tag danger'>removed in 0.2.1</span>",
    value: "1320px",
    computed: "",
  },
];
</script>
