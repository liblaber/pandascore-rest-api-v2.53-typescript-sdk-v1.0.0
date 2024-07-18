# LoLStatsService

A list of all methods in the `LoLStatsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                                                                     | Description                                                                          |
| :------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------- |
| [get_lol_matches_matchIdOrSlug_players_stats](#get_lol_matches_matchidorslug_players_stats)                                                 | Get detailed statistics of League-of-Legends players for the given match             |
| [get_lol_players_playerIdOrSlug_stats](#get_lol_players_playeridorslug_stats)                                                               | Get detailed statistics of a given League-of-Legends player                          |
| [get_lol_series_serieIdOrSlug_players_playerIdOrSlug_stats](#get_lol_series_serieidorslug_players_playeridorslug_stats)                     | Get detailed statistics of a given League-of-Legends player for the given serie      |
| [get_lol_series_serieIdOrSlug_teams_stats](#get_lol_series_serieidorslug_teams_stats)                                                       | Get detailed statistics of the LoL teams for the given series                        |
| [get_lol_series_serieIdOrSlug_teams_teamIdOrSlug_stats](#get_lol_series_serieidorslug_teams_teamidorslug_stats)                             | Get detailed statistics of a given League-of-Legends team for the given serie        |
| [get_lol_teams_teamIdOrSlug_stats](#get_lol_teams_teamidorslug_stats)                                                                       | Get detailed statistics of a given League-of-Legends team                            |
| [get_lol_tournaments_tournamentIdOrSlug_players_playerIdOrSlug_stats](#get_lol_tournaments_tournamentidorslug_players_playeridorslug_stats) | Get detailed statistics of a given League-of-Legends player for the given tournament |
| [get_lol_tournaments_tournamentIdOrSlug_teams_teamIdOrSlug_stats](#get_lol_tournaments_tournamentidorslug_teams_teamidorslug_stats)         | Get detailed statistics of a given League-of-Legends team for the given tournament   |

## get_lol_matches_matchIdOrSlug_players_stats

Get detailed statistics of League-of-Legends players for the given match

- HTTP Method: `GET`
- Endpoint: `/lol/matches/{match_id_or_slug}/players/stats`

**Parameters**

| Name          | Type                                        | Required | Description        |
| :------------ | :------------------------------------------ | :------- | :----------------- |
| matchIdOrSlug | [MatchIdOrSlug](../models/MatchIdOrSlug.md) | ✅       | A match ID or slug |

**Return Type**

`LoLStatsForAllPlayersByMatch`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchIdOrSlug = 2;

  const { data } = await pandascoreClient.loLStats.getLolMatchesMatchIdOrSlugPlayersStats();

  console.log(data);
})();
```

## get_lol_players_playerIdOrSlug_stats

Get detailed statistics of a given League-of-Legends player

- HTTP Method: `GET`
- Endpoint: `/lol/players/{player_id_or_slug}/stats`

**Parameters**

| Name             | Type                                                                                      | Required | Description                                                                                                                                                    |
| :--------------- | :---------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerIdOrSlug   | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md)                                             | ✅       | A player ID or slug                                                                                                                                            |
| gamesCount       | number                                                                                    | ❌       | The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/> |
| side             | [GetLolPlayersPlayerIdOrSlugStatsSide](../models/GetLolPlayersPlayerIdOrSlugStatsSide.md) | ❌       |                                                                                                                                                                |
| videogameVersion | [VideogameVersionOrAll](../models/VideogameVersionOrAll.md)                               | ❌       |                                                                                                                                                                |
| from             | string                                                                                    | ❌       | Filter out 'from' date                                                                                                                                         |
| to               | string                                                                                    | ❌       | Filter out 'to' date                                                                                                                                           |

**Return Type**

`LoLStatsForPlayer`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const playerIdOrSlug = 7;
const side = GetLolPlayersPlayerIdOrSlugStatsSide.blue;
const videogameVersionOrAll = "5.4970743709";

  const { data } = await pandascoreClient.loLStats.getLolPlayersPlayerIdOrSlugStats(
  ,
  {
    gamesCount: 4,
		side: side,
		videogameVersion: videogameVersion,
    from: "2017-07-21",
    to: "2017-07-21",
  }
);

  console.log(data);
})();
```

## get_lol_series_serieIdOrSlug_players_playerIdOrSlug_stats

Get detailed statistics of a given League-of-Legends player for the given serie

- HTTP Method: `GET`
- Endpoint: `/lol/series/{serie_id_or_slug}/players/{player_id_or_slug}/stats`

**Parameters**

| Name             | Type                                                                                      | Required | Description                                                                                                                                                    |
| :--------------- | :---------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| serieIdOrSlug    | [SerieIdOrSlug](../models/SerieIdOrSlug.md)                                               | ✅       | A serie ID or slug                                                                                                                                             |
| playerIdOrSlug   | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md)                                             | ✅       | A player ID or slug                                                                                                                                            |
| gamesCount       | number                                                                                    | ❌       | The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/> |
| side             | [GetLolPlayersPlayerIdOrSlugStatsSide](../models/GetLolPlayersPlayerIdOrSlugStatsSide.md) | ❌       |                                                                                                                                                                |
| videogameVersion | [VideogameVersionOrAll](../models/VideogameVersionOrAll.md)                               | ❌       |                                                                                                                                                                |

**Return Type**

`LoLStatsForPlayerBySerie`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 1;
const playerIdOrSlug = 7;
const side = GetLolPlayersPlayerIdOrSlugStatsSide.blue;
const videogameVersionOrAll = "5.4970743709";

  const { data } = await pandascoreClient.loLStats.getLolSeriesSerieIdOrSlugPlayersPlayerIdOrSlugStats(
  ,
  ,
  {
    gamesCount: 2,
		side: side,
		videogameVersion: videogameVersion,
  }
);

  console.log(data);
})();
```

## get_lol_series_serieIdOrSlug_teams_stats

Get detailed statistics of the LoL teams for the given series

- HTTP Method: `GET`
- Endpoint: `/lol/series/{serie_id_or_slug}/teams/stats`

**Parameters**

| Name             | Type                                                                                      | Required | Description                                                                                                                                                    |
| :--------------- | :---------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| serieIdOrSlug    | [SerieIdOrSlug](../models/SerieIdOrSlug.md)                                               | ✅       | A serie ID or slug                                                                                                                                             |
| gamesCount       | number                                                                                    | ❌       | The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/> |
| side             | [GetLolPlayersPlayerIdOrSlugStatsSide](../models/GetLolPlayersPlayerIdOrSlugStatsSide.md) | ❌       |                                                                                                                                                                |
| videogameVersion | [VideogameVersionOrAll](../models/VideogameVersionOrAll.md)                               | ❌       |                                                                                                                                                                |
| page             | [Page](../models/Page.md)                                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                           |
| perPage          | number                                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                                     |

**Return Type**

`LoLStatsForTeamBySerie[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 1;
const side = GetLolPlayersPlayerIdOrSlugStatsSide.blue;
const videogameVersionOrAll = "5.4970743709";
const page = 1;

  const { data } = await pandascoreClient.loLStats.getLolSeriesSerieIdOrSlugTeamsStats(
  ,
  {
    gamesCount: 3,
		side: side,
		videogameVersion: videogameVersion,
		page: page,
    perPage: 50,
  }
);

  console.log(data);
})();
```

## get_lol_series_serieIdOrSlug_teams_teamIdOrSlug_stats

Get detailed statistics of a given League-of-Legends team for the given serie

- HTTP Method: `GET`
- Endpoint: `/lol/series/{serie_id_or_slug}/teams/{team_id_or_slug}/stats`

**Parameters**

| Name             | Type                                                                                      | Required | Description                                                                                                                                                    |
| :--------------- | :---------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| serieIdOrSlug    | [SerieIdOrSlug](../models/SerieIdOrSlug.md)                                               | ✅       | A serie ID or slug                                                                                                                                             |
| teamIdOrSlug     | [TeamIdOrSlug](../models/TeamIdOrSlug.md)                                                 | ✅       | A team ID or slug                                                                                                                                              |
| gamesCount       | number                                                                                    | ❌       | The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/> |
| side             | [GetLolPlayersPlayerIdOrSlugStatsSide](../models/GetLolPlayersPlayerIdOrSlugStatsSide.md) | ❌       |                                                                                                                                                                |
| videogameVersion | [VideogameVersionOrAll](../models/VideogameVersionOrAll.md)                               | ❌       |                                                                                                                                                                |

**Return Type**

`LoLStatsForTeamBySerie`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 1;
const teamIdOrSlug = 2;
const side = GetLolPlayersPlayerIdOrSlugStatsSide.blue;
const videogameVersionOrAll = "5.4970743709";

  const { data } = await pandascoreClient.loLStats.getLolSeriesSerieIdOrSlugTeamsTeamIdOrSlugStats(
  ,
  ,
  {
    gamesCount: 7,
		side: side,
		videogameVersion: videogameVersion,
  }
);

  console.log(data);
})();
```

## get_lol_teams_teamIdOrSlug_stats

Get detailed statistics of a given League-of-Legends team

- HTTP Method: `GET`
- Endpoint: `/lol/teams/{team_id_or_slug}/stats`

**Parameters**

| Name             | Type                                                                                      | Required | Description                                                                                                                                                    |
| :--------------- | :---------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| teamIdOrSlug     | [TeamIdOrSlug](../models/TeamIdOrSlug.md)                                                 | ✅       | A team ID or slug                                                                                                                                              |
| gamesCount       | number                                                                                    | ❌       | The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/> |
| side             | [GetLolPlayersPlayerIdOrSlugStatsSide](../models/GetLolPlayersPlayerIdOrSlugStatsSide.md) | ❌       |                                                                                                                                                                |
| videogameVersion | [VideogameVersionOrAll](../models/VideogameVersionOrAll.md)                               | ❌       |                                                                                                                                                                |
| from             | string                                                                                    | ❌       | Filter out 'from' date                                                                                                                                         |
| to               | string                                                                                    | ❌       | Filter out 'to' date                                                                                                                                           |

**Return Type**

`LoLStatsForTeam`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const teamIdOrSlug = 2;
const side = GetLolPlayersPlayerIdOrSlugStatsSide.blue;
const videogameVersionOrAll = "5.4970743709";

  const { data } = await pandascoreClient.loLStats.getLolTeamsTeamIdOrSlugStats(
  ,
  {
    gamesCount: 8,
		side: side,
		videogameVersion: videogameVersion,
    from: "2017-07-21",
    to: "2017-07-21",
  }
);

  console.log(data);
})();
```

## get_lol_tournaments_tournamentIdOrSlug_players_playerIdOrSlug_stats

Get detailed statistics of a given League-of-Legends player for the given tournament

- HTTP Method: `GET`
- Endpoint: `/lol/tournaments/{tournament_id_or_slug}/players/{player_id_or_slug}/stats`

**Parameters**

| Name               | Type                                                                                      | Required | Description                                                                                                                                                    |
| :----------------- | :---------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tournamentIdOrSlug | [TournamentIdOrSlug](../models/TournamentIdOrSlug.md)                                     | ✅       | A tournament ID or slug                                                                                                                                        |
| playerIdOrSlug     | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md)                                             | ✅       | A player ID or slug                                                                                                                                            |
| gamesCount         | number                                                                                    | ❌       | The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/> |
| side               | [GetLolPlayersPlayerIdOrSlugStatsSide](../models/GetLolPlayersPlayerIdOrSlugStatsSide.md) | ❌       |                                                                                                                                                                |
| videogameVersion   | [VideogameVersionOrAll](../models/VideogameVersionOrAll.md)                               | ❌       |                                                                                                                                                                |

**Return Type**

`LoLStatsForPlayerByTournament`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 10;
const playerIdOrSlug = 7;
const side = GetLolPlayersPlayerIdOrSlugStatsSide.blue;
const videogameVersionOrAll = "5.4970743709";

  const { data } = await pandascoreClient.loLStats.getLolTournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStats(
  ,
  ,
  {
    gamesCount: 8,
		side: side,
		videogameVersion: videogameVersion,
  }
);

  console.log(data);
})();
```

## get_lol_tournaments_tournamentIdOrSlug_teams_teamIdOrSlug_stats

Get detailed statistics of a given League-of-Legends team for the given tournament

- HTTP Method: `GET`
- Endpoint: `/lol/tournaments/{tournament_id_or_slug}/teams/{team_id_or_slug}/stats`

**Parameters**

| Name               | Type                                                                                      | Required | Description                                                                                                                                                    |
| :----------------- | :---------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tournamentIdOrSlug | [TournamentIdOrSlug](../models/TournamentIdOrSlug.md)                                     | ✅       | A tournament ID or slug                                                                                                                                        |
| teamIdOrSlug       | [TeamIdOrSlug](../models/TeamIdOrSlug.md)                                                 | ✅       | A team ID or slug                                                                                                                                              |
| gamesCount         | number                                                                                    | ❌       | The amount of games used for the statistics. <br/> <br/>For example if `?games_count=5`, it would show the statistics for the most recent 5 games played <br/> |
| side               | [GetLolPlayersPlayerIdOrSlugStatsSide](../models/GetLolPlayersPlayerIdOrSlugStatsSide.md) | ❌       |                                                                                                                                                                |
| videogameVersion   | [VideogameVersionOrAll](../models/VideogameVersionOrAll.md)                               | ❌       |                                                                                                                                                                |

**Return Type**

`LoLStatsForTeamByTournament`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 10;
const teamIdOrSlug = 2;
const side = GetLolPlayersPlayerIdOrSlugStatsSide.blue;
const videogameVersionOrAll = "5.4970743709";

  const { data } = await pandascoreClient.loLStats.getLolTournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStats(
  ,
  ,
  {
    gamesCount: 9,
		side: side,
		videogameVersion: videogameVersion,
  }
);

  console.log(data);
})();
```
