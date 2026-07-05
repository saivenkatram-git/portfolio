<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import CatBlink from '$lib/assets/cat-blink.gif';
	import { ModeWatcher, mode } from 'mode-watcher';
	import ThemeToggle from '$lib/components/custom/ThemeToggle.svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	let { children }: { children: Snippet } = $props();

	injectSpeedInsights();

	$effect(() => {
		// referencing mode.current makes this re-run on every theme change
		void mode.current;
		const base = getComputedStyle(document.documentElement).getPropertyValue('--bg-base').trim();
		if (!base) return;
		let meta = document.querySelector('meta[name="theme-color"]');
		if (!meta) {
			meta = document.createElement('meta');
			meta.setAttribute('name', 'theme-color');
			document.head.appendChild(meta);
		}
		meta.setAttribute('content', base);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Sai Venkatram</title>

	<link
		rel="preload"
		href="/fonts/GeneralSans-Variable.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
</svelte:head>

<ModeWatcher disableTransitions={false} />

<nav>
	<img
		src={CatBlink}
		alt=""
		aria-hidden="true"
		loading="lazy"
		fetchpriority="low"
		class="pointer-events-none fixed right-4 bottom-4 z-40 hidden opacity-90 select-none lg:block"
		style="width: clamp(4.5rem, -9rem + 13.5vw, 7rem)"
	/>
	<span class="fixed top-6 right-6 z-50">
		<ThemeToggle />
	</span>
</nav>

<main>
	{@render children()}
</main>
