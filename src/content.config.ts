import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* Actus d'équipe : un fichier Markdown par article dans src/content/actus/.
   Le nom du fichier devient l'URL (/actus/<nom>). */
const actus = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actus' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tag: z.enum(['Compétition', 'Résultat', 'Roster', 'Club', 'Partenaire']).default('Club'),
    cover: z.string().optional(),          // fichier dans /public/actus/
    players: z.array(z.string()).default([]), // slugs des joueurs concernés
    featured: z.boolean().default(false),
  }),
});

export const collections = { actus };
