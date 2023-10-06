<script>
  import QuestionMark from './QuestionMark.svelte';
  import Tooltip from './Tooltip.svelte';

  export let Hst;
</script>

<Hst.Story title="Components/Tooltip">
  <div class="px-4 py-32 flex items-center justify-center bg-accent">
    <Tooltip>
      <svelte:fragment slot="button">
        <QuestionMark class="h-12" />
      </svelte:fragment>
      <svelte:fragment slot="tooltip">
        Think of terms like - a small icon, a collection of items or a full scene or an environment.
      </svelte:fragment>
    </Tooltip>
  </div>
</Hst.Story>