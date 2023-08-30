<script>
  import RadioGroup from './RadioGroup.svelte';

  export let Hst;
</script>

<Hst.Story title="Components/Radio Group">
  <RadioGroup
    name="size"
    value="M"
    options={[
      { value: 'S', label: 'Small' },
      { value: 'M', label: 'Medium' },
      { value: 'L', label: 'Large' },
    ]}
  />
</Hst.Story>