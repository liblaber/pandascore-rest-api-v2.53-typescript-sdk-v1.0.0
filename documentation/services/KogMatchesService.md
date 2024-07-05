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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverKogMatchesVideogameTitle = 1;

const filterOverKogMatchesVideogameVersion = "013161325.6426517472.7246702907";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverKogMatches = {
  beginAt: ["dolor incididu"],
  detailedStats: true,
  draw: true,
  endAt: ["Ut in"],
  finished: true,
  forfeit: true,
  future: true,
  id: [1],
  leagueId: [9],
  matchType: [matchType],
  modifiedAt: ["occa"],
  name: ["est inci"],
  notStarted: true,
  numberOfGames: [8],
  opponentId: [filterOverKogMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["ven"],
  serieId: [1],
  slug: ["564n"],
  status: [matchStatus],
  tournamentId: [8],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverKogMatchesVideogameTitle],
  videogameVersion: [filterOverKogMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverKogMatches = {
  beginAt: ["proide"],
  detailedStats: [true],
  draw: [true],
  endAt: ["Ut laborum "],
  forfeit: [true],
  id: [2],
  matchType: [matchType],
  modifiedAt: ["c"],
  name: ["irure nulla"],
  numberOfGames: [5],
  scheduledAt: ["eu in"],
  slug: ["Tuy_2"],
  status: [matchStatus],
  tournamentId: [2],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverKogMatches = {
  matchType: matchType,
  name: "dolor sunt",
  slug: "rWSAO",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.kogMatches.getKogMatches(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverKogMatchesVideogameTitle = 1;

const filterOverKogMatchesVideogameVersion = "013161325.6426517472.7246702907";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverKogMatches = {
  beginAt: ["dolor incididu"],
  detailedStats: true,
  draw: true,
  endAt: ["Ut in"],
  finished: true,
  forfeit: true,
  future: true,
  id: [1],
  leagueId: [9],
  matchType: [matchType],
  modifiedAt: ["occa"],
  name: ["est inci"],
  notStarted: true,
  numberOfGames: [8],
  opponentId: [filterOverKogMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["ven"],
  serieId: [1],
  slug: ["564n"],
  status: [matchStatus],
  tournamentId: [8],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverKogMatchesVideogameTitle],
  videogameVersion: [filterOverKogMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverKogMatches = {
  beginAt: ["proide"],
  detailedStats: [true],
  draw: [true],
  endAt: ["Ut laborum "],
  forfeit: [true],
  id: [2],
  matchType: [matchType],
  modifiedAt: ["c"],
  name: ["irure nulla"],
  numberOfGames: [5],
  scheduledAt: ["eu in"],
  slug: ["Tuy_2"],
  status: [matchStatus],
  tournamentId: [2],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverKogMatches = {
  matchType: matchType,
  name: "dolor sunt",
  slug: "rWSAO",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.kogMatches.getKogMatchesPast(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverKogMatchesVideogameTitle = 1;

const filterOverKogMatchesVideogameVersion = "013161325.6426517472.7246702907";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverKogMatches = {
  beginAt: ["dolor incididu"],
  detailedStats: true,
  draw: true,
  endAt: ["Ut in"],
  finished: true,
  forfeit: true,
  future: true,
  id: [1],
  leagueId: [9],
  matchType: [matchType],
  modifiedAt: ["occa"],
  name: ["est inci"],
  notStarted: true,
  numberOfGames: [8],
  opponentId: [filterOverKogMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["ven"],
  serieId: [1],
  slug: ["564n"],
  status: [matchStatus],
  tournamentId: [8],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverKogMatchesVideogameTitle],
  videogameVersion: [filterOverKogMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverKogMatches = {
  beginAt: ["proide"],
  detailedStats: [true],
  draw: [true],
  endAt: ["Ut laborum "],
  forfeit: [true],
  id: [2],
  matchType: [matchType],
  modifiedAt: ["c"],
  name: ["irure nulla"],
  numberOfGames: [5],
  scheduledAt: ["eu in"],
  slug: ["Tuy_2"],
  status: [matchStatus],
  tournamentId: [2],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverKogMatches = {
  matchType: matchType,
  name: "dolor sunt",
  slug: "rWSAO",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.kogMatches.getKogMatchesRunning(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverKogMatchesVideogameTitle = 1;

const filterOverKogMatchesVideogameVersion = "013161325.6426517472.7246702907";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverKogMatches = {
  beginAt: ["dolor incididu"],
  detailedStats: true,
  draw: true,
  endAt: ["Ut in"],
  finished: true,
  forfeit: true,
  future: true,
  id: [1],
  leagueId: [9],
  matchType: [matchType],
  modifiedAt: ["occa"],
  name: ["est inci"],
  notStarted: true,
  numberOfGames: [8],
  opponentId: [filterOverKogMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["ven"],
  serieId: [1],
  slug: ["564n"],
  status: [matchStatus],
  tournamentId: [8],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverKogMatchesVideogameTitle],
  videogameVersion: [filterOverKogMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverKogMatches = {
  beginAt: ["proide"],
  detailedStats: [true],
  draw: [true],
  endAt: ["Ut laborum "],
  forfeit: [true],
  id: [2],
  matchType: [matchType],
  modifiedAt: ["c"],
  name: ["irure nulla"],
  numberOfGames: [5],
  scheduledAt: ["eu in"],
  slug: ["Tuy_2"],
  status: [matchStatus],
  tournamentId: [2],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverKogMatches = {
  matchType: matchType,
  name: "dolor sunt",
  slug: "rWSAO",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.kogMatches.getKogMatchesUpcoming(
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
