<script>
  import cx from 'clsx';

  import HeroDesktop from '$lib/assets/hero-desktop.webp';
  import Hero from '$lib/assets/hero.webp';
  import Logo from '$lib/components/Logo.svelte';
  import Arrow from '$lib/components/Arrow.svelte';
  import Burger from '$lib/components/Burger.svelte';
  import smooth from '$lib/utils/smooth.action.js';
  import parallax from '$lib/utils/parallax.action.js';

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
    'md:flex md:flex-col md:h-[600px] xl:h-[820px] md:justify-between',
    'p-6 md:p-12 lg:pb-16 lg:px-20',
    'md:rounded-md bg-cream',
    'md:animate-fade-in',
    $$props.class
  )}
>
  <div class="relative z-2">
    <div
      use:parallax={{ amplitude: 5 }}
      class="flex items-center justify-between gap-8"
    >
      <div class="md:animate-fade-down after-150">
        <Logo class="h-16 md:h-[72px] text-accent" />
      </div>
      <nav>
        <button
          class="md:hidden btn variant-primary variant-icon !text-xl md:animate-fade-down after-300"
          aria-label="Open menu"
          on:click={toggleNav}
        >
          <Burger class="h-current" />
        </button>
        <ul class="hidden md:flex items-center justify-center gap-6 text-xl max-xl:drop-shadow-2xl">
          {#each nav as link, i}
            <li
              class="animate-fade-down after-[var(--delay)]"
              style={`--delay:${300+i*100}ms`}
            >
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
      'fixed inset-0 z-30 py-12 px-6 bg-accent text-cream',
      'transition ease-in-out duration-300',
      {
        'max-md:opacity-100 pointer-events-auto': navOpen,
        'opacity-0 pointer-events-none': !navOpen,
      }
    )}>
      <div class={cx(
        'absolute top-6 inset-x-6 z-1',
        'flex items-center justify-between',
        'transition ease-in-out duration-300',
        {
          'opacity-100 translate-y-0': navOpen,
          'opacity-0 -translate-y-[4rem]': !navOpen,
        }
      )}>
        <Logo class="h-10" />
        <button
          class="btn variant-alt variant-icon !text-xl"
          aria-label="Close menu"
          on:click={toggleNav}
        >
          <Burger open class="h-current" />
        </button>
      </div>
      <ul class="h-full flex flex-col items-center justify-center gap-6 text-2xl">
        {#each nav as link, i}
          <li
            class="after-[var(--delay)]"
            class:animate-fade-up={navOpen}
            style={`--delay:${i*100}ms`}
          >
            <a href={link.href} class:font-medium={link.accent}>
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>

  <header
    use:parallax={{ amplitude: 5 }}
    class="relative z-1 mt-12 max-xl:drop-shadow-2xl"
  >
    <h1 class="sr-only">Frame Fries, 3D illustration studio</h1>
    <h2 class="flex flex-col items-start gap-2 font-display text-accent md:animate-fade-up after-300">
      <span class="text-xl md:text-2xl">Hello there,</span>
      <span class="text-4xl md:text-5xl lg:text-6xl">What can we get you?</span>
    </h2>
    <p class="mt-3 max-w-lg text-lg md:text-xl md:animate-fade-up after-300">
      Frame Fries is a small independent illustration studio serving with speed, efficiency and transparency
    </p>
    <a
      use:smooth
      href="#contact"
      class="mt-6 btn variant-neutral text-lg md:text-xl text-accent md:animate-fade-up after-500"
    >
      Get in touch
      <Arrow class="h-3.5" long={true} />
    </a>
  </header>

  <div role="none" class="md:hidden absolute z-0 inset-x-0 top-0 bottom-[420px] bg-gradient-to-b from-cream to-[#F7F4F0] pointer-events-none" />
  <figure class="relative z-0 md:hidden -m-6 h-[420px] pointer-events-none md:animate-fade-up after-150">
    <img
      src={Hero}
      alt="Hero illustration"
      class="block w-full h-full object-cover"
    />
    <div class="absolute z-1 inset-x-0 top-0 h-12 bg-gradient-to-b from-[#F7F4F0] to-transparent" />
  </figure>

  <figure class="max-md:hidden absolute z-0 inset-0 pointer-events-none md:animate-fade-in">
    <img
      src={HeroDesktop}
      alt="Hero illustration"
      class="block w-full h-full object-cover object-right"
    />
    <div class="xl:hidden absolute z-1 inset-0 bg-gradient-to-tr from-cream/90 from-30% via-transparent via-60% to-cream/90" />
  </figure>
</section>