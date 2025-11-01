<script lang="ts">
	import Hero from '$lib/components/sections/+hero.svelte';
	import AboutMe from '$lib/components/sections/+about-me.svelte';
	import Work from '$lib/components/sections/+work.svelte';
	import Projects from '$lib/components/sections/+projects.svelte';
	import Tech from '$lib/components/sections/+tech.svelte';
	import Footer from '$lib/components/sections/+footer.svelte';
</script>

<div class="mx-auto flex max-w-3xl flex-col items-center">
	<Hero />
	<AboutMe />
	<Work />
	<Projects />
	<Tech />
	<Footer />
</div>
