<template>
	<Layout>
		<section class="section docs-title">
			<div class="container">
				<h1 class="title-5 fw-500">Elements</h1>
				<p class="subtitle">
					<b>GNB UI</b> has a set of beautiful elements that can be used in your application.
				</p>
			</div>
		</section>

		<section class="section" id="default">
			<div class="container">
				<div class="row">
					<div class="column size-12 md-size-6 mb-30">
						<div class="card p-20 h-100">
							<router-link to="/elements/button" class="btn link">
								<h2>Button:</h2>
							</router-link>
							<div class="mt-20">
								<button class="btn primary m-10">Primary</button>
								<button class="btn secondary m-10">Secondary</button>
								<button class="btn success flat m-10">Success</button>
								<button class="btn info flat square m-10">Info</button>
								<button class="btn warning flat square m-10">Warning</button>
								<button class="btn warning flat bordered m-10">Warning</button>
								<button class="btn danger square bordered m-10">Danger</button>
								<button class="btn danger pill m-10">Danger</button>
								<button class="btn dark flat pill m-10">Dark</button>
								<button class="btn success link m-10">Success</button>
								<button class="btn info link m-10">Info</button>
								<button class="btn secondary loading m-10">Secondary</button>
								<button class="btn success loading m-10">Success</button>
								<div class="btn-group m-10">
									<button class="btn primary">First Button</button>
									<button class="btn primary">Second Button</button>
									<button class="btn primary">Third Button</button>
								</div>
							</div>
						</div>
					</div>
					<div class="column size-12 md-size-6 mb-30">
						<div class="card p-20 h-100">
							<router-link to="/elements/image" class="btn link">
								<h2>Image:</h2>
							</router-link>
							<div class="mt-20 flex align-center justify-around">
								<figure class="figure">
									<img
										class="rounded"
										src="https://via.placeholder.com/128?text=rounded"
										alt=""
									/>
								</figure>
								<figure class="figure">
									<img
										class="circle"
										src="https://via.placeholder.com/128?text=circle"
										alt=""
									/>
								</figure>
							</div>
						</div>
					</div>
					<div class="column size-12 md-size-6 mb-30">
						<div class="card p-20 h-100">
							<router-link to="/elements/progressbar" class="btn link">
								<h2>Progressbar:</h2>
							</router-link>
							<div class="mt-20">
								<div class="progress secondary">
									<div class="progressbar" style="width: 60%"></div>
								</div>
								<div class="progress warning">
									<div class="progressbar" style="width: 95%"></div>
								</div>
								<div class="progress primary infinite">
									<div class="progressbar" style="width: 85%"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="column size-12 md-size-6 mb-30">
						<div class="card p-20 h-100">
							<router-link to="/elements/table" class="btn link">
								<h2>Table:</h2>
							</router-link>
							<div class="mt-20">
								<div class="has-table">
									<table class="table primary striped">
										<thead>
										<tr>
											<th>Company</th>
											<th>Contact</th>
											<th>Country</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td>Alfreds Futterkiste</td>
											<td>Maria Anders</td>
											<td>Germany</td>
										</tr>
										<tr>
											<td>Centro comercial</td>
											<td>Francisco Chang</td>
											<td>Mexico</td>
										</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div class="column size-12 md-size-6 mb-30">
						<div class="card p-20 h-100">
							<router-link to="/elements/tag" class="btn link">
								<h2>Tag:</h2>
							</router-link>
							<div class="mt-20">
								<span class="tag primary m-10">Primary Tag</span>
								<span class="tag secondary m-10">Secondary Tag</span>
								<span class="tag success m-10">Success Tag</span>
								<span class="tag info flat m-10">Info Tag</span>
								<span class="tag warning flat m-10">Warning Tag</span>
								<span class="tag danger flat m-10">Danger Tag</span>
								<span class="tag primary m-10">
						            Primary Tag
						            <button class="close"></button>
								</span>
								<span class="tag secondary flat m-10">
									Secondary Tag
						            <button class="close"></button>
								</span>
								<div class="tag-group m-10">
									<span class="tag primary"> Primary Tag </span>
									<span class="tag secondary"> Secondary Tag </span>
									<span class="tag success"> Success Tag </span>
								</div>
							</div>
						</div>
					</div>
					<div class="column size-12 md-size-6 mb-30">
						<div class="card p-20 h-100">
							<router-link to="/elements/tooltip" class="btn link">
								<h2>Tooltip:</h2>
							</router-link>
							<div class="mt-20">
								<button class="btn primary no-float has-tooltip m-50">
									Hover me
									<div class="tooltip always-active">This is a simple tooltip</div>
								</button>

								<button class="btn primary no-float has-tooltip m-50">
									Hover me
									<div class="tooltip primary always-active">This is a simple tooltip</div>
								</button>

								<button class="btn secondary no-float has-tooltip m-50">
									Hover me
									<div class="tooltip secondary flat always-active">This is a simple tooltip</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
</template>

<script setup>
import Layout from "../../layout/layout.vue";
</script>

<style scoped>
.docs-title, .docs .section {
	padding-right: 1.5rem !important;
}

</style>
