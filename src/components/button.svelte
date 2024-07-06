<script>
    export let label = '';
    export let onClick = () => {};
</script>

<button
    class="mt-6 flex cursor-pointer rounded-xl bg-primaryorange px-5 py-3 text-sm text-white transition-colors duration-100 hover:border-2 hover:border-primaryorange hover:bg-black hover:text-primaryorange sm:text-md sm:py-3 sm:px-5 md:px-6 md:py-3 md:text-lg"
    on:click={onClick}>
    {label}
</button>