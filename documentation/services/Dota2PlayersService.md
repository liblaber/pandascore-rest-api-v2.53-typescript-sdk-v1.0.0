# Dota2PlayersService

A list of all methods in the `Dota2PlayersService` service. Click on the method name to view detailed information about that method.

| Methods                                 | Description                           |
| :-------------------------------------- | :------------------------------------ |
| [get_dota2_players](#get_dota2_players) | List players for the Dota 2 videogame |

## get_dota2_players

List players for the Dota 2 videogame

- HTTP Method: `GET`
- Endpoint: `/dota2/players`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2Players](../models/FilterOverDota2Players.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2Players](../models/RangeOverDota2Players.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2Players](../models/SearchOverDota2Players.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Player[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverDota2Players = {
  active: true,
  birthday: ["velit anim"],
  firstName: ["venia"],
  id: [10],
  lastName: ["dolore occae"],
  modifiedAt: ["amet de"],
  name: ["occaecat"],
  nationality: ["consequat e"],
  role: ["Utea i"],
  slug: ["4ol0dzq"],
  teamId: [2],
  videogameId: [videogameId]
};

const range: RangeOverDota2Players = {
  birthday: ["cupidata"],
  firstName: ["minim"],
  id: [5],
  lastName: ["quis "],
  modifiedAt: ["sed d"],
  name: ["nulla"],
  nationality: ["cupidatat"],
  role: ["nostrud enim "],
  slug: ["vadram--6rv"]
};

const search: SearchOverDota2Players = {
  birthday: "dolor irure oc",
  firstName: "qui no",
  lastName: "inreprehen",
  name: "fugiat ullamco ",
  nationality: "mollit magna ci",
  role: "nostrud adip",
  slug: "nv6k3qoel"
};
const page = 1;

  const { data } = await pandascore.dota2Players.getDota2Players(
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
