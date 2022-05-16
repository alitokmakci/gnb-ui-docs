<template>
	<div class="sidebar absolute square active-font-primary">
		<div class="sidebar-menu">
			<router-link
				to="/get-started"
				class="sidebar-item"
				:class="{
          active: isActive('/get-started'),
        }"
			>
				<span class="sidebar-item-label">Get Started</span>
			</router-link>
			<router-link
				class="sidebar-item"
				to="/integration"
				:class="{
          active: isActive('/integration'),
        }"
			>
				<span class="sidebar-item-label">Integration</span>
			</router-link>
			<router-link
				class="sidebar-item"
				to="/customization"
				:class="{
          active: isActive('/customization'),
        }"
			>
				<span class="sidebar-item-label">Customization & Modularity</span>
			</router-link>
			<div
				class="sidebar-group"
				ref="elements"
				:class="{
          active: isActiveForGroup('/elements'),
          open: isActiveForGroup('/elements'),
        }"
			>
				<div class="group-content" @click="openGroup('elements')">
					<a class="group-title" href="#">Elements</a>
				</div>
				<ul class="group-menu">
					<li
						class="menu-item"
						:class="{
              active: isActive('/elements/buttons'),
            }"
						@click="$router.push('/elements/buttons')"
					>
						<router-link to="/elements/buttons">Buttons</router-link>
					</li>
					<li
						class="menu-item"
						:class="{
              active: isActive('/elements/image'),
            }"
						@click="$router.push('/elements/image')"
					>
						<router-link to="/elements/image">Image</router-link>
					</li>
					<li
						class="menu-item"
						:class="{
              active: isActive('/elements/progressbar'),
            }"
						@click="$router.push('/elements/progressbar')"
					>
						<router-link to="/elements/progressbar">Progressbar</router-link>
					</li>
					<li
						class="menu-item"
						:class="{
              active: isActive('/elements/table'),
            }"
						@click="$router.push('/elements/table')"
					>
						<router-link to="/elements/table">Table</router-link>
					</li>
					<li
						class="menu-item"
						:class="{
              active: isActive('/elements/tag'),
            }"
						@click="$router.push('/elements/tag')"
					>
						<router-link to="/elements/tag">Tag</router-link>
					</li>
				</ul>
			</div>
			<div class="sidebar-group has-icon" ref="form">
				<div class="group-content" @click="openGroup('form')">
					<a class="group-title" href="#">Form Elements</a>
				</div>
				<ul class="group-menu">
					<li class="menu-item has-icon">
						<div class="menu-item-icon">
							<i class="ri-notification-line"></i>
						</div>
						<a href="#">Starting Guide</a>
					</li>
					<li class="menu-item has-icon">
						<div class="menu-item-icon">
							<i class="ri-notification-line"></i>
						</div>
						<a href="#">Colors</a>
					</li>
					<li class="menu-item has-icon">
						<div class="menu-item-icon">
							<i class="ri-notification-line"></i>
						</div>
						<a href="#">Theming</a>
					</li>
				</ul>
			</div>
			<div class="sidebar-group has-icon" ref="components">
				<div class="group-content" @click="openGroup('components')">
					<a class="group-title" href="#">Components</a>
				</div>
				<ul class="group-menu">
					<li class="menu-item has-icon">
						<div class="menu-item-icon">
							<i class="ri-notification-line"></i>
						</div>
						<a href="#">Starting Guide</a>
					</li>
					<li class="menu-item has-icon">
						<div class="menu-item-icon">
							<i class="ri-notification-line"></i>
						</div>
						<a href="#">Colors</a>
					</li>
					<li class="menu-item has-icon">
						<div class="menu-item-icon">
							<i class="ri-notification-line"></i>
						</div>
						<a href="#">Theming</a>
					</li>
				</ul>
			</div>
			<div class="sidebar-group has-icon" ref="layout">
				<div class="group-content" @click="openGroup('layout')">
					<a class="group-title" href="#">Layout</a>
				</div>
				<ul class="group-menu">
					<li class="menu-item has-icon">
						<div class="menu-item-icon">
							<i class="ri-notification-line"></i>
						</div>
						<a href="#">Starting Guide</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="sidebar-footer">
			<div class="flex justify-between w-100">
				<div></div>
				<div>
			          <span class="tag primary">
				          This documentation for v-{{ $store.state.version }}
			          </span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'sidebar',
	methods: {
		openGroup(ref) {
			this.$refs[ref].classList.toggle('open')
		},
		isActive(path) {
			return this.$route.path == path
		},
		isActiveForGroup(path) {
			return this.$route.path.includes(path)
		}
	}
}
</script>
