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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverOwMatches,
  SearchOverOwMatches,
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

  const filterOverOwMatchesVideogameTitle = 3;

  const filterOverOwMatchesVideogameVersion = '18.28195562';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverOwMatches = {
    beginAt: ['irure'],
    detailedStats: true,
    draw: true,
    endAt: ['exercitation'],
    finished: true,
    forfeit: true,
    future: true,
    id: [6],
    leagueId: [7],
    matchType: [matchType],
    modifiedAt: ['minim i'],
    name: ['do tempor cupid'],
    notStarted: true,
    numberOfGames: [9],
    opponentId: [filterOverOwMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['i'],
    serieId: [1],
    slug: ['Gr'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverOwMatchesVideogameTitle],
    videogameVersion: [filterOverOwMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverOwMatches = {
    beginAt: ['pariatu'],
    detailedStats: [true],
    draw: [true],
    endAt: ['aut'],
    forfeit: [true],
    id: [1],
    matchType: [matchType],
    modifiedAt: ['venia'],
    name: ['incidid'],
    numberOfGames: [123],
    scheduledAt: ['consectetur'],
    slug: ['yYatbFrSyos'],
    status: [matchStatus],
    tournamentId: [6],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverOwMatches = {
    matchType: matchType,
    name: 'velit eu qui',
    slug: 'J8CP',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.owMatches.getOwMatches({
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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverOwMatches,
  SearchOverOwMatches,
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

  const filterOverOwMatchesVideogameTitle = 3;

  const filterOverOwMatchesVideogameVersion = '18.28195562';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverOwMatches = {
    beginAt: ['irure'],
    detailedStats: true,
    draw: true,
    endAt: ['exercitation'],
    finished: true,
    forfeit: true,
    future: true,
    id: [6],
    leagueId: [7],
    matchType: [matchType],
    modifiedAt: ['minim i'],
    name: ['do tempor cupid'],
    notStarted: true,
    numberOfGames: [9],
    opponentId: [filterOverOwMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['i'],
    serieId: [1],
    slug: ['Gr'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverOwMatchesVideogameTitle],
    videogameVersion: [filterOverOwMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverOwMatches = {
    beginAt: ['pariatu'],
    detailedStats: [true],
    draw: [true],
    endAt: ['aut'],
    forfeit: [true],
    id: [1],
    matchType: [matchType],
    modifiedAt: ['venia'],
    name: ['incidid'],
    numberOfGames: [123],
    scheduledAt: ['consectetur'],
    slug: ['yYatbFrSyos'],
    status: [matchStatus],
    tournamentId: [6],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverOwMatches = {
    matchType: matchType,
    name: 'velit eu qui',
    slug: 'J8CP',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.owMatches.getOwMatchesPast({
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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverOwMatches,
  SearchOverOwMatches,
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

  const filterOverOwMatchesVideogameTitle = 3;

  const filterOverOwMatchesVideogameVersion = '18.28195562';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverOwMatches = {
    beginAt: ['irure'],
    detailedStats: true,
    draw: true,
    endAt: ['exercitation'],
    finished: true,
    forfeit: true,
    future: true,
    id: [6],
    leagueId: [7],
    matchType: [matchType],
    modifiedAt: ['minim i'],
    name: ['do tempor cupid'],
    notStarted: true,
    numberOfGames: [9],
    opponentId: [filterOverOwMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['i'],
    serieId: [1],
    slug: ['Gr'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverOwMatchesVideogameTitle],
    videogameVersion: [filterOverOwMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverOwMatches = {
    beginAt: ['pariatu'],
    detailedStats: [true],
    draw: [true],
    endAt: ['aut'],
    forfeit: [true],
    id: [1],
    matchType: [matchType],
    modifiedAt: ['venia'],
    name: ['incidid'],
    numberOfGames: [123],
    scheduledAt: ['consectetur'],
    slug: ['yYatbFrSyos'],
    status: [matchStatus],
    tournamentId: [6],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverOwMatches = {
    matchType: matchType,
    name: 'velit eu qui',
    slug: 'J8CP',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.owMatches.getOwMatchesRunning({
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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverOwMatches,
  SearchOverOwMatches,
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

  const filterOverOwMatchesVideogameTitle = 3;

  const filterOverOwMatchesVideogameVersion = '18.28195562';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverOwMatches = {
    beginAt: ['irure'],
    detailedStats: true,
    draw: true,
    endAt: ['exercitation'],
    finished: true,
    forfeit: true,
    future: true,
    id: [6],
    leagueId: [7],
    matchType: [matchType],
    modifiedAt: ['minim i'],
    name: ['do tempor cupid'],
    notStarted: true,
    numberOfGames: [9],
    opponentId: [filterOverOwMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['i'],
    serieId: [1],
    slug: ['Gr'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverOwMatchesVideogameTitle],
    videogameVersion: [filterOverOwMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverOwMatches = {
    beginAt: ['pariatu'],
    detailedStats: [true],
    draw: [true],
    endAt: ['aut'],
    forfeit: [true],
    id: [1],
    matchType: [matchType],
    modifiedAt: ['venia'],
    name: ['incidid'],
    numberOfGames: [123],
    scheduledAt: ['consectetur'],
    slug: ['yYatbFrSyos'],
    status: [matchStatus],
    tournamentId: [6],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverOwMatches = {
    matchType: matchType,
    name: 'velit eu qui',
    slug: 'J8CP',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.owMatches.getOwMatchesUpcoming({
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
