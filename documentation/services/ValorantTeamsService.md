# ValorantTeamsService

A list of all methods in the `ValorantTeamsService` service. Click on the method name to view detailed information about that method.

| Methods                                   | Description                           |
| :---------------------------------------- | :------------------------------------ |
| [get_valorant_teams](#get_valorant_teams) | List teams for the Valorant videogame |

## get_valorant_teams

List teams for the Valorant videogame

- HTTP Method: `GET`
- Endpoint: `/valorant/teams`

**Parameters**

| Name    | Type                                                            | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantTeams](../models/FilterOverValorantTeams.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantTeams](../models/RangeOverValorantTeams.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                           | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantTeams](../models/SearchOverValorantTeams.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                       | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                          | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverValorantTeams = {
  acronym: ["eu dolor mini"],
  id: [10],
  location: ["mollit velit "],
  modifiedAt: ["aute e"],
  name: ["sint reprehen"],
  slug: ["9qf848"],
  videogameId: [videogameId]
};

const range: RangeOverValorantTeams = {
  acronym: ["magna cillu"],
  id: [1],
  location: ["reprehender"],
  modifiedAt: ["con"],
  name: ["minim "],
  slug: ["l45n"]
};

const search: SearchOverValorantTeams = {
  acronym: "sunt et min",
  location: "Lorem",
  name: "conse",
  slug: "0ymcr"
};
const page = 1;

  const { data } = await pandascore.valorantTeams.getValorantTeams(
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
