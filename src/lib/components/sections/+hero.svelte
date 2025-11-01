<script lang="ts">
	import HeroAvatar from '$lib/assets/avatar.png?enhanced';
</script>

<!-- Hero Section -->
<section class="section section-animation h-80 duration-500 slide-in-from-bottom-8">
	<div class="flex flex-col items-start justify-center">
		<enhanced:img src={HeroAvatar} class="my-6 h-20 w-20 rounded-full object-cover" alt="" />
		<h1 class="font-serif text-3xl font-light tracking-normal md:text-2xl">Sai Venkatram</h1>
		<p class="font-mono text-sm font-light text-gray-500 dark:text-gray-600">
			Fullstack Software Developer 👾
		</p>

		<!-- Open to work pill -->
		<div
			class="mt-4 flex h-6 items-center justify-center gap-x-2 rounded-full border border-green-400 bg-green-300/10 px-2 dark:border-green-700 dark:bg-green-900/10"
		>
			<span class="relative flex size-2">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
				></span>
				<span class="dark:jbg-green-500 relative inline-flex size-2 rounded-full bg-green-500"
				></span>
			</span>
			<p class="font-mono text-[12px] font-light text-green-500">open to opportunities</p>
		</div>
	</div>
</section>
