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
  Page,
  PandascoreClient,
  RangeOverLolWildRiftMatches,
  SearchOverLolWildRiftMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverLolWildRiftMatchesVideogameTitle = 8;

  const filterOverLolWildRiftMatchesVideogameVersion = '156.75188480.912455326';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverLolWildRiftMatches: FilterOverLolWildRiftMatches = {
    beginAt: ['velit irure'],
    detailedStats: true,
    draw: true,
    endAt: ['ani'],
    finished: true,
    forfeit: true,
    future: true,
    id: [10],
    leagueId: [4],
    matchType: [matchType],
    modifiedAt: ['aliquip'],
    name: ['velit Except'],
    notStarted: true,
    numberOfGames: [2],
    opponentId: [filterOverLolWildRiftMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['aliqua ulla'],
    serieId: [5],
    slug: ['REqPO'],
    status: [matchStatus],
    tournamentId: [4],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverLolWildRiftMatchesVideogameTitle],
    videogameVersion: [filterOverLolWildRiftMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverLolWildRiftMatches: RangeOverLolWildRiftMatches = {
    beginAt: ['qui laboris'],
    detailedStats: [true],
    draw: [true],
    endAt: ['occaecat commo'],
    forfeit: [true],
    id: [1],
    matchType: [matchType1],
    modifiedAt: ['ullamco ex do'],
    name: ['dolore '],
    numberOfGames: [6],
    scheduledAt: ['amet '],
    slug: ['SWMMt'],
    status: [matchStatus1],
    tournamentId: [8],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverLolWildRiftMatches: SearchOverLolWildRiftMatches = {
    matchType: matchType12,
    name: 'nostrud',
    slug: 'P-',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftMatches.getLolWildRiftMatches({
    filter: filterOverLolWildRiftMatches,
    range: rangeOverLolWildRiftMatches,
    sort: [[]],
    search: searchOverLolWildRiftMatches,
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
  Page,
  PandascoreClient,
  RangeOverLolWildRiftMatches,
  SearchOverLolWildRiftMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverLolWildRiftMatchesVideogameTitle = 8;

  const filterOverLolWildRiftMatchesVideogameVersion = '156.75188480.912455326';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverLolWildRiftMatches: FilterOverLolWildRiftMatches = {
    beginAt: ['velit irure'],
    detailedStats: true,
    draw: true,
    endAt: ['ani'],
    finished: true,
    forfeit: true,
    future: true,
    id: [10],
    leagueId: [4],
    matchType: [matchType],
    modifiedAt: ['aliquip'],
    name: ['velit Except'],
    notStarted: true,
    numberOfGames: [2],
    opponentId: [filterOverLolWildRiftMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['aliqua ulla'],
    serieId: [5],
    slug: ['REqPO'],
    status: [matchStatus],
    tournamentId: [4],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverLolWildRiftMatchesVideogameTitle],
    videogameVersion: [filterOverLolWildRiftMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverLolWildRiftMatches: RangeOverLolWildRiftMatches = {
    beginAt: ['qui laboris'],
    detailedStats: [true],
    draw: [true],
    endAt: ['occaecat commo'],
    forfeit: [true],
    id: [1],
    matchType: [matchType1],
    modifiedAt: ['ullamco ex do'],
    name: ['dolore '],
    numberOfGames: [6],
    scheduledAt: ['amet '],
    slug: ['SWMMt'],
    status: [matchStatus1],
    tournamentId: [8],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverLolWildRiftMatches: SearchOverLolWildRiftMatches = {
    matchType: matchType12,
    name: 'nostrud',
    slug: 'P-',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftMatches.getLolWildRiftMatchesPast({
    filter: filterOverLolWildRiftMatches,
    range: rangeOverLolWildRiftMatches,
    sort: [[]],
    search: searchOverLolWildRiftMatches,
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
  Page,
  PandascoreClient,
  RangeOverLolWildRiftMatches,
  SearchOverLolWildRiftMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverLolWildRiftMatchesVideogameTitle = 8;

  const filterOverLolWildRiftMatchesVideogameVersion = '156.75188480.912455326';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverLolWildRiftMatches: FilterOverLolWildRiftMatches = {
    beginAt: ['velit irure'],
    detailedStats: true,
    draw: true,
    endAt: ['ani'],
    finished: true,
    forfeit: true,
    future: true,
    id: [10],
    leagueId: [4],
    matchType: [matchType],
    modifiedAt: ['aliquip'],
    name: ['velit Except'],
    notStarted: true,
    numberOfGames: [2],
    opponentId: [filterOverLolWildRiftMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['aliqua ulla'],
    serieId: [5],
    slug: ['REqPO'],
    status: [matchStatus],
    tournamentId: [4],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverLolWildRiftMatchesVideogameTitle],
    videogameVersion: [filterOverLolWildRiftMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverLolWildRiftMatches: RangeOverLolWildRiftMatches = {
    beginAt: ['qui laboris'],
    detailedStats: [true],
    draw: [true],
    endAt: ['occaecat commo'],
    forfeit: [true],
    id: [1],
    matchType: [matchType1],
    modifiedAt: ['ullamco ex do'],
    name: ['dolore '],
    numberOfGames: [6],
    scheduledAt: ['amet '],
    slug: ['SWMMt'],
    status: [matchStatus1],
    tournamentId: [8],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverLolWildRiftMatches: SearchOverLolWildRiftMatches = {
    matchType: matchType12,
    name: 'nostrud',
    slug: 'P-',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftMatches.getLolWildRiftMatchesRunning({
    filter: filterOverLolWildRiftMatches,
    range: rangeOverLolWildRiftMatches,
    sort: [[]],
    search: searchOverLolWildRiftMatches,
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
  Page,
  PandascoreClient,
  RangeOverLolWildRiftMatches,
  SearchOverLolWildRiftMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverLolWildRiftMatchesVideogameTitle = 8;

  const filterOverLolWildRiftMatchesVideogameVersion = '156.75188480.912455326';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverLolWildRiftMatches: FilterOverLolWildRiftMatches = {
    beginAt: ['velit irure'],
    detailedStats: true,
    draw: true,
    endAt: ['ani'],
    finished: true,
    forfeit: true,
    future: true,
    id: [10],
    leagueId: [4],
    matchType: [matchType],
    modifiedAt: ['aliquip'],
    name: ['velit Except'],
    notStarted: true,
    numberOfGames: [2],
    opponentId: [filterOverLolWildRiftMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['aliqua ulla'],
    serieId: [5],
    slug: ['REqPO'],
    status: [matchStatus],
    tournamentId: [4],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverLolWildRiftMatchesVideogameTitle],
    videogameVersion: [filterOverLolWildRiftMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverLolWildRiftMatches: RangeOverLolWildRiftMatches = {
    beginAt: ['qui laboris'],
    detailedStats: [true],
    draw: [true],
    endAt: ['occaecat commo'],
    forfeit: [true],
    id: [1],
    matchType: [matchType1],
    modifiedAt: ['ullamco ex do'],
    name: ['dolore '],
    numberOfGames: [6],
    scheduledAt: ['amet '],
    slug: ['SWMMt'],
    status: [matchStatus1],
    tournamentId: [8],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverLolWildRiftMatches: SearchOverLolWildRiftMatches = {
    matchType: matchType12,
    name: 'nostrud',
    slug: 'P-',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.loLWildRiftMatches.getLolWildRiftMatchesUpcoming({
    filter: filterOverLolWildRiftMatches,
    range: rangeOverLolWildRiftMatches,
    sort: [[]],
    search: searchOverLolWildRiftMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
