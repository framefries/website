<script>
  import cx from 'clsx';

  import Sticker from '$lib/components/Sticker.svelte';
  import Divider from '$lib/components/Divider.svelte';
  import Heart from '$lib/components/Heart.svelte';
  import animate from '$lib/utils/animate.action.js';
</script>

<section class={cx(
  'p-6 md:px-12 lg:px-20',
  'space-y-6 md:space-y-12',
  $$props.class
)}>
  <div class="relative -top-6 w-full flex justify-center">
    <Sticker
      title="Made by Humans"
      sub="No egos were hurt while making your design."
      parallax={{ amplitude: 5 }}
      class="relative z-1 -my-4 md:my-0"
    >
      <Heart class="-mx-2 h-14" />
    </Sticker>
  </div>
  <p
    use:animate
    class="max-w-[1032px] mx-auto text-center text-3xl md:text-4xl lg:text-5xl md:!leading-tight font-display animate-fade-up pause"
  >
    At heart we’re illustrators, animators, artisans.
    The work we do is inherently not complicated.
    <br /><b class="font-normal text-accent">Everything around</b> the work typically is.
    <br />Let’s fix that.
  </p>
  <p
    use:animate
    class="text-center md:text-xl text-gray-600 animate-fade-up pause"
  >
    Reduce friction and noise, take away everything unnecessary.
    <br />What is left is Frame Fries.
  </p>
  <div
    use:animate
    class="text-center text-gray-600 animate-fade-up pause"
  >
    <Divider />
  </div>
</section>