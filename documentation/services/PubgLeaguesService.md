# PubgLeaguesService

A list of all methods in the `PubgLeaguesService` service. Click on the method name to view detailed information about that method.

| Methods                               | Description       |
| :------------------------------------ | :---------------- |
| [get_pubg_leagues](#get_pubg_leagues) | List PUBG leagues |

## get_pubg_leagues

List PUBG leagues

- HTTP Method: `GET`
- Endpoint: `/pubg/leagues`

**Parameters**

| Name    | Type                                                        | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPubgLeagues](../models/FilterOverPubgLeagues.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPubgLeagues](../models/RangeOverPubgLeagues.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                       | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPubgLeagues](../models/SearchOverPubgLeagues.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                   | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                      | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`League[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverPubgLeagues = {
    id: [5],
    modifiedAt: ['s'],
    name: ['sint in m'],
    slug: ['uen301'],
    url: ['eiusmod'],
  };

  const range: RangeOverPubgLeagues = {
    id: [4],
    modifiedAt: ['irure Ut Lo'],
    name: ['qui al'],
    slug: ['x_hm0010'],
    url: ['nulla'],
  };

  const search: SearchOverPubgLeagues = {
    name: 'quis proid',
    slug: '2k2:_',
    url: 'nulla est',
  };
  const page = 1;

  const { data } = await pandascore.pubgLeagues.getPubgLeagues({
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
