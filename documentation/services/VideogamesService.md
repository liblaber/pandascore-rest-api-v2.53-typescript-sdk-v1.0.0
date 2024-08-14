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

  const videogameId = VideogameId._1;

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

  const videogameId = VideogameId._1;;

const filterOverLeagues: FilterOverLeagues = {
  id: [7],
  modifiedAt: ["offici"],
  name: ["ad ut"],
  slug: ["p_"],
  url: ["esse aliqu"]
};

const rangeOverLeagues: RangeOverLeagues = {
  id: [10],
  modifiedAt: ["ut nulla"],
  name: ["ea mol"],
  slug: ["pmjvmw-84d"],
  url: ["ea aliquip"]
};

const searchOverLeagues: SearchOverLeagues = {
  name: "Duis dolo",
  slug: "-teig",
  url: "adipisicing"
};
const page = 1;

  const { data } = await pandascoreClient.videogames.getVideogamesVideogameIdOrSlugLeagues(
  ,
  {
		filter: filterOverLeagues,
		range: rangeOverLeagues,
    sort: [[]],
		search: searchOverLeagues,
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
import { FilterOverSeries, OpponentType, Page, PandascoreClient, RangeOverSeries, SearchOverSeries, VideogameId, VideogameIdOrSlug, VideogameSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId._1;;
const filterOverSeriesVideogameTitle = 7;

const opponentId = 7;

const opponentType = OpponentType.PLAYER;

const filterOverSeries: FilterOverSeries = {
  beginAt: ["sunt cillum dol"],
  endAt: ["dolor"],
  id: [5],
  leagueId: [7],
  modifiedAt: ["deserunt"],
  name: ["laboris"],
  season: ["proident"],
  slug: ["_9"],
  videogameTitle: [filterOverSeriesVideogameTitle],
  winnerId: [opponentId],
  winnerType: [opponentType],
  year: [123]
};
const opponentId1 = 7;

const opponentType1 = OpponentType.PLAYER;

const rangeOverSeries: RangeOverSeries = {
  beginAt: ["sint c"],
  endAt: ["ex dolore tempo"],
  id: [6],
  leagueId: [6],
  modifiedAt: ["lab"],
  name: ["animea labore e"],
  season: ["ipsum i"],
  slug: ["8"],
  winnerId: [opponentId1],
  winnerType: [opponentType1],
  year: [123]
};
const opponentType12 = OpponentType.PLAYER;

const searchOverSeries: SearchOverSeries = {
  name: "fugia",
  season: "aute al",
  slug: "cc3u_",
  winnerType: opponentType12
};
const page = 1;

  const { data } = await pandascoreClient.videogames.getVideogamesVideogameIdOrSlugSeries(
  ,
  {
		filter: filterOverSeries,
		range: rangeOverSeries,
    sort: [[]],
		search: searchOverSeries,
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

  const videogameId = VideogameId._1;;
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
import { FilterOverShortTournaments, OpponentType, Page, PandascoreClient, RangeOverShortTournaments, SearchOverShortTournaments, SearchOverValorantShortTournamentsTier2, VideogameId, VideogameIdOrSlug, VideogameSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId._1;;
const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.A;

const filterOverShortTournamentsVideogameTitle = 5;

const opponentId = 7;

const opponentType = OpponentType.PLAYER;

const filterOverShortTournaments: FilterOverShortTournaments = {
  beginAt: ["pariat"],
  detailedStats: true,
  endAt: ["eli"],
  hasBracket: true,
  id: [4],
  liveSupported: true,
  modifiedAt: ["cillu"],
  name: ["Excepteur do"],
  prizepool: ["in ut veniam "],
  serieId: [10],
  slug: ["z160_"],
  tier: [searchOverValorantShortTournamentsTier2],
  videogameTitle: [filterOverShortTournamentsVideogameTitle],
  winnerId: [opponentId],
  winnerType: [opponentType]
};
const searchOverValorantShortTournamentsTier21 = SearchOverValorantShortTournamentsTier2.A;

const opponentId1 = 7;

const opponentType1 = OpponentType.PLAYER;

const rangeOverShortTournaments: RangeOverShortTournaments = {
  beginAt: ["et"],
  detailedStats: [true],
  endAt: ["commo"],
  hasBracket: [true],
  id: [1],
  modifiedAt: ["nul"],
  name: ["enim "],
  prizepool: ["qui ull"],
  serieId: [3],
  slug: ["vyokv"],
  tier: [searchOverValorantShortTournamentsTier21],
  winnerId: [opponentId1],
  winnerType: [opponentType1]
};
const searchOverValorantShortTournamentsTier212 = SearchOverValorantShortTournamentsTier2.A;

const opponentType12 = OpponentType.PLAYER;

const searchOverShortTournaments: SearchOverShortTournaments = {
  name: "sunt minim",
  prizepool: "utid magna es",
  slug: "50l9n",
  tier: searchOverValorantShortTournamentsTier212,
  winnerType: opponentType12
};
const page = 1;

  const { data } = await pandascoreClient.videogames.getVideogamesVideogameIdOrSlugTournaments(
  ,
  {
		filter: filterOverShortTournaments,
		range: rangeOverShortTournaments,
    sort: [[]],
		search: searchOverShortTournaments,
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

  const videogameId = VideogameId._1;;
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
