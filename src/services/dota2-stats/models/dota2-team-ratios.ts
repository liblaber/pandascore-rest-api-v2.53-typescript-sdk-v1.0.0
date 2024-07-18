import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2TeamRatios: any = z.lazy(() => {
  return z.object({
    firstBlood: z.number().gte(0).lte(1).nullable(),
    win: z.number().gte(0).lte(1).nullable(),
  });
});

/**
 *
 * @typedef  {Dota2TeamRatios} dota2TeamRatios
 * @property {number}
 * @property {number}
 */
export type Dota2TeamRatios = z.infer<typeof dota2TeamRatios>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2TeamRatiosResponse: any = z.lazy(() => {
  return z
    .object({
      first_blood: z.number().gte(0).lte(1).nullable(),
      win: z.number().gte(0).lte(1).nullable(),
    })
    .transform((data) => ({
      firstBlood: data['first_blood'],
      win: data['win'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2TeamRatiosRequest: any = z.lazy(() => {
  return z.object({ firstBlood: z.number().nullish(), win: z.number().nullish() }).transform((data) => ({
    first_blood: data['firstBlood'],
    win: data['win'],
  }));
});
