import { debounce } from 'throttle-debounce';

export default function(node, options) {
  const { amplitude, rotation, angle } = { amplitude: 0, rotation: 0, angle: 0, ...options };

  const container = document.documentElement;
  let target;
  let dy = 0;

  const init = () => {
    node.style.setProperty('willChange', 'transform');
    node.classList.add('translate-y-0', 'rotate-0');
    const pos = node.getBoundingClientRect();
    const center = (pos.top + pos.bottom) / 2 + container.scrollTop;
    target = Math.max(0, Math.min(center - container.clientHeight/2, container.scrollHeight - container.clientHeight));
    dy = amplitude / 100 * container.clientHeight / 2;
  };

  const update = () => {
    if (typeof target !== 'undefined') {
      const ratio = Math.min(1, Math.abs(target - container.scrollTop) / (container.clientHeight / 2));
      const dir = container.scrollTop > target ? -1 : 1;
      node.style.setProperty('--tw-translate-y', `${dy * dir * ratio}px`);
      node.style.setProperty('--tw-rotate', `${angle + (rotation * dir * ratio)}deg`);
    }
  };

  const handleResize = debounce(200, init);
  const handleScroll = () => { requestAnimationFrame(update); };
  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('touchmove', handleScroll, { passive: true });
  
  init();
  update();
  
  return {
    destroy() {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    },
  };
}
