<template>
  <Layout>
    <template #navigation>
      <div class="card">
        <h5 class="text-right pr-30 mb-10">On this page:</h5>
        <ul>
          <li>
            <a class="link dark" href="#figure"> Figure Element </a>
          </li>
          <li>
            <a class="link dark" href="#fixed"> Fixed Sizes </a>
          </li>
          <li>
            <a class="link dark" href="#ratios"> Ratios </a>
          </li>
          <li>
            <a class="link dark" href="#rounded"> Rounded </a>
          </li>
          <li>
            <a class="link dark" href="#ratios-with-elements">
              Ratios with elements
            </a>
          </li>
          <li>
            <a class="link dark" href="#variables"> Image Variables </a>
          </li>
        </ul>
      </div>
    </template>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Image</h1>
        <p class="subtitle">
          <b>GNB UI</b> makes it easy to showing images with different sizes,
          and ratios.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">To Import Images Separately:</h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/elements/images";'
        />
      </div>
    </section>

    <section class="section" id="figure">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Figure Element</h2>
          <p class="fs-6">
            If you want to use fixed size images or specific ratios for videos
            or images use <code class="text-danger">.figure</code> class to
            figure element as a wrapper. So you can fixed sizes or ratios for
            images.
          </p>
        </div>

        <div class="text-center mt-25">
          <figure class="figure size-128">
            <img src="https://via.placeholder.com/128" />
          </figure>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<figure class="figure size-128">
    <img src="https://via.placeholder.com/128" />
</figure>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="fixed">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Fixed Sizes</h2>
          <p class="fs-6">
            There are 7 fixed sizes for figures. You can use them as a class
            like
            <code class="text-danger">.size-{number}</code> <br />
            Fixed sizes are:
          </p>
          <ul>
            <li><code class="text-danger">.size-16</code></li>
            <li><code class="text-danger">.size-24</code></li>
            <li><code class="text-danger">.size-32</code></li>
            <li><code class="text-danger">.size-48</code></li>
            <li><code class="text-danger">.size-64</code></li>
            <li><code class="text-danger">.size-96</code></li>
            <li><code class="text-danger">.size-128</code></li>
          </ul>
        </div>

        <div
          class="mt-25 flex align-baseline justify-around flex-column lg-flex-row"
        >
          <div>
            <small>16x16px</small>
            <figure class="figure size-16">
              <img
                src="https://via.placeholder.com/150/0000FF/FFFFFF/?text=GNBUI"
              />
            </figure>
          </div>
          <div>
            <small>24x24px</small>
            <figure class="figure size-24">
              <img
                src="https://via.placeholder.com/150/0000FF/FFFFFF/?text=GNBUI"
              />
            </figure>
          </div>
          <div>
            <small>32x32px</small>
            <figure class="figure size-32">
              <img
                src="https://via.placeholder.com/150/0000FF/FFFFFF/?text=GNBUI"
              />
            </figure>
          </div>
          <div>
            <small>48x48px</small>
            <figure class="figure size-48">
              <img
                src="https://via.placeholder.com/150/0000FF/FFFFFF/?text=GNBUI"
              />
            </figure>
          </div>
          <div>
            <small>64x64px</small>
            <figure class="figure size-64">
              <img
                src="https://via.placeholder.com/150/0000FF/FFFFFF/?text=GNBUI"
              />
            </figure>
          </div>
          <div>
            <small>96x96px</small>
            <figure class="figure size-96">
              <img
                src="https://via.placeholder.com/150/0000FF/FFFFFF/?text=GNBUI"
              />
            </figure>
          </div>
          <div>
            <small>128x128px</small>
            <figure class="figure size-128">
              <img
                src="https://via.placeholder.com/150/0000FF/FFFFFF/?text=GNBUI"
              />
            </figure>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<figure class="figure size-16">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-24">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-32">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-48">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-64">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-96">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-128">
    <img src="https://via.placeholder.com/128" />
</figure>
'
          />
        </div>
      </div>
    </section>

    <section class="section" id="ratios">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Ratios</h2>
          <p class="fs-6">
            For using responsive images you can use
            <code class="text-danger">.ratio-{number}</code> class. There are 16
            built-in ratios for images. <br />
            These are:
          </p>
          <ul>
            <li><code class="text-danger">.size-1by1</code>,</li>
            <li><code class="text-danger">.size-5by4</code>,</li>
            <li><code class="text-danger">.size-4by3</code>,</li>
            <li><code class="text-danger">.size-3by2</code>,</li>
            <li><code class="text-danger">.size-5by3</code>,</li>
            <li><code class="text-danger">.size-16by9</code>,</li>
            <li><code class="text-danger">.size-2by1</code>,</li>
            <li><code class="text-danger">.size-3by1</code>,</li>
            <li><code class="text-danger">.size-4by5</code>,</li>
            <li><code class="text-danger">.size-3by4</code>,</li>
            <li><code class="text-danger">.size-2by3</code>,</li>
            <li><code class="text-danger">.size-3by5</code>,</li>
            <li><code class="text-danger">.size-9by16</code>,</li>
            <li><code class="text-danger">.size-1by2</code>,</li>
            <li><code class="text-danger">.size-1by3</code></li>
          </ul>
        </div>

        <div class="mt-25 flex align-baseline justify-around wrap">
          <div style="width: 10rem">
            1by1:
            <figure class="figure size-1by1">
              <img src="https://via.placeholder.com/128" alt="" />
            </figure>
          </div>
          <div style="width: 10rem">
            5by4:
            <figure class="figure size-5by4">
              <img src="https://via.placeholder.com/128" alt="" />
            </figure>
          </div>
          <div style="width: 10rem">
            4by3:
            <figure class="figure size-4by3">
              <img src="https://via.placeholder.com/128" alt="" />
            </figure>
          </div>
          <div style="width: 10rem">
            3by2:
            <figure class="figure size-3by2">
              <img src="https://via.placeholder.com/128" alt="" />
            </figure>
          </div>
          <div style="width: 10rem">
            5by3:
            <figure class="figure size-5by3">
              <img src="https://via.placeholder.com/128" alt="" />
            </figure>
          </div>
          <div style="width: 10rem">
            16by9:
            <figure class="figure size-16by9">
              <img src="https://via.placeholder.com/128" alt="" />
            </figure>
          </div>
          <div style="width: 10rem">
            2by1:
            <figure class="figure size-2by1">
              <img src="https://via.placeholder.com/128" alt="" />
            </figure>
          </div>
          <div style="width: 10rem">
            3by1:
            <figure class="figure size-3by1">
              <img src="https://via.placeholder.com/128" alt="" />
            </figure>
          </div>
          <div style="width: 10rem">
            4by5:
            <figure class="figure size-4by5">
              <img src="https://via.placeholder.com/128" alt="" />
            </figure>
          </div>
          <div style="width: 10rem">
            3by4:
            <figure class="figure size-3by4">
              <img src="https://via.placeholder.com/128" alt="" />
            </figure>
          </div>
          <div style="width: 10rem">
            2by3:
            <figure class="figure size-2by3">
              <img src="https://via.placeholder.com/128" alt="" />
            </figure>
          </div>
          <div style="width: 10rem">
            3by5:
            <figure class="figure size-3by5">
              <img src="https://via.placeholder.com/128" alt="" />
            </figure>
          </div>
          <div style="width: 10rem">
            9by16:
            <figure class="figure size-9by16">
              <img src="https://via.placeholder.com/128" alt="" />
            </figure>
          </div>
          <div style="width: 10rem">
            1by2:
            <figure class="figure size-1by2">
              <img src="https://via.placeholder.com/128" alt="" />
            </figure>
          </div>
          <div style="width: 10rem">
            1by3:
            <figure class="figure size-1by3">
              <img src="https://via.placeholder.com/128" alt="" />
            </figure>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<figure class="figure size-1by1">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-5by4">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-4by3">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-3by2">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-5by3">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-16by9">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-2by1">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-3by1">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-4by5">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-3by4">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-2by3">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-3by5">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-9by16">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-1by2">
    <img src="https://via.placeholder.com/128" />
</figure>

<figure class="figure size-1by3">
    <img src="https://via.placeholder.com/128" />
</figure>
'
          />
        </div>
      </div>
    </section>

    <section class="section" id="rounded">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Rounded</h2>
          <p class="fs-6">
            If you want to add rounded corners to an image, you can use the
            <code class="text-danger">.rounded</code> class or if you want your
            images to be circle you can use the
            <code class="text-danger">.circle</code> class.
          </p>
        </div>

        <div class="mt-25 flex align-baseline justify-around">
          <figure class="figure">
            <img
              class="rounded"
              src="https://via.placeholder.com/128?text=rounded"
              alt=""
            />
          </figure>
          <figure class="figure">
            <img
              class="circle"
              src="https://via.placeholder.com/128?text=circle"
              alt=""
            />
          </figure>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<figure class="figure rounded">
    <img src="https://via.placeholder.com/128?text=rounded" />
</figure>

<figure class="figure circle">
    <img src="https://via.placeholder.com/128?text=circle" />
</figure>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="ratios-with-elements">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Ratios with Elements</h2>
          <p class="fs-6">
            You can apply a specific ratio on any element, just add the
            <code class="text-danger">.has-ratio</code> class to a element for
            specific ratio. If you resize your screen you will notice that the
            ratio will be kept same.
          </p>
        </div>

        <div class="mt-25">
          <figure class="figure size-16by9">
            <iframe
              class="has-ratio"
              src="https://www.youtube.com/embed/YE7VzlLtp-4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </figure>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<figure class="figure size-16by9">
  <iframe
    class="has-ratio"
    src="https://www.youtube.com/embed/YE7VzlLtp-4"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    frameborder="0"
  ></iframe>
</figure>'
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

        <div class="has-table">
          <table class="table dark bordered striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Default Value</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr>
                <td>$sizes</td>
                <td>(16, 24, 32, 48, 64, 96, 128)</td>
              </tr>
              <tr>
                <td>$ratios</td>
                <td>
                  ( "1by1": 100%, "5by4": 80%, "4by3": 75%, "3by2": 66.6666%,
                  "5by3": 60%, "16by9": 56.25%, "2by1": 50%, "3by1": 33.3333%,
                  "4by5": 125%, "3by4": 133.3333%, "2by3": 150%, "3by5":
                  166.6666%, "9by16": 177.7777%, "1by2": 200%, "1by3": 300%, )
                </td>
              </tr>
              <tr>
                <td>$rounded-image-border-radius</td>
                <td>12px</td>
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
