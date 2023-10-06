<script>
  import Arrow from './Arrow.svelte';

  export let Hst;
  
  let color = '#ff3c3c';
  let fontSize = 1;
  let long = false;
</script>

<Hst.Story title="Icons/Arrow">
  <Hst.Variant title="font size">
    <div style={`color: ${color}; font-size: ${fontSize}rem;`}>
      <Arrow class="h-current" />
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
      <Hst.Checkbox
        bind:value={long}
        title="Long arrow"
      />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant title="manual">
    <div style={`color: ${color};`}>
      <Arrow {long} class="h-12" />
    </div>

    <svelte:fragment slot="controls">
      <Hst.ColorSelect
        bind:value={color}
        title="Color"
      />
      <Hst.Checkbox
        bind:value={long}
        title="Long arrow"
      />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>