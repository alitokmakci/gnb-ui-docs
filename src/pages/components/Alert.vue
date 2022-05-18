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
        <h1 class="title-5 fw-500">Alerts</h1>
        <p class="subtitle"><b>GNB UI</b> provides a set of alerts.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">To Import Alerts Separately:</h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/components/alert";'
        />
      </div>
    </section>

    <section class="section" id="default">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Default Alert</h2>
          <p class="fs-6">
            Default alert is simple component that can be used to display a
            message to the user.
          </p>
        </div>

        <div class="mt-25">
          <div class="alert">
            <div class="alert-content">
              <h1 class="alert-title">This is a default alert!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='
<div class="alert">
    <div class="alert-content">
        <h1 class="alert-title">This is a default alert!</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident doloribus fugit expedita repellendus magni, saepe
            minus sunt esse quas in!
        </p>
        </div>
    </div>
</div>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="colors">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Colors</h2>
          <p class="fs-6">
            You can use any color you want with one of the color classes with
            <code class="text-danger">.alert</code> component.
          </p>
        </div>

        <div class="mt-25">
          <div class="alert primary">
            <div class="alert-content">
              <h1 class="alert-title">This is a primary alert!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
          </div>
          <div class="alert secondary mt-10">
            <div class="alert-content">
              <h1 class="alert-title">This is a secondary alert!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
          </div>
          <div class="alert success mt-10">
            <div class="alert-content">
              <h1 class="alert-title">This is a success alert!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
          </div>
          <div class="alert info mt-10">
            <div class="alert-content">
              <h1 class="alert-title">This is a info alert!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
          </div>
          <div class="alert warning mt-10">
            <div class="alert-content">
              <h1 class="alert-title">This is a warning alert!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
          </div>
          <div class="alert danger mt-10">
            <div class="alert-content">
              <h1 class="alert-title">This is a danger alert!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
          </div>
          <div class="alert dark mt-10">
            <div class="alert-content">
              <h1 class="alert-title">This is a dark alert!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='
<div class="alert primary">
    <div class="alert-content">
        <h1 class="alert-title">This is a primary alert!</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident doloribus fugit expedita repellendus magni, saepe
            minus sunt esse quas in!
        </p>
        </div>
    </div>
</div>
<div class="alert secondary">
    ...
</div>
<div class="alert success">
    ...
</div>
<div class="alert info">
    ...
</div>
<div class="alert warning">
    ...
</div>
<div class="alert danger">
    ...
</div>
<div class="alert dark">
    ...
</div>
'
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
            the <code class="text-danger">.alert</code> component.
          </p>
        </div>

        <div class="mt-25">
          <div class="alert primary flat">
            <div class="alert-content">
              <h1 class="alert-title">This is a primary alert!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
          </div>
          <div class="alert secondary flat mt-10">
            <div class="alert-content">
              <h1 class="alert-title">This is a secondary alert!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
          </div>
          <div class="alert success flat mt-10">
            <div class="alert-content">
              <h1 class="alert-title">This is a success alert!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
          </div>
          <div class="alert info flat mt-10">
            <div class="alert-content">
              <h1 class="alert-title">This is a info alert!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
          </div>
          <div class="alert warning flat mt-10">
            <div class="alert-content">
              <h1 class="alert-title">This is a warning alert!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
          </div>
          <div class="alert danger flat mt-10">
            <div class="alert-content">
              <h1 class="alert-title">This is a danger alert!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
          </div>
          <div class="alert dark flat mt-10">
            <div class="alert-content">
              <h1 class="alert-title">This is a dark alert!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='
<div class="alert primary flat">
    <div class="alert-content">
        <h1 class="alert-title">This is a primary alert!</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident doloribus fugit expedita repellendus magni, saepe
            minus sunt esse quas in!
        </p>
        </div>
    </div>
</div>
<div class="alert secondary flat">
    ...
</div>
<div class="alert success flat">
    ...
</div>
<div class="alert info flat">
    ...
</div>
<div class="alert warning flat">
    ...
</div>
<div class="alert danger flat">
    ...
</div>
<div class="alert dark flat">
    ...
</div>'
          />
        </div>
      </div>
    </section>
    <section class="section" id="bordered">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Bordered</h2>
          <p class="fs-6">
            To use bordered colors you can use
            <code class="text-danger">.bordered</code> class to the
            <code class="text-danger">.alert</code> component.
          </p>
        </div>

        <div class="mt-25">
          <div class="alert primary bordered">
            <div class="alert-content">
              <div class="alert-title">
                This is a bordered alert with primary color!
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="alert primary bordered">
    <div class="alert-content">
        <h1 class="alert-title">This is a bordered alert with primary color!</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident doloribus fugit expedita repellendus magni, saepe
            minus sunt esse quas in!
        </p>
        </div>
    </div>
</div>'
          />
        </div>
      </div>
    </section>
    <section class="section" id="shadow">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Shadow</h2>
        </div>

        <div class="mt-25">
          <div class="alert danger shadow">
            <div class="alert-content">
              <div class="alert-title">
                This is a shadow alert with danger color!
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="alert danger shadow">
    <div class="alert-content">
        <h1 class="alert-title">This is a shadow alert with danger color!</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Provident doloribus fugit expedita repellendus magni, saepe
        minus sunt esse quas in!
        </p>
        </div>
    </div>
</div>'
          />
        </div>
      </div>
    </section>
    <section class="section" id="icon">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Icon</h2>
          <p class="fs-6">
            To use icon in your alert add
            <code class="text-danger">.has-icon</code> class to the
            <code class="text-danger">.alert</code> component and add
            <code class="text-danger">.alert-icon</code> wrapper element inside
            the <code class="text-danger">.alert</code> component (After or
            before <code class="text-danger">.alert-content</code>). Now you can
            add your icon inside the
            <code class="text-danger">.alert-icon</code> wrapper
          </p>
        </div>

        <div class="mt-25">
          <div class="alert primary flat has-icon">
            <div class="alert-icon">
              <i class="ri-user-follow-line"></i>
            </div>
            <div class="alert-content">
              <h1 class="alert-title">Alert with Icon!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
          </div>
          <div class="alert success has-icon mt-10">
            <div class="alert-content">
              <h1 class="alert-title">Alert with Icon!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
            <div class="alert-icon">
              <i class="ri-user-follow-line"></i>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='
<div class="alert primary flat has-icon">
  <div class="alert-icon">
    <i class="ri-user-follow-line"></i>
  </div>
  <div class="alert-content">
    <h1 class="alert-title">Alert with Icon!</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Provident doloribus fugit expedita repellendus magni, saepe
      minus sunt esse quas in!
    </p>
  </div>
</div>
<div class="alert success has-icon mt-10">
  <div class="alert-content">
    <h1 class="alert-title">Alert with Icon!</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Provident doloribus fugit expedita repellendus magni, saepe
      minus sunt esse quas in!
    </p>
  </div>
  <div class="alert-icon">
    <i class="ri-user-follow-line"></i>
  </div>
</div>
		  '
          />
        </div>
      </div>
    </section>
    <section class="section" id="footer">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Footer</h2>
          <p class="fs-6">
            In some cases you may want to add some confirm buttons to your
            alert. Thats why we added a footer to the alert component. You can
            add your confirm buttons or something else in your mind inside the
            <code class="text-danger">.alert-footer</code> element.
          </p>
        </div>

        <div class="mt-25">
          <div class="alert primary flat">
            <div class="alert-content">
              <div class="alert-title">This is a alert with footer!</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
            <div class="alert-footer">
              <button class="btn primary flat mr-10">Decline</button>
              <button class="btn primary">Accept</button>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="alert primary flat">
    <div class="alert-content">
        <h1 class="alert-title">This is a alert with footer!</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident doloribus fugit expedita repellendus magni, saepe
            minus sunt esse quas in!
        </p>
    </div>
    <div class="alert-footer">
        <button class="btn primary flat mr-10">Decline</button>
        <button class="btn primary">Accept</button>
    </div>
</div>'
          />
        </div>
      </div>
    </section>
    <section class="section" id="close">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Close</h2>
          <p class="fs-6">
            If you want your alert to be closed by clicking on the close button
            you can add a button inside the
            <code class="text-danger">.alert</code> element with
            <code class="text-danger">.close</code> class and write some
            javascript code. The javascript example is given in the next
            section.
          </p>
        </div>

        <div class="mt-25">
          <div class="alert primary flat">
            <button class="close"></button>
            <div class="alert-content">
              <div class="alert-title">This is a alert with footer!</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
            <div class="alert-footer">
              <button class="btn primary flat mr-10">Decline</button>
              <button class="btn primary">Accept</button>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="alert primary flat">
    <button class="close"></button>
    <div class="alert-content">
        <h1 class="alert-title">This is a alert with footer!</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident doloribus fugit expedita repellendus magni, saepe
            minus sunt esse quas in!
        </p>
    </div>
    <div class="alert-footer">
        <button class="btn primary flat mr-10">Decline</button>
        <button class="btn primary">Accept</button>
    </div>
</div>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="close">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Close Button Javascript Example</h2>
        </div>

        <div class="mt-25">
          <div class="alert primary flat" v-if="alertActive">
            <button class="close" @click="closeAlert"></button>
            <div class="alert-content">
              <div class="alert-title">This is a alert with close button!</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloribus fugit expedita repellendus magni, saepe
                minus sunt esse quas in!
              </p>
            </div>
            <div class="alert-footer">
              <button class="btn primary flat mr-10">Decline</button>
              <button class="btn primary">Accept</button>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="alert primary flat">
    <button class="close"></button>
    <div class="alert-content">
        <h1 class="alert-title">This is a alert with close button!</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident doloribus fugit expedita repellendus magni, saepe
            minus sunt esse quas in!
        </p>
    </div>
    <div class="alert-footer">
        <button class="btn primary flat mr-10">Decline</button>
        <button class="btn primary">Accept</button>
    </div>
</div>

//Javascript Code
<script>
// Select all the close buttons inside alert
let closeButtonsForAlerts = document.querySelectorAll(".alert .close");

closeButtonsForAlerts.forEach(btn => {
    // add event listener for each close button
    btn.addEventListener("click", function() {
        // Remove the alert on click
        btn.parentElement.remove();
    });
});
</script>'
          />
        </div>
      </div>
    </section>
    <section class="section" id="variables">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Variables</h2>
          <p class="fs-6">
            To customize the alert component you change the variables listed
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
                <td><span class="tag primary">$alert-font-color</span></td>
                <td>
                  <span class="tag secondary">$font-color</span>
                </td>
                <td><span class="tag warning">rgba(44, 62, 80)</span></td>
              </tr>
              <tr>
                <td>
                  <span class="tag primary">$alert-background-color</span>
                  <br />
                  <small class="text-danger"
                    >Note: we are mixin that color with 90% $white</small
                  >
                </td>
                <td>
                  <span class="tag secondary">$gray-1</span>
                </td>
                <td><span class="tag warning">rgba(230, 233, 234)</span></td>
              </tr>
              <tr>
                <td><span class="tag primary">$alert-font-size</span></td>
                <td>
                  <span class="tag secondary">0.9rem</span>
                </td>
                <td><span class="tag warning"></span></td>
              </tr>
              <tr>
                <td><span class="tag primary">$alert-z-index</span></td>
                <td>
                  <span class="tag secondary">10</span>
                </td>
                <td><span class="tag warning"></span></td>
              </tr>
              <tr>
                <td><span class="tag primary">$alert-padding</span></td>
                <td>
                  <span class="tag secondary">0 20px</span>
                </td>
                <td><span class="tag warning"></span></td>
              </tr>
              <tr>
                <td><span class="tag primary">$alert-border-radius</span></td>
                <td>
                  <span class="tag secondary">0 12px 12px 0</span>
                </td>
                <td><span class="tag warning"></span></td>
              </tr>
              <tr>
                <td>
                  <span class="tag primary">$alert-title-font-weight</span>
                </td>
                <td>
                  <span class="tag secondary">600</span>
                </td>
                <td><span class="tag warning"></span></td>
              </tr>
              <tr>
                <td><span class="tag primary">$alert-title-font-size</span></td>
                <td>
                  <span class="tag secondary">1rem</span>
                </td>
                <td><span class="tag warning"></span></td>
              </tr>
              <tr>
                <td><span class="tag primary">$alert-title-padding</span></td>
                <td>
                  <span class="tag secondary">15px 0</span>
                </td>
                <td><span class="tag warning"></span></td>
              </tr>
              <tr>
                <td><span class="tag primary">$alert-icon-font-size</span></td>
                <td>
                  <span class="tag secondary">1.25rem</span>
                </td>
                <td><span class="tag warning"></span></td>
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

const alertActive = ref(true);

const closeAlert = () => {
  alertActive.value = false;
};
</script>
