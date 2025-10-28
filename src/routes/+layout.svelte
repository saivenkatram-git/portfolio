<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';

	// TODO: Clean up unnecessary fonts later
	// Fonts (JetBrains Mono)
	import '@fontsource/jetbrains-mono/100.css'; // font-thin
	import '@fontsource/jetbrains-mono/200.css'; // font-extralight
	import '@fontsource/jetbrains-mono/300.css'; // font-light
	import '@fontsource/jetbrains-mono/400.css'; // font-normal
	import '@fontsource/jetbrains-mono/500.css'; // font-medium
	import '@fontsource/jetbrains-mono/600.css'; // font-semibold
	import '@fontsource/jetbrains-mono/700.css'; // font-bold
	import '@fontsource/jetbrains-mono/800.css'; // font-extrabold
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="min-h-screen">
	<ModeWatcher />
	<slot />
</main>
