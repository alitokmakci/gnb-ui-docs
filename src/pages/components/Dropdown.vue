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
            <a class="link dark" href="#hoverable"> Hoverable </a>
          </li>
          <li>
            <a class="link dark" href="#right"> Right Align </a>
          </li>
          <li>
            <a class="link dark" href="#dropup"> DropUp </a>
          </li>
          <li>
            <a class="link dark" href="#caret"> Remove the Caret </a>
          </li>
          <li>
            <a class="link dark" href="#colors"> Colors </a>
          </li>
          <li>
            <a class="link dark" href="#flat"> Flat </a>
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
        <h1 class="title-5 fw-500">Dropdown</h1>
        <p class="subtitle">
          <b>GNB UI</b> provides simple and highly customizable dropdown
          components.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">To Import Dropdowns Separately:</h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/components/dropdown";'
        />
      </div>
    </section>

    <section class="section" id="default">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Default Dropdown</h2>
          <p class="fs-6">
            To use default dropdown component you have to add a few lines of
            javascript code. Add <code class="text-danger">.open</code> class to
            <code class="text-danger">.dropdown</code> element to open dropdown.
            Example javascript code given in the next section.
          </p>
        </div>

        <div class="mt-25 text-center">
          <div
            class="dropdown"
            id="default-dropdown"
            ref="dropdown"
            v-on-click-outside="closeDropdown"
          >
            <button
              class="btn primary no-float has-caret"
              @click="openDropdown"
            >
              Default Dropdown
            </button>
            <div class="dropdown-content">
              <div class="dropdown-menu">
                <h5 class="dropdown-title">Simple title</h5>
                <div class="dropdown-item">Item 1</div>
                <div class="dropdown-item">Item 2</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="dropdown" id="default-dropdown">
    <button class="btn primary no-float has-caret">
      Default Dropdown
    </button>
    <div class="dropdown-content">
      <div class="dropdown-menu">
        <h5 class="dropdown-title">Simple title</h5>
        <div class="dropdown-item">Item 1</div>
        <div class="dropdown-item">Item 2</div>
      </div>
    </div>
</div>
'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="example">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Dropdown Javascript Example</h2>
        </div>

        <div class="mt-25 text-center">
          <div
            class="dropdown"
            id="default-dropdown"
            ref="dropdown"
            v-on-click-outside="closeDropdown"
          >
            <button
              class="btn primary no-float has-caret"
              @click="openDropdown"
            >
              Default Dropdown
            </button>
            <div class="dropdown-content">
              <div class="dropdown-menu">
                <h5 class="dropdown-title">Simple title</h5>
                <div class="dropdown-item">Item 1</div>
                <div class="dropdown-item">Item 2</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="dropdown" id="default-dropdown">
    <button class="btn primary no-float has-caret">
      Default Dropdown
    </button>
    <div class="dropdown-content">
      <div class="dropdown-menu">
        <h5 class="dropdown-title">Simple title</h5>
        <div class="dropdown-item">Item 1</div>
        <div class="dropdown-item">Item 2</div>
      </div>
    </div>
</div>

// Javascript Code
const dropdown = document.querySelector("#default-dropdown"); // Select Dropdown Element
const dropdownButton = dropdown.querySelector("button"); // Select Dropdown Button

dropdownButton.addEventListener("click", () => {
  dropdown.classList.toggle("open") // Toggle Dropdown Class Open
}); // Add Event Listener to Dropdown Button to toggle Dropdown
'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="hoverable">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Hoverable Dropdown</h2>
          <p class="fs-6">
            The easiest way to create a hoverable dropdown is to add a
            <code class="text-danger">.hoverable</code> class to
            <code class="text-danger">.dropdown</code> element.
          </p>
        </div>

        <div class="mt-25 text-center">
          <div class="dropdown hoverable">
            <button class="btn primary no-float has-caret">
              Hoverable Dropdown
            </button>
            <div class="dropdown-content">
              <div class="dropdown-menu">
                <h5 class="dropdown-title">Simple title</h5>
                <div class="dropdown-item">Item 1</div>
                <div class="dropdown-item">Item 2</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="dropdown hoverable">
    <button class="btn primary no-float has-caret">
      Hoverable Dropdown
    </button>
    <div class="dropdown-content">
      <div class="dropdown-menu">
        <h5 class="dropdown-title">Simple title</h5>
        <div class="dropdown-item">Item 1</div>
        <div class="dropdown-item">Item 2</div>
      </div>
    </div>
</div>
'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="right">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Right Aligned Dropdown</h2>
          <p class="fs-6">
            If you want to align dropdown to the right, add a
            <code class="text-danger">.right</code> class to
            <code class="text-danger">.dropdown</code> element.
          </p>
        </div>

        <div class="mt-25 text-center">
          <div class="dropdown hoverable right">
            <button class="btn primary no-float has-caret">
              Right Dropdown
            </button>
            <div class="dropdown-content">
              <div class="dropdown-menu">
                <h5 class="dropdown-title">Simple title</h5>
                <div class="dropdown-item">Item 1</div>
                <div class="dropdown-item">Item 2</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="dropdown hoverable right">
    <button class="btn primary no-float has-caret">
      Hoverable Dropdown
    </button>
    <div class="dropdown-content">
      <div class="dropdown-menu">
        <h5 class="dropdown-title">Simple title</h5>
        <div class="dropdown-item">Item 1</div>
        <div class="dropdown-item">Item 2</div>
      </div>
    </div>
</div>
'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="dropup">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Dropup</h2>
          <p class="fs-6">
            To create a dropup, add a
            <code class="text-danger">.to-up</code> class to the dropdown.
          </p>
        </div>

        <div class="mt-25 text-center">
          <div class="dropdown to-up hoverable mr-10">
            <button class="btn primary no-float has-caret">Dropup Left</button>
            <div class="dropdown-content">
              <div class="dropdown-menu">
                <h5 class="dropdown-title">Simple title</h5>
                <div class="dropdown-item">Deneme</div>
                <div class="dropdown-item">Deneme</div>
              </div>
            </div>
          </div>

          <div class="dropdown to-up hoverable right">
            <button class="btn primary no-float has-caret">Dropup Right</button>
            <div class="dropdown-content">
              <div class="dropdown-menu">
                <h5 class="dropdown-title">Simple title</h5>
                <div class="dropdown-item">Deneme</div>
                <div class="dropdown-item">Deneme</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="dropdown to-up hoverable">
  <button class="btn primary no-float has-caret">Dropup Left</button>
  <div class="dropdown-content">
    <div class="dropdown-menu">
      <h5 class="dropdown-title">Simple title</h5>
      <div class="dropdown-item">Deneme</div>
      <div class="dropdown-item">Deneme</div>
    </div>
  </div>
</div>

<div class="dropdown to-up hoverable right">
  <button class="btn primary no-float has-caret">Dropup Right</button>
  <div class="dropdown-content">
    <div class="dropdown-menu">
      <h5 class="dropdown-title">Simple title</h5>
      <div class="dropdown-item">Deneme</div>
      <div class="dropdown-item">Deneme</div>
    </div>
  </div>
</div>
'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="caret">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Remove Carret</h2>
          <p class="fs-6">
            If you do not want to show the carret, remove the
            <code class="text-danger">.has-caret</code> class from the button.
          </p>
        </div>

        <div class="mt-25 text-center">
          <div class="dropdown hoverable">
            <button class="btn primary no-float">
              Dropdown Button Without Caret
            </button>
            <div class="dropdown-content">
              <div class="dropdown-menu">
                <h5 class="dropdown-title">Simple title</h5>
                <div class="dropdown-item">Item 1</div>
                <div class="dropdown-item">Item 2</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="dropdown hoverable">
    <button class="btn primary no-float has-caret">
      Hoverable Dropdown
    </button>
    <div class="dropdown-content">
      <div class="dropdown-menu">
        <h5 class="dropdown-title">Simple title</h5>
        <div class="dropdown-item">Item 1</div>
        <div class="dropdown-item">Item 2</div>
      </div>
    </div>
</div>
'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="colors">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Dropdown Colors</h2>
          <p class="fs-6">
            If you want to change the color of the dropdown background color,
            add a one of the color classes.
          </p>
        </div>

        <div class="mt-25 text-center">
          <div class="dropdown primary hoverable">
            <button class="btn primary no-float has-carret">
              Dropdown with Primary Background
            </button>
            <div class="dropdown-content">
              <div class="dropdown-menu">
                <h5 class="dropdown-title">Simple title</h5>
                <div class="dropdown-item">Item 1</div>
                <div class="dropdown-item">Item 2</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="dropdown primary hoverable">
  <button class="btn primary no-float has-carret">
    Dropdown with Primary Background
  </button>
  <div class="dropdown-content">
    <div class="dropdown-menu">
      <h5 class="dropdown-title">Simple title</h5>
      <div class="dropdown-item">Item 1</div>
      <div class="dropdown-item">Item 2</div>
    </div>
  </div>
</div>
'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="flat">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Dropdown Flat Colors</h2>
          <p class="fs-6">
            If you want to add flat color just add one of the color classes with
            <code class="text-danger">.flat</code> class to the dropdown.
          </p>
        </div>

        <div class="mt-25 text-center">
          <div class="dropdown primary flat hoverable">
            <button class="btn primary no-float has-carret">
              Dropdown with Primary Flat Background
            </button>
            <div class="dropdown-content">
              <div class="dropdown-menu">
                <h5 class="dropdown-title">Simple title</h5>
                <div class="dropdown-item">Item 1</div>
                <div class="dropdown-item">Item 2</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="dropdown primary flat hoverable">
  <button class="btn primary no-float has-carret">
    Dropdown with Primary Background
  </button>
  <div class="dropdown-content">
    <div class="dropdown-menu">
      <h5 class="dropdown-title">Simple title</h5>
      <div class="dropdown-item">Item 1</div>
      <div class="dropdown-item">Item 2</div>
    </div>
  </div>
</div>
'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="square">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Square Dropdown</h2>
          <p class="fs-6">
            To make the dropdown square, add the
            <code class="text-danger">.square</code> class to the dropdown.
          </p>
        </div>

        <div class="mt-25 text-center">
          <div class="dropdown square hoverable">
            <button class="btn primary no-float has-carret">
              Square Dropdown
            </button>
            <div class="dropdown-content">
              <div class="dropdown-menu">
                <h5 class="dropdown-title">Simple title</h5>
                <div class="dropdown-item">Item 1</div>
                <div class="dropdown-item">Item 2</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="dropdown square hoverable">
  <button class="btn primary no-float has-carret">
    Square Dropdown
  </button>
  <div class="dropdown-content">
    <div class="dropdown-menu">
      <h5 class="dropdown-title">Simple title</h5>
      <div class="dropdown-item">Item 1</div>
      <div class="dropdown-item">Item 2</div>
    </div>
  </div>
</div>
'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="variables">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Variables</h2>
          <p class="fs-6">
            To customize the dropdown component you can change the variables
            listed below.
          </p>
        </div>

        <variableTable :variables="variables" />
      </div>
    </section>
  </Layout>
</template>

<script setup>
import { ref } from "vue";
import Layout from "../../layout/Layout.vue";
import { vOnClickOutside } from "@vueuse/components";
import variableTable from "../../components/variableTable.vue";
const variables = [];

const dropdown = ref(null);

const openDropdown = () => {
  dropdown.value.classList.toggle("open");
};

const closeDropdown = () => {
  dropdown.value.classList.remove("open");
};
</script>
