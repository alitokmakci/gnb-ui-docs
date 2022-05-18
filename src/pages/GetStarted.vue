<template>
  <Layout>
    <template #navigation>
      <div class="card">
        <h5 class="text-right pr-30 mb-10">On this page:</h5>
        <ul>
          <li>
            <a class="link dark" href="#quick-start"> Quick Start </a>
          </li>
          <li>
            <a class="link dark" href="#requirements"> Requirements </a>
          </li>
          <li>
            <a class="link dark" href="#suggestions"> Fonts and Icons </a>
          </li>
          <li>
            <a class="link dark" href="#starting-template">
              Starting Template
            </a>
          </li>
        </ul>
      </div>
    </template>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Get Started</h1>
        <p class="subtitle">
          Start a project with <span class="fw-600">GNB UI</span>.
        </p>
      </div>
    </section>

    <section class="section" id="quick-start" ref="quick-start">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Quick Start</h2>
          <p class="fs-6">
            To use GNB UI's beautiful looking components, just add a single css
            file to your project! You can import the css file via a cdn or
            download it by clicking the button below.
          </p>
        </div>

        <div class="mt-75">
          <h4 class="mb-10">
            <span class="mr-10">#</span>Option 1: (Easisest)
          </h4>

          <p class="fs-6">You can import css file via cdn:</p>
          <small class="text-danger">
            * With this method you will have minimal customization option.
          </small>
          <highlightjs
            autodetect
            :code="`<link rel=&quot;stylesheet&quot; href=&quot;${$store.state.cdn_link}&quot; />`"
          />
        </div>

        <div class="mt-75">
          <h4 class="mb-10">
            <span class="mr-10">#</span>Option 2: (Recommended)
          </h4>

          <p class="fs-6">
            Install GNB UI Package via <b>npm</b> or <b>yarn</b>:
          </p>
          <highlightjs
            autodetect
            code="npm install gnb-ui
  or
yarn add gnb-ui"
          />
          <p class="fs-6">Import scss file to your main scss file</p>
          <highlightjs
            language="scss"
            code='@import "../../node_modules/gnb-ui/src/index.scss";'
          />
        </div>

        <div class="mt-75">
          <h4 class="mb-10"><span class="mr-10">#</span>Option 3:</h4>

          <p class="fs-6">You can download and import css file:</p>
          <small class="text-danger">
            * With this method you will have minimal customization option.
          </small>
          <div class="mt-15">
            <a :href="$store.state.download_link" download>
              <button class="btn primary flat lg">Download</button>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="requirements" ref="requirements">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Requirements</h2>
          <p class="fs-6">
            For using responsive features of GNB UI, you need to add meta tag to
            your webpage.
          </p>
        </div>

        <div class="mt-75">
          <p class="fs-6">First step is HTML5 doctype:</p>
          <highlightjs autodetect code="<!DOCTYPE html>" />

          <p class="fs-6 mt-50">Second step is responsive viewport meta tag:</p>
          <highlightjs
            autodetect
            code='<meta name="viewport" content="width=device-width, initial-scale=1">'
          />
        </div>
      </div>
    </section>

    <section class="section" id="suggestions" ref="suggestions">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Fonts and Icons</h2>
          <p class="fs-6">
            To create beautiful looking webpages we suggest you to use following
            fonts and icons.
          </p>
        </div>

        <div class="mt-75">
          <p class="fs-6">For Fonts (Poppins):</p>
          <highlightjs
            autodetect
            code='<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />'
          />
          <small
            ><a
              href="https://fonts.google.com/specimen/Poppins"
              target="_blank"
              class="link primary"
              >Checkout Google Fonts</a
            ></small
          >

          <p class="fs-6 mt-50">For Icons (RemixIcon):</p>
          <highlightjs
            autodetect
            code='<link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet" />'
          />
          <small
            ><a
              href="https://remixicon.com/"
              target="_blank"
              class="link primary"
              >Checkout Remix Icon</a
            ></small
          >
        </div>
      </div>
    </section>

    <section class="section" id="starting-template" ref="starting-template">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Starting Template</h2>
          <p class="fs-6">
            To start a project with <b>GNB UI</b> right now, you can copy this
            HTML codes and paste in a new HTML file.
          </p>
        </div>

        <div class="mt-30">
          <highlightjs
            autodetect
            :code="`<!DOCTYPE html>
<html lang=&quot;en&quot;>
  <head>
    <meta charset=&quot;UTF-8&quot; />
    <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;>
    <title>GNB UI</title>
    <link rel=&quot;stylesheet&quot; href=&quot;${$store.state.cdn_link}&quot; />
  </head>
  <body>
    <div class=&quot;hero lg&quot;>
      <div class=&quot;hero-body&quot;>
        <h1>Welcome to GNB UI</h1>
        <p>We love to create beauty</p>
      </div>
    </div>
  </body>
</html>
`"
          />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from "../layout/Layout.vue";
</script>
