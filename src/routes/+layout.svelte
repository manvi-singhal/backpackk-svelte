<script>
	import { Grid, createStyles, theme } from '@svelteuidev/core';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Input } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import '../app.css';
</script>

<Navbar let:NavContainer color="dark" class="bg-black-800 w-full dark:bg-gray-900 " fluid={true}>
	<NavContainer>
		<h1 class="text-lg sm:text-lg lg:text-3xl xl:text-4xl extra:text-5xl">
			<span class="color1">Back</span><span class="color2">packk</span>
		</h1>
		<NavHamburger class="items-end justify-end " />
		<NavUl>
			<NavLi class="extra:2xl text-lg text-white lg:text-base xl:text-xl " href="/">Home</NavLi>
			<NavLi class="extra:2xle text-lg text-white lg:text-base xl:text-xl" href="/login"
				>About</NavLi
			>
			<NavLi
				class="extra:2xl text-lg text-white lg:text-base xl:text-xl"
				href="/docs/components/navbar">Navbar</NavLi
			>
			<NavLi class="extra:2xl text-lg text-white lg:text-base xl:text-xl" href="/pricing"
				>Pricing</NavLi
			>
			<NavLi class="extra:2xl text-lg text-white lg:text-base xl:text-xl" href="/contact"
				>Contact</NavLi
			>
		</NavUl>
	</NavContainer>
</Navbar>

<slot></slot>

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
