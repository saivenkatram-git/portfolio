<script lang="ts">
	import Upcoming from '$lib/assets/upcoming_soon.png?enhanced';
	import { Motion } from 'svelte-motion';
</script>

<Motion initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} let:motion
	><div
		use:motion
		class="mx-auto flex h-[700px] max-w-3xl flex-col items-center justify-center lg:h-[1000px]"
	>
		<enhanced:img src={Upcoming} alt="" class="h-[550px] w-[550px] object-contain" />
		<p
			class="font-cirka
      text-2xl text-purple-400 sm:text-3xl lg:text-4xl dark:text-yellow-400"
		>
			COMING VERY SOON...
		</p>
	</div>
</Motion>
