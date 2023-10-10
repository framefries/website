<script>
	import '../app.css';
	import OGImage from '$lib/assets/framefries-opengraph.png';
	export let data;
</script>

<svelte:head>
	<link rel="canonical" href={data.canonical} />
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={OGImage} />
	<meta property="og:image:alt" content={data.title} />
	<meta name="robots" content={data.indexing} />
	{#if import.meta.env.VITE_GTAG_ID}
		<script async src={`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GTAG_ID}`} /></script>
		{@html `
			<script>
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${import.meta.env.VITE_GTAG_ID}');
			</script>
		`}
	{/if}
</svelte:head>

<slot />