<script>
  import cx from 'clsx';

  const tag = $$props.href && !$$props.disabled ? 'a' : 'button';
</script>

<svelte:options accessors={true} />
<svelte:element
  this={tag}
  {...$$props}
  class={cx(
    {
      'select-none cursor-not-allowed': $$props.disabled,
    },
    $$props.class
  )}
>
  <slot />
</svelte:element>
