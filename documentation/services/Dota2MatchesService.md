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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverDota2Matches,
  SearchOverDota2Matches,
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

  const filterOverDota2MatchesVideogameTitle = 10;

  const filterOverDota2MatchesVideogameVersion = '95757454.6917';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverDota2Matches = {
    beginAt: ['fugiat '],
    detailedStats: true,
    draw: true,
    endAt: ['ad E'],
    finished: true,
    forfeit: true,
    future: true,
    id: [6],
    leagueId: [3],
    matchType: [matchType],
    modifiedAt: ['occaecat ullamc'],
    name: ['fugiat des'],
    notStarted: true,
    numberOfGames: [1],
    opponentId: [filterOverDota2MatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['Ut labo'],
    serieId: [2],
    slug: ['uKN'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverDota2MatchesVideogameTitle],
    videogameVersion: [filterOverDota2MatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverDota2Matches = {
    beginAt: ['ullamco nos'],
    detailedStats: [true],
    draw: [true],
    endAt: ['tempor aut'],
    forfeit: [true],
    id: [5],
    matchType: [matchType],
    modifiedAt: ['aliqui'],
    name: ['nostru'],
    numberOfGames: [7],
    scheduledAt: ['mollit Duis '],
    slug: ['uj'],
    status: [matchStatus],
    tournamentId: [6],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverDota2Matches = {
    matchType: matchType,
    name: 'proid',
    slug: 'Vxza1x2ql ',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Matches.getDota2Matches({
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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverDota2Matches,
  SearchOverDota2Matches,
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

  const filterOverDota2MatchesVideogameTitle = 10;

  const filterOverDota2MatchesVideogameVersion = '95757454.6917';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverDota2Matches = {
    beginAt: ['fugiat '],
    detailedStats: true,
    draw: true,
    endAt: ['ad E'],
    finished: true,
    forfeit: true,
    future: true,
    id: [6],
    leagueId: [3],
    matchType: [matchType],
    modifiedAt: ['occaecat ullamc'],
    name: ['fugiat des'],
    notStarted: true,
    numberOfGames: [1],
    opponentId: [filterOverDota2MatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['Ut labo'],
    serieId: [2],
    slug: ['uKN'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverDota2MatchesVideogameTitle],
    videogameVersion: [filterOverDota2MatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverDota2Matches = {
    beginAt: ['ullamco nos'],
    detailedStats: [true],
    draw: [true],
    endAt: ['tempor aut'],
    forfeit: [true],
    id: [5],
    matchType: [matchType],
    modifiedAt: ['aliqui'],
    name: ['nostru'],
    numberOfGames: [7],
    scheduledAt: ['mollit Duis '],
    slug: ['uj'],
    status: [matchStatus],
    tournamentId: [6],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverDota2Matches = {
    matchType: matchType,
    name: 'proid',
    slug: 'Vxza1x2ql ',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Matches.getDota2MatchesPast({
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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverDota2Matches,
  SearchOverDota2Matches,
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

  const filterOverDota2MatchesVideogameTitle = 10;

  const filterOverDota2MatchesVideogameVersion = '95757454.6917';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverDota2Matches = {
    beginAt: ['fugiat '],
    detailedStats: true,
    draw: true,
    endAt: ['ad E'],
    finished: true,
    forfeit: true,
    future: true,
    id: [6],
    leagueId: [3],
    matchType: [matchType],
    modifiedAt: ['occaecat ullamc'],
    name: ['fugiat des'],
    notStarted: true,
    numberOfGames: [1],
    opponentId: [filterOverDota2MatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['Ut labo'],
    serieId: [2],
    slug: ['uKN'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverDota2MatchesVideogameTitle],
    videogameVersion: [filterOverDota2MatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverDota2Matches = {
    beginAt: ['ullamco nos'],
    detailedStats: [true],
    draw: [true],
    endAt: ['tempor aut'],
    forfeit: [true],
    id: [5],
    matchType: [matchType],
    modifiedAt: ['aliqui'],
    name: ['nostru'],
    numberOfGames: [7],
    scheduledAt: ['mollit Duis '],
    slug: ['uj'],
    status: [matchStatus],
    tournamentId: [6],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverDota2Matches = {
    matchType: matchType,
    name: 'proid',
    slug: 'Vxza1x2ql ',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Matches.getDota2MatchesRunning({
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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverDota2Matches,
  SearchOverDota2Matches,
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

  const filterOverDota2MatchesVideogameTitle = 10;

  const filterOverDota2MatchesVideogameVersion = '95757454.6917';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverDota2Matches = {
    beginAt: ['fugiat '],
    detailedStats: true,
    draw: true,
    endAt: ['ad E'],
    finished: true,
    forfeit: true,
    future: true,
    id: [6],
    leagueId: [3],
    matchType: [matchType],
    modifiedAt: ['occaecat ullamc'],
    name: ['fugiat des'],
    notStarted: true,
    numberOfGames: [1],
    opponentId: [filterOverDota2MatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['Ut labo'],
    serieId: [2],
    slug: ['uKN'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverDota2MatchesVideogameTitle],
    videogameVersion: [filterOverDota2MatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverDota2Matches = {
    beginAt: ['ullamco nos'],
    detailedStats: [true],
    draw: [true],
    endAt: ['tempor aut'],
    forfeit: [true],
    id: [5],
    matchType: [matchType],
    modifiedAt: ['aliqui'],
    name: ['nostru'],
    numberOfGames: [7],
    scheduledAt: ['mollit Duis '],
    slug: ['uj'],
    status: [matchStatus],
    tournamentId: [6],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverDota2Matches = {
    matchType: matchType,
    name: 'proid',
    slug: 'Vxza1x2ql ',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Matches.getDota2MatchesUpcoming({
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
