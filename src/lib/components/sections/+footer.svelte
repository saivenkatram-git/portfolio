<script>
	import { resolve } from '$app/paths';
</script>

<section
	class="mb-24 flex h-26 w-full flex-col items-center justify-center gap-y-2 py-10 font-mono text-gray-400 sm:flex-row md:mb-0 dark:text-gray-600"
>
	<p class="text-sm font-light sm:hidden">
		Crafted with ♥️ using <span class="font-bold">Svelte</span>.
	</p>

	<p class="text-sm font-light">
		© 2025 <a
			href={resolve('/')}
			title="Sai Venkatram's Portfolio"
			class="inline-block text-pink-500 transition-all hover:-translate-y-0.5 hover:underline hover:underline-offset-4 dark:text-yellow-500"
			>Sai Venkatram</a
		>
		<span class="hidden sm:inline-block"
			>· Crafted with ♥️ using
			<span class="font-bold">Svelte</span>.
		</span>
	</p>
</section>
