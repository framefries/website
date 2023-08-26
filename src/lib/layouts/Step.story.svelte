<script>
  import Step from './Step.svelte';

  export let Hst;

  let title = 'Stove are lit';
  let number = 3;
  let description = 'After receiving the deposit - time to get to work! We’ll go through each step detailed in the work plan with plenty of opportunity for you to provide feedback & adjustments.';
  let duration = '1-5 days depending on the scope.';
</script>

<Hst.Story title="Cards/Step">
  <Step title="Stove are lit" value={number}>
    <p slot="description">{description}</p>
    <p slot="duration">{duration}</p>
  </Step>

  <svelte:fragment slot="controls">
    <Hst.Slider
      bind:value={number}
      title="Step"
      step="1"
      min="1"
      max="9"
    />
    <Hst.Text
      bind:value={title}
      title="Title"
    />
    <Hst.Text
      bind:value={description}
      title="Description"
    />
    <Hst.Text
      bind:value={duration}
      title="Duration"
    />
  </svelte:fragment>
</Hst.Story>