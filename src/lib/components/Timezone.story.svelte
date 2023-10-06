<script>
  import Timezone from './Timezone.svelte';

  export let Hst;

  const timezones = [
    'Europe/Paris',
    'Europe/Bratislava',
    'Europe/Tallinn',
  ];
  let tz = 'Europe/Paris';
</script>

<Hst.Story title="Components/Timezone">
  <div class="text-accent">
    <Timezone tz={tz} />
  </div>

  <svelte:fragment slot="controls">
    <Hst.Select
      bind:value={tz}
      title="Timezone"
      options={timezones}
    />
  </svelte:fragment>
</Hst.Story>