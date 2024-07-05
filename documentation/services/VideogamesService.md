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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const page = 1;

  const { data } = await pandascore.videogames.getVideogames({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameIdOrSlug = VideogameId.1;;

  const { data } = await pandascore.videogames.getVideogamesVideogameIdOrSlug(

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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameIdOrSlug = VideogameId.1;;

const filter: FilterOverLeagues = {
  id: [2],
  modifiedAt: ["Ut nulla"],
  name: ["occaecat"],
  slug: ["sxxnqfey"],
  url: ["enim "]
};

const range: RangeOverLeagues = {
  id: [9],
  modifiedAt: ["sit "],
  name: ["fugiat ad ess"],
  slug: ["igqrjjpf"],
  url: ["qui fugi"]
};

const search: SearchOverLeagues = {
  name: "aliquip",
  slug: "_k",
  url: "consectetur ali"
};
const page = 1;

  const { data } = await pandascore.videogames.getVideogamesVideogameIdOrSlugLeagues(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameIdOrSlug = VideogameId.1;;
const filterOverSeriesVideogameTitle = 7;

const opponentId = 1;

const opponentType = OpponentType.Player;

const filter: FilterOverSeries = {
  beginAt: ["eiu"],
  endAt: ["id "],
  id: [2],
  leagueId: [9],
  modifiedAt: ["volu"],
  name: ["anim cupidatat"],
  season: ["tempo"],
  slug: ["7rwm242"],
  videogameTitle: [filterOverSeriesVideogameTitle],
  winnerId: [opponentId],
  winnerType: [opponentType],
  year: [123]
};
const opponentId = 1;

const opponentType = OpponentType.Player;

const range: RangeOverSeries = {
  beginAt: ["occaecat dolo"],
  endAt: ["Lorem sint eu"],
  id: [3],
  leagueId: [4],
  modifiedAt: ["magna dol"],
  name: ["ex cons"],
  season: ["suntvol"],
  slug: ["juad79hfqv5"],
  winnerId: [opponentId],
  winnerType: [opponentType],
  year: [123]
};
const opponentType = OpponentType.Player;

const search: SearchOverSeries = {
  name: "culpa vel",
  season: "magna ad in Ut",
  slug: "9v4l",
  winnerType: opponentType
};
const page = 1;

  const { data } = await pandascore.videogames.getVideogamesVideogameIdOrSlugSeries(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameIdOrSlug = VideogameId.1;;
const page = 1;

  const { data } = await pandascore.videogames.getVideogamesVideogameIdOrSlugTitles(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameIdOrSlug = VideogameId.1;;
const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

const filterOverShortTournamentsVideogameTitle = 2;

const opponentId = 1;

const opponentType = OpponentType.Player;

const filter: FilterOverShortTournaments = {
  beginAt: ["reprehe"],
  detailedStats: true,
  endAt: ["eu i"],
  hasBracket: true,
  id: [1],
  liveSupported: true,
  modifiedAt: ["reprehender"],
  name: ["exeu occaec"],
  prizepool: ["incididunt dolo"],
  serieId: [7],
  slug: ["1jet3"],
  tier: [searchOverValorantShortTournamentsTier2],
  videogameTitle: [filterOverShortTournamentsVideogameTitle],
  winnerId: [opponentId],
  winnerType: [opponentType]
};
const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

const opponentId = 1;

const opponentType = OpponentType.Player;

const range: RangeOverShortTournaments = {
  beginAt: ["ullamco ut "],
  detailedStats: [true],
  endAt: ["occaecat"],
  hasBracket: [true],
  id: [1],
  modifiedAt: ["et occaecat"],
  name: ["ad veniam"],
  prizepool: ["Duisdo Ut ea "],
  serieId: [4],
  slug: ["5ucx7"],
  tier: [searchOverValorantShortTournamentsTier2],
  winnerId: [opponentId],
  winnerType: [opponentType]
};
const searchOverValorantShortTournamentsTier2 = SearchOverValorantShortTournamentsTier2.a;

const opponentType = OpponentType.Player;

const search: SearchOverShortTournaments = {
  name: "officia f",
  prizepool: "Duis ",
  slug: "803",
  tier: searchOverValorantShortTournamentsTier2,
  winnerType: opponentType
};
const page = 1;

  const { data } = await pandascore.videogames.getVideogamesVideogameIdOrSlugTournaments(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameIdOrSlug = VideogameId.1;;
const page = 1;

  const { data } = await pandascore.videogames.getVideogamesVideogameIdOrSlugVersions(
  ,
  {
		page: page,
    perPage: 50,
  }
);

  console.log(data);
})();
```
