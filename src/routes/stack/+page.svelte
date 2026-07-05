<script lang="ts">
	import CatBlink from '$lib/assets/cat-blink.gif';
	import PythonLogo from '$lib/assets/python_logo.svg';
	import GoLogo from '$lib/assets/go_wordmark.svg';
	import ReactLogo from '$lib/assets/react_logo.svg';
	import NextLogo from '$lib/assets/nextjs_logo.svg';
	import SvelteLogo from '$lib/assets/svelte_logo.svg';
	import HonoLogo from '$lib/assets/hono_logo.svg';
	import FlutterLogo from '$lib/assets/flutter_logo.svg';
	import NodeLogo from '$lib/assets/nodejs_logo.svg';
	import PostgresLogo from '$lib/assets/postgresql_logo.svg';
	import MongoLogo from '$lib/assets/mongodb_logo.svg';
	import DockerLogo from '$lib/assets/docker_logo.svg';
	import GCPLogo from '$lib/assets/gcp_logo.svg';
	import CloudflareLogo from '$lib/assets/cloudflare_logo.svg';
	import FigmaLogo from '$lib/assets/figma_logo.svg';
	import GreptileLogo from '$lib/assets/greptile_logo.svg';
	import LazyVimLogo from '$lib/assets/lazyvim_logo.svg';
	import BrunoLogo from '$lib/assets/bruno_logo.svg';
	import GhosttyLogo from '$lib/assets/ghostty_logo.svg';
	import AWSLogo from '$lib/assets/aws_icon.svg';
	// fullTile SVGs already include their own tile background (rendered edge-to-edge).
	import CodexTile from '$lib/assets/codex_tile.svg';
	import ClaudeTile from '$lib/assets/claude_tile.svg';
	import CursorTile from '$lib/assets/cursor_tile.svg';
	import WisprTile from '$lib/assets/wispr_tile.svg';
	// raw (?raw) SVGs are inlined so their glyph follows currentColor for theming.
	import VercelRaw from '$lib/assets/vercel_logo.svg?raw';
	import CodeRabbitRaw from '$lib/assets/coderabbit_logo.svg?raw';

	type Tech = {
		name: string;
		href: string;
		reason: string;
		tile?: string;
		logo?: string;
		raw?: string;
		fullTile?: string;
		white?: boolean;
		wide?: boolean;
		size?: number;
	};
	type Group = { label: string; items: Tech[] };

	const groups: Group[] = [
		{
			label: 'What I build with',
			items: [
				{
					name: 'React',
					logo: ReactLogo,
					tile: '#20232A',
					href: 'https://react.dev',
					reason: 'My go-to for web'
				},
				{
					name: 'Svelte',
					logo: SvelteLogo,
					href: 'https://svelte.dev',
					reason: 'What this very site runs on'
				},
				{
					name: 'Next.js',
					logo: NextLogo,
					tile: '#000000',
					size: 22,
					href: 'https://nextjs.org',
					reason: 'When React needs a backend too'
				},
				{
					name: 'Flutter',
					logo: FlutterLogo,
					href: 'https://flutter.dev',
					reason: 'One codebase, both app stores'
				},
				{
					name: 'Node.js',
					logo: NodeLogo,
					tile: '#0d121c',
					href: 'https://nodejs.org',
					reason: 'The reliable backend workhorse'
				},
				{
					name: 'Hono',
					logo: HonoLogo,
					tile: '#1e1e20',
					href: 'https://hono.dev',
					reason: 'Tiny, fast backends without the ceremony'
				},
				{
					name: 'Go',
					logo: GoLogo,
					tile: '#00ACD7',
					white: true,
					wide: true,
					href: 'https://go.dev',
					reason: 'When it needs to be fast and boring'
				},
				{
					name: 'Python',
					logo: PythonLogo,
					href: 'https://www.python.org',
					reason: 'For scripts, data, and glue'
				},
				{
					name: 'PostgreSQL',
					logo: PostgresLogo,
					href: 'https://www.postgresql.org',
					reason: 'My default database, full stop'
				},
				{
					name: 'MongoDB',
					logo: MongoLogo,
					tile: '#001F2C',
					href: 'https://www.mongodb.com',
					reason: 'When the shape keeps changing'
				},
				{
					name: 'Docker',
					logo: DockerLogo,
					tile: '#2496ED',
					white: true,
					href: 'https://www.docker.com',
					reason: 'So it runs the same everywhere :)'
				}
			]
		},
		{
			label: 'Where it runs',
			items: [
				{
					name: 'Vercel',
					raw: VercelRaw,
					tile: '#000000',
					href: 'https://vercel.com',
					reason: 'Where the frontends live'
				},
				{
					name: 'AWS',
					logo: AWSLogo,
					tile: '#232F3E',
					wide: true,
					href: 'https://aws.amazon.com',
					reason: 'Where most of it lives'
				},
				{
					name: 'GCP',
					logo: GCPLogo,
					href: 'https://cloud.google.com',
					reason: 'The other cloud I reach for'
				},
				{
					name: 'Cloudflare',
					logo: CloudflareLogo,
					size: 22,
					href: 'https://www.cloudflare.com',
					reason: 'Edge, DNS, and protection'
				}
			]
		},
		{
			label: 'Tools that power my work',
			items: [
				{
					name: 'Claude',
					fullTile: ClaudeTile,
					href: 'https://claude.ai',
					reason: 'My daily pair programmer'
				},
				{
					name: 'Codex',
					fullTile: CodexTile,
					href: 'https://openai.com/codex',
					reason: 'Another set of coding hands'
				},
				{
					name: 'Cursor',
					fullTile: CursorTile,
					href: 'https://cursor.com',
					reason: 'Arguably one of the best IDE experience'
				},
				{
					name: 'LazyVim',
					logo: LazyVimLogo,
					href: 'https://www.lazyvim.org',
					reason: 'Powers all my personal projects'
				},
				{
					name: 'Ghostty',
					logo: GhosttyLogo,
					href: 'https://ghostty.org',
					reason: 'The terminal I live in'
				},
				{
					name: 'Bruno',
					logo: BrunoLogo,
					size: 24,
					href: 'https://www.usebruno.com',
					reason: 'My API client - offline and git-friendly'
				},
				{
					name: 'Wispr Flow',
					fullTile: WisprTile,
					href: 'https://wisprflow.ai',
					reason: 'Talk instead of type'
				},
				{
					name: 'Greptile',
					logo: GreptileLogo,
					tile: '#00ED99',
					size: 22,
					href: 'https://greptile.com',
					reason: 'AI code review companion #1'
				},
				{
					name: 'CodeRabbit',
					raw: CodeRabbitRaw,
					tile: '#FF570A',
					white: true,
					href: 'https://coderabbit.ai',
					reason: 'AI code review companion #2'
				},
				{
					name: 'Figma',
					logo: FigmaLogo,
					tile: '#000000',
					href: 'https://www.figma.com',
					reason: 'Where I design before I build'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Tech stack · Sai Venkatram</title>
</svelte:head>

<div class="mx-auto flex max-w-3xl flex-col items-start gap-y-10 px-6 py-20 md:px-10">
	<a
		href="/"
		class="hero-beat font-display text-sm text-gray-500 underline-offset-4 hover:underline dark:text-gray-400"
	>
		← Back to home
	</a>

	<div class="hero-beat flex items-center gap-x-2">
		<h1 class="font-display text-2xl text-foreground-strong">My toolkit</h1>
		<img
			src={CatBlink}
			alt=""
			aria-hidden="true"
			fetchpriority="low"
			class="h-12 w-auto shrink-0 opacity-90 select-none pointer-fine:hidden"
		/>
	</div>

	<div class="flex w-full flex-col gap-y-9">
		{#each groups as group, i (group.label)}
			<section
				class="hero-beat flex w-full flex-col gap-y-3"
				style="animation-delay: {80 + i * 90}ms"
			>
				<h2
					class="mb-2 font-display text-xs font-medium tracking-wider text-gray-400 uppercase dark:text-gray-500"
				>
					{group.label}
				</h2>
				<div
					class="grid w-full grid-cols-1 gap-x-4 gap-y-8 pointer-fine:grid-cols-4 pointer-fine:gap-y-6"
				>
					{#each group.items as tech (tech.name)}
						<a
							href={tech.href}
							target="_blank"
							rel="external noopener noreferrer"
							class="group relative inline-flex items-center gap-x-3"
						>
							{#if tech.fullTile}
								<img
									src={tech.fullTile}
									alt=""
									class="h-11 w-11 shrink-0 overflow-hidden rounded-[22%] shadow-[0_2px_5px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06] pointer-fine:h-9 pointer-fine:w-9"
								/>
							{:else}
								<span
									class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[22%] shadow-[0_2px_5px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06] pointer-fine:h-9 pointer-fine:w-9 {tech.tile
										? 'text-white'
										: 'bg-white text-[#0d0d0f]'}"
									style={tech.tile ? `background-color: ${tech.tile}` : undefined}
									aria-hidden="true"
								>
									{#if tech.raw}
										<span
											class="flex items-center justify-center [&_svg]:h-full [&_svg]:w-full [&_svg]:fill-current"
											style="height: {tech.size ?? 18}px; width: {tech.size ?? 18}px"
										>
											<!-- eslint-disable-next-line svelte/no-at-html-tags -- static build-time SVG asset, not user input -->
											{@html tech.raw}
										</span>
									{:else if tech.logo}
										<img
											src={tech.logo}
											alt=""
											class="my-auto shrink-0 {tech.white ? 'brightness-0 invert' : ''}"
											style={tech.wide
												? 'width: 27px; height: auto'
												: `height: ${tech.size ?? 18}px; width: ${tech.size ?? 18}px`}
										/>
									{:else}
										<span class="text-xs font-semibold text-gray-400">{tech.name.charAt(0)}</span>
									{/if}
								</span>
							{/if}
							<span class="flex min-w-0 flex-col">
								<span class="text-md font-display font-medium text-foreground-strong"
									>{tech.name}</span
								>
								<!-- Reason as an always-visible subtitle on cursor-less (touch) devices;
								     hidden where a cursor exists, since the hover tooltip takes over. -->
								<span
									class="mt-0.5 font-display text-sm leading-snug text-gray-500 dark:text-gray-400 pointer-fine:hidden"
								>
									{tech.reason}
								</span>
							</span>
							<!-- Info tooltip: the reason on hover (cursor devices only — useless on touch
							     and would otherwise overflow the viewport width). -->
							<span
								class="pointer-events-none absolute -top-2 left-9 z-10 hidden w-max max-w-[15rem] -translate-y-full rounded-md bg-black px-2.5 py-1.5 font-display text-xs leading-snug font-normal whitespace-normal text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 dark:bg-white dark:text-gray-900 pointer-fine:block"
							>
								{tech.reason}
							</span>
						</a>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>
