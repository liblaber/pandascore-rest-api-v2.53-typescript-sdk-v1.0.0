# StarCraft2MatchesService

A list of all methods in the `StarCraft2MatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                               | Description                                |
| :-------------------------------------------------------------------- | :----------------------------------------- |
| [get_starcraft_2_matches](#get_starcraft_2_matches)                   | List matches for the StarCraft 2 videogame |
| [get_starcraft_2_matches_past](#get_starcraft_2_matches_past)         | List past StarCraft 2 matches              |
| [get_starcraft_2_matches_running](#get_starcraft_2_matches_running)   | List running StarCraft 2 matches           |
| [get_starcraft_2_matches_upcoming](#get_starcraft_2_matches_upcoming) | List upcoming StarCraft 2 matches          |

## get_starcraft_2_matches

List matches for the StarCraft 2 videogame

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/matches`

**Parameters**

| Name    | Type                                                                    | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2Matches](../models/FilterOverStarcraft2Matches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2Matches](../models/RangeOverStarcraft2Matches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2Matches](../models/SearchOverStarcraft2Matches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverStarcraft2MatchesVideogameTitle = 6;

const filterOverStarcraft2MatchesVideogameVersion = "3790.1385610489";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverStarcraft2Matches = {
  beginAt: ["l"],
  detailedStats: true,
  draw: true,
  endAt: ["fugiat"],
  finished: true,
  forfeit: true,
  future: true,
  id: [8],
  leagueId: [4],
  matchType: [matchType],
  modifiedAt: ["dolor"],
  name: ["reprehenderit"],
  notStarted: true,
  numberOfGames: [9],
  opponentId: [filterOverStarcraft2MatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["i"],
  serieId: [5],
  slug: ["BW0"],
  status: [matchStatus],
  tournamentId: [8],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverStarcraft2MatchesVideogameTitle],
  videogameVersion: [filterOverStarcraft2MatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverStarcraft2Matches = {
  beginAt: ["consequat e"],
  detailedStats: [true],
  draw: [true],
  endAt: ["e"],
  forfeit: [true],
  id: [5],
  matchType: [matchType],
  modifiedAt: ["aute "],
  name: ["elit conse"],
  numberOfGames: [2],
  scheduledAt: ["culpa"],
  slug: ["4DQEL"],
  status: [matchStatus],
  tournamentId: [10],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverStarcraft2Matches = {
  matchType: matchType,
  name: "magna ipsum sin",
  slug: "Qli",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.starCraft2Matches.getStarcraft2Matches(
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

## get_starcraft_2_matches_past

List past StarCraft 2 matches

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/matches/past`

**Parameters**

| Name    | Type                                                                    | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2Matches](../models/FilterOverStarcraft2Matches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2Matches](../models/RangeOverStarcraft2Matches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2Matches](../models/SearchOverStarcraft2Matches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverStarcraft2MatchesVideogameTitle = 6;

const filterOverStarcraft2MatchesVideogameVersion = "3790.1385610489";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverStarcraft2Matches = {
  beginAt: ["l"],
  detailedStats: true,
  draw: true,
  endAt: ["fugiat"],
  finished: true,
  forfeit: true,
  future: true,
  id: [8],
  leagueId: [4],
  matchType: [matchType],
  modifiedAt: ["dolor"],
  name: ["reprehenderit"],
  notStarted: true,
  numberOfGames: [9],
  opponentId: [filterOverStarcraft2MatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["i"],
  serieId: [5],
  slug: ["BW0"],
  status: [matchStatus],
  tournamentId: [8],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverStarcraft2MatchesVideogameTitle],
  videogameVersion: [filterOverStarcraft2MatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverStarcraft2Matches = {
  beginAt: ["consequat e"],
  detailedStats: [true],
  draw: [true],
  endAt: ["e"],
  forfeit: [true],
  id: [5],
  matchType: [matchType],
  modifiedAt: ["aute "],
  name: ["elit conse"],
  numberOfGames: [2],
  scheduledAt: ["culpa"],
  slug: ["4DQEL"],
  status: [matchStatus],
  tournamentId: [10],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverStarcraft2Matches = {
  matchType: matchType,
  name: "magna ipsum sin",
  slug: "Qli",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.starCraft2Matches.getStarcraft2MatchesPast(
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

## get_starcraft_2_matches_running

List running StarCraft 2 matches

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/matches/running`

**Parameters**

| Name    | Type                                                                    | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2Matches](../models/FilterOverStarcraft2Matches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2Matches](../models/RangeOverStarcraft2Matches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2Matches](../models/SearchOverStarcraft2Matches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverStarcraft2MatchesVideogameTitle = 6;

const filterOverStarcraft2MatchesVideogameVersion = "3790.1385610489";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverStarcraft2Matches = {
  beginAt: ["l"],
  detailedStats: true,
  draw: true,
  endAt: ["fugiat"],
  finished: true,
  forfeit: true,
  future: true,
  id: [8],
  leagueId: [4],
  matchType: [matchType],
  modifiedAt: ["dolor"],
  name: ["reprehenderit"],
  notStarted: true,
  numberOfGames: [9],
  opponentId: [filterOverStarcraft2MatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["i"],
  serieId: [5],
  slug: ["BW0"],
  status: [matchStatus],
  tournamentId: [8],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverStarcraft2MatchesVideogameTitle],
  videogameVersion: [filterOverStarcraft2MatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverStarcraft2Matches = {
  beginAt: ["consequat e"],
  detailedStats: [true],
  draw: [true],
  endAt: ["e"],
  forfeit: [true],
  id: [5],
  matchType: [matchType],
  modifiedAt: ["aute "],
  name: ["elit conse"],
  numberOfGames: [2],
  scheduledAt: ["culpa"],
  slug: ["4DQEL"],
  status: [matchStatus],
  tournamentId: [10],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverStarcraft2Matches = {
  matchType: matchType,
  name: "magna ipsum sin",
  slug: "Qli",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.starCraft2Matches.getStarcraft2MatchesRunning(
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

## get_starcraft_2_matches_upcoming

List upcoming StarCraft 2 matches

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/matches/upcoming`

**Parameters**

| Name    | Type                                                                    | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2Matches](../models/FilterOverStarcraft2Matches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2Matches](../models/RangeOverStarcraft2Matches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2Matches](../models/SearchOverStarcraft2Matches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverStarcraft2MatchesVideogameTitle = 6;

const filterOverStarcraft2MatchesVideogameVersion = "3790.1385610489";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverStarcraft2Matches = {
  beginAt: ["l"],
  detailedStats: true,
  draw: true,
  endAt: ["fugiat"],
  finished: true,
  forfeit: true,
  future: true,
  id: [8],
  leagueId: [4],
  matchType: [matchType],
  modifiedAt: ["dolor"],
  name: ["reprehenderit"],
  notStarted: true,
  numberOfGames: [9],
  opponentId: [filterOverStarcraft2MatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["i"],
  serieId: [5],
  slug: ["BW0"],
  status: [matchStatus],
  tournamentId: [8],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverStarcraft2MatchesVideogameTitle],
  videogameVersion: [filterOverStarcraft2MatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverStarcraft2Matches = {
  beginAt: ["consequat e"],
  detailedStats: [true],
  draw: [true],
  endAt: ["e"],
  forfeit: [true],
  id: [5],
  matchType: [matchType],
  modifiedAt: ["aute "],
  name: ["elit conse"],
  numberOfGames: [2],
  scheduledAt: ["culpa"],
  slug: ["4DQEL"],
  status: [matchStatus],
  tournamentId: [10],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverStarcraft2Matches = {
  matchType: matchType,
  name: "magna ipsum sin",
  slug: "Qli",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.starCraft2Matches.getStarcraft2MatchesUpcoming(
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
