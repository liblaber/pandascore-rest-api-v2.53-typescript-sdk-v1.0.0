# ValorantPlayersService

A list of all methods in the `ValorantPlayersService` service. Click on the method name to view detailed information about that method.

| Methods                                       | Description                             |
| :-------------------------------------------- | :-------------------------------------- |
| [get_valorant_players](#get_valorant_players) | List players for the Valorant videogame |

## get_valorant_players

List players for the Valorant videogame

- HTTP Method: `GET`
- Endpoint: `/valorant/players`

**Parameters**

| Name    | Type                                                                | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantPlayers](../models/FilterOverValorantPlayers.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantPlayers](../models/RangeOverValorantPlayers.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantPlayers](../models/SearchOverValorantPlayers.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Player[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverValorantPlayers = {
  active: true,
  birthday: ["nostrud cu"],
  firstName: ["eu do"],
  id: [4],
  lastName: ["ex aliqu"],
  modifiedAt: ["sint"],
  name: ["nulla elit"],
  nationality: ["elit ut"],
  role: ["nisiqui ulla"],
  slug: ["8"],
  teamId: [4],
  videogameId: [videogameId]
};

const range: RangeOverValorantPlayers = {
  birthday: ["estvolu"],
  firstName: ["tempor"],
  id: [1],
  lastName: ["dolore"],
  modifiedAt: ["ex Lorem e"],
  name: ["Excepteur ex al"],
  nationality: ["Excepteur"],
  role: ["reprehenderit"],
  slug: ["l06jlhop5wn"]
};

const search: SearchOverValorantPlayers = {
  birthday: "reprehende",
  firstName: "amet cul",
  lastName: "consequ",
  name: "officia",
  nationality: "tempor",
  role: "elitnon dolor e",
  slug: "rb"
};
const page = 1;

  const { data } = await pandascore.valorantPlayers.getValorantPlayers(
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
