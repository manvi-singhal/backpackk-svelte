<script>
	export let imgSrc = '';
	export let title = '';
	export let description = '';
</script>

<div class="mt-5 flex h-full w-full items-center">
	<div class="flex w-full flex-col rounded-lg border border-black bg-gray-200 p-5">
		<div class="flex w-full items-center">
			<img class="ml-3 h-10 w-10 rounded-full md:h-8 md:w-8" src={imgSrc} alt={title} />
			<h1 class="ml-3 truncate text-white md:text-base lg:text-lg xl:text-xl">
				{title}
			</h1>
		</div>
		<div class="mx-2 mt-4 flex w-full flex-col items-start">
			<h2 class="overflow-hidden text-gray-100 md:text-sm lg:text-base xl:text-lg">
				{description}
			</h2>
		</div>
	</div>
</div>
