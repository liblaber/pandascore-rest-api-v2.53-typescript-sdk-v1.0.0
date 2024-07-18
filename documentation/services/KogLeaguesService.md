# KogLeaguesService

A list of all methods in the `KogLeaguesService` service. Click on the method name to view detailed information about that method.

| Methods                             | Description                |
| :---------------------------------- | :------------------------- |
| [get_kog_leagues](#get_kog_leagues) | List King of Glory leagues |

## get_kog_leagues

List King of Glory leagues

- HTTP Method: `GET`
- Endpoint: `/kog/leagues`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverKogLeagues](../models/FilterOverKogLeagues.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverKogLeagues](../models/RangeOverKogLeagues.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverKogLeagues](../models/SearchOverKogLeagues.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`League[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverKogLeagues = {
    id: [2],
    modifiedAt: ['dolor dolore et'],
    name: ['quis aliquip '],
    slug: ['8vznaumh'],
    url: ['ullamco adipi'],
  };

  const range: RangeOverKogLeagues = {
    id: [9],
    modifiedAt: ['qui Duis'],
    name: ['sunt c'],
    slug: ['t'],
    url: ['ea fug'],
  };

  const search: SearchOverKogLeagues = {
    name: 'ut id',
    slug: '6nz1_90t',
    url: 'do ullamco labo',
  };
  const page = 1;

  const { data } = await pandascoreClient.kogLeagues.getKogLeagues({
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
