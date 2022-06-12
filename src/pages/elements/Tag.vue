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
            <a class="link dark" href="#colors"> Colors </a>
          </li>
          <li>
            <a class="link dark" href="#flat"> Flat </a>
          </li>
          <li>
            <a class="link dark" href="#close"> Close Button </a>
          </li>
          <li>
            <a class="link dark" href="#grouping"> Grouping </a>
          </li>
          <li>
            <a class="link dark" href="#sizing"> Sizing </a>
          </li>
          <li>
            <a class="link dark" href="#variables">Variables</a>
          </li>
        </ul>
      </div>
    </template>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Tag</h1>
        <p class="subtitle">
          <b>GNB UI</b> provides a simple, flexible and good looking tag
          element.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">To Import Tables Separately:</h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/elements/tag";'
        />
      </div>
    </section>

    <section class="section" id="default">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Default Tag</h2>
          <p class="fs-6">
            Default tag is simple inline element with default white color.
          </p>
        </div>

        <div class="text-center mt-25">
          <span class="tag">Default Tag</span>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs autodetect code='<span class="tag">Default Tag</span>' />
        </div>
      </div>
    </section>

    <section class="section" id="colors">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Colors</h2>
          <p class="fs-6">
            You can use any color you want with one of the color classes with
            <code class="text-danger">.tag</code> element.
          </p>
        </div>

        <div class="text-center mt-25">
          <span class="tag primary mr-10">Primary Tag</span>
          <span class="tag secondary mr-10">Secondary Tag</span>
          <span class="tag success mr-10">Success Tag</span>
          <span class="tag info mr-10">Info Tag</span>
          <span class="tag warning mr-10">Warning Tag</span>
          <span class="tag danger mr-10">Danger Tag</span>
          <span class="tag dark">Dark Tag</span>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<span class="tag primary">Primary Tag</span>
<span class="tag secondary">Secondary Tag</span>
<span class="tag success">Success Tag</span>
<span class="tag info">Info Tag</span>
<span class="tag warning">Warning Tag</span>
<span class="tag danger">Danger Tag</span>
<span class="tag dark">Dark Tag</span>'
          />
        </div>
      </div>
    </section>
    <section class="section" id="flat">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Flat Colors</h2>
          <p class="fs-6">
            To use flat colors you can use
            <code class="text-danger">.flat</code> class with the color class to
            the <code class="text-danger">.tag</code> element.
          </p>
        </div>

        <div class="text-center mt-25">
          <span class="tag primary flat mr-10">Primary Tag</span>
          <span class="tag secondary flat mr-10">Secondary Tag</span>
          <span class="tag success flat mr-10">Success Tag</span>
          <span class="tag info flat mr-10">Info Tag</span>
          <span class="tag warning flat mr-10">Warning Tag</span>
          <span class="tag danger flat mr-10">Danger Tag</span>
          <span class="tag dark flat">Dark Tag</span>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<span class="tag primary flat">Primary Tag</span>
<span class="tag secondary flat">Secondary Tag</span>
<span class="tag success flat">Success Tag</span>
<span class="tag info flat">Info Tag</span>
<span class="tag warning flat">Warning Tag</span>
<span class="tag danger flat">Danger Tag</span>
<span class="tag dark flat">Dark Tag</span>'
          />
        </div>
      </div>
    </section>
    <section class="section" id="close">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Close Button</h2>
          <p class="fs-6">
            Adding close button to tag is very simple just add a button with
            <code class="text-danger">.close</code> class inside the tag
            element. <br /><br />
            <small
              ><span class="text-danger">*</span> Do not forget that
              <b>GNB UI</b> does not implement any javascript code. If you want
              that the tag is removed when click on close button you can add
              some javascript code. To see an example of this, check next
              section.
            </small>
          </p>
        </div>

        <div class="text-center mt-25">
          <span class="tag primary mr-10">
            Primary Tag
            <button class="close"></button>
          </span>
          <span class="tag secondary flat mr-10">
            Secondary Tag
            <button class="close"></button>
          </span>
          <span class="tag success flat mr-10">
            Success Tag
            <button class="close"></button>
          </span>

          <span class="tag info flat mr-10">
            Info Tag
            <button class="close"></button>
          </span>
          <span class="tag warning flat mr-10">
            Warning Tag
            <button class="close"></button>
          </span>
          <span class="tag danger flat mr-10">
            Danger Tag
            <button class="close"></button>
          </span>
          <span class="tag dark flat">
            Dark Tag
            <button class="close"></button>
          </span>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<span class="tag primary flat">
    Primary Tag
    <button class="close"></button>
</span>

<span class="tag secondary flat">
    Secondary Tag
    <button class="close"></button>
</span>

<span class="tag success flat">
    Success Tag
    <button class="close"></button>
</span>

<span class="tag info flat">
    Info Tag
    <button class="close"></button>
</span>

<span class="tag warning flat">
    Warning Tag
    <button class="close"></button>
</span>

<span class="tag danger flat">
    Danger Tag
    <button class="close"></button>
</span>

<span class="tag dark flat">
    Dark Tag
    <button class="close"></button>
</span>'
          />
        </div>
      </div>
    </section>
    <section class="section" id="close_example">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Close Button Javascript Example</h2>
        </div>

        <div class="text-center mt-25">
          <span v-if="!tag1closed" class="tag primary mr-10">
            Primary Tag
            <button @click="close(1)" class="close"></button>
          </span>
          <span v-if="!tag2closed" class="tag secondary mr-10">
            Secondary Tag
            <button @click="close(2)" class="close"></button>
          </span>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<span class="tag primary flat">
    Primary Tag
    <button class="close"></button>
</span>

<span class="tag secondary">
    Secondary Tag
    <button class="close"></button>
</span>

//Javascript Code
<script>
// Select all the close buttons inside tags
let closeButtonsForTags = document.querySelectorAll(".tag .close");

closeButtonsForTags.forEach(btn => {
    // add event listener for each close button
    btn.addEventListener("click", function() {
        // Remove the tag on click
        btn.parentElement.remove();
    });
});
</script>'
          />
        </div>
      </div>
    </section>
    <section class="section" id="grouping">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Grouping</h2>
          <p class="fs-6">
            You can easily group tags together by wrapping tags in a
            <code class="text-danger">&lt;div&gt;</code> with the
            <code class="text-danger">.tag-group</code> class.
            <code class="text-danger">.tag-group</code> is an
            <code class="text-danger">inline</code> wrapper as like as
            <code class="text-danger">.tag</code> elements.
          </p>
        </div>

        <div class="text-center mt-25">
          <div class="tag-group mr-10">
            <span class="tag primary"> Primary Tag </span>
            <span class="tag secondary"> Secondary Tag </span>
            <span class="tag success"> Success Tag </span>
          </div>
          <div class="tag-group">
            <span class="tag dark"> build: </span>
            <span class="tag success"> success </span>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='
<div class="tag-group">
    <span class="tag primary"> Primary Tag </span>
    <span class="tag secondary"> Secondary Tag </span>
    <span class="tag success"> Success Tag </span>
</div>

<div class="tag-group">
    <span class="tag secondary"> Secondary Tag </span>
    <span class="tag info"> Info Tag </span>
</div>'
          />
        </div>
      </div>
    </section>
    <section class="section" id="sizing">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Sizing</h2>
          <p class="fs-6">
            We have 3 different sizes for tag elements. When you need a bigger
            tags for some reason, you can use one of the following classes to
            change the size of the tag:
            <br />
            <code class="text-danger">.lg</code><br />
            <code class="text-danger">.xl</code>
          </p>
        </div>

        <div class="text-center mt-25">
          <span class="tag primary mr-10"> Normal Tag </span>
          <span class="tag secondary lg mr-10"> Large Tag </span>
          <span class="tag success xl"> XLarge Tag </span>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='
<span class="tag primary"> Normal Tag </span>
<span class="tag secondary lg"> Large Tag </span>
<span class="tag success xl"> XLarge Tag </span>'
          />
        </div>
      </div>
    </section>
    <section class="section" id="variables">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Variables</h2>
          <p class="fs-6">
            To customize the tag element you can change the variables listed
            below.
          </p>
        </div>

        <div class="has-table">
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
                <td>
                  $tag-font-color <span class="tag success">since: 0.2.0</span>
                </td>
                <td>$font-color</td>
                <td>rgba(44, 62, 80)</td>
              </tr>
              <tr>
                <td>
                  $tag-padding <span class="tag success">since: 0.2.0</span>
                </td>
                <td>4px 7px</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  $tag-border-radius
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>7px</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  $tag-font-weight <span class="tag success">since: 0.2.0</span>
                </td>
                <td>700</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  $tag-font-size <span class="tag success">since: 0.2.0</span>
                </td>
                <td>0.6rem</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  $tag-background-color
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>tint(white, 85%)</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  $tag-lg-font-size
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>0.7rem</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  $tag-lg-border-radius
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>8px</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  $tag-lg-padding <span class="tag success">since: 0.2.0</span>
                </td>
                <td>px 9px</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  $tag-xl-font-size
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>0.8rem</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  $tag-xl-border-radius
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>9px</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  $tag-xl-padding <span class="tag success">since: 0.2.0</span>
                </td>
                <td>8px 11px</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  $tag-close-button-height
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>12px</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  $tag-close-button-width
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>$tag-close-button-height</td>
                <td>12px</td>
              </tr>
              <tr>
                <td>
                  $tag-close-button-margin
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>4px</td>
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
import { ref } from "vue";

const tag1closed = ref(false);
const tag2closed = ref(false);

const close = (number) => {
  if (number === 1) {
    tag1closed.value = true;
  } else if (number === 2) {
    tag2closed.value = true;
  }
};
</script>
