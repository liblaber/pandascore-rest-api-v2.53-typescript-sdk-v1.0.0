import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLFlags: any = z.lazy(() => {
  return z.object({
    firstBloodAssist: z.boolean().nullable(),
    firstBloodKill: z.boolean().nullable(),
    firstInhibitorAssist: z.boolean().nullable(),
    firstInhibitorKill: z.boolean().nullable(),
    firstTowerAssist: z.boolean().nullable(),
    firstTowerKill: z.boolean().nullable(),
  });
});

/**
 *
 * @typedef  {LoLFlags} loLFlags
 * @property {boolean} - Whether player got first blood assist
 * @property {boolean} - Whether player got first blood kill
 * @property {boolean} - Whether player got first inhibitor assist
 * @property {boolean} - Whether player got first inhibitor kill
 * @property {boolean} - Whether player got first tower assist
 * @property {boolean} - Whether player got first tower kill
 */
export type LoLFlags = z.infer<typeof loLFlags>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLFlagsResponse: any = z.lazy(() => {
  return z
    .object({
      first_blood_assist: z.boolean().nullable(),
      first_blood_kill: z.boolean().nullable(),
      first_inhibitor_assist: z.boolean().nullable(),
      first_inhibitor_kill: z.boolean().nullable(),
      first_tower_assist: z.boolean().nullable(),
      first_tower_kill: z.boolean().nullable(),
    })
    .transform((data) => ({
      firstBloodAssist: data['first_blood_assist'],
      firstBloodKill: data['first_blood_kill'],
      firstInhibitorAssist: data['first_inhibitor_assist'],
      firstInhibitorKill: data['first_inhibitor_kill'],
      firstTowerAssist: data['first_tower_assist'],
      firstTowerKill: data['first_tower_kill'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLFlagsRequest: any = z.lazy(() => {
  return z
    .object({
      firstBloodAssist: z.boolean().nullish(),
      firstBloodKill: z.boolean().nullish(),
      firstInhibitorAssist: z.boolean().nullish(),
      firstInhibitorKill: z.boolean().nullish(),
      firstTowerAssist: z.boolean().nullish(),
      firstTowerKill: z.boolean().nullish(),
    })
    .transform((data) => ({
      first_blood_assist: data['firstBloodAssist'],
      first_blood_kill: data['firstBloodKill'],
      first_inhibitor_assist: data['firstInhibitorAssist'],
      first_inhibitor_kill: data['firstInhibitorKill'],
      first_tower_assist: data['firstTowerAssist'],
      first_tower_kill: data['firstTowerKill'],
    }));
});