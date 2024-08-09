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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverRlMatches,
  SearchOverRlMatches,
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

  const filterOverRlMatchesVideogameTitle = 1;

  const filterOverRlMatchesVideogameVersion = '4570391176.672329765';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverRlMatches = {
    beginAt: ['ut'],
    detailedStats: true,
    draw: true,
    endAt: ['aliquip qui'],
    finished: true,
    forfeit: true,
    future: true,
    id: [3],
    leagueId: [1],
    matchType: [matchType],
    modifiedAt: ['culpa voluptat'],
    name: ['sintanim in '],
    notStarted: true,
    numberOfGames: [9],
    opponentId: [filterOverRlMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['fugiat'],
    serieId: [8],
    slug: ['2ei'],
    status: [matchStatus],
    tournamentId: [2],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverRlMatchesVideogameTitle],
    videogameVersion: [filterOverRlMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverRlMatches = {
    beginAt: ['sunt esse enim'],
    detailedStats: [true],
    draw: [true],
    endAt: ['fugiat o'],
    forfeit: [true],
    id: [4],
    matchType: [matchType],
    modifiedAt: ['incidid'],
    name: ['esse dolor si'],
    numberOfGames: [7],
    scheduledAt: ['o'],
    slug: ['7tkIjf_y'],
    status: [matchStatus],
    tournamentId: [2],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverRlMatches = {
    matchType: matchType,
    name: 'dolor',
    slug: 'zMqdbniam',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlMatches.getRlMatches({
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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverRlMatches,
  SearchOverRlMatches,
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

  const filterOverRlMatchesVideogameTitle = 1;

  const filterOverRlMatchesVideogameVersion = '4570391176.672329765';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverRlMatches = {
    beginAt: ['ut'],
    detailedStats: true,
    draw: true,
    endAt: ['aliquip qui'],
    finished: true,
    forfeit: true,
    future: true,
    id: [3],
    leagueId: [1],
    matchType: [matchType],
    modifiedAt: ['culpa voluptat'],
    name: ['sintanim in '],
    notStarted: true,
    numberOfGames: [9],
    opponentId: [filterOverRlMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['fugiat'],
    serieId: [8],
    slug: ['2ei'],
    status: [matchStatus],
    tournamentId: [2],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverRlMatchesVideogameTitle],
    videogameVersion: [filterOverRlMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverRlMatches = {
    beginAt: ['sunt esse enim'],
    detailedStats: [true],
    draw: [true],
    endAt: ['fugiat o'],
    forfeit: [true],
    id: [4],
    matchType: [matchType],
    modifiedAt: ['incidid'],
    name: ['esse dolor si'],
    numberOfGames: [7],
    scheduledAt: ['o'],
    slug: ['7tkIjf_y'],
    status: [matchStatus],
    tournamentId: [2],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverRlMatches = {
    matchType: matchType,
    name: 'dolor',
    slug: 'zMqdbniam',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlMatches.getRlMatchesPast({
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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverRlMatches,
  SearchOverRlMatches,
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

  const filterOverRlMatchesVideogameTitle = 1;

  const filterOverRlMatchesVideogameVersion = '4570391176.672329765';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverRlMatches = {
    beginAt: ['ut'],
    detailedStats: true,
    draw: true,
    endAt: ['aliquip qui'],
    finished: true,
    forfeit: true,
    future: true,
    id: [3],
    leagueId: [1],
    matchType: [matchType],
    modifiedAt: ['culpa voluptat'],
    name: ['sintanim in '],
    notStarted: true,
    numberOfGames: [9],
    opponentId: [filterOverRlMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['fugiat'],
    serieId: [8],
    slug: ['2ei'],
    status: [matchStatus],
    tournamentId: [2],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverRlMatchesVideogameTitle],
    videogameVersion: [filterOverRlMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverRlMatches = {
    beginAt: ['sunt esse enim'],
    detailedStats: [true],
    draw: [true],
    endAt: ['fugiat o'],
    forfeit: [true],
    id: [4],
    matchType: [matchType],
    modifiedAt: ['incidid'],
    name: ['esse dolor si'],
    numberOfGames: [7],
    scheduledAt: ['o'],
    slug: ['7tkIjf_y'],
    status: [matchStatus],
    tournamentId: [2],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverRlMatches = {
    matchType: matchType,
    name: 'dolor',
    slug: 'zMqdbniam',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlMatches.getRlMatchesRunning({
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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverRlMatches,
  SearchOverRlMatches,
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

  const filterOverRlMatchesVideogameTitle = 1;

  const filterOverRlMatchesVideogameVersion = '4570391176.672329765';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverRlMatches = {
    beginAt: ['ut'],
    detailedStats: true,
    draw: true,
    endAt: ['aliquip qui'],
    finished: true,
    forfeit: true,
    future: true,
    id: [3],
    leagueId: [1],
    matchType: [matchType],
    modifiedAt: ['culpa voluptat'],
    name: ['sintanim in '],
    notStarted: true,
    numberOfGames: [9],
    opponentId: [filterOverRlMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['fugiat'],
    serieId: [8],
    slug: ['2ei'],
    status: [matchStatus],
    tournamentId: [2],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverRlMatchesVideogameTitle],
    videogameVersion: [filterOverRlMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverRlMatches = {
    beginAt: ['sunt esse enim'],
    detailedStats: [true],
    draw: [true],
    endAt: ['fugiat o'],
    forfeit: [true],
    id: [4],
    matchType: [matchType],
    modifiedAt: ['incidid'],
    name: ['esse dolor si'],
    numberOfGames: [7],
    scheduledAt: ['o'],
    slug: ['7tkIjf_y'],
    status: [matchStatus],
    tournamentId: [2],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverRlMatches = {
    matchType: matchType,
    name: 'dolor',
    slug: 'zMqdbniam',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlMatches.getRlMatchesUpcoming({
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
