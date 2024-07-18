# R6SiegeMatchesService

A list of all methods in the `R6SiegeMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                       | Description                                      |
| :------------------------------------------------------------ | :----------------------------------------------- |
| [get_r6siege_matches](#get_r6siege_matches)                   | List matches for the Rainbow Six Siege videogame |
| [get_r6siege_matches_past](#get_r6siege_matches_past)         | List past Rainbow Six Siege matches              |
| [get_r6siege_matches_running](#get_r6siege_matches_running)   | List running Rainbow Six Siege matches           |
| [get_r6siege_matches_upcoming](#get_r6siege_matches_upcoming) | List upcoming Rainbow Six Siege matches          |

## get_r6siege_matches

List matches for the Rainbow Six Siege videogame

- HTTP Method: `GET`
- Endpoint: `/r6siege/matches`

**Parameters**

| Name    | Type                                                              | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverR6SiegeMatches](../models/FilterOverR6SiegeMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverR6SiegeMatches](../models/RangeOverR6SiegeMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverR6SiegeMatches](../models/SearchOverR6SiegeMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 2;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverR6SiegeMatchesVideogameTitle = 4;

const filterOverR6SiegeMatchesVideogameVersion = "266391336.84111";

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverR6SiegeMatches = {
  beginAt: ["ut proident"],
  detailedStats: true,
  draw: true,
  endAt: ["magn"],
  finished: true,
  forfeit: true,
  future: true,
  id: [3],
  leagueId: [3],
  matchType: [matchType],
  modifiedAt: ["ani"],
  name: ["aliquip culpa"],
  notStarted: true,
  numberOfGames: [9],
  opponentId: [filterOverR6SiegeMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["ad eu consec"],
  serieId: [1],
  slug: ["6A0c8"],
  status: [matchStatus],
  tournamentId: [1],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverR6SiegeMatchesVideogameTitle],
  videogameVersion: [filterOverR6SiegeMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverR6SiegeMatches = {
  beginAt: ["t"],
  detailedStats: [true],
  draw: [true],
  endAt: ["dolor"],
  forfeit: [true],
  id: [4],
  matchType: [matchType],
  modifiedAt: ["mo"],
  name: ["commodo"],
  numberOfGames: [1],
  scheduledAt: ["sed"],
  slug: ["SXr_"],
  status: [matchStatus],
  tournamentId: [2],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverR6SiegeMatches = {
  matchType: matchType,
  name: "culpa deserun",
  slug: "rYbtGes",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.r6SiegeMatches.getR6siegeMatches(
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

## get_r6siege_matches_past

List past Rainbow Six Siege matches

- HTTP Method: `GET`
- Endpoint: `/r6siege/matches/past`

**Parameters**

| Name    | Type                                                              | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverR6SiegeMatches](../models/FilterOverR6SiegeMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverR6SiegeMatches](../models/RangeOverR6SiegeMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverR6SiegeMatches](../models/SearchOverR6SiegeMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 2;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverR6SiegeMatchesVideogameTitle = 4;

const filterOverR6SiegeMatchesVideogameVersion = "266391336.84111";

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverR6SiegeMatches = {
  beginAt: ["ut proident"],
  detailedStats: true,
  draw: true,
  endAt: ["magn"],
  finished: true,
  forfeit: true,
  future: true,
  id: [3],
  leagueId: [3],
  matchType: [matchType],
  modifiedAt: ["ani"],
  name: ["aliquip culpa"],
  notStarted: true,
  numberOfGames: [9],
  opponentId: [filterOverR6SiegeMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["ad eu consec"],
  serieId: [1],
  slug: ["6A0c8"],
  status: [matchStatus],
  tournamentId: [1],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverR6SiegeMatchesVideogameTitle],
  videogameVersion: [filterOverR6SiegeMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverR6SiegeMatches = {
  beginAt: ["t"],
  detailedStats: [true],
  draw: [true],
  endAt: ["dolor"],
  forfeit: [true],
  id: [4],
  matchType: [matchType],
  modifiedAt: ["mo"],
  name: ["commodo"],
  numberOfGames: [1],
  scheduledAt: ["sed"],
  slug: ["SXr_"],
  status: [matchStatus],
  tournamentId: [2],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverR6SiegeMatches = {
  matchType: matchType,
  name: "culpa deserun",
  slug: "rYbtGes",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.r6SiegeMatches.getR6siegeMatchesPast(
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

## get_r6siege_matches_running

List running Rainbow Six Siege matches

- HTTP Method: `GET`
- Endpoint: `/r6siege/matches/running`

**Parameters**

| Name    | Type                                                              | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverR6SiegeMatches](../models/FilterOverR6SiegeMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverR6SiegeMatches](../models/RangeOverR6SiegeMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverR6SiegeMatches](../models/SearchOverR6SiegeMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 2;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverR6SiegeMatchesVideogameTitle = 4;

const filterOverR6SiegeMatchesVideogameVersion = "266391336.84111";

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverR6SiegeMatches = {
  beginAt: ["ut proident"],
  detailedStats: true,
  draw: true,
  endAt: ["magn"],
  finished: true,
  forfeit: true,
  future: true,
  id: [3],
  leagueId: [3],
  matchType: [matchType],
  modifiedAt: ["ani"],
  name: ["aliquip culpa"],
  notStarted: true,
  numberOfGames: [9],
  opponentId: [filterOverR6SiegeMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["ad eu consec"],
  serieId: [1],
  slug: ["6A0c8"],
  status: [matchStatus],
  tournamentId: [1],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverR6SiegeMatchesVideogameTitle],
  videogameVersion: [filterOverR6SiegeMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverR6SiegeMatches = {
  beginAt: ["t"],
  detailedStats: [true],
  draw: [true],
  endAt: ["dolor"],
  forfeit: [true],
  id: [4],
  matchType: [matchType],
  modifiedAt: ["mo"],
  name: ["commodo"],
  numberOfGames: [1],
  scheduledAt: ["sed"],
  slug: ["SXr_"],
  status: [matchStatus],
  tournamentId: [2],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverR6SiegeMatches = {
  matchType: matchType,
  name: "culpa deserun",
  slug: "rYbtGes",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.r6SiegeMatches.getR6siegeMatchesRunning(
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

## get_r6siege_matches_upcoming

List upcoming Rainbow Six Siege matches

- HTTP Method: `GET`
- Endpoint: `/r6siege/matches/upcoming`

**Parameters**

| Name    | Type                                                              | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverR6SiegeMatches](../models/FilterOverR6SiegeMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverR6SiegeMatches](../models/RangeOverR6SiegeMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverR6SiegeMatches](../models/SearchOverR6SiegeMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 2;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverR6SiegeMatchesVideogameTitle = 4;

const filterOverR6SiegeMatchesVideogameVersion = "266391336.84111";

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverR6SiegeMatches = {
  beginAt: ["ut proident"],
  detailedStats: true,
  draw: true,
  endAt: ["magn"],
  finished: true,
  forfeit: true,
  future: true,
  id: [3],
  leagueId: [3],
  matchType: [matchType],
  modifiedAt: ["ani"],
  name: ["aliquip culpa"],
  notStarted: true,
  numberOfGames: [9],
  opponentId: [filterOverR6SiegeMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["ad eu consec"],
  serieId: [1],
  slug: ["6A0c8"],
  status: [matchStatus],
  tournamentId: [1],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverR6SiegeMatchesVideogameTitle],
  videogameVersion: [filterOverR6SiegeMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverR6SiegeMatches = {
  beginAt: ["t"],
  detailedStats: [true],
  draw: [true],
  endAt: ["dolor"],
  forfeit: [true],
  id: [4],
  matchType: [matchType],
  modifiedAt: ["mo"],
  name: ["commodo"],
  numberOfGames: [1],
  scheduledAt: ["sed"],
  slug: ["SXr_"],
  status: [matchStatus],
  tournamentId: [2],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverR6SiegeMatches = {
  matchType: matchType,
  name: "culpa deserun",
  slug: "rYbtGes",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.r6SiegeMatches.getR6siegeMatchesUpcoming(
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
