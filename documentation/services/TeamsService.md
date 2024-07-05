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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverTeams = {
  acronym: ["exercitatio"],
  id: [3],
  location: ["nulla Duis"],
  modifiedAt: ["proide"],
  name: ["Duis dol"],
  slug: ["ge1f18b"],
  videogameId: [videogameId]
};

const range: RangeOverTeams = {
  acronym: ["enimreprehend"],
  id: [2],
  location: ["dolore aut"],
  modifiedAt: ["d"],
  name: ["commodo"],
  slug: ["ky5r5rk49"]
};

const search: SearchOverTeams = {
  acronym: "offici",
  location: "Duis si",
  name: "irure",
  slug: "r2l-397wrlz"
};
const page = 1;

  const { data } = await pandascore.teams.getTeams(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const teamIdOrSlug = 3;

  const { data } = await pandascore.teams.getTeamsTeamIdOrSlug();

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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const teamIdOrSlug = 3;

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

  const { data } = await pandascore.teams.getTeamsTeamIdOrSlugLeagues(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const teamIdOrSlug = 3;
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

  const { data } = await pandascore.teams.getTeamsTeamIdOrSlugMatches(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const teamIdOrSlug = 3;
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

  const { data } = await pandascore.teams.getTeamsTeamIdOrSlugSeries(
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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const teamIdOrSlug = 3;
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

  const { data } = await pandascore.teams.getTeamsTeamIdOrSlugTournaments(
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
