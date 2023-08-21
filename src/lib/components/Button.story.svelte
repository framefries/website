<script>
  import Arrow from '$lib/icons/Arrow.svelte';

  export let Hst;
</script>

<Hst.Story title="Button">
  <Hst.Variant title="default">
    <button class="btn">
      Get started
      <Arrow size="manual" class="h-3.5" long={true} />
    </button>
  </Hst.Variant>

  <Hst.Variant title="primary">
    <button class="btn variant-primary">
      Get started
    </button>
  </Hst.Variant>

  <Hst.Variant title="alternate">
    <button class="btn variant-alt">
      Get started
    </button>
  </Hst.Variant>
</Hst.Story>