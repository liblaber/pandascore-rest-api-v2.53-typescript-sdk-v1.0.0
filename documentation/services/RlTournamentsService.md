# RlTournamentsService

A list of all methods in the `RlTournamentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                     | Description                                      |
| :---------------------------------------------------------- | :----------------------------------------------- |
| [get_rl_tournaments](#get_rl_tournaments)                   | List tournaments for the Rocket League videogame |
| [get_rl_tournaments_past](#get_rl_tournaments_past)         | List past Rocket League tournaments              |
| [get_rl_tournaments_running](#get_rl_tournaments_running)   | List running Rocket League tournaments           |
| [get_rl_tournaments_upcoming](#get_rl_tournaments_upcoming) | List upcoming Rocket League tournaments          |

## get_rl_tournaments

List tournaments for the Rocket League videogame

- HTTP Method: `GET`
- Endpoint: `/rl/tournaments`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlShortTournaments](../models/FilterOverRlShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlShortTournaments](../models/RangeOverRlShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlShortTournaments](../models/SearchOverRlShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverRlShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverRlShortTournaments,
  SearchOverRlShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverRlShortTournamentsVideogameTitle = 3;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverRlShortTournaments = {
    beginAt: ['ip'],
    detailedStats: true,
    endAt: ['sit'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['consequat '],
    name: ['eiusmod'],
    prizepool: ['reprehe'],
    serieId: [4],
    slug: ['9aso8q5'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverRlShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverRlShortTournaments = {
    beginAt: ['sunt cons'],
    detailedStats: [true],
    endAt: ['do Exce'],
    hasBracket: [true],
    id: [7],
    modifiedAt: ['dol'],
    name: ['Excepteur d'],
    prizepool: ['do cillum labor'],
    serieId: [9],
    slug: ['i2bmxfh'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverRlShortTournaments = {
    name: 'in co',
    prizepool: 'iddo a',
    slug: '9xt8w3d2_db',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlTournaments.getRlTournaments({
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

## get_rl_tournaments_past

List past Rocket League tournaments

- HTTP Method: `GET`
- Endpoint: `/rl/tournaments/past`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlShortTournaments](../models/FilterOverRlShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlShortTournaments](../models/RangeOverRlShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlShortTournaments](../models/SearchOverRlShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverRlShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverRlShortTournaments,
  SearchOverRlShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverRlShortTournamentsVideogameTitle = 3;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverRlShortTournaments = {
    beginAt: ['ip'],
    detailedStats: true,
    endAt: ['sit'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['consequat '],
    name: ['eiusmod'],
    prizepool: ['reprehe'],
    serieId: [4],
    slug: ['9aso8q5'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverRlShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverRlShortTournaments = {
    beginAt: ['sunt cons'],
    detailedStats: [true],
    endAt: ['do Exce'],
    hasBracket: [true],
    id: [7],
    modifiedAt: ['dol'],
    name: ['Excepteur d'],
    prizepool: ['do cillum labor'],
    serieId: [9],
    slug: ['i2bmxfh'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverRlShortTournaments = {
    name: 'in co',
    prizepool: 'iddo a',
    slug: '9xt8w3d2_db',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlTournaments.getRlTournamentsPast({
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

## get_rl_tournaments_running

List running Rocket League tournaments

- HTTP Method: `GET`
- Endpoint: `/rl/tournaments/running`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlShortTournaments](../models/FilterOverRlShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlShortTournaments](../models/RangeOverRlShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlShortTournaments](../models/SearchOverRlShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverRlShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverRlShortTournaments,
  SearchOverRlShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverRlShortTournamentsVideogameTitle = 3;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverRlShortTournaments = {
    beginAt: ['ip'],
    detailedStats: true,
    endAt: ['sit'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['consequat '],
    name: ['eiusmod'],
    prizepool: ['reprehe'],
    serieId: [4],
    slug: ['9aso8q5'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverRlShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverRlShortTournaments = {
    beginAt: ['sunt cons'],
    detailedStats: [true],
    endAt: ['do Exce'],
    hasBracket: [true],
    id: [7],
    modifiedAt: ['dol'],
    name: ['Excepteur d'],
    prizepool: ['do cillum labor'],
    serieId: [9],
    slug: ['i2bmxfh'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverRlShortTournaments = {
    name: 'in co',
    prizepool: 'iddo a',
    slug: '9xt8w3d2_db',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlTournaments.getRlTournamentsRunning({
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

## get_rl_tournaments_upcoming

List upcoming Rocket League tournaments

- HTTP Method: `GET`
- Endpoint: `/rl/tournaments/upcoming`

**Parameters**

| Name    | Type                                                                      | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlShortTournaments](../models/FilterOverRlShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlShortTournaments](../models/RangeOverRlShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlShortTournaments](../models/SearchOverRlShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverRlShortTournaments,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverRlShortTournaments,
  SearchOverRlShortTournaments,
  SearchOverValorantShortTournamentsTier2,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const filterOverRlShortTournamentsVideogameTitle = 3;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverRlShortTournaments = {
    beginAt: ['ip'],
    detailedStats: true,
    endAt: ['sit'],
    hasBracket: true,
    id: [2],
    liveSupported: true,
    modifiedAt: ['consequat '],
    name: ['eiusmod'],
    prizepool: ['reprehe'],
    serieId: [4],
    slug: ['9aso8q5'],
    tier: [searchOverValorantShortTournamentsTier2],
    videogameTitle: [filterOverRlShortTournamentsVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverRlShortTournaments = {
    beginAt: ['sunt cons'],
    detailedStats: [true],
    endAt: ['do Exce'],
    hasBracket: [true],
    id: [7],
    modifiedAt: ['dol'],
    name: ['Excepteur d'],
    prizepool: ['do cillum labor'],
    serieId: [9],
    slug: ['i2bmxfh'],
    tier: [searchOverValorantShortTournamentsTier2],
    winnerId: [opponentId],
    winnerType: [opponentType],
  };
  const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

  const opponentType = OpponentType.PLAYER;

  const search: SearchOverRlShortTournaments = {
    name: 'in co',
    prizepool: 'iddo a',
    slug: '9xt8w3d2_db',
    tier: searchOverValorantShortTournamentsTier2,
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.rlTournaments.getRlTournamentsUpcoming({
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
