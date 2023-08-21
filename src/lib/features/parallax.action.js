import { debounce } from 'throttle-debounce';

export default function(node, amplitude = 100) {
  const container = document.documentElement;
  let target;

  const init = () => {
    node.style.willChange = 'transform';
    const pos = node.getBoundingClientRect();
    const center = (pos.top + pos.bottom) / 2 + container.scrollTop - container.clientHeight/2;
    target = Math.max(0, Math.min(center, container.scrollHeight - container.clientHeight));
  };

  const update = () => {
    if (typeof target !== 'undefined') {
      const distance = Math.min(1, Math.abs(container.scrollTop - target) / container.clientHeight);
      const direction = container.scrollTop > target ? 1 : -1;
      const shift = amplitude * direction * distance;
      node.style.transform = `translateY(${-shift}px)`;
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