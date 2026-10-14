/* =========================================================================
   Roster, staff, palmarès, actus.
   ⚠️  PLACEHOLDER : exemples pour visualiser le design.
       Remplace par les vraies infos envoyées par l'équipe.
   ========================================================================= */

export type Role = 'Top' | 'Jungle' | 'Mid' | 'ADC' | 'Support';

export interface Player {
  pseudo: string;
  role: Role;
  name?: string;        // nom réel (optionnel)
  country?: string;     // emoji drapeau ou code (optionnel)
  photo?: string;       // fichier dans /public/roster/ (optionnel)
  twitter?: string;
  stream?: string;
  captain?: boolean;
}

export interface StaffMember {
  pseudo: string;
  role: string;         // Head Coach, Manager, Analyste…
  name?: string;
  photo?: string;
}

export interface Result {
  year: string;
  event: string;
  placement: string;    // ex. « Champions », « 2e », « Demi-finale »
  highlight?: boolean;  // met en avant (couleur or)
}

export interface NewsItem {
  date: string;         // ISO : 'YYYY-MM-DD'
  title: string;
  excerpt: string;
  tag?: string;
}

/* Ordre d'affichage des rôles */
export const ROLE_ORDER: Role[] = ['Top', 'Jungle', 'Mid', 'ADC', 'Support'];

/* ---- ROSTER (placeholder) ---- */
export const roster: Player[] = [
  { pseudo: 'Joueur Top', role: 'Top', country: '🇫🇷' },
  { pseudo: 'Joueur Jungle', role: 'Jungle', country: '🇫🇷', captain: true },
  { pseudo: 'Joueur Mid', role: 'Mid', country: '🇫🇷' },
  { pseudo: 'Joueur ADC', role: 'ADC', country: '🇫🇷' },
  { pseudo: 'Joueur Support', role: 'Support', country: '🇫🇷' },
];

/* ---- STAFF (placeholder) ---- */
export const staff: StaffMember[] = [
  { pseudo: 'Head Coach', role: 'Head Coach' },
  { pseudo: 'Manager', role: 'Manager' },
];

/* ---- PALMARÈS (placeholder) ---- */
export const results: Result[] = [
  { year: '2025', event: 'Compétition à renseigner', placement: 'Champions', highlight: true },
  { year: '2025', event: 'Tournoi à renseigner', placement: 'Finaliste' },
  { year: '2024', event: 'Ligue à renseigner', placement: 'Demi-finale' },
];

/* ---- ACTUS (placeholder) ---- */
export const news: NewsItem[] = [
  {
    date: '2026-10-01',
    title: 'Le site vitrine de PlaZma est en ligne',
    excerpt: 'Découvrez le club, le roster et notre actualité au même endroit.',
    tag: 'Club',
  },
];
