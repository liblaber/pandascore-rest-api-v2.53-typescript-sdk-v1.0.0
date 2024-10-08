// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const killer = z.lazy(() => {
  return z.object({
    id: z.number().gte(1),
    name: z.string(),
    teamSide: z.string(),
  });
});

/**
 *
 * @typedef  {Killer} killer
 * @property {number} - ID of the player
 * @property {string} - Professional name of the player
 * @property {CsgoRoundSide}
 */
export type Killer = z.infer<typeof killer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const killerResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().gte(1),
      name: z.string(),
      team_side: z.string(),
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
export const killerRequest = z.lazy(() => {
  return z
    .object({ id: z.number().nullish(), name: z.string().nullish(), teamSide: z.string().nullish() })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      team_side: data['teamSide'],
    }));
});
