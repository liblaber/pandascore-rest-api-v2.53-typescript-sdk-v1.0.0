import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const page2: any = z.lazy(() => {
  return z.object({
    number: z.number().gte(1).optional(),
    size: z.number().gte(1).lte(100).optional(),
  });
});

/**
 *
 * @typedef  {Page2} page2
 * @property {number}
 * @property {number}
 */
export type Page2 = z.infer<typeof page2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const page2Response: any = z.lazy(() => {
  return z
    .object({
      number: z.number().gte(1).optional(),
      size: z.number().gte(1).lte(100).optional(),
    })
    .transform((data) => ({
      number: data['number'],
      size: data['size'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const page2Request: any = z.lazy(() => {
  return z.object({ number: z.number().nullish(), size: z.number().nullish() }).transform((data) => ({
    number: data['number'],
    size: data['size'],
  }));
});
