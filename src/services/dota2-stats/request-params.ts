import {
  GetDota2PlayersPlayerIdOrSlugStatsSide,
  getDota2PlayersPlayerIdOrSlugStatsSide,
} from '../common';

export interface GetDota2PlayersPlayerIdOrSlugStatsParams {
  gamesCount?: number;
  side?: GetDota2PlayersPlayerIdOrSlugStatsSide;
  from_?: string;
  to?: string;
}

export interface GetDota2SeriesSerieIdOrSlugPlayersPlayerIdOrSlugStatsParams {
  gamesCount?: number;
  side?: GetDota2PlayersPlayerIdOrSlugStatsSide;
}

export interface GetDota2SeriesSerieIdOrSlugTeamsTeamIdOrSlugStatsParams {
  gamesCount?: number;
  side?: GetDota2PlayersPlayerIdOrSlugStatsSide;
}

export interface GetDota2TeamsTeamIdOrSlugStatsParams {
  gamesCount?: number;
  side?: GetDota2PlayersPlayerIdOrSlugStatsSide;
  from_?: string;
  to?: string;
}

export interface GetDota2TournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStatsParams {
  gamesCount?: number;
  side?: GetDota2PlayersPlayerIdOrSlugStatsSide;
}

export interface GetDota2TournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStatsParams {
  gamesCount?: number;
  side?: GetDota2PlayersPlayerIdOrSlugStatsSide;
}
