<script>
  import Heart from './Heart.svelte';

  export let Hst;
  
  let color = '#ff3c3c';
  let fontSize = 1;
</script>

<Hst.Story title="Heart">
  <Hst.Variant title="current font size">
    <div style={`color: ${color}; font-size: ${fontSize}rem;`}>
      <Heart {open} />
    </div>

    <svelte:fragment slot="controls">
      <Hst.ColorSelect
        bind:value={color}
        title="Color"
      />
      <Hst.Slider
        bind:value={fontSize}
        title="Font-size (rem)"
        step="1"
        min="1"
        max="7"
      />
    </svelte:fragment>
  </Hst.Variant>
  <Hst.Variant title="manual">
    <div style={`color: ${color};`}>
      <Heart {open} size="manual" class="h-12" />
    </div>

    <svelte:fragment slot="controls">
      <Hst.ColorSelect
        bind:value={color}
        title="Color"
      />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>