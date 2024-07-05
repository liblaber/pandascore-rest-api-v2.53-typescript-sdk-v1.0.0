import { z } from 'zod';
import { abilityType } from './ability-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantAbility = z.object({
  abilityType: abilityType,
  creds: z.number().gte(0),
  id: z.number().gte(1),
  imageUrl: z.string(),
  name: z.string(),
  videogameVersions: z.array(z.string()),
});

/**
 *
 * @typedef  {ValorantAbility} valorantAbility
 * @property {AbilityType} - Ability type
 * @property {number} - Credit cost of the ability
 * @property {number} - ID of the ability
 * @property {string} - URL to an image of the ability
 * @property {string} - Name of the ability
 * @property {string[]} - Array of of video game versions (ie. patches) for this resource
 */
export type ValorantAbility = z.infer<typeof valorantAbility>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantAbilityResponse = z
  .object({
    ability_type: abilityType,
    creds: z.number().gte(0),
    id: z.number().gte(1),
    image_url: z.string(),
    name: z.string(),
    videogame_versions: z.array(z.string()),
  })
  .transform((data) => ({
    abilityType: data['ability_type'],
    creds: data['creds'],
    id: data['id'],
    imageUrl: data['image_url'],
    name: data['name'],
    videogameVersions: data['videogame_versions'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantAbilityRequest = z
  .object({
    abilityType: abilityType.nullish(),
    creds: z.number().nullish(),
    id: z.number().nullish(),
    imageUrl: z.string().nullish(),
    name: z.string().nullish(),
    videogameVersions: z.array(z.string()).nullish(),
  })
  .transform((data) => ({
    ability_type: data['abilityType'],
    creds: data['creds'],
    id: data['id'],
    image_url: data['imageUrl'],
    name: data['name'],
    videogame_versions: data['videogameVersions'],
  }));
