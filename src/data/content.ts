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
  age?: number;
  quote?: string;          // « petit mot », affiché en citation
  champions?: string[];    // noms en jeu, ex. ['Kai\'Sa', 'Lee Sin'] → icônes auto
  setup?: { label: string; value: string }[];
  socials?: SocialLinks;
  captain?: boolean;
}

export interface StaffMember {
  pseudo: string;
  role: string;
  slug: string;
  bio?: string;
  age?: number;
  quote?: string;
  socials?: SocialLinks;
  realName?: string;
  country?: string;
  nationality?: string;
  photo?: string;
}

export interface Result {
  date: string;            // AAAA-MM-JJ, sert au tri chronologique
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
    pseudo: 'Boulou', role: 'Top', slug: 'boulou', age: 22,
    photo: 'boulou.webp',
    champions: ['Ornn', 'Garen', 'Irelia'],
    bio: 'Boulou a rejoint le club en août 2025. Il se démarque par un style ultra agressif en lane, il est capable du pire comme du meilleur. Force tranquille dans les moments de haute tension, c’est un teammate sur lequel on peut s’appuyer.',
    country: '🇫🇷', nationality: 'France',
  },
  {
    pseudo: 'Naiko', role: 'Jungle', slug: 'naiko', age: 21,
    champions: ['Talon', 'Pantheon', 'Shen'],
    bio: 'Naiko a rejoint le club en juin 2026. C’est un joueur intuitif et explosif, il se démarque par ses mécaniques et ses champions agressifs.',
    country: '🇫🇷', nationality: 'France',
  },
  {
    pseudo: 'Lakraël', role: 'Mid', slug: 'lakrael', captain: true,
    photo: 'lakrael.webp', age: 23,
    champions: ['Neeko', 'Syndra', 'Ahri'],
    bio: 'Lakraël a rejoint le club en août 2025. Il s’est rapidement imposé comme un pilier de stabilité dans les games ; son leadership et son franc-parler l’ont propulsé assez naturellement dans le rôle de capitaine.',
    country: '🇫🇷', nationality: 'France',
  },
  {
    pseudo: 'Ke1d0', role: 'ADC', slug: 'ke1d0', age: 21,
    champions: ['Jinx', 'Ashe', 'Xayah'],
    bio: 'Ke1d0 a rejoint le club en août 2025. Central dans les compositions de l’équipe, il sait monter en puissance et devenir une vraie menace en fin de partie.',
    country: '🇫🇷', nationality: 'France',
  },
  {
    pseudo: 'Joordy', role: 'Support', slug: 'joordy', age: 21,
    photo: 'joordy.webp',
    champions: ['Nami', 'Lulu', 'Milio'],
    bio: 'Joordy a rejoint le club en avril 2026. Gardien et clown de l’équipe, il est capable de dynamiter toute la carte.',
    country: '🇫🇷', nationality: 'France',
  },
];

/* ---- STAFF ---- */
export const staff: StaffMember[] = [
  { pseudo: 'Haito', role: 'CEO · General Manager', slug: 'haito', country: '🇫🇷', nationality: 'France', photo: 'haito.webp', age: 25,
    bio: 'Haito fonde la PlaZma en 2018 avec ses amis, puis crée l’association en 2022. Longtemps toplaner de l’équipe, il passe en 2025 du rôle de joueur à celui de gérant, avec une ambition : bâtir un vrai projet pour aller chercher le haut niveau sur League of Legends. Au quotidien, il gère l’équipe, le recrutement et l’organisation. Son objectif : disputer le Nexus Tour pour le gagner et accéder à la Division 2 de la LFL.' },
  { pseudo: 'Kledou', role: 'Head Coach', slug: 'kledou', country: '🇫🇷', nationality: 'France' },
];

/* ---- PALMARÈS (historique sportif, du plus marquant au plus ancien) ---- */
export const results: Result[] = [
  { date: '2026-03-29', season: 'Mars 2026', competition: 'Momen’cup', placement: 'Vainqueur', title: true },
  { date: '2026-07-01', season: 'Saison 22 · Juillet 2026', competition: 'OUAT', division: 'Division 5', placement: 'Top 16' },
  { date: '2026-04-01', season: 'Saison 21 · Avril 2026', competition: 'OUAT', division: 'Division 7', placement: 'Top 8' },
];

/* ---- CALENDRIER (page /calendrier) ----
   Un match par ligne. Avant la date → onglet « À venir », après → « Terminé ».
   Exemple :
   { date: '2026-11-04T20:00', competition: 'OUAT · Division 5', title: 'Journée 3',
     opponent: 'Nom de l’équipe', stream: 'https://twitch.tv/...', score: '1-0' } */
export interface Match {
  date: string;            // AAAA-MM-JJTHH:MM (heure de Paris)
  competition: string;
  title?: string;          // ex. 'Journée 3', 'Quart de finale'
  opponent?: string;
  stream?: string;
  score?: string;          // une fois joué, ex. '1-0'
}
export const matches: Match[] = [];

/* Les actus sont dans src/content/actus/ (un fichier .md par article). */

/* ---- HISTOIRE (timeline « Le projet ») ----
   type : club · roster · tournoi · titre. Triée automatiquement par date. */
export type StoryType = 'club' | 'roster' | 'tournoi' | 'titre';
export interface StoryEvent { date: string; when: string; type: StoryType; title: string; text: string; upcoming?: boolean; }

export const story: StoryEvent[] = [
  { date: '2018-01-01', when: '2018', type: 'club', title: 'Une équipe d’amis',
    text: 'Tout commence au lycée : cinq amis qui se retrouvent tous les soirs autour d’une même passion, League of Legends.' },
  { date: '2022-11-16', when: '16 novembre 2022', type: 'club', title: 'PlaZma devient une association',
    text: 'Création officielle de l’association loi 1901. Les rosters s’enchaînent, le projet reste fun mais peine à trouver une réelle finalité.' },
  { date: '2025-08-01', when: 'Août 2025', type: 'club', title: 'La refonte',
    text: 'Refonte complète de la PlaZma : l’objectif est désormais de construire un vrai projet sérieux, dans le but de performer. Haito passe du rôle de joueur à celui de gérant et recrute cinq jeunes joueurs de niveau Platine/Émeraude pour bâtir sur le long terme : Boulou, Henri, Lakraël, Ke1d0 et Sayro.' },
  { date: '2026-03-29', when: '29 mars 2026', type: 'titre', title: 'Victoire à la Momen’cup',
    text: 'L’équipe s’est bien entraînée et le roster est solide. La PlaZma s’inscrit à son premier tournoi amateur… et le remporte. C’est le premier trophée de l’histoire du club.' },
  { date: '2026-04-01', when: 'Avril 2026', type: 'roster', title: 'Joordy support et Lakraël capitaine',
    text: 'Sayro, alors capitaine de l’équipe, décide de prendre ses distances avec le jeu. Nous recrutons Joordy au poste de support et le capitanat est transmis à Lakraël.' },
  { date: '2026-04-02', when: 'Avril 2026', type: 'tournoi', title: 'OUAT — Saison 21',
    text: 'Première inscription à la ligue amateur OUAT : l’équipe termine Top 8 de la Division 7.' },
  { date: '2026-06-01', when: 'Juin 2026', type: 'roster', title: 'Naiko prend la jungle',
    text: 'Après la défaite en playoffs de la OUAT, il est temps de se renforcer. Nico « Naiko » est recruté au poste de jungler pour remplacer Zugu, lui-même arrivé en novembre 2025 à la place d’Henri. Peu disponible, Zugu avait dû être remplacé par Haito sur la majorité des matchs.' },
  { date: '2026-06-02', when: 'Juin 2026', type: 'roster', title: 'Kledou devient Head Coach',
    text: 'Le staff commence à se structurer avec l’arrivée de Kledou au poste de Head Coach.' },
  { date: '2026-07-01', when: 'Juillet 2026', type: 'tournoi', title: 'OUAT — Saison 22',
    text: 'Montée en Division 5 de la OUAT. Une baisse de niveau et de motivation se fait ressentir, et l’équipe termine Top 16 de cette édition.' },
  { date: '2026-10-14', when: 'Octobre 2026', type: 'tournoi', title: 'OUAT — Saison 23 : un nouveau souffle',
    text: 'Après avoir mis les choses à plat, un nouveau souffle traverse l’équipe. Joueurs et staff abordent la saison 23, toujours en Division 5, plus motivés que jamais.' },
  { date: '2027-01-01', when: '2027', type: 'tournoi', title: 'Prochaine étape : Nexus Tour', upcoming: true,
    text: 'Monter les divisions de la OUAT une à une, et s’inscrire au Nexus Tour.' },
];

export const storyGoal = {
  title: 'LFL — Division 2',
  text: 'L’horizon du projet. Étape par étape, sans brûler les étapes.',
};
