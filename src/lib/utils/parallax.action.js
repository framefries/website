import { debounce } from 'throttle-debounce';
import { isObject } from './helpers.js';

export default function(node, params) {
  if (!isObject(params)) return;
  const options = { yAmp: 0, dAmp: 0, dInit: 0, ...params };

  const container = document.documentElement;
  let target;

  const init = () => {
    node.style.willChange = 'transform';
    node.classList.add('translate-y-0', 'rotate-0');
    const pos = node.getBoundingClientRect();
    const center = (pos.top + pos.bottom) / 2 + container.scrollTop;
    target = Math.max(0, Math.min(center - container.clientHeight/2, container.scrollHeight - container.clientHeight));
  };

  const update = () => {
    if (typeof target !== 'undefined') {
      const ratio = Math.min(1, Math.abs(target - container.scrollTop) / (container.clientHeight / 2));
      const dir = container.scrollTop > target ? -1 : 1;
      console.log(options.yAmp * dir * ratio);
      node.style.setProperty('--tw-translate-y', `${options.yAmp * dir * ratio}px`);
      node.style.setProperty('--tw-rotate', `${options.dInit + (options.dAmp * dir * ratio)}deg`);
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
    destroy: () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    },
  };
}