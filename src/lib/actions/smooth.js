function handleClick(e) {
  if (!e.currentTarget.href) return;
  const hash = new URL(e.currentTarget.href).hash;
  if (!hash) return;
  const target = document.querySelector(hash);
  if (!target) return;
  e.preventDefault();
  window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
}

export default function smooth(node) {
  node.addEventListener('click', handleClick);

  return {
    destroy: () => {
      node.removeEventListener('click', handleClick);
    },
  };
}