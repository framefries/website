// import { debounce } from 'throttle-debounce';

export default function(node, { container }) {
  let target = container || node;
  node.classList.add('pause');

  function check() {
    const pos = target.getBoundingClientRect();
    if (pos.top < document.documentElement.clientHeight*.8) {
      node.classList.remove('pause');
      destroy();
    }
  }

  function destroy() {
    window.removeEventListener('resize', check);
    window.removeEventListener('scroll', check);
    window.removeEventListener('touchmove', check);
  }

  window.addEventListener('resize', check);
  window.addEventListener('scroll', check);
  window.addEventListener('touchmove', check);

  check();

  return {
    destroy,
  };
}
