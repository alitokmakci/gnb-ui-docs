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
						<a class="link dark" href="#positions"> Positions </a>
					</li>
					<li>
						<a class="link dark" href="#always"> Show Always </a>
					</li>
					<li>
						<a class="link dark" href="#variables">Variables</a>
					</li>
				</ul>
			</div>
		</template>
		<section class="section docs-title">
			<div class="container">
				<h1 class="title-5 fw-500">Tooltip</h1>
				<p class="subtitle">
					Easily add a simple tooltip with <b>GNB UI</b>.
				</p>
			</div>
		</section>

		<section class="section">
			<div class="container">
				<h5 class="mb-20">To Import Tooltip Separately:</h5>
				<highlightjs
					autodetect
					code='@import "../../node_modules/gnb-ui/src/elements/tooltip";'
				/>
			</div>
		</section>

		<section class="section" id="default">
			<div class="container">
				<div>
					<h2 class="mb-20">&bull; Default Tooltip</h2>
					<p class="fs-6">
						To add simple tooltip to the button first add <code class="text-danger">.has-tooltip</code>
						class to the button. Then add a div with a <code class="text-danger">.tooltip</code> class
						inside the button. Tooltips will be activated on hover.
					</p>
				</div>

				<div class="text-center mt-25">
					<button class="btn primary no-float has-tooltip">
						Hover me
						<div class="tooltip">This is a simple tooltip</div>
					</button>
				</div>

				<div class="mt-25">
					<p>HTML:</p>
					<highlightjs
						autodetect
						code='
<button class="btn primary no-float has-tooltip">
    Hover me
    <div class="tooltip">This is a simple tooltip</div>
</button>'
					/>
				</div>
			</div>
		</section>
		<section class="section" id="colors">
			<div class="container">
				<div>
					<h2 class="mb-20">&bull; Colors</h2>
					<p class="fs-6">
						You can use any color you want with one of the color classes with <code
						class="text-danger">.tooltip</code> element.
					</p>
				</div>

				<div class="text-center mt-25">
					<button class="btn primary no-float has-tooltip mr-10">
						Primary Tooltip
						<div class="tooltip primary">This is a simple tooltip with a primary color</div>
					</button>
					<button class="btn primary no-float has-tooltip mr-10">
						Secondary Tooltip
						<div class="tooltip secondary">This is a simple tooltip with a secondary color</div>
					</button>
					<button class="btn primary no-float has-tooltip mr-10">
						Success Tooltip
						<div class="tooltip success">This is a simple tooltip with a success color</div>
					</button>
					<button class="btn primary no-float has-tooltip mr-10">
						Info Tooltip
						<div class="tooltip info">This is a simple tooltip with a info color</div>
					</button>
					<button class="btn primary no-float has-tooltip mr-10">
						Warning Tooltip
						<div class="tooltip warning">This is a simple tooltip with a warning color</div>
					</button>
					<button class="btn primary no-float has-tooltip mr-10">
						Danger Tooltip
						<div class="tooltip danger">This is a simple tooltip with a danger color</div>
					</button>
					<button class="btn primary no-float has-tooltip">
						Dark Tooltip
						<div class="tooltip dark">This is a simple tooltip with a dark color</div>
					</button>
				</div>

				<div class="mt-25">
					<p>HTML:</p>
					<highlightjs
						autodetect
						code='
<button class="btn primary no-float has-tooltip">
    Primary Tooltip
    <div class="tooltip primary">This is a simple tooltip with a primary color</div>
</button>
<button class="btn primary no-float has-tooltip">
    Secondary Tooltip
    <div class="tooltip secondary">This is a simple tooltip with a secondary color</div>
</button>
<button class="btn primary no-float has-tooltip">
    Success Tooltip
    <div class="tooltip success">This is a simple tooltip with a success color</div>
</button>
<button class="btn primary no-float has-tooltip">
    Info Tooltip
    <div class="tooltip info">This is a simple tooltip with a info color</div>
</button>
<button class="btn primary no-float has-tooltip">
    Warning Tooltip
    <div class="tooltip warning">This is a simple tooltip with a warning color</div>
</button>
<button class="btn primary no-float has-tooltip">
    Danger Tooltip
    <div class="tooltip danger">This is a simple tooltip with a danger color</div>
</button>
<button class="btn primary no-float has-tooltip">
    Dark Tooltip
    <div class="tooltip dark">This is a simple tooltip with a dark color</div>
</button>'
					/>
				</div>
			</div>
		</section>
		<section class="section" id="flat">
			<div class="container">
				<div>
					<h2 class="mb-20">&bull; Flat</h2>
					<p class="fs-6">
						To use flat colors you can use <code class="text-danger">.flat</code> class with the color class
						to the <code class="text-danger">.tooltip</code> element.
					</p>
				</div>

				<div class="text-center mt-25">
					<button class="btn primary no-float has-tooltip mr-10">
						Primary Flat Tooltip
						<div class="tooltip primary flat">This is a simple tooltip with a primary color</div>
					</button>
					<button class="btn primary no-float has-tooltip mr-10">
						Secondary Flat Tooltip
						<div class="tooltip secondary flat">This is a simple tooltip with a secondary color</div>
					</button>
					<button class="btn primary no-float has-tooltip mr-10">
						Success Flat Tooltip
						<div class="tooltip success flat">This is a simple tooltip with a success color</div>
					</button>
					<button class="btn primary no-float has-tooltip mr-10">
						Info Flat Tooltip
						<div class="tooltip info flat">This is a simple tooltip with a info color</div>
					</button>
					<button class="btn primary no-float has-tooltip mr-10">
						Warning Flat Tooltip
						<div class="tooltip warning flat">This is a simple tooltip with a warning color</div>
					</button>
					<button class="btn primary no-float has-tooltip mr-10">
						Danger Flat Tooltip
						<div class="tooltip danger flat">This is a simple tooltip with a danger color</div>
					</button>
					<button class="btn primary no-float has-tooltip">
						Dark Flat Tooltip
						<div class="tooltip dark flat">This is a simple tooltip with a dark color</div>
					</button>
				</div>

				<div class="mt-25">
					<p>HTML:</p>
					<highlightjs
						autodetect
						code='
<button class="btn primary no-float has-tooltip">
    Primary Tooltip
    <div class="tooltip primary flat">This is a simple tooltip with a primary color</div>
</button>
<button class="btn primary no-float has-tooltip">
    Secondary Tooltip
    <div class="tooltip secondary flat">This is a simple tooltip with a secondary color</div>
</button>
<button class="btn primary no-float has-tooltip">
    Success Tooltip
    <div class="tooltip success flat">This is a simple tooltip with a success color</div>
</button>
<button class="btn primary no-float has-tooltip">
    Info Tooltip
    <div class="tooltip info flat">This is a simple tooltip with a info color</div>
</button>
<button class="btn primary no-float has-tooltip">
    Warning Tooltip
    <div class="tooltip warning flat">This is a simple tooltip with a warning color</div>
</button>
<button class="btn primary no-float has-tooltip">
    Danger Tooltip
    <div class="tooltip danger flat">This is a simple tooltip with a danger color</div>
</button>
<button class="btn primary no-float has-tooltip">
    Dark Tooltip
    <div class="tooltip dark flat">This is a simple tooltip with a dark color</div>
</button>'
					/>
				</div>
			</div>
		</section>
		<section class="section" id="positions">
			<div class="container">
				<div>
					<h2 class="mb-20">&bull; Positions</h2>
					<p class="fs-6">
						İf you want to position the tooltip to the bottom, right or left of the element, you can add the
						one of the <code class="text-danger">.bottom, .right, .left</code> classes to the <code
						class="text-danger">.tooltip</code>
					</p>
				</div>

				<div class="text-center mt-25">
					<button class="btn primary no-float has-tooltip mr-10">
						Tooltip on Left
						<div class="tooltip left">This is a simple tooltip</div>
					</button>
					<button class="btn primary no-float has-tooltip mr-10">
						Tooltip on Bottom
						<div class="tooltip bottom">This is a simple tooltip</div>
					</button>
					<button class="btn primary no-float has-tooltip">
						Tooltip on Right
						<div class="tooltip right">This is a simple tooltip</div>
					</button>
				</div>

				<div class="mt-25">
					<p>HTML:</p>
					<highlightjs
						autodetect
						code='
<button class="btn primary no-float has-tooltip">
    Tooltip on Left
    <div class="tooltip left">This is a simple tooltip</div>
</button>
<button class="btn primary no-float has-tooltip">
    Tooltip on Bottom
    <div class="tooltip bottom">This is a simple tooltip</div>
</button>
<button class="btn primary no-float has-tooltip">
    Tooltip on Right
    <div class="tooltip right">This is a simple tooltip</div>
</button>'
					/>
				</div>
			</div>
		</section>
		<section class="section" id="always">
			<div class="container">
				<div>
					<h2 class="mb-20">&bull; Show Always</h2>
					<p class="fs-6">
						If you want to show your tooltip always, you can add the <code class="text-danger">.always-active</code> class
						to the <code class="text-danger">.tooltip</code> element .
					</p>
				</div>

				<div class="text-center mt-50">
					<button class="btn primary no-float has-tooltip">
						Hover me
						<div class="tooltip always-active">This is a tooltip which is always active</div>
					</button>
				</div>

				<div class="mt-25">
					<p>HTML:</p>
					<highlightjs
						autodetect
						code='
<button class="btn primary no-float has-tooltip">
    Hover me
    <div class="tooltip always-active">This is a tooltip which is always active</div>
</button>'
					/>
				</div>
			</div>
		</section>
		<section class="section" id="variables">
			<div class="container">
				<div>
					<h2 class="mb-20">&bull; Variables</h2>
					<p class="fs-6">
						To customize the tooltip element you change the variables listed below.
					</p>
				</div>

				<div class="has-table">
					<table class="table dark bordered striped">
						<thead>
						<tr>
							<th>Name</th>
							<th>Default Value</th>
							<th>Computed Value</th>
						</tr>
						</thead>
						<tbody class="bg-white">
						<tr>
							<td><span class="tag primary">$tooltip-default-background-color</span></td>
							<td>
								<span class="tag secondary">$font-color</span>
							</td>
							<td><span class="tag warning">rgba(44, 62, 80)</span></td>
						</tr>
						<tr>
							<td><span class="tag primary">$tooltip-default-font-color</span></td>
							<td><span class="tag secondary">$white</span></td>
							<td><span class="tag warning">rgba(255, 255, 255)</span></td>
						</tr>
						<tr>
							<td>
								<span class="tag primary">$tooltip-border-radius</span>
							</td>
							<td><span class="tag secondary">12px</span></td>
							<td><span class="tag warning"></span></td>
						</tr>
						<tr>
							<td>
								<span class="tag primary">$tooltip-padding</span>
							</td>
							<td><span class="tag secondary">0.5rem 1rem</span></td>
							<td><span class="tag warning"></span></td>
						</tr>
						<tr>
							<td>
								<span class="tag primary">$tooltip-font-size</span>
							</td>
							<td><span class="tag secondary">0.75rem</span></td>
							<td><span class="tag warning"></span></td>
						</tr>
						<tr>
							<td><span class="tag primary">$tooltip-z-index</span></td>
							<td><span class="tag secondary">1020</span></td>
							<td><span class="tag warning"></span></td>
						</tr>
						<tr>
							<td>
								<span class="tag primary">$flat-tooltip-background-alpha</span>
							</td>
							<td><span class="tag secondary">$flat-color-alpha</span></td>
							<td><span class="tag warning">0.15</span></td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	</Layout>
</template>

<script setup>
import Layout from '../../layout/Layout.vue'
</script>

$flat-tooltip-background-alpha: $flat-color-alpha;
