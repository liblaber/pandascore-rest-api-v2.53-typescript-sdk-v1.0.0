# StarCraftBroodWarMatchesService

A list of all methods in the `StarCraftBroodWarMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                               | Description                                        |
| :------------------------------------------------------------------------------------ | :------------------------------------------------- |
| [get_starcraft_brood_war_matches](#get_starcraft_brood_war_matches)                   | List matches for the StarCraft Brood War videogame |
| [get_starcraft_brood_war_matches_past](#get_starcraft_brood_war_matches_past)         | List past StarCraft Brood War matches              |
| [get_starcraft_brood_war_matches_running](#get_starcraft_brood_war_matches_running)   | List running StarCraft Brood War matches           |
| [get_starcraft_brood_war_matches_upcoming](#get_starcraft_brood_war_matches_upcoming) | List upcoming StarCraft Brood War matches          |

## get_starcraft_brood_war_matches

List matches for the StarCraft Brood War videogame

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/matches`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarMatches](../models/FilterOverStarcraftBroodWarMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarMatches](../models/RangeOverStarcraftBroodWarMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarMatches](../models/SearchOverStarcraftBroodWarMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverStarcraftBroodWarMatchesVideogameTitle = 3;

const filterOverStarcraftBroodWarMatchesVideogameVersion = "307929.1180506";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverStarcraftBroodWarMatches = {
  beginAt: ["Duis exercitat"],
  detailedStats: true,
  draw: true,
  endAt: ["consequ"],
  finished: true,
  forfeit: true,
  future: true,
  id: [6],
  leagueId: [9],
  matchType: [matchType],
  modifiedAt: ["Lorem"],
  name: ["sed id"],
  notStarted: true,
  numberOfGames: [8],
  opponentId: [filterOverStarcraftBroodWarMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["qui"],
  serieId: [1],
  slug: ["inzJACKn6Zm"],
  status: [matchStatus],
  tournamentId: [3],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverStarcraftBroodWarMatchesVideogameTitle],
  videogameVersion: [filterOverStarcraftBroodWarMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverStarcraftBroodWarMatches = {
  beginAt: ["des"],
  detailedStats: [true],
  draw: [true],
  endAt: ["qui"],
  forfeit: [true],
  id: [5],
  matchType: [matchType],
  modifiedAt: ["c"],
  name: ["incididunt f"],
  numberOfGames: [2],
  scheduledAt: ["d"],
  slug: ["NSAC"],
  status: [matchStatus],
  tournamentId: [9],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverStarcraftBroodWarMatches = {
  matchType: matchType,
  name: "ea do irure e",
  slug: "2HZicUdKT",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.starCraftBroodWarMatches.getStarcraftBroodWarMatches(
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

## get_starcraft_brood_war_matches_past

List past StarCraft Brood War matches

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/matches/past`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarMatches](../models/FilterOverStarcraftBroodWarMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarMatches](../models/RangeOverStarcraftBroodWarMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarMatches](../models/SearchOverStarcraftBroodWarMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverStarcraftBroodWarMatchesVideogameTitle = 3;

const filterOverStarcraftBroodWarMatchesVideogameVersion = "307929.1180506";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverStarcraftBroodWarMatches = {
  beginAt: ["Duis exercitat"],
  detailedStats: true,
  draw: true,
  endAt: ["consequ"],
  finished: true,
  forfeit: true,
  future: true,
  id: [6],
  leagueId: [9],
  matchType: [matchType],
  modifiedAt: ["Lorem"],
  name: ["sed id"],
  notStarted: true,
  numberOfGames: [8],
  opponentId: [filterOverStarcraftBroodWarMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["qui"],
  serieId: [1],
  slug: ["inzJACKn6Zm"],
  status: [matchStatus],
  tournamentId: [3],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverStarcraftBroodWarMatchesVideogameTitle],
  videogameVersion: [filterOverStarcraftBroodWarMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverStarcraftBroodWarMatches = {
  beginAt: ["des"],
  detailedStats: [true],
  draw: [true],
  endAt: ["qui"],
  forfeit: [true],
  id: [5],
  matchType: [matchType],
  modifiedAt: ["c"],
  name: ["incididunt f"],
  numberOfGames: [2],
  scheduledAt: ["d"],
  slug: ["NSAC"],
  status: [matchStatus],
  tournamentId: [9],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverStarcraftBroodWarMatches = {
  matchType: matchType,
  name: "ea do irure e",
  slug: "2HZicUdKT",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.starCraftBroodWarMatches.getStarcraftBroodWarMatchesPast(
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

## get_starcraft_brood_war_matches_running

List running StarCraft Brood War matches

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/matches/running`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarMatches](../models/FilterOverStarcraftBroodWarMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarMatches](../models/RangeOverStarcraftBroodWarMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarMatches](../models/SearchOverStarcraftBroodWarMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverStarcraftBroodWarMatchesVideogameTitle = 3;

const filterOverStarcraftBroodWarMatchesVideogameVersion = "307929.1180506";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverStarcraftBroodWarMatches = {
  beginAt: ["Duis exercitat"],
  detailedStats: true,
  draw: true,
  endAt: ["consequ"],
  finished: true,
  forfeit: true,
  future: true,
  id: [6],
  leagueId: [9],
  matchType: [matchType],
  modifiedAt: ["Lorem"],
  name: ["sed id"],
  notStarted: true,
  numberOfGames: [8],
  opponentId: [filterOverStarcraftBroodWarMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["qui"],
  serieId: [1],
  slug: ["inzJACKn6Zm"],
  status: [matchStatus],
  tournamentId: [3],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverStarcraftBroodWarMatchesVideogameTitle],
  videogameVersion: [filterOverStarcraftBroodWarMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverStarcraftBroodWarMatches = {
  beginAt: ["des"],
  detailedStats: [true],
  draw: [true],
  endAt: ["qui"],
  forfeit: [true],
  id: [5],
  matchType: [matchType],
  modifiedAt: ["c"],
  name: ["incididunt f"],
  numberOfGames: [2],
  scheduledAt: ["d"],
  slug: ["NSAC"],
  status: [matchStatus],
  tournamentId: [9],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverStarcraftBroodWarMatches = {
  matchType: matchType,
  name: "ea do irure e",
  slug: "2HZicUdKT",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.starCraftBroodWarMatches.getStarcraftBroodWarMatchesRunning(
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

## get_starcraft_brood_war_matches_upcoming

List upcoming StarCraft Brood War matches

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/matches/upcoming`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarMatches](../models/FilterOverStarcraftBroodWarMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarMatches](../models/RangeOverStarcraftBroodWarMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarMatches](../models/SearchOverStarcraftBroodWarMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverStarcraftBroodWarMatchesVideogameTitle = 3;

const filterOverStarcraftBroodWarMatchesVideogameVersion = "307929.1180506";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverStarcraftBroodWarMatches = {
  beginAt: ["Duis exercitat"],
  detailedStats: true,
  draw: true,
  endAt: ["consequ"],
  finished: true,
  forfeit: true,
  future: true,
  id: [6],
  leagueId: [9],
  matchType: [matchType],
  modifiedAt: ["Lorem"],
  name: ["sed id"],
  notStarted: true,
  numberOfGames: [8],
  opponentId: [filterOverStarcraftBroodWarMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["qui"],
  serieId: [1],
  slug: ["inzJACKn6Zm"],
  status: [matchStatus],
  tournamentId: [3],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverStarcraftBroodWarMatchesVideogameTitle],
  videogameVersion: [filterOverStarcraftBroodWarMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverStarcraftBroodWarMatches = {
  beginAt: ["des"],
  detailedStats: [true],
  draw: [true],
  endAt: ["qui"],
  forfeit: [true],
  id: [5],
  matchType: [matchType],
  modifiedAt: ["c"],
  name: ["incididunt f"],
  numberOfGames: [2],
  scheduledAt: ["d"],
  slug: ["NSAC"],
  status: [matchStatus],
  tournamentId: [9],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverStarcraftBroodWarMatches = {
  matchType: matchType,
  name: "ea do irure e",
  slug: "2HZicUdKT",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.starCraftBroodWarMatches.getStarcraftBroodWarMatchesUpcoming(
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
