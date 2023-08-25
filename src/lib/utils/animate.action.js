import { throttle } from 'throttle-debounce';

export default function(node) {
  let trigger = node;
  
  function check() {
    requestAnimationFrame(() => {
      const pos = trigger.getBoundingClientRect();
      if (pos.top < document.documentElement.clientHeight*0.9) {
        node.classList.remove('pause');
        destroy();
      }
    });
  }

  const handleResize = throttle(100, check);

  function destroy() {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('scroll', check);
    window.removeEventListener('touchmove', check);
  }

  window.addEventListener('resize', check);
  window.addEventListener('scroll', check);
  window.addEventListener('touchmove', check);

  check();

  return {
    update(options) {
      if (options?.trigger) {
        trigger = options.trigger;
      }
    },
    destroy,
  };
}
