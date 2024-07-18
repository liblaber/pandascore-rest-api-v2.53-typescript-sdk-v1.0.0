import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const matchLive: any = z.lazy(() => {
  return z.object({
    opensAt: z.string().min(1).nullable(),
    supported: z.boolean(),
    url: z.string().nullable(),
  });
});

/**
 *
 * @typedef  {MatchLive} matchLive
 * @property {string}
 * @property {boolean} - Whether live is supported
 * @property {string}
 */
export type MatchLive = z.infer<typeof matchLive>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const matchLiveResponse: any = z.lazy(() => {
  return z
    .object({
      opens_at: z.string().min(1).nullable(),
      supported: z.boolean(),
      url: z.string().nullable(),
    })
    .transform((data) => ({
      opensAt: data['opens_at'],
      supported: data['supported'],
      url: data['url'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const matchLiveRequest: any = z.lazy(() => {
  return z
    .object({ opensAt: z.string().nullish(), supported: z.boolean().nullish(), url: z.string().nullish() })
    .transform((data) => ({
      opens_at: data['opensAt'],
      supported: data['supported'],
      url: data['url'],
    }));
});