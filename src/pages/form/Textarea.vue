<template>
  <Layout>
    <template #navigation>
      <div class="card">
        <h5 class="text-right pr-30 mb-10">On this page:</h5>
        <ul>
          <li>
            <a class="link dark" href="#default"> Default</a>
          </li>
          <li>
            <a class="link dark" href="#colors"> Colors </a>
          </li>
          <li>
            <a class="link dark" href="#flat"> Flat </a>
          </li>
          <li>
            <a class="link dark" href="#bordered"> Bordered </a>
          </li>
          <li>
            <a class="link dark" href="#square"> Square </a>
          </li>
          <li>
            <a class="link dark" href="#variables"> Variables </a>
          </li>
        </ul>
      </div>
    </template>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Textarea</h1>
        <p class="subtitle"><b>GNB UI</b> has exciting textarea components.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">To Import Textarea Separately:</h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/form/textarea";'
        />
      </div>
    </section>

    <section class="section" id="default">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Default Textarea</h2>
          <p class="fs-6">
            The default textarea component is a simple textarea field.
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex justify-center border-radius-2">
            <div class="form-element">
              <textarea
                class="textarea"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
    <textarea
                class="textarea"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="colors">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Colors</h2>
          <p class="fs-6">
            You can add a color to the textarea by adding the one of the color
            classes to the <code class="text-danger">textarea</code> element.
            Just click the textarea and see the change!
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex wrap border-radius-2">
            <div class="form-element mr-10">
              <label class="label">Primary Textarea:</label>
              <textarea
                class="textarea primary"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
            <div class="form-element mr-10">
              <label class="label">Secondary Textarea:</label>
              <textarea
                class="textarea secondary"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
            <div class="form-element mr-10">
              <label class="label">Success Textarea:</label>
              <textarea
                class="textarea success"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
            <div class="form-element mr-10">
              <label class="label">Info Textarea:</label>
              <textarea
                class="textarea info"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
            <div class="form-element mr-10">
              <label class="label">Warning Textarea:</label>
              <textarea
                class="textarea warning"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
            <div class="form-element mr-10">
              <label class="label">Danger Textarea:</label>
              <textarea
                class="textarea danger"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
            <div class="form-element">
              <label class="label">Dark Textarea:</label>
              <textarea
                class="textarea dark"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
  <label class="label">Primary Textarea:</label>
  <textarea
    class="textarea primary"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>

<div class="form-element">
  <label class="label">Secondary Textarea:</label>
  <textarea
    class="textarea secondary"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>

<div class="form-element">
  <label class="label">Success Textarea:</label>
  <textarea
    class="textarea success"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>

<div class="form-element">
  <label class="label">Info Textarea:</label>
  <textarea
    class="textarea info"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>

<div class="form-element">
  <label class="label">Warning Textarea:</label>
  <textarea
    class="textarea warning"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>

<div class="form-element">
  <label class="label">Danger Textarea:</label>
  <textarea
    class="textarea danger"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>

<div class="form-element">
  <label class="label">Dark Textarea:</label>
  <textarea
    class="textarea dark"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="flat">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Flat</h2>
          <p class="fs-6">
            To use flat colors for textarea add
            <code class="text-danger">.flat</code> with
            <code class="text-danger">.textarea</code> and a color class.
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex wrap border-radius-2">
            <div class="form-element mr-10">
              <label class="label">Primary Textarea:</label>
              <textarea
                class="textarea primary flat"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
            <div class="form-element mr-10">
              <label class="label">Secondary Textarea:</label>
              <textarea
                class="textarea secondary flat"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
            <div class="form-element mr-10">
              <label class="label">Success Textarea:</label>
              <textarea
                class="textarea success flat"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
            <div class="form-element mr-10">
              <label class="label">Info Textarea:</label>
              <textarea
                class="textarea info flat"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
            <div class="form-element mr-10">
              <label class="label">Warning Textarea:</label>
              <textarea
                class="textarea warning flat"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
            <div class="form-element mr-10">
              <label class="label">Danger Textarea:</label>
              <textarea
                class="textarea danger flat"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
            <div class="form-element">
              <label class="label">Dark Textarea:</label>
              <textarea
                class="textarea dark flat"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
  <label class="label">Primary Textarea:</label>
  <textarea
    class="textarea primary flat"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>

<div class="form-element">
  <label class="label">Secondary Textarea:</label>
  <textarea
    class="textarea secondary flat"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>

<div class="form-element">
  <label class="label">Success Textarea:</label>
  <textarea
    class="textarea success flat"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>

<div class="form-element">
  <label class="label">Info Textarea:</label>
  <textarea
    class="textarea info flat"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>

<div class="form-element">
  <label class="label">Warning Textarea:</label>
  <textarea
    class="textarea warning flat"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>

<div class="form-element">
  <label class="label">Danger Textarea:</label>
  <textarea
    class="textarea danger flat"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>

<div class="form-element">
  <label class="label">Dark Textarea:</label>
  <textarea
    class="textarea dark flat"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="bordered">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Bordered</h2>
          <p class="fs-6">
            To show bottom border always add
            <code class="text-danger">.bordered</code> with
            <code class="text-danger">.textarea</code> class and color class.
            You can use this feature for textarea state or for textarea with
            error.
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex wrap border-radius-2">
            <div class="form-element mr-10">
              <label class="label">Primary Textarea:</label>
              <textarea
                class="textarea primary bordered"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
            <div class="form-element mr-10">
              <label class="label">Secondary Textarea:</label>
              <textarea
                class="textarea secondary bordered"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
            <div class="form-element mr-10">
              <label class="label">Success Textarea:</label>
              <textarea
                class="textarea success bordered"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
            <div class="form-element mr-10">
              <label class="label">Info Textarea:</label>
              <textarea
                class="textarea info bordered"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
            <div class="form-element mr-10">
              <label class="label">Warning Textarea:</label>
              <textarea
                class="textarea warning bordered"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
            <div class="form-element mr-10">
              <label class="label">Danger Textarea:</label>
              <textarea
                class="textarea danger bordered"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
            <div class="form-element">
              <label class="label">Dark Textarea:</label>
              <textarea
                class="textarea dark bordered"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
  <label class="label">Primary Textarea:</label>
  <textarea
    class="textarea primary bordered"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>

<div class="form-element">
  <label class="label">Secondary Textarea:</label>
  <textarea
    class="textarea secondary bordered"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>

<div class="form-element">
  <label class="label">Success Textarea:</label>
  <textarea
    class="textarea success bordered"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>

<div class="form-element">
  <label class="label">Info Textarea:</label>
  <textarea
    class="textarea info bordered"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>

<div class="form-element">
  <label class="label">Warning Textarea:</label>
  <textarea
    class="textarea warning bordered"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>

<div class="form-element">
  <label class="label">Danger Textarea:</label>
  <textarea
    class="textarea danger bordered"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>

<div class="form-element">
  <label class="label">Dark Textarea:</label>
  <textarea
    class="textarea dark bordered"
    placeholder="Lorem ipsum dolor sit amet."
  ></textarea>
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="square">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Square</h2>
          <p class="fs-6">
            To show your textarea as a square shape add
            <code class="text-danger">.square</code> to the
            <code class="text-danger">.textarea</code> element.
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex justify-center border-radius-2">
            <div class="form-element">
              <label class="label">Danger Square Textarea:</label>
              <textarea
                class="textarea danger bordered square"
                placeholder="Lorem ipsum dolor sit amet."
              ></textarea>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
    <label class="label">Danger Square Textarea:</label>
    <textarea
      class="textarea danger bordered square"
      placeholder="Lorem ipsum dolor sit amet."
    ></textarea>
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="variables">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Variables</h2>
          <p class="fs-6">
            To customize the textarea component you change the variables listed
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
  {
    name: "$textarea-background-color",
    value: "$gray-2",
    computed: "rgb(244, 247, 248)",
  },
  { name: "$textarea-placeholder-opacity", value: "0.4", computed: "" },
  { name: "$textarea-min-width", value: "210px", computed: "" },
  { name: "$textarea-border-radius", value: "12px", computed: "" },
];
</script>
