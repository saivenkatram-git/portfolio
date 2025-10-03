<script lang="ts">
	import { Motion } from 'svelte-motion';
	import IEXLogo from '$lib/assets/iex_logo.svg';
	import KredereWhiteLogo from '$lib/assets/kredere_logo_white.svg';
	import KredereDarkLogo from '$lib/assets/kredere_logo_dark.svg';
	import { mode } from 'mode-watcher';

	interface TimelineComponent {
		title: string;
		date: string;
	}

	const TimelineComponents: TimelineComponent[] = [
		{
			title: 'Manipal University Jaipur',
			date: 'asdasd'
		},
		{
			title: 'Indian Energy Exchange',
			date: 'asdasd'
		},
		{
			title: 'Kredere Wealth Partner',
			date: 'asdasd'
		}
	];
</script>

<Motion
	let:motion
	initial={{ opacity: 0, y: 10 }}
	animate={{ opacity: 1, y: 0 }}
	transition={{ duration: 1 }}
>
	<section
		use:motion
		class="flex min-h-40 w-full flex-col items-start justify-center gap-y-4 px-10 py-4 lg:px-6"
	>
		<h1 class="text-2xl font-medium">Timeline</h1>
		<img src="/images/muj_logo.png" alt="" class="h-10 w-10" />
		<img src={IEXLogo} alt="" class="h-8 w-8" />
		<img
			src={mode.current == 'dark' ? KredereWhiteLogo : KredereDarkLogo}
			alt=""
			class="h-10 w-10"
		/>
	</section></Motion
>
