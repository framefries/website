<script>
  import cx from 'clsx';

  export let name = [];
  export let options = [];

  export let value = '';
</script>

<div class="p-0.5 flex rounded bg-cream overflow-hidden">
  {#each options as option}
    <label
      class={cx(
        'shrink-0 grow py-2.5 px-1',
        'rounded-[3px] text-center',
        'cursor-pointer select-none',
        'transition-colors duration-150',
        {
          'bg-accent text-cream': value === option.value,
          'text-accent': value !== option.value,
        }
      )}
    >
      <input
        type="radio"
        name={name}
        on:change
        bind:group={value}
        value={option.value}
        class="sr-only"
      />
      {option.label}
    </label>
  {/each}
</div>