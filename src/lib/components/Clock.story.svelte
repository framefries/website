<script>
  import Clock from './Clock.svelte';

  export let Hst;
  
  let color = '#ff3c3c';
  let fontSize = 1;
</script>

<Hst.Story title="Icons/Clock">
  <Hst.Variant title="font size">
    <div style={`color: ${color}; font-size: ${fontSize}rem;`}>
      <Clock class="h-current" />
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
      <Clock class="h-12" />
    </div>

    <svelte:fragment slot="controls">
      <Hst.ColorSelect
        bind:value={color}
        title="Color"
      />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>