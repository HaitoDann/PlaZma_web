import type { Role } from './content';

/* Libellés de poste (lisibles). Pas de couleur arbitraire par poste :
   l'identité repose sur l'accent violet unique, pas sur un code couleur
   des lanes. */
export const roleLabel: Record<Role, string> = {
  Top: 'Toplaner',
  Jungle: 'Jungler',
  Mid: 'Midlaner',
  ADC: 'ADC · Botlane',
  Support: 'Support',
};
