<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import MobileDock from '$lib/components/custom/MobileDock.svelte';
	import { dock } from '$lib/dockState.svelte';

	// Web-optimized from the original DNG/MOV captures (see src/lib/assets/gear).
	import Hero1Mp4 from '$lib/assets/gear/IMG_4586.mp4';
	import Hero1Webm from '$lib/assets/gear/IMG_4586.webm';
	import Hero2Mp4 from '$lib/assets/gear/IMG_4587.mp4';
	import Hero2Webm from '$lib/assets/gear/IMG_4587.webm';
	import HeroPoster from '$lib/assets/gear/hero-poster.webp';

	import Macbook from '$lib/assets/gear/macbookpro.webp';
	import KeyboardTop from '$lib/assets/gear/main_keyboard_top.webp';
	import KeyboardSide from '$lib/assets/gear/main_keyboard_side.webp';
	import MiceTop from '$lib/assets/gear/main_mice_top.webp';
	import MiceSide from '$lib/assets/gear/main_mice_side.webp';
	import MonitorFront from '$lib/assets/gear/monitor_front.webp';
	import MonitorTop from '$lib/assets/gear/monitor_top.webp';
	import Mic from '$lib/assets/gear/mic.webp';
	import Speakers from '$lib/assets/gear/speakers.webp';
	import GamingKb1 from '$lib/assets/gear/gaming-keyboard-1.webp';
	import GamingKb2 from '$lib/assets/gear/gaming-keyboard-2.webp';
	import ProdKb1 from '$lib/assets/gear/productivity-keyboard-1.webp';
	import ProdKb2 from '$lib/assets/gear/productivity-keyboard-2.webp';

	type Link = { label: string; href: string };
	type LongDescPart = string | Link;
	type Item = {
		name: string;
		desc: string; // short line on the card
		photos: string[]; // 1+ shots; first is the card thumbnail
		longDesc: string | LongDescPart[]; // fuller blurb in the modal; array allows inline links
		links?: Link[];
	};

	const inlineLinkClass =
		'font-medium text-link underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-foreground dark:decoration-gray-700 dark:hover:decoration-foreground';
	const items: Item[] = [
		{
			name: 'MacBook Pro 16 (M2 Pro)',
			desc: 'Laptop',
			photos: [Macbook],
			longDesc: [
				'The machine is powered by the M2 Pro chip with 32GB RAM and 1TB of storage. It has been 3+ years and still to this day, this machine handles bloated IDEs, designing on figma, running multiple docker ( ditch and use ',
				{ label: 'Orbstack', href: 'https://orbstack.dev' },
				' 😉) containers and a browser with forty tabs without breaking a sweat. I was on an Intel MBP before this and the difference was immediate - no more fan noise during builds, and battery that actually lasts through a full day. No upgrading for another year it seems haha!'
			]
		},
		{
			name: 'Gigabyte M32U',
			desc: 'Monitor',
			photos: [MonitorFront, MonitorTop],
			longDesc:
				'A 32-inch 4K monitor that I have had for a couple of years now and I do not see any reason to upgrade as of right now (Probably, would upgrade when there is 5k 32inch Mini LED Panel with a minimum of 120hz, out on the market). At this size and resolution, you get genuinely usable screen real estate - code on the left, browser and docs on the right, no juggling. The 144Hz makes it decent for gaming too. The stand is not great out of the box, so I would recommend pairing it with a monitor arm.',
			links: [
				{
					label: 'Buy now (IN)',
					href: 'https://www.amazon.in/GIGABYTE-M32U-FreeSync-Compatible-Response/dp/B0B4DL7XCY'
				},
				{
					label: 'Buy now (US)',
					href: 'https://www.amazon.com/dp/B083GRVFXN?lv=shuf&channelId=500&plpRedirect=mhFallback&th=1'
				}
			]
		},
		{
			name: 'Nuphy Air75 V3',
			desc: 'Productivity Keyboard #1 (Main)',
			photos: [KeyboardSide, KeyboardTop],
			longDesc:
				'My daily driver keyboard. Low-profile switches mean your wrists sit at a more natural angle, and the wireless connectivity keeps the desk clean. I have tried a lot of keyboards at this point - the Air75 is the one I keep coming back to for long work sessions. Compact 75% layout without losing the function row.',
			links: [
				{
					label: 'Buy now (IN)',
					href: 'https://ctrlshiftstore.com/products/nuphy-air75-v3?variant=43574739664989'
				},
				{ label: 'Buy now (US)', href: 'https://nuphy.com/products/nuphy-air75-v3' }
			]
		},
		{
			name: 'Endgame XM2we',
			desc: 'Primary mouse',
			photos: [MiceSide, MiceTop],
			longDesc:
				'Wireless and under 60 grams. If you have only ever used a standard mouse, the weight difference is shocking, this thing feels like it is barely there. I use it for both work and gaming. Battery life is solid, I charge it maybe once every 4 days which is pretty good for a gaming mice.',
			links: [
				{
					label: 'Buy now (IN)',
					href: 'https://www.amazon.in/ENDGAME-GEAR-EGG-XM2WE-BLK-Gaming-Wireless/dp/B0BVKZ2RR3?th=1'
				},
				{
					label: 'Buy now (US)',
					href: 'https://www.amazon.com/ENDGAME-GEAR-EGG-XM2WE-BLK-Gaming-Wireless/dp/B0BVKZ2RR3?th=1'
				}
			]
		},
		{
			name: 'Shure SM7B',
			desc: 'Microphone',
			photos: [Mic],
			longDesc:
				'The SM7B is a broadcast microphone - it is what podcasters and streamers use, and it shows. On calls, people regularly ask what mic I am using. It needs a decent audio interface to drive it properly, and you will want a boom arm so it is not sitting on your desk. Overkill for most people, but if you spend a lot of time on calls it is worth it.',
			links: [
				{
					label: 'Buy now (IN)',
					href: 'https://www.amazon.in/Shure-SM7B-Cardioid-Dynamic-Microphone/dp/B0002E4Z8M'
				},
				{
					label: 'Buy now (US)',
					href: 'https://www.amazon.com/Shure-SM7B-Cardioid-Dynamic-Microphone/dp/B0002E4Z8M?th=1'
				}
			]
		},
		{
			name: 'AudioEngine A2+',
			desc: 'Desktop monitors',
			photos: [Speakers],
			longDesc:
				'Compact powered desktop speakers that sound far bigger than their size suggests. Both wired and Bluetooth input, which is handy. If you are used to laptop speakers or cheap computer audio, these will make your setup feel like a different world.',
			links: [
				{
					label: 'Buy now (IN)',
					href: 'https://www.amazon.in/Audioengine-A2-Wireless-Bluetooth-Amplifier/dp/B07MYV2527?th=1'
				},
				{
					label: 'Buy now (US)',
					href: 'https://www.amazon.com/Audioengine-A2-Wireless-Bluetooth-Amplifier/dp/B07MYV2527?th=1'
				}
			]
		},
		{
			name: 'IQUNIX MQ80',
			desc: 'Productivity Keyboard #2',
			photos: [ProdKb1],
			longDesc:
				'A fuller, heavier keyboard compared to the Air75. The MQ80 has a more traditional key feel - deeper travel, more deliberate feedback. I rotate this in when I want something that feels more substantial. The build quality is excellent; it does not flex at all.',
			links: [
				{
					label: 'Buy now (IN)',
					href: 'https://ctrlshiftstore.com/products/iqunix-mq80-keyboard?variant=43371321622621'
				},
				{
					label: 'Buy now (US)',
					href: 'https://www.amazon.com/dp/B0F8NDVHJW?lv=shuf&channelId=500&plpRedirect=mhFallback&th=1'
				}
			]
		},
		{
			name: 'Lofree Flow 2',
			desc: 'Productivity Keyboard #3',
			photos: [ProdKb2],
			longDesc:
				'Low-profile mechanical with a feel that is hard to describe until you try it - somewhere between membrane and mechanical, but in a good way. Quieter than most mechanicals, which makes it a good option if you are in shared spaces. The design is clean enough to leave on any desk without it looking out of place.',
			links: [
				{
					label: 'Buy now (IN)',
					href: 'https://www.amazon.in/Low-Profile-Mechanical-Rechargeable-Keyboards-Connections/dp/B0FKLXWXWD?th=1'
				},
				{
					label: 'Buy now (US)',
					href: 'https://www.lofree.co/products/flow-2-84-low-profile-mechanical-keyboard'
				}
			]
		},
		{
			name: 'Wooting 60HE v2',
			desc: 'Gaming Keyboard #1',
			photos: [GamingKb1],
			longDesc:
				'Hall-effect switches with analog input - the game reads how far you press the key, not just whether it is pressed. For competitive gaming this is a meaningful advantage; rapid trigger alone changes how movement feels in FPS games. The software is one of the best in the keyboard space. Once you use a Wooting for gaming, going back to a regular switch feels wrong.',
			links: [
				{ label: 'Buy now (IN)', href: 'https://waimers.in/products/wooting-60he-v2-keyboard' },
				{ label: 'Buy now (US)', href: 'https://wooting.io/wooting-60he-v2' }
			]
		},
		{
			name: 'Attack on Titan x Higround Levi',
			desc: 'Gaming Keyboard #2',
			photos: [GamingKb2],
			longDesc:
				'A limited collaboration board between Higround and Attack on Titan. I am a fan of the show, so when this dropped I grabbed it. Beyond the collab, Higround makes genuinely good keyboards - the stock switches are smooth and the design is cohesive, not just slapping a logo on a generic board. In the gaming rotation, but honestly too nice-looking to hide.',
			links: [{ label: 'Buy now', href: 'https://higround.co/products/aot-keyboard-levi-g2391' }]
		}
	];

	// Hero cycles through the clips back-to-back (clip 1 → clip 2 → loop).
	const heroClips = [
		{ webm: Hero1Webm, mp4: Hero1Mp4 },
		{ webm: Hero2Webm, mp4: Hero2Mp4 }
	];
	let heroIndex = $state(0);
	let heroVideo: HTMLVideoElement | undefined = $state();

	function pickSrc(clip: { webm: string; mp4: string }) {
		if (heroVideo?.canPlayType('video/webm')) return clip.webm;
		return clip.mp4;
	}
	function nextClip() {
		heroIndex = (heroIndex + 1) % heroClips.length;
		if (heroVideo) {
			heroVideo.src = pickSrc(heroClips[heroIndex]);
			heroVideo.play().catch(() => {});
		}
	}

	// Detail modal state: which item is open + which slideshow photo is showing.
	let openItem = $state<Item | null>(null);
	let photoIndex = $state(0);

	function open(item: Item) {
		openItem = item;
		photoIndex = 0;
	}
	function close() {
		openItem = null;
	}

	// Lock page scroll while the modal is open (so swiping the carousel / backdrop doesn't
	// scroll the page behind it) via a `body.scroll-locked` class. Paired with the modal's
	// overscroll-contain + touch-none, this holds on iOS too. A class (vs inline
	// position:fixed) can't get "stuck" across HMR — it's toggled cleanly here.
	$effect(() => {
		document.body.classList.toggle('scroll-locked', !!openItem);
		return () => document.body.classList.remove('scroll-locked');
	});
	function goTo(i: number) {
		if (!openItem) return;
		const n = openItem.photos.length;
		photoIndex = ((i % n) + n) % n;
	}
	const prevPhoto = () => goTo(photoIndex - 1);
	const nextPhoto = () => goTo(photoIndex + 1);

	function onKeydown(e: KeyboardEvent) {
		if (!openItem) return;
		if (e.key === 'Escape') close();
		else if (e.key === 'ArrowLeft') prevPhoto();
		else if (e.key === 'ArrowRight') nextPhoto();
	}

	// Touch swipe for the carousel (mobile). Track start X, act on release.
	let touchStartX = 0;
	function onTouchStart(e: TouchEvent) {
		touchStartX = e.changedTouches[0].clientX;
	}
	function onTouchEnd(e: TouchEvent) {
		const dx = e.changedTouches[0].clientX - touchStartX;
		if (Math.abs(dx) > 40) {
			if (dx < 0) nextPhoto();
			else prevPhoto();
		}
	}

	// Reveal the mobile dock (and hide the top toggle) once the back-link scrolls out of
	// view; hide it again when it returns. Cleaned up on unmount.
	let backLink: HTMLElement | undefined = $state();
	$effect(() => {
		if (!backLink) return;
		const io = new IntersectionObserver(([entry]) => (dock.active = !entry.isIntersecting), {
			rootMargin: '-8px 0px 0px 0px'
		});
		io.observe(backLink);
		return () => {
			io.disconnect();
			dock.active = false;
		};
	});
</script>

<svelte:head>
	<title>Gear · Sai Venkatram</title>
</svelte:head>

<svelte:window onkeydown={onKeydown} />

<MobileDock />

<!-- pb-32 leaves room for the bottom scroll dock so it never covers the last card. -->
<div class="mx-auto flex max-w-3xl flex-col items-start gap-y-10 px-6 py-14 pb-32 md:px-10">
	<a
		bind:this={backLink}
		href="/"
		class="hero-beat font-display text-sm text-gray-500 underline-offset-4 hover:underline dark:text-gray-400"
	>
		← Back to home
	</a>

	<!-- Contained video banner (rounded, ring — matches the cards) with the title on it.
	     The video plays the clips back-to-back (see nextClip); it's decorative and
	     pointer-events-none so it never captures wheel/click. -->
	<div
		class="hero-beat relative aspect-[16/7] w-full overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10"
	>
		<video
			bind:this={heroVideo}
			src={pickSrc(heroClips[heroIndex])}
			onended={nextClip}
			class="pointer-events-none h-full w-full object-cover"
			autoplay
			muted
			playsinline
			preload="auto"
			poster={HeroPoster}
			tabindex="-1"
			aria-hidden="true"
		></video>
		<!-- Flat theme-colored overlay: a translucent wash of the page background over the
		     video, so it reads as a muted textured backdrop (cream in light, dark in dark). -->
		<div class="pointer-events-none absolute inset-0 bg-[var(--bg-base)]/80"></div>
		<div
			class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-y-1.5 px-6 text-center"
		>
			<p
				class="font-display text-xs font-medium tracking-[0.2em] text-gray-500 uppercase dark:text-gray-400"
			>
				My setup
			</p>
			<h1 class="font-display text-2xl text-foreground-strong sm:text-3xl">
				The gear I <span class="text-amber-500 dark:text-amber-400">use</span>
			</h1>
		</div>
	</div>

	<p class="hero-beat font-display text-base leading-relaxed text-foreground md:text-lg">
		I spend a lot of time at this desk, so the gear has to be right. This is everything I actually
		reach for - hardware I have used long enough to have an opinion on. Notes are honest, nothing is
		sponsored.
	</p>

	<div class="grid w-full grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
		{#each items as item, i (item.name)}
			<button
				type="button"
				onclick={() => open(item)}
				class="group hero-beat flex cursor-pointer flex-col gap-y-3 text-left"
				style="animation-delay: {i * 70}ms"
			>
				<div class="relative overflow-hidden rounded-xl ring-1 ring-black/10 dark:ring-white/10">
					<!-- Eagerly load the first couple of cards (above the fold); lazy-load the rest. -->
					<img
						src={item.photos[0]}
						alt={item.name}
						loading={i < 2 ? 'eager' : 'lazy'}
						fetchpriority={i < 2 ? 'high' : 'auto'}
						class="aspect-[4/3] w-full object-cover transition duration-300 ease-out group-hover:scale-[1.03]"
					/>
					<!-- Hover cue: dim + 'View details' so it reads as clickable. -->
					<div
						class="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/35 group-hover:opacity-100"
					>
						<span class="font-display text-sm font-medium text-white">View details ⤢</span>
					</div>
				</div>
				<div class="flex flex-col items-center text-center">
					<p class="font-display text-base font-medium text-foreground-strong">{item.name}</p>
					<p class="font-display text-sm text-foreground">{item.desc}</p>
				</div>
			</button>
		{/each}
	</div>
</div>

<!-- Detail modal: editorial card with a sliding carousel, description, and text links.
     Fades/scales in and out; carousel slides horizontally and is swipeable on touch. -->
{#if openItem}
	<div
		class="fixed inset-0 z-50 flex touch-none items-center justify-center overscroll-contain p-4"
		role="dialog"
		aria-modal="true"
		aria-label={openItem.name}
	>
		<button
			type="button"
			aria-label="Close"
			onclick={close}
			transition:fade={{ duration: 200 }}
			class="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
		></button>

		<div
			transition:scale={{ duration: 220, start: 0.95, opacity: 0, easing: cubicOut }}
			class="relative z-10 flex w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-[var(--bg-base)] shadow-2xl ring-1 ring-black/10 dark:ring-white/10"
		>
			<!-- Carousel: a horizontal track that slides by photoIndex; swipeable on touch. -->
			<div
				class="relative aspect-[4/3] w-full overflow-hidden bg-black/20"
				role="group"
				aria-roledescription="carousel"
				ontouchstart={onTouchStart}
				ontouchend={onTouchEnd}
			>
				<div
					class="flex h-full w-full transition-transform duration-300 ease-out"
					style="transform: translateX(-{photoIndex * 100}%)"
				>
					{#each openItem.photos as photo (photo)}
						<img
							src={photo}
							alt={openItem.name}
							class="h-full w-full shrink-0 object-cover"
							draggable="false"
						/>
					{/each}
				</div>

				{#if openItem.photos.length > 1}
					<button
						type="button"
						aria-label="Previous photo"
						onclick={prevPhoto}
						class="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-lg text-white backdrop-blur-sm transition hover:bg-black/60"
					>
						‹
					</button>
					<button
						type="button"
						aria-label="Next photo"
						onclick={nextPhoto}
						class="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-lg text-white backdrop-blur-sm transition hover:bg-black/60"
					>
						›
					</button>
					<div class="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
						{#each openItem.photos as photo, di (photo)}
							<button
								type="button"
								aria-label="Go to photo {di + 1}"
								onclick={() => goTo(di)}
								class="h-1.5 rounded-full transition-all duration-300 {di === photoIndex
									? 'w-5 bg-white'
									: 'w-1.5 bg-white/50 hover:bg-white/75'}"
							></button>
						{/each}
					</div>
				{/if}
			</div>

			<div class="flex flex-col gap-y-4 p-6">
				<div class="flex flex-col gap-y-1.5">
					<p
						class="font-display text-xs font-medium tracking-wider text-gray-400 uppercase dark:text-gray-500"
					>
						{openItem.desc}
					</p>
					<h2 class="font-display text-xl font-medium text-foreground-strong">
						{openItem.name}
					</h2>
					<p class="font-display text-sm leading-relaxed text-foreground">
						{#if typeof openItem.longDesc === 'string'}
							{openItem.longDesc}
						{:else}
							{#each openItem.longDesc as part, i (typeof part === 'string' ? `text-${i}` : part.href)}
								{#if typeof part === 'string'}
									{part}
								{:else}
									<a
										href={part.href}
										target="_blank"
										rel="external noopener noreferrer"
										class={inlineLinkClass}
									>
										{part.label}
									</a>
								{/if}
							{/each}
						{/if}
					</p>
				</div>

				{#if openItem.links?.length}
					<div class="flex flex-wrap items-center gap-x-4 gap-y-1">
						{#each openItem.links as link (link.href)}
							{#if link.href}
								<a
									href={link.href}
									target="_blank"
									rel="external noopener noreferrer"
									class="font-display text-sm font-medium text-link underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-foreground dark:decoration-gray-700 dark:hover:decoration-foreground"
								>
									{link.label} →
								</a>
							{/if}
						{/each}
					</div>
				{/if}
			</div>

			<button
				type="button"
				aria-label="Close"
				onclick={close}
				class="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
			>
				✕
			</button>
		</div>
	</div>
{/if}
