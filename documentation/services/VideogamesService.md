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
import { PandascoreClient } from 'pandascore_client';

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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameIdOrSlug = VideogameId.1;;

  const { data } = await pandascoreClient.videogames.getVideogamesVideogameIdOrSlug(

);

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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameIdOrSlug = VideogameId.1;;

const filter: FilterOverLeagues = {
  id: [7],
  modifiedAt: ["offici"],
  name: ["ad ut"],
  slug: ["p_"],
  url: ["esse aliqu"]
};

const range: RangeOverLeagues = {
  id: [10],
  modifiedAt: ["ut nulla"],
  name: ["ea mol"],
  slug: ["pmjvmw-84d"],
  url: ["ea aliquip"]
};

const search: SearchOverLeagues = {
  name: "Duis dolo",
  slug: "-teig",
  url: "adipisicing"
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameIdOrSlug = VideogameId.1;;
const filterOverSeriesVideogameTitle = 7;

const opponentId = 5;

const opponentType = OpponentType.Player;

const filter: FilterOverSeries = {
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
const opponentId = 5;

const opponentType = OpponentType.Player;

const range: RangeOverSeries = {
  beginAt: ["sint c"],
  endAt: ["ex dolore tempo"],
  id: [6],
  leagueId: [6],
  modifiedAt: ["lab"],
  name: ["animea labore e"],
  season: ["ipsum i"],
  slug: ["8"],
  winnerId: [opponentId],
  winnerType: [opponentType],
  year: [123]
};
const opponentType = OpponentType.Player;

const search: SearchOverSeries = {
  name: "fugia",
  season: "aute al",
  slug: "cc3u_",
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameIdOrSlug = VideogameId.1;;
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameIdOrSlug = VideogameId.1;;
const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

const filterOverShortTournamentsVideogameTitle = 5;

const opponentId = 5;

const opponentType = OpponentType.Player;

const filter: FilterOverShortTournaments = {
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
const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

const opponentId = 5;

const opponentType = OpponentType.Player;

const range: RangeOverShortTournaments = {
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
  tier: [searchOverValorantShortTournamentsTier2],
  winnerId: [opponentId],
  winnerType: [opponentType]
};
const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

const opponentType = OpponentType.Player;

const search: SearchOverShortTournaments = {
  name: "sunt minim",
  prizepool: "utid magna es",
  slug: "50l9n",
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
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameIdOrSlug = VideogameId.1;;
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
