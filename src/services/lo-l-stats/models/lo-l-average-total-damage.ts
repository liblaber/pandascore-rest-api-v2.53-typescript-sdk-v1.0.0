import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLAverageTotalDamage: any = z.lazy(() => {
  return z.object({
    dealt: z.number().gte(0).nullable(),
    dealtPercentage: z.number().gte(0).lte(100).nullable(),
    dealtToChampions: z.number().gte(0).nullable(),
    dealtToChampionsPercentage: z.number().gte(0).lte(100).nullable(),
    taken: z.number().gte(0).nullable(),
  });
});

/**
 *
 * @typedef  {LoLAverageTotalDamage} loLAverageTotalDamage
 * @property {number}
 * @property {number} - Percentage of damage dealt the player had compared to the total damage of the team
 * @property {number}
 * @property {number} - Percentage of damage dealt to champions the player had compared to the total damage of the team
 * @property {number}
 */
export type LoLAverageTotalDamage = z.infer<typeof loLAverageTotalDamage>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLAverageTotalDamageResponse: any = z.lazy(() => {
  return z
    .object({
      dealt: z.number().gte(0).nullable(),
      dealt_percentage: z.number().gte(0).lte(100).nullable(),
      dealt_to_champions: z.number().gte(0).nullable(),
      dealt_to_champions_percentage: z.number().gte(0).lte(100).nullable(),
      taken: z.number().gte(0).nullable(),
    })
    .transform((data) => ({
      dealt: data['dealt'],
      dealtPercentage: data['dealt_percentage'],
      dealtToChampions: data['dealt_to_champions'],
      dealtToChampionsPercentage: data['dealt_to_champions_percentage'],
      taken: data['taken'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLAverageTotalDamageRequest: any = z.lazy(() => {
  return z
    .object({
      dealt: z.number().nullish(),
      dealtPercentage: z.number().nullish(),
      dealtToChampions: z.number().nullish(),
      dealtToChampionsPercentage: z.number().nullish(),
      taken: z.number().nullish(),
    })
    .transform((data) => ({
      dealt: data['dealt'],
      dealt_percentage: data['dealtPercentage'],
      dealt_to_champions: data['dealtToChampions'],
      dealt_to_champions_percentage: data['dealtToChampionsPercentage'],
      taken: data['taken'],
    }));
});
