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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 10;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverPubgMatchesVideogameTitle = 5;

const filterOverPubgMatchesVideogameVersion = "036.43414";

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverPubgMatches = {
  beginAt: ["aute eiusmod "],
  detailedStats: true,
  draw: true,
  endAt: ["ullamco labor"],
  finished: true,
  forfeit: true,
  future: true,
  id: [9],
  leagueId: [2],
  matchType: [matchType],
  modifiedAt: ["nisi irure culp"],
  name: ["aute "],
  notStarted: true,
  numberOfGames: [10],
  opponentId: [filterOverPubgMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["null"],
  serieId: [4],
  slug: ["1wzZ5GZv"],
  status: [matchStatus],
  tournamentId: [7],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverPubgMatchesVideogameTitle],
  videogameVersion: [filterOverPubgMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverPubgMatches = {
  beginAt: ["ut cillum in "],
  detailedStats: [true],
  draw: [true],
  endAt: ["anim"],
  forfeit: [true],
  id: [2],
  matchType: [matchType],
  modifiedAt: ["in ut min"],
  name: ["eu in"],
  numberOfGames: [10],
  scheduledAt: ["in "],
  slug: ["FDoevNsA"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverPubgMatches = {
  matchType: matchType,
  name: "adipisic",
  slug: "H",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.pubgMatches.getPubgMatches(
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 10;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverPubgMatchesVideogameTitle = 5;

const filterOverPubgMatchesVideogameVersion = "036.43414";

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverPubgMatches = {
  beginAt: ["aute eiusmod "],
  detailedStats: true,
  draw: true,
  endAt: ["ullamco labor"],
  finished: true,
  forfeit: true,
  future: true,
  id: [9],
  leagueId: [2],
  matchType: [matchType],
  modifiedAt: ["nisi irure culp"],
  name: ["aute "],
  notStarted: true,
  numberOfGames: [10],
  opponentId: [filterOverPubgMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["null"],
  serieId: [4],
  slug: ["1wzZ5GZv"],
  status: [matchStatus],
  tournamentId: [7],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverPubgMatchesVideogameTitle],
  videogameVersion: [filterOverPubgMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverPubgMatches = {
  beginAt: ["ut cillum in "],
  detailedStats: [true],
  draw: [true],
  endAt: ["anim"],
  forfeit: [true],
  id: [2],
  matchType: [matchType],
  modifiedAt: ["in ut min"],
  name: ["eu in"],
  numberOfGames: [10],
  scheduledAt: ["in "],
  slug: ["FDoevNsA"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverPubgMatches = {
  matchType: matchType,
  name: "adipisic",
  slug: "H",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.pubgMatches.getPubgMatchesPast(
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 10;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverPubgMatchesVideogameTitle = 5;

const filterOverPubgMatchesVideogameVersion = "036.43414";

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverPubgMatches = {
  beginAt: ["aute eiusmod "],
  detailedStats: true,
  draw: true,
  endAt: ["ullamco labor"],
  finished: true,
  forfeit: true,
  future: true,
  id: [9],
  leagueId: [2],
  matchType: [matchType],
  modifiedAt: ["nisi irure culp"],
  name: ["aute "],
  notStarted: true,
  numberOfGames: [10],
  opponentId: [filterOverPubgMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["null"],
  serieId: [4],
  slug: ["1wzZ5GZv"],
  status: [matchStatus],
  tournamentId: [7],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverPubgMatchesVideogameTitle],
  videogameVersion: [filterOverPubgMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverPubgMatches = {
  beginAt: ["ut cillum in "],
  detailedStats: [true],
  draw: [true],
  endAt: ["anim"],
  forfeit: [true],
  id: [2],
  matchType: [matchType],
  modifiedAt: ["in ut min"],
  name: ["eu in"],
  numberOfGames: [10],
  scheduledAt: ["in "],
  slug: ["FDoevNsA"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverPubgMatches = {
  matchType: matchType,
  name: "adipisic",
  slug: "H",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.pubgMatches.getPubgMatchesRunning(
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const matchType = MatchType.all_games_played;

const teamIdOrSlug = 10;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverPubgMatchesVideogameTitle = 5;

const filterOverPubgMatchesVideogameVersion = "036.43414";

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverPubgMatches = {
  beginAt: ["aute eiusmod "],
  detailedStats: true,
  draw: true,
  endAt: ["ullamco labor"],
  finished: true,
  forfeit: true,
  future: true,
  id: [9],
  leagueId: [2],
  matchType: [matchType],
  modifiedAt: ["nisi irure culp"],
  name: ["aute "],
  notStarted: true,
  numberOfGames: [10],
  opponentId: [filterOverPubgMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["null"],
  serieId: [4],
  slug: ["1wzZ5GZv"],
  status: [matchStatus],
  tournamentId: [7],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverPubgMatchesVideogameTitle],
  videogameVersion: [filterOverPubgMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 7;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverPubgMatches = {
  beginAt: ["ut cillum in "],
  detailedStats: [true],
  draw: [true],
  endAt: ["anim"],
  forfeit: [true],
  id: [2],
  matchType: [matchType],
  modifiedAt: ["in ut min"],
  name: ["eu in"],
  numberOfGames: [10],
  scheduledAt: ["in "],
  slug: ["FDoevNsA"],
  status: [matchStatus],
  tournamentId: [5],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverPubgMatches = {
  matchType: matchType,
  name: "adipisic",
  slug: "H",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.pubgMatches.getPubgMatchesUpcoming(
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

<!-- This file was generated by liblab | https://liblab.com/ -->
