# Dota2StatsService

A list of all methods in the `Dota2StatsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                                                                         | Description                                                              |
| :---------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| [get_dota2_matches_matchIdOrSlug_players_stats](#get_dota2_matches_matchidorslug_players_stats)                                                 | Get detailed statistics of Dota2 players for the given match             |
| [get_dota2_players_playerIdOrSlug_stats](#get_dota2_players_playeridorslug_stats)                                                               | Get detailed statistics of a given Dota2 player                          |
| [get_dota2_series_serieIdOrSlug_players_playerIdOrSlug_stats](#get_dota2_series_serieidorslug_players_playeridorslug_stats)                     | Get detailed statistics of a given Dota2 player for the given serie      |
| [get_dota2_series_serieIdOrSlug_teams_teamIdOrSlug_stats](#get_dota2_series_serieidorslug_teams_teamidorslug_stats)                             | Get detailed statistics of a given Dota2 team for the given serie        |
| [get_dota2_teams_teamIdOrSlug_stats](#get_dota2_teams_teamidorslug_stats)                                                                       | Get detailed statistics of a given Dota2 team                            |
| [get_dota2_tournaments_tournamentIdOrSlug_players_playerIdOrSlug_stats](#get_dota2_tournaments_tournamentidorslug_players_playeridorslug_stats) | Get detailed statistics of a given Dota2 player for the given tournament |
| [get_dota2_tournaments_tournamentIdOrSlug_teams_teamIdOrSlug_stats](#get_dota2_tournaments_tournamentidorslug_teams_teamidorslug_stats)         | Get detailed statistics of a given Dota2 team for the given tournament   |

## get_dota2_matches_matchIdOrSlug_players_stats

Get detailed statistics of Dota2 players for the given match

- HTTP Method: `GET`
- Endpoint: `/dota2/matches/{match_id_or_slug}/players/stats`

**Parameters**

| Name          | Type                                        | Required | Description        |
| :------------ | :------------------------------------------ | :------- | :----------------- |
| matchIdOrSlug | [MatchIdOrSlug](../models/MatchIdOrSlug.md) | ✅       | A match ID or slug |

**Return Type**

`Dota2StatsForAllPlayersByMatch`

**Example Usage Code Snippet**

```typescript
import { MatchIdOrSlug, PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchIdOrSlug = 5;

  const { data } = await pandascoreClient.dota2Stats.getDota2MatchesMatchIdOrSlugPlayersStats();

  console.log(data);
})();
```

## get_dota2_players_playerIdOrSlug_stats

Get detailed statistics of a given Dota2 player

- HTTP Method: `GET`
- Endpoint: `/dota2/players/{player_id_or_slug}/stats`

**Parameters**

| Name           | Type                                                                                          | Required | Description                                                                                                                                                    |
| :------------- | :-------------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerIdOrSlug | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md)                                                 | ✅       | A player ID or slug                                                                                                                                            |
| gamesCount     | number                                                                                        | ❌       | The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/> |
| side           | [GetDota2PlayersPlayerIdOrSlugStatsSide](../models/GetDota2PlayersPlayerIdOrSlugStatsSide.md) | ❌       |                                                                                                                                                                |
| from           | string                                                                                        | ❌       | Filter out 'from' date                                                                                                                                         |
| to             | string                                                                                        | ❌       | Filter out 'to' date                                                                                                                                           |

**Return Type**

`Dota2StatsForPlayer`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient, PlayerIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const playerIdOrSlug = 9;
const getDota2PlayersPlayerIdOrSlugStatsSide = GetDota2PlayersPlayerIdOrSlugStatsSide.RADIANT;

  const { data } = await pandascoreClient.dota2Stats.getDota2PlayersPlayerIdOrSlugStats(
  ,
  {
    gamesCount: 4,
		side: getDota2PlayersPlayerIdOrSlugStatsSide,
    from: "2017-07-21",
    to: "2017-07-21",
  }
);

  console.log(data);
})();
```

## get_dota2_series_serieIdOrSlug_players_playerIdOrSlug_stats

Get detailed statistics of a given Dota2 player for the given serie

- HTTP Method: `GET`
- Endpoint: `/dota2/series/{serie_id_or_slug}/players/{player_id_or_slug}/stats`

**Parameters**

| Name           | Type                                                                                          | Required | Description                                                                                                                                                    |
| :------------- | :-------------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| serieIdOrSlug  | [SerieIdOrSlug](../models/SerieIdOrSlug.md)                                                   | ✅       | A serie ID or slug                                                                                                                                             |
| playerIdOrSlug | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md)                                                 | ✅       | A player ID or slug                                                                                                                                            |
| gamesCount     | number                                                                                        | ❌       | The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/> |
| side           | [GetDota2PlayersPlayerIdOrSlugStatsSide](../models/GetDota2PlayersPlayerIdOrSlugStatsSide.md) | ❌       |                                                                                                                                                                |

**Return Type**

`Dota2StatsForPlayerBySerie`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient, PlayerIdOrSlug, SerieIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 10;
const playerIdOrSlug = 9;
const getDota2PlayersPlayerIdOrSlugStatsSide = GetDota2PlayersPlayerIdOrSlugStatsSide.RADIANT;

  const { data } = await pandascoreClient.dota2Stats.getDota2SeriesSerieIdOrSlugPlayersPlayerIdOrSlugStats(
  ,
  ,
  {
    gamesCount: 6,
		side: getDota2PlayersPlayerIdOrSlugStatsSide,
  }
);

  console.log(data);
})();
```

## get_dota2_series_serieIdOrSlug_teams_teamIdOrSlug_stats

Get detailed statistics of a given Dota2 team for the given serie

- HTTP Method: `GET`
- Endpoint: `/dota2/series/{serie_id_or_slug}/teams/{team_id_or_slug}/stats`

**Parameters**

| Name          | Type                                                                                          | Required | Description                                                                                                                                                    |
| :------------ | :-------------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| serieIdOrSlug | [SerieIdOrSlug](../models/SerieIdOrSlug.md)                                                   | ✅       | A serie ID or slug                                                                                                                                             |
| teamIdOrSlug  | [TeamIdOrSlug](../models/TeamIdOrSlug.md)                                                     | ✅       | A team ID or slug                                                                                                                                              |
| gamesCount    | number                                                                                        | ❌       | The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/> |
| side          | [GetDota2PlayersPlayerIdOrSlugStatsSide](../models/GetDota2PlayersPlayerIdOrSlugStatsSide.md) | ❌       |                                                                                                                                                                |

**Return Type**

`Dota2StatsForTeamBySerie`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient, SerieIdOrSlug, TeamIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 10;
const teamIdOrSlug = 10;
const getDota2PlayersPlayerIdOrSlugStatsSide = GetDota2PlayersPlayerIdOrSlugStatsSide.RADIANT;

  const { data } = await pandascoreClient.dota2Stats.getDota2SeriesSerieIdOrSlugTeamsTeamIdOrSlugStats(
  ,
  ,
  {
    gamesCount: 9,
		side: getDota2PlayersPlayerIdOrSlugStatsSide,
  }
);

  console.log(data);
})();
```

## get_dota2_teams_teamIdOrSlug_stats

Get detailed statistics of a given Dota2 team

- HTTP Method: `GET`
- Endpoint: `/dota2/teams/{team_id_or_slug}/stats`

**Parameters**

| Name         | Type                                                                                          | Required | Description                                                                                                                                                    |
| :----------- | :-------------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| teamIdOrSlug | [TeamIdOrSlug](../models/TeamIdOrSlug.md)                                                     | ✅       | A team ID or slug                                                                                                                                              |
| gamesCount   | number                                                                                        | ❌       | The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/> |
| side         | [GetDota2PlayersPlayerIdOrSlugStatsSide](../models/GetDota2PlayersPlayerIdOrSlugStatsSide.md) | ❌       |                                                                                                                                                                |
| from         | string                                                                                        | ❌       | Filter out 'from' date                                                                                                                                         |
| to           | string                                                                                        | ❌       | Filter out 'to' date                                                                                                                                           |

**Return Type**

`Dota2StatsForTeam`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient, TeamIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const teamIdOrSlug = 10;
const getDota2PlayersPlayerIdOrSlugStatsSide = GetDota2PlayersPlayerIdOrSlugStatsSide.RADIANT;

  const { data } = await pandascoreClient.dota2Stats.getDota2TeamsTeamIdOrSlugStats(
  ,
  {
    gamesCount: 4,
		side: getDota2PlayersPlayerIdOrSlugStatsSide,
    from: "2017-07-21",
    to: "2017-07-21",
  }
);

  console.log(data);
})();
```

## get_dota2_tournaments_tournamentIdOrSlug_players_playerIdOrSlug_stats

Get detailed statistics of a given Dota2 player for the given tournament

- HTTP Method: `GET`
- Endpoint: `/dota2/tournaments/{tournament_id_or_slug}/players/{player_id_or_slug}/stats`

**Parameters**

| Name               | Type                                                                                          | Required | Description                                                                                                                                                    |
| :----------------- | :-------------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tournamentIdOrSlug | [TournamentIdOrSlug](../models/TournamentIdOrSlug.md)                                         | ✅       | A tournament ID or slug                                                                                                                                        |
| playerIdOrSlug     | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md)                                                 | ✅       | A player ID or slug                                                                                                                                            |
| gamesCount         | number                                                                                        | ❌       | The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/> |
| side               | [GetDota2PlayersPlayerIdOrSlugStatsSide](../models/GetDota2PlayersPlayerIdOrSlugStatsSide.md) | ❌       |                                                                                                                                                                |

**Return Type**

`Dota2StatsForPlayerByTournament`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient, PlayerIdOrSlug, TournamentIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 2;
const playerIdOrSlug = 9;
const getDota2PlayersPlayerIdOrSlugStatsSide = GetDota2PlayersPlayerIdOrSlugStatsSide.RADIANT;

  const { data } = await pandascoreClient.dota2Stats.getDota2TournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStats(
  ,
  ,
  {
    gamesCount: 7,
		side: getDota2PlayersPlayerIdOrSlugStatsSide,
  }
);

  console.log(data);
})();
```

## get_dota2_tournaments_tournamentIdOrSlug_teams_teamIdOrSlug_stats

Get detailed statistics of a given Dota2 team for the given tournament

- HTTP Method: `GET`
- Endpoint: `/dota2/tournaments/{tournament_id_or_slug}/teams/{team_id_or_slug}/stats`

**Parameters**

| Name               | Type                                                                                          | Required | Description                                                                                                                                                    |
| :----------------- | :-------------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tournamentIdOrSlug | [TournamentIdOrSlug](../models/TournamentIdOrSlug.md)                                         | ✅       | A tournament ID or slug                                                                                                                                        |
| teamIdOrSlug       | [TeamIdOrSlug](../models/TeamIdOrSlug.md)                                                     | ✅       | A team ID or slug                                                                                                                                              |
| gamesCount         | number                                                                                        | ❌       | The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/> |
| side               | [GetDota2PlayersPlayerIdOrSlugStatsSide](../models/GetDota2PlayersPlayerIdOrSlugStatsSide.md) | ❌       |                                                                                                                                                                |

**Return Type**

`Dota2StatsForTeamByTournament`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient, TeamIdOrSlug, TournamentIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 2;
const teamIdOrSlug = 10;
const getDota2PlayersPlayerIdOrSlugStatsSide = GetDota2PlayersPlayerIdOrSlugStatsSide.RADIANT;

  const { data } = await pandascoreClient.dota2Stats.getDota2TournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStats(
  ,
  ,
  {
    gamesCount: 3,
		side: getDota2PlayersPlayerIdOrSlugStatsSide,
  }
);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
