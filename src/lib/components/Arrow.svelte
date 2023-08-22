<script>
  import cx from 'clsx';
  
  export let size = 'current';
  export let long = false;
</script>

<svg
  viewBox={long ? "0 0 41 16" : "0 0 16 16"}
  stroke-linecap="round"
  class={cx(
    'shrink-0 inline-flex w-auto stroke-current fill-none select-none',
    {
      'h-[1em]': size === 'current',
    },
    $$props.class,
  )}
>
  {#if long}
    <path d="M1 8h38.5m0 0-.22-.12c-3-1.73-5.6-4.07-7.62-6.88m7.84 7-.22.12c-3 1.73-5.6 4.07-7.62 6.88" />
  {:else}
    <path d="M1 8h13.5m0 0-.22-.12c-3-1.73-5.6-4.07-7.61-6.88m7.83 7-.22.12c-3 1.73-5.6 4.07-7.61 6.88" />
  {/if}
</svg>