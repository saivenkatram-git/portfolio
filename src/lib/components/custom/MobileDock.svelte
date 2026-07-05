<script lang="ts">
	import { HomeIcon, ArrowUpToLineIcon, MoonIcon, SunIcon } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';
	import { dock } from '$lib/dockState.svelte';

	// href for the back action (defaults to home).
	let { backHref = '/' }: { backHref?: string } = $props();

	function toTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<!-- Bottom glass dock — shown while the page's back-link is scrolled out of view
     (dock.active). Kept always-mounted and toggled via CSS opacity/transform (not
     {#if} + a Svelte transition): mounting a backdrop-filter element flashes
     transparent-then-glass on the first frame, and unmounting mid-scroll flickers —
     an always-present element that only fades/slides avoids both. -->
<!-- Rename note: the "Mobile" name is historical; the dock now shows on all devices. -->

<!-- Slide-only reveal (no opacity animation): fading a backdrop-filter element makes it
     flash transparent during the low-opacity frames because the blur under-renders. The
     dock instead sits fully below the viewport and slides up, so its opacity is always 1
     and the glass never flashes. -->
<div
	class="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center transition-transform duration-500 ease-out {dock.active
		? 'translate-y-0'
		: 'translate-y-[calc(100%+2.5rem)]'}"
	style="padding-bottom: env(safe-area-inset-bottom)"
	aria-hidden={!dock.active}
>
	<div
		class="liquid-glass flex items-center gap-1.5 rounded-full p-1.5 {dock.active
			? 'pointer-events-auto'
			: ''}"
	>
		<a
			href={backHref}
			aria-label="Back to home"
			class="flex h-12 w-12 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-black/5 hover:text-foreground-strong dark:text-gray-300 dark:hover:bg-white/10"
		>
			<HomeIcon class="h-5 w-5" />
		</a>
		<button
			type="button"
			onclick={toTop}
			aria-label="Scroll to top"
			class="flex h-12 w-12 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-black/5 hover:text-foreground-strong dark:text-gray-300 dark:hover:bg-white/10"
		>
			<ArrowUpToLineIcon class="h-5 w-5" />
		</button>
		<button
			type="button"
			onclick={toggleMode}
			aria-label="Toggle theme"
			class="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full text-gray-600 transition-colors hover:bg-black/5 hover:text-foreground-strong dark:text-gray-300 dark:hover:bg-white/10"
		>
			<span class="theme-icon theme-icon-sun">
				<SunIcon class="h-5 w-5" />
			</span>
			<span class="theme-icon theme-icon-moon">
				<MoonIcon class="h-5 w-5" />
			</span>
		</button>
	</div>
</div>
