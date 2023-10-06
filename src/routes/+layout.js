export const prerender = true;

export function load({ url }) {
  const canonical = new URL(url.pathname, import.meta.env.VITE_BASE_URL);
  const indexing = import.meta.env.VITE_INDEXING ? 'index, follow' : 'noindex, nofollow';
  return {
    title: "Frame Fries, 3D illustration studio",
    description: "Get high-quality original 3D illustrations and animations for your project at the best possible cost thanks to our streamlined and transparent process.",
    canonical: canonical.href.replace(/\/$/, ''),
    indexing,
  };
}