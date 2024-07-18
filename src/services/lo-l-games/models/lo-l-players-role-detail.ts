import { z } from 'zod';
import { baseLoLChampion, baseLoLChampionRequest, baseLoLChampionResponse } from './base-lo-l-champion';
import { baseLoLSpell, baseLoLSpellRequest, baseLoLSpellResponse } from './base-lo-l-spell';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLPlayersRoleDetail: any = z.lazy(() => {
  return z.object({
    assists: z.number().gte(0),
    champion: baseLoLChampion,
    cs: z.number().gte(0),
    deaths: z.number().gte(0),
    id: z.number().gte(1),
    kills: z.number().gte(0),
    level: z.number().gte(1),
    name: z.string(),
    summonerSpells: z.array(baseLoLSpell),
  });
});

/**
 *
 * @typedef  {LoLPlayersRoleDetail} loLPlayersRoleDetail
 * @property {number}
 * @property {BaseLoLChampion}
 * @property {number} - The player's Creep Score (CS.) <br/> <br/>NB: Creep Score can be different that the number of minions killed because neutral monsters can give more score.
 * @property {number}
 * @property {number} - ID of the player
 * @property {number}
 * @property {number}
 * @property {string} - Professional name of the player
 * @property {BaseLoLSpell[]}
 */
export type LoLPlayersRoleDetail = z.infer<typeof loLPlayersRoleDetail>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayersRoleDetailResponse: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().gte(0),
      champion: baseLoLChampionResponse,
      cs: z.number().gte(0),
      deaths: z.number().gte(0),
      id: z.number().gte(1),
      kills: z.number().gte(0),
      level: z.number().gte(1),
      name: z.string(),
      summoner_spells: z.array(baseLoLSpellResponse),
    })
    .transform((data) => ({
      assists: data['assists'],
      champion: data['champion'],
      cs: data['cs'],
      deaths: data['deaths'],
      id: data['id'],
      kills: data['kills'],
      level: data['level'],
      name: data['name'],
      summonerSpells: data['summoner_spells'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayersRoleDetailRequest: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().nullish(),
      champion: baseLoLChampionRequest.nullish(),
      cs: z.number().nullish(),
      deaths: z.number().nullish(),
      id: z.number().nullish(),
      kills: z.number().nullish(),
      level: z.number().nullish(),
      name: z.string().nullish(),
      summonerSpells: z.array(baseLoLSpellRequest).nullish(),
    })
    .transform((data) => ({
      assists: data['assists'],
      champion: data['champion'],
      cs: data['cs'],
      deaths: data['deaths'],
      id: data['id'],
      kills: data['kills'],
      level: data['level'],
      name: data['name'],
      summoner_spells: data['summonerSpells'],
    }));
});
