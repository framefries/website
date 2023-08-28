<script>
  import cx from 'clsx';
</script>

<section
  id="pricing"
  class={cx(
    'p-6 md:p-12 lg:px-20 lg:py-16',
    'md:rounded-md bg-accent',
    'text-cream md:text-xl',
    $$props.class
  )}
>
  <header class="space-y-4">
    <h2 class="text-3xl md:text-4xl lg:text-5xl md:!leading-tight font-display">
      Now, what’s the cost?
    </h2>
    <p>
      If you like what’s on the menu then here’s a simple way to get a ballpark estimate for your own order.
    </p>
    <p>
      Do bear in mind that this is just an estimate. After sending us your order, we’ll review it and provide you an exact quote.
    </p>
  </header>
</section>