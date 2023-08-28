<script>
  export let Hst;

  let fontSize = 1;
</script>

<Hst.Story title="Components/Checkbox">
  <div class="flex items-center gap-2 leadning-none" style={`font-size: ${fontSize}rem;`}>
    <input id="checkbox1" type="checkbox" class="checkbox" />
    <label for="checkbox1" class="cursor-pointer">Kiki, do you check me?</label>
  </div>

  <svelte:fragment slot="controls">
    <Hst.Slider
      bind:value={fontSize}
      title="Font-size (rem)"
      step="1"
      min="1"
      max="7"
    />
  </svelte:fragment>
</Hst.Story>