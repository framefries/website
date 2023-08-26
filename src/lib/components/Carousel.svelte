<script>
  import cx from 'clsx';
  import interact from 'interactjs';
  import { onMount } from 'svelte';

  export let items = [];
  export let speed = 100; // px/s
  export let flip = false;

  let inner;
  let duplicates = 1;
  let pos = 0;
  let time = null;
  let timeout;
  let frame;

  function shift(diff) {
    const bound = inner.scrollWidth/duplicates;
    pos = (bound + pos + diff) % bound;
    inner.style.transform = `translate3d(${-pos}px, 0, 0)`;
    return pos;
  }

  function play(t) {
    if (time === null) return;
    frame = requestAnimationFrame(play);
    const dir = flip ? -1 : 1;
    shift(dir * speed * (t - time)/1000);
    time = t;
  }

  function start() {
    time = performance.now();
    frame = requestAnimationFrame(play);
  }
  
  function pause() {
    time = null;
    cancelAnimationFrame(frame);
    clearTimeout(timeout);
    timeout = setTimeout(start, 3000);
  }
  
  onMount(() => {
    const childrenWidth = Array.from(inner.children).reduce((s, n) => s+n.clientWidth, 0);
    duplicates = 1 + Math.ceil(inner.clientWidth/childrenWidth);
    interact(inner).draggable({
      inertia: true,
      startAxis: 'x',
      lockAxis: 'x',
      onmove(e) {
        pause();
        shift(-e.dx);
      },
    });
    start();
		return pause;
  });
</script>

<div
  role="region"
  on:drag={(e) => e.preventDefault()}
  on:touchmove|passive={(e) => e.preventDefault()}
  class={cx('min-h-20 overflow-hidden touch-none select-none', $$props.class)}
>
  <div
    bind:this={inner}
    role="marquee"
    class="h-full flex items-stretch will-change-transform"
  >
    {#each Array.from(Array(duplicates).keys()) as _}
      {#each items as item}
        <div
          role="figure"
          class="shrink-0 h-full px-3"
        >
          <div class="relative shrink-0 flex items-center justify-center h-full aspect-square rounded-md bg-gray-100 overflow-hidden">
            <slot {item} />
          </div>
        </div>
      {/each}
    {/each}
  </div>
</div>