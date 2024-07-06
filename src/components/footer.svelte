<script>
	import { NavUl, NavLi } from 'flowbite-svelte';
</script>

<footer class="mt-10 h-full w-full rounded-md bg-gray-200 pb-4 pt-8">
	<div
		class=" mb-5 grid w-full grid-rows-1 items-center justify-center gap-y-1 align-middle sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"
	>
		<div
			class="flex w-full sm:col-span-1 sm:items-center sm:justify-center md:col-span-2 md:items-end md:justify-end"
		>
			<input
				class="h-12 border-gray-100 bg-gray-200 text-gray-100 sm:w-full md:w-6/12"
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
				class="md:text--base rounded-xl bg-primaryorange object-scale-down px-3 py-2 text-sm text-white sm:text-sm md:ml-7 md:px-4 md:py-3 lg:px-5 lg:py-3 xl:px-6 xl:py-3 extra:text-xl"
			>
				Sign Me Up!
			</button>
		</div>
	</div>
	<div class="w-full">
		<div class="mt-5 flex items-center justify-center">
			<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
				<img class="h-10 w-10" src="facebook.png" alt="facebook" />
			</a>
			<a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
				<img class="ml-7 h-10 w-10" src="x.png" alt="x" />
			</a>
			<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
				<img class="ml-7 h-10 w-10" src="ins.png" alt="instagram" />
			</a>
			<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
				<img class="ml-7 h-10 w-10" src="link.png" alt="linkedin" />
			</a>
		</div>
	</div>
	<div class="mt-5 flex w-full items-center justify-center space-x-5">
		<NavUl>
			<NavLi href="/about" class="text-white sm:text-sm md:text-base">About</NavLi>
			<NavLi href="/contact" class="text-white sm:text-sm md:text-base">Contact</NavLi>
			<NavLi href="/services" class="text-white sm:text-sm md:text-base">Services</NavLi>
			<NavLi href="/support" class="text-white sm:text-sm md:text-base">Support</NavLi>
		</NavUl>
	</div>
	<div class="w-full">
		<div class="mt-5 flex items-center justify-center">
			<p class="text-[#9CA3AF]">© 2024 Backpackk. All rights reserved.</p>
		</div>
	</div>
</footer>
