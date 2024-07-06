<script>
	import { Grid, createStyles, theme } from '@svelteuidev/core';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Input } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import '../app.css';
</script>

<body class="w-full bg-[#1B1B1B] pl-5 pr-5 pt-12 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12">
	<Grid>
		<Grid.Col sm={6} md={6} xs={12} lg={6} xl={6}>
			<div class=" h-full w-full align-middle">
				<div class=" mt-24">
					<p
						class="text-center text-2xl text-white sm:text-center sm:text-2xl md:text-left md:text-3xl lg:text-left lg:text-4xl xl:text-left xl:text-5xl extra:text-8xl"
					>
						Crafting <br /> Unforgettable <br /> Journeys
					</p>
					<p
						class="mt-7 text-center text-base text-gray-400 sm:text-center sm:text-base md:text-left md:text-base lg:text-left lg:text-lg xl:text-left xl:text-xl extra:text-3xl"
					>
						Experience the joy of hassle-free travel <br /> planning with our AI itinerary builder.
					</p>
				</div>
				<div
					class="flex items-center justify-center align-top sm:flex sm:items-center sm:justify-center md:flex md:items-start md:justify-start"
				>
					<button
						class="sm:text-md mt-6 flex rounded-xl bg-[#FF830F] object-scale-down px-5 py-3 text-sm text-white sm:py-3 sm:sm:px-5 md:px-6 md:py-3 md:text-lg extra:px-12 extra:py-5 extra:text-2xl"
					>
						Create Now
					</button>
				</div>
			</div>
		</Grid.Col>
		<Grid.Col sm={6} md={6} xs={12} lg={6} xl={6}>
			<div class=" visible hidden w-full flex-col items-start justify-end align-top md:flex">
				<img class="image" src="/front.png" />
			</div>
		</Grid.Col>
		<Grid.Col class="sm={12} md={12} xs={12} lg={12} xl={12}">
			<div class="flex w-full justify-center">
				<h1
					class="mt-32 font-sans text-2xl text-white sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl extra:text-5xl"
				>
					Features We Provide
				</h1>
			</div>
		</Grid.Col>
		<Grid.Col xs={12} sm={6} md={6} lg={4} xl={4}>
			<div
				class=" mt-5 flex w-full items-center justify-center align-middle md:h-36 lg:h-40 xl:h-44 extra:h-64"
			>
				<div
					class=" m-5 ml-0 mr-0 h-full w-full flex-col items-center justify-center rounded-lg border border-black bg-[#2C3036] align-middle"
				>
					<div class="mt-6 flex w-full items-center justify-center align-middle">
						<img class="ml-3 w-10 align-middle md:w-8 extra:size-1/12" src="budget.png" />
						<h1
							class="sm:text-md ml-3 text-white md:text-base lg:text-lg xl:text-xl extra:text-3xl"
						>
							Budget Optimized Itineraries
						</h1>
					</div>
					<div class="mt-3 flex h-2/4 w-full flex-col items-center justify-center align-middle">
						<h2
							class="mb-6 ml-3 mr-3 text-center text-[#9CA3AF] md:text-sm lg:text-base xl:text-lg extra:text-2xl"
						>
							Personalized travel plans that respect your budget, ensuring an affordable travel
							experience without compromising on fun.
						</h2>
					</div>
				</div>
			</div>
		</Grid.Col>
		<Grid.Col xs={12} sm={6} md={6} lg={4} xl={4}>
			<div
				class=" mt-5 flex w-full items-center justify-center align-middle md:h-36 lg:h-40 xl:h-44 extra:h-64"
			>
				<div
					class=" m-5 ml-0 mr-0 h-full w-full flex-col items-center justify-center rounded-lg border border-black bg-[#2C3036] align-middle"
				>
					<div class="mt-6 flex w-full items-center justify-center align-middle">
						<img class="ml-3 w-10 align-middle md:w-8 extra:size-1/12" src="time.png" />
						<h1
							class="sm:text-md ml-3 text-white md:text-base lg:text-lg xl:text-xl extra:text-3xl"
						>
							Time-Optimized Plans
						</h1>
					</div>
					<div class="mt-3 flex h-2/4 w-full flex-col items-center justify-center align-middle">
						<h2
							class="mb-6 ml-3 mr-3 text-center text-[#9CA3AF] md:text-sm lg:text-base xl:text-lg extra:text-2xl"
						>
							Efficient itineraries crafted to make the most of your available time, ensuring a
							maximized travel experience.
						</h2>
					</div>
				</div>
			</div>
		</Grid.Col>
		<Grid.Col xs={12} sm={6} md={6} lg={4} xl={4}>
			<div
				class=" mt-5 flex w-full items-center justify-center align-middle md:h-36 lg:h-40 xl:h-44 extra:h-64"
			>
				<div
					class=" m-5 ml-0 mr-0 h-full w-full flex-col items-center justify-center rounded-lg border border-black bg-[#2C3036] align-middle"
				>
					<div class="mt-6 flex w-full items-center justify-center align-middle">
						<img class="ml-3 w-10 align-middle md:w-8 extra:size-1/12" src="customize.png" />
						<h1
							class="sm:text-md ml-3 text-white md:text-base lg:text-lg xl:text-xl extra:text-3xl"
						>
							Customizable Travel Plans
						</h1>
					</div>
					<div class="mt-3 flex h-2/4 w-full flex-col items-center justify-center align-middle">
						<h2
							class="mb-6 ml-3 mr-3 text-center text-[#9CA3AF] md:text-sm lg:text-base xl:text-lg extra:text-2xl"
						>
							Tailor your itinerary to match your personal interests and preferences, with the
							flexibility to adjust as you go.
						</h2>
					</div>
				</div>
			</div>
		</Grid.Col>
		<Grid.Col xs={12} sm={6} md={6} lg={4} xl={4}>
			<div
				class=" mt-5 flex w-full items-center justify-center align-middle md:h-36 lg:h-40 xl:h-44 extra:h-64"
			>
				<div
					class=" m-5 ml-0 mr-0 h-full w-full flex-col items-center justify-center rounded-lg border border-black bg-[#2C3036] align-middle"
				>
					<div class="mt-6 flex w-full items-center justify-center align-middle">
						<img class="ml-3 w-10 align-middle md:w-8 extra:size-1/12" src="customize.png" />
						<h1
							class="sm:text-md ml-3 text-white md:text-base lg:text-lg xl:text-xl extra:text-3xl"
						>
							Reliable Recommendations
						</h1>
					</div>
					<div class="mt-3 flex h-2/4 w-full flex-col items-center justify-center align-middle">
						<h2
							class="mb-6 ml-3 mr-3 text-center text-[#9CA3AF] md:text-sm lg:text-base xl:text-lg extra:text-2xl"
						>
							Trustworthy suggestions for accommodations and activities curated by travel experts
							for a stress-free journey.
						</h2>
					</div>
				</div>
			</div>
		</Grid.Col>
		<Grid.Col xs={12} sm={6} md={6} lg={4} xl={4}>
			<div
				class=" mt-5 flex w-full items-center justify-center align-middle md:h-36 lg:h-40 xl:h-44 extra:h-64"
			>
				<div
					class=" m-5 ml-0 mr-0 h-full w-full flex-col items-center justify-center rounded-lg border border-black bg-[#2C3036] align-middle"
				>
					<div class="mt-6 flex w-full items-center justify-center align-middle">
						<img class="ml-3 w-10 align-middle md:w-8 extra:size-1/12" src="customize.png" />
						<h1
							class="sm:text-md ml-3 text-white md:text-base lg:text-lg xl:text-xl extra:text-3xl"
						>
							Interactive Map Integration
						</h1>
					</div>
					<div class="mt-3 flex h-2/4 w-full flex-col items-center justify-center align-middle">
						<h2
							class="mb-6 ml-3 mr-3 text-center text-[#9CA3AF] md:text-sm lg:text-base xl:text-lg extra:text-2xl"
						>
							Visualize your travel plans with interactive maps, explore destinations, and
							efficiently plan out your adventure.
						</h2>
					</div>
				</div>
			</div>
		</Grid.Col>
		<Grid.Col xs={12} sm={6} md={6} lg={4} xl={4}>
			<div
				class=" mt-5 flex w-full items-center justify-center align-middle md:h-36 lg:h-40 xl:h-44 extra:h-64"
			>
				<div
					class=" m-5 ml-0 mr-0 h-full w-full flex-col items-center justify-center rounded-lg border border-black bg-[#2C3036] align-middle"
				>
					<div class="mt-6 flex w-full items-center justify-center align-middle">
						<img class="ml-3 w-10 align-middle md:w-8 extra:size-1/12" src="customize.png" />
						<h1
							class="sm:text-md ml-3 text-white md:text-base lg:text-lg xl:text-xl extra:text-3xl"
						>
							Multi-Destination Support
						</h1>
					</div>
					<div class="mt-3 flex h-2/4 w-full flex-col items-center justify-center align-middle">
						<h2
							class="mb-6 ml-3 mr-3 text-center text-[#9CA3AF] md:text-sm lg:text-base xl:text-lg extra:text-2xl"
						>
							Plan complex trips with ease, whether you're hopping cities or countries, we've got
							you covered every step of the way.
						</h2>
					</div>
				</div>
			</div>
		</Grid.Col>
		<Grid.Col class="sm={12} md={12} xs={12} lg={12} xl={12}">
			<div class="flex w-full justify-center">
				<h1
					class="mt-32 font-sans text-2xl text-white sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl extra:text-5xl"
				>
					What Our Users Say
				</h1>
			</div>
		</Grid.Col>
		<Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
			<div
				class=" mt-5 flex h-40 w-full items-center justify-center align-top md:h-40 lg:h-40 xl:h-36 extra:h-64"
			>
				<div
					class=" m-5 ml-0 mr-0 h-full w-full flex-col items-center justify-center rounded-lg border border-black bg-[#2C3036] align-middle"
				>
					<div class=" flex h-3/4 w-full flex-col items-center justify-center align-middle">
						<h2
							class=" ml-4 mr-3 text-left text-[#9CA3AF] md:text-sm lg:text-base xl:text-lg extra:text-3xl"
						>
							Plan complex trips with ease, whether you're hopping cities or countries, we've got
							you covered every step of the way.
						</h2>
					</div>
					<div class=" flex w-full items-start justify-start align-top">
						<h1
							class="ml-4 text-[#FF830F] sm:text-xs md:text-xs lg:text-sm xl:text-sm extra:text-2xl"
						>
							Multi-Destination Support
						</h1>
					</div>
				</div>
			</div>
		</Grid.Col>
		<Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
			<div
				class=" mt-5 flex h-40 w-full items-center justify-center align-top md:h-40 lg:h-40 xl:h-36 extra:h-64"
			>
				<div
					class=" m-5 ml-0 mr-0 h-full w-full flex-col items-center justify-center rounded-lg border border-black bg-[#2C3036] align-middle"
				>
					<div class=" flex h-3/4 w-full flex-col items-center justify-center align-middle">
						<h2
							class=" ml-4 mr-3 text-left text-[#9CA3AF] md:text-sm lg:text-base xl:text-lg extra:text-3xl"
						>
							Plan complex trips with ease, whether you're hopping cities or countries, we've got
							you covered every step of the way.
						</h2>
					</div>
					<div class=" flex w-full items-start justify-start align-top">
						<h1
							class="ml-4 text-[#FF830F] sm:text-xs md:text-xs lg:text-sm xl:text-sm extra:text-2xl"
						>
							Multi-Destination Support
						</h1>
					</div>
				</div>
			</div>
		</Grid.Col>
		<Grid.Col class="sm={12} md={12} xs={12} lg={12} xl={12}">
			<div class="flex w-full justify-center">
				<h1
					class="mt-32 font-sans text-2xl text-white sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl extra:text-5xl"
				>
					Frequently Asked Questions
				</h1>
			</div>
		</Grid.Col>
		<Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
			<div
				class=" mt-5 flex w-full items-center justify-center align-middle md:h-36 lg:h-40 xl:h-44 extra:h-64"
			>
				<div
					class=" m-5 ml-0 mr-0 h-full w-full flex-col items-center justify-center rounded-lg border border-black bg-[#2C3036] align-middle"
				>
					<div class="ml-8 mr-8 mt-7 flex w-full items-start justify-start align-middle">
						<h1
							class="sm:text-md text-left text-white md:text-base lg:text-lg xl:text-xl extra:text-3xl"
						>
							Interactive Map Integration
						</h1>
					</div>
					<div class=" flex h-3/4 w-full flex-col items-center justify-center align-middle">
						<h2
							class="  mb-6 ml-8 mr-8 text-left text-[#9CA3AF] md:text-sm lg:text-base xl:text-lg extra:text-2xl"
						>
							Visualize your travel plans with interactive maps, explore destinations, and
							efficiently plan out your adventure.
						</h2>
					</div>
				</div>
			</div>
		</Grid.Col>
		<Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
			<div
				class=" mt-5 flex w-full items-center justify-center align-middle md:h-36 lg:h-40 xl:h-44 extra:h-64"
			>
				<div
					class=" m-5 ml-0 mr-0 h-full w-full flex-col items-center justify-center rounded-lg border border-black bg-[#2C3036] align-middle"
				>
					<div class="ml-8 mr-8 mt-7 flex w-full items-start justify-start align-middle">
						<h1
							class="sm:text-md text-left text-white md:text-base lg:text-lg xl:text-xl extra:text-3xl"
						>
							Interactive Map Integration
						</h1>
					</div>
					<div class=" flex h-3/4 w-full flex-col items-center justify-center align-middle">
						<h2
							class="  mb-6 ml-8 mr-8 text-left text-[#9CA3AF] md:text-sm lg:text-base xl:text-lg extra:text-2xl"
						>
							Visualize your travel plans with interactive maps, explore destinations, and
							efficiently plan out your adventure.
						</h2>
					</div>
				</div>
			</div>
		</Grid.Col>
	</Grid>
</body>
<footer class="mb-3 mt-10 h-full w-full rounded-md bg-[#2C3036] pb-4 pt-8">
	<div
		class=" w-4/4 grid grid-rows-2 items-center justify-center gap-y-4 align-middle sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"
	>
		<div
			class="flex w-full sm:col-span-1 sm:items-center sm:justify-center md:col-span-2 md:items-end md:justify-end"
		>
			<Input
				class="sm:12/12 h-12 border-gray-200 bg-[#2C3036] md:w-6/12 "
				type="text"
				id="first_name"
				placeholder="Enter your Email Address"
				required
			/>
		</div>

		<div
			class="col-span-1 flex w-full items-center justify-center sm:items-center sm:justify-center md:items-start md:justify-start lg:items-start lg:justify-start xl:items-start xl:justify-start extra:items-start extra:justify-start"
		>
			<button
				class="md:text--base rounded-xl bg-[#FF830F] object-scale-down px-3 py-2 text-sm text-white sm:text-sm md:ml-7 md:px-4 md:py-3 lg:px-5 lg:py-3 xl:px-6 xl:py-3 extra:text-xl"
			>
				Sign Me Up!
			</button>
		</div>
	</div>
	<div class="w-full">
		<div class="mt-10 flex items-center justify-center">
			<img class="h-10 w-10" src="facebook.png" />
			<img class="ml-7 h-10 w-10" src="x.png" />
			<img class="ml-7 h-10 w-10" src="ins.png" />
			<img class="ml-7 h-10 w-10" src="link.png" />
		</div>
	</div>
	<div class="w-full">
		<div class="mt-10 flex items-center justify-center space-x-5">
			<p class="text-white sm:text-sm md:text-base lg:text-lg">About</p>
			<p class="text-white sm:text-sm md:text-base">Contact</p>
			<p class="text-white sm:text-sm md:text-base">Services</p>
			<p class="text-white sm:text-sm md:text-base">Support</p>
		</div>
	</div>
	<div class="w-full">
		<div class="mt-10 flex items-center justify-center">
			<p class="text-[#9CA3AF]">© 2021 Backpackk. All rights reserved.</p>
		</div>
	</div>
</footer>
<slot />

<style lang="postcss">
	.color1 {
		color: white;
	}
	.color3 {
		color: #9ca3af;
		font-family: Roboto;
	}
	.color2 {
		color: orange;
	}

	.button {
		background-color: #ff830f;
		color: black;
		font-size: 1.3vw;

		max-width: 250px;
		max-height: 150px;
		padding: 1vw 3vw;
		border-radius: 10px;
		margin-top: 35px;
		cursor: pointer;
		transition: 0.5s;
		border: none;
	}
	.button:hover {
		background-color: transparent;
		border: 1px solid;
		border-color: #ff830f;
		font-size: 1.3vw;
		padding: 1vw 3vw;
		border-radius: 10px;
		margin-top: 30px;
		transition: 0.5s;
		cursor: pointer;
		color: white;
	}
	.button:active {
		background-color: #ff830f;
		color: black;
		font-size: 1.3vw;
		padding: 1vw 3vw;
		border-radius: 10px;
		margin-top: 30px;
		cursor: pointer;
		transition: 0.5s;
		border: none;
	}
</style>
