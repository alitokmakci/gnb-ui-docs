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
            <a class="link dark" href="#hover-color"> Color on Hover </a>
          </li>
          <li>
            <a class="link dark" href="#variables"> Variables </a>
          </li>
        </ul>
      </div>
    </template>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Checkbox</h1>
        <p class="subtitle"><b>GNB UI</b> has colorful checkbox elements.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">To Import Checkbox Separately:</h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/form/checkbox";'
        />
      </div>
    </section>

    <section class="section" id="default">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Default Checkbox</h2>
          <p class="fs-6">
            The default select component is a simple select element with a
            <code class="text-danger">.select</code> class.
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
            <div class="form-element horizontal">
              <div class="checkbox-group">
                <input id="check_1" type="checkbox" class="checkbox" />
                <label class="label" for="check_1">Default Checkbox</label>
              </div>
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
            You can add a color to the checkbox by adding the one of the color
            classes to the <code class="text-danger">.checkbox</code> element.
            Just click the select and see the change!
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
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_primary"
                  class="checkbox primary"
                />
                <label class="label" for="check_primary"
                  >Primary Checkbox</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_secondary"
                  class="checkbox secondary"
                />
                <label class="label" for="check_secondary"
                  >Secondary Checkbox</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_success"
                  class="checkbox success"
                />
                <label class="label" for="check_success"
                  >Success Checkbox</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input type="checkbox" id="check_info" class="checkbox info" />
                <label class="label" for="check_info">Info Checkbox</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_warning"
                  class="checkbox warning"
                />
                <label class="label" for="check_warning"
                  >Warning Checkbox</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_danger"
                  class="checkbox danger"
                />
                <label class="label" for="check_danger">Danger Checkbox</label>
              </div>
            </div>
            <div class="form-element horizontal">
              <div class="checkbox-group">
                <input type="checkbox" id="check_dark" class="checkbox dark" />
                <label class="label" for="check_dark">Dark Checkbox</label>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_primary" class="checkbox primary" />
    <label class="label" for="check_primary">Primary Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_secondary" class="checkbox secondary" />
    <label class="label" for="check_secondary">Secondary Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_success" class="checkbox success" />
    <label class="label" for="check_success">Success Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_info" class="checkbox info" />
    <label class="label" for="check_info">Info Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_warning" class="checkbox warning" />
    <label class="label" for="check_warning">Warning Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_danger" class="checkbox danger" />
    <label class="label" for="check_danger">Danger Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_dark" class="checkbox dark" />
    <label class="label" for="check_dark">Dark Checkbox</label>
  </div>
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
            To use flat colors for select add
            <code class="text-danger">.flat</code> with one of the colors.
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
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_primary"
                  class="checkbox primary flat"
                />
                <label class="label" for="check_primary"
                  >Primary Checkbox</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_secondary"
                  class="checkbox secondary flat"
                />
                <label class="label" for="check_secondary"
                  >Secondary Checkbox</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_success"
                  class="checkbox success flat"
                />
                <label class="label" for="check_success"
                  >Success Checkbox</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_info"
                  class="checkbox info flat"
                />
                <label class="label" for="check_info">Info Checkbox</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_warning"
                  class="checkbox warning flat"
                />
                <label class="label" for="check_warning"
                  >Warning Checkbox</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_danger"
                  class="checkbox danger flat"
                />
                <label class="label" for="check_danger">Danger Checkbox</label>
              </div>
            </div>
            <div class="form-element horizontal">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_dark"
                  class="checkbox dark flat"
                />
                <label class="label" for="check_dark">Dark Checkbox</label>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_primary_flat" class="checkbox primary flat" />
    <label class="label" for="check_primary_flat">Primary Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_secondary_flat" class="checkbox secondary flat" />
    <label class="label" for="check_secondary_flat">Secondary Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_success_flat" class="checkbox success flat" />
    <label class="label" for="check_success_flat">Success Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_info_flat" class="checkbox info flat" />
    <label class="label" for="check_info_flat">Info Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_warning_flat" class="checkbox warning flat" />
    <label class="label" for="check_warning_flat">Warning Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_danger_flat" class="checkbox danger flat" />
    <label class="label" for="check_danger_flat">Danger Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_dark_flat" class="checkbox dark flat" />
    <label class="label" for="check_dark_flat">Dark Checkbox</label>
  </div>
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
            To show your checkboxes with borders add
            <code class="text-danger">.bordered</code> class to the
            <code class="text-danger">.checkbox</code> element.
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
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_primary"
                  class="checkbox primary bordered"
                />
                <label class="label" for="check_primary"
                  >Primary Checkbox</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_secondary"
                  class="checkbox secondary bordered"
                />
                <label class="label" for="check_secondary"
                  >Secondary Checkbox</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_success"
                  class="checkbox success bordered"
                />
                <label class="label" for="check_success"
                  >Success Checkbox</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_info"
                  class="checkbox info bordered"
                />
                <label class="label" for="check_info">Info Checkbox</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_warning"
                  class="checkbox warning bordered"
                />
                <label class="label" for="check_warning"
                  >Warning Checkbox</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_danger"
                  class="checkbox danger bordered"
                />
                <label class="label" for="check_danger">Danger Checkbox</label>
              </div>
            </div>
            <div class="form-element horizontal">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_dark"
                  class="checkbox dark bordered"
                />
                <label class="label" for="check_dark">Dark Checkbox</label>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_primary_bordered" class="checkbox primary bordered" />
    <label class="label" for="check_primary_bordered">Primary Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_secondary_bordered" class="checkbox secondary bordered" />
    <label class="label" for="check_secondary_bordered">Secondary Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_success_bordered" class="checkbox success bordered" />
    <label class="label" for="check_success_bordered">Success Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_info_bordered" class="checkbox info bordered" />
    <label class="label" for="check_info_bordered">Info Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_warning_bordered" class="checkbox warning bordered" />
    <label class="label" for="check_warning_bordered">Warning Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_danger_bordered" class="checkbox danger bordered" />
    <label class="label" for="check_danger_bordered">Danger Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_dark_bordered" class="checkbox dark bordered" />
    <label class="label" for="check_dark_bordered">Dark Checkbox</label>
  </div>
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="hover-color">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Color on Hover</h2>
          <p class="fs-6">
            To show your checkboxes color on hover add
            <code class="text-danger">.hover-color</code> class to the
            <code class="text-danger">.checkbox</code> element with the color
            class.
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
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_primary"
                  class="checkbox primary hover-color"
                />
                <label class="label" for="check_primary"
                  >Primary Checkbox</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_secondary"
                  class="checkbox secondary hover-color"
                />
                <label class="label" for="check_secondary"
                  >Secondary Checkbox</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_success"
                  class="checkbox success hover-color"
                />
                <label class="label" for="check_success"
                  >Success Checkbox</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_info"
                  class="checkbox info hover-color"
                />
                <label class="label" for="check_info">Info Checkbox</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_warning"
                  class="checkbox warning hover-color"
                />
                <label class="label" for="check_warning"
                  >Warning Checkbox</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_danger"
                  class="checkbox danger hover-color"
                />
                <label class="label" for="check_danger">Danger Checkbox</label>
              </div>
            </div>
            <div class="form-element horizontal">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="check_dark"
                  class="checkbox dark hover-color"
                />
                <label class="label" for="check_dark">Dark Checkbox</label>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_primary_hovered" class="checkbox primary color-hover" />
    <label class="label" for="check_primary_hovered">Primary Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_secondary_hovered" class="checkbox secondary color-hover" />
    <label class="label" for="check_secondary_hovered">Secondary Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_success_hovered" class="checkbox success color-hover" />
    <label class="label" for="check_success_hovered">Success Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_info_hovered" class="checkbox info color-hover" />
    <label class="label" for="check_info_hovered">Info Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_warning_hovered" class="checkbox warning color-hover" />
    <label class="label" for="check_warning_hovered">Warning Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_danger_hovered" class="checkbox danger color-hover" />
    <label class="label" for="check_danger_hovered">Danger Checkbox</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="checkbox-group">
    <input type="checkbox" id="check_dark_hovered" class="checkbox dark color-hover" />
    <label class="label" for="check_dark_hovered">Dark Checkbox</label>
  </div>
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
            To customize the checkbox component you change the variables listed
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
    name: "$checkbox-width  <span class='tag success'>since 0.2.1</span>",
    value: "20px",
    computed: "",
  },
  {
    name: "$checkbox-height  <span class='tag success'>since 0.2.1</span>",
    value: "$checkbox-width",
    computed: "20px",
  },
  {
    name: "$checkbox-border-width  <span class='tag success'>since 0.2.1</span>",
    value: "2px",
    computed: "",
  },
  {
    name: "$checkbox-border-color  <span class='tag success'>since 0.2.1</span>",
    value: "$gray-1",
    computed: "rgb(230, 233, 234)",
  },
  {
    name: "$checkbox-border-radius  <span class='tag success'>since 0.2.1</span>",
    value: "32%",
    computed: "",
  },
  {
    name: "$checkbox-label-margin  <span class='tag success'>since 0.2.1</span>",
    value: "6px",
    computed: "",
  },
];
</script>
