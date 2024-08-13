# RlMatchesService

A list of all methods in the `RlMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description                                  |
| :-------------------------------------------------- | :------------------------------------------- |
| [get_rl_matches](#get_rl_matches)                   | List matches for the Rocket League videogame |
| [get_rl_matches_past](#get_rl_matches_past)         | List past Rocket League matches              |
| [get_rl_matches_running](#get_rl_matches_running)   | List running Rocket League matches           |
| [get_rl_matches_upcoming](#get_rl_matches_upcoming) | List upcoming Rocket League matches          |

## get_rl_matches

List matches for the Rocket League videogame

- HTTP Method: `GET`
- Endpoint: `/rl/matches`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlMatches](../models/FilterOverRlMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlMatches](../models/RangeOverRlMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlMatches](../models/SearchOverRlMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverRlMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverRlMatches,
  SearchOverRlMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverRlMatchesVideogameTitle = 4;

  const filterOverRlMatchesVideogameVersion = '6734585794.51.57967777';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverRlMatches: FilterOverRlMatches = {
    beginAt: ['culpa r'],
    detailedStats: true,
    draw: true,
    endAt: ['in Ut '],
    finished: true,
    forfeit: true,
    future: true,
    id: [9],
    leagueId: [5],
    matchType: [matchType],
    modifiedAt: ['ut'],
    name: ['ullamco en'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverRlMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['dolore'],
    serieId: [6],
    slug: ['L2B6u2'],
    status: [matchStatus],
    tournamentId: [2],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverRlMatchesVideogameTitle],
    videogameVersion: [filterOverRlMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverRlMatches: RangeOverRlMatches = {
    beginAt: ['amet '],
    detailedStats: [true],
    draw: [true],
    endAt: ['eu officia id d'],
    forfeit: [true],
    id: [9],
    matchType: [matchType1],
    modifiedAt: ['i'],
    name: ['reprehend'],
    numberOfGames: [7],
    scheduledAt: ['occaecat mo'],
    slug: ['SC'],
    status: [matchStatus1],
    tournamentId: [6],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverRlMatches: SearchOverRlMatches = {
    matchType: matchType12,
    name: 'commodo pariatu',
    slug: 'Y',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlMatches.getRlMatches({
    filter: filterOverRlMatches,
    range: rangeOverRlMatches,
    sort: [[]],
    search: searchOverRlMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_rl_matches_past

List past Rocket League matches

- HTTP Method: `GET`
- Endpoint: `/rl/matches/past`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlMatches](../models/FilterOverRlMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlMatches](../models/RangeOverRlMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlMatches](../models/SearchOverRlMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverRlMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverRlMatches,
  SearchOverRlMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverRlMatchesVideogameTitle = 4;

  const filterOverRlMatchesVideogameVersion = '6734585794.51.57967777';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverRlMatches: FilterOverRlMatches = {
    beginAt: ['culpa r'],
    detailedStats: true,
    draw: true,
    endAt: ['in Ut '],
    finished: true,
    forfeit: true,
    future: true,
    id: [9],
    leagueId: [5],
    matchType: [matchType],
    modifiedAt: ['ut'],
    name: ['ullamco en'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverRlMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['dolore'],
    serieId: [6],
    slug: ['L2B6u2'],
    status: [matchStatus],
    tournamentId: [2],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverRlMatchesVideogameTitle],
    videogameVersion: [filterOverRlMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverRlMatches: RangeOverRlMatches = {
    beginAt: ['amet '],
    detailedStats: [true],
    draw: [true],
    endAt: ['eu officia id d'],
    forfeit: [true],
    id: [9],
    matchType: [matchType1],
    modifiedAt: ['i'],
    name: ['reprehend'],
    numberOfGames: [7],
    scheduledAt: ['occaecat mo'],
    slug: ['SC'],
    status: [matchStatus1],
    tournamentId: [6],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverRlMatches: SearchOverRlMatches = {
    matchType: matchType12,
    name: 'commodo pariatu',
    slug: 'Y',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlMatches.getRlMatchesPast({
    filter: filterOverRlMatches,
    range: rangeOverRlMatches,
    sort: [[]],
    search: searchOverRlMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_rl_matches_running

List running Rocket League matches

- HTTP Method: `GET`
- Endpoint: `/rl/matches/running`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlMatches](../models/FilterOverRlMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlMatches](../models/RangeOverRlMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlMatches](../models/SearchOverRlMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverRlMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverRlMatches,
  SearchOverRlMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverRlMatchesVideogameTitle = 4;

  const filterOverRlMatchesVideogameVersion = '6734585794.51.57967777';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverRlMatches: FilterOverRlMatches = {
    beginAt: ['culpa r'],
    detailedStats: true,
    draw: true,
    endAt: ['in Ut '],
    finished: true,
    forfeit: true,
    future: true,
    id: [9],
    leagueId: [5],
    matchType: [matchType],
    modifiedAt: ['ut'],
    name: ['ullamco en'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverRlMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['dolore'],
    serieId: [6],
    slug: ['L2B6u2'],
    status: [matchStatus],
    tournamentId: [2],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverRlMatchesVideogameTitle],
    videogameVersion: [filterOverRlMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverRlMatches: RangeOverRlMatches = {
    beginAt: ['amet '],
    detailedStats: [true],
    draw: [true],
    endAt: ['eu officia id d'],
    forfeit: [true],
    id: [9],
    matchType: [matchType1],
    modifiedAt: ['i'],
    name: ['reprehend'],
    numberOfGames: [7],
    scheduledAt: ['occaecat mo'],
    slug: ['SC'],
    status: [matchStatus1],
    tournamentId: [6],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverRlMatches: SearchOverRlMatches = {
    matchType: matchType12,
    name: 'commodo pariatu',
    slug: 'Y',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlMatches.getRlMatchesRunning({
    filter: filterOverRlMatches,
    range: rangeOverRlMatches,
    sort: [[]],
    search: searchOverRlMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_rl_matches_upcoming

List upcoming Rocket League matches

- HTTP Method: `GET`
- Endpoint: `/rl/matches/upcoming`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlMatches](../models/FilterOverRlMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlMatches](../models/RangeOverRlMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlMatches](../models/SearchOverRlMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverRlMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverRlMatches,
  SearchOverRlMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverRlMatchesVideogameTitle = 4;

  const filterOverRlMatchesVideogameVersion = '6734585794.51.57967777';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverRlMatches: FilterOverRlMatches = {
    beginAt: ['culpa r'],
    detailedStats: true,
    draw: true,
    endAt: ['in Ut '],
    finished: true,
    forfeit: true,
    future: true,
    id: [9],
    leagueId: [5],
    matchType: [matchType],
    modifiedAt: ['ut'],
    name: ['ullamco en'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverRlMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['dolore'],
    serieId: [6],
    slug: ['L2B6u2'],
    status: [matchStatus],
    tournamentId: [2],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverRlMatchesVideogameTitle],
    videogameVersion: [filterOverRlMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverRlMatches: RangeOverRlMatches = {
    beginAt: ['amet '],
    detailedStats: [true],
    draw: [true],
    endAt: ['eu officia id d'],
    forfeit: [true],
    id: [9],
    matchType: [matchType1],
    modifiedAt: ['i'],
    name: ['reprehend'],
    numberOfGames: [7],
    scheduledAt: ['occaecat mo'],
    slug: ['SC'],
    status: [matchStatus1],
    tournamentId: [6],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverRlMatches: SearchOverRlMatches = {
    matchType: matchType12,
    name: 'commodo pariatu',
    slug: 'Y',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlMatches.getRlMatchesUpcoming({
    filter: filterOverRlMatches,
    range: rangeOverRlMatches,
    sort: [[]],
    search: searchOverRlMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
