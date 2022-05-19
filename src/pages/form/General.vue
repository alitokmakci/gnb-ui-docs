<template>
  <Layout>
    <template #navigation>
      <div class="card">
        <h5 class="text-right pr-30 mb-10">On this page:</h5>
        <ul>
          <li>
            <a class="link dark" href="#default"> Default Layout</a>
          </li>
          <li>
            <a class="link dark" href="#horizontal"> Horizontal Layout </a>
          </li>
        </ul>
      </div>
    </template>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">General Form Element Design</h1>
        <p class="subtitle">
          To use form elements more easier <b>GNB UI</b> provides a form element
          item.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">
          <span class="fs-1">!!! </span> Any form element requires import this
          file to show correctly:
        </h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/form/general";'
        />
      </div>
    </section>

    <section class="section" id="default">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Default Layout For Form Elements</h2>
          <p class="fs-6">
            <code class="text-danger">.form-element</code> item is a wrapper for
            any form elements. Use this wrapper to show form elements in a
            proper way.
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex justify-center border-radius-2">
            <div class="form-element">
              <label class="label">Label:</label>
              <input type="text" class="input" placeholder="Name" />
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
    <label class="label">Label:</label>
    <input type="text" class="input" placeholder="Name" />
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="horizontal">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Horizontal Layout For Form Elements</h2>
          <p class="fs-6">
            Defaultly <code class="text-danger">.form-element</code> wrapper has
            a veritical layout for label and form item. To show form elements in
            a horizontal layout, use
            <code class="text-danger">.horizontal</code> class.
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex justify-center border-radius-2 w-100">
            <div class="form-element horizontal">
              <label class="label">Label:</label>
              <input type="text" class="input" placeholder="Name" />
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element horizontal">
    <label class="label">Label:</label>
    <input type="text" class="input" placeholder="Name" />
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from "../../layout/Layout.vue";
</script>
