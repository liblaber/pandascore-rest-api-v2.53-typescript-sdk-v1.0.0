# StarCraft2MatchesService

A list of all methods in the `StarCraft2MatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                               | Description                                |
| :-------------------------------------------------------------------- | :----------------------------------------- |
| [get_starcraft_2_matches](#get_starcraft_2_matches)                   | List matches for the StarCraft 2 videogame |
| [get_starcraft_2_matches_past](#get_starcraft_2_matches_past)         | List past StarCraft 2 matches              |
| [get_starcraft_2_matches_running](#get_starcraft_2_matches_running)   | List running StarCraft 2 matches           |
| [get_starcraft_2_matches_upcoming](#get_starcraft_2_matches_upcoming) | List upcoming StarCraft 2 matches          |

## get_starcraft_2_matches

List matches for the StarCraft 2 videogame

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/matches`

**Parameters**

| Name    | Type                                                                    | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2Matches](../models/FilterOverStarcraft2Matches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2Matches](../models/RangeOverStarcraft2Matches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2Matches](../models/SearchOverStarcraft2Matches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraft2Matches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverStarcraft2Matches,
  SearchOverStarcraft2Matches,
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

  const filterOverStarcraft2MatchesVideogameTitle = 4;

  const filterOverStarcraft2MatchesVideogameVersion = '4485.30919.76039064212';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverStarcraft2Matches = {
    beginAt: ['s'],
    detailedStats: true,
    draw: true,
    endAt: ['nisi d'],
    finished: true,
    forfeit: true,
    future: true,
    id: [1],
    leagueId: [6],
    matchType: [matchType],
    modifiedAt: ['culpa'],
    name: ['sint dolor pa'],
    notStarted: true,
    numberOfGames: [4],
    opponentId: [filterOverStarcraft2MatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['ad'],
    serieId: [2],
    slug: ['k4L7L1L5N'],
    status: [matchStatus],
    tournamentId: [7],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverStarcraft2MatchesVideogameTitle],
    videogameVersion: [filterOverStarcraft2MatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverStarcraft2Matches = {
    beginAt: ['dolore in'],
    detailedStats: [true],
    draw: [true],
    endAt: ['in fu'],
    forfeit: [true],
    id: [2],
    matchType: [matchType],
    modifiedAt: ['Ut'],
    name: ['nisi ullam'],
    numberOfGames: [1],
    scheduledAt: ['r'],
    slug: ['xmo'],
    status: [matchStatus],
    tournamentId: [9],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverStarcraft2Matches = {
    matchType: matchType,
    name: 'laborum iru',
    slug: 'eJeArFzo',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Matches.getStarcraft2Matches({
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

## get_starcraft_2_matches_past

List past StarCraft 2 matches

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/matches/past`

**Parameters**

| Name    | Type                                                                    | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2Matches](../models/FilterOverStarcraft2Matches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2Matches](../models/RangeOverStarcraft2Matches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2Matches](../models/SearchOverStarcraft2Matches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraft2Matches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverStarcraft2Matches,
  SearchOverStarcraft2Matches,
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

  const filterOverStarcraft2MatchesVideogameTitle = 4;

  const filterOverStarcraft2MatchesVideogameVersion = '4485.30919.76039064212';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverStarcraft2Matches = {
    beginAt: ['s'],
    detailedStats: true,
    draw: true,
    endAt: ['nisi d'],
    finished: true,
    forfeit: true,
    future: true,
    id: [1],
    leagueId: [6],
    matchType: [matchType],
    modifiedAt: ['culpa'],
    name: ['sint dolor pa'],
    notStarted: true,
    numberOfGames: [4],
    opponentId: [filterOverStarcraft2MatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['ad'],
    serieId: [2],
    slug: ['k4L7L1L5N'],
    status: [matchStatus],
    tournamentId: [7],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverStarcraft2MatchesVideogameTitle],
    videogameVersion: [filterOverStarcraft2MatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverStarcraft2Matches = {
    beginAt: ['dolore in'],
    detailedStats: [true],
    draw: [true],
    endAt: ['in fu'],
    forfeit: [true],
    id: [2],
    matchType: [matchType],
    modifiedAt: ['Ut'],
    name: ['nisi ullam'],
    numberOfGames: [1],
    scheduledAt: ['r'],
    slug: ['xmo'],
    status: [matchStatus],
    tournamentId: [9],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverStarcraft2Matches = {
    matchType: matchType,
    name: 'laborum iru',
    slug: 'eJeArFzo',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Matches.getStarcraft2MatchesPast({
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

## get_starcraft_2_matches_running

List running StarCraft 2 matches

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/matches/running`

**Parameters**

| Name    | Type                                                                    | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2Matches](../models/FilterOverStarcraft2Matches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2Matches](../models/RangeOverStarcraft2Matches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2Matches](../models/SearchOverStarcraft2Matches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraft2Matches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverStarcraft2Matches,
  SearchOverStarcraft2Matches,
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

  const filterOverStarcraft2MatchesVideogameTitle = 4;

  const filterOverStarcraft2MatchesVideogameVersion = '4485.30919.76039064212';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverStarcraft2Matches = {
    beginAt: ['s'],
    detailedStats: true,
    draw: true,
    endAt: ['nisi d'],
    finished: true,
    forfeit: true,
    future: true,
    id: [1],
    leagueId: [6],
    matchType: [matchType],
    modifiedAt: ['culpa'],
    name: ['sint dolor pa'],
    notStarted: true,
    numberOfGames: [4],
    opponentId: [filterOverStarcraft2MatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['ad'],
    serieId: [2],
    slug: ['k4L7L1L5N'],
    status: [matchStatus],
    tournamentId: [7],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverStarcraft2MatchesVideogameTitle],
    videogameVersion: [filterOverStarcraft2MatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverStarcraft2Matches = {
    beginAt: ['dolore in'],
    detailedStats: [true],
    draw: [true],
    endAt: ['in fu'],
    forfeit: [true],
    id: [2],
    matchType: [matchType],
    modifiedAt: ['Ut'],
    name: ['nisi ullam'],
    numberOfGames: [1],
    scheduledAt: ['r'],
    slug: ['xmo'],
    status: [matchStatus],
    tournamentId: [9],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverStarcraft2Matches = {
    matchType: matchType,
    name: 'laborum iru',
    slug: 'eJeArFzo',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Matches.getStarcraft2MatchesRunning({
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

## get_starcraft_2_matches_upcoming

List upcoming StarCraft 2 matches

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/matches/upcoming`

**Parameters**

| Name    | Type                                                                    | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2Matches](../models/FilterOverStarcraft2Matches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2Matches](../models/RangeOverStarcraft2Matches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2Matches](../models/SearchOverStarcraft2Matches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraft2Matches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverStarcraft2Matches,
  SearchOverStarcraft2Matches,
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

  const filterOverStarcraft2MatchesVideogameTitle = 4;

  const filterOverStarcraft2MatchesVideogameVersion = '4485.30919.76039064212';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverStarcraft2Matches = {
    beginAt: ['s'],
    detailedStats: true,
    draw: true,
    endAt: ['nisi d'],
    finished: true,
    forfeit: true,
    future: true,
    id: [1],
    leagueId: [6],
    matchType: [matchType],
    modifiedAt: ['culpa'],
    name: ['sint dolor pa'],
    notStarted: true,
    numberOfGames: [4],
    opponentId: [filterOverStarcraft2MatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['ad'],
    serieId: [2],
    slug: ['k4L7L1L5N'],
    status: [matchStatus],
    tournamentId: [7],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverStarcraft2MatchesVideogameTitle],
    videogameVersion: [filterOverStarcraft2MatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverStarcraft2Matches = {
    beginAt: ['dolore in'],
    detailedStats: [true],
    draw: [true],
    endAt: ['in fu'],
    forfeit: [true],
    id: [2],
    matchType: [matchType],
    modifiedAt: ['Ut'],
    name: ['nisi ullam'],
    numberOfGames: [1],
    scheduledAt: ['r'],
    slug: ['xmo'],
    status: [matchStatus],
    tournamentId: [9],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverStarcraft2Matches = {
    matchType: matchType,
    name: 'laborum iru',
    slug: 'eJeArFzo',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Matches.getStarcraft2MatchesUpcoming({
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
