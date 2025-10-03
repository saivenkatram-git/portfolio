<script lang="ts">
	import { Motion } from 'svelte-motion';

	interface TimelineComponent {
		company: string;
		roleType: string;
		designation: string;
		date: string;
	}

	const TimelineComponents: TimelineComponent[] = [
		{
			designation: 'Software Engineer',
			roleType: 'Full Time',
			company: 'Indian Energy Exchange',
			date: 'April 2024 - November 2024'
		},
		{
			designation: 'Senior Software Engineer',
			roleType: 'Full Time',
			company: 'Kredere Wealth Partner',
			date: 'November 2024 - September 2025'
		}
	];
</script>

<Motion
	let:motion
	initial={{ opacity: 0, y: 10 }}
	animate={{ opacity: 1, y: 0 }}
	transition={{ duration: 1.2 }}
>
	<section
		use:motion
		class="flex min-h-40 w-full flex-col items-start justify-center gap-y-4 px-10 py-14 lg:px-6"
	>
		<h1 class="font-cirka text-2xl font-bold">Timeline</h1>

		{#each TimelineComponents as e, index (e.company)}
			<div class="flex w-full items-start justify-between">
				<div class="flex flex-col items-start justify-center">
					<p class="font-medium tracking-wider">
						{e.designation},
						<span class="text-sm text-gray-400 dark:text-gray-600">{e.roleType}</span>
					</p>
					<p class="font-normal tracking-wider text-purple-600 dark:text-yellow-400">{e.company}</p>
					<div class="my-4 rounded-lg bg-gray-300 px-3 py-2 lg:hidden dark:bg-gray-800">
						<p class="text-sm">{e.date}</p>
					</div>
					{#if index < TimelineComponents.length - 1}
						<div class="h-20 w-1 rounded-lg bg-gray-300 lg:my-2 dark:bg-gray-700"></div>
					{/if}
				</div>
				<div>
					<p class="hidden py-2 text-sm lg:block">{e.date}</p>
				</div>
			</div>
		{/each}
	</section></Motion
>
