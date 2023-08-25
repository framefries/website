<script>
  import Heart from './Heart.svelte';
  import Check from './Check.svelte';
  import Sticker from './Sticker.svelte';

  export let Hst;

  let title = 'Heartfelt';
  let kind = 'default';
  let sub = 'But not in a cholesterol way';
</script>

<Hst.Story title="Components/Sticker">
  <Hst.Variant title="default">
    <Sticker
      title={title}
      sub={sub}
      kind={kind}
    />

    <svelte:fragment slot="controls">
      <Hst.ButtonGroup
        bind:value={kind}
        options={['default', 'invert']}
        title="Color"
      />
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
    <Sticker
      title={title}
      sub={sub}
      kind={kind}
    >
      <Heart class="-mx-1 md:-mx-2 h-12 md:h-14" />
    </Sticker>

    <svelte:fragment slot="controls">
      <Hst.ButtonGroup
        bind:value={kind}
        options={['default', 'invert']}
        title="Color"
      />
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

  <Hst.Variant title="icon only">
    <Sticker kind={kind}>
      <Check class="h-full" />
    </Sticker>

    <svelte:fragment slot="controls">
      <Hst.ButtonGroup
        bind:value={kind}
        options={['default', 'invert']}
        title="Color"
      />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>