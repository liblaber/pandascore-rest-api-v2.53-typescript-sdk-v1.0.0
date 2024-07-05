# OwLeaguesService

A list of all methods in the `OwLeaguesService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description            |
| :-------------------------------- | :--------------------- |
| [get_ow_leagues](#get_ow_leagues) | List Overwatch leagues |

## get_ow_leagues

List Overwatch leagues

- HTTP Method: `GET`
- Endpoint: `/ow/leagues`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwLeagues](../models/FilterOverOwLeagues.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwLeagues](../models/RangeOverOwLeagues.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwLeagues](../models/SearchOverOwLeagues.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
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

  const filter: FilterOverOwLeagues = {
    id: [9],
    modifiedAt: ['et labo'],
    name: ['pariatur ad '],
    slug: ['o'],
    url: ['tempor'],
  };

  const range: RangeOverOwLeagues = {
    id: [3],
    modifiedAt: ['nulla'],
    name: ['cillum sunt do'],
    slug: ['ir'],
    url: ['ea officia aliq'],
  };

  const search: SearchOverOwLeagues = {
    name: 'esse ',
    slug: 'z_3e2v',
    url: 'noninci',
  };
  const page = 1;

  const { data } = await pandascore.owLeagues.getOwLeagues({
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
