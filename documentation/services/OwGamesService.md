# OwGamesService

A list of all methods in the `OwGamesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                   | Description                            |
| :------------------------------------------------------------------------ | :------------------------------------- |
| [get_ow_games_owGameId](#get_ow_games_owgameid)                           | Get a single Overwatch game by ID      |
| [get_ow_matches_matchIdOrSlug_games](#get_ow_matches_matchidorslug_games) | List games for a given Overwatch match |

## get_ow_games_owGameId

Get a single Overwatch game by ID

- HTTP Method: `GET`
- Endpoint: `/ow/games/{ow_game_id}`

**Parameters**

| Name     | Type   | Required | Description          |
| :------- | :----- | :------- | :------------------- |
| owGameId | number | ✅       | An Overwatch game ID |

**Return Type**

`OwGame`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pandascoreClient.owGames.getOwGamesOwGameId(1);

  console.log(data);
})();
```

## get_ow_matches_matchIdOrSlug_games

List games for a given Overwatch match

- HTTP Method: `GET`
- Endpoint: `/ow/matches/{match_id_or_slug}/games`

**Parameters**

| Name          | Type                                                | Required | Description                                                                                                                                         |
| :------------ | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| matchIdOrSlug | [MatchIdOrSlug](../models/MatchIdOrSlug.md)         | ✅       | A match ID or slug                                                                                                                                  |
| filter        | [FilterOverOwGames](../models/FilterOverOwGames.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range         | [RangeOverOwGames](../models/RangeOverOwGames.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort          | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search        | [SearchOverOwGames](../models/SearchOverOwGames.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page          | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage       | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`OwGame[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverOwGames, GameStatus, MatchIdOrSlug, OpponentType, Page, PandascoreClient, RangeOverOwGames, SearchOverOwGames } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchIdOrSlug = 4;
const gameStatus = GameStatus.FINISHED;

const opponentType = OpponentType.PLAYER;

const filter: FilterOverOwGames = {
  beginAt: ["qu"],
  complete: true,
  detailedStats: true,
  endAt: ["dolor nulla"],
  finished: true,
  forfeit: true,
  id: [4],
  length: [8],
  matchId: [4],
  position: [5],
  status: [gameStatus],
  winnerType: [opponentType]
};
const gameStatus = GameStatus.FINISHED;

const opponentType = OpponentType.PLAYER;

const range: RangeOverOwGames = {
  beginAt: ["incidid"],
  complete: [true],
  detailedStats: [true],
  endAt: ["nostrud"],
  finished: [true],
  forfeit: [true],
  id: [3],
  length: [2],
  matchId: [3],
  position: [6],
  status: [gameStatus],
  winnerType: [opponentType]
};
const gameStatus = GameStatus.FINISHED;

const opponentType = OpponentType.PLAYER;

const search: SearchOverOwGames = {
  status: gameStatus,
  winnerType: opponentType
};
const page = 1;

  const { data } = await pandascoreClient.owGames.getOwMatchesMatchIdOrSlugGames(
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

<!-- This file was generated by liblab | https://liblab.com/ -->
