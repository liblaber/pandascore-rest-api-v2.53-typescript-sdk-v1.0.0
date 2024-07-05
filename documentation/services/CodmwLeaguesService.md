# CodmwLeaguesService

A list of all methods in the `CodmwLeaguesService` service. Click on the method name to view detailed information about that method.

| Methods                                 | Description        |
| :-------------------------------------- | :----------------- |
| [get_codmw_leagues](#get_codmw_leagues) | List CODMW leagues |

## get_codmw_leagues

List CODMW leagues

- HTTP Method: `GET`
- Endpoint: `/codmw/leagues`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverCodmwLeagues](../models/FilterOverCodmwLeagues.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverCodmwLeagues](../models/RangeOverCodmwLeagues.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverCodmwLeagues](../models/SearchOverCodmwLeagues.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filter: FilterOverCodmwLeagues = {
    id: [10],
    modifiedAt: ['non laborum ad'],
    name: ['et offici'],
    slug: ['oqvvsigbts3'],
    url: ['tempor '],
  };

  const range: RangeOverCodmwLeagues = {
    id: [2],
    modifiedAt: ['mol'],
    name: ['consectetu'],
    slug: ['bjts3073qsc'],
    url: ['amet in do'],
  };

  const search: SearchOverCodmwLeagues = {
    name: 'ad si',
    slug: 'suctm',
    url: 'essein',
  };
  const page = 1;

  const { data } = await pandascore.codmwLeagues.getCodmwLeagues({
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
