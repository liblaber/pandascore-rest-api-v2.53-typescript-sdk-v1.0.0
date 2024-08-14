# CodmwMatchesService

A list of all methods in the `CodmwMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                   | Description                           |
| :-------------------------------------------------------- | :------------------------------------ |
| [get_codmw_matches](#get_codmw_matches)                   | List matches for the COD MW videogame |
| [get_codmw_matches_past](#get_codmw_matches_past)         | List past CODMW matches               |
| [get_codmw_matches_running](#get_codmw_matches_running)   | List running CODMW matches            |
| [get_codmw_matches_upcoming](#get_codmw_matches_upcoming) | List upcoming CODMW matches           |

## get_codmw_matches

List matches for the COD MW videogame

- HTTP Method: `GET`
- Endpoint: `/codmw/matches`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCodmwMatches](../models/FilterOverCodmwMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCodmwMatches](../models/RangeOverCodmwMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCodmwMatches](../models/SearchOverCodmwMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCodmwMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverCodmwMatches,
  SearchOverCodmwMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverCodmwMatchesVideogameTitle = 9;

  const filterOverCodmwMatchesVideogameVersion = '49265.58843243.7069641';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverCodmwMatches: FilterOverCodmwMatches = {
    beginAt: ['min'],
    detailedStats: true,
    draw: true,
    endAt: ['re'],
    finished: true,
    forfeit: true,
    future: true,
    id: [3],
    leagueId: [5],
    matchType: [matchType],
    modifiedAt: ['dolore Excepte'],
    name: ['ut laborum labo'],
    notStarted: true,
    numberOfGames: [1],
    opponentId: [filterOverCodmwMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['in eiu'],
    serieId: [9],
    slug: ['FyZHzUQlMqf'],
    status: [matchStatus],
    tournamentId: [5],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverCodmwMatchesVideogameTitle],
    videogameVersion: [filterOverCodmwMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverCodmwMatches: RangeOverCodmwMatches = {
    beginAt: ['sunt pari'],
    detailedStats: [true],
    draw: [true],
    endAt: ['et mollit'],
    forfeit: [true],
    id: [2],
    matchType: [matchType1],
    modifiedAt: ['consequat au'],
    name: ['animirure c'],
    numberOfGames: [7],
    scheduledAt: ['exercitation U'],
    slug: ['b'],
    status: [matchStatus1],
    tournamentId: [8],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverCodmwMatches: SearchOverCodmwMatches = {
    matchType: matchType12,
    name: 'culpa ad do Du',
    slug: 'QnETMGeSVO4',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.codmwMatches.getCodmwMatches({
    filter: filterOverCodmwMatches,
    range: rangeOverCodmwMatches,
    sort: [[]],
    search: searchOverCodmwMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_codmw_matches_past

List past CODMW matches

- HTTP Method: `GET`
- Endpoint: `/codmw/matches/past`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCodmwMatches](../models/FilterOverCodmwMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCodmwMatches](../models/RangeOverCodmwMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCodmwMatches](../models/SearchOverCodmwMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCodmwMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverCodmwMatches,
  SearchOverCodmwMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverCodmwMatchesVideogameTitle = 9;

  const filterOverCodmwMatchesVideogameVersion = '49265.58843243.7069641';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverCodmwMatches: FilterOverCodmwMatches = {
    beginAt: ['min'],
    detailedStats: true,
    draw: true,
    endAt: ['re'],
    finished: true,
    forfeit: true,
    future: true,
    id: [3],
    leagueId: [5],
    matchType: [matchType],
    modifiedAt: ['dolore Excepte'],
    name: ['ut laborum labo'],
    notStarted: true,
    numberOfGames: [1],
    opponentId: [filterOverCodmwMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['in eiu'],
    serieId: [9],
    slug: ['FyZHzUQlMqf'],
    status: [matchStatus],
    tournamentId: [5],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverCodmwMatchesVideogameTitle],
    videogameVersion: [filterOverCodmwMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverCodmwMatches: RangeOverCodmwMatches = {
    beginAt: ['sunt pari'],
    detailedStats: [true],
    draw: [true],
    endAt: ['et mollit'],
    forfeit: [true],
    id: [2],
    matchType: [matchType1],
    modifiedAt: ['consequat au'],
    name: ['animirure c'],
    numberOfGames: [7],
    scheduledAt: ['exercitation U'],
    slug: ['b'],
    status: [matchStatus1],
    tournamentId: [8],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverCodmwMatches: SearchOverCodmwMatches = {
    matchType: matchType12,
    name: 'culpa ad do Du',
    slug: 'QnETMGeSVO4',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.codmwMatches.getCodmwMatchesPast({
    filter: filterOverCodmwMatches,
    range: rangeOverCodmwMatches,
    sort: [[]],
    search: searchOverCodmwMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_codmw_matches_running

List running CODMW matches

- HTTP Method: `GET`
- Endpoint: `/codmw/matches/running`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCodmwMatches](../models/FilterOverCodmwMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCodmwMatches](../models/RangeOverCodmwMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCodmwMatches](../models/SearchOverCodmwMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCodmwMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverCodmwMatches,
  SearchOverCodmwMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverCodmwMatchesVideogameTitle = 9;

  const filterOverCodmwMatchesVideogameVersion = '49265.58843243.7069641';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverCodmwMatches: FilterOverCodmwMatches = {
    beginAt: ['min'],
    detailedStats: true,
    draw: true,
    endAt: ['re'],
    finished: true,
    forfeit: true,
    future: true,
    id: [3],
    leagueId: [5],
    matchType: [matchType],
    modifiedAt: ['dolore Excepte'],
    name: ['ut laborum labo'],
    notStarted: true,
    numberOfGames: [1],
    opponentId: [filterOverCodmwMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['in eiu'],
    serieId: [9],
    slug: ['FyZHzUQlMqf'],
    status: [matchStatus],
    tournamentId: [5],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverCodmwMatchesVideogameTitle],
    videogameVersion: [filterOverCodmwMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverCodmwMatches: RangeOverCodmwMatches = {
    beginAt: ['sunt pari'],
    detailedStats: [true],
    draw: [true],
    endAt: ['et mollit'],
    forfeit: [true],
    id: [2],
    matchType: [matchType1],
    modifiedAt: ['consequat au'],
    name: ['animirure c'],
    numberOfGames: [7],
    scheduledAt: ['exercitation U'],
    slug: ['b'],
    status: [matchStatus1],
    tournamentId: [8],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverCodmwMatches: SearchOverCodmwMatches = {
    matchType: matchType12,
    name: 'culpa ad do Du',
    slug: 'QnETMGeSVO4',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.codmwMatches.getCodmwMatchesRunning({
    filter: filterOverCodmwMatches,
    range: rangeOverCodmwMatches,
    sort: [[]],
    search: searchOverCodmwMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_codmw_matches_upcoming

List upcoming CODMW matches

- HTTP Method: `GET`
- Endpoint: `/codmw/matches/upcoming`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCodmwMatches](../models/FilterOverCodmwMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCodmwMatches](../models/RangeOverCodmwMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCodmwMatches](../models/SearchOverCodmwMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverCodmwMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverCodmwMatches,
  SearchOverCodmwMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverCodmwMatchesVideogameTitle = 9;

  const filterOverCodmwMatchesVideogameVersion = '49265.58843243.7069641';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverCodmwMatches: FilterOverCodmwMatches = {
    beginAt: ['min'],
    detailedStats: true,
    draw: true,
    endAt: ['re'],
    finished: true,
    forfeit: true,
    future: true,
    id: [3],
    leagueId: [5],
    matchType: [matchType],
    modifiedAt: ['dolore Excepte'],
    name: ['ut laborum labo'],
    notStarted: true,
    numberOfGames: [1],
    opponentId: [filterOverCodmwMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['in eiu'],
    serieId: [9],
    slug: ['FyZHzUQlMqf'],
    status: [matchStatus],
    tournamentId: [5],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverCodmwMatchesVideogameTitle],
    videogameVersion: [filterOverCodmwMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverCodmwMatches: RangeOverCodmwMatches = {
    beginAt: ['sunt pari'],
    detailedStats: [true],
    draw: [true],
    endAt: ['et mollit'],
    forfeit: [true],
    id: [2],
    matchType: [matchType1],
    modifiedAt: ['consequat au'],
    name: ['animirure c'],
    numberOfGames: [7],
    scheduledAt: ['exercitation U'],
    slug: ['b'],
    status: [matchStatus1],
    tournamentId: [8],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverCodmwMatches: SearchOverCodmwMatches = {
    matchType: matchType12,
    name: 'culpa ad do Du',
    slug: 'QnETMGeSVO4',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.codmwMatches.getCodmwMatchesUpcoming({
    filter: filterOverCodmwMatches,
    range: rangeOverCodmwMatches,
    sort: [[]],
    search: searchOverCodmwMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
