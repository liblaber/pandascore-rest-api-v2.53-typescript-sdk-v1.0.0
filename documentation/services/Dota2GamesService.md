# Dota2GamesService

A list of all methods in the `Dota2GamesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                         | Description                                 |
| :------------------------------------------------------------------------------ | :------------------------------------------ |
| [get_dota2_games_dota2GameId](#get_dota2_games_dota2gameid)                     | Get a single Dota 2 game by ID              |
| [get_dota2_games_dota2GameId_frames](#get_dota2_games_dota2gameid_frames)       | List frames for a given Dota 2 game         |
| [get_dota2_matches_matchIdOrSlug_games](#get_dota2_matches_matchidorslug_games) | List games for a given Dota 2 match         |
| [get_dota2_teams_teamIdOrSlug_games](#get_dota2_teams_teamidorslug_games)       | List finished games for a given Dota 2 team |

## get_dota2_games_dota2GameId

Get a single Dota 2 game by ID

- HTTP Method: `GET`
- Endpoint: `/dota2/games/{dota2_game_id}`

**Parameters**

| Name        | Type   | Required | Description |
| :---------- | :----- | :------- | :---------- |
| dota2GameId | number | ✅       | A game ID   |

**Return Type**

`Dota2Game`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pandascoreClient.dota2Games.getDota2GamesDota2GameId(7);

  console.log(data);
})();
```

## get_dota2_games_dota2GameId_frames

List frames for a given Dota 2 game

- HTTP Method: `GET`
- Endpoint: `/dota2/games/{dota2_game_id}/frames`

**Parameters**

| Name        | Type                      | Required | Description                                                          |
| :---------- | :------------------------ | :------- | :------------------------------------------------------------------- |
| dota2GameId | number                    | ✅       | A game ID                                                            |
| page        | [Page](../models/Page.md) | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2` |
| perPage     | number                    | ❌       | Equivalent to `page[size]`                                           |

**Return Type**

`Dota2Frame[]`

**Example Usage Code Snippet**

```typescript
import { Page, PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const page = 1;

  const { data } = await pandascoreClient.dota2Games.getDota2GamesDota2GameIdFrames(5, {
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_dota2_matches_matchIdOrSlug_games

List games for a given Dota 2 match

- HTTP Method: `GET`
- Endpoint: `/dota2/matches/{match_id_or_slug}/games`

**Parameters**

| Name          | Type                                                      | Required | Description                                                                                                                                         |
| :------------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| matchIdOrSlug | [MatchIdOrSlug](../models/MatchIdOrSlug.md)               | ✅       | A match ID or slug                                                                                                                                  |
| filter        | [FilterOverDota2Games](../models/FilterOverDota2Games.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range         | [RangeOverDota2Games](../models/RangeOverDota2Games.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort          | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search        | [SearchOverDota2Games](../models/SearchOverDota2Games.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page          | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage       | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Dota2Game[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverDota2Games, GameStatus, MatchIdOrSlug, OpponentType, Page, PandascoreClient, RangeOverDota2Games, SearchOverDota2Games } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchIdOrSlug = 5;
const gameStatus = GameStatus.FINISHED;

const opponentType = OpponentType.PLAYER;

const filterOverDota2Games: FilterOverDota2Games = {
  beginAt: ["ad"],
  complete: true,
  detailedStats: true,
  endAt: ["laboris "],
  finished: true,
  firstBlood: [7],
  forfeit: true,
  id: [5],
  length: [2],
  matchId: [10],
  position: [2],
  status: [gameStatus],
  winnerType: [opponentType]
};
const gameStatus1 = GameStatus.FINISHED;

const opponentType1 = OpponentType.PLAYER;

const rangeOverDota2Games: RangeOverDota2Games = {
  beginAt: ["Ut"],
  complete: [true],
  detailedStats: [true],
  endAt: ["cillum"],
  finished: [true],
  firstBlood: [6],
  forfeit: [true],
  id: [4],
  length: [9],
  matchId: [2],
  position: [1],
  status: [gameStatus1],
  winnerType: [opponentType1]
};
const gameStatus12 = GameStatus.FINISHED;

const opponentType12 = OpponentType.PLAYER;

const searchOverDota2Games: SearchOverDota2Games = {
  status: gameStatus12,
  winnerType: opponentType12
};
const page = 1;

  const { data } = await pandascoreClient.dota2Games.getDota2MatchesMatchIdOrSlugGames(
  ,
  {
		filter: filterOverDota2Games,
		range: rangeOverDota2Games,
    sort: [[]],
		search: searchOverDota2Games,
		page: page,
    perPage: 50,
  }
);

  console.log(data);
})();
```

## get_dota2_teams_teamIdOrSlug_games

List finished games for a given Dota 2 team

- HTTP Method: `GET`
- Endpoint: `/dota2/teams/{team_id_or_slug}/games`

**Parameters**

| Name         | Type                                      | Required | Description                                                          |
| :----------- | :---------------------------------------- | :------- | :------------------------------------------------------------------- |
| teamIdOrSlug | [TeamIdOrSlug](../models/TeamIdOrSlug.md) | ✅       | A team ID or slug                                                    |
| page         | [Page](../models/Page.md)                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2` |
| perPage      | number                                    | ❌       | Equivalent to `page[size]`                                           |

**Return Type**

`BaseDota2Game[]`

**Example Usage Code Snippet**

```typescript
import { Page, PandascoreClient, TeamIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const teamIdOrSlug = 10;
const page = 1;

  const { data } = await pandascoreClient.dota2Games.getDota2TeamsTeamIdOrSlugGames(
  ,
  {
		page: page,
    perPage: 50,
  }
);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
