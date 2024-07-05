# Dota2MatchesService

A list of all methods in the `Dota2MatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                   | Description                           |
| :-------------------------------------------------------- | :------------------------------------ |
| [get_dota2_matches](#get_dota2_matches)                   | List matches for the Dota 2 videogame |
| [get_dota2_matches_past](#get_dota2_matches_past)         | List past Dota 2 matches              |
| [get_dota2_matches_running](#get_dota2_matches_running)   | List running Dota 2 matches           |
| [get_dota2_matches_upcoming](#get_dota2_matches_upcoming) | List upcoming Dota 2 matches          |

## get_dota2_matches

List matches for the Dota 2 videogame

- HTTP Method: `GET`
- Endpoint: `/dota2/matches`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2Matches](../models/FilterOverDota2Matches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2Matches](../models/RangeOverDota2Matches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2Matches](../models/SearchOverDota2Matches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverDota2MatchesVideogameTitle = 10;

const filterOverDota2MatchesVideogameVersion = "007901.10685367.18";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverDota2Matches = {
  beginAt: ["fugi"],
  detailedStats: true,
  draw: true,
  endAt: ["volupta"],
  finished: true,
  forfeit: true,
  future: true,
  id: [7],
  leagueId: [9],
  matchType: [matchType],
  modifiedAt: ["sunt"],
  name: ["nonsit"],
  notStarted: true,
  numberOfGames: [5],
  opponentId: [filterOverDota2MatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["labo"],
  serieId: [10],
  slug: ["oSNqDsuPukx"],
  status: [matchStatus],
  tournamentId: [3],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverDota2MatchesVideogameTitle],
  videogameVersion: [filterOverDota2MatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverDota2Matches = {
  beginAt: ["aute enim do"],
  detailedStats: [true],
  draw: [true],
  endAt: ["inci"],
  forfeit: [true],
  id: [7],
  matchType: [matchType],
  modifiedAt: ["cillum tem"],
  name: ["amet E"],
  numberOfGames: [5],
  scheduledAt: ["Duis"],
  slug: ["MHQ2JG"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverDota2Matches = {
  matchType: matchType,
  name: "ipsum a",
  slug: "7Hz VpX0scl",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.dota2Matches.getDota2Matches(
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

## get_dota2_matches_past

List past Dota 2 matches

- HTTP Method: `GET`
- Endpoint: `/dota2/matches/past`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2Matches](../models/FilterOverDota2Matches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2Matches](../models/RangeOverDota2Matches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2Matches](../models/SearchOverDota2Matches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverDota2MatchesVideogameTitle = 10;

const filterOverDota2MatchesVideogameVersion = "007901.10685367.18";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverDota2Matches = {
  beginAt: ["fugi"],
  detailedStats: true,
  draw: true,
  endAt: ["volupta"],
  finished: true,
  forfeit: true,
  future: true,
  id: [7],
  leagueId: [9],
  matchType: [matchType],
  modifiedAt: ["sunt"],
  name: ["nonsit"],
  notStarted: true,
  numberOfGames: [5],
  opponentId: [filterOverDota2MatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["labo"],
  serieId: [10],
  slug: ["oSNqDsuPukx"],
  status: [matchStatus],
  tournamentId: [3],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverDota2MatchesVideogameTitle],
  videogameVersion: [filterOverDota2MatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverDota2Matches = {
  beginAt: ["aute enim do"],
  detailedStats: [true],
  draw: [true],
  endAt: ["inci"],
  forfeit: [true],
  id: [7],
  matchType: [matchType],
  modifiedAt: ["cillum tem"],
  name: ["amet E"],
  numberOfGames: [5],
  scheduledAt: ["Duis"],
  slug: ["MHQ2JG"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverDota2Matches = {
  matchType: matchType,
  name: "ipsum a",
  slug: "7Hz VpX0scl",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.dota2Matches.getDota2MatchesPast(
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

## get_dota2_matches_running

List running Dota 2 matches

- HTTP Method: `GET`
- Endpoint: `/dota2/matches/running`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2Matches](../models/FilterOverDota2Matches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2Matches](../models/RangeOverDota2Matches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2Matches](../models/SearchOverDota2Matches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverDota2MatchesVideogameTitle = 10;

const filterOverDota2MatchesVideogameVersion = "007901.10685367.18";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverDota2Matches = {
  beginAt: ["fugi"],
  detailedStats: true,
  draw: true,
  endAt: ["volupta"],
  finished: true,
  forfeit: true,
  future: true,
  id: [7],
  leagueId: [9],
  matchType: [matchType],
  modifiedAt: ["sunt"],
  name: ["nonsit"],
  notStarted: true,
  numberOfGames: [5],
  opponentId: [filterOverDota2MatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["labo"],
  serieId: [10],
  slug: ["oSNqDsuPukx"],
  status: [matchStatus],
  tournamentId: [3],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverDota2MatchesVideogameTitle],
  videogameVersion: [filterOverDota2MatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverDota2Matches = {
  beginAt: ["aute enim do"],
  detailedStats: [true],
  draw: [true],
  endAt: ["inci"],
  forfeit: [true],
  id: [7],
  matchType: [matchType],
  modifiedAt: ["cillum tem"],
  name: ["amet E"],
  numberOfGames: [5],
  scheduledAt: ["Duis"],
  slug: ["MHQ2JG"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverDota2Matches = {
  matchType: matchType,
  name: "ipsum a",
  slug: "7Hz VpX0scl",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.dota2Matches.getDota2MatchesRunning(
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

## get_dota2_matches_upcoming

List upcoming Dota 2 matches

- HTTP Method: `GET`
- Endpoint: `/dota2/matches/upcoming`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2Matches](../models/FilterOverDota2Matches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2Matches](../models/RangeOverDota2Matches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2Matches](../models/SearchOverDota2Matches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverDota2MatchesVideogameTitle = 10;

const filterOverDota2MatchesVideogameVersion = "007901.10685367.18";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverDota2Matches = {
  beginAt: ["fugi"],
  detailedStats: true,
  draw: true,
  endAt: ["volupta"],
  finished: true,
  forfeit: true,
  future: true,
  id: [7],
  leagueId: [9],
  matchType: [matchType],
  modifiedAt: ["sunt"],
  name: ["nonsit"],
  notStarted: true,
  numberOfGames: [5],
  opponentId: [filterOverDota2MatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["labo"],
  serieId: [10],
  slug: ["oSNqDsuPukx"],
  status: [matchStatus],
  tournamentId: [3],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverDota2MatchesVideogameTitle],
  videogameVersion: [filterOverDota2MatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverDota2Matches = {
  beginAt: ["aute enim do"],
  detailedStats: [true],
  draw: [true],
  endAt: ["inci"],
  forfeit: [true],
  id: [7],
  matchType: [matchType],
  modifiedAt: ["cillum tem"],
  name: ["amet E"],
  numberOfGames: [5],
  scheduledAt: ["Duis"],
  slug: ["MHQ2JG"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverDota2Matches = {
  matchType: matchType,
  name: "ipsum a",
  slug: "7Hz VpX0scl",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.dota2Matches.getDota2MatchesUpcoming(
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
