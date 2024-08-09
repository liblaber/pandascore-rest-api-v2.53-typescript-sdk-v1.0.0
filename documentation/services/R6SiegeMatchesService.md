# R6SiegeMatchesService

A list of all methods in the `R6SiegeMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                       | Description                                      |
| :------------------------------------------------------------ | :----------------------------------------------- |
| [get_r6siege_matches](#get_r6siege_matches)                   | List matches for the Rainbow Six Siege videogame |
| [get_r6siege_matches_past](#get_r6siege_matches_past)         | List past Rainbow Six Siege matches              |
| [get_r6siege_matches_running](#get_r6siege_matches_running)   | List running Rainbow Six Siege matches           |
| [get_r6siege_matches_upcoming](#get_r6siege_matches_upcoming) | List upcoming Rainbow Six Siege matches          |

## get_r6siege_matches

List matches for the Rainbow Six Siege videogame

- HTTP Method: `GET`
- Endpoint: `/r6siege/matches`

**Parameters**

| Name    | Type                                                              | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverR6SiegeMatches](../models/FilterOverR6SiegeMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverR6SiegeMatches](../models/RangeOverR6SiegeMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverR6SiegeMatches](../models/SearchOverR6SiegeMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverR6SiegeMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverR6SiegeMatches,
  SearchOverR6SiegeMatches,
  TeamIdOrSlug,
  VideogameIdOrSlug,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameIdOrSlug = VideogameId._1;

  const filterOverR6SiegeMatchesVideogameTitle = 8;

  const filterOverR6SiegeMatchesVideogameVersion = '9333.85910.75688243971';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverR6SiegeMatches = {
    beginAt: ['in exercitat'],
    detailedStats: true,
    draw: true,
    endAt: ['in '],
    finished: true,
    forfeit: true,
    future: true,
    id: [4],
    leagueId: [10],
    matchType: [matchType],
    modifiedAt: ['nu'],
    name: ['ullamco'],
    notStarted: true,
    numberOfGames: [3],
    opponentId: [filterOverR6SiegeMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['reprehend'],
    serieId: [1],
    slug: ['WyGp8'],
    status: [matchStatus],
    tournamentId: [5],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverR6SiegeMatchesVideogameTitle],
    videogameVersion: [filterOverR6SiegeMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverR6SiegeMatches = {
    beginAt: ['velit ea'],
    detailedStats: [true],
    draw: [true],
    endAt: ['dol'],
    forfeit: [true],
    id: [2],
    matchType: [matchType],
    modifiedAt: ['velit Dui'],
    name: ['in cillum'],
    numberOfGames: [2],
    scheduledAt: ['in co'],
    slug: ['EzZs'],
    status: [matchStatus],
    tournamentId: [4],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverR6SiegeMatches = {
    matchType: matchType,
    name: 'elit ',
    slug: 'KdtsaRslOWn',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.r6SiegeMatches.getR6siegeMatches({
    filter: filter,
    range: range,
    sort: [[]],
    search: search,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_r6siege_matches_past

List past Rainbow Six Siege matches

- HTTP Method: `GET`
- Endpoint: `/r6siege/matches/past`

**Parameters**

| Name    | Type                                                              | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverR6SiegeMatches](../models/FilterOverR6SiegeMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverR6SiegeMatches](../models/RangeOverR6SiegeMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverR6SiegeMatches](../models/SearchOverR6SiegeMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverR6SiegeMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverR6SiegeMatches,
  SearchOverR6SiegeMatches,
  TeamIdOrSlug,
  VideogameIdOrSlug,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameIdOrSlug = VideogameId._1;

  const filterOverR6SiegeMatchesVideogameTitle = 8;

  const filterOverR6SiegeMatchesVideogameVersion = '9333.85910.75688243971';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverR6SiegeMatches = {
    beginAt: ['in exercitat'],
    detailedStats: true,
    draw: true,
    endAt: ['in '],
    finished: true,
    forfeit: true,
    future: true,
    id: [4],
    leagueId: [10],
    matchType: [matchType],
    modifiedAt: ['nu'],
    name: ['ullamco'],
    notStarted: true,
    numberOfGames: [3],
    opponentId: [filterOverR6SiegeMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['reprehend'],
    serieId: [1],
    slug: ['WyGp8'],
    status: [matchStatus],
    tournamentId: [5],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverR6SiegeMatchesVideogameTitle],
    videogameVersion: [filterOverR6SiegeMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverR6SiegeMatches = {
    beginAt: ['velit ea'],
    detailedStats: [true],
    draw: [true],
    endAt: ['dol'],
    forfeit: [true],
    id: [2],
    matchType: [matchType],
    modifiedAt: ['velit Dui'],
    name: ['in cillum'],
    numberOfGames: [2],
    scheduledAt: ['in co'],
    slug: ['EzZs'],
    status: [matchStatus],
    tournamentId: [4],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverR6SiegeMatches = {
    matchType: matchType,
    name: 'elit ',
    slug: 'KdtsaRslOWn',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.r6SiegeMatches.getR6siegeMatchesPast({
    filter: filter,
    range: range,
    sort: [[]],
    search: search,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_r6siege_matches_running

List running Rainbow Six Siege matches

- HTTP Method: `GET`
- Endpoint: `/r6siege/matches/running`

**Parameters**

| Name    | Type                                                              | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverR6SiegeMatches](../models/FilterOverR6SiegeMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverR6SiegeMatches](../models/RangeOverR6SiegeMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverR6SiegeMatches](../models/SearchOverR6SiegeMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverR6SiegeMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverR6SiegeMatches,
  SearchOverR6SiegeMatches,
  TeamIdOrSlug,
  VideogameIdOrSlug,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameIdOrSlug = VideogameId._1;

  const filterOverR6SiegeMatchesVideogameTitle = 8;

  const filterOverR6SiegeMatchesVideogameVersion = '9333.85910.75688243971';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverR6SiegeMatches = {
    beginAt: ['in exercitat'],
    detailedStats: true,
    draw: true,
    endAt: ['in '],
    finished: true,
    forfeit: true,
    future: true,
    id: [4],
    leagueId: [10],
    matchType: [matchType],
    modifiedAt: ['nu'],
    name: ['ullamco'],
    notStarted: true,
    numberOfGames: [3],
    opponentId: [filterOverR6SiegeMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['reprehend'],
    serieId: [1],
    slug: ['WyGp8'],
    status: [matchStatus],
    tournamentId: [5],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverR6SiegeMatchesVideogameTitle],
    videogameVersion: [filterOverR6SiegeMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverR6SiegeMatches = {
    beginAt: ['velit ea'],
    detailedStats: [true],
    draw: [true],
    endAt: ['dol'],
    forfeit: [true],
    id: [2],
    matchType: [matchType],
    modifiedAt: ['velit Dui'],
    name: ['in cillum'],
    numberOfGames: [2],
    scheduledAt: ['in co'],
    slug: ['EzZs'],
    status: [matchStatus],
    tournamentId: [4],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverR6SiegeMatches = {
    matchType: matchType,
    name: 'elit ',
    slug: 'KdtsaRslOWn',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.r6SiegeMatches.getR6siegeMatchesRunning({
    filter: filter,
    range: range,
    sort: [[]],
    search: search,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_r6siege_matches_upcoming

List upcoming Rainbow Six Siege matches

- HTTP Method: `GET`
- Endpoint: `/r6siege/matches/upcoming`

**Parameters**

| Name    | Type                                                              | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverR6SiegeMatches](../models/FilterOverR6SiegeMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverR6SiegeMatches](../models/RangeOverR6SiegeMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverR6SiegeMatches](../models/SearchOverR6SiegeMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverR6SiegeMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverR6SiegeMatches,
  SearchOverR6SiegeMatches,
  TeamIdOrSlug,
  VideogameIdOrSlug,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameIdOrSlug = VideogameId._1;

  const filterOverR6SiegeMatchesVideogameTitle = 8;

  const filterOverR6SiegeMatchesVideogameVersion = '9333.85910.75688243971';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverR6SiegeMatches = {
    beginAt: ['in exercitat'],
    detailedStats: true,
    draw: true,
    endAt: ['in '],
    finished: true,
    forfeit: true,
    future: true,
    id: [4],
    leagueId: [10],
    matchType: [matchType],
    modifiedAt: ['nu'],
    name: ['ullamco'],
    notStarted: true,
    numberOfGames: [3],
    opponentId: [filterOverR6SiegeMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['reprehend'],
    serieId: [1],
    slug: ['WyGp8'],
    status: [matchStatus],
    tournamentId: [5],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverR6SiegeMatchesVideogameTitle],
    videogameVersion: [filterOverR6SiegeMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverR6SiegeMatches = {
    beginAt: ['velit ea'],
    detailedStats: [true],
    draw: [true],
    endAt: ['dol'],
    forfeit: [true],
    id: [2],
    matchType: [matchType],
    modifiedAt: ['velit Dui'],
    name: ['in cillum'],
    numberOfGames: [2],
    scheduledAt: ['in co'],
    slug: ['EzZs'],
    status: [matchStatus],
    tournamentId: [4],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverR6SiegeMatches = {
    matchType: matchType,
    name: 'elit ',
    slug: 'KdtsaRslOWn',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.r6SiegeMatches.getR6siegeMatchesUpcoming({
    filter: filter,
    range: range,
    sort: [[]],
    search: search,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
