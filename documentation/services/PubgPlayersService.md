# PubgPlayersService

A list of all methods in the `PubgPlayersService` service. Click on the method name to view detailed information about that method.

| Methods                               | Description                         |
| :------------------------------------ | :---------------------------------- |
| [get_pubg_players](#get_pubg_players) | List players for the PUBG videogame |

## get_pubg_players

List players for the PUBG videogame

- HTTP Method: `GET`
- Endpoint: `/pubg/players`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPubgPlayers](../models/FilterOverPubgPlayers.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPubgPlayers](../models/RangeOverPubgPlayers.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPubgPlayers](../models/SearchOverPubgPlayers.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

const filter: FilterOverPubgPlayers = {
  active: true,
  birthday: ["mollit aliqua"],
  firstName: ["minim"],
  id: [5],
  lastName: ["cillum id Lor"],
  modifiedAt: ["mollit non d"],
  name: ["eu commodo"],
  nationality: ["quis labore "],
  role: ["aute in n"],
  slug: ["zxq9x2"],
  teamId: [7],
  videogameId: [videogameId]
};

const range: RangeOverPubgPlayers = {
  birthday: ["dolor pariatur"],
  firstName: ["irure "],
  id: [2],
  lastName: ["mollit"],
  modifiedAt: ["adipisicin"],
  name: ["magna nulla"],
  nationality: ["do ad"],
  role: ["qui ut sint"],
  slug: ["e9d1a7giy7"]
};

const search: SearchOverPubgPlayers = {
  birthday: "eiusmod",
  firstName: "indolo",
  lastName: "mollit c",
  name: "dolor ut",
  nationality: "in non",
  role: "eu sint",
  slug: "cko5cqoy_w"
};
const page = 1;

  const { data } = await pandascore.pubgPlayers.getPubgPlayers(
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
