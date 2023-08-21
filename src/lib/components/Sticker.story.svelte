<script>
  import Sticker from './Sticker.svelte';

  export let Hst;

  let title = 'Heartfelt';
  let sub = 'But not in a cholesterol way';
</script>

<Hst.Story title="Sticker">
  <Hst.Variant title="default">
    <Sticker {title} {sub} />

    <svelte:fragment slot="controls">
      <Hst.Text
        bind:value={title}
        title="Title"
      />
      <Hst.Text
        bind:value={sub}
        title="Subtitle"
      />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant title="inverted">
    <Sticker {title} {sub} kind="invert" />

    <svelte:fragment slot="controls">
      <Hst.Text
        bind:value={title}
        title="Title"
      />
      <Hst.Text
        bind:value={sub}
        title="Subtitle"
      />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>