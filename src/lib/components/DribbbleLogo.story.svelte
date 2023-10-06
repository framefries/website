<script>
  import DribbbleLogo from './DribbbleLogo.svelte';

  export let Hst;
  
  let color = '#ea4c89';
  let fontSize = 1;
</script>

<Hst.Story title="Icons/Dribbble Logo">
  <Hst.Variant title="font size">
    <div style={`color: ${color}; font-size: ${fontSize}rem;`}>
      <DribbbleLogo class="h-current" />
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
      <DribbbleLogo class="h-12" />
    </div>

    <svelte:fragment slot="controls">
      <Hst.ColorSelect
        bind:value={color}
        title="Color"
      />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>