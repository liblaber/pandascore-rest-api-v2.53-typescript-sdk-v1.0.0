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
import {
  FilterOverValorantMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverValorantMatches,
  SearchOverValorantMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverValorantMatchesVideogameTitle = 5;

  const filterOverValorantMatchesVideogameVersion = '848.5017114648.16441010106';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverValorantMatches: FilterOverValorantMatches = {
    beginAt: ['dolor'],
    detailedStats: true,
    draw: true,
    endAt: ['ex'],
    finished: true,
    forfeit: true,
    future: true,
    id: [9],
    leagueId: [9],
    matchType: [matchType],
    modifiedAt: ['dolor velit'],
    name: ['minim'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverValorantMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['repre'],
    serieId: [1],
    slug: ['P'],
    status: [matchStatus],
    tournamentId: [3],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverValorantMatchesVideogameTitle],
    videogameVersion: [filterOverValorantMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverValorantMatches: RangeOverValorantMatches = {
    beginAt: ['off'],
    detailedStats: [true],
    draw: [true],
    endAt: ['f'],
    forfeit: [true],
    id: [8],
    matchType: [matchType1],
    modifiedAt: ['adipisicin'],
    name: ['elit dolore in'],
    numberOfGames: [4],
    scheduledAt: ['sunt s'],
    slug: ['PUIjB6P_Y'],
    status: [matchStatus1],
    tournamentId: [3],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverValorantMatches: SearchOverValorantMatches = {
    matchType: matchType12,
    name: 'laboris ',
    slug: 'vBwZ20H7NVH',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantMatches.getValorantMatches({
    filter: filterOverValorantMatches,
    range: rangeOverValorantMatches,
    sort: [[]],
    search: searchOverValorantMatches,
    page: page,
    perPage: 50,
  });

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
import {
  FilterOverValorantMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverValorantMatches,
  SearchOverValorantMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverValorantMatchesVideogameTitle = 5;

  const filterOverValorantMatchesVideogameVersion = '848.5017114648.16441010106';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverValorantMatches: FilterOverValorantMatches = {
    beginAt: ['dolor'],
    detailedStats: true,
    draw: true,
    endAt: ['ex'],
    finished: true,
    forfeit: true,
    future: true,
    id: [9],
    leagueId: [9],
    matchType: [matchType],
    modifiedAt: ['dolor velit'],
    name: ['minim'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverValorantMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['repre'],
    serieId: [1],
    slug: ['P'],
    status: [matchStatus],
    tournamentId: [3],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverValorantMatchesVideogameTitle],
    videogameVersion: [filterOverValorantMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverValorantMatches: RangeOverValorantMatches = {
    beginAt: ['off'],
    detailedStats: [true],
    draw: [true],
    endAt: ['f'],
    forfeit: [true],
    id: [8],
    matchType: [matchType1],
    modifiedAt: ['adipisicin'],
    name: ['elit dolore in'],
    numberOfGames: [4],
    scheduledAt: ['sunt s'],
    slug: ['PUIjB6P_Y'],
    status: [matchStatus1],
    tournamentId: [3],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverValorantMatches: SearchOverValorantMatches = {
    matchType: matchType12,
    name: 'laboris ',
    slug: 'vBwZ20H7NVH',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantMatches.getValorantMatchesPast({
    filter: filterOverValorantMatches,
    range: rangeOverValorantMatches,
    sort: [[]],
    search: searchOverValorantMatches,
    page: page,
    perPage: 50,
  });

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
import {
  FilterOverValorantMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverValorantMatches,
  SearchOverValorantMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverValorantMatchesVideogameTitle = 5;

  const filterOverValorantMatchesVideogameVersion = '848.5017114648.16441010106';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverValorantMatches: FilterOverValorantMatches = {
    beginAt: ['dolor'],
    detailedStats: true,
    draw: true,
    endAt: ['ex'],
    finished: true,
    forfeit: true,
    future: true,
    id: [9],
    leagueId: [9],
    matchType: [matchType],
    modifiedAt: ['dolor velit'],
    name: ['minim'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverValorantMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['repre'],
    serieId: [1],
    slug: ['P'],
    status: [matchStatus],
    tournamentId: [3],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverValorantMatchesVideogameTitle],
    videogameVersion: [filterOverValorantMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverValorantMatches: RangeOverValorantMatches = {
    beginAt: ['off'],
    detailedStats: [true],
    draw: [true],
    endAt: ['f'],
    forfeit: [true],
    id: [8],
    matchType: [matchType1],
    modifiedAt: ['adipisicin'],
    name: ['elit dolore in'],
    numberOfGames: [4],
    scheduledAt: ['sunt s'],
    slug: ['PUIjB6P_Y'],
    status: [matchStatus1],
    tournamentId: [3],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverValorantMatches: SearchOverValorantMatches = {
    matchType: matchType12,
    name: 'laboris ',
    slug: 'vBwZ20H7NVH',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantMatches.getValorantMatchesRunning({
    filter: filterOverValorantMatches,
    range: rangeOverValorantMatches,
    sort: [[]],
    search: searchOverValorantMatches,
    page: page,
    perPage: 50,
  });

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
import {
  FilterOverValorantMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverValorantMatches,
  SearchOverValorantMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverValorantMatchesVideogameTitle = 5;

  const filterOverValorantMatchesVideogameVersion = '848.5017114648.16441010106';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverValorantMatches: FilterOverValorantMatches = {
    beginAt: ['dolor'],
    detailedStats: true,
    draw: true,
    endAt: ['ex'],
    finished: true,
    forfeit: true,
    future: true,
    id: [9],
    leagueId: [9],
    matchType: [matchType],
    modifiedAt: ['dolor velit'],
    name: ['minim'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverValorantMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['repre'],
    serieId: [1],
    slug: ['P'],
    status: [matchStatus],
    tournamentId: [3],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverValorantMatchesVideogameTitle],
    videogameVersion: [filterOverValorantMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverValorantMatches: RangeOverValorantMatches = {
    beginAt: ['off'],
    detailedStats: [true],
    draw: [true],
    endAt: ['f'],
    forfeit: [true],
    id: [8],
    matchType: [matchType1],
    modifiedAt: ['adipisicin'],
    name: ['elit dolore in'],
    numberOfGames: [4],
    scheduledAt: ['sunt s'],
    slug: ['PUIjB6P_Y'],
    status: [matchStatus1],
    tournamentId: [3],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverValorantMatches: SearchOverValorantMatches = {
    matchType: matchType12,
    name: 'laboris ',
    slug: 'vBwZ20H7NVH',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantMatches.getValorantMatchesUpcoming({
    filter: filterOverValorantMatches,
    range: rangeOverValorantMatches,
    sort: [[]],
    search: searchOverValorantMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
