/* =========================================================================
   Roster, staff, palmarès, actus — données réelles PlaZma.
   Pour modifier : édite simplement les tableaux ci-dessous.
   ========================================================================= */

export type Role = 'Top' | 'Jungle' | 'Mid' | 'ADC' | 'Support';

export interface Player {
  pseudo: string;
  role: Role;
  name?: string;        // nom réel (optionnel)
  country?: string;     // emoji drapeau (optionnel)
  photo?: string;       // fichier dans /public/roster/ (optionnel)
  twitter?: string;
  stream?: string;
  captain?: boolean;
}

export interface StaffMember {
  pseudo: string;
  role: string;         // Head Coach, Manager, Analyste…
  name?: string;
  country?: string;
  photo?: string;
}

export interface Result {
  year: string;         // année ou saison (ex. '2025', 'S21')
  event: string;
  placement: string;    // ex. « Vainqueur », « Top 8 »
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

/* ---- ROSTER ---- */
export const roster: Player[] = [
  { pseudo: 'Boulou', role: 'Top', country: '🇫🇷' },
  { pseudo: 'naiko', role: 'Jungle', country: '🇫🇷' },
  { pseudo: 'Lakraël', role: 'Mid', country: '🇫🇷' },
  { pseudo: 'Ke1d0', role: 'ADC', country: '🇫🇷' },
  { pseudo: 'Joordy', role: 'Support', country: '🇫🇷' },
];

/* ---- STAFF ---- */
export const staff: StaffMember[] = [
  { pseudo: 'Haito', role: 'CEO · General Manager', country: '🇫🇷' },
  { pseudo: 'Kledou', role: 'Head Coach', country: '🇫🇷' },
];

/* ---- PALMARÈS ---- */
export const results: Result[] = [
  { year: '2025', event: 'Momen’cup', placement: 'Vainqueur', highlight: true },
  { year: 'S22', event: 'OUAT · Division 5', placement: 'Top 16' },
  { year: 'S21', event: 'OUAT · Division 7', placement: 'Top 8' },
];

/* ---- ACTUS ---- */
export const news: NewsItem[] = [
  {
    date: '2026-10-14',
    title: 'Coup d’envoi de la saison 23 de la OUAT',
    excerpt:
      'PlaZma lance sa campagne : premier jour de compétition pour la saison 23 de la OUAT.',
    tag: 'Compétition',
  },
];
