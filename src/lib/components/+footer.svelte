<script>
	import { resolve } from '$app/paths';
</script>

<section
	class="flex h-26 w-full flex-col items-center justify-center gap-y-2 py-10 font-mono sm:flex-row"
>
	<p class="text-sm font-light text-gray-600 sm:hidden">
		Crafted with ♥️ using <span class="font-bold">Svelte</span>.
	</p>

	<p class="text-sm font-light text-gray-600">
		© 2025 <a
			href={resolve('/')}
			title="Sai Venkatram's Portfolio"
			class="inline-block text-yellow-500 transition-all hover:-translate-y-0.5 hover:underline hover:underline-offset-4"
			>Sai Venkatram</a
		>
		<span class="hidden sm:inline-block"
			>· Crafted with ♥️ using
			<span class="font-bold">Svelte</span>.
		</span>
	</p>
</section>
