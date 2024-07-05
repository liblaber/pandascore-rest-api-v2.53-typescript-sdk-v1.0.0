import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLTeamRatios = z.object({
  firstBaron: z.number().gte(0).lte(1),
  firstBlood: z.number().gte(0).lte(1),
  firstDragon: z.number().gte(0).lte(1),
  firstHerald: z.number().gte(0).lte(1),
  firstInhibitor: z.number().gte(0).lte(1),
  firstTower: z.number().gte(0).lte(1),
  firstVoidgrub: z.number().gte(0),
  win: z.number().gte(0).lte(1),
});

/**
 *
 * @typedef  {LoLTeamRatios} loLTeamRatios
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number} - Whether the team killed the first voidgrub.
 * @property {number}
 */
export type LoLTeamRatios = z.infer<typeof loLTeamRatios>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLTeamRatiosResponse = z
  .object({
    first_baron: z.number().gte(0).lte(1),
    first_blood: z.number().gte(0).lte(1),
    first_dragon: z.number().gte(0).lte(1),
    first_herald: z.number().gte(0).lte(1),
    first_inhibitor: z.number().gte(0).lte(1),
    first_tower: z.number().gte(0).lte(1),
    first_voidgrub: z.number().gte(0),
    win: z.number().gte(0).lte(1),
  })
  .transform((data) => ({
    firstBaron: data['first_baron'],
    firstBlood: data['first_blood'],
    firstDragon: data['first_dragon'],
    firstHerald: data['first_herald'],
    firstInhibitor: data['first_inhibitor'],
    firstTower: data['first_tower'],
    firstVoidgrub: data['first_voidgrub'],
    win: data['win'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLTeamRatiosRequest = z
  .object({
    firstBaron: z.number().nullish(),
    firstBlood: z.number().nullish(),
    firstDragon: z.number().nullish(),
    firstHerald: z.number().nullish(),
    firstInhibitor: z.number().nullish(),
    firstTower: z.number().nullish(),
    firstVoidgrub: z.number().nullish(),
    win: z.number().nullish(),
  })
  .transform((data) => ({
    first_baron: data['firstBaron'],
    first_blood: data['firstBlood'],
    first_dragon: data['firstDragon'],
    first_herald: data['firstHerald'],
    first_inhibitor: data['firstInhibitor'],
    first_tower: data['firstTower'],
    first_voidgrub: data['firstVoidgrub'],
    win: data['win'],
  }));
