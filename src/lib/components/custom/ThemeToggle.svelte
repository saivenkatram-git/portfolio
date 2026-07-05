<script lang="ts">
	import { MoonIcon, SunIcon } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';
</script>

<button
	onclick={toggleMode}
	aria-label="Toggle theme"
	class="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full text-gray-500 transition-colors hover:text-foreground dark:text-gray-400 dark:hover:text-foreground"
>
	<span class="theme-icon theme-icon-sun">
		<SunIcon class="h-4 w-4" />
	</span>
	<span class="theme-icon theme-icon-moon">
		<MoonIcon class="h-4 w-4" />
	</span>
</button>
