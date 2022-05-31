<template>
  <Layout>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Form Elements</h1>
        <p class="subtitle">
          <b>GNB UI</b> has a custom form elements that brings beauty to your
          page.
        </p>
      </div>
    </section>

    <section class="section" id="default">
      <div class="container">
        <div class="row">
          <div class="column size-12 md-size-6 mb-30">
            <div class="card p-20 h-100">
              <router-link to="/form-elements/input" class="btn link">
                <h2>Input:</h2>
              </router-link>
              <div class="flex items-center wrap justify-center">
                <div class="form-element mr-10">
                  <label class="label">Primary Input:</label>
                  <input type="text" class="input primary" placeholder="Name" />
                </div>
                <div class="form-element mr-10">
                  <label class="label">Secondary Flat Input:</label>
                  <input
                    type="text"
                    class="input secondary flat"
                    placeholder="Name"
                  />
                </div>
                <div class="form-element mr-10">
                  <label class="label">Bordered Success Input:</label>
                  <input
                    type="text"
                    class="input success bordered"
                    placeholder="Name"
                  />
                </div>
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
          </div>
          <div class="column size-12 md-size-6 mb-30">
            <div class="card p-20 h-100">
              <router-link to="/form-elements/select" class="btn link">
                <h2>Select:</h2>
              </router-link>
              <div class="flex items-center wrap justify-center">
                <div class="form-element mr-10">
                  <label class="label">Primary Select:</label>
                  <select class="select primary">
                    <option value="1">Lorem.</option>
                    <option value="2">Dolor.</option>
                    <option value="3">Ipsum.</option>
                  </select>
                </div>
                <div class="form-element mr-10">
                  <label class="label">Secondary Flat Select:</label>
                  <select class="select secondary flat">
                    <option value="1">Lorem.</option>
                    <option value="2">Dolor.</option>
                    <option value="3">Ipsum.</option>
                  </select>
                </div>
                <div class="form-element mr-10">
                  <label class="label">Bordered Success Select:</label>
                  <select class="select success bordered">
                    <option value="1">Lorem.</option>
                    <option value="2">Dolor.</option>
                    <option value="3">Ipsum.</option>
                  </select>
                </div>
                <div class="form-element mr-10">
                  <label class="label">Square Warning Select:</label>
                  <select class="select warning square">
                    <option value="1">Lorem.</option>
                    <option value="2">Dolor.</option>
                    <option value="3">Ipsum.</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="column size-12 md-size-6 mb-30">
            <div class="card p-20 h-100">
              <router-link to="/form-elements/checkbox" class="btn link">
                <h2>Checkbox:</h2>
              </router-link>
              <div class="flex items-center wrap justify-center">
                <div class="form-element horizontal mr-10">
                  <div class="checkbox-group">
                    <input
                      id="check_1"
                      type="checkbox"
                      checked
                      class="checkbox"
                    />
                    <label class="label" for="check_1">Default Checkbox</label>
                  </div>
                </div>
                <div class="form-element horizontal mr-10">
                  <div class="checkbox-group">
                    <input
                      type="checkbox"
                      checked
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
                      checked
                      id="check_secondary"
                      class="checkbox secondary flat"
                    />
                    <label class="label" for="check_secondary"
                      >Secondary Flat Checkbox</label
                    >
                  </div>
                </div>
                <div class="form-element horizontal mr-10">
                  <div class="checkbox-group">
                    <input
                      type="checkbox"
                      checked
                      id="check_success"
                      class="checkbox success bordered"
                    />
                    <label class="label" for="check_success"
                      >Bordered Success Checkbox</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column size-12 md-size-6 mb-30">
            <div class="card p-20 h-100">
              <router-link to="/form-elements/radio" class="btn link">
                <h2>Radio:</h2>
              </router-link>
              <div class="flex items-center wrap justify-center">
                <div class="form-element horizontal mr-10">
                  <div class="radio-group">
                    <input
                      id="radio_1"
                      type="radio"
                      checked
                      class="radio"
                      name="default_radio"
                    />
                    <label class="label" for="radio_1">Default radio</label>
                  </div>
                </div>
                <div class="form-element horizontal mr-10">
                  <div class="radio-group">
                    <input
                      id="radio_primary"
                      type="radio"
                      checked
                      class="radio primary"
                      name="colored_radio"
                    />
                    <label class="label" for="radio_primary"
                      >Primary Radio</label
                    >
                  </div>
                </div>
                <div class="form-element horizontal mr-10">
                  <div class="radio-group">
                    <input
                      id="radio_secondary"
                      type="radio"
                      checked
                      class="radio secondary flat"
                      name="flat_radio"
                    />
                    <label class="label" for="radio_secondary"
                      >Secondary Flat Radio</label
                    >
                  </div>
                </div>
                <div class="form-element horizontal mr-10">
                  <div class="radio-group">
                    <input
                      id="radio_success"
                      type="radio"
                      checked
                      class="radio success bordered"
                      name="bordered_radio"
                    />
                    <label class="label" for="radio_success"
                      >Bordered Success Radio</label
                    >
                  </div>
                </div>
                <div class="form-element horizontal mr-10">
                  <div class="radio-group">
                    <input
                      id="radio_danger"
                      type="radio"
                      checked
                      class="radio danger square"
                      name="sqaure_radio"
                    />
                    <label class="label" for="radio_danger"
                      >Square Danger Radio</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column size-12 md-size-6 mb-30">
            <div class="card p-20 h-100">
              <router-link to="/form-elements/switch" class="btn link">
                <h2>Switch:</h2>
              </router-link>
              <div class="flex items-center wrap justify-center">
                <div class="form-element mr-10">
                  <input type="checkbox" id="switch" class="switch" />
                  <label for="switch"></label>
                </div>
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
                    id="switch-secondary-square"
                    class="switch secondary square"
                  />
                  <label for="switch-secondary-square"></label>
                </div>
              </div>
            </div>
          </div>
          <div class="column size-12 md-size-6 mb-30">
            <div class="card p-20 h-100">
              <router-link to="/form-elements/textarea" class="btn link">
                <h2>Textarea:</h2>
              </router-link>
              <div class="flex items-center wrap justify-center">
                <div class="form-element mr-10">
                  <label class="label">Default Textarea:</label>
                  <textarea
                    class="textarea"
                    placeholder="Lorem ipsum dolor sit amet."
                  ></textarea>
                </div>
                <div class="form-element mr-10">
                  <label class="label">Primary Textarea:</label>
                  <textarea
                    class="textarea primary"
                    placeholder="Lorem ipsum dolor sit amet."
                  ></textarea>
                </div>
                <div class="form-element mr-10">
                  <label class="label">Secondary Flat Textarea:</label>
                  <textarea
                    class="textarea secondary flat"
                    placeholder="Lorem ipsum dolor sit amet."
                  ></textarea>
                </div>
                <div class="form-element mr-10">
                  <label class="label">Bordered Success Textarea:</label>
                  <textarea
                    class="textarea success bordered"
                    placeholder="Lorem ipsum dolor sit amet."
                  ></textarea>
                </div>
                <div class="form-element">
                  <label class="label">Danger Square Textarea:</label>
                  <textarea
                    class="textarea danger bordered square"
                    placeholder="Lorem ipsum dolor sit amet."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from "../../layout/Layout.vue";
</script>

<style scoped>
.docs-title,
.docs .section {
  padding-right: 1.5rem !important;
}

.card:hover img {
  transform: scale(1);
}
</style>
