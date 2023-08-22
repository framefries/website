<script>
  import Heart from './Heart.svelte';
  import Sticker from './Sticker.svelte';

  export let Hst;

  let title = 'Heartfelt';
  let sub = 'But not in a cholesterol way';
</script>

<Hst.Story title="Components/Sticker">
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

  <Hst.Variant title="with icon">
    <Sticker {title} {sub}>
      <Heart size="manual" class="-mx-1 md:-mx-2 h-12 md:h-14" />
    </Sticker>

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