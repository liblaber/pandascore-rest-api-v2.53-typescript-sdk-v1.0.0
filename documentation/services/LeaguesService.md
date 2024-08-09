# LeaguesService

A list of all methods in the `LeaguesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                     | Description                                         |
| :------------------------------------------------------------------------------------------ | :-------------------------------------------------- |
| [get_leagues](#get_leagues)                                                                 | List leagues                                        |
| [get_leagues_leagueIdOrSlug](#get_leagues_leagueidorslug)                                   | Get a single league by ID or by slug                |
| [get_leagues_leagueIdOrSlug_matches](#get_leagues_leagueidorslug_matches)                   | List matches of the given league                    |
| [get_leagues_leagueIdOrSlug_matches_past](#get_leagues_leagueidorslug_matches_past)         | List past matches for the given league              |
| [get_leagues_leagueIdOrSlug_matches_running](#get_leagues_leagueidorslug_matches_running)   | List currently running matches for the given league |
| [get_leagues_leagueIdOrSlug_matches_upcoming](#get_leagues_leagueidorslug_matches_upcoming) | List upcoming matches for the given league          |
| [get_leagues_leagueIdOrSlug_series](#get_leagues_leagueidorslug_series)                     | List series for the given league                    |
| [get_leagues_leagueIdOrSlug_tournaments](#get_leagues_leagueidorslug_tournaments)           | List tournaments of the given league                |

## get_leagues

List leagues

- HTTP Method: `GET`
- Endpoint: `/leagues`

**Parameters**

| Name    | Type                                                | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLeagues](../models/FilterOverLeagues.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLeagues](../models/RangeOverLeagues.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLeagues](../models/SearchOverLeagues.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`League[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverLeagues, Page, PandascoreClient, RangeOverLeagues, SearchOverLeagues } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverLeagues = {
    id: [1],
    modifiedAt: ['culpa Except'],
    name: ['id sint adipi'],
    slug: ['fsqr'],
    url: ['fugiat quis'],
  };

  const range: RangeOverLeagues = {
    id: [5],
    modifiedAt: ['eius'],
    name: ['amet pariatur '],
    slug: ['qbz8gy'],
    url: ['amet m'],
  };

  const search: SearchOverLeagues = {
    name: 'enim minim et',
    slug: '2wv',
    url: 'sit es',
  };
  const page = 1;

  const { data } = await pandascoreClient.leagues.getLeagues({
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

## get_leagues_leagueIdOrSlug

Get a single league by ID or by slug

- HTTP Method: `GET`
- Endpoint: `/leagues/{league_id_or_slug}`

**Parameters**

| Name           | Type                                          | Required | Description         |
| :------------- | :-------------------------------------------- | :------- | :------------------ |
| leagueIdOrSlug | [LeagueIdOrSlug](../models/LeagueIdOrSlug.md) | ✅       | A league ID or slug |

**Return Type**

`League`

**Example Usage Code Snippet**

```typescript
import { LeagueIdOrSlug, PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const leagueIdOrSlug = 1;

  const { data } = await pandascoreClient.leagues.getLeaguesLeagueIdOrSlug();

  console.log(data);
})();
```

## get_leagues_leagueIdOrSlug_matches

List matches of the given league

- HTTP Method: `GET`
- Endpoint: `/leagues/{league_id_or_slug}/matches`

**Parameters**

| Name           | Type                                                | Required | Description                                                                                                                                         |
| :------------- | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| leagueIdOrSlug | [LeagueIdOrSlug](../models/LeagueIdOrSlug.md)       | ✅       | A league ID or slug                                                                                                                                 |
| filter         | [FilterOverMatches](../models/FilterOverMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range          | [RangeOverMatches](../models/RangeOverMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort           | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search         | [SearchOverMatches](../models/SearchOverMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page           | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage        | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverMatches, LeagueIdOrSlug, MatchStatus, MatchType, MatchWinnerType, OpponentId, Page, PandascoreClient, PlayerIdOrSlug, RangeOverMatches, SearchOverMatches, TeamIdOrSlug, VideogameIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const leagueIdOrSlug = 1;
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

  const { data } = await pandascoreClient.leagues.getLeaguesLeagueIdOrSlugMatches(
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

## get_leagues_leagueIdOrSlug_matches_past

List past matches for the given league

- HTTP Method: `GET`
- Endpoint: `/leagues/{league_id_or_slug}/matches/past`

**Parameters**

| Name           | Type                                                | Required | Description                                                                                                                                         |
| :------------- | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| leagueIdOrSlug | [LeagueIdOrSlug](../models/LeagueIdOrSlug.md)       | ✅       | A league ID or slug                                                                                                                                 |
| filter         | [FilterOverMatches](../models/FilterOverMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range          | [RangeOverMatches](../models/RangeOverMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort           | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search         | [SearchOverMatches](../models/SearchOverMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page           | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage        | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverMatches, LeagueIdOrSlug, MatchStatus, MatchType, MatchWinnerType, OpponentId, Page, PandascoreClient, PlayerIdOrSlug, RangeOverMatches, SearchOverMatches, TeamIdOrSlug, VideogameIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const leagueIdOrSlug = 1;
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

  const { data } = await pandascoreClient.leagues.getLeaguesLeagueIdOrSlugMatchesPast(
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

## get_leagues_leagueIdOrSlug_matches_running

List currently running matches for the given league

- HTTP Method: `GET`
- Endpoint: `/leagues/{league_id_or_slug}/matches/running`

**Parameters**

| Name           | Type                                                | Required | Description                                                                                                                                         |
| :------------- | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| leagueIdOrSlug | [LeagueIdOrSlug](../models/LeagueIdOrSlug.md)       | ✅       | A league ID or slug                                                                                                                                 |
| filter         | [FilterOverMatches](../models/FilterOverMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range          | [RangeOverMatches](../models/RangeOverMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort           | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search         | [SearchOverMatches](../models/SearchOverMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page           | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage        | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverMatches, LeagueIdOrSlug, MatchStatus, MatchType, MatchWinnerType, OpponentId, Page, PandascoreClient, PlayerIdOrSlug, RangeOverMatches, SearchOverMatches, TeamIdOrSlug, VideogameIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const leagueIdOrSlug = 1;
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

  const { data } = await pandascoreClient.leagues.getLeaguesLeagueIdOrSlugMatchesRunning(
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

## get_leagues_leagueIdOrSlug_matches_upcoming

List upcoming matches for the given league

- HTTP Method: `GET`
- Endpoint: `/leagues/{league_id_or_slug}/matches/upcoming`

**Parameters**

| Name           | Type                                                | Required | Description                                                                                                                                         |
| :------------- | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| leagueIdOrSlug | [LeagueIdOrSlug](../models/LeagueIdOrSlug.md)       | ✅       | A league ID or slug                                                                                                                                 |
| filter         | [FilterOverMatches](../models/FilterOverMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range          | [RangeOverMatches](../models/RangeOverMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort           | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search         | [SearchOverMatches](../models/SearchOverMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page           | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage        | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverMatches, LeagueIdOrSlug, MatchStatus, MatchType, MatchWinnerType, OpponentId, Page, PandascoreClient, PlayerIdOrSlug, RangeOverMatches, SearchOverMatches, TeamIdOrSlug, VideogameIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const leagueIdOrSlug = 1;
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

  const { data } = await pandascoreClient.leagues.getLeaguesLeagueIdOrSlugMatchesUpcoming(
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

## get_leagues_leagueIdOrSlug_series

List series for the given league

- HTTP Method: `GET`
- Endpoint: `/leagues/{league_id_or_slug}/series`

**Parameters**

| Name           | Type                                              | Required | Description                                                                                                                                         |
| :------------- | :------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| leagueIdOrSlug | [LeagueIdOrSlug](../models/LeagueIdOrSlug.md)     | ✅       | A league ID or slug                                                                                                                                 |
| filter         | [FilterOverSeries](../models/FilterOverSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range          | [RangeOverSeries](../models/RangeOverSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort           | any[]                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search         | [SearchOverSeries](../models/SearchOverSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page           | [Page](../models/Page.md)                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage        | number                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverSeries, LeagueIdOrSlug, OpponentId, OpponentType, Page, PandascoreClient, RangeOverSeries, SearchOverSeries } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const leagueIdOrSlug = 1;
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

  const { data } = await pandascoreClient.leagues.getLeaguesLeagueIdOrSlugSeries(
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

## get_leagues_leagueIdOrSlug_tournaments

List tournaments of the given league

- HTTP Method: `GET`
- Endpoint: `/leagues/{league_id_or_slug}/tournaments`

**Parameters**

| Name           | Type                                                                  | Required | Description                                                                                                                                         |
| :------------- | :-------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| leagueIdOrSlug | [LeagueIdOrSlug](../models/LeagueIdOrSlug.md)                         | ✅       | A league ID or slug                                                                                                                                 |
| filter         | [FilterOverShortTournaments](../models/FilterOverShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range          | [RangeOverShortTournaments](../models/RangeOverShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort           | any[]                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search         | [SearchOverShortTournaments](../models/SearchOverShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page           | [Page](../models/Page.md)                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage        | number                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverShortTournaments, LeagueIdOrSlug, OpponentId, OpponentType, Page, PandascoreClient, RangeOverShortTournaments, SearchOverShortTournaments, SearchOverValorantShortTournamentsTier2 } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const leagueIdOrSlug = 1;
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

  const { data } = await pandascoreClient.leagues.getLeaguesLeagueIdOrSlugTournaments(
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
