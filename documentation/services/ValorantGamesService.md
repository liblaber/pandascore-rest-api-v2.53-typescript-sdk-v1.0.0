# ValorantGamesService

A list of all methods in the `ValorantGamesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                               | Description                           |
| :------------------------------------------------------------------------------------ | :------------------------------------ |
| [get_valorant_games_valorantGameId](#get_valorant_games_valorantgameid)               | Get a single Valorant game by ID      |
| [get_valorant_games_valorantGameId_events](#get_valorant_games_valorantgameid_events) | List events for a given Valorant game |
| [get_valorant_games_valorantGameId_rounds](#get_valorant_games_valorantgameid_rounds) | List rounds in a Valorant game        |
| [get_valorant_matches_matchIdOrSlug_games](#get_valorant_matches_matchidorslug_games) | List games for a given Valorant match |

## get_valorant_games_valorantGameId

Get a single Valorant game by ID

- HTTP Method: `GET`
- Endpoint: `/valorant/games/{valorant_game_id}`

**Parameters**

| Name           | Type   | Required | Description        |
| :------------- | :----- | :------- | :----------------- |
| valorantGameId | number | ✅       | A Valorant game ID |

**Return Type**

`ValorantGame`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pandascore.valorantGames.getValorantGamesValorantGameId(1);

  console.log(data);
})();
```

## get_valorant_games_valorantGameId_events

List events for a given Valorant game

- HTTP Method: `GET`
- Endpoint: `/valorant/games/{valorant_game_id}/events`

**Parameters**

| Name           | Type                      | Required | Description                                                          |
| :------------- | :------------------------ | :------- | :------------------------------------------------------------------- |
| valorantGameId | number                    | ✅       | A Valorant game ID                                                   |
| page           | [Page](../models/Page.md) | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2` |
| perPage        | number                    | ❌       | Equivalent to `page[size]`                                           |

**Return Type**

`ValorantGameEvent[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const page = 1;

  const { data } = await pandascore.valorantGames.getValorantGamesValorantGameIdEvents(9, {
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_valorant_games_valorantGameId_rounds

List rounds in a Valorant game

- HTTP Method: `GET`
- Endpoint: `/valorant/games/{valorant_game_id}/rounds`

**Parameters**

| Name           | Type                      | Required | Description                                                          |
| :------------- | :------------------------ | :------- | :------------------------------------------------------------------- |
| valorantGameId | number                    | ✅       | A Valorant game ID                                                   |
| page           | [Page](../models/Page.md) | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2` |
| perPage        | number                    | ❌       | Equivalent to `page[size]`                                           |

**Return Type**

`ValorantFullRound[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const page = 1;

  const { data } = await pandascore.valorantGames.getValorantGamesValorantGameIdRounds(6, {
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_valorant_matches_matchIdOrSlug_games

List games for a given Valorant match

- HTTP Method: `GET`
- Endpoint: `/valorant/matches/{match_id_or_slug}/games`

**Parameters**

| Name          | Type                                                            | Required | Description                                                                                                                                         |
| :------------ | :-------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| matchIdOrSlug | [MatchIdOrSlug](../models/MatchIdOrSlug.md)                     | ✅       | A match ID or slug                                                                                                                                  |
| filter        | [FilterOverValorantGames](../models/FilterOverValorantGames.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range         | [RangeOverValorantGames](../models/RangeOverValorantGames.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort          | any[]                                                           | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search        | [SearchOverValorantGames](../models/SearchOverValorantGames.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page          | [Page](../models/Page.md)                                       | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage       | number                                                          | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ValorantGame[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchIdOrSlug = 6;
const gameStatus = GameStatus.finished;

const filter: FilterOverValorantGames = {
  beginAt: ["enim in"],
  complete: true,
  detailedStats: true,
  endAt: ["velit "],
  finished: true,
  forfeit: true,
  id: [1],
  length: [2],
  position: [8],
  status: [gameStatus]
};
const gameStatus = GameStatus.finished;

const range: RangeOverValorantGames = {
  beginAt: ["sint"],
  complete: [true],
  detailedStats: [true],
  endAt: ["i"],
  finished: [true],
  forfeit: [true],
  id: [9],
  length: [3],
  position: [3],
  status: [gameStatus]
};
const gameStatus = GameStatus.finished;

const search: SearchOverValorantGames = {
  status: gameStatus
};
const page = 1;

  const { data } = await pandascore.valorantGames.getValorantMatchesMatchIdOrSlugGames(
  ,
  {
		filter: filter,
		range: range,
    sort: [[]],
		search: search,
		page: page,
    perPage: 50,
  }
);

  console.log(data);
})();
```
