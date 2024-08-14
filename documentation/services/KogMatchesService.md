# KogMatchesService

A list of all methods in the `KogMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                                  |
| :---------------------------------------------------- | :------------------------------------------- |
| [get_kog_matches](#get_kog_matches)                   | List matches for the King of Glory videogame |
| [get_kog_matches_past](#get_kog_matches_past)         | List past King of Glory matches              |
| [get_kog_matches_running](#get_kog_matches_running)   | List running King of Glory matches           |
| [get_kog_matches_upcoming](#get_kog_matches_upcoming) | List upcoming King of Glory matches          |

## get_kog_matches

List matches for the King of Glory videogame

- HTTP Method: `GET`
- Endpoint: `/kog/matches`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogMatches](../models/FilterOverKogMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogMatches](../models/RangeOverKogMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogMatches](../models/SearchOverKogMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverKogMatches,
  SearchOverKogMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverKogMatchesVideogameTitle = 6;

  const filterOverKogMatchesVideogameVersion = '6.4314860.74685349364';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverKogMatches: FilterOverKogMatches = {
    beginAt: ['Du'],
    detailedStats: true,
    draw: true,
    endAt: ['voluptate'],
    finished: true,
    forfeit: true,
    future: true,
    id: [6],
    leagueId: [6],
    matchType: [matchType],
    modifiedAt: ['labore id fugi'],
    name: ['nostrud veniam'],
    notStarted: true,
    numberOfGames: [7],
    opponentId: [filterOverKogMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['sed Du'],
    serieId: [10],
    slug: ['GJ7GWuEfy'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverKogMatchesVideogameTitle],
    videogameVersion: [filterOverKogMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverKogMatches: RangeOverKogMatches = {
    beginAt: ['Lo'],
    detailedStats: [true],
    draw: [true],
    endAt: ['eu minim par'],
    forfeit: [true],
    id: [6],
    matchType: [matchType1],
    modifiedAt: ['est'],
    name: ['Lorem '],
    numberOfGames: [2],
    scheduledAt: ['et'],
    slug: ['vBKKlSKdbR'],
    status: [matchStatus1],
    tournamentId: [5],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverKogMatches: SearchOverKogMatches = {
    matchType: matchType12,
    name: 'cillum v',
    slug: 'Vy-2dZKJxf',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogMatches.getKogMatches({
    filter: filterOverKogMatches,
    range: rangeOverKogMatches,
    sort: [[]],
    search: searchOverKogMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_kog_matches_past

List past King of Glory matches

- HTTP Method: `GET`
- Endpoint: `/kog/matches/past`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogMatches](../models/FilterOverKogMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogMatches](../models/RangeOverKogMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogMatches](../models/SearchOverKogMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverKogMatches,
  SearchOverKogMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverKogMatchesVideogameTitle = 6;

  const filterOverKogMatchesVideogameVersion = '6.4314860.74685349364';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverKogMatches: FilterOverKogMatches = {
    beginAt: ['Du'],
    detailedStats: true,
    draw: true,
    endAt: ['voluptate'],
    finished: true,
    forfeit: true,
    future: true,
    id: [6],
    leagueId: [6],
    matchType: [matchType],
    modifiedAt: ['labore id fugi'],
    name: ['nostrud veniam'],
    notStarted: true,
    numberOfGames: [7],
    opponentId: [filterOverKogMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['sed Du'],
    serieId: [10],
    slug: ['GJ7GWuEfy'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverKogMatchesVideogameTitle],
    videogameVersion: [filterOverKogMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverKogMatches: RangeOverKogMatches = {
    beginAt: ['Lo'],
    detailedStats: [true],
    draw: [true],
    endAt: ['eu minim par'],
    forfeit: [true],
    id: [6],
    matchType: [matchType1],
    modifiedAt: ['est'],
    name: ['Lorem '],
    numberOfGames: [2],
    scheduledAt: ['et'],
    slug: ['vBKKlSKdbR'],
    status: [matchStatus1],
    tournamentId: [5],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverKogMatches: SearchOverKogMatches = {
    matchType: matchType12,
    name: 'cillum v',
    slug: 'Vy-2dZKJxf',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogMatches.getKogMatchesPast({
    filter: filterOverKogMatches,
    range: rangeOverKogMatches,
    sort: [[]],
    search: searchOverKogMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_kog_matches_running

List running King of Glory matches

- HTTP Method: `GET`
- Endpoint: `/kog/matches/running`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogMatches](../models/FilterOverKogMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogMatches](../models/RangeOverKogMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogMatches](../models/SearchOverKogMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverKogMatches,
  SearchOverKogMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverKogMatchesVideogameTitle = 6;

  const filterOverKogMatchesVideogameVersion = '6.4314860.74685349364';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverKogMatches: FilterOverKogMatches = {
    beginAt: ['Du'],
    detailedStats: true,
    draw: true,
    endAt: ['voluptate'],
    finished: true,
    forfeit: true,
    future: true,
    id: [6],
    leagueId: [6],
    matchType: [matchType],
    modifiedAt: ['labore id fugi'],
    name: ['nostrud veniam'],
    notStarted: true,
    numberOfGames: [7],
    opponentId: [filterOverKogMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['sed Du'],
    serieId: [10],
    slug: ['GJ7GWuEfy'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverKogMatchesVideogameTitle],
    videogameVersion: [filterOverKogMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverKogMatches: RangeOverKogMatches = {
    beginAt: ['Lo'],
    detailedStats: [true],
    draw: [true],
    endAt: ['eu minim par'],
    forfeit: [true],
    id: [6],
    matchType: [matchType1],
    modifiedAt: ['est'],
    name: ['Lorem '],
    numberOfGames: [2],
    scheduledAt: ['et'],
    slug: ['vBKKlSKdbR'],
    status: [matchStatus1],
    tournamentId: [5],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverKogMatches: SearchOverKogMatches = {
    matchType: matchType12,
    name: 'cillum v',
    slug: 'Vy-2dZKJxf',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogMatches.getKogMatchesRunning({
    filter: filterOverKogMatches,
    range: rangeOverKogMatches,
    sort: [[]],
    search: searchOverKogMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_kog_matches_upcoming

List upcoming King of Glory matches

- HTTP Method: `GET`
- Endpoint: `/kog/matches/upcoming`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogMatches](../models/FilterOverKogMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogMatches](../models/RangeOverKogMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogMatches](../models/SearchOverKogMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverKogMatches,
  SearchOverKogMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverKogMatchesVideogameTitle = 6;

  const filterOverKogMatchesVideogameVersion = '6.4314860.74685349364';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverKogMatches: FilterOverKogMatches = {
    beginAt: ['Du'],
    detailedStats: true,
    draw: true,
    endAt: ['voluptate'],
    finished: true,
    forfeit: true,
    future: true,
    id: [6],
    leagueId: [6],
    matchType: [matchType],
    modifiedAt: ['labore id fugi'],
    name: ['nostrud veniam'],
    notStarted: true,
    numberOfGames: [7],
    opponentId: [filterOverKogMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['sed Du'],
    serieId: [10],
    slug: ['GJ7GWuEfy'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverKogMatchesVideogameTitle],
    videogameVersion: [filterOverKogMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverKogMatches: RangeOverKogMatches = {
    beginAt: ['Lo'],
    detailedStats: [true],
    draw: [true],
    endAt: ['eu minim par'],
    forfeit: [true],
    id: [6],
    matchType: [matchType1],
    modifiedAt: ['est'],
    name: ['Lorem '],
    numberOfGames: [2],
    scheduledAt: ['et'],
    slug: ['vBKKlSKdbR'],
    status: [matchStatus1],
    tournamentId: [5],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverKogMatches: SearchOverKogMatches = {
    matchType: matchType12,
    name: 'cillum v',
    slug: 'Vy-2dZKJxf',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogMatches.getKogMatchesUpcoming({
    filter: filterOverKogMatches,
    range: rangeOverKogMatches,
    sort: [[]],
    search: searchOverKogMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
