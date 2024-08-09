# KogMatchesService

A list of all methods in the `KogMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                                  |
| :---------------------------------------------------- | :------------------------------------------- |
| [get_kog_matches](#get_kog_matches)                   | List matches for the King of Glory videogame |
| [get_kog_matches_past](#get_kog_matches_past)         | List past King of Glory matches              |
| [get_kog_matches_running](#get_kog_matches_running)   | List running King of Glory matches           |
| [get_kog_matches_upcoming](#get_kog_matches_upcoming) | List upcoming King of Glory matches          |

## get_kog_matches

List matches for the King of Glory videogame

- HTTP Method: `GET`
- Endpoint: `/kog/matches`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogMatches](../models/FilterOverKogMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogMatches](../models/RangeOverKogMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogMatches](../models/SearchOverKogMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverKogMatches,
  SearchOverKogMatches,
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

  const filterOverKogMatchesVideogameTitle = 10;

  const filterOverKogMatchesVideogameVersion = '12.45';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverKogMatches = {
    beginAt: ['dolor nulla v'],
    detailedStats: true,
    draw: true,
    endAt: ['et '],
    finished: true,
    forfeit: true,
    future: true,
    id: [7],
    leagueId: [6],
    matchType: [matchType],
    modifiedAt: ['ip'],
    name: ['adipisicing'],
    notStarted: true,
    numberOfGames: [2],
    opponentId: [filterOverKogMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['occaecat'],
    serieId: [9],
    slug: ['GV_W9Ov'],
    status: [matchStatus],
    tournamentId: [3],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverKogMatchesVideogameTitle],
    videogameVersion: [filterOverKogMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverKogMatches = {
    beginAt: ['fu'],
    detailedStats: [true],
    draw: [true],
    endAt: ['quis'],
    forfeit: [true],
    id: [3],
    matchType: [matchType],
    modifiedAt: ['reprehen'],
    name: ['dolore'],
    numberOfGames: [8],
    scheduledAt: ['nulla ame'],
    slug: ['DtQ-Q0'],
    status: [matchStatus],
    tournamentId: [4],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverKogMatches = {
    matchType: matchType,
    name: 'amet e',
    slug: 'WCN3HuE6sMz',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogMatches.getKogMatches({
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

## get_kog_matches_past

List past King of Glory matches

- HTTP Method: `GET`
- Endpoint: `/kog/matches/past`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogMatches](../models/FilterOverKogMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogMatches](../models/RangeOverKogMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogMatches](../models/SearchOverKogMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverKogMatches,
  SearchOverKogMatches,
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

  const filterOverKogMatchesVideogameTitle = 10;

  const filterOverKogMatchesVideogameVersion = '12.45';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverKogMatches = {
    beginAt: ['dolor nulla v'],
    detailedStats: true,
    draw: true,
    endAt: ['et '],
    finished: true,
    forfeit: true,
    future: true,
    id: [7],
    leagueId: [6],
    matchType: [matchType],
    modifiedAt: ['ip'],
    name: ['adipisicing'],
    notStarted: true,
    numberOfGames: [2],
    opponentId: [filterOverKogMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['occaecat'],
    serieId: [9],
    slug: ['GV_W9Ov'],
    status: [matchStatus],
    tournamentId: [3],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverKogMatchesVideogameTitle],
    videogameVersion: [filterOverKogMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverKogMatches = {
    beginAt: ['fu'],
    detailedStats: [true],
    draw: [true],
    endAt: ['quis'],
    forfeit: [true],
    id: [3],
    matchType: [matchType],
    modifiedAt: ['reprehen'],
    name: ['dolore'],
    numberOfGames: [8],
    scheduledAt: ['nulla ame'],
    slug: ['DtQ-Q0'],
    status: [matchStatus],
    tournamentId: [4],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverKogMatches = {
    matchType: matchType,
    name: 'amet e',
    slug: 'WCN3HuE6sMz',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogMatches.getKogMatchesPast({
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

## get_kog_matches_running

List running King of Glory matches

- HTTP Method: `GET`
- Endpoint: `/kog/matches/running`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogMatches](../models/FilterOverKogMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogMatches](../models/RangeOverKogMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogMatches](../models/SearchOverKogMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverKogMatches,
  SearchOverKogMatches,
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

  const filterOverKogMatchesVideogameTitle = 10;

  const filterOverKogMatchesVideogameVersion = '12.45';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverKogMatches = {
    beginAt: ['dolor nulla v'],
    detailedStats: true,
    draw: true,
    endAt: ['et '],
    finished: true,
    forfeit: true,
    future: true,
    id: [7],
    leagueId: [6],
    matchType: [matchType],
    modifiedAt: ['ip'],
    name: ['adipisicing'],
    notStarted: true,
    numberOfGames: [2],
    opponentId: [filterOverKogMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['occaecat'],
    serieId: [9],
    slug: ['GV_W9Ov'],
    status: [matchStatus],
    tournamentId: [3],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverKogMatchesVideogameTitle],
    videogameVersion: [filterOverKogMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverKogMatches = {
    beginAt: ['fu'],
    detailedStats: [true],
    draw: [true],
    endAt: ['quis'],
    forfeit: [true],
    id: [3],
    matchType: [matchType],
    modifiedAt: ['reprehen'],
    name: ['dolore'],
    numberOfGames: [8],
    scheduledAt: ['nulla ame'],
    slug: ['DtQ-Q0'],
    status: [matchStatus],
    tournamentId: [4],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverKogMatches = {
    matchType: matchType,
    name: 'amet e',
    slug: 'WCN3HuE6sMz',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogMatches.getKogMatchesRunning({
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

## get_kog_matches_upcoming

List upcoming King of Glory matches

- HTTP Method: `GET`
- Endpoint: `/kog/matches/upcoming`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogMatches](../models/FilterOverKogMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogMatches](../models/RangeOverKogMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogMatches](../models/SearchOverKogMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverKogMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverKogMatches,
  SearchOverKogMatches,
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

  const filterOverKogMatchesVideogameTitle = 10;

  const filterOverKogMatchesVideogameVersion = '12.45';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverKogMatches = {
    beginAt: ['dolor nulla v'],
    detailedStats: true,
    draw: true,
    endAt: ['et '],
    finished: true,
    forfeit: true,
    future: true,
    id: [7],
    leagueId: [6],
    matchType: [matchType],
    modifiedAt: ['ip'],
    name: ['adipisicing'],
    notStarted: true,
    numberOfGames: [2],
    opponentId: [filterOverKogMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['occaecat'],
    serieId: [9],
    slug: ['GV_W9Ov'],
    status: [matchStatus],
    tournamentId: [3],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverKogMatchesVideogameTitle],
    videogameVersion: [filterOverKogMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverKogMatches = {
    beginAt: ['fu'],
    detailedStats: [true],
    draw: [true],
    endAt: ['quis'],
    forfeit: [true],
    id: [3],
    matchType: [matchType],
    modifiedAt: ['reprehen'],
    name: ['dolore'],
    numberOfGames: [8],
    scheduledAt: ['nulla ame'],
    slug: ['DtQ-Q0'],
    status: [matchStatus],
    tournamentId: [4],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverKogMatches = {
    matchType: matchType,
    name: 'amet e',
    slug: 'WCN3HuE6sMz',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.kogMatches.getKogMatchesUpcoming({
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
