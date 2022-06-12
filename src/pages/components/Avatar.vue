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
            <a class="link dark" href="#circle"> Circle </a>
          </li>
          <li>
            <a class="link dark" href="#square"> Square </a>
          </li>
          <li>
            <a class="link dark" href="#image"> Image </a>
          </li>
          <li>
            <a class="link dark" href="#sizing"> Sizing </a>
          </li>
          <li>
            <a class="link dark" href="#badge"> Badge </a>
          </li>
          <li>
            <a class="link dark" href="#badge-colors"> Badge Colors </a>
          </li>
          <li>
            <a class="link dark" href="#badge-positions"> Badge Positions </a>
          </li>
          <li>
            <a class="link dark" href="#badge-content"> Badge Content </a>
          </li>
          <li>
            <a class="link dark" href="#variables">Variables</a>
          </li>
        </ul>
      </div>
    </template>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Avatar</h1>
        <p class="subtitle">
          Creating a colorful avatar with <b>GNB UI</b> is simple.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">To Import Avatars Separately:</h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/components/avatar";'
        />
      </div>
    </section>

    <section class="section" id="default">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Default Avatar</h2>
          <p class="fs-6">
            Add an avatar with <code class="text-danger">.avatar</code> class.
          </p>
        </div>

        <div class="mt-25 text-center">
          <div class="avatar">
            <span class="avatar-content">G</span>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="avatar">
    <span class="avatar-content">G</span>
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
            To make your avatar colored add one of the color classes.
          </p>
        </div>

        <div class="mt-25 text-center">
          <div class="avatar primary">
            <span class="avatar-content">G</span>
          </div>
          <div class="avatar secondary">
            <span class="avatar-content">G</span>
          </div>
          <div class="avatar success">
            <span class="avatar-content">G</span>
          </div>
          <div class="avatar info">
            <span class="avatar-content">G</span>
          </div>
          <div class="avatar warning">
            <span class="avatar-content">G</span>
          </div>
          <div class="avatar danger">
            <span class="avatar-content">G</span>
          </div>
          <div class="avatar dark">
            <span class="avatar-content">G</span>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="avatar primary">
    <span class="avatar-content">G</span>
</div>
<div class="avatar secondary">
    <span class="avatar-content">G</span>
</div>
<div class="avatar success">
    <span class="avatar-content">G</span>
</div>
<div class="avatar info">
    <span class="avatar-content">G</span>
</div>
<div class="avatar warning">
    <span class="avatar-content">G</span>
</div>
<div class="avatar danger">
    <span class="avatar-content">G</span>
</div>
<div class="avatar dark">
    <span class="avatar-content">G</span>
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="circle">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Circle</h2>
          <p class="fs-6">
            If you want your avatar to be a circle add the
            <code class="text-danger">.circle</code> class.
          </p>
        </div>

        <div class="mt-25 text-center">
          <div class="avatar primary circle">
            <span class="avatar-content">G</span>
          </div>
          <div class="avatar secondary circle">
            <span class="avatar-content">G</span>
          </div>
          <div class="avatar success circle">
            <span class="avatar-content">G</span>
          </div>
          <div class="avatar info circle">
            <span class="avatar-content">G</span>
          </div>
          <div class="avatar warning circle">
            <span class="avatar-content">G</span>
          </div>
          <div class="avatar danger circle">
            <span class="avatar-content">G</span>
          </div>
          <div class="avatar dark circle">
            <span class="avatar-content">G</span>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="avatar primary circle">
    <span class="avatar-content">G</span>
</div>
<div class="avatar secondary circle">
    <span class="avatar-content">G</span>
</div>
<div class="avatar success circle">
    <span class="avatar-content">G</span>
</div>
<div class="avatar info circle">
    <span class="avatar-content">G</span>
</div>
<div class="avatar warning circle">
    <span class="avatar-content">G</span>
</div>
<div class="avatar danger circle">
    <span class="avatar-content">G</span>
</div>
<div class="avatar dark circle">
    <span class="avatar-content">G</span>
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
            If you want your avatar to be a square shaped add the
            <code class="text-danger">.square</code> class.
          </p>
        </div>

        <div class="mt-25 text-center">
          <div class="avatar primary square">
            <span class="avatar-content">G</span>
          </div>
          <div class="avatar secondary square">
            <span class="avatar-content">G</span>
          </div>
          <div class="avatar success square">
            <span class="avatar-content">G</span>
          </div>
          <div class="avatar info square">
            <span class="avatar-content">G</span>
          </div>
          <div class="avatar warning square">
            <span class="avatar-content">G</span>
          </div>
          <div class="avatar danger square">
            <span class="avatar-content">G</span>
          </div>
          <div class="avatar dark square">
            <span class="avatar-content">G</span>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="avatar primary square">
    <span class="avatar-content">G</span>
</div>
<div class="avatar secondary square">
    <span class="avatar-content">G</span>
</div>
<div class="avatar success square">
    <span class="avatar-content">G</span>
</div>
<div class="avatar info square">
    <span class="avatar-content">G</span>
</div>
<div class="avatar warning square">
    <span class="avatar-content">G</span>
</div>
<div class="avatar danger square">
    <span class="avatar-content">G</span>
</div>
<div class="avatar dark square">
    <span class="avatar-content">G</span>
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="image">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Image</h2>
          <p class="fs-6">
            If you want to add an image to your avatar add the
            <code class="text-danger">img</code> element with a
            <code class="text-danger">.avatar-image</code> class inside the
            avatar.
          </p>
        </div>

        <div class="mt-25 text-center">
          <div class="avatar">
            <img class="avatar-image" src="../../assets/avatar.avif" />
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="avatar">
    <img class="avatar-image" src="image_url" />
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
            There are 5 different sizes for your avatar. You can use:
          </p>
          <ul class="text-danger fs-6">
            <li>.mini</li>
            <li>.sm</li>
            <li>.lg</li>
            <li>.xl</li>
          </ul>
        </div>

        <div class="mt-25 flex items-base justify-center">
          <div class="flex flex-column mr-30">
            Mini:
            <div class="avatar mini">
              <img class="avatar-image" src="../../assets/avatar.avif" />
            </div>
          </div>
          <div class="flex flex-column mr-30">
            Sm:
            <div class="avatar sm">
              <img class="avatar-image" src="../../assets/avatar.avif" />
            </div>
          </div>
          <div class="flex flex-column mr-30">
            Default:
            <div class="avatar">
              <img class="avatar-image" src="../../assets/avatar.avif" />
            </div>
          </div>
          <div class="flex flex-column mr-30">
            Lg:
            <div class="avatar lg">
              <img class="avatar-image" src="../../assets/avatar.avif" />
            </div>
          </div>
          <div class="flex flex-column">
            Xl:
            <div class="avatar xl">
              <img class="avatar-image" src="../../assets/avatar.avif" />
            </div>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="avatar mini">
    <img class="avatar-image" src="image_url" />
</div>
<div class="avatar sm">
    <img class="avatar-image" src="image_url" />
</div>
<div class="avatar">
    <img class="avatar-image" src="image_url" />
</div>
<div class="avatar lg">
    <img class="avatar-image" src="image_url" />
</div>
<div class="avatar xl">
    <img class="avatar-image" src="image_url" />
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="badge">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Badge</h2>
          <p class="fs-6">
            You can add a badge to your avatar with a single element with the
            <code class="text-danger">.avatar-badge</code> class.
          </p>
        </div>

        <div class="mt-25 text-center">
          <div class="avatar">
            <img class="avatar-image" src="../../assets/avatar.avif" />
            <span class="avatar-badge"></span>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="avatar">
    <img class="avatar-image" src="image_url" />
    <span class="avatar-badge"></span>
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="badge-colors">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Badge Colors</h2>
          <p class="fs-6">
            You can use one of the color classes to the
            <code class="text-danger">.avatar-badge</code> element.
          </p>
        </div>

        <div class="mt-25 text-center">
          <div class="avatar mr-30">
            <img class="avatar-image" src="../../assets/avatar.avif" />
            <span class="avatar-badge primary"></span>
          </div>
          <div class="avatar mr-30">
            <img class="avatar-image" src="../../assets/avatar.avif" />
            <span class="avatar-badge secondary"></span>
          </div>
          <div class="avatar mr-30">
            <img class="avatar-image" src="../../assets/avatar.avif" />
            <span class="avatar-badge success"></span>
          </div>
          <div class="avatar mr-30">
            <img class="avatar-image" src="../../assets/avatar.avif" />
            <span class="avatar-badge info"></span>
          </div>
          <div class="avatar mr-30">
            <img class="avatar-image" src="../../assets/avatar.avif" />
            <span class="avatar-badge warning"></span>
          </div>
          <div class="avatar mr-30">
            <img class="avatar-image" src="../../assets/avatar.avif" />
            <span class="avatar-badge danger"></span>
          </div>
          <div class="avatar">
            <img class="avatar-image" src="../../assets/avatar.avif" />
            <span class="avatar-badge dark"></span>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="avatar">
    <img class="avatar-image" src="image_url" />
    <span class="avatar-badge primary"></span>
</div>
<div class="avatar">
    <img class="avatar-image" src="image_url" />
    <span class="avatar-badge secondary"></span>
</div>
<div class="avatar">
    <img class="avatar-image" src="image_url" />
    <span class="avatar-badge success"></span>
</div>
<div class="avatar">
    <img class="avatar-image" src="image_url" />
    <span class="avatar-badge info"></span>
</div>
<div class="avatar">
    <img class="avatar-image" src="image_url" />
    <span class="avatar-badge warning"></span>
</div>
<div class="avatar">
    <img class="avatar-image" src="image_url" />
    <span class="avatar-badge danger"></span>
</div>
<div class="avatar">
    <img class="avatar-image" src="image_url" />
    <span class="avatar-badge dark"></span>
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="badge-positions">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Badge Positions</h2>
          <p class="fs-6">
            Positioning badge on the avatar is done with the following classes:
          </p>
          <ul class="fs-6 text-danger">
            <li>.top-left</li>
            <li>.bottom-left</li>
            <li>.bottom-right</li>
          </ul>
          <small> *Default position of the badge is top right corner. </small>
        </div>

        <div class="mt-25 text-center">
          <div class="avatar mr-30">
            <img class="avatar-image" src="../../assets/avatar.avif" />
            <span class="avatar-badge primary top-left"></span>
          </div>
          <div class="avatar mr-30">
            <img class="avatar-image" src="../../assets/avatar.avif" />
            <span class="avatar-badge secondary bottom-left"></span>
          </div>
          <div class="avatar mr-30">
            <img class="avatar-image" src="../../assets/avatar.avif" />
            <span class="avatar-badge success bottom-right"></span>
          </div>
          <div class="avatar mr-30">
            <img class="avatar-image" src="../../assets/avatar.avif" />
            <span class="avatar-badge info"></span>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="avatar">
    <img class="avatar-image" src="image_url" />
    <span class="avatar-badge primary top-left"></span>
</div>
<div class="avatar">
    <img class="avatar-image" src="image_url" />
    <span class="avatar-badge secondary bottom-left"></span>
</div>
<div class="avatar">
    <img class="avatar-image" src="image_url" />
    <span class="avatar-badge success bottom-right"></span>
</div>
<div class="avatar">
    <img class="avatar-image" src="image_url" />
    <span class="avatar-badge info"></span>
</div>'
          ></highlightjs>
        </div>
      </div>
    </section>

    <section class="section" id="badge-content">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Badge Content</h2>
          <p class="fs-6">
            If you want to add any content to the badge, you can add
            <code class="tex">.has-content</code> class to the badge element.
          </p>
        </div>

        <div class="mt-25 text-center">
          <div class="avatar">
            <img class="avatar-image" src="../../assets/avatar.avif" />
            <span class="avatar-badge primary has-content">4</span>
          </div>
          <div class="avatar">
            <img class="avatar-image" src="../../assets/avatar.avif" />
            <span class="avatar-badge success bottom-right has-content"
              >Online</span
            >
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="avatar">
    <img class="avatar-image" src="image_url" />
    <span class="avatar-badge primary has-content">4</span>
</div>
<div class="avatar">
    <img class="avatar-image" src="image_url" />
    <span class="avatar-badge success bottom-right has-content">Online</span>
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
            To customize the avatar component you can change the variables
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
    name: "$avatar-font-color: <span class='tag success'>since 0.2.1</span>",
    value: "$font-color",
    computed: "rgba(44, 62, 80)",
  },
  {
    name: "$avatar-background-color <span class='tag success'>since 0.2.1</span>",
    value: "$white",
    computed: "rgba(255, 255, 255)",
  },
  {
    name: "$avatar-width <span class='tag success'>since 0.2.1</span>",
    value: "50px",
    computed: "",
  },
  {
    name: "$avatar-height <span class='tag success'>since 0.2.1</span>",
    value: "$avatar-width",
    computed: "50px",
  },
  {
    name: "$avatar-border-radius <span class='tag success'>since 0.2.1</span>",
    value: "35%",
    computed: "",
  },
  {
    name: "$avatar-content-font-weight <span class='tag success'>since 0.2.1</span>",
    value: "500",
    computed: "",
  },
  {
    name: "$avatar-content-border-radius <span class='tag success'>since 0.2.1</span>",
    value: "7px",
    computed: "",
  },
  {
    name: "$avatar-content-min-width <span class='tag success'>since 0.2.1</span>",
    value: "18px",
    computed: "",
  },
  {
    name: "$avatar-content-min-height <span class='tag success'>since 0.2.1</span>",
    value: "$avatar-content-min-width",
    computed: "18px",
  },
  {
    name: "$avatar-badge-width <span class='tag success'>since 0.2.1</span>",
    value: "13px",
    computed: "",
  },
  {
    name: "$avatar-badge-height <span class='tag success'>since 0.2.1</span>",
    value: "$avatar-badge-width",
    computed: "13px",
  },
  {
    name: "$avatar-badge-background-color <span class='tag success'>since 0.2.1</span>",
    value: "$gray-1",
    computed: "rgb(230, 233, 234)",
  },
  {
    name: "$avatar-badge-width-z-index <span class='tag success'>since 0.2.1</span>",
    value: "200",
    computed: "",
  },
  {
    name: "$avatar-badge-font-size <span class='tag success'>since 0.2.1</span>",
    value: "0.6rem",
    computed: "",
  },
  {
    name: "$avatar-badge-font-weight <span class='tag success'>since 0.2.1</span>",
    value: "700",
    computed: "",
  },
  {
    name: "$avatar-badge-font-color <span class='tag success'>since 0.2.1</span>",
    value: "$font-color",
    computed: "rgba(44, 62, 80)",
  },
  {
    name: "$avatar-badge-border-width <span class='tag success'>since 0.2.1</span>",
    value: "2px",
    computed: "",
  },
  {
    name: "$avatar-badge-border-colo <span class='tag success'>since 0.2.1</span>",
    value: "$white",
    computed: "rgba(255, 255, 255)",
  },
  {
    name: "$mini-avatar-width <span class='tag success'>since 0.2.1</span>",
    value: "30px",
    computed: "",
  },
  {
    name: "$mini-avatar-height <span class='tag success'>since 0.2.1</span>",
    value: "$mini-avatar-width",
    computed: "30px",
  },
  {
    name: "$mini-avatar-font-size <span class='tag success'>since 0.2.1</span>",
    value: "0.7rem",
    computed: "",
  },
  {
    name: "$sm-avatar-width <span class='tag success'>since 0.2.1</span>",
    value: "40px",
    computed: "",
  },
  {
    name: "$sm-avatar-height <span class='tag success'>since 0.2.1</span>",
    value: "$sm-avatar-width",
    computed: "40px",
  },
  {
    name: "$sm-avatar-font-size <span class='tag success'>since 0.2.1</span>",
    value: "0.8rem",
    computed: "",
  },
  {
    name: "$lg-avatar-width <span class='tag success'>since 0.2.1</span>",
    value: "60px",
    computed: "",
  },
  {
    name: "$lg-avatar-height <span class='tag success'>since 0.2.1</span>",
    value: "$lg-avatar-width",
    computed: "60px",
  },
  {
    name: "$lg-avatar-font-size <span class='tag success'>since 0.2.1</span>",
    value: "1.5rem",
    computed: "",
  },
  {
    name: "$xl-avatar-width <span class='tag success'>since 0.2.1</span>",
    value: "70px",
    computed: "",
  },
  {
    name: "$xl-avatar-height <span class='tag success'>since 0.2.1</span>",
    value: "$xl-avatar-width",
    computed: "70px",
  },
  {
    name: "$xl-avatar-font-size <span class='tag success'>since 0.2.1</span>",
    value: "2rem",
    computed: "",
  },
];
</script>
