import { z } from 'zod';
import { page2, page2Request, page2Response } from './page-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const page: any = z.lazy(() => {
  return z.union([z.number(), page2]);
});

/**
 *
 * @typedef  {Page} page
 * @property {number}
 * @property {Page2}
 */
export type Page = z.infer<typeof page>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pageResponse: any = z.lazy(() => {
  return z.union([z.number(), page2Response]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const pageRequest: any = z.lazy(() => {
  return z.union([z.number(), page2Request]);
});
