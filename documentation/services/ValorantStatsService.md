# ValorantStatsService

A list of all methods in the `ValorantStatsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                                                                               | Description                                                       |
| :---------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| [get_valorant_matches_matchIdOrSlug_players_stats](#get_valorant_matches_matchidorslug_players_stats)                                                 | Get the aggregated statistics for all players in a Valorant match |
| [get_valorant_matches_matchIdOrSlug_teams_teamIdOrSlug_stats](#get_valorant_matches_matchidorslug_teams_teamidorslug_stats)                           | Get the aggregated team statistics for a Valorant match           |
| [get_valorant_players_playerIdOrSlug_stats](#get_valorant_players_playeridorslug_stats)                                                               | Get a Valorant player stats by ID or slug                         |
| [get_valorant_series_serieIdOrSlug_players_playerIdOrSlug_stats](#get_valorant_series_serieidorslug_players_playeridorslug_stats)                     | Get the aggregated player statistics for a Valorant series        |
| [get_valorant_series_serieIdOrSlug_teams_teamIdOrSlug_stats](#get_valorant_series_serieidorslug_teams_teamidorslug_stats)                             | Get the aggregated team statistics for a Valorant series          |
| [get_valorant_teams_teamIdOrSlug_stats](#get_valorant_teams_teamidorslug_stats)                                                                       | Get a Valorant team stats by ID or slug                           |
| [get_valorant_tournaments_tournamentIdOrSlug_players_playerIdOrSlug_stats](#get_valorant_tournaments_tournamentidorslug_players_playeridorslug_stats) | Get the aggregated player statistics for a Valorant tournament    |
| [get_valorant_tournaments_tournamentIdOrSlug_teams_teamIdOrSlug_stats](#get_valorant_tournaments_tournamentidorslug_teams_teamidorslug_stats)         | Get the aggregated team statistics for a Valorant tournament      |

## get_valorant_matches_matchIdOrSlug_players_stats

Get the aggregated statistics for all players in a Valorant match

- HTTP Method: `GET`
- Endpoint: `/valorant/matches/{match_id_or_slug}/players/stats`

**Parameters**

| Name          | Type                                        | Required | Description        |
| :------------ | :------------------------------------------ | :------- | :----------------- |
| matchIdOrSlug | [MatchIdOrSlug](../models/MatchIdOrSlug.md) | ✅       | A match ID or slug |

**Return Type**

`ValorantStatsForPlayersByMatch`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const matchIdOrSlug = 6;

  const { data } = await pandascore.valorantStats.getValorantMatchesMatchIdOrSlugPlayersStats();

  console.log(data);
})();
```

## get_valorant_matches_matchIdOrSlug_teams_teamIdOrSlug_stats

Get the aggregated team statistics for a Valorant match

- HTTP Method: `GET`
- Endpoint: `/valorant/matches/{match_id_or_slug}/teams/{team_id_or_slug}/stats`

**Parameters**

| Name          | Type                                        | Required | Description        |
| :------------ | :------------------------------------------ | :------- | :----------------- |
| matchIdOrSlug | [MatchIdOrSlug](../models/MatchIdOrSlug.md) | ✅       | A match ID or slug |
| teamIdOrSlug  | [TeamIdOrSlug](../models/TeamIdOrSlug.md)   | ✅       | A team ID or slug  |

**Return Type**

`ValorantStatsForTeamByMatch`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchIdOrSlug = 6;
const teamIdOrSlug = 3;

  const { data } = await pandascore.valorantStats.getValorantMatchesMatchIdOrSlugTeamsTeamIdOrSlugStats(
  ,

);

  console.log(data);
})();
```

## get_valorant_players_playerIdOrSlug_stats

Get a Valorant player stats by ID or slug

- HTTP Method: `GET`
- Endpoint: `/valorant/players/{player_id_or_slug}/stats`

**Parameters**

| Name             | Type                                                        | Required | Description            |
| :--------------- | :---------------------------------------------------------- | :------- | :--------------------- |
| playerIdOrSlug   | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md)               | ✅       | A player ID or slug    |
| videogameVersion | [VideogameVersionOrAll](../models/VideogameVersionOrAll.md) | ❌       |                        |
| from\_           | string                                                      | ❌       | Filter out 'from' date |
| to               | string                                                      | ❌       | Filter out 'to' date   |

**Return Type**

`ValorantStatsForPlayer`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const playerIdOrSlug = 2;
const videogameVersionOrAll = "2815.4.300196";

  const { data } = await pandascore.valorantStats.getValorantPlayersPlayerIdOrSlugStats(
  ,
  {
		videogameVersion: videogameVersion,
    from_: "2017-07-21",
    to: "2017-07-21",
  }
);

  console.log(data);
})();
```

## get_valorant_series_serieIdOrSlug_players_playerIdOrSlug_stats

Get the aggregated player statistics for a Valorant series

- HTTP Method: `GET`
- Endpoint: `/valorant/series/{serie_id_or_slug}/players/{player_id_or_slug}/stats`

**Parameters**

| Name             | Type                                                        | Required | Description         |
| :--------------- | :---------------------------------------------------------- | :------- | :------------------ |
| serieIdOrSlug    | [SerieIdOrSlug](../models/SerieIdOrSlug.md)                 | ✅       | A serie ID or slug  |
| playerIdOrSlug   | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md)               | ✅       | A player ID or slug |
| videogameVersion | [VideogameVersionOrAll](../models/VideogameVersionOrAll.md) | ❌       |                     |

**Return Type**

`ValorantStatsForPlayerBySerie`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 10;
const playerIdOrSlug = 2;
const videogameVersionOrAll = "2815.4.300196";

  const { data } = await pandascore.valorantStats.getValorantSeriesSerieIdOrSlugPlayersPlayerIdOrSlugStats(
  ,
  ,
  {
		videogameVersion: videogameVersion,
  }
);

  console.log(data);
})();
```

## get_valorant_series_serieIdOrSlug_teams_teamIdOrSlug_stats

Get the aggregated team statistics for a Valorant series

- HTTP Method: `GET`
- Endpoint: `/valorant/series/{serie_id_or_slug}/teams/{team_id_or_slug}/stats`

**Parameters**

| Name             | Type                                                        | Required | Description        |
| :--------------- | :---------------------------------------------------------- | :------- | :----------------- |
| serieIdOrSlug    | [SerieIdOrSlug](../models/SerieIdOrSlug.md)                 | ✅       | A serie ID or slug |
| teamIdOrSlug     | [TeamIdOrSlug](../models/TeamIdOrSlug.md)                   | ✅       | A team ID or slug  |
| videogameVersion | [VideogameVersionOrAll](../models/VideogameVersionOrAll.md) | ❌       |                    |

**Return Type**

`ValorantStatsForTeamBySerie`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 10;
const teamIdOrSlug = 3;
const videogameVersionOrAll = "2815.4.300196";

  const { data } = await pandascore.valorantStats.getValorantSeriesSerieIdOrSlugTeamsTeamIdOrSlugStats(
  ,
  ,
  {
		videogameVersion: videogameVersion,
  }
);

  console.log(data);
})();
```

## get_valorant_teams_teamIdOrSlug_stats

Get a Valorant team stats by ID or slug

- HTTP Method: `GET`
- Endpoint: `/valorant/teams/{team_id_or_slug}/stats`

**Parameters**

| Name             | Type                                                        | Required | Description            |
| :--------------- | :---------------------------------------------------------- | :------- | :--------------------- |
| teamIdOrSlug     | [TeamIdOrSlug](../models/TeamIdOrSlug.md)                   | ✅       | A team ID or slug      |
| videogameVersion | [VideogameVersionOrAll](../models/VideogameVersionOrAll.md) | ❌       |                        |
| from\_           | string                                                      | ❌       | Filter out 'from' date |
| to               | string                                                      | ❌       | Filter out 'to' date   |

**Return Type**

`ValorantStatsForTeam`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const teamIdOrSlug = 3;
const videogameVersionOrAll = "2815.4.300196";

  const { data } = await pandascore.valorantStats.getValorantTeamsTeamIdOrSlugStats(
  ,
  {
		videogameVersion: videogameVersion,
    from_: "2017-07-21",
    to: "2017-07-21",
  }
);

  console.log(data);
})();
```

## get_valorant_tournaments_tournamentIdOrSlug_players_playerIdOrSlug_stats

Get the aggregated player statistics for a Valorant tournament

- HTTP Method: `GET`
- Endpoint: `/valorant/tournaments/{tournament_id_or_slug}/players/{player_id_or_slug}/stats`

**Parameters**

| Name               | Type                                                        | Required | Description             |
| :----------------- | :---------------------------------------------------------- | :------- | :---------------------- |
| tournamentIdOrSlug | [TournamentIdOrSlug](../models/TournamentIdOrSlug.md)       | ✅       | A tournament ID or slug |
| playerIdOrSlug     | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md)               | ✅       | A player ID or slug     |
| videogameVersion   | [VideogameVersionOrAll](../models/VideogameVersionOrAll.md) | ❌       |                         |

**Return Type**

`ValorantStatsForPlayerByTournament`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 10;
const playerIdOrSlug = 2;
const videogameVersionOrAll = "2815.4.300196";

  const { data } = await pandascore.valorantStats.getValorantTournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStats(
  ,
  ,
  {
		videogameVersion: videogameVersion,
  }
);

  console.log(data);
})();
```

## get_valorant_tournaments_tournamentIdOrSlug_teams_teamIdOrSlug_stats

Get the aggregated team statistics for a Valorant tournament

- HTTP Method: `GET`
- Endpoint: `/valorant/tournaments/{tournament_id_or_slug}/teams/{team_id_or_slug}/stats`

**Parameters**

| Name               | Type                                                        | Required | Description             |
| :----------------- | :---------------------------------------------------------- | :------- | :---------------------- |
| tournamentIdOrSlug | [TournamentIdOrSlug](../models/TournamentIdOrSlug.md)       | ✅       | A tournament ID or slug |
| teamIdOrSlug       | [TeamIdOrSlug](../models/TeamIdOrSlug.md)                   | ✅       | A team ID or slug       |
| videogameVersion   | [VideogameVersionOrAll](../models/VideogameVersionOrAll.md) | ❌       |                         |

**Return Type**

`ValorantStatsForTeamByTournament`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 10;
const teamIdOrSlug = 3;
const videogameVersionOrAll = "2815.4.300196";

  const { data } = await pandascore.valorantStats.getValorantTournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStats(
  ,
  ,
  {
		videogameVersion: videogameVersion,
  }
);

  console.log(data);
})();
```
