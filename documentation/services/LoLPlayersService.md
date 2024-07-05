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
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverLoLPlayers = {
  active: true,
  birthday: ["ad minim "],
  firstName: ["ad ex"],
  id: [3],
  lastName: ["voluptate d"],
  modifiedAt: ["dolore co"],
  name: ["ut nostrud"],
  nationality: ["aliquip"],
  role: ["nulla commodo "],
  slug: ["8pm3g_of-"],
  teamId: [9],
  videogameId: [videogameId]
};

const range: RangeOverLoLPlayers = {
  birthday: ["incididu"],
  firstName: ["incidid"],
  id: [4],
  lastName: ["Ut mollit fu"],
  modifiedAt: ["ea"],
  name: ["in ullamco "],
  nationality: ["Lorem ir"],
  role: ["offici"],
  slug: ["wr_rhtajyz"]
};

const search: SearchOverLoLPlayers = {
  birthday: "sint ",
  firstName: "velit Exc",
  lastName: "et occae",
  name: "ullamco",
  nationality: "reprehenderit ",
  role: "nostrud cupi",
  slug: "d"
};
const page = 1;

  const { data } = await pandascore.loLPlayers.getLolPlayers(
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
