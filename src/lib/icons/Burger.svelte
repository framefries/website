<script>
  import cx from 'clsx';
  
  export let size;
  export let open;
</script>

<svg
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
  class={cx(
    'inline-flex w-auto stroke-current fill-none select-none',
    {
      'h-[1em]': size === 'current',
      'h-3.5': size === 'small',
      'h-6': !size || size === 'normal',
    },
    $$props.class,
  )}
>
  {#if open}
    <path d="M6 18L18 6M6 6l12 12" />
  {:else}
    <path d="M3.75 6.75h16.5M7.75 12h8.5M3.75 17.25h16.5" />
  {/if}
</svg>
