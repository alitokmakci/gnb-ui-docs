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
        <h1 class="title-5 fw-500">Footer</h1>
        <p class="subtitle"><b>GNB UI</b> has a simple footer item.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">To Import Footer Separately:</h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/layout/footer";'
        />
      </div>
    </section>

    <section class="section" id="default">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Default Footer</h2>
          <p class="fs-6">
            Default footer is the last element of your webpage.
          </p>
        </div>

        <div class="mt-25">
          <div class="p-20 bg-white border-radius-2">
            <section class="section bg-primary">
              This is a content wrapper section.
            </section>
            <div class="footer bg-gray-2">
              This is a simple footer and the last item of the page.
              <b>GNB UI.</b>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="footer">This is a simple footer.</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="variables">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Variables</h2>
          <p class="fs-6">
            To customize the section component you can change the variables
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
  {
    name: "$footer-background",
    value: "$gray-2",
    computed: "rgb(244, 247, 248)",
  },
  { name: "$footer-padding", value: "3rem 1.5rem", computed: "" },
  { name: "$footer-text-align", value: "center", computed: "" },
];
</script>
