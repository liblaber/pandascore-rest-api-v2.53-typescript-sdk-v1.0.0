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
import {
  FilterOverFifaMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverFifaMatches,
  SearchOverFifaMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverFifaMatchesVideogameTitle = 10;

  const filterOverFifaMatchesVideogameVersion = '5793643.972';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverFifaMatches: FilterOverFifaMatches = {
    beginAt: ['laboris elit'],
    detailedStats: true,
    draw: true,
    endAt: ['ad enim incidi'],
    finished: true,
    forfeit: true,
    future: true,
    id: [2],
    leagueId: [6],
    matchType: [matchType],
    modifiedAt: ['elit '],
    name: ['laborum do '],
    notStarted: true,
    numberOfGames: [9],
    opponentId: [filterOverFifaMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['dolor cupida'],
    serieId: [9],
    slug: ['5y-BKFQ '],
    status: [matchStatus],
    tournamentId: [5],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverFifaMatchesVideogameTitle],
    videogameVersion: [filterOverFifaMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverFifaMatches: RangeOverFifaMatches = {
    beginAt: ['labore ea p'],
    detailedStats: [true],
    draw: [true],
    endAt: ['con'],
    forfeit: [true],
    id: [9],
    matchType: [matchType1],
    modifiedAt: ['dolore'],
    name: ['id deserunt '],
    numberOfGames: [123],
    scheduledAt: ['al'],
    slug: ['AH'],
    status: [matchStatus1],
    tournamentId: [1],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverFifaMatches: SearchOverFifaMatches = {
    matchType: matchType12,
    name: 'dolore ci',
    slug: 'L',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcMatches.getFifaMatches({
    filter: filterOverFifaMatches,
    range: rangeOverFifaMatches,
    sort: [[]],
    search: searchOverFifaMatches,
    page: page,
    perPage: 50,
  });

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
import {
  FilterOverFifaMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverFifaMatches,
  SearchOverFifaMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverFifaMatchesVideogameTitle = 10;

  const filterOverFifaMatchesVideogameVersion = '5793643.972';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverFifaMatches: FilterOverFifaMatches = {
    beginAt: ['laboris elit'],
    detailedStats: true,
    draw: true,
    endAt: ['ad enim incidi'],
    finished: true,
    forfeit: true,
    future: true,
    id: [2],
    leagueId: [6],
    matchType: [matchType],
    modifiedAt: ['elit '],
    name: ['laborum do '],
    notStarted: true,
    numberOfGames: [9],
    opponentId: [filterOverFifaMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['dolor cupida'],
    serieId: [9],
    slug: ['5y-BKFQ '],
    status: [matchStatus],
    tournamentId: [5],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverFifaMatchesVideogameTitle],
    videogameVersion: [filterOverFifaMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverFifaMatches: RangeOverFifaMatches = {
    beginAt: ['labore ea p'],
    detailedStats: [true],
    draw: [true],
    endAt: ['con'],
    forfeit: [true],
    id: [9],
    matchType: [matchType1],
    modifiedAt: ['dolore'],
    name: ['id deserunt '],
    numberOfGames: [123],
    scheduledAt: ['al'],
    slug: ['AH'],
    status: [matchStatus1],
    tournamentId: [1],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverFifaMatches: SearchOverFifaMatches = {
    matchType: matchType12,
    name: 'dolore ci',
    slug: 'L',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcMatches.getFifaMatchesPast({
    filter: filterOverFifaMatches,
    range: rangeOverFifaMatches,
    sort: [[]],
    search: searchOverFifaMatches,
    page: page,
    perPage: 50,
  });

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
import {
  FilterOverFifaMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverFifaMatches,
  SearchOverFifaMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverFifaMatchesVideogameTitle = 10;

  const filterOverFifaMatchesVideogameVersion = '5793643.972';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverFifaMatches: FilterOverFifaMatches = {
    beginAt: ['laboris elit'],
    detailedStats: true,
    draw: true,
    endAt: ['ad enim incidi'],
    finished: true,
    forfeit: true,
    future: true,
    id: [2],
    leagueId: [6],
    matchType: [matchType],
    modifiedAt: ['elit '],
    name: ['laborum do '],
    notStarted: true,
    numberOfGames: [9],
    opponentId: [filterOverFifaMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['dolor cupida'],
    serieId: [9],
    slug: ['5y-BKFQ '],
    status: [matchStatus],
    tournamentId: [5],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverFifaMatchesVideogameTitle],
    videogameVersion: [filterOverFifaMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverFifaMatches: RangeOverFifaMatches = {
    beginAt: ['labore ea p'],
    detailedStats: [true],
    draw: [true],
    endAt: ['con'],
    forfeit: [true],
    id: [9],
    matchType: [matchType1],
    modifiedAt: ['dolore'],
    name: ['id deserunt '],
    numberOfGames: [123],
    scheduledAt: ['al'],
    slug: ['AH'],
    status: [matchStatus1],
    tournamentId: [1],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverFifaMatches: SearchOverFifaMatches = {
    matchType: matchType12,
    name: 'dolore ci',
    slug: 'L',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcMatches.getFifaMatchesRunning({
    filter: filterOverFifaMatches,
    range: rangeOverFifaMatches,
    sort: [[]],
    search: searchOverFifaMatches,
    page: page,
    perPage: 50,
  });

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
import {
  FilterOverFifaMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverFifaMatches,
  SearchOverFifaMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverFifaMatchesVideogameTitle = 10;

  const filterOverFifaMatchesVideogameVersion = '5793643.972';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverFifaMatches: FilterOverFifaMatches = {
    beginAt: ['laboris elit'],
    detailedStats: true,
    draw: true,
    endAt: ['ad enim incidi'],
    finished: true,
    forfeit: true,
    future: true,
    id: [2],
    leagueId: [6],
    matchType: [matchType],
    modifiedAt: ['elit '],
    name: ['laborum do '],
    notStarted: true,
    numberOfGames: [9],
    opponentId: [filterOverFifaMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['dolor cupida'],
    serieId: [9],
    slug: ['5y-BKFQ '],
    status: [matchStatus],
    tournamentId: [5],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverFifaMatchesVideogameTitle],
    videogameVersion: [filterOverFifaMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverFifaMatches: RangeOverFifaMatches = {
    beginAt: ['labore ea p'],
    detailedStats: [true],
    draw: [true],
    endAt: ['con'],
    forfeit: [true],
    id: [9],
    matchType: [matchType1],
    modifiedAt: ['dolore'],
    name: ['id deserunt '],
    numberOfGames: [123],
    scheduledAt: ['al'],
    slug: ['AH'],
    status: [matchStatus1],
    tournamentId: [1],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverFifaMatches: SearchOverFifaMatches = {
    matchType: matchType12,
    name: 'dolore ci',
    slug: 'L',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcMatches.getFifaMatchesUpcoming({
    filter: filterOverFifaMatches,
    range: rangeOverFifaMatches,
    sort: [[]],
    search: searchOverFifaMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
