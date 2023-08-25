import { debounce } from 'throttle-debounce';
import { isObject } from './helpers.js';

export default function(node, params) {
  if (!isObject(params)) return;
  const options = { amplitude: 0, rotation: 0, angle: 0, ...params };

  const container = document.documentElement;
  let target;
  let amplitude = 0;

  const init = () => {
    node.style.setProperty('willChange', 'transform');
    node.classList.add('translate-y-0', 'rotate-0');
    const pos = node.getBoundingClientRect();
    const center = (pos.top + pos.bottom) / 2 + container.scrollTop;
    target = Math.max(0, Math.min(center - container.clientHeight/2, container.scrollHeight - container.clientHeight));
    amplitude = options.amplitude / 100 * container.clientHeight / 2;
  };

  const update = () => {
    if (typeof target !== 'undefined') {
      const ratio = Math.min(1, Math.abs(target - container.scrollTop) / (container.clientHeight / 2));
      const dir = container.scrollTop > target ? -1 : 1;
      node.style.setProperty('--tw-translate-y', `${amplitude * dir * ratio}px`);
      node.style.setProperty('--tw-rotate', `${options.angle + (options.rotation * dir * ratio)}deg`);
    }
  };

  const handleResize = debounce(200, init);
  const handleScroll = () => { requestAnimationFrame(update); };
  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('touchmove', handleScroll);
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
