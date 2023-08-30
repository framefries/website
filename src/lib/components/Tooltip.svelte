<script context="module">
  let tooltipCounter = 0;
</script>

<script>
  import { createPopper } from '@popperjs/core';
  import cx from 'clsx';
  import { onMount } from 'svelte';

  let button;
  let tooltip;
  let show = false;
  let popper;

  const id = `tooltip-${++tooltipCounter}`;

  $: show && popper.update();

  onMount(() => {
    popper = createPopper(button, tooltip, {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
  });
</script>

<div
  bind:this={button}
  role="button"
  tabindex="-1"
  aria-describedby={id}
  on:mouseenter={() => show = true}
  on:focus={() => show = true}
  on:mouseleave={() => show = false}
  on:blur={() => show = false}
  class={cx('inline-flex cursor-help', $$props.class)}
>
  <slot name="button" />
</div>
<div
  bind:this={tooltip}
  id={id}
  role="tooltip"
  class={cx(
    'z-10 max-w-64 p-3 rounded bg-gray-800 drop-shadow-lg',
    'font-normal text-cream text-sm',
    {
      'hidden': !show,
    }
  )}
>
  <slot name="tooltip" />
  <div data-popper-arrow />
</div>