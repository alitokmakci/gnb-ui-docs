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
            <a class="link dark" href="#square"> Square </a>
          </li>
          <li>
            <a class="link dark" href="#sizing"> Sizing </a>
          </li>
          <li>
            <a class="link dark" href="#variables"> Variables </a>
          </li>
        </ul>
      </div>
    </template>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Switch</h1>
        <p class="subtitle">
          <b>GNB UI</b> has switch elements based on checkboxes.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">To Import Radio Separately:</h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/form/radio";'
        />
      </div>
    </section>

    <section class="section" id="default">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Default Switch</h2>
          <p class="fs-6">
            The default switch component actually is a simple checkbox. But we
            changed the look and feel of the checkbox to make it look like a
            switch.
          </p>
          <p class="fs-6">
            <span class="text-danger">*</span>Do not forget to add
            <code class="text-danger">id</code> attribute to the
            <code class="text-danger">input</code> element and
            <code class="text-danger">for</code> attribute to the
            <code class="text-danger">label</code> element.
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex justify-center border-radius-2">
            <div class="form-element">
              <input type="checkbox" id="switch" class="switch" />
              <label for="switch"></label>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_1" class="checkbox" />
    <label class="label" for="check_1">Default Checkbox</label>
  </div>
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
            You can add a color to the switch by adding the one of the color
            classes to the <code class="text-danger">.switch</code> element.
            Just click the switch and see the change!
          </p>
          <p class="fs-6">
            <span class="text-danger">*</span>Do not forget to add
            <code class="text-danger">id</code> attribute to the
            <code class="text-danger">input</code> element and
            <code class="text-danger">for</code> attribute to the
            <code class="text-danger">label</code> element.
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex justify-center border-radius-2">
            <div class="form-element mr-10">
              <input
                type="checkbox"
                id="switch-primary"
                class="switch primary"
              />
              <label for="switch-primary"></label>
            </div>
            <div class="form-element mr-10">
              <input
                type="checkbox"
                id="switch-secondary"
                class="switch secondary"
              />
              <label for="switch-secondary"></label>
            </div>
            <div class="form-element mr-10">
              <input
                type="checkbox"
                id="switch-success"
                class="switch success"
              />
              <label for="switch-success"></label>
            </div>
            <div class="form-element mr-10">
              <input type="checkbox" id="switch-info" class="switch info" />
              <label for="switch-info"></label>
            </div>
            <div class="form-element mr-10">
              <input
                type="checkbox"
                id="switch-warning"
                class="switch warning"
              />
              <label for="switch-warning"></label>
            </div>
            <div class="form-element mr-10">
              <input type="checkbox" id="switch-danger" class="switch danger" />
              <label for="switch-danger"></label>
            </div>
            <div class="form-element">
              <input type="checkbox" id="switch-dark" class="switch dark" />
              <label for="switch-dark"></label>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
    <input
      type="checkbox"
      id="switch-primary"
      class="switch primary"
    />
    <label for="switch-primary"></label>
</div>

<div class="form-element">
    <input
      type="checkbox"
      id="switch-secondary"
      class="switch secondary"
    />
    <label for="switch-secondary"></label>
</div>

<div class="form-element">
    <input
      type="checkbox"
      id="switch-success"
      class="switch success"
    />
    <label for="switch-success"></label>
</div>

<div class="form-element">
    <input type="checkbox" id="switch-info" class="switch info" />
    <label for="switch-info"></label>
</div>

<div class="form-element">
    <input
      type="checkbox"
      id="switch-warning"
      class="switch warning"
    />
    <label for="switch-warning"></label>
</div>

<div class="form-element">
    <input type="checkbox" id="switch-danger" class="switch danger" />
    <label for="switch-danger"></label>
</div>

<div class="form-element">
    <input type="checkbox" id="switch-dark" class="switch dark" />
    <label for="switch-dark"></label>
  </div>
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
            To show your switch as a square shape add
            <code class="text-danger">.square</code> to the
            <code class="text-danger">.switch</code> element.
          </p>
          <p class="fs-6">
            <span class="text-danger">*</span>Do not forget to add
            <code class="text-danger">id</code> attribute to the
            <code class="text-danger">input</code> element and
            <code class="text-danger">for</code> attribute to the
            <code class="text-danger">label</code> element.
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex justify-center border-radius-2">
            <div class="form-element mr-10">
              <input
                type="checkbox"
                id="switch-primary-square"
                class="switch primary square"
              />
              <label for="switch-primary-square"></label>
            </div>
            <div class="form-element mr-10">
              <input
                type="checkbox"
                id="switch-secondary-square"
                class="switch secondary square"
              />
              <label for="switch-secondary-square"></label>
            </div>
            <div class="form-element mr-10">
              <input
                type="checkbox"
                id="switch-success-square"
                class="switch success square"
              />
              <label for="switch-success-square"></label>
            </div>
            <div class="form-element mr-10">
              <input
                type="checkbox"
                id="switch-info-square"
                class="switch info square"
              />
              <label for="switch-info-square"></label>
            </div>
            <div class="form-element mr-10">
              <input
                type="checkbox"
                id="switch-warning-square"
                class="switch warning square"
              />
              <label for="switch-warning-square"></label>
            </div>
            <div class="form-element mr-10">
              <input
                type="checkbox"
                id="switch-danger-square"
                class="switch danger square"
              />
              <label for="switch-danger-square"></label>
            </div>
            <div class="form-element">
              <input
                type="checkbox"
                id="switch-dark-square"
                class="switch dark square"
              />
              <label for="switch-dark-square"></label>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
    <input
      type="checkbox"
      id="switch-primary-square"
      class="switch primary square"
    />
    <label for="switch-primary-square"></label>
</div>

<div class="form-element">
    <input
      type="checkbox"
      id="switch-secondary-square"
      class="switch secondary square"
    />
    <label for="switch-secondary-square"></label>
</div>

<div class="form-element">
    <input
      type="checkbox"
      id="switch-success-square"
      class="switch success square"
    />
    <label for="switch-success-square"></label>
</div>

<div class="form-element">
    <input type="checkbox" id="switch-info-square" class="switch info square" />
    <label for="switch-info-square"></label>
</div>

<div class="form-element">
    <input
      type="checkbox"
      id="switch-warning-square"
      class="switch warning square"
    />
    <label for="switch-warning-square"></label>
</div>

<div class="form-element">
    <input type="checkbox" id="switch-danger-square" class="switch danger square" />
    <label for="switch-danger-square"></label>
</div>

<div class="form-element">
    <input type="checkbox" id="switch-dark-square" class="switch dark square" />
    <label for="switch-dark-square"></label>
  </div>
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="sizing">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Sizing</h2>
          <p class="fs-6">
            We have 5 size of switches. Theese are: <br />
            <code class="text-danger">.mini</code> <br />
            <code class="text-danger">.sm</code> <br />
            <code class="text-danger">.lg</code> <br />
            <code class="text-danger">.xl</code> <br />
            and default size.
          </p>
          <p class="fs-6">
            <span class="text-danger">*</span>Do not forget to add
            <code class="text-danger">id</code> attribute to the
            <code class="text-danger">input</code> element and
            <code class="text-danger">for</code> attribute to the
            <code class="text-danger">label</code> element.
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex wrap justify-center border-radius-2">
            <div class="form-element mr-30">
              <span>Mini:</span>
              <input
                type="checkbox"
                id="switch-primary-mini"
                class="switch primary mini"
              />
              <label for="switch-primary-mini"></label>
            </div>
            <div class="form-element mr-30">
              <span>Small:</span>
              <input
                type="checkbox"
                id="switch-primary-sm"
                class="switch primary sm"
              />
              <label for="switch-primary-sm"></label>
            </div>
            <div class="form-element mr-30">
              <span>Default:</span>
              <input
                type="checkbox"
                id="switch-primary-default"
                class="switch primary"
              />
              <label for="switch-primary-default"></label>
            </div>
            <div class="form-element mr-30">
              <span>Large:</span>
              <input
                type="checkbox"
                id="switch-primary-lg"
                class="switch primary lg"
              />
              <label for="switch-primary-lg"></label>
            </div>
            <div class="form-element mr-30">
              <span>XLarge:</span>
              <input
                type="checkbox"
                id="switch-primary-xl"
                class="switch primary xl"
              />
              <label for="switch-primary-xl"></label>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
  <span>Mini:</span>
  <input type="checkbox" id="switch-primary-mini" class="switch primary mini">
  <label for="switch-primary-mini"></label>
</div>
<div class="form-element">
  <span>Small:</span>
  <input type="checkbox" id="switch-primary-sm" class="switch primary sm">
  <label for="switch-primary-sm"></label>
</div>
<div class="form-element">
  <span>Default:</span>
  <input type="checkbox" id="switch-primary-default" class="switch primary">
  <label for="switch-primary-default"></label>
</div>
<div class="form-element">
  <span>Large:</span>
  <input type="checkbox" id="switch-primary-lg" class="switch primary lg">
  <label for="switch-primary-lg"></label>
</div>
<div class="form-element">
  <span>XLarge:</span>
  <input type="checkbox" id="switch-primary-xl" class="switch primary xl">
  <label for="switch-primary-xl"></label>
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
            To customize the switch component you can change the variables
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
    name: "$switch-width  <span class='tag success'>since 0.2.1</span>",
    value: "50px",
    computed: "",
  },
  {
    name: "$switch-border-radius  <span class='tag success'>since 0.2.1</span>",
    value: "200px",
    computed: "",
  },
  {
    name: "$switch-indicator-width  <span class='tag success'>since 0.2.1</span>",
    value: "17px",
    computed: "",
  },
  {
    name: "$switch-background-color  <span class='tag success'>since 0.2.1</span>",
    value: "$gray-1",
    computed: "rgb(230, 233, 234)",
  },
  {
    name: "$switch-checked-background-color  <span class='tag success'>since 0.2.1</span>",
    value: "$gray-3",
    computed: "rgb(108, 117, 125)",
  },
  {
    name: "$switch-indicator-color  <span class='tag success'>since 0.2.1</span>",
    value: "$white",
    computed: "rgb(255, 255, 255)",
  },
  {
    name: "$switch-indicator-border-radius  <span class='tag success'>since 0.2.1</span>",
    value: "27px",
    computed: "",
  },
  {
    name: "$mini-switch-width  <span class='tag success'>since 0.2.1</span>",
    value: "30px",
    computed: "",
  },
  {
    name: "$sm-switch-width  <span class='tag success'>since 0.2.1</span>",
    value: "40px",
    computed: "",
  },
  {
    name: "$lg-switch-width  <span class='tag success'>since 0.2.1</span>",
    value: "70px",
    computed: "",
  },
  {
    name: "$xl-switch-width  <span class='tag success'>since 0.2.1</span>",
    value: "80px",
    computed: "",
  },
];
</script>
