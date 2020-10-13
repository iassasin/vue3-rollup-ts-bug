import {createApp} from 'vue';
import MainView from './MainView.vue';

document.addEventListener('DOMContentLoaded', async () => {
	let root = createApp(MainView);
	root.mount('#app');
});