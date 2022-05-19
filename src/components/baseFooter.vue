<template>
  <footer class="footer fs-5 flex align-center justify-center">
    <h1 class="fs-5">GNB UI by Ali TOKMAKCI.</h1>
    <span class="fw-200 ml-10">
      Source code licensed
      <a
        class="link primary mr-20"
        href="https://opensource.org/licenses/mit-license.php"
      >
        MIT
      </a>
    </span>
    <a
      class="twitter-follow-button"
      href="https://twitter.com/alitokmakci_"
      data-show-count="false"
      data-size="lg"
    >
      Follow @alitokmakci_</a
    >
  </footer>
</template>

<script setup>
import TwitterWidgetsLoader from "twitter-widgets";

import { onMounted } from "vue";

onMounted(() => {
  TwitterWidgetsLoader.load();
});
</script>
