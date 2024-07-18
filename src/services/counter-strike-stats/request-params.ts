import { VideogameTitleIdOrSlug, videogameTitleIdOrSlug } from './models/videogame-title-id-or-slug';

export interface GetCsgoPlayersPlayerIdOrSlugStatsParams {
  videogameTitle?: VideogameTitleIdOrSlug;
  from?: string;
  to?: string;
}

export interface GetCsgoTeamsTeamIdOrSlugStatsParams {
  videogameTitle?: VideogameTitleIdOrSlug;
  from?: string;
  to?: string;
}
