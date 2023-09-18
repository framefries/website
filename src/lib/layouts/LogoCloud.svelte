<script>
  import cx from 'clsx';

  import LogoAsus from '$lib/assets/logos/asus.webp';
  import LogoEA from '$lib/assets/logos/ea.webp';
  import LogoIntel from '$lib/assets/logos/intel.webp';
  import LogoNI from '$lib/assets/logos/native-instruments.webp';
  import LogoNVIDIA from '$lib/assets/logos/nvidia.webp';
  import LogoWaze from '$lib/assets/logos/waze.webp';
  import ProfileNicolas from '$lib/assets/profiles/nicolas.webp';
  import ProfileRoman from '$lib/assets/profiles/roman.webp';
  import animate from '$lib/utils/animate.action.js';

  const logos = [
    { name: 'Native Instruments', src: LogoNI, height: 26 },
    { name: 'Waze', src: LogoWaze, height: 34 },
    { name: 'NVIDIA', src: LogoNVIDIA, height: 57 },
    { name: 'Asus', src: LogoAsus, height: 28 },
  ];

  const members = [
    { name: 'Roman', src: ProfileRoman },
    { name: 'Nicolas', src: ProfileNicolas },
  ];
  
  let logosContainer = null;
</script>

<section
  id="team"
  class={cx(
    'flex max-lg:flex-col gap-12 lg:gap-28 items-center lg:items-start justify-between',
    'p-6 md:px-12 lg:py-16 lg:px-20',
    $$props.class
  )}
>
  <div class="lg:basis-1/2">
    <h2
      use:animate
      class="text-2xl md:text-4xl md:!leading-tight font-display animate-fade-up pause"
    >
      More than a decade of experience in the field with average project complexity ranging from nuggets to nougat.
    </h2>
    <p
      use:animate
      class="mt-4 md:mt-12 lg:mt-20 max-w-4xl md:text-xl text-gray-600 animate-fade-up pause"
    >
      Yours, signed
      <br />Roman and Nicolas
    </p>
    <div class="mt-4 md:mt-6 flex items-center gap-4">
      {#each members as item, i}
        <figure
          use:animate
          class="w-14 h-14 rounded-full overflow-hidden animate-fade-down after-[var(--delay)] pause"
          style={`--delay:${(i+1)*150}ms`}
        >
          <img
            loading="lazy"
            src={item.src}
            alt={item.name}
            class={`block w-full h-full object-cover`}
          />
        </figure>
      {/each}
      </div>
  </div>
  <aside
    bind:this={logosContainer}
    class="lg:basis-1/2 grid grid-cols-2 gap-1 rounded-md overflow-hidden"
  >
    {#each logos as item, i}
      <figure
        use:animate={{ container: logosContainer }}
        class="h-28 flex items-center justify-center px-6 max-lg:bg-gray-100 animate-fade-up after-[var(--delay)] pause"
        style={`--delay:${i*150}ms`}
      >
        <img
          loading="lazy"
          src={item.src}
          alt={item.name}
          width="100%"
          height={item.height}
          style={`height: ${item.height}px`}
          class={`block max-w-full object-contain`}
        />
      </figure>
    {/each}
  </aside>
</section>