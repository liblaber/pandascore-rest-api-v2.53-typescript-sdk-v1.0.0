# LoLWildRiftTeamsService

A list of all methods in the `LoLWildRiftTeamsService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description                                |
| :-------------------------------------------------- | :----------------------------------------- |
| [get_lol_wild_rift_teams](#get_lol_wild_rift_teams) | List teams for the LoL Wild Rift videogame |

## get_lol_wild_rift_teams

List teams for the LoL Wild Rift videogame

- HTTP Method: `GET`
- Endpoint: `/lol-wild-rift/teams`

**Parameters**

| Name    | Type                                                                  | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLolWildRiftTeams](../models/FilterOverLolWildRiftTeams.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLolWildRiftTeams](../models/RangeOverLolWildRiftTeams.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLolWildRiftTeams](../models/SearchOverLolWildRiftTeams.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverLolWildRiftTeams = {
  acronym: ["nulla"],
  id: [4],
  location: ["ut cul"],
  modifiedAt: ["Lorem"],
  name: ["eu anim"],
  slug: ["smkajitdf56"],
  videogameId: [videogameId]
};

const range: RangeOverLolWildRiftTeams = {
  acronym: ["dolore aute "],
  id: [4],
  location: ["mollit"],
  modifiedAt: ["proident sun"],
  name: ["tempor labore e"],
  slug: ["qwl4m2"]
};

const search: SearchOverLolWildRiftTeams = {
  acronym: "et commodo a",
  location: "minim",
  name: "labore",
  slug: "jlv"
};
const page = 1;

  const { data } = await pandascoreClient.loLWildRiftTeams.getLolWildRiftTeams(
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
