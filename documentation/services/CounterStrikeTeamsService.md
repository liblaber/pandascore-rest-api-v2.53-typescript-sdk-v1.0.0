# CounterStrikeTeamsService

A list of all methods in the `CounterStrikeTeamsService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description                                 |
| :-------------------------------- | :------------------------------------------ |
| [get_csgo_teams](#get_csgo_teams) | List teams for the Counter-Strike videogame |

## get_csgo_teams

List teams for the Counter-Strike videogame

- HTTP Method: `GET`
- Endpoint: `/csgo/teams`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCsgoTeams](../models/FilterOverCsgoTeams.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCsgoTeams](../models/RangeOverCsgoTeams.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCsgoTeams](../models/SearchOverCsgoTeams.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverCsgoTeams = {
  acronym: ["aute deseru"],
  id: [10],
  location: ["inlabore ea"],
  modifiedAt: ["qui do"],
  name: ["do fugia"],
  slug: ["hr7lzy"],
  videogameId: [videogameId]
};

const range: RangeOverCsgoTeams = {
  acronym: ["nonirure nisi c"],
  id: [1],
  location: ["sunt aliquip "],
  modifiedAt: ["ullamc"],
  name: ["sunt Lorem "],
  slug: ["f9m7owe8"]
};

const search: SearchOverCsgoTeams = {
  acronym: "nulla",
  location: "laborum cons",
  name: "labor",
  slug: "a8yt30_f-"
};
const page = 1;

  const { data } = await pandascoreClient.counterStrikeTeams.getCsgoTeams(
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
