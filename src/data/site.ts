/* =========================================================================
   Infos générales du club + réseaux + recrutement.
   ⚠️  PLACEHOLDER : remplace les valeurs par les vraies infos PlaZma.
   ========================================================================= */

export const site = {
  name: 'PlaZma',
  // Petit descriptif (pas de slogan demandé pour le moment).
  tagline: '', // laissé vide volontairement
  intro:
    'Club esport compétitif sur League of Legends. Une structure, un roster, une ambition : performer au plus haut niveau.',
  game: 'League of Legends',
  // Logo : remplace /public/logo-plazma.svg par le vrai logo violet
  // (SVG idéal ; sinon dépose un PNG et change l'extension ici).
  logo: 'logo-plazma.svg',
  email: 'contact@plazma.gg', // ⚠️ à remplacer
} as const;

/* Réseaux — mets `url: ''` pour masquer un réseau non utilisé. */
export const socials = [
  { name: 'Discord', url: 'https://discord.gg/REMPLACER', icon: 'discord' },
  { name: 'X / Twitter', url: 'https://x.com/REMPLACER', icon: 'x' },
  { name: 'Instagram', url: 'https://instagram.com/REMPLACER', icon: 'instagram' },
  { name: 'Twitch', url: '', icon: 'twitch' },
  { name: 'YouTube', url: '', icon: 'youtube' },
  { name: 'TikTok', url: '', icon: 'tiktok' },
].filter((s) => s.url);

/* Recrutement */
export const recruitment = {
  open: true, // true = ouvert, false = fermé
  intro:
    'PlaZma cherche à renforcer son effectif. Tu penses avoir le niveau et l’état d’esprit ? Rejoins-nous.',
  // Postes recherchés (vide => on affiche juste « candidatures spontanées »).
  roles: ['Mid', 'Support'], // ⚠️ à ajuster
  // Comment postuler.
  how: 'Rejoins le Discord et ouvre un ticket #recrutement, ou écris-nous par mail.',
  ctaLabel: 'Postuler sur Discord',
  ctaUrl: 'https://discord.gg/REMPLACER',
};
