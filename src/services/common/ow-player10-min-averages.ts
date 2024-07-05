import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owPlayer10MinAverages = z.object({
  damageDone: z.number().gte(0),
  deaths: z.number().gte(0),
  destructions: z.number().gte(0),
  eliminations: z.number().gte(0),
  healingDone: z.number().gte(0),
  kills: z.number().gte(0),
  resurrections: z.number().gte(0),
  ultimates: z.number().gte(0),
});

/**
 *
 * @typedef  {OwPlayer10MinAverages} owPlayer10MinAverages
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type OwPlayer10MinAverages = z.infer<typeof owPlayer10MinAverages>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayer10MinAveragesResponse = z
  .object({
    damage_done: z.number().gte(0),
    deaths: z.number().gte(0),
    destructions: z.number().gte(0),
    eliminations: z.number().gte(0),
    healing_done: z.number().gte(0),
    kills: z.number().gte(0),
    resurrections: z.number().gte(0),
    ultimates: z.number().gte(0),
  })
  .transform((data) => ({
    damageDone: data['damage_done'],
    deaths: data['deaths'],
    destructions: data['destructions'],
    eliminations: data['eliminations'],
    healingDone: data['healing_done'],
    kills: data['kills'],
    resurrections: data['resurrections'],
    ultimates: data['ultimates'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayer10MinAveragesRequest = z
  .object({
    damageDone: z.number().nullish(),
    deaths: z.number().nullish(),
    destructions: z.number().nullish(),
    eliminations: z.number().nullish(),
    healingDone: z.number().nullish(),
    kills: z.number().nullish(),
    resurrections: z.number().nullish(),
    ultimates: z.number().nullish(),
  })
  .transform((data) => ({
    damage_done: data['damageDone'],
    deaths: data['deaths'],
    destructions: data['destructions'],
    eliminations: data['eliminations'],
    healing_done: data['healingDone'],
    kills: data['kills'],
    resurrections: data['resurrections'],
    ultimates: data['ultimates'],
  }));
