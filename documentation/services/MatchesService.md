# MatchesService

A list of all methods in the `MatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                     | Description                                          |
| :-------------------------------------------------------------------------- | :--------------------------------------------------- |
| [get_matches](#get_matches)                                                 | List matches                                         |
| [get_matches_past](#get_matches_past)                                       | List past matches                                    |
| [get_matches_running](#get_matches_running)                                 | List currently running matches                       |
| [get_matches_upcoming](#get_matches_upcoming)                               | List upcoming matches                                |
| [get_matches_matchIdOrSlug](#get_matches_matchidorslug)                     | Get a single match by ID or by slug                  |
| [get_matches_matchIdOrSlug_opponents](#get_matches_matchidorslug_opponents) | List opponents (player or teams) for the given match |

## get_matches

List matches

- HTTP Method: `GET`
- Endpoint: `/matches`

**Parameters**

| Name    | Type                                                | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverMatches](../models/FilterOverMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverMatches](../models/RangeOverMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverMatches](../models/SearchOverMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverMatches,
  SearchOverMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverMatchesVideogameTitle = 6;

  const filterOverMatchesVideogameVersion = '1125897835.45';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverMatches: FilterOverMatches = {
    beginAt: ['ani'],
    detailedStats: true,
    draw: true,
    endAt: ['ad ut com'],
    finished: true,
    forfeit: true,
    future: true,
    id: [3],
    leagueId: [9],
    matchType: [matchType],
    modifiedAt: ['aute sit'],
    name: ['exercitation te'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['esse aute n'],
    serieId: [10],
    slug: ['HiGqjR9'],
    status: [matchStatus],
    tournamentId: [3],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverMatchesVideogameTitle],
    videogameVersion: [filterOverMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverMatches: RangeOverMatches = {
    beginAt: ['al'],
    detailedStats: [true],
    draw: [true],
    endAt: ['do d'],
    forfeit: [true],
    id: [6],
    matchType: [matchType1],
    modifiedAt: ['dolore ve'],
    name: ['dolore '],
    numberOfGames: [10],
    scheduledAt: ['nisi sed aut'],
    slug: ['bAjOZ'],
    status: [matchStatus1],
    tournamentId: [3],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverMatches: SearchOverMatches = {
    matchType: matchType12,
    name: 'nulla veniam ',
    slug: 'WfL1ZPQ',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.matches.getMatches({
    filter: filterOverMatches,
    range: rangeOverMatches,
    sort: [[]],
    search: searchOverMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_matches_past

List past matches

- HTTP Method: `GET`
- Endpoint: `/matches/past`

**Parameters**

| Name    | Type                                                | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverMatches](../models/FilterOverMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverMatches](../models/RangeOverMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverMatches](../models/SearchOverMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverMatches,
  SearchOverMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverMatchesVideogameTitle = 6;

  const filterOverMatchesVideogameVersion = '1125897835.45';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverMatches: FilterOverMatches = {
    beginAt: ['ani'],
    detailedStats: true,
    draw: true,
    endAt: ['ad ut com'],
    finished: true,
    forfeit: true,
    future: true,
    id: [3],
    leagueId: [9],
    matchType: [matchType],
    modifiedAt: ['aute sit'],
    name: ['exercitation te'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['esse aute n'],
    serieId: [10],
    slug: ['HiGqjR9'],
    status: [matchStatus],
    tournamentId: [3],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverMatchesVideogameTitle],
    videogameVersion: [filterOverMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverMatches: RangeOverMatches = {
    beginAt: ['al'],
    detailedStats: [true],
    draw: [true],
    endAt: ['do d'],
    forfeit: [true],
    id: [6],
    matchType: [matchType1],
    modifiedAt: ['dolore ve'],
    name: ['dolore '],
    numberOfGames: [10],
    scheduledAt: ['nisi sed aut'],
    slug: ['bAjOZ'],
    status: [matchStatus1],
    tournamentId: [3],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverMatches: SearchOverMatches = {
    matchType: matchType12,
    name: 'nulla veniam ',
    slug: 'WfL1ZPQ',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.matches.getMatchesPast({
    filter: filterOverMatches,
    range: rangeOverMatches,
    sort: [[]],
    search: searchOverMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_matches_running

List currently running matches

- HTTP Method: `GET`
- Endpoint: `/matches/running`

**Parameters**

| Name    | Type                                                | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverMatches](../models/FilterOverMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverMatches](../models/RangeOverMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverMatches](../models/SearchOverMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverMatches,
  SearchOverMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverMatchesVideogameTitle = 6;

  const filterOverMatchesVideogameVersion = '1125897835.45';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverMatches: FilterOverMatches = {
    beginAt: ['ani'],
    detailedStats: true,
    draw: true,
    endAt: ['ad ut com'],
    finished: true,
    forfeit: true,
    future: true,
    id: [3],
    leagueId: [9],
    matchType: [matchType],
    modifiedAt: ['aute sit'],
    name: ['exercitation te'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['esse aute n'],
    serieId: [10],
    slug: ['HiGqjR9'],
    status: [matchStatus],
    tournamentId: [3],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverMatchesVideogameTitle],
    videogameVersion: [filterOverMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverMatches: RangeOverMatches = {
    beginAt: ['al'],
    detailedStats: [true],
    draw: [true],
    endAt: ['do d'],
    forfeit: [true],
    id: [6],
    matchType: [matchType1],
    modifiedAt: ['dolore ve'],
    name: ['dolore '],
    numberOfGames: [10],
    scheduledAt: ['nisi sed aut'],
    slug: ['bAjOZ'],
    status: [matchStatus1],
    tournamentId: [3],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverMatches: SearchOverMatches = {
    matchType: matchType12,
    name: 'nulla veniam ',
    slug: 'WfL1ZPQ',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.matches.getMatchesRunning({
    filter: filterOverMatches,
    range: rangeOverMatches,
    sort: [[]],
    search: searchOverMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_matches_upcoming

List upcoming matches

- HTTP Method: `GET`
- Endpoint: `/matches/upcoming`

**Parameters**

| Name    | Type                                                | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverMatches](../models/FilterOverMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverMatches](../models/RangeOverMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverMatches](../models/SearchOverMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  Page,
  PandascoreClient,
  RangeOverMatches,
  SearchOverMatches,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchType = MatchType.ALLGAMESPLAYED;

  const teamIdOrSlug = 10;

  const matchStatus = MatchStatus.CANCELED;

  const videogameId = VideogameId._1;

  const filterOverMatchesVideogameTitle = 6;

  const filterOverMatchesVideogameVersion = '1125897835.45';

  const opponentId = 7;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filterOverMatches: FilterOverMatches = {
    beginAt: ['ani'],
    detailedStats: true,
    draw: true,
    endAt: ['ad ut com'],
    finished: true,
    forfeit: true,
    future: true,
    id: [3],
    leagueId: [9],
    matchType: [matchType],
    modifiedAt: ['aute sit'],
    name: ['exercitation te'],
    notStarted: true,
    numberOfGames: [8],
    opponentId: [filterOverMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['esse aute n'],
    serieId: [10],
    slug: ['HiGqjR9'],
    status: [matchStatus],
    tournamentId: [3],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverMatchesVideogameTitle],
    videogameVersion: [filterOverMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType1 = MatchType.ALLGAMESPLAYED;

  const matchStatus1 = MatchStatus.CANCELED;

  const opponentId1 = 7;

  const matchWinnerType1 = MatchWinnerType.PLAYER;

  const rangeOverMatches: RangeOverMatches = {
    beginAt: ['al'],
    detailedStats: [true],
    draw: [true],
    endAt: ['do d'],
    forfeit: [true],
    id: [6],
    matchType: [matchType1],
    modifiedAt: ['dolore ve'],
    name: ['dolore '],
    numberOfGames: [10],
    scheduledAt: ['nisi sed aut'],
    slug: ['bAjOZ'],
    status: [matchStatus1],
    tournamentId: [3],
    winnerId: [opponentId1],
    winnerType: [matchWinnerType1],
  };
  const matchType12 = MatchType.ALLGAMESPLAYED;

  const matchStatus12 = MatchStatus.CANCELED;

  const matchWinnerType12 = MatchWinnerType.PLAYER;

  const searchOverMatches: SearchOverMatches = {
    matchType: matchType12,
    name: 'nulla veniam ',
    slug: 'WfL1ZPQ',
    status: matchStatus12,
    winnerType: matchWinnerType12,
  };
  const page = 1;

  const { data } = await pandascoreClient.matches.getMatchesUpcoming({
    filter: filterOverMatches,
    range: rangeOverMatches,
    sort: [[]],
    search: searchOverMatches,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_matches_matchIdOrSlug

Get a single match by ID or by slug

- HTTP Method: `GET`
- Endpoint: `/matches/{match_id_or_slug}`

**Parameters**

| Name          | Type                                        | Required | Description        |
| :------------ | :------------------------------------------ | :------- | :----------------- |
| matchIdOrSlug | [MatchIdOrSlug](../models/MatchIdOrSlug.md) | ✅       | A match ID or slug |

**Return Type**

`Match`

**Example Usage Code Snippet**

```typescript
import { MatchIdOrSlug, PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchIdOrSlug = 5;

  const { data } = await pandascoreClient.matches.getMatchesMatchIdOrSlug();

  console.log(data);
})();
```

## get_matches_matchIdOrSlug_opponents

List opponents (player or teams) for the given match

- HTTP Method: `GET`
- Endpoint: `/matches/{match_id_or_slug}/opponents`

**Parameters**

| Name          | Type                                        | Required | Description        |
| :------------ | :------------------------------------------ | :------- | :----------------- |
| matchIdOrSlug | [MatchIdOrSlug](../models/MatchIdOrSlug.md) | ✅       | A match ID or slug |

**Return Type**

`MatchOpponentsObject`

**Example Usage Code Snippet**

```typescript
import { MatchIdOrSlug, PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const matchIdOrSlug = 5;

  const { data } = await pandascoreClient.matches.getMatchesMatchIdOrSlugOpponents();

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
