<template>
  <Navbar :square="true" :shadow="false" />
  <div class="wrapper relative">
    <Sidebar />
    <PageContent>
      <slot />
      <template #navigation>
        <slot name="navigation" />
      </template>
      <BaseFooter />
    </PageContent>
  </div>
</template>

<script setup>
import Navbar from "../components/navbar.vue";
import Sidebar from "../components/sidebar.vue";
import PageContent from "../components/pageContent.vue";
import BaseFooter from "../components/baseFooter.vue";
</script>

<style>
.wrapper {
  height: calc(100vh - 50px);
  margin-top: 50px;
}

@media (max-width: 768px) {
  .page-content {
    margin-left: 50px;
  }
}
</style>
