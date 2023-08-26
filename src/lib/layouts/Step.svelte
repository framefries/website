<script>
  import cx from 'clsx';

  import Clock from '$lib/components/Clock.svelte';

  export let title;
  export let value = 1;
  export let level = 3;
</script>

<article class={cx('@container', $$props.class)}>
  <div class="h-full flex flex-col justify-between py-3 @xl:py-6 px-4 @xl:px-8 rounded-md bg-cream">
    <header class="flex items-center justify-between gap-4 font-display text-2xl @xl:text-5xl @xl:!leading-tight">
      <svelte:element
        this={`h${level}`}
        class="pt-1 @xl:pt-2 text-accent"
      >
        {title}
      </svelte:element>
      <span
        role="img"
        class="shrink-0 inline-flex items-center justify-center w-12 h-12 @xl:w-16 @xl:h-16 pt-1 @xl:pt-2 rounded-full ring-1 ring-black/10 bg-accent text-cream select-none pointer-events-none"
      >
        {value}
      </span>
    </header>
    <div class="mt-6 @xl:mt-12">
      <div class="prose prose-gray @xl:prose-xl @xl:!leading-snug prose-a:font-light prose-a:text-accent prose-a:no-underline prose-a:hover:underline">
        <slot name="description" />
      </div>
      <footer class="mt-4 @xl:mt-6 flex items-center gap-2 text-sm @xl:text-base">
        <Clock class="-mx-1 h-6 text-accent" />
        <slot name="duration" />
      </footer>
    </div>
  </div>
</article>