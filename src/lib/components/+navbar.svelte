<script lang="ts">
	import GithubLogo from '$lib/assets/github_logo.svg';
	import GithubDarkLogo from '$lib/assets/github_logo_dark.svg';
	import { Menu } from '@lucide/svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { SunIcon, MoonIcon } from '@lucide/svelte';
	import Button from './ui/button/button.svelte';
	import { mode, toggleMode } from 'mode-watcher';
	import { Motion } from 'svelte-motion';
	import { page } from '$app/state';
</script>

<!-- Desktop Layout -->
<Motion initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} let:motion>
	<nav
		use:motion
		class="sticky top-0 z-50 hidden w-full items-center justify-center p-3 text-white backdrop-blur-xl md:flex md:space-x-36 lg:space-x-56 xl:space-x-64"
	>
		<a href="/" class="font-mono text-black dark:text-white">Sai V.</a>
		<div class="flex items-center justify-center space-x-8 font-light text-black dark:text-white">
			<a
				href="/blog"
				class="{page.url.pathname == '/blog'
					? 'text-purple-400 dark:text-yellow-400'
					: 'text-black dark:text-white'} underline-offset-4 transition-all hover:-translate-y-0.5 hover:underline"
				>Blog</a
			>
			<div
				class="flex items-center justify-center space-x-2 underline-offset-4 transition-all hover:-translate-y-0.5 hover:underline"
			>
				<img src={mode.current == 'dark' ? GithubLogo : GithubDarkLogo} alt="" class="h-5 w-5" />
				<a href="https://github.com/saivenkatram-git" target="_blank">Github</a>
			</div>
			<!-- svelte-ignore a11y_invalid_attribute -->
			<a
				href="#"
				class="{page.url.pathname == '/say-hi'
					? 'text-purple-400 dark:text-yellow-400'
					: 'text-black dark:text-white'} underline-offset-4 transition-all hover:-translate-y-0.5 hover:underline"
				>Say Hi! 👋</a
			>
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
	</nav>
</Motion>
<!-- Mobile Layout -->
<Motion initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} let:motion>
	<nav
		use:motion
		class="pt-safe sticky top-0 z-50 flex w-full items-center justify-between px-8 py-4 text-black backdrop-blur-xl md:hidden dark:text-white"
	>
		<p class="font-mono">Sai V.</p>
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
				<DropdownMenu.Content class="m-4 w-72 bg-[#fffaf0] dark:bg-black">
					<DropdownMenu.Label class="py-2">All pages</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Item
						class="{page.url.pathname == '/blog'
							? 'text-purple-400 dark:text-yellow-400'
							: 'text-black dark:text-white'}
               py-2 underline-offset-4 hover:underline"><a href="/blog">Blog</a></DropdownMenu.Item
					>
					<DropdownMenu.Item class="py-2 underline-offset-4 hover:underline">
						<a
							href="https://github.com/saivenkatram-git"
							target="_blank"
							class="flex w-full items-center justify-start space-x-2"
						>
							<p>Github</p>
							<img
								src={mode.current == 'dark' ? GithubLogo : GithubDarkLogo}
								alt=""
								class="h-5 w-5"
							/>
						</a>
					</DropdownMenu.Item>

					<DropdownMenu.Item
						class="{page.url.pathname == '/say-hi'
							? 'text-purple-400 dark:text-yellow-400'
							: 'text-black dark:text-white'} py-2 underline-offset-4 hover:underline"
						><a href="/say-hi">Say Hi! 👋</a></DropdownMenu.Item
					>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</nav>
</Motion>
