import { VideogameTitleIdOrSlug, videogameTitleIdOrSlug } from '../common';

export interface GetCsgoPlayersPlayerIdOrSlugStatsParams {
  videogameTitle?: VideogameTitleIdOrSlug;
  from_?: string;
  to?: string;
}

export interface GetCsgoTeamsTeamIdOrSlugStatsParams {
  videogameTitle?: VideogameTitleIdOrSlug;
  from_?: string;
  to?: string;
}
