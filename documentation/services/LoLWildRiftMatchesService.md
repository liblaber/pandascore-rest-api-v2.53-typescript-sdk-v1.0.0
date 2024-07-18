# LoLWildRiftMatchesService

A list of all methods in the `LoLWildRiftMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                   | Description                                  |
| :------------------------------------------------------------------------ | :------------------------------------------- |
| [get_lol_wild_rift_matches](#get_lol_wild_rift_matches)                   | List matches for the LoL Wild Rift videogame |
| [get_lol_wild_rift_matches_past](#get_lol_wild_rift_matches_past)         | List past LoL Wild Rift matches              |
| [get_lol_wild_rift_matches_running](#get_lol_wild_rift_matches_running)   | List running LoL Wild Rift matches           |
| [get_lol_wild_rift_matches_upcoming](#get_lol_wild_rift_matches_upcoming) | List upcoming LoL Wild Rift matches          |

## get_lol_wild_rift_matches

List matches for the LoL Wild Rift videogame

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/matches`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftMatches](../models/FilterOverLolWildRiftMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftMatches](../models/RangeOverLolWildRiftMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftMatches](../models/SearchOverLolWildRiftMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverLolWildRiftMatchesVideogameTitle = 8;

const filterOverLolWildRiftMatchesVideogameVersion = "156.75188480.912455326";

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverLolWildRiftMatches = {
  beginAt: ["velit irure"],
  detailedStats: true,
  draw: true,
  endAt: ["ani"],
  finished: true,
  forfeit: true,
  future: true,
  id: [10],
  leagueId: [4],
  matchType: [matchType],
  modifiedAt: ["aliquip"],
  name: ["velit Except"],
  notStarted: true,
  numberOfGames: [2],
  opponentId: [filterOverLolWildRiftMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["aliqua ulla"],
  serieId: [5],
  slug: ["REqPO"],
  status: [matchStatus],
  tournamentId: [4],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverLolWildRiftMatchesVideogameTitle],
  videogameVersion: [filterOverLolWildRiftMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverLolWildRiftMatches = {
  beginAt: ["qui laboris"],
  detailedStats: [true],
  draw: [true],
  endAt: ["occaecat commo"],
  forfeit: [true],
  id: [1],
  matchType: [matchType],
  modifiedAt: ["ullamco ex do"],
  name: ["dolore "],
  numberOfGames: [6],
  scheduledAt: ["amet "],
  slug: ["SWMMt"],
  status: [matchStatus],
  tournamentId: [8],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverLolWildRiftMatches = {
  matchType: matchType,
  name: "nostrud",
  slug: "P-",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.loLWildRiftMatches.getLolWildRiftMatches(
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

## get_lol_wild_rift_matches_past

List past LoL Wild Rift matches

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/matches/past`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftMatches](../models/FilterOverLolWildRiftMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftMatches](../models/RangeOverLolWildRiftMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftMatches](../models/SearchOverLolWildRiftMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverLolWildRiftMatchesVideogameTitle = 8;

const filterOverLolWildRiftMatchesVideogameVersion = "156.75188480.912455326";

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverLolWildRiftMatches = {
  beginAt: ["velit irure"],
  detailedStats: true,
  draw: true,
  endAt: ["ani"],
  finished: true,
  forfeit: true,
  future: true,
  id: [10],
  leagueId: [4],
  matchType: [matchType],
  modifiedAt: ["aliquip"],
  name: ["velit Except"],
  notStarted: true,
  numberOfGames: [2],
  opponentId: [filterOverLolWildRiftMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["aliqua ulla"],
  serieId: [5],
  slug: ["REqPO"],
  status: [matchStatus],
  tournamentId: [4],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverLolWildRiftMatchesVideogameTitle],
  videogameVersion: [filterOverLolWildRiftMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverLolWildRiftMatches = {
  beginAt: ["qui laboris"],
  detailedStats: [true],
  draw: [true],
  endAt: ["occaecat commo"],
  forfeit: [true],
  id: [1],
  matchType: [matchType],
  modifiedAt: ["ullamco ex do"],
  name: ["dolore "],
  numberOfGames: [6],
  scheduledAt: ["amet "],
  slug: ["SWMMt"],
  status: [matchStatus],
  tournamentId: [8],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverLolWildRiftMatches = {
  matchType: matchType,
  name: "nostrud",
  slug: "P-",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.loLWildRiftMatches.getLolWildRiftMatchesPast(
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

## get_lol_wild_rift_matches_running

List running LoL Wild Rift matches

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/matches/running`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftMatches](../models/FilterOverLolWildRiftMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftMatches](../models/RangeOverLolWildRiftMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftMatches](../models/SearchOverLolWildRiftMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverLolWildRiftMatchesVideogameTitle = 8;

const filterOverLolWildRiftMatchesVideogameVersion = "156.75188480.912455326";

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverLolWildRiftMatches = {
  beginAt: ["velit irure"],
  detailedStats: true,
  draw: true,
  endAt: ["ani"],
  finished: true,
  forfeit: true,
  future: true,
  id: [10],
  leagueId: [4],
  matchType: [matchType],
  modifiedAt: ["aliquip"],
  name: ["velit Except"],
  notStarted: true,
  numberOfGames: [2],
  opponentId: [filterOverLolWildRiftMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["aliqua ulla"],
  serieId: [5],
  slug: ["REqPO"],
  status: [matchStatus],
  tournamentId: [4],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverLolWildRiftMatchesVideogameTitle],
  videogameVersion: [filterOverLolWildRiftMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverLolWildRiftMatches = {
  beginAt: ["qui laboris"],
  detailedStats: [true],
  draw: [true],
  endAt: ["occaecat commo"],
  forfeit: [true],
  id: [1],
  matchType: [matchType],
  modifiedAt: ["ullamco ex do"],
  name: ["dolore "],
  numberOfGames: [6],
  scheduledAt: ["amet "],
  slug: ["SWMMt"],
  status: [matchStatus],
  tournamentId: [8],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverLolWildRiftMatches = {
  matchType: matchType,
  name: "nostrud",
  slug: "P-",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.loLWildRiftMatches.getLolWildRiftMatchesRunning(
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

## get_lol_wild_rift_matches_upcoming

List upcoming LoL Wild Rift matches

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/matches/upcoming`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftMatches](../models/FilterOverLolWildRiftMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftMatches](../models/RangeOverLolWildRiftMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftMatches](../models/SearchOverLolWildRiftMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

const filterOverLolWildRiftMatchesVideogameTitle = 8;

const filterOverLolWildRiftMatchesVideogameVersion = "156.75188480.912455326";

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverLolWildRiftMatches = {
  beginAt: ["velit irure"],
  detailedStats: true,
  draw: true,
  endAt: ["ani"],
  finished: true,
  forfeit: true,
  future: true,
  id: [10],
  leagueId: [4],
  matchType: [matchType],
  modifiedAt: ["aliquip"],
  name: ["velit Except"],
  notStarted: true,
  numberOfGames: [2],
  opponentId: [filterOverLolWildRiftMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["aliqua ulla"],
  serieId: [5],
  slug: ["REqPO"],
  status: [matchStatus],
  tournamentId: [4],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverLolWildRiftMatchesVideogameTitle],
  videogameVersion: [filterOverLolWildRiftMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 5;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverLolWildRiftMatches = {
  beginAt: ["qui laboris"],
  detailedStats: [true],
  draw: [true],
  endAt: ["occaecat commo"],
  forfeit: [true],
  id: [1],
  matchType: [matchType],
  modifiedAt: ["ullamco ex do"],
  name: ["dolore "],
  numberOfGames: [6],
  scheduledAt: ["amet "],
  slug: ["SWMMt"],
  status: [matchStatus],
  tournamentId: [8],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverLolWildRiftMatches = {
  matchType: matchType,
  name: "nostrud",
  slug: "P-",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.loLWildRiftMatches.getLolWildRiftMatchesUpcoming(
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
