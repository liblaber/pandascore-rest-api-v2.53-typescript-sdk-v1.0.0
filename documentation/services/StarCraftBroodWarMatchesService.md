# StarCraftBroodWarMatchesService

A list of all methods in the `StarCraftBroodWarMatchesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                               | Description                                        |
| :------------------------------------------------------------------------------------ | :------------------------------------------------- |
| [get_starcraft_brood_war_matches](#get_starcraft_brood_war_matches)                   | List matches for the StarCraft Brood War videogame |
| [get_starcraft_brood_war_matches_past](#get_starcraft_brood_war_matches_past)         | List past StarCraft Brood War matches              |
| [get_starcraft_brood_war_matches_running](#get_starcraft_brood_war_matches_running)   | List running StarCraft Brood War matches           |
| [get_starcraft_brood_war_matches_upcoming](#get_starcraft_brood_war_matches_upcoming) | List upcoming StarCraft Brood War matches          |

## get_starcraft_brood_war_matches

List matches for the StarCraft Brood War videogame

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/matches`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarMatches](../models/FilterOverStarcraftBroodWarMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarMatches](../models/RangeOverStarcraftBroodWarMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarMatches](../models/SearchOverStarcraftBroodWarMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraftBroodWarMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverStarcraftBroodWarMatches,
  SearchOverStarcraftBroodWarMatches,
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

  const filterOverStarcraftBroodWarMatchesVideogameTitle = 10;

  const filterOverStarcraftBroodWarMatchesVideogameVersion = '75879248.59.445946';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverStarcraftBroodWarMatches = {
    beginAt: ['Duis irure con'],
    detailedStats: true,
    draw: true,
    endAt: ['in '],
    finished: true,
    forfeit: true,
    future: true,
    id: [1],
    leagueId: [2],
    matchType: [matchType],
    modifiedAt: ['sint e'],
    name: ['sintdolo'],
    notStarted: true,
    numberOfGames: [3],
    opponentId: [filterOverStarcraftBroodWarMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['la'],
    serieId: [8],
    slug: ['JE_'],
    status: [matchStatus],
    tournamentId: [3],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverStarcraftBroodWarMatchesVideogameTitle],
    videogameVersion: [filterOverStarcraftBroodWarMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverStarcraftBroodWarMatches = {
    beginAt: ['ex magna ipsu'],
    detailedStats: [true],
    draw: [true],
    endAt: ['est'],
    forfeit: [true],
    id: [4],
    matchType: [matchType],
    modifiedAt: ['elit nostrud u'],
    name: ['incididunt q'],
    numberOfGames: [9],
    scheduledAt: ['Lor'],
    slug: ['S'],
    status: [matchStatus],
    tournamentId: [5],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverStarcraftBroodWarMatches = {
    matchType: matchType,
    name: 'sedirure',
    slug: 'kcOA z',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraftBroodWarMatches.getStarcraftBroodWarMatches({
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

## get_starcraft_brood_war_matches_past

List past StarCraft Brood War matches

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/matches/past`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarMatches](../models/FilterOverStarcraftBroodWarMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarMatches](../models/RangeOverStarcraftBroodWarMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarMatches](../models/SearchOverStarcraftBroodWarMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraftBroodWarMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverStarcraftBroodWarMatches,
  SearchOverStarcraftBroodWarMatches,
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

  const filterOverStarcraftBroodWarMatchesVideogameTitle = 10;

  const filterOverStarcraftBroodWarMatchesVideogameVersion = '75879248.59.445946';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverStarcraftBroodWarMatches = {
    beginAt: ['Duis irure con'],
    detailedStats: true,
    draw: true,
    endAt: ['in '],
    finished: true,
    forfeit: true,
    future: true,
    id: [1],
    leagueId: [2],
    matchType: [matchType],
    modifiedAt: ['sint e'],
    name: ['sintdolo'],
    notStarted: true,
    numberOfGames: [3],
    opponentId: [filterOverStarcraftBroodWarMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['la'],
    serieId: [8],
    slug: ['JE_'],
    status: [matchStatus],
    tournamentId: [3],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverStarcraftBroodWarMatchesVideogameTitle],
    videogameVersion: [filterOverStarcraftBroodWarMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverStarcraftBroodWarMatches = {
    beginAt: ['ex magna ipsu'],
    detailedStats: [true],
    draw: [true],
    endAt: ['est'],
    forfeit: [true],
    id: [4],
    matchType: [matchType],
    modifiedAt: ['elit nostrud u'],
    name: ['incididunt q'],
    numberOfGames: [9],
    scheduledAt: ['Lor'],
    slug: ['S'],
    status: [matchStatus],
    tournamentId: [5],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverStarcraftBroodWarMatches = {
    matchType: matchType,
    name: 'sedirure',
    slug: 'kcOA z',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraftBroodWarMatches.getStarcraftBroodWarMatchesPast({
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

## get_starcraft_brood_war_matches_running

List running StarCraft Brood War matches

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/matches/running`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarMatches](../models/FilterOverStarcraftBroodWarMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarMatches](../models/RangeOverStarcraftBroodWarMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarMatches](../models/SearchOverStarcraftBroodWarMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraftBroodWarMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverStarcraftBroodWarMatches,
  SearchOverStarcraftBroodWarMatches,
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

  const filterOverStarcraftBroodWarMatchesVideogameTitle = 10;

  const filterOverStarcraftBroodWarMatchesVideogameVersion = '75879248.59.445946';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverStarcraftBroodWarMatches = {
    beginAt: ['Duis irure con'],
    detailedStats: true,
    draw: true,
    endAt: ['in '],
    finished: true,
    forfeit: true,
    future: true,
    id: [1],
    leagueId: [2],
    matchType: [matchType],
    modifiedAt: ['sint e'],
    name: ['sintdolo'],
    notStarted: true,
    numberOfGames: [3],
    opponentId: [filterOverStarcraftBroodWarMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['la'],
    serieId: [8],
    slug: ['JE_'],
    status: [matchStatus],
    tournamentId: [3],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverStarcraftBroodWarMatchesVideogameTitle],
    videogameVersion: [filterOverStarcraftBroodWarMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverStarcraftBroodWarMatches = {
    beginAt: ['ex magna ipsu'],
    detailedStats: [true],
    draw: [true],
    endAt: ['est'],
    forfeit: [true],
    id: [4],
    matchType: [matchType],
    modifiedAt: ['elit nostrud u'],
    name: ['incididunt q'],
    numberOfGames: [9],
    scheduledAt: ['Lor'],
    slug: ['S'],
    status: [matchStatus],
    tournamentId: [5],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverStarcraftBroodWarMatches = {
    matchType: matchType,
    name: 'sedirure',
    slug: 'kcOA z',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraftBroodWarMatches.getStarcraftBroodWarMatchesRunning({
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

## get_starcraft_brood_war_matches_upcoming

List upcoming StarCraft Brood War matches

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/matches/upcoming`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarMatches](../models/FilterOverStarcraftBroodWarMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarMatches](../models/RangeOverStarcraftBroodWarMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarMatches](../models/SearchOverStarcraftBroodWarMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverStarcraftBroodWarMatches,
  MatchStatus,
  MatchType,
  MatchWinnerType,
  OpponentId,
  Page,
  PandascoreClient,
  PlayerIdOrSlug,
  RangeOverStarcraftBroodWarMatches,
  SearchOverStarcraftBroodWarMatches,
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

  const filterOverStarcraftBroodWarMatchesVideogameTitle = 10;

  const filterOverStarcraftBroodWarMatchesVideogameVersion = '75879248.59.445946';

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const filter: FilterOverStarcraftBroodWarMatches = {
    beginAt: ['Duis irure con'],
    detailedStats: true,
    draw: true,
    endAt: ['in '],
    finished: true,
    forfeit: true,
    future: true,
    id: [1],
    leagueId: [2],
    matchType: [matchType],
    modifiedAt: ['sint e'],
    name: ['sintdolo'],
    notStarted: true,
    numberOfGames: [3],
    opponentId: [filterOverStarcraftBroodWarMatchesOpponentId],
    opponentsFilled: true,
    past: true,
    running: true,
    scheduledAt: ['la'],
    serieId: [8],
    slug: ['JE_'],
    status: [matchStatus],
    tournamentId: [3],
    unscheduled: true,
    videogame: [videogameIdOrSlug],
    videogameTitle: [filterOverStarcraftBroodWarMatchesVideogameTitle],
    videogameVersion: [filterOverStarcraftBroodWarMatchesVideogameVersion],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const opponentId = 8;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const range: RangeOverStarcraftBroodWarMatches = {
    beginAt: ['ex magna ipsu'],
    detailedStats: [true],
    draw: [true],
    endAt: ['est'],
    forfeit: [true],
    id: [4],
    matchType: [matchType],
    modifiedAt: ['elit nostrud u'],
    name: ['incididunt q'],
    numberOfGames: [9],
    scheduledAt: ['Lor'],
    slug: ['S'],
    status: [matchStatus],
    tournamentId: [5],
    winnerId: [opponentId],
    winnerType: [matchWinnerType],
  };
  const matchType = MatchType.ALLGAMESPLAYED;

  const matchStatus = MatchStatus.CANCELED;

  const matchWinnerType = MatchWinnerType.PLAYER;

  const search: SearchOverStarcraftBroodWarMatches = {
    matchType: matchType,
    name: 'sedirure',
    slug: 'kcOA z',
    status: matchStatus,
    winnerType: matchWinnerType,
  };
  const page = 1;

  const { data } = await pandascoreClient.starCraftBroodWarMatches.getStarcraftBroodWarMatchesUpcoming({
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
