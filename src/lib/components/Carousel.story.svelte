<script>
  import Carousel from './Carousel.svelte';

  export let Hst;

  let speed = 100;
  let flip = false;
</script>

<Hst.Story title="Components/SlidCarouseler">
  <div class="p-6 bg-white">
    <Carousel
      items={Array.from(Array(6).keys())}
      let:item={item}
      {speed}
      {flip}
      class="h-40"
    >
      <span class="text-gray-300 text-5xl font-display">{item}</span>
    </Carousel>
  </div>

  <svelte:fragment slot="controls">
    <Hst.Slider
      bind:value={speed}
      title="Speed (px/s)"
      step="50"
      min="50"
      max="500"
    />
    <Hst.Checkbox
      bind:value={flip}
      title="Flip direction"
    />
  </svelte:fragment>
</Hst.Story>