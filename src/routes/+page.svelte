<script>
	import Logo from '$lib/components/Logo.svelte';
	import Arrow from '$lib/components/Arrow.svelte';
</script>

<main class="h-full p-6">
	<section class="relative px-6 py-12 flex items-center justify-center min-h-full rounded-lg bg-cream-50">
		<div class="mx-auto text-center">
			<h1 class="text-center text-accent-500">
				<span class="sr-only">Frame Fries</span>
			</h1>
			<h2 class="text-accent-500 text-3xl md:text-7xl font-light font-display">
				Coming soon.
			</h2>
			<p class="mt-4 text-xl text-gray-900">
				Frame Fries is a new illustration agency on the block.
				<br />Sit tight, we’re preparing to open soon.
			</p>
			<p class="mt-6">
				<a
					href={import.meta.env.VITE_CTA_URL}
					target="_blank"
					class="btn variant-primary"
				>
					Get in touch
					<Arrow size="manual" class="h-3.5" />
				</a>
			</p>
			<footer class="mt-16 text-accent-500">
				<Logo size="original" />
			</footer>
		</div>
	</section>
</main>
