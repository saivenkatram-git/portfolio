<script lang="ts">
	import KredereLogo from '$lib/components/custom/KredereLogo.svelte';
	import IEXLogo from '$lib/assets/iex_logo.svg';
	import type { Component } from 'svelte';

	interface TimelineComponent {
		company: string;
		designation: string;
		date: string;
		companyLogo: string | Component;
	}

	const TimelineComponents: TimelineComponent[] = [
		{
			designation: 'software engineer',
			company: 'indian energy exchange',
			date: 'apr 2024 - oct 2024',
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

<section class="section section-animation py-14 duration-700 slide-in-from-bottom-15">
	<h1 class="section-title">WORK</h1>

	<div class="flex w-full flex-col gap-y-4">
		{#each TimelineComponents as e, i (e.company)}
			<div class="group flex w-full items-center gap-x-4 lg:gap-x-6">
				<div class="flex flex-col items-center">
					<!-- Logo -->
					<div
						class="
            rounded-lg border border-gray-300 p-3 shadow-sm
            dark:border-gray-900
            "
					>
						{#if typeof e.companyLogo === 'string'}
							<img
								src={e.companyLogo}
								alt="{e.company} logo"
								class="h-5 w-5 opacity-80 transition-opacity group-hover:opacity-100"
							/>
						{:else}
							<svelte:component this={e.companyLogo} />
						{/if}
					</div>
				</div>

				<!-- Content -->
				<div class="flex-1">
					<p class="text-sm font-light text-gray-600 dark:text-gray-200">
						{e.designation}
					</p>
					<p class="mt-1 text-xs text-gray-400 dark:text-gray-500">
						{e.company}
					</p>
				</div>

				<!-- Date -->
				<p class="text-right text-xs text-gray-500 dark:text-gray-600">
					{e.date}
				</p>
			</div>
			{#if i < TimelineComponents.length - 1}
				<div
					class="ml-[22px] h-12 w-[0.8px] bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-800 dark:to-gray-900"
				></div>
			{/if}
		{/each}
	</div>
</section>
