# SeriesService

A list of all methods in the `SeriesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                 | Description                                        |
| :-------------------------------------------------------------------------------------- | :------------------------------------------------- |
| [get_series](#get_series)                                                               | List series                                        |
| [get_series_past](#get_series_past)                                                     | List past series                                   |
| [get_series_running](#get_series_running)                                               | List currently running series                      |
| [get_series_upcoming](#get_series_upcoming)                                             | List upcoming series                               |
| [get_series_serieIdOrSlug](#get_series_serieidorslug)                                   | Get a single serie by ID or by slug                |
| [get_series_serieIdOrSlug_matches](#get_series_serieidorslug_matches)                   | List matches of the given serie                    |
| [get_series_serieIdOrSlug_matches_past](#get_series_serieidorslug_matches_past)         | List past matches for the given serie              |
| [get_series_serieIdOrSlug_matches_running](#get_series_serieidorslug_matches_running)   | List currently running matches for the given serie |
| [get_series_serieIdOrSlug_matches_upcoming](#get_series_serieidorslug_matches_upcoming) | List upcoming matches for the given serie          |
| [get_series_serieIdOrSlug_tournaments](#get_series_serieidorslug_tournaments)           | List tournaments of the given serie                |

## get_series

List series

- HTTP Method: `GET`
- Endpoint: `/series`

**Parameters**

| Name    | Type                                              | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverSeries](../models/FilterOverSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverSeries](../models/RangeOverSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverSeries](../models/SearchOverSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverSeries,
  SearchOverSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverSeriesVideogameTitle = 8;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverSeries = {
    beginAt: ['el'],
    endAt: ['dolo'],
    id: [10],
    leagueId: [1],
    modifiedAt: ['adipisic'],
    name: ['et qui reprehe'],
    season: ['ea Dui'],
    slug: ['jinn8'],
    videogameTitle: [filterOverSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverSeries = {
    beginAt: ['sun'],
    endAt: ['f'],
    id: [7],
    leagueId: [6],
    modifiedAt: ['cupi'],
    name: ['aliqua in'],
    season: ['Except'],
    slug: ['-'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverSeries = {
    name: 'aliquip eu e',
    season: 'et officia lab',
    slug: 'ai8df',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.series.getSeries({
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

## get_series_past

List past series

- HTTP Method: `GET`
- Endpoint: `/series/past`

**Parameters**

| Name    | Type                                              | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverSeries](../models/FilterOverSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverSeries](../models/RangeOverSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverSeries](../models/SearchOverSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverSeries,
  SearchOverSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverSeriesVideogameTitle = 8;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverSeries = {
    beginAt: ['el'],
    endAt: ['dolo'],
    id: [10],
    leagueId: [1],
    modifiedAt: ['adipisic'],
    name: ['et qui reprehe'],
    season: ['ea Dui'],
    slug: ['jinn8'],
    videogameTitle: [filterOverSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverSeries = {
    beginAt: ['sun'],
    endAt: ['f'],
    id: [7],
    leagueId: [6],
    modifiedAt: ['cupi'],
    name: ['aliqua in'],
    season: ['Except'],
    slug: ['-'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverSeries = {
    name: 'aliquip eu e',
    season: 'et officia lab',
    slug: 'ai8df',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.series.getSeriesPast({
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

## get_series_running

List currently running series

- HTTP Method: `GET`
- Endpoint: `/series/running`

**Parameters**

| Name    | Type                                              | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverSeries](../models/FilterOverSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverSeries](../models/RangeOverSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverSeries](../models/SearchOverSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverSeries,
  SearchOverSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverSeriesVideogameTitle = 8;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverSeries = {
    beginAt: ['el'],
    endAt: ['dolo'],
    id: [10],
    leagueId: [1],
    modifiedAt: ['adipisic'],
    name: ['et qui reprehe'],
    season: ['ea Dui'],
    slug: ['jinn8'],
    videogameTitle: [filterOverSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverSeries = {
    beginAt: ['sun'],
    endAt: ['f'],
    id: [7],
    leagueId: [6],
    modifiedAt: ['cupi'],
    name: ['aliqua in'],
    season: ['Except'],
    slug: ['-'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverSeries = {
    name: 'aliquip eu e',
    season: 'et officia lab',
    slug: 'ai8df',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.series.getSeriesRunning({
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

## get_series_upcoming

List upcoming series

- HTTP Method: `GET`
- Endpoint: `/series/upcoming`

**Parameters**

| Name    | Type                                              | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverSeries](../models/FilterOverSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverSeries](../models/RangeOverSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverSeries](../models/SearchOverSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverSeries,
  OpponentId,
  OpponentType,
  Page,
  PandascoreClient,
  RangeOverSeries,
  SearchOverSeries,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverSeriesVideogameTitle = 8;

  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const filter: FilterOverSeries = {
    beginAt: ['el'],
    endAt: ['dolo'],
    id: [10],
    leagueId: [1],
    modifiedAt: ['adipisic'],
    name: ['et qui reprehe'],
    season: ['ea Dui'],
    slug: ['jinn8'],
    videogameTitle: [filterOverSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 8;

  const opponentType = OpponentType.PLAYER;

  const range: RangeOverSeries = {
    beginAt: ['sun'],
    endAt: ['f'],
    id: [7],
    leagueId: [6],
    modifiedAt: ['cupi'],
    name: ['aliqua in'],
    season: ['Except'],
    slug: ['-'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.PLAYER;

  const search: SearchOverSeries = {
    name: 'aliquip eu e',
    season: 'et officia lab',
    slug: 'ai8df',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascoreClient.series.getSeriesUpcoming({
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

## get_series_serieIdOrSlug

Get a single serie by ID or by slug

- HTTP Method: `GET`
- Endpoint: `/series/{serie_id_or_slug}`

**Parameters**

| Name          | Type                                        | Required | Description        |
| :------------ | :------------------------------------------ | :------- | :----------------- |
| serieIdOrSlug | [SerieIdOrSlug](../models/SerieIdOrSlug.md) | ✅       | A serie ID or slug |

**Return Type**

`Serie`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient, SerieIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const serieIdOrSlug = 8;

  const { data } = await pandascoreClient.series.getSeriesSerieIdOrSlug();

  console.log(data);
})();
```

## get_series_serieIdOrSlug_matches

List matches of the given serie

- HTTP Method: `GET`
- Endpoint: `/series/{serie_id_or_slug}/matches`

**Parameters**

| Name          | Type                                                | Required | Description                                                                                                                                         |
| :------------ | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| serieIdOrSlug | [SerieIdOrSlug](../models/SerieIdOrSlug.md)         | ✅       | A serie ID or slug                                                                                                                                  |
| filter        | [FilterOverMatches](../models/FilterOverMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range         | [RangeOverMatches](../models/RangeOverMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort          | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search        | [SearchOverMatches](../models/SearchOverMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page          | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage       | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverMatches, MatchStatus, MatchType, MatchWinnerType, OpponentId, Page, PandascoreClient, PlayerIdOrSlug, RangeOverMatches, SearchOverMatches, SerieIdOrSlug, TeamIdOrSlug, VideogameIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 8;
const matchType = MatchType.ALLGAMESPLAYED;

const teamIdOrSlug = 10;;

const matchStatus = MatchStatus.CANCELED;

const videogameIdOrSlug = VideogameId._1;;

const filterOverMatchesVideogameTitle = 4;

const filterOverMatchesVideogameVersion = "54.99205.442619";

const opponentId = 8;

const matchWinnerType = MatchWinnerType.PLAYER;

const filter: FilterOverMatches = {
  beginAt: ["ad non"],
  detailedStats: true,
  draw: true,
  endAt: ["repr"],
  finished: true,
  forfeit: true,
  future: true,
  id: [8],
  leagueId: [5],
  matchType: [matchType],
  modifiedAt: ["deser"],
  name: ["in labore t"],
  notStarted: true,
  numberOfGames: [9],
  opponentId: [filterOverMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["quis conse"],
  serieId: [10],
  slug: ["JMIjc H"],
  status: [matchStatus],
  tournamentId: [8],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverMatchesVideogameTitle],
  videogameVersion: [filterOverMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.ALLGAMESPLAYED;

const matchStatus = MatchStatus.CANCELED;

const opponentId = 8;

const matchWinnerType = MatchWinnerType.PLAYER;

const range: RangeOverMatches = {
  beginAt: ["ve"],
  detailedStats: [true],
  draw: [true],
  endAt: ["irure conse"],
  forfeit: [true],
  id: [3],
  matchType: [matchType],
  modifiedAt: ["adipisici"],
  name: ["pariatur m"],
  numberOfGames: [2],
  scheduledAt: ["al"],
  slug: ["on"],
  status: [matchStatus],
  tournamentId: [9],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.ALLGAMESPLAYED;

const matchStatus = MatchStatus.CANCELED;

const matchWinnerType = MatchWinnerType.PLAYER;

const search: SearchOverMatches = {
  matchType: matchType,
  name: "Duis fug",
  slug: "7jRFdQQ",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.series.getSeriesSerieIdOrSlugMatches(
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

## get_series_serieIdOrSlug_matches_past

List past matches for the given serie

- HTTP Method: `GET`
- Endpoint: `/series/{serie_id_or_slug}/matches/past`

**Parameters**

| Name          | Type                                                | Required | Description                                                                                                                                         |
| :------------ | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| serieIdOrSlug | [SerieIdOrSlug](../models/SerieIdOrSlug.md)         | ✅       | A serie ID or slug                                                                                                                                  |
| filter        | [FilterOverMatches](../models/FilterOverMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range         | [RangeOverMatches](../models/RangeOverMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort          | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search        | [SearchOverMatches](../models/SearchOverMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page          | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage       | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverMatches, MatchStatus, MatchType, MatchWinnerType, OpponentId, Page, PandascoreClient, PlayerIdOrSlug, RangeOverMatches, SearchOverMatches, SerieIdOrSlug, TeamIdOrSlug, VideogameIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 8;
const matchType = MatchType.ALLGAMESPLAYED;

const teamIdOrSlug = 10;;

const matchStatus = MatchStatus.CANCELED;

const videogameIdOrSlug = VideogameId._1;;

const filterOverMatchesVideogameTitle = 4;

const filterOverMatchesVideogameVersion = "54.99205.442619";

const opponentId = 8;

const matchWinnerType = MatchWinnerType.PLAYER;

const filter: FilterOverMatches = {
  beginAt: ["ad non"],
  detailedStats: true,
  draw: true,
  endAt: ["repr"],
  finished: true,
  forfeit: true,
  future: true,
  id: [8],
  leagueId: [5],
  matchType: [matchType],
  modifiedAt: ["deser"],
  name: ["in labore t"],
  notStarted: true,
  numberOfGames: [9],
  opponentId: [filterOverMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["quis conse"],
  serieId: [10],
  slug: ["JMIjc H"],
  status: [matchStatus],
  tournamentId: [8],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverMatchesVideogameTitle],
  videogameVersion: [filterOverMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.ALLGAMESPLAYED;

const matchStatus = MatchStatus.CANCELED;

const opponentId = 8;

const matchWinnerType = MatchWinnerType.PLAYER;

const range: RangeOverMatches = {
  beginAt: ["ve"],
  detailedStats: [true],
  draw: [true],
  endAt: ["irure conse"],
  forfeit: [true],
  id: [3],
  matchType: [matchType],
  modifiedAt: ["adipisici"],
  name: ["pariatur m"],
  numberOfGames: [2],
  scheduledAt: ["al"],
  slug: ["on"],
  status: [matchStatus],
  tournamentId: [9],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.ALLGAMESPLAYED;

const matchStatus = MatchStatus.CANCELED;

const matchWinnerType = MatchWinnerType.PLAYER;

const search: SearchOverMatches = {
  matchType: matchType,
  name: "Duis fug",
  slug: "7jRFdQQ",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.series.getSeriesSerieIdOrSlugMatchesPast(
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

## get_series_serieIdOrSlug_matches_running

List currently running matches for the given serie

- HTTP Method: `GET`
- Endpoint: `/series/{serie_id_or_slug}/matches/running`

**Parameters**

| Name          | Type                                                | Required | Description                                                                                                                                         |
| :------------ | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| serieIdOrSlug | [SerieIdOrSlug](../models/SerieIdOrSlug.md)         | ✅       | A serie ID or slug                                                                                                                                  |
| filter        | [FilterOverMatches](../models/FilterOverMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range         | [RangeOverMatches](../models/RangeOverMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort          | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search        | [SearchOverMatches](../models/SearchOverMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page          | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage       | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverMatches, MatchStatus, MatchType, MatchWinnerType, OpponentId, Page, PandascoreClient, PlayerIdOrSlug, RangeOverMatches, SearchOverMatches, SerieIdOrSlug, TeamIdOrSlug, VideogameIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 8;
const matchType = MatchType.ALLGAMESPLAYED;

const teamIdOrSlug = 10;;

const matchStatus = MatchStatus.CANCELED;

const videogameIdOrSlug = VideogameId._1;;

const filterOverMatchesVideogameTitle = 4;

const filterOverMatchesVideogameVersion = "54.99205.442619";

const opponentId = 8;

const matchWinnerType = MatchWinnerType.PLAYER;

const filter: FilterOverMatches = {
  beginAt: ["ad non"],
  detailedStats: true,
  draw: true,
  endAt: ["repr"],
  finished: true,
  forfeit: true,
  future: true,
  id: [8],
  leagueId: [5],
  matchType: [matchType],
  modifiedAt: ["deser"],
  name: ["in labore t"],
  notStarted: true,
  numberOfGames: [9],
  opponentId: [filterOverMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["quis conse"],
  serieId: [10],
  slug: ["JMIjc H"],
  status: [matchStatus],
  tournamentId: [8],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverMatchesVideogameTitle],
  videogameVersion: [filterOverMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.ALLGAMESPLAYED;

const matchStatus = MatchStatus.CANCELED;

const opponentId = 8;

const matchWinnerType = MatchWinnerType.PLAYER;

const range: RangeOverMatches = {
  beginAt: ["ve"],
  detailedStats: [true],
  draw: [true],
  endAt: ["irure conse"],
  forfeit: [true],
  id: [3],
  matchType: [matchType],
  modifiedAt: ["adipisici"],
  name: ["pariatur m"],
  numberOfGames: [2],
  scheduledAt: ["al"],
  slug: ["on"],
  status: [matchStatus],
  tournamentId: [9],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.ALLGAMESPLAYED;

const matchStatus = MatchStatus.CANCELED;

const matchWinnerType = MatchWinnerType.PLAYER;

const search: SearchOverMatches = {
  matchType: matchType,
  name: "Duis fug",
  slug: "7jRFdQQ",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.series.getSeriesSerieIdOrSlugMatchesRunning(
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

## get_series_serieIdOrSlug_matches_upcoming

List upcoming matches for the given serie

- HTTP Method: `GET`
- Endpoint: `/series/{serie_id_or_slug}/matches/upcoming`

**Parameters**

| Name          | Type                                                | Required | Description                                                                                                                                         |
| :------------ | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| serieIdOrSlug | [SerieIdOrSlug](../models/SerieIdOrSlug.md)         | ✅       | A serie ID or slug                                                                                                                                  |
| filter        | [FilterOverMatches](../models/FilterOverMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range         | [RangeOverMatches](../models/RangeOverMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort          | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search        | [SearchOverMatches](../models/SearchOverMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page          | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage       | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverMatches, MatchStatus, MatchType, MatchWinnerType, OpponentId, Page, PandascoreClient, PlayerIdOrSlug, RangeOverMatches, SearchOverMatches, SerieIdOrSlug, TeamIdOrSlug, VideogameIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 8;
const matchType = MatchType.ALLGAMESPLAYED;

const teamIdOrSlug = 10;;

const matchStatus = MatchStatus.CANCELED;

const videogameIdOrSlug = VideogameId._1;;

const filterOverMatchesVideogameTitle = 4;

const filterOverMatchesVideogameVersion = "54.99205.442619";

const opponentId = 8;

const matchWinnerType = MatchWinnerType.PLAYER;

const filter: FilterOverMatches = {
  beginAt: ["ad non"],
  detailedStats: true,
  draw: true,
  endAt: ["repr"],
  finished: true,
  forfeit: true,
  future: true,
  id: [8],
  leagueId: [5],
  matchType: [matchType],
  modifiedAt: ["deser"],
  name: ["in labore t"],
  notStarted: true,
  numberOfGames: [9],
  opponentId: [filterOverMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["quis conse"],
  serieId: [10],
  slug: ["JMIjc H"],
  status: [matchStatus],
  tournamentId: [8],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverMatchesVideogameTitle],
  videogameVersion: [filterOverMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.ALLGAMESPLAYED;

const matchStatus = MatchStatus.CANCELED;

const opponentId = 8;

const matchWinnerType = MatchWinnerType.PLAYER;

const range: RangeOverMatches = {
  beginAt: ["ve"],
  detailedStats: [true],
  draw: [true],
  endAt: ["irure conse"],
  forfeit: [true],
  id: [3],
  matchType: [matchType],
  modifiedAt: ["adipisici"],
  name: ["pariatur m"],
  numberOfGames: [2],
  scheduledAt: ["al"],
  slug: ["on"],
  status: [matchStatus],
  tournamentId: [9],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.ALLGAMESPLAYED;

const matchStatus = MatchStatus.CANCELED;

const matchWinnerType = MatchWinnerType.PLAYER;

const search: SearchOverMatches = {
  matchType: matchType,
  name: "Duis fug",
  slug: "7jRFdQQ",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascoreClient.series.getSeriesSerieIdOrSlugMatchesUpcoming(
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

## get_series_serieIdOrSlug_tournaments

List tournaments of the given serie

- HTTP Method: `GET`
- Endpoint: `/series/{serie_id_or_slug}/tournaments`

**Parameters**

| Name          | Type                                                                  | Required | Description                                                                                                                                         |
| :------------ | :-------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| serieIdOrSlug | [SerieIdOrSlug](../models/SerieIdOrSlug.md)                           | ✅       | A serie ID or slug                                                                                                                                  |
| filter        | [FilterOverShortTournaments](../models/FilterOverShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range         | [RangeOverShortTournaments](../models/RangeOverShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort          | any[]                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search        | [SearchOverShortTournaments](../models/SearchOverShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page          | [Page](../models/Page.md)                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage       | number                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverShortTournaments, OpponentId, OpponentType, Page, PandascoreClient, RangeOverShortTournaments, SearchOverShortTournaments, SearchOverValorantShortTournamentsTier2, SerieIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 8;
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

  const { data } = await pandascoreClient.series.getSeriesSerieIdOrSlugTournaments(
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

<!-- This file was generated by liblab | https://liblab.com/ -->
