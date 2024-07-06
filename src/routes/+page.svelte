<script>
	import { Grid, createStyles, theme } from '@svelteuidev/core';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Input } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import FeatureCard from '../components/featurecard.svelte';
	import Button from '../components/button.svelte';
	import '../app.css';
</script>

<body class="w-full bg-gray-300">
	<div class="pl-8 pr-5 pt-12 md:pl-8 md:pr-4 xl:pl-8 xl:pr-12">
		<Grid>
			<Grid.Col sm={6} md={6} xs={12} lg={6} xl={6}>
				<div class=" h-full w-full align-middle">
					<div class=" mt-24">
						<p
							class="text-center text-3xl text-white sm:text-center sm:text-3xl md:text-left md:text-3xl lg:text-left lg:text-4xl xl:text-left xl:text-5xl extra:text-8xl"
						>
							Crafting <br /> Unforgettable <br /> Journeys
						</p>
						<p
							class="mt-7 text-center text-base text-gray-100 sm:text-center sm:text-base md:text-left md:text-base lg:text-left lg:text-lg xl:text-left xl:text-xl extra:text-3xl"
						>
							Experience the joy of hassle-free travel <br /> planning with our AI itinerary builder.
						</p>
					</div>
					<div
						class="flex items-center justify-center align-top sm:flex sm:items-center sm:justify-center md:flex md:items-start md:justify-start"
					>
						<Button label="Create Now"></Button>
					</div>
				</div>
			</Grid.Col>
			<Grid.Col sm={6} md={6} xs={12} lg={6} xl={6}>
				<div class=" visible hidden w-full flex-col items-start justify-end align-top md:flex">
					<img class="image" src="/front.png" alt="banner" />
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
				<FeatureCard
					imgSrc="budget.png"
					title="Budget Optimized Itineraries"
					description="Personalized travel plans that respect your budget, ensuring an affordable travel experience without compromising on fun."
				/>
			</Grid.Col>
			<Grid.Col xs={12} sm={6} md={6} lg={4} xl={4}>
				<FeatureCard
					imgSrc="time.png"
					title="Time-Optimized Plans"
					description="Efficient itineraries crafted to make the most of your available time, ensuring a maximized travel experience."
				/>
			</Grid.Col>
			<Grid.Col xs={12} sm={6} md={6} lg={4} xl={4}>
				<FeatureCard
					imgSrc="customize.png"
					title="Customizable Travel Plans"
					description="Tailor your itinerary to match your personal interests and preferences, with the flexibility to adjust as you go."
				/>
			</Grid.Col>
			<Grid.Col xs={12} sm={6} md={6} lg={4} xl={4}>
				<FeatureCard
					imgSrc="reliable.png"
					title="Reliable Recommendations"
					description="Trustworthy suggestions for accommodations and activities curated by travel experts for a stress-free journey."
				/>
			</Grid.Col>
			<Grid.Col xs={12} sm={6} md={6} lg={4} xl={4}>
				<FeatureCard
					imgSrc="maps.png"
					title="Interactive Map Integration"
					description="Visualize your travel plans with interactive maps, explore destinations, and efficiently plan out your adventure."
				/>
			</Grid.Col>
			<Grid.Col xs={12} sm={6} md={6} lg={4} xl={4}>
				<FeatureCard
					imgSrc="multidest.png"
					title="Multi-Destination Support"
					description="Plan complex trips with ease, whether you're hopping cities or countries, we've got you covered every step of the way."
				/>
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
								class="  mb-6 ml-8 mr-8 text-left text-gray-100 md:text-sm lg:text-base xl:text-lg extra:text-2xl"
							>
								Visualize your travel plans with interactive maps, explore destinations, and
								efficiently plan out your adventure.
							</h2>
						</div>
					</div>
				</div>
			</Grid.Col>
		</Grid>
	</div>
</body>
