import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const barracksStatus: any = z.lazy(() => {
  return z.object({
    bottomMelee: z.boolean(),
    bottomRanged: z.boolean(),
    middleMelee: z.boolean(),
    middleRanged: z.boolean(),
    topMelee: z.boolean(),
    topRanged: z.boolean(),
  });
});

/**
 *
 * @typedef  {BarracksStatus} barracksStatus
 * @property {boolean} - Whether bottom melee barracks are alive
 * @property {boolean} - Whether bottom ranged barracks are alive
 * @property {boolean} - Whether middle melee barracks are alive
 * @property {boolean} - Whether middle ranged barracks are alive
 * @property {boolean} - Whether top melee barracks are alive
 * @property {boolean} - Whether top ranged barracks are alive
 */
export type BarracksStatus = z.infer<typeof barracksStatus>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const barracksStatusResponse: any = z.lazy(() => {
  return z
    .object({
      bottom_melee: z.boolean(),
      bottom_ranged: z.boolean(),
      middle_melee: z.boolean(),
      middle_ranged: z.boolean(),
      top_melee: z.boolean(),
      top_ranged: z.boolean(),
    })
    .transform((data) => ({
      bottomMelee: data['bottom_melee'],
      bottomRanged: data['bottom_ranged'],
      middleMelee: data['middle_melee'],
      middleRanged: data['middle_ranged'],
      topMelee: data['top_melee'],
      topRanged: data['top_ranged'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const barracksStatusRequest: any = z.lazy(() => {
  return z
    .object({
      bottomMelee: z.boolean().nullish(),
      bottomRanged: z.boolean().nullish(),
      middleMelee: z.boolean().nullish(),
      middleRanged: z.boolean().nullish(),
      topMelee: z.boolean().nullish(),
      topRanged: z.boolean().nullish(),
    })
    .transform((data) => ({
      bottom_melee: data['bottomMelee'],
      bottom_ranged: data['bottomRanged'],
      middle_melee: data['middleMelee'],
      middle_ranged: data['middleRanged'],
      top_melee: data['topMelee'],
      top_ranged: data['topRanged'],
    }));
});
