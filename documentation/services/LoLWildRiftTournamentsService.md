# LoLWildRiftTournamentsService

A list of all methods in the `LoLWildRiftTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                           | Description                                      |
| :-------------------------------------------------------------------------------- | :----------------------------------------------- |
| [get_lol_wild_rift_tournaments](#get_lol_wild_rift_tournaments)                   | List tournaments for the LoL Wild Rift videogame |
| [get_lol_wild_rift_tournaments_past](#get_lol_wild_rift_tournaments_past)         | List past LoL Wild Rift tournaments              |
| [get_lol_wild_rift_tournaments_running](#get_lol_wild_rift_tournaments_running)   | List running LoL Wild Rift tournaments           |
| [get_lol_wild_rift_tournaments_upcoming](#get_lol_wild_rift_tournaments_upcoming) | List upcoming LoL Wild Rift tournaments          |

## get_lol_wild_rift_tournaments

List tournaments for the LoL Wild Rift videogame

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/tournaments`

**Parameters**

| Name    | Type                                                                                        | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftShortTournaments](../models/FilterOverLolWildRiftShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftShortTournaments](../models/RangeOverLolWildRiftShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftShortTournaments](../models/SearchOverLolWildRiftShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const filterOverLolWildRiftShortTournamentsVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLolWildRiftShortTournaments = {
    beginAt: ['ad'],
    detailedStats: true,
    endAt: ['proident id qu'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['ips'],
    name: ['dolore'],
    prizepool: ['quisci'],
    serieId: [9],
    slug: ['9pele'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverLolWildRiftShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverLolWildRiftShortTournaments = {
    beginAt: ['ess'],
    detailedStats: [true],
    endAt: ['exerc'],
    hasBracket: [true],
    id: [7],
    modifiedAt: ['aute dolore s'],
    name: ['commodo l'],
    prizepool: ['Excepteur'],
    serieId: [3],
    slug: ['mqp8vsic-'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverLolWildRiftShortTournaments = {
    name: 'aliquip dese',
    prizepool: 'aliquip ',
    slug: '6qc5mdf',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.loLWildRiftTournaments.getLolWildRiftTournaments({
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

## get_lol_wild_rift_tournaments_past

List past LoL Wild Rift tournaments

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/tournaments/past`

**Parameters**

| Name    | Type                                                                                        | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftShortTournaments](../models/FilterOverLolWildRiftShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftShortTournaments](../models/RangeOverLolWildRiftShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftShortTournaments](../models/SearchOverLolWildRiftShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const filterOverLolWildRiftShortTournamentsVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLolWildRiftShortTournaments = {
    beginAt: ['ad'],
    detailedStats: true,
    endAt: ['proident id qu'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['ips'],
    name: ['dolore'],
    prizepool: ['quisci'],
    serieId: [9],
    slug: ['9pele'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverLolWildRiftShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverLolWildRiftShortTournaments = {
    beginAt: ['ess'],
    detailedStats: [true],
    endAt: ['exerc'],
    hasBracket: [true],
    id: [7],
    modifiedAt: ['aute dolore s'],
    name: ['commodo l'],
    prizepool: ['Excepteur'],
    serieId: [3],
    slug: ['mqp8vsic-'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverLolWildRiftShortTournaments = {
    name: 'aliquip dese',
    prizepool: 'aliquip ',
    slug: '6qc5mdf',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.loLWildRiftTournaments.getLolWildRiftTournamentsPast({
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

## get_lol_wild_rift_tournaments_running

List running LoL Wild Rift tournaments

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/tournaments/running`

**Parameters**

| Name    | Type                                                                                        | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftShortTournaments](../models/FilterOverLolWildRiftShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftShortTournaments](../models/RangeOverLolWildRiftShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftShortTournaments](../models/SearchOverLolWildRiftShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const filterOverLolWildRiftShortTournamentsVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLolWildRiftShortTournaments = {
    beginAt: ['ad'],
    detailedStats: true,
    endAt: ['proident id qu'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['ips'],
    name: ['dolore'],
    prizepool: ['quisci'],
    serieId: [9],
    slug: ['9pele'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverLolWildRiftShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverLolWildRiftShortTournaments = {
    beginAt: ['ess'],
    detailedStats: [true],
    endAt: ['exerc'],
    hasBracket: [true],
    id: [7],
    modifiedAt: ['aute dolore s'],
    name: ['commodo l'],
    prizepool: ['Excepteur'],
    serieId: [3],
    slug: ['mqp8vsic-'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverLolWildRiftShortTournaments = {
    name: 'aliquip dese',
    prizepool: 'aliquip ',
    slug: '6qc5mdf',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.loLWildRiftTournaments.getLolWildRiftTournamentsRunning({
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

## get_lol_wild_rift_tournaments_upcoming

List upcoming LoL Wild Rift tournaments

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                                        | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftShortTournaments](../models/FilterOverLolWildRiftShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftShortTournaments](../models/RangeOverLolWildRiftShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftShortTournaments](../models/SearchOverLolWildRiftShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

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

  const filterOverLolWildRiftShortTournamentsVideogameTitle = 10;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLolWildRiftShortTournaments = {
    beginAt: ['ad'],
    detailedStats: true,
    endAt: ['proident id qu'],
    hasBracket: true,
    id: [7],
    liveSupported: true,
    modifiedAt: ['ips'],
    name: ['dolore'],
    prizepool: ['quisci'],
    serieId: [9],
    slug: ['9pele'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverLolWildRiftShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverLolWildRiftShortTournaments = {
    beginAt: ['ess'],
    detailedStats: [true],
    endAt: ['exerc'],
    hasBracket: [true],
    id: [7],
    modifiedAt: ['aute dolore s'],
    name: ['commodo l'],
    prizepool: ['Excepteur'],
    serieId: [3],
    slug: ['mqp8vsic-'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverLolWildRiftShortTournaments = {
    name: 'aliquip dese',
    prizepool: 'aliquip ',
    slug: '6qc5mdf',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.loLWildRiftTournaments.getLolWildRiftTournamentsUpcoming({
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
