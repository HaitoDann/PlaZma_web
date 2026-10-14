/* =========================================================================
   Infos générales du club + réseaux + recrutement.
   ========================================================================= */

export const site = {
  name: 'PlaZma',
  // Pas de slogan pour le moment (choix volontaire).
  tagline: '',
  intro:
    'Club esport compétitif sur League of Legends. Une structure, un roster, une ambition : performer au plus haut niveau.',
  game: 'League of Legends',
  // Logo violet officiel du club.
  logo: 'logo-plazma.png',
  // Pas de contact public pour le moment.
  email: '',
} as const;

/* Réseaux — ajoute une URL pour afficher le réseau. Vides = masqués. */
export const socials = [
  { name: 'Discord', url: '', icon: 'discord' },
  { name: 'X / Twitter', url: '', icon: 'x' },
  { name: 'Instagram', url: '', icon: 'instagram' },
  { name: 'Twitch', url: '', icon: 'twitch' },
  { name: 'YouTube', url: '', icon: 'youtube' },
  { name: 'TikTok', url: '', icon: 'tiktok' },
].filter((s) => s.url);

/* Recrutement */
export const recruitment = {
  open: false, // recrutement fermé pour le moment
  // Message affiché quand c'est ouvert.
  intro:
    'PlaZma cherche à renforcer son effectif. Tu penses avoir le niveau et l’état d’esprit ? Rejoins-nous.',
  // Message affiché quand c'est fermé.
  closedIntro:
    'Le recrutement est fermé pour le moment. Le roster est complet — reste connecté, les prochaines ouvertures seront annoncées ici.',
  roles: [] as string[],
  how: 'Rejoins le Discord et ouvre un ticket #recrutement.',
  ctaLabel: 'Postuler sur Discord',
  ctaUrl: '',
};
