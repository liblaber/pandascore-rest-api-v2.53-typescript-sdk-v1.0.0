# ValorantTournamentsService

A list of all methods in the `ValorantTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                 | Description                                 |
| :---------------------------------------------------------------------- | :------------------------------------------ |
| [get_valorant_tournaments](#get_valorant_tournaments)                   | List tournaments for the Valorant videogame |
| [get_valorant_tournaments_past](#get_valorant_tournaments_past)         | List past Valorant tournaments              |
| [get_valorant_tournaments_running](#get_valorant_tournaments_running)   | List running Valorant tournaments           |
| [get_valorant_tournaments_upcoming](#get_valorant_tournaments_upcoming) | List upcoming Valorant tournaments          |

## get_valorant_tournaments

List tournaments for the Valorant videogame

- HTTP Method: `GET`
- Endpoint: `/valorant/tournaments`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantShortTournaments](../models/FilterOverValorantShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantShortTournaments](../models/RangeOverValorantShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantShortTournaments](../models/SearchOverValorantShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverValorantShortTournamentsVideogameTitle = 9;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverValorantShortTournaments = {
    beginAt: ['irure'],
    detailedStats: true,
    endAt: ['esse'],
    hasBracket: true,
    id: [6],
    liveSupported: true,
    modifiedAt: ['minim proident'],
    name: ['non occaeca'],
    prizepool: ['aliquip'],
    serieId: [7],
    slug: ['c_ac'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverValorantShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverValorantShortTournaments = {
    beginAt: ['mollit'],
    detailedStats: [true],
    endAt: ['pariatur'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['sit'],
    name: ['labore'],
    prizepool: ['irure in d'],
    serieId: [4],
    slug: ['o55i-cc_5fi'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverValorantShortTournaments = {
    name: 'laboris',
    prizepool: 'Duis en',
    slug: '4a53vbi',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.valorantTournaments.getValorantTournaments({
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

## get_valorant_tournaments_past

List past Valorant tournaments

- HTTP Method: `GET`
- Endpoint: `/valorant/tournaments/past`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantShortTournaments](../models/FilterOverValorantShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantShortTournaments](../models/RangeOverValorantShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantShortTournaments](../models/SearchOverValorantShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverValorantShortTournamentsVideogameTitle = 9;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverValorantShortTournaments = {
    beginAt: ['irure'],
    detailedStats: true,
    endAt: ['esse'],
    hasBracket: true,
    id: [6],
    liveSupported: true,
    modifiedAt: ['minim proident'],
    name: ['non occaeca'],
    prizepool: ['aliquip'],
    serieId: [7],
    slug: ['c_ac'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverValorantShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverValorantShortTournaments = {
    beginAt: ['mollit'],
    detailedStats: [true],
    endAt: ['pariatur'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['sit'],
    name: ['labore'],
    prizepool: ['irure in d'],
    serieId: [4],
    slug: ['o55i-cc_5fi'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverValorantShortTournaments = {
    name: 'laboris',
    prizepool: 'Duis en',
    slug: '4a53vbi',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.valorantTournaments.getValorantTournamentsPast({
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

## get_valorant_tournaments_running

List running Valorant tournaments

- HTTP Method: `GET`
- Endpoint: `/valorant/tournaments/running`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantShortTournaments](../models/FilterOverValorantShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantShortTournaments](../models/RangeOverValorantShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantShortTournaments](../models/SearchOverValorantShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverValorantShortTournamentsVideogameTitle = 9;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverValorantShortTournaments = {
    beginAt: ['irure'],
    detailedStats: true,
    endAt: ['esse'],
    hasBracket: true,
    id: [6],
    liveSupported: true,
    modifiedAt: ['minim proident'],
    name: ['non occaeca'],
    prizepool: ['aliquip'],
    serieId: [7],
    slug: ['c_ac'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverValorantShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverValorantShortTournaments = {
    beginAt: ['mollit'],
    detailedStats: [true],
    endAt: ['pariatur'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['sit'],
    name: ['labore'],
    prizepool: ['irure in d'],
    serieId: [4],
    slug: ['o55i-cc_5fi'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverValorantShortTournaments = {
    name: 'laboris',
    prizepool: 'Duis en',
    slug: '4a53vbi',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.valorantTournaments.getValorantTournamentsRunning({
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

## get_valorant_tournaments_upcoming

List upcoming Valorant tournaments

- HTTP Method: `GET`
- Endpoint: `/valorant/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantShortTournaments](../models/FilterOverValorantShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantShortTournaments](../models/RangeOverValorantShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantShortTournaments](../models/SearchOverValorantShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const filterOverValorantShortTournamentsVideogameTitle = 9;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverValorantShortTournaments = {
    beginAt: ['irure'],
    detailedStats: true,
    endAt: ['esse'],
    hasBracket: true,
    id: [6],
    liveSupported: true,
    modifiedAt: ['minim proident'],
    name: ['non occaeca'],
    prizepool: ['aliquip'],
    serieId: [7],
    slug: ['c_ac'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverValorantShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverValorantShortTournaments = {
    beginAt: ['mollit'],
    detailedStats: [true],
    endAt: ['pariatur'],
    hasBracket: [true],
    id: [4],
    modifiedAt: ['sit'],
    name: ['labore'],
    prizepool: ['irure in d'],
    serieId: [4],
    slug: ['o55i-cc_5fi'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverValorantShortTournaments = {
    name: 'laboris',
    prizepool: 'Duis en',
    slug: '4a53vbi',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.valorantTournaments.getValorantTournamentsUpcoming({
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
