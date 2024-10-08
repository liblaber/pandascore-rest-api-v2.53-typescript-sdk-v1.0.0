// This file was generated by liblab | https://liblab.com/

import { GetDota2PlayersPlayerIdOrSlugStatsSide } from './models/get-dota2-players-player-id-or-slug-stats-side';

export interface GetDota2PlayersPlayerIdOrSlugStatsParams {
  gamesCount?: number;
  side?: GetDota2PlayersPlayerIdOrSlugStatsSide;
  from?: string;
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
  from?: string;
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
