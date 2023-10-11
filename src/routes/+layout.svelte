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
	{#if import.meta.env.VITE_GTM_ID}
		{@html `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${import.meta.env.VITE_GTM_ID}');</script>`}
	{/if}
</svelte:head>

{#if import.meta.env.VITE_GTM_ID}
	<!-- svelte-ignore a11y-missing-attribute -->
	<noscript>
		<iframe
			src={`https://www.googletagmanager.com/ns.html?id=${import.meta.env.VITE_GTM_ID}`}
			height="0"
			width="0"
			style="display:none;visibility:hidden"
		>
		</iframe>
	</noscript>
{/if}

<slot />