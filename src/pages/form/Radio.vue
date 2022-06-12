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
        <h1 class="title-5 fw-500">Radio</h1>
        <p class="subtitle"><b>GNB UI</b> provides a set of radio buttons.</p>
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
          <h2 class="mb-20">&bull; Default Radio</h2>
          <p class="fs-6">
            The default radio component is a simple radio element with a
            <code class="text-danger">.radio</code> class.
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
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_1"
                  type="radio"
                  class="radio"
                  name="default_radio"
                />
                <label class="label" for="radio_1">Default radio</label>
              </div>
            </div>
            <div class="form-element horizontal">
              <div class="radio-group">
                <input
                  id="radio_2"
                  type="radio"
                  class="radio"
                  name="default_radio"
                />
                <label class="label" for="radio_2">Default radio</label>
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
            Just click the radio and see the change!
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
              <div class="radio-group">
                <input
                  id="radio_primary"
                  type="radio"
                  class="radio primary"
                  name="colored_radio"
                  checked
                />
                <label class="label" for="radio_primary">Primary Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_1"
                  type="radio"
                  class="radio secondary"
                  name="colored_radio"
                />
                <label class="label" for="radio_secondary"
                  >Secondary Radio</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_success"
                  type="radio"
                  class="radio success"
                  name="colored_radio"
                />
                <label class="label" for="radio_success">Success Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_1"
                  type="radio"
                  class="radio info"
                  name="colored_radio"
                />
                <label class="label" for="radio_info">Info Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_warning"
                  type="radio"
                  class="radio warning"
                  name="colored_radio"
                />
                <label class="label" for="radio_warning">Warning Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_danger"
                  type="radio"
                  class="radio danger"
                  name="colored_radio"
                />
                <label class="label" for="radio_danger">Danger Radio</label>
              </div>
            </div>
            <div class="form-element horizontal">
              <div class="radio-group">
                <input
                  id="radio_dark"
                  type="radio"
                  class="radio dark"
                  name="colored_radio"
                />
                <label class="label" for="radio_dark">Dark Radio</label>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_primary"
      type="radio"
      class="radio primary"
      name="colored_radio"
      checked
    />
    <label class="label" for="radio_primary">Primary Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_1"
      type="radio"
      class="radio secondary"
      name="colored_radio"
    />
    <label class="label" for="radio_secondary">Secondary Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_success"
      type="radio"
      class="radio success"
      name="colored_radio"
    />
    <label class="label" for="radio_success">Success Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_1"
      type="radio"
      class="radio info"
      name="colored_radio"
    />
    <label class="label" for="radio_info">Info Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_warning"
      type="radio"
      class="radio warning"
      name="colored_radio"
    />
    <label class="label" for="radio_warning">Warning Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_danger"
      type="radio"
      class="radio danger"
      name="colored_radio"
    />
    <label class="label" for="radio_danger">Danger Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_dark"
      type="radio"
      class="radio dark"
      name="colored_radio"
    />
    <label class="label" for="radio_dark">Dark Radio</label>
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
            To use flat colors for radio add
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
              <div class="radio-group">
                <input
                  id="radio_primary"
                  type="radio"
                  class="radio primary flat"
                  name="colored_radio"
                  checked
                />
                <label class="label" for="radio_primary">Primary Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_1"
                  type="radio"
                  class="radio secondary flat"
                  name="colored_radio"
                />
                <label class="label" for="radio_secondary"
                  >Secondary Radio</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_success"
                  type="radio"
                  class="radio success flat"
                  name="colored_radio"
                />
                <label class="label" for="radio_success">Success Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_1"
                  type="radio"
                  class="radio info flat"
                  name="colored_radio"
                />
                <label class="label" for="radio_info">Info Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_warning"
                  type="radio"
                  class="radio warning flat"
                  name="colored_radio"
                />
                <label class="label" for="radio_warning">Warning Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_danger"
                  type="radio"
                  class="radio danger flat"
                  name="colored_radio"
                />
                <label class="label" for="radio_danger">Danger Radio</label>
              </div>
            </div>
            <div class="form-element horizontal">
              <div class="radio-group">
                <input
                  id="radio_dark"
                  type="radio"
                  class="radio dark flat"
                  name="colored_radio"
                />
                <label class="label" for="radio_dark">Dark Radio</label>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_primary"
      type="radio"
      class="radio primary flat"
      name="colored_radio"
      checked
    />
    <label class="label" for="radio_primary">Primary Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_1"
      type="radio"
      class="radio secondary flat"
      name="colored_radio"
    />
    <label class="label" for="radio_secondary"
      >Secondary Radio</label
    >
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_success"
      type="radio"
      class="radio success flat"
      name="colored_radio"
    />
    <label class="label" for="radio_success">Success Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_1"
      type="radio"
      class="radio info flat"
      name="colored_radio"
    />
    <label class="label" for="radio_info">Info Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_warning"
      type="radio"
      class="radio warning flat"
      name="colored_radio"
    />
    <label class="label" for="radio_warning">Warning Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_danger"
      type="radio"
      class="radio danger flat"
      name="colored_radio"
    />
    <label class="label" for="radio_danger">Danger Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_dark"
      type="radio"
      class="radio dark flat"
      name="colored_radio"
    />
    <label class="label" for="radio_dark">Dark Radio</label>
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
              <div class="radio-group">
                <input
                  id="radio_primary"
                  type="radio"
                  class="radio primary bordered"
                  name="colored_radio"
                  checked
                />
                <label class="label" for="radio_primary">Primary Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_1"
                  type="radio"
                  class="radio secondary bordered"
                  name="colored_radio"
                />
                <label class="label" for="radio_secondary"
                  >Secondary Radio</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_success"
                  type="radio"
                  class="radio success bordered"
                  name="colored_radio"
                />
                <label class="label" for="radio_success">Success Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_1"
                  type="radio"
                  class="radio info bordered"
                  name="colored_radio"
                />
                <label class="label" for="radio_info">Info Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_warning"
                  type="radio"
                  class="radio warning bordered"
                  name="colored_radio"
                />
                <label class="label" for="radio_warning">Warning Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_danger"
                  type="radio"
                  class="radio danger bordered"
                  name="colored_radio"
                />
                <label class="label" for="radio_danger">Danger Radio</label>
              </div>
            </div>
            <div class="form-element horizontal">
              <div class="radio-group">
                <input
                  id="radio_dark"
                  type="radio"
                  class="radio dark bordered"
                  name="colored_radio"
                />
                <label class="label" for="radio_dark">Dark Radio</label>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_primary"
      type="radio"
      class="radio primary bordered"
      name="colored_radio"
      checked
    />
    <label class="label" for="radio_primary">Primary Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_1"
      type="radio"
      class="radio secondary bordered"
      name="colored_radio"
    />
    <label class="label" for="radio_secondary"
      >Secondary Radio</label
    >
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_success"
      type="radio"
      class="radio success bordered"
      name="colored_radio"
    />
    <label class="label" for="radio_success">Success Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_1"
      type="radio"
      class="radio info bordered"
      name="colored_radio"
    />
    <label class="label" for="radio_info">Info Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_warning"
      type="radio"
      class="radio warning bordered"
      name="colored_radio"
    />
    <label class="label" for="radio_warning">Warning Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_danger"
      type="radio"
      class="radio danger bordered"
      name="colored_radio"
    />
    <label class="label" for="radio_danger">Danger Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_dark"
      type="radio"
      class="radio dark bordered"
      name="colored_radio"
    />
    <label class="label" for="radio_dark">Dark Radio</label>
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
            To show your checkboxes as a square, add
            <code class="text-danger">.square</code> class to the
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
              <div class="radio-group">
                <input
                  id="radio_primary"
                  type="radio"
                  class="radio primary square"
                  name="colored_radio"
                  checked
                />
                <label class="label" for="radio_primary">Primary Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_1"
                  type="radio"
                  class="radio secondary square"
                  name="colored_radio"
                />
                <label class="label" for="radio_secondary"
                  >Secondary Radio</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_success"
                  type="radio"
                  class="radio success square"
                  name="colored_radio"
                />
                <label class="label" for="radio_success">Success Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_1"
                  type="radio"
                  class="radio info square"
                  name="colored_radio"
                />
                <label class="label" for="radio_info">Info Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_warning"
                  type="radio"
                  class="radio warning square"
                  name="colored_radio"
                />
                <label class="label" for="radio_warning">Warning Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_danger"
                  type="radio"
                  class="radio danger square"
                  name="colored_radio"
                />
                <label class="label" for="radio_danger">Danger Radio</label>
              </div>
            </div>
            <div class="form-element horizontal">
              <div class="radio-group">
                <input
                  id="radio_dark"
                  type="radio"
                  class="radio dark square"
                  name="colored_radio"
                />
                <label class="label" for="radio_dark">Dark Radio</label>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_primary"
      type="radio"
      class="radio primary square"
      name="colored_radio"
      checked
    />
    <label class="label" for="radio_primary">Primary Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_1"
      type="radio"
      class="radio secondary square"
      name="colored_radio"
    />
    <label class="label" for="radio_secondary"
      >Secondary Radio</label
    >
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_success"
      type="radio"
      class="radio success square"
      name="colored_radio"
    />
    <label class="label" for="radio_success">Success Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_1"
      type="radio"
      class="radio info square"
      name="colored_radio"
    />
    <label class="label" for="radio_info">Info Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_warning"
      type="radio"
      class="radio warning square"
      name="colored_radio"
    />
    <label class="label" for="radio_warning">Warning Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_danger"
      type="radio"
      class="radio danger square"
      name="colored_radio"
    />
    <label class="label" for="radio_danger">Danger Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_dark"
      type="radio"
      class="radio dark square"
      name="colored_radio"
    />
    <label class="label" for="radio_dark">Dark Radio</label>
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
              <div class="radio-group">
                <input
                  id="radio_primary"
                  type="radio"
                  class="radio primary hover-color"
                  name="colored_radio"
                  checked
                />
                <label class="label" for="radio_primary">Primary Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_1"
                  type="radio"
                  class="radio secondary hover-color"
                  name="colored_radio"
                />
                <label class="label" for="radio_secondary"
                  >Secondary Radio</label
                >
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_success"
                  type="radio"
                  class="radio success hover-color"
                  name="colored_radio"
                />
                <label class="label" for="radio_success">Success Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_1"
                  type="radio"
                  class="radio info hover-color"
                  name="colored_radio"
                />
                <label class="label" for="radio_info">Info Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_warning"
                  type="radio"
                  class="radio warning hover-color"
                  name="colored_radio"
                />
                <label class="label" for="radio_warning">Warning Radio</label>
              </div>
            </div>
            <div class="form-element horizontal mr-10">
              <div class="radio-group">
                <input
                  id="radio_danger"
                  type="radio"
                  class="radio danger hover-color"
                  name="colored_radio"
                />
                <label class="label" for="radio_danger">Danger Radio</label>
              </div>
            </div>
            <div class="form-element horizontal">
              <div class="radio-group">
                <input
                  id="radio_dark"
                  type="radio"
                  class="radio dark hover-color"
                  name="colored_radio"
                />
                <label class="label" for="radio_dark">Dark Radio</label>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_primary"
      type="radio"
      class="radio primary hover-color"
      name="colored_radio"
      checked
    />
    <label class="label" for="radio_primary">Primary Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_1"
      type="radio"
      class="radio secondary hover-color"
      name="colored_radio"
    />
    <label class="label" for="radio_secondary">Secondary Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_success"
      type="radio"
      class="radio success hover-color"
      name="colored_radio"
    />
    <label class="label" for="radio_success">Success Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_1"
      type="radio"
      class="radio info hover-color"
      name="colored_radio"
    />
    <label class="label" for="radio_info">Info Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_warning"
      type="radio"
      class="radio warning hover-color"
      name="colored_radio"
    />
    <label class="label" for="radio_warning">Warning Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_danger"
      type="radio"
      class="radio danger hover-color"
      name="colored_radio"
    />
    <label class="label" for="radio_danger">Danger Radio</label>
  </div>
</div>

<div class="form-element horizontal">
  <div class="radio-group">
    <input
      id="radio_dark"
      type="radio"
      class="radio dark hover-color"
      name="colored_radio"
    />
    <label class="label" for="radio_dark">Dark Radio</label>
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
            To customize the checkbox component you can change the variables
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
    name: "$radio-width  <span class='tag success'>since 0.2.1</span>",
    value: "20px",
    computed: "",
  },
  {
    name: "$radio-height  <span class='tag success'>since 0.2.1</span>",
    value: "$radio-width",
    computed: "20px",
  },
  {
    name: "$radio-border-width  <span class='tag success'>since 0.2.1</span>",
    value: "2px",
    computed: "",
  },
  {
    name: "$radio-border-color  <span class='tag success'>since 0.2.1</span>",
    value: "$gray-1",
    computed: "rgb(230, 233, 234)",
  },
  {
    name: "$radio-label-margin  <span class='tag success'>since 0.2.1</span>",
    value: "6px",
    computed: "",
  },
];
</script>
