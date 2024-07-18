# CounterStrikeLeaguesService

A list of all methods in the `CounterStrikeLeaguesService` service. Click on the method name to view detailed information about that method.

| Methods                               | Description                 |
| :------------------------------------ | :-------------------------- |
| [get_csgo_leagues](#get_csgo_leagues) | List Counter-Strike leagues |

## get_csgo_leagues

List Counter-Strike leagues

- HTTP Method: `GET`
- Endpoint: `/csgo/leagues`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCsgoLeagues](../models/FilterOverCsgoLeagues.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCsgoLeagues](../models/RangeOverCsgoLeagues.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCsgoLeagues](../models/SearchOverCsgoLeagues.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`League[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverCsgoLeagues = {
    id: [7],
    modifiedAt: ['en'],
    name: ['nisi proident c'],
    slug: [':vmdx-'],
    url: ['consect'],
  };

  const range: RangeOverCsgoLeagues = {
    id: [8],
    modifiedAt: ['u'],
    name: ['ad Duis'],
    slug: ['9'],
    url: ['in cupida'],
  };

  const search: SearchOverCsgoLeagues = {
    name: 'sint in Du',
    slug: '1uyz',
    url: 'nostrud',
  };
  const page = 1;

  const { data } = await pandascoreClient.counterStrikeLeagues.getCsgoLeagues({
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
