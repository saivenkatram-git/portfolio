<script lang="ts">
	import { Motion } from 'svelte-motion';
</script>

<Motion
	let:motion
	initial={{ opacity: 0, y: 10 }}
	animate={{ opacity: 1, y: 0 }}
	transition={{ duration: 1 }}
>
	<section
		use:motion
		class="flex min-h-96 w-full flex-col items-start justify-center gap-y-4 px-10 lg:px-6"
	>
		<h1 class="text-2xl font-medium">About me</h1>
		<p class="font-extralight tracking-wider">
			Hey there! 👋 I'm Sai, a full-stack developer based in Mumbai with a passion for building
			digital products that actually work (most of the time). I love the entire journey of bringing
			ideas to life – from architecting systems and writing clean code to deploying features that
			solve real problems. My toolkit includes everything from web, mobile apps to backend services,
			and I'm always excited to learn whatever technology the project needs. When I'm not debugging
			at odd hours or optimizing something that's already fast enough, you'll find me exploring
			Mumbai's food scene, adding tabs to my "read later" collection, or having strong opinions
			about code formatting. I believe in writing code that doesn't make future-me cry, building
			things that matter, and the healing power of a good cup of chai.
		</p>
	</section>
</Motion>
