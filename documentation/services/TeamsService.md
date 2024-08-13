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

  const filterOverTeams: FilterOverTeams = {
    acronym: ['qui dolore'],
    id: [9],
    location: ['in reprehende'],
    modifiedAt: ['elit'],
    name: ['deserunt conse'],
    slug: ['_pbld'],
    videogameId: [videogameId],
  };

  const rangeOverTeams: RangeOverTeams = {
    acronym: ['nulla adipis'],
    id: [6],
    location: ['amet comm'],
    modifiedAt: ['non'],
    name: ['adipisicing'],
    slug: ['b48hhqy'],
  };

  const searchOverTeams: SearchOverTeams = {
    acronym: 'exercit',
    location: 'est L',
    name: 'culpa Duis t',
    slug: 'f',
  };
  const page = 1;

  const { data } = await pandascoreClient.teams.getTeams({
    filter: filterOverTeams,
    range: rangeOverTeams,
    sort: [[]],
    search: searchOverTeams,
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

  const { data } = await pandascoreClient.teams.getTeamsTeamIdOrSlugLeagues(
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
import { FilterOverMatches, MatchStatus, MatchType, MatchWinnerType, Page, PandascoreClient, RangeOverMatches, SearchOverMatches, TeamIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const teamIdOrSlug = 10;
const matchType = MatchType.ALLGAMESPLAYED;

const teamIdOrSlug1 = 10;;

const matchStatus = MatchStatus.CANCELED;

const videogameId = VideogameId._1;;

const filterOverMatchesVideogameTitle = 6;

const filterOverMatchesVideogameVersion = "1125897835.45";

const opponentId = 7;

const matchWinnerType = MatchWinnerType.PLAYER;

const filterOverMatches: FilterOverMatches = {
  beginAt: ["ani"],
  detailedStats: true,
  draw: true,
  endAt: ["ad ut com"],
  finished: true,
  forfeit: true,
  future: true,
  id: [3],
  leagueId: [9],
  matchType: [matchType],
  modifiedAt: ["aute sit"],
  name: ["exercitation te"],
  notStarted: true,
  numberOfGames: [8],
  opponentId: [filterOverMatchesOpponentId],
  opponentsFilled: true,
  past: true,
  running: true,
  scheduledAt: ["esse aute n"],
  serieId: [10],
  slug: ["HiGqjR9"],
  status: [matchStatus],
  tournamentId: [3],
  unscheduled: true,
  videogame: [videogameIdOrSlug],
  videogameTitle: [filterOverMatchesVideogameTitle],
  videogameVersion: [filterOverMatchesVideogameVersion],
  winnerId: [opponentId],
  winnerType: [matchWinnerType]
};
const matchType1 = MatchType.ALLGAMESPLAYED;

const matchStatus1 = MatchStatus.CANCELED;

const opponentId1 = 7;

const matchWinnerType1 = MatchWinnerType.PLAYER;

const rangeOverMatches: RangeOverMatches = {
  beginAt: ["al"],
  detailedStats: [true],
  draw: [true],
  endAt: ["do d"],
  forfeit: [true],
  id: [6],
  matchType: [matchType1],
  modifiedAt: ["dolore ve"],
  name: ["dolore "],
  numberOfGames: [10],
  scheduledAt: ["nisi sed aut"],
  slug: ["bAjOZ"],
  status: [matchStatus1],
  tournamentId: [3],
  winnerId: [opponentId1],
  winnerType: [matchWinnerType1]
};
const matchType12 = MatchType.ALLGAMESPLAYED;

const matchStatus12 = MatchStatus.CANCELED;

const matchWinnerType12 = MatchWinnerType.PLAYER;

const searchOverMatches: SearchOverMatches = {
  matchType: matchType12,
  name: "nulla veniam ",
  slug: "WfL1ZPQ",
  status: matchStatus12,
  winnerType: matchWinnerType12
};
const page = 1;

  const { data } = await pandascoreClient.teams.getTeamsTeamIdOrSlugMatches(
  ,
  {
		filter: filterOverMatches,
		range: rangeOverMatches,
    sort: [[]],
		search: searchOverMatches,
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
import { FilterOverSeries, OpponentType, Page, PandascoreClient, RangeOverSeries, SearchOverSeries, TeamIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const teamIdOrSlug = 10;
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

  const { data } = await pandascoreClient.teams.getTeamsTeamIdOrSlugSeries(
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
import { FilterOverShortTournaments, OpponentType, Page, PandascoreClient, RangeOverShortTournaments, SearchOverShortTournaments, SearchOverValorantShortTournamentsTier2, TeamIdOrSlug } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const teamIdOrSlug = 10;
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

  const { data } = await pandascoreClient.teams.getTeamsTeamIdOrSlugTournaments(
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

<!-- This file was generated by liblab | https://liblab.com/ -->
