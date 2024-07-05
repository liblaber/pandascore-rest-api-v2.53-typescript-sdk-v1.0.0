# EaSportsFcMatchesService

A list of all methods in the `EaSportsFcMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                 | Description                                 |
| :------------------------------------------------------ | :------------------------------------------ |
| [get_fifa_matches](#get_fifa_matches)                   | List matches for the EA Sports FC videogame |
| [get_fifa_matches_past](#get_fifa_matches_past)         | List past EA Sports FC matches              |
| [get_fifa_matches_running](#get_fifa_matches_running)   | List running EA Sports FC matches           |
| [get_fifa_matches_upcoming](#get_fifa_matches_upcoming) | List upcoming EA Sports FC matches          |

## get_fifa_matches

List matches for the EA Sports FC videogame

- HTTP Method: `GET`
- Endpoint: `/fifa/matches`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaMatches](../models/FilterOverFifaMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaMatches](../models/RangeOverFifaMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaMatches](../models/SearchOverFifaMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverFifaMatchesVideogameTitle = 4;

const filterOverFifaMatchesVideogameVersion = "0131990.001507714";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverFifaMatches = {
  beginAt: ["ut"],
  detailedStats: true,
  draw: true,
  endAt: ["ess"],
  finished: true,
  forfeit: true,
  future: true,
  id: [10],
  leagueId: [8],
  matchType: [matchType],
  modifiedAt: ["nisi vel"],
  name: ["Ut fugiat"],
  notStarted: true,
  numberOfGames: [4],
  opponentId: [filterOverFifaMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["ut"],
  serieId: [8],
  slug: ["UUP wF56bKY"],
  status: [matchStatus],
  tournamentId: [5],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverFifaMatchesVideogameTitle],
  videogameVersion: [filterOverFifaMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverFifaMatches = {
  beginAt: ["incid"],
  detailedStats: [true],
  draw: [true],
  endAt: ["sint dolor m"],
  forfeit: [true],
  id: [3],
  matchType: [matchType],
  modifiedAt: ["deserunt la"],
  name: ["dolor "],
  numberOfGames: [3],
  scheduledAt: ["ea s"],
  slug: ["O"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverFifaMatches = {
  matchType: matchType,
  name: "ex commodo",
  slug: "5WXqu8t_I",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.eaSportsFcMatches.getFifaMatches(
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

## get_fifa_matches_past

List past EA Sports FC matches

- HTTP Method: `GET`
- Endpoint: `/fifa/matches/past`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaMatches](../models/FilterOverFifaMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaMatches](../models/RangeOverFifaMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaMatches](../models/SearchOverFifaMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverFifaMatchesVideogameTitle = 4;

const filterOverFifaMatchesVideogameVersion = "0131990.001507714";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverFifaMatches = {
  beginAt: ["ut"],
  detailedStats: true,
  draw: true,
  endAt: ["ess"],
  finished: true,
  forfeit: true,
  future: true,
  id: [10],
  leagueId: [8],
  matchType: [matchType],
  modifiedAt: ["nisi vel"],
  name: ["Ut fugiat"],
  notStarted: true,
  numberOfGames: [4],
  opponentId: [filterOverFifaMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["ut"],
  serieId: [8],
  slug: ["UUP wF56bKY"],
  status: [matchStatus],
  tournamentId: [5],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverFifaMatchesVideogameTitle],
  videogameVersion: [filterOverFifaMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverFifaMatches = {
  beginAt: ["incid"],
  detailedStats: [true],
  draw: [true],
  endAt: ["sint dolor m"],
  forfeit: [true],
  id: [3],
  matchType: [matchType],
  modifiedAt: ["deserunt la"],
  name: ["dolor "],
  numberOfGames: [3],
  scheduledAt: ["ea s"],
  slug: ["O"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverFifaMatches = {
  matchType: matchType,
  name: "ex commodo",
  slug: "5WXqu8t_I",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.eaSportsFcMatches.getFifaMatchesPast(
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

## get_fifa_matches_running

List running EA Sports FC matches

- HTTP Method: `GET`
- Endpoint: `/fifa/matches/running`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaMatches](../models/FilterOverFifaMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaMatches](../models/RangeOverFifaMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaMatches](../models/SearchOverFifaMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverFifaMatchesVideogameTitle = 4;

const filterOverFifaMatchesVideogameVersion = "0131990.001507714";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverFifaMatches = {
  beginAt: ["ut"],
  detailedStats: true,
  draw: true,
  endAt: ["ess"],
  finished: true,
  forfeit: true,
  future: true,
  id: [10],
  leagueId: [8],
  matchType: [matchType],
  modifiedAt: ["nisi vel"],
  name: ["Ut fugiat"],
  notStarted: true,
  numberOfGames: [4],
  opponentId: [filterOverFifaMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["ut"],
  serieId: [8],
  slug: ["UUP wF56bKY"],
  status: [matchStatus],
  tournamentId: [5],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverFifaMatchesVideogameTitle],
  videogameVersion: [filterOverFifaMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverFifaMatches = {
  beginAt: ["incid"],
  detailedStats: [true],
  draw: [true],
  endAt: ["sint dolor m"],
  forfeit: [true],
  id: [3],
  matchType: [matchType],
  modifiedAt: ["deserunt la"],
  name: ["dolor "],
  numberOfGames: [3],
  scheduledAt: ["ea s"],
  slug: ["O"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverFifaMatches = {
  matchType: matchType,
  name: "ex commodo",
  slug: "5WXqu8t_I",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.eaSportsFcMatches.getFifaMatchesRunning(
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

## get_fifa_matches_upcoming

List upcoming EA Sports FC matches

- HTTP Method: `GET`
- Endpoint: `/fifa/matches/upcoming`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaMatches](../models/FilterOverFifaMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaMatches](../models/RangeOverFifaMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaMatches](../models/SearchOverFifaMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverFifaMatchesVideogameTitle = 4;

const filterOverFifaMatchesVideogameVersion = "0131990.001507714";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverFifaMatches = {
  beginAt: ["ut"],
  detailedStats: true,
  draw: true,
  endAt: ["ess"],
  finished: true,
  forfeit: true,
  future: true,
  id: [10],
  leagueId: [8],
  matchType: [matchType],
  modifiedAt: ["nisi vel"],
  name: ["Ut fugiat"],
  notStarted: true,
  numberOfGames: [4],
  opponentId: [filterOverFifaMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["ut"],
  serieId: [8],
  slug: ["UUP wF56bKY"],
  status: [matchStatus],
  tournamentId: [5],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverFifaMatchesVideogameTitle],
  videogameVersion: [filterOverFifaMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverFifaMatches = {
  beginAt: ["incid"],
  detailedStats: [true],
  draw: [true],
  endAt: ["sint dolor m"],
  forfeit: [true],
  id: [3],
  matchType: [matchType],
  modifiedAt: ["deserunt la"],
  name: ["dolor "],
  numberOfGames: [3],
  scheduledAt: ["ea s"],
  slug: ["O"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverFifaMatches = {
  matchType: matchType,
  name: "ex commodo",
  slug: "5WXqu8t_I",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.eaSportsFcMatches.getFifaMatchesUpcoming(
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
