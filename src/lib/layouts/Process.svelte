<script>
  import cx from 'clsx';
  import Step from '$lib/components/Step.svelte';

  const steps = [
    { title: 'Set the table', content: 'Let’s start things off right! We need some basic details about the project you have in mind. It’s a simple browser-based form. <a href="#">Start right here!</a>' },
    { title: 'Confirm order', content: 'Gravida praesent elit nisl cursus diam quam quis sit dignissim. Id pellentesque ac mauris amet scelerisque purus feugiat pharetra. Ipsum quis lacus felis velit leo.' },
    { title: 'Stove are lit', content: 'Blandit arcu consequat risus sit nunc laoreet facilisis. Lorem morbi auctor varius magna massa turpis nibh elementum. Augue egestas lectus habitant sit purus.' },
    { title: 'Goods plated', content: 'Dignissim urna fusce velit facilisi elementum magna vel vulputate. Lacus integer consectetur sit neque ullamcorper nec turpis. Ac tristique tortor scelerisque.' },
  ];
</script>

<section class={cx('flex flex-col items-center gap-6 md:gap-12 sm:px-6 md:px-20', $$props.class)}>
  <h2 class="py-6 md:py-20 max-w-5xl text-center text-3xl md:text-5xl md:!leading-tight font-display">
    <b class="text-accent">Frame Fries is for you</b> if you want to avoid hassle, 
    a multitude of long meetings and other various side-quests that arise in creative projects like these.
  </h2>
  <h3 class="max-w-4xl text-center text-xl md:text-3xl md:!leading-tight font-display">
    Let's talk about how we serve.
  </h3>
  <div class="w-full grid md:grid-cols-2 gap-6">
    {#each steps as step, i}
      <Step
        value={i+1}
        title={step.title}
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