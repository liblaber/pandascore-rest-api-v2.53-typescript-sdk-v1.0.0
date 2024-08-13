# LoLTeamsService

A list of all methods in the `LoLTeamsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                   | Description                                                      |
| :------------------------------------------------------------------------ | :--------------------------------------------------------------- |
| [get_lol_series_serieIdOrSlug_teams](#get_lol_series_serieidorslug_teams) | List teams for the League of Legends videogame for a given serie |
| [get_lol_teams](#get_lol_teams)                                           | List teams for the League of Legends videogame                   |

## get_lol_series_serieIdOrSlug_teams

List teams for the League of Legends videogame for a given serie

- HTTP Method: `GET`
- Endpoint: `/lol/series/{serie_id_or_slug}/teams`

**Parameters**

| Name          | Type                                                  | Required | Description                                                                                                                                         |
| :------------ | :---------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| serieIdOrSlug | [SerieIdOrSlug](../models/SerieIdOrSlug.md)           | ✅       | A serie ID or slug                                                                                                                                  |
| filter        | [FilterOverLoLTeams](../models/FilterOverLoLTeams.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range         | [RangeOverLoLTeams](../models/RangeOverLoLTeams.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort          | any[]                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search        | [SearchOverLoLTeams](../models/SearchOverLoLTeams.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page          | [Page](../models/Page.md)                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage       | number                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverLoLTeams, Page, PandascoreClient, RangeOverLoLTeams, SearchOverLoLTeams, SerieIdOrSlug, VideogameId } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 10;
const videogameId = VideogameId._1;

const filterOverLoLTeams: FilterOverLoLTeams = {
  acronym: ["cupidatat"],
  id: [10],
  location: ["eu commodo magn"],
  modifiedAt: ["velit sed cons"],
  name: ["aliqua ei"],
  slug: ["4b"],
  videogameId: [videogameId]
};

const rangeOverLoLTeams: RangeOverLoLTeams = {
  acronym: ["in ut sunt"],
  id: [1],
  location: ["dolor"],
  modifiedAt: ["labor"],
  name: ["veniam sed inci"],
  slug: ["pibzwr_n1xc"]
};

const searchOverLoLTeams: SearchOverLoLTeams = {
  acronym: "elit id nisi",
  location: "incididunt",
  name: "sit non ",
  slug: "6k_6"
};
const page = 1;

  const { data } = await pandascoreClient.loLTeams.getLolSeriesSerieIdOrSlugTeams(
  ,
  {
		filter: filterOverLoLTeams,
		range: rangeOverLoLTeams,
    sort: [[]],
		search: searchOverLoLTeams,
		page: page,
    perPage: 50,
  }
);

  console.log(data);
})();
```

## get_lol_teams

List teams for the League of Legends videogame

- HTTP Method: `GET`
- Endpoint: `/lol/teams`

**Parameters**

| Name    | Type                                                  | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLTeams](../models/FilterOverLoLTeams.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLTeams](../models/RangeOverLoLTeams.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLTeams](../models/SearchOverLoLTeams.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverLoLTeams,
  Page,
  PandascoreClient,
  RangeOverLoLTeams,
  SearchOverLoLTeams,
  VideogameId,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const videogameId = VideogameId._1;

  const filterOverLoLTeams: FilterOverLoLTeams = {
    acronym: ['cupidatat'],
    id: [10],
    location: ['eu commodo magn'],
    modifiedAt: ['velit sed cons'],
    name: ['aliqua ei'],
    slug: ['4b'],
    videogameId: [videogameId],
  };

  const rangeOverLoLTeams: RangeOverLoLTeams = {
    acronym: ['in ut sunt'],
    id: [1],
    location: ['dolor'],
    modifiedAt: ['labor'],
    name: ['veniam sed inci'],
    slug: ['pibzwr_n1xc'],
  };

  const searchOverLoLTeams: SearchOverLoLTeams = {
    acronym: 'elit id nisi',
    location: 'incididunt',
    name: 'sit non ',
    slug: '6k_6',
  };
  const page = 1;

  const { data } = await pandascoreClient.loLTeams.getLolTeams({
    filter: filterOverLoLTeams,
    range: rangeOverLoLTeams,
    sort: [[]],
    search: searchOverLoLTeams,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
