import { z } from 'zod';
import { leagueVideogameLoL, leagueVideogameLoLRequest, leagueVideogameLoLResponse } from './league-videogame-lo-l';
import { leagueVideogameCsgo, leagueVideogameCsgoRequest, leagueVideogameCsgoResponse } from './league-videogame-csgo';
import {
  leagueVideogameDota2,
  leagueVideogameDota2Request,
  leagueVideogameDota2Response,
} from './league-videogame-dota2';
import {
  leagueVideogameOverwatch,
  leagueVideogameOverwatchRequest,
  leagueVideogameOverwatchResponse,
} from './league-videogame-overwatch';
import { leagueVideogamePubg, leagueVideogamePubgRequest, leagueVideogamePubgResponse } from './league-videogame-pubg';
import {
  leagueVideogameRocketLeague,
  leagueVideogameRocketLeagueRequest,
  leagueVideogameRocketLeagueResponse,
} from './league-videogame-rocket-league';
import {
  leagueVideogameCodmw,
  leagueVideogameCodmwRequest,
  leagueVideogameCodmwResponse,
} from './league-videogame-codmw';
import {
  leagueVideogameR6siege,
  leagueVideogameR6siegeRequest,
  leagueVideogameR6siegeResponse,
} from './league-videogame-r6siege';
import { leagueVideogameFifa, leagueVideogameFifaRequest, leagueVideogameFifaResponse } from './league-videogame-fifa';
import {
  leagueVideogameValorant,
  leagueVideogameValorantRequest,
  leagueVideogameValorantResponse,
} from './league-videogame-valorant';
import { leagueVideogameKog, leagueVideogameKogRequest, leagueVideogameKogResponse } from './league-videogame-kog';
import {
  leagueVideogameLolWildRift,
  leagueVideogameLolWildRiftRequest,
  leagueVideogameLolWildRiftResponse,
} from './league-videogame-lol-wild-rift';
import {
  leagueVideogameStarcraft2,
  leagueVideogameStarcraft2Request,
  leagueVideogameStarcraft2Response,
} from './league-videogame-starcraft2';
import {
  leagueVideogameStarcraftBroodWar,
  leagueVideogameStarcraftBroodWarRequest,
  leagueVideogameStarcraftBroodWarResponse,
} from './league-videogame-starcraft-brood-war';
import {
  leagueVideogameEBasketball,
  leagueVideogameEBasketballRequest,
  leagueVideogameEBasketballResponse,
} from './league-videogame-e-basketball';
import {
  leagueVideogameECricket,
  leagueVideogameECricketRequest,
  leagueVideogameECricketResponse,
} from './league-videogame-e-cricket';
import {
  leagueVideogameESoccer,
  leagueVideogameESoccerRequest,
  leagueVideogameESoccerResponse,
} from './league-videogame-e-soccer';

/**
 * The shape of the model inside the application code - what the users use
 */
export const leagueVideogame: any = z.lazy(() => {
  return z.union([
    leagueVideogameLoL,
    leagueVideogameCsgo,
    leagueVideogameDota2,
    leagueVideogameOverwatch,
    leagueVideogamePubg,
    leagueVideogameRocketLeague,
    leagueVideogameCodmw,
    leagueVideogameR6siege,
    leagueVideogameFifa,
    leagueVideogameValorant,
    leagueVideogameKog,
    leagueVideogameLolWildRift,
    leagueVideogameStarcraft2,
    leagueVideogameStarcraftBroodWar,
    leagueVideogameEBasketball,
    leagueVideogameECricket,
    leagueVideogameESoccer,
  ]);
});

/**
 *
 * @typedef  {LeagueVideogame} leagueVideogame
 * @property {LeagueVideogameLoL}
 * @property {LeagueVideogameCsgo}
 * @property {LeagueVideogameDota2}
 * @property {LeagueVideogameOverwatch}
 * @property {LeagueVideogamePubg}
 * @property {LeagueVideogameRocketLeague}
 * @property {LeagueVideogameCodmw}
 * @property {LeagueVideogameR6siege}
 * @property {LeagueVideogameFifa}
 * @property {LeagueVideogameValorant}
 * @property {LeagueVideogameKog}
 * @property {LeagueVideogameLolWildRift}
 * @property {LeagueVideogameStarcraft2}
 * @property {LeagueVideogameStarcraftBroodWar}
 * @property {LeagueVideogameEBasketball}
 * @property {LeagueVideogameECricket}
 * @property {LeagueVideogameESoccer}
 */
export type LeagueVideogame = z.infer<typeof leagueVideogame>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const leagueVideogameResponse: any = z.lazy(() => {
  return z.union([
    leagueVideogameLoLResponse,
    leagueVideogameCsgoResponse,
    leagueVideogameDota2Response,
    leagueVideogameOverwatchResponse,
    leagueVideogamePubgResponse,
    leagueVideogameRocketLeagueResponse,
    leagueVideogameCodmwResponse,
    leagueVideogameR6siegeResponse,
    leagueVideogameFifaResponse,
    leagueVideogameValorantResponse,
    leagueVideogameKogResponse,
    leagueVideogameLolWildRiftResponse,
    leagueVideogameStarcraft2Response,
    leagueVideogameStarcraftBroodWarResponse,
    leagueVideogameEBasketballResponse,
    leagueVideogameECricketResponse,
    leagueVideogameESoccerResponse,
  ]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const leagueVideogameRequest: any = z.lazy(() => {
  return z.union([
    leagueVideogameLoLRequest,
    leagueVideogameCsgoRequest,
    leagueVideogameDota2Request,
    leagueVideogameOverwatchRequest,
    leagueVideogamePubgRequest,
    leagueVideogameRocketLeagueRequest,
    leagueVideogameCodmwRequest,
    leagueVideogameR6siegeRequest,
    leagueVideogameFifaRequest,
    leagueVideogameValorantRequest,
    leagueVideogameKogRequest,
    leagueVideogameLolWildRiftRequest,
    leagueVideogameStarcraft2Request,
    leagueVideogameStarcraftBroodWarRequest,
    leagueVideogameEBasketballRequest,
    leagueVideogameECricketRequest,
    leagueVideogameESoccerRequest,
  ]);
});
