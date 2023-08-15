<script>
</script>

<main class="h-full p-7">
	<section class="relative px-6 pt-12 pb-52 flex items-center justify-center min-h-full rounded-lg bg-cream-50">
		<div class="mx-auto text-center">
			<h2 class="text-accent-500 text-3xl md:text-7xl font-light font-display">
				Coming soon.
			</h2>
			<p class="mt-4 text-xl text-gray-900">
				Frame Fries is a new illustration agency on the block.
				<br />Sit tight, we’re preparing to open soon.
			</p>
			<p class="mt-6 text-gray-700">
				Meanwhile, you can browse
				<a href="https://dribbble.com/romanklco" target="_blank" class="text-accent-500 hover:underline">Roman’s</a>
				and
				<a href="https://dribbble.com/reijo" target="_blank" class="text-accent-500 hover:underline">Reijo’s</a>
				portfolios.
			</p>
		</div>
		<div class="absolute inset-x-6 bottom-6 text-center">
			<h1>
				<span class="sr-only">Frame Fries</span>
				<img
					src="/logo.png" 
					alt="Frame Fries logo"
					class="block mx-auto w-auto h-[72px] select-none"
				/>
			</h1>
			<a
				href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
				class="block mt-10 text-gray-400 hover:underline"
			>
				{import.meta.env.VITE_CONTACT_EMAIL}
			</a>
		</div>
	</section>
</main>
