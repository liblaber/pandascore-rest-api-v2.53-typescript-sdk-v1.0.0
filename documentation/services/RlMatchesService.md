# RlMatchesService

A list of all methods in the `RlMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description                                  |
| :-------------------------------------------------- | :------------------------------------------- |
| [get_rl_matches](#get_rl_matches)                   | List matches for the Rocket League videogame |
| [get_rl_matches_past](#get_rl_matches_past)         | List past Rocket League matches              |
| [get_rl_matches_running](#get_rl_matches_running)   | List running Rocket League matches           |
| [get_rl_matches_upcoming](#get_rl_matches_upcoming) | List upcoming Rocket League matches          |

## get_rl_matches

List matches for the Rocket League videogame

- HTTP Method: `GET`
- Endpoint: `/rl/matches`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlMatches](../models/FilterOverRlMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlMatches](../models/RangeOverRlMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlMatches](../models/SearchOverRlMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverRlMatchesVideogameTitle = 3;

const filterOverRlMatchesVideogameVersion = "65.69";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverRlMatches = {
  beginAt: ["magna sint id d"],
  detailedStats: true,
  draw: true,
  endAt: ["mollit"],
  finished: true,
  forfeit: true,
  future: true,
  id: [4],
  leagueId: [5],
  matchType: [matchType],
  modifiedAt: ["qu"],
  name: ["esse enim Ut c"],
  notStarted: true,
  numberOfGames: [4],
  opponentId: [filterOverRlMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["d"],
  serieId: [10],
  slug: ["0ZH2SdsV"],
  status: [matchStatus],
  tournamentId: [5],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverRlMatchesVideogameTitle],
  videogameVersion: [filterOverRlMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverRlMatches = {
  beginAt: ["occaecat Ut"],
  detailedStats: [true],
  draw: [true],
  endAt: ["f"],
  forfeit: [true],
  id: [4],
  matchType: [matchType],
  modifiedAt: ["dolore aliqui"],
  name: ["sed ex "],
  numberOfGames: [4],
  scheduledAt: ["esse Lor"],
  slug: ["pVzlIX_xv"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverRlMatches = {
  matchType: matchType,
  name: "enimin eu labo",
  slug: "2UiULtRCW",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.rlMatches.getRlMatches(
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

## get_rl_matches_past

List past Rocket League matches

- HTTP Method: `GET`
- Endpoint: `/rl/matches/past`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlMatches](../models/FilterOverRlMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlMatches](../models/RangeOverRlMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlMatches](../models/SearchOverRlMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverRlMatchesVideogameTitle = 3;

const filterOverRlMatchesVideogameVersion = "65.69";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverRlMatches = {
  beginAt: ["magna sint id d"],
  detailedStats: true,
  draw: true,
  endAt: ["mollit"],
  finished: true,
  forfeit: true,
  future: true,
  id: [4],
  leagueId: [5],
  matchType: [matchType],
  modifiedAt: ["qu"],
  name: ["esse enim Ut c"],
  notStarted: true,
  numberOfGames: [4],
  opponentId: [filterOverRlMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["d"],
  serieId: [10],
  slug: ["0ZH2SdsV"],
  status: [matchStatus],
  tournamentId: [5],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverRlMatchesVideogameTitle],
  videogameVersion: [filterOverRlMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverRlMatches = {
  beginAt: ["occaecat Ut"],
  detailedStats: [true],
  draw: [true],
  endAt: ["f"],
  forfeit: [true],
  id: [4],
  matchType: [matchType],
  modifiedAt: ["dolore aliqui"],
  name: ["sed ex "],
  numberOfGames: [4],
  scheduledAt: ["esse Lor"],
  slug: ["pVzlIX_xv"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverRlMatches = {
  matchType: matchType,
  name: "enimin eu labo",
  slug: "2UiULtRCW",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.rlMatches.getRlMatchesPast(
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

## get_rl_matches_running

List running Rocket League matches

- HTTP Method: `GET`
- Endpoint: `/rl/matches/running`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlMatches](../models/FilterOverRlMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlMatches](../models/RangeOverRlMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlMatches](../models/SearchOverRlMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverRlMatchesVideogameTitle = 3;

const filterOverRlMatchesVideogameVersion = "65.69";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverRlMatches = {
  beginAt: ["magna sint id d"],
  detailedStats: true,
  draw: true,
  endAt: ["mollit"],
  finished: true,
  forfeit: true,
  future: true,
  id: [4],
  leagueId: [5],
  matchType: [matchType],
  modifiedAt: ["qu"],
  name: ["esse enim Ut c"],
  notStarted: true,
  numberOfGames: [4],
  opponentId: [filterOverRlMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["d"],
  serieId: [10],
  slug: ["0ZH2SdsV"],
  status: [matchStatus],
  tournamentId: [5],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverRlMatchesVideogameTitle],
  videogameVersion: [filterOverRlMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverRlMatches = {
  beginAt: ["occaecat Ut"],
  detailedStats: [true],
  draw: [true],
  endAt: ["f"],
  forfeit: [true],
  id: [4],
  matchType: [matchType],
  modifiedAt: ["dolore aliqui"],
  name: ["sed ex "],
  numberOfGames: [4],
  scheduledAt: ["esse Lor"],
  slug: ["pVzlIX_xv"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverRlMatches = {
  matchType: matchType,
  name: "enimin eu labo",
  slug: "2UiULtRCW",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.rlMatches.getRlMatchesRunning(
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

## get_rl_matches_upcoming

List upcoming Rocket League matches

- HTTP Method: `GET`
- Endpoint: `/rl/matches/upcoming`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlMatches](../models/FilterOverRlMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlMatches](../models/RangeOverRlMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlMatches](../models/SearchOverRlMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverRlMatchesVideogameTitle = 3;

const filterOverRlMatchesVideogameVersion = "65.69";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverRlMatches = {
  beginAt: ["magna sint id d"],
  detailedStats: true,
  draw: true,
  endAt: ["mollit"],
  finished: true,
  forfeit: true,
  future: true,
  id: [4],
  leagueId: [5],
  matchType: [matchType],
  modifiedAt: ["qu"],
  name: ["esse enim Ut c"],
  notStarted: true,
  numberOfGames: [4],
  opponentId: [filterOverRlMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["d"],
  serieId: [10],
  slug: ["0ZH2SdsV"],
  status: [matchStatus],
  tournamentId: [5],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverRlMatchesVideogameTitle],
  videogameVersion: [filterOverRlMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverRlMatches = {
  beginAt: ["occaecat Ut"],
  detailedStats: [true],
  draw: [true],
  endAt: ["f"],
  forfeit: [true],
  id: [4],
  matchType: [matchType],
  modifiedAt: ["dolore aliqui"],
  name: ["sed ex "],
  numberOfGames: [4],
  scheduledAt: ["esse Lor"],
  slug: ["pVzlIX_xv"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverRlMatches = {
  matchType: matchType,
  name: "enimin eu labo",
  slug: "2UiULtRCW",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.rlMatches.getRlMatchesUpcoming(
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
