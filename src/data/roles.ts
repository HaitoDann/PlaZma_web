import type { Role } from './content';

/* Couleurs de rôle — arêtes/accents uniquement (identité des lanes LoL). */
export const roleColor: Record<Role, string> = {
  Top: '#e06c47',
  Jungle: '#3fb950',
  Mid: '#58a6ff',
  ADC: '#f0c04a',
  Support: '#c77dff',
};

export const roleLabel: Record<Role, string> = {
  Top: 'Toplaner',
  Jungle: 'Jungler',
  Mid: 'Midlaner',
  ADC: 'ADC · Botlane',
  Support: 'Support',
};
