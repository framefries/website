<script>
  import cx from 'clsx';

  import Logo from '$lib/components/Logo.svelte';
  import Sticker from '$lib/components/Sticker.svelte';
  import Arrow from '$lib/components/Arrow.svelte';
  import animate from '$lib/utils/animate.action.js';
  import smooth from '$lib/utils/smooth.action.js';

  const nav = [
    { label: 'Back to top', href: '#home' },
    { label: 'Work', href: '#showreel' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Process', href: '#process' },
  ];

  const social = [
    { label: 'Instagram', href: 'https://www.instagram.com/polygonrunway/' },
    { label: 'Dribbble', href: 'https://dribbble.com/romanklco' },
  ];
</script>

<section class={cx(
  'overflow-hidden',
  'p-6 md:p-12 lg:p-20',
  'md:rounded-md bg-accent',
  'text-cream md:text-xl',
  $$props.class
)}>
  <div class="max-w-[1032px] mx-auto space-y-12 md:space-y-20">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 items-end">
      <div class="lg:col-span-2 space-y-5">
        <h3
          use:animate
          class="text-5xl font-display animate-fade-up pause"
        >
          Sounds good?
        </h3>
        <p
          use:animate
          class="max-w-lg animate-fade-up pause"
        >
          Let’s get a fire going and create something memorable for you and your brand.
        </p>
        <a
          use:animate
          href={import.meta.env.VITE_FORM_URL}
          target="_blank"
          class="btn variant-neutral animate-fade-up pause"
        >
          Get in touch
          <Arrow class="h-3.5" long={true} />
        </a>
      </div>
      <nav
        use:animate
        class="grid grid-cols-2 gap-6 animate-fade-up pause"
      >
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
      <div
        use:animate
        class="md:col-span-2 md:animate-fade-up pause"
      >
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
  </div>
</section>