<script lang="ts">
	import { Motion } from 'svelte-motion';
	import Button from './ui/button/button.svelte';

	function downloadResume() {
		const link = document.createElement('a');
		link.href = '/files/Resume.pdf';
		link.download = 'Sai_Venkatram_Resume.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
</script>

<!-- Hero Section -->
<Motion
	let:motion
	initial={{ opacity: 0, y: 10 }}
	animate={{ opacity: 1, y: 0 }}
	transition={{ duration: 1 }}
>
	<div use:motion class="flex min-h-96 w-full items-center justify-between p-10 lg:p-6">
		<div class="flex flex-col items-start justify-center">
			<img
				src="/images/avatar.jpeg"
				class="my-6 h-32 w-32 rounded-full border border-black object-cover transition-all hover:border-4 hover:border-gray-400 md:hidden dark:border-white hover:dark:border-yellow-400"
				alt=""
			/>
			<h1 class="font-cirka text-5xl sm:text-6xl md:text-[56px]">Hi,<br /> I'm Sai Venkatram</h1>
			<p class="text-md font-mono text-gray-400 md:text-lg dark:text-gray-600">
				Fullstack Software Developer 👾
			</p>
			<Button variant="default" class="mt-6 p-6" onclick={downloadResume}>Download Resume</Button>
		</div>
		<img
			src="/images/avatar.jpeg"
			class="my-6 hidden h-40 w-40 rounded-full border border-black object-cover transition-all hover:border-4 hover:border-gray-400 md:block dark:border-white hover:dark:border-yellow-400"
			alt=""
		/>
	</div>
</Motion>
