<script lang="ts">
	import HeroAvatar from '$lib/assets/avatar.png?enhanced';
	import KribsLogo from '$lib/assets/kribs_app_icon.svg';
	import IEXLogo from '$lib/assets/iex_logo.svg';
	import KredereLogo from '$lib/components/custom/KredereLogo.svelte';
	import KCLLogo from '$lib/assets/kcl_logo.svg';
</script>

<!-- Hero Section -->
<section>
	<div
		class="flex flex-col items-start gap-y-9 font-display text-xl leading-relaxed tracking-normal md:text-2xl"
	>
		<!-- Beat 1: avatar + name (title) + subtitle + previously chips -->
		<div class="hero-beat flex flex-col gap-y-3">
			<div class="flex flex-col gap-y-1">
				<div class="flex items-end gap-x-4">
					<enhanced:img
						src={HeroAvatar}
						class="h-16 w-16 rounded-xl object-cover md:h-20 md:w-20"
						alt="Sai Venkatram"
					/>
					<span class="leading-none text-foreground">Hi, I'm Sai Venkatram</span>
				</div>
				<span class="text-foreground">A software developer based in Mumbai.</span>
			</div>

			<!-- Previously: label stacks above chips on mobile, inline on md+ -->
			<div class="flex flex-col gap-1.5 text-xs md:flex-row md:flex-wrap md:items-center md:text-sm">
				<span class="text-gray-400 dark:text-gray-500">Previously worked at</span>
				<div class="flex flex-wrap items-center gap-1.5">
					<span class="inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-gray-700 dark:bg-gray-800 dark:text-gray-200 [&_svg]:!h-3.5 [&_svg]:!w-3.5">
						<KredereLogo />
						<span>Kredere Wealth Partner</span>
					</span>
					<span class="inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
						<img src={IEXLogo} alt="Indian Energy Exchange" class="h-3.5 w-3.5" />
						<span>Indian Energy Exchange</span>
					</span>
				</div>
			</div>
		</div>


		<!-- Beat 3: current focus (Kribs) -->
		<div class="hero-beat flex flex-wrap items-center gap-x-2 text-foreground">
			<span>Currently building</span>
			<a
				href="https://kribs.app"
				target="_blank"
				rel="external noopener noreferrer"
				class="group relative inline-flex items-center"
			>
				<img
					src={KribsLogo}
					alt="Kribs"
					class="inline-block h-8 w-8 align-middle transition-all hover:-translate-y-0.5 hover:scale-105 md:h-10 md:w-10"
				/>
				<!-- Tooltip -->
				<span
					class="pointer-events-none absolute -top-3 left-1/2 z-10 w-max max-w-xs -translate-x-1/2 -translate-y-full whitespace-normal rounded-md bg-black px-3 py-2 text-center font-display text-xs font-normal text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-[calc(100%+0.25rem)] group-hover:opacity-100 dark:bg-white dark:text-gray-900"
				>
					India's smarter way to find flatmates - match on lifestyle, not just rent. <span class="font-medium">Tap to join the waitlist</span></span>
			</a>
		</div>
		<!-- Beat 4: software studio (Kongcode Labs) -->
		<p class="hero-beat flex flex-wrap items-center gap-x-2 text-foreground">
			<span>Co-founded</span>
			<span class="inline-flex items-center gap-x-1.5">
				<img
					src={KCLLogo}
					alt="Kongcode Labs"
					class="inline-block h-8 w-8 align-middle md:h-10 md:w-10"
				/>
				<span class="font-grotesk font-medium">Kongcode Labs</span>
			</span>
			<a
				href="https://kongcodelabs.com"
				target="_blank"
				rel="external noopener noreferrer"
				class="group inline-flex items-center gap-x-1 text-link underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-foreground dark:decoration-gray-700 dark:hover:decoration-foreground"
			>
				<span>→ helping founders ship</span>
			</a>
		</p>

		<!-- Beat 5: tech stack link -->
		<!-- <p class="hero-beat text-foreground">
			Curious about my tech stack?
			<a
				href="/stack"
				class="text-link underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-foreground dark:decoration-gray-700 dark:hover:decoration-foreground"
			>
				Click here.
			</a>
		</p>

		<!-- Beat 6: projects link -->
		<!-- <p class="hero-beat text-foreground">
			See what I've built?
			<a
				href="/projects"
				class="text-link underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-foreground dark:decoration-gray-700 dark:hover:decoration-foreground"
			>
				Click here.
			</a>
		</p> -->

		<!-- Hairline rule -->
		<div class="hero-beat h-px w-full bg-gray-200 dark:bg-gray-800"></div>

		<!-- Secondary text links -->
		<div class="hero-beat flex flex-col gap-y-3 text-xl font-display text-foreground">
			<p>
				Want to chat?
				<a
					href="https://cal.com/saivenkatram/connect"
					target="_blank"
					rel="external noopener noreferrer"
					class="text-link underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-foreground dark:decoration-gray-700 dark:hover:decoration-foreground"
				>
					Schedule a call
				</a>
			</p>
			<p>
				Need my resume?
				<a
					href="/files/Resume.pdf"
					download="Sai Venkatram - Resume.pdf"
					class="text-link underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-foreground dark:decoration-gray-700 dark:hover:decoration-foreground"
				>
					Download
				</a>
			</p>
				</div>
	</div>
</section>
