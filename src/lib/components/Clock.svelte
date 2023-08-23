<script>
  import cx from 'clsx';
  import dayjs from 'dayjs';
  import utc from 'dayjs/plugin/utc';
  import tz from 'dayjs/plugin/timezone';
  import { onMount } from 'svelte';

  dayjs.extend(utc);
  dayjs.extend(tz);

  export let timezone;
  $: city = timezone.split('/')[1];
  let time = dayjs();

  function update() {
    time = dayjs.utc().tz(timezone);
    setTimeout(update, 2000);
  }

  onMount(update);
</script>

<div
  role="presentation"
  class={cx('@container', $$props.class)}
>
  <div class="flex flex-col gap-x-2">
    <time
      datetime={time.toISOString()}
      class="inline-flex gap-1 leading-none text-2xl @[8rem]:text-4xl @[16rem]:text-7xl font-display"
    >
      {time.format('HH')}
      <span class="animate-blink">:</span>
      {time.format('mm')}
    </time>
    <span class="@[8rem]:-mt-2 leading-none uppercase text-xs @[8rem]:text-lg @[16rem]:text-xl">
      {city}
    </span>
  </div>
</div>