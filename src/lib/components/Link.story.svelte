<script>
  import Link from './Link.svelte';

  export let Hst;
</script>

<Hst.Story title="Link">
  <Hst.Variant title="basic link">
    <Link href="#">
      Get started
    </Link>
  </Hst.Variant>
  <Hst.Variant title="disabled link">
    <Link
      href="#"
      disabled={true}
    >
      Get started
    </Link>
  </Hst.Variant>
  <Hst.Variant title="button link">
    <Link on:click={console.log}>
      Get started
    </Link>
  </Hst.Variant>
  <Hst.Variant title="disabled button">
    <Link
      on:click={console.log}
      disabled={true}
    >
      Get started
    </Link>
  </Hst.Variant>
</Hst.Story>