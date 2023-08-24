<script>
  import cx from 'clsx';

  export let title;
  export let value = 1;
  export let level = 3;
</script>

<article class={cx('@container', $$props.class)}>
  <div class="h-full flex flex-col justify-between py-3 @lg:py-6 px-4 @lg:px-8 rounded-xl bg-cream">
    <header class="flex items-center justify-between gap-4 font-display text-2xl @lg:text-5xl @lg:!leading-tight">
      <svelte:element
        this={`h${level}`}
        class="text-accent"
      >
        {title}
      </svelte:element>
      <span
        role="img"
        class="shrink-0 inline-flex items-center justify-center w-12 @lg:w-16 h-12 @lg:h-16 pt-1 @lg:pt-2 rounded-full ring-2 ring-black/10 bg-accent text-cream select-none pointer-events-none"
      >
        {value}
      </span>
    </header>
    <div class="mt-6 @lg:mt-12">
      <slot />
    </div>
  </div>
</article>