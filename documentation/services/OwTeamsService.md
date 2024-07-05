# OwTeamsService

A list of all methods in the `OwTeamsService` service. Click on the method name to view detailed information about that method.

| Methods                       | Description                            |
| :---------------------------- | :------------------------------------- |
| [get_ow_teams](#get_ow_teams) | List teams for the Overwatch videogame |

## get_ow_teams

List teams for the Overwatch videogame

- HTTP Method: `GET`
- Endpoint: `/ow/teams`

**Parameters**

| Name    | Type                                                | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwTeams](../models/FilterOverOwTeams.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwTeams](../models/RangeOverOwTeams.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwTeams](../models/SearchOverOwTeams.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
	token: 'YOUR_TOKEN'});

  const videogameId = VideogameId.1;

const filter: FilterOverOwTeams = {
  acronym: ["fugiat ipsum"],
  id: [8],
  location: ["ullamco"],
  modifiedAt: ["fugiat velit"],
  name: ["elit qui dolo"],
  slug: ["x-jyp7h"],
  videogameId: [videogameId]
};

const range: RangeOverOwTeams = {
  acronym: ["ex esse"],
  id: [7],
  location: ["reprehe"],
  modifiedAt: ["incididunt con"],
  name: ["utipsum pro"],
  slug: ["1jiis0"]
};

const search: SearchOverOwTeams = {
  acronym: "aliquip dolo",
  location: "et tempor ",
  name: "dolore elit e",
  slug: "b408b_"
};
const page = 1;

  const { data } = await pandascore.owTeams.getOwTeams(
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
