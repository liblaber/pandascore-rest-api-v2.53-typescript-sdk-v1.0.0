# OwMatchesService

A list of all methods in the `OwMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description                              |
| :-------------------------------------------------- | :--------------------------------------- |
| [get_ow_matches](#get_ow_matches)                   | List matches for the Overwatch videogame |
| [get_ow_matches_past](#get_ow_matches_past)         | List past Overwatch matches              |
| [get_ow_matches_running](#get_ow_matches_running)   | List running Overwatch matches           |
| [get_ow_matches_upcoming](#get_ow_matches_upcoming) | List upcoming Overwatch matches          |

## get_ow_matches

List matches for the Overwatch videogame

- HTTP Method: `GET`
- Endpoint: `/ow/matches`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwMatches](../models/FilterOverOwMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwMatches](../models/RangeOverOwMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwMatches](../models/SearchOverOwMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverOwMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverOwMatches,
  SearchOverOwMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverOwMatchesVideogameTitle = 6;

  const filterOverOwMatchesVideogameVersion = '50504779.61189519999';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverOwMatches: FilterOverOwMatches = {
    beginAt: ['Dui'],
    detailedStats: true,
    draw: true,
    endAt: ['d'],
    finished: true,
    forfeit: true,
    future: true,
    id: [10],
    leagueId: [4],
    matchType: [matchType],
    modifiedAt: ['voluptate dol'],
    name: ['veniam'],
    notStarted: true,
    numberOfGames: [6],
    opponentId: [filterOverOwMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['laboru'],
    serieId: [8],
    slug: ['Bbdi W6S'],
    status: [matchStatus],
    tournamentId: [9],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverOwMatchesVideogameTitle],
    videogameVersion: [filterOverOwMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverOwMatches: RangeOverOwMatches = {
    beginAt: ['r'],
    detailedStats: [true],
    draw: [true],
    endAt: ['incididunt'],
    forfeit: [true],
    id: [1],
    matchType: [matchType1],
    modifiedAt: ['ipsum labo'],
    name: ['inetea '],
    numberOfGames: [1],
    scheduledAt: ['consequat'],
    slug: ['epM'],
    status: [matchStatus1],
    tournamentId: [3],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverOwMatches: SearchOverOwMatches = {
    matchType: matchType12,
    name: 'ex Duis magn',
    slug: 'B',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.owMatches.getOwMatches({
    filter: filterOverOwMatches,
    range: rangeOverOwMatches,
    sort: [[]],
    search: searchOverOwMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_ow_matches_past

List past Overwatch matches

- HTTP Method: `GET`
- Endpoint: `/ow/matches/past`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwMatches](../models/FilterOverOwMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwMatches](../models/RangeOverOwMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwMatches](../models/SearchOverOwMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverOwMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverOwMatches,
  SearchOverOwMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverOwMatchesVideogameTitle = 6;

  const filterOverOwMatchesVideogameVersion = '50504779.61189519999';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverOwMatches: FilterOverOwMatches = {
    beginAt: ['Dui'],
    detailedStats: true,
    draw: true,
    endAt: ['d'],
    finished: true,
    forfeit: true,
    future: true,
    id: [10],
    leagueId: [4],
    matchType: [matchType],
    modifiedAt: ['voluptate dol'],
    name: ['veniam'],
    notStarted: true,
    numberOfGames: [6],
    opponentId: [filterOverOwMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['laboru'],
    serieId: [8],
    slug: ['Bbdi W6S'],
    status: [matchStatus],
    tournamentId: [9],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverOwMatchesVideogameTitle],
    videogameVersion: [filterOverOwMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverOwMatches: RangeOverOwMatches = {
    beginAt: ['r'],
    detailedStats: [true],
    draw: [true],
    endAt: ['incididunt'],
    forfeit: [true],
    id: [1],
    matchType: [matchType1],
    modifiedAt: ['ipsum labo'],
    name: ['inetea '],
    numberOfGames: [1],
    scheduledAt: ['consequat'],
    slug: ['epM'],
    status: [matchStatus1],
    tournamentId: [3],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverOwMatches: SearchOverOwMatches = {
    matchType: matchType12,
    name: 'ex Duis magn',
    slug: 'B',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.owMatches.getOwMatchesPast({
    filter: filterOverOwMatches,
    range: rangeOverOwMatches,
    sort: [[]],
    search: searchOverOwMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_ow_matches_running

List running Overwatch matches

- HTTP Method: `GET`
- Endpoint: `/ow/matches/running`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwMatches](../models/FilterOverOwMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwMatches](../models/RangeOverOwMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwMatches](../models/SearchOverOwMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverOwMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverOwMatches,
  SearchOverOwMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverOwMatchesVideogameTitle = 6;

  const filterOverOwMatchesVideogameVersion = '50504779.61189519999';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverOwMatches: FilterOverOwMatches = {
    beginAt: ['Dui'],
    detailedStats: true,
    draw: true,
    endAt: ['d'],
    finished: true,
    forfeit: true,
    future: true,
    id: [10],
    leagueId: [4],
    matchType: [matchType],
    modifiedAt: ['voluptate dol'],
    name: ['veniam'],
    notStarted: true,
    numberOfGames: [6],
    opponentId: [filterOverOwMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['laboru'],
    serieId: [8],
    slug: ['Bbdi W6S'],
    status: [matchStatus],
    tournamentId: [9],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverOwMatchesVideogameTitle],
    videogameVersion: [filterOverOwMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverOwMatches: RangeOverOwMatches = {
    beginAt: ['r'],
    detailedStats: [true],
    draw: [true],
    endAt: ['incididunt'],
    forfeit: [true],
    id: [1],
    matchType: [matchType1],
    modifiedAt: ['ipsum labo'],
    name: ['inetea '],
    numberOfGames: [1],
    scheduledAt: ['consequat'],
    slug: ['epM'],
    status: [matchStatus1],
    tournamentId: [3],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverOwMatches: SearchOverOwMatches = {
    matchType: matchType12,
    name: 'ex Duis magn',
    slug: 'B',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.owMatches.getOwMatchesRunning({
    filter: filterOverOwMatches,
    range: rangeOverOwMatches,
    sort: [[]],
    search: searchOverOwMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_ow_matches_upcoming

List upcoming Overwatch matches

- HTTP Method: `GET`
- Endpoint: `/ow/matches/upcoming`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwMatches](../models/FilterOverOwMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwMatches](../models/RangeOverOwMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwMatches](../models/SearchOverOwMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverOwMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverOwMatches,
  SearchOverOwMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverOwMatchesVideogameTitle = 6;

  const filterOverOwMatchesVideogameVersion = '50504779.61189519999';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverOwMatches: FilterOverOwMatches = {
    beginAt: ['Dui'],
    detailedStats: true,
    draw: true,
    endAt: ['d'],
    finished: true,
    forfeit: true,
    future: true,
    id: [10],
    leagueId: [4],
    matchType: [matchType],
    modifiedAt: ['voluptate dol'],
    name: ['veniam'],
    notStarted: true,
    numberOfGames: [6],
    opponentId: [filterOverOwMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['laboru'],
    serieId: [8],
    slug: ['Bbdi W6S'],
    status: [matchStatus],
    tournamentId: [9],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverOwMatchesVideogameTitle],
    videogameVersion: [filterOverOwMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverOwMatches: RangeOverOwMatches = {
    beginAt: ['r'],
    detailedStats: [true],
    draw: [true],
    endAt: ['incididunt'],
    forfeit: [true],
    id: [1],
    matchType: [matchType1],
    modifiedAt: ['ipsum labo'],
    name: ['inetea '],
    numberOfGames: [1],
    scheduledAt: ['consequat'],
    slug: ['epM'],
    status: [matchStatus1],
    tournamentId: [3],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverOwMatches: SearchOverOwMatches = {
    matchType: matchType12,
    name: 'ex Duis magn',
    slug: 'B',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.owMatches.getOwMatchesUpcoming({
    filter: filterOverOwMatches,
    range: rangeOverOwMatches,
    sort: [[]],
    search: searchOverOwMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
