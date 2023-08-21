<script>
  import cx from 'clsx';

  export let title = '';
  export let sub = '';
  export let kind = 'default';
</script>

<div
  role="img"
  class={cx(
    'inline-flex flex-col items-center py-2 md:py-3 px-3 md:px-4',
    'rounded-xl md:rounded-2xl border-2 border-black/20',
    {
      'bg-cream text-accent': kind !== 'invert',
      'bg-accent text-cream': kind === 'invert',
    },
    'whitespace-nowrap select-none pointer-events-none',
    $$props.class
  )}
>
  <span class="text-4xl md:text-5xl font-display">
    {title}
  </span>
  <span class="-mt-2 text-xs md:text-sm italic">
    {sub}
  </span>
</div>