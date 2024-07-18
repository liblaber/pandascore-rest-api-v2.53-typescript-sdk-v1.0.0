# OwStatsService

A list of all methods in the `OwStatsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                                                                   | Description                                                                   |
| :---------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| [get_ow_games_owGameId_players_playerIdOrSlug_stats](#get_ow_games_owgameid_players_playeridorslug_stats)                                 | Get detailed statistics of a given Overwatch given player for the given game  |
| [get_ow_matches_matchIdOrSlug_players_stats](#get_ow_matches_matchidorslug_players_stats)                                                 | Get detailed statistics of Overwatch players for the given match              |
| [get_ow_matches_matchIdOrSlug_players_playerIdOrSlug_stats](#get_ow_matches_matchidorslug_players_playeridorslug_stats)                   | Get detailed statistics of a given Overwatch given player for the given match |
| [get_ow_players_playerIdOrSlug_stats](#get_ow_players_playeridorslug_stats)                                                               | Get detailed statistics of a given Overwatch player                           |
| [get_ow_series_serieIdOrSlug_players_playerIdOrSlug_stats](#get_ow_series_serieidorslug_players_playeridorslug_stats)                     | Get detailed statistics of a given Overwatch given player for the given serie |
| [get_ow_tournaments_tournamentIdOrSlug_players_playerIdOrSlug_stats](#get_ow_tournaments_tournamentidorslug_players_playeridorslug_stats) | Get detailed statistics of a given Overwatch player for the given tournament  |

## get_ow_games_owGameId_players_playerIdOrSlug_stats

Get detailed statistics of a given Overwatch given player for the given game

- HTTP Method: `GET`
- Endpoint: `/ow/games/{ow_game_id}/players/{player_id_or_slug}/stats`

**Parameters**

| Name           | Type                                          | Required | Description          |
| :------------- | :-------------------------------------------- | :------- | :------------------- |
| owGameId       | number                                        | ✅       | An Overwatch game ID |
| playerIdOrSlug | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md) | ✅       | A player ID or slug  |

**Return Type**

`OwStatsForPlayerByGame`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const playerIdOrSlug = 7;

  const { data } = await pandascoreClient.owStats.getOwGamesOwGameIdPlayersPlayerIdOrSlugStats(3);

  console.log(data);
})();
```

## get_ow_matches_matchIdOrSlug_players_stats

Get detailed statistics of Overwatch players for the given match

- HTTP Method: `GET`
- Endpoint: `/ow/matches/{match_id_or_slug}/players/stats`

**Parameters**

| Name          | Type                                        | Required | Description        |
| :------------ | :------------------------------------------ | :------- | :----------------- |
| matchIdOrSlug | [MatchIdOrSlug](../models/MatchIdOrSlug.md) | ✅       | A match ID or slug |

**Return Type**

`OwStatsForAllPlayersByMatch`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchIdOrSlug = 2;

  const { data } = await pandascoreClient.owStats.getOwMatchesMatchIdOrSlugPlayersStats();

  console.log(data);
})();
```

## get_ow_matches_matchIdOrSlug_players_playerIdOrSlug_stats

Get detailed statistics of a given Overwatch given player for the given match

- HTTP Method: `GET`
- Endpoint: `/ow/matches/{match_id_or_slug}/players/{player_id_or_slug}/stats`

**Parameters**

| Name           | Type                                          | Required | Description         |
| :------------- | :-------------------------------------------- | :------- | :------------------ |
| matchIdOrSlug  | [MatchIdOrSlug](../models/MatchIdOrSlug.md)   | ✅       | A match ID or slug  |
| playerIdOrSlug | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md) | ✅       | A player ID or slug |

**Return Type**

`OwStatsForPlayerByMatch`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchIdOrSlug = 2;
const playerIdOrSlug = 7;

  const { data } = await pandascoreClient.owStats.getOwMatchesMatchIdOrSlugPlayersPlayerIdOrSlugStats(
  ,

);

  console.log(data);
})();
```

## get_ow_players_playerIdOrSlug_stats

Get detailed statistics of a given Overwatch player

- HTTP Method: `GET`
- Endpoint: `/ow/players/{player_id_or_slug}/stats`

**Parameters**

| Name           | Type                                          | Required | Description            |
| :------------- | :-------------------------------------------- | :------- | :--------------------- |
| playerIdOrSlug | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md) | ✅       | A player ID or slug    |
| from           | string                                        | ❌       | Filter out 'from' date |
| to             | string                                        | ❌       | Filter out 'to' date   |

**Return Type**

`OwStatsForPlayer`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const playerIdOrSlug = 7;

  const { data } = await pandascoreClient.owStats.getOwPlayersPlayerIdOrSlugStats(
  ,
  {
    from: "2017-07-21",
    to: "2017-07-21",
  }
);

  console.log(data);
})();
```

## get_ow_series_serieIdOrSlug_players_playerIdOrSlug_stats

Get detailed statistics of a given Overwatch given player for the given serie

- HTTP Method: `GET`
- Endpoint: `/ow/series/{serie_id_or_slug}/players/{player_id_or_slug}/stats`

**Parameters**

| Name           | Type                                          | Required | Description         |
| :------------- | :-------------------------------------------- | :------- | :------------------ |
| serieIdOrSlug  | [SerieIdOrSlug](../models/SerieIdOrSlug.md)   | ✅       | A serie ID or slug  |
| playerIdOrSlug | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md) | ✅       | A player ID or slug |

**Return Type**

`OwStatsForPlayerBySerie`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 1;
const playerIdOrSlug = 7;

  const { data } = await pandascoreClient.owStats.getOwSeriesSerieIdOrSlugPlayersPlayerIdOrSlugStats(
  ,

);

  console.log(data);
})();
```

## get_ow_tournaments_tournamentIdOrSlug_players_playerIdOrSlug_stats

Get detailed statistics of a given Overwatch player for the given tournament

- HTTP Method: `GET`
- Endpoint: `/ow/tournaments/{tournament_id_or_slug}/players/{player_id_or_slug}/stats`

**Parameters**

| Name               | Type                                                  | Required | Description             |
| :----------------- | :---------------------------------------------------- | :------- | :---------------------- |
| tournamentIdOrSlug | [TournamentIdOrSlug](../models/TournamentIdOrSlug.md) | ✅       | A tournament ID or slug |
| playerIdOrSlug     | [PlayerIdOrSlug](../models/PlayerIdOrSlug.md)         | ✅       | A player ID or slug     |

**Return Type**

`OwStatsForPlayerByTournament`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const tournamentIdOrSlug = 10;
const playerIdOrSlug = 7;

  const { data } = await pandascoreClient.owStats.getOwTournamentsTournamentIdOrSlugPlayersPlayerIdOrSlugStats(
  ,

);

  console.log(data);
})();
```
