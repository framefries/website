<script>
  import cx from 'clsx';
  
  export let size = 'current';
</script>

<svg
  viewBox="0 0 72 72"
  class={cx(
    'shrink-0 inline-flex w-auto stroke-none fill-current select-none',
    {
      'h-[1em]': size === 'current',
    },
    $$props.class,
  )}
>
  <path d="M63.35 26.9a2 2 0 0 0 0-2.83l-8.48-8.48a2 2 0 0 0-2.83 0L32.56 35.07a2 2 0 0 1-2.83 0l-6.83-6.83a2 2 0 0 0-2.83 0l-8.48 8.49a2 2 0 0 0 0 2.83l8.23 8.24 9.9 9.9a2 2 0 0 0 2.83 0l30.8-30.8Z" />
</svg>
