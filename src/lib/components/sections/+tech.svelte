<script lang="ts">
	import GolangLogo from '$lib/assets/golang_logo.svg';
	import HonoJSLogo from '$lib/assets/hono_logo.svg';
	import TypescriptLogo from '$lib/assets/ts_logo.svg';
	import JavascriptLogo from '$lib/assets/js_logo.svg';
	import PythonLogo from '$lib/assets/python_logo.svg';
	import DockerLogo from '$lib/assets/docker_logo.svg';
	import NextJSLogo from '$lib/assets/nextjs_logo.svg';
	import SvelteLogo from '$lib/assets/svelte_logo.svg';
	import FlutterLogo from '$lib/assets/flutter_logo.svg';
	import MongoDBLogo from '$lib/assets/mongodb_logo.svg';
	import PostgresLogo from '$lib/assets/postgresql_logo.svg';
	import AWSLogo from '$lib/assets/aws_logo.svg';

	interface Technology {
		logo: string;
		name: string;
		customCssTag: string;
	}

	const technologies: Technology[] = [
		{ logo: GolangLogo, name: 'go', customCssTag: 'size1' },
		{ logo: JavascriptLogo, name: 'javascript', customCssTag: 'size2' },
		{ logo: TypescriptLogo, name: 'typescript', customCssTag: 'size2' },
		{ logo: PythonLogo, name: 'python', customCssTag: 'size2' },
		{ logo: NextJSLogo, name: 'next.js', customCssTag: 'size2' },
		{ logo: SvelteLogo, name: 'svelte', customCssTag: 'size2' },
		{ logo: FlutterLogo, name: 'flutter', customCssTag: 'size2' },
		{ logo: HonoJSLogo, name: 'hono js', customCssTag: 'size2' },
		{ logo: PostgresLogo, name: 'postgresql', customCssTag: 'size2' },
		{ logo: MongoDBLogo, name: 'mongodb', customCssTag: 'size2' },
		{ logo: DockerLogo, name: 'docker', customCssTag: 'size2' },
		{ logo: AWSLogo, name: 'aws', customCssTag: 'size2' }
	];
</script>

<section class="section section-animation py-14 duration-1000 slide-in-from-bottom-15">
	<h1 class="section-title">TECH I USE</h1>

	<div class="grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
		{#each technologies as e (e.name)}
			<div class="group flex w-full items-center justify-start gap-x-4">
				<p class="text-sm font-light text-gray-600 dark:text-gray-200">
					{e.name}
				</p>
				<img src={e.logo} alt={e.name} class={e.customCssTag} />
			</div>
		{/each}
	</div>
</section>

<style>
	.size1 {
		margin-top: 4px;
		width: 36px;
		height: 36px;
	}

	.size2 {
		margin-top: 4px;
		width: 18px;
		height: 18px;
	}
</style>
