import {
  GetLolPlayersPlayerIdOrSlugStatsSide,
  Page,
  VideogameVersionOrAll,
  getLolPlayersPlayerIdOrSlugStatsSide,
  page,
  videogameVersionOrAll,
} from '../common';

export interface GetLolPlayersPlayerIdOrSlugStatsParams {
  gamesCount?: number;
  side?: GetLolPlayersPlayerIdOrSlugStatsSide;
  videogameVersion?: VideogameVersionOrAll;
  from_?: string;
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
  from_?: string;
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
