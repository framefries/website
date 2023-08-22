<script>
  import cx from 'clsx';

  import LogoAsus from '$lib/assets/logo-asus.png';
  import LogoEA from '$lib/assets/logo-ea.png';
  import LogoIntel from '$lib/assets/logo-intel.png';
  import LogoNI from '$lib/assets/logo-native-instruments.png';
  import LogoNVIDIA from '$lib/assets/logo-nvidia.png';
  import LogoWaze from '$lib/assets/logo-waze.png';
  import ProfileNicolas from '$lib/assets/profile-nicolas.png';
  import ProfileReijo from '$lib/assets/profile-reijo.png';
  import ProfileRoman from '$lib/assets/profile-roman.png';

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
</script>

<section class={cx('flex max-lg:flex-col gap-12 lg:gap-20 sm:p-6 md:p-20 items-center lg:items-start justify-between', $$props.class)}>
  <div class="lg:basis-1/2">
    <h2 class="text-2xl md:text-4xl md:!leading-tight font-display">
      More than a decade of experience in the field with average project complexity ranging from nuggets to nougat.
    </h2>
    <p class="mt-4 md:mt-12 lg:mt-20 max-w-4xl md:text-xl text-gray-600">
      Yours, signed
      <br />Roman, Reijo and Nicolas
    </p>
    <div class="mt-4 md:mt-6 flex items-center gap-4">
      {#each members as item}
        <figure class="w-14 h-14 rounded-full overflow-hidden">
          <img
            src={item.src}
            alt={item.name}
            loading="lazy"
            class={`block w-full h-full object-cover`}
          />
        </figure>
      {/each}
      </div>
  </div>
  <aside class="px-12 md:px-0 grid grid-cols-2 gap-12 items-center justify-items-center">
    {#each logos as item}
      <figure>
        <img
          src={item.src}
          alt={item.name}
          loading="lazy"
          class={`block max-w-full w-auto object-contain ${item.class}`}
        />
      </figure>
    {/each}
  </aside>
</section>