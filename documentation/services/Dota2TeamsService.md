# Dota2TeamsService

A list of all methods in the `Dota2TeamsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                       | Description                                           |
| :---------------------------------------------------------------------------- | :---------------------------------------------------- |
| [get_dota2_series_serieIdOrSlug_teams](#get_dota2_series_serieidorslug_teams) | List teams for the Dota 2 videogame for a given serie |
| [get_dota2_teams](#get_dota2_teams)                                           | List teams for the Dota 2 videogame                   |

## get_dota2_series_serieIdOrSlug_teams

List teams for the Dota 2 videogame for a given serie

- HTTP Method: `GET`
- Endpoint: `/dota2/series/{serie_id_or_slug}/teams`

**Parameters**

| Name          | Type                                                      | Required | Description                                                                                                                                         |
| :------------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| serieIdOrSlug | [SerieIdOrSlug](../models/SerieIdOrSlug.md)               | ✅       | A serie ID or slug                                                                                                                                  |
| filter        | [FilterOverDota2Teams](../models/FilterOverDota2Teams.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range         | [RangeOverDota2Teams](../models/RangeOverDota2Teams.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort          | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search        | [SearchOverDota2Teams](../models/SearchOverDota2Teams.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page          | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage       | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const serieIdOrSlug = 1;
const videogameId = VideogameId.1;

const filter: FilterOverDota2Teams = {
  acronym: ["qui ani"],
  id: [6],
  location: ["occaecat ut rep"],
  modifiedAt: ["enim cu"],
  name: ["velit occ"],
  slug: ["vbtl2ssp"],
  videogameId: [videogameId]
};

const range: RangeOverDota2Teams = {
  acronym: ["ipsum ut"],
  id: [8],
  location: ["ad quis labore "],
  modifiedAt: ["ipsum ulla"],
  name: ["irure mollit "],
  slug: ["wufkd66y"]
};

const search: SearchOverDota2Teams = {
  acronym: "ametpa",
  location: "enimes",
  name: "eiusmod deser",
  slug: "2gmyb_ly"
};
const page = 1;

  const { data } = await pandascoreClient.dota2Teams.getDota2SeriesSerieIdOrSlugTeams(
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

## get_dota2_teams

List teams for the Dota 2 videogame

- HTTP Method: `GET`
- Endpoint: `/dota2/teams`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2Teams](../models/FilterOverDota2Teams.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2Teams](../models/RangeOverDota2Teams.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2Teams](../models/SearchOverDota2Teams.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverDota2Teams = {
  acronym: ["qui ani"],
  id: [6],
  location: ["occaecat ut rep"],
  modifiedAt: ["enim cu"],
  name: ["velit occ"],
  slug: ["vbtl2ssp"],
  videogameId: [videogameId]
};

const range: RangeOverDota2Teams = {
  acronym: ["ipsum ut"],
  id: [8],
  location: ["ad quis labore "],
  modifiedAt: ["ipsum ulla"],
  name: ["irure mollit "],
  slug: ["wufkd66y"]
};

const search: SearchOverDota2Teams = {
  acronym: "ametpa",
  location: "enimes",
  name: "eiusmod deser",
  slug: "2gmyb_ly"
};
const page = 1;

  const { data } = await pandascoreClient.dota2Teams.getDota2Teams(
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
