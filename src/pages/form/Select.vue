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
        <h1 class="title-5 fw-500">Select</h1>
        <p class="subtitle"><b>GNB UI</b> has graceful select elements.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">To Import Selects Separately:</h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/form/select";'
        />
      </div>
    </section>

    <section class="section" id="default">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Default Select</h2>
          <p class="fs-6">
            The default select component is a simple select element with a
            <code class="text-danger">.select</code> class.
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex justify-center border-radius-2">
            <div class="form-element">
              <select class="select">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
  <select class="select">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
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
            You can add a color to the select by adding the one of the color
            classes to the <code class="text-danger">select</code> element. Just
            click the select and see the change!
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex justify-center border-radius-2 wrap">
            <div class="form-element mr-10">
              <label class="label">Primary Select:</label>
              <select class="select primary">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Secondary Select:</label>
              <select class="select secondary">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Success Select:</label>
              <select class="select success">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Info Select:</label>
              <select class="select info">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Warning Select:</label>
              <select class="select warning">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Danger Select:</label>
              <select class="select danger">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element">
              <label class="label">Dark Select:</label>
              <select class="select dark">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
  <label class="label">Primary Select:</label>
  <select class="select primary">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Secondary Select:</label>
  <select class="select secondary">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Success Select:</label>
  <select class="select success">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Info Select:</label>
  <select class="select info">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Warning Select:</label>
  <select class="select warning">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Danger Select:</label>
  <select class="select danger">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Dark Select:</label>
  <select class="select dark">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
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
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex justify-center border-radius-2 wrap">
            <div class="form-element mr-10">
              <label class="label">Primary Select:</label>
              <select class="select primary flat">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Secondary Select:</label>
              <select class="select secondary flat">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Success Select:</label>
              <select class="select success flat">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Info Select:</label>
              <select class="select info flat">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Warning Select:</label>
              <select class="select warning flat">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Danger Select:</label>
              <select class="select danger flat">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element">
              <label class="label">Dark Select:</label>
              <select class="select dark flat">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
  <label class="label">Primary Select:</label>
  <select class="select primary flat">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Secondary Select:</label>
  <select class="select secondary flat">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Success Select:</label>
  <select class="select success flat">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Info Select:</label>
  <select class="select info flat">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Warning Select:</label>
  <select class="select warning flat">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Danger Select:</label>
  <select class="select danger flat">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Dark Select:</label>
  <select class="select dark flat">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
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
            To show bottom border always, add
            <code class="text-danger">.bordered</code> with
            <code class="text-danger">.select</code> class and color class. You
            can use this feature for select state or for select with error.
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex justify-center border-radius-2 wrap">
            <div class="form-element mr-10">
              <label class="label">Primary Select:</label>
              <select class="select primary bordered">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Secondary Select:</label>
              <select class="select secondary bordered">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Success Select:</label>
              <select class="select success bordered">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Info Select:</label>
              <select class="select info bordered">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Warning Select:</label>
              <select class="select warning bordered">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Danger Select:</label>
              <select class="select danger bordered">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element">
              <label class="label">Dark Select:</label>
              <select class="select dark bordered">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
  <label class="label">Primary Select:</label>
  <select class="select primary bordered">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Secondary Select:</label>
  <select class="select secondary bordered">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Success Select:</label>
  <select class="select success bordered">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Info Select:</label>
  <select class="select info bordered">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Warning Select:</label>
  <select class="select warning bordered">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Danger Select:</label>
  <select class="select danger bordered">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Dark Select:</label>
  <select class="select dark bordered">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
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
            To show your select as a square shape add
            <code class="text-danger">.square</code> to the
            <code class="text-danger">.select</code> element.
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex justify-center border-radius-2 wrap">
            <div class="form-element mr-10">
              <label class="label">Primary Select:</label>
              <select class="select primary square">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Secondary Select:</label>
              <select class="select secondary square">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Success Select:</label>
              <select class="select success square">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Info Select:</label>
              <select class="select info square">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Warning Select:</label>
              <select class="select warning square">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element mr-10">
              <label class="label">Danger Select:</label>
              <select class="select danger square">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
            <div class="form-element">
              <label class="label">Dark Select:</label>
              <select class="select dark square">
                <option value="1">Lorem.</option>
                <option value="2">Dolor.</option>
                <option value="3">Ipsum.</option>
              </select>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
  <label class="label">Primary Select:</label>
  <select class="select primary square">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Secondary Select:</label>
  <select class="select secondary square">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Success Select:</label>
  <select class="select success square">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Info Select:</label>
  <select class="select info square">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Warning Select:</label>
  <select class="select warning square">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Danger Select:</label>
  <select class="select danger square">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
</div>

<div class="form-element">
  <label class="label">Dark Select:</label>
  <select class="select dark square">
    <option value="1">Lorem.</option>
    <option value="2">Dolor.</option>
    <option value="3">Ipsum.</option>
  </select>
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
            To customize the select component you can change the variables
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
    name: "$select-padding  <span class='tag success'>since 0.2.1</span>",
    value: "7px 30px 7px 13px",
    computed: "",
  },
  {
    name: "$select-border-radius  <span class='tag success'>since 0.2.1</span>",
    value: "12px",
    computed: "",
  },
  {
    name: "$select-border-width  <span class='tag success'>since 0.2.1</span>",
    value: "2px",
    computed: "",
  },
  {
    name: "$select-min-width  <span class='tag success'>since 0.2.1</span>",
    value: "200px",
    computed: "",
  },
  {
    name: "$select-option-background-color  <span class='tag success'>since 0.2.1</span>",
    value: "$white",
    computed: "rgb(255, 255, 255)",
  },
  {
    name: "$select-option-font-color  <span class='tag success'>since 0.2.1</span>",
    value: "$font-color",
    computed: "rgb(44, 62, 80)",
  },
];
</script>
