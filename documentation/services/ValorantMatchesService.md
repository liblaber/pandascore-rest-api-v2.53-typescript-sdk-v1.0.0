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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverValorantMatches,
  SearchOverValorantMatches,
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

  const filterOverValorantMatchesVideogameTitle = 9;

  const filterOverValorantMatchesVideogameVersion = '297342.45230068';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverValorantMatches = {
    beginAt: ['est ex u'],
    detailedStats: true,
    draw: true,
    endAt: ['sit aliqua'],
    finished: true,
    forfeit: true,
    future: true,
    id: [7],
    leagueId: [5],
    matchType: [matchType],
    modifiedAt: ['non'],
    name: ['sint '],
    notStarted: true,
    numberOfGames: [4],
    opponentId: [filterOverValorantMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['est cillum eiu'],
    serieId: [10],
    slug: ['U1'],
    status: [matchStatus],
    tournamentId: [6],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverValorantMatchesVideogameTitle],
    videogameVersion: [filterOverValorantMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverValorantMatches = {
    beginAt: ['occaecat do'],
    detailedStats: [true],
    draw: [true],
    endAt: ['officia '],
    forfeit: [true],
    id: [3],
    matchType: [matchType],
    modifiedAt: ['ut ullamco l'],
    name: ['nulla es'],
    numberOfGames: [10],
    scheduledAt: ['dolor Ut u'],
    slug: ['GXZ9'],
    status: [matchStatus],
    tournamentId: [4],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverValorantMatches = {
    matchType: matchType,
    name: 'id occaec',
    slug: 'liL4T',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantMatches.getValorantMatches({
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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverValorantMatches,
  SearchOverValorantMatches,
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

  const filterOverValorantMatchesVideogameTitle = 9;

  const filterOverValorantMatchesVideogameVersion = '297342.45230068';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverValorantMatches = {
    beginAt: ['est ex u'],
    detailedStats: true,
    draw: true,
    endAt: ['sit aliqua'],
    finished: true,
    forfeit: true,
    future: true,
    id: [7],
    leagueId: [5],
    matchType: [matchType],
    modifiedAt: ['non'],
    name: ['sint '],
    notStarted: true,
    numberOfGames: [4],
    opponentId: [filterOverValorantMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['est cillum eiu'],
    serieId: [10],
    slug: ['U1'],
    status: [matchStatus],
    tournamentId: [6],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverValorantMatchesVideogameTitle],
    videogameVersion: [filterOverValorantMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverValorantMatches = {
    beginAt: ['occaecat do'],
    detailedStats: [true],
    draw: [true],
    endAt: ['officia '],
    forfeit: [true],
    id: [3],
    matchType: [matchType],
    modifiedAt: ['ut ullamco l'],
    name: ['nulla es'],
    numberOfGames: [10],
    scheduledAt: ['dolor Ut u'],
    slug: ['GXZ9'],
    status: [matchStatus],
    tournamentId: [4],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverValorantMatches = {
    matchType: matchType,
    name: 'id occaec',
    slug: 'liL4T',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantMatches.getValorantMatchesPast({
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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverValorantMatches,
  SearchOverValorantMatches,
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

  const filterOverValorantMatchesVideogameTitle = 9;

  const filterOverValorantMatchesVideogameVersion = '297342.45230068';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverValorantMatches = {
    beginAt: ['est ex u'],
    detailedStats: true,
    draw: true,
    endAt: ['sit aliqua'],
    finished: true,
    forfeit: true,
    future: true,
    id: [7],
    leagueId: [5],
    matchType: [matchType],
    modifiedAt: ['non'],
    name: ['sint '],
    notStarted: true,
    numberOfGames: [4],
    opponentId: [filterOverValorantMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['est cillum eiu'],
    serieId: [10],
    slug: ['U1'],
    status: [matchStatus],
    tournamentId: [6],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverValorantMatchesVideogameTitle],
    videogameVersion: [filterOverValorantMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverValorantMatches = {
    beginAt: ['occaecat do'],
    detailedStats: [true],
    draw: [true],
    endAt: ['officia '],
    forfeit: [true],
    id: [3],
    matchType: [matchType],
    modifiedAt: ['ut ullamco l'],
    name: ['nulla es'],
    numberOfGames: [10],
    scheduledAt: ['dolor Ut u'],
    slug: ['GXZ9'],
    status: [matchStatus],
    tournamentId: [4],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverValorantMatches = {
    matchType: matchType,
    name: 'id occaec',
    slug: 'liL4T',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantMatches.getValorantMatchesRunning({
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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverValorantMatches,
  SearchOverValorantMatches,
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

  const filterOverValorantMatchesVideogameTitle = 9;

  const filterOverValorantMatchesVideogameVersion = '297342.45230068';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverValorantMatches = {
    beginAt: ['est ex u'],
    detailedStats: true,
    draw: true,
    endAt: ['sit aliqua'],
    finished: true,
    forfeit: true,
    future: true,
    id: [7],
    leagueId: [5],
    matchType: [matchType],
    modifiedAt: ['non'],
    name: ['sint '],
    notStarted: true,
    numberOfGames: [4],
    opponentId: [filterOverValorantMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['est cillum eiu'],
    serieId: [10],
    slug: ['U1'],
    status: [matchStatus],
    tournamentId: [6],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverValorantMatchesVideogameTitle],
    videogameVersion: [filterOverValorantMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverValorantMatches = {
    beginAt: ['occaecat do'],
    detailedStats: [true],
    draw: [true],
    endAt: ['officia '],
    forfeit: [true],
    id: [3],
    matchType: [matchType],
    modifiedAt: ['ut ullamco l'],
    name: ['nulla es'],
    numberOfGames: [10],
    scheduledAt: ['dolor Ut u'],
    slug: ['GXZ9'],
    status: [matchStatus],
    tournamentId: [4],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverValorantMatches = {
    matchType: matchType,
    name: 'id occaec',
    slug: 'liL4T',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantMatches.getValorantMatchesUpcoming({
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
