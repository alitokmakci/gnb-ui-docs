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
            <a class="link dark" href="#flat"> Flat Colors </a>
          </li>
          <li>
            <a class="link dark" href="#scrollable"> Scrollable </a>
          </li>
          <li>
            <a class="link dark" href="#full-screen"> Full Screen </a>
          </li>
          <li>
            <a class="link dark" href="#without-padding"> Without Padding </a>
          </li>
          <li>
            <a class="link dark" href="#loading"> Loading </a>
          </li>
          <li>
            <a class="link dark" href="#blurred"> Blurred </a>
          </li>
          <li>
            <a class="link dark" href="#square"> Square </a>
          </li>
          <li>
            <a class="link dark" href="#prevent-close"> Prevent Close </a>
          </li>
          <li>
            <a class="link dark" href="#variables"> Variables </a>
          </li>
        </ul>
      </div>
    </template>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Modal</h1>
        <p class="subtitle">
          <b>GNB UI</b> has a modal component that can be used to display
          content in a modal window.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">To Import Modal Separately:</h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/components/modal";'
        />
      </div>
    </section>

    <section class="section" id="default">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Default Modal</h2>
          <p class="fs-6">
            The default modal is a simple modal window that can be used to
            display content in a modal window.
          </p>
          <small>*Example javascript code given in the next section.</small>
        </div>

        <div class="mt-25 text-center">
          <button class="btn primary" @click="defaultModal = true">
            Show Default Modal
          </button>
        </div>

        <div
          v-if="defaultModal"
          class="modal"
          id="default_modal"
          :class="{
            open: defaultModal,
          }"
        >
          <div
            class="modal-content"
            v-on-click-outside="
              () => {
                defaultModal = false;
              }
            "
          >
            <button class="close" @click="defaultModal = false"></button>
            <header class="modal-header">
              <h4>Default Modal</h4>
            </header>
            <div class="modal-body">
              <div class="form-element">
                <label class="label">Email:</label>
                <input type="text" class="input" placeholder="Email" />
              </div>
              <div class="form-element">
                <label class="label">Password:</label>
                <input type="text" class="input" placeholder="Password" />
              </div>
              <button class="btn primary block">Login Here</button>
            </div>
            <footer class="modal-footer text-center">
              <small>
                <a href="#">Create New Account</a>
              </small>
            </footer>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='
<div class="modal" id="default_modal">
    <div class="modal-content">
        <button class="close"></button>
        <header class="modal-header">
          <h4>Default Modal</h4>
        </header>
        <div class="modal-body">
            <div class="form-element">
                <label class="label">Email:</label>
                <input type="text" class="input" placeholder="Email" />
            </div>
            <div class="form-element">
                <label class="label">Password:</label>
                <input type="text" class="input" placeholder="Password" />
            </div>
            <button class="btn primary block">Login Here</button>
        </div>
        <footer class="modal-footer text-center">
            <small><a href="#">Create New Account</a> </small>
        </footer>
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
          <h2 class="mb-20">&bull; Modal Javascript Example</h2>
        </div>

        <div class="mt-25 text-center">
          <button class="btn primary" @click="defaultModal = true">
            Show Default Modal
          </button>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='
<div>
    <button id="default-modal-btn" class="btn primary">Toggle Modal</button>
</div>
<div class="modal" id="default_modal">
    <div class="modal-content">
        <button class="close"></button>
        <header class="modal-header">
          <h4>Default Modal</h4>
        </header>
        <div class="modal-body">
            <div class="form-element">
                <label class="label">Email:</label>
                <input type="text" class="input" placeholder="Email" />
            </div>
            <div class="form-element">
                <label class="label">Password:</label>
                <input type="text" class="input" placeholder="Password" />
            </div>
            <button class="btn primary block">Login Here</button>
        </div>
        <footer class="modal-footer text-center">
            <small><a href="#">Create New Account</a> </small>
        </footer>
    </div>
</div>

// Javascript Code
var modal = document.getElementById("default_modal"); // Get the modal
var btn = document.getElementById("default-modal-btn"); // Get the button that opens the modal

// When the user clicks the button, open the modal
btn.addEventListener("click", function() {
  modal.classList.add("open"); // Open the modal
});

// When the user clicks the close button on the modal, close it
modal.querySelector(".close").addEventListener("click", function() {
  modal.classList.remove("open"); // Close the modal
});

// When the user clicks anywhere outside of the modal, close it
modal.addEventListener("click", function(event) {
  if (event.target === modal) {
	modal.classList.remove("open"); // Close the modal
  }
});
'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="colors">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Modal with Colors</h2>
          <p class="fs-6">
            If you want to use a different color for the modal, you can use one
            of the color classes.
          </p>
        </div>

        <div class="mt-25 text-center">
          <button class="btn primary" @click="colorModal = true">
            Show Success Colored Modal
          </button>
        </div>

        <div
          v-if="colorModal"
          class="modal success"
          id="default_modal"
          :class="{
            open: colorModal,
          }"
        >
          <div
            class="modal-content"
            v-on-click-outside="
              () => {
                colorModal = false;
              }
            "
          >
            <button class="close" @click="colorModal = false"></button>
            <header class="modal-header">
              <h4>Success!</h4>
            </header>
            <div class="modal-body text-center">
              <i class="ri-check-line fs-1"></i>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='
<div class="modal success" id="success_modal">
    <div class="modal-content">
        <button class="close"></button>
        <header class="modal-header">
          <h4>Success!</h4>
        </header>
        <div class="modal-body text-center">
            <i class="ri-check-line fs-1"></i>
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
          <h2 class="mb-20">&bull; Modal with Flat Colors</h2>
          <p class="fs-6">
            If you want your modal looks like flat colored modal, you can use
            the <code class="text-danger">.flat</code> class with one of the
            color classes.
          </p>
        </div>

        <div class="mt-25 text-center">
          <button class="btn primary" @click="flatModal = true">
            Show Success Flat Colored Modal
          </button>
        </div>

        <div
          v-if="flatModal"
          class="modal success flat"
          id="default_modal"
          :class="{
            open: flatModal,
          }"
        >
          <div
            class="modal-content"
            v-on-click-outside="
              () => {
                flatModal = false;
              }
            "
          >
            <button class="close" @click="flatModal = false"></button>
            <header class="modal-header">
              <h4>Success with Flat Color!</h4>
            </header>
            <div class="modal-body text-center">
              <i class="ri-check-line fs-1"></i>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='
<div class="modal success flat" id="success_modal">
    <div class="modal-content">
        <button class="close"></button>
        <header class="modal-header">
          <h4>Success with Flat Color!</h4>
        </header>
        <div class="modal-body text-center">
            <i class="ri-check-line fs-1"></i>
        </div>
    </div>
</div>
'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="scrollable">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Scrollable Modal</h2>
          <p class="fs-6">
            To make the modal window scrollable, add the class
            <code class="text-danger">.scrollable</code> to the modal window.
          </p>
        </div>

        <div class="mt-25 text-center">
          <button class="btn primary" @click="scrollableModal = true">
            Show Scrollable Modal
          </button>
        </div>

        <div
          v-if="scrollableModal"
          class="modal scrollable"
          id="default_modal"
          :class="{
            open: scrollableModal,
          }"
        >
          <div
            class="modal-content"
            v-on-click-outside="
              () => {
                scrollableModal = false;
              }
            "
          >
            <button class="close" @click="scrollableModal = false"></button>
            <header class="modal-header">
              <h4>Scrollable Modal</h4>
            </header>
            <div class="modal-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                distinctio error fugit quos incidunt magni accusamus
                perspiciatis soluta fuga quisquam, dolorum impedit eos! Unde
                beatae ad similique temporibus quam nihil, ducimus rerum
                eveniet. Praesentium, est ullam distinctio animi similique
                molestiae quis quo dignissimos libero voluptatum fugiat
                doloribus. Eos, reiciendis ea.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                distinctio error fugit quos incidunt magni accusamus
                perspiciatis soluta fuga quisquam, dolorum impedit eos! Unde
                beatae ad similique temporibus quam nihil, ducimus rerum
                eveniet. Praesentium, est ullam distinctio animi similique
                molestiae quis quo dignissimos libero voluptatum fugiat
                doloribus. Eos, reiciendis ea.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                distinctio error fugit quos incidunt magni accusamus
                perspiciatis soluta fuga quisquam, dolorum impedit eos! Unde
                beatae ad similique temporibus quam nihil, ducimus rerum
                eveniet. Praesentium, est ullam distinctio animi similique
                molestiae quis quo dignissimos libero voluptatum fugiat
                doloribus. Eos, reiciendis ea.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                distinctio error fugit quos incidunt magni accusamus
                perspiciatis soluta fuga quisquam, dolorum impedit eos! Unde
                beatae ad similique temporibus quam nihil, ducimus rerum
                eveniet. Praesentium, est ullam distinctio animi similique
                molestiae quis quo dignissimos libero voluptatum fugiat
                doloribus. Eos, reiciendis ea.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                distinctio error fugit quos incidunt magni accusamus
                perspiciatis soluta fuga quisquam, dolorum impedit eos! Unde
                beatae ad similique temporibus quam nihil, ducimus rerum
                eveniet. Praesentium, est ullam distinctio animi similique
                molestiae quis quo dignissimos libero voluptatum fugiat
                doloribus. Eos, reiciendis ea.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                distinctio error fugit quos incidunt magni accusamus
                perspiciatis soluta fuga quisquam, dolorum impedit eos! Unde
                beatae ad similique temporibus quam nihil, ducimus rerum
                eveniet. Praesentium, est ullam distinctio animi similique
                molestiae quis quo dignissimos libero voluptatum fugiat
                doloribus. Eos, reiciendis ea.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                distinctio error fugit quos incidunt magni accusamus
                perspiciatis soluta fuga quisquam, dolorum impedit eos! Unde
                beatae ad similique temporibus quam nihil, ducimus rerum
                eveniet. Praesentium, est ullam distinctio animi similique
                molestiae quis quo dignissimos libero voluptatum fugiat
                doloribus. Eos, reiciendis ea.
              </p>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='
<div class="modal scrollable" id="scrollable_modal">
    <div class="modal-content">
        <button class="close"></button>
        <header class="modal-header">
          <h4>Scrollable Modal</h4>
        </header>
        <div class="modal-body">
            ...
        </div>
    </div>
</div>
'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="full-screen">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Full Screen Modal</h2>
          <p class="fs-6">
            Use the <code class="text-danger">.full-screen</code> class to make
            the modal window full screen.
          </p>
        </div>

        <div class="mt-25 text-center">
          <button class="btn primary" @click="fullScreenModal = true">
            Show Full Screen Modal
          </button>
        </div>

        <div
          v-if="fullScreenModal"
          class="modal full-screen"
          id="fullscreen_modal"
          :class="{
            open: fullScreenModal,
          }"
        >
          <div
            class="modal-content"
            v-on-click-outside="
              () => {
                fullScreenModal = false;
              }
            "
          >
            <button class="close" @click="fullScreenModal = false"></button>
            <header class="modal-header">
              <h4>Full Screen Modal</h4>
            </header>
            <div class="modal-body">
              <div class="form-element">
                <label class="label">Email:</label>
                <input type="text" class="input" placeholder="Email" />
              </div>
              <div class="form-element">
                <label class="label">Password:</label>
                <input type="text" class="input" placeholder="Password" />
              </div>
              <button class="btn primary block">Login Here</button>
            </div>
            <footer class="modal-footer text-center">
              <small>
                <a href="#">Create New Account</a>
              </small>
            </footer>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='
<div class="modal full-screen" id="fullscreen_modal">
    <div class="modal-content">
        <button class="close"></button>
        <header class="modal-header">
          <h4>Full Screen Modal</h4>
        </header>
        <div class="modal-body">
            <div class="form-element">
                <label class="label">Email:</label>
                <input type="text" class="input" placeholder="Email" />
            </div>
            <div class="form-element">
                <label class="label">Password:</label>
                <input type="text" class="input" placeholder="Password" />
            </div>
            <button class="btn primary block">Login Here</button>
        </div>
        <footer class="modal-footer text-center">
            <small><a href="#">Create New Account</a> </small>
        </footer>
    </div>
</div>
'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="without-padding">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Modal Without Padding</h2>
          <p class="fs-6">
            If you want to remove the padding from the modal window, use the
            <code class="text-danger">.no-padding</code> class to the modal
            element.
          </p>
        </div>

        <div class="mt-25 text-center">
          <button class="btn primary" @click="noPaddingModal = true">
            Show Modal Without Padding
          </button>
        </div>

        <div
          v-if="noPaddingModal"
          class="modal no-padding"
          id="default_modal"
          :class="{
            open: noPaddingModal,
          }"
        >
          <div
            class="modal-content"
            v-on-click-outside="
              () => {
                noPaddingModal = false;
              }
            "
          >
            <div class="modal-body">
              <figure class="figure size_1by1">
                <img src="../../assets/photo1.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='
<div class="modal no-padding" id="card_modal">
    <div class="modal-content">
        <div class="modal-body">
            <figure class="figure size_1by1">
                <img src="../../assets/photo1.jpg" alt="" />
            </figure>
        </div>
    </div>
</div>
'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="loading">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Loading Modal</h2>
          <p class="fs-6">
            Use the <code class="text-danger">.loading</code> class to make the
            modal window content looks loading.
          </p>
        </div>

        <div class="mt-25 text-center">
          <button class="btn primary" @click="loadingModal = true">
            Show Loading Modal
          </button>
        </div>

        <div
          v-if="loadingModal"
          class="modal loading"
          id="default_modal"
          :class="{
            open: loadingModal,
          }"
        >
          <div
            class="modal-content"
            v-on-click-outside="
              () => {
                loadingModal = false;
              }
            "
          >
            <button class="close" @click="loadingModal = false"></button>
            <header class="modal-header">
              <h4>Login Modal</h4>
            </header>
            <div class="modal-body">
              <div class="form-element">
                <label class="label">Email:</label>
                <input type="text" class="input" placeholder="Email" />
              </div>
              <div class="form-element">
                <label class="label">Password:</label>
                <input type="text" class="input" placeholder="Password" />
              </div>
              <button class="btn primary block">Login Here</button>
            </div>
            <footer class="modal-footer text-center">
              <small>
                <a href="#">Create New Account</a>
              </small>
            </footer>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='
<div class="modal loading" id="loading_modal">
    <div class="modal-content">
        <button class="close"></button>
        <header class="modal-header">
          <h4>Login Modal</h4>
        </header>
        <div class="modal-body">
            <div class="form-element">
                <label class="label">Email:</label>
                <input type="text" class="input" placeholder="Email" />
            </div>
            <div class="form-element">
                <label class="label">Password:</label>
                <input type="text" class="input" placeholder="Password" />
            </div>
            <button class="btn primary block">Login Here</button>
        </div>
        <footer class="modal-footer text-center">
            <small><a href="#">Create New Account</a> </small>
        </footer>
    </div>
</div>
'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="blurred">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Blurred Modal</h2>
          <p class="fs-6">
            Use the <code class="text-danger">.blurred</code> class to make the
            modal backdrop looks blurred.
          </p>
        </div>

        <div class="mt-25 text-center">
          <button class="btn primary" @click="blurredModal = true">
            Show Blurred Modal
          </button>
        </div>

        <div
          v-if="blurredModal"
          class="modal blurred"
          id="default_modal"
          :class="{
            open: blurredModal,
          }"
        >
          <div
            class="modal-content"
            v-on-click-outside="
              () => {
                blurredModal = false;
              }
            "
          >
            <button class="close" @click="blurredModal = false"></button>
            <header class="modal-header">
              <h4>Login Modal</h4>
            </header>
            <div class="modal-body">
              <div class="form-element">
                <label class="label">Email:</label>
                <input type="text" class="input" placeholder="Email" />
              </div>
              <div class="form-element">
                <label class="label">Password:</label>
                <input type="text" class="input" placeholder="Password" />
              </div>
              <button class="btn primary block">Login Here</button>
            </div>
            <footer class="modal-footer text-center">
              <small>
                <a href="#">Create New Account</a>
              </small>
            </footer>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='
<div class="modal blurred" id="blurred_modal">
    <div class="modal-content">
        <button class="close"></button>
        <header class="modal-header">
          <h4>Blurred Modal</h4>
        </header>
        <div class="modal-body">
            <div class="form-element">
                <label class="label">Email:</label>
                <input type="text" class="input" placeholder="Email" />
            </div>
            <div class="form-element">
                <label class="label">Password:</label>
                <input type="text" class="input" placeholder="Password" />
            </div>
            <button class="btn primary block">Login Here</button>
        </div>
        <footer class="modal-footer text-center">
            <small><a href="#">Create New Account</a> </small>
        </footer>
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
          <h2 class="mb-20">&bull; Square Modal</h2>
          <p class="fs-6">
            If you want to make the modal window looks square, use the
            <code class="text-danger">.square</code> class.
          </p>
        </div>

        <div class="mt-25 text-center">
          <button class="btn primary" @click="squareModal = true">
            Show Square Modal
          </button>
        </div>

        <div
          v-if="squareModal"
          class="modal square"
          id="default_modal"
          :class="{
            open: squareModal,
          }"
        >
          <div
            class="modal-content"
            v-on-click-outside="
              () => {
                squareModal = false;
              }
            "
          >
            <button class="close" @click="squareModal = false"></button>
            <header class="modal-header">
              <h4>Square Modal</h4>
            </header>
            <div class="modal-body">
              <div class="form-element">
                <label class="label">Email:</label>
                <input type="text" class="input" placeholder="Email" />
              </div>
              <div class="form-element">
                <label class="label">Password:</label>
                <input type="text" class="input" placeholder="Password" />
              </div>
              <button class="btn primary block">Login Here</button>
            </div>
            <footer class="modal-footer text-center">
              <small>
                <a href="#">Create New Account</a>
              </small>
            </footer>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='
<div class="modal square" id="square_modal">
    <div class="modal-content">
        <button class="close"></button>
        <header class="modal-header">
          <h4>Square Modal</h4>
        </header>
        <div class="modal-body">
            <div class="form-element">
                <label class="label">Email:</label>
                <input type="text" class="input" placeholder="Email" />
            </div>
            <div class="form-element">
                <label class="label">Password:</label>
                <input type="text" class="input" placeholder="Password" />
            </div>
            <button class="btn primary block">Login Here</button>
        </div>
        <footer class="modal-footer text-center">
            <small><a href="#">Create New Account</a> </small>
        </footer>
    </div>
</div>
'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="prevent-close">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Prevent Close</h2>
          <p class="fs-6">
            If you want to prevent the modal window from closing, use the
            <code class="text-danger">.prevent-close</code> class.
          </p>
        </div>

        <div class="mt-25 text-center">
          <button class="btn primary" @click="preventModal = true">
            Show Modal Prevent Close
          </button>
        </div>

        <div
          v-if="preventModal"
          class="modal prevent-close"
          id="default_modal"
          :class="{
            open: preventModal,
          }"
        >
          <div class="modal-content">
            <button class="close" @click="preventModal = false"></button>
            <header class="modal-header">
              <h4>Modal Prevented Close On Backdrop</h4>
            </header>
            <div class="modal-body text-center">
              Click to the backdrop and see the animation.
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='
<div class="modal prevent-close" id="modal_not_closing">
    <div class="modal-content">
        <button class="close"></button>
        <header class="modal-header">
            <h4>Modal Prevented Close On Backdrop</h4>
        </header>
        <div class="modal-body">
            Click the backdrop and see the animation.
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
            To customize the modal component you can change the variables listed
            below.
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

const defaultModal = ref(false);
const colorModal = ref(false);
const flatModal = ref(false);
const scrollableModal = ref(false);
const fullScreenModal = ref(false);
const noPaddingModal = ref(false);
const loadingModal = ref(false);
const blurredModal = ref(false);
const squareModal = ref(false);
const preventModal = ref(false);

const variables = [
  { name: "$modal-backdrop-color", value: "rgba(0, 0, 0, 0.2)", computed: "" },
  {
    name: "$modal-background-color",
    value: "$white",
    computed: "rgba(255, 255, 255)",
  },
  {
    name: "$modal-font-color",
    value: "$font-color",
    computed: "rgba(44, 62, 80)",
  },
  { name: "$modal-border-radius", value: "20px", computed: "" },
  { name: "$loading-modal-spinner-diameter", value: "50px", computed: "" },
  { name: "$loading-modal-spinner-width", value: "3px", computed: "" },
  {
    name: "$loading-modal-spinner-color",
    value: "$font-color",
    computed: "rgba(44, 62, 80)",
  },
  {
    name: "$modal-scrollbar-color",
    value: "$gray-1",
    computed: "rgb(230, 233, 234)",
  },
  { name: "$modal-fade-in-animation", value: "true", computed: "" },
];
</script>
