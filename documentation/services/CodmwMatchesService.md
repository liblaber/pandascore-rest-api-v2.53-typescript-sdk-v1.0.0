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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverCodmwMatches,
  SearchOverCodmwMatches,
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

  const filterOverCodmwMatchesVideogameTitle = 2;

  const filterOverCodmwMatchesVideogameVersion = '4.384894385';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverCodmwMatches = {
    beginAt: ['aute Duis'],
    detailedStats: true,
    draw: true,
    endAt: ['cillum'],
    finished: true,
    forfeit: true,
    future: true,
    id: [4],
    leagueId: [9],
    matchType: [matchType],
    modifiedAt: ['ea nulla '],
    name: ['ex ut eius'],
    notStarted: true,
    numberOfGames: [2],
    opponentId: [filterOverCodmwMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['enim ei'],
    serieId: [1],
    slug: ['lutWjfmw'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverCodmwMatchesVideogameTitle],
    videogameVersion: [filterOverCodmwMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverCodmwMatches = {
    beginAt: ['eiu'],
    detailedStats: [true],
    draw: [true],
    endAt: ['mo'],
    forfeit: [true],
    id: [1],
    matchType: [matchType],
    modifiedAt: ['ut'],
    name: ['ea elit'],
    numberOfGames: [6],
    scheduledAt: ['labor'],
    slug: ['l2XU3tFMNk'],
    status: [matchStatus],
    tournamentId: [2],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverCodmwMatches = {
    matchType: matchType,
    name: 'dolor aliq',
    slug: 'Jagwys6K',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.codmwMatches.getCodmwMatches({
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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverCodmwMatches,
  SearchOverCodmwMatches,
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

  const filterOverCodmwMatchesVideogameTitle = 2;

  const filterOverCodmwMatchesVideogameVersion = '4.384894385';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverCodmwMatches = {
    beginAt: ['aute Duis'],
    detailedStats: true,
    draw: true,
    endAt: ['cillum'],
    finished: true,
    forfeit: true,
    future: true,
    id: [4],
    leagueId: [9],
    matchType: [matchType],
    modifiedAt: ['ea nulla '],
    name: ['ex ut eius'],
    notStarted: true,
    numberOfGames: [2],
    opponentId: [filterOverCodmwMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['enim ei'],
    serieId: [1],
    slug: ['lutWjfmw'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverCodmwMatchesVideogameTitle],
    videogameVersion: [filterOverCodmwMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverCodmwMatches = {
    beginAt: ['eiu'],
    detailedStats: [true],
    draw: [true],
    endAt: ['mo'],
    forfeit: [true],
    id: [1],
    matchType: [matchType],
    modifiedAt: ['ut'],
    name: ['ea elit'],
    numberOfGames: [6],
    scheduledAt: ['labor'],
    slug: ['l2XU3tFMNk'],
    status: [matchStatus],
    tournamentId: [2],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverCodmwMatches = {
    matchType: matchType,
    name: 'dolor aliq',
    slug: 'Jagwys6K',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.codmwMatches.getCodmwMatchesPast({
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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverCodmwMatches,
  SearchOverCodmwMatches,
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

  const filterOverCodmwMatchesVideogameTitle = 2;

  const filterOverCodmwMatchesVideogameVersion = '4.384894385';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverCodmwMatches = {
    beginAt: ['aute Duis'],
    detailedStats: true,
    draw: true,
    endAt: ['cillum'],
    finished: true,
    forfeit: true,
    future: true,
    id: [4],
    leagueId: [9],
    matchType: [matchType],
    modifiedAt: ['ea nulla '],
    name: ['ex ut eius'],
    notStarted: true,
    numberOfGames: [2],
    opponentId: [filterOverCodmwMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['enim ei'],
    serieId: [1],
    slug: ['lutWjfmw'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverCodmwMatchesVideogameTitle],
    videogameVersion: [filterOverCodmwMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverCodmwMatches = {
    beginAt: ['eiu'],
    detailedStats: [true],
    draw: [true],
    endAt: ['mo'],
    forfeit: [true],
    id: [1],
    matchType: [matchType],
    modifiedAt: ['ut'],
    name: ['ea elit'],
    numberOfGames: [6],
    scheduledAt: ['labor'],
    slug: ['l2XU3tFMNk'],
    status: [matchStatus],
    tournamentId: [2],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverCodmwMatches = {
    matchType: matchType,
    name: 'dolor aliq',
    slug: 'Jagwys6K',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.codmwMatches.getCodmwMatchesRunning({
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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverCodmwMatches,
  SearchOverCodmwMatches,
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

  const filterOverCodmwMatchesVideogameTitle = 2;

  const filterOverCodmwMatchesVideogameVersion = '4.384894385';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverCodmwMatches = {
    beginAt: ['aute Duis'],
    detailedStats: true,
    draw: true,
    endAt: ['cillum'],
    finished: true,
    forfeit: true,
    future: true,
    id: [4],
    leagueId: [9],
    matchType: [matchType],
    modifiedAt: ['ea nulla '],
    name: ['ex ut eius'],
    notStarted: true,
    numberOfGames: [2],
    opponentId: [filterOverCodmwMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['enim ei'],
    serieId: [1],
    slug: ['lutWjfmw'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverCodmwMatchesVideogameTitle],
    videogameVersion: [filterOverCodmwMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverCodmwMatches = {
    beginAt: ['eiu'],
    detailedStats: [true],
    draw: [true],
    endAt: ['mo'],
    forfeit: [true],
    id: [1],
    matchType: [matchType],
    modifiedAt: ['ut'],
    name: ['ea elit'],
    numberOfGames: [6],
    scheduledAt: ['labor'],
    slug: ['l2XU3tFMNk'],
    status: [matchStatus],
    tournamentId: [2],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverCodmwMatches = {
    matchType: matchType,
    name: 'dolor aliq',
    slug: 'Jagwys6K',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.codmwMatches.getCodmwMatchesUpcoming({
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
