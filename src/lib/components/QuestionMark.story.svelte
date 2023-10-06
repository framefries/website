<script>
  import QuestionMark from './QuestionMark.svelte';

  export let Hst;
  
  let color = '#FFF9E9';
  let fontSize = 1;
</script>

<Hst.Story title="Icons/Question Mark">
  <Hst.Variant title="font size">
    <div style={`color: ${color}; font-size: ${fontSize}rem;`}>
      <QuestionMark class="h-current" />
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
      <QuestionMark class="h-12" />
    </div>

    <svelte:fragment slot="controls">
      <Hst.ColorSelect
        bind:value={color}
        title="Color"
      />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>