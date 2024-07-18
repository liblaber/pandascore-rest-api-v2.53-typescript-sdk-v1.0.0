import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rangeOverLoLRunesReforged: any = z.lazy(() => {
  return z.object({
    id: z.array(z.number()).min(2).max(2).optional(),
    name: z.array(z.string()).min(2).max(2).optional(),
  });
});

/**
 *
 * @typedef  {RangeOverLoLRunesReforged} rangeOverLoLRunesReforged
 * @property {number[]}
 * @property {string[]}
 */
export type RangeOverLoLRunesReforged = z.infer<typeof rangeOverLoLRunesReforged>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverLoLRunesReforgedResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.array(z.number()).min(2).max(2).optional(),
      name: z.array(z.string()).min(2).max(2).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverLoLRunesReforgedRequest: any = z.lazy(() => {
  return z.object({ id: z.array(z.number()).nullish(), name: z.array(z.string()).nullish() }).transform((data) => ({
    id: data['id'],
    name: data['name'],
  }));
});