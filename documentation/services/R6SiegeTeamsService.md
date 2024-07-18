# R6SiegeTeamsService

A list of all methods in the `R6SiegeTeamsService` service. Click on the method name to view detailed information about that method.

| Methods                                 | Description                                    |
| :-------------------------------------- | :--------------------------------------------- |
| [get_r6siege_teams](#get_r6siege_teams) | List teams for the Rainbow Six Siege videogame |

## get_r6siege_teams

List teams for the Rainbow Six Siege videogame

- HTTP Method: `GET`
- Endpoint: `/r6siege/teams`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverR6SiegeTeams](../models/FilterOverR6SiegeTeams.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverR6SiegeTeams](../models/RangeOverR6SiegeTeams.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverR6SiegeTeams](../models/SearchOverR6SiegeTeams.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverR6SiegeTeams = {
  acronym: ["pariatur co"],
  id: [8],
  location: ["aute ex"],
  modifiedAt: ["pariatur elit m"],
  name: ["adin sed"],
  slug: ["1va2v7dm-j"],
  videogameId: [videogameId]
};

const range: RangeOverR6SiegeTeams = {
  acronym: ["aliquip"],
  id: [2],
  location: ["commodo"],
  modifiedAt: ["sed L"],
  name: ["proid"],
  slug: ["by-i4"]
};

const search: SearchOverR6SiegeTeams = {
  acronym: "exercitati",
  location: "occaecat l",
  name: "ex incididunt",
  slug: "yck1qqq"
};
const page = 1;

  const { data } = await pandascoreClient.r6SiegeTeams.getR6siegeTeams(
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
