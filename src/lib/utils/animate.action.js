import { throttle } from 'throttle-debounce';

export default function(node, options) {
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

  function init() {
    destroy();
    node.classList.add('pause');
    window.addEventListener('resize', check);
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('touchmove', check, { passive: true });
    check();
  }

  function destroy() {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('scroll', check);
    window.removeEventListener('touchmove', check);
  }

  if (typeof options?.container === 'undefined') {
    init();
  }

  return {
    update(opts) {
      if (opts?.container) {
        trigger = opts.container;
      }
      init();
    },
    destroy,
  };
}
