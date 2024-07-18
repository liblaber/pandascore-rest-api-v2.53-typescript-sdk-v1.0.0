import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantShortAgent: any = z.lazy(() => {
  return z.object({
    id: z.number().gte(1),
    name: z.string(),
    portraitUrl: z.string(),
  });
});

/**
 *
 * @typedef  {ValorantShortAgent} valorantShortAgent
 * @property {number} - ID of the agent
 * @property {string} - Name of the agent
 * @property {string} - URL to a portrait image of the agent
 */
export type ValorantShortAgent = z.infer<typeof valorantShortAgent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantShortAgentResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.number().gte(1),
      name: z.string(),
      portrait_url: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      portraitUrl: data['portrait_url'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantShortAgentRequest: any = z.lazy(() => {
  return z
    .object({ id: z.number().nullish(), name: z.string().nullish(), portraitUrl: z.string().nullish() })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      portrait_url: data['portraitUrl'],
    }));
});
