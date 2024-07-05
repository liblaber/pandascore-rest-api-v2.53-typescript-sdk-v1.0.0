# CodmwTeamsService

A list of all methods in the `CodmwTeamsService` service. Click on the method name to view detailed information about that method.

| Methods                             | Description                        |
| :---------------------------------- | :--------------------------------- |
| [get_codmw_teams](#get_codmw_teams) | List teams for the CODMW videogame |

## get_codmw_teams

List teams for the CODMW videogame

- HTTP Method: `GET`
- Endpoint: `/codmw/teams`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCodmwTeams](../models/FilterOverCodmwTeams.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCodmwTeams](../models/RangeOverCodmwTeams.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCodmwTeams](../models/SearchOverCodmwTeams.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverCodmwTeams = {
  acronym: ["eiusmod offi"],
  id: [9],
  location: ["culpa "],
  modifiedAt: ["proident repreh"],
  name: ["officia"],
  slug: ["ypcnpac"],
  videogameId: [videogameId]
};

const range: RangeOverCodmwTeams = {
  acronym: ["addolor "],
  id: [1],
  location: ["adipisicin"],
  modifiedAt: ["r"],
  name: ["exercitation d"],
  slug: ["6mgpdh"]
};

const search: SearchOverCodmwTeams = {
  acronym: "eu in veniam ",
  location: "dolor cupida",
  name: "nisiipsum ",
  slug: "a4u9"
};
const page = 1;

  const { data } = await pandascore.codmwTeams.getCodmwTeams(
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
