<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/+navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';

	export const prerender = true;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="min-h-screen">
	<ModeWatcher />
	<Navbar />
	<slot />
</main>
