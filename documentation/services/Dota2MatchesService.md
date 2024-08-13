# Dota2MatchesService

A list of all methods in the `Dota2MatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                   | Description                           |
| :-------------------------------------------------------- | :------------------------------------ |
| [get_dota2_matches](#get_dota2_matches)                   | List matches for the Dota 2 videogame |
| [get_dota2_matches_past](#get_dota2_matches_past)         | List past Dota 2 matches              |
| [get_dota2_matches_running](#get_dota2_matches_running)   | List running Dota 2 matches           |
| [get_dota2_matches_upcoming](#get_dota2_matches_upcoming) | List upcoming Dota 2 matches          |

## get_dota2_matches

List matches for the Dota 2 videogame

- HTTP Method: `GET`
- Endpoint: `/dota2/matches`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2Matches](../models/FilterOverDota2Matches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2Matches](../models/RangeOverDota2Matches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2Matches](../models/SearchOverDota2Matches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverDota2Matches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverDota2Matches,
  SearchOverDota2Matches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverDota2MatchesVideogameTitle = 10;

  const filterOverDota2MatchesVideogameVersion = '44537.153947.67145';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverDota2Matches: FilterOverDota2Matches = {
    beginAt: ['voluptate'],
    detailedStats: true,
    draw: true,
    endAt: ['laborum exerci'],
    finished: true,
    forfeit: true,
    future: true,
    id: [2],
    leagueId: [8],
    matchType: [matchType],
    modifiedAt: ['q'],
    name: ['in occaecat'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverDota2MatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['sed Lorem'],
    serieId: [2],
    slug: ['l1K2WGjRGmW'],
    status: [matchStatus],
    tournamentId: [4],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverDota2MatchesVideogameTitle],
    videogameVersion: [filterOverDota2MatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverDota2Matches: RangeOverDota2Matches = {
    beginAt: ['enim cupid'],
    detailedStats: [true],
    draw: [true],
    endAt: ['et '],
    forfeit: [true],
    id: [4],
    matchType: [matchType1],
    modifiedAt: ['mollit labori'],
    name: ['non enim'],
    numberOfGames: [1],
    scheduledAt: ['anim tempor'],
    slug: ['StboFnI'],
    status: [matchStatus1],
    tournamentId: [1],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverDota2Matches: SearchOverDota2Matches = {
    matchType: matchType12,
    name: 'officia',
    slug: 'R ',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Matches.getDota2Matches({
    filter: filterOverDota2Matches,
    range: rangeOverDota2Matches,
    sort: [[]],
    search: searchOverDota2Matches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_dota2_matches_past

List past Dota 2 matches

- HTTP Method: `GET`
- Endpoint: `/dota2/matches/past`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2Matches](../models/FilterOverDota2Matches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2Matches](../models/RangeOverDota2Matches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2Matches](../models/SearchOverDota2Matches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverDota2Matches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverDota2Matches,
  SearchOverDota2Matches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverDota2MatchesVideogameTitle = 10;

  const filterOverDota2MatchesVideogameVersion = '44537.153947.67145';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverDota2Matches: FilterOverDota2Matches = {
    beginAt: ['voluptate'],
    detailedStats: true,
    draw: true,
    endAt: ['laborum exerci'],
    finished: true,
    forfeit: true,
    future: true,
    id: [2],
    leagueId: [8],
    matchType: [matchType],
    modifiedAt: ['q'],
    name: ['in occaecat'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverDota2MatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['sed Lorem'],
    serieId: [2],
    slug: ['l1K2WGjRGmW'],
    status: [matchStatus],
    tournamentId: [4],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverDota2MatchesVideogameTitle],
    videogameVersion: [filterOverDota2MatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverDota2Matches: RangeOverDota2Matches = {
    beginAt: ['enim cupid'],
    detailedStats: [true],
    draw: [true],
    endAt: ['et '],
    forfeit: [true],
    id: [4],
    matchType: [matchType1],
    modifiedAt: ['mollit labori'],
    name: ['non enim'],
    numberOfGames: [1],
    scheduledAt: ['anim tempor'],
    slug: ['StboFnI'],
    status: [matchStatus1],
    tournamentId: [1],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverDota2Matches: SearchOverDota2Matches = {
    matchType: matchType12,
    name: 'officia',
    slug: 'R ',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Matches.getDota2MatchesPast({
    filter: filterOverDota2Matches,
    range: rangeOverDota2Matches,
    sort: [[]],
    search: searchOverDota2Matches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_dota2_matches_running

List running Dota 2 matches

- HTTP Method: `GET`
- Endpoint: `/dota2/matches/running`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2Matches](../models/FilterOverDota2Matches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2Matches](../models/RangeOverDota2Matches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2Matches](../models/SearchOverDota2Matches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverDota2Matches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverDota2Matches,
  SearchOverDota2Matches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverDota2MatchesVideogameTitle = 10;

  const filterOverDota2MatchesVideogameVersion = '44537.153947.67145';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverDota2Matches: FilterOverDota2Matches = {
    beginAt: ['voluptate'],
    detailedStats: true,
    draw: true,
    endAt: ['laborum exerci'],
    finished: true,
    forfeit: true,
    future: true,
    id: [2],
    leagueId: [8],
    matchType: [matchType],
    modifiedAt: ['q'],
    name: ['in occaecat'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverDota2MatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['sed Lorem'],
    serieId: [2],
    slug: ['l1K2WGjRGmW'],
    status: [matchStatus],
    tournamentId: [4],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverDota2MatchesVideogameTitle],
    videogameVersion: [filterOverDota2MatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverDota2Matches: RangeOverDota2Matches = {
    beginAt: ['enim cupid'],
    detailedStats: [true],
    draw: [true],
    endAt: ['et '],
    forfeit: [true],
    id: [4],
    matchType: [matchType1],
    modifiedAt: ['mollit labori'],
    name: ['non enim'],
    numberOfGames: [1],
    scheduledAt: ['anim tempor'],
    slug: ['StboFnI'],
    status: [matchStatus1],
    tournamentId: [1],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverDota2Matches: SearchOverDota2Matches = {
    matchType: matchType12,
    name: 'officia',
    slug: 'R ',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Matches.getDota2MatchesRunning({
    filter: filterOverDota2Matches,
    range: rangeOverDota2Matches,
    sort: [[]],
    search: searchOverDota2Matches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_dota2_matches_upcoming

List upcoming Dota 2 matches

- HTTP Method: `GET`
- Endpoint: `/dota2/matches/upcoming`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2Matches](../models/FilterOverDota2Matches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2Matches](../models/RangeOverDota2Matches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2Matches](../models/SearchOverDota2Matches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverDota2Matches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverDota2Matches,
  SearchOverDota2Matches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverDota2MatchesVideogameTitle = 10;

  const filterOverDota2MatchesVideogameVersion = '44537.153947.67145';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverDota2Matches: FilterOverDota2Matches = {
    beginAt: ['voluptate'],
    detailedStats: true,
    draw: true,
    endAt: ['laborum exerci'],
    finished: true,
    forfeit: true,
    future: true,
    id: [2],
    leagueId: [8],
    matchType: [matchType],
    modifiedAt: ['q'],
    name: ['in occaecat'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverDota2MatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['sed Lorem'],
    serieId: [2],
    slug: ['l1K2WGjRGmW'],
    status: [matchStatus],
    tournamentId: [4],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverDota2MatchesVideogameTitle],
    videogameVersion: [filterOverDota2MatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverDota2Matches: RangeOverDota2Matches = {
    beginAt: ['enim cupid'],
    detailedStats: [true],
    draw: [true],
    endAt: ['et '],
    forfeit: [true],
    id: [4],
    matchType: [matchType1],
    modifiedAt: ['mollit labori'],
    name: ['non enim'],
    numberOfGames: [1],
    scheduledAt: ['anim tempor'],
    slug: ['StboFnI'],
    status: [matchStatus1],
    tournamentId: [1],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverDota2Matches: SearchOverDota2Matches = {
    matchType: matchType12,
    name: 'officia',
    slug: 'R ',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Matches.getDota2MatchesUpcoming({
    filter: filterOverDota2Matches,
    range: rangeOverDota2Matches,
    sort: [[]],
    search: searchOverDota2Matches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
