# LoLTournamentsService

A list of all methods in the `LoLTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                       | Description                                          |
| :------------------------------------------------------------ | :--------------------------------------------------- |
| [get_lol_tournaments](#get_lol_tournaments)                   | List tournaments for the League of Legends videogame |
| [get_lol_tournaments_past](#get_lol_tournaments_past)         | List past League of Legends tournaments              |
| [get_lol_tournaments_running](#get_lol_tournaments_running)   | List running League of Legends tournaments           |
| [get_lol_tournaments_upcoming](#get_lol_tournaments_upcoming) | List upcoming League of Legends tournaments          |

## get_lol_tournaments

List tournaments for the League of Legends videogame

- HTTP Method: `GET`
- Endpoint: `/lol/tournaments`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLShortTournaments](../models/FilterOverLoLShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLShortTournaments](../models/RangeOverLoLShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLShortTournaments](../models/SearchOverLoLShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverLoLShortTournamentsVideogameTitle = 3;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLoLShortTournaments = {
    beginAt: ['mollit'],
    detailedStats: true,
    endAt: ['re'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['ani'],
    name: ['enimlabo'],
    prizepool: ['nulla'],
    serieId: [8],
    slug: ['-xpz6'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverLoLShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverLoLShortTournaments = {
    beginAt: ['magn'],
    detailedStats: [true],
    endAt: ['commodo anim'],
    hasBracket: [true],
    id: [2],
    modifiedAt: ['r'],
    name: ['nulla'],
    prizepool: ['culpa ad do a'],
    serieId: [1],
    slug: ['x9afk4mz0k'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverLoLShortTournaments = {
    name: 'Lorem',
    prizepool: 'quis u',
    slug: 'cmk7g40n',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.loLTournaments.getLolTournaments({
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

## get_lol_tournaments_past

List past League of Legends tournaments

- HTTP Method: `GET`
- Endpoint: `/lol/tournaments/past`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLShortTournaments](../models/FilterOverLoLShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLShortTournaments](../models/RangeOverLoLShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLShortTournaments](../models/SearchOverLoLShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverLoLShortTournamentsVideogameTitle = 3;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLoLShortTournaments = {
    beginAt: ['mollit'],
    detailedStats: true,
    endAt: ['re'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['ani'],
    name: ['enimlabo'],
    prizepool: ['nulla'],
    serieId: [8],
    slug: ['-xpz6'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverLoLShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverLoLShortTournaments = {
    beginAt: ['magn'],
    detailedStats: [true],
    endAt: ['commodo anim'],
    hasBracket: [true],
    id: [2],
    modifiedAt: ['r'],
    name: ['nulla'],
    prizepool: ['culpa ad do a'],
    serieId: [1],
    slug: ['x9afk4mz0k'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverLoLShortTournaments = {
    name: 'Lorem',
    prizepool: 'quis u',
    slug: 'cmk7g40n',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.loLTournaments.getLolTournamentsPast({
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

## get_lol_tournaments_running

List running League of Legends tournaments

- HTTP Method: `GET`
- Endpoint: `/lol/tournaments/running`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLShortTournaments](../models/FilterOverLoLShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLShortTournaments](../models/RangeOverLoLShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLShortTournaments](../models/SearchOverLoLShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverLoLShortTournamentsVideogameTitle = 3;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLoLShortTournaments = {
    beginAt: ['mollit'],
    detailedStats: true,
    endAt: ['re'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['ani'],
    name: ['enimlabo'],
    prizepool: ['nulla'],
    serieId: [8],
    slug: ['-xpz6'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverLoLShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverLoLShortTournaments = {
    beginAt: ['magn'],
    detailedStats: [true],
    endAt: ['commodo anim'],
    hasBracket: [true],
    id: [2],
    modifiedAt: ['r'],
    name: ['nulla'],
    prizepool: ['culpa ad do a'],
    serieId: [1],
    slug: ['x9afk4mz0k'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverLoLShortTournaments = {
    name: 'Lorem',
    prizepool: 'quis u',
    slug: 'cmk7g40n',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.loLTournaments.getLolTournamentsRunning({
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

## get_lol_tournaments_upcoming

List upcoming League of Legends tournaments

- HTTP Method: `GET`
- Endpoint: `/lol/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLShortTournaments](../models/FilterOverLoLShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLShortTournaments](../models/RangeOverLoLShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLShortTournaments](../models/SearchOverLoLShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filterOverLoLShortTournamentsVideogameTitle = 3;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverLoLShortTournaments = {
    beginAt: ['mollit'],
    detailedStats: true,
    endAt: ['re'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['ani'],
    name: ['enimlabo'],
    prizepool: ['nulla'],
    serieId: [8],
    slug: ['-xpz6'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverLoLShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverLoLShortTournaments = {
    beginAt: ['magn'],
    detailedStats: [true],
    endAt: ['commodo anim'],
    hasBracket: [true],
    id: [2],
    modifiedAt: ['r'],
    name: ['nulla'],
    prizepool: ['culpa ad do a'],
    serieId: [1],
    slug: ['x9afk4mz0k'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

  const opponentType = OpponentType.Player;

  const search: SearchOverLoLShortTournaments = {
    name: 'Lorem',
    prizepool: 'quis u',
    slug: 'cmk7g40n',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.loLTournaments.getLolTournamentsUpcoming({
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
