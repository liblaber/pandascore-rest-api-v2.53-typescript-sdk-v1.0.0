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
  Page,
  PandascoreClient,
  RangeOverStarcraft2Matches,
  SearchOverStarcraft2Matches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverStarcraft2MatchesVideogameTitle = 5;

  const filterOverStarcraft2MatchesVideogameVersion = '002743.84027555632.65809687197';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverStarcraft2Matches: FilterOverStarcraft2Matches = {
    beginAt: ['dol'],
    detailedStats: true,
    draw: true,
    endAt: ['repr'],
    finished: true,
    forfeit: true,
    future: true,
    id: [5],
    leagueId: [8],
    matchType: [matchType],
    modifiedAt: ['aliquip dolore '],
    name: ['sint i'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverStarcraft2MatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['adipisicin'],
    serieId: [7],
    slug: ['blK8WjKK'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverStarcraft2MatchesVideogameTitle],
    videogameVersion: [filterOverStarcraft2MatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverStarcraft2Matches: RangeOverStarcraft2Matches = {
    beginAt: ['sit'],
    detailedStats: [true],
    draw: [true],
    endAt: ['nostrud magna m'],
    forfeit: [true],
    id: [2],
    matchType: [matchType1],
    modifiedAt: ['ve'],
    name: ['inesse dolor '],
    numberOfGames: [2],
    scheduledAt: ['ullam'],
    slug: ['QFi 0L'],
    status: [matchStatus1],
    tournamentId: [4],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverStarcraft2Matches: SearchOverStarcraft2Matches = {
    matchType: matchType12,
    name: 'esse am',
    slug: '5x5wgZT_',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Matches.getStarcraft2Matches({
    filter: filterOverStarcraft2Matches,
    range: rangeOverStarcraft2Matches,
    sort: [[]],
    search: searchOverStarcraft2Matches,
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
  Page,
  PandascoreClient,
  RangeOverStarcraft2Matches,
  SearchOverStarcraft2Matches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverStarcraft2MatchesVideogameTitle = 5;

  const filterOverStarcraft2MatchesVideogameVersion = '002743.84027555632.65809687197';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverStarcraft2Matches: FilterOverStarcraft2Matches = {
    beginAt: ['dol'],
    detailedStats: true,
    draw: true,
    endAt: ['repr'],
    finished: true,
    forfeit: true,
    future: true,
    id: [5],
    leagueId: [8],
    matchType: [matchType],
    modifiedAt: ['aliquip dolore '],
    name: ['sint i'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverStarcraft2MatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['adipisicin'],
    serieId: [7],
    slug: ['blK8WjKK'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverStarcraft2MatchesVideogameTitle],
    videogameVersion: [filterOverStarcraft2MatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverStarcraft2Matches: RangeOverStarcraft2Matches = {
    beginAt: ['sit'],
    detailedStats: [true],
    draw: [true],
    endAt: ['nostrud magna m'],
    forfeit: [true],
    id: [2],
    matchType: [matchType1],
    modifiedAt: ['ve'],
    name: ['inesse dolor '],
    numberOfGames: [2],
    scheduledAt: ['ullam'],
    slug: ['QFi 0L'],
    status: [matchStatus1],
    tournamentId: [4],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverStarcraft2Matches: SearchOverStarcraft2Matches = {
    matchType: matchType12,
    name: 'esse am',
    slug: '5x5wgZT_',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Matches.getStarcraft2MatchesPast({
    filter: filterOverStarcraft2Matches,
    range: rangeOverStarcraft2Matches,
    sort: [[]],
    search: searchOverStarcraft2Matches,
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
  Page,
  PandascoreClient,
  RangeOverStarcraft2Matches,
  SearchOverStarcraft2Matches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverStarcraft2MatchesVideogameTitle = 5;

  const filterOverStarcraft2MatchesVideogameVersion = '002743.84027555632.65809687197';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverStarcraft2Matches: FilterOverStarcraft2Matches = {
    beginAt: ['dol'],
    detailedStats: true,
    draw: true,
    endAt: ['repr'],
    finished: true,
    forfeit: true,
    future: true,
    id: [5],
    leagueId: [8],
    matchType: [matchType],
    modifiedAt: ['aliquip dolore '],
    name: ['sint i'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverStarcraft2MatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['adipisicin'],
    serieId: [7],
    slug: ['blK8WjKK'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverStarcraft2MatchesVideogameTitle],
    videogameVersion: [filterOverStarcraft2MatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverStarcraft2Matches: RangeOverStarcraft2Matches = {
    beginAt: ['sit'],
    detailedStats: [true],
    draw: [true],
    endAt: ['nostrud magna m'],
    forfeit: [true],
    id: [2],
    matchType: [matchType1],
    modifiedAt: ['ve'],
    name: ['inesse dolor '],
    numberOfGames: [2],
    scheduledAt: ['ullam'],
    slug: ['QFi 0L'],
    status: [matchStatus1],
    tournamentId: [4],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverStarcraft2Matches: SearchOverStarcraft2Matches = {
    matchType: matchType12,
    name: 'esse am',
    slug: '5x5wgZT_',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Matches.getStarcraft2MatchesRunning({
    filter: filterOverStarcraft2Matches,
    range: rangeOverStarcraft2Matches,
    sort: [[]],
    search: searchOverStarcraft2Matches,
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
  Page,
  PandascoreClient,
  RangeOverStarcraft2Matches,
  SearchOverStarcraft2Matches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverStarcraft2MatchesVideogameTitle = 5;

  const filterOverStarcraft2MatchesVideogameVersion = '002743.84027555632.65809687197';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverStarcraft2Matches: FilterOverStarcraft2Matches = {
    beginAt: ['dol'],
    detailedStats: true,
    draw: true,
    endAt: ['repr'],
    finished: true,
    forfeit: true,
    future: true,
    id: [5],
    leagueId: [8],
    matchType: [matchType],
    modifiedAt: ['aliquip dolore '],
    name: ['sint i'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverStarcraft2MatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['adipisicin'],
    serieId: [7],
    slug: ['blK8WjKK'],
    status: [matchStatus],
    tournamentId: [1],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverStarcraft2MatchesVideogameTitle],
    videogameVersion: [filterOverStarcraft2MatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverStarcraft2Matches: RangeOverStarcraft2Matches = {
    beginAt: ['sit'],
    detailedStats: [true],
    draw: [true],
    endAt: ['nostrud magna m'],
    forfeit: [true],
    id: [2],
    matchType: [matchType1],
    modifiedAt: ['ve'],
    name: ['inesse dolor '],
    numberOfGames: [2],
    scheduledAt: ['ullam'],
    slug: ['QFi 0L'],
    status: [matchStatus1],
    tournamentId: [4],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverStarcraft2Matches: SearchOverStarcraft2Matches = {
    matchType: matchType12,
    name: 'esse am',
    slug: '5x5wgZT_',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraft2Matches.getStarcraft2MatchesUpcoming({
    filter: filterOverStarcraft2Matches,
    range: rangeOverStarcraft2Matches,
    sort: [[]],
    search: searchOverStarcraft2Matches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
