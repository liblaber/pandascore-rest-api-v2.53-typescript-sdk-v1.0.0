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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const matchIdOrSlug = 6;

  const { data } = await pandascore.dota2Stats.getDota2MatchesMatchIdOrSlugPlayersStats();

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
| from\_         | string                                                                                        | ❌       | Filter out 'from' date                                                                                                                                         |
| to             | string                                                                                        | ❌       | Filter out 'to' date                                                                                                                                           |

**Return Type**

`Dota2StatsForPlayer`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const playerIdOrSlug = 2;
const side = GetDota2PlayersPlayerIdOrSlugStatsSide.radiant;

  const { data } = await pandascore.dota2Stats.getDota2PlayersPlayerIdOrSlugStats(
  ,
  {
    gamesCount: 2,
		side: side,
    from_: "2017-07-21",
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 10;
const playerIdOrSlug = 2;
const side = GetDota2PlayersPlayerIdOrSlugStatsSide.radiant;

  const { data } = await pandascore.dota2Stats.getDota2SeriesSerieIdOrSlugPlayersPlayerIdOrSlugStats(
  ,
  ,
  {
    gamesCount: 10,
		side: side,
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 10;
const teamIdOrSlug = 3;
const side = GetDota2PlayersPlayerIdOrSlugStatsSide.radiant;

  const { data } = await pandascore.dota2Stats.getDota2SeriesSerieIdOrSlugTeamsTeamIdOrSlugStats(
  ,
  ,
  {
    gamesCount: 5,
		side: side,
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
| from\_       | string                                                                                        | ❌       | Filter out 'from' date                                                                                                                                         |
| to           | string                                                                                        | ❌       | Filter out 'to' date                                                                                                                                           |

**Return Type**

`Dota2StatsForTeam`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const teamIdOrSlug = 3;
const side = GetDota2PlayersPlayerIdOrSlugStatsSide.radiant;

  const { data } = await pandascore.dota2Stats.getDota2TeamsTeamIdOrSlugStats(
  ,
  {
    gamesCount: 7,
		side: side,
    from_: "2017-07-21",
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 10;
const playerIdOrSlug = 2;
const side = GetDota2PlayersPlayerIdOrSlugStatsSide.radiant;

  const { data } = await pandascore.dota2Stats.getDota2TournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStats(
  ,
  ,
  {
    gamesCount: 3,
		side: side,
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 10;
const teamIdOrSlug = 3;
const side = GetDota2PlayersPlayerIdOrSlugStatsSide.radiant;

  const { data } = await pandascore.dota2Stats.getDota2TournamentsTournamentIdOrSlugTeamsTeamIdOrSlugStats(
  ,
  ,
  {
    gamesCount: 10,
		side: side,
  }
);

  console.log(data);
})();
```
