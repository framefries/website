<script>
  import cx from 'clsx';

  export let title = null;
  export let sub = null;
  export let kind = 'default';

  $: icon = !!$$slots?.default;
  $: iconOnly = !title;
</script>

<div
  role="img"
  class={cx(
    'w-fit inline-flex items-center justify-center gap-3 md:gap-4',
    'border-2 border-black/20',
    {
      'min-w-16 h-16 md:min-w-20 md:h-20 rounded-full p-2': iconOnly,
      'rounded-xl md:rounded-2xl px-3 md:px-4': !iconOnly,
      'bg-cream text-accent': kind === 'default',
      'bg-accent text-cream': kind === 'invert',
    },
    'select-none pointer-events-none',
    $$props.class
  )}
>
  <slot />
  {#if !iconOnly}
    <div
      class={cx(
        'py-1.5 md:py-2',
        {
          'text-center': !icon,
          'text-left': icon,
        }
      )}
    >
      <div class="!leading-none text-2xl sm:text-4xl md:text-5xl font-display">
        {title}
      </div>
      {#if sub}
        <div class="-mt-1 md:-mt-2 text-xs md:text-sm italic">
          {sub}
        </div>
      {/if}
    </div>
  {/if}
</div>