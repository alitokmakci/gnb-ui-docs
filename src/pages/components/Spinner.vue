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
				<h1 class="title-5 fw-500">Spinner</h1>
				<p class="subtitle">
					Creating a colorful spinner with <b>GNB UI</b> is very easy.
				</p>
			</div>
		</section>

		<section class="section">
			<div class="container">
				<h5 class="mb-20">To Import Spinners Separately:</h5>
				<highlightjs
					autodetect
					code='@import "../../node_modules/gnb-ui/src/components/spinner";'
				/>
			</div>
		</section>

		<section class="section" id="default">
			<div class="container">
				<div>
					<h2 class="mb-20">&bull; Default Spinner</h2>
					<p class="fs-6">
						Add an spinner with
						<code class="text-danger">.spinner</code> class.
					</p>
				</div>

				<div class="mt-25 flex justify-center bg-primary">
					<span class="spinner"></span>
				</div>

				<div class="mt-25">
					<p>HTML:</p>
					<highlightjs
						autodetect
						code='<span class="spinner"></span>'
					></highlightjs>
				</div>
			</div>
		</section>

		<section class="section" id="colors">
			<div class="container">
				<div>
					<h2 class="mb-20">&bull; Colors</h2>
					<p class="fs-6">
						Add an color class to
						<code class="text-danger">.spinner</code> component.
					</p>
				</div>

				<div class="mt-25 flex justify-center items-center wrap">
					<span class="spinner primary mr-10"></span>
					<span class="spinner secondary mr-10"></span>
					<span class="spinner success mr-10"></span>
					<span class="spinner info mr-10"></span>
					<span class="spinner warning mr-10"></span>
					<span class="spinner danger mr-10"></span>
					<span class="spinner dark"></span>
				</div>

				<div class="mt-25">
					<p>HTML:</p>
					<highlightjs
						autodetect
						code='<span class="spinner primary"></span>
<span class="spinner secondary"></span>
<span class="spinner success"></span>
<span class="spinner info"></span>
<span class="spinner warning"></span>
<span class="spinner danger"></span>
<span class="spinner dark"></span>'
					></highlightjs>
				</div>
			</div>
		</section>

		<section class="section" id="colors">
			<div class="container">
				<div>
					<h2 class="mb-20">&bull; Sizing</h2>
					<p class="fs-6">
						There are 5 different sizes for spinnners. You can use:
					</p>
					<ul class="text-danger fs-6">
						<li>.mini</li>
						<li>.sm</li>
						<li>.lg</li>
						<li>.xl</li>
					</ul>
					<p class="fs-6">and default size.</p>
				</div>

				<div class="mt-25 flex justify-center items-center wrap">
					<div>
						Mini:
						<span class="spinner primary mini mr-30"></span>
					</div>
					<div>
						Small:
						<span class="spinner primary sm mr-30"></span>
					</div>
					<div>
						Default:
						<span class="spinner primary mr-30"></span>
					</div>
					<div>
						Large:
						<span class="spinner primary lg mr-30"></span>
					</div>
					<div>
						XLarge:
						<span class="spinner primary xl"></span>
					</div>
				</div>

				<div class="mt-25">
					<p>HTML:</p>
					<highlightjs
						autodetect
						code='<span class="spinner primary mini"></span>
<span class="spinner primary sm"></span>
<span class="spinner primary"></span>
<span class="spinner primary lg"></span>
<span class="spinner primary xl"></span>'
					></highlightjs>
				</div>
			</div>
		</section>

		<section class="section" id="variables">
			<div class="container">
				<div>
					<h2 class="mb-20">&bull; Variables</h2>
					<p class="fs-6">
						To customize the spinner component you can change the
						variables listed below.
					</p>
				</div>

				<variableTable :variables="variables" />
			</div>
		</section>
	</Layout>
</template>

<script setup>
import Layout from '../../layout/Layout.vue'
import variableTable from '../../components/variableTable.vue'

const variables = [
	{
		name: "$spinner-diameter <span class='tag success'>since 0.2.1</span>",
		value: '25px',
		computed: '',
	},
	{
		name: "$mini-spinner-diameter <span class='tag success'>since 0.2.1</span>",
		value: '15px',
		computed: '',
	},
	{
		name: "$sm-spinner-diameter <span class='tag success'>since 0.2.1</span>",
		value: '20px',
		computed: '',
	},
	{
		name: "$lg-spinner-diameter <span class='tag success'>since 0.2.1</span>",
		value: '30px',
		computed: '',
	},
	{
		name: "$xl-spinner-diameter <span class='tag success'>since 0.2.1</span>",
		value: '35px',
		computed: '',
	},
]
</script>
