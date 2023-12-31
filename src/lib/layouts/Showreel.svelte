<script>
  import cx from 'clsx';

  import Arrow from '$lib/components/Arrow.svelte';
  import Carousel from '$lib/components/Carousel.svelte';
  import HeavyCheck from '$lib/components/HeavyCheck.svelte';
  import Fire from '$lib/components/Fire.svelte';
  import Sticker from '$lib/components/Sticker.svelte';
  import Dribbble from '$lib/layouts/Dribbble.svelte';
  import animate from '$lib/utils/animate.action.js';

  import Roman01 from '$lib/assets/showreel/roman-01.webp';
  import Roman02 from '$lib/assets/showreel/roman-02.webp';
  import Roman03 from '$lib/assets/showreel/roman-03.webp';
  import Roman04 from '$lib/assets/showreel/roman-04.webp';
  import Roman05 from '$lib/assets/showreel/roman-05.webp';
  import Roman06 from '$lib/assets/showreel/roman-06.webp';
  import Roman07 from '$lib/assets/showreel/roman-07.webp';
  import Roman08 from '$lib/assets/showreel/roman-08.webp';
  import Roman09 from '$lib/assets/showreel/roman-09.webp';
  import DemoreelVideo from '$lib/assets/demoreel.mp4';

  const designers = [
    {
      name: 'Roman',
      url: 'https://dribbble.com/romanklco',
      images: [Roman01, Roman02, Roman03, Roman04, Roman05, Roman06, Roman07, Roman08, Roman09],
    },
  ];
</script>

<section
  id="showreel"
  class={cx(
    'sm:px-6 md:px-12 lg:px-20 space-y-6',
    $$props.class
  )}
>
  <section class="flex max-lg:flex-col sm:gap-6">
    <div class="basis-1/2 relative z-1 sm:rounded-xl bg-accent text-cream">
      <div class="px-6 py-12 sm:p-14">
        <h2
          use:animate
          class="text-4xl md:text-5xl lg:text-6xl font-display animate-fade-up pause"
        >
          What’s on the menu today?
        </h2>
        <p
          use:animate
          class="mt-6 max-w-sm text-lg md:text-xl animate-fade-up after-150 pause"
        >
          Let’s do some taste testing with a showreel and other bits.
        </p>
        <div
          use:animate
          class="mt-6 animate-fade-up after-300 pause"
        >
          <Arrow class="h-3.5" long={true} />
        </div>
      </div>
      <Sticker
        parallax={{ amplitude: 5, rotation: 20, angle: 15 }}
        class="absolute z-1 -top-10 right-2 md:right-4"
      >
        <HeavyCheck class="h-full" />
      </Sticker>
      <Sticker
        parallax={{ amplitude: 5, rotation: -20, angle: -15 }}
        class="absolute z-1 -left-8 lg:-left-4 -bottom-1 md:bottom-2 lg:bottom-32"
      >
        <Fire class="h-full" />
      </Sticker>
      <Sticker
        title="Delicious!"
        sub="...and also probably good for you!"
        parallax={{ amplitude: 10, rotation: 5, angle: -15 }}
        class="absolute z-2 -left-20 lg:-left-10 -bottom-8 lg:bottom-20"
      />
    </div>
    <div class="basis-1/2 p-4 sm:rounded-xl bg-cream">
      <!-- svelte-ignore a11y-media-has-caption -->
      <video width="720" height="720" controls class="relative aspect-video lg:aspect-square bg-black">
        <source src={DemoreelVideo} type=video/mp4 />
        <p class="p-4 flex items-center justify-center text-white">
          Your browser doesn't support HTML video. Here is a <a href={DemoreelVideo}>link to the video</a> instead.
        </p>
      </video>
    </div>
  </section>

  <section class="relative space-y-6">
    {#each designers as item, i}
      <div class="relative z-1 h-[220px] md:h-[410px]">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full">
          <Carousel
            items={[...item.images, null]}
            let:item={src}
            speed={50}
            flip={i%2}
            class="h-full"
          >
            {#if src}
              <img
                loading="lazy"
                src={src}
                alt={src}
                class="block w-full h-full object-cover"
              />
            {:else}
              <Dribbble
                title="There's more!"
                description={`Follow ${item.name} on Dribbble to stay up to date with his works.`}
                action={`${item.name} on Dribbble`}
                url={item.url}
                class="h-full"
              />
            {/if}
          </Carousel>
        </div>
      </div>
    {/each}
    <Sticker
      kind="invert"
      title="Handmade!"
      sub="Don’t ask us how. It’s a secret recipe."
      parallax={{ amplitude: 10, rotation: -5, angle: 10 }}
      class="absolute z-2 -top-20 -right-12 md:right-0 lg:right-12"
    />
    <!-- <Sticker
      title="Sous Video"
      sub="Just takes a while to prepare, that’s all."
      parallax={{ amplitude: 10, rotation: 5, angle: 15 }}
      class="absolute z-2 top-[170px] md:top-[360px] -left-14 lg:left-4"
    />
    <Sticker
      title="Crossing Streams"
      sub="Despite Spenglers advice, we’re venturing ahead."
      parallax={{ amplitude: 10, rotation: -5, angle: -5 }}
      class="absolute z-2 -bottom-12 left-1/2 -translate-x-1/2"
    /> -->
  </section>
</section>