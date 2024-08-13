# LoLGamesService

A list of all methods in the `LoLGamesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                     | Description                                            |
| :-------------------------------------------------------------------------- | :----------------------------------------------------- |
| [get_lol_games_lolGameId](#get_lol_games_lolgameid)                         | Get a single League of Legends game by ID              |
| [get_lol_games_lolGameId_events](#get_lol_games_lolgameid_events)           | List events for a given League of Legends game         |
| [get_lol_games_lolGameId_frames](#get_lol_games_lolgameid_frames)           | List frames for a given League of Legends game         |
| [get_lol_matches_matchIdOrSlug_games](#get_lol_matches_matchidorslug_games) | List games for a given League of Legends match         |
| [get_lol_teams_teamIdOrSlug_games](#get_lol_teams_teamidorslug_games)       | List finished games for a given League of Legends team |

## get_lol_games_lolGameId

Get a single League of Legends game by ID

- HTTP Method: `GET`
- Endpoint: `/lol/games/{lol_game_id}`

**Parameters**

| Name      | Type   | Required | Description   |
| :-------- | :----- | :------- | :------------ |
| lolGameId | number | ✅       | A LoL game ID |

**Return Type**

`LoLGame`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pandascoreClient.loLGames.getLolGamesLolGameId(8);

  console.log(data);
})();
```

## get_lol_games_lolGameId_events

List events for a given League of Legends game

- HTTP Method: `GET`
- Endpoint: `/lol/games/{lol_game_id}/events`

**Parameters**

| Name      | Type                      | Required | Description                                                          |
| :-------- | :------------------------ | :------- | :------------------------------------------------------------------- |
| lolGameId | number                    | ✅       | A LoL game ID                                                        |
| page      | [Page](../models/Page.md) | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2` |
| perPage   | number                    | ❌       | Equivalent to `page[size]`                                           |

**Return Type**

`LoLGameEvent[]`

**Example Usage Code Snippet**

```typescript
import { Page, PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const page = 1;

  const { data } = await pandascoreClient.loLGames.getLolGamesLolGameIdEvents(2, {
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_lol_games_lolGameId_frames

List frames for a given League of Legends game

- HTTP Method: `GET`
- Endpoint: `/lol/games/{lol_game_id}/frames`

**Parameters**

| Name      | Type                      | Required | Description                                                          |
| :-------- | :------------------------ | :------- | :------------------------------------------------------------------- |
| lolGameId | number                    | ✅       | A LoL game ID                                                        |
| page      | [Page](../models/Page.md) | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2` |
| perPage   | number                    | ❌       | Equivalent to `page[size]`                                           |

**Return Type**

`LoLGameFrame[]`

**Example Usage Code Snippet**

```typescript
import { Page, PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const page = 1;

  const { data } = await pandascoreClient.loLGames.getLolGamesLolGameIdFrames(5, {
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_lol_matches_matchIdOrSlug_games

List games for a given League of Legends match

- HTTP Method: `GET`
- Endpoint: `/lol/matches/{match_id_or_slug}/games`

**Parameters**

| Name          | Type                                                  | Required | Description                                                                                                                                         |
| :------------ | :---------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| matchIdOrSlug | [MatchIdOrSlug](../models/MatchIdOrSlug.md)           | ✅       | A match ID or slug                                                                                                                                  |
| filter        | [FilterOverLoLGames](../models/FilterOverLoLGames.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range         | [RangeOverLoLGames](../models/RangeOverLoLGames.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort          | any[]                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search        | [SearchOverLoLGames](../models/SearchOverLoLGames.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page          | [Page](../models/Page.md)                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage       | number                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`LoLGame[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverLoLGames, GameStatus, MatchIdOrSlug, OpponentType, Page, PandascoreClient, RangeOverLoLGames, SearchOverLoLGames } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchIdOrSlug = 5;
const gameStatus = GameStatus.FINISHED;

const opponentType = OpponentType.PLAYER;

const filterOverLoLGames: FilterOverLoLGames = {
  beginAt: ["eiusmod "],
  complete: true,
  detailedStats: true,
  endAt: ["veniam"],
  finished: true,
  forfeit: true,
  id: [5],
  length: [4],
  matchId: [7],
  position: [6],
  status: [gameStatus],
  winnerType: [opponentType]
};
const gameStatus1 = GameStatus.FINISHED;

const opponentType1 = OpponentType.PLAYER;

const rangeOverLoLGames: RangeOverLoLGames = {
  beginAt: ["velit l"],
  complete: [true],
  detailedStats: [true],
  endAt: ["consequat sin"],
  finished: [true],
  forfeit: [true],
  id: [5],
  length: [3],
  matchId: [7],
  position: [2],
  status: [gameStatus1],
  winnerType: [opponentType1]
};
const gameStatus12 = GameStatus.FINISHED;

const opponentType12 = OpponentType.PLAYER;

const searchOverLoLGames: SearchOverLoLGames = {
  status: gameStatus12,
  winnerType: opponentType12
};
const page = 1;

  const { data } = await pandascoreClient.loLGames.getLolMatchesMatchIdOrSlugGames(
  ,
  {
		filter: filterOverLoLGames,
		range: rangeOverLoLGames,
    sort: [[]],
		search: searchOverLoLGames,
		page: page,
    perPage: 50,
  }
);

  console.log(data);
})();
```

## get_lol_teams_teamIdOrSlug_games

List finished games for a given League of Legends team

- HTTP Method: `GET`
- Endpoint: `/lol/teams/{team_id_or_slug}/games`

**Parameters**

| Name         | Type                                                                  | Required | Description                                                                                                                                         |
| :----------- | :-------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| teamIdOrSlug | [TeamIdOrSlug](../models/TeamIdOrSlug.md)                             | ✅       | A team ID or slug                                                                                                                                   |
| filter       | [FilterOverLoLTeamLastGames](../models/FilterOverLoLTeamLastGames.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range        | [RangeOverLoLTeamLastGames](../models/RangeOverLoLTeamLastGames.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort         | any[]                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search       | [SearchOverLoLTeamLastGames](../models/SearchOverLoLTeamLastGames.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page         | [Page](../models/Page.md)                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage      | number                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`LoLTeamLastGame[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverLoLTeamLastGames, GameStatus, OpponentType, Page, PandascoreClient, RangeOverLoLTeamLastGames, SearchOverLoLTeamLastGames, TeamIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const teamIdOrSlug = 10;
const gameStatus = GameStatus.FINISHED;

const opponentType = OpponentType.PLAYER;

const filterOverLoLTeamLastGames: FilterOverLoLTeamLastGames = {
  beginAt: ["ut cillum Exc"],
  complete: true,
  detailedStats: true,
  endAt: ["cillum id nul"],
  finished: true,
  forfeit: true,
  id: [6],
  length: [7],
  matchId: [1],
  position: [8],
  status: [gameStatus],
  winnerType: [opponentType]
};
const gameStatus1 = GameStatus.FINISHED;

const opponentType1 = OpponentType.PLAYER;

const rangeOverLoLTeamLastGames: RangeOverLoLTeamLastGames = {
  beginAt: ["el"],
  complete: [true],
  detailedStats: [true],
  endAt: ["labor"],
  finished: [true],
  forfeit: [true],
  id: [6],
  length: [9],
  matchId: [7],
  position: [4],
  status: [gameStatus1],
  winnerType: [opponentType1]
};
const gameStatus12 = GameStatus.FINISHED;

const opponentType12 = OpponentType.PLAYER;

const searchOverLoLTeamLastGames: SearchOverLoLTeamLastGames = {
  status: gameStatus12,
  winnerType: opponentType12
};
const page = 1;

  const { data } = await pandascoreClient.loLGames.getLolTeamsTeamIdOrSlugGames(
  ,
  {
		filter: filterOverLoLTeamLastGames,
		range: rangeOverLoLTeamLastGames,
    sort: [[]],
		search: searchOverLoLTeamLastGames,
		page: page,
    perPage: 50,
  }
);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
