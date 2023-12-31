<script>
  import Step from './Step.svelte';
  import Arrow from '$lib/components/Arrow.svelte';
  import animate from '$lib/utils/animate.action.js';

  const steps = [
    {
      title: 'Set the table',
      description: `
        Let’s start things off right! We need some basic details about the project you have in mind.
        It’s a simple browser-based form.
        <a href="${import.meta.env.VITE_FORM_URL}" target="_blank">Start right here!</a>
      `,
      duration: `Takes you about 5 minutes.`,
    },
    {
      title: 'Confirm order',
      description: `We’ve received your order and we’re reviewing it. You should get a detailed quote & work plan soon. We might decline some orders based on mismatch in style, scope or timeline.`,
      duration: `We’ll be in touch in next 24 hours.`,
    },
    {
      title: 'Stove are lit',
      description: `After receiving the deposit - time to get to work! We’ll go through each step detailed in the work plan with plenty of opportunity for you to provide feedback & adjustments.`,
      duration: `1-5 days depending on the scope.`,
    },
    {
      title: 'Goods plated',
      description: `We’re close to the finish line! After the last round of feedback we’ll take a moment to package everything up and send you a tidy link for downloading your order.`,
      duration: `Less than a day.`,
    },
  ];

  let stepsContainer = null;
</script>

<section
  id="process"
  class={$$props.class}
>
  <div class="px-6 md:px-6 lg:px-14 lg:py-16">
    <p
      use:animate
      class="max-w-[1032px] mx-auto text-center text-3xl md:text-4xl lg:text-5xl md:!leading-tight font-display animate-fade-up pause"
    >
      <b class="font-normal text-accent">Frame Fries is for you</b> if you want to avoid hassle, 
      a multitude of long meetings and other various side-quests that arise in creative projects like these.
    </p>
  </div>

  <h3
    use:animate
    class="mt-6 px-6 text-center text-xl md:text-3xl md:!leading-tight font-display animate-fade-up pause"
  >
    Let's talk about how we serve.
  </h3>

  <div
    bind:this={stepsContainer}
    class="mt-4 md:mt-10 px-6 md:px-12 lg:px-20 w-full flex snap-mandatory scrollbar-none snap-x overflow-x-auto sm:grid sm:grid-cols-2 gap-2 md:gap-6"
  >
    {#each steps as step, i}
      <div
        use:animate={{ container: stepsContainer }}
        class="shrink-0 w-full min-h-4 snap-center snap-always animate-fade-down after-[var(--delay)] pause"
        style={`--delay:${i*150}ms`}
      >
        <Step
          value={i+1}
          title={step.title}
          class="w-full h-full"
        >
          <p slot="description">{@html step.description}</p>
          <p slot="duration">{step.duration}</p>
        </Step>
      </div>
    {/each}
  </div>

  <footer class="mt-12 text-center">
    <a
      href={import.meta.env.VITE_FORM_URL}
      target="_blank"
      class="btn variant-primary !h-12 !text-xl"
    >
      Let's get started
      <Arrow class="h-3.5" />
    </a>
  </footer>
</section>