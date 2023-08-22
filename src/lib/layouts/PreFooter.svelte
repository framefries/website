<script>
  import cx from 'clsx';

  import parallax from '$lib/features/parallax.action.js';
  import Sticker from '$lib/components/Sticker.svelte';
  import Divider from '$lib/components/Divider.svelte';
  import Heart from '$lib/components/Heart.svelte';
</script>

<section class={cx('flex flex-col items-center gap-6 md:gap-12', $$props.class)}>
  <div use:parallax={40} class="text-center">
    <Sticker title="Made by Humans" sub="No egos were hurt while making your design.">
      <Heart size="manual" class="-mx-1 md:-mx-2 h-8 sm:h-12 md:h-14" />
    </Sticker>
  </div>
  <h2 class="max-w-5xl text-center text-2xl md:text-5xl md:leading-tight font-display">
    At heart we’re illustrators, animators, artisans.
    The work we do is inherently not complicated.
    <br /><b class="text-accent">Everything around</b> the work typically is.
    <br />Let’s fix that.
  </h2>
  <p class="max-w-4xl text-center md:text-xl text-gray-600">
    Reduce friction and noise, take away everything unnecessary.
    <br />What is left is Frame Fries.
  </p>
  <div class="text-gray-600">
    <Divider />
  </div>
</section>