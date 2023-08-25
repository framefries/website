<script>
  import cx from 'clsx';
  
  export let open = false;
</script>

<svg
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
  class={cx(
    'shrink-0 inline-flex w-auto select-none',
    {
      'stroke-0 stroke-none fill-current': !open,
      'stroke-[1.5] stroke-current fill-none': open,
    },
    $$props.class,
  )}
>
  {#if open}
    <path d="M6 18L18 6M6 6l12 12" />
  {:else}
    <path d="M3.88 7.13a4.5 4.5 0 0 1 4.5-4.5h7.24a4.5 4.5 0 0 1 4.5 4.5c0 .62-.5 1.12-1.12 1.12H5c-.62 0-1.13-.5-1.13-1.13Zm0 9.5c0-.49.39-.88.87-.88h14.5c.48 0 .88.4.88.88a3.5 3.5 0 0 1-3.5 3.5H7.38a3.5 3.5 0 0 1-3.5-3.5ZM22 12c0 1.04-.84 1.88-1.88 1.88H3.88a1.88 1.88 0 0 1 0-3.76h16.25c1.04 0 1.88.85 1.88 1.88Z" />
  {/if}
</svg>
