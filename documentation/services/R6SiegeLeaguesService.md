# R6SiegeLeaguesService

A list of all methods in the `R6SiegeLeaguesService` service. Click on the method name to view detailed information about that method.

| Methods                                     | Description                    |
| :------------------------------------------ | :----------------------------- |
| [get_r6siege_leagues](#get_r6siege_leagues) | List Rainbow Six Siege leagues |

## get_r6siege_leagues

List Rainbow Six Siege leagues

- HTTP Method: `GET`
- Endpoint: `/r6siege/leagues`

**Parameters**

| Name    | Type                                                              | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverR6SiegeLeagues](../models/FilterOverR6SiegeLeagues.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverR6SiegeLeagues](../models/RangeOverR6SiegeLeagues.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                             | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverR6SiegeLeagues](../models/SearchOverR6SiegeLeagues.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                         | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                            | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`League[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverR6SiegeLeagues = {
    id: [8],
    modifiedAt: ['Lorem s'],
    name: ['dolor adipis'],
    slug: ['jf9jd-gsni'],
    url: ['velit'],
  };

  const range: RangeOverR6SiegeLeagues = {
    id: [5],
    modifiedAt: ['fugiat dolor'],
    name: ['officia'],
    slug: ['ropwg:n_'],
    url: ['nulla non a'],
  };

  const search: SearchOverR6SiegeLeagues = {
    name: 'exercitation L',
    slug: 'jb0skoammck',
    url: 'nostrud laboru',
  };
  const page = 1;

  const { data } = await pandascore.r6SiegeLeagues.getR6siegeLeagues({
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
