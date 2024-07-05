# OwPlayersService

A list of all methods in the `OwPlayersService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description                              |
| :-------------------------------- | :--------------------------------------- |
| [get_ow_players](#get_ow_players) | List players for the Overwatch videogame |

## get_ow_players

List players for the Overwatch videogame

- HTTP Method: `GET`
- Endpoint: `/ow/players`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwPlayers](../models/FilterOverOwPlayers.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwPlayers](../models/RangeOverOwPlayers.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwPlayers](../models/SearchOverOwPlayers.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

const filter: FilterOverOwPlayers = {
  active: true,
  birthday: ["Duis inc"],
  firstName: ["qui eu e"],
  id: [8],
  lastName: ["eiusmod et veli"],
  modifiedAt: ["dolore esse sin"],
  name: ["Excepteur"],
  nationality: ["eu aute minim"],
  role: ["nulla"],
  slug: ["xqs9y6xui7"],
  teamId: [3],
  videogameId: [videogameId]
};

const range: RangeOverOwPlayers = {
  birthday: ["ametco"],
  firstName: ["sint anim"],
  id: [5],
  lastName: ["quis mag"],
  modifiedAt: ["dolor occae"],
  name: ["dolore ut "],
  nationality: ["labore"],
  role: ["in anim qui mo"],
  slug: ["h4"]
};

const search: SearchOverOwPlayers = {
  birthday: "elit aliq",
  firstName: "commodo eu",
  lastName: "est vo",
  name: "mollit",
  nationality: "et oc",
  role: "irure",
  slug: "j5"
};
const page = 1;

  const { data } = await pandascore.owPlayers.getOwPlayers(
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
