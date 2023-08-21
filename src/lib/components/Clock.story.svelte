<script>
  import Clock from './Clock.svelte';

  export let Hst;

  const timezones = [
    'Europe/Paris',
    'Europe/Bratislava',
    'Europe/Tallinn',
  ];
  let timezone = 'Europe/Paris';
</script>

<Hst.Story title="Clock">
  <div class="text-accent">
    <Clock timezone={timezone} />
  </div>

  <svelte:fragment slot="controls">
    <Hst.Select
      bind:value={timezone}
      title="Timezone"
      options={timezones}
    />
  </svelte:fragment>
</Hst.Story>