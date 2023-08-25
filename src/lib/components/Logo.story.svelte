<script>
  import Logo from './Logo.svelte';

  export let Hst;
  
  let color = '#ff3c3c';
  let fontSize = 3;
</script>

<Hst.Story title="Components/Logo">
  <Hst.Variant title="font size">
    <div style={`color: ${color}; font-size: ${fontSize}rem;`}>
      <Logo class="h-current" />
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
      <Logo class="h-[72px]" />
    </div>

    <svelte:fragment slot="controls">
      <Hst.ColorSelect
        bind:value={color}
        title="Color"
      />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>