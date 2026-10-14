/* =========================================================================
   Infos générales du club + réseaux + recrutement.
   ========================================================================= */

export const site = {
  name: 'PlaZma',
  tagline: 'Partis de zéro. Construits pour durer.',
  intro:
    'PlaZma est un club esport League of Legends né de rien, avec un projet pensé sur le long terme : progresser saison après saison pour atteindre, un jour, la Division 2 de la LFL.',
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
