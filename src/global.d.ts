/// <reference types="vite-plugin-sveld" />

declare module '$assets/images/*'
declare module '$locales/*'

declare module '*.svg' {
	export { SvelteComponentDev as default } from 'svelte/internal'
}
