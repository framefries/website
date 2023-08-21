<script>
  import cx from 'clsx';

  import smooth from '$lib/actions/smooth.js';
  import HeroImg from '$lib/assets/hero-desktop.png';
  import Logo from '$lib/components/Logo.svelte';
  import Arrow from '$lib/icons/Arrow.svelte';
  import Burger from '$lib/icons/Burger.svelte';

  let navOpen = false;
  function toggleNav() {
    navOpen = !navOpen;
  }

  const nav = [
    { label: 'Work', href: '#work' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Process', href: '#process' },
    { label: 'Get in touch', href: '#contact', accent: true },
  ];
</script>

<section class={cx('relative overflow-hidden md:flex md:flex-col md:aspect-[1396/820] md:justify-between p-6 md:py-12 md:px-20 rounded-md bg-cream', $$props.class)}>
  <div class="relative z-2">
    <div class="flex items-center justify-between gap-8">
      <Logo size="original" class="shrink-0 text-accent" />
      <nav>
        <button
          class="md:hidden btn variant-primary variant-icon text-2xl"
          aria-label="Open menu"
          on:click={toggleNav}
        >
          <Burger size="current" />
        </button>
        <ul class="hidden md:flex items-center justify-center gap-6 text-xl font-light max-xl:drop-shadow-2xl">
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
        class="absolute top-6 right-6 z-1 btn variant-alt variant-icon text-2xl"
        aria-label="Close menu"
        on:click={toggleNav}
      >
        <Burger open size="current" />
      </button>
      <ul class="h-full flex flex-col items-center justify-center gap-6 text-2xl font-light">
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

  <figure class="absolute z-0 inset-0">
    <img
      src={HeroImg}
      alt="Hero illustration"
      class="block w-full h-full object-cover"
    />
    <div class="xl:hidden absolute z-1 inset-0 bg-gradient-to-tr from-cream/90 from-10% via-cream/30 via-60% to-cream/90" />
  </figure>

  <header class="relative z-1 mt-12 max-xl:drop-shadow-2xl">
    <h1 class="sr-only">Frame Fries, 3D illustration studio</h1>
    <h2 class="flex flex-col items-start gap-2 font-light font-display text-accent">
      <span class="text-xl md:text-2xl">Hello there,</span>
      <span class="text-4xl md:text-5xl lg:text-6xl">What can we get you?</span>
    </h2>
    <p class="mt-3 max-w-lg text-lg md:text-xl font-thin">
      Frame Fries is a small independent illustration studio serving with speed, efficiency and transparency
    </p>
    <a
      use:smooth
      href="#contact"
      class="mt-6 btn variant-neutral text-lg md:text-xl text-accent"
    >
      Get in touch
      <Arrow size="small" long />
    </a>
  </header>
</section>