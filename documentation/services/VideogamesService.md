# VideogamesService

A list of all methods in the `VideogamesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                       | Description                                   |
| :-------------------------------------------------------------------------------------------- | :-------------------------------------------- |
| [get_videogames](#get_videogames)                                                             | List videogames                               |
| [get_videogames_videogameIdOrSlug](#get_videogames_videogameidorslug)                         | Get a single videogame by ID or by slug       |
| [get_videogames_videogameIdOrSlug_leagues](#get_videogames_videogameidorslug_leagues)         | List leagues for a given videogame            |
| [get_videogames_videogameIdOrSlug_series](#get_videogames_videogameidorslug_series)           | List series for the given videogame           |
| [get_videogames_videogameIdOrSlug_titles](#get_videogames_videogameidorslug_titles)           | List available titles for a given videogame   |
| [get_videogames_videogameIdOrSlug_tournaments](#get_videogames_videogameidorslug_tournaments) | List tournaments of the given videogame       |
| [get_videogames_videogameIdOrSlug_versions](#get_videogames_videogameidorslug_versions)       | List available versions for a given videogame |

## get_videogames

List videogames

- HTTP Method: `GET`
- Endpoint: `/videogames`

**Parameters**

| Name    | Type                      | Required | Description                                                          |
| :------ | :------------------------ | :------- | :------------------------------------------------------------------- |
| page    | [Page](../models/Page.md) | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2` |
| perPage | number                    | ❌       | Equivalent to `page[size]`                                           |

**Return Type**

`Videogame[]`

**Example Usage Code Snippet**

```typescript
import { Page, PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const page = 1;

  const { data } = await pandascoreClient.videogames.getVideogames({
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_videogames_videogameIdOrSlug

Get a single videogame by ID or by slug

- HTTP Method: `GET`
- Endpoint: `/videogames/{videogame_id_or_slug}`

**Parameters**

| Name              | Type                                                | Required | Description            |
| :---------------- | :-------------------------------------------------- | :------- | :--------------------- |
| videogameIdOrSlug | [VideogameIdOrSlug](../models/VideogameIdOrSlug.md) | ✅       | A videogame ID or slug |

**Return Type**

`Videogame`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient, VideogameId, VideogameIdOrSlug, VideogameSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const videogameIdOrSlug = VideogameId._1;

  const { data } = await pandascoreClient.videogames.getVideogamesVideogameIdOrSlug();

  console.log(data);
})();
```

## get_videogames_videogameIdOrSlug_leagues

List leagues for a given videogame

- HTTP Method: `GET`
- Endpoint: `/videogames/{videogame_id_or_slug}/leagues`

**Parameters**

| Name              | Type                                                | Required | Description                                                                                                                                         |
| :---------------- | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| videogameIdOrSlug | [VideogameIdOrSlug](../models/VideogameIdOrSlug.md) | ✅       | A videogame ID or slug                                                                                                                              |
| filter            | [FilterOverLeagues](../models/FilterOverLeagues.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range             | [RangeOverLeagues](../models/RangeOverLeagues.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort              | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search            | [SearchOverLeagues](../models/SearchOverLeagues.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page              | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage           | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`League[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverLeagues, Page, PandascoreClient, RangeOverLeagues, SearchOverLeagues, VideogameId, VideogameIdOrSlug, VideogameSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameIdOrSlug = VideogameId._1;;

const filter: FilterOverLeagues = {
  id: [1],
  modifiedAt: ["culpa Except"],
  name: ["id sint adipi"],
  slug: ["fsqr"],
  url: ["fugiat quis"]
};

const range: RangeOverLeagues = {
  id: [5],
  modifiedAt: ["eius"],
  name: ["amet pariatur "],
  slug: ["qbz8gy"],
  url: ["amet m"]
};

const search: SearchOverLeagues = {
  name: "enim minim et",
  slug: "2wv",
  url: "sit es"
};
const page = 1;

  const { data } = await pandascoreClient.videogames.getVideogamesVideogameIdOrSlugLeagues(
  ,
  {
		filter: filter,
		range: range,
    sort: [[]],
		search: search,
		page: page,
    perPage: 50,
  }
);

  console.log(data);
})();
```

## get_videogames_videogameIdOrSlug_series

List series for the given videogame

- HTTP Method: `GET`
- Endpoint: `/videogames/{videogame_id_or_slug}/series`

**Parameters**

| Name              | Type                                                | Required | Description                                                                                                                                         |
| :---------------- | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| videogameIdOrSlug | [VideogameIdOrSlug](../models/VideogameIdOrSlug.md) | ✅       | A videogame ID or slug                                                                                                                              |
| filter            | [FilterOverSeries](../models/FilterOverSeries.md)   | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range             | [RangeOverSeries](../models/RangeOverSeries.md)     | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort              | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search            | [SearchOverSeries](../models/SearchOverSeries.md)   | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page              | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage           | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverSeries, OpponentId, OpponentType, Page, PandascoreClient, RangeOverSeries, SearchOverSeries, VideogameId, VideogameIdOrSlug, VideogameSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameIdOrSlug = VideogameId._1;;
const filterOverSeriesVideogameTitle = 8;

const opponentId = 8;

const opponentType = OpponentType.PLAYER;

const filter: FilterOverSeries = {
  beginAt: ["el"],
  endAt: ["dolo"],
  id: [10],
  leagueId: [1],
  modifiedAt: ["adipisic"],
  name: ["et qui reprehe"],
  season: ["ea Dui"],
  slug: ["jinn8"],
  videogameTitle: [filterOverSeriesVideogameTitle],
  winnerId: [opponentId],
  winnerType: [opponentType],
  year: [123]
};
const opponentId = 8;

const opponentType = OpponentType.PLAYER;

const range: RangeOverSeries = {
  beginAt: ["sun"],
  endAt: ["f"],
  id: [7],
  leagueId: [6],
  modifiedAt: ["cupi"],
  name: ["aliqua in"],
  season: ["Except"],
  slug: ["-"],
  winnerId: [opponentId],
  winnerType: [opponentType],
  year: [123]
};
const opponentType = OpponentType.PLAYER;

const search: SearchOverSeries = {
  name: "aliquip eu e",
  season: "et officia lab",
  slug: "ai8df",
  winnerType: opponentType
};
const page = 1;

  const { data } = await pandascoreClient.videogames.getVideogamesVideogameIdOrSlugSeries(
  ,
  {
		filter: filter,
		range: range,
    sort: [[]],
		search: search,
		page: page,
    perPage: 50,
  }
);

  console.log(data);
})();
```

## get_videogames_videogameIdOrSlug_titles

List available titles for a given videogame

- HTTP Method: `GET`
- Endpoint: `/videogames/{videogame_id_or_slug}/titles`

**Parameters**

| Name              | Type                                                | Required | Description                                                          |
| :---------------- | :-------------------------------------------------- | :------- | :------------------------------------------------------------------- |
| videogameIdOrSlug | [VideogameIdOrSlug](../models/VideogameIdOrSlug.md) | ✅       | A videogame ID or slug                                               |
| page              | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2` |
| perPage           | number                                              | ❌       | Equivalent to `page[size]`                                           |

**Return Type**

`ShortVideogameTitle[]`

**Example Usage Code Snippet**

```typescript
import { Page, PandascoreClient, VideogameId, VideogameIdOrSlug, VideogameSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameIdOrSlug = VideogameId._1;;
const page = 1;

  const { data } = await pandascoreClient.videogames.getVideogamesVideogameIdOrSlugTitles(
  ,
  {
		page: page,
    perPage: 50,
  }
);

  console.log(data);
})();
```

## get_videogames_videogameIdOrSlug_tournaments

List tournaments of the given videogame

- HTTP Method: `GET`
- Endpoint: `/videogames/{videogame_id_or_slug}/tournaments`

**Parameters**

| Name              | Type                                                                  | Required | Description                                                                                                                                         |
| :---------------- | :-------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| videogameIdOrSlug | [VideogameIdOrSlug](../models/VideogameIdOrSlug.md)                   | ✅       | A videogame ID or slug                                                                                                                              |
| filter            | [FilterOverShortTournaments](../models/FilterOverShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range             | [RangeOverShortTournaments](../models/RangeOverShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort              | any[]                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search            | [SearchOverShortTournaments](../models/SearchOverShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page              | [Page](../models/Page.md)                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage           | number                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverShortTournaments, OpponentId, OpponentType, Page, PandascoreClient, RangeOverShortTournaments, SearchOverShortTournaments, SearchOverValorantShortTournamentsTier2, VideogameId, VideogameIdOrSlug, VideogameSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameIdOrSlug = VideogameId._1;;
const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

const filterOverShortTournamentsVideogameTitle = 2;

const opponentId = 8;

const opponentType = OpponentType.PLAYER;

const filter: FilterOverShortTournaments = {
  beginAt: ["ullamco magn"],
  detailedStats: true,
  endAt: ["mollit occ"],
  hasBracket: true,
  id: [6],
  liveSupported: true,
  modifiedAt: ["dolor sunt ad e"],
  name: ["dolor quis es"],
  prizepool: ["irure "],
  serieId: [4],
  slug: ["l34"],
  tier: [searchOverValorantShortTournamentsTier2],
  videogameTitle: [filterOverShortTournamentsVideogameTitle],
  winnerId: [opponentId],
  winnerType: [opponentType]
};
const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

const opponentId = 8;

const opponentType = OpponentType.PLAYER;

const range: RangeOverShortTournaments = {
  beginAt: ["non iru"],
  detailedStats: [true],
  endAt: ["e"],
  hasBracket: [true],
  id: [7],
  modifiedAt: ["la"],
  name: ["minim sit"],
  prizepool: ["pariatur id "],
  serieId: [1],
  slug: ["2aqc93"],
  tier: [searchOverValorantShortTournamentsTier2],
  winnerId: [opponentId],
  winnerType: [opponentType]
};
const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

const opponentType = OpponentType.PLAYER;

const search: SearchOverShortTournaments = {
  name: "dolor",
  prizepool: "ullamco",
  slug: "2",
  tier: searchOverValorantShortTournamentsTier2,
  winnerType: opponentType
};
const page = 1;

  const { data } = await pandascoreClient.videogames.getVideogamesVideogameIdOrSlugTournaments(
  ,
  {
		filter: filter,
		range: range,
    sort: [[]],
		search: search,
		page: page,
    perPage: 50,
  }
);

  console.log(data);
})();
```

## get_videogames_videogameIdOrSlug_versions

List available versions for a given videogame

- HTTP Method: `GET`
- Endpoint: `/videogames/{videogame_id_or_slug}/versions`

**Parameters**

| Name              | Type                                                | Required | Description                                                          |
| :---------------- | :-------------------------------------------------- | :------- | :------------------------------------------------------------------- |
| videogameIdOrSlug | [VideogameIdOrSlug](../models/VideogameIdOrSlug.md) | ✅       | A videogame ID or slug                                               |
| page              | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2` |
| perPage           | number                                              | ❌       | Equivalent to `page[size]`                                           |

**Return Type**

`ShortVideogameVersion[]`

**Example Usage Code Snippet**

```typescript
import { Page, PandascoreClient, VideogameId, VideogameIdOrSlug, VideogameSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameIdOrSlug = VideogameId._1;;
const page = 1;

  const { data } = await pandascoreClient.videogames.getVideogamesVideogameIdOrSlugVersions(
  ,
  {
		page: page,
    perPage: 50,
  }
);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
