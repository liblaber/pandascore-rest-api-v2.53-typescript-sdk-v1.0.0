# R6SiegePlayersService

A list of all methods in the `R6SiegePlayersService` service. Click on the method name to view detailed information about that method.

| Methods                                     | Description                                      |
| :------------------------------------------ | :----------------------------------------------- |
| [get_r6siege_players](#get_r6siege_players) | List players for the Rainbow Six Siege videogame |

## get_r6siege_players

List players for the Rainbow Six Siege videogame

- HTTP Method: `GET`
- Endpoint: `/r6siege/players`

**Parameters**

| Name    | Type                                                              | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverR6SiegePlayers](../models/FilterOverR6SiegePlayers.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverR6SiegePlayers](../models/RangeOverR6SiegePlayers.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverR6SiegePlayers](../models/SearchOverR6SiegePlayers.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Player[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverR6SiegePlayers = {
  active: true,
  birthday: ["elit "],
  firstName: ["non aliqua do"],
  id: [9],
  lastName: ["estdol"],
  modifiedAt: ["d"],
  name: ["aliqua"],
  nationality: ["fugia"],
  role: ["aliquip m"],
  slug: ["hmb8ea9"],
  teamId: [4],
  videogameId: [videogameId]
};

const range: RangeOverR6SiegePlayers = {
  birthday: ["nisi "],
  firstName: ["Excepteu"],
  id: [3],
  lastName: ["exercitat"],
  modifiedAt: ["r"],
  name: ["laborum"],
  nationality: ["eiusmod ipsum "],
  role: ["conseq"],
  slug: ["0x8u_0"]
};

const search: SearchOverR6SiegePlayers = {
  birthday: "ex elit",
  firstName: "magna ex ",
  lastName: "labore ",
  name: "cillum ut",
  nationality: "aliquip aliq",
  role: "deserunt sed",
  slug: "t99reui"
};
const page = 1;

  const { data } = await pandascore.r6SiegePlayers.getR6siegePlayers(
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
