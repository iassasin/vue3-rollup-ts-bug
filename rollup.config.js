import typescript from '@rollup/plugin-typescript';
import alias from 'rollup-plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import Vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';

export default {
	input: 'app.ts',
	output: {
		format: 'iife',
		file: 'dist/app.js',

		sourcemap: true,
		compact: false,
		strict: false,
		exports: 'named',
		interop: false,
		esModule: false,
		externalLiveBindings: false,
	},

	watch: {
		exclude: 'node_modules/**',
		clearScreen: false,
	},

	plugins: [
		alias({
			resolve: [ '.js', '.ts' ],
			entries: [
				{ find: 'vue', replacement: 'node_modules/vue/dist/vue.runtime.esm-browser.js' }
			]
		}),
		resolve(),
		typescript(),
		css({ output: 'dist/app.css' }),
		Vue({ preprocessStyles: true }),
	],
};