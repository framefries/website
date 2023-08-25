<script>
  import cx from 'clsx';

  import animate from '$lib/utils/animate.action.js';

  import Clock from '$lib/components/Clock.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import Sticker from '$lib/components/Sticker.svelte';
  import Arrow from '$lib/components/Arrow.svelte';
  import smooth from '$lib/utils/smooth.action.js';

  const nav = [
    { label: 'Back to top', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  const social = [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Dribbble', href: 'https://dribbble.com' },
    { label: 'Behance', href: 'https://behance.com' },
  ];
</script>

<section class={cx(
  'flex flex-col gap-12 md:gap-20',
  'p-6 md:p-12 lg:p-20 lg:pt-28 xl:px-44',
  'md:rounded-md bg-accent',
  'text-cream md:text-xl',
  $$props.class
)}>
  <div class="grid grid-cols-3 gap-6">
    {#each ['Europe/Paris', 'Europe/Bratislava', 'Europe/Tallinn'] as timezone, i}
      <div
        role="presentation"
        use:animate
        class="animate-fade-down after-[var(--delay)] pause"
        style={`--delay:${i*150}ms`}
      >
        <Clock timezone={timezone} />
      </div>
    {/each}
  </div>
  <div class="grid md:grid-cols-3 gap-6">
    <div class="md:col-span-2 space-y-5">
      <h3 class="text-5xl font-display">Sounds good?</h3>
      <p class="max-w-lg">
        Let’s get a fire going and create something memorable for you and your brand.
      </p>
      <p>
        <a
          use:smooth
          href="#contact"
          class="btn variant-neutral"
        >
          Get in touch
          <Arrow class="h-3.5" long={true} />
        </a>
      </p>
    </div>
    <nav class="grid grid-cols-2 gap-6">
      <ul class="flex flex-col gap-2">
        {#each nav as link}
          <li>
            <a
              use:smooth
              href={link.href}
              class="btn variant-neutral"
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
      <ul class="flex flex-col gap-2">
        {#each social as link}
          <li>
            <a href={link.href} target="_blank" class="btn variant-neutral">
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
  <div class="grid md:grid-cols-3 max-md:justify-items-center md:content-center gap-6">
    <div class="md:col-span-2">
      <Logo class="h-[72px]" />
    </div>
    <div>
      <Sticker
        title="Heartfelt"
        sub="But not in a cholesterol way"
        parallax={{ amplitude: 10, rotation: -10 }}
        class="relative z-1"
      />
    </div>
  </div>
</section>