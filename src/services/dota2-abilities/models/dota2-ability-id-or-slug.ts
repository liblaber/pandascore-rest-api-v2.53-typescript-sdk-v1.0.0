import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2AbilityIdOrSlug = z.union([z.number(), z.string()]);

/**
 * An ability ID or slug
 * @typedef  {Dota2AbilityIdOrSlug} dota2AbilityIdOrSlug - An ability ID or slug - An ability ID or slug
 * @property {number}
 * @property {string}
 */
export type Dota2AbilityIdOrSlug = z.infer<typeof dota2AbilityIdOrSlug>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2AbilityIdOrSlugResponse = z.union([z.number(), z.string()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2AbilityIdOrSlugRequest = z.union([z.number(), z.string()]);
