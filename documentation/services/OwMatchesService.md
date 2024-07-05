# OwMatchesService

A list of all methods in the `OwMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description                              |
| :-------------------------------------------------- | :--------------------------------------- |
| [get_ow_matches](#get_ow_matches)                   | List matches for the Overwatch videogame |
| [get_ow_matches_past](#get_ow_matches_past)         | List past Overwatch matches              |
| [get_ow_matches_running](#get_ow_matches_running)   | List running Overwatch matches           |
| [get_ow_matches_upcoming](#get_ow_matches_upcoming) | List upcoming Overwatch matches          |

## get_ow_matches

List matches for the Overwatch videogame

- HTTP Method: `GET`
- Endpoint: `/ow/matches`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwMatches](../models/FilterOverOwMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwMatches](../models/RangeOverOwMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwMatches](../models/SearchOverOwMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

const filterOverOwMatchesVideogameTitle = 6;

const filterOverOwMatchesVideogameVersion = "032422121.5141";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverOwMatches = {
  beginAt: ["pariatur"],
  detailedStats: true,
  draw: true,
  endAt: ["sint te"],
  finished: true,
  forfeit: true,
  future: true,
  id: [3],
  leagueId: [3],
  matchType: [matchType],
  modifiedAt: ["si"],
  name: ["incididun"],
  notStarted: true,
  numberOfGames: [6],
  opponentId: [filterOverOwMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["nostrud irure "],
  serieId: [3],
  slug: ["Z"],
  status: [matchStatus],
  tournamentId: [3],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverOwMatchesVideogameTitle],
  videogameVersion: [filterOverOwMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverOwMatches = {
  beginAt: ["velit eu"],
  detailedStats: [true],
  draw: [true],
  endAt: ["velit "],
  forfeit: [true],
  id: [1],
  matchType: [matchType],
  modifiedAt: ["et"],
  name: ["laboris"],
  numberOfGames: [123],
  scheduledAt: ["quis repreh"],
  slug: ["jVaCjFpOE"],
  status: [matchStatus],
  tournamentId: [8],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverOwMatches = {
  matchType: matchType,
  name: "minim et",
  slug: "SQ8hf",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.owMatches.getOwMatches(
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

## get_ow_matches_past

List past Overwatch matches

- HTTP Method: `GET`
- Endpoint: `/ow/matches/past`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwMatches](../models/FilterOverOwMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwMatches](../models/RangeOverOwMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwMatches](../models/SearchOverOwMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

const filterOverOwMatchesVideogameTitle = 6;

const filterOverOwMatchesVideogameVersion = "032422121.5141";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverOwMatches = {
  beginAt: ["pariatur"],
  detailedStats: true,
  draw: true,
  endAt: ["sint te"],
  finished: true,
  forfeit: true,
  future: true,
  id: [3],
  leagueId: [3],
  matchType: [matchType],
  modifiedAt: ["si"],
  name: ["incididun"],
  notStarted: true,
  numberOfGames: [6],
  opponentId: [filterOverOwMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["nostrud irure "],
  serieId: [3],
  slug: ["Z"],
  status: [matchStatus],
  tournamentId: [3],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverOwMatchesVideogameTitle],
  videogameVersion: [filterOverOwMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverOwMatches = {
  beginAt: ["velit eu"],
  detailedStats: [true],
  draw: [true],
  endAt: ["velit "],
  forfeit: [true],
  id: [1],
  matchType: [matchType],
  modifiedAt: ["et"],
  name: ["laboris"],
  numberOfGames: [123],
  scheduledAt: ["quis repreh"],
  slug: ["jVaCjFpOE"],
  status: [matchStatus],
  tournamentId: [8],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverOwMatches = {
  matchType: matchType,
  name: "minim et",
  slug: "SQ8hf",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.owMatches.getOwMatchesPast(
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

## get_ow_matches_running

List running Overwatch matches

- HTTP Method: `GET`
- Endpoint: `/ow/matches/running`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwMatches](../models/FilterOverOwMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwMatches](../models/RangeOverOwMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwMatches](../models/SearchOverOwMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

const filterOverOwMatchesVideogameTitle = 6;

const filterOverOwMatchesVideogameVersion = "032422121.5141";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverOwMatches = {
  beginAt: ["pariatur"],
  detailedStats: true,
  draw: true,
  endAt: ["sint te"],
  finished: true,
  forfeit: true,
  future: true,
  id: [3],
  leagueId: [3],
  matchType: [matchType],
  modifiedAt: ["si"],
  name: ["incididun"],
  notStarted: true,
  numberOfGames: [6],
  opponentId: [filterOverOwMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["nostrud irure "],
  serieId: [3],
  slug: ["Z"],
  status: [matchStatus],
  tournamentId: [3],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverOwMatchesVideogameTitle],
  videogameVersion: [filterOverOwMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverOwMatches = {
  beginAt: ["velit eu"],
  detailedStats: [true],
  draw: [true],
  endAt: ["velit "],
  forfeit: [true],
  id: [1],
  matchType: [matchType],
  modifiedAt: ["et"],
  name: ["laboris"],
  numberOfGames: [123],
  scheduledAt: ["quis repreh"],
  slug: ["jVaCjFpOE"],
  status: [matchStatus],
  tournamentId: [8],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverOwMatches = {
  matchType: matchType,
  name: "minim et",
  slug: "SQ8hf",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.owMatches.getOwMatchesRunning(
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

## get_ow_matches_upcoming

List upcoming Overwatch matches

- HTTP Method: `GET`
- Endpoint: `/ow/matches/upcoming`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwMatches](../models/FilterOverOwMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwMatches](../models/RangeOverOwMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwMatches](../models/SearchOverOwMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

const filterOverOwMatchesVideogameTitle = 6;

const filterOverOwMatchesVideogameVersion = "032422121.5141";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverOwMatches = {
  beginAt: ["pariatur"],
  detailedStats: true,
  draw: true,
  endAt: ["sint te"],
  finished: true,
  forfeit: true,
  future: true,
  id: [3],
  leagueId: [3],
  matchType: [matchType],
  modifiedAt: ["si"],
  name: ["incididun"],
  notStarted: true,
  numberOfGames: [6],
  opponentId: [filterOverOwMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["nostrud irure "],
  serieId: [3],
  slug: ["Z"],
  status: [matchStatus],
  tournamentId: [3],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverOwMatchesVideogameTitle],
  videogameVersion: [filterOverOwMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverOwMatches = {
  beginAt: ["velit eu"],
  detailedStats: [true],
  draw: [true],
  endAt: ["velit "],
  forfeit: [true],
  id: [1],
  matchType: [matchType],
  modifiedAt: ["et"],
  name: ["laboris"],
  numberOfGames: [123],
  scheduledAt: ["quis repreh"],
  slug: ["jVaCjFpOE"],
  status: [matchStatus],
  tournamentId: [8],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverOwMatches = {
  matchType: matchType,
  name: "minim et",
  slug: "SQ8hf",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.owMatches.getOwMatchesUpcoming(
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
