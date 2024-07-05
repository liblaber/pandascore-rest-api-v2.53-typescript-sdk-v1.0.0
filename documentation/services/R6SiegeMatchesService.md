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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverR6SiegeMatchesVideogameTitle = 5;

const filterOverR6SiegeMatchesVideogameVersion = "78534.258211612";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverR6SiegeMatches = {
  beginAt: ["n"],
  detailedStats: true,
  draw: true,
  endAt: ["aute"],
  finished: true,
  forfeit: true,
  future: true,
  id: [7],
  leagueId: [6],
  matchType: [matchType],
  modifiedAt: ["fugiat adipis"],
  name: ["suntnisi"],
  notStarted: true,
  numberOfGames: [7],
  opponentId: [filterOverR6SiegeMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["dolor anim Lo"],
  serieId: [3],
  slug: ["ddW"],
  status: [matchStatus],
  tournamentId: [2],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverR6SiegeMatchesVideogameTitle],
  videogameVersion: [filterOverR6SiegeMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverR6SiegeMatches = {
  beginAt: ["sint ame"],
  detailedStats: [true],
  draw: [true],
  endAt: ["ut deser"],
  forfeit: [true],
  id: [8],
  matchType: [matchType],
  modifiedAt: ["sit ali"],
  name: ["Duis ut"],
  numberOfGames: [9],
  scheduledAt: ["nostrud mag"],
  slug: ["6glhN"],
  status: [matchStatus],
  tournamentId: [3],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverR6SiegeMatches = {
  matchType: matchType,
  name: "esse proident",
  slug: "SvLq1mxn",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.r6SiegeMatches.getR6siegeMatches(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverR6SiegeMatchesVideogameTitle = 5;

const filterOverR6SiegeMatchesVideogameVersion = "78534.258211612";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverR6SiegeMatches = {
  beginAt: ["n"],
  detailedStats: true,
  draw: true,
  endAt: ["aute"],
  finished: true,
  forfeit: true,
  future: true,
  id: [7],
  leagueId: [6],
  matchType: [matchType],
  modifiedAt: ["fugiat adipis"],
  name: ["suntnisi"],
  notStarted: true,
  numberOfGames: [7],
  opponentId: [filterOverR6SiegeMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["dolor anim Lo"],
  serieId: [3],
  slug: ["ddW"],
  status: [matchStatus],
  tournamentId: [2],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverR6SiegeMatchesVideogameTitle],
  videogameVersion: [filterOverR6SiegeMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverR6SiegeMatches = {
  beginAt: ["sint ame"],
  detailedStats: [true],
  draw: [true],
  endAt: ["ut deser"],
  forfeit: [true],
  id: [8],
  matchType: [matchType],
  modifiedAt: ["sit ali"],
  name: ["Duis ut"],
  numberOfGames: [9],
  scheduledAt: ["nostrud mag"],
  slug: ["6glhN"],
  status: [matchStatus],
  tournamentId: [3],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverR6SiegeMatches = {
  matchType: matchType,
  name: "esse proident",
  slug: "SvLq1mxn",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.r6SiegeMatches.getR6siegeMatchesPast(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverR6SiegeMatchesVideogameTitle = 5;

const filterOverR6SiegeMatchesVideogameVersion = "78534.258211612";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverR6SiegeMatches = {
  beginAt: ["n"],
  detailedStats: true,
  draw: true,
  endAt: ["aute"],
  finished: true,
  forfeit: true,
  future: true,
  id: [7],
  leagueId: [6],
  matchType: [matchType],
  modifiedAt: ["fugiat adipis"],
  name: ["suntnisi"],
  notStarted: true,
  numberOfGames: [7],
  opponentId: [filterOverR6SiegeMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["dolor anim Lo"],
  serieId: [3],
  slug: ["ddW"],
  status: [matchStatus],
  tournamentId: [2],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverR6SiegeMatchesVideogameTitle],
  videogameVersion: [filterOverR6SiegeMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverR6SiegeMatches = {
  beginAt: ["sint ame"],
  detailedStats: [true],
  draw: [true],
  endAt: ["ut deser"],
  forfeit: [true],
  id: [8],
  matchType: [matchType],
  modifiedAt: ["sit ali"],
  name: ["Duis ut"],
  numberOfGames: [9],
  scheduledAt: ["nostrud mag"],
  slug: ["6glhN"],
  status: [matchStatus],
  tournamentId: [3],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverR6SiegeMatches = {
  matchType: matchType,
  name: "esse proident",
  slug: "SvLq1mxn",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.r6SiegeMatches.getR6siegeMatchesRunning(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverR6SiegeMatchesVideogameTitle = 5;

const filterOverR6SiegeMatchesVideogameVersion = "78534.258211612";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverR6SiegeMatches = {
  beginAt: ["n"],
  detailedStats: true,
  draw: true,
  endAt: ["aute"],
  finished: true,
  forfeit: true,
  future: true,
  id: [7],
  leagueId: [6],
  matchType: [matchType],
  modifiedAt: ["fugiat adipis"],
  name: ["suntnisi"],
  notStarted: true,
  numberOfGames: [7],
  opponentId: [filterOverR6SiegeMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["dolor anim Lo"],
  serieId: [3],
  slug: ["ddW"],
  status: [matchStatus],
  tournamentId: [2],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverR6SiegeMatchesVideogameTitle],
  videogameVersion: [filterOverR6SiegeMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverR6SiegeMatches = {
  beginAt: ["sint ame"],
  detailedStats: [true],
  draw: [true],
  endAt: ["ut deser"],
  forfeit: [true],
  id: [8],
  matchType: [matchType],
  modifiedAt: ["sit ali"],
  name: ["Duis ut"],
  numberOfGames: [9],
  scheduledAt: ["nostrud mag"],
  slug: ["6glhN"],
  status: [matchStatus],
  tournamentId: [3],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverR6SiegeMatches = {
  matchType: matchType,
  name: "esse proident",
  slug: "SvLq1mxn",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.r6SiegeMatches.getR6siegeMatchesUpcoming(
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
