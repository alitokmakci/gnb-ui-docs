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
            <a class="link dark" href="#label"> Label </a>
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
            <a class="link dark" href="#icon"> Icon </a>
          </li>
          <li>
            <a class="link dark" href="#variables"> Variables </a>
          </li>
        </ul>
      </div>
    </template>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Input</h1>
        <p class="subtitle"><b>GNB UI</b> has exciting input components.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">To Import Inputs Separately:</h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/form/input";'
        />
      </div>
    </section>

    <section class="section" id="default">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Default Input</h2>
          <p class="fs-6">
            The default input component is a simple input field.
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex justify-center border-radius-2">
            <div class="form-element">
              <input type="text" class="input" placeholder="Name" />
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
    <input type="text" class="input" placeholder="Name" />
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="label">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Label</h2>
          <p class="fs-6">
            To add a label to an input, add the
            <code class="text-danger">label</code> element with a
            <code class="text-danger">.label</code> class inside the
            <code class="text-danger">.form-element</code>.
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex justify-center border-radius-2">
            <div class="form-element">
              <label for="input_1" class="label">Default Input</label>
              <input
                type="text"
                class="input"
                id="input_1"
                placeholder="Name"
              />
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
    <input type="text" class="input" placeholder="Name" />
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
            You can add a color to the input by adding the one of the color
            classes to the <code class="text-danger">input</code> element. Just
            click the input and see the change!
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex wrap border-radius-2">
            <div class="form-element mr-10">
              <label class="label">Primary Input:</label>
              <input type="text" class="input primary" placeholder="Name" />
            </div>
            <div class="form-element mr-10">
              <label class="label">Secondary Input:</label>
              <input type="text" class="input secondary" placeholder="Name" />
            </div>
            <div class="form-element mr-10">
              <label class="label">Success Input:</label>
              <input type="text" class="input success" placeholder="Name" />
            </div>
            <div class="form-element mr-10">
              <label class="label">Info Input:</label>
              <input type="text" class="input info" placeholder="Name" />
            </div>
            <div class="form-element mr-10">
              <label class="label">Warning Input:</label>
              <input type="text" class="input warning" placeholder="Name" />
            </div>
            <div class="form-element mr-10">
              <label class="label">Danger Input:</label>
              <input type="text" class="input danger" placeholder="Name" />
            </div>
            <div class="form-element">
              <label class="label">Dark Input:</label>
              <input type="text" class="input dark" placeholder="Name" />
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
    <label class="label">Primary Input:</label>
    <input type="text" class="input primary" placeholder="Name" />
</div>

<div class="form-element">
    <label class="label">Secondary Input:</label>
    <input type="text" class="input secondary" placeholder="Name" />
</div>

<div class="form-element">
    <label class="label">Success Input:</label>
    <input type="text" class="input success" placeholder="Name" />
</div>

<div class="form-element">
    <label class="label">Info Input:</label>
    <input type="text" class="input info" placeholder="Name" />
</div>

<div class="form-element">
    <label class="label">Warning Input:</label>
    <input type="text" class="input warning" placeholder="Name" />
</div>

<div class="form-element">
    <label class="label">Danger Input:</label>
    <input type="text" class="input danger" placeholder="Name" />
</div>

<div class="form-element">
    <label class="label">Dark Input:</label>
    <input type="text" class="input dark" placeholder="Name" />
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
            To use flat colors for input add
            <code class="text-danger">.flat</code> with
            <code class="text-danger">.input</code> class.
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex wrap border-radius-2">
            <div class="form-element mr-10">
              <label class="label">Primary Input:</label>
              <input
                type="text"
                class="input primary flat"
                placeholder="Name"
              />
            </div>
            <div class="form-element mr-10">
              <label class="label">Secondary Input:</label>
              <input
                type="text"
                class="input secondary flat"
                placeholder="Name"
              />
            </div>
            <div class="form-element mr-10">
              <label class="label">Success Input:</label>
              <input
                type="text"
                class="input success flat"
                placeholder="Name"
              />
            </div>
            <div class="form-element mr-10">
              <label class="label">Info Input:</label>
              <input type="text" class="input info flat" placeholder="Name" />
            </div>
            <div class="form-element mr-10">
              <label class="label">Warning Input:</label>
              <input
                type="text"
                class="input warning flat"
                placeholder="Name"
              />
            </div>
            <div class="form-element mr-10">
              <label class="label">Danger Input:</label>
              <input type="text" class="input danger flat" placeholder="Name" />
            </div>
            <div class="form-element">
              <label class="label">Dark Input:</label>
              <input type="text" class="input dark flat" placeholder="Name" />
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
    <label class="label">Primary Input:</label>
    <input type="text" class="input primary flat" placeholder="Name" />
</div>

<div class="form-element">
    <label class="label">Secondary Input:</label>
    <input type="text" class="input secondary flat" placeholder="Name" />
</div>

<div class="form-element">
    <label class="label">Success Input:</label>
    <input type="text" class="input success flat" placeholder="Name" />
</div>

<div class="form-element">
    <label class="label">Info Input:</label>
    <input type="text" class="input info flat" placeholder="Name" />
</div>

<div class="form-element">
    <label class="label">Warning Input:</label>
    <input type="text" class="input warning flat" placeholder="Name" />
</div>

<div class="form-element">
    <label class="label">Danger Input:</label>
    <input type="text" class="input danger flat" placeholder="Name" />
</div>

<div class="form-element">
    <label class="label">Dark Input:</label>
    <input type="text" class="input dark flat" placeholder="Name" />
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
            <code class="text-danger">.input</code> class and color class. You
            can use this feature for input state or for input with error.
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex wrap border-radius-2">
            <div class="form-element mr-10">
              <label class="label">Primary Input:</label>
              <input
                type="text"
                class="input primary bordered"
                placeholder="Name"
              />
            </div>
            <div class="form-element mr-10">
              <label class="label">Secondary Input:</label>
              <input
                type="text"
                class="input secondary bordered"
                placeholder="Name"
              />
            </div>
            <div class="form-element mr-10">
              <label class="label">Success Input:</label>
              <input
                type="text"
                class="input success bordered"
                placeholder="Name"
              />
            </div>
            <div class="form-element mr-10">
              <label class="label">Info Input:</label>
              <input
                type="text"
                class="input info bordered"
                placeholder="Name"
              />
            </div>
            <div class="form-element mr-10">
              <label class="label">Warning Input:</label>
              <input
                type="text"
                class="input warning bordered"
                placeholder="Name"
              />
            </div>
            <div class="form-element mr-10">
              <label class="label">Danger Input:</label>
              <input
                type="text"
                class="input danger bordered"
                placeholder="Name"
              />
            </div>
            <div class="form-element">
              <label class="label">Dark Input:</label>
              <input
                type="text"
                class="input dark bordered"
                placeholder="Name"
              />
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
    <label class="label">Primary Input:</label>
    <input type="text" class="input primary bordered" placeholder="Name" />
</div>

<div class="form-element">
    <label class="label">Secondary Input:</label>
    <input type="text" class="input secondary bordered" placeholder="Name" />
</div>

<div class="form-element">
    <label class="label">Success Input:</label>
    <input type="text" class="input success bordered" placeholder="Name" />
</div>

<div class="form-element">
    <label class="label">Info Input:</label>
    <input type="text" class="input info bordered" placeholder="Name" />
</div>

<div class="form-element">
    <label class="label">Warning Input:</label>
    <input type="text" class="input warning bordered" placeholder="Name" />
</div>

<div class="form-element">
    <label class="label">Danger Input:</label>
    <input type="text" class="input danger bordered" placeholder="Name" />
</div>

<div class="form-element">
    <label class="label">Dark Input:</label>
    <input type="text" class="input dark bordered" placeholder="Name" />
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
            To show your input as a square shape add
            <code class="text-danger">.square</code> to the
            <code class="text-danger">.input</code> element.
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex justify-center border-radius-2">
            <div class="form-element">
              <label for="input_1" class="label">Square Input</label>
              <input
                type="text"
                class="input primary square bordered"
                id="input_1"
                placeholder="Name"
              />
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element">
    <label class="label">Square Input</label>
    <input type="text" class="input primary square bordered" placeholder="Name" />
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="icon">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Icon</h2>
          <p class="fs-6">
            To add icon to your input add
            <code class="text-danger">.has-icon-before</code> or
            <code class="text-danger">.has-icon-after</code> class to the
            <code class="text-danger">.form-element</code> item. Then add icon
            inside the <code class="text-danger">.input-icon</code> tags.
          </p>
        </div>

        <div class="mt-25">
          <div class="bg-white p-20 flex justify-center border-radius-2">
            <div class="form-element has-icon-before mr-10">
              <label class="label">Icon Before:</label>
              <input type="text" class="input primary" placeholder="Name" />
              <div class="input-icon">
                <i class="ri-user-follow-line"></i>
              </div>
            </div>
            <div class="form-element has-icon-after">
              <label class="label">Icon After:</label>
              <input type="text" class="input success" placeholder="Name" />
              <div class="input-icon">
                <i class="ri-user-follow-line"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element has-icon-before mr-10">
    <label class="label">Icon Before:</label>
    <input type="text" class="input primary" placeholder="Name" />
    <div class="input-icon">
        <i class="ri-user-follow-line"></i>
    </div>
</div>
<div class="form-element has-icon-after">
    <label class="label">Icon After:</label>
    <input type="text" class="input success" placeholder="Name" />
    <div class="input-icon">
        <i class="ri-user-follow-line"></i>
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
            To customize the input component you change the variables listed
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
    name: "$input-background-color",
    value: "$gray-2",
    computed: "rgb(244, 247, 248)",
  },
  {
    name: "$input-height  <span class='tag success'>since 0.2.1</span>",
    value: "36px",
    computed: "",
  },
  { name: "$placeholder-opacity", value: "0.4", computed: "" },
  { name: "$input-min-width", value: "200px", computed: "" },
  { name: "$input-border-radius", value: "12px", computed: "" },
  {
    name: "$input-icon-box-width <span class='tag success'>since 0.2.1</span>",
    value: "$input-height",
    computed: "36px",
  },
  {
    name: "$input-icon-box-height <span class='tag success'>since 0.2.1</span>",
    value: "$input-icon-box-width",
    computed: "36px",
  },
  {
    name: "$input-border-width <span class='tag success'>since 0.2.1</span>",
    value: "2px",
    computed: "",
  },
  {
    name: "$input-padding <span class='tag success'>since 0.2.1</span>",
    value: "7px 13px 7px 10px",
    computed: "",
  },
];
</script>
