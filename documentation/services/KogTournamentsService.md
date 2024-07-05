# KogTournamentsService

A list of all methods in the `KogTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                       | Description                                      |
| :------------------------------------------------------------ | :----------------------------------------------- |
| [get_kog_tournaments](#get_kog_tournaments)                   | List tournaments for the King of Glory videogame |
| [get_kog_tournaments_past](#get_kog_tournaments_past)         | List past King of Glory tournaments              |
| [get_kog_tournaments_running](#get_kog_tournaments_running)   | List running King of Glory tournaments           |
| [get_kog_tournaments_upcoming](#get_kog_tournaments_upcoming) | List upcoming King of Glory tournaments          |

## get_kog_tournaments

List tournaments for the King of Glory videogame

- HTTP Method: `GET`
- Endpoint: `/kog/tournaments`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogShortTournaments](../models/FilterOverKogShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogShortTournaments](../models/RangeOverKogShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogShortTournaments](../models/SearchOverKogShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const filterOverKogShortTournamentsVideogameTitle = 2;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverKogShortTournaments = {
    beginAt: ['fugiat dolore'],
    detailedStats: true,
    endAt: ['mollit'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['culp'],
    name: ['est te'],
    prizepool: ['aute inci'],
    serieId: [8],
    slug: ['8u8--wrh'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverKogShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverKogShortTournaments = {
    beginAt: ['Excep'],
    detailedStats: [true],
    endAt: ['aliqu'],
    hasBracket: [true],
    id: [9],
    modifiedAt: ['in proident d'],
    name: ['aute Duis si'],
    prizepool: ['aliquip'],
    serieId: [4],
    slug: ['5ekk6p6i'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverKogShortTournaments = {
    name: 'nostrud mol',
    prizepool: 'esteu consect',
    slug: 'sokvr',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.kogTournaments.getKogTournaments({
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

## get_kog_tournaments_past

List past King of Glory tournaments

- HTTP Method: `GET`
- Endpoint: `/kog/tournaments/past`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogShortTournaments](../models/FilterOverKogShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogShortTournaments](../models/RangeOverKogShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogShortTournaments](../models/SearchOverKogShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const filterOverKogShortTournamentsVideogameTitle = 2;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverKogShortTournaments = {
    beginAt: ['fugiat dolore'],
    detailedStats: true,
    endAt: ['mollit'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['culp'],
    name: ['est te'],
    prizepool: ['aute inci'],
    serieId: [8],
    slug: ['8u8--wrh'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverKogShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverKogShortTournaments = {
    beginAt: ['Excep'],
    detailedStats: [true],
    endAt: ['aliqu'],
    hasBracket: [true],
    id: [9],
    modifiedAt: ['in proident d'],
    name: ['aute Duis si'],
    prizepool: ['aliquip'],
    serieId: [4],
    slug: ['5ekk6p6i'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverKogShortTournaments = {
    name: 'nostrud mol',
    prizepool: 'esteu consect',
    slug: 'sokvr',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.kogTournaments.getKogTournamentsPast({
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

## get_kog_tournaments_running

List running King of Glory tournaments

- HTTP Method: `GET`
- Endpoint: `/kog/tournaments/running`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogShortTournaments](../models/FilterOverKogShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogShortTournaments](../models/RangeOverKogShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogShortTournaments](../models/SearchOverKogShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const filterOverKogShortTournamentsVideogameTitle = 2;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverKogShortTournaments = {
    beginAt: ['fugiat dolore'],
    detailedStats: true,
    endAt: ['mollit'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['culp'],
    name: ['est te'],
    prizepool: ['aute inci'],
    serieId: [8],
    slug: ['8u8--wrh'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverKogShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverKogShortTournaments = {
    beginAt: ['Excep'],
    detailedStats: [true],
    endAt: ['aliqu'],
    hasBracket: [true],
    id: [9],
    modifiedAt: ['in proident d'],
    name: ['aute Duis si'],
    prizepool: ['aliquip'],
    serieId: [4],
    slug: ['5ekk6p6i'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverKogShortTournaments = {
    name: 'nostrud mol',
    prizepool: 'esteu consect',
    slug: 'sokvr',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.kogTournaments.getKogTournamentsRunning({
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

## get_kog_tournaments_upcoming

List upcoming King of Glory tournaments

- HTTP Method: `GET`
- Endpoint: `/kog/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogShortTournaments](../models/FilterOverKogShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogShortTournaments](../models/RangeOverKogShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogShortTournaments](../models/SearchOverKogShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const filterOverKogShortTournamentsVideogameTitle = 2;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverKogShortTournaments = {
    beginAt: ['fugiat dolore'],
    detailedStats: true,
    endAt: ['mollit'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['culp'],
    name: ['est te'],
    prizepool: ['aute inci'],
    serieId: [8],
    slug: ['8u8--wrh'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverKogShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverKogShortTournaments = {
    beginAt: ['Excep'],
    detailedStats: [true],
    endAt: ['aliqu'],
    hasBracket: [true],
    id: [9],
    modifiedAt: ['in proident d'],
    name: ['aute Duis si'],
    prizepool: ['aliquip'],
    serieId: [4],
    slug: ['5ekk6p6i'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverKogShortTournaments = {
    name: 'nostrud mol',
    prizepool: 'esteu consect',
    slug: 'sokvr',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.kogTournaments.getKogTournamentsUpcoming({
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
