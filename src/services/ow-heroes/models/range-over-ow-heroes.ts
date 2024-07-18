import { z } from 'zod';
import { owHeroRole } from '../../common/ow-hero-role';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rangeOverOwHeroes: any = z.lazy(() => {
  return z.object({
    difficulty: z.array(z.number()).min(2).max(2).optional(),
    id: z.array(z.number()).min(2).max(2).optional(),
    name: z.array(z.string()).min(2).max(2).optional(),
    realName: z.array(z.string()).min(2).max(2).optional(),
    role: z.array(owHeroRole).min(2).max(2).optional(),
    slug: z.array(z.string()).min(2).max(2).optional(),
  });
});

/**
 *
 * @typedef  {RangeOverOwHeroes} rangeOverOwHeroes
 * @property {number[]}
 * @property {number[]}
 * @property {string[]}
 * @property {string[]}
 * @property {OwHeroRole[]}
 * @property {string[]}
 */
export type RangeOverOwHeroes = z.infer<typeof rangeOverOwHeroes>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverOwHeroesResponse: any = z.lazy(() => {
  return z
    .object({
      difficulty: z.array(z.number()).min(2).max(2).optional(),
      id: z.array(z.number()).min(2).max(2).optional(),
      name: z.array(z.string()).min(2).max(2).optional(),
      real_name: z.array(z.string()).min(2).max(2).optional(),
      role: z.array(owHeroRole).min(2).max(2).optional(),
      slug: z.array(z.string()).min(2).max(2).optional(),
    })
    .transform((data) => ({
      difficulty: data['difficulty'],
      id: data['id'],
      name: data['name'],
      realName: data['real_name'],
      role: data['role'],
      slug: data['slug'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverOwHeroesRequest: any = z.lazy(() => {
  return z
    .object({
      difficulty: z.array(z.number()).nullish(),
      id: z.array(z.number()).nullish(),
      name: z.array(z.string()).nullish(),
      realName: z.array(z.string()).nullish(),
      role: z.array(owHeroRole).nullish(),
      slug: z.array(z.string()).nullish(),
    })
    .transform((data) => ({
      difficulty: data['difficulty'],
      id: data['id'],
      name: data['name'],
      real_name: data['realName'],
      role: data['role'],
      slug: data['slug'],
    }));
});
