<script lang="ts">
	import { Motion } from 'svelte-motion';
	import KredereLogo from '$lib/assets/kredere_logo.svg';
	import IEXLogo from '$lib/assets/iex_logo.svg';

	interface TimelineComponent {
		company: string;
		designation: string;
		date: string;
		companyLogo: string;
	}

	const TimelineComponents: TimelineComponent[] = [
		{
			designation: 'sr. software engineer',
			company: 'kredere wealth partner',
			date: 'november 2024 - september 2025',
			companyLogo: KredereLogo
		},
		{
			designation: 'software engineer',
			company: 'indian energy exchange',
			date: 'april 2024 - november 2024',
			companyLogo: IEXLogo
		}
	];
</script>

<Motion
	let:motion
	initial={{ opacity: 0, y: 40 }}
	animate={{ opacity: 1, y: 0 }}
	transition={{ duration: 1 }}
>
	<section
		use:motion
		class="flex min-h-40 w-full flex-col items-start justify-center gap-y-4 px-10 py-14 font-mono lg:px-6"
	>
		<h1 class="text-sm font-light tracking-[0.2em] text-gray-500">WORK</h1>

		<div class="flex w-full flex-col gap-y-8">
			{#each TimelineComponents as e (e.company)}
				<div class="group flex w-full items-center gap-x-4 lg:gap-x-6">
					<!-- Logo -->
					<img
						src={e.companyLogo}
						alt="{e.company} logo"
						class="h-8 w-8 opacity-80 transition-opacity group-hover:opacity-100"
					/>

					<!-- Content -->
					<div class="flex-1">
						<p class="text-sm font-light text-gray-200">
							{e.designation}
						</p>
						<p class="mt-1 text-xs text-gray-500">
							{e.company}
						</p>
					</div>

					<!-- Date -->
					<p class="text-right text-xs text-gray-600">
						{e.date}
					</p>
				</div>
			{/each}
		</div>
	</section></Motion
>
