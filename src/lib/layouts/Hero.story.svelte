<script>
  import Hero from './Hero.svelte';

  export let Hst;
</script>

<Hst.Story title="Sections/Hero">
  <div class="md:p-6 bg-white">
    <Hero />
  </div>
</Hst.Story>