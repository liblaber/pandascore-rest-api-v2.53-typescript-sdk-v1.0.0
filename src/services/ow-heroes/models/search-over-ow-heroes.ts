import { z } from 'zod';
import { owHeroRole } from '../../common/ow-hero-role';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverOwHeroes: any = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    realName: z.string().optional(),
    role: owHeroRole.optional(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/)
      .optional(),
  });
});

/**
 *
 * @typedef  {SearchOverOwHeroes} searchOverOwHeroes
 * @property {string}
 * @property {string}
 * @property {OwHeroRole}
 * @property {string}
 */
export type SearchOverOwHeroes = z.infer<typeof searchOverOwHeroes>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverOwHeroesResponse: any = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      real_name: z.string().optional(),
      role: owHeroRole.optional(),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/)
        .optional(),
    })
    .transform((data) => ({
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
export const searchOverOwHeroesRequest: any = z.lazy(() => {
  return z
    .object({
      name: z.string().nullish(),
      realName: z.string().nullish(),
      role: owHeroRole.nullish(),
      slug: z.string().nullish(),
    })
    .transform((data) => ({
      name: data['name'],
      real_name: data['realName'],
      role: data['role'],
      slug: data['slug'],
    }));
});
