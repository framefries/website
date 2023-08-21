<script>
  import Divider from './Divider.svelte';

  export let Hst;
  
  let color = '#292524';
</script>

<Hst.Story title="Divider">
  <Hst.Variant title="default">
    <div style={`color: ${color};`}>
      <Divider />
    </div>

    <svelte:fragment slot="controls">
      <Hst.ColorSelect
        bind:value={color}
        title="Color"
      />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>