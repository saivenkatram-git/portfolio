<script lang="ts">
	import GithubLogo from '$lib/assets/github_logo.svg';
	import { Menu } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let windowWidth = 1024;
	let isMounted = false;
	let isMobile: boolean;

	$: isMobile = windowWidth < 640;

	onMount(() => {
		isMounted = true;
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

{#if isMounted && !isMobile}
	<!-- Desktop Layout -->
	<nav
		transition:fade={{ duration: 500 }}
		class="hidden w-full items-center justify-center bg-[#1D1D20] p-6 text-white sm:flex sm:space-x-16 md:space-x-48 lg:space-x-56 xl:space-x-64"
	>
		<p class="font-mono text-white">Sai Venkatram</p>
		<div class="flex items-center justify-center space-x-8 font-light">
			<!-- svelte-ignore a11y_invalid_attribute -->
			<a href="#" class="transition-all hover:-translate-y-0.5">Wallpapers</a>
			<!-- svelte-ignore a11y_invalid_attribute -->
			<a href="#" class="transition-all hover:-translate-y-0.5">Posts</a>
			<!-- svelte-ignore a11y_invalid_attribute -->
			<a href="#" class="transition-all hover:-translate-y-0.5">Contact Me</a>
			<div class="flex items-center justify-center space-x-2 transition-all hover:-translate-y-0.5">
				<img src={GithubLogo} alt="" class="h-5 w-5" />
				<a href="https://github.com/saivenkatram-git" target="_blank">Github</a>
			</div>
		</div>
	</nav>
{:else if isMounted && isMobile}
	<!-- Mobile Layout -->
	<nav
		transition:fade={{ duration: 500 }}
		class="flex w-full items-center justify-between bg-[#1D1D20] p-6 sm:hidden"
	>
		<p class="font-mono text-white">Sai Venkatram</p>
		<button on:click={(e) => console.log(e)}><Menu class="h-5 w-5 text-white" /></button>
	</nav>
{/if}
