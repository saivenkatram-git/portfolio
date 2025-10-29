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
			designation: 'software engineer',
			company: 'indian energy exchange',
			date: 'apr 2024 - nov 2024',
			companyLogo: IEXLogo
		},
		{
			designation: 'sr. software engineer',
			company: 'kredere wealth partner',
			date: 'nov 2024 - sep 2025',
			companyLogo: KredereLogo
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

		<div class="flex w-full flex-col gap-y-4">
			{#each TimelineComponents as e, i (e.company)}
				<div class="group flex w-full items-center gap-x-4 lg:gap-x-6">
					<div class="flex flex-col items-center">
						<!-- Logo -->
						<div
							class="
            rounded-lg border border-gray-900 p-3
            "
						>
							<img
								src={e.companyLogo}
								alt="{e.company} logo"
								class="h-5 w-5 opacity-80 transition-opacity group-hover:opacity-100"
							/>
						</div>
					</div>

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
				{#if i < TimelineComponents.length - 1}
					<div class="ml-[22px] h-12 w-[0.8px] bg-gradient-to-b from-gray-800 to-gray-950"></div>
				{/if}
			{/each}
		</div>
	</section></Motion
>
