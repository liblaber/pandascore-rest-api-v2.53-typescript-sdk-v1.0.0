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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverSeriesVideogameTitle = 7;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverSeries = {
    beginAt: ['eiu'],
    endAt: ['id '],
    id: [2],
    leagueId: [9],
    modifiedAt: ['volu'],
    name: ['anim cupidatat'],
    season: ['tempo'],
    slug: ['7rwm242'],
    videogameTitle: [filterOverSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverSeries = {
    beginAt: ['occaecat dolo'],
    endAt: ['Lorem sint eu'],
    id: [3],
    leagueId: [4],
    modifiedAt: ['magna dol'],
    name: ['ex cons'],
    season: ['suntvol'],
    slug: ['juad79hfqv5'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverSeries = {
    name: 'culpa vel',
    season: 'magna ad in Ut',
    slug: '9v4l',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.series.getSeries({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverSeriesVideogameTitle = 7;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverSeries = {
    beginAt: ['eiu'],
    endAt: ['id '],
    id: [2],
    leagueId: [9],
    modifiedAt: ['volu'],
    name: ['anim cupidatat'],
    season: ['tempo'],
    slug: ['7rwm242'],
    videogameTitle: [filterOverSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverSeries = {
    beginAt: ['occaecat dolo'],
    endAt: ['Lorem sint eu'],
    id: [3],
    leagueId: [4],
    modifiedAt: ['magna dol'],
    name: ['ex cons'],
    season: ['suntvol'],
    slug: ['juad79hfqv5'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverSeries = {
    name: 'culpa vel',
    season: 'magna ad in Ut',
    slug: '9v4l',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.series.getSeriesPast({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverSeriesVideogameTitle = 7;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverSeries = {
    beginAt: ['eiu'],
    endAt: ['id '],
    id: [2],
    leagueId: [9],
    modifiedAt: ['volu'],
    name: ['anim cupidatat'],
    season: ['tempo'],
    slug: ['7rwm242'],
    videogameTitle: [filterOverSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverSeries = {
    beginAt: ['occaecat dolo'],
    endAt: ['Lorem sint eu'],
    id: [3],
    leagueId: [4],
    modifiedAt: ['magna dol'],
    name: ['ex cons'],
    season: ['suntvol'],
    slug: ['juad79hfqv5'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverSeries = {
    name: 'culpa vel',
    season: 'magna ad in Ut',
    slug: '9v4l',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.series.getSeriesRunning({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filterOverSeriesVideogameTitle = 7;

  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const filter: FilterOverSeries = {
    beginAt: ['eiu'],
    endAt: ['id '],
    id: [2],
    leagueId: [9],
    modifiedAt: ['volu'],
    name: ['anim cupidatat'],
    season: ['tempo'],
    slug: ['7rwm242'],
    videogameTitle: [filterOverSeriesVideogameTitle],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentId = 1;

  const opponentType = OpponentType.Player;

  const range: RangeOverSeries = {
    beginAt: ['occaecat dolo'],
    endAt: ['Lorem sint eu'],
    id: [3],
    leagueId: [4],
    modifiedAt: ['magna dol'],
    name: ['ex cons'],
    season: ['suntvol'],
    slug: ['juad79hfqv5'],
    winnerId: [opponentId],
    winnerType: [opponentType],
    year: [123],
  };
  const opponentType = OpponentType.Player;

  const search: SearchOverSeries = {
    name: 'culpa vel',
    season: 'magna ad in Ut',
    slug: '9v4l',
    winnerType: opponentType,
  };
  const page = 1;

  const { data } = await pandascore.series.getSeriesUpcoming({
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const serieIdOrSlug = 10;

  const { data } = await pandascore.series.getSeriesSerieIdOrSlug();

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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 10;
const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverMatchesVideogameTitle = 6;

const filterOverMatchesVideogameVersion = "657764.975739.16948626";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverMatches = {
  beginAt: ["dolor"],
  detailedStats: true,
  draw: true,
  endAt: ["Ut do ullamco"],
  finished: true,
  forfeit: true,
  future: true,
  id: [4],
  leagueId: [8],
  matchType: [matchType],
  modifiedAt: ["con"],
  name: ["mollit conseq"],
  notStarted: true,
  numberOfGames: [10],
  opponentId: [filterOverMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["sint"],
  serieId: [9],
  slug: ["BfunCxm5-40"],
  status: [matchStatus],
  tournamentId: [3],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverMatchesVideogameTitle],
  videogameVersion: [filterOverMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverMatches = {
  beginAt: ["dolore dolor e"],
  detailedStats: [true],
  draw: [true],
  endAt: ["eiusmo"],
  forfeit: [true],
  id: [2],
  matchType: [matchType],
  modifiedAt: ["sint venia"],
  name: ["labore sunt"],
  numberOfGames: [4],
  scheduledAt: ["occaecat n"],
  slug: ["FlKZ"],
  status: [matchStatus],
  tournamentId: [1],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverMatches = {
  matchType: matchType,
  name: "ut fugiat e",
  slug: "grZ8U",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.series.getSeriesSerieIdOrSlugMatches(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 10;
const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverMatchesVideogameTitle = 6;

const filterOverMatchesVideogameVersion = "657764.975739.16948626";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverMatches = {
  beginAt: ["dolor"],
  detailedStats: true,
  draw: true,
  endAt: ["Ut do ullamco"],
  finished: true,
  forfeit: true,
  future: true,
  id: [4],
  leagueId: [8],
  matchType: [matchType],
  modifiedAt: ["con"],
  name: ["mollit conseq"],
  notStarted: true,
  numberOfGames: [10],
  opponentId: [filterOverMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["sint"],
  serieId: [9],
  slug: ["BfunCxm5-40"],
  status: [matchStatus],
  tournamentId: [3],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverMatchesVideogameTitle],
  videogameVersion: [filterOverMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverMatches = {
  beginAt: ["dolore dolor e"],
  detailedStats: [true],
  draw: [true],
  endAt: ["eiusmo"],
  forfeit: [true],
  id: [2],
  matchType: [matchType],
  modifiedAt: ["sint venia"],
  name: ["labore sunt"],
  numberOfGames: [4],
  scheduledAt: ["occaecat n"],
  slug: ["FlKZ"],
  status: [matchStatus],
  tournamentId: [1],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverMatches = {
  matchType: matchType,
  name: "ut fugiat e",
  slug: "grZ8U",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.series.getSeriesSerieIdOrSlugMatchesPast(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 10;
const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverMatchesVideogameTitle = 6;

const filterOverMatchesVideogameVersion = "657764.975739.16948626";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverMatches = {
  beginAt: ["dolor"],
  detailedStats: true,
  draw: true,
  endAt: ["Ut do ullamco"],
  finished: true,
  forfeit: true,
  future: true,
  id: [4],
  leagueId: [8],
  matchType: [matchType],
  modifiedAt: ["con"],
  name: ["mollit conseq"],
  notStarted: true,
  numberOfGames: [10],
  opponentId: [filterOverMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["sint"],
  serieId: [9],
  slug: ["BfunCxm5-40"],
  status: [matchStatus],
  tournamentId: [3],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverMatchesVideogameTitle],
  videogameVersion: [filterOverMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverMatches = {
  beginAt: ["dolore dolor e"],
  detailedStats: [true],
  draw: [true],
  endAt: ["eiusmo"],
  forfeit: [true],
  id: [2],
  matchType: [matchType],
  modifiedAt: ["sint venia"],
  name: ["labore sunt"],
  numberOfGames: [4],
  scheduledAt: ["occaecat n"],
  slug: ["FlKZ"],
  status: [matchStatus],
  tournamentId: [1],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverMatches = {
  matchType: matchType,
  name: "ut fugiat e",
  slug: "grZ8U",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.series.getSeriesSerieIdOrSlugMatchesRunning(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 10;
const matchType = MatchType.all_games_played;

const teamIdOrSlug = 3;;

const matchStatus = MatchStatus.canceled;

const videogameIdOrSlug = VideogameId.1;;

const filterOverMatchesVideogameTitle = 6;

const filterOverMatchesVideogameVersion = "657764.975739.16948626";

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const filter: FilterOverMatches = {
  beginAt: ["dolor"],
  detailedStats: true,
  draw: true,
  endAt: ["Ut do ullamco"],
  finished: true,
  forfeit: true,
  future: true,
  id: [4],
  leagueId: [8],
  matchType: [matchType],
  modifiedAt: ["con"],
  name: ["mollit conseq"],
  notStarted: true,
  numberOfGames: [10],
  opponentId: [filterOverMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["sint"],
  serieId: [9],
  slug: ["BfunCxm5-40"],
  status: [matchStatus],
  tournamentId: [3],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverMatchesVideogameTitle],
  videogameVersion: [filterOverMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const opponentId = 1;

const matchWinnerType = MatchWinnerType.Player;

const range: RangeOverMatches = {
  beginAt: ["dolore dolor e"],
  detailedStats: [true],
  draw: [true],
  endAt: ["eiusmo"],
  forfeit: [true],
  id: [2],
  matchType: [matchType],
  modifiedAt: ["sint venia"],
  name: ["labore sunt"],
  numberOfGames: [4],
  scheduledAt: ["occaecat n"],
  slug: ["FlKZ"],
  status: [matchStatus],
  tournamentId: [1],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType = MatchType.all_games_played;

const matchStatus = MatchStatus.canceled;

const matchWinnerType = MatchWinnerType.Player;

const search: SearchOverMatches = {
  matchType: matchType,
  name: "ut fugiat e",
  slug: "grZ8U",
  status: matchStatus,
  winnerType: matchWinnerType
};
const page = 1;

  const { data } = await pandascore.series.getSeriesSerieIdOrSlugMatchesUpcoming(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 10;
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

  const { data } = await pandascore.series.getSeriesSerieIdOrSlugTournaments(
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
