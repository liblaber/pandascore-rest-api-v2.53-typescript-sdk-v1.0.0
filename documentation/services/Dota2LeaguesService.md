# Dota2LeaguesService

A list of all methods in the `Dota2LeaguesService` service. Click on the method name to view detailed information about that method.

| Methods                                 | Description        |
| :-------------------------------------- | :----------------- |
| [get_dota2_leagues](#get_dota2_leagues) | List Dota2 leagues |

## get_dota2_leagues

List Dota2 leagues

- HTTP Method: `GET`
- Endpoint: `/dota2/leagues`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2Leagues](../models/FilterOverDota2Leagues.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2Leagues](../models/RangeOverDota2Leagues.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2Leagues](../models/SearchOverDota2Leagues.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`League[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverDota2Leagues = {
    id: [9],
    modifiedAt: ['Lor'],
    name: ['nulla offic'],
    slug: ['lfx'],
    url: ['occaeca'],
  };

  const range: RangeOverDota2Leagues = {
    id: [2],
    modifiedAt: ['pr'],
    name: ['eiusmod'],
    slug: ['xd7ojpu6:'],
    url: ['do en'],
  };

  const search: SearchOverDota2Leagues = {
    name: 'eulaboris dolor',
    slug: ':--',
    url: 'aliqu',
  };
  const page = 1;

  const { data } = await pandascore.dota2Leagues.getDota2Leagues({
    filter: filter,
    range: range,
    sort: [[]],
    search: search,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```
