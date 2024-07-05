# PubgMatchesService

A list of all methods in the `PubgMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                 | Description                         |
| :------------------------------------------------------ | :---------------------------------- |
| [get_pubg_matches](#get_pubg_matches)                   | List matches for the PUBG videogame |
| [get_pubg_matches_past](#get_pubg_matches_past)         | List past PUBG matches              |
| [get_pubg_matches_running](#get_pubg_matches_running)   | List running PUBG matches           |
| [get_pubg_matches_upcoming](#get_pubg_matches_upcoming) | List upcoming PUBG matches          |

## get_pubg_matches

List matches for the PUBG videogame

- HTTP Method: `GET`
- Endpoint: `/pubg/matches`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPubgMatches](../models/FilterOverPubgMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPubgMatches](../models/RangeOverPubgMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPubgMatches](../models/SearchOverPubgMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

const filterOverPubgMatchesVideogameTitle = 5;

const filterOverPubgMatchesVideogameVersion = "75.81221866267";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverPubgMatches = {
  beginAt: ["aliquip"],
  detailedStats: true,
  draw: true,
  endAt: ["ipsum "],
  finished: true,
  forfeit: true,
  future: true,
  id: [10],
  leagueId: [7],
  matchType: [matchType],
  modifiedAt: ["volu"],
  name: ["sunt "],
  notStarted: true,
  numberOfGames: [1],
  opponentId: [filterOverPubgMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["cul"],
  serieId: [2],
  slug: ["hTN7dT-f"],
  status: [matchStatus],
  tournamentId: [5],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverPubgMatchesVideogameTitle],
  videogameVersion: [filterOverPubgMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverPubgMatches = {
  beginAt: ["do esse"],
  detailedStats: [true],
  draw: [true],
  endAt: ["qui do"],
  forfeit: [true],
  id: [3],
  matchType: [matchType],
  modifiedAt: ["incididu"],
  name: ["sint in aute "],
  numberOfGames: [9],
  scheduledAt: ["Lorem cupidatat"],
  slug: ["-qt"],
  status: [matchStatus],
  tournamentId: [10],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverPubgMatches = {
  matchType: matchType,
  name: "esse ut sunt",
  slug: "4e1hZ",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.pubgMatches.getPubgMatches(
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

## get_pubg_matches_past

List past PUBG matches

- HTTP Method: `GET`
- Endpoint: `/pubg/matches/past`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPubgMatches](../models/FilterOverPubgMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPubgMatches](../models/RangeOverPubgMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPubgMatches](../models/SearchOverPubgMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

const filterOverPubgMatchesVideogameTitle = 5;

const filterOverPubgMatchesVideogameVersion = "75.81221866267";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverPubgMatches = {
  beginAt: ["aliquip"],
  detailedStats: true,
  draw: true,
  endAt: ["ipsum "],
  finished: true,
  forfeit: true,
  future: true,
  id: [10],
  leagueId: [7],
  matchType: [matchType],
  modifiedAt: ["volu"],
  name: ["sunt "],
  notStarted: true,
  numberOfGames: [1],
  opponentId: [filterOverPubgMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["cul"],
  serieId: [2],
  slug: ["hTN7dT-f"],
  status: [matchStatus],
  tournamentId: [5],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverPubgMatchesVideogameTitle],
  videogameVersion: [filterOverPubgMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverPubgMatches = {
  beginAt: ["do esse"],
  detailedStats: [true],
  draw: [true],
  endAt: ["qui do"],
  forfeit: [true],
  id: [3],
  matchType: [matchType],
  modifiedAt: ["incididu"],
  name: ["sint in aute "],
  numberOfGames: [9],
  scheduledAt: ["Lorem cupidatat"],
  slug: ["-qt"],
  status: [matchStatus],
  tournamentId: [10],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverPubgMatches = {
  matchType: matchType,
  name: "esse ut sunt",
  slug: "4e1hZ",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.pubgMatches.getPubgMatchesPast(
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

## get_pubg_matches_running

List running PUBG matches

- HTTP Method: `GET`
- Endpoint: `/pubg/matches/running`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPubgMatches](../models/FilterOverPubgMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPubgMatches](../models/RangeOverPubgMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPubgMatches](../models/SearchOverPubgMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

const filterOverPubgMatchesVideogameTitle = 5;

const filterOverPubgMatchesVideogameVersion = "75.81221866267";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverPubgMatches = {
  beginAt: ["aliquip"],
  detailedStats: true,
  draw: true,
  endAt: ["ipsum "],
  finished: true,
  forfeit: true,
  future: true,
  id: [10],
  leagueId: [7],
  matchType: [matchType],
  modifiedAt: ["volu"],
  name: ["sunt "],
  notStarted: true,
  numberOfGames: [1],
  opponentId: [filterOverPubgMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["cul"],
  serieId: [2],
  slug: ["hTN7dT-f"],
  status: [matchStatus],
  tournamentId: [5],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverPubgMatchesVideogameTitle],
  videogameVersion: [filterOverPubgMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverPubgMatches = {
  beginAt: ["do esse"],
  detailedStats: [true],
  draw: [true],
  endAt: ["qui do"],
  forfeit: [true],
  id: [3],
  matchType: [matchType],
  modifiedAt: ["incididu"],
  name: ["sint in aute "],
  numberOfGames: [9],
  scheduledAt: ["Lorem cupidatat"],
  slug: ["-qt"],
  status: [matchStatus],
  tournamentId: [10],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverPubgMatches = {
  matchType: matchType,
  name: "esse ut sunt",
  slug: "4e1hZ",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.pubgMatches.getPubgMatchesRunning(
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

## get_pubg_matches_upcoming

List upcoming PUBG matches

- HTTP Method: `GET`
- Endpoint: `/pubg/matches/upcoming`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPubgMatches](../models/FilterOverPubgMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPubgMatches](../models/RangeOverPubgMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPubgMatches](../models/SearchOverPubgMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

const filterOverPubgMatchesVideogameTitle = 5;

const filterOverPubgMatchesVideogameVersion = "75.81221866267";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverPubgMatches = {
  beginAt: ["aliquip"],
  detailedStats: true,
  draw: true,
  endAt: ["ipsum "],
  finished: true,
  forfeit: true,
  future: true,
  id: [10],
  leagueId: [7],
  matchType: [matchType],
  modifiedAt: ["volu"],
  name: ["sunt "],
  notStarted: true,
  numberOfGames: [1],
  opponentId: [filterOverPubgMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["cul"],
  serieId: [2],
  slug: ["hTN7dT-f"],
  status: [matchStatus],
  tournamentId: [5],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverPubgMatchesVideogameTitle],
  videogameVersion: [filterOverPubgMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverPubgMatches = {
  beginAt: ["do esse"],
  detailedStats: [true],
  draw: [true],
  endAt: ["qui do"],
  forfeit: [true],
  id: [3],
  matchType: [matchType],
  modifiedAt: ["incididu"],
  name: ["sint in aute "],
  numberOfGames: [9],
  scheduledAt: ["Lorem cupidatat"],
  slug: ["-qt"],
  status: [matchStatus],
  tournamentId: [10],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverPubgMatches = {
  matchType: matchType,
  name: "esse ut sunt",
  slug: "4e1hZ",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.pubgMatches.getPubgMatchesUpcoming(
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
