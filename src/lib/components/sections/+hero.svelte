<script lang="ts">
	import HeroAvatar from '$lib/assets/avatar.png?enhanced';
	import KribsLogo from '$lib/assets/kribs_app_icon.svg';
	import IEXLogo from '$lib/assets/iex_logo.svg';
	import KredereLogo from '$lib/components/custom/KredereLogo.svelte';
	import PropsynkLogo from '$lib/assets/propsynk_wordmark.svg?raw';
	import LinkedInLogo from '$lib/assets/linkedin_tile.svg';
	import GmailLogo from '$lib/assets/gmail_tile.svg';
	import CalcomLogo from '$lib/assets/calcom_tile.svg';
</script>

<section>
	<div
		class="flex flex-col items-start gap-y-9 font-display text-xl leading-relaxed tracking-normal md:text-2xl"
	>
		<div class="hero-beat flex flex-col gap-y-3">
			<div class="flex flex-col gap-y-1">
				<div class="flex flex-col items-start gap-y-4">
					<enhanced:img
						src={HeroAvatar}
						class="h-16 w-16 rounded-xl object-cover md:h-20 md:w-20"
						alt="Sai Venkatram"
						fetchpriority="high"
					/>
					<div class="flex flex-col items-start gap-y-3">
						<span class="leading-none text-foreground-strong">Hi, I'm Sai Venkatram. </span>
						<span class="text-sm text-foreground">Software developer based in Mumbai, India</span>
					</div>
				</div>
			</div>

			<div
				class="mt-2 flex flex-col gap-1.5 text-xs md:flex-row md:flex-wrap md:items-center md:text-sm"
			>
				<span class="text-gray-400 dark:text-gray-500">Previously worked at</span>
				<div class="flex flex-wrap items-center gap-1.5">
					<span
						class="inline-flex items-center gap-x-1.5 rounded-full bg-gray-200 px-2.5 py-1 text-gray-700 transition-transform duration-200 hover:translate-y-[-2px] dark:bg-gray-800 dark:text-gray-200 [&_svg]:!h-3.5 [&_svg]:!w-3.5"
					>
						<KredereLogo />
						<a target="_blank" rel="external noopener noreferrer" href="https://kredere.com"
							>Kredere Wealth Partner</a
						>
					</span>
					<span
						class="inline-flex items-center gap-x-1.5 rounded-full bg-gray-200 px-2.5 py-1 text-gray-700 transition-transform duration-200 hover:translate-y-[-2px] dark:bg-gray-800 dark:text-gray-200"
					>
						<img src={IEXLogo} alt="Indian Energy Exchange" class="h-3.5 w-3.5" />
						<a target="_blank" rel="external noopener noreferrer" href="https://iexindia.com"
							>Indian Energy Exchange</a
						>
					</span>
				</div>
			</div>
		</div>

		<p class="hero-beat flex flex-wrap items-center gap-x-2 text-foreground">
			<span>Fullstack Engineer at</span>
			<a
				href="https://propsynk.com"
				target="_blank"
				rel="external noopener noreferrer"
				class="group relative inline-flex items-center gap-x-1.5"
			>
				<!-- Themed icon+wordmark (inherits currentColor via ?raw inline) -->
				<span
					class="inline-flex h-7 items-center align-middle text-foreground-strong transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 md:h-8 [&_svg]:h-full [&_svg]:w-auto"
					aria-label="Propsynk"
				>
					<!-- eslint-disable-next-line svelte/no-at-html-tags -- static build-time SVG asset, not user input -->
					{@html PropsynkLogo}
				</span>
				<span
					class="pointer-events-none absolute -top-3 left-1/2 z-10 w-max max-w-xs -translate-x-1/2 -translate-y-full rounded-md bg-black px-3 py-2 text-center font-display text-xs font-normal whitespace-normal text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-[calc(100%+0.25rem)] group-hover:opacity-100 dark:bg-white dark:text-gray-900"
				>
					A canadian proptech startup 🇨🇦</span
				>
			</a>
		</p>

		<!-- Kribs logo is truly inline so the sentence wraps at any word boundary
		     instead of breaking at the logo (hence the whitespace-eating comments below). -->
		<p class="hero-beat text-foreground">
			Currently, building<!--
			-->
			<a
				href="https://kribs.app"
				target="_blank"
				rel="external noopener noreferrer"
				class="group relative inline-flex items-center align-middle"
				><img
					src={KribsLogo}
					alt="Kribs"
					class="inline-block h-9 w-9 align-middle [filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.15))] transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 md:h-10 md:w-10"
				/><span
					class="pointer-events-none absolute -top-3 left-1/2 z-10 w-max max-w-xs -translate-x-1/2 -translate-y-full rounded-md bg-black px-3 py-2 text-center font-display text-xs font-normal whitespace-normal text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-[calc(100%+0.25rem)] group-hover:opacity-100 dark:bg-white dark:text-gray-900"
					>Tap to join the waitlist</span
				></a
			> to make finding flats and flatmates suck less.
		</p>

		<div class="hero-beat h-px w-full bg-gray-200 dark:bg-gray-800"></div>

		<div class="hero-beat flex flex-col gap-y-6 font-display text-base text-foreground md:text-xl">
			<p>
				What tech stack do I use?
				<a
					href="/stack"
					class="text-link underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-foreground dark:decoration-gray-700 dark:hover:decoration-foreground"
				>
					Check it out here
				</a>
			</p>

			<p>
				Curious about my desk setup?
				<a
					href="/gear"
					class="text-link underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-foreground dark:decoration-gray-700 dark:hover:decoration-foreground"
				>
					See my gear
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

			<p class="flex flex-wrap items-center gap-x-3 gap-y-2">
				<span>Reach out to me on</span>
				<span class="flex items-center gap-x-3.5">
					<a
						href="mailto:saiv.contact@gmail.com"
						aria-label="Email (saiv.contact@gmail.com)"
						class="group relative inline-flex"
					>
						<img
							src={GmailLogo}
							alt="Email"
							class="h-8 w-8 rounded-[22%] [filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.15))] transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 md:h-9 md:w-9"
						/>
						<span
							class="pointer-events-none absolute -top-2 left-1/2 z-10 w-max -translate-x-1/2 -translate-y-full rounded-md bg-black px-2.5 py-1.5 font-display text-xs font-normal whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-[calc(100%+0.25rem)] group-hover:opacity-100 dark:bg-white dark:text-gray-900"
							>saiv.contact@gmail.com</span
						>
					</a>
					<a
						href="https://linkedin.com/in/saivenkatram"
						target="_blank"
						rel="external noopener noreferrer"
						aria-label="LinkedIn (/saivenkatram)"
						class="group relative inline-flex"
					>
						<img
							src={LinkedInLogo}
							alt="LinkedIn"
							class="h-8 w-8 rounded-[22%] [filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.15))] transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 md:h-9 md:w-9"
						/>
						<span
							class="pointer-events-none absolute -top-2 left-1/2 z-10 w-max -translate-x-1/2 -translate-y-full rounded-md bg-black px-2.5 py-1.5 font-display text-xs font-normal whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-[calc(100%+0.25rem)] group-hover:opacity-100 dark:bg-white dark:text-gray-900"
							>@saivenkatram</span
						>
					</a>
					<a
						href="https://cal.com/saivenkatram/connect"
						target="_blank"
						rel="external noopener noreferrer"
						aria-label="Book a call on Cal.com"
						class="group relative inline-flex"
					>
						<img
							src={CalcomLogo}
							alt="Cal.com"
							class="h-8 w-8 rounded-[22%] [filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.15))] transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 md:h-9 md:w-9"
						/>
						<span
							class="pointer-events-none absolute -top-2 left-1/2 z-10 w-max -translate-x-1/2 -translate-y-full rounded-md bg-black px-2.5 py-1.5 font-display text-xs font-normal whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-[calc(100%+0.25rem)] group-hover:opacity-100 dark:bg-white dark:text-gray-900"
							>Book a call</span
						>
					</a>
				</span>
			</p>
		</div>
	</div>
</section>
