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
	import ReactLogo from '$lib/assets/react_logo.svg';
	import FigmaLogo from '$lib/assets/figma_logo.svg';

	interface Technology {
		logo: string;
		name: string;
	}

	const technologies: Technology[] = [
		{ logo: GolangLogo, name: 'go' },
		{ logo: JavascriptLogo, name: 'javascript' },
		{ logo: TypescriptLogo, name: 'typescript' },
		{ logo: PythonLogo, name: 'python' },
		{ logo: NextJSLogo, name: 'next.js' },
		{ logo: ReactLogo, name: 'react' },
		{ logo: SvelteLogo, name: 'svelte' },
		{ logo: FlutterLogo, name: 'flutter' },
		{ logo: HonoJSLogo, name: 'hono js' },
		{ logo: PostgresLogo, name: 'postgresql' },
		{ logo: MongoDBLogo, name: 'mongodb' },
		{ logo: DockerLogo, name: 'docker' },
		{ logo: AWSLogo, name: 'aws' },
		{ logo: FigmaLogo, name: 'figma' }
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
				<img src={e.logo} alt={e.name} class="h-5 w-5" />
			</div>
		{/each}
	</div>
</section>
