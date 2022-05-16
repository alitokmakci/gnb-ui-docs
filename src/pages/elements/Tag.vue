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
				<h1 class="title-5 fw-500">Tag</h1>
				<p class="subtitle">
					<b>GNB UI</b> provides a simple, flexible and good looking tag element.
				</p>
			</div>
		</section>

		<section class="section">
			<div class="container">
				<h5 class="mb-20">To Import Tables Separately:</h5>
				<highlightjs
					autodetect
					code='@import "../../node_modules/gnb-ui/src/elements/tag";'
				/>
			</div>
		</section>

		<section class="section" id="default">
			<div class="container">
				<div>
					<h2 class="mb-20">&bull; Default Table</h2>
					<p class="fs-6">
						Default table has no background color or border and it is the most
						basic table we have.
					</p>
				</div>

				<div class="text-center mt-25 bg-white p-30 border-radius-2">
					<table class="table">
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

				<div class="mt-25">
					<p>HTML:</p>
					<highlightjs
						autodetect
						code='<table class="table">
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
</table>'
					/>
				</div>
			</div>
		</section>
	</Layout>
</template>

<script setup>
import Layout from "../../layout/Layout.vue";
</script>
