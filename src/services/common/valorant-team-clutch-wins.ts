import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantTeamClutchWins = z.object({
  versus1: z.number().gte(0),
  versus2: z.number().gte(0),
  versus3: z.number().gte(0),
  versus4: z.number().gte(0),
  versus5: z.number().gte(0),
});

/**
 * Rounds wins with a single team member alive
 * @typedef  {ValorantTeamClutchWins} valorantTeamClutchWins - Rounds wins with a single team member alive - Rounds wins with a single team member alive
 * @property {number} - Number of clutch wins versus 1 player
 * @property {number} - Number of clutch wins versus 2 players
 * @property {number} - Number of clutch wins versus 3 players
 * @property {number} - Number of clutch wins versus 4 players
 * @property {number} - Number of clutch wins versus 5 players
 */
export type ValorantTeamClutchWins = z.infer<typeof valorantTeamClutchWins>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantTeamClutchWinsResponse = z
  .object({
    versus_1: z.number().gte(0),
    versus_2: z.number().gte(0),
    versus_3: z.number().gte(0),
    versus_4: z.number().gte(0),
    versus_5: z.number().gte(0),
  })
  .transform((data) => ({
    versus1: data['versus_1'],
    versus2: data['versus_2'],
    versus3: data['versus_3'],
    versus4: data['versus_4'],
    versus5: data['versus_5'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantTeamClutchWinsRequest = z
  .object({
    versus1: z.number().nullish(),
    versus2: z.number().nullish(),
    versus3: z.number().nullish(),
    versus4: z.number().nullish(),
    versus5: z.number().nullish(),
  })
  .transform((data) => ({
    versus_1: data['versus1'],
    versus_2: data['versus2'],
    versus_3: data['versus3'],
    versus_4: data['versus4'],
    versus_5: data['versus5'],
  }));
