<script lang="ts">
	import { Motion } from 'svelte-motion';
	import HeroAvatar from '$lib/assets/avatar.jpeg?enhanced';
</script>

<!-- Hero Section -->
<Motion
	let:motion
	initial={{ opacity: 0, y: 30 }}
	animate={{ opacity: 1, y: 0 }}
	transition={{ duration: 1 }}
>
	<section use:motion class="flex h-80 w-full items-center justify-between px-10 lg:px-6">
		<div class="flex flex-col items-start justify-center">
			<enhanced:img src={HeroAvatar} class="my-6 h-20 w-20 rounded-full object-cover" alt="" />
			<h1 class="font-cirka text-3xl tracking-normal md:text-2xl">Sai Venkatram</h1>
			<p class="font-mono text-sm font-light text-gray-400 dark:text-gray-600">
				Fullstack Software Developer
			</p>

			<!-- Open to work pill -->
			<div
				class="mt-4 flex h-6 items-center justify-center gap-x-2 rounded-full border border-green-700 bg-green-900/10 px-2"
			>
				<span class="relative flex size-2">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
					></span>
					<span class="relative inline-flex size-2 rounded-full bg-green-500"></span>
				</span>
				<p class="font-mono text-[12px] font-light text-green-500">open to opportunities</p>
			</div>
		</div>
	</section>
</Motion>
