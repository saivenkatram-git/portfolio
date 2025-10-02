<script lang="ts">
	import GithubLogo from '$lib/assets/github_logo.svg';
	import GithubDarkLogo from '$lib/assets/github_logo_dark.svg';
	import { Menu } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { SunIcon, MoonIcon } from '@lucide/svelte';
	import Button from './ui/button/button.svelte';
	import { mode, toggleMode } from 'mode-watcher';

	let windowWidth = 1024;
	let isMounted = false;
	let isMobile: boolean;

	$: isMobile = windowWidth < 768;

	onMount(() => {
		isMounted = true;
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

{#if isMounted && !isMobile}
	<!-- Desktop Layout -->
	<nav
		transition:fade={{ duration: 500 }}
		class="hidden w-full items-center justify-center p-6 text-white md:flex md:space-x-48 lg:space-x-56 xl:space-x-64"
	>
		<p class="font-mono text-black dark:text-white">Sai Venkatram</p>
		<div class="flex items-center justify-center space-x-8 font-light text-black dark:text-white">
			<!-- svelte-ignore a11y_invalid_attribute -->
			<a href="#" class="transition-all hover:-translate-y-0.5">Wallpapers</a>
			<!-- svelte-ignore a11y_invalid_attribute -->
			<a href="#" class="transition-all hover:-translate-y-0.5">Posts</a>
			<!-- svelte-ignore a11y_invalid_attribute -->
			<a href="#" class="transition-all hover:-translate-y-0.5">Contact Me</a>
			<div class="flex items-center justify-center space-x-2 transition-all hover:-translate-y-0.5">
				<img src={mode.current == 'dark' ? GithubLogo : GithubDarkLogo} alt="" class="h-5 w-5" />
				<a href="https://github.com/saivenkatram-git" target="_blank">Github</a>
			</div>
			<Button
				onclick={toggleMode}
				variant="default"
				size="icon"
				class="bg-gray-400 transition-colors hover:bg-gray-500 dark:bg-yellow-400"
			>
				<SunIcon
					class="h-[1.2rem] w-[1.2rem] scale-0 -rotate-90 !transition-all dark:scale-100 dark:rotate-0"
				/>
				<MoonIcon
					class="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 !transition-all dark:scale-0 dark:rotate-90"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
	</nav>
{:else if isMounted && isMobile}
	<!-- Mobile Layout -->
	<nav
		transition:fade={{ duration: 500 }}
		class="flex w-full items-center justify-between p-8 text-black md:hidden dark:text-white"
	>
		<p class="font-mono">Sai Venkatram</p>
		<div class="flex items-center justify-center space-x-4">
			<Button
				onclick={toggleMode}
				variant="default"
				size="icon"
				class="bg-gray-400 transition-colors hover:bg-gray-500 dark:bg-yellow-400"
			>
				<SunIcon
					class="h-[1.2rem] w-[1.2rem] scale-0 -rotate-90  !transition-all dark:scale-100 dark:rotate-0"
				/>
				<MoonIcon
					class="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 !transition-all dark:scale-0 dark:rotate-90"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger><Menu class="h-5 w-5" /></DropdownMenu.Trigger>
				<DropdownMenu.Content class="m-4 w-72">
					<DropdownMenu.Label class="py-2">All pages</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Item class="py-2">Wallpapers</DropdownMenu.Item>
					<DropdownMenu.Item class="py-2">Posts</DropdownMenu.Item>
					<DropdownMenu.Item class="py-2">Contact Me</DropdownMenu.Item>
					<DropdownMenu.Item class="py-2">
						<a
							href="https://github.com/saivenkatram-git"
							target="_blank"
							class="flex items-center justify-start space-x-2"
						>
							<img
								src={mode.current == 'dark' ? GithubLogo : GithubDarkLogo}
								alt=""
								class="h-5 w-5"
							/>
							<p>Github</p>
						</a>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</nav>
{/if}
