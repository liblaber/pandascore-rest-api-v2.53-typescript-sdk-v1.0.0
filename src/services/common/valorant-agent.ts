import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantAgent = z.object({
  id: z.number().gte(1),
  name: z.string(),
  portraitUrl: z.string(),
  videogameVersions: z.array(z.string()),
});

/**
 *
 * @typedef  {ValorantAgent} valorantAgent
 * @property {number} - ID of the agent
 * @property {string} - Name of the agent
 * @property {string} - URL to a portrait image of the agent
 * @property {string[]} - Array of of video game versions (ie. patches) for this resource
 */
export type ValorantAgent = z.infer<typeof valorantAgent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantAgentResponse = z
  .object({
    id: z.number().gte(1),
    name: z.string(),
    portrait_url: z.string(),
    videogame_versions: z.array(z.string()),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    portraitUrl: data['portrait_url'],
    videogameVersions: data['videogame_versions'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantAgentRequest = z
  .object({
    id: z.number().nullish(),
    name: z.string().nullish(),
    portraitUrl: z.string().nullish(),
    videogameVersions: z.array(z.string()).nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    portrait_url: data['portraitUrl'],
    videogame_versions: data['videogameVersions'],
  }));
