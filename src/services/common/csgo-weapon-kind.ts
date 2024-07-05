import { z } from 'zod';

export const csgoWeaponKind = z.enum(['grenade', 'knife', 'primary', 'secondary', 'taser']);

export type CsgoWeaponKind = z.infer<typeof csgoWeaponKind>;
