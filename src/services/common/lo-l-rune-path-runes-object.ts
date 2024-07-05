import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLRunePathRunesObject = z.object({
  keystones: z.array(z.number()),
  slot1: z.array(z.number()).min(3).max(4),
  slot2: z.array(z.number()).min(3).max(5),
  slot3: z.array(z.number()).min(3).max(4),
});

/**
 *
 * @typedef  {LoLRunePathRunesObject} loLRunePathRunesObject
 * @property {number[]} - IDs of the keystone runes available for this path
 * @property {number[]} - IDs of the slot 1 runes available for this path
 * @property {number[]} - IDs of the slot 2 runes available for this path
 * @property {number[]} - IDs of the slot 3 runes available for this path
 */
export type LoLRunePathRunesObject = z.infer<typeof loLRunePathRunesObject>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLRunePathRunesObjectResponse = z
  .object({
    keystones: z.array(z.number()),
    slot1: z.array(z.number()).min(3).max(4),
    slot2: z.array(z.number()).min(3).max(5),
    slot3: z.array(z.number()).min(3).max(4),
  })
  .transform((data) => ({
    keystones: data['keystones'],
    slot1: data['slot1'],
    slot2: data['slot2'],
    slot3: data['slot3'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLRunePathRunesObjectRequest = z
  .object({
    keystones: z.array(z.number()).nullish(),
    slot1: z.array(z.number()).nullish(),
    slot2: z.array(z.number()).nullish(),
    slot3: z.array(z.number()).nullish(),
  })
  .transform((data) => ({
    keystones: data['keystones'],
    slot1: data['slot1'],
    slot2: data['slot2'],
    slot3: data['slot3'],
  }));
