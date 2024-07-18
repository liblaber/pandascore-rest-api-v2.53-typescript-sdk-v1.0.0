import {
  GetLolPlayersPlayerIdOrSlugStatsSide,
  getLolPlayersPlayerIdOrSlugStatsSide,
} from './models/get-lol-players-player-id-or-slug-stats-side';
import { VideogameVersionOrAll, videogameVersionOrAll } from '../common/videogame-version-or-all';
import { Page, page } from '../common/page';

export interface GetLolPlayersPlayerIdOrSlugStatsParams {
  gamesCount?: number;
  side?: GetLolPlayersPlayerIdOrSlugStatsSide;
  videogameVersion?: VideogameVersionOrAll;
  from?: string;
  to?: string;
}

export interface GetLolSeriesSerieIdOrSlugPlayersPlayerIdOrSlugStatsParams {
  gamesCount?: number;
  side?: GetLolPlayersPlayerIdOrSlugStatsSide;
  videogameVersion?: VideogameVersionOrAll;
}

export interface GetLolSeriesSerieIdOrSlugTeamsStatsParams {
  gamesCount?: number;
  side?: GetLolPlayersPlayerIdOrSlugStatsSide;
  videogameVersion?: VideogameVersionOrAll;
  page?: Page;
  perPage?: number;
}

export interface GetLolSeriesSerieIdOrSlugTeamsTeamIdOrSlugStatsParams {
  gamesCount?: number;
  side?: GetLolPlayersPlayerIdOrSlugStatsSide;
  videogameVersion?: VideogameVersionOrAll;
}

export interface GetLolTeamsTeamIdOrSlugStatsParams {
  gamesCount?: number;
  side?: GetLolPlayersPlayerIdOrSlugStatsSide;
  videogameVersion?: VideogameVersionOrAll;
  from?: string;
  to?: string;
}

export interface GetLolTournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStatsParams {
  gamesCount?: number;
  side?: GetLolPlayersPlayerIdOrSlugStatsSide;
  videogameVersion?: VideogameVersionOrAll;
}

export interface GetLolTournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStatsParams {
  gamesCount?: number;
  side?: GetLolPlayersPlayerIdOrSlugStatsSide;
  videogameVersion?: VideogameVersionOrAll;
}