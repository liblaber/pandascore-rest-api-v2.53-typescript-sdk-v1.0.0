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

  const { data } = await pandascoreClient.loLGames.getLolGamesLolGameId(9);

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

  const { data } = await pandascoreClient.loLGames.getLolGamesLolGameIdEvents(8, {
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

  const { data } = await pandascoreClient.loLGames.getLolGamesLolGameIdFrames(9, {
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

  const matchIdOrSlug = 4;
const gameStatus = GameStatus.FINISHED;

const opponentType = OpponentType.PLAYER;

const filter: FilterOverLoLGames = {
  beginAt: ["consectetur la"],
  complete: true,
  detailedStats: true,
  endAt: ["temp"],
  finished: true,
  forfeit: true,
  id: [3],
  length: [3],
  matchId: [8],
  position: [9],
  status: [gameStatus],
  winnerType: [opponentType]
};
const gameStatus = GameStatus.FINISHED;

const opponentType = OpponentType.PLAYER;

const range: RangeOverLoLGames = {
  beginAt: ["voluptate"],
  complete: [true],
  detailedStats: [true],
  endAt: ["ut"],
  finished: [true],
  forfeit: [true],
  id: [10],
  length: [6],
  matchId: [2],
  position: [6],
  status: [gameStatus],
  winnerType: [opponentType]
};
const gameStatus = GameStatus.FINISHED;

const opponentType = OpponentType.PLAYER;

const search: SearchOverLoLGames = {
  status: gameStatus,
  winnerType: opponentType
};
const page = 1;

  const { data } = await pandascoreClient.loLGames.getLolMatchesMatchIdOrSlugGames(
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

const filter: FilterOverLoLTeamLastGames = {
  beginAt: ["commodo co"],
  complete: true,
  detailedStats: true,
  endAt: ["velit commodo"],
  finished: true,
  forfeit: true,
  id: [1],
  length: [4],
  matchId: [1],
  position: [3],
  status: [gameStatus],
  winnerType: [opponentType]
};
const gameStatus = GameStatus.FINISHED;

const opponentType = OpponentType.PLAYER;

const range: RangeOverLoLTeamLastGames = {
  beginAt: ["non enim"],
  complete: [true],
  detailedStats: [true],
  endAt: ["quis amet in "],
  finished: [true],
  forfeit: [true],
  id: [2],
  length: [8],
  matchId: [4],
  position: [7],
  status: [gameStatus],
  winnerType: [opponentType]
};
const gameStatus = GameStatus.FINISHED;

const opponentType = OpponentType.PLAYER;

const search: SearchOverLoLTeamLastGames = {
  status: gameStatus,
  winnerType: opponentType
};
const page = 1;

  const { data } = await pandascoreClient.loLGames.getLolTeamsTeamIdOrSlugGames(
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
