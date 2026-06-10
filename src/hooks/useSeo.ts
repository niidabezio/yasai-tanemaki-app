import { useEffect } from 'react';

interface SeoOptions {
  title: string;
  description: string;
  ogTitle?: string;
}

export function useSeo({ title, description, ogTitle }: SeoOptions) {
  useEffect(() => {
    document.title = title;

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', ogTitle ?? title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('name', 'twitter:card', 'summary');
    setMeta('name', 'twitter:title', ogTitle ?? title);
    setMeta('name', 'twitter:description', description);
  }, [title, description, ogTitle]);
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
}
