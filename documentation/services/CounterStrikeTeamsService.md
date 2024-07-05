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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverCsgoTeams = {
  acronym: ["adipi"],
  id: [7],
  location: ["sit nulla off"],
  modifiedAt: ["Duis L"],
  name: ["enim id"],
  slug: ["qj"],
  videogameId: [videogameId]
};

const range: RangeOverCsgoTeams = {
  acronym: ["culpa "],
  id: [5],
  location: ["amet "],
  modifiedAt: ["Ut quis au"],
  name: ["Lorem a"],
  slug: ["l49exmzkd8"]
};

const search: SearchOverCsgoTeams = {
  acronym: "culpa si",
  location: "laborum te",
  name: "est sed min",
  slug: "2i1v"
};
const page = 1;

  const { data } = await pandascore.counterStrikeTeams.getCsgoTeams(
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
