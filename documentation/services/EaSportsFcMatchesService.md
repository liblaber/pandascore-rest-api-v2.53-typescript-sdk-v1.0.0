# EaSportsFcMatchesService

A list of all methods in the `EaSportsFcMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                 | Description                                 |
| :------------------------------------------------------ | :------------------------------------------ |
| [get_fifa_matches](#get_fifa_matches)                   | List matches for the EA Sports FC videogame |
| [get_fifa_matches_past](#get_fifa_matches_past)         | List past EA Sports FC matches              |
| [get_fifa_matches_running](#get_fifa_matches_running)   | List running EA Sports FC matches           |
| [get_fifa_matches_upcoming](#get_fifa_matches_upcoming) | List upcoming EA Sports FC matches          |

## get_fifa_matches

List matches for the EA Sports FC videogame

- HTTP Method: `GET`
- Endpoint: `/fifa/matches`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaMatches](../models/FilterOverFifaMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaMatches](../models/RangeOverFifaMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaMatches](../models/SearchOverFifaMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverFifaMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverFifaMatches,
  SearchOverFifaMatches,
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

  const filterOverFifaMatchesVideogameTitle = 1;

  const filterOverFifaMatchesVideogameVersion = '49238084787.514806';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverFifaMatches = {
    beginAt: ['comm'],
    detailedStats: true,
    draw: true,
    endAt: ['a'],
    finished: true,
    forfeit: true,
    future: true,
    id: [10],
    leagueId: [1],
    matchType: [matchType],
    modifiedAt: ['culpa D'],
    name: ['cillum '],
    notStarted: true,
    numberOfGames: [1],
    opponentId: [filterOverFifaMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['dolor sunt'],
    serieId: [4],
    slug: ['6q'],
    status: [matchStatus],
    tournamentId: [9],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverFifaMatchesVideogameTitle],
    videogameVersion: [filterOverFifaMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverFifaMatches = {
    beginAt: ['c'],
    detailedStats: [true],
    draw: [true],
    endAt: ['ex irure id'],
    forfeit: [true],
    id: [8],
    matchType: [matchType],
    modifiedAt: ['eiusmod cillu'],
    name: ['enim anim eu '],
    numberOfGames: [4],
    scheduledAt: ['eu nisi mollit '],
    slug: ['DY'],
    status: [matchStatus],
    tournamentId: [4],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverFifaMatches = {
    matchType: matchType,
    name: 'magna officia E',
    slug: '04j8Ucdf',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcMatches.getFifaMatches({
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

## get_fifa_matches_past

List past EA Sports FC matches

- HTTP Method: `GET`
- Endpoint: `/fifa/matches/past`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaMatches](../models/FilterOverFifaMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaMatches](../models/RangeOverFifaMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaMatches](../models/SearchOverFifaMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverFifaMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverFifaMatches,
  SearchOverFifaMatches,
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

  const filterOverFifaMatchesVideogameTitle = 1;

  const filterOverFifaMatchesVideogameVersion = '49238084787.514806';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverFifaMatches = {
    beginAt: ['comm'],
    detailedStats: true,
    draw: true,
    endAt: ['a'],
    finished: true,
    forfeit: true,
    future: true,
    id: [10],
    leagueId: [1],
    matchType: [matchType],
    modifiedAt: ['culpa D'],
    name: ['cillum '],
    notStarted: true,
    numberOfGames: [1],
    opponentId: [filterOverFifaMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['dolor sunt'],
    serieId: [4],
    slug: ['6q'],
    status: [matchStatus],
    tournamentId: [9],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverFifaMatchesVideogameTitle],
    videogameVersion: [filterOverFifaMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverFifaMatches = {
    beginAt: ['c'],
    detailedStats: [true],
    draw: [true],
    endAt: ['ex irure id'],
    forfeit: [true],
    id: [8],
    matchType: [matchType],
    modifiedAt: ['eiusmod cillu'],
    name: ['enim anim eu '],
    numberOfGames: [4],
    scheduledAt: ['eu nisi mollit '],
    slug: ['DY'],
    status: [matchStatus],
    tournamentId: [4],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverFifaMatches = {
    matchType: matchType,
    name: 'magna officia E',
    slug: '04j8Ucdf',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcMatches.getFifaMatchesPast({
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

## get_fifa_matches_running

List running EA Sports FC matches

- HTTP Method: `GET`
- Endpoint: `/fifa/matches/running`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaMatches](../models/FilterOverFifaMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaMatches](../models/RangeOverFifaMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaMatches](../models/SearchOverFifaMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverFifaMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverFifaMatches,
  SearchOverFifaMatches,
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

  const filterOverFifaMatchesVideogameTitle = 1;

  const filterOverFifaMatchesVideogameVersion = '49238084787.514806';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverFifaMatches = {
    beginAt: ['comm'],
    detailedStats: true,
    draw: true,
    endAt: ['a'],
    finished: true,
    forfeit: true,
    future: true,
    id: [10],
    leagueId: [1],
    matchType: [matchType],
    modifiedAt: ['culpa D'],
    name: ['cillum '],
    notStarted: true,
    numberOfGames: [1],
    opponentId: [filterOverFifaMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['dolor sunt'],
    serieId: [4],
    slug: ['6q'],
    status: [matchStatus],
    tournamentId: [9],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverFifaMatchesVideogameTitle],
    videogameVersion: [filterOverFifaMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverFifaMatches = {
    beginAt: ['c'],
    detailedStats: [true],
    draw: [true],
    endAt: ['ex irure id'],
    forfeit: [true],
    id: [8],
    matchType: [matchType],
    modifiedAt: ['eiusmod cillu'],
    name: ['enim anim eu '],
    numberOfGames: [4],
    scheduledAt: ['eu nisi mollit '],
    slug: ['DY'],
    status: [matchStatus],
    tournamentId: [4],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverFifaMatches = {
    matchType: matchType,
    name: 'magna officia E',
    slug: '04j8Ucdf',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcMatches.getFifaMatchesRunning({
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

## get_fifa_matches_upcoming

List upcoming EA Sports FC matches

- HTTP Method: `GET`
- Endpoint: `/fifa/matches/upcoming`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaMatches](../models/FilterOverFifaMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaMatches](../models/RangeOverFifaMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaMatches](../models/SearchOverFifaMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverFifaMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverFifaMatches,
  SearchOverFifaMatches,
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

  const filterOverFifaMatchesVideogameTitle = 1;

  const filterOverFifaMatchesVideogameVersion = '49238084787.514806';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverFifaMatches = {
    beginAt: ['comm'],
    detailedStats: true,
    draw: true,
    endAt: ['a'],
    finished: true,
    forfeit: true,
    future: true,
    id: [10],
    leagueId: [1],
    matchType: [matchType],
    modifiedAt: ['culpa D'],
    name: ['cillum '],
    notStarted: true,
    numberOfGames: [1],
    opponentId: [filterOverFifaMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['dolor sunt'],
    serieId: [4],
    slug: ['6q'],
    status: [matchStatus],
    tournamentId: [9],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverFifaMatchesVideogameTitle],
    videogameVersion: [filterOverFifaMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverFifaMatches = {
    beginAt: ['c'],
    detailedStats: [true],
    draw: [true],
    endAt: ['ex irure id'],
    forfeit: [true],
    id: [8],
    matchType: [matchType],
    modifiedAt: ['eiusmod cillu'],
    name: ['enim anim eu '],
    numberOfGames: [4],
    scheduledAt: ['eu nisi mollit '],
    slug: ['DY'],
    status: [matchStatus],
    tournamentId: [4],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverFifaMatches = {
    matchType: matchType,
    name: 'magna officia E',
    slug: '04j8Ucdf',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.eaSportsFcMatches.getFifaMatchesUpcoming({
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
