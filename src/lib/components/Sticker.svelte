<script>
  import cx from 'clsx';

  export let title = '';
  export let sub = '';
  export let kind = 'default';
</script>

<div
  role="img"
  class={cx(
    'w-fit inline-flex items-center gap-3 md:gap-4 px-3 md:px-4',
    'rounded-xl md:rounded-2xl border-2 border-black/20',
    {
      'bg-cream text-accent': kind !== 'invert',
      'bg-accent text-cream': kind === 'invert',
    },
    'select-none pointer-events-none',
    $$props.class
  )}
>
  <slot />
  <div
    class="py-1.5 md:py-2"
    class:text-left={!!$$slots?.default}
    class:text-center={!$$slots?.default}
  >
    <div class="leading-none text-2xl sm:text-4xl md:text-5xl font-display">
      {title}
    </div>
    <div class="-mt-1 md:-mt-2 text-xs md:text-sm italic">
      {sub}
    </div>
  </div>
</div>