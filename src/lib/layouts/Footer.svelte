<script>
  import cx from 'clsx';

  import Clock from '$lib/components/Clock.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import Sticker from '$lib/components/Sticker.svelte';
  import Arrow from '$lib/components/Arrow.svelte';
  import smooth from '$lib/features/smooth.action.js';

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

<section class={cx('flex flex-col gap-12 md:gap-20 p-6 md:p-20 rounded-md bg-accent text-cream md:text-xl', $$props.class)}>
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
          <Arrow size="manual" class="h-3.5" long={true} />
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
  <div class="md:order-first grid md:grid-cols-3 gap-6">
    {#each ['Europe/Paris', 'Europe/Bratislava', 'Europe/Tallinn'] as timezone}
      <Clock timezone={timezone} />
    {/each}
  </div>
  <div class="grid md:grid-cols-3 max-md:justify-items-center md:content-center gap-6">
    <div class="md:col-span-2">
      <Logo size="original" />
    </div>
    <div>
      <Sticker
        title="Heartfelt"
        sub="But not in a cholesterol way"
        parallax={80}
      />
    </div>
  </div>
</section>