<template>
	<div class="app">
		<button @click="list.push(list.length)">Add</button>
		<ul>
			<li v-for="el in list">{{ el }}</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
	setup() {
		return {
			list: reactive([1, 2, 3]) as any[],
		};
	}
});

</script>

<style lang="less" scoped>

.app {
	width: 100%;
	height: 100%;
}

</style>

<style>
html, body {
	padding: 0;
	margin: 0;
	height: 100%;
	font-size: 1.1rem;

	background-color: var(--background);
	color: var(--foreground);
}

input, textarea {
	border: none;
	padding: 0;
	margin: 0;
	font-size: 1.1rem;

	outline: none;
}

* {
	box-sizing: border-box;
}

.theme-base {
	--background: #292d3e;
	--foreground: #b0bec5;
	--contrast: #202331;
	--accent: #ab47bc;
	--accent-text: #FFFFFF;
}

</style>