<script>
  import Arrow from './Arrow.svelte';
  import Burger from './Burger.svelte';

  export let Hst;
</script>

<Hst.Story title="Components/Button">
  <Hst.Variant title="default">
    <button class="btn">
      Get started
      <Arrow class="h-3.5" long={true} />
    </button>
  </Hst.Variant>

  <Hst.Variant title="neutral">
    <button class="btn variant-neutral text-accent">
      Get started
      <Arrow class="h-3.5" long={true} />
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

  <Hst.Variant title="icon">
    <button
      class="btn variant-primary variant-icon !text-xl"
      aria-label="Toggle menu"
    >
      <Burger class="h-current" />
    </button>
  </Hst.Variant>
</Hst.Story>