<script>
  import cx from 'clsx';

  import Sticker from '$lib/components/Sticker.svelte';
  import Divider from '$lib/components/Divider.svelte';
  import Heart from '$lib/components/Heart.svelte';
  import animate from '$lib/utils/animate.action.js';
</script>

<section class={cx(
  'px-6 md:px-12 lg:px-20',
  'space-y-6 md:space-y-12',
  $$props.class
)}>
  <div class="w-full flex justify-center">
    <Sticker
      title="Made by Humans"
      sub="No egos were hurt while making your design."
      parallax={{ amplitude: 5 }}
      class="relative z-1 -my-4 md:my-0"
    >
      <Heart class="-mx-2 h-14" />
    </Sticker>
  </div>
  <div class="max-w-[1080px] mx-auto text-center">
    <p
      use:animate
      class="text-3xl md:text-5xl md:!leading-tight font-display animate-fade-up pause"
    >
      At heart we’re illustrators, animators, artisans.
      The work we do is inherently not complicated.
      <br /><b class="text-accent">Everything around</b> the work typically is.
      <br />Let’s fix that.
    </p>
  </div>
  <div class="text-center">
    <p
      use:animate
      class="md:text-xl text-gray-600 animate-fade-up after-150 pause"
    >
      Reduce friction and noise, take away everything unnecessary.
      <br />What is left is Frame Fries.
    </p>
  </div>
  <div
    use:animate
    class="text-center text-gray-600 animate-fade-up after-300 pause"
  >
    <Divider />
  </div>
</section>