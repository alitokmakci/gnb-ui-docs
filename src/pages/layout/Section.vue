<template>
  <Layout>
    <template #navigation>
      <div class="card">
        <h5 class="text-right pr-30 mb-10">On this page:</h5>
        <ul>
          <li>
            <a class="link dark" href="#default"> Default </a>
          </li>
        </ul>
      </div>
    </template>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Section</h1>
        <p class="subtitle">Section is the content wrapper of <b>GNB UI</b>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">To Import Section Separately:</h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/layout/section";'
        />
      </div>
    </section>

    <section class="section" id="default">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Default Section</h2>
          <p class="fs-6">
            Default section is a content wrapper and has responsive paddings.
          </p>
        </div>

        <div class="mt-25">
          <section class="section bg-primary">
            This is a section layout item.
          </section>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<section class="section">
  This is a section layout item.
</section>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="variables">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Variables</h2>
          <p class="fs-6">
            To customize the section component you change the variables listed
            below.
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
  { name: "$section-padding", value: "3rem 1.5rem", computed: "" },
  { name: "$section-lg-padding", value: "3rem 3rem", computed: "" },
];
</script>
