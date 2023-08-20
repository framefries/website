<script>
  import Arrow from './Arrow.svelte';
  import Link from './Link.svelte';

  export let Hst;
</script>

<Hst.Story title="Button">
  <Hst.Variant title="default">
    <button
      class="btn"
    >
      Get started
    </button>
  </Hst.Variant>

  <Hst.Variant title="primary">
    <button
      class="btn variant-primary"
    >
      Get started
    </button>
  </Hst.Variant>

  <Hst.Variant title="alternate">
    <button
      class="btn variant-alt"
    >
      Get started
      <Arrow />
    </button>
  </Hst.Variant>
</Hst.Story>