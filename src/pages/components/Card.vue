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
            <a class="link dark" href="#type-2"> Type 2 </a>
          </li>
          <li>
            <a class="link dark" href="#type-3"> Type 3 </a>
          </li>
          <li>
            <a class="link dark" href="#type-4"> Type 4 </a>
          </li>
          <li>
            <a class="link dark" href="#type-5"> Type 5 </a>
          </li>
          <li>
            <a class="link dark" href="#interactions"> Card Interactions </a>
          </li>
          <li>
            <a class="link dark" href="#variables"> Variables </a>
          </li>
        </ul>
      </div>
    </template>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Card</h1>
        <p class="subtitle">
          <b>GNB UI</b> has 5 different types of elegant cards.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">To Import Cards Separately:</h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/components/card";'
        />
      </div>
    </section>

    <section class="section" id="default">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Default Card</h2>
        </div>

        <div class="mt-25">
          <div class="flex justify-center">
            <div class="card" style="width: 300px">
              <div class="card-img">
                <img src="../../assets/photo1.jpg" alt="" />
                <div class="card-interactions">
                  <button class="btn danger icon">
                    <i class="ri-heart-line"></i>
                  </button>
                  <button class="btn icon ml-5">
                    <i class="ri-message-3-line"></i>
                    <span class="ml-5">60</span>
                  </button>
                </div>
              </div>
              <div class="card-content">
                <h5 class="card-title">Default Card Design</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, ducimus?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="card" style="width: 300px">
  <div class="card-img">
    <img src="../../assets/photo1.jpg" alt="" />
    <div class="card-interactions">
      <button class="btn danger icon">
        <i class="ri-heart-line"></i>
      </button>
      <button class="btn icon ml-5">
        <i class="ri-message-3-line"></i>
        <span class="ml-5">60</span>
      </button>
    </div>
  </div>
  <div class="card-content">
    <h5 class="card-title">Default Card Design</h5>
    <p class="card-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Doloribus, ducimus?
    </p>
  </div>
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="type-2">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Card Type-2</h2>
          <p class="fs-6">
            To use card type-2 you need to add
            <code class="text-danger">.type-2</code> class to the card.
          </p>
        </div>

        <div class="mt-25">
          <div class="flex justify-center">
            <div class="card type-2" style="width: 300px">
              <div class="card-img">
                <img src="../../assets/photo1.jpg" alt="" />
                <div class="card-interactions top-left">
                  <button class="btn danger icon">
                    <i class="ri-heart-line"></i>
                  </button>
                  <button class="btn icon ml-5">
                    <i class="ri-message-3-line"></i>
                    <span class="ml-5">60</span>
                  </button>
                </div>
              </div>
              <div class="card-content">
                <h5 class="card-title">Default Card Design</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, ducimus?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="card type-2" style="width: 300px">
  <div class="card-img">
    <img src="../../assets/photo1.jpg" alt="" />
    <div class="card-interactions top-left">
      <button class="btn danger icon">
        <i class="ri-heart-line"></i>
      </button>
      <button class="btn icon ml-5">
        <i class="ri-message-3-line"></i>
        <span class="ml-5">60</span>
      </button>
    </div>
  </div>
  <div class="card-content">
    <h5 class="card-title">Default Card Design</h5>
    <p class="card-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Doloribus, ducimus?
    </p>
  </div>
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="type-3">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Card Type-3</h2>
          <p class="fs-6">
            To use card type-3 you need to add
            <code class="text-danger">.type-3</code> class to the card.
          </p>
        </div>

        <div class="mt-25">
          <div class="flex justify-center">
            <div class="card type-3" style="width: 600px">
              <div class="card-img">
                <img src="../../assets/photo1.jpg" alt="" />
                <div class="card-interactions top-left">
                  <button class="btn danger icon">
                    <i class="ri-heart-line"></i>
                  </button>
                  <button class="btn icon ml-5">
                    <i class="ri-message-3-line"></i>
                    <span class="ml-5">60</span>
                  </button>
                </div>
              </div>
              <div class="card-content">
                <h5 class="card-title">Default Card Design</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, ducimus?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="card type-3" style="width: 300px">
  <div class="card-img">
    <img src="../../assets/photo1.jpg" alt="" />
    <div class="card-interactions top-left">
      <button class="btn danger icon">
        <i class="ri-heart-line"></i>
      </button>
      <button class="btn icon ml-5">
        <i class="ri-message-3-line"></i>
        <span class="ml-5">60</span>
      </button>
    </div>
  </div>
  <div class="card-content">
    <h5 class="card-title">Default Card Design</h5>
    <p class="card-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Doloribus, ducimus?
    </p>
  </div>
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="type-4">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Card Type-4</h2>
          <p class="fs-6">
            To use card type-4 you need to add
            <code class="text-danger">.type-4</code> class to the card.
          </p>
        </div>

        <div class="mt-25">
          <div class="flex justify-center">
            <div class="card type-4" style="width: 300px">
              <div class="card-img">
                <img src="../../assets/photo3.jpg" alt="" />
                <div class="card-interactions top-right">
                  <button class="btn danger icon">
                    <i class="ri-heart-line"></i>
                  </button>
                  <button class="btn icon ml-5">
                    <i class="ri-message-3-line"></i>
                    <span class="ml-5">60</span>
                  </button>
                </div>
              </div>
              <div class="card-content">
                <h5 class="card-title">Default Card Design</h5>
                <p class="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="card type-4" style="width: 300px">
  <div class="card-img">
    <img src="../../assets/photo1.jpg" alt="" />
    <div class="card-interactions top-left">
      <button class="btn danger icon">
        <i class="ri-heart-line"></i>
      </button>
      <button class="btn icon ml-5">
        <i class="ri-message-3-line"></i>
        <span class="ml-5">60</span>
      </button>
    </div>
  </div>
  <div class="card-content">
    <h5 class="card-title">Default Card Design</h5>
    <p class="card-text">
      Lorem ipsum dolor sit amet.
    </p>
  </div>
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="type-5">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Card Type-5</h2>
          <p class="fs-6">
            To use card type-5 you need to add
            <code class="text-danger">.type-5</code> class to the card.
          </p>
        </div>

        <div class="mt-25">
          <div class="flex justify-center">
            <div class="card type-5" style="width: 300px">
              <div class="card-img">
                <img src="../../assets/photo3.jpg" alt="" />
                <div class="card-interactions top-right">
                  <button class="btn danger icon">
                    <i class="ri-heart-line"></i>
                  </button>
                  <button class="btn icon ml-5">
                    <i class="ri-message-3-line"></i>
                    <span class="ml-5">60</span>
                  </button>
                </div>
              </div>
              <div class="card-content">
                <h5 class="card-title">Default Card Design</h5>
                <p class="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="card type-5" style="width: 300px">
  <div class="card-img">
    <img src="../../assets/photo1.jpg" alt="" />
    <div class="card-interactions top-left">
      <button class="btn danger icon">
        <i class="ri-heart-line"></i>
      </button>
      <button class="btn icon ml-5">
        <i class="ri-message-3-line"></i>
        <span class="ml-5">60</span>
      </button>
    </div>
  </div>
  <div class="card-content">
    <h5 class="card-title">Default Card Design</h5>
    <p class="card-text">
      Lorem ipsum dolor sit amet.
    </p>
  </div>
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="interactions">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Card Interactions</h2>
          <p class="fs-6">
            If you want to specify position of
            <code class="text-danger">.card-interactions</code> div you can use
            one of the classes: <br />
            <code class="text-danger">.top-left</code>, <br />
            <code class="text-danger">.top-right</code>, <br />
            <code class="text-danger">.bottom-right</code>. <br />
            Default position of the
            <code class="text-danger">.card-interactions</code> is bottom left.
            You dont need to add any class to position bottom left.
          </p>
        </div>

        <div class="mt-25">
          <div class="flex justify-center wrap">
            <div class="card mr-10 mb-10" style="width: 300px">
              <div class="card-img">
                <img src="../../assets/photo1.jpg" alt="" />
                <div class="card-interactions">
                  <button class="btn danger icon">
                    <i class="ri-heart-line"></i>
                  </button>
                  <button class="btn icon ml-5">
                    <i class="ri-message-3-line"></i>
                    <span class="ml-5">60</span>
                  </button>
                </div>
              </div>
              <div class="card-content">
                <h5 class="card-title">Default Card Design</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, ducimus?
                </p>
              </div>
            </div>
            <div class="card mr-10 mb-10" style="width: 300px">
              <div class="card-img">
                <img src="../../assets/photo1.jpg" alt="" />
                <div class="card-interactions bottom-right">
                  <button class="btn danger icon">
                    <i class="ri-heart-line"></i>
                  </button>
                  <button class="btn icon ml-5">
                    <i class="ri-message-3-line"></i>
                    <span class="ml-5">60</span>
                  </button>
                </div>
              </div>
              <div class="card-content">
                <h5 class="card-title">Default Card Design</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, ducimus?
                </p>
              </div>
            </div>
            <div class="card mr-10 mb-10" style="width: 300px">
              <div class="card-img">
                <img src="../../assets/photo1.jpg" alt="" />
                <div class="card-interactions top-right">
                  <button class="btn danger icon">
                    <i class="ri-heart-line"></i>
                  </button>
                  <button class="btn icon ml-5">
                    <i class="ri-message-3-line"></i>
                    <span class="ml-5">60</span>
                  </button>
                </div>
              </div>
              <div class="card-content">
                <h5 class="card-title">Default Card Design</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, ducimus?
                </p>
              </div>
            </div>
            <div class="card" style="width: 300px">
              <div class="card-img">
                <img src="../../assets/photo1.jpg" alt="" />
                <div class="card-interactions top-left">
                  <button class="btn danger icon">
                    <i class="ri-heart-line"></i>
                  </button>
                  <button class="btn icon ml-5">
                    <i class="ri-message-3-line"></i>
                    <span class="ml-5">60</span>
                  </button>
                </div>
              </div>
              <div class="card-content">
                <h5 class="card-title">Default Card Design</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, ducimus?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="card" style="width: 300px">
  <div class="card-img">
    <img src="../../assets/photo1.jpg" alt="" />
    <div class="card-interactions">
      <button class="btn danger icon">
        <i class="ri-heart-line"></i>
      </button>
      <button class="btn icon ml-5">
        <i class="ri-message-3-line"></i>
        <span class="ml-5">60</span>
      </button>
    </div>
  </div>
  <div class="card-content">
    <h5 class="card-title">Default Card Design</h5>
    <p class="card-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Doloribus, ducimus?
    </p>
  </div>
</div>

<div class="card" style="width: 300px">
  <div class="card-img">
    <img src="../../assets/photo1.jpg" alt="" />
    <div class="card-interactions bottom-right">
      <button class="btn danger icon">
        <i class="ri-heart-line"></i>
      </button>
      <button class="btn icon ml-5">
        <i class="ri-message-3-line"></i>
        <span class="ml-5">60</span>
      </button>
    </div>
  </div>
  <div class="card-content">
    <h5 class="card-title">Default Card Design</h5>
    <p class="card-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Doloribus, ducimus?
    </p>
  </div>
</div>

<div class="card" style="width: 300px">
  <div class="card-img">
    <img src="../../assets/photo1.jpg" alt="" />
    <div class="card-interactions top-right">
      <button class="btn danger icon">
        <i class="ri-heart-line"></i>
      </button>
      <button class="btn icon ml-5">
        <i class="ri-message-3-line"></i>
        <span class="ml-5">60</span>
      </button>
    </div>
  </div>
  <div class="card-content">
    <h5 class="card-title">Default Card Design</h5>
    <p class="card-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Doloribus, ducimus?
    </p>
  </div>
</div>

<div class="card" style="width: 300px">
  <div class="card-img">
    <img src="../../assets/photo1.jpg" alt="" />
    <div class="card-interactions top-left">
      <button class="btn danger icon">
        <i class="ri-heart-line"></i>
      </button>
      <button class="btn icon ml-5">
        <i class="ri-message-3-line"></i>
        <span class="ml-5">60</span>
      </button>
    </div>
  </div>
  <div class="card-content">
    <h5 class="card-title">Default Card Design</h5>
    <p class="card-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Doloribus, ducimus?
    </p>
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
            To customize the card component you change the variables listed
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
const variables = [];
</script>
