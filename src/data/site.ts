/* =========================================================================
   Infos générales du club + réseaux + recrutement.
   ========================================================================= */

export const site = {
  name: 'PlaZma',
  tagline: 'L’ambition se construit, la place se gagne.',
  intro:
    'La PlaZma est un club né de la passion de ses créateurs pour l’esport, avec un projet avant tout humain et pensé sur le long terme : le but est d’avancer étape par étape pour atteindre, un jour, la Division 2 de la LFL.',
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

/* Prochain match — affiché en haut de l'accueil. Mettre `null` pour masquer.
   Exemple :
   { date: '2026-10-21T20:00', competition: 'OUAT · Division 5', opponent: 'Nom de l’équipe', stream: 'https://twitch.tv/...' } */
export const nextMatch: { date: string; competition: string; opponent: string; stream?: string } | null = null;
