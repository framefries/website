<script>
  import cx from 'clsx';

  import Arrow from '$lib/components/Arrow.svelte';
  import Check from '$lib/components/Check.svelte';
  import Fire from '$lib/components/Fire.svelte';
  import Sticker from '$lib/components/Sticker.svelte';
</script>

<section class={cx('flex max-lg:flex-col gap-6 sm:px-6 md:px-20', $$props.class)}>
  <div class="basis-1/2 relative z-1 rounded-xl bg-accent text-cream">
    <Sticker
      parallax={{ amplitude: 5, angle: 20, rotation: 15 }}
      class="absolute z-1 -top-10 right-2 md:right-4"
    >
      <Check size="manual" class="h-full" />
    </Sticker>
    <Sticker
      parallax={{ amplitude: 5, angle: -20, rotation: -15 }}
      class="absolute z-1 -left-8 lg:-left-4 -bottom-1 md:bottom-2 lg:bottom-32"
    >
      <Fire size="manual" class="h-full" />
    </Sticker>
    <Sticker
      title="Delicious!"
      sub="...and also probably good for you!"
      parallax={{ amplitude: 10, angle: 5, rotation: -15 }}
      class="absolute z-2 -left-20 lg:-left-10 -bottom-8 lg:bottom-20"
    />
    <div class="p-6 md:p-14">
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
  </div>
  <div class="basis-1/2 relative p-4 rounded-xl bg-cream">
    <Sticker
      kind="invert"
      title="Handmade!"
      sub="Don’t ask us how. It’s a secret recipe."
      parallax={{ amplitude: 10, angle: -5, rotation: 10 }}
      class="absolute z-2 -bottom-10 -right-12 md:right-0 lg:right-12"
    />
    <div class="aspect-video md:aspect-[9/10] bg-gray-200">
    </div>
  </div>
</section>