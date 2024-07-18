import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const opponentId: any = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});

/**
 *
 * @typedef  {OpponentId} opponentId
 * @property {number}
 * @property {number}
 */
export type OpponentId = z.infer<typeof opponentId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const opponentIdResponse: any = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const opponentIdRequest: any = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});
