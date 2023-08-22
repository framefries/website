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
    'inline-flex items-center justify-center gap-4',
    'border-2 border-black/20',
    'scale-50 md:scale-75 lg:scale-100',
    {
      'w-20 h-20 rounded-full p-2': iconOnly,
      'w-fit rounded-2xl px-4': !iconOnly,
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
        'py-2',
        {
          'text-center': !icon,
          'text-left': icon,
        }
      )}
    >
      <div class="!leading-none text-5xl font-display">
        {title}
      </div>
      {#if sub}
        <div class="-mt-2 text-sm italic">
          {sub}
        </div>
      {/if}
    </div>
  {/if}
</div>