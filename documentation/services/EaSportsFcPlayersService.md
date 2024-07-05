# EaSportsFcPlayersService

A list of all methods in the `EaSportsFcPlayersService` service. Click on the method name to view detailed information about that method.

| Methods                               | Description                                 |
| :------------------------------------ | :------------------------------------------ |
| [get_fifa_players](#get_fifa_players) | List players for the EA Sports FC videogame |

## get_fifa_players

List players for the EA Sports FC videogame

- HTTP Method: `GET`
- Endpoint: `/fifa/players`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverFifaPlayers](../models/FilterOverFifaPlayers.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverFifaPlayers](../models/RangeOverFifaPlayers.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverFifaPlayers](../models/SearchOverFifaPlayers.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Player[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverFifaPlayers = {
  active: true,
  birthday: ["volup"],
  firstName: ["laboris"],
  id: [4],
  lastName: ["esse irure"],
  modifiedAt: ["proid"],
  name: ["adipisicin"],
  nationality: ["sed id "],
  role: ["veniam aliquip"],
  slug: ["xbh_wy"],
  teamId: [5],
  videogameId: [videogameId]
};

const range: RangeOverFifaPlayers = {
  birthday: ["exercitation ve"],
  firstName: ["dolor"],
  id: [4],
  lastName: ["occae"],
  modifiedAt: ["d"],
  name: ["aliquip"],
  nationality: ["pariatur mol"],
  role: ["tempor "],
  slug: ["1p7h8ie18"]
};

const search: SearchOverFifaPlayers = {
  birthday: "amet cillum",
  firstName: "utsunt",
  lastName: "tempor in do E",
  name: "irure",
  nationality: "nulla inci",
  role: "Ut in ut do",
  slug: "2dd9e"
};
const page = 1;

  const { data } = await pandascore.eaSportsFcPlayers.getFifaPlayers(
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
