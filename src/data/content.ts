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
  { season: 'Mars 2026', competition: 'Momen’cup', placement: 'Vainqueur', title: true },
  { season: 'Saison 22 · Juillet 2026', competition: 'OUAT', division: 'Division 5', placement: 'Top 16' },
  { season: 'Saison 21 · Avril 2026', competition: 'OUAT', division: 'Division 7', placement: 'Top 8' },
];

/* Les actus sont dans src/content/actus/ (un fichier .md par article). */

/* ---- HISTOIRE (timeline « Le projet ») ----
   type : club · roster · tournoi · titre. Triée automatiquement par date. */
export type StoryType = 'club' | 'roster' | 'tournoi' | 'titre';
export interface StoryEvent { date: string; when: string; type: StoryType; title: string; text: string; }

export const story: StoryEvent[] = [
  { date: '2018-01-01', when: '2018', type: 'club', title: 'Une équipe d’amis',
    text: 'Tout commence entre amis, autour d’une même passion. Pas de structure, pas de moyens : juste l’envie de jouer ensemble.' },
  { date: '2022-11-16', when: '16 novembre 2022', type: 'club', title: 'PlaZma devient une association',
    text: 'Création officielle de l’association loi 1901. Le projet change de dimension et se structure.' },
  { date: '2025-08-01', when: 'Août 2025', type: 'roster', title: 'Ke1d0, Lakraël et Boulou rejoignent l’aventure',
    text: 'Les premières recrues du projet compétitif, socle du roster actuel.' },
  { date: '2026-03-29', when: '29 mars 2026', type: 'titre', title: 'Victoire à la Momen’cup',
    text: 'Premier trophée de l’histoire du club.' },
  { date: '2026-04-01', when: 'Avril 2026', type: 'roster', title: 'Joordy arrive au support',
    text: 'Le roster se renforce sur la botlane.' },
  { date: '2026-04-02', when: 'Avril 2026', type: 'tournoi', title: 'OUAT — Saison 21',
    text: 'Première saison en OUAT : Top 8 en Division 7.' },
  { date: '2026-06-01', when: 'Juin 2026', type: 'roster', title: 'Nico rejoint l’équipe',
    text: 'Le cinq de départ est au complet.' },
  { date: '2026-07-01', when: 'Juillet 2026', type: 'tournoi', title: 'OUAT — Saison 22',
    text: 'Montée en Division 5, Top 16.' },
  { date: '2026-10-14', when: 'Octobre 2026', type: 'tournoi', title: 'OUAT — Saison 23',
    text: 'La saison en cours. Un pas de plus.' },
];

export const storyGoal = {
  title: 'LFL — Division 2',
  text: 'L’horizon du projet. Étape par étape, sans brûler les étapes.',
};
