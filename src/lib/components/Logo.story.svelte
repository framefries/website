<script>
  import Logo from './Logo.svelte';

  export let Hst;
  
  let color = '#ff3c3c';
  let fontSize = 3;
  let height = 96;
</script>

<Hst.Story title="Components/Logo">
  <Hst.Variant title="current font size">
    <div style={`color: ${color}; font-size: ${fontSize}rem;`}>
      <Logo size="current" />
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
  <Hst.Variant title="original">
    <div style={`color: ${color};`}>
      <Logo size="original" />
    </div>

    <svelte:fragment slot="controls">
      <Hst.ColorSelect
        bind:value={color}
        title="Color"
      />
    </svelte:fragment>
  </Hst.Variant>
  <Hst.Variant title="fit">
    <div style={`color: ${color}; height: ${height}px;`}>
      <Logo size="fit" />
    </div>

    <svelte:fragment slot="controls">
      <Hst.ColorSelect
        bind:value={color}
        title="Color"
      />
      <Hst.Slider
        bind:value={height}
        title="Height (px)"
        step="16"
        min="16"
        max="256"
      />
    </svelte:fragment>
  </Hst.Variant>
  <Hst.Variant title="manual">
    <div style={`color: ${color};`}>
      <Logo class="h-48" />
    </div>

    <svelte:fragment slot="controls">
      <Hst.ColorSelect
        bind:value={color}
        title="Color"
      />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>