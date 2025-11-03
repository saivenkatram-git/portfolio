<script lang="ts">
	import { DownloadIcon, Linkedin, MailIcon, Copy, Check } from '@lucide/svelte';
	import GithubIcon from '$lib/components/custom/GithubIcon.svelte';
	import { SunIcon, MoonIcon } from '@lucide/svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { toggleMode } from 'mode-watcher';
	import { onMount } from 'svelte';

	function downloadResume() {
		const link = document.createElement('a');
		link.href = '/files/Resume.pdf';
		link.download = 'Sai Venkatram - Resume.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	// Detect for scroll for dismissing popover
	let showPopover = false;
	let copied = false;
	const email = 'saiv.contact@gmail.com';

	onMount(() => {
		// Detect if user is scrolling
		const checkScrolling = () => {
			if (window.scrollY > 0) {
				showPopover = false;
			}
		};

		window.addEventListener('scroll', checkScrolling);

		return () => {
			window.removeEventListener('scroll', checkScrolling);
		};
	});

	function copyEmail() {
		navigator.clipboard.writeText(email);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	}
</script>

<nav
	class="fixed bottom-0 z-50 flex w-full items-center justify-center pb-6 md:sticky md:top-0 md:bottom-auto md:pt-6 md:pb-0"
>
	<div
		class="flex items-center justify-center space-x-10 rounded-full border-[0.8px] border-gray-300 bg-white/20 px-6 py-5 font-light text-gray-400 backdrop-blur-3xl dark:border-gray-800 dark:bg-white/5"
	>
		<button onclick={downloadResume}
			><DownloadIcon
				class="h-4 w-4 transition-all hover:-translate-y-0.5 hover:text-pink-500 hover:dark:text-yellow-500"
			/>
		</button>
		<a
			href="https://github.com/saivenkatram-git"
			target="_blank"
			title="Github"
			rel="external noreferrer noopener"
		>
			<GithubIcon
				class="h-4 w-4 transition-all hover:-translate-y-0.5 hover:text-pink-500 hover:dark:text-yellow-500"
			/>
		</a>
		<a
			href="https://linkedin.com/in/sai-venkatram"
			target="_blank"
			rel="external noreferrer noopener"
			title="Linkedin"
			><Linkedin
				class="h-4 w-4 transition-all hover:-translate-y-0.5 hover:text-pink-500 hover:dark:text-yellow-500"
			/></a
		>
		<a
			href="mailto:saiv.contact@gmail.com"
			class="block md:hidden"
			target="_blank"
			title="Email me :)"
		>
			<MailIcon
				class="h-4 w-4 transition-all hover:-translate-y-0.5 hover:text-pink-500 hover:dark:text-yellow-500"
			/>
		</a>
		<Popover.Root bind:open={showPopover}>
			<Popover.Trigger class="hidden md:block">
				<MailIcon
					class="h-4 w-4 transition-all hover:-translate-y-0.5 hover:text-pink-500 hover:dark:text-yellow-500"
				/>
			</Popover.Trigger>
			<Popover.Content class="mt-8 w-auto p-3">
				<div class="flex items-center gap-2">
					<div
						class="rounded-md bg-gray-200 px-3 py-2 font-mono text-sm text-pink-500 dark:bg-gray-800 dark:text-yellow-500"
					>
						{email}
					</div>
					<Button onclick={copyEmail} variant="outline" size="icon" class="h-8 w-8">
						{#if copied}
							<Check class="h-3.5 w-3.5 text-green-500" />
						{:else}
							<Copy class="h-3.5 w-3.5" />
						{/if}
					</Button>
				</div>
			</Popover.Content>
		</Popover.Root>

		<!-- Toggle Theme Button -->
		<Button
			onclick={toggleMode}
			variant="link"
			size="icon"
			class="!size-auto !p-0 text-pink-500 dark:text-yellow-500"
		>
			<SunIcon class="h-4 w-4 scale-0 -rotate-90 !transition-all dark:scale-100 dark:rotate-0" />
			<MoonIcon
				class="absolute h-4 w-4 scale-100 rotate-0 !transition-all dark:scale-0 dark:rotate-90"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</div>
</nav>
