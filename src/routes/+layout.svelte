<script>
	import { Grid, createStyles, theme } from '@svelteuidev/core';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger} from 'flowbite-svelte';
	import Footer from '../components/footer.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
</script>

<div class="flex min-h-screen flex-col">
	<div class="flex-grow">
		<Navbar
			let:NavContainer
			color="dark"
			class="bg-black-800 w-full dark:bg-gray-900 "
			fluid={true}>
			<NavContainer>
				<h1 class="text-lg sm:text-lg lg:text-3xl xl:text-4xl extra:text-5xl">
					<span class="color1">Back</span><span class="color2">packk</span>
				</h1>
				<NavHamburger class="items-end justify-end " />
				<NavUl>
					<NavLi class="extra:2xl text-lg text-white lg:text-base xl:text-xl " href="/">Home</NavLi>
					<NavLi class="extra:2xl text-lg text-white lg:text-base xl:text-xl" href="/login"
						>About</NavLi>
					<NavLi
						class="extra:2xl text-lg text-white lg:text-base xl:text-xl"
						href="/docs/components/navbar">Navbar</NavLi>
					<NavLi class="extra:2xl text-lg text-white lg:text-base xl:text-xl" href="/pricing"
						>Pricing</NavLi>
					<NavLi class="extra:2xl text-lg text-white lg:text-base xl:text-xl" href="/contact"
						>Contact</NavLi>
				</NavUl>
			</NavContainer>
		</Navbar>
		<slot></slot>
	</div>
	<Footer />
</div>
