# LoLPlayersService

A list of all methods in the `LoLPlayersService` service. Click on the method name to view detailed information about that method.

| Methods                             | Description                                      |
| :---------------------------------- | :----------------------------------------------- |
| [get_lol_players](#get_lol_players) | List players for the League of Legends videogame |

## get_lol_players

List players for the League of Legends videogame

- HTTP Method: `GET`
- Endpoint: `/lol/players`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLPlayers](../models/FilterOverLoLPlayers.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLPlayers](../models/RangeOverLoLPlayers.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLPlayers](../models/SearchOverLoLPlayers.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Player[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverLoLPlayers = {
  active: true,
  birthday: ["quis exercita"],
  firstName: ["enimconsec"],
  id: [7],
  lastName: ["Excepte"],
  modifiedAt: ["culpa"],
  name: ["sit commodo a"],
  nationality: ["sed aliquip ut"],
  role: ["enim nulla"],
  slug: ["4"],
  teamId: [9],
  videogameId: [videogameId]
};

const range: RangeOverLoLPlayers = {
  birthday: ["proiden"],
  firstName: ["esse officia m"],
  id: [2],
  lastName: ["Ut lab"],
  modifiedAt: ["aute do volup"],
  name: ["nostrud"],
  nationality: ["velit pari"],
  role: ["exercit"],
  slug: ["bs51gp"]
};

const search: SearchOverLoLPlayers = {
  birthday: "dolore",
  firstName: "adipi",
  lastName: "conse",
  name: "dolore",
  nationality: "sunt Duis",
  role: "animno",
  slug: "d-"
};
const page = 1;

  const { data } = await pandascoreClient.loLPlayers.getLolPlayers(
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
