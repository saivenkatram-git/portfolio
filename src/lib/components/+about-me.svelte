<script lang="ts">
	import { Motion } from 'svelte-motion';
</script>

<Motion
	let:motion
	initial={{ opacity: 0, y: 35 }}
	animate={{ opacity: 1, y: 0 }}
	transition={{ duration: 1 }}
>
	<section
		use:motion
		class="flex min-h-40 w-full flex-col items-start justify-center gap-y-4 px-10 py-4 font-mono lg:px-6"
	>
		<div class="flex items-center justify-center gap-x-4">
			<!-- <span class="h-[0.8px] w-8 rounded-lg bg-purple-400"></span> -->
			<h1 class="text-sm font-light tracking-wider text-gray-600">ABOUT ME</h1>
		</div>
		<p class="text-sm leading-[22px] font-extralight text-gray-200">
			<!-- TODO: Improve this -->
			Hey 👋, i’m a full-stack developer from Mumbai who can’t leave a
			<span class="text-purple-:00"><b><i>“how does this work?”</i></b></span>
			question unanswered. Half the things I’ve built started because I got curious, opened a blank file,
			and somehow ended up shipping something that <b><i>(miraculously)</i></b> works. I love the thrill
			of breaking, fixing, and over-engineering things until they behave. When I’m not debugging at 3
			am, i’m playing Valorant, recording music covers, or contemplating my next useless tech investment.
			My code runs on curiosity, caffeine, and the occasional panic when something finally deploys correctly.
		</p>
	</section>
</Motion>
