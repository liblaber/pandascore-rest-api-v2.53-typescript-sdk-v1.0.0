# CounterStrikeGamesService

A list of all methods in the `CounterStrikeGamesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                       | Description                                 |
| :---------------------------------------------------------------------------- | :------------------------------------------ |
| [get_csgo_games_csgoGameId](#get_csgo_games_csgogameid)                       | Get a single Counter-Strike game by ID      |
| [get_csgo_games_csgoGameId_events](#get_csgo_games_csgogameid_events)         | List events for a given Counter-Strike game |
| [get_csgo_games_csgoGameId_rounds](#get_csgo_games_csgogameid_rounds)         | List rounds in a Counter-Strike game        |
| [get_csgo_matches_matchIdOrSlug_games](#get_csgo_matches_matchidorslug_games) | List games for a given Counter-Strike match |

## get_csgo_games_csgoGameId

Get a single Counter-Strike game by ID

- HTTP Method: `GET`
- Endpoint: `/csgo/games/{csgo_game_id}`

**Parameters**

| Name       | Type   | Required | Description              |
| :--------- | :----- | :------- | :----------------------- |
| csgoGameId | number | ✅       | A Counter-Strike game ID |

**Return Type**

`CsgoGame`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pandascore.counterStrikeGames.getCsgoGamesCsgoGameId(10);

  console.log(data);
})();
```

## get_csgo_games_csgoGameId_events

List events for a given Counter-Strike game

- HTTP Method: `GET`
- Endpoint: `/csgo/games/{csgo_game_id}/events`

**Parameters**

| Name       | Type                      | Required | Description                                                          |
| :--------- | :------------------------ | :------- | :------------------------------------------------------------------- |
| csgoGameId | number                    | ✅       | A Counter-Strike game ID                                             |
| page       | [Page](../models/Page.md) | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2` |
| perPage    | number                    | ❌       | Equivalent to `page[size]`                                           |

**Return Type**

`CsgoEvent[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const page = 1;

  const { data } = await pandascore.counterStrikeGames.getCsgoGamesCsgoGameIdEvents(3, {
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_csgo_games_csgoGameId_rounds

List rounds in a Counter-Strike game

- HTTP Method: `GET`
- Endpoint: `/csgo/games/{csgo_game_id}/rounds`

**Parameters**

| Name       | Type                      | Required | Description                                                          |
| :--------- | :------------------------ | :------- | :------------------------------------------------------------------- |
| csgoGameId | number                    | ✅       | A Counter-Strike game ID                                             |
| page       | [Page](../models/Page.md) | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2` |
| perPage    | number                    | ❌       | Equivalent to `page[size]`                                           |

**Return Type**

`CsgoFullRound[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const page = 1;

  const { data } = await pandascore.counterStrikeGames.getCsgoGamesCsgoGameIdRounds(7, {
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_csgo_matches_matchIdOrSlug_games

List games for a given Counter-Strike match

- HTTP Method: `GET`
- Endpoint: `/csgo/matches/{match_id_or_slug}/games`

**Parameters**

| Name          | Type                                                    | Required | Description                                                                                                                                         |
| :------------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| matchIdOrSlug | [MatchIdOrSlug](../models/MatchIdOrSlug.md)             | ✅       | A match ID or slug                                                                                                                                  |
| filter        | [FilterOverCsgoGames](../models/FilterOverCsgoGames.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range         | [RangeOverCsgoGames](../models/RangeOverCsgoGames.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort          | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search        | [SearchOverCsgoGames](../models/SearchOverCsgoGames.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page          | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage       | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`CsgoGame[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchIdOrSlug = 6;
const gameStatus = GameStatus.finished;

const filter: FilterOverCsgoGames = {
  beginAt: ["in"],
  complete: true,
  detailedStats: true,
  endAt: ["magna e"],
  finished: true,
  forfeit: true,
  id: [2],
  length: [6],
  matchId: [7],
  position: [9],
  status: [gameStatus]
};
const gameStatus = GameStatus.finished;

const range: RangeOverCsgoGames = {
  beginAt: ["vol"],
  complete: [true],
  detailedStats: [true],
  endAt: ["q"],
  finished: [true],
  forfeit: [true],
  id: [5],
  length: [1],
  matchId: [10],
  position: [2],
  status: [gameStatus]
};
const gameStatus = GameStatus.finished;

const search: SearchOverCsgoGames = {
  status: gameStatus
};
const page = 1;

  const { data } = await pandascore.counterStrikeGames.getCsgoMatchesMatchIdOrSlugGames(
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
