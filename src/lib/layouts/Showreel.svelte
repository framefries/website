<script>
  import cx from 'clsx';

  import Arrow from '$lib/components/Arrow.svelte';
  import Carousel from '$lib/components/Carousel.svelte';
  import Check from '$lib/components/Check.svelte';
  import Fire from '$lib/components/Fire.svelte';
  import Sticker from '$lib/components/Sticker.svelte';

  import Roman01 from '$lib/assets/showreel/roman-01.png';
  import Roman02 from '$lib/assets/showreel/roman-02.png';
  import Roman03 from '$lib/assets/showreel/roman-03.png';
  import Roman04 from '$lib/assets/showreel/roman-04.png';
  import Roman05 from '$lib/assets/showreel/roman-05.png';
  import Roman06 from '$lib/assets/showreel/roman-06.png';
  import Roman07 from '$lib/assets/showreel/roman-07.png';
  import Roman08 from '$lib/assets/showreel/roman-08.png';
  import Roman09 from '$lib/assets/showreel/roman-09.png';
  import Reijo01 from '$lib/assets/showreel/reijo-01.png';
  import Reijo02 from '$lib/assets/showreel/reijo-02.png';
  import Reijo03 from '$lib/assets/showreel/reijo-03.png';
  import Reijo04 from '$lib/assets/showreel/reijo-04.png';
  import Reijo05 from '$lib/assets/showreel/reijo-05.png';
  import Reijo06 from '$lib/assets/showreel/reijo-06.png';
  import Reijo07 from '$lib/assets/showreel/reijo-07.png';
  import Reijo08 from '$lib/assets/showreel/reijo-08.png';
  import Reijo09 from '$lib/assets/showreel/reijo-09.png';
  import Reijo10 from '$lib/assets/showreel/reijo-10.png';
  import Reijo11 from '$lib/assets/showreel/reijo-11.png';
</script>

<section class={cx('flex max-lg:flex-col gap-6 sm:px-6 md:px-20', $$props.class)}>
  <div class="basis-1/2 relative z-1 rounded-xl bg-accent text-cream">
    <Sticker
      parallax={{ amplitude: 5, rotation: 20, angle: 15 }}
      class="absolute z-1 -top-10 right-2 md:right-4"
    >
      <Check size="manual" class="h-full" />
    </Sticker>
    <Sticker
      parallax={{ amplitude: 5, rotation: -20, angle: -15 }}
      class="absolute z-1 -left-8 lg:-left-4 -bottom-1 md:bottom-2 lg:bottom-32"
    >
      <Fire size="manual" class="h-full" />
    </Sticker>
    <Sticker
      title="Delicious!"
      sub="...and also probably good for you!"
      parallax={{ amplitude: 10, rotation: 5, angle: -15 }}
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
      parallax={{ amplitude: 10, rotation: -5, angle: 10 }}
      class="absolute z-2 -bottom-10 -right-12 md:right-0 lg:right-12"
    />
    <div class="aspect-video md:aspect-[9/10] bg-gray-200">
    </div>
  </div>
</section>

<Carousel
  items={[Roman01, Roman02, Roman03, Roman04, Roman05, Roman06, Roman07, Roman08, Roman09]}
  let:item={src}
  speed={50}
  class="h-[410px]"
>
  <img
    loading="lazy"
    src={src}
    alt={src}
    class="block w-full h-full object-cover"
  />
</Carousel>
<Carousel
  items={[Reijo01, Reijo02, Reijo03, Reijo04, Reijo05, Reijo06, Reijo07, Reijo08, Reijo09, Reijo10, Reijo11]}
  let:item={src}
  speed={50}
  flip={true}
  class="h-[410px]"
>
  <img
    loading="lazy"
    src={src}
    alt={src}
    class="block w-full h-full object-cover"
  />
</Carousel>