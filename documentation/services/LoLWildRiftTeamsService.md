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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverLolWildRiftTeams = {
  acronym: ["in veniam"],
  id: [9],
  location: ["ullamco i"],
  modifiedAt: ["ut"],
  name: ["tempor"],
  slug: ["vndlst8"],
  videogameId: [videogameId]
};

const range: RangeOverLolWildRiftTeams = {
  acronym: ["laborum"],
  id: [3],
  location: ["laboris"],
  modifiedAt: ["Lore"],
  name: ["ullamco ve"],
  slug: ["ca3c9lsb0"]
};

const search: SearchOverLolWildRiftTeams = {
  acronym: "laborum ",
  location: "pariatur adi",
  name: "suntame",
  slug: "-v_7h0cqh5-"
};
const page = 1;

  const { data } = await pandascore.loLWildRiftTeams.getLolWildRiftTeams(
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
