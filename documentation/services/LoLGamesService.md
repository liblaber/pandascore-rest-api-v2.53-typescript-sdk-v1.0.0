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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pandascore.loLGames.getLolGamesLolGameId(8);

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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const page = 1;

  const { data } = await pandascore.loLGames.getLolGamesLolGameIdEvents(7, {
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const page = 1;

  const { data } = await pandascore.loLGames.getLolGamesLolGameIdFrames(4, {
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchIdOrSlug = 6;
const gameStatus = GameStatus.finished;

const opponentType = OpponentType.Player;

const filter: FilterOverLoLGames = {
  beginAt: ["commodo magna "],
  complete: true,
  detailedStats: true,
  endAt: ["e"],
  finished: true,
  forfeit: true,
  id: [8],
  length: [123],
  matchId: [8],
  position: [8],
  status: [gameStatus],
  winnerType: [opponentType]
};
const gameStatus = GameStatus.finished;

const opponentType = OpponentType.Player;

const range: RangeOverLoLGames = {
  beginAt: ["cillum"],
  complete: [true],
  detailedStats: [true],
  endAt: ["velit mollit"],
  finished: [true],
  forfeit: [true],
  id: [3],
  length: [8],
  matchId: [1],
  position: [3],
  status: [gameStatus],
  winnerType: [opponentType]
};
const gameStatus = GameStatus.finished;

const opponentType = OpponentType.Player;

const search: SearchOverLoLGames = {
  status: gameStatus,
  winnerType: opponentType
};
const page = 1;

  const { data } = await pandascore.loLGames.getLolMatchesMatchIdOrSlugGames(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const teamIdOrSlug = 3;
const gameStatus = GameStatus.finished;

const opponentType = OpponentType.Player;

const filter: FilterOverLoLTeamLastGames = {
  beginAt: ["non adi"],
  complete: true,
  detailedStats: true,
  endAt: ["ex enim occ"],
  finished: true,
  forfeit: true,
  id: [2],
  length: [6],
  matchId: [7],
  position: [2],
  status: [gameStatus],
  winnerType: [opponentType]
};
const gameStatus = GameStatus.finished;

const opponentType = OpponentType.Player;

const range: RangeOverLoLTeamLastGames = {
  beginAt: ["cupidatat labor"],
  complete: [true],
  detailedStats: [true],
  endAt: ["tem"],
  finished: [true],
  forfeit: [true],
  id: [6],
  length: [9],
  matchId: [4],
  position: [9],
  status: [gameStatus],
  winnerType: [opponentType]
};
const gameStatus = GameStatus.finished;

const opponentType = OpponentType.Player;

const search: SearchOverLoLTeamLastGames = {
  status: gameStatus,
  winnerType: opponentType
};
const page = 1;

  const { data } = await pandascore.loLGames.getLolTeamsTeamIdOrSlugGames(
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
