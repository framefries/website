<script>
  import cx from 'clsx';

  import Arrow from '$lib/components/Arrow.svelte';
  import Check from '$lib/components/Check.svelte';
  import Fire from '$lib/components/Fire.svelte';
  import Sticker from '$lib/components/Sticker.svelte';
  import parallax from '$lib/features/parallax.action.js';
</script>

<section class={cx('flex max-lg:flex-col gap-6 sm:px-6 md:px-20', $$props.class)}>
  <div class="basis-1/2 relative p-6 md:p-14 rounded-xl bg-accent text-cream">
    <div
      role="presentation"
      use:parallax={40}
      class="absolute z-1 top-0 right-2 md:right-4"
    >
      <Sticker class="-translate-y-1/2 rotate-12">
        <Check size="manual" class="h-full" />
      </Sticker>
    </div>
    <div
      role="presentation"
      use:parallax={40}
      class="absolute z-1 -left-8 lg:-left-6 bottom-0 md:bottom-4 xl:bottom-28"
    >
      <Sticker class="-rotate-[25deg]">
        <Fire size="manual" class="h-full" />
      </Sticker>
    </div>
    <div
      role="presentation"
      use:parallax={80}
      class="absolute z-1 -left-20 lg:-left-14 -bottom-4 xl:bottom-16"
    >
      <Sticker
        title="Delicious!"
        sub="...and also probably good for you!"
        class="-rotate-12"
      />
    </div>
    <h2 class="text-4xl md:text-5xl lg:text-6xl font-display">
      What’s on the menu today?
    </h2>
    <p class="mt-6 max-w-sm text-lg md:text-xl">
      Let’s do some taste testing with a showreel and other bits.
    </p>
    <div class="mt-6">
      <Arrow size="manual" class="h-3.5" long={true} />
    </div>
  </div>
  <div class="basis-1/2 p-4 rounded-xl bg-cream">
    <div class="aspect-video md:aspect-[9/10] bg-gray-200">
    </div>
  </div>
</section>