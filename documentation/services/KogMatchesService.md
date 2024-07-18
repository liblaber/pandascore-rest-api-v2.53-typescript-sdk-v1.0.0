# KogMatchesService

A list of all methods in the `KogMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                                  |
| :---------------------------------------------------- | :------------------------------------------- |
| [get_kog_matches](#get_kog_matches)                   | List matches for the King of Glory videogame |
| [get_kog_matches_past](#get_kog_matches_past)         | List past King of Glory matches              |
| [get_kog_matches_running](#get_kog_matches_running)   | List running King of Glory matches           |
| [get_kog_matches_upcoming](#get_kog_matches_upcoming) | List upcoming King of Glory matches          |

## get_kog_matches

List matches for the King of Glory videogame

- HTTP Method: `GET`
- Endpoint: `/kog/matches`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogMatches](../models/FilterOverKogMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogMatches](../models/RangeOverKogMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogMatches](../models/SearchOverKogMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 10;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverKogMatchesVideogameTitle = 6;

const filterOverKogMatchesVideogameVersion = "6.4314860.74685349364";

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverKogMatches = {
  beginAt: ["Du"],
  detailedStats: true,
  draw: true,
  endAt: ["voluptate"],
  finished: true,
  forfeit: true,
  future: true,
  id: [6],
  leagueId: [6],
  matchType: [matchType],
  modifiedAt: ["labore id fugi"],
  name: ["nostrud veniam"],
  notStarted: true,
  numberOfGames: [7],
  opponentId: [filterOverKogMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["sed Du"],
  serieId: [10],
  slug: ["GJ7GWuEfy"],
  status: [matchStatus],
  tournamentId: [1],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverKogMatchesVideogameTitle],
  videogameVersion: [filterOverKogMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverKogMatches = {
  beginAt: ["Lo"],
  detailedStats: [true],
  draw: [true],
  endAt: ["eu minim par"],
  forfeit: [true],
  id: [6],
  matchType: [matchType],
  modifiedAt: ["est"],
  name: ["Lorem "],
  numberOfGames: [2],
  scheduledAt: ["et"],
  slug: ["vBKKlSKdbR"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverKogMatches = {
  matchType: matchType,
  name: "cillum v",
  slug: "Vy-2dZKJxf",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.kogMatches.getKogMatches(
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

## get_kog_matches_past

List past King of Glory matches

- HTTP Method: `GET`
- Endpoint: `/kog/matches/past`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogMatches](../models/FilterOverKogMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogMatches](../models/RangeOverKogMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogMatches](../models/SearchOverKogMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 10;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverKogMatchesVideogameTitle = 6;

const filterOverKogMatchesVideogameVersion = "6.4314860.74685349364";

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverKogMatches = {
  beginAt: ["Du"],
  detailedStats: true,
  draw: true,
  endAt: ["voluptate"],
  finished: true,
  forfeit: true,
  future: true,
  id: [6],
  leagueId: [6],
  matchType: [matchType],
  modifiedAt: ["labore id fugi"],
  name: ["nostrud veniam"],
  notStarted: true,
  numberOfGames: [7],
  opponentId: [filterOverKogMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["sed Du"],
  serieId: [10],
  slug: ["GJ7GWuEfy"],
  status: [matchStatus],
  tournamentId: [1],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverKogMatchesVideogameTitle],
  videogameVersion: [filterOverKogMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverKogMatches = {
  beginAt: ["Lo"],
  detailedStats: [true],
  draw: [true],
  endAt: ["eu minim par"],
  forfeit: [true],
  id: [6],
  matchType: [matchType],
  modifiedAt: ["est"],
  name: ["Lorem "],
  numberOfGames: [2],
  scheduledAt: ["et"],
  slug: ["vBKKlSKdbR"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverKogMatches = {
  matchType: matchType,
  name: "cillum v",
  slug: "Vy-2dZKJxf",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.kogMatches.getKogMatchesPast(
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

## get_kog_matches_running

List running King of Glory matches

- HTTP Method: `GET`
- Endpoint: `/kog/matches/running`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogMatches](../models/FilterOverKogMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogMatches](../models/RangeOverKogMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogMatches](../models/SearchOverKogMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 10;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverKogMatchesVideogameTitle = 6;

const filterOverKogMatchesVideogameVersion = "6.4314860.74685349364";

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverKogMatches = {
  beginAt: ["Du"],
  detailedStats: true,
  draw: true,
  endAt: ["voluptate"],
  finished: true,
  forfeit: true,
  future: true,
  id: [6],
  leagueId: [6],
  matchType: [matchType],
  modifiedAt: ["labore id fugi"],
  name: ["nostrud veniam"],
  notStarted: true,
  numberOfGames: [7],
  opponentId: [filterOverKogMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["sed Du"],
  serieId: [10],
  slug: ["GJ7GWuEfy"],
  status: [matchStatus],
  tournamentId: [1],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverKogMatchesVideogameTitle],
  videogameVersion: [filterOverKogMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverKogMatches = {
  beginAt: ["Lo"],
  detailedStats: [true],
  draw: [true],
  endAt: ["eu minim par"],
  forfeit: [true],
  id: [6],
  matchType: [matchType],
  modifiedAt: ["est"],
  name: ["Lorem "],
  numberOfGames: [2],
  scheduledAt: ["et"],
  slug: ["vBKKlSKdbR"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverKogMatches = {
  matchType: matchType,
  name: "cillum v",
  slug: "Vy-2dZKJxf",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.kogMatches.getKogMatchesRunning(
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

## get_kog_matches_upcoming

List upcoming King of Glory matches

- HTTP Method: `GET`
- Endpoint: `/kog/matches/upcoming`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogMatches](../models/FilterOverKogMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogMatches](../models/RangeOverKogMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogMatches](../models/SearchOverKogMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 10;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverKogMatchesVideogameTitle = 6;

const filterOverKogMatchesVideogameVersion = "6.4314860.74685349364";

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverKogMatches = {
  beginAt: ["Du"],
  detailedStats: true,
  draw: true,
  endAt: ["voluptate"],
  finished: true,
  forfeit: true,
  future: true,
  id: [6],
  leagueId: [6],
  matchType: [matchType],
  modifiedAt: ["labore id fugi"],
  name: ["nostrud veniam"],
  notStarted: true,
  numberOfGames: [7],
  opponentId: [filterOverKogMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["sed Du"],
  serieId: [10],
  slug: ["GJ7GWuEfy"],
  status: [matchStatus],
  tournamentId: [1],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverKogMatchesVideogameTitle],
  videogameVersion: [filterOverKogMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverKogMatches = {
  beginAt: ["Lo"],
  detailedStats: [true],
  draw: [true],
  endAt: ["eu minim par"],
  forfeit: [true],
  id: [6],
  matchType: [matchType],
  modifiedAt: ["est"],
  name: ["Lorem "],
  numberOfGames: [2],
  scheduledAt: ["et"],
  slug: ["vBKKlSKdbR"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverKogMatches = {
  matchType: matchType,
  name: "cillum v",
  slug: "Vy-2dZKJxf",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.kogMatches.getKogMatchesUpcoming(
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
