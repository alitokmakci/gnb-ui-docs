import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
	state () {
		return {
			version: '0.1.1',
			download_link: 'https://github.com/alitokmakci/gnb-ui/releases/download/v.0.1.1-alpha/gnbUI-0.1.1-alpha.zip'
		}
	},
	mutations: {
	}
})

export default store;
