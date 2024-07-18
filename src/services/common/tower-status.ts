import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const towerStatus: any = z.lazy(() => {
  return z.object({
    ancientBottom: z.boolean(),
    ancientTop: z.boolean(),
    bottomTier1: z.boolean(),
    bottomTier2: z.boolean(),
    bottomTier3: z.boolean(),
    middleTier1: z.boolean(),
    middleTier2: z.boolean(),
    middleTier3: z.boolean(),
    topTier1: z.boolean(),
    topTier2: z.boolean(),
    topTier3: z.boolean(),
  });
});

/**
 *
 * @typedef  {TowerStatus} towerStatus
 * @property {boolean} - Whether bottom Ancient is alive
 * @property {boolean} - Whether top Ancient is alive
 * @property {boolean} - Whether bottom tier 1 tower is alive
 * @property {boolean} - Whether bottom tier 2 tower is alive
 * @property {boolean} - Whether bottom tier 3 tower is alive
 * @property {boolean} - Whether middle tier 1 tower is alive
 * @property {boolean} - Whether middle tier 2 tower is alive
 * @property {boolean} - Whether middle tier 3 tower is alive
 * @property {boolean} - Whether top tier 1 tower is alive
 * @property {boolean} - Whether top tier 2 tower is alive
 * @property {boolean} - Whether top tier 3 tower is alive
 */
export type TowerStatus = z.infer<typeof towerStatus>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const towerStatusResponse: any = z.lazy(() => {
  return z
    .object({
      ancient_bottom: z.boolean(),
      ancient_top: z.boolean(),
      bottom_tier_1: z.boolean(),
      bottom_tier_2: z.boolean(),
      bottom_tier_3: z.boolean(),
      middle_tier_1: z.boolean(),
      middle_tier_2: z.boolean(),
      middle_tier_3: z.boolean(),
      top_tier_1: z.boolean(),
      top_tier_2: z.boolean(),
      top_tier_3: z.boolean(),
    })
    .transform((data) => ({
      ancientBottom: data['ancient_bottom'],
      ancientTop: data['ancient_top'],
      bottomTier1: data['bottom_tier_1'],
      bottomTier2: data['bottom_tier_2'],
      bottomTier3: data['bottom_tier_3'],
      middleTier1: data['middle_tier_1'],
      middleTier2: data['middle_tier_2'],
      middleTier3: data['middle_tier_3'],
      topTier1: data['top_tier_1'],
      topTier2: data['top_tier_2'],
      topTier3: data['top_tier_3'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const towerStatusRequest: any = z.lazy(() => {
  return z
    .object({
      ancientBottom: z.boolean().nullish(),
      ancientTop: z.boolean().nullish(),
      bottomTier1: z.boolean().nullish(),
      bottomTier2: z.boolean().nullish(),
      bottomTier3: z.boolean().nullish(),
      middleTier1: z.boolean().nullish(),
      middleTier2: z.boolean().nullish(),
      middleTier3: z.boolean().nullish(),
      topTier1: z.boolean().nullish(),
      topTier2: z.boolean().nullish(),
      topTier3: z.boolean().nullish(),
    })
    .transform((data) => ({
      ancient_bottom: data['ancientBottom'],
      ancient_top: data['ancientTop'],
      bottom_tier_1: data['bottomTier1'],
      bottom_tier_2: data['bottomTier2'],
      bottom_tier_3: data['bottomTier3'],
      middle_tier_1: data['middleTier1'],
      middle_tier_2: data['middleTier2'],
      middle_tier_3: data['middleTier3'],
      top_tier_1: data['topTier1'],
      top_tier_2: data['topTier2'],
      top_tier_3: data['topTier3'],
    }));
});