<template>
  <div class="page-content">
    <div class="docs bg-gray-2">
      <slot />
    </div>
    <div class="content-navigation">
      <slot name="navigation" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PageContent",
};
</script>

<style>
.page-content {
  height: 100%;
  margin-left: 260px;
  position: relative;
}

.page-content h3 {
  font-weight: 600;
}

.content-navigation {
  position: fixed;
  top: 250px;
  right: 0;
  width: 200px;
}

.content-navigation ul li a {
  display: block;
  text-align: right;
  font-size: 0.85rem;
  padding: 3px 30px 3px 3px;
  position: relative;
}

.content-navigation ul li a:hover {
  color: #2c3e50;
}

.docs section {
  padding-right: 200px;
}

.docs-title {
  background: #eef2f5;
}

code {
  border-radius: 6px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.docs {
  height: 100%;
  overflow: auto;
  border-top-left-radius: 40px;
}

.content-navigation .card {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 20px;
  box-shadow: none;
  transform: none !important;
}

@media (max-width: 992px) {
	.page-content {
		margin-left: 0 !important;
	}

	.content-navigation {
		display: none;
	}

	.docs {
		border-top-left-radius: 0;
	}

	.docs section {
		padding-right: 1.5rem;
	}
}

@media (min-width: 768px) {
	.docs .section {
		padding-right: 200px;
	}

	.content-navigation {
		display: block;
	}
}
</style>
