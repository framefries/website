<script>
  import cx from 'clsx';
  import Step from './Step.svelte';
  import animate from '$lib/utils/animate.action.js';

  const steps = [
    { title: 'Set the table', content: 'Let’s start things off right! We need some basic details about the project you have in mind. It’s a simple browser-based form. <a href="#">Start right here!</a>' },
    { title: 'Confirm order', content: 'Gravida praesent elit nisl cursus diam quam quis sit dignissim. Id pellentesque ac mauris amet scelerisque purus feugiat pharetra. Ipsum quis lacus felis velit leo.' },
    { title: 'Stove are lit', content: 'Blandit arcu consequat risus sit nunc laoreet facilisis. Lorem morbi auctor varius magna massa turpis nibh elementum. Augue egestas lectus habitant sit purus.' },
    { title: 'Goods plated', content: 'Dignissim urna fusce velit facilisi elementum magna vel vulputate. Lacus integer consectetur sit neque ullamcorper nec turpis. Ac tristique tortor scelerisque.' },
  ];
</script>

<section class={cx(
  'space-y-6 md:space-y-8',
  $$props.class
)}>
  <div class="max-w-6xl mx-auto p-6 md:py-20 lg:px-20 text-center">
    <p
      use:animate
      class="text-3xl md:text-5xl md:!leading-tight font-display animate-fade-up pause"
    >
      <b class="text-accent">Frame Fries is for you</b> if you want to avoid hassle, 
      a multitude of long meetings and other various side-quests that arise in creative projects like these.
    </p>
  </div>

  <section class="p-6 md:px-20">
    <div class="max-w-4xl mx-auto text-center">
      <h3 class="text-xl md:text-3xl md:!leading-tight font-display">
        Let's talk about how we serve.
      </h3>
    </div>
    <div class="mt-4 md:mt-10 w-full grid sm:grid-cols-2 gap-2 md:gap-6">
      {#each steps as step, i}
        <Step
          value={i+1}
          title={step.title}
          class="md:rounded-xl overflow-hidden"
        >
          <div class="prose prose-gray @lg:prose-xl @lg:!leading-snug prose-a:font-light prose-a:text-accent prose-a:no-underline prose-a:hover:underline">
            <p>
              {@html step.content}
            </p>
          </div>
        </Step>
      {/each}
    </div>
  </section>
</section>