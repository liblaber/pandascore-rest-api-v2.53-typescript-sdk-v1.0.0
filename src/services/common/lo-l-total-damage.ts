import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLTotalDamage = z.object({
  dealt: z.number().gte(0),
  dealtPercentage: z.number().gte(0).lte(100),
  dealtToChampions: z.number().gte(0),
  dealtToChampionsPercentage: z.number().gte(0).lte(100),
  taken: z.number().gte(0),
});

/**
 *
 * @typedef  {LoLTotalDamage} loLTotalDamage
 * @property {number}
 * @property {number} - Percentage of damage dealt the player had compared to the total damage of the team
 * @property {number}
 * @property {number} - Percentage of damage dealt to champions the player had compared to the total damage of the team
 * @property {number}
 */
export type LoLTotalDamage = z.infer<typeof loLTotalDamage>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLTotalDamageResponse = z
  .object({
    dealt: z.number().gte(0),
    dealt_percentage: z.number().gte(0).lte(100),
    dealt_to_champions: z.number().gte(0),
    dealt_to_champions_percentage: z.number().gte(0).lte(100),
    taken: z.number().gte(0),
  })
  .transform((data) => ({
    dealt: data['dealt'],
    dealtPercentage: data['dealt_percentage'],
    dealtToChampions: data['dealt_to_champions'],
    dealtToChampionsPercentage: data['dealt_to_champions_percentage'],
    taken: data['taken'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLTotalDamageRequest = z
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
