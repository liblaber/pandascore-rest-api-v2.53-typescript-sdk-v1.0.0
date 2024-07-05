# RlTeamsService

A list of all methods in the `RlTeamsService` service. Click on the method name to view detailed information about that method.

| Methods                       | Description                                |
| :---------------------------- | :----------------------------------------- |
| [get_rl_teams](#get_rl_teams) | List teams for the Rocket League videogame |

## get_rl_teams

List teams for the Rocket League videogame

- HTTP Method: `GET`
- Endpoint: `/rl/teams`

**Parameters**

| Name    | Type                                                | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlTeams](../models/FilterOverRlTeams.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlTeams](../models/RangeOverRlTeams.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlTeams](../models/SearchOverRlTeams.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverRlTeams = {
  acronym: ["pariatu"],
  id: [5],
  location: ["non velit"],
  modifiedAt: ["cup"],
  name: ["occaecat "],
  slug: ["vue5ew"],
  videogameId: [videogameId]
};

const range: RangeOverRlTeams = {
  acronym: ["dolore dolor"],
  id: [4],
  location: ["dolor ea mag"],
  modifiedAt: ["non"],
  name: ["fugiat"],
  slug: ["g0u"]
};

const search: SearchOverRlTeams = {
  acronym: "minim",
  location: "tempor",
  name: "consectetur te",
  slug: "e0vqg4v"
};
const page = 1;

  const { data } = await pandascore.rlTeams.getRlTeams(
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
