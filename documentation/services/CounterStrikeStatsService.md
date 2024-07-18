# CounterStrikeStatsService

A list of all methods in the `CounterStrikeStatsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                                                                       | Description                                                                       |
| :-------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| [get_csgo_matches_matchIdOrSlug_players_stats](#get_csgo_matches_matchidorslug_players_stats)                                                 | Get detailed statistics of Counter-Strike players for the given match             |
| [get_csgo_matches_matchIdOrSlug_players_playerIdOrSlug_stats](#get_csgo_matches_matchidorslug_players_playeridorslug_stats)                   | Get detailed statistics of a given Counter-Strike player for the given match      |
| [get_csgo_matches_matchIdOrSlug_teams_teamIdOrSlug_stats](#get_csgo_matches_matchidorslug_teams_teamidorslug_stats)                           | Get detailed statistics of a given Counter-Strike team for the given match        |
| [get_csgo_players_playerIdOrSlug_stats](#get_csgo_players_playeridorslug_stats)                                                               | Get detailed statistics of a given Counter-Strike player                          |
| [get_csgo_series_serieIdOrSlug_players_playerIdOrSlug_stats](#get_csgo_series_serieidorslug_players_playeridorslug_stats)                     | Get detailed statistics of a given Counter-Strike player for the given serie      |
| [get_csgo_series_serieIdOrSlug_teams_teamIdOrSlug_stats](#get_csgo_series_serieidorslug_teams_teamidorslug_stats)                             | Get detailed statistics of a given Counter-Strike team for the given serie        |
| [get_csgo_teams_teamIdOrSlug_stats](#get_csgo_teams_teamidorslug_stats)                                                                       | Get detailed statistics of a given Counter-Strike team                            |
| [get_csgo_tournaments_tournamentIdOrSlug_players_playerIdOrSlug_stats](#get_csgo_tournaments_tournamentidorslug_players_playeridorslug_stats) | Get detailed statistics of a given Counter-Strike player for the given tournament |
| [get_csgo_tournaments_tournamentIdOrSlug_teams_teamIdOrSlug_stats](#get_csgo_tournaments_tournamentidorslug_teams_teamidorslug_stats)         | Get detailed statistics of a given Counter-Strike team for the given tournament   |

## get_csgo_matches_matchIdOrSlug_players_stats

Get detailed statistics of Counter-Strike players for the given match

- HTTP Method: `GET`
- Endpoint: `/csgo/matches/{match_id_or_slug}/players/stats`

**Parameters**

| Name          | Type                                        | Required | Description        |
| :------------ | :------------------------------------------ | :------- | :----------------- |
| matchIdOrSlug | [MatchIdOrSlug](../models/MatchIdOrSlug.md) | ✅       | A match ID or slug |

**Return Type**

`CsgoStatsForAllPlayersByMatch`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchIdOrSlug = 5;

  const { data } = await pandascoreClient.counterStrikeStats.getCsgoMatchesMatchIdOrSlugPlayersStats();

  console.log(data);
})();
```

## get_csgo_matches_matchIdOrSlug_players_playerIdOrSlug_stats

Get detailed statistics of a given Counter-Strike player for the given match

- HTTP Method: `GET`
- Endpoint: `/csgo/matches/{match_id_or_slug}/players/{player_id_or_slug}/stats`

**Parameters**

| Name           | Type                                          | Required | Description         |
| :------------- | :-------------------------------------------- | :------- | :------------------ |
| matchIdOrSlug  | [MatchIdOrSlug](../models/MatchIdOrSlug.md)   | ✅       | A match ID or slug  |
| playerIdOrSlug | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md) | ✅       | A player ID or slug |

**Return Type**

`CsgoStatsForPlayerByMatch`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchIdOrSlug = 5;
const playerIdOrSlug = 9;

  const { data } = await pandascoreClient.counterStrikeStats.getCsgoMatchesMatchIdOrSlugPlayersPlayerIdOrSlugStats(
  ,

);

  console.log(data);
})();
```

## get_csgo_matches_matchIdOrSlug_teams_teamIdOrSlug_stats

Get detailed statistics of a given Counter-Strike team for the given match

- HTTP Method: `GET`
- Endpoint: `/csgo/matches/{match_id_or_slug}/teams/{team_id_or_slug}/stats`

**Parameters**

| Name          | Type                                        | Required | Description        |
| :------------ | :------------------------------------------ | :------- | :----------------- |
| matchIdOrSlug | [MatchIdOrSlug](../models/MatchIdOrSlug.md) | ✅       | A match ID or slug |
| teamIdOrSlug  | [TeamIdOrSlug](../models/TeamIdOrSlug.md)   | ✅       | A team ID or slug  |

**Return Type**

`CsgoStatsForTeamByMatch`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchIdOrSlug = 5;
const teamIdOrSlug = 10;

  const { data } = await pandascoreClient.counterStrikeStats.getCsgoMatchesMatchIdOrSlugTeamsTeamIdOrSlugStats(
  ,

);

  console.log(data);
})();
```

## get_csgo_players_playerIdOrSlug_stats

Get detailed statistics of a given Counter-Strike player

- HTTP Method: `GET`
- Endpoint: `/csgo/players/{player_id_or_slug}/stats`

**Parameters**

| Name           | Type                                                          | Required | Description            |
| :------------- | :------------------------------------------------------------ | :------- | :--------------------- |
| playerIdOrSlug | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md)                 | ✅       | A player ID or slug    |
| videogameTitle | [VideogameTitleIdOrSlug](../models/VideogameTitleIdOrSlug.md) | ❌       |                        |
| from           | string                                                        | ❌       | Filter out 'from' date |
| to             | string                                                        | ❌       | Filter out 'to' date   |

**Return Type**

`CsgoStatsForPlayer`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const playerIdOrSlug = 9;
const videogameTitleIdOrSlug = 10;

  const { data } = await pandascoreClient.counterStrikeStats.getCsgoPlayersPlayerIdOrSlugStats(
  ,
  {
		videogameTitle: videogameTitle,
    from: "2017-07-21",
    to: "2017-07-21",
  }
);

  console.log(data);
})();
```

## get_csgo_series_serieIdOrSlug_players_playerIdOrSlug_stats

Get detailed statistics of a given Counter-Strike player for the given serie

- HTTP Method: `GET`
- Endpoint: `/csgo/series/{serie_id_or_slug}/players/{player_id_or_slug}/stats`

**Parameters**

| Name           | Type                                          | Required | Description         |
| :------------- | :-------------------------------------------- | :------- | :------------------ |
| serieIdOrSlug  | [SerieIdOrSlug](../models/SerieIdOrSlug.md)   | ✅       | A serie ID or slug  |
| playerIdOrSlug | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md) | ✅       | A player ID or slug |

**Return Type**

`CsgoStatsForPlayerBySerie`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 10;
const playerIdOrSlug = 9;

  const { data } = await pandascoreClient.counterStrikeStats.getCsgoSeriesSerieIdOrSlugPlayersPlayerIdOrSlugStats(
  ,

);

  console.log(data);
})();
```

## get_csgo_series_serieIdOrSlug_teams_teamIdOrSlug_stats

Get detailed statistics of a given Counter-Strike team for the given serie

- HTTP Method: `GET`
- Endpoint: `/csgo/series/{serie_id_or_slug}/teams/{team_id_or_slug}/stats`

**Parameters**

| Name          | Type                                        | Required | Description        |
| :------------ | :------------------------------------------ | :------- | :----------------- |
| serieIdOrSlug | [SerieIdOrSlug](../models/SerieIdOrSlug.md) | ✅       | A serie ID or slug |
| teamIdOrSlug  | [TeamIdOrSlug](../models/TeamIdOrSlug.md)   | ✅       | A team ID or slug  |

**Return Type**

`CsgoStatsForTeamBySerie`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 10;
const teamIdOrSlug = 10;

  const { data } = await pandascoreClient.counterStrikeStats.getCsgoSeriesSerieIdOrSlugTeamsTeamIdOrSlugStats(
  ,

);

  console.log(data);
})();
```

## get_csgo_teams_teamIdOrSlug_stats

Get detailed statistics of a given Counter-Strike team

- HTTP Method: `GET`
- Endpoint: `/csgo/teams/{team_id_or_slug}/stats`

**Parameters**

| Name           | Type                                                          | Required | Description            |
| :------------- | :------------------------------------------------------------ | :------- | :--------------------- |
| teamIdOrSlug   | [TeamIdOrSlug](../models/TeamIdOrSlug.md)                     | ✅       | A team ID or slug      |
| videogameTitle | [VideogameTitleIdOrSlug](../models/VideogameTitleIdOrSlug.md) | ❌       |                        |
| from           | string                                                        | ❌       | Filter out 'from' date |
| to             | string                                                        | ❌       | Filter out 'to' date   |

**Return Type**

`CsgoStatsForTeam`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const teamIdOrSlug = 10;
const videogameTitleIdOrSlug = 10;

  const { data } = await pandascoreClient.counterStrikeStats.getCsgoTeamsTeamIdOrSlugStats(
  ,
  {
		videogameTitle: videogameTitle,
    from: "2017-07-21",
    to: "2017-07-21",
  }
);

  console.log(data);
})();
```

## get_csgo_tournaments_tournamentIdOrSlug_players_playerIdOrSlug_stats

Get detailed statistics of a given Counter-Strike player for the given tournament

- HTTP Method: `GET`
- Endpoint: `/csgo/tournaments/{tournament_id_or_slug}/players/{player_id_or_slug}/stats`

**Parameters**

| Name               | Type                                                  | Required | Description             |
| :----------------- | :---------------------------------------------------- | :------- | :---------------------- |
| tournamentIdOrSlug | [TournamentIdOrSlug](../models/TournamentIdOrSlug.md) | ✅       | A tournament ID or slug |
| playerIdOrSlug     | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md)         | ✅       | A player ID or slug     |

**Return Type**

`CsgoStatsForPlayerByTournament`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 2;
const playerIdOrSlug = 9;

  const { data } = await pandascoreClient.counterStrikeStats.getCsgoTournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStats(
  ,

);

  console.log(data);
})();
```

## get_csgo_tournaments_tournamentIdOrSlug_teams_teamIdOrSlug_stats

Get detailed statistics of a given Counter-Strike team for the given tournament

- HTTP Method: `GET`
- Endpoint: `/csgo/tournaments/{tournament_id_or_slug}/teams/{team_id_or_slug}/stats`

**Parameters**

| Name               | Type                                                  | Required | Description             |
| :----------------- | :---------------------------------------------------- | :------- | :---------------------- |
| tournamentIdOrSlug | [TournamentIdOrSlug](../models/TournamentIdOrSlug.md) | ✅       | A tournament ID or slug |
| teamIdOrSlug       | [TeamIdOrSlug](../models/TeamIdOrSlug.md)             | ✅       | A team ID or slug       |

**Return Type**

`CsgoStatsForTeamByTournament`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 2;
const teamIdOrSlug = 10;

  const { data } = await pandascoreClient.counterStrikeStats.getCsgoTournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStats(
  ,

);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
