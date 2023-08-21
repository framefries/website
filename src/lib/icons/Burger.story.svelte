<script>
  import Burger from './Burger.svelte';

  export let Hst;
  
  let color = '#ff3c3c';
  let fontSize = 1;
  let open = false;
</script>

<Hst.Story title="Burger">
  <Hst.Variant title="current font size">
    <div style={`color: ${color}; font-size: ${fontSize}rem;`}>
      <Burger {open} />
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
        bind:value={open}
        title="Toggle"
      />
    </svelte:fragment>
  </Hst.Variant>
  
  <Hst.Variant title="manual">
    <div style={`color: ${color};`}>
      <Burger {open} size="manual" class="h-12" />
    </div>

    <svelte:fragment slot="controls">
      <Hst.ColorSelect
        bind:value={color}
        title="Color"
      />
      <Hst.Checkbox
        bind:value={open}
        title="Toggle"
      />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>