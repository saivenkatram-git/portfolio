<script lang="ts">
	import { Motion } from 'svelte-motion';
	import GolangLogo from '$lib/assets/golang_logo.svg';
	import HonoJSLogo from '$lib/assets/hono_logo.svg';
	import FlutterLogo from '$lib/assets/flutter_logo.svg';
	import { ArrowRight } from '@lucide/svelte';

	type ProjectStatus = 'active' | 'in progress' | 'archived';

	interface TechStack {
		logo: string;
		url: string;
		name: string;
		linkTitle: string;
		customCssTag: string;
	}

	interface Project {
		name: string;
		description: string;
		status: ProjectStatus;
		stack: TechStack[];
		linkTitle?: string;
		source?: string;
		sourceText?: string;
	}

	const projects: Project[] = [
		{
			name: 'zen commit',
			description:
				'An open-source, easy to use CLI tool for conventional commits to promote developer productivity and follow commiting standards.',
			status: 'active',
			stack: [
				{
					name: 'Golang',
					logo: GolangLogo,
					url: 'https://go.dev/',
					linkTitle: 'Checkout Go Lang :)',
					customCssTag: 'size1'
				}
			],
			source: 'https://github.com/saivenkatram-git/zencommit',
			sourceText: 'check out on github!',
			linkTitle: 'open zen commit'
		},
		{
			name: 'brandfolio',
			description:
				"A central hub for instantly accessing any company's official brand assets, including logos, colors, and fonts. It ensures every design stays perfectly on-brand by giving teams a single, reliable source of truth.",
			stack: [
				{
					name: 'HonoJS',
					logo: HonoJSLogo,
					url: 'https://hono.dev/',
					linkTitle: 'Checkout HonoJS (a powerful js/ts backend framework)',
					customCssTag: 'size2'
				}
			],
			status: 'in progress',
			source: 'https://github.com/saivenkatram-git/zencommit',
			sourceText: 'check out on github!'
		},
		{
			name: 'bux',
			description:
				'A cross-platform personal finance app with budgeting, expense tracking, and financial analytics dashboard. Implemented secure user authentication and real-time data synchronization across devices.',
			stack: [
				{
					name: 'Flutter',
					logo: FlutterLogo,
					url: 'https://flutter.dev/',
					linkTitle: 'Checkout Flutter (a fast dart-based cross-platform movbile framework)',
					customCssTag: 'size2'
				}
			],
			status: 'in progress',
			source: 'https://github.com/saivenkatram-git/zencommit',
			sourceText: 'check out on github!'
		}
	];
</script>

<Motion
	let:motion
	initial={{ opacity: 0, y: 45 }}
	animate={{ opacity: 1, y: 0 }}
	transition={{ duration: 1 }}
>
	<section
		use:motion
		class="flex min-h-40 w-full flex-col items-start justify-center gap-y-4 px-10 py-6 font-mono lg:px-6"
	>
		<h1 class="text-sm font-light tracking-[0.2em] text-gray-500">RECENT PROJECTS</h1>

		<div class="flex w-full flex-col gap-y-4">
			{#each projects as e (e.name)}
				<div class="group flex w-full flex-col items-start gap-x-4 gap-y-2 lg:gap-x-6">
					<p class="text-sm font-light text-gray-200">
						{e.name}
					</p>
					<p class="text-sm font-light text-gray-500">
						{e.description}
					</p>
					<div class="flex w-full flex-col items-start justify-between lg:flex-row lg:items-center">
						<div class="flex items-center gap-2">
							<!-- Built using... -->
							<p class="mt-1 text-xs text-gray-600">Built using</p>
							{#each e.stack as s (s.name)}
								<a
									href={s.url}
									rel="external noopener noreferrer"
									title={s.linkTitle}
									target="_blank"
									class="mt-1 text-xs text-gray-600 transition-colors hover:text-white">{s.name}</a
								>
								<img src={s.logo} alt="tech stack logo" class={s.customCssTag} />
							{/each}
						</div>

						<!-- Source link -->
						{#if e.source && e.sourceText && e.linkTitle}
							<a
								href={e.source}
								rel="external noopener noreferrer"
								target="_blank"
								title={e.linkTitle}
								class="mt-2 flex items-center font-mono text-xs font-light text-yellow-500 transition-all hover:-translate-y-0.5 hover:underline hover:underline-offset-4
              "
							>
								{e.sourceText}
								<ArrowRight class="h-4 w-4" />
							</a>
						{:else}
							<!-- Status Pill -->
							<div
								class="mt-4 flex h-6 items-center justify-center gap-x-2 rounded-full border border-gray-700 bg-gray-900/10 px-2"
							>
								<p class="font-mono text-[12px] font-light text-gray-500">
									{e.status}
								</p>
							</div>
						{/if}
					</div>

					<!-- Divider -->
					<div class="mt-2 h-[0.4px] w-full bg-gradient-to-r from-gray-800 to-gray-950"></div>
				</div>
			{/each}
		</div>
	</section>
</Motion>

<style>
	.size1 {
		margin-top: 4px;
		width: 36px;
		height: 36px;
	}

	.size2 {
		margin-top: 4px;
		width: 20px;
		height: 20px;
	}
</style>
