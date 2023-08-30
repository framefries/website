<script>
  import cx from 'clsx';

  import ExampleSmall from '$lib/assets/illustration-small.webp';
  import ExampleMedium from '$lib/assets/illustration-medium.webp';
  import ExampleLarge from '$lib/assets/illustration-large.webp';
  import QuestionMark from '$lib/components/QuestionMark.svelte';
  import RadioGroup from '$lib/components/RadioGroup.svelte';
  import Tooltip from '$lib/components/Tooltip.svelte';

  let values = {
    size: 'S',
    details: 1,
    animated: false,
    characters: false,
  };

  const fields = [
    {
      value: 'size',
      title: `How big do you want it?`,
      tooltip: `Think of terms like - a small icon, a collection of items or a full scene or an environment.`,
      options: [
        { value: 'S', label: 'Small' },
        { value: 'M', label: 'Medium' },
        { value: 'L', label: 'Large' },
      ],
    },
    {
      value: 'details',
      title: `How detailed do you want them?`,
      tooltip: `Difference between Highly and Hardly is seeing a trees individual leaves vs seeing a tree.`,
      options: [
        { value: 1, label: 'Hardly' },
        { value: 2, label: 'Slightly' },
        { value: 3, label: 'Highly' },
      ],
    },
    {
      value: 'animated',
      title: `Need ‘em animated too?`,
      tooltip: `Animation can add a lot of upfront costs to your project - if you’re unsure then leave it out for now.`,
      options: [
        { value: false, label: 'Nope' },
        { value: true, label: 'Yes, please' },
      ],
    },
    {
      value: 'characters',
      title: `Want to add characters too?`,
      tooltip: `Characters can add a lot of complexity.`,
      options: [
        { value: false, label: 'Nah, I’m good' },
        { value: true, label: 'Sure!' },
      ],
    },
  ];

  const examples = {
    S: ExampleSmall,
    M: ExampleMedium,
    L: ExampleLarge,
  };

  $: exampleSrc = examples[values.size] || ExampleSmall;
</script>

<section
  id="pricing"
  class={cx(
    'p-6 md:p-12 lg:px-20 lg:py-16',
    'flex gap-28',
    'md:rounded-md bg-accent',
    'text-cream',
    $$props.class
  )}
>
  <div class="space-y-14">
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

    <form class="grid grid-cols-2 gap-6 items-start">
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

  <div class="shrink-0 relative w-[416px]">
    <div class="absolute inset-x-0 -top-[calc(4rem_+_3px)] bottom-0 flex flex-col">
      <div class="grow p-8 rounded-t bg-cream">
        <div class="rounded-md">
          <img
            src={exampleSrc}
            alt={`Illustration example size ${values.size}`}
            class="block w-full h-auto"
          />
        </div>
      </div>
      <svg viewBox="0 0 416 67" class="-mt-1 w-full h-auto stroke-0 fill-cream">
        <path d="M0 60.75V0h416v60.75a5.3 5.3 0 0 1-6.9 5.05 662.36 662.36 0 0 0-402.2 0A5.3 5.3 0 0 1 0 60.75Z" />
      </svg>
    </div>
  </div>
</section>