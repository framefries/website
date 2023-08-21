export const prerender = true;

export function load({ url }) {
  const canonical = new URL(url.pathname, import.meta.env.VITE_BASE_URL);
  const indexing = import.meta.env.VITE_INDEXING ? 'index, follow' : 'noindex, nofollow';
  return {
    title: "Frame Fries, 3D illustration studio",
    description: "Frame Fries is an ultra-efficient and high quality 3D illustration studio, using a pricing configurator to cut the crap and get things done.",
    canonical: canonical.href.replace(/\/$/, ''),
    indexing,
  };
}