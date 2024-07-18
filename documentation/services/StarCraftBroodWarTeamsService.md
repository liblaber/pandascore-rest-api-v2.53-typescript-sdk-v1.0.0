# StarCraftBroodWarTeamsService

A list of all methods in the `StarCraftBroodWarTeamsService` service. Click on the method name to view detailed information about that method.

| Methods                                                         | Description                                      |
| :-------------------------------------------------------------- | :----------------------------------------------- |
| [get_starcraft_brood_war_teams](#get_starcraft_brood_war_teams) | List teams for the StarCraft Brood War videogame |

## get_starcraft_brood_war_teams

List teams for the StarCraft Brood War videogame

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/teams`

**Parameters**

| Name    | Type                                                                              | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarTeams](../models/FilterOverStarcraftBroodWarTeams.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarTeams](../models/RangeOverStarcraftBroodWarTeams.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarTeams](../models/SearchOverStarcraftBroodWarTeams.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverStarcraftBroodWarTeams = {
  acronym: ["sint co"],
  id: [8],
  location: ["ut dolo"],
  modifiedAt: ["iru"],
  name: ["cillum e"],
  slug: ["m"],
  videogameId: [videogameId]
};

const range: RangeOverStarcraftBroodWarTeams = {
  acronym: ["deserunt a"],
  id: [3],
  location: ["sunt aut"],
  modifiedAt: ["deserunt aute"],
  name: ["labor"],
  slug: ["qt3q1roio"]
};

const search: SearchOverStarcraftBroodWarTeams = {
  acronym: "dolore fugia",
  location: "dolore cillum",
  name: "irure ven",
  slug: "j"
};
const page = 1;

  const { data } = await pandascoreClient.starCraftBroodWarTeams.getStarcraftBroodWarTeams(
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
