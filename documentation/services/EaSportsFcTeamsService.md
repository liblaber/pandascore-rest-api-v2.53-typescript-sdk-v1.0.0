# EaSportsFcTeamsService

A list of all methods in the `EaSportsFcTeamsService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description                               |
| :-------------------------------- | :---------------------------------------- |
| [get_fifa_teams](#get_fifa_teams) | List teams for the EA Sports FC videogame |

## get_fifa_teams

List teams for the EA Sports FC videogame

- HTTP Method: `GET`
- Endpoint: `/fifa/teams`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaTeams](../models/FilterOverFifaTeams.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaTeams](../models/RangeOverFifaTeams.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaTeams](../models/SearchOverFifaTeams.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverFifaTeams = {
  acronym: ["elit fugiat"],
  id: [10],
  location: ["consequ"],
  modifiedAt: ["ali"],
  name: ["culpa anim pari"],
  slug: ["ug5ye1836y"],
  videogameId: [videogameId]
};

const range: RangeOverFifaTeams = {
  acronym: ["quis "],
  id: [5],
  location: ["labore quis"],
  modifiedAt: ["ex dese"],
  name: ["ut irure mollit"],
  slug: ["-l47gfv"]
};

const search: SearchOverFifaTeams = {
  acronym: "magna ips",
  location: "occaecat Lo",
  name: "sit do con",
  slug: "yzli"
};
const page = 1;

  const { data } = await pandascore.eaSportsFcTeams.getFifaTeams(
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
