<script>
  import cx from 'clsx';

  import animate from '$lib/utils/animate.action.js';

  import LogoAsus from '$lib/assets/logos/asus.png';
  import LogoEA from '$lib/assets/logos/ea.png';
  import LogoIntel from '$lib/assets/logos/intel.png';
  import LogoNI from '$lib/assets/logos/native-instruments.png';
  import LogoNVIDIA from '$lib/assets/logos/nvidia.png';
  import LogoWaze from '$lib/assets/logos/waze.png';
  import ProfileNicolas from '$lib/assets/profiles/nicolas.png';
  import ProfileReijo from '$lib/assets/profiles/reijo.png';
  import ProfileRoman from '$lib/assets/profiles/roman.png';

  const logos = [
    { name: 'Electronic Arts', src: LogoEA, class: 'h-16' },
    { name: 'Native Instruments', src: LogoNI, class: 'h-7' },
    { name: 'Waze', src: LogoWaze, class: 'h-8' },
    { name: 'NVIDIA', src: LogoNVIDIA, class: 'h-14' },
    { name: 'Asus', src: LogoAsus, class: 'h-8' },
    { name: 'Intel', src: LogoIntel, class: 'h-9' },
  ];

  const members = [
    { name: 'Roman', src: ProfileRoman },
    { name: 'Reijo', src: ProfileReijo },
    { name: 'Nicolas', src: ProfileNicolas },
  ];
  
  let logosContainer;
</script>

<section
  class={cx(
    'flex max-lg:flex-col gap-12 lg:gap-20 items-center lg:items-start justify-between',
    'p-6 md:py-16 md:px-20',
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
      <br />Roman, Reijo and Nicolas
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
    class="px-12 md:px-0 grid grid-cols-2 gap-12 items-center justify-items-center"
  >
    {#each logos as item, i}
      <figure
        use:animate={{ trigger: logosContainer }}
        class="animate-fade-up after-[var(--delay)] pause"
        style={`--delay:${i*150}ms`}
      >
        <img
          loading="lazy"
          src={item.src}
          alt={item.name}
          class={`block max-w-full w-auto object-contain ${item.class}`}
        />
      </figure>
    {/each}
  </aside>
</section>