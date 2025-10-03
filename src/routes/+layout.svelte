<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/+navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import Lenis from 'lenis';
	import { onDestroy, onMount } from 'svelte';

	let lenis: Lenis;

	onMount(() => {
		lenis = new Lenis({
			autoRaf: true
		});

		lenis.on('scroll', (e) => {
			console.log(e);
		});
	});

	onDestroy(() => {
		if (lenis) {
			lenis.destroy();
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link
		rel="preload"
		href="/fonts/PPCirka-Variable.ttf"
		as="font"
		type="font/ttf"
		crossorigin="anonymous"
	/>
</svelte:head>

<main class="min-h-screen">
	<ModeWatcher />
	<Navbar />
	<slot />
</main>
