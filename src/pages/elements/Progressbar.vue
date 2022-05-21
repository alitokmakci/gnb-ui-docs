<template>
  <Layout>
    <template #navigation>
      <div class="card">
        <h5 class="text-right pr-30 mb-10">On this page:</h5>
        <ul>
          <li>
            <a class="link dark" href="#default"> Default Progressbar </a>
          </li>
          <li>
            <a class="link dark" href="#colors"> Colors </a>
          </li>
          <li>
            <a class="link dark" href="#infinite"> Infinite </a>
          </li>
          <li>
            <a class="link dark" href="#label"> Label & Height </a>
          </li>
          <li>
            <a href="#variables" class="link dark">Variables</a>
          </li>
        </ul>
      </div>
    </template>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Progressbar</h1>
        <p class="subtitle">
          <b>GNB UI</b> has a beautifull progressbar element.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">To Import Progressbar Separately:</h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/elements/progressbar";'
        />
      </div>
    </section>

    <section class="section" id="default">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Default Progressbar</h2>
          <p class="fs-6">
            When sending a form or pending for a long request, you can use the
            progressbar to show the user that the request is in progress.
          </p>
        </div>

        <div class="text-center mt-25">
          <div class="progress">
            <div class="progressbar" style="width: 85%"></div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="progress">
  <div class="progressbar" style="width: 85%"></div>
</div>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="colors">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Colors</h2>
          <p class="fs-6">
            If you want to use the progressbar with different colors, you can
            add one of the color classes to the
            <code class="text-danger">.progress</code> element.
          </p>
        </div>

        <div class="text-center mt-25">
          <div class="progress primary">
            <div class="progressbar" style="width: 85%"></div>
          </div>
          <div class="progress secondary">
            <div class="progressbar" style="width: 60%"></div>
          </div>
          <div class="progress success">
            <div class="progressbar" style="width: 95%"></div>
          </div>
          <div class="progress info">
            <div class="progressbar" style="width: 40%"></div>
          </div>
          <div class="progress warning">
            <div class="progressbar" style="width: 15%"></div>
          </div>
          <div class="progress danger">
            <div class="progressbar" style="width: 80%"></div>
          </div>
          <div class="progress dark">
            <div class="progressbar" style="width: 55%"></div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="progress primary">
  <div class="progressbar" style="width: 85%"></div>
</div>

<div class="progress secondary">
  <div class="progressbar" style="width: 60%"></div>
</div>

<div class="progress success">
  <div class="progressbar" style="width: 95%"></div>
</div>

<div class="progress info">
  <div class="progressbar" style="width: 40%"></div>
</div>

<div class="progress warning">
  <div class="progressbar" style="width: 15%"></div>
</div>

<div class="progress danger">
  <div class="progressbar" style="width: 80%"></div>
</div>

<div class="progress dark">
  <div class="progressbar" style="width: 55%"></div>
</div>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="infinite">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Infinite</h2>
          <p class="fs-6">
            If you want your progressbar has infinite loading aimation, you can
            add the <code class="text-danger">.infinite</code> class to
            <code class="text-danger">.progress</code> element.
          </p>
        </div>

        <div class="text-center mt-25">
          <div class="progress primary infinite">
            <div class="progressbar" style="width: 85%"></div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="progress primary infinite">
  <div class="progressbar" style="width: 85%"></div>
</div>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="label">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Label & Height</h2>
          <p class="fs-6">
            If you want to add label to the progressbar, you should change the
            height of the <code class="text-danger">.progress</code> element.
            Just add style attribute to the element and write your label inside
            the <code class="text-danger">.progressbar</code> element.
          </p>
        </div>

        <div class="text-center mt-25">
          <div class="progress primary" style="height: 20px">
            <div class="progressbar" style="width: 55%">Loading</div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="progress primary" style="height: 20px">
  <div class="progressbar" style="width: 55%">Loading</div>
</div>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="variables">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Variables</h2>
          <p class="fs-6">
            To add different size and ratios you can change the value of the
            variables.
          </p>
        </div>

        <div class="has-file">
          <table class="table dark bordered striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Default Value</th>
                <th>Computed Value</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr>
                <td>$progress-height</td>
                <td>5px</td>
                <td></td>
              </tr>
              <tr>
                <td>$progress-border-radius</td>
                <td>18px</td>
                <td></td>
              </tr>
              <tr>
                <td>$progress-background</td>
                <td>$gray-1</td>
                <td>rgb(230, 233, 234)</td>
              </tr>
              <tr>
                <td>$progressbar-background</td>
                <td>$white</td>
                <td>rgb(255, 255, 255)</td>
              </tr>
              <tr>
                <td>$progressbar-font-size</td>
                <td>0.75rem</td>
                <td></td>
              </tr>

              <tr>
                <td>$progressbar-font-weight</td>
                <td>500</td>
                <td></td>
              </tr>

              <tr>
                <td>$progressbar-font-line-height</td>
                <td>1</td>
                <td></td>
              </tr>

              <tr>
                <td>$infinite-animation-duration</td>
                <td>1.5s</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from "../../layout/Layout.vue";
</script>
