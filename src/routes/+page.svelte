<script>
	import Footer from '$lib/layouts/Footer.svelte';
	import Hero from '$lib/layouts/Hero.svelte';
  import LogoCloud from '$lib/layouts/LogoCloud.svelte';
	import PreFooter from '$lib/layouts/PreFooter.svelte';
	import Process from '$lib/layouts/Process.svelte';
	import Pricing from '$lib/layouts/Pricing.svelte';
	import Showreel from '$lib/layouts/Showreel.svelte';
</script>

<main id="home" class="max-w-[1440px] mx-auto md:p-6 space-y-12 md:space-y-24">
	<Hero />
	<LogoCloud />
	<Showreel />
	<Process />
	<Pricing />
	<PreFooter />
	<Footer />
</main>


