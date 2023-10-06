<script>
  import cx from 'clsx';

  import Arrow from '$lib/components/Arrow.svelte';
  import DribbbleLogo from '$lib/components/DribbbleLogo.svelte';

  export let title;
  export let description;
  export let action;
  export let url;
</script>

<div class={cx('@container w-full', $$props.class)}>
  <div class="h-full p-6 @sm:p-10 flex flex-col justify-between gap-2 @sm:gap-6 bg-accent text-cream @sm:text-xl">
    <div>
      <DribbbleLogo class="h-12 @sm:h-16" />
      <h2 class="mt-4 @sm:mt-8 text-2xl @sm:text-5xl font-display">
        {title}
      </h2>
      <p class="hidden @sm:block @sm:mt-6">
        {description}
      </p>
    </div>
    <div>
      <a
        href={url}
        target="_blank"
        class="btn variant-neutral"
      >
        {action}
        <Arrow class="h-3.5 -rotate-45" />
      </a>
    </div>
  </div>
</div>