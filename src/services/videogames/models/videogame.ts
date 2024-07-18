import { z } from 'zod';
import { videogameLoL, videogameLoLRequest, videogameLoLResponse } from './videogame-lo-l';
import { videogameCsgo, videogameCsgoRequest, videogameCsgoResponse } from './videogame-csgo';
import { videogameDota2, videogameDota2Request, videogameDota2Response } from './videogame-dota2';
import { videogameOverwatch, videogameOverwatchRequest, videogameOverwatchResponse } from './videogame-overwatch';
import { videogamePubg, videogamePubgRequest, videogamePubgResponse } from './videogame-pubg';
import {
  videogameRocketLeague,
  videogameRocketLeagueRequest,
  videogameRocketLeagueResponse,
} from './videogame-rocket-league';
import { videogameCodmw, videogameCodmwRequest, videogameCodmwResponse } from './videogame-codmw';
import { videogameR6siege, videogameR6siegeRequest, videogameR6siegeResponse } from './videogame-r6siege';
import { videogameFifa, videogameFifaRequest, videogameFifaResponse } from './videogame-fifa';
import { videogameValorant, videogameValorantRequest, videogameValorantResponse } from './videogame-valorant';
import { videogameKog, videogameKogRequest, videogameKogResponse } from './videogame-kog';
import {
  videogameLolWildRift,
  videogameLolWildRiftRequest,
  videogameLolWildRiftResponse,
} from './videogame-lol-wild-rift';
import { videogameStarcraft2, videogameStarcraft2Request, videogameStarcraft2Response } from './videogame-starcraft2';
import {
  videogameStarcraftBroodWar,
  videogameStarcraftBroodWarRequest,
  videogameStarcraftBroodWarResponse,
} from './videogame-starcraft-brood-war';
import { videogameESoccer, videogameESoccerRequest, videogameESoccerResponse } from './videogame-e-soccer';
import {
  videogameEBasketball,
  videogameEBasketballRequest,
  videogameEBasketballResponse,
} from './videogame-e-basketball';
import { videogameECricket, videogameECricketRequest, videogameECricketResponse } from './videogame-e-cricket';

/**
 * The shape of the model inside the application code - what the users use
 */
export const videogame: any = z.lazy(() => {
  return z.union([
    videogameLoL,
    videogameCsgo,
    videogameDota2,
    videogameOverwatch,
    videogamePubg,
    videogameRocketLeague,
    videogameCodmw,
    videogameR6siege,
    videogameFifa,
    videogameValorant,
    videogameKog,
    videogameLolWildRift,
    videogameStarcraft2,
    videogameStarcraftBroodWar,
    videogameESoccer,
    videogameEBasketball,
    videogameECricket,
  ]);
});

/**
 *
 * @typedef  {Videogame} videogame
 * @property {VideogameLoL}
 * @property {VideogameCsgo}
 * @property {VideogameDota2}
 * @property {VideogameOverwatch}
 * @property {VideogamePubg}
 * @property {VideogameRocketLeague}
 * @property {VideogameCodmw}
 * @property {VideogameR6siege}
 * @property {VideogameFifa}
 * @property {VideogameValorant}
 * @property {VideogameKog}
 * @property {VideogameLolWildRift}
 * @property {VideogameStarcraft2}
 * @property {VideogameStarcraftBroodWar}
 * @property {VideogameESoccer}
 * @property {VideogameEBasketball}
 * @property {VideogameECricket}
 */
export type Videogame = z.infer<typeof videogame>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const videogameResponse: any = z.lazy(() => {
  return z.union([
    videogameLoLResponse,
    videogameCsgoResponse,
    videogameDota2Response,
    videogameOverwatchResponse,
    videogamePubgResponse,
    videogameRocketLeagueResponse,
    videogameCodmwResponse,
    videogameR6siegeResponse,
    videogameFifaResponse,
    videogameValorantResponse,
    videogameKogResponse,
    videogameLolWildRiftResponse,
    videogameStarcraft2Response,
    videogameStarcraftBroodWarResponse,
    videogameESoccerResponse,
    videogameEBasketballResponse,
    videogameECricketResponse,
  ]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const videogameRequest: any = z.lazy(() => {
  return z.union([
    videogameLoLRequest,
    videogameCsgoRequest,
    videogameDota2Request,
    videogameOverwatchRequest,
    videogamePubgRequest,
    videogameRocketLeagueRequest,
    videogameCodmwRequest,
    videogameR6siegeRequest,
    videogameFifaRequest,
    videogameValorantRequest,
    videogameKogRequest,
    videogameLolWildRiftRequest,
    videogameStarcraft2Request,
    videogameStarcraftBroodWarRequest,
    videogameESoccerRequest,
    videogameEBasketballRequest,
    videogameECricketRequest,
  ]);
});