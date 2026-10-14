/* =========================================================================
   Roster, staff, palmarès — données PlaZma.
   Les pages joueur se génèrent automatiquement à partir du roster (slug).
   Champs optionnels (bio, setup, réseaux, photo) = à compléter plus tard ;
   le site gère proprement leur absence.
   ========================================================================= */

export type Role = 'Top' | 'Jungle' | 'Mid' | 'ADC' | 'Support';

export interface SocialLinks {
  twitch?: string;
  x?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
}

export interface Player {
  pseudo: string;
  role: Role;
  slug: string;            // identifiant URL (auto si absent via slugify)
  realName?: string;
  country?: string;        // emoji drapeau
  nationality?: string;    // ex. 'France'
  photo?: string;          // fichier dans /public/roster/ (portrait ~3:4)
  bio?: string;
  setup?: { label: string; value: string }[];
  socials?: SocialLinks;
  captain?: boolean;
}

export interface StaffMember {
  pseudo: string;
  role: string;
  realName?: string;
  country?: string;
  photo?: string;
}

export interface Result {
  season: string;          // ex. '2025', 'Saison 22'
  competition: string;     // ex. 'OUAT', 'Momen’cup'
  division?: string;       // ex. 'Division 5'
  placement: string;       // ex. 'Top 16', 'Top 8'
  title?: boolean;         // true = titre remporté (mis en avant)
}

export const ROLE_ORDER: Role[] = ['Top', 'Jungle', 'Mid', 'ADC', 'Support'];

export const slugify = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/* ---- ROSTER ---- */
export const roster: Player[] = [
  {
    pseudo: 'Boulou', role: 'Top', slug: 'boulou',
    country: '🇫🇷', nationality: 'France',
  },
  {
    pseudo: 'naiko', role: 'Jungle', slug: 'naiko',
    country: '🇫🇷', nationality: 'France',
  },
  {
    pseudo: 'Lakraël', role: 'Mid', slug: 'lakrael',
    country: '🇫🇷', nationality: 'France',
  },
  {
    pseudo: 'Ke1d0', role: 'ADC', slug: 'ke1d0',
    country: '🇫🇷', nationality: 'France',
  },
  {
    pseudo: 'Joordy', role: 'Support', slug: 'joordy',
    country: '🇫🇷', nationality: 'France',
  },
];

/* ---- STAFF ---- */
export const staff: StaffMember[] = [
  { pseudo: 'Haito', role: 'CEO · General Manager', country: '🇫🇷' },
  { pseudo: 'Kledou', role: 'Head Coach', country: '🇫🇷' },
];

/* ---- PALMARÈS (historique sportif, du plus marquant au plus ancien) ---- */
export const results: Result[] = [
  { season: '2025', competition: 'Momen’cup', placement: 'Vainqueur', title: true },
  { season: 'Saison 22', competition: 'OUAT', division: 'Division 5', placement: 'Top 16' },
  { season: 'Saison 21', competition: 'OUAT', division: 'Division 7', placement: 'Top 8' },
];

/* Les actus sont dans src/content/actus/ (un fichier .md par article). */
