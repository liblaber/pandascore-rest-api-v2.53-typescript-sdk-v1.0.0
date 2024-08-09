# LoLWildRiftMatchesService

A list of all methods in the `LoLWildRiftMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                   | Description                                  |
| :------------------------------------------------------------------------ | :------------------------------------------- |
| [get_lol_wild_rift_matches](#get_lol_wild_rift_matches)                   | List matches for the LoL Wild Rift videogame |
| [get_lol_wild_rift_matches_past](#get_lol_wild_rift_matches_past)         | List past LoL Wild Rift matches              |
| [get_lol_wild_rift_matches_running](#get_lol_wild_rift_matches_running)   | List running LoL Wild Rift matches           |
| [get_lol_wild_rift_matches_upcoming](#get_lol_wild_rift_matches_upcoming) | List upcoming LoL Wild Rift matches          |

## get_lol_wild_rift_matches

List matches for the LoL Wild Rift videogame

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/matches`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftMatches](../models/FilterOverLolWildRiftMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftMatches](../models/RangeOverLolWildRiftMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftMatches](../models/SearchOverLolWildRiftMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLolWildRiftMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverLolWildRiftMatches,
  SearchOverLolWildRiftMatches,
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

  const filterOverLolWildRiftMatchesVideogameTitle = 5;

  const filterOverLolWildRiftMatchesVideogameVersion = '64884381713.8497';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverLolWildRiftMatches = {
    beginAt: ['id proident'],
    detailedStats: true,
    draw: true,
    endAt: ['fugiat '],
    finished: true,
    forfeit: true,
    future: true,
    id: [10],
    leagueId: [9],
    matchType: [matchType],
    modifiedAt: ['sed labore ut '],
    name: ['adipisicin'],
    notStarted: true,
    numberOfGames: [4],
    opponentId: [filterOverLolWildRiftMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['elit al'],
    serieId: [9],
    slug: ['tq_M'],
    status: [matchStatus],
    tournamentId: [6],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverLolWildRiftMatchesVideogameTitle],
    videogameVersion: [filterOverLolWildRiftMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverLolWildRiftMatches = {
    beginAt: ['elit'],
    detailedStats: [true],
    draw: [true],
    endAt: ['dolo'],
    forfeit: [true],
    id: [4],
    matchType: [matchType],
    modifiedAt: ['elit n'],
    name: ['id voluptate'],
    numberOfGames: [3],
    scheduledAt: ['dolor'],
    slug: ['4DwJZo'],
    status: [matchStatus],
    tournamentId: [8],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverLolWildRiftMatches = {
    matchType: matchType,
    name: 'amet in culpa ',
    slug: 'zHJ',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftMatches.getLolWildRiftMatches({
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

## get_lol_wild_rift_matches_past

List past LoL Wild Rift matches

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/matches/past`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftMatches](../models/FilterOverLolWildRiftMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftMatches](../models/RangeOverLolWildRiftMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftMatches](../models/SearchOverLolWildRiftMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLolWildRiftMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverLolWildRiftMatches,
  SearchOverLolWildRiftMatches,
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

  const filterOverLolWildRiftMatchesVideogameTitle = 5;

  const filterOverLolWildRiftMatchesVideogameVersion = '64884381713.8497';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverLolWildRiftMatches = {
    beginAt: ['id proident'],
    detailedStats: true,
    draw: true,
    endAt: ['fugiat '],
    finished: true,
    forfeit: true,
    future: true,
    id: [10],
    leagueId: [9],
    matchType: [matchType],
    modifiedAt: ['sed labore ut '],
    name: ['adipisicin'],
    notStarted: true,
    numberOfGames: [4],
    opponentId: [filterOverLolWildRiftMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['elit al'],
    serieId: [9],
    slug: ['tq_M'],
    status: [matchStatus],
    tournamentId: [6],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverLolWildRiftMatchesVideogameTitle],
    videogameVersion: [filterOverLolWildRiftMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverLolWildRiftMatches = {
    beginAt: ['elit'],
    detailedStats: [true],
    draw: [true],
    endAt: ['dolo'],
    forfeit: [true],
    id: [4],
    matchType: [matchType],
    modifiedAt: ['elit n'],
    name: ['id voluptate'],
    numberOfGames: [3],
    scheduledAt: ['dolor'],
    slug: ['4DwJZo'],
    status: [matchStatus],
    tournamentId: [8],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverLolWildRiftMatches = {
    matchType: matchType,
    name: 'amet in culpa ',
    slug: 'zHJ',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftMatches.getLolWildRiftMatchesPast({
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

## get_lol_wild_rift_matches_running

List running LoL Wild Rift matches

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/matches/running`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftMatches](../models/FilterOverLolWildRiftMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftMatches](../models/RangeOverLolWildRiftMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftMatches](../models/SearchOverLolWildRiftMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLolWildRiftMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverLolWildRiftMatches,
  SearchOverLolWildRiftMatches,
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

  const filterOverLolWildRiftMatchesVideogameTitle = 5;

  const filterOverLolWildRiftMatchesVideogameVersion = '64884381713.8497';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverLolWildRiftMatches = {
    beginAt: ['id proident'],
    detailedStats: true,
    draw: true,
    endAt: ['fugiat '],
    finished: true,
    forfeit: true,
    future: true,
    id: [10],
    leagueId: [9],
    matchType: [matchType],
    modifiedAt: ['sed labore ut '],
    name: ['adipisicin'],
    notStarted: true,
    numberOfGames: [4],
    opponentId: [filterOverLolWildRiftMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['elit al'],
    serieId: [9],
    slug: ['tq_M'],
    status: [matchStatus],
    tournamentId: [6],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverLolWildRiftMatchesVideogameTitle],
    videogameVersion: [filterOverLolWildRiftMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverLolWildRiftMatches = {
    beginAt: ['elit'],
    detailedStats: [true],
    draw: [true],
    endAt: ['dolo'],
    forfeit: [true],
    id: [4],
    matchType: [matchType],
    modifiedAt: ['elit n'],
    name: ['id voluptate'],
    numberOfGames: [3],
    scheduledAt: ['dolor'],
    slug: ['4DwJZo'],
    status: [matchStatus],
    tournamentId: [8],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverLolWildRiftMatches = {
    matchType: matchType,
    name: 'amet in culpa ',
    slug: 'zHJ',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftMatches.getLolWildRiftMatchesRunning({
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

## get_lol_wild_rift_matches_upcoming

List upcoming LoL Wild Rift matches

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/matches/upcoming`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftMatches](../models/FilterOverLolWildRiftMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftMatches](../models/RangeOverLolWildRiftMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftMatches](../models/SearchOverLolWildRiftMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLolWildRiftMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverLolWildRiftMatches,
  SearchOverLolWildRiftMatches,
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

  const filterOverLolWildRiftMatchesVideogameTitle = 5;

  const filterOverLolWildRiftMatchesVideogameVersion = '64884381713.8497';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverLolWildRiftMatches = {
    beginAt: ['id proident'],
    detailedStats: true,
    draw: true,
    endAt: ['fugiat '],
    finished: true,
    forfeit: true,
    future: true,
    id: [10],
    leagueId: [9],
    matchType: [matchType],
    modifiedAt: ['sed labore ut '],
    name: ['adipisicin'],
    notStarted: true,
    numberOfGames: [4],
    opponentId: [filterOverLolWildRiftMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['elit al'],
    serieId: [9],
    slug: ['tq_M'],
    status: [matchStatus],
    tournamentId: [6],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverLolWildRiftMatchesVideogameTitle],
    videogameVersion: [filterOverLolWildRiftMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverLolWildRiftMatches = {
    beginAt: ['elit'],
    detailedStats: [true],
    draw: [true],
    endAt: ['dolo'],
    forfeit: [true],
    id: [4],
    matchType: [matchType],
    modifiedAt: ['elit n'],
    name: ['id voluptate'],
    numberOfGames: [3],
    scheduledAt: ['dolor'],
    slug: ['4DwJZo'],
    status: [matchStatus],
    tournamentId: [8],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverLolWildRiftMatches = {
    matchType: matchType,
    name: 'amet in culpa ',
    slug: 'zHJ',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftMatches.getLolWildRiftMatchesUpcoming({
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
