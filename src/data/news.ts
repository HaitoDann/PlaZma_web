import { getCollection } from 'astro:content';

export const getNews = async () =>
  (await getCollection('actus')).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
