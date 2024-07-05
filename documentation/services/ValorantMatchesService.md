# ValorantMatchesService

A list of all methods in the `ValorantMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                         | Description                             |
| :-------------------------------------------------------------- | :-------------------------------------- |
| [get_valorant_matches](#get_valorant_matches)                   | List matches for the Valorant videogame |
| [get_valorant_matches_past](#get_valorant_matches_past)         | List past Valorant matches              |
| [get_valorant_matches_running](#get_valorant_matches_running)   | List running Valorant matches           |
| [get_valorant_matches_upcoming](#get_valorant_matches_upcoming) | List upcoming Valorant matches          |

## get_valorant_matches

List matches for the Valorant videogame

- HTTP Method: `GET`
- Endpoint: `/valorant/matches`

**Parameters**

| Name    | Type                                                                | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantMatches](../models/FilterOverValorantMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantMatches](../models/RangeOverValorantMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantMatches](../models/SearchOverValorantMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverValorantMatchesVideogameTitle = 6;

const filterOverValorantMatchesVideogameVersion = "0.69543.5343125";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverValorantMatches = {
  beginAt: ["sint par"],
  detailedStats: true,
  draw: true,
  endAt: ["veniam "],
  finished: true,
  forfeit: true,
  future: true,
  id: [3],
  leagueId: [4],
  matchType: [matchType],
  modifiedAt: ["a"],
  name: ["nisi exe"],
  notStarted: true,
  numberOfGames: [6],
  opponentId: [filterOverValorantMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["nisi s"],
  serieId: [3],
  slug: ["ya_zwp_i"],
  status: [matchStatus],
  tournamentId: [1],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverValorantMatchesVideogameTitle],
  videogameVersion: [filterOverValorantMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverValorantMatches = {
  beginAt: ["par"],
  detailedStats: [true],
  draw: [true],
  endAt: ["cillum et "],
  forfeit: [true],
  id: [5],
  matchType: [matchType],
  modifiedAt: ["ex"],
  name: ["eain e"],
  numberOfGames: [5],
  scheduledAt: ["u"],
  slug: ["P8"],
  status: [matchStatus],
  tournamentId: [3],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverValorantMatches = {
  matchType: matchType,
  name: "sed cons",
  slug: "9y-",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.valorantMatches.getValorantMatches(
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

## get_valorant_matches_past

List past Valorant matches

- HTTP Method: `GET`
- Endpoint: `/valorant/matches/past`

**Parameters**

| Name    | Type                                                                | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantMatches](../models/FilterOverValorantMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantMatches](../models/RangeOverValorantMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantMatches](../models/SearchOverValorantMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverValorantMatchesVideogameTitle = 6;

const filterOverValorantMatchesVideogameVersion = "0.69543.5343125";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverValorantMatches = {
  beginAt: ["sint par"],
  detailedStats: true,
  draw: true,
  endAt: ["veniam "],
  finished: true,
  forfeit: true,
  future: true,
  id: [3],
  leagueId: [4],
  matchType: [matchType],
  modifiedAt: ["a"],
  name: ["nisi exe"],
  notStarted: true,
  numberOfGames: [6],
  opponentId: [filterOverValorantMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["nisi s"],
  serieId: [3],
  slug: ["ya_zwp_i"],
  status: [matchStatus],
  tournamentId: [1],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverValorantMatchesVideogameTitle],
  videogameVersion: [filterOverValorantMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverValorantMatches = {
  beginAt: ["par"],
  detailedStats: [true],
  draw: [true],
  endAt: ["cillum et "],
  forfeit: [true],
  id: [5],
  matchType: [matchType],
  modifiedAt: ["ex"],
  name: ["eain e"],
  numberOfGames: [5],
  scheduledAt: ["u"],
  slug: ["P8"],
  status: [matchStatus],
  tournamentId: [3],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverValorantMatches = {
  matchType: matchType,
  name: "sed cons",
  slug: "9y-",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.valorantMatches.getValorantMatchesPast(
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

## get_valorant_matches_running

List running Valorant matches

- HTTP Method: `GET`
- Endpoint: `/valorant/matches/running`

**Parameters**

| Name    | Type                                                                | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantMatches](../models/FilterOverValorantMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantMatches](../models/RangeOverValorantMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantMatches](../models/SearchOverValorantMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverValorantMatchesVideogameTitle = 6;

const filterOverValorantMatchesVideogameVersion = "0.69543.5343125";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverValorantMatches = {
  beginAt: ["sint par"],
  detailedStats: true,
  draw: true,
  endAt: ["veniam "],
  finished: true,
  forfeit: true,
  future: true,
  id: [3],
  leagueId: [4],
  matchType: [matchType],
  modifiedAt: ["a"],
  name: ["nisi exe"],
  notStarted: true,
  numberOfGames: [6],
  opponentId: [filterOverValorantMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["nisi s"],
  serieId: [3],
  slug: ["ya_zwp_i"],
  status: [matchStatus],
  tournamentId: [1],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverValorantMatchesVideogameTitle],
  videogameVersion: [filterOverValorantMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverValorantMatches = {
  beginAt: ["par"],
  detailedStats: [true],
  draw: [true],
  endAt: ["cillum et "],
  forfeit: [true],
  id: [5],
  matchType: [matchType],
  modifiedAt: ["ex"],
  name: ["eain e"],
  numberOfGames: [5],
  scheduledAt: ["u"],
  slug: ["P8"],
  status: [matchStatus],
  tournamentId: [3],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverValorantMatches = {
  matchType: matchType,
  name: "sed cons",
  slug: "9y-",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.valorantMatches.getValorantMatchesRunning(
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

## get_valorant_matches_upcoming

List upcoming Valorant matches

- HTTP Method: `GET`
- Endpoint: `/valorant/matches/upcoming`

**Parameters**

| Name    | Type                                                                | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantMatches](../models/FilterOverValorantMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantMatches](../models/RangeOverValorantMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantMatches](../models/SearchOverValorantMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverValorantMatchesVideogameTitle = 6;

const filterOverValorantMatchesVideogameVersion = "0.69543.5343125";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverValorantMatches = {
  beginAt: ["sint par"],
  detailedStats: true,
  draw: true,
  endAt: ["veniam "],
  finished: true,
  forfeit: true,
  future: true,
  id: [3],
  leagueId: [4],
  matchType: [matchType],
  modifiedAt: ["a"],
  name: ["nisi exe"],
  notStarted: true,
  numberOfGames: [6],
  opponentId: [filterOverValorantMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["nisi s"],
  serieId: [3],
  slug: ["ya_zwp_i"],
  status: [matchStatus],
  tournamentId: [1],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverValorantMatchesVideogameTitle],
  videogameVersion: [filterOverValorantMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverValorantMatches = {
  beginAt: ["par"],
  detailedStats: [true],
  draw: [true],
  endAt: ["cillum et "],
  forfeit: [true],
  id: [5],
  matchType: [matchType],
  modifiedAt: ["ex"],
  name: ["eain e"],
  numberOfGames: [5],
  scheduledAt: ["u"],
  slug: ["P8"],
  status: [matchStatus],
  tournamentId: [3],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverValorantMatches = {
  matchType: matchType,
  name: "sed cons",
  slug: "9y-",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.valorantMatches.getValorantMatchesUpcoming(
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
