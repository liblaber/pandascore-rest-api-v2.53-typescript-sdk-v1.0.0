# RlLeaguesService

A list of all methods in the `RlLeaguesService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description     |
| :-------------------------------- | :-------------- |
| [get_rl_leagues](#get_rl_leagues) | List RL leagues |

## get_rl_leagues

List RL leagues

- HTTP Method: `GET`
- Endpoint: `/rl/leagues`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverRlLeagues](../models/FilterOverRlLeagues.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverRlLeagues](../models/RangeOverRlLeagues.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverRlLeagues](../models/SearchOverRlLeagues.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`League[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverRlLeagues = {
    id: [6],
    modifiedAt: ['sint anim n'],
    name: ['Lorem'],
    slug: ['j-gao561'],
    url: ['velit cill'],
  };

  const range: RangeOverRlLeagues = {
    id: [1],
    modifiedAt: ['officia'],
    name: ['anim tempo'],
    slug: ['_m'],
    url: ['aliqua'],
  };

  const search: SearchOverRlLeagues = {
    name: 'in irure',
    slug: '1:f8d1_g6',
    url: 'quideserunt ',
  };
  const page = 1;

  const { data } = await pandascore.rlLeagues.getRlLeagues({
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
