<template>
	<div class="h-screen w-screen flex align-center justify-center flex-column">
		<div  style="height: 500px; width: 500px">
			<figure class="figure size-1by1">
				<img src="../assets/maintenance.jpg" alt="404">
			</figure>
		</div>
		<h1 class="title-2 mb-50 text-center">This page of documentation is under maintenance.</h1>
		<button class="btn primary xl fw-600" @click="$router.back()">Go back</button>
	</div>
</template>

<script>
export default {
	name: '404'
}
</script>

<style scoped>

</style>
