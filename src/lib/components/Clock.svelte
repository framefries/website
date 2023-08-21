<script>
  import cx from 'clsx';
  import dayjs from 'dayjs';
  import utc from 'dayjs/plugin/utc';
  import tz from 'dayjs/plugin/timezone';
  import { onMount } from 'svelte';

  dayjs.extend(utc);
  dayjs.extend(tz);

  export let date;
  export let timezone;
  $: city = timezone.split('/')[1];
  let time = dayjs();

  function update() {
    time = dayjs.utc(date).tz(timezone);
    setTimeout(update, 1000);
  }

  onMount(update);
</script>

<div
  role="presentation"
  class={cx('flex md:flex-col max-md:items-baseline gap-x-2', $$props.class)}
>
  <time
    datetime={time.toISOString()}
    class="inline-flex gap-1 leading-none text-4xl md:text-5xl lg:text-7xl font-display"
  >
    {time.format('HH')}
    <span class="animate-blink">:</span>
    {time.format('mm')}
  </time>
  <span class="md:-mt-2 leading-none uppercase md:text-lg lg:text-xl font-thin">
    {city}
  </span>
</div>