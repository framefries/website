<script>
  import Dribbble from './Dribbble.svelte';

  export let Hst;

  let title = 'There’s more!';
  let description = 'Follow Roman on Dribbble to stay up to date with his works.';
  let action = 'Roman on Dribbble';
  let url = 'https://dribbble.com/romanklco';
</script>

<Hst.Story title="Cards/Dribbble">
  <div class="p-6 bg-white">
    <Dribbble
      title={title}
      description={description}
      action={action}
      url={url}
    />
  </div>

  <svelte:fragment slot="controls">
    <Hst.Text
      bind:value={title}
      title="Title"
    />
    <Hst.Text
      bind:value={description}
      title="Description"
    />
    <Hst.Text
      bind:value={action}
      title="Action label"
    />
    <Hst.Text
      bind:value={url}
      title="URL"
    />
  </svelte:fragment>
</Hst.Story>