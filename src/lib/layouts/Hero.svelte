<script>
  import cx from 'clsx';

  import HeroImg from '$lib/assets/hero-desktop.png';
  import Logo from '$lib/components/Logo.svelte';
  import Arrow from '$lib/components/Arrow.svelte';
  import Burger from '$lib/components/Burger.svelte';
  import smooth from '$lib/utils/smooth.action.js';

  let navOpen = false;
  function toggleNav() {
    navOpen = !navOpen;
    document.body.classList.toggle('overflow-hidden', navOpen);
  }

  const nav = [
    { label: 'Work', href: '#work' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Process', href: '#process' },
    { label: 'Get in touch', href: '#contact', accent: true },
  ];
</script>

<section
  role="banner"
  class={cx(
    'relative overflow-hidden',
    'md:flex md:flex-col md:aspect-[1396/820] md:justify-between',
    'p-6 md:py-12 md:px-20',
    'rounded-md bg-cream',
    $$props.class
  )}
>
  <div class="relative z-2">
    <div class="flex items-center justify-between gap-8">
      <Logo size="original" class="text-accent" />
      <nav>
        <button
          class="md:hidden btn variant-primary variant-icon !text-xl"
          aria-label="Open menu"
          on:click={toggleNav}
        >
          <Burger />
        </button>
        <ul class="hidden md:flex items-center justify-center gap-6 text-xl max-xl:drop-shadow-2xl">
          {#each nav as link}
            <li>
              <a
                use:smooth
                href={link.href}
                class="btn variant-neutral"
                class:font-normal={link.accent}
                class:text-accent={link.accent}
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
    <nav class={cx(
      'md:hidden fixed inset-0 z-30 p-12',
      'bg-accent text-cream',
      'transition ease-in-out duration-300',
      {
        'opacity-100 translate-y-0 pointer-events-auto': navOpen,
        'opacity-0 -translate-y-full pointer-events-none': !navOpen,
      }
    )}>
      <Logo size="manual" class="absolute top-6 left-6 h-10" />
      <button
        class="absolute top-6 right-6 z-1 btn variant-alt variant-icon !text-xl"
        aria-label="Close menu"
        on:click={toggleNav}
      >
        <Burger open />
      </button>
      <ul class="h-full flex flex-col items-center justify-center gap-6 text-2xl">
        {#each nav as link}
          <li>
            <a href={link.href} class:font-medium={link.accent}>
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>

  <figure class="absolute z-0 inset-0 select-none pointer-events-none">
    <img
      loading="lazy"
      src={HeroImg}
      alt="Hero illustration"
      class="block w-full h-full object-cover"
    />
    <div class="xl:hidden absolute z-1 inset-0 bg-gradient-to-tr from-cream/90 from-10% via-cream/30 via-60% to-cream/90" />
  </figure>

  <header class="relative z-1 mt-12 max-xl:drop-shadow-2xl">
    <h1 class="sr-only">Frame Fries, 3D illustration studio</h1>
    <h2 class="flex flex-col items-start gap-2 font-display text-accent">
      <span class="text-xl md:text-2xl">Hello there,</span>
      <span class="text-4xl md:text-5xl lg:text-6xl">What can we get you?</span>
    </h2>
    <p class="mt-3 max-w-lg text-lg md:text-xl">
      Frame Fries is a small independent illustration studio serving with speed, efficiency and transparency
    </p>
    <a
      use:smooth
      href="#contact"
      class="mt-6 btn variant-neutral text-lg md:text-xl text-accent"
    >
      Get in touch
      <Arrow size="manual" class="h-3.5" long={true} />
    </a>
  </header>
</section>