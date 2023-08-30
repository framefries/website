<script>
  import { browser } from '$app/environment';
  import cx from 'clsx';
  
  import HeroDesktop from '$lib/assets/hero-desktop.webp';
  import Hero from '$lib/assets/hero.webp';
  import Logo from '$lib/components/Logo.svelte';
  import Arrow from '$lib/components/Arrow.svelte';
  import Burger from '$lib/components/Burger.svelte';
  import Close from '$lib/components/Close.svelte';
  import smooth from '$lib/utils/smooth.action.js';
  import parallax from '$lib/utils/parallax.action.js';

  let navOpen = false;
  $: if (browser) {
    document.body.classList.toggle('max-md:overflow-hidden', navOpen);
  }

  const nav = [
    { label: 'Work', href: '#showreel' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
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
  <div class="relative z-2 flex items-center justify-between gap-8">
    <div class="relative z-30 animate-fade-down md:after-150">
      <Logo
        class={cx(
          'h-16 md:h-[72px] transition-colors',
          {
            'text-accent': !navOpen,
            'text-cream md:text-accent': navOpen,
          }
        )}
      />
    </div>
    <nav>
      <a
        use:smooth
        on:click={() => navOpen = !navOpen}
        href="#home"
        aria-label={navOpen ? 'Close menu' : 'Open menu'}
        class={cx(
          'relative z-30 md:hidden btn variant-icon !text-xl animate-fade-down md:after-300',
          'transition-colors',
          {
            'variant-primary': !navOpen,
            'variant-alt md:variant-primary': navOpen,
          }
        )}
      >
        {#if navOpen}
          <Close class="h-current" />
        {:else}
          <Burger class="h-current" />
        {/if}
      </a>
      <ul
        class={cx(
          'max-md:fixed inset-0 z-20 max-md:p-6 max-md:pt-24 max-md:bg-accent max-md:overflow-auto',
          'flex max-md:flex-col items-center justify-center gap-6',
          'text-xl md:max-xl:drop-shadow-2xl',
          'transition-opacity ease-in-out duration-300',
          {
            'max-md:opacity-100 max-md:pointer-events-auto': navOpen,
            'max-md:opacity-0 max-md:pointer-events-none': !navOpen,
          }
        )}
      >
        {#each nav as link, i}
          <li
            style={`--delay:${i*100}ms`}
            class={cx({
              'animate-fade-down after-[var(--delay)]': navOpen,
              'md:animate-fade-down md:after-[var(--delay)]': !navOpen,
            })}
          >
            <a
              use:smooth
              on:click={() => navOpen = false}
              href={link.href}
              class={cx(
                'btn md:variant-neutral',
                {
                  'max-md:text-cream': navOpen,
                  'max-md:font-medium': navOpen && link.accent,
                  'md:text-accent': link.accent,
                }
              )}
            >
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
    <h2 class="flex flex-col items-start gap-2 font-display text-accent animate-fade-up md:after-300">
      <span class="text-xl md:text-2xl">Hello there,</span>
      <span class="text-4xl md:text-5xl lg:text-6xl">What can we get you?</span>
    </h2>
    <p class="mt-3 max-w-lg text-lg md:text-xl animate-fade-up after-300">
      Frame Fries is a small independent illustration studio serving with speed, efficiency and transparency
    </p>
    <a
      use:smooth
      href="#contact"
      class="mt-6 btn variant-neutral text-lg md:text-xl text-accent animate-fade-up after-500"
    >
      Get in touch
      <Arrow class="h-3.5" long={true} />
    </a>
  </header>

  <div role="none" class="md:hidden absolute z-0 inset-x-0 top-0 bottom-[420px] bg-gradient-to-b from-cream to-[#F7F4F0] pointer-events-none" />
  <figure class="relative z-0 md:hidden -m-6 h-[420px] pointer-events-none">
    <img
      src={Hero}
      alt="Hero illustration"
      class="block w-full h-full object-cover animate-fade-up"
    />
    <div class="absolute z-1 inset-x-0 top-0 h-12 bg-gradient-to-b from-[#F7F4F0] to-transparent" />
  </figure>

  <figure class="max-md:hidden absolute z-0 inset-0 pointer-events-none">
    <img
      src={HeroDesktop}
      alt="Hero illustration"
      class="block w-full h-full object-cover object-right md:animate-fade-in"
    />
    <div class="xl:hidden absolute z-1 inset-0 bg-gradient-to-tr from-cream/90 from-30% via-transparent via-60% to-cream/90" />
  </figure>
</section>