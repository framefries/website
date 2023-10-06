<script>
  import cx from 'clsx';

  export let name = [];
  export let options = [];

  export let value = '';
</script>

<div class={cx('p-0.5 flex gap-1.5 rounded bg-cream text-base', $$props.class)}>
  {#each options as option}
    <label
      class={cx(
        'shrink-0 grow basis-0 min-w-0 py-2.5 px-1',
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