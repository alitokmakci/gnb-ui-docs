import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import GetStarted from '../pages/GetStarted.vue'
import Integration from '../pages/Integration.vue'
import Customization from '../pages/Customization.vue'
import Buttons from '../pages/elements/Buttons.vue'
import Image from '../pages/elements/Image.vue'
import Progressbar from '../pages/elements/Progressbar.vue'
import Table from '../pages/elements/Table.vue'
import Tag from '../pages/elements/Tag.vue'
import Tooltip from '../pages/elements/Tooltip.vue'
import NotFound from '../pages/404.vue'

const routes = [
	{path: '/', component: Home},
	{path: '/get-started', component: GetStarted},
	{path: '/integration', component: Integration},
	{path: '/customization', component: Customization},
	{path: '/elements/buttons', component: Buttons},
	{path: '/elements/image', component: Image},
	{path: '/elements/progressbar', component: Progressbar},
	{path: '/elements/table', component: Table},
	{path: '/elements/tag', component: Tag},
	{path: '/elements/tooltip', component: Tooltip},

	{
		path: '/404',
		name: 'PageNotExist',
		component: NotFound,
	},
	{
		path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
		redirect: '/404',
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
