export default function(node) {
  const handleClick = (e) => {
    if (!node.href) return;
    const hash = new URL(node.href).hash;
    if (!hash) return;
    const target = document.querySelector(hash);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
  };

  node.addEventListener('click', handleClick);
  return {
    destroy() {
      node.removeEventListener('click', handleClick);
    },
  };
}