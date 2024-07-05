# RlPlayersService

A list of all methods in the `RlPlayersService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description                                  |
| :-------------------------------- | :------------------------------------------- |
| [get_rl_players](#get_rl_players) | List players for the Rocket League videogame |

## get_rl_players

List players for the Rocket League videogame

- HTTP Method: `GET`
- Endpoint: `/rl/players`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlPlayers](../models/FilterOverRlPlayers.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlPlayers](../models/RangeOverRlPlayers.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlPlayers](../models/SearchOverRlPlayers.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Player[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverRlPlayers = {
  active: true,
  birthday: ["ex qui anim"],
  firstName: ["officia d"],
  id: [9],
  lastName: ["dolore"],
  modifiedAt: ["do"],
  name: ["velit oc"],
  nationality: ["ipsum"],
  role: ["aliqua"],
  slug: ["x4z_af"],
  teamId: [5],
  videogameId: [videogameId]
};

const range: RangeOverRlPlayers = {
  birthday: ["inut repreh"],
  firstName: ["aute u"],
  id: [8],
  lastName: ["aliquip vel"],
  modifiedAt: ["voluptat"],
  name: ["Duis Lore"],
  nationality: ["consequa"],
  role: ["qui in t"],
  slug: ["h8xyxn-y09y"]
};

const search: SearchOverRlPlayers = {
  birthday: "sunt al",
  firstName: "incidi",
  lastName: "ut consequ",
  name: "nonadipisici",
  nationality: "nulla non",
  role: "Excepte",
  slug: "kk-uq3346d"
};
const page = 1;

  const { data } = await pandascore.rlPlayers.getRlPlayers(
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
