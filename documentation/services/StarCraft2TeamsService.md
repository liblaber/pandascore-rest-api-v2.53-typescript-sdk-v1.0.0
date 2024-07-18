# StarCraft2TeamsService

A list of all methods in the `StarCraft2TeamsService` service. Click on the method name to view detailed information about that method.

| Methods                                         | Description                              |
| :---------------------------------------------- | :--------------------------------------- |
| [get_starcraft_2_teams](#get_starcraft_2_teams) | List teams for the StarCraft 2 videogame |

## get_starcraft_2_teams

List teams for the StarCraft 2 videogame

- HTTP Method: `GET`
- Endpoint: `/starcraft-2/teams`

**Parameters**

| Name    | Type                                                                | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraft2Teams](../models/FilterOverStarcraft2Teams.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraft2Teams](../models/RangeOverStarcraft2Teams.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraft2Teams](../models/SearchOverStarcraft2Teams.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverStarcraft2Teams = {
  acronym: ["sint n"],
  id: [2],
  location: ["esse "],
  modifiedAt: ["ut amet"],
  name: ["consequ"],
  slug: ["5nm4baxub3g"],
  videogameId: [videogameId]
};

const range: RangeOverStarcraft2Teams = {
  acronym: ["et aute eius"],
  id: [9],
  location: ["in occ"],
  modifiedAt: ["anim mo"],
  name: ["cupidatat"],
  slug: ["eclsej7"]
};

const search: SearchOverStarcraft2Teams = {
  acronym: "nisi consecte",
  location: "dolor cup",
  name: "Ut aliquip ",
  slug: "9ejb6qcy-q"
};
const page = 1;

  const { data } = await pandascoreClient.starCraft2Teams.getStarcraft2Teams(
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
