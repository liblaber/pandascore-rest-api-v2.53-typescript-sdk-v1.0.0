# EaSportsFcTournamentsService

A list of all methods in the `EaSportsFcTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                         | Description                                     |
| :-------------------------------------------------------------- | :---------------------------------------------- |
| [get_fifa_tournaments](#get_fifa_tournaments)                   | List tournaments for the EA Sports FC videogame |
| [get_fifa_tournaments_past](#get_fifa_tournaments_past)         | List past EA Sports FC tournaments              |
| [get_fifa_tournaments_running](#get_fifa_tournaments_running)   | List running EA Sports FC tournaments           |
| [get_fifa_tournaments_upcoming](#get_fifa_tournaments_upcoming) | List upcoming EA Sports FC tournaments          |

## get_fifa_tournaments

List tournaments for the EA Sports FC videogame

- HTTP Method: `GET`
- Endpoint: `/fifa/tournaments`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaShortTournaments](../models/FilterOverFifaShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaShortTournaments](../models/RangeOverFifaShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaShortTournaments](../models/SearchOverFifaShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const filterOverFifaShortTournamentsVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverFifaShortTournaments = {
    beginAt: ['in'],
    detailedStats: true,
    endAt: ['non elit et'],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['culpa labo'],
    name: ['mollit dolor'],
    prizepool: ['sitoccaeca'],
    serieId: [9],
    slug: ['_vg7'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverFifaShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverFifaShortTournaments = {
    beginAt: ['esse non'],
    detailedStats: [true],
    endAt: ['c'],
    hasBracket: [true],
    id: [10],
    modifiedAt: ['est '],
    name: ['dolore dolor'],
    prizepool: ['et in'],
    serieId: [5],
    slug: ['an596w6jsxw'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverFifaShortTournaments = {
    name: 'id in',
    prizepool: 'ex fugiat eu in',
    slug: 't2exc',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.eaSportsFcTournaments.getFifaTournaments({
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

## get_fifa_tournaments_past

List past EA Sports FC tournaments

- HTTP Method: `GET`
- Endpoint: `/fifa/tournaments/past`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaShortTournaments](../models/FilterOverFifaShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaShortTournaments](../models/RangeOverFifaShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaShortTournaments](../models/SearchOverFifaShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const filterOverFifaShortTournamentsVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverFifaShortTournaments = {
    beginAt: ['in'],
    detailedStats: true,
    endAt: ['non elit et'],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['culpa labo'],
    name: ['mollit dolor'],
    prizepool: ['sitoccaeca'],
    serieId: [9],
    slug: ['_vg7'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverFifaShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverFifaShortTournaments = {
    beginAt: ['esse non'],
    detailedStats: [true],
    endAt: ['c'],
    hasBracket: [true],
    id: [10],
    modifiedAt: ['est '],
    name: ['dolore dolor'],
    prizepool: ['et in'],
    serieId: [5],
    slug: ['an596w6jsxw'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverFifaShortTournaments = {
    name: 'id in',
    prizepool: 'ex fugiat eu in',
    slug: 't2exc',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.eaSportsFcTournaments.getFifaTournamentsPast({
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

## get_fifa_tournaments_running

List running EA Sports FC tournaments

- HTTP Method: `GET`
- Endpoint: `/fifa/tournaments/running`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaShortTournaments](../models/FilterOverFifaShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaShortTournaments](../models/RangeOverFifaShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaShortTournaments](../models/SearchOverFifaShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const filterOverFifaShortTournamentsVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverFifaShortTournaments = {
    beginAt: ['in'],
    detailedStats: true,
    endAt: ['non elit et'],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['culpa labo'],
    name: ['mollit dolor'],
    prizepool: ['sitoccaeca'],
    serieId: [9],
    slug: ['_vg7'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverFifaShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverFifaShortTournaments = {
    beginAt: ['esse non'],
    detailedStats: [true],
    endAt: ['c'],
    hasBracket: [true],
    id: [10],
    modifiedAt: ['est '],
    name: ['dolore dolor'],
    prizepool: ['et in'],
    serieId: [5],
    slug: ['an596w6jsxw'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverFifaShortTournaments = {
    name: 'id in',
    prizepool: 'ex fugiat eu in',
    slug: 't2exc',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.eaSportsFcTournaments.getFifaTournamentsRunning({
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

## get_fifa_tournaments_upcoming

List upcoming EA Sports FC tournaments

- HTTP Method: `GET`
- Endpoint: `/fifa/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                          | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaShortTournaments](../models/FilterOverFifaShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaShortTournaments](../models/RangeOverFifaShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaShortTournaments](../models/SearchOverFifaShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const filterOverFifaShortTournamentsVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverFifaShortTournaments = {
    beginAt: ['in'],
    detailedStats: true,
    endAt: ['non elit et'],
    hasBracket: true,
    id: [9],
    liveSupported: true,
    modifiedAt: ['culpa labo'],
    name: ['mollit dolor'],
    prizepool: ['sitoccaeca'],
    serieId: [9],
    slug: ['_vg7'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverFifaShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverFifaShortTournaments = {
    beginAt: ['esse non'],
    detailedStats: [true],
    endAt: ['c'],
    hasBracket: [true],
    id: [10],
    modifiedAt: ['est '],
    name: ['dolore dolor'],
    prizepool: ['et in'],
    serieId: [5],
    slug: ['an596w6jsxw'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverFifaShortTournaments = {
    name: 'id in',
    prizepool: 'ex fugiat eu in',
    slug: 't2exc',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.eaSportsFcTournaments.getFifaTournamentsUpcoming({
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
