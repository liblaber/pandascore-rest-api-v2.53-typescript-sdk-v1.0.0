# KogPlayersService

A list of all methods in the `KogPlayersService` service. Click on the method name to view detailed information about that method.

| Methods                             | Description                                  |
| :---------------------------------- | :------------------------------------------- |
| [get_kog_players](#get_kog_players) | List players for the King of Glory videogame |

## get_kog_players

List players for the King of Glory videogame

- HTTP Method: `GET`
- Endpoint: `/kog/players`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogPlayers](../models/FilterOverKogPlayers.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogPlayers](../models/RangeOverKogPlayers.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogPlayers](../models/SearchOverKogPlayers.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

const filter: FilterOverKogPlayers = {
  active: true,
  birthday: ["sed aliqua "],
  firstName: ["Lorem Excep"],
  id: [7],
  lastName: ["fugia"],
  modifiedAt: ["cupidatat offic"],
  name: ["sint sed s"],
  nationality: ["do cup"],
  role: ["ut sin"],
  slug: ["3hqz8v1dpq"],
  teamId: [9],
  videogameId: [videogameId]
};

const range: RangeOverKogPlayers = {
  birthday: ["ipsum"],
  firstName: ["minim"],
  id: [7],
  lastName: ["Lorem cupidat"],
  modifiedAt: ["aliqu"],
  name: ["commodo"],
  nationality: ["voluptat"],
  role: ["mollit"],
  slug: ["iilng2yd0lq"]
};

const search: SearchOverKogPlayers = {
  birthday: "deserunt ea i",
  firstName: "Duisdolore te",
  lastName: "ut labori",
  name: "nulla qu",
  nationality: "doquis",
  role: "deserunt dol",
  slug: "a4ic2-y4z9"
};
const page = 1;

  const { data } = await pandascore.kogPlayers.getKogPlayers(
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
