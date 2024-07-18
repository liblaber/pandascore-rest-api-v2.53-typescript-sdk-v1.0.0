import { VideogameVersionOrAll, videogameVersionOrAll } from '../common/videogame-version-or-all';

export interface GetValorantPlayersPlayerIdOrSlugStatsParams {
  videogameVersion?: VideogameVersionOrAll;
  from?: string;
  to?: string;
}

export interface GetValorantSeriesSerieIdOrSlugPlayersPlayerIdOrSlugStatsParams {
  videogameVersion?: VideogameVersionOrAll;
}

export interface GetValorantSeriesSerieIdOrSlugTeamsTeamIdOrSlugStatsParams {
  videogameVersion?: VideogameVersionOrAll;
}

export interface GetValorantTeamsTeamIdOrSlugStatsParams {
  videogameVersion?: VideogameVersionOrAll;
  from?: string;
  to?: string;
}

export interface GetValorantTournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStatsParams {
  videogameVersion?: VideogameVersionOrAll;
}

export interface GetValorantTournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStatsParams {
  videogameVersion?: VideogameVersionOrAll;
}
