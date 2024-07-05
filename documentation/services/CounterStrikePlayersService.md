# CounterStrikePlayersService

A list of all methods in the `CounterStrikePlayersService` service. Click on the method name to view detailed information about that method.

| Methods                               | Description                                   |
| :------------------------------------ | :-------------------------------------------- |
| [get_csgo_players](#get_csgo_players) | List players for the Counter-Strike videogame |

## get_csgo_players

List players for the Counter-Strike videogame

- HTTP Method: `GET`
- Endpoint: `/csgo/players`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCsgoPlayers](../models/FilterOverCsgoPlayers.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCsgoPlayers](../models/RangeOverCsgoPlayers.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCsgoPlayers](../models/SearchOverCsgoPlayers.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

const filter: FilterOverCsgoPlayers = {
  active: true,
  birthday: ["cupidatat ve"],
  firstName: ["paria"],
  id: [6],
  lastName: ["amet quis"],
  modifiedAt: ["et sed "],
  name: ["Ut aute Lor"],
  nationality: ["nisialiqua "],
  role: ["voluptat"],
  slug: ["kwy-n"],
  teamId: [5],
  videogameId: [videogameId]
};

const range: RangeOverCsgoPlayers = {
  birthday: ["enim aut"],
  firstName: ["mollit elit in "],
  id: [4],
  lastName: ["laborum magn"],
  modifiedAt: ["non dolore"],
  name: ["in qui"],
  nationality: ["commodo ipsum"],
  role: ["ad velit elit e"],
  slug: ["kh66y7gml"]
};

const search: SearchOverCsgoPlayers = {
  birthday: "consectetu",
  firstName: "exet molli",
  lastName: "enim velit",
  name: "qui conseq",
  nationality: "aute eiusmod",
  role: "mollit ",
  slug: "-ea_h77b0"
};
const page = 1;

  const { data } = await pandascore.counterStrikePlayers.getCsgoPlayers(
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
