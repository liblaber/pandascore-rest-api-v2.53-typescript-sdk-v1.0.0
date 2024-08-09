# TeamsService

A list of all methods in the `TeamsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                   | Description                                          |
| :------------------------------------------------------------------------ | :--------------------------------------------------- |
| [get_teams](#get_teams)                                                   | List teams                                           |
| [get_teams_teamIdOrSlug](#get_teams_teamidorslug)                         | Get a single team by ID or by slug                   |
| [get_teams_teamIdOrSlug_leagues](#get_teams_teamidorslug_leagues)         | List leagues in which the given team was part of     |
| [get_teams_teamIdOrSlug_matches](#get_teams_teamidorslug_matches)         | List matches for the given team                      |
| [get_teams_teamIdOrSlug_series](#get_teams_teamidorslug_series)           | List series in which the given team was part of      |
| [get_teams_teamIdOrSlug_tournaments](#get_teams_teamidorslug_tournaments) | List tournaments in which the given team was part of |

## get_teams

List teams

- HTTP Method: `GET`
- Endpoint: `/teams`

**Parameters**

| Name    | Type                                            | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverTeams](../models/FilterOverTeams.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverTeams](../models/RangeOverTeams.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                           | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverTeams](../models/SearchOverTeams.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                       | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                          | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverTeams,
  Page,
  PandascoreClient,
  RangeOverTeams,
  SearchOverTeams,
  VideogameId,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const videogameId = VideogameId._1;

  const filter: FilterOverTeams = {
    acronym: ['tempor do co'],
    id: [4],
    location: ['mollit commodo '],
    modifiedAt: ['cup'],
    name: ['in Lorem'],
    slug: ['cpvt'],
    videogameId: [videogameId],
  };

  const range: RangeOverTeams = {
    acronym: ['amet nostrud'],
    id: [6],
    location: ['voluptat'],
    modifiedAt: ['dolore eu amet'],
    name: ['in aut'],
    slug: ['96t71'],
  };

  const search: SearchOverTeams = {
    acronym: 'consectetur L',
    location: 'sint ex conse',
    name: 'ea ullamco l',
    slug: 's9e12o',
  };
  const page = 1;

  const { data } = await pandascoreClient.teams.getTeams({
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

## get_teams_teamIdOrSlug

Get a single team by ID or by slug

- HTTP Method: `GET`
- Endpoint: `/teams/{team_id_or_slug}`

**Parameters**

| Name         | Type                                      | Required | Description       |
| :----------- | :---------------------------------------- | :------- | :---------------- |
| teamIdOrSlug | [TeamIdOrSlug](../models/TeamIdOrSlug.md) | ✅       | A team ID or slug |

**Return Type**

`Team`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient, TeamIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const teamIdOrSlug = 10;

  const { data } = await pandascoreClient.teams.getTeamsTeamIdOrSlug();

  console.log(data);
})();
```

## get_teams_teamIdOrSlug_leagues

List leagues in which the given team was part of

- HTTP Method: `GET`
- Endpoint: `/teams/{team_id_or_slug}/leagues`

**Parameters**

| Name         | Type                                                | Required | Description                                                                                                                                         |
| :----------- | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| teamIdOrSlug | [TeamIdOrSlug](../models/TeamIdOrSlug.md)           | ✅       | A team ID or slug                                                                                                                                   |
| filter       | [FilterOverLeagues](../models/FilterOverLeagues.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range        | [RangeOverLeagues](../models/RangeOverLeagues.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort         | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search       | [SearchOverLeagues](../models/SearchOverLeagues.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page         | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage      | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`League[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverLeagues, Page, PandascoreClient, RangeOverLeagues, SearchOverLeagues, TeamIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const teamIdOrSlug = 10;

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

  const { data } = await pandascoreClient.teams.getTeamsTeamIdOrSlugLeagues(
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

## get_teams_teamIdOrSlug_matches

List matches for the given team

- HTTP Method: `GET`
- Endpoint: `/teams/{team_id_or_slug}/matches`

**Parameters**

| Name         | Type                                                | Required | Description                                                                                                                                         |
| :----------- | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| teamIdOrSlug | [TeamIdOrSlug](../models/TeamIdOrSlug.md)           | ✅       | A team ID or slug                                                                                                                                   |
| filter       | [FilterOverMatches](../models/FilterOverMatches.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range        | [RangeOverMatches](../models/RangeOverMatches.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort         | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search       | [SearchOverMatches](../models/SearchOverMatches.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page         | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage      | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Match[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverMatches, MatchStatus, MatchType, MatchWinnerType, OpponentId, Page, PandascoreClient, PlayerIdOrSlug, RangeOverMatches, SearchOverMatches, TeamIdOrSlug, VideogameIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const teamIdOrSlug = 10;
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

  const { data } = await pandascoreClient.teams.getTeamsTeamIdOrSlugMatches(
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

## get_teams_teamIdOrSlug_series

List series in which the given team was part of

- HTTP Method: `GET`
- Endpoint: `/teams/{team_id_or_slug}/series`

**Parameters**

| Name         | Type                                              | Required | Description                                                                                                                                         |
| :----------- | :------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| teamIdOrSlug | [TeamIdOrSlug](../models/TeamIdOrSlug.md)         | ✅       | A team ID or slug                                                                                                                                   |
| filter       | [FilterOverSeries](../models/FilterOverSeries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range        | [RangeOverSeries](../models/RangeOverSeries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort         | any[]                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search       | [SearchOverSeries](../models/SearchOverSeries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page         | [Page](../models/Page.md)                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage      | number                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Serie[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverSeries, OpponentId, OpponentType, Page, PandascoreClient, RangeOverSeries, SearchOverSeries, TeamIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const teamIdOrSlug = 10;
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

  const { data } = await pandascoreClient.teams.getTeamsTeamIdOrSlugSeries(
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

## get_teams_teamIdOrSlug_tournaments

List tournaments in which the given team was part of

- HTTP Method: `GET`
- Endpoint: `/teams/{team_id_or_slug}/tournaments`

**Parameters**

| Name         | Type                                                                  | Required | Description                                                                                                                                         |
| :----------- | :-------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| teamIdOrSlug | [TeamIdOrSlug](../models/TeamIdOrSlug.md)                             | ✅       | A team ID or slug                                                                                                                                   |
| filter       | [FilterOverShortTournaments](../models/FilterOverShortTournaments.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range        | [RangeOverShortTournaments](../models/RangeOverShortTournaments.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort         | any[]                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search       | [SearchOverShortTournaments](../models/SearchOverShortTournaments.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page         | [Page](../models/Page.md)                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage      | number                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ShortTournament[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverShortTournaments, OpponentId, OpponentType, Page, PandascoreClient, RangeOverShortTournaments, SearchOverShortTournaments, SearchOverValorantShortTournamentsTier2, TeamIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const teamIdOrSlug = 10;
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

  const { data } = await pandascoreClient.teams.getTeamsTeamIdOrSlugTournaments(
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
