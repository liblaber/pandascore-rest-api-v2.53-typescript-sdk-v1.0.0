import { z } from 'zod';
import { csgoRoundSide } from './csgo-round-side';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoRoundPlayer: any = z.lazy(() => {
  return z.object({
    id: z.number().gte(1),
    name: z.string(),
    teamSide: csgoRoundSide,
  });
});

/**
 *
 * @typedef  {CsgoRoundPlayer} csgoRoundPlayer
 * @property {number} - ID of the player
 * @property {string} - Professional name of the player
 * @property {CsgoRoundSide}
 */
export type CsgoRoundPlayer = z.infer<typeof csgoRoundPlayer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoRoundPlayerResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.number().gte(1),
      name: z.string(),
      team_side: csgoRoundSide,
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      teamSide: data['team_side'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoRoundPlayerRequest: any = z.lazy(() => {
  return z
    .object({ id: z.number().nullish(), name: z.string().nullish(), teamSide: csgoRoundSide.nullish() })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      team_side: data['teamSide'],
    }));
});
