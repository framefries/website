<script>
  import cx from 'clsx';

  import ExampleSmall from '$lib/assets/illustration-small.webp';
  import ExampleMedium from '$lib/assets/illustration-medium.webp';
  import ExampleLarge from '$lib/assets/illustration-large.webp';
  import Arrow from '$lib/components/Arrow.svelte';
  import QuestionMark from '$lib/components/QuestionMark.svelte';
  import RadioGroup from '$lib/components/RadioGroup.svelte';
  import Tooltip from '$lib/components/Tooltip.svelte';

  const fields = [
    {
      value: 'size',
      title: `How big do you want it?`,
      tooltip: `Think of terms like - a small icon, a collection of items or a full scene or an environment.`,
      options: [
        { value: 0, label: 'Small' },
        { value: 1, label: 'Medium' },
        { value: 2, label: 'Large' },
      ],
    },
    {
      value: 'details',
      title: `How detailed do you want them?`,
      tooltip: `Difference between Highly and Hardly is seeing a trees individual leaves vs seeing a tree.`,
      options: [
        { value: 0, label: 'Hardly' },
        { value: 1, label: 'Slightly' },
        { value: 2, label: 'Highly' },
      ],
    },
    {
      value: 'animated',
      title: `Need ‘em animated too?`,
      tooltip: `Animation can add a lot of upfront costs to your project - if you’re unsure then leave it out for now.`,
      options: [
        { value: 0, label: 'Nope' },
        { value: 1, label: 'Yes, please' },
      ],
    },
    {
      value: 'characters',
      title: `Want to add characters too?`,
      tooltip: `Characters can add a lot of complexity.`,
      options: [
        { value: 0, label: 'Nah, I’m good' },
        { value: 1, label: 'Sure!' },
      ],
    },
  ];

  let values = {
    size: 0,
    details: 0,
    animated: 0,
    characters: 0,
  };

  function computePrice({ size, details, animated, characters }, mod = 0) {
    return (400+(size+1+mod)*400+details*200)*(1+animated+characters);
  }

  $: priceLow = computePrice(values);
  $: priceHigh = computePrice(values, 1);

  const examples = [ExampleSmall, ExampleMedium, ExampleLarge];
  $: exampleSrc = examples[values.size] || ExampleSmall;
</script>

<section
  id="pricing"
  class={cx(
    'p-6 md:px-12 lg:px-20',
    'flex max-md:flex-col gap-6 md:gap-12 lg:gap-28',
    'md:rounded-md bg-accent',
    $$props.class
  )}
>
  <div class="shrink-0 grow basis-0 min-w-0 md:py-6 lg:py-10 space-y-6 md:space-y-14 text-cream">
    <header class="space-y-4 md:text-xl">
      <h2 class="text-3xl md:text-4xl lg:text-5xl md:!leading-tight font-display">
        Now, what’s the cost?
      </h2>
      <p>
        If you like what’s on the menu then here’s a simple way to get a ballpark estimate for your own order.
      </p>
      <p>
        Do bear in mind that this is just an estimate. After sending us your order, we’ll review it and provide you an exact quote.
      </p>
    </header>

    <form class="grid sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-6 items-start">
      {#each fields as field}
        <div>
          <div class="w-full flex items-center justify-between">
            <span class="font-medium">{field.title}</span>
            <Tooltip class="p-3 -mr-3">
              <svelte:fragment slot="button">
                <QuestionMark class="h-4" />
              </svelte:fragment>
              <svelte:fragment slot="tooltip">
                {field.tooltip}
              </svelte:fragment>
            </Tooltip>
          </div>
          <RadioGroup
            name={field.value}
            bind:value={values[field.value]}
            options={field.options}
            class="mt-1"
          />
        </div>
      {/each}
    </form>
  </div>

  <div class="shrink-0 grow basis-0 min-w-0 relative md:-top-7 md:max-w-[416px] flex md:flex-col items-stretch">
    <div class="grow flex flex-col sm:max-md:flex-row p-4 lg:p-8 gap-4 md:max-lg:pt-28 lg:gap-8 rounded md:rounded-b-0 bg-cream">
      <figure class="shrink-0 grow basis-0 min-w-0">
        <img
          src={exampleSrc}
          loading="lazy"
          alt="Illustration size comparison"
          class="w-full h-auto md:h-full rounded-md bg-[#F9F3E3] object-contain"
        />
      </figure>
      <div class={cx(
        'shrink-0 max-md:grow basis-0 min-w-0 flex flex-col items-center justify-center',
        'pt-4 sm:max-md:pl-4 sm:max-md:pt-0 lg:pt-8',
        'border-t sm:max-md:border-l sm:max-md:border-t-0',
        'border-dashed border-black/10 gap-4'
      )}>
        <p class="flex flex-col gap-1 text-center">
          <span class="lg:text-xl">Your total might come to</span>
          <span class="text-2xl lg:text-3xl text-accent font-display whitespace-nowrap">
            {priceLow.toLocaleString('en-US')} – {priceHigh.toLocaleString('en-US')} €
          </span>
        </p>
        <a
          href={import.meta.env.VITE_FORM_URL}
          target="_blank"
          class="btn variant-primary"
        >
          Let's get started
          <Arrow class="h-3.5" />
        </a>
      </div>
    </div>
    <div class="max-md:hidden">
      <svg viewBox="0 0 416 37" class="-mt-1 w-full h-auto stroke-0 fill-cream">
        <path d="M0 30.75V0h416v30.75a5.33 5.33 0 0 1-6.9 5.05 662.45 662.45 0 0 0-402.2 0A5.3 5.3 0 0 1 0 30.75Z" />
      </svg>
    </div>
  </div>
</section>