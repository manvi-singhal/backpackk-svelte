<script>
	import { Grid, createStyles, theme } from '@svelteuidev/core';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Input } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import '../../app.css';
</script>

<body
	class="mb-24 h-screen w-full flex-col bg-[#1b1b1b] pl-5 pr-5 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12"
>
	<div class="h-svh w-full flex-col items-center justify-center">
		<div class="flex h-full w-full flex-col items-center justify-center">
			<form
				class="flex h-4/6 w-full flex-col items-center justify-center rounded-xl bg-[#2C3036] sm:h-3/5 sm:w-full md:h-3/5 md:w-full lg:h-3/5 lg:w-8/12 xl:w-6/12 extra:w-6/12"
			>
				<h1 class="text-2xl text-primaryorange sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
					Welcome to Backpackk
				</h1>
				<p class="text-sm text-white sm:text-sm md:text-base lg:text-lg">
					Sign in to start creating your itineraries!
				</p>
				<Input
					class="mt-10 h-10 w-3/4 border-gray-200 bg-[#2C3036] p-2 "
					type="text"
					id="first_name"
					placeholder="Email"
					required
				/>

				<Input
					class="mt-5 h-10 w-3/4 border-gray-200 bg-[#2C3036] p-2 "
					type="text"
					id="first_name"
					placeholder="Password"
					required
				/>
				<div class="flex w-3/4 items-end justify-end">
					<button class="text-sm text-[#FF830F] sm:text-sm md:text-base lg:text-lg">
						Forgot your Password?
					</button>
				</div>
				<div class="flex w-3/4 items-start justify-start">
					<label class="mt-5 flex items-center space-x-2">
						<input type="checkbox" class=" form-checkbox text-primary-500" />
						<span class="text-sm text-white sm:text-sm md:text-base lg:text-lg">Remember me</span>
					</label>
				</div>
				<button class="mt-5 h-10 w-1/2 rounded-xl bg-[#FF830F] p-2 text-white">Login</button>
				<div class="mt-7 flex w-3/4 items-center justify-center">
					<p class="text-sm text-white sm:text-sm md:text-base lg:text-lg">
						Don't have an account?
					</p>
					<button class="text-sm text-[#FF830F] sm:text-sm md:text-base lg:text-lg">
						Sign Up!</button
					>
				</div>
			</form>
		</div>
	</div></body
>

<style lang="postcss">
</style>
