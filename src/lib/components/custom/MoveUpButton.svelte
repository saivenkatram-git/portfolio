<script lang="ts">
	import { ArrowUpIcon } from '@lucide/svelte';
	import { onMount } from 'svelte';

	// Scroll funcrtionality :)
	let scrollPosition = 0;

	onMount(() => {
		window.addEventListener('scroll', () => {
			scrollPosition = window.scrollY;
		});
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<div
	class="{scrollPosition > 80
		? 'opacity-100'
		: 'opacity-0'} right-10 bottom-10 transition-all duration-500 md:fixed"
>
	<div class="flex flex-col items-center justify-center gap-y-2">
		<button onclick={scrollToTop}>
			<ArrowUpIcon class="h-5 w-5 text-yellow-500" />
		</button>
		<p class="font-mono text-[10px] dark:text-white">Scroll to top</p>
	</div>
</div>
