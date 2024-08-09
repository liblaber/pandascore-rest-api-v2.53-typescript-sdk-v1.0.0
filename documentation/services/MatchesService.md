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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverMatches,
  SearchOverMatches,
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

  const filterOverMatchesVideogameTitle = 4;

  const filterOverMatchesVideogameVersion = '54.99205.442619';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverMatches = {
    beginAt: ['ad non'],
    detailedStats: true,
    draw: true,
    endAt: ['repr'],
    finished: true,
    forfeit: true,
    future: true,
    id: [8],
    leagueId: [5],
    matchType: [matchType],
    modifiedAt: ['deser'],
    name: ['in labore t'],
    notStarted: true,
    numberOfGames: [9],
    opponentId: [filterOverMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['quis conse'],
    serieId: [10],
    slug: ['JMIjc H'],
    status: [matchStatus],
    tournamentId: [8],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverMatchesVideogameTitle],
    videogameVersion: [filterOverMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverMatches = {
    beginAt: ['ve'],
    detailedStats: [true],
    draw: [true],
    endAt: ['irure conse'],
    forfeit: [true],
    id: [3],
    matchType: [matchType],
    modifiedAt: ['adipisici'],
    name: ['pariatur m'],
    numberOfGames: [2],
    scheduledAt: ['al'],
    slug: ['on'],
    status: [matchStatus],
    tournamentId: [9],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverMatches = {
    matchType: matchType,
    name: 'Duis fug',
    slug: '7jRFdQQ',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.matches.getMatches({
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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverMatches,
  SearchOverMatches,
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

  const filterOverMatchesVideogameTitle = 4;

  const filterOverMatchesVideogameVersion = '54.99205.442619';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverMatches = {
    beginAt: ['ad non'],
    detailedStats: true,
    draw: true,
    endAt: ['repr'],
    finished: true,
    forfeit: true,
    future: true,
    id: [8],
    leagueId: [5],
    matchType: [matchType],
    modifiedAt: ['deser'],
    name: ['in labore t'],
    notStarted: true,
    numberOfGames: [9],
    opponentId: [filterOverMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['quis conse'],
    serieId: [10],
    slug: ['JMIjc H'],
    status: [matchStatus],
    tournamentId: [8],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverMatchesVideogameTitle],
    videogameVersion: [filterOverMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverMatches = {
    beginAt: ['ve'],
    detailedStats: [true],
    draw: [true],
    endAt: ['irure conse'],
    forfeit: [true],
    id: [3],
    matchType: [matchType],
    modifiedAt: ['adipisici'],
    name: ['pariatur m'],
    numberOfGames: [2],
    scheduledAt: ['al'],
    slug: ['on'],
    status: [matchStatus],
    tournamentId: [9],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverMatches = {
    matchType: matchType,
    name: 'Duis fug',
    slug: '7jRFdQQ',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.matches.getMatchesPast({
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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverMatches,
  SearchOverMatches,
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

  const filterOverMatchesVideogameTitle = 4;

  const filterOverMatchesVideogameVersion = '54.99205.442619';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverMatches = {
    beginAt: ['ad non'],
    detailedStats: true,
    draw: true,
    endAt: ['repr'],
    finished: true,
    forfeit: true,
    future: true,
    id: [8],
    leagueId: [5],
    matchType: [matchType],
    modifiedAt: ['deser'],
    name: ['in labore t'],
    notStarted: true,
    numberOfGames: [9],
    opponentId: [filterOverMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['quis conse'],
    serieId: [10],
    slug: ['JMIjc H'],
    status: [matchStatus],
    tournamentId: [8],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverMatchesVideogameTitle],
    videogameVersion: [filterOverMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverMatches = {
    beginAt: ['ve'],
    detailedStats: [true],
    draw: [true],
    endAt: ['irure conse'],
    forfeit: [true],
    id: [3],
    matchType: [matchType],
    modifiedAt: ['adipisici'],
    name: ['pariatur m'],
    numberOfGames: [2],
    scheduledAt: ['al'],
    slug: ['on'],
    status: [matchStatus],
    tournamentId: [9],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverMatches = {
    matchType: matchType,
    name: 'Duis fug',
    slug: '7jRFdQQ',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.matches.getMatchesRunning({
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
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverMatches,
  SearchOverMatches,
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

  const filterOverMatchesVideogameTitle = 4;

  const filterOverMatchesVideogameVersion = '54.99205.442619';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverMatches = {
    beginAt: ['ad non'],
    detailedStats: true,
    draw: true,
    endAt: ['repr'],
    finished: true,
    forfeit: true,
    future: true,
    id: [8],
    leagueId: [5],
    matchType: [matchType],
    modifiedAt: ['deser'],
    name: ['in labore t'],
    notStarted: true,
    numberOfGames: [9],
    opponentId: [filterOverMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['quis conse'],
    serieId: [10],
    slug: ['JMIjc H'],
    status: [matchStatus],
    tournamentId: [8],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverMatchesVideogameTitle],
    videogameVersion: [filterOverMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverMatches = {
    beginAt: ['ve'],
    detailedStats: [true],
    draw: [true],
    endAt: ['irure conse'],
    forfeit: [true],
    id: [3],
    matchType: [matchType],
    modifiedAt: ['adipisici'],
    name: ['pariatur m'],
    numberOfGames: [2],
    scheduledAt: ['al'],
    slug: ['on'],
    status: [matchStatus],
    tournamentId: [9],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverMatches = {
    matchType: matchType,
    name: 'Duis fug',
    slug: '7jRFdQQ',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.matches.getMatchesUpcoming({
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

  const matchIdOrSlug = 4;

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

  const matchIdOrSlug = 4;

  const { data } = await pandascoreClient.matches.getMatchesMatchIdOrSlugOpponents();

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
